/**
 * Copyright (c) 2000-present Liferay, Inc. All rights reserved.
 *
 * This library is free software; you can redistribute it and/or modify it under
 * the terms of the GNU Lesser General Public License as published by the Free
 * Software Foundation; either version 2.1 of the License, or (at your option)
 * any later version.
 *
 * This library is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more
 * details.
 */

package com.fds.vr.business.model;

import aQute.bnd.annotation.ProviderType;

import com.liferay.expando.kernel.model.ExpandoBridge;

import com.liferay.portal.kernel.bean.AutoEscape;
import com.liferay.portal.kernel.model.BaseModel;
import com.liferay.portal.kernel.model.CacheModel;
import com.liferay.portal.kernel.service.ServiceContext;

import java.io.Serializable;

import java.util.Date;

/**
 * The base model interface for the VRIssue service. Represents a row in the &quot;vr_issue&quot; database table, with each column mapped to a property of this class.
 *
 * <p>
 * This interface and its corresponding implementation {@link com.fds.vr.business.model.impl.VRIssueModelImpl} exist only as a container for the default property accessors generated by ServiceBuilder. Helper methods and all application logic should be put in {@link com.fds.vr.business.model.impl.VRIssueImpl}.
 * </p>
 *
 * @author LamTV
 * @see VRIssue
 * @see com.fds.vr.business.model.impl.VRIssueImpl
 * @see com.fds.vr.business.model.impl.VRIssueModelImpl
 * @generated
 */
@ProviderType
public interface VRIssueModel extends BaseModel<VRIssue> {
	/*
	 * NOTE FOR DEVELOPERS:
	 *
	 * Never modify or reference this interface directly. All methods that expect a vr issue model instance should use the {@link VRIssue} interface instead.
	 */

	/**
	 * Returns the primary key of this vr issue.
	 *
	 * @return the primary key of this vr issue
	 */
	public long getPrimaryKey();

	/**
	 * Sets the primary key of this vr issue.
	 *
	 * @param primaryKey the primary key of this vr issue
	 */
	public void setPrimaryKey(long primaryKey);

	/**
	 * Returns the ID of this vr issue.
	 *
	 * @return the ID of this vr issue
	 */
	public long getId();

	/**
	 * Sets the ID of this vr issue.
	 *
	 * @param id the ID of this vr issue
	 */
	public void setId(long id);

	/**
	 * Returns the mt core of this vr issue.
	 *
	 * @return the mt core of this vr issue
	 */
	public long getMtCore();

	/**
	 * Sets the mt core of this vr issue.
	 *
	 * @param mtCore the mt core of this vr issue
	 */
	public void setMtCore(long mtCore);

	/**
	 * Returns the dossier ID of this vr issue.
	 *
	 * @return the dossier ID of this vr issue
	 */
	public long getDossierId();

	/**
	 * Sets the dossier ID of this vr issue.
	 *
	 * @param dossierId the dossier ID of this vr issue
	 */
	public void setDossierId(long dossierId);

	/**
	 * Returns the stamp issue no of this vr issue.
	 *
	 * @return the stamp issue no of this vr issue
	 */
	@AutoEscape
	public String getStampIssueNo();

	/**
	 * Sets the stamp issue no of this vr issue.
	 *
	 * @param stampIssueNo the stamp issue no of this vr issue
	 */
	public void setStampIssueNo(String stampIssueNo);

	/**
	 * Returns the applied date of this vr issue.
	 *
	 * @return the applied date of this vr issue
	 */
	public Date getAppliedDate();

	/**
	 * Sets the applied date of this vr issue.
	 *
	 * @param appliedDate the applied date of this vr issue
	 */
	public void setAppliedDate(Date appliedDate);

	/**
	 * Returns the approved date of this vr issue.
	 *
	 * @return the approved date of this vr issue
	 */
	public Date getApprovedDate();

	/**
	 * Sets the approved date of this vr issue.
	 *
	 * @param approvedDate the approved date of this vr issue
	 */
	public void setApprovedDate(Date approvedDate);

