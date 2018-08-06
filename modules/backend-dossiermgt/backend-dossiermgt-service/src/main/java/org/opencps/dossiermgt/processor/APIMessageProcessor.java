package org.opencps.dossiermgt.processor;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import org.opencps.communication.model.ServerConfig;
import org.opencps.communication.service.ServerConfigLocalServiceUtil;
import org.opencps.dossiermgt.constants.DossierDocumentTerm;
import org.opencps.dossiermgt.constants.DossierFileTerm;
import org.opencps.dossiermgt.constants.DossierPartTerm;
import org.opencps.dossiermgt.constants.DossierSyncTerm;
import org.opencps.dossiermgt.constants.DossierTerm;
import org.opencps.dossiermgt.constants.ProcessActionTerm;
import org.opencps.dossiermgt.model.Dossier;
import org.opencps.dossiermgt.model.DossierAction;
import org.opencps.dossiermgt.model.DossierDocument;
import org.opencps.dossiermgt.model.DossierFile;
import org.opencps.dossiermgt.model.DossierPart;
import org.opencps.dossiermgt.model.DossierSync;
import org.opencps.dossiermgt.model.DossierTemplate;
import org.opencps.dossiermgt.model.ProcessAction;
import org.opencps.dossiermgt.model.ProcessOption;
import org.opencps.dossiermgt.model.ServiceConfig;
import org.opencps.dossiermgt.rest.model.DossierDetailModel;
import org.opencps.dossiermgt.rest.model.DossierDocumentModel;
import org.opencps.dossiermgt.rest.model.DossierFileModel;
import org.opencps.dossiermgt.rest.model.DossierInputModel;
import org.opencps.dossiermgt.rest.model.ExecuteOneAction;
import org.opencps.dossiermgt.rest.model.PaymentFileInputModel;
import org.opencps.dossiermgt.rest.utils.OpenCPSConverter;
import org.opencps.dossiermgt.rest.utils.OpenCPSRestClient;
import org.opencps.dossiermgt.service.DossierActionLocalServiceUtil;
import org.opencps.dossiermgt.service.DossierDocumentLocalServiceUtil;
import org.opencps.dossiermgt.service.DossierFileLocalServiceUtil;
import org.opencps.dossiermgt.service.DossierLocalServiceUtil;
import org.opencps.dossiermgt.service.DossierPartLocalServiceUtil;
import org.opencps.dossiermgt.service.DossierSyncLocalServiceUtil;
import org.opencps.dossiermgt.service.DossierTemplateLocalServiceUtil;
import org.opencps.dossiermgt.service.ProcessActionLocalServiceUtil;
import org.opencps.dossiermgt.service.ProcessOptionLocalServiceUtil;
import org.opencps.dossiermgt.service.ServiceConfigLocalServiceUtil;

import com.liferay.document.library.kernel.service.DLAppLocalServiceUtil;
import com.liferay.document.library.kernel.service.DLFileEntryLocalServiceUtil;
import com.liferay.portal.kernel.exception.PortalException;
import com.liferay.portal.kernel.json.JSONArray;
import com.liferay.portal.kernel.json.JSONException;
import com.liferay.portal.kernel.json.JSONFactoryUtil;
import com.liferay.portal.kernel.json.JSONObject;
import com.liferay.portal.kernel.log.Log;
import com.liferay.portal.kernel.log.LogFactoryUtil;
import com.liferay.portal.kernel.repository.model.FileEntry;
import com.liferay.portal.kernel.util.StringPool;
import com.liferay.portal.kernel.util.Validator;

public class APIMessageProcessor extends BaseMessageProcessor {
	private static final int N_OF_RETRIES = 10;
	
	private Log _log = LogFactoryUtil.getLog(APIMessageProcessor.class);
	private OpenCPSRestClient client;
	public APIMessageProcessor(DossierSync ds) {
		super(ds);
		
		ServerConfig sc = ServerConfigLocalServiceUtil.getByCode(ds.getGroupId(), ds.getServerNo());
		try {
			client = OpenCPSRestClient.fromJSONObject(JSONFactoryUtil.createJSONObject(sc.getConfigs()));
		} catch (JSONException e) {
			e.printStackTrace();
		}
		
	}
	
