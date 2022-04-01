// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(n){var t=Object.getOwnPropertyDescriptor(r,n);Object.defineProperty(e,n,t.get?t:{enumerable:!0,get:function(){return r[n]}})})),e}var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return e({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,f=o.__defineSetter__,a=o.__lookupGetter__,c=o.__lookupSetter__;var v=function(r,e,n){var t,v,l,y;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===u.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((v="value"in n)&&(a.call(r,e)||c.call(r,e)?(t=r.__proto__,r.__proto__=o,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),l="get"in n,y="set"in n,v&&(l||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&i&&i.call(r,e,n.get),y&&f&&f.call(r,e,n.set),r},l=t,y=v,p=n()?l:y;var b=function(r,e,n){p(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})},s=b,w=/./;var m=function(r){return"boolean"==typeof r};var d=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var j=function(){return d&&"symbol"==typeof Symbol.toStringTag},_=Object.prototype.toString,h=_;var A=function(r){return h.call(r)},g=Object.prototype.hasOwnProperty;var O=function(r,e){return null!=r&&g.call(r,e)},N="function"==typeof Symbol?Symbol.toStringTag:"",E=O,U=N,S=_;var P=A,F=function(r){var e,n,t;if(null==r)return S.call(r);n=r[U],e=E(r,U);try{r[U]=void 0}catch(e){return S.call(r)}return t=S.call(r),e?r[U]=n:delete r[U],t},I=j()?F:P,T=Boolean.prototype.toString;var G=I,M=function(r){try{return T.call(r),!0}catch(r){return!1}},V=j();var x=function(r){return"object"==typeof r&&(r instanceof Boolean||(V?M(r):"[object Boolean]"===G(r)))},H=m,B=x;var L=s,k=function(r){return H(r)||B(r)},W=x;L(k,"isPrimitive",m),L(k,"isObject",W);var C="object"==typeof self?self:null,R="object"==typeof window?window:null,X=k.isPrimitive,Y=function(){return new Function("return this;")()},q=C,z=R,D=r(Object.freeze({__proto__:null}));var J=function(r){if(arguments.length){if(!X(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Y()}if(q)return q;if(z)return z;if(D)return D;throw new Error("unexpected error. Unable to resolve global object.")},K=J(),Q=K.document&&K.document.childNodes,Z=Int8Array,$=w,rr=Q,er=Z;var nr=function(){return"function"==typeof $||"object"==typeof er||"function"==typeof rr};var tr=function(){return/^\s*function\s*([^(]*)/i},or=tr;s(or,"REGEXP",tr());var ur=or,ir=I;var fr=Array.isArray?Array.isArray:function(r){return"[object Array]"===ir(r)},ar=fr;var cr=function(r){return null!==r&&"object"==typeof r};s(cr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var n,t;if(!ar(e))return!1;if(0===(n=e.length))return!1;for(t=0;t<n;t++)if(!1===r(e[t]))return!1;return!0}}(cr));var vr=cr;var lr=I,yr=ur.REGEXP,pr=function(r){return vr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var br=function(r){var e,n,t;if(("Object"===(n=lr(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(t=r.constructor).name)return t.name;if(e=yr.exec(t.toString()))return e[1]}return pr(r)?"Buffer":n},sr=br;var wr=br;var mr=function(r){var e;return null===r?"null":"object"===(e=typeof r)?sr(r).toLowerCase():e},dr=function(r){return wr(r).toLowerCase()},jr=nr()?dr:mr;var _r=function(r){return"function"===jr(r)},hr=_r;var Ar=function(r){var e=typeof r;return null!==r&&("object"===e||"function"===e)&&hr(r.next)};var gr=function(r){return"number"==typeof r},Or=Number,Nr=Or.prototype.toString;var Er=I,Ur=Or,Sr=function(r){try{return Nr.call(r),!0}catch(r){return!1}},Pr=j();var Fr=function(r){return"object"==typeof r&&(r instanceof Ur||(Pr?Sr(r):"[object Number]"===Er(r)))},Ir=gr,Tr=Fr;var Gr=s,Mr=function(r){return Ir(r)||Tr(r)},Vr=Fr;Gr(Mr,"isPrimitive",gr),Gr(Mr,"isObject",Vr);var xr=Mr,Hr=O;var Br=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&Hr(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}()?Symbol.iterator:null,Lr=fr;var kr=function(r){return"object"==typeof r&&null!==r&&!Lr(r)},Wr=Object.getPrototypeOf;var Cr=function(r){return r.__proto__},Rr=I,Xr=Cr;var Yr=function(r){var e=Xr(r);return e||null===e?e:"[object Function]"===Rr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},qr=Wr,zr=Yr,Dr=_r(Object.getPrototypeOf)?qr:zr;var Jr=kr,Kr=_r,Qr=function(r){return null==r?null:(r=Object(r),Dr(r))},Zr=O,$r=I,re=Object.prototype;var ee=function(r){var e;return!!Jr(r)&&(!(e=Qr(r))||!Zr(r,"constructor")&&Zr(e,"constructor")&&Kr(e.constructor)&&"[object Function]"===$r(e.constructor)&&Zr(e,"isPrototypeOf")&&Kr(e.isPrototypeOf)&&(e===re||function(r){var e;for(e in r)if(!Zr(r,e))return!1;return!0}(r)))},ne=ee,te=O;var oe=s,ue=_r,ie=Ar,fe=xr.isPrimitive,ae=Br,ce=function(r,e){return ne(e)?(te(e,"invalid")&&(r.invalid=e.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.")};var ve=function r(e,n,t){var o,u,i,f;if(!ie(e))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+e+"`.");if(!ue(n))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");if(o={invalid:NaN},arguments.length>2&&(i=ce(o,t)))throw i;return oe(u={},"next",a),oe(u,"return",c),ae&&ue(e[ae])&&oe(u,ae,v),u;function a(){var r;return f?{done:!0}:(r=e.next()).done?(f=!0,r):{value:fe(r.value)?n(r.value):o.invalid,done:!1}}function c(r){return f=!0,arguments.length?{value:r,done:!0}:{done:!0}}function v(){return r(e[ae](),n,o)}},le=ve;var ye=function(r){return r!=r},pe=Math.floor,be=pe;var se=function(r){return be(r)===r},we=Or.NEGATIVE_INFINITY,me=we;var de=function(r){return 0===r&&1/r===me};var je=function(r){return Math.abs(r)},_e=I,he="function"==typeof Uint32Array;var Ae="function"==typeof Uint32Array?Uint32Array:null,ge=function(r){return he&&r instanceof Uint32Array||"[object Uint32Array]"===_e(r)},Oe=Ae;var Ne=function(){var r,e;if("function"!=typeof Oe)return!1;try{e=new Oe(e=[1,3.14,-3.14,4294967296,4294967297]),r=ge(e)&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r};var Ee="function"==typeof Uint32Array?Uint32Array:void 0,Ue=function(){throw new Error("not implemented")},Se=Ne()?Ee:Ue,Pe=I,Fe="function"==typeof Float64Array;var Ie="function"==typeof Float64Array?Float64Array:null,Te=function(r){return Fe&&r instanceof Float64Array||"[object Float64Array]"===Pe(r)},Ge=Ie;var Me=function(){var r,e;if("function"!=typeof Ge)return!1;try{e=new Ge([1,3.14,-3.14,NaN]),r=Te(e)&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r};var Ve="function"==typeof Float64Array?Float64Array:void 0,xe=function(){throw new Error("not implemented")},He=Me()?Ve:xe,Be=I,Le="function"==typeof Uint8Array;var ke="function"==typeof Uint8Array?Uint8Array:null,We=function(r){return Le&&r instanceof Uint8Array||"[object Uint8Array]"===Be(r)},Ce=ke;var Re=function(){var r,e;if("function"!=typeof Ce)return!1;try{e=new Ce(e=[1,3.14,-3.14,256,257]),r=We(e)&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r};var Xe="function"==typeof Uint8Array?Uint8Array:void 0,Ye=function(){throw new Error("not implemented")},qe=Re()?Xe:Ye,ze=I,De="function"==typeof Uint16Array;var Je="function"==typeof Uint16Array?Uint16Array:null,Ke=function(r){return De&&r instanceof Uint16Array||"[object Uint16Array]"===ze(r)},Qe=Je;var Ze=function(){var r,e;if("function"!=typeof Qe)return!1;try{e=new Qe(e=[1,3.14,-3.14,65536,65537]),r=Ke(e)&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r};var $e,rn="function"==typeof Uint16Array?Uint16Array:void 0,en=function(){throw new Error("not implemented")},nn={uint16:Ze()?rn:en,uint8:qe};($e=new nn.uint16(1))[0]=4660;var tn=52===new nn.uint8($e.buffer)[0],on=Se,un=!0===tn?1:0,fn=new He(1),an=new on(fn.buffer);var cn=function(r){return fn[0]=r,an[un]};var vn=function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)},ln=function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7};var yn=function(r,e){var n,t,o,u;return o=(u=r*r)*u,t=u*vn(u),t+=o*o*ln(u),(o=1-(n=.5*u))+(1-o-n+(u*t-r*e))},pn=-.16666666666666632;var bn=function(r,e){var n,t,o;return n=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),t=o*r,0===e?r+t*(pn+o*n):r-(o*(.5*e-t*n)-e-t*pn)},sn=Se,wn=!0===tn?0:1,mn=new He(1),dn=new sn(mn.buffer);var jn,_n,hn=function(r){return mn[0]=r,dn[wn]};!0===tn?(jn=1,_n=0):(jn=0,_n=1);var An=Se,gn={HIGH:jn,LOW:_n},On=new He(1),Nn=new An(On.buffer),En=gn.HIGH,Un=gn.LOW;var Sn=function(r,e){return Nn[En]=r,Nn[Un]=e,On[0]},Pn=Sn,Fn=Number.POSITIVE_INFINITY,In=Fn,Tn=we;var Gn,Mn,Vn=function(r){return r===In||r===Tn};!0===tn?(Gn=1,Mn=0):(Gn=0,Mn=1);var xn=Se,Hn={HIGH:Gn,LOW:Mn},Bn=new He(1),Ln=new xn(Bn.buffer),kn=Hn.HIGH,Wn=Hn.LOW;var Cn=function(r,e){return Bn[0]=e,r[0]=Ln[kn],r[1]=Ln[Wn],r};var Rn=function(r,e){return 1===arguments.length?Cn([0,0],r):Cn(r,e)},Xn=Rn,Yn=cn,qn=Pn,zn=[0,0];var Dn=function(r,e){var n,t;return Xn(zn,r),n=zn[0],n&=2147483647,t=Yn(e),qn(n|=t&=2147483648,zn[1])},Jn=Vn,Kn=ye,Qn=je;var Zn=function(r,e){return Kn(e)||Jn(e)?(r[0]=e,r[1]=0,r):0!==e&&Qn(e)<22250738585072014e-324?(r[0]=4503599627370496*e,r[1]=-52,r):(r[0]=e,r[1]=0,r)};var $n=cn;var rt=function(r){var e=$n(r);return(e=(2146435072&e)>>>20)-1023|0},et=Fn,nt=we,tt=ye,ot=Vn,ut=Dn,it=function(r,e){return 1===arguments.length?Zn([0,0],r):Zn(r,e)},ft=rt,at=Rn,ct=Pn,vt=[0,0],lt=[0,0];var yt=function(r,e){var n,t;return 0===e||0===r||tt(r)||ot(r)?r:(it(vt,r),e+=vt[1],(e+=ft(r=vt[0]))<-1074?ut(0,r):e>1023?r<0?nt:et:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,at(lt,r),n=lt[0],n&=2148532223,t*ct(n|=e+1023<<20,lt[1])))},pt=yt;var bt=function(r,e){var n,t;for(n=[],t=0;t<e;t++)n.push(r);return n};var st=pe,wt=pt,mt=function(r){return bt(0,r)},dt=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],jt=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],_t=5.960464477539063e-8,ht=mt(20),At=mt(20),gt=mt(20),Ot=mt(20);function Nt(r,e,n,t,o,u,i,f,a){var c,v,l,y,p,b,s,w,m;for(y=u,m=t[n],w=n,p=0;w>0;p++)v=_t*m|0,Ot[p]=m-16777216*v|0,m=t[w-1]+v,w-=1;if(m=wt(m,o),m-=8*st(.125*m),m-=s=0|m,l=0,o>0?(s+=p=Ot[n-1]>>24-o,Ot[n-1]-=p<<24-o,l=Ot[n-1]>>23-o):0===o?l=Ot[n-1]>>23:m>=.5&&(l=2),l>0){for(s+=1,c=0,p=0;p<n;p++)w=Ot[p],0===c?0!==w&&(c=1,Ot[p]=16777216-w):Ot[p]=16777215-w;if(o>0)switch(o){case 1:Ot[n-1]&=8388607;break;case 2:Ot[n-1]&=4194303}2===l&&(m=1-m,0!==c&&(m-=wt(1,o)))}if(0===m){for(w=0,p=n-1;p>=u;p--)w|=Ot[p];if(0===w){for(b=1;0===Ot[u-b];b++);for(p=n+1;p<=n+b;p++){for(a[f+p]=dt[i+p],v=0,w=0;w<=f;w++)v+=r[w]*a[f+(p-w)];t[p]=v}return Nt(r,e,n+=b,t,o,u,i,f,a)}}if(0===m)for(n-=1,o-=24;0===Ot[n];)n-=1,o-=24;else(m=wt(m,-o))>=16777216?(v=_t*m|0,Ot[n]=m-16777216*v|0,o+=24,Ot[n+=1]=v):Ot[n]=0|m;for(v=wt(1,o),p=n;p>=0;p--)t[p]=v*Ot[p],v*=_t;for(p=n;p>=0;p--){for(v=0,b=0;b<=y&&b<=n-p;b++)v+=jt[b]*t[p+b];gt[n-p]=v}for(v=0,p=n;p>=0;p--)v+=gt[p];for(e[0]=0===l?v:-v,v=gt[0]-v,p=1;p<=n;p++)v+=gt[p];return e[1]=0===l?v:-v,7&s}var Et=function(r,e,n,t){var o,u,i,f,a,c,v;for(4,(u=(n-3)/24|0)<0&&(u=0),f=n-24*(u+1),c=u-(i=t-1),v=i+4,a=0;a<=v;a++)ht[a]=c<0?0:dt[c],c+=1;for(a=0;a<=4;a++){for(o=0,c=0;c<=i;c++)o+=r[c]*ht[i+(a-c)];At[a]=o}return 4,Nt(r,e,4,At,f,4,u,i,ht)},Ut=Math.round,St=cn;var Pt=cn,Ft=hn,It=Pn,Tt=Et,Gt=function(r,e,n){var t,o,u,i,f;return u=r-1.5707963267341256*(t=Ut(.6366197723675814*r)),i=6077100506506192e-26*t,f=e>>20|0,n[0]=u-i,f-(St(n[0])>>20&2047)>16&&(i=20222662487959506e-37*t-((o=u)-(u=o-(i=6077100506303966e-26*t))-i),n[0]=u-i,f-(St(n[0])>>20&2047)>49&&(i=84784276603689e-45*t-((o=u)-(u=o-(i=20222662487111665e-37*t))-i),n[0]=u-i)),n[1]=u-n[0]-i,t},Mt=1.5707963267341256,Vt=6077100506506192e-26,xt=2*Vt,Ht=4*Vt,Bt=[0,0,0],Lt=[0,0];var kt=function(r,e){var n,t,o,u,i,f,a;if((o=2147483647&Pt(r)|0)<=1072243195)return e[0]=r,e[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Gt(r,o,e):o<=1073928572?r>0?(a=r-Mt,e[0]=a-Vt,e[1]=a-e[0]-Vt,1):(a=r+Mt,e[0]=a+Vt,e[1]=a-e[0]+Vt,-1):r>0?(a=r-2*Mt,e[0]=a-xt,e[1]=a-e[0]-xt,2):(a=r+2*Mt,e[0]=a+xt,e[1]=a-e[0]+xt,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Gt(r,o,e):r>0?(a=r-3*Mt,e[0]=a-1.8231301519518578e-10,e[1]=a-e[0]-1.8231301519518578e-10,3):(a=r+3*Mt,e[0]=a+1.8231301519518578e-10,e[1]=a-e[0]+1.8231301519518578e-10,-3):1075388923===o?Gt(r,o,e):r>0?(a=r-4*Mt,e[0]=a-Ht,e[1]=a-e[0]-Ht,4):(a=r+4*Mt,e[0]=a+Ht,e[1]=a-e[0]+Ht,-4);if(o<1094263291)return Gt(r,o,e);if(o>=2146435072)return e[0]=NaN,e[1]=NaN,0;for(n=Ft(r),a=It(o-((t=(o>>20)-1046)<<20|0),n),i=0;i<2;i++)Bt[i]=0|a,a=16777216*(a-Bt[i]);for(Bt[2]=a,u=3;0===Bt[u-1];)u-=1;return f=Tt(Bt,Lt,t,u),r<0?(e[0]=-Lt[0],e[1]=-Lt[1],-f):(e[0]=Lt[0],e[1]=Lt[1],f)},Wt=cn,Ct=yn,Rt=bn,Xt=kt,Yt=[0,0];var qt=function(r){var e;if(e=Wt(r),(e&=2147483647)<=1072243195)return e<1045430272?r:Rt(r,0);if(e>=2146435072)return NaN;switch(3&Xt(r,Yt)){case 0:return Rt(Yt[0],Yt[1]);case 1:return Ct(Yt[0],Yt[1]);case 2:return-Rt(Yt[0],Yt[1]);default:return-Ct(Yt[0],Yt[1])}},zt=se;var Dt=function(r){return zt(r/2)};var Jt=function(r){return Dt(r>0?r-1:r+1)},Kt=Math.sqrt,Qt=Se,Zt=!0===tn?0:1,$t=new He(1),ro=new Qt($t.buffer);var eo=function(r,e){return $t[0]=r,ro[Zt]=e>>>0,$t[0]},no=eo;var to=function(r){return 0|r},oo=Jt,uo=Dn,io=we,fo=Fn;var ao=function(r,e){return e===io?fo:e===fo?0:e>0?oo(e)?r:0:oo(e)?uo(fo,r):fo},co=cn;var vo=function(r,e){return(2147483647&co(r))<=1072693247?e<0?1/0:0:e>0?1/0:0},lo=je,yo=Fn;var po=function(r,e){return-1===r?(r-r)/(r-r):1===r?1:lo(r)<1==(e===yo)?0:yo},bo=Se,so=!0===tn?1:0,wo=new He(1),mo=new bo(wo.buffer);var jo=function(r,e){return wo[0]=r,mo[so]=e>>>0,wo[0]};var _o=cn,ho=no,Ao=jo,go=function(r){return 0===r?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+.20697501780033842*r))))},Oo=[1,1.5],No=[0,.5849624872207642],Eo=[0,1.350039202129749e-8];var Uo=no,So=function(r){return 0===r?.5:.5+r*(.25*r-.3333333333333333)};var Po=cn,Fo=jo,Io=no,To=to,Go=pt,Mo=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var Vo=ye,xo=Jt,Ho=Vn,Bo=se,Lo=Kt,ko=je,Wo=Rn,Co=no,Ro=to,Xo=we,Yo=Fn,qo=ao,zo=vo,Do=po,Jo=function(r,e,n){var t,o,u,i,f,a,c,v,l,y,p,b,s,w,m,d,j,_,h,A;return _=0,n<1048576&&(_-=53,n=_o(e*=9007199254740992)),_+=(n>>20)-1023|0,n=1072693248|(h=1048575&n|0),h<=235662?A=0:h<767610?A=1:(A=0,_+=1,n-=1048576),t=524288+(n>>1|536870912),f=(j=1/((e=Ao(e,n))+(c=Oo[A])))*((d=e-c)-(i=ho(o=d*j,0))*(a=Ao(0,t+=A<<18))-i*(e-(a-c))),m=(u=o*o)*u*go(u),a=ho(a=3+(u=i*i)+(m+=f*(i+o)),0),s=(p=-7.028461650952758e-9*(l=ho(l=(d=i*a)+(j=f*a+(m-(a-3-u))*o),0))+.9617966939259756*(j-(l-d))+Eo[A])-((b=ho(b=(y=.9617967009544373*l)+p+(v=No[A])+(w=_),0))-w-v-y),r[0]=b,r[1]=s,r},Ko=function(r,e){var n,t,o,u,i;return n=(i=1.9259629911266175e-8*(o=e-1)-1.4426950408889634*(o*o*So(o)))-((t=Uo(t=(u=1.4426950216293335*o)+i,0))-u),r[0]=t,r[1]=n,r},Qo=function(r,e,n){var t,o,u,i,f,a,c,v,l,y;return y=((l=2147483647&r|0)>>20)-1023|0,v=0,l>1071644672&&(t=((v=r+(1048576>>y+1)>>>0)&~(1048575>>(y=((2147483647&v)>>20)-1023|0)))>>>0,v=(1048575&v|1048576)>>20-y>>>0,r<0&&(v=-v),e-=u=Fo(0,t)),a=(f=.6931471805599453*(n-((u=Io(u=n+e,0))-e))+-1.904654299957768e-9*u)-((c=(i=.6931471824645996*u)+f)-i),o=c-(u=c*c)*Mo(u),r=Po(c=1-(c*o/(o-2)-(a+c*a)-c)),r=To(r),c=(r+=v<<20>>>0)>>20<=0?Go(c,v):Fo(c,r)},Zo=1e300,$o=1e-300,ru=[0,0],eu=[0,0];var nu=function r(e,n){var t,o,u,i,f,a,c,v,l,y,p,b,s,w;if(Vo(e)||Vo(n))return NaN;if(Wo(ru,n),f=ru[0],0===ru[1]){if(0===n)return 1;if(1===n)return e;if(-1===n)return 1/e;if(.5===n)return Lo(e);if(-.5===n)return 1/Lo(e);if(2===n)return e*e;if(3===n)return e*e*e;if(4===n)return(e*=e)*e;if(Ho(n))return Do(e,n)}if(Wo(ru,e),i=ru[0],0===ru[1]){if(0===i)return qo(e,n);if(1===e)return 1;if(-1===e&&xo(n))return-1;if(Ho(e))return e===Xo?r(-0,-n):n<0?0:Yo}if(e<0&&!1===Bo(n))return(e-e)/(e-e);if(u=ko(e),t=2147483647&i|0,o=2147483647&f|0,c=f>>>31|0,a=(a=i>>>31|0)&&xo(n)?-1:1,o>1105199104){if(o>1139802112)return zo(e,n);if(t<1072693247)return 1===c?a*Zo*Zo:a*$o*$o;if(t>1072693248)return 0===c?a*Zo*Zo:a*$o*$o;p=Ko(eu,u)}else p=Jo(eu,u,t);if(y=(n-(v=Co(n,0)))*p[0]+n*p[1],l=v*p[0],Wo(ru,b=y+l),s=Ro(ru[0]),w=Ro(ru[1]),s>=1083179008){if(0!=(s-1083179008|w))return a*Zo*Zo;if(y+8008566259537294e-32>b-l)return a*Zo*Zo}else if((2147483647&s)>=1083231232){if(0!=(s-3230714880|w))return a*$o*$o;if(y<=b-l)return a*$o*$o}return a*(b=Qo(s,l,y))},tu=nu,ou=Math.ceil,uu=pe,iu=ou;var fu=pt,au=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var cu=ye,vu=function(r){return r<0?iu(r):uu(r)},lu=we,yu=Fn,pu=function(r,e,n){var t,o,u;return u=(t=r-e)-(o=t*t)*au(o),fu(1-(e-t*u/(2-u)-r),n)};var bu=tu,su=function(r){var e;return cu(r)||r===yu?r:r===lu?0:r>709.782712893384?yu:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:(e=vu(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5),pu(r-.6931471803691238*e,1.9082149292705877e-10*e,e))},wu=function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))};var mu=ye,du=se,ju=de,_u=je,hu=pe,Au=qt,gu=Fn,Ou=we,Nu=3.141592653589793,Eu=function(r){var e,n,t;return e=1+(e=1/r)*wu(e),n=su(r),2.5066282746310007*(n=r>143.01608?(t=bu(r,.5*r-.25))*(t/n):bu(r,r-.5)/n)*e},Uu=function(r,e){return e/((1+.5772156649015329*r)*r)},Su=function(r){var e,n;return 0===r?1:((r<0?-r:r)<=1?(e=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),n=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(e=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),n=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),e/n)};var Pu=ye,Fu=se,Iu=function(r){var e,n,t,o;if(du(r)&&r<0||r===Ou||mu(r))return NaN;if(0===r)return ju(r)?Ou:gu;if(r>171.61447887182297)return gu;if(r<-170.5674972726612)return 0;if((n=_u(r))>33)return r>=0?Eu(r):(e=0==(1&(t=hu(n)))?-1:1,(o=n-t)>.5&&(o=n-(t+=1)),o=n*Au(Nu*o),e*Nu/(_u(o)*Eu(n)));for(o=1;r>=3;)o*=r-=1;for(;r<0;){if(r>-1e-9)return Uu(r,o);o/=r,r+=1}for(;r<2;){if(r<1e-9)return Uu(r,o);o/=r,r+=1}return 2===r?o:o*Su(r-=2)},Tu=Fn,Gu=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,0x1b02b9306890000,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8.841761993739702e30,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,1.0333147966386145e40,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,1.3868311854568984e80,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8.247650592082472e90,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,1.1978571669969892e100,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5.797126020747368e120,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,2.4227095383672734e130,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1.352001527678403e140,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,1.1462805637347084e170,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,1.7629525510902446e180,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3.393108684451898e190,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8.094298525273444e200,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,2.6904727073180504e230,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,3.80892263763057e260,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1.853271869493735e280,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1.503616514864999e300,25260757449731984e286,4269068009004705e289,7257415615307999e291];var Mu=le,Vu=function(r){return Pu(r)?NaN:Fu(r)?r<0?NaN:r<=170?Gu[r]:Tu:Iu(r+1)};var xu=function(r){return Mu(r,Vu)},Hu=xu;export{Hu as default};
//# sourceMappingURL=mod.js.map