	/**
	 * Returns the vehicle class of this vr issue.
	 *
	 * @return the vehicle class of this vr issue
	 */
	@AutoEscape
	public String getVehicleClass();

	/**
	 * Sets the vehicle class of this vr issue.
	 *
	 * @param vehicleClass the vehicle class of this vr issue
	 */
	public void setVehicleClass(String vehicleClass);

	/**
	 * Returns the applicant profile ID of this vr issue.
	 *
	 * @return the applicant profile ID of this vr issue
	 */
	public long getApplicantProfileId();

	/**
	 * Sets the applicant profile ID of this vr issue.
	 *
	 * @param applicantProfileId the applicant profile ID of this vr issue
	 */
	public void setApplicantProfileId(long applicantProfileId);

	/**
	 * Returns the applicant name of this vr issue.
	 *
	 * @return the applicant name of this vr issue
	 */
	@AutoEscape
	public String getApplicantName();

	/**
	 * Sets the applicant name of this vr issue.
	 *
	 * @param applicantName the applicant name of this vr issue
	 */
	public void setApplicantName(String applicantName);

	/**
	 * Returns the applicant address of this vr issue.
	 *
	 * @return the applicant address of this vr issue
	 */
	@AutoEscape
	public String getApplicantAddress();

	/**
	 * Sets the applicant address of this vr issue.
	 *
	 * @param applicantAddress the applicant address of this vr issue
	 */
	public void setApplicantAddress(String applicantAddress);

	/**
	 * Returns the applicant representative of this vr issue.
	 *
	 * @return the applicant representative of this vr issue
	 */
	@AutoEscape
	public String getApplicantRepresentative();

	/**
	 * Sets the applicant representative of this vr issue.
	 *
	 * @param applicantRepresentative the applicant representative of this vr issue
	 */
	public void setApplicantRepresentative(String applicantRepresentative);

	/**
	 * Returns the applicant representative title of this vr issue.
	 *
	 * @return the applicant representative title of this vr issue
	 */
	@AutoEscape
	public String getApplicantRepresentativeTitle();

	/**
	 * Sets the applicant representative title of this vr issue.
	 *
	 * @param applicantRepresentativeTitle the applicant representative title of this vr issue
	 */
	public void setApplicantRepresentativeTitle(
		String applicantRepresentativeTitle);

	/**
	 * Returns the applicant email of this vr issue.
	 *
	 * @return the applicant email of this vr issue
	 */
	@AutoEscape
	public String getApplicantEmail();

	/**
	 * Sets the applicant email of this vr issue.
	 *
	 * @param applicantEmail the applicant email of this vr issue
	 */
	public void setApplicantEmail(String applicantEmail);

	/**
	 * Returns the applicant phone of this vr issue.
	 *
	 * @return the applicant phone of this vr issue
	 */
	@AutoEscape
	public String getApplicantPhone();

	/**
	 * Sets the applicant phone of this vr issue.
	 *
	 * @param applicantPhone the applicant phone of this vr issue
	 */
	public void setApplicantPhone(String applicantPhone);

	/**
	 * Returns the applicant fax of this vr issue.
	 *
	 * @return the applicant fax of this vr issue
	 */
	@AutoEscape
	public String getApplicantFax();

	/**
	 * Sets the applicant fax of this vr issue.
	 *
	 * @param applicantFax the applicant fax of this vr issue
	 */
	public void setApplicantFax(String applicantFax);

	/**
	 * Returns the applicant contact name of this vr issue.
	 *
	 * @return the applicant contact name of this vr issue
	 */
	@AutoEscape
	public String getApplicantContactName();

	/**
	 * Sets the applicant contact name of this vr issue.
	 *
	 * @param applicantContactName the applicant contact name of this vr issue
	 */
	public void setApplicantContactName(String applicantContactName);

	/**
	 * Returns the applicant contact email of this vr issue.
	 *
	 * @return the applicant contact email of this vr issue
	 */
	@AutoEscape
	public String getApplicantContactEmail();

	/**
	 * Sets the applicant contact email of this vr issue.
	 *
	 * @param applicantContactEmail the applicant contact email of this vr issue
	 */
	public void setApplicantContactEmail(String applicantContactEmail);

