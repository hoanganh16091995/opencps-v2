webpackJsonp([1],{458:function(t,e,a){var n=a(184)(a(469),a(470),null,null);n.options.__file="d:\\FDS_OPENCPS\\front-end-v2.1\\frontend-opencps-v2.1\\onegate_21_kios\\src\\components\\pagination.vue",n.esModule&&Object.keys(n.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] pagination.vue: functional components are not supported with templates, they should use render functions."),t.exports=n.exports},469:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={name:"TinyPagination",props:{total:{type:Number,required:!0},page:{type:Number,default:1},lang:{type:String,default:"en"},customClass:{type:String},limits:{type:Array,default:function(){return[10,15,20,50,100]}},showLimit:{type:Boolean,default:!0}},data:function(){return{version:"0.2.1",currentPage:1,currentLimit:10,translations:{en:{prev:"Previous",title:"Page",next:"Next"}},availableLanguages:["en"]}},created:function(){this.currentPage=this.page},watch:{page:function(t){this.currentPage=parseInt(t)}},computed:{translation:function(){return this.availableLanguages.includes(this.lang)?this.translations[this.lang]:this.translations.en},totalPages:function(){return Math.ceil(this.total/this.currentLimit)},totalPagesData:function(){for(var t=[],e={},a=1;a<=this.totalPages;++a)e={value:a,text:"Trang "+a},t.push(e);return t},titlePage:function(){return""+this.currentPage},classFirstPage:function(){return{"c-not-allowed pagination__navigation--disabled":1===this.currentPage}},classLastPage:function(){return{"c-not-allowed pagination__navigation--disabled":this.currentPage===this.totalPages}}},methods:{nextPage:function(){this.currentPage!==this.totalPages&&(this.currentPage+=1,this.$emit("tiny:change-page",{page:this.currentPage}))},lastPage:function(){this.currentPage>1&&(this.currentPage-=1,this.$emit("tiny:change-page",{page:this.currentPage}))},nextPageLast:function(){this.currentPage=this.totalPages,this.$emit("tiny:change-page",{page:this.totalPages})},lastPageLast:function(){this.currentPage=1,this.$emit("tiny:change-page",{page:1})},goToPage:function(){this.$emit("tiny:change-page",{page:this.currentPage})},onLimitChange:function(){this.currentPage=1}}}},470:function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.total>0?a("div",{staticClass:"vue-tiny-pagination pagination layout",staticStyle:{"justify-content":"flex-end","-webkit-justify-content":"flex-end"}},[a("div",{staticClass:"px-3 xs4 flex"},[a("v-select",{attrs:{items:t.totalPagesData,"item-text":"text","item-value":"value",autocomplete:""},on:{input:t.goToPage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1),t._v(" "),a("ul",{staticClass:"tiny-pagination",class:t.customClass},[a("li",{staticClass:"page-item",class:t.classFirstPage},[a("button",{staticClass:"pagination__navigation",class:t.classFirstPage,on:{click:function(e){return e.preventDefault(),t.lastPageLast(e)}}},[a("i",{staticClass:"material-icons icon",attrs:{"aria-hidden":"true"}},[t._v("first_page")])])]),t._v(" "),a("li",{staticClass:"page-item",class:t.classFirstPage},[a("button",{staticClass:"pagination__navigation",class:t.classFirstPage,staticStyle:{"border-left":"0"},on:{click:function(e){return e.preventDefault(),t.lastPage(e)}}},[a("i",{staticClass:"material-icons icon",attrs:{"aria-hidden":"true"}},[t._v("chevron_left")])])]),t._v(" "),a("li",{staticClass:"page-item",staticStyle:{"margin-right":"0"}},[a("button",{staticClass:"pagination__navigation pagination__navigation--disabled text-bold primary--text",staticStyle:{"border-right":"0","border-left":"0"}},[t._v("\n          "+t._s(t.titlePage)+"\n        ")])]),t._v(" "),a("li",{staticClass:"page-item",class:t.classLastPage,staticStyle:{"margin-right":"0"}},[a("button",{staticClass:"pagination__navigation",class:t.classLastPage,staticStyle:{"border-left":"0"},on:{click:function(e){return e.preventDefault(),t.nextPage(e)}}},[a("i",{staticClass:"material-icons icon",attrs:{"aria-hidden":"true"}},[t._v("chevron_right")])])]),t._v(" "),a("li",{staticClass:"page-item",class:t.classLastPage},[a("button",{staticClass:"pagination__navigation",class:t.classLastPage,on:{click:function(e){return e.preventDefault(),t.nextPageLast(e)}}},[a("i",{staticClass:"material-icons icon",attrs:{"aria-hidden":"true"}},[t._v("last_page")])])])])]):t._e()])},staticRenderFns:[]},t.exports.render._withStripped=!0}});
//# sourceMappingURL=1.7e48f3ba63d7af82494e.js.map