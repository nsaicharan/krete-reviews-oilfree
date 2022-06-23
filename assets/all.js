!function(){var t=[,function(t,e,n){"use strict";n.r(e),n.d(e,{DISCOUNT_CLASS:function(){return s},DISCOUNT_STORAGE_KEY:function(){return c},NON_SUB_DISCOUNT_STORAGE_KEY:function(){return l},applyDiscountToCheckoutForms:function(){return v}});var o=n(2),a=n(3),i=n(5),r=n(6);const s="checkout-page-form",c="krete-discount",l="krete-non-sub-discount",d=["HOLIDAYFACE31"],u=[16412292e5],f=null,g="Holiday Sale!",p="Gift yourself Krete for&nbsp;31%&nbsp;off";function h(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;const n=o.default.getQueryVars();if(t||n.discount){const i=t||n.discount,s=localStorage.getItem(c);if(w(i))console.log(`discount ${i} was not applied, since it was an expired temporary discount`);else{localStorage.setItem(c,i);const t=o.default.toBoolean(n.alertdiscount)||e,l=!liquid.IS_CART_PAGE,d=i!==s;if(l&&(t||d)){const t=()=>{if("FRIENDSHIP11"===i.toUpperCase()){const t=new r.default;setTimeout(t.show,100)}else{const t=new a.default(i);setTimeout(t.show,100)}};window.jqueryWindowLoaded?t():$(window).load(t)}}}w(localStorage.getItem(c))&&localStorage.removeItem(c),n.discount||localStorage.getItem(c)||!y(f)||(localStorage.setItem(c,f),$(window).load((()=>{const t=new i.default(f,g,"",p);setTimeout(t.show,100)})))}h(),window.checkDiscount=h;let m=null;function v(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(m=t||localStorage.getItem(c),m){const t=()=>{$(`form.${s}`).each((function(){const t=$(this),e=t.attr("action"),n=e.indexOf("?")>-1,a=e.split("?")[0],i=n?e.split("?")[1]:"",r=o.default.getQueryVars(i);r.discount=m,t.attr("action",a+"?"+o.default.buildQueryString(r))}))};$.isReady?t():$(document).ready(t)}}function w(t){const e=d.indexOf(t);return e>-1&&u[e]&&u[e]<=Date.now()}function y(t){const e=d.indexOf(t);return e>-1&&(!u[e]||u[e]>Date.now())}v()},function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return o}});class o{static buildQueryString(t){return Object.keys(t).map((e=>{const n=t[e];return""!==n&&null!=n?encodeURIComponent(e)+"="+encodeURIComponent(n):encodeURIComponent(e)})).join("&")}static getQueryVars(t){const e=(t||window.location.search.substring(1)).split("&"),n={};return e.forEach((t=>{const e=t.split("="),o=decodeURIComponent(e.shift()),a=decodeURIComponent(e.join("="));o&&(n[o]=a)})),n}static setQueryVars(t){const e=o.buildQueryString(t);return`${location.pathname}?${e}`}static deleteQueryVar(t){const e=o.getQueryVars();Array.isArray(t)||(t=[t]);for(const n of t)e.hasOwnProperty(n)&&delete e[n];return o.setQueryVars(e)}static setQueryVar(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;const n=o.getQueryVars();return n[t]=e,o.setQueryVars(n)}static toBoolean(t){let e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const n="string"==typeof t?t.toLowerCase():t;if(e&&""===n)return!0;switch(n){case"":case"0":case"n":case"no":case"false":case"off":case"null":case void 0:case null:case!1:case 0:return!1;default:return!0}}}var a,i,r;r={A_OR_B:"a_or_b"},(i="keys")in(a=o)?Object.defineProperty(a,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):a[i]=r},function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return r}});var o=n(4);const a=["HOLIDAYFACE31"],i=["31% off of everything Krete!"];class r extends o.default{constructor(t){let e="";const n=t.match(/^[A-Z]+(\d\d)$/i);n&&(e=`${n[1]}% off your entire order`);const o=t.match(/^BOGO|BOGO$/i);!n&&o&&(e="Buy One Get One FREE!");const r=a.indexOf(t.toUpperCase());r>-1&&(e=i[r]),super("discount-alert-modal",`\n\t\t\t<div class="subcont">\n\t\t\t\t<div class="exit">\n\t\t\t\t\t<svg viewBox="0 0 22 22" style="background-color:#ffffff00" x="0px" y="0px" width="22px" height="22px">\n\t\t\t\t\t\t<g id="Layer%201">\n\t\t\t\t\t\t\t<path d="M 1.2 -0.2 L -0.2 1.2 L 9.6 11 L -0.2 20.8 L 1.2 22.2 L 11 12.4 L 20.8 22.2 L 22.2 20.8 L 12.4 11 L 22.2 1.2 L 20.8 -0.2 L 11 9.6 L 1.2 -0.2 Z" fill="#ffffff"/>\n\t\t\t\t\t\t</g>\n\t\t\t\t\t</svg>\n\t\t\t\t</div>\n\t\t\t\t<h2>You've Got an<br/>Auto-Applied Discount!</h2>\n\t\t\t\t<div class="coupon">\n\t\t\t\t\t<h3>${t}</h3>\n\t\t\t\t\t<p>${e}</p>\n\t\t\t\t</div>\n\t\t\t\t<div class="footer">\n\t\t\t\t\t<svg width="43px" height="38px">\n\t\t\t\t\t\t<g>\n\t\t\t\t\t\t\t<path d="M 1 2 L 11 2 L 17 27 L 40 20 L 42 6 L 12 6 " stroke="#f5f4ec" stroke-width="3" fill="none"/>\n\t\t\t\t\t\t\t<path id="Ellipse" d="M 32 33.5 C 32 31.567 33.567 30 35.5 30 C 37.433 30 39 31.567 39 33.5 C 39 35.433 37.433 37 35.5 37 C 33.567 37 32 35.433 32 33.5 Z" stroke="#f5f4ec" stroke-width="2" fill="none"/>\n\t\t\t\t\t\t\t<path id="Ellipse2" d="M 19 33.5 C 19 31.567 20.567 30 22.5 30 C 24.433 30 26 31.567 26 33.5 C 26 35.433 24.433 37 22.5 37 C 20.567 37 19 35.433 19 33.5 Z" stroke="#f5f4ec" stroke-width="2" fill="none"/>\n\t\t\t\t\t\t</g>\n\t\t\t\t\t</svg>\n\t\t\t\t\t<p>You'll see it auto-applied in<br/>your cart and/or checkout.</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t`,"","background-color:#00000055;"),console.log("modal made:",this)}}},function(t,e,n){"use strict";function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.r(e),n.d(e,{ModalType:function(){return a},default:function(){return i}});const a={COMMON:"common-modal",STEP:"step-modal"};class i{constructor(t,e){var n=this;let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:a.COMMON;o(this,"showDaily",(function(){let t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return(!t||!window.liquid.IS_CART_PAGE)&&(!!i.shouldShowDaily(n.id)&&n.show())})),o(this,"show",(()=>!Krete.Modals.anyIsShowing&&!this.showing&&(this.showing=Krete.Modals.anyIsShowing=!0,$("#"+this.id).addClass("showing"),$("body").addClass("modal-showing"),localStorage.setItem(`${this.id}-last-shown`,Date.now()),!0))),o(this,"hide",(()=>{this.showing&&(this.showing=Krete.Modals.anyIsShowing=!1,$("#"+this.id).removeClass("showing"),$("body").removeClass("modal-showing"))})),o(this,"exitClickHandler",(()=>{this.hide()})),this.id=t,this.showing=!1,window.Krete.Modals.instances[t]=this,this.data={},$("body").append(`\n\t\t\t<div id="${t}" class="script-modal ${c}">\n\t\t\t\t<div class="background" style="${s}"></div>\n\t\t\t\t<div class="container" style="${r}">\n\t\t\t\t\t${e}\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t`),$(`#${t} .background, #${t} .exit`).click(this.exitClickHandler.bind(this))}static shouldShowDaily(t){const e=localStorage.getItem(`${t}-last-shown`);return!e||Date.now()-parseInt(e)>864e5}}Krete.Modals={},void 0===Krete.Modals.anyIsShowing&&(Krete.Modals.anylShowing=!1),Krete.Modals.instances={}},function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return r}});var o=n(4);const a=["HOLIDAYFACE31"],i=["31% off your entire order!"];class r extends o.default{constructor(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,r="";const s=t.match(/^[A-Z]+(\d\d)$/i);s&&(r=`${s[1]}% off your entire order`);const c=a.indexOf(t.toUpperCase());c>-1&&(r=i[c]),super("sale-alert-modal",`\n\t\t\t<div class="subcont">\n\t\t\t\t<div class="exit">\n\t\t\t\t\t<svg viewBox="0 0 22 22" style="background-color:#ffffff00" x="0px" y="0px" width="22px" height="22px">\n\t\t\t\t\t\t<g id="Layer%201">\n\t\t\t\t\t\t\t<path d="M 1.2 -0.2 L -0.2 1.2 L 9.6 11 L -0.2 20.8 L 1.2 22.2 L 11 12.4 L 20.8 22.2 L 22.2 20.8 L 12.4 11 L 22.2 1.2 L 20.8 -0.2 L 11 9.6 L 1.2 -0.2 Z" fill="#ffffff"/>\n\t\t\t\t\t\t</g>\n\t\t\t\t\t</svg>\n\t\t\t\t</div>\n\t\t\t\t<h2>${e}</h2>\n\t\t\t\t${n?`<h5>${n}</h5>`:""}\n\t\t\t\t${o?`<h6>${o}</h6>`:""}\n\t\t\t\t<div class="coupon">\n\t\t\t\t\t<h3>${t}</h3>\n\t\t\t\t\t<p>${r}</p>\n\t\t\t\t</div>\n\t\t\t\t<div class="footer">\n\t\t\t\t\t<svg width="43px" height="38px">\n\t\t\t\t\t\t<g>\n\t\t\t\t\t\t\t<path d="M 1 2 L 11 2 L 17 27 L 40 20 L 42 6 L 12 6 " stroke="#f5f4ec" stroke-width="3" fill="none"/>\n\t\t\t\t\t\t\t<path id="Ellipse" d="M 32 33.5 C 32 31.567 33.567 30 35.5 30 C 37.433 30 39 31.567 39 33.5 C 39 35.433 37.433 37 35.5 37 C 33.567 37 32 35.433 32 33.5 Z" stroke="#f5f4ec" stroke-width="2" fill="none"/>\n\t\t\t\t\t\t\t<path id="Ellipse2" d="M 19 33.5 C 19 31.567 20.567 30 22.5 30 C 24.433 30 26 31.567 26 33.5 C 26 35.433 24.433 37 22.5 37 C 20.567 37 19 35.433 19 33.5 Z" stroke="#f5f4ec" stroke-width="2" fill="none"/>\n\t\t\t\t\t\t</g>\n\t\t\t\t\t</svg>\n\t\t\t\t\t<p>You'll see it auto-applied in<br/>your cart and/or checkout.</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t`,"","background-color:#00000055;"),console.log("modal made:",this)}}},function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return a}});var o=n(4);class a extends o.default{constructor(){super("friends11-modal",'\n\t\t\t<div class="subcont">\n\t\t\t\t<div class="exit">\n\t\t\t\t\t<svg viewBox="0 0 22 22" style="background-color:#ffffff00" x="0px" y="0px" width="22px" height="22px">\n\t\t\t\t\t\t<g id="Layer%201">\n\t\t\t\t\t\t\t<path d="M 1.2 -0.2 L -0.2 1.2 L 9.6 11 L -0.2 20.8 L 1.2 22.2 L 11 12.4 L 20.8 22.2 L 22.2 20.8 L 12.4 11 L 22.2 1.2 L 20.8 -0.2 L 11 9.6 L 1.2 -0.2 Z" fill="#ffffff"/>\n\t\t\t\t\t\t</g>\n\t\t\t\t\t</svg>\n\t\t\t\t</div>\n\t\t\t\t<h2>You\'re a Good Listener</h2>\n\t\t\t\t<p>Did you listen to the podcast?<br/>You must have, because you got the discount.</p>\n\t\t\t\t<div class="coupon">\n\t\t\t\t\t<h3>FRIENDSHIP11</h3>\n\t\t\t\t\t<p>Get 11% off your entire order.<br/><b>(including hydrating science acid)</b></p>\n\t\t\t\t</div>\n\t\t\t\t<div class="footer">\n\t\t\t\t\t<svg width="43px" height="38px">\n\t\t\t\t\t\t<g>\n\t\t\t\t\t\t\t<path d="M 1 2 L 11 2 L 17 27 L 40 20 L 42 6 L 12 6 " stroke="#f5f4ec" stroke-width="3" fill="none"/>\n\t\t\t\t\t\t\t<path id="Ellipse" d="M 32 33.5 C 32 31.567 33.567 30 35.5 30 C 37.433 30 39 31.567 39 33.5 C 39 35.433 37.433 37 35.5 37 C 33.567 37 32 35.433 32 33.5 Z" stroke="#f5f4ec" stroke-width="2" fill="none"/>\n\t\t\t\t\t\t\t<path id="Ellipse2" d="M 19 33.5 C 19 31.567 20.567 30 22.5 30 C 24.433 30 26 31.567 26 33.5 C 26 35.433 24.433 37 22.5 37 C 20.567 37 19 35.433 19 33.5 Z" stroke="#f5f4ec" stroke-width="2" fill="none"/>\n\t\t\t\t\t\t</g>\n\t\t\t\t\t</svg>\n\t\t\t\t\t<p>You\'ll see it auto-applied in<br/>your cart and/or checkout.</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t',"","background-color:#00000055;")}}},function(t,e,n){"use strict";n.r(e),n.d(e,{Interaction:function(){return o},default:function(){return a}});const o={GAVE_EMAIL:"gave-email",GAVE_PHONE:"gave-phone"};class a{static add(t){const e=a.getInteractionList();-1===e.indexOf(t)&&(e.push(t),a.setInteractionList(e))}static remove(t){const e=a.getInteractionList(),n=e.indexOf(t);n>-1&&(e.splice(n,1),a.setInteractionList(e))}static has(t){return a.getInteractionList().indexOf(t)>-1}static setEmail(t){localStorage.setItem("krete-email",t)}static getEmail(){return localStorage.getItem("krete-email")||null}static getInteractionList(){const t=localStorage.getItem("krete-interactions");return t?t.split(","):[]}static setInteractionList(t){localStorage.setItem("krete-interactions",t.join(","))}}},function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return o},Category:function(){return a},Action:function(){return i}});class o{static event(t,e,n){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;null===o?(gtag("event",e,{event_category:t,event_label:n}),ga("send","event",t,e,n)):(gtag("event",e,{event_category:t,event_label:n,value:o}),ga("send","event",t,e,n,o)),console.log(`JS GA event: {category:${t}, action:${e}, label:${n}}, [value:${o}]`)}static enhancedEcommerceAddToCart(t,e,n,o,a){let i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",r=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"Krete";ga("set","&cu",liquid.CURRENCY_CODE);const s=n?`${e} - ${n}`:e;ga("ec:addProduct",{id:t,name:s,category:i,quantity:parseInt(o),price:parseFloat(a),brand:r,variant:n,currency:liquid.CURRENCY_CODE}),ga("ec:setAction","add"),ga("send","event",{eventCategory:"EnhancedEcommerce",eventAction:"Added Product",eventLabel:void 0,nonInteraction:!0}),console.log(`Manual EnhancedEcommerce Add To Cart Event: {sku:${t}, name:${s}, quantity:${o}, price:${a}}`)}static facebookPixelAddToCart(t,e,n,o,a){const i=n?`${e} - ${n}`:e;fbq("track","AddToCart",{content_category:arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",content_ids:[t],content_name:i,content_type:"product_group",currency:liquid.CURRENCY_CODE,num_items:o+"",value:a+""}),console.log(`Manual Facebook Pixel Add To Cart Event: {id:${t}, name:${i}, quantity:${o}, price:${a}}`)}static klaviyoAddToCart(t,e,n,o,a,i,r,s){const c=n?`${e} - ${n}`:e;let l={Name:c,ProductID:t,Categories:[arguments.length>8&&void 0!==arguments[8]?arguments[8]:""],ImageURL:s||"https://cdn.shopify.com/s/files/1/0338/0520/5563/products/product-straight-on_a6c6c44d-b055-444a-bc2e-34b633e5858c_grande.jpg?v=1632436242",URL:r||"https://krete.club/products/facial-serum",Brand:arguments.length>9&&void 0!==arguments[9]?arguments[9]:"Krete",Price:"$"+a,CompareAtPrice:"$"+i};_learnq.push(["track","Added to Cart",l]),console.log(`Manual LearnQ Add To Cart Event: {id:${t}, name:${c}, quantity:${o}, price:${a}}`)}static klaviyoViewedProduct(t,e,n,o,a,i,r){const s=n?`${e} - ${n}`:e;let c={Name:s,ProductID:t,Categories:[arguments.length>7&&void 0!==arguments[7]?arguments[7]:""],ImageURL:r||"https://cdn.shopify.com/s/files/1/0338/0520/5563/products/product-straight-on_a6c6c44d-b055-444a-bc2e-34b633e5858c_grande.jpg?v=1632436242",URL:i||"https://krete.club/products/facial-serum",Brand:arguments.length>8&&void 0!==arguments[8]?arguments[8]:"Krete",Price:"$"+o,CompareAtPrice:"$"+a};_learnq.push(["track","Viewed Product",c]),_learnq.push(["trackViewedItem",{Title:c.Name,ItemId:c.ProductID,Categories:c.Categories,ImageUrl:c.ImageURL,Url:c.URL,Metadata:{Brand:c.Brand,Price:c.Price,CompareAtPrice:c.CompareAtPrice}}]),console.log(`Manual LearnQ Viewed Product Event: {id:${t}, name:${s}, price:${o}}`)}static getClientId(){try{var t=ga.getAll();for(let e=0;e<t.length;e+=1)if("UA-186701400-1"===t[e].get("trackingId"))return t[e].get("clientId")}catch(t){}return!1}static async getClientIdAsync(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;const n=Date.now(),a=1e3*e;return new Promise(((e,i)=>{let r=null;function s(){if(Date.now()-n>a)return e(null),void clearInterval(r);const t=o.getClientId();return!!t&&(e(t),clearInterval(r),!0)}s()||(r=setInterval(s,t))}))}}const a={SUBSCRIBE:"Subscribe",UPSELL:"Upsell",INTERACT:"Interact"},i={GAVE_EMAIL:"Submitted Email",GAVE_PHONE:"Submitted Phone Number",UPGRADED_TO_3_PACK:"Upgraded to 3 Pack",UPGRADED_TO_6_PACK:"Upgraded to 6 Pack",CHANGED_VARIANT:"Changed Selected Variant",CLICKED_CTA:"Clicked CTA"};o.Category=a,o.Action=i},function(t,e,n){"use strict";n.r(e),n.d(e,{SubscribeType:function(){return r},default:function(){return s}});var o=n(8),a=n(2);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const r={EMAIL:"email",PHONE:"phone"};class s{static getRefData(){const t=localStorage.getItem("krete-referral-id"),e=localStorage.getItem("krete-referral-time"),n=localStorage.getItem("krete-referral-hit-id");return!t||!n||!e||Date.now()-e>2592e6?null:{refId:t,refStamp:e,refHitId:n}}static validateRef(t){return t&&"string"==typeof t?(t=t.trim()).match(/^[a-zA-Z]-[0-9]{6}$/)?null:t:null}static async saveHit(t,e){const n=await o.default.getClientIdAsync(),a=await fetch(new Request(`https://krete-node.herokuapp.com/api/referral/hit?ref=${encodeURIComponent(t)}&cid=${n||""}&tags=${encodeURIComponent(e)}`)),i=await a.json();return i&&i.data?i.data._id:void 0}static async saveSubscribe(t,e){const n=s.getRefData();if(!n)return null;const o={ref:n.refId,subType:t,subValue:e,creditedHitId:n.refHitId},i=await fetch(new Request("https://krete-node.herokuapp.com/api/referral/subscribe?"+a.default.buildQueryString(o))),r=await i.json();return r&&r.data?r.data._id:void 0}}i(s,"refId",null),i(s,"creditedHitId",null)},function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return a}});const o=/^(sku-)?subscribe_variant-(.*)-(.*)$/;class a{static isSubscriptionSKU(t){return null!==t.match(o)}static deconstructSubscriptionSKU(t){const e=t.match(o);return e?{selling_plan:e[2],id:e[3]}:(console.warn(`sku ${t} is not a valid subscription sku and cannot be deconstructed`),{selling_plan:"",id:""})}}},function(){$(document).ready((()=>{$("input[type=number]").each(((t,e)=>{const n=$(e);if(n.hasClass("killed"))return;const o=$('<div class="input-minus">-</div>'),a=$('<div class="input-plus">+</div>'),i=n.siblings('[name="update"]');n.before(o),n.after(a);let r=parseInt(n.val());const s=r,c=parseInt(n.attr("max"))||9999999999,l=parseInt(n.attr("min"))||0;function d(){r>=c?a.addClass("disabled"):a.removeClass("disabled"),r<=l?o.addClass("disabled"):o.removeClass("disabled"),r>c&&(r=c,n.val(c)),r<l&&(r=l,n.val(l)),r!==s?i.addClass("show").removeClass("hide"):i.addClass("hide").removeClass("show")}d(),o.click((()=>{r--,n.val(r),d()})),a.click((()=>{r++,n.val(r),d()})),n.change((()=>{r=parseInt(n.val()),d()}))}))}))},function(){$(document).ready((()=>{}))},function(){function t(){!function(){let t=0;const e=setInterval(n,2e3);function n(){const n=$("#ssw-review-simple-html");(n.length||++t>100)&&(n.addClass("hide-after"),n.append('<div class="legal">By clicking "Post" you are agreeing to our <a href="/pages/terms-and-conditions">Terms and Conditions</a> and <a href="/pages/privacy-policy">Privacy Policy</a>.<br/>We\'ll send you useful information, like tips and discounts!</div>'),clearInterval(e))}}()}$(window).load((function(){const e=setInterval(n,1e3);function n(){window.growaveAI&&(clearInterval(e),setTimeout(t,10))}n()}))},function(){(()=>{var t=$.scrollTo=function(t,e,n){return $(window).scrollTo(t,e,n)};function e(t){return!t.nodeName||-1!==$.inArray(t.nodeName.toLowerCase(),["iframe","#document","html","body"])}function n(t){return"function"==typeof t}function o(t){return n(t)||$.isPlainObject(t)?t:{top:t,left:t}}t.defaults={axis:"xy",duration:0,limit:!0},$.fn.scrollTo=function(a,i,r){"object"==typeof i&&(r=i,i=0),"function"==typeof r&&(r={onAfter:r}),"max"===a&&(a=9e9),r=$.extend({},t.defaults,r),i=i||r.duration;var s=r.queue&&r.axis.length>1;return s&&(i/=2),r.offset=o(r.offset),r.over=o(r.over),this.each((function(){if(null!==a){var c,l=e(this),d=l?this.contentWindow||window:this,u=$(d),f=a,g={};switch(typeof f){case"number":case"string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(f)){f=o(f);break}f=l?$(f):$(f,d);case"object":if(0===f.length)return;(f.is||f.style)&&(c=(f=$(f)).offset())}var p=n(r.offset)&&r.offset(d,f)||r.offset;$.each(r.axis.split(""),(function(e,n){var o="x"===n?"Left":"Top",a=o.toLowerCase(),i="scroll"+o,m=u[i](),v=t.max(d,n);if(c)g[i]=c[a]+(l?0:m-u.offset()[a]),r.margin&&(g[i]-=parseInt(f.css("margin"+o),10)||0,g[i]-=parseInt(f.css("border"+o+"Width"),10)||0),g[i]+=p[a]||0,r.over[a]&&(g[i]+=f["x"===n?"width":"height"]()*r.over[a]);else{var w=f[a];g[i]=w.slice&&"%"===w.slice(-1)?parseFloat(w)/100*v:w}r.limit&&/^\d+$/.test(g[i])&&(g[i]=g[i]<=0?0:Math.min(g[i],v)),!e&&r.axis.length>1&&(m===g[i]?g={}:s&&(h(r.onAfterFirst),g={}))})),h(r.onAfter)}function h(t){var e=$.extend({},r,{queue:!0,duration:i,complete:t&&function(){t.call(d,f,r)}});u.animate(g,e)}}))},t.max=function(t,n){var o="x"===n?"Width":"Height",a="scroll"+o;if(!e(t))return t[a]-$(t)[o.toLowerCase()]();var i="client"+o,r=t.ownerDocument||t.document,s=r.documentElement,c=r.body;return Math.max(s[a],c[a])-Math.min(s[i],c[i])},$.Tween.propHooks.scrollLeft=$.Tween.propHooks.scrollTop={get:function(t){return $(t.elem)[t.prop]()},set:function(t){var e=this.get(t);if(t.options.interrupt&&t._last&&t._last!==e)return $(t.elem).stop();var n=Math.round(t.now);e!==n&&($(t.elem)[t.prop](n),t._last=this.get(t))}}})()},function(){window.clearNoTrack=function(){localStorage.removeItem("krete-notrack"),location.reload()},window.setNoTrack=function(){window.isNoTrack()||(localStorage.setItem("krete-notrack","true"),document.title="(notrack) "+document.title)},window.isNoTrack=function(){return"true"===localStorage.getItem("krete-notrack")},window.isNoTrack()&&(document.title="(notrack) "+document.title)}],e={};function n(o){var a=e[o];if(void 0!==a)return a.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,n),i.exports}n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var o={};!function(){"use strict";n.r(o);var t=n(1),e=n(7),a=n(8),i=n(9),r=n(10),s=n(2);n(11),n(12),n(13),n(14),n(15);let c;window.Krete.ProductUtils=r.default,window.Krete.URLUtils=s.default,window.Krete.const={},window.Krete.const.DISCOUNT_STORAGE_KEY=t.DISCOUNT_STORAGE_KEY,window.Krete.const.NON_SUB_DISCOUNT_STORAGE_KEY=t.NON_SUB_DISCOUNT_STORAGE_KEY,window.controller=new ScrollMagic.Controller;let l=!0;function d(t){if(t.preventDefault(),!l)return;const e=c.querySelector("input").value;e&&/\S+@\S+\.\S+/.test(e)?u(e):alert("Please give a valid email!")}async function u(t){l=!1,c.classList.add("state-working");const n=await fetch(new Request(`http://krete.info/api/klaviyo-signup.php?email=${t}`)),o=await n.text();c.classList.remove("state-working"),n.ok&&"success"===o?(c.classList.add("state-success"),e.default.add(e.Interaction.GAVE_EMAIL),e.default.setEmail(t),a.default.event(a.Category.SUBSCRIBE,a.Action.GAVE_EMAIL,"Footer Subscribe"),i.default.saveSubscribe(i.SubscribeType.EMAIL,t)):c.classList.add("state-fail")}function f(t){const e="0"==t?"A":"B";console.log(`- Copyright Experiment Running as ${e}`),"B"===e&&(console.log(`-- Changing copyright to "© ${(new Date).getFullYear()} Krete"`),$(document).ready((function(){$("#main-footer .copyright").html(`© ${(new Date).getFullYear()} Krete`)})))}if($(document).ready((function(){new ScrollMagic.Scene({offset:30}).setClassToggle("#header-menu","scrolled").addTo(window.controller),c=document.querySelector("footer .email-signup"),c.addEventListener("submit",d)})),window.footerEmailSubscribe=u,$(window).load((function(){$.getScript(allOnLoadURL)})),gtag("event","optimize.callback",{name:"zHNydNmKT26xXr9xd5T4RA",callback:f}),window.isNoTrack()){let t=Math.random()>.5?"0":"1",e="0"===t?"A":"B";const n=s.default.getQueryVars();if(n.hasOwnProperty(s.default.keys.A_OR_B)){const o=n[s.default.keys.A_OR_B];"a"===o||"A"===o||"0"===o?(t="0",e="A"):"b"===o||"B"===o||"1"===o?(t="1",e="B"):"c"===o||"C"===o||"2"===o?(t="2",e="C"):"d"===o||"D"===o||"3"===o?(t="3",e="D"):(t="0",e="A")}console.log("----------- NoTrack Fake Experiments ------------"),console.log(`** starting copyright experiment as ${e} **`),f(t),console.log("-----------   END Fake Experiments   ------------")}$(document).ready((()=>{gtag("event","optimize.callback",{name:"6FkL2wy3QVuwzVrVTbarGQ",callback:function(t){const e="0"==t?"A":"B";console.log(`- Landing Page CTA Exp. Running as ${e}`),"B"===e&&$(".top-cta-button").html("Try it for <del>$39</del> $6!").css({letterSpacing:"0px",textTransform:"none"})}})})),$(window).load((()=>{window.jqueryWindowLoaded=!0})),$(document).ready((()=>{window.jqueryDocumentReady=!0}))}()}();
//# sourceMappingURL=all.js.map