!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("moment")):"function"==typeof define&&define.amd?define("vue-calendar",["moment"],t):"object"==typeof exports?exports["vue-calendar"]=t(require("moment")):e["vue-calendar"]=t(e.moment)}(window,function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}([function(t,n){t.exports=e},function(e,t,n){var r=n(6);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(4).default)("904edb36",r,!1,{})},function(e,t,n){var r=n(8);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(4).default)("461fcf96",r,!1,{})},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var a=(o=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),s=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(s).concat([a]).join("\n")}var o;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},a=0;a<this.length;a++){var s=this[a][0];null!=s&&(r[s]=!0)}for(a=0;a<e.length;a++){var o=e[a];null!=o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),t.push(o))}},t}},function(e,t,n){"use strict";function r(e,t){for(var n=[],r={},a=0;a<t.length;a++){var s=t[a],o=s[0],i={id:e+":"+a,css:s[1],media:s[2],sourceMap:s[3]};r[o]?r[o].parts.push(i):n.push(r[o]={id:o,parts:[i]})}return n}n.r(t),n.d(t,"default",function(){return h});var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var s={},o=a&&(document.head||document.getElementsByTagName("head")[0]),i=null,l=0,d=!1,c=function(){},u=null,f="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(e,t,n,a){d=n,u=a||{};var o=r(e,t);return v(o),function(t){for(var n=[],a=0;a<o.length;a++){var i=o[a];(l=s[i.id]).refs--,n.push(l)}t?v(o=r(e,t)):o=[];for(a=0;a<n.length;a++){var l;if(0===(l=n[a]).refs){for(var d=0;d<l.parts.length;d++)l.parts[d]();delete s[l.id]}}}}function v(e){for(var t=0;t<e.length;t++){var n=e[t],r=s[n.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](n.parts[a]);for(;a<n.parts.length;a++)r.parts.push(y(n.parts[a]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var o=[];for(a=0;a<n.parts.length;a++)o.push(y(n.parts[a]));s[n.id]={id:n.id,refs:1,parts:o}}}}function m(){var e=document.createElement("style");return e.type="text/css",o.appendChild(e),e}function y(e){var t,n,r=document.querySelector("style["+f+'~="'+e.id+'"]');if(r){if(d)return c;r.parentNode.removeChild(r)}if(p){var a=l++;r=i||(i=m()),t=b.bind(null,r,a,!1),n=b.bind(null,r,a,!0)}else r=m(),t=function(e,t){var n=t.css,r=t.media,a=t.sourceMap;r&&e.setAttribute("media",r);u.ssrId&&e.setAttribute(f,t.id);a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */");if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}var g,x=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function b(e,t,n,r){var a=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,a);else{var s=document.createTextNode(a),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(s,o[t]):e.appendChild(s)}}},function(e,t,n){"use strict";var r=n(1);n.n(r).a},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,".calendar-header {\n  display: flex;\n  align-items: center;\n}\n.calendar-header .header-left, .calendar-header .header-right {\n    flex: 1;\n}\n.calendar-header .header-center {\n    flex: 3;\n    text-align: center;\n}\n.calendar-header .header-center .title {\n      margin: 0 10px;\n}\n.calendar-header .header-center .prev-month, .calendar-header .header-center .next-month {\n      cursor: pointer;\n}\n",""])},function(e,t,n){"use strict";var r=n(2);n.n(r).a},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,".comp-full-calendar {\n  padding: 20px;\n  background: #fff;\n  max-width: 960px;\n  margin: 0 auto;\n}\n.comp-full-calendar ul, .comp-full-calendar p {\n    margin: 0;\n    padding: 0;\n}\n.full-calendar-body {\n  margin-top: 20px;\n}\n.full-calendar-body .weeks {\n    display: flex;\n    border-top: 1px solid #e0e0e0;\n    border-bottom: 1px solid #e0e0e0;\n    border-left: 1px solid #e0e0e0;\n}\n.full-calendar-body .weeks .week {\n      flex: 1;\n      text-align: center;\n      border-right: 1px solid #e0e0e0;\n}\n.full-calendar-body .dates {\n    position: relative;\n}\n.full-calendar-body .dates .week-row {\n      border-left: 1px solid #e0e0e0;\n      display: flex;\n}\n.full-calendar-body .dates .week-row .day-cell {\n        flex: 1;\n        min-height: 112px;\n        padding: 4px;\n        border-right: 1px solid #e0e0e0;\n        border-bottom: 1px solid #e0e0e0;\n}\n.full-calendar-body .dates .week-row .day-cell .day-number {\n          text-align: right;\n}\n.full-calendar-body .dates .week-row .day-cell.today {\n          background-color: #fcf8e3;\n}\n.full-calendar-body .dates .week-row .day-cell.not-cur-month .day-number {\n          color: rgba(0, 0, 0, 0.24);\n}\n.full-calendar-body .dates .dates-events {\n      position: absolute;\n      top: 0;\n      left: 0;\n      z-index: 1;\n      width: 100%;\n}\n.full-calendar-body .dates .dates-events .events-week {\n        display: flex;\n}\n.full-calendar-body .dates .dates-events .events-week .events-day {\n          cursor: pointer;\n          flex: 1;\n          min-height: 112px;\n          overflow: hidden;\n          text-overflow: ellipsis;\n}\n.full-calendar-body .dates .dates-events .events-week .events-day .day-number {\n            text-align: right;\n            padding: 4px 5px 4px 4px;\n            opacity: 0;\n}\n.full-calendar-body .dates .dates-events .events-week .events-day.not-cur-month .day-number {\n            color: rgba(0, 0, 0, 0.24);\n}\n.full-calendar-body .dates .dates-events .events-week .events-day .event-box .event-item {\n            cursor: pointer;\n            font-size: 12px;\n            background-color: #C7E6FD;\n            margin-bottom: 2px;\n            color: rgba(0, 0, 0, 0.87);\n            padding: 0 0 0 4px;\n            height: 18px;\n            line-height: 18px;\n            white-space: nowrap;\n            overflow: hidden;\n            text-overflow: ellipsis;\n}\n.full-calendar-body .dates .dates-events .events-week .events-day .event-box .event-item.is-start {\n              margin-left: 4px;\n}\n.full-calendar-body .dates .dates-events .events-week .events-day .event-box .event-item.is-end {\n              margin-right: 4px;\n}\n.full-calendar-body .dates .dates-events .events-week .events-day .event-box .event-item.is-opacity {\n              opacity: 0;\n}\n.full-calendar-body .dates .dates-events .events-week .events-day .event-box .more-link {\n            cursor: pointer;\n            padding-left: 8px;\n            padding-right: 2px;\n            color: rgba(0, 0, 0, 0.38);\n            font-size: 14px;\n}\n.full-calendar-body .dates .more-events {\n      position: absolute;\n      width: 150px;\n      z-index: 2;\n      border: 1px solid #eee;\n      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);\n}\n.full-calendar-body .dates .more-events .more-header {\n        background-color: #eee;\n        padding: 5px;\n        display: flex;\n        align-items: center;\n        font-size: 14px;\n}\n.full-calendar-body .dates .more-events .more-header .title {\n          flex: 1;\n}\n.full-calendar-body .dates .more-events .more-header .close {\n          margin-right: 2px;\n          cursor: pointer;\n          font-size: 16px;\n}\n.full-calendar-body .dates .more-events .more-body {\n        height: 146px;\n        overflow: hidden;\n}\n.full-calendar-body .dates .more-events .more-body .body-list {\n          height: 144px;\n          padding: 5px;\n          overflow: auto;\n          background-color: #fff;\n}\n.full-calendar-body .dates .more-events .more-body .body-list .body-item {\n            cursor: pointer;\n            font-size: 12px;\n            background-color: #C7E6FD;\n            margin-bottom: 2px;\n            color: rgba(0, 0, 0, 0.87);\n            padding: 0 0 0 4px;\n            height: 18px;\n            line-height: 18px;\n            white-space: nowrap;\n            overflow: hidden;\n            text-overflow: ellipsis;\n}\n",""])},function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"comp-full-calendar"},[n("calendar-header",{attrs:{"current-month":e.currentMonth,"first-day":e.firstDay,locale:e.locale},on:{change:e.emitChangeMonth}},[n("div",{attrs:{slot:"header-left"},slot:"header-left"},[e._t("calendar-header-left")],2),e._v(" "),n("div",{attrs:{slot:"header-right"},slot:"header-right"},[e._t("calendar-header-right")],2)]),e._v(" "),n("div",{staticClass:"full-calendar-body"},[n("div",{staticClass:"weeks"},e._l(7,function(t,r){return n("strong",{key:r,staticClass:"week"},[e._v(e._s(e._f("localeWeekDay")(t-1,e.firstDay,e.locale)))])}),0),e._v(" "),n("div",{ref:"dates",staticClass:"dates"},[n("div",{staticClass:"dates-bg"},e._l(e.currentDates,function(t,r){return n("div",{key:r,staticClass:"week-row"},e._l(t,function(t,r){return n("div",{key:r,staticClass:"day-cell",class:{today:t.isToday,"not-cur-month":!t.isCurMonth}},[n("p",{staticClass:"day-number"},[e._v(e._s(t.monthDay))])])}),0)}),0),e._v(" "),n("div",{staticClass:"dates-events"},e._l(e.currentDates,function(t,r){return n("div",{key:r,staticClass:"events-week"},e._l(t,function(t,r){return n("div",{key:r,staticClass:"events-day",class:{today:t.isToday,"not-cur-month":!t.isCurMonth},attrs:{"track-by":"$index"},on:{click:function(n){return n.stopPropagation(),e.dayClick(t.date,n)}}},[n("p",{staticClass:"day-number"},[e._v(e._s(t.monthDay))]),e._v(" "),n("div",{staticClass:"event-box"},[e._l(t.events,function(r,a){return n("event-card",{directives:[{name:"show",rawName:"v-show",value:r.cellIndex<=e.eventLimit,expression:"event.cellIndex <= eventLimit"}],key:a,attrs:{event:r,date:t.date,firstDay:e.firstDay},on:{click:e.eventClick},scopedSlots:e._u([{key:"default",fn:function(t){return[e._t("fc-event-card",null,{event:t.event})]}}],!0)})}),e._v(" "),t.events.length>e.eventLimit?n("p",{staticClass:"more-link",on:{click:function(n){return n.stopPropagation(),e.selectThisDay(t,n)}}},[e._v("\n                + "+e._s(t.events[t.events.length-1].cellIndex-e.eventLimit)+" more\n              ")]):e._e()],2)])}),0)}),0),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showMore,expression:"showMore"}],staticClass:"more-events",style:{left:e.morePos.left+"px",top:e.morePos.top+"px"}},[n("div",{staticClass:"more-header"},[n("span",{staticClass:"title"},[e._v(e._s(e.moreTitle(e.selectDay.date)))]),e._v(" "),n("span",{staticClass:"close",on:{click:function(t){t.stopPropagation(),e.showMore=!1}}},[e._v("x")])]),e._v(" "),n("div",{staticClass:"more-body"},[n("ul",{staticClass:"body-list"},e._l(e.selectDay.events,function(t,r){return n("li",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"event.isShow"}],key:r,staticClass:"body-item",on:{click:function(n){return e.eventClick(t,n)}}},[e._v("\n              "+e._s(t.title)+"\n            ")])}),0)])]),e._v(" "),e._t("body-card")],2)])],1)};r._withStripped=!0;var a=n(0),s=n.n(a),o=function(){var e=this,t=e.$createElement;return(e._self._c||t)("p",{staticClass:"event-item",class:e.cssClasses,on:{click:function(t){return e.$emit("click",e.event,t)}}},[e.showTitle?e._t("default",[e._v("\n        Def: "+e._s(e.event.title)+"\n    ")],{event:e.event}):e._e()],2)};function i(e,t,n,r,a,s,o,i){var l,d="function"==typeof e?e.options:e;if(t&&(d.render=t,d.staticRenderFns=n,d._compiled=!0),r&&(d.functional=!0),s&&(d._scopeId="data-v-"+s),o?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},d._ssrRegister=l):a&&(l=i?function(){a.call(this,this.$root.$options.shadowRoot)}:a),l)if(d.functional){d._injectStyles=l;var c=d.render;d.render=function(e,t){return l.call(t),c(e,t)}}else{var u=d.beforeCreate;d.beforeCreate=u?[].concat(u,l):[l]}return{exports:e,options:d}}o._withStripped=!0;var l=i({props:["event","date","firstDay"],computed:{cssClasses:function(){let e=this.event.cssClass;return e=Array.isArray(e)?Array.from(e):[e],this.start.isSame(this.date,"day")&&e.push("is-start"),this.end.isSame(this.date,"day")&&e.push("is-end"),this.event.isShow||e.push("is-opacity"),e.join(" ")},showTitle:function(){return this.date.day()==this.firstDay||this.start.isSame(this.date,"day")},start:function(){return s()(this.event.start)},end:function(){return s()(this.event.end)}}},o,[],!1,null,null,null);l.options.__file="src/components/eventCard.vue";var d=l.exports,c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"calendar-header"},[n("div",{staticClass:"header-left"},[e._t("header-left")],2),e._v(" "),n("div",{staticClass:"header-center"},[n("span",{staticClass:"prev-month",on:{click:function(t){return t.stopPropagation(),e.goPrev(t)}}},[e._v(e._s(e.leftArrow))]),e._v(" "),n("span",{staticClass:"title"},[e._v(e._s(e.title))]),e._v(" "),n("span",{staticClass:"next-month",on:{click:function(t){return t.stopPropagation(),e.goNext(t)}}},[e._v(e._s(e.rightArrow))])]),e._v(" "),n("div",{staticClass:"header-right"},[e._t("header-right")],2)])};c._withStripped=!0;var u={props:{currentMonth:{},titleFormat:{},firstDay:{},monthNames:{},locale:{}},data:()=>({leftArrow:"<",rightArrow:">"}),computed:{title(){if(this.currentMonth)return this.currentMonth.locale(this.locale).format("MMMM YYYY")}},methods:{goPrev(){var e=s()(this.currentMonth).subtract(1,"months").startOf("month");this.$emit("change",e)},goNext(){var e=s()(this.currentMonth).add(1,"months").startOf("month");this.$emit("change",e)}}},f=(n(5),i(u,c,[],!1,null,null,null));f.options.__file="src/components/header.vue";var p=f.exports,h={name:"vue-calendar",props:{events:{type:Array,default:[]},locale:{type:String,default:"en"},firstDay:{type:Number|String,validator(e){let t=parseInt(e);return t>=0&&t<=6},default:0}},components:{"event-card":d,"calendar-header":p},mounted(){this.emitChangeMonth(this.currentMonth)},data:()=>({currentMonth:s()().startOf("month"),isLismit:!0,eventLimit:3,showMore:!1,morePos:{top:0,left:0},selectDay:{}}),computed:{currentDates(){return this.getCalendar()}},methods:{getMonthViewStartDate(e,t){t=parseInt(t);let n=s()(e),r=s()(n.startOf("month"));return n.subtract(r.day(),"days"),r.day()<t&&n.subtract(7,"days"),n.add(t,"days"),n},getMonthViewEndDate(){return this.getMonthViewStartDate().add(6,"weeks")},emitChangeMonth(e){this.currentMonth=e;let t=this.getMonthViewStartDate(e,this.firstDay),n=this.getMonthViewEndDate();this.$emit("changeMonth",t,n,e)},moreTitle:e=>e?s()(e).format("ll"):"",getCalendar(){let e=this.getMonthViewStartDate(this.currentMonth,this.firstDay),t=[];for(let n=0;n<6;n++){let n=[];for(let t=0;t<7;t++)n.push({monthDay:e.date(),isToday:e.isSame(s()(),"day"),isCurMonth:e.isSame(this.currentMonth,"month"),weekDay:t,date:s()(e),events:this.slotEvents(e)}),e.add(1,"day");t.push(n)}return t},slotEvents(e){let t=this.events.filter(t=>{let n=s()(t.start),r=s()(t.end?t.end:n);return e.isBetween(n,r,null,"[]")});t.sort((e,t)=>e.cellIndex?t.cellIndex?e.cellIndex-t.cellIndex:-1:1);for(let n=0;n<t.length;n++)t[n].cellIndex=t[n].cellIndex||n+1,t[n].isShow=!0,t[n].cellIndex==n+1||n>2||t.splice(n,0,{title:"holder",cellIndex:n+1,start:e.format(),end:e.format(),isShow:!1});return t},selectThisDay(e,t){this.selectDay=e,this.showMore=!0,this.morePos=this.computePos(event.target),this.morePos.top-=100;let n=e.events.filter(e=>1==e.isShow);this.$emit("moreClick",e.date,n,t)},computePos(e){let t=e.getBoundingClientRect(),n=this.$refs.dates.getBoundingClientRect();return{left:t.left-n.left,top:t.top+t.height-n.top}},dayClick(e,t){this.$emit("dayClick",e,t)},eventClick(e,t){if(!e.isShow)return;t.stopPropagation();let n=this.computePos(t.target);this.$emit("eventClick",e,t,n)}},filters:{localeWeekDay:(e,t,n)=>(t=parseInt(t),s()().locale(n).localeData().weekdaysShort()[(e+t)%7])}},v=(n(7),i(h,r,[],!1,null,null,null));v.options.__file="src/Calendar.vue";t.default=v.exports}])});