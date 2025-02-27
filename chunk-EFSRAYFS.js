import{$a as s3,Aa as N1,Ba as a1,Ha as Q2,I as j,Ia as Y1,J as g,K as H1,La as e3,M as e1,Ma as t3,Na as c3,O as p,Oa as n3,P as t1,Q as h1,Qa as i3,Ra as a3,S as m1,T as A1,U as U1,Ua as p1,W as O2,Z as d1,a as f,b as C,ba as q1,ca as w1,da as P2,ea as R2,fa as G1,ga as B2,ha as c1,ia as W1,ja as $,ka as n1,la as Z2,ma as j2,na as $2,oa as U2,pa as q2,qa as G2,ra as W2,sa as U,ta as Y2,ua as K2,wa as i1,xa as X2,ya as V,za as J2}from"./chunk-OZWPQRJQ.js";var l3=null;function s1(){return l3}function f3(e){l3??=e}var E1=class{};var S=new e1(""),u3=(()=>{class e{historyGo(t){throw new Error("")}static{this.\u0275fac=function(c){return new(c||e)}}static{this.\u0275prov=g({token:e,factory:()=>t1(F4),providedIn:"platform"})}}return e})();var F4=(()=>{class e extends u3{constructor(){super(),this._doc=t1(S),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return s1().getBaseHref(this._doc)}onPopState(t){let c=s1().getGlobalEventTarget(this._doc,"window");return c.addEventListener("popstate",t,!1),()=>c.removeEventListener("popstate",t)}onHashChange(t){let c=s1().getGlobalEventTarget(this._doc,"window");return c.addEventListener("hashchange",t,!1),()=>c.removeEventListener("hashchange",t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,c,i){this._history.pushState(t,c,i)}replaceState(t,c,i){this._history.replaceState(t,c,i)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}static{this.\u0275fac=function(c){return new(c||e)}}static{this.\u0275prov=g({token:e,factory:()=>new e,providedIn:"platform"})}}return e})();function h3(e,n){if(e.length==0)return n;if(n.length==0)return e;let t=0;return e.endsWith("/")&&t++,n.startsWith("/")&&t++,t==2?e+n.substring(1):t==1?e+n:e+"/"+n}function o3(e){let n=e.match(/#|\?|$/),t=n&&n.index||e.length,c=t-(e[t-1]==="/"?1:0);return e.slice(0,c)+e.slice(t)}function q(e){return e&&e[0]!=="?"?"?"+e:e}var X1=(()=>{class e{historyGo(t){throw new Error("")}static{this.\u0275fac=function(c){return new(c||e)}}static{this.\u0275prov=g({token:e,factory:()=>t1(k4),providedIn:"root"})}}return e})(),I4=new e1(""),k4=(()=>{class e extends X1{constructor(t,c){super(),this._platformLocation=t,this._removeListenerFns=[],this._baseHref=c??this._platformLocation.getBaseHrefFromDOM()??t1(S).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return h3(this._baseHref,t)}path(t=!1){let c=this._platformLocation.pathname+q(this._platformLocation.search),i=this._platformLocation.hash;return i&&t?`${c}${i}`:c}pushState(t,c,i,a){let s=this.prepareExternalUrl(i+q(a));this._platformLocation.pushState(t,c,s)}replaceState(t,c,i,a){let s=this.prepareExternalUrl(i+q(a));this._platformLocation.replaceState(t,c,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static{this.\u0275fac=function(c){return new(c||e)(p(u3),p(I4,8))}}static{this.\u0275prov=g({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var _4=(()=>{class e{constructor(t){this._subject=new P2,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=t;let c=this._locationStrategy.getBaseHref();this._basePath=P4(o3(r3(c))),this._locationStrategy.onPopState(i=>{this._subject.emit({url:this.path(!0),pop:!0,state:i.state,type:i.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,c=""){return this.path()==this.normalize(t+q(c))}normalize(t){return e.stripTrailingSlash(O4(this._basePath,r3(t)))}prepareExternalUrl(t){return t&&t[0]!=="/"&&(t="/"+t),this._locationStrategy.prepareExternalUrl(t)}go(t,c="",i=null){this._locationStrategy.pushState(i,"",t,c),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+q(c)),i)}replaceState(t,c="",i=null){this._locationStrategy.replaceState(i,"",t,c),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+q(c)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription??=this.subscribe(c=>{this._notifyUrlChangeListeners(c.url,c.state)}),()=>{let c=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(c,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t="",c){this._urlChangeListeners.forEach(i=>i(t,c))}subscribe(t,c,i){return this._subject.subscribe({next:t,error:c,complete:i})}static{this.normalizeQueryParams=q}static{this.joinWithSlash=h3}static{this.stripTrailingSlash=o3}static{this.\u0275fac=function(c){return new(c||e)(p(X1))}}static{this.\u0275prov=g({token:e,factory:()=>T4(),providedIn:"root"})}}return e})();function T4(){return new _4(p(X1))}function O4(e,n){if(!e||!n.startsWith(e))return n;let t=n.substring(e.length);return t===""||["/",";","?","#"].includes(t[0])?t:n}function r3(e){return e.replace(/\/index.html$/,"")}function P4(e){if(new RegExp("^(https?:)?//").test(e)){let[,t]=e.split(/\/\/[^\/]+/);return t}return e}function m3(e,n){n=encodeURIComponent(n);for(let t of e.split(";")){let c=t.indexOf("="),[i,a]=c==-1?[t,""]:[t.slice(0,c),t.slice(c+1)];if(i.trim()===n)return decodeURIComponent(a)}return null}var d3="browser",R4="server";function J1(e){return e===R4}var V1=class{};var t2=class extends E1{constructor(){super(...arguments),this.supportsDOMEvents=!0}},c2=class e extends t2{static makeCurrent(){f3(new e)}onAndCancel(n,t,c){return n.addEventListener(t,c),()=>{n.removeEventListener(t,c)}}dispatchEvent(n,t){n.dispatchEvent(t)}remove(n){n.parentNode&&n.parentNode.removeChild(n)}createElement(n,t){return t=t||this.getDefaultDocument(),t.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,t){return t==="window"?window:t==="document"?n:t==="body"?n.body:null}getBaseHref(n){let t=Z4();return t==null?null:j4(t)}resetBaseElement(){z1=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return m3(document.cookie,n)}},z1=null;function Z4(){return z1=z1||document.querySelector("base"),z1?z1.getAttribute("href"):null}function j4(e){return new URL(e,document.baseURI).pathname}var $4=(()=>{class e{build(){return new XMLHttpRequest}static{this.\u0275fac=function(c){return new(c||e)}}static{this.\u0275prov=g({token:e,factory:e.\u0275fac})}}return e})(),n2=new e1(""),v3=(()=>{class e{constructor(t,c){this._zone=c,this._eventNameToPlugin=new Map,t.forEach(i=>{i.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,c,i){return this._findPluginFor(c).addEventListener(t,c,i)}getZone(){return this._zone}_findPluginFor(t){let c=this._eventNameToPlugin.get(t);if(c)return c;if(c=this._plugins.find(a=>a.supports(t)),!c)throw new j(5101,!1);return this._eventNameToPlugin.set(t,c),c}static{this.\u0275fac=function(c){return new(c||e)(p(n2),p(a1))}}static{this.\u0275prov=g({token:e,factory:e.\u0275fac})}}return e})(),F1=class{constructor(n){this._doc=n}},Q1="ng-app-id",g3=(()=>{class e{constructor(t,c,i,a={}){this.doc=t,this.appId=c,this.nonce=i,this.platformId=a,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=J1(a),this.resetHostNodes()}addStyles(t){for(let c of t)this.changeUsageCount(c,1)===1&&this.onStyleAdded(c)}removeStyles(t){for(let c of t)this.changeUsageCount(c,-1)<=0&&this.onStyleRemoved(c)}ngOnDestroy(){let t=this.styleNodesInDOM;t&&(t.forEach(c=>c.remove()),t.clear());for(let c of this.getAllStyles())this.onStyleRemoved(c);this.resetHostNodes()}addHost(t){this.hostNodes.add(t);for(let c of this.getAllStyles())this.addStyleToHost(t,c)}removeHost(t){this.hostNodes.delete(t)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(t){for(let c of this.hostNodes)this.addStyleToHost(c,t)}onStyleRemoved(t){let c=this.styleRef;c.get(t)?.elements?.forEach(i=>i.remove()),c.delete(t)}collectServerRenderedStyles(){let t=this.doc.head?.querySelectorAll(`style[${Q1}="${this.appId}"]`);if(t?.length){let c=new Map;return t.forEach(i=>{i.textContent!=null&&c.set(i.textContent,i)}),c}return null}changeUsageCount(t,c){let i=this.styleRef;if(i.has(t)){let a=i.get(t);return a.usage+=c,a.usage}return i.set(t,{usage:c,elements:[]}),c}getStyleElement(t,c){let i=this.styleNodesInDOM,a=i?.get(c);if(a?.parentNode===t)return i.delete(c),a.removeAttribute(Q1),a;{let s=this.doc.createElement("style");return this.nonce&&s.setAttribute("nonce",this.nonce),s.textContent=c,this.platformIsServer&&s.setAttribute(Q1,this.appId),t.appendChild(s),s}}addStyleToHost(t,c){let i=this.getStyleElement(t,c),a=this.styleRef,s=a.get(c)?.elements;s?s.push(i):a.set(c,{elements:[i],usage:1})}resetHostNodes(){let t=this.hostNodes;t.clear(),t.add(this.doc.head)}static{this.\u0275fac=function(c){return new(c||e)(p(S),p(G1),p(W1,8),p(c1))}}static{this.\u0275prov=g({token:e,factory:e.\u0275fac})}}return e})(),e2={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},a2=/%COMP%/g,M3="%COMP%",U4=`_nghost-${M3}`,q4=`_ngcontent-${M3}`,G4=!0,W4=new e1("",{providedIn:"root",factory:()=>G4});function Y4(e){return q4.replace(a2,e)}function K4(e){return U4.replace(a2,e)}function b3(e,n){return n.map(t=>t.replace(a2,e))}var p3=(()=>{class e{constructor(t,c,i,a,s,o,r,l=null){this.eventManager=t,this.sharedStylesHost=c,this.appId=i,this.removeStylesOnCompDestroy=a,this.doc=s,this.platformId=o,this.ngZone=r,this.nonce=l,this.rendererByCompId=new Map,this.platformIsServer=J1(o),this.defaultRenderer=new C1(t,s,r,this.platformIsServer)}createRenderer(t,c){if(!t||!c)return this.defaultRenderer;this.platformIsServer&&c.encapsulation===h1.ShadowDom&&(c=C(f({},c),{encapsulation:h1.Emulated}));let i=this.getOrCreateRenderer(t,c);return i instanceof I1?i.applyToHost(t):i instanceof v1&&i.applyStyles(),i}getOrCreateRenderer(t,c){let i=this.rendererByCompId,a=i.get(c.id);if(!a){let s=this.doc,o=this.ngZone,r=this.eventManager,l=this.sharedStylesHost,h=this.removeStylesOnCompDestroy,m=this.platformIsServer;switch(c.encapsulation){case h1.Emulated:a=new I1(r,l,c,this.appId,h,s,o,m);break;case h1.ShadowDom:return new i2(r,l,t,c,s,o,this.nonce,m);default:a=new v1(r,l,c,h,s,o,m);break}i.set(c.id,a)}return a}ngOnDestroy(){this.rendererByCompId.clear()}static{this.\u0275fac=function(c){return new(c||e)(p(v3),p(g3),p(G1),p(W4),p(S),p(c1),p(a1),p(W1))}}static{this.\u0275prov=g({token:e,factory:e.\u0275fac})}}return e})(),C1=class{constructor(n,t,c,i){this.eventManager=n,this.doc=t,this.ngZone=c,this.platformIsServer=i,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(n,t){return t?this.doc.createElementNS(e2[t]||t,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,t){(z3(n)?n.content:n).appendChild(t)}insertBefore(n,t,c){n&&(z3(n)?n.content:n).insertBefore(t,c)}removeChild(n,t){n&&n.removeChild(t)}selectRootElement(n,t){let c=typeof n=="string"?this.doc.querySelector(n):n;if(!c)throw new j(-5104,!1);return t||(c.textContent=""),c}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,t,c,i){if(i){t=i+":"+t;let a=e2[i];a?n.setAttributeNS(a,t,c):n.setAttribute(t,c)}else n.setAttribute(t,c)}removeAttribute(n,t,c){if(c){let i=e2[c];i?n.removeAttributeNS(i,t):n.removeAttribute(`${c}:${t}`)}else n.removeAttribute(t)}addClass(n,t){n.classList.add(t)}removeClass(n,t){n.classList.remove(t)}setStyle(n,t,c,i){i&(i1.DashCase|i1.Important)?n.style.setProperty(t,c,i&i1.Important?"important":""):n.style[t]=c}removeStyle(n,t,c){c&i1.DashCase?n.style.removeProperty(t):n.style[t]=""}setProperty(n,t,c){n!=null&&(n[t]=c)}setValue(n,t){n.nodeValue=t}listen(n,t,c){if(typeof n=="string"&&(n=s1().getGlobalEventTarget(this.doc,n),!n))throw new Error(`Unsupported event target ${n} for event ${t}`);return this.eventManager.addEventListener(n,t,this.decoratePreventDefault(c))}decoratePreventDefault(n){return t=>{if(t==="__ngUnwrap__")return n;(this.platformIsServer?this.ngZone.runGuarded(()=>n(t)):n(t))===!1&&t.preventDefault()}}};function z3(e){return e.tagName==="TEMPLATE"&&e.content!==void 0}var i2=class extends C1{constructor(n,t,c,i,a,s,o,r){super(n,a,s,r),this.sharedStylesHost=t,this.hostEl=c,this.shadowRoot=c.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let l=b3(i.id,i.styles);for(let h of l){let m=document.createElement("style");o&&m.setAttribute("nonce",o),m.textContent=h,this.shadowRoot.appendChild(m)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,t){return super.appendChild(this.nodeOrShadowRoot(n),t)}insertBefore(n,t,c){return super.insertBefore(this.nodeOrShadowRoot(n),t,c)}removeChild(n,t){return super.removeChild(this.nodeOrShadowRoot(n),t)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},v1=class extends C1{constructor(n,t,c,i,a,s,o,r){super(n,a,s,o),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=i,this.styles=r?b3(r,c.styles):c.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},I1=class extends v1{constructor(n,t,c,i,a,s,o,r){let l=i+"-"+c.id;super(n,t,c,a,s,o,r,l),this.contentAttr=Y4(l),this.hostAttr=K4(l)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,t){let c=super.createElement(n,t);return super.setAttribute(c,this.contentAttr,""),c}},X4=(()=>{class e extends F1{constructor(t){super(t)}supports(t){return!0}addEventListener(t,c,i){return t.addEventListener(c,i,!1),()=>this.removeEventListener(t,c,i)}removeEventListener(t,c,i){return t.removeEventListener(c,i)}static{this.\u0275fac=function(c){return new(c||e)(p(S))}}static{this.\u0275prov=g({token:e,factory:e.\u0275fac})}}return e})(),C3=["alt","control","meta","shift"],J4={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Q4={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey},e5=(()=>{class e extends F1{constructor(t){super(t)}supports(t){return e.parseEventName(t)!=null}addEventListener(t,c,i){let a=e.parseEventName(c),s=e.eventCallback(a.fullKey,i,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>s1().onAndCancel(t,a.domEventName,s))}static parseEventName(t){let c=t.toLowerCase().split("."),i=c.shift();if(c.length===0||!(i==="keydown"||i==="keyup"))return null;let a=e._normalizeKey(c.pop()),s="",o=c.indexOf("code");if(o>-1&&(c.splice(o,1),s="code."),C3.forEach(l=>{let h=c.indexOf(l);h>-1&&(c.splice(h,1),s+=l+".")}),s+=a,c.length!=0||a.length===0)return null;let r={};return r.domEventName=i,r.fullKey=s,r}static matchEventFullKeyCode(t,c){let i=J4[t.key]||t.key,a="";return c.indexOf("code.")>-1&&(i=t.code,a="code."),i==null||!i?!1:(i=i.toLowerCase(),i===" "?i="space":i==="."&&(i="dot"),C3.forEach(s=>{if(s!==i){let o=Q4[s];o(t)&&(a+=s+".")}}),a+=i,a===c)}static eventCallback(t,c,i){return a=>{e.matchEventFullKeyCode(a,t)&&i.runGuarded(()=>c(a))}}static _normalizeKey(t){return t==="esc"?"escape":t}static{this.\u0275fac=function(c){return new(c||e)(p(S))}}static{this.\u0275prov=g({token:e,factory:e.\u0275fac})}}return e})();function C7(e,n){return s3(f({rootComponent:e},t5(n)))}function t5(e){return{appProviders:[...s5,...e?.providers??[]],platformProviders:a5}}function c5(){c2.makeCurrent()}function n5(){return new q1}function i5(){return R2(document),document}var a5=[{provide:c1,useValue:d3},{provide:B2,useValue:c5,multi:!0},{provide:S,useFactory:i5,deps:[]}];var s5=[{provide:O2,useValue:"root"},{provide:q1,useFactory:n5,deps:[]},{provide:n2,useClass:X4,multi:!0,deps:[S,a1,c1]},{provide:n2,useClass:e5,multi:!0,deps:[S]},p3,g3,v3,{provide:J2,useExisting:p3},{provide:V1,useClass:$4,deps:[]},[]];var v7=(()=>{class e{constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static{this.\u0275fac=function(c){return new(c||e)(p(S))}}static{this.\u0275prov=g({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var s2=(()=>{class e{static{this.\u0275fac=function(c){return new(c||e)}}static{this.\u0275prov=g({token:e,factory:function(c){let i=null;return c?i=new(c||e):i=p(o5),i},providedIn:"root"})}}return e})(),o5=(()=>{class e extends s2{constructor(t){super(),this._doc=t}sanitize(t,c){if(c==null)return null;switch(t){case U.NONE:return c;case U.HTML:return n1(c,"HTML")?$(c):W2(this._doc,String(c)).toString();case U.STYLE:return n1(c,"Style")?$(c):c;case U.SCRIPT:if(n1(c,"Script"))return $(c);throw new j(5200,!1);case U.URL:return n1(c,"URL")?$(c):G2(String(c));case U.RESOURCE_URL:if(n1(c,"ResourceURL"))return $(c);throw new j(5201,!1);default:throw new j(5202,!1)}}bypassSecurityTrustHtml(t){return Z2(t)}bypassSecurityTrustStyle(t){return j2(t)}bypassSecurityTrustScript(t){return $2(t)}bypassSecurityTrustUrl(t){return U2(t)}bypassSecurityTrustResourceUrl(t){return q2(t)}static{this.\u0275fac=function(c){return new(c||e)(p(S))}}static{this.\u0275prov=g({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var D3=()=>{},H2={},q3={},G3=null,W3={mark:D3,measure:D3};try{typeof window<"u"&&(H2=window),typeof document<"u"&&(q3=document),typeof MutationObserver<"u"&&(G3=MutationObserver),typeof performance<"u"&&(W3=performance)}catch{}var{userAgent:y3=""}=H2.navigator||{},P=H2,z=q3,L3=G3,k1=W3,M7=!!P.document,k=!!z.documentElement&&!!z.head&&typeof z.addEventListener=="function"&&typeof z.createElement=="function",Y3=~y3.indexOf("MSIE")||~y3.indexOf("Trident/"),v="classic",K3="duotone",D="sharp",y="sharp-duotone",l5=[v,K3,D,y],f5={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},S3={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},u5=["kit"],h5=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,m5=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,d5={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},p5={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},z5={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},C5={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},v5={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},g5={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},X3={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},M5=["solid","regular","light","thin","duotone","brands"],J3=[1,2,3,4,5,6,7,8,9,10],b5=J3.concat([11,12,13,14,15,16,17,18,19,20]),g1={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},D5=[...Object.keys(C5),...M5,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",g1.GROUP,g1.SWAP_OPACITY,g1.PRIMARY,g1.SECONDARY].concat(J3.map(e=>"".concat(e,"x"))).concat(b5.map(e=>"w-".concat(e))),y5={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},L5={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},S5={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},x3={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},F="___FONT_AWESOME___",h2=16,Q3="fa",e4="svg-inline--fa",K="data-fa-i2svg",m2="data-fa-pseudo-element",x5="data-fa-pseudo-element-pending",A2="data-prefix",w2="data-icon",H3="fontawesome-i2svg",H5="async",A5=["HTML","HEAD","STYLE","SCRIPT"],t4=(()=>{try{return!0}catch{return!1}})(),c4=[v,D,y];function S1(e){return new Proxy(e,{get(n,t){return t in n?n[t]:n[v]}})}var n4=f({},X3);n4[v]=f(f(f({},X3[v]),S3.kit),S3["kit-duotone"]);var W=S1(n4),d2=f({},g5);d2[v]=f(f(f({},d2[v]),x3.kit),x3["kit-duotone"]);var y1=S1(d2),p2=f({},v5);p2[v]=f(f({},p2[v]),S5.kit);var Y=S1(p2),z2=f({},z5);z2[v]=f(f({},z2[v]),L5.kit);var w5=S1(z2),N5=h5,i4="fa-layers-text",E5=m5,V5=f({},f5),b7=S1(V5),F5=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],o2=g1,l1=new Set;Object.keys(y1[v]).map(l1.add.bind(l1));Object.keys(y1[D]).map(l1.add.bind(l1));Object.keys(y1[y]).map(l1.add.bind(l1));var I5=[...u5,...D5],b1=P.FontAwesomeConfig||{};function k5(e){var n=z.querySelector("script["+e+"]");if(n)return n.getAttribute(e)}function _5(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}z&&typeof z.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(n=>{let[t,c]=n,i=_5(k5(t));i!=null&&(b1[c]=i)});var a4={styleDefault:"solid",familyDefault:"classic",cssPrefix:Q3,replacementClass:e4,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};b1.familyPrefix&&(b1.cssPrefix=b1.familyPrefix);var f1=f(f({},a4),b1);f1.autoReplaceSvg||(f1.observeMutations=!1);var u={};Object.keys(a4).forEach(e=>{Object.defineProperty(u,e,{enumerable:!0,set:function(n){f1[e]=n,D1.forEach(t=>t(u))},get:function(){return f1[e]}})});Object.defineProperty(u,"familyPrefix",{enumerable:!0,set:function(e){f1.cssPrefix=e,D1.forEach(n=>n(u))},get:function(){return f1.cssPrefix}});P.FontAwesomeConfig=u;var D1=[];function T5(e){return D1.push(e),()=>{D1.splice(D1.indexOf(e),1)}}var T=h2,A={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function O5(e){if(!e||!k)return;let n=z.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=e;let t=z.head.childNodes,c=null;for(let i=t.length-1;i>-1;i--){let a=t[i],s=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(c=a)}return z.head.insertBefore(n,c),e}var P5="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function L1(){let e=12,n="";for(;e-- >0;)n+=P5[Math.random()*62|0];return n}function u1(e){let n=[];for(let t=(e||[]).length>>>0;t--;)n[t]=e[t];return n}function N2(e){return e.classList?u1(e.classList):(e.getAttribute("class")||"").split(" ").filter(n=>n)}function s4(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function R5(e){return Object.keys(e||{}).reduce((n,t)=>n+"".concat(t,'="').concat(s4(e[t]),'" '),"").trim()}function R1(e){return Object.keys(e||{}).reduce((n,t)=>n+"".concat(t,": ").concat(e[t].trim(),";"),"")}function E2(e){return e.size!==A.size||e.x!==A.x||e.y!==A.y||e.rotate!==A.rotate||e.flipX||e.flipY}function B5(e){let{transform:n,containerWidth:t,iconWidth:c}=e,i={transform:"translate(".concat(t/2," 256)")},a="translate(".concat(n.x*32,", ").concat(n.y*32,") "),s="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),o="rotate(".concat(n.rotate," 0 0)"),r={transform:"".concat(a," ").concat(s," ").concat(o)},l={transform:"translate(".concat(c/2*-1," -256)")};return{outer:i,inner:r,path:l}}function Z5(e){let{transform:n,width:t=h2,height:c=h2,startCentered:i=!1}=e,a="";return i&&Y3?a+="translate(".concat(n.x/T-t/2,"em, ").concat(n.y/T-c/2,"em) "):i?a+="translate(calc(-50% + ".concat(n.x/T,"em), calc(-50% + ").concat(n.y/T,"em)) "):a+="translate(".concat(n.x/T,"em, ").concat(n.y/T,"em) "),a+="scale(".concat(n.size/T*(n.flipX?-1:1),", ").concat(n.size/T*(n.flipY?-1:1),") "),a+="rotate(".concat(n.rotate,"deg) "),a}var j5=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function o4(){let e=Q3,n=e4,t=u.cssPrefix,c=u.replacementClass,i=j5;if(t!==e||c!==n){let a=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),o=new RegExp("\\.".concat(n),"g");i=i.replace(a,".".concat(t,"-")).replace(s,"--".concat(t,"-")).replace(o,".".concat(c))}return i}var A3=!1;function r2(){u.autoAddCss&&!A3&&(O5(o4()),A3=!0)}var $5={mixout(){return{dom:{css:o4,insertCss:r2}}},hooks(){return{beforeDOMElementCreation(){r2()},beforeI2svg(){r2()}}}},I=P||{};I[F]||(I[F]={});I[F].styles||(I[F].styles={});I[F].hooks||(I[F].hooks={});I[F].shims||(I[F].shims=[]);var w=I[F],r4=[],l4=function(){z.removeEventListener("DOMContentLoaded",l4),O1=1,r4.map(e=>e())},O1=!1;k&&(O1=(z.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(z.readyState),O1||z.addEventListener("DOMContentLoaded",l4));function U5(e){k&&(O1?setTimeout(e,0):r4.push(e))}function x1(e){let{tag:n,attributes:t={},children:c=[]}=e;return typeof e=="string"?s4(e):"<".concat(n," ").concat(R5(t),">").concat(c.map(x1).join(""),"</").concat(n,">")}function w3(e,n,t){if(e&&e[n]&&e[n][t])return{prefix:n,iconName:t,icon:e[n][t]}}var q5=function(n,t){return function(c,i,a,s){return n.call(t,c,i,a,s)}},l2=function(n,t,c,i){var a=Object.keys(n),s=a.length,o=i!==void 0?q5(t,i):t,r,l,h;for(c===void 0?(r=1,h=n[a[0]]):(r=0,h=c);r<s;r++)l=a[r],h=o(h,n[l],l,n);return h};function G5(e){let n=[],t=0,c=e.length;for(;t<c;){let i=e.charCodeAt(t++);if(i>=55296&&i<=56319&&t<c){let a=e.charCodeAt(t++);(a&64512)==56320?n.push(((i&1023)<<10)+(a&1023)+65536):(n.push(i),t--)}else n.push(i)}return n}function C2(e){let n=G5(e);return n.length===1?n[0].toString(16):null}function W5(e,n){let t=e.length,c=e.charCodeAt(n),i;return c>=55296&&c<=56319&&t>n+1&&(i=e.charCodeAt(n+1),i>=56320&&i<=57343)?(c-55296)*1024+i-56320+65536:c}function N3(e){return Object.keys(e).reduce((n,t)=>{let c=e[t];return!!c.icon?n[c.iconName]=c.icon:n[t]=c,n},{})}function v2(e,n){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:c=!1}=t,i=N3(n);typeof w.hooks.addPack=="function"&&!c?w.hooks.addPack(e,N3(n)):w.styles[e]=f(f({},w.styles[e]||{}),i),e==="fas"&&v2("fa",n)}var{styles:G,shims:Y5}=w,K5={[v]:Object.values(Y[v]),[D]:Object.values(Y[D]),[y]:Object.values(Y[y])},V2=null,f4={},u4={},h4={},m4={},d4={},X5={[v]:Object.keys(W[v]),[D]:Object.keys(W[D]),[y]:Object.keys(W[y])};function J5(e){return~I5.indexOf(e)}function Q5(e,n){let t=n.split("-"),c=t[0],i=t.slice(1).join("-");return c===e&&i!==""&&!J5(i)?i:null}var p4=()=>{let e=c=>l2(G,(i,a,s)=>(i[s]=l2(a,c,{}),i),{});f4=e((c,i,a)=>(i[3]&&(c[i[3]]=a),i[2]&&i[2].filter(o=>typeof o=="number").forEach(o=>{c[o.toString(16)]=a}),c)),u4=e((c,i,a)=>(c[a]=a,i[2]&&i[2].filter(o=>typeof o=="string").forEach(o=>{c[o]=a}),c)),d4=e((c,i,a)=>{let s=i[2];return c[a]=a,s.forEach(o=>{c[o]=a}),c});let n="far"in G||u.autoFetchSvg,t=l2(Y5,(c,i)=>{let a=i[0],s=i[1],o=i[2];return s==="far"&&!n&&(s="fas"),typeof a=="string"&&(c.names[a]={prefix:s,iconName:o}),typeof a=="number"&&(c.unicodes[a.toString(16)]={prefix:s,iconName:o}),c},{names:{},unicodes:{}});h4=t.names,m4=t.unicodes,V2=B1(u.styleDefault,{family:u.familyDefault})};T5(e=>{V2=B1(e.styleDefault,{family:u.familyDefault})});p4();function F2(e,n){return(f4[e]||{})[n]}function e6(e,n){return(u4[e]||{})[n]}function O(e,n){return(d4[e]||{})[n]}function z4(e){return h4[e]||{prefix:null,iconName:null}}function t6(e){let n=m4[e],t=F2("fas",e);return n||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function R(){return V2}var I2=()=>({prefix:null,iconName:null,rest:[]});function B1(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:t=v}=n,c=W[t][e],i=y1[t][e]||y1[t][c],a=e in w.styles?e:null;return i||a||null}var c6={[v]:Object.keys(Y[v]),[D]:Object.keys(Y[D]),[y]:Object.keys(Y[y])};function Z1(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:t=!1}=n,c={[v]:"".concat(u.cssPrefix,"-").concat(v),[D]:"".concat(u.cssPrefix,"-").concat(D),[y]:"".concat(u.cssPrefix,"-").concat(y)},i=null,a=v,s=l5.filter(r=>r!==K3);s.forEach(r=>{(e.includes(c[r])||e.some(l=>c6[r].includes(l)))&&(a=r)});let o=e.reduce((r,l)=>{let h=Q5(u.cssPrefix,l);if(G[l]?(l=K5[a].includes(l)?w5[a][l]:l,i=l,r.prefix=l):X5[a].indexOf(l)>-1?(i=l,r.prefix=B1(l,{family:a})):h?r.iconName=h:l!==u.replacementClass&&!s.some(m=>l===c[m])&&r.rest.push(l),!t&&r.prefix&&r.iconName){let m=i==="fa"?z4(r.iconName):{},d=O(r.prefix,r.iconName);m.prefix&&(i=null),r.iconName=m.iconName||d||r.iconName,r.prefix=m.prefix||r.prefix,r.prefix==="far"&&!G.far&&G.fas&&!u.autoFetchSvg&&(r.prefix="fas")}return r},I2());return(e.includes("fa-brands")||e.includes("fab"))&&(o.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(o.prefix="fad"),!o.prefix&&a===D&&(G.fass||u.autoFetchSvg)&&(o.prefix="fass",o.iconName=O(o.prefix,o.iconName)||o.iconName),!o.prefix&&a===y&&(G.fasds||u.autoFetchSvg)&&(o.prefix="fasds",o.iconName=O(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||i==="fa")&&(o.prefix=R()||"fas"),o}var g2=class{constructor(){this.definitions={}}add(){for(var n=arguments.length,t=new Array(n),c=0;c<n;c++)t[c]=arguments[c];let i=t.reduce(this._pullDefinitions,{});Object.keys(i).forEach(a=>{this.definitions[a]=f(f({},this.definitions[a]||{}),i[a]),v2(a,i[a]);let s=Y[v][a];s&&v2(s,i[a]),p4()})}reset(){this.definitions={}}_pullDefinitions(n,t){let c=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(c).map(i=>{let{prefix:a,iconName:s,icon:o}=c[i],r=o[2];n[a]||(n[a]={}),r.length>0&&r.forEach(l=>{typeof l=="string"&&(n[a][l]=o)}),n[a][s]=o}),n}},E3=[],o1={},r1={},n6=Object.keys(r1);function i6(e,n){let{mixoutsTo:t}=n;return E3=e,o1={},Object.keys(r1).forEach(c=>{n6.indexOf(c)===-1&&delete r1[c]}),E3.forEach(c=>{let i=c.mixout?c.mixout():{};if(Object.keys(i).forEach(a=>{typeof i[a]=="function"&&(t[a]=i[a]),typeof i[a]=="object"&&Object.keys(i[a]).forEach(s=>{t[a]||(t[a]={}),t[a][s]=i[a][s]})}),c.hooks){let a=c.hooks();Object.keys(a).forEach(s=>{o1[s]||(o1[s]=[]),o1[s].push(a[s])})}c.provides&&c.provides(r1)}),t}function M2(e,n){for(var t=arguments.length,c=new Array(t>2?t-2:0),i=2;i<t;i++)c[i-2]=arguments[i];return(o1[e]||[]).forEach(s=>{n=s.apply(null,[n,...c])}),n}function X(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),c=1;c<n;c++)t[c-1]=arguments[c];(o1[e]||[]).forEach(a=>{a.apply(null,t)})}function B(){let e=arguments[0],n=Array.prototype.slice.call(arguments,1);return r1[e]?r1[e].apply(null,n):void 0}function b2(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:n}=e,t=e.prefix||R();if(n)return n=O(t,n)||n,w3(C4.definitions,t,n)||w3(w.styles,t,n)}var C4=new g2,a6=()=>{u.autoReplaceSvg=!1,u.observeMutations=!1,X("noAuto")},s6={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return k?(X("beforeI2svg",e),B("pseudoElements2svg",e),B("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:n}=e;u.autoReplaceSvg===!1&&(u.autoReplaceSvg=!0),u.observeMutations=!0,U5(()=>{r6({autoReplaceSvgRoot:n}),X("watch",e)})}},o6={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:O(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){let n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],t=B1(e[0]);return{prefix:t,iconName:O(t,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(u.cssPrefix,"-"))>-1||e.match(N5))){let n=Z1(e.split(" "),{skipLookups:!0});return{prefix:n.prefix||R(),iconName:O(n.prefix,n.iconName)||n.iconName}}if(typeof e=="string"){let n=R();return{prefix:n,iconName:O(n,e)||e}}}},L={noAuto:a6,config:u,dom:s6,parse:o6,library:C4,findIconDefinition:b2,toHtml:x1},r6=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:n=z}=e;(Object.keys(w.styles).length>0||u.autoFetchSvg)&&k&&u.autoReplaceSvg&&L.dom.i2svg({node:n})};function j1(e,n){return Object.defineProperty(e,"abstract",{get:n}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(t=>x1(t))}}),Object.defineProperty(e,"node",{get:function(){if(!k)return;let t=z.createElement("div");return t.innerHTML=e.html,t.children}}),e}function l6(e){let{children:n,main:t,mask:c,attributes:i,styles:a,transform:s}=e;if(E2(s)&&t.found&&!c.found){let{width:o,height:r}=t,l={x:o/r/2,y:.5};i.style=R1(C(f({},a),{"transform-origin":"".concat(l.x+s.x/16,"em ").concat(l.y+s.y/16,"em")}))}return[{tag:"svg",attributes:i,children:n}]}function f6(e){let{prefix:n,iconName:t,children:c,attributes:i,symbol:a}=e,s=a===!0?"".concat(n,"-").concat(u.cssPrefix,"-").concat(t):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:C(f({},i),{id:s}),children:c}]}]}function k2(e){let{icons:{main:n,mask:t},prefix:c,iconName:i,transform:a,symbol:s,title:o,maskId:r,titleId:l,extra:h,watchable:m=!1}=e,{width:d,height:M}=t.found?t:n,_=c==="fak",Z=[u.replacementClass,i?"".concat(u.cssPrefix,"-").concat(i):""].filter(Q=>h.classes.indexOf(Q)===-1).filter(Q=>Q!==""||!!Q).concat(h.classes).join(" "),x={children:[],attributes:C(f({},h.attributes),{"data-prefix":c,"data-icon":i,class:Z,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(d," ").concat(M)})},E=_&&!~h.classes.indexOf("fa-fw")?{width:"".concat(d/M*16*.0625,"em")}:{};m&&(x.attributes[K]=""),o&&(x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(l||L1())},children:[o]}),delete x.attributes.title);let b=C(f({},x),{prefix:c,iconName:i,main:n,mask:t,maskId:r,transform:a,symbol:s,styles:f(f({},E),h.styles)}),{children:H,attributes:J}=t.found&&n.found?B("generateAbstractMask",b)||{children:[],attributes:{}}:B("generateAbstractIcon",b)||{children:[],attributes:{}};return b.children=H,b.attributes=J,s?f6(b):l6(b)}function V3(e){let{content:n,width:t,height:c,transform:i,title:a,extra:s,watchable:o=!1}=e,r=C(f(f({},s.attributes),a?{title:a}:{}),{class:s.classes.join(" ")});o&&(r[K]="");let l=f({},s.styles);E2(i)&&(l.transform=Z5({transform:i,startCentered:!0,width:t,height:c}),l["-webkit-transform"]=l.transform);let h=R1(l);h.length>0&&(r.style=h);let m=[];return m.push({tag:"span",attributes:r,children:[n]}),a&&m.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),m}function u6(e){let{content:n,title:t,extra:c}=e,i=C(f(f({},c.attributes),t?{title:t}:{}),{class:c.classes.join(" ")}),a=R1(c.styles);a.length>0&&(i.style=a);let s=[];return s.push({tag:"span",attributes:i,children:[n]}),t&&s.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),s}var{styles:f2}=w;function D2(e){let n=e[0],t=e[1],[c]=e.slice(4),i=null;return Array.isArray(c)?i={tag:"g",attributes:{class:"".concat(u.cssPrefix,"-").concat(o2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(u.cssPrefix,"-").concat(o2.SECONDARY),fill:"currentColor",d:c[0]}},{tag:"path",attributes:{class:"".concat(u.cssPrefix,"-").concat(o2.PRIMARY),fill:"currentColor",d:c[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:c}},{found:!0,width:n,height:t,icon:i}}var h6={found:!1,width:512,height:512};function m6(e,n){!t4&&!u.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(n,'" is missing.'))}function y2(e,n){let t=n;return n==="fa"&&u.styleDefault!==null&&(n=R()),new Promise((c,i)=>{if(t==="fa"){let a=z4(e)||{};e=a.iconName||e,n=a.prefix||n}if(e&&n&&f2[n]&&f2[n][e]){let a=f2[n][e];return c(D2(a))}m6(e,n),c(C(f({},h6),{icon:u.showMissingIcons&&e?B("missingIconAbstract")||{}:{}}))})}var F3=()=>{},L2=u.measurePerformance&&k1&&k1.mark&&k1.measure?k1:{mark:F3,measure:F3},M1='FA "6.6.0"',d6=e=>(L2.mark("".concat(M1," ").concat(e," begins")),()=>v4(e)),v4=e=>{L2.mark("".concat(M1," ").concat(e," ends")),L2.measure("".concat(M1," ").concat(e),"".concat(M1," ").concat(e," begins"),"".concat(M1," ").concat(e," ends"))},_2={begin:d6,end:v4},_1=()=>{};function I3(e){return typeof(e.getAttribute?e.getAttribute(K):null)=="string"}function p6(e){let n=e.getAttribute?e.getAttribute(A2):null,t=e.getAttribute?e.getAttribute(w2):null;return n&&t}function z6(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(u.replacementClass)}function C6(){return u.autoReplaceSvg===!0?T1.replace:T1[u.autoReplaceSvg]||T1.replace}function v6(e){return z.createElementNS("http://www.w3.org/2000/svg",e)}function g6(e){return z.createElement(e)}function g4(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:t=e.tag==="svg"?v6:g6}=n;if(typeof e=="string")return z.createTextNode(e);let c=t(e.tag);return Object.keys(e.attributes||[]).forEach(function(a){c.setAttribute(a,e.attributes[a])}),(e.children||[]).forEach(function(a){c.appendChild(g4(a,{ceFn:t}))}),c}function M6(e){let n=" ".concat(e.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var T1={replace:function(e){let n=e[0];if(n.parentNode)if(e[1].forEach(t=>{n.parentNode.insertBefore(g4(t),n)}),n.getAttribute(K)===null&&u.keepOriginalSource){let t=z.createComment(M6(n));n.parentNode.replaceChild(t,n)}else n.remove()},nest:function(e){let n=e[0],t=e[1];if(~N2(n).indexOf(u.replacementClass))return T1.replace(e);let c=new RegExp("".concat(u.cssPrefix,"-.*"));if(delete t[0].attributes.id,t[0].attributes.class){let a=t[0].attributes.class.split(" ").reduce((s,o)=>(o===u.replacementClass||o.match(c)?s.toSvg.push(o):s.toNode.push(o),s),{toNode:[],toSvg:[]});t[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}let i=t.map(a=>x1(a)).join(`
`);n.setAttribute(K,""),n.innerHTML=i}};function k3(e){e()}function M4(e,n){let t=typeof n=="function"?n:_1;if(e.length===0)t();else{let c=k3;u.mutateApproach===H5&&(c=P.requestAnimationFrame||k3),c(()=>{let i=C6(),a=_2.begin("mutate");e.map(i),a(),t()})}}var T2=!1;function b4(){T2=!0}function S2(){T2=!1}var P1=null;function _3(e){if(!L3||!u.observeMutations)return;let{treeCallback:n=_1,nodeCallback:t=_1,pseudoElementsCallback:c=_1,observeMutationsRoot:i=z}=e;P1=new L3(a=>{if(T2)return;let s=R();u1(a).forEach(o=>{if(o.type==="childList"&&o.addedNodes.length>0&&!I3(o.addedNodes[0])&&(u.searchPseudoElements&&c(o.target),n(o.target)),o.type==="attributes"&&o.target.parentNode&&u.searchPseudoElements&&c(o.target.parentNode),o.type==="attributes"&&I3(o.target)&&~F5.indexOf(o.attributeName))if(o.attributeName==="class"&&p6(o.target)){let{prefix:r,iconName:l}=Z1(N2(o.target));o.target.setAttribute(A2,r||s),l&&o.target.setAttribute(w2,l)}else z6(o.target)&&t(o.target)})}),k&&P1.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function b6(){P1&&P1.disconnect()}function D6(e){let n=e.getAttribute("style"),t=[];return n&&(t=n.split(";").reduce((c,i)=>{let a=i.split(":"),s=a[0],o=a.slice(1);return s&&o.length>0&&(c[s]=o.join(":").trim()),c},{})),t}function y6(e){let n=e.getAttribute("data-prefix"),t=e.getAttribute("data-icon"),c=e.innerText!==void 0?e.innerText.trim():"",i=Z1(N2(e));return i.prefix||(i.prefix=R()),n&&t&&(i.prefix=n,i.iconName=t),i.iconName&&i.prefix||(i.prefix&&c.length>0&&(i.iconName=e6(i.prefix,e.innerText)||F2(i.prefix,C2(e.innerText))),!i.iconName&&u.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function L6(e){let n=u1(e.attributes).reduce((i,a)=>(i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i),{}),t=e.getAttribute("title"),c=e.getAttribute("data-fa-title-id");return u.autoA11y&&(t?n["aria-labelledby"]="".concat(u.replacementClass,"-title-").concat(c||L1()):(n["aria-hidden"]="true",n.focusable="false")),n}function S6(){return{iconName:null,title:null,titleId:null,prefix:null,transform:A,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function T3(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:t,prefix:c,rest:i}=y6(e),a=L6(e),s=M2("parseNodeAttributes",{},e),o=n.styleParser?D6(e):[];return f({iconName:t,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:c,transform:A,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:o,attributes:a}},s)}var{styles:x6}=w;function D4(e){let n=u.autoReplaceSvg==="nest"?T3(e,{styleParser:!1}):T3(e);return~n.extra.classes.indexOf(i4)?B("generateLayersText",e,n):B("generateSvgReplacementMutation",e,n)}var N=new Set;c4.map(e=>{N.add("fa-".concat(e))});Object.keys(W[v]).map(N.add.bind(N));Object.keys(W[D]).map(N.add.bind(N));Object.keys(W[y]).map(N.add.bind(N));N=[...N];function O3(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!k)return Promise.resolve();let t=z.documentElement.classList,c=h=>t.add("".concat(H3,"-").concat(h)),i=h=>t.remove("".concat(H3,"-").concat(h)),a=u.autoFetchSvg?N:c4.map(h=>"fa-".concat(h)).concat(Object.keys(x6));a.includes("fa")||a.push("fa");let s=[".".concat(i4,":not([").concat(K,"])")].concat(a.map(h=>".".concat(h,":not([").concat(K,"])"))).join(", ");if(s.length===0)return Promise.resolve();let o=[];try{o=u1(e.querySelectorAll(s))}catch{}if(o.length>0)c("pending"),i("complete");else return Promise.resolve();let r=_2.begin("onTree"),l=o.reduce((h,m)=>{try{let d=D4(m);d&&h.push(d)}catch(d){t4||d.name==="MissingIcon"&&console.error(d)}return h},[]);return new Promise((h,m)=>{Promise.all(l).then(d=>{M4(d,()=>{c("active"),c("complete"),i("pending"),typeof n=="function"&&n(),r(),h()})}).catch(d=>{r(),m(d)})})}function H6(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;D4(e).then(t=>{t&&M4([t],n)})}function A6(e){return function(n){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=(n||{}).icon?n:b2(n||{}),{mask:i}=t;return i&&(i=(i||{}).icon?i:b2(i||{})),e(c,C(f({},t),{mask:i}))}}var w6=function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:t=A,symbol:c=!1,mask:i=null,maskId:a=null,title:s=null,titleId:o=null,classes:r=[],attributes:l={},styles:h={}}=n;if(!e)return;let{prefix:m,iconName:d,icon:M}=e;return j1(f({type:"icon"},e),()=>(X("beforeDOMElementCreation",{iconDefinition:e,params:n}),u.autoA11y&&(s?l["aria-labelledby"]="".concat(u.replacementClass,"-title-").concat(o||L1()):(l["aria-hidden"]="true",l.focusable="false")),k2({icons:{main:D2(M),mask:i?D2(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:m,iconName:d,transform:f(f({},A),t),symbol:c,title:s,maskId:a,titleId:o,extra:{attributes:l,styles:h,classes:r}})))},N6={mixout(){return{icon:A6(w6)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=O3,e.nodeCallback=H6,e}}},provides(e){e.i2svg=function(n){let{node:t=z,callback:c=()=>{}}=n;return O3(t,c)},e.generateSvgReplacementMutation=function(n,t){let{iconName:c,title:i,titleId:a,prefix:s,transform:o,symbol:r,mask:l,maskId:h,extra:m}=t;return new Promise((d,M)=>{Promise.all([y2(c,s),l.iconName?y2(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(_=>{let[Z,x]=_;d([n,k2({icons:{main:Z,mask:x},prefix:s,iconName:c,transform:o,symbol:r,maskId:h,title:i,titleId:a,extra:m,watchable:!0})])}).catch(M)})},e.generateAbstractIcon=function(n){let{children:t,attributes:c,main:i,transform:a,styles:s}=n,o=R1(s);o.length>0&&(c.style=o);let r;return E2(a)&&(r=B("generateAbstractTransformGrouping",{main:i,transform:a,containerWidth:i.width,iconWidth:i.width})),t.push(r||i.icon),{children:t,attributes:c}}}},E6={mixout(){return{layer(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:t=[]}=n;return j1({type:"layer"},()=>{X("beforeDOMElementCreation",{assembler:e,params:n});let c=[];return e(i=>{Array.isArray(i)?i.map(a=>{c=c.concat(a.abstract)}):c=c.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(u.cssPrefix,"-layers"),...t].join(" ")},children:c}]})}}}},V6={mixout(){return{counter(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:t=null,classes:c=[],attributes:i={},styles:a={}}=n;return j1({type:"counter",content:e},()=>(X("beforeDOMElementCreation",{content:e,params:n}),u6({content:e.toString(),title:t,extra:{attributes:i,styles:a,classes:["".concat(u.cssPrefix,"-layers-counter"),...c]}})))}}}},F6={mixout(){return{text(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:t=A,title:c=null,classes:i=[],attributes:a={},styles:s={}}=n;return j1({type:"text",content:e},()=>(X("beforeDOMElementCreation",{content:e,params:n}),V3({content:e,transform:f(f({},A),t),title:c,extra:{attributes:a,styles:s,classes:["".concat(u.cssPrefix,"-layers-text"),...i]}})))}}},provides(e){e.generateLayersText=function(n,t){let{title:c,transform:i,extra:a}=t,s=null,o=null;if(Y3){let r=parseInt(getComputedStyle(n).fontSize,10),l=n.getBoundingClientRect();s=l.width/r,o=l.height/r}return u.autoA11y&&!c&&(a.attributes["aria-hidden"]="true"),Promise.resolve([n,V3({content:n.innerHTML,width:s,height:o,transform:i,title:c,extra:a,watchable:!0})])}}},I6=new RegExp('"',"ug"),P3=[1105920,1112319],R3=f(f(f({FontAwesome:{normal:"fas",400:"fas"}},p5),d5),y5),x2=Object.keys(R3).reduce((e,n)=>(e[n.toLowerCase()]=R3[n],e),{}),k6=Object.keys(x2).reduce((e,n)=>{let t=x2[n];return e[n]=t[900]||[...Object.entries(t)][0][1],e},{});function _6(e){let n=e.replace(I6,""),t=W5(n,0),c=t>=P3[0]&&t<=P3[1],i=n.length===2?n[0]===n[1]:!1;return{value:C2(i?n[0]:n),isSecondary:c||i}}function T6(e,n){let t=e.replace(/^['"]|['"]$/g,"").toLowerCase(),c=parseInt(n),i=isNaN(c)?"normal":c;return(x2[t]||{})[i]||k6[t]}function B3(e,n){let t="".concat(x5).concat(n.replace(":","-"));return new Promise((c,i)=>{if(e.getAttribute(t)!==null)return c();let s=u1(e.children).filter(d=>d.getAttribute(m2)===n)[0],o=P.getComputedStyle(e,n),r=o.getPropertyValue("font-family"),l=r.match(E5),h=o.getPropertyValue("font-weight"),m=o.getPropertyValue("content");if(s&&!l)return e.removeChild(s),c();if(l&&m!=="none"&&m!==""){let d=o.getPropertyValue("content"),M=T6(r,h),{value:_,isSecondary:Z}=_6(d),x=l[0].startsWith("FontAwesome"),E=F2(M,_),b=E;if(x){let H=t6(_);H.iconName&&H.prefix&&(E=H.iconName,M=H.prefix)}if(E&&!Z&&(!s||s.getAttribute(A2)!==M||s.getAttribute(w2)!==b)){e.setAttribute(t,b),s&&e.removeChild(s);let H=S6(),{extra:J}=H;J.attributes[m2]=n,y2(E,M).then(Q=>{let A4=k2(C(f({},H),{icons:{main:Q,mask:I2()},prefix:M,iconName:b,extra:J,watchable:!0})),$1=z.createElementNS("http://www.w3.org/2000/svg","svg");n==="::before"?e.insertBefore($1,e.firstChild):e.appendChild($1),$1.outerHTML=A4.map(w4=>x1(w4)).join(`
`),e.removeAttribute(t),c()}).catch(i)}else c()}else c()})}function O6(e){return Promise.all([B3(e,"::before"),B3(e,"::after")])}function P6(e){return e.parentNode!==document.head&&!~A5.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(m2)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Z3(e){if(k)return new Promise((n,t)=>{let c=u1(e.querySelectorAll("*")).filter(P6).map(O6),i=_2.begin("searchPseudoElements");b4(),Promise.all(c).then(()=>{i(),S2(),n()}).catch(()=>{i(),S2(),t()})})}var R6={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=Z3,e}}},provides(e){e.pseudoElements2svg=function(n){let{node:t=z}=n;u.searchPseudoElements&&Z3(t)}}},j3=!1,B6={mixout(){return{dom:{unwatch(){b4(),j3=!0}}}},hooks(){return{bootstrap(){_3(M2("mutationObserverCallbacks",{}))},noAuto(){b6()},watch(e){let{observeMutationsRoot:n}=e;j3?S2():_3(M2("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}},$3=e=>{let n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((t,c)=>{let i=c.toLowerCase().split("-"),a=i[0],s=i.slice(1).join("-");if(a&&s==="h")return t.flipX=!0,t;if(a&&s==="v")return t.flipY=!0,t;if(s=parseFloat(s),isNaN(s))return t;switch(a){case"grow":t.size=t.size+s;break;case"shrink":t.size=t.size-s;break;case"left":t.x=t.x-s;break;case"right":t.x=t.x+s;break;case"up":t.y=t.y-s;break;case"down":t.y=t.y+s;break;case"rotate":t.rotate=t.rotate+s;break}return t},n)},Z6={mixout(){return{parse:{transform:e=>$3(e)}}},hooks(){return{parseNodeAttributes(e,n){let t=n.getAttribute("data-fa-transform");return t&&(e.transform=$3(t)),e}}},provides(e){e.generateAbstractTransformGrouping=function(n){let{main:t,transform:c,containerWidth:i,iconWidth:a}=n,s={transform:"translate(".concat(i/2," 256)")},o="translate(".concat(c.x*32,", ").concat(c.y*32,") "),r="scale(".concat(c.size/16*(c.flipX?-1:1),", ").concat(c.size/16*(c.flipY?-1:1),") "),l="rotate(".concat(c.rotate," 0 0)"),h={transform:"".concat(o," ").concat(r," ").concat(l)},m={transform:"translate(".concat(a/2*-1," -256)")},d={outer:s,inner:h,path:m};return{tag:"g",attributes:f({},d.outer),children:[{tag:"g",attributes:f({},d.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:f(f({},t.icon.attributes),d.path)}]}]}}}},u2={x:0,y:0,width:"100%",height:"100%"};function U3(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||n)&&(e.attributes.fill="black"),e}function j6(e){return e.tag==="g"?e.children:[e]}var $6={hooks(){return{parseNodeAttributes(e,n){let t=n.getAttribute("data-fa-mask"),c=t?Z1(t.split(" ").map(i=>i.trim())):I2();return c.prefix||(c.prefix=R()),e.mask=c,e.maskId=n.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(n){let{children:t,attributes:c,main:i,mask:a,maskId:s,transform:o}=n,{width:r,icon:l}=i,{width:h,icon:m}=a,d=B5({transform:o,containerWidth:h,iconWidth:r}),M={tag:"rect",attributes:C(f({},u2),{fill:"white"})},_=l.children?{children:l.children.map(U3)}:{},Z={tag:"g",attributes:f({},d.inner),children:[U3(f({tag:l.tag,attributes:f(f({},l.attributes),d.path)},_))]},x={tag:"g",attributes:f({},d.outer),children:[Z]},E="mask-".concat(s||L1()),b="clip-".concat(s||L1()),H={tag:"mask",attributes:C(f({},u2),{id:E,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[M,x]},J={tag:"defs",children:[{tag:"clipPath",attributes:{id:b},children:j6(m)},H]};return t.push(J,{tag:"rect",attributes:f({fill:"currentColor","clip-path":"url(#".concat(b,")"),mask:"url(#".concat(E,")")},u2)}),{children:t,attributes:c}}}},U6={provides(e){let n=!1;P.matchMedia&&(n=P.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){let t=[],c={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};t.push({tag:"path",attributes:C(f({},c),{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let a=C(f({},i),{attributeName:"opacity"}),s={tag:"circle",attributes:C(f({},c),{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:C(f({},i),{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:C(f({},a),{values:"1;0;1;1;0;1;"})}),t.push(s),t.push({tag:"path",attributes:C(f({},c),{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:C(f({},a),{values:"1;0;0;0;0;1;"})}]}),n||t.push({tag:"path",attributes:C(f({},c),{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:C(f({},a),{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:t}}}},q6={hooks(){return{parseNodeAttributes(e,n){let t=n.getAttribute("data-fa-symbol"),c=t===null?!1:t===""?!0:t;return e.symbol=c,e}}}},G6=[$5,N6,E6,V6,F6,R6,B6,Z6,$6,U6,q6];i6(G6,{mixoutsTo:L});var D7=L.noAuto,y7=L.config,L7=L.library,S7=L.dom,y4=L.parse,x7=L.findIconDefinition,H7=L.toHtml,L4=L.icon,A7=L.layer,W6=L.text,Y6=L.counter;var K6=["*"],X6=e=>{throw new Error(`Could not find icon with iconName=${e.iconName} and prefix=${e.prefix} in the icon library.`)},J6=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},Q6=e=>{let n={[`fa-${e.animation}`]:e.animation!=null&&!e.animation.startsWith("spin"),"fa-spin":e.animation==="spin"||e.animation==="spin-reverse","fa-spin-pulse":e.animation==="spin-pulse"||e.animation==="spin-pulse-reverse","fa-spin-reverse":e.animation==="spin-reverse"||e.animation==="spin-pulse-reverse","fa-pulse":e.animation==="spin-pulse"||e.animation==="spin-pulse-reverse","fa-fw":e.fixedWidth,"fa-border":e.border,"fa-inverse":e.inverse,"fa-layers-counter":e.counter,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both",[`fa-${e.size}`]:e.size!==null,[`fa-rotate-${e.rotate}`]:e.rotate!==null,[`fa-pull-${e.pull}`]:e.pull!==null,[`fa-stack-${e.stackItemSize}`]:e.stackItemSize!=null};return Object.keys(n).map(t=>n[t]?t:null).filter(t=>t)},e8=e=>e.prefix!==void 0&&e.iconName!==void 0,t8=(e,n)=>e8(e)?e:typeof e=="string"?{prefix:n,iconName:e}:{prefix:e[0],iconName:e[1]},c8=(()=>{class e{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null}static{this.\u0275fac=function(c){return new(c||e)}}static{this.\u0275prov=g({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),n8=(()=>{class e{constructor(){this.definitions={}}addIcons(...t){for(let c of t){c.prefix in this.definitions||(this.definitions[c.prefix]={}),this.definitions[c.prefix][c.iconName]=c;for(let i of c.icon[2])typeof i=="string"&&(this.definitions[c.prefix][i]=c)}}addIconPacks(...t){for(let c of t){let i=Object.keys(c).map(a=>c[a]);this.addIcons(...i)}}getIconDefinition(t,c){return t in this.definitions&&c in this.definitions[t]?this.definitions[t][c]:null}static{this.\u0275fac=function(c){return new(c||e)}}static{this.\u0275prov=g({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),i8=(()=>{class e{constructor(){this.stackItemSize="1x"}ngOnChanges(t){if("size"in t)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}static{this.\u0275fac=function(c){return new(c||e)}}static{this.\u0275dir=U1({type:e,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[d1]})}}return e})(),a8=(()=>{class e{constructor(t,c){this.renderer=t,this.elementRef=c}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(t){"size"in t&&(t.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${t.size.currentValue}`),t.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${t.size.previousValue}`))}static{this.\u0275fac=function(c){return new(c||e)(V(N1),V(w1))}}static{this.\u0275cmp=m1({type:e,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[d1,p1],ngContentSelectors:K6,decls:1,vars:0,template:function(c,i){c&1&&(i3(),a3(0))},encapsulation:2})}}return e})(),S4=(()=>{class e{set spin(t){this.animation=t?"spin":void 0}set pulse(t){this.animation=t?"spin-pulse":void 0}constructor(t,c,i,a,s){this.sanitizer=t,this.config=c,this.iconLibrary=i,this.stackItem=a,this.classes=[],s!=null&&a==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(t){if(this.icon==null&&this.config.fallbackIcon==null){J6();return}if(t){let c=this.icon!=null?this.icon:this.config.fallbackIcon,i=this.findIconDefinition(c);if(i!=null){let a=this.buildParams();this.renderIcon(i,a)}}}render(){this.ngOnChanges({})}findIconDefinition(t){let c=t8(t,this.config.defaultPrefix);if("icon"in c)return c;let i=this.iconLibrary.getIconDefinition(c.prefix,c.iconName);return i??(X6(c),null)}buildParams(){let t={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},c=typeof this.transform=="string"?y4.transform(this.transform):this.transform;return{title:this.title,transform:c,classes:[...Q6(t),...this.classes],mask:this.mask!=null?this.findIconDefinition(this.mask):null,styles:this.styles!=null?this.styles:{},symbol:this.symbol,attributes:{role:this.a11yRole}}}renderIcon(t,c){let i=L4(t,c);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(i.html.join(`
`))}static{this.\u0275fac=function(c){return new(c||e)(V(s2),V(c8),V(n8),V(i8,8),V(a8,8))}}static{this.\u0275cmp=m1({type:e,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(c,i){c&2&&(n3("innerHTML",i.renderedIconHTML,Y2),Q2("title",i.title))},inputs:{icon:"icon",title:"title",animation:"animation",spin:"spin",pulse:"pulse",mask:"mask",styles:"styles",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",classes:"classes",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[d1,p1],decls:0,vars:0,template:function(c,i){},encapsulation:2})}}return e})();var x4=(()=>{class e{static{this.\u0275fac=function(c){return new(c||e)}}static{this.\u0275mod=A1({type:e})}static{this.\u0275inj=H1({})}}return e})();var k7={prefix:"fab",iconName:"r-project",icon:[581,512,[],"f4f7","M581 226.6C581 119.1 450.9 32 290.5 32S0 119.1 0 226.6C0 322.4 103.3 402 239.4 418.1V480h99.1v-61.5c24.3-2.7 47.6-7.4 69.4-13.9L448 480h112l-67.4-113.7c54.5-35.4 88.4-84.9 88.4-139.7zm-466.8 14.5c0-73.5 98.9-133 220.8-133s211.9 40.7 211.9 133c0 50.1-26.5 85-70.3 106.4-2.4-1.6-4.7-2.9-6.4-3.7-10.2-5.2-27.8-10.5-27.8-10.5s86.6-6.4 86.6-92.7-90.6-87.9-90.6-87.9h-199V361c-74.1-21.5-125.2-67.1-125.2-119.9zm225.1 38.3v-55.6c57.8 0 87.8-6.8 87.8 27.3 0 36.5-38.2 28.3-87.8 28.3zm-.9 72.5H365c10.8 0 18.9 11.7 24 19.2-16.1 1.9-33 2.8-50.6 2.9v-22.1z"]};var _7={prefix:"fab",iconName:"angular",icon:[448,512,[],"f420","M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z"]};var T7={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]};var O7={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]};var P7={prefix:"fab",iconName:"docker",icon:[640,512,[],"f395","M349.9 236.3h-66.1v-59.4h66.1v59.4zm0-204.3h-66.1v60.7h66.1V32zm78.2 144.8H362v59.4h66.1v-59.4zm-156.3-72.1h-66.1v60.1h66.1v-60.1zm78.1 0h-66.1v60.1h66.1v-60.1zm276.8 100c-14.4-9.7-47.6-13.2-73.1-8.4-3.3-24-16.7-44.9-41.1-63.7l-14-9.3-9.3 14c-18.4 27.8-23.4 73.6-3.7 103.8-8.7 4.7-25.8 11.1-48.4 10.7H2.4c-8.7 50.8 5.8 116.8 44 162.1 37.1 43.9 92.7 66.2 165.4 66.2 157.4 0 273.9-72.5 328.4-204.2 21.4.4 67.6.1 91.3-45.2 1.5-2.5 6.6-13.2 8.5-17.1l-13.3-8.9zm-511.1-27.9h-66v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm-78.1-72.1h-66.1v60.1h66.1v-60.1z"]};var R7={prefix:"fab",iconName:"rust",icon:[512,512,[],"e07a","M508.52,249.75,486.7,236.24c-.17-2-.34-3.93-.55-5.88l18.72-17.5a7.35,7.35,0,0,0-2.44-12.25l-24-9c-.54-1.88-1.08-3.78-1.67-5.64l15-20.83a7.35,7.35,0,0,0-4.79-11.54l-25.42-4.15c-.9-1.73-1.79-3.45-2.73-5.15l10.68-23.42a7.35,7.35,0,0,0-6.95-10.39l-25.82.91q-1.79-2.22-3.61-4.4L439,81.84A7.36,7.36,0,0,0,430.16,73L405,78.93q-2.17-1.83-4.4-3.61l.91-25.82a7.35,7.35,0,0,0-10.39-7L367.7,53.23c-1.7-.94-3.43-1.84-5.15-2.73L358.4,25.08a7.35,7.35,0,0,0-11.54-4.79L326,35.26c-1.86-.59-3.75-1.13-5.64-1.67l-9-24a7.35,7.35,0,0,0-12.25-2.44l-17.5,18.72c-1.95-.21-3.91-.38-5.88-.55L262.25,3.48a7.35,7.35,0,0,0-12.5,0L236.24,25.3c-2,.17-3.93.34-5.88.55L212.86,7.13a7.35,7.35,0,0,0-12.25,2.44l-9,24c-1.89.55-3.79,1.08-5.66,1.68l-20.82-15a7.35,7.35,0,0,0-11.54,4.79l-4.15,25.41c-1.73.9-3.45,1.79-5.16,2.73L120.88,42.55a7.35,7.35,0,0,0-10.39,7l.92,25.81c-1.49,1.19-3,2.39-4.42,3.61L81.84,73A7.36,7.36,0,0,0,73,81.84L78.93,107c-1.23,1.45-2.43,2.93-3.62,4.41l-25.81-.91a7.42,7.42,0,0,0-6.37,3.26,7.35,7.35,0,0,0-.57,7.13l10.66,23.41c-.94,1.7-1.83,3.43-2.73,5.16L25.08,153.6a7.35,7.35,0,0,0-4.79,11.54l15,20.82c-.59,1.87-1.13,3.77-1.68,5.66l-24,9a7.35,7.35,0,0,0-2.44,12.25l18.72,17.5c-.21,1.95-.38,3.91-.55,5.88L3.48,249.75a7.35,7.35,0,0,0,0,12.5L25.3,275.76c.17,2,.34,3.92.55,5.87L7.13,299.13a7.35,7.35,0,0,0,2.44,12.25l24,9c.55,1.89,1.08,3.78,1.68,5.65l-15,20.83a7.35,7.35,0,0,0,4.79,11.54l25.42,4.15c.9,1.72,1.79,3.45,2.73,5.14L42.56,391.12a7.35,7.35,0,0,0,.57,7.13,7.13,7.13,0,0,0,6.37,3.26l25.83-.91q1.77,2.22,3.6,4.4L73,430.16A7.36,7.36,0,0,0,81.84,439L107,433.07q2.18,1.83,4.41,3.61l-.92,25.82a7.35,7.35,0,0,0,10.39,6.95l23.43-10.68c1.69.94,3.42,1.83,5.14,2.73l4.15,25.42a7.34,7.34,0,0,0,11.54,4.78l20.83-15c1.86.6,3.76,1.13,5.65,1.68l9,24a7.36,7.36,0,0,0,12.25,2.44l17.5-18.72c1.95.21,3.92.38,5.88.55l13.51,21.82a7.35,7.35,0,0,0,12.5,0l13.51-21.82c2-.17,3.93-.34,5.88-.56l17.5,18.73a7.36,7.36,0,0,0,12.25-2.44l9-24c1.89-.55,3.78-1.08,5.65-1.68l20.82,15a7.34,7.34,0,0,0,11.54-4.78l4.15-25.42c1.72-.9,3.45-1.79,5.15-2.73l23.42,10.68a7.35,7.35,0,0,0,10.39-6.95l-.91-25.82q2.22-1.79,4.4-3.61L430.16,439a7.36,7.36,0,0,0,8.84-8.84L433.07,405q1.83-2.17,3.61-4.4l25.82.91a7.23,7.23,0,0,0,6.37-3.26,7.35,7.35,0,0,0,.58-7.13L458.77,367.7c.94-1.7,1.83-3.43,2.73-5.15l25.42-4.15a7.35,7.35,0,0,0,4.79-11.54l-15-20.83c.59-1.87,1.13-3.76,1.67-5.65l24-9a7.35,7.35,0,0,0,2.44-12.25l-18.72-17.5c.21-1.95.38-3.91.55-5.87l21.82-13.51a7.35,7.35,0,0,0,0-12.5Zm-151,129.08A13.91,13.91,0,0,0,341,389.51l-7.64,35.67A187.51,187.51,0,0,1,177,424.44l-7.64-35.66a13.87,13.87,0,0,0-16.46-10.68l-31.51,6.76a187.38,187.38,0,0,1-16.26-19.21H258.3c1.72,0,2.89-.29,2.89-1.91V309.55c0-1.57-1.17-1.91-2.89-1.91H213.47l.05-34.35H262c4.41,0,23.66,1.28,29.79,25.87,1.91,7.55,6.17,32.14,9.06,40,2.89,8.82,14.6,26.46,27.1,26.46H407a187.3,187.3,0,0,1-17.34,20.09Zm25.77,34.49A15.24,15.24,0,1,1,368,398.08h.44A15.23,15.23,0,0,1,383.24,413.32Zm-225.62-.68a15.24,15.24,0,1,1-15.25-15.25h.45A15.25,15.25,0,0,1,157.62,412.64ZM69.57,234.15l32.83-14.6a13.88,13.88,0,0,0,7.06-18.33L102.69,186h26.56V305.73H75.65A187.65,187.65,0,0,1,69.57,234.15ZM58.31,198.09a15.24,15.24,0,0,1,15.23-15.25H74a15.24,15.24,0,1,1-15.67,15.24Zm155.16,24.49.05-35.32h63.26c3.28,0,23.07,3.77,23.07,18.62,0,12.29-15.19,16.7-27.68,16.7ZM399,306.71c-9.8,1.13-20.63-4.12-22-10.09-5.78-32.49-15.39-39.4-30.57-51.4,18.86-11.95,38.46-29.64,38.46-53.26,0-25.52-17.49-41.59-29.4-49.48-16.76-11-35.28-13.23-40.27-13.23H116.32A187.49,187.49,0,0,1,221.21,70.06l23.47,24.6a13.82,13.82,0,0,0,19.6.44l26.26-25a187.51,187.51,0,0,1,128.37,91.43l-18,40.57A14,14,0,0,0,408,220.43l34.59,15.33a187.12,187.12,0,0,1,.4,32.54H423.71c-1.91,0-2.69,1.27-2.69,3.13v8.82C421,301,409.31,305.58,399,306.71ZM240,60.21A15.24,15.24,0,0,1,255.21,45h.45A15.24,15.24,0,1,1,240,60.21ZM436.84,214a15.24,15.24,0,1,1,0-30.48h.44a15.24,15.24,0,0,1-.44,30.48Z"]};var B7={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};var $7=(()=>{class e{static{this.\u0275fac=function(c){return new(c||e)}}static{this.\u0275cmp=m1({type:e,selectors:[["app-social-icon"]],inputs:{socialdom:"socialdom"},standalone:!0,features:[p1],decls:2,vars:2,consts:[[3,"href"],[3,"icon"]],template:function(c,i){c&1&&(e3(0,"a",0),c3(1,"fa-icon",1),t3()),c&2&&(Y1("href",i.socialdom.url,K2),X2(),Y1("icon",i.socialdom.icon))},dependencies:[x4,S4],styles:["a[_ngcontent-%COMP%]{display:inline-flex;justify-content:center;align-items:center;font-size:3rem;padding:1rem;background:transparent;border:2px solid var(--main-color);border-radius:50%;color:var(--main-color);margin:3rem .5rem;transition:.3s ease}a[_ngcontent-%COMP%]:hover{color:var(--text-color);background-color:var(--main-color);transform:scale(1.2)translateY(-5px);box-shadow:0 0 25px var(--main-color)}"]})}}return e})();var H4=class{constructor(n,t){this.icon=n,this.url=t}};export{X1 as a,_4 as b,C7 as c,v7 as d,S4 as e,x4 as f,k7 as g,_7 as h,T7 as i,O7 as j,P7 as k,R7 as l,B7 as m,$7 as n,H4 as o};
