(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const js="152",kl=0,ca=1,Wl=2,Jo=1,Xl=2,bn=3,Ln=0,Xt=1,pn=2,Hn=0,Ni=1,ha=2,ua=3,da=4,ql=5,Pi=100,jl=101,Yl=102,fa=103,pa=104,Kl=200,Zl=201,$l=202,Jl=203,Qo=204,el=205,Ql=206,ec=207,tc=208,nc=209,ic=210,rc=0,sc=1,ac=2,Ns=3,oc=4,lc=5,cc=6,hc=7,Ys=0,uc=1,dc=2,Rn=0,fc=1,pc=2,mc=3,vc=4,gc=5,tl=300,Bi=301,Oi=302,Ds=303,Us=304,Yr=306,zi=1e3,en=1001,qr=1002,At=1003,Fs=1004,Wr=1005,kt=1006,nl=1007,oi=1008,li=1009,_c=1010,xc=1011,il=1012,yc=1013,Jn=1014,Vn=1015,cr=1016,Mc=1017,Sc=1018,Di=1020,Ec=1021,tn=1023,Tc=1024,wc=1025,ti=1026,Vi=1027,bc=1028,Ac=1029,Rc=1030,Cc=1031,Lc=1033,es=33776,ts=33777,ns=33778,is=33779,ma=35840,va=35841,ga=35842,_a=35843,Pc=36196,xa=37492,ya=37496,Ma=37808,Sa=37809,Ea=37810,Ta=37811,wa=37812,ba=37813,Aa=37814,Ra=37815,Ca=37816,La=37817,Pa=37818,Ia=37819,Na=37820,Da=37821,rs=36492,Ic=36283,Ua=36284,Fa=36285,Ba=36286,hr=2300,Hi=2301,ss=2302,Oa=2400,za=2401,Va=2402,Nc=2500,Dc=0,rl=1,Bs=2,sl=3e3,ni=3001,Uc=3200,Fc=3201,Ks=0,Bc=1,ii="",Ke="srgb",vn="srgb-linear",al="display-p3",as=7680,Oc=519,Os=35044,Ha="300 es",zs=1035;class Xi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const i=r.indexOf(t);i!==-1&&r.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let i=0,s=r.length;i<s;i++)r[i].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ga=1234567;const sr=Math.PI/180,Gi=180/Math.PI;function hn(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dt[a&255]+Dt[a>>8&255]+Dt[a>>16&255]+Dt[a>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]).toLowerCase()}function Ft(a,e,t){return Math.max(e,Math.min(t,a))}function Zs(a,e){return(a%e+e)%e}function zc(a,e,t,n,r){return n+(a-e)*(r-n)/(t-e)}function Vc(a,e,t){return a!==e?(t-a)/(e-a):0}function ar(a,e,t){return(1-t)*a+t*e}function Hc(a,e,t,n){return ar(a,e,1-Math.exp(-t*n))}function Gc(a,e=1){return e-Math.abs(Zs(a,e*2)-e)}function kc(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function Wc(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function Xc(a,e){return a+Math.floor(Math.random()*(e-a+1))}function qc(a,e){return a+Math.random()*(e-a)}function jc(a){return a*(.5-Math.random())}function Yc(a){a!==void 0&&(Ga=a);let e=Ga+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Kc(a){return a*sr}function Zc(a){return a*Gi}function Vs(a){return(a&a-1)===0&&a!==0}function ol(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function ll(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function $c(a,e,t,n,r){const i=Math.cos,s=Math.sin,o=i(t/2),l=s(t/2),h=i((e+n)/2),u=s((e+n)/2),c=i((e-n)/2),d=s((e-n)/2),f=i((n-e)/2),m=s((n-e)/2);switch(r){case"XYX":a.set(o*u,l*c,l*d,o*h);break;case"YZY":a.set(l*d,o*u,l*c,o*h);break;case"ZXZ":a.set(l*c,l*d,o*u,o*h);break;case"XZX":a.set(o*u,l*m,l*f,o*h);break;case"YXY":a.set(l*f,o*u,l*m,o*h);break;case"ZYZ":a.set(l*m,l*f,o*u,o*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function An(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function mt(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const Jc={DEG2RAD:sr,RAD2DEG:Gi,generateUUID:hn,clamp:Ft,euclideanModulo:Zs,mapLinear:zc,inverseLerp:Vc,lerp:ar,damp:Hc,pingpong:Gc,smoothstep:kc,smootherstep:Wc,randInt:Xc,randFloat:qc,randFloatSpread:jc,seededRandom:Yc,degToRad:Kc,radToDeg:Zc,isPowerOfTwo:Vs,ceilPowerOfTwo:ol,floorPowerOfTwo:ll,setQuaternionFromProperEuler:$c,normalize:mt,denormalize:An};class dt{constructor(e=0,t=0){dt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,s=this.y-e.y;return this.x=i*n-s*r+e.x,this.y=i*r+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,r,i,s,o,l,h){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=i,u[5]=l,u[6]=n,u[7]=s,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,i=this.elements,s=n[0],o=n[3],l=n[6],h=n[1],u=n[4],c=n[7],d=n[2],f=n[5],m=n[8],g=r[0],v=r[3],p=r[6],_=r[1],y=r[4],x=r[7],S=r[2],C=r[5],B=r[8];return i[0]=s*g+o*_+l*S,i[3]=s*v+o*y+l*C,i[6]=s*p+o*x+l*B,i[1]=h*g+u*_+c*S,i[4]=h*v+u*y+c*C,i[7]=h*p+u*x+c*B,i[2]=d*g+f*_+m*S,i[5]=d*v+f*y+m*C,i[8]=d*p+f*x+m*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],s=e[4],o=e[5],l=e[6],h=e[7],u=e[8];return t*s*u-t*o*h-n*i*u+n*o*l+r*i*h-r*s*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],s=e[4],o=e[5],l=e[6],h=e[7],u=e[8],c=u*s-o*h,d=o*l-u*i,f=h*i-s*l,m=t*c+n*d+r*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/m;return e[0]=c*g,e[1]=(r*h-u*n)*g,e[2]=(o*n-r*s)*g,e[3]=d*g,e[4]=(u*t-r*l)*g,e[5]=(r*i-o*t)*g,e[6]=f*g,e[7]=(n*l-h*t)*g,e[8]=(s*t-n*i)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,s,o){const l=Math.cos(i),h=Math.sin(i);return this.set(n*l,n*h,-n*(l*s+h*o)+s+e,-r*h,r*l,-r*(-h*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(os.makeScale(e,t)),this}rotate(e){return this.premultiply(os.makeRotation(-e)),this}translate(e,t){return this.premultiply(os.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const os=new ot;function cl(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function ur(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}const ka={};function or(a){a in ka||(ka[a]=!0,console.warn(a))}function Ui(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function ls(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const Qc=new ot().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),eh=new ot().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function th(a){return a.convertSRGBToLinear().applyMatrix3(eh)}function nh(a){return a.applyMatrix3(Qc).convertLinearToSRGB()}const ih={[vn]:a=>a,[Ke]:a=>a.convertSRGBToLinear(),[al]:th},rh={[vn]:a=>a,[Ke]:a=>a.convertLinearToSRGB(),[al]:nh},rn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(a){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!a},get workingColorSpace(){return vn},set workingColorSpace(a){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(a,e,t){if(this.enabled===!1||e===t||!e||!t)return a;const n=ih[e],r=rh[t];if(n===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(n(a))},fromWorkingColorSpace:function(a,e){return this.convert(a,this.workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this.workingColorSpace)}};let fi;class hl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{fi===void 0&&(fi=ur("canvas")),fi.width=e.width,fi.height=e.height;const n=fi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=fi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ur("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let s=0;s<i.length;s++)i[s]=Ui(i[s]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ui(t[n]/255)*255):t[n]=Ui(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class ul{constructor(e=null){this.isSource=!0,this.uuid=hn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let i;if(Array.isArray(r)){i=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?i.push(cs(r[s].image)):i.push(cs(r[s]))}else i=cs(r);n.url=i}return t||(e.images[this.uuid]=n),n}}function cs(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?hl.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sh=0;class It extends Xi{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,n=en,r=en,i=kt,s=oi,o=tn,l=li,h=It.DEFAULT_ANISOTROPY,u=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sh++}),this.uuid=hn(),this.name="",this.source=new ul(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=i,this.minFilter=s,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(or("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===ni?Ke:ii),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zi:e.x=e.x-Math.floor(e.x);break;case en:e.x=e.x<0?0:1;break;case qr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zi:e.y=e.y-Math.floor(e.y);break;case en:e.y=e.y<0?0:1;break;case qr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return or("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ke?ni:sl}set encoding(e){or("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ni?Ke:ii}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=tl;It.DEFAULT_ANISOTROPY=1;class vt{constructor(e=0,t=0,n=0,r=1){vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,i=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r+s[12]*i,this.y=s[1]*t+s[5]*n+s[9]*r+s[13]*i,this.z=s[2]*t+s[6]*n+s[10]*r+s[14]*i,this.w=s[3]*t+s[7]*n+s[11]*r+s[15]*i,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i;const l=e.elements,h=l[0],u=l[4],c=l[8],d=l[1],f=l[5],m=l[9],g=l[2],v=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(c-g)<.01&&Math.abs(m-v)<.01){if(Math.abs(u+d)<.1&&Math.abs(c+g)<.1&&Math.abs(m+v)<.1&&Math.abs(h+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(h+1)/2,x=(f+1)/2,S=(p+1)/2,C=(u+d)/4,B=(c+g)/4,F=(m+v)/4;return y>x&&y>S?y<.01?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(y),r=C/n,i=B/n):x>S?x<.01?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(x),n=C/r,i=F/r):S<.01?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(S),n=B/i,r=F/i),this.set(n,r,i,t),this}let _=Math.sqrt((v-m)*(v-m)+(c-g)*(c-g)+(d-u)*(d-u));return Math.abs(_)<.001&&(_=1),this.x=(v-m)/_,this.y=(c-g)/_,this.z=(d-u)/_,this.w=Math.acos((h+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ci extends Xi{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(or("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ni?Ke:ii),this.texture=new It(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:kt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ul(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class dl extends It{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=At,this.minFilter=At,this.wrapR=en,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ah extends It{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=At,this.minFilter=At,this.wrapR=en,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,s,o){let l=n[r+0],h=n[r+1],u=n[r+2],c=n[r+3];const d=i[s+0],f=i[s+1],m=i[s+2],g=i[s+3];if(o===0){e[t+0]=l,e[t+1]=h,e[t+2]=u,e[t+3]=c;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=g;return}if(c!==g||l!==d||h!==f||u!==m){let v=1-o;const p=l*d+h*f+u*m+c*g,_=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const S=Math.sqrt(y),C=Math.atan2(S,p*_);v=Math.sin(v*C)/S,o=Math.sin(o*C)/S}const x=o*_;if(l=l*v+d*x,h=h*v+f*x,u=u*v+m*x,c=c*v+g*x,v===1-o){const S=1/Math.sqrt(l*l+h*h+u*u+c*c);l*=S,h*=S,u*=S,c*=S}}e[t]=l,e[t+1]=h,e[t+2]=u,e[t+3]=c}static multiplyQuaternionsFlat(e,t,n,r,i,s){const o=n[r],l=n[r+1],h=n[r+2],u=n[r+3],c=i[s],d=i[s+1],f=i[s+2],m=i[s+3];return e[t]=o*m+u*c+l*f-h*d,e[t+1]=l*m+u*d+h*c-o*f,e[t+2]=h*m+u*f+o*d-l*c,e[t+3]=u*m-o*c-l*d-h*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,i=e._z,s=e._order,o=Math.cos,l=Math.sin,h=o(n/2),u=o(r/2),c=o(i/2),d=l(n/2),f=l(r/2),m=l(i/2);switch(s){case"XYZ":this._x=d*u*c+h*f*m,this._y=h*f*c-d*u*m,this._z=h*u*m+d*f*c,this._w=h*u*c-d*f*m;break;case"YXZ":this._x=d*u*c+h*f*m,this._y=h*f*c-d*u*m,this._z=h*u*m-d*f*c,this._w=h*u*c+d*f*m;break;case"ZXY":this._x=d*u*c-h*f*m,this._y=h*f*c+d*u*m,this._z=h*u*m+d*f*c,this._w=h*u*c-d*f*m;break;case"ZYX":this._x=d*u*c-h*f*m,this._y=h*f*c+d*u*m,this._z=h*u*m-d*f*c,this._w=h*u*c+d*f*m;break;case"YZX":this._x=d*u*c+h*f*m,this._y=h*f*c+d*u*m,this._z=h*u*m-d*f*c,this._w=h*u*c-d*f*m;break;case"XZY":this._x=d*u*c-h*f*m,this._y=h*f*c-d*u*m,this._z=h*u*m+d*f*c,this._w=h*u*c+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],i=t[8],s=t[1],o=t[5],l=t[9],h=t[2],u=t[6],c=t[10],d=n+o+c;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(i-h)*f,this._z=(s-r)*f}else if(n>o&&n>c){const f=2*Math.sqrt(1+n-o-c);this._w=(u-l)/f,this._x=.25*f,this._y=(r+s)/f,this._z=(i+h)/f}else if(o>c){const f=2*Math.sqrt(1+o-n-c);this._w=(i-h)/f,this._x=(r+s)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+c-n-o);this._w=(s-r)/f,this._x=(i+h)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ft(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,i=e._z,s=e._w,o=t._x,l=t._y,h=t._z,u=t._w;return this._x=n*u+s*o+r*h-i*l,this._y=r*u+s*l+i*o-n*h,this._z=i*u+s*h+n*l-r*o,this._w=s*u-n*o-r*l-i*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,i=this._z,s=this._w;let o=s*e._w+n*e._x+r*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=n,this._y=r,this._z=i,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*s+t*this._w,this._x=f*n+t*this._x,this._y=f*r+t*this._y,this._z=f*i+t*this._z,this.normalize(),this._onChangeCallback(),this}const h=Math.sqrt(l),u=Math.atan2(h,o),c=Math.sin((1-t)*u)/h,d=Math.sin(t*u)/h;return this._w=s*c+this._w*d,this._x=n*c+this._x*d,this._y=r*c+this._y*d,this._z=i*c+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),i=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(i),n*Math.cos(i),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,t=0,n=0){Q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,i=e.elements,s=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*s,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*s,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,i=e.x,s=e.y,o=e.z,l=e.w,h=l*t+s*r-o*n,u=l*n+o*t-i*r,c=l*r+i*n-s*t,d=-i*t-s*n-o*r;return this.x=h*l+d*-i+u*-o-c*-s,this.y=u*l+d*-s+c*-i-h*-o,this.z=c*l+d*-o+h*-s-u*-i,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,i=e.z,s=t.x,o=t.y,l=t.z;return this.x=r*l-i*o,this.y=i*s-n*l,this.z=n*o-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return hs.copy(this).projectOnVector(e),this.sub(hs)}reflect(e){return this.sub(hs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hs=new Q,Wa=new kn;class Pn{constructor(e=new Q(1/0,1/0,1/0),t=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),pi.copy(e.boundingBox),pi.applyMatrix4(e.matrixWorld),this.union(pi);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const i=r.attributes.position;for(let s=0,o=i.count;s<o;s++)yn.fromBufferAttribute(i,s).applyMatrix4(e.matrixWorld),this.expandByPoint(yn)}else r.boundingBox===null&&r.computeBoundingBox(),pi.copy(r.boundingBox),pi.applyMatrix4(e.matrixWorld),this.union(pi)}const n=e.children;for(let r=0,i=n.length;r<i;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,yn),yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ki),_r.subVectors(this.max,Ki),mi.subVectors(e.a,Ki),vi.subVectors(e.b,Ki),gi.subVectors(e.c,Ki),Nn.subVectors(vi,mi),Dn.subVectors(gi,vi),qn.subVectors(mi,gi);let t=[0,-Nn.z,Nn.y,0,-Dn.z,Dn.y,0,-qn.z,qn.y,Nn.z,0,-Nn.x,Dn.z,0,-Dn.x,qn.z,0,-qn.x,-Nn.y,Nn.x,0,-Dn.y,Dn.x,0,-qn.y,qn.x,0];return!us(t,mi,vi,gi,_r)||(t=[1,0,0,0,1,0,0,0,1],!us(t,mi,vi,gi,_r))?!1:(xr.crossVectors(Nn,Dn),t=[xr.x,xr.y,xr.z],us(t,mi,vi,gi,_r))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const xn=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],yn=new Q,pi=new Pn,mi=new Q,vi=new Q,gi=new Q,Nn=new Q,Dn=new Q,qn=new Q,Ki=new Q,_r=new Q,xr=new Q,jn=new Q;function us(a,e,t,n,r){for(let i=0,s=a.length-3;i<=s;i+=3){jn.fromArray(a,i);const o=r.x*Math.abs(jn.x)+r.y*Math.abs(jn.y)+r.z*Math.abs(jn.z),l=e.dot(jn),h=t.dot(jn),u=n.dot(jn);if(Math.max(-Math.max(l,h,u),Math.min(l,h,u))>o)return!1}return!0}const oh=new Pn,Zi=new Q,ds=new Q;class In{constructor(e=new Q,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):oh.setFromPoints(e).getCenter(n);let r=0;for(let i=0,s=e.length;i<s;i++)r=Math.max(r,n.distanceToSquared(e[i]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zi.subVectors(e,this.center);const t=Zi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Zi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ds.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zi.copy(e.center).add(ds)),this.expandByPoint(Zi.copy(e.center).sub(ds))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mn=new Q,fs=new Q,yr=new Q,Un=new Q,ps=new Q,Mr=new Q,ms=new Q;class $s{constructor(e=new Q,t=new Q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mn.copy(this.origin).addScaledVector(this.direction,t),Mn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){fs.copy(e).add(t).multiplyScalar(.5),yr.copy(t).sub(e).normalize(),Un.copy(this.origin).sub(fs);const i=e.distanceTo(t)*.5,s=-this.direction.dot(yr),o=Un.dot(this.direction),l=-Un.dot(yr),h=Un.lengthSq(),u=Math.abs(1-s*s);let c,d,f,m;if(u>0)if(c=s*l-o,d=s*o-l,m=i*u,c>=0)if(d>=-m)if(d<=m){const g=1/u;c*=g,d*=g,f=c*(c+s*d+2*o)+d*(s*c+d+2*l)+h}else d=i,c=Math.max(0,-(s*d+o)),f=-c*c+d*(d+2*l)+h;else d=-i,c=Math.max(0,-(s*d+o)),f=-c*c+d*(d+2*l)+h;else d<=-m?(c=Math.max(0,-(-s*i+o)),d=c>0?-i:Math.min(Math.max(-i,-l),i),f=-c*c+d*(d+2*l)+h):d<=m?(c=0,d=Math.min(Math.max(-i,-l),i),f=d*(d+2*l)+h):(c=Math.max(0,-(s*i+o)),d=c>0?i:Math.min(Math.max(-i,-l),i),f=-c*c+d*(d+2*l)+h);else d=s>0?-i:i,c=Math.max(0,-(s*d+o)),f=-c*c+d*(d+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,c),r&&r.copy(fs).addScaledVector(yr,d),f}intersectSphere(e,t){Mn.subVectors(e.center,this.origin);const n=Mn.dot(this.direction),r=Mn.dot(Mn)-n*n,i=e.radius*e.radius;if(r>i)return null;const s=Math.sqrt(i-r),o=n-s,l=n+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,s,o,l;const h=1/this.direction.x,u=1/this.direction.y,c=1/this.direction.z,d=this.origin;return h>=0?(n=(e.min.x-d.x)*h,r=(e.max.x-d.x)*h):(n=(e.max.x-d.x)*h,r=(e.min.x-d.x)*h),u>=0?(i=(e.min.y-d.y)*u,s=(e.max.y-d.y)*u):(i=(e.max.y-d.y)*u,s=(e.min.y-d.y)*u),n>s||i>r||((i>n||isNaN(n))&&(n=i),(s<r||isNaN(r))&&(r=s),c>=0?(o=(e.min.z-d.z)*c,l=(e.max.z-d.z)*c):(o=(e.max.z-d.z)*c,l=(e.min.z-d.z)*c),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Mn)!==null}intersectTriangle(e,t,n,r,i){ps.subVectors(t,e),Mr.subVectors(n,e),ms.crossVectors(ps,Mr);let s=this.direction.dot(ms),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Un.subVectors(this.origin,e);const l=o*this.direction.dot(Mr.crossVectors(Un,Mr));if(l<0)return null;const h=o*this.direction.dot(ps.cross(Un));if(h<0||l+h>s)return null;const u=-o*Un.dot(ms);return u<0?null:this.at(u/s,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rt{constructor(){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,r,i,s,o,l,h,u,c,d,f,m,g,v){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=i,p[5]=s,p[9]=o,p[13]=l,p[2]=h,p[6]=u,p[10]=c,p[14]=d,p[3]=f,p[7]=m,p[11]=g,p[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/_i.setFromMatrixColumn(e,0).length(),i=1/_i.setFromMatrixColumn(e,1).length(),s=1/_i.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,i=e.z,s=Math.cos(n),o=Math.sin(n),l=Math.cos(r),h=Math.sin(r),u=Math.cos(i),c=Math.sin(i);if(e.order==="XYZ"){const d=s*u,f=s*c,m=o*u,g=o*c;t[0]=l*u,t[4]=-l*c,t[8]=h,t[1]=f+m*h,t[5]=d-g*h,t[9]=-o*l,t[2]=g-d*h,t[6]=m+f*h,t[10]=s*l}else if(e.order==="YXZ"){const d=l*u,f=l*c,m=h*u,g=h*c;t[0]=d+g*o,t[4]=m*o-f,t[8]=s*h,t[1]=s*c,t[5]=s*u,t[9]=-o,t[2]=f*o-m,t[6]=g+d*o,t[10]=s*l}else if(e.order==="ZXY"){const d=l*u,f=l*c,m=h*u,g=h*c;t[0]=d-g*o,t[4]=-s*c,t[8]=m+f*o,t[1]=f+m*o,t[5]=s*u,t[9]=g-d*o,t[2]=-s*h,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const d=s*u,f=s*c,m=o*u,g=o*c;t[0]=l*u,t[4]=m*h-f,t[8]=d*h+g,t[1]=l*c,t[5]=g*h+d,t[9]=f*h-m,t[2]=-h,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const d=s*l,f=s*h,m=o*l,g=o*h;t[0]=l*u,t[4]=g-d*c,t[8]=m*c+f,t[1]=c,t[5]=s*u,t[9]=-o*u,t[2]=-h*u,t[6]=f*c+m,t[10]=d-g*c}else if(e.order==="XZY"){const d=s*l,f=s*h,m=o*l,g=o*h;t[0]=l*u,t[4]=-c,t[8]=h*u,t[1]=d*c+g,t[5]=s*u,t[9]=f*c-m,t[2]=m*c-f,t[6]=o*u,t[10]=g*c+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lh,e,ch)}lookAt(e,t,n){const r=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),Fn.crossVectors(n,Yt),Fn.lengthSq()===0&&(Math.abs(n.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),Fn.crossVectors(n,Yt)),Fn.normalize(),Sr.crossVectors(Yt,Fn),r[0]=Fn.x,r[4]=Sr.x,r[8]=Yt.x,r[1]=Fn.y,r[5]=Sr.y,r[9]=Yt.y,r[2]=Fn.z,r[6]=Sr.z,r[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,i=this.elements,s=n[0],o=n[4],l=n[8],h=n[12],u=n[1],c=n[5],d=n[9],f=n[13],m=n[2],g=n[6],v=n[10],p=n[14],_=n[3],y=n[7],x=n[11],S=n[15],C=r[0],B=r[4],F=r[8],M=r[12],E=r[1],D=r[5],H=r[9],I=r[13],X=r[2],W=r[6],te=r[10],O=r[14],U=r[3],J=r[7],j=r[11],V=r[15];return i[0]=s*C+o*E+l*X+h*U,i[4]=s*B+o*D+l*W+h*J,i[8]=s*F+o*H+l*te+h*j,i[12]=s*M+o*I+l*O+h*V,i[1]=u*C+c*E+d*X+f*U,i[5]=u*B+c*D+d*W+f*J,i[9]=u*F+c*H+d*te+f*j,i[13]=u*M+c*I+d*O+f*V,i[2]=m*C+g*E+v*X+p*U,i[6]=m*B+g*D+v*W+p*J,i[10]=m*F+g*H+v*te+p*j,i[14]=m*M+g*I+v*O+p*V,i[3]=_*C+y*E+x*X+S*U,i[7]=_*B+y*D+x*W+S*J,i[11]=_*F+y*H+x*te+S*j,i[15]=_*M+y*I+x*O+S*V,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],s=e[1],o=e[5],l=e[9],h=e[13],u=e[2],c=e[6],d=e[10],f=e[14],m=e[3],g=e[7],v=e[11],p=e[15];return m*(+i*l*c-r*h*c-i*o*d+n*h*d+r*o*f-n*l*f)+g*(+t*l*f-t*h*d+i*s*d-r*s*f+r*h*u-i*l*u)+v*(+t*h*c-t*o*f-i*s*c+n*s*f+i*o*u-n*h*u)+p*(-r*o*u-t*l*c+t*o*d+r*s*c-n*s*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],s=e[4],o=e[5],l=e[6],h=e[7],u=e[8],c=e[9],d=e[10],f=e[11],m=e[12],g=e[13],v=e[14],p=e[15],_=c*v*h-g*d*h+g*l*f-o*v*f-c*l*p+o*d*p,y=m*d*h-u*v*h-m*l*f+s*v*f+u*l*p-s*d*p,x=u*g*h-m*c*h+m*o*f-s*g*f-u*o*p+s*c*p,S=m*c*l-u*g*l-m*o*d+s*g*d+u*o*v-s*c*v,C=t*_+n*y+r*x+i*S;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/C;return e[0]=_*B,e[1]=(g*d*i-c*v*i-g*r*f+n*v*f+c*r*p-n*d*p)*B,e[2]=(o*v*i-g*l*i+g*r*h-n*v*h-o*r*p+n*l*p)*B,e[3]=(c*l*i-o*d*i-c*r*h+n*d*h+o*r*f-n*l*f)*B,e[4]=y*B,e[5]=(u*v*i-m*d*i+m*r*f-t*v*f-u*r*p+t*d*p)*B,e[6]=(m*l*i-s*v*i-m*r*h+t*v*h+s*r*p-t*l*p)*B,e[7]=(s*d*i-u*l*i+u*r*h-t*d*h-s*r*f+t*l*f)*B,e[8]=x*B,e[9]=(m*c*i-u*g*i-m*n*f+t*g*f+u*n*p-t*c*p)*B,e[10]=(s*g*i-m*o*i+m*n*h-t*g*h-s*n*p+t*o*p)*B,e[11]=(u*o*i-s*c*i-u*n*h+t*c*h+s*n*f-t*o*f)*B,e[12]=S*B,e[13]=(u*g*r-m*c*r+m*n*d-t*g*d-u*n*v+t*c*v)*B,e[14]=(m*o*r-s*g*r-m*n*l+t*g*l+s*n*v-t*o*v)*B,e[15]=(s*c*r-u*o*r+u*n*l-t*c*l-s*n*d+t*o*d)*B,this}scale(e){const t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),i=1-n,s=e.x,o=e.y,l=e.z,h=i*s,u=i*o;return this.set(h*s+n,h*o-r*l,h*l+r*o,0,h*o+r*l,u*o+n,u*l-r*s,0,h*l-r*o,u*l+r*s,i*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,s){return this.set(1,n,i,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,i=t._x,s=t._y,o=t._z,l=t._w,h=i+i,u=s+s,c=o+o,d=i*h,f=i*u,m=i*c,g=s*u,v=s*c,p=o*c,_=l*h,y=l*u,x=l*c,S=n.x,C=n.y,B=n.z;return r[0]=(1-(g+p))*S,r[1]=(f+x)*S,r[2]=(m-y)*S,r[3]=0,r[4]=(f-x)*C,r[5]=(1-(d+p))*C,r[6]=(v+_)*C,r[7]=0,r[8]=(m+y)*B,r[9]=(v-_)*B,r[10]=(1-(d+g))*B,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let i=_i.set(r[0],r[1],r[2]).length();const s=_i.set(r[4],r[5],r[6]).length(),o=_i.set(r[8],r[9],r[10]).length();this.determinant()<0&&(i=-i),e.x=r[12],e.y=r[13],e.z=r[14],sn.copy(this);const h=1/i,u=1/s,c=1/o;return sn.elements[0]*=h,sn.elements[1]*=h,sn.elements[2]*=h,sn.elements[4]*=u,sn.elements[5]*=u,sn.elements[6]*=u,sn.elements[8]*=c,sn.elements[9]*=c,sn.elements[10]*=c,t.setFromRotationMatrix(sn),n.x=i,n.y=s,n.z=o,this}makePerspective(e,t,n,r,i,s){const o=this.elements,l=2*i/(t-e),h=2*i/(n-r),u=(t+e)/(t-e),c=(n+r)/(n-r),d=-(s+i)/(s-i),f=-2*s*i/(s-i);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=h,o[9]=c,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=f,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,r,i,s){const o=this.elements,l=1/(t-e),h=1/(n-r),u=1/(s-i),c=(t+e)*l,d=(n+r)*h,f=(s+i)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-c,o[1]=0,o[5]=2*h,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-f,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const _i=new Q,sn=new rt,lh=new Q(0,0,0),ch=new Q(1,1,1),Fn=new Q,Sr=new Q,Yt=new Q,Xa=new rt,qa=new kn;class Kr{constructor(e=0,t=0,n=0,r=Kr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,i=r[0],s=r[4],o=r[8],l=r[1],h=r[5],u=r[9],c=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(Ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-s,i)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-c,i),this._z=0);break;case"ZXY":this._x=Math.asin(Ft(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-c,f),this._z=Math.atan2(-s,h)):(this._y=0,this._z=Math.atan2(l,i));break;case"ZYX":this._y=Math.asin(-Ft(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,i)):(this._x=0,this._z=Math.atan2(-s,h));break;case"YZX":this._z=Math.asin(Ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-c,i)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ft(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Xa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qa.setFromEuler(this),this.setFromQuaternion(qa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Kr.DEFAULT_ORDER="XYZ";class fl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hh=0;const ja=new Q,xi=new kn,Sn=new rt,Er=new Q,$i=new Q,uh=new Q,dh=new kn,Ya=new Q(1,0,0),Ka=new Q(0,1,0),Za=new Q(0,0,1),fh={type:"added"},$a={type:"removed"};class xt extends Xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hh++}),this.uuid=hn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xt.DEFAULT_UP.clone();const e=new Q,t=new Kr,n=new kn,r=new Q(1,1,1);function i(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(i),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new rt},normalMatrix:{value:new ot}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new fl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xi.setFromAxisAngle(e,t),this.quaternion.multiply(xi),this}rotateOnWorldAxis(e,t){return xi.setFromAxisAngle(e,t),this.quaternion.premultiply(xi),this}rotateX(e){return this.rotateOnAxis(Ya,e)}rotateY(e){return this.rotateOnAxis(Ka,e)}rotateZ(e){return this.rotateOnAxis(Za,e)}translateOnAxis(e,t){return ja.copy(e).applyQuaternion(this.quaternion),this.position.add(ja.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ya,e)}translateY(e){return this.translateOnAxis(Ka,e)}translateZ(e){return this.translateOnAxis(Za,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Er.copy(e):Er.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),$i.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt($i,Er,this.up):Sn.lookAt(Er,$i,this.up),this.quaternion.setFromRotationMatrix(Sn),r&&(Sn.extractRotation(r.matrixWorld),xi.setFromRotationMatrix(Sn),this.quaternion.premultiply(xi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(fh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($a)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent($a)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Sn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,i=this.children.length;r<i;r++){const s=this.children[r].getObjectsByProperty(e,t);s.length>0&&(n=n.concat(s))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,e,uh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,dh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const i=t[n];(i.matrixWorldAutoUpdate===!0||e===!0)&&i.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let i=0,s=r.length;i<s;i++){const o=r[i];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function i(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let h=0,u=l.length;h<u;h++){const c=l[h];i(e.shapes,c)}else i(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(i(e.materials,this.material[l]));r.material=o}else r.material=i(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(i(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),h=s(e.textures),u=s(e.images),c=s(e.shapes),d=s(e.skeletons),f=s(e.animations),m=s(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),c.length>0&&(n.shapes=c),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=r,n;function s(o){const l=[];for(const h in o){const u=o[h];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}xt.DEFAULT_UP=new Q(0,1,0);xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new Q,En=new Q,vs=new Q,Tn=new Q,yi=new Q,Mi=new Q,Ja=new Q,gs=new Q,_s=new Q,xs=new Q;let Tr=!1;class ln{constructor(e=new Q,t=new Q,n=new Q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),an.subVectors(e,t),r.cross(an);const i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){an.subVectors(r,t),En.subVectors(n,t),vs.subVectors(e,t);const s=an.dot(an),o=an.dot(En),l=an.dot(vs),h=En.dot(En),u=En.dot(vs),c=s*h-o*o;if(c===0)return i.set(-2,-1,-1);const d=1/c,f=(h*l-o*u)*d,m=(s*u-o*l)*d;return i.set(1-f-m,m,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Tn),Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getUV(e,t,n,r,i,s,o,l){return Tr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Tr=!0),this.getInterpolation(e,t,n,r,i,s,o,l)}static getInterpolation(e,t,n,r,i,s,o,l){return this.getBarycoord(e,t,n,r,Tn),l.setScalar(0),l.addScaledVector(i,Tn.x),l.addScaledVector(s,Tn.y),l.addScaledVector(o,Tn.z),l}static isFrontFacing(e,t,n,r){return an.subVectors(n,t),En.subVectors(e,t),an.cross(En).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return an.subVectors(this.c,this.b),En.subVectors(this.a,this.b),an.cross(En).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ln.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,i){return Tr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Tr=!0),ln.getInterpolation(e,this.a,this.b,this.c,t,n,r,i)}getInterpolation(e,t,n,r,i){return ln.getInterpolation(e,this.a,this.b,this.c,t,n,r,i)}containsPoint(e){return ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,i=this.c;let s,o;yi.subVectors(r,n),Mi.subVectors(i,n),gs.subVectors(e,n);const l=yi.dot(gs),h=Mi.dot(gs);if(l<=0&&h<=0)return t.copy(n);_s.subVectors(e,r);const u=yi.dot(_s),c=Mi.dot(_s);if(u>=0&&c<=u)return t.copy(r);const d=l*c-u*h;if(d<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(n).addScaledVector(yi,s);xs.subVectors(e,i);const f=yi.dot(xs),m=Mi.dot(xs);if(m>=0&&f<=m)return t.copy(i);const g=f*h-l*m;if(g<=0&&h>=0&&m<=0)return o=h/(h-m),t.copy(n).addScaledVector(Mi,o);const v=u*m-f*c;if(v<=0&&c-u>=0&&f-m>=0)return Ja.subVectors(i,r),o=(c-u)/(c-u+(f-m)),t.copy(r).addScaledVector(Ja,o);const p=1/(v+g+d);return s=g*p,o=d*p,t.copy(n).addScaledVector(yi,s).addScaledVector(Mi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let ph=0;class un extends Xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ph++}),this.uuid=hn(),this.name="",this.type="Material",this.blending=Ni,this.side=Ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Qo,this.blendDst=el,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Oc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ni&&(n.blending=this.blending),this.side!==Ln&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(i){const s=[];for(const o in i){const l=i[o];delete l.metadata,s.push(l)}return s}if(t){const i=r(e.textures),s=r(e.images);i.length>0&&(n.textures=i),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let i=0;i!==r;++i)n[i]=t[i].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const pl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},on={h:0,s:0,l:0},wr={h:0,s:0,l:0};function ys(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class $e{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ke){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=rn.workingColorSpace){return this.r=e,this.g=t,this.b=n,rn.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=rn.workingColorSpace){if(e=Zs(e,1),t=Ft(t,0,1),n=Ft(n,0,1),t===0)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+t):n+t-n*t,s=2*n-i;this.r=ys(s,i,e+1/3),this.g=ys(s,i,e),this.b=ys(s,i,e-1/3)}return rn.toWorkingColorSpace(this,r),this}setStyle(e,t=Ke){function n(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=r[1],s=i.length;if(s===3)return this.setRGB(parseInt(i.charAt(0),16)/15,parseInt(i.charAt(1),16)/15,parseInt(i.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(i,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ke){const n=pl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ui(e.r),this.g=Ui(e.g),this.b=Ui(e.b),this}copyLinearToSRGB(e){return this.r=ls(e.r),this.g=ls(e.g),this.b=ls(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ke){return rn.fromWorkingColorSpace(Ut.copy(this),e),Math.round(Ft(Ut.r*255,0,255))*65536+Math.round(Ft(Ut.g*255,0,255))*256+Math.round(Ft(Ut.b*255,0,255))}getHexString(e=Ke){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rn.workingColorSpace){rn.fromWorkingColorSpace(Ut.copy(this),t);const n=Ut.r,r=Ut.g,i=Ut.b,s=Math.max(n,r,i),o=Math.min(n,r,i);let l,h;const u=(o+s)/2;if(o===s)l=0,h=0;else{const c=s-o;switch(h=u<=.5?c/(s+o):c/(2-s-o),s){case n:l=(r-i)/c+(r<i?6:0);break;case r:l=(i-n)/c+2;break;case i:l=(n-r)/c+4;break}l/=6}return e.h=l,e.s=h,e.l=u,e}getRGB(e,t=rn.workingColorSpace){return rn.fromWorkingColorSpace(Ut.copy(this),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=Ke){rn.fromWorkingColorSpace(Ut.copy(this),e);const t=Ut.r,n=Ut.g,r=Ut.b;return e!==Ke?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(on),on.h+=e,on.s+=t,on.l+=n,this.setHSL(on.h,on.s,on.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(on),e.getHSL(wr);const n=ar(on.h,wr.h,t),r=ar(on.s,wr.s,t),i=ar(on.l,wr.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ut=new $e;$e.NAMES=pl;class Qn extends un{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ys,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new Q,br=new dt;class Ht{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Os,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)br.fromBufferAttribute(this,t),br.applyMatrix3(e),this.setXY(t,br.x,br.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=An(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=An(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=An(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=An(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),r=mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),r=mt(r,this.array),i=mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Os&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class ml extends Ht{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class vl extends Ht{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Cn extends Ht{constructor(e,t,n){super(new Float32Array(e),t,n)}}let mh=0;const Jt=new rt,Ms=new xt,Si=new Q,Kt=new Pn,Ji=new Pn,bt=new Q;class gn extends Xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mh++}),this.uuid=hn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cl(e)?vl:ml)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const i=new ot().getNormalMatrix(e);n.applyNormalMatrix(i),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,n){return Jt.makeTranslation(e,t,n),this.applyMatrix4(Jt),this}scale(e,t,n){return Jt.makeScale(e,t,n),this.applyMatrix4(Jt),this}lookAt(e){return Ms.lookAt(e),Ms.updateMatrix(),this.applyMatrix4(Ms.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Si).negate(),this.translate(Si.x,Si.y,Si.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const i=e[n];t.push(i.x,i.y,i.z||0)}return this.setAttribute("position",new Cn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const i=t[n];Kt.setFromBufferAttribute(i),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,Kt.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,Kt.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(Kt.min),this.boundingBox.expandByPoint(Kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new In);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Q,1/0);return}if(e){const n=this.boundingSphere.center;if(Kt.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const o=t[i];Ji.setFromBufferAttribute(o),this.morphTargetsRelative?(bt.addVectors(Kt.min,Ji.min),Kt.expandByPoint(bt),bt.addVectors(Kt.max,Ji.max),Kt.expandByPoint(bt)):(Kt.expandByPoint(Ji.min),Kt.expandByPoint(Ji.max))}Kt.getCenter(n);let r=0;for(let i=0,s=e.count;i<s;i++)bt.fromBufferAttribute(e,i),r=Math.max(r,n.distanceToSquared(bt));if(t)for(let i=0,s=t.length;i<s;i++){const o=t[i],l=this.morphTargetsRelative;for(let h=0,u=o.count;h<u;h++)bt.fromBufferAttribute(o,h),l&&(Si.fromBufferAttribute(e,h),bt.add(Si)),r=Math.max(r,n.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,i=t.normal.array,s=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ht(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,h=[],u=[];for(let E=0;E<o;E++)h[E]=new Q,u[E]=new Q;const c=new Q,d=new Q,f=new Q,m=new dt,g=new dt,v=new dt,p=new Q,_=new Q;function y(E,D,H){c.fromArray(r,E*3),d.fromArray(r,D*3),f.fromArray(r,H*3),m.fromArray(s,E*2),g.fromArray(s,D*2),v.fromArray(s,H*2),d.sub(c),f.sub(c),g.sub(m),v.sub(m);const I=1/(g.x*v.y-v.x*g.y);isFinite(I)&&(p.copy(d).multiplyScalar(v.y).addScaledVector(f,-g.y).multiplyScalar(I),_.copy(f).multiplyScalar(g.x).addScaledVector(d,-v.x).multiplyScalar(I),h[E].add(p),h[D].add(p),h[H].add(p),u[E].add(_),u[D].add(_),u[H].add(_))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let E=0,D=x.length;E<D;++E){const H=x[E],I=H.start,X=H.count;for(let W=I,te=I+X;W<te;W+=3)y(n[W+0],n[W+1],n[W+2])}const S=new Q,C=new Q,B=new Q,F=new Q;function M(E){B.fromArray(i,E*3),F.copy(B);const D=h[E];S.copy(D),S.sub(B.multiplyScalar(B.dot(D))).normalize(),C.crossVectors(F,D);const I=C.dot(u[E])<0?-1:1;l[E*4]=S.x,l[E*4+1]=S.y,l[E*4+2]=S.z,l[E*4+3]=I}for(let E=0,D=x.length;E<D;++E){const H=x[E],I=H.start,X=H.count;for(let W=I,te=I+X;W<te;W+=3)M(n[W+0]),M(n[W+1]),M(n[W+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ht(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const r=new Q,i=new Q,s=new Q,o=new Q,l=new Q,h=new Q,u=new Q,c=new Q;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),g=e.getX(d+1),v=e.getX(d+2);r.fromBufferAttribute(t,m),i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),u.subVectors(s,i),c.subVectors(r,i),u.cross(c),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,g),h.fromBufferAttribute(n,v),o.add(u),l.add(u),h.add(u),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(v,h.x,h.y,h.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),i.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),u.subVectors(s,i),c.subVectors(r,i),u.cross(c),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(o,l){const h=o.array,u=o.itemSize,c=o.normalized,d=new h.constructor(l.length*u);let f=0,m=0;for(let g=0,v=l.length;g<v;g++){o.isInterleavedBufferAttribute?f=l[g]*o.data.stride+o.offset:f=l[g]*u;for(let p=0;p<u;p++)d[m++]=h[f++]}return new Ht(d,u,c)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new gn,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],h=e(l,n);t.setAttribute(o,h)}const i=this.morphAttributes;for(const o in i){const l=[],h=i[o];for(let u=0,c=h.length;u<c;u++){const d=h[u],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const h=s[o];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(e[h]=l[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const h=n[l];e.data.attributes[l]=h.toJSON(e.data)}const r={};let i=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],u=[];for(let c=0,d=h.length;c<d;c++){const f=h[c];u.push(f.toJSON(e.data))}u.length>0&&(r[l]=u,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const h in r){const u=r[h];this.setAttribute(h,u.clone(t))}const i=e.morphAttributes;for(const h in i){const u=[],c=i[h];for(let d=0,f=c.length;d<f;d++)u.push(c[d].clone(t));this.morphAttributes[h]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let h=0,u=s.length;h<u;h++){const c=s[h];this.addGroup(c.start,c.count,c.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qa=new rt,dn=new $s,Ar=new In,eo=new Q,Ei=new Q,Ti=new Q,wi=new Q,Ss=new Q,Rr=new Q,Cr=new dt,Lr=new dt,Pr=new dt,to=new Q,no=new Q,io=new Q,Ir=new Q,Nr=new Q;class Vt extends xt{constructor(e=new gn,t=new Qn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=r.length;i<s;i++){const o=r[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(i&&o){Rr.set(0,0,0);for(let l=0,h=i.length;l<h;l++){const u=o[l],c=i[l];u!==0&&(Ss.fromBufferAttribute(c,e),s?Rr.addScaledVector(Ss,u):Rr.addScaledVector(Ss.sub(t),u))}t.add(Rr)}return t}raycast(e,t){const n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ar.copy(n.boundingSphere),Ar.applyMatrix4(i),dn.copy(e.ray).recast(e.near),!(Ar.containsPoint(dn.origin)===!1&&(dn.intersectSphere(Ar,eo)===null||dn.origin.distanceToSquared(eo)>(e.far-e.near)**2))&&(Qa.copy(i).invert(),dn.copy(e.ray).applyMatrix4(Qa),!(n.boundingBox!==null&&dn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t)))}_computeIntersections(e,t){let n;const r=this.geometry,i=this.material,s=r.index,o=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,c=r.groups,d=r.drawRange;if(s!==null)if(Array.isArray(i))for(let f=0,m=c.length;f<m;f++){const g=c[f],v=i[g.materialIndex],p=Math.max(g.start,d.start),_=Math.min(s.count,Math.min(g.start+g.count,d.start+d.count));for(let y=p,x=_;y<x;y+=3){const S=s.getX(y),C=s.getX(y+1),B=s.getX(y+2);n=Dr(this,v,e,dn,l,h,u,S,C,B),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=g.materialIndex,t.push(n))}}else{const f=Math.max(0,d.start),m=Math.min(s.count,d.start+d.count);for(let g=f,v=m;g<v;g+=3){const p=s.getX(g),_=s.getX(g+1),y=s.getX(g+2);n=Dr(this,i,e,dn,l,h,u,p,_,y),n&&(n.faceIndex=Math.floor(g/3),t.push(n))}}else if(o!==void 0)if(Array.isArray(i))for(let f=0,m=c.length;f<m;f++){const g=c[f],v=i[g.materialIndex],p=Math.max(g.start,d.start),_=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let y=p,x=_;y<x;y+=3){const S=y,C=y+1,B=y+2;n=Dr(this,v,e,dn,l,h,u,S,C,B),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=g.materialIndex,t.push(n))}}else{const f=Math.max(0,d.start),m=Math.min(o.count,d.start+d.count);for(let g=f,v=m;g<v;g+=3){const p=g,_=g+1,y=g+2;n=Dr(this,i,e,dn,l,h,u,p,_,y),n&&(n.faceIndex=Math.floor(g/3),t.push(n))}}}}function vh(a,e,t,n,r,i,s,o){let l;if(e.side===Xt?l=n.intersectTriangle(s,i,r,!0,o):l=n.intersectTriangle(r,i,s,e.side===Ln,o),l===null)return null;Nr.copy(o),Nr.applyMatrix4(a.matrixWorld);const h=t.ray.origin.distanceTo(Nr);return h<t.near||h>t.far?null:{distance:h,point:Nr.clone(),object:a}}function Dr(a,e,t,n,r,i,s,o,l,h){a.getVertexPosition(o,Ei),a.getVertexPosition(l,Ti),a.getVertexPosition(h,wi);const u=vh(a,e,t,n,Ei,Ti,wi,Ir);if(u){r&&(Cr.fromBufferAttribute(r,o),Lr.fromBufferAttribute(r,l),Pr.fromBufferAttribute(r,h),u.uv=ln.getInterpolation(Ir,Ei,Ti,wi,Cr,Lr,Pr,new dt)),i&&(Cr.fromBufferAttribute(i,o),Lr.fromBufferAttribute(i,l),Pr.fromBufferAttribute(i,h),u.uv1=ln.getInterpolation(Ir,Ei,Ti,wi,Cr,Lr,Pr,new dt),u.uv2=u.uv1),s&&(to.fromBufferAttribute(s,o),no.fromBufferAttribute(s,l),io.fromBufferAttribute(s,h),u.normal=ln.getInterpolation(Ir,Ei,Ti,wi,to,no,io,new Q),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const c={a:o,b:l,c:h,normal:new Q,materialIndex:0};ln.getNormal(Ei,Ti,wi,c.normal),u.face=c}return u}class Gn extends gn{constructor(e=1,t=1,n=1,r=1,i=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:s};const o=this;r=Math.floor(r),i=Math.floor(i),s=Math.floor(s);const l=[],h=[],u=[],c=[];let d=0,f=0;m("z","y","x",-1,-1,n,t,e,s,i,0),m("z","y","x",1,-1,n,t,-e,s,i,1),m("x","z","y",1,1,e,n,t,r,s,2),m("x","z","y",1,-1,e,n,-t,r,s,3),m("x","y","z",1,-1,e,t,n,r,i,4),m("x","y","z",-1,-1,e,t,-n,r,i,5),this.setIndex(l),this.setAttribute("position",new Cn(h,3)),this.setAttribute("normal",new Cn(u,3)),this.setAttribute("uv",new Cn(c,2));function m(g,v,p,_,y,x,S,C,B,F,M){const E=x/B,D=S/F,H=x/2,I=S/2,X=C/2,W=B+1,te=F+1;let O=0,U=0;const J=new Q;for(let j=0;j<te;j++){const V=j*D-I;for(let k=0;k<W;k++){const b=k*E-H;J[g]=b*_,J[v]=V*y,J[p]=X,h.push(J.x,J.y,J.z),J[g]=0,J[v]=0,J[p]=C>0?1:-1,u.push(J.x,J.y,J.z),c.push(k/B),c.push(1-j/F),O+=1}}for(let j=0;j<F;j++)for(let V=0;V<B;V++){const k=d+V+W*j,b=d+V+W*(j+1),A=d+(V+1)+W*(j+1),R=d+(V+1)+W*j;l.push(k,b,R),l.push(b,A,R),U+=6}o.addGroup(f,U,M),f+=U,d+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ki(a){const e={};for(const t in a){e[t]={};for(const n in a[t]){const r=a[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function zt(a){const e={};for(let t=0;t<a.length;t++){const n=ki(a[t]);for(const r in n)e[r]=n[r]}return e}function gh(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function gl(a){return a.getRenderTarget()===null?a.outputColorSpace:vn}const _h={clone:ki,merge:zt};var xh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hi extends un{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xh,this.fragmentShader=yh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ki(e.uniforms),this.uniformsGroups=gh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class _l extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Wt extends _l{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Gi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gi*2*Math.atan(Math.tan(sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,i,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(sr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,h=s.fullHeight;i+=s.offsetX*r/l,t-=s.offsetY*n/h,r*=s.width/l,n*=s.height/h}const o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const bi=-90,Ai=1;class Mh extends xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const r=new Wt(bi,Ai,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const i=new Wt(bi,Ai,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(-1,0,0),this.add(i);const s=new Wt(bi,Ai,e,t);s.layers=this.layers,s.up.set(0,0,-1),s.lookAt(0,1,0),this.add(s);const o=new Wt(bi,Ai,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new Wt(bi,Ai,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const h=new Wt(bi,Ai,e,t);h.layers=this.layers,h.up.set(0,1,0),h.lookAt(0,0,-1),this.add(h)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,i,s,o,l,h]=this.children,u=e.getRenderTarget(),c=e.toneMapping,d=e.xr.enabled;e.toneMapping=Rn,e.xr.enabled=!1;const f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,i),e.setRenderTarget(n,2),e.render(t,s),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=f,e.setRenderTarget(n,5),e.render(t,h),e.setRenderTarget(u),e.toneMapping=c,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class xl extends It{constructor(e,t,n,r,i,s,o,l,h,u){e=e!==void 0?e:[],t=t!==void 0?t:Bi,super(e,t,n,r,i,s,o,l,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Sh extends ci{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(or("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ni?Ke:ii),this.texture=new xl(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:kt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Gn(5,5,5),i=new hi({name:"CubemapFromEquirect",uniforms:ki(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xt,blending:Hn});i.uniforms.tEquirect.value=t;const s=new Vt(r,i),o=t.minFilter;return t.minFilter===oi&&(t.minFilter=kt),new Mh(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,r){const i=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,r);e.setRenderTarget(i)}}const Es=new Q,Eh=new Q,Th=new ot;class Kn{constructor(e=new Q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Es.subVectors(n,t).cross(Eh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Es),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const i=-(e.start.dot(this.normal)+this.constant)/r;return i<0||i>1?null:t.copy(e.start).addScaledVector(n,i)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Th.getNormalMatrix(e),r=this.coplanarPoint(Es).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yn=new In,Ur=new Q;class Js{constructor(e=new Kn,t=new Kn,n=new Kn,r=new Kn,i=new Kn,s=new Kn){this.planes=[e,t,n,r,i,s]}set(e,t,n,r,i,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],i=n[1],s=n[2],o=n[3],l=n[4],h=n[5],u=n[6],c=n[7],d=n[8],f=n[9],m=n[10],g=n[11],v=n[12],p=n[13],_=n[14],y=n[15];return t[0].setComponents(o-r,c-l,g-d,y-v).normalize(),t[1].setComponents(o+r,c+l,g+d,y+v).normalize(),t[2].setComponents(o+i,c+h,g+f,y+p).normalize(),t[3].setComponents(o-i,c-h,g-f,y-p).normalize(),t[4].setComponents(o-s,c-u,g-m,y-_).normalize(),t[5].setComponents(o+s,c+u,g+m,y+_).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yn)}intersectsSprite(e){return Yn.center.set(0,0,0),Yn.radius=.7071067811865476,Yn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let i=0;i<6;i++)if(t[i].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Ur.x=r.normal.x>0?e.max.x:e.min.x,Ur.y=r.normal.y>0?e.max.y:e.min.y,Ur.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ur)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function yl(){let a=null,e=!1,t=null,n=null;function r(i,s){t(i,s),n=a.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=a.requestAnimationFrame(r),e=!0)},stop:function(){a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(i){t=i},setContext:function(i){a=i}}}function wh(a,e){const t=e.isWebGL2,n=new WeakMap;function r(h,u){const c=h.array,d=h.usage,f=a.createBuffer();a.bindBuffer(u,f),a.bufferData(u,c,d),h.onUploadCallback();let m;if(c instanceof Float32Array)m=a.FLOAT;else if(c instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(t)m=a.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else m=a.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=a.SHORT;else if(c instanceof Uint32Array)m=a.UNSIGNED_INT;else if(c instanceof Int32Array)m=a.INT;else if(c instanceof Int8Array)m=a.BYTE;else if(c instanceof Uint8Array)m=a.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:h.version}}function i(h,u,c){const d=u.array,f=u.updateRange;a.bindBuffer(c,h),f.count===-1?a.bufferSubData(c,0,d):(t?a.bufferSubData(c,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):a.bufferSubData(c,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),u.onUploadCallback()}function s(h){return h.isInterleavedBufferAttribute&&(h=h.data),n.get(h)}function o(h){h.isInterleavedBufferAttribute&&(h=h.data);const u=n.get(h);u&&(a.deleteBuffer(u.buffer),n.delete(h))}function l(h,u){if(h.isGLBufferAttribute){const d=n.get(h);(!d||d.version<h.version)&&n.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const c=n.get(h);c===void 0?n.set(h,r(h,u)):c.version<h.version&&(i(c.buffer,h,u),c.version=h.version)}return{get:s,remove:o,update:l}}class Qs extends gn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const i=e/2,s=t/2,o=Math.floor(n),l=Math.floor(r),h=o+1,u=l+1,c=e/o,d=t/l,f=[],m=[],g=[],v=[];for(let p=0;p<u;p++){const _=p*d-s;for(let y=0;y<h;y++){const x=y*c-i;m.push(x,-_,0),g.push(0,0,1),v.push(y/o),v.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<o;_++){const y=_+h*p,x=_+h*(p+1),S=_+1+h*(p+1),C=_+1+h*p;f.push(y,x,C),f.push(x,S,C)}this.setIndex(f),this.setAttribute("position",new Cn(m,3)),this.setAttribute("normal",new Cn(g,3)),this.setAttribute("uv",new Cn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qs(e.width,e.height,e.widthSegments,e.heightSegments)}}var bh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ah=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ch=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ph=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ih="vec3 transformed = vec3( position );",Nh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Uh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Fh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Bh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Oh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Wh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Xh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,jh=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Yh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$h=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qh=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,eu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,tu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,iu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ru=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,su=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,au=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ou=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,hu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,uu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,du=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,mu=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,vu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_u=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,Mu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Su=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Eu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Tu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,wu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Au=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ru=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Cu=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,Lu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Iu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Du=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Uu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Bu=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Ou=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,zu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,Vu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Hu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ku=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Xu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,qu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ju=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ku=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,$u=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ju=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ed=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,td=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,id=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,rd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ad=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,od=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ld=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,cd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ud=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,md=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,vd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,gd=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_d=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xd=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,yd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Md=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ed=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Td=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,wd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ad=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Rd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Cd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ld=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Pd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Id=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Nd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ud=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Fd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Od=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Vd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Gd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,kd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Zd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$d=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Qd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ef=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,nt={alphamap_fragment:bh,alphamap_pars_fragment:Ah,alphatest_fragment:Rh,alphatest_pars_fragment:Ch,aomap_fragment:Lh,aomap_pars_fragment:Ph,begin_vertex:Ih,beginnormal_vertex:Nh,bsdfs:Dh,iridescence_fragment:Uh,bumpmap_pars_fragment:Fh,clipping_planes_fragment:Bh,clipping_planes_pars_fragment:Oh,clipping_planes_pars_vertex:zh,clipping_planes_vertex:Vh,color_fragment:Hh,color_pars_fragment:Gh,color_pars_vertex:kh,color_vertex:Wh,common:Xh,cube_uv_reflection_fragment:qh,defaultnormal_vertex:jh,displacementmap_pars_vertex:Yh,displacementmap_vertex:Kh,emissivemap_fragment:Zh,emissivemap_pars_fragment:$h,encodings_fragment:Jh,encodings_pars_fragment:Qh,envmap_fragment:eu,envmap_common_pars_fragment:tu,envmap_pars_fragment:nu,envmap_pars_vertex:iu,envmap_physical_pars_fragment:mu,envmap_vertex:ru,fog_vertex:su,fog_pars_vertex:au,fog_fragment:ou,fog_pars_fragment:lu,gradientmap_pars_fragment:cu,lightmap_fragment:hu,lightmap_pars_fragment:uu,lights_lambert_fragment:du,lights_lambert_pars_fragment:fu,lights_pars_begin:pu,lights_toon_fragment:vu,lights_toon_pars_fragment:gu,lights_phong_fragment:_u,lights_phong_pars_fragment:xu,lights_physical_fragment:yu,lights_physical_pars_fragment:Mu,lights_fragment_begin:Su,lights_fragment_maps:Eu,lights_fragment_end:Tu,logdepthbuf_fragment:wu,logdepthbuf_pars_fragment:bu,logdepthbuf_pars_vertex:Au,logdepthbuf_vertex:Ru,map_fragment:Cu,map_pars_fragment:Lu,map_particle_fragment:Pu,map_particle_pars_fragment:Iu,metalnessmap_fragment:Nu,metalnessmap_pars_fragment:Du,morphcolor_vertex:Uu,morphnormal_vertex:Fu,morphtarget_pars_vertex:Bu,morphtarget_vertex:Ou,normal_fragment_begin:zu,normal_fragment_maps:Vu,normal_pars_fragment:Hu,normal_pars_vertex:Gu,normal_vertex:ku,normalmap_pars_fragment:Wu,clearcoat_normal_fragment_begin:Xu,clearcoat_normal_fragment_maps:qu,clearcoat_pars_fragment:ju,iridescence_pars_fragment:Yu,output_fragment:Ku,packing:Zu,premultiplied_alpha_fragment:$u,project_vertex:Ju,dithering_fragment:Qu,dithering_pars_fragment:ed,roughnessmap_fragment:td,roughnessmap_pars_fragment:nd,shadowmap_pars_fragment:id,shadowmap_pars_vertex:rd,shadowmap_vertex:sd,shadowmask_pars_fragment:ad,skinbase_vertex:od,skinning_pars_vertex:ld,skinning_vertex:cd,skinnormal_vertex:hd,specularmap_fragment:ud,specularmap_pars_fragment:dd,tonemapping_fragment:fd,tonemapping_pars_fragment:pd,transmission_fragment:md,transmission_pars_fragment:vd,uv_pars_fragment:gd,uv_pars_vertex:_d,uv_vertex:xd,worldpos_vertex:yd,background_vert:Md,background_frag:Sd,backgroundCube_vert:Ed,backgroundCube_frag:Td,cube_vert:wd,cube_frag:bd,depth_vert:Ad,depth_frag:Rd,distanceRGBA_vert:Cd,distanceRGBA_frag:Ld,equirect_vert:Pd,equirect_frag:Id,linedashed_vert:Nd,linedashed_frag:Dd,meshbasic_vert:Ud,meshbasic_frag:Fd,meshlambert_vert:Bd,meshlambert_frag:Od,meshmatcap_vert:zd,meshmatcap_frag:Vd,meshnormal_vert:Hd,meshnormal_frag:Gd,meshphong_vert:kd,meshphong_frag:Wd,meshphysical_vert:Xd,meshphysical_frag:qd,meshtoon_vert:jd,meshtoon_frag:Yd,points_vert:Kd,points_frag:Zd,shadow_vert:$d,shadow_frag:Jd,sprite_vert:Qd,sprite_frag:ef},Pe={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaTest:{value:0}}},fn={basic:{uniforms:zt([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:zt([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new $e(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:zt([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:zt([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:zt([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new $e(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:zt([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:zt([Pe.points,Pe.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:zt([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:zt([Pe.common,Pe.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:zt([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:zt([Pe.sprite,Pe.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:zt([Pe.common,Pe.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:zt([Pe.lights,Pe.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};fn.physical={uniforms:zt([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const Fr={r:0,b:0,g:0};function tf(a,e,t,n,r,i,s){const o=new $e(0);let l=i===!0?0:1,h,u,c=null,d=0,f=null;function m(v,p){let _=!1,y=p.isScene===!0?p.background:null;switch(y&&y.isTexture&&(y=(p.backgroundBlurriness>0?t:e).get(y)),y===null?g(o,l):y&&y.isColor&&(g(y,1),_=!0),a.xr.getEnvironmentBlendMode()){case"opaque":_=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,s),_=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,s),_=!0;break}(a.autoClear||_)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Yr)?(u===void 0&&(u=new Vt(new Gn(1,1,1),new hi({name:"BackgroundCubeMaterial",uniforms:ki(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,B,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=y.colorSpace!==Ke,(c!==y||d!==y.version||f!==a.toneMapping)&&(u.material.needsUpdate=!0,c=y,d=y.version,f=a.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(h===void 0&&(h=new Vt(new Qs(2,2),new hi({name:"BackgroundMaterial",uniforms:ki(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=y,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=y.colorSpace!==Ke,y.matrixAutoUpdate===!0&&y.updateMatrix(),h.material.uniforms.uvTransform.value.copy(y.matrix),(c!==y||d!==y.version||f!==a.toneMapping)&&(h.material.needsUpdate=!0,c=y,d=y.version,f=a.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null))}function g(v,p){v.getRGB(Fr,gl(a)),n.buffers.color.setClear(Fr.r,Fr.g,Fr.b,p,s)}return{getClearColor:function(){return o},setClearColor:function(v,p=1){o.set(v),l=p,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,g(o,l)},render:m}}function nf(a,e,t,n){const r=a.getParameter(a.MAX_VERTEX_ATTRIBS),i=n.isWebGL2?null:e.get("OES_vertex_array_object"),s=n.isWebGL2||i!==null,o={},l=v(null);let h=l,u=!1;function c(X,W,te,O,U){let J=!1;if(s){const j=g(O,te,W);h!==j&&(h=j,f(h.object)),J=p(X,O,te,U),J&&_(X,O,te,U)}else{const j=W.wireframe===!0;(h.geometry!==O.id||h.program!==te.id||h.wireframe!==j)&&(h.geometry=O.id,h.program=te.id,h.wireframe=j,J=!0)}U!==null&&t.update(U,a.ELEMENT_ARRAY_BUFFER),(J||u)&&(u=!1,F(X,W,te,O),U!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function d(){return n.isWebGL2?a.createVertexArray():i.createVertexArrayOES()}function f(X){return n.isWebGL2?a.bindVertexArray(X):i.bindVertexArrayOES(X)}function m(X){return n.isWebGL2?a.deleteVertexArray(X):i.deleteVertexArrayOES(X)}function g(X,W,te){const O=te.wireframe===!0;let U=o[X.id];U===void 0&&(U={},o[X.id]=U);let J=U[W.id];J===void 0&&(J={},U[W.id]=J);let j=J[O];return j===void 0&&(j=v(d()),J[O]=j),j}function v(X){const W=[],te=[],O=[];for(let U=0;U<r;U++)W[U]=0,te[U]=0,O[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:te,attributeDivisors:O,object:X,attributes:{},index:null}}function p(X,W,te,O){const U=h.attributes,J=W.attributes;let j=0;const V=te.getAttributes();for(const k in V)if(V[k].location>=0){const A=U[k];let R=J[k];if(R===void 0&&(k==="instanceMatrix"&&X.instanceMatrix&&(R=X.instanceMatrix),k==="instanceColor"&&X.instanceColor&&(R=X.instanceColor)),A===void 0||A.attribute!==R||R&&A.data!==R.data)return!0;j++}return h.attributesNum!==j||h.index!==O}function _(X,W,te,O){const U={},J=W.attributes;let j=0;const V=te.getAttributes();for(const k in V)if(V[k].location>=0){let A=J[k];A===void 0&&(k==="instanceMatrix"&&X.instanceMatrix&&(A=X.instanceMatrix),k==="instanceColor"&&X.instanceColor&&(A=X.instanceColor));const R={};R.attribute=A,A&&A.data&&(R.data=A.data),U[k]=R,j++}h.attributes=U,h.attributesNum=j,h.index=O}function y(){const X=h.newAttributes;for(let W=0,te=X.length;W<te;W++)X[W]=0}function x(X){S(X,0)}function S(X,W){const te=h.newAttributes,O=h.enabledAttributes,U=h.attributeDivisors;te[X]=1,O[X]===0&&(a.enableVertexAttribArray(X),O[X]=1),U[X]!==W&&((n.isWebGL2?a:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](X,W),U[X]=W)}function C(){const X=h.newAttributes,W=h.enabledAttributes;for(let te=0,O=W.length;te<O;te++)W[te]!==X[te]&&(a.disableVertexAttribArray(te),W[te]=0)}function B(X,W,te,O,U,J){n.isWebGL2===!0&&(te===a.INT||te===a.UNSIGNED_INT)?a.vertexAttribIPointer(X,W,te,U,J):a.vertexAttribPointer(X,W,te,O,U,J)}function F(X,W,te,O){if(n.isWebGL2===!1&&(X.isInstancedMesh||O.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const U=O.attributes,J=te.getAttributes(),j=W.defaultAttributeValues;for(const V in J){const k=J[V];if(k.location>=0){let b=U[V];if(b===void 0&&(V==="instanceMatrix"&&X.instanceMatrix&&(b=X.instanceMatrix),V==="instanceColor"&&X.instanceColor&&(b=X.instanceColor)),b!==void 0){const A=b.normalized,R=b.itemSize,G=t.get(b);if(G===void 0)continue;const P=G.buffer,ee=G.type,K=G.bytesPerElement;if(b.isInterleavedBufferAttribute){const Z=b.data,ie=Z.stride,Te=b.offset;if(Z.isInstancedInterleavedBuffer){for(let pe=0;pe<k.locationSize;pe++)S(k.location+pe,Z.meshPerAttribute);X.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let pe=0;pe<k.locationSize;pe++)x(k.location+pe);a.bindBuffer(a.ARRAY_BUFFER,P);for(let pe=0;pe<k.locationSize;pe++)B(k.location+pe,R/k.locationSize,ee,A,ie*K,(Te+R/k.locationSize*pe)*K)}else{if(b.isInstancedBufferAttribute){for(let Z=0;Z<k.locationSize;Z++)S(k.location+Z,b.meshPerAttribute);X.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=b.meshPerAttribute*b.count)}else for(let Z=0;Z<k.locationSize;Z++)x(k.location+Z);a.bindBuffer(a.ARRAY_BUFFER,P);for(let Z=0;Z<k.locationSize;Z++)B(k.location+Z,R/k.locationSize,ee,A,R*K,R/k.locationSize*Z*K)}}else if(j!==void 0){const A=j[V];if(A!==void 0)switch(A.length){case 2:a.vertexAttrib2fv(k.location,A);break;case 3:a.vertexAttrib3fv(k.location,A);break;case 4:a.vertexAttrib4fv(k.location,A);break;default:a.vertexAttrib1fv(k.location,A)}}}}C()}function M(){H();for(const X in o){const W=o[X];for(const te in W){const O=W[te];for(const U in O)m(O[U].object),delete O[U];delete W[te]}delete o[X]}}function E(X){if(o[X.id]===void 0)return;const W=o[X.id];for(const te in W){const O=W[te];for(const U in O)m(O[U].object),delete O[U];delete W[te]}delete o[X.id]}function D(X){for(const W in o){const te=o[W];if(te[X.id]===void 0)continue;const O=te[X.id];for(const U in O)m(O[U].object),delete O[U];delete te[X.id]}}function H(){I(),u=!0,h!==l&&(h=l,f(h.object))}function I(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:c,reset:H,resetDefaultState:I,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfProgram:D,initAttributes:y,enableAttribute:x,disableUnusedAttributes:C}}function rf(a,e,t,n){const r=n.isWebGL2;let i;function s(h){i=h}function o(h,u){a.drawArrays(i,h,u),t.update(u,i,1)}function l(h,u,c){if(c===0)return;let d,f;if(r)d=a,f="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](i,h,u,c),t.update(u,i,c)}this.setMode=s,this.render=o,this.renderInstances=l}function sf(a,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");n=a.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function i(B){if(B==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&a.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=i(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const h=s||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,c=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),d=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=a.getParameter(a.MAX_TEXTURE_SIZE),m=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),g=a.getParameter(a.MAX_VERTEX_ATTRIBS),v=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),p=a.getParameter(a.MAX_VARYING_VECTORS),_=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),y=d>0,x=s||e.has("OES_texture_float"),S=y&&x,C=s?a.getParameter(a.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:h,getMaxAnisotropy:r,getMaxPrecision:i,precision:o,logarithmicDepthBuffer:u,maxTextures:c,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:v,maxVaryings:p,maxFragmentUniforms:_,vertexTextures:y,floatFragmentTextures:x,floatVertexTextures:S,maxSamples:C}}function af(a){const e=this;let t=null,n=0,r=!1,i=!1;const s=new Kn,o=new ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(c,d){const f=c.length!==0||d||n!==0||r;return r=d,n=c.length,f},this.beginShadows=function(){i=!0,u(null)},this.endShadows=function(){i=!1},this.setGlobalState=function(c,d){t=u(c,d,0)},this.setState=function(c,d,f){const m=c.clippingPlanes,g=c.clipIntersection,v=c.clipShadows,p=a.get(c);if(!r||m===null||m.length===0||i&&!v)i?u(null):h();else{const _=i?0:n,y=_*4;let x=p.clippingState||null;l.value=x,x=u(m,d,y,f);for(let S=0;S!==y;++S)x[S]=t[S];p.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=_}};function h(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(c,d,f,m){const g=c!==null?c.length:0;let v=null;if(g!==0){if(v=l.value,m!==!0||v===null){const p=f+g*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(v===null||v.length<p)&&(v=new Float32Array(p));for(let y=0,x=f;y!==g;++y,x+=4)s.copy(c[y]).applyMatrix4(_,o),s.normal.toArray(v,x),v[x+3]=s.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,v}}function of(a){let e=new WeakMap;function t(s,o){return o===Ds?s.mapping=Bi:o===Us&&(s.mapping=Oi),s}function n(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const o=s.mapping;if(o===Ds||o===Us)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const h=new Sh(l.height/2);return h.fromEquirectangularTexture(a,s),e.set(s,h),s.addEventListener("dispose",r),t(h.texture,s.mapping)}else return null}}return s}function r(s){const o=s.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function i(){e=new WeakMap}return{get:n,dispose:i}}class Zr extends _l{constructor(e=-1,t=1,n=1,r=-1,i=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let i=n-e,s=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=h*this.view.offsetX,s=i+h*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(i,s,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ii=4,ro=[.125,.215,.35,.446,.526,.582],$n=20,Ts=new Zr,so=new $e;let ws=null;const Zn=(1+Math.sqrt(5))/2,Ri=1/Zn,ao=[new Q(1,1,1),new Q(-1,1,1),new Q(1,1,-1),new Q(-1,1,-1),new Q(0,Zn,Ri),new Q(0,Zn,-Ri),new Q(Ri,0,Zn),new Q(-Ri,0,Zn),new Q(Zn,Ri,0),new Q(-Zn,Ri,0)];class oo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){ws=this._renderer.getRenderTarget(),this._setSize(256);const i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(e,n,r,i),t>0&&this._blur(i,0,0,t),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ho(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=co(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ws),e.scissorTest=!1,Br(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bi||e.mapping===Oi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ws=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:cr,format:tn,colorSpace:vn,depthBuffer:!1},r=lo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lo(e,t,n);const{_lodMax:i}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lf(i)),this._blurMaterial=cf(i,e,t)}return r}_compileMaterial(e){const t=new Vt(this._lodPlanes[0],e);this._renderer.compile(t,Ts)}_sceneToCubeUV(e,t,n,r){const o=new Wt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,c=u.autoClear,d=u.toneMapping;u.getClearColor(so),u.toneMapping=Rn,u.autoClear=!1;const f=new Qn({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1}),m=new Vt(new Gn,f);let g=!1;const v=e.background;v?v.isColor&&(f.color.copy(v),e.background=null,g=!0):(f.color.copy(so),g=!0);for(let p=0;p<6;p++){const _=p%3;_===0?(o.up.set(0,l[p],0),o.lookAt(h[p],0,0)):_===1?(o.up.set(0,0,l[p]),o.lookAt(0,h[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,h[p]));const y=this._cubeSize;Br(r,_*y,p>2?y:0,y,y),u.setRenderTarget(r),g&&u.render(m,o),u.render(e,o)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=c,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Bi||e.mapping===Oi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ho()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=co());const i=r?this._cubemapMaterial:this._equirectMaterial,s=new Vt(this._lodPlanes[0],i),o=i.uniforms;o.envMap.value=e;const l=this._cubeSize;Br(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,Ts)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const i=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=ao[(r-1)%ao.length];this._blur(e,r-1,r,i,s)}t.autoClear=n}_blur(e,t,n,r,i){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,r,"latitudinal",i),this._halfBlur(s,e,n,n,r,"longitudinal",i)}_halfBlur(e,t,n,r,i,s,o){const l=this._renderer,h=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,c=new Vt(this._lodPlanes[r],h),d=h.uniforms,f=this._sizeLods[n]-1,m=isFinite(i)?Math.PI/(2*f):2*Math.PI/(2*$n-1),g=i/m,v=isFinite(i)?1+Math.floor(u*g):$n;v>$n&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${$n}`);const p=[];let _=0;for(let B=0;B<$n;++B){const F=B/g,M=Math.exp(-F*F/2);p.push(M),B===0?_+=M:B<v&&(_+=2*M)}for(let B=0;B<p.length;B++)p[B]=p[B]/_;d.envMap.value=e.texture,d.samples.value=v,d.weights.value=p,d.latitudinal.value=s==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=m,d.mipInt.value=y-n;const x=this._sizeLods[r],S=3*x*(r>y-Ii?r-y+Ii:0),C=4*(this._cubeSize-x);Br(t,S,C,3*x,2*x),l.setRenderTarget(t),l.render(c,Ts)}}function lf(a){const e=[],t=[],n=[];let r=a;const i=a-Ii+1+ro.length;for(let s=0;s<i;s++){const o=Math.pow(2,r);t.push(o);let l=1/o;s>a-Ii?l=ro[s-a+Ii-1]:s===0&&(l=0),n.push(l);const h=1/(o-2),u=-h,c=1+h,d=[u,u,c,u,c,c,u,u,c,c,u,c],f=6,m=6,g=3,v=2,p=1,_=new Float32Array(g*m*f),y=new Float32Array(v*m*f),x=new Float32Array(p*m*f);for(let C=0;C<f;C++){const B=C%3*2/3-1,F=C>2?0:-1,M=[B,F,0,B+2/3,F,0,B+2/3,F+1,0,B,F,0,B+2/3,F+1,0,B,F+1,0];_.set(M,g*m*C),y.set(d,v*m*C);const E=[C,C,C,C,C,C];x.set(E,p*m*C)}const S=new gn;S.setAttribute("position",new Ht(_,g)),S.setAttribute("uv",new Ht(y,v)),S.setAttribute("faceIndex",new Ht(x,p)),e.push(S),r>Ii&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function lo(a,e,t){const n=new ci(a,e,t);return n.texture.mapping=Yr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Br(a,e,t,n,r){a.viewport.set(e,t,n,r),a.scissor.set(e,t,n,r)}function cf(a,e,t){const n=new Float32Array($n),r=new Q(0,1,0);return new hi({name:"SphericalGaussianBlur",defines:{n:$n,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function co(){return new hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function ho(){return new hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function ea(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function hf(a){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,h=l===Ds||l===Us,u=l===Bi||l===Oi;if(h||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let c=e.get(o);return t===null&&(t=new oo(a)),c=h?t.fromEquirectangular(o,c):t.fromCubemap(o,c),e.set(o,c),c.texture}else{if(e.has(o))return e.get(o).texture;{const c=o.image;if(h&&c&&c.height>0||u&&c&&r(c)){t===null&&(t=new oo(a));const d=h?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",i),d.texture}else return null}}}return o}function r(o){let l=0;const h=6;for(let u=0;u<h;u++)o[u]!==void 0&&l++;return l===h}function i(o){const l=o.target;l.removeEventListener("dispose",i);const h=e.get(l);h!==void 0&&(e.delete(l),h.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function uf(a){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=a.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function df(a,e,t,n){const r={},i=new WeakMap;function s(c){const d=c.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",s),delete r[d.id];const f=i.get(d);f&&(e.remove(f),i.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(c,d){return r[d.id]===!0||(d.addEventListener("dispose",s),r[d.id]=!0,t.memory.geometries++),d}function l(c){const d=c.attributes;for(const m in d)e.update(d[m],a.ARRAY_BUFFER);const f=c.morphAttributes;for(const m in f){const g=f[m];for(let v=0,p=g.length;v<p;v++)e.update(g[v],a.ARRAY_BUFFER)}}function h(c){const d=[],f=c.index,m=c.attributes.position;let g=0;if(f!==null){const _=f.array;g=f.version;for(let y=0,x=_.length;y<x;y+=3){const S=_[y+0],C=_[y+1],B=_[y+2];d.push(S,C,C,B,B,S)}}else{const _=m.array;g=m.version;for(let y=0,x=_.length/3-1;y<x;y+=3){const S=y+0,C=y+1,B=y+2;d.push(S,C,C,B,B,S)}}const v=new(cl(d)?vl:ml)(d,1);v.version=g;const p=i.get(c);p&&e.remove(p),i.set(c,v)}function u(c){const d=i.get(c);if(d){const f=c.index;f!==null&&d.version<f.version&&h(c)}else h(c);return i.get(c)}return{get:o,update:l,getWireframeAttribute:u}}function ff(a,e,t,n){const r=n.isWebGL2;let i;function s(d){i=d}let o,l;function h(d){o=d.type,l=d.bytesPerElement}function u(d,f){a.drawElements(i,f,o,d*l),t.update(f,i,1)}function c(d,f,m){if(m===0)return;let g,v;if(r)g=a,v="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),v="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[v](i,f,o,d*l,m),t.update(f,i,m)}this.setMode=s,this.setIndex=h,this.render=u,this.renderInstances=c}function pf(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(i,s,o){switch(t.calls++,s){case a.TRIANGLES:t.triangles+=o*(i/3);break;case a.LINES:t.lines+=o*(i/2);break;case a.LINE_STRIP:t.lines+=o*(i-1);break;case a.LINE_LOOP:t.lines+=o*i;break;case a.POINTS:t.points+=o*i;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function mf(a,e){return a[0]-e[0]}function vf(a,e){return Math.abs(e[1])-Math.abs(a[1])}function gf(a,e,t){const n={},r=new Float32Array(8),i=new WeakMap,s=new vt,o=[];for(let h=0;h<8;h++)o[h]=[h,0];function l(h,u,c){const d=h.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=m!==void 0?m.length:0;let v=i.get(u);if(v===void 0||v.count!==g){let W=function(){I.dispose(),i.delete(u),u.removeEventListener("dispose",W)};var f=W;v!==void 0&&v.texture.dispose();const y=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],B=u.morphAttributes.normal||[],F=u.morphAttributes.color||[];let M=0;y===!0&&(M=1),x===!0&&(M=2),S===!0&&(M=3);let E=u.attributes.position.count*M,D=1;E>e.maxTextureSize&&(D=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const H=new Float32Array(E*D*4*g),I=new dl(H,E,D,g);I.type=Vn,I.needsUpdate=!0;const X=M*4;for(let te=0;te<g;te++){const O=C[te],U=B[te],J=F[te],j=E*D*4*te;for(let V=0;V<O.count;V++){const k=V*X;y===!0&&(s.fromBufferAttribute(O,V),H[j+k+0]=s.x,H[j+k+1]=s.y,H[j+k+2]=s.z,H[j+k+3]=0),x===!0&&(s.fromBufferAttribute(U,V),H[j+k+4]=s.x,H[j+k+5]=s.y,H[j+k+6]=s.z,H[j+k+7]=0),S===!0&&(s.fromBufferAttribute(J,V),H[j+k+8]=s.x,H[j+k+9]=s.y,H[j+k+10]=s.z,H[j+k+11]=J.itemSize===4?s.w:1)}}v={count:g,texture:I,size:new dt(E,D)},i.set(u,v),u.addEventListener("dispose",W)}let p=0;for(let y=0;y<d.length;y++)p+=d[y];const _=u.morphTargetsRelative?1:1-p;c.getUniforms().setValue(a,"morphTargetBaseInfluence",_),c.getUniforms().setValue(a,"morphTargetInfluences",d),c.getUniforms().setValue(a,"morphTargetsTexture",v.texture,t),c.getUniforms().setValue(a,"morphTargetsTextureSize",v.size)}else{const m=d===void 0?0:d.length;let g=n[u.id];if(g===void 0||g.length!==m){g=[];for(let x=0;x<m;x++)g[x]=[x,0];n[u.id]=g}for(let x=0;x<m;x++){const S=g[x];S[0]=x,S[1]=d[x]}g.sort(vf);for(let x=0;x<8;x++)x<m&&g[x][1]?(o[x][0]=g[x][0],o[x][1]=g[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(mf);const v=u.morphAttributes.position,p=u.morphAttributes.normal;let _=0;for(let x=0;x<8;x++){const S=o[x],C=S[0],B=S[1];C!==Number.MAX_SAFE_INTEGER&&B?(v&&u.getAttribute("morphTarget"+x)!==v[C]&&u.setAttribute("morphTarget"+x,v[C]),p&&u.getAttribute("morphNormal"+x)!==p[C]&&u.setAttribute("morphNormal"+x,p[C]),r[x]=B,_+=B):(v&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),p&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),r[x]=0)}const y=u.morphTargetsRelative?1:1-_;c.getUniforms().setValue(a,"morphTargetBaseInfluence",y),c.getUniforms().setValue(a,"morphTargetInfluences",r)}}return{update:l}}function _f(a,e,t,n){let r=new WeakMap;function i(l){const h=n.render.frame,u=l.geometry,c=e.get(l,u);return r.get(c)!==h&&(e.update(c),r.set(c,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,a.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,a.ARRAY_BUFFER)),c}function s(){r=new WeakMap}function o(l){const h=l.target;h.removeEventListener("dispose",o),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:i,dispose:s}}const Ml=new It,Sl=new dl,El=new ah,Tl=new xl,uo=[],fo=[],po=new Float32Array(16),mo=new Float32Array(9),vo=new Float32Array(4);function qi(a,e,t){const n=a[0];if(n<=0||n>0)return a;const r=e*t;let i=uo[r];if(i===void 0&&(i=new Float32Array(r),uo[r]=i),e!==0){n.toArray(i,0);for(let s=1,o=0;s!==e;++s)o+=t,a[s].toArray(i,o)}return i}function St(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function Et(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function $r(a,e){let t=fo[e];t===void 0&&(t=new Int32Array(e),fo[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function xf(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function yf(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;a.uniform2fv(this.addr,e),Et(t,e)}}function Mf(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;a.uniform3fv(this.addr,e),Et(t,e)}}function Sf(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;a.uniform4fv(this.addr,e),Et(t,e)}}function Ef(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(St(t,n))return;vo.set(n),a.uniformMatrix2fv(this.addr,!1,vo),Et(t,n)}}function Tf(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(St(t,n))return;mo.set(n),a.uniformMatrix3fv(this.addr,!1,mo),Et(t,n)}}function wf(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(St(t,n))return;po.set(n),a.uniformMatrix4fv(this.addr,!1,po),Et(t,n)}}function bf(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function Af(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;a.uniform2iv(this.addr,e),Et(t,e)}}function Rf(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;a.uniform3iv(this.addr,e),Et(t,e)}}function Cf(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;a.uniform4iv(this.addr,e),Et(t,e)}}function Lf(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function Pf(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;a.uniform2uiv(this.addr,e),Et(t,e)}}function If(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;a.uniform3uiv(this.addr,e),Et(t,e)}}function Nf(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;a.uniform4uiv(this.addr,e),Et(t,e)}}function Df(a,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(a.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||Ml,r)}function Uf(a,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(a.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||El,r)}function Ff(a,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(a.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Tl,r)}function Bf(a,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(a.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Sl,r)}function Of(a){switch(a){case 5126:return xf;case 35664:return yf;case 35665:return Mf;case 35666:return Sf;case 35674:return Ef;case 35675:return Tf;case 35676:return wf;case 5124:case 35670:return bf;case 35667:case 35671:return Af;case 35668:case 35672:return Rf;case 35669:case 35673:return Cf;case 5125:return Lf;case 36294:return Pf;case 36295:return If;case 36296:return Nf;case 35678:case 36198:case 36298:case 36306:case 35682:return Df;case 35679:case 36299:case 36307:return Uf;case 35680:case 36300:case 36308:case 36293:return Ff;case 36289:case 36303:case 36311:case 36292:return Bf}}function zf(a,e){a.uniform1fv(this.addr,e)}function Vf(a,e){const t=qi(e,this.size,2);a.uniform2fv(this.addr,t)}function Hf(a,e){const t=qi(e,this.size,3);a.uniform3fv(this.addr,t)}function Gf(a,e){const t=qi(e,this.size,4);a.uniform4fv(this.addr,t)}function kf(a,e){const t=qi(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function Wf(a,e){const t=qi(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function Xf(a,e){const t=qi(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function qf(a,e){a.uniform1iv(this.addr,e)}function jf(a,e){a.uniform2iv(this.addr,e)}function Yf(a,e){a.uniform3iv(this.addr,e)}function Kf(a,e){a.uniform4iv(this.addr,e)}function Zf(a,e){a.uniform1uiv(this.addr,e)}function $f(a,e){a.uniform2uiv(this.addr,e)}function Jf(a,e){a.uniform3uiv(this.addr,e)}function Qf(a,e){a.uniform4uiv(this.addr,e)}function ep(a,e,t){const n=this.cache,r=e.length,i=$r(t,r);St(n,i)||(a.uniform1iv(this.addr,i),Et(n,i));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||Ml,i[s])}function tp(a,e,t){const n=this.cache,r=e.length,i=$r(t,r);St(n,i)||(a.uniform1iv(this.addr,i),Et(n,i));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||El,i[s])}function np(a,e,t){const n=this.cache,r=e.length,i=$r(t,r);St(n,i)||(a.uniform1iv(this.addr,i),Et(n,i));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||Tl,i[s])}function ip(a,e,t){const n=this.cache,r=e.length,i=$r(t,r);St(n,i)||(a.uniform1iv(this.addr,i),Et(n,i));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||Sl,i[s])}function rp(a){switch(a){case 5126:return zf;case 35664:return Vf;case 35665:return Hf;case 35666:return Gf;case 35674:return kf;case 35675:return Wf;case 35676:return Xf;case 5124:case 35670:return qf;case 35667:case 35671:return jf;case 35668:case 35672:return Yf;case 35669:case 35673:return Kf;case 5125:return Zf;case 36294:return $f;case 36295:return Jf;case 36296:return Qf;case 35678:case 36198:case 36298:case 36306:case 35682:return ep;case 35679:case 36299:case 36307:return tp;case 35680:case 36300:case 36308:case 36293:return np;case 36289:case 36303:case 36311:case 36292:return ip}}class sp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Of(t.type)}}class ap{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=rp(t.type)}}class op{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let i=0,s=r.length;i!==s;++i){const o=r[i];o.setValue(e,t[o.id],n)}}}const bs=/(\w+)(\])?(\[|\.)?/g;function go(a,e){a.seq.push(e),a.map[e.id]=e}function lp(a,e,t){const n=a.name,r=n.length;for(bs.lastIndex=0;;){const i=bs.exec(n),s=bs.lastIndex;let o=i[1];const l=i[2]==="]",h=i[3];if(l&&(o=o|0),h===void 0||h==="["&&s+2===r){go(t,h===void 0?new sp(o,a,e):new ap(o,a,e));break}else{let c=t.map[o];c===void 0&&(c=new op(o),go(t,c)),t=c}}}class Xr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const i=e.getActiveUniform(t,r),s=e.getUniformLocation(t,i.name);lp(i,s,this)}}setValue(e,t,n,r){const i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,s=t.length;i!==s;++i){const o=t[i],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,i=e.length;r!==i;++r){const s=e[r];s.id in t&&n.push(s)}return n}}function _o(a,e,t){const n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}let cp=0;function hp(a,e){const t=a.split(`
`),n=[],r=Math.max(e-6,0),i=Math.min(e+6,t.length);for(let s=r;s<i;s++){const o=s+1;n.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return n.join(`
`)}function up(a){switch(a){case vn:return["Linear","( value )"];case Ke:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",a),["Linear","( value )"]}}function xo(a,e,t){const n=a.getShaderParameter(e,a.COMPILE_STATUS),r=a.getShaderInfoLog(e).trim();if(n&&r==="")return"";const i=/ERROR: 0:(\d+)/.exec(r);if(i){const s=parseInt(i[1]);return t.toUpperCase()+`

`+r+`

`+hp(a.getShaderSource(e),s)}else return r}function dp(a,e){const t=up(e);return"vec4 "+a+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function fp(a,e){let t;switch(e){case fc:t="Linear";break;case pc:t="Reinhard";break;case mc:t="OptimizedCineon";break;case vc:t="ACESFilmic";break;case gc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function pp(a){return[a.extensionDerivatives||a.envMapCubeUVHeight||a.bumpMap||a.normalMapTangentSpace||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(rr).join(`
`)}function mp(a){const e=[];for(const t in a){const n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function vp(a,e){const t={},n=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const i=a.getActiveAttrib(e,r),s=i.name;let o=1;i.type===a.FLOAT_MAT2&&(o=2),i.type===a.FLOAT_MAT3&&(o=3),i.type===a.FLOAT_MAT4&&(o=4),t[s]={type:i.type,location:a.getAttribLocation(e,s),locationSize:o}}return t}function rr(a){return a!==""}function yo(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mo(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hs(a){return a.replace(gp,_p)}function _p(a,e){const t=nt[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Hs(t)}const xp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function So(a){return a.replace(xp,yp)}function yp(a,e,t,n){let r="";for(let i=parseInt(e);i<parseInt(t);i++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+i+" ]").replace(/UNROLLED_LOOP_INDEX/g,i);return r}function Eo(a){let e="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Mp(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===Jo?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===Xl?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===bn&&(e="SHADOWMAP_TYPE_VSM"),e}function Sp(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Bi:case Oi:e="ENVMAP_TYPE_CUBE";break;case Yr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ep(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Oi:e="ENVMAP_MODE_REFRACTION";break}return e}function Tp(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case Ys:e="ENVMAP_BLENDING_MULTIPLY";break;case uc:e="ENVMAP_BLENDING_MIX";break;case dc:e="ENVMAP_BLENDING_ADD";break}return e}function wp(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function bp(a,e,t,n){const r=a.getContext(),i=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=Mp(t),h=Sp(t),u=Ep(t),c=Tp(t),d=wp(t),f=t.isWebGL2?"":pp(t),m=mp(i),g=r.createProgram();let v,p,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=[m].filter(rr).join(`
`),v.length>0&&(v+=`
`),p=[f,m].filter(rr).join(`
`),p.length>0&&(p+=`
`)):(v=[Eo(t),"#define SHADER_NAME "+t.shaderName,m,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rr).join(`
`),p=[f,Eo(t),"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Rn?"#define TONE_MAPPING":"",t.toneMapping!==Rn?nt.tonemapping_pars_fragment:"",t.toneMapping!==Rn?fp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.encodings_pars_fragment,dp("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(rr).join(`
`)),s=Hs(s),s=yo(s,t),s=Mo(s,t),o=Hs(o),o=yo(o,t),o=Mo(o,t),s=So(s),o=So(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,v=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,p=["#define varying in",t.glslVersion===Ha?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ha?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=_+v+s,x=_+p+o,S=_o(r,r.VERTEX_SHADER,y),C=_o(r,r.FRAGMENT_SHADER,x);if(r.attachShader(g,S),r.attachShader(g,C),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g),a.debug.checkShaderErrors){const M=r.getProgramInfoLog(g).trim(),E=r.getShaderInfoLog(S).trim(),D=r.getShaderInfoLog(C).trim();let H=!0,I=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(H=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(r,g,S,C);else{const X=xo(r,S,"vertex"),W=xo(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+X+`
`+W)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(E===""||D==="")&&(I=!1);I&&(this.diagnostics={runnable:H,programLog:M,vertexShader:{log:E,prefix:v},fragmentShader:{log:D,prefix:p}})}r.deleteShader(S),r.deleteShader(C);let B;this.getUniforms=function(){return B===void 0&&(B=new Xr(r,g)),B};let F;return this.getAttributes=function(){return F===void 0&&(F=vp(r,g)),F},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.name=t.shaderName,this.id=cp++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=C,this}let Ap=0;class Rp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),i=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Cp(e),t.set(e,n)),n}}class Cp{constructor(e){this.id=Ap++,this.code=e,this.usedTimes=0}}function Lp(a,e,t,n,r,i,s){const o=new fl,l=new Rp,h=[],u=r.isWebGL2,c=r.logarithmicDepthBuffer,d=r.vertexTextures;let f=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return M===1?"uv1":M===2?"uv2":M===3?"uv3":"uv"}function v(M,E,D,H,I){const X=H.fog,W=I.geometry,te=M.isMeshStandardMaterial?H.environment:null,O=(M.isMeshStandardMaterial?t:e).get(M.envMap||te),U=O&&O.mapping===Yr?O.image.height:null,J=m[M.type];M.precision!==null&&(f=r.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const j=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,V=j!==void 0?j.length:0;let k=0;W.morphAttributes.position!==void 0&&(k=1),W.morphAttributes.normal!==void 0&&(k=2),W.morphAttributes.color!==void 0&&(k=3);let b,A,R,G;if(J){const st=fn[J];b=st.vertexShader,A=st.fragmentShader}else b=M.vertexShader,A=M.fragmentShader,l.update(M),R=l.getVertexShaderID(M),G=l.getFragmentShaderID(M);const P=a.getRenderTarget(),ee=I.isInstancedMesh===!0,K=!!M.map,Z=!!M.matcap,ie=!!O,Te=!!M.aoMap,pe=!!M.lightMap,ge=!!M.bumpMap,ce=!!M.normalMap,ve=!!M.displacementMap,ke=!!M.emissiveMap,De=!!M.metalnessMap,Ge=!!M.roughnessMap,Ee=M.clearcoat>0,qe=M.iridescence>0,N=M.sheen>0,w=M.transmission>0,ne=Ee&&!!M.clearcoatMap,ue=Ee&&!!M.clearcoatNormalMap,me=Ee&&!!M.clearcoatRoughnessMap,ye=qe&&!!M.iridescenceMap,Fe=qe&&!!M.iridescenceThicknessMap,Ce=N&&!!M.sheenColorMap,de=N&&!!M.sheenRoughnessMap,Be=!!M.specularMap,Ve=!!M.specularColorMap,He=!!M.specularIntensityMap,Ie=w&&!!M.transmissionMap,ze=w&&!!M.thicknessMap,Ze=!!M.gradientMap,tt=!!M.alphaMap,ct=M.alphaTest>0,Y=!!M.extensions,le=!!W.attributes.uv1,xe=!!W.attributes.uv2,be=!!W.attributes.uv3;return{isWebGL2:u,shaderID:J,shaderName:M.type,vertexShader:b,fragmentShader:A,defines:M.defines,customVertexShaderID:R,customFragmentShaderID:G,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,instancing:ee,instancingColor:ee&&I.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:P===null?a.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:vn,map:K,matcap:Z,envMap:ie,envMapMode:ie&&O.mapping,envMapCubeUVHeight:U,aoMap:Te,lightMap:pe,bumpMap:ge,normalMap:ce,displacementMap:d&&ve,emissiveMap:ke,normalMapObjectSpace:ce&&M.normalMapType===Bc,normalMapTangentSpace:ce&&M.normalMapType===Ks,metalnessMap:De,roughnessMap:Ge,clearcoat:Ee,clearcoatMap:ne,clearcoatNormalMap:ue,clearcoatRoughnessMap:me,iridescence:qe,iridescenceMap:ye,iridescenceThicknessMap:Fe,sheen:N,sheenColorMap:Ce,sheenRoughnessMap:de,specularMap:Be,specularColorMap:Ve,specularIntensityMap:He,transmission:w,transmissionMap:Ie,thicknessMap:ze,gradientMap:Ze,opaque:M.transparent===!1&&M.blending===Ni,alphaMap:tt,alphaTest:ct,combine:M.combine,mapUv:K&&g(M.map.channel),aoMapUv:Te&&g(M.aoMap.channel),lightMapUv:pe&&g(M.lightMap.channel),bumpMapUv:ge&&g(M.bumpMap.channel),normalMapUv:ce&&g(M.normalMap.channel),displacementMapUv:ve&&g(M.displacementMap.channel),emissiveMapUv:ke&&g(M.emissiveMap.channel),metalnessMapUv:De&&g(M.metalnessMap.channel),roughnessMapUv:Ge&&g(M.roughnessMap.channel),clearcoatMapUv:ne&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:ue&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:de&&g(M.sheenRoughnessMap.channel),specularMapUv:Be&&g(M.specularMap.channel),specularColorMapUv:Ve&&g(M.specularColorMap.channel),specularIntensityMapUv:He&&g(M.specularIntensityMap.channel),transmissionMapUv:Ie&&g(M.transmissionMap.channel),thicknessMapUv:ze&&g(M.thicknessMap.channel),alphaMapUv:tt&&g(M.alphaMap.channel),vertexTangents:ce&&!!W.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,vertexUv1s:le,vertexUv2s:xe,vertexUv3s:be,pointsUvs:I.isPoints===!0&&!!W.attributes.uv&&(K||tt),fog:!!X,useFog:M.fog===!0,fogExp2:X&&X.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:c,skinning:I.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:k,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:a.shadowMap.enabled&&D.length>0,shadowMapType:a.shadowMap.type,toneMapping:M.toneMapped?a.toneMapping:Rn,useLegacyLights:a.useLegacyLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===pn,flipSided:M.side===Xt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:Y&&M.extensions.derivatives===!0,extensionFragDepth:Y&&M.extensions.fragDepth===!0,extensionDrawBuffers:Y&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:Y&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){const E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(const D in M.defines)E.push(D),E.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(_(E,M),y(E,M),E.push(a.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function _(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function y(M,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),M.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.useLegacyLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),M.push(o.mask)}function x(M){const E=m[M.type];let D;if(E){const H=fn[E];D=_h.clone(H.uniforms)}else D=M.uniforms;return D}function S(M,E){let D;for(let H=0,I=h.length;H<I;H++){const X=h[H];if(X.cacheKey===E){D=X,++D.usedTimes;break}}return D===void 0&&(D=new bp(a,E,M,i),h.push(D)),D}function C(M){if(--M.usedTimes===0){const E=h.indexOf(M);h[E]=h[h.length-1],h.pop(),M.destroy()}}function B(M){l.remove(M)}function F(){l.dispose()}return{getParameters:v,getProgramCacheKey:p,getUniforms:x,acquireProgram:S,releaseProgram:C,releaseShaderCache:B,programs:h,dispose:F}}function Pp(){let a=new WeakMap;function e(i){let s=a.get(i);return s===void 0&&(s={},a.set(i,s)),s}function t(i){a.delete(i)}function n(i,s,o){a.get(i)[s]=o}function r(){a=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Ip(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function To(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function wo(){const a=[];let e=0;const t=[],n=[],r=[];function i(){e=0,t.length=0,n.length=0,r.length=0}function s(c,d,f,m,g,v){let p=a[e];return p===void 0?(p={id:c.id,object:c,geometry:d,material:f,groupOrder:m,renderOrder:c.renderOrder,z:g,group:v},a[e]=p):(p.id=c.id,p.object=c,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=c.renderOrder,p.z=g,p.group=v),e++,p}function o(c,d,f,m,g,v){const p=s(c,d,f,m,g,v);f.transmission>0?n.push(p):f.transparent===!0?r.push(p):t.push(p)}function l(c,d,f,m,g,v){const p=s(c,d,f,m,g,v);f.transmission>0?n.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function h(c,d){t.length>1&&t.sort(c||Ip),n.length>1&&n.sort(d||To),r.length>1&&r.sort(d||To)}function u(){for(let c=e,d=a.length;c<d;c++){const f=a[c];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:r,init:i,push:o,unshift:l,finish:u,sort:h}}function Np(){let a=new WeakMap;function e(n,r){const i=a.get(n);let s;return i===void 0?(s=new wo,a.set(n,[s])):r>=i.length?(s=new wo,i.push(s)):s=i[r],s}function t(){a=new WeakMap}return{get:e,dispose:t}}function Dp(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Q,color:new $e};break;case"SpotLight":t={position:new Q,direction:new Q,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Q,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Q,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return a[e.id]=t,t}}}function Up(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let Fp=0;function Bp(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function Op(a,e){const t=new Dp,n=Up(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new Q);const i=new Q,s=new rt,o=new rt;function l(u,c){let d=0,f=0,m=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let g=0,v=0,p=0,_=0,y=0,x=0,S=0,C=0,B=0,F=0;u.sort(Bp);const M=c===!0?Math.PI:1;for(let D=0,H=u.length;D<H;D++){const I=u[D],X=I.color,W=I.intensity,te=I.distance,O=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=X.r*W*M,f+=X.g*W*M,m+=X.b*W*M;else if(I.isLightProbe)for(let U=0;U<9;U++)r.probe[U].addScaledVector(I.sh.coefficients[U],W);else if(I.isDirectionalLight){const U=t.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity*M),I.castShadow){const J=I.shadow,j=n.get(I);j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,r.directionalShadow[g]=j,r.directionalShadowMap[g]=O,r.directionalShadowMatrix[g]=I.shadow.matrix,x++}r.directional[g]=U,g++}else if(I.isSpotLight){const U=t.get(I);U.position.setFromMatrixPosition(I.matrixWorld),U.color.copy(X).multiplyScalar(W*M),U.distance=te,U.coneCos=Math.cos(I.angle),U.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),U.decay=I.decay,r.spot[p]=U;const J=I.shadow;if(I.map&&(r.spotLightMap[B]=I.map,B++,J.updateMatrices(I),I.castShadow&&F++),r.spotLightMatrix[p]=J.matrix,I.castShadow){const j=n.get(I);j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,r.spotShadow[p]=j,r.spotShadowMap[p]=O,C++}p++}else if(I.isRectAreaLight){const U=t.get(I);U.color.copy(X).multiplyScalar(W),U.halfWidth.set(I.width*.5,0,0),U.halfHeight.set(0,I.height*.5,0),r.rectArea[_]=U,_++}else if(I.isPointLight){const U=t.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity*M),U.distance=I.distance,U.decay=I.decay,I.castShadow){const J=I.shadow,j=n.get(I);j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,j.shadowCameraNear=J.camera.near,j.shadowCameraFar=J.camera.far,r.pointShadow[v]=j,r.pointShadowMap[v]=O,r.pointShadowMatrix[v]=I.shadow.matrix,S++}r.point[v]=U,v++}else if(I.isHemisphereLight){const U=t.get(I);U.skyColor.copy(I.color).multiplyScalar(W*M),U.groundColor.copy(I.groundColor).multiplyScalar(W*M),r.hemi[y]=U,y++}}_>0&&(e.isWebGL2||a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=f,r.ambient[2]=m;const E=r.hash;(E.directionalLength!==g||E.pointLength!==v||E.spotLength!==p||E.rectAreaLength!==_||E.hemiLength!==y||E.numDirectionalShadows!==x||E.numPointShadows!==S||E.numSpotShadows!==C||E.numSpotMaps!==B)&&(r.directional.length=g,r.spot.length=p,r.rectArea.length=_,r.point.length=v,r.hemi.length=y,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=S,r.spotLightMatrix.length=C+B-F,r.spotLightMap.length=B,r.numSpotLightShadowsWithMaps=F,E.directionalLength=g,E.pointLength=v,E.spotLength=p,E.rectAreaLength=_,E.hemiLength=y,E.numDirectionalShadows=x,E.numPointShadows=S,E.numSpotShadows=C,E.numSpotMaps=B,r.version=Fp++)}function h(u,c){let d=0,f=0,m=0,g=0,v=0;const p=c.matrixWorldInverse;for(let _=0,y=u.length;_<y;_++){const x=u[_];if(x.isDirectionalLight){const S=r.directional[d];S.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),d++}else if(x.isSpotLight){const S=r.spot[m];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),m++}else if(x.isRectAreaLight){const S=r.rectArea[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),o.identity(),s.copy(x.matrixWorld),s.premultiply(p),o.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const S=r.point[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){const S=r.hemi[v];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(p),v++}}}return{setup:l,setupView:h,state:r}}function bo(a,e){const t=new Op(a,e),n=[],r=[];function i(){n.length=0,r.length=0}function s(c){n.push(c)}function o(c){r.push(c)}function l(c){t.setup(n,c)}function h(c){t.setupView(n,c)}return{init:i,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:h,pushLight:s,pushShadow:o}}function zp(a,e){let t=new WeakMap;function n(i,s=0){const o=t.get(i);let l;return o===void 0?(l=new bo(a,e),t.set(i,[l])):s>=o.length?(l=new bo(a,e),o.push(l)):l=o[s],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class Vp extends un{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Hp extends un{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Gp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Wp(a,e,t){let n=new Js;const r=new dt,i=new dt,s=new vt,o=new Vp({depthPacking:Fc}),l=new Hp,h={},u=t.maxTextureSize,c={[Ln]:Xt,[Xt]:Ln,[pn]:pn},d=new hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:Gp,fragmentShader:kp}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new gn;m.setAttribute("position",new Ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Vt(m,d),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jo;let p=this.type;this.render=function(S,C,B){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||S.length===0)return;const F=a.getRenderTarget(),M=a.getActiveCubeFace(),E=a.getActiveMipmapLevel(),D=a.state;D.setBlending(Hn),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const H=p!==bn&&this.type===bn,I=p===bn&&this.type!==bn;for(let X=0,W=S.length;X<W;X++){const te=S[X],O=te.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const U=O.getFrameExtents();if(r.multiply(U),i.copy(O.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(i.x=Math.floor(u/U.x),r.x=i.x*U.x,O.mapSize.x=i.x),r.y>u&&(i.y=Math.floor(u/U.y),r.y=i.y*U.y,O.mapSize.y=i.y)),O.map===null||H===!0||I===!0){const j=this.type!==bn?{minFilter:At,magFilter:At}:{};O.map!==null&&O.map.dispose(),O.map=new ci(r.x,r.y,j),O.map.texture.name=te.name+".shadowMap",O.camera.updateProjectionMatrix()}a.setRenderTarget(O.map),a.clear();const J=O.getViewportCount();for(let j=0;j<J;j++){const V=O.getViewport(j);s.set(i.x*V.x,i.y*V.y,i.x*V.z,i.y*V.w),D.viewport(s),O.updateMatrices(te,j),n=O.getFrustum(),x(C,B,O.camera,te,this.type)}O.isPointLightShadow!==!0&&this.type===bn&&_(O,B),O.needsUpdate=!1}p=this.type,v.needsUpdate=!1,a.setRenderTarget(F,M,E)};function _(S,C){const B=e.update(g);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new ci(r.x,r.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,a.setRenderTarget(S.mapPass),a.clear(),a.renderBufferDirect(C,null,B,d,g,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,a.setRenderTarget(S.map),a.clear(),a.renderBufferDirect(C,null,B,f,g,null)}function y(S,C,B,F){let M=null;const E=B.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(E!==void 0)M=E;else if(M=B.isPointLight===!0?l:o,a.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const D=M.uuid,H=C.uuid;let I=h[D];I===void 0&&(I={},h[D]=I);let X=I[H];X===void 0&&(X=M.clone(),I[H]=X),M=X}if(M.visible=C.visible,M.wireframe=C.wireframe,F===bn?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:c[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,B.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const D=a.properties.get(M);D.light=B}return M}function x(S,C,B,F,M){if(S.visible===!1)return;if(S.layers.test(C.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&M===bn)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,S.matrixWorld);const H=e.update(S),I=S.material;if(Array.isArray(I)){const X=H.groups;for(let W=0,te=X.length;W<te;W++){const O=X[W],U=I[O.materialIndex];if(U&&U.visible){const J=y(S,U,F,M);a.renderBufferDirect(B,null,H,J,S,O)}}}else if(I.visible){const X=y(S,I,F,M);a.renderBufferDirect(B,null,H,X,S,null)}}const D=S.children;for(let H=0,I=D.length;H<I;H++)x(D[H],C,B,F,M)}}function Xp(a,e,t){const n=t.isWebGL2;function r(){let Y=!1;const le=new vt;let xe=null;const be=new vt(0,0,0,0);return{setMask:function(Oe){xe!==Oe&&!Y&&(a.colorMask(Oe,Oe,Oe,Oe),xe=Oe)},setLocked:function(Oe){Y=Oe},setClear:function(Oe,st,at,_t,Bt){Bt===!0&&(Oe*=_t,st*=_t,at*=_t),le.set(Oe,st,at,_t),be.equals(le)===!1&&(a.clearColor(Oe,st,at,_t),be.copy(le))},reset:function(){Y=!1,xe=null,be.set(-1,0,0,0)}}}function i(){let Y=!1,le=null,xe=null,be=null;return{setTest:function(Oe){Oe?P(a.DEPTH_TEST):ee(a.DEPTH_TEST)},setMask:function(Oe){le!==Oe&&!Y&&(a.depthMask(Oe),le=Oe)},setFunc:function(Oe){if(xe!==Oe){switch(Oe){case rc:a.depthFunc(a.NEVER);break;case sc:a.depthFunc(a.ALWAYS);break;case ac:a.depthFunc(a.LESS);break;case Ns:a.depthFunc(a.LEQUAL);break;case oc:a.depthFunc(a.EQUAL);break;case lc:a.depthFunc(a.GEQUAL);break;case cc:a.depthFunc(a.GREATER);break;case hc:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}xe=Oe}},setLocked:function(Oe){Y=Oe},setClear:function(Oe){be!==Oe&&(a.clearDepth(Oe),be=Oe)},reset:function(){Y=!1,le=null,xe=null,be=null}}}function s(){let Y=!1,le=null,xe=null,be=null,Oe=null,st=null,at=null,_t=null,Bt=null;return{setTest:function(Qe){Y||(Qe?P(a.STENCIL_TEST):ee(a.STENCIL_TEST))},setMask:function(Qe){le!==Qe&&!Y&&(a.stencilMask(Qe),le=Qe)},setFunc:function(Qe,re,he){(xe!==Qe||be!==re||Oe!==he)&&(a.stencilFunc(Qe,re,he),xe=Qe,be=re,Oe=he)},setOp:function(Qe,re,he){(st!==Qe||at!==re||_t!==he)&&(a.stencilOp(Qe,re,he),st=Qe,at=re,_t=he)},setLocked:function(Qe){Y=Qe},setClear:function(Qe){Bt!==Qe&&(a.clearStencil(Qe),Bt=Qe)},reset:function(){Y=!1,le=null,xe=null,be=null,Oe=null,st=null,at=null,_t=null,Bt=null}}}const o=new r,l=new i,h=new s,u=new WeakMap,c=new WeakMap;let d={},f={},m=new WeakMap,g=[],v=null,p=!1,_=null,y=null,x=null,S=null,C=null,B=null,F=null,M=!1,E=null,D=null,H=null,I=null,X=null;const W=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,O=0;const U=a.getParameter(a.VERSION);U.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(U)[1]),te=O>=1):U.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),te=O>=2);let J=null,j={};const V=a.getParameter(a.SCISSOR_BOX),k=a.getParameter(a.VIEWPORT),b=new vt().fromArray(V),A=new vt().fromArray(k);function R(Y,le,xe,be){const Oe=new Uint8Array(4),st=a.createTexture();a.bindTexture(Y,st),a.texParameteri(Y,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(Y,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let at=0;at<xe;at++)n&&(Y===a.TEXTURE_3D||Y===a.TEXTURE_2D_ARRAY)?a.texImage3D(le,0,a.RGBA,1,1,be,0,a.RGBA,a.UNSIGNED_BYTE,Oe):a.texImage2D(le+at,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Oe);return st}const G={};G[a.TEXTURE_2D]=R(a.TEXTURE_2D,a.TEXTURE_2D,1),G[a.TEXTURE_CUBE_MAP]=R(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(G[a.TEXTURE_2D_ARRAY]=R(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),G[a.TEXTURE_3D]=R(a.TEXTURE_3D,a.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),h.setClear(0),P(a.DEPTH_TEST),l.setFunc(Ns),ve(!1),ke(ca),P(a.CULL_FACE),ge(Hn);function P(Y){d[Y]!==!0&&(a.enable(Y),d[Y]=!0)}function ee(Y){d[Y]!==!1&&(a.disable(Y),d[Y]=!1)}function K(Y,le){return f[Y]!==le?(a.bindFramebuffer(Y,le),f[Y]=le,n&&(Y===a.DRAW_FRAMEBUFFER&&(f[a.FRAMEBUFFER]=le),Y===a.FRAMEBUFFER&&(f[a.DRAW_FRAMEBUFFER]=le)),!0):!1}function Z(Y,le){let xe=g,be=!1;if(Y)if(xe=m.get(le),xe===void 0&&(xe=[],m.set(le,xe)),Y.isWebGLMultipleRenderTargets){const Oe=Y.texture;if(xe.length!==Oe.length||xe[0]!==a.COLOR_ATTACHMENT0){for(let st=0,at=Oe.length;st<at;st++)xe[st]=a.COLOR_ATTACHMENT0+st;xe.length=Oe.length,be=!0}}else xe[0]!==a.COLOR_ATTACHMENT0&&(xe[0]=a.COLOR_ATTACHMENT0,be=!0);else xe[0]!==a.BACK&&(xe[0]=a.BACK,be=!0);be&&(t.isWebGL2?a.drawBuffers(xe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(xe))}function ie(Y){return v!==Y?(a.useProgram(Y),v=Y,!0):!1}const Te={[Pi]:a.FUNC_ADD,[jl]:a.FUNC_SUBTRACT,[Yl]:a.FUNC_REVERSE_SUBTRACT};if(n)Te[fa]=a.MIN,Te[pa]=a.MAX;else{const Y=e.get("EXT_blend_minmax");Y!==null&&(Te[fa]=Y.MIN_EXT,Te[pa]=Y.MAX_EXT)}const pe={[Kl]:a.ZERO,[Zl]:a.ONE,[$l]:a.SRC_COLOR,[Qo]:a.SRC_ALPHA,[ic]:a.SRC_ALPHA_SATURATE,[tc]:a.DST_COLOR,[Ql]:a.DST_ALPHA,[Jl]:a.ONE_MINUS_SRC_COLOR,[el]:a.ONE_MINUS_SRC_ALPHA,[nc]:a.ONE_MINUS_DST_COLOR,[ec]:a.ONE_MINUS_DST_ALPHA};function ge(Y,le,xe,be,Oe,st,at,_t){if(Y===Hn){p===!0&&(ee(a.BLEND),p=!1);return}if(p===!1&&(P(a.BLEND),p=!0),Y!==ql){if(Y!==_||_t!==M){if((y!==Pi||C!==Pi)&&(a.blendEquation(a.FUNC_ADD),y=Pi,C=Pi),_t)switch(Y){case Ni:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case ha:a.blendFunc(a.ONE,a.ONE);break;case ua:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case da:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case Ni:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case ha:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case ua:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case da:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}x=null,S=null,B=null,F=null,_=Y,M=_t}return}Oe=Oe||le,st=st||xe,at=at||be,(le!==y||Oe!==C)&&(a.blendEquationSeparate(Te[le],Te[Oe]),y=le,C=Oe),(xe!==x||be!==S||st!==B||at!==F)&&(a.blendFuncSeparate(pe[xe],pe[be],pe[st],pe[at]),x=xe,S=be,B=st,F=at),_=Y,M=!1}function ce(Y,le){Y.side===pn?ee(a.CULL_FACE):P(a.CULL_FACE);let xe=Y.side===Xt;le&&(xe=!xe),ve(xe),Y.blending===Ni&&Y.transparent===!1?ge(Hn):ge(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.premultipliedAlpha),l.setFunc(Y.depthFunc),l.setTest(Y.depthTest),l.setMask(Y.depthWrite),o.setMask(Y.colorWrite);const be=Y.stencilWrite;h.setTest(be),be&&(h.setMask(Y.stencilWriteMask),h.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),h.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),Ge(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?P(a.SAMPLE_ALPHA_TO_COVERAGE):ee(a.SAMPLE_ALPHA_TO_COVERAGE)}function ve(Y){E!==Y&&(Y?a.frontFace(a.CW):a.frontFace(a.CCW),E=Y)}function ke(Y){Y!==kl?(P(a.CULL_FACE),Y!==D&&(Y===ca?a.cullFace(a.BACK):Y===Wl?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):ee(a.CULL_FACE),D=Y}function De(Y){Y!==H&&(te&&a.lineWidth(Y),H=Y)}function Ge(Y,le,xe){Y?(P(a.POLYGON_OFFSET_FILL),(I!==le||X!==xe)&&(a.polygonOffset(le,xe),I=le,X=xe)):ee(a.POLYGON_OFFSET_FILL)}function Ee(Y){Y?P(a.SCISSOR_TEST):ee(a.SCISSOR_TEST)}function qe(Y){Y===void 0&&(Y=a.TEXTURE0+W-1),J!==Y&&(a.activeTexture(Y),J=Y)}function N(Y,le,xe){xe===void 0&&(J===null?xe=a.TEXTURE0+W-1:xe=J);let be=j[xe];be===void 0&&(be={type:void 0,texture:void 0},j[xe]=be),(be.type!==Y||be.texture!==le)&&(J!==xe&&(a.activeTexture(xe),J=xe),a.bindTexture(Y,le||G[Y]),be.type=Y,be.texture=le)}function w(){const Y=j[J];Y!==void 0&&Y.type!==void 0&&(a.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function ne(){try{a.compressedTexImage2D.apply(a,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ue(){try{a.compressedTexImage3D.apply(a,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function me(){try{a.texSubImage2D.apply(a,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ye(){try{a.texSubImage3D.apply(a,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Fe(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ce(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function de(){try{a.texStorage2D.apply(a,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Be(){try{a.texStorage3D.apply(a,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ve(){try{a.texImage2D.apply(a,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function He(){try{a.texImage3D.apply(a,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ie(Y){b.equals(Y)===!1&&(a.scissor(Y.x,Y.y,Y.z,Y.w),b.copy(Y))}function ze(Y){A.equals(Y)===!1&&(a.viewport(Y.x,Y.y,Y.z,Y.w),A.copy(Y))}function Ze(Y,le){let xe=c.get(le);xe===void 0&&(xe=new WeakMap,c.set(le,xe));let be=xe.get(Y);be===void 0&&(be=a.getUniformBlockIndex(le,Y.name),xe.set(Y,be))}function tt(Y,le){const be=c.get(le).get(Y);u.get(le)!==be&&(a.uniformBlockBinding(le,be,Y.__bindingPointIndex),u.set(le,be))}function ct(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),n===!0&&(a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),d={},J=null,j={},f={},m=new WeakMap,g=[],v=null,p=!1,_=null,y=null,x=null,S=null,C=null,B=null,F=null,M=!1,E=null,D=null,H=null,I=null,X=null,b.set(0,0,a.canvas.width,a.canvas.height),A.set(0,0,a.canvas.width,a.canvas.height),o.reset(),l.reset(),h.reset()}return{buffers:{color:o,depth:l,stencil:h},enable:P,disable:ee,bindFramebuffer:K,drawBuffers:Z,useProgram:ie,setBlending:ge,setMaterial:ce,setFlipSided:ve,setCullFace:ke,setLineWidth:De,setPolygonOffset:Ge,setScissorTest:Ee,activeTexture:qe,bindTexture:N,unbindTexture:w,compressedTexImage2D:ne,compressedTexImage3D:ue,texImage2D:Ve,texImage3D:He,updateUBOMapping:Ze,uniformBlockBinding:tt,texStorage2D:de,texStorage3D:Be,texSubImage2D:me,texSubImage3D:ye,compressedTexSubImage2D:Fe,compressedTexSubImage3D:Ce,scissor:Ie,viewport:ze,reset:ct}}function qp(a,e,t,n,r,i,s){const o=r.isWebGL2,l=r.maxTextures,h=r.maxCubemapSize,u=r.maxTextureSize,c=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new WeakMap;let g;const v=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(N,w){return p?new OffscreenCanvas(N,w):ur("canvas")}function y(N,w,ne,ue){let me=1;if((N.width>ue||N.height>ue)&&(me=ue/Math.max(N.width,N.height)),me<1||w===!0)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap){const ye=w?ll:Math.floor,Fe=ye(me*N.width),Ce=ye(me*N.height);g===void 0&&(g=_(Fe,Ce));const de=ne?_(Fe,Ce):g;return de.width=Fe,de.height=Ce,de.getContext("2d").drawImage(N,0,0,Fe,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+Fe+"x"+Ce+")."),de}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),N;return N}function x(N){return Vs(N.width)&&Vs(N.height)}function S(N){return o?!1:N.wrapS!==en||N.wrapT!==en||N.minFilter!==At&&N.minFilter!==kt}function C(N,w){return N.generateMipmaps&&w&&N.minFilter!==At&&N.minFilter!==kt}function B(N){a.generateMipmap(N)}function F(N,w,ne,ue,me=!1){if(o===!1)return w;if(N!==null){if(a[N]!==void 0)return a[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ye=w;return w===a.RED&&(ne===a.FLOAT&&(ye=a.R32F),ne===a.HALF_FLOAT&&(ye=a.R16F),ne===a.UNSIGNED_BYTE&&(ye=a.R8)),w===a.RG&&(ne===a.FLOAT&&(ye=a.RG32F),ne===a.HALF_FLOAT&&(ye=a.RG16F),ne===a.UNSIGNED_BYTE&&(ye=a.RG8)),w===a.RGBA&&(ne===a.FLOAT&&(ye=a.RGBA32F),ne===a.HALF_FLOAT&&(ye=a.RGBA16F),ne===a.UNSIGNED_BYTE&&(ye=ue===Ke&&me===!1?a.SRGB8_ALPHA8:a.RGBA8),ne===a.UNSIGNED_SHORT_4_4_4_4&&(ye=a.RGBA4),ne===a.UNSIGNED_SHORT_5_5_5_1&&(ye=a.RGB5_A1)),(ye===a.R16F||ye===a.R32F||ye===a.RG16F||ye===a.RG32F||ye===a.RGBA16F||ye===a.RGBA32F)&&e.get("EXT_color_buffer_float"),ye}function M(N,w,ne){return C(N,ne)===!0||N.isFramebufferTexture&&N.minFilter!==At&&N.minFilter!==kt?Math.log2(Math.max(w.width,w.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?w.mipmaps.length:1}function E(N){return N===At||N===Fs||N===Wr?a.NEAREST:a.LINEAR}function D(N){const w=N.target;w.removeEventListener("dispose",D),I(w),w.isVideoTexture&&m.delete(w)}function H(N){const w=N.target;w.removeEventListener("dispose",H),W(w)}function I(N){const w=n.get(N);if(w.__webglInit===void 0)return;const ne=N.source,ue=v.get(ne);if(ue){const me=ue[w.__cacheKey];me.usedTimes--,me.usedTimes===0&&X(N),Object.keys(ue).length===0&&v.delete(ne)}n.remove(N)}function X(N){const w=n.get(N);a.deleteTexture(w.__webglTexture);const ne=N.source,ue=v.get(ne);delete ue[w.__cacheKey],s.memory.textures--}function W(N){const w=N.texture,ne=n.get(N),ue=n.get(w);if(ue.__webglTexture!==void 0&&(a.deleteTexture(ue.__webglTexture),s.memory.textures--),N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let me=0;me<6;me++)a.deleteFramebuffer(ne.__webglFramebuffer[me]),ne.__webglDepthbuffer&&a.deleteRenderbuffer(ne.__webglDepthbuffer[me]);else{if(a.deleteFramebuffer(ne.__webglFramebuffer),ne.__webglDepthbuffer&&a.deleteRenderbuffer(ne.__webglDepthbuffer),ne.__webglMultisampledFramebuffer&&a.deleteFramebuffer(ne.__webglMultisampledFramebuffer),ne.__webglColorRenderbuffer)for(let me=0;me<ne.__webglColorRenderbuffer.length;me++)ne.__webglColorRenderbuffer[me]&&a.deleteRenderbuffer(ne.__webglColorRenderbuffer[me]);ne.__webglDepthRenderbuffer&&a.deleteRenderbuffer(ne.__webglDepthRenderbuffer)}if(N.isWebGLMultipleRenderTargets)for(let me=0,ye=w.length;me<ye;me++){const Fe=n.get(w[me]);Fe.__webglTexture&&(a.deleteTexture(Fe.__webglTexture),s.memory.textures--),n.remove(w[me])}n.remove(w),n.remove(N)}let te=0;function O(){te=0}function U(){const N=te;return N>=l&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l),te+=1,N}function J(N){const w=[];return w.push(N.wrapS),w.push(N.wrapT),w.push(N.wrapR||0),w.push(N.magFilter),w.push(N.minFilter),w.push(N.anisotropy),w.push(N.internalFormat),w.push(N.format),w.push(N.type),w.push(N.generateMipmaps),w.push(N.premultiplyAlpha),w.push(N.flipY),w.push(N.unpackAlignment),w.push(N.colorSpace),w.join()}function j(N,w){const ne=n.get(N);if(N.isVideoTexture&&Ee(N),N.isRenderTargetTexture===!1&&N.version>0&&ne.__version!==N.version){const ue=N.image;if(ue===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(ne,N,w);return}}t.bindTexture(a.TEXTURE_2D,ne.__webglTexture,a.TEXTURE0+w)}function V(N,w){const ne=n.get(N);if(N.version>0&&ne.__version!==N.version){ee(ne,N,w);return}t.bindTexture(a.TEXTURE_2D_ARRAY,ne.__webglTexture,a.TEXTURE0+w)}function k(N,w){const ne=n.get(N);if(N.version>0&&ne.__version!==N.version){ee(ne,N,w);return}t.bindTexture(a.TEXTURE_3D,ne.__webglTexture,a.TEXTURE0+w)}function b(N,w){const ne=n.get(N);if(N.version>0&&ne.__version!==N.version){K(ne,N,w);return}t.bindTexture(a.TEXTURE_CUBE_MAP,ne.__webglTexture,a.TEXTURE0+w)}const A={[zi]:a.REPEAT,[en]:a.CLAMP_TO_EDGE,[qr]:a.MIRRORED_REPEAT},R={[At]:a.NEAREST,[Fs]:a.NEAREST_MIPMAP_NEAREST,[Wr]:a.NEAREST_MIPMAP_LINEAR,[kt]:a.LINEAR,[nl]:a.LINEAR_MIPMAP_NEAREST,[oi]:a.LINEAR_MIPMAP_LINEAR};function G(N,w,ne){if(ne?(a.texParameteri(N,a.TEXTURE_WRAP_S,A[w.wrapS]),a.texParameteri(N,a.TEXTURE_WRAP_T,A[w.wrapT]),(N===a.TEXTURE_3D||N===a.TEXTURE_2D_ARRAY)&&a.texParameteri(N,a.TEXTURE_WRAP_R,A[w.wrapR]),a.texParameteri(N,a.TEXTURE_MAG_FILTER,R[w.magFilter]),a.texParameteri(N,a.TEXTURE_MIN_FILTER,R[w.minFilter])):(a.texParameteri(N,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(N,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),(N===a.TEXTURE_3D||N===a.TEXTURE_2D_ARRAY)&&a.texParameteri(N,a.TEXTURE_WRAP_R,a.CLAMP_TO_EDGE),(w.wrapS!==en||w.wrapT!==en)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(N,a.TEXTURE_MAG_FILTER,E(w.magFilter)),a.texParameteri(N,a.TEXTURE_MIN_FILTER,E(w.minFilter)),w.minFilter!==At&&w.minFilter!==kt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ue=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===At||w.minFilter!==Wr&&w.minFilter!==oi||w.type===Vn&&e.has("OES_texture_float_linear")===!1||o===!1&&w.type===cr&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(a.texParameterf(N,ue.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function P(N,w){let ne=!1;N.__webglInit===void 0&&(N.__webglInit=!0,w.addEventListener("dispose",D));const ue=w.source;let me=v.get(ue);me===void 0&&(me={},v.set(ue,me));const ye=J(w);if(ye!==N.__cacheKey){me[ye]===void 0&&(me[ye]={texture:a.createTexture(),usedTimes:0},s.memory.textures++,ne=!0),me[ye].usedTimes++;const Fe=me[N.__cacheKey];Fe!==void 0&&(me[N.__cacheKey].usedTimes--,Fe.usedTimes===0&&X(w)),N.__cacheKey=ye,N.__webglTexture=me[ye].texture}return ne}function ee(N,w,ne){let ue=a.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ue=a.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ue=a.TEXTURE_3D);const me=P(N,w),ye=w.source;t.bindTexture(ue,N.__webglTexture,a.TEXTURE0+ne);const Fe=n.get(ye);if(ye.version!==Fe.__version||me===!0){t.activeTexture(a.TEXTURE0+ne),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,w.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,w.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.NONE);const Ce=S(w)&&x(w.image)===!1;let de=y(w.image,Ce,!1,u);de=qe(w,de);const Be=x(de)||o,Ve=i.convert(w.format,w.colorSpace);let He=i.convert(w.type),Ie=F(w.internalFormat,Ve,He,w.colorSpace);G(ue,w,Be);let ze;const Ze=w.mipmaps,tt=o&&w.isVideoTexture!==!0,ct=Fe.__version===void 0||me===!0,Y=M(w,de,Be);if(w.isDepthTexture)Ie=a.DEPTH_COMPONENT,o?w.type===Vn?Ie=a.DEPTH_COMPONENT32F:w.type===Jn?Ie=a.DEPTH_COMPONENT24:w.type===Di?Ie=a.DEPTH24_STENCIL8:Ie=a.DEPTH_COMPONENT16:w.type===Vn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===ti&&Ie===a.DEPTH_COMPONENT&&w.type!==il&&w.type!==Jn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Jn,He=i.convert(w.type)),w.format===Vi&&Ie===a.DEPTH_COMPONENT&&(Ie=a.DEPTH_STENCIL,w.type!==Di&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Di,He=i.convert(w.type))),ct&&(tt?t.texStorage2D(a.TEXTURE_2D,1,Ie,de.width,de.height):t.texImage2D(a.TEXTURE_2D,0,Ie,de.width,de.height,0,Ve,He,null));else if(w.isDataTexture)if(Ze.length>0&&Be){tt&&ct&&t.texStorage2D(a.TEXTURE_2D,Y,Ie,Ze[0].width,Ze[0].height);for(let le=0,xe=Ze.length;le<xe;le++)ze=Ze[le],tt?t.texSubImage2D(a.TEXTURE_2D,le,0,0,ze.width,ze.height,Ve,He,ze.data):t.texImage2D(a.TEXTURE_2D,le,Ie,ze.width,ze.height,0,Ve,He,ze.data);w.generateMipmaps=!1}else tt?(ct&&t.texStorage2D(a.TEXTURE_2D,Y,Ie,de.width,de.height),t.texSubImage2D(a.TEXTURE_2D,0,0,0,de.width,de.height,Ve,He,de.data)):t.texImage2D(a.TEXTURE_2D,0,Ie,de.width,de.height,0,Ve,He,de.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){tt&&ct&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Y,Ie,Ze[0].width,Ze[0].height,de.depth);for(let le=0,xe=Ze.length;le<xe;le++)ze=Ze[le],w.format!==tn?Ve!==null?tt?t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,le,0,0,0,ze.width,ze.height,de.depth,Ve,ze.data,0,0):t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,le,Ie,ze.width,ze.height,de.depth,0,ze.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?t.texSubImage3D(a.TEXTURE_2D_ARRAY,le,0,0,0,ze.width,ze.height,de.depth,Ve,He,ze.data):t.texImage3D(a.TEXTURE_2D_ARRAY,le,Ie,ze.width,ze.height,de.depth,0,Ve,He,ze.data)}else{tt&&ct&&t.texStorage2D(a.TEXTURE_2D,Y,Ie,Ze[0].width,Ze[0].height);for(let le=0,xe=Ze.length;le<xe;le++)ze=Ze[le],w.format!==tn?Ve!==null?tt?t.compressedTexSubImage2D(a.TEXTURE_2D,le,0,0,ze.width,ze.height,Ve,ze.data):t.compressedTexImage2D(a.TEXTURE_2D,le,Ie,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?t.texSubImage2D(a.TEXTURE_2D,le,0,0,ze.width,ze.height,Ve,He,ze.data):t.texImage2D(a.TEXTURE_2D,le,Ie,ze.width,ze.height,0,Ve,He,ze.data)}else if(w.isDataArrayTexture)tt?(ct&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Y,Ie,de.width,de.height,de.depth),t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Ve,He,de.data)):t.texImage3D(a.TEXTURE_2D_ARRAY,0,Ie,de.width,de.height,de.depth,0,Ve,He,de.data);else if(w.isData3DTexture)tt?(ct&&t.texStorage3D(a.TEXTURE_3D,Y,Ie,de.width,de.height,de.depth),t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Ve,He,de.data)):t.texImage3D(a.TEXTURE_3D,0,Ie,de.width,de.height,de.depth,0,Ve,He,de.data);else if(w.isFramebufferTexture){if(ct)if(tt)t.texStorage2D(a.TEXTURE_2D,Y,Ie,de.width,de.height);else{let le=de.width,xe=de.height;for(let be=0;be<Y;be++)t.texImage2D(a.TEXTURE_2D,be,Ie,le,xe,0,Ve,He,null),le>>=1,xe>>=1}}else if(Ze.length>0&&Be){tt&&ct&&t.texStorage2D(a.TEXTURE_2D,Y,Ie,Ze[0].width,Ze[0].height);for(let le=0,xe=Ze.length;le<xe;le++)ze=Ze[le],tt?t.texSubImage2D(a.TEXTURE_2D,le,0,0,Ve,He,ze):t.texImage2D(a.TEXTURE_2D,le,Ie,Ve,He,ze);w.generateMipmaps=!1}else tt?(ct&&t.texStorage2D(a.TEXTURE_2D,Y,Ie,de.width,de.height),t.texSubImage2D(a.TEXTURE_2D,0,0,0,Ve,He,de)):t.texImage2D(a.TEXTURE_2D,0,Ie,Ve,He,de);C(w,Be)&&B(ue),Fe.__version=ye.version,w.onUpdate&&w.onUpdate(w)}N.__version=w.version}function K(N,w,ne){if(w.image.length!==6)return;const ue=P(N,w),me=w.source;t.bindTexture(a.TEXTURE_CUBE_MAP,N.__webglTexture,a.TEXTURE0+ne);const ye=n.get(me);if(me.version!==ye.__version||ue===!0){t.activeTexture(a.TEXTURE0+ne),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,w.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,w.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.NONE);const Fe=w.isCompressedTexture||w.image[0].isCompressedTexture,Ce=w.image[0]&&w.image[0].isDataTexture,de=[];for(let le=0;le<6;le++)!Fe&&!Ce?de[le]=y(w.image[le],!1,!0,h):de[le]=Ce?w.image[le].image:w.image[le],de[le]=qe(w,de[le]);const Be=de[0],Ve=x(Be)||o,He=i.convert(w.format,w.colorSpace),Ie=i.convert(w.type),ze=F(w.internalFormat,He,Ie,w.colorSpace),Ze=o&&w.isVideoTexture!==!0,tt=ye.__version===void 0||ue===!0;let ct=M(w,Be,Ve);G(a.TEXTURE_CUBE_MAP,w,Ve);let Y;if(Fe){Ze&&tt&&t.texStorage2D(a.TEXTURE_CUBE_MAP,ct,ze,Be.width,Be.height);for(let le=0;le<6;le++){Y=de[le].mipmaps;for(let xe=0;xe<Y.length;xe++){const be=Y[xe];w.format!==tn?He!==null?Ze?t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+le,xe,0,0,be.width,be.height,He,be.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+le,xe,ze,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+le,xe,0,0,be.width,be.height,He,Ie,be.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+le,xe,ze,be.width,be.height,0,He,Ie,be.data)}}}else{Y=w.mipmaps,Ze&&tt&&(Y.length>0&&ct++,t.texStorage2D(a.TEXTURE_CUBE_MAP,ct,ze,de[0].width,de[0].height));for(let le=0;le<6;le++)if(Ce){Ze?t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,de[le].width,de[le].height,He,Ie,de[le].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,ze,de[le].width,de[le].height,0,He,Ie,de[le].data);for(let xe=0;xe<Y.length;xe++){const Oe=Y[xe].image[le].image;Ze?t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+le,xe+1,0,0,Oe.width,Oe.height,He,Ie,Oe.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+le,xe+1,ze,Oe.width,Oe.height,0,He,Ie,Oe.data)}}else{Ze?t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,He,Ie,de[le]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,ze,He,Ie,de[le]);for(let xe=0;xe<Y.length;xe++){const be=Y[xe];Ze?t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+le,xe+1,0,0,He,Ie,be.image[le]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+le,xe+1,ze,He,Ie,be.image[le])}}}C(w,Ve)&&B(a.TEXTURE_CUBE_MAP),ye.__version=me.version,w.onUpdate&&w.onUpdate(w)}N.__version=w.version}function Z(N,w,ne,ue,me){const ye=i.convert(ne.format,ne.colorSpace),Fe=i.convert(ne.type),Ce=F(ne.internalFormat,ye,Fe,ne.colorSpace);n.get(w).__hasExternalTextures||(me===a.TEXTURE_3D||me===a.TEXTURE_2D_ARRAY?t.texImage3D(me,0,Ce,w.width,w.height,w.depth,0,ye,Fe,null):t.texImage2D(me,0,Ce,w.width,w.height,0,ye,Fe,null)),t.bindFramebuffer(a.FRAMEBUFFER,N),Ge(w)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ue,me,n.get(ne).__webglTexture,0,De(w)):(me===a.TEXTURE_2D||me>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,ue,me,n.get(ne).__webglTexture,0),t.bindFramebuffer(a.FRAMEBUFFER,null)}function ie(N,w,ne){if(a.bindRenderbuffer(a.RENDERBUFFER,N),w.depthBuffer&&!w.stencilBuffer){let ue=a.DEPTH_COMPONENT16;if(ne||Ge(w)){const me=w.depthTexture;me&&me.isDepthTexture&&(me.type===Vn?ue=a.DEPTH_COMPONENT32F:me.type===Jn&&(ue=a.DEPTH_COMPONENT24));const ye=De(w);Ge(w)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,ye,ue,w.width,w.height):a.renderbufferStorageMultisample(a.RENDERBUFFER,ye,ue,w.width,w.height)}else a.renderbufferStorage(a.RENDERBUFFER,ue,w.width,w.height);a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.RENDERBUFFER,N)}else if(w.depthBuffer&&w.stencilBuffer){const ue=De(w);ne&&Ge(w)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,ue,a.DEPTH24_STENCIL8,w.width,w.height):Ge(w)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,ue,a.DEPTH24_STENCIL8,w.width,w.height):a.renderbufferStorage(a.RENDERBUFFER,a.DEPTH_STENCIL,w.width,w.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.RENDERBUFFER,N)}else{const ue=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let me=0;me<ue.length;me++){const ye=ue[me],Fe=i.convert(ye.format,ye.colorSpace),Ce=i.convert(ye.type),de=F(ye.internalFormat,Fe,Ce,ye.colorSpace),Be=De(w);ne&&Ge(w)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,Be,de,w.width,w.height):Ge(w)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Be,de,w.width,w.height):a.renderbufferStorage(a.RENDERBUFFER,de,w.width,w.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function Te(N,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(a.FRAMEBUFFER,N),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),j(w.depthTexture,0);const ue=n.get(w.depthTexture).__webglTexture,me=De(w);if(w.depthTexture.format===ti)Ge(w)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,ue,0,me):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,ue,0);else if(w.depthTexture.format===Vi)Ge(w)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,ue,0,me):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,ue,0);else throw new Error("Unknown depthTexture format")}function pe(N){const w=n.get(N),ne=N.isWebGLCubeRenderTarget===!0;if(N.depthTexture&&!w.__autoAllocateDepthBuffer){if(ne)throw new Error("target.depthTexture not supported in Cube render targets");Te(w.__webglFramebuffer,N)}else if(ne){w.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)t.bindFramebuffer(a.FRAMEBUFFER,w.__webglFramebuffer[ue]),w.__webglDepthbuffer[ue]=a.createRenderbuffer(),ie(w.__webglDepthbuffer[ue],N,!1)}else t.bindFramebuffer(a.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=a.createRenderbuffer(),ie(w.__webglDepthbuffer,N,!1);t.bindFramebuffer(a.FRAMEBUFFER,null)}function ge(N,w,ne){const ue=n.get(N);w!==void 0&&Z(ue.__webglFramebuffer,N,N.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D),ne!==void 0&&pe(N)}function ce(N){const w=N.texture,ne=n.get(N),ue=n.get(w);N.addEventListener("dispose",H),N.isWebGLMultipleRenderTargets!==!0&&(ue.__webglTexture===void 0&&(ue.__webglTexture=a.createTexture()),ue.__version=w.version,s.memory.textures++);const me=N.isWebGLCubeRenderTarget===!0,ye=N.isWebGLMultipleRenderTargets===!0,Fe=x(N)||o;if(me){ne.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)ne.__webglFramebuffer[Ce]=a.createFramebuffer()}else{if(ne.__webglFramebuffer=a.createFramebuffer(),ye)if(r.drawBuffers){const Ce=N.texture;for(let de=0,Be=Ce.length;de<Be;de++){const Ve=n.get(Ce[de]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=a.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&N.samples>0&&Ge(N)===!1){const Ce=ye?w:[w];ne.__webglMultisampledFramebuffer=a.createFramebuffer(),ne.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let de=0;de<Ce.length;de++){const Be=Ce[de];ne.__webglColorRenderbuffer[de]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,ne.__webglColorRenderbuffer[de]);const Ve=i.convert(Be.format,Be.colorSpace),He=i.convert(Be.type),Ie=F(Be.internalFormat,Ve,He,Be.colorSpace,N.isXRRenderTarget===!0),ze=De(N);a.renderbufferStorageMultisample(a.RENDERBUFFER,ze,Ie,N.width,N.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+de,a.RENDERBUFFER,ne.__webglColorRenderbuffer[de])}a.bindRenderbuffer(a.RENDERBUFFER,null),N.depthBuffer&&(ne.__webglDepthRenderbuffer=a.createRenderbuffer(),ie(ne.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(me){t.bindTexture(a.TEXTURE_CUBE_MAP,ue.__webglTexture),G(a.TEXTURE_CUBE_MAP,w,Fe);for(let Ce=0;Ce<6;Ce++)Z(ne.__webglFramebuffer[Ce],N,w,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Ce);C(w,Fe)&&B(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){const Ce=N.texture;for(let de=0,Be=Ce.length;de<Be;de++){const Ve=Ce[de],He=n.get(Ve);t.bindTexture(a.TEXTURE_2D,He.__webglTexture),G(a.TEXTURE_2D,Ve,Fe),Z(ne.__webglFramebuffer,N,Ve,a.COLOR_ATTACHMENT0+de,a.TEXTURE_2D),C(Ve,Fe)&&B(a.TEXTURE_2D)}t.unbindTexture()}else{let Ce=a.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(o?Ce=N.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ce,ue.__webglTexture),G(Ce,w,Fe),Z(ne.__webglFramebuffer,N,w,a.COLOR_ATTACHMENT0,Ce),C(w,Fe)&&B(Ce),t.unbindTexture()}N.depthBuffer&&pe(N)}function ve(N){const w=x(N)||o,ne=N.isWebGLMultipleRenderTargets===!0?N.texture:[N.texture];for(let ue=0,me=ne.length;ue<me;ue++){const ye=ne[ue];if(C(ye,w)){const Fe=N.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:a.TEXTURE_2D,Ce=n.get(ye).__webglTexture;t.bindTexture(Fe,Ce),B(Fe),t.unbindTexture()}}}function ke(N){if(o&&N.samples>0&&Ge(N)===!1){const w=N.isWebGLMultipleRenderTargets?N.texture:[N.texture],ne=N.width,ue=N.height;let me=a.COLOR_BUFFER_BIT;const ye=[],Fe=N.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ce=n.get(N),de=N.isWebGLMultipleRenderTargets===!0;if(de)for(let Be=0;Be<w.length;Be++)t.bindFramebuffer(a.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Be,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,Ce.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Be,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Be=0;Be<w.length;Be++){ye.push(a.COLOR_ATTACHMENT0+Be),N.depthBuffer&&ye.push(Fe);const Ve=Ce.__ignoreDepthValues!==void 0?Ce.__ignoreDepthValues:!1;if(Ve===!1&&(N.depthBuffer&&(me|=a.DEPTH_BUFFER_BIT),N.stencilBuffer&&(me|=a.STENCIL_BUFFER_BIT)),de&&a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Ce.__webglColorRenderbuffer[Be]),Ve===!0&&(a.invalidateFramebuffer(a.READ_FRAMEBUFFER,[Fe]),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[Fe])),de){const He=n.get(w[Be]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,He,0)}a.blitFramebuffer(0,0,ne,ue,0,0,ne,ue,me,a.NEAREST),f&&a.invalidateFramebuffer(a.READ_FRAMEBUFFER,ye)}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),de)for(let Be=0;Be<w.length;Be++){t.bindFramebuffer(a.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Be,a.RENDERBUFFER,Ce.__webglColorRenderbuffer[Be]);const Ve=n.get(w[Be]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,Ce.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Be,a.TEXTURE_2D,Ve,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}}function De(N){return Math.min(c,N.samples)}function Ge(N){const w=n.get(N);return o&&N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ee(N){const w=s.render.frame;m.get(N)!==w&&(m.set(N,w),N.update())}function qe(N,w){const ne=N.colorSpace,ue=N.format,me=N.type;return N.isCompressedTexture===!0||N.format===zs||ne!==vn&&ne!==ii&&(ne===Ke?o===!1?e.has("EXT_sRGB")===!0&&ue===tn?(N.format=zs,N.minFilter=kt,N.generateMipmaps=!1):w=hl.sRGBToLinear(w):(ue!==tn||me!==li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ne)),w}this.allocateTextureUnit=U,this.resetTextureUnits=O,this.setTexture2D=j,this.setTexture2DArray=V,this.setTexture3D=k,this.setTextureCube=b,this.rebindTextures=ge,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=Z,this.useMultisampledRTT=Ge}function jp(a,e,t){const n=t.isWebGL2;function r(i,s=ii){let o;if(i===li)return a.UNSIGNED_BYTE;if(i===Mc)return a.UNSIGNED_SHORT_4_4_4_4;if(i===Sc)return a.UNSIGNED_SHORT_5_5_5_1;if(i===_c)return a.BYTE;if(i===xc)return a.SHORT;if(i===il)return a.UNSIGNED_SHORT;if(i===yc)return a.INT;if(i===Jn)return a.UNSIGNED_INT;if(i===Vn)return a.FLOAT;if(i===cr)return n?a.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(i===Ec)return a.ALPHA;if(i===tn)return a.RGBA;if(i===Tc)return a.LUMINANCE;if(i===wc)return a.LUMINANCE_ALPHA;if(i===ti)return a.DEPTH_COMPONENT;if(i===Vi)return a.DEPTH_STENCIL;if(i===zs)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(i===bc)return a.RED;if(i===Ac)return a.RED_INTEGER;if(i===Rc)return a.RG;if(i===Cc)return a.RG_INTEGER;if(i===Lc)return a.RGBA_INTEGER;if(i===es||i===ts||i===ns||i===is)if(s===Ke)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===es)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ts)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ns)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===is)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===es)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ts)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ns)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===is)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ma||i===va||i===ga||i===_a)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===ma)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===va)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ga)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===_a)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Pc)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===xa||i===ya)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===xa)return s===Ke?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===ya)return s===Ke?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ma||i===Sa||i===Ea||i===Ta||i===wa||i===ba||i===Aa||i===Ra||i===Ca||i===La||i===Pa||i===Ia||i===Na||i===Da)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Ma)return s===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Sa)return s===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ea)return s===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ta)return s===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===wa)return s===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ba)return s===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Aa)return s===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ra)return s===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ca)return s===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===La)return s===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Pa)return s===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ia)return s===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Na)return s===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Da)return s===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===rs)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===rs)return s===Ke?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(i===Ic||i===Ua||i===Fa||i===Ba)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===rs)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Ua)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Fa)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ba)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Di?n?a.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):a[i]!==void 0?a[i]:null}return{convert:r}}class Yp extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ei extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Kp={type:"move"};class As{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ei,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ei,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ei,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,s=null;const o=this._targetRay,l=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){s=!0;for(const g of e.hand.values()){const v=t.getJointPose(g,n),p=this._getHandJoint(h,g);v!==null&&(p.matrix.fromArray(v.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=v.radius),p.visible=v!==null}const u=h.joints["index-finger-tip"],c=h.joints["thumb-tip"],d=u.position.distanceTo(c.position),f=.02,m=.005;h.inputState.pinching&&d>f+m?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&d<=f-m&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Kp)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=i!==null),h!==null&&(h.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ei;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Zp extends It{constructor(e,t,n,r,i,s,o,l,h,u){if(u=u!==void 0?u:ti,u!==ti&&u!==Vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ti&&(n=Jn),n===void 0&&u===Vi&&(n=Di),super(null,r,i,s,o,l,u,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:At,this.minFilter=l!==void 0?l:At,this.flipY=!1,this.generateMipmaps=!1}}class $p extends Xi{constructor(e,t){super();const n=this;let r=null,i=1,s=null,o="local-floor",l=1,h=null,u=null,c=null,d=null,f=null,m=null;const g=t.getContextAttributes();let v=null,p=null;const _=[],y=[],x=new Set,S=new Map,C=new Wt;C.layers.enable(1),C.viewport=new vt;const B=new Wt;B.layers.enable(2),B.viewport=new vt;const F=[C,B],M=new Yp;M.layers.enable(1),M.layers.enable(2);let E=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(b){let A=_[b];return A===void 0&&(A=new As,_[b]=A),A.getTargetRaySpace()},this.getControllerGrip=function(b){let A=_[b];return A===void 0&&(A=new As,_[b]=A),A.getGripSpace()},this.getHand=function(b){let A=_[b];return A===void 0&&(A=new As,_[b]=A),A.getHandSpace()};function H(b){const A=y.indexOf(b.inputSource);if(A===-1)return;const R=_[A];R!==void 0&&(R.update(b.inputSource,b.frame,h||s),R.dispatchEvent({type:b.type,data:b.inputSource}))}function I(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",I),r.removeEventListener("inputsourceschange",X);for(let b=0;b<_.length;b++){const A=y[b];A!==null&&(y[b]=null,_[b].disconnect(A))}E=null,D=null,e.setRenderTarget(v),f=null,d=null,c=null,r=null,p=null,k.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(b){i=b,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(b){o=b,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||s},this.setReferenceSpace=function(b){h=b},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return c},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(b){if(r=b,r!==null){if(v=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",I),r.addEventListener("inputsourceschange",X),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const A={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,A),r.updateRenderState({baseLayer:f}),p=new ci(f.framebufferWidth,f.framebufferHeight,{format:tn,type:li,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let A=null,R=null,G=null;g.depth&&(G=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,A=g.stencil?Vi:ti,R=g.stencil?Di:Jn);const P={colorFormat:t.RGBA8,depthFormat:G,scaleFactor:i};c=new XRWebGLBinding(r,t),d=c.createProjectionLayer(P),r.updateRenderState({layers:[d]}),p=new ci(d.textureWidth,d.textureHeight,{format:tn,type:li,depthTexture:new Zp(d.textureWidth,d.textureHeight,R,void 0,void 0,void 0,void 0,void 0,void 0,A),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const ee=e.properties.get(p);ee.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),h=null,s=await r.requestReferenceSpace(o),k.setContext(r),k.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function X(b){for(let A=0;A<b.removed.length;A++){const R=b.removed[A],G=y.indexOf(R);G>=0&&(y[G]=null,_[G].disconnect(R))}for(let A=0;A<b.added.length;A++){const R=b.added[A];let G=y.indexOf(R);if(G===-1){for(let ee=0;ee<_.length;ee++)if(ee>=y.length){y.push(R),G=ee;break}else if(y[ee]===null){y[ee]=R,G=ee;break}if(G===-1)break}const P=_[G];P&&P.connect(R)}}const W=new Q,te=new Q;function O(b,A,R){W.setFromMatrixPosition(A.matrixWorld),te.setFromMatrixPosition(R.matrixWorld);const G=W.distanceTo(te),P=A.projectionMatrix.elements,ee=R.projectionMatrix.elements,K=P[14]/(P[10]-1),Z=P[14]/(P[10]+1),ie=(P[9]+1)/P[5],Te=(P[9]-1)/P[5],pe=(P[8]-1)/P[0],ge=(ee[8]+1)/ee[0],ce=K*pe,ve=K*ge,ke=G/(-pe+ge),De=ke*-pe;A.matrixWorld.decompose(b.position,b.quaternion,b.scale),b.translateX(De),b.translateZ(ke),b.matrixWorld.compose(b.position,b.quaternion,b.scale),b.matrixWorldInverse.copy(b.matrixWorld).invert();const Ge=K+ke,Ee=Z+ke,qe=ce-De,N=ve+(G-De),w=ie*Z/Ee*Ge,ne=Te*Z/Ee*Ge;b.projectionMatrix.makePerspective(qe,N,w,ne,Ge,Ee),b.projectionMatrixInverse.copy(b.projectionMatrix).invert()}function U(b,A){A===null?b.matrixWorld.copy(b.matrix):b.matrixWorld.multiplyMatrices(A.matrixWorld,b.matrix),b.matrixWorldInverse.copy(b.matrixWorld).invert()}this.updateCamera=function(b){if(r===null)return;M.near=B.near=C.near=b.near,M.far=B.far=C.far=b.far,(E!==M.near||D!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),E=M.near,D=M.far);const A=b.parent,R=M.cameras;U(M,A);for(let G=0;G<R.length;G++)U(R[G],A);R.length===2?O(M,C,B):M.projectionMatrix.copy(C.projectionMatrix),J(b,M,A)};function J(b,A,R){R===null?b.matrix.copy(A.matrixWorld):(b.matrix.copy(R.matrixWorld),b.matrix.invert(),b.matrix.multiply(A.matrixWorld)),b.matrix.decompose(b.position,b.quaternion,b.scale),b.updateMatrixWorld(!0);const G=b.children;for(let P=0,ee=G.length;P<ee;P++)G[P].updateMatrixWorld(!0);b.projectionMatrix.copy(A.projectionMatrix),b.projectionMatrixInverse.copy(A.projectionMatrixInverse),b.isPerspectiveCamera&&(b.fov=Gi*2*Math.atan(1/b.projectionMatrix.elements[5]),b.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(b){l=b,d!==null&&(d.fixedFoveation=b),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=b)},this.getPlanes=function(){return x};let j=null;function V(b,A){if(u=A.getViewerPose(h||s),m=A,u!==null){const R=u.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let G=!1;R.length!==M.cameras.length&&(M.cameras.length=0,G=!0);for(let P=0;P<R.length;P++){const ee=R[P];let K=null;if(f!==null)K=f.getViewport(ee);else{const ie=c.getViewSubImage(d,ee);K=ie.viewport,P===0&&(e.setRenderTargetTextures(p,ie.colorTexture,d.ignoreDepthValues?void 0:ie.depthStencilTexture),e.setRenderTarget(p))}let Z=F[P];Z===void 0&&(Z=new Wt,Z.layers.enable(P),Z.viewport=new vt,F[P]=Z),Z.matrix.fromArray(ee.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(ee.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(K.x,K.y,K.width,K.height),P===0&&(M.matrix.copy(Z.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),G===!0&&M.cameras.push(Z)}}for(let R=0;R<_.length;R++){const G=y[R],P=_[R];G!==null&&P!==void 0&&P.update(G,A,h||s)}if(j&&j(b,A),A.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:A.detectedPlanes});let R=null;for(const G of x)A.detectedPlanes.has(G)||(R===null&&(R=[]),R.push(G));if(R!==null)for(const G of R)x.delete(G),S.delete(G),n.dispatchEvent({type:"planeremoved",data:G});for(const G of A.detectedPlanes)if(!x.has(G))x.add(G),S.set(G,A.lastChangedTime),n.dispatchEvent({type:"planeadded",data:G});else{const P=S.get(G);G.lastChangedTime>P&&(S.set(G,G.lastChangedTime),n.dispatchEvent({type:"planechanged",data:G}))}}m=null}const k=new yl;k.setAnimationLoop(V),this.setAnimationLoop=function(b){j=b},this.dispose=function(){}}}function Jp(a,e){function t(v,p){v.matrixAutoUpdate===!0&&v.updateMatrix(),p.value.copy(v.matrix)}function n(v,p){p.color.getRGB(v.fogColor.value,gl(a)),p.isFog?(v.fogNear.value=p.near,v.fogFar.value=p.far):p.isFogExp2&&(v.fogDensity.value=p.density)}function r(v,p,_,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(v,p):p.isMeshToonMaterial?(i(v,p),c(v,p)):p.isMeshPhongMaterial?(i(v,p),u(v,p)):p.isMeshStandardMaterial?(i(v,p),d(v,p),p.isMeshPhysicalMaterial&&f(v,p,x)):p.isMeshMatcapMaterial?(i(v,p),m(v,p)):p.isMeshDepthMaterial?i(v,p):p.isMeshDistanceMaterial?(i(v,p),g(v,p)):p.isMeshNormalMaterial?i(v,p):p.isLineBasicMaterial?(s(v,p),p.isLineDashedMaterial&&o(v,p)):p.isPointsMaterial?l(v,p,_,y):p.isSpriteMaterial?h(v,p):p.isShadowMaterial?(v.color.value.copy(p.color),v.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(v,p){v.opacity.value=p.opacity,p.color&&v.diffuse.value.copy(p.color),p.emissive&&v.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(v.map.value=p.map,t(p.map,v.mapTransform)),p.alphaMap&&(v.alphaMap.value=p.alphaMap,t(p.alphaMap,v.alphaMapTransform)),p.bumpMap&&(v.bumpMap.value=p.bumpMap,t(p.bumpMap,v.bumpMapTransform),v.bumpScale.value=p.bumpScale,p.side===Xt&&(v.bumpScale.value*=-1)),p.normalMap&&(v.normalMap.value=p.normalMap,t(p.normalMap,v.normalMapTransform),v.normalScale.value.copy(p.normalScale),p.side===Xt&&v.normalScale.value.negate()),p.displacementMap&&(v.displacementMap.value=p.displacementMap,t(p.displacementMap,v.displacementMapTransform),v.displacementScale.value=p.displacementScale,v.displacementBias.value=p.displacementBias),p.emissiveMap&&(v.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,v.emissiveMapTransform)),p.specularMap&&(v.specularMap.value=p.specularMap,t(p.specularMap,v.specularMapTransform)),p.alphaTest>0&&(v.alphaTest.value=p.alphaTest);const _=e.get(p).envMap;if(_&&(v.envMap.value=_,v.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=p.reflectivity,v.ior.value=p.ior,v.refractionRatio.value=p.refractionRatio),p.lightMap){v.lightMap.value=p.lightMap;const y=a.useLegacyLights===!0?Math.PI:1;v.lightMapIntensity.value=p.lightMapIntensity*y,t(p.lightMap,v.lightMapTransform)}p.aoMap&&(v.aoMap.value=p.aoMap,v.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,v.aoMapTransform))}function s(v,p){v.diffuse.value.copy(p.color),v.opacity.value=p.opacity,p.map&&(v.map.value=p.map,t(p.map,v.mapTransform))}function o(v,p){v.dashSize.value=p.dashSize,v.totalSize.value=p.dashSize+p.gapSize,v.scale.value=p.scale}function l(v,p,_,y){v.diffuse.value.copy(p.color),v.opacity.value=p.opacity,v.size.value=p.size*_,v.scale.value=y*.5,p.map&&(v.map.value=p.map,t(p.map,v.uvTransform)),p.alphaMap&&(v.alphaMap.value=p.alphaMap),p.alphaTest>0&&(v.alphaTest.value=p.alphaTest)}function h(v,p){v.diffuse.value.copy(p.color),v.opacity.value=p.opacity,v.rotation.value=p.rotation,p.map&&(v.map.value=p.map,t(p.map,v.mapTransform)),p.alphaMap&&(v.alphaMap.value=p.alphaMap),p.alphaTest>0&&(v.alphaTest.value=p.alphaTest)}function u(v,p){v.specular.value.copy(p.specular),v.shininess.value=Math.max(p.shininess,1e-4)}function c(v,p){p.gradientMap&&(v.gradientMap.value=p.gradientMap)}function d(v,p){v.metalness.value=p.metalness,p.metalnessMap&&(v.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,v.metalnessMapTransform)),v.roughness.value=p.roughness,p.roughnessMap&&(v.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,v.roughnessMapTransform)),e.get(p).envMap&&(v.envMapIntensity.value=p.envMapIntensity)}function f(v,p,_){v.ior.value=p.ior,p.sheen>0&&(v.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),v.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(v.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,v.sheenColorMapTransform)),p.sheenRoughnessMap&&(v.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,v.sheenRoughnessMapTransform))),p.clearcoat>0&&(v.clearcoat.value=p.clearcoat,v.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(v.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,v.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(v.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Xt&&v.clearcoatNormalScale.value.negate())),p.iridescence>0&&(v.iridescence.value=p.iridescence,v.iridescenceIOR.value=p.iridescenceIOR,v.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(v.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,v.iridescenceMapTransform)),p.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),p.transmission>0&&(v.transmission.value=p.transmission,v.transmissionSamplerMap.value=_.texture,v.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(v.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,v.transmissionMapTransform)),v.thickness.value=p.thickness,p.thicknessMap&&(v.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=p.attenuationDistance,v.attenuationColor.value.copy(p.attenuationColor)),v.specularIntensity.value=p.specularIntensity,v.specularColor.value.copy(p.specularColor),p.specularColorMap&&(v.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,v.specularColorMapTransform)),p.specularIntensityMap&&(v.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,v.specularIntensityMapTransform))}function m(v,p){p.matcap&&(v.matcap.value=p.matcap)}function g(v,p){const _=e.get(p).light;v.referencePosition.value.setFromMatrixPosition(_.matrixWorld),v.nearDistance.value=_.shadow.camera.near,v.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Qp(a,e,t,n){let r={},i={},s=[];const o=t.isWebGL2?a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,y){const x=y.program;n.uniformBlockBinding(_,x)}function h(_,y){let x=r[_.id];x===void 0&&(m(_),x=u(_),r[_.id]=x,_.addEventListener("dispose",v));const S=y.program;n.updateUBOMapping(_,S);const C=e.render.frame;i[_.id]!==C&&(d(_),i[_.id]=C)}function u(_){const y=c();_.__bindingPointIndex=y;const x=a.createBuffer(),S=_.__size,C=_.usage;return a.bindBuffer(a.UNIFORM_BUFFER,x),a.bufferData(a.UNIFORM_BUFFER,S,C),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,y,x),x}function c(){for(let _=0;_<o;_++)if(s.indexOf(_)===-1)return s.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const y=r[_.id],x=_.uniforms,S=_.__cache;a.bindBuffer(a.UNIFORM_BUFFER,y);for(let C=0,B=x.length;C<B;C++){const F=x[C];if(f(F,C,S)===!0){const M=F.__offset,E=Array.isArray(F.value)?F.value:[F.value];let D=0;for(let H=0;H<E.length;H++){const I=E[H],X=g(I);typeof I=="number"?(F.__data[0]=I,a.bufferSubData(a.UNIFORM_BUFFER,M+D,F.__data)):I.isMatrix3?(F.__data[0]=I.elements[0],F.__data[1]=I.elements[1],F.__data[2]=I.elements[2],F.__data[3]=I.elements[0],F.__data[4]=I.elements[3],F.__data[5]=I.elements[4],F.__data[6]=I.elements[5],F.__data[7]=I.elements[0],F.__data[8]=I.elements[6],F.__data[9]=I.elements[7],F.__data[10]=I.elements[8],F.__data[11]=I.elements[0]):(I.toArray(F.__data,D),D+=X.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,M,F.__data)}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function f(_,y,x){const S=_.value;if(x[y]===void 0){if(typeof S=="number")x[y]=S;else{const C=Array.isArray(S)?S:[S],B=[];for(let F=0;F<C.length;F++)B.push(C[F].clone());x[y]=B}return!0}else if(typeof S=="number"){if(x[y]!==S)return x[y]=S,!0}else{const C=Array.isArray(x[y])?x[y]:[x[y]],B=Array.isArray(S)?S:[S];for(let F=0;F<C.length;F++){const M=C[F];if(M.equals(B[F])===!1)return M.copy(B[F]),!0}}return!1}function m(_){const y=_.uniforms;let x=0;const S=16;let C=0;for(let B=0,F=y.length;B<F;B++){const M=y[B],E={boundary:0,storage:0},D=Array.isArray(M.value)?M.value:[M.value];for(let H=0,I=D.length;H<I;H++){const X=D[H],W=g(X);E.boundary+=W.boundary,E.storage+=W.storage}if(M.__data=new Float32Array(E.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=x,B>0){C=x%S;const H=S-C;C!==0&&H-E.boundary<0&&(x+=S-C,M.__offset=x)}x+=E.storage}return C=x%S,C>0&&(x+=S-C),_.__size=x,_.__cache={},this}function g(_){const y={boundary:0,storage:0};return typeof _=="number"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function v(_){const y=_.target;y.removeEventListener("dispose",v);const x=s.indexOf(y.__bindingPointIndex);s.splice(x,1),a.deleteBuffer(r[y.id]),delete r[y.id],delete i[y.id]}function p(){for(const _ in r)a.deleteBuffer(r[_]);s=[],r={},i={}}return{bind:l,update:h,dispose:p}}function em(){const a=ur("canvas");return a.style.display="block",a}class wl{constructor(e={}){const{canvas:t=em(),context:n=null,depth:r=!0,stencil:i=!0,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:c=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=s;let f=null,m=null;const g=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Ke,this.useLegacyLights=!0,this.toneMapping=Rn,this.toneMappingExposure=1;const p=this;let _=!1,y=0,x=0,S=null,C=-1,B=null;const F=new vt,M=new vt;let E=null,D=t.width,H=t.height,I=1,X=null,W=null;const te=new vt(0,0,D,H),O=new vt(0,0,D,H);let U=!1;const J=new Js;let j=!1,V=!1,k=null;const b=new rt,A=new Q,R={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function G(){return S===null?I:1}let P=n;function ee(T,L){for(let q=0;q<T.length;q++){const z=T[q],$=t.getContext(z,L);if($!==null)return $}return null}try{const T={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${js}`),t.addEventListener("webglcontextlost",ze,!1),t.addEventListener("webglcontextrestored",Ze,!1),t.addEventListener("webglcontextcreationerror",tt,!1),P===null){const L=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&L.shift(),P=ee(L,T),P===null)throw ee(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}P.getShaderPrecisionFormat===void 0&&(P.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let K,Z,ie,Te,pe,ge,ce,ve,ke,De,Ge,Ee,qe,N,w,ne,ue,me,ye,Fe,Ce,de,Be,Ve;function He(){K=new uf(P),Z=new sf(P,K,e),K.init(Z),de=new jp(P,K,Z),ie=new Xp(P,K,Z),Te=new pf(P),pe=new Pp,ge=new qp(P,K,ie,pe,Z,de,Te),ce=new of(p),ve=new hf(p),ke=new wh(P,Z),Be=new nf(P,K,ke,Z),De=new df(P,ke,Te,Be),Ge=new _f(P,De,ke,Te),ye=new gf(P,Z,ge),ne=new af(pe),Ee=new Lp(p,ce,ve,K,Z,Be,ne),qe=new Jp(p,pe),N=new Np,w=new zp(K,Z),me=new tf(p,ce,ve,ie,Ge,d,l),ue=new Wp(p,Ge,Z),Ve=new Qp(P,Te,Z,ie),Fe=new rf(P,K,Te,Z),Ce=new ff(P,K,Te,Z),Te.programs=Ee.programs,p.capabilities=Z,p.extensions=K,p.properties=pe,p.renderLists=N,p.shadowMap=ue,p.state=ie,p.info=Te}He();const Ie=new $p(p,P);this.xr=Ie,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const T=K.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=K.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(T){T!==void 0&&(I=T,this.setSize(D,H,!1))},this.getSize=function(T){return T.set(D,H)},this.setSize=function(T,L,q=!0){if(Ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=T,H=L,t.width=Math.floor(T*I),t.height=Math.floor(L*I),q===!0&&(t.style.width=T+"px",t.style.height=L+"px"),this.setViewport(0,0,T,L)},this.getDrawingBufferSize=function(T){return T.set(D*I,H*I).floor()},this.setDrawingBufferSize=function(T,L,q){D=T,H=L,I=q,t.width=Math.floor(T*q),t.height=Math.floor(L*q),this.setViewport(0,0,T,L)},this.getCurrentViewport=function(T){return T.copy(F)},this.getViewport=function(T){return T.copy(te)},this.setViewport=function(T,L,q,z){T.isVector4?te.set(T.x,T.y,T.z,T.w):te.set(T,L,q,z),ie.viewport(F.copy(te).multiplyScalar(I).floor())},this.getScissor=function(T){return T.copy(O)},this.setScissor=function(T,L,q,z){T.isVector4?O.set(T.x,T.y,T.z,T.w):O.set(T,L,q,z),ie.scissor(M.copy(O).multiplyScalar(I).floor())},this.getScissorTest=function(){return U},this.setScissorTest=function(T){ie.setScissorTest(U=T)},this.setOpaqueSort=function(T){X=T},this.setTransparentSort=function(T){W=T},this.getClearColor=function(T){return T.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor.apply(me,arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha.apply(me,arguments)},this.clear=function(T=!0,L=!0,q=!0){let z=0;T&&(z|=P.COLOR_BUFFER_BIT),L&&(z|=P.DEPTH_BUFFER_BIT),q&&(z|=P.STENCIL_BUFFER_BIT),P.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ze,!1),t.removeEventListener("webglcontextrestored",Ze,!1),t.removeEventListener("webglcontextcreationerror",tt,!1),N.dispose(),w.dispose(),pe.dispose(),ce.dispose(),ve.dispose(),Ge.dispose(),Be.dispose(),Ve.dispose(),Ee.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",Oe),Ie.removeEventListener("sessionend",st),k&&(k.dispose(),k=null),at.stop()};function ze(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function Ze(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const T=Te.autoReset,L=ue.enabled,q=ue.autoUpdate,z=ue.needsUpdate,$=ue.type;He(),Te.autoReset=T,ue.enabled=L,ue.autoUpdate=q,ue.needsUpdate=z,ue.type=$}function tt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ct(T){const L=T.target;L.removeEventListener("dispose",ct),Y(L)}function Y(T){le(T),pe.remove(T)}function le(T){const L=pe.get(T).programs;L!==void 0&&(L.forEach(function(q){Ee.releaseProgram(q)}),T.isShaderMaterial&&Ee.releaseShaderCache(T))}this.renderBufferDirect=function(T,L,q,z,$,ae){L===null&&(L=R);const se=$.isMesh&&$.matrixWorld.determinant()<0,fe=We(T,L,q,z,$);ie.setMaterial(z,se);let Se=q.index,Ae=1;z.wireframe===!0&&(Se=De.getWireframeAttribute(q),Ae=2);const oe=q.drawRange,Re=q.attributes.position;let Ue=oe.start*Ae,it=(oe.start+oe.count)*Ae;ae!==null&&(Ue=Math.max(Ue,ae.start*Ae),it=Math.min(it,(ae.start+ae.count)*Ae)),Se!==null?(Ue=Math.max(Ue,0),it=Math.min(it,Se.count)):Re!=null&&(Ue=Math.max(Ue,0),it=Math.min(it,Re.count));const Xe=it-Ue;if(Xe<0||Xe===1/0)return;Be.setup($,z,fe,q,Se);let Je,Ne=Fe;if(Se!==null&&(Je=ke.get(Se),Ne=Ce,Ne.setIndex(Je)),$.isMesh)z.wireframe===!0?(ie.setLineWidth(z.wireframeLinewidth*G()),Ne.setMode(P.LINES)):Ne.setMode(P.TRIANGLES);else if($.isLine){let je=z.linewidth;je===void 0&&(je=1),ie.setLineWidth(je*G()),$.isLineSegments?Ne.setMode(P.LINES):$.isLineLoop?Ne.setMode(P.LINE_LOOP):Ne.setMode(P.LINE_STRIP)}else $.isPoints?Ne.setMode(P.POINTS):$.isSprite&&Ne.setMode(P.TRIANGLES);if($.isInstancedMesh)Ne.renderInstances(Ue,Xe,$.count);else if(q.isInstancedBufferGeometry){const je=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Nt=Math.min(q.instanceCount,je);Ne.renderInstances(Ue,Xe,Nt)}else Ne.render(Ue,Xe)},this.compile=function(T,L){function q(z,$,ae){z.transparent===!0&&z.side===pn&&z.forceSinglePass===!1?(z.side=Xt,z.needsUpdate=!0,_e(z,$,ae),z.side=Ln,z.needsUpdate=!0,_e(z,$,ae),z.side=pn):_e(z,$,ae)}m=w.get(T),m.init(),v.push(m),T.traverseVisible(function(z){z.isLight&&z.layers.test(L.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights(p.useLegacyLights),T.traverse(function(z){const $=z.material;if($)if(Array.isArray($))for(let ae=0;ae<$.length;ae++){const se=$[ae];q(se,T,z)}else q($,T,z)}),v.pop(),m=null};let xe=null;function be(T){xe&&xe(T)}function Oe(){at.stop()}function st(){at.start()}const at=new yl;at.setAnimationLoop(be),typeof self<"u"&&at.setContext(self),this.setAnimationLoop=function(T){xe=T,Ie.setAnimationLoop(T),T===null?at.stop():at.start()},Ie.addEventListener("sessionstart",Oe),Ie.addEventListener("sessionend",st),this.render=function(T,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(L),L=Ie.getCamera()),T.isScene===!0&&T.onBeforeRender(p,T,L,S),m=w.get(T,v.length),m.init(),v.push(m),b.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),J.setFromProjectionMatrix(b),V=this.localClippingEnabled,j=ne.init(this.clippingPlanes,V),f=N.get(T,g.length),f.init(),g.push(f),_t(T,L,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(X,W),j===!0&&ne.beginShadows();const q=m.state.shadowsArray;if(ue.render(q,T,L),j===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset(),me.render(f,T),m.setupLights(p.useLegacyLights),L.isArrayCamera){const z=L.cameras;for(let $=0,ae=z.length;$<ae;$++){const se=z[$];Bt(f,T,se,se.viewport)}}else Bt(f,T,L);S!==null&&(ge.updateMultisampleRenderTarget(S),ge.updateRenderTargetMipmap(S)),T.isScene===!0&&T.onAfterRender(p,T,L),Be.resetDefaultState(),C=-1,B=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,g.pop(),g.length>0?f=g[g.length-1]:f=null};function _t(T,L,q,z){if(T.visible===!1)return;if(T.layers.test(L.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(L);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||J.intersectsSprite(T)){z&&A.setFromMatrixPosition(T.matrixWorld).applyMatrix4(b);const se=Ge.update(T),fe=T.material;fe.visible&&f.push(T,se,fe,q,A.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||J.intersectsObject(T))){T.isSkinnedMesh&&T.skeleton.frame!==Te.render.frame&&(T.skeleton.update(),T.skeleton.frame=Te.render.frame);const se=Ge.update(T),fe=T.material;if(z&&(se.boundingSphere===null&&se.computeBoundingSphere(),A.copy(se.boundingSphere.center).applyMatrix4(T.matrixWorld).applyMatrix4(b)),Array.isArray(fe)){const Se=se.groups;for(let Ae=0,oe=Se.length;Ae<oe;Ae++){const Re=Se[Ae],Ue=fe[Re.materialIndex];Ue&&Ue.visible&&f.push(T,se,Ue,q,A.z,Re)}}else fe.visible&&f.push(T,se,fe,q,A.z,null)}}const ae=T.children;for(let se=0,fe=ae.length;se<fe;se++)_t(ae[se],L,q,z)}function Bt(T,L,q,z){const $=T.opaque,ae=T.transmissive,se=T.transparent;m.setupLightsView(q),j===!0&&ne.setGlobalState(p.clippingPlanes,q),ae.length>0&&Qe($,ae,L,q),z&&ie.viewport(F.copy(z)),$.length>0&&re($,L,q),ae.length>0&&re(ae,L,q),se.length>0&&re(se,L,q),ie.buffers.depth.setTest(!0),ie.buffers.depth.setMask(!0),ie.buffers.color.setMask(!0),ie.setPolygonOffset(!1)}function Qe(T,L,q,z){if(k===null){const fe=Z.isWebGL2;k=new ci(1024,1024,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")?cr:li,minFilter:oi,samples:fe&&o===!0?4:0})}const $=p.getRenderTarget();p.setRenderTarget(k),p.clear();const ae=p.toneMapping;p.toneMapping=Rn,re(T,q,z),ge.updateMultisampleRenderTarget(k),ge.updateRenderTargetMipmap(k);let se=!1;for(let fe=0,Se=L.length;fe<Se;fe++){const Ae=L[fe],oe=Ae.object,Re=Ae.geometry,Ue=Ae.material,it=Ae.group;if(Ue.side===pn&&oe.layers.test(z.layers)){const Xe=Ue.side;Ue.side=Xt,Ue.needsUpdate=!0,he(oe,q,z,Re,Ue,it),Ue.side=Xe,Ue.needsUpdate=!0,se=!0}}se===!0&&(ge.updateMultisampleRenderTarget(k),ge.updateRenderTargetMipmap(k)),p.setRenderTarget($),p.toneMapping=ae}function re(T,L,q){const z=L.isScene===!0?L.overrideMaterial:null;for(let $=0,ae=T.length;$<ae;$++){const se=T[$],fe=se.object,Se=se.geometry,Ae=z===null?se.material:z,oe=se.group;fe.layers.test(q.layers)&&he(fe,L,q,Se,Ae,oe)}}function he(T,L,q,z,$,ae){T.onBeforeRender(p,L,q,z,$,ae),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),$.onBeforeRender(p,L,q,z,T,ae),$.transparent===!0&&$.side===pn&&$.forceSinglePass===!1?($.side=Xt,$.needsUpdate=!0,p.renderBufferDirect(q,L,z,$,T,ae),$.side=Ln,$.needsUpdate=!0,p.renderBufferDirect(q,L,z,$,T,ae),$.side=pn):p.renderBufferDirect(q,L,z,$,T,ae),T.onAfterRender(p,L,q,z,$,ae)}function _e(T,L,q){L.isScene!==!0&&(L=R);const z=pe.get(T),$=m.state.lights,ae=m.state.shadowsArray,se=$.state.version,fe=Ee.getParameters(T,$.state,ae,L,q),Se=Ee.getProgramCacheKey(fe);let Ae=z.programs;z.environment=T.isMeshStandardMaterial?L.environment:null,z.fog=L.fog,z.envMap=(T.isMeshStandardMaterial?ve:ce).get(T.envMap||z.environment),Ae===void 0&&(T.addEventListener("dispose",ct),Ae=new Map,z.programs=Ae);let oe=Ae.get(Se);if(oe!==void 0){if(z.currentProgram===oe&&z.lightsStateVersion===se)return Me(T,fe),oe}else fe.uniforms=Ee.getUniforms(T),T.onBuild(q,fe,p),T.onBeforeCompile(fe,p),oe=Ee.acquireProgram(fe,Se),Ae.set(Se,oe),z.uniforms=fe.uniforms;const Re=z.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Re.clippingPlanes=ne.uniform),Me(T,fe),z.needsLights=we(T),z.lightsStateVersion=se,z.needsLights&&(Re.ambientLightColor.value=$.state.ambient,Re.lightProbe.value=$.state.probe,Re.directionalLights.value=$.state.directional,Re.directionalLightShadows.value=$.state.directionalShadow,Re.spotLights.value=$.state.spot,Re.spotLightShadows.value=$.state.spotShadow,Re.rectAreaLights.value=$.state.rectArea,Re.ltc_1.value=$.state.rectAreaLTC1,Re.ltc_2.value=$.state.rectAreaLTC2,Re.pointLights.value=$.state.point,Re.pointLightShadows.value=$.state.pointShadow,Re.hemisphereLights.value=$.state.hemi,Re.directionalShadowMap.value=$.state.directionalShadowMap,Re.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Re.spotShadowMap.value=$.state.spotShadowMap,Re.spotLightMatrix.value=$.state.spotLightMatrix,Re.spotLightMap.value=$.state.spotLightMap,Re.pointShadowMap.value=$.state.pointShadowMap,Re.pointShadowMatrix.value=$.state.pointShadowMatrix);const Ue=oe.getUniforms(),it=Xr.seqWithValue(Ue.seq,Re);return z.currentProgram=oe,z.uniformsList=it,oe}function Me(T,L){const q=pe.get(T);q.outputColorSpace=L.outputColorSpace,q.instancing=L.instancing,q.skinning=L.skinning,q.morphTargets=L.morphTargets,q.morphNormals=L.morphNormals,q.morphColors=L.morphColors,q.morphTargetsCount=L.morphTargetsCount,q.numClippingPlanes=L.numClippingPlanes,q.numIntersection=L.numClipIntersection,q.vertexAlphas=L.vertexAlphas,q.vertexTangents=L.vertexTangents,q.toneMapping=L.toneMapping}function We(T,L,q,z,$){L.isScene!==!0&&(L=R),ge.resetTextureUnits();const ae=L.fog,se=z.isMeshStandardMaterial?L.environment:null,fe=S===null?p.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:vn,Se=(z.isMeshStandardMaterial?ve:ce).get(z.envMap||se),Ae=z.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,oe=!!z.normalMap&&!!q.attributes.tangent,Re=!!q.morphAttributes.position,Ue=!!q.morphAttributes.normal,it=!!q.morphAttributes.color,Xe=z.toneMapped?p.toneMapping:Rn,Je=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Ne=Je!==void 0?Je.length:0,je=pe.get(z),Nt=m.state.lights;if(j===!0&&(V===!0||T!==B)){const ft=T===B&&z.id===C;ne.setState(z,T,ft)}let ht=!1;z.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Nt.state.version||je.outputColorSpace!==fe||$.isInstancedMesh&&je.instancing===!1||!$.isInstancedMesh&&je.instancing===!0||$.isSkinnedMesh&&je.skinning===!1||!$.isSkinnedMesh&&je.skinning===!0||je.envMap!==Se||z.fog===!0&&je.fog!==ae||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==ne.numPlanes||je.numIntersection!==ne.numIntersection)||je.vertexAlphas!==Ae||je.vertexTangents!==oe||je.morphTargets!==Re||je.morphNormals!==Ue||je.morphColors!==it||je.toneMapping!==Xe||Z.isWebGL2===!0&&je.morphTargetsCount!==Ne)&&(ht=!0):(ht=!0,je.__version=z.version);let Ct=je.currentProgram;ht===!0&&(Ct=_e(z,L,$));let Lt=!1,ut=!1,qt=!1;const et=Ct.getUniforms(),Pt=je.uniforms;if(ie.useProgram(Ct.program)&&(Lt=!0,ut=!0,qt=!0),z.id!==C&&(C=z.id,ut=!0),Lt||B!==T){if(et.setValue(P,"projectionMatrix",T.projectionMatrix),Z.logarithmicDepthBuffer&&et.setValue(P,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),B!==T&&(B=T,ut=!0,qt=!0),z.isShaderMaterial||z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshStandardMaterial||z.envMap){const ft=et.map.cameraPosition;ft!==void 0&&ft.setValue(P,A.setFromMatrixPosition(T.matrixWorld))}(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&et.setValue(P,"isOrthographic",T.isOrthographicCamera===!0),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial||z.isShadowMaterial||$.isSkinnedMesh)&&et.setValue(P,"viewMatrix",T.matrixWorldInverse)}if($.isSkinnedMesh){et.setOptional(P,$,"bindMatrix"),et.setOptional(P,$,"bindMatrixInverse");const ft=$.skeleton;ft&&(Z.floatVertexTextures?(ft.boneTexture===null&&ft.computeBoneTexture(),et.setValue(P,"boneTexture",ft.boneTexture,ge),et.setValue(P,"boneTextureSize",ft.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Tt=q.morphAttributes;if((Tt.position!==void 0||Tt.normal!==void 0||Tt.color!==void 0&&Z.isWebGL2===!0)&&ye.update($,q,Ct),(ut||je.receiveShadow!==$.receiveShadow)&&(je.receiveShadow=$.receiveShadow,et.setValue(P,"receiveShadow",$.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Pt.envMap.value=Se,Pt.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),ut&&(et.setValue(P,"toneMappingExposure",p.toneMappingExposure),je.needsLights&&Le(Pt,qt),ae&&z.fog===!0&&qe.refreshFogUniforms(Pt,ae),qe.refreshMaterialUniforms(Pt,z,I,H,k),Xr.upload(P,je.uniformsList,Pt,ge)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Xr.upload(P,je.uniformsList,Pt,ge),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&et.setValue(P,"center",$.center),et.setValue(P,"modelViewMatrix",$.modelViewMatrix),et.setValue(P,"normalMatrix",$.normalMatrix),et.setValue(P,"modelMatrix",$.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const ft=z.uniformsGroups;for(let yt=0,Gt=ft.length;yt<Gt;yt++)if(Z.isWebGL2){const $t=ft[yt];Ve.update($t,Ct),Ve.bind($t,Ct)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ct}function Le(T,L){T.ambientLightColor.needsUpdate=L,T.lightProbe.needsUpdate=L,T.directionalLights.needsUpdate=L,T.directionalLightShadows.needsUpdate=L,T.pointLights.needsUpdate=L,T.pointLightShadows.needsUpdate=L,T.spotLights.needsUpdate=L,T.spotLightShadows.needsUpdate=L,T.rectAreaLights.needsUpdate=L,T.hemisphereLights.needsUpdate=L}function we(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(T,L,q){pe.get(T.texture).__webglTexture=L,pe.get(T.depthTexture).__webglTexture=q;const z=pe.get(T);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=q===void 0,z.__autoAllocateDepthBuffer||K.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,L){const q=pe.get(T);q.__webglFramebuffer=L,q.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(T,L=0,q=0){S=T,y=L,x=q;let z=!0,$=null,ae=!1,se=!1;if(T){const Se=pe.get(T);Se.__useDefaultFramebuffer!==void 0?(ie.bindFramebuffer(P.FRAMEBUFFER,null),z=!1):Se.__webglFramebuffer===void 0?ge.setupRenderTarget(T):Se.__hasExternalTextures&&ge.rebindTextures(T,pe.get(T.texture).__webglTexture,pe.get(T.depthTexture).__webglTexture);const Ae=T.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(se=!0);const oe=pe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?($=oe[L],ae=!0):Z.isWebGL2&&T.samples>0&&ge.useMultisampledRTT(T)===!1?$=pe.get(T).__webglMultisampledFramebuffer:$=oe,F.copy(T.viewport),M.copy(T.scissor),E=T.scissorTest}else F.copy(te).multiplyScalar(I).floor(),M.copy(O).multiplyScalar(I).floor(),E=U;if(ie.bindFramebuffer(P.FRAMEBUFFER,$)&&Z.drawBuffers&&z&&ie.drawBuffers(T,$),ie.viewport(F),ie.scissor(M),ie.setScissorTest(E),ae){const Se=pe.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+L,Se.__webglTexture,q)}else if(se){const Se=pe.get(T.texture),Ae=L||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Se.__webglTexture,q||0,Ae)}C=-1},this.readRenderTargetPixels=function(T,L,q,z,$,ae,se){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=pe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&se!==void 0&&(fe=fe[se]),fe){ie.bindFramebuffer(P.FRAMEBUFFER,fe);try{const Se=T.texture,Ae=Se.format,oe=Se.type;if(Ae!==tn&&de.convert(Ae)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Re=oe===cr&&(K.has("EXT_color_buffer_half_float")||Z.isWebGL2&&K.has("EXT_color_buffer_float"));if(oe!==li&&de.convert(oe)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_TYPE)&&!(oe===Vn&&(Z.isWebGL2||K.has("OES_texture_float")||K.has("WEBGL_color_buffer_float")))&&!Re){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=T.width-z&&q>=0&&q<=T.height-$&&P.readPixels(L,q,z,$,de.convert(Ae),de.convert(oe),ae)}finally{const Se=S!==null?pe.get(S).__webglFramebuffer:null;ie.bindFramebuffer(P.FRAMEBUFFER,Se)}}},this.copyFramebufferToTexture=function(T,L,q=0){const z=Math.pow(2,-q),$=Math.floor(L.image.width*z),ae=Math.floor(L.image.height*z);ge.setTexture2D(L,0),P.copyTexSubImage2D(P.TEXTURE_2D,q,0,0,T.x,T.y,$,ae),ie.unbindTexture()},this.copyTextureToTexture=function(T,L,q,z=0){const $=L.image.width,ae=L.image.height,se=de.convert(q.format),fe=de.convert(q.type);ge.setTexture2D(q,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,q.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,q.unpackAlignment),L.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,z,T.x,T.y,$,ae,se,fe,L.image.data):L.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,z,T.x,T.y,L.mipmaps[0].width,L.mipmaps[0].height,se,L.mipmaps[0].data):P.texSubImage2D(P.TEXTURE_2D,z,T.x,T.y,se,fe,L.image),z===0&&q.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),ie.unbindTexture()},this.copyTextureToTexture3D=function(T,L,q,z,$=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ae=T.max.x-T.min.x+1,se=T.max.y-T.min.y+1,fe=T.max.z-T.min.z+1,Se=de.convert(z.format),Ae=de.convert(z.type);let oe;if(z.isData3DTexture)ge.setTexture3D(z,0),oe=P.TEXTURE_3D;else if(z.isDataArrayTexture)ge.setTexture2DArray(z,0),oe=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,z.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,z.unpackAlignment);const Re=P.getParameter(P.UNPACK_ROW_LENGTH),Ue=P.getParameter(P.UNPACK_IMAGE_HEIGHT),it=P.getParameter(P.UNPACK_SKIP_PIXELS),Xe=P.getParameter(P.UNPACK_SKIP_ROWS),Je=P.getParameter(P.UNPACK_SKIP_IMAGES),Ne=q.isCompressedTexture?q.mipmaps[0]:q.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,Ne.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ne.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,T.min.x),P.pixelStorei(P.UNPACK_SKIP_ROWS,T.min.y),P.pixelStorei(P.UNPACK_SKIP_IMAGES,T.min.z),q.isDataTexture||q.isData3DTexture?P.texSubImage3D(oe,$,L.x,L.y,L.z,ae,se,fe,Se,Ae,Ne.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),P.compressedTexSubImage3D(oe,$,L.x,L.y,L.z,ae,se,fe,Se,Ne.data)):P.texSubImage3D(oe,$,L.x,L.y,L.z,ae,se,fe,Se,Ae,Ne),P.pixelStorei(P.UNPACK_ROW_LENGTH,Re),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ue),P.pixelStorei(P.UNPACK_SKIP_PIXELS,it),P.pixelStorei(P.UNPACK_SKIP_ROWS,Xe),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Je),$===0&&z.generateMipmaps&&P.generateMipmap(oe),ie.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?ge.setTextureCube(T,0):T.isData3DTexture?ge.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ge.setTexture2DArray(T,0):ge.setTexture2D(T,0),ie.unbindTexture()},this.resetState=function(){y=0,x=0,S=null,ie.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ke?ni:sl}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ni?Ke:vn}}class tm extends wl{}tm.prototype.isWebGL1Renderer=!0;class nm extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class im{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Os,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=hn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ot=new Q;class ta{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=An(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=An(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=An(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=An(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),r=mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),r=mt(r,this.array),i=mt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let i=0;i<this.itemSize;i++)t.push(this.data.array[r+i])}return new Ht(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ta(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let i=0;i<this.itemSize;i++)t.push(this.data.array[r+i])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Ao=new Q,Ro=new vt,Co=new vt,rm=new Q,Lo=new rt,Ci=new Q;class sm extends Vt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new rt,this.bindMatrixInverse=new rt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Pn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)Ci.fromBufferAttribute(t,n),this.applyBoneTransform(n,Ci),this.boundingBox.expandByPoint(Ci)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new In),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)Ci.fromBufferAttribute(t,n),this.applyBoneTransform(n,Ci),this.boundingSphere.expandByPoint(Ci)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new vt,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const i=1/e.manhattanLength();i!==1/0?e.multiplyScalar(i):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;Ro.fromBufferAttribute(r.attributes.skinIndex,e),Co.fromBufferAttribute(r.attributes.skinWeight,e),Ao.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let i=0;i<4;i++){const s=Co.getComponent(i);if(s!==0){const o=Ro.getComponent(i);Lo.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(rm.copy(Ao).applyMatrix4(Lo),s)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class bl extends xt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class am extends It{constructor(e=null,t=1,n=1,r,i,s,o,l,h=At,u=At,c,d){super(null,s,o,l,h,u,r,i,c,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Po=new rt,om=new rt;class na{constructor(e=[],t=[]){this.uuid=hn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new rt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new rt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let i=0,s=e.length;i<s;i++){const o=e[i]?e[i].matrixWorld:om;Po.multiplyMatrices(o,t[i]),Po.toArray(n,i*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new na(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=ol(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new am(t,e,e,tn,Vn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const i=e.bones[n];let s=t[i];s===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",i),s=new bl),this.bones.push(s),this.boneInverses.push(new rt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,i=t.length;r<i;r++){const s=t[r];e.bones.push(s.uuid);const o=n[r];e.boneInverses.push(o.toArray())}return e}}class Io extends Ht{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Li=new rt,No=new rt,Or=[],Do=new Pn,lm=new rt,Qi=new Vt,er=new In;class cm extends Vt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Io(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,lm)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Pn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Li),Do.copy(e.boundingBox).applyMatrix4(Li),this.boundingBox.union(Do)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new In),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Li),er.copy(e.boundingSphere).applyMatrix4(Li),this.boundingSphere.union(er)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,r=this.count;if(Qi.geometry=this.geometry,Qi.material=this.material,Qi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),er.copy(this.boundingSphere),er.applyMatrix4(n),e.ray.intersectsSphere(er)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,Li),No.multiplyMatrices(n,Li),Qi.matrixWorld=No,Qi.raycast(e,Or);for(let s=0,o=Or.length;s<o;s++){const l=Or[s];l.instanceId=i,l.object=this,t.push(l)}Or.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Io(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Al extends un{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Uo=new Q,Fo=new Q,Bo=new rt,Rs=new $s,zr=new In;class ia extends xt{constructor(e=new gn,t=new Al){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,i=t.count;r<i;r++)Uo.fromBufferAttribute(t,r-1),Fo.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Uo.distanceTo(Fo);e.setAttribute("lineDistance",new Cn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere),zr.applyMatrix4(r),zr.radius+=i,e.ray.intersectsSphere(zr)===!1)return;Bo.copy(r).invert(),Rs.copy(e.ray).applyMatrix4(Bo);const o=i/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,h=new Q,u=new Q,c=new Q,d=new Q,f=this.isLineSegments?2:1,m=n.index,v=n.attributes.position;if(m!==null){const p=Math.max(0,s.start),_=Math.min(m.count,s.start+s.count);for(let y=p,x=_-1;y<x;y+=f){const S=m.getX(y),C=m.getX(y+1);if(h.fromBufferAttribute(v,S),u.fromBufferAttribute(v,C),Rs.distanceSqToSegment(h,u,d,c)>l)continue;d.applyMatrix4(this.matrixWorld);const F=e.ray.origin.distanceTo(d);F<e.near||F>e.far||t.push({distance:F,point:c.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,s.start),_=Math.min(v.count,s.start+s.count);for(let y=p,x=_-1;y<x;y+=f){if(h.fromBufferAttribute(v,y),u.fromBufferAttribute(v,y+1),Rs.distanceSqToSegment(h,u,d,c)>l)continue;d.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(d);C<e.near||C>e.far||t.push({distance:C,point:c.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=r.length;i<s;i++){const o=r[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}}const Oo=new Q,zo=new Q;class hm extends ia{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,i=t.count;r<i;r+=2)Oo.fromBufferAttribute(t,r),zo.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Oo.distanceTo(zo);e.setAttribute("lineDistance",new Cn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class um extends ia{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Rl extends un{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Vo=new rt,Gs=new $s,Vr=new In,Hr=new Q;class dm extends xt{constructor(e=new gn,t=new Rl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere),Vr.applyMatrix4(r),Vr.radius+=i,e.ray.intersectsSphere(Vr)===!1)return;Vo.copy(r).invert(),Gs.copy(e.ray).applyMatrix4(Vo);const o=i/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,h=n.index,c=n.attributes.position;if(h!==null){const d=Math.max(0,s.start),f=Math.min(h.count,s.start+s.count);for(let m=d,g=f;m<g;m++){const v=h.getX(m);Hr.fromBufferAttribute(c,v),Ho(Hr,v,l,r,e,t,this)}}else{const d=Math.max(0,s.start),f=Math.min(c.count,s.start+s.count);for(let m=d,g=f;m<g;m++)Hr.fromBufferAttribute(c,m),Ho(Hr,m,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=r.length;i<s;i++){const o=r[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}}function Ho(a,e,t,n,r,i,s){const o=Gs.distanceSqToPoint(a);if(o<t){const l=new Q;Gs.closestPointToPoint(a,l),l.applyMatrix4(n);const h=r.ray.origin.distanceTo(l);if(h<r.near||h>r.far)return;i.push({distance:h,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:s})}}class ra extends un{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ks,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class di extends ra{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new dt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ft(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new $e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new $e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new $e(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Cl extends un{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ks,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ys,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Bn(a,e,t){return Ll(a)?new a.constructor(a.subarray(e,t!==void 0?t:a.length)):a.slice(e,t)}function Gr(a,e,t){return!a||!t&&a.constructor===e?a:typeof e.BYTES_PER_ELEMENT=="number"?new e(a):Array.prototype.slice.call(a)}function Ll(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}function fm(a){function e(r,i){return a[r]-a[i]}const t=a.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function Go(a,e,t){const n=a.length,r=new a.constructor(n);for(let i=0,s=0;s!==n;++i){const o=t[i]*e;for(let l=0;l!==e;++l)r[s++]=a[o+l]}return r}function Pl(a,e,t,n){let r=1,i=a[0];for(;i!==void 0&&i[n]===void 0;)i=a[r++];if(i===void 0)return;let s=i[n];if(s!==void 0)if(Array.isArray(s))do s=i[n],s!==void 0&&(e.push(i.time),t.push.apply(t,s)),i=a[r++];while(i!==void 0);else if(s.toArray!==void 0)do s=i[n],s!==void 0&&(e.push(i.time),s.toArray(t,t.length)),i=a[r++];while(i!==void 0);else do s=i[n],s!==void 0&&(e.push(i.time),t.push(s)),i=a[r++];while(i!==void 0)}class mr{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],i=t[n-1];n:{e:{let s;t:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<i)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(i=r,r=t[++n],e<r)break e}s=t.length;break t}if(!(e>=i)){const o=t[1];e<o&&(n=2,i=o);for(let l=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=i,i=t[--n-1],e>=i)break e}s=n,n=0;break t}break n}for(;n<s;){const o=n+s>>>1;e<t[o]?s=o:n=o+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let s=0;s!==r;++s)t[s]=n[i+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class pm extends mr{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Oa,endingEnd:Oa}}intervalChanged_(e,t,n){const r=this.parameterPositions;let i=e-2,s=e+1,o=r[i],l=r[s];if(o===void 0)switch(this.getSettings_().endingStart){case za:i=e,o=2*t-n;break;case Va:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case za:s=e,l=2*n-t;break;case Va:s=1,l=n+r[1]-r[0];break;default:s=e-1,l=t}const h=(n-t)*.5,u=this.valueSize;this._weightPrev=h/(t-o),this._weightNext=h/(l-n),this._offsetPrev=i*u,this._offsetNext=s*u}interpolate_(e,t,n,r){const i=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,h=l-o,u=this._offsetPrev,c=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(r-t),g=m*m,v=g*m,p=-d*v+2*d*g-d*m,_=(1+d)*v+(-1.5-2*d)*g+(-.5+d)*m+1,y=(-1-f)*v+(1.5+f)*g+.5*m,x=f*v-f*g;for(let S=0;S!==o;++S)i[S]=p*s[u+S]+_*s[h+S]+y*s[l+S]+x*s[c+S];return i}}class mm extends mr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const i=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,h=l-o,u=(n-t)/(r-t),c=1-u;for(let d=0;d!==o;++d)i[d]=s[h+d]*c+s[l+d]*u;return i}}class vm extends mr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class _n{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Gr(t,this.TimeBufferType),this.values=Gr(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Gr(e.times,Array),values:Gr(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new vm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new mm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new pm(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case hr:t=this.InterpolantFactoryMethodDiscrete;break;case Hi:t=this.InterpolantFactoryMethodLinear;break;case ss:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return hr;case this.InterpolantFactoryMethodLinear:return Hi;case this.InterpolantFactoryMethodSmooth:return ss}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let i=0,s=r-1;for(;i!==r&&n[i]<e;)++i;for(;s!==-1&&n[s]>t;)--s;if(++s,i!==0||s!==r){i>=s&&(s=Math.max(s,1),i=s-1);const o=this.getValueSize();this.times=Bn(n,i,s),this.values=Bn(this.values,i*o,s*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,i=n.length;i===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let o=0;o!==i;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(s!==null&&s>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,s),e=!1;break}s=l}if(r!==void 0&&Ll(r))for(let o=0,l=r.length;o!==l;++o){const h=r[o];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,h),e=!1;break}}return e}optimize(){const e=Bn(this.times),t=Bn(this.values),n=this.getValueSize(),r=this.getInterpolation()===ss,i=e.length-1;let s=1;for(let o=1;o<i;++o){let l=!1;const h=e[o],u=e[o+1];if(h!==u&&(o!==1||h!==e[0]))if(r)l=!0;else{const c=o*n,d=c-n,f=c+n;for(let m=0;m!==n;++m){const g=t[c+m];if(g!==t[d+m]||g!==t[f+m]){l=!0;break}}}if(l){if(o!==s){e[s]=e[o];const c=o*n,d=s*n;for(let f=0;f!==n;++f)t[d+f]=t[c+f]}++s}}if(i>0){e[s]=e[i];for(let o=i*n,l=s*n,h=0;h!==n;++h)t[l+h]=t[o+h];++s}return s!==e.length?(this.times=Bn(e,0,s),this.values=Bn(t,0,s*n)):(this.times=e,this.values=t),this}clone(){const e=Bn(this.times,0),t=Bn(this.values,0),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}_n.prototype.TimeBufferType=Float32Array;_n.prototype.ValueBufferType=Float32Array;_n.prototype.DefaultInterpolation=Hi;class ji extends _n{}ji.prototype.ValueTypeName="bool";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=hr;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;class Il extends _n{}Il.prototype.ValueTypeName="color";class dr extends _n{}dr.prototype.ValueTypeName="number";class gm extends mr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const i=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=(n-t)/(r-t);let h=e*o;for(let u=h+o;h!==u;h+=4)kn.slerpFlat(i,0,s,h-o,s,h,l);return i}}class ui extends _n{InterpolantFactoryMethodLinear(e){return new gm(this.times,this.values,this.getValueSize(),e)}}ui.prototype.ValueTypeName="quaternion";ui.prototype.DefaultInterpolation=Hi;ui.prototype.InterpolantFactoryMethodSmooth=void 0;class Yi extends _n{}Yi.prototype.ValueTypeName="string";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=hr;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;class fr extends _n{}fr.prototype.ValueTypeName="vector";class _m{constructor(e,t=-1,n,r=Nc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=hn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let s=0,o=n.length;s!==o;++s)t.push(ym(n[s]).scale(r));const i=new this(e.name,e.duration,t,e.blendMode);return i.uuid=e.uuid,i}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let i=0,s=n.length;i!==s;++i)t.push(_n.toJSON(n[i]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const i=t.length,s=[];for(let o=0;o<i;o++){let l=[],h=[];l.push((o+i-1)%i,o,(o+1)%i),h.push(0,1,0);const u=fm(l);l=Go(l,1,u),h=Go(h,1,u),!r&&l[0]===0&&(l.push(i),h.push(h[0])),s.push(new dr(".morphTargetInfluences["+t[o].name+"]",l,h).scale(1/n))}return new this(e,-1,s)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},i=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const h=e[o],u=h.name.match(i);if(u&&u.length>1){const c=u[1];let d=r[c];d||(r[c]=d=[]),d.push(h)}}const s=[];for(const o in r)s.push(this.CreateFromMorphTargetSequence(o,r[o],t,n));return s}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(c,d,f,m,g){if(f.length!==0){const v=[],p=[];Pl(f,v,p,m),v.length!==0&&g.push(new c(d,v,p))}},r=[],i=e.name||"default",s=e.fps||30,o=e.blendMode;let l=e.length||-1;const h=e.hierarchy||[];for(let c=0;c<h.length;c++){const d=h[c].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let g=0;g<d[m].morphTargets.length;g++)f[d[m].morphTargets[g]]=-1;for(const g in f){const v=[],p=[];for(let _=0;_!==d[m].morphTargets.length;++_){const y=d[m];v.push(y.time),p.push(y.morphTarget===g?1:0)}r.push(new dr(".morphTargetInfluence["+g+"]",v,p))}l=f.length*s}else{const f=".bones["+t[c].name+"]";n(fr,f+".position",d,"pos",r),n(ui,f+".quaternion",d,"rot",r),n(fr,f+".scale",d,"scl",r)}}return r.length===0?null:new this(i,l,r,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const i=this.tracks[n];t=Math.max(t,i.times[i.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function xm(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return dr;case"vector":case"vector2":case"vector3":case"vector4":return fr;case"color":return Il;case"quaternion":return ui;case"bool":case"boolean":return ji;case"string":return Yi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+a)}function ym(a){if(a.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=xm(a.type);if(a.times===void 0){const t=[],n=[];Pl(a.keys,t,n,"value"),a.times=t,a.values=n}return e.parse!==void 0?e.parse(a):new e(a.name,a.times,a.values,a.interpolation)}const Wi={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class Mm{constructor(e,t,n){const r=this;let i=!1,s=0,o=0,l;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,i===!1&&r.onStart!==void 0&&r.onStart(u,s,o),i=!0},this.itemEnd=function(u){s++,r.onProgress!==void 0&&r.onProgress(u,s,o),s===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,c){return h.push(u,c),this},this.removeHandler=function(u){const c=h.indexOf(u);return c!==-1&&h.splice(c,2),this},this.getHandler=function(u){for(let c=0,d=h.length;c<d;c+=2){const f=h[c],m=h[c+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null}}}const Sm=new Mm;class vr{constructor(e){this.manager=e!==void 0?e:Sm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const wn={};class Em extends Error{constructor(e,t){super(e),this.response=t}}class Nl extends vr{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const i=Wi.get(e);if(i!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(i),this.manager.itemEnd(e)},0),i;if(wn[e]!==void 0){wn[e].push({onLoad:t,onProgress:n,onError:r});return}wn[e]=[],wn[e].push({onLoad:t,onProgress:n,onError:r});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(s).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const u=wn[e],c=h.body.getReader(),d=h.headers.get("Content-Length")||h.headers.get("X-File-Size"),f=d?parseInt(d):0,m=f!==0;let g=0;const v=new ReadableStream({start(p){_();function _(){c.read().then(({done:y,value:x})=>{if(y)p.close();else{g+=x.byteLength;const S=new ProgressEvent("progress",{lengthComputable:m,loaded:g,total:f});for(let C=0,B=u.length;C<B;C++){const F=u[C];F.onProgress&&F.onProgress(S)}p.enqueue(x),_()}})}}});return new Response(v)}else throw new Em(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(l){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return h.json();default:if(o===void 0)return h.text();{const c=/charset="?([^;"\s]*)"?/i.exec(o),d=c&&c[1]?c[1].toLowerCase():void 0,f=new TextDecoder(d);return h.arrayBuffer().then(m=>f.decode(m))}}}).then(h=>{Wi.add(e,h);const u=wn[e];delete wn[e];for(let c=0,d=u.length;c<d;c++){const f=u[c];f.onLoad&&f.onLoad(h)}}).catch(h=>{const u=wn[e];if(u===void 0)throw this.manager.itemError(e),h;delete wn[e];for(let c=0,d=u.length;c<d;c++){const f=u[c];f.onError&&f.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Tm extends vr{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const i=this,s=Wi.get(e);if(s!==void 0)return i.manager.itemStart(e),setTimeout(function(){t&&t(s),i.manager.itemEnd(e)},0),s;const o=ur("img");function l(){u(),Wi.add(e,this),t&&t(this),i.manager.itemEnd(e)}function h(c){u(),r&&r(c),i.manager.itemError(e),i.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",h,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),i.manager.itemStart(e),o.src=e,o}}class wm extends vr{constructor(e){super(e)}load(e,t,n,r){const i=new It,s=new Tm(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){i.image=o,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}}class Jr extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Cs=new rt,ko=new Q,Wo=new Q;class sa{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Js,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ko.setFromMatrixPosition(e.matrixWorld),t.position.copy(ko),Wo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wo),t.updateMatrixWorld(),Cs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cs),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Cs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class bm extends sa{constructor(){super(new Wt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Gi*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,i=e.distance||t.far;(n!==t.fov||r!==t.aspect||i!==t.far)&&(t.fov=n,t.aspect=r,t.far=i,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Am extends Jr{constructor(e,t,n=0,r=Math.PI/3,i=0,s=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.distance=n,this.angle=r,this.penumbra=i,this.decay=s,this.map=null,this.shadow=new bm}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Xo=new rt,tr=new Q,Ls=new Q;class Rm extends sa{constructor(){super(new Wt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new dt(4,2),this._viewportCount=6,this._viewports=[new vt(2,1,1,1),new vt(0,1,1,1),new vt(3,1,1,1),new vt(1,1,1,1),new vt(3,0,1,1),new vt(1,0,1,1)],this._cubeDirections=[new Q(1,0,0),new Q(-1,0,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,1,0),new Q(0,-1,0)],this._cubeUps=[new Q(0,1,0),new Q(0,1,0),new Q(0,1,0),new Q(0,1,0),new Q(0,0,1),new Q(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,i=e.distance||n.far;i!==n.far&&(n.far=i,n.updateProjectionMatrix()),tr.setFromMatrixPosition(e.matrixWorld),n.position.copy(tr),Ls.copy(n.position),Ls.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ls),n.updateMatrixWorld(),r.makeTranslation(-tr.x,-tr.y,-tr.z),Xo.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xo)}}class Cm extends Jr{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Rm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Lm extends sa{constructor(){super(new Zr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Dl extends Jr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.shadow=new Lm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Pm extends Jr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ks{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Im extends vr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const i=this,s=Wi.get(e);if(s!==void 0)return i.manager.itemStart(e),setTimeout(function(){t&&t(s),i.manager.itemEnd(e)},0),s;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(i.options,{colorSpaceConversion:"none"}))}).then(function(l){Wi.add(e,l),t&&t(l),i.manager.itemEnd(e)}).catch(function(l){r&&r(l),i.manager.itemError(e),i.manager.itemEnd(e)}),i.manager.itemStart(e)}}const aa="\\[\\]\\.:\\/",Nm=new RegExp("["+aa+"]","g"),oa="[^"+aa+"]",Dm="[^"+aa.replace("\\.","")+"]",Um=/((?:WC+[\/:])*)/.source.replace("WC",oa),Fm=/(WCOD+)?/.source.replace("WCOD",Dm),Bm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",oa),Om=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",oa),zm=new RegExp("^"+Um+Fm+Bm+Om+"$"),Vm=["material","materials","bones","map"];class Hm{constructor(e,t,n){const r=n||pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class pt{constructor(e,t,n){this.path=t,this.parsedPath=n||pt.parseTrackName(t),this.node=pt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new pt.Composite(e,t,n):new pt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Nm,"")}static parseTrackName(e){const t=zm.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const i=n.nodeName.substring(r+1);Vm.indexOf(i)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=i)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(i){for(let s=0;s<i.length;s++){const o=i[s];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let i=t.propertyIndex;if(e||(e=pt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===h){h=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const s=e[r];if(s===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(i!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[i]!==void 0&&(i=e.morphTargetDictionary[i])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=i}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}pt.Composite=Hm;pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pt.prototype.GetterByBindingType=[pt.prototype._getValue_direct,pt.prototype._getValue_array,pt.prototype._getValue_arrayElement,pt.prototype._getValue_toArray];pt.prototype.SetterByBindingTypeAndVersioning=[[pt.prototype._setValue_direct,pt.prototype._setValue_direct_setNeedsUpdate,pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_array,pt.prototype._setValue_array_setNeedsUpdate,pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_arrayElement,pt.prototype._setValue_arrayElement_setNeedsUpdate,pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_fromArray,pt.prototype._setValue_fromArray_setNeedsUpdate,pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:js}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=js);function qo(a,e){if(e===Dc)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),a;if(e===Bs||e===rl){let t=a.getIndex();if(t===null){const s=[],o=a.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)s.push(l);a.setIndex(s),t=a.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),a}const n=t.count-2,r=[];if(e===Bs)for(let s=1;s<=n;s++)r.push(t.getX(0)),r.push(t.getX(s)),r.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(r.push(t.getX(s)),r.push(t.getX(s+1)),r.push(t.getX(s+2))):(r.push(t.getX(s+2)),r.push(t.getX(s+1)),r.push(t.getX(s)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const i=a.clone();return i.setIndex(r),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),a}class Gm extends vr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new jm(t)}),this.register(function(t){return new ev(t)}),this.register(function(t){return new tv(t)}),this.register(function(t){return new nv(t)}),this.register(function(t){return new Km(t)}),this.register(function(t){return new Zm(t)}),this.register(function(t){return new $m(t)}),this.register(function(t){return new Jm(t)}),this.register(function(t){return new qm(t)}),this.register(function(t){return new Qm(t)}),this.register(function(t){return new Ym(t)}),this.register(function(t){return new Wm(t)}),this.register(function(t){return new iv(t)}),this.register(function(t){return new rv(t)})}load(e,t,n,r){const i=this;let s;this.resourcePath!==""?s=this.resourcePath:this.path!==""?s=this.path:s=ks.extractUrlBase(e),this.manager.itemStart(e);const o=function(h){r?r(h):console.error(h),i.manager.itemError(e),i.manager.itemEnd(e)},l=new Nl(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(h){try{i.parse(h,s,function(u){t(u),i.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let i;const s={},o={},l=new TextDecoder;if(typeof e=="string")i=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Ul){try{s[lt.KHR_BINARY_GLTF]=new sv(e)}catch(c){r&&r(c);return}i=JSON.parse(s[lt.KHR_BINARY_GLTF].content)}else i=JSON.parse(l.decode(e));else i=e;if(i.asset===void 0||i.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new _v(i,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const c=this.pluginCallbacks[u](h);o[c.name]=c,s[c.name]=!0}if(i.extensionsUsed)for(let u=0;u<i.extensionsUsed.length;++u){const c=i.extensionsUsed[u],d=i.extensionsRequired||[];switch(c){case lt.KHR_MATERIALS_UNLIT:s[c]=new Xm;break;case lt.KHR_DRACO_MESH_COMPRESSION:s[c]=new av(i,this.dracoLoader);break;case lt.KHR_TEXTURE_TRANSFORM:s[c]=new ov;break;case lt.KHR_MESH_QUANTIZATION:s[c]=new lv;break;default:d.indexOf(c)>=0&&o[c]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+c+'".')}}h.setExtensions(s),h.setPlugins(o),h.parse(n,r)}parseAsync(e,t){const n=this;return new Promise(function(r,i){n.parse(e,t,r,i)})}}function km(){let a={};return{get:function(e){return a[e]},add:function(e,t){a[e]=t},remove:function(e){delete a[e]},removeAll:function(){a={}}}}const lt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Wm{constructor(e){this.parser=e,this.name=lt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){const i=t[n];i.extensions&&i.extensions[this.name]&&i.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,i.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let r=t.cache.get(n);if(r)return r;const i=t.json,l=((i.extensions&&i.extensions[this.name]||{}).lights||[])[e];let h;const u=new $e(16777215);l.color!==void 0&&u.fromArray(l.color);const c=l.range!==void 0?l.range:0;switch(l.type){case"directional":h=new Dl(u),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new Cm(u),h.distance=c;break;case"spot":h=new Am(u),h.distance=c,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,h.angle=l.spot.outerConeAngle,h.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return h.position.set(0,0,0),h.decay=2,zn(h,l),l.intensity!==void 0&&(h.intensity=l.intensity),h.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(h),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,i=n.json.nodes[e],o=(i.extensions&&i.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class Xm{constructor(){this.name=lt.KHR_MATERIALS_UNLIT}getMaterialType(){return Qn}extendParams(e,t,n){const r=[];e.color=new $e(1,1,1),e.opacity=1;const i=t.pbrMetallicRoughness;if(i){if(Array.isArray(i.baseColorFactor)){const s=i.baseColorFactor;e.color.fromArray(s),e.opacity=s[3]}i.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",i.baseColorTexture,Ke))}return Promise.all(r)}}class qm{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const i=r.extensions[this.name].emissiveStrength;return i!==void 0&&(t.emissiveIntensity=i),Promise.resolve()}}class jm{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:di}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const i=[],s=r.extensions[this.name];if(s.clearcoatFactor!==void 0&&(t.clearcoat=s.clearcoatFactor),s.clearcoatTexture!==void 0&&i.push(n.assignTexture(t,"clearcoatMap",s.clearcoatTexture)),s.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=s.clearcoatRoughnessFactor),s.clearcoatRoughnessTexture!==void 0&&i.push(n.assignTexture(t,"clearcoatRoughnessMap",s.clearcoatRoughnessTexture)),s.clearcoatNormalTexture!==void 0&&(i.push(n.assignTexture(t,"clearcoatNormalMap",s.clearcoatNormalTexture)),s.clearcoatNormalTexture.scale!==void 0)){const o=s.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new dt(o,o)}return Promise.all(i)}}class Ym{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:di}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const i=[],s=r.extensions[this.name];return s.iridescenceFactor!==void 0&&(t.iridescence=s.iridescenceFactor),s.iridescenceTexture!==void 0&&i.push(n.assignTexture(t,"iridescenceMap",s.iridescenceTexture)),s.iridescenceIor!==void 0&&(t.iridescenceIOR=s.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),s.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=s.iridescenceThicknessMinimum),s.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=s.iridescenceThicknessMaximum),s.iridescenceThicknessTexture!==void 0&&i.push(n.assignTexture(t,"iridescenceThicknessMap",s.iridescenceThicknessTexture)),Promise.all(i)}}class Km{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:di}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const i=[];t.sheenColor=new $e(0,0,0),t.sheenRoughness=0,t.sheen=1;const s=r.extensions[this.name];return s.sheenColorFactor!==void 0&&t.sheenColor.fromArray(s.sheenColorFactor),s.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=s.sheenRoughnessFactor),s.sheenColorTexture!==void 0&&i.push(n.assignTexture(t,"sheenColorMap",s.sheenColorTexture,Ke)),s.sheenRoughnessTexture!==void 0&&i.push(n.assignTexture(t,"sheenRoughnessMap",s.sheenRoughnessTexture)),Promise.all(i)}}class Zm{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:di}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const i=[],s=r.extensions[this.name];return s.transmissionFactor!==void 0&&(t.transmission=s.transmissionFactor),s.transmissionTexture!==void 0&&i.push(n.assignTexture(t,"transmissionMap",s.transmissionTexture)),Promise.all(i)}}class $m{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:di}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const i=[],s=r.extensions[this.name];t.thickness=s.thicknessFactor!==void 0?s.thicknessFactor:0,s.thicknessTexture!==void 0&&i.push(n.assignTexture(t,"thicknessMap",s.thicknessTexture)),t.attenuationDistance=s.attenuationDistance||1/0;const o=s.attenuationColor||[1,1,1];return t.attenuationColor=new $e(o[0],o[1],o[2]),Promise.all(i)}}class Jm{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:di}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const i=r.extensions[this.name];return t.ior=i.ior!==void 0?i.ior:1.5,Promise.resolve()}}class Qm{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:di}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const i=[],s=r.extensions[this.name];t.specularIntensity=s.specularFactor!==void 0?s.specularFactor:1,s.specularTexture!==void 0&&i.push(n.assignTexture(t,"specularIntensityMap",s.specularTexture));const o=s.specularColorFactor||[1,1,1];return t.specularColor=new $e(o[0],o[1],o[2]),s.specularColorTexture!==void 0&&i.push(n.assignTexture(t,"specularColorMap",s.specularColorTexture,Ke)),Promise.all(i)}}class ev{constructor(e){this.parser=e,this.name=lt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const i=r.extensions[this.name],s=t.options.ktx2Loader;if(!s){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,i.source,s)}}class tv{constructor(e){this.parser=e,this.name=lt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,i=r.textures[e];if(!i.extensions||!i.extensions[t])return null;const s=i.extensions[t],o=r.images[s.source];let l=n.textureLoader;if(o.uri){const h=n.options.manager.getHandler(o.uri);h!==null&&(l=h)}return this.detectSupport().then(function(h){if(h)return n.loadTextureImage(e,s.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class nv{constructor(e){this.parser=e,this.name=lt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,i=r.textures[e];if(!i.extensions||!i.extensions[t])return null;const s=i.extensions[t],o=r.images[s.source];let l=n.textureLoader;if(o.uri){const h=n.options.manager.getHandler(o.uri);h!==null&&(l=h)}return this.detectSupport().then(function(h){if(h)return n.loadTextureImage(e,s.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class iv{constructor(e){this.name=lt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const r=n.extensions[this.name],i=this.parser.getDependency("buffer",r.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return i.then(function(o){const l=r.byteOffset||0,h=r.byteLength||0,u=r.count,c=r.byteStride,d=new Uint8Array(o,l,h);return s.decodeGltfBufferAsync?s.decodeGltfBufferAsync(u,c,d,r.mode,r.filter).then(function(f){return f.buffer}):s.ready.then(function(){const f=new ArrayBuffer(u*c);return s.decodeGltfBuffer(new Uint8Array(f),u,c,d,r.mode,r.filter),f})})}else return null}}class rv{constructor(e){this.name=lt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const r=t.meshes[n.mesh];for(const h of r.primitives)if(h.mode!==Qt.TRIANGLES&&h.mode!==Qt.TRIANGLE_STRIP&&h.mode!==Qt.TRIANGLE_FAN&&h.mode!==void 0)return null;const s=n.extensions[this.name].attributes,o=[],l={};for(const h in s)o.push(this.parser.getDependency("accessor",s[h]).then(u=>(l[h]=u,l[h])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(h=>{const u=h.pop(),c=u.isGroup?u.children:[u],d=h[0].count,f=[];for(const m of c){const g=new rt,v=new Q,p=new kn,_=new Q(1,1,1),y=new cm(m.geometry,m.material,d);for(let x=0;x<d;x++)l.TRANSLATION&&v.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,x),l.SCALE&&_.fromBufferAttribute(l.SCALE,x),y.setMatrixAt(x,g.compose(v,p,_));for(const x in l)x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&m.geometry.setAttribute(x,l[x]);xt.prototype.copy.call(y,m),this.parser.assignFinalMaterial(y),f.push(y)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const Ul="glTF",nr=12,jo={JSON:1313821514,BIN:5130562};class sv{constructor(e){this.name=lt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,nr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ul)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-nr,i=new DataView(e,nr);let s=0;for(;s<r;){const o=i.getUint32(s,!0);s+=4;const l=i.getUint32(s,!0);if(s+=4,l===jo.JSON){const h=new Uint8Array(e,nr+s,o);this.content=n.decode(h)}else if(l===jo.BIN){const h=nr+s;this.body=e.slice(h,h+o)}s+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class av{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=lt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,r=this.dracoLoader,i=e.extensions[this.name].bufferView,s=e.extensions[this.name].attributes,o={},l={},h={};for(const u in s){const c=Ws[u]||u.toLowerCase();o[c]=s[u]}for(const u in e.attributes){const c=Ws[u]||u.toLowerCase();if(s[u]!==void 0){const d=n.accessors[e.attributes[u]],f=Fi[d.componentType];h[c]=f.name,l[c]=d.normalized===!0}}return t.getDependency("bufferView",i).then(function(u){return new Promise(function(c){r.decodeDracoFile(u,function(d){for(const f in d.attributes){const m=d.attributes[f],g=l[f];g!==void 0&&(m.normalized=g)}c(d)},o,h)})})}}class ov{constructor(){this.name=lt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class lv{constructor(){this.name=lt.KHR_MESH_QUANTIZATION}}class Fl extends mr{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r*3+r;for(let s=0;s!==r;s++)t[s]=n[i+s];return t}interpolate_(e,t,n,r){const i=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=o*2,h=o*3,u=r-t,c=(n-t)/u,d=c*c,f=d*c,m=e*h,g=m-h,v=-2*f+3*d,p=f-d,_=1-v,y=p-d+c;for(let x=0;x!==o;x++){const S=s[g+x+o],C=s[g+x+l]*u,B=s[m+x+o],F=s[m+x]*u;i[x]=_*S+y*C+v*B+p*F}return i}}const cv=new kn;class hv extends Fl{interpolate_(e,t,n,r){const i=super.interpolate_(e,t,n,r);return cv.fromArray(i).normalize().toArray(i),i}}const Qt={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Fi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Yo={9728:At,9729:kt,9984:Fs,9985:nl,9986:Wr,9987:oi},Ko={33071:en,33648:qr,10497:zi},Ps={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ws={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},On={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},uv={CUBICSPLINE:void 0,LINEAR:Hi,STEP:hr},Is={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function dv(a){return a.DefaultMaterial===void 0&&(a.DefaultMaterial=new ra({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ln})),a.DefaultMaterial}function ir(a,e,t){for(const n in t.extensions)a[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function zn(a,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(a.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function fv(a,e,t){let n=!1,r=!1,i=!1;for(let h=0,u=e.length;h<u;h++){const c=e[h];if(c.POSITION!==void 0&&(n=!0),c.NORMAL!==void 0&&(r=!0),c.COLOR_0!==void 0&&(i=!0),n&&r&&i)break}if(!n&&!r&&!i)return Promise.resolve(a);const s=[],o=[],l=[];for(let h=0,u=e.length;h<u;h++){const c=e[h];if(n){const d=c.POSITION!==void 0?t.getDependency("accessor",c.POSITION):a.attributes.position;s.push(d)}if(r){const d=c.NORMAL!==void 0?t.getDependency("accessor",c.NORMAL):a.attributes.normal;o.push(d)}if(i){const d=c.COLOR_0!==void 0?t.getDependency("accessor",c.COLOR_0):a.attributes.color;l.push(d)}}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(l)]).then(function(h){const u=h[0],c=h[1],d=h[2];return n&&(a.morphAttributes.position=u),r&&(a.morphAttributes.normal=c),i&&(a.morphAttributes.color=d),a.morphTargetsRelative=!0,a})}function pv(a,e){if(a.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)a.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(a.morphTargetInfluences.length===t.length){a.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)a.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function mv(a){const e=a.extensions&&a.extensions[lt.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+Zo(e.attributes):t=a.indices+":"+Zo(a.attributes)+":"+a.mode,t}function Zo(a){let e="";const t=Object.keys(a).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+a[t[n]]+";";return e}function Xs(a){switch(a){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function vv(a){return a.search(/\.jpe?g($|\?)/i)>0||a.search(/^data\:image\/jpeg/)===0?"image/jpeg":a.search(/\.webp($|\?)/i)>0||a.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const gv=new rt;class _v{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new km,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=!1,i=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,i=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||r&&i<98?this.textureLoader=new wm(this.options.manager):this.textureLoader=new Im(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Nl(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,r=this.json,i=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(s){const o={scene:s[0][r.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:r.asset,parser:n,userData:{}};ir(i,o,r),zn(o,r),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,i=t.length;r<i;r++){const s=t[r].joints;for(let o=0,l=s.length;o<l;o++)e[s[o]].isBone=!0}for(let r=0,i=e.length;r<i;r++){const s=e[r];s.mesh!==void 0&&(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0&&(n[s.mesh].isSkinnedMesh=!0)),s.camera!==void 0&&this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const r=n.clone(),i=(s,o)=>{const l=this.associations.get(s);l!=null&&this.associations.set(o,l);for(const[h,u]of s.children.entries())i(u,o.children[h])};return i(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const r=e(t[n]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let r=0;r<t.length;r++){const i=e(t[r]);i&&n.push(i)}return n}getDependency(e,t){const n=e+":"+t;let r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(i){return i.loadNode&&i.loadNode(t)});break;case"mesh":r=this._invokeOne(function(i){return i.loadMesh&&i.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(i){return i.loadBufferView&&i.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(i){return i.loadMaterial&&i.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(i){return i.loadTexture&&i.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(i){return i.loadAnimation&&i.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(i){return i!=this&&i.getDependency&&i.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(i,s){return n.getDependency(e,s)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[lt.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(i,s){n.load(ks.resolveURL(t.uri,r.path),i,void 0,function(){s(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const r=t.byteLength||0,i=t.byteOffset||0;return n.slice(i,i+r)})}loadAccessor(e){const t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const s=Ps[r.type],o=Fi[r.componentType],l=r.normalized===!0,h=new o(r.count*s);return Promise.resolve(new Ht(h,s,l))}const i=[];return r.bufferView!==void 0?i.push(this.getDependency("bufferView",r.bufferView)):i.push(null),r.sparse!==void 0&&(i.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),i.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(i).then(function(s){const o=s[0],l=Ps[r.type],h=Fi[r.componentType],u=h.BYTES_PER_ELEMENT,c=u*l,d=r.byteOffset||0,f=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,m=r.normalized===!0;let g,v;if(f&&f!==c){const p=Math.floor(d/f),_="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+p+":"+r.count;let y=t.cache.get(_);y||(g=new h(o,p*f,r.count*f/u),y=new im(g,f/u),t.cache.add(_,y)),v=new ta(y,l,d%f/u,m)}else o===null?g=new h(r.count*l):g=new h(o,d,r.count*l),v=new Ht(g,l,m);if(r.sparse!==void 0){const p=Ps.SCALAR,_=Fi[r.sparse.indices.componentType],y=r.sparse.indices.byteOffset||0,x=r.sparse.values.byteOffset||0,S=new _(s[1],y,r.sparse.count*p),C=new h(s[2],x,r.sparse.count*l);o!==null&&(v=new Ht(v.array.slice(),v.itemSize,v.normalized));for(let B=0,F=S.length;B<F;B++){const M=S[B];if(v.setX(M,C[B*l]),l>=2&&v.setY(M,C[B*l+1]),l>=3&&v.setZ(M,C[B*l+2]),l>=4&&v.setW(M,C[B*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return v})}loadTexture(e){const t=this.json,n=this.options,i=t.textures[e].source,s=t.images[i];let o=this.textureLoader;if(s.uri){const l=n.manager.getHandler(s.uri);l!==null&&(o=l)}return this.loadTextureImage(e,i,o)}loadTextureImage(e,t,n){const r=this,i=this.json,s=i.textures[e],o=i.images[t],l=(o.uri||o.bufferView)+":"+s.sampler;if(this.textureCache[l])return this.textureCache[l];const h=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=s.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const d=(i.samplers||{})[s.sampler]||{};return u.magFilter=Yo[d.magFilter]||kt,u.minFilter=Yo[d.minFilter]||oi,u.wrapS=Ko[d.wrapS]||zi,u.wrapT=Ko[d.wrapT]||zi,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=h,h}loadImageSource(e,t){const n=this,r=this.json,i=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(c=>c.clone());const s=r.images[e],o=self.URL||self.webkitURL;let l=s.uri||"",h=!1;if(s.bufferView!==void 0)l=n.getDependency("bufferView",s.bufferView).then(function(c){h=!0;const d=new Blob([c],{type:s.mimeType});return l=o.createObjectURL(d),l});else if(s.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(c){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(g){const v=new It(g);v.needsUpdate=!0,d(v)}),t.load(ks.resolveURL(c,i.path),m,void 0,f)})}).then(function(c){return h===!0&&o.revokeObjectURL(l),c.userData.mimeType=s.mimeType||vv(s.uri),c}).catch(function(c){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),c});return this.sourceCache[e]=u,u}assignTexture(e,t,n,r){const i=this;return this.getDependency("texture",n.index).then(function(s){if(!s)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(s=s.clone(),s.channel=n.texCoord),i.extensions[lt.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[lt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=i.associations.get(s);s=i.extensions[lt.KHR_TEXTURE_TRANSFORM].extendTexture(s,o),i.associations.set(s,l)}}return r!==void 0&&(s.colorSpace=r),e[t]=s,s})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const r=t.attributes.tangent===void 0,i=t.attributes.color!==void 0,s=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Rl,un.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Al,un.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(r||i||s){let o="ClonedMaterial:"+n.uuid+":";r&&(o+="derivative-tangents:"),i&&(o+="vertex-colors:"),s&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),i&&(l.vertexColors=!0),s&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return ra}loadMaterial(e){const t=this,n=this.json,r=this.extensions,i=n.materials[e];let s;const o={},l=i.extensions||{},h=[];if(l[lt.KHR_MATERIALS_UNLIT]){const c=r[lt.KHR_MATERIALS_UNLIT];s=c.getMaterialType(),h.push(c.extendParams(o,i,t))}else{const c=i.pbrMetallicRoughness||{};if(o.color=new $e(1,1,1),o.opacity=1,Array.isArray(c.baseColorFactor)){const d=c.baseColorFactor;o.color.fromArray(d),o.opacity=d[3]}c.baseColorTexture!==void 0&&h.push(t.assignTexture(o,"map",c.baseColorTexture,Ke)),o.metalness=c.metallicFactor!==void 0?c.metallicFactor:1,o.roughness=c.roughnessFactor!==void 0?c.roughnessFactor:1,c.metallicRoughnessTexture!==void 0&&(h.push(t.assignTexture(o,"metalnessMap",c.metallicRoughnessTexture)),h.push(t.assignTexture(o,"roughnessMap",c.metallicRoughnessTexture))),s=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}i.doubleSided===!0&&(o.side=pn);const u=i.alphaMode||Is.OPAQUE;if(u===Is.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Is.MASK&&(o.alphaTest=i.alphaCutoff!==void 0?i.alphaCutoff:.5)),i.normalTexture!==void 0&&s!==Qn&&(h.push(t.assignTexture(o,"normalMap",i.normalTexture)),o.normalScale=new dt(1,1),i.normalTexture.scale!==void 0)){const c=i.normalTexture.scale;o.normalScale.set(c,c)}return i.occlusionTexture!==void 0&&s!==Qn&&(h.push(t.assignTexture(o,"aoMap",i.occlusionTexture)),i.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=i.occlusionTexture.strength)),i.emissiveFactor!==void 0&&s!==Qn&&(o.emissive=new $e().fromArray(i.emissiveFactor)),i.emissiveTexture!==void 0&&s!==Qn&&h.push(t.assignTexture(o,"emissiveMap",i.emissiveTexture,Ke)),Promise.all(h).then(function(){const c=new s(o);return i.name&&(c.name=i.name),zn(c,i),t.associations.set(c,{materials:e}),i.extensions&&ir(r,c,i),c})}createUniqueName(e){const t=pt.sanitizeNodeName(e||"");let n=t;for(let r=1;this.nodeNamesUsed[n];++r)n=t+"_"+r;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,r=this.primitiveCache;function i(o){return n[lt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return $o(l,o,t)})}const s=[];for(let o=0,l=e.length;o<l;o++){const h=e[o],u=mv(h),c=r[u];if(c)s.push(c.promise);else{let d;h.extensions&&h.extensions[lt.KHR_DRACO_MESH_COMPRESSION]?d=i(h):d=$o(new gn,h,t),r[u]={primitive:h,promise:d},s.push(d)}}return Promise.all(s)}loadMesh(e){const t=this,n=this.json,r=this.extensions,i=n.meshes[e],s=i.primitives,o=[];for(let l=0,h=s.length;l<h;l++){const u=s[l].material===void 0?dv(this.cache):this.getDependency("material",s[l].material);o.push(u)}return o.push(t.loadGeometries(s)),Promise.all(o).then(function(l){const h=l.slice(0,l.length-1),u=l[l.length-1],c=[];for(let f=0,m=u.length;f<m;f++){const g=u[f],v=s[f];let p;const _=h[f];if(v.mode===Qt.TRIANGLES||v.mode===Qt.TRIANGLE_STRIP||v.mode===Qt.TRIANGLE_FAN||v.mode===void 0)p=i.isSkinnedMesh===!0?new sm(g,_):new Vt(g,_),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),v.mode===Qt.TRIANGLE_STRIP?p.geometry=qo(p.geometry,rl):v.mode===Qt.TRIANGLE_FAN&&(p.geometry=qo(p.geometry,Bs));else if(v.mode===Qt.LINES)p=new hm(g,_);else if(v.mode===Qt.LINE_STRIP)p=new ia(g,_);else if(v.mode===Qt.LINE_LOOP)p=new um(g,_);else if(v.mode===Qt.POINTS)p=new dm(g,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+v.mode);Object.keys(p.geometry.morphAttributes).length>0&&pv(p,i),p.name=t.createUniqueName(i.name||"mesh_"+e),zn(p,i),v.extensions&&ir(r,p,v),t.assignFinalMaterial(p),c.push(p)}for(let f=0,m=c.length;f<m;f++)t.associations.set(c[f],{meshes:e,primitives:f});if(c.length===1)return c[0];const d=new ei;t.associations.set(d,{meshes:e});for(let f=0,m=c.length;f<m;f++)d.add(c[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Wt(Jc.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new Zr(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),zn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let r=0,i=t.joints.length;r<i;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){const i=r.pop(),s=r,o=[],l=[];for(let h=0,u=s.length;h<u;h++){const c=s[h];if(c){o.push(c);const d=new rt;i!==null&&d.fromArray(i.array,h*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[h])}return new na(o,l)})}loadAnimation(e){const n=this.json.animations[e],r=n.name?n.name:"animation_"+e,i=[],s=[],o=[],l=[],h=[];for(let u=0,c=n.channels.length;u<c;u++){const d=n.channels[u],f=n.samplers[d.sampler],m=d.target,g=m.node,v=n.parameters!==void 0?n.parameters[f.input]:f.input,p=n.parameters!==void 0?n.parameters[f.output]:f.output;m.node!==void 0&&(i.push(this.getDependency("node",g)),s.push(this.getDependency("accessor",v)),o.push(this.getDependency("accessor",p)),l.push(f),h.push(m))}return Promise.all([Promise.all(i),Promise.all(s),Promise.all(o),Promise.all(l),Promise.all(h)]).then(function(u){const c=u[0],d=u[1],f=u[2],m=u[3],g=u[4],v=[];for(let p=0,_=c.length;p<_;p++){const y=c[p],x=d[p],S=f[p],C=m[p],B=g[p];if(y===void 0)continue;y.updateMatrix();let F;switch(On[B.path]){case On.weights:F=dr;break;case On.rotation:F=ui;break;case On.position:case On.scale:default:F=fr;break}const M=y.name?y.name:y.uuid,E=C.interpolation!==void 0?uv[C.interpolation]:Hi,D=[];On[B.path]===On.weights?y.traverse(function(I){I.morphTargetInfluences&&D.push(I.name?I.name:I.uuid)}):D.push(M);let H=S.array;if(S.normalized){const I=Xs(H.constructor),X=new Float32Array(H.length);for(let W=0,te=H.length;W<te;W++)X[W]=H[W]*I;H=X}for(let I=0,X=D.length;I<X;I++){const W=new F(D[I]+"."+On[B.path],x.array,H,E);C.interpolation==="CUBICSPLINE"&&(W.createInterpolant=function(O){const U=this instanceof ui?hv:Fl;return new U(this.times,this.values,this.getValueSize()/3,O)},W.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),v.push(W)}}return new _m(r,void 0,v)})}createNodeMesh(e){const t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(i){const s=n._getNodeRef(n.meshCache,r.mesh,i);return r.weights!==void 0&&s.traverse(function(o){if(o.isMesh)for(let l=0,h=r.weights.length;l<h;l++)o.morphTargetInfluences[l]=r.weights[l]}),s})}loadNode(e){const t=this.json,n=this,r=t.nodes[e],i=n._loadNodeShallow(e),s=[],o=r.children||[];for(let h=0,u=o.length;h<u;h++)s.push(n.getDependency("node",o[h]));const l=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([i,Promise.all(s),l]).then(function(h){const u=h[0],c=h[1],d=h[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,gv)});for(let f=0,m=c.length;f<m;f++)u.add(c[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const i=t.nodes[e],s=i.name?r.createUniqueName(i.name):"",o=[],l=r._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return l&&o.push(l),i.camera!==void 0&&o.push(r.getDependency("camera",i.camera).then(function(h){return r._getNodeRef(r.cameraCache,i.camera,h)})),r._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){o.push(h)}),this.nodeCache[e]=Promise.all(o).then(function(h){let u;if(i.isBone===!0?u=new bl:h.length>1?u=new ei:h.length===1?u=h[0]:u=new xt,u!==h[0])for(let c=0,d=h.length;c<d;c++)u.add(h[c]);if(i.name&&(u.userData.name=i.name,u.name=s),zn(u,i),i.extensions&&ir(n,u,i),i.matrix!==void 0){const c=new rt;c.fromArray(i.matrix),u.applyMatrix4(c)}else i.translation!==void 0&&u.position.fromArray(i.translation),i.rotation!==void 0&&u.quaternion.fromArray(i.rotation),i.scale!==void 0&&u.scale.fromArray(i.scale);return r.associations.has(u)||r.associations.set(u,{}),r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],r=this,i=new ei;n.name&&(i.name=r.createUniqueName(n.name)),zn(i,n),n.extensions&&ir(t,i,n);const s=n.nodes||[],o=[];for(let l=0,h=s.length;l<h;l++)o.push(r.getDependency("node",s[l]));return Promise.all(o).then(function(l){for(let u=0,c=l.length;u<c;u++)i.add(l[u]);const h=u=>{const c=new Map;for(const[d,f]of r.associations)(d instanceof un||d instanceof It)&&c.set(d,f);return u.traverse(d=>{const f=r.associations.get(d);f!=null&&c.set(d,f)}),c};return r.associations=h(i),i})}}function xv(a,e,t){const n=e.attributes,r=new Pn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,h=o.max;if(l!==void 0&&h!==void 0){if(r.set(new Q(l[0],l[1],l[2]),new Q(h[0],h[1],h[2])),o.normalized){const u=Xs(Fi[o.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const i=e.targets;if(i!==void 0){const o=new Q,l=new Q;for(let h=0,u=i.length;h<u;h++){const c=i[h];if(c.POSITION!==void 0){const d=t.json.accessors[c.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){const g=Xs(Fi[d.componentType]);l.multiplyScalar(g)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(o)}a.boundingBox=r;const s=new In;r.getCenter(s.center),s.radius=r.min.distanceTo(r.max)/2,a.boundingSphere=s}function $o(a,e,t){const n=e.attributes,r=[];function i(s,o){return t.getDependency("accessor",s).then(function(l){a.setAttribute(o,l)})}for(const s in n){const o=Ws[s]||s.toLowerCase();o in a.attributes||r.push(i(n[s],o))}if(e.indices!==void 0&&!a.index){const s=t.getDependency("accessor",e.indices).then(function(o){a.setIndex(o)});r.push(s)}return zn(a,e),xv(a,e,t),Promise.all(r).then(function(){return e.targets!==void 0?fv(a,e.targets,t):a})}const yv=new Gm;function Mv(a){yv.load("/background.glb",function(e){const t=e.scene;t.position.set(0,0,0),t.scale.set(1,1,1),a.add(t)},void 0,function(e){console.error(e)})}function kr(a){throw new Error('Could not dynamically require "'+a+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Bl={exports:{}};(function(a,e){(function(t){a.exports=t()})(function(){return function t(n,r,i){function s(h,u){if(!r[h]){if(!n[h]){var c=typeof kr=="function"&&kr;if(!u&&c)return c(h,!0);if(o)return o(h,!0);throw new Error("Cannot find module '"+h+"'")}var d=r[h]={exports:{}};n[h][0].call(d.exports,function(f){var m=n[h][1][f];return s(m||f)},d,d.exports,t,n,r,i)}return r[h].exports}for(var o=typeof kr=="function"&&kr,l=0;l<i.length;l++)s(i[l]);return s}({1:[function(t,n,r){n.exports={name:"cannon",version:"0.6.2",description:"A lightweight 3D physics engine written in JavaScript.",homepage:"https://github.com/schteppe/cannon.js",author:"Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",keywords:["cannon.js","cannon","physics","engine","3d"],main:"./build/cannon.js",engines:{node:"*"},repository:{type:"git",url:"https://github.com/schteppe/cannon.js.git"},bugs:{url:"https://github.com/schteppe/cannon.js/issues"},licenses:[{type:"MIT"}],devDependencies:{jshint:"latest","uglify-js":"latest",nodeunit:"^0.9.0",grunt:"~0.4.0","grunt-contrib-jshint":"~0.1.1","grunt-contrib-nodeunit":"^0.4.1","grunt-contrib-concat":"~0.1.3","grunt-contrib-uglify":"^0.5.1","grunt-browserify":"^2.1.4","grunt-contrib-yuidoc":"^0.5.2",browserify:"*"},dependencies:{}}},{}],2:[function(t,n,r){n.exports={version:t("../package.json").version,AABB:t("./collision/AABB"),ArrayCollisionMatrix:t("./collision/ArrayCollisionMatrix"),Body:t("./objects/Body"),Box:t("./shapes/Box"),Broadphase:t("./collision/Broadphase"),Constraint:t("./constraints/Constraint"),ContactEquation:t("./equations/ContactEquation"),Narrowphase:t("./world/Narrowphase"),ConeTwistConstraint:t("./constraints/ConeTwistConstraint"),ContactMaterial:t("./material/ContactMaterial"),ConvexPolyhedron:t("./shapes/ConvexPolyhedron"),Cylinder:t("./shapes/Cylinder"),DistanceConstraint:t("./constraints/DistanceConstraint"),Equation:t("./equations/Equation"),EventTarget:t("./utils/EventTarget"),FrictionEquation:t("./equations/FrictionEquation"),GSSolver:t("./solver/GSSolver"),GridBroadphase:t("./collision/GridBroadphase"),Heightfield:t("./shapes/Heightfield"),HingeConstraint:t("./constraints/HingeConstraint"),LockConstraint:t("./constraints/LockConstraint"),Mat3:t("./math/Mat3"),Material:t("./material/Material"),NaiveBroadphase:t("./collision/NaiveBroadphase"),ObjectCollisionMatrix:t("./collision/ObjectCollisionMatrix"),Pool:t("./utils/Pool"),Particle:t("./shapes/Particle"),Plane:t("./shapes/Plane"),PointToPointConstraint:t("./constraints/PointToPointConstraint"),Quaternion:t("./math/Quaternion"),Ray:t("./collision/Ray"),RaycastVehicle:t("./objects/RaycastVehicle"),RaycastResult:t("./collision/RaycastResult"),RigidVehicle:t("./objects/RigidVehicle"),RotationalEquation:t("./equations/RotationalEquation"),RotationalMotorEquation:t("./equations/RotationalMotorEquation"),SAPBroadphase:t("./collision/SAPBroadphase"),SPHSystem:t("./objects/SPHSystem"),Shape:t("./shapes/Shape"),Solver:t("./solver/Solver"),Sphere:t("./shapes/Sphere"),SplitSolver:t("./solver/SplitSolver"),Spring:t("./objects/Spring"),Trimesh:t("./shapes/Trimesh"),Vec3:t("./math/Vec3"),Vec3Pool:t("./utils/Vec3Pool"),World:t("./world/World")}},{"../package.json":1,"./collision/AABB":3,"./collision/ArrayCollisionMatrix":4,"./collision/Broadphase":5,"./collision/GridBroadphase":6,"./collision/NaiveBroadphase":7,"./collision/ObjectCollisionMatrix":8,"./collision/Ray":9,"./collision/RaycastResult":10,"./collision/SAPBroadphase":11,"./constraints/ConeTwistConstraint":12,"./constraints/Constraint":13,"./constraints/DistanceConstraint":14,"./constraints/HingeConstraint":15,"./constraints/LockConstraint":16,"./constraints/PointToPointConstraint":17,"./equations/ContactEquation":19,"./equations/Equation":20,"./equations/FrictionEquation":21,"./equations/RotationalEquation":22,"./equations/RotationalMotorEquation":23,"./material/ContactMaterial":24,"./material/Material":25,"./math/Mat3":27,"./math/Quaternion":28,"./math/Vec3":30,"./objects/Body":31,"./objects/RaycastVehicle":32,"./objects/RigidVehicle":33,"./objects/SPHSystem":34,"./objects/Spring":35,"./shapes/Box":37,"./shapes/ConvexPolyhedron":38,"./shapes/Cylinder":39,"./shapes/Heightfield":40,"./shapes/Particle":41,"./shapes/Plane":42,"./shapes/Shape":43,"./shapes/Sphere":44,"./shapes/Trimesh":45,"./solver/GSSolver":46,"./solver/Solver":47,"./solver/SplitSolver":48,"./utils/EventTarget":49,"./utils/Pool":51,"./utils/Vec3Pool":54,"./world/Narrowphase":55,"./world/World":56}],3:[function(t,n,r){var i=t("../math/Vec3");t("../utils/Utils"),n.exports=s;function s(h){h=h||{},this.lowerBound=new i,h.lowerBound&&this.lowerBound.copy(h.lowerBound),this.upperBound=new i,h.upperBound&&this.upperBound.copy(h.upperBound)}var o=new i;s.prototype.setFromPoints=function(h,u,c,d){var f=this.lowerBound,m=this.upperBound,g=c;f.copy(h[0]),g&&g.vmult(f,f),m.copy(f);for(var v=1;v<h.length;v++){var p=h[v];g&&(g.vmult(p,o),p=o),p.x>m.x&&(m.x=p.x),p.x<f.x&&(f.x=p.x),p.y>m.y&&(m.y=p.y),p.y<f.y&&(f.y=p.y),p.z>m.z&&(m.z=p.z),p.z<f.z&&(f.z=p.z)}return u&&(u.vadd(f,f),u.vadd(m,m)),d&&(f.x-=d,f.y-=d,f.z-=d,m.x+=d,m.y+=d,m.z+=d),this},s.prototype.copy=function(h){return this.lowerBound.copy(h.lowerBound),this.upperBound.copy(h.upperBound),this},s.prototype.clone=function(){return new s().copy(this)},s.prototype.extend=function(h){var u=h.lowerBound.x;this.lowerBound.x>u&&(this.lowerBound.x=u);var c=h.upperBound.x;this.upperBound.x<c&&(this.upperBound.x=c);var u=h.lowerBound.y;this.lowerBound.y>u&&(this.lowerBound.y=u);var c=h.upperBound.y;this.upperBound.y<c&&(this.upperBound.y=c);var u=h.lowerBound.z;this.lowerBound.z>u&&(this.lowerBound.z=u);var c=h.upperBound.z;this.upperBound.z<c&&(this.upperBound.z=c)},s.prototype.overlaps=function(h){var u=this.lowerBound,c=this.upperBound,d=h.lowerBound,f=h.upperBound;return(d.x<=c.x&&c.x<=f.x||u.x<=f.x&&f.x<=c.x)&&(d.y<=c.y&&c.y<=f.y||u.y<=f.y&&f.y<=c.y)&&(d.z<=c.z&&c.z<=f.z||u.z<=f.z&&f.z<=c.z)},s.prototype.contains=function(h){var u=this.lowerBound,c=this.upperBound,d=h.lowerBound,f=h.upperBound;return u.x<=d.x&&c.x>=f.x&&u.y<=d.y&&c.y>=f.y&&u.z<=d.z&&c.z>=f.z},s.prototype.getCorners=function(h,u,c,d,f,m,g,v){var p=this.lowerBound,_=this.upperBound;h.copy(p),u.set(_.x,p.y,p.z),c.set(_.x,_.y,p.z),d.set(p.x,_.y,_.z),f.set(_.x,p.y,p.z),m.set(p.x,_.y,p.z),g.set(p.x,p.y,_.z),v.copy(_)};var l=[new i,new i,new i,new i,new i,new i,new i,new i];s.prototype.toLocalFrame=function(h,u){var c=l,d=c[0],f=c[1],m=c[2],g=c[3],v=c[4],p=c[5],_=c[6],y=c[7];this.getCorners(d,f,m,g,v,p,_,y);for(var x=0;x!==8;x++){var S=c[x];h.pointToLocal(S,S)}return u.setFromPoints(c)},s.prototype.toWorldFrame=function(h,u){var c=l,d=c[0],f=c[1],m=c[2],g=c[3],v=c[4],p=c[5],_=c[6],y=c[7];this.getCorners(d,f,m,g,v,p,_,y);for(var x=0;x!==8;x++){var S=c[x];h.pointToWorld(S,S)}return u.setFromPoints(c)}},{"../math/Vec3":30,"../utils/Utils":53}],4:[function(t,n,r){n.exports=i;function i(){this.matrix=[]}i.prototype.get=function(s,o){if(s=s.index,o=o.index,o>s){var l=o;o=s,s=l}return this.matrix[(s*(s+1)>>1)+o-1]},i.prototype.set=function(s,o,l){if(s=s.index,o=o.index,o>s){var h=o;o=s,s=h}this.matrix[(s*(s+1)>>1)+o-1]=l?1:0},i.prototype.reset=function(){for(var s=0,o=this.matrix.length;s!==o;s++)this.matrix[s]=0},i.prototype.setNumObjects=function(s){this.matrix.length=s*(s-1)>>1}},{}],5:[function(t,n,r){var i=t("../objects/Body"),s=t("../math/Vec3"),o=t("../math/Quaternion");t("../shapes/Shape"),t("../shapes/Plane"),n.exports=l;function l(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}l.prototype.collisionPairs=function(g,v,p){throw new Error("collisionPairs not implemented for this BroadPhase class!")};var h=i.STATIC|i.KINEMATIC;l.prototype.needBroadphaseCollision=function(g,v){return!(!(g.collisionFilterGroup&v.collisionFilterMask)||!(v.collisionFilterGroup&g.collisionFilterMask)||(g.type&h||g.sleepState===i.SLEEPING)&&(v.type&h||v.sleepState===i.SLEEPING))},l.prototype.intersectionTest=function(g,v,p,_){this.useBoundingBoxes?this.doBoundingBoxBroadphase(g,v,p,_):this.doBoundingSphereBroadphase(g,v,p,_)};var u=new s;new s,new o,new s,l.prototype.doBoundingSphereBroadphase=function(g,v,p,_){var y=u;v.position.vsub(g.position,y);var x=Math.pow(g.boundingRadius+v.boundingRadius,2),S=y.norm2();S<x&&(p.push(g),_.push(v))},l.prototype.doBoundingBoxBroadphase=function(g,v,p,_){g.aabbNeedsUpdate&&g.computeAABB(),v.aabbNeedsUpdate&&v.computeAABB(),g.aabb.overlaps(v.aabb)&&(p.push(g),_.push(v))};var c={keys:[]},d=[],f=[];l.prototype.makePairsUnique=function(g,v){for(var p=c,_=d,y=f,x=g.length,S=0;S!==x;S++)_[S]=g[S],y[S]=v[S];g.length=0,v.length=0;for(var S=0;S!==x;S++){var C=_[S].id,B=y[S].id,F=C<B?C+","+B:B+","+C;p[F]=S,p.keys.push(F)}for(var S=0;S!==p.keys.length;S++){var F=p.keys.pop(),M=p[F];g.push(_[M]),v.push(y[M]),delete p[F]}},l.prototype.setWorld=function(g){};var m=new s;l.boundingSphereCheck=function(g,v){var p=m;return g.position.vsub(v.position,p),Math.pow(g.shape.boundingSphereRadius+v.shape.boundingSphereRadius,2)>p.norm2()},l.prototype.aabbQuery=function(g,v,p){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Plane":42,"../shapes/Shape":43}],6:[function(t,n,r){n.exports=l;var i=t("./Broadphase"),s=t("../math/Vec3"),o=t("../shapes/Shape");function l(u,c,d,f,m){i.apply(this),this.nx=d||10,this.ny=f||10,this.nz=m||10,this.aabbMin=u||new s(100,100,100),this.aabbMax=c||new s(-100,-100,-100);var g=this.nx*this.ny*this.nz;if(g<=0)throw"GridBroadphase: Each dimension's n must be >0";this.bins=[],this.binLengths=[],this.bins.length=g,this.binLengths.length=g;for(var v=0;v<g;v++)this.bins[v]=[],this.binLengths[v]=0}l.prototype=new i,l.prototype.constructor=l;var h=new s;new s,l.prototype.collisionPairs=function(u,c,d){var f=u.numObjects(),m=u.bodies,P=this.aabbMax,G=this.aabbMin,g=this.nx,v=this.ny,p=this.nz,_=v*p,y=p,x=1,S=P.x,C=P.y,B=P.z,F=G.x,M=G.y,E=G.z,D=g/(S-F),H=v/(C-M),I=p/(B-E),X=(S-F)/g,W=(C-M)/v,te=(B-E)/p,O=Math.sqrt(X*X+W*W+te*te)*.5,U=o.types,J=U.SPHERE,j=U.PLANE;U.BOX,U.COMPOUND,U.CONVEXPOLYHEDRON;for(var V=this.bins,k=this.binLengths,b=this.bins.length,A=0;A!==b;A++)k[A]=0;var R=Math.ceil,G=Math.min,P=Math.max;function ee(de,Be,Ve,He,Ie,ze,Ze){var tt=(de-F)*D|0,ct=(Be-M)*H|0,Y=(Ve-E)*I|0,le=R((He-F)*D),xe=R((Ie-M)*H),be=R((ze-E)*I);tt<0?tt=0:tt>=g&&(tt=g-1),ct<0?ct=0:ct>=v&&(ct=v-1),Y<0?Y=0:Y>=p&&(Y=p-1),le<0?le=0:le>=g&&(le=g-1),xe<0?xe=0:xe>=v&&(xe=v-1),be<0?be=0:be>=p&&(be=p-1),tt*=_,ct*=y,Y*=x,le*=_,xe*=y,be*=x;for(var Oe=tt;Oe<=le;Oe+=_)for(var st=ct;st<=xe;st+=y)for(var at=Y;at<=be;at+=x){var _t=Oe+st+at;V[_t][k[_t]++]=Ze}}for(var A=0;A!==f;A++){var K=m[A],Z=K.shape;switch(Z.type){case J:var ie=K.position.x,Te=K.position.y,pe=K.position.z,ge=Z.radius;ee(ie-ge,Te-ge,pe-ge,ie+ge,Te+ge,pe+ge,K);break;case j:Z.worldNormalNeedsUpdate&&Z.computeWorldNormal(K.quaternion);var ce=Z.worldNormal,ve=F+X*.5-K.position.x,ke=M+W*.5-K.position.y,De=E+te*.5-K.position.z,Ge=h;Ge.set(ve,ke,De);for(var Ee=0,qe=0;Ee!==g;Ee++,qe+=_,Ge.y=ke,Ge.x+=X)for(var N=0,w=0;N!==v;N++,w+=y,Ge.z=De,Ge.y+=W)for(var ne=0,ue=0;ne!==p;ne++,ue+=x,Ge.z+=te)if(Ge.dot(ce)<O){var me=qe+w+ue;V[me][k[me]++]=K}break;default:K.aabbNeedsUpdate&&K.computeAABB(),ee(K.aabb.lowerBound.x,K.aabb.lowerBound.y,K.aabb.lowerBound.z,K.aabb.upperBound.x,K.aabb.upperBound.y,K.aabb.upperBound.z,K);break}}for(var A=0;A!==b;A++){var ye=k[A];if(ye>1)for(var Fe=V[A],Ee=0;Ee!==ye;Ee++)for(var K=Fe[Ee],N=0;N!==Ee;N++){var Ce=Fe[N];this.needBroadphaseCollision(K,Ce)&&this.intersectionTest(K,Ce,c,d)}}this.makePairsUnique(c,d)}},{"../math/Vec3":30,"../shapes/Shape":43,"./Broadphase":5}],7:[function(t,n,r){n.exports=o;var i=t("./Broadphase"),s=t("./AABB");function o(){i.apply(this)}o.prototype=new i,o.prototype.constructor=o,o.prototype.collisionPairs=function(l,h,u){var c=l.bodies,d=c.length,f,m,g,v;for(f=0;f!==d;f++)for(m=0;m!==f;m++)g=c[f],v=c[m],this.needBroadphaseCollision(g,v)&&this.intersectionTest(g,v,h,u)},new s,o.prototype.aabbQuery=function(l,h,u){u=u||[];for(var c=0;c<l.bodies.length;c++){var d=l.bodies[c];d.aabbNeedsUpdate&&d.computeAABB(),d.aabb.overlaps(h)&&u.push(d)}return u}},{"./AABB":3,"./Broadphase":5}],8:[function(t,n,r){n.exports=i;function i(){this.matrix={}}i.prototype.get=function(s,o){if(s=s.id,o=o.id,o>s){var l=o;o=s,s=l}return s+"-"+o in this.matrix},i.prototype.set=function(s,o,l){if(s=s.id,o=o.id,o>s){var h=o;o=s,s=h}l?this.matrix[s+"-"+o]=!0:delete this.matrix[s+"-"+o]},i.prototype.reset=function(){this.matrix={}},i.prototype.setNumObjects=function(s){}},{}],9:[function(t,n,r){n.exports=c;var i=t("../math/Vec3"),s=t("../math/Quaternion"),o=t("../math/Transform");t("../shapes/ConvexPolyhedron"),t("../shapes/Box");var l=t("../collision/RaycastResult"),h=t("../shapes/Shape"),u=t("../collision/AABB");function c(b,A){this.from=b?b.clone():new i,this.to=A?A.clone():new i,this._direction=new i,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=c.ANY,this.result=new l,this.hasHit=!1,this.callback=function(R){}}c.prototype.constructor=c,c.CLOSEST=1,c.ANY=2,c.ALL=4;var d=new u,f=[];c.prototype.intersectWorld=function(b,A){return this.mode=A.mode||c.ANY,this.result=A.result||new l,this.skipBackfaces=!!A.skipBackfaces,this.collisionFilterMask=typeof A.collisionFilterMask<"u"?A.collisionFilterMask:-1,this.collisionFilterGroup=typeof A.collisionFilterGroup<"u"?A.collisionFilterGroup:-1,A.from&&this.from.copy(A.from),A.to&&this.to.copy(A.to),this.callback=A.callback||function(){},this.hasHit=!1,this.result.reset(),this._updateDirection(),this.getAABB(d),f.length=0,b.broadphase.aabbQuery(b,d,f),this.intersectBodies(f),this.hasHit};var m=new i,g=new i;c.pointInTriangle=v;function v(b,A,R,G){G.vsub(A,j),R.vsub(A,m),b.vsub(A,g);var P=j.dot(j),ee=j.dot(m),K=j.dot(g),Z=m.dot(m),ie=m.dot(g),Te,pe;return(Te=Z*K-ee*ie)>=0&&(pe=P*ie-ee*K)>=0&&Te+pe<P*Z-ee*ee}var p=new i,_=new s;c.prototype.intersectBody=function(b,A){A&&(this.result=A,this._updateDirection());var R=this.checkCollisionResponse;if(!(R&&!b.collisionResponse)&&!(!(this.collisionFilterGroup&b.collisionFilterMask)||!(b.collisionFilterGroup&this.collisionFilterMask)))for(var G=p,P=_,ee=0,K=b.shapes.length;ee<K;ee++){var Z=b.shapes[ee];if(!(R&&!Z.collisionResponse)&&(b.quaternion.mult(b.shapeOrientations[ee],P),b.quaternion.vmult(b.shapeOffsets[ee],G),G.vadd(b.position,G),this.intersectShape(Z,P,G,b),this.result._shouldStop))break}},c.prototype.intersectBodies=function(b,A){A&&(this.result=A,this._updateDirection());for(var R=0,G=b.length;!this.result._shouldStop&&R<G;R++)this.intersectBody(b[R])},c.prototype._updateDirection=function(){this.to.vsub(this.from,this._direction),this._direction.normalize()},c.prototype.intersectShape=function(b,A,R,G){var P=this.from,ee=k(P,this._direction,R);if(!(ee>b.boundingSphereRadius)){var K=this[b.type];K&&K.call(this,b,A,R,G)}},new i,new i;var y=new i,x=new i,S=new i,C=new i;new i,new l,c.prototype.intersectBox=function(b,A,R,G){return this.intersectConvex(b.convexPolyhedronRepresentation,A,R,G)},c.prototype[h.types.BOX]=c.prototype.intersectBox,c.prototype.intersectPlane=function(b,A,R,G){var P=this.from,ee=this.to,K=this._direction,Z=new i(0,0,1);A.vmult(Z,Z);var ie=new i;P.vsub(R,ie);var Te=ie.dot(Z);ee.vsub(R,ie);var pe=ie.dot(Z);if(!(Te*pe>0)&&!(P.distanceTo(ee)<Te)){var ge=Z.dot(K);if(!(Math.abs(ge)<this.precision)){var ce=new i,ve=new i,ke=new i;P.vsub(R,ce);var De=-Z.dot(ce)/ge;K.scale(De,ve),P.vadd(ve,ke),this.reportIntersection(Z,ke,b,G,-1)}}},c.prototype[h.types.PLANE]=c.prototype.intersectPlane,c.prototype.getAABB=function(b){var A=this.to,R=this.from;b.lowerBound.x=Math.min(A.x,R.x),b.lowerBound.y=Math.min(A.y,R.y),b.lowerBound.z=Math.min(A.z,R.z),b.upperBound.x=Math.max(A.x,R.x),b.upperBound.y=Math.max(A.y,R.y),b.upperBound.z=Math.max(A.z,R.z)};var B={faceList:[0]};c.prototype.intersectHeightfield=function(b,A,R,G){b.data,b.elementSize;var P=new i,ee=new c(this.from,this.to);o.pointToLocalFrame(R,A,ee.from,ee.from),o.pointToLocalFrame(R,A,ee.to,ee.to);var K=[],Z=null,ie=null,Te=null,pe=null,ge=b.getIndexOfPosition(ee.from.x,ee.from.y,K,!1);if(ge&&(Z=K[0],ie=K[1],Te=K[0],pe=K[1]),ge=b.getIndexOfPosition(ee.to.x,ee.to.y,K,!1),ge&&((Z===null||K[0]<Z)&&(Z=K[0]),(Te===null||K[0]>Te)&&(Te=K[0]),(ie===null||K[1]<ie)&&(ie=K[1]),(pe===null||K[1]>pe)&&(pe=K[1])),Z!==null){var ce=[];b.getRectMinMax(Z,ie,Te,pe,ce),ce[0],ce[1];for(var ve=Z;ve<=Te;ve++)for(var ke=ie;ke<=pe;ke++){if(this.result._shouldStop||(b.getConvexTrianglePillar(ve,ke,!1),o.pointToWorldFrame(R,A,b.pillarOffset,P),this.intersectConvex(b.pillarConvex,A,P,G,B),this.result._shouldStop))return;b.getConvexTrianglePillar(ve,ke,!0),o.pointToWorldFrame(R,A,b.pillarOffset,P),this.intersectConvex(b.pillarConvex,A,P,G,B)}}},c.prototype[h.types.HEIGHTFIELD]=c.prototype.intersectHeightfield;var F=new i,M=new i;c.prototype.intersectSphere=function(b,A,R,G){var P=this.from,ee=this.to,K=b.radius,Z=Math.pow(ee.x-P.x,2)+Math.pow(ee.y-P.y,2)+Math.pow(ee.z-P.z,2),ie=2*((ee.x-P.x)*(P.x-R.x)+(ee.y-P.y)*(P.y-R.y)+(ee.z-P.z)*(P.z-R.z)),Te=Math.pow(P.x-R.x,2)+Math.pow(P.y-R.y,2)+Math.pow(P.z-R.z,2)-Math.pow(K,2),pe=Math.pow(ie,2)-4*Z*Te,ge=F,ce=M;if(!(pe<0))if(pe===0)P.lerp(ee,pe,ge),ge.vsub(R,ce),ce.normalize(),this.reportIntersection(ce,ge,b,G,-1);else{var ve=(-ie-Math.sqrt(pe))/(2*Z),ke=(-ie+Math.sqrt(pe))/(2*Z);if(ve>=0&&ve<=1&&(P.lerp(ee,ve,ge),ge.vsub(R,ce),ce.normalize(),this.reportIntersection(ce,ge,b,G,-1)),this.result._shouldStop)return;ke>=0&&ke<=1&&(P.lerp(ee,ke,ge),ge.vsub(R,ce),ce.normalize(),this.reportIntersection(ce,ge,b,G,-1))}},c.prototype[h.types.SPHERE]=c.prototype.intersectSphere;var E=new i;new i,new i;var D=new i;c.prototype.intersectConvex=function(A,R,G,P,ee){for(var K=E,Z=D,ie=ee&&ee.faceList||null,Te=A.faces,pe=A.vertices,ge=A.faceNormals,ce=this._direction,ve=this.from,ke=this.to,De=ve.distanceTo(ke),Ge=ie?ie.length:Te.length,Ee=this.result,qe=0;!Ee._shouldStop&&qe<Ge;qe++){var N=ie?ie[qe]:qe,w=Te[N],ne=ge[N],ue=R,me=G;Z.copy(pe[w[0]]),ue.vmult(Z,Z),Z.vadd(me,Z),Z.vsub(ve,Z),ue.vmult(ne,K);var ye=ce.dot(K);if(!(Math.abs(ye)<this.precision)){var Fe=K.dot(Z)/ye;if(!(Fe<0)){ce.mult(Fe,y),y.vadd(ve,y),x.copy(pe[w[0]]),ue.vmult(x,x),me.vadd(x,x);for(var Ce=1;!Ee._shouldStop&&Ce<w.length-1;Ce++){S.copy(pe[w[Ce]]),C.copy(pe[w[Ce+1]]),ue.vmult(S,S),ue.vmult(C,C),me.vadd(S,S),me.vadd(C,C);var de=y.distanceTo(ve);!(v(y,x,S,C)||v(y,S,x,C))||de>De||this.reportIntersection(K,y,A,P,N)}}}}},c.prototype[h.types.CONVEXPOLYHEDRON]=c.prototype.intersectConvex;var H=new i,I=new i,X=new i,W=new i,te=new i,O=new i;new u;var U=[],J=new o;c.prototype.intersectTrimesh=function(A,R,G,P,ee){var K=H,Z=U,ie=J,Te=D,pe=I,ge=X,ce=W,ve=O,ke=te;ee&&ee.faceList;var De=A.indices;A.vertices,A.faceNormals;var Ge=this.from,Ee=this.to,qe=this._direction;ie.position.copy(G),ie.quaternion.copy(R),o.vectorToLocalFrame(G,R,qe,pe),o.pointToLocalFrame(G,R,Ge,ge),o.pointToLocalFrame(G,R,Ee,ce);var N=ge.distanceSquared(ce);A.tree.rayQuery(this,ie,Z);for(var w=0,ne=Z.length;!this.result._shouldStop&&w!==ne;w++){var ue=Z[w];A.getNormal(ue,K),A.getVertex(De[ue*3],x),x.vsub(ge,Te);var me=pe.dot(K),ye=K.dot(Te)/me;if(!(ye<0)){pe.scale(ye,y),y.vadd(ge,y),A.getVertex(De[ue*3+1],S),A.getVertex(De[ue*3+2],C);var Fe=y.distanceSquared(ge);!(v(y,S,x,C)||v(y,x,S,C))||Fe>N||(o.vectorToWorldFrame(R,K,ke),o.pointToWorldFrame(G,R,y,ve),this.reportIntersection(ke,ve,A,P,ue))}}Z.length=0},c.prototype[h.types.TRIMESH]=c.prototype.intersectTrimesh,c.prototype.reportIntersection=function(b,A,R,G,P){var ee=this.from,K=this.to,Z=ee.distanceTo(A),ie=this.result;if(!(this.skipBackfaces&&b.dot(this._direction)>0))switch(ie.hitFaceIndex=typeof P<"u"?P:-1,this.mode){case c.ALL:this.hasHit=!0,ie.set(ee,K,b,A,R,G,Z),ie.hasHit=!0,this.callback(ie);break;case c.CLOSEST:(Z<ie.distance||!ie.hasHit)&&(this.hasHit=!0,ie.hasHit=!0,ie.set(ee,K,b,A,R,G,Z));break;case c.ANY:this.hasHit=!0,ie.hasHit=!0,ie.set(ee,K,b,A,R,G,Z),ie._shouldStop=!0;break}};var j=new i,V=new i;function k(b,A,R){R.vsub(b,j);var G=j.dot(A);A.mult(G,V),V.vadd(b,V);var P=R.distanceTo(V);return P}},{"../collision/AABB":3,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/Box":37,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43}],10:[function(t,n,r){var i=t("../math/Vec3");n.exports=s;function s(){this.rayFromWorld=new i,this.rayToWorld=new i,this.hitNormalWorld=new i,this.hitPointWorld=new i,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1}s.prototype.reset=function(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1},s.prototype.abort=function(){this._shouldStop=!0},s.prototype.set=function(o,l,h,u,c,d,f){this.rayFromWorld.copy(o),this.rayToWorld.copy(l),this.hitNormalWorld.copy(h),this.hitPointWorld.copy(u),this.shape=c,this.body=d,this.distance=f}},{"../math/Vec3":30}],11:[function(t,n,r){t("../shapes/Shape");var i=t("../collision/Broadphase");n.exports=s;function s(o){i.apply(this),this.axisList=[],this.world=null,this.axisIndex=0;var l=this.axisList;this._addBodyHandler=function(h){l.push(h.body)},this._removeBodyHandler=function(h){var u=l.indexOf(h.body);u!==-1&&l.splice(u,1)},o&&this.setWorld(o)}s.prototype=new i,s.prototype.setWorld=function(o){this.axisList.length=0;for(var l=0;l<o.bodies.length;l++)this.axisList.push(o.bodies[l]);o.removeEventListener("addBody",this._addBodyHandler),o.removeEventListener("removeBody",this._removeBodyHandler),o.addEventListener("addBody",this._addBodyHandler),o.addEventListener("removeBody",this._removeBodyHandler),this.world=o,this.dirty=!0},s.insertionSortX=function(o){for(var l=1,h=o.length;l<h;l++){for(var u=o[l],c=l-1;c>=0&&!(o[c].aabb.lowerBound.x<=u.aabb.lowerBound.x);c--)o[c+1]=o[c];o[c+1]=u}return o},s.insertionSortY=function(o){for(var l=1,h=o.length;l<h;l++){for(var u=o[l],c=l-1;c>=0&&!(o[c].aabb.lowerBound.y<=u.aabb.lowerBound.y);c--)o[c+1]=o[c];o[c+1]=u}return o},s.insertionSortZ=function(o){for(var l=1,h=o.length;l<h;l++){for(var u=o[l],c=l-1;c>=0&&!(o[c].aabb.lowerBound.z<=u.aabb.lowerBound.z);c--)o[c+1]=o[c];o[c+1]=u}return o},s.prototype.collisionPairs=function(o,l,h){var u=this.axisList,c=u.length,d=this.axisIndex,f,m;for(this.dirty&&(this.sortList(),this.dirty=!1),f=0;f!==c;f++){var g=u[f];for(m=f+1;m<c;m++){var v=u[m];if(this.needBroadphaseCollision(g,v)){if(!s.checkBounds(g,v,d))break;this.intersectionTest(g,v,l,h)}}}},s.prototype.sortList=function(){for(var o=this.axisList,l=this.axisIndex,h=o.length,u=0;u!==h;u++){var c=o[u];c.aabbNeedsUpdate&&c.computeAABB()}l===0?s.insertionSortX(o):l===1?s.insertionSortY(o):l===2&&s.insertionSortZ(o)},s.checkBounds=function(o,l,h){var u,c;h===0?(u=o.position.x,c=l.position.x):h===1?(u=o.position.y,c=l.position.y):h===2&&(u=o.position.z,c=l.position.z);var d=o.boundingRadius,f=l.boundingRadius,m=u+d,g=c-f;return g<m},s.prototype.autoDetectAxis=function(){for(var o=0,l=0,h=0,u=0,c=0,d=0,f=this.axisList,m=f.length,g=1/m,v=0;v!==m;v++){var p=f[v],_=p.position.x;o+=_,l+=_*_;var y=p.position.y;h+=y,u+=y*y;var x=p.position.z;c+=x,d+=x*x}var S=l-o*o*g,C=u-h*h*g,B=d-c*c*g;S>C?S>B?this.axisIndex=0:this.axisIndex=2:C>B?this.axisIndex=1:this.axisIndex=2},s.prototype.aabbQuery=function(o,l,h){h=h||[],this.dirty&&(this.sortList(),this.dirty=!1);var u=this.axisIndex,c="x";u===1&&(c="y"),u===2&&(c="z");var d=this.axisList;l.lowerBound[c],l.upperBound[c];for(var f=0;f<d.length;f++){var m=d[f];m.aabbNeedsUpdate&&m.computeAABB(),m.aabb.overlaps(l)&&h.push(m)}return h}},{"../collision/Broadphase":5,"../shapes/Shape":43}],12:[function(t,n,r){n.exports=h,t("./Constraint");var i=t("./PointToPointConstraint"),s=t("../equations/ConeEquation"),o=t("../equations/RotationalEquation");t("../equations/ContactEquation");var l=t("../math/Vec3");function h(u,c,d){d=d||{};var f=typeof d.maxForce<"u"?d.maxForce:1e6,m=d.pivotA?d.pivotA.clone():new l,g=d.pivotB?d.pivotB.clone():new l;this.axisA=d.axisA?d.axisA.clone():new l,this.axisB=d.axisB?d.axisB.clone():new l,i.call(this,u,m,c,g,f),this.collideConnected=!!d.collideConnected,this.angle=typeof d.angle<"u"?d.angle:0;var v=this.coneEquation=new s(u,c,d),p=this.twistEquation=new o(u,c,d);this.twistAngle=typeof d.twistAngle<"u"?d.twistAngle:0,v.maxForce=0,v.minForce=-f,p.maxForce=0,p.minForce=-f,this.equations.push(v,p)}h.prototype=new i,h.constructor=h,new l,new l,h.prototype.update=function(){var u=this.bodyA,c=this.bodyB,d=this.coneEquation,f=this.twistEquation;i.prototype.update.call(this),u.vectorToWorldFrame(this.axisA,d.axisA),c.vectorToWorldFrame(this.axisB,d.axisB),this.axisA.tangents(f.axisA,f.axisA),u.vectorToWorldFrame(f.axisA,f.axisA),this.axisB.tangents(f.axisB,f.axisB),c.vectorToWorldFrame(f.axisB,f.axisB),d.angle=this.angle,f.maxAngle=this.twistAngle}},{"../equations/ConeEquation":18,"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],13:[function(t,n,r){n.exports=s;var i=t("../utils/Utils");function s(o,l,h){h=i.defaults(h,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=o,this.bodyB=l,this.id=s.idCounter++,this.collideConnected=h.collideConnected,h.wakeUpBodies&&(o&&o.wakeUp(),l&&l.wakeUp())}s.prototype.update=function(){throw new Error("method update() not implmemented in this Constraint subclass!")},s.prototype.enable=function(){for(var o=this.equations,l=0;l<o.length;l++)o[l].enabled=!0},s.prototype.disable=function(){for(var o=this.equations,l=0;l<o.length;l++)o[l].enabled=!1},s.idCounter=0},{"../utils/Utils":53}],14:[function(t,n,r){n.exports=o;var i=t("./Constraint"),s=t("../equations/ContactEquation");function o(l,h,u,c){i.call(this,l,h),typeof u>"u"&&(u=l.position.distanceTo(h.position)),typeof c>"u"&&(c=1e6),this.distance=u;var d=this.distanceEquation=new s(l,h);this.equations.push(d),d.minForce=-c,d.maxForce=c}o.prototype=new i,o.prototype.update=function(){var l=this.bodyA,h=this.bodyB,u=this.distanceEquation,c=this.distance*.5,d=u.ni;h.position.vsub(l.position,d),d.normalize(),d.mult(c,u.ri),d.mult(-c,u.rj)}},{"../equations/ContactEquation":19,"./Constraint":13}],15:[function(t,n,r){n.exports=h,t("./Constraint");var i=t("./PointToPointConstraint"),s=t("../equations/RotationalEquation"),o=t("../equations/RotationalMotorEquation");t("../equations/ContactEquation");var l=t("../math/Vec3");function h(d,f,m){m=m||{};var g=typeof m.maxForce<"u"?m.maxForce:1e6,v=m.pivotA?m.pivotA.clone():new l,p=m.pivotB?m.pivotB.clone():new l;i.call(this,d,v,f,p,g);var _=this.axisA=m.axisA?m.axisA.clone():new l(1,0,0);_.normalize();var y=this.axisB=m.axisB?m.axisB.clone():new l(1,0,0);y.normalize();var x=this.rotationalEquation1=new s(d,f,m),S=this.rotationalEquation2=new s(d,f,m),C=this.motorEquation=new o(d,f,g);C.enabled=!1,this.equations.push(x,S,C)}h.prototype=new i,h.constructor=h,h.prototype.enableMotor=function(){this.motorEquation.enabled=!0},h.prototype.disableMotor=function(){this.motorEquation.enabled=!1},h.prototype.setMotorSpeed=function(d){this.motorEquation.targetVelocity=d},h.prototype.setMotorMaxForce=function(d){this.motorEquation.maxForce=d,this.motorEquation.minForce=-d};var u=new l,c=new l;h.prototype.update=function(){var d=this.bodyA,f=this.bodyB,m=this.motorEquation,g=this.rotationalEquation1,v=this.rotationalEquation2,p=u,_=c,y=this.axisA,x=this.axisB;i.prototype.update.call(this),d.quaternion.vmult(y,p),f.quaternion.vmult(x,_),p.tangents(g.axisA,v.axisA),g.axisB.copy(_),v.axisB.copy(_),this.motorEquation.enabled&&(d.quaternion.vmult(this.axisA,m.axisA),f.quaternion.vmult(this.axisB,m.axisB))}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],16:[function(t,n,r){n.exports=l,t("./Constraint");var i=t("./PointToPointConstraint"),s=t("../equations/RotationalEquation");t("../equations/RotationalMotorEquation"),t("../equations/ContactEquation");var o=t("../math/Vec3");function l(h,u,c){c=c||{};var d=typeof c.maxForce<"u"?c.maxForce:1e6,f=new o,m=new o,g=new o;h.position.vadd(u.position,g),g.scale(.5,g),u.pointToLocalFrame(g,m),h.pointToLocalFrame(g,f),i.call(this,h,f,u,m,d);var v=this.rotationalEquation1=new s(h,u,c),p=this.rotationalEquation2=new s(h,u,c),_=this.rotationalEquation3=new s(h,u,c);this.equations.push(v,p,_)}l.prototype=new i,l.constructor=l,new o,new o,l.prototype.update=function(){var h=this.bodyA,u=this.bodyB;this.motorEquation;var c=this.rotationalEquation1,d=this.rotationalEquation2,f=this.rotationalEquation3;i.prototype.update.call(this),h.vectorToWorldFrame(o.UNIT_X,c.axisA),u.vectorToWorldFrame(o.UNIT_Y,c.axisB),h.vectorToWorldFrame(o.UNIT_Y,d.axisA),u.vectorToWorldFrame(o.UNIT_Z,d.axisB),h.vectorToWorldFrame(o.UNIT_Z,f.axisA),u.vectorToWorldFrame(o.UNIT_X,f.axisB)}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],17:[function(t,n,r){n.exports=l;var i=t("./Constraint"),s=t("../equations/ContactEquation"),o=t("../math/Vec3");function l(h,u,c,d,f){i.call(this,h,c),f=typeof f<"u"?f:1e6,this.pivotA=u?u.clone():new o,this.pivotB=d?d.clone():new o;var m=this.equationX=new s(h,c),g=this.equationY=new s(h,c),v=this.equationZ=new s(h,c);this.equations.push(m,g,v),m.minForce=g.minForce=v.minForce=-f,m.maxForce=g.maxForce=v.maxForce=f,m.ni.set(1,0,0),g.ni.set(0,1,0),v.ni.set(0,0,1)}l.prototype=new i,l.prototype.update=function(){var h=this.bodyA,u=this.bodyB,c=this.equationX,d=this.equationY,f=this.equationZ;h.quaternion.vmult(this.pivotA,c.ri),u.quaternion.vmult(this.pivotB,c.rj),d.ri.copy(c.ri),d.rj.copy(c.rj),f.ri.copy(c.ri),f.rj.copy(c.rj)}},{"../equations/ContactEquation":19,"../math/Vec3":30,"./Constraint":13}],18:[function(t,n,r){n.exports=o;var i=t("../math/Vec3");t("../math/Mat3");var s=t("./Equation");function o(u,c,d){d=d||{};var f=typeof d.maxForce<"u"?d.maxForce:1e6;s.call(this,u,c,-f,f),this.axisA=d.axisA?d.axisA.clone():new i(1,0,0),this.axisB=d.axisB?d.axisB.clone():new i(0,1,0),this.angle=typeof d.angle<"u"?d.angle:0}o.prototype=new s,o.prototype.constructor=o;var l=new i,h=new i;o.prototype.computeB=function(u){var c=this.a,d=this.b,f=this.axisA,m=this.axisB,g=l,v=h,p=this.jacobianElementA,_=this.jacobianElementB;f.cross(m,g),m.cross(f,v),p.rotational.copy(v),_.rotational.copy(g);var y=Math.cos(this.angle)-f.dot(m),x=this.computeGW(),S=this.computeGiMf(),C=-y*c-x*d-u*S;return C}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],19:[function(t,n,r){n.exports=o;var i=t("./Equation"),s=t("../math/Vec3");t("../math/Mat3");function o(v,p,_){_=typeof _<"u"?_:1e6,i.call(this,v,p,0,_),this.restitution=0,this.ri=new s,this.rj=new s,this.ni=new s}o.prototype=new i,o.prototype.constructor=o;var l=new s,h=new s,u=new s;o.prototype.computeB=function(v){var p=this.a,_=this.b,y=this.bi,x=this.bj,S=this.ri,C=this.rj,B=l,F=h,M=y.velocity,E=y.angularVelocity;y.force,y.torque;var D=x.velocity,H=x.angularVelocity;x.force,x.torque;var I=u,X=this.jacobianElementA,W=this.jacobianElementB,te=this.ni;S.cross(te,B),C.cross(te,F),te.negate(X.spatial),B.negate(X.rotational),W.spatial.copy(te),W.rotational.copy(F),I.copy(x.position),I.vadd(C,I),I.vsub(y.position,I),I.vsub(S,I);var O=te.dot(I),U=this.restitution+1,J=U*D.dot(te)-U*M.dot(te)+H.dot(F)-E.dot(B),j=this.computeGiMf(),V=-O*p-J*_-v*j;return V};var c=new s,d=new s,f=new s,m=new s,g=new s;o.prototype.getImpactVelocityAlongNormal=function(){var v=c,p=d,_=f,y=m,x=g;return this.bi.position.vadd(this.ri,_),this.bj.position.vadd(this.rj,y),this.bi.getVelocityAtWorldPoint(_,v),this.bj.getVelocityAtWorldPoint(y,p),v.vsub(p,x),this.ni.dot(x)}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],20:[function(t,n,r){n.exports=o;var i=t("../math/JacobianElement"),s=t("../math/Vec3");function o(g,v,p,_){this.id=o.id++,this.minForce=typeof p>"u"?-1e6:p,this.maxForce=typeof _>"u"?1e6:_,this.bi=g,this.bj=v,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new i,this.jacobianElementB=new i,this.enabled=!0,this.setSpookParams(1e7,4,1/60)}o.prototype.constructor=o,o.id=0,o.prototype.setSpookParams=function(g,v,p){var _=v,y=g,x=p;this.a=4/(x*(1+4*_)),this.b=4*_/(1+4*_),this.eps=4/(x*x*y*(1+4*_))},o.prototype.computeB=function(g,v,p){var _=this.computeGW(),y=this.computeGq(),x=this.computeGiMf();return-y*g-_*v-x*p},o.prototype.computeGq=function(){var g=this.jacobianElementA,v=this.jacobianElementB,p=this.bi,_=this.bj,y=p.position,x=_.position;return g.spatial.dot(y)+v.spatial.dot(x)};var l=new s;o.prototype.computeGW=function(){var g=this.jacobianElementA,v=this.jacobianElementB,p=this.bi,_=this.bj,y=p.velocity,x=_.velocity,S=p.angularVelocity||l,C=_.angularVelocity||l;return g.multiplyVectors(y,S)+v.multiplyVectors(x,C)},o.prototype.computeGWlambda=function(){var g=this.jacobianElementA,v=this.jacobianElementB,p=this.bi,_=this.bj,y=p.vlambda,x=_.vlambda,S=p.wlambda||l,C=_.wlambda||l;return g.multiplyVectors(y,S)+v.multiplyVectors(x,C)};var h=new s,u=new s,c=new s,d=new s;o.prototype.computeGiMf=function(){var g=this.jacobianElementA,v=this.jacobianElementB,p=this.bi,_=this.bj,y=p.force,x=p.torque,S=_.force,C=_.torque,B=p.invMassSolve,F=_.invMassSolve;return p.invInertiaWorldSolve?p.invInertiaWorldSolve.vmult(x,c):c.set(0,0,0),_.invInertiaWorldSolve?_.invInertiaWorldSolve.vmult(C,d):d.set(0,0,0),y.mult(B,h),S.mult(F,u),g.multiplyVectors(h,c)+v.multiplyVectors(u,d)};var f=new s;o.prototype.computeGiMGt=function(){var g=this.jacobianElementA,v=this.jacobianElementB,p=this.bi,_=this.bj,y=p.invMassSolve,x=_.invMassSolve,S=p.invInertiaWorldSolve,C=_.invInertiaWorldSolve,B=y+x;return S&&(S.vmult(g.rotational,f),B+=f.dot(g.rotational)),C&&(C.vmult(v.rotational,f),B+=f.dot(v.rotational)),B};var m=new s;new s,new s,new s,new s,new s,o.prototype.addToWlambda=function(g){var v=this.jacobianElementA,p=this.jacobianElementB,_=this.bi,y=this.bj,x=m;v.spatial.mult(_.invMassSolve*g,x),_.vlambda.vadd(x,_.vlambda),p.spatial.mult(y.invMassSolve*g,x),y.vlambda.vadd(x,y.vlambda),_.invInertiaWorldSolve&&(_.invInertiaWorldSolve.vmult(v.rotational,x),x.mult(g,x),_.wlambda.vadd(x,_.wlambda)),y.invInertiaWorldSolve&&(y.invInertiaWorldSolve.vmult(p.rotational,x),x.mult(g,x),y.wlambda.vadd(x,y.wlambda))},o.prototype.computeC=function(){return this.computeGiMGt()+this.eps}},{"../math/JacobianElement":26,"../math/Vec3":30}],21:[function(t,n,r){n.exports=o;var i=t("./Equation"),s=t("../math/Vec3");t("../math/Mat3");function o(u,c,d){i.call(this,u,c,-d,d),this.ri=new s,this.rj=new s,this.t=new s}o.prototype=new i,o.prototype.constructor=o;var l=new s,h=new s;o.prototype.computeB=function(u){this.a;var c=this.b;this.bi,this.bj;var d=this.ri,f=this.rj,m=l,g=h,v=this.t;d.cross(v,m),f.cross(v,g);var p=this.jacobianElementA,_=this.jacobianElementB;v.negate(p.spatial),m.negate(p.rotational),_.spatial.copy(v),_.rotational.copy(g);var y=this.computeGW(),x=this.computeGiMf(),S=-y*c-u*x;return S}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],22:[function(t,n,r){n.exports=o;var i=t("../math/Vec3");t("../math/Mat3");var s=t("./Equation");function o(u,c,d){d=d||{};var f=typeof d.maxForce<"u"?d.maxForce:1e6;s.call(this,u,c,-f,f),this.axisA=d.axisA?d.axisA.clone():new i(1,0,0),this.axisB=d.axisB?d.axisB.clone():new i(0,1,0),this.maxAngle=Math.PI/2}o.prototype=new s,o.prototype.constructor=o;var l=new i,h=new i;o.prototype.computeB=function(u){var c=this.a,d=this.b,f=this.axisA,m=this.axisB,g=l,v=h,p=this.jacobianElementA,_=this.jacobianElementB;f.cross(m,g),m.cross(f,v),p.rotational.copy(v),_.rotational.copy(g);var y=Math.cos(this.maxAngle)-f.dot(m),x=this.computeGW(),S=this.computeGiMf(),C=-y*c-x*d-u*S;return C}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],23:[function(t,n,r){n.exports=o;var i=t("../math/Vec3");t("../math/Mat3");var s=t("./Equation");function o(l,h,u){u=typeof u<"u"?u:1e6,s.call(this,l,h,-u,u),this.axisA=new i,this.axisB=new i,this.targetVelocity=0}o.prototype=new s,o.prototype.constructor=o,o.prototype.computeB=function(l){this.a;var h=this.b;this.bi,this.bj;var u=this.axisA,c=this.axisB,d=this.jacobianElementA,f=this.jacobianElementB;d.rotational.copy(u),c.negate(f.rotational);var m=this.computeGW()-this.targetVelocity,g=this.computeGiMf(),v=-m*h-l*g;return v}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],24:[function(t,n,r){var i=t("../utils/Utils");n.exports=s;function s(o,l,h){h=i.defaults(h,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=s.idCounter++,this.materials=[o,l],this.friction=h.friction,this.restitution=h.restitution,this.contactEquationStiffness=h.contactEquationStiffness,this.contactEquationRelaxation=h.contactEquationRelaxation,this.frictionEquationStiffness=h.frictionEquationStiffness,this.frictionEquationRelaxation=h.frictionEquationRelaxation}s.idCounter=0},{"../utils/Utils":53}],25:[function(t,n,r){n.exports=i;function i(s){var o="";s=s||{},typeof s=="string"?(o=s,s={}):typeof s=="object"&&(o=""),this.name=o,this.id=i.idCounter++,this.friction=typeof s.friction<"u"?s.friction:-1,this.restitution=typeof s.restitution<"u"?s.restitution:-1}i.idCounter=0},{}],26:[function(t,n,r){n.exports=s;var i=t("./Vec3");function s(){this.spatial=new i,this.rotational=new i}s.prototype.multiplyElement=function(o){return o.spatial.dot(this.spatial)+o.rotational.dot(this.rotational)},s.prototype.multiplyVectors=function(o,l){return o.dot(this.spatial)+l.dot(this.rotational)}},{"./Vec3":30}],27:[function(t,n,r){n.exports=s;var i=t("./Vec3");function s(o){o?this.elements=o:this.elements=[0,0,0,0,0,0,0,0,0]}s.prototype.identity=function(){var o=this.elements;o[0]=1,o[1]=0,o[2]=0,o[3]=0,o[4]=1,o[5]=0,o[6]=0,o[7]=0,o[8]=1},s.prototype.setZero=function(){var o=this.elements;o[0]=0,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=0,o[6]=0,o[7]=0,o[8]=0},s.prototype.setTrace=function(o){var l=this.elements;l[0]=o.x,l[4]=o.y,l[8]=o.z},s.prototype.getTrace=function(l){var l=l||new i,h=this.elements;l.x=h[0],l.y=h[4],l.z=h[8]},s.prototype.vmult=function(o,l){l=l||new i;var h=this.elements,u=o.x,c=o.y,d=o.z;return l.x=h[0]*u+h[1]*c+h[2]*d,l.y=h[3]*u+h[4]*c+h[5]*d,l.z=h[6]*u+h[7]*c+h[8]*d,l},s.prototype.smult=function(o){for(var l=0;l<this.elements.length;l++)this.elements[l]*=o},s.prototype.mmult=function(o,l){for(var h=l||new s,u=0;u<3;u++)for(var c=0;c<3;c++){for(var d=0,f=0;f<3;f++)d+=o.elements[u+f*3]*this.elements[f+c*3];h.elements[u+c*3]=d}return h},s.prototype.scale=function(o,l){l=l||new s;for(var h=this.elements,u=l.elements,c=0;c!==3;c++)u[3*c+0]=o.x*h[3*c+0],u[3*c+1]=o.y*h[3*c+1],u[3*c+2]=o.z*h[3*c+2];return l},s.prototype.solve=function(o,l){l=l||new i;for(var h=3,u=4,c=[],d=0;d<h*u;d++)c.push(0);var d,f;for(d=0;d<3;d++)for(f=0;f<3;f++)c[d+u*f]=this.elements[d+3*f];c[3+4*0]=o.x,c[3+4*1]=o.y,c[3+4*2]=o.z;var m=3,g=m,v,p=4,_;do{if(d=g-m,c[d+u*d]===0){for(f=d+1;f<g;f++)if(c[d+u*f]!==0){v=p;do _=p-v,c[_+u*d]+=c[_+u*f];while(--v);break}}if(c[d+u*d]!==0)for(f=d+1;f<g;f++){var y=c[d+u*f]/c[d+u*d];v=p;do _=p-v,c[_+u*f]=_<=d?0:c[_+u*f]-c[_+u*d]*y;while(--v)}}while(--m);if(l.z=c[2*u+3]/c[2*u+2],l.y=(c[1*u+3]-c[1*u+2]*l.z)/c[1*u+1],l.x=(c[0*u+3]-c[0*u+2]*l.z-c[0*u+1]*l.y)/c[0*u+0],isNaN(l.x)||isNaN(l.y)||isNaN(l.z)||l.x===1/0||l.y===1/0||l.z===1/0)throw"Could not solve equation! Got x=["+l.toString()+"], b=["+o.toString()+"], A=["+this.toString()+"]";return l},s.prototype.e=function(o,l,h){if(h===void 0)return this.elements[l+3*o];this.elements[l+3*o]=h},s.prototype.copy=function(o){for(var l=0;l<o.elements.length;l++)this.elements[l]=o.elements[l];return this},s.prototype.toString=function(){for(var o="",l=",",h=0;h<9;h++)o+=this.elements[h]+l;return o},s.prototype.reverse=function(o){o=o||new s;for(var l=3,h=6,u=[],c=0;c<l*h;c++)u.push(0);var c,d;for(c=0;c<3;c++)for(d=0;d<3;d++)u[c+h*d]=this.elements[c+3*d];u[3+6*0]=1,u[3+6*1]=0,u[3+6*2]=0,u[4+6*0]=0,u[4+6*1]=1,u[4+6*2]=0,u[5+6*0]=0,u[5+6*1]=0,u[5+6*2]=1;var f=3,m=f,g,v=h,p;do{if(c=m-f,u[c+h*c]===0){for(d=c+1;d<m;d++)if(u[c+h*d]!==0){g=v;do p=v-g,u[p+h*c]+=u[p+h*d];while(--g);break}}if(u[c+h*c]!==0)for(d=c+1;d<m;d++){var _=u[c+h*d]/u[c+h*c];g=v;do p=v-g,u[p+h*d]=p<=c?0:u[p+h*d]-u[p+h*c]*_;while(--g)}}while(--f);c=2;do{d=c-1;do{var _=u[c+h*d]/u[c+h*c];g=h;do p=h-g,u[p+h*d]=u[p+h*d]-u[p+h*c]*_;while(--g)}while(d--)}while(--c);c=2;do{var _=1/u[c+h*c];g=h;do p=h-g,u[p+h*c]=u[p+h*c]*_;while(--g)}while(c--);c=2;do{d=2;do{if(p=u[l+d+h*c],isNaN(p)||p===1/0)throw"Could not reverse! A=["+this.toString()+"]";o.e(c,d,p)}while(d--)}while(c--);return o},s.prototype.setRotationFromQuaternion=function(o){var l=o.x,h=o.y,u=o.z,c=o.w,d=l+l,f=h+h,m=u+u,g=l*d,v=l*f,p=l*m,_=h*f,y=h*m,x=u*m,S=c*d,C=c*f,B=c*m,F=this.elements;return F[3*0+0]=1-(_+x),F[3*0+1]=v-B,F[3*0+2]=p+C,F[3*1+0]=v+B,F[3*1+1]=1-(g+x),F[3*1+2]=y-S,F[3*2+0]=p-C,F[3*2+1]=y+S,F[3*2+2]=1-(g+_),this},s.prototype.transpose=function(o){o=o||new s;for(var l=o.elements,h=this.elements,u=0;u!==3;u++)for(var c=0;c!==3;c++)l[3*u+c]=h[3*c+u];return o}},{"./Vec3":30}],28:[function(t,n,r){n.exports=s;var i=t("./Vec3");function s(d,f,m,g){this.x=d!==void 0?d:0,this.y=f!==void 0?f:0,this.z=m!==void 0?m:0,this.w=g!==void 0?g:1}s.prototype.set=function(d,f,m,g){this.x=d,this.y=f,this.z=m,this.w=g},s.prototype.toString=function(){return this.x+","+this.y+","+this.z+","+this.w},s.prototype.toArray=function(){return[this.x,this.y,this.z,this.w]},s.prototype.setFromAxisAngle=function(d,f){var m=Math.sin(f*.5);this.x=d.x*m,this.y=d.y*m,this.z=d.z*m,this.w=Math.cos(f*.5)},s.prototype.toAxisAngle=function(d){d=d||new i,this.normalize();var f=2*Math.acos(this.w),m=Math.sqrt(1-this.w*this.w);return m<.001?(d.x=this.x,d.y=this.y,d.z=this.z):(d.x=this.x/m,d.y=this.y/m,d.z=this.z/m),[d,f]};var o=new i,l=new i;s.prototype.setFromVectors=function(d,f){if(d.isAntiparallelTo(f)){var m=o,g=l;d.tangents(m,g),this.setFromAxisAngle(m,Math.PI)}else{var v=d.cross(f);this.x=v.x,this.y=v.y,this.z=v.z,this.w=Math.sqrt(Math.pow(d.norm(),2)*Math.pow(f.norm(),2))+d.dot(f),this.normalize()}};var h=new i,u=new i,c=new i;s.prototype.mult=function(d,f){f=f||new s;var m=this.w,g=h,v=u,p=c;return g.set(this.x,this.y,this.z),v.set(d.x,d.y,d.z),f.w=m*d.w-g.dot(v),g.cross(v,p),f.x=m*v.x+d.w*g.x+p.x,f.y=m*v.y+d.w*g.y+p.y,f.z=m*v.z+d.w*g.z+p.z,f},s.prototype.inverse=function(d){var f=this.x,m=this.y,g=this.z,v=this.w;d=d||new s,this.conjugate(d);var p=1/(f*f+m*m+g*g+v*v);return d.x*=p,d.y*=p,d.z*=p,d.w*=p,d},s.prototype.conjugate=function(d){return d=d||new s,d.x=-this.x,d.y=-this.y,d.z=-this.z,d.w=this.w,d},s.prototype.normalize=function(){var d=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);d===0?(this.x=0,this.y=0,this.z=0,this.w=0):(d=1/d,this.x*=d,this.y*=d,this.z*=d,this.w*=d)},s.prototype.normalizeFast=function(){var d=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;d===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=d,this.y*=d,this.z*=d,this.w*=d)},s.prototype.vmult=function(d,f){f=f||new i;var m=d.x,g=d.y,v=d.z,p=this.x,_=this.y,y=this.z,x=this.w,S=x*m+_*v-y*g,C=x*g+y*m-p*v,B=x*v+p*g-_*m,F=-p*m-_*g-y*v;return f.x=S*x+F*-p+C*-y-B*-_,f.y=C*x+F*-_+B*-p-S*-y,f.z=B*x+F*-y+S*-_-C*-p,f},s.prototype.copy=function(d){return this.x=d.x,this.y=d.y,this.z=d.z,this.w=d.w,this},s.prototype.toEuler=function(d,f){f=f||"YZX";var m,g,v,p=this.x,_=this.y,y=this.z,x=this.w;switch(f){case"YZX":var S=p*_+y*x;if(S>.499&&(m=2*Math.atan2(p,x),g=Math.PI/2,v=0),S<-.499&&(m=-2*Math.atan2(p,x),g=-Math.PI/2,v=0),isNaN(m)){var C=p*p,B=_*_,F=y*y;m=Math.atan2(2*_*x-2*p*y,1-2*B-2*F),g=Math.asin(2*S),v=Math.atan2(2*p*x-2*_*y,1-2*C-2*F)}break;default:throw new Error("Euler order "+f+" not supported yet.")}d.y=m,d.z=g,d.x=v},s.prototype.setFromEuler=function(d,f,m,g){g=g||"XYZ";var v=Math.cos(d/2),p=Math.cos(f/2),_=Math.cos(m/2),y=Math.sin(d/2),x=Math.sin(f/2),S=Math.sin(m/2);return g==="XYZ"?(this.x=y*p*_+v*x*S,this.y=v*x*_-y*p*S,this.z=v*p*S+y*x*_,this.w=v*p*_-y*x*S):g==="YXZ"?(this.x=y*p*_+v*x*S,this.y=v*x*_-y*p*S,this.z=v*p*S-y*x*_,this.w=v*p*_+y*x*S):g==="ZXY"?(this.x=y*p*_-v*x*S,this.y=v*x*_+y*p*S,this.z=v*p*S+y*x*_,this.w=v*p*_-y*x*S):g==="ZYX"?(this.x=y*p*_-v*x*S,this.y=v*x*_+y*p*S,this.z=v*p*S-y*x*_,this.w=v*p*_+y*x*S):g==="YZX"?(this.x=y*p*_+v*x*S,this.y=v*x*_+y*p*S,this.z=v*p*S-y*x*_,this.w=v*p*_-y*x*S):g==="XZY"&&(this.x=y*p*_-v*x*S,this.y=v*x*_-y*p*S,this.z=v*p*S+y*x*_,this.w=v*p*_+y*x*S),this},s.prototype.clone=function(){return new s(this.x,this.y,this.z,this.w)}},{"./Vec3":30}],29:[function(t,n,r){var i=t("./Vec3"),s=t("./Quaternion");n.exports=o;function o(h){h=h||{},this.position=new i,h.position&&this.position.copy(h.position),this.quaternion=new s,h.quaternion&&this.quaternion.copy(h.quaternion)}var l=new s;o.pointToLocalFrame=function(h,u,c,f){var f=f||new i;return c.vsub(h,f),u.conjugate(l),l.vmult(f,f),f},o.prototype.pointToLocal=function(h,u){return o.pointToLocalFrame(this.position,this.quaternion,h,u)},o.pointToWorldFrame=function(h,u,c,f){var f=f||new i;return u.vmult(c,f),f.vadd(h,f),f},o.prototype.pointToWorld=function(h,u){return o.pointToWorldFrame(this.position,this.quaternion,h,u)},o.prototype.vectorToWorldFrame=function(h,c){var c=c||new i;return this.quaternion.vmult(h,c),c},o.vectorToWorldFrame=function(h,u,c){return h.vmult(u,c),c},o.vectorToLocalFrame=function(h,u,c,f){var f=f||new i;return u.w*=-1,u.vmult(c,f),u.w*=-1,f}},{"./Quaternion":28,"./Vec3":30}],30:[function(t,n,r){n.exports=s;var i=t("./Mat3");function s(u,c,d){this.x=u||0,this.y=c||0,this.z=d||0}s.ZERO=new s(0,0,0),s.UNIT_X=new s(1,0,0),s.UNIT_Y=new s(0,1,0),s.UNIT_Z=new s(0,0,1),s.prototype.cross=function(u,c){var d=u.x,f=u.y,m=u.z,g=this.x,v=this.y,p=this.z;return c=c||new s,c.x=v*m-p*f,c.y=p*d-g*m,c.z=g*f-v*d,c},s.prototype.set=function(u,c,d){return this.x=u,this.y=c,this.z=d,this},s.prototype.setZero=function(){this.x=this.y=this.z=0},s.prototype.vadd=function(u,c){if(c)c.x=u.x+this.x,c.y=u.y+this.y,c.z=u.z+this.z;else return new s(this.x+u.x,this.y+u.y,this.z+u.z)},s.prototype.vsub=function(u,c){if(c)c.x=this.x-u.x,c.y=this.y-u.y,c.z=this.z-u.z;else return new s(this.x-u.x,this.y-u.y,this.z-u.z)},s.prototype.crossmat=function(){return new i([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])},s.prototype.normalize=function(){var u=this.x,c=this.y,d=this.z,f=Math.sqrt(u*u+c*c+d*d);if(f>0){var m=1/f;this.x*=m,this.y*=m,this.z*=m}else this.x=0,this.y=0,this.z=0;return f},s.prototype.unit=function(u){u=u||new s;var c=this.x,d=this.y,f=this.z,m=Math.sqrt(c*c+d*d+f*f);return m>0?(m=1/m,u.x=c*m,u.y=d*m,u.z=f*m):(u.x=1,u.y=0,u.z=0),u},s.prototype.norm=function(){var u=this.x,c=this.y,d=this.z;return Math.sqrt(u*u+c*c+d*d)},s.prototype.length=s.prototype.norm,s.prototype.norm2=function(){return this.dot(this)},s.prototype.lengthSquared=s.prototype.norm2,s.prototype.distanceTo=function(u){var c=this.x,d=this.y,f=this.z,m=u.x,g=u.y,v=u.z;return Math.sqrt((m-c)*(m-c)+(g-d)*(g-d)+(v-f)*(v-f))},s.prototype.distanceSquared=function(u){var c=this.x,d=this.y,f=this.z,m=u.x,g=u.y,v=u.z;return(m-c)*(m-c)+(g-d)*(g-d)+(v-f)*(v-f)},s.prototype.mult=function(u,c){c=c||new s;var d=this.x,f=this.y,m=this.z;return c.x=u*d,c.y=u*f,c.z=u*m,c},s.prototype.scale=s.prototype.mult,s.prototype.dot=function(u){return this.x*u.x+this.y*u.y+this.z*u.z},s.prototype.isZero=function(){return this.x===0&&this.y===0&&this.z===0},s.prototype.negate=function(u){return u=u||new s,u.x=-this.x,u.y=-this.y,u.z=-this.z,u};var o=new s,l=new s;s.prototype.tangents=function(u,c){var d=this.norm();if(d>0){var f=o,m=1/d;f.set(this.x*m,this.y*m,this.z*m);var g=l;Math.abs(f.x)<.9?(g.set(1,0,0),f.cross(g,u)):(g.set(0,1,0),f.cross(g,u)),f.cross(u,c)}else u.set(1,0,0),c.set(0,1,0)},s.prototype.toString=function(){return this.x+","+this.y+","+this.z},s.prototype.toArray=function(){return[this.x,this.y,this.z]},s.prototype.copy=function(u){return this.x=u.x,this.y=u.y,this.z=u.z,this},s.prototype.lerp=function(u,c,d){var f=this.x,m=this.y,g=this.z;d.x=f+(u.x-f)*c,d.y=m+(u.y-m)*c,d.z=g+(u.z-g)*c},s.prototype.almostEquals=function(u,c){return c===void 0&&(c=1e-6),!(Math.abs(this.x-u.x)>c||Math.abs(this.y-u.y)>c||Math.abs(this.z-u.z)>c)},s.prototype.almostZero=function(u){return u===void 0&&(u=1e-6),!(Math.abs(this.x)>u||Math.abs(this.y)>u||Math.abs(this.z)>u)};var h=new s;s.prototype.isAntiparallelTo=function(u,c){return this.negate(h),h.almostEquals(u,c)},s.prototype.clone=function(){return new s(this.x,this.y,this.z)}},{"./Mat3":27}],31:[function(t,n,r){n.exports=c;var i=t("../utils/EventTarget");t("../shapes/Shape");var s=t("../math/Vec3"),o=t("../math/Mat3"),l=t("../math/Quaternion");t("../material/Material");var h=t("../collision/AABB"),u=t("../shapes/Box");function c(D){D=D||{},i.apply(this),this.id=c.idCounter++,this.world=null,this.preStep=null,this.postStep=null,this.vlambda=new s,this.collisionFilterGroup=typeof D.collisionFilterGroup=="number"?D.collisionFilterGroup:1,this.collisionFilterMask=typeof D.collisionFilterMask=="number"?D.collisionFilterMask:1,this.collisionResponse=!0,this.position=new s,D.position&&this.position.copy(D.position),this.previousPosition=new s,this.initPosition=new s,this.velocity=new s,D.velocity&&this.velocity.copy(D.velocity),this.initVelocity=new s,this.force=new s;var H=typeof D.mass=="number"?D.mass:0;this.mass=H,this.invMass=H>0?1/H:0,this.material=D.material||null,this.linearDamping=typeof D.linearDamping=="number"?D.linearDamping:.01,this.type=H<=0?c.STATIC:c.DYNAMIC,typeof D.type==typeof c.STATIC&&(this.type=D.type),this.allowSleep=typeof D.allowSleep<"u"?D.allowSleep:!0,this.sleepState=0,this.sleepSpeedLimit=typeof D.sleepSpeedLimit<"u"?D.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof D.sleepTimeLimit<"u"?D.sleepTimeLimit:1,this.timeLastSleepy=0,this._wakeUpAfterNarrowphase=!1,this.torque=new s,this.quaternion=new l,D.quaternion&&this.quaternion.copy(D.quaternion),this.initQuaternion=new l,this.angularVelocity=new s,D.angularVelocity&&this.angularVelocity.copy(D.angularVelocity),this.initAngularVelocity=new s,this.interpolatedPosition=new s,this.interpolatedQuaternion=new l,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new s,this.invInertia=new s,this.invInertiaWorld=new o,this.invMassSolve=0,this.invInertiaSolve=new s,this.invInertiaWorldSolve=new o,this.fixedRotation=typeof D.fixedRotation<"u"?D.fixedRotation:!1,this.angularDamping=typeof D.angularDamping<"u"?D.angularDamping:.01,this.aabb=new h,this.aabbNeedsUpdate=!0,this.wlambda=new s,D.shape&&this.addShape(D.shape),this.updateMassProperties()}c.prototype=new i,c.prototype.constructor=c,c.DYNAMIC=1,c.STATIC=2,c.KINEMATIC=4,c.AWAKE=0,c.SLEEPY=1,c.SLEEPING=2,c.idCounter=0,c.prototype.wakeUp=function(){var D=this.sleepState;this.sleepState=0,D===c.SLEEPING&&this.dispatchEvent({type:"wakeup"})},c.prototype.sleep=function(){this.sleepState=c.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0)},c.sleepyEvent={type:"sleepy"},c.sleepEvent={type:"sleep"},c.prototype.sleepTick=function(D){if(this.allowSleep){var H=this.sleepState,I=this.velocity.norm2()+this.angularVelocity.norm2(),X=Math.pow(this.sleepSpeedLimit,2);H===c.AWAKE&&I<X?(this.sleepState=c.SLEEPY,this.timeLastSleepy=D,this.dispatchEvent(c.sleepyEvent)):H===c.SLEEPY&&I>X?this.wakeUp():H===c.SLEEPY&&D-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(c.sleepEvent))}},c.prototype.updateSolveMassProperties=function(){this.sleepState===c.SLEEPING||this.type===c.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))},c.prototype.pointToLocalFrame=function(D,I){var I=I||new s;return D.vsub(this.position,I),this.quaternion.conjugate().vmult(I,I),I},c.prototype.vectorToLocalFrame=function(D,I){var I=I||new s;return this.quaternion.conjugate().vmult(D,I),I},c.prototype.pointToWorldFrame=function(D,I){var I=I||new s;return this.quaternion.vmult(D,I),I.vadd(this.position,I),I},c.prototype.vectorToWorldFrame=function(D,I){var I=I||new s;return this.quaternion.vmult(D,I),I};var d=new s,f=new l;c.prototype.addShape=function(D,H,I){var X=new s,W=new l;return H&&X.copy(H),I&&W.copy(I),this.shapes.push(D),this.shapeOffsets.push(X),this.shapeOrientations.push(W),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,this},c.prototype.updateBoundingRadius=function(){for(var D=this.shapes,H=this.shapeOffsets,I=D.length,X=0,W=0;W!==I;W++){var te=D[W];te.updateBoundingSphereRadius();var O=H[W].norm(),U=te.boundingSphereRadius;O+U>X&&(X=O+U)}this.boundingRadius=X};var m=new h;c.prototype.computeAABB=function(){for(var D=this.shapes,H=this.shapeOffsets,I=this.shapeOrientations,X=D.length,W=d,te=f,O=this.quaternion,U=this.aabb,J=m,j=0;j!==X;j++){var V=D[j];I[j].mult(O,te),te.vmult(H[j],W),W.vadd(this.position,W),V.calculateWorldAABB(W,te,J.lowerBound,J.upperBound),j===0?U.copy(J):U.extend(J)}this.aabbNeedsUpdate=!1};var g=new o,v=new o;new o,c.prototype.updateInertiaWorld=function(D){var H=this.invInertia;if(!(H.x===H.y&&H.y===H.z&&!D)){var I=g,X=v;I.setRotationFromQuaternion(this.quaternion),I.transpose(X),I.scale(H,I),I.mmult(X,this.invInertiaWorld)}};var p=new s,_=new s;c.prototype.applyForce=function(D,H){if(this.type===c.DYNAMIC){var I=p;H.vsub(this.position,I);var X=_;I.cross(D,X),this.force.vadd(D,this.force),this.torque.vadd(X,this.torque)}};var y=new s,x=new s;c.prototype.applyLocalForce=function(D,H){if(this.type===c.DYNAMIC){var I=y,X=x;this.vectorToWorldFrame(D,I),this.pointToWorldFrame(H,X),this.applyForce(I,X)}};var S=new s,C=new s,B=new s;c.prototype.applyImpulse=function(D,H){if(this.type===c.DYNAMIC){var I=S;H.vsub(this.position,I);var X=C;X.copy(D),X.mult(this.invMass,X),this.velocity.vadd(X,this.velocity);var W=B;I.cross(D,W),this.invInertiaWorld.vmult(W,W),this.angularVelocity.vadd(W,this.angularVelocity)}};var F=new s,M=new s;c.prototype.applyLocalImpulse=function(D,H){if(this.type===c.DYNAMIC){var I=F,X=M;this.vectorToWorldFrame(D,I),this.pointToWorldFrame(H,X),this.applyImpulse(I,X)}};var E=new s;c.prototype.updateMassProperties=function(){var D=E;this.invMass=this.mass>0?1/this.mass:0;var H=this.inertia,I=this.fixedRotation;this.computeAABB(),D.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),u.calculateInertia(D,this.mass,H),this.invInertia.set(H.x>0&&!I?1/H.x:0,H.y>0&&!I?1/H.y:0,H.z>0&&!I?1/H.z:0),this.updateInertiaWorld(!0)},c.prototype.getVelocityAtWorldPoint=function(D,H){var I=new s;return D.vsub(this.position,I),this.angularVelocity.cross(I,H),this.velocity.vadd(H,H),H}},{"../collision/AABB":3,"../material/Material":25,"../math/Mat3":27,"../math/Quaternion":28,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Shape":43,"../utils/EventTarget":49}],32:[function(t,n,r){t("./Body");var i=t("../math/Vec3"),s=t("../math/Quaternion");t("../collision/RaycastResult");var o=t("../collision/Ray"),l=t("../objects/WheelInfo");n.exports=h;function h(O){this.chassisBody=O.chassisBody,this.wheelInfos=[],this.sliding=!1,this.world=null,this.indexRightAxis=typeof O.indexRightAxis<"u"?O.indexRightAxis:1,this.indexForwardAxis=typeof O.indexForwardAxis<"u"?O.indexForwardAxis:0,this.indexUpAxis=typeof O.indexUpAxis<"u"?O.indexUpAxis:2}new i,new i,new i;var u=new i,c=new i,d=new i;new o,h.prototype.addWheel=function(O){O=O||{};var U=new l(O),J=this.wheelInfos.length;return this.wheelInfos.push(U),J},h.prototype.setSteeringValue=function(O,U){var J=this.wheelInfos[U];J.steering=O},new i,h.prototype.applyEngineForce=function(O,U){this.wheelInfos[U].engineForce=O},h.prototype.setBrake=function(O,U){this.wheelInfos[U].brake=O},h.prototype.addToWorld=function(O){this.constraints,O.add(this.chassisBody);var U=this;this.preStepCallback=function(){U.updateVehicle(O.dt)},O.addEventListener("preStep",this.preStepCallback),this.world=O},h.prototype.getVehicleAxisWorld=function(O,U){U.set(O===0?1:0,O===1?1:0,O===2?1:0),this.chassisBody.vectorToWorldFrame(U,U)},h.prototype.updateVehicle=function(O){for(var U=this.wheelInfos,J=U.length,j=this.chassisBody,V=0;V<J;V++)this.updateWheelTransform(V);this.currentVehicleSpeedKmHour=3.6*j.velocity.norm();var k=new i;this.getVehicleAxisWorld(this.indexForwardAxis,k),k.dot(j.velocity)<0&&(this.currentVehicleSpeedKmHour*=-1);for(var V=0;V<J;V++)this.castRay(U[V]);this.updateSuspension(O);for(var b=new i,A=new i,V=0;V<J;V++){var R=U[V],G=R.suspensionForce;G>R.maxSuspensionForce&&(G=R.maxSuspensionForce),R.raycastResult.hitNormalWorld.scale(G*O,b),R.raycastResult.hitPointWorld.vsub(j.position,A),j.applyImpulse(b,R.raycastResult.hitPointWorld)}this.updateFriction(O);var P=new i,ee=new i,K=new i;for(V=0;V<J;V++){var R=U[V];j.getVelocityAtWorldPoint(R.chassisConnectionPointWorld,K);var Z=1;switch(this.indexUpAxis){case 1:Z=-1;break}if(R.isInContact){this.getVehicleAxisWorld(this.indexForwardAxis,ee);var ie=ee.dot(R.raycastResult.hitNormalWorld);R.raycastResult.hitNormalWorld.scale(ie,P),ee.vsub(P,ee);var Te=ee.dot(K);R.deltaRotation=Z*Te*O/R.radius}(R.sliding||!R.isInContact)&&R.engineForce!==0&&R.useCustomSlidingRotationalSpeed&&(R.deltaRotation=(R.engineForce>0?1:-1)*R.customSlidingRotationalSpeed*O),Math.abs(R.brake)>Math.abs(R.engineForce)&&(R.deltaRotation=0),R.rotation+=R.deltaRotation,R.deltaRotation*=.99}},h.prototype.updateSuspension=function(O){for(var U=this.chassisBody,J=U.mass,j=this.wheelInfos,V=j.length,k=0;k<V;k++){var b=j[k];if(b.isInContact){var A,R=b.suspensionRestLength,G=b.suspensionLength,P=R-G;A=b.suspensionStiffness*P*b.clippedInvContactDotSuspension;var ee=b.suspensionRelativeVelocity,K;ee<0?K=b.dampingCompression:K=b.dampingRelaxation,A-=K*ee,b.suspensionForce=A*J,b.suspensionForce<0&&(b.suspensionForce=0)}else b.suspensionForce=0}},h.prototype.removeFromWorld=function(O){this.constraints,O.remove(this.chassisBody),O.removeEventListener("preStep",this.preStepCallback),this.world=null};var f=new i,m=new i;h.prototype.castRay=function(O){var U=f,J=m;this.updateWheelTransformWorld(O);var j=this.chassisBody,V=-1,k=O.suspensionRestLength+O.radius;O.directionWorld.scale(k,U);var b=O.chassisConnectionPointWorld;b.vadd(U,J);var A=O.raycastResult;A.reset();var R=j.collisionResponse;j.collisionResponse=!1,this.world.rayTest(b,J,A),j.collisionResponse=R;var G=A.body;if(O.raycastResult.groundObject=0,G){V=A.distance,O.raycastResult.hitNormalWorld=A.hitNormalWorld,O.isInContact=!0;var P=A.distance;O.suspensionLength=P-O.radius;var ee=O.suspensionRestLength-O.maxSuspensionTravel,K=O.suspensionRestLength+O.maxSuspensionTravel;O.suspensionLength<ee&&(O.suspensionLength=ee),O.suspensionLength>K&&(O.suspensionLength=K,O.raycastResult.reset());var Z=O.raycastResult.hitNormalWorld.dot(O.directionWorld),ie=new i;j.getVelocityAtWorldPoint(O.raycastResult.hitPointWorld,ie);var Te=O.raycastResult.hitNormalWorld.dot(ie);if(Z>=-.1)O.suspensionRelativeVelocity=0,O.clippedInvContactDotSuspension=1/.1;else{var pe=-1/Z;O.suspensionRelativeVelocity=Te*pe,O.clippedInvContactDotSuspension=pe}}else O.suspensionLength=O.suspensionRestLength+0*O.maxSuspensionTravel,O.suspensionRelativeVelocity=0,O.directionWorld.scale(-1,O.raycastResult.hitNormalWorld),O.clippedInvContactDotSuspension=1;return V},h.prototype.updateWheelTransformWorld=function(O){O.isInContact=!1;var U=this.chassisBody;U.pointToWorldFrame(O.chassisConnectionPointLocal,O.chassisConnectionPointWorld),U.vectorToWorldFrame(O.directionLocal,O.directionWorld),U.vectorToWorldFrame(O.axleLocal,O.axleWorld)},h.prototype.updateWheelTransform=function(O){var U=u,J=c,j=d,V=this.wheelInfos[O];this.updateWheelTransformWorld(V),V.directionLocal.scale(-1,U),J.copy(V.axleLocal),U.cross(J,j),j.normalize(),J.normalize();var k=V.steering,b=new s;b.setFromAxisAngle(U,k);var A=new s;A.setFromAxisAngle(J,V.rotation);var R=V.worldTransform.quaternion;this.chassisBody.quaternion.mult(b,R),R.mult(A,R),R.normalize();var G=V.worldTransform.position;G.copy(V.directionWorld),G.scale(V.suspensionLength,G),G.vadd(V.chassisConnectionPointWorld,G)};var g=[new i(1,0,0),new i(0,1,0),new i(0,0,1)];h.prototype.getWheelTransformWorld=function(O){return this.wheelInfos[O].worldTransform};var v=new i,p=[],_=[],y=1;h.prototype.updateFriction=function(O){for(var U=v,J=this.wheelInfos,j=J.length,V=this.chassisBody,k=_,b=p,A=0;A<j;A++){var R=J[A],G=R.raycastResult.body;R.sideImpulse=0,R.forwardImpulse=0,k[A]||(k[A]=new i),b[A]||(b[A]=new i)}for(var A=0;A<j;A++){var R=J[A],G=R.raycastResult.body;if(G){var P=b[A],ee=this.getWheelTransformWorld(A);ee.vectorToWorldFrame(g[this.indexRightAxis],P);var K=R.raycastResult.hitNormalWorld,Z=P.dot(K);K.scale(Z,U),P.vsub(U,P),P.normalize(),K.cross(P,k[A]),k[A].normalize(),R.sideImpulse=te(V,R.raycastResult.hitPointWorld,G,R.raycastResult.hitPointWorld,P),R.sideImpulse*=y}}var ie=1,Te=.5;this.sliding=!1;for(var A=0;A<j;A++){var R=J[A],G=R.raycastResult.body,pe=0;if(R.slipInfo=1,G){var ge=0,ce=R.brake?R.brake:ge;pe=B(V,G,R.raycastResult.hitPointWorld,k[A],ce),pe+=R.engineForce*O;var ve=ce/pe;R.slipInfo*=ve}if(R.forwardImpulse=0,R.skidInfo=1,G){R.skidInfo=1;var ke=R.suspensionForce*O*R.frictionSlip,De=ke,Ge=ke*De;R.forwardImpulse=pe;var Ee=R.forwardImpulse*Te,qe=R.sideImpulse*ie,N=Ee*Ee+qe*qe;if(R.sliding=!1,N>Ge){this.sliding=!0,R.sliding=!0;var ve=ke/Math.sqrt(N);R.skidInfo*=ve}}}if(this.sliding)for(var A=0;A<j;A++){var R=J[A];R.sideImpulse!==0&&R.skidInfo<1&&(R.forwardImpulse*=R.skidInfo,R.sideImpulse*=R.skidInfo)}for(var A=0;A<j;A++){var R=J[A],w=new i;if(w.copy(R.raycastResult.hitPointWorld),R.forwardImpulse!==0){var ne=new i;k[A].scale(R.forwardImpulse,ne),V.applyImpulse(ne,w)}if(R.sideImpulse!==0){var G=R.raycastResult.body,ue=new i;ue.copy(R.raycastResult.hitPointWorld);var me=new i;b[A].scale(R.sideImpulse,me),V.pointToLocalFrame(w,w),w["xyz"[this.indexUpAxis]]*=R.rollInfluence,V.pointToWorldFrame(w,w),V.applyImpulse(me,w),me.scale(-1,me),G.applyImpulse(me,ue)}}};var x=new i,S=new i,C=new i;function B(O,U,J,j,V){var k=0,b=J,A=x,R=S,G=C;O.getVelocityAtWorldPoint(b,A),U.getVelocityAtWorldPoint(b,R),A.vsub(R,G);var P=j.dot(G),ee=H(O,J,j),K=H(U,J,j),Z=1,ie=Z/(ee+K);return k=-P*ie,V<k&&(k=V),k<-V&&(k=-V),k}var F=new i,M=new i,E=new i,D=new i;function H(O,U,J){var j=F,V=M,k=E,b=D;return U.vsub(O.position,j),j.cross(J,V),O.invInertiaWorld.vmult(V,b),b.cross(j,k),O.invMass+J.dot(k)}var I=new i,X=new i,W=new i;function te(O,U,J,j,V,Z){var b=V.norm2();if(b>1.1)return 0;var A=I,R=X,G=W;O.getVelocityAtWorldPoint(U,A),J.getVelocityAtWorldPoint(j,R),A.vsub(R,G);var P=V.dot(G),ee=.2,K=1/(O.invMass+J.invMass),Z=-ee*P*K;return Z}},{"../collision/Ray":9,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Vec3":30,"../objects/WheelInfo":36,"./Body":31}],33:[function(t,n,r){var i=t("./Body"),s=t("../shapes/Sphere"),o=t("../shapes/Box"),l=t("../math/Vec3"),h=t("../constraints/HingeConstraint");n.exports=u;function u(f){if(this.wheelBodies=[],this.coordinateSystem=typeof f.coordinateSystem>"u"?new l(1,2,3):f.coordinateSystem.clone(),this.chassisBody=f.chassisBody,!this.chassisBody){var m=new o(new l(5,2,.5));this.chassisBody=new i(1,m)}this.constraints=[],this.wheelAxes=[],this.wheelForces=[]}u.prototype.addWheel=function(f){f=f||{};var m=f.body;m||(m=new i(1,new s(1.2))),this.wheelBodies.push(m),this.wheelForces.push(0),new l;var g=typeof f.position<"u"?f.position.clone():new l,v=new l;this.chassisBody.pointToWorldFrame(g,v),m.position.set(v.x,v.y,v.z);var p=typeof f.axis<"u"?f.axis.clone():new l(0,1,0);this.wheelAxes.push(p);var _=new h(this.chassisBody,m,{pivotA:g,axisA:p,pivotB:l.ZERO,axisB:p,collideConnected:!1});return this.constraints.push(_),this.wheelBodies.length-1},u.prototype.setSteeringValue=function(f,m){var g=this.wheelAxes[m],v=Math.cos(f),p=Math.sin(f),_=g.x,y=g.y;this.constraints[m].axisA.set(v*_-p*y,p*_+v*y,0)},u.prototype.setMotorSpeed=function(f,m){var g=this.constraints[m];g.enableMotor(),g.motorTargetVelocity=f},u.prototype.disableMotor=function(f){var m=this.constraints[f];m.disableMotor()};var c=new l;u.prototype.setWheelForce=function(f,m){this.wheelForces[m]=f},u.prototype.applyWheelForce=function(f,m){var g=this.wheelAxes[m],v=this.wheelBodies[m],p=v.torque;g.scale(f,c),v.vectorToWorldFrame(c,c),p.vadd(c,p)},u.prototype.addToWorld=function(f){for(var m=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),v=0;v<g.length;v++)f.add(g[v]);for(var v=0;v<m.length;v++)f.addConstraint(m[v]);f.addEventListener("preStep",this._update.bind(this))},u.prototype._update=function(){for(var f=this.wheelForces,m=0;m<f.length;m++)this.applyWheelForce(f[m],m)},u.prototype.removeFromWorld=function(f){for(var m=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),v=0;v<g.length;v++)f.remove(g[v]);for(var v=0;v<m.length;v++)f.removeConstraint(m[v])};var d=new l;u.prototype.getWheelSpeed=function(f){var m=this.wheelAxes[f],g=this.wheelBodies[f],v=g.angularVelocity;return this.chassisBody.vectorToWorldFrame(m,d),v.dot(d)}},{"../constraints/HingeConstraint":15,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Sphere":44,"./Body":31}],34:[function(t,n,r){n.exports=s,t("../shapes/Shape");var i=t("../math/Vec3");t("../math/Quaternion"),t("../shapes/Particle"),t("../objects/Body"),t("../material/Material");function s(){this.particles=[],this.density=1,this.smoothingRadius=1,this.speedOfSound=1,this.viscosity=.01,this.eps=1e-6,this.pressures=[],this.densities=[],this.neighbors=[]}s.prototype.add=function(m){this.particles.push(m),this.neighbors.length<this.particles.length&&this.neighbors.push([])},s.prototype.remove=function(m){var g=this.particles.indexOf(m);g!==-1&&(this.particles.splice(g,1),this.neighbors.length>this.particles.length&&this.neighbors.pop())};var o=new i;s.prototype.getNeighbors=function(m,g){for(var v=this.particles.length,p=m.id,_=this.smoothingRadius*this.smoothingRadius,y=o,x=0;x!==v;x++){var S=this.particles[x];S.position.vsub(m.position,y),p!==S.id&&y.norm2()<_&&g.push(S)}};var l=new i,h=new i,u=new i,c=new i,d=new i,f=new i;s.prototype.update=function(){for(var m=this.particles.length,g=l,v=this.speedOfSound,p=this.eps,_=0;_!==m;_++){var y=this.particles[_],x=this.neighbors[_];x.length=0,this.getNeighbors(y,x),x.push(this.particles[_]);for(var S=x.length,C=0,B=0;B!==S;B++){y.position.vsub(x[B].position,g);var F=g.norm(),M=this.w(F);C+=x[B].mass*M}this.densities[_]=C,this.pressures[_]=v*v*(this.densities[_]-this.density)}for(var E=h,D=u,H=c,I=d,X=f,_=0;_!==m;_++){var W=this.particles[_];E.set(0,0,0),D.set(0,0,0);for(var te,O,x=this.neighbors[_],S=x.length,B=0;B!==S;B++){var U=x[B];W.position.vsub(U.position,I);var J=I.norm();te=-U.mass*(this.pressures[_]/(this.densities[_]*this.densities[_]+p)+this.pressures[B]/(this.densities[B]*this.densities[B]+p)),this.gradw(I,H),H.mult(te,H),E.vadd(H,E),U.velocity.vsub(W.velocity,X),X.mult(1/(1e-4+this.densities[_]*this.densities[B])*this.viscosity*U.mass,X),O=this.nablaw(J),X.mult(O,X),D.vadd(X,D)}D.mult(W.mass,D),E.mult(W.mass,E),W.force.vadd(D,W.force),W.force.vadd(E,W.force)}},s.prototype.w=function(m){var g=this.smoothingRadius;return 315/(64*Math.PI*Math.pow(g,9))*Math.pow(g*g-m*m,3)},s.prototype.gradw=function(m,g){var v=m.norm(),p=this.smoothingRadius;m.mult(945/(32*Math.PI*Math.pow(p,9))*Math.pow(p*p-v*v,2),g)},s.prototype.nablaw=function(m){var g=this.smoothingRadius,v=945/(32*Math.PI*Math.pow(g,9))*(g*g-m*m)*(7*m*m-3*g*g);return v}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Particle":41,"../shapes/Shape":43}],35:[function(t,n,r){var i=t("../math/Vec3");n.exports=s;function s(_,y,x){x=x||{},this.restLength=typeof x.restLength=="number"?x.restLength:1,this.stiffness=x.stiffness||100,this.damping=x.damping||1,this.bodyA=_,this.bodyB=y,this.localAnchorA=new i,this.localAnchorB=new i,x.localAnchorA&&this.localAnchorA.copy(x.localAnchorA),x.localAnchorB&&this.localAnchorB.copy(x.localAnchorB),x.worldAnchorA&&this.setWorldAnchorA(x.worldAnchorA),x.worldAnchorB&&this.setWorldAnchorB(x.worldAnchorB)}s.prototype.setWorldAnchorA=function(_){this.bodyA.pointToLocalFrame(_,this.localAnchorA)},s.prototype.setWorldAnchorB=function(_){this.bodyB.pointToLocalFrame(_,this.localAnchorB)},s.prototype.getWorldAnchorA=function(_){this.bodyA.pointToWorldFrame(this.localAnchorA,_)},s.prototype.getWorldAnchorB=function(_){this.bodyB.pointToWorldFrame(this.localAnchorB,_)};var o=new i,l=new i,h=new i,u=new i,c=new i,d=new i,f=new i,m=new i,g=new i,v=new i,p=new i;s.prototype.applyForce=function(){var _=this.stiffness,y=this.damping,x=this.restLength,S=this.bodyA,C=this.bodyB,B=o,F=l,M=h,E=u,D=p,H=c,I=d,X=f,W=m,te=g,O=v;this.getWorldAnchorA(H),this.getWorldAnchorB(I),H.vsub(S.position,X),I.vsub(C.position,W),I.vsub(H,B);var U=B.norm();F.copy(B),F.normalize(),C.velocity.vsub(S.velocity,M),C.angularVelocity.cross(W,D),M.vadd(D,M),S.angularVelocity.cross(X,D),M.vsub(D,M),F.mult(-_*(U-x)-y*M.dot(F),E),S.force.vsub(E,S.force),C.force.vadd(E,C.force),X.cross(E,te),W.cross(E,O),S.torque.vsub(te,S.torque),C.torque.vadd(O,C.torque)}},{"../math/Vec3":30}],36:[function(t,n,r){var i=t("../math/Vec3"),s=t("../math/Transform"),o=t("../collision/RaycastResult"),l=t("../utils/Utils");n.exports=h;function h(d){d=l.defaults(d,{chassisConnectionPointLocal:new i,chassisConnectionPointWorld:new i,directionLocal:new i,directionWorld:new i,axleLocal:new i,axleWorld:new i,suspensionRestLength:1,suspensionMaxLength:2,radius:1,suspensionStiffness:100,dampingCompression:10,dampingRelaxation:10,frictionSlip:1e4,steering:0,rotation:0,deltaRotation:0,rollInfluence:.01,maxSuspensionForce:Number.MAX_VALUE,isFrontWheel:!0,clippedInvContactDotSuspension:1,suspensionRelativeVelocity:0,suspensionForce:0,skidInfo:0,suspensionLength:0,maxSuspensionTravel:1,useCustomSlidingRotationalSpeed:!1,customSlidingRotationalSpeed:-.1}),this.maxSuspensionTravel=d.maxSuspensionTravel,this.customSlidingRotationalSpeed=d.customSlidingRotationalSpeed,this.useCustomSlidingRotationalSpeed=d.useCustomSlidingRotationalSpeed,this.sliding=!1,this.chassisConnectionPointLocal=d.chassisConnectionPointLocal.clone(),this.chassisConnectionPointWorld=d.chassisConnectionPointWorld.clone(),this.directionLocal=d.directionLocal.clone(),this.directionWorld=d.directionWorld.clone(),this.axleLocal=d.axleLocal.clone(),this.axleWorld=d.axleWorld.clone(),this.suspensionRestLength=d.suspensionRestLength,this.suspensionMaxLength=d.suspensionMaxLength,this.radius=d.radius,this.suspensionStiffness=d.suspensionStiffness,this.dampingCompression=d.dampingCompression,this.dampingRelaxation=d.dampingRelaxation,this.frictionSlip=d.frictionSlip,this.steering=0,this.rotation=0,this.deltaRotation=0,this.rollInfluence=d.rollInfluence,this.maxSuspensionForce=d.maxSuspensionForce,this.engineForce=0,this.brake=0,this.isFrontWheel=d.isFrontWheel,this.clippedInvContactDotSuspension=1,this.suspensionRelativeVelocity=0,this.suspensionForce=0,this.skidInfo=0,this.suspensionLength=0,this.sideImpulse=0,this.forwardImpulse=0,this.raycastResult=new o,this.worldTransform=new s,this.isInContact=!1}var c=new i,u=new i,c=new i;h.prototype.updateWheel=function(d){var f=this.raycastResult;if(this.isInContact){var m=f.hitNormalWorld.dot(f.directionWorld);f.hitPointWorld.vsub(d.position,u),d.getVelocityAtWorldPoint(u,c);var g=f.hitNormalWorld.dot(c);if(m>=-.1)this.suspensionRelativeVelocity=0,this.clippedInvContactDotSuspension=1/.1;else{var v=-1/m;this.suspensionRelativeVelocity=g*v,this.clippedInvContactDotSuspension=v}}else f.suspensionLength=this.suspensionRestLength,this.suspensionRelativeVelocity=0,f.directionWorld.scale(-1,f.hitNormalWorld),this.clippedInvContactDotSuspension=1}},{"../collision/RaycastResult":10,"../math/Transform":29,"../math/Vec3":30,"../utils/Utils":53}],37:[function(t,n,r){n.exports=l;var i=t("./Shape"),s=t("../math/Vec3"),o=t("./ConvexPolyhedron");function l(c){i.call(this),this.type=i.types.BOX,this.halfExtents=c,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}l.prototype=new i,l.prototype.constructor=l,l.prototype.updateConvexPolyhedronRepresentation=function(){var c=this.halfExtents.x,d=this.halfExtents.y,f=this.halfExtents.z,m=s,g=[new m(-c,-d,-f),new m(c,-d,-f),new m(c,d,-f),new m(-c,d,-f),new m(-c,-d,f),new m(c,-d,f),new m(c,d,f),new m(-c,d,f)],v=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]];new m(0,0,1),new m(0,1,0),new m(1,0,0);var p=new o(g,v);this.convexPolyhedronRepresentation=p,p.material=this.material},l.prototype.calculateLocalInertia=function(c,d){return d=d||new s,l.calculateInertia(this.halfExtents,c,d),d},l.calculateInertia=function(c,d,f){var m=c;f.x=1/12*d*(2*m.y*2*m.y+2*m.z*2*m.z),f.y=1/12*d*(2*m.x*2*m.x+2*m.z*2*m.z),f.z=1/12*d*(2*m.y*2*m.y+2*m.x*2*m.x)},l.prototype.getSideNormals=function(c,d){var f=c,m=this.halfExtents;if(f[0].set(m.x,0,0),f[1].set(0,m.y,0),f[2].set(0,0,m.z),f[3].set(-m.x,0,0),f[4].set(0,-m.y,0),f[5].set(0,0,-m.z),d!==void 0)for(var g=0;g!==f.length;g++)d.vmult(f[g],f[g]);return f},l.prototype.volume=function(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z},l.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.halfExtents.norm()};var h=new s;new s,l.prototype.forEachWorldCorner=function(c,d,f){for(var m=this.halfExtents,g=[[m.x,m.y,m.z],[-m.x,m.y,m.z],[-m.x,-m.y,m.z],[-m.x,-m.y,-m.z],[m.x,-m.y,-m.z],[m.x,m.y,-m.z],[-m.x,m.y,-m.z],[m.x,-m.y,m.z]],v=0;v<g.length;v++)h.set(g[v][0],g[v][1],g[v][2]),d.vmult(h,h),c.vadd(h,h),f(h.x,h.y,h.z)};var u=[new s,new s,new s,new s,new s,new s,new s,new s];l.prototype.calculateWorldAABB=function(c,d,f,m){var g=this.halfExtents;u[0].set(g.x,g.y,g.z),u[1].set(-g.x,g.y,g.z),u[2].set(-g.x,-g.y,g.z),u[3].set(-g.x,-g.y,-g.z),u[4].set(g.x,-g.y,-g.z),u[5].set(g.x,g.y,-g.z),u[6].set(-g.x,g.y,-g.z),u[7].set(g.x,-g.y,g.z);var v=u[0];d.vmult(v,v),c.vadd(v,v),m.copy(v),f.copy(v);for(var p=1;p<8;p++){var v=u[p];d.vmult(v,v),c.vadd(v,v);var _=v.x,y=v.y,x=v.z;_>m.x&&(m.x=_),y>m.y&&(m.y=y),x>m.z&&(m.z=x),_<f.x&&(f.x=_),y<f.y&&(f.y=y),x<f.z&&(f.z=x)}}},{"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],38:[function(t,n,r){n.exports=l;var i=t("./Shape"),s=t("../math/Vec3");t("../math/Quaternion");var o=t("../math/Transform");function l(V,k,b){i.call(this),this.type=i.types.CONVEXPOLYHEDRON,this.vertices=V||[],this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.faces=k||[],this.faceNormals=[],this.computeNormals(),this.worldFaceNormalsNeedsUpdate=!0,this.worldFaceNormals=[],this.uniqueEdges=[],this.uniqueAxes=b?b.slice():null,this.computeEdges(),this.updateBoundingSphereRadius()}l.prototype=new i,l.prototype.constructor=l;var h=new s;l.prototype.computeEdges=function(){var V=this.faces,k=this.vertices;k.length;var b=this.uniqueEdges;b.length=0;for(var A=h,R=0;R!==V.length;R++)for(var G=V[R],P=G.length,ee=0;ee!==P;ee++){var K=(ee+1)%P;k[G[ee]].vsub(k[G[K]],A),A.normalize();for(var Z=!1,ie=0;ie!==b.length;ie++)if(b[ie].almostEquals(A)||b[ie].almostEquals(A)){Z=!0;break}Z||b.push(A.clone())}},l.prototype.computeNormals=function(){this.faceNormals.length=this.faces.length;for(var V=0;V<this.faces.length;V++){for(var k=0;k<this.faces[V].length;k++)if(!this.vertices[this.faces[V][k]])throw new Error("Vertex "+this.faces[V][k]+" not found!");var b=this.faceNormals[V]||new s;this.getFaceNormal(V,b),b.negate(b),this.faceNormals[V]=b;var A=this.vertices[this.faces[V][0]];if(b.dot(A)<0){console.error(".faceNormals["+V+"] = Vec3("+b.toString()+") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.");for(var k=0;k<this.faces[V].length;k++)console.warn(".vertices["+this.faces[V][k]+"] = Vec3("+this.vertices[this.faces[V][k]].toString()+")")}}};var u=new s,c=new s;l.computeNormal=function(V,k,b,A){k.vsub(V,c),b.vsub(k,u),u.cross(c,A),A.isZero()||A.normalize()},l.prototype.getFaceNormal=function(V,k){var b=this.faces[V],A=this.vertices[b[0]],R=this.vertices[b[1]],G=this.vertices[b[2]];return l.computeNormal(A,R,G,k)};var d=new s;l.prototype.clipAgainstHull=function(V,k,b,A,R,G,P,ee,K){for(var Z=d,ie=-1,Te=-Number.MAX_VALUE,pe=0;pe<b.faces.length;pe++){Z.copy(b.faceNormals[pe]),R.vmult(Z,Z);var ge=Z.dot(G);ge>Te&&(Te=ge,ie=pe)}for(var ce=[],ve=b.faces[ie],ke=ve.length,De=0;De<ke;De++){var Ge=b.vertices[ve[De]],Ee=new s;Ee.copy(Ge),R.vmult(Ee,Ee),A.vadd(Ee,Ee),ce.push(Ee)}ie>=0&&this.clipFaceAgainstHull(G,V,k,ce,P,ee,K)};var f=new s,m=new s,g=new s,v=new s,p=new s,_=new s;l.prototype.findSeparatingAxis=function(V,k,b,A,R,G,P,ee){var K=f,Z=m,ie=g,Te=v,pe=p,ge=_,ce=Number.MAX_VALUE,ve=this;if(ve.uniqueAxes)for(var De=0;De!==ve.uniqueAxes.length;De++){b.vmult(ve.uniqueAxes[De],K);var Ee=ve.testSepAxis(K,V,k,b,A,R);if(Ee===!1)return!1;Ee<ce&&(ce=Ee,G.copy(K))}else for(var ke=P?P.length:ve.faces.length,De=0;De<ke;De++){var Ge=P?P[De]:De;K.copy(ve.faceNormals[Ge]),b.vmult(K,K);var Ee=ve.testSepAxis(K,V,k,b,A,R);if(Ee===!1)return!1;Ee<ce&&(ce=Ee,G.copy(K))}if(V.uniqueAxes)for(var De=0;De!==V.uniqueAxes.length;De++){R.vmult(V.uniqueAxes[De],Z);var Ee=ve.testSepAxis(Z,V,k,b,A,R);if(Ee===!1)return!1;Ee<ce&&(ce=Ee,G.copy(Z))}else for(var qe=ee?ee.length:V.faces.length,De=0;De<qe;De++){var Ge=ee?ee[De]:De;Z.copy(V.faceNormals[Ge]),R.vmult(Z,Z);var Ee=ve.testSepAxis(Z,V,k,b,A,R);if(Ee===!1)return!1;Ee<ce&&(ce=Ee,G.copy(Z))}for(var N=0;N!==ve.uniqueEdges.length;N++){b.vmult(ve.uniqueEdges[N],Te);for(var w=0;w!==V.uniqueEdges.length;w++)if(R.vmult(V.uniqueEdges[w],pe),Te.cross(pe,ge),!ge.almostZero()){ge.normalize();var ne=ve.testSepAxis(ge,V,k,b,A,R);if(ne===!1)return!1;ne<ce&&(ce=ne,G.copy(ge))}}return A.vsub(k,ie),ie.dot(G)>0&&G.negate(G),!0};var y=[],x=[];l.prototype.testSepAxis=function(V,k,b,A,R,G){var P=this;l.project(P,V,b,A,y),l.project(k,V,R,G,x);var ee=y[0],K=y[1],Z=x[0],ie=x[1],Te=ee-ie,pe=Z-K,ge=Te<pe?Te:pe;return ge};var S=new s,C=new s;l.prototype.calculateLocalInertia=function(V,k){this.computeLocalAABB(S,C);var b=C.x-S.x,A=C.y-S.y,R=C.z-S.z;k.x=1/12*V*(2*A*2*A+2*R*2*R),k.y=1/12*V*(2*b*2*b+2*R*2*R),k.z=1/12*V*(2*A*2*A+2*b*2*b)},l.prototype.getPlaneConstantOfFace=function(V){var k=this.faces[V],b=this.faceNormals[V],A=this.vertices[k[0]],R=-b.dot(A);return R};var B=new s,F=new s,M=new s,E=new s,D=new s,H=new s,I=new s,X=new s;l.prototype.clipFaceAgainstHull=function(V,k,b,A,R,G,P){for(var ee=B,K=F,Z=M,ie=E,Te=D,pe=H,ge=I,ce=X,ve=this,ke=[],De=A,Ge=ke,Ee=-1,qe=Number.MAX_VALUE,N=0;N<ve.faces.length;N++){ee.copy(ve.faceNormals[N]),b.vmult(ee,ee);var w=ee.dot(V);w<qe&&(qe=w,Ee=N)}if(!(Ee<0)){var ne=ve.faces[Ee];ne.connectedFaces=[];for(var ue=0;ue<ve.faces.length;ue++)for(var me=0;me<ve.faces[ue].length;me++)ne.indexOf(ve.faces[ue][me])!==-1&&ue!==Ee&&ne.connectedFaces.indexOf(ue)===-1&&ne.connectedFaces.push(ue);De.length;for(var ye=ne.length,Fe=0;Fe<ye;Fe++){var Ce=ve.vertices[ne[Fe]],de=ve.vertices[ne[(Fe+1)%ye]];Ce.vsub(de,K),Z.copy(K),b.vmult(Z,Z),k.vadd(Z,Z),ie.copy(this.faceNormals[Ee]),b.vmult(ie,ie),k.vadd(ie,ie),Z.cross(ie,Te),Te.negate(Te),pe.copy(Ce),b.vmult(pe,pe),k.vadd(pe,pe),-pe.dot(Te);var He;{var Be=ne.connectedFaces[Fe];ge.copy(this.faceNormals[Be]);var Ve=this.getPlaneConstantOfFace(Be);ce.copy(ge),b.vmult(ce,ce);var He=Ve-ce.dot(k)}for(this.clipFaceAgainstPlane(De,Ge,ce,He);De.length;)De.shift();for(;Ge.length;)De.push(Ge.shift())}ge.copy(this.faceNormals[Ee]);var Ve=this.getPlaneConstantOfFace(Ee);ce.copy(ge),b.vmult(ce,ce);for(var He=Ve-ce.dot(k),ue=0;ue<De.length;ue++){var Ie=ce.dot(De[ue])+He;if(Ie<=R&&(console.log("clamped: depth="+Ie+" to minDist="+(R+"")),Ie=R),Ie<=G){var ze=De[ue];if(Ie<=0){var Ze={point:ze,normal:ce,depth:Ie};P.push(Ze)}}}}},l.prototype.clipFaceAgainstPlane=function(V,k,b,A){var R,G,P=V.length;if(P<2)return k;var ee=V[V.length-1],K=V[0];R=b.dot(ee)+A;for(var Z=0;Z<P;Z++){if(K=V[Z],G=b.dot(K)+A,R<0)if(G<0){var ie=new s;ie.copy(K),k.push(ie)}else{var ie=new s;ee.lerp(K,R/(R-G),ie),k.push(ie)}else if(G<0){var ie=new s;ee.lerp(K,R/(R-G),ie),k.push(ie),k.push(K)}ee=K,R=G}return k},l.prototype.computeWorldVertices=function(V,k){for(var b=this.vertices.length;this.worldVertices.length<b;)this.worldVertices.push(new s);for(var A=this.vertices,R=this.worldVertices,G=0;G!==b;G++)k.vmult(A[G],R[G]),V.vadd(R[G],R[G]);this.worldVerticesNeedsUpdate=!1},new s,l.prototype.computeLocalAABB=function(V,k){var b=this.vertices.length,A=this.vertices;V.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),k.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(var R=0;R<b;R++){var G=A[R];G.x<V.x?V.x=G.x:G.x>k.x&&(k.x=G.x),G.y<V.y?V.y=G.y:G.y>k.y&&(k.y=G.y),G.z<V.z?V.z=G.z:G.z>k.z&&(k.z=G.z)}},l.prototype.computeWorldFaceNormals=function(V){for(var k=this.faceNormals.length;this.worldFaceNormals.length<k;)this.worldFaceNormals.push(new s);for(var b=this.faceNormals,A=this.worldFaceNormals,R=0;R!==k;R++)V.vmult(b[R],A[R]);this.worldFaceNormalsNeedsUpdate=!1},l.prototype.updateBoundingSphereRadius=function(){for(var V=0,k=this.vertices,b=0,A=k.length;b!==A;b++){var R=k[b].norm2();R>V&&(V=R)}this.boundingSphereRadius=Math.sqrt(V)};var W=new s;l.prototype.calculateWorldAABB=function(V,k,b,A){for(var R=this.vertices.length,G=this.vertices,P,ee,K,Z,ie,Te,pe=0;pe<R;pe++){W.copy(G[pe]),k.vmult(W,W),V.vadd(W,W);var ge=W;ge.x<P||P===void 0?P=ge.x:(ge.x>Z||Z===void 0)&&(Z=ge.x),ge.y<ee||ee===void 0?ee=ge.y:(ge.y>ie||ie===void 0)&&(ie=ge.y),ge.z<K||K===void 0?K=ge.z:(ge.z>Te||Te===void 0)&&(Te=ge.z)}b.set(P,ee,K),A.set(Z,ie,Te)},l.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},l.prototype.getAveragePointLocal=function(V){V=V||new s;for(var k=this.vertices.length,b=this.vertices,A=0;A<k;A++)V.vadd(b[A],V);return V.mult(1/k,V),V},l.prototype.transformAllPoints=function(V,k){var b=this.vertices.length,A=this.vertices;if(k){for(var R=0;R<b;R++){var G=A[R];k.vmult(G,G)}for(var R=0;R<this.faceNormals.length;R++){var G=this.faceNormals[R];k.vmult(G,G)}}if(V)for(var R=0;R<b;R++){var G=A[R];G.vadd(V,G)}};var te=new s,O=new s,U=new s;l.prototype.pointIsInside=function(V){var k=this.vertices.length,b=this.vertices,A=this.faces,R=this.faceNormals,G=null,P=this.faces.length,ee=te;this.getAveragePointLocal(ee);for(var K=0;K<P;K++){this.faces[K].length;var k=R[K],Z=b[A[K][0]],ie=O;V.vsub(Z,ie);var Te=k.dot(ie),pe=U;ee.vsub(Z,pe);var ge=k.dot(pe);if(Te<0&&ge>0||Te>0&&ge<0)return!1}return G?1:-1},new s;var J=new s,j=new s;l.project=function(V,k,b,A,R){var G=V.vertices.length,P=J,ee=0,K=0,Z=j,ie=V.vertices;Z.setZero(),o.vectorToLocalFrame(b,A,k,P),o.pointToLocalFrame(b,A,Z,Z);var Te=Z.dot(P);K=ee=ie[0].dot(P);for(var pe=1;pe<G;pe++){var ge=ie[pe].dot(P);ge>ee&&(ee=ge),ge<K&&(K=ge)}if(K-=Te,ee-=Te,K>ee){var ce=K;K=ee,ee=ce}R[0]=ee,R[1]=K}},{"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"./Shape":43}],39:[function(t,n,r){n.exports=l;var i=t("./Shape"),s=t("../math/Vec3");t("../math/Quaternion");var o=t("./ConvexPolyhedron");function l(h,u,c,d){var f=d,m=[],g=[],v=[],p=[],_=[],y=Math.cos,x=Math.sin;m.push(new s(u*y(0),u*x(0),-c*.5)),p.push(0),m.push(new s(h*y(0),h*x(0),c*.5)),_.push(1);for(var S=0;S<f;S++){var C=2*Math.PI/f*(S+1),B=2*Math.PI/f*(S+.5);S<f-1?(m.push(new s(u*y(C),u*x(C),-c*.5)),p.push(2*S+2),m.push(new s(h*y(C),h*x(C),c*.5)),_.push(2*S+3),v.push([2*S+2,2*S+3,2*S+1,2*S])):v.push([0,1,2*S+1,2*S]),(f%2===1||S<f/2)&&g.push(new s(y(B),x(B),0))}v.push(_),g.push(new s(0,0,1));for(var F=[],S=0;S<p.length;S++)F.push(p[p.length-S-1]);v.push(F),this.type=i.types.CONVEXPOLYHEDRON,o.call(this,m,v,g)}l.prototype=new o},{"../math/Quaternion":28,"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],40:[function(t,n,r){var i=t("./Shape"),s=t("./ConvexPolyhedron"),o=t("../math/Vec3"),l=t("../utils/Utils");n.exports=h;function h(u,c){c=l.defaults(c,{maxValue:null,minValue:null,elementSize:1}),this.data=u,this.maxValue=c.maxValue,this.minValue=c.minValue,this.elementSize=c.elementSize,c.minValue===null&&this.updateMinValue(),c.maxValue===null&&this.updateMaxValue(),this.cacheEnabled=!0,i.call(this),this.pillarConvex=new s,this.pillarOffset=new o,this.type=i.types.HEIGHTFIELD,this.updateBoundingSphereRadius(),this._cachedPillars={}}h.prototype=new i,h.prototype.update=function(){this._cachedPillars={}},h.prototype.updateMinValue=function(){for(var u=this.data,c=u[0][0],d=0;d!==u.length;d++)for(var f=0;f!==u[d].length;f++){var m=u[d][f];m<c&&(c=m)}this.minValue=c},h.prototype.updateMaxValue=function(){for(var u=this.data,c=u[0][0],d=0;d!==u.length;d++)for(var f=0;f!==u[d].length;f++){var m=u[d][f];m>c&&(c=m)}this.maxValue=c},h.prototype.setHeightValueAtIndex=function(u,c,d){var f=this.data;f[u][c]=d,this.clearCachedConvexTrianglePillar(u,c,!1),u>0&&(this.clearCachedConvexTrianglePillar(u-1,c,!0),this.clearCachedConvexTrianglePillar(u-1,c,!1)),c>0&&(this.clearCachedConvexTrianglePillar(u,c-1,!0),this.clearCachedConvexTrianglePillar(u,c-1,!1)),c>0&&u>0&&this.clearCachedConvexTrianglePillar(u-1,c-1,!0)},h.prototype.getRectMinMax=function(u,c,d,f,m){m=m||[];for(var g=this.data,v=this.minValue,p=u;p<=d;p++)for(var _=c;_<=f;_++){var y=g[p][_];y>v&&(v=y)}m[0]=this.minValue,m[1]=v},h.prototype.getIndexOfPosition=function(u,c,d,f){var m=this.elementSize,g=this.data,v=Math.floor(u/m),p=Math.floor(c/m);return d[0]=v,d[1]=p,f&&(v<0&&(v=0),p<0&&(p=0),v>=g.length-1&&(v=g.length-1),p>=g[0].length-1&&(p=g[0].length-1)),!(v<0||p<0||v>=g.length-1||p>=g[0].length-1)},h.prototype.getHeightAt=function(u,c,d){var f=[];this.getIndexOfPosition(u,c,f,d);var m=[];return this.getRectMinMax(f[0],f[1]+1,f[0],f[1]+1,m),(m[0]+m[1])/2},h.prototype.getCacheConvexTrianglePillarKey=function(u,c,d){return u+"_"+c+"_"+(d?1:0)},h.prototype.getCachedConvexTrianglePillar=function(u,c,d){return this._cachedPillars[this.getCacheConvexTrianglePillarKey(u,c,d)]},h.prototype.setCachedConvexTrianglePillar=function(u,c,d,f,m){this._cachedPillars[this.getCacheConvexTrianglePillarKey(u,c,d)]={convex:f,offset:m}},h.prototype.clearCachedConvexTrianglePillar=function(u,c,d){delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(u,c,d)]},h.prototype.getConvexTrianglePillar=function(u,c,d){var f=this.pillarConvex,m=this.pillarOffset;if(this.cacheEnabled){var g=this.getCachedConvexTrianglePillar(u,c,d);if(g){this.pillarConvex=g.convex,this.pillarOffset=g.offset;return}f=new s,m=new o,this.pillarConvex=f,this.pillarOffset=m}var g=this.data,v=this.elementSize,p=f.faces;f.vertices.length=6;for(var _=0;_<6;_++)f.vertices[_]||(f.vertices[_]=new o);p.length=5;for(var _=0;_<5;_++)p[_]||(p[_]=[]);var y=f.vertices,x=(Math.min(g[u][c],g[u+1][c],g[u][c+1],g[u+1][c+1])-this.minValue)/2+this.minValue;d?(m.set((u+.75)*v,(c+.75)*v,x),y[0].set(.25*v,.25*v,g[u+1][c+1]-x),y[1].set(-.75*v,.25*v,g[u][c+1]-x),y[2].set(.25*v,-.75*v,g[u+1][c]-x),y[3].set(.25*v,.25*v,-x-1),y[4].set(-.75*v,.25*v,-x-1),y[5].set(.25*v,-.75*v,-x-1),p[0][0]=0,p[0][1]=1,p[0][2]=2,p[1][0]=5,p[1][1]=4,p[1][2]=3,p[2][0]=2,p[2][1]=5,p[2][2]=3,p[2][3]=0,p[3][0]=3,p[3][1]=4,p[3][2]=1,p[3][3]=0,p[4][0]=1,p[4][1]=4,p[4][2]=5,p[4][3]=2):(m.set((u+.25)*v,(c+.25)*v,x),y[0].set(-.25*v,-.25*v,g[u][c]-x),y[1].set(.75*v,-.25*v,g[u+1][c]-x),y[2].set(-.25*v,.75*v,g[u][c+1]-x),y[3].set(-.25*v,-.25*v,-x-1),y[4].set(.75*v,-.25*v,-x-1),y[5].set(-.25*v,.75*v,-x-1),p[0][0]=0,p[0][1]=1,p[0][2]=2,p[1][0]=5,p[1][1]=4,p[1][2]=3,p[2][0]=0,p[2][1]=2,p[2][2]=5,p[2][3]=3,p[3][0]=1,p[3][1]=0,p[3][2]=3,p[3][3]=4,p[4][0]=4,p[4][1]=5,p[4][2]=2,p[4][3]=1),f.computeNormals(),f.computeEdges(),f.updateBoundingSphereRadius(),this.setCachedConvexTrianglePillar(u,c,d,f,m)},h.prototype.calculateLocalInertia=function(u,c){return c=c||new o,c.set(0,0,0),c},h.prototype.volume=function(){return Number.MAX_VALUE},h.prototype.calculateWorldAABB=function(u,c,d,f){d.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),f.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)},h.prototype.updateBoundingSphereRadius=function(){var u=this.data,c=this.elementSize;this.boundingSphereRadius=new o(u.length*c,u[0].length*c,Math.max(Math.abs(this.maxValue),Math.abs(this.minValue))).norm()}},{"../math/Vec3":30,"../utils/Utils":53,"./ConvexPolyhedron":38,"./Shape":43}],41:[function(t,n,r){n.exports=o;var i=t("./Shape"),s=t("../math/Vec3");function o(){i.call(this),this.type=i.types.PARTICLE}o.prototype=new i,o.prototype.constructor=o,o.prototype.calculateLocalInertia=function(l,h){return h=h||new s,h.set(0,0,0),h},o.prototype.volume=function(){return 0},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=0},o.prototype.calculateWorldAABB=function(l,h,u,c){u.copy(l),c.copy(l)}},{"../math/Vec3":30,"./Shape":43}],42:[function(t,n,r){n.exports=o;var i=t("./Shape"),s=t("../math/Vec3");function o(){i.call(this),this.type=i.types.PLANE,this.worldNormal=new s,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}o.prototype=new i,o.prototype.constructor=o,o.prototype.computeWorldNormal=function(h){var u=this.worldNormal;u.set(0,0,1),h.vmult(u,u),this.worldNormalNeedsUpdate=!1},o.prototype.calculateLocalInertia=function(h,u){return u=u||new s,u},o.prototype.volume=function(){return Number.MAX_VALUE};var l=new s;o.prototype.calculateWorldAABB=function(h,u,c,d){l.set(0,0,1),u.vmult(l,l);var f=Number.MAX_VALUE;c.set(-f,-f,-f),d.set(f,f,f),l.x===1&&(d.x=h.x),l.y===1&&(d.y=h.y),l.z===1&&(d.z=h.z),l.x===-1&&(c.x=h.x),l.y===-1&&(c.y=h.y),l.z===-1&&(c.z=h.z)},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=Number.MAX_VALUE}},{"../math/Vec3":30,"./Shape":43}],43:[function(t,n,r){n.exports=i;var i=t("./Shape");t("../math/Vec3"),t("../math/Quaternion"),t("../material/Material");function i(){this.id=i.idCounter++,this.type=0,this.boundingSphereRadius=0,this.collisionResponse=!0,this.material=null}i.prototype.constructor=i,i.prototype.updateBoundingSphereRadius=function(){throw"computeBoundingSphereRadius() not implemented for shape type "+this.type},i.prototype.volume=function(){throw"volume() not implemented for shape type "+this.type},i.prototype.calculateLocalInertia=function(s,o){throw"calculateLocalInertia() not implemented for shape type "+this.type},i.idCounter=0,i.types={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"./Shape":43}],44:[function(t,n,r){n.exports=o;var i=t("./Shape"),s=t("../math/Vec3");function o(l){if(i.call(this),this.radius=l!==void 0?Number(l):1,this.type=i.types.SPHERE,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}o.prototype=new i,o.prototype.constructor=o,o.prototype.calculateLocalInertia=function(l,h){h=h||new s;var u=2*l*this.radius*this.radius/5;return h.x=u,h.y=u,h.z=u,h},o.prototype.volume=function(){return 4*Math.PI*this.radius/3},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.radius},o.prototype.calculateWorldAABB=function(l,h,u,c){for(var d=this.radius,f=["x","y","z"],m=0;m<f.length;m++){var g=f[m];u[g]=l[g]-d,c[g]=l[g]+d}}},{"../math/Vec3":30,"./Shape":43}],45:[function(t,n,r){n.exports=u;var i=t("./Shape"),s=t("../math/Vec3");t("../math/Quaternion");var o=t("../math/Transform"),l=t("../collision/AABB"),h=t("../utils/Octree");function u(F,M){i.call(this),this.type=i.types.TRIMESH,this.vertices=new Float32Array(F),this.indices=new Int16Array(M),this.normals=new Float32Array(M.length),this.aabb=new l,this.edges=null,this.scale=new s(1,1,1),this.tree=new h,this.updateEdges(),this.updateNormals(),this.updateAABB(),this.updateBoundingSphereRadius(),this.updateTree()}u.prototype=new i,u.prototype.constructor=u;var c=new s;u.prototype.updateTree=function(){var F=this.tree;F.reset(),F.aabb.copy(this.aabb);var M=this.scale;F.aabb.lowerBound.x*=1/M.x,F.aabb.lowerBound.y*=1/M.y,F.aabb.lowerBound.z*=1/M.z,F.aabb.upperBound.x*=1/M.x,F.aabb.upperBound.y*=1/M.y,F.aabb.upperBound.z*=1/M.z;for(var E=new l,D=new s,H=new s,I=new s,X=[D,H,I],W=0;W<this.indices.length/3;W++){var te=W*3;this._getUnscaledVertex(this.indices[te],D),this._getUnscaledVertex(this.indices[te+1],H),this._getUnscaledVertex(this.indices[te+2],I),E.setFromPoints(X),F.insert(E,W)}F.removeEmptyNodes()};var d=new l;u.prototype.getTrianglesInAABB=function(F,M){d.copy(F);var E=this.scale,D=E.x,H=E.y,I=E.z,X=d.lowerBound,W=d.upperBound;return X.x/=D,X.y/=H,X.z/=I,W.x/=D,W.y/=H,W.z/=I,this.tree.aabbQuery(d,M)},u.prototype.setScale=function(F){var M=this.scale.x===this.scale.y===this.scale.z,E=F.x===F.y===F.z;M&&E||this.updateNormals(),this.scale.copy(F),this.updateAABB(),this.updateBoundingSphereRadius()},u.prototype.updateNormals=function(){for(var F=c,M=this.normals,E=0;E<this.indices.length/3;E++){var D=E*3,H=this.indices[D],I=this.indices[D+1],X=this.indices[D+2];this.getVertex(H,p),this.getVertex(I,_),this.getVertex(X,y),u.computeNormal(_,p,y,F),M[D]=F.x,M[D+1]=F.y,M[D+2]=F.z}},u.prototype.updateEdges=function(){for(var F={},M=function(te,O){var U=H<I?H+"_"+I:I+"_"+H;F[U]=!0},E=0;E<this.indices.length/3;E++){var D=E*3,H=this.indices[D],I=this.indices[D+1];this.indices[D+2],M(),M(),M()}var X=Object.keys(F);this.edges=new Int16Array(X.length*2);for(var E=0;E<X.length;E++){var W=X[E].split("_");this.edges[2*E]=parseInt(W[0],10),this.edges[2*E+1]=parseInt(W[1],10)}},u.prototype.getEdgeVertex=function(F,M,E){var D=this.edges[F*2+(M?1:0)];this.getVertex(D,E)};var f=new s,m=new s;u.prototype.getEdgeVector=function(F,M){var E=f,D=m;this.getEdgeVertex(F,0,E),this.getEdgeVertex(F,1,D),D.vsub(E,M)};var g=new s,v=new s;u.computeNormal=function(F,M,E,D){M.vsub(F,v),E.vsub(M,g),g.cross(v,D),D.isZero()||D.normalize()};var p=new s,_=new s,y=new s;u.prototype.getVertex=function(F,M){var E=this.scale;return this._getUnscaledVertex(F,M),M.x*=E.x,M.y*=E.y,M.z*=E.z,M},u.prototype._getUnscaledVertex=function(F,M){var E=F*3,D=this.vertices;return M.set(D[E],D[E+1],D[E+2])},u.prototype.getWorldVertex=function(F,M,E,D){return this.getVertex(F,D),o.pointToWorldFrame(M,E,D,D),D},u.prototype.getTriangleVertices=function(F,M,E,D){var H=F*3;this.getVertex(this.indices[H],M),this.getVertex(this.indices[H+1],E),this.getVertex(this.indices[H+2],D)},u.prototype.getNormal=function(F,M){var E=F*3;return M.set(this.normals[E],this.normals[E+1],this.normals[E+2])};var x=new l;u.prototype.calculateLocalInertia=function(F,M){this.computeLocalAABB(x);var E=x.upperBound.x-x.lowerBound.x,D=x.upperBound.y-x.lowerBound.y,H=x.upperBound.z-x.lowerBound.z;return M.set(1/12*F*(2*D*2*D+2*H*2*H),1/12*F*(2*E*2*E+2*H*2*H),1/12*F*(2*D*2*D+2*E*2*E))};var S=new s;u.prototype.computeLocalAABB=function(F){var M=F.lowerBound,E=F.upperBound,D=this.vertices.length;this.vertices;var H=S;this.getVertex(0,H),M.copy(H),E.copy(H);for(var I=0;I!==D;I++)this.getVertex(I,H),H.x<M.x?M.x=H.x:H.x>E.x&&(E.x=H.x),H.y<M.y?M.y=H.y:H.y>E.y&&(E.y=H.y),H.z<M.z?M.z=H.z:H.z>E.z&&(E.z=H.z)},u.prototype.updateAABB=function(){this.computeLocalAABB(this.aabb)},u.prototype.updateBoundingSphereRadius=function(){for(var F=0,M=this.vertices,E=new s,D=0,H=M.length/3;D!==H;D++){this.getVertex(D,E);var I=E.norm2();I>F&&(F=I)}this.boundingSphereRadius=Math.sqrt(F)},new s;var C=new o,B=new l;u.prototype.calculateWorldAABB=function(F,M,E,D){var H=C,I=B;H.position=F,H.quaternion=M,this.aabb.toWorldFrame(H,I),E.copy(I.lowerBound),D.copy(I.upperBound)},u.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},u.createTorus=function(F,M,E,D,H){F=F||1,M=M||.5,E=E||8,D=D||6,H=H||Math.PI*2;for(var I=[],X=[],W=0;W<=E;W++)for(var te=0;te<=D;te++){var O=te/D*H,U=W/E*Math.PI*2,J=(F+M*Math.cos(U))*Math.cos(O),j=(F+M*Math.cos(U))*Math.sin(O),V=M*Math.sin(U);I.push(J,j,V)}for(var W=1;W<=E;W++)for(var te=1;te<=D;te++){var k=(D+1)*W+te-1,b=(D+1)*(W-1)+te-1,A=(D+1)*(W-1)+te,R=(D+1)*W+te;X.push(k,b,R),X.push(b,A,R)}return new u(I,X)}},{"../collision/AABB":3,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../utils/Octree":50,"./Shape":43}],46:[function(t,n,r){n.exports=s,t("../math/Vec3"),t("../math/Quaternion");var i=t("./Solver");function s(){i.call(this),this.iterations=10,this.tolerance=1e-7}s.prototype=new i;var o=[],l=[],h=[];s.prototype.solve=function(u,c){var d=0,f=this.iterations,m=this.tolerance*this.tolerance,g=this.equations,v=g.length,p=c.bodies,_=p.length,y=u,x,S,C,B,F,M;if(v!==0)for(var E=0;E!==_;E++)p[E].updateSolveMassProperties();var D=l,H=h,I=o;D.length=v,H.length=v,I.length=v;for(var E=0;E!==v;E++){var X=g[E];I[E]=0,H[E]=X.computeB(y),D[E]=1/X.computeC()}if(v!==0){for(var E=0;E!==_;E++){var W=p[E],te=W.vlambda,O=W.wlambda;te.set(0,0,0),O&&O.set(0,0,0)}for(d=0;d!==f;d++){B=0;for(var U=0;U!==v;U++){var X=g[U];x=H[U],S=D[U],M=I[U],F=X.computeGWlambda(),C=S*(x-F-X.eps*M),M+C<X.minForce?C=X.minForce-M:M+C>X.maxForce&&(C=X.maxForce-M),I[U]+=C,B+=C>0?C:-C,X.addToWlambda(C)}if(B*B<m)break}for(var E=0;E!==_;E++){var W=p[E],J=W.velocity,j=W.angularVelocity;J.vadd(W.vlambda,J),j&&j.vadd(W.wlambda,j)}}return d}},{"../math/Quaternion":28,"../math/Vec3":30,"./Solver":47}],47:[function(t,n,r){n.exports=i;function i(){this.equations=[]}i.prototype.solve=function(s,o){return 0},i.prototype.addEquation=function(s){s.enabled&&this.equations.push(s)},i.prototype.removeEquation=function(s){var o=this.equations,l=o.indexOf(s);l!==-1&&o.splice(l,1)},i.prototype.removeAllEquations=function(){this.equations.length=0}},{}],48:[function(t,n,r){n.exports=o,t("../math/Vec3"),t("../math/Quaternion");var i=t("./Solver"),s=t("../objects/Body");function o(p){for(i.call(this),this.iterations=10,this.tolerance=1e-7,this.subsolver=p,this.nodes=[],this.nodePool=[];this.nodePool.length<128;)this.nodePool.push(this.createNode())}o.prototype=new i;var l=[],h=[],u={bodies:[]},c=s.STATIC;function d(p){for(var _=p.length,y=0;y!==_;y++){var x=p[y];if(!x.visited&&!(x.body.type&c))return x}return!1}var f=[];function m(p,_,y,x){for(f.push(p),p.visited=!0,_(p,y,x);f.length;)for(var S=f.pop(),C;C=d(S.children);)C.visited=!0,_(C,y,x),f.push(C)}function g(p,_,y){_.push(p.body);for(var x=p.eqs.length,S=0;S!==x;S++){var C=p.eqs[S];y.indexOf(C)===-1&&y.push(C)}}o.prototype.createNode=function(){return{body:null,children:[],eqs:[],visited:!1}},o.prototype.solve=function(p,_){for(var y=l,x=this.nodePool,S=_.bodies,C=this.equations,B=C.length,F=S.length,M=this.subsolver;x.length<F;)x.push(this.createNode());y.length=F;for(var E=0;E<F;E++)y[E]=x[E];for(var E=0;E!==F;E++){var D=y[E];D.body=S[E],D.children.length=0,D.eqs.length=0,D.visited=!1}for(var H=0;H!==B;H++){var I=C[H],E=S.indexOf(I.bi),X=S.indexOf(I.bj),W=y[E],te=y[X];W.children.push(te),W.eqs.push(I),te.children.push(W),te.eqs.push(I)}var O,U=0,J=h;M.tolerance=this.tolerance,M.iterations=this.iterations;for(var j=u;O=d(y);){J.length=0,j.bodies.length=0,m(O,g,j.bodies,J);var V=J.length;J=J.sort(v);for(var E=0;E!==V;E++)M.addEquation(J[E]);M.solve(p,j),M.removeAllEquations(),U++}return U};function v(p,_){return _.id-p.id}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"./Solver":47}],49:[function(t,n,r){var i=function(){};n.exports=i,i.prototype={constructor:i,addEventListener:function(s,o){this._listeners===void 0&&(this._listeners={});var l=this._listeners;return l[s]===void 0&&(l[s]=[]),l[s].indexOf(o)===-1&&l[s].push(o),this},hasEventListener:function(s,o){if(this._listeners===void 0)return!1;var l=this._listeners;return l[s]!==void 0&&l[s].indexOf(o)!==-1},removeEventListener:function(s,o){if(this._listeners===void 0)return this;var l=this._listeners;if(l[s]===void 0)return this;var h=l[s].indexOf(o);return h!==-1&&l[s].splice(h,1),this},dispatchEvent:function(s){if(this._listeners===void 0)return this;var o=this._listeners,l=o[s.type];if(l!==void 0){s.target=this;for(var h=0,u=l.length;h<u;h++)l[h].call(this,s)}return this}}},{}],50:[function(t,n,r){var i=t("../collision/AABB"),s=t("../math/Vec3");n.exports=l;function o(c){c=c||{},this.root=c.root||null,this.aabb=c.aabb?c.aabb.clone():new i,this.data=[],this.children=[]}function l(c,d){d=d||{},d.root=null,d.aabb=c,o.call(this,d),this.maxDepth=typeof d.maxDepth<"u"?d.maxDepth:8}l.prototype=new o,o.prototype.reset=function(c,d){this.children.length=this.data.length=0},o.prototype.insert=function(c,d,f){var m=this.data;if(f=f||0,!this.aabb.contains(c))return!1;var g=this.children;if(f<(this.maxDepth||this.root.maxDepth)){var v=!1;g.length||(this.subdivide(),v=!0);for(var p=0;p!==8;p++)if(g[p].insert(c,d,f+1))return!0;v&&(g.length=0)}return m.push(d),!0};var h=new s;o.prototype.subdivide=function(){var c=this.aabb,d=c.lowerBound,f=c.upperBound,m=this.children;m.push(new o({aabb:new i({lowerBound:new s(0,0,0)})}),new o({aabb:new i({lowerBound:new s(1,0,0)})}),new o({aabb:new i({lowerBound:new s(1,1,0)})}),new o({aabb:new i({lowerBound:new s(1,1,1)})}),new o({aabb:new i({lowerBound:new s(0,1,1)})}),new o({aabb:new i({lowerBound:new s(0,0,1)})}),new o({aabb:new i({lowerBound:new s(1,0,1)})}),new o({aabb:new i({lowerBound:new s(0,1,0)})})),f.vsub(d,h),h.scale(.5,h);for(var g=this.root||this,v=0;v!==8;v++){var p=m[v];p.root=g;var _=p.aabb.lowerBound;_.x*=h.x,_.y*=h.y,_.z*=h.z,_.vadd(d,_),_.vadd(h,p.aabb.upperBound)}},o.prototype.aabbQuery=function(c,d){this.data,this.children;for(var f=[this];f.length;){var m=f.pop();m.aabb.overlaps(c)&&Array.prototype.push.apply(d,m.data),Array.prototype.push.apply(f,m.children)}return d};var u=new i;o.prototype.rayQuery=function(c,d,f){return c.getAABB(u),u.toLocalFrame(d,u),this.aabbQuery(u,f),f},o.prototype.removeEmptyNodes=function(){for(var c=[this];c.length;){for(var d=c.pop(),f=d.children.length-1;f>=0;f--)d.children[f].data.length||d.children.splice(f,1);Array.prototype.push.apply(c,d.children)}}},{"../collision/AABB":3,"../math/Vec3":30}],51:[function(t,n,r){n.exports=i;function i(){this.objects=[],this.type=Object}i.prototype.release=function(){for(var s=arguments.length,o=0;o!==s;o++)this.objects.push(arguments[o])},i.prototype.get=function(){return this.objects.length===0?this.constructObject():this.objects.pop()},i.prototype.constructObject=function(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}},{}],52:[function(t,n,r){n.exports=i;function i(){this.data={keys:[]}}i.prototype.get=function(s,o){if(s>o){var l=o;o=s,s=l}return this.data[s+"-"+o]},i.prototype.set=function(s,o,l){if(s>o){var h=o;o=s,s=h}var u=s+"-"+o;this.get(s,o)||this.data.keys.push(u),this.data[u]=l},i.prototype.reset=function(){for(var s=this.data,o=s.keys;o.length>0;){var l=o.pop();delete s[l]}}},{}],53:[function(t,n,r){function i(){}n.exports=i,i.defaults=function(s,o){s=s||{};for(var l in o)l in s||(s[l]=o[l]);return s}},{}],54:[function(t,n,r){n.exports=o;var i=t("../math/Vec3"),s=t("./Pool");function o(){s.call(this),this.type=i}o.prototype=new s,o.prototype.constructObject=function(){return new i}},{"../math/Vec3":30,"./Pool":51}],55:[function(t,n,r){n.exports=m;var i=t("../collision/AABB"),s=t("../shapes/Shape"),o=t("../collision/Ray"),l=t("../math/Vec3"),h=t("../math/Transform");t("../shapes/ConvexPolyhedron");var u=t("../math/Quaternion");t("../solver/Solver");var c=t("../utils/Vec3Pool"),d=t("../equations/ContactEquation"),f=t("../equations/FrictionEquation");function m(re){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new c,this.world=re,this.currentContactMaterial=null,this.enableFrictionReduction=!1}m.prototype.createContactEquation=function(re,he,_e,Me,We,Le){var we;this.contactPointPool.length?(we=this.contactPointPool.pop(),we.bi=re,we.bj=he):we=new d(re,he),we.enabled=re.collisionResponse&&he.collisionResponse&&_e.collisionResponse&&Me.collisionResponse;var T=this.currentContactMaterial;we.restitution=T.restitution,we.setSpookParams(T.contactEquationStiffness,T.contactEquationRelaxation,this.world.dt);var L=_e.material||re.material,q=Me.material||he.material;return L&&q&&L.restitution>=0&&q.restitution>=0&&(we.restitution=L.restitution*q.restitution),we.si=We||_e,we.sj=Le||Me,we},m.prototype.createFrictionEquationsFromContact=function(re,he){var _e=re.bi,Me=re.bj,We=re.si,Le=re.sj,we=this.world,T=this.currentContactMaterial,L=T.friction,q=We.material||_e.material,z=Le.material||Me.material;if(q&&z&&q.friction>=0&&z.friction>=0&&(L=q.friction*z.friction),L>0){var $=L*we.gravity.length(),ae=_e.invMass+Me.invMass;ae>0&&(ae=1/ae);var se=this.frictionEquationPool,fe=se.length?se.pop():new f(_e,Me,$*ae),Se=se.length?se.pop():new f(_e,Me,$*ae);return fe.bi=Se.bi=_e,fe.bj=Se.bj=Me,fe.minForce=Se.minForce=-$*ae,fe.maxForce=Se.maxForce=$*ae,fe.ri.copy(re.ri),fe.rj.copy(re.rj),Se.ri.copy(re.ri),Se.rj.copy(re.rj),re.ni.tangents(fe.t,Se.t),fe.setSpookParams(T.frictionEquationStiffness,T.frictionEquationRelaxation,we.dt),Se.setSpookParams(T.frictionEquationStiffness,T.frictionEquationRelaxation,we.dt),fe.enabled=Se.enabled=re.enabled,he.push(fe,Se),!0}return!1};var g=new l,v=new l,p=new l;m.prototype.createFrictionFromAverage=function(re){var he=this.result[this.result.length-1];if(!(!this.createFrictionEquationsFromContact(he,this.frictionResult)||re===1)){var _e=this.frictionResult[this.frictionResult.length-2],Me=this.frictionResult[this.frictionResult.length-1];g.setZero(),v.setZero(),p.setZero();var We=he.bi;he.bj;for(var Le=0;Le!==re;Le++)he=this.result[this.result.length-1-Le],he.bodyA!==We?(g.vadd(he.ni,g),v.vadd(he.ri,v),p.vadd(he.rj,p)):(g.vsub(he.ni,g),v.vadd(he.rj,v),p.vadd(he.ri,p));var we=1/re;v.scale(we,_e.ri),p.scale(we,_e.rj),Me.ri.copy(_e.ri),Me.rj.copy(_e.rj),g.normalize(),g.tangents(_e.t,Me.t)}};var _=new l,y=new l,x=new u,S=new u;m.prototype.getContacts=function(re,he,_e,Me,We,Le,we){this.contactPointPool=We,this.frictionEquationPool=we,this.result=Me,this.frictionResult=Le;for(var T=x,L=S,q=_,z=y,$=0,ae=re.length;$!==ae;$++){var se=re[$],fe=he[$],Se=null;se.material&&fe.material&&(Se=_e.getContactMaterial(se.material,fe.material)||null);for(var Ae=0;Ae<se.shapes.length;Ae++){se.quaternion.mult(se.shapeOrientations[Ae],T),se.quaternion.vmult(se.shapeOffsets[Ae],q),q.vadd(se.position,q);for(var oe=se.shapes[Ae],Re=0;Re<fe.shapes.length;Re++){fe.quaternion.mult(fe.shapeOrientations[Re],L),fe.quaternion.vmult(fe.shapeOffsets[Re],z),z.vadd(fe.position,z);var Ue=fe.shapes[Re];if(!(q.distanceTo(z)>oe.boundingSphereRadius+Ue.boundingSphereRadius)){var it=null;oe.material&&Ue.material&&(it=_e.getContactMaterial(oe.material,Ue.material)||null),this.currentContactMaterial=it||Se||_e.defaultContactMaterial;var Xe=this[oe.type|Ue.type];Xe&&(oe.type<Ue.type?Xe.call(this,oe,Ue,q,z,T,L,se,fe,oe,Ue):Xe.call(this,Ue,oe,z,q,L,T,fe,se,oe,Ue))}}}}},m.prototype[s.types.BOX|s.types.BOX]=m.prototype.boxBox=function(re,he,_e,Me,We,Le,we,T){re.convexPolyhedronRepresentation.material=re.material,he.convexPolyhedronRepresentation.material=he.material,re.convexPolyhedronRepresentation.collisionResponse=re.collisionResponse,he.convexPolyhedronRepresentation.collisionResponse=he.collisionResponse,this.convexConvex(re.convexPolyhedronRepresentation,he.convexPolyhedronRepresentation,_e,Me,We,Le,we,T,re,he)},m.prototype[s.types.BOX|s.types.CONVEXPOLYHEDRON]=m.prototype.boxConvex=function(re,he,_e,Me,We,Le,we,T){re.convexPolyhedronRepresentation.material=re.material,re.convexPolyhedronRepresentation.collisionResponse=re.collisionResponse,this.convexConvex(re.convexPolyhedronRepresentation,he,_e,Me,We,Le,we,T,re,he)},m.prototype[s.types.BOX|s.types.PARTICLE]=m.prototype.boxParticle=function(re,he,_e,Me,We,Le,we,T){re.convexPolyhedronRepresentation.material=re.material,re.convexPolyhedronRepresentation.collisionResponse=re.collisionResponse,this.convexParticle(re.convexPolyhedronRepresentation,he,_e,Me,We,Le,we,T,re,he)},m.prototype[s.types.SPHERE]=m.prototype.sphereSphere=function(re,he,_e,Me,We,Le,we,T){var L=this.createContactEquation(we,T,re,he);Me.vsub(_e,L.ni),L.ni.normalize(),L.ri.copy(L.ni),L.rj.copy(L.ni),L.ri.mult(re.radius,L.ri),L.rj.mult(-he.radius,L.rj),L.ri.vadd(_e,L.ri),L.ri.vsub(we.position,L.ri),L.rj.vadd(Me,L.rj),L.rj.vsub(T.position,L.rj),this.result.push(L),this.createFrictionEquationsFromContact(L,this.frictionResult)};var C=new l,B=new l,F=new l;m.prototype[s.types.PLANE|s.types.TRIMESH]=m.prototype.planeTrimesh=function(re,he,_e,Me,We,Le,we,T){var L=new l,q=C;q.set(0,0,1),We.vmult(q,q);for(var z=0;z<he.vertices.length/3;z++){he.getVertex(z,L);var $=new l;$.copy(L),h.pointToWorldFrame(Me,Le,$,L);var ae=B;L.vsub(_e,ae);var se=q.dot(ae);if(se<=0){var fe=this.createContactEquation(we,T,re,he);fe.ni.copy(q);var Se=F;q.scale(ae.dot(q),Se),L.vsub(Se,Se),fe.ri.copy(Se),fe.ri.vsub(we.position,fe.ri),fe.rj.copy(L),fe.rj.vsub(T.position,fe.rj),this.result.push(fe),this.createFrictionEquationsFromContact(fe,this.frictionResult)}}};var M=new l,E=new l;new l;var D=new l,H=new l,I=new l,X=new l,W=new l,te=new l,O=new l,U=new l,J=new l,j=new l,V=new l,k=new i,b=[];m.prototype[s.types.SPHERE|s.types.TRIMESH]=m.prototype.sphereTrimesh=function(re,he,_e,Me,We,Le,we,T){var L=I,q=X,z=W,$=te,ae=O,se=U,fe=k,Se=H,Ae=E,oe=b;h.pointToLocalFrame(Me,Le,_e,ae);var Re=re.radius;fe.lowerBound.set(ae.x-Re,ae.y-Re,ae.z-Re),fe.upperBound.set(ae.x+Re,ae.y+Re,ae.z+Re),he.getTrianglesInAABB(fe,oe);for(var Ue=D,it=re.radius*re.radius,Xe=0;Xe<oe.length;Xe++)for(var Je=0;Je<3;Je++)if(he.getVertex(he.indices[oe[Xe]*3+Je],Ue),Ue.vsub(ae,Ae),Ae.norm2()<=it){Se.copy(Ue),h.pointToWorldFrame(Me,Le,Se,Ue),Ue.vsub(_e,Ae);var Ne=this.createContactEquation(we,T,re,he);Ne.ni.copy(Ae),Ne.ni.normalize(),Ne.ri.copy(Ne.ni),Ne.ri.scale(re.radius,Ne.ri),Ne.ri.vadd(_e,Ne.ri),Ne.ri.vsub(we.position,Ne.ri),Ne.rj.copy(Ue),Ne.rj.vsub(T.position,Ne.rj),this.result.push(Ne),this.createFrictionEquationsFromContact(Ne,this.frictionResult)}for(var Xe=0;Xe<oe.length;Xe++)for(var Je=0;Je<3;Je++){he.getVertex(he.indices[oe[Xe]*3+Je],L),he.getVertex(he.indices[oe[Xe]*3+(Je+1)%3],q),q.vsub(L,z),ae.vsub(q,se);var je=se.dot(z);ae.vsub(L,se);var Nt=se.dot(z);if(Nt>0&&je<0){ae.vsub(L,se),$.copy(z),$.normalize(),Nt=se.dot($),$.scale(Nt,se),se.vadd(L,se);var ht=se.distanceTo(ae);if(ht<re.radius){var Ne=this.createContactEquation(we,T,re,he);se.vsub(ae,Ne.ni),Ne.ni.normalize(),Ne.ni.scale(re.radius,Ne.ri),h.pointToWorldFrame(Me,Le,se,se),se.vsub(T.position,Ne.rj),h.vectorToWorldFrame(Le,Ne.ni,Ne.ni),h.vectorToWorldFrame(Le,Ne.ri,Ne.ri),this.result.push(Ne),this.createFrictionEquationsFromContact(Ne,this.frictionResult)}}}for(var Ct=J,Lt=j,ut=V,qt=M,Xe=0,et=oe.length;Xe!==et;Xe++){he.getTriangleVertices(oe[Xe],Ct,Lt,ut),he.getNormal(oe[Xe],qt),ae.vsub(Ct,se);var ht=se.dot(qt);if(qt.scale(ht,se),ae.vsub(se,se),ht=se.distanceTo(ae),o.pointInTriangle(se,Ct,Lt,ut)&&ht<re.radius){var Ne=this.createContactEquation(we,T,re,he);se.vsub(ae,Ne.ni),Ne.ni.normalize(),Ne.ni.scale(re.radius,Ne.ri),h.pointToWorldFrame(Me,Le,se,se),se.vsub(T.position,Ne.rj),h.vectorToWorldFrame(Le,Ne.ni,Ne.ni),h.vectorToWorldFrame(Le,Ne.ri,Ne.ri),this.result.push(Ne),this.createFrictionEquationsFromContact(Ne,this.frictionResult)}}oe.length=0};var A=new l,R=new l;m.prototype[s.types.SPHERE|s.types.PLANE]=m.prototype.spherePlane=function(re,he,_e,Me,We,Le,we,T){var L=this.createContactEquation(we,T,re,he);if(L.ni.set(0,0,1),Le.vmult(L.ni,L.ni),L.ni.negate(L.ni),L.ni.normalize(),L.ni.mult(re.radius,L.ri),_e.vsub(Me,A),L.ni.mult(L.ni.dot(A),R),A.vsub(R,L.rj),-A.dot(L.ni)<=re.radius){var q=L.ri,z=L.rj;q.vadd(_e,q),q.vsub(we.position,q),z.vadd(Me,z),z.vsub(T.position,z),this.result.push(L),this.createFrictionEquationsFromContact(L,this.frictionResult)}};var G=new l,P=new l,ee=new l;function K(re,he,_e){for(var Me=null,We=re.length,Le=0;Le!==We;Le++){var we=re[Le],T=G;re[(Le+1)%We].vsub(we,T);var L=P;T.cross(he,L);var q=ee;_e.vsub(we,q);var z=L.dot(q);if(Me===null||z>0&&Me===!0||z<=0&&Me===!1){Me===null&&(Me=z>0);continue}else return!1}return!0}var Z=new l,ie=new l,Te=new l,pe=new l,ge=[new l,new l,new l,new l,new l,new l],ce=new l,ve=new l,ke=new l,De=new l;m.prototype[s.types.SPHERE|s.types.BOX]=m.prototype.sphereBox=function(re,he,_e,Me,We,Le,we,T){var L=this.v3pool,q=ge;_e.vsub(Me,Z),he.getSideNormals(q,Le);for(var z=re.radius,$=!1,ae=ve,se=ke,fe=De,Se=null,Ae=0,oe=0,Re=0,Ue=null,it=0,Xe=q.length;it!==Xe&&$===!1;it++){var Je=ie;Je.copy(q[it]);var Ne=Je.norm();Je.normalize();var je=Z.dot(Je);if(je<Ne+z&&je>0){var Nt=Te,ht=pe;Nt.copy(q[(it+1)%3]),ht.copy(q[(it+2)%3]);var Ct=Nt.norm(),Lt=ht.norm();Nt.normalize(),ht.normalize();var ut=Z.dot(Nt),qt=Z.dot(ht);if(ut<Ct&&ut>-Ct&&qt<Lt&&qt>-Lt){var wt=Math.abs(je-Ne-z);(Ue===null||wt<Ue)&&(Ue=wt,oe=ut,Re=qt,Se=Ne,ae.copy(Je),se.copy(Nt),fe.copy(ht),Ae++)}}}if(Ae){$=!0;var Ye=this.createContactEquation(we,T,re,he);ae.mult(-z,Ye.ri),Ye.ni.copy(ae),Ye.ni.negate(Ye.ni),ae.mult(Se,ae),se.mult(oe,se),ae.vadd(se,ae),fe.mult(Re,fe),ae.vadd(fe,Ye.rj),Ye.ri.vadd(_e,Ye.ri),Ye.ri.vsub(we.position,Ye.ri),Ye.rj.vadd(Me,Ye.rj),Ye.rj.vsub(T.position,Ye.rj),this.result.push(Ye),this.createFrictionEquationsFromContact(Ye,this.frictionResult)}for(var et=L.get(),Pt=ce,Tt=0;Tt!==2&&!$;Tt++)for(var ft=0;ft!==2&&!$;ft++)for(var yt=0;yt!==2&&!$;yt++)if(et.set(0,0,0),Tt?et.vadd(q[0],et):et.vsub(q[0],et),ft?et.vadd(q[1],et):et.vsub(q[1],et),yt?et.vadd(q[2],et):et.vsub(q[2],et),Me.vadd(et,Pt),Pt.vsub(_e,Pt),Pt.norm2()<z*z){$=!0;var Ye=this.createContactEquation(we,T,re,he);Ye.ri.copy(Pt),Ye.ri.normalize(),Ye.ni.copy(Ye.ri),Ye.ri.mult(z,Ye.ri),Ye.rj.copy(et),Ye.ri.vadd(_e,Ye.ri),Ye.ri.vsub(we.position,Ye.ri),Ye.rj.vadd(Me,Ye.rj),Ye.rj.vsub(T.position,Ye.rj),this.result.push(Ye),this.createFrictionEquationsFromContact(Ye,this.frictionResult)}L.release(et),et=null;for(var Gt=L.get(),$t=L.get(),Ye=L.get(),jt=L.get(),wt=L.get(),Wn=q.length,Tt=0;Tt!==Wn&&!$;Tt++)for(var ft=0;ft!==Wn&&!$;ft++)if(Tt%3!==ft%3){q[ft].cross(q[Tt],Gt),Gt.normalize(),q[Tt].vadd(q[ft],$t),Ye.copy(_e),Ye.vsub($t,Ye),Ye.vsub(Me,Ye);var Xn=Ye.dot(Gt);Gt.mult(Xn,jt);for(var yt=0;yt===Tt%3||yt===ft%3;)yt++;wt.copy(_e),wt.vsub(jt,wt),wt.vsub($t,wt),wt.vsub(Me,wt);var Hl=Math.abs(Xn),Gl=wt.norm();if(Hl<q[yt].norm()&&Gl<z){$=!0;var gt=this.createContactEquation(we,T,re,he);$t.vadd(jt,gt.rj),gt.rj.copy(gt.rj),wt.negate(gt.ni),gt.ni.normalize(),gt.ri.copy(gt.rj),gt.ri.vadd(Me,gt.ri),gt.ri.vsub(_e,gt.ri),gt.ri.normalize(),gt.ri.mult(z,gt.ri),gt.ri.vadd(_e,gt.ri),gt.ri.vsub(we.position,gt.ri),gt.rj.vadd(Me,gt.rj),gt.rj.vsub(T.position,gt.rj),this.result.push(gt),this.createFrictionEquationsFromContact(gt,this.frictionResult)}}L.release(Gt,$t,Ye,jt,wt)};var Ge=new l,Ee=new l,qe=new l,N=new l,w=new l,ne=new l,ue=new l,me=new l,ye=new l,Fe=new l;m.prototype[s.types.SPHERE|s.types.CONVEXPOLYHEDRON]=m.prototype.sphereConvex=function(re,he,_e,Me,We,Le,we,T){var L=this.v3pool;_e.vsub(Me,Ge);for(var q=he.faceNormals,z=he.faces,$=he.vertices,ae=re.radius,se=0;se!==$.length;se++){var fe=$[se],Se=w;Le.vmult(fe,Se),Me.vadd(Se,Se);var Ae=N;if(Se.vsub(_e,Ae),Ae.norm2()<ae*ae){Re=!0;var oe=this.createContactEquation(we,T,re,he);oe.ri.copy(Ae),oe.ri.normalize(),oe.ni.copy(oe.ri),oe.ri.mult(ae,oe.ri),Se.vsub(Me,oe.rj),oe.ri.vadd(_e,oe.ri),oe.ri.vsub(we.position,oe.ri),oe.rj.vadd(Me,oe.rj),oe.rj.vsub(T.position,oe.rj),this.result.push(oe),this.createFrictionEquationsFromContact(oe,this.frictionResult);return}}for(var Re=!1,se=0,Ue=z.length;se!==Ue&&Re===!1;se++){var it=q[se],Xe=z[se],Je=ne;Le.vmult(it,Je);var Ne=ue;Le.vmult($[Xe[0]],Ne),Ne.vadd(Me,Ne);var je=me;Je.mult(-ae,je),_e.vadd(je,je);var Nt=ye;je.vsub(Ne,Nt);var ht=Nt.dot(Je),Ct=Fe;if(_e.vsub(Ne,Ct),ht<0&&Ct.dot(Je)>0){for(var Lt=[],ut=0,qt=Xe.length;ut!==qt;ut++){var et=L.get();Le.vmult($[Xe[ut]],et),Me.vadd(et,et),Lt.push(et)}if(K(Lt,Je,_e)){Re=!0;var oe=this.createContactEquation(we,T,re,he);Je.mult(-ae,oe.ri),Je.negate(oe.ni);var Pt=L.get();Je.mult(-ht,Pt);var Tt=L.get();Je.mult(-ae,Tt),_e.vsub(Me,oe.rj),oe.rj.vadd(Tt,oe.rj),oe.rj.vadd(Pt,oe.rj),oe.rj.vadd(Me,oe.rj),oe.rj.vsub(T.position,oe.rj),oe.ri.vadd(_e,oe.ri),oe.ri.vsub(we.position,oe.ri),L.release(Pt),L.release(Tt),this.result.push(oe),this.createFrictionEquationsFromContact(oe,this.frictionResult);for(var ut=0,ft=Lt.length;ut!==ft;ut++)L.release(Lt[ut]);return}else for(var ut=0;ut!==Xe.length;ut++){var yt=L.get(),Gt=L.get();Le.vmult($[Xe[(ut+1)%Xe.length]],yt),Le.vmult($[Xe[(ut+2)%Xe.length]],Gt),Me.vadd(yt,yt),Me.vadd(Gt,Gt);var $t=Ee;Gt.vsub(yt,$t);var Ye=qe;$t.unit(Ye);var jt=L.get(),wt=L.get();_e.vsub(yt,wt);var Wn=wt.dot(Ye);Ye.mult(Wn,jt),jt.vadd(yt,jt);var Xn=L.get();if(jt.vsub(_e,Xn),Wn>0&&Wn*Wn<$t.norm2()&&Xn.norm2()<ae*ae){var oe=this.createContactEquation(we,T,re,he);jt.vsub(Me,oe.rj),jt.vsub(_e,oe.ni),oe.ni.normalize(),oe.ni.mult(ae,oe.ri),oe.rj.vadd(Me,oe.rj),oe.rj.vsub(T.position,oe.rj),oe.ri.vadd(_e,oe.ri),oe.ri.vsub(we.position,oe.ri),this.result.push(oe),this.createFrictionEquationsFromContact(oe,this.frictionResult);for(var ut=0,ft=Lt.length;ut!==ft;ut++)L.release(Lt[ut]);L.release(yt),L.release(Gt),L.release(jt),L.release(Xn),L.release(wt);return}L.release(yt),L.release(Gt),L.release(jt),L.release(Xn),L.release(wt)}for(var ut=0,ft=Lt.length;ut!==ft;ut++)L.release(Lt[ut])}}},new l,new l,m.prototype[s.types.PLANE|s.types.BOX]=m.prototype.planeBox=function(re,he,_e,Me,We,Le,we,T){he.convexPolyhedronRepresentation.material=he.material,he.convexPolyhedronRepresentation.collisionResponse=he.collisionResponse,this.planeConvex(re,he.convexPolyhedronRepresentation,_e,Me,We,Le,we,T)};var Ce=new l,de=new l,Be=new l,Ve=new l;m.prototype[s.types.PLANE|s.types.CONVEXPOLYHEDRON]=m.prototype.planeConvex=function(re,he,_e,Me,We,Le,we,T){var L=Ce,q=de;q.set(0,0,1),We.vmult(q,q);for(var z=0,$=Be,ae=0;ae!==he.vertices.length;ae++){L.copy(he.vertices[ae]),Le.vmult(L,L),Me.vadd(L,L),L.vsub(_e,$);var se=q.dot($);if(se<=0){var fe=this.createContactEquation(we,T,re,he),Se=Ve;q.mult(q.dot($),Se),L.vsub(Se,Se),Se.vsub(_e,fe.ri),fe.ni.copy(q),L.vsub(Me,fe.rj),fe.ri.vadd(_e,fe.ri),fe.ri.vsub(we.position,fe.ri),fe.rj.vadd(Me,fe.rj),fe.rj.vsub(T.position,fe.rj),this.result.push(fe),z++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(fe,this.frictionResult)}}this.enableFrictionReduction&&z&&this.createFrictionFromAverage(z)};var He=new l,Ie=new l;m.prototype[s.types.CONVEXPOLYHEDRON]=m.prototype.convexConvex=function(re,he,_e,Me,We,Le,we,T,L,q,z,$){var ae=He;if(!(_e.distanceTo(Me)>re.boundingSphereRadius+he.boundingSphereRadius)&&re.findSeparatingAxis(he,_e,We,Me,Le,ae,z,$)){var se=[],fe=Ie;re.clipAgainstHull(_e,We,he,Me,Le,ae,-100,100,se);for(var Se=0,Ae=0;Ae!==se.length;Ae++){var oe=this.createContactEquation(we,T,re,he,L,q),Re=oe.ri,Ue=oe.rj;ae.negate(oe.ni),se[Ae].normal.negate(fe),fe.mult(se[Ae].depth,fe),se[Ae].point.vadd(fe,Re),Ue.copy(se[Ae].point),Re.vsub(_e,Re),Ue.vsub(Me,Ue),Re.vadd(_e,Re),Re.vsub(we.position,Re),Ue.vadd(Me,Ue),Ue.vsub(T.position,Ue),this.result.push(oe),Se++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(oe,this.frictionResult)}this.enableFrictionReduction&&Se&&this.createFrictionFromAverage(Se)}};var ze=new l,Ze=new l,tt=new l;m.prototype[s.types.PLANE|s.types.PARTICLE]=m.prototype.planeParticle=function(re,he,_e,Me,We,Le,we,T){var L=ze;L.set(0,0,1),we.quaternion.vmult(L,L);var q=Ze;Me.vsub(we.position,q);var z=L.dot(q);if(z<=0){var $=this.createContactEquation(T,we,he,re);$.ni.copy(L),$.ni.negate($.ni),$.ri.set(0,0,0);var ae=tt;L.mult(L.dot(Me),ae),Me.vsub(ae,ae),$.rj.copy(ae),this.result.push($),this.createFrictionEquationsFromContact($,this.frictionResult)}};var ct=new l;m.prototype[s.types.PARTICLE|s.types.SPHERE]=m.prototype.sphereParticle=function(re,he,_e,Me,We,Le,we,T){var L=ct;L.set(0,0,1),Me.vsub(_e,L);var q=L.norm2();if(q<=re.radius*re.radius){var z=this.createContactEquation(T,we,he,re);L.normalize(),z.rj.copy(L),z.rj.mult(re.radius,z.rj),z.ni.copy(L),z.ni.negate(z.ni),z.ri.set(0,0,0),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult)}};var Y=new u,le=new l;new l;var xe=new l,be=new l,Oe=new l;m.prototype[s.types.PARTICLE|s.types.CONVEXPOLYHEDRON]=m.prototype.convexParticle=function(re,he,_e,Me,We,Le,we,T){var L=-1,q=xe,z=Oe,$=null,ae=le;if(ae.copy(Me),ae.vsub(_e,ae),We.conjugate(Y),Y.vmult(ae,ae),re.pointIsInside(ae)){re.worldVerticesNeedsUpdate&&re.computeWorldVertices(_e,We),re.worldFaceNormalsNeedsUpdate&&re.computeWorldFaceNormals(We);for(var se=0,fe=re.faces.length;se!==fe;se++){var Se=[re.worldVertices[re.faces[se][0]]],Ae=re.worldFaceNormals[se];Me.vsub(Se[0],be);var oe=-Ae.dot(be);($===null||Math.abs(oe)<Math.abs($))&&($=oe,L=se,q.copy(Ae))}if(L!==-1){var Re=this.createContactEquation(T,we,he,re);q.mult($,z),z.vadd(Me,z),z.vsub(_e,z),Re.rj.copy(z),q.negate(Re.ni),Re.ri.set(0,0,0);var Ue=Re.ri,it=Re.rj;Ue.vadd(Me,Ue),Ue.vsub(T.position,Ue),it.vadd(_e,it),it.vsub(we.position,it),this.result.push(Re),this.createFrictionEquationsFromContact(Re,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}},m.prototype[s.types.BOX|s.types.HEIGHTFIELD]=m.prototype.boxHeightfield=function(re,he,_e,Me,We,Le,we,T){re.convexPolyhedronRepresentation.material=re.material,re.convexPolyhedronRepresentation.collisionResponse=re.collisionResponse,this.convexHeightfield(re.convexPolyhedronRepresentation,he,_e,Me,We,Le,we,T)};var st=new l,at=new l,_t=[0];m.prototype[s.types.CONVEXPOLYHEDRON|s.types.HEIGHTFIELD]=m.prototype.convexHeightfield=function(re,he,_e,Me,We,Le,we,T){var L=he.data,q=he.elementSize,z=re.boundingSphereRadius,$=at,ae=_t,se=st;h.pointToLocalFrame(Me,Le,_e,se);var fe=Math.floor((se.x-z)/q)-1,Se=Math.ceil((se.x+z)/q)+1,Ae=Math.floor((se.y-z)/q)-1,oe=Math.ceil((se.y+z)/q)+1;if(!(Se<0||oe<0||fe>L.length||Ae>L[0].length)){fe<0&&(fe=0),Se<0&&(Se=0),Ae<0&&(Ae=0),oe<0&&(oe=0),fe>=L.length&&(fe=L.length-1),Se>=L.length&&(Se=L.length-1),oe>=L[0].length&&(oe=L[0].length-1),Ae>=L[0].length&&(Ae=L[0].length-1);var Re=[];he.getRectMinMax(fe,Ae,Se,oe,Re);var Ue=Re[0],it=Re[1];if(!(se.z-z>it||se.z+z<Ue))for(var Xe=fe;Xe<Se;Xe++)for(var Je=Ae;Je<oe;Je++)he.getConvexTrianglePillar(Xe,Je,!1),h.pointToWorldFrame(Me,Le,he.pillarOffset,$),_e.distanceTo($)<he.pillarConvex.boundingSphereRadius+re.boundingSphereRadius&&this.convexConvex(re,he.pillarConvex,_e,$,We,Le,we,T,null,null,ae,null),he.getConvexTrianglePillar(Xe,Je,!0),h.pointToWorldFrame(Me,Le,he.pillarOffset,$),_e.distanceTo($)<he.pillarConvex.boundingSphereRadius+re.boundingSphereRadius&&this.convexConvex(re,he.pillarConvex,_e,$,We,Le,we,T,null,null,ae,null)}};var Bt=new l,Qe=new l;m.prototype[s.types.SPHERE|s.types.HEIGHTFIELD]=m.prototype.sphereHeightfield=function(re,he,_e,Me,We,Le,we,T){var L=he.data,q=re.radius,z=he.elementSize,$=Qe,ae=Bt;h.pointToLocalFrame(Me,Le,_e,ae);var se=Math.floor((ae.x-q)/z)-1,fe=Math.ceil((ae.x+q)/z)+1,Se=Math.floor((ae.y-q)/z)-1,Ae=Math.ceil((ae.y+q)/z)+1;if(!(fe<0||Ae<0||se>L.length||Ae>L[0].length)){se<0&&(se=0),fe<0&&(fe=0),Se<0&&(Se=0),Ae<0&&(Ae=0),se>=L.length&&(se=L.length-1),fe>=L.length&&(fe=L.length-1),Ae>=L[0].length&&(Ae=L[0].length-1),Se>=L[0].length&&(Se=L[0].length-1);var oe=[];he.getRectMinMax(se,Se,fe,Ae,oe);var Re=oe[0],Ue=oe[1];if(!(ae.z-q>Ue||ae.z+q<Re))for(var it=this.result,Xe=se;Xe<fe;Xe++)for(var Je=Se;Je<Ae;Je++){var Ne=it.length;he.getConvexTrianglePillar(Xe,Je,!1),h.pointToWorldFrame(Me,Le,he.pillarOffset,$),_e.distanceTo($)<he.pillarConvex.boundingSphereRadius+re.boundingSphereRadius&&this.sphereConvex(re,he.pillarConvex,_e,$,We,Le,we,T),he.getConvexTrianglePillar(Xe,Je,!0),h.pointToWorldFrame(Me,Le,he.pillarOffset,$),_e.distanceTo($)<he.pillarConvex.boundingSphereRadius+re.boundingSphereRadius&&this.sphereConvex(re,he.pillarConvex,_e,$,We,Le,we,T);var je=it.length-Ne;if(je>2)return}}}},{"../collision/AABB":3,"../collision/Ray":9,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43,"../solver/Solver":47,"../utils/Vec3Pool":54}],56:[function(t,n,r){n.exports=x;var i=t("../shapes/Shape"),s=t("../math/Vec3"),o=t("../math/Quaternion"),l=t("../solver/GSSolver");t("../utils/Vec3Pool"),t("../equations/ContactEquation"),t("../equations/FrictionEquation");var h=t("./Narrowphase"),u=t("../utils/EventTarget"),c=t("../collision/ArrayCollisionMatrix"),d=t("../material/Material"),f=t("../material/ContactMaterial"),m=t("../objects/Body"),g=t("../utils/TupleDictionary"),v=t("../collision/RaycastResult"),p=t("../collision/AABB"),_=t("../collision/Ray"),y=t("../collision/NaiveBroadphase");function x(){u.apply(this),this.dt=-1,this.allowSleep=!1,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=0,this.quatNormalizeFast=!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new s,this.broadphase=new y,this.bodies=[],this.solver=new l,this.constraints=[],this.narrowphase=new h(this),this.collisionMatrix=new c,this.collisionMatrixPrevious=new c,this.materials=[],this.contactmaterials=[],this.contactMaterialTable=new g,this.defaultMaterial=new d("default"),this.defaultContactMaterial=new f(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null}}x.prototype=new u,new p;var S=new _;if(x.prototype.getContactMaterial=function(U,J){return this.contactMaterialTable.get(U.id,J.id)},x.prototype.numObjects=function(){return this.bodies.length},x.prototype.collisionMatrixTick=function(){var U=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=U,this.collisionMatrix.reset()},x.prototype.add=x.prototype.addBody=function(U){this.bodies.indexOf(U)===-1&&(U.index=this.bodies.length,this.bodies.push(U),U.world=this,U.initPosition.copy(U.position),U.initVelocity.copy(U.velocity),U.timeLastSleepy=this.time,U instanceof m&&(U.initAngularVelocity.copy(U.angularVelocity),U.initQuaternion.copy(U.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=U,this.dispatchEvent(this.addBodyEvent))},x.prototype.addConstraint=function(U){this.constraints.push(U)},x.prototype.removeConstraint=function(U){var J=this.constraints.indexOf(U);J!==-1&&this.constraints.splice(J,1)},x.prototype.rayTest=function(U,J,j){j instanceof v?this.raycastClosest(U,J,{skipBackfaces:!0},j):this.raycastAll(U,J,{skipBackfaces:!0},j)},x.prototype.raycastAll=function(U,J,j,V){return j.mode=_.ALL,j.from=U,j.to=J,j.callback=V,S.intersectWorld(this,j)},x.prototype.raycastAny=function(U,J,j,V){return j.mode=_.ANY,j.from=U,j.to=J,j.result=V,S.intersectWorld(this,j)},x.prototype.raycastClosest=function(U,J,j,V){return j.mode=_.CLOSEST,j.from=U,j.to=J,j.result=V,S.intersectWorld(this,j)},x.prototype.remove=function(U){U.world=null;var J=this.bodies.length-1,j=this.bodies,V=j.indexOf(U);if(V!==-1){j.splice(V,1);for(var k=0;k!==j.length;k++)j[k].index=k;this.collisionMatrix.setNumObjects(J),this.removeBodyEvent.body=U,this.dispatchEvent(this.removeBodyEvent)}},x.prototype.removeBody=x.prototype.remove,x.prototype.addMaterial=function(U){this.materials.push(U)},x.prototype.addContactMaterial=function(U){this.contactmaterials.push(U),this.contactMaterialTable.set(U.materials[0].id,U.materials[1].id,U)},typeof performance>"u"&&(performance={}),!performance.now){var C=Date.now();performance.timing&&performance.timing.navigationStart&&(C=performance.timing.navigationStart),performance.now=function(){return Date.now()-C}}var B=new s;x.prototype.step=function(U,J,j){if(j=j||10,J=J||0,J===0)this.internalStep(U),this.time+=U;else{var V=Math.floor((this.time+J)/U)-Math.floor(this.time/U);V=Math.min(V,j);for(var k=performance.now(),b=0;b!==V&&(this.internalStep(U),!(performance.now()-k>U*1e3));b++);this.time+=J;for(var A=this.time%U,R=A/U,G=B,P=this.bodies,ee=0;ee!==P.length;ee++){var K=P[ee];K.type!==m.STATIC&&K.sleepState!==m.SLEEPING?(K.position.vsub(K.previousPosition,G),G.scale(R,G),K.position.vadd(G,K.interpolatedPosition)):(K.interpolatedPosition.copy(K.position),K.interpolatedQuaternion.copy(K.quaternion))}}};var F={type:"postStep"},M={type:"preStep"},E={type:"collide",body:null,contact:null},D=[],H=[],I=[],X=[];new s,new s,new s,new s,new s,new s,new s,new s,new s,new o;var W=new o,te=new o,O=new s;x.prototype.internalStep=function(U){this.dt=U;var J=this.contacts,j=I,V=X,k=this.numObjects(),b=this.bodies,A=this.solver,R=this.gravity,G=this.doProfiling,P=this.profile,ee=m.DYNAMIC,K,Z=this.constraints,ie=H;R.norm();var Te=R.x,pe=R.y,ge=R.z,ce=0;for(G&&(K=performance.now()),ce=0;ce!==k;ce++){var ve=b[ce];if(ve.type&ee){var ke=ve.force,De=ve.mass;ke.x+=De*Te,ke.y+=De*pe,ke.z+=De*ge}}for(var ce=0,Ge=this.subsystems.length;ce!==Ge;ce++)this.subsystems[ce].update();G&&(K=performance.now()),j.length=0,V.length=0,this.broadphase.collisionPairs(this,j,V),G&&(P.broadphase=performance.now()-K);var He=Z.length;for(ce=0;ce!==He;ce++){var Ee=Z[ce];if(!Ee.collideConnected)for(var qe=j.length-1;qe>=0;qe-=1)(Ee.bodyA===j[qe]&&Ee.bodyB===V[qe]||Ee.bodyB===j[qe]&&Ee.bodyA===V[qe])&&(j.splice(qe,1),V.splice(qe,1))}this.collisionMatrixTick(),G&&(K=performance.now());var N=D,w=J.length;for(ce=0;ce!==w;ce++)N.push(J[ce]);J.length=0;var ne=this.frictionEquations.length;for(ce=0;ce!==ne;ce++)ie.push(this.frictionEquations[ce]);this.frictionEquations.length=0,this.narrowphase.getContacts(j,V,this,J,N,this.frictionEquations,ie),G&&(P.narrowphase=performance.now()-K),G&&(K=performance.now());for(var ce=0;ce<this.frictionEquations.length;ce++)A.addEquation(this.frictionEquations[ce]);for(var ue=J.length,me=0;me!==ue;me++){var Ee=J[me],ve=Ee.bi,ye=Ee.bj;Ee.si,Ee.sj;var Fe;if(ve.material&&ye.material?Fe=this.getContactMaterial(ve.material,ye.material)||this.defaultContactMaterial:Fe=this.defaultContactMaterial,Fe.friction,ve.material&&ye.material&&(ve.material.friction>=0&&ye.material.friction>=0&&ve.material.friction*ye.material.friction,ve.material.restitution>=0&&ye.material.restitution>=0&&(Ee.restitution=ve.material.restitution*ye.material.restitution)),A.addEquation(Ee),ve.allowSleep&&ve.type===m.DYNAMIC&&ve.sleepState===m.SLEEPING&&ye.sleepState===m.AWAKE&&ye.type!==m.STATIC){var Ce=ye.velocity.norm2()+ye.angularVelocity.norm2(),de=Math.pow(ye.sleepSpeedLimit,2);Ce>=de*2&&(ve._wakeUpAfterNarrowphase=!0)}if(ye.allowSleep&&ye.type===m.DYNAMIC&&ye.sleepState===m.SLEEPING&&ve.sleepState===m.AWAKE&&ve.type!==m.STATIC){var Be=ve.velocity.norm2()+ve.angularVelocity.norm2(),Ve=Math.pow(ve.sleepSpeedLimit,2);Be>=Ve*2&&(ye._wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(ve,ye,!0),this.collisionMatrixPrevious.get(ve,ye)||(E.body=ye,E.contact=Ee,ve.dispatchEvent(E),E.body=ve,ye.dispatchEvent(E))}for(G&&(P.makeContactConstraints=performance.now()-K,K=performance.now()),ce=0;ce!==k;ce++){var ve=b[ce];ve._wakeUpAfterNarrowphase&&(ve.wakeUp(),ve._wakeUpAfterNarrowphase=!1)}var He=Z.length;for(ce=0;ce!==He;ce++){var Ee=Z[ce];Ee.update();for(var qe=0,Ie=Ee.equations.length;qe!==Ie;qe++){var ze=Ee.equations[qe];A.addEquation(ze)}}A.solve(U,this),G&&(P.solve=performance.now()-K),A.removeAllEquations();var Ze=Math.pow;for(ce=0;ce!==k;ce++){var ve=b[ce];if(ve.type&ee){var tt=Ze(1-ve.linearDamping,U),ct=ve.velocity;ct.mult(tt,ct);var Y=ve.angularVelocity;if(Y){var le=Ze(1-ve.angularDamping,U);Y.mult(le,Y)}}}for(this.dispatchEvent(M),ce=0;ce!==k;ce++){var ve=b[ce];ve.preStep&&ve.preStep.call(ve)}G&&(K=performance.now());var xe=W,be=te,Oe=this.stepnumber,st=m.DYNAMIC|m.KINEMATIC,at=Oe%(this.quatNormalizeSkip+1)===0,_t=this.quatNormalizeFast,Bt=U*.5;for(i.types.PLANE,i.types.CONVEXPOLYHEDRON,ce=0;ce!==k;ce++){var Qe=b[ce],re=Qe.force,he=Qe.torque;if(Qe.type&st&&Qe.sleepState!==m.SLEEPING){var _e=Qe.velocity,Me=Qe.angularVelocity,We=Qe.position,Le=Qe.quaternion,we=Qe.invMass,T=Qe.invInertiaWorld;_e.x+=re.x*we*U,_e.y+=re.y*we*U,_e.z+=re.z*we*U,Qe.angularVelocity&&(T.vmult(he,O),O.mult(U,O),O.vadd(Me,Me)),We.x+=_e.x*U,We.y+=_e.y*U,We.z+=_e.z*U,Qe.angularVelocity&&(xe.set(Me.x,Me.y,Me.z,0),xe.mult(Le,be),Le.x+=Bt*be.x,Le.y+=Bt*be.y,Le.z+=Bt*be.z,Le.w+=Bt*be.w,at&&(_t?Le.normalizeFast():Le.normalize())),Qe.aabb&&(Qe.aabbNeedsUpdate=!0),Qe.updateInertiaWorld&&Qe.updateInertiaWorld()}}for(this.clearForces(),this.broadphase.dirty=!0,G&&(P.integrate=performance.now()-K),this.time+=U,this.stepnumber+=1,this.dispatchEvent(F),ce=0;ce!==k;ce++){var ve=b[ce],L=ve.postStep;L&&L.call(ve)}if(this.allowSleep)for(ce=0;ce!==k;ce++)b[ce].sleepTick(this.time)},x.prototype.clearForces=function(){for(var U=this.bodies,J=U.length,j=0;j!==J;j++){var V=U[j];V.force,V.torque,V.force.set(0,0,0),V.torque.set(0,0,0)}}},{"../collision/AABB":3,"../collision/ArrayCollisionMatrix":4,"../collision/NaiveBroadphase":7,"../collision/Ray":9,"../collision/RaycastResult":10,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../material/ContactMaterial":24,"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Shape":43,"../solver/GSSolver":46,"../utils/EventTarget":49,"../utils/TupleDictionary":52,"../utils/Vec3Pool":54,"./Narrowphase":55}]},{},[2])(2)})})(Bl);var ri=Bl.exports;function Sv(a,e,t,n){const r=Math.min(a,e)*.1,i=new Gn(.25,n*.4,.05),s=new Cl({color:7909631}),o=new Gn(.05,n*.4,.25),l=Ev(a,e,r),h=Tv(a,e,r);l.forEach(u=>{const c=new Vt(i,s);c.position.set(u.x,u.y,u.z),t.add(c)}),h.forEach(u=>{const c=new Vt(o,s);c.position.set(u.x,u.y,u.z),t.add(c)})}function Ev(a,e,t){return a>2?[{x:a*.2,y:0,z:e/2+t/2},{x:a*.4,y:0,z:e/2+t/2},{x:-a*.2,y:0,z:e/2+t/2},{x:-a*.4,y:0,z:e/2+t/2}]:a>1?[{x:a*.2,y:0,z:e/2+t/2},{x:-a*.2,y:0,z:e/2+t/2}]:[{x:0,y:0,z:e/2+t/2}]}function Tv(a,e,t){return e>2?[{x:a/2+t/2,y:0,z:e*.2},{x:a/2+t/2,y:0,z:e*.4},{x:a/2+t/2,y:0,z:-e*.2},{x:a/2+t/2,y:0,z:-e*.4}]:e>1?[{x:a/2+t/2,y:0,z:e*.2},{x:a/2+t/2,y:0,z:-e*.2}]:[{x:a/2+t/2,y:0,z:0}]}window.focus();let nn,Zt,si,cn,lr,Rt,Qr;const ai=1,mn=3;let gr;const qs=document.getElementById("score"),wv=document.getElementById("instructions"),jr=document.getElementById("results"),bv=document.getElementById("restartBtn"),Av=document.getElementById("startBtn");document.getElementById("pauseBtn");Rv();function Rv(){gr=!1,lr=0,Rt=[],Qr=[],cn=new ri.World,cn.gravity.set(0,-10,0),cn.broadphase=new ri.NaiveBroadphase,cn.solver.iterations=40;const a=window.innerWidth/window.innerHeight,e=10,t=e/a;nn=new Zr(e/-1.75,e/1.75,t/1.75,t/-1.75,0,100),nn.position.set(3,3,3),nn.lookAt(0,1,0),Zt=new nm,Mv(Zt),Zt.background=new $e(197897);const n=new Pm(16777215,.6);Zt.add(n);const r=new Dl(16777215,.6);r.position.set(10,20,0),Zt.add(r),si=new wl({antialias:!0}),si.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(si.domElement)}function Cv(){pr(0,0,mn,mn),pr(-10,0,mn,mn,"x"),si.setAnimationLoop(Iv),wv.style.display="none"}function Lv(){if(gr=!1,lr=0,Rt=[],Qr=[],jr&&(jr.style.display="none"),qs.innerText=0,cn)for(;cn.bodies.length>0;)cn.remove(cn.bodies[0]);if(Zt){for(;Zt.children.find(a=>a.type=="Mesh");){const a=Zt.children.find(e=>e.type=="Mesh");Zt.remove(a)}pr(0,0,mn,mn),pr(-10,0,mn,mn,"x")}nn&&(nn.position.set(3,3,3),nn.lookAt(0,1,0))}function pr(a,e,t,n,r){const i=ai*Rt.length,s=Vl(a,i,e,t,n,!1);s.direction=r,Rt.push(s)}function Ol(a,e,t,n){const r=ai*(Rt.length-1),i=Vl(a,r,e,t,n,!0);Qr.push(i)}function Pv(a,e,t,n){const r=a.direction,i=r=="x"?e:a.width,s=r=="z"?e:a.depth;a.width=i,a.depth=s,a.threejs.scale[r]=e/t,a.threejs.position[r]-=n/2,a.cannonjs.position[r]-=n/2;const o=new ri.Box(new ri.Vec3(i/2,ai/2,s/2));a.cannonjs.shapes=[],a.cannonjs.addShape(o)}window.addEventListener("mousedown",la);window.addEventListener("touchstart",la);bv.addEventListener("click",Lv);Av.addEventListener("click",Cv);window.addEventListener("keydown",function(a){a.key==" "&&la()});function la(){if(gr)return;const a=Rt[Rt.length-1],e=Rt[Rt.length-2],t=a.direction,n=t=="x"?a.width:a.depth,r=a.threejs.position[t]-e.threejs.position[t],i=Math.abs(r),s=n-i;if(s>0){Pv(a,s,n,r);const o=(s/2+i/2)*Math.sign(r),l=t=="x"?a.threejs.position.x+o:a.threejs.position.x,h=t=="z"?a.threejs.position.z+o:a.threejs.position.z,u=t=="x"?i:a.width,c=t=="z"?i:a.depth;Ol(l,h,u,c);const d=t=="x"?a.threejs.position.x:-10,f=t=="z"?a.threejs.position.z:-10,m=a.width,g=a.depth,v=t=="x"?"z":"x";qs&&(qs.innerText=Rt.length-1),pr(d,f,m,g,v)}else zl()}function zl(){const a=Rt[Rt.length-1];Ol(a.threejs.position.x,a.threejs.position.z,a.width,a.depth),cn.remove(a.cannonjs),Zt.remove(a.threejs),gr=!0,jr&&(jr.style.display="flex")}function Iv(a){if(lr){const e=a-lr,t=.008,n=Rt[Rt.length-1];Rt[Rt.length-2],gr||(n.threejs.position[n.direction]+=t*e,n.cannonjs.position[n.direction]+=t*e,n.threejs.position[n.direction]>10&&zl()),nn.position.y<ai*(Rt.length-2)+4&&(nn.position.y+=t*e),Nv(e),si.render(Zt,nn)}lr=a}function Nv(a){cn.step(a/1e3),Qr.forEach(e=>{e.threejs.position.copy(e.cannonjs.position),e.threejs.quaternion.copy(e.cannonjs.quaternion)})}window.addEventListener("resize",()=>{console.log("resize",window.innerWidth,window.innerHeight);const t=10/(window.innerWidth/window.innerHeight);nn.top=t/2,nn.bottom=t/-2,si.setSize(window.innerWidth,window.innerHeight),si.render(Zt,nn)});function Vl(a,e,t,n,r,i){const s=new Gn(n,ai,r),o=new $e(`hsl(${30+Rt.length*4}, 100%, 50%)`),l=new Cl({color:o}),h=new Vt(s,l);h.position.set(a,e,t),Sv(n,r,h,ai),Zt.add(h);const u=new ri.Box(new ri.Vec3(n/2,ai/2,r/2));let c=i?5:0;c*=n/mn,c*=r/mn;const d=new ri.Body({mass:c,shape:u});return d.position.set(a,e,t),cn.addBody(d),{threejs:h,cannonjs:d,width:n,depth:r}}
