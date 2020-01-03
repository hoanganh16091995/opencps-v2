<template>
  <div class="pt-3" style="width: 100%;">
    <v-layout row wrap class="ml-0">
      <v-flex xs12 sm12 class="text-xs-center">
        
        <v-chip label :color="stateBaoCaoView !== 'bao_cao_tinh_trang_xu_ly_ho_so' ? 'orange' : 'blue darken-1'" text-color='white' small class='mr-2 mb-3' @click="changeTabBaoCao('bao_cao_tinh_trang_xu_ly_ho_so')">
          Báo cáo tình trạng xử lý hồ sơ
        </v-chip>
        <v-chip label :color="stateBaoCaoView !== 'bao_cao_cap_phep' ? 'orange' : 'blue darken-1'" text-color='white' class='mr-2 mb-3' small @click="changeTabBaoCao('bao_cao_cap_phep')">
          Báo cáo cấp phép
        </v-chip>
        <v-chip label :color="stateBaoCaoView !== 'thong_ke_theo_nam' ? 'orange' : 'blue darken-1'" text-color='white' class='mr-2 mb-3' small @click="changeTabBaoCao('thong_ke_theo_nam')">
          Thống kê theo năm
        </v-chip>
        

        <v-card flat v-show="stateBaoCaoView == 'bao_cao_tinh_trang_xu_ly_ho_so'">
          <v-layout row wrap class="ml-0">
            <v-flex xs12 sm12>
              <v-layout row wrap class="ml-0">
                <v-flex xs12 sm2 class="text-xs-right" pt-3>
                  <span class="pr-3">Đơn vị xử lý hồ sơ</span>
                </v-flex>
                <v-flex xs12 sm4>
                  <v-select
                  v-bind:items="agencyList"
                  v-model="agencyBC"
                  label=""
                  multiple
                  clearable
                  class="input-group--focused py-0 multiselect_maxheight"
                  item-value="itemCode"
                  item-text="itemName"
                  >
              </v-select>
            </v-flex>
            <v-flex xs12 sm2 pt-3 class="text-xs-right">
              <span class="pr-3">Tình trạng xử lý hồ sơ</span>
            </v-flex>
            <v-flex xs12 sm4>
              <v-select
              v-bind:items="statusListBC"
              v-model="statusBC"
              label=""
              multiple
              clearable
              class="input-group--focused py-0 pr-3 multiselect_maxheight"
              item-value="itemCode"
              item-text="itemName"
              ></v-select>
            </v-flex>
          </v-layout>
          <v-layout row wrap class="ml-0">
            <v-flex xs12 sm2 pt-3 class="text-xs-right">
              <span class="pr-3">Từ ngày</span>
            </v-flex>
            <v-flex xs12 sm4>
              <v-menu
              ref="menuNC"
              :close-on-content-click="false"
              v-model="fromDateBC"
              :nudge-right="40"
              :return-value.sync="date"
              lazy
              transition="scale-transition"
              offset-y
              full-width
              min-width="290px"
              >
              <v-text-field
              slot="activator"
              v-model="fromDateValueBC"
              prepend-icon="event"
              class="py-0"
              clearable
              readonly
              ></v-text-field>
              <v-date-picker v-model="fromDatePickerBC" @input="parseFromDateBCTab1()"></v-date-picker>
            </v-menu>
          </v-flex>
          <v-flex xs12 sm2 pt-3 class="text-xs-right">
            <span class="pr-3">đến ngày</span>
          </v-flex>
          <v-flex xs12 sm4>
            <v-menu
            ref="menuNC"
            :close-on-content-click="false"
            v-model="toDateBC"
            :nudge-right="40"
            :return-value.sync="date"
            lazy
            transition="scale-transition"
            offset-y
            full-width
            min-width="290px"
            >
            <v-text-field
            slot="activator"
            v-model="toDateValueBC"
            prepend-icon="event"
            class="py-0 pr-3"
            clearable
            readonly
            ></v-text-field>
            <v-date-picker v-model="toDatePickerBC" @input="parseToDateBCTab1()"></v-date-picker>
                  </v-menu>
                </v-flex>
              </v-layout>
              <v-layout row wrap class="ml-0">
                <v-flex xs12 sm12 class="text-xs-right pt-3">
                  <v-btn color="primary" small @click="viewReport()">Xem báo cáo</v-btn>
                </v-flex> 
              </v-layout>
              <br>
              <v-layout row wrap class="ml-0">
                <v-flex xs12 sm12 v-if="loadingBaoCaoTab1">
                  <div class="text-xs-center" style="width: 100%; height: 500px;">
                    <v-progress-circular indeterminate v-bind:size="100" color="purple"></v-progress-circular><br>
                    <span class="">Đang tải dữ liệu</span>
                  </div>
                </v-flex>
                <v-flex xs12 sm12 v-else>
                  <object id="dossierPDFView" data style="width: 100%;" height="100%">
                    <iframe :src="baoCaoSrcTab1" style="width: 100%; padding-left: 0;" height="100%"> </iframe>
                  </object>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-card>

        <v-card flat v-show="stateBaoCaoView == 'bao_cao_cap_phep'">
                <v-layout row wrap class="ml-0">
                  <v-flex xs12 sm12>
                    <v-layout row wrap class="ml-0">
                      <v-flex xs12 sm2 pt-3 class="text-xs-right">
                        <span class="pr-3">Cơ quan cấp phép</span>
                      </v-flex>
                      <v-flex xs12 sm4>
                        <v-select
                        v-bind:items="agencyList"
                        v-model="agency2BC"
                        label=""
                        multiple
                        clearable
                        class="input-group--focused py-0 multiselect_maxheight"
                        item-value="itemCode"
                        item-text="itemName"
                        >
                        </v-select>
                      </v-flex>
                      <v-flex xs12 sm2 pt-3 class="text-xs-right">
                        <span class="pr-3">Nhóm vận tải đường bộ</span>
                      </v-flex>
                      <v-flex xs12 sm4>
                        <v-select
                        v-bind:items="groupList2"
                        v-model="group2"
                        label=""
                        clearable
                        class="input-group--focused pr-3 py-0"
                        item-value="itemCode"
                        item-text="itemName"
                        ></v-select>
                      </v-flex>
                    </v-layout>
                    <!-- <v-layout row wrap class="ml-0">
                      <v-flex xs12 sm2 pt-3 class="text-xs-right">
                        <span class="pr-3">Nhóm giấy phép</span>
                      </v-flex>
                      <v-flex xs12 sm4>
                        <v-select
                        v-bind:items="licenceGroupListBC"
                        v-model="licenceGroupBC"
                        label=""
                        clearable
                        class="input-group--focused py-0"
                        item-text="text"
                        item-value="value"
                        ></v-select>
                      </v-flex>
                      <v-flex xs12 sm2 pt-3 class="text-xs-right">
                        <span class="pr-3">Loại giấy phép</span>
                      </v-flex>
                      <v-flex xs12 sm4>
                        <v-select
                        v-bind:items="licenceListBC"
                        v-model="licence"
                        label=""
                        @change="changeLoaiGP_BC"
                        clearable
                        multiple
                        class="input-group--focused py-0 pr-3"
                        item-value="itemCode"
                        item-text="itemName"
                        ></v-select>
                      </v-flex>
                    </v-layout> -->
                    <v-layout row wrap class="ml-0">
                      <v-flex xs12 sm2 pt-3 class="text-xs-right">
                        <span class="pr-3">Từ ngày</span>
                      </v-flex>
                      <v-flex xs12 sm4>
                        <v-menu
                        ref="menuNC"
                        :close-on-content-click="false"
                        v-model="fromDate2BC"
                        :nudge-right="40"
                        :return-value.sync="date"
                        lazy
                        transition="scale-transition"
                        offset-y
                        full-width
                        min-width="290px"
                        >
                        <v-text-field
                        class="py-0"
                        slot="activator"
                        v-model="fromDateValue2BC"
                        clearable
                        prepend-icon="event"
                        readonly
                        ></v-text-field>
                        <v-date-picker v-model="fromDatePicker2BC" @input="parseFromDateBCTab2()"></v-date-picker>
                      </v-menu>
                    </v-flex>
                    <v-flex xs12 sm2 pt-3 class="text-xs-right">
                      <span class="pr-3">đến ngày</span>
                    </v-flex>
                    <v-flex xs12 sm4>
                      <v-menu
                      ref="menuNC"
                      :close-on-content-click="false"
                      v-model="toDate2BC"
                      :nudge-right="40"
                      :return-value.sync="date"
                      lazy
                      transition="scale-transition"
                      offset-y
                      full-width
                      min-width="290px"
                      >
                      <v-text-field
                      class="py-0 pr-3"
                      slot="activator"
                      v-model="toDateValue2BC"
                      prepend-icon="event"
                      clearable
                      readonly
                      ></v-text-field>
                      <v-date-picker v-model="toDatePicker2BC" @input="parseToDateBCTab2()"></v-date-picker>
                    </v-menu>
                  </v-flex>
                </v-layout>
                <v-layout row wrap class="ml-0">
                  <v-flex xs12 sm12 class="text-xs-right pt-3">
                    <v-btn color="primary" small @click="viewReport2()">Xem báo cáo</v-btn>
                    <!-- <v-btn color="primary" small dark>Xuất ra excel</v-btn> -->
                  </v-flex>   
                </v-layout>
                <br>
                    <v-layout row wrap class="ml-0">
                      <v-flex xs12 sm12 v-if="loadingBaoCaoTab2">
                        <div class="text-xs-center" style="width: 100%; height: 500px;">
                          <v-progress-circular indeterminate v-bind:size="100" color="purple"></v-progress-circular><br>
                          <span class="">Đang tải dữ liệu</span>
                        </div>
                    </v-flex>
                    <v-flex xs12 sm12 v-else>
                      <object id="dossierPDFView" data style="width: 100%;" height="100%">
                        <iframe :src="baoCaoSrcTab2" style="width: 100%; padding-left: 0;" height="100%"> </iframe>
                      </object>
                    </v-flex>
                    </v-layout>
              </v-card>

              <v-card flat v-show="stateBaoCaoView == 'thong_ke_theo_nam'">
                <v-layout row wrap class="ml-0">
                  <v-flex xs12 sm12>
                    <v-layout row wrap class="ml-0">
                      <v-flex xs12 sm2 pt-3 class="text-xs-right">
                        <span class="pr-3">Đơn vị xử lý hồ sơ</span>
                      </v-flex>
                      <v-flex xs12 sm4>
                        <v-select
                        v-bind:items="agencyList"
                        v-model="agency3BC"
                        label=""
                        multiple
                        clearable
                        class="input-group--focused py-0 multiselect_maxheight"
                        item-text="itemName"
                        item-value="itemCode"
                        >
                    </v-select>
                  </v-flex>
                </v-layout>
                <v-layout row wrap class="ml-0">
                  <v-flex xs12 sm2 pt-3 class="text-xs-right">
                    <span class="pr-3">Từ ngày</span>
                  </v-flex>
                  <v-flex xs12 sm4>
                    <v-menu
                    ref="menuNC"
                    :close-on-content-click="false"
                    v-model="fromDate5BC"
                    :nudge-right="40"
                    :return-value.sync="date"
                    lazy
                    transition="scale-transition"
                    offset-y
                    full-width
                    min-width="290px"
                    >
                    <v-text-field
                    slot="activator"
                    v-model="fromDateValue5BC"
                    prepend-icon="event"
                    clearable
                    class="py-0"
                    readonly
                    ></v-text-field>
                    <v-date-picker v-model="fromDatePicker5BC" @input="parseFromDateBCTab5()"></v-date-picker>
                  </v-menu>
                </v-flex>
                <v-flex xs12 sm2 pt-3 class="text-xs-right">
                  <span class="pr-3">đến ngày</span>
                </v-flex>
                <v-flex xs12 sm4>
                  <v-menu
                  ref="menuNC"
                  :close-on-content-click="false"
                  v-model="toDate5BC"
                  :nudge-right="40"
                  :return-value.sync="date"
                  lazy
                  transition="scale-transition"
                  offset-y
                  full-width
                  min-width="290px"
                  >
                  <v-text-field
                  slot="activator"
                  v-model="toDateValue5BC"
                  prepend-icon="event"
                  clearable
                  class="py-0 pr-3"
                  readonly
                  ></v-text-field>
                  <v-date-picker v-model="toDatePicker5BC" @input="parseToDateBCTab5()"></v-date-picker>
                </v-menu>
              </v-flex>
            </v-layout>
            <v-layout row wrap class="ml-0">
              <v-flex xs12 sm12 class="text-xs-right pt-3">
                <v-btn color="primary" small @click="viewReport5()">Xem báo cáo</v-btn>
              </v-flex>   
            </v-layout>
            <br>
            <v-layout row wrap class="ml-0">
              <v-flex xs12 sm12 v-if="loadingBaoCaoTab5">
                <div class="text-xs-center" style="width: 100%; height: 500px;">
                  <v-progress-circular indeterminate v-bind:size="100" color="purple"></v-progress-circular><br>
                  <span class="">Đang tải dữ liệu</span>
                </div>
              </v-flex> 
              <v-flex xs12 sm12 v-else>
                <object id="dossierPDFView" data style="width: 100%;" height="100%">
                  <iframe :src="baoCaoSrcTab5" style="width: 100%; padding-left: 0;" height="100%"> </iframe>
                </object>
              </v-flex>     
            </v-layout>
          </v-flex>
        </v-layout>
      </v-card>
      </v-flex>
  </v-layout>
</div>
</template>