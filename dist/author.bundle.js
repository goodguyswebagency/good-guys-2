(()=>{"use strict";var e={5716:(e,t,r)=>{r.d(t,{A:()=>c});var n=r(1601),o=r.n(n),a=r(6314),i=r.n(a)()(o());i.push([e.id,"",""]);const c=i},5688:(e,t,r)=>{r.d(t,{A:()=>c});var n=r(1601),o=r.n(n),a=r(6314),i=r.n(a)()(o());i.push([e.id,'.blog-list{--gap-column:24px;--gap-row:4rem;--column-line-offset:calc(var(--gap-column)/2 + 1px);--row-line-offset:calc(var(--gap-row)/2 + 1px);--line-thickness:1px;--line-color:#000;gap:var(--gap-row) var(--gap-column);overflow:hidden}@media screen and (max-width:991px){.blog-list{--gap-column:16px;--gap-row:3rem}}@media screen and (max-width:767px){.blog-list{--gap-column:8px;--gap-row:2rem;--line-thickness:1px;--line-offset:calc(var(--gap)/2)}}.blog{position:relative}.blog:after,.blog:before{background-color:var(--line-color);content:"";position:absolute;z-index:1}.blog:after{block-size:var(--line-thickness);inline-size:100vw;inset-block-start:calc(var(--row-line-offset)*-1);inset-inline-start:0}.blog:before{block-size:100%;inline-size:var(--line-thickness);inset-inline-start:calc(var(--column-line-offset)*-1)}@media(min-width:768px)and (max-width:991px){.blog:before{block-size:calc(100% - 1rem)}}.blog .blog-arrow{transform:scale(0);transition:all .2s}.blog .blog-arrow-wrapper{overflow:visible}.blog .blog-arrow-wrapper:before{background-color:#efff32;border-radius:50%;content:"";height:2.8125rem;max-height:0;max-width:0;position:absolute;right:0;top:0;transition:all .2s;width:2.8125rem}.blog:has(.blog_link:hover) .blog-arrow-wrapper:before{max-height:100%;max-width:100%}.blog:has(.blog_link:hover) .blog-arrow{transform:scale(1)}.blog .blog_content-top-info .time-to-read{color:#838383}@media(min-width:768px)and (max-width:991px){.home_resources .blog:last-child{border-bottom:0 solid #000;display:flex;gap:16px;grid-area:span 1/span 8/span 1/span 8!important}.home_resources .blog:last-child .blog_media{width:50%}.home_resources .blog:last-child .blog_content{justify-content:space-between;padding-bottom:0;padding-top:0;width:50%}}',""]);const c=i},9041:(e,t,r)=>{r.d(t,{A:()=>c});var n=r(1601),o=r.n(n),a=r(6314),i=r.n(a)()(o());i.push([e.id,"[cta-vertical=true] .cta{align-items:center;flex-direction:column;gap:3rem;text-align:center}@media screen and (max-width:991px){[cta-vertical=true] .cta{gap:1rem}}[cta-vertical=true] .cta_info-text,[cta-vertical=true] .spacer-4{display:none}.dark-background .section_cta{border-top:1px solid #fff}.dark-background .section_cta .cta_info-heading{color:#fff}",""]);const c=i},6314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(n)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(i[l]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);n&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},1601:e=>{e.exports=function(e){return e[1]}},5072:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var a={},i=[],c=0;c<e.length;c++){var l=e[c],s=n.base?l[0]+n.base:l[0],d=a[s]||0,p="".concat(s," ").concat(d);a[s]=d+1;var u=r(p),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)t[u].references++,t[u].updater(f);else{var m=o(f,n);n.byIndex=c,t.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(e,t){var r=t.domAPI(t);r.update(e);return function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=r(a[i]);t[c].references--}for(var l=n(e,o),s=0;s<a.length;s++){var d=r(a[s]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=l}}},7659:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},5056:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},7825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},1113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nc=void 0;var n=r(5072),o=r.n(n),a=r(7825),i=r.n(a),c=r(7659),l=r.n(c),s=r(5056),d=r.n(s),p=r(540),u=r.n(p),f=r(1113),m=r.n(f),g=r(5716),h={};h.styleTagTransform=m(),h.setAttributes=d(),h.insert=l().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=u();o()(g.A,h);g.A&&g.A.locals&&g.A.locals;var b=r(9041),v={};v.styleTagTransform=m(),v.setAttributes=d(),v.insert=l().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=u();o()(b.A,v);b.A&&b.A.locals&&b.A.locals;var x=r(5688),w={};w.styleTagTransform=m(),w.setAttributes=d(),w.insert=l().bind(null,"head"),w.domAPI=i(),w.insertStyleElement=u();o()(x.A,w);x.A&&x.A.locals&&x.A.locals;async function y(e,t){try{const r=await fetch(e);if(!r.ok)throw new Error("Network response was not ok");const n=await r.text(),o=new DOMParser,a=o.parseFromString(n,"text/html").querySelector(".blog_single-content .blog_rich-text");if(a){const e=function(e){const t=(e.innerText||e.textContent).split(/\s+/).length;return Math.ceil(t/200)}(a),r=document.getElementById(t);r&&(r.textContent=`${e} min`)}}catch(e){console.error("Failed to fetch blog post content:",e)}}document.querySelectorAll(".blog-list .blog").forEach((e=>{const t=e.querySelector(".blog_link"),r=e.querySelector('[id^="time-to-read-"]');t&&r&&y(t.href,r.id)}))})();