	/**
	 * Returns the applicant contact phone of this vr issue.
	 *
	 * @return the applicant contact phone of this vr issue
	 */
	@AutoEscape
	public String getApplicantContactPhone();

	/**
	 * Sets the applicant contact phone of this vr issue.
	 *
	 * @param applicantContactPhone the applicant contact phone of this vr issue
	 */
	public void setApplicantContactPhone(String applicantContactPhone);

	/**
	 * Returns the production plant ID of this vr issue.
	 *
	 * @return the production plant ID of this vr issue
	 */
	public long getProductionPlantId();

	/**
	 * Sets the production plant ID of this vr issue.
	 *
	 * @param productionPlantId the production plant ID of this vr issue
	 */
	public void setProductionPlantId(long productionPlantId);

	/**
	 * Returns the production plant code of this vr issue.
	 *
	 * @return the production plant code of this vr issue
	 */
	@AutoEscape
	public String getProductionPlantCode();

	/**
	 * Sets the production plant code of this vr issue.
	 *
	 * @param productionPlantCode the production plant code of this vr issue
	 */
	public void setProductionPlantCode(String productionPlantCode);

	/**
	 * Returns the production plant name of this vr issue.
	 *
	 * @return the production plant name of this vr issue
	 */
	@AutoEscape
	public String getProductionPlantName();

	/**
	 * Sets the production plant name of this vr issue.
	 *
	 * @param productionPlantName the production plant name of this vr issue
	 */
	public void setProductionPlantName(String productionPlantName);

	/**
	 * Returns the production plant address of this vr issue.
	 *
	 * @return the production plant address of this vr issue
	 */
	@AutoEscape
	public String getProductionPlantAddress();

	/**
	 * Sets the production plant address of this vr issue.
	 *
	 * @param productionPlantAddress the production plant address of this vr issue
	 */
	public void setProductionPlantAddress(String productionPlantAddress);

	/**
	 * Returns the remarks of this vr issue.
	 *
	 * @return the remarks of this vr issue
	 */
	@AutoEscape
	public String getRemarks();

	/**
	 * Sets the remarks of this vr issue.
	 *
	 * @param remarks the remarks of this vr issue
	 */
	public void setRemarks(String remarks);

	/**
	 * Returns the method of issue of this vr issue.
	 *
	 * @return the method of issue of this vr issue
	 */
	@AutoEscape
	public String getMethodOfIssue();

	/**
	 * Sets the method of issue of this vr issue.
	 *
	 * @param methodOfIssue the method of issue of this vr issue
	 */
	public void setMethodOfIssue(String methodOfIssue);

	/**
	 * Returns the total in document of this vr issue.
	 *
	 * @return the total in document of this vr issue
	 */
	public long getTotalInDocument();

	/**
	 * Sets the total in document of this vr issue.
	 *
	 * @param totalInDocument the total in document of this vr issue
	 */
	public void setTotalInDocument(long totalInDocument);

	/**
	 * Returns the issue corporation ID of this vr issue.
	 *
	 * @return the issue corporation ID of this vr issue
	 */
	public long getIssueCorporationId();

	/**
	 * Sets the issue corporation ID of this vr issue.
	 *
	 * @param issueCorporationId the issue corporation ID of this vr issue
	 */
	public void setIssueCorporationId(long issueCorporationId);

	/**
	 * Returns the verify corporation ID of this vr issue.
	 *
	 * @return the verify corporation ID of this vr issue
	 */
	@AutoEscape
	public String getVerifyCorporationId();

	/**
	 * Sets the verify corporation ID of this vr issue.
	 *
	 * @param verifyCorporationId the verify corporation ID of this vr issue
	 */
	public void setVerifyCorporationId(String verifyCorporationId);

	/**
	 * Returns the digitalissuestatus of this vr issue.
	 *
	 * @return the digitalissuestatus of this vr issue
	 */
	public int getDigitalissuestatus();

	/**
	 * Sets the digitalissuestatus of this vr issue.
	 *
	 * @param digitalissuestatus the digitalissuestatus of this vr issue
	 */
	public void setDigitalissuestatus(int digitalissuestatus);

