(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-101ce8f8"],{"0eee":function(t,e,r){"use strict";r("a5d8")},"27ed":function(t,e,r){"use strict";var a=r("1da1"),n=(r("96cf"),r("bae0")),s="/api/specialty";e["a"]={addSpecialty:function(t){return Object(a["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n["a"].post("".concat(s,"/addSpecialty"),t);case 2:return r=e.sent,e.abrupt("return",null===r||void 0===r?void 0:r.data);case 4:case"end":return e.stop()}}),e)})))()},getAllSpecialty:function(){return Object(a["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n["a"].post("".concat(s,"/getAllSpecialty"));case 2:return e=t.sent,t.abrupt("return",null===e||void 0===e?void 0:e.data);case 4:case"end":return t.stop()}}),t)})))()},updateSpecialty:function(){return Object(a["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n["a"].post("".concat(s,"/updateSpecialty"));case 2:return e=t.sent,t.abrupt("return",null===e||void 0===e?void 0:e.data);case 4:case"end":return t.stop()}}),t)})))()},getById:function(t){return Object(a["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n["a"].post("".concat(s,"/getById"),t);case 2:return r=e.sent,e.abrupt("return",null===r||void 0===r?void 0:r.data);case 4:case"end":return e.stop()}}),e)})))()},searchSpecialty:function(t){return Object(a["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n["a"].post("".concat(s,"/searchSpecialty"),t);case 2:return r=e.sent,e.abrupt("return",null===r||void 0===r?void 0:r.data);case 4:case"end":return e.stop()}}),e)})))()}}},"462b":function(t,e,r){"use strict";r("780a")},5152:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("hr",{staticClass:"my-divider",class:{"h-1":1===t.height,"h-2":2===t.height}})])},n=[],s={name:"MyDivider",props:{height:{require:!1,default:1}}},i=s,c=(r("eb82"),r("2877")),o=Object(c["a"])(i,a,n,!1,null,"713250f2",null);e["a"]=o.exports},"5c52":function(t,e,r){},"61b0":function(t,e,r){"use strict";r("7527")},6497:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"my-footer",staticStyle:{"margin-top":"120px"}},[r("my-divider",{staticClass:"my-3",attrs:{height:1}}),t.folders.length>0&&!t.sceletonLoader?r("VRow",{staticClass:"my-footer__inner",attrs:{"no-gutters":""}},t._l(t.folders,(function(e){return r("VCol",{key:e._id,staticClass:"my-footer__col",attrs:{cols:"4"}},[r("VCol",{staticClass:"my-footer__col-inner"},[r("VRow",{staticClass:"my-footer__col-title",attrs:{"no-gutters":""}},[r("div",{staticClass:"mb-3"},[t._v(t._s(e.name||"--"))])]),t._l(e.pages,(function(e){return r("span",{key:e._id,class:{"purple--text  font-weight-medium":e._id===t.$route.params.id},on:{click:function(r){return t.onClickPage(e._id)}}},[t._v(t._s(e.name||"--"))])}))],2)],1)})),1):r("VRow",{attrs:{"no-gutters":""}},t._l(6,(function(t){return r("VCol",{key:t,attrs:{cols:"4"}},[r("v-skeleton-loader",{attrs:{type:"article"}})],1)})),1),r("my-divider",{staticClass:"my-3",attrs:{height:1}})],1)},n=[],s=r("1da1"),i=(r("96cf"),r("d3b7"),r("159b"),r("4de4"),r("5152")),c=r("7a81"),o=r("f31e"),u={components:{myDivider:i["a"]},mounted:function(){this.getFolders()},data:function(){return{folders:[],sceletonLoader:!1}},methods:{onClickPage:function(t){console.log(t),this.$router.push({path:"/page/".concat(t)})},getFolders:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.sceletonLoader=!0,e.next=4,o["a"].getPages();case 4:return r=e.sent,e.next=7,c["a"].getFolders();case 7:a=e.sent,t.folders=a,t.folders.forEach((function(t){t.pages=r.filter((function(e){return e.folder._id==t._id}))})),t.sceletonLoader=!1,console.log(t.folders),e.next=17;break;case 14:e.prev=14,e.t0=e["catch"](0),alert(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))()}}},l=u,d=(r("ecdc"),r("2877")),p=Object(d["a"])(l,a,n,!1,null,"536a09cc",null);e["a"]=p.exports},"6ac5":function(t,e,r){t.exports=r.p+"img/main-logo.eaba3905.svg"},7527:function(t,e,r){},"780a":function(t,e,r){},"7a81":function(t,e,r){"use strict";var a=r("1da1"),n=(r("96cf"),r("bae0")),s="/api/folder";e["a"]={addFolder:function(t){return Object(a["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n["a"].post("".concat(s,"/"),t);case 2:return r=e.sent,e.abrupt("return",null===r||void 0===r?void 0:r.data);case 4:case"end":return e.stop()}}),e)})))()},getFolders:function(){return Object(a["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n["a"].post("".concat(s,"/getAll"));case 2:return e=t.sent,t.abrupt("return",null===e||void 0===e?void 0:e.data);case 4:case"end":return t.stop()}}),t)})))()},update:function(t,e){return Object(a["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,n["a"].put("".concat(s,"/").concat(t),e);case 2:return a=r.sent,r.abrupt("return",null===a||void 0===a?void 0:a.data);case 4:case"end":return r.stop()}}),r)})))()},delete:function(t){return Object(a["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n["a"].delete("".concat(s,"/").concat(t));case 2:return r=e.sent,e.abrupt("return",null===r||void 0===r?void 0:r.data);case 4:case"end":return e.stop()}}),e)})))()}}},"7ed8":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"another"},[t.sceletonLoader?r("VRow",{staticClass:"font-weight-medium",attrs:{"no-gutters":""}},[r("v-skeleton-loader",{attrs:{type:"chip"}})],1):r("VRow",{staticClass:"font-weight-medium",attrs:{"no-gutters":""}},[t._v(" Інші спеціальності ")]),t.sceletonLoader?t._l(3,(function(t){return r("div",{key:t},[r("VCard",{staticStyle:{margin:"20px 0 40px 0"}},[r("v-skeleton-loader",{staticClass:"my-4",staticStyle:{height:"140px"},attrs:{type:"image"}}),r("VRow",{staticClass:"my-1",staticStyle:{height:"44px"},attrs:{"no-gutters":""}},[r("v-skeleton-loader",{staticClass:"pl-2",attrs:{type:"chip"}}),r("VSpacer"),r("v-skeleton-loader",{staticClass:"pr-2 ",attrs:{type:"button"}})],1)],1)],1)})):r("div",t._l(t.specialities,(function(t){return r("div",{key:t._id},[r("mySpecialitiesCardSm",{attrs:{specialitie:t}})],1)})),0)],2)},n=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("VCard",{staticClass:"another-card",attrs:{ripple:""},on:{click:t.onClick}},[r("div",{attrs:{"no-gutters":""}},[r("img",{staticClass:"another-card-img unselectable",attrs:{src:t.specialitie.img,alt:""}})]),r("VCardActions",[r("div",{staticClass:"another-card-title unselectable"},[t._v(" "+t._s(t.specialitie.name)+" ")]),r("VSpacer"),r("VBtn",{attrs:{text:"",small:"",color:"primary"}},[r("VIcon",{attrs:{small:""}},[t._v("mdi-arrow-right")])],1)],1)],1)},i=[],c={props:{specialitie:{type:Object,require:!0},indexSpecialitie:{require:!0}},methods:{onClick:function(){this.$router.push({name:"main-speciality-page",params:{id:this.specialitie._id}})}}},o=c,u=(r("0eee"),r("2877")),l=Object(u["a"])(o,s,i,!1,null,"03c7dad5",null),d=l.exports,p={props:{specialities:{require:!0},sceletonLoader:{require:!1}},watch:{specialities:{deep:!0,handler:function(t){console.log(t)}}},components:{mySpecialitiesCardSm:d}},f=p,g=(r("462b"),Object(u["a"])(f,a,n,!1,null,"7f96301e",null));e["a"]=g.exports},"97e4":function(t,e,r){},"9bf0":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("dynamic-page-component")},n=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("my-header"),r("div",{staticClass:"my-container",staticStyle:{"margin-top":"50px"}},[r("VRow",{attrs:{"no-gutters":""}},[r("VBtn",{attrs:{rounded:"",color:"primary",text:""},on:{click:function(e){return t.$router.push({path:"/"})}}},[r("VIcon",{attrs:{left:""}},[t._v("mdi-arrow-left")]),t._v(" На головну")],1)],1)],1),r("div",{staticClass:"my-container",staticStyle:{"margin-top":"50px"}},[r("VRow",{attrs:{"no-gutters":""}},[r("VCol",{attrs:{cols:"8"}},[r("PageInner",{attrs:{page:t.page,sceletonLoader:t.sceletonLoader,PageDeleted:t.PageDeleted}})],1),r("VCol",{attrs:{cols:"4"}},[r("AnotherSpecialitiesList",{attrs:{specialities:t.specialities,sceletonLoader:t.sceletonLoader}})],1)],1)],1)],1)},i=[],c=r("1da1"),o=(r("a434"),r("96cf"),r("f31e")),u=r("27ed"),l=r("a005"),d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.PageDeleted?r("div",{staticClass:"w-100 text-center",staticStyle:{"min-height":"970px"}},[r("myDivider",{staticClass:"my-3",attrs:{height:1}}),r("span",{staticClass:"error--text"},[t._v(" На жаль дана сторінка уже видалена ")]),r("myDivider",{staticClass:"my-3",attrs:{height:1}})],1):r("div",{staticStyle:{"min-height":"970px"}},[t.sceletonLoader?r("VRow",{staticClass:"title",attrs:{"no-gutter":"",align:"center"}},[r("v-skeleton-loader",{staticClass:"pl-2 my-2",attrs:{type:"chip"}})],1):r("div",{staticClass:"title",attrs:{"no-gutter":"",align:"start"}},[r("VRow",{attrs:{"no-gutters":""}},[t.page.folder?r("span",{staticClass:"text-title"},[t._v(" "+t._s(t.page.folder.name||"--")+" ")]):t._e()]),r("VRow",{attrs:{"no-gutters":""}},[r("span",{staticClass:"text-subtitle"},[t._v(" "+t._s(t.page.name||"--")+" ")])])],1),t.page.html&&!t.sceletonLoader?r("myDivider",{staticClass:"my-3",attrs:{height:1}}):t._e(),t.page&&!t.sceletonLoader?r("VRow",{staticClass:"h-auto",attrs:{"no-gutters":""}},[t.page.html?r("div",{staticClass:"w-100"},[r("VCard",[r("VCardText",[r("div",{staticClass:"editor w-100",domProps:{innerHTML:t._s(t.page.html)}})])],1)],1):0===t.fileCount?r("div",{staticClass:"w-100 text-center"},[r("span",{staticClass:"error--text"},[t._v(" Ця сторінка поки порожня")])]):t._e()]):r("VRow",{staticClass:"title",attrs:{"no-gutter":"",align:"center"}},[r("VCol",{staticClass:"title-text"},[r("v-skeleton-loader",{attrs:{type:"article"}})],1),r("VCol",{staticClass:"title-text"},[r("v-skeleton-loader",{attrs:{type:"article"}})],1),r("VCol",{staticClass:"title-text"},[r("v-skeleton-loader",{attrs:{type:"article"}})],1)],1),t.fileCount>0&&!t.sceletonLoader?r("myDivider",{staticClass:"my-3",attrs:{height:1}}):t._e(),t.sceletonLoader?r("VRow",{staticClass:"title",attrs:{"no-gutter":"",align:"center"}},[r("VCol",{staticClass:"title-text"},[r("v-skeleton-loader",{attrs:{type:"card"}})],1)],1):r("VRow",{attrs:{"no-gutters":"",justify:"center"}},[r("VCol",{attrs:{cols:"12"}},t._l(t.page.files,(function(e){return r("VCard",{key:e.id},[r("VCardTitle",[r("VRow",{attrs:{justify:"space-between",align:"center"}},[r("VCol",{staticClass:"text-left",attrs:{cols:"auto"}},[t._v(t._s(e.title))])],1)],1),r("VCardSubtitle",[t._v("PDF-файл")]),r("VCardText",[r("VRow",{attrs:{"no-gutters":""}},[r("VCol",{attrs:{cols:"12"}},[r("VuePdfApp",{staticStyle:{height:"80vh"},attrs:{"page-scale":"40",theme:"light",pdf:e.file,"file-name":e.title},on:{"after-created":t.afterCreated}})],1)],1)],1)],1)})),1)],1)],1),r("footer-component")],1)},p=[],f=r("5152"),g=r("5873"),m=r("e027"),v=r.n(m),h=(r("ed43"),r("6497")),w={components:{VueEditor:g["a"],VuePdfApp:v.a,myDivider:f["a"],FooterComponent:h["a"]},methods:{afterCreated:function(t){console.log(t),this.pdfjs=t,window._pdf=t}},data:function(){return{fileCount:0}},watch:{page:{deep:!0,handler:function(t){this.fileCount=t.files.length}}},props:{page:{require:!0},sceletonLoader:{require:!0},PageDeleted:{require:!0}}},C=w,y=(r("61b0"),r("2877")),_=Object(y["a"])(C,d,p,!1,null,"093b322e",null),x=_.exports,b=r("7ed8"),R={data:function(){return{page:[],sceletonLoader:!1,specialities:[],PageDeleted:!1}},watch:{$route:{deep:!0,handler:function(t){this.getPage()}}},components:{MyHeader:l["a"],PageInner:x,AnotherSpecialitiesList:b["a"]},mounted:function(){this.getPage()},methods:{getPage:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.sceletonLoader=!0,e.next=3,o["a"].getOne({_id:t.$route.params.id});case 3:r=e.sent,t.page=r[0],console.log("my-page",t.page),console.log(r),t.page||(t.PageDeleted=!0,t.sceletonLoader=!1),t.getSpecialities();case 9:case"end":return e.stop()}}),e)})))()},getSpecialities:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u["a"].getAllSpecialty();case 2:t.specialities=e.sent,t.specialities=t.specialities.splice(0,4),t.sceletonLoader=!1;case 5:case"end":return e.stop()}}),e)})))()}}},V=R,k=Object(y["a"])(V,s,i,!1,null,null,null),S=k.exports,j={components:{DynamicPageComponent:S}},O=j,P=Object(y["a"])(O,a,n,!1,null,null,null);e["default"]=P.exports},a005:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"my-container mt-5"},[a("VRow",{staticClass:"py-2",attrs:{"no-gutters":"",aling:"center",justify:"space-between"}},[a("div",{staticStyle:{width:"50px"}},[a("VBadge",{attrs:{color:"error",overlap:"",right:"",bottom:"",text:"",content:"pre-alpha"}},[a("img",{staticClass:"p-0 m-0",staticStyle:{cursor:"pointer"},attrs:{src:r("6ac5"),width:"210",height:"81",alt:""},on:{click:function(e){t.$router.push({path:"/"}).catch((function(t){return t}))}}})])],1),a("div",{staticClass:"nav"},[a("div",{staticClass:"nav__inner"},[t._v("Головна")]),a("div",{staticClass:"nav__inner"},[t._v("Про коледж")]),a("div",{staticClass:"nav__inner"},[t._v("Студентові")]),a("div",{staticClass:"nav__inner"},[t._v("Абітурієнту")])]),a("div",{staticClass:"d-flex justify-center align-center"},[a("VRow",[t.searchShow?a("VTextField",{attrs:{dense:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}):t._e(),a("VBtn",{attrs:{icon:""},on:{click:t.searchData}},[a("VIcon",[t._v(" mdi-magnify")])],1),a("VBtn",{attrs:{icon:""}},[a("VIcon",[t._v(" mdi-menu")])],1)],1)],1)])],1)])},n=[],s=(r("ac1f"),r("841c"),{data:function(){return{searchShow:!0,search:""}},methods:{searchData:function(){this.$router.push({name:"search",params:{query:this.search}})}}}),i=s,c=(r("c560"),r("2877")),o=Object(c["a"])(i,a,n,!1,null,"2cdd8497",null);e["a"]=o.exports},a5d8:function(t,e,r){},c560:function(t,e,r){"use strict";r("cd61")},cd61:function(t,e,r){},eb82:function(t,e,r){"use strict";r("5c52")},ecdc:function(t,e,r){"use strict";r("97e4")},f31e:function(t,e,r){"use strict";var a=r("1da1"),n=(r("96cf"),r("bae0")),s="/api/page";e["a"]={addPage:function(t){return Object(a["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n["a"].post("".concat(s,"/addPage"),t);case 2:return r=e.sent,e.abrupt("return",null===r||void 0===r?void 0:r.data);case 4:case"end":return e.stop()}}),e)})))()},getPages:function(){return Object(a["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n["a"].post("".concat(s,"/getAllPage"));case 2:return e=t.sent,t.abrupt("return",null===e||void 0===e?void 0:e.data);case 4:case"end":return t.stop()}}),t)})))()},getOne:function(t){return Object(a["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n["a"].post("".concat(s,"/getByIdPage"),t);case 2:return r=e.sent,e.abrupt("return",null===r||void 0===r?void 0:r.data);case 4:case"end":return e.stop()}}),e)})))()},update:function(t,e){return Object(a["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,n["a"].put("".concat(s,"/").concat(t),e);case 2:return a=r.sent,r.abrupt("return",null===a||void 0===a?void 0:a.data);case 4:case"end":return r.stop()}}),r)})))()},delete:function(t){return Object(a["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n["a"].delete("".concat(s,"/").concat(t));case 2:return r=e.sent,e.abrupt("return",null===r||void 0===r?void 0:r.data);case 4:case"end":return e.stop()}}),e)})))()},searchPage:function(t){return Object(a["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n["a"].post("".concat(s,"/searchPage"),t);case 2:return r=e.sent,e.abrupt("return",null===r||void 0===r?void 0:r.data);case 4:case"end":return e.stop()}}),e)})))()}}}}]);