(function(){(function(){(function(){this.Rails={linkClickSelector:"a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",buttonClickSelector:{selector:"button[data-remote]:not([form]), button[data-confirm]:not([form])",exclude:"form button"},inputChangeSelector:"select[data-remote], input[data-remote], textarea[data-remote]",formSubmitSelector:"form",formInputClickSelector:"form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",formDisableSelector:"input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",formEnableSelector:"input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",fileInputSelector:"input[name][type=file]:not([disabled])",linkDisableSelector:"a[data-disable-with], a[data-disable]",buttonDisableSelector:"button[data-remote][data-disable-with], button[data-remote][data-disable]"}}).call(this)}).call(this);var t=this.Rails;(function(){(function(){var e,n;n=Element.prototype.matches||Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector,t.matches=function(t,e){return null!=e.exclude?n.call(t,e.selector)&&!n.call(t,e.exclude):n.call(t,e)},e="_ujsData",t.getData=function(t,n){var a;return null!=(a=t[e])?a[n]:void 0},t.setData=function(t,n,a){return null==t[e]&&(t[e]={}),t[e][n]=a},t.$=function(t){return Array.prototype.slice.call(document.querySelectorAll(t))}}).call(this),function(){var e,n,a;e=t.$,a=t.csrfToken=function(){var t;return(t=document.querySelector("meta[name=csrf-token]"))&&t.content},n=t.csrfParam=function(){var t;return(t=document.querySelector("meta[name=csrf-param]"))&&t.content},t.CSRFProtection=function(t){var e;if(null!=(e=a()))return t.setRequestHeader("X-CSRF-Token",e)},t.refreshCSRFTokens=function(){var t,r;if(r=a(),t=n(),null!=r&&null!=t)return e('form input[name="'+t+'"]').forEach(function(t){return t.value=r})}}.call(this),function(){var e,n,a;a=t.matches,e=window.CustomEvent,"function"!=typeof e&&(e=function(t,e){var n;return n=document.createEvent("CustomEvent"),n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),n},e.prototype=window.Event.prototype),n=t.fire=function(t,n,a){var r;return r=new e(n,{bubbles:!0,cancelable:!0,detail:a}),t.dispatchEvent(r),!r.defaultPrevented},t.stopEverything=function(t){return n(t.target,"ujs:everythingStopped"),t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation()},t.delegate=function(t,e,n,r){return t.addEventListener(n,function(t){var n;for(n=t.target;n instanceof Element&&!a(n,e);)n=n.parentNode;if(n instanceof Element&&!1===r.call(n,t))return t.preventDefault(),t.stopPropagation()})}}.call(this),function(){var e,n,a,r,o,i;n=t.CSRFProtection,r=t.fire,e={"*":"*/*",text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript",script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},t.ajax=function(t){var e;return t=o(t),e=a(t,function(){var n;return n=i(e.response,e.getResponseHeader("Content-Type")),2===Math.floor(e.status/100)?"function"==typeof t.success&&t.success(n,e.statusText,e):"function"==typeof t.error&&t.error(n,e.statusText,e),"function"==typeof t.complete?t.complete(e,e.statusText):void 0}),"function"==typeof t.beforeSend&&t.beforeSend(e,t),e.readyState===XMLHttpRequest.OPENED?e.send(t.data):r(document,"ajaxStop")},o=function(t){return t.url=t.url||location.href,t.type=t.type.toUpperCase(),"GET"===t.type&&t.data&&(t.url.indexOf("?")<0?t.url+="?"+t.data:t.url+="&"+t.data),null==e[t.dataType]&&(t.dataType="*"),t.accept=e[t.dataType],"*"!==t.dataType&&(t.accept+=", */*; q=0.01"),t},a=function(t,e){var a;return a=new XMLHttpRequest,a.open(t.type,t.url,!0),a.setRequestHeader("Accept",t.accept),"string"==typeof t.data&&a.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),t.crossDomain||a.setRequestHeader("X-Requested-With","XMLHttpRequest"),n(a),a.withCredentials=!!t.withCredentials,a.onreadystatechange=function(){if(a.readyState===XMLHttpRequest.DONE)return e(a)},a},i=function(t,e){var n,a;if("string"==typeof t&&"string"==typeof e)if(e.match(/\bjson\b/))try{t=JSON.parse(t)}catch(t){}else if(e.match(/\b(?:java|ecma)script\b/))a=document.createElement("script"),a.text=t,document.head.appendChild(a).parentNode.removeChild(a);else if(e.match(/\b(xml|html|svg)\b/)){n=new DOMParser,e=e.replace(/;.+/,"");try{t=n.parseFromString(t,e)}catch(t){}}return t},t.href=function(t){return t.href},t.isCrossDomain=function(t){var e,n;e=document.createElement("a"),e.href=location.href,n=document.createElement("a");try{return n.href=t,!((!n.protocol||":"===n.protocol)&&!n.host||e.protocol+"//"+e.host==n.protocol+"//"+n.host)}catch(t){return t,!0}}}.call(this),function(){var e,n;e=t.matches,n=function(t){return Array.prototype.slice.call(t)},t.serializeElement=function(t,a){var r,o;return r=[t],e(t,"form")&&(r=n(t.elements)),o=[],r.forEach(function(t){if(t.name)return e(t,"select")?n(t.options).forEach(function(e){if(e.selected)return o.push({name:t.name,value:e.value})}):t.checked||-1===["radio","checkbox","submit"].indexOf(t.type)?o.push({name:t.name,value:t.value}):void 0}),a&&o.push(a),o.map(function(t){return null!=t.name?encodeURIComponent(t.name)+"="+encodeURIComponent(t.value):t}).join("&")},t.formElements=function(t,a){return e(t,"form")?n(t.elements).filter(function(t){return e(t,a)}):n(t.querySelectorAll(a))}}.call(this),function(){var e,n,a;n=t.fire,a=t.stopEverything,t.handleConfirm=function(t){if(!e(this))return a(t)},e=function(t){var e,a,r;if(!(r=t.getAttribute("data-confirm")))return!0;if(e=!1,n(t,"confirm")){try{e=confirm(r)}catch(t){}a=n(t,"confirm:complete",[e])}return e&&a}}.call(this),function(){var e,n,a,r,o,i,l,u,c,s,d;c=t.matches,u=t.getData,s=t.setData,d=t.stopEverything,l=t.formElements,t.handleDisabledElement=function(t){var e;if(e=this,e.disabled)return d(t)},t.enableElement=function(e){var n;return n=e instanceof Event?e.target:e,c(n,t.linkDisableSelector)?i(n):c(n,t.buttonDisableSelector)||c(n,t.formEnableSelector)?r(n):c(n,t.formSubmitSelector)?o(n):void 0},t.disableElement=function(r){var o;return o=r instanceof Event?r.target:r,c(o,t.linkDisableSelector)?a(o):c(o,t.buttonDisableSelector)||c(o,t.formDisableSelector)?e(o):c(o,t.formSubmitSelector)?n(o):void 0},a=function(t){var e;return e=t.getAttribute("data-disable-with"),null!=e&&(s(t,"ujs:enable-with",t.innerHTML),t.innerHTML=e),t.addEventListener("click",d),s(t,"ujs:disabled",!0)},i=function(t){var e;return e=u(t,"ujs:enable-with"),null!=e&&(t.innerHTML=e,s(t,"ujs:enable-with",null)),t.removeEventListener("click",d),s(t,"ujs:disabled",null)},n=function(n){return l(n,t.formDisableSelector).forEach(e)},e=function(t){var e;return e=t.getAttribute("data-disable-with"),null!=e&&(c(t,"button")?(s(t,"ujs:enable-with",t.innerHTML),t.innerHTML=e):(s(t,"ujs:enable-with",t.value),t.value=e)),t.disabled=!0,s(t,"ujs:disabled",!0)},o=function(e){return l(e,t.formEnableSelector).forEach(r)},r=function(t){var e;return e=u(t,"ujs:enable-with"),null!=e&&(c(t,"button")?t.innerHTML=e:t.value=e,s(t,"ujs:enable-with",null)),t.disabled=!1,s(t,"ujs:disabled",null)}}.call(this),function(){var e;e=t.stopEverything,t.handleMethod=function(n){var a,r,o,i,l,u,c;if(u=this,c=u.getAttribute("data-method"))return l=t.href(u),r=t.csrfToken(),a=t.csrfParam(),o=document.createElement("form"),i="<input name='_method' value='"+c+"' type='hidden' />",null==a||null==r||t.isCrossDomain(l)||(i+="<input name='"+a+"' value='"+r+"' type='hidden' />"),i+='<input type="submit" />',o.method="post",o.action=l,o.target=u.target,o.innerHTML=i,o.style.display="none",document.body.appendChild(o),o.querySelector('[type="submit"]').click(),e(n)}}.call(this),function(){var e,n,a,r,o,i,l,u,c,s=[].slice;i=t.matches,a=t.getData,u=t.setData,n=t.fire,c=t.stopEverything,e=t.ajax,r=t.isCrossDomain,l=t.serializeElement,o=function(t){var e;return null!=(e=t.getAttribute("data-remote"))&&"false"!==e},t.handleRemote=function(d){var m,f,p,b,h,v,S;return b=this,!o(b)||(n(b,"ajax:before")?(S=b.getAttribute("data-with-credentials"),p=b.getAttribute("data-type")||"script",i(b,t.formSubmitSelector)?(m=a(b,"ujs:submit-button"),h=a(b,"ujs:submit-button-formmethod")||b.method,v=a(b,"ujs:submit-button-formaction")||b.getAttribute("action")||location.href,"GET"===h.toUpperCase()&&(v=v.replace(/\?.*$/,"")),"multipart/form-data"===b.enctype?(f=new FormData(b),null!=m&&f.append(m.name,m.value)):f=l(b,m),u(b,"ujs:submit-button",null),u(b,"ujs:submit-button-formmethod",null),u(b,"ujs:submit-button-formaction",null)):i(b,t.buttonClickSelector)||i(b,t.inputChangeSelector)?(h=b.getAttribute("data-method"),v=b.getAttribute("data-url"),f=l(b,b.getAttribute("data-params"))):(h=b.getAttribute("data-method"),v=t.href(b),f=b.getAttribute("data-params")),e({type:h||"GET",url:v,data:f,dataType:p,beforeSend:function(t,e){return n(b,"ajax:beforeSend",[t,e])?n(b,"ajax:send",[t]):(n(b,"ajax:stopped"),t.abort())},success:function(){var t;return t=1<=arguments.length?s.call(arguments,0):[],n(b,"ajax:success",t)},error:function(){var t;return t=1<=arguments.length?s.call(arguments,0):[],n(b,"ajax:error",t)},complete:function(){var t;return t=1<=arguments.length?s.call(arguments,0):[],n(b,"ajax:complete",t)},crossDomain:r(v),withCredentials:null!=S&&"false"!==S}),c(d)):(n(b,"ajax:stopped"),!1))},t.formSubmitButtonClick=function(){var t,e;if(t=this,e=t.form)return t.name&&u(e,"ujs:submit-button",{name:t.name,value:t.value}),u(e,"ujs:formnovalidate-button",t.formNoValidate),u(e,"ujs:submit-button-formaction",t.getAttribute("formaction")),u(e,"ujs:submit-button-formmethod",t.getAttribute("formmethod"))},t.handleMetaClick=function(t){var e,n,a;if(n=this,a=(n.getAttribute("data-method")||"GET").toUpperCase(),e=n.getAttribute("data-params"),(t.metaKey||t.ctrlKey)&&"GET"===a&&!e)return t.stopImmediatePropagation()}}.call(this),function(){var e,n,a,r,o,i,l,u,c,s,d,m,f,p;i=t.fire,a=t.delegate,u=t.getData,e=t.$,p=t.refreshCSRFTokens,n=t.CSRFProtection,o=t.enableElement,r=t.disableElement,s=t.handleDisabledElement,c=t.handleConfirm,f=t.handleRemote,l=t.formSubmitButtonClick,d=t.handleMetaClick,m=t.handleMethod,"undefined"==typeof jQuery||null===jQuery||null==jQuery.ajax||jQuery.rails||(jQuery.rails=t,jQuery.ajaxPrefilter(function(t,e,a){if(!t.crossDomain)return n(a)})),t.start=function(){if(window._rails_loaded)throw new Error("rails-ujs has already been loaded!");return window.addEventListener("pageshow",function(){return e(t.formEnableSelector).forEach(function(t){if(u(t,"ujs:disabled"))return o(t)}),e(t.linkDisableSelector).forEach(function(t){if(u(t,"ujs:disabled"))return o(t)})}),a(document,t.linkDisableSelector,"ajax:complete",o),a(document,t.linkDisableSelector,"ajax:stopped",o),a(document,t.buttonDisableSelector,"ajax:complete",o),a(document,t.buttonDisableSelector,"ajax:stopped",o),a(document,t.linkClickSelector,"click",s),a(document,t.linkClickSelector,"click",c),a(document,t.linkClickSelector,"click",d),a(document,t.linkClickSelector,"click",r),a(document,t.linkClickSelector,"click",f),a(document,t.linkClickSelector,"click",m),a(document,t.buttonClickSelector,"click",s),a(document,t.buttonClickSelector,"click",c),a(document,t.buttonClickSelector,"click",r),a(document,t.buttonClickSelector,"click",f),a(document,t.inputChangeSelector,"change",s),a(document,t.inputChangeSelector,"change",c),a(document,t.inputChangeSelector,"change",f),a(document,t.formSubmitSelector,"submit",s),a(document,t.formSubmitSelector,"submit",c),a(document,t.formSubmitSelector,"submit",f),a(document,t.formSubmitSelector,"submit",function(t){return setTimeout(function(){return r(t)},13)}),a(document,t.formSubmitSelector,"ajax:send",r),a(document,t.formSubmitSelector,"ajax:complete",o),a(document,t.formInputClickSelector,"click",s),a(document,t.formInputClickSelector,"click",c),a(document,t.formInputClickSelector,"click",l),document.addEventListener("DOMContentLoaded",p),window._rails_loaded=!0},window.Rails===t&&i(document,"rails:attachBindings")&&t.start()}.call(this)}).call(this),"object"==typeof module&&module.exports?module.exports=t:"function"==typeof define&&define.amd&&define(t)}).call(this);