	/**
	 * Returns the issue type of this vr issue.
	 *
	 * @return the issue type of this vr issue
	 */
	@AutoEscape
	public String getIssueType();

	/**
	 * Sets the issue type of this vr issue.
	 *
	 * @param issueType the issue type of this vr issue
	 */
	public void setIssueType(String issueType);

	/**
	 * Returns the average stb quantity of this vr issue.
	 *
	 * @return the average stb quantity of this vr issue
	 */
	public int getAverageSTBQuantity();

	/**
	 * Sets the average stb quantity of this vr issue.
	 *
	 * @param averageSTBQuantity the average stb quantity of this vr issue
	 */
	public void setAverageSTBQuantity(int averageSTBQuantity);

	/**
	 * Returns the max month quantity of this vr issue.
	 *
	 * @return the max month quantity of this vr issue
	 */
	public int getMaxMonthQuantity();

	/**
	 * Sets the max month quantity of this vr issue.
	 *
	 * @param maxMonthQuantity the max month quantity of this vr issue
	 */
	public void setMaxMonthQuantity(int maxMonthQuantity);

	/**
	 * Returns the average stm quantity of this vr issue.
	 *
	 * @return the average stm quantity of this vr issue
	 */
	public int getAverageSTMQuantity();

	/**
	 * Sets the average stm quantity of this vr issue.
	 *
	 * @param averageSTMQuantity the average stm quantity of this vr issue
	 */
	public void setAverageSTMQuantity(int averageSTMQuantity);

	/**
	 * Returns the accumulated month quantity of this vr issue.
	 *
	 * @return the accumulated month quantity of this vr issue
	 */
	public int getAccumulatedMonthQuantity();

	/**
	 * Sets the accumulated month quantity of this vr issue.
	 *
	 * @param accumulatedMonthQuantity the accumulated month quantity of this vr issue
	 */
	public void setAccumulatedMonthQuantity(int accumulatedMonthQuantity);

	/**
	 * Returns the total in use of this vr issue.
	 *
	 * @return the total in use of this vr issue
	 */
	public int getTotalInUse();

	/**
	 * Sets the total in use of this vr issue.
	 *
	 * @param totalInUse the total in use of this vr issue
	 */
	public void setTotalInUse(int totalInUse);

	/**
	 * Returns the total cancelled of this vr issue.
	 *
	 * @return the total cancelled of this vr issue
	 */
	public int getTotalCancelled();

	/**
	 * Sets the total cancelled of this vr issue.
	 *
	 * @param totalCancelled the total cancelled of this vr issue
	 */
	public void setTotalCancelled(int totalCancelled);

	/**
	 * Returns the total lost of this vr issue.
	 *
	 * @return the total lost of this vr issue
	 */
	public int getTotalLost();

	/**
	 * Sets the total lost of this vr issue.
	 *
	 * @param totalLost the total lost of this vr issue
	 */
	public void setTotalLost(int totalLost);

	/**
	 * Returns the total not used of this vr issue.
	 *
	 * @return the total not used of this vr issue
	 */
	public int getTotalNotUsed();

	/**
	 * Sets the total not used of this vr issue.
	 *
	 * @param totalNotUsed the total not used of this vr issue
	 */
	public void setTotalNotUsed(int totalNotUsed);

	/**
	 * Returns the total returned of this vr issue.
	 *
	 * @return the total returned of this vr issue
	 */
	public int getTotalReturned();

	/**
	 * Sets the total returned of this vr issue.
	 *
	 * @param totalReturned the total returned of this vr issue
	 */
	public void setTotalReturned(int totalReturned);

	/**
	 * Returns the flow of this vr issue.
	 *
	 * @return the flow of this vr issue
	 */
	@AutoEscape
	public String getFlow();

	/**
	 * Sets the flow of this vr issue.
	 *
	 * @param flow the flow of this vr issue
	 */
	public void setFlow(String flow);

	/**
	 * Returns the examination required of this vr issue.
	 *
	 * @return the examination required of this vr issue
	 */
	@AutoEscape
	public String getExaminationRequired();

