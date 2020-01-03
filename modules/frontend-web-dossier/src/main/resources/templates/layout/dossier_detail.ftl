<!-- TODO detailTemplate page -->
<div v-if="detailPage" style="width: 100%; margin-top: 20px;">
	<input type="hidden" id="dossierId__hidden" :value="detailModel.dossierId" />
	<input type="hidden" id="submitDate__hidden" :value="detailModel.submitDate" />
	
	<div class="row-header">
		<div class="background-triangle-big"> Tên thủ tục </div>
		<div class="layout row wrap header_tools row-blue">
	
			<div class="flex xs7 sm9 solo pl-4 text-ellipsis">
		
				{{detailModel.dossierNo}} {{detailModel.serviceName}}
		
			</div>
			<div class="flex xs5 sm3 text-right" style="margin-left: auto;">
		
				<v-btn flat class=" my-0 py-0 btn-border-left" color="grey darken-1" v-on:click.native.prevent.stop="undoDetailPage()">
					<v-icon class="mr-2">undo</v-icon>
				Quay lại
				</v-btn>
                <#-- <v-btn v-if="navigationFilterview" v-on:click.native.prevent.stop="navigationFilterview = !navigationFilterview" flat icon class="mr-3 my-0 hidden-sm-and-down"><v-icon>fullscreen</v-icon></v-btn>

                <v-btn v-if="!navigationFilterview" v-on:click.native.prevent.stop="navigationFilterview = !navigationFilterview" flat icon class="mr-3 my-0 hidden-sm-and-down"><v-icon>fullscreen_exit</v-icon></v-btn>
 				-->
			</div>
	
		</div>
	
	</div>

<!-- 	<v-expansion-panel expand focusable>
  
