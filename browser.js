// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).iterFactorial=r()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,n=Object.defineProperty,t=Object.prototype,o=t.toString,u=t.__defineGetter__,i=t.__defineSetter__,f=t.__lookupGetter__,a=t.__lookupSetter__;r=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?n:function(e,r,n){var c,l,y,v;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(e,r)||a.call(e,r)?(c=e.__proto__,e.__proto__=t,delete e[r],e[r]=n.value,e.__proto__=c):e[r]=n.value),y="get"in n,v="set"in n,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(e,r,n.get),v&&i&&i.call(e,r,n.set),e};var c=r;function l(e,r,n){c(e,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}var y=/./;function v(e){return"boolean"==typeof e}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return p&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function w(e,r){return null!=e&&d.call(e,r)}var m="function"==typeof Symbol?Symbol.toStringTag:"";var j=s()?function(e){var r,n,t;if(null==e)return b.call(e);n=e[m],r=w(e,m);try{e[m]=void 0}catch(r){return b.call(e)}return t=b.call(e),r?e[m]=n:delete e[m],t}:function(e){return b.call(e)},g=Boolean.prototype.toString;var h=s();function A(e){return"object"==typeof e&&(e instanceof Boolean||(h?function(e){try{return g.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===j(e)))}function _(e){return v(e)||A(e)}function N(){return new Function("return this;")()}l(_,"isPrimitive",v),l(_,"isObject",A);var O="object"==typeof self?self:null,U="object"==typeof window?window:null,S="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},E="object"==typeof S?S:null;var F=function(e){if(arguments.length){if(!v(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return N()}if(O)return O;if(U)return U;if(E)return E;throw new Error("unexpected error. Unable to resolve global object.")}(),T=F.document&&F.document.childNodes,I=Int8Array;function P(){return/^\s*function\s*([^(]*)/i}var x=/^\s*function\s*([^(]*)/i;l(P,"REGEXP",x);var V=Array.isArray?Array.isArray:function(e){return"[object Array]"===j(e)};function G(e){return null!==e&&"object"==typeof e}function H(e){var r,n,t,o;if(("Object"===(n=j(e).slice(8,-1))||"Error"===n)&&e.constructor){if("string"==typeof(t=e.constructor).name)return t.name;if(r=x.exec(t.toString()))return r[1]}return G(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}l(G,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(r){var n,t;if(!V(r))return!1;if(0===(n=r.length))return!1;for(t=0;t<n;t++)if(!1===e(r[t]))return!1;return!0}}(G));var B="function"==typeof y||"object"==typeof I||"function"==typeof T?function(e){return H(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?H(e).toLowerCase():r};function L(e){return"function"===B(e)}function M(e){var r=typeof e;return null!==e&&("object"===r||"function"===r)&&L(e.next)}function k(e){return"number"==typeof e}var W=Number,C=W.prototype.toString;var Y=s();function q(e){return"object"==typeof e&&(e instanceof W||(Y?function(e){try{return C.call(e),!0}catch(e){return!1}}(e):"[object Number]"===j(e)))}function R(e){return k(e)||q(e)}l(R,"isPrimitive",k),l(R,"isObject",q);var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&w(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;var z,D=Object.getPrototypeOf;z=L(Object.getPrototypeOf)?D:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===j(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var J=z;var K=Object.prototype;function Q(e){var r;return!!function(e){return"object"==typeof e&&null!==e&&!V(e)}(e)&&(r=function(e){return null==e?null:(e=Object(e),J(e))}(e),!r||!w(e,"constructor")&&w(r,"constructor")&&L(r.constructor)&&"[object Function]"===j(r.constructor)&&w(r,"isPrototypeOf")&&L(r.isPrototypeOf)&&(r===K||function(e){var r;for(r in e)if(!w(e,r))return!1;return!0}(e)))}function Z(e,r){return Q(r)?(w(r,"invalid")&&(e.invalid=r.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.")}function $(e,r,n){var t,o,u,i;if(!M(e))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+e+"`.");if(!L(r))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+r+"`.");if(t={invalid:NaN},arguments.length>2&&(u=Z(t,n)))throw u;return l(o={},"next",f),l(o,"return",a),X&&L(e[X])&&l(o,X,c),o;function f(){var n;return i?{done:!0}:(n=e.next()).done?(i=!0,n):{value:k(n.value)?r(n.value):t.invalid,done:!1}}function a(e){return i=!0,arguments.length?{value:e,done:!0}:{done:!0}}function c(){return $(e[X](),r,t)}}function ee(e){return e!=e}var re=Math.floor;function ne(e){return re(e)===e}var te=W.NEGATIVE_INFINITY;function oe(e){return Math.abs(e)}var ue="function"==typeof Uint32Array;var ie="function"==typeof Uint32Array?Uint32Array:null;var fe,ae="function"==typeof Uint32Array?Uint32Array:void 0;fe=function(){var e,r,n;if("function"!=typeof ie)return!1;try{r=new ie(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,e=(ue&&n instanceof Uint32Array||"[object Uint32Array]"===j(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?ae:function(){throw new Error("not implemented")};var ce=fe,le="function"==typeof Float64Array;var ye="function"==typeof Float64Array?Float64Array:null;var ve,pe="function"==typeof Float64Array?Float64Array:void 0;ve=function(){var e,r,n;if("function"!=typeof ye)return!1;try{r=new ye([1,3.14,-3.14,NaN]),n=r,e=(le&&n instanceof Float64Array||"[object Float64Array]"===j(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?pe:function(){throw new Error("not implemented")};var se=ve,be="function"==typeof Uint8Array;var de="function"==typeof Uint8Array?Uint8Array:null;var we,me="function"==typeof Uint8Array?Uint8Array:void 0;we=function(){var e,r,n;if("function"!=typeof de)return!1;try{r=new de(r=[1,3.14,-3.14,256,257]),n=r,e=(be&&n instanceof Uint8Array||"[object Uint8Array]"===j(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?me:function(){throw new Error("not implemented")};var je=we,ge="function"==typeof Uint16Array;var he="function"==typeof Uint16Array?Uint16Array:null;var Ae,_e="function"==typeof Uint16Array?Uint16Array:void 0;Ae=function(){var e,r,n;if("function"!=typeof he)return!1;try{r=new he(r=[1,3.14,-3.14,65536,65537]),n=r,e=(ge&&n instanceof Uint16Array||"[object Uint16Array]"===j(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?_e:function(){throw new Error("not implemented")};var Ne,Oe={uint16:Ae,uint8:je};(Ne=new Oe.uint16(1))[0]=4660;var Ue=52===new Oe.uint8(Ne.buffer)[0],Se=!0===Ue?1:0,Ee=new se(1),Fe=new ce(Ee.buffer);function Te(e){return Ee[0]=e,Fe[Se]}function Ie(e,r){var n,t,o,u;return o=(u=e*e)*u,t=u*function(e){return 0===e?.0416666666666666:.0416666666666666+e*(2480158728947673e-20*e-.001388888888887411)}(u),t+=o*o*function(e){return 0===e?-2.7557314351390663e-7:e*(2.087572321298175e-9+-11359647557788195e-27*e)-2.7557314351390663e-7}(u),(o=1-(n=.5*u))+(1-o-n+(u*t-e*r))}var Pe=-.16666666666666632;function xe(e,r){var n,t,o;return n=.00833333333332249+(o=e*e)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),t=o*e,0===r?e+t*(Pe+o*n):e-(o*(.5*r-t*n)-r-t*Pe)}var Ve,Ge,He=!0===Ue?0:1,Be=new se(1),Le=new ce(Be.buffer);!0===Ue?(Ve=1,Ge=0):(Ve=0,Ge=1);var Me={HIGH:Ve,LOW:Ge},ke=new se(1),We=new ce(ke.buffer),Ce=Me.HIGH,Ye=Me.LOW;function qe(e,r){return We[Ce]=e,We[Ye]=r,ke[0]}var Re=Number.POSITIVE_INFINITY,Xe=1023;function ze(e){return e===Re||e===te}var De,Je,Ke=2147483647;!0===Ue?(De=1,Je=0):(De=0,Je=1);var Qe={HIGH:De,LOW:Je},Ze=new se(1),$e=new ce(Ze.buffer),er=Qe.HIGH,rr=Qe.LOW;function nr(e,r,n,t){return Ze[0]=e,r[t]=$e[er],r[t+n]=$e[rr],r}function tr(e){return nr(e,[0,0],1,0)}l(tr,"assign",nr);var or=[0,0];function ur(e,r){var n,t;return tr.assign(e,or,1,0),n=or[0],n&=Ke,t=Te(r),qe(n|=t&=2147483648,or[1])}function ir(e,r,n,t){return ee(e)||ze(e)?(r[t]=e,r[t+n]=0,r):0!==e&&oe(e)<22250738585072014e-324?(r[t]=4503599627370496*e,r[t+n]=-52,r):(r[t]=e,r[t+n]=0,r)}l((function(e){return ir(e,[0,0],1,0)}),"assign",ir);var fr=[0,0],ar=[0,0];function cr(e,r){var n,t;return 0===r||0===e||ee(e)||ze(e)?e:(ir(e,fr,1,0),r+=fr[1],r+=function(e){var r=Te(e);return(r=(2146435072&r)>>>20)-Xe|0}(e=fr[0]),r<-1074?ur(0,e):r>1023?e<0?te:Re:(r<=-1023?(r+=52,t=2220446049250313e-31):t=1,tr.assign(e,ar,1,0),n=ar[0],n&=2148532223,t*qe(n|=r+Xe<<20,ar[1])))}function lr(e){return function(e,r){var n,t;for(n=[],t=0;t<r;t++)n.push(e);return n}(0,e)}var yr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],vr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],pr=16777216,sr=5.960464477539063e-8,br=lr(20),dr=lr(20),wr=lr(20),mr=lr(20);function jr(e,r,n,t,o,u,i,f,a){var c,l,y,v,p,s,b,d,w;for(v=u,w=t[n],d=n,p=0;d>0;p++)l=sr*w|0,mr[p]=w-pr*l|0,w=t[d-1]+l,d-=1;if(w=cr(w,o),w-=8*re(.125*w),w-=b=0|w,y=0,o>0?(b+=p=mr[n-1]>>24-o,mr[n-1]-=p<<24-o,y=mr[n-1]>>23-o):0===o?y=mr[n-1]>>23:w>=.5&&(y=2),y>0){for(b+=1,c=0,p=0;p<n;p++)d=mr[p],0===c?0!==d&&(c=1,mr[p]=16777216-d):mr[p]=16777215-d;if(o>0)switch(o){case 1:mr[n-1]&=8388607;break;case 2:mr[n-1]&=4194303}2===y&&(w=1-w,0!==c&&(w-=cr(1,o)))}if(0===w){for(d=0,p=n-1;p>=u;p--)d|=mr[p];if(0===d){for(s=1;0===mr[u-s];s++);for(p=n+1;p<=n+s;p++){for(a[f+p]=yr[i+p],l=0,d=0;d<=f;d++)l+=e[d]*a[f+(p-d)];t[p]=l}return jr(e,r,n+=s,t,o,u,i,f,a)}}if(0===w)for(n-=1,o-=24;0===mr[n];)n-=1,o-=24;else(w=cr(w,-o))>=pr?(l=sr*w|0,mr[n]=w-pr*l|0,o+=24,mr[n+=1]=l):mr[n]=0|w;for(l=cr(1,o),p=n;p>=0;p--)t[p]=l*mr[p],l*=sr;for(p=n;p>=0;p--){for(l=0,s=0;s<=v&&s<=n-p;s++)l+=vr[s]*t[p+s];wr[n-p]=l}for(l=0,p=n;p>=0;p--)l+=wr[p];for(r[0]=0===y?l:-l,l=wr[0]-l,p=1;p<=n;p++)l+=wr[p];return r[1]=0===y?l:-l,7&b}function gr(e,r,n,t){var o,u,i,f,a,c,l;for(4,(u=(n-3)/24|0)<0&&(u=0),f=n-24*(u+1),c=u-(i=t-1),l=i+4,a=0;a<=l;a++)br[a]=c<0?0:yr[c],c+=1;for(a=0;a<=4;a++){for(o=0,c=0;c<=i;c++)o+=e[c]*br[i+(a-c)];dr[a]=o}return 4,jr(e,r,4,dr,f,4,u,i,br)}var hr=Math.round;function Ar(e,r,n){var t,o,u,i,f;return u=e-1.5707963267341256*(t=hr(.6366197723675814*e)),i=6077100506506192e-26*t,f=r>>20|0,n[0]=u-i,f-(Te(n[0])>>20&2047)>16&&(i=20222662487959506e-37*t-((o=u)-(u=o-(i=6077100506303966e-26*t))-i),n[0]=u-i,f-(Te(n[0])>>20&2047)>49&&(i=84784276603689e-45*t-((o=u)-(u=o-(i=20222662487111665e-37*t))-i),n[0]=u-i)),n[1]=u-n[0]-i,t}var _r=1.5707963267341256,Nr=6077100506506192e-26,Or=2*Nr,Ur=3*Nr,Sr=4*Nr,Er=[0,0,0],Fr=[0,0];function Tr(e,r){var n,t,o,u,i,f,a;if((o=2147483647&Te(e)|0)<=1072243195)return r[0]=e,r[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Ar(e,o,r):o<=1073928572?e>0?(a=e-_r,r[0]=a-Nr,r[1]=a-r[0]-Nr,1):(a=e+_r,r[0]=a+Nr,r[1]=a-r[0]+Nr,-1):e>0?(a=e-2*_r,r[0]=a-Or,r[1]=a-r[0]-Or,2):(a=e+2*_r,r[0]=a+Or,r[1]=a-r[0]+Or,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Ar(e,o,r):e>0?(a=e-3*_r,r[0]=a-Ur,r[1]=a-r[0]-Ur,3):(a=e+3*_r,r[0]=a+Ur,r[1]=a-r[0]+Ur,-3):1075388923===o?Ar(e,o,r):e>0?(a=e-4*_r,r[0]=a-Sr,r[1]=a-r[0]-Sr,4):(a=e+4*_r,r[0]=a+Sr,r[1]=a-r[0]+Sr,-4);if(o<1094263291)return Ar(e,o,r);if(o>=2146435072)return r[0]=NaN,r[1]=NaN,0;for(n=function(e){return Be[0]=e,Le[He]}(e),a=qe(o-((t=(o>>20)-1046)<<20|0),n),i=0;i<2;i++)Er[i]=0|a,a=16777216*(a-Er[i]);for(Er[2]=a,u=3;0===Er[u-1];)u-=1;return f=gr(Er,Fr,t,u),e<0?(r[0]=-Fr[0],r[1]=-Fr[1],-f):(r[0]=Fr[0],r[1]=Fr[1],f)}var Ir=[0,0];var Pr=3.141592653589793;function xr(e){return ne(e/2)}function Vr(e){return xr(e>0?e-1:e+1)}var Gr=Math.sqrt,Hr=!0===Ue?0:1,Br=new se(1),Lr=new ce(Br.buffer);function Mr(e,r){return Br[0]=e,Lr[Hr]=r>>>0,Br[0]}function kr(e){return 0|e}var Wr=!0===Ue?1:0,Cr=new se(1),Yr=new ce(Cr.buffer);function qr(e,r){return Cr[0]=e,Yr[Wr]=r>>>0,Cr[0]}var Rr=1048576,Xr=[1,1.5],zr=[0,.5849624872207642],Dr=[0,1.350039202129749e-8];var Jr=1048575;var Kr=1048576;var Qr=1083179008,Zr=1e300,$r=1e-300,en=[0,0],rn=[0,0];function nn(e,r){var n,t,o,u,i,f,a,c,l,y,v,p,s,b;if(ee(e)||ee(r))return NaN;if(tr.assign(r,en,1,0),i=en[0],0===en[1]){if(0===r)return 1;if(1===r)return e;if(-1===r)return 1/e;if(.5===r)return Gr(e);if(-.5===r)return 1/Gr(e);if(2===r)return e*e;if(3===r)return e*e*e;if(4===r)return(e*=e)*e;if(ze(r))return function(e,r){return-1===e?(e-e)/(e-e):1===e?1:oe(e)<1==(r===Re)?0:Re}(e,r)}if(tr.assign(e,en,1,0),u=en[0],0===en[1]){if(0===u)return function(e,r){return r===te?Re:r===Re?0:r>0?Vr(r)?e:0:Vr(r)?ur(Re,e):Re}(e,r);if(1===e)return 1;if(-1===e&&Vr(r))return-1;if(ze(e))return e===te?nn(-0,-r):r<0?0:Re}if(e<0&&!1===ne(r))return(e-e)/(e-e);if(o=oe(e),n=u&Ke|0,t=i&Ke|0,a=i>>>31|0,f=(f=u>>>31|0)&&Vr(r)?-1:1,t>1105199104){if(t>1139802112)return function(e,r){return(Te(e)&Ke)<=1072693247?r<0?1/0:0:r>0?1/0:0}(e,r);if(n<1072693247)return 1===a?f*Zr*Zr:f*$r*$r;if(n>1072693248)return 0===a?f*Zr*Zr:f*$r*$r;v=function(e,r){var n,t,o,u,i,f;return n=(i=1.9259629911266175e-8*(o=r-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((t=Mr(t=(u=1.4426950216293335*o)+i,0))-u),e[0]=t,e[1]=n,e}(rn,o)}else v=function(e,r,n){var t,o,u,i,f,a,c,l,y,v,p,s,b,d,w,m,j,g,h,A,_;return g=0,n<Rr&&(g-=53,n=Te(r*=9007199254740992)),g+=(n>>20)-Xe|0,n=1072693248|(h=1048575&n|0),h<=235662?A=0:h<767610?A=1:(A=0,g+=1,n-=Rr),i=Mr(o=(m=(r=qr(r,n))-(c=Xr[A]))*(j=1/(r+c)),0),t=524288+(n>>1|536870912),a=qr(0,t+=A<<18),w=(u=o*o)*u*(0===(_=u)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),a=Mr(a=3+(u=i*i)+(w+=(f=j*(m-i*a-i*(r-(a-c))))*(i+o)),0),b=(p=-7.028461650952758e-9*(y=Mr(y=(m=i*a)+(j=f*a+(w-(a-3-u))*o),0))+.9617966939259756*(j-(y-m))+Dr[A])-((s=Mr(s=(v=.9617967009544373*y)+p+(l=zr[A])+(d=g),0))-d-l-v),e[0]=s,e[1]=b,e}(rn,o,n);if(p=(y=(r-(c=Mr(r,0)))*v[0]+r*v[1])+(l=c*v[0]),tr.assign(p,en,1,0),s=kr(en[0]),b=kr(en[1]),s>=Qr){if(0!=(s-Qr|b))return f*Zr*Zr;if(y+8008566259537294e-32>p-l)return f*Zr*Zr}else if((s&Ke)>=1083231232){if(0!=(s-3230714880|b))return f*$r*$r;if(y<=p-l)return f*$r*$r}return p=function(e,r,n){var t,o,u,i,f,a,c,l,y,v;return y=((l=e&Ke|0)>>20)-Xe|0,c=0,l>1071644672&&(o=qr(0,((c=e+(Kr>>y+1)>>>0)&~(Jr>>(y=((c&Ke)>>20)-Xe|0)))>>>0),c=(c&Jr|Kr)>>20-y>>>0,e<0&&(c=-c),r-=o),e=kr(e=Te(a=1-((a=(u=.6931471824645996*(o=Mr(o=n+r,0)))+(i=.6931471805599453*(n-(o-r))+-1.904654299957768e-9*o))*(t=a-(o=a*a)*(0===(v=o)?.16666666666666602:.16666666666666602+v*(v*(6613756321437934e-20+v*(4.1381367970572385e-8*v-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((f=i-(a-u))+a*f)-a))),(e+=c<<20>>>0)>>20<=0?cr(a,c):qr(a,e)}(s,l,y),f*p}var tn=Math.ceil;function on(e){return e<0?tn(e):re(e)}var un=1.4426950408889634,fn=1/(1<<28);function an(e){var r;return ee(e)||e===Re?e:e===te?0:e>709.782712893384?Re:e<-745.1332191019411?0:e>-3.725290298461914e-9&&e<fn?1+e:function(e,r,n){var t,o,u,i;return cr(1-(r-(t=e-r)*(u=t-(o=t*t)*(0===(i=o)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-u)-e),n)}(e-.6931471803691238*(r=on(e<0?un*e-.5:un*e+.5)),1.9082149292705877e-10*r,r)}function cn(e){var r,n,t;return r=1+(r=1/e)*function(e){return 0===e?.08333333333334822:.08333333333334822+e*(.0034722222160545866+e*(e*(.0007873113957930937*e-.00022954996161337813)-.0026813261780578124))}(r),n=an(e),2.5066282746310007*(n=e>143.01608?(t=nn(e,.5*e-.25))*(t/n):nn(e,e-.5)/n)*r}function ln(e,r){return r/((1+.5772156649015329*e)*e)}function yn(e){var r,n,t,o;if(ne(e)&&e<0||e===te||ee(e))return NaN;if(0===e)return function(e){return 0===e&&1/e===te}(e)?te:Re;if(e>171.61447887182297)return Re;if(e<-170.5674972726612)return 0;if((n=oe(e))>33)return e>=0?cn(e):(r=0==(1&(t=re(n)))?-1:1,(o=n-t)>.5&&(o=n-(t+=1)),o=n*function(e){var r;if(r=Te(e),(r&=2147483647)<=1072243195)return r<1045430272?e:xe(e,0);if(r>=2146435072)return NaN;switch(3&Tr(e,Ir)){case 0:return xe(Ir[0],Ir[1]);case 1:return Ie(Ir[0],Ir[1]);case 2:return-xe(Ir[0],Ir[1]);default:return-Ie(Ir[0],Ir[1])}}(Pr*o),r*Pr/(oe(o)*cn(n)));for(o=1;e>=3;)o*=e-=1;for(;e<0;){if(e>-1e-9)return ln(e,o);o/=e,e+=1}for(;e<2;){if(e<1e-9)return ln(e,o);o/=e,e+=1}return 2===e?o:o*function(e){var r,n;return 0===e?1:((e<0?-e:e)<=1?(r=1+e*(.4942148268014971+e*(.20744822764843598+e*(.04763678004571372+e*(.010421379756176158+e*(.0011913514700658638+e*(.00016011952247675185+0*e)))))),n=1+e*(.0714304917030273+e*(e*(.035823639860549865+e*(.011813978522206043+e*(e*(.0005396055804933034+-23158187332412014e-21*e)-.004456419138517973)))-.23459179571824335))):(r=0+(e=1/e)*(.00016011952247675185+e*(.0011913514700658638+e*(.010421379756176158+e*(.04763678004571372+e*(.20744822764843598+e*(.4942148268014971+1*e)))))),n=e*(.0005396055804933034+e*(e*(.011813978522206043+e*(.035823639860549865+e*(e*(.0714304917030273+1*e)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),r/n)}(e-=2)}var vn=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,0x1b02b9306890000,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8.841761993739702e30,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,1.0333147966386145e40,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,1.3868311854568984e80,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8.247650592082472e90,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,1.1978571669969892e100,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5.797126020747368e120,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,2.4227095383672734e130,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1.352001527678403e140,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,1.1462805637347084e170,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,1.7629525510902446e180,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3.393108684451898e190,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8.094298525273444e200,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,2.6904727073180504e230,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,3.80892263763057e260,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1.853271869493735e280,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1.503616514864999e300,25260757449731984e286,4269068009004705e289,7257415615307999e291];function pn(e){return ee(e)?NaN:ne(e)?e<0?NaN:e<=170?vn[e]:Re:yn(e+1)}return function(e){return $(e,pn)}}));
//# sourceMappingURL=browser.js.map
