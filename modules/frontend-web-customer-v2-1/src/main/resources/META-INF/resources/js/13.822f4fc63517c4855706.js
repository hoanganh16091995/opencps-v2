webpackJsonp([13],{147:function(t,e,a){var s=a(70)(a(189),a(192),null,null);t.exports=s.exports},189:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{resultFiles:{type:Array,default:function(){return[]}}},data:function(){return{dossierId:"",loadingAction:!1,headers:[{text:"STT",align:"center",sortable:!1},{text:"Số giấy",align:"center",sortable:!1},{text:"Ngày cấp",align:"center",sortable:!1},{text:"Tên giấy tờ",align:"center",sortable:!1}]}},computed:{loading:function(){return this.$store.getters.loading}},created:function(){this.$nextTick(function(){})},methods:{},filters:{dateTimeView:function(t){if(t){var e=new Date(t);return e.getDate().toString().padStart(2,"0")+"/"+(e.getMonth()+1).toString().padStart(2,"0")+"/"+e.getFullYear()}return""},filterFileResult:function(t){if(t.length>0){return t.filter(function(t,e){return 2===t.dossierPartType&&!1===t.eForm})}}}}},192:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"traketqua"},[a("v-expansion-panel",{staticClass:"expansion-pl"},[a("v-expansion-panel-content",{attrs:{"hide-actions":"",value:"1"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("div",{staticClass:"background-triangle-small"},[a("v-icon",{attrs:{size:"18",color:"white"}},[t._v("star_rate")])],1),t._v("GIẤY TỜ KẾT QUẢ\n      ")]),t._v(" "),a("v-card",[a("v-card-text",[a("v-data-table",{staticClass:"table-bordered",attrs:{headers:t.headers,items:t._f("filterFileResult")(t.resultFiles),"item-key":"no","hide-actions":"","no-data-text":"Không có giấy tờ kết quả"},scopedSlots:t._u([{key:"headerCell",fn:function(e){return[a("v-tooltip",{attrs:{bottom:""}},[a("span",{attrs:{slot:"activator"},slot:"activator"},[t._v("\n                  "+t._s(e.header.text)+"\n                ")]),t._v(" "),a("span",[t._v("\n                  "+t._s(e.header.text)+"\n                ")])])]}},{key:"items",fn:function(e){return[a("td",{staticClass:"text-xs-center",staticStyle:{width:"5%"}},[t._v(" "+t._s(e.index+1)+" ")]),t._v(" "),a("td",{staticClass:"text-xs-left",staticStyle:{width:"10%"}},[t._v(" "+t._s(e.item.deliverableCode)+" ")]),t._v(" "),a("td",{staticClass:"text-xs-left",staticStyle:{width:"10%"}},[t._v(" "+t._s(t._f("dateTimeView")(e.item.createDate))+" ")]),t._v(" "),a("td",{staticClass:"text-xs-left",staticStyle:{width:"75%"}},[t._v(" "+t._s(e.item.displayName)+" ")])]}}])})],1)],1)],1)],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=13.822f4fc63517c4855706.js.map