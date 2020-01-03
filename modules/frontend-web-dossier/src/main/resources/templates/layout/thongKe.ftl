<template>
  <div class="flex xs12 sm12" style="background-color: #fff;">
    <v-layout row wrap class="ml-0">
      <v-flex xs12 sm2>
        <div class="multi" id="multi"></div>
      </v-flex>
      <v-flex xs12 sm1>
        <v-subheader class="text-xs-center mb-0 pt-3">Đơn vị xử lý hồ sơ</v-subheader>
      </v-flex>
      <v-flex xs12 sm3>
        <v-select
        v-bind:items="agencyList"
        v-model="donViXuLy"
        class="multiselect_maxheight"
        label=""
        multiple
        single-line
        clearable
        item-value="itemCode"
        item-text="itemName"
        :disabled="agencyList.length < 2"
        >
        </v-select>
      </v-flex>
      <v-flex xs12 sm1>
        <v-subheader class="text-xs-center mb-0 pt-3">Tình trạng xử lý hồ sơ</v-subheader>
      </v-flex>
      <v-flex xs12 sm3>
        <v-select
        v-bind:items="statusList"
        v-model="tinhTrangXuLy"
        label=""
        multiple
        single-line="true"
        clearable
        return-object
        item-text="itemName"
        ></v-select>
      </v-flex>
      <v-flex xs12 sm2>
        <!-- <button onclick="toXLSX('tableThongKe')">Export</button> -->
        <v-btn color="primary" :disabled="loadingThongKe" class="mt-3" small @click.native="excelExportBtn()">Xuất excel</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="ml-0">
      <v-flex xs12 sm2>
      </v-flex>
      <v-flex xs12 sm1 pt-3>
        <v-subheader class="text-xs-center">Từ ngày</v-subheader>
      </v-flex>
      <v-flex xs12 sm3>
        <v-menu
            ref="menuFromDate"
            :close-on-content-click="false"
            v-model="fromDate"
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
            v-model="fromDateValue"
            prepend-icon="event"
            clearable
            class=""
            readonly
            ></v-text-field>
            <v-date-picker v-model="fromDatePicker" @input="parseFromDate()"></v-date-picker>
          </v-menu>
      </v-flex>
      <v-flex xs12 sm1 pt-3>
        <v-subheader class="text-xs-center">đến ngày</v-subheader>
      </v-flex>
      <v-flex xs12 sm3>
        <v-menu
         ref="menuToDate"
         :close-on-content-click="false"
         v-model="toDate"
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
         v-model="toDateValue"
         prepend-icon="event"
         clearable
         class=""
         readonly
         ></v-text-field>
         <v-date-picker v-model="toDatePicker" @input="parseToDate()"></v-date-picker>
       </v-menu>
      </v-flex>
      <v-flex xs12 sm2 class="mt-3">
        <v-btn color="primary" small @click="filter()">Lọc</v-btn>
      </v-flex>
    </v-layout>
  <br>
  <v-layout row wrap class="ml-0">
    <v-flex xs12 sm12 v-if="loadingThongKe">
      <div class="text-xs-center" style="width: 100%; height: 500px;">
        <v-progress-circular indeterminate v-bind:size="100" color="purple"></v-progress-circular><br>
        <span>Đang tải dữ liệu</span>
      </div>
    </v-flex>
    <v-flex xs12 sm12 v-else>
      <h3 class="text-xs-center mt-0">Thống kê tình trạng xử lý hồ sơ</h3>
      <v-data-table
      id="tableThongKe"
      v-bind:headers="headers"
      :items="tableItems"
      rows-per-page-text="Số hồ sơ trên trang"
      no-data-text="Không tìm thấy dữ liệu!"
      class=""
      >
      <!-- <template slot="headers" slot-scope="props">
        <tr>
          <th style="max-width: 120px;" v-for="(header, index) in props.headers" :key="header.text"
          :class="['column text-xs-center']"
          >
          <span>{{ header.text }}</span>
          </th>
        </tr>
      </template> -->
      <template slot="items" slot-scope="props">
        <!-- <td class="text-xs-center" style="width: 4%">{{ props.item.sequenceNumber }}</td>
        <td class="text-xs-center">{{ props.item.name }}</td>
        <td class="text-xs-center" style="width: 4%" v-if="props.item.hasOwnProperty('receiving_1')">{{ props.item.receiving_1 }}</td>
        <td class="text-xs-center" style="width: 4%" v-if="props.item.hasOwnProperty('processing_3')">{{ props.item.processing_3 }}</td>
        <td class="text-xs-center" style="width: 4%" v-if="props.item.hasOwnProperty('processing_5')">{{ props.item.processing_5 }}</td>
        <td class="text-xs-center" style="width: 4%" v-if="props.item.hasOwnProperty('processing_7')">{{ props.item.processing_7 }}</td>
        <td class="text-xs-center" style="width: 4%" v-if="props.item.hasOwnProperty('processing_1')">{{ props.item.processing_1 }}</td>
        <td class="text-xs-center" style="width: 4%" v-if="props.item.hasOwnProperty('processing_13')">{{ props.item.processing_13 }}</td>
        <td class="text-xs-center" style="width: 4%" v-if="props.item.hasOwnProperty('processing_14')">{{ props.item.processing_14 }}</td>
        <td class="text-xs-center" style="width: 4%" v-if="props.item.hasOwnProperty('done_1')">
        {{ props.item.done_1 }}</td>
        <td class="text-xs-center" style="width: 4%" v-if="props.item.hasOwnProperty('cancelled_1')">{{ props.item.cancelled_1 }}</td>
        <td class="text-xs-center" style="width: 4%" v-if="props.item.hasOwnProperty('processing_6')">{{ props.item.processing_6 }}</td>
        <td class="text-xs-center" style="width: 4%" v-if="props.item.hasOwnProperty('ended_1')">{{ props.item.ended_1 }}</td>
        <td class="text-xs-center" style="width: 4%" v-if="props.item.hasOwnProperty('done')">{{ props.item.done }}</td>
        <td class="text-xs-center" style="width: 4%">{{ props.item.totalProcessing }}</td>
        <td class="text-xs-center" style="width: 4%">{{ props.item.totalDone }}</td>
        <td class="text-xs-center" style="width: 4%">{{ props.item.totalReceiving }}</td> -->

        <td class="text-xs-center" style="width: 2%; padding-top: 8px;">{{ props.index + 1 }}</td>
        <td class="text-xs-center" style="padding-top: 8px;">
          {{getDonViByCode(props.item.govAgencyCode)}}
        </td>
        <td class="text-xs-center" @click="toDsXuLyHoSo(item, props.item.govAgencyCode)" style="padding-top: 8px; cursor: pointer;" v-for="(item, index) in props.item.data">
          <a href="javascript:;">{{item.count}}</a>
        </td>
        <td class="text-xs-center" style="padding-top: 8px;" v-if="checkVisibleTotal('processing') || tinhTrangXuLy.length === 0">
          {{props.item.totalDangxl}}
        </td>
        <td class="text-xs-center" style="padding-top: 8px;" v-if="checkVisibleTotal('done_0') || tinhTrangXuLy.length === 0">
          {{props.item.totalDaxl}}
        </td>
        <td class="text-xs-center" style="padding-top: 8px;" v-if="checkVisibleTotal('notprocessing') || tinhTrangXuLy.length === 0">
          {{props.item.totalChuaxl}}
        </td>
      </template>
      <template slot="footer">
        <td colspan="2" class="text-xs-right pl-0" style="padding-top: 8px;">
          <strong>Tổng số <span v-if="agencyList.length > 1">(tất cả các sở)</span></strong>
        </td>
        <td class="text-xs-center" style="padding-top: 8px; cursor: pointer;" v-for="item in totalFooterTK">
          <span>{{item}}</span>
        </td>
      </template>
      <template slot="pageText" slot-scope="{ pageStart, pageStop }">
        {{ pageStart }} - {{ pageStop }} của {{tableItems.length}}
      </template>
    </v-data-table>
  </v-flex>
  </v-layout>
</div>
</template>

<style>
.datatable__actions {
  float: left !important;
}
</style>