	/**
	 * Sets the examination required of this vr issue.
	 *
	 * @param examinationRequired the examination required of this vr issue
	 */
	public void setExaminationRequired(String examinationRequired);

	/**
	 * Returns the examination period of this vr issue.
	 *
	 * @return the examination period of this vr issue
	 */
	@AutoEscape
	public String getExaminationPeriod();

	/**
	 * Sets the examination period of this vr issue.
	 *
	 * @param examinationPeriod the examination period of this vr issue
	 */
	public void setExaminationPeriod(String examinationPeriod);

	/**
	 * Returns the examination last time of this vr issue.
	 *
	 * @return the examination last time of this vr issue
	 */
	public Date getExaminationLastTime();

	/**
	 * Sets the examination last time of this vr issue.
	 *
	 * @param examinationLastTime the examination last time of this vr issue
	 */
	public void setExaminationLastTime(Date examinationLastTime);

	/**
	 * Returns the copresult of this vr issue.
	 *
	 * @return the copresult of this vr issue
	 */
	@AutoEscape
	public String getCopresult();

	/**
	 * Sets the copresult of this vr issue.
	 *
	 * @param copresult the copresult of this vr issue
	 */
	public void setCopresult(String copresult);

	/**
	 * Returns the copreportno of this vr issue.
	 *
	 * @return the copreportno of this vr issue
	 */
	@AutoEscape
	public String getCopreportno();

	/**
	 * Sets the copreportno of this vr issue.
	 *
	 * @param copreportno the copreportno of this vr issue
	 */
	public void setCopreportno(String copreportno);

	/**
	 * Returns the copreportdate of this vr issue.
	 *
	 * @return the copreportdate of this vr issue
	 */
	public Date getCopreportdate();

	/**
	 * Sets the copreportdate of this vr issue.
	 *
	 * @param copreportdate the copreportdate of this vr issue
	 */
	public void setCopreportdate(Date copreportdate);

	/**
	 * Returns the postreview of this vr issue.
	 *
	 * @return the postreview of this vr issue
	 */
	@AutoEscape
	public String getPostreview();

	/**
	 * Sets the postreview of this vr issue.
	 *
	 * @param postreview the postreview of this vr issue
	 */
	public void setPostreview(String postreview);

	/**
	 * Returns the postreviewrecordno of this vr issue.
	 *
	 * @return the postreviewrecordno of this vr issue
	 */
	@AutoEscape
	public String getPostreviewrecordno();

	/**
	 * Sets the postreviewrecordno of this vr issue.
	 *
	 * @param postreviewrecordno the postreviewrecordno of this vr issue
	 */
	public void setPostreviewrecordno(String postreviewrecordno);

	/**
	 * Returns the postreviewrecorddate of this vr issue.
	 *
	 * @return the postreviewrecorddate of this vr issue
	 */
	public Date getPostreviewrecorddate();

	/**
	 * Sets the postreviewrecorddate of this vr issue.
	 *
	 * @param postreviewrecorddate the postreviewrecorddate of this vr issue
	 */
	public void setPostreviewrecorddate(Date postreviewrecorddate);

	/**
	 * Returns the corporation ID of this vr issue.
	 *
	 * @return the corporation ID of this vr issue
	 */
	@AutoEscape
	public String getCorporationId();

	/**
	 * Sets the corporation ID of this vr issue.
	 *
	 * @param corporationId the corporation ID of this vr issue
	 */
	public void setCorporationId(String corporationId);

	/**
	 * Returns the inspectorcode of this vr issue.
	 *
	 * @return the inspectorcode of this vr issue
	 */
	@AutoEscape
	public String getInspectorcode();

	/**
	 * Sets the inspectorcode of this vr issue.
	 *
	 * @param inspectorcode the inspectorcode of this vr issue
	 */
	public void setInspectorcode(String inspectorcode);

	/**
	 * Returns the inspectorname of this vr issue.
	 *
	 * @return the inspectorname of this vr issue
	 */
	@AutoEscape
	public String getInspectorname();

