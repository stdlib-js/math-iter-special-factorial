// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).iterFactorial=r()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function n(e){return"number"==typeof e}function t(e){var r,n="";for(r=0;r<e;r++)n+="0";return n}function i(e,r,n){var i=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=n?e+t(o):t(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(e){var r,t,u;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,u=parseInt(t,10),!isFinite(u)){if(!n(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===e.specifier||10!==r)&&(u=4294967295+u+1),u<0?(t=(-u).toString(r),e.precision&&(t=i(t,e.precision,e.padRight)),t="-"+t):(t=u.toString(r),u||e.precision?e.precision&&(t=i(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===a.call(e.specifier)?a.call(t):o.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function f(e){return"string"==typeof e}var c=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,v=/e\+(\d)$/,y=/e-(\d)$/,g=/^(\d+)$/,d=/^(\d+)e/,b=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function m(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!n(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":c(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=p.call(t,w,"$1e"),t=p.call(t,h,"e"),t=p.call(t,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=p.call(t,v,"e+0$1"),t=p.call(t,y,"e-0$1"),e.alternate&&(t=p.call(t,g,"$1."),t=p.call(t,d,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===s.call(e.specifier)?s.call(t):l.call(t)}function j(e){var r,n="";for(r=0;r<e;r++)n+=" ";return n}function A(e,r,n){var t=r-e.length;return t<0?e:e=n?e+j(t):j(t)+e}var _=String.fromCharCode,E=isNaN,N=Array.isArray;function O(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function S(e){var r,n,t,o,a,c,l,s,p;if(!N(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(c="",l=1,s=0;s<e.length;s++)if(f(t=e[s]))c+=t;else{if(r=void 0!==t.precision,!(t=O(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(l=t.mapping),n=t.flags,p=0;p<n.length;p++)switch(o=n.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===t.width){if(t.width=parseInt(arguments[l],10),l+=1,E(t.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[l],10),l+=1,E(t.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[l],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!E(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=E(a)?String(t.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=A(t.arg,t.width,t.padRight)),c+=t.arg||"",l+=1}return c}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function U(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function F(e){var r,n,t,i;for(n=[],i=0,t=x.exec(e);t;)(r=e.slice(i,x.lastIndex-t[0].length)).length&&n.push(r),n.push(U(t)),i=x.lastIndex,t=x.exec(e);return(r=e.slice(i)).length&&n.push(r),n}function T(e){return"string"==typeof e}function I(e){var r,n,t;if(!T(e))throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=F(e),(n=new Array(arguments.length))[0]=r,t=1;t<n.length;t++)n[t]=arguments[t];return S.apply(null,n)}var k,V=Object.prototype,P=V.toString,G=V.__defineGetter__,L=V.__defineSetter__,$=V.__lookupGetter__,C=V.__lookupSetter__;k=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,n){var t,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===P.call(e))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof n||null===n||"[object Array]"===P.call(n))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&($.call(e,r)||C.call(e,r)?(t=e.__proto__,e.__proto__=V,delete e[r],e[r]=n.value,e.__proto__=t):e[r]=n.value),o="get"in n,a="set"in n,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&G&&G.call(e,r,n.get),a&&L&&L.call(e,r,n.set),e};var H=k;function M(e,r,n){H(e,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}var W=/./;function B(e){return"boolean"==typeof e}var R="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return R&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString;var Y=Object.prototype.hasOwnProperty;function q(e,r){return null!=e&&Y.call(e,r)}var z="function"==typeof Symbol?Symbol:void 0,D="function"==typeof z?z.toStringTag:"";var J=Z()?function(e){var r,n,t;if(null==e)return X.call(e);n=e[D],r=q(e,D);try{e[D]=void 0}catch(r){return X.call(e)}return t=X.call(e),r?e[D]=n:delete e[D],t}:function(e){return X.call(e)},K=Boolean,Q=Boolean.prototype.toString;var ee=Z();function re(e){return"object"==typeof e&&(e instanceof K||(ee?function(e){try{return Q.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===J(e)))}function ne(e){return B(e)||re(e)}function te(){return new Function("return this;")()}M(ne,"isPrimitive",B),M(ne,"isObject",re);var ie="object"==typeof self?self:null,oe="object"==typeof window?window:null,ae="object"==typeof global?global:null,ue="object"==typeof globalThis?globalThis:null;var fe=function(e){if(arguments.length){if(!B(e))throw new TypeError(I("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return te()}if(ue)return ue;if(ie)return ie;if(oe)return oe;if(ae)return ae;throw new Error("unexpected error. Unable to resolve global object.")}(),ce=fe.document&&fe.document.childNodes,le=Int8Array;function se(){return/^\s*function\s*([^(]*)/i}var pe=/^\s*function\s*([^(]*)/i;M(se,"REGEXP",pe);var ve=Array.isArray?Array.isArray:function(e){return"[object Array]"===J(e)};function ye(e){return null!==e&&"object"==typeof e}function ge(e){var r,n,t,i;if(("Object"===(n=J(e).slice(8,-1))||"Error"===n)&&e.constructor){if("string"==typeof(t=e.constructor).name)return t.name;if(r=pe.exec(t.toString()))return r[1]}return ye(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":n}M(ye,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(I("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var n,t;if(!ve(r))return!1;if(0===(n=r.length))return!1;for(t=0;t<n;t++)if(!1===e(r[t]))return!1;return!0}}(ye));var de="function"==typeof W||"object"==typeof le||"function"==typeof ce?function(e){return ge(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?ge(e).toLowerCase():r};function be(e){return"function"===de(e)}function he(e){var r=typeof e;return null!==e&&("object"===r||"function"===r)&&be(e.next)}function we(e){return"number"==typeof e}var me=Number,je=me.prototype.toString;var Ae=Z();function _e(e){return"object"==typeof e&&(e instanceof me||(Ae?function(e){try{return je.call(e),!0}catch(e){return!1}}(e):"[object Number]"===J(e)))}function Ee(e){return we(e)||_e(e)}M(Ee,"isPrimitive",we),M(Ee,"isObject",_e);var Ne="function"==typeof z&&"symbol"==typeof z("foo")&&q(z,"iterator")&&"symbol"==typeof z.iterator?Symbol.iterator:null;var Oe,Se=Object,xe=Object.getPrototypeOf;Oe=be(Object.getPrototypeOf)?xe:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===J(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var Ue=Oe;var Fe=Object.prototype;function Te(e){var r;return!!function(e){return"object"==typeof e&&null!==e&&!ve(e)}(e)&&(r=function(e){return null==e?null:(e=Se(e),Ue(e))}(e),!r||!q(e,"constructor")&&q(r,"constructor")&&be(r.constructor)&&"[object Function]"===J(r.constructor)&&q(r,"isPrototypeOf")&&be(r.isPrototypeOf)&&(r===Fe||function(e){var r;for(r in e)if(!q(e,r))return!1;return!0}(e)))}function Ie(e,r){return Te(r)?(q(r,"invalid")&&(e.invalid=r.invalid),null):new TypeError(I("invalid argument. Options argument must be an object. Value: `%s`.",r))}function ke(e,r,n){var t,i,o,a;if(!he(e))throw new TypeError(I("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",e));if(!be(r))throw new TypeError(I("invalid argument. Second argument must be a function. Value: `%s`.",r));if(t={invalid:NaN},arguments.length>2&&(o=Ie(t,n)))throw o;return M(i={},"next",u),M(i,"return",f),Ne&&be(e[Ne])&&M(i,Ne,c),i;function u(){var n;return a?{done:!0}:(n=e.next()).done?(a=!0,n):{value:we(n.value)?r(n.value):t.invalid,done:!1}}function f(e){return a=!0,arguments.length?{value:e,done:!0}:{done:!0}}function c(){return ke(e[Ne](),r,t)}}function Ve(e){return e!=e}var Pe=Math.floor;function Ge(e){return Pe(e)===e}var Le=me.NEGATIVE_INFINITY;function $e(e){return Math.abs(e)}var Ce=2147483647,He=2146435072,Me="function"==typeof Uint32Array;var We="function"==typeof Uint32Array?Uint32Array:null;var Be,Re="function"==typeof Uint32Array?Uint32Array:void 0;Be=function(){var e,r,n;if("function"!=typeof We)return!1;try{r=new We(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,e=(Me&&n instanceof Uint32Array||"[object Uint32Array]"===J(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?Re:function(){throw new Error("not implemented")};var Ze=Be,Xe="function"==typeof Float64Array;var Ye="function"==typeof Float64Array?Float64Array:null;var qe,ze="function"==typeof Float64Array?Float64Array:void 0;qe=function(){var e,r,n;if("function"!=typeof Ye)return!1;try{r=new Ye([1,3.14,-3.14,NaN]),n=r,e=(Xe&&n instanceof Float64Array||"[object Float64Array]"===J(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?ze:function(){throw new Error("not implemented")};var De=qe,Je="function"==typeof Uint8Array;var Ke="function"==typeof Uint8Array?Uint8Array:null;var Qe,er="function"==typeof Uint8Array?Uint8Array:void 0;Qe=function(){var e,r,n;if("function"!=typeof Ke)return!1;try{r=new Ke(r=[1,3.14,-3.14,256,257]),n=r,e=(Je&&n instanceof Uint8Array||"[object Uint8Array]"===J(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?er:function(){throw new Error("not implemented")};var rr=Qe,nr="function"==typeof Uint16Array;var tr="function"==typeof Uint16Array?Uint16Array:null;var ir,or="function"==typeof Uint16Array?Uint16Array:void 0;ir=function(){var e,r,n;if("function"!=typeof tr)return!1;try{r=new tr(r=[1,3.14,-3.14,65536,65537]),n=r,e=(nr&&n instanceof Uint16Array||"[object Uint16Array]"===J(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?or:function(){throw new Error("not implemented")};var ar,ur={uint16:ir,uint8:rr};(ar=new ur.uint16(1))[0]=4660;var fr=52===new ur.uint8(ar.buffer)[0],cr=!0===fr?1:0,lr=new De(1),sr=new Ze(lr.buffer);function pr(e){return lr[0]=e,sr[cr]}function vr(e,r){var n,t,i,o;return i=(o=e*e)*o,t=o*function(e){return 0===e?.0416666666666666:.0416666666666666+e*(2480158728947673e-20*e-.001388888888887411)}(o),t+=i*i*function(e){return 0===e?-2.7557314351390663e-7:e*(2.087572321298175e-9+-11359647557788195e-27*e)-2.7557314351390663e-7}(o),(i=1-(n=.5*o))+(1-i-n+(o*t-e*r))}var yr=-.16666666666666632;function gr(e,r){var n,t,i;return n=.00833333333332249+(i=e*e)*(27557313707070068e-22*i-.0001984126982985795)+i*(i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),t=i*e,0===r?e+t*(yr+i*n):e-(i*(.5*r-t*n)-r-t*yr)}var dr,br,hr=1048575,wr=!0===fr?0:1,mr=new De(1),jr=new Ze(mr.buffer);!0===fr?(dr=1,br=0):(dr=0,br=1);var Ar={HIGH:dr,LOW:br},_r=new De(1),Er=new Ze(_r.buffer),Nr=Ar.HIGH,Or=Ar.LOW;function Sr(e,r){return Er[Nr]=e,Er[Or]=r,_r[0]}var xr=Number.POSITIVE_INFINITY,Ur=1023;function Fr(e){return e===xr||e===Le}var Tr,Ir;!0===fr?(Tr=1,Ir=0):(Tr=0,Ir=1);var kr={HIGH:Tr,LOW:Ir},Vr=new De(1),Pr=new Ze(Vr.buffer),Gr=kr.HIGH,Lr=kr.LOW;function $r(e,r,n,t){return Vr[0]=e,r[t]=Pr[Gr],r[t+n]=Pr[Lr],r}function Cr(e){return $r(e,[0,0],1,0)}M(Cr,"assign",$r);var Hr=[0,0];function Mr(e,r){var n,t;return Cr.assign(e,Hr,1,0),n=Hr[0],n&=Ce,t=pr(r),Sr(n|=t&=2147483648,Hr[1])}function Wr(e,r,n,t){return Ve(e)||Fr(e)?(r[t]=e,r[t+n]=0,r):0!==e&&$e(e)<22250738585072014e-324?(r[t]=4503599627370496*e,r[t+n]=-52,r):(r[t]=e,r[t+n]=0,r)}M((function(e){return Wr(e,[0,0],1,0)}),"assign",Wr);var Br=[0,0],Rr=[0,0];function Zr(e,r){var n,t;return 0===r||0===e||Ve(e)||Fr(e)?e:(Wr(e,Br,1,0),r+=Br[1],r+=function(e){var r=pr(e);return(r=(r&He)>>>20)-Ur|0}(e=Br[0]),r<-1074?Mr(0,e):r>1023?e<0?Le:xr:(r<=-1023?(r+=52,t=2220446049250313e-31):t=1,Cr.assign(e,Rr,1,0),n=Rr[0],n&=2148532223,t*Sr(n|=r+Ur<<20,Rr[1])))}function Xr(e){return function(e,r){var n,t;for(n=[],t=0;t<r;t++)n.push(e);return n}(0,e)}var Yr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],qr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],zr=16777216,Dr=5.960464477539063e-8,Jr=Xr(20),Kr=Xr(20),Qr=Xr(20),en=Xr(20);function rn(e,r,n,t,i,o,a,u,f){var c,l,s,p,v,y,g,d,b;for(p=o,b=t[n],d=n,v=0;d>0;v++)l=Dr*b|0,en[v]=b-zr*l|0,b=t[d-1]+l,d-=1;if(b=Zr(b,i),b-=8*Pe(.125*b),b-=g=0|b,s=0,i>0?(g+=v=en[n-1]>>24-i,en[n-1]-=v<<24-i,s=en[n-1]>>23-i):0===i?s=en[n-1]>>23:b>=.5&&(s=2),s>0){for(g+=1,c=0,v=0;v<n;v++)d=en[v],0===c?0!==d&&(c=1,en[v]=16777216-d):en[v]=16777215-d;if(i>0)switch(i){case 1:en[n-1]&=8388607;break;case 2:en[n-1]&=4194303}2===s&&(b=1-b,0!==c&&(b-=Zr(1,i)))}if(0===b){for(d=0,v=n-1;v>=o;v--)d|=en[v];if(0===d){for(y=1;0===en[o-y];y++);for(v=n+1;v<=n+y;v++){for(f[u+v]=Yr[a+v],l=0,d=0;d<=u;d++)l+=e[d]*f[u+(v-d)];t[v]=l}return rn(e,r,n+=y,t,i,o,a,u,f)}}if(0===b)for(n-=1,i-=24;0===en[n];)n-=1,i-=24;else(b=Zr(b,-i))>=zr?(l=Dr*b|0,en[n]=b-zr*l|0,i+=24,en[n+=1]=l):en[n]=0|b;for(l=Zr(1,i),v=n;v>=0;v--)t[v]=l*en[v],l*=Dr;for(v=n;v>=0;v--){for(l=0,y=0;y<=p&&y<=n-v;y++)l+=qr[y]*t[v+y];Qr[n-v]=l}for(l=0,v=n;v>=0;v--)l+=Qr[v];for(r[0]=0===s?l:-l,l=Qr[0]-l,v=1;v<=n;v++)l+=Qr[v];return r[1]=0===s?l:-l,7&g}function nn(e,r,n,t){var i,o,a,u,f,c,l;for(4,(o=(n-3)/24|0)<0&&(o=0),u=n-24*(o+1),c=o-(a=t-1),l=a+4,f=0;f<=l;f++)Jr[f]=c<0?0:Yr[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=a;c++)i+=e[c]*Jr[a+(f-c)];Kr[f]=i}return 4,rn(e,r,4,Kr,u,4,o,a,Jr)}var tn=Math.round;function on(e,r,n){var t,i,o,a,u;return o=e-1.5707963267341256*(t=tn(.6366197723675814*e)),a=6077100506506192e-26*t,u=r>>20|0,n[0]=o-a,u-(pr(n[0])>>20&2047)>16&&(a=20222662487959506e-37*t-((i=o)-(o=i-(a=6077100506303966e-26*t))-a),n[0]=o-a,u-(pr(n[0])>>20&2047)>49&&(a=84784276603689e-45*t-((i=o)-(o=i-(a=20222662487111665e-37*t))-a),n[0]=o-a)),n[1]=o-n[0]-a,t}var an=1.5707963267341256,un=6077100506506192e-26,fn=2*un,cn=3*un,ln=4*un,sn=[0,0,0],pn=[0,0];function vn(e,r){var n,t,i,o,a,u,f;if((i=pr(e)&Ce|0)<=1072243195)return r[0]=e,r[1]=0,0;if(i<=1074752122)return 598523==(i&hr)?on(e,i,r):i<=1073928572?e>0?(f=e-an,r[0]=f-un,r[1]=f-r[0]-un,1):(f=e+an,r[0]=f+un,r[1]=f-r[0]+un,-1):e>0?(f=e-2*an,r[0]=f-fn,r[1]=f-r[0]-fn,2):(f=e+2*an,r[0]=f+fn,r[1]=f-r[0]+fn,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?on(e,i,r):e>0?(f=e-3*an,r[0]=f-cn,r[1]=f-r[0]-cn,3):(f=e+3*an,r[0]=f+cn,r[1]=f-r[0]+cn,-3):1075388923===i?on(e,i,r):e>0?(f=e-4*an,r[0]=f-ln,r[1]=f-r[0]-ln,4):(f=e+4*an,r[0]=f+ln,r[1]=f-r[0]+ln,-4);if(i<1094263291)return on(e,i,r);if(i>=He)return r[0]=NaN,r[1]=NaN,0;for(n=function(e){return mr[0]=e,jr[wr]}(e),f=Sr(i-((t=(i>>20)-1046)<<20|0),n),a=0;a<2;a++)sn[a]=0|f,f=16777216*(f-sn[a]);for(sn[2]=f,o=3;0===sn[o-1];)o-=1;return u=nn(sn,pn,t,o),e<0?(r[0]=-pn[0],r[1]=-pn[1],-u):(r[0]=pn[0],r[1]=pn[1],u)}var yn=[0,0];var gn=3.141592653589793;function dn(e){return Ge(e/2)}function bn(e){return dn(e>0?e-1:e+1)}var hn=Math.sqrt,wn=!0===fr?0:1,mn=new De(1),jn=new Ze(mn.buffer);function An(e,r){return mn[0]=e,jn[wn]=r>>>0,mn[0]}function _n(e){return 0|e}var En=!0===fr?1:0,Nn=new De(1),On=new Ze(Nn.buffer);function Sn(e,r){return Nn[0]=e,On[En]=r>>>0,Nn[0]}var xn=1048576,Un=[1,1.5],Fn=[0,.5849624872207642],Tn=[0,1.350039202129749e-8];var In=1048576;var kn=1083179008,Vn=1e300,Pn=1e-300,Gn=[0,0],Ln=[0,0];function $n(e,r){var n,t,i,o,a,u,f,c,l,s,p,v,y,g;if(Ve(e)||Ve(r))return NaN;if(Cr.assign(r,Gn,1,0),a=Gn[0],0===Gn[1]){if(0===r)return 1;if(1===r)return e;if(-1===r)return 1/e;if(.5===r)return hn(e);if(-.5===r)return 1/hn(e);if(2===r)return e*e;if(3===r)return e*e*e;if(4===r)return(e*=e)*e;if(Fr(r))return function(e,r){return-1===e?(e-e)/(e-e):1===e?1:$e(e)<1==(r===xr)?0:xr}(e,r)}if(Cr.assign(e,Gn,1,0),o=Gn[0],0===Gn[1]){if(0===o)return function(e,r){return r===Le?xr:r===xr?0:r>0?bn(r)?e:0:bn(r)?Mr(xr,e):xr}(e,r);if(1===e)return 1;if(-1===e&&bn(r))return-1;if(Fr(e))return e===Le?$n(-0,-r):r<0?0:xr}if(e<0&&!1===Ge(r))return(e-e)/(e-e);if(i=$e(e),n=o&Ce|0,t=a&Ce|0,f=a>>>31|0,u=(u=o>>>31|0)&&bn(r)?-1:1,t>1105199104){if(t>1139802112)return function(e,r){return(pr(e)&Ce)<=1072693247?r<0?1/0:0:r>0?1/0:0}(e,r);if(n<1072693247)return 1===f?u*Vn*Vn:u*Pn*Pn;if(n>1072693248)return 0===f?u*Vn*Vn:u*Pn*Pn;p=function(e,r){var n,t,i,o,a,u;return n=(a=1.9259629911266175e-8*(i=r-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=An(t=(o=1.4426950216293335*i)+a,0))-o),e[0]=t,e[1]=n,e}(Ln,i)}else p=function(e,r,n){var t,i,o,a,u,f,c,l,s,p,v,y,g,d,b,h,w,m,j,A,_;return m=0,n<xn&&(m-=53,n=pr(r*=9007199254740992)),m+=(n>>20)-Ur|0,n=1072693248|(j=1048575&n|0),j<=235662?A=0:j<767610?A=1:(A=0,m+=1,n-=xn),a=An(i=(h=(r=Sn(r,n))-(c=Un[A]))*(w=1/(r+c)),0),t=524288+(n>>1|536870912),f=Sn(0,t+=A<<18),b=(o=i*i)*o*(0===(_=o)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=An(f=3+(o=a*a)+(b+=(u=w*(h-a*f-a*(r-(f-c))))*(a+i)),0),g=(v=-7.028461650952758e-9*(s=An(s=(h=a*f)+(w=u*f+(b-(f-3-o))*i),0))+.9617966939259756*(w-(s-h))+Tn[A])-((y=An(y=(p=.9617967009544373*s)+v+(l=Fn[A])+(d=m),0))-d-l-p),e[0]=y,e[1]=g,e}(Ln,i,n);if(v=(s=(r-(c=An(r,0)))*p[0]+r*p[1])+(l=c*p[0]),Cr.assign(v,Gn,1,0),y=_n(Gn[0]),g=_n(Gn[1]),y>=kn){if(0!=(y-kn|g))return u*Vn*Vn;if(s+8008566259537294e-32>v-l)return u*Vn*Vn}else if((y&Ce)>=1083231232){if(0!=(y-3230714880|g))return u*Pn*Pn;if(s<=v-l)return u*Pn*Pn}return v=function(e,r,n){var t,i,o,a,u,f,c,l,s,p;return s=((l=e&Ce|0)>>20)-Ur|0,c=0,l>1071644672&&(i=Sn(0,((c=e+(In>>s+1)>>>0)&~(hr>>(s=((c&Ce)>>20)-Ur|0)))>>>0),c=(c&hr|In)>>20-s>>>0,e<0&&(c=-c),r-=i),e=_n(e=pr(f=1-((f=(o=.6931471824645996*(i=An(i=n+r,0)))+(a=.6931471805599453*(n-(i-r))+-1.904654299957768e-9*i))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=a-(f-o))+f*u)-f))),(e+=c<<20>>>0)>>20<=0?Zr(f,c):Sn(f,e)}(y,l,s),u*v}var Cn=Math.ceil;function Hn(e){return e<0?Cn(e):Pe(e)}var Mn=1.4426950408889634,Wn=1/(1<<28);function Bn(e){var r;return Ve(e)||e===xr?e:e===Le?0:e>709.782712893384?xr:e<-745.1332191019411?0:e>-3.725290298461914e-9&&e<Wn?1+e:function(e,r,n){var t,i,o,a;return Zr(1-(r-(t=e-r)*(o=t-(i=t*t)*(0===(a=i)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-o)-e),n)}(e-.6931471803691238*(r=Hn(e<0?Mn*e-.5:Mn*e+.5)),1.9082149292705877e-10*r,r)}function Rn(e){var r,n,t;return r=1+(r=1/e)*function(e){return 0===e?.08333333333334822:.08333333333334822+e*(.0034722222160545866+e*(e*(.0007873113957930937*e-.00022954996161337813)-.0026813261780578124))}(r),n=Bn(e),2.5066282746310007*(n=e>143.01608?(t=$n(e,.5*e-.25))*(t/n):$n(e,e-.5)/n)*r}function Zn(e,r){return r/((1+.5772156649015329*e)*e)}function Xn(e){var r,n,t,i;if(Ge(e)&&e<0||e===Le||Ve(e))return NaN;if(0===e)return function(e){return 0===e&&1/e===Le}(e)?Le:xr;if(e>171.61447887182297)return xr;if(e<-170.5674972726612)return 0;if((n=$e(e))>33)return e>=0?Rn(e):(r=0==(1&(t=Pe(n)))?-1:1,(i=n-t)>.5&&(i=n-(t+=1)),i=n*function(e){var r;if(r=pr(e),(r&=Ce)<=1072243195)return r<1045430272?e:gr(e,0);if(r>=He)return NaN;switch(3&vn(e,yn)){case 0:return gr(yn[0],yn[1]);case 1:return vr(yn[0],yn[1]);case 2:return-gr(yn[0],yn[1]);default:return-vr(yn[0],yn[1])}}(gn*i),r*gn/($e(i)*Rn(n)));for(i=1;e>=3;)i*=e-=1;for(;e<0;){if(e>-1e-9)return Zn(e,i);i/=e,e+=1}for(;e<2;){if(e<1e-9)return Zn(e,i);i/=e,e+=1}return 2===e?i:i*function(e){var r,n;return 0===e?1:((e<0?-e:e)<=1?(r=1+e*(.4942148268014971+e*(.20744822764843598+e*(.04763678004571372+e*(.010421379756176158+e*(.0011913514700658638+e*(.00016011952247675185+0*e)))))),n=1+e*(.0714304917030273+e*(e*(.035823639860549865+e*(.011813978522206043+e*(e*(.0005396055804933034+-23158187332412014e-21*e)-.004456419138517973)))-.23459179571824335))):(r=0+(e=1/e)*(.00016011952247675185+e*(.0011913514700658638+e*(.010421379756176158+e*(.04763678004571372+e*(.20744822764843598+e*(.4942148268014971+1*e)))))),n=e*(.0005396055804933034+e*(e*(.011813978522206043+e*(.035823639860549865+e*(e*(.0714304917030273+1*e)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),r/n)}(e-=2)}var Yn=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,0x1b02b9306890000,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8.841761993739702e30,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,1.0333147966386145e40,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,1.3868311854568984e80,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8.247650592082472e90,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,1.1978571669969892e100,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5.797126020747368e120,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,2.4227095383672734e130,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1.352001527678403e140,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,1.1462805637347084e170,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,1.7629525510902446e180,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3.393108684451898e190,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8.094298525273444e200,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,2.6904727073180504e230,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,3.80892263763057e260,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1.853271869493735e280,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1.503616514864999e300,25260757449731984e286,4269068009004705e289,7257415615307999e291];function qn(e){return Ve(e)?NaN:Ge(e)?e<0?NaN:e<=170?Yn[e]:xr:Xn(e+1)}return function(e){return ke(e,qn)}}));
//# sourceMappingURL=index.js.map
