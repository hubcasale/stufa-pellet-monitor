var Te=Object.defineProperty;var ze=Object.getOwnPropertyDescriptor;var m=(o,e,t,s)=>{for(var i=s>1?void 0:s?ze(e,t):e,n=o.length-1,r;n>=0;n--)(r=o[n])&&(i=(s?r(e,t,i):r(i))||i);return s&&i&&Te(e,t,i),i};var dt=globalThis,pt=dt.ShadowRoot&&(dt.ShadyCSS===void 0||dt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,St=Symbol(),Bt=new WeakMap,X=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==St)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(pt&&e===void 0){let s=t!==void 0&&t.length===1;s&&(e=Bt.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&Bt.set(t,e))}return e}toString(){return this.cssText}},qt=o=>new X(typeof o=="string"?o:o+"",void 0,St),k=(o,...e)=>{let t=o.length===1?o[0]:e.reduce((s,i,n)=>s+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[n+1],o[0]);return new X(t,o,St)},Wt=(o,e)=>{if(pt)o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let s=document.createElement("style"),i=dt.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=t.cssText,o.appendChild(s)}},kt=pt?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(let s of e.cssRules)t+=s.cssText;return qt(t)})(o):o;var{is:Oe,defineProperty:Le,getOwnPropertyDescriptor:Re,getOwnPropertyNames:Pe,getOwnPropertySymbols:Ne,getPrototypeOf:Ie}=Object,ut=globalThis,Gt=ut.trustedTypes,He=Gt?Gt.emptyScript:"",De=ut.reactiveElementPolyfillSupport,Q=(o,e)=>o,tt={toAttribute(o,e){switch(e){case Boolean:o=o?He:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},ht=(o,e)=>!Oe(o,e),Kt={attribute:!0,type:String,converter:tt,reflect:!1,useDefault:!1,hasChanged:ht};Symbol.metadata??=Symbol("metadata"),ut.litPropertyMetadata??=new WeakMap;var T=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Kt){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(e,s,t);i!==void 0&&Le(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){let{get:i,set:n}=Re(this.prototype,e)??{get(){return this[t]},set(r){this[t]=r}};return{get:i,set(r){let l=i?.call(this);n?.call(this,r),this.requestUpdate(e,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Kt}static _$Ei(){if(this.hasOwnProperty(Q("elementProperties")))return;let e=Ie(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Q("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Q("properties"))){let t=this.properties,s=[...Pe(t),...Ne(t)];for(let i of s)this.createProperty(i,t[i])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[s,i]of t)this.elementProperties.set(s,i)}this._$Eh=new Map;for(let[t,s]of this.elementProperties){let i=this._$Eu(t,s);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let s=new Set(e.flat(1/0).reverse());for(let i of s)t.unshift(kt(i))}else e!==void 0&&t.push(kt(e));return t}static _$Eu(e,t){let s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Wt(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){let s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(i!==void 0&&s.reflect===!0){let n=(s.converter?.toAttribute!==void 0?s.converter:tt).toAttribute(t,s.type);this._$Em=e,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,t){let s=this.constructor,i=s._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let n=s.getPropertyOptions(i),r=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:tt;this._$Em=i;let l=r.fromAttribute(t,n.type);this[i]=l??this._$Ej?.get(i)??l,this._$Em=null}}requestUpdate(e,t,s,i=!1,n){if(e!==void 0){let r=this.constructor;if(i===!1&&(n=this[e]),s??=r.getPropertyOptions(e),!((s.hasChanged??ht)(n,t)||s.useDefault&&s.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:i,wrapped:n},r){s&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??t??this[e]),n!==!0||r!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[i,n]of s){let{wrapped:r}=n,l=this[i];r!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,n,l)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(t)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};T.elementStyles=[],T.shadowRootOptions={mode:"open"},T[Q("elementProperties")]=new Map,T[Q("finalized")]=new Map,De?.({ReactiveElement:T}),(ut.reactiveElementVersions??=[]).push("2.1.2");var Ot=globalThis,Vt=o=>o,ft=Ot.trustedTypes,Zt=ft?ft.createPolicy("lit-html",{createHTML:o=>o}):void 0,ee="$lit$",R=`lit$${Math.random().toFixed(9).slice(2)}$`,se="?"+R,Ue=`<${se}>`,j=document,st=()=>j.createComment(""),it=o=>o===null||typeof o!="object"&&typeof o!="function",Lt=Array.isArray,je=o=>Lt(o)||typeof o?.[Symbol.iterator]=="function",Et=`[ 	
\f\r]`,et=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Yt=/-->/g,Jt=/>/g,D=RegExp(`>|${Et}(?:([^\\s"'>=/]+)(${Et}*=${Et}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Xt=/'/g,Qt=/"/g,ie=/^(?:script|style|textarea|title)$/i,Rt=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),p=Rt(1),F=Rt(2),ns=Rt(3),z=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),te=new WeakMap,U=j.createTreeWalker(j,129);function oe(o,e){if(!Lt(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Zt!==void 0?Zt.createHTML(e):e}var Fe=(o,e)=>{let t=o.length-1,s=[],i,n=e===2?"<svg>":e===3?"<math>":"",r=et;for(let l=0;l<t;l++){let a=o[l],h,f,c=-1,_=0;for(;_<a.length&&(r.lastIndex=_,f=r.exec(a),f!==null);)_=r.lastIndex,r===et?f[1]==="!--"?r=Yt:f[1]!==void 0?r=Jt:f[2]!==void 0?(ie.test(f[2])&&(i=RegExp("</"+f[2],"g")),r=D):f[3]!==void 0&&(r=D):r===D?f[0]===">"?(r=i??et,c=-1):f[1]===void 0?c=-2:(c=r.lastIndex-f[2].length,h=f[1],r=f[3]===void 0?D:f[3]==='"'?Qt:Xt):r===Qt||r===Xt?r=D:r===Yt||r===Jt?r=et:(r=D,i=void 0);let b=r===D&&o[l+1].startsWith("/>")?" ":"";n+=r===et?a+Ue:c>=0?(s.push(h),a.slice(0,c)+ee+a.slice(c)+R+b):a+R+(c===-2?l:b)}return[oe(o,n+(o[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]},ot=class o{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let n=0,r=0,l=e.length-1,a=this.parts,[h,f]=Fe(e,t);if(this.el=o.createElement(h,s),U.currentNode=this.el.content,t===2||t===3){let c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=U.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(let c of i.getAttributeNames())if(c.endsWith(ee)){let _=f[r++],b=i.getAttribute(c).split(R),y=/([.?@])?(.*)/.exec(_);a.push({type:1,index:n,name:y[2],strings:b,ctor:y[1]==="."?Ct:y[1]==="?"?Mt:y[1]==="@"?Tt:V}),i.removeAttribute(c)}else c.startsWith(R)&&(a.push({type:6,index:n}),i.removeAttribute(c));if(ie.test(i.tagName)){let c=i.textContent.split(R),_=c.length-1;if(_>0){i.textContent=ft?ft.emptyScript:"";for(let b=0;b<_;b++)i.append(c[b],st()),U.nextNode(),a.push({type:2,index:++n});i.append(c[_],st())}}}else if(i.nodeType===8)if(i.data===se)a.push({type:2,index:n});else{let c=-1;for(;(c=i.data.indexOf(R,c+1))!==-1;)a.push({type:7,index:n}),c+=R.length-1}n++}}static createElement(e,t){let s=j.createElement("template");return s.innerHTML=e,s}};function K(o,e,t=o,s){if(e===z)return e;let i=s!==void 0?t._$Co?.[s]:t._$Cl,n=it(e)?void 0:e._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),n===void 0?i=void 0:(i=new n(o),i._$AT(o,t,s)),s!==void 0?(t._$Co??=[])[s]=i:t._$Cl=i),i!==void 0&&(e=K(o,i._$AS(o,e.values),i,s)),e}var At=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:s}=this._$AD,i=(e?.creationScope??j).importNode(t,!0);U.currentNode=i;let n=U.nextNode(),r=0,l=0,a=s[0];for(;a!==void 0;){if(r===a.index){let h;a.type===2?h=new nt(n,n.nextSibling,this,e):a.type===1?h=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(h=new zt(n,this,e)),this._$AV.push(h),a=s[++l]}r!==a?.index&&(n=U.nextNode(),r++)}return U.currentNode=j,i}p(e){let t=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}},nt=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=K(this,e,t),it(e)?e===d||e==null||e===""?(this._$AH!==d&&this._$AR(),this._$AH=d):e!==this._$AH&&e!==z&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):je(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==d&&it(this._$AH)?this._$AA.nextSibling.data=e:this.T(j.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=ot.createElement(oe(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(t);else{let n=new At(i,this),r=n.u(this.options);n.p(t),this.T(r),this._$AH=n}}_$AC(e){let t=te.get(e.strings);return t===void 0&&te.set(e.strings,t=new ot(e)),t}k(e){Lt(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,s,i=0;for(let n of e)i===t.length?t.push(s=new o(this.O(st()),this.O(st()),this,this.options)):s=t[i],s._$AI(n),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let s=Vt(e).nextSibling;Vt(e).remove(),e=s}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},V=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,n){this.type=1,this._$AH=d,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=d}_$AI(e,t=this,s,i){let n=this.strings,r=!1;if(n===void 0)e=K(this,e,t,0),r=!it(e)||e!==this._$AH&&e!==z,r&&(this._$AH=e);else{let l=e,a,h;for(e=n[0],a=0;a<n.length-1;a++)h=K(this,l[s+a],t,a),h===z&&(h=this._$AH[a]),r||=!it(h)||h!==this._$AH[a],h===d?e=d:e!==d&&(e+=(h??"")+n[a+1]),this._$AH[a]=h}r&&!i&&this.j(e)}j(e){e===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Ct=class extends V{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===d?void 0:e}},Mt=class extends V{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==d)}},Tt=class extends V{constructor(e,t,s,i,n){super(e,t,s,i,n),this.type=5}_$AI(e,t=this){if((e=K(this,e,t,0)??d)===z)return;let s=this._$AH,i=e===d&&s!==d||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,n=e!==d&&(s===d||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},zt=class{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){K(this,e)}};var Be=Ot.litHtmlPolyfillSupport;Be?.(ot,nt),(Ot.litHtmlVersions??=[]).push("3.3.3");var ne=(o,e,t)=>{let s=t?.renderBefore??e,i=s._$litPart$;if(i===void 0){let n=t?.renderBefore??null;s._$litPart$=i=new nt(e.insertBefore(st(),n),n,void 0,t??{})}return i._$AI(o),i};var Pt=globalThis,$=class extends T{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ne(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return z}};$._$litElement$=!0,$.finalized=!0,Pt.litElementHydrateSupport?.({LitElement:$});var qe=Pt.litElementPolyfillSupport;qe?.({LitElement:$});(Pt.litElementVersions??=[]).push("4.2.2");var We={attribute:!0,type:String,converter:tt,reflect:!1,hasChanged:ht},Ge=(o=We,e,t)=>{let{kind:s,metadata:i}=t,n=globalThis.litPropertyMetadata.get(i);if(n===void 0&&globalThis.litPropertyMetadata.set(i,n=new Map),s==="setter"&&((o=Object.create(o)).wrapped=!0),n.set(t.name,o),s==="accessor"){let{name:r}=t;return{set(l){let a=e.get.call(this);e.set.call(this,l),this.requestUpdate(r,a,o,!0,l)},init(l){return l!==void 0&&this.C(r,void 0,o,l),l}}}if(s==="setter"){let{name:r}=t;return function(l){let a=this[r];e.call(this,l),this.requestUpdate(r,a,o,!0,l)}}throw Error("Unsupported decorator location: "+s)};function x(o){return(e,t)=>typeof t=="object"?Ge(o,e,t):((s,i,n)=>{let r=i.hasOwnProperty(n);return i.constructor.createProperty(n,s),r?Object.getOwnPropertyDescriptor(i,n):void 0})(o,e,t)}function g(o){return x({...o,state:!0,attribute:!1})}var re={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},bt=o=>(...e)=>({_$litDirective$:o,values:e}),gt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,s){this._$Ct=e,this._$AM=t,this._$Ci=s}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var B=class extends gt{constructor(e){if(super(e),this.it=d,e.type!==re.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===d||e==null)return this._t=void 0,this.it=e;if(e===z)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};B.directiveName="unsafeHTML",B.resultType=1;var Vs=bt(B);var rt=class extends B{};rt.directiveName="unsafeSVG",rt.resultType=2;var ae=bt(rt);var Ke=["spenta","accensione","accesa","spegnimento","non_disponibile"],P={spenta:"Spenta",accensione:"Accensione",accesa:"In funzione",spegnimento:"Spegnimento",non_disponibile:"Non disponibile"},_t={spenta:"neutral",accensione:"warning",accesa:"success",spegnimento:"accent",non_disponibile:"danger"},S={spenta:"#6b7280",accensione:"#f59e0b",accesa:"#ef4444",spegnimento:"#60a5fa",non_disponibile:"transparent"},at={rosso:["#8b2a22","#b53b2f"],arancio:["#d9822b","#f0a24a"],avorio:["#d8cdb4","#efe6d0"]};function lt(o){return Ke.includes(String(o))?o:"non_disponibile"}function q(o){if(o==null||o===""||o==="unknown"||o==="unavailable")return null;let e=Number(o);return Number.isFinite(e)?e:null}function v(o,e=0){return o==null||!Number.isFinite(o)?"\u2013":o.toFixed(e).replace(".",",")}function Y(o){let e=Math.max(0,Math.floor(o/1e3));if(e<60)return`${e} s`;let t=Math.floor(e/60);return t<60?`${t} min`:`${Math.floor(t/60)} h ${String(t%60).padStart(2,"0")} min`}function le(o,e){let t=Math.max(300,Math.ceil(e.ignition_above*1.2/50)*50),s=l=>Math.round(Math.min(Math.max(l/t,0),1)*1e3)/10,i=[{from:0,to:s(e.off_below),color:S.spenta,label:"spenta"},{from:s(e.shutdown_min),to:s(e.shutdown_max),color:S.spegnimento,label:"spegnimento"},{from:s(e.ignition_above),to:100,color:S.accensione,label:"accensione"}],n=[{at:0,label:"0"},{at:s(e.off_below),label:v(e.off_below,e.off_below%1?1:0)},{at:s((e.shutdown_min+e.shutdown_max)/2),label:`${v(e.shutdown_min,e.shutdown_min%1?1:0)}-${v(e.shutdown_max,e.shutdown_max%1?1:0)}`},{at:s(e.ignition_above),label:v(e.ignition_above)},{at:100,label:`${t} W`}],r=n.filter((l,a)=>a===0?n[1].at-l.at>=8:a===n.length-1?l.at-n[a-1].at>=8:!0);return{max:t,marker:o===null?null:s(o),zones:i,ticks:r}}function Ve(o){if(o==null)return null;if(typeof o=="number")return o<1e11?o*1e3:o;let e=Date.parse(o);return Number.isNaN(e)?null:e}function ce(o){return Ve(o.lu??o.last_updated??o.lc??o.last_changed)}function de(o){let e=[];for(let t of o??[]){let s=ce(t),i=t.s??t.state;if(s===null||i===void 0||i===""||i==="unavailable"||i==="unknown")continue;let n=Number(i);Number.isFinite(n)&&e.push({t:s,v:n})}return e.sort((t,s)=>t.t-s.t)}function xt(o,e,t){let s=[];for(let a of o??[]){let h=ce(a),f=a.s??a.state;h!==null&&f!==void 0&&s.push({t:h,s:lt(f)})}s.sort((a,h)=>a.t-h.t);let i=null;for(let a of s)if(a.t<=e)i=a.s;else break;let n=[],r=e;for(let a of s)a.t<=e||a.t>=t||(i!==null&&n.push({from:r,to:a.t,state:i}),r=a.t,i=a.s);i!==null&&r<t&&n.push({from:r,to:t,state:i});let l=[];for(let a of n){let h=l[l.length-1];h&&h.state===a.state&&h.to===a.from?h.to=a.to:l.push({...a})}return l}function pe(o,e){for(let t of o)if(e>=t.from&&e<t.to)return t.state;return null}function ue(o,e,t,s,i=3*3600*1e3){let n=new Array(s).fill(null);if(s<=0||t<=e)return n;let r=(t-e)/s,l=0,a=null,h=0;for(let f=0;f<s;f++){let c=e+f*r,_=c+r;for(;l<o.length&&o[l].t<=c;)a=o[l].v,h=o[l].t,l++;let b=0,y=0,E=c,w=a,u=h,J=Me=>{if(w===null)return;let wt=Math.min(Me,u+i)-E;wt>0&&(b+=w*wt,y+=wt)},H=l;for(;H<o.length&&o[H].t<_;)J(o[H].t),E=o[H].t,w=o[H].v,u=o[H].t,H++;J(_),n[f]=y>0?b/y:null}return n}function Ze(o){let e=Math.pow(10,Math.floor(Math.log10(o))),t=o/e;return(t<=1?1:t<=2?2:t<=2.5?2.5:t<=5?5:10)*e}function he(o,e,t=5){if(!Number.isFinite(o)||!Number.isFinite(e))return{min:0,max:1,ticks:[0,1]};e-o<1e-9&&(o-=1,e+=1);let s=Ze((e-o)/Math.max(1,t-1)),i=Math.floor(o/s+1e-9)*s,n=Math.ceil(e/s-1e-9)*s,r=[];for(let l=i;l<=n+s*1e-6;l+=s)r.push(Math.round(l/s)*s);return{min:i,max:n,ticks:r}}var fe=["dom","lun","mar","mer","gio","ven","sab"],Ye=["gen","feb","mar","apr","mag","giu","lug","ago","set","ott","nov","dic"],Nt=o=>`${String(o.getHours()).padStart(2,"0")}:${String(o.getMinutes()).padStart(2,"0")}`;function me(o,e,t=6){let s=(e-o)/36e5,i=[1,2,3,6,12,24,48].find(l=>s/l<=t)??48,n=new Date(o);n.setMinutes(0,0,0),i>=24?n.setHours(0):n.setHours(Math.ceil(n.getHours()/i)*i);let r=[];for(let l=n.getTime();l<=e;l+=i*36e5){if(l<o)continue;let a=new Date(l),h=a.getHours()===0;r.push({t:l,major:h,label:s>30&&h?`${fe[a.getDay()]} ${a.getDate()}`:Nt(a)})}return r}function ge(o){let e=new Date(o);return`${fe[e.getDay()]} ${e.getDate()} ${Ye[e.getMonth()]}, ${Nt(e)}`}function be(o,e,t){let s="",i=!1;for(let n=0;n<o.length;n++){let r=o[n];if(r===null){i=!1;continue}s+=`${i?"L":"M"}${e(n).toFixed(1)} ${t(r).toFixed(1)}`,i=!0}return s}function ve(o,e){let t=o.settings,s=o.power!==null?`${v(o.power,o.power%1?1:0)} W`:"\u2013",i=o.sinceMs!==null?Y(e-o.sinceMs):null,n=[];switch(o.state){case"accesa":n.push({icon:"mdi:fire",text:`Stufa in funzione${i?` da ${i}`:""}, potenza ${s}.`,tone:"ok"});break;case"accensione":n.push({icon:"mdi:fire-circle",text:`Accensione in corso: l'accenditore assorbe ${s}, oltre la soglia di ${v(t.ignition_above)} W.`,tone:"info"});break;case"spegnimento":n.push({icon:"mdi:fan",text:`Spegnimento in corso: la ventola raffredda (${s}, fascia ${v(t.shutdown_min,1)}-${v(t.shutdown_max,1)} W).`,tone:"info"});break;case"spenta":n.push({icon:"mdi:fire-off",text:`Stufa spenta${i?` da ${i}`:""}, potenza ${s} (sotto ${v(t.off_below,t.off_below%1?1:0)} W).`,tone:"info"});break;default:n.push({icon:"mdi:lan-disconnect",text:"Il sensore di potenza non risponde: non so in che stato sia la stufa.",tone:"bad"})}return o.blocked&&n.push({icon:"mdi:shield-lock",text:`Azioni automatiche sull'interruttore bloccate: riprendono ${t.restore_delay_seconds} secondi dopo il ritorno del sensore.`,tone:"warn"}),o.switchOn!==null&&(n.push({icon:"mdi:toggle-switch",text:`L'interruttore della stufa \xE8 ${o.switchOn?"acceso":"spento"}.`,tone:"info"}),o.switchOn&&o.state==="spenta"&&!o.blocked&&n.push({icon:"mdi:timer-sand",text:`Interruttore acceso con la stufa spenta: si spegne dopo il periodo di grazia (${t.grace_seconds} s).`,tone:"info"}),!o.switchOn&&o.state==="accensione"&&n.push({icon:"mdi:sync",text:"La stufa \xE8 partita da sola: l'interruttore si accende per restare allineato.",tone:"info"})),o.plugOn===!1?n.push({icon:"mdi:power-plug-off",text:"La presa \xE8 spenta: la stufa non \xE8 alimentata.",tone:"warn"}):o.plugOn===!0&&n.push({icon:"mdi:power-plug",text:"La presa \xE8 accesa.",tone:"info"}),o.ignitionsToday!==null&&o.hoursToday!==null&&n.push({icon:"mdi:calendar-today",text:`Oggi: ${o.ignitionsToday} ${o.ignitionsToday===1?"accensione":"accensioni"}, ${v(o.hoursToday,1)} ore in funzione.`,tone:"info"}),n}var _e=[{key:"off_below",label:"Spenta sotto",hint:"Sotto questa potenza la stufa \xE8 spenta (consumo a riposo).",unit:"W",min:0,max:100,step:.5},{key:"shutdown_min",label:"Spegnimento da",hint:"Inizio della fascia di potenza della ventola in raffreddamento.",unit:"W",min:1,max:400,step:.5},{key:"shutdown_max",label:"Spegnimento fino a",hint:"Fine della fascia di spegnimento.",unit:"W",min:1,max:400,step:.5},{key:"ignition_above",label:"Accensione sopra",hint:"Oltre questa potenza l'accenditore \xE8 acceso: la stufa si sta accendendo.",unit:"W",min:20,max:2e3,step:5}],xe=[{key:"confirm_seconds",label:"Conferma del cambio di stato",hint:"Un nuovo stato deve durare tanti secondi prima di essere accettato (filtra i picchi).",unit:"s",min:0,max:600,step:1},{key:"grace_seconds",label:"Periodo di grazia dell'interruttore",hint:"Dopo aver acceso l'interruttore della stufa si aspetta tanti secondi prima di spegnerlo se la stufa risulta spenta.",unit:"s",min:0,max:600,step:1},{key:"restore_delay_seconds",label:"Ripresa dopo guasto del sensore",hint:"Dopo il ritorno del sensore le azioni sull'interruttore restano bloccate per tanti secondi.",unit:"s",min:0,max:900,step:1}];function It(o){let e=[];return o.off_below<o.shutdown_min||e.push("La soglia di spenta deve essere minore dell'inizio della fascia di spegnimento."),o.shutdown_min>o.shutdown_max&&e.push("L'inizio della fascia di spegnimento non pu\xF2 superare la fine."),o.shutdown_max<o.ignition_above||e.push("La fascia di spegnimento deve stare sotto la soglia di accensione."),e}function Ht(o,e,t,s){let i=Math.min(t,Math.max(e,o)),n=(String(s).split(".")[1]??"").length;return Number((Math.round(i/s)*s).toFixed(n))}var yt=["Lun","Mar","Mer","Gio","Ven","Sab","Dom"],ye=["L","M","M","G","V","S","D"],$e=[30,60,120,180,240,360];function Z(o,e=!1){let t=/^(\d{1,2}):(\d{2})$/.exec(o.trim());if(!t||Number(t[2])>59)return null;let s=Number(t[1])*60+Number(t[2]);return s>=0&&s<=(e?1440:1439)?s:null}function Dt(o){if(o.days.length===0)return"Scegli almeno un giorno.";let e=Z(o.start),t=Z(o.end,!0);return e===null||t===null?"Orario non valido.":e===t?"Inizio e fine non possono coincidere.":null}function we(o){let e=Z(o.start),t=Z(o.end,!0);return e!==null&&t!==null&&t<=e}function Se(o){let t=new Uint8Array(10080);for(let i of o){let n=Z(i.start),r=Z(i.end,!0);if(n===null||r===null||n===r)continue;let l=r>n?r-n:1440-n+r;for(let a of i.days)if(!(a<0||a>6))for(let h=0;h<l;h++)t[(a*1440+n+h)%10080]=1}let s=[];for(let i=0;i<7;i++){let n=[],r=null;for(let l=0;l<1440;l++){let a=t[i*1440+l]===1;a&&r===null?r=l:!a&&r!==null&&(n.push([r,l]),r=null)}r!==null&&n.push([r,1440]),s.push(n)}return s}function ke(o){let e=[...new Set(o)].sort((t,s)=>t-s);return e.length===7?"Tutti i giorni":e.length===5&&e.join()==="0,1,2,3,4"?"Lun\u2013Ven":e.length===2&&e.join()==="5,6"?"Sab\u2013Dom":e.map(t=>yt[t]).join(" ")}function vt(o,e){let t=new Date(o),s=new Date(e),i=a=>new Date(a.getFullYear(),a.getMonth(),a.getDate()).getTime(),n=Math.round((i(t)-i(s))/864e5),r=`${String(t.getHours()).padStart(2,"0")}:${String(t.getMinutes()).padStart(2,"0")}`,l=["dom","lun","mar","mer","gio","ven","sab"];return n===0?`oggi alle ${r}`:n===1?`domani alle ${r}`:`${l[t.getDay()]} ${t.getDate()} alle ${r}`}function Ee(o,e,t,s,i){let n=t?`${t.kind==="on"?"prossima accensione":"spegnimento"} ${vt(t.time,i)}`:"";switch(o){case"timer":return{label:"Timer",tone:"accent",icon:"mdi:timer-outline",detail:s!==null?`si spegne ${vt(s,i)} (tra ${Y(s-i)})`:""};case"programma":return{label:"Programma attivo",tone:"success",icon:"mdi:calendar-check",detail:n};case"fuori_programma":return{label:"Manuale, fuori programma",tone:"warning",icon:"mdi:hand-back-right",detail:n?`il programma riprende: ${n}`:""};default:return{label:"Manuale",tone:"neutral",icon:"mdi:hand-back-right-outline",detail:e?"":"programmazione non attiva"}}}function Ae(){return{days:[0,1,2,3,4],start:"07:00",end:"09:00"}}function Ut(o){let e=[];return o.slots.forEach((t,s)=>{let i=Dt(t);i&&e.push(`Fascia ${s+1}: ${i}`)}),e}function Ce(o,e){let[t,s]=at[e]??at.rosso,i=o==="accesa"||o==="accensione"||o==="spegnimento",n=o==="non_disponibile",r=o==="accesa"?"#ff8a2a":o==="accensione"?"#ff9d3c":o==="spegnimento"?"#4a7bd0":null,l=o==="accesa"?.55:o==="accensione"?.32:o==="spegnimento"?.18:0,_=o==="accesa"?`
    <path d="M94 186 C70 178 66 150 82 132 C84 144 92 146 94 138 C96 122 90 114 98 104 C104 122 124 134 118 160 C116 172 106 182 94 186Z" fill="#ffb21f"/>
    <path d="M94 186 C80 180 78 160 88 148 C90 156 96 158 97 150 C98 140 96 134 100 128 C106 144 114 156 108 170 C105 178 100 184 94 186Z" fill="#ff6a1a"/>
    <path d="M94 186 C86 182 86 170 92 162 C94 168 98 168 99 163 C103 170 102 180 94 186Z" fill="#fff0a8"/>
    <path d="M68 186 C58 178 60 164 68 158 C68 166 72 168 74 164 C78 172 76 182 68 186Z" fill="#ff8a1f"/>
    <path d="M120 186 C112 180 114 168 121 162 C121 170 125 172 127 167 C131 175 128 183 120 186Z" fill="#ff8a1f"/>`:o==="accensione"?`
    <path d="M94 186 C84 182 84 170 90 162 C92 168 96 168 98 162 C102 170 102 180 94 186Z" fill="#ffa21f"/>
    <path d="M94 186 C89 183 89 177 92 173 C94 176 96 176 97 173 C99 177 98 183 94 186Z" fill="#fff0a8"/>`+(o==="accensione"?'<rect x="79" y="180" width="30" height="4" rx="2" fill="#ff3b30"/><rect x="79" y="180" width="30" height="4" rx="2" fill="#ff7a6e" opacity="0.5"/>':""):o==="spegnimento"?`
    <path d="M94 186 C86 183 86 174 91 168 C93 172 96 172 98 168 C101 174 101 182 94 186Z" fill="#6aa4ff" opacity="0.8"/>
    <path d="M94 186 C90 184 90 180 93 177 C95 179 96 179 97 177 C98 180 98 184 94 186Z" fill="#c9e0ff" opacity="0.8"/>`:"",b=i?o==="spegnimento"?"#7fb2ff":"#ffcf5a":"#1b2028",y=o==="accesa"?"ON":o==="accensione"?"ACC":o==="spegnimento"?"OFF":"",E=[0,1,2,3,4,5,6].map(w=>`<rect x="40" y="${54+w*4.8}" width="108" height="2.4" rx="1.2" fill="#0f1217"/>`).join("");return`<svg viewBox="0 0 188 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Stufa a pellet ${o}">
  <defs>
    <linearGradient id="spBody" x1="0" x2="1"><stop offset="0" stop-color="#2a2f38"/><stop offset=".5" stop-color="#3a414d"/><stop offset="1" stop-color="#2a2f38"/></linearGradient>
    <linearGradient id="spTile" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${s}"/><stop offset="1" stop-color="${t}"/></linearGradient>
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
  <g stroke="#000" stroke-opacity="0.18" stroke-width="0.8">${[0,1,2,3,4,5,6,7,8,9,10].map(w=>`<line x1="14" x2="22" y1="${80+w*20}" y2="${80+w*20}"/><line x1="166" x2="174" y1="${80+w*20}" y2="${80+w*20}"/>`).join("")}</g>
  <rect x="38" y="50" width="112" height="40" rx="4" fill="#161a20"/>${E}
  <rect x="44" y="88" width="100" height="126" rx="8" fill="#1d2128"/>
  <rect x="53" y="100" width="82" height="88" rx="6" fill="url(#spGlass)"/>
  <g clip-path="url(#spGlassClip)">
    ${r?'<rect x="53" y="100" width="82" height="88" fill="url(#spGlow)"/>':""}
    ${_}
    <path d="M60 104 L80 104 L58 150 Z" fill="#fff" opacity="0.06"/>
  </g>
  <rect x="53" y="100" width="82" height="88" rx="6" fill="none" stroke="#5b626e" stroke-width="1.5"/>
  <rect x="141" y="130" width="6" height="30" rx="3" fill="#b9bec8"/>
  <rect x="38" y="216" width="112" height="32" rx="6" fill="#1a1e24"/>
  <circle cx="66" cy="232" r="8" fill="#9aa1ad"/><circle cx="66" cy="232" r="8" fill="none" stroke="#5b626e"/><line x1="66" y1="232" x2="66" y2="226" stroke="#20242b" stroke-width="2" stroke-linecap="round"/>
  <circle cx="122" cy="232" r="8" fill="#9aa1ad"/><circle cx="122" cy="232" r="8" fill="none" stroke="#5b626e"/><line x1="122" y1="232" x2="127" y2="228" stroke="#20242b" stroke-width="2" stroke-linecap="round"/>
  <rect x="82" y="222" width="24" height="20" rx="3" fill="${b}"/>
  ${y?`<text x="94" y="236" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#10141a">${y}</text>`:""}
  <rect x="56" y="254" width="76" height="30" rx="5" fill="#222730"/>
  <rect x="62" y="262" width="64" height="4" rx="2" fill="#0f1217"/>
  <rect x="82" y="270" width="24" height="5" rx="2.5" fill="#9aa1ad"/>
  <rect x="20" y="294" width="148" height="12" rx="5" fill="#161a20"/>
  ${n?'<rect x="6" y="42" width="176" height="264" rx="14" fill="#9aa1ad" opacity="0.55"/><text x="94" y="190" text-anchor="middle" font-family="sans-serif" font-size="64" font-weight="700" fill="#fff">?</text>':""}
</svg>`}var M=k`
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
`;var ct=class extends ${constructor(){super(...arguments);this._onKey=t=>{t.key==="Escape"&&this._close()}}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this._onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this._onKey)}_close(){this.dispatchEvent(new CustomEvent("closed")),this.remove()}render(){if(!this.hass||!this.info)return d;let t=this.info.entities,s=t.stato?this.hass.states[t.stato]:void 0,i=lt(s?.state??this.info.state),n=s?.attributes??{},r=n.da??this.info.since,l=n.interruttore==="acceso"?!0:n.interruttore==="spento"?!1:null,a=n.presa==="accesa"?!0:n.presa==="spenta"?!1:null,h=c=>t[c]?q(this.hass.states[t[c]]?.state):null,f=ve({state:i,power:q(n.potenza)??this.info.power,sinceMs:r?Date.parse(r):null,switchOn:l,plugOn:a,blocked:n.azioni_bloccate===!0,ignitionsToday:h("accensioni_oggi"),hoursToday:h("ore_in_funzione_oggi"),lastOn:null,lastOff:null,settings:this.info.settings},Date.now());return p`
      <div class="backdrop" @click=${c=>c.target===c.currentTarget&&this._close()}>
        <div class="panel" role="dialog" aria-modal="true" aria-label="Stato stufa">
          <div class="head">
            <div class="title">Stato della stufa</div>
            <button class="x" aria-label="Chiudi" @click=${()=>this._close()}>✕</button>
          </div>
          <div class="body">
            <div class="badge ${_t[i]}">${P[i]}</div>
            ${f.map(c=>p`<div class="line ${c.tone}"><ha-icon icon=${c.icon}></ha-icon><span>${c.text}</span></div>`)}
          </div>
        </div>
      </div>
    `}static{this.styles=[M,k`
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
    `]}};m([x({attribute:!1})],ct.prototype,"hass",2),m([x({attribute:!1})],ct.prototype,"info",2);customElements.get("stufa-info-dialog")||customElements.define("stufa-info-dialog",ct);var jt=[{id:"6h",label:"6 ore",ms:6*36e5},{id:"24h",label:"24 ore",ms:24*36e5},{id:"3d",label:"3 giorni",ms:3*864e5},{id:"7d",label:"7 giorni",ms:7*864e5}],W=220,G=10,O=40,Je=22,$t=12,A=class extends ${constructor(){super(...arguments);this._range="24h";this._loading=!1;this._error="";this._w=640;this._hover=null;this._values=[];this._segs=[];this._t0=0;this._t1=0;this._n=240;this._raw=[];this._rawStates=[];this._seq=0;this._onKey=t=>{t.key==="Escape"&&this._close()}}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this._onKey),this._timer=window.setInterval(()=>void this._load(),6e4),this._load()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this._onKey),this._ro?.disconnect(),this._timer&&window.clearInterval(this._timer)}firstUpdated(){let t=this.renderRoot.querySelector(".chartwrap");t&&(this._ro=new ResizeObserver(s=>{let i=Math.floor(s[0]?.contentRect.width??640);i>100&&Math.abs(i-this._w)>2&&(this._w=i,this._recompute())}),this._ro.observe(t))}_close(){this.dispatchEvent(new CustomEvent("closed")),this.remove()}async _history(t,s,i){return this.hass.callWS({type:"history/history_during_period",start_time:new Date(s).toISOString(),end_time:new Date(i).toISOString(),entity_ids:t,include_start_time_state:!0,significant_changes_only:!1,minimal_response:!0,no_attributes:!0})}async _load(){if(!this.hass||!this.info)return;let t=++this._seq,s=jt.find(l=>l.id===this._range)??jt[1],i=Date.now(),n=i-s.ms,r=[this.info.sources.power_sensor];this.info.entities.stato&&r.push(this.info.entities.stato),this._loading=!0;try{let l=await this._history(r,n,i);if(t!==this._seq)return;this._t0=n,this._t1=i,this._raw=de(l[this.info.sources.power_sensor]),this._rawStates=this.info.entities.stato?l[this.info.entities.stato]??[]:[],this._error="",this._recompute()}catch(l){t===this._seq&&(this._error=`Impossibile leggere lo storico: ${l instanceof Error?l.message:String(l)}`)}finally{t===this._seq&&(this._loading=!1)}}_recompute(){this._t1&&(this._n=Math.max(60,Math.min(480,Math.floor((this._w-O-8)/2))),this._values=ue(this._raw,this._t0,this._t1,this._n,30*6e4),this._segs=xt(this._rawStates,this._t0,this._t1))}_setRange(t){this._range=t,this._hover=null,this._load()}_move(t){let i=t.currentTarget.getBoundingClientRect(),n=t.clientX-i.left,r=Math.round((n-O)/(this._w-O-8)*(this._n-1));this._hover=r>=0&&r<this._n?r:null}render(){if(!this.info)return d;let t=this.info.settings,s=this._values.filter(u=>u!==null),i=Math.max(t.ignition_above*1.1,...s.length?s:[0]),n=he(0,i,5),r=this._w,l=r-O-8,a=G+W+$t+Je+6,h=u=>O+(this._n<=1?0:u/(this._n-1)*l),f=u=>G+W-(u-n.min)/(n.max-n.min||1)*W,c=u=>O+(u-this._t0)/(this._t1-this._t0||1)*l,_=[{v:t.off_below,c:S.spenta,l:"spenta"},{v:t.shutdown_min,c:S.spegnimento,l:"spegnimento"},{v:t.shutdown_max,c:S.spegnimento,l:""},{v:t.ignition_above,c:S.accensione,l:"accensione"}],b=this._hover,y=b!==null&&this._n>1?this._t0+b/(this._n-1)*(this._t1-this._t0):null,E=b!==null?this._values[b]:null,w=y!==null?pe(this._segs,y):null;return p`
      <div class="backdrop" @click=${u=>u.target===u.currentTarget&&this._close()}>
        <div class="panel wide" role="dialog" aria-modal="true" aria-label="Grafici stufa">
          <div class="head">
            <div class="title">Grafici della stufa</div>
            <button class="x" aria-label="Chiudi" @click=${()=>this._close()}>✕</button>
          </div>
          <div class="body">
            <div class="ranges">
              ${jt.map(u=>p`<button class=${u.id===this._range?"chip on":"chip"} @click=${()=>this._setRange(u.id)}>${u.label}</button>`)}
              ${this._loading?p`<span class="load">aggiorno…</span>`:d}
            </div>
            <div class="chartwrap">
              <div class="tip">
                ${y!==null?p`<b>${ge(y)}</b> · ${E!==null?`${v(E,0)} W`:"nessun dato"}${w?p` · <span style="color:${S[w]==="transparent"?"inherit":S[w]}">${P[w]}</span>`:d}`:p`<span class="muted">Passa sopra il grafico per leggere i valori</span>`}
              </div>
              <svg width=${r} height=${a} viewBox="0 0 ${r} ${a}" @pointermove=${u=>this._move(u)} @pointerleave=${()=>this._hover=null}>
                ${n.ticks.map(u=>F`
                  <line x1=${O} x2=${r-8} y1=${f(u)} y2=${f(u)} stroke="var(--divider-color,#ddd)" stroke-width="1" />
                  <text x=${O-6} y=${f(u)+4} text-anchor="end" class="ax">${v(u)}</text>`)}
                ${_.map(u=>F`<line x1=${O} x2=${r-8} y1=${f(u.v)} y2=${f(u.v)} stroke=${u.c} stroke-width="1.2" stroke-dasharray="5 4" opacity="0.9" />
                  ${u.l?F`<text x=${r-10} y=${f(u.v)-3} text-anchor="end" class="th" fill=${u.c}>${u.l} ${v(u.v,u.v%1?1:0)} W</text>`:d}`)}
                <path d=${be(this._values,h,f)} fill="none" stroke="var(--primary-color,#03a9f4)" stroke-width="1.8" stroke-linejoin="round" />
                ${b!==null&&E!==null?F`<line x1=${h(b)} x2=${h(b)} y1=${G} y2=${G+W} stroke="var(--secondary-text-color,#888)" stroke-width="1" /><circle cx=${h(b)} cy=${f(E)} r="4" fill="var(--primary-color,#03a9f4)" />`:d}
                ${this._segs.map(u=>F`<rect x=${c(u.from)} y=${G+W+4} width=${Math.max(1,c(u.to)-c(u.from))} height=${$t} fill=${S[u.state]==="transparent"?"#9aa1ad":S[u.state]} opacity=${u.state==="non_disponibile"?.35:.9} />`)}
                ${me(this._t0,this._t1).map(u=>F`
                  <line x1=${c(u.t)} x2=${c(u.t)} y1=${G+W+$t+4} y2=${G+W+$t+8} stroke="var(--secondary-text-color,#888)" />
                  <text x=${c(u.t)} y=${a-4} text-anchor="middle" class=${u.major?"ax maj":"ax"}>${u.label}</text>`)}
              </svg>
              <div class="legend">
                ${["spenta","accensione","accesa","spegnimento"].map(u=>p`<span><i style="background:${S[u]}"></i>${P[u]}</span>`)}
              </div>
            </div>
            ${this._error?p`<div class="err">${this._error}</div>`:d}
            ${!this._loading&&!this._error&&s.length===0?p`<div class="empty">Nessun dato di potenza nel periodo.</div>`:d}
          </div>
        </div>
      </div>
    `}static{this.styles=[M,k`
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
    `]}};m([x({attribute:!1})],A.prototype,"hass",2),m([x({attribute:!1})],A.prototype,"info",2),m([g()],A.prototype,"_range",2),m([g()],A.prototype,"_loading",2),m([g()],A.prototype,"_error",2),m([g()],A.prototype,"_w",2),m([g()],A.prototype,"_hover",2),m([g()],A.prototype,"_values",2),m([g()],A.prototype,"_segs",2);customElements.get("stufa-charts-dialog")||customElements.define("stufa-charts-dialog",A);var Xe={soglie:[{key:"shutdown_needs_switch_off",label:"Spegnimento solo con l'interruttore spento",hint:"La fascia di spegnimento vale solo se l'interruttore della stufa \xE8 spento; con l'interruttore acceso la stessa potenza vuol dire 'in funzione'."}],comportamento:[{key:"sync_switch_on",label:"Accendi l'interruttore quando la stufa parte",hint:"Se la stufa si accende da sola, l'interruttore della stufa si allinea."},{key:"sync_switch_off",label:"Spegni l'interruttore a stufa spenta",hint:"Dopo il periodo di grazia l'interruttore della stufa si spegne quando la stufa risulta spenta."},{key:"show_switch_button",label:"Pulsante di accensione sulla scheda",hint:"Mostra il pulsante per accendere e spegnere la stufa con il suo interruttore."}],notifiche:[{key:"notify_events",label:"Avvisa su accensione e spegnimento",hint:""},{key:"notify_sensor_problem",label:"Avvisa se il sensore non risponde",hint:""}]},C=class extends ${constructor(){super(...arguments);this._busy=!1;this._error="";this._msg="";this._suggest=null;this._onKey=t=>{t.key==="Escape"&&this._close()}}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this._onKey),this._s={...this.info.settings},this._src={power_sensor:this.info.sources.power_sensor??"",switch:this.info.sources.switch??"",plug:this.info.sources.plug??"",energy_sensor:this.info.sources.energy_sensor??""}}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this._onKey)}_close(){this.dispatchEvent(new CustomEvent("closed")),this.remove()}_set(t,s){this._s={...this._s,[t]:s},this._msg=""}_typed(t,s){let i=s.target.value.replace(",","."),n=Number(i);if(i.trim()===""||!Number.isFinite(n)){s.target.value=String(this._s[t.key]);return}this._set(t.key,Ht(n,t.min,t.max,t.step))}_step(t,s){this._set(t.key,Ht(this._s[t.key]+s*t.step,t.min,t.max,t.step))}async _suggestFromHistory(){this._busy=!0,this._error="";try{this._suggest=await this.hass.callWS({type:"stufa_pellet/suggest",entry_id:this.info.entry_id,days:14})}catch(t){this._error=`Non riesco a leggere lo storico: ${t instanceof Error?t.message:String(t)}`}finally{this._busy=!1}}_applySuggestion(){let t=this._suggest?.suggestion;if(!t)return;let s={...this._s};for(let i of["off_below","ignition_above","shutdown_min","shutdown_max"]){let n=t[i];typeof n=="number"&&(s[i]=n)}this._s=s,this._suggest=null,this._msg="Soglie proposte applicate: controlla e premi Salva."}async _save(){let t=It(this._s);if(t.length){this._error=t[0];return}if(!this._src.power_sensor){this._error="Il sensore di potenza \xE8 obbligatorio.";return}this._busy=!0,this._error="";try{await this.hass.callWS({type:"stufa_pellet/update",entry_id:this.info.entry_id,settings:this._s,sources:this._src}),this.dispatchEvent(new CustomEvent("saved")),this._close()}catch(s){this._error=`Impossibile salvare: ${s instanceof Error?s.message:String(s)}`}finally{this._busy=!1}}_entityRow(t,s,i,n){let r=`dl-${s}`,l=Object.keys(this.hass.states).filter(a=>i.includes(a.split(".")[0]));return p`
      <div class="row col">
        <div class="lab">${t}${n?p` <span class="req">obbligatorio</span>`:p` <span class="opt">facoltativo</span>`}</div>
        <input
          class="txt"
          list=${r}
          .value=${this._src[s]}
          placeholder=${i.join(" / ")+".nome"}
          @change=${a=>{this._src={...this._src,[s]:a.target.value.trim()}}}
        />
        <datalist id=${r}>${l.map(a=>p`<option value=${a}></option>`)}</datalist>
        ${this._src[s]&&!this.hass.states[this._src[s]]?p`<div class="hint warn">Entità non trovata in Home Assistant.</div>`:d}
      </div>
    `}_numRow(t){return p`
      <div class="row">
        <div class="t"><div class="lab">${t.label}</div><div class="hint">${t.hint}</div></div>
        <div class="num">
          <button class="st" aria-label="Diminuisci" @click=${()=>this._step(t,-1)}>−</button>
          <input type="text" inputmode="decimal" .value=${String(this._s[t.key])} aria-label=${t.label} @change=${s=>this._typed(t,s)} />
          <span class="unit">${t.unit}</span>
          <button class="st" aria-label="Aumenta" @click=${()=>this._step(t,1)}>+</button>
        </div>
      </div>
    `}_toggleRows(t){return Xe[t].map(s=>p`
        <div class="row">
          <div class="t"><div class="lab">${s.label}</div>${s.hint?p`<div class="hint">${s.hint}</div>`:d}</div>
          <button class=${this._s[s.key]?"sw on":"sw"} role="switch" aria-checked=${this._s[s.key]?"true":"false"} aria-label=${s.label} @click=${()=>this._set(s.key,!this._s[s.key])}><span class="knob"></span></button>
        </div>
      `)}render(){if(!this.hass||!this._s)return d;let t=It(this._s),s=this._suggest?.suggestion??null;return p`
      <div class="backdrop" @click=${i=>i.target===i.currentTarget&&this._close()}>
        <div class="panel" role="dialog" aria-modal="true" aria-label="Preferenze stufa">
          <div class="head">
            <div class="title">Preferenze della stufa</div>
            <button class="x" aria-label="Chiudi" @click=${()=>this._close()}>✕</button>
          </div>
          <div class="body">
            <div class="sec">Sensori</div>
            ${this._entityRow("Sensore di potenza (W)","power_sensor",["sensor"],!0)}
            ${this._entityRow("Interruttore di accensione della stufa (per esempio lo Shelly)","switch",["switch","input_boolean","light"],!1)}
            ${this._entityRow("Interruttore della presa (solo stato)","plug",["switch","input_boolean","light"],!1)}
            ${this._entityRow("Contatore di energia (kWh)","energy_sensor",["sensor"],!1)}

            <div class="sec">Soglie di potenza</div>
            ${_e.map(i=>this._numRow(i))}
            ${this._toggleRows("soglie")}
            <div class="row col">
              <button class="btn" ?disabled=${this._busy} @click=${()=>void this._suggestFromHistory()}>Suggerisci le soglie dallo storico</button>
              ${this._suggest?s?p`<div class="sugg">
                      Dai ${v(this._suggest.samples)} campioni degli ultimi ${this._suggest.days} giorni:
                      ${Object.entries(s).map(([i,n])=>p`<span class="pill">${i.replaceAll("_"," ")} ${v(n,1)} W</span>`)}
                      <div><button class="btn primary" @click=${()=>this._applySuggestion()}>Usa questi valori</button></div>
                    </div>`:p`<div class="hint">Lo storico non basta per proporre soglie: accendi e spegni la stufa almeno una volta con il sensore attivo.</div>`:d}
            </div>

            <div class="sec">Comportamento</div>
            ${xe.map(i=>this._numRow(i))}
            ${this._toggleRows("comportamento")}

            <div class="sec">Notifiche</div>
            ${this._toggleRows("notifiche")}
            <div class="row col">
              <div class="lab">Servizio di notifica</div>
              <input class="txt" .value=${this._s.notify_service} placeholder="notify.mobile_app_telefono (vuoto = notifica di Home Assistant)" @change=${i=>this._set("notify_service",i.target.value.trim())} />
            </div>

            <div class="sec">Aspetto</div>
            <div class="row col">
              <div class="lab">Colore delle ceramiche</div>
              <div class="tiles">
                ${Object.entries(at).map(([i,[n,r]])=>p`<button class=${this._s.tile_color===i?"tile on":"tile"} style="background:linear-gradient(135deg,${r},${n})" aria-label=${i} @click=${()=>this._set("tile_color",i)}><span>${i}</span></button>`)}
              </div>
            </div>

            ${t.length?p`<div class="err">${t[0]}</div>`:d}
            ${this._error?p`<div class="err">${this._error}</div>`:d}
            ${this._msg?p`<div class="okbox">${this._msg}</div>`:d}
          </div>
          <div class="foot">
            <button class="btn" @click=${()=>this._close()}>Annulla</button>
            <button class="btn primary" ?disabled=${this._busy||t.length>0} @click=${()=>void this._save()}>Salva</button>
          </div>
        </div>
      </div>
    `}static{this.styles=[M,k`
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
    `]}};m([x({attribute:!1})],C.prototype,"hass",2),m([x({attribute:!1})],C.prototype,"info",2),m([g()],C.prototype,"_s",2),m([g()],C.prototype,"_src",2),m([g()],C.prototype,"_busy",2),m([g()],C.prototype,"_error",2),m([g()],C.prototype,"_msg",2),m([g()],C.prototype,"_suggest",2);customElements.get("stufa-settings-dialog")||customElements.define("stufa-settings-dialog",C);var N=class extends ${constructor(){super(...arguments);this._busy=!1;this._error="";this._onKey=t=>{t.key==="Escape"&&this._close()}}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this._onKey),this._sch=JSON.parse(JSON.stringify(this.info.schedule))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this._onKey)}_close(){this.dispatchEvent(new CustomEvent("closed")),this.remove()}_patch(t,s){this._sch={...this._sch,slots:this._sch.slots.map((i,n)=>n===t?{...i,...s}:i)}}_toggleDay(t,s){let i=this._sch.slots[t].days;this._patch(t,{days:i.includes(s)?i.filter(n=>n!==s):[...i,s].sort((n,r)=>n-r)})}_add(){this._sch={...this._sch,slots:[...this._sch.slots,Ae()]}}_remove(t){this._sch={...this._sch,slots:this._sch.slots.filter((s,i)=>i!==t)}}_duplicate(t){let s=JSON.parse(JSON.stringify(this._sch.slots[t]));this._sch={...this._sch,slots:[...this._sch.slots.slice(0,t+1),s,...this._sch.slots.slice(t+1)]}}async _save(){let t=Ut(this._sch);if(t.length){this._error=t[0];return}this._busy=!0,this._error="";try{await this.hass.callWS({type:"stufa_pellet/schedule",entry_id:this.info.entry_id,schedule:this._sch}),this.dispatchEvent(new CustomEvent("saved")),this._close()}catch(s){let i=s instanceof Error?s.message:s?.message??String(s);this._error=`Impossibile salvare: ${i}`}finally{this._busy=!1}}_week(){let t=Se(this._sch.slots);return p`
      <div class="week" aria-label="Vista della settimana">
        ${t.map((s,i)=>p`
            <div class="wd"><span>${yt[i]}</span>
              <div class="wbar">${s.map(([n,r])=>p`<i style="left:${n/1440*100}%;width:${(r-n)/1440*100}%"></i>`)}</div>
            </div>`)}
        <div class="wd axis"><span></span><div class="wax"><b>0</b><b>6</b><b>12</b><b>18</b><b>24</b></div></div>
      </div>`}render(){if(!this._sch)return d;let t=Ut(this._sch);return p`
      <div class="backdrop" @click=${s=>s.target===s.currentTarget&&this._close()}>
        <div class="panel" role="dialog" aria-modal="true" aria-label="Programma stufa">
          <div class="head">
            <div class="title">Programma settimanale</div>
            <button class="x" aria-label="Chiudi" @click=${()=>this._close()}>✕</button>
          </div>
          <div class="body">
            <div class="row top">
              <div class="t"><div class="lab">Programmazione attiva</div>
                <div class="hint">Alle ore indicate l'interruttore della stufa si accende e si spegne. Se la accendi o la spegni a mano, il programma riprende alla fascia successiva.</div></div>
              <button class=${this._sch.enabled?"sw on":"sw"} role="switch" aria-checked=${this._sch.enabled?"true":"false"} aria-label="Programmazione attiva" @click=${()=>this._sch={...this._sch,enabled:!this._sch.enabled}}><span class="knob"></span></button>
            </div>

            ${this._week()}

            <div class="sec">Fasce</div>
            ${this._sch.slots.length===0?p`<div class="empty">Nessuna fascia: aggiungine una.</div>`:d}
            ${this._sch.slots.map((s,i)=>{let n=Dt(s);return p`
                <div class="slot ${n?"bad":""}">
                  <div class="days" role="group" aria-label="Giorni">
                    ${ye.map((r,l)=>p`<button class=${s.days.includes(l)?"day on":"day"} title=${yt[l]} aria-pressed=${s.days.includes(l)?"true":"false"} @click=${()=>this._toggleDay(i,l)}>${r}</button>`)}
                  </div>
                  <div class="times">
                    <label>Accendi<input type="time" .value=${s.start} @change=${r=>this._patch(i,{start:r.target.value})} /></label>
                    <label>Spegni<input type="time" .value=${s.end} @change=${r=>this._patch(i,{end:r.target.value})} /></label>
                    <span class="grow"></span>
                    <button class="mini" aria-label="Duplica fascia" title="Duplica" @click=${()=>this._duplicate(i)}>⧉</button>
                    <button class="mini del" aria-label="Elimina fascia" title="Elimina" @click=${()=>this._remove(i)}>🗑</button>
                  </div>
                  <div class="sum">${n??`${ke(s.days)}${we(s)?" \xB7 finisce il giorno dopo":""}`}</div>
                </div>`})}
            <button class="btn" @click=${()=>this._add()}>+ Aggiungi fascia</button>

            ${t.length?p`<div class="err">${t[0]}</div>`:d}
            ${this._error?p`<div class="err">${this._error}</div>`:d}
          </div>
          <div class="foot">
            <button class="btn" @click=${()=>this._close()}>Annulla</button>
            <button class="btn primary" ?disabled=${this._busy||t.length>0} @click=${()=>void this._save()}>Salva</button>
          </div>
        </div>
      </div>
    `}static{this.styles=[M,k`
      .row { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 4px 0 12px; }
      .t { flex: 1; min-width: 0; }
      .lab { font-size: 0.95rem; font-weight: 500; }
      .hint { font-size: 0.78rem; color: var(--secondary-text-color, #727272); margin-top: 2px; line-height: 1.3; }
      .sw { flex: none; width: 44px; height: 26px; border-radius: 13px; border: 0; background: var(--disabled-color, #bdbdbd); position: relative; cursor: pointer; transition: background 0.2s; }
      .sw.on { background: var(--primary-color, #03a9f4); }
      .sw .knob { position: absolute; top: 3px; left: 3px; width: 20px; height: 20px; border-radius: 50%; background: #fff; transition: transform 0.2s; }
      .sw.on .knob { transform: translateX(18px); }
      .week { margin: 4px 0 12px; padding: 10px 12px; border-radius: 12px; background: var(--secondary-background-color, #f2f2f2); }
      .wd { display: flex; align-items: center; gap: 8px; margin: 3px 0; font-size: 0.75rem; }
      .wd span { width: 28px; color: var(--secondary-text-color, #727272); }
      .wbar { position: relative; flex: 1; height: 10px; border-radius: 5px; background: rgba(127, 127, 127, 0.18); overflow: hidden; }
      .wbar i { position: absolute; top: 0; bottom: 0; background: #ef4444; opacity: 0.85; }
      .wax { flex: 1; display: flex; justify-content: space-between; font-size: 0.65rem; color: var(--secondary-text-color, #727272); }
      .wax b { font-weight: 400; }
      .sec { font-weight: 600; font-size: 0.8rem; letter-spacing: 0.06em; text-transform: uppercase; color: var(--secondary-text-color, #727272); margin: 8px 0 6px; }
      .slot { padding: 10px; margin-bottom: 8px; border: 1px solid var(--divider-color, #ddd); border-radius: 12px; }
      .slot.bad { border-color: #dc2626; }
      .days { display: flex; gap: 5px; margin-bottom: 8px; }
      .day { width: 34px; height: 34px; border-radius: 50%; border: 1px solid var(--divider-color, #ccc); background: transparent; color: inherit; font-size: 0.85rem; cursor: pointer; }
      .day.on { background: var(--primary-color, #03a9f4); color: #fff; border-color: transparent; }
      .times { display: flex; align-items: flex-end; gap: 10px; flex-wrap: wrap; }
      .times label { display: flex; flex-direction: column; font-size: 0.72rem; color: var(--secondary-text-color, #727272); gap: 2px; }
      .times input { padding: 6px 8px; border-radius: 8px; border: 1px solid var(--divider-color, #ccc); background: var(--card-background-color, #fff); color: var(--primary-text-color, #212121); font-size: 0.95rem; }
      .grow { flex: 1; }
      .mini { border: 1px solid var(--divider-color, #ccc); background: transparent; color: inherit; border-radius: 8px; width: 34px; height: 34px; cursor: pointer; font-size: 0.95rem; }
      .sum { margin-top: 6px; font-size: 0.78rem; color: var(--secondary-text-color, #727272); }
      .slot.bad .sum { color: #b91c1c; }
    `]}};m([x({attribute:!1})],N.prototype,"hass",2),m([x({attribute:!1})],N.prototype,"info",2),m([g()],N.prototype,"_sch",2),m([g()],N.prototype,"_busy",2),m([g()],N.prototype,"_error",2);customElements.get("stufa-schedule-dialog")||customElements.define("stufa-schedule-dialog",N);var Qe=o=>o<60?`${o} min`:o%60===0?`${o/60} h`:`${Math.floor(o/60)} h ${o%60} min`,I=class extends ${constructor(){super(...arguments);this._custom="";this._busy=!1;this._error="";this._onKey=t=>{t.key==="Escape"&&this._close()}}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this._onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this._onKey)}_close(){this.dispatchEvent(new CustomEvent("closed")),this.remove()}async _start(t){if(!Number.isInteger(t)||t<0||t>1440){this._error="Scegli un tempo tra 1 minuto e 24 ore.";return}this._busy=!0,this._error="";try{await this.hass.callWS({type:"stufa_pellet/timer",entry_id:this.info.entry_id,minutes:t}),this.dispatchEvent(new CustomEvent("saved")),this._close()}catch(s){let i=s instanceof Error?s.message:s?.message??String(s);this._error=`Impossibile avviare il timer: ${i}`}finally{this._busy=!1}}render(){if(!this.info)return d;let t=this.info.timer_until?Date.parse(this.info.timer_until):null,s=Date.now(),i=Number(this._custom.replace(",","."));return p`
      <div class="backdrop" @click=${n=>n.target===n.currentTarget&&this._close()}>
        <div class="panel" role="dialog" aria-modal="true" aria-label="Timer stufa">
          <div class="head">
            <div class="title">Timer</div>
            <button class="x" aria-label="Chiudi" @click=${()=>this._close()}>✕</button>
          </div>
          <div class="body">
            ${t!==null&&t>s?p`<div class="active">Timer in corso: la stufa si spegne ${vt(t,s)} (tra ${Y(t-s)}).
                  <div><button class="btn" ?disabled=${this._busy} @click=${()=>void this._start(0)}>Annulla il timer</button></div></div>`:d}
            <div class="lab">Accendi ora e spegni dopo</div>
            <div class="chips">
              ${$e.map(n=>p`<button class="chip" ?disabled=${this._busy} @click=${()=>void this._start(n)}>${Qe(n)}</button>`)}
            </div>
            <div class="custom">
              <input type="text" inputmode="numeric" placeholder="minuti" .value=${this._custom} @input=${n=>this._custom=n.target.value} aria-label="Minuti" />
              <button class="btn primary" ?disabled=${this._busy||!(i>=1)} @click=${()=>void this._start(Math.round(i))}>Avvia</button>
            </div>
            <div class="hint">Il timer accende subito l'interruttore e lo spegne alla scadenza; durante il timer le fasce del programma non intervengono.</div>
            ${this._error?p`<div class="err">${this._error}</div>`:d}
          </div>
        </div>
      </div>
    `}static{this.styles=[M,k`
      .lab { font-size: 0.95rem; font-weight: 500; margin-bottom: 8px; }
      .chips { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
      .chip { padding: 12px 6px; border-radius: 12px; border: 1px solid var(--divider-color, #ccc); background: var(--secondary-background-color, #f4f4f4); color: inherit; font-size: 0.95rem; cursor: pointer; }
      .chip:hover { border-color: var(--primary-color, #03a9f4); }
      .custom { display: flex; gap: 8px; margin: 12px 0; }
      .custom input { flex: 1; padding: 9px 10px; border-radius: 10px; border: 1px solid var(--divider-color, #ccc); background: var(--card-background-color, #fff); color: inherit; font-size: 0.95rem; }
      .hint { font-size: 0.78rem; color: var(--secondary-text-color, #727272); line-height: 1.35; }
      .active { padding: 10px 12px; margin-bottom: 14px; border-radius: 12px; background: rgba(96, 165, 250, 0.16); font-size: 0.9rem; }
      .active .btn { margin-top: 8px; }
    `]}};m([x({attribute:!1})],I.prototype,"hass",2),m([x({attribute:!1})],I.prototype,"info",2),m([g()],I.prototype,"_custom",2),m([g()],I.prototype,"_busy",2),m([g()],I.prototype,"_error",2);customElements.get("stufa-timer-dialog")||customElements.define("stufa-timer-dialog",I);var Ft=24*36e5,L=class extends ${constructor(){super(...arguments);this._config={type:"custom:stufa-pellet-card"};this._info=null;this._error="";this._segs=[];this._now=Date.now();this._loadedAt=0;this._timelineAt=0;this._loading=!1;this._syncers=new Set}setConfig(t){this._config={...t},this._info=null,this._loadedAt=0}getCardSize(){return 6}static getStubConfig(){return{type:"custom:stufa-pellet-card"}}connectedCallback(){super.connectedCallback(),this._tick=window.setInterval(()=>this._now=Date.now(),15e3)}disconnectedCallback(){super.disconnectedCallback(),this._tick&&window.clearInterval(this._tick)}updated(){this.hass&&!this._loading&&(!this._info||Date.now()-this._loadedAt>5*6e4)&&this._loadInfo(),this._info&&Date.now()-this._timelineAt>5*6e4&&this._loadTimeline()}async _loadInfo(){this._loading=!0;try{let t={type:"stufa_pellet/info"};this._config.entry_id&&(t.entry_id=this._config.entry_id),this._info=await this.hass.callWS(t),this._error=""}catch(t){let s=t instanceof Error?t.message:t?.message??String(t);this._error=`Stufa non configurata o integrazione non caricata (${s}).`}finally{this._loadedAt=Date.now(),this._loading=!1}}async _loadTimeline(){let t=this._info?.entities.stato;if(!t)return;this._timelineAt=Date.now();let s=Date.now(),i=s-Ft;try{let n=await this.hass.callWS({type:"history/history_during_period",start_time:new Date(i).toISOString(),end_time:new Date(s).toISOString(),entity_ids:[t],include_start_time_state:!0,significant_changes_only:!1,minimal_response:!0,no_attributes:!0});this._segs=xt(n[t],i,s)}catch{this._timelineAt=0}}async _open(t){if(!this._info)return;if(t==="stufa-schedule-dialog"||t==="stufa-timer-dialog"||t==="stufa-settings-dialog"){for(;this._loading;)await new Promise(n=>setTimeout(n,50));if(await this._loadInfo(),!this._info)return}let s=document.createElement(t);s.hass=this.hass,s.info=this._info,s.addEventListener("saved",()=>{this._loadedAt=0,this._timelineAt=0,this._loadInfo()}),document.body.appendChild(s);let i=()=>{s.isConnected&&(s.hass=this.hass)};this._syncers.add(i),s.addEventListener("closed",()=>this._syncers.delete(i))}willUpdate(){for(let t of this._syncers)t()}_toggleSwitch(){let t=this._info?.sources.switch;t&&this.hass.callService("homeassistant","toggle",{entity_id:t})}_live(){let t=this._info,s=t.entities,i=s.stato?this.hass.states[s.stato]:void 0,n=i?.attributes??{},r=lt(i?.state??t.state),l=q(n.potenza)??q(this.hass.states[t.sources.power_sensor]?.state),a=n.da??t.since,h=t.sources.switch?this.hass.states[t.sources.switch]?.state:void 0,f=t.sources.plug?this.hass.states[t.sources.plug]?.state:void 0,c=J=>s[J]?q(this.hass.states[s[J]]?.state):null,_=s.modo?this.hass.states[s.modo]:void 0,b=_?.attributes??{},y=["programma","manuale","fuori_programma","timer"].includes(String(_?.state))?_.state:t.mode,E=b.prossimo_evento??t.next_event?.time??null,w=b.prossima_azione?b.prossima_azione==="accensione"?"on":"off":t.next_event?.kind??"off",u=b.timer_fino??t.timer_until;return{mode:y,scheduleEnabled:b.programmazione_attiva===!0||_===void 0&&t.schedule.enabled,next:E?{kind:w,time:Date.parse(E)}:null,timerUntil:u?Date.parse(u):null,state:r,power:l,sinceMs:a?Date.parse(a):null,switchOn:h==="on"?!0:h==="off"?!1:null,plugOn:f==="on"?!0:f==="off"?!1:null,blocked:n.azioni_bloccate===!0,ignitions:c("accensioni_oggi"),hours:c("ore_in_funzione_oggi"),energy:c("energia_oggi")}}_tile(t,s,i,n=""){return p`<div class="tile"><ha-icon icon=${t}></ha-icon><div class="v">${i}</div><div class="l">${s}</div>${n?p`<div class="s">${n}</div>`:d}</div>`}render(){if(!this.hass)return d;let t=this._config.title??this._info?.title??"Stufa a pellet";if(this._error&&!this._info)return p`<ha-card><div class="pad"><div class="title">${t}</div><div class="errbox">${this._error}</div></div></ha-card>`;if(!this._info)return p`<ha-card><div class="pad"><div class="title">${t}</div><div class="muted">Carico…</div></div></ha-card>`;let s=this._info,i=s.settings,n=this._live(),r=le(n.power,i),l=_t[n.state],a=n.sinceMs!==null?Y(this._now-n.sinceMs):"",h=this._now-Ft,f=c=>Math.min(100,Math.max(0,(c-h)/Ft*100));return p`
      <ha-card>
        <div class="pad">
          <div class="top">
            <div class="title">${t}</div>
            <div class="pill ${l}"><i></i>${P[n.state]}${a&&n.state!=="non_disponibile"?p`<span class="since"> · da ${a}</span>`:d}</div>
          </div>

          ${s.sources.switch?(()=>{let c=Ee(n.mode,n.scheduleEnabled,n.next,n.timerUntil,this._now);return p`<div class="mode ${c.tone}"><ha-icon icon=${c.icon}></ha-icon><span class="ml">${c.label}</span>${c.detail?p`<span class="md">· ${c.detail}</span>`:d}</div>`})():d}

          <div class="main">
            <div class="stove">${ae(Ce(n.state,i.tile_color))}</div>
            <div class="side">
              <div class="power">
                <div class="big">${v(n.power,n.power!==null&&n.power%1?1:0)}<span> W</span></div>
                <div class="muted">potenza della presa</div>
              </div>
              <div class="gauge" aria-label="Potenza e soglie">
                <div class="bar">
                  ${r.zones.map(c=>p`<div class="zone" style="left:${c.from}%;width:${Math.max(.8,c.to-c.from)}%;background:${c.color}" title=${c.label}></div>`)}
                  ${r.marker!==null?p`<div class="mark" style="left:${r.marker}%"></div>`:d}
                </div>
                <div class="ticks">${r.ticks.map(c=>p`<span style="left:${c.at}%">${c.label}</span>`)}</div>
              </div>
              <div class="tiles">
                ${this._tile("mdi:fire-circle","Accensioni oggi",n.ignitions!==null?v(n.ignitions):"\u2013")}
                ${this._tile("mdi:clock-outline","In funzione oggi",n.hours!==null?`${v(n.hours,1)} h`:"\u2013")}
                ${s.sources.switch?this._tile("mdi:toggle-switch","Interruttore",n.switchOn===null?"\u2013":n.switchOn?"Acceso":"Spento",n.blocked?"azioni bloccate":""):d}
                ${s.sources.plug?this._tile(n.plugOn===!1?"mdi:power-plug-off":"mdi:power-plug","Presa",n.plugOn===null?"\u2013":n.plugOn?"Accesa":"Spenta"):d}
                ${n.energy!==null?this._tile("mdi:lightning-bolt","Energia oggi",`${v(n.energy,2)} kWh`):d}
              </div>
            </div>
          </div>

          <div class="tl">
            <div class="tlh"><span>Ultime 24 ore</span><span class="muted">${this._segs.length===0?"nessun dato":""}</span></div>
            <div class="tlbar">
              ${this._segs.map(c=>p`<div class="seg" title=${P[c.state]} style="left:${f(c.from)}%;width:${Math.max(.3,f(c.to)-f(c.from))}%;background:${S[c.state]==="transparent"?"#9aa1ad":S[c.state]}"></div>`)}
            </div>
            <div class="tlt"><span>24 h fa</span><span>12 h fa</span><span>ora</span></div>
          </div>

          <div class="actions">
            <button class="btn" @click=${()=>void this._open("stufa-info-dialog")}><ha-icon icon="mdi:information-outline"></ha-icon>Stato</button>
            <button class="btn" @click=${()=>void this._open("stufa-charts-dialog")}><ha-icon icon="mdi:chart-line"></ha-icon>Grafici</button>
            ${s.sources.switch?p`<button class="btn" @click=${()=>void this._open("stufa-schedule-dialog")}><ha-icon icon="mdi:calendar-clock"></ha-icon>Programma</button>
                <button class="btn" @click=${()=>void this._open("stufa-timer-dialog")}><ha-icon icon="mdi:timer-outline"></ha-icon>Timer</button>`:d}
            ${i.show_switch_button&&s.sources.switch?p`<button class=${n.switchOn?"btn plug on":"btn plug"} title="Tocca per accendere o spegnere la stufa" @click=${()=>this._toggleSwitch()} aria-pressed=${n.switchOn?"true":"false"}><ha-icon icon="mdi:power"></ha-icon>${n.switchOn?"Interruttore acceso":"Interruttore spento"}</button>`:d}
            <span class="grow"></span>
            <button class="btn icon" aria-label="Preferenze" @click=${()=>void this._open("stufa-settings-dialog")}><ha-icon icon="mdi:cog"></ha-icon></button>
          </div>
        </div>
      </ha-card>
    `}static{this.styles=k`
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
    .mode { display: flex; align-items: center; flex-wrap: wrap; gap: 6px; padding: 8px 12px; margin-bottom: 12px; border-radius: 12px; font-size: 0.88rem; background: var(--secondary-background-color, #f2f2f2); }
    .mode ha-icon { --mdc-icon-size: 18px; }
    .mode .ml { font-weight: 600; }
    .mode .md { color: var(--secondary-text-color, #727272); }
    .mode.success { background: rgba(22, 163, 74, 0.13); } .mode.success ha-icon, .mode.success .ml { color: #166534; }
    .mode.warning { background: rgba(245, 158, 11, 0.16); } .mode.warning ha-icon, .mode.warning .ml { color: #92400e; }
    .mode.accent { background: rgba(96, 165, 250, 0.16); } .mode.accent ha-icon, .mode.accent .ml { color: #1e40af; }
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
  `}};m([x({attribute:!1})],L.prototype,"hass",2),m([g()],L.prototype,"_config",2),m([g()],L.prototype,"_info",2),m([g()],L.prototype,"_error",2),m([g()],L.prototype,"_segs",2),m([g()],L.prototype,"_now",2);customElements.get("stufa-pellet-card")||customElements.define("stufa-pellet-card",L);window.customCards=window.customCards||[];window.customCards.push({type:"stufa-pellet-card",name:"Stufa a pellet",description:"Stato della stufa, potenza con le soglie, cronologia, grafici e preferenze."});console.info("%c STUFA-PELLET-MONITOR %c v0.3.0 ","color: white; background: #8b2a22; font-weight: 700;","color: #8b2a22; background: white; font-weight: 700;");export{L as StufaPelletCard};
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
