// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function n(e){return"number"==typeof e}function t(e){var r,n="";for(r=0;r<e;r++)n+="0";return n}function i(e,r,n){var i=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=n?e+t(o):t(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(e){var r,t,u;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,u=parseInt(t,10),!isFinite(u)){if(!n(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===e.specifier||10!==r)&&(u=4294967295+u+1),u<0?(t=(-u).toString(r),e.precision&&(t=i(t,e.precision,e.padRight)),t="-"+t):(t=u.toString(r),u||e.precision?e.precision&&(t=i(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===a.call(e.specifier)?a.call(t):o.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var f=Math.abs,c=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,y=/e-(\d)$/,v=/^(\d+)$/,g=/^(\d+)e/,d=/\.0$/,b=/\.0*e/,h=/(\..*[^0])0*e/;function w(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!n(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":f(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=s.call(t,h,"$1e"),t=s.call(t,b,"e"),t=s.call(t,d,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=s.call(t,p,"e+0$1"),t=s.call(t,y,"e-0$1"),e.alternate&&(t=s.call(t,v,"$1."),t=s.call(t,g,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===l.call(e.specifier)?l.call(t):c.call(t)}function m(e){var r,n="";for(r=0;r<e;r++)n+=" ";return n}var j=String.fromCharCode,A=Array.isArray;function _(e){return e!=e}function E(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function O(e){var r,n,t,o,a,f,c,l,s,p,y,v,g;if(!A(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(f="",c=1,l=0;l<e.length;l++)if("string"==typeof(t=e[l]))f+=t;else{if(r=void 0!==t.precision,!(t=E(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+t+"`.");for(t.mapping&&(c=t.mapping),n=t.flags,s=0;s<n.length;s++)switch(o=n.charAt(s)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===t.width){if(t.width=parseInt(arguments[c],10),c+=1,_(t.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[c],10),c+=1,_(t.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[c],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=r?t.precision:-1,t.arg=String(t.arg);break;case"c":if(!_(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=_(a)?String(t.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=w(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(p=t.arg,y=t.width,v=t.padRight,g=void 0,(g=y-p.length)<0?p:p=v?p+m(g):m(g)+p)),f+=t.arg||"",c+=1}return f}var N=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function S(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function x(e){var r,n,t,i;for(n=[],i=0,t=N.exec(e);t;)(r=e.slice(i,N.lastIndex-t[0].length)).length&&n.push(r),n.push(S(t)),i=N.lastIndex,t=N.exec(e);return(r=e.slice(i)).length&&n.push(r),n}function U(e){var r,n;if("string"!=typeof e)throw new TypeError(U("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[x(e)],n=1;n<arguments.length;n++)r.push(arguments[n]);return O.apply(null,r)}var F,T=Object.prototype,I=T.toString,k=T.__defineGetter__,V=T.__defineSetter__,P=T.__lookupGetter__,G=T.__lookupSetter__;F=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,n){var t,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===I.call(e))throw new TypeError(U("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof n||null===n||"[object Array]"===I.call(n))throw new TypeError(U("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(P.call(e,r)||G.call(e,r)?(t=e.__proto__,e.__proto__=T,delete e[r],e[r]=n.value,e.__proto__=t):e[r]=n.value),o="get"in n,a="set"in n,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&k&&k.call(e,r,n.get),a&&V&&V.call(e,r,n.set),e};var L=F;function $(e,r,n){L(e,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}var C=/./;function H(e){return"boolean"==typeof e}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return M&&"symbol"==typeof Symbol.toStringTag}var B=Object.prototype.toString,R=Object.prototype.hasOwnProperty;function Z(e,r){return null!=e&&R.call(e,r)}var X="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof X?X.toStringTag:"",q=W()?function(e){var r,n,t;if(null==e)return B.call(e);n=e[Y],r=Z(e,Y);try{e[Y]=void 0}catch(r){return B.call(e)}return t=B.call(e),r?e[Y]=n:delete e[Y],t}:function(e){return B.call(e)},z=Boolean,D=Boolean.prototype.toString,J=W();function K(e){return"object"==typeof e&&(e instanceof z||(J?function(e){try{return D.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===q(e)))}function Q(e){return H(e)||K(e)}$(Q,"isPrimitive",H),$(Q,"isObject",K);var ee="object"==typeof self?self:null,re="object"==typeof window?window:null,ne="object"==typeof globalThis?globalThis:null,te=function(e){if(arguments.length){if(!H(e))throw new TypeError(U("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return new Function("return this;")()}if(ne)return ne;if(ee)return ee;if(re)return re;throw new Error("unexpected error. Unable to resolve global object.")}(),ie=te.document&&te.document.childNodes,oe=Int8Array;function ae(){return/^\s*function\s*([^(]*)/i}var ue=/^\s*function\s*([^(]*)/i;$(ae,"REGEXP",ue);var fe=Array.isArray?Array.isArray:function(e){return"[object Array]"===q(e)};function ce(e){return null!==e&&"object"==typeof e}function le(e){var r,n,t,i;if(("Object"===(n=q(e).slice(8,-1))||"Error"===n)&&e.constructor){if("string"==typeof(t=e.constructor).name)return t.name;if(r=ue.exec(t.toString()))return r[1]}return ce(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":n}$(ce,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(U("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var n,t;if(!fe(r))return!1;if(0===(n=r.length))return!1;for(t=0;t<n;t++)if(!1===e(r[t]))return!1;return!0}}(ce));var se="function"==typeof C||"object"==typeof oe||"function"==typeof ie?function(e){return le(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?le(e).toLowerCase():r};function pe(e){return"function"===se(e)}function ye(e){return"number"==typeof e}var ve=Number,ge=ve.prototype.toString,de=W();function be(e){return"object"==typeof e&&(e instanceof ve||(de?function(e){try{return ge.call(e),!0}catch(e){return!1}}(e):"[object Number]"===q(e)))}function he(e){return ye(e)||be(e)}$(he,"isPrimitive",ye),$(he,"isObject",be);var we,me="function"==typeof X&&"symbol"==typeof X("foo")&&Z(X,"iterator")&&"symbol"==typeof X.iterator?Symbol.iterator:null,je=Object,Ae=Object.getPrototypeOf;we=pe(Object.getPrototypeOf)?Ae:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===q(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var _e=we,Ee=Object.prototype;function Oe(e){var r;return!!function(e){return"object"==typeof e&&null!==e&&!fe(e)}(e)&&(r=function(e){return null==e?null:(e=je(e),_e(e))}(e),!r||!Z(e,"constructor")&&Z(r,"constructor")&&pe(r.constructor)&&"[object Function]"===q(r.constructor)&&Z(r,"isPrototypeOf")&&pe(r.isPrototypeOf)&&(r===Ee||function(e){var r;for(r in e)if(!Z(e,r))return!1;return!0}(e)))}function Ne(e,r,n){var t,i,o,a,u,f;if(f=typeof(u=e),null===u||"object"!==f&&"function"!==f||!pe(u.next))throw new TypeError(U("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",e));if(!pe(r))throw new TypeError(U("invalid argument. Second argument must be a function. Value: `%s`.",r));if(t={invalid:NaN},arguments.length>2&&(o=function(e,r){return Oe(r)?(Z(r,"invalid")&&(e.invalid=r.invalid),null):new TypeError(U("invalid argument. Options argument must be an object. Value: `%s`.",r))}(t,n),o))throw o;return $(i={},"next",(function(){var n;return a?{done:!0}:(n=e.next()).done?(a=!0,n):{value:ye(n.value)?r(n.value):t.invalid,done:!1}})),$(i,"return",(function(e){return a=!0,arguments.length?{value:e,done:!0}:{done:!0}})),me&&pe(e[me])&&$(i,me,(function(){return Ne(e[me](),r,t)})),i}function Se(e){return e!=e}var xe=Math.floor;function Ue(e){return xe(e)===e}var Fe=ve.NEGATIVE_INFINITY;function Te(e){return Math.abs(e)}var Ie,ke=2147483647,Ve=2146435072,Pe="function"==typeof Uint32Array,Ge="function"==typeof Uint32Array?Uint32Array:null,Le="function"==typeof Uint32Array?Uint32Array:void 0;Ie=function(){var e,r,n;if("function"!=typeof Ge)return!1;try{r=new Ge(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,e=(Pe&&n instanceof Uint32Array||"[object Uint32Array]"===q(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?Le:function(){throw new Error("not implemented")};var $e,Ce=Ie,He="function"==typeof Float64Array,Me="function"==typeof Float64Array?Float64Array:null,We="function"==typeof Float64Array?Float64Array:void 0;$e=function(){var e,r,n;if("function"!=typeof Me)return!1;try{r=new Me([1,3.14,-3.14,NaN]),n=r,e=(He&&n instanceof Float64Array||"[object Float64Array]"===q(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?We:function(){throw new Error("not implemented")};var Be,Re=$e,Ze="function"==typeof Uint8Array,Xe="function"==typeof Uint8Array?Uint8Array:null,Ye="function"==typeof Uint8Array?Uint8Array:void 0;Be=function(){var e,r,n;if("function"!=typeof Xe)return!1;try{r=new Xe(r=[1,3.14,-3.14,256,257]),n=r,e=(Ze&&n instanceof Uint8Array||"[object Uint8Array]"===q(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?Ye:function(){throw new Error("not implemented")};var qe,ze=Be,De="function"==typeof Uint16Array,Je="function"==typeof Uint16Array?Uint16Array:null,Ke="function"==typeof Uint16Array?Uint16Array:void 0;qe=function(){var e,r,n;if("function"!=typeof Je)return!1;try{r=new Je(r=[1,3.14,-3.14,65536,65537]),n=r,e=(De&&n instanceof Uint16Array||"[object Uint16Array]"===q(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?Ke:function(){throw new Error("not implemented")};var Qe,er={uint16:qe,uint8:ze};(Qe=new er.uint16(1))[0]=4660;var rr=52===new er.uint8(Qe.buffer)[0],nr=!0===rr?1:0,tr=new Re(1),ir=new Ce(tr.buffer);function or(e){return tr[0]=e,ir[nr]}function ar(e,r){var n,t,i,o;return i=(o=e*e)*o,t=o*function(e){return 0===e?.0416666666666666:.0416666666666666+e*(2480158728947673e-20*e-.001388888888887411)}(o),t+=i*i*function(e){return 0===e?-2.7557314351390663e-7:e*(2.087572321298175e-9+-11359647557788195e-27*e)-2.7557314351390663e-7}(o),(i=1-(n=.5*o))+(1-i-n+(o*t-e*r))}var ur=-.16666666666666632,fr=.00833333333332249,cr=-.0001984126982985795,lr=27557313707070068e-22,sr=-2.5050760253406863e-8,pr=1.58969099521155e-10;function yr(e,r){var n,t,i;return n=fr+(i=e*e)*(cr+i*lr)+i*(i*i)*(sr+i*pr),t=i*e,0===r?e+t*(ur+i*n):e-(i*(.5*r-t*n)-r-t*ur)}var vr,gr,dr=1048575,br=!0===rr?0:1,hr=new Re(1),wr=new Ce(hr.buffer);!0===rr?(vr=1,gr=0):(vr=0,gr=1);var mr={HIGH:vr,LOW:gr},jr=new Re(1),Ar=new Ce(jr.buffer),_r=mr.HIGH,Er=mr.LOW;function Or(e,r){return Ar[_r]=e,Ar[Er]=r,jr[0]}var Nr=Number.POSITIVE_INFINITY,Sr=1023,xr=1023,Ur=-1023,Fr=-1074;function Tr(e){return e===Nr||e===Fe}var Ir,kr,Vr=2147483648;!0===rr?(Ir=1,kr=0):(Ir=0,kr=1);var Pr={HIGH:Ir,LOW:kr},Gr=new Re(1),Lr=new Ce(Gr.buffer),$r=Pr.HIGH,Cr=Pr.LOW;function Hr(e,r,n,t){return Gr[0]=e,r[t]=Lr[$r],r[t+n]=Lr[Cr],r}function Mr(e){return Hr(e,[0,0],1,0)}$(Mr,"assign",Hr);var Wr=[0,0];function Br(e,r){var n,t;return Mr.assign(e,Wr,1,0),n=Wr[0],n&=ke,t=or(r),Or(n|=t&=Vr,Wr[1])}var Rr=22250738585072014e-324,Zr=4503599627370496;function Xr(e,r,n,t){return Se(e)||Tr(e)?(r[t]=e,r[t+n]=0,r):0!==e&&Te(e)<Rr?(r[t]=e*Zr,r[t+n]=-52,r):(r[t]=e,r[t+n]=0,r)}$((function(e){return Xr(e,[0,0],1,0)}),"assign",Xr);var Yr=2220446049250313e-31,qr=2148532223,zr=[0,0],Dr=[0,0];function Jr(e,r){var n,t;return 0===r||0===e||Se(e)||Tr(e)?e:(Xr(e,zr,1,0),e=zr[0],r+=zr[1],r+=function(e){var r=or(e);return(r=(r&Ve)>>>20)-Sr|0}(e),r<Fr?Br(0,e):r>xr?e<0?Fe:Nr:(r<=Ur?(r+=52,t=Yr):t=1,Mr.assign(e,Dr,1,0),n=Dr[0],n&=qr,t*Or(n|=r+Sr<<20,Dr[1])))}function Kr(e){return function(e,r){var n,t;for(n=[],t=0;t<r;t++)n.push(e);return n}(0,e)}var Qr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],en=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],rn=16777216,nn=5.960464477539063e-8,tn=Kr(20),on=Kr(20),an=Kr(20),un=Kr(20);function fn(e,r,n,t,i,o,a,u,f){var c,l,s,p,y,v,g,d,b;for(p=o,b=t[n],d=n,y=0;d>0;y++)l=nn*b|0,un[y]=b-rn*l|0,b=t[d-1]+l,d-=1;if(b=Jr(b,i),b-=8*xe(.125*b),b-=g=0|b,s=0,i>0?(g+=y=un[n-1]>>24-i,un[n-1]-=y<<24-i,s=un[n-1]>>23-i):0===i?s=un[n-1]>>23:b>=.5&&(s=2),s>0){for(g+=1,c=0,y=0;y<n;y++)d=un[y],0===c?0!==d&&(c=1,un[y]=16777216-d):un[y]=16777215-d;if(i>0)switch(i){case 1:un[n-1]&=8388607;break;case 2:un[n-1]&=4194303}2===s&&(b=1-b,0!==c&&(b-=Jr(1,i)))}if(0===b){for(d=0,y=n-1;y>=o;y--)d|=un[y];if(0===d){for(v=1;0===un[o-v];v++);for(y=n+1;y<=n+v;y++){for(f[u+y]=Qr[a+y],l=0,d=0;d<=u;d++)l+=e[d]*f[u+(y-d)];t[y]=l}return fn(e,r,n+=v,t,i,o,a,u,f)}}if(0===b)for(n-=1,i-=24;0===un[n];)n-=1,i-=24;else(b=Jr(b,-i))>=rn?(l=nn*b|0,un[n]=b-rn*l|0,i+=24,un[n+=1]=l):un[n]=0|b;for(l=Jr(1,i),y=n;y>=0;y--)t[y]=l*un[y],l*=nn;for(y=n;y>=0;y--){for(l=0,v=0;v<=p&&v<=n-y;v++)l+=en[v]*t[y+v];an[n-y]=l}for(l=0,y=n;y>=0;y--)l+=an[y];for(r[0]=0===s?l:-l,l=an[0]-l,y=1;y<=n;y++)l+=an[y];return r[1]=0===s?l:-l,7&g}function cn(e,r,n,t){var i,o,a,u,f,c,l;for((o=(n-3)/24|0)<0&&(o=0),u=n-24*(o+1),c=o-(a=t-1),l=a+4,f=0;f<=l;f++)tn[f]=c<0?0:Qr[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=a;c++)i+=e[c]*tn[a+(f-c)];on[f]=i}return fn(e,r,4,on,u,4,o,a,tn)}var ln=Math.round,sn=.6366197723675814,pn=1.5707963267341256,yn=6077100506506192e-26,vn=6077100506303966e-26,gn=20222662487959506e-37,dn=20222662487111665e-37,bn=84784276603689e-45,hn=2047;function wn(e,r,n){var t,i,o,a,u;return o=e-(t=ln(e*sn))*pn,a=t*yn,u=r>>20|0,n[0]=o-a,u-(or(n[0])>>20&hn)>16&&(a=t*gn-((i=o)-(o=i-(a=t*vn))-a),n[0]=o-a,u-(or(n[0])>>20&hn)>49&&(a=t*bn-((i=o)-(o=i-(a=t*dn))-a),n[0]=o-a)),n[1]=o-n[0]-a,t}var mn=0,jn=16777216,An=1.5707963267341256,_n=6077100506506192e-26,En=2*_n,On=3*_n,Nn=4*_n,Sn=598523,xn=1072243195,Un=1073928572,Fn=1074752122,Tn=1074977148,In=1075183036,kn=1075388923,Vn=1075594811,Pn=1094263291,Gn=[0,0,0],Ln=[0,0];function $n(e,r){var n,t,i,o,a,u,f;if((i=or(e)&ke|0)<=xn)return r[0]=e,r[1]=0,0;if(i<=Fn)return(i&dr)===Sn?wn(e,i,r):i<=Un?e>0?(f=e-An,r[0]=f-_n,r[1]=f-r[0]-_n,1):(f=e+An,r[0]=f+_n,r[1]=f-r[0]+_n,-1):e>0?(f=e-2*An,r[0]=f-En,r[1]=f-r[0]-En,2):(f=e+2*An,r[0]=f+En,r[1]=f-r[0]+En,-2);if(i<=Vn)return i<=In?i===Tn?wn(e,i,r):e>0?(f=e-3*An,r[0]=f-On,r[1]=f-r[0]-On,3):(f=e+3*An,r[0]=f+On,r[1]=f-r[0]+On,-3):i===kn?wn(e,i,r):e>0?(f=e-4*An,r[0]=f-Nn,r[1]=f-r[0]-Nn,4):(f=e+4*An,r[0]=f+Nn,r[1]=f-r[0]+Nn,-4);if(i<Pn)return wn(e,i,r);if(i>=Ve)return r[0]=NaN,r[1]=NaN,0;for(n=function(e){return hr[0]=e,wr[br]}(e),f=Or(i-((t=(i>>20)-1046)<<20|0),n),a=0;a<2;a++)Gn[a]=0|f,f=(f-Gn[a])*jn;for(Gn[2]=f,o=3;Gn[o-1]===mn;)o-=1;return u=cn(Gn,Ln,t,o),e<0?(r[0]=-Ln[0],r[1]=-Ln[1],-u):(r[0]=Ln[0],r[1]=Ln[1],u)}var Cn=1072243195,Hn=1045430272,Mn=[0,0],Wn=3.141592653589793,Bn=2.5066282746310007;function Rn(e){return Ue(e/2)}function Zn(e){return Rn(e>0?e-1:e+1)}var Xn=Math.sqrt,Yn=!0===rr?0:1,qn=new Re(1),zn=new Ce(qn.buffer);function Dn(e,r){return qn[0]=e,zn[Yn]=r>>>0,qn[0]}function Jn(e){return 0|e}var Kn=1072693247,Qn=1e300,et=1e-300,rt=!0===rr?1:0,nt=new Re(1),tt=new Ce(nt.buffer);function it(e,r){return nt[0]=e,tt[rt]=r>>>0,nt[0]}var ot=1048575,at=1048576,ut=1072693248,ft=536870912,ct=524288,lt=20,st=9007199254740992,pt=.9617966939259756,yt=.9617967009544373,vt=-7.028461650952758e-9,gt=[1,1.5],dt=[0,.5849624872207642],bt=[0,1.350039202129749e-8],ht=1.4426950408889634,wt=1.4426950216293335,mt=1.9259629911266175e-8,jt=.6931471805599453,At=1048576,_t=1071644672,Et=20,Ot=.6931471824645996,Nt=-1.904654299957768e-9,St=1072693247,xt=1105199104,Ut=1139802112,Ft=1083179008,Tt=1072693248,It=1083231232,kt=3230714880,Vt=31,Pt=1e300,Gt=1e-300,Lt=8008566259537294e-32,$t=[0,0],Ct=[0,0];function Ht(e,r){var n,t,i,o,a,u,f,c,l,s,p,y,v,g;if(Se(e)||Se(r))return NaN;if(Mr.assign(r,$t,1,0),a=$t[0],0===$t[1]){if(0===r)return 1;if(1===r)return e;if(-1===r)return 1/e;if(.5===r)return Xn(e);if(-.5===r)return 1/Xn(e);if(2===r)return e*e;if(3===r)return e*e*e;if(4===r)return(e*=e)*e;if(Tr(r))return function(e,r){return-1===e?(e-e)/(e-e):1===e?1:Te(e)<1==(r===Nr)?0:Nr}(e,r)}if(Mr.assign(e,$t,1,0),o=$t[0],0===$t[1]){if(0===o)return function(e,r){return r===Fe?Nr:r===Nr?0:r>0?Zn(r)?e:0:Zn(r)?Br(Nr,e):Nr}(e,r);if(1===e)return 1;if(-1===e&&Zn(r))return-1;if(Tr(e))return e===Fe?Ht(-0,-r):r<0?0:Nr}if(e<0&&!1===Ue(r))return(e-e)/(e-e);if(i=Te(e),n=o&ke|0,t=a&ke|0,f=a>>>Vt|0,u=(u=o>>>Vt|0)&&Zn(r)?-1:1,t>xt){if(t>Ut)return function(e,r){return(or(e)&ke)<=Kn?r<0?Qn*Qn:et*et:r>0?Qn*Qn:et*et}(e,r);if(n<St)return 1===f?u*Pt*Pt:u*Gt*Gt;if(n>Tt)return 0===f?u*Pt*Pt:u*Gt*Gt;p=function(e,r){var n,t,i,o,a,u,f;return o=(i=r-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),n=(u=i*mt-o*ht)-((t=Dn(t=(a=wt*i)+u,0))-a),e[0]=t,e[1]=n,e}(Ct,i)}else p=function(e,r,n){var t,i,o,a,u,f,c,l,s,p,y,v,g,d,b,h,w,m,j,A,_;return m=0,n<at&&(m-=53,n=or(r*=st)),m+=(n>>lt)-Sr|0,n=(j=n&ot|0)|ut|0,j<=235662?A=0:j<767610?A=1:(A=0,m+=1,n-=at),a=Dn(i=(h=(r=it(r,n))-(c=gt[A]))*(w=1/(r+c)),0),t=(n>>1|ft)+ct,f=it(0,t+=A<<18),b=(o=i*i)*o*(0===(_=o)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=Dn(f=3+(o=a*a)+(b+=(u=w*(h-a*f-a*(r-(f-c))))*(a+i)),0),s=Dn(s=(h=a*f)+(w=u*f+(b-(f-3-o))*i),0),p=yt*s,g=(y=vt*s+(w-(s-h))*pt+bt[A])-((v=Dn(v=p+y+(l=dt[A])+(d=m),0))-d-l-p),e[0]=v,e[1]=g,e}(Ct,i,n);if(y=(s=(r-(c=Dn(r,0)))*p[0]+r*p[1])+(l=c*p[0]),Mr.assign(y,$t,1,0),v=Jn($t[0]),g=Jn($t[1]),v>=Ft){if(0!=(v-Ft|g))return u*Pt*Pt;if(s+Lt>y-l)return u*Pt*Pt}else if((v&ke)>=It){if(0!=(v-kt|g))return u*Gt*Gt;if(s<=y-l)return u*Gt*Gt}return y=function(e,r,n){var t,i,o,a,u,f,c,l,s,p;return s=((l=e&ke|0)>>Et)-Sr|0,c=0,l>_t&&(i=it(0,((c=e+(At>>s+1)>>>0)&~(dr>>(s=((c&ke)>>Et)-Sr|0)))>>>0),c=(c&dr|At)>>Et-s>>>0,e<0&&(c=-c),r-=i),e=Jn(e=or(f=1-((f=(o=(i=Dn(i=n+r,0))*Ot)+(a=(n-(i-r))*jt+i*Nt))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=a-(f-o))+f*u)-f))),(e+=c<<Et>>>0)>>Et<=0?Jr(f,c):it(f,e)}(v,l,s),u*y}var Mt=Math.ceil;function Wt(e){return e<0?Mt(e):xe(e)}var Bt=.6931471803691238,Rt=1.9082149292705877e-10,Zt=1.4426950408889634,Xt=709.782712893384,Yt=-745.1332191019411,qt=1/(1<<28),zt=-qt;function Dt(e){var r;return Se(e)||e===Nr?e:e===Fe?0:e>Xt?Nr:e<Yt?0:e>zt&&e<qt?1+e:function(e,r,n){var t,i,o,a;return Jr(1-(r-(t=e-r)*(o=t-(i=t*t)*(0===(a=i)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-o)-e),n)}(e-(r=Wt(e<0?Zt*e-.5:Zt*e+.5))*Bt,r*Rt,r)}var Jt=143.01608;function Kt(e){var r,n,t;return r=1+(r=1/e)*function(e){return 0===e?.08333333333334822:.08333333333334822+e*(.0034722222160545866+e*(e*(.0007873113957930937*e-.00022954996161337813)-.0026813261780578124))}(r),n=Dt(e),n=e>Jt?(t=Ht(e,.5*e-.25))*(t/n):Ht(e,e-.5)/n,Bn*n*r}var Qt=.5772156649015329;function ei(e,r){return r/((1+Qt*e)*e)}function ri(e){var r,n,t,i;if(Ue(e)&&e<0||e===Fe||Se(e))return NaN;if(0===e)return function(e){return 0===e&&1/e===Fe}(e)?Fe:Nr;if(e>171.61447887182297)return Nr;if(e<-170.5674972726612)return 0;if((n=Te(e))>33)return e>=0?Kt(e):(r=0==(1&(t=xe(n)))?-1:1,(i=n-t)>.5&&(i=n-(t+=1)),i=n*function(e){var r;if(r=or(e),(r&=ke)<=Cn)return r<Hn?e:yr(e,0);if(r>=Ve)return NaN;switch(3&$n(e,Mn)){case 0:return yr(Mn[0],Mn[1]);case 1:return ar(Mn[0],Mn[1]);case 2:return-yr(Mn[0],Mn[1]);default:return-ar(Mn[0],Mn[1])}}(Wn*i),r*Wn/(Te(i)*Kt(n)));for(i=1;e>=3;)i*=e-=1;for(;e<0;){if(e>-1e-9)return ei(e,i);i/=e,e+=1}for(;e<2;){if(e<1e-9)return ei(e,i);i/=e,e+=1}return 2===e?i:i*function(e){var r,n;return 0===e?1:((e<0?-e:e)<=1?(r=1+e*(.4942148268014971+e*(.20744822764843598+e*(.04763678004571372+e*(.010421379756176158+e*(.0011913514700658638+e*(.00016011952247675185+0*e)))))),n=1+e*(.0714304917030273+e*(e*(.035823639860549865+e*(.011813978522206043+e*(e*(.0005396055804933034+-23158187332412014e-21*e)-.004456419138517973)))-.23459179571824335))):(r=0+(e=1/e)*(.00016011952247675185+e*(.0011913514700658638+e*(.010421379756176158+e*(.04763678004571372+e*(.20744822764843598+e*(.4942148268014971+1*e)))))),n=e*(.0005396055804933034+e*(e*(.011813978522206043+e*(.035823639860549865+e*(e*(.0714304917030273+1*e)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),r/n)}(e-=2)}var ni=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,0x1b02b9306890000,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8.841761993739702e30,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,1.0333147966386145e40,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,1.3868311854568984e80,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8.247650592082472e90,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,1.1978571669969892e100,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5.797126020747368e120,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,2.4227095383672734e130,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1.352001527678403e140,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,1.1462805637347084e170,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,1.7629525510902446e180,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3.393108684451898e190,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8.094298525273444e200,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,2.6904727073180504e230,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,3.80892263763057e260,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1.853271869493735e280,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1.503616514864999e300,25260757449731984e286,4269068009004705e289,7257415615307999e291],ti=170;function ii(e){return Se(e)?NaN:Ue(e)?e<0?NaN:e<=ti?ni[e]:Nr:ri(e+1)}return function(e){return Ne(e,ii)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).iterFactorial=r();
//# sourceMappingURL=browser.js.map
