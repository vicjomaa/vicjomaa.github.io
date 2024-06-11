var wt=Object.defineProperty;var xt=(e,t,n)=>t in e?wt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Be=(e,t,n)=>(xt(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function R(){}function ht(e){return e()}function Xe(){return Object.create(null)}function de(e){e.forEach(ht)}function Fe(e){return typeof e=="function"}function fe(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function yt(e){return Object.keys(e).length===0}function a(e,t){e.appendChild(t)}function E(e,t,n){e.insertBefore(t,n||null)}function $(e){e.parentNode&&e.parentNode.removeChild(e)}function we(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function p(e){return document.createElement(e)}function Ye(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function O(e){return document.createTextNode(e)}function x(){return O(" ")}function mt(){return O("")}function Z(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function u(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function It(e){return Array.from(e.childNodes)}function U(e,t){t=""+t,e.data!==t&&(e.data=t)}function H(e,t){e.value=t??""}function se(e,t,n){for(let l=0;l<e.options.length;l+=1){const r=e.options[l];if(r.__value===t){r.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function Ke(e){const t=e.querySelector(":checked");return t&&t.__value}function et(e,t){return new e(t)}let xe;function ge(e){xe=e}function kt(){if(!xe)throw new Error("Function called outside component initialization");return xe}function je(e){kt().$$.on_mount.push(e)}const ie=[],tt=[];let ce=[];const nt=[],Mt=Promise.resolve();let qe=!1;function Pt(){qe||(qe=!0,Mt.then(bt))}function ue(e){ce.push(e)}const De=new Set;let re=0;function bt(){if(re!==0)return;const e=xe;do{try{for(;re<ie.length;){const t=ie[re];re++,ge(t),St(t.$$)}}catch(t){throw ie.length=0,re=0,t}for(ge(null),ie.length=0,re=0;tt.length;)tt.pop()();for(let t=0;t<ce.length;t+=1){const n=ce[t];De.has(n)||(De.add(n),n())}ce.length=0}while(ie.length);for(;nt.length;)nt.pop()();qe=!1,De.clear(),ge(e)}function St(e){if(e.fragment!==null){e.update(),de(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ue)}}function $t(e){const t=[],n=[];ce.forEach(l=>e.indexOf(l)===-1?t.push(l):n.push(l)),n.forEach(l=>l()),ce=t}const Ee=new Set;let X;function vt(){X={r:0,c:[],p:X}}function _t(){X.r||de(X.c),X=X.p}function Y(e,t){e&&e.i&&(Ee.delete(e),e.i(t))}function ye(e,t,n,l){if(e&&e.o){if(Ee.has(e))return;Ee.add(e),X.c.push(()=>{Ee.delete(e),l&&(n&&e.d(1),l())}),e.o(t)}else l&&l()}function F(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function He(e){e&&e.c()}function Te(e,t,n){const{fragment:l,after_update:r}=e.$$;l&&l.m(t,n),ue(()=>{const s=e.$$.on_mount.map(ht).filter(Fe);e.$$.on_destroy?e.$$.on_destroy.push(...s):de(s),e.$$.on_mount=[]}),r.forEach(ue)}function Ve(e,t){const n=e.$$;n.fragment!==null&&($t(n.after_update),de(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ct(e,t){e.$$.dirty[0]===-1&&(ie.push(e),Pt(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Ie(e,t,n,l,r,s,o=null,i=[-1]){const d=xe;ge(e);const c=e.$$={fragment:null,ctx:[],props:s,update:R,not_equal:r,bound:Xe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(d?d.$$.context:[])),callbacks:Xe(),dirty:i,skip_bound:!1,root:t.target||d.$$.root};o&&o(c.root);let _=!1;if(c.ctx=n?n(e,t.props||{},(b,y,...m)=>{const C=m.length?m[0]:y;return c.ctx&&r(c.ctx[b],c.ctx[b]=C)&&(!c.skip_bound&&c.bound[b]&&c.bound[b](C),_&&Ct(e,b)),y}):[],c.update(),_=!0,de(c.before_update),c.fragment=l?l(c.ctx):!1,t.target){if(t.hydrate){const b=It(t.target);c.fragment&&c.fragment.l(b),b.forEach($)}else c.fragment&&c.fragment.c();t.intro&&Y(e.$$.fragment),Te(e,t.target,t.anchor),bt()}ge(d)}class ke{constructor(){Be(this,"$$");Be(this,"$$set")}$destroy(){Ve(this,1),this.$destroy=R}$on(t,n){if(!Fe(n))return R;const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const r=l.indexOf(n);r!==-1&&l.splice(r,1)}}$set(t){this.$$set&&!yt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Ot="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ot);const q={Arduino:{"Mega 2560":{name:"Arduino Mega 2560",usbVendorId:9025,usbProductId:66},Leonardo:{name:"Arduino Leonardo",usbVendorId:9025,usbProductId:32822},Micro:{name:"Micro",usbVendorId:9025,usbProductId:32823},"Genuino Zero":{name:"Genuino Zero",usbVendorId:9025,usbProductId:32845},"Genuino MKR1000":{name:"Genuino MKR1000",usbVendorId:9025,usbProductId:32846},MKRZERO:{name:"MKRZERO",usbVendorId:9025,usbProductId:32847},"MKR FOX 1200":{name:"MKR FOX 1200",usbVendorId:9025,usbProductId:32848},"MKR GSM 1400":{name:"MKR GSM 1400",usbVendorId:9025,usbProductId:32850},"MKR WAN 1300":{name:"MKR WAN 1300",usbVendorId:9025,usbProductId:32851},"MKR WiFi 1010":{name:"MKR WiFi 1010",usbVendorId:9025,usbProductId:32852},"MKR NB 1500":{name:"MKR NB 1500",usbVendorId:9025,usbProductId:32853},"MKR Vidor 4000":{name:"MKR Vidor 4000",usbVendorId:9025,usbProductId:32854},"NANO 33 IoT":{name:"NANO 33 IoT",usbVendorId:9025,usbProductId:32855}},Adafruit:{"ItsyBitsy 32u4 (Product ID 0x000E)":{name:"ItsyBitsy 32u4",usbVendorId:9114,usbProductId:14},"ItsyBitsy 32u4 (Product ID 0x800D)":{name:"ItsyBitsy 32u4",usbVendorId:9114,usbProductId:32781},"QT Py (ESP32-S3)":{name:"QT Py (ESP32-S3)",usbVendorId:12346,usbProductId:4097}}},ae=[];function Et(e,t=R){let n;const l=new Set;function r(i){if(fe(e,i)&&(e=i,n)){const d=!ae.length;for(const c of l)c[1](),ae.push(c,e);if(d){for(let c=0;c<ae.length;c+=2)ae[c][0](ae[c+1]);ae.length=0}}}function s(i){r(i(e))}function o(i,d=R){const c=[i,d];return l.add(c),l.size===1&&(n=t(r,s)||R),i(e),()=>{l.delete(c),l.size===0&&n&&(n(),n=null)}}return{set:r,update:s,subscribe:o}}const Tt=null,gt=Et(Tt);function Vt(e){gt.set(e)}function jt(){let e=null;return gt.subscribe(n=>{e=n})(),e}function lt(e,t,n){const l=e.slice();return l[25]=t[n],l}function ot(e,t,n){const l=e.slice();return l[4]=t[n],l}function st(e){let t,n=e[4]+"",l,r;return{c(){t=p("option"),l=O(n),r=x(),t.__value=e[4],H(t,t.__value)},m(s,o){E(s,t,o),a(t,l),a(t,r)},p:R,d(s){s&&$(t)}}}function rt(e){let t,n=q[e[4]][e[25]].name+"",l,r,s;return{c(){t=p("option"),l=O(n),r=x(),t.__value=s=q[e[4]][e[25]].usbProductId,H(t,t.__value)},m(o,i){E(o,t,i),a(t,l),a(t,r)},p(o,i){i&16&&n!==(n=q[o[4]][o[25]].name+"")&&U(l,n),i&16&&s!==(s=q[o[4]][o[25]].usbProductId)&&(t.__value=s,H(t,t.__value))},d(o){o&&$(t)}}}function Nt(e){let t,n,l,r,s,o,i,d,c,_,b,y,m,C,h,w,f,T,K,B,J,M,A,D,k,V,P,I,S,G,W,ee,Me,Ge,pe,Pe=e[1]?"Connected":"Not Avaliable",Ne,Se,We,z,Q,te,ze,Re,$e,Ze,Ae,Je,ne,he,me,Ce,Qe,be,ve,Oe,Le,Ue,le=F(Object.keys(q)),j=[];for(let v=0;v<le.length;v+=1)j[v]=st(ot(e,le,v));let oe=F(Object.keys(q[e[4]])),N=[];for(let v=0;v<oe.length;v+=1)N[v]=rt(lt(e,oe,v));return{c(){t=p("div"),n=p("div"),n.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    Sorry, <b>Web Serial</b> is not supported on this device, make sure you&#39;re
    running Chrome 78 or later and have enabled the
    <code>#enable-experimental-web-platform-features</code> flag in
    <code>chrome://flags</code>`,l=x(),r=p("div"),s=x(),o=p("div"),i=p("label"),d=p("div"),d.innerHTML='<span class="label-text">Manufacturer</span>',c=x(),_=p("select"),b=p("option"),b.textContent="Pick a board";for(let v=0;v<j.length;v+=1)j[v].c();y=x(),m=p("label"),C=p("div"),C.innerHTML='<span class="label-text">Board</span>',h=x(),w=p("select"),f=p("option"),f.textContent="Pick a reference";for(let v=0;v<N.length;v+=1)N[v].c();T=x(),K=p("label"),B=p("div"),B.innerHTML='<span class="label-text">Baud Rate</span>',J=x(),M=p("select"),A=p("option"),A.textContent="Pick the baudRate",D=p("option"),D.textContent="9600",k=p("option"),k.textContent="19200",V=p("option"),V.textContent="57600",P=p("option"),P.textContent="115200",I=x(),S=p("div"),S.textContent="Connection State",G=x(),W=p("div"),ee=p("div"),Me=p("div"),Me.textContent="Connection",Ge=x(),pe=p("div"),Ne=O(Pe),We=x(),z=p("div"),Q=Ye("svg"),te=Ye("path"),ze=x(),Re=p("span"),Re.innerHTML=`Sorry,<b>It looks</b> the device is being used by
        <code>another program</code>`,Ze=x(),Ae=p("div"),Je=x(),ne=p("div"),he=p("div"),me=p("button"),me.textContent="Close Port",Qe=x(),be=p("div"),ve=p("button"),ve.textContent="Reconnect",u(n,"id","notSupported"),u(n,"class","alert alert-error hidden"),u(r,"class","menu-section-bg"),u(d,"class","label"),b.__value="",H(b,b.__value),b.disabled=!0,b.selected=!0,u(_,"class","select select-bordered"),e[4]===void 0&&ue(()=>e[8].call(_)),u(i,"class","form-control w-full max-w-xs"),u(C,"class","label"),f.__value="",H(f,f.__value),f.disabled=!0,f.selected=!0,u(w,"class","select select-bordered"),e[2]===void 0&&ue(()=>e[9].call(w)),u(m,"class","form-control w-full max-w-xs"),u(B,"class","label"),A.__value="",H(A,A.__value),A.disabled=!0,A.selected=!0,D.__value=9600,H(D,D.__value),k.__value=19200,H(k,k.__value),V.__value=57600,H(V,V.__value),P.__value=115200,H(P,P.__value),u(M,"class","select select-bordered"),e[0]===void 0&&ue(()=>e[10].call(M)),u(K,"class","form-control w-full max-w-xs"),u(o,"class","flex lg:flex-row flex-col p-2"),u(S,"class","divider label-text text-s"),u(Me,"class","label-text text-xs"),u(pe,"class",Se="badge mt-2 "+(e[1]?"badge-accent":"badge-ghost")),u(ee,"class","flex flex-col shadow w-full p-2 items-center"),u(te,"stroke-linecap","round"),u(te,"stroke-linejoin","round"),u(te,"stroke-width","2"),u(te,"d","M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"),u(Q,"xmlns","http://www.w3.org/2000/svg"),u(Q,"class","stroke-current shrink-0 h-6 w-6"),u(Q,"fill","none"),u(Q,"viewBox","0 0 24 24"),u(z,"role","alert"),u(z,"class",$e="alert alert-error "+(e[3]?"":"hidden")),u(W,"class","section-stats w-full flex flex-col"),u(Ae,"class","divider label-text text-s"),u(me,"class","btn-sm"),u(he,"class",Ce=e[1]?"":"hidden"),u(ve,"class","btn-sm"),u(be,"class",Oe=e[1]==null&&e[0]!=null&&e[2]!=null?"":"hidden"),u(ne,"class","w-full flex justify-between items-center p-4"),u(t,"class","menu-section relative")},m(v,L){E(v,t,L),a(t,n),a(t,l),a(t,r),a(t,s),a(t,o),a(o,i),a(i,d),a(i,c),a(i,_),a(_,b);for(let g=0;g<j.length;g+=1)j[g]&&j[g].m(_,null);se(_,e[4],!0),a(o,y),a(o,m),a(m,C),a(m,h),a(m,w),a(w,f);for(let g=0;g<N.length;g+=1)N[g]&&N[g].m(w,null);se(w,e[2],!0),a(o,T),a(o,K),a(K,B),a(K,J),a(K,M),a(M,A),a(M,D),a(M,k),a(M,V),a(M,P),se(M,e[0],!0),a(t,I),a(t,S),a(t,G),a(t,W),a(W,ee),a(ee,Me),a(ee,Ge),a(ee,pe),a(pe,Ne),a(W,We),a(W,z),a(z,Q),a(Q,te),a(z,ze),a(z,Re),a(t,Ze),a(t,Ae),a(t,Je),a(t,ne),a(ne,he),a(he,me),a(ne,Qe),a(ne,be),a(be,ve),Le||(Ue=[Z(_,"change",e[8]),Z(w,"change",e[9]),Z(w,"change",e[5]),Z(M,"change",e[10]),Z(M,"change",e[7]),Z(me,"click",e[6]),Z(ve,"click",e[5])],Le=!0)},p(v,[L]){if(L&0){le=F(Object.keys(q));let g;for(g=0;g<le.length;g+=1){const _e=ot(v,le,g);j[g]?j[g].p(_e,L):(j[g]=st(_e),j[g].c(),j[g].m(_,null))}for(;g<j.length;g+=1)j[g].d(1);j.length=le.length}if(L&16&&se(_,v[4]),L&16){oe=F(Object.keys(q[v[4]]));let g;for(g=0;g<oe.length;g+=1){const _e=lt(v,oe,g);N[g]?N[g].p(_e,L):(N[g]=rt(_e),N[g].c(),N[g].m(w,null))}for(;g<N.length;g+=1)N[g].d(1);N.length=oe.length}L&20&&se(w,v[2]),L&1&&se(M,v[0]),L&2&&Pe!==(Pe=v[1]?"Connected":"Not Avaliable")&&U(Ne,Pe),L&2&&Se!==(Se="badge mt-2 "+(v[1]?"badge-accent":"badge-ghost"))&&u(pe,"class",Se),L&8&&$e!==($e="alert alert-error "+(v[3]?"":"hidden"))&&u(z,"class",$e),L&2&&Ce!==(Ce=v[1]?"":"hidden")&&u(he,"class",Ce),L&23&&Oe!==(Oe=v[1]==null&&v[0]!=null&&v[2]!=null?"":"hidden")&&u(be,"class",Oe)},i:R,o:R,d(v){v&&$(t),we(j,v),we(N,v),Le=!1,de(Ue)}}}function Rt(e){e=e.replace(/[{}]/g,"");const t=e.split(/,\s*/),n=[];return t.forEach(l=>{const[r,s]=l.split(":"),o=s.includes(".")?parseFloat(s):parseInt(s,10);n.push({[r]:o})}),n}function At(e,t,n){let l=null,r="",s=null,o=null,i=null,d="Arduino",c,_,b,y,m,C=!1;je(async()=>{document.getElementById("notSupported").classList.toggle("hidden","serial"in navigator)});function h(P){for(const I in q)for(const S in q[I]){const G=q[I][S];if(G.usbProductId===P)return G.usbVendorId}return null}async function w(){let P=[{usbVendorId:h(i),usbProductId:i}];if(l!=null&&i!=null)try{n(1,o=await navigator.serial.requestPort({filters:P})),await o.open({baudRate:l});let I=new TextDecoderStream;c=o.readable.pipeTo(I.writable),b=I.readable.pipeThrough(new TransformStream(new J)).pipeThrough(new TransformStream(new M)),m=b.getReader(),K();const S=new TextEncoderStream;_=S.readable.pipeTo(o.writable),y=S.writable,B("","echo(false);"),n(3,C=!1)}catch(I){n(3,C=!0),console.error("Error opening port:",I),n(1,o=null)}}async function f(){if(o){console.log(o),console.log("disconnect"),await T();return}console.log("connect"),await w()}async function T(){m&&(await m.cancel(),await c.catch(()=>{}),m=null,c=null),y&&(await y.getWriter().close(),await _,y=null,_=null),await o.close(),n(1,o=null)}async function K(){for(;;){const{value:P,done:I}=await m.read();if(P&&(r=P,s=Rt(r),Vt(s)),I){console.log("[readLoop] DONE",I),m.releaseLock();break}}}function B(...P){const I=y.getWriter();P.forEach(S=>{console.log("[SEND]",S),I.write(S+`
`)}),I.releaseLock()}class J{constructor(){this.container=""}transform(I,S){this.container+=I;const G=this.container.split(`\r
`);this.container=G.pop(),G.forEach(W=>S.enqueue(W))}flush(I){I.enqueue(this.container)}}class M{transform(I,S){try{S.enqueue(JSON.parse(I))}catch{S.enqueue(I)}}}async function A(P){n(0,l=parseInt(P.target.value)),await f()}function D(){d=Ke(this),n(4,d)}function k(){i=Ke(this),n(2,i),n(4,d)}function V(){l=Ke(this),n(0,l)}return[l,o,i,C,d,f,T,A,D,k,V]}class Lt extends ke{constructor(t){super(),Ie(this,t,At,Nt,fe,{})}}function at(e,t,n){const l=e.slice();return l[8]=t[n],l[10]=n,l}function it(e){let t,n=F(Object.keys(e[0])),l=[];for(let r=0;r<n.length;r+=1)l[r]=ct(at(e,n,r));return{c(){for(let r=0;r<l.length;r+=1)l[r].c();t=mt()},m(r,s){for(let o=0;o<l.length;o+=1)l[o]&&l[o].m(r,s);E(r,t,s)},p(r,s){if(s&1){n=F(Object.keys(r[0]));let o;for(o=0;o<n.length;o+=1){const i=at(r,n,o);l[o]?l[o].p(i,s):(l[o]=ct(i),l[o].c(),l[o].m(t.parentNode,t))}for(;o<l.length;o+=1)l[o].d(1);l.length=n.length}},d(r){r&&$(t),we(l,r)}}}function ct(e){let t,n,l,r,s,o,i=e[0][e[8]].sensor+"",d,c,_,b,y=e[0][e[8]].val+"",m,C,h,w,f=e[0][e[8]].min+"",T,K,B,J,M=e[0][e[8]].max+"",A,D;return{c(){t=p("div"),n=p("div"),l=p("div"),r=O("CH:"),s=O(e[10]),o=O(" - Data: "),d=O(i),c=O(":"),_=x(),b=p("div"),m=O(y),C=x(),h=p("div"),w=O("Min: "),T=O(f),K=x(),B=p("div"),J=O("Max: "),A=O(M),D=x(),u(l,"class","label-text"),u(b,"class","stat-value text-s!"),u(h,"class","stat-desc"),u(B,"class","stat-desc"),u(n,"class","border p-2"),u(t,"class","stats w-full my-2")},m(k,V){E(k,t,V),a(t,n),a(n,l),a(l,r),a(l,s),a(l,o),a(l,d),a(l,c),a(n,_),a(n,b),a(b,m),a(n,C),a(n,h),a(h,w),a(h,T),a(n,K),a(n,B),a(B,J),a(B,A),a(t,D)},p(k,V){V&1&&i!==(i=k[0][k[8]].sensor+"")&&U(d,i),V&1&&y!==(y=k[0][k[8]].val+"")&&U(m,y),V&1&&f!==(f=k[0][k[8]].min+"")&&U(T,f),V&1&&M!==(M=k[0][k[8]].max+"")&&U(A,M)},d(k){k&&$(t)}}}function Bt(e){let t,n,l,r=Object.keys(e[0]).length>0,s=r&&it(e);return{c(){t=p("div"),t.textContent="Properties Manipulable",n=x(),l=p("div"),s&&s.c(),u(t,"class","divider label-text text-s"),u(l,"class","flex flex-wrap")},m(o,i){E(o,t,i),E(o,n,i),E(o,l,i),s&&s.m(l,null)},p(o,[i]){i&1&&(r=Object.keys(o[0]).length>0),r?s?s.p(o,i):(s=it(o),s.c(),s.m(l,null)):s&&(s.d(1),s=null)},i:R,o:R,d(o){o&&($(t),$(n),$(l)),s&&s.d()}}}function Kt(e,t,n){let l=null,r=null,s={};je(()=>{window.addEventListener("message",({data:i,source:d})=>{i&&(r=i,l=jt(),o())})});function o(){r!==null&&l!=null&&(typeof s!="object"&&n(0,s={}),l.forEach((i,d)=>{for(const c in i)s[d]||n(0,s[d]={val:null,min:null,max:null,sensor:null},s),(i[c]<s[d].min||s[d].min==null)&&n(0,s[d].min=i[c],s),(i[c]>s[d].max||s[d].max==null)&&n(0,s[d].max=i[c],s),n(0,s[d].val=i[c],s),n(0,s[d].sensor=c,s)}),window.parent!==null&&window.parent.postMessage(s,"*"))}return[s]}class Dt extends ke{constructor(t){super(),Ie(this,t,Kt,Bt,fe,{})}}function qt(e){let t,n,l;return{c(){t=p("div"),t.textContent="How to use it",n=x(),l=p("div"),l.innerHTML='<div class="menu-section-bg"></div> <div class="flex lg:flex-row flex-col p-2"><div class="label font-bold"><span class="label-text">Example code</span></div> <div class="w-full"><div id="example-code" class="code-section bg-black"><pre data-prefix="1" class="whitespace-pre-wrap break-words"><code>// Add the extension on top</code></pre> <pre data-prefix="2" class="whitespace-pre-wrap break-words text-lime-500"><code>await loadScript(&quot;https://vicjomaa.github.io/addIframe.js&quot;)</code></pre> <pre data-prefix="3" class="whitespace-pre-wrap break-words"><code>//Add a variable to channel 0 </code></pre> <pre data-prefix="4" class="whitespace-pre-wrap break-words text-lime-500"><code>var edges = new sCC(0)</code></pre> <pre data-prefix="5" class="whitespace-pre-wrap break-words"><code>// Update edges in real time, by using the () =&gt; </code></pre> <pre data-prefix="7" class="whitespace-pre-wrap break-words text-lime-500"><code>shape(() =&gt; edges.val()).out()</code></pre></div></div></div> <div class="flex lg:flex-row flex-col p-2"><div class="label font-bold"><span class="label-text">Helper functions</span></div> <div class="w-full"><div id="example-code" class="code-section bg-black"><pre data-prefix="1" class="whitespace-pre-wrap break-words"><code>// Map function </code></pre> <pre data-prefix="2" class="whitespace-pre-wrap break-words text-lime-500"><code> map(valueSensor, inputMin, inputMax, outMin, outMax) </code></pre></div></div></div>',u(t,"class","divider label-text text-s"),u(l,"class","menu-section relative")},m(r,s){E(r,t,s),E(r,n,s),E(r,l,s)},p:R,i:R,o:R,d(r){r&&($(t),$(n),$(l))}}}function Ht(e){return je(async()=>{}),[]}class Ft extends ke{constructor(t){super(),Ie(this,t,Ht,qt,fe,{})}}function ut(e,t,n){const l=e.slice();return l[3]=t[n],l}function dt(e,t,n){const l=e.slice();return l[3]=t[n],l}function ft(e){let t,n,l=e[3].label+"",r,s,o,i,d;return{c(){t=p("a"),n=p("span"),r=O(l),s=x(),u(t,"role","tab"),u(t,"class",o="tab text-center !rounded-none "+(e[0]===e[3].value?"tab-active":""))},m(c,_){E(c,t,_),a(t,n),a(n,r),a(t,s),i||(d=Z(t,"click",function(){Fe(e[2](e[3].value))&&e[2](e[3].value).apply(this,arguments)}),i=!0)},p(c,_){e=c,_&2&&l!==(l=e[3].label+"")&&U(r,l),_&3&&o!==(o="tab text-center !rounded-none "+(e[0]===e[3].value?"tab-active":""))&&u(t,"class",o)},d(c){c&&$(t),i=!1,d()}}}function pt(e){let t,n,l,r,s;var o=e[3].component;function i(d,c){return{}}return o&&(n=et(o,i())),{c(){t=p("div"),n&&He(n.$$.fragment),l=x(),u(t,"class","box"),u(t,"style",r=e[0]===e[3].value?"":"display: none;")},m(d,c){E(d,t,c),n&&Te(n,t,null),a(t,l),s=!0},p(d,c){if(c&2&&o!==(o=d[3].component)){if(n){vt();const _=n;ye(_.$$.fragment,1,0,()=>{Ve(_,1)}),_t()}o?(n=et(o,i()),He(n.$$.fragment),Y(n.$$.fragment,1),Te(n,t,l)):n=null}(!s||c&3&&r!==(r=d[0]===d[3].value?"":"display: none;"))&&u(t,"style",r)},i(d){s||(n&&Y(n.$$.fragment,d),s=!0)},o(d){n&&ye(n.$$.fragment,d),s=!1},d(d){d&&$(t),n&&Ve(n)}}}function Gt(e){let t,n,l,r,s,o,i,d,c,_=F(e[1]),b=[];for(let h=0;h<_.length;h+=1)b[h]=ft(dt(e,_,h));let y=F(e[1]),m=[];for(let h=0;h<y.length;h+=1)m[h]=pt(ut(e,y,h));const C=h=>ye(m[h],1,1,()=>{m[h]=null});return{c(){t=p("div"),n=p("div"),l=x(),r=p("div"),r.textContent="HYDRA OSC",s=x(),o=p("div");for(let h=0;h<b.length;h+=1)b[h].c();i=x();for(let h=0;h<m.length;h+=1)m[h].c();d=mt(),u(n,"class","menu-section-bg"),u(r,"class","menu-header text-lg"),u(o,"role","tablist"),u(o,"class","tabs tabs-boxed p-0 "),u(t,"class","menu-section relative ")},m(h,w){E(h,t,w),a(t,n),a(t,l),a(t,r),a(t,s),a(t,o);for(let f=0;f<b.length;f+=1)b[f]&&b[f].m(o,null);E(h,i,w);for(let f=0;f<m.length;f+=1)m[f]&&m[f].m(h,w);E(h,d,w),c=!0},p(h,[w]){if(w&7){_=F(h[1]);let f;for(f=0;f<_.length;f+=1){const T=dt(h,_,f);b[f]?b[f].p(T,w):(b[f]=ft(T),b[f].c(),b[f].m(o,null))}for(;f<b.length;f+=1)b[f].d(1);b.length=_.length}if(w&3){y=F(h[1]);let f;for(f=0;f<y.length;f+=1){const T=ut(h,y,f);m[f]?(m[f].p(T,w),Y(m[f],1)):(m[f]=pt(T),m[f].c(),Y(m[f],1),m[f].m(d.parentNode,d))}for(vt(),f=y.length;f<m.length;f+=1)C(f);_t()}},i(h){if(!c){for(let w=0;w<y.length;w+=1)Y(m[w]);c=!0}},o(h){m=m.filter(Boolean);for(let w=0;w<m.length;w+=1)ye(m[w]);c=!1},d(h){h&&($(t),$(i),$(d)),we(b,h),we(m,h)}}}function Wt(e,t,n){let{items:l=[{label:"Code",value:1,component:Ft,d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"},{label:"Connect",value:2,component:Lt,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},{label:"PlayG",value:3,component:Dt,d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"}]}=t,{activeTabValue:r=1}=t;const s=o=>()=>n(0,r=o);return je(async()=>{document.getElementById("notSupported").classList.toggle("hidden","serial"in navigator)}),e.$$set=o=>{"items"in o&&n(1,l=o.items),"activeTabValue"in o&&n(0,r=o.activeTabValue)},[r,l,s]}class zt extends ke{constructor(t){super(),Ie(this,t,Wt,Gt,fe,{items:1,activeTabValue:0})}}function Zt(e){let t,n;return t=new zt({}),{c(){He(t.$$.fragment)},m(l,r){Te(t,l,r),n=!0},p:R,i(l){n||(Y(t.$$.fragment,l),n=!0)},o(l){ye(t.$$.fragment,l),n=!1},d(l){Ve(t,l)}}}class Jt extends ke{constructor(t){super(),Ie(this,t,null,Zt,fe,{})}}new Jt({target:document.getElementById("app")});
