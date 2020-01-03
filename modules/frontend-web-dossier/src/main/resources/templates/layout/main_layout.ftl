  <!-- TODO paymentViewJX template one page -->
  <div id="dossierViewJX_form_template" class="hidden">
    <div class="jx-content-wrap">
      <v-layout wrap>
        <v-flex xs12 sm12>  
          <#include "menu_top.ftl">
        </v-flex>
        <v-flex xs12 sm12 class="text-xs-center mb-3" v-if="!detailPage && !detailRegistPage && stageFilterView !== 'tra_cuu_giay_phep' && stageFilterView !== 'thong_ke' && stageFilterView !== 'bao_cao'">
          <v-layout row wrap>
            <v-flex xs12 sm1>

            </v-flex>
            <v-flex xs12 sm10 style="display: inline-flex; ">
              <v-text-field
              placeholder="Tìm kiếm theo mã hồ sơ/ tên thủ tục"
              v-model="keywordsSearch"
              style="width : 350px;"
              @keyup.enter="searchKeyWord"
              clearable
              ></v-text-field>
              <v-select
              :items="govAgencysItemsMain"
              v-model="govAgencySearch2"
              item-text="itemName"
              style="max-width: 305px; margin-left: 20px;"
              item-value="itemCode"
              v-if="govAgencysItemsMain.length >= 2"
              placeholder="Chọn cơ quan thực hiện"
              clearable
              ></v-select>
              <v-select
              :items="yearItems"
              v-model="yearSearch"
              item-text="text"
              style="margin-left: 20px; max-width: 120px;"
              item-value="value"
              placeholder="Chọn năm"
              clearable
              ></v-select>
              <v-btn small :disabled="loadingDanhSachHoSoTable" class="mt-3" color="primary" @click.native="searchKeyWord">Tìm kiếm</v-btn>
              <v-btn small :disabled="loadingDanhSachHoSoTable" class="mt-3" color="primary" @click.native="dialogSearch = !dialogSearch">Tìm kiếm nâng cao</v-btn>
            </v-flex>
            <v-flex xs12 sm1>

            </v-flex>
            <!-- <v-flex xs12 sm3>
            </v-flex>
            <v-flex xs12 sm6 style="display: inline-flex;">
            </v-flex>
            <v-flex xs12 sm3>
            </v-flex> -->
          </v-layout>
        </v-flex>
        <v-flex xs12 sm12>
          <v-dialog
            v-model="dialogSearch"
            persistent :overlay="false"
            max-width="600px"
            transition="dialog-transition"
          >
            <v-card>
              <v-toolbar dark color="primary" height="40">
              <div class="text-bold">Tìm kiếm nâng cao</div>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                  <v-btn icon dark @click.native="dialogSearch = false">
                    <v-icon>close</v-icon>
                  </v-btn>
                </v-toolbar-items>
              </v-toolbar>
              <v-card-text>
                <v-layout row wrap>
                  <v-flex xs12 sm12 class="ml-4">
                    <v-select
                    :items="serviceInfoFilterItems"
                    v-model="serviceInfo"
                    item-text="serviceName"
                    item-value="serviceCode"
                    label="Tên thủ tục"
                    clearable
                    ></v-select>
                  </v-flex>
                  <v-flex xs12 sm12 class="ml-4">
                    <v-select
                    :items="applicantNameFilterItems"
                    v-model="applicantIdNo"
                    item-text="applicantName"
                    item-value="applicantIdNo"
                    label="Tên doanh nghiệp"
                    clearable
                    ></v-select>
                  </v-flex>
                  <v-flex xs12 sm6 class="pl-4">
                    <v-menu
                    ref="startDateMenu"
                    :close-on-content-click="false"
                    v-model="startDateMenu"
                    :nudge-right="40"
                    :return-value.sync="date"
                    lazy
                    transition="scale-transition"
                    offset-y
                    full-width
                    max-width="290px"
                    min-width="290px"
                    >
                    <v-text-field
                    slot="activator"
                    v-model="startDate"
                    prepend-icon="event"
                    clearable
                    label="Từ ngày"
                    ></v-text-field>
                    <v-date-picker v-model="dateStartDate" @input="parseStartDate()"></v-date-picker>
                  </v-menu>
                    <!-- <v-menu
                    ref="startDateMenu"
                    :close-on-content-click="false"
                    v-model="startDateMenu"
                    :nudge-right="40"
                    lazy
                    transition="scale-transition"
                    offset-y
                    full-width
                    max-width="290px"
                    min-width="290px"
                    >
                    <v-text-field
                    slot="activator"
                    v-model="startDate"
                    persistent-hint
                    prepend-icon="event"
                    label="Từ ngày"
                    clearable
                    ></v-text-field>
                    <v-date-picker v-model="startDate" no-title @input="startDateMenu = false"></v-date-picker>
                  </v-menu> -->
                </v-flex>
                <v-flex xs12 sm6 class="pl-3">
                  <v-menu
                    ref="endDateMenu"
                    :close-on-content-click="false"
                    v-model="endDateMenu"
                    :nudge-right="40"
                    :return-value.sync="date"
                    lazy
                    transition="scale-transition"
                    offset-y
                    full-width
                    max-width="290px"
                    min-width="290px"
                    >
                    <v-text-field
                    slot="activator"
                    v-model="endDate"
                    prepend-icon="event"
                    label="Đến ngày"
                    clearable
                    ></v-text-field>
                    <v-date-picker v-model="dateEndDate" @input="parseEndDate()"></v-date-picker>
                  </v-menu>

                  <!-- <v-menu
                  ref="endDateMenu"
                  :close-on-content-click="false"
                  v-model="endDateMenu"
                  :nudge-right="40"
                  lazy
                  transition="scale-transition"
                  offset-y
                  full-width
                  max-width="290px"
                  min-width="290px"
                  >
                  <v-text-field
                  slot="activator"
                  v-model="endDate"
                  persistent-hint
                  label="Đến ngày"
                  prepend-icon="event"
                  clearable
                  ></v-text-field>
                  <v-date-picker v-model="endDate" no-title @input="endDateMenu = false"></v-date-picker>
                </v-menu> -->
              </v-flex>
              <v-flex xs12 sm6 class="pl-4">
                <v-select
                :items="dossierStatusItems"
                v-model="dossierStatus"
                item-text="itemName"
                item-value="itemCode"
                label="Trạng thái"
                clearable
                ></v-select>
              </v-flex>
              <v-flex xs12 sm6 class="pl-3">
                <v-text-field
                v-model="dossierNo"
                label="Mã tiếp nhận"
                clearable
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 class="pl-4">
                <v-text-field
                v-model="referenceUid"
                label="Mã số hồ sơ"
                clearable
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 class="text-xs-right">
                <v-select
                class="ml-3"
                :items="govAgencysItems"
                v-model="govAgencySearch"
                item-text="itemName"
                item-value="itemCode"
                label="Cơ quan"
                clearable
                ></v-select>
              </v-flex>
              <v-flex xs12 sm6>
                
              </v-flex>
              <v-flex xs12 sm6 class="text-xs-right">
                <v-btn color="primary" small class="mt-3" @click.native="searchAdvanceDossier">Tìm kiếm</v-btn>
              </v-flex>
            </v-layout>
          </v-card-text>
            </v-card>
          </v-dialog>
          <v-dialog
            v-model="dialogViewFile"
            scrollable 
            persistent :overlay="false"
            max-width="900px"
            transition="dialog-transition"
          >
            <v-card>
              <v-card-title class="px-0 py-0" style="height: 50px;">
                <v-toolbar dark color="primary" height="40">
                  <div class="text-bold">File tài liệu</div>
                  <v-spacer></v-spacer>
                  <v-toolbar-items>
                    <v-btn icon dark @click.native="dialogViewFile = false">
                      <v-icon>close</v-icon>
                    </v-btn>
                  </v-toolbar-items>
                </v-toolbar>
              </v-card-title>
              <v-card-text class="pt-0 px-0" style="overflow: hidden;">
                <div v-if="blobFileSrc !== '' && blobFileSrc !== null" style="/*display:  inline-flex; align-items: center;*/ width: 100%;">
                  <div class="text-xs-center mb-2" style="width: 100%;">
                    <v-btn :disabled="indexFile === 0" color="primary" small @click="prevFile()"><v-icon style="font-size: 16px;">arrow_back</v-icon> Sau</v-btn>
                    <v-btn :disabled="indexFile === dossierFilesView.length - 1" color="primary" class="ml-2" small @click="nextFile()">Tiếp <v-icon style="font-size: 16px;">arrow_forward</v-icon></v-btn>
                  </div>
                  <object id="dossierPDFView" data style="width: 100%;" height="100%" v-if="blobFileSrc">
                    <iframe :src="blobFileSrc" style="width: 100%; padding-left: 0;" height="100%"> </iframe>
                  </object>
                  <div v-else style="height: 500px; width: 100%; text-align: center;">Tài liệu không có trong hệ thống</div>
                </div>
                <div v-else class="text-xs-center center-all" style="height: 500px; width: 100%;">
                  <v-progress-circular indeterminate v-bind:size="100" color="purple"></v-progress-circular>
                </div>
                
              </v-card-text>
            </v-card>
          </v-dialog>

          <v-dialog
            v-model="dialogViewLogs"
            scrollable 
            persistent :overlay="false"
            max-width="900px"
            transition="dialog-transition"
          >
            <v-card>
              <v-card-title class="px-0 py-0" style="height: 50px;">
                <v-toolbar dark color="primary" height="40">
                  <div class="text-bold">Tin nhắn trao đổi</div>
                  <v-spacer></v-spacer>
                  <v-toolbar-items>
                    <v-btn icon dark @click.native="dialogViewLogs = false">
                      <v-icon>close</v-icon>
                    </v-btn>
                  </v-toolbar-items>
                </v-toolbar>
              </v-card-title>
              <v-card-text class="pt-0 px-0 py-0">
                <div v-if="listHistoryProcessingItems.length > 0" class="table__overflow elevation-1 table_history_style">
                  <v-data-table
                  :items="listHistoryProcessingItems"
                  hide-headers
                  hide-actions>
                    <template slot="items" slot-scope="props">
                      <td style="padding-top: 15px;">{{ props.index + 1 }}</td>
                      <td style="padding-top: 15px;" class="text-xs-left">
                        <p> Ông/bà <b>{{ props.item.author }}</b> 
                          <span class="text-blue">( {{ props.item.payload.stepName }} )</span>
                          <br/>
                          <span class="text-light-gray">{{ props.item.createDate }}</span>
                        </p>
                        <span>Ý kiến: </span> <span v-html="props.item.content"></span> <br>
                      </td>
                    </template>
                  </v-data-table>
                </div>
                <div v-else class="text-xs-center center-all" style="height: 500px; width: 100%;">
                  <v-progress-circular indeterminate v-bind:size="100" color="purple"></v-progress-circular>
                </div>
              </v-card-text>
            </v-card>
          </v-dialog>
        </v-flex>
      </v-layout>
      <v-slide-x-transition>
        <div class="layout wrap" style="padding: 0 15px;" v-if="stageFilterView === 'tra_cuu_hoso' && !detailPage && !detailRegistPage ">
        
          <#include "tra_cuu_hoso.ftl">

        </div>

        <div class="layout wrap" style="padding: 0 15px;" v-else-if="stageFilterView === 'tra_cuu_phuong_tien' && !detailPage && !detailRegistPage ">
        
          <#include "tra_cuu_phuong_tien.ftl">

        </div>

        <div class="layout wrap" style="padding: 0 15px;" v-else-if="stageFilterView === 'tra_cuu_thong_tin_doanh_nghiep' && !detailRegistPage ">
        
          <#include "tra_cuu_thong_tin_doanh_nghiep.ftl">

        </div>

        <div class="layout wrap" style="padding: 0 15px;" v-else-if="stageFilterView === 'tra_cuu_giay_phep' && !detailTraCuuGiayPhepPage ">        
		      <v-dialog v-if="popUpPrintTraCuu" v-model="dialog" fullscreen hide-overlay>
		        <v-card style="height: 2000px;">
		          <v-toolbar dark color="primary">
		            <v-btn icon dark @click.native="popUpPrintTraCuu = false">
		              <v-icon>close</v-icon>
		            </v-btn>
		            <v-toolbar-title>In giấy phép</v-toolbar-title>
		            <v-spacer></v-spacer>
		            <v-toolbar-items>
		              <!-- <v-btn dark flat v-on:click="printDeliverable()">
		                <v-icon>print</v-icon>
		              	In ấn
		              </v-btn> -->
		              <v-btn id="btnSavePrintTemplate" dark flat @click.native="savePrintTemplate()">
		                <v-icon>save</v-icon>
		              	Lưu lại
		              </v-btn>
		            </v-toolbar-items>
		          </v-toolbar>
		          <div style="text-align: center;">
					  <v-flex xs12 sm12 style="position: relative;">
					  	<img id ="imgTraCuu" style="display:none;">
					  	<div id="printTraCuu">
					  	</div>
					  </v-flex>
				  </div>
		        </v-card>
		      </v-dialog>      									
  
        	<#include "tra_cuu_giay_phep.ftl">

        </div>

        <div class="layout wrap" style="padding: 0 15px;" v-else-if="stageFilterView !== 'tra_cuu' && stageFilterView !== 'thong_ke' && stageFilterView !== 'bao_cao' && !detailPage && !detailRegistPage ">
        
          <#include "danh_sach_hoso.ftl">

        </div>

        <div class="layout wrap" style="padding: 0 15px;" v-else-if="stageFilterView == 'thong_ke' && !detailPage && !detailRegistPage ">
        
          <#include "thongKe.ftl">

        </div>

        <div class="layout wrap" style="padding: 0 15px;" v-else-if="stageFilterView == 'bao_cao' && !detailPage && !detailRegistPage ">
        
          <#include "baoCao.ftl">

        </div>
      </v-slide-x-transition>

      <v-slide-x-transition>
        <div class="layout wrap" v-if="detailPage" style="padding: 0 15px;">
        
          <#include "dossier_detail.ftl">

        </div>
      </v-slide-x-transition>
	
	   <v-slide-x-transition>
        <div class="layout wrap" v-if="detailRegistPage" style="padding: 0 15px;">
        
          <#include "regist_detail.ftl">

        </div>
      </v-slide-x-transition>

      <v-slide-x-transition>
        <div class="layout wrap" v-if="detailTraCuuGiayPhepPage" style="padding: 0 15px;">
        
          <#include "thong_tin_xe.ftl">

        </div>
      </v-slide-x-transition>
      
      <v-fab-transition>
        <v-btn color="primary" dark fixed bottom right fab ripple v-show="offsetTop > 200"
        v-on:click.native="onScrollTop">
          <v-icon>keyboard_arrow_up</v-icon>
        </v-btn>
      </v-fab-transition>
      
    </div>
  </div>

  <style>
    ul > li.active {
      background-color: #dcd9d9 !important;
    }
    #navigation {
      display: none !important;
    }
    #content {
      padding-top: 0 !important;
    }
    #column-1 {
      padding: 0 !important;
    }
    div#main-content .portlet-layout {
      margin-left: -30px;
      margin-right: -30px;
    }
    body.open #wrapper {
      margin-left: 0 !important;
      padding-left: 0 !important;
    }
    .list {
      margin-bottom: 0 !important;
    }
  </style>
  <style>
    .history__download__link:hover{
      background-color: whitesmoke;
      cursor: pointer;
      font-family: 'Roboto-Bold';
      border-radius: 4px;
    }
  </style>