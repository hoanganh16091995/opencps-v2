var funLoadVue = function(stateWindowParam, dossierIdParam, dossierPartNo, emailAddress, agencies, isAdminUser, workUnit) {
  const config = {
    headers: {
      'groupId': themeDisplay.getScopeGroupId()
    }
  };

  const configPage = {
    pageSize: 15,
    serviceinfosQuocTe: 'BGTVT0600001,BGTVT0600002,BGTVT0600003,BGTVT0600004,BGTVT0600019,BGTVT0600020,BGTVT0600021,BGTVT0600022,BGTVT0600058,BGTVT0600059,BGTVT0600060',
    serviceinfosLienVan: 'BGTVT0600005,BGTVT0600006,BGTVT0600007,BGTVT0600008,BGTVT0600009,BGTVT0600010,BGTVT0600011,BGTVT0600012,BGTVT0600023,BGTVT0600024,BGTVT0600025,BGTVT0600026,BGTVT0600027,BGTVT0600028,BGTVT0600029,BGTVT0600036,BGTVT0600037,BGTVT0600038,BGTVT0600039,BGTVT0600040,BGTVT0600041,BGTVT0600042,BGTVT0600043,BGTVT0600018,BGTVT0600035,BGTVT0600047,BGTVT0600048,BGTVT0600049,BGTVT0600050,BGTVT0600051,BGTVT0600052,BGTVT0600053,BGTVT0600054,BGTVT0600055,BGTVT0600057,BGTVT0600061,BGTVT0600062,BGTVT0600063,BGTVT0600064,BGTVT0600065',
    serviceinfosChapThuan: 'BGTVT0600013,BGTVT0600014,BGTVT0600015,BGTVT0600016,BGTVT0600017,BGTVT0600030,BGTVT0600031,BGTVT0600032,BGTVT0600033,BGTVT0600034,BGTVT0600044,BGTVT0600045,BGTVT0600046,BGTVT0600056'
  };

  const listServiceCodePrint = ["BGTVT0600001", "BGTVT0600002", "BGTVT0600003", "BGTVT0600004", "BGTVT0600005", "BGTVT0600006", "BGTVT0600007", "BGTVT0600008", "BGTVT0600009", "BGTVT0600010", "BGTVT0600011", "BGTVT0600012", "BGTVT0600013", "BGTVT0600014", "BGTVT0600015", "BGTVT0600016", "BGTVT0600017", "BGTVT0600018", "BGTVT0600019", "BGTVT0600020", "BGTVT0600021", "BGTVT0600022", "BGTVT0600023", "BGTVT0600024", "BGTVT0600025", "BGTVT0600026", "BGTVT0600027", "BGTVT0600028", "BGTVT0600029", "BGTVT0600030", "BGTVT0600031", "BGTVT0600032", "BGTVT0600033", "BGTVT0600034", "BGTVT0600035", "BGTVT0600036", "BGTVT0600037", "BGTVT0600038", "BGTVT0600039", "BGTVT0600040", "BGTVT0600041", "BGTVT0600042", "BGTVT0600043", "BGTVT0600044", "BGTVT0600045", "BGTVT0600046", "BGTVT0600047", "BGTVT0600048", "BGTVT0600049", "BGTVT0600050", "BGTVT0600051", "BGTVT0600052", "BGTVT0600053", "BGTVT0600054", "BGTVT0600055", "BGTVT0600056", "BGTVT0600057", "BGTVT0600058", "BGTVT0600059", "BGTVT0600060", "BGTVT0600061", "BGTVT0600062", "BGTVT0600063", "BGTVT0600064", "BGTVT0600065"];
  const listSericeCode2Print = ["BGTVT0600005", "BGTVT0600006", "BGTVT0600007", "BGTVT0600008", "BGTVT0600009", "BGTVT0600010", "BGTVT0600011", "BGTVT0600012", "BGTVT0600023", "BGTVT0600024", "BGTVT0600025", "BGTVT0600026", "BGTVT0600027", "BGTVT0600028", "BGTVT0600029", "BGTVT0600048", "BGTVT0600049", "BGTVT0600050", "BGTVT0600051", "BGTVT0600052", "BGTVT0600053", "BGTVT0600054", "BGTVT0600055"];
  const listChinaSericeCodePrint = ["BGTVT0600036", "BGTVT0600037", "BGTVT0600038", "BGTVT0600039", "BGTVT0600040", "BGTVT0600041", "BGTVT0600042", "BGTVT0600043"];

  const MAX_RETRY = 200;
  var nOfRetry = 0;

  var dossierViewJX = new VueJX({
    el: 'dossierViewJX',
    pk: 1,
    groupid: themeDisplay.getScopeGroupId(),
    data: {
      currentPrintTemplate: {},
      popUpPrintTraCuu: false,
      offsetTop: 0,
      stageFilterView: null,
      detailPage: false,
      detailRegistPage: false,
      viewmore: false,
      detailModel: {},
      detailRegistModel: {},
      xem_them: 'Không tìm thấy hồ sơ nào',
      hoso_title_table: 'Danh sách hồ sơ',
      processSteps: [],
      stepModel: null,
      showContactDetail: false,
      dossierFiles: [],
      dossierFilesView: [],
      indexFile: 0,
      statusParamFilter: null,
      substatusParamFilter: null,
      loadingAlpacajsForm: false,
      stepLoading: false,
      actionsSubmitLoading: false,
      popupResultFile: false,
      traCuuFilter: false,
      registForms: [],
      alapcaJSRei: {},
      menu: false,
      dateFormatted: null,
      advanced_filter: false,
      alpacaAssignUserId: 0,
      subUsers: [],
      currentCounter: 0,
      currentCounterTemp: 0,
      listgroupHoSoFilterselectedIndex: -1,
      advancedFilterServiceInfo: {},
      advancedFilterLoaiSanPham: {},
      advancedFilterNhanHieu: {},
      advancedFilterDossierStatus: {},
      stateOnlyFollow: false,
      menuTuNgay: '',
      menuDenNgay: '',
      modelLienVan: {
        so_dang_ky: 'asdfgh',
        historys: [{
          loai: 1,
          cua_khau: '12345678',
          thong_tin_lai_xe: 'asdfghjasdfgh',
          giay_phep_lai_xe: 'asdfghjasdfgh',
          thoi_gian: '1/1/2018'
        }]
      },
      modelVehicle: {
        registrationNumber: '',
        capacity: '',
        manufacturedYear: '',
        trademarkCode: '',
        trademarkName: '',
        chassisNumber: '',
        engineNumber: '',
        vehicleColor: ''
      },
      vehicleHeaders: [{
          text: 'Thông tin',
          value: 'name'
        },
        {
          text: 'Giá trị',
          value: 'value'
        }
      ],
      vehicleItems: [],
      giayPhepVanTaiQuocTeTableheaders: [{
          text: 'STT',
          align: 'center',
          sortable: false,
          value: 'stt'
        },
        {
          text: 'Tên giấy phép. Gíây phép - Số giấy phép',
          align: 'left',
          sortable: true,
          value: 'deliverableCode'
        },
        {
          text: 'Tên doanh nghiệp được cấp phép',
          align: 'left',
          sortable: true,
          value: 'applicantName'
        },
        {
          text: 'Cơ quan cấp',
          align: 'left',
          sortable: true,
          value: 'coQuan'
        },
        {
          text: 'Hiệu lực giấy phép',
          align: 'left',
          sortable: true,
          value: 'hieuLuc'
        },
        {
          text: 'Thao tác',
          align: 'left',
          sortable: true,
          value: 'thaoTac'
        }
      ],
      giayPhepVanTaiQuocTeTableItems: [],
      pageGiayPhepVanTaiQuocTeTableLength: 0,
      pageGiayPhepVanTaiQuocTeTable: 1,
      giayPhepLienVanTableheaders: [{
          text: 'STT',
          align: 'center',
          sortable: false,
          value: 'stt'
        },
        {
          text: 'Tên giấy phép. Gíây phép - Số giấy phép',
          align: 'left',
          sortable: true,
          value: 'deliverableCode'
        },
        {
          text: 'Số đăng ký phương tiện Đơn vị khai thác',
          align: 'left',
          sortable: true,
          value: 'applicantName'
        },
        {
          text: 'Cơ quan cấp phép',
          align: 'left',
          sortable: true,
          value: 'coQuan'
        },
        {
          text: 'Hiệu lực giấy phép',
          align: 'left',
          sortable: true,
          value: 'hieuLuc'
        },
        {
          text: 'Thao tác',
          align: 'left',
          sortable: true,
          value: 'thaoTac'
        }
      ],
      giayPhepLienVanTableItems: [],
      pageGiayPhepLienVanTableLength: 0,
      pageGiayPhepLienVanTable: 1,

      chapThuanKhaiThacTableheaders: [{
          text: 'STT',
          align: 'center',
          sortable: false,
          value: 'stt'
        },
        {
          text: 'Tên giấy phép. Gíây phép - Số giấy phép',
          align: 'left',
          sortable: true,
          value: 'so_giay_phep'
        },
        {
          text: 'Doanh nghiệp đăng ký khai thác',
          align: 'left',
          sortable: true,
          value: 'doanh_nghiep'
        },
        {
          text: 'Tuyến khai thác',
          align: 'left',
          sortable: true,
          value: 'tuyen_khai_thac'
        },
        {
          text: 'Cơ quan cấp phép',
          align: 'left',
          sortable: true,
          value: 'co_quan'
        },
        {
          text: 'Số xe tham gia Hiệu lực khai thác',
          align: 'left',
          sortable: true,
          value: 'hieu_luc'
        },
        {
          text: 'Thao tác',
          align: 'left',
          sortable: true,
          value: 'thao_tac'
        }
      ],
      chapThuanKhaiThacTableItems: [],
      pageChapThuanKhaiThacTableLength: 0,
      pageChapThuanKhaiThacTable: 1,

      stateTraCuuGiayPhep: 'giay_phep_van_tai_quoc_te',
      detailTraCuuGiayPhepPage: false,
      serviceInfos: [{
          serviceCode: 111,
          serviceName: 'thu tuc1'
        },
        {
          serviceCode: 1222,
          serviceName: 'thu tuc2'
        },
        {
          serviceCode: 333,
          serviceName: 'thu tuc3'
        }
      ],
      govAgencys: [{
          govAgencyName: 1233,
          govAgencyCode: '123'
        },
        {
          govAgencyName: 1234,
          govAgencyCode: '123'
        },
        {
          govAgencyName: 1235,
          govAgencyCode: '123'
        }
      ],
      tuyens: [{
          itemCode: 1,
          itemName: 'asdf'
        },
        {
          itemCode: 1,
          itemName: 'asdf'
        },
        {
          itemCode: 1,
          itemName: 'asdf'
        },
        {
          itemCode: 1,
          itemName: 'asdf'
        }
      ],
      keywordTraCuuGiayPhep: '',
      searchTuNgay: '',
      searchDenNgay: '',
      hinhThucSelect: '',
      hinhThucs: [{
          itemCode: 'XC',
          itemName: 'Xuất cảnh'
        },
        {
          itemCode: 'NC',
          itemName: 'Nhập cảnh'
        }
      ],
      serviceInfoSelect: '',
      govAgencySelect: '',
      tuyenSelect: '',
      cuaKhaus: [{
          itemCode: 1,
          itemName: 'asdf'
        },
        {
          itemCode: 2,
          itemName: 'asdf'
        },
        {
          itemCode: 3,
          itemName: 'asdf'
        }
      ],
      cuaKhauSelect: '',
      menuThongTinXeDate: '',
      thongTinXeDate: '',
      thong_tin_lai_xe: '',
      giay_phep_lai_xe: '',
      pageHistory: 1,
      lengthPageHistory: 0,
      gradient: 'to top right, rgba(63,81,181, .7), rgba(25,32,72, .7)',
      formTemplate: {},
      thongTinXeDatePK: '',
      popUpThongTinXe: false,
      addHistoryCar: false,
      historyLienVan: [],
      dialogThuLyHoSo: false,
      dialogSearch: false,
      keywordsSearch: '',
      startDate: null,
      dateStartDate: '',
      startDateStr: '',
      startDateMenu: '',
      endDate: null,
      endDateStr: '',
      endDateMenu: '',
      dateEndDate: '',
      referenceUid: '',
      dossierNo: '',
      serviceInfo: null,
      applicantIdNo: null,
      dossierStatus: '',
      dossierStatusItems: [],
      dialogViewFile: false,
      listDocumentInItems: [],
      listDocumentOutItems: [],
      tabs: [{
          text: 'Tra cứu hồ sơ',
          value: 'tab1',
          state: 'tat_ca_ho_so'
        },
        {
          text: 'Xử lý hồ sơ',
          value: 'tab2',
          state: 'xu_ly_ho_so'
        },
        {
          text: 'Quản lý giấy phép',
          value: 'tab3',
          state: 'quan_ly_giay_phep'
        },
        {
          text: 'Quản lý vận tải quốc tế',
          value: 'tab4',
          state: 'quan_ly_van_tai_quoc_te'
        },
        {
          text: 'Một cửa điện tử',
          value: 'tab5',
          state: 'mot_cuu_dien_tu'
        }
        // {
        //   text: 'Thống kê',
        //   value: 'tab6',
        //   state: 'thong_ke'
        // },
        // {
        //   text: 'Báo cáo',
        //   value: 'tab7',
        //   state: 'bao_cao'
        // }
        // {
        // 	text: 'Quản lý phương tiện',
        // 	value: 'tab4',
        // 	state: ''
        // }
      ],
      tabActive: 'tab2',
      listgroupHoSoFilterItems: [],
      listgroupTraCuuFilterItems: [],
      serviceInfoFilterItems: [],
      applicantNameFilterItems: [],
      maxWidthDialog: '600px',
      blobFileSrc: '',
      indexListStatus: -1,
      loadingDanhSachHoSoTable: false,
      listHistoryProcessingItems: [],
      dialogViewLogs: false,
      disabledDossierFile: true,
      loadingDocumentListIn: false,
      loadingDocumentListOut: false,
      showPrintable: false,
      listPrintItems: [{
          select: false,
          so_khung: '123456',
          so_may: 'AQ12346',
          mau_son: 'Đen'
        },
        {
          select: false,
          so_khung: '123456',
          so_may: 'AQ12346',
          mau_son: 'Đen'
        },
        {
          select: false,
          so_khung: '123456',
          so_may: 'AQ12346',
          mau_son: 'Đen'
        },
        {
          select: false,
          so_khung: '123456',
          so_may: 'AQ12346',
          mau_son: 'Đen'
        },
        {
          select: false,
          so_khung: '123456',
          so_may: 'AQ12346',
          mau_son: 'Đen'
        },
        {
          select: false,
          so_khung: '123456',
          so_may: 'AQ12346',
          mau_son: 'Đen'
        }
      ],
      loadingListPrints: false,
      selectedPrints: [],
      statusTextLoadPrint: 'Đang tải danh sách in...',
      statusFirst: '',
      showBBKySo: false,
      bbKySoFile: {
        loading: true,
        type: 'pdf',
        urlFile: ''
      },
      disableUploadAndDel: false,
      govAgencysItems: [],
      govAgencySearch: '',
      loadingMenuList: false,
      isAdminUser: false,
      showTemplatePrint: false,
      listCodePH: [],

      agencyList: [],
      statusList: [],
      fromDate: false,
      toDate: false,
      fromDateValue: '',
      toDateValue: '',
      date: null,
      menuFromDate: false,
      menuToDate: false,
      tinhTrangXuLy: [],
      headers: [
        
      ],
      tableItems: [],
      donViXuLy: [],
      fromDatePicker: '',
      toDatePicker: '',
      govAgencysItemsMain: [],
      govAgencySearch2: '',
      yearItems: [
        {
          text: '----',
          value: ''
        },
        {
          text: 2018,
          value: 2018
        },
        {
          text: 2019,
          value: 2019
        },
        {
          text: 2020,
          value: 2020
        },
        {
          text: 2021,
          value: 2021
        },
        {
          text: 2022,
          value: 2022
        },
        {
          text: 2023,
          value: 2023
        },
        {
          text: 2024,
          value: 2024
        },
        {
          text: 2025,
          value: 2025
        },
        {
          text: 2026,
          value: 2026
        },
        {
          text: 2027,
          value: 2027
        },
        {
          text: 2028,
          value: 2028
        }
      ],
      yearSearch: 2020,
      totalDSHS: 0,
      loadingThongKe: false,
      totalFooterTK: {},
      _fallbacktoCSV: true,

      activeTabBaoCao: '',
      agencyListBC: [],
      agencyBC: [],
      statusListBC: [
        {
          itemCode: 'onReceiving',
          itemName: 'Hồ sơ đã tiếp nhận trực tuyến'
        },
        {
          itemCode: 'offReceiving',
          itemName: 'Hồ sơ đã tiếp nhận trực tiếp'
        },
        {
          itemCode: 'gateReceiving',
          itemName: 'Hồ sơ tiếp nhận trên cổng dịch vụ công '
        },
        {
          itemCode: 'processing',
          itemName: 'Hồ sơ đã thẩm định'
        },
        {
          itemCode: 'approving',
          itemName: 'Hồ sơ đã phê duyệt'
        },
        {
          itemCode: 'signing',
          itemName: 'Hồ sơ đã ký duyệt'
        },
        {
          itemCode: 'printing',
          itemName: 'Hồ sơ đã in'
        },
        {
          itemCode: 'receiving',
          itemName: 'Tổng số hồ sơ đã tiếp nhận'
        },
        {
          itemCode: 'done',
          itemName: 'Tổng số hồ sơ đã giải quyết (đã trả kết quả)'
        }
      ],
      statusBC: '',
      fromDateBC: false,
      fromDateValueBC: '',
      fromDatePickerBC: '',
      toDateBC: false,
      toDateValueBC: '',
      toDatePickerBC: '',
      headersBC: [],
      tableItemsBC: [],
      agencyList2BC: [],
      agency2BC: '',
      groupList2: [
        {
          itemName: 'Việt - Lào',
          itemCode: 'vietLao'
        },
        {
          itemName: 'Việt - Cam',
          itemCode: 'vietCam'
        },
        {
          itemName: 'Việt - Trung',
          itemCode: 'vietTrung'
        },
        {
          itemName: 'Việt - Lào - Cam',
          itemCode: 'vlc'
        },
        {
          itemName: 'Nhóm vận tải đường bộ',
          itemCode: 'gms'
        }
      ],
      group2: '',
      licenceGroupListBC: [],
      licenceGroupBC: '',
      licenceListBC: [],
      licence: [],
      fromDate2BC: false,
      fromDateValue2BC: '',
      fromDatePicker2BC: '',
      toDate2BC: false,
      toDateValue2BC: '',
      toDatePicker2BC: '',
      headersAllBC: [],
      tableItemsAllBC: [],
      groupListBC: [],
      groupBC: '',
      headers3BC: [],
      tableItems3BC: [],
      gateListBC: [],
      gateBC: '',
      fromDate4BC: false,
      fromDateValue4BC: '',
      fromDatePicker4BC: '',
      toDate4BC: false,
      toDateValue4BC: '',
      toDatePicker4BC: '',
      headers4: [],
      tableItems4: [],
      agencyList3BC: [],
      agency3BC: [],
      fromDate5BC: false,
      fromDateValue5BC: '',
      fromDatePicker5BC: '',
      toDate5BC: false,
      toDateValue5BC: '',
      toDatePicker5BC: '',
      headers5BC: [],
      totalTableItemsBC: [],
      loadingBaoCaoTab1: false,
      loadingBaoCaoTab2: false,
      loadingBaoCaoTab3: false,
      loadingBaoCaoTab4: false,
      loadingBaoCaoTab5: false,
      baoCaoSrcTab1: '',
      baoCaoSrcTab2: '',
      baoCaoSrcTab5: '',
      dataExportCSV: '',
      stateBaoCaoView: 'bao_cao_tinh_trang_xu_ly_ho_so'
    },
    watch: {
      pageGiayPhepVanTaiQuocTeTable: {
        handler() {
          // console.log('cccc1')
          this._inigiayPhepVanTaiQuocTeTable()
        }
      },
      pageGiayPhepLienVanTable: {
        handler() {
          // console.log('cccc2')
          this._inigiayPhepLienVanTable()
        }
      },
      pageChapThuanKhaiThacTable: {
        handler() {
          // console.log('cccc2')
          this._inichapThuanKhaiThacTable()
        }
      },
      pageHistory: {
        handler() {
          this.toDetailThongTinXe()
        }
      }
      //			stateButtonregistration : true
    },
    onScroll: 'onScroll',
    schema: {
      // TODO menu filter
      'navigationFilter': {
        'id': 'navigationFilter',
        'name': 'navigationFilter',
        "type": "navigation",
        'cssClass': 'pr-4 pt-0',
        "template": "menu_template",
        "onLoad": "initData",
        "template_content": "dossierViewJX_form_template",
        'events': {
          _initApplicantNameFilterData: function() {
            var vm = this;

            //TODO: API
            var url = '/o/rest/v2/applicants';

            axios.get(url, config).then(function(response) {
                var serializable = response.data;
                vm.applicantNameFilterItems = serializable.data;
              })
              .catch(function(error) {
                // console.log(error);

              });
            return false;
          },
          _initServiceInfoFilterData: function() {
            var vm = this;
            var url = '/o/rest/v2/serviceinfos';
            axios.get(url, config).then(function(response) {
                var serializable = response.data;
                vm.serviceInfoFilterItems = serializable.data;
              })
              .catch(function(error) {
                // console.log(error);
              });
            return false;
          },
          subLastActionUserName: function(data) {
            var vm = this;
            if (data) {
              if (data.indexOf('test@liferay') !== -1) {
                return 'QLVT'
              }
              var indexKey = data.indexOf('@');
              if (indexKey === -1) {
                return data;
              } else {
                return data.substring(0, indexKey);
              }
            } else {
              return '';
            }
          },
          groupHoSoFilter: function(item, index) {
            var vm = this;
            // console.log("item status",item);
            vm.indexListStatus = index;
            vm.yearSearch = vm.getCurrentYear()
            vm.reloadCounter();
            vm.detailPage = false;
            vm.detailRegistPage = false;
            vm.listgroupHoSoFilterselected = item.id;
            vm.danhSachHoSoTablepage = 1;
            vm.listgroupHoSoFilterselectedIndex = item.index - 1;
            if (item.id !== 'tra_cuu') {
              vm.stageFilterView = item.id;
              vm.hoso_title_table = item.title;
              if (item.level === 1) {
                vm.statusParamFilter = item.idSub;
                vm.substatusParamFilter = item.id;
              } else {
                vm.statusParamFilter = item.id;
                vm.substatusParamFilter = item.idSub;
              }
            }
            if (item.id == 'tra_cuu_hoso') {
              vm._initraCuuHoSoTable(false);
            } else if (item.id == 'tra_cuu_phuong_tien') {
              // TODO vm._inidanhSachHoSoTable(false);
            } else if (item.id == 'tra_cuu_thong_tin_doanh_nghiep') {
              vm._inithongTinDoanhNghiepTable(false);
              vm.detailRegistPage = false;
            } else {
              vm._inidanhSachHoSoTable(false);
            }
            vm.onScrollTop();
          },
          getCurrentYear: function () {
            var dateTmp = new Date()
            return dateTmp.getFullYear() || 2020
          },
          parseDate2: function(date) {
            if (!date) return null
            const [month, day, year] = date.split('/')
            return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
          },
          parseStartDate () {
            var vm = this;
            vm.startDate = vm.parseDate(vm.dateStartDate);
            vm.startDateMenu = false;
          },
          parseEndDate () {
            var vm = this;
            vm.endDate = vm.parseDate(vm.dateEndDate);
            vm.endDateMenu = false;
          },
          loadListCodePh: function() {
            var vm = this;
            var url = '/o/rest/v2/dictcollections/PHU_HIEU/dictitems';
            axios.get(url, config).then(function(response) {
              var serializable = response.data;
              vm.listCodePH = serializable.data;
            }).catch(function(error) {
            });
          },
          loadListLoaiGP: function() {
            var vm = this;
            var url = '/o/rest/v2/temp/dictcollections/loai_giay_phep/dictitems';
            axios.get(url, config).then(function(response) {
              vm.licenceListBC = response.data.data;
            }).catch(function(error) {
            });
          },
          viewReport: function(){
            var vm = this;
            vm.loadingBaoCaoTab1 = true;
            var agencyBC_tmp ='';
            var statusBC_tmp = '';
            if (!vm.agencyBC.length) {
              agencyBC_tmp = vm.agencyList.map(function (value) {
                return value.itemCode;
              }).join(',');
            } else {
              agencyBC_tmp = vm.agencyBC.join(',')
            }

            if (!vm.statusBC.length) {
              statusBC_tmp = vm.statusListBC.map(function (value) {
                return value.itemCode;
              }).join(',');
            } else {
              statusBC_tmp = vm.statusBC.join(',')
            }

            var d = new Date();
            var curentDate = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
            const config_blob = {
              headers: {
                'groupId': themeDisplay.getScopeGroupId(),
                'Content-Type': 'application/json'
              },
              params: {
                agency: agencyBC_tmp,
                from: vm.fromDateValueBC,
                to: vm.toDateValueBC,
                status: statusBC_tmp,
                govAgencyName: workUnit,
                signDate: curentDate
              },
              responseType: 'blob'
            };

            var url = '/o/rest/vr-app/baoCaoTinhTrangXuLyHoSo';
            axios.get(url, config_blob).then(function(response) {
              var url = window.URL.createObjectURL(response.data);
              vm.loadingBaoCaoTab1 = false;
              vm.baoCaoSrcTab1 = url;
            }).catch(function(error) {
              console.log(error);
              vm.loadingBaoCaoTab1 = false;
            });
          },
          changeTabBaoCao: function (data) {
            var vm = this;
            vm.stateBaoCaoView = data;
          },
          changeLoaiGP_BC: function (data) {
            var vm = this;
            console.log('data++++++++++', data);
            var index = data.findIndex(function (item) {
              return item === 'typeGPLV'
            });
            console.log('index++++++++++', index);
            if (index !== -1) {
              vm.$nextTick(() => {
                vm.licence.push('typeA');
                vm.licence.push('typeB');
                vm.licence.push('typeC');
                vm.licence.push('typeD');
                vm.licence.push('typeE');
                vm.licence.push('typeF');
                vm.licence.push('typeG');
                vm.licence.push('typeTM');
                vm.licence.push('typePTM');
              });
            }
            console.log('licence+++++++++', vm.licence);
            vm.licence = vm.deduplicate(vm.licence);
          },
          deduplicate: function (arr) {
            let isExist = (arr, x) => {
              for(let i = 0; i < arr.length; i++) {
                if (arr[i] === x) return true;
              }
              return false;
            }

            let ans = [];
            arr.forEach(element => {
              if(!isExist(ans, element)) ans.push(element);
            });
            return ans;
          },
          viewReport2: function () {
            var vm = this;
            vm.loadingBaoCaoTab2 = true;
            var agency2BC_tmp ='';
            if (!vm.agency2BC.length) {
              agency2BC_tmp = vm.agencyList.map(function (value) {
                return value.itemCode;
              }).join(',');
            } else {
              agency2BC_tmp = vm.agency2BC.join(',')
            }
            var d = new Date();
            var curentDate = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
            const config_blob = {
              headers: {
                'groupId': themeDisplay.getScopeGroupId(),
                'Content-Type': 'application/json'
              },
              params: {
                agency: agency2BC_tmp,
                from: vm.fromDateValue2BC,
                to: vm.toDateValue2BC,
                nhomVanTai: vm.group2,
                loaiGiayPhep: vm.licence.join(','),
                govAgencyName: workUnit,
                signDate: curentDate
              },
              responseType: 'blob'
            };

            var url = '/o/rest/vr-app/baoCaoCapPhep';
            axios.get(url, config_blob).then(function(response) {
              var url = window.URL.createObjectURL(response.data);
              vm.baoCaoSrcTab2 = url;
              vm.loadingBaoCaoTab2 = false;
            }).catch(function(error) {
              console.log(error);
              vm.loadingBaoCaoTab2 = false;
            });
          },
          viewReport5: function(){
            var vm = this;
            vm.loadingBaoCaoTab5 = true;
            var agency3BC_tmp ='';
            if (!vm.agency3BC.length) {
              agency3BC_tmp = vm.agencyList.map(function (value) {
                return value.itemCode;
              }).join(',');
            } else {
              agency3BC_tmp = vm.agency3BC.join(',')
            }
            var d = new Date();
            var curentDate = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
            const config_blob = {
              headers: {
                'groupId': themeDisplay.getScopeGroupId(),
                'Content-Type': 'application/json'
              },
              params: {
                agency: agency3BC_tmp,
                from: vm.fromDateValue5BC,
                to: vm.toDateValue5BC,
                govAgencyName: workUnit,
                signDate: curentDate
              },
              responseType: 'blob'
            };

            var url = '/o/rest/vr-app/thongKeTheoNam';
            axios.get(url, config_blob).then(function(response) {
              var url = window.URL.createObjectURL(response.data);
              vm.baoCaoSrcTab5 = url;
              vm.loadingBaoCaoTab5 = false;
            }).catch(function(error) {
              console.log(error);
              vm.loadingBaoCaoTab5 = false;
            });
          },
          reloadCounter: function() {
            var vm = this;
            var url = '/o/rest/v2/statistics/dossiers/todo';
            vm.loadingMenuList = true;
            $.ajax({
              url: url,
              dataType: "json",
              type: "GET",
              headers: {
                'groupId': themeDisplay.getScopeGroupId(),
                'Cache-Control': 'no-cache'
              },
              data: {
                service: vm.serviceInfo,
                agency: agencies
              },
              success: function(result) {
                var serializable = result;
                var indexTree = -1;
                var index = 0;
                for (var key in serializable.data) {
                  for (var i in vm.listgroupHoSoFilterItems) {
                    if (serializable.data[key].level === 0) {

                      if (serializable.data[key].dossierStatus === 'cancelling' ||
                        serializable.data[key].dossierStatus === 'cancelled' ||
                        serializable.data[key].dossierStatus === 'processing' ||
                        serializable.data[key].dossierStatus === 'paid') {
                        serializable.data[key].items = [];

                        if (serializable.data[key].dossierStatus === vm.listgroupHoSoFilterItems[i].id) {
                          vm.listgroupHoSoFilterItems[i].count = serializable.data[key].count;
                        }
                      }

                    } else {

                      if (serializable.data[key].dossierSubStatus === vm.listgroupHoSoFilterItems[i].id) {
                        vm.listgroupHoSoFilterItems[i].count = serializable.data[key].count;
                      }
                    }
                  }

                }
                vm.loadingMenuList = false;
              },
              error: function(result) {
                vm.loadingMenuList = false;
              }
            });

          },
          initPageThongKe: function () {
            var vm = this;
            vm.getAgency();
            vm.getStatus();
          },
          likesAllAgencys: function () {
            return this.donViXuLy.length === this.agencyList.length
          },
          likesSomeAgencys: function () {
            return this.donViXuLy.length > 0 && !this.agencyList
          },
          iconAgencys: function () {
            if (this.likesAllAgencys) return 'mdi-close-box'
              if (this.likesSomeAgencys) return 'mdi-minus-box'
                return 'mdi-checkbox-blank-outline'
          },
          getAgency: function () {
            var vm = this
            $.ajax({
              url: '/o/rest/v2/temp/dictcollections/GOVERNMENT_AGENCY/dictitems?sort=sibling',
              dataType: 'json',
              type: 'GET',
              async: false,
              headers: {
                'groupId': 55301
              },
              success: function (result) {
                if (result.data) {
                  var agencyAll = [];
                  var agencyRole = agencies.split(',');
                  //console.log('agencyRole+++++++', agencyRole);
                  for (var i = 0; i < result.data.length; i++) {
                    var indexTmp = agencyRole.findIndex(function (item) {
                      return item === result.data[i].itemCode;
                    })
                    if (indexTmp !== -1) {
                      agencyAll.push(result.data[i]);
                    }
                  }
                  agencyAll.sort(function (a, b){
                    if(a.itemName < b.itemName) { return 1; }
                    if(a.itemName > b.itemName) { return -1; }
                    return 0;
                  });
                  //console.log('agencyAll++++++++', agencyAll);
                  // vm.agencyList = agencyAll;
                  // agencyAll.splice(0, 0, {
                  //   companyId: 0,
                  //   createDate: "",
                  //   dictCollectionId: 0,
                  //   dictItemId: '',
                  //   dictVersionId: 0,
                  //   groupId: 0,
                  //   issueStatus: 0,
                  //   itemCode: "all",
                  //   itemDescription: "",
                  //   itemName: "Tất cả",
                  //   level: 0,
                  //   modifiedDate: "",
                  //   parentItemId: 0,
                  //   sibling: 0,
                  //   status: 0,
                  //   treeIndex: "",
                  //   userId: 0
                  // });
                  vm.agencyList = agencyAll;
                  vm.donViXuLy = agencyAll.map(function (value) {
                    return value.itemCode;
                  });
                } else {
                  vm.agencyList = [];
                }
              },
              error: function (xhr) {
                vm.agencyList = [];
              }
            })
          },
          getStatus: function () {
            var vm = this
            vm.tinhTrangXuLy = [];
            vm.statusList = [
              {
                itemCode: 'processing',
                itemName: 'HS đang xử lý',
                normal: true
              },
              {
                itemCode: 'done_0',
                itemName: 'HS đã xử lý',
                normal: false
              },
              {
                itemCode: 'notprocessing',
                itemName: 'HS chưa xử lý',
                normal: false
              }
            ];
            vm.tinhTrangXuLy = vm.statusList;
          },
          parseFromDateBCTab1: function () {
            var vm = this;
            vm.fromDateValueBC = vm.parseDate(vm.fromDatePickerBC);
            vm.fromDateBC = false;
          },
          parseToDateBCTab1: function () {
            var vm = this;
            vm.toDateValueBC = vm.parseDate(vm.toDatePickerBC);
            vm.toDateBC = false;
          },
          parseFromDateBCTab2: function () {
            var vm = this;
            vm.fromDateValue2BC = vm.parseDate(vm.fromDatePicker2BC);
            vm.fromDate2BC = false;
          },
          parseToDateBCTab2: function () {
            var vm = this;
            vm.toDateValue2BC = vm.parseDate(vm.toDatePicker2BC);
            vm.toDate2BC = false;
          },
          parseFromDateBCTab4: function () {
            var vm = this;
            vm.fromDateValue4BC = vm.parseDate(vm.fromDatePicker4BC);
            vm.fromDate4BC = false;
          },
          parseToDateBCTab4: function () {
            var vm = this;
            vm.toDateValue4BC = vm.parseDate(vm.toDatePicker4BC);
            vm.toDate4BC = false;
          },
          parseFromDateBCTab5: function () {
            var vm = this;
            vm.fromDateValue5BC = vm.parseDate(vm.fromDatePicker5BC);
            vm.fromDate5BC = false;
          },
          parseToDateBCTab5: function () {
            var vm = this;
            vm.toDateValue5BC = vm.parseDate(vm.toDatePicker5BC);
            vm.toDate5BC = false;
          },
          parseFromDate: function () {
            var vm = this;
            vm.fromDateValue = vm.parseDate(vm.fromDatePicker);
            vm.fromDate = false;
          },
          parseToDate: function () {
            var vm = this;
            vm.toDateValue = vm.parseDate(vm.toDatePicker);
            vm.toDate = false;
          },
          defaultDate: function () {
            var vm = this;
            var date = new Date();
            var tuNgay = '1/' + (date.getMonth() + 1) + '/' + date.getFullYear();
            var denNgay = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
            vm.fromDateValue = tuNgay;
            vm.toDateValue = denNgay;
            vm.fromDateValueBC = tuNgay;
            vm.toDateValueBC = denNgay;
            vm.fromDateValue2BC = tuNgay;
            vm.toDateValue2BC = denNgay;
            vm.fromDateValue5BC = tuNgay;
            vm.toDateValue5BC = denNgay;
          },
          filter: function () {
            var vm = this;
            var size = vm.tinhTrangXuLy;
            vm.loadDsThongKe();
          },
          toDsXuLyHoSo: function (item, govCode) {
            var vm = this;
            vm.detailRegistPage = false;
            vm.detailPage = false;
            vm.stageFilterView = 'danh_sach';
            // vm.indexListStatus = index;
            vm.statusParamFilter = item.dossierStatus;
            vm.substatusParamFilter = item.dossierSubStatus;
            vm.yearSearch = '';

            vm.govAgencySearch2 = govCode;
            vm.hoso_title_table = item.statusName;
            vm.startDate = vm.fromDateValue;
            vm.endDate = vm.toDateValue;
            vm.statusFirst = '';
            vm._initlistgroupHoSoFilter(false);
            vm.onScrollTop();
            vm.tabActive = 'tab2';
          },
          loadDsBaoCaoGP: function (clear) {
            var vm = this;
            vm.loadingBaoCao = true;
            var url = "/o/rest/v2/statistics/dossiers";
            if (!vm.donViXuLy.length) {
              vm.donViXuLy = vm.agencyList.map(function (value) {
                return value.itemCode;
              });
            }
            var configThongKe = {
              headers: {
                groupId: themeDisplay.getScopeGroupId()
              },
              params: {
                agency: vm.donViXuLy.join(','),
                service: '',
                from: vm.fromDateValue,
                to: vm.toDateValue
              }
            }
            axios.get(url, configThongKe).then(function(response) {
              var serializable = response.data;
              if (serializable.length) {
                var dataTmp = serializable[0].data;
                var dataResult = [];
                var totalTmp = 0;
                var countTotal = {};
                for (var i = 0; i < serializable.length; i++) {
                  var objTmp = {};
                  var totalRow = 0;
                  if (serializable[i].data.length) {
                    var dataTmp = serializable[i].data;
                    for (var j = 0; j < dataTmp.length; j++) {
                      totalRow += dataTmp[j].count ? parseInt(dataTmp[j].count, 0) : 0;
                      objTmp[dataTmp[j].type] = dataTmp[j].count ? parseInt(dataTmp[j].count, 0) : 0;
                    }
                  }
                  objTmp['govAgencyCode'] = serializable[i].govAgencyCode;
                  objTmp['govAgencyName'] = serializable[i].govAgencyName;
                  objTmp['totalRow'] = totalRow;
                  dataResult.push(objTmp);
                }
                var totalCol = 0;
                for (var i = 0; i < serializable[0].data.length; i++) {
                  for (var j = 0; j < serializable.length; j++) {
                    totalCol += serializable[j].data[i].count ? parseInt(serializable[j].data[i].count, 0) : 0;
                  }
                  countTotal[serializable[0].data[i].type] = totalCol;
                  totalCol = 0;
                }
                dataResult.push(countTotal);
                console.log(dataResult);
                // vm.tableItems = serializable;
                // vm.loadingBaoCao = false;
              }
            }).catch(function(error) {
              vm.loadingBaoCao = false;
            });
            if (vm.donViXuLy.length === vm.agencyList.length) {
              vm.donViXuLy =  [];
            }
            if (clear) {
              vm.donViXuLy =  [];
              vm.tinhTrangXuLy = [];
            }
          },
          loadDsBaoCao: function (clear) {
            var vm = this;
            vm.loadingBaoCao = true;
            var url = "/o/rest/v2/statistics/dossiers";
            var dossierStatus = [];
            for (var i = 0; i < vm.tinhTrangXuLy.length; i++) {
              if (vm.tinhTrangXuLy[i].normal) {
                dossierStatus.push('processing_3');
                dossierStatus.push('processing_5');
                dossierStatus.push('processing_7');
                dossierStatus.push('processing_1');
                dossierStatus.push('processing_13');
                dossierStatus.push('processing_14');
                dossierStatus.push('processing_6');
              } else if (!vm.tinhTrangXuLy[i].normal && vm.tinhTrangXuLy[i].itemCode === 'done_0') {
                dossierStatus.push('ended_1');
                dossierStatus.push('done');
              } else {
                dossierStatus.push('receiving_1');
                dossierStatus.push('done_1');
                dossierStatus.push('cancelled_1');
              }
            }
            if (!vm.donViXuLy.length) {
              vm.donViXuLy = vm.agencyList.map(function (value) {
                return value.itemCode;
              });
            }
            if (!dossierStatus.length) {
              dossierStatus = ['processing_3', 'processing_5', 'processing_7', 'processing_1', 'processing_13', 'processing_14', 'processing_6', 'ended_1', 'done', 'receiving_1', 'done_1', 'cancelled_1'];
            }
            var configThongKe = {
              headers: {
                groupId: themeDisplay.getScopeGroupId()
              },
              params: {
                agency: vm.donViXuLy.join(','),
                service: '',
                dossierSubStatus: dossierStatus.join(','),
                from: vm.fromDateValue,
                to: vm.toDateValue
              }
            }
            vm.headers = [];
            axios.get(url, configThongKe).then(function(response) {
              var serializable = response.data;
              if (serializable.length) {
                var dataTmp = serializable[0].data;
                var dataResult = [];
                var totalTmp = 0;
                var countTotal = {};
                for (var i = 0; i < serializable.length; i++) {
                  var objTmp = {};
                  if (serializable[i].data.length) {
                    var dataTmp = serializable[i].data;
                    for (var j = 0; j < dataTmp.length; j++) {
                      objTmp[dataTmp[j].dossierSubStatus] = dataTmp[j].count ? parseInt(dataTmp[j].count, 0) : 0;
                    }
                  }
                  objTmp['govAgencyCode'] = serializable[i].govAgencyCode;
                  dataResult.push(objTmp);
                }
                var totalTmp = 0;
                for (var i = 0; i < serializable[0].data.length; i++) {
                  for (var j = 0; j < serializable.length; j++) {
                    totalTmp += serializable[j].data[i].count ? parseInt(serializable[j].data[i].count, 0) : 0;
                  }
                  countTotal[serializable[0].data[i].dossierSubStatus] = totalTmp;
                  totalTmp = 0;
                }
                dataResult.push(countTotal);
                //console.log(dataResult);
                // vm.tableItems = serializable;
                // vm.loadingBaoCao = false;
              }
            }).catch(function(error) {
              vm.loadingBaoCao = false;
            });
            if (vm.donViXuLy.length === vm.agencyList.length) {
              vm.donViXuLy =  [];
            }
            if (clear) {
              vm.donViXuLy =  [];
              vm.tinhTrangXuLy = [];
            }
          },
          checkVisibleTotal: function (item) {
            var vm = this;
            if (item) {
              var index = vm.tinhTrangXuLy.findIndex(function (value) {
                return value.itemCode === item;
              })
              if (index !== -1) {
                return true;
              }
            }
            return false;
          },
          loadDsThongKe: function (clear) {
            var vm = this;
            vm.loadingThongKe = true;
            var url = "/o/rest/v2/statistics/dossiers";
            var dossierStatus = [];
            for (var i = 0; i < vm.tinhTrangXuLy.length; i++) {
              if (vm.tinhTrangXuLy[i].normal) {
                dossierStatus.push('processing_3');
                dossierStatus.push('processing_5');
                dossierStatus.push('processing_7');
                dossierStatus.push('processing_1');
                dossierStatus.push('processing_13');
                dossierStatus.push('processing_14');
                dossierStatus.push('processing_6');
              } else if (!vm.tinhTrangXuLy[i].normal && vm.tinhTrangXuLy[i].itemCode === 'done_0') {
                dossierStatus.push('ended_1');
                dossierStatus.push('done_3');
              } else {
                dossierStatus.push('receiving_1');
                dossierStatus.push('done_1');
                dossierStatus.push('cancelled_1');
              }
            }
            if (!vm.donViXuLy.length) {
              vm.donViXuLy = vm.agencyList.map(function (value) {
                return value.itemCode;
              });
            }
            if (!dossierStatus.length) {
              dossierStatus = ['processing_3', 'processing_5', 'processing_7', 'processing_1', 'processing_13', 'processing_14', 'processing_6', 'ended_1', 'done_3', 'receiving_1', 'done_1', 'cancelled_1'];
            }
            var agencyTmp = '';
            agencyTmp = vm.donViXuLy.filter(function (item) {
              return item !== 'all'
            }).join(',');
            console.log('agencyTmp++++++', agencyTmp);
            var configThongKe = {
              headers: {
                groupId: themeDisplay.getScopeGroupId()
              },
              params: {
                agency: agencyTmp,
                service: '',
                dossierSubStatus: dossierStatus.join(','),
                from: vm.fromDateValue,
                to: vm.toDateValue
              }
            }
            vm.headers = [];
            axios.get(url, configThongKe).then(function(response) {
              var serializable = response.data;
              serializable = serializable.sort(function (a, b){
                if(a.govAgencyName.charAt(0) < b.govAgencyName.charAt(0)) { return 1; }
                if(a.govAgencyName.charAt(0) > b.govAgencyName.charAt(0)) { return -1; }
                return 0;
              });

              vm.headers.push({ text: 'STT', value: 'sequenceNumber', sortable: false, align: 'center' });
              vm.headers.push({ text: 'Đơn vị xử lý hồ sơ', value: 'name', sortable: false, align: 'center' });
              if (serializable.length) {
                var dataTmp = serializable[0].data;
                for (var i = 0; i < dataTmp.length; i++) {
                  vm.headers.push({ text: dataTmp[i].statusName, value: dataTmp[i].dossierSubStatus, sortable: false, align: 'center' });
                }

                // add header total--------------------------------------------
                var indexHeaderPro = vm.headers.findIndex(function (value) {
                  return value.value === 'totalProcessing'
                })
                var indexHeaderDone = vm.headers.findIndex(function (value) {
                  return value.value === 'totalDone'
                })
                var indexHeaderReci = vm.headers.findIndex(function (value) {
                  return value.value === 'totalReceiving'
                })
                if (!vm.tinhTrangXuLy.length) {
                  if (indexHeaderPro == -1) {
                    vm.headers.push({ text: 'Tổng số hồ sơ đang xử lý', value: 'totalProcessing', sortable: false, align: 'center' });
                  }

                  if (indexHeaderDone == -1) {
                    vm.headers.push({ text: 'Tổng số hồ đã xử lý', value: 'totalDone', sortable: false, align: 'center' });
                  }

                  if (indexHeaderReci == -1) {
                    vm.headers.push({ text: 'Tổng số hồ chưa xử lý', value: 'totalReceiving', sortable: false, align: 'center' });
                  }
                } else {
                  if (vm.checkVisibleTotal('processing')) {
                    if (indexHeaderPro == -1) {
                      vm.headers.push({ text: 'Tổng số hồ sơ đang xử lý', value: 'totalProcessing', sortable: false, align: 'center' });
                    } else {
                      vm.headers.splice(indexHeaderPro, 1);
                    }
                  }
                  if (vm.checkVisibleTotal('done_0')) {
                    if (indexHeaderDone == -1) {
                      vm.headers.push({ text: 'Tổng số hồ đã xử lý', value: 'totalDone', sortable: false, align: 'center' });
                    } else {
                      vm.headers.splice(indexHeaderDone, 1);
                    }
                  }
                  if (vm.checkVisibleTotal('notprocessing')) {
                    if (indexHeaderReci == -1) {
                      vm.headers.push({ text: 'Tổng số hồ chưa xử lý', value: 'totalReceiving', sortable: false, align: 'center' });
                    } else {
                      vm.headers.splice(indexHeaderReci, 1);
                    }
                  }
                }
                //---------------------------------------------------------
                for (var i = 0; i < serializable.length; i++) {
                  var totalDangxl = 0;
                  var totalDaxl = 0;
                  var totalChuaxl = 0;
                  for (var j = 0; j < serializable[i].data.length; j++) {
                    if (serializable[i].data[j].dossierSubStatus === 'processing_3' || 
                      serializable[i].data[j].dossierSubStatus === 'processing_5' ||
                      serializable[i].data[j].dossierSubStatus === 'processing_7' ||
                      serializable[i].data[j].dossierSubStatus === 'processing_1' ||
                      serializable[i].data[j].dossierSubStatus === 'processing_13' ||
                      serializable[i].data[j].dossierSubStatus === 'processing_14' ||
                      serializable[i].data[j].dossierSubStatus === 'processing_6'
                      ) {
                      totalDangxl += parseInt(serializable[i].data[j].count, 0);
                    }

                    if (serializable[i].data[j].dossierSubStatus === 'ended_1' ||
                      serializable[i].data[j].dossierSubStatus === 'done') {
                      totalDaxl += parseInt(serializable[i].data[j].count, 0);
                    }

                    if (serializable[i].data[j].dossierSubStatus === 'receiving_1' ||
                      serializable[i].data[j].dossierSubStatus === 'done_1' ||
                      serializable[i].data[j].dossierSubStatus === 'cancelled_1') {
                      totalChuaxl += parseInt(serializable[i].data[j].count, 0);
                    }
                  }
                  serializable[i]['totalDangxl'] = totalDangxl;
                  serializable[i]['totalDaxl'] = totalDaxl;
                  serializable[i]['totalChuaxl'] = totalChuaxl;
                }
                var countTotal = {};
                var totalCol = 0;
                for (var i = 0; i < serializable[0].data.length; i++) {
                  for (var j = 0; j < serializable.length; j++) {
                    totalCol += serializable[j].data[i].count ? parseInt(serializable[j].data[i].count, 0) : 0;
                  }
                  countTotal[serializable[0].data[i].dossierSubStatus] = totalCol;
                  totalCol = 0;
                }
                var ttProcessing = 0;
                serializable.forEach(function (value) {
                  ttProcessing += value.totalDangxl;
                });

                var ttDone = 0;
                serializable.forEach(function (value) {
                  ttDone += value.totalDaxl;
                });

                var ttChuaXL = 0;
                serializable.forEach(function (value) {
                  ttChuaXL += value.totalChuaxl;
                });

                if (!vm.tinhTrangXuLy.length) {
                  countTotal['ttProcessing'] = ttProcessing;
                  countTotal['ttDone'] = ttDone;
                  countTotal['ttChuaXL'] = ttChuaXL;
                } else {
                  if (vm.checkVisibleTotal('processing')) {
                    countTotal['ttProcessing'] = ttProcessing;
                  }
                  if (vm.checkVisibleTotal('done_0')) {
                    countTotal['ttDone'] = ttDone;
                  }
                  if (vm.checkVisibleTotal('notprocessing')) {
                    countTotal['ttChuaXL'] = ttChuaXL;
                  }
                }                
                vm.totalFooterTK = countTotal;
                console.log('serializable+++++Thống kê++++++++++', serializable);
                // console.log('data_csv+++++++++++++++', vm.createExportTable(serializable));
                vm.dataExportCSV = vm.createExportTable(serializable);
                vm.tableItems = serializable;
                vm.loadingThongKe = false;
              }
            }).catch(function(error) {
              console.log(error);
              vm.headers.push({ text: 'STT', value: 'sequenceNumber', sortable: false, align: 'center' });
              vm.headers.push({ text: 'Đơn vị xử lý hồ sơ', value: 'name', sortable: false, align: 'center' });
              vm.headers.push({ text: 'Tổng số hồ sơ đang xử lý', value: 'totalProcessing', sortable: false, align: 'center' });
              vm.headers.push({ text: 'Tổng số hồ đã xử lý', value: 'totalDone', sortable: false, align: 'center' });
              vm.headers.push({ text: 'Tổng số hồ chưa xử lý', value: 'totalReceiving', sortable: false, align: 'center' });
              vm.loadingThongKe = false;
            });
            if (vm.donViXuLy.length === vm.agencyList.length) {
              vm.donViXuLy =  [];
            }
            if (clear) {
              vm.donViXuLy =  [];
              vm.tinhTrangXuLy = [];
            }
          },
          excelExportBtn: function () {
            var vm = this;
            if (!vm.dataExportCSV) {
              vm.snackbartextdossierViewJX = "Không thể export dữ liệu, vui lòng thử lại!";
              vm.snackbarerordossierViewJX = true;
              return;
            }
            vm.excelExport(vm.dataExportCSV);
          },
          excelExport: function (content) {
            console.log('content++++++++++++++', content);
            var a = document.createElement('a');
            a.download = "Thống_kê.csv";
            a.href = 'data:text/csv;charset=utf-8,%EF%BB%BF' + encodeURIComponent(content);
            a.click();
          },
          createExportTable: function (dataItems) {
            var vm = this;
            var dataStr = "";
            var headerStr = "";
            var headerTmp = [];
            var rowStr = "";
            var newLine = "\r\n";
            if (dataItems) {
              var data0 = dataItems[0].data;
              headerTmp.push('Đơn vị xử lý');
              for (var i = 0; i < data0.length; i++) {
                headerTmp.push(data0[i].statusName);
              }
              if (!vm.tinhTrangXuLy.length) {
                headerTmp.push('Tổng số hồ sơ đang xử lý');
                headerTmp.push('Tổng số hồ đã xử lý');
                headerTmp.push('Tổng số hồ chưa xử lý');
              } else {
                if (vm.checkVisibleTotal('processing')) {
                  headerTmp.push('Tổng số hồ sơ đang xử lý');
                }
                if (vm.checkVisibleTotal('done_0')) {
                  headerTmp.push('Tổng số hồ đã xử lý');
                }
                if (vm.checkVisibleTotal('notprocessing')) {
                  headerTmp.push('Tổng số hồ chưa xử lý');
                }
              }
              headerStr = headerTmp.join(',');
              headerStr += newLine;

              for (var i = 0; i < dataItems.length; i++) {
                var row = dataItems[i].data;
                var rowTmp = [];
                rowTmp.push(dataItems[i]['govAgencyName']);
                for (var j = 0; j < row.length; j++) {
                  rowTmp.push(row[j].count);
                }
                if (!vm.tinhTrangXuLy.length) {
                  rowTmp.push(dataItems[i]['totalDangxl']);
                  rowTmp.push(dataItems[i]['totalDaxl']);
                  rowTmp.push(dataItems[i]['totalChuaxl']);
                } else {
                  if (vm.checkVisibleTotal('processing')) {
                    rowTmp.push(dataItems[i]['totalDangxl']);
                  }
                  if (vm.checkVisibleTotal('done_0')) {
                    rowTmp.push(dataItems[i]['totalDaxl']);
                  }
                  if (vm.checkVisibleTotal('notprocessing')) {
                    rowTmp.push(dataItems[i]['totalChuaxl']);
                  }
                }
                rowStr += rowTmp.join(',');
                rowStr += newLine;
              }
              dataStr = headerStr + rowStr;
            }
            return dataStr;
          },
          getDonViByCode: function (item) {
            var vm = this;
            var donvi = vm.agencyList.find(function (donviItem) {
              return donviItem.itemCode === item;
            });
            if (donvi) {
              return donvi.itemName;
            } else {
              return '';
            }
          },
          menuTabChange: function(item, event) {
            var vm = this;
            try {
              var url = window.location.pathname;
              history.pushState(null, null, url);
            } catch (e) {
              console.log(e);
            }
            // if (vm.listgroupHoSoFilterItems.length === 0) {
            //   vm._initlistgroupHoSoFilter();
            // }
            if (item.state === 'tat_ca_ho_so') {
              vm.stageFilterView = 'danh_sach'
              vm.detailPage = false;
              vm.detailRegistPage = false;
              vm.listgroupHoSoFilterselected = item.id;
              vm.danhSachHoSoTablepage = 1;
              vm.hoso_title_table = 'Danh sách hồ sơ'
              vm.listgroupHoSoFilterselectedIndex = item.index - 1;

              vm.statusParamFilter = '';
              vm.substatusParamFilter = '';

              vm._inidanhSachHoSoTable(false);

              vm.onScrollTop();
            } else if (item.state === 'quan_ly_giay_phep') {
              vm.stageFilterView = 'tra_cuu_giay_phep'
              vm.detailRegistPage = false;
              vm.detailPage = false;
              vm._inigiayPhepVanTaiQuocTeTable(false);
              vm._initServiceInfos({
                serviceCode: configPage.serviceinfosQuocTe
              });
              vm._initGovAgencys({

              });
              vm._initTuyens();
            } else if (item.state === 'quan_ly_van_tai_quoc_te') {
              window.location.href = "/group/cong-xu-ly/quan-ly-van-tai-quoc-te";
            } else if (item === 'qltk') {
              window.location.href = "/group/cong-xu-ly/quan-ly-tai-khoan";
            } else if (item === 'qltp') {
              window.location.href = "/group/cong-xu-ly/quan-ly-thu-phi";
            } else if (item.state === 'mot_cuu_dien_tu') {
              window.location.href = "/group/cong-xu-ly/mot-cua-dien-tu";
            } else if (item.state === 'thong_ke') {
              vm.defaultDate();
              vm.stageFilterView = 'thong_ke'
              vm.detailRegistPage = false;
              vm.detailPage = false;
              vm.initPageThongKe();
              vm.loadDsThongKe(true);
            } else if (item.state === 'bao_cao') {
              vm.defaultDate();
              vm.stageFilterView = 'bao_cao'
              vm.detailRegistPage = false;
              vm.detailPage = false;
              vm.loadListLoaiGP();
              vm.getAgency();
              // vm.viewReport();
              vm.activeTabBaoCao = 'tabBC1'
            } else {
              vm.detailRegistPage = false;
              vm.detailPage = false;
              vm.stageFilterView = 'danh_sach';
            }
          },
          submitListPrints: function(data) {
            var vm = this;
            var url = '/o/rest/v2/dictcollections/' + item.processActionId + '/prints';
            var formData = new URLSearchParams();
            formData.append('dossierId', vm.detailModel.dossierId);
            formData.append('select', vm.selectedPrints.join(','));
            axios.put(url, formData, config).then(function(response) {
                vm.snackbartextdossierViewJX = "Xử lý thành công!";
                vm.snackbardossierViewJX = true;
              })
              .catch(function(error) {
                // console.log(error);
                vm.snackbartextdossierViewJX = "Xử lý không thành công!";
                vm.snackbarerordossierViewJX = true;
              });
          },
          loadListPrints: function() {
            var vm = this;
            var url = '/o/rest/v2/dossiers/' + vm.detailModel.dossierId + '/deliverables';
            vm.loadingListPrints = true;
            vm.statusTextLoadPrint = 'Đang tải danh sách in...';
            axios.get(url, config).then(function(response) {
                var serializable = response.data;
                if (serializable.data) {
                  for (var i = 0; i < serializable.data.length; i++) {
                    var formData = JSON.parse(serializable.data[i].formData);
                    serializable.data[i].formData = formData;
                  }
                }
                vm.listPrintItems = serializable.data;
                vm.loadingListPrints = false;
              })
              .catch(function(error) {
                // console.log(error);
                // vm.loadingListPrints = false;
                vm.statusTextLoadPrint = 'Tải danh sách bị lỗi, Vui lòng thử lại :(';
              });
          },
          toXLSX: function(tableId) {
            $(tableId).children()[0].tableExport();
            // new TableExport(document.getElementById(tableId).childNodes[0], {
            //   headers: true,                  
            //   footers: true,                  
            //   formats: ["xlsx", "csv", "txt"],
            //   filename: "Thống kê",                 
            //   bootstrap: false,               
            //   exportButtons: true,            
            //   position: "bottom",             
            //   ignoreRows: null,               
            //   ignoreCols: null,              
            //   trimWhitespace: true,           
            //   RTL: false,                     
            //   sheetname: "Thống kê"                 
            // });
          },
          changePageGPVTQT: function() {
            var vm = this
            vm._inigiayPhepVanTaiQuocTeTable()
          },
          changePageGPLV: function() {
            var vm = this
            vm._inigiayPhepLienVanTable()
          },
          changePageCTKT: function() {
            var vm = this
            vm._inichapThuanKhaiThacTable()
          },
          viewDialogLog: function(item) {
            var vm = this;
            vm.detailModel = item;
            vm.dialogViewLogs = true;
            vm.listHistoryProcessingItems = [];
            vm.selectDossierActionTab();
          },
          _initDossierStatus: function(argument) {
            var vm = this;
            var url = '/o/rest/v2/dictcollections/DOSSIER_STATUS/dictitems';

            axios.get(url, config).then(function(response) {
                var serializable = response.data;
                vm.dossierStatusItems = serializable.data;
              })
              .catch(function(error) {
                // console.log(error);
              });
          },
          _initGovAgencysFilter: function(data) {
            var vm = this;
            var url = '/o/rest/v2/temp/dictcollections/GOVERNMENT_AGENCY/dictitems?sort=sibling';

            axios.get(url, config).then(function(response) {
                var serializable = response.data;
                vm.govAgencysItems = serializable.data;
                if (serializable.data) {
                  var arrAgencys = agencies.split(',');
                  var arrTempAgencys = [];
                  if (arrAgencys) {
                    for (var i = 0; i < serializable.data.length; i++) {
                      var indexTmp = arrAgencys.findIndex(function (item) {
                        return serializable.data[i].itemCode == item
                      });
                      if (indexTmp !== -1) {
                        arrTempAgencys.push(serializable.data[i]);
                      }
                    }
                  }
                  arrTempAgencys.sort(function (a, b){
                    if(a.itemName < b.itemName) { return 1; }
                    if(a.itemName > b.itemName) { return -1; }
                    return 0;
                  });
                  vm.govAgencysItemsMain = arrTempAgencys;
                } else {
                  vm.govAgencysItemsMain = [];
                }
                //console.log('vm.govAgencysItemsMain ++++++++++++++++++', vm.govAgencysItemsMain);
              })
              .catch(function(error) {
                // console.log(error);
              });
          },
          _initlistgroupHoSoFilter: function(select) {
            var vm = this;
            vm._inidanhSachHoSoTable(false);
            vm.stageFilterView = 'danh_sach';
            vm.loadingMenuList = true;
            vm.listgroupHoSoFilterItems = [];
            var configlistGroup = {
              headers: {
                groupId: themeDisplay.getScopeGroupId()
              },
              params: {
                service: vm.serviceInfo,
                agency: agencies
              }
            }
            var url = '/o/rest/v2/statistics/dossiers/todo';
            axios.get(url, configlistGroup).then(function(response) {
                var serializable = response.data;

                var indexTree = -1;
                var index = 0;
                for (var key in serializable.data) {

                  if (serializable.data[key].level === 0) {

                    if (serializable.data[key].dossierStatus === 'cancelling' ||
                      serializable.data[key].dossierStatus === 'cancelled' ||
                      serializable.data[key].dossierStatus === 'processing' ||
                      serializable.data[key].dossierStatus === 'paid') {
                      serializable.data[key].items = [];

                      vm.listgroupHoSoFilterItems.push({
                        id: serializable.data[key].dossierStatus,
                        idSub: serializable.data[key].dossierSubStatus,
                        title: serializable.data[key].statusName,
                        level: serializable.data[key].level,
                        count: serializable.data[key].count,

                        action: 'folder',
                        action_active: 'folder_open',
                        items: [],
                        index: index
                      });
                    }

                  } else {

                    vm.listgroupHoSoFilterItems.push({
                      id: serializable.data[key].dossierSubStatus,
                      idSub: serializable.data[key].dossierStatus,
                      title: serializable.data[key].statusName,
                      level: serializable.data[key].level,
                      count: serializable.data[key].count,
                      action: 'folder',
                      action_active: 'folder_open',
                      items: [],
                      index: index
                    });
                  }

                }
                vm.loadingMenuList = false;
                var itemStatus = vm.listgroupHoSoFilterItems.find(item => {
                  return item.id === vm.statusFirst
                })

                if (itemStatus !== null && itemStatus !== undefined && itemStatus !== '' && itemStatus !== {}) {
                  vm.hoso_title_table = itemStatus['title']
                }

                if (select) {
                  // // console.log("selected========", select);
                  var indexTemp = vm.listgroupHoSoFilterItems.findIndex(item => {
                    return item.idSub === select
                  })
                  if (indexTemp !== null && indexTemp !== undefined && indexTemp !== -1) {
                    vm.indexListStatus = indexTemp
                  }
                  vm.listgroupHoSoFilterselected = select;
                }
              })
              .catch(function(error) {
                // // console.log(error);
                vm.loadingMenuList = false;
              });
            return false;
          },
          getMenuBestUser: function() {
            var vm = this;
            var url = '/o/rest/v2/dossiers/importantstatus';
            var configTemp = {
              headers: {
                'groupId': themeDisplay.getScopeGroupId()
              }
            };
            axios.get(url, configTemp).then(result => {
              if (result.type === 1) {
                vm.statusParamFilter = result.data.status;
              } else {
                vm.substatusParamFilter = result.data.status;
              }
              vm.statusFirst = result.data.status;
              vm._initlistgroupHoSoFilter(result.data.status);
            }).catch(xhr => {
              vm._initlistgroupHoSoFilter();
            })
          },
          getUrlVars: function() {
            var vars = {};
            var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
              vars[key] = value;
            });
            return vars;
          },
          initData: function() {
            var vm = this
            // vm._initlistgroupHoSoFilter();
            vm._initServiceInfoFilterData();
            vm._initApplicantNameFilterData();
            vm._initDossierStatus();
            vm._initGovAgencysFilter();
            vm.setStateOnlyFollow(emailAddress);
            vm.loadListCodePh();
            if (isAdminUser) {
              vm.isAdminUser = isAdminUser;
            }
            var params = vm.getUrlVars();
            //console.log(params);
            if (params !== null && params !== undefined && params.hasOwnProperty('view')) {
              if (params.hasOwnProperty('view')) {
                var selectView = params['view'];
                if (selectView === 'tra_cuu_ho_so') {
                  vm.stageFilterView = 'danh_sach'
                  vm.detailPage = false;
                  vm.detailRegistPage = false;
                  vm.danhSachHoSoTablepage = 1;
                  vm.statusParamFilter = '';
                  vm.substatusParamFilter = '';
                  vm._initlistgroupHoSoFilter();
                  vm.tabActive = 'tab1';
                  // vm._inidanhSachHoSoTable(false);
                  vm.onScrollTop();
                } else if (selectView === 'quan_ly_giay_phep') {
                  vm.stageFilterView = 'tra_cuu_giay_phep'
                  vm.detailRegistPage = false;
                  vm.detailPage = false;
                  vm.tabActive = 'tab3';
                  vm.reloadCounter();
                  vm._inigiayPhepVanTaiQuocTeTable(false);
                  vm._initServiceInfos({
                    serviceCode: configPage.serviceinfosQuocTe
                  });
                  vm._initGovAgencys({});
                  vm._initTuyens();
                  vm.onScrollTop();
                }
              }
            } else {
              vm.getMenuBestUser();
            }
            $("aside").remove();
          },
          deleteDossierFileVersion: function(item) {
            var vm = this;

            vm.$dialog.confirm('Bạn có muốn xóa file toàn bộ file của thành phần này!', {
                html: true,
                loader: true,
                okText: 'Xác nhận',
                cancelText: 'Quay lại',
                animation: 'fade'
              })
              .then((dialog) => {
                // // console.log("Run delete");
                // call API get file by dossierId
                var arrFileDelete = vm.dossierFiles.filter(file => {
                  return file.dossierPartNo === item.partNo
                });
                var arrTemps = []
                if (arrFileDelete) {
                  for (var i = 0; i < arrFileDelete.length; i++) {
                    var temp = new Promise((resolve, reject) => {
                      var urlFileDelete = "/o/rest/v2/dossiers/" + vm.detailModel.dossierId + "/files/" + arrFileDelete[i].referenceUid;
                      axios.delete(urlFileDelete, config).then(function(result) {
                        resolve(result)
                      }).catch(function(xhr) {
                        reject(xhr);
                      })
                    })
                    arrTemps.push(temp);
                  }
                }
                if (arrTemps.length > 0) {
                  Promise.all(arrTemps).then(result => {
                    item.counter = 0;
                  }).catch(xhr => {})
                }

                dialog.close();
                return false;
              })
              .catch((e) => {
                // // console.log(e)
              })
          },
          setStateOnlyFollow: function(emailAddress) {
            var vm = this;
            var url = '/o/rest/v2/dictcollections/VR_AUDIT/dictitems';
            axios.get(url, config).then(function(response) {
                var serializable = response.data;
                if (serializable) {
                  for (var i = 0; i < serializable.data.length; i++) {
                    var model = serializable.data[i];
                    if (emailAddress && emailAddress === model.itemName) {
                      vm.stateOnlyFollow = true;
                      break;
                    }
                  }
                }
              })
              .catch(function(error) {
              });
          },
          viewDossierFileVersionDialog: function(item, type) {
            var vm = this;
            var vm = this;
            if (item['counter'] <= 0) {
              return
            }
            vm.dossierViewJXTitle = item.displayName;
            var arrFileViews = []
            vm.indexFile = 0;
            vm.blobFileSrc = '';
            if (vm.dossierFiles.length > 0) {
              arrFileViews = vm.dossierFiles.filter(file => {
                return file.dossierPartNo === item.partNo
              })
              if (arrFileViews !== undefined && arrFileViews['length'] > 0) {
                vm.dossierFilesView = arrFileViews
              } else {
                vm.dossierFilesView = []
              }
            }
            if (vm.dossierFilesView.length > 0) {
              if (vm.dossierFilesView.length === 1 && type === 'IN') {
                vm.getBlobFile(vm.dossierFilesView[0]).then(resolve => {
                  // console.log('resolve-----', resolve)
                  window.open(resolve);
                });
              } else {
                var url = "/o/rest/v2/dossiers/" + vm.detailModel.dossierId + "/files/" + vm.dossierFilesView[0].referenceUid;
                // console.log("Preview dossier PDF");
                vm.getBlobFile(vm.dossierFilesView[0]).then(resolve => {
                  // console.log('resolve-----', resolve)
                  vm.blobFileSrc = resolve
                })
                vm.dialogViewFile = !vm.dialogViewFile
              }
            }
          },
          viewDossierFileVersionDialog2: function(item) {
            var vm = this;
            var vm = this;
            if (item['counter'] <= 0) {
              return
            }
            vm.dossierViewJXTitle = item.displayName;
            var arrFileViews = []
            vm.indexFile = 0;
            vm.blobFileSrc = '';
            if (vm.dossierFiles.length > 0) {
              arrFileViews = vm.dossierFiles.filter(file => {
                return file.dossierPartNo === item.partNo && item.dossierFileId === file.dossierFileId
              })
              if (arrFileViews !== undefined && arrFileViews['length'] > 0) {
                vm.dossierFilesView = arrFileViews
              } else {
                vm.dossierFilesView = []
              }
            }

            if (vm.dossierFilesView.length > 0) {
              var url = "/o/rest/v2/dossiers/" + vm.detailModel.dossierId + "/files/" + vm.dossierFilesView[0].referenceUid;
              // console.log("Preview dossier PDF");
              vm.getBlobFile(vm.dossierFilesView[0]).then(resolve => {
                // console.log('resolve-----', resolve)
                vm.blobFileSrc = resolve
              })
              vm.dialogViewFile = !vm.dialogViewFile
            }
          },
          nextFile: function() {
            var vm = this
            if (vm.indexFile < vm.dossierFilesView.length - 1) {
              vm.indexFile++;
            }
            vm.blobFileSrc = ''
            vm.getBlobFile(vm.dossierFilesView[vm.indexFile]).then(resolve => {
              // console.log('resolve-----', resolve)
              vm.blobFileSrc = resolve
            })
          },
          prevFile: function() {
            var vm = this
            if (vm.indexFile > 0) {
              vm.indexFile--;
            }
            vm.blobFileSrc = ''
            vm.getBlobFile(vm.dossierFilesView[vm.indexFile]).then(resolve => {
              // console.log('resolve-----', resolve)
              vm.blobFileSrc = resolve
            })
          },
          getBlobFile: function(item) {
            var vm = this;
            return new Promise((resole, reject) => {
              const config_blob = {
                headers: {
                  'groupId': themeDisplay.getScopeGroupId(),
                  'Content-Type': 'application/json'
                },
                responseType: 'blob'
              };

              var url = '/o/rest/v2/dossiers/' + vm.detailModel.dossierId + '/files/' + item.referenceUid;
              axios.get(url, config_blob).then(function(response) {
                  var url = window.URL.createObjectURL(response.data);
                  if (response.status === 204) {
                    resole(false);
                  } else {
                    resole(url);
                  }
                })
                .catch(function(error) {
                  reject(false)
                });
            })
          },
          printDeliverable: function() {
            $('#printTraCuu').printThis();
          },
          searchAdvanceDossier() {
            var vm = this
            vm.govAgencySearch2 = '';
            vm.yearSearch = '';
            if (vm.stageFilterView === 'tat_ca_hoso' && !vm.detailPage && !vm.detailRegistPage) {
              vm._inidanhSachHoSoTable(false);
            } else if (vm.stageFilterView === 'tra_cuu_phuong_tien' && !vm.detailPage && !vm.detailRegistPage) {} else if (vm.stageFilterView === 'tra_cuu_thong_tin_doanh_nghiep' && !vm.detailPage && !vm.detailRegistPage) {
              vm._inithongTinDoanhNghiepTable(false);
              vm.detailRegistPage = false;
            } else {
              vm._inidanhSachHoSoTable(false);
            }
            vm.dialogSearch = false;
          },
          searchKeyWord: function() {
            var vm = this
            vm.applicantIdNo = '';
            vm.referenceUid = '';
            vm.dossierStatus = '';
            vm.startDate = '';
            vm.endDate = '';
            vm.dossierNo = '';
            vm.serviceInfo = '';
            vm.govAgencySearch = '';
            vm._inidanhSachHoSoTable(false);
          },
          savePrintTemplate: function() {
            var formTemplate = {};

            $("#printTraCuu > div").each(function() {
              var id = $(this).attr('id');
              var css = $(this).attr('data-css');
              // console.log("Div id: " + id);
              var xPos = $(this).position().left;
              var yPos = $(this).position().top;

              if (id.startsWith("text")) {
                formTemplate[id] = {
                  offsetX: xPos,
                  offsetY: yPos,
                  value: $(this).text(),
                  css: css
                };
              } else {
                formTemplate[id] = {
                  offsetX: xPos,
                  offsetY: yPos,
                  css: css
                };
              }
            });
            // console.log(formTemplate);
            var vm = this;
            var url = "/o/il/v2/inland";

            vm.currentPrintTemplate.formTemplate = JSON.stringify(formTemplate);
            vm.currentPrintTemplate.employeeId = 0;

            // console.log(formTemplate);
            if (vm.currentPrintTemplate.createUserId == 0) {
              axios.post(url, $.param(vm.currentPrintTemplate), {
                  headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    groupId: themeDisplay.getScopeGroupId()
                  }
                })
                .then(function(response) {
                  vm.popUpPrintTraCuu = !vm.popUpPrintTraCuu;
                  // console.log(response);
                })
                .catch(function(error) {
                  // console.log(error);
                });
            } else {
              axios.put(url + "/" + vm.currentPrintTemplate.printTemplateId, $.param(vm.currentPrintTemplate), {
                  headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    groupId: themeDisplay.getScopeGroupId()
                  }
                })
                .then(function(response) {
                  // console.log(response);
                })
                .catch(function(error) {
                  // console.log(error);
                });
            }
          },
          getInLand: function(items) {
            var vm = this;
            // console.log(items);
            var url = "/o/il/v2/inland";
            var configInland = {
              params: {
                serviceCode: items.serviceCode,
                dossierPartNo: items.dossierPartNo,
                fileTemplateNo: items.fileTemplateNo,
                templateNo: items.dossierTemplateNo,
                licenceType: items.licenceType,
                dossierFileId: items.dossierFileId
              },
              headers: {
                groupId: themeDisplay.getScopeGroupId()
              }
            }

            axios.get(url, configInland).then(function(response) {
                if (response.data.hasOwnProperty('formTemplate')) {
                  if (response.data.formTemplate != '' && response.data.formTemplate.length != 0) {
                    vm.currentPrintTemplate = {
                      printTemplateId: response.data.printTemplateId,
                      serviceCode: response.data.serviceCode,
                      dossierPartNo: response.data.dossierPartNo,
                      fileTemplateNo: response.data.fileTemplateNo,
                      templateNo: response.data.templateNo,
                      createUserId: response.data.createUserId,
                      employeeId: response.data.employeeId,
                      formTemplate: response.data.formTemplate,
                      defaultCss: response.data.defaultCss,
                      originalDocumentURL: response.data.originalDocumentURL,
                      licenceType: response.data.licenceType
                    };
                    console.log($('#printTraCuu'));
                    $('#printTraCuu').empty();
                    var item;
                    // console.log(response.data.formData)
                    if (!response.data.formData) {
                      item = items;
                    } else {
                      // console.log('hasForm!')
                      item = JSON.parse(response.data.formData);
                      // console.log(item)
                    }
                    var originalDocumentArr = JSON.parse(response.data.originalDocumentURL);
                    var originalDocumentObj = originalDocumentArr[0];

                    for (var i = 0; i < originalDocumentArr.length; i++) {
                      var originalDocumentTemp = originalDocumentArr[i];
                      if (originalDocumentTemp.hasOwnProperty('licenceType') && originalDocumentTemp['licenceType'] == item.licenceType) {
                        originalDocumentObj = originalDocumentTemp;
                        break;
                      }
                    }

                    $('#imgTraCuu').attr("src", originalDocumentObj.url);
                    $('#imgTraCuu').css(originalDocumentObj.css);

                    var imgTraCuu = $('#imgTraCuu');
                    imgTraCuu.load(function() {
                      var style = 'background-image: url(' + originalDocumentObj.url + ');background-size:' + imgTraCuu.width() + 'px ' + imgTraCuu.height() + 'px;';
                      style += response.data.defaultCss;
                      $('#printTraCuu').attr("style", style);
                      $('#printTraCuu').height(imgTraCuu.height());
                      $('#printTraCuu').width(imgTraCuu.width());
                    });

                    var formTemplate = response.data.formTemplate;

                    var formData = JSON.parse(formTemplate);

                    for (var key in formData) {
                      if (!document.getElementById(key)) {
                        var cssDiv = '';
                        if (formData[key].hasOwnProperty("css")) {
                          cssDiv = formData[key].css;
                        }
                        if (key.indexOf("array_") != -1) {
                          var newKeyArr = key.split("_");
                          var newKey = newKeyArr[2];
                          if (item.hasOwnProperty(newKey)) {
                            var itemDataArr = item[newKey].split("/");
                            if (itemDataArr.length > newKeyArr[1]) {
                              $("#printTraCuu").append('<div id=' + key + ' title=' + key + ' data-css="' + cssDiv + '" style="' + cssDiv + ';z-index: 99; position:absolute; left : ' + formData[key].offsetX + 'px; top : ' + formData[key].offsetY + 'px">' + itemDataArr[newKeyArr[1]] + '</div>');
                            }
                          }
                        } else if (key.indexOf("_") != -1) {
                          // console.log("Key contain _: " + key);
                          var newKeyArr = key.split("_");
                          var newKey = newKeyArr[1];
                          if (item.hasOwnProperty(newKey)) {
                            $("#printTraCuu").append('<div id=' + key + ' title=' + key + ' data-css="' + cssDiv + '" style="' + cssDiv + ';z-index: 99; position:absolute; left : ' + formData[key].offsetX + 'px; top : ' + formData[key].offsetY + 'px">' + item[newKey] + '</div>');
                          }
                        } else {
                          if (key.toLowerCase().indexOf("text") !== -1 && formData[key].hasOwnProperty("value")) {
                            $("#printTraCuu").append('<div id=' + key + ' title=' + key + ' data-css="' + cssDiv + '" style="' + cssDiv + ';z-index: 99; position:absolute; left : ' + formData[key].offsetX + 'px; top : ' + formData[key].offsetY + 'px">' + formData[key].value + '</div>');
                          } else if (item.hasOwnProperty(key)) {
                            $("#printTraCuu").append('<div id=' + key + ' title=' + key + ' data-css="' + cssDiv + '" style="' + cssDiv + ';z-index: 99; position:absolute; left : ' + formData[key].offsetX + 'px; top : ' + formData[key].offsetY + 'px">' + item[key] + '</div>');
                          }
                        }
                        $('#' + key).draggable({
                          stop: function() {
                            console.log($(this));
                            var position = $(this).position();
                            var css = $(this).attr('data-css');
                            var xPos = position.left;
                            var yPos = position.top;
                            formData[this.id].offsetX = xPos;
                            formData[this.id].offsetY = yPos;
                            formData[this.id].css = css;
                            //console.log('css=====', css);
                            var data = {
                              serviceCode: response.data.serviceCode,
                              dossierPartNo: response.data.dossierPartNo,
                              fileTemplateNo: response.data.fileTemplateNo,
                              templateNo: response.data.templateNo,
                              createUserId: themeDisplay.getUserId(),
                              employeeId: 0,
                              formTemplate: JSON.stringify(formData),
                              defaultCss: response.data.defaultCss,
                              originalDocumentURL: response.data.originalDocumentURL,
                              licenceType: response.data.licenceType
                            };

                            if (response.data.createUserId != 0) {
                              data.printTemplateId = response.data.printTemplateId;
                              axios.put(url + "/" + response.data.printTemplateId, $.param(data), {
                                  headers: {
                                    'Content-Type': 'application/x-www-form-urlencoded',
                                    groupId: themeDisplay.getScopeGroupId()
                                  }
                                })
                                .then(function(response) {
                                  // console.log(response);
                                })
                                .catch(function(error) {
                                  // console.log(error);
                                });
                            } else {

                            }
                          }
                        });
                      }
                    }

                    /*
										$('#imgTraCuu').attr("src", response.data.originalDocumentURL);
										var formTemplate = response.data.formTemplate;
										var imgTraCuu = $('#imgTraCuu');
										imgTraCuu.load(function(){
											$('#printTraCuu').height(imgTraCuu.height());
											$('#printTraCuu').width(imgTraCuu.width());

											var formData = JSON.parse(formTemplate);

											for (var key in formData) {
												if (item.hasOwnProperty(key) && !document.getElementById(key)) {
													$("#printTraCuu").append('<div id='+key+' style="z-index: 99; font-size: 14px; position:absolute; left : '+formData[key].offsetX+'px; top : '+formData[key].offsetY+'px">' + item[key] + '</div>');
													$('#' + key).draggable({
														stop: function() {
															var position = $(this).position();
													        var xPos = position.left;
													        var yPos = position.top;
													        formData[key].offsetX = xPos;
													        formData[key].offsetY = yPos;

													        var data = {
													        	serviceCode: response.data.serviceCode,
													        	dossierPartNo: response.data.dossierPartNo,
													        	fileTemplateNo: response.data.fileTemplateNo,
													        	templateNo: response.data.templateNo,
													        	createUserId: themeDisplay.getUserId(),
													        	employeeId: 0,
													        	formTemplate: JSON.stringify(formData),
													        	originalDocumentURL: response.data.originalDocumentURL
													        };
													        if (response.data.createUserId != 0) {
													        	data.printTemplateId = response.data.printTemplateId;
													        	axios.put(url + "/" + response.data.printTemplateId, $.param(data), {
																	headers: {
																		'Content-Type': 'application/x-www-form-urlencoded',
																		groupId: themeDisplay.getScopeGroupId()
																	}
													        	})
													        	.then(function (response) {
													        	    // console.log(response);
													        	})
													        	.catch(function (error) {
													        	    // console.log(error);
													        	});
													        }
													    }
													});
												}
											}
										});
										*/
                    // $("#btnSavePrintTemplate").click();
                  }
                } else {
                  vm.popUpPrintTraCuu = !vm.popUpPrintTraCuu;
                  vm.toDetailGiayPhep(items);
                }
              })
              .catch(function(error) {
                // console.log(error);
              });
          },
          toDetailGiayPhep: function(item) {
            var vm = this;
            var url = "/o/rest/v2/dossiers/" + item.dossierId + "/files/" + item.referenceUid;

            var config_blob = {
              headers: {
                'groupId': themeDisplay.getScopeGroupId(),
              },
              responseType: 'blob'
            };
            axios.get(url, config_blob).then(function(response) {
                var urlblob = window.URL.createObjectURL(response.data);
                window.open(urlblob, '_blank')
              })
              .catch(function(error) {
                // console.log(error);
              });
          },
          printGiayPhep: function(item) {
            var vm = this;
            vm.popUpPrintTraCuu = !vm.popUpPrintTraCuu;

            setTimeout(function() {
              vm.getInLand(item)
            }, 500)
          },
          toDetailThongTinXe: function(item) {
            var vm = this;
            vm.hinhThucSelect = '';
            vm.thongTinXeDate = '';
            vm.cuaKhauSelect = '';
            vm.registrationDate = '';
            vm.thong_tin_lai_xe = '';
            vm.giay_phep_lai_xe = '';
            vm._initCuaKhau();
            var paramsBuilder = {
              start: vm.pageHistory * 10 - 10,
              end: vm.pageHistory * 10
            };
            var config_dossiers = {
              params: paramsBuilder,
              headers: {
                'groupId': themeDisplay.getScopeGroupId(),
              }
            };
            var urlThongTinXe = '/o/rest/vr-app/certDoc/borderGuard/' + item.registrationNumber;
            var urlVehicleDetail = '/o/rest/vr-app/ilvehicle/' + item.registrationNumber;
            axios.get(urlVehicleDetail, config_dossiers).then(function(response) {
                var serializable = response.data;
                vm.modelVehicle = serializable;
                vm.vehicleItems = [];
                for (var k in vm.modelVehicle) {
                  if (vm.modelVehicle.hasOwnProperty(k)) {
                    var name = '';
                    if (k == 'registrationNumber') {
                      name = 'Biển số';
                    } else if (k == 'engineNumber') {
                      name = 'Số khung';
                    } else if (k == 'chassisNumber') {
                      name = 'Số máy';
                    } else if (k == 'manufaturedYear') {
                      name = 'Năm sản xuất';
                    } else if (k == 'capacity') {
                      name = 'Số ghế';
                    } else if (k == 'trademarkName') {
                      name = 'Nhãn hiệu';
                    } else if (k == 'vehicleColor') {
                      name = 'Màu sơn';
                    }
                    if (name != '') {
                      vm.vehicleItems.push({
                        name: name,
                        value: vm.modelVehicle[k]
                      });
                    }
                  }
                }
                axios.get(urlThongTinXe, config_dossiers).then(function(response) {
                    var serializable = response.data;
                    if (serializable.data) {
                      var page = Math.ceil(serializable.total / 10);
                      vm.lengthPageHistory = page;
                    } else {
                      vm.lengthPageHistory = 1;
                    }
                    vm.modelLienVan = serializable;
                    vm.popUpThongTinXe = !vm.popUpThongTinXe;
                  })
                  .catch(function(error) {
                    // console.log(error);
                  });
              })
              .catch(function(error) {
                // console.log(error);
              });
          },
          addThongTinXe: function(append) {
            var vm = this;
            // console.log('addThongTinXe')
            var urlHistorys = '/o/rest/vr-app/certDoc/borderGuard/' + append.registrationNumber;
            var formData = new URLSearchParams();
            var registrationDate = vm.parseDate(vm.thongTinXeDate)
            formData.append('expImpGateType', vm.hinhThucSelect);
            formData.append('expImpGate', vm.cuaKhauSelect.itemName);
            formData.append('expImpGateCode', vm.cuaKhauSelect.itemCode);
            formData.append('registrationDate', registrationDate);
            formData.append('driverName', vm.thong_tin_lai_xe);
            formData.append('driverLicenceNo', vm.giay_phep_lai_xe);
            axios.post(urlHistorys, formData, config).then(function(response) {
                vm.snackbartextdossierViewJX = "Yêu cầu thực hiện thành công";
                vm.snackbardossierViewJX = true;
                var urlThongTinXe = '/o/rest/vr-app/certDoc/borderGuard/' + append.registrationNumber;
                axios.get(urlThongTinXe, config).then(function(response) {
                    var serializable = response.data;
                    vm.modelLienVan = serializable;
                    vm.hinhThucSelect = '';
                    vm.thongTinXeDate = '';
                    vm.cuaKhauSelect = '';
                    vm.registrationDate = '';
                    vm.thong_tin_lai_xe = '';
                    vm.giay_phep_lai_xe = '';
                  })
                  .catch(function(error) {
                    // console.log(error);
                  });
              })
              .catch(function(error) {
                // console.log(error);
              });
          },
          _inigiayPhepVanTaiQuocTeTable: function(append) {
            var vm = this;
            vm.traCuuFilter = false;
            vm.viewmore = true;
            var serviceCodeTemp = '';
            if (!vm.serviceInfoSelect) {
              serviceCodeTemp = configPage.serviceinfosQuocTe
            } else {
              serviceCodeTemp = vm.serviceInfoSelect;
            }
            var paramsBuilder = {
              keywords: vm.keywordTraCuuGiayPhep,
              serviceCode: serviceCodeTemp,
              govAgencyCode: vm.govAgencySelect,
              routeCode: vm.tuyenSelect,
              startDate: vm.parseDate(vm.searchTuNgay),
              fromDate: vm.parseDate(vm.searchDenNgay),
              start: vm.pageGiayPhepVanTaiQuocTeTable * 15 - 15,
              limit: 15
            };
            const config_dossiers = {
              params: paramsBuilder,
              headers: {
                'groupId': themeDisplay.getScopeGroupId()
              }
            };

            var url = '/o/rest/vr-app/certDoc';

            axios.get(url, config_dossiers).then(function(response) {
                var serializable = response.data;
                if (append) {
                  vm.giayPhepVanTaiQuocTeTableItems.push.apply(vm.giayPhepVanTaiQuocTeTableItems, serializable.data);
                } else if (serializable.data) {
                  if (Array.isArray(serializable.data)) {
                    vm.giayPhepVanTaiQuocTeTableItems = serializable.data;
                  } else {
                    vm.giayPhepVanTaiQuocTeTableItems = [serializable.data];
                  }

                } else {
                  vm.giayPhepVanTaiQuocTeTableItems = [];
                }
                var page = Math.ceil(serializable.total / 15);
                vm.pageGiayPhepVanTaiQuocTeTableLength = page;
                // console.log(vm.giayPhepVanTaiQuocTeTableItems);
                $("#tableGiayPhepVanTaiQuocTe").find('table > thead > tr > th:nth-child(2)').html("Tên giấy phép <br> Gíây phép - Số giấy phép")
              })
              .catch(function(error) {
                // console.log(error);
                vm.giayPhepVanTaiQuocTeTableItems = [{
                    giay_phep: 'abc123',
                    so_giay_phep: 'abc123',
                    ten_doanh_nghiep: 'abc123',
                    co_quan: 'abc123',
                    hieu_luc_tu_ngay: 'abc123',
                    hieu_luc_den_ngay: 'abc123'
                  },
                  {
                    giay_phep: 'abc123',
                    so_giay_phep: 'abc123',
                    ten_doanh_nghiep: 'abc123',
                    co_quan: 'abc123',
                    hieu_luc_tu_ngay: 'abc123',
                    hieu_luc_den_ngay: 'abc123'
                  },
                  {
                    giay_phep: 'abc123',
                    so_giay_phep: 'abc123',
                    ten_doanh_nghiep: 'abc123',
                    co_quan: 'abc123',
                    hieu_luc_tu_ngay: 'abc123',
                    hieu_luc_den_ngay: 'abc123'
                  }
                ];
                var page = Math.ceil(serializable.total / 15);
                vm.pageGiayPhepVanTaiQuocTeTableLength = page;

              });
            return false;
          },
          _inigiayPhepLienVanTable: function(append) {
            var vm = this;
            vm.traCuuFilter = false;
            vm.viewmore = true;
            var serviceCodeTemp = '';
            if (!vm.serviceInfoSelect) {
              serviceCodeTemp = configPage.serviceinfosLienVan
            } else {
              serviceCodeTemp = vm.serviceInfoSelect;
            }
            var paramsBuilder = {
              keywords: vm.keywordTraCuuGiayPhep,
              serviceCode: serviceCodeTemp,
              govAgencyCode: vm.govAgencySelect,
              routeCode: vm.tuyenSelect,
              startDate: vm.parseDate(vm.searchTuNgay),
              fromDate: vm.parseDate(vm.searchDenNgay),
              start: vm.pageGiayPhepLienVanTable * 15 - 15,
              limit: 15
            };

            const config_dossiers = {
              params: paramsBuilder,
              headers: {
                'groupId': themeDisplay.getScopeGroupId(),
              }
            };

            var url = '/o/rest/vr-app/certDoc';

            axios.get(url, config_dossiers).then(function(response) {
                var serializable = response.data;
                if (append) {
                  vm.giayPhepLienVanTableItems.push.apply(vm.giayPhepLienVanTableItems, serializable.data);
                } else if (serializable.data) {
                  if (Array.isArray(serializable.data)) {
                    vm.giayPhepLienVanTableItems = serializable.data;
                  } else {
                    vm.giayPhepLienVanTableItems = [serializable.data];
                  }
                } else {
                  vm.giayPhepLienVanTableItems = [];
                }
                var page = Math.ceil(serializable.total / 15);
                vm.pageGiayPhepLienVanTableLength = page;
                $("#tableGiayPhepLienVan").find('table > thead > tr > th:nth-child(2)').html("Tên giấy phép <br> Gíây phép - Số giấy phép")
                $("#tableGiayPhepLienVan").find('table > thead > tr > th:nth-child(3)').html("Số đăng ký phương tiện <br> Đơn vị khai thác")
                // console.log(vm.giayPhepLienVanTableItems);
              })
              .catch(function(error) {
                // console.log(error);
                vm.giayPhepLienVanTableItems = [{
                    giay_phep: 'asdfgh',
                    so_giay_phep: 'asdfgh',
                    so_dang_ky_phuong_tien: 'asdfgh',
                    ten_doanh_nghiep: 'asdfgh',
                    co_quan: 'asdfgh',
                    hieu_luc_tu_ngay: '1/1/2017',
                    hieu_luc_den_ngay: '1/1/2018'
                  },
                  {
                    giay_phep: 'asdfgh',
                    so_giay_phep: 'asdfgh',
                    so_dang_ky_phuong_tien: 'asdfgh',
                    ten_doanh_nghiep: 'asdfgh',
                    co_quan: 'asdfgh',
                    hieu_luc_tu_ngay: '1/1/2017',
                    hieu_luc_den_ngay: '1/1/2018'
                  },
                  {
                    giay_phep: 'asdfgh',
                    so_giay_phep: 'asdfgh',
                    so_dang_ky_phuong_tien: 'asdfgh',
                    ten_doanh_nghiep: 'asdfgh',
                    co_quan: 'asdfgh',
                    hieu_luc_tu_ngay: '1/1/2017',
                    hieu_luc_den_ngay: '1/1/2018'
                  },
                  {
                    giay_phep: 'asdfgh',
                    so_giay_phep: 'asdfgh',
                    so_dang_ky_phuong_tien: 'asdfgh',
                    ten_doanh_nghiep: 'asdfgh',
                    co_quan: 'asdfgh',
                    hieu_luc_tu_ngay: '1/1/2017',
                    hieu_luc_den_ngay: '1/1/2018'
                  }
                ];

              });
            return false;
          },
          _inichapThuanKhaiThacTable: function(append) {
            var vm = this;
            vm.traCuuFilter = false;
            vm.viewmore = true;
            var serviceCodeTemp = '';
            if (!vm.serviceInfoSelect) {
              serviceCodeTemp = configPage.serviceinfosChapThuan
            } else {
              serviceCodeTemp = vm.serviceInfoSelect;
            }
            var paramsBuilder = {
              keywords: vm.keywordTraCuuGiayPhep,
              serviceCode: serviceCodeTemp,
              govAgencyCode: vm.govAgencySelect,
              routeCode: vm.tuyenSelect,
              startDate: vm.parseDate(vm.searchTuNgay),
              fromDate: vm.parseDate(vm.searchDenNgay),
              start: vm.pageChapThuanKhaiThacTable * 15 - 15,
              limit: 15
            };

            const config_dossiers = {
              params: paramsBuilder,
              headers: {
                'groupId': themeDisplay.getScopeGroupId(),
              }
            };

            var url = '/o/rest/vr-app/certDoc';

            axios.get(url, config_dossiers).then(function(response) {
                var serializable = response.data;
                if (append) {
                  vm.chapThuanKhaiThacTableItems.push.apply(vm.chapThuanKhaiThacTableItems, serializable.data);
                } else if (serializable.data) {
                  if (Array.isArray(serializable.data)) {
                    vm.chapThuanKhaiThacTableItems = serializable.data;
                  } else {
                    vm.chapThuanKhaiThacTableItems = [serializable.data];
                  }

                } else {
                  vm.chapThuanKhaiThacTableItems = [];
                }
                var page = Math.ceil(serializable.total / 15);
                vm.pageChapThuanKhaiThacTableLength = page;
                // console.log(vm.chapThuanKhaiThacTableItems);
                $("#tableChapThuanKhaiThac").find('table > thead > tr > th:nth-child(2)').html("Tên giấy phép <br> Gíây phép - Số giấy phép")
                $("#tableChapThuanKhaiThac").find('table > thead > tr > th:nth-child(6)').html("Số xe tham gia <br> Hiệu lực khai thác")
              })
              .catch(function(error) {
                // console.log(error);
                vm.chapThuanKhaiThacTableItems = [{
                    giay_phep: 'ccccc',
                    so_giay_phep: 'ccccc',
                    ten_doanh_nghiep: 'ccccc',
                    tuyen_khai_thac: 'ccccc',
                    so_xe: 'ccccc',
                    hieu_luc_tu_ngay: 'ccccc',
                    hieu_luc_tu_ngay: '1/1/2017',
                    hieu_luc_den_ngay: '11/1/2018'
                  },
                  {
                    giay_phep: 'ccccc',
                    so_giay_phep: 'ccccc',
                    ten_doanh_nghiep: 'ccccc',
                    tuyen_khai_thac: 'ccccc',
                    so_xe: 'ccccc',
                    hieu_luc_tu_ngay: 'ccccc',
                    hieu_luc_tu_ngay: '1/1/2017',
                    hieu_luc_den_ngay: '11/1/2018'
                  },
                  {
                    giay_phep: 'ccccc',
                    so_giay_phep: 'ccccc',
                    ten_doanh_nghiep: 'ccccc',
                    tuyen_khai_thac: 'ccccc',
                    so_xe: 'ccccc',
                    hieu_luc_tu_ngay: 'ccccc',
                    hieu_luc_tu_ngay: '1/1/2017',
                    hieu_luc_den_ngay: '11/1/2018'
                  },
                  {
                    giay_phep: 'ccccc',
                    so_giay_phep: 'ccccc',
                    ten_doanh_nghiep: 'ccccc',
                    tuyen_khai_thac: 'ccccc',
                    so_xe: 'ccccc',
                    hieu_luc_tu_ngay: 'ccccc',
                    hieu_luc_tu_ngay: '1/1/2017',
                    hieu_luc_den_ngay: '11/1/2018'
                  }
                ];

              });
            return false;
          },
          _initServiceInfos: function(param) {
            var vm = this;
            var url = '/o/rest/v2/serviceinfos';
            var config_serviceinfo = {
              headers: {
                groupId: themeDisplay.getScopeGroupId()
              },
              params: {
                serviceCode: param.serviceCode
              }
            }
            axios.get(url, config_serviceinfo).then(function(response) {
                var serializable = response.data;
                vm.serviceInfos = serializable.data;

              })
              .catch(function(error) {
                // console.log(error);

              });
          },
          _initGovAgencys: function(param) {
            var vm = this;
            var url = '/o/rest/v2/temp/dictcollections/GOVERNMENT_AGENCY/dictitems?sort=sibling';
            var config_gov = {
              headers: {
                groupId: themeDisplay.getScopeGroupId()
              },
              params: {
                govAgencyCode: param.govAgencyCode
              }
            }
            axios.get(url, config_gov).then(function(response) {
                var serializable = response.data;
                vm.govAgencys = serializable.data;

              })
              .catch(function(error) {
                // console.log(error);

              });
          },
          _initTuyens: function(param) {
            var vm = this;
            var url = '/o/rest/v2/temp/dictcollections/DB01/dictitems?sort=sibling';
            axios.get(url, config).then(function(response) {
                var serializable = response.data;
                vm.tuyens = serializable.data;

              })
              .catch(function(error) {
                // console.log(error);

              });
          },
          _initCuaKhau: function(param) {
            var vm = this;
            var url = '/o/rest/v2/temp/dictcollections/DB05/dictitems?sort=sibling';
            axios.get(url, config).then(function(response) {
                var serializable = response.data;
                vm.cuaKhaus = serializable.data;
              })
              .catch(function(error) {
                // console.log(error);

              });
          },
          changeStateTraCuuGiayPhep: function(state) {
            var vm = this;
            vm.stateTraCuuGiayPhep = state;
            vm.serviceInfoSelect = '';
            $("#listTraCuuGiayPhep > li").removeClass("active");
            if (state == 'giay_phep_van_tai_quoc_te') {
              vm.pageGiayPhepVanTaiQuocTeTable = 1
              vm._inigiayPhepVanTaiQuocTeTable();
              vm._initServiceInfos({
                serviceCode: configPage.serviceinfosQuocTe
              });
              $("#listTraCuuGiayPhep > li:nth-child(1)").addClass("active");
            } else if (state == 'giay_phep_lien_van') {
              vm.pageGiayPhepLienVanTable = 1
              vm._inigiayPhepLienVanTable();
              vm._initServiceInfos({
                serviceCode: configPage.serviceinfosLienVan
              });
              $("#listTraCuuGiayPhep > li:nth-child(2)").addClass("active");
            } else {
              vm.pageChapThuanKhaiThacTable = 1
              vm._inichapThuanKhaiThacTable();
              vm._initServiceInfos({
                serviceCode: configPage.serviceinfosChapThuan
              });
              $("#listTraCuuGiayPhep > li:nth-child(3)").addClass("active");
            }
            // console.log('vm.stateTraCuuGiayPhep=========',vm.stateTraCuuGiayPhep);
          },
          searchTraCuuGiayPhep: function() {
            var vm = this;
            var state = vm.stateTraCuuGiayPhep;
            vm.stateTraCuuGiayPhep = state;
            if (state == 'giay_phep_van_tai_quoc_te') {
              vm.pageGiayPhepVanTaiQuocTeTable = 1
              vm._inigiayPhepVanTaiQuocTeTable();
              vm._initServiceInfos({
                serviceCode: configPage.serviceinfosQuocTe
              });
            } else if (state == 'giay_phep_lien_van') {
              vm.pageGiayPhepLienVanTable = 1
              vm._inigiayPhepLienVanTable();
              vm._initServiceInfos({
                serviceCode: configPage.serviceinfosLienVan
              });
            } else {
              vm.pageChapThuanKhaiThacTable = 1
              vm._inichapThuanKhaiThacTable();
              vm._initServiceInfos({
                serviceCode: configPage.serviceinfosChapThuan
              });
            }
          },
          getLastedStateUserInfo: function(callBack) {
            var vm = this;

            var promise = new Promise(function(resolve, reject) {
              var url = '/o/rest/v2/userInfologs';

              axios.get(url, config).then(function(response) {
                  var serializable = response.data;

                  var serviceCode = serializable.serviceInfo;
                  var applicantIdNo = serializable.applicant;
                  var dossierNo = serializable.dossierNo;

                  if (serviceCode) {
                    vm.serviceInfoFilter = {
                      serviceCode: serviceCode,
                      serviceName: ""
                    }
                  }

                  if (applicantIdNo) {
                    vm.applicantNameFilter = {
                      applicantIdNo: applicantIdNo,
                      applicantName: ""
                    }
                  }

                  if (dossierNo) {
                    vm.dossierNoFilter = dossierNo
                  }
                  resolve(true);

                })
                .catch(function(error) {
                  // console.log(error);
                  reject(false);
                });
            });


            promise.then(function(success) {
              callBack();
            }, function(error) {
              callBack();
            });


          },
          putStateUserInfo: function() {
            var vm = this;

            var stateModel = {
              "serviceInfo": vm.serviceInfoFilter.serviceCode,
              "applicant": vm.applicantNameFilter.applicantIdNo,
              "dossierNo": vm.dossierNoFilter
            }

            $.ajax({
              url: "/o/rest/v2/userInfologs",
              dataType: "json",
              type: "POST",
              headers: {
                "groupId": themeDisplay.getScopeGroupId(),
                'Cache-Control': 'no-cache'
              },
              data: stateModel,
              success: function(result) {

              },
              error: function(result) {

              }
            });


          },
          deleteDossierPDF: function(item) {
            var vm = this;

            vm.$dialog.confirm('Bạn có muốn xóa tài liệu này!', {
                html: true,
                loader: true,
                okText: 'Xác nhận',
                cancelText: 'Quay lại',
                animation: 'fade'
              })
              .then((dialog) => {
                $.ajax({
                  url: "/o/rest/v2/dossiers/" + vm.detailModel.dossierId + "/files/" + item.referenceUid,
                  dataType: "json",
                  type: "DELETE",
                  headers: {
                    "groupId": themeDisplay.getScopeGroupId(),
                    'Cache-Control': 'no-cache'
                  },
                  success: function(result) {
                    vm.snackbartextdossierViewJX = "Xoá dữ liệu thành công!";
                    vm.snackbardossierViewJX = true;
                    vm._inilistDocumentIn(vm.detailModel);
                    vm._inilistDocumentIn(vm.detailModel);
                  },
                  error: function(result) {
                    vm.snackbartextdossierViewJX = "Xoá thất bại!";
                    vm.snackbarerordossierViewJX = true;
                  }
                });
                dialog.close();
              })
              .catch((e) => {
                // console.log(e)
              })
          },
          submitAlpacajsForm: function(item) {
            var vm = this;
            vm.loadingAlpacajsForm = true;
            vm.actionsSubmitLoading = true;
            try {
              if ($("#alpacajs_form_" + item.partNo + " .formType").val() == null ||
                $("#alpacajs_form_" + item.partNo + " .formType").val() == 'undefined') {
                vm.loadingAlpacajsForm = true;

                var control = $("#alpacajs_form_" + item.partNo).alpaca("get");
                var formData = control.getValue();

                $.ajax({
                  url: "/o/rest/v2/dossiers/" + vm.detailModel.dossierId + "/files/" + item.referenceUid + "/formdata",
                  dataType: "json",
                  type: "PUT",
                  headers: {
                    "groupId": themeDisplay.getScopeGroupId(),
                    "Accept": "application/json",
                    'Cache-Control': 'no-cache'
                  },
                  data: {
                    formdata: JSON.stringify(formData)
                  },
                  success: function(result) {
                    vm.snackbartextdossierViewJX = "Lưu form thành công!";
                    vm.snackbardossierViewJX = true;
                    vm.loadingAlpacajsForm = false;
                    vm.actionsSubmitLoading = false;
                    try {

                      if (item.hasSubmit) {

                      } else {
                        if (item.counter == 0) {
                          item.counter++;
                          item.hasSubmit = true;
                        }
                      }

                    } catch (e) {

                    }
                    vm._inilistDocumentIn(vm.detailModel);
                    vm._inilistDocumentOut(vm.detailModel);
                  },
                  error: function(result) {
                    vm.snackbartextdossierViewJX = "Lưu form thất bại!";
                    vm.snackbarerordossierViewJX = true;
                    vm.loadingAlpacajsForm = false;
                    vm.actionsSubmitLoading = false;
                  }
                });

              } else if ($("#alpacajs_form_" + item.partNo + " .formType").val() != null &&
                $("#alpacajs_form_" + item.partNo + " .formType").val() === 'assign') {
                // console.log("formType 2");
                vm.loadingAlpacajsForm = true;
                var control = $("#alpacajs_form_" + item.partNo).alpaca("get");
                var formData = control.getValue();
                vm.subUsers = formData['subUsers'];
                vm.alpacaAssignUserId = formData['userAction'];
                $.ajax({
                  url: "/o/rest/v2/dossiers/" + vm.detailModel.dossierId + "/files/" + item.referenceUid + "/formdata",
                  dataType: "json",
                  type: "PUT",
                  headers: {
                    "groupId": themeDisplay.getScopeGroupId(),
                    "Accept": "application/json",
                    'Cache-Control': 'no-cache'
                  },
                  data: {
                    formdata: JSON.stringify(formData)
                  },
                  success: function(result) {
                    vm.snackbartextdossierViewJX = "Lưu form thành công!";
                    vm.snackbardossierViewJX = true;
                    vm.loadingAlpacajsForm = false;
                    vm.actionsSubmitLoading = false;
                    try {
                      if (item.hasSubmit) {
                      } else {

                        item.counter++;
                        item.hasSubmit = true;
                      }
                    } catch (e) {
                    }
                    vm._inilistDocumentIn(vm.detailModel);
                    vm._inilistDocumentOut(vm.detailModel);
                  },
                  error: function(result) {
                    vm.snackbartextdossierViewJX = "Lưu form thất bại!";
                    vm.snackbarerordossierViewJX = true;
                    vm.loadingAlpacajsForm = false;
                    vm.actionsSubmitLoading = false;
                  }
                });
              } else {
                vm.loadingAlpacajsForm = true;
                vm.actionsSubmitLoading = true;
                setTimeout(
                  function() {
                    try {
                      vm.loadingAlpacajsForm = false;
                      vm.actionsSubmitLoading = false;
                      if (item.hasSubmit) {

                      } else {

                        item.counter++;
                        item.hasSubmit = true;
                      }
                    } catch (e) {

                    }

                  },
                  3000);
              }
            } catch (e) {
              vm.loadingAlpacajsForm = false;
              vm.actionsSubmitLoading = false;
            }
          },
          showAlpacaJSFORM: function(item) {
            //alapcajs Form
            var alpacajsForm = document.getElementById("alpacajs_form_" + item.partNo);
            if (alpacajsForm.innerHTML == '' && item.eform) {
              // console.log(item);
              var alapcaJS = eval('(' + item.formScript + ')');
              alapcaJS['data'] = item.formData;

              $("#alpacajs_form_" + item.partNo).alpaca(alapcaJS);
            }
          },
          viewOnNewTab: function(item) {
            var vm = this;
            if (item.counter > 0) {
              var url = "/group/cong-xu-ly/xu-ly-ho-so?stateWindow=stateWindow&dossierId=" + vm.detailModel.dossierId +
                "&dossierPartNo=" + item.partNo;
              window.open(url, "_blank");
            }
          },
          parseDateUtc: function(date) {
            return moment(String(date)).utc().format('DD/MM/YYYY HH:mm:ss');
          },
          showAlpacaJSFORMRegist: function(item) {
            var vm = this;
            //alapcajs Form
            var url = '/o/rest/v2/registrations/' + vm.detailRegistModel.registrationId + '/forms/' + item.referenceUid + "/formscript";
            vm.alapcaJSRei = {};
            axios.get(url, config).then(function(response) {
                var serializable = response.data;

                vm.alapcaJSRei = eval('(' + serializable + ')');

                axios.get('/o/rest/v2/registrations/' + vm.detailRegistModel.registrationId + '/forms/' + item.referenceUid + "/formdata",
                    config).then(function(responseFormData) {

                    vm.alapcaJSRei['data'] = responseFormData.data;
                    $("#regist_form_" + item.referenceUid).alpaca(vm.alapcaJSRei);

                  })
                  .catch(function(error) {
                    // console.log(error);

                  });

              })
              .catch(function(error) {
                // console.log(error);
                vm.stepLoading = false;

              });
            return false;

          },
          checkHasEform(items) {
            var vm = this
            for (var i = 0; i < items.length; i++) {
              if (items[i]['eform']) {
                return true;
              }
            }
            return false;
          },
          changeProcessStep: function(item) {
            var vm = this;
            // console.log("Change process step");
            vm.dialogThuLyHoSo = true;
            // console.log(item);
            var status = vm.statusParamFilter;
            var subStatus = vm.substatusParamFilter;
            vm.stepModel = null;
            $("#alpacajs_form_plugin").empty();

            if (item.type === 1) {
              vm.maxWidthDialog = '600px';
              var needIntervalRefresh = false;
              var fileArr = item.createFiles;
              if (fileArr && fileArr.length) {
                var length = fileArr.length;
                for (var i = 0; i < length; i++) {
                  var fileItem = fileArr[i];
                  if (fileItem.counter == 0 && (!fileItem.eform) && (!fileItem.returned) && (fileItem.dossierFileId != 0)) {
                    needIntervalRefresh = true;
                    vm.disabledDossierFile = true
                    break;
                  }
                }
              } else if (fileArr) {
                var fileItem = fileArr;
                if (fileItem.counter == 0 && (!fileItem.eform) && (!fileItem.returned) && (fileItem.dossierFileId != 0)) {
                  needIntervalRefresh = true;
                  vm.disabledDossierFile = true
                }
              }
              $("textarea#processActionNote").val("");
              if (item.hasOwnProperty('createFiles') && !(item.createFiles instanceof Array)) {
                var createFilesTemp = item.createFiles;
                item.createFiles = [];
                item.createFiles.push(createFilesTemp);
              }
              if (item.autoEvent !== 'submit' && item.autoEvent !== 'timer') {
                vm.stepModel = item;
                setTimeout(function() {
                  if (vm.stepModel.hasOwnProperty('createFiles')) {
                    for (var i = 0; i < vm.stepModel.createFiles.length; i++) {
                      if (vm.stepModel.createFiles[i]['eform']) {
                        vm.maxWidthDialog = '100%';
                        vm.showAlpacaJSFORM(vm.stepModel.createFiles[i])
                      }
                    }
                  }
                }, 400);
              } else {
                vm.stepModel = null;
              }

              vm.processAssignUserIdItems = item.toUsers;
              if (needIntervalRefresh) {
                vm.disabledDossierFile = true;
                setTimeout(function() {
                  vm.refreshProcess();
                  /*change---------*/
                  vm._inilistDocumentIn(vm.detailModel);
                  vm._inilistDocumentOut(vm.detailModel);
                  if (vm.processSteps.length === 1) {
                    vm.changeProcessStep(vm.processSteps[0]);
                  } else {
                    var length = vm.processSteps.length;
                    for (var i = 0; i < length; i++) {
                      var actionItem = vm.processSteps[i];
                      if (item.actionCode === actionItem.actionCode) {
                        vm.changeProcessStep(actionItem);
                      }
                    }
                  }
                }.bind(this), 3000);
              } else {
                /*Change-------*/
                vm.disabledDossierFile = false;
              }
            } else if (item.type === 2) {
              vm.maxWidthDialog = '950px';
              var urlPluginFormData = '/o/rest/v2/dossiers/' + vm.detailModel.dossierId + '/plugins/' + item.processActionId + '/formdata';
              var urlPluginFormScript = '/o/rest/v2/dossiers/' + vm.detailModel.dossierId + '/plugins/' + item.processActionId + '/formscript';
              var config_plugins = {
                headers: {
                  'groupId': themeDisplay.getScopeGroupId()
                },
                dataType: "text"
              };

              axios.all([
                  axios.get(urlPluginFormScript, config_plugins),
                  axios.get(urlPluginFormData, config_plugins)
                ]).then(axios.spread(function(urlResponesFormScript, urlResponesFormData) {
                  var responseScript = urlResponesFormScript.data;
                  var responseData = urlResponesFormData.data;

                  // console.log("responseScript==============",responseScript);
                  item.plugin = true;

                  if (responseScript.indexOf("#preview@pdf") !== -1) {
                    // console.log("view pdf");
                    var url = "/o/rest/v2/dossiers/" + vm.detailModel.dossierId + "/plugins/" + item.processActionId + "/preview";

                    var config_blob = {
                      headers: {
                        'groupId': themeDisplay.getScopeGroupId()
                      },
                      responseType: 'blob'
                    };
                    axios.get(url, config_blob).then(function(response) {
                      var urlblob = window.URL.createObjectURL(response.data);
                      item.pdf = true;
                      item.url = urlblob;
                      item.no_pdf = '';
                      vm.stepModel = item;
                    }).catch(function(error) {
                      // console.log(error);
                      item.pdf = true;
                      item.url = '';
                      item.no_pdf = 'Tài liệu đính kèm không tồn tại!';
                      vm.stepModel = item;
                    });
                  }

                  if (responseScript.indexOf("#preview@html") !== -1) {
                    // console.log("view html");
                    $("#alpacajs_form_plugin").html("");
                    var config_view = {
                      headers: {
                        'groupId': themeDisplay.getScopeGroupId(),
                      },
                      dataType: "json"
                    };
                    item.html = true;
                    item.no_html = "";
                    vm.stepModel = item;

                    var url = '/o/rest/v2/dossiers/' + vm.detailModel.dossierId + '/plugins/' + item.processActionId + '/previewhtml';
                    axios.get(url, config_view).then(function(response) {
                        item.no_html = "";
                        vm.stepModel = item;

                        var serializable = response.data;
                        var partNo = serializable.partNo;
                        var dossierFileId = serializable.dossierFileId;

                        $(".dossierFilePartNo").val("");
                        $(".dossierFilePartNo").attr('id', 'dossierFileId' + partNo);
                        $(".dossierFilePartNo").val(dossierFileId);

                        var formReport = eval('(' + serializable.formReport + ')');
                        var formData = eval('(' + serializable.formData + ')');

                        formReport.data = formData;
                        // console.log("formReport_____FINAL=======",formReport);
                        $("#alpacajs_form_plugin").alpaca(formReport);


                      })
                      .catch(function(error) {
                        // console.log(error);
                        item.html = true;
                        item.no_html = "Tài liệu đính kèm không tồn tại!";
                        vm.stepModel = item;
                      });
                  }

                }))
                .catch(function(error) {
                  // console.log(error);

                });
            } else {
              vm.dialogThuLyHoSo = false;
              if (vm.selectedPrints.length === 0) {
                vm.snackbartextdossierViewJX = "Bạn phải tích chọn xe trước khi thực hiện hành động này";
                vm.snackbarerordossierViewJX = true;
                return;
              }
              // var printTemplateId = vm.getInLand2(item);
              item['printTemplateId'] = 2;
              vm.submitPrints(item);
            }
          },
          getInLand2: function(item) {
            var vm = this;
            // console.log(item);
            var url = "/o/il/v2/inland";
            var printTemplateId = '';
            $.ajax({
              url: url,
              headers: {
                groupId: themeDisplay.getScopeGroupId()
              },
              type: 'GET',
              async: false,
              data: {
                serviceCode: item.serviceCode,
                dossierPartNo: item.dossierPartNo,
                fileTemplateNo: item.fileTemplateNo,
                templateNo: item.dossierTemplateNo,
                licenceType: item.licenceType
              },
              success: function(result) {
                printTemplateId = result.printTemplateId
              },
              error: function(result) {
                printTemplateId = ''
              }
            })
            return printTemplateId
          },
          submitPrints: function(item) {
            var vm = this
            var select = vm.selectedPrints.join(',')
            var configHeader = {
              headers: {
                groupId: themeDisplay.getScopeGroupId()
              },
              params: {
                deliverables: select
              }
            }
            if (item.print === 'PRINT_GPLV') {
              configHeader.params['printType'] = 'DELIVERABLE'
            } else {
              configHeader.params['printType'] = 'PH'
              var codePh = '';
              var licenceType = '';
              if (vm.listCodePH.length > 0) {
                for (var i = 0; i < vm.listCodePH.length; i++) {
                  if (vm.listCodePH[i].itemCode === vm.detailModel.serviceCode) {
                    codePh = vm.listCodePH[i].itemName;
                    break;
                  }
                }
              }
              if (!codePh) {
                // console.log('ko tìm thấy mã ph!');
              }
              configHeader.params['ph'] = codePh
            }
            var url = '/o/il/v2/inland/' + vm.detailModel.dossierId + '/prints';
            axios.get(url, configHeader).then(function(response) {
              $("#printGP").html(response.data);
              $("#printGP").printThis();
              setTimeout(function() {
                $("#printGP").html("");
              }, 500)
            }).catch(function(error) {
              // console.log(error);
              vm.snackbartextdossierViewJX = item.actionName + " thất bại!";
              vm.snackbarerordossierViewJX = true;
            });
          },
          refreshProcess: function() {
            var vm = this;
            vm._initchangeProcessStep();
            vm.stepModel = null;
            vm.dialogThuLyHoSo = false
          },
          postNextActions2: function(item) {
            // console.log("itempostNextActions2============",item);
            var vm = this;
            var createFiles = item.createFiles;
            console.log("createFiles============",createFiles);
            var submitAlpacajsFns = new Array();
            var valid = true;
            console.log($('.validForm'));
            $('.validForm').each(function (index, val) {
              if ($(val).val() == '0') {
                if (createFiles) {
                  var itemCreate = createFiles.find(function (item) {
                    return item.partNo === $(val).attr('data-partNo')
                  })
                  if (itemCreate) {
                    vm.snackbartextdossierViewJX = "Vui lòng nhấn nút ghi lại của thành phần " + itemCreate.partNo + " trước khi thực hiện hành động này";
                    vm.snackbarerordossierViewJX = true;
                    valid = false;
                  }
                }
              }
            })
            if (!valid) {
              vm.dialogThuLyHoSo = true;
              return;
            }
            vm.postNextActions(item);

          },
          postNextActions: function(item) {

            // console.log(item);
            var vm = this;
            vm.actionsSubmitLoading = true;
            vm.dialogThuLyHoSo = true;
            var fileArr = item.createFiles;
            var idArr = [];
            var waitingFiles = false;
            if (fileArr) {
              var length = fileArr.length;
              for (var i = 0; i < length; i++) {
                var fileDetail = fileArr[i];
                if (fileDetail.counter == 0) {
                  waitingFiles = true;
                  break;
                }
                var dossierFileId = fileDetail.dossierFileId;
                var dossierPartId = fileDetail.dossierPartId;
                if (dossierFileId && dossierPartId) {
                  var strId = dossierFileId + ',' + dossierPartId;
                  idArr.push(strId);
                }
              }
            }
            if (item.configNote) {
              if (item.configNote.requiredNote && !$("textarea#processActionNote").val()) {
                vm.snackbartextdossierViewJX = "Bạn phải nhập ý kiến trước khi gửi";
                vm.snackbarerordossierViewJX = true;
                vm.actionsSubmitLoading = false;
                return;
              }
            }
            // console.log(idArr);

            var url = '/o/rest/v2/dossiers/' + vm.detailModel.dossierId + '/actions';

            var assignUserId = 0;
            var subUsers = '';

            if (vm.alpacaAssignUserId != 0) {

              assignUserId = vm.alpacaAssignUserId;
              subUsers = JSON.stringify(vm.subUsers);

            } else if (vm.processAssignUserId.userId > 0) {

              assignUserId = vm.processAssignUserId.userId;

            }


            var isKyOk = item.eSignature;
            if (isKyOk) {
              if (!plugin().valid) {
                alert("Plugin is not working :(");
                vm.actionsSubmitLoading = false;
                isKyOk = false;
                return;
              }
              if (waitingFiles) {
                alert("Tệp điện tử chưa sẵn sàng. Xin vui lòng chờ một lát!");
                vm.actionsSubmitLoading = false;
                return;
              }
            }

            if (!isKyOk) {
              $.ajax({
                url: url,
                headers: {
                  "groupId": themeDisplay.getScopeGroupId(),
                  'Cache-Control': 'no-cache'
                },
                data: {
                  "actionCode": item.actionCode,
                  "actionUser": themeDisplay.getUserName(),
                  "actionNote": $("textarea#processActionNote").val(),
                  "assignUserId": assignUserId,
                  "subUsers": subUsers
                },
                type: 'POST',
                dataType: 'json',
                contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                success: function(data, textStatus, xhr) {

                  vm.snackbartextdossierViewJX = item.actionName + " thành công!";
                  vm.snackbardossierViewJX = true;
                  vm.dialogThuLyHoSo = false;
                  setTimeout(function() {
                    vm._inidanhSachHoSoTable();
                    // vm.reloadCounter();
                  }, 1000);

                  vm.detailPage = false;
                  vm.actionsSubmitLoading = false;
                  vm._inilistDocumentIn(vm.detailModel);
                  vm._inilistDocumentOut(vm.detailModel);
                  vm._initlistgroupHoSoFilter();

                },
                error: function(xhr, textStatus, errorThrown) {
                  vm.dialogThuLyHoSo = false;
                  vm.snackbartextdossierViewJX = item.actionName + " thất bại!";
                  vm.snackbarerordossierViewJX = true;
                  vm.actionsSubmitLoading = false;
                }
              });
            } else {
              if (idArr) {
                var paramObj = {};
                paramObj.actionCode = item.actionCode;
                paramObj.actionUser = themeDisplay.getUserName();
                paramObj.actionNote = $("textarea#processActionNote").val();
                paramObj.assignUserId = assignUserId;
                paramObj.subUsers = subUsers;
                paramObj.postStepCode = item.postStepCode;
                var strIdArr = idArr.join(";");
                var actionName = item.actionName;
                // console.log(strIdArr);
                vm.dialogThuLyHoSo = false;
                vm.kyDuyetYCGiamDinh(strIdArr, paramObj, actionName);
              }
            }

          },
          kyDuyetYCGiamDinh: function(strIdArr, paramObj, actionName) {
            var vm = this;
            var url = '/o/rest/v2/digitalSignature/' + vm.detailModel.dossierId + '/hashComputed';
            $.ajax({
              type: 'POST',
              url: url,
              dataType: 'json',
              data: {
                strIdArr: strIdArr,
                actionCode: paramObj.actionCode,
                postStepCode: paramObj.postStepCode
              },
              success: function(result) {
                var msgs = result.msg;
                if (msgs !== 'fileEntryId') {
                  var hashComputers = result.hashComputers;
                  var signFieldNames = result.signFieldNames;
                  var fileNames = result.fileNames;
                  var fileEntryIds = result.fileEntryId;
                  vm.actionsSubmitLoading = false;
                  var signs = [];

                  if (plugin().valid) {
                    // console.log('valid plugin!')
                    for (var i = 0; i < hashComputers.length; i++) {

                      var hashComputer = hashComputers[i];
                      var code = plugin().Sign(hashComputer);

                      if (code === 0 || code === 7) {
                        var sign = plugin().Signature;
                        var signFieldName = signFieldNames[i];
                        var fileName = fileNames[i];
                        signs.push(sign);
                      } else {
                        alert(plugin().ErrorMessage);
                      }
                    }

                    vm.completeKyDuyetManyYCGiamDinh(signs.join(','), signFieldNames.join(','), fileNames.join(','), fileEntryIds.join(','), paramObj, actionName);
                  } else {
                    alert("Plugin is not working");
                  }
                } else {
                  alert("Cảnh báo: Không tìm thấy file bản thảo. Tạm dừng tiến trình ký số");
                }
              },
              error: function(result) {
                vm.actionsSubmitLoading = false;
              }
            });
          },
          completeKyDuyetManyYCGiamDinh: function(signs, signFieldNames, fileNames, fileEntryIds, paramObj, actionName) {
            var vm = this;
            var url = '/o/rest/v2/digitalSignature/' + vm.detailModel.dossierId + '/dossierFiles';
            $.ajax({
              type: 'PUT',
              url: url,
              dataType: 'json',
              headers: {
                "groupId": themeDisplay.getScopeGroupId()
              },
              data: {
                actionCode: paramObj.actionCode,
                actionUser: paramObj.actionUser,
                actionNote: paramObj.actionNote,
                assignUserId: paramObj.assignUserId,
                postStepCode: paramObj.postStepCode,
                subUsers: paramObj.subUsers,
                sign: signs,
                signFieldName: signFieldNames,
                fileName: fileNames,
                fileEntryId: fileEntryIds
              },
              success: function(result) {

                var msg = result.msg;
                if (msg == 'success') {
                  vm.snackbartextdossierViewJX = actionName + " thành công!";
                  vm.snackbardossierViewJX = true;

                  vm._inidanhSachHoSoTable();
                  setTimeout(function() {
                    vm._initlistgroupHoSoFilter();
                  }, 1000);
                  vm.detailPage = false;
                  vm.actionsSubmitLoading = false;
                } else if (msg == 'fileEntryId') {
                  alert("Cảnh báo: Không tìm thấy file bản thảo. Tạm dừng tiến trình đóng dấu số");
                } else {
                  alert(msg);
                }
              },
              error: function() {
                alert('ky so false');
              }
            })
          },
          completeKyDuyetYCGiamDinh: function(sign, signFieldName, fileName, fileEntryId, paramObj, actionName) {
            var vm = this;
            var url = '/o/rest/v2/digitalSignature/' + vm.detailModel.dossierId + '/dossierFile';
            $.ajax({
              type: 'PUT',
              url: url,
              // async: false,//bat dong bo = fale, dong bo voi client
              dataType: 'json',
              headers: {
                "groupId": themeDisplay.getScopeGroupId(),
                'Cache-Control': 'no-cache'
              },
              data: {
                actionCode: paramObj.actionCode,
                actionUser: paramObj.actionUser,
                actionNote: paramObj.actionNote,
                assignUserId: paramObj.assignUserId,
                postStepCode: paramObj.postStepCode,
                subUsers: paramObj.subUsers,
                sign: sign,
                signFieldName: signFieldName,
                fileName: fileName,
                fileEntryId: fileEntryId
              },
              success: function(result) {
                var msg = result.msg;
                if (msg == 'success') {
                  vm.snackbartextdossierViewJX = actionName + " thành công!";
                  vm.snackbardossierViewJX = true;
                  vm._inidanhSachHoSoTable();
                  setTimeout(function() {
                    vm._initlistgroupHoSoFilter();
                  }, 1000);
                  vm.detailPage = false;
                  vm.actionsSubmitLoading = false;
                } else if (msg == 'fileEntryId') {
                  alert("Cảnh báo: Không tìm thấy file bản thảo. Tạm dừng tiến trình đóng dấu số");
                } else {
                  alert(msg);
                }
              },
              error: function() {
                alert('ky so false');
              }
            })
          },
          _initchangeProcessStep: function(callBack) {
            var vm = this;
            vm.stepLoading = true;
            var timestamp = new Date().getTime();
            var url = '/o/rest/v2/dossiers/' + vm.detailModel.dossierId + '/nextactions?timestamp=' + timestamp;
            var urlPlugin = '/o/rest/v2/dossiers/' + vm.detailModel.dossierId + '/plugins?timestamp=' + timestamp;
            // var url = '/o/frontendwebdossier/json/steps.json';

            axios.all([
                axios.get(url, config),
                axios.get(urlPlugin, config)
              ]).then(axios.spread(function(urlRespones, urlPluginsRespones) {

                var serializable = urlRespones.data.data;
                var serializablePlugins = urlPluginsRespones.data.data;
                var serializablePluginsConvert = [];
                var serializableNextActionConvert = [];

                if (serializable) {
                  var pending = false;
                  for (var i = 0; i < serializable.length; i++) {
                    serializable[i].type = 1;
                    if (!serializable[i].autoEvent) {
                      if (serializable[i].configNote) {
                        var configNote = JSON.parse(serializable[i].configNote);
                        serializable[i].configNote = configNote;

                      }
                      serializableNextActionConvert.push(serializable[i]);
                    }

                  }
                } else {
                  serializable = [];
                  serializableNextActionConvert = [];
                }


                if (serializablePlugins) {
                  for (var i = 0; i < serializablePlugins.length; i++) {
                    var plugin = {
                      type: 2,
                      processActionId: serializablePlugins[i].processPluginId,
                      actionName: serializablePlugins[i].pluginName
                    };
                    serializablePluginsConvert.push(plugin);
                  }
                }


                var nextactions = serializableNextActionConvert;

                var plugins = serializablePluginsConvert;
                var printsaction = [];
                vm.showPrintable = false;
                if (callBack) {
                  callBack();
                }
                if (vm.detailModel['dossierSubStatus'] === 'processing_13' || vm.detailModel['dossierSubStatus'] === 'processing_14' || vm.detailModel['dossierSubStatus'] === 'done_3') {
                  var index2Print = listSericeCode2Print.findIndex(item => {
                    return item === vm.detailModel.serviceCode
                  })
                  if (index2Print !== -1) {
                    printsaction.push({
                      type: 3,
                      print: 'PRINT_GPLV',
                      processActionId: index2Print + 'lv',
                      actionName: 'In giấy phép liên vận'
                    })
                    printsaction.push({
                      type: 3,
                      print: 'PRINT_PH',
                      processActionId: index2Print + 'lv2',
                      actionName: 'In phù hiệu'
                    })
                  } else {
                    var indexPrint = listServiceCodePrint.findIndex(item => {
                      return item === vm.detailModel.serviceCode
                    })
                    if (indexPrint !== -1) {
                      printsaction.push({
                        type: 3,
                        print: 'PRINT_GPLV',
                        processActionId: indexPrint + 'lv',
                        actionName: 'In giấy phép'
                      })
                    }
                  }
                  var indexChinaPrint = listChinaSericeCodePrint.findIndex(item => {
                    return item === vm.detailModel.serviceCode
                  })
                  if (indexChinaPrint !== -1) {
                    vm.showTemplatePrint = true
                  }
                }
                if (printsaction.length > 0) {
                  vm.showPrintable = true;
                  vm.loadListPrints();
                }
                // console.log(printsaction)
                vm.disabledDossierFile = true;
                vm.processSteps = $.merge(nextactions, plugins);
                for (var i = 0; i < printsaction.length; i++) {
                  vm.processSteps.push(printsaction[i])
                }
                // console.log(vm.processSteps)
                vm._inilistDocumentIn(vm.detailModel);
                vm._inilistDocumentOut(vm.detailModel);
                var processStepsLength = vm.processSteps.length;
                var needIntervalRefresh = false;
                for (var rc = 0; rc < processStepsLength; rc++) {
                  var item = vm.processSteps[rc];

                  var fileArr = item.createFiles;
                  if (fileArr && fileArr.length) {
                    var length = fileArr.length;
                    for (var i = 0; i < length; i++) {
                      var fileItem = fileArr[i];
                      if (fileItem.counter == 0 && (!fileItem.eform) && (!fileItem.returned) && (fileItem.dossierFileId != 0)) {
                        needIntervalRefresh = true;
                        break;
                      }
                    }
                  } else if (fileArr) {
                    var fileItem = fileArr;
                    if (fileItem.counter == 0 && (!fileItem.eform) && (!fileItem.returned) && (fileItem.dossierFileId != 0)) {
                      needIntervalRefresh = true;
                    }
                  }
                  if (needIntervalRefresh) {
                    /*change-------------*/
                    break;
                  }
                }

                if (needIntervalRefresh) {
                  vm.disabledDossierFile = true;
                  setTimeout(function() {
                    vm.refreshProcess();
                    nOfRetry++;
                  }.bind(this), 3000);
                } else {
                  vm.stepLoading = false;
                  vm.disabledDossierFile = false;

                  if (vm.processSteps.length === 1) {
                  }
                }
              }))
              .catch(function(error) {
                // console.log(error);
                vm.stepLoading = false;
								if (callBack) {
                  callBack();
                }
              });
            return false;
          },
          filterAllDossierWithOutStatus: function() {
            this.stageFilterView = 'danh_sach';
            this.listgroupHoSoFilterselectedIndex = -1;
            this.traCuuFilter = false;
            this.detailRegistPage = false;
            this._inidanhSachHoSoTable(false);
          },
          filterTraCuu: function() {
            this.traCuuFilter = true;
            this.detailRegistPage = false;
          },
          singleFileUpload: function(item) {
            var vm = this;
            vm.actionsSubmitLoading = true;

            document.getElementById('inputfile_' + item.dossierPartId).click();
            setTimeout(function() {
              vm.actionsSubmitLoading = false;
            }, 4000);
          },
          singleFileUploadLeave: function() {
            var vm = this;
            vm.actionsSubmitLoading = false;
          },
          singleFileUploadInput: function(e, item, index) {

            var files = e.target.files || e.dataTransfer.files;

            var file = files[0];

            var vm = this;
            vm.actionsSubmitLoading = true;

            var url = '/o/rest/v2/dossiers/' + vm.detailModel.dossierId + '/files';

            var data = new FormData();
            data.append('displayName', file.name);
            data.append('file', file);
            data.append('dossierPartNo', item.partNo);
            data.append('dossierTemplateNo', vm.detailModel.dossierTemplateNo);
            data.append('fileTemplateNo', item.templateFileNo);
            data.append('fileType', '');
            data.append('isSync', item.returned);
            data.append('referenceUid', '');
            data.append('formData', '');

            $.ajax({
              type: 'POST',
              url: url,
              data: data,
              dataType: 'json',
              headers: {
                "groupId": themeDisplay.getScopeGroupId(),
                'Cache-Control': 'no-cache'
              },
              processData: false,
              contentType: false,
              cache: false,
              async: false,
              success: function(result) {
                vm.actionsSubmitLoading = false;
                vm.snackbartextdossierViewJX = " Tải file thành công!";
                vm.snackbardossierViewJX = true;

                //vm._initchangeProcessStep();
                vm.stepModel.createFiles[index].counter = vm.stepModel.createFiles[index].counter + 1;
                vm.dossierFiles.push(result);

              },
              error: function(result) {
                vm.actionsSubmitLoading = false;
                vm.snackbartextdossierViewJX = "Tải file thất bại!";
                vm.snackbarerordossierViewJX = true;
              }
            });
          },
          undoDetailPage: function() {

            this.detailPage = !this.detailPage;
            setTimeout(function() {
            }, 300);
          },
          undoDetailRegistPage: function() {
            this.detailRegistPage = !this.detailRegistPage;
            setTimeout(function() {
            }, 300);
          },
          onScroll(e) {
            this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
          },
          onScrollTop(e) {
            window.scrollBy(0, -99999)
          },
          newTabOrNewWindown: function() {
            var vm = this;
            if (stateWindowParam === "stateWindow") {

              if (dossierIdParam) {
                var urlDetailDossier = '/o/rest/v2/dossiers/' + dossierIdParam;

                axios.get(urlDetailDossier, config).then(function(response) {
                    var detailDossier = response.data;
                    vm.detailModel = detailDossier;

                    var url = "/o/rest/v2/dossiertemplates/" + detailDossier.dossierTemplateNo;
                    var urlFiles = "/o/rest/v2/dossiers/" + dossierIdParam + "/files";

                    axios.all([
                        axios.get(url, config),
                        axios.get(urlFiles, config)
                      ])
                      .then(axios.spread(function(urlRespones, urlFilesRespones) {

                        var serializableTemplate = urlRespones.data;
                        var serializableFiles = urlFilesRespones.data.data;

                        for (var i = 0; i < serializableTemplate.dossierParts.length; i++) {
                          var itemPart = serializableTemplate.dossierParts[i];
                          if (itemPart.partNo === dossierPartNo) {
                            vm.dossierViewJXTitle = itemPart.partName;
                          }

                        }

                        var listFilesUpload = [];
                        for (var key in serializableFiles) {
                          if (serializableFiles[key].dossierPartNo === dossierPartNo) {
                            if (serializableFiles[key].fileSize > 0) {
                              listFilesUpload.push(serializableFiles[key]);
                            }

                          }
                        }
                        vm.listDocumentInPartNoItems = listFilesUpload;

                        vm.popUpViewDossierFile = !vm.popUpViewDossierFile;

                        vm._initCbxDocumentNewTab(listFilesUpload);

                        /*return Promise.reject();*/

                      })).catch(function(error) {
                        // console.log(error);

                      });

                  })
                  .catch(function(error) {
                    // console.log(error);

                  });

              }
            }
          }
        }
      },
      'keywordsSearchTraCuuHoSo': {
        'id': 'keywordsSearchTraCuuHoSo',
        'name': 'keywordsSearchTraCuuHoSo',
        'type': 'text',
        'cssClass': 'pt-1',
        'placeholder': 'Tìm kiếm theo từ khoá...',
        'solo': true,
        'append_icon': 'search',
        'onKeyup': 'filterTraCuuHoSoKeywords',
        'events': {
          filterTraCuuHoSoKeywords: function(event) {
            var vm = this;
            if (event.keyCode === 13 || vm.keywordsSearchTraCuuHoSo.length > 3 || vm.keywordsSearchTraCuuHoSo.length === 0) {
              vm._initraCuuHoSoTable(false);
            }

          }
        }
      },
      'keywordsSearchTraCuuPhuongTien': {
        'id': 'keywordsSearchTraCuuPhuongTien',
        'name': 'keywordsSearchTraCuuPhuongTien',
        'type': 'text',
        'cssClass': 'pt-1',
        'placeholder': 'Tìm kiếm theo từ khoá...',
        'solo': true,
        'append_icon': 'search',
        'onKeyup': 'filterTraCuuPhuongTienKeywords',
        'events': {
          filterTraCuuPhuongTienKeywords: function(event) {
            var vm = this;
            if (event.keyCode === 13 || vm.keywordsSearchTraCuuPhuongTien.length > 3 || vm.keywordsSearchTraCuuPhuongTien.length === 0) {

            }

          }
        }
      },
      'keywordsSearchTraCuuDoanhNghiep': {
        'id': 'keywordsSearchTraCuuDoanhNghiep',
        'name': 'keywordsSearchTraCuuDoanhNghiep',
        'type': 'text',
        'cssClass': 'pt-1',
        'placeholder': 'Tìm kiếm theo từ khoá...',
        'solo': true,
        'append_icon': 'search',
        'onKeyup': 'filterTraCuuDoanhNghiepKeywords',
        'events': {
          filterTraCuuDoanhNghiepKeywords: function(event) {
            var vm = this;
            if (event.keyCode === 13 || vm.keywordsSearchTraCuuDoanhNghiep.length > 3 || vm.keywordsSearchTraCuuDoanhNghiep.length === 0) {
              vm._inithongTinDoanhNghiepTable(false);
            }

          }
        }
      },
      'thongTinDoanhNghiepTable': {
        'id': 'thongTinDoanhNghiepTable',
        'name': 'thongTinDoanhNghiepTable',
        'type': 'table',
        'no_data_text': 'Không tìm thấy hồ sơ thương nhân nào!',
        'cssClass': 'thongTinDoanhNghiepTable__class',
        'item_key': 'registrationId',
        'headers': 'headers',
        'template': 'thong_tin_doanh_nghiep_table_template',
        'pagging': '_paggingThongTinDoanhNghiepTable',
        'next': '_nextThongTinDoanhNghiepTable',
        'previous': '_previousThongTinDoanhNghiepTable',
        'events': {
          _inithongTinDoanhNghiepTable: function(append) {

            var vm = this;
            vm.traCuuFilter = true;
            vm.viewmore = true;
            this.thongTinDoanhNghiepTableheaders = [{
                text: 'STT',
                align: 'left',
                sortable: false,
                value: 'stt'
              },
              {
                text: 'Tên, địa chỉ cơ sở sản xuất. Cơ sở nhập khẩu',
                align: 'left',
                sortable: true,
                value: 'address'
              },
              {
                text: 'Mã số thuế. điện thoại. fax. email',
                align: 'left',
                sortable: true,
                value: 'contactEmail'
              },
              {
                text: 'Người đại diện. chức danh',
                align: 'left',
                sortable: true,
                value: 'applicantName'
              },
              {
                text: 'Thông tin nhà xưởng. (SL, địa chỉ, diện tích, nhân lực, công suất theo tháng)',
                align: 'left',
                sortable: false,
                value: 'action'
              },
              {
                text: 'Tên sản phẩm',
                align: 'left',
                sortable: true,
                value: 'action'
              },
              {
                text: 'Tình trạng đăng ký',
                align: 'left',
                sortable: true,
                value: 'registrationState'
              }
            ];

            var paramsBuilder = {
              keyword: vm.keywordsSearchTraCuuDoanhNghiep,
              start: vm.thongTinDoanhNghiepTablepage * 15 - 15,
              end: vm.thongTinDoanhNghiepTablepage * 15,
            };

            //TODO
            const config_registrations = {
              params: paramsBuilder,
              headers: {
                'groupId': themeDisplay.getScopeGroupId(),
              }
            };

            var url = '/o/rest/v2/registrations';

            axios.get(url, config_registrations).then(function(response) {
                var serializable = response.data;
                var arrResult = [];

                if (serializable.data) {
                  for (var i = 0; i < serializable.data.length; i++) {
                    if (!serializable.data[i].removed) {
                      arrResult.push(serializable.data[i]);
                    }
                  }
                }

                vm.thongTinDoanhNghiepTableItems = arrResult;
                vm.thongTinDoanhNghiepTableTotal = Math.ceil(serializable.total / 15);

              })
              .catch(function(error) {
                // console.log(error);
                vm.thongTinDoanhNghiepTableItems = [];

              });
            return false;
          },
          _paggingThongTinDoanhNghiepTable: function() {

            this._inithongTinDoanhNghiepTable(false);
          },
          _nextThongTinDoanhNghiepTable: function() {

          },
          _previousThongTinDoanhNghiepTable: function() {

          },
          toDetailHoSoDoanhNghiep: function(item) {

            var vm = this;
            // call DetailAPI.

            var url = '/o/rest/v2/registrations/' + item.registrationId;

            axios.get(url, config).then(function(response) {
                var serializable = response.data;

                vm.detailRegistModel = serializable;
                vm.detailRegistPage = true;
                window.scrollBy(0, -99999);
                vm._getListForms();
                vm.stateButtonregistration = true;

              })
              .catch(function(error) {
                // console.log(error);

              });
            return false;
          },
          _getListForms: function() {
            var vm = this;
            // call DetailAPI.

            var url = '/o/rest/v2/registrations/' + vm.detailRegistModel.registrationId + '/forms';

            axios.get(url, config).then(function(response) {
                var serializable = response.data;
                var arrFormnotRemmove = [];
                if (serializable.data) {
                  for (var i = 0; i < serializable.data.length; i++) {
                    if (!serializable.data[i].removed) {
                      arrFormnotRemmove.push(serializable.data[i]);
                    }
                  }
                }
                vm.registForms = arrFormnotRemmove;
                vm.detailRegistPage = true;

              })
              .catch(function(error) {
                // console.log(error);

              });
            return false;
          },
          formatDate(date) {
            if (!date) {
              return null
            }
            const [year, month, day] = date.split('-');
            return '${month}/${day}/${year}';
          },
          parseDate(date) {
            if (!date) return null;
            const [year, month, day] = date.split('-');
            return `${day}/${month}/${year}`;
          },
          addRegistrations: function() {
            var vm = this;
            vm.$dialog.confirm('Bạn có muốn thêm mới hồ sơ Doanh Nghiệp!', {
                html: true,
                loader: true,
                okText: 'Xác nhận',
                cancelText: 'Quay lại',
                animation: 'fade'
              })
              .then((dialog) => {

                // call API get file by dossierId
                var url = "/o/rest/v2/registrations";

                $.ajax({
                  url: url,
                  headers: {
                    "groupId": themeDisplay.getScopeGroupId(),
                    'Cache-Control': 'no-cache'
                  },
                  data: {
                    "applicantName": "",
                    "applicantIdType": "",
                    "applicantIdNo": "",
                    "applicantIdDate": "",
                    "address": "",
                    "cityCode": "",
                    "districtCode": "",
                    "wardCode": "",
                    "contactName": "",
                    "contactTelNo": "",
                    "contactEmail": "",
                    "govAgencyCode": "",
                    "registrationState": 2,
                    "registrationClass": ""
                  },
                  type: 'POST',
                  dataType: 'json',
                  contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                  success: function(data, textStatus, xhr) {
                    vm.detailRegistModel = data.data;
                    // console.log(vm.detailRegistModel);
                  },
                  error: function(xhr, textStatus, errorThrown) {
                    vm.detailRegistModel = {};
                  }
                });

                dialog.close();
                return false;
              })
              .catch((e) => {
                // console.log(e)
              })
          },
          registrationPheDuyet: function(registrationState) {
            var vm = this;
            vm.stateButtonregistration = false;
            var defaultMessage = 'Đồng ý phê duyệt hồ sơ doanh nghiệp này?';

            if (registrationState === 3) {
              defaultMessage = 'Gửi thông báo yêu cầu bổ sung thông tin doanh nghiệp?';
            }

            vm.$dialog.confirm(defaultMessage, {
                html: true,
                loader: true,
                okText: 'Xác nhận',
                cancelText: 'Quay lại',
                animation: 'fade'
              })
              .then((dialog) => {

                // call API get file by dossierId
                var url = "/o/rest/v2/registrations/" + vm.detailRegistModel.registrationId;

                $.ajax({
                  url: url,
                  headers: {
                    "groupId": themeDisplay.getScopeGroupId(),
                    'Cache-Control': 'no-cache'
                  },
                  data: {
                    "registrationState": registrationState,
                  },
                  type: 'PUT',
                  dataType: 'json',
                  contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                  success: function(data, textStatus, xhr) {
                    vm.detailRegistModel = data;
                    // console.log(vm.detailRegistModel);
                    vm.snackbartextdossierViewJX = "Yêu cầu xử lý thành công thành công!";
                    vm.snackbardossierViewJX = true;
                    vm.stateButtonregistration = false;

                  },
                  error: function(xhr, textStatus, errorThrown) {
                    vm.detailRegistModel = {};
                    vm.snackbartextdossierViewJX = "Yêu cầu xử lý thành công thất bại!";
                    vm.snackbarerordossierViewJX = true;
                    vm.stateButtonregistration = true;
                  }
                });

                dialog.close();
                return false;
              })
              .catch((e) => {
                // console.log(e);
                vm.stateButtonregistration = true;
              })
          }
        }
      },

      'traCuuHoSoTable': {
        'id': 'traCuuHoSoTable',
        'name': 'traCuuHoSoTable',
        'type': 'table',
        'no_data_text': 'Không tìm thấy hồ sơ nào!',
        'cssClass': 'danhSachHoSoTable__class',
        'select_all': true,
        'item_key': 'dossierId',
        'headers': 'headers',
        'template': 'tra_cuu_hoso_table_template',
        'pagging': '_paggingTraCuuHoSoTable',
        'next': '_nextTraCuuHoSoTable',
        'previous': '_previousTraCuuHoSoTable',
        'events': {
          _initraCuuHoSoTable: function(append) {
            var vm = this;
            vm.traCuuFilter = true;
            vm.viewmore = true;
            this.traCuuHoSoTableheaders = [{
                text: 'STT',
                align: 'center',
                sortable: false,
                value: 'stt'
              },
              {
                text: 'Tên chứng chỉ',
                align: 'left',
                sortable: true,
                value: 'applicantName'
              },
              {
                text: 'Mã hồ sơ. Số hồ sơ',
                align: 'left',
                sortable: true,
                value: 'dossierId'
              },
              {
                text: 'Ngày gửi. Ngày tiếp nhận. Hạn xử lý',
                align: 'left',
                sortable: true,
                value: 'submitDate'
              },
              {
                text: 'Số chứng chỉ. Ngày cấp',
                align: 'left',
                sortable: false,
                value: 'action'
              },
              {
                text: 'Tên doanh nghiệp',
                align: 'left',
                sortable: false,
                value: 'action'
              },
              {
                text: 'Hành động',
                align: 'center',
                sortable: true,
                value: 'lastActionNote'
              }
            ];

            var url = '/o/rest/v2/deliverables';
            var method = "GET";

            var paramsBuilder = {

              start: vm.traCuuHoSoTablepage * 15 - 15,
              end: vm.traCuuHoSoTablepage * 15,
              sort: 'modified',
              order: 'true'
            };
            var loai_chung_chi = vm.advancedFilterServiceInfo.deliverableType;
            try {
              if (vm.advanced_filter) {


                var ten_doanh_nghiep = vm.advanced_filter_applicantName;
                var so_ho_so = vm.advanced_filter_dossierIdCTN;
                var so_chung_chi = vm.advanced_filter_dossierNo;
                var loai_san_pham = vm.advancedFilterLoaiSanPham.itemName;
                var nhan_hieu = vm.advancedFilterNhanHieu.itemName;
                var ten_thuong_mai = vm.advanced_filter_tenThuongMai;
                var ma_kieu_loai = vm.advanced_filter_maKieuLoai;

                if (!loai_chung_chi && !ten_doanh_nghiep && !so_ho_so && !so_chung_chi && !loai_san_pham && !nhan_hieu &&
                  !ten_thuong_mai && !ma_kieu_loai) {
                  paramsBuilder.keyword = vm.keywordsSearchTraCuuHoSo;
                } else {
                  var queryKey = '"query": "';
                  var queryValue = '"values": "';
                  var queryType = '"type": "';

                  var queryKeyArr = new Array();
                  var queryValueArr = new Array();
                  var queryTypeArr = new Array();

                  if (ten_doanh_nghiep) {

                    queryKeyArr.push('(ten_doanh_nghiep like ?)');
                    queryValueArr.push('*' + ten_doanh_nghiep + '*');
                    queryTypeArr.push('String');

                  }

                  if (so_ho_so) {

                    queryKeyArr.push('(so_ho_so = ?)');
                    queryValueArr.push(so_ho_so);
                    queryTypeArr.push('String');
                  }

                  if (so_chung_chi) {

                    queryKeyArr.push('(so_chung_chi = ?)');
                    queryValueArr.push(so_chung_chi);
                    queryTypeArr.push('String');
                  }

                  if (loai_san_pham) {

                    queryKeyArr.push('(loai_san_pham = ?)');
                    queryValueArr.push(loai_san_pham);
                    queryTypeArr.push('String');
                  }

                  if (nhan_hieu) {

                    queryKeyArr.push('(nhan_hieu = ?)');
                    queryValueArr.push(nhan_hieu);
                    queryTypeArr.push('String');
                  }

                  if (ten_thuong_mai) {

                    queryKeyArr.push('(ten_thuong_mai like ?)');
                    queryValueArr.push('*' + ten_thuong_mai + '*');
                    queryTypeArr.push('String');
                  }

                  if (ma_kieu_loai) {

                    queryKeyArr.push('(ma_kieu_loai like ?)');
                    queryValueArr.push('*' + ma_kieu_loai + '*');
                    queryTypeArr.push('String');
                  }

                  var query = '{ "query": "' + queryKeyArr.join(" [and] ") + '", "values": " ' + queryValueArr.join("#") + '", "type": " ' + queryTypeArr.join(",") + '"}';
                  paramsBuilder.keyword = query;
                  url = "/o/rest/v2/deliverables/agency/BGTVTCDKVN/type/" + loai_chung_chi;
                  method = "POST";
                }

              } else {
                paramsBuilder.keyword = vm.keywordsSearchTraCuuHoSo;
              }
            } catch (e) {
              url = "/o/rest/v2/deliverables";
              method = "GET";
            }

            if (method === "POST") {
              if (!loai_chung_chi) {
                vm.snackbartextdossierViewJX = "Bạn phải chọn loại chứng chỉ trước khi tìm kiếm";
                vm.snackbarerordossierViewJX = true;
              }
            }

            $.ajax({
              url: url,
              type: method,
              dataType: "json",
              headers: {
                'groupId': themeDisplay.getScopeGroupId(),
                'Cache-Control': 'no-cache'
              },
              data: paramsBuilder,
              success: function(result) {
                var serializable = result;

                if (append) {
                  vm.traCuuHoSoTableItems.push.apply(vm.traCuuHoSoTableItems, serializable.data);
                } else {
                  vm.traCuuHoSoTableItems = serializable.data;

                  vm.traCuuHoSoTableTotal = Math.ceil(serializable.total / 15);
                }

                vm.xem_them = 'Xem thêm 8+ bản ghi';
                if (!serializable.data || serializable.data.length === 0) {
                  vm.xem_them = 'Tổng số ( ' + serializable.total + ' ) bản ghi'
                }
                vm.viewmore = false;
              },
              error: function(result) {
                // console.log(result);
                vm.traCuuHoSoTableItems = [];
              }
            });


            return false;
          },
          toViewDelivableFile: function(item) {
            var deliverableCode = item.deliverableCode;
            if (deliverableCode) {
              var url = "/o/rest/v2/dossiers/file/" + deliverableCode;

              const config_blob = {
                headers: {
                  'groupId': themeDisplay.getScopeGroupId(),
                  'Cache-Control': 'no-cache'
                },
                responseType: 'blob'
              };
              axios.get(url, config).then(function(response) {

                  var result = response.data;
                  var urlGetFile = "/o/rest/v2/dossiers/" + result.dossierId + "/files/" + result.referenceUid;

                  axios.get(urlGetFile, config_blob).then(function(response) {
                      var url = window.URL.createObjectURL(response.data);
                      //// console.log("url===========>",url);
                      window.open(url, '_blank');
                    })
                    .catch(function(error) {
                      // console.log(error);

                    });

                })
                .catch(function(error) {
                  // console.log(error);

                });

            }
            return false;
          },
          toDetailHoSoDelivable: function(item) {

            var vm = this;
            vm.stepModel = null;
            // call DetailAPI.
            vm.selectedPrints = [];
            var ma_ho_so = item.ma_ho_so;
            var urlDossierId = '/o/rest/v2/dossiers/number/' + ma_ho_so;

            axios.get(urlDossierId, config).then(function(response) {
                var serializable = response.data;

                var url = '/o/rest/v2/dossiers/' + serializable.dossierId;

                axios.get(url, config).then(function(response) {
                    var serializable = response.data;
                    var dossierStatus = serializable.dossierStatus;
                    var dossierSubStatus = serializable.dossierSubStatus;

                    if (dossierStatus === 'cancelling' ||
                      dossierStatus === 'cancelled' ||
                      dossierStatus === 'processing' ||
                      dossierStatus === 'paid') {
                      vm.listgroupHoSoFilterselected = dossierStatus;
                      vm.statusParamFilter = dossierStatus;
                      vm.substatusParamFilter = dossierSubStatus;
                    } else {
                      vm.listgroupHoSoFilterselected = dossierSubStatus;
                      vm.statusParamFilter = dossierSubStatus;
                      vm.substatusParamFilter = dossierStatus;
                    }

                    vm.detailModel = serializable;
                    vm.detailPage = true;
                    window.scrollBy(0, -99999);

                    vm._inilistDocumentIn(vm.detailModel);
                    vm._inilistDocumentOut(vm.detailModel);

                  })
                  .catch(function(error) {
                    // console.log(error);

                  });

              })
              .catch(function(error) {
                // console.log(error);

              });

            return false;
          },
          advanced_filter_btn_click: function() {
            var vm = this;
            vm._initraCuuHoSoTable(false);
          },
          _paggingTraCuuHoSoTable: function() {

            this._initraCuuHoSoTable(false);
          },
          _nextTraCuuHoSoTable: function() {

          },
          _previousTraCuuHoSoTable: function() {

          }
        }
      },
      'danhSachHoSoTable': {
        'id': 'danhSachHoSoTable',
        'name': 'danhSachHoSoTable',
        'type': 'table',
        'no_data_text': 'Không tìm thấy hồ sơ nào!',
        'cssClass': 'danhSachHoSoTable__class',
        'select_all': false,
        'item_key': 'dossierId',
        'headers': 'headers',
        'template': 'danh_sach_hoso_table_template',
        'loading': "loadingDanhSachHoSoTable",
        /*'onLoad': '_inidanhSachHoSoTable',*/
        'pagging': '_paggingDanhSachHoSo',
        'next': '_nextDanhSachHoSo',
        'previous': '_previousDanhSachHoSo',
        'events': {
          _inidanhSachHoSoTable: function(append) {
            var vm = this;
            vm.traCuuFilter = false;
            vm.viewmore = true;

            this.danhSachHoSoTableheaders = [{
                text: 'STT',
                align: 'center',
                sortable: false,
                value: 'stt'
              },
              {
                text: 'Mã tiếp nhận',
                align: 'center',
                sortable: false,
                value: 'dossierId'
              },
              {
                text: 'Thông tin hồ sơ',
                align: 'center',
                sortable: false,
                value: 'serviceName'
              },
              {
                text: 'Trạng thái',
                align: 'left',
                sortable: false,
                value: 'status'
              },
              {
                text: 'Ghi chú',
                align: 'left',
                sortable: false,
                value: 'note'
              }
              // {
              // 	text: 'Mã tiếp nhận',
              // 	align: 'left',
              // 	sortable: true,
              // 	value: 'referenceUid'
              // },

            ];
            vm.loadingDanhSachHoSoTable = true;
            var statusParam = vm.statusParamFilter;
            var substatusParam = vm.substatusParamFilter;

            /*if (vm.stageFilterView !== 'danh_sach') {
            	statusParam = vm.statusParamFilter;
            	substatusParam = vm.substatusParamFilter;
            }*/
            var agenciesTmp = '';
            if (vm.govAgencySearch) {
              agenciesTmp = vm.govAgencySearch
            } else if (vm.govAgencySearch2) {
              agenciesTmp = vm.govAgencySearch2
            } else {
              agenciesTmp = agencies
            }
            var paramsBuilder = {
              keyword: vm.keywordsSearch,
              owner: vm.applicantIdNo,
              service: vm.serviceInfo,
              agency: agenciesTmp,
              follow: true,
              dossierNo: vm.dossierNo,
              referenceUid: vm.referenceUid,
              dossierStatus: vm.dossierStatus,
              start: vm.danhSachHoSoTablepage * 15 - 15,
              end: vm.danhSachHoSoTablepage * 15,
              status: statusParam,
              substatus: substatusParam,
              fromSubmitDate: vm.startDate,
              toSubmitDate: vm.endDate,
              sort: 'modified',
              order: 'true'
            };

            if (substatusParam === 'receiving_1') {
              paramsBuilder.order = 'false'
            }

            if (vm.yearSearch) {
              // paramsBuilder['year'] = vm.yearSearch
              paramsBuilder['fromSubmitDate'] = '01/01/' + vm.yearSearch
              paramsBuilder['toSubmitDate'] = '31/12/' + vm.yearSearch
            }
            // if ( vm.keywordFilter != null ) {
            // 	paramsBuilder['keyword'] = vm.keywordFilter;
            // } else {
            // 	paramsBuilder['keyword'] = vm.keywordsSearchDanhSachHoSo;
            // }
            const config_dossiers = {
              params: paramsBuilder,
              headers: {
                'groupId': themeDisplay.getScopeGroupId(),
                'Cache-Control': 'no-cache'
              }
            };

            var url = '/o/rest/v2/dossiers/dossiersTest';

            axios.get(url, config_dossiers).then(function(response) {
                var serializable = response.data;

                if (append) {
                  vm.danhSachHoSoTableItems.push.apply(vm.danhSachHoSoTableItems, serializable.data);
                } else if (serializable.data) {

                  vm.danhSachHoSoTableItems = serializable.data;
                  vm.loadingDanhSachHoSoTable = false;
                  for (var i = 0; i < vm.danhSachHoSoTableItems.length; i++) {
                    var createDate = vm.danhSachHoSoTableItems[i].createDate.toString();
                    var year = createDate.substr(0, 4);
                    var month = createDate.substr(4, 2);
                    var day = createDate.substr(6, 2);

                    var hh = createDate.substr(8, 2);
                    var mm = createDate.substr(10, 2);
                    var ss = createDate.substr(12, 2);

                    vm.danhSachHoSoTableItems[i].createDate = day + "/" + month + "/" + year + " " + hh + ":" + mm + ":" + ss;

                  }

                  vm.danhSachHoSoTableTotal = Math.ceil(serializable.total / 15);
                  vm.totalDSHS = serializable.total;
                } else {
                  vm.danhSachHoSoTableItems = [];
                  vm.loadingDanhSachHoSoTable = false;
                  vm.danhSachHoSoTableTotal = 0;
                  vm.totalDSHS = 0;
                }

                if (vm.listgroupHoSoFilterselectedIndex >= 0) {
                  // console.log('reindex counting ...');
                  vm.listgroupHoSoFilterItems[vm.listgroupHoSoFilterselectedIndex]['count'] = serializable.total;
                }

                vm.xem_them = 'Xem thêm 8+ bản ghi';
                if (!serializable.data) {
                  vm.xem_them = 'Tổng số ( ' + serializable.total + ' ) bản ghi'
                }
                vm.viewmore = false;
              })
              .catch(function(error) {
                // console.log(error);
                vm.totalDSHS = 0;
                vm.danhSachHoSoTableItems = [];
                vm.loadingDanhSachHoSoTable = false;

              });
            return false;
          },
          getDictItemPartNo() {
            var vm = this;
            return new Promise((resolve, reject) => {

              var url = '/o/rest/v2/dictcollections/CONFIG_ESIGN/dictitems';

              axios.get(url, config).then(function(response) {
                resolve(response.data.data)
              }).catch(function(error) {
                // console.log(error);
                reject(error)
              });
            })
          },
          previewhtmlKySo(dossierId, partNo) {
            var vm = this;
            return new Promise((resolve, reject) => {
              var url = '/o/rest/v2/dossiers/' + dossierId + '/plugin/previewhtml';
              var configHeader = {
                headers: {
                  'groupId': themeDisplay.getScopeGroupId(),
                  'partNo': partNo
                },
                dataType: "json"
              }
              axios.get(url, configHeader).then(function(response) {
                resolve(response.data)
              }).catch(function(error) {
                // console.log(error);
                reject(error)
              });
            })
          },
          previewpdfKySo(dossierId, partNo) {
            var vm = this;
            return new Promise((resolve, reject) => {
              var url = '/o/rest/v2/dossiers/' + dossierId + '/plugin/previewpdf';
              var configPdf = {
                headers: {
                  'groupId': themeDisplay.getScopeGroupId(),
                  'partNo': partNo
                },
                responseType: 'blob'
              };
              axios.get(url, configPdf).then(function(response) {
                var url = window.URL.createObjectURL(response.data);
                resolve(url)
              }).catch(function(error) {
                // console.log(error);
                reject(error)
              });
            })
          },
          toDetailHoSo: function(item) {

            var vm = this;
            vm.stepModel = null;
            // call DetailAPI.
            vm.selectedPrints = [];
            vm.disableUploadAndDel = false;
            var url = '/o/rest/v2/dossiers/' + item.dossierId;
            vm.listPrintItems = [];
            axios.get(url, config).then(function(response) {
                var serializable = response.data;

                vm.detailModel = serializable;
                vm.detailModel.dossierIdCTN = item.dossierIdCTN;
                vm.detailModel.referenceUid = item.referenceUid;
                vm.detailPage = true;
                window.scrollBy(0, -99999);
                vm._initchangeProcessStep(function() {
                  vm._inilistDocumentIn(vm.detailModel);
                  vm._inilistDocumentOut(vm.detailModel);
                });

                if (serializable.dossierSubStatus === 'processing_7') {
                  vm.showBBKySo = true;
                  $("#viewBBKySoHtml").html("");
                  vm.bbKySoFile = {
                    type: '',
                    url: '',
                    html: '',
                    loading: false
                  }
                  vm.disableUploadAndDel = true;
                  vm.getDictItemPartNo().then(result => {
                    // console.log('---------------getDictItemPartNo++++++++++++++', result)
                    if (result) {
                      var itemPartNoPrint = result.find(item => {
                        return serializable['dossierTemplateNo'] === item['itemCode']
                      })
                      // console.log('---------------itemPartNoPrint++++++++++++++', itemPartNoPrint)
                      if (itemPartNoPrint) {
                        vm.bbKySoFile['type'] = itemPartNoPrint['itemName']
                        vm.bbKySoFile['loading'] = true
                        if (itemPartNoPrint['itemName'].indexOf('pdf') !== -1) {
                          vm.previewpdfKySo(vm.detailModel.dossierId, itemPartNoPrint.itemNameEN).then(result => {
                            vm.bbKySoFile['loading'] = false
                            vm.bbKySoFile['url'] = result
                          })
                        } else {
                          vm.previewhtmlKySo(vm.detailModel.dossierId, itemPartNoPrint.itemNameEN).then(result => {
                            vm.bbKySoFile['loading'] = false
                            var formReport = eval('(' + result.formReport + ')');
                            var formData = eval('(' + result.formData + ')');

                            // console.log("formReport======KS", formReport);
                            // console.log("formData======KS", formData);

                            formReport.data = formData;
                            // console.log("formReport_____FINAL=======KS", formReport);
                            setTimeout(function() {
                              // console.log("------------viewBBKySoHtml++++++++++", $("#viewBBKySoHtml"))
                              $("#viewBBKySoHtml").alpaca(formReport);
                            }, 500)
                          })
                        }
                      }
                    }
                  }).catch(xhr => {
                    vm.bbKySoFile = {
                      type: '#preview@pdf',
                      url: '',
                      html: '',
                      loading: false
                    }
                  })

                } else {
                  vm.disableUploadAndDel = false;
                  vm.showBBKySo = false;
                }

              })
              .catch(function(error) {
                // console.log(error);

              });
            return false;
          },
          _paggingDanhSachHoSo: function() {
            this._inidanhSachHoSoTable(false);
          },
          _nextDanhSachHoSo: function() {

          },
          _previousDanhSachHoSo: function() {

          }
        }
      },
      // TODO detail
      'listDocumentIn': {
        'id': 'listDocumentIn',
        'name': 'listDocumentIn',
        'type': 'listview',
        'template': 'list_document_in_template',
        'events': {
          _inilistDocumentIn: function(item) {
            return new Promise((resolve, reject) => {
              var vm = this;
              vm.loadingDocumentListIn = true;
              var url = "/o/rest/v2/dossiertemplates/" + item.dossierTemplateNo;
              var urlFiles = "/o/rest/v2/dossiers/" + item.dossierId + "/files";

              axios.all([
                  axios.get(url, config),
                  axios.get(urlFiles, config)
                ])
                .then(axios.spread(function(urlRespones, urlFilesRespones) {
                  vm.dossierFiles = urlFilesRespones.data.data;

                  var serializable = urlRespones.data;

                  var listIn = [],
                    listOut = [],
                    listAll = [];

                  for (var key in serializable.dossierParts) {

                    var countData = 0;
                    for (var keyFile in vm.dossierFiles) {

                      if (vm.dossierFiles[keyFile].dossierPartNo === serializable.dossierParts[key].partNo && vm.dossierFiles[keyFile].fileSize > 0) {
                        countData = countData + 1;
                        serializable.dossierParts[key].referenceUid = vm.dossierFiles[keyFile].referenceUid;
                        serializable.dossierParts[key].fileEntryId = vm.dossierFiles[keyFile].fileEntryId;
                        serializable.dossierParts[key].displayName = vm.dossierFiles[keyFile].displayName;

                        listAll.push(serializable.dossierParts[key]);
                      }

                    }

                    serializable.dossierParts[key].counter = countData;

                    if (serializable.dossierParts[key].partType === 2) {
                      listOut.push(serializable.dossierParts[key]);
                    } else {
                      listIn.push(serializable.dossierParts[key]);
                    }

                  }

                  vm.listDocumentInItems = listIn;
                  vm.listDocumentOutItems = listOut;
                  vm._initCbxDocumentNewTab(listAll);
                  vm.disabledDossierFile = false;
                  vm.loadingDocumentListIn = false;
                  resolve(urlFilesRespones.data.data)
                  // return Promise.reject();

                })).catch(function(error) {
                  // console.log(error);
                  reject(error);
                });
            })
          },
          viewDossierFileVersion: function(item) {
            var vm = this;

            vm.dossierViewJXTitle = item.partName;
            var listFilesUpload = [];
            for (var key in vm.dossierFiles) {
              if (vm.dossierFiles[key].dossierPartNo === item.partNo) {
                if (vm.dossierFiles[key].fileSize > 0) {
                  listFilesUpload.push(vm.dossierFiles[key]);
                }

              }
            }
            vm.listDocumentInPartNoItems = listFilesUpload;
            if (item.counter > 0) {
              vm.popUpViewDossierFile = !vm.popUpViewDossierFile;
            }

          },
          viewDossierFileVersionNewTabOrWindow: function(item) {
            var vm = this;
            if (item.counter > 0) {
              // console.log("vm.detailModel========",vm.detailModel);

              var url = "/group/cong-xu-ly/xu-ly-ho-so?stateWindow=stateWindow&dossierId=" + vm.detailModel.dossierId +
                "&dossierPartNo=" + item.partNo;

              vm.$dialog.confirm('Bạn muốn mở trong tab mới hay cửa sổ mới!', {
                  html: true,
                  loader: true,
                  okText: 'Cửa sổ mới',
                  cancelText: 'Tab mới',
                  animation: 'fade'
                })
                .then((dialog) => {
                  //// console.log("dialog============",dialog);

                  window.open(url, "_blank", "ccc");

                  dialog.close();
                  return false;
                })
                .catch((e) => {
                  // console.log(e);
                  window.open(url, "_blank");
                })
            }

          },
          viewDossierFileResult: function(item, index) {
            var vm = this;
            if (item.counter > 0) {
              vm.popupResultFile = true;
              // call API get file by dossierId
              var urlFiles = "/o/rest/v2/dossiers/" + vm.detailModel.dossierId + "/files";

              axios.get(urlFiles, config).then(function(response) {
                  var serializable = response.data;
                  var resultsFiles = [];
                  for (var key in serializable.data) {
                    if (serializable.data[key].dossierPartType === 2 && serializable.data[key].dossierPartNo === item.partNo) {
                      serializable.data[key].index = index;
                      resultsFiles.push(serializable.data[key]);
                    }
                  }
                  vm.listDocumentOutStepItems = resultsFiles;
                  vm.popUpViewDossierFile = !vm.popUpViewDossierFile;

                })
                .catch(function(error) {
                  // console.log(error);

                });
            }
            return false;
          }
        }
      },
      'listDocumentInPartNo': {
        'id': 'listDocumentInPartNo',
        'name': 'listDocumentInPartNo',
        'type': 'listview',
        'template': 'list_document_in_part_no_template'
      },
      'listDocumentOut': {
        'id': 'listDocumentOut',
        'name': 'listDocumentOut',
        'type': 'listview',
        'template': 'list_document_out_template',
        'events': {
          downloadReferenceFile: function(item) {
            // call DownloadFile.
            var vm = this;
            const config_blob = {
              headers: {
                'groupId': themeDisplay.getScopeGroupId(),
                'Content-Type': 'application/json'
              },
              responseType: 'blob'
            };

            var url = '/o/rest/v2/dossiers/' + vm.detailModel.dossierId + '/files/' + item.referenceUid;

            axios.get(url, config_blob).then(function(response) {
                var url = window.URL.createObjectURL(response.data);
                //// console.log(url);
                window.open(url);
              })
              .catch(function(error) {
                // console.log(error);

              });
            return false;
          },
          _inilistDocumentOut: function(item) {
            var vm = this;
            //							vm.listDocumentInItems = [];
            //							vm.listDocumentOutItems = [];
            vm.loadingDocumentListOut = true
            var url = "/o/rest/v2/dossiertemplates/" + item.dossierTemplateNo;
            var urlFiles = "/o/rest/v2/dossiers/" + item.dossierId + "/files";

            axios.all([
                axios.get(url, config),
                axios.get(urlFiles, config)
              ])
              .then(axios.spread(function(urlRespones, urlFilesRespones) {
                // Both requests are now complete
                vm.dossierFiles = urlFilesRespones.data.data;

                var serializable = urlRespones.data;

                var listIn = [],
                  listOut = [],
                  listAll = [];

                for (var key in serializable.dossierParts) {

                  var countData = 0;
                  for (var keyFile in vm.dossierFiles) {

                    if (vm.dossierFiles[keyFile].dossierPartNo === serializable.dossierParts[key].partNo) {
                      countData = countData + 1;
                      serializable.dossierParts[key].referenceUid = vm.dossierFiles[keyFile].referenceUid;
                      serializable.dossierParts[key].fileEntryId = vm.dossierFiles[keyFile].fileEntryId;
                      serializable.dossierParts[key].displayName = vm.dossierFiles[keyFile].displayName;

                      if (vm.dossierFiles[keyFile].fileSize <= 0) {

                        countData = countData - 1;

                      }

                    }

                  }

                  serializable.dossierParts[key].counter = countData;

                  if (serializable.dossierParts[key].partType === 2) {
                    if (serializable.dossierParts[key].partNo.indexOf("KQ") !== -1) {

                      listOut.push(serializable.dossierParts[key]);
                    }

                  }

                }

                vm.listDocumentOutItems = listOut;
                vm.loadingDocumentListOut = false;
                return Promise.reject();

              })).catch(function(error) {
                // console.log(error);

              });
            return false;
          }
        }
      },
      'listDocumentOutStep': {
        'id': 'listDocumentOutStep',
        'name': 'listDocumentOutStep',
        'type': 'listview',
        'template': 'list_document_out_part_no_template'
      },
      'listHistoryProcessing': {
        'id': 'listHistoryProcessing',
        'name': 'listHistoryProcessing',
        'type': 'table',
        'cssClass': 'table_history_style',
        'hide_headers': true,
        'template': 'list_history_processing_template',
        'onLoad': '_inilistHistoryProcessing',
        'events': {
          _inilistHistoryProcessing: function() {

            var vm = this;
            vm.listHistoryProcessingItems = [];

          },
          selectDossierActionTab() {
            var vm = this;
            //var url = "/o/frontendwebdossier/json/dossier_logs.json?t=1";
            var url = "/o/rest/v2/dossierlogs/" + vm.detailModel.dossierId + "/logs?sort=modified&order=true";
            vm.listHistoryProcessingItems = [];
            axios.get(url, config).then(function(response) {
                var serializable = response.data;
                for (var key in serializable.data) {
                  if (serializable.data[key].notificationType === 'PROCESS_TYPE') {
                    serializable.data[key].createDate = vm.parseDateUtc(serializable.data[key].createDate);
                    var stepNameTmp = serializable.data[key].payload.stepName;
                    if (stepNameTmp) {
                      if (stepNameTmp === "type_cancelling") {
                        stepNameTmp = "Yêu cầu hủy";
                      } else if (stepNameTmp === "type_submit") {
                        stepNameTmp = "Yêu cầu sửa thành phần hồ sơ";
                      } else if (stepNameTmp === "type_submitting") {
                        stepNameTmp = "Yêu cầu sửa đổi bổ sung";
                      } else if (stepNameTmp === "type_correcting") {
                        stepNameTmp = "Yêu cầu chỉnh sửa kết quả";
                      } else if (stepNameTmp === "type_reject_cancelling") {
                        stepNameTmp = "Từ chối yêu cầu hủy";
                      } else if (stepNameTmp === "type_reject_submit") {
                        stepNameTmp = "Hủy yêu cầu sửa thành phần hồ sơ";
                      } else if (stepNameTmp === "type_reject_submitting") {
                        stepNameTmp = "Từ chối yêu cầu bổ sung";
                      } else if (stepNameTmp === "type_reject_correcting") {
                        stepNameTmp = "Hủy yêu cầu chỉnh sửa kết quả";
                      }
                    }
                    serializable.data[key].payload.stepName = stepNameTmp;

                    vm.listHistoryProcessingItems.push(serializable.data[key]);
                  }
                }
              })
              .catch(function(error) {
                // console.log(error);

              });
            return false;
          },
          downloadFile(fileAttachId) {
            var vm = this;
            var url = "/o/rest/v2/dossiers/" + vm.detailModel.dossierId + "/files/" + fileAttachId;
            const config_blob = {
              headers: {
                'groupId': themeDisplay.getScopeGroupId(),
                'Content-Type': 'application/json'
              },
              responseType: 'blob'
            };
            axios.get(url, config_blob).then(function(response) {
                var url = window.URL.createObjectURL(response.data);
                window.open(url);
              })
              .catch(function(error) {
                // console.log(error);

              });
            return false;
          }
        }
      },
      "processAssignUserId": {
        'id': 'processAssignUserId',
        'name': 'processAssignUserId',
        "type": "select",
        'required': true,
        'label': 'Lựa chọn cán bộ phân công xử lý ',
        "item_text": "userName",
        "item_value": "userId",
        "hide_selected": true,
        "chips": true,
        "deletable_chips": true,
        "loading": false,
        "no_data_text": "Lua chon selected",
        "items": [],
        'onLoad': '_initprocessAssignUserId',
        'events': {
          _initprocessAssignUserId: function() {

            this.processAssignUserIdItems = [{
                "userId": 1,
                "userName": "userName1",
                "moderator": false
              },
              {
                "userId": 2,
                "userName": "userName2",
                "moderator": false
              },
              {
                "userId": 3,
                "userName": "userName3",
                "moderator": false
              },
              {
                "userId": 4,
                "userName": "userName4",
                "moderator": false
              }
            ];
          }
        }
      },
      // TODO POPUP
      'popUpViewDossierFile': {
        'id': 'popUpViewDossierFile',
        'name': 'popUpViewDossierFile',
        "type": "dialog",
        "type_dialog": "fullScreen",
        'icon_save': 'undo',
        'label_save': 'Quay lại',
        "color": "primary",
        "template": "popUpViewDossierFileTemplate",
        "events": {
          popUpViewDossierFileClose: function() {
            // console.log("close popup");
            var iFrame = document.getElementById("dossierPDFView");
            var dossierPDFViewNotFound = document.getElementById("dossierPDFViewNotFound");
            iFrame.innerHTML = '';
            this.popUpViewDossierFile = false;
            this.popupResultFile = false;
          },
          popUpViewDossierFileSave: function() {
            // console.log("save popup");
            var vm = this;
            var iFrame = document.getElementById("dossierPDFView");
            iFrame.innerHTML = '';
            dossierPDFViewNotFound.innerHTML = '';
            vm.popUpViewDossierFile = false;
            vm.popupResultFile = false;
          },
          previewDossierPDF: function(item) {
            var vm = this;
            vm.dossierViewJXTitle = item.displayName;
            // TODO: call API lay file
            var url = "/o/rest/v2/dossiers/" + vm.detailModel.dossierId + "/files/" + item.referenceUid;
            // var url = "/o/rest/v2/dossiers/14203/files/a148ee9b-b1a7-b2e7-ca0e-e6503a65b8eb";
            // console.log("Preview dossier PDF");
            vm._showFile({
              config: {
                headers: {
                  'groupId': themeDisplay.getScopeGroupId(),
                  'Content-Type': 'application/json'
                },
                responseType: 'blob'
              },
              url: url
            });

          },
          _showFile: function(options) {
            var iFrame = document.getElementById("dossierPDFView");
            var dossierPDFViewNotFound = document.getElementById("dossierPDFViewNotFound1");
            axios.get(options.url, options.config).then(function(response) {
                // console.log(response)
                var url = window.URL.createObjectURL(response.data);
                iFrame.className = "";
                iFrame.innerHTML = '<iframe src="' + url + '" width="100%" height="100%"> </iframe>';
                dossierPDFViewNotFound.innerHTML = '';
                if (response.status === 204) {
                  dossierPDFViewNotFound.innerHTML = 'Tài liệu không tồn tại!';
                }

              })
              .catch(function(error) {
                // console.log(error);
                dossierPDFViewNotFound.innerHTML = 'Tài liệu đính kèm không tồn tại!';

              });
            return false;
          },
          previewDossierPDFNewTab: function(item) {
            var vm = this;
            var url = "/o/rest/v2/dossiers/" + vm.detailModel.dossierId + "/files/" + item.referenceUid;

            const config_blob = {
              headers: {
                'groupId': themeDisplay.getScopeGroupId(),
                'Content-Type': 'application/json'
              },
              responseType: 'blob'
            };

            axios.get(url, config_blob).then(function(response) {
                var url = window.URL.createObjectURL(response.data);
                window.open(url);
              })
              .catch(function(error) {
                // console.log(error);

              });
            return false;
          }
        }
      },
      "cbxDocumentNewTab": {
        'id': 'cbxDocumentNewTab',
        'name': 'cbxDocumentNewTab',
        "type": "select",
        'label': 'Xem tài liệu trong tabs mới',
        "item_text": "displayName",
        "item_value": "referenceUid",
        "single_line": true,
        "hide_selected": true,
        "loading": false,
        "no_data_text": "Lua chon selected",
        "items": [],
        "onChange": "_newTabCbxDocumentNewTab($event)",
        "events": {
          _initCbxDocumentNewTab: function(listAll) {
            var vm = this;

            vm.cbxDocumentNewTabItems = listAll;
          },
          _newTabCbxDocumentNewTab: function(data) {
            var vm = this;
            const config_blob = {
              headers: {
                'groupId': themeDisplay.getScopeGroupId(),
                'Content-Type': 'application/json'
              },
              responseType: 'blob'
            };

            var url = '/o/rest/v2/dossiers/' + vm.detailModel.dossierId + '/files/' + data.referenceUid;

            axios.get(url, config_blob).then(function(response) {
                var url = window.URL.createObjectURL(response.data);
                //// console.log(url);
                window.open(url);
              })
              .catch(function(error) {
                // console.log(error);

              });
            return false;
          }

        }
      },
      // TODO ADVANCED SEARCH
      "advanced_filter_serviceInfo": {
        'id': 'advanced_filter_serviceInfo',
        'name': 'advanced_filter_serviceInfo',
        "type": "select",
        'cssClass': 'no-wrap',
        "item_text": "deliverableName",
        "item_value": "deliverableType",
        'label': 'Lựa chọn loại chứng chỉ',
        "hide_selected": true,
        "combobox": true,
        "loading": false,
        "no_data_text": "Lua chon selected",
        "items": [],
        "onChange": "_filterAdvancedServiceInfoOnchange($event)",
        'events': {
          _initAdvanced_filter_serviceInfo: function() {
            var vm = this;
            var url = "/o/rest/v2/deliverabletypes";
            axios.get(url, config).then(function(response) {
                var serializable = response.data;
                vm.advanced_filter_serviceInfoItems = serializable.data;
                // console.log(vm.advanced_filter_serviceInfoItems);
              })
              .catch(function(error) {
                // console.log(error);

              });
          },
          _filterAdvancedServiceInfoOnchange: function(data) {
            var vm = this;
            vm.advancedFilterServiceInfo = data;
          }
        }
      },
      "advanced_filter_applicantName": {
        'id': 'advanced_filter_applicantName',
        'name': 'advanced_filter_applicantName',
        "type": "text",
        'label': 'Tên doanh nghiệp'
      },
      "advanced_filter_dossierIdCTN": {
        'id': 'advanced_filter_dossierIdCTN',
        'name': 'advanced_filter_dossierIdCTN',
        "type": "text",
        'label': 'Số hồ sơ'
      },
      "advanced_filter_startDate": {
        'id': 'advanced_filter_startDate',
        'name': 'advanced_filter_startDate',
        'type': 'date',
        'label': 'Từ ngày'
      },
      "advanced_filter_endDate": {
        'id': 'advanced_filter_endDate',
        'name': 'advanced_filter_endDate',
        'type': 'date',
        'label': 'Đến ngày'
      },
      "advanced_filter_dossierStatus": {
        'id': 'advanced_filter_dossierStatus',
        'name': 'advanced_filter_dossierStatus',
        'type': 'select',
        'cssClass': 'no-wrap',
        "item_text": "statusName",
        "item_value": "dossierStatus",
        'label': 'Trạng thái hồ sơ',
        "hide_selected": true,
        "combobox": true,
        "loading": false,
        "no_data_text": "Lua chon selected",
        "onChange": "_filterAdvancedDossierStatusOnchange($event)",
        'events': {
          _initAdvanced_filter_dossierStatus: function() {
            var vm = this;
            if (!vm.advanced_filter_dossierStatusItems) {

              var url = '/o/rest/v2/statistics/dossiers/todo';
              // console.log("Init load 3");
              axios.get(url, config).then(function(response) {
                  var serializable = response.data;

                  var serializable = response.data;
                  vm.advanced_filter_dossierStatusItems = serializable.data;
                  // console.log(vm.advanced_filter_dossierStatusItems);

                })
                .catch(function(error) {
                  // console.log(error);

                });
            }
            return false;
          },
          _filterAdvancedDossierStatusOnchange: function(data) {
            var vm = this;
            vm.advancedFilterDossierStatus = data;
          }
        }
      },
      "advanced_filter_loaiSanPham": {
        'id': 'advanced_filter_loaiSanPham',
        'name': 'advanced_filter_loaiSanPham',
        "type": "select",
        'cssClass': 'no-wrap',
        "item_text": "itemName",
        "item_value": "itemCode",
        'label': 'Loại sản phẩm',
        "hide_selected": true,
        "combobox": true,
        "loading": false,
        "no_data_text": "Lua chon selected",
        "items": [],
        "onChange": "_filterAdvancedLoaiSanPhamOnchange($event)",
        'events': {
          _initAdvanced_filter_loaiSanPham: function() {
            var vm = this;
            if (vm.advanced_filter_loaiSanPhamItems.length <= 0) {

              var url = '/o/rest/v2/dictcollections/VR02/dictitems?sort=sibling';

              axios.get(url, config).then(function(response) {
                  var serializable = response.data;
                  vm.advanced_filter_loaiSanPhamItems = serializable.data;
                  // console.log(vm.advanced_filter_loaiSanPhamItems);
                })
                .catch(function(error) {
                  // console.log(error);

                });
            }
            return false;
          },
          _filterAdvancedLoaiSanPhamOnchange: function(data) {
            var vm = this;
            vm.advancedFilterLoaiSanPham = data;
          }
        }
      },
      "advanced_filter_nhanHieu": {
        'id': 'advanced_filter_nhanHieu',
        'name': 'advanced_filter_nhanHieu',
        "type": "select",
        'cssClass': 'no-wrap',
        "item_text": "itemName",
        "item_value": "itemCode",
        'label': 'Nhãn hiệu',
        "hide_selected": true,
        "combobox": true,
        "loading": false,
        "no_data_text": "Lua chon selected",
        "items": [],
        "onChange": "_filterAdvancedNhanHieuOnchange($event)",
        'events': {
          _initAdvanced_filter_nhanHieu: function() {
            var vm = this;
            if (vm.advanced_filter_nhanHieuItems.length <= 0) {

              var url = '/o/rest/v2/dictcollections/VR03/dictitems?sort=sibling';

              axios.get(url, config).then(function(response) {
                  var serializable = response.data;
                  vm.advanced_filter_nhanHieuItems = serializable.data;
                })
                .catch(function(error) {
                  // console.log(error);

                });
            }
            return false;
          },
          _filterAdvancedNhanHieuOnchange: function(data) {
            var vm = this;
            vm.advancedFilterNhanHieu = data;
          }
        }
      },
      "advanced_filter_tenThuongMai": {
        'id': 'advanced_filter_tenThuongMai',
        'name': 'advanced_filter_tenThuongMai',
        "type": "text",
        'label': 'Tên thương mại'
      },
      "advanced_filter_maKieuLoai": {
        'id': 'advanced_filter_maKieuLoai',
        'name': 'advanced_filter_maKieuLoai',
        "type": "text",
        'label': 'Mã kiểu loại'
      }
    }
  });

  dossierViewJX._builder('dossierViewJX');
}