</v-expansion-panel> -->
	
	<v-card class="pt-2">
	  	<div class="text-bold primary--text pl-2 pb-2">
	  		Thông tin chung hồ sơ: <span >{{detailModel.govAgencyName}} xử lý</span>
	  	</div>
		<v-layout wrap class="px-4 pb-3">
			<v-flex xs12 sm4>
				<div class="pb-1">
					<span>
						Tên doanh nghiệp: 
					</span>
					<span class="text-bold">
						{{ detailModel.applicantName }} 
					</span>
				</div>
				<div class="pb-1">
					<span>
						Mã tiếp nhận: 
					</span>
					<span class="text-bold">
						{{ detailModel.dossierNo }}
					</span>
					
				</div>
				<div class="pb-1">
					<span>
						Mã hồ sơ: 
					</span>
					<span class="text-bold" v-if="detailModel.online">
						{{ detailModel.referenceUid }}
					</span>
					<span class="text-bold" v-else>
						{{ detailModel.dossierIdCTN }}
					</span>
				</div>

				<div class="pb-1">
					<span>
						Trạng thái: 
					</span>
					<span class="text-bold" v-if="detailModel.dossierSubStatusText">
						{{detailModel.dossierSubStatusText}}
					</span>
					<span class="text-bold" v-else>
						{{detailModel.dossierStatusText}}
					</span>
				</div>				
			</v-flex>

		<v-flex xs12 sm4>
			<div class="pb-1">
				<span>
					Thời gian gửi: 
				</span>
				<span class="text-bold">
					{{ detailModel.submitDate }}
				</span>

			</div>
			<div class="pb-1">
				<span >
					Thời gian tiếp nhận: 
				</span>
				<span class="text-bold">
					{{ detailModel.receiveDate }}
				</span>

			</div>
			<#-- <div class="pb-1">
				<span >
					Thời hạn xử lý: 
				</span>
				<span class="text-bold">
					{{ detailModel.dueDate}}
				</span>
			</div> -->

			<div class="pb-1">
				<span>
					Chuyển bởi: 
				</span>
				<span class="text-bold">
					{{detailModel.lastActionUser}}
				</span>
			</div>
			<div>
				{{detailModel.lastActionName}}
			</div>
				<!-- <div v-html="detailModel.applicantNote">
				
				</div> -->
			</v-flex>

			<v-flex xs12 sm4>
				<div>
					<!-- <a href="javascript:;" @click.prevent.stop="showContactDetail = !showContactDetail">
						Thông tin liên hệ: <v-icon color="primary" v-if="!showContactDetail">keyboard_arrow_down</v-icon>
						<v-icon color="primary" v-if="showContactDetail">keyboard_arrow_up</v-icon>
					</a> -->
					
					<a href="javascript:;">
						Thông tin liên hệ: 
					</a>

					<v-slide-y-transition>
						<!-- <div v-if="showContactDetail"> -->
						<div>
							<div class="pb-1">
								<span>
									Tên liên hệ: 
								</span> 
								<span class="text-bold">
									{{detailModel.contactName}} <span v-if="detailModel.contactEmail && detailModel['contactEmail'].indexOf('@test.vn') === -1">| {{detailModel.contactEmail}}</span>
								</span>
							</div>
							<#-- <div class="pb-1">
								<span>
									Địa chỉ email: 
								</span>
								<span class="text-bold">
									{{detailModel.contactEmail}}
								</span>
							</div> -->
							<div class="pb-1">
								<span>
									Số điện thoại: 
								</span>
								<span class="text-bold">
									{{detailModel.contactTelNo}}
								</span>
								
							</div>
							<div class="pb-1">
								<span>
									Địa chỉ: 
								</span>
								<span class="text-bold">
									{{detailModel.wardName}},&nbsp;{{detailModel.districtName}},&nbsp;{{detailModel.cityName}}
								</span>
							</div>
							
						</div>
					</v-slide-y-transition>
					
				</div>
			</v-flex>
		</v-layout>
	</v-card>

	<v-tabs :scrollable="false" id="tabs-style-1">
		<v-tabs-bar class="grey-opencps-panel" dark>
			<v-tabs-item :href="'#tab-dossier-detail-1'">
			THÀNH PHẦN HỒ SƠ
			</v-tabs-item>
			<#-- <v-tabs-item :href="'#tab-dossier-detail-2'" @click.prevent.stop="_initchangeProcessStep();">
			THỤ LÝ HỒ SƠ
			</v-tabs-item> -->
			<v-tabs-item :href="'#tab-dossier-detail-3'" @click.prevent.stop="selectDossierActionTab(detailModel)">
			TIẾN TRÌNH XỬ LÝ
			</v-tabs-item>
			<v-tabs-item :href="'#tab-dossier-detail-4'" onclick="getContacts(1)">
			TRAO ĐỔI THÔNG TIN
			</v-tabs-item>
			<v-tabs-slider color="primary"></v-tabs-slider>
		</v-tabs-bar>
		<v-tabs-items>
			<v-tabs-content :id="'tab-dossier-detail-1'" reverse-transition="slide-y-transition" transition="slide-y-transition">
			<v-tabs :scrollable="false" v-if="processSteps.length > 0">
					<v-tabs-bar dark class="grey-opencps-panel grey-opencps-panel-group-button">
					<v-tabs-item
						v-for="step in processSteps"
						:key="step.processActionId"
						:href="'#tab-temp-' + step.processActionId"
						@click.prevent.stop="changeProcessStep(step)"
						v-if="detailModel.specialNo !== 0 && !stateOnlyFollow"
					>
                        <v-btn
                            :loading="true"
                            :disabled="true"
                            v-if="stepLoading"
                            small
                        >
                            <span slot="loader">Loading...</span>
                        </v-btn>
                        <v-btn
                            color="primary"
                            class="mx-0 my-0"
                            small
                            v-else
                        >
                            {{ step.actionName }}
                        </v-btn>
						
					</v-tabs-item>
					<div v-if="(detailModel.specialNo == 0 )">
						<i>Hồ sơ này chỉ được theo dõi</i>
					</div>
					<div v-else-if="stateOnlyFollow">
						<i>Hồ sơ này chỉ được theo dõi</i>
					</div>
					<v-menu>
					</v-menu>
					</v-tabs-bar>
				</v-tabs>
				<div id="printGP" style="display: block; width: 100%;">
					
				</div>
				<div v-if="showPrintable" class="px-4 py-3" style="background-color: #fff;">
					<table class="table table-bordered" border="0" style="width: 600px; height: auto; margin: 0 auto;" v-if="!loadingListPrints">
						<thead>
							<tr>
								<th style="width: 5%;" class="text-xs-center px-2 py-2">
									TT
								</th>
								<th class="text-xs-center px-2 py-2" style="cursor: pointer;">
									Chọn
								</th>
								<th class="text-xs-center px-2 py-2">
									Biển số xe
								</th>
								<th class="text-xs-center px-2 py-2">
									Số khung
								</th>
								<th class="text-xs-center px-2 py-2">
									Số máy
								</th>
								<th class="text-xs-center px-2 py-2">
									Màu sơn
								</th>
								<th class="text-xs-center px-2 py-2" v-if="showTemplatePrint">
									Mẫu
								</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(item, index) in listPrintItems">
								<td class="text-xs-center py-2">
									<span>{{index + 1}}</span>
								</td>
								<td class="text-xs-center py-2">
									<v-checkbox class="mt-2" style="max-width: 40px; margin: 0 auto;" v-model="selectedPrints" label="" :value="item.deliverableCode"></v-checkbox>
								</td>
								<td class="text-xs-center py-2">
									{{item.formData.RegistrationNumber}}
								</td>
								<td class="text-xs-center py-2">
									{{item.formData.ChassisNumber}}
								</td>
								<td class="text-xs-center py-2">
									{{item.formData.EngineNumber}}
								</td>
								<td class="text-xs-center py-2">
									{{item.formData.VehicleColor}}
								</td>
								<td class="text-xs-center py-2" v-if="showTemplatePrint">
									<span v-if="item.formData.hasOwnProperty('LicenceType')">{{item.formData.LicenceType}}</span>
								</td>
							</tr>
						</tbody>
					</table>
					<div v-else style="width: 100%; height: 200px;" class="text-xs-center">
						<v-progress-circular indeterminate v-bind:size="100" color="purple"></v-progress-circular> <br>
						<span>{{statusTextLoadPrint}}</span>
					</div>
				</div>
			<v-expansion-panel expand class="my-0" v-if="showBBKySo">
				<v-expansion-panel-content v-bind:value="true" class="pl-0">
				<div slot="header">
					<div class="background-triangle-small">I.</div> <span>Biên bản thẩm định</span>
				</div>
				
				<div v-if="!bbKySoFile['loading']">
					<object id="dossierPDFView" data style="overflow: hidden;" width="800px" height="100%" v-if="bbKySoFile['type'] === '#preview@pdf' && bbKySoFile['url']">
						<iframe :src="bbKySoFile['url']" width="100%" height="250px"> </iframe>
					</object>
					<div v-else-if="bbKySoFile['type'] === '#preview@pdf' && !bbKySoFile['url']">
						Không thể hiển thị được tài liệu, xin vui lòng thử lại!
					</div>

					<div id="viewBBKySoHtml" style="pointer-events: none;">
						
					</div>
				</div>
				<div class="text-xs-center" v-else style="width: 100%; height: 200px;">
					<v-progress-circular indeterminate v-bind:size="100" color="purple"></v-progress-circular>
				</div>
				</v-expansion-panel-content>
			</v-expansion-panel>
			<v-expansion-panel expand class="my-0">
				<v-expansion-panel-content v-bind:value="true" class="pl-0">
				<div slot="header">
					<div class="background-triangle-small"><span v-if="!showBBKySo">I.</span> <span v-else>II.</span></div> <span>Tài liệu nộp</span>
				</div>
				<small slot="header" class="text-gray text-right mr-4"> Những thành phần hồ sơ có dấu ( <span style="color: red;"> * </span> ) là thành phần bắt buộc</small>
				<div class="opencps_list_border_style" jx-bind="listDocumentIn" :class="{no__action_event: disabledDossierFile}" v-if="!loadingDocumentListIn"></div>
				<div class="text-xs-center" v-else style="width: 100%; height: 200px;">
					<v-progress-circular indeterminate v-bind:size="100" color="purple"></v-progress-circular>
				</div>
				</v-expansion-panel-content>
			</v-expansion-panel>
			<v-expansion-panel expand class="my-0">	
				<v-expansion-panel-content v-bind:value="true" class="pl-0">
				<div slot="header">
					<div class="background-triangle-small"><span v-if="!showBBKySo">II.</span> <span v-else>III.</span></div> <span>Kết quả</span>
				</div>
				<div class="opencps_list_border_style" jx-bind="listDocumentOut" :class="{no__action_event: disabledDossierFile}" v-if="!loadingDocumentListOut"></div> 
				<div class="text-xs-center" v-else style="width: 100%; height: 200px;">
					<v-progress-circular indeterminate v-bind:size="100" color="purple"></v-progress-circular>
				</div>
				</v-expansion-panel-content>
			</v-expansion-panel>
			<v-tabs :scrollable="false" v-if="processSteps.length > 0">
					<v-tabs-bar dark class="grey-opencps-panel grey-opencps-panel-group-button">
					<v-tabs-item
						v-for="step in processSteps"
						:key="step.processActionId + 'bt'"
						:href="'#tab-temp-' + step.processActionId + 'bt'"
						@click.prevent.stop="changeProcessStep(step)"
						v-if="detailModel.specialNo !== 0 && !stateOnlyFollow"
					>
                        <v-btn
                            :loading="true"
                            :disabled="true"
                            v-if="stepLoading"
                            small
                        >
                            <span slot="loader">Loading...</span>
                        </v-btn>
                        <v-btn
                            color="primary"
                            class="mx-0 my-0"
                            small
                            v-else
                        >
                            {{ step.actionName }}
                        </v-btn>
						
					</v-tabs-item>
					<div v-if="(detailModel.specialNo == 0 )">
						<i>Hồ sơ này chỉ được theo dõi</i>
					</div>
					<div v-else-if="stateOnlyFollow">
						<i>Hồ sơ này chỉ được theo dõi</i>
					</div>
					<v-menu>
					</v-menu>
					</v-tabs-bar>
				</v-tabs>
			</v-tabs-content>

			<v-tabs-content :id="'tab-dossier-detail-3'" reverse-transition="slide-y-transition" transition="slide-y-transition">
			<div class="opencps_list_border_style" jx-bind="listHistoryProcessing"></div>
			</v-tabs-content>
			<v-tabs-content :id="'tab-dossier-detail-4'" reverse-transition="slide-y-transition" transition="slide-y-transition">

				<div id="comments-container" class="pt-3 px-4" style="background: white;"></div>
				<div id="comments-container-pk" style="display: none;">{{detailModel.dossierId}}</div>

			</v-tabs-content>
		</v-tabs-items>
	</v-tabs>
	<v-dialog v-model="dialogThuLyHoSo" 
	persistent :overlay="false"
	:max-width="maxWidthDialog"
	style="overflow: hidden;"
	transition="dialog-transition">
	<v-card v-show="!actionsSubmitLoading">
		<v-card-title class="px-0 py-0">
			<v-toolbar dark color="primary" height="40">
				<div class="text-bold" v-if="stepModel !== null && stepModel !== undefined">{{stepModel['actionName']}}</div>
				<v-spacer></v-spacer>
				<v-toolbar-items>
					<v-btn icon dark @click.native="dialogThuLyHoSo = false">
						<v-icon>close</v-icon>
					</v-btn>
				</v-toolbar-items>
			</v-toolbar>
		</v-card-title>
		<v-card-text class="pr-0 py-0">
			<div v-if="stepModel === null" style="width: 100%; height: 400px;" class="text-xs-center center-all">
				<v-progress-circular indeterminate v-bind:size="100" color="purple"></v-progress-circular>
			</div>
			<div v-else-if="stepModel.pending">
				Hồ sơ chờ đồng bộ ...
			</div>
			<div v-else-if="stepModel['plugin']">
				<div v-if="stepModel.pdf">
					<div class="flex xs12 sm12 text-center">
						<object id="dossierPDFViewPlugin" data="" width="100%" height="100%" v-if="!stepModel.no_pdf">
							<iframe :src="stepModel.url" width="100%" style="min-height: 500px !important; padding-left: 0;"> </iframe>
						</object>
						<div id="dossierPDFViewNotFound" class="text-center">{{ stepModel.no_pdf }}</div>
					</div>
				</div>

				<div v-if="stepModel['html']">
					<input type="hidden" class="dossierFilePartNo" name="">
					<div id="alpacajs_form_plugin" class="expansion-panel__header"></div>
					<div id="dossierAlpacaNotFound" class="text-center">{{ stepModel.no_html }}</div>
				</div> 
			</div>
			<div v-else>
				<div v-if="actionsSubmitLoading" style="width: 100%; height: 300px;" class="text-xs-center center-all">
					<v-progress-circular indeterminate v-bind:size="100" color="purple"></v-progress-circular>
					<br> <span>Đang xử lý, vui lòng chờ!</span>
				</div>
				<v-card-title primary-title class="mx-2 pb-0 px-0 pt-0" v-if="stepModel.createFiles && !checkHasEform(stepModel.createFiles) && !actionsSubmitLoading">
					<v-layout wrap> 
						<v-flex xs12 id="labelTPKQ">
							File đính kèm:
						</v-flex>
					</v-layout>
				</v-card-title>
				<v-expansion-panel class="my-0 expansion__list_style" v-if="!actionsSubmitLoading">
					<v-expansion-panel-content v-for="(item,i) in stepModel.createFiles" v-if="!item.eform" :key="item.dossierPartId">
						<div slot="header" @click.prevent="showAlpacaJSFORM(item)">{{i + 1}}. {{item.partName}} <small v-if="item.eform">( Form trực tuyến )</small> </div>
						<div slot="header" class="text-right">
							<v-btn flat icon light class="small-btn-x mx-0 my-0" v-on:click.native.prevent="singleFileUpload(item)" v-if="!disableUploadAndDel">
								<v-icon>file_upload</v-icon>
							</v-btn>
							<v-btn color="primary" fab small dark class="small-btn-x mx-0 my-0" @click="viewDossierFileVersionDialog2(item, i)" :id="'btn-count-partno'+item.partNo">
								{{item.counter}}
							</v-btn>

							<v-btn flat icon light class="small-btn-x mx-0 my-0" v-on:click.native.prevent="deleteDossierFileVersion(item)" v-if="!disableUploadAndDel">
								<v-icon>delete</v-icon>
							</v-btn>
						</div>
						<input type="file" :id="'inputfile_'+item.dossierPartId" style="display:none" v-on:change="singleFileUploadInput($event, item, i)"/>
					</v-expansion-panel-content>
				</v-expansion-panel>
				<div v-if="item.eform && !actionsSubmitLoading" v-for="(item,i) in stepModel.createFiles" :key="item.dossierPartId + 'eform'">
					<div class="alert alert--outline success--text mx-4 hidden" :id="'message_success_'+item.referenceUid" >
						<i aria-hidden="true" class="material-icons icon alert__icon">check_circle</i>
						<div>
							Ghi lại {{item.partName}} Thành công!.
						</div>
					</div>
					<div class="alert alert--outline error--text mx-4 hidden" :id="'message_error_'+item.referenceUid" >
						<i aria-hidden="true" class="material-icons icon alert__icon">warning</i>
						<div>
							Ghi lại {{item.partName}} Thất bại!.
						</div>
					</div>
					<div class="text-right pr-4" v-if="item.eform">

					</div>
					<div :id="'alpacajs_form_'+item.partNo" class="expansion-panel__header"></div>
					<input type="hidden" :id="'dossierFileId' + item.partNo" :value="item.dossierFileId" />
					<input type="hidden" v-if="item.eform" :id="'validForm' + item.partNo" :data-partNo="item.partNo" class="validForm" value="0">
				</div>
				<div v-if="stepModel.configNote">
					<v-card-title primary-title class="mx-2 py-0 px-0 pt-0" v-if="!actionsSubmitLoading">
						<v-layout wrap> 
							<v-flex xs12 class="mb-3" v-if="stepModel.allowAssignUser">
								<div jx-bind="processAssignUserId"></div>
							</v-flex>
							<v-flex xs12>
								<span v-if="stepModel.configNote.displayNote">{{ stepModel.configNote.titleNote }}</span>
								<v-text-field
								name="processActionNote"
								id="processActionNote"
								multi-line
								rows="2"
								v-if="stepModel.configNote.displayNote"></v-text-field>
							</v-flex>
						</v-layout>
					</v-card-title>
					<v-card-actions class="text-xs-right mt-2">
						<v-btn color="primary" :id="'btn-save-formalpaca'+item.partNo"
						v-for="(item, index) in stepModel.createFiles"
						v-if="stepModel.hasOwnProperty('createFiles') && item.eform"
						:referenceUid="item.referenceUid"
						:dossierId="detailModel.dossierId"
						class="saveForm"
						:loading="loadingAlpacajsForm || actionsSubmitLoading"
						:disabled="loadingAlpacajsForm || actionsSubmitLoading"
						small
						> Ghi lại </v-btn>

						<v-btn color="primary"
						v-for="(item, index) in stepModel.createFiles"
						v-if="stepModel.hasOwnProperty('createFiles') && item.eform"
						:loading="loadingAlpacajsForm || actionsSubmitLoading"
						:disabled="loadingAlpacajsForm || actionsSubmitLoading"
						small
						v-on:click.native.prevent.stop="deleteDossierPDF(item)"> Hủy biên bản </v-btn>
						
						<v-btn small color="primary" class="px-0" :loading="actionsSubmitLoading || actionsSubmitLoading" :disabled="actionsSubmitLoading" v-if="stepModel.configNote.confirmButton"
						@click.prevent.stop="postNextActions2(stepModel)">{{ stepModel.configNote.confirmButton }}</v-btn>

						<v-btn small :loading="actionsSubmitLoading" class="px-0" @click.prevent.stop="refreshProcess()" v-if="stepModel.configNote.cancelButton">{{ stepModel.configNote.cancelButton }}</v-btn>
					</v-card-actions>
				</div>

				<div v-else>
					<v-card-title primary-title class="mx-2 py-0 px-0 pt-0" v-if="!actionsSubmitLoading">
						<v-layout wrap> 
							<v-flex xs12 class="mb-3" v-if="stepModel.allowAssignUser">
								<div jx-bind="processAssignUserId"></div>
							</v-flex>
							<v-flex xs12>
								Nhập ý kiến {{stepModel.actionName}}:
								<v-text-field
								name="processActionNote"
								id="processActionNote"
								multi-line
								rows="2"
								></v-text-field>
							</v-flex>
						</v-layout>
					</v-card-title>

					<v-card-actions class="text-xs-right mt-2">
						<v-btn color="primary" :id="'btn-save-formalpaca'+item.partNo"
						v-for="(item, index) in stepModel.createFiles"
						v-if="stepModel.hasOwnProperty('createFiles') && item.eform"
						:referenceUid="item.referenceUid"
						:dossierId="detailModel.dossierId"
						class="saveForm"
						:loading="loadingAlpacajsForm || actionsSubmitLoading"
						:disabled="loadingAlpacajsForm || actionsSubmitLoading"
						small
						> Ghi lại </v-btn>

						<v-btn color="primary"
						v-for="(item, index) in stepModel.createFiles"
						v-if="stepModel.hasOwnProperty('createFiles') && item.eform"
						:loading="loadingAlpacajsForm || actionsSubmitLoading"
						:disabled="loadingAlpacajsForm || actionsSubmitLoading"
						small
						v-on:click.native.prevent.stop="deleteDossierPDF(item)"> Hủy biên bản </v-btn>

						<v-btn small color="primary" class="px-0" :loading="actionsSubmitLoading" :disabled="actionsSubmitLoading"
						@click.prevent.stop="postNextActions2(stepModel)">Xác nhận</v-btn>
					</v-card-actions>
				</div>

			</div>
		</v-card-text>
	</v-card>
	<v-card v-show="actionsSubmitLoading">
		<v-card-title class="px-0 py-0" style="height: 50px;">
			<v-toolbar dark color="primary" height="40">
				<div class="text-bold" v-if="stepModel !== null && stepModel !== undefined">{{stepModel['actionName']}}</div>
				<v-spacer></v-spacer>
				<v-toolbar-items>
					<v-btn icon dark @click.native="dialogThuLyHoSo = false">
						<v-icon>close</v-icon>
					</v-btn>
				</v-toolbar-items>
			</v-toolbar>
		</v-card-title>
		<v-card-text class="text-xs-center" style="width: 100%; height: 400px;">
			 <v-progress-circular indeterminate v-bind:size="100" color="purple"></v-progress-circular>
		</v-card-text>
	</v-card>
