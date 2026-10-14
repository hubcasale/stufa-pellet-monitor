var ge=Object.defineProperty;var _e=Object.getOwnPropertyDescriptor;var m=(i,t,e,s)=>{for(var o=s>1?void 0:s?_e(t,e):t,n=i.length-1,r;n>=0;n--)(r=i[n])&&(o=(s?r(t,e,o):r(o))||o);return s&&o&&ge(t,e,o),o};var nt=globalThis,rt=nt.ShadowRoot&&(nt.ShadyCSS===void 0||nt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,_t=Symbol(),Nt=new WeakMap,K=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==_t)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(rt&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=Nt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Nt.set(e,t))}return t}toString(){return this.cssText}},Ht=i=>new K(typeof i=="string"?i:i+"",void 0,_t),A=(i,...t)=>{let e=i.length===1?i[0]:t.reduce((s,o,n)=>s+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+i[n+1],i[0]);return new K(e,i,_t)},It=(i,t)=>{if(rt)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),o=nt.litNonce;o!==void 0&&s.setAttribute("nonce",o),s.textContent=e.cssText,i.appendChild(s)}},bt=rt?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return Ht(e)})(i):i;var{is:be,defineProperty:ve,getOwnPropertyDescriptor:xe,getOwnPropertyNames:ye,getOwnPropertySymbols:$e,getPrototypeOf:we}=Object,at=globalThis,Ut=at.trustedTypes,Se=Ut?Ut.emptyScript:"",ke=at.reactiveElementPolyfillSupport,V=(i,t)=>i,Z={toAttribute(i,t){switch(t){case Boolean:i=i?Se:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},lt=(i,t)=>!be(i,t),jt={attribute:!0,type:String,converter:Z,reflect:!1,useDefault:!1,hasChanged:lt};Symbol.metadata??=Symbol("metadata"),at.litPropertyMetadata??=new WeakMap;var T=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=jt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),o=this.getPropertyDescriptor(t,s,e);o!==void 0&&ve(this.prototype,t,o)}}static getPropertyDescriptor(t,e,s){let{get:o,set:n}=xe(this.prototype,t)??{get(){return this[e]},set(r){this[e]=r}};return{get:o,set(r){let l=o?.call(this);n?.call(this,r),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??jt}static _$Ei(){if(this.hasOwnProperty(V("elementProperties")))return;let t=we(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(V("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(V("properties"))){let e=this.properties,s=[...ye(e),...$e(e)];for(let o of s)this.createProperty(o,e[o])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,o]of e)this.elementProperties.set(s,o)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let o=this._$Eu(e,s);o!==void 0&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let o of s)e.unshift(bt(o))}else t!==void 0&&e.push(bt(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return It(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){let s=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,s);if(o!==void 0&&s.reflect===!0){let n=(s.converter?.toAttribute!==void 0?s.converter:Z).toAttribute(e,s.type);this._$Em=t,n==null?this.removeAttribute(o):this.setAttribute(o,n),this._$Em=null}}_$AK(t,e){let s=this.constructor,o=s._$Eh.get(t);if(o!==void 0&&this._$Em!==o){let n=s.getPropertyOptions(o),r=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:Z;this._$Em=o;let l=r.fromAttribute(e,n.type);this[o]=l??this._$Ej?.get(o)??l,this._$Em=null}}requestUpdate(t,e,s,o=!1,n){if(t!==void 0){let r=this.constructor;if(o===!1&&(n=this[t]),s??=r.getPropertyOptions(t),!((s.hasChanged??lt)(n,e)||s.useDefault&&s.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:o,wrapped:n},r){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),n!==!0||r!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),o===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[o,n]of s){let{wrapped:r}=n,l=this[o];r!==!0||this._$AL.has(o)||l===void 0||this.C(o,void 0,n,l)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};T.elementStyles=[],T.shadowRootOptions={mode:"open"},T[V("elementProperties")]=new Map,T[V("finalized")]=new Map,ke?.({ReactiveElement:T}),(at.reactiveElementVersions??=[]).push("2.1.2");var kt=globalThis,Dt=i=>i,ct=kt.trustedTypes,qt=ct?ct.createPolicy("lit-html",{createHTML:i=>i}):void 0,Vt="$lit$",R=`lit$${Math.random().toFixed(9).slice(2)}$`,Zt="?"+R,Ae=`<${Zt}>`,I=document,J=()=>I.createComment(""),Y=i=>i===null||typeof i!="object"&&typeof i!="function",At=Array.isArray,Ee=i=>At(i)||typeof i?.[Symbol.iterator]=="function",vt=`[ 	
\f\r]`,X=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ft=/-->/g,Bt=/>/g,N=RegExp(`>|${vt}(?:([^\\s"'>=/]+)(${vt}*=${vt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Wt=/'/g,Gt=/"/g,Xt=/^(?:script|style|textarea|title)$/i,Et=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),f=Et(1),U=Et(2),Be=Et(3),M=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),Kt=new WeakMap,H=I.createTreeWalker(I,129);function Jt(i,t){if(!At(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return qt!==void 0?qt.createHTML(t):t}var Ce=(i,t)=>{let e=i.length-1,s=[],o,n=t===2?"<svg>":t===3?"<math>":"",r=X;for(let l=0;l<e;l++){let a=i[l],h,d,c=-1,v=0;for(;v<a.length&&(r.lastIndex=v,d=r.exec(a),d!==null);)v=r.lastIndex,r===X?d[1]==="!--"?r=Ft:d[1]!==void 0?r=Bt:d[2]!==void 0?(Xt.test(d[2])&&(o=RegExp("</"+d[2],"g")),r=N):d[3]!==void 0&&(r=N):r===N?d[0]===">"?(r=o??X,c=-1):d[1]===void 0?c=-2:(c=r.lastIndex-d[2].length,h=d[1],r=d[3]===void 0?N:d[3]==='"'?Gt:Wt):r===Gt||r===Wt?r=N:r===Ft||r===Bt?r=X:(r=N,o=void 0);let g=r===N&&i[l+1].startsWith("/>")?" ":"";n+=r===X?a+Ae:c>=0?(s.push(h),a.slice(0,c)+Vt+a.slice(c)+R+g):a+R+(c===-2?l:g)}return[Jt(i,n+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]},Q=class i{constructor({strings:t,_$litType$:e},s){let o;this.parts=[];let n=0,r=0,l=t.length-1,a=this.parts,[h,d]=Ce(t,e);if(this.el=i.createElement(h,s),H.currentNode=this.el.content,e===2||e===3){let c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(o=H.nextNode())!==null&&a.length<l;){if(o.nodeType===1){if(o.hasAttributes())for(let c of o.getAttributeNames())if(c.endsWith(Vt)){let v=d[r++],g=o.getAttribute(c).split(R),x=/([.?@])?(.*)/.exec(v);a.push({type:1,index:n,name:x[2],strings:g,ctor:x[1]==="."?yt:x[1]==="?"?$t:x[1]==="@"?wt:W}),o.removeAttribute(c)}else c.startsWith(R)&&(a.push({type:6,index:n}),o.removeAttribute(c));if(Xt.test(o.tagName)){let c=o.textContent.split(R),v=c.length-1;if(v>0){o.textContent=ct?ct.emptyScript:"";for(let g=0;g<v;g++)o.append(c[g],J()),H.nextNode(),a.push({type:2,index:++n});o.append(c[v],J())}}}else if(o.nodeType===8)if(o.data===Zt)a.push({type:2,index:n});else{let c=-1;for(;(c=o.data.indexOf(R,c+1))!==-1;)a.push({type:7,index:n}),c+=R.length-1}n++}}static createElement(t,e){let s=I.createElement("template");return s.innerHTML=t,s}};function B(i,t,e=i,s){if(t===M)return t;let o=s!==void 0?e._$Co?.[s]:e._$Cl,n=Y(t)?void 0:t._$litDirective$;return o?.constructor!==n&&(o?._$AO?.(!1),n===void 0?o=void 0:(o=new n(i),o._$AT(i,e,s)),s!==void 0?(e._$Co??=[])[s]=o:e._$Cl=o),o!==void 0&&(t=B(i,o._$AS(i,t.values),o,s)),t}var xt=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:s}=this._$AD,o=(t?.creationScope??I).importNode(e,!0);H.currentNode=o;let n=H.nextNode(),r=0,l=0,a=s[0];for(;a!==void 0;){if(r===a.index){let h;a.type===2?h=new tt(n,n.nextSibling,this,t):a.type===1?h=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(h=new St(n,this,t)),this._$AV.push(h),a=s[++l]}r!==a?.index&&(n=H.nextNode(),r++)}return H.currentNode=I,o}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},tt=class i{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,o){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=B(this,t,e),Y(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==M&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ee(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==u&&Y(this._$AH)?this._$AA.nextSibling.data=t:this.T(I.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:s}=t,o=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=Q.createElement(Jt(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===o)this._$AH.p(e);else{let n=new xt(o,this),r=n.u(this.options);n.p(e),this.T(r),this._$AH=n}}_$AC(t){let e=Kt.get(t.strings);return e===void 0&&Kt.set(t.strings,e=new Q(t)),e}k(t){At(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,o=0;for(let n of t)o===e.length?e.push(s=new i(this.O(J()),this.O(J()),this,this.options)):s=e[o],s._$AI(n),o++;o<e.length&&(this._$AR(s&&s._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let s=Dt(t).nextSibling;Dt(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},W=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,o,n){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=u}_$AI(t,e=this,s,o){let n=this.strings,r=!1;if(n===void 0)t=B(this,t,e,0),r=!Y(t)||t!==this._$AH&&t!==M,r&&(this._$AH=t);else{let l=t,a,h;for(t=n[0],a=0;a<n.length-1;a++)h=B(this,l[s+a],e,a),h===M&&(h=this._$AH[a]),r||=!Y(h)||h!==this._$AH[a],h===u?t=u:t!==u&&(t+=(h??"")+n[a+1]),this._$AH[a]=h}r&&!o&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},yt=class extends W{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}},$t=class extends W{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==u)}},wt=class extends W{constructor(t,e,s,o,n){super(t,e,s,o,n),this.type=5}_$AI(t,e=this){if((t=B(this,t,e,0)??u)===M)return;let s=this._$AH,o=t===u&&s!==u||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==u&&(s===u||o);o&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},St=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){B(this,t)}};var Te=kt.litHtmlPolyfillSupport;Te?.(Q,tt),(kt.litHtmlVersions??=[]).push("3.3.3");var Yt=(i,t,e)=>{let s=e?.renderBefore??t,o=s._$litPart$;if(o===void 0){let n=e?.renderBefore??null;s._$litPart$=o=new tt(t.insertBefore(J(),n),n,void 0,e??{})}return o._$AI(i),o};var Ct=globalThis,w=class extends T{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Yt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return M}};w._$litElement$=!0,w.finalized=!0,Ct.litElementHydrateSupport?.({LitElement:w});var Me=Ct.litElementPolyfillSupport;Me?.({LitElement:w});(Ct.litElementVersions??=[]).push("4.2.2");var ze={attribute:!0,type:String,converter:Z,reflect:!1,hasChanged:lt},Oe=(i=ze,t,e)=>{let{kind:s,metadata:o}=e,n=globalThis.litPropertyMetadata.get(o);if(n===void 0&&globalThis.litPropertyMetadata.set(o,n=new Map),s==="setter"&&((i=Object.create(i)).wrapped=!0),n.set(e.name,i),s==="accessor"){let{name:r}=e;return{set(l){let a=t.get.call(this);t.set.call(this,l),this.requestUpdate(r,a,i,!0,l)},init(l){return l!==void 0&&this.C(r,void 0,i,l),l}}}if(s==="setter"){let{name:r}=e;return function(l){let a=this[r];t.call(this,l),this.requestUpdate(r,a,i,!0,l)}}throw Error("Unsupported decorator location: "+s)};function S(i){return(t,e)=>typeof e=="object"?Oe(i,t,e):((s,o,n)=>{let r=o.hasOwnProperty(n);return o.constructor.createProperty(n,s),r?Object.getOwnPropertyDescriptor(o,n):void 0})(i,t,e)}function b(i){return S({...i,state:!0,attribute:!1})}var Qt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ht=i=>(...t)=>({_$litDirective$:i,values:t}),pt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var j=class extends pt{constructor(t){if(super(t),this.it=u,t.type!==Qt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===u||t==null)return this._t=void 0,this.it=t;if(t===M)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;let e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}};j.directiveName="unsafeHTML",j.resultType=1;var Rs=ht(j);var et=class extends j{};et.directiveName="unsafeSVG",et.resultType=2;var te=ht(et);var Re=["spenta","accensione","accesa","spegnimento","non_disponibile"],L={spenta:"Spenta",accensione:"Accensione",accesa:"In funzione",spegnimento:"Spegnimento",non_disponibile:"Non disponibile"},ut={spenta:"neutral",accensione:"warning",accesa:"success",spegnimento:"accent",non_disponibile:"danger"},y={spenta:"#6b7280",accensione:"#f59e0b",accesa:"#ef4444",spegnimento:"#60a5fa",non_disponibile:"transparent"},st={rosso:["#8b2a22","#b53b2f"],arancio:["#d9822b","#f0a24a"],avorio:["#d8cdb4","#efe6d0"]};function it(i){return Re.includes(String(i))?i:"non_disponibile"}function D(i){if(i==null||i===""||i==="unknown"||i==="unavailable")return null;let t=Number(i);return Number.isFinite(t)?t:null}function _(i,t=0){return i==null||!Number.isFinite(i)?"\u2013":i.toFixed(t).replace(".",",")}function Mt(i){let t=Math.max(0,Math.floor(i/1e3));if(t<60)return`${t} s`;let e=Math.floor(t/60);return e<60?`${e} min`:`${Math.floor(e/60)} h ${String(e%60).padStart(2,"0")} min`}function ee(i,t){let e=Math.max(300,Math.ceil(t.ignition_above*1.2/50)*50),s=l=>Math.round(Math.min(Math.max(l/e,0),1)*1e3)/10,o=[{from:0,to:s(t.off_below),color:y.spenta,label:"spenta"},{from:s(t.shutdown_min),to:s(t.shutdown_max),color:y.spegnimento,label:"spegnimento"},{from:s(t.ignition_above),to:100,color:y.accensione,label:"accensione"}],n=[{at:0,label:"0"},{at:s(t.off_below),label:_(t.off_below,t.off_below%1?1:0)},{at:s((t.shutdown_min+t.shutdown_max)/2),label:`${_(t.shutdown_min,t.shutdown_min%1?1:0)}-${_(t.shutdown_max,t.shutdown_max%1?1:0)}`},{at:s(t.ignition_above),label:_(t.ignition_above)},{at:100,label:`${e} W`}],r=n.filter((l,a)=>a===0?n[1].at-l.at>=8:a===n.length-1?l.at-n[a-1].at>=8:!0);return{max:e,marker:i===null?null:s(i),zones:o,ticks:r}}function Le(i){if(i==null)return null;if(typeof i=="number")return i<1e11?i*1e3:i;let t=Date.parse(i);return Number.isNaN(t)?null:t}function se(i){return Le(i.lu??i.last_updated??i.lc??i.last_changed)}function ie(i){let t=[];for(let e of i??[]){let s=se(e),o=e.s??e.state;if(s===null||o===void 0||o===""||o==="unavailable"||o==="unknown")continue;let n=Number(o);Number.isFinite(n)&&t.push({t:s,v:n})}return t.sort((e,s)=>e.t-s.t)}function ft(i,t,e){let s=[];for(let a of i??[]){let h=se(a),d=a.s??a.state;h!==null&&d!==void 0&&s.push({t:h,s:it(d)})}s.sort((a,h)=>a.t-h.t);let o=null;for(let a of s)if(a.t<=t)o=a.s;else break;let n=[],r=t;for(let a of s)a.t<=t||a.t>=e||(o!==null&&n.push({from:r,to:a.t,state:o}),r=a.t,o=a.s);o!==null&&r<e&&n.push({from:r,to:e,state:o});let l=[];for(let a of n){let h=l[l.length-1];h&&h.state===a.state&&h.to===a.from?h.to=a.to:l.push({...a})}return l}function oe(i,t){for(let e of i)if(t>=e.from&&t<e.to)return e.state;return null}function ne(i,t,e,s,o=3*3600*1e3){let n=new Array(s).fill(null);if(s<=0||e<=t)return n;let r=(e-t)/s,l=0,a=null,h=0;for(let d=0;d<s;d++){let c=t+d*r,v=c+r;for(;l<i.length&&i[l].t<=c;)a=i[l].v,h=i[l].t,l++;let g=0,x=0,C=c,$=a,p=h,Pt=me=>{if($===null)return;let gt=Math.min(me,p+o)-C;gt>0&&(g+=$*gt,x+=gt)},P=l;for(;P<i.length&&i[P].t<v;)Pt(i[P].t),C=i[P].t,$=i[P].v,p=i[P].t,P++;Pt(v),n[d]=x>0?g/x:null}return n}function Pe(i){let t=Math.pow(10,Math.floor(Math.log10(i))),e=i/t;return(e<=1?1:e<=2?2:e<=2.5?2.5:e<=5?5:10)*t}function re(i,t,e=5){if(!Number.isFinite(i)||!Number.isFinite(t))return{min:0,max:1,ticks:[0,1]};t-i<1e-9&&(i-=1,t+=1);let s=Pe((t-i)/Math.max(1,e-1)),o=Math.floor(i/s+1e-9)*s,n=Math.ceil(t/s-1e-9)*s,r=[];for(let l=o;l<=n+s*1e-6;l+=s)r.push(Math.round(l/s)*s);return{min:o,max:n,ticks:r}}var ae=["dom","lun","mar","mer","gio","ven","sab"],Ne=["gen","feb","mar","apr","mag","giu","lug","ago","set","ott","nov","dic"],Tt=i=>`${String(i.getHours()).padStart(2,"0")}:${String(i.getMinutes()).padStart(2,"0")}`;function le(i,t,e=6){let s=(t-i)/36e5,o=[1,2,3,6,12,24,48].find(l=>s/l<=e)??48,n=new Date(i);n.setMinutes(0,0,0),o>=24?n.setHours(0):n.setHours(Math.ceil(n.getHours()/o)*o);let r=[];for(let l=n.getTime();l<=t;l+=o*36e5){if(l<i)continue;let a=new Date(l),h=a.getHours()===0;r.push({t:l,major:h,label:s>30&&h?`${ae[a.getDay()]} ${a.getDate()}`:Tt(a)})}return r}function ce(i){let t=new Date(i);return`${ae[t.getDay()]} ${t.getDate()} ${Ne[t.getMonth()]}, ${Tt(t)}`}function de(i,t,e){let s="",o=!1;for(let n=0;n<i.length;n++){let r=i[n];if(r===null){o=!1;continue}s+=`${o?"L":"M"}${t(n).toFixed(1)} ${e(r).toFixed(1)}`,o=!0}return s}function pe(i,t){let e=i.settings,s=i.power!==null?`${_(i.power,i.power%1?1:0)} W`:"\u2013",o=i.sinceMs!==null?Mt(t-i.sinceMs):null,n=[];switch(i.state){case"accesa":n.push({icon:"mdi:fire",text:`Stufa in funzione${o?` da ${o}`:""}, potenza ${s}.`,tone:"ok"});break;case"accensione":n.push({icon:"mdi:fire-circle",text:`Accensione in corso: l'accenditore assorbe ${s}, oltre la soglia di ${_(e.ignition_above)} W.`,tone:"info"});break;case"spegnimento":n.push({icon:"mdi:fan",text:`Spegnimento in corso: la ventola raffredda (${s}, fascia ${_(e.shutdown_min,1)}-${_(e.shutdown_max,1)} W).`,tone:"info"});break;case"spenta":n.push({icon:"mdi:fire-off",text:`Stufa spenta${o?` da ${o}`:""}, potenza ${s} (sotto ${_(e.off_below,e.off_below%1?1:0)} W).`,tone:"info"});break;default:n.push({icon:"mdi:lan-disconnect",text:"Il sensore di potenza non risponde: non so in che stato sia la stufa.",tone:"bad"})}return i.blocked&&n.push({icon:"mdi:shield-lock",text:`Azioni automatiche sulla presa bloccate: riprendono ${e.restore_delay_seconds} secondi dopo il ritorno del sensore.`,tone:"warn"}),i.switchOn!==null&&(n.push({icon:"mdi:power-plug",text:`L'interruttore della presa \xE8 ${i.switchOn?"acceso":"spento"}.`,tone:"info"}),i.switchOn&&i.state==="spenta"&&!i.blocked&&n.push({icon:"mdi:timer-sand",text:`Interruttore acceso con la stufa spenta: si spegne dopo il periodo di grazia (${e.grace_seconds} s).`,tone:"info"}),!i.switchOn&&i.state==="accensione"&&n.push({icon:"mdi:sync",text:"La stufa \xE8 partita da sola: l'interruttore si accende per restare allineato.",tone:"info"})),i.ignitionsToday!==null&&i.hoursToday!==null&&n.push({icon:"mdi:calendar-today",text:`Oggi: ${i.ignitionsToday} ${i.ignitionsToday===1?"accensione":"accensioni"}, ${_(i.hoursToday,1)} ore in funzione.`,tone:"info"}),n}var he=[{key:"off_below",label:"Spenta sotto",hint:"Sotto questa potenza la stufa \xE8 spenta (consumo a riposo).",unit:"W",min:0,max:100,step:.5},{key:"shutdown_min",label:"Spegnimento da",hint:"Inizio della fascia di potenza della ventola in raffreddamento.",unit:"W",min:1,max:400,step:.5},{key:"shutdown_max",label:"Spegnimento fino a",hint:"Fine della fascia di spegnimento.",unit:"W",min:1,max:400,step:.5},{key:"ignition_above",label:"Accensione sopra",hint:"Oltre questa potenza l'accenditore \xE8 acceso: la stufa si sta accendendo.",unit:"W",min:20,max:2e3,step:5}],ue=[{key:"confirm_seconds",label:"Conferma del cambio di stato",hint:"Un nuovo stato deve durare tanti secondi prima di essere accettato (filtra i picchi).",unit:"s",min:0,max:600,step:1},{key:"grace_seconds",label:"Periodo di grazia della presa",hint:"Dopo aver acceso la presa si aspetta tanti secondi prima di spegnerla se la stufa risulta spenta.",unit:"s",min:0,max:600,step:1},{key:"restore_delay_seconds",label:"Ripresa dopo guasto del sensore",hint:"Dopo il ritorno del sensore le azioni sulla presa restano bloccate per tanti secondi.",unit:"s",min:0,max:900,step:1}];function zt(i){let t=[];return i.off_below<i.shutdown_min||t.push("La soglia di spenta deve essere minore dell'inizio della fascia di spegnimento."),i.shutdown_min>i.shutdown_max&&t.push("L'inizio della fascia di spegnimento non pu\xF2 superare la fine."),i.shutdown_max<i.ignition_above||t.push("La fascia di spegnimento deve stare sotto la soglia di accensione."),t}function Ot(i,t,e,s){let o=Math.min(e,Math.max(t,i)),n=(String(s).split(".")[1]??"").length;return Number((Math.round(o/s)*s).toFixed(n))}function fe(i,t){let[e,s]=st[t]??st.rosso,o=i==="accesa"||i==="accensione"||i==="spegnimento",n=i==="non_disponibile",r=i==="accesa"?"#ff8a2a":i==="accensione"?"#ff9d3c":i==="spegnimento"?"#4a7bd0":null,l=i==="accesa"?.55:i==="accensione"?.32:i==="spegnimento"?.18:0,v=i==="accesa"?`
    <path d="M94 186 C70 178 66 150 82 132 C84 144 92 146 94 138 C96 122 90 114 98 104 C104 122 124 134 118 160 C116 172 106 182 94 186Z" fill="#ffb21f"/>
    <path d="M94 186 C80 180 78 160 88 148 C90 156 96 158 97 150 C98 140 96 134 100 128 C106 144 114 156 108 170 C105 178 100 184 94 186Z" fill="#ff6a1a"/>
    <path d="M94 186 C86 182 86 170 92 162 C94 168 98 168 99 163 C103 170 102 180 94 186Z" fill="#fff0a8"/>
    <path d="M68 186 C58 178 60 164 68 158 C68 166 72 168 74 164 C78 172 76 182 68 186Z" fill="#ff8a1f"/>
    <path d="M120 186 C112 180 114 168 121 162 C121 170 125 172 127 167 C131 175 128 183 120 186Z" fill="#ff8a1f"/>`:i==="accensione"?`
    <path d="M94 186 C84 182 84 170 90 162 C92 168 96 168 98 162 C102 170 102 180 94 186Z" fill="#ffa21f"/>
    <path d="M94 186 C89 183 89 177 92 173 C94 176 96 176 97 173 C99 177 98 183 94 186Z" fill="#fff0a8"/>`+(i==="accensione"?'<rect x="79" y="180" width="30" height="4" rx="2" fill="#ff3b30"/><rect x="79" y="180" width="30" height="4" rx="2" fill="#ff7a6e" opacity="0.5"/>':""):i==="spegnimento"?`
    <path d="M94 186 C86 183 86 174 91 168 C93 172 96 172 98 168 C101 174 101 182 94 186Z" fill="#6aa4ff" opacity="0.8"/>
    <path d="M94 186 C90 184 90 180 93 177 C95 179 96 179 97 177 C98 180 98 184 94 186Z" fill="#c9e0ff" opacity="0.8"/>`:"",g=o?i==="spegnimento"?"#7fb2ff":"#ffcf5a":"#1b2028",x=i==="accesa"?"ON":i==="accensione"?"ACC":i==="spegnimento"?"OFF":"",C=[0,1,2,3,4,5,6].map($=>`<rect x="40" y="${54+$*4.8}" width="108" height="2.4" rx="1.2" fill="#0f1217"/>`).join("");return`<svg viewBox="0 0 188 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Stufa a pellet ${i}">
  <defs>
    <linearGradient id="spBody" x1="0" x2="1"><stop offset="0" stop-color="#2a2f38"/><stop offset=".5" stop-color="#3a414d"/><stop offset="1" stop-color="#2a2f38"/></linearGradient>
    <linearGradient id="spTile" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${s}"/><stop offset="1" stop-color="${e}"/></linearGradient>
    <linearGradient id="spGlass" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#14181e"/><stop offset="1" stop-color="#0b0d11"/></linearGradient>
    <radialGradient id="spGlow" cx=".5" cy=".85" r=".7"><stop offset="0" stop-color="${r??"#000"}" stop-opacity="${l}"/><stop offset="1" stop-color="${r??"#000"}" stop-opacity="0"/></radialGradient>
    <clipPath id="spGlassClip"><rect x="53" y="100" width="82" height="88" rx="6"/></clipPath>
  </defs>
  <ellipse cx="94" cy="326" rx="78" ry="8" fill="#000" opacity="0.18"/>
  <rect x="85" y="6" width="18" height="40" rx="3" fill="#2b2f36"/>
  <rect x="85" y="6" width="5" height="40" rx="2" fill="#4a505b" opacity="0.6"/>
  <rect x="10" y="42" width="168" height="12" rx="6" fill="#20242b"/>
  <path d="M12 54 H176 C180 54 182 58 182 62 V292 C182 300 176 306 168 306 H20 C12 306 6 300 6 292 V62 C6 58 8 54 12 54Z" fill="url(#spBody)"/>
  <rect x="14" y="60" width="8" height="226" rx="3" fill="url(#spTile)"/>
  <rect x="166" y="60" width="8" height="226" rx="3" fill="url(#spTile)"/>
  <g stroke="#000" stroke-opacity="0.18" stroke-width="0.8">${[0,1,2,3,4,5,6,7,8,9,10].map($=>`<line x1="14" x2="22" y1="${80+$*20}" y2="${80+$*20}"/><line x1="166" x2="174" y1="${80+$*20}" y2="${80+$*20}"/>`).join("")}</g>
  <rect x="38" y="50" width="112" height="40" rx="4" fill="#161a20"/>${C}
  <rect x="44" y="88" width="100" height="126" rx="8" fill="#1d2128"/>
  <rect x="53" y="100" width="82" height="88" rx="6" fill="url(#spGlass)"/>
  <g clip-path="url(#spGlassClip)">
    ${r?'<rect x="53" y="100" width="82" height="88" fill="url(#spGlow)"/>':""}
    ${v}
    <path d="M60 104 L80 104 L58 150 Z" fill="#fff" opacity="0.06"/>
  </g>
  <rect x="53" y="100" width="82" height="88" rx="6" fill="none" stroke="#5b626e" stroke-width="1.5"/>
  <rect x="141" y="130" width="6" height="30" rx="3" fill="#b9bec8"/>
  <rect x="38" y="216" width="112" height="32" rx="6" fill="#1a1e24"/>
  <circle cx="66" cy="232" r="8" fill="#9aa1ad"/><circle cx="66" cy="232" r="8" fill="none" stroke="#5b626e"/><line x1="66" y1="232" x2="66" y2="226" stroke="#20242b" stroke-width="2" stroke-linecap="round"/>
  <circle cx="122" cy="232" r="8" fill="#9aa1ad"/><circle cx="122" cy="232" r="8" fill="none" stroke="#5b626e"/><line x1="122" y1="232" x2="127" y2="228" stroke="#20242b" stroke-width="2" stroke-linecap="round"/>
  <rect x="82" y="222" width="24" height="20" rx="3" fill="${g}"/>
  ${x?`<text x="94" y="236" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#10141a">${x}</text>`:""}
  <rect x="56" y="254" width="76" height="30" rx="5" fill="#222730"/>
  <rect x="62" y="262" width="64" height="4" rx="2" fill="#0f1217"/>
  <rect x="82" y="270" width="24" height="5" rx="2.5" fill="#9aa1ad"/>
  <rect x="20" y="294" width="148" height="12" rx="5" fill="#161a20"/>
  ${n?'<rect x="6" y="42" width="176" height="264" rx="14" fill="#9aa1ad" opacity="0.55"/><text x="94" y="190" text-anchor="middle" font-family="sans-serif" font-size="64" font-weight="700" fill="#fff">?</text>':""}
</svg>`}var G=A`
  :host {
    position: fixed;
    inset: 0;
    z-index: 10000;
    color: var(--primary-text-color, #212121);
    font-family: var(--paper-font-body1_-_font-family, Roboto, Helvetica, Arial, sans-serif);
  }
  .backdrop {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.55);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
    box-sizing: border-box;
  }
  .panel {
    background: var(--card-background-color, #fff);
    border-radius: 16px;
    width: 100%;
    max-width: 560px;
    max-height: min(88vh, 780px);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
  }
  .panel.wide {
    max-width: 760px;
  }
  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 16px;
    border-bottom: 1px solid var(--divider-color, #e0e0e0);
  }
  .title {
    font-size: 1.1rem;
    font-weight: 600;
  }
  .x {
    border: 0;
    background: transparent;
    color: inherit;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 6px 10px;
    border-radius: 8px;
  }
  .x:hover {
    background: var(--secondary-background-color, #f0f0f0);
  }
  .body {
    overflow: auto;
    padding: 12px 16px 16px;
  }
  .foot {
    display: flex;
    gap: 8px;
    justify-content: flex-end;
    padding: 10px 16px;
    border-top: 1px solid var(--divider-color, #e0e0e0);
  }
  .btn {
    border: 1px solid var(--divider-color, #ccc);
    background: var(--secondary-background-color, #f4f4f4);
    color: inherit;
    border-radius: 10px;
    padding: 8px 14px;
    font-size: 0.9rem;
    cursor: pointer;
  }
  .btn.primary {
    background: var(--primary-color, #03a9f4);
    color: #fff;
    border-color: transparent;
  }
  .btn:disabled {
    opacity: 0.5;
    cursor: default;
  }
  .err {
    margin-top: 10px;
    padding: 8px 10px;
    border-radius: 8px;
    background: rgba(220, 38, 38, 0.12);
    color: #b91c1c;
    font-size: 0.85rem;
  }
  .ok {
    margin-top: 10px;
    padding: 8px 10px;
    border-radius: 8px;
    background: rgba(22, 163, 74, 0.12);
    color: #166534;
    font-size: 0.85rem;
  }
  .empty {
    padding: 24px 8px;
    text-align: center;
    color: var(--secondary-text-color, #727272);
  }
`;var ot=class extends w{constructor(){super(...arguments);this._onKey=e=>{e.key==="Escape"&&this._close()}}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this._onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this._onKey)}_close(){this.dispatchEvent(new CustomEvent("closed")),this.remove()}render(){if(!this.hass||!this.info)return u;let e=this.info.entities,s=e.stato?this.hass.states[e.stato]:void 0,o=it(s?.state??this.info.state),n=s?.attributes??{},r=n.da??this.info.since,l=n.interruttore==="acceso"?!0:n.interruttore==="spento"?!1:null,a=d=>e[d]?D(this.hass.states[e[d]]?.state):null,h=pe({state:o,power:D(n.potenza)??this.info.power,sinceMs:r?Date.parse(r):null,switchOn:l,blocked:n.azioni_bloccate===!0,ignitionsToday:a("accensioni_oggi"),hoursToday:a("ore_in_funzione_oggi"),lastOn:null,lastOff:null,settings:this.info.settings},Date.now());return f`
      <div class="backdrop" @click=${d=>d.target===d.currentTarget&&this._close()}>
        <div class="panel" role="dialog" aria-modal="true" aria-label="Stato stufa">
          <div class="head">
            <div class="title">Stato della stufa</div>
            <button class="x" aria-label="Chiudi" @click=${()=>this._close()}>✕</button>
          </div>
          <div class="body">
            <div class="badge ${ut[o]}">${L[o]}</div>
            ${h.map(d=>f`<div class="line ${d.tone}"><ha-icon icon=${d.icon}></ha-icon><span>${d.text}</span></div>`)}
          </div>
        </div>
      </div>
    `}static{this.styles=[G,A`
      .badge {
        display: inline-block;
        padding: 4px 12px;
        border-radius: 999px;
        font-weight: 600;
        font-size: 0.85rem;
        margin-bottom: 10px;
        background: var(--secondary-background-color, #eee);
      }
      .badge.success { background: rgba(22, 163, 74, 0.18); color: #166534; }
      .badge.warning { background: rgba(245, 158, 11, 0.2); color: #92400e; }
      .badge.accent { background: rgba(96, 165, 250, 0.2); color: #1e40af; }
      .badge.danger { background: rgba(220, 38, 38, 0.15); color: #b91c1c; }
      .line {
        display: flex;
        gap: 10px;
        align-items: flex-start;
        padding: 9px 0;
        border-top: 1px solid var(--divider-color, #eee);
        line-height: 1.35;
        font-size: 0.93rem;
      }
      .line ha-icon { --mdc-icon-size: 20px; flex: none; margin-top: 1px; color: var(--secondary-text-color, #727272); }
      .line.ok ha-icon { color: #16a34a; }
      .line.warn ha-icon { color: #d97706; }
      .line.bad ha-icon { color: #dc2626; }
    `]}};m([S({attribute:!1})],ot.prototype,"hass",2),m([S({attribute:!1})],ot.prototype,"info",2);customElements.get("stufa-info-dialog")||customElements.define("stufa-info-dialog",ot);var Rt=[{id:"6h",label:"6 ore",ms:6*36e5},{id:"24h",label:"24 ore",ms:24*36e5},{id:"3d",label:"3 giorni",ms:3*864e5},{id:"7d",label:"7 giorni",ms:7*864e5}],q=220,F=10,z=40,He=22,mt=12,k=class extends w{constructor(){super(...arguments);this._range="24h";this._loading=!1;this._error="";this._w=640;this._hover=null;this._values=[];this._segs=[];this._t0=0;this._t1=0;this._n=240;this._raw=[];this._rawStates=[];this._seq=0;this._onKey=e=>{e.key==="Escape"&&this._close()}}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this._onKey),this._timer=window.setInterval(()=>void this._load(),6e4),this._load()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this._onKey),this._ro?.disconnect(),this._timer&&window.clearInterval(this._timer)}firstUpdated(){let e=this.renderRoot.querySelector(".chartwrap");e&&(this._ro=new ResizeObserver(s=>{let o=Math.floor(s[0]?.contentRect.width??640);o>100&&Math.abs(o-this._w)>2&&(this._w=o,this._recompute())}),this._ro.observe(e))}_close(){this.dispatchEvent(new CustomEvent("closed")),this.remove()}async _history(e,s,o){return this.hass.callWS({type:"history/history_during_period",start_time:new Date(s).toISOString(),end_time:new Date(o).toISOString(),entity_ids:e,include_start_time_state:!0,significant_changes_only:!1,minimal_response:!0,no_attributes:!0})}async _load(){if(!this.hass||!this.info)return;let e=++this._seq,s=Rt.find(l=>l.id===this._range)??Rt[1],o=Date.now(),n=o-s.ms,r=[this.info.sources.power_sensor];this.info.entities.stato&&r.push(this.info.entities.stato),this._loading=!0;try{let l=await this._history(r,n,o);if(e!==this._seq)return;this._t0=n,this._t1=o,this._raw=ie(l[this.info.sources.power_sensor]),this._rawStates=this.info.entities.stato?l[this.info.entities.stato]??[]:[],this._error="",this._recompute()}catch(l){e===this._seq&&(this._error=`Impossibile leggere lo storico: ${l instanceof Error?l.message:String(l)}`)}finally{e===this._seq&&(this._loading=!1)}}_recompute(){this._t1&&(this._n=Math.max(60,Math.min(480,Math.floor((this._w-z-8)/2))),this._values=ne(this._raw,this._t0,this._t1,this._n,30*6e4),this._segs=ft(this._rawStates,this._t0,this._t1))}_setRange(e){this._range=e,this._hover=null,this._load()}_move(e){let o=e.currentTarget.getBoundingClientRect(),n=e.clientX-o.left,r=Math.round((n-z)/(this._w-z-8)*(this._n-1));this._hover=r>=0&&r<this._n?r:null}render(){if(!this.info)return u;let e=this.info.settings,s=this._values.filter(p=>p!==null),o=Math.max(e.ignition_above*1.1,...s.length?s:[0]),n=re(0,o,5),r=this._w,l=r-z-8,a=F+q+mt+He+6,h=p=>z+(this._n<=1?0:p/(this._n-1)*l),d=p=>F+q-(p-n.min)/(n.max-n.min||1)*q,c=p=>z+(p-this._t0)/(this._t1-this._t0||1)*l,v=[{v:e.off_below,c:y.spenta,l:"spenta"},{v:e.shutdown_min,c:y.spegnimento,l:"spegnimento"},{v:e.shutdown_max,c:y.spegnimento,l:""},{v:e.ignition_above,c:y.accensione,l:"accensione"}],g=this._hover,x=g!==null&&this._n>1?this._t0+g/(this._n-1)*(this._t1-this._t0):null,C=g!==null?this._values[g]:null,$=x!==null?oe(this._segs,x):null;return f`
      <div class="backdrop" @click=${p=>p.target===p.currentTarget&&this._close()}>
        <div class="panel wide" role="dialog" aria-modal="true" aria-label="Grafici stufa">
          <div class="head">
            <div class="title">Grafici della stufa</div>
            <button class="x" aria-label="Chiudi" @click=${()=>this._close()}>✕</button>
          </div>
          <div class="body">
            <div class="ranges">
              ${Rt.map(p=>f`<button class=${p.id===this._range?"chip on":"chip"} @click=${()=>this._setRange(p.id)}>${p.label}</button>`)}
              ${this._loading?f`<span class="load">aggiorno…</span>`:u}
            </div>
            <div class="chartwrap">
              <div class="tip">
                ${x!==null?f`<b>${ce(x)}</b> · ${C!==null?`${_(C,0)} W`:"nessun dato"}${$?f` · <span style="color:${y[$]==="transparent"?"inherit":y[$]}">${L[$]}</span>`:u}`:f`<span class="muted">Passa sopra il grafico per leggere i valori</span>`}
              </div>
              <svg width=${r} height=${a} viewBox="0 0 ${r} ${a}" @pointermove=${p=>this._move(p)} @pointerleave=${()=>this._hover=null}>
                ${n.ticks.map(p=>U`
                  <line x1=${z} x2=${r-8} y1=${d(p)} y2=${d(p)} stroke="var(--divider-color,#ddd)" stroke-width="1" />
                  <text x=${z-6} y=${d(p)+4} text-anchor="end" class="ax">${_(p)}</text>`)}
                ${v.map(p=>U`<line x1=${z} x2=${r-8} y1=${d(p.v)} y2=${d(p.v)} stroke=${p.c} stroke-width="1.2" stroke-dasharray="5 4" opacity="0.9" />
                  ${p.l?U`<text x=${r-10} y=${d(p.v)-3} text-anchor="end" class="th" fill=${p.c}>${p.l} ${_(p.v,p.v%1?1:0)} W</text>`:u}`)}
                <path d=${de(this._values,h,d)} fill="none" stroke="var(--primary-color,#03a9f4)" stroke-width="1.8" stroke-linejoin="round" />
                ${g!==null&&C!==null?U`<line x1=${h(g)} x2=${h(g)} y1=${F} y2=${F+q} stroke="var(--secondary-text-color,#888)" stroke-width="1" /><circle cx=${h(g)} cy=${d(C)} r="4" fill="var(--primary-color,#03a9f4)" />`:u}
                ${this._segs.map(p=>U`<rect x=${c(p.from)} y=${F+q+4} width=${Math.max(1,c(p.to)-c(p.from))} height=${mt} fill=${y[p.state]==="transparent"?"#9aa1ad":y[p.state]} opacity=${p.state==="non_disponibile"?.35:.9} />`)}
                ${le(this._t0,this._t1).map(p=>U`
                  <line x1=${c(p.t)} x2=${c(p.t)} y1=${F+q+mt+4} y2=${F+q+mt+8} stroke="var(--secondary-text-color,#888)" />
                  <text x=${c(p.t)} y=${a-4} text-anchor="middle" class=${p.major?"ax maj":"ax"}>${p.label}</text>`)}
              </svg>
              <div class="legend">
                ${["spenta","accensione","accesa","spegnimento"].map(p=>f`<span><i style="background:${y[p]}"></i>${L[p]}</span>`)}
              </div>
            </div>
            ${this._error?f`<div class="err">${this._error}</div>`:u}
            ${!this._loading&&!this._error&&s.length===0?f`<div class="empty">Nessun dato di potenza nel periodo.</div>`:u}
          </div>
        </div>
      </div>
    `}static{this.styles=[G,A`
      .ranges { display: flex; gap: 6px; flex-wrap: wrap; align-items: center; margin-bottom: 8px; }
      .chip { border: 1px solid var(--divider-color, #ccc); background: transparent; color: inherit; border-radius: 999px; padding: 5px 12px; font-size: 0.85rem; cursor: pointer; }
      .chip.on { background: var(--primary-color, #03a9f4); color: #fff; border-color: transparent; }
      .load { font-size: 0.8rem; color: var(--secondary-text-color, #727272); }
      .chartwrap { width: 100%; }
      svg { display: block; touch-action: pan-y; }
      .ax { font-size: 10px; fill: var(--secondary-text-color, #727272); }
      .ax.maj { font-weight: 700; }
      .th { font-size: 10px; }
      .tip { min-height: 22px; font-size: 0.88rem; margin-bottom: 4px; }
      .muted { color: var(--secondary-text-color, #727272); }
      .legend { display: flex; gap: 14px; flex-wrap: wrap; font-size: 0.8rem; margin-top: 6px; color: var(--secondary-text-color, #727272); }
      .legend i { display: inline-block; width: 10px; height: 10px; border-radius: 2px; margin-right: 5px; }
    `]}};m([S({attribute:!1})],k.prototype,"hass",2),m([S({attribute:!1})],k.prototype,"info",2),m([b()],k.prototype,"_range",2),m([b()],k.prototype,"_loading",2),m([b()],k.prototype,"_error",2),m([b()],k.prototype,"_w",2),m([b()],k.prototype,"_hover",2),m([b()],k.prototype,"_values",2),m([b()],k.prototype,"_segs",2);customElements.get("stufa-charts-dialog")||customElements.define("stufa-charts-dialog",k);var Ie={soglie:[{key:"shutdown_needs_switch_off",label:"Spegnimento solo con la presa spenta",hint:"La fascia di spegnimento vale solo se l'interruttore della presa \xE8 spento; con la presa accesa la stessa potenza vuol dire 'in funzione'."}],comportamento:[{key:"sync_switch_on",label:"Accendi la presa quando la stufa parte",hint:"Se la stufa si accende da sola, l'interruttore si allinea."},{key:"sync_switch_off",label:"Spegni la presa a stufa spenta",hint:"Dopo il periodo di grazia la presa si spegne quando la stufa risulta spenta."},{key:"show_switch_button",label:"Pulsante di accensione sulla scheda",hint:"Mostra il pulsante per accendere e spegnere la presa."}],notifiche:[{key:"notify_events",label:"Avvisa su accensione e spegnimento",hint:""},{key:"notify_sensor_problem",label:"Avvisa se il sensore non risponde",hint:""}]},E=class extends w{constructor(){super(...arguments);this._busy=!1;this._error="";this._msg="";this._suggest=null;this._onKey=e=>{e.key==="Escape"&&this._close()}}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this._onKey),this._s={...this.info.settings},this._src={power_sensor:this.info.sources.power_sensor??"",switch:this.info.sources.switch??"",energy_sensor:this.info.sources.energy_sensor??""}}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this._onKey)}_close(){this.dispatchEvent(new CustomEvent("closed")),this.remove()}_set(e,s){this._s={...this._s,[e]:s},this._msg=""}_typed(e,s){let o=s.target.value.replace(",","."),n=Number(o);if(o.trim()===""||!Number.isFinite(n)){s.target.value=String(this._s[e.key]);return}this._set(e.key,Ot(n,e.min,e.max,e.step))}_step(e,s){this._set(e.key,Ot(this._s[e.key]+s*e.step,e.min,e.max,e.step))}async _suggestFromHistory(){this._busy=!0,this._error="";try{this._suggest=await this.hass.callWS({type:"stufa_pellet/suggest",entry_id:this.info.entry_id,days:14})}catch(e){this._error=`Non riesco a leggere lo storico: ${e instanceof Error?e.message:String(e)}`}finally{this._busy=!1}}_applySuggestion(){let e=this._suggest?.suggestion;if(!e)return;let s={...this._s};for(let o of["off_below","ignition_above","shutdown_min","shutdown_max"]){let n=e[o];typeof n=="number"&&(s[o]=n)}this._s=s,this._suggest=null,this._msg="Soglie proposte applicate: controlla e premi Salva."}async _save(){let e=zt(this._s);if(e.length){this._error=e[0];return}if(!this._src.power_sensor){this._error="Il sensore di potenza \xE8 obbligatorio.";return}this._busy=!0,this._error="";try{await this.hass.callWS({type:"stufa_pellet/update",entry_id:this.info.entry_id,settings:this._s,sources:this._src}),this.dispatchEvent(new CustomEvent("saved")),this._close()}catch(s){this._error=`Impossibile salvare: ${s instanceof Error?s.message:String(s)}`}finally{this._busy=!1}}_entityRow(e,s,o,n){let r=`dl-${s}`,l=Object.keys(this.hass.states).filter(a=>o.includes(a.split(".")[0]));return f`
      <div class="row col">
        <div class="lab">${e}${n?f` <span class="req">obbligatorio</span>`:f` <span class="opt">facoltativo</span>`}</div>
        <input
          class="txt"
          list=${r}
          .value=${this._src[s]}
          placeholder=${o.join(" / ")+".nome"}
          @change=${a=>{this._src={...this._src,[s]:a.target.value.trim()}}}
        />
        <datalist id=${r}>${l.map(a=>f`<option value=${a}></option>`)}</datalist>
        ${this._src[s]&&!this.hass.states[this._src[s]]?f`<div class="hint warn">Entità non trovata in Home Assistant.</div>`:u}
      </div>
    `}_numRow(e){return f`
      <div class="row">
        <div class="t"><div class="lab">${e.label}</div><div class="hint">${e.hint}</div></div>
        <div class="num">
          <button class="st" aria-label="Diminuisci" @click=${()=>this._step(e,-1)}>−</button>
          <input type="text" inputmode="decimal" .value=${String(this._s[e.key])} aria-label=${e.label} @change=${s=>this._typed(e,s)} />
          <span class="unit">${e.unit}</span>
          <button class="st" aria-label="Aumenta" @click=${()=>this._step(e,1)}>+</button>
        </div>
      </div>
    `}_toggleRows(e){return Ie[e].map(s=>f`
        <div class="row">
          <div class="t"><div class="lab">${s.label}</div>${s.hint?f`<div class="hint">${s.hint}</div>`:u}</div>
          <button class=${this._s[s.key]?"sw on":"sw"} role="switch" aria-checked=${this._s[s.key]?"true":"false"} aria-label=${s.label} @click=${()=>this._set(s.key,!this._s[s.key])}><span class="knob"></span></button>
        </div>
      `)}render(){if(!this.hass||!this._s)return u;let e=zt(this._s),s=this._suggest?.suggestion??null;return f`
      <div class="backdrop" @click=${o=>o.target===o.currentTarget&&this._close()}>
        <div class="panel" role="dialog" aria-modal="true" aria-label="Preferenze stufa">
          <div class="head">
            <div class="title">Preferenze della stufa</div>
            <button class="x" aria-label="Chiudi" @click=${()=>this._close()}>✕</button>
          </div>
          <div class="body">
            <div class="sec">Sensori</div>
            ${this._entityRow("Sensore di potenza (W)","power_sensor",["sensor"],!0)}
            ${this._entityRow("Interruttore della presa","switch",["switch"],!1)}
            ${this._entityRow("Contatore di energia (kWh)","energy_sensor",["sensor"],!1)}

            <div class="sec">Soglie di potenza</div>
            ${he.map(o=>this._numRow(o))}
            ${this._toggleRows("soglie")}
            <div class="row col">
              <button class="btn" ?disabled=${this._busy} @click=${()=>void this._suggestFromHistory()}>Suggerisci le soglie dallo storico</button>
              ${this._suggest?s?f`<div class="sugg">
                      Dai ${_(this._suggest.samples)} campioni degli ultimi ${this._suggest.days} giorni:
                      ${Object.entries(s).map(([o,n])=>f`<span class="pill">${o.replaceAll("_"," ")} ${_(n,1)} W</span>`)}
                      <div><button class="btn primary" @click=${()=>this._applySuggestion()}>Usa questi valori</button></div>
                    </div>`:f`<div class="hint">Lo storico non basta per proporre soglie: accendi e spegni la stufa almeno una volta con il sensore attivo.</div>`:u}
            </div>

            <div class="sec">Comportamento</div>
            ${ue.map(o=>this._numRow(o))}
            ${this._toggleRows("comportamento")}

            <div class="sec">Notifiche</div>
            ${this._toggleRows("notifiche")}
            <div class="row col">
              <div class="lab">Servizio di notifica</div>
              <input class="txt" .value=${this._s.notify_service} placeholder="notify.mobile_app_telefono (vuoto = notifica di Home Assistant)" @change=${o=>this._set("notify_service",o.target.value.trim())} />
            </div>

            <div class="sec">Aspetto</div>
            <div class="row col">
              <div class="lab">Colore delle ceramiche</div>
              <div class="tiles">
                ${Object.entries(st).map(([o,[n,r]])=>f`<button class=${this._s.tile_color===o?"tile on":"tile"} style="background:linear-gradient(135deg,${r},${n})" aria-label=${o} @click=${()=>this._set("tile_color",o)}><span>${o}</span></button>`)}
              </div>
            </div>

            ${e.length?f`<div class="err">${e[0]}</div>`:u}
            ${this._error?f`<div class="err">${this._error}</div>`:u}
            ${this._msg?f`<div class="ok">${this._msg}</div>`:u}
          </div>
          <div class="foot">
            <button class="btn" @click=${()=>this._close()}>Annulla</button>
            <button class="btn primary" ?disabled=${this._busy||e.length>0} @click=${()=>void this._save()}>Salva</button>
          </div>
        </div>
      </div>
    `}static{this.styles=[G,A`
      .sec { font-weight: 600; font-size: 0.8rem; letter-spacing: 0.06em; text-transform: uppercase; color: var(--secondary-text-color, #727272); margin: 16px 0 4px; }
      .sec:first-child { margin-top: 0; }
      .row { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 8px 0; border-top: 1px solid var(--divider-color, #eee); }
      .row.col { flex-direction: column; align-items: stretch; gap: 6px; }
      .t { flex: 1; min-width: 0; }
      .lab { font-size: 0.93rem; }
      .hint { font-size: 0.78rem; color: var(--secondary-text-color, #727272); margin-top: 2px; line-height: 1.3; }
      .hint.warn { color: #b45309; }
      .req, .opt { font-size: 0.7rem; color: var(--secondary-text-color, #727272); }
      .txt { width: 100%; box-sizing: border-box; padding: 8px 10px; border-radius: 8px; border: 1px solid var(--divider-color, #ccc); background: var(--card-background-color, #fff); color: inherit; font-size: 0.9rem; }
      .num { display: flex; align-items: center; gap: 4px; flex: none; }
      .num input { width: 62px; text-align: center; padding: 6px 4px; border-radius: 8px; border: 1px solid var(--divider-color, #ccc); background: var(--card-background-color, #fff); color: inherit; font-size: 0.95rem; }
      .unit { width: 18px; font-size: 0.8rem; color: var(--secondary-text-color, #727272); }
      .st { width: 30px; height: 30px; border-radius: 8px; border: 1px solid var(--divider-color, #ccc); background: var(--secondary-background-color, #f4f4f4); color: inherit; font-size: 1.1rem; cursor: pointer; }
      .sw { flex: none; width: 44px; height: 26px; border-radius: 13px; border: 0; background: var(--disabled-color, #bdbdbd); position: relative; cursor: pointer; transition: background 0.2s; }
      .sw.on { background: var(--primary-color, #03a9f4); }
      .sw .knob { position: absolute; top: 3px; left: 3px; width: 20px; height: 20px; border-radius: 50%; background: #fff; transition: transform 0.2s; }
      .sw.on .knob { transform: translateX(18px); }
      .tiles { display: flex; gap: 10px; }
      .tile { flex: 1; height: 44px; border-radius: 10px; border: 2px solid transparent; cursor: pointer; color: #fff; font-size: 0.8rem; text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5); text-transform: capitalize; }
      .tile.on { border-color: var(--primary-text-color, #222); }
      .sugg { font-size: 0.85rem; line-height: 1.9; }
      .pill { display: inline-block; padding: 1px 8px; margin: 0 4px 0 0; border-radius: 999px; background: var(--secondary-background-color, #eee); font-size: 0.78rem; }
    `]}};m([S({attribute:!1})],E.prototype,"hass",2),m([S({attribute:!1})],E.prototype,"info",2),m([b()],E.prototype,"_s",2),m([b()],E.prototype,"_src",2),m([b()],E.prototype,"_busy",2),m([b()],E.prototype,"_error",2),m([b()],E.prototype,"_msg",2),m([b()],E.prototype,"_suggest",2);customElements.get("stufa-settings-dialog")||customElements.define("stufa-settings-dialog",E);var Lt=24*36e5,O=class extends w{constructor(){super(...arguments);this._config={type:"custom:stufa-pellet-card"};this._info=null;this._error="";this._segs=[];this._now=Date.now();this._loadedAt=0;this._timelineAt=0;this._loading=!1;this._syncers=new Set}setConfig(e){this._config={...e},this._info=null,this._loadedAt=0}getCardSize(){return 6}static getStubConfig(){return{type:"custom:stufa-pellet-card"}}connectedCallback(){super.connectedCallback(),this._tick=window.setInterval(()=>this._now=Date.now(),15e3)}disconnectedCallback(){super.disconnectedCallback(),this._tick&&window.clearInterval(this._tick)}updated(){this.hass&&!this._loading&&(!this._info||Date.now()-this._loadedAt>5*6e4)&&this._loadInfo(),this._info&&Date.now()-this._timelineAt>5*6e4&&this._loadTimeline()}async _loadInfo(){this._loading=!0;try{let e={type:"stufa_pellet/info"};this._config.entry_id&&(e.entry_id=this._config.entry_id),this._info=await this.hass.callWS(e),this._error=""}catch(e){let s=e instanceof Error?e.message:e?.message??String(e);this._error=`Stufa non configurata o integrazione non caricata (${s}).`}finally{this._loadedAt=Date.now(),this._loading=!1}}async _loadTimeline(){let e=this._info?.entities.stato;if(!e)return;this._timelineAt=Date.now();let s=Date.now(),o=s-Lt;try{let n=await this.hass.callWS({type:"history/history_during_period",start_time:new Date(o).toISOString(),end_time:new Date(s).toISOString(),entity_ids:[e],include_start_time_state:!0,significant_changes_only:!1,minimal_response:!0,no_attributes:!0});this._segs=ft(n[e],o,s)}catch{this._timelineAt=0}}_open(e){if(!this._info)return;let s=document.createElement(e);s.hass=this.hass,s.info=this._info,s.addEventListener("saved",()=>{this._loadedAt=0,this._timelineAt=0,this._loadInfo()}),document.body.appendChild(s);let o=()=>{s.isConnected&&(s.hass=this.hass)};this._syncers.add(o),s.addEventListener("closed",()=>this._syncers.delete(o))}willUpdate(){for(let e of this._syncers)e()}_toggleSwitch(){let e=this._info?.sources.switch;e&&this.hass.callService("homeassistant","toggle",{entity_id:e})}_live(){let e=this._info,s=e.entities,o=s.stato?this.hass.states[s.stato]:void 0,n=o?.attributes??{},r=it(o?.state??e.state),l=D(n.potenza)??D(this.hass.states[e.sources.power_sensor]?.state),a=n.da??e.since,h=e.sources.switch?this.hass.states[e.sources.switch]?.state:void 0,d=c=>s[c]?D(this.hass.states[s[c]]?.state):null;return{state:r,power:l,sinceMs:a?Date.parse(a):null,switchOn:h==="on"?!0:h==="off"?!1:null,blocked:n.azioni_bloccate===!0,ignitions:d("accensioni_oggi"),hours:d("ore_in_funzione_oggi"),energy:d("energia_oggi")}}_tile(e,s,o,n=""){return f`<div class="tile"><ha-icon icon=${e}></ha-icon><div class="v">${o}</div><div class="l">${s}</div>${n?f`<div class="s">${n}</div>`:u}</div>`}render(){if(!this.hass)return u;let e=this._config.title??this._info?.title??"Stufa a pellet";if(this._error&&!this._info)return f`<ha-card><div class="pad"><div class="title">${e}</div><div class="errbox">${this._error}</div></div></ha-card>`;if(!this._info)return f`<ha-card><div class="pad"><div class="title">${e}</div><div class="muted">Carico…</div></div></ha-card>`;let s=this._info,o=s.settings,n=this._live(),r=ee(n.power,o),l=ut[n.state],a=n.sinceMs!==null?Mt(this._now-n.sinceMs):"",h=this._now-Lt,d=c=>Math.min(100,Math.max(0,(c-h)/Lt*100));return f`
      <ha-card>
        <div class="pad">
          <div class="top">
            <div class="title">${e}</div>
            <div class="pill ${l}"><i></i>${L[n.state]}${a&&n.state!=="non_disponibile"?f`<span class="since"> · da ${a}</span>`:u}</div>
          </div>

          <div class="main">
            <div class="stove">${te(fe(n.state,o.tile_color))}</div>
            <div class="side">
              <div class="power">
                <div class="big">${_(n.power,n.power!==null&&n.power%1?1:0)}<span> W</span></div>
                <div class="muted">potenza della presa</div>
              </div>
              <div class="gauge" aria-label="Potenza e soglie">
                <div class="bar">
                  ${r.zones.map(c=>f`<div class="zone" style="left:${c.from}%;width:${Math.max(.8,c.to-c.from)}%;background:${c.color}" title=${c.label}></div>`)}
                  ${r.marker!==null?f`<div class="mark" style="left:${r.marker}%"></div>`:u}
                </div>
                <div class="ticks">${r.ticks.map(c=>f`<span style="left:${c.at}%">${c.label}</span>`)}</div>
              </div>
              <div class="tiles">
                ${this._tile("mdi:fire-circle","Accensioni oggi",n.ignitions!==null?_(n.ignitions):"\u2013")}
                ${this._tile("mdi:clock-outline","In funzione oggi",n.hours!==null?`${_(n.hours,1)} h`:"\u2013")}
                ${this._tile("mdi:power-plug","Presa",n.switchOn===null?"\u2013":n.switchOn?"Accesa":"Spenta",n.blocked?"azioni bloccate":"")}
                ${n.energy!==null?this._tile("mdi:lightning-bolt","Energia oggi",`${_(n.energy,2)} kWh`):u}
              </div>
            </div>
          </div>

          <div class="tl">
            <div class="tlh"><span>Ultime 24 ore</span><span class="muted">${this._segs.length===0?"nessun dato":""}</span></div>
            <div class="tlbar">
              ${this._segs.map(c=>f`<div class="seg" title=${L[c.state]} style="left:${d(c.from)}%;width:${Math.max(.3,d(c.to)-d(c.from))}%;background:${y[c.state]==="transparent"?"#9aa1ad":y[c.state]}"></div>`)}
            </div>
            <div class="tlt"><span>24 h fa</span><span>12 h fa</span><span>ora</span></div>
          </div>

          <div class="actions">
            <button class="btn" @click=${()=>this._open("stufa-info-dialog")}><ha-icon icon="mdi:information-outline"></ha-icon>Stato</button>
            <button class="btn" @click=${()=>this._open("stufa-charts-dialog")}><ha-icon icon="mdi:chart-line"></ha-icon>Grafici</button>
            ${o.show_switch_button&&s.sources.switch?f`<button class=${n.switchOn?"btn plug on":"btn plug"} @click=${()=>this._toggleSwitch()} aria-pressed=${n.switchOn?"true":"false"}><ha-icon icon="mdi:power-plug"></ha-icon>${n.switchOn?"Presa accesa":"Presa spenta"}</button>`:u}
            <span class="grow"></span>
            <button class="btn icon" aria-label="Preferenze" @click=${()=>this._open("stufa-settings-dialog")}><ha-icon icon="mdi:cog"></ha-icon></button>
          </div>
        </div>
      </ha-card>
    `}static{this.styles=A`
    :host { display: block; }
    ha-card { overflow: hidden; }
    .pad { padding: 14px 16px 16px; }
    .top { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-bottom: 8px; flex-wrap: wrap; }
    .title { font-size: 1.15rem; font-weight: 600; }
    .muted { color: var(--secondary-text-color, #727272); font-size: 0.8rem; }
    .errbox { margin-top: 8px; padding: 10px; border-radius: 10px; background: rgba(220, 38, 38, 0.1); color: #b91c1c; font-size: 0.9rem; }
    .pill { display: inline-flex; align-items: center; gap: 7px; padding: 5px 12px; border-radius: 999px; font-size: 0.85rem; font-weight: 600; background: var(--secondary-background-color, #eee); }
    .pill i { width: 9px; height: 9px; border-radius: 50%; background: #9aa1ad; }
    .pill .since { font-weight: 400; opacity: 0.8; }
    .pill.success { background: rgba(22, 163, 74, 0.16); color: #166534; } .pill.success i { background: #16a34a; }
    .pill.warning { background: rgba(245, 158, 11, 0.2); color: #92400e; } .pill.warning i { background: #f59e0b; }
    .pill.accent { background: rgba(96, 165, 250, 0.2); color: #1e40af; } .pill.accent i { background: #60a5fa; }
    .pill.danger { background: rgba(220, 38, 38, 0.14); color: #b91c1c; } .pill.danger i { background: #dc2626; }
    .main { display: flex; gap: 16px; align-items: stretch; }
    .stove { flex: 0 0 34%; max-width: 190px; min-width: 110px; }
    .stove svg { width: 100%; height: auto; display: block; }
    .side { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 12px; justify-content: center; }
    .big { font-size: 2.4rem; font-weight: 700; line-height: 1; }
    .big span { font-size: 1rem; font-weight: 500; color: var(--secondary-text-color, #727272); }
    .gauge { position: relative; padding-bottom: 18px; }
    .bar { position: relative; height: 12px; border-radius: 6px; background: var(--secondary-background-color, #e6e6e6); overflow: hidden; }
    .zone { position: absolute; top: 0; bottom: 0; opacity: 0.55; }
    .mark { position: absolute; top: -2px; bottom: -2px; width: 4px; margin-left: -2px; border-radius: 2px; background: var(--primary-text-color, #212121); }
    .ticks { position: absolute; left: 0; right: 0; top: 16px; height: 14px; }
    .ticks span { position: absolute; transform: translateX(-50%); font-size: 0.66rem; color: var(--secondary-text-color, #727272); white-space: nowrap; }
    .ticks span:first-child { transform: none; }
    .ticks span:last-child { transform: translateX(-100%); }
    .tiles { display: grid; grid-template-columns: repeat(auto-fit, minmax(92px, 1fr)); gap: 8px; }
    .tile { padding: 8px 10px; border-radius: 12px; background: var(--secondary-background-color, #f2f2f2); }
    .tile ha-icon { --mdc-icon-size: 18px; color: var(--secondary-text-color, #727272); }
    .tile .v { font-size: 1.05rem; font-weight: 600; margin-top: 2px; }
    .tile .l { font-size: 0.72rem; color: var(--secondary-text-color, #727272); }
    .tile .s { font-size: 0.68rem; color: #b45309; margin-top: 2px; }
    .tl { margin-top: 14px; }
    .tlh { display: flex; justify-content: space-between; font-size: 0.8rem; margin-bottom: 4px; }
    .tlbar { position: relative; height: 16px; border-radius: 6px; background: var(--secondary-background-color, #e6e6e6); overflow: hidden; }
    .seg { position: absolute; top: 0; bottom: 0; opacity: 0.9; }
    .tlt { display: flex; justify-content: space-between; font-size: 0.68rem; color: var(--secondary-text-color, #727272); margin-top: 3px; }
    .actions { display: flex; gap: 8px; margin-top: 14px; flex-wrap: wrap; align-items: center; }
    .grow { flex: 1; }
    .btn { display: inline-flex; align-items: center; gap: 6px; border: 1px solid var(--divider-color, #ccc); background: var(--secondary-background-color, #f4f4f4); color: inherit; border-radius: 12px; padding: 8px 14px; font-size: 0.88rem; cursor: pointer; }
    .btn ha-icon { --mdc-icon-size: 18px; }
    .btn.plug.on { background: rgba(22, 163, 74, 0.16); border-color: #16a34a; color: #166534; }
    .btn.icon { padding: 8px 10px; }
    @media (max-width: 420px) {
      .main { flex-direction: column; align-items: center; }
      .stove { flex: none; width: 52%; }
      .side { width: 100%; }
    }
  `}};m([S({attribute:!1})],O.prototype,"hass",2),m([b()],O.prototype,"_config",2),m([b()],O.prototype,"_info",2),m([b()],O.prototype,"_error",2),m([b()],O.prototype,"_segs",2),m([b()],O.prototype,"_now",2);customElements.get("stufa-pellet-card")||customElements.define("stufa-pellet-card",O);window.customCards=window.customCards||[];window.customCards.push({type:"stufa-pellet-card",name:"Stufa a pellet",description:"Stato della stufa, potenza con le soglie, cronologia, grafici e preferenze."});console.info("%c STUFA-PELLET-MONITOR %c v0.1.0 ","color: white; background: #8b2a22; font-weight: 700;","color: #8b2a22; background: white; font-weight: 700;");export{O as StufaPelletCard};
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/unsafe-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/unsafe-svg.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