	@Override
	public void processRequest() {
//		if (dossierSync.getActionCode().equals(ActionConfigTerm.ACTION_CODE_1300)) {
			dossierSync.setState(DossierSyncTerm.STATE_ALREADY_SENT);
			DossierSyncLocalServiceUtil.updateDossierSync(dossierSync);
			if (syncRequest()) {
				dossierSync.setState(DossierSyncTerm.STATE_RECEIVED_ACK);
				DossierSyncLocalServiceUtil.updateDossierSync(dossierSync);
				DossierAction dossierAction = DossierActionLocalServiceUtil.fetchDossierAction(dossierSync.getDossierActionId());
				dossierAction.setPending(false);
				DossierActionLocalServiceUtil.updateDossierAction(dossierAction);
			}
			else {
				int retry = dossierSync.getRetry();
				retry++;
				if (retry < DossierSyncTerm.MAX_RETRY) {
					dossierSync.setRetry(retry);
					dossierSync.setState(DossierSyncTerm.STATE_WAITING_SYNC);
					DossierSyncLocalServiceUtil.updateDossierSync(dossierSync);						
				}
				else {
					dossierSync.setState(DossierSyncTerm.STATE_ACK_ERROR);
					DossierSyncLocalServiceUtil.updateDossierSync(dossierSync);
				}
			}
//		}
	}	
	
	@Override
	public void processInform() {
		dossierSync.setState(DossierSyncTerm.STATE_ALREADY_SENT);
		DossierSyncLocalServiceUtil.updateDossierSync(dossierSync);
		if (syncInform()) {
			dossierSync.setState(DossierSyncTerm.STATE_RECEIVED_ACK);
			DossierSyncLocalServiceUtil.updateDossierSync(dossierSync);
			DossierAction dossierAction = DossierActionLocalServiceUtil.fetchDossierAction(dossierSync.getDossierActionId());
			dossierAction.setPending(false);
			DossierActionLocalServiceUtil.updateDossierAction(dossierAction);
		}
		else {
			int retry = dossierSync.getRetry();
			retry++;
			if (retry < DossierSyncTerm.MAX_RETRY) {
				dossierSync.setRetry(retry);
				dossierSync.setState(DossierSyncTerm.STATE_WAITING_SYNC);
				DossierSyncLocalServiceUtil.updateDossierSync(dossierSync);						
			}
			else {
				dossierSync.setState(DossierSyncTerm.STATE_ACK_ERROR);
				DossierSyncLocalServiceUtil.updateDossierSync(dossierSync);	
			}
		}
	}
	