	/**
	 * Sets the inspectorname of this vr issue.
	 *
	 * @param inspectorname the inspectorname of this vr issue
	 */
	public void setInspectorname(String inspectorname);

	/**
	 * Returns the leadername of this vr issue.
	 *
	 * @return the leadername of this vr issue
	 */
	@AutoEscape
	public String getLeadername();

	/**
	 * Sets the leadername of this vr issue.
	 *
	 * @param leadername the leadername of this vr issue
	 */
	public void setLeadername(String leadername);

	/**
	 * Returns the applicantmaker of this vr issue.
	 *
	 * @return the applicantmaker of this vr issue
	 */
	@AutoEscape
	public String getApplicantmaker();

	/**
	 * Sets the applicantmaker of this vr issue.
	 *
	 * @param applicantmaker the applicantmaker of this vr issue
	 */
	public void setApplicantmaker(String applicantmaker);

	/**
	 * Returns the applicantchecker of this vr issue.
	 *
	 * @return the applicantchecker of this vr issue
	 */
	@AutoEscape
	public String getApplicantchecker();

	/**
	 * Sets the applicantchecker of this vr issue.
	 *
	 * @param applicantchecker the applicantchecker of this vr issue
	 */
	public void setApplicantchecker(String applicantchecker);

	/**
	 * Returns the inspector ID of this vr issue.
	 *
	 * @return the inspector ID of this vr issue
	 */
	public long getInspectorId();

	/**
	 * Sets the inspector ID of this vr issue.
	 *
	 * @param inspectorId the inspector ID of this vr issue
	 */
	public void setInspectorId(long inspectorId);

	/**
	 * Returns the issue inspector ID of this vr issue.
	 *
	 * @return the issue inspector ID of this vr issue
	 */
	public long getIssueInspectorId();

	/**
	 * Sets the issue inspector ID of this vr issue.
	 *
	 * @param issueInspectorId the issue inspector ID of this vr issue
	 */
	public void setIssueInspectorId(long issueInspectorId);

	/**
	 * Returns the verify inspector ID of this vr issue.
	 *
	 * @return the verify inspector ID of this vr issue
	 */
	public long getVerifyInspectorId();

	/**
	 * Sets the verify inspector ID of this vr issue.
	 *
	 * @param verifyInspectorId the verify inspector ID of this vr issue
	 */
	public void setVerifyInspectorId(long verifyInspectorId);

	/**
	 * Returns the modify date of this vr issue.
	 *
	 * @return the modify date of this vr issue
	 */
	public Date getModifyDate();

	/**
	 * Sets the modify date of this vr issue.
	 *
	 * @param modifyDate the modify date of this vr issue
	 */
	public void setModifyDate(Date modifyDate);

	/**
	 * Returns the sync date of this vr issue.
	 *
	 * @return the sync date of this vr issue
	 */
	public Date getSyncDate();

	/**
	 * Sets the sync date of this vr issue.
	 *
	 * @param syncDate the sync date of this vr issue
	 */
	public void setSyncDate(Date syncDate);

	@Override
	public boolean isNew();

	@Override
	public void setNew(boolean n);

	@Override
	public boolean isCachedModel();

	@Override
	public void setCachedModel(boolean cachedModel);

	@Override
	public boolean isEscapedModel();

	@Override
	public Serializable getPrimaryKeyObj();

	@Override
	public void setPrimaryKeyObj(Serializable primaryKeyObj);

	@Override
	public ExpandoBridge getExpandoBridge();

	@Override
	public void setExpandoBridgeAttributes(BaseModel<?> baseModel);

	@Override
	public void setExpandoBridgeAttributes(ExpandoBridge expandoBridge);

	@Override
	public void setExpandoBridgeAttributes(ServiceContext serviceContext);

	@Override
	public Object clone();

	@Override
	public int compareTo(VRIssue vrIssue);

	@Override
	public int hashCode();

	@Override
	public CacheModel<VRIssue> toCacheModel();

	@Override
	public VRIssue toEscapedModel();

	@Override
	public VRIssue toUnescapedModel();

	@Override
	public String toString();

	@Override
	public String toXmlString();
}