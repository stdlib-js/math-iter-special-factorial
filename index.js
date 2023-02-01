// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).iterFactorial=r()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,n=Object.defineProperty,t=Object.prototype,o=t.toString,u=t.__defineGetter__,i=t.__defineSetter__,f=t.__lookupGetter__,a=t.__lookupSetter__;r=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?n:function(e,r,n){var c,l,y,v;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(e,r)||a.call(e,r)?(c=e.__proto__,e.__proto__=t,delete e[r],e[r]=n.value,e.__proto__=c):e[r]=n.value),y="get"in n,v="set"in n,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(e,r,n.get),v&&i&&i.call(e,r,n.set),e};var c=r;function l(e,r,n){c(e,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}var y=/./;function v(e){return"boolean"==typeof e}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return p&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function m(e,r){return null!=e&&d.call(e,r)}var w="function"==typeof Symbol?Symbol.toStringTag:"";var j=s()?function(e){var r,n,t;if(null==e)return b.call(e);n=e[w],r=m(e,w);try{e[w]=void 0}catch(r){return b.call(e)}return t=b.call(e),r?e[w]=n:delete e[w],t}:function(e){return b.call(e)},g=Boolean.prototype.toString;var h=s();function A(e){return"object"==typeof e&&(e instanceof Boolean||(h?function(e){try{return g.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===j(e)))}function _(e){return v(e)||A(e)}function N(){return new Function("return this;")()}l(_,"isPrimitive",v),l(_,"isObject",A);var O="object"==typeof self?self:null,U="object"==typeof window?window:null,S="object"==typeof global?global:null;var E=function(e){if(arguments.length){if(!v(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return N()}if(O)return O;if(U)return U;if(S)return S;throw new Error("unexpected error. Unable to resolve global object.")}(),F=E.document&&E.document.childNodes,T=Int8Array;function I(){return/^\s*function\s*([^(]*)/i}var P=/^\s*function\s*([^(]*)/i;l(I,"REGEXP",P);var x=Array.isArray?Array.isArray:function(e){return"[object Array]"===j(e)};function V(e){return null!==e&&"object"==typeof e}function G(e){var r,n,t,o;if(("Object"===(n=j(e).slice(8,-1))||"Error"===n)&&e.constructor){if("string"==typeof(t=e.constructor).name)return t.name;if(r=P.exec(t.toString()))return r[1]}return V(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}l(V,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(r){var n,t;if(!x(r))return!1;if(0===(n=r.length))return!1;for(t=0;t<n;t++)if(!1===e(r[t]))return!1;return!0}}(V));var H="function"==typeof y||"object"==typeof T||"function"==typeof F?function(e){return G(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?G(e).toLowerCase():r};function B(e){return"function"===H(e)}function L(e){var r=typeof e;return null!==e&&("object"===r||"function"===r)&&B(e.next)}function M(e){return"number"==typeof e}var k=Number,W=k.prototype.toString;var C=s();function Y(e){return"object"==typeof e&&(e instanceof k||(C?function(e){try{return W.call(e),!0}catch(e){return!1}}(e):"[object Number]"===j(e)))}function q(e){return M(e)||Y(e)}l(q,"isPrimitive",M),l(q,"isObject",Y);var R="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&m(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;var X,z=Object.getPrototypeOf;X=B(Object.getPrototypeOf)?z:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===j(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var D=X;var J=Object.prototype;function K(e){var r;return!!function(e){return"object"==typeof e&&null!==e&&!x(e)}(e)&&(r=function(e){return null==e?null:(e=Object(e),D(e))}(e),!r||!m(e,"constructor")&&m(r,"constructor")&&B(r.constructor)&&"[object Function]"===j(r.constructor)&&m(r,"isPrototypeOf")&&B(r.isPrototypeOf)&&(r===J||function(e){var r;for(r in e)if(!m(e,r))return!1;return!0}(e)))}function Q(e,r){return K(r)?(m(r,"invalid")&&(e.invalid=r.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.")}function Z(e,r,n){var t,o,u,i;if(!L(e))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+e+"`.");if(!B(r))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+r+"`.");if(t={invalid:NaN},arguments.length>2&&(u=Q(t,n)))throw u;return l(o={},"next",f),l(o,"return",a),R&&B(e[R])&&l(o,R,c),o;function f(){var n;return i?{done:!0}:(n=e.next()).done?(i=!0,n):{value:M(n.value)?r(n.value):t.invalid,done:!1}}function a(e){return i=!0,arguments.length?{value:e,done:!0}:{done:!0}}function c(){return Z(e[R](),r,t)}}function $(e){return e!=e}var ee=Math.floor;function re(e){return ee(e)===e}var ne=k.NEGATIVE_INFINITY;function te(e){return Math.abs(e)}var oe="function"==typeof Uint32Array;var ue="function"==typeof Uint32Array?Uint32Array:null;var ie,fe="function"==typeof Uint32Array?Uint32Array:void 0;ie=function(){var e,r,n;if("function"!=typeof ue)return!1;try{r=new ue(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,e=(oe&&n instanceof Uint32Array||"[object Uint32Array]"===j(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?fe:function(){throw new Error("not implemented")};var ae=ie,ce="function"==typeof Float64Array;var le="function"==typeof Float64Array?Float64Array:null;var ye,ve="function"==typeof Float64Array?Float64Array:void 0;ye=function(){var e,r,n;if("function"!=typeof le)return!1;try{r=new le([1,3.14,-3.14,NaN]),n=r,e=(ce&&n instanceof Float64Array||"[object Float64Array]"===j(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?ve:function(){throw new Error("not implemented")};var pe=ye,se="function"==typeof Uint8Array;var be="function"==typeof Uint8Array?Uint8Array:null;var de,me="function"==typeof Uint8Array?Uint8Array:void 0;de=function(){var e,r,n;if("function"!=typeof be)return!1;try{r=new be(r=[1,3.14,-3.14,256,257]),n=r,e=(se&&n instanceof Uint8Array||"[object Uint8Array]"===j(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?me:function(){throw new Error("not implemented")};var we=de,je="function"==typeof Uint16Array;var ge="function"==typeof Uint16Array?Uint16Array:null;var he,Ae="function"==typeof Uint16Array?Uint16Array:void 0;he=function(){var e,r,n;if("function"!=typeof ge)return!1;try{r=new ge(r=[1,3.14,-3.14,65536,65537]),n=r,e=(je&&n instanceof Uint16Array||"[object Uint16Array]"===j(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?Ae:function(){throw new Error("not implemented")};var _e,Ne={uint16:he,uint8:we};(_e=new Ne.uint16(1))[0]=4660;var Oe=52===new Ne.uint8(_e.buffer)[0],Ue=!0===Oe?1:0,Se=new pe(1),Ee=new ae(Se.buffer);function Fe(e){return Se[0]=e,Ee[Ue]}function Te(e,r){var n,t,o,u;return o=(u=e*e)*u,t=u*function(e){return 0===e?.0416666666666666:.0416666666666666+e*(2480158728947673e-20*e-.001388888888887411)}(u),t+=o*o*function(e){return 0===e?-2.7557314351390663e-7:e*(2.087572321298175e-9+-11359647557788195e-27*e)-2.7557314351390663e-7}(u),(o=1-(n=.5*u))+(1-o-n+(u*t-e*r))}var Ie=-.16666666666666632;function Pe(e,r){var n,t,o;return n=.00833333333332249+(o=e*e)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),t=o*e,0===r?e+t*(Ie+o*n):e-(o*(.5*r-t*n)-r-t*Ie)}var xe,Ve,Ge=!0===Oe?0:1,He=new pe(1),Be=new ae(He.buffer);!0===Oe?(xe=1,Ve=0):(xe=0,Ve=1);var Le={HIGH:xe,LOW:Ve},Me=new pe(1),ke=new ae(Me.buffer),We=Le.HIGH,Ce=Le.LOW;function Ye(e,r){return ke[We]=e,ke[Ce]=r,Me[0]}var qe=Number.POSITIVE_INFINITY,Re=1023;function Xe(e){return e===qe||e===ne}var ze,De,Je=2147483647;!0===Oe?(ze=1,De=0):(ze=0,De=1);var Ke={HIGH:ze,LOW:De},Qe=new pe(1),Ze=new ae(Qe.buffer),$e=Ke.HIGH,er=Ke.LOW;function rr(e,r,n,t){return Qe[0]=e,r[t]=Ze[$e],r[t+n]=Ze[er],r}function nr(e){return rr(e,[0,0],1,0)}l(nr,"assign",rr);var tr=[0,0];function or(e,r){var n,t;return nr.assign(e,tr,1,0),n=tr[0],n&=Je,t=Fe(r),Ye(n|=t&=2147483648,tr[1])}function ur(e,r,n,t){return $(e)||Xe(e)?(r[t]=e,r[t+n]=0,r):0!==e&&te(e)<22250738585072014e-324?(r[t]=4503599627370496*e,r[t+n]=-52,r):(r[t]=e,r[t+n]=0,r)}l((function(e){return ur(e,[0,0],1,0)}),"assign",ur);var ir=[0,0],fr=[0,0];function ar(e,r){var n,t;return 0===r||0===e||$(e)||Xe(e)?e:(ur(e,ir,1,0),r+=ir[1],r+=function(e){var r=Fe(e);return(r=(2146435072&r)>>>20)-Re|0}(e=ir[0]),r<-1074?or(0,e):r>1023?e<0?ne:qe:(r<=-1023?(r+=52,t=2220446049250313e-31):t=1,nr.assign(e,fr,1,0),n=fr[0],n&=2148532223,t*Ye(n|=r+Re<<20,fr[1])))}function cr(e){return function(e,r){var n,t;for(n=[],t=0;t<r;t++)n.push(e);return n}(0,e)}var lr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],yr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],vr=16777216,pr=5.960464477539063e-8,sr=cr(20),br=cr(20),dr=cr(20),mr=cr(20);function wr(e,r,n,t,o,u,i,f,a){var c,l,y,v,p,s,b,d,m;for(v=u,m=t[n],d=n,p=0;d>0;p++)l=pr*m|0,mr[p]=m-vr*l|0,m=t[d-1]+l,d-=1;if(m=ar(m,o),m-=8*ee(.125*m),m-=b=0|m,y=0,o>0?(b+=p=mr[n-1]>>24-o,mr[n-1]-=p<<24-o,y=mr[n-1]>>23-o):0===o?y=mr[n-1]>>23:m>=.5&&(y=2),y>0){for(b+=1,c=0,p=0;p<n;p++)d=mr[p],0===c?0!==d&&(c=1,mr[p]=16777216-d):mr[p]=16777215-d;if(o>0)switch(o){case 1:mr[n-1]&=8388607;break;case 2:mr[n-1]&=4194303}2===y&&(m=1-m,0!==c&&(m-=ar(1,o)))}if(0===m){for(d=0,p=n-1;p>=u;p--)d|=mr[p];if(0===d){for(s=1;0===mr[u-s];s++);for(p=n+1;p<=n+s;p++){for(a[f+p]=lr[i+p],l=0,d=0;d<=f;d++)l+=e[d]*a[f+(p-d)];t[p]=l}return wr(e,r,n+=s,t,o,u,i,f,a)}}if(0===m)for(n-=1,o-=24;0===mr[n];)n-=1,o-=24;else(m=ar(m,-o))>=vr?(l=pr*m|0,mr[n]=m-vr*l|0,o+=24,mr[n+=1]=l):mr[n]=0|m;for(l=ar(1,o),p=n;p>=0;p--)t[p]=l*mr[p],l*=pr;for(p=n;p>=0;p--){for(l=0,s=0;s<=v&&s<=n-p;s++)l+=yr[s]*t[p+s];dr[n-p]=l}for(l=0,p=n;p>=0;p--)l+=dr[p];for(r[0]=0===y?l:-l,l=dr[0]-l,p=1;p<=n;p++)l+=dr[p];return r[1]=0===y?l:-l,7&b}function jr(e,r,n,t){var o,u,i,f,a,c,l;for(4,(u=(n-3)/24|0)<0&&(u=0),f=n-24*(u+1),c=u-(i=t-1),l=i+4,a=0;a<=l;a++)sr[a]=c<0?0:lr[c],c+=1;for(a=0;a<=4;a++){for(o=0,c=0;c<=i;c++)o+=e[c]*sr[i+(a-c)];br[a]=o}return 4,wr(e,r,4,br,f,4,u,i,sr)}var gr=Math.round;function hr(e,r,n){var t,o,u,i,f;return u=e-1.5707963267341256*(t=gr(.6366197723675814*e)),i=6077100506506192e-26*t,f=r>>20|0,n[0]=u-i,f-(Fe(n[0])>>20&2047)>16&&(i=20222662487959506e-37*t-((o=u)-(u=o-(i=6077100506303966e-26*t))-i),n[0]=u-i,f-(Fe(n[0])>>20&2047)>49&&(i=84784276603689e-45*t-((o=u)-(u=o-(i=20222662487111665e-37*t))-i),n[0]=u-i)),n[1]=u-n[0]-i,t}var Ar=1.5707963267341256,_r=6077100506506192e-26,Nr=2*_r,Or=3*_r,Ur=4*_r,Sr=[0,0,0],Er=[0,0];function Fr(e,r){var n,t,o,u,i,f,a;if((o=2147483647&Fe(e)|0)<=1072243195)return r[0]=e,r[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?hr(e,o,r):o<=1073928572?e>0?(a=e-Ar,r[0]=a-_r,r[1]=a-r[0]-_r,1):(a=e+Ar,r[0]=a+_r,r[1]=a-r[0]+_r,-1):e>0?(a=e-2*Ar,r[0]=a-Nr,r[1]=a-r[0]-Nr,2):(a=e+2*Ar,r[0]=a+Nr,r[1]=a-r[0]+Nr,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?hr(e,o,r):e>0?(a=e-3*Ar,r[0]=a-Or,r[1]=a-r[0]-Or,3):(a=e+3*Ar,r[0]=a+Or,r[1]=a-r[0]+Or,-3):1075388923===o?hr(e,o,r):e>0?(a=e-4*Ar,r[0]=a-Ur,r[1]=a-r[0]-Ur,4):(a=e+4*Ar,r[0]=a+Ur,r[1]=a-r[0]+Ur,-4);if(o<1094263291)return hr(e,o,r);if(o>=2146435072)return r[0]=NaN,r[1]=NaN,0;for(n=function(e){return He[0]=e,Be[Ge]}(e),a=Ye(o-((t=(o>>20)-1046)<<20|0),n),i=0;i<2;i++)Sr[i]=0|a,a=16777216*(a-Sr[i]);for(Sr[2]=a,u=3;0===Sr[u-1];)u-=1;return f=jr(Sr,Er,t,u),e<0?(r[0]=-Er[0],r[1]=-Er[1],-f):(r[0]=Er[0],r[1]=Er[1],f)}var Tr=[0,0];var Ir=3.141592653589793;function Pr(e){return re(e/2)}function xr(e){return Pr(e>0?e-1:e+1)}var Vr=Math.sqrt,Gr=!0===Oe?0:1,Hr=new pe(1),Br=new ae(Hr.buffer);function Lr(e,r){return Hr[0]=e,Br[Gr]=r>>>0,Hr[0]}function Mr(e){return 0|e}var kr=!0===Oe?1:0,Wr=new pe(1),Cr=new ae(Wr.buffer);function Yr(e,r){return Wr[0]=e,Cr[kr]=r>>>0,Wr[0]}var qr=1048576,Rr=[1,1.5],Xr=[0,.5849624872207642],zr=[0,1.350039202129749e-8];var Dr=1048575;var Jr=1048576;var Kr=1083179008,Qr=1e300,Zr=1e-300,$r=[0,0],en=[0,0];function rn(e,r){var n,t,o,u,i,f,a,c,l,y,v,p,s,b;if($(e)||$(r))return NaN;if(nr.assign(r,$r,1,0),i=$r[0],0===$r[1]){if(0===r)return 1;if(1===r)return e;if(-1===r)return 1/e;if(.5===r)return Vr(e);if(-.5===r)return 1/Vr(e);if(2===r)return e*e;if(3===r)return e*e*e;if(4===r)return(e*=e)*e;if(Xe(r))return function(e,r){return-1===e?(e-e)/(e-e):1===e?1:te(e)<1==(r===qe)?0:qe}(e,r)}if(nr.assign(e,$r,1,0),u=$r[0],0===$r[1]){if(0===u)return function(e,r){return r===ne?qe:r===qe?0:r>0?xr(r)?e:0:xr(r)?or(qe,e):qe}(e,r);if(1===e)return 1;if(-1===e&&xr(r))return-1;if(Xe(e))return e===ne?rn(-0,-r):r<0?0:qe}if(e<0&&!1===re(r))return(e-e)/(e-e);if(o=te(e),n=u&Je|0,t=i&Je|0,a=i>>>31|0,f=(f=u>>>31|0)&&xr(r)?-1:1,t>1105199104){if(t>1139802112)return function(e,r){return(Fe(e)&Je)<=1072693247?r<0?1/0:0:r>0?1/0:0}(e,r);if(n<1072693247)return 1===a?f*Qr*Qr:f*Zr*Zr;if(n>1072693248)return 0===a?f*Qr*Qr:f*Zr*Zr;v=function(e,r){var n,t,o,u,i,f;return n=(i=1.9259629911266175e-8*(o=r-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((t=Lr(t=(u=1.4426950216293335*o)+i,0))-u),e[0]=t,e[1]=n,e}(en,o)}else v=function(e,r,n){var t,o,u,i,f,a,c,l,y,v,p,s,b,d,m,w,j,g,h,A,_;return g=0,n<qr&&(g-=53,n=Fe(r*=9007199254740992)),g+=(n>>20)-Re|0,n=1072693248|(h=1048575&n|0),h<=235662?A=0:h<767610?A=1:(A=0,g+=1,n-=qr),i=Lr(o=(w=(r=Yr(r,n))-(c=Rr[A]))*(j=1/(r+c)),0),t=524288+(n>>1|536870912),a=Yr(0,t+=A<<18),m=(u=o*o)*u*(0===(_=u)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),a=Lr(a=3+(u=i*i)+(m+=(f=j*(w-i*a-i*(r-(a-c))))*(i+o)),0),b=(p=-7.028461650952758e-9*(y=Lr(y=(w=i*a)+(j=f*a+(m-(a-3-u))*o),0))+.9617966939259756*(j-(y-w))+zr[A])-((s=Lr(s=(v=.9617967009544373*y)+p+(l=Xr[A])+(d=g),0))-d-l-v),e[0]=s,e[1]=b,e}(en,o,n);if(p=(y=(r-(c=Lr(r,0)))*v[0]+r*v[1])+(l=c*v[0]),nr.assign(p,$r,1,0),s=Mr($r[0]),b=Mr($r[1]),s>=Kr){if(0!=(s-Kr|b))return f*Qr*Qr;if(y+8008566259537294e-32>p-l)return f*Qr*Qr}else if((s&Je)>=1083231232){if(0!=(s-3230714880|b))return f*Zr*Zr;if(y<=p-l)return f*Zr*Zr}return p=function(e,r,n){var t,o,u,i,f,a,c,l,y,v;return y=((l=e&Je|0)>>20)-Re|0,c=0,l>1071644672&&(o=Yr(0,((c=e+(Jr>>y+1)>>>0)&~(Dr>>(y=((c&Je)>>20)-Re|0)))>>>0),c=(c&Dr|Jr)>>20-y>>>0,e<0&&(c=-c),r-=o),e=Mr(e=Fe(a=1-((a=(u=.6931471824645996*(o=Lr(o=n+r,0)))+(i=.6931471805599453*(n-(o-r))+-1.904654299957768e-9*o))*(t=a-(o=a*a)*(0===(v=o)?.16666666666666602:.16666666666666602+v*(v*(6613756321437934e-20+v*(4.1381367970572385e-8*v-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((f=i-(a-u))+a*f)-a))),(e+=c<<20>>>0)>>20<=0?ar(a,c):Yr(a,e)}(s,l,y),f*p}var nn=Math.ceil;function tn(e){return e<0?nn(e):ee(e)}var on=1.4426950408889634,un=1/(1<<28);function fn(e){var r;return $(e)||e===qe?e:e===ne?0:e>709.782712893384?qe:e<-745.1332191019411?0:e>-3.725290298461914e-9&&e<un?1+e:function(e,r,n){var t,o,u,i;return ar(1-(r-(t=e-r)*(u=t-(o=t*t)*(0===(i=o)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-u)-e),n)}(e-.6931471803691238*(r=tn(e<0?on*e-.5:on*e+.5)),1.9082149292705877e-10*r,r)}function an(e){var r,n,t;return r=1+(r=1/e)*function(e){return 0===e?.08333333333334822:.08333333333334822+e*(.0034722222160545866+e*(e*(.0007873113957930937*e-.00022954996161337813)-.0026813261780578124))}(r),n=fn(e),2.5066282746310007*(n=e>143.01608?(t=rn(e,.5*e-.25))*(t/n):rn(e,e-.5)/n)*r}function cn(e,r){return r/((1+.5772156649015329*e)*e)}function ln(e){var r,n,t,o;if(re(e)&&e<0||e===ne||$(e))return NaN;if(0===e)return function(e){return 0===e&&1/e===ne}(e)?ne:qe;if(e>171.61447887182297)return qe;if(e<-170.5674972726612)return 0;if((n=te(e))>33)return e>=0?an(e):(r=0==(1&(t=ee(n)))?-1:1,(o=n-t)>.5&&(o=n-(t+=1)),o=n*function(e){var r;if(r=Fe(e),(r&=2147483647)<=1072243195)return r<1045430272?e:Pe(e,0);if(r>=2146435072)return NaN;switch(3&Fr(e,Tr)){case 0:return Pe(Tr[0],Tr[1]);case 1:return Te(Tr[0],Tr[1]);case 2:return-Pe(Tr[0],Tr[1]);default:return-Te(Tr[0],Tr[1])}}(Ir*o),r*Ir/(te(o)*an(n)));for(o=1;e>=3;)o*=e-=1;for(;e<0;){if(e>-1e-9)return cn(e,o);o/=e,e+=1}for(;e<2;){if(e<1e-9)return cn(e,o);o/=e,e+=1}return 2===e?o:o*function(e){var r,n;return 0===e?1:((e<0?-e:e)<=1?(r=1+e*(.4942148268014971+e*(.20744822764843598+e*(.04763678004571372+e*(.010421379756176158+e*(.0011913514700658638+e*(.00016011952247675185+0*e)))))),n=1+e*(.0714304917030273+e*(e*(.035823639860549865+e*(.011813978522206043+e*(e*(.0005396055804933034+-23158187332412014e-21*e)-.004456419138517973)))-.23459179571824335))):(r=0+(e=1/e)*(.00016011952247675185+e*(.0011913514700658638+e*(.010421379756176158+e*(.04763678004571372+e*(.20744822764843598+e*(.4942148268014971+1*e)))))),n=e*(.0005396055804933034+e*(e*(.011813978522206043+e*(.035823639860549865+e*(e*(.0714304917030273+1*e)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),r/n)}(e-=2)}var yn=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,0x1b02b9306890000,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8.841761993739702e30,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,1.0333147966386145e40,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,1.3868311854568984e80,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8.247650592082472e90,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,1.1978571669969892e100,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5.797126020747368e120,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,2.4227095383672734e130,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1.352001527678403e140,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,1.1462805637347084e170,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,1.7629525510902446e180,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3.393108684451898e190,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8.094298525273444e200,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,2.6904727073180504e230,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,3.80892263763057e260,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1.853271869493735e280,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1.503616514864999e300,25260757449731984e286,4269068009004705e289,7257415615307999e291];function vn(e){return $(e)?NaN:re(e)?e<0?NaN:e<=170?yn[e]:qe:ln(e+1)}return function(e){return Z(e,vn)}}));
//# sourceMappingURL=index.js.map
