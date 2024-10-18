(()=>{"use strict";var e={5040:(e,t,r)=>{r.d(t,{A:()=>l});var o=r(1601),n=r.n(o),a=r(6314),i=r.n(a)()(n());i.push([e.id,"@media screen and (min-width:767px)and (max-width:991px){.featured-blog .text-tag{border:1px solid #fff;color:#fff}.featured-blog .text-size-small,.featured-blog .time-to-read{color:#fff!important;opacity:.7}.featured-blog .featured-blog_info-top-separator{background-color:#fff;opacity:.2}}",""]);const l=i},5688:(e,t,r)=>{r.d(t,{A:()=>l});var o=r(1601),n=r.n(o),a=r(6314),i=r.n(a)()(n());i.push([e.id,'.blog-list{--gap-column:24px;--gap-row:4rem;--column-line-offset:calc(var(--gap-column)/2 + 1px);--row-line-offset:calc(var(--gap-row)/2 + 1px);--line-thickness:1px;--line-color:#000;gap:var(--gap-row) var(--gap-column);overflow:hidden}@media screen and (max-width:991px){.blog-list{--gap-column:16px;--gap-row:3rem}}@media screen and (max-width:767px){.blog-list{--gap-column:8px;--gap-row:2rem;--line-thickness:1px;--line-offset:calc(var(--gap)/2)}}.blog{position:relative}.blog:after,.blog:before{background-color:var(--line-color);content:"";position:absolute;z-index:1}.blog:after{block-size:var(--line-thickness);inline-size:100vw;inset-block-start:calc(var(--row-line-offset)*-1);inset-inline-start:0}.blog:before{block-size:100%;inline-size:var(--line-thickness);inset-inline-start:calc(var(--column-line-offset)*-1)}@media(min-width:768px)and (max-width:991px){.blog:before{block-size:calc(100% - 1rem)}}.blog .blog-arrow{transform:scale(0);transition:all .2s}.blog .blog-arrow-wrapper{overflow:visible}.blog .blog-arrow-wrapper:before{background-color:#efff32;border-radius:50%;content:"";height:2.8125rem;max-height:0;max-width:0;position:absolute;right:0;top:0;transition:all .2s;width:2.8125rem}.blog:has(.blog_link:hover) .blog-arrow-wrapper:before{max-height:100%;max-width:100%}.blog:has(.blog_link:hover) .blog-arrow{transform:scale(1)}.blog .blog_content-top-info .time-to-read{color:#838383}@media(min-width:768px)and (max-width:991px){.home_resources .blog:last-child{border-bottom:0 solid #000;display:flex;gap:16px;grid-area:span 1/span 8/span 1/span 8!important}.home_resources .blog:last-child .blog_media{width:50%}.home_resources .blog:last-child .blog_content{justify-content:space-between;padding-bottom:0;padding-top:0;width:50%}}',""]);const l=i},9041:(e,t,r)=>{r.d(t,{A:()=>l});var o=r(1601),n=r.n(o),a=r(6314),i=r.n(a)()(n());i.push([e.id,"[cta-vertical=true] .cta{align-items:center;flex-direction:column;gap:3rem;text-align:center}@media screen and (max-width:991px){[cta-vertical=true] .cta{gap:1rem}}[cta-vertical=true] .cta_info-text,[cta-vertical=true] .spacer-4{display:none}.dark-background .section_cta{border-top:1px solid #fff}.dark-background .section_cta .cta_info-heading{color:#fff}",""]);const l=i},6314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",o=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),o&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),o&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,o,n,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var l=0;l<this.length;l++){var c=this[l][0];null!=c&&(i[c]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);o&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),n&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=n):d[4]="".concat(n)),t.push(d))}},t}},1601:e=>{e.exports=function(e){return e[1]}},5072:e=>{var t=[];function r(e){for(var r=-1,o=0;o<t.length;o++)if(t[o].identifier===e){r=o;break}return r}function o(e,o){for(var a={},i=[],l=0;l<e.length;l++){var c=e[l],s=o.base?c[0]+o.base:c[0],d=a[s]||0,p="".concat(s," ").concat(d);a[s]=d+1;var u=r(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(f);else{var m=n(f,o);o.byIndex=l,t.splice(l,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function n(e,t){var r=t.domAPI(t);r.update(e);return function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,n){var a=o(e=e||[],n=n||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var l=r(a[i]);t[l].references--}for(var c=o(e,n),s=0;s<a.length;s++){var d=r(a[s]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=c}}},7659:e=>{var t={};e.exports=function(e,r){var o=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(r)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},5056:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},7825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var o="";r.supports&&(o+="@supports (".concat(r.supports,") {")),r.media&&(o+="@media ".concat(r.media," {"));var n=void 0!==r.layer;n&&(o+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),o+=r.css,n&&(o+="}"),r.media&&(o+="}"),r.supports&&(o+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},1113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nc=void 0;var o=r(5072),n=r.n(o),a=r(7825),i=r.n(a),l=r(7659),c=r.n(l),s=r(5056),d=r.n(s),p=r(540),u=r.n(p),f=r(1113),m=r.n(f),g=r(5040),b={};b.styleTagTransform=m(),b.setAttributes=d(),b.insert=c().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=u();n()(g.A,b);g.A&&g.A.locals&&g.A.locals;var h=r(9041),v={};v.styleTagTransform=m(),v.setAttributes=d(),v.insert=c().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=u();n()(h.A,v);h.A&&h.A.locals&&h.A.locals;var x=r(5688),w={};w.styleTagTransform=m(),w.setAttributes=d(),w.insert=c().bind(null,"head"),w.domAPI=i(),w.insertStyleElement=u();n()(x.A,w);x.A&&x.A.locals&&x.A.locals;async function y(e,t){try{const r=await fetch(e);if(!r.ok)throw new Error("Network response was not ok");const o=await r.text(),n=new DOMParser,a=n.parseFromString(o,"text/html").querySelector(".blog_single-content .blog_rich-text");if(a){const e=function(e){const t=(e.innerText||e.textContent).split(/\s+/).length;return Math.ceil(t/200)}(a),r=document.getElementById(t);r&&(r.textContent=`${e} min`)}}catch(e){console.error("Failed to fetch blog post content:",e)}}document.querySelectorAll(".blog-list .blog").forEach((e=>{const t=e.querySelector(".blog_link"),r=e.querySelector('[id^="time-to-read-"]');t&&r&&y(t.href,r.id)}))})();