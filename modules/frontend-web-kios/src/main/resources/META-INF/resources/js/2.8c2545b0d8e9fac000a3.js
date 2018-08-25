webpackJsonp([2],{466:function(e,t,i){var n=i(184)(i(478),i(482),null,null);n.options.__file="d:\\FDS_OPENCPS\\front-end-v2.1\\frontend-opencps-v2.1\\onegate_21_kios\\src\\components\\TraCuuThuTuc.vue",n.esModule&&Object.keys(n.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] TraCuuThuTuc.vue: functional components are not supported with templates, they should use render functions."),e.exports=n.exports},478:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(80),a=i(60),l=(i.n(a),i(185)),s=i.n(l);t.default={props:[],components:{},data:function(){return{loading:!1,loadingAction:!1,serviceNameKey:"",listLinhVuc:[],linhVucSelected:"",listMucDo:[],levelSelected:"",listThuTuc:[],govAgencyList:[],serviceItemTotal:0,visible:!1,layout:"normal",input:null,options:{useKbEvents:!1}}},computed:{},created:function(){this.$nextTick(function(){var e=this,t=e.$router.history.current,i=t.query;s()("#serviceNameKey").val(i.hasOwnProperty("keyword")?i.keyword:""),e.levelSelected=i.hasOwnProperty("level")?Number(i.level):"",e.linhVucSelected=i.hasOwnProperty("domain")?i.domain:"",e.loading=!0,e.listThuTuc=[],e.$store.dispatch("getDomainLists").then(function(t){e.listLinhVuc=t}),e.$store.dispatch("getLevelLists").then(function(t){e.listMucDo=t}),e.$store.dispatch("getGovAgency").then(function(t){e.govAgencyList=t}),e.doLoadingThuTuc()})},watch:{$route:function(e,t){var i=this,n=(e.params,e.query);s()("#serviceNameKey").val(n.hasOwnProperty("keyword")?n.keyword:""),i.levelSelected=n.hasOwnProperty("level")?Number(n.level):"",i.linhVucSelected=n.hasOwnProperty("domain")?n.domain:"",i.doLoadingThuTuc()}},methods:{filterServiceinfos:function(e){var t=this,i=t.$router.history.current,n=i.query,a="?";"refesh"===e&&(t.visible=!1,s()("#serviceNameKey").val(""),t.levelSelected="",t.linhVucSelected=""),n.keyword=s()("#serviceNameKey").val(),n.level=t.levelSelected?t.levelSelected:"",n.domain=t.linhVucSelected?t.linhVucSelected:"";for(var l in n)""!==n[l]&&"undefined"!==n[l]&&void 0!==n[l]&&null!==n[l]&&(a+=l+"="+n[l]+"&");t.$router.push({path:i.path+a,query:{renew:Math.floor(100*Math.random())+1}})},doLoadingThuTuc:function(){var e=this;e.listThuTuc=[],e.loading=!0;var t=n.a.history.current.query,i=null;i={keyword:t.hasOwnProperty("keyword")?t.keyword:"",level:t.hasOwnProperty("level")?t.level:"",domain:t.hasOwnProperty("domain")?t.domain:""},e.$store.dispatch("getServiceLists",i).then(function(t){e.loading=!1,e.listThuTuc=t.data,e.serviceItemTotal=t.total}).catch(function(t){e.loading=!1,e.listThuTuc=[],e.serviceItemTotal=0})},viewDetail:function(e){n.a.push("/tra-cuu-thu-tuc/"+e.serviceInfoId)},checkAgency:function(e){var t=this,i=void 0;return i=t.listThuTuc.filter(function(t){return t.administrationCode===e.administrationCode}),i.length>0},checkDomain:function(e){var t=this,i=void 0;return i=t.listThuTuc.filter(function(t){return t.domainCode===e.domainCode}),i.length>0},checkThuTuc:function(e,t,i){return i.administrationCode===e.administrationCode&&i.domainCode===t.domainCode},getColor:function(e){return 2===e?"green":3===e?"orange":4===e?"red":void 0},clear:function(e){s()("#"+e).val("")},accept:function(e){this.hide()},show:function(e){this.input=e.target,this.visible||(this.visible=!0)},hide:function(){this.visible=!1},next:function(){var e=this,t=document.querySelectorAll("input"),i=!1;[].forEach.call(t,function(n,a){!i&&n===e.input&&a<t.length-1&&(i=!0,e.$nextTick(function(){t[a+1].focus()}))}),i||(this.input.blur(),this.hide())}}}},482:function(e,t,i){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"px-2 py-0"},[i("div",[i("v-layout",{staticClass:"px-0 py-0",attrs:{wrap:""}},[i("div",{staticStyle:{width:"calc(100% - 260px)"}},[i("v-layout",{attrs:{wrap:""}},[i("v-flex",{staticClass:"pl-2 pr-2",attrs:{xs4:""}},[i("div",{staticClass:"input-group input-group--placeholder input-group--text-field primary--text"},[i("label",[e._v("Tên thủ tục")]),e._v(" "),i("div",{staticClass:"input-group__input"},[i("input",{attrs:{id:"serviceNameKey","data-layout":"normal","aria-label":"Tên thủ tục",placeholder:"Nhấn để nhập tên thủ tục",type:"text"},on:{focus:e.show}}),e._v(" "),e.visible?i("i",{staticClass:"icon material-icons input-group__append-icon input-group__icon-cb input-group__icon-clearable",attrs:{"aria-hidden":"true"},on:{click:function(t){e.clear("serviceNameKey")}}},[e._v("clear")]):e._e()]),e._v(" "),i("div",{staticClass:"input-group__details"})])]),e._v(" "),i("v-flex",{staticClass:"pl-2 pr-2",attrs:{xs4:""}},[i("v-select",{attrs:{items:e.listLinhVuc,autocomplete:"",label:"Lĩnh vực",placeholder:"Chọn lĩnh vực","item-text":"domainName","item-value":"domainCode","hide-selected":!0,clearable:""},model:{value:e.linhVucSelected,callback:function(t){e.linhVucSelected=t},expression:"linhVucSelected"}})],1),e._v(" "),i("v-flex",{staticClass:"pl-2 pr-2",attrs:{xs4:""}},[i("v-select",{attrs:{items:e.listMucDo,autocomplete:"",label:"Mức độ",placeholder:"Chọn mức độ","item-text":"levelName","item-value":"level","hide-selected":!0,clearable:""},scopedSlots:e._u([{key:"item",fn:function(t){return[[i("v-list-tile-content",[i("v-list-tile-title",[e._v("Mức độ "+e._s(t.item.level))])],1)]]}}]),model:{value:e.levelSelected,callback:function(t){e.levelSelected=t},expression:"levelSelected"}})],1)],1)],1),e._v(" "),i("div",{staticClass:"pt-2 text-center",staticStyle:{width:"260px"}},[i("v-btn",{staticStyle:{height:"30px",width:"110px"},attrs:{color:"primary",loading:e.loading,disabled:e.loading},on:{click:function(t){e.filterServiceinfos("filter")}}},[i("v-icon",{attrs:{size:"18"}},[e._v("search")]),e._v("\n           \n          Tra Cứu\n          "),i("span",{attrs:{slot:"loader"},slot:"loader"},[e._v("Loading...")])],1),e._v(" "),i("v-btn",{staticStyle:{height:"30px",width:"110px"},attrs:{outline:"",color:"primary",loading:e.loading,disabled:e.loading},on:{click:function(t){e.filterServiceinfos("refesh")}}},[i("v-icon",{attrs:{size:"18"}},[e._v("refresh")]),e._v("\n           \n          Làm Mới\n          "),i("span",{attrs:{slot:"loader"},slot:"loader"},[e._v("Loading...")])],1)],1)]),e._v(" "),e.visible?i("vue-touch-keyboard",{staticClass:"mt-5",attrs:{layout:e.layout,cancel:e.hide,accept:e.accept,input:e.input,next:e.next}}):e._e(),e._v(" "),i("div",{staticClass:"my-3 pt-2 text-center total-result-search"},[i("span",{staticClass:"text-bold"},[e._v("Có "+e._s(e.serviceItemTotal)+" kết quả được tìm thấy")])]),e._v(" "),e.loading?i("content-placeholders",{staticClass:"mt-3"},[i("content-placeholders-text",{attrs:{lines:10}})],1):i("div",{staticClass:"overflowContainer"},e._l(e.govAgencyList,function(t,n){return e.checkAgency(t)?i("div",{key:n,staticClass:"mb-3 main-header"},[i("v-expansion-panel",{staticClass:"expansion-pl"},[i("v-expansion-panel-content",{attrs:{value:"1"}},[i("div",{staticClass:"pl-2",attrs:{slot:"header"},slot:"header"},[e._v("\n              "+e._s(t.administrationName)+"\n            ")]),e._v(" "),e._l(e.listLinhVuc,function(n,a){return e.checkDomain(n)?i("v-card",{key:a,staticClass:"sub-header"},[i("v-expansion-panel",{staticClass:"expansion-pl"},[i("v-expansion-panel-content",{attrs:{value:"1"}},[i("div",{staticClass:"pl-4",attrs:{slot:"header"},slot:"header"},[e._v("\n                    "+e._s(n.domainName)+"\n                  ")]),e._v(" "),i("v-card",{staticClass:"list-bdb"},e._l(e.listThuTuc,function(a,l){return e.checkThuTuc(t,n,a)?i("div",{key:l,staticClass:"pl-4 pr-2 py-1 boder-bottom"},[i("v-layout",{staticClass:"px-0 py-0",staticStyle:{"align-items":"center"},attrs:{wrap:""}},[i("div",{staticStyle:{width:"110px"}},[i("v-chip",{staticClass:"mx-0 my-0",staticStyle:{height:"25px"},attrs:{label:"",color:e.getColor(a.maxLevel),"text-color":"white"}},[e._v("\n                            Mức độ "+e._s(a.maxLevel)+"\n                          ")])],1),e._v(" "),i("div",{staticClass:"px-2",staticStyle:{width:"calc(100% - 220px)"}},[e._v(e._s(a.serviceName))]),e._v(" "),i("div",{staticStyle:{width:"110px"}},[i("v-btn",{staticClass:"mx-0",staticStyle:{width:"100%"},attrs:{color:"primary",loading:e.loading,disabled:e.loading},on:{click:function(t){e.viewDetail(a)}}},[e._v("\n                            Chi tiết\n                            "),i("span",{attrs:{slot:"loader"},slot:"loader"},[e._v("Loading...")])])],1)])],1):e._e()}))],1)],1)],1):e._e()})],2)],1)],1):e._e()}))],1)])},staticRenderFns:[]},e.exports.render._withStripped=!0}});
//# sourceMappingURL=2.8c2545b0d8e9fac000a3.js.map