	private boolean syncInform() {
		Dossier dossier = DossierLocalServiceUtil.getByRef(dossierSync.getGroupId(), dossierSync.getDossierRefUid());
		if (dossier == null) {
			return false;
		}
				
		String payload = dossierSync.getPayload();
		try {
			JSONObject payloadObj = JSONFactoryUtil.createJSONObject(payload);
			if (payloadObj.has(DossierSyncTerm.PAYLOAD_SYNC_FILES)) {
				JSONArray fileArrs = payloadObj.getJSONArray(DossierSyncTerm.PAYLOAD_SYNC_FILES);
				for (int i = 0; i < fileArrs.length(); i++) {
					JSONObject fileObj = fileArrs.getJSONObject(i);
					if (fileObj.has(DossierFileTerm.REFERENCE_UID)) {
						DossierFile df = DossierFileLocalServiceUtil.getDossierFileByReferenceUid(dossier.getDossierId(), fileObj.getString(DossierFileTerm.REFERENCE_UID));
						if (df != null) {
							if (df.getFileEntryId() > 0) {
								FileEntry fileEntry;
								try {
									fileEntry = DLAppLocalServiceUtil.getFileEntry(df.getFileEntryId());
									File file = DLFileEntryLocalServiceUtil.getFile(fileEntry.getFileEntryId(), fileEntry.getVersion(),
											true);
									DossierFileModel dfModel = new DossierFileModel();
									dfModel.setReferenceUid(df.getReferenceUid());
									dfModel.setDossierPartNo(df.getDossierPartNo());
									dfModel.setDisplayName(df.getDisplayName());
									dfModel.setDossierTemplateNo(df.getDossierTemplateNo());
									dfModel.setFileTemplateNo(df.getFileTemplateNo());
									dfModel.setFormData(df.getFormData());
									dfModel.setFileType(StringPool.BLANK);
									
									DossierFileModel dfResult = client.postDossierFile(file, dossier.getReferenceUid(), dfModel);
									if (dfResult == null) {
										return false;
									}
									dossierSync.setAcknowlegement(OpenCPSConverter.convertFileInputModelToJSON(dfResult).toJSONString());
									DossierSyncLocalServiceUtil.updateDossierSync(dossierSync);
								} catch (PortalException e) {
									e.printStackTrace();
								}

							}
						}
					}
				}
			}
			
			if (payloadObj.has(DossierSyncTerm.PAYLOAD_SYNC_DOCUMENTS)) {
				JSONArray fileArrs = payloadObj.getJSONArray(DossierSyncTerm.PAYLOAD_SYNC_DOCUMENTS);
				for (int i = 0; i < fileArrs.length(); i++) {
					JSONObject fileObj = fileArrs.getJSONObject(i);
					if (fileObj.has(DossierDocumentTerm.REFERENCE_UID)) {
						DossierDocument dossierDocument = DossierDocumentLocalServiceUtil.getDocByReferenceUid(dossier.getGroupId(), dossier.getDossierId(), fileObj.getString(DossierDocumentTerm.REFERENCE_UID));
						if (dossierDocument != null) {
							int retry = 0;
							
							File file = null;
							
							while (dossierDocument.getDocumentFileId() == 0) {
								try {
									Thread.sleep(1000l);
									dossierDocument = DossierDocumentLocalServiceUtil.getDocByReferenceUid(dossier.getGroupId(), dossier.getDossierId(), fileObj.getString(DossierDocumentTerm.REFERENCE_UID));
									retry++;
									if (retry > N_OF_RETRIES) break;
								} catch (InterruptedException e) {
									e.printStackTrace();
								}
								
							}
							if (dossierDocument.getDocumentFileId() > 0) {
								FileEntry fileEntry;
								try {
									fileEntry = DLAppLocalServiceUtil.getFileEntry(dossierDocument.getDocumentFileId());
									file = DLFileEntryLocalServiceUtil.getFile(fileEntry.getFileEntryId(), fileEntry.getVersion(),
											true);
								} catch (PortalException e) {
									e.printStackTrace();
								}

							}
							DossierDocumentModel model = OpenCPSConverter.convertDossierDocument(dossierDocument);
							DossierDocumentModel ddResult = client.postDossierDocument(file, dossier.getReferenceUid(), model);
							if (ddResult == null) {
								return false;
							}
						}						
					}
				}
			}
		} catch (JSONException e) {
			e.printStackTrace();
			return false;
		}
		
		//Process action
		try {
			DossierAction dossierAction = DossierActionLocalServiceUtil.fetchDossierAction(dossierSync.getDossierActionId());
			ProcessAction processAction = ProcessActionLocalServiceUtil.fetchProcessAction(dossierAction.getPreviousActionId());
			if (processAction != null && (processAction.getRequestPayment() != ProcessActionTerm.REQUEST_PAYMENT_KHONG_THAY_DOI)) {
				PaymentFileInputModel pfiModel = new PaymentFileInputModel();
				pfiModel.setApplicantIdNo(dossier.getApplicantIdNo());
				pfiModel.setApplicantName(dossier.getApplicantName());
				pfiModel.setBankInfo(StringPool.BLANK);
				pfiModel.setEpaymentProfile(StringPool.BLANK);
				pfiModel.setGovAgencyCode(dossier.getGovAgencyCode());
				pfiModel.setGovAgencyName(dossier.getGovAgencyName());
				pfiModel.setPaymentAmount(processAction.getPaymentFee());
				pfiModel.setPaymentFee(processAction.getPaymentFee());
				pfiModel.setPaymentNote(StringPool.BLANK);
				pfiModel.setReferenceUid(StringPool.BLANK);
				
				client.postPaymentFiles(dossier.getReferenceUid(), pfiModel);
			}
		}
		catch (Exception e) {
			
		}
		ExecuteOneAction actionModel = new ExecuteOneAction();
		actionModel.setActionCode(dossierSync.getActionCode());
		actionModel.setActionUser(dossierSync.getActionUser());
		actionModel.setPayload(dossierSync.getPayload());
		actionModel.setActionNote(dossierSync.getActionNote());
		
		ExecuteOneAction actionResult = client.postDossierAction(dossier.getReferenceUid(), actionModel);
		if (actionResult != null) {
			dossierSync.setAcknowlegement(OpenCPSConverter.convertExecuteOneActionToJSON(actionResult).toJSONString());
			return true;
		}
		else {
			return false;
		}		
	}
	
