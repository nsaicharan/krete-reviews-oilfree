!function(){"use strict";var t=[,function(t,e,n){n.r(e),n.d(e,{Interaction:function(){return r},default:function(){return i}});const r={GAVE_EMAIL:"gave-email",GAVE_PHONE:"gave-phone"};class i{static add(t){const e=i.getInteractionList();-1===e.indexOf(t)&&(e.push(t),i.setInteractionList(e))}static remove(t){const e=i.getInteractionList(),n=e.indexOf(t);n>-1&&(e.splice(n,1),i.setInteractionList(e))}static has(t){return i.getInteractionList().indexOf(t)>-1}static setEmail(t){localStorage.setItem("krete-email",t)}static getEmail(){return localStorage.getItem("krete-email")||null}static getInteractionList(){const t=localStorage.getItem("krete-interactions");return t?t.split(","):[]}static setInteractionList(t){localStorage.setItem("krete-interactions",t.join(","))}}}],e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,n),a.exports}n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var r={};!function(){n.r(r);var t=n(1);(()=>{const e={"50-50":function(){return Math.random()>.5},"exclude-interactions":function(e){if(!e)return console.warn("invalid args data given for header announcements filter method:",e),!0;const n=e.split(",");for(let e=0;e<n.length;e++)if(t.default.has(n[e]))return!1;return!0}},n={alert:function(t){alert(t)},showModal:function(t){window.Krete.Modals.instances[t].show()},applyDiscount:function(t){window.checkDiscount(t,!0),liquid.IS_CART_PAGE&&(location.href=location.href.split("?")[0])}},r=$('#header-announcement div[id^="header-announcement-"]'),i=$(r[0].outerHTML.trim().replace(/^(<)div|div(>)$/g,"$1template$2"));i.attr("data-run","true"),r.after(i),r.attr("id","header-announcement-CONTAINER");let a=$('#header-announcement template[id^="header-announcement-"][data-run="true"]');a=a.filter((function(t){const n=$(this).data("run-filter-arg"),r=$(this).data("run-filter-method");return r&&!e.hasOwnProperty(r)?(console.error(`header announcement #${$(this).attr("id")} has invalid filter method "${r}".`),!1):!(r&&!e[r](n))}));let o=-1;function c(t){r.off("click"),r.css("cursor","default");const e=$(a[t]),i=e.data("click-method");let o=e.data("click-args");if(Array.isArray(o)||(o=[o]),i){if(!n.hasOwnProperty(i))return console.error(`header announcement #${$(this).attr("id")} has invalid click method "${i}".`),!1;r.on("click",n[i].bind(a[t],...o)),r.css("cursor","pointer")}}c(0),a.length>1&&function t(){o++,o>=a.length&&(o=0);const e=$(a[o]),n=parseInt(e.data("slide-time"))||5e3;setTimeout((function(){r.animate({opacity:0},500,l)}),n);const i=o+1>=a.length?0:o+1,s=$(a[i]);function l(){r.html(s.html()),c(i),r.animate({opacity:1},500,u)}function u(){t()}}()})()}()}();
//# sourceMappingURL=headerannouncements.js.map