</v-dialog> 
</div>

<style>
	@media print {
		* {
			-webkit-print-color-adjust: exact !important; /*Chrome, Safari */
			color-adjust: exact !important;  /*Firefox*/
		}
	}
</style>
			
<script type="text/javascript">
		
		function plugin0 () {
            return document.getElementById('plugin0');
        }
        var plugin = plugin0;
            
 		var fnSaveForm = function(id, value){
			var current = $("#btn-save-formalpaca" + id);
			var referentUid = current.attr("referenceUid");
			var dossierId = current.attr("dossierId");
			console.log('dossierId: ' + dossierId);
			if(referentUid){
				$.ajax({
					url : "/o/rest/v2/dossiers/"+dossierId+"/files/"+referentUid+"/formdata",
					dataType : "json",
					type : "PUT",
					async : false,
					headers: {
						"groupId": themeDisplay.getScopeGroupId(),
						Accept : "application/json"
					},
					data : {
						formdata: JSON.stringify(value)
					},
					success : function(result){
						console.log(result);
					
						$('#message_success_'+referentUid).removeClass('hidden');
						setTimeout(
							function(){ 
								$('#message_success_'+referentUid).addClass('hidden');
							}, 
						10000);
						$("#validForm" + id).val(1);
						toastr.success('Yêu cầu thực hiện thành công!')
						/*var count = $("#btn-part-kq1 > div.btn__content").html().trim() || 0;
						count ++;*/
						//$("#btn-count-partno"+id).html("1");
					},
					error : function(result){
						$('#message_error_'+referentUid).removeClass('hidden');
						setTimeout(
							function(){ 
								$('#message_error_'+referentUid).addClass('hidden');
							}, 
						10000);
						toastr.error('Yêu cầu thực hiện không thành công')
					}
				});
			}
		};
		
	     var users = [];
	     
	     var getContacts = function () {
	     var dossierIdComment = $('#comments-container-pk').text().trim();
			 $.ajax({
	            url: '/o/rest/v2/dossiers/'+dossierIdComment+'/contacts',
	            type: 'GET',
	            headers: {
	                "groupId": themeDisplay.getScopeGroupId()
	            },
	            async: false,
	            dataType: 'json',
	            data: {
	                userMapping: true
	            },
	            
	            success: function(result) {
	                if(result != null && result.hasOwnProperty('data')){
	                    var contacts = result.data;
	                    
	                    $.each(contacts, function(index, contact){
	                        var user = {};
	                        user.id = contact.userId;
	                        user.fullname = contact.userName;
	                        user.email = contact.email;
	                        user.profilePictureURL = contact.profileUrl
	                        users.push(user);
	                    });
	                  }else{
	                    users = [];
	                }
	                
	                renderComment(users);
	            },
	            error: function(){
	                users = [];
	                renderComment(users);
	            }
	        });

		};
		
		function renderComment (users) {

			var dossierId = $('#comments-container-pk').text().trim();
			var groupId = themeDisplay.getScopeGroupId();

            $('#comments-container').comments({
                profilePictureURL: 'https://viima-app.s3.amazonaws.com/media/user_profiles/user-icon.png',
                textareaRows: 1,
                enableAttachments: true,
                enableHashtags: true,
                enablePinging: true,
                postCommentOnEnter: false,
                forceResponsive: false,
                readOnly: false,
                newestText: "Mới nhất",
                oldestText: "Cũ nhất",
                popularText: "Phổ biến",
                attachmentsText: "Đính kèm",
                sendText: "Gửi",
                replyText: "Trả lời",
                editText: "Sửa",
                editedText: "Đã sửa",
                youText: "Bạn",
                saveText: "Ghi lại",
                deleteText: "Xóa",
                viewAllRepliesText: "Xem tất cả câu trả lời",
                hideRepliesText: "Ẩn câu trả lời",
                noCommentsText: "Không có bình luận nào",
                noAttachmentsText: "Không có tệp đính kèm",
                attachmentDropText: "Kéo thả tệp đính kèm",
                fieldMappings: {
                    id: 'commentId',
                    parent: 'parent',
                    userId: 'userId',
                    created: 'createdDate',
                    modified: 'modifiedDate',
                    content: 'content',
                    fileURL: 'fileUrl',
                    fileMimeType: 'fileType',
                    fileName: 'fileName',
                    pings: 'pings',
                    creator: 'userId',
                    fullname: 'fullname',
                    profileURL: 'profileUrl',
                    profilePictureURL: 'pictureUrl',
                    isNew: 'isNew',
                    createdByAdmin: 'isAdmin',
                    createdByCurrentUser: 'createdByCurrentUser',
                    upvoteCount: 'upvoteCount',
                    userHasUpvoted: 'userHasUpvoted',
                    email: 'email',
                    className: 'className',
                    classPK: 'classPK',
                },
                
                timeFormatter: function(time) {
                    
                    if(time != null){
                        
                        var dt  = time.split(/\ |\s/);
                        if(dt.length == 2){
                            var d = dt[0].split(/\-|\s/);
                        
                            return (d.slice(0,3).reverse().join('/')) + ' ' + dt[1];
                        }else{
                            return time;
                        }
                    }
                    
                    return '';
                },
                
                getUsers: function (onSuccess, onError) {
                   onSuccess(users);
                   onError();
                },
                getComments: function (onSuccess, onError) {
                    $.ajax({
                        url: '/o/rest/v2/comments/org.opencps.dossiermgt.model.Dossier/'+ dossierId,
                        type: 'GET',
                        headers: {
                            "groupId": groupId
                        },
                        async: false,
                        dataType: 'json',
                        data: {
                            
                        },
                        success: function(comments) {
                            var data = [];
                            if (comments.hasOwnProperty('data')) {
                                $.each(comments.data, function(index, comment){
                                    data.push(formatComment(comment, users));
                                });
                                onSuccess(data);
                            }
                        },
                        error: function (xhr) {
                            onSuccess([]);
                            onError();
                        }
                    });
                },
                postComment: function (data, onSuccess, onError) {
                    var strPings = data.pings.join();
                    $.ajax({
                        url: '/o/rest/v2/comments',
                        type: 'POST',
                        headers: {
                            "groupId": groupId
                        },
                        async: false,
                        dataType: 'json',
                        data: {
                            className: 'org.opencps.dossiermgt.model.Dossier',
                            classPK: dossierId,
                            parent: data.parent != null ? data.parent : 0,
                            pings: strPings,
                            content: data.content,
                            upvoteCount: data.upvoteCount
                        },
                        success: function(comment) {
                            if(comment != null){
                                onSuccess(formatComment(comment, users));
                            }else{
                                onSuccess([]);
                            }
                            
                        },
                        error: function(xhr){
                            onError();
                        }
                    });
                },
                putComment: function (data, onSuccess, onError) {
                    
                    $.ajax({
                        url: '/o/rest/v2/comments/' + data.commentId,
                        type: 'PUT',
                        headers: {
                            "groupId": groupId
                        },
                        async: false,
                        dataType: 'json',
                        data: {
                            className: 'org.opencps.dossiermgt.model.Dossier',
                            classPK: dossierId,
                            parent: data.parent != null ? data.parent : 0,
                            pings: data.pings.join(),
                            content: data.content,
                            upvoteCount: data.upvoteCount
                        },
                        success: function(comment) {
                            onSuccess(formatComment(comment, users));
                        },
                        error: function (xhr) {
                            onError();
                        }
                    });
                },
                deleteComment: function (data, onSuccess, onError) {
                   
                   	$.ajax({
                        url: '/o/rest/v2/comments/' + data.commentId,
                        type: 'DELETE',
                        data: data,
                        async: false,
                        dataType: 'json',
                        success: function(comment) {
                            onSuccess();
                        },
                        error: function(xhr){
                            onError();
                        }
                    });
                },
                upvoteComment: function (data, onSuccess, onError) {
                    
                    if(data.userHasUpvoted){
                        $.ajax({
                            url: '/o/rest/v2/comments/' + data.commentId + '/upvotes',
                            type: 'PUT',
                            headers: {
                                "groupId": groupId
                            },
                            async: false,
                            dataType: 'json',
                            data: {
                                commentId: data.commentId,
                                className: data.className,
                                classPK: data.classPK,
                                upvoteCount: data.upvoteCount
                            },
                            success: function(comment) {
                                onSuccess(formatComment(comment, users));
                            },
                            error: function(xhr){
                                onError();
                            }
                        });
                    }else{
                        $.ajax({
                            url: '/o/rest/v2/comments/' + data.commentId + '/upvotes',
                            type: 'DELETE',
                            data: {
                                commentId: data.commentId,
                                className: data.className,
                                classPK: data.classPK,
                                upvoteCount: data.upvoteCount
                            },
                            async: false,
                            dataType: 'json',
                            success: function(comment) {
                                onSuccess(formatComment(comment, users));
                                
                            },
                            error: function(xhr){
                                onError();
                            }
                        });
                    }
    
                },
                uploadAttachments: function (comments, onSuccess, onError) {
                    var responses = 0;
                    var successfulUploads = [];
    
                    var serverResponded = function() {
                        responses++;
    
                        if(responses == comments.length) {
                            
                            if(successfulUploads.length == 0) {
                                onError();
    
                            } else {
                                onSuccess(successfulUploads)
                            }
                        }
                    }
    
                    $(comments).each(function (index, comment) {
                        var formData = new FormData();
                        
                        $(Object.keys(comment)).each(function(index, key) {
                            var value = comment[key];
                            if(value) formData.append(key, value);
                        });
                        
                        formData.append('className', 'org.opencps.dossiermgt.model.Dossier');
                        
                        formData.append('classPK', dossierId);
                        
                        formData.append('parent', comment.parent != null ? comment.parent : 0);
                        
                        formData.append('fileName', comment.file.name);
                        
                        formData.append('fileType', comment.file.type);
                        
                        formData.append('fileSize', comment.file.size);
                        
                        formData.append('pings', comment.pings.join());
                        
                        formData.append('email', themeDisplay.getUserId());
                        
                        formData.append('fullname', themeDisplay.getUserName());
    
                        $.ajax({
                            url: '/o/rest/v2/comments/uploads',
                            dataType: 'json',
                            type: 'POST',
                            headers: {
                                "groupId": groupId
                            },
                            data: formData,
                            cache: false,
                            contentType: false,
                            processData: false,
                            success: function(comment) {
                                comment = formatComment(comment, users);
                                successfulUploads.push(comment);
                                serverResponded();                      
                            },
                            error: function(xhr, data) {
                                serverResponded();
                            }
                        });
                    });
                }
            });
        }
		
		function formatComment (comment, users) {
			
			if(comment.parent == 0){
				comment.parent = null;
			}
			
			if(comment.fileName == ""){
				comment.fileName = null;
			}
			
			if(comment.fileType == ""){
				comment.fileType = null;
			}
			
			if(comment.fileUrl == ""){
				comment.fileUrl = null;
			}
			
			if(comment.pictureUrl ==""){
			    comment.pictureUrl = null;
			}
			
			if(comment.profileUrl ==""){
                comment.profileUrl = null;
            }
            
            if(comment.pings ==""){
                comment.pings = null;
            }else{
                var pings = comment.pings.toString();
                var arrPings = pings.split(",");
                
               
                $(arrPings).each(function(index, id) {
                    
                    $(users).each(function(i, user) {
                       
                         if(id == user.id){
                             comment.content = comment.content.replace('@' + id, '@' + users[i].fullname);
                             return false; 
                        }
                        
                    });
                    
                });
                
            }
			
			var createdDate = new Date(comment.createDate);
			
			var createdDateText = "2017-12-12 12:12";
			
			var modifiedDate = new Date(comment.modifiedDate);
			
			var modifiedDateText = "2017-12-12 12:12";
			
			comment.createdDate = createdDateText;
			
			comment.modifiedDate = modifiedDateText;
			
			return comment;
		}

</script>