	private boolean syncRequest() {
		Dossier dossier = DossierLocalServiceUtil.getByRef(dossierSync.getGroupId(), dossierSync.getDossierRefUid());
		if (dossier == null) {
			return false;
		}
		
		DossierInputModel model = OpenCPSConverter.convertDossierToInputModel(dossier);
		model.setOriginality(DossierTerm.ORIGINALITY_LIENTHONG);
		model.setOnline("true");
		DossierDetailModel result = client.postDossier(model);
		if (result == null || Validator.isNull(result.getDossierId())) {
			return false;
		}
		
		dossierSync.setAcknowlegement(OpenCPSConverter.convertDossierToJSON(result).toJSONString());
		String payload = dossierSync.getPayload();
		if (dossier.getOriginDossierId() == 0) {
			try {
				JSONObject payloadObj = JSONFactoryUtil.createJSONObject(payload);
				if (payloadObj.has(DossierSyncTerm.PAYLOAD_SYNC_FILES)) {
					JSONArray fileArrs = payloadObj.getJSONArray(DossierSyncTerm.PAYLOAD_SYNC_FILES);
					
					List<DossierFileModel> lstFiles = client.getAllFilesByDossier(dossier.getReferenceUid());
					List<String> lstRefs = new ArrayList<>();
					
					for (int i = 0; i < fileArrs.length(); i++) {
						JSONObject fileObj = fileArrs.getJSONObject(i);
						if (fileObj.has(DossierFileTerm.REFERENCE_UID)) {
							lstRefs.add(fileObj.getString(DossierFileTerm.REFERENCE_UID));
						}
					}
					for (DossierFileModel df : lstFiles) {
						if (df.getDossierPartType() == DossierPartTerm.DOSSIER_PART_TYPE_INPUT
								&& !lstRefs.contains(df.getReferenceUid())) {
							//Remove file from server
							
						}
					}
					
					
					for (int i = 0; i < fileArrs.length(); i++) {
						JSONObject fileObj = fileArrs.getJSONObject(i);
						if (fileObj.has(DossierFileTerm.REFERENCE_UID)) {
							DossierFile df = DossierFileLocalServiceUtil.getDossierFileByReferenceUid(dossier.getDossierId(), fileObj.getString(DossierFileTerm.REFERENCE_UID));
							if (df != null && !df.getEForm()) {
								if (df.getFileEntryId() > 0) {
									FileEntry fileEntry;
									try {
										fileEntry = DLAppLocalServiceUtil.getFileEntry(df.getFileEntryId());
										File file = DLFileEntryLocalServiceUtil.getFile(fileEntry.getFileEntryId(), fileEntry.getVersion(),
												true);
										DossierFileModel dfModel = new DossierFileModel();
										dfModel.setReferenceUid(df.getReferenceUid());
										dfModel.setDossierPartNo(df.getDossierPartNo());
										dfModel.setDisplayName(df.getDisplayName());
										dfModel.setDossierTemplateNo(df.getDossierTemplateNo());
										dfModel.setFileTemplateNo(df.getFileTemplateNo());
										dfModel.setFormData(df.getFormData());
										dfModel.setFileType(fileEntry.getMimeType());
										
										DossierFileModel dfResult = client.postDossierFile(file, dossier.getReferenceUid(), dfModel);
										if (dfResult == null) {
											return false;
										}
										dossierSync.setAcknowlegement(OpenCPSConverter.convertFileInputModelToJSON(dfResult).toJSONString());
									} catch (PortalException e) {
										e.printStackTrace();
									}
	
								}
								else {
									
								}
							}
							else if (df != null && df.getEForm()) {
								DossierFileModel dfModel = new DossierFileModel();
								dfModel.setReferenceUid(df.getReferenceUid());
								dfModel.setDossierPartNo(df.getDossierPartNo());
								dfModel.setDisplayName(df.getDisplayName());
								dfModel.setDossierTemplateNo(df.getDossierTemplateNo());
								dfModel.setFileTemplateNo(df.getFileTemplateNo());
								dfModel.setFormData(df.getFormData());
								if (df.getFileEntryId() > 0) {
									FileEntry fileEntry;
									try {
										fileEntry = DLAppLocalServiceUtil.getFileEntry(df.getFileEntryId());
										File file = DLFileEntryLocalServiceUtil.getFile(fileEntry.getFileEntryId(), fileEntry.getVersion(),
												true);
										dfModel.setFileType(fileEntry.getMimeType());
										
										DossierFileModel dfResult = client.postDossierFileEForm(file, dossier.getReferenceUid(), dfModel);
										if (dfResult == null) {
											return false;
										}
										dossierSync.setAcknowlegement(OpenCPSConverter.convertFileInputModelToJSON(dfResult).toJSONString());							
									} catch (PortalException e) {
										e.printStackTrace();
									}
	
								}
								else {
									DossierFileModel dfResult = client.postDossierFileEForm(null, dossier.getReferenceUid(), dfModel);
									if (dfResult == null) {
										return false;
									}
									dossierSync.setAcknowlegement(OpenCPSConverter.convertFileInputModelToJSON(dfResult).toJSONString());															
								}
								
							}
							
						}
					}
				}			
			} catch (JSONException e) {
				e.printStackTrace();
				return false;
			}	
		}
		else {
			//HSLT
			try {
				JSONObject payloadObj = JSONFactoryUtil.createJSONObject(payload);
				if (payloadObj.has(DossierSyncTerm.PAYLOAD_SYNC_FILES)) {
					JSONArray fileArrs = payloadObj.getJSONArray(DossierSyncTerm.PAYLOAD_SYNC_FILES);
					
					List<DossierFileModel> lstFiles = client.getAllFilesByDossier(dossier.getReferenceUid());
					List<String> lstRefs = new ArrayList<>();
					
					for (int i = 0; i < fileArrs.length(); i++) {
						JSONObject fileObj = fileArrs.getJSONObject(i);
						if (fileObj.has(DossierFileTerm.REFERENCE_UID)) {
							lstRefs.add(fileObj.getString(DossierFileTerm.REFERENCE_UID));
						}
					}
					for (DossierFileModel df : lstFiles) {
						if (df.getDossierPartType() == DossierPartTerm.DOSSIER_PART_TYPE_INPUT
								&& !lstRefs.contains(df.getReferenceUid())) {
							//Remove file from server
							
						}
					}
					
					
					for (int i = 0; i < fileArrs.length(); i++) {
						JSONObject fileObj = fileArrs.getJSONObject(i);
						if (fileObj.has(DossierFileTerm.REFERENCE_UID)) {
							DossierFile df = DossierFileLocalServiceUtil.getDossierFileByReferenceUid(dossier.getOriginDossierId(), fileObj.getString(DossierFileTerm.REFERENCE_UID));
							String dossierPartNo = StringPool.BLANK;
							String dossierTemplateNo = StringPool.BLANK;
							String fileTemplateNo = StringPool.BLANK;
							
							ServiceConfig serviceConfig;
							try {
								serviceConfig = ServiceConfigLocalServiceUtil.getBySICodeAndGAC(dossier.getGroupId(), dossier.getServiceCode(), dossier.getGovAgencyCode());
								List<ProcessOption> lstOptions = ProcessOptionLocalServiceUtil.getByServiceProcessId(serviceConfig.getServiceConfigId());
								if (serviceConfig != null) {
									if (lstOptions.size() > 0) {
										ProcessOption processOption = lstOptions.get(0);
										
										DossierTemplate dossierTemplate = DossierTemplateLocalServiceUtil.fetchDossierTemplate(processOption.getDossierTemplateId());
										try {
											List<DossierPart> lstParts = DossierPartLocalServiceUtil.getByTemplateNo(dossier.getGroupId(), dossierTemplate.getTemplateNo());
											for (DossierPart dp : lstParts) {
												if (dp.getFileTemplateNo().equals(df.getFileTemplateNo()) && dp.getPartNo().equals(df.getDossierPartNo())) {
													dossierPartNo = dp.getPartNo();
													dossierTemplateNo = dp.getTemplateNo();
													fileTemplateNo = dp.getFileTemplateNo();
												}
											}
										} catch (PortalException e) {
											e.printStackTrace();
										}
										
										
									}
								}
							} catch (PortalException e) {
								e.printStackTrace();
							}
							
							if (df != null && !df.getEForm()) {
								if (df.getFileEntryId() > 0) {
									FileEntry fileEntry;
									try {
										fileEntry = DLAppLocalServiceUtil.getFileEntry(df.getFileEntryId());
										File file = DLFileEntryLocalServiceUtil.getFile(fileEntry.getFileEntryId(), fileEntry.getVersion(),
												true);
										DossierFileModel dfModel = new DossierFileModel();
										dfModel.setReferenceUid(df.getReferenceUid());
										dfModel.setDossierPartNo(dossierPartNo);
										dfModel.setDisplayName(df.getDisplayName());
										dfModel.setDossierTemplateNo(dossierTemplateNo);
										dfModel.setFileTemplateNo(fileTemplateNo);
										dfModel.setFormData(df.getFormData());
										dfModel.setFileType(fileEntry.getMimeType());
										
										DossierFileModel dfResult = client.postDossierFile(file, dossier.getReferenceUid(), dfModel);
										if (dfResult == null) {
											return false;
										}
										dossierSync.setAcknowlegement(OpenCPSConverter.convertFileInputModelToJSON(dfResult).toJSONString());
									} catch (PortalException e) {
										e.printStackTrace();
									}
	
								}
								else {
									
								}
							}
							else if (df != null && df.getEForm()) {
								DossierFileModel dfModel = new DossierFileModel();
								dfModel.setReferenceUid(df.getReferenceUid());
								dfModel.setDossierPartNo(dossierPartNo);
								dfModel.setDisplayName(df.getDisplayName());
								dfModel.setDossierTemplateNo(dossierTemplateNo);
								dfModel.setFileTemplateNo(fileTemplateNo);
								dfModel.setFormData(df.getFormData());
								if (df.getFileEntryId() > 0) {
									FileEntry fileEntry;
									try {
										fileEntry = DLAppLocalServiceUtil.getFileEntry(df.getFileEntryId());
										File file = DLFileEntryLocalServiceUtil.getFile(fileEntry.getFileEntryId(), fileEntry.getVersion(),
												true);
										dfModel.setFileType(fileEntry.getMimeType());
										
										DossierFileModel dfResult = client.postDossierFileEForm(file, dossier.getReferenceUid(), dfModel);
										if (dfResult == null) {
											return false;
										}
										dossierSync.setAcknowlegement(OpenCPSConverter.convertFileInputModelToJSON(dfResult).toJSONString());							
									} catch (PortalException e) {
										e.printStackTrace();
									}
	
								}
								else {
									DossierFileModel dfResult = client.postDossierFileEForm(null, dossier.getReferenceUid(), dfModel);
									if (dfResult == null) {
										return false;
									}
									dossierSync.setAcknowlegement(OpenCPSConverter.convertFileInputModelToJSON(dfResult).toJSONString());															
								}
								
							}
							
						}
					}
				}			
			} catch (JSONException e) {
				e.printStackTrace();
				return false;
			}	
		}
		//Process action
		DossierAction dossierAction = DossierActionLocalServiceUtil.fetchDossierAction(dossierSync.getDossierActionId());
		ProcessAction processAction = ProcessActionLocalServiceUtil.fetchProcessAction(dossierAction.getPreviousActionId());
		if (processAction != null && (ProcessActionTerm.REQUEST_PAYMENT_KHONG_THAY_DOI != processAction.getRequestPayment())) {
			PaymentFileInputModel pfiModel = new PaymentFileInputModel();
			pfiModel.setApplicantIdNo(dossier.getApplicantIdNo());
			pfiModel.setApplicantName(dossier.getApplicantName());
			pfiModel.setBankInfo(StringPool.BLANK);
			pfiModel.setEpaymentProfile(StringPool.BLANK);
			pfiModel.setGovAgencyCode(dossier.getGovAgencyCode());
			pfiModel.setGovAgencyName(dossier.getGovAgencyName());
			pfiModel.setPaymentAmount(processAction.getPaymentFee());
			pfiModel.setPaymentFee(processAction.getPaymentFee());
			pfiModel.setPaymentNote(StringPool.BLANK);
			pfiModel.setReferenceUid(StringPool.BLANK);
			
			client.postPaymentFiles(dossier.getReferenceUid(), pfiModel);
		}
		
		ExecuteOneAction actionModel = new ExecuteOneAction();
		actionModel.setActionCode(dossierSync.getActionCode());
		actionModel.setActionUser(dossierSync.getActionUser());
		actionModel.setActionNote(dossierSync.getActionNote());
		actionModel.setPayload(dossierSync.getPayload());
		
		ExecuteOneAction actionResult = client.postDossierAction(String.valueOf(result.getDossierId()), actionModel);
		if (actionResult != null) {
			dossierSync.setAcknowlegement(OpenCPSConverter.convertExecuteOneActionToJSON(actionResult).toJSONString());
			return true;
		}
		else {
			return false;
		}		
	}
}
