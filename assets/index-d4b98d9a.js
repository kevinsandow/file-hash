(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&t(u)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();const ee="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function q(i,e,n,t){let s,r,u;const f=e||[0],c=(n=n||0)>>>3,a=t===-1?3:0;for(s=0;s<i.length;s+=1)u=s+c,r=u>>>2,f.length<=r&&f.push(0),f[r]|=i[s]<<8*(a+t*(u%4));return{value:f,binLen:8*i.length+n}}function F(i,e,n){switch(e){case"UTF8":case"UTF16BE":case"UTF16LE":break;default:throw new Error("encoding must be UTF8, UTF16BE, or UTF16LE")}switch(i){case"HEX":return function(t,s,r){return function(u,f,c,a){let w,l,h,p;if(u.length%2!=0)throw new Error("String of HEX type must be in byte increments");const d=f||[0],A=(c=c||0)>>>3,N=a===-1?3:0;for(w=0;w<u.length;w+=2){if(l=parseInt(u.substr(w,2),16),isNaN(l))throw new Error("String of HEX type contains invalid characters");for(p=(w>>>1)+A,h=p>>>2;d.length<=h;)d.push(0);d[h]|=l<<8*(N+a*(p%4))}return{value:d,binLen:4*u.length+c}}(t,s,r,n)};case"TEXT":return function(t,s,r){return function(u,f,c,a,w){let l,h,p,d,A,N,I,b,g=0;const y=c||[0],E=(a=a||0)>>>3;if(f==="UTF8")for(I=w===-1?3:0,p=0;p<u.length;p+=1)for(l=u.charCodeAt(p),h=[],128>l?h.push(l):2048>l?(h.push(192|l>>>6),h.push(128|63&l)):55296>l||57344<=l?h.push(224|l>>>12,128|l>>>6&63,128|63&l):(p+=1,l=65536+((1023&l)<<10|1023&u.charCodeAt(p)),h.push(240|l>>>18,128|l>>>12&63,128|l>>>6&63,128|63&l)),d=0;d<h.length;d+=1){for(N=g+E,A=N>>>2;y.length<=A;)y.push(0);y[A]|=h[d]<<8*(I+w*(N%4)),g+=1}else for(I=w===-1?2:0,b=f==="UTF16LE"&&w!==1||f!=="UTF16LE"&&w===1,p=0;p<u.length;p+=1){for(l=u.charCodeAt(p),b===!0&&(d=255&l,l=d<<8|l>>>8),N=g+E,A=N>>>2;y.length<=A;)y.push(0);y[A]|=l<<8*(I+w*(N%4)),g+=2}return{value:y,binLen:8*g+a}}(t,e,s,r,n)};case"B64":return function(t,s,r){return function(u,f,c,a){let w,l,h,p,d,A,N,I=0;const b=f||[0],g=(c=c||0)>>>3,y=a===-1?3:0,E=u.indexOf("=");if(u.search(/^[a-zA-Z0-9=+/]+$/)===-1)throw new Error("Invalid character in base-64 string");if(u=u.replace(/=/g,""),E!==-1&&E<u.length)throw new Error("Invalid '=' found in base-64 string");for(l=0;l<u.length;l+=4){for(d=u.substr(l,4),p=0,h=0;h<d.length;h+=1)w=ee.indexOf(d.charAt(h)),p|=w<<18-6*h;for(h=0;h<d.length-1;h+=1){for(N=I+g,A=N>>>2;b.length<=A;)b.push(0);b[A]|=(p>>>16-8*h&255)<<8*(y+a*(N%4)),I+=1}}return{value:b,binLen:8*I+c}}(t,s,r,n)};case"BYTES":return function(t,s,r){return function(u,f,c,a){let w,l,h,p;const d=f||[0],A=(c=c||0)>>>3,N=a===-1?3:0;for(l=0;l<u.length;l+=1)w=u.charCodeAt(l),p=l+A,h=p>>>2,d.length<=h&&d.push(0),d[h]|=w<<8*(N+a*(p%4));return{value:d,binLen:8*u.length+c}}(t,s,r,n)};case"ARRAYBUFFER":try{new ArrayBuffer(0)}catch{throw new Error("ARRAYBUFFER not supported by this environment")}return function(t,s,r){return function(u,f,c,a){return q(new Uint8Array(u),f,c,a)}(t,s,r,n)};case"UINT8ARRAY":try{new Uint8Array(0)}catch{throw new Error("UINT8ARRAY not supported by this environment")}return function(t,s,r){return q(t,s,r,n)};default:throw new Error("format must be HEX, TEXT, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY")}}function $(i,e,n,t){switch(i){case"HEX":return function(s){return function(r,u,f,c){const a="0123456789abcdef";let w,l,h="";const p=u/8,d=f===-1?3:0;for(w=0;w<p;w+=1)l=r[w>>>2]>>>8*(d+f*(w%4)),h+=a.charAt(l>>>4&15)+a.charAt(15&l);return c.outputUpper?h.toUpperCase():h}(s,e,n,t)};case"B64":return function(s){return function(r,u,f,c){let a,w,l,h,p,d="";const A=u/8,N=f===-1?3:0;for(a=0;a<A;a+=3)for(h=a+1<A?r[a+1>>>2]:0,p=a+2<A?r[a+2>>>2]:0,l=(r[a>>>2]>>>8*(N+f*(a%4))&255)<<16|(h>>>8*(N+f*((a+1)%4))&255)<<8|p>>>8*(N+f*((a+2)%4))&255,w=0;w<4;w+=1)d+=8*a+6*w<=u?ee.charAt(l>>>6*(3-w)&63):c.b64Pad;return d}(s,e,n,t)};case"BYTES":return function(s){return function(r,u,f){let c,a,w="";const l=u/8,h=f===-1?3:0;for(c=0;c<l;c+=1)a=r[c>>>2]>>>8*(h+f*(c%4))&255,w+=String.fromCharCode(a);return w}(s,e,n)};case"ARRAYBUFFER":try{new ArrayBuffer(0)}catch{throw new Error("ARRAYBUFFER not supported by this environment")}return function(s){return function(r,u,f){let c;const a=u/8,w=new ArrayBuffer(a),l=new Uint8Array(w),h=f===-1?3:0;for(c=0;c<a;c+=1)l[c]=r[c>>>2]>>>8*(h+f*(c%4))&255;return w}(s,e,n)};case"UINT8ARRAY":try{new Uint8Array(0)}catch{throw new Error("UINT8ARRAY not supported by this environment")}return function(s){return function(r,u,f){let c;const a=u/8,w=f===-1?3:0,l=new Uint8Array(a);for(c=0;c<a;c+=1)l[c]=r[c>>>2]>>>8*(w+f*(c%4))&255;return l}(s,e,n)};default:throw new Error("format must be HEX, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY")}}const m=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],S=[3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428],T=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],Y="Chosen SHA variant is not supported";function O(i,e){let n,t;const s=i.binLen>>>3,r=e.binLen>>>3,u=s<<3,f=4-s<<3;if(s%4!=0){for(n=0;n<r;n+=4)t=s+n>>>2,i.value[t]|=e.value[n>>>2]<<u,i.value.push(0),i.value[t+1]|=e.value[n>>>2]>>>f;return(i.value.length<<2)-4>=r+s&&i.value.pop(),{value:i.value,binLen:i.binLen+e.binLen}}return{value:i.value.concat(e.value),binLen:i.binLen+e.binLen}}function D(i){const e={outputUpper:!1,b64Pad:"=",outputLen:-1},n=i||{},t="Output length must be a multiple of 8";if(e.outputUpper=n.outputUpper||!1,n.b64Pad&&(e.b64Pad=n.b64Pad),n.outputLen){if(n.outputLen%8!=0)throw new Error(t);e.outputLen=n.outputLen}else if(n.shakeLen){if(n.shakeLen%8!=0)throw new Error(t);e.outputLen=n.shakeLen}if(typeof e.outputUpper!="boolean")throw new Error("Invalid outputUpper formatting option");if(typeof e.b64Pad!="string")throw new Error("Invalid b64Pad formatting option");return e}function K(i,e,n,t){const s=i+" must include a value and format";if(!e){if(!t)throw new Error(s);return t}if(e.value===void 0||!e.format)throw new Error(s);return F(e.format,e.encoding||"UTF8",n)(e.value)}class X{constructor(e,n,t){const s=t||{};if(this.t=n,this.i=s.encoding||"UTF8",this.numRounds=s.numRounds||1,isNaN(this.numRounds)||this.numRounds!==parseInt(this.numRounds,10)||1>this.numRounds)throw new Error("numRounds must a integer >= 1");this.o=e,this.h=[],this.u=0,this.l=!1,this.A=0,this.H=!1,this.S=[],this.p=[]}update(e){let n,t=0;const s=this.m>>>5,r=this.C(e,this.h,this.u),u=r.binLen,f=r.value,c=u>>>5;for(n=0;n<c;n+=s)t+this.m<=u&&(this.R=this.U(f.slice(n,n+s),this.R),t+=this.m);return this.A+=t,this.h=f.slice(t>>>5),this.u=u%this.m,this.l=!0,this}getHash(e,n){let t,s,r=this.v;const u=D(n);if(this.K){if(u.outputLen===-1)throw new Error("Output length must be specified in options");r=u.outputLen}const f=$(e,r,this.T,u);if(this.H&&this.F)return f(this.F(u));for(s=this.g(this.h.slice(),this.u,this.A,this.B(this.R),r),t=1;t<this.numRounds;t+=1)this.K&&r%32!=0&&(s[s.length-1]&=16777215>>>24-r%32),s=this.g(s,r,0,this.L(this.o),r);return f(s)}setHMACKey(e,n,t){if(!this.M)throw new Error("Variant does not support HMAC");if(this.l)throw new Error("Cannot set MAC key after calling update");const s=F(n,(t||{}).encoding||"UTF8",this.T);this.k(s(e))}k(e){const n=this.m>>>3,t=n/4-1;let s;if(this.numRounds!==1)throw new Error("Cannot set numRounds with MAC");if(this.H)throw new Error("MAC key already set");for(n<e.binLen/8&&(e.value=this.g(e.value,e.binLen,0,this.L(this.o),this.v));e.value.length<=t;)e.value.push(0);for(s=0;s<=t;s+=1)this.S[s]=909522486^e.value[s],this.p[s]=1549556828^e.value[s];this.R=this.U(this.S,this.R),this.A=this.m,this.H=!0}getHMAC(e,n){const t=D(n);return $(e,this.v,this.T,t)(this.Y())}Y(){let e;if(!this.H)throw new Error("Cannot call getHMAC without first setting MAC key");const n=this.g(this.h.slice(),this.u,this.A,this.B(this.R),this.v);return e=this.U(this.p,this.L(this.o)),e=this.g(n,this.v,this.m,e,this.v),e}}function U(i,e){return i<<e|i>>>32-e}function L(i,e){return i>>>e|i<<32-e}function te(i,e){return i>>>e}function _(i,e,n){return i^e^n}function ne(i,e,n){return i&e^~i&n}function se(i,e,n){return i&e^i&n^e&n}function he(i){return L(i,2)^L(i,13)^L(i,22)}function v(i,e){const n=(65535&i)+(65535&e);return(65535&(i>>>16)+(e>>>16)+(n>>>16))<<16|65535&n}function ce(i,e,n,t){const s=(65535&i)+(65535&e)+(65535&n)+(65535&t);return(65535&(i>>>16)+(e>>>16)+(n>>>16)+(t>>>16)+(s>>>16))<<16|65535&s}function B(i,e,n,t,s){const r=(65535&i)+(65535&e)+(65535&n)+(65535&t)+(65535&s);return(65535&(i>>>16)+(e>>>16)+(n>>>16)+(t>>>16)+(s>>>16)+(r>>>16))<<16|65535&r}function ae(i){return L(i,7)^L(i,18)^te(i,3)}function fe(i){return L(i,6)^L(i,11)^L(i,25)}function we(i){return[1732584193,4023233417,2562383102,271733878,3285377520]}function ie(i,e){let n,t,s,r,u,f,c;const a=[];for(n=e[0],t=e[1],s=e[2],r=e[3],u=e[4],c=0;c<80;c+=1)a[c]=c<16?i[c]:U(a[c-3]^a[c-8]^a[c-14]^a[c-16],1),f=c<20?B(U(n,5),ne(t,s,r),u,1518500249,a[c]):c<40?B(U(n,5),_(t,s,r),u,1859775393,a[c]):c<60?B(U(n,5),se(t,s,r),u,2400959708,a[c]):B(U(n,5),_(t,s,r),u,3395469782,a[c]),u=r,r=s,s=U(t,30),t=n,n=f;return e[0]=v(n,e[0]),e[1]=v(t,e[1]),e[2]=v(s,e[2]),e[3]=v(r,e[3]),e[4]=v(u,e[4]),e}function le(i,e,n,t){let s;const r=15+(e+65>>>9<<4),u=e+n;for(;i.length<=r;)i.push(0);for(i[e>>>5]|=128<<24-e%32,i[r]=4294967295&u,i[r-1]=u/4294967296|0,s=0;s<i.length;s+=16)t=ie(i.slice(s,s+16),t);return t}class me extends X{constructor(e,n,t){if(e!=="SHA-1")throw new Error(Y);super(e,n,t);const s=t||{};this.M=!0,this.F=this.Y,this.T=-1,this.C=F(this.t,this.i,this.T),this.U=ie,this.B=function(r){return r.slice()},this.L=we,this.g=le,this.R=[1732584193,4023233417,2562383102,271733878,3285377520],this.m=512,this.v=160,this.K=!1,s.hmacKey&&this.k(K("hmacKey",s.hmacKey,this.T))}}function Z(i){let e;return e=i=="SHA-224"?S.slice():T.slice(),e}function V(i,e){let n,t,s,r,u,f,c,a,w,l,h;const p=[];for(n=e[0],t=e[1],s=e[2],r=e[3],u=e[4],f=e[5],c=e[6],a=e[7],h=0;h<64;h+=1)p[h]=h<16?i[h]:ce(L(d=p[h-2],17)^L(d,19)^te(d,10),p[h-7],ae(p[h-15]),p[h-16]),w=B(a,fe(u),ne(u,f,c),m[h],p[h]),l=v(he(n),se(n,t,s)),a=c,c=f,f=u,u=v(r,w),r=s,s=t,t=n,n=v(w,l);var d;return e[0]=v(n,e[0]),e[1]=v(t,e[1]),e[2]=v(s,e[2]),e[3]=v(r,e[3]),e[4]=v(u,e[4]),e[5]=v(f,e[5]),e[6]=v(c,e[6]),e[7]=v(a,e[7]),e}class de extends X{constructor(e,n,t){if(e!=="SHA-224"&&e!=="SHA-256")throw new Error(Y);super(e,n,t);const s=t||{};this.F=this.Y,this.M=!0,this.T=-1,this.C=F(this.t,this.i,this.T),this.U=V,this.B=function(r){return r.slice()},this.L=Z,this.g=function(r,u,f,c){return function(a,w,l,h,p){let d,A;const N=15+(w+65>>>9<<4),I=w+l;for(;a.length<=N;)a.push(0);for(a[w>>>5]|=128<<24-w%32,a[N]=4294967295&I,a[N-1]=I/4294967296|0,d=0;d<a.length;d+=16)h=V(a.slice(d,d+16),h);return A=p==="SHA-224"?[h[0],h[1],h[2],h[3],h[4],h[5],h[6]]:h,A}(r,u,f,c,e)},this.R=Z(e),this.m=512,this.v=e==="SHA-224"?224:256,this.K=!1,s.hmacKey&&this.k(K("hmacKey",s.hmacKey,this.T))}}class o{constructor(e,n){this.N=e,this.I=n}}function j(i,e){let n;return e>32?(n=64-e,new o(i.I<<e|i.N>>>n,i.N<<e|i.I>>>n)):e!==0?(n=32-e,new o(i.N<<e|i.I>>>n,i.I<<e|i.N>>>n)):i}function R(i,e){let n;return e<32?(n=32-e,new o(i.N>>>e|i.I<<n,i.I>>>e|i.N<<n)):(n=64-e,new o(i.I>>>e|i.N<<n,i.N>>>e|i.I<<n))}function re(i,e){return new o(i.N>>>e,i.I>>>e|i.N<<32-e)}function pe(i,e,n){return new o(i.N&e.N^i.N&n.N^e.N&n.N,i.I&e.I^i.I&n.I^e.I&n.I)}function Ae(i){const e=R(i,28),n=R(i,34),t=R(i,39);return new o(e.N^n.N^t.N,e.I^n.I^t.I)}function H(i,e){let n,t;n=(65535&i.I)+(65535&e.I),t=(i.I>>>16)+(e.I>>>16)+(n>>>16);const s=(65535&t)<<16|65535&n;return n=(65535&i.N)+(65535&e.N)+(t>>>16),t=(i.N>>>16)+(e.N>>>16)+(n>>>16),new o((65535&t)<<16|65535&n,s)}function Ne(i,e,n,t){let s,r;s=(65535&i.I)+(65535&e.I)+(65535&n.I)+(65535&t.I),r=(i.I>>>16)+(e.I>>>16)+(n.I>>>16)+(t.I>>>16)+(s>>>16);const u=(65535&r)<<16|65535&s;return s=(65535&i.N)+(65535&e.N)+(65535&n.N)+(65535&t.N)+(r>>>16),r=(i.N>>>16)+(e.N>>>16)+(n.N>>>16)+(t.N>>>16)+(s>>>16),new o((65535&r)<<16|65535&s,u)}function Ie(i,e,n,t,s){let r,u;r=(65535&i.I)+(65535&e.I)+(65535&n.I)+(65535&t.I)+(65535&s.I),u=(i.I>>>16)+(e.I>>>16)+(n.I>>>16)+(t.I>>>16)+(s.I>>>16)+(r>>>16);const f=(65535&u)<<16|65535&r;return r=(65535&i.N)+(65535&e.N)+(65535&n.N)+(65535&t.N)+(65535&s.N)+(u>>>16),u=(i.N>>>16)+(e.N>>>16)+(n.N>>>16)+(t.N>>>16)+(s.N>>>16)+(r>>>16),new o((65535&u)<<16|65535&r,f)}function M(i,e){return new o(i.N^e.N,i.I^e.I)}function ge(i){const e=R(i,19),n=R(i,61),t=re(i,6);return new o(e.N^n.N^t.N,e.I^n.I^t.I)}function ve(i){const e=R(i,1),n=R(i,8),t=re(i,7);return new o(e.N^n.N^t.N,e.I^n.I^t.I)}function ye(i){const e=R(i,14),n=R(i,18),t=R(i,41);return new o(e.N^n.N^t.N,e.I^n.I^t.I)}const Ee=[new o(m[0],3609767458),new o(m[1],602891725),new o(m[2],3964484399),new o(m[3],2173295548),new o(m[4],4081628472),new o(m[5],3053834265),new o(m[6],2937671579),new o(m[7],3664609560),new o(m[8],2734883394),new o(m[9],1164996542),new o(m[10],1323610764),new o(m[11],3590304994),new o(m[12],4068182383),new o(m[13],991336113),new o(m[14],633803317),new o(m[15],3479774868),new o(m[16],2666613458),new o(m[17],944711139),new o(m[18],2341262773),new o(m[19],2007800933),new o(m[20],1495990901),new o(m[21],1856431235),new o(m[22],3175218132),new o(m[23],2198950837),new o(m[24],3999719339),new o(m[25],766784016),new o(m[26],2566594879),new o(m[27],3203337956),new o(m[28],1034457026),new o(m[29],2466948901),new o(m[30],3758326383),new o(m[31],168717936),new o(m[32],1188179964),new o(m[33],1546045734),new o(m[34],1522805485),new o(m[35],2643833823),new o(m[36],2343527390),new o(m[37],1014477480),new o(m[38],1206759142),new o(m[39],344077627),new o(m[40],1290863460),new o(m[41],3158454273),new o(m[42],3505952657),new o(m[43],106217008),new o(m[44],3606008344),new o(m[45],1432725776),new o(m[46],1467031594),new o(m[47],851169720),new o(m[48],3100823752),new o(m[49],1363258195),new o(m[50],3750685593),new o(m[51],3785050280),new o(m[52],3318307427),new o(m[53],3812723403),new o(m[54],2003034995),new o(m[55],3602036899),new o(m[56],1575990012),new o(m[57],1125592928),new o(m[58],2716904306),new o(m[59],442776044),new o(m[60],593698344),new o(m[61],3733110249),new o(m[62],2999351573),new o(m[63],3815920427),new o(3391569614,3928383900),new o(3515267271,566280711),new o(3940187606,3454069534),new o(4118630271,4000239992),new o(116418474,1914138554),new o(174292421,2731055270),new o(289380356,3203993006),new o(460393269,320620315),new o(685471733,587496836),new o(852142971,1086792851),new o(1017036298,365543100),new o(1126000580,2618297676),new o(1288033470,3409855158),new o(1501505948,4234509866),new o(1607167915,987167468),new o(1816402316,1246189591)];function G(i){return i==="SHA-384"?[new o(3418070365,S[0]),new o(1654270250,S[1]),new o(2438529370,S[2]),new o(355462360,S[3]),new o(1731405415,S[4]),new o(41048885895,S[5]),new o(3675008525,S[6]),new o(1203062813,S[7])]:[new o(T[0],4089235720),new o(T[1],2227873595),new o(T[2],4271175723),new o(T[3],1595750129),new o(T[4],2917565137),new o(T[5],725511199),new o(T[6],4215389547),new o(T[7],327033209)]}function J(i,e){let n,t,s,r,u,f,c,a,w,l,h,p;const d=[];for(n=e[0],t=e[1],s=e[2],r=e[3],u=e[4],f=e[5],c=e[6],a=e[7],h=0;h<80;h+=1)h<16?(p=2*h,d[h]=new o(i[p],i[p+1])):d[h]=Ne(ge(d[h-2]),d[h-7],ve(d[h-15]),d[h-16]),w=Ie(a,ye(u),(N=f,I=c,new o((A=u).N&N.N^~A.N&I.N,A.I&N.I^~A.I&I.I)),Ee[h],d[h]),l=H(Ae(n),pe(n,t,s)),a=c,c=f,f=u,u=H(r,w),r=s,s=t,t=n,n=H(w,l);var A,N,I;return e[0]=H(n,e[0]),e[1]=H(t,e[1]),e[2]=H(s,e[2]),e[3]=H(r,e[3]),e[4]=H(u,e[4]),e[5]=H(f,e[5]),e[6]=H(c,e[6]),e[7]=H(a,e[7]),e}class He extends X{constructor(e,n,t){if(e!=="SHA-384"&&e!=="SHA-512")throw new Error(Y);super(e,n,t);const s=t||{};this.F=this.Y,this.M=!0,this.T=-1,this.C=F(this.t,this.i,this.T),this.U=J,this.B=function(r){return r.slice()},this.L=G,this.g=function(r,u,f,c){return function(a,w,l,h,p){let d,A;const N=31+(w+129>>>10<<5),I=w+l;for(;a.length<=N;)a.push(0);for(a[w>>>5]|=128<<24-w%32,a[N]=4294967295&I,a[N-1]=I/4294967296|0,d=0;d<a.length;d+=32)h=J(a.slice(d,d+32),h);return A=p==="SHA-384"?[h[0].N,h[0].I,h[1].N,h[1].I,h[2].N,h[2].I,h[3].N,h[3].I,h[4].N,h[4].I,h[5].N,h[5].I]:[h[0].N,h[0].I,h[1].N,h[1].I,h[2].N,h[2].I,h[3].N,h[3].I,h[4].N,h[4].I,h[5].N,h[5].I,h[6].N,h[6].I,h[7].N,h[7].I],A}(r,u,f,c,e)},this.R=G(e),this.m=1024,this.v=e==="SHA-384"?384:512,this.K=!1,s.hmacKey&&this.k(K("hmacKey",s.hmacKey,this.T))}}const be=[new o(0,1),new o(0,32898),new o(2147483648,32906),new o(2147483648,2147516416),new o(0,32907),new o(0,2147483649),new o(2147483648,2147516545),new o(2147483648,32777),new o(0,138),new o(0,136),new o(0,2147516425),new o(0,2147483658),new o(0,2147516555),new o(2147483648,139),new o(2147483648,32905),new o(2147483648,32771),new o(2147483648,32770),new o(2147483648,128),new o(0,32778),new o(2147483648,2147483658),new o(2147483648,2147516545),new o(2147483648,32896),new o(0,2147483649),new o(2147483648,2147516424)],Le=[[0,36,3,41,18],[1,44,10,45,2],[62,6,43,15,61],[28,55,25,21,56],[27,20,39,8,14]];function x(i){let e;const n=[];for(e=0;e<5;e+=1)n[e]=[new o(0,0),new o(0,0),new o(0,0),new o(0,0),new o(0,0)];return n}function Re(i){let e;const n=[];for(e=0;e<5;e+=1)n[e]=i[e].slice();return n}function P(i,e){let n,t,s,r;const u=[],f=[];if(i!==null)for(t=0;t<i.length;t+=2)e[(t>>>1)%5][(t>>>1)/5|0]=M(e[(t>>>1)%5][(t>>>1)/5|0],new o(i[t+1],i[t]));for(n=0;n<24;n+=1){for(r=x(),t=0;t<5;t+=1)u[t]=(c=e[t][0],a=e[t][1],w=e[t][2],l=e[t][3],h=e[t][4],new o(c.N^a.N^w.N^l.N^h.N,c.I^a.I^w.I^l.I^h.I));for(t=0;t<5;t+=1)f[t]=M(u[(t+4)%5],j(u[(t+1)%5],1));for(t=0;t<5;t+=1)for(s=0;s<5;s+=1)e[t][s]=M(e[t][s],f[t]);for(t=0;t<5;t+=1)for(s=0;s<5;s+=1)r[s][(2*t+3*s)%5]=j(e[t][s],Le[t][s]);for(t=0;t<5;t+=1)for(s=0;s<5;s+=1)e[t][s]=M(r[t][s],new o(~r[(t+1)%5][s].N&r[(t+2)%5][s].N,~r[(t+1)%5][s].I&r[(t+2)%5][s].I));e[0][0]=M(e[0][0],be[n])}var c,a,w,l,h;return e}function oe(i){let e,n,t=0;const s=[0,0],r=[4294967295&i,i/4294967296&2097151];for(e=6;e>=0;e--)n=r[e>>2]>>>8*e&255,n===0&&t===0||(s[t+1>>2]|=n<<8*(t+1),t+=1);return t=t!==0?t:1,s[0]|=t,{value:t+1>4?s:[s[0]],binLen:8+8*t}}function z(i){return O(oe(i.binLen),i)}function Q(i,e){let n,t=oe(e);t=O(t,i);const s=e>>>2,r=(s-t.value.length%s)%s;for(n=0;n<r;n++)t.value.push(0);return t.value}class Se extends X{constructor(e,n,t){let s=6,r=0;super(e,n,t);const u=t||{};if(this.numRounds!==1){if(u.kmacKey||u.hmacKey)throw new Error("Cannot set numRounds with MAC");if(this.o==="CSHAKE128"||this.o==="CSHAKE256")throw new Error("Cannot set numRounds for CSHAKE variants")}switch(this.T=1,this.C=F(this.t,this.i,this.T),this.U=P,this.B=Re,this.L=x,this.R=x(),this.K=!1,e){case"SHA3-224":this.m=r=1152,this.v=224,this.M=!0,this.F=this.Y;break;case"SHA3-256":this.m=r=1088,this.v=256,this.M=!0,this.F=this.Y;break;case"SHA3-384":this.m=r=832,this.v=384,this.M=!0,this.F=this.Y;break;case"SHA3-512":this.m=r=576,this.v=512,this.M=!0,this.F=this.Y;break;case"SHAKE128":s=31,this.m=r=1344,this.v=-1,this.K=!0,this.M=!1,this.F=null;break;case"SHAKE256":s=31,this.m=r=1088,this.v=-1,this.K=!0,this.M=!1,this.F=null;break;case"KMAC128":s=4,this.m=r=1344,this.X(t),this.v=-1,this.K=!0,this.M=!1,this.F=this._;break;case"KMAC256":s=4,this.m=r=1088,this.X(t),this.v=-1,this.K=!0,this.M=!1,this.F=this._;break;case"CSHAKE128":this.m=r=1344,s=this.O(t),this.v=-1,this.K=!0,this.M=!1,this.F=null;break;case"CSHAKE256":this.m=r=1088,s=this.O(t),this.v=-1,this.K=!0,this.M=!1,this.F=null;break;default:throw new Error(Y)}this.g=function(f,c,a,w,l){return function(h,p,d,A,N,I,b){let g,y,E=0;const C=[],k=N>>>5,ue=p>>>5;for(g=0;g<ue&&p>=N;g+=k)A=P(h.slice(g,g+k),A),p-=N;for(h=h.slice(g),p%=N;h.length<k;)h.push(0);for(g=p>>>3,h[g>>2]^=I<<g%4*8,h[k-1]^=2147483648,A=P(h,A);32*C.length<b&&(y=A[E%5][E/5|0],C.push(y.I),!(32*C.length>=b));)C.push(y.N),E+=1,64*E%N==0&&(P(null,A),E=0);return C}(f,c,0,w,r,s,l)},u.hmacKey&&this.k(K("hmacKey",u.hmacKey,this.T))}O(e,n){const t=function(r){const u=r||{};return{funcName:K("funcName",u.funcName,1,{value:[],binLen:0}),customization:K("Customization",u.customization,1,{value:[],binLen:0})}}(e||{});n&&(t.funcName=n);const s=O(z(t.funcName),z(t.customization));if(t.customization.binLen!==0||t.funcName.binLen!==0){const r=Q(s,this.m>>>3);for(let u=0;u<r.length;u+=this.m>>>5)this.R=this.U(r.slice(u,u+(this.m>>>5)),this.R),this.A+=this.m;return 4}return 31}X(e){const n=function(s){const r=s||{};return{kmacKey:K("kmacKey",r.kmacKey,1),funcName:{value:[1128353099],binLen:32},customization:K("Customization",r.customization,1,{value:[],binLen:0})}}(e||{});this.O(e,n.funcName);const t=Q(z(n.kmacKey),this.m>>>3);for(let s=0;s<t.length;s+=this.m>>>5)this.R=this.U(t.slice(s,s+(this.m>>>5)),this.R),this.A+=this.m;this.H=!0}_(e){const n=O({value:this.h.slice(),binLen:this.u},function(t){let s,r,u=0;const f=[0,0],c=[4294967295&t,t/4294967296&2097151];for(s=6;s>=0;s--)r=c[s>>2]>>>8*s&255,r===0&&u===0||(f[u>>2]|=r<<8*u,u+=1);return u=u!==0?u:1,f[u>>2]|=u<<8*u,{value:u+1>4?f:[f[0]],binLen:8+8*u}}(e.outputLen));return this.g(n.value,n.binLen,this.A,this.B(this.R),e.outputLen)}}class Te{constructor(e,n,t){if(e=="SHA-1")this.P=new me(e,n,t);else if(e=="SHA-224"||e=="SHA-256")this.P=new de(e,n,t);else if(e=="SHA-384"||e=="SHA-512")this.P=new He(e,n,t);else{if(e!="SHA3-224"&&e!="SHA3-256"&&e!="SHA3-384"&&e!="SHA3-512"&&e!="SHAKE128"&&e!="SHAKE256"&&e!="CSHAKE128"&&e!="CSHAKE256"&&e!="KMAC128"&&e!="KMAC256")throw new Error(Y);this.P=new Se(e,n,t)}}update(e){return this.P.update(e),this}getHash(e,n){return this.P.getHash(e,n)}setHMACKey(e,n,t){this.P.setHMACKey(e,n,t)}getHMAC(e,n){return this.P.getHMAC(e,n)}}const W=5*1024*1024;function Ke(i,e){return new Promise(function(n,t){let s=0;const r=new Te("SHA-512","ARRAYBUFFER"),u=new FileReader;u.onload=()=>{e&&e(s/i.size),s+=W,r.update(u.result),f()},u.onerror=()=>{t(u.error)},f();function f(){if(s>=i.size){e&&e(1),n(r.getHash("HEX"));return}const c=i==null?void 0:i.slice(s,s+W);c&&u.readAsArrayBuffer(c)}})}function Ue(i,e,n,t){const s=r=>{var c,a;if(!r.currentTarget)return;const u=r.currentTarget;u.disabled=!0,t.innerHTML="",e.style.display="",n.style.display="";const f=new Date;(c=u==null?void 0:u.files)!=null&&c[0]&&Ke((a=u==null?void 0:u.files)==null?void 0:a[0],w=>{n.value=w*100,n.innerHTML=`${(w*100).toFixed(0)}%`}).then(w=>{t.innerHTML=`Hash: ${w}`}).catch(w=>{t.innerHTML=`Error: ${w.stack}`}).finally(()=>{u.disabled=!1,e.style.display="none",n.style.display="none",t.innerHTML+=`

Execution time: ${(new Date().getTime()-f.getTime()).toLocaleString()}ms`})};i.addEventListener("change",s)}document.querySelector("#app").innerHTML=`
  <div>
    <h1>File Hash</h1>
    <input id="file" type="file" />
    <div>
      <label id="status" for="progress" style="display: none">Hashing...</label>
      <progress id="progress" value="0" max="100" style="display: none"></progress>
      <pre id="result"></pre>
    </div>
  </div>
`;Ue(document.querySelector("#file"),document.querySelector("#status"),document.querySelector("#progress"),document.querySelector("#result"));