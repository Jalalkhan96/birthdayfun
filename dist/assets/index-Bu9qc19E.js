(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}})();var ql={};(function n(e,t,i,o){var r=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),s=typeof Path2D=="function"&&typeof DOMMatrix=="function",a=(function(){if(!e.OffscreenCanvas)return!1;try{var F=new OffscreenCanvas(1,1),D=F.getContext("2d");D.fillRect(0,0,1,1);var ee=F.transferToImageBitmap();D.createPattern(ee,"no-repeat")}catch{return!1}return!0})();function c(){}function l(F){var D=t.exports.Promise,ee=D!==void 0?D:e.Promise;return typeof ee=="function"?new ee(F):(F(c,c),null)}var f=(function(F,D){return{transform:function(ee){if(F)return ee;if(D.has(ee))return D.get(ee);var ae=new OffscreenCanvas(ee.width,ee.height),Ee=ae.getContext("2d");return Ee.drawImage(ee,0,0),D.set(ee,ae),ae},clear:function(){D.clear()}}})(a,new Map),p=(function(){var F=Math.floor(16.666666666666668),D,ee,ae={},Ee=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(D=function(ye){var X=Math.random();return ae[X]=requestAnimationFrame(function J(Z){Ee===Z||Ee+F-1<Z?(Ee=Z,delete ae[X],ye()):ae[X]=requestAnimationFrame(J)}),X},ee=function(ye){ae[ye]&&cancelAnimationFrame(ae[ye])}):(D=function(ye){return setTimeout(ye,F)},ee=function(ye){return clearTimeout(ye)}),{frame:D,cancel:ee}})(),h=(function(){var F,D,ee={};function ae(Ee){function ye(X,J){Ee.postMessage({options:X||{},callback:J})}Ee.init=function(J){var Z=J.transferControlToOffscreen();Ee.postMessage({canvas:Z},[Z])},Ee.fire=function(J,Z,he){if(D)return ye(J,null),D;var fe=Math.random().toString(36).slice(2);return D=l(function(ve){function We(Fe){Fe.data.callback===fe&&(delete ee[fe],Ee.removeEventListener("message",We),D=null,f.clear(),he(),ve())}Ee.addEventListener("message",We),ye(J,fe),ee[fe]=We.bind(null,{data:{callback:fe}})}),D},Ee.reset=function(){Ee.postMessage({reset:!0});for(var J in ee)ee[J](),delete ee[J]}}return function(){if(F)return F;if(!i&&r){var Ee=["var CONFETTI, SIZE = {}, module = {};","("+n.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{F=new Worker(URL.createObjectURL(new Blob([Ee])))}catch(ye){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",ye),null}ae(F)}return F}})(),m={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function v(F,D){return D?D(F):F}function y(F){return F!=null}function g(F,D,ee){return v(F&&y(F[D])?F[D]:m[D],ee)}function _(F){return F<0?0:Math.floor(F)}function E(F,D){return Math.floor(Math.random()*(D-F))+F}function A(F){return parseInt(F,16)}function S(F){return F.map(R)}function R(F){var D=String(F).replace(/[^0-9a-f]/gi,"");return D.length<6&&(D=D[0]+D[0]+D[1]+D[1]+D[2]+D[2]),{r:A(D.substring(0,2)),g:A(D.substring(2,4)),b:A(D.substring(4,6))}}function C(F){var D=g(F,"origin",Object);return D.x=g(D,"x",Number),D.y=g(D,"y",Number),D}function b(F){F.width=document.documentElement.clientWidth,F.height=document.documentElement.clientHeight}function x(F){var D=F.getBoundingClientRect();F.width=D.width,F.height=D.height}function M(F){var D=document.createElement("canvas");return D.style.position="fixed",D.style.top="0px",D.style.left="0px",D.style.pointerEvents="none",D.style.zIndex=F,D}function B(F,D,ee,ae,Ee,ye,X,J,Z){F.save(),F.translate(D,ee),F.rotate(ye),F.scale(ae,Ee),F.arc(0,0,1,X,J,Z),F.restore()}function I(F){var D=F.angle*(Math.PI/180),ee=F.spread*(Math.PI/180);return{x:F.x,y:F.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:F.startVelocity*.5+Math.random()*F.startVelocity,angle2D:-D+(.5*ee-Math.random()*ee),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:F.color,shape:F.shape,tick:0,totalTicks:F.ticks,decay:F.decay,drift:F.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:F.gravity*3,ovalScalar:.6,scalar:F.scalar,flat:F.flat}}function N(F,D){D.x+=Math.cos(D.angle2D)*D.velocity+D.drift,D.y+=Math.sin(D.angle2D)*D.velocity+D.gravity,D.velocity*=D.decay,D.flat?(D.wobble=0,D.wobbleX=D.x+10*D.scalar,D.wobbleY=D.y+10*D.scalar,D.tiltSin=0,D.tiltCos=0,D.random=1):(D.wobble+=D.wobbleSpeed,D.wobbleX=D.x+10*D.scalar*Math.cos(D.wobble),D.wobbleY=D.y+10*D.scalar*Math.sin(D.wobble),D.tiltAngle+=.1,D.tiltSin=Math.sin(D.tiltAngle),D.tiltCos=Math.cos(D.tiltAngle),D.random=Math.random()+2);var ee=D.tick++/D.totalTicks,ae=D.x+D.random*D.tiltCos,Ee=D.y+D.random*D.tiltSin,ye=D.wobbleX+D.random*D.tiltCos,X=D.wobbleY+D.random*D.tiltSin;if(F.fillStyle="rgba("+D.color.r+", "+D.color.g+", "+D.color.b+", "+(1-ee)+")",F.beginPath(),s&&D.shape.type==="path"&&typeof D.shape.path=="string"&&Array.isArray(D.shape.matrix))F.fill(W(D.shape.path,D.shape.matrix,D.x,D.y,Math.abs(ye-ae)*.1,Math.abs(X-Ee)*.1,Math.PI/10*D.wobble));else if(D.shape.type==="bitmap"){var J=Math.PI/10*D.wobble,Z=Math.abs(ye-ae)*.1,he=Math.abs(X-Ee)*.1,fe=D.shape.bitmap.width*D.scalar,ve=D.shape.bitmap.height*D.scalar,We=new DOMMatrix([Math.cos(J)*Z,Math.sin(J)*Z,-Math.sin(J)*he,Math.cos(J)*he,D.x,D.y]);We.multiplySelf(new DOMMatrix(D.shape.matrix));var Fe=F.createPattern(f.transform(D.shape.bitmap),"no-repeat");Fe.setTransform(We),F.globalAlpha=1-ee,F.fillStyle=Fe,F.fillRect(D.x-fe/2,D.y-ve/2,fe,ve),F.globalAlpha=1}else if(D.shape==="circle")F.ellipse?F.ellipse(D.x,D.y,Math.abs(ye-ae)*D.ovalScalar,Math.abs(X-Ee)*D.ovalScalar,Math.PI/10*D.wobble,0,2*Math.PI):B(F,D.x,D.y,Math.abs(ye-ae)*D.ovalScalar,Math.abs(X-Ee)*D.ovalScalar,Math.PI/10*D.wobble,0,2*Math.PI);else if(D.shape==="star")for(var Ae=Math.PI/2*3,He=4*D.scalar,Be=8*D.scalar,je=D.x,U=D.y,at=5,qe=Math.PI/at;at--;)je=D.x+Math.cos(Ae)*Be,U=D.y+Math.sin(Ae)*Be,F.lineTo(je,U),Ae+=qe,je=D.x+Math.cos(Ae)*He,U=D.y+Math.sin(Ae)*He,F.lineTo(je,U),Ae+=qe;else F.moveTo(Math.floor(D.x),Math.floor(D.y)),F.lineTo(Math.floor(D.wobbleX),Math.floor(Ee)),F.lineTo(Math.floor(ye),Math.floor(X)),F.lineTo(Math.floor(ae),Math.floor(D.wobbleY));return F.closePath(),F.fill(),D.tick<D.totalTicks}function L(F,D,ee,ae,Ee){var ye=D.slice(),X=F.getContext("2d"),J,Z,he=l(function(fe){function ve(){J=Z=null,X.clearRect(0,0,ae.width,ae.height),f.clear(),Ee(),fe()}function We(){i&&!(ae.width===o.width&&ae.height===o.height)&&(ae.width=F.width=o.width,ae.height=F.height=o.height),!ae.width&&!ae.height&&(ee(F),ae.width=F.width,ae.height=F.height),X.clearRect(0,0,ae.width,ae.height),ye=ye.filter(function(Fe){return N(X,Fe)}),ye.length?J=p.frame(We):ve()}J=p.frame(We),Z=ve});return{addFettis:function(fe){return ye=ye.concat(fe),he},canvas:F,promise:he,reset:function(){J&&p.cancel(J),Z&&Z()}}}function k(F,D){var ee=!F,ae=!!g(D||{},"resize"),Ee=!1,ye=g(D,"disableForReducedMotion",Boolean),X=r&&!!g(D||{},"useWorker"),J=X?h():null,Z=ee?b:x,he=F&&J?!!F.__confetti_initialized:!1,fe=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,ve;function We(Ae,He,Be){for(var je=g(Ae,"particleCount",_),U=g(Ae,"angle",Number),at=g(Ae,"spread",Number),qe=g(Ae,"startVelocity",Number),lt=g(Ae,"decay",Number),Ce=g(Ae,"gravity",Number),P=g(Ae,"drift",Number),T=g(Ae,"colors",S),G=g(Ae,"ticks",Number),te=g(Ae,"shapes"),ne=g(Ae,"scalar"),Q=!!g(Ae,"flat"),Me=C(Ae),ue=je,De=[],ke=F.width*Me.x,re=F.height*Me.y;ue--;)De.push(I({x:ke,y:re,angle:U,spread:at,startVelocity:qe,color:T[ue%T.length],shape:te[E(0,te.length)],ticks:G,decay:lt,gravity:Ce,drift:P,scalar:ne,flat:Q}));return ve?ve.addFettis(De):(ve=L(F,De,Z,He,Be),ve.promise)}function Fe(Ae){var He=ye||g(Ae,"disableForReducedMotion",Boolean),Be=g(Ae,"zIndex",Number);if(He&&fe)return l(function(qe){qe()});ee&&ve?F=ve.canvas:ee&&!F&&(F=M(Be),document.body.appendChild(F)),ae&&!he&&Z(F);var je={width:F.width,height:F.height};J&&!he&&J.init(F),he=!0,J&&(F.__confetti_initialized=!0);function U(){if(J){var qe={getBoundingClientRect:function(){if(!ee)return F.getBoundingClientRect()}};Z(qe),J.postMessage({resize:{width:qe.width,height:qe.height}});return}je.width=je.height=null}function at(){ve=null,ae&&(Ee=!1,e.removeEventListener("resize",U)),ee&&F&&(document.body.contains(F)&&document.body.removeChild(F),F=null,he=!1)}return ae&&!Ee&&(Ee=!0,e.addEventListener("resize",U,!1)),J?J.fire(Ae,je,at):We(Ae,je,at)}return Fe.reset=function(){J&&J.reset(),ve&&ve.reset()},Fe}var z;function q(){return z||(z=k(null,{useWorker:!0,resize:!0})),z}function W(F,D,ee,ae,Ee,ye,X){var J=new Path2D(F),Z=new Path2D;Z.addPath(J,new DOMMatrix(D));var he=new Path2D;return he.addPath(Z,new DOMMatrix([Math.cos(X)*Ee,Math.sin(X)*Ee,-Math.sin(X)*ye,Math.cos(X)*ye,ee,ae])),he}function ie(F){if(!s)throw new Error("path confetti are not supported in this browser");var D,ee;typeof F=="string"?D=F:(D=F.path,ee=F.matrix);var ae=new Path2D(D),Ee=document.createElement("canvas"),ye=Ee.getContext("2d");if(!ee){for(var X=1e3,J=X,Z=X,he=0,fe=0,ve,We,Fe=0;Fe<X;Fe+=2)for(var Ae=0;Ae<X;Ae+=2)ye.isPointInPath(ae,Fe,Ae,"nonzero")&&(J=Math.min(J,Fe),Z=Math.min(Z,Ae),he=Math.max(he,Fe),fe=Math.max(fe,Ae));ve=he-J,We=fe-Z;var He=10,Be=Math.min(He/ve,He/We);ee=[Be,0,0,Be,-Math.round(ve/2+J)*Be,-Math.round(We/2+Z)*Be]}return{type:"path",path:D,matrix:ee}}function oe(F){var D,ee=1,ae="#000000",Ee='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof F=="string"?D=F:(D=F.text,ee="scalar"in F?F.scalar:ee,Ee="fontFamily"in F?F.fontFamily:Ee,ae="color"in F?F.color:ae);var ye=10*ee,X=""+ye+"px "+Ee,J=new OffscreenCanvas(ye,ye),Z=J.getContext("2d");Z.font=X;var he=Z.measureText(D),fe=Math.ceil(he.actualBoundingBoxRight+he.actualBoundingBoxLeft),ve=Math.ceil(he.actualBoundingBoxAscent+he.actualBoundingBoxDescent),We=2,Fe=he.actualBoundingBoxLeft+We,Ae=he.actualBoundingBoxAscent+We;fe+=We+We,ve+=We+We,J=new OffscreenCanvas(fe,ve),Z=J.getContext("2d"),Z.font=X,Z.fillStyle=ae,Z.fillText(D,Fe,Ae);var He=1/ee;return{type:"bitmap",bitmap:J.transferToImageBitmap(),matrix:[He,0,0,He,-fe*He/2,-ve*He/2]}}t.exports=function(){return q().apply(this,arguments)},t.exports.reset=function(){q().reset()},t.exports.create=k,t.exports.shapeFromPath=ie,t.exports.shapeFromText=oe})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),ql,!1);const Ra=ql.exports;ql.exports.create;class fo{constructor(e,t={}){this.container=e,this.particles=[],this.running=!1,this.count=t.count||30,this.types=t.types||["heart","sparkle","circle"],this.colors=t.colors||["#ff2d75","#7b2ff7","#ff6b9d","#c44dff"]}start(){this.running=!0;for(let e=0;e<this.count;e++)setTimeout(()=>{this.running&&this.createParticle()},e*200)}createParticle(){const e=this.types[Math.floor(Math.random()*this.types.length)],t=this.colors[Math.floor(Math.random()*this.colors.length)],i=8+Math.random()*20,o=Math.random()*100,r=8+Math.random()*12,s=Math.random()*5,a=document.createElement("div");a.className="bg-particle",a.style.cssText=`
      position: absolute;
      left: ${o}%;
      bottom: -${i}px;
      width: ${i}px;
      height: ${i}px;
      opacity: ${.2+Math.random()*.4};
      animation: particleRise ${r}s ${s}s ease-in infinite;
      pointer-events: none;
      z-index: 0;
    `,e==="heart"?a.innerHTML=`<svg viewBox="0 0 24 24" fill="${t}" width="${i}" height="${i}"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`:e==="sparkle"?(a.innerHTML="✦",a.style.fontSize=`${i}px`,a.style.color=t,a.style.width="auto",a.style.height="auto"):(a.style.borderRadius="50%",a.style.background=t,a.style.filter=`blur(${2+Math.random()*4}px)`),this.container.appendChild(a),this.particles.push(a),a.addEventListener("animationiteration",()=>{a.style.left=`${Math.random()*100}%`})}stop(){this.running=!1,this.particles.forEach(e=>e.remove()),this.particles=[]}static injectStyles(){if(document.getElementById("particle-styles"))return;const e=document.createElement("style");e.id="particle-styles",e.textContent=`
      @keyframes particleRise {
        0% {
          transform: translateY(0) rotate(0deg) scale(1);
          opacity: 0;
        }
        10% {
          opacity: 0.6;
        }
        90% {
          opacity: 0.3;
        }
        100% {
          transform: translateY(-110vh) rotate(${360+Math.random()*360}deg) scale(0.3);
          opacity: 0;
        }
      }
    `,document.head.appendChild(e)}}function dh(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var So={exports:{}},gs={},_s,Hc;function lm(){if(Hc)return _s;Hc=1;function n(e,t){typeof t=="boolean"&&(t={forever:t}),this._originalTimeouts=JSON.parse(JSON.stringify(e)),this._timeouts=e,this._options=t||{},this._maxRetryTime=t&&t.maxRetryTime||1/0,this._fn=null,this._errors=[],this._attempts=1,this._operationTimeout=null,this._operationTimeoutCb=null,this._timeout=null,this._operationStart=null,this._timer=null,this._options.forever&&(this._cachedTimeouts=this._timeouts.slice(0))}return _s=n,n.prototype.reset=function(){this._attempts=1,this._timeouts=this._originalTimeouts.slice(0)},n.prototype.stop=function(){this._timeout&&clearTimeout(this._timeout),this._timer&&clearTimeout(this._timer),this._timeouts=[],this._cachedTimeouts=null},n.prototype.retry=function(e){if(this._timeout&&clearTimeout(this._timeout),!e)return!1;var t=new Date().getTime();if(e&&t-this._operationStart>=this._maxRetryTime)return this._errors.push(e),this._errors.unshift(new Error("RetryOperation timeout occurred")),!1;this._errors.push(e);var i=this._timeouts.shift();if(i===void 0)if(this._cachedTimeouts)this._errors.splice(0,this._errors.length-1),i=this._cachedTimeouts.slice(-1);else return!1;var o=this;return this._timer=setTimeout(function(){o._attempts++,o._operationTimeoutCb&&(o._timeout=setTimeout(function(){o._operationTimeoutCb(o._attempts)},o._operationTimeout),o._options.unref&&o._timeout.unref()),o._fn(o._attempts)},i),this._options.unref&&this._timer.unref(),!0},n.prototype.attempt=function(e,t){this._fn=e,t&&(t.timeout&&(this._operationTimeout=t.timeout),t.cb&&(this._operationTimeoutCb=t.cb));var i=this;this._operationTimeoutCb&&(this._timeout=setTimeout(function(){i._operationTimeoutCb()},i._operationTimeout)),this._operationStart=new Date().getTime(),this._fn(this._attempts)},n.prototype.try=function(e){console.log("Using RetryOperation.try() is deprecated"),this.attempt(e)},n.prototype.start=function(e){console.log("Using RetryOperation.start() is deprecated"),this.attempt(e)},n.prototype.start=n.prototype.try,n.prototype.errors=function(){return this._errors},n.prototype.attempts=function(){return this._attempts},n.prototype.mainError=function(){if(this._errors.length===0)return null;for(var e={},t=null,i=0,o=0;o<this._errors.length;o++){var r=this._errors[o],s=r.message,a=(e[s]||0)+1;e[s]=a,a>=i&&(t=r,i=a)}return t},_s}var zc;function cm(){return zc||(zc=1,(function(n){var e=lm();n.operation=function(t){var i=n.timeouts(t);return new e(i,{forever:t&&(t.forever||t.retries===1/0),unref:t&&t.unref,maxRetryTime:t&&t.maxRetryTime})},n.timeouts=function(t){if(t instanceof Array)return[].concat(t);var i={retries:10,factor:2,minTimeout:1*1e3,maxTimeout:1/0,randomize:!1};for(var o in t)i[o]=t[o];if(i.minTimeout>i.maxTimeout)throw new Error("minTimeout is greater than maxTimeout");for(var r=[],s=0;s<i.retries;s++)r.push(this.createTimeout(s,i));return t&&t.forever&&!r.length&&r.push(this.createTimeout(s,i)),r.sort(function(a,c){return a-c}),r},n.createTimeout=function(t,i){var o=i.randomize?Math.random()+1:1,r=Math.round(o*Math.max(i.minTimeout,1)*Math.pow(i.factor,t));return r=Math.min(r,i.maxTimeout),r},n.wrap=function(t,i,o){if(i instanceof Array&&(o=i,i=null),!o){o=[];for(var r in t)typeof t[r]=="function"&&o.push(r)}for(var s=0;s<o.length;s++){var a=o[s],c=t[a];t[a]=(function(f){var p=n.operation(i),h=Array.prototype.slice.call(arguments,1),m=h.pop();h.push(function(v){p.retry(v)||(v&&(arguments[0]=p.mainError()),m.apply(this,arguments))}),p.attempt(function(){f.apply(t,h)})}).bind(t,c),t[a].options=i}}})(gs)),gs}var vs,Wc;function um(){return Wc||(Wc=1,vs=cm()),vs}var qc;function dm(){if(qc)return So.exports;qc=1;const n=um(),e=["Failed to fetch","NetworkError when attempting to fetch resource.","The Internet connection appears to be offline.","Network request failed"];class t extends Error{constructor(a){super(),a instanceof Error?(this.originalError=a,{message:a}=a):(this.originalError=new Error(a),this.originalError.stack=this.stack),this.name="AbortError",this.message=a}}const i=(s,a,c)=>{const l=c.retries-(a-1);return s.attemptNumber=a,s.retriesLeft=l,s},o=s=>e.includes(s),r=(s,a)=>new Promise((c,l)=>{a={onFailedAttempt:()=>{},retries:10,...a};const f=n.operation(a);f.attempt(async p=>{try{c(await s(p))}catch(h){if(!(h instanceof Error)){l(new TypeError(`Non-error was thrown: "${h}". You should only throw errors.`));return}if(h instanceof t)f.stop(),l(h.originalError);else if(h instanceof TypeError&&!o(h.message))f.stop(),l(h);else{i(h,p,a);try{await a.onFailedAttempt(h)}catch(m){l(m);return}f.retry(h)||l(f.mainError())}}})});return So.exports=r,So.exports.default=r,So.exports.AbortError=t,So.exports}var fh=dm();const fm=dh(fh);var hm={};/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let pm,mm;function gm(){return{geminiUrl:pm,vertexUrl:mm}}function _m(n,e,t,i){var o,r;if(!(n!=null&&n.baseUrl)){const s=gm();return e?(o=s.vertexUrl)!==null&&o!==void 0?o:t:(r=s.geminiUrl)!==null&&r!==void 0?r:i}return n.baseUrl}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Xn{}function me(n,e){const t=/\{([^}]+)\}/g;return n.replace(t,(i,o)=>{if(Object.prototype.hasOwnProperty.call(e,o)){const r=e[o];return r!=null?String(r):""}else throw new Error(`Key '${o}' not found in valueMap.`)})}function d(n,e,t){for(let r=0;r<e.length-1;r++){const s=e[r];if(s.endsWith("[]")){const a=s.slice(0,-2);if(!(a in n))if(Array.isArray(t))n[a]=Array.from({length:t.length},()=>({}));else throw new Error(`Value must be a list given an array path ${s}`);if(Array.isArray(n[a])){const c=n[a];if(Array.isArray(t))for(let l=0;l<c.length;l++){const f=c[l];d(f,e.slice(r+1),t[l])}else for(const l of c)d(l,e.slice(r+1),t)}return}else if(s.endsWith("[0]")){const a=s.slice(0,-3);a in n||(n[a]=[{}]);const c=n[a];d(c[0],e.slice(r+1),t);return}(!n[s]||typeof n[s]!="object")&&(n[s]={}),n=n[s]}const i=e[e.length-1],o=n[i];if(o!==void 0){if(!t||typeof t=="object"&&Object.keys(t).length===0||t===o)return;if(typeof o=="object"&&typeof t=="object"&&o!==null&&t!==null)Object.assign(o,t);else throw new Error(`Cannot set value for an existing key. Key: ${i}`)}else i==="_self"&&typeof t=="object"&&t!==null&&!Array.isArray(t)?Object.assign(n,t):n[i]=t}function u(n,e,t=void 0){try{if(e.length===1&&e[0]==="_self")return n;for(let i=0;i<e.length;i++){if(typeof n!="object"||n===null)return t;const o=e[i];if(o.endsWith("[]")){const r=o.slice(0,-2);if(r in n){const s=n[r];return Array.isArray(s)?s.map(a=>u(a,e.slice(i+1),t)):t}else return t}else n=n[o]}return n}catch(i){if(i instanceof TypeError)return t;throw i}}function vm(n,e){for(const[t,i]of Object.entries(e)){const o=t.split("."),r=i.split("."),s=new Set;let a=-1;for(let c=0;c<o.length;c++)if(o[c]==="*"){a=c;break}if(a!==-1&&r.length>a)for(let c=a;c<r.length;c++){const l=r[c];l!=="*"&&!l.endsWith("[]")&&!l.endsWith("[0]")&&s.add(l)}Pa(n,o,r,0,s)}}function Pa(n,e,t,i,o){if(i>=e.length||typeof n!="object"||n===null)return;const r=e[i];if(r.endsWith("[]")){const s=r.slice(0,-2),a=n;if(s in a&&Array.isArray(a[s]))for(const c of a[s])Pa(c,e,t,i+1,o)}else if(r==="*"){if(typeof n=="object"&&n!==null&&!Array.isArray(n)){const s=n,a=Object.keys(s).filter(l=>!l.startsWith("_")&&!o.has(l)),c={};for(const l of a)c[l]=s[l];for(const[l,f]of Object.entries(c)){const p=[];for(const h of t.slice(i))h==="*"?p.push(l):p.push(h);d(s,p,f)}for(const l of a)delete s[l]}}else{const s=n;r in s&&Pa(s[r],e,t,i+1,o)}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Xl(n){if(typeof n!="string")throw new Error("fromImageBytes must be a string");return n}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function ym(n){const e={},t=u(n,["operationName"]);t!=null&&d(e,["operationName"],t);const i=u(n,["resourceName"]);return i!=null&&d(e,["_url","resourceName"],i),e}function xm(n){const e={},t=u(n,["name"]);t!=null&&d(e,["name"],t);const i=u(n,["metadata"]);i!=null&&d(e,["metadata"],i);const o=u(n,["done"]);o!=null&&d(e,["done"],o);const r=u(n,["error"]);r!=null&&d(e,["error"],r);const s=u(n,["response","generateVideoResponse"]);return s!=null&&d(e,["response"],Sm(s)),e}function Em(n){const e={},t=u(n,["name"]);t!=null&&d(e,["name"],t);const i=u(n,["metadata"]);i!=null&&d(e,["metadata"],i);const o=u(n,["done"]);o!=null&&d(e,["done"],o);const r=u(n,["error"]);r!=null&&d(e,["error"],r);const s=u(n,["response"]);return s!=null&&d(e,["response"],Tm(s)),e}function Sm(n){const e={},t=u(n,["generatedSamples"]);if(t!=null){let r=t;Array.isArray(r)&&(r=r.map(s=>Mm(s))),d(e,["generatedVideos"],r)}const i=u(n,["raiMediaFilteredCount"]);i!=null&&d(e,["raiMediaFilteredCount"],i);const o=u(n,["raiMediaFilteredReasons"]);return o!=null&&d(e,["raiMediaFilteredReasons"],o),e}function Tm(n){const e={},t=u(n,["videos"]);if(t!=null){let r=t;Array.isArray(r)&&(r=r.map(s=>Am(s))),d(e,["generatedVideos"],r)}const i=u(n,["raiMediaFilteredCount"]);i!=null&&d(e,["raiMediaFilteredCount"],i);const o=u(n,["raiMediaFilteredReasons"]);return o!=null&&d(e,["raiMediaFilteredReasons"],o),e}function Mm(n){const e={},t=u(n,["video"]);return t!=null&&d(e,["video"],Pm(t)),e}function Am(n){const e={},t=u(n,["_self"]);return t!=null&&d(e,["video"],Dm(t)),e}function Cm(n){const e={},t=u(n,["operationName"]);return t!=null&&d(e,["_url","operationName"],t),e}function wm(n){const e={},t=u(n,["operationName"]);return t!=null&&d(e,["_url","operationName"],t),e}function bm(n){const e={},t=u(n,["name"]);t!=null&&d(e,["name"],t);const i=u(n,["metadata"]);i!=null&&d(e,["metadata"],i);const o=u(n,["done"]);o!=null&&d(e,["done"],o);const r=u(n,["error"]);r!=null&&d(e,["error"],r);const s=u(n,["response"]);return s!=null&&d(e,["response"],Im(s)),e}function Im(n){const e={},t=u(n,["sdkHttpResponse"]);t!=null&&d(e,["sdkHttpResponse"],t);const i=u(n,["parent"]);i!=null&&d(e,["parent"],i);const o=u(n,["documentName"]);return o!=null&&d(e,["documentName"],o),e}function hh(n){const e={},t=u(n,["name"]);t!=null&&d(e,["name"],t);const i=u(n,["metadata"]);i!=null&&d(e,["metadata"],i);const o=u(n,["done"]);o!=null&&d(e,["done"],o);const r=u(n,["error"]);r!=null&&d(e,["error"],r);const s=u(n,["response"]);return s!=null&&d(e,["response"],Rm(s)),e}function Rm(n){const e={},t=u(n,["sdkHttpResponse"]);t!=null&&d(e,["sdkHttpResponse"],t);const i=u(n,["parent"]);i!=null&&d(e,["parent"],i);const o=u(n,["documentName"]);return o!=null&&d(e,["documentName"],o),e}function Pm(n){const e={},t=u(n,["uri"]);t!=null&&d(e,["uri"],t);const i=u(n,["encodedVideo"]);i!=null&&d(e,["videoBytes"],Xl(i));const o=u(n,["encoding"]);return o!=null&&d(e,["mimeType"],o),e}function Dm(n){const e={},t=u(n,["gcsUri"]);t!=null&&d(e,["uri"],t);const i=u(n,["bytesBase64Encoded"]);i!=null&&d(e,["videoBytes"],Xl(i));const o=u(n,["mimeType"]);return o!=null&&d(e,["mimeType"],o),e}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var Xc;(function(n){n.OUTCOME_UNSPECIFIED="OUTCOME_UNSPECIFIED",n.OUTCOME_OK="OUTCOME_OK",n.OUTCOME_FAILED="OUTCOME_FAILED",n.OUTCOME_DEADLINE_EXCEEDED="OUTCOME_DEADLINE_EXCEEDED"})(Xc||(Xc={}));var Yc;(function(n){n.LANGUAGE_UNSPECIFIED="LANGUAGE_UNSPECIFIED",n.PYTHON="PYTHON"})(Yc||(Yc={}));var $c;(function(n){n.SCHEDULING_UNSPECIFIED="SCHEDULING_UNSPECIFIED",n.SILENT="SILENT",n.WHEN_IDLE="WHEN_IDLE",n.INTERRUPT="INTERRUPT"})($c||($c={}));var si;(function(n){n.TYPE_UNSPECIFIED="TYPE_UNSPECIFIED",n.STRING="STRING",n.NUMBER="NUMBER",n.INTEGER="INTEGER",n.BOOLEAN="BOOLEAN",n.ARRAY="ARRAY",n.OBJECT="OBJECT",n.NULL="NULL"})(si||(si={}));var Jc;(function(n){n.PHISH_BLOCK_THRESHOLD_UNSPECIFIED="PHISH_BLOCK_THRESHOLD_UNSPECIFIED",n.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",n.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",n.BLOCK_HIGH_AND_ABOVE="BLOCK_HIGH_AND_ABOVE",n.BLOCK_HIGHER_AND_ABOVE="BLOCK_HIGHER_AND_ABOVE",n.BLOCK_VERY_HIGH_AND_ABOVE="BLOCK_VERY_HIGH_AND_ABOVE",n.BLOCK_ONLY_EXTREMELY_HIGH="BLOCK_ONLY_EXTREMELY_HIGH"})(Jc||(Jc={}));var Kc;(function(n){n.AUTH_TYPE_UNSPECIFIED="AUTH_TYPE_UNSPECIFIED",n.NO_AUTH="NO_AUTH",n.API_KEY_AUTH="API_KEY_AUTH",n.HTTP_BASIC_AUTH="HTTP_BASIC_AUTH",n.GOOGLE_SERVICE_ACCOUNT_AUTH="GOOGLE_SERVICE_ACCOUNT_AUTH",n.OAUTH="OAUTH",n.OIDC_AUTH="OIDC_AUTH"})(Kc||(Kc={}));var Zc;(function(n){n.HTTP_IN_UNSPECIFIED="HTTP_IN_UNSPECIFIED",n.HTTP_IN_QUERY="HTTP_IN_QUERY",n.HTTP_IN_HEADER="HTTP_IN_HEADER",n.HTTP_IN_PATH="HTTP_IN_PATH",n.HTTP_IN_BODY="HTTP_IN_BODY",n.HTTP_IN_COOKIE="HTTP_IN_COOKIE"})(Zc||(Zc={}));var Qc;(function(n){n.API_SPEC_UNSPECIFIED="API_SPEC_UNSPECIFIED",n.SIMPLE_SEARCH="SIMPLE_SEARCH",n.ELASTIC_SEARCH="ELASTIC_SEARCH"})(Qc||(Qc={}));var jc;(function(n){n.UNSPECIFIED="UNSPECIFIED",n.BLOCKING="BLOCKING",n.NON_BLOCKING="NON_BLOCKING"})(jc||(jc={}));var eu;(function(n){n.MODE_UNSPECIFIED="MODE_UNSPECIFIED",n.MODE_DYNAMIC="MODE_DYNAMIC"})(eu||(eu={}));var tu;(function(n){n.MODE_UNSPECIFIED="MODE_UNSPECIFIED",n.AUTO="AUTO",n.ANY="ANY",n.NONE="NONE",n.VALIDATED="VALIDATED"})(tu||(tu={}));var nu;(function(n){n.THINKING_LEVEL_UNSPECIFIED="THINKING_LEVEL_UNSPECIFIED",n.LOW="LOW",n.MEDIUM="MEDIUM",n.HIGH="HIGH",n.MINIMAL="MINIMAL"})(nu||(nu={}));var iu;(function(n){n.DONT_ALLOW="DONT_ALLOW",n.ALLOW_ADULT="ALLOW_ADULT",n.ALLOW_ALL="ALLOW_ALL"})(iu||(iu={}));var ou;(function(n){n.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",n.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",n.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",n.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",n.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",n.HARM_CATEGORY_CIVIC_INTEGRITY="HARM_CATEGORY_CIVIC_INTEGRITY",n.HARM_CATEGORY_IMAGE_HATE="HARM_CATEGORY_IMAGE_HATE",n.HARM_CATEGORY_IMAGE_DANGEROUS_CONTENT="HARM_CATEGORY_IMAGE_DANGEROUS_CONTENT",n.HARM_CATEGORY_IMAGE_HARASSMENT="HARM_CATEGORY_IMAGE_HARASSMENT",n.HARM_CATEGORY_IMAGE_SEXUALLY_EXPLICIT="HARM_CATEGORY_IMAGE_SEXUALLY_EXPLICIT",n.HARM_CATEGORY_JAILBREAK="HARM_CATEGORY_JAILBREAK"})(ou||(ou={}));var ru;(function(n){n.HARM_BLOCK_METHOD_UNSPECIFIED="HARM_BLOCK_METHOD_UNSPECIFIED",n.SEVERITY="SEVERITY",n.PROBABILITY="PROBABILITY"})(ru||(ru={}));var su;(function(n){n.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",n.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",n.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",n.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",n.BLOCK_NONE="BLOCK_NONE",n.OFF="OFF"})(su||(su={}));var au;(function(n){n.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",n.STOP="STOP",n.MAX_TOKENS="MAX_TOKENS",n.SAFETY="SAFETY",n.RECITATION="RECITATION",n.LANGUAGE="LANGUAGE",n.OTHER="OTHER",n.BLOCKLIST="BLOCKLIST",n.PROHIBITED_CONTENT="PROHIBITED_CONTENT",n.SPII="SPII",n.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",n.IMAGE_SAFETY="IMAGE_SAFETY",n.UNEXPECTED_TOOL_CALL="UNEXPECTED_TOOL_CALL",n.IMAGE_PROHIBITED_CONTENT="IMAGE_PROHIBITED_CONTENT",n.NO_IMAGE="NO_IMAGE",n.IMAGE_RECITATION="IMAGE_RECITATION",n.IMAGE_OTHER="IMAGE_OTHER"})(au||(au={}));var lu;(function(n){n.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",n.NEGLIGIBLE="NEGLIGIBLE",n.LOW="LOW",n.MEDIUM="MEDIUM",n.HIGH="HIGH"})(lu||(lu={}));var cu;(function(n){n.HARM_SEVERITY_UNSPECIFIED="HARM_SEVERITY_UNSPECIFIED",n.HARM_SEVERITY_NEGLIGIBLE="HARM_SEVERITY_NEGLIGIBLE",n.HARM_SEVERITY_LOW="HARM_SEVERITY_LOW",n.HARM_SEVERITY_MEDIUM="HARM_SEVERITY_MEDIUM",n.HARM_SEVERITY_HIGH="HARM_SEVERITY_HIGH"})(cu||(cu={}));var uu;(function(n){n.URL_RETRIEVAL_STATUS_UNSPECIFIED="URL_RETRIEVAL_STATUS_UNSPECIFIED",n.URL_RETRIEVAL_STATUS_SUCCESS="URL_RETRIEVAL_STATUS_SUCCESS",n.URL_RETRIEVAL_STATUS_ERROR="URL_RETRIEVAL_STATUS_ERROR",n.URL_RETRIEVAL_STATUS_PAYWALL="URL_RETRIEVAL_STATUS_PAYWALL",n.URL_RETRIEVAL_STATUS_UNSAFE="URL_RETRIEVAL_STATUS_UNSAFE"})(uu||(uu={}));var du;(function(n){n.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",n.SAFETY="SAFETY",n.OTHER="OTHER",n.BLOCKLIST="BLOCKLIST",n.PROHIBITED_CONTENT="PROHIBITED_CONTENT",n.IMAGE_SAFETY="IMAGE_SAFETY",n.MODEL_ARMOR="MODEL_ARMOR",n.JAILBREAK="JAILBREAK"})(du||(du={}));var fu;(function(n){n.TRAFFIC_TYPE_UNSPECIFIED="TRAFFIC_TYPE_UNSPECIFIED",n.ON_DEMAND="ON_DEMAND",n.ON_DEMAND_PRIORITY="ON_DEMAND_PRIORITY",n.ON_DEMAND_FLEX="ON_DEMAND_FLEX",n.PROVISIONED_THROUGHPUT="PROVISIONED_THROUGHPUT"})(fu||(fu={}));var qr;(function(n){n.MODALITY_UNSPECIFIED="MODALITY_UNSPECIFIED",n.TEXT="TEXT",n.IMAGE="IMAGE",n.AUDIO="AUDIO"})(qr||(qr={}));var hu;(function(n){n.MEDIA_RESOLUTION_UNSPECIFIED="MEDIA_RESOLUTION_UNSPECIFIED",n.MEDIA_RESOLUTION_LOW="MEDIA_RESOLUTION_LOW",n.MEDIA_RESOLUTION_MEDIUM="MEDIA_RESOLUTION_MEDIUM",n.MEDIA_RESOLUTION_HIGH="MEDIA_RESOLUTION_HIGH"})(hu||(hu={}));var pu;(function(n){n.TUNING_MODE_UNSPECIFIED="TUNING_MODE_UNSPECIFIED",n.TUNING_MODE_FULL="TUNING_MODE_FULL",n.TUNING_MODE_PEFT_ADAPTER="TUNING_MODE_PEFT_ADAPTER"})(pu||(pu={}));var mu;(function(n){n.ADAPTER_SIZE_UNSPECIFIED="ADAPTER_SIZE_UNSPECIFIED",n.ADAPTER_SIZE_ONE="ADAPTER_SIZE_ONE",n.ADAPTER_SIZE_TWO="ADAPTER_SIZE_TWO",n.ADAPTER_SIZE_FOUR="ADAPTER_SIZE_FOUR",n.ADAPTER_SIZE_EIGHT="ADAPTER_SIZE_EIGHT",n.ADAPTER_SIZE_SIXTEEN="ADAPTER_SIZE_SIXTEEN",n.ADAPTER_SIZE_THIRTY_TWO="ADAPTER_SIZE_THIRTY_TWO"})(mu||(mu={}));var Da;(function(n){n.JOB_STATE_UNSPECIFIED="JOB_STATE_UNSPECIFIED",n.JOB_STATE_QUEUED="JOB_STATE_QUEUED",n.JOB_STATE_PENDING="JOB_STATE_PENDING",n.JOB_STATE_RUNNING="JOB_STATE_RUNNING",n.JOB_STATE_SUCCEEDED="JOB_STATE_SUCCEEDED",n.JOB_STATE_FAILED="JOB_STATE_FAILED",n.JOB_STATE_CANCELLING="JOB_STATE_CANCELLING",n.JOB_STATE_CANCELLED="JOB_STATE_CANCELLED",n.JOB_STATE_PAUSED="JOB_STATE_PAUSED",n.JOB_STATE_EXPIRED="JOB_STATE_EXPIRED",n.JOB_STATE_UPDATING="JOB_STATE_UPDATING",n.JOB_STATE_PARTIALLY_SUCCEEDED="JOB_STATE_PARTIALLY_SUCCEEDED"})(Da||(Da={}));var gu;(function(n){n.TUNING_JOB_STATE_UNSPECIFIED="TUNING_JOB_STATE_UNSPECIFIED",n.TUNING_JOB_STATE_WAITING_FOR_QUOTA="TUNING_JOB_STATE_WAITING_FOR_QUOTA",n.TUNING_JOB_STATE_PROCESSING_DATASET="TUNING_JOB_STATE_PROCESSING_DATASET",n.TUNING_JOB_STATE_WAITING_FOR_CAPACITY="TUNING_JOB_STATE_WAITING_FOR_CAPACITY",n.TUNING_JOB_STATE_TUNING="TUNING_JOB_STATE_TUNING",n.TUNING_JOB_STATE_POST_PROCESSING="TUNING_JOB_STATE_POST_PROCESSING"})(gu||(gu={}));var _u;(function(n){n.AGGREGATION_METRIC_UNSPECIFIED="AGGREGATION_METRIC_UNSPECIFIED",n.AVERAGE="AVERAGE",n.MODE="MODE",n.STANDARD_DEVIATION="STANDARD_DEVIATION",n.VARIANCE="VARIANCE",n.MINIMUM="MINIMUM",n.MAXIMUM="MAXIMUM",n.MEDIAN="MEDIAN",n.PERCENTILE_P90="PERCENTILE_P90",n.PERCENTILE_P95="PERCENTILE_P95",n.PERCENTILE_P99="PERCENTILE_P99"})(_u||(_u={}));var vu;(function(n){n.PAIRWISE_CHOICE_UNSPECIFIED="PAIRWISE_CHOICE_UNSPECIFIED",n.BASELINE="BASELINE",n.CANDIDATE="CANDIDATE",n.TIE="TIE"})(vu||(vu={}));var yu;(function(n){n.TUNING_TASK_UNSPECIFIED="TUNING_TASK_UNSPECIFIED",n.TUNING_TASK_I2V="TUNING_TASK_I2V",n.TUNING_TASK_T2V="TUNING_TASK_T2V",n.TUNING_TASK_R2V="TUNING_TASK_R2V"})(yu||(yu={}));var xu;(function(n){n.MEDIA_RESOLUTION_UNSPECIFIED="MEDIA_RESOLUTION_UNSPECIFIED",n.MEDIA_RESOLUTION_LOW="MEDIA_RESOLUTION_LOW",n.MEDIA_RESOLUTION_MEDIUM="MEDIA_RESOLUTION_MEDIUM",n.MEDIA_RESOLUTION_HIGH="MEDIA_RESOLUTION_HIGH",n.MEDIA_RESOLUTION_ULTRA_HIGH="MEDIA_RESOLUTION_ULTRA_HIGH"})(xu||(xu={}));var Na;(function(n){n.COLLECTION="COLLECTION"})(Na||(Na={}));var Eu;(function(n){n.FEATURE_SELECTION_PREFERENCE_UNSPECIFIED="FEATURE_SELECTION_PREFERENCE_UNSPECIFIED",n.PRIORITIZE_QUALITY="PRIORITIZE_QUALITY",n.BALANCED="BALANCED",n.PRIORITIZE_COST="PRIORITIZE_COST"})(Eu||(Eu={}));var Su;(function(n){n.ENVIRONMENT_UNSPECIFIED="ENVIRONMENT_UNSPECIFIED",n.ENVIRONMENT_BROWSER="ENVIRONMENT_BROWSER"})(Su||(Su={}));var Tu;(function(n){n.PROMINENT_PEOPLE_UNSPECIFIED="PROMINENT_PEOPLE_UNSPECIFIED",n.ALLOW_PROMINENT_PEOPLE="ALLOW_PROMINENT_PEOPLE",n.BLOCK_PROMINENT_PEOPLE="BLOCK_PROMINENT_PEOPLE"})(Tu||(Tu={}));var Xr;(function(n){n.PREDICT="PREDICT",n.EMBED_CONTENT="EMBED_CONTENT"})(Xr||(Xr={}));var Mu;(function(n){n.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",n.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",n.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",n.BLOCK_NONE="BLOCK_NONE"})(Mu||(Mu={}));var Au;(function(n){n.auto="auto",n.en="en",n.ja="ja",n.ko="ko",n.hi="hi",n.zh="zh",n.pt="pt",n.es="es"})(Au||(Au={}));var Cu;(function(n){n.MASK_MODE_DEFAULT="MASK_MODE_DEFAULT",n.MASK_MODE_USER_PROVIDED="MASK_MODE_USER_PROVIDED",n.MASK_MODE_BACKGROUND="MASK_MODE_BACKGROUND",n.MASK_MODE_FOREGROUND="MASK_MODE_FOREGROUND",n.MASK_MODE_SEMANTIC="MASK_MODE_SEMANTIC"})(Cu||(Cu={}));var wu;(function(n){n.CONTROL_TYPE_DEFAULT="CONTROL_TYPE_DEFAULT",n.CONTROL_TYPE_CANNY="CONTROL_TYPE_CANNY",n.CONTROL_TYPE_SCRIBBLE="CONTROL_TYPE_SCRIBBLE",n.CONTROL_TYPE_FACE_MESH="CONTROL_TYPE_FACE_MESH"})(wu||(wu={}));var bu;(function(n){n.SUBJECT_TYPE_DEFAULT="SUBJECT_TYPE_DEFAULT",n.SUBJECT_TYPE_PERSON="SUBJECT_TYPE_PERSON",n.SUBJECT_TYPE_ANIMAL="SUBJECT_TYPE_ANIMAL",n.SUBJECT_TYPE_PRODUCT="SUBJECT_TYPE_PRODUCT"})(bu||(bu={}));var Iu;(function(n){n.EDIT_MODE_DEFAULT="EDIT_MODE_DEFAULT",n.EDIT_MODE_INPAINT_REMOVAL="EDIT_MODE_INPAINT_REMOVAL",n.EDIT_MODE_INPAINT_INSERTION="EDIT_MODE_INPAINT_INSERTION",n.EDIT_MODE_OUTPAINT="EDIT_MODE_OUTPAINT",n.EDIT_MODE_CONTROLLED_EDITING="EDIT_MODE_CONTROLLED_EDITING",n.EDIT_MODE_STYLE="EDIT_MODE_STYLE",n.EDIT_MODE_BGSWAP="EDIT_MODE_BGSWAP",n.EDIT_MODE_PRODUCT_IMAGE="EDIT_MODE_PRODUCT_IMAGE"})(Iu||(Iu={}));var Ru;(function(n){n.FOREGROUND="FOREGROUND",n.BACKGROUND="BACKGROUND",n.PROMPT="PROMPT",n.SEMANTIC="SEMANTIC",n.INTERACTIVE="INTERACTIVE"})(Ru||(Ru={}));var Pu;(function(n){n.ASSET="ASSET",n.STYLE="STYLE"})(Pu||(Pu={}));var Du;(function(n){n.INSERT="INSERT",n.REMOVE="REMOVE",n.REMOVE_STATIC="REMOVE_STATIC",n.OUTPAINT="OUTPAINT"})(Du||(Du={}));var Nu;(function(n){n.OPTIMIZED="OPTIMIZED",n.LOSSLESS="LOSSLESS"})(Nu||(Nu={}));var Lu;(function(n){n.SUPERVISED_FINE_TUNING="SUPERVISED_FINE_TUNING",n.PREFERENCE_TUNING="PREFERENCE_TUNING",n.DISTILLATION="DISTILLATION"})(Lu||(Lu={}));var Uu;(function(n){n.STATE_UNSPECIFIED="STATE_UNSPECIFIED",n.STATE_PENDING="STATE_PENDING",n.STATE_ACTIVE="STATE_ACTIVE",n.STATE_FAILED="STATE_FAILED"})(Uu||(Uu={}));var Fu;(function(n){n.STATE_UNSPECIFIED="STATE_UNSPECIFIED",n.PROCESSING="PROCESSING",n.ACTIVE="ACTIVE",n.FAILED="FAILED"})(Fu||(Fu={}));var Bu;(function(n){n.SOURCE_UNSPECIFIED="SOURCE_UNSPECIFIED",n.UPLOADED="UPLOADED",n.GENERATED="GENERATED",n.REGISTERED="REGISTERED"})(Bu||(Bu={}));var ku;(function(n){n.TURN_COMPLETE_REASON_UNSPECIFIED="TURN_COMPLETE_REASON_UNSPECIFIED",n.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",n.RESPONSE_REJECTED="RESPONSE_REJECTED",n.NEED_MORE_INPUT="NEED_MORE_INPUT"})(ku||(ku={}));var Ou;(function(n){n.MODALITY_UNSPECIFIED="MODALITY_UNSPECIFIED",n.TEXT="TEXT",n.IMAGE="IMAGE",n.VIDEO="VIDEO",n.AUDIO="AUDIO",n.DOCUMENT="DOCUMENT"})(Ou||(Ou={}));var Gu;(function(n){n.VAD_SIGNAL_TYPE_UNSPECIFIED="VAD_SIGNAL_TYPE_UNSPECIFIED",n.VAD_SIGNAL_TYPE_SOS="VAD_SIGNAL_TYPE_SOS",n.VAD_SIGNAL_TYPE_EOS="VAD_SIGNAL_TYPE_EOS"})(Gu||(Gu={}));var Vu;(function(n){n.TYPE_UNSPECIFIED="TYPE_UNSPECIFIED",n.ACTIVITY_START="ACTIVITY_START",n.ACTIVITY_END="ACTIVITY_END"})(Vu||(Vu={}));var Hu;(function(n){n.START_SENSITIVITY_UNSPECIFIED="START_SENSITIVITY_UNSPECIFIED",n.START_SENSITIVITY_HIGH="START_SENSITIVITY_HIGH",n.START_SENSITIVITY_LOW="START_SENSITIVITY_LOW"})(Hu||(Hu={}));var zu;(function(n){n.END_SENSITIVITY_UNSPECIFIED="END_SENSITIVITY_UNSPECIFIED",n.END_SENSITIVITY_HIGH="END_SENSITIVITY_HIGH",n.END_SENSITIVITY_LOW="END_SENSITIVITY_LOW"})(zu||(zu={}));var Wu;(function(n){n.ACTIVITY_HANDLING_UNSPECIFIED="ACTIVITY_HANDLING_UNSPECIFIED",n.START_OF_ACTIVITY_INTERRUPTS="START_OF_ACTIVITY_INTERRUPTS",n.NO_INTERRUPTION="NO_INTERRUPTION"})(Wu||(Wu={}));var qu;(function(n){n.TURN_COVERAGE_UNSPECIFIED="TURN_COVERAGE_UNSPECIFIED",n.TURN_INCLUDES_ONLY_ACTIVITY="TURN_INCLUDES_ONLY_ACTIVITY",n.TURN_INCLUDES_ALL_INPUT="TURN_INCLUDES_ALL_INPUT"})(qu||(qu={}));var Xu;(function(n){n.SCALE_UNSPECIFIED="SCALE_UNSPECIFIED",n.C_MAJOR_A_MINOR="C_MAJOR_A_MINOR",n.D_FLAT_MAJOR_B_FLAT_MINOR="D_FLAT_MAJOR_B_FLAT_MINOR",n.D_MAJOR_B_MINOR="D_MAJOR_B_MINOR",n.E_FLAT_MAJOR_C_MINOR="E_FLAT_MAJOR_C_MINOR",n.E_MAJOR_D_FLAT_MINOR="E_MAJOR_D_FLAT_MINOR",n.F_MAJOR_D_MINOR="F_MAJOR_D_MINOR",n.G_FLAT_MAJOR_E_FLAT_MINOR="G_FLAT_MAJOR_E_FLAT_MINOR",n.G_MAJOR_E_MINOR="G_MAJOR_E_MINOR",n.A_FLAT_MAJOR_F_MINOR="A_FLAT_MAJOR_F_MINOR",n.A_MAJOR_G_FLAT_MINOR="A_MAJOR_G_FLAT_MINOR",n.B_FLAT_MAJOR_G_MINOR="B_FLAT_MAJOR_G_MINOR",n.B_MAJOR_A_FLAT_MINOR="B_MAJOR_A_FLAT_MINOR"})(Xu||(Xu={}));var Yu;(function(n){n.MUSIC_GENERATION_MODE_UNSPECIFIED="MUSIC_GENERATION_MODE_UNSPECIFIED",n.QUALITY="QUALITY",n.DIVERSITY="DIVERSITY",n.VOCALIZATION="VOCALIZATION"})(Yu||(Yu={}));var no;(function(n){n.PLAYBACK_CONTROL_UNSPECIFIED="PLAYBACK_CONTROL_UNSPECIFIED",n.PLAY="PLAY",n.PAUSE="PAUSE",n.STOP="STOP",n.RESET_CONTEXT="RESET_CONTEXT"})(no||(no={}));class La{constructor(e){const t={};for(const i of e.headers.entries())t[i[0]]=i[1];this.headers=t,this.responseInternal=e}json(){return this.responseInternal.json()}}class To{get text(){var e,t,i,o,r,s,a,c;if(((o=(i=(t=(e=this.candidates)===null||e===void 0?void 0:e[0])===null||t===void 0?void 0:t.content)===null||i===void 0?void 0:i.parts)===null||o===void 0?void 0:o.length)===0)return;this.candidates&&this.candidates.length>1&&console.warn("there are multiple candidates in the response, returning text from the first one.");let l="",f=!1;const p=[];for(const h of(c=(a=(s=(r=this.candidates)===null||r===void 0?void 0:r[0])===null||s===void 0?void 0:s.content)===null||a===void 0?void 0:a.parts)!==null&&c!==void 0?c:[]){for(const[m,v]of Object.entries(h))m!=="text"&&m!=="thought"&&m!=="thoughtSignature"&&(v!==null||v!==void 0)&&p.push(m);if(typeof h.text=="string"){if(typeof h.thought=="boolean"&&h.thought)continue;f=!0,l+=h.text}}return p.length>0&&console.warn(`there are non-text parts ${p} in the response, returning concatenation of all text parts. Please refer to the non text parts for a full response from model.`),f?l:void 0}get data(){var e,t,i,o,r,s,a,c;if(((o=(i=(t=(e=this.candidates)===null||e===void 0?void 0:e[0])===null||t===void 0?void 0:t.content)===null||i===void 0?void 0:i.parts)===null||o===void 0?void 0:o.length)===0)return;this.candidates&&this.candidates.length>1&&console.warn("there are multiple candidates in the response, returning data from the first one.");let l="";const f=[];for(const p of(c=(a=(s=(r=this.candidates)===null||r===void 0?void 0:r[0])===null||s===void 0?void 0:s.content)===null||a===void 0?void 0:a.parts)!==null&&c!==void 0?c:[]){for(const[h,m]of Object.entries(p))h!=="inlineData"&&(m!==null||m!==void 0)&&f.push(h);p.inlineData&&typeof p.inlineData.data=="string"&&(l+=atob(p.inlineData.data))}return f.length>0&&console.warn(`there are non-data parts ${f} in the response, returning concatenation of all data parts. Please refer to the non data parts for a full response from model.`),l.length>0?btoa(l):void 0}get functionCalls(){var e,t,i,o,r,s,a,c;if(((o=(i=(t=(e=this.candidates)===null||e===void 0?void 0:e[0])===null||t===void 0?void 0:t.content)===null||i===void 0?void 0:i.parts)===null||o===void 0?void 0:o.length)===0)return;this.candidates&&this.candidates.length>1&&console.warn("there are multiple candidates in the response, returning function calls from the first one.");const l=(c=(a=(s=(r=this.candidates)===null||r===void 0?void 0:r[0])===null||s===void 0?void 0:s.content)===null||a===void 0?void 0:a.parts)===null||c===void 0?void 0:c.filter(f=>f.functionCall).map(f=>f.functionCall).filter(f=>f!==void 0);if((l==null?void 0:l.length)!==0)return l}get executableCode(){var e,t,i,o,r,s,a,c,l;if(((o=(i=(t=(e=this.candidates)===null||e===void 0?void 0:e[0])===null||t===void 0?void 0:t.content)===null||i===void 0?void 0:i.parts)===null||o===void 0?void 0:o.length)===0)return;this.candidates&&this.candidates.length>1&&console.warn("there are multiple candidates in the response, returning executable code from the first one.");const f=(c=(a=(s=(r=this.candidates)===null||r===void 0?void 0:r[0])===null||s===void 0?void 0:s.content)===null||a===void 0?void 0:a.parts)===null||c===void 0?void 0:c.filter(p=>p.executableCode).map(p=>p.executableCode).filter(p=>p!==void 0);if((f==null?void 0:f.length)!==0)return(l=f==null?void 0:f[0])===null||l===void 0?void 0:l.code}get codeExecutionResult(){var e,t,i,o,r,s,a,c,l;if(((o=(i=(t=(e=this.candidates)===null||e===void 0?void 0:e[0])===null||t===void 0?void 0:t.content)===null||i===void 0?void 0:i.parts)===null||o===void 0?void 0:o.length)===0)return;this.candidates&&this.candidates.length>1&&console.warn("there are multiple candidates in the response, returning code execution result from the first one.");const f=(c=(a=(s=(r=this.candidates)===null||r===void 0?void 0:r[0])===null||s===void 0?void 0:s.content)===null||a===void 0?void 0:a.parts)===null||c===void 0?void 0:c.filter(p=>p.codeExecutionResult).map(p=>p.codeExecutionResult).filter(p=>p!==void 0);if((f==null?void 0:f.length)!==0)return(l=f==null?void 0:f[0])===null||l===void 0?void 0:l.output}}class $u{}class Ju{}class Nm{}class Lm{}class Um{}class Fm{}class Ku{}class Zu{}class Qu{}class Bm{}class Yr{_fromAPIResponse({apiResponse:e,_isVertexAI:t}){const i=new Yr;let o;const r=e;return t?o=Em(r):o=xm(r),Object.assign(i,o),i}}class ju{}class ed{}class td{}class nd{}class km{}class Om{}class Gm{}class Yl{_fromAPIResponse({apiResponse:e,_isVertexAI:t}){const i=new Yl,r=bm(e);return Object.assign(i,r),i}}class Vm{}class Hm{}class zm{}class Wm{}class id{}class qm{get text(){var e,t,i;let o="",r=!1;const s=[];for(const a of(i=(t=(e=this.serverContent)===null||e===void 0?void 0:e.modelTurn)===null||t===void 0?void 0:t.parts)!==null&&i!==void 0?i:[]){for(const[c,l]of Object.entries(a))c!=="text"&&c!=="thought"&&l!==null&&s.push(c);if(typeof a.text=="string"){if(typeof a.thought=="boolean"&&a.thought)continue;r=!0,o+=a.text}}return s.length>0&&console.warn(`there are non-text parts ${s} in the response, returning concatenation of all text parts. Please refer to the non text parts for a full response from model.`),r?o:void 0}get data(){var e,t,i;let o="";const r=[];for(const s of(i=(t=(e=this.serverContent)===null||e===void 0?void 0:e.modelTurn)===null||t===void 0?void 0:t.parts)!==null&&i!==void 0?i:[]){for(const[a,c]of Object.entries(s))a!=="inlineData"&&c!==null&&r.push(a);s.inlineData&&typeof s.inlineData.data=="string"&&(o+=atob(s.inlineData.data))}return r.length>0&&console.warn(`there are non-data parts ${r} in the response, returning concatenation of all data parts. Please refer to the non data parts for a full response from model.`),o.length>0?btoa(o):void 0}}class Xm{get audioChunk(){if(this.serverContent&&this.serverContent.audioChunks&&this.serverContent.audioChunks.length>0)return this.serverContent.audioChunks[0]}}class $l{_fromAPIResponse({apiResponse:e,_isVertexAI:t}){const i=new $l,r=hh(e);return Object.assign(i,r),i}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function it(n,e){if(!e||typeof e!="string")throw new Error("model is required and must be a string");if(e.includes("..")||e.includes("?")||e.includes("&"))throw new Error("invalid model parameter");if(n.isVertexAI()){if(e.startsWith("publishers/")||e.startsWith("projects/")||e.startsWith("models/"))return e;if(e.indexOf("/")>=0){const t=e.split("/",2);return`publishers/${t[0]}/models/${t[1]}`}else return`publishers/google/models/${e}`}else return e.startsWith("models/")||e.startsWith("tunedModels/")?e:`models/${e}`}function ph(n,e){const t=it(n,e);return t?t.startsWith("publishers/")&&n.isVertexAI()?`projects/${n.getProject()}/locations/${n.getLocation()}/${t}`:t.startsWith("models/")&&n.isVertexAI()?`projects/${n.getProject()}/locations/${n.getLocation()}/publishers/google/${t}`:t:""}function mh(n){return Array.isArray(n)?n.map(e=>$r(e)):[$r(n)]}function $r(n){if(typeof n=="object"&&n!==null)return n;throw new Error(`Could not parse input as Blob. Unsupported blob type: ${typeof n}`)}function gh(n){const e=$r(n);if(e.mimeType&&e.mimeType.startsWith("image/"))return e;throw new Error(`Unsupported mime type: ${e.mimeType}`)}function _h(n){const e=$r(n);if(e.mimeType&&e.mimeType.startsWith("audio/"))return e;throw new Error(`Unsupported mime type: ${e.mimeType}`)}function od(n){if(n==null)throw new Error("PartUnion is required");if(typeof n=="object")return n;if(typeof n=="string")return{text:n};throw new Error(`Unsupported part type: ${typeof n}`)}function vh(n){if(n==null||Array.isArray(n)&&n.length===0)throw new Error("PartListUnion is required");return Array.isArray(n)?n.map(e=>od(e)):[od(n)]}function Ua(n){return n!=null&&typeof n=="object"&&"parts"in n&&Array.isArray(n.parts)}function rd(n){return n!=null&&typeof n=="object"&&"functionCall"in n}function sd(n){return n!=null&&typeof n=="object"&&"functionResponse"in n}function It(n){if(n==null)throw new Error("ContentUnion is required");return Ua(n)?n:{role:"user",parts:vh(n)}}function Jl(n,e){if(!e)return[];if(n.isVertexAI()&&Array.isArray(e))return e.flatMap(t=>{const i=It(t);return i.parts&&i.parts.length>0&&i.parts[0].text!==void 0?[i.parts[0].text]:[]});if(n.isVertexAI()){const t=It(e);return t.parts&&t.parts.length>0&&t.parts[0].text!==void 0?[t.parts[0].text]:[]}return Array.isArray(e)?e.map(t=>It(t)):[It(e)]}function Qt(n){if(n==null||Array.isArray(n)&&n.length===0)throw new Error("contents are required");if(!Array.isArray(n)){if(rd(n)||sd(n))throw new Error("To specify functionCall or functionResponse parts, please wrap them in a Content object, specifying the role for them");return[It(n)]}const e=[],t=[],i=Ua(n[0]);for(const o of n){const r=Ua(o);if(r!=i)throw new Error("Mixing Content and Parts is not supported, please group the parts into a the appropriate Content objects and specify the roles for them");if(r)e.push(o);else{if(rd(o)||sd(o))throw new Error("To specify functionCall or functionResponse parts, please wrap them, and any other parts, in Content objects as appropriate, specifying the role for them");t.push(o)}}return i||e.push({role:"user",parts:vh(t)}),e}function Ym(n,e){n.includes("null")&&(e.nullable=!0);const t=n.filter(i=>i!=="null");if(t.length===1)e.type=Object.values(si).includes(t[0].toUpperCase())?t[0].toUpperCase():si.TYPE_UNSPECIFIED;else{e.anyOf=[];for(const i of t)e.anyOf.push({type:Object.values(si).includes(i.toUpperCase())?i.toUpperCase():si.TYPE_UNSPECIFIED})}}function ro(n){const e={},t=["items"],i=["anyOf"],o=["properties"];if(n.type&&n.anyOf)throw new Error("type and anyOf cannot be both populated.");const r=n.anyOf;r!=null&&r.length==2&&(r[0].type==="null"?(e.nullable=!0,n=r[1]):r[1].type==="null"&&(e.nullable=!0,n=r[0])),n.type instanceof Array&&Ym(n.type,e);for(const[s,a]of Object.entries(n))if(a!=null)if(s=="type"){if(a==="null")throw new Error("type: null can not be the only possible type for the field.");if(a instanceof Array)continue;e.type=Object.values(si).includes(a.toUpperCase())?a.toUpperCase():si.TYPE_UNSPECIFIED}else if(t.includes(s))e[s]=ro(a);else if(i.includes(s)){const c=[];for(const l of a){if(l.type=="null"){e.nullable=!0;continue}c.push(ro(l))}e[s]=c}else if(o.includes(s)){const c={};for(const[l,f]of Object.entries(a))c[l]=ro(f);e[s]=c}else{if(s==="additionalProperties")continue;e[s]=a}return e}function Kl(n){return ro(n)}function Zl(n){if(typeof n=="object")return n;if(typeof n=="string")return{voiceConfig:{prebuiltVoiceConfig:{voiceName:n}}};throw new Error(`Unsupported speechConfig type: ${typeof n}`)}function Ql(n){if("multiSpeakerVoiceConfig"in n)throw new Error("multiSpeakerVoiceConfig is not supported in the live API.");return n}function vo(n){if(n.functionDeclarations)for(const e of n.functionDeclarations)e.parameters&&(Object.keys(e.parameters).includes("$schema")?e.parametersJsonSchema||(e.parametersJsonSchema=e.parameters,delete e.parameters):e.parameters=ro(e.parameters)),e.response&&(Object.keys(e.response).includes("$schema")?e.responseJsonSchema||(e.responseJsonSchema=e.response,delete e.response):e.response=ro(e.response));return n}function yo(n){if(n==null)throw new Error("tools is required");if(!Array.isArray(n))throw new Error("tools is required and must be an array of Tools");const e=[];for(const t of n)e.push(t);return e}function $m(n,e,t,i=1){const o=!e.startsWith(`${t}/`)&&e.split("/").length===i;return n.isVertexAI()?e.startsWith("projects/")?e:e.startsWith("locations/")?`projects/${n.getProject()}/${e}`:e.startsWith(`${t}/`)?`projects/${n.getProject()}/locations/${n.getLocation()}/${e}`:o?`projects/${n.getProject()}/locations/${n.getLocation()}/${t}/${e}`:e:o?`${t}/${e}`:e}function Yn(n,e){if(typeof e!="string")throw new Error("name must be a string");return $m(n,e,"cachedContents")}function yh(n){switch(n){case"STATE_UNSPECIFIED":return"JOB_STATE_UNSPECIFIED";case"CREATING":return"JOB_STATE_RUNNING";case"ACTIVE":return"JOB_STATE_SUCCEEDED";case"FAILED":return"JOB_STATE_FAILED";default:return n}}function fi(n){return Xl(n)}function Jm(n){return n!=null&&typeof n=="object"&&"name"in n}function Km(n){return n!=null&&typeof n=="object"&&"video"in n}function Zm(n){return n!=null&&typeof n=="object"&&"uri"in n}function xh(n){var e;let t;if(Jm(n)&&(t=n.name),!(Zm(n)&&(t=n.uri,t===void 0))&&!(Km(n)&&(t=(e=n.video)===null||e===void 0?void 0:e.uri,t===void 0))){if(typeof n=="string"&&(t=n),t===void 0)throw new Error("Could not extract file name from the provided input.");if(t.startsWith("https://")){const o=t.split("files/")[1].match(/[a-z0-9]+/);if(o===null)throw new Error(`Could not extract file name from URI ${t}`);t=o[0]}else t.startsWith("files/")&&(t=t.split("files/")[1]);return t}}function Eh(n,e){let t;return n.isVertexAI()?t=e?"publishers/google/models":"models":t=e?"models":"tunedModels",t}function Sh(n){for(const e of["models","tunedModels","publisherModels"])if(Qm(n,e))return n[e];return[]}function Qm(n,e){return n!==null&&typeof n=="object"&&e in n}function jm(n,e={}){const t=n,i={name:t.name,description:t.description,parametersJsonSchema:t.inputSchema};return t.outputSchema&&(i.responseJsonSchema=t.outputSchema),e.behavior&&(i.behavior=e.behavior),{functionDeclarations:[i]}}function eg(n,e={}){const t=[],i=new Set;for(const o of n){const r=o.name;if(i.has(r))throw new Error(`Duplicate function name ${r} found in MCP tools. Please ensure function names are unique.`);i.add(r);const s=jm(o,e);s.functionDeclarations&&t.push(...s.functionDeclarations)}return{functionDeclarations:t}}function Th(n,e){let t;if(typeof e=="string")if(n.isVertexAI())if(e.startsWith("gs://"))t={format:"jsonl",gcsUri:[e]};else if(e.startsWith("bq://"))t={format:"bigquery",bigqueryUri:e};else throw new Error(`Unsupported string source for Vertex AI: ${e}`);else if(e.startsWith("files/"))t={fileName:e};else throw new Error(`Unsupported string source for Gemini API: ${e}`);else if(Array.isArray(e)){if(n.isVertexAI())throw new Error("InlinedRequest[] is not supported in Vertex AI.");t={inlinedRequests:e}}else t=e;const i=[t.gcsUri,t.bigqueryUri].filter(Boolean).length,o=[t.inlinedRequests,t.fileName].filter(Boolean).length;if(n.isVertexAI()){if(o>0||i!==1)throw new Error("Exactly one of `gcsUri` or `bigqueryUri` must be set for Vertex AI.")}else if(i>0||o!==1)throw new Error("Exactly one of `inlinedRequests`, `fileName`, must be set for Gemini API.");return t}function tg(n){if(typeof n!="string")return n;const e=n;if(e.startsWith("gs://"))return{format:"jsonl",gcsUri:e};if(e.startsWith("bq://"))return{format:"bigquery",bigqueryUri:e};throw new Error(`Unsupported destination: ${e}`)}function Mh(n){if(typeof n!="object"||n===null)return{};const e=n,t=e.inlinedResponses;if(typeof t!="object"||t===null)return n;const o=t.inlinedResponses;if(!Array.isArray(o)||o.length===0)return n;let r=!1;for(const s of o){if(typeof s!="object"||s===null)continue;const c=s.response;if(typeof c!="object"||c===null)continue;if(c.embedding!==void 0){r=!0;break}}return r&&(e.inlinedEmbedContentResponses=e.inlinedResponses,delete e.inlinedResponses),n}function xo(n,e){const t=e;if(!n.isVertexAI()){if(/batches\/[^/]+$/.test(t))return t.split("/").pop();throw new Error(`Invalid batch job name: ${t}.`)}if(/^projects\/[^/]+\/locations\/[^/]+\/batchPredictionJobs\/[^/]+$/.test(t))return t.split("/").pop();if(/^\d+$/.test(t))return t;throw new Error(`Invalid batch job name: ${t}.`)}function Ah(n){const e=n;return e==="BATCH_STATE_UNSPECIFIED"?"JOB_STATE_UNSPECIFIED":e==="BATCH_STATE_PENDING"?"JOB_STATE_PENDING":e==="BATCH_STATE_RUNNING"?"JOB_STATE_RUNNING":e==="BATCH_STATE_SUCCEEDED"?"JOB_STATE_SUCCEEDED":e==="BATCH_STATE_FAILED"?"JOB_STATE_FAILED":e==="BATCH_STATE_CANCELLED"?"JOB_STATE_CANCELLED":e==="BATCH_STATE_EXPIRED"?"JOB_STATE_EXPIRED":e}function ng(n){return n.includes("gemini")&&n!=="gemini-embedding-001"||n.includes("maas")}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function ig(n){const e={},t=u(n,["apiKey"]);if(t!=null&&d(e,["apiKey"],t),u(n,["apiKeyConfig"])!==void 0)throw new Error("apiKeyConfig parameter is not supported in Gemini API.");if(u(n,["authType"])!==void 0)throw new Error("authType parameter is not supported in Gemini API.");if(u(n,["googleServiceAccountConfig"])!==void 0)throw new Error("googleServiceAccountConfig parameter is not supported in Gemini API.");if(u(n,["httpBasicAuthConfig"])!==void 0)throw new Error("httpBasicAuthConfig parameter is not supported in Gemini API.");if(u(n,["oauthConfig"])!==void 0)throw new Error("oauthConfig parameter is not supported in Gemini API.");if(u(n,["oidcConfig"])!==void 0)throw new Error("oidcConfig parameter is not supported in Gemini API.");return e}function og(n){const e={},t=u(n,["responsesFile"]);t!=null&&d(e,["fileName"],t);const i=u(n,["inlinedResponses","inlinedResponses"]);if(i!=null){let r=i;Array.isArray(r)&&(r=r.map(s=>kg(s))),d(e,["inlinedResponses"],r)}const o=u(n,["inlinedEmbedContentResponses","inlinedResponses"]);if(o!=null){let r=o;Array.isArray(r)&&(r=r.map(s=>s)),d(e,["inlinedEmbedContentResponses"],r)}return e}function rg(n){const e={},t=u(n,["predictionsFormat"]);t!=null&&d(e,["format"],t);const i=u(n,["gcsDestination","outputUriPrefix"]);i!=null&&d(e,["gcsUri"],i);const o=u(n,["bigqueryDestination","outputUri"]);return o!=null&&d(e,["bigqueryUri"],o),e}function sg(n){const e={},t=u(n,["format"]);t!=null&&d(e,["predictionsFormat"],t);const i=u(n,["gcsUri"]);i!=null&&d(e,["gcsDestination","outputUriPrefix"],i);const o=u(n,["bigqueryUri"]);if(o!=null&&d(e,["bigqueryDestination","outputUri"],o),u(n,["fileName"])!==void 0)throw new Error("fileName parameter is not supported in Vertex AI.");if(u(n,["inlinedResponses"])!==void 0)throw new Error("inlinedResponses parameter is not supported in Vertex AI.");if(u(n,["inlinedEmbedContentResponses"])!==void 0)throw new Error("inlinedEmbedContentResponses parameter is not supported in Vertex AI.");return e}function Ur(n){const e={},t=u(n,["name"]);t!=null&&d(e,["name"],t);const i=u(n,["metadata","displayName"]);i!=null&&d(e,["displayName"],i);const o=u(n,["metadata","state"]);o!=null&&d(e,["state"],Ah(o));const r=u(n,["metadata","createTime"]);r!=null&&d(e,["createTime"],r);const s=u(n,["metadata","endTime"]);s!=null&&d(e,["endTime"],s);const a=u(n,["metadata","updateTime"]);a!=null&&d(e,["updateTime"],a);const c=u(n,["metadata","model"]);c!=null&&d(e,["model"],c);const l=u(n,["metadata","output"]);return l!=null&&d(e,["dest"],og(Mh(l))),e}function Fa(n){const e={},t=u(n,["name"]);t!=null&&d(e,["name"],t);const i=u(n,["displayName"]);i!=null&&d(e,["displayName"],i);const o=u(n,["state"]);o!=null&&d(e,["state"],Ah(o));const r=u(n,["error"]);r!=null&&d(e,["error"],r);const s=u(n,["createTime"]);s!=null&&d(e,["createTime"],s);const a=u(n,["startTime"]);a!=null&&d(e,["startTime"],a);const c=u(n,["endTime"]);c!=null&&d(e,["endTime"],c);const l=u(n,["updateTime"]);l!=null&&d(e,["updateTime"],l);const f=u(n,["model"]);f!=null&&d(e,["model"],f);const p=u(n,["inputConfig"]);p!=null&&d(e,["src"],ag(p));const h=u(n,["outputConfig"]);h!=null&&d(e,["dest"],rg(Mh(h)));const m=u(n,["completionStats"]);return m!=null&&d(e,["completionStats"],m),e}function ag(n){const e={},t=u(n,["instancesFormat"]);t!=null&&d(e,["format"],t);const i=u(n,["gcsSource","uris"]);i!=null&&d(e,["gcsUri"],i);const o=u(n,["bigquerySource","inputUri"]);return o!=null&&d(e,["bigqueryUri"],o),e}function lg(n,e){const t={};if(u(e,["format"])!==void 0)throw new Error("format parameter is not supported in Gemini API.");if(u(e,["gcsUri"])!==void 0)throw new Error("gcsUri parameter is not supported in Gemini API.");if(u(e,["bigqueryUri"])!==void 0)throw new Error("bigqueryUri parameter is not supported in Gemini API.");const i=u(e,["fileName"]);i!=null&&d(t,["fileName"],i);const o=u(e,["inlinedRequests"]);if(o!=null){let r=o;Array.isArray(r)&&(r=r.map(s=>Bg(n,s))),d(t,["requests","requests"],r)}return t}function cg(n){const e={},t=u(n,["format"]);t!=null&&d(e,["instancesFormat"],t);const i=u(n,["gcsUri"]);i!=null&&d(e,["gcsSource","uris"],i);const o=u(n,["bigqueryUri"]);if(o!=null&&d(e,["bigquerySource","inputUri"],o),u(n,["fileName"])!==void 0)throw new Error("fileName parameter is not supported in Vertex AI.");if(u(n,["inlinedRequests"])!==void 0)throw new Error("inlinedRequests parameter is not supported in Vertex AI.");return e}function ug(n){const e={},t=u(n,["data"]);if(t!=null&&d(e,["data"],t),u(n,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const i=u(n,["mimeType"]);return i!=null&&d(e,["mimeType"],i),e}function dg(n,e){const t={},i=u(e,["name"]);return i!=null&&d(t,["_url","name"],xo(n,i)),t}function fg(n,e){const t={},i=u(e,["name"]);return i!=null&&d(t,["_url","name"],xo(n,i)),t}function hg(n){const e={},t=u(n,["content"]);t!=null&&d(e,["content"],t);const i=u(n,["citationMetadata"]);i!=null&&d(e,["citationMetadata"],pg(i));const o=u(n,["tokenCount"]);o!=null&&d(e,["tokenCount"],o);const r=u(n,["finishReason"]);r!=null&&d(e,["finishReason"],r);const s=u(n,["groundingMetadata"]);s!=null&&d(e,["groundingMetadata"],s);const a=u(n,["avgLogprobs"]);a!=null&&d(e,["avgLogprobs"],a);const c=u(n,["index"]);c!=null&&d(e,["index"],c);const l=u(n,["logprobsResult"]);l!=null&&d(e,["logprobsResult"],l);const f=u(n,["safetyRatings"]);if(f!=null){let h=f;Array.isArray(h)&&(h=h.map(m=>m)),d(e,["safetyRatings"],h)}const p=u(n,["urlContextMetadata"]);return p!=null&&d(e,["urlContextMetadata"],p),e}function pg(n){const e={},t=u(n,["citationSources"]);if(t!=null){let i=t;Array.isArray(i)&&(i=i.map(o=>o)),d(e,["citations"],i)}return e}function Ch(n){const e={},t=u(n,["parts"]);if(t!=null){let o=t;Array.isArray(o)&&(o=o.map(r=>qg(r))),d(e,["parts"],o)}const i=u(n,["role"]);return i!=null&&d(e,["role"],i),e}function mg(n,e){const t={},i=u(n,["displayName"]);if(e!==void 0&&i!=null&&d(e,["batch","displayName"],i),u(n,["dest"])!==void 0)throw new Error("dest parameter is not supported in Gemini API.");return t}function gg(n,e){const t={},i=u(n,["displayName"]);e!==void 0&&i!=null&&d(e,["displayName"],i);const o=u(n,["dest"]);return e!==void 0&&o!=null&&d(e,["outputConfig"],sg(tg(o))),t}function ad(n,e){const t={},i=u(e,["model"]);i!=null&&d(t,["_url","model"],it(n,i));const o=u(e,["src"]);o!=null&&d(t,["batch","inputConfig"],lg(n,Th(n,o)));const r=u(e,["config"]);return r!=null&&mg(r,t),t}function _g(n,e){const t={},i=u(e,["model"]);i!=null&&d(t,["model"],it(n,i));const o=u(e,["src"]);o!=null&&d(t,["inputConfig"],cg(Th(n,o)));const r=u(e,["config"]);return r!=null&&gg(r,t),t}function vg(n,e){const t={},i=u(n,["displayName"]);return e!==void 0&&i!=null&&d(e,["batch","displayName"],i),t}function yg(n,e){const t={},i=u(e,["model"]);i!=null&&d(t,["_url","model"],it(n,i));const o=u(e,["src"]);o!=null&&d(t,["batch","inputConfig"],Cg(n,o));const r=u(e,["config"]);return r!=null&&vg(r,t),t}function xg(n,e){const t={},i=u(e,["name"]);return i!=null&&d(t,["_url","name"],xo(n,i)),t}function Eg(n,e){const t={},i=u(e,["name"]);return i!=null&&d(t,["_url","name"],xo(n,i)),t}function Sg(n){const e={},t=u(n,["sdkHttpResponse"]);t!=null&&d(e,["sdkHttpResponse"],t);const i=u(n,["name"]);i!=null&&d(e,["name"],i);const o=u(n,["done"]);o!=null&&d(e,["done"],o);const r=u(n,["error"]);return r!=null&&d(e,["error"],r),e}function Tg(n){const e={},t=u(n,["sdkHttpResponse"]);t!=null&&d(e,["sdkHttpResponse"],t);const i=u(n,["name"]);i!=null&&d(e,["name"],i);const o=u(n,["done"]);o!=null&&d(e,["done"],o);const r=u(n,["error"]);return r!=null&&d(e,["error"],r),e}function Mg(n,e){const t={},i=u(e,["contents"]);if(i!=null){let r=Jl(n,i);Array.isArray(r)&&(r=r.map(s=>s)),d(t,["requests[]","request","content"],r)}const o=u(e,["config"]);return o!=null&&(d(t,["_self"],Ag(o,t)),vm(t,{"requests[].*":"requests[].request.*"})),t}function Ag(n,e){const t={},i=u(n,["taskType"]);e!==void 0&&i!=null&&d(e,["requests[]","taskType"],i);const o=u(n,["title"]);e!==void 0&&o!=null&&d(e,["requests[]","title"],o);const r=u(n,["outputDimensionality"]);if(e!==void 0&&r!=null&&d(e,["requests[]","outputDimensionality"],r),u(n,["mimeType"])!==void 0)throw new Error("mimeType parameter is not supported in Gemini API.");if(u(n,["autoTruncate"])!==void 0)throw new Error("autoTruncate parameter is not supported in Gemini API.");return t}function Cg(n,e){const t={},i=u(e,["fileName"]);i!=null&&d(t,["file_name"],i);const o=u(e,["inlinedRequests"]);return o!=null&&d(t,["requests"],Mg(n,o)),t}function wg(n){const e={};if(u(n,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const t=u(n,["fileUri"]);t!=null&&d(e,["fileUri"],t);const i=u(n,["mimeType"]);return i!=null&&d(e,["mimeType"],i),e}function bg(n){const e={},t=u(n,["id"]);t!=null&&d(e,["id"],t);const i=u(n,["args"]);i!=null&&d(e,["args"],i);const o=u(n,["name"]);if(o!=null&&d(e,["name"],o),u(n,["partialArgs"])!==void 0)throw new Error("partialArgs parameter is not supported in Gemini API.");if(u(n,["willContinue"])!==void 0)throw new Error("willContinue parameter is not supported in Gemini API.");return e}function Ig(n){const e={},t=u(n,["allowedFunctionNames"]);t!=null&&d(e,["allowedFunctionNames"],t);const i=u(n,["mode"]);if(i!=null&&d(e,["mode"],i),u(n,["streamFunctionCallArguments"])!==void 0)throw new Error("streamFunctionCallArguments parameter is not supported in Gemini API.");return e}function Rg(n,e,t){const i={},o=u(e,["systemInstruction"]);t!==void 0&&o!=null&&d(t,["systemInstruction"],Ch(It(o)));const r=u(e,["temperature"]);r!=null&&d(i,["temperature"],r);const s=u(e,["topP"]);s!=null&&d(i,["topP"],s);const a=u(e,["topK"]);a!=null&&d(i,["topK"],a);const c=u(e,["candidateCount"]);c!=null&&d(i,["candidateCount"],c);const l=u(e,["maxOutputTokens"]);l!=null&&d(i,["maxOutputTokens"],l);const f=u(e,["stopSequences"]);f!=null&&d(i,["stopSequences"],f);const p=u(e,["responseLogprobs"]);p!=null&&d(i,["responseLogprobs"],p);const h=u(e,["logprobs"]);h!=null&&d(i,["logprobs"],h);const m=u(e,["presencePenalty"]);m!=null&&d(i,["presencePenalty"],m);const v=u(e,["frequencyPenalty"]);v!=null&&d(i,["frequencyPenalty"],v);const y=u(e,["seed"]);y!=null&&d(i,["seed"],y);const g=u(e,["responseMimeType"]);g!=null&&d(i,["responseMimeType"],g);const _=u(e,["responseSchema"]);_!=null&&d(i,["responseSchema"],Kl(_));const E=u(e,["responseJsonSchema"]);if(E!=null&&d(i,["responseJsonSchema"],E),u(e,["routingConfig"])!==void 0)throw new Error("routingConfig parameter is not supported in Gemini API.");if(u(e,["modelSelectionConfig"])!==void 0)throw new Error("modelSelectionConfig parameter is not supported in Gemini API.");const A=u(e,["safetySettings"]);if(t!==void 0&&A!=null){let L=A;Array.isArray(L)&&(L=L.map(k=>Xg(k))),d(t,["safetySettings"],L)}const S=u(e,["tools"]);if(t!==void 0&&S!=null){let L=yo(S);Array.isArray(L)&&(L=L.map(k=>$g(vo(k)))),d(t,["tools"],L)}const R=u(e,["toolConfig"]);if(t!==void 0&&R!=null&&d(t,["toolConfig"],Yg(R)),u(e,["labels"])!==void 0)throw new Error("labels parameter is not supported in Gemini API.");const C=u(e,["cachedContent"]);t!==void 0&&C!=null&&d(t,["cachedContent"],Yn(n,C));const b=u(e,["responseModalities"]);b!=null&&d(i,["responseModalities"],b);const x=u(e,["mediaResolution"]);x!=null&&d(i,["mediaResolution"],x);const M=u(e,["speechConfig"]);if(M!=null&&d(i,["speechConfig"],Zl(M)),u(e,["audioTimestamp"])!==void 0)throw new Error("audioTimestamp parameter is not supported in Gemini API.");const B=u(e,["thinkingConfig"]);B!=null&&d(i,["thinkingConfig"],B);const I=u(e,["imageConfig"]);I!=null&&d(i,["imageConfig"],Fg(I));const N=u(e,["enableEnhancedCivicAnswers"]);if(N!=null&&d(i,["enableEnhancedCivicAnswers"],N),u(e,["modelArmorConfig"])!==void 0)throw new Error("modelArmorConfig parameter is not supported in Gemini API.");return i}function Pg(n){const e={},t=u(n,["sdkHttpResponse"]);t!=null&&d(e,["sdkHttpResponse"],t);const i=u(n,["candidates"]);if(i!=null){let c=i;Array.isArray(c)&&(c=c.map(l=>hg(l))),d(e,["candidates"],c)}const o=u(n,["modelVersion"]);o!=null&&d(e,["modelVersion"],o);const r=u(n,["promptFeedback"]);r!=null&&d(e,["promptFeedback"],r);const s=u(n,["responseId"]);s!=null&&d(e,["responseId"],s);const a=u(n,["usageMetadata"]);return a!=null&&d(e,["usageMetadata"],a),e}function Dg(n,e){const t={},i=u(e,["name"]);return i!=null&&d(t,["_url","name"],xo(n,i)),t}function Ng(n,e){const t={},i=u(e,["name"]);return i!=null&&d(t,["_url","name"],xo(n,i)),t}function Lg(n){const e={},t=u(n,["authConfig"]);t!=null&&d(e,["authConfig"],ig(t));const i=u(n,["enableWidget"]);return i!=null&&d(e,["enableWidget"],i),e}function Ug(n){const e={},t=u(n,["searchTypes"]);if(t!=null&&d(e,["searchTypes"],t),u(n,["blockingConfidence"])!==void 0)throw new Error("blockingConfidence parameter is not supported in Gemini API.");if(u(n,["excludeDomains"])!==void 0)throw new Error("excludeDomains parameter is not supported in Gemini API.");const i=u(n,["timeRangeFilter"]);return i!=null&&d(e,["timeRangeFilter"],i),e}function Fg(n){const e={},t=u(n,["aspectRatio"]);t!=null&&d(e,["aspectRatio"],t);const i=u(n,["imageSize"]);if(i!=null&&d(e,["imageSize"],i),u(n,["personGeneration"])!==void 0)throw new Error("personGeneration parameter is not supported in Gemini API.");if(u(n,["prominentPeople"])!==void 0)throw new Error("prominentPeople parameter is not supported in Gemini API.");if(u(n,["outputMimeType"])!==void 0)throw new Error("outputMimeType parameter is not supported in Gemini API.");if(u(n,["outputCompressionQuality"])!==void 0)throw new Error("outputCompressionQuality parameter is not supported in Gemini API.");if(u(n,["imageOutputOptions"])!==void 0)throw new Error("imageOutputOptions parameter is not supported in Gemini API.");return e}function Bg(n,e){const t={},i=u(e,["model"]);i!=null&&d(t,["request","model"],it(n,i));const o=u(e,["contents"]);if(o!=null){let a=Qt(o);Array.isArray(a)&&(a=a.map(c=>Ch(c))),d(t,["request","contents"],a)}const r=u(e,["metadata"]);r!=null&&d(t,["metadata"],r);const s=u(e,["config"]);return s!=null&&d(t,["request","generationConfig"],Rg(n,s,u(t,["request"],{}))),t}function kg(n){const e={},t=u(n,["response"]);t!=null&&d(e,["response"],Pg(t));const i=u(n,["metadata"]);i!=null&&d(e,["metadata"],i);const o=u(n,["error"]);return o!=null&&d(e,["error"],o),e}function Og(n,e){const t={},i=u(n,["pageSize"]);e!==void 0&&i!=null&&d(e,["_query","pageSize"],i);const o=u(n,["pageToken"]);if(e!==void 0&&o!=null&&d(e,["_query","pageToken"],o),u(n,["filter"])!==void 0)throw new Error("filter parameter is not supported in Gemini API.");return t}function Gg(n,e){const t={},i=u(n,["pageSize"]);e!==void 0&&i!=null&&d(e,["_query","pageSize"],i);const o=u(n,["pageToken"]);e!==void 0&&o!=null&&d(e,["_query","pageToken"],o);const r=u(n,["filter"]);return e!==void 0&&r!=null&&d(e,["_query","filter"],r),t}function Vg(n){const e={},t=u(n,["config"]);return t!=null&&Og(t,e),e}function Hg(n){const e={},t=u(n,["config"]);return t!=null&&Gg(t,e),e}function zg(n){const e={},t=u(n,["sdkHttpResponse"]);t!=null&&d(e,["sdkHttpResponse"],t);const i=u(n,["nextPageToken"]);i!=null&&d(e,["nextPageToken"],i);const o=u(n,["operations"]);if(o!=null){let r=o;Array.isArray(r)&&(r=r.map(s=>Ur(s))),d(e,["batchJobs"],r)}return e}function Wg(n){const e={},t=u(n,["sdkHttpResponse"]);t!=null&&d(e,["sdkHttpResponse"],t);const i=u(n,["nextPageToken"]);i!=null&&d(e,["nextPageToken"],i);const o=u(n,["batchPredictionJobs"]);if(o!=null){let r=o;Array.isArray(r)&&(r=r.map(s=>Fa(s))),d(e,["batchJobs"],r)}return e}function qg(n){const e={},t=u(n,["mediaResolution"]);t!=null&&d(e,["mediaResolution"],t);const i=u(n,["codeExecutionResult"]);i!=null&&d(e,["codeExecutionResult"],i);const o=u(n,["executableCode"]);o!=null&&d(e,["executableCode"],o);const r=u(n,["fileData"]);r!=null&&d(e,["fileData"],wg(r));const s=u(n,["functionCall"]);s!=null&&d(e,["functionCall"],bg(s));const a=u(n,["functionResponse"]);a!=null&&d(e,["functionResponse"],a);const c=u(n,["inlineData"]);c!=null&&d(e,["inlineData"],ug(c));const l=u(n,["text"]);l!=null&&d(e,["text"],l);const f=u(n,["thought"]);f!=null&&d(e,["thought"],f);const p=u(n,["thoughtSignature"]);p!=null&&d(e,["thoughtSignature"],p);const h=u(n,["videoMetadata"]);return h!=null&&d(e,["videoMetadata"],h),e}function Xg(n){const e={},t=u(n,["category"]);if(t!=null&&d(e,["category"],t),u(n,["method"])!==void 0)throw new Error("method parameter is not supported in Gemini API.");const i=u(n,["threshold"]);return i!=null&&d(e,["threshold"],i),e}function Yg(n){const e={},t=u(n,["retrievalConfig"]);t!=null&&d(e,["retrievalConfig"],t);const i=u(n,["functionCallingConfig"]);return i!=null&&d(e,["functionCallingConfig"],Ig(i)),e}function $g(n){const e={};if(u(n,["retrieval"])!==void 0)throw new Error("retrieval parameter is not supported in Gemini API.");const t=u(n,["computerUse"]);t!=null&&d(e,["computerUse"],t);const i=u(n,["fileSearch"]);i!=null&&d(e,["fileSearch"],i);const o=u(n,["googleSearch"]);o!=null&&d(e,["googleSearch"],Ug(o));const r=u(n,["googleMaps"]);r!=null&&d(e,["googleMaps"],Lg(r));const s=u(n,["codeExecution"]);if(s!=null&&d(e,["codeExecution"],s),u(n,["enterpriseWebSearch"])!==void 0)throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");const a=u(n,["functionDeclarations"]);if(a!=null){let p=a;Array.isArray(p)&&(p=p.map(h=>h)),d(e,["functionDeclarations"],p)}const c=u(n,["googleSearchRetrieval"]);if(c!=null&&d(e,["googleSearchRetrieval"],c),u(n,["parallelAiSearch"])!==void 0)throw new Error("parallelAiSearch parameter is not supported in Gemini API.");const l=u(n,["urlContext"]);l!=null&&d(e,["urlContext"],l);const f=u(n,["mcpServers"]);if(f!=null){let p=f;Array.isArray(p)&&(p=p.map(h=>h)),d(e,["mcpServers"],p)}return e}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var Hn;(function(n){n.PAGED_ITEM_BATCH_JOBS="batchJobs",n.PAGED_ITEM_MODELS="models",n.PAGED_ITEM_TUNING_JOBS="tuningJobs",n.PAGED_ITEM_FILES="files",n.PAGED_ITEM_CACHED_CONTENTS="cachedContents",n.PAGED_ITEM_FILE_SEARCH_STORES="fileSearchStores",n.PAGED_ITEM_DOCUMENTS="documents"})(Hn||(Hn={}));class Ri{constructor(e,t,i,o){this.pageInternal=[],this.paramsInternal={},this.requestInternal=t,this.init(e,i,o)}init(e,t,i){var o,r;this.nameInternal=e,this.pageInternal=t[this.nameInternal]||[],this.sdkHttpResponseInternal=t==null?void 0:t.sdkHttpResponse,this.idxInternal=0;let s={config:{}};!i||Object.keys(i).length===0?s={config:{}}:typeof i=="object"?s=Object.assign({},i):s=i,s.config&&(s.config.pageToken=t.nextPageToken),this.paramsInternal=s,this.pageInternalSize=(r=(o=s.config)===null||o===void 0?void 0:o.pageSize)!==null&&r!==void 0?r:this.pageInternal.length}initNextPage(e){this.init(this.nameInternal,e,this.paramsInternal)}get page(){return this.pageInternal}get name(){return this.nameInternal}get pageSize(){return this.pageInternalSize}get sdkHttpResponse(){return this.sdkHttpResponseInternal}get params(){return this.paramsInternal}get pageLength(){return this.pageInternal.length}getItem(e){return this.pageInternal[e]}[Symbol.asyncIterator](){return{next:async()=>{if(this.idxInternal>=this.pageLength)if(this.hasNextPage())await this.nextPage();else return{value:void 0,done:!0};const e=this.getItem(this.idxInternal);return this.idxInternal+=1,{value:e,done:!1}},return:async()=>({value:void 0,done:!0})}}async nextPage(){if(!this.hasNextPage())throw new Error("No more pages to fetch.");const e=await this.requestInternal(this.params);return this.initNextPage(e),this.page}hasNextPage(){var e;return((e=this.params.config)===null||e===void 0?void 0:e.pageToken)!==void 0}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Jg extends Xn{constructor(e){super(),this.apiClient=e,this.list=async(t={})=>new Ri(Hn.PAGED_ITEM_BATCH_JOBS,i=>this.listInternal(i),await this.listInternal(t),t),this.create=async t=>(this.apiClient.isVertexAI()&&(t.config=this.formatDestination(t.src,t.config)),this.createInternal(t)),this.createEmbeddings=async t=>{if(console.warn("batches.createEmbeddings() is experimental and may change without notice."),this.apiClient.isVertexAI())throw new Error("Vertex AI does not support batches.createEmbeddings.");return this.createEmbeddingsInternal(t)}}createInlinedGenerateContentRequest(e){const t=ad(this.apiClient,e),i=t._url,o=me("{model}:batchGenerateContent",i),a=t.batch.inputConfig.requests,c=a.requests,l=[];for(const f of c){const p=Object.assign({},f);if(p.systemInstruction){const h=p.systemInstruction;delete p.systemInstruction;const m=p.request;m.systemInstruction=h,p.request=m}l.push(p)}return a.requests=l,delete t.config,delete t._url,delete t._query,{path:o,body:t}}getGcsUri(e){if(typeof e=="string")return e.startsWith("gs://")?e:void 0;if(!Array.isArray(e)&&e.gcsUri&&e.gcsUri.length>0)return e.gcsUri[0]}getBigqueryUri(e){if(typeof e=="string")return e.startsWith("bq://")?e:void 0;if(!Array.isArray(e))return e.bigqueryUri}formatDestination(e,t){const i=t?Object.assign({},t):{},o=Date.now().toString();if(i.displayName||(i.displayName=`genaiBatchJob_${o}`),i.dest===void 0){const r=this.getGcsUri(e),s=this.getBigqueryUri(e);if(r)r.endsWith(".jsonl")?i.dest=`${r.slice(0,-6)}/dest`:i.dest=`${r}_dest_${o}`;else if(s)i.dest=`${s}_dest_${o}`;else throw new Error("Unsupported source for Vertex AI: No GCS or BigQuery URI found.")}return i}async createInternal(e){var t,i,o,r;let s,a="",c={};if(this.apiClient.isVertexAI()){const l=_g(this.apiClient,e);return a=me("batchPredictionJobs",l._url),c=l._query,delete l._url,delete l._query,s=this.apiClient.request({path:a,queryParams:c,body:JSON.stringify(l),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json()),s.then(f=>Fa(f))}else{const l=ad(this.apiClient,e);return a=me("{model}:batchGenerateContent",l._url),c=l._query,delete l._url,delete l._query,s=this.apiClient.request({path:a,queryParams:c,body:JSON.stringify(l),httpMethod:"POST",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(f=>f.json()),s.then(f=>Ur(f))}}async createEmbeddingsInternal(e){var t,i;let o,r="",s={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const a=yg(this.apiClient,e);return r=me("{model}:asyncBatchEmbedContent",a._url),s=a._query,delete a._url,delete a._query,o=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(a),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(c=>c.json()),o.then(c=>Ur(c))}}async get(e){var t,i,o,r;let s,a="",c={};if(this.apiClient.isVertexAI()){const l=Ng(this.apiClient,e);return a=me("batchPredictionJobs/{name}",l._url),c=l._query,delete l._url,delete l._query,s=this.apiClient.request({path:a,queryParams:c,body:JSON.stringify(l),httpMethod:"GET",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json()),s.then(f=>Fa(f))}else{const l=Dg(this.apiClient,e);return a=me("batches/{name}",l._url),c=l._query,delete l._url,delete l._query,s=this.apiClient.request({path:a,queryParams:c,body:JSON.stringify(l),httpMethod:"GET",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(f=>f.json()),s.then(f=>Ur(f))}}async cancel(e){var t,i,o,r;let s="",a={};if(this.apiClient.isVertexAI()){const c=fg(this.apiClient,e);s=me("batchPredictionJobs/{name}:cancel",c._url),a=c._query,delete c._url,delete c._query,await this.apiClient.request({path:s,queryParams:a,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal})}else{const c=dg(this.apiClient,e);s=me("batches/{name}:cancel",c._url),a=c._query,delete c._url,delete c._query,await this.apiClient.request({path:s,queryParams:a,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal})}}async listInternal(e){var t,i,o,r;let s,a="",c={};if(this.apiClient.isVertexAI()){const l=Hg(e);return a=me("batchPredictionJobs",l._url),c=l._query,delete l._url,delete l._query,s=this.apiClient.request({path:a,queryParams:c,body:JSON.stringify(l),httpMethod:"GET",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json().then(p=>{const h=p;return h.sdkHttpResponse={headers:f.headers},h})),s.then(f=>{const p=Wg(f),h=new id;return Object.assign(h,p),h})}else{const l=Vg(e);return a=me("batches",l._url),c=l._query,delete l._url,delete l._query,s=this.apiClient.request({path:a,queryParams:c,body:JSON.stringify(l),httpMethod:"GET",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(f=>f.json().then(p=>{const h=p;return h.sdkHttpResponse={headers:f.headers},h})),s.then(f=>{const p=zg(f),h=new id;return Object.assign(h,p),h})}}async delete(e){var t,i,o,r;let s,a="",c={};if(this.apiClient.isVertexAI()){const l=Eg(this.apiClient,e);return a=me("batchPredictionJobs/{name}",l._url),c=l._query,delete l._url,delete l._query,s=this.apiClient.request({path:a,queryParams:c,body:JSON.stringify(l),httpMethod:"DELETE",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json().then(p=>{const h=p;return h.sdkHttpResponse={headers:f.headers},h})),s.then(f=>Tg(f))}else{const l=xg(this.apiClient,e);return a=me("batches/{name}",l._url),c=l._query,delete l._url,delete l._query,s=this.apiClient.request({path:a,queryParams:c,body:JSON.stringify(l),httpMethod:"DELETE",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(f=>f.json().then(p=>{const h=p;return h.sdkHttpResponse={headers:f.headers},h})),s.then(f=>Sg(f))}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Kg(n){const e={},t=u(n,["apiKey"]);if(t!=null&&d(e,["apiKey"],t),u(n,["apiKeyConfig"])!==void 0)throw new Error("apiKeyConfig parameter is not supported in Gemini API.");if(u(n,["authType"])!==void 0)throw new Error("authType parameter is not supported in Gemini API.");if(u(n,["googleServiceAccountConfig"])!==void 0)throw new Error("googleServiceAccountConfig parameter is not supported in Gemini API.");if(u(n,["httpBasicAuthConfig"])!==void 0)throw new Error("httpBasicAuthConfig parameter is not supported in Gemini API.");if(u(n,["oauthConfig"])!==void 0)throw new Error("oauthConfig parameter is not supported in Gemini API.");if(u(n,["oidcConfig"])!==void 0)throw new Error("oidcConfig parameter is not supported in Gemini API.");return e}function Zg(n){const e={},t=u(n,["data"]);if(t!=null&&d(e,["data"],t),u(n,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const i=u(n,["mimeType"]);return i!=null&&d(e,["mimeType"],i),e}function ld(n){const e={},t=u(n,["parts"]);if(t!=null){let o=t;Array.isArray(o)&&(o=o.map(r=>x0(r))),d(e,["parts"],o)}const i=u(n,["role"]);return i!=null&&d(e,["role"],i),e}function Qg(n,e){const t={},i=u(n,["ttl"]);e!==void 0&&i!=null&&d(e,["ttl"],i);const o=u(n,["expireTime"]);e!==void 0&&o!=null&&d(e,["expireTime"],o);const r=u(n,["displayName"]);e!==void 0&&r!=null&&d(e,["displayName"],r);const s=u(n,["contents"]);if(e!==void 0&&s!=null){let f=Qt(s);Array.isArray(f)&&(f=f.map(p=>ld(p))),d(e,["contents"],f)}const a=u(n,["systemInstruction"]);e!==void 0&&a!=null&&d(e,["systemInstruction"],ld(It(a)));const c=u(n,["tools"]);if(e!==void 0&&c!=null){let f=c;Array.isArray(f)&&(f=f.map(p=>S0(p))),d(e,["tools"],f)}const l=u(n,["toolConfig"]);if(e!==void 0&&l!=null&&d(e,["toolConfig"],E0(l)),u(n,["kmsKeyName"])!==void 0)throw new Error("kmsKeyName parameter is not supported in Gemini API.");return t}function jg(n,e){const t={},i=u(n,["ttl"]);e!==void 0&&i!=null&&d(e,["ttl"],i);const o=u(n,["expireTime"]);e!==void 0&&o!=null&&d(e,["expireTime"],o);const r=u(n,["displayName"]);e!==void 0&&r!=null&&d(e,["displayName"],r);const s=u(n,["contents"]);if(e!==void 0&&s!=null){let p=Qt(s);Array.isArray(p)&&(p=p.map(h=>h)),d(e,["contents"],p)}const a=u(n,["systemInstruction"]);e!==void 0&&a!=null&&d(e,["systemInstruction"],It(a));const c=u(n,["tools"]);if(e!==void 0&&c!=null){let p=c;Array.isArray(p)&&(p=p.map(h=>T0(h))),d(e,["tools"],p)}const l=u(n,["toolConfig"]);e!==void 0&&l!=null&&d(e,["toolConfig"],l);const f=u(n,["kmsKeyName"]);return e!==void 0&&f!=null&&d(e,["encryption_spec","kmsKeyName"],f),t}function e0(n,e){const t={},i=u(e,["model"]);i!=null&&d(t,["model"],ph(n,i));const o=u(e,["config"]);return o!=null&&Qg(o,t),t}function t0(n,e){const t={},i=u(e,["model"]);i!=null&&d(t,["model"],ph(n,i));const o=u(e,["config"]);return o!=null&&jg(o,t),t}function n0(n,e){const t={},i=u(e,["name"]);return i!=null&&d(t,["_url","name"],Yn(n,i)),t}function i0(n,e){const t={},i=u(e,["name"]);return i!=null&&d(t,["_url","name"],Yn(n,i)),t}function o0(n){const e={},t=u(n,["sdkHttpResponse"]);return t!=null&&d(e,["sdkHttpResponse"],t),e}function r0(n){const e={},t=u(n,["sdkHttpResponse"]);return t!=null&&d(e,["sdkHttpResponse"],t),e}function s0(n){const e={};if(u(n,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const t=u(n,["fileUri"]);t!=null&&d(e,["fileUri"],t);const i=u(n,["mimeType"]);return i!=null&&d(e,["mimeType"],i),e}function a0(n){const e={},t=u(n,["id"]);t!=null&&d(e,["id"],t);const i=u(n,["args"]);i!=null&&d(e,["args"],i);const o=u(n,["name"]);if(o!=null&&d(e,["name"],o),u(n,["partialArgs"])!==void 0)throw new Error("partialArgs parameter is not supported in Gemini API.");if(u(n,["willContinue"])!==void 0)throw new Error("willContinue parameter is not supported in Gemini API.");return e}function l0(n){const e={},t=u(n,["allowedFunctionNames"]);t!=null&&d(e,["allowedFunctionNames"],t);const i=u(n,["mode"]);if(i!=null&&d(e,["mode"],i),u(n,["streamFunctionCallArguments"])!==void 0)throw new Error("streamFunctionCallArguments parameter is not supported in Gemini API.");return e}function c0(n){const e={},t=u(n,["description"]);t!=null&&d(e,["description"],t);const i=u(n,["name"]);i!=null&&d(e,["name"],i);const o=u(n,["parameters"]);o!=null&&d(e,["parameters"],o);const r=u(n,["parametersJsonSchema"]);r!=null&&d(e,["parametersJsonSchema"],r);const s=u(n,["response"]);s!=null&&d(e,["response"],s);const a=u(n,["responseJsonSchema"]);if(a!=null&&d(e,["responseJsonSchema"],a),u(n,["behavior"])!==void 0)throw new Error("behavior parameter is not supported in Vertex AI.");return e}function u0(n,e){const t={},i=u(e,["name"]);return i!=null&&d(t,["_url","name"],Yn(n,i)),t}function d0(n,e){const t={},i=u(e,["name"]);return i!=null&&d(t,["_url","name"],Yn(n,i)),t}function f0(n){const e={},t=u(n,["authConfig"]);t!=null&&d(e,["authConfig"],Kg(t));const i=u(n,["enableWidget"]);return i!=null&&d(e,["enableWidget"],i),e}function h0(n){const e={},t=u(n,["searchTypes"]);if(t!=null&&d(e,["searchTypes"],t),u(n,["blockingConfidence"])!==void 0)throw new Error("blockingConfidence parameter is not supported in Gemini API.");if(u(n,["excludeDomains"])!==void 0)throw new Error("excludeDomains parameter is not supported in Gemini API.");const i=u(n,["timeRangeFilter"]);return i!=null&&d(e,["timeRangeFilter"],i),e}function p0(n,e){const t={},i=u(n,["pageSize"]);e!==void 0&&i!=null&&d(e,["_query","pageSize"],i);const o=u(n,["pageToken"]);return e!==void 0&&o!=null&&d(e,["_query","pageToken"],o),t}function m0(n,e){const t={},i=u(n,["pageSize"]);e!==void 0&&i!=null&&d(e,["_query","pageSize"],i);const o=u(n,["pageToken"]);return e!==void 0&&o!=null&&d(e,["_query","pageToken"],o),t}function g0(n){const e={},t=u(n,["config"]);return t!=null&&p0(t,e),e}function _0(n){const e={},t=u(n,["config"]);return t!=null&&m0(t,e),e}function v0(n){const e={},t=u(n,["sdkHttpResponse"]);t!=null&&d(e,["sdkHttpResponse"],t);const i=u(n,["nextPageToken"]);i!=null&&d(e,["nextPageToken"],i);const o=u(n,["cachedContents"]);if(o!=null){let r=o;Array.isArray(r)&&(r=r.map(s=>s)),d(e,["cachedContents"],r)}return e}function y0(n){const e={},t=u(n,["sdkHttpResponse"]);t!=null&&d(e,["sdkHttpResponse"],t);const i=u(n,["nextPageToken"]);i!=null&&d(e,["nextPageToken"],i);const o=u(n,["cachedContents"]);if(o!=null){let r=o;Array.isArray(r)&&(r=r.map(s=>s)),d(e,["cachedContents"],r)}return e}function x0(n){const e={},t=u(n,["mediaResolution"]);t!=null&&d(e,["mediaResolution"],t);const i=u(n,["codeExecutionResult"]);i!=null&&d(e,["codeExecutionResult"],i);const o=u(n,["executableCode"]);o!=null&&d(e,["executableCode"],o);const r=u(n,["fileData"]);r!=null&&d(e,["fileData"],s0(r));const s=u(n,["functionCall"]);s!=null&&d(e,["functionCall"],a0(s));const a=u(n,["functionResponse"]);a!=null&&d(e,["functionResponse"],a);const c=u(n,["inlineData"]);c!=null&&d(e,["inlineData"],Zg(c));const l=u(n,["text"]);l!=null&&d(e,["text"],l);const f=u(n,["thought"]);f!=null&&d(e,["thought"],f);const p=u(n,["thoughtSignature"]);p!=null&&d(e,["thoughtSignature"],p);const h=u(n,["videoMetadata"]);return h!=null&&d(e,["videoMetadata"],h),e}function E0(n){const e={},t=u(n,["retrievalConfig"]);t!=null&&d(e,["retrievalConfig"],t);const i=u(n,["functionCallingConfig"]);return i!=null&&d(e,["functionCallingConfig"],l0(i)),e}function S0(n){const e={};if(u(n,["retrieval"])!==void 0)throw new Error("retrieval parameter is not supported in Gemini API.");const t=u(n,["computerUse"]);t!=null&&d(e,["computerUse"],t);const i=u(n,["fileSearch"]);i!=null&&d(e,["fileSearch"],i);const o=u(n,["googleSearch"]);o!=null&&d(e,["googleSearch"],h0(o));const r=u(n,["googleMaps"]);r!=null&&d(e,["googleMaps"],f0(r));const s=u(n,["codeExecution"]);if(s!=null&&d(e,["codeExecution"],s),u(n,["enterpriseWebSearch"])!==void 0)throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");const a=u(n,["functionDeclarations"]);if(a!=null){let p=a;Array.isArray(p)&&(p=p.map(h=>h)),d(e,["functionDeclarations"],p)}const c=u(n,["googleSearchRetrieval"]);if(c!=null&&d(e,["googleSearchRetrieval"],c),u(n,["parallelAiSearch"])!==void 0)throw new Error("parallelAiSearch parameter is not supported in Gemini API.");const l=u(n,["urlContext"]);l!=null&&d(e,["urlContext"],l);const f=u(n,["mcpServers"]);if(f!=null){let p=f;Array.isArray(p)&&(p=p.map(h=>h)),d(e,["mcpServers"],p)}return e}function T0(n){const e={},t=u(n,["retrieval"]);t!=null&&d(e,["retrieval"],t);const i=u(n,["computerUse"]);if(i!=null&&d(e,["computerUse"],i),u(n,["fileSearch"])!==void 0)throw new Error("fileSearch parameter is not supported in Vertex AI.");const o=u(n,["googleSearch"]);o!=null&&d(e,["googleSearch"],o);const r=u(n,["googleMaps"]);r!=null&&d(e,["googleMaps"],r);const s=u(n,["codeExecution"]);s!=null&&d(e,["codeExecution"],s);const a=u(n,["enterpriseWebSearch"]);a!=null&&d(e,["enterpriseWebSearch"],a);const c=u(n,["functionDeclarations"]);if(c!=null){let h=c;Array.isArray(h)&&(h=h.map(m=>c0(m))),d(e,["functionDeclarations"],h)}const l=u(n,["googleSearchRetrieval"]);l!=null&&d(e,["googleSearchRetrieval"],l);const f=u(n,["parallelAiSearch"]);f!=null&&d(e,["parallelAiSearch"],f);const p=u(n,["urlContext"]);if(p!=null&&d(e,["urlContext"],p),u(n,["mcpServers"])!==void 0)throw new Error("mcpServers parameter is not supported in Vertex AI.");return e}function M0(n,e){const t={},i=u(n,["ttl"]);e!==void 0&&i!=null&&d(e,["ttl"],i);const o=u(n,["expireTime"]);return e!==void 0&&o!=null&&d(e,["expireTime"],o),t}function A0(n,e){const t={},i=u(n,["ttl"]);e!==void 0&&i!=null&&d(e,["ttl"],i);const o=u(n,["expireTime"]);return e!==void 0&&o!=null&&d(e,["expireTime"],o),t}function C0(n,e){const t={},i=u(e,["name"]);i!=null&&d(t,["_url","name"],Yn(n,i));const o=u(e,["config"]);return o!=null&&M0(o,t),t}function w0(n,e){const t={},i=u(e,["name"]);i!=null&&d(t,["_url","name"],Yn(n,i));const o=u(e,["config"]);return o!=null&&A0(o,t),t}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class b0 extends Xn{constructor(e){super(),this.apiClient=e,this.list=async(t={})=>new Ri(Hn.PAGED_ITEM_CACHED_CONTENTS,i=>this.listInternal(i),await this.listInternal(t),t)}async create(e){var t,i,o,r;let s,a="",c={};if(this.apiClient.isVertexAI()){const l=t0(this.apiClient,e);return a=me("cachedContents",l._url),c=l._query,delete l._url,delete l._query,s=this.apiClient.request({path:a,queryParams:c,body:JSON.stringify(l),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json()),s.then(f=>f)}else{const l=e0(this.apiClient,e);return a=me("cachedContents",l._url),c=l._query,delete l._url,delete l._query,s=this.apiClient.request({path:a,queryParams:c,body:JSON.stringify(l),httpMethod:"POST",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(f=>f.json()),s.then(f=>f)}}async get(e){var t,i,o,r;let s,a="",c={};if(this.apiClient.isVertexAI()){const l=d0(this.apiClient,e);return a=me("{name}",l._url),c=l._query,delete l._url,delete l._query,s=this.apiClient.request({path:a,queryParams:c,body:JSON.stringify(l),httpMethod:"GET",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json()),s.then(f=>f)}else{const l=u0(this.apiClient,e);return a=me("{name}",l._url),c=l._query,delete l._url,delete l._query,s=this.apiClient.request({path:a,queryParams:c,body:JSON.stringify(l),httpMethod:"GET",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(f=>f.json()),s.then(f=>f)}}async delete(e){var t,i,o,r;let s,a="",c={};if(this.apiClient.isVertexAI()){const l=i0(this.apiClient,e);return a=me("{name}",l._url),c=l._query,delete l._url,delete l._query,s=this.apiClient.request({path:a,queryParams:c,body:JSON.stringify(l),httpMethod:"DELETE",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json().then(p=>{const h=p;return h.sdkHttpResponse={headers:f.headers},h})),s.then(f=>{const p=r0(f),h=new td;return Object.assign(h,p),h})}else{const l=n0(this.apiClient,e);return a=me("{name}",l._url),c=l._query,delete l._url,delete l._query,s=this.apiClient.request({path:a,queryParams:c,body:JSON.stringify(l),httpMethod:"DELETE",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(f=>f.json().then(p=>{const h=p;return h.sdkHttpResponse={headers:f.headers},h})),s.then(f=>{const p=o0(f),h=new td;return Object.assign(h,p),h})}}async update(e){var t,i,o,r;let s,a="",c={};if(this.apiClient.isVertexAI()){const l=w0(this.apiClient,e);return a=me("{name}",l._url),c=l._query,delete l._url,delete l._query,s=this.apiClient.request({path:a,queryParams:c,body:JSON.stringify(l),httpMethod:"PATCH",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json()),s.then(f=>f)}else{const l=C0(this.apiClient,e);return a=me("{name}",l._url),c=l._query,delete l._url,delete l._query,s=this.apiClient.request({path:a,queryParams:c,body:JSON.stringify(l),httpMethod:"PATCH",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(f=>f.json()),s.then(f=>f)}}async listInternal(e){var t,i,o,r;let s,a="",c={};if(this.apiClient.isVertexAI()){const l=_0(e);return a=me("cachedContents",l._url),c=l._query,delete l._url,delete l._query,s=this.apiClient.request({path:a,queryParams:c,body:JSON.stringify(l),httpMethod:"GET",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json().then(p=>{const h=p;return h.sdkHttpResponse={headers:f.headers},h})),s.then(f=>{const p=y0(f),h=new nd;return Object.assign(h,p),h})}else{const l=g0(e);return a=me("cachedContents",l._url),c=l._query,delete l._url,delete l._query,s=this.apiClient.request({path:a,queryParams:c,body:JSON.stringify(l),httpMethod:"GET",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(f=>f.json().then(p=>{const h=p;return h.sdkHttpResponse={headers:f.headers},h})),s.then(f=>{const p=v0(f),h=new nd;return Object.assign(h,p),h})}}}function Jr(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(n);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(n,i[o])&&(t[i[o]]=n[i[o]]);return t}function cd(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Ve(n){return this instanceof Ve?(this.v=n,this):new Ve(n)}function dn(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(n,e||[]),o,r=[];return o=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",s),o[Symbol.asyncIterator]=function(){return this},o;function s(m){return function(v){return Promise.resolve(v).then(m,p)}}function a(m,v){i[m]&&(o[m]=function(y){return new Promise(function(g,_){r.push([m,y,g,_])>1||c(m,y)})},v&&(o[m]=v(o[m])))}function c(m,v){try{l(i[m](v))}catch(y){h(r[0][3],y)}}function l(m){m.value instanceof Ve?Promise.resolve(m.value.v).then(f,p):h(r[0][2],m)}function f(m){c("next",m)}function p(m){c("throw",m)}function h(m,v){m(v),r.shift(),r.length&&c(r[0][0],r[0][1])}}function fn(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof cd=="function"?cd(n):n[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(r){t[r]=n[r]&&function(s){return new Promise(function(a,c){s=n[r](s),o(a,c,s.done,s.value)})}}function o(r,s,a,c){Promise.resolve(c).then(function(l){r({value:l,done:a})},s)}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function I0(n){var e;if(n.candidates==null||n.candidates.length===0)return!1;const t=(e=n.candidates[0])===null||e===void 0?void 0:e.content;return t===void 0?!1:wh(t)}function wh(n){if(n.parts===void 0||n.parts.length===0)return!1;for(const e of n.parts)if(e===void 0||Object.keys(e).length===0)return!1;return!0}function R0(n){if(n.length!==0){for(const e of n)if(e.role!=="user"&&e.role!=="model")throw new Error(`Role must be user or model, but got ${e.role}.`)}}function ud(n){if(n===void 0||n.length===0)return[];const e=[],t=n.length;let i=0;for(;i<t;)if(n[i].role==="user")e.push(n[i]),i++;else{const o=[];let r=!0;for(;i<t&&n[i].role==="model";)o.push(n[i]),r&&!wh(n[i])&&(r=!1),i++;r?e.push(...o):e.pop()}return e}class P0{constructor(e,t){this.modelsModule=e,this.apiClient=t}create(e){return new D0(this.apiClient,this.modelsModule,e.model,e.config,structuredClone(e.history))}}class D0{constructor(e,t,i,o={},r=[]){this.apiClient=e,this.modelsModule=t,this.model=i,this.config=o,this.history=r,this.sendPromise=Promise.resolve(),R0(r)}async sendMessage(e){var t;await this.sendPromise;const i=It(e.message),o=this.modelsModule.generateContent({model:this.model,contents:this.getHistory(!0).concat(i),config:(t=e.config)!==null&&t!==void 0?t:this.config});return this.sendPromise=(async()=>{var r,s,a;const c=await o,l=(s=(r=c.candidates)===null||r===void 0?void 0:r[0])===null||s===void 0?void 0:s.content,f=c.automaticFunctionCallingHistory,p=this.getHistory(!0).length;let h=[];f!=null&&(h=(a=f.slice(p))!==null&&a!==void 0?a:[]);const m=l?[l]:[];this.recordHistory(i,m,h)})(),await this.sendPromise.catch(()=>{this.sendPromise=Promise.resolve()}),o}async sendMessageStream(e){var t;await this.sendPromise;const i=It(e.message),o=this.modelsModule.generateContentStream({model:this.model,contents:this.getHistory(!0).concat(i),config:(t=e.config)!==null&&t!==void 0?t:this.config});this.sendPromise=o.then(()=>{}).catch(()=>{});const r=await o;return this.processStreamResponse(r,i)}getHistory(e=!1){const t=e?ud(this.history):this.history;return structuredClone(t)}processStreamResponse(e,t){return dn(this,arguments,function*(){var o,r,s,a,c,l;const f=[];try{for(var p=!0,h=fn(e),m;m=yield Ve(h.next()),o=m.done,!o;p=!0){a=m.value,p=!1;const v=a;if(I0(v)){const y=(l=(c=v.candidates)===null||c===void 0?void 0:c[0])===null||l===void 0?void 0:l.content;y!==void 0&&f.push(y)}yield yield Ve(v)}}catch(v){r={error:v}}finally{try{!p&&!o&&(s=h.return)&&(yield Ve(s.call(h)))}finally{if(r)throw r.error}}this.recordHistory(t,f)})}recordHistory(e,t,i){let o=[];t.length>0&&t.every(r=>r.role!==void 0)?o=t:o.push({role:"model",parts:[]}),i&&i.length>0?this.history.push(...ud(i)):this.history.push(e),this.history.push(...o)}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class rs extends Error{constructor(e){super(e.message),this.name="ApiError",this.status=e.status,Object.setPrototypeOf(this,rs.prototype)}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function N0(n){const e={},t=u(n,["file"]);return t!=null&&d(e,["file"],t),e}function L0(n){const e={},t=u(n,["sdkHttpResponse"]);return t!=null&&d(e,["sdkHttpResponse"],t),e}function U0(n){const e={},t=u(n,["name"]);return t!=null&&d(e,["_url","file"],xh(t)),e}function F0(n){const e={},t=u(n,["sdkHttpResponse"]);return t!=null&&d(e,["sdkHttpResponse"],t),e}function B0(n){const e={},t=u(n,["name"]);return t!=null&&d(e,["_url","file"],xh(t)),e}function k0(n){const e={},t=u(n,["uris"]);return t!=null&&d(e,["uris"],t),e}function O0(n,e){const t={},i=u(n,["pageSize"]);e!==void 0&&i!=null&&d(e,["_query","pageSize"],i);const o=u(n,["pageToken"]);return e!==void 0&&o!=null&&d(e,["_query","pageToken"],o),t}function G0(n){const e={},t=u(n,["config"]);return t!=null&&O0(t,e),e}function V0(n){const e={},t=u(n,["sdkHttpResponse"]);t!=null&&d(e,["sdkHttpResponse"],t);const i=u(n,["nextPageToken"]);i!=null&&d(e,["nextPageToken"],i);const o=u(n,["files"]);if(o!=null){let r=o;Array.isArray(r)&&(r=r.map(s=>s)),d(e,["files"],r)}return e}function H0(n){const e={},t=u(n,["sdkHttpResponse"]);t!=null&&d(e,["sdkHttpResponse"],t);const i=u(n,["files"]);if(i!=null){let o=i;Array.isArray(o)&&(o=o.map(r=>r)),d(e,["files"],o)}return e}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class z0 extends Xn{constructor(e){super(),this.apiClient=e,this.list=async(t={})=>new Ri(Hn.PAGED_ITEM_FILES,i=>this.listInternal(i),await this.listInternal(t),t)}async upload(e){if(this.apiClient.isVertexAI())throw new Error("Vertex AI does not support uploading files. You can share files through a GCS bucket.");return this.apiClient.uploadFile(e.file,e.config).then(t=>t)}async download(e){await this.apiClient.downloadFile(e)}async registerFiles(e){throw new Error("registerFiles is only supported in Node.js environments.")}async _registerFiles(e){return this.registerFilesInternal(e)}async listInternal(e){var t,i;let o,r="",s={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const a=G0(e);return r=me("files",a._url),s=a._query,delete a._url,delete a._query,o=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(a),httpMethod:"GET",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(c=>c.json().then(l=>{const f=l;return f.sdkHttpResponse={headers:c.headers},f})),o.then(c=>{const l=V0(c),f=new Vm;return Object.assign(f,l),f})}}async createInternal(e){var t,i;let o,r="",s={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const a=N0(e);return r=me("upload/v1beta/files",a._url),s=a._query,delete a._url,delete a._query,o=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(a),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(c=>c.json()),o.then(c=>{const l=L0(c),f=new Hm;return Object.assign(f,l),f})}}async get(e){var t,i;let o,r="",s={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const a=B0(e);return r=me("files/{file}",a._url),s=a._query,delete a._url,delete a._query,o=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(a),httpMethod:"GET",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(c=>c.json()),o.then(c=>c)}}async delete(e){var t,i;let o,r="",s={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const a=U0(e);return r=me("files/{file}",a._url),s=a._query,delete a._url,delete a._query,o=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(a),httpMethod:"DELETE",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(c=>c.json().then(l=>{const f=l;return f.sdkHttpResponse={headers:c.headers},f})),o.then(c=>{const l=F0(c),f=new zm;return Object.assign(f,l),f})}}async registerFilesInternal(e){var t,i;let o,r="",s={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const a=k0(e);return r=me("files:register",a._url),s=a._query,delete a._url,delete a._query,o=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(a),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(c=>c.json()),o.then(c=>{const l=H0(c),f=new Wm;return Object.assign(f,l),f})}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function W0(n){const e={},t=u(n,["apiKey"]);if(t!=null&&d(e,["apiKey"],t),u(n,["apiKeyConfig"])!==void 0)throw new Error("apiKeyConfig parameter is not supported in Gemini API.");if(u(n,["authType"])!==void 0)throw new Error("authType parameter is not supported in Gemini API.");if(u(n,["googleServiceAccountConfig"])!==void 0)throw new Error("googleServiceAccountConfig parameter is not supported in Gemini API.");if(u(n,["httpBasicAuthConfig"])!==void 0)throw new Error("httpBasicAuthConfig parameter is not supported in Gemini API.");if(u(n,["oauthConfig"])!==void 0)throw new Error("oauthConfig parameter is not supported in Gemini API.");if(u(n,["oidcConfig"])!==void 0)throw new Error("oidcConfig parameter is not supported in Gemini API.");return e}function Fr(n){const e={},t=u(n,["data"]);if(t!=null&&d(e,["data"],t),u(n,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const i=u(n,["mimeType"]);return i!=null&&d(e,["mimeType"],i),e}function q0(n){const e={},t=u(n,["parts"]);if(t!=null){let o=t;Array.isArray(o)&&(o=o.map(r=>a_(r))),d(e,["parts"],o)}const i=u(n,["role"]);return i!=null&&d(e,["role"],i),e}function X0(n){const e={};if(u(n,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const t=u(n,["fileUri"]);t!=null&&d(e,["fileUri"],t);const i=u(n,["mimeType"]);return i!=null&&d(e,["mimeType"],i),e}function Y0(n){const e={},t=u(n,["id"]);t!=null&&d(e,["id"],t);const i=u(n,["args"]);i!=null&&d(e,["args"],i);const o=u(n,["name"]);if(o!=null&&d(e,["name"],o),u(n,["partialArgs"])!==void 0)throw new Error("partialArgs parameter is not supported in Gemini API.");if(u(n,["willContinue"])!==void 0)throw new Error("willContinue parameter is not supported in Gemini API.");return e}function $0(n){const e={},t=u(n,["description"]);t!=null&&d(e,["description"],t);const i=u(n,["name"]);i!=null&&d(e,["name"],i);const o=u(n,["parameters"]);o!=null&&d(e,["parameters"],o);const r=u(n,["parametersJsonSchema"]);r!=null&&d(e,["parametersJsonSchema"],r);const s=u(n,["response"]);s!=null&&d(e,["response"],s);const a=u(n,["responseJsonSchema"]);if(a!=null&&d(e,["responseJsonSchema"],a),u(n,["behavior"])!==void 0)throw new Error("behavior parameter is not supported in Vertex AI.");return e}function J0(n){const e={},t=u(n,["modelSelectionConfig"]);t!=null&&d(e,["modelConfig"],t);const i=u(n,["responseJsonSchema"]);i!=null&&d(e,["responseJsonSchema"],i);const o=u(n,["audioTimestamp"]);o!=null&&d(e,["audioTimestamp"],o);const r=u(n,["candidateCount"]);r!=null&&d(e,["candidateCount"],r);const s=u(n,["enableAffectiveDialog"]);s!=null&&d(e,["enableAffectiveDialog"],s);const a=u(n,["frequencyPenalty"]);a!=null&&d(e,["frequencyPenalty"],a);const c=u(n,["logprobs"]);c!=null&&d(e,["logprobs"],c);const l=u(n,["maxOutputTokens"]);l!=null&&d(e,["maxOutputTokens"],l);const f=u(n,["mediaResolution"]);f!=null&&d(e,["mediaResolution"],f);const p=u(n,["presencePenalty"]);p!=null&&d(e,["presencePenalty"],p);const h=u(n,["responseLogprobs"]);h!=null&&d(e,["responseLogprobs"],h);const m=u(n,["responseMimeType"]);m!=null&&d(e,["responseMimeType"],m);const v=u(n,["responseModalities"]);v!=null&&d(e,["responseModalities"],v);const y=u(n,["responseSchema"]);y!=null&&d(e,["responseSchema"],y);const g=u(n,["routingConfig"]);g!=null&&d(e,["routingConfig"],g);const _=u(n,["seed"]);_!=null&&d(e,["seed"],_);const E=u(n,["speechConfig"]);E!=null&&d(e,["speechConfig"],E);const A=u(n,["stopSequences"]);A!=null&&d(e,["stopSequences"],A);const S=u(n,["temperature"]);S!=null&&d(e,["temperature"],S);const R=u(n,["thinkingConfig"]);R!=null&&d(e,["thinkingConfig"],R);const C=u(n,["topK"]);C!=null&&d(e,["topK"],C);const b=u(n,["topP"]);if(b!=null&&d(e,["topP"],b),u(n,["enableEnhancedCivicAnswers"])!==void 0)throw new Error("enableEnhancedCivicAnswers parameter is not supported in Vertex AI.");return e}function K0(n){const e={},t=u(n,["authConfig"]);t!=null&&d(e,["authConfig"],W0(t));const i=u(n,["enableWidget"]);return i!=null&&d(e,["enableWidget"],i),e}function Z0(n){const e={},t=u(n,["searchTypes"]);if(t!=null&&d(e,["searchTypes"],t),u(n,["blockingConfidence"])!==void 0)throw new Error("blockingConfidence parameter is not supported in Gemini API.");if(u(n,["excludeDomains"])!==void 0)throw new Error("excludeDomains parameter is not supported in Gemini API.");const i=u(n,["timeRangeFilter"]);return i!=null&&d(e,["timeRangeFilter"],i),e}function Q0(n,e){const t={},i=u(n,["generationConfig"]);e!==void 0&&i!=null&&d(e,["setup","generationConfig"],i);const o=u(n,["responseModalities"]);e!==void 0&&o!=null&&d(e,["setup","generationConfig","responseModalities"],o);const r=u(n,["temperature"]);e!==void 0&&r!=null&&d(e,["setup","generationConfig","temperature"],r);const s=u(n,["topP"]);e!==void 0&&s!=null&&d(e,["setup","generationConfig","topP"],s);const a=u(n,["topK"]);e!==void 0&&a!=null&&d(e,["setup","generationConfig","topK"],a);const c=u(n,["maxOutputTokens"]);e!==void 0&&c!=null&&d(e,["setup","generationConfig","maxOutputTokens"],c);const l=u(n,["mediaResolution"]);e!==void 0&&l!=null&&d(e,["setup","generationConfig","mediaResolution"],l);const f=u(n,["seed"]);e!==void 0&&f!=null&&d(e,["setup","generationConfig","seed"],f);const p=u(n,["speechConfig"]);e!==void 0&&p!=null&&d(e,["setup","generationConfig","speechConfig"],Ql(p));const h=u(n,["thinkingConfig"]);e!==void 0&&h!=null&&d(e,["setup","generationConfig","thinkingConfig"],h);const m=u(n,["enableAffectiveDialog"]);e!==void 0&&m!=null&&d(e,["setup","generationConfig","enableAffectiveDialog"],m);const v=u(n,["systemInstruction"]);e!==void 0&&v!=null&&d(e,["setup","systemInstruction"],q0(It(v)));const y=u(n,["tools"]);if(e!==void 0&&y!=null){let C=yo(y);Array.isArray(C)&&(C=C.map(b=>c_(vo(b)))),d(e,["setup","tools"],C)}const g=u(n,["sessionResumption"]);e!==void 0&&g!=null&&d(e,["setup","sessionResumption"],l_(g));const _=u(n,["inputAudioTranscription"]);e!==void 0&&_!=null&&d(e,["setup","inputAudioTranscription"],_);const E=u(n,["outputAudioTranscription"]);e!==void 0&&E!=null&&d(e,["setup","outputAudioTranscription"],E);const A=u(n,["realtimeInputConfig"]);e!==void 0&&A!=null&&d(e,["setup","realtimeInputConfig"],A);const S=u(n,["contextWindowCompression"]);e!==void 0&&S!=null&&d(e,["setup","contextWindowCompression"],S);const R=u(n,["proactivity"]);if(e!==void 0&&R!=null&&d(e,["setup","proactivity"],R),u(n,["explicitVadSignal"])!==void 0)throw new Error("explicitVadSignal parameter is not supported in Gemini API.");return t}function j0(n,e){const t={},i=u(n,["generationConfig"]);e!==void 0&&i!=null&&d(e,["setup","generationConfig"],J0(i));const o=u(n,["responseModalities"]);e!==void 0&&o!=null&&d(e,["setup","generationConfig","responseModalities"],o);const r=u(n,["temperature"]);e!==void 0&&r!=null&&d(e,["setup","generationConfig","temperature"],r);const s=u(n,["topP"]);e!==void 0&&s!=null&&d(e,["setup","generationConfig","topP"],s);const a=u(n,["topK"]);e!==void 0&&a!=null&&d(e,["setup","generationConfig","topK"],a);const c=u(n,["maxOutputTokens"]);e!==void 0&&c!=null&&d(e,["setup","generationConfig","maxOutputTokens"],c);const l=u(n,["mediaResolution"]);e!==void 0&&l!=null&&d(e,["setup","generationConfig","mediaResolution"],l);const f=u(n,["seed"]);e!==void 0&&f!=null&&d(e,["setup","generationConfig","seed"],f);const p=u(n,["speechConfig"]);e!==void 0&&p!=null&&d(e,["setup","generationConfig","speechConfig"],Ql(p));const h=u(n,["thinkingConfig"]);e!==void 0&&h!=null&&d(e,["setup","generationConfig","thinkingConfig"],h);const m=u(n,["enableAffectiveDialog"]);e!==void 0&&m!=null&&d(e,["setup","generationConfig","enableAffectiveDialog"],m);const v=u(n,["systemInstruction"]);e!==void 0&&v!=null&&d(e,["setup","systemInstruction"],It(v));const y=u(n,["tools"]);if(e!==void 0&&y!=null){let b=yo(y);Array.isArray(b)&&(b=b.map(x=>u_(vo(x)))),d(e,["setup","tools"],b)}const g=u(n,["sessionResumption"]);e!==void 0&&g!=null&&d(e,["setup","sessionResumption"],g);const _=u(n,["inputAudioTranscription"]);e!==void 0&&_!=null&&d(e,["setup","inputAudioTranscription"],_);const E=u(n,["outputAudioTranscription"]);e!==void 0&&E!=null&&d(e,["setup","outputAudioTranscription"],E);const A=u(n,["realtimeInputConfig"]);e!==void 0&&A!=null&&d(e,["setup","realtimeInputConfig"],A);const S=u(n,["contextWindowCompression"]);e!==void 0&&S!=null&&d(e,["setup","contextWindowCompression"],S);const R=u(n,["proactivity"]);e!==void 0&&R!=null&&d(e,["setup","proactivity"],R);const C=u(n,["explicitVadSignal"]);return e!==void 0&&C!=null&&d(e,["setup","explicitVadSignal"],C),t}function e_(n,e){const t={},i=u(e,["model"]);i!=null&&d(t,["setup","model"],it(n,i));const o=u(e,["config"]);return o!=null&&d(t,["config"],Q0(o,t)),t}function t_(n,e){const t={},i=u(e,["model"]);i!=null&&d(t,["setup","model"],it(n,i));const o=u(e,["config"]);return o!=null&&d(t,["config"],j0(o,t)),t}function n_(n){const e={},t=u(n,["musicGenerationConfig"]);return t!=null&&d(e,["musicGenerationConfig"],t),e}function i_(n){const e={},t=u(n,["weightedPrompts"]);if(t!=null){let i=t;Array.isArray(i)&&(i=i.map(o=>o)),d(e,["weightedPrompts"],i)}return e}function o_(n){const e={},t=u(n,["media"]);if(t!=null){let l=mh(t);Array.isArray(l)&&(l=l.map(f=>Fr(f))),d(e,["mediaChunks"],l)}const i=u(n,["audio"]);i!=null&&d(e,["audio"],Fr(_h(i)));const o=u(n,["audioStreamEnd"]);o!=null&&d(e,["audioStreamEnd"],o);const r=u(n,["video"]);r!=null&&d(e,["video"],Fr(gh(r)));const s=u(n,["text"]);s!=null&&d(e,["text"],s);const a=u(n,["activityStart"]);a!=null&&d(e,["activityStart"],a);const c=u(n,["activityEnd"]);return c!=null&&d(e,["activityEnd"],c),e}function r_(n){const e={},t=u(n,["media"]);if(t!=null){let l=mh(t);Array.isArray(l)&&(l=l.map(f=>f)),d(e,["mediaChunks"],l)}const i=u(n,["audio"]);i!=null&&d(e,["audio"],_h(i));const o=u(n,["audioStreamEnd"]);o!=null&&d(e,["audioStreamEnd"],o);const r=u(n,["video"]);r!=null&&d(e,["video"],gh(r));const s=u(n,["text"]);s!=null&&d(e,["text"],s);const a=u(n,["activityStart"]);a!=null&&d(e,["activityStart"],a);const c=u(n,["activityEnd"]);return c!=null&&d(e,["activityEnd"],c),e}function s_(n){const e={},t=u(n,["setupComplete"]);t!=null&&d(e,["setupComplete"],t);const i=u(n,["serverContent"]);i!=null&&d(e,["serverContent"],i);const o=u(n,["toolCall"]);o!=null&&d(e,["toolCall"],o);const r=u(n,["toolCallCancellation"]);r!=null&&d(e,["toolCallCancellation"],r);const s=u(n,["usageMetadata"]);s!=null&&d(e,["usageMetadata"],d_(s));const a=u(n,["goAway"]);a!=null&&d(e,["goAway"],a);const c=u(n,["sessionResumptionUpdate"]);c!=null&&d(e,["sessionResumptionUpdate"],c);const l=u(n,["voiceActivityDetectionSignal"]);l!=null&&d(e,["voiceActivityDetectionSignal"],l);const f=u(n,["voiceActivity"]);return f!=null&&d(e,["voiceActivity"],f_(f)),e}function a_(n){const e={},t=u(n,["mediaResolution"]);t!=null&&d(e,["mediaResolution"],t);const i=u(n,["codeExecutionResult"]);i!=null&&d(e,["codeExecutionResult"],i);const o=u(n,["executableCode"]);o!=null&&d(e,["executableCode"],o);const r=u(n,["fileData"]);r!=null&&d(e,["fileData"],X0(r));const s=u(n,["functionCall"]);s!=null&&d(e,["functionCall"],Y0(s));const a=u(n,["functionResponse"]);a!=null&&d(e,["functionResponse"],a);const c=u(n,["inlineData"]);c!=null&&d(e,["inlineData"],Fr(c));const l=u(n,["text"]);l!=null&&d(e,["text"],l);const f=u(n,["thought"]);f!=null&&d(e,["thought"],f);const p=u(n,["thoughtSignature"]);p!=null&&d(e,["thoughtSignature"],p);const h=u(n,["videoMetadata"]);return h!=null&&d(e,["videoMetadata"],h),e}function l_(n){const e={},t=u(n,["handle"]);if(t!=null&&d(e,["handle"],t),u(n,["transparent"])!==void 0)throw new Error("transparent parameter is not supported in Gemini API.");return e}function c_(n){const e={};if(u(n,["retrieval"])!==void 0)throw new Error("retrieval parameter is not supported in Gemini API.");const t=u(n,["computerUse"]);t!=null&&d(e,["computerUse"],t);const i=u(n,["fileSearch"]);i!=null&&d(e,["fileSearch"],i);const o=u(n,["googleSearch"]);o!=null&&d(e,["googleSearch"],Z0(o));const r=u(n,["googleMaps"]);r!=null&&d(e,["googleMaps"],K0(r));const s=u(n,["codeExecution"]);if(s!=null&&d(e,["codeExecution"],s),u(n,["enterpriseWebSearch"])!==void 0)throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");const a=u(n,["functionDeclarations"]);if(a!=null){let p=a;Array.isArray(p)&&(p=p.map(h=>h)),d(e,["functionDeclarations"],p)}const c=u(n,["googleSearchRetrieval"]);if(c!=null&&d(e,["googleSearchRetrieval"],c),u(n,["parallelAiSearch"])!==void 0)throw new Error("parallelAiSearch parameter is not supported in Gemini API.");const l=u(n,["urlContext"]);l!=null&&d(e,["urlContext"],l);const f=u(n,["mcpServers"]);if(f!=null){let p=f;Array.isArray(p)&&(p=p.map(h=>h)),d(e,["mcpServers"],p)}return e}function u_(n){const e={},t=u(n,["retrieval"]);t!=null&&d(e,["retrieval"],t);const i=u(n,["computerUse"]);if(i!=null&&d(e,["computerUse"],i),u(n,["fileSearch"])!==void 0)throw new Error("fileSearch parameter is not supported in Vertex AI.");const o=u(n,["googleSearch"]);o!=null&&d(e,["googleSearch"],o);const r=u(n,["googleMaps"]);r!=null&&d(e,["googleMaps"],r);const s=u(n,["codeExecution"]);s!=null&&d(e,["codeExecution"],s);const a=u(n,["enterpriseWebSearch"]);a!=null&&d(e,["enterpriseWebSearch"],a);const c=u(n,["functionDeclarations"]);if(c!=null){let h=c;Array.isArray(h)&&(h=h.map(m=>$0(m))),d(e,["functionDeclarations"],h)}const l=u(n,["googleSearchRetrieval"]);l!=null&&d(e,["googleSearchRetrieval"],l);const f=u(n,["parallelAiSearch"]);f!=null&&d(e,["parallelAiSearch"],f);const p=u(n,["urlContext"]);if(p!=null&&d(e,["urlContext"],p),u(n,["mcpServers"])!==void 0)throw new Error("mcpServers parameter is not supported in Vertex AI.");return e}function d_(n){const e={},t=u(n,["promptTokenCount"]);t!=null&&d(e,["promptTokenCount"],t);const i=u(n,["cachedContentTokenCount"]);i!=null&&d(e,["cachedContentTokenCount"],i);const o=u(n,["candidatesTokenCount"]);o!=null&&d(e,["responseTokenCount"],o);const r=u(n,["toolUsePromptTokenCount"]);r!=null&&d(e,["toolUsePromptTokenCount"],r);const s=u(n,["thoughtsTokenCount"]);s!=null&&d(e,["thoughtsTokenCount"],s);const a=u(n,["totalTokenCount"]);a!=null&&d(e,["totalTokenCount"],a);const c=u(n,["promptTokensDetails"]);if(c!=null){let m=c;Array.isArray(m)&&(m=m.map(v=>v)),d(e,["promptTokensDetails"],m)}const l=u(n,["cacheTokensDetails"]);if(l!=null){let m=l;Array.isArray(m)&&(m=m.map(v=>v)),d(e,["cacheTokensDetails"],m)}const f=u(n,["candidatesTokensDetails"]);if(f!=null){let m=f;Array.isArray(m)&&(m=m.map(v=>v)),d(e,["responseTokensDetails"],m)}const p=u(n,["toolUsePromptTokensDetails"]);if(p!=null){let m=p;Array.isArray(m)&&(m=m.map(v=>v)),d(e,["toolUsePromptTokensDetails"],m)}const h=u(n,["trafficType"]);return h!=null&&d(e,["trafficType"],h),e}function f_(n){const e={},t=u(n,["type"]);return t!=null&&d(e,["voiceActivityType"],t),e}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function h_(n,e){const t={},i=u(n,["apiKey"]);if(i!=null&&d(t,["apiKey"],i),u(n,["apiKeyConfig"])!==void 0)throw new Error("apiKeyConfig parameter is not supported in Gemini API.");if(u(n,["authType"])!==void 0)throw new Error("authType parameter is not supported in Gemini API.");if(u(n,["googleServiceAccountConfig"])!==void 0)throw new Error("googleServiceAccountConfig parameter is not supported in Gemini API.");if(u(n,["httpBasicAuthConfig"])!==void 0)throw new Error("httpBasicAuthConfig parameter is not supported in Gemini API.");if(u(n,["oauthConfig"])!==void 0)throw new Error("oauthConfig parameter is not supported in Gemini API.");if(u(n,["oidcConfig"])!==void 0)throw new Error("oidcConfig parameter is not supported in Gemini API.");return t}function p_(n,e){const t={},i=u(n,["data"]);if(i!=null&&d(t,["data"],i),u(n,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const o=u(n,["mimeType"]);return o!=null&&d(t,["mimeType"],o),t}function m_(n,e){const t={},i=u(n,["content"]);i!=null&&d(t,["content"],i);const o=u(n,["citationMetadata"]);o!=null&&d(t,["citationMetadata"],g_(o));const r=u(n,["tokenCount"]);r!=null&&d(t,["tokenCount"],r);const s=u(n,["finishReason"]);s!=null&&d(t,["finishReason"],s);const a=u(n,["groundingMetadata"]);a!=null&&d(t,["groundingMetadata"],a);const c=u(n,["avgLogprobs"]);c!=null&&d(t,["avgLogprobs"],c);const l=u(n,["index"]);l!=null&&d(t,["index"],l);const f=u(n,["logprobsResult"]);f!=null&&d(t,["logprobsResult"],f);const p=u(n,["safetyRatings"]);if(p!=null){let m=p;Array.isArray(m)&&(m=m.map(v=>v)),d(t,["safetyRatings"],m)}const h=u(n,["urlContextMetadata"]);return h!=null&&d(t,["urlContextMetadata"],h),t}function g_(n,e){const t={},i=u(n,["citationSources"]);if(i!=null){let o=i;Array.isArray(o)&&(o=o.map(r=>r)),d(t,["citations"],o)}return t}function __(n,e,t){const i={},o=u(e,["model"]);o!=null&&d(i,["_url","model"],it(n,o));const r=u(e,["contents"]);if(r!=null){let s=Qt(r);Array.isArray(s)&&(s=s.map(a=>a)),d(i,["contents"],s)}return i}function v_(n,e){const t={},i=u(n,["sdkHttpResponse"]);i!=null&&d(t,["sdkHttpResponse"],i);const o=u(n,["tokensInfo"]);if(o!=null){let r=o;Array.isArray(r)&&(r=r.map(s=>s)),d(t,["tokensInfo"],r)}return t}function y_(n,e){const t={},i=u(n,["values"]);i!=null&&d(t,["values"],i);const o=u(n,["statistics"]);return o!=null&&d(t,["statistics"],x_(o)),t}function x_(n,e){const t={},i=u(n,["truncated"]);i!=null&&d(t,["truncated"],i);const o=u(n,["token_count"]);return o!=null&&d(t,["tokenCount"],o),t}function Xo(n,e){const t={},i=u(n,["parts"]);if(i!=null){let r=i;Array.isArray(r)&&(r=r.map(s=>Iv(s))),d(t,["parts"],r)}const o=u(n,["role"]);return o!=null&&d(t,["role"],o),t}function E_(n,e){const t={},i=u(n,["controlType"]);i!=null&&d(t,["controlType"],i);const o=u(n,["enableControlImageComputation"]);return o!=null&&d(t,["computeControl"],o),t}function S_(n,e){const t={};if(u(n,["systemInstruction"])!==void 0)throw new Error("systemInstruction parameter is not supported in Gemini API.");if(u(n,["tools"])!==void 0)throw new Error("tools parameter is not supported in Gemini API.");if(u(n,["generationConfig"])!==void 0)throw new Error("generationConfig parameter is not supported in Gemini API.");return t}function T_(n,e,t){const i={},o=u(n,["systemInstruction"]);e!==void 0&&o!=null&&d(e,["systemInstruction"],It(o));const r=u(n,["tools"]);if(e!==void 0&&r!=null){let a=r;Array.isArray(a)&&(a=a.map(c=>Ph(c))),d(e,["tools"],a)}const s=u(n,["generationConfig"]);return e!==void 0&&s!=null&&d(e,["generationConfig"],pv(s)),i}function M_(n,e,t){const i={},o=u(e,["model"]);o!=null&&d(i,["_url","model"],it(n,o));const r=u(e,["contents"]);if(r!=null){let a=Qt(r);Array.isArray(a)&&(a=a.map(c=>Xo(c))),d(i,["contents"],a)}const s=u(e,["config"]);return s!=null&&S_(s),i}function A_(n,e,t){const i={},o=u(e,["model"]);o!=null&&d(i,["_url","model"],it(n,o));const r=u(e,["contents"]);if(r!=null){let a=Qt(r);Array.isArray(a)&&(a=a.map(c=>c)),d(i,["contents"],a)}const s=u(e,["config"]);return s!=null&&T_(s,i),i}function C_(n,e){const t={},i=u(n,["sdkHttpResponse"]);i!=null&&d(t,["sdkHttpResponse"],i);const o=u(n,["totalTokens"]);o!=null&&d(t,["totalTokens"],o);const r=u(n,["cachedContentTokenCount"]);return r!=null&&d(t,["cachedContentTokenCount"],r),t}function w_(n,e){const t={},i=u(n,["sdkHttpResponse"]);i!=null&&d(t,["sdkHttpResponse"],i);const o=u(n,["totalTokens"]);return o!=null&&d(t,["totalTokens"],o),t}function b_(n,e,t){const i={},o=u(e,["model"]);return o!=null&&d(i,["_url","name"],it(n,o)),i}function I_(n,e,t){const i={},o=u(e,["model"]);return o!=null&&d(i,["_url","name"],it(n,o)),i}function R_(n,e){const t={},i=u(n,["sdkHttpResponse"]);return i!=null&&d(t,["sdkHttpResponse"],i),t}function P_(n,e){const t={},i=u(n,["sdkHttpResponse"]);return i!=null&&d(t,["sdkHttpResponse"],i),t}function D_(n,e,t){const i={},o=u(n,["outputGcsUri"]);e!==void 0&&o!=null&&d(e,["parameters","storageUri"],o);const r=u(n,["negativePrompt"]);e!==void 0&&r!=null&&d(e,["parameters","negativePrompt"],r);const s=u(n,["numberOfImages"]);e!==void 0&&s!=null&&d(e,["parameters","sampleCount"],s);const a=u(n,["aspectRatio"]);e!==void 0&&a!=null&&d(e,["parameters","aspectRatio"],a);const c=u(n,["guidanceScale"]);e!==void 0&&c!=null&&d(e,["parameters","guidanceScale"],c);const l=u(n,["seed"]);e!==void 0&&l!=null&&d(e,["parameters","seed"],l);const f=u(n,["safetyFilterLevel"]);e!==void 0&&f!=null&&d(e,["parameters","safetySetting"],f);const p=u(n,["personGeneration"]);e!==void 0&&p!=null&&d(e,["parameters","personGeneration"],p);const h=u(n,["includeSafetyAttributes"]);e!==void 0&&h!=null&&d(e,["parameters","includeSafetyAttributes"],h);const m=u(n,["includeRaiReason"]);e!==void 0&&m!=null&&d(e,["parameters","includeRaiReason"],m);const v=u(n,["language"]);e!==void 0&&v!=null&&d(e,["parameters","language"],v);const y=u(n,["outputMimeType"]);e!==void 0&&y!=null&&d(e,["parameters","outputOptions","mimeType"],y);const g=u(n,["outputCompressionQuality"]);e!==void 0&&g!=null&&d(e,["parameters","outputOptions","compressionQuality"],g);const _=u(n,["addWatermark"]);e!==void 0&&_!=null&&d(e,["parameters","addWatermark"],_);const E=u(n,["labels"]);e!==void 0&&E!=null&&d(e,["labels"],E);const A=u(n,["editMode"]);e!==void 0&&A!=null&&d(e,["parameters","editMode"],A);const S=u(n,["baseSteps"]);return e!==void 0&&S!=null&&d(e,["parameters","editConfig","baseSteps"],S),i}function N_(n,e,t){const i={},o=u(e,["model"]);o!=null&&d(i,["_url","model"],it(n,o));const r=u(e,["prompt"]);r!=null&&d(i,["instances[0]","prompt"],r);const s=u(e,["referenceImages"]);if(s!=null){let c=s;Array.isArray(c)&&(c=c.map(l=>Uv(l))),d(i,["instances[0]","referenceImages"],c)}const a=u(e,["config"]);return a!=null&&D_(a,i),i}function L_(n,e){const t={},i=u(n,["sdkHttpResponse"]);i!=null&&d(t,["sdkHttpResponse"],i);const o=u(n,["predictions"]);if(o!=null){let r=o;Array.isArray(r)&&(r=r.map(s=>ss(s))),d(t,["generatedImages"],r)}return t}function U_(n,e,t){const i={},o=u(n,["taskType"]);e!==void 0&&o!=null&&d(e,["requests[]","taskType"],o);const r=u(n,["title"]);e!==void 0&&r!=null&&d(e,["requests[]","title"],r);const s=u(n,["outputDimensionality"]);if(e!==void 0&&s!=null&&d(e,["requests[]","outputDimensionality"],s),u(n,["mimeType"])!==void 0)throw new Error("mimeType parameter is not supported in Gemini API.");if(u(n,["autoTruncate"])!==void 0)throw new Error("autoTruncate parameter is not supported in Gemini API.");return i}function F_(n,e,t){const i={};let o=u(t,["embeddingApiType"]);if(o===void 0&&(o="PREDICT"),o==="PREDICT"){const l=u(n,["taskType"]);e!==void 0&&l!=null&&d(e,["instances[]","task_type"],l)}else if(o==="EMBED_CONTENT"){const l=u(n,["taskType"]);e!==void 0&&l!=null&&d(e,["taskType"],l)}let r=u(t,["embeddingApiType"]);if(r===void 0&&(r="PREDICT"),r==="PREDICT"){const l=u(n,["title"]);e!==void 0&&l!=null&&d(e,["instances[]","title"],l)}else if(r==="EMBED_CONTENT"){const l=u(n,["title"]);e!==void 0&&l!=null&&d(e,["title"],l)}let s=u(t,["embeddingApiType"]);if(s===void 0&&(s="PREDICT"),s==="PREDICT"){const l=u(n,["outputDimensionality"]);e!==void 0&&l!=null&&d(e,["parameters","outputDimensionality"],l)}else if(s==="EMBED_CONTENT"){const l=u(n,["outputDimensionality"]);e!==void 0&&l!=null&&d(e,["outputDimensionality"],l)}let a=u(t,["embeddingApiType"]);if(a===void 0&&(a="PREDICT"),a==="PREDICT"){const l=u(n,["mimeType"]);e!==void 0&&l!=null&&d(e,["instances[]","mimeType"],l)}let c=u(t,["embeddingApiType"]);if(c===void 0&&(c="PREDICT"),c==="PREDICT"){const l=u(n,["autoTruncate"]);e!==void 0&&l!=null&&d(e,["parameters","autoTruncate"],l)}else if(c==="EMBED_CONTENT"){const l=u(n,["autoTruncate"]);e!==void 0&&l!=null&&d(e,["autoTruncate"],l)}return i}function B_(n,e,t){const i={},o=u(e,["model"]);o!=null&&d(i,["_url","model"],it(n,o));const r=u(e,["contents"]);if(r!=null){let l=Jl(n,r);Array.isArray(l)&&(l=l.map(f=>f)),d(i,["requests[]","content"],l)}const s=u(e,["content"]);s!=null&&Xo(It(s));const a=u(e,["config"]);a!=null&&U_(a,i);const c=u(e,["model"]);return c!==void 0&&d(i,["requests[]","model"],it(n,c)),i}function k_(n,e,t){const i={},o=u(e,["model"]);o!=null&&d(i,["_url","model"],it(n,o));let r=u(t,["embeddingApiType"]);if(r===void 0&&(r="PREDICT"),r==="PREDICT"){const c=u(e,["contents"]);if(c!=null){let l=Jl(n,c);Array.isArray(l)&&(l=l.map(f=>f)),d(i,["instances[]","content"],l)}}let s=u(t,["embeddingApiType"]);if(s===void 0&&(s="PREDICT"),s==="EMBED_CONTENT"){const c=u(e,["content"]);c!=null&&d(i,["content"],It(c))}const a=u(e,["config"]);return a!=null&&F_(a,i,t),i}function O_(n,e){const t={},i=u(n,["sdkHttpResponse"]);i!=null&&d(t,["sdkHttpResponse"],i);const o=u(n,["embeddings"]);if(o!=null){let s=o;Array.isArray(s)&&(s=s.map(a=>a)),d(t,["embeddings"],s)}const r=u(n,["metadata"]);return r!=null&&d(t,["metadata"],r),t}function G_(n,e){const t={},i=u(n,["sdkHttpResponse"]);i!=null&&d(t,["sdkHttpResponse"],i);const o=u(n,["predictions[]","embeddings"]);if(o!=null){let s=o;Array.isArray(s)&&(s=s.map(a=>y_(a))),d(t,["embeddings"],s)}const r=u(n,["metadata"]);if(r!=null&&d(t,["metadata"],r),e&&u(e,["embeddingApiType"])==="EMBED_CONTENT"){const s=u(n,["embedding"]),a=u(n,["usageMetadata"]),c=u(n,["truncated"]);if(s){const l={};a&&a.promptTokenCount&&(l.tokenCount=a.promptTokenCount),c&&(l.truncated=c),s.statistics=l,d(t,["embeddings"],[s])}}return t}function V_(n,e){const t={},i=u(n,["endpoint"]);i!=null&&d(t,["name"],i);const o=u(n,["deployedModelId"]);return o!=null&&d(t,["deployedModelId"],o),t}function H_(n,e){const t={};if(u(n,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const i=u(n,["fileUri"]);i!=null&&d(t,["fileUri"],i);const o=u(n,["mimeType"]);return o!=null&&d(t,["mimeType"],o),t}function z_(n,e){const t={},i=u(n,["id"]);i!=null&&d(t,["id"],i);const o=u(n,["args"]);o!=null&&d(t,["args"],o);const r=u(n,["name"]);if(r!=null&&d(t,["name"],r),u(n,["partialArgs"])!==void 0)throw new Error("partialArgs parameter is not supported in Gemini API.");if(u(n,["willContinue"])!==void 0)throw new Error("willContinue parameter is not supported in Gemini API.");return t}function W_(n,e){const t={},i=u(n,["allowedFunctionNames"]);i!=null&&d(t,["allowedFunctionNames"],i);const o=u(n,["mode"]);if(o!=null&&d(t,["mode"],o),u(n,["streamFunctionCallArguments"])!==void 0)throw new Error("streamFunctionCallArguments parameter is not supported in Gemini API.");return t}function q_(n,e){const t={},i=u(n,["description"]);i!=null&&d(t,["description"],i);const o=u(n,["name"]);o!=null&&d(t,["name"],o);const r=u(n,["parameters"]);r!=null&&d(t,["parameters"],r);const s=u(n,["parametersJsonSchema"]);s!=null&&d(t,["parametersJsonSchema"],s);const a=u(n,["response"]);a!=null&&d(t,["response"],a);const c=u(n,["responseJsonSchema"]);if(c!=null&&d(t,["responseJsonSchema"],c),u(n,["behavior"])!==void 0)throw new Error("behavior parameter is not supported in Vertex AI.");return t}function X_(n,e,t,i){const o={},r=u(e,["systemInstruction"]);t!==void 0&&r!=null&&d(t,["systemInstruction"],Xo(It(r)));const s=u(e,["temperature"]);s!=null&&d(o,["temperature"],s);const a=u(e,["topP"]);a!=null&&d(o,["topP"],a);const c=u(e,["topK"]);c!=null&&d(o,["topK"],c);const l=u(e,["candidateCount"]);l!=null&&d(o,["candidateCount"],l);const f=u(e,["maxOutputTokens"]);f!=null&&d(o,["maxOutputTokens"],f);const p=u(e,["stopSequences"]);p!=null&&d(o,["stopSequences"],p);const h=u(e,["responseLogprobs"]);h!=null&&d(o,["responseLogprobs"],h);const m=u(e,["logprobs"]);m!=null&&d(o,["logprobs"],m);const v=u(e,["presencePenalty"]);v!=null&&d(o,["presencePenalty"],v);const y=u(e,["frequencyPenalty"]);y!=null&&d(o,["frequencyPenalty"],y);const g=u(e,["seed"]);g!=null&&d(o,["seed"],g);const _=u(e,["responseMimeType"]);_!=null&&d(o,["responseMimeType"],_);const E=u(e,["responseSchema"]);E!=null&&d(o,["responseSchema"],Kl(E));const A=u(e,["responseJsonSchema"]);if(A!=null&&d(o,["responseJsonSchema"],A),u(e,["routingConfig"])!==void 0)throw new Error("routingConfig parameter is not supported in Gemini API.");if(u(e,["modelSelectionConfig"])!==void 0)throw new Error("modelSelectionConfig parameter is not supported in Gemini API.");const S=u(e,["safetySettings"]);if(t!==void 0&&S!=null){let k=S;Array.isArray(k)&&(k=k.map(z=>Fv(z))),d(t,["safetySettings"],k)}const R=u(e,["tools"]);if(t!==void 0&&R!=null){let k=yo(R);Array.isArray(k)&&(k=k.map(z=>zv(vo(z)))),d(t,["tools"],k)}const C=u(e,["toolConfig"]);if(t!==void 0&&C!=null&&d(t,["toolConfig"],Hv(C)),u(e,["labels"])!==void 0)throw new Error("labels parameter is not supported in Gemini API.");const b=u(e,["cachedContent"]);t!==void 0&&b!=null&&d(t,["cachedContent"],Yn(n,b));const x=u(e,["responseModalities"]);x!=null&&d(o,["responseModalities"],x);const M=u(e,["mediaResolution"]);M!=null&&d(o,["mediaResolution"],M);const B=u(e,["speechConfig"]);if(B!=null&&d(o,["speechConfig"],Zl(B)),u(e,["audioTimestamp"])!==void 0)throw new Error("audioTimestamp parameter is not supported in Gemini API.");const I=u(e,["thinkingConfig"]);I!=null&&d(o,["thinkingConfig"],I);const N=u(e,["imageConfig"]);N!=null&&d(o,["imageConfig"],yv(N));const L=u(e,["enableEnhancedCivicAnswers"]);if(L!=null&&d(o,["enableEnhancedCivicAnswers"],L),u(e,["modelArmorConfig"])!==void 0)throw new Error("modelArmorConfig parameter is not supported in Gemini API.");return o}function Y_(n,e,t,i){const o={},r=u(e,["systemInstruction"]);t!==void 0&&r!=null&&d(t,["systemInstruction"],It(r));const s=u(e,["temperature"]);s!=null&&d(o,["temperature"],s);const a=u(e,["topP"]);a!=null&&d(o,["topP"],a);const c=u(e,["topK"]);c!=null&&d(o,["topK"],c);const l=u(e,["candidateCount"]);l!=null&&d(o,["candidateCount"],l);const f=u(e,["maxOutputTokens"]);f!=null&&d(o,["maxOutputTokens"],f);const p=u(e,["stopSequences"]);p!=null&&d(o,["stopSequences"],p);const h=u(e,["responseLogprobs"]);h!=null&&d(o,["responseLogprobs"],h);const m=u(e,["logprobs"]);m!=null&&d(o,["logprobs"],m);const v=u(e,["presencePenalty"]);v!=null&&d(o,["presencePenalty"],v);const y=u(e,["frequencyPenalty"]);y!=null&&d(o,["frequencyPenalty"],y);const g=u(e,["seed"]);g!=null&&d(o,["seed"],g);const _=u(e,["responseMimeType"]);_!=null&&d(o,["responseMimeType"],_);const E=u(e,["responseSchema"]);E!=null&&d(o,["responseSchema"],Kl(E));const A=u(e,["responseJsonSchema"]);A!=null&&d(o,["responseJsonSchema"],A);const S=u(e,["routingConfig"]);S!=null&&d(o,["routingConfig"],S);const R=u(e,["modelSelectionConfig"]);R!=null&&d(o,["modelConfig"],R);const C=u(e,["safetySettings"]);if(t!==void 0&&C!=null){let ie=C;Array.isArray(ie)&&(ie=ie.map(oe=>oe)),d(t,["safetySettings"],ie)}const b=u(e,["tools"]);if(t!==void 0&&b!=null){let ie=yo(b);Array.isArray(ie)&&(ie=ie.map(oe=>Ph(vo(oe)))),d(t,["tools"],ie)}const x=u(e,["toolConfig"]);t!==void 0&&x!=null&&d(t,["toolConfig"],x);const M=u(e,["labels"]);t!==void 0&&M!=null&&d(t,["labels"],M);const B=u(e,["cachedContent"]);t!==void 0&&B!=null&&d(t,["cachedContent"],Yn(n,B));const I=u(e,["responseModalities"]);I!=null&&d(o,["responseModalities"],I);const N=u(e,["mediaResolution"]);N!=null&&d(o,["mediaResolution"],N);const L=u(e,["speechConfig"]);L!=null&&d(o,["speechConfig"],Zl(L));const k=u(e,["audioTimestamp"]);k!=null&&d(o,["audioTimestamp"],k);const z=u(e,["thinkingConfig"]);z!=null&&d(o,["thinkingConfig"],z);const q=u(e,["imageConfig"]);if(q!=null&&d(o,["imageConfig"],xv(q)),u(e,["enableEnhancedCivicAnswers"])!==void 0)throw new Error("enableEnhancedCivicAnswers parameter is not supported in Vertex AI.");const W=u(e,["modelArmorConfig"]);return t!==void 0&&W!=null&&d(t,["modelArmorConfig"],W),o}function dd(n,e,t){const i={},o=u(e,["model"]);o!=null&&d(i,["_url","model"],it(n,o));const r=u(e,["contents"]);if(r!=null){let a=Qt(r);Array.isArray(a)&&(a=a.map(c=>Xo(c))),d(i,["contents"],a)}const s=u(e,["config"]);return s!=null&&d(i,["generationConfig"],X_(n,s,i)),i}function fd(n,e,t){const i={},o=u(e,["model"]);o!=null&&d(i,["_url","model"],it(n,o));const r=u(e,["contents"]);if(r!=null){let a=Qt(r);Array.isArray(a)&&(a=a.map(c=>c)),d(i,["contents"],a)}const s=u(e,["config"]);return s!=null&&d(i,["generationConfig"],Y_(n,s,i)),i}function hd(n,e){const t={},i=u(n,["sdkHttpResponse"]);i!=null&&d(t,["sdkHttpResponse"],i);const o=u(n,["candidates"]);if(o!=null){let l=o;Array.isArray(l)&&(l=l.map(f=>m_(f))),d(t,["candidates"],l)}const r=u(n,["modelVersion"]);r!=null&&d(t,["modelVersion"],r);const s=u(n,["promptFeedback"]);s!=null&&d(t,["promptFeedback"],s);const a=u(n,["responseId"]);a!=null&&d(t,["responseId"],a);const c=u(n,["usageMetadata"]);return c!=null&&d(t,["usageMetadata"],c),t}function pd(n,e){const t={},i=u(n,["sdkHttpResponse"]);i!=null&&d(t,["sdkHttpResponse"],i);const o=u(n,["candidates"]);if(o!=null){let f=o;Array.isArray(f)&&(f=f.map(p=>p)),d(t,["candidates"],f)}const r=u(n,["createTime"]);r!=null&&d(t,["createTime"],r);const s=u(n,["modelVersion"]);s!=null&&d(t,["modelVersion"],s);const a=u(n,["promptFeedback"]);a!=null&&d(t,["promptFeedback"],a);const c=u(n,["responseId"]);c!=null&&d(t,["responseId"],c);const l=u(n,["usageMetadata"]);return l!=null&&d(t,["usageMetadata"],l),t}function $_(n,e,t){const i={};if(u(n,["outputGcsUri"])!==void 0)throw new Error("outputGcsUri parameter is not supported in Gemini API.");if(u(n,["negativePrompt"])!==void 0)throw new Error("negativePrompt parameter is not supported in Gemini API.");const o=u(n,["numberOfImages"]);e!==void 0&&o!=null&&d(e,["parameters","sampleCount"],o);const r=u(n,["aspectRatio"]);e!==void 0&&r!=null&&d(e,["parameters","aspectRatio"],r);const s=u(n,["guidanceScale"]);if(e!==void 0&&s!=null&&d(e,["parameters","guidanceScale"],s),u(n,["seed"])!==void 0)throw new Error("seed parameter is not supported in Gemini API.");const a=u(n,["safetyFilterLevel"]);e!==void 0&&a!=null&&d(e,["parameters","safetySetting"],a);const c=u(n,["personGeneration"]);e!==void 0&&c!=null&&d(e,["parameters","personGeneration"],c);const l=u(n,["includeSafetyAttributes"]);e!==void 0&&l!=null&&d(e,["parameters","includeSafetyAttributes"],l);const f=u(n,["includeRaiReason"]);e!==void 0&&f!=null&&d(e,["parameters","includeRaiReason"],f);const p=u(n,["language"]);e!==void 0&&p!=null&&d(e,["parameters","language"],p);const h=u(n,["outputMimeType"]);e!==void 0&&h!=null&&d(e,["parameters","outputOptions","mimeType"],h);const m=u(n,["outputCompressionQuality"]);if(e!==void 0&&m!=null&&d(e,["parameters","outputOptions","compressionQuality"],m),u(n,["addWatermark"])!==void 0)throw new Error("addWatermark parameter is not supported in Gemini API.");if(u(n,["labels"])!==void 0)throw new Error("labels parameter is not supported in Gemini API.");const v=u(n,["imageSize"]);if(e!==void 0&&v!=null&&d(e,["parameters","sampleImageSize"],v),u(n,["enhancePrompt"])!==void 0)throw new Error("enhancePrompt parameter is not supported in Gemini API.");return i}function J_(n,e,t){const i={},o=u(n,["outputGcsUri"]);e!==void 0&&o!=null&&d(e,["parameters","storageUri"],o);const r=u(n,["negativePrompt"]);e!==void 0&&r!=null&&d(e,["parameters","negativePrompt"],r);const s=u(n,["numberOfImages"]);e!==void 0&&s!=null&&d(e,["parameters","sampleCount"],s);const a=u(n,["aspectRatio"]);e!==void 0&&a!=null&&d(e,["parameters","aspectRatio"],a);const c=u(n,["guidanceScale"]);e!==void 0&&c!=null&&d(e,["parameters","guidanceScale"],c);const l=u(n,["seed"]);e!==void 0&&l!=null&&d(e,["parameters","seed"],l);const f=u(n,["safetyFilterLevel"]);e!==void 0&&f!=null&&d(e,["parameters","safetySetting"],f);const p=u(n,["personGeneration"]);e!==void 0&&p!=null&&d(e,["parameters","personGeneration"],p);const h=u(n,["includeSafetyAttributes"]);e!==void 0&&h!=null&&d(e,["parameters","includeSafetyAttributes"],h);const m=u(n,["includeRaiReason"]);e!==void 0&&m!=null&&d(e,["parameters","includeRaiReason"],m);const v=u(n,["language"]);e!==void 0&&v!=null&&d(e,["parameters","language"],v);const y=u(n,["outputMimeType"]);e!==void 0&&y!=null&&d(e,["parameters","outputOptions","mimeType"],y);const g=u(n,["outputCompressionQuality"]);e!==void 0&&g!=null&&d(e,["parameters","outputOptions","compressionQuality"],g);const _=u(n,["addWatermark"]);e!==void 0&&_!=null&&d(e,["parameters","addWatermark"],_);const E=u(n,["labels"]);e!==void 0&&E!=null&&d(e,["labels"],E);const A=u(n,["imageSize"]);e!==void 0&&A!=null&&d(e,["parameters","sampleImageSize"],A);const S=u(n,["enhancePrompt"]);return e!==void 0&&S!=null&&d(e,["parameters","enhancePrompt"],S),i}function K_(n,e,t){const i={},o=u(e,["model"]);o!=null&&d(i,["_url","model"],it(n,o));const r=u(e,["prompt"]);r!=null&&d(i,["instances[0]","prompt"],r);const s=u(e,["config"]);return s!=null&&$_(s,i),i}function Z_(n,e,t){const i={},o=u(e,["model"]);o!=null&&d(i,["_url","model"],it(n,o));const r=u(e,["prompt"]);r!=null&&d(i,["instances[0]","prompt"],r);const s=u(e,["config"]);return s!=null&&J_(s,i),i}function Q_(n,e){const t={},i=u(n,["sdkHttpResponse"]);i!=null&&d(t,["sdkHttpResponse"],i);const o=u(n,["predictions"]);if(o!=null){let s=o;Array.isArray(s)&&(s=s.map(a=>uv(a))),d(t,["generatedImages"],s)}const r=u(n,["positivePromptSafetyAttributes"]);return r!=null&&d(t,["positivePromptSafetyAttributes"],Ih(r)),t}function j_(n,e){const t={},i=u(n,["sdkHttpResponse"]);i!=null&&d(t,["sdkHttpResponse"],i);const o=u(n,["predictions"]);if(o!=null){let s=o;Array.isArray(s)&&(s=s.map(a=>ss(a))),d(t,["generatedImages"],s)}const r=u(n,["positivePromptSafetyAttributes"]);return r!=null&&d(t,["positivePromptSafetyAttributes"],Rh(r)),t}function ev(n,e,t){const i={},o=u(n,["numberOfVideos"]);if(e!==void 0&&o!=null&&d(e,["parameters","sampleCount"],o),u(n,["outputGcsUri"])!==void 0)throw new Error("outputGcsUri parameter is not supported in Gemini API.");if(u(n,["fps"])!==void 0)throw new Error("fps parameter is not supported in Gemini API.");const r=u(n,["durationSeconds"]);if(e!==void 0&&r!=null&&d(e,["parameters","durationSeconds"],r),u(n,["seed"])!==void 0)throw new Error("seed parameter is not supported in Gemini API.");const s=u(n,["aspectRatio"]);e!==void 0&&s!=null&&d(e,["parameters","aspectRatio"],s);const a=u(n,["resolution"]);e!==void 0&&a!=null&&d(e,["parameters","resolution"],a);const c=u(n,["personGeneration"]);if(e!==void 0&&c!=null&&d(e,["parameters","personGeneration"],c),u(n,["pubsubTopic"])!==void 0)throw new Error("pubsubTopic parameter is not supported in Gemini API.");const l=u(n,["negativePrompt"]);e!==void 0&&l!=null&&d(e,["parameters","negativePrompt"],l);const f=u(n,["enhancePrompt"]);if(e!==void 0&&f!=null&&d(e,["parameters","enhancePrompt"],f),u(n,["generateAudio"])!==void 0)throw new Error("generateAudio parameter is not supported in Gemini API.");const p=u(n,["lastFrame"]);e!==void 0&&p!=null&&d(e,["instances[0]","lastFrame"],as(p));const h=u(n,["referenceImages"]);if(e!==void 0&&h!=null){let m=h;Array.isArray(m)&&(m=m.map(v=>ny(v))),d(e,["instances[0]","referenceImages"],m)}if(u(n,["mask"])!==void 0)throw new Error("mask parameter is not supported in Gemini API.");if(u(n,["compressionQuality"])!==void 0)throw new Error("compressionQuality parameter is not supported in Gemini API.");return i}function tv(n,e,t){const i={},o=u(n,["numberOfVideos"]);e!==void 0&&o!=null&&d(e,["parameters","sampleCount"],o);const r=u(n,["outputGcsUri"]);e!==void 0&&r!=null&&d(e,["parameters","storageUri"],r);const s=u(n,["fps"]);e!==void 0&&s!=null&&d(e,["parameters","fps"],s);const a=u(n,["durationSeconds"]);e!==void 0&&a!=null&&d(e,["parameters","durationSeconds"],a);const c=u(n,["seed"]);e!==void 0&&c!=null&&d(e,["parameters","seed"],c);const l=u(n,["aspectRatio"]);e!==void 0&&l!=null&&d(e,["parameters","aspectRatio"],l);const f=u(n,["resolution"]);e!==void 0&&f!=null&&d(e,["parameters","resolution"],f);const p=u(n,["personGeneration"]);e!==void 0&&p!=null&&d(e,["parameters","personGeneration"],p);const h=u(n,["pubsubTopic"]);e!==void 0&&h!=null&&d(e,["parameters","pubsubTopic"],h);const m=u(n,["negativePrompt"]);e!==void 0&&m!=null&&d(e,["parameters","negativePrompt"],m);const v=u(n,["enhancePrompt"]);e!==void 0&&v!=null&&d(e,["parameters","enhancePrompt"],v);const y=u(n,["generateAudio"]);e!==void 0&&y!=null&&d(e,["parameters","generateAudio"],y);const g=u(n,["lastFrame"]);e!==void 0&&g!=null&&d(e,["instances[0]","lastFrame"],hn(g));const _=u(n,["referenceImages"]);if(e!==void 0&&_!=null){let S=_;Array.isArray(S)&&(S=S.map(R=>iy(R))),d(e,["instances[0]","referenceImages"],S)}const E=u(n,["mask"]);e!==void 0&&E!=null&&d(e,["instances[0]","mask"],ty(E));const A=u(n,["compressionQuality"]);return e!==void 0&&A!=null&&d(e,["parameters","compressionQuality"],A),i}function nv(n,e){const t={},i=u(n,["name"]);i!=null&&d(t,["name"],i);const o=u(n,["metadata"]);o!=null&&d(t,["metadata"],o);const r=u(n,["done"]);r!=null&&d(t,["done"],r);const s=u(n,["error"]);s!=null&&d(t,["error"],s);const a=u(n,["response","generateVideoResponse"]);return a!=null&&d(t,["response"],sv(a)),t}function iv(n,e){const t={},i=u(n,["name"]);i!=null&&d(t,["name"],i);const o=u(n,["metadata"]);o!=null&&d(t,["metadata"],o);const r=u(n,["done"]);r!=null&&d(t,["done"],r);const s=u(n,["error"]);s!=null&&d(t,["error"],s);const a=u(n,["response"]);return a!=null&&d(t,["response"],av(a)),t}function ov(n,e,t){const i={},o=u(e,["model"]);o!=null&&d(i,["_url","model"],it(n,o));const r=u(e,["prompt"]);r!=null&&d(i,["instances[0]","prompt"],r);const s=u(e,["image"]);s!=null&&d(i,["instances[0]","image"],as(s));const a=u(e,["video"]);a!=null&&d(i,["instances[0]","video"],Dh(a));const c=u(e,["source"]);c!=null&&lv(c,i);const l=u(e,["config"]);return l!=null&&ev(l,i),i}function rv(n,e,t){const i={},o=u(e,["model"]);o!=null&&d(i,["_url","model"],it(n,o));const r=u(e,["prompt"]);r!=null&&d(i,["instances[0]","prompt"],r);const s=u(e,["image"]);s!=null&&d(i,["instances[0]","image"],hn(s));const a=u(e,["video"]);a!=null&&d(i,["instances[0]","video"],Nh(a));const c=u(e,["source"]);c!=null&&cv(c,i);const l=u(e,["config"]);return l!=null&&tv(l,i),i}function sv(n,e){const t={},i=u(n,["generatedSamples"]);if(i!=null){let s=i;Array.isArray(s)&&(s=s.map(a=>fv(a))),d(t,["generatedVideos"],s)}const o=u(n,["raiMediaFilteredCount"]);o!=null&&d(t,["raiMediaFilteredCount"],o);const r=u(n,["raiMediaFilteredReasons"]);return r!=null&&d(t,["raiMediaFilteredReasons"],r),t}function av(n,e){const t={},i=u(n,["videos"]);if(i!=null){let s=i;Array.isArray(s)&&(s=s.map(a=>hv(a))),d(t,["generatedVideos"],s)}const o=u(n,["raiMediaFilteredCount"]);o!=null&&d(t,["raiMediaFilteredCount"],o);const r=u(n,["raiMediaFilteredReasons"]);return r!=null&&d(t,["raiMediaFilteredReasons"],r),t}function lv(n,e,t){const i={},o=u(n,["prompt"]);e!==void 0&&o!=null&&d(e,["instances[0]","prompt"],o);const r=u(n,["image"]);e!==void 0&&r!=null&&d(e,["instances[0]","image"],as(r));const s=u(n,["video"]);return e!==void 0&&s!=null&&d(e,["instances[0]","video"],Dh(s)),i}function cv(n,e,t){const i={},o=u(n,["prompt"]);e!==void 0&&o!=null&&d(e,["instances[0]","prompt"],o);const r=u(n,["image"]);e!==void 0&&r!=null&&d(e,["instances[0]","image"],hn(r));const s=u(n,["video"]);return e!==void 0&&s!=null&&d(e,["instances[0]","video"],Nh(s)),i}function uv(n,e){const t={},i=u(n,["_self"]);i!=null&&d(t,["image"],Ev(i));const o=u(n,["raiFilteredReason"]);o!=null&&d(t,["raiFilteredReason"],o);const r=u(n,["_self"]);return r!=null&&d(t,["safetyAttributes"],Ih(r)),t}function ss(n,e){const t={},i=u(n,["_self"]);i!=null&&d(t,["image"],bh(i));const o=u(n,["raiFilteredReason"]);o!=null&&d(t,["raiFilteredReason"],o);const r=u(n,["_self"]);r!=null&&d(t,["safetyAttributes"],Rh(r));const s=u(n,["prompt"]);return s!=null&&d(t,["enhancedPrompt"],s),t}function dv(n,e){const t={},i=u(n,["_self"]);i!=null&&d(t,["mask"],bh(i));const o=u(n,["labels"]);if(o!=null){let r=o;Array.isArray(r)&&(r=r.map(s=>s)),d(t,["labels"],r)}return t}function fv(n,e){const t={},i=u(n,["video"]);return i!=null&&d(t,["video"],jv(i)),t}function hv(n,e){const t={},i=u(n,["_self"]);return i!=null&&d(t,["video"],ey(i)),t}function pv(n,e){const t={},i=u(n,["modelSelectionConfig"]);i!=null&&d(t,["modelConfig"],i);const o=u(n,["responseJsonSchema"]);o!=null&&d(t,["responseJsonSchema"],o);const r=u(n,["audioTimestamp"]);r!=null&&d(t,["audioTimestamp"],r);const s=u(n,["candidateCount"]);s!=null&&d(t,["candidateCount"],s);const a=u(n,["enableAffectiveDialog"]);a!=null&&d(t,["enableAffectiveDialog"],a);const c=u(n,["frequencyPenalty"]);c!=null&&d(t,["frequencyPenalty"],c);const l=u(n,["logprobs"]);l!=null&&d(t,["logprobs"],l);const f=u(n,["maxOutputTokens"]);f!=null&&d(t,["maxOutputTokens"],f);const p=u(n,["mediaResolution"]);p!=null&&d(t,["mediaResolution"],p);const h=u(n,["presencePenalty"]);h!=null&&d(t,["presencePenalty"],h);const m=u(n,["responseLogprobs"]);m!=null&&d(t,["responseLogprobs"],m);const v=u(n,["responseMimeType"]);v!=null&&d(t,["responseMimeType"],v);const y=u(n,["responseModalities"]);y!=null&&d(t,["responseModalities"],y);const g=u(n,["responseSchema"]);g!=null&&d(t,["responseSchema"],g);const _=u(n,["routingConfig"]);_!=null&&d(t,["routingConfig"],_);const E=u(n,["seed"]);E!=null&&d(t,["seed"],E);const A=u(n,["speechConfig"]);A!=null&&d(t,["speechConfig"],A);const S=u(n,["stopSequences"]);S!=null&&d(t,["stopSequences"],S);const R=u(n,["temperature"]);R!=null&&d(t,["temperature"],R);const C=u(n,["thinkingConfig"]);C!=null&&d(t,["thinkingConfig"],C);const b=u(n,["topK"]);b!=null&&d(t,["topK"],b);const x=u(n,["topP"]);if(x!=null&&d(t,["topP"],x),u(n,["enableEnhancedCivicAnswers"])!==void 0)throw new Error("enableEnhancedCivicAnswers parameter is not supported in Vertex AI.");return t}function mv(n,e,t){const i={},o=u(e,["model"]);return o!=null&&d(i,["_url","name"],it(n,o)),i}function gv(n,e,t){const i={},o=u(e,["model"]);return o!=null&&d(i,["_url","name"],it(n,o)),i}function _v(n,e){const t={},i=u(n,["authConfig"]);i!=null&&d(t,["authConfig"],h_(i));const o=u(n,["enableWidget"]);return o!=null&&d(t,["enableWidget"],o),t}function vv(n,e){const t={},i=u(n,["searchTypes"]);if(i!=null&&d(t,["searchTypes"],i),u(n,["blockingConfidence"])!==void 0)throw new Error("blockingConfidence parameter is not supported in Gemini API.");if(u(n,["excludeDomains"])!==void 0)throw new Error("excludeDomains parameter is not supported in Gemini API.");const o=u(n,["timeRangeFilter"]);return o!=null&&d(t,["timeRangeFilter"],o),t}function yv(n,e){const t={},i=u(n,["aspectRatio"]);i!=null&&d(t,["aspectRatio"],i);const o=u(n,["imageSize"]);if(o!=null&&d(t,["imageSize"],o),u(n,["personGeneration"])!==void 0)throw new Error("personGeneration parameter is not supported in Gemini API.");if(u(n,["prominentPeople"])!==void 0)throw new Error("prominentPeople parameter is not supported in Gemini API.");if(u(n,["outputMimeType"])!==void 0)throw new Error("outputMimeType parameter is not supported in Gemini API.");if(u(n,["outputCompressionQuality"])!==void 0)throw new Error("outputCompressionQuality parameter is not supported in Gemini API.");if(u(n,["imageOutputOptions"])!==void 0)throw new Error("imageOutputOptions parameter is not supported in Gemini API.");return t}function xv(n,e){const t={},i=u(n,["aspectRatio"]);i!=null&&d(t,["aspectRatio"],i);const o=u(n,["imageSize"]);o!=null&&d(t,["imageSize"],o);const r=u(n,["personGeneration"]);r!=null&&d(t,["personGeneration"],r);const s=u(n,["prominentPeople"]);s!=null&&d(t,["prominentPeople"],s);const a=u(n,["outputMimeType"]);a!=null&&d(t,["imageOutputOptions","mimeType"],a);const c=u(n,["outputCompressionQuality"]);c!=null&&d(t,["imageOutputOptions","compressionQuality"],c);const l=u(n,["imageOutputOptions"]);return l!=null&&d(t,["imageOutputOptions"],l),t}function Ev(n,e){const t={},i=u(n,["bytesBase64Encoded"]);i!=null&&d(t,["imageBytes"],fi(i));const o=u(n,["mimeType"]);return o!=null&&d(t,["mimeType"],o),t}function bh(n,e){const t={},i=u(n,["gcsUri"]);i!=null&&d(t,["gcsUri"],i);const o=u(n,["bytesBase64Encoded"]);o!=null&&d(t,["imageBytes"],fi(o));const r=u(n,["mimeType"]);return r!=null&&d(t,["mimeType"],r),t}function as(n,e){const t={};if(u(n,["gcsUri"])!==void 0)throw new Error("gcsUri parameter is not supported in Gemini API.");const i=u(n,["imageBytes"]);i!=null&&d(t,["bytesBase64Encoded"],fi(i));const o=u(n,["mimeType"]);return o!=null&&d(t,["mimeType"],o),t}function hn(n,e){const t={},i=u(n,["gcsUri"]);i!=null&&d(t,["gcsUri"],i);const o=u(n,["imageBytes"]);o!=null&&d(t,["bytesBase64Encoded"],fi(o));const r=u(n,["mimeType"]);return r!=null&&d(t,["mimeType"],r),t}function Sv(n,e,t,i){const o={},r=u(e,["pageSize"]);t!==void 0&&r!=null&&d(t,["_query","pageSize"],r);const s=u(e,["pageToken"]);t!==void 0&&s!=null&&d(t,["_query","pageToken"],s);const a=u(e,["filter"]);t!==void 0&&a!=null&&d(t,["_query","filter"],a);const c=u(e,["queryBase"]);return t!==void 0&&c!=null&&d(t,["_url","models_url"],Eh(n,c)),o}function Tv(n,e,t,i){const o={},r=u(e,["pageSize"]);t!==void 0&&r!=null&&d(t,["_query","pageSize"],r);const s=u(e,["pageToken"]);t!==void 0&&s!=null&&d(t,["_query","pageToken"],s);const a=u(e,["filter"]);t!==void 0&&a!=null&&d(t,["_query","filter"],a);const c=u(e,["queryBase"]);return t!==void 0&&c!=null&&d(t,["_url","models_url"],Eh(n,c)),o}function Mv(n,e,t){const i={},o=u(e,["config"]);return o!=null&&Sv(n,o,i),i}function Av(n,e,t){const i={},o=u(e,["config"]);return o!=null&&Tv(n,o,i),i}function Cv(n,e){const t={},i=u(n,["sdkHttpResponse"]);i!=null&&d(t,["sdkHttpResponse"],i);const o=u(n,["nextPageToken"]);o!=null&&d(t,["nextPageToken"],o);const r=u(n,["_self"]);if(r!=null){let s=Sh(r);Array.isArray(s)&&(s=s.map(a=>Ba(a))),d(t,["models"],s)}return t}function wv(n,e){const t={},i=u(n,["sdkHttpResponse"]);i!=null&&d(t,["sdkHttpResponse"],i);const o=u(n,["nextPageToken"]);o!=null&&d(t,["nextPageToken"],o);const r=u(n,["_self"]);if(r!=null){let s=Sh(r);Array.isArray(s)&&(s=s.map(a=>ka(a))),d(t,["models"],s)}return t}function bv(n,e){const t={},i=u(n,["maskMode"]);i!=null&&d(t,["maskMode"],i);const o=u(n,["segmentationClasses"]);o!=null&&d(t,["maskClasses"],o);const r=u(n,["maskDilation"]);return r!=null&&d(t,["dilation"],r),t}function Ba(n,e){const t={},i=u(n,["name"]);i!=null&&d(t,["name"],i);const o=u(n,["displayName"]);o!=null&&d(t,["displayName"],o);const r=u(n,["description"]);r!=null&&d(t,["description"],r);const s=u(n,["version"]);s!=null&&d(t,["version"],s);const a=u(n,["_self"]);a!=null&&d(t,["tunedModelInfo"],Wv(a));const c=u(n,["inputTokenLimit"]);c!=null&&d(t,["inputTokenLimit"],c);const l=u(n,["outputTokenLimit"]);l!=null&&d(t,["outputTokenLimit"],l);const f=u(n,["supportedGenerationMethods"]);f!=null&&d(t,["supportedActions"],f);const p=u(n,["temperature"]);p!=null&&d(t,["temperature"],p);const h=u(n,["maxTemperature"]);h!=null&&d(t,["maxTemperature"],h);const m=u(n,["topP"]);m!=null&&d(t,["topP"],m);const v=u(n,["topK"]);v!=null&&d(t,["topK"],v);const y=u(n,["thinking"]);return y!=null&&d(t,["thinking"],y),t}function ka(n,e){const t={},i=u(n,["name"]);i!=null&&d(t,["name"],i);const o=u(n,["displayName"]);o!=null&&d(t,["displayName"],o);const r=u(n,["description"]);r!=null&&d(t,["description"],r);const s=u(n,["versionId"]);s!=null&&d(t,["version"],s);const a=u(n,["deployedModels"]);if(a!=null){let h=a;Array.isArray(h)&&(h=h.map(m=>V_(m))),d(t,["endpoints"],h)}const c=u(n,["labels"]);c!=null&&d(t,["labels"],c);const l=u(n,["_self"]);l!=null&&d(t,["tunedModelInfo"],qv(l));const f=u(n,["defaultCheckpointId"]);f!=null&&d(t,["defaultCheckpointId"],f);const p=u(n,["checkpoints"]);if(p!=null){let h=p;Array.isArray(h)&&(h=h.map(m=>m)),d(t,["checkpoints"],h)}return t}function Iv(n,e){const t={},i=u(n,["mediaResolution"]);i!=null&&d(t,["mediaResolution"],i);const o=u(n,["codeExecutionResult"]);o!=null&&d(t,["codeExecutionResult"],o);const r=u(n,["executableCode"]);r!=null&&d(t,["executableCode"],r);const s=u(n,["fileData"]);s!=null&&d(t,["fileData"],H_(s));const a=u(n,["functionCall"]);a!=null&&d(t,["functionCall"],z_(a));const c=u(n,["functionResponse"]);c!=null&&d(t,["functionResponse"],c);const l=u(n,["inlineData"]);l!=null&&d(t,["inlineData"],p_(l));const f=u(n,["text"]);f!=null&&d(t,["text"],f);const p=u(n,["thought"]);p!=null&&d(t,["thought"],p);const h=u(n,["thoughtSignature"]);h!=null&&d(t,["thoughtSignature"],h);const m=u(n,["videoMetadata"]);return m!=null&&d(t,["videoMetadata"],m),t}function Rv(n,e){const t={},i=u(n,["productImage"]);return i!=null&&d(t,["image"],hn(i)),t}function Pv(n,e,t){const i={},o=u(n,["numberOfImages"]);e!==void 0&&o!=null&&d(e,["parameters","sampleCount"],o);const r=u(n,["baseSteps"]);e!==void 0&&r!=null&&d(e,["parameters","baseSteps"],r);const s=u(n,["outputGcsUri"]);e!==void 0&&s!=null&&d(e,["parameters","storageUri"],s);const a=u(n,["seed"]);e!==void 0&&a!=null&&d(e,["parameters","seed"],a);const c=u(n,["safetyFilterLevel"]);e!==void 0&&c!=null&&d(e,["parameters","safetySetting"],c);const l=u(n,["personGeneration"]);e!==void 0&&l!=null&&d(e,["parameters","personGeneration"],l);const f=u(n,["addWatermark"]);e!==void 0&&f!=null&&d(e,["parameters","addWatermark"],f);const p=u(n,["outputMimeType"]);e!==void 0&&p!=null&&d(e,["parameters","outputOptions","mimeType"],p);const h=u(n,["outputCompressionQuality"]);e!==void 0&&h!=null&&d(e,["parameters","outputOptions","compressionQuality"],h);const m=u(n,["enhancePrompt"]);e!==void 0&&m!=null&&d(e,["parameters","enhancePrompt"],m);const v=u(n,["labels"]);return e!==void 0&&v!=null&&d(e,["labels"],v),i}function Dv(n,e,t){const i={},o=u(e,["model"]);o!=null&&d(i,["_url","model"],it(n,o));const r=u(e,["source"]);r!=null&&Lv(r,i);const s=u(e,["config"]);return s!=null&&Pv(s,i),i}function Nv(n,e){const t={},i=u(n,["predictions"]);if(i!=null){let o=i;Array.isArray(o)&&(o=o.map(r=>ss(r))),d(t,["generatedImages"],o)}return t}function Lv(n,e,t){const i={},o=u(n,["prompt"]);e!==void 0&&o!=null&&d(e,["instances[0]","prompt"],o);const r=u(n,["personImage"]);e!==void 0&&r!=null&&d(e,["instances[0]","personImage","image"],hn(r));const s=u(n,["productImages"]);if(e!==void 0&&s!=null){let a=s;Array.isArray(a)&&(a=a.map(c=>Rv(c))),d(e,["instances[0]","productImages"],a)}return i}function Uv(n,e){const t={},i=u(n,["referenceImage"]);i!=null&&d(t,["referenceImage"],hn(i));const o=u(n,["referenceId"]);o!=null&&d(t,["referenceId"],o);const r=u(n,["referenceType"]);r!=null&&d(t,["referenceType"],r);const s=u(n,["maskImageConfig"]);s!=null&&d(t,["maskImageConfig"],bv(s));const a=u(n,["controlImageConfig"]);a!=null&&d(t,["controlImageConfig"],E_(a));const c=u(n,["styleImageConfig"]);c!=null&&d(t,["styleImageConfig"],c);const l=u(n,["subjectImageConfig"]);return l!=null&&d(t,["subjectImageConfig"],l),t}function Ih(n,e){const t={},i=u(n,["safetyAttributes","categories"]);i!=null&&d(t,["categories"],i);const o=u(n,["safetyAttributes","scores"]);o!=null&&d(t,["scores"],o);const r=u(n,["contentType"]);return r!=null&&d(t,["contentType"],r),t}function Rh(n,e){const t={},i=u(n,["safetyAttributes","categories"]);i!=null&&d(t,["categories"],i);const o=u(n,["safetyAttributes","scores"]);o!=null&&d(t,["scores"],o);const r=u(n,["contentType"]);return r!=null&&d(t,["contentType"],r),t}function Fv(n,e){const t={},i=u(n,["category"]);if(i!=null&&d(t,["category"],i),u(n,["method"])!==void 0)throw new Error("method parameter is not supported in Gemini API.");const o=u(n,["threshold"]);return o!=null&&d(t,["threshold"],o),t}function Bv(n,e){const t={},i=u(n,["image"]);return i!=null&&d(t,["image"],hn(i)),t}function kv(n,e,t){const i={},o=u(n,["mode"]);e!==void 0&&o!=null&&d(e,["parameters","mode"],o);const r=u(n,["maxPredictions"]);e!==void 0&&r!=null&&d(e,["parameters","maxPredictions"],r);const s=u(n,["confidenceThreshold"]);e!==void 0&&s!=null&&d(e,["parameters","confidenceThreshold"],s);const a=u(n,["maskDilation"]);e!==void 0&&a!=null&&d(e,["parameters","maskDilation"],a);const c=u(n,["binaryColorThreshold"]);e!==void 0&&c!=null&&d(e,["parameters","binaryColorThreshold"],c);const l=u(n,["labels"]);return e!==void 0&&l!=null&&d(e,["labels"],l),i}function Ov(n,e,t){const i={},o=u(e,["model"]);o!=null&&d(i,["_url","model"],it(n,o));const r=u(e,["source"]);r!=null&&Vv(r,i);const s=u(e,["config"]);return s!=null&&kv(s,i),i}function Gv(n,e){const t={},i=u(n,["predictions"]);if(i!=null){let o=i;Array.isArray(o)&&(o=o.map(r=>dv(r))),d(t,["generatedMasks"],o)}return t}function Vv(n,e,t){const i={},o=u(n,["prompt"]);e!==void 0&&o!=null&&d(e,["instances[0]","prompt"],o);const r=u(n,["image"]);e!==void 0&&r!=null&&d(e,["instances[0]","image"],hn(r));const s=u(n,["scribbleImage"]);return e!==void 0&&s!=null&&d(e,["instances[0]","scribble"],Bv(s)),i}function Hv(n,e){const t={},i=u(n,["retrievalConfig"]);i!=null&&d(t,["retrievalConfig"],i);const o=u(n,["functionCallingConfig"]);return o!=null&&d(t,["functionCallingConfig"],W_(o)),t}function zv(n,e){const t={};if(u(n,["retrieval"])!==void 0)throw new Error("retrieval parameter is not supported in Gemini API.");const i=u(n,["computerUse"]);i!=null&&d(t,["computerUse"],i);const o=u(n,["fileSearch"]);o!=null&&d(t,["fileSearch"],o);const r=u(n,["googleSearch"]);r!=null&&d(t,["googleSearch"],vv(r));const s=u(n,["googleMaps"]);s!=null&&d(t,["googleMaps"],_v(s));const a=u(n,["codeExecution"]);if(a!=null&&d(t,["codeExecution"],a),u(n,["enterpriseWebSearch"])!==void 0)throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");const c=u(n,["functionDeclarations"]);if(c!=null){let h=c;Array.isArray(h)&&(h=h.map(m=>m)),d(t,["functionDeclarations"],h)}const l=u(n,["googleSearchRetrieval"]);if(l!=null&&d(t,["googleSearchRetrieval"],l),u(n,["parallelAiSearch"])!==void 0)throw new Error("parallelAiSearch parameter is not supported in Gemini API.");const f=u(n,["urlContext"]);f!=null&&d(t,["urlContext"],f);const p=u(n,["mcpServers"]);if(p!=null){let h=p;Array.isArray(h)&&(h=h.map(m=>m)),d(t,["mcpServers"],h)}return t}function Ph(n,e){const t={},i=u(n,["retrieval"]);i!=null&&d(t,["retrieval"],i);const o=u(n,["computerUse"]);if(o!=null&&d(t,["computerUse"],o),u(n,["fileSearch"])!==void 0)throw new Error("fileSearch parameter is not supported in Vertex AI.");const r=u(n,["googleSearch"]);r!=null&&d(t,["googleSearch"],r);const s=u(n,["googleMaps"]);s!=null&&d(t,["googleMaps"],s);const a=u(n,["codeExecution"]);a!=null&&d(t,["codeExecution"],a);const c=u(n,["enterpriseWebSearch"]);c!=null&&d(t,["enterpriseWebSearch"],c);const l=u(n,["functionDeclarations"]);if(l!=null){let m=l;Array.isArray(m)&&(m=m.map(v=>q_(v))),d(t,["functionDeclarations"],m)}const f=u(n,["googleSearchRetrieval"]);f!=null&&d(t,["googleSearchRetrieval"],f);const p=u(n,["parallelAiSearch"]);p!=null&&d(t,["parallelAiSearch"],p);const h=u(n,["urlContext"]);if(h!=null&&d(t,["urlContext"],h),u(n,["mcpServers"])!==void 0)throw new Error("mcpServers parameter is not supported in Vertex AI.");return t}function Wv(n,e){const t={},i=u(n,["baseModel"]);i!=null&&d(t,["baseModel"],i);const o=u(n,["createTime"]);o!=null&&d(t,["createTime"],o);const r=u(n,["updateTime"]);return r!=null&&d(t,["updateTime"],r),t}function qv(n,e){const t={},i=u(n,["labels","google-vertex-llm-tuning-base-model-id"]);i!=null&&d(t,["baseModel"],i);const o=u(n,["createTime"]);o!=null&&d(t,["createTime"],o);const r=u(n,["updateTime"]);return r!=null&&d(t,["updateTime"],r),t}function Xv(n,e,t){const i={},o=u(n,["displayName"]);e!==void 0&&o!=null&&d(e,["displayName"],o);const r=u(n,["description"]);e!==void 0&&r!=null&&d(e,["description"],r);const s=u(n,["defaultCheckpointId"]);return e!==void 0&&s!=null&&d(e,["defaultCheckpointId"],s),i}function Yv(n,e,t){const i={},o=u(n,["displayName"]);e!==void 0&&o!=null&&d(e,["displayName"],o);const r=u(n,["description"]);e!==void 0&&r!=null&&d(e,["description"],r);const s=u(n,["defaultCheckpointId"]);return e!==void 0&&s!=null&&d(e,["defaultCheckpointId"],s),i}function $v(n,e,t){const i={},o=u(e,["model"]);o!=null&&d(i,["_url","name"],it(n,o));const r=u(e,["config"]);return r!=null&&Xv(r,i),i}function Jv(n,e,t){const i={},o=u(e,["model"]);o!=null&&d(i,["_url","model"],it(n,o));const r=u(e,["config"]);return r!=null&&Yv(r,i),i}function Kv(n,e,t){const i={},o=u(n,["outputGcsUri"]);e!==void 0&&o!=null&&d(e,["parameters","storageUri"],o);const r=u(n,["safetyFilterLevel"]);e!==void 0&&r!=null&&d(e,["parameters","safetySetting"],r);const s=u(n,["personGeneration"]);e!==void 0&&s!=null&&d(e,["parameters","personGeneration"],s);const a=u(n,["includeRaiReason"]);e!==void 0&&a!=null&&d(e,["parameters","includeRaiReason"],a);const c=u(n,["outputMimeType"]);e!==void 0&&c!=null&&d(e,["parameters","outputOptions","mimeType"],c);const l=u(n,["outputCompressionQuality"]);e!==void 0&&l!=null&&d(e,["parameters","outputOptions","compressionQuality"],l);const f=u(n,["enhanceInputImage"]);e!==void 0&&f!=null&&d(e,["parameters","upscaleConfig","enhanceInputImage"],f);const p=u(n,["imagePreservationFactor"]);e!==void 0&&p!=null&&d(e,["parameters","upscaleConfig","imagePreservationFactor"],p);const h=u(n,["labels"]);e!==void 0&&h!=null&&d(e,["labels"],h);const m=u(n,["numberOfImages"]);e!==void 0&&m!=null&&d(e,["parameters","sampleCount"],m);const v=u(n,["mode"]);return e!==void 0&&v!=null&&d(e,["parameters","mode"],v),i}function Zv(n,e,t){const i={},o=u(e,["model"]);o!=null&&d(i,["_url","model"],it(n,o));const r=u(e,["image"]);r!=null&&d(i,["instances[0]","image"],hn(r));const s=u(e,["upscaleFactor"]);s!=null&&d(i,["parameters","upscaleConfig","upscaleFactor"],s);const a=u(e,["config"]);return a!=null&&Kv(a,i),i}function Qv(n,e){const t={},i=u(n,["sdkHttpResponse"]);i!=null&&d(t,["sdkHttpResponse"],i);const o=u(n,["predictions"]);if(o!=null){let r=o;Array.isArray(r)&&(r=r.map(s=>ss(s))),d(t,["generatedImages"],r)}return t}function jv(n,e){const t={},i=u(n,["uri"]);i!=null&&d(t,["uri"],i);const o=u(n,["encodedVideo"]);o!=null&&d(t,["videoBytes"],fi(o));const r=u(n,["encoding"]);return r!=null&&d(t,["mimeType"],r),t}function ey(n,e){const t={},i=u(n,["gcsUri"]);i!=null&&d(t,["uri"],i);const o=u(n,["bytesBase64Encoded"]);o!=null&&d(t,["videoBytes"],fi(o));const r=u(n,["mimeType"]);return r!=null&&d(t,["mimeType"],r),t}function ty(n,e){const t={},i=u(n,["image"]);i!=null&&d(t,["_self"],hn(i));const o=u(n,["maskMode"]);return o!=null&&d(t,["maskMode"],o),t}function ny(n,e){const t={},i=u(n,["image"]);i!=null&&d(t,["image"],as(i));const o=u(n,["referenceType"]);return o!=null&&d(t,["referenceType"],o),t}function iy(n,e){const t={},i=u(n,["image"]);i!=null&&d(t,["image"],hn(i));const o=u(n,["referenceType"]);return o!=null&&d(t,["referenceType"],o),t}function Dh(n,e){const t={},i=u(n,["uri"]);i!=null&&d(t,["uri"],i);const o=u(n,["videoBytes"]);o!=null&&d(t,["encodedVideo"],fi(o));const r=u(n,["mimeType"]);return r!=null&&d(t,["encoding"],r),t}function Nh(n,e){const t={},i=u(n,["uri"]);i!=null&&d(t,["gcsUri"],i);const o=u(n,["videoBytes"]);o!=null&&d(t,["bytesBase64Encoded"],fi(o));const r=u(n,["mimeType"]);return r!=null&&d(t,["mimeType"],r),t}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function oy(n,e){const t={},i=u(n,["displayName"]);return e!==void 0&&i!=null&&d(e,["displayName"],i),t}function ry(n){const e={},t=u(n,["config"]);return t!=null&&oy(t,e),e}function sy(n,e){const t={},i=u(n,["force"]);return e!==void 0&&i!=null&&d(e,["_query","force"],i),t}function ay(n){const e={},t=u(n,["name"]);t!=null&&d(e,["_url","name"],t);const i=u(n,["config"]);return i!=null&&sy(i,e),e}function ly(n){const e={},t=u(n,["name"]);return t!=null&&d(e,["_url","name"],t),e}function cy(n,e){const t={},i=u(n,["customMetadata"]);if(e!==void 0&&i!=null){let r=i;Array.isArray(r)&&(r=r.map(s=>s)),d(e,["customMetadata"],r)}const o=u(n,["chunkingConfig"]);return e!==void 0&&o!=null&&d(e,["chunkingConfig"],o),t}function uy(n){const e={},t=u(n,["name"]);t!=null&&d(e,["name"],t);const i=u(n,["metadata"]);i!=null&&d(e,["metadata"],i);const o=u(n,["done"]);o!=null&&d(e,["done"],o);const r=u(n,["error"]);r!=null&&d(e,["error"],r);const s=u(n,["response"]);return s!=null&&d(e,["response"],fy(s)),e}function dy(n){const e={},t=u(n,["fileSearchStoreName"]);t!=null&&d(e,["_url","file_search_store_name"],t);const i=u(n,["fileName"]);i!=null&&d(e,["fileName"],i);const o=u(n,["config"]);return o!=null&&cy(o,e),e}function fy(n){const e={},t=u(n,["sdkHttpResponse"]);t!=null&&d(e,["sdkHttpResponse"],t);const i=u(n,["parent"]);i!=null&&d(e,["parent"],i);const o=u(n,["documentName"]);return o!=null&&d(e,["documentName"],o),e}function hy(n,e){const t={},i=u(n,["pageSize"]);e!==void 0&&i!=null&&d(e,["_query","pageSize"],i);const o=u(n,["pageToken"]);return e!==void 0&&o!=null&&d(e,["_query","pageToken"],o),t}function py(n){const e={},t=u(n,["config"]);return t!=null&&hy(t,e),e}function my(n){const e={},t=u(n,["sdkHttpResponse"]);t!=null&&d(e,["sdkHttpResponse"],t);const i=u(n,["nextPageToken"]);i!=null&&d(e,["nextPageToken"],i);const o=u(n,["fileSearchStores"]);if(o!=null){let r=o;Array.isArray(r)&&(r=r.map(s=>s)),d(e,["fileSearchStores"],r)}return e}function Lh(n,e){const t={},i=u(n,["mimeType"]);e!==void 0&&i!=null&&d(e,["mimeType"],i);const o=u(n,["displayName"]);e!==void 0&&o!=null&&d(e,["displayName"],o);const r=u(n,["customMetadata"]);if(e!==void 0&&r!=null){let a=r;Array.isArray(a)&&(a=a.map(c=>c)),d(e,["customMetadata"],a)}const s=u(n,["chunkingConfig"]);return e!==void 0&&s!=null&&d(e,["chunkingConfig"],s),t}function gy(n){const e={},t=u(n,["fileSearchStoreName"]);t!=null&&d(e,["_url","file_search_store_name"],t);const i=u(n,["config"]);return i!=null&&Lh(i,e),e}function _y(n){const e={},t=u(n,["sdkHttpResponse"]);return t!=null&&d(e,["sdkHttpResponse"],t),e}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const vy="Content-Type",yy="X-Server-Timeout",xy="User-Agent",Oa="x-goog-api-client",Ey="1.44.0",Sy=`google-genai-sdk/${Ey}`,Ty="v1beta1",My="v1beta",Ay=5,Cy=[408,429,500,502,503,504];class wy{constructor(e){var t,i,o;this.clientOptions=Object.assign({},e),this.customBaseUrl=(t=e.httpOptions)===null||t===void 0?void 0:t.baseUrl,this.clientOptions.vertexai&&(this.clientOptions.project&&this.clientOptions.location?this.clientOptions.apiKey=void 0:this.clientOptions.apiKey&&(this.clientOptions.project=void 0,this.clientOptions.location=void 0));const r={};if(this.clientOptions.vertexai){if(!this.clientOptions.location&&!this.clientOptions.apiKey&&!this.customBaseUrl&&(this.clientOptions.location="global"),!(this.clientOptions.project&&this.clientOptions.location||this.clientOptions.apiKey)&&!this.customBaseUrl)throw new Error("Authentication is not set up. Please provide either a project and location, or an API key, or a custom base URL.");const a=e.project&&e.location||!!e.apiKey;this.customBaseUrl&&!a?(r.baseUrl=this.customBaseUrl,this.clientOptions.project=void 0,this.clientOptions.location=void 0):this.clientOptions.apiKey||this.clientOptions.location==="global"?r.baseUrl="https://aiplatform.googleapis.com/":this.clientOptions.project&&this.clientOptions.location&&(r.baseUrl=`https://${this.clientOptions.location}-aiplatform.googleapis.com/`),r.apiVersion=(i=this.clientOptions.apiVersion)!==null&&i!==void 0?i:Ty}else this.clientOptions.apiKey||console.warn("API key should be set when using the Gemini API."),r.apiVersion=(o=this.clientOptions.apiVersion)!==null&&o!==void 0?o:My,r.baseUrl="https://generativelanguage.googleapis.com/";r.headers=this.getDefaultHeaders(),this.clientOptions.httpOptions=r,e.httpOptions&&(this.clientOptions.httpOptions=this.patchHttpOptions(r,e.httpOptions))}isVertexAI(){var e;return(e=this.clientOptions.vertexai)!==null&&e!==void 0?e:!1}getProject(){return this.clientOptions.project}getLocation(){return this.clientOptions.location}getCustomBaseUrl(){return this.customBaseUrl}async getAuthHeaders(){const e=new Headers;return await this.clientOptions.auth.addAuthHeaders(e),e}getApiVersion(){if(this.clientOptions.httpOptions&&this.clientOptions.httpOptions.apiVersion!==void 0)return this.clientOptions.httpOptions.apiVersion;throw new Error("API version is not set.")}getBaseUrl(){if(this.clientOptions.httpOptions&&this.clientOptions.httpOptions.baseUrl!==void 0)return this.clientOptions.httpOptions.baseUrl;throw new Error("Base URL is not set.")}getRequestUrl(){return this.getRequestUrlInternal(this.clientOptions.httpOptions)}getHeaders(){if(this.clientOptions.httpOptions&&this.clientOptions.httpOptions.headers!==void 0)return this.clientOptions.httpOptions.headers;throw new Error("Headers are not set.")}getRequestUrlInternal(e){if(!e||e.baseUrl===void 0||e.apiVersion===void 0)throw new Error("HTTP options are not correctly set.");const i=[e.baseUrl.endsWith("/")?e.baseUrl.slice(0,-1):e.baseUrl];return e.apiVersion&&e.apiVersion!==""&&i.push(e.apiVersion),i.join("/")}getBaseResourcePath(){return`projects/${this.clientOptions.project}/locations/${this.clientOptions.location}`}getApiKey(){return this.clientOptions.apiKey}getWebsocketBaseUrl(){const e=this.getBaseUrl(),t=new URL(e);return t.protocol=t.protocol=="http:"?"ws":"wss",t.toString()}setBaseUrl(e){if(this.clientOptions.httpOptions)this.clientOptions.httpOptions.baseUrl=e;else throw new Error("HTTP options are not correctly set.")}constructUrl(e,t,i){const o=[this.getRequestUrlInternal(t)];return i&&o.push(this.getBaseResourcePath()),e!==""&&o.push(e),new URL(`${o.join("/")}`)}shouldPrependVertexProjectPath(e,t){return!(t.baseUrl&&t.baseUrlResourceScope===Na.COLLECTION||this.clientOptions.apiKey||!this.clientOptions.vertexai||e.path.startsWith("projects/")||e.httpMethod==="GET"&&e.path.startsWith("publishers/google/models"))}async request(e){let t=this.clientOptions.httpOptions;e.httpOptions&&(t=this.patchHttpOptions(this.clientOptions.httpOptions,e.httpOptions));const i=this.shouldPrependVertexProjectPath(e,t),o=this.constructUrl(e.path,t,i);if(e.queryParams)for(const[s,a]of Object.entries(e.queryParams))o.searchParams.append(s,String(a));let r={};if(e.httpMethod==="GET"){if(e.body&&e.body!=="{}")throw new Error("Request body should be empty for GET request, but got non empty request body")}else r.body=e.body;return r=await this.includeExtraHttpOptionsToRequestInit(r,t,o.toString(),e.abortSignal),this.unaryApiCall(o,r,e.httpMethod)}patchHttpOptions(e,t){const i=JSON.parse(JSON.stringify(e));for(const[o,r]of Object.entries(t))typeof r=="object"?i[o]=Object.assign(Object.assign({},i[o]),r):r!==void 0&&(i[o]=r);return i}async requestStream(e){let t=this.clientOptions.httpOptions;e.httpOptions&&(t=this.patchHttpOptions(this.clientOptions.httpOptions,e.httpOptions));const i=this.shouldPrependVertexProjectPath(e,t),o=this.constructUrl(e.path,t,i);(!o.searchParams.has("alt")||o.searchParams.get("alt")!=="sse")&&o.searchParams.set("alt","sse");let r={};return r.body=e.body,r=await this.includeExtraHttpOptionsToRequestInit(r,t,o.toString(),e.abortSignal),this.streamApiCall(o,r,e.httpMethod)}async includeExtraHttpOptionsToRequestInit(e,t,i,o){if(t&&t.timeout||o){const r=new AbortController,s=r.signal;if(t.timeout&&(t==null?void 0:t.timeout)>0){const a=setTimeout(()=>r.abort(),t.timeout);a&&typeof a.unref=="function"&&a.unref()}o&&o.addEventListener("abort",()=>{r.abort()}),e.signal=s}return t&&t.extraBody!==null&&by(e,t.extraBody),e.headers=await this.getHeadersInternal(t,i),e}async unaryApiCall(e,t,i){return this.apiCall(e.toString(),Object.assign(Object.assign({},t),{method:i})).then(async o=>(await md(o),new La(o))).catch(o=>{throw o instanceof Error?o:new Error(JSON.stringify(o))})}async streamApiCall(e,t,i){return this.apiCall(e.toString(),Object.assign(Object.assign({},t),{method:i})).then(async o=>(await md(o),this.processStreamResponse(o))).catch(o=>{throw o instanceof Error?o:new Error(JSON.stringify(o))})}processStreamResponse(e){return dn(this,arguments,function*(){var i;const o=(i=e==null?void 0:e.body)===null||i===void 0?void 0:i.getReader(),r=new TextDecoder("utf-8");if(!o)throw new Error("Response body is empty");try{let s="";const a="data:",c=[`

`,"\r\r",`\r
\r
`];for(;;){const{done:l,value:f}=yield Ve(o.read());if(l){if(s.trim().length>0)throw new Error("Incomplete JSON segment at the end");break}const p=r.decode(f,{stream:!0});try{const v=JSON.parse(p);if("error"in v){const y=JSON.parse(JSON.stringify(v.error)),g=y.status,_=y.code,E=`got status: ${g}. ${JSON.stringify(v)}`;if(_>=400&&_<600)throw new rs({message:E,status:_})}}catch(v){if(v.name==="ApiError")throw v}s+=p;let h=-1,m=0;for(;;){h=-1,m=0;for(const g of c){const _=s.indexOf(g);_!==-1&&(h===-1||_<h)&&(h=_,m=g.length)}if(h===-1)break;const v=s.substring(0,h);s=s.substring(h+m);const y=v.trim();if(y.startsWith(a)){const g=y.substring(a.length).trim();try{const _=new Response(g,{headers:e==null?void 0:e.headers,status:e==null?void 0:e.status,statusText:e==null?void 0:e.statusText});yield yield Ve(new La(_))}catch(_){throw new Error(`exception parsing stream chunk ${g}. ${_}`)}}}}}finally{o.releaseLock()}})}async apiCall(e,t){var i;if(!this.clientOptions.httpOptions||!this.clientOptions.httpOptions.retryOptions)return fetch(e,t);const o=this.clientOptions.httpOptions.retryOptions;return fm(async()=>{const s=await fetch(e,t);if(s.ok)return s;throw Cy.includes(s.status)?new Error(`Retryable HTTP Error: ${s.statusText}`):new fh.AbortError(`Non-retryable exception ${s.statusText} sending request`)},{retries:((i=o.attempts)!==null&&i!==void 0?i:Ay)-1})}getDefaultHeaders(){const e={},t=Sy+" "+this.clientOptions.userAgentExtra;return e[xy]=t,e[Oa]=t,e[vy]="application/json",e}async getHeadersInternal(e,t){const i=new Headers;if(e&&e.headers){for(const[o,r]of Object.entries(e.headers))i.append(o,r);e.timeout&&e.timeout>0&&i.append(yy,String(Math.ceil(e.timeout/1e3)))}return await this.clientOptions.auth.addAuthHeaders(i,t),i}getFileName(e){var t;let i="";return typeof e=="string"&&(i=e.replace(/[/\\]+$/,""),i=(t=i.split(/[/\\]/).pop())!==null&&t!==void 0?t:""),i}async uploadFile(e,t){var i;const o={};t!=null&&(o.mimeType=t.mimeType,o.name=t.name,o.displayName=t.displayName),o.name&&!o.name.startsWith("files/")&&(o.name=`files/${o.name}`);const r=this.clientOptions.uploader,s=await r.stat(e);o.sizeBytes=String(s.size);const a=(i=t==null?void 0:t.mimeType)!==null&&i!==void 0?i:s.type;if(a===void 0||a==="")throw new Error("Can not determine mimeType. Please provide mimeType in the config.");o.mimeType=a;const c={file:o},l=this.getFileName(e),f=me("upload/v1beta/files",c._url),p=await this.fetchUploadUrl(f,o.sizeBytes,o.mimeType,l,c,t==null?void 0:t.httpOptions);return r.upload(e,p,this)}async uploadFileToFileSearchStore(e,t,i){var o;const r=this.clientOptions.uploader,s=await r.stat(t),a=String(s.size),c=(o=i==null?void 0:i.mimeType)!==null&&o!==void 0?o:s.type;if(c===void 0||c==="")throw new Error("Can not determine mimeType. Please provide mimeType in the config.");const l=`upload/v1beta/${e}:uploadToFileSearchStore`,f=this.getFileName(t),p={};i!=null&&Lh(i,p);const h=await this.fetchUploadUrl(l,a,c,f,p,i==null?void 0:i.httpOptions);return r.uploadToFileSearchStore(t,h,this)}async downloadFile(e){await this.clientOptions.downloader.download(e,this)}async fetchUploadUrl(e,t,i,o,r,s){var a;let c={};s?c=s:c={apiVersion:"",headers:Object.assign({"Content-Type":"application/json","X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${t}`,"X-Goog-Upload-Header-Content-Type":`${i}`},o?{"X-Goog-Upload-File-Name":o}:{})};const l=await this.request({path:e,body:JSON.stringify(r),httpMethod:"POST",httpOptions:c});if(!l||!(l!=null&&l.headers))throw new Error("Server did not return an HttpResponse or the returned HttpResponse did not have headers.");const f=(a=l==null?void 0:l.headers)===null||a===void 0?void 0:a["x-goog-upload-url"];if(f===void 0)throw new Error("Failed to get upload url. Server did not return the x-google-upload-url in the headers");return f}}async function md(n){var e;if(n===void 0)throw new Error("response is undefined");if(!n.ok){const t=n.status;let i;!((e=n.headers.get("content-type"))===null||e===void 0)&&e.includes("application/json")?i=await n.json():i={error:{message:await n.text(),code:n.status,status:n.statusText}};const o=JSON.stringify(i);throw t>=400&&t<600?new rs({message:o,status:t}):new Error(o)}}function by(n,e){if(!e||Object.keys(e).length===0)return;if(n.body instanceof Blob){console.warn("includeExtraBodyToRequestInit: extraBody provided but current request body is a Blob. extraBody will be ignored as merging is not supported for Blob bodies.");return}let t={};if(typeof n.body=="string"&&n.body.length>0)try{const r=JSON.parse(n.body);if(typeof r=="object"&&r!==null&&!Array.isArray(r))t=r;else{console.warn("includeExtraBodyToRequestInit: Original request body is valid JSON but not a non-array object. Skip applying extraBody to the request body.");return}}catch{console.warn("includeExtraBodyToRequestInit: Original request body is not valid JSON. Skip applying extraBody to the request body.");return}function i(r,s){const a=Object.assign({},r);for(const c in s)if(Object.prototype.hasOwnProperty.call(s,c)){const l=s[c],f=a[c];l&&typeof l=="object"&&!Array.isArray(l)&&f&&typeof f=="object"&&!Array.isArray(f)?a[c]=i(f,l):(f&&l&&typeof f!=typeof l&&console.warn(`includeExtraBodyToRequestInit:deepMerge: Type mismatch for key "${c}". Original type: ${typeof f}, New type: ${typeof l}. Overwriting.`),a[c]=l)}return a}const o=i(t,e);n.body=JSON.stringify(o)}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Iy="mcp_used/unknown";let Ry=!1;function Uh(n){for(const e of n)if(Py(e)||typeof e=="object"&&"inputSchema"in e)return!0;return Ry}function Fh(n){var e;const t=(e=n[Oa])!==null&&e!==void 0?e:"";n[Oa]=(t+` ${Iy}`).trimStart()}function Py(n){return n!==null&&typeof n=="object"&&n instanceof jl}function Dy(n){return dn(this,arguments,function*(t,i=100){let o,r=0;for(;r<i;){const s=yield Ve(t.listTools({cursor:o}));for(const a of s.tools)yield yield Ve(a),r++;if(!s.nextCursor)break;o=s.nextCursor}})}class jl{constructor(e=[],t){this.mcpTools=[],this.functionNameToMcpClient={},this.mcpClients=e,this.config=t}static create(e,t){return new jl(e,t)}async initialize(){var e,t,i,o;if(this.mcpTools.length>0)return;const r={},s=[];for(const f of this.mcpClients)try{for(var a=!0,c=(t=void 0,fn(Dy(f))),l;l=await c.next(),e=l.done,!e;a=!0){o=l.value,a=!1;const p=o;s.push(p);const h=p.name;if(r[h])throw new Error(`Duplicate function name ${h} found in MCP tools. Please ensure function names are unique.`);r[h]=f}}catch(p){t={error:p}}finally{try{!a&&!e&&(i=c.return)&&await i.call(c)}finally{if(t)throw t.error}}this.mcpTools=s,this.functionNameToMcpClient=r}async tool(){return await this.initialize(),eg(this.mcpTools,this.config)}async callTool(e){await this.initialize();const t=[];for(const i of e)if(i.name in this.functionNameToMcpClient){const o=this.functionNameToMcpClient[i.name];let r;this.config.timeout&&(r={timeout:this.config.timeout});const s=await o.callTool({name:i.name,arguments:i.args},void 0,r);t.push({functionResponse:{name:i.name,response:s.isError?{error:s}:s}})}return t}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */async function Ny(n,e,t){const i=new Xm;let o;t.data instanceof Blob?o=JSON.parse(await t.data.text()):o=JSON.parse(t.data),Object.assign(i,o),e(i)}class Ly{constructor(e,t,i){this.apiClient=e,this.auth=t,this.webSocketFactory=i}async connect(e){var t,i;if(this.apiClient.isVertexAI())throw new Error("Live music is not supported for Vertex AI.");console.warn("Live music generation is experimental and may change in future versions.");const o=this.apiClient.getWebsocketBaseUrl(),r=this.apiClient.getApiVersion(),s=By(this.apiClient.getDefaultHeaders()),a=this.apiClient.getApiKey(),c=`${o}/ws/google.ai.generativelanguage.${r}.GenerativeService.BidiGenerateMusic?key=${a}`;let l=()=>{};const f=new Promise(A=>{l=A}),p=e.callbacks,h=function(){l({})},m=this.apiClient,v={onopen:h,onmessage:A=>{Ny(m,p.onmessage,A)},onerror:(t=p==null?void 0:p.onerror)!==null&&t!==void 0?t:function(A){},onclose:(i=p==null?void 0:p.onclose)!==null&&i!==void 0?i:function(A){}},y=this.webSocketFactory.create(c,Fy(s),v);y.connect(),await f;const E={setup:{model:it(this.apiClient,e.model)}};return y.send(JSON.stringify(E)),new Uy(y,this.apiClient)}}class Uy{constructor(e,t){this.conn=e,this.apiClient=t}async setWeightedPrompts(e){if(!e.weightedPrompts||Object.keys(e.weightedPrompts).length===0)throw new Error("Weighted prompts must be set and contain at least one entry.");const t=i_(e);this.conn.send(JSON.stringify({clientContent:t}))}async setMusicGenerationConfig(e){e.musicGenerationConfig||(e.musicGenerationConfig={});const t=n_(e);this.conn.send(JSON.stringify(t))}sendPlaybackControl(e){const t={playbackControl:e};this.conn.send(JSON.stringify(t))}play(){this.sendPlaybackControl(no.PLAY)}pause(){this.sendPlaybackControl(no.PAUSE)}stop(){this.sendPlaybackControl(no.STOP)}resetContext(){this.sendPlaybackControl(no.RESET_CONTEXT)}close(){this.conn.close()}}function Fy(n){const e={};return n.forEach((t,i)=>{e[i]=t}),e}function By(n){const e=new Headers;for(const[t,i]of Object.entries(n))e.append(t,i);return e}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const ky="FunctionResponse request must have an `id` field from the response of a ToolCall.FunctionalCalls in Google AI.";async function Oy(n,e,t){const i=new qm;let o;t.data instanceof Blob?o=await t.data.text():t.data instanceof ArrayBuffer?o=new TextDecoder().decode(t.data):o=t.data;const r=JSON.parse(o);if(n.isVertexAI()){const s=s_(r);Object.assign(i,s)}else Object.assign(i,r);e(i)}class Gy{constructor(e,t,i){this.apiClient=e,this.auth=t,this.webSocketFactory=i,this.music=new Ly(this.apiClient,this.auth,this.webSocketFactory)}async connect(e){var t,i,o,r,s,a;if(e.config&&e.config.httpOptions)throw new Error("The Live module does not support httpOptions at request-level in LiveConnectConfig yet. Please use the client-level httpOptions configuration instead.");const c=this.apiClient.getWebsocketBaseUrl(),l=this.apiClient.getApiVersion();let f;const p=this.apiClient.getHeaders();e.config&&e.config.tools&&Uh(e.config.tools)&&Fh(p);const h=Wy(p);if(this.apiClient.isVertexAI()){const M=this.apiClient.getProject(),B=this.apiClient.getLocation(),I=this.apiClient.getApiKey(),N=!!M&&!!B||!!I;this.apiClient.getCustomBaseUrl()&&!N?f=c:(f=`${c}/ws/google.cloud.aiplatform.${l}.LlmBidiService/BidiGenerateContent`,await this.auth.addAuthHeaders(h,f))}else{const M=this.apiClient.getApiKey();let B="BidiGenerateContent",I="key";M!=null&&M.startsWith("auth_tokens/")&&(console.warn("Warning: Ephemeral token support is experimental and may change in future versions."),l!=="v1alpha"&&console.warn("Warning: The SDK's ephemeral token support is in v1alpha only. Please use const ai = new GoogleGenAI({apiKey: token.name, httpOptions: { apiVersion: 'v1alpha' }}); before session connection."),B="BidiGenerateContentConstrained",I="access_token"),f=`${c}/ws/google.ai.generativelanguage.${l}.GenerativeService.${B}?${I}=${M}`}let m=()=>{};const v=new Promise(M=>{m=M}),y=e.callbacks,g=function(){var M;(M=y==null?void 0:y.onopen)===null||M===void 0||M.call(y),m({})},_=this.apiClient,E={onopen:g,onmessage:M=>{Oy(_,y.onmessage,M)},onerror:(t=y==null?void 0:y.onerror)!==null&&t!==void 0?t:function(M){},onclose:(i=y==null?void 0:y.onclose)!==null&&i!==void 0?i:function(M){}},A=this.webSocketFactory.create(f,zy(h),E);A.connect(),await v;let S=it(this.apiClient,e.model);if(this.apiClient.isVertexAI()&&S.startsWith("publishers/")){const M=this.apiClient.getProject(),B=this.apiClient.getLocation();M&&B&&(S=`projects/${M}/locations/${B}/`+S)}let R={};this.apiClient.isVertexAI()&&((o=e.config)===null||o===void 0?void 0:o.responseModalities)===void 0&&(e.config===void 0?e.config={responseModalities:[qr.AUDIO]}:e.config.responseModalities=[qr.AUDIO]),!((r=e.config)===null||r===void 0)&&r.generationConfig&&console.warn("Setting `LiveConnectConfig.generation_config` is deprecated, please set the fields on `LiveConnectConfig` directly. This will become an error in a future version (not before Q3 2025).");const C=(a=(s=e.config)===null||s===void 0?void 0:s.tools)!==null&&a!==void 0?a:[],b=[];for(const M of C)if(this.isCallableTool(M)){const B=M;b.push(await B.tool())}else b.push(M);b.length>0&&(e.config.tools=b);const x={model:S,config:e.config,callbacks:e.callbacks};return this.apiClient.isVertexAI()?R=t_(this.apiClient,x):R=e_(this.apiClient,x),delete R.config,A.send(JSON.stringify(R)),new Hy(A,this.apiClient)}isCallableTool(e){return"callTool"in e&&typeof e.callTool=="function"}}const Vy={turnComplete:!0};class Hy{constructor(e,t){this.conn=e,this.apiClient=t}tLiveClientContent(e,t){if(t.turns!==null&&t.turns!==void 0){let i=[];try{i=Qt(t.turns),e.isVertexAI()||(i=i.map(o=>Xo(o)))}catch{throw new Error(`Failed to parse client content "turns", type: '${typeof t.turns}'`)}return{clientContent:{turns:i,turnComplete:t.turnComplete}}}return{clientContent:{turnComplete:t.turnComplete}}}tLiveClienttToolResponse(e,t){let i=[];if(t.functionResponses==null)throw new Error("functionResponses is required.");if(Array.isArray(t.functionResponses)?i=t.functionResponses:i=[t.functionResponses],i.length===0)throw new Error("functionResponses is required.");for(const r of i){if(typeof r!="object"||r===null||!("name"in r)||!("response"in r))throw new Error(`Could not parse function response, type '${typeof r}'.`);if(!e.isVertexAI()&&!("id"in r))throw new Error(ky)}return{toolResponse:{functionResponses:i}}}sendClientContent(e){e=Object.assign(Object.assign({},Vy),e);const t=this.tLiveClientContent(this.apiClient,e);this.conn.send(JSON.stringify(t))}sendRealtimeInput(e){let t={};this.apiClient.isVertexAI()?t={realtimeInput:r_(e)}:t={realtimeInput:o_(e)},this.conn.send(JSON.stringify(t))}sendToolResponse(e){if(e.functionResponses==null)throw new Error("Tool response parameters are required.");const t=this.tLiveClienttToolResponse(this.apiClient,e);this.conn.send(JSON.stringify(t))}close(){this.conn.close()}}function zy(n){const e={};return n.forEach((t,i)=>{e[i]=t}),e}function Wy(n){const e=new Headers;for(const[t,i]of Object.entries(n))e.append(t,i);return e}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const gd=10;function _d(n){var e,t,i;if(!((e=n==null?void 0:n.automaticFunctionCalling)===null||e===void 0)&&e.disable)return!0;let o=!1;for(const s of(t=n==null?void 0:n.tools)!==null&&t!==void 0?t:[])if(so(s)){o=!0;break}if(!o)return!0;const r=(i=n==null?void 0:n.automaticFunctionCalling)===null||i===void 0?void 0:i.maximumRemoteCalls;return r&&(r<0||!Number.isInteger(r))||r==0?(console.warn("Invalid maximumRemoteCalls value provided for automatic function calling. Disabled automatic function calling. Please provide a valid integer value greater than 0. maximumRemoteCalls provided:",r),!0):!1}function so(n){return"callTool"in n&&typeof n.callTool=="function"}function qy(n){var e,t,i;return(i=(t=(e=n.config)===null||e===void 0?void 0:e.tools)===null||t===void 0?void 0:t.some(o=>so(o)))!==null&&i!==void 0?i:!1}function vd(n){var e;const t=[];return!((e=n==null?void 0:n.config)===null||e===void 0)&&e.tools&&n.config.tools.forEach((i,o)=>{if(so(i))return;const r=i;r.functionDeclarations&&r.functionDeclarations.length>0&&t.push(o)}),t}function yd(n){var e;return!(!((e=n==null?void 0:n.automaticFunctionCalling)===null||e===void 0)&&e.ignoreCallHistory)}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Xy extends Xn{constructor(e){super(),this.apiClient=e,this.embedContent=async t=>{if(!this.apiClient.isVertexAI())return await this.embedContentInternal(t);if(t.model.includes("gemini")&&t.model!=="gemini-embedding-001"||t.model.includes("maas")){const o=Qt(t.contents);if(o.length>1)throw new Error("The embedContent API for this model only supports one content at a time.");const r=Object.assign(Object.assign({},t),{content:o[0],embeddingApiType:Xr.EMBED_CONTENT});return await this.embedContentInternal(r)}else{const o=Object.assign(Object.assign({},t),{embeddingApiType:Xr.PREDICT});return await this.embedContentInternal(o)}},this.generateContent=async t=>{var i,o,r,s,a;const c=await this.processParamsMaybeAddMcpUsage(t);if(this.maybeMoveToResponseJsonSchem(t),!qy(t)||_d(t.config))return await this.generateContentInternal(c);const l=vd(t);if(l.length>0){const y=l.map(g=>`tools[${g}]`).join(", ");throw new Error(`Automatic function calling with CallableTools (or MCP objects) and basic FunctionDeclarations is not yet supported. Incompatible tools found at ${y}.`)}let f,p;const h=Qt(c.contents),m=(r=(o=(i=c.config)===null||i===void 0?void 0:i.automaticFunctionCalling)===null||o===void 0?void 0:o.maximumRemoteCalls)!==null&&r!==void 0?r:gd;let v=0;for(;v<m&&(f=await this.generateContentInternal(c),!(!f.functionCalls||f.functionCalls.length===0));){const y=f.candidates[0].content,g=[];for(const _ of(a=(s=t.config)===null||s===void 0?void 0:s.tools)!==null&&a!==void 0?a:[])if(so(_)){const A=await _.callTool(f.functionCalls);g.push(...A)}v++,p={role:"user",parts:g},c.contents=Qt(c.contents),c.contents.push(y),c.contents.push(p),yd(c.config)&&(h.push(y),h.push(p))}return yd(c.config)&&(f.automaticFunctionCallingHistory=h),f},this.generateContentStream=async t=>{var i,o,r,s,a;if(this.maybeMoveToResponseJsonSchem(t),_d(t.config)){const p=await this.processParamsMaybeAddMcpUsage(t);return await this.generateContentStreamInternal(p)}const c=vd(t);if(c.length>0){const p=c.map(h=>`tools[${h}]`).join(", ");throw new Error(`Incompatible tools found at ${p}. Automatic function calling with CallableTools (or MCP objects) and basic FunctionDeclarations" is not yet supported.`)}const l=(r=(o=(i=t==null?void 0:t.config)===null||i===void 0?void 0:i.toolConfig)===null||o===void 0?void 0:o.functionCallingConfig)===null||r===void 0?void 0:r.streamFunctionCallArguments,f=(a=(s=t==null?void 0:t.config)===null||s===void 0?void 0:s.automaticFunctionCalling)===null||a===void 0?void 0:a.disable;if(l&&!f)throw new Error("Running in streaming mode with 'streamFunctionCallArguments' enabled, this feature is not compatible with automatic function calling (AFC). Please set 'config.automaticFunctionCalling.disable' to true to disable AFC or leave 'config.toolConfig.functionCallingConfig.streamFunctionCallArguments' to be undefined or set to false to disable streaming function call arguments feature.");return await this.processAfcStream(t)},this.generateImages=async t=>await this.generateImagesInternal(t).then(i=>{var o;let r;const s=[];if(i!=null&&i.generatedImages)for(const c of i.generatedImages)c&&(c!=null&&c.safetyAttributes)&&((o=c==null?void 0:c.safetyAttributes)===null||o===void 0?void 0:o.contentType)==="Positive Prompt"?r=c==null?void 0:c.safetyAttributes:s.push(c);let a;return r?a={generatedImages:s,positivePromptSafetyAttributes:r,sdkHttpResponse:i.sdkHttpResponse}:a={generatedImages:s,sdkHttpResponse:i.sdkHttpResponse},a}),this.list=async t=>{var i;const s={config:Object.assign(Object.assign({},{queryBase:!0}),t==null?void 0:t.config)};if(this.apiClient.isVertexAI()&&!s.config.queryBase){if(!((i=s.config)===null||i===void 0)&&i.filter)throw new Error("Filtering tuned models list for Vertex AI is not currently supported");s.config.filter="labels.tune-type:*"}return new Ri(Hn.PAGED_ITEM_MODELS,a=>this.listInternal(a),await this.listInternal(s),s)},this.editImage=async t=>{const i={model:t.model,prompt:t.prompt,referenceImages:[],config:t.config};return t.referenceImages&&t.referenceImages&&(i.referenceImages=t.referenceImages.map(o=>o.toReferenceImageAPI())),await this.editImageInternal(i)},this.upscaleImage=async t=>{let i={numberOfImages:1,mode:"upscale"};t.config&&(i=Object.assign(Object.assign({},i),t.config));const o={model:t.model,image:t.image,upscaleFactor:t.upscaleFactor,config:i};return await this.upscaleImageInternal(o)},this.generateVideos=async t=>{var i,o,r,s,a,c;if((t.prompt||t.image||t.video)&&t.source)throw new Error("Source and prompt/image/video are mutually exclusive. Please only use source.");return this.apiClient.isVertexAI()||(!((i=t.video)===null||i===void 0)&&i.uri&&(!((o=t.video)===null||o===void 0)&&o.videoBytes)?t.video={uri:t.video.uri,mimeType:t.video.mimeType}:!((s=(r=t.source)===null||r===void 0?void 0:r.video)===null||s===void 0)&&s.uri&&(!((c=(a=t.source)===null||a===void 0?void 0:a.video)===null||c===void 0)&&c.videoBytes)&&(t.source.video={uri:t.source.video.uri,mimeType:t.source.video.mimeType})),await this.generateVideosInternal(t)}}maybeMoveToResponseJsonSchem(e){e.config&&e.config.responseSchema&&(e.config.responseJsonSchema||Object.keys(e.config.responseSchema).includes("$schema")&&(e.config.responseJsonSchema=e.config.responseSchema,delete e.config.responseSchema))}async processParamsMaybeAddMcpUsage(e){var t,i,o;const r=(t=e.config)===null||t===void 0?void 0:t.tools;if(!r)return e;const s=await Promise.all(r.map(async c=>so(c)?await c.tool():c)),a={model:e.model,contents:e.contents,config:Object.assign(Object.assign({},e.config),{tools:s})};if(a.config.tools=s,e.config&&e.config.tools&&Uh(e.config.tools)){const c=(o=(i=e.config.httpOptions)===null||i===void 0?void 0:i.headers)!==null&&o!==void 0?o:{};let l=Object.assign({},c);Object.keys(l).length===0&&(l=this.apiClient.getDefaultHeaders()),Fh(l),a.config.httpOptions=Object.assign(Object.assign({},e.config.httpOptions),{headers:l})}return a}async initAfcToolsMap(e){var t,i,o;const r=new Map;for(const s of(i=(t=e.config)===null||t===void 0?void 0:t.tools)!==null&&i!==void 0?i:[])if(so(s)){const a=s,c=await a.tool();for(const l of(o=c.functionDeclarations)!==null&&o!==void 0?o:[]){if(!l.name)throw new Error("Function declaration name is required.");if(r.has(l.name))throw new Error(`Duplicate tool declaration name: ${l.name}`);r.set(l.name,a)}}return r}async processAfcStream(e){var t,i,o;const r=(o=(i=(t=e.config)===null||t===void 0?void 0:t.automaticFunctionCalling)===null||i===void 0?void 0:i.maximumRemoteCalls)!==null&&o!==void 0?o:gd;let s=!1,a=0;const c=await this.initAfcToolsMap(e);return(function(l,f,p){return dn(this,arguments,function*(){for(var h,m,v,y,g,_;a<r;){s&&(a++,s=!1);const R=yield Ve(l.processParamsMaybeAddMcpUsage(p)),C=yield Ve(l.generateContentStreamInternal(R)),b=[],x=[];try{for(var E=!0,A=(m=void 0,fn(C)),S;S=yield Ve(A.next()),h=S.done,!h;E=!0){y=S.value,E=!1;const M=y;if(yield yield Ve(M),M.candidates&&(!((g=M.candidates[0])===null||g===void 0)&&g.content)){x.push(M.candidates[0].content);for(const B of(_=M.candidates[0].content.parts)!==null&&_!==void 0?_:[])if(a<r&&B.functionCall){if(!B.functionCall.name)throw new Error("Function call name was not returned by the model.");if(f.has(B.functionCall.name)){const I=yield Ve(f.get(B.functionCall.name).callTool([B.functionCall]));b.push(...I)}else throw new Error(`Automatic function calling was requested, but not all the tools the model used implement the CallableTool interface. Available tools: ${f.keys()}, mising tool: ${B.functionCall.name}`)}}}}catch(M){m={error:M}}finally{try{!E&&!h&&(v=A.return)&&(yield Ve(v.call(A)))}finally{if(m)throw m.error}}if(b.length>0){s=!0;const M=new To;M.candidates=[{content:{role:"user",parts:b}}],yield yield Ve(M);const B=[];B.push(...x),B.push({role:"user",parts:b});const I=Qt(p.contents).concat(B);p.contents=I}else break}})})(this,c,e)}async generateContentInternal(e){var t,i,o,r;let s,a="",c={};if(this.apiClient.isVertexAI()){const l=fd(this.apiClient,e);return a=me("{model}:generateContent",l._url),c=l._query,delete l._url,delete l._query,s=this.apiClient.request({path:a,queryParams:c,body:JSON.stringify(l),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json().then(p=>{const h=p;return h.sdkHttpResponse={headers:f.headers},h})),s.then(f=>{const p=pd(f),h=new To;return Object.assign(h,p),h})}else{const l=dd(this.apiClient,e);return a=me("{model}:generateContent",l._url),c=l._query,delete l._url,delete l._query,s=this.apiClient.request({path:a,queryParams:c,body:JSON.stringify(l),httpMethod:"POST",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(f=>f.json().then(p=>{const h=p;return h.sdkHttpResponse={headers:f.headers},h})),s.then(f=>{const p=hd(f),h=new To;return Object.assign(h,p),h})}}async generateContentStreamInternal(e){var t,i,o,r;let s,a="",c={};if(this.apiClient.isVertexAI()){const l=fd(this.apiClient,e);return a=me("{model}:streamGenerateContent?alt=sse",l._url),c=l._query,delete l._url,delete l._query,s=this.apiClient.requestStream({path:a,queryParams:c,body:JSON.stringify(l),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}),s.then(function(p){return dn(this,arguments,function*(){var h,m,v,y;try{for(var g=!0,_=fn(p),E;E=yield Ve(_.next()),h=E.done,!h;g=!0){y=E.value,g=!1;const A=y,S=pd(yield Ve(A.json()),e);S.sdkHttpResponse={headers:A.headers};const R=new To;Object.assign(R,S),yield yield Ve(R)}}catch(A){m={error:A}}finally{try{!g&&!h&&(v=_.return)&&(yield Ve(v.call(_)))}finally{if(m)throw m.error}}})})}else{const l=dd(this.apiClient,e);return a=me("{model}:streamGenerateContent?alt=sse",l._url),c=l._query,delete l._url,delete l._query,s=this.apiClient.requestStream({path:a,queryParams:c,body:JSON.stringify(l),httpMethod:"POST",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}),s.then(function(p){return dn(this,arguments,function*(){var h,m,v,y;try{for(var g=!0,_=fn(p),E;E=yield Ve(_.next()),h=E.done,!h;g=!0){y=E.value,g=!1;const A=y,S=hd(yield Ve(A.json()),e);S.sdkHttpResponse={headers:A.headers};const R=new To;Object.assign(R,S),yield yield Ve(R)}}catch(A){m={error:A}}finally{try{!g&&!h&&(v=_.return)&&(yield Ve(v.call(_)))}finally{if(m)throw m.error}}})})}}async embedContentInternal(e){var t,i,o,r;let s,a="",c={};if(this.apiClient.isVertexAI()){const l=k_(this.apiClient,e,e),f=ng(e.model)?"{model}:embedContent":"{model}:predict";return a=me(f,l._url),c=l._query,delete l._url,delete l._query,s=this.apiClient.request({path:a,queryParams:c,body:JSON.stringify(l),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(p=>p.json().then(h=>{const m=h;return m.sdkHttpResponse={headers:p.headers},m})),s.then(p=>{const h=G_(p,e),m=new $u;return Object.assign(m,h),m})}else{const l=B_(this.apiClient,e);return a=me("{model}:batchEmbedContents",l._url),c=l._query,delete l._url,delete l._query,s=this.apiClient.request({path:a,queryParams:c,body:JSON.stringify(l),httpMethod:"POST",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(f=>f.json().then(p=>{const h=p;return h.sdkHttpResponse={headers:f.headers},h})),s.then(f=>{const p=O_(f),h=new $u;return Object.assign(h,p),h})}}async generateImagesInternal(e){var t,i,o,r;let s,a="",c={};if(this.apiClient.isVertexAI()){const l=Z_(this.apiClient,e);return a=me("{model}:predict",l._url),c=l._query,delete l._url,delete l._query,s=this.apiClient.request({path:a,queryParams:c,body:JSON.stringify(l),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json().then(p=>{const h=p;return h.sdkHttpResponse={headers:f.headers},h})),s.then(f=>{const p=j_(f),h=new Ju;return Object.assign(h,p),h})}else{const l=K_(this.apiClient,e);return a=me("{model}:predict",l._url),c=l._query,delete l._url,delete l._query,s=this.apiClient.request({path:a,queryParams:c,body:JSON.stringify(l),httpMethod:"POST",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(f=>f.json().then(p=>{const h=p;return h.sdkHttpResponse={headers:f.headers},h})),s.then(f=>{const p=Q_(f),h=new Ju;return Object.assign(h,p),h})}}async editImageInternal(e){var t,i;let o,r="",s={};if(this.apiClient.isVertexAI()){const a=N_(this.apiClient,e);return r=me("{model}:predict",a._url),s=a._query,delete a._url,delete a._query,o=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(a),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(c=>c.json().then(l=>{const f=l;return f.sdkHttpResponse={headers:c.headers},f})),o.then(c=>{const l=L_(c),f=new Nm;return Object.assign(f,l),f})}else throw new Error("This method is only supported by the Vertex AI.")}async upscaleImageInternal(e){var t,i;let o,r="",s={};if(this.apiClient.isVertexAI()){const a=Zv(this.apiClient,e);return r=me("{model}:predict",a._url),s=a._query,delete a._url,delete a._query,o=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(a),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(c=>c.json().then(l=>{const f=l;return f.sdkHttpResponse={headers:c.headers},f})),o.then(c=>{const l=Qv(c),f=new Lm;return Object.assign(f,l),f})}else throw new Error("This method is only supported by the Vertex AI.")}async recontextImage(e){var t,i;let o,r="",s={};if(this.apiClient.isVertexAI()){const a=Dv(this.apiClient,e);return r=me("{model}:predict",a._url),s=a._query,delete a._url,delete a._query,o=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(a),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(c=>c.json()),o.then(c=>{const l=Nv(c),f=new Um;return Object.assign(f,l),f})}else throw new Error("This method is only supported by the Vertex AI.")}async segmentImage(e){var t,i;let o,r="",s={};if(this.apiClient.isVertexAI()){const a=Ov(this.apiClient,e);return r=me("{model}:predict",a._url),s=a._query,delete a._url,delete a._query,o=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(a),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(c=>c.json()),o.then(c=>{const l=Gv(c),f=new Fm;return Object.assign(f,l),f})}else throw new Error("This method is only supported by the Vertex AI.")}async get(e){var t,i,o,r;let s,a="",c={};if(this.apiClient.isVertexAI()){const l=gv(this.apiClient,e);return a=me("{name}",l._url),c=l._query,delete l._url,delete l._query,s=this.apiClient.request({path:a,queryParams:c,body:JSON.stringify(l),httpMethod:"GET",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json()),s.then(f=>ka(f))}else{const l=mv(this.apiClient,e);return a=me("{name}",l._url),c=l._query,delete l._url,delete l._query,s=this.apiClient.request({path:a,queryParams:c,body:JSON.stringify(l),httpMethod:"GET",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(f=>f.json()),s.then(f=>Ba(f))}}async listInternal(e){var t,i,o,r;let s,a="",c={};if(this.apiClient.isVertexAI()){const l=Av(this.apiClient,e);return a=me("{models_url}",l._url),c=l._query,delete l._url,delete l._query,s=this.apiClient.request({path:a,queryParams:c,body:JSON.stringify(l),httpMethod:"GET",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json().then(p=>{const h=p;return h.sdkHttpResponse={headers:f.headers},h})),s.then(f=>{const p=wv(f),h=new Ku;return Object.assign(h,p),h})}else{const l=Mv(this.apiClient,e);return a=me("{models_url}",l._url),c=l._query,delete l._url,delete l._query,s=this.apiClient.request({path:a,queryParams:c,body:JSON.stringify(l),httpMethod:"GET",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(f=>f.json().then(p=>{const h=p;return h.sdkHttpResponse={headers:f.headers},h})),s.then(f=>{const p=Cv(f),h=new Ku;return Object.assign(h,p),h})}}async update(e){var t,i,o,r;let s,a="",c={};if(this.apiClient.isVertexAI()){const l=Jv(this.apiClient,e);return a=me("{model}",l._url),c=l._query,delete l._url,delete l._query,s=this.apiClient.request({path:a,queryParams:c,body:JSON.stringify(l),httpMethod:"PATCH",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json()),s.then(f=>ka(f))}else{const l=$v(this.apiClient,e);return a=me("{name}",l._url),c=l._query,delete l._url,delete l._query,s=this.apiClient.request({path:a,queryParams:c,body:JSON.stringify(l),httpMethod:"PATCH",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(f=>f.json()),s.then(f=>Ba(f))}}async delete(e){var t,i,o,r;let s,a="",c={};if(this.apiClient.isVertexAI()){const l=I_(this.apiClient,e);return a=me("{name}",l._url),c=l._query,delete l._url,delete l._query,s=this.apiClient.request({path:a,queryParams:c,body:JSON.stringify(l),httpMethod:"DELETE",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json().then(p=>{const h=p;return h.sdkHttpResponse={headers:f.headers},h})),s.then(f=>{const p=P_(f),h=new Zu;return Object.assign(h,p),h})}else{const l=b_(this.apiClient,e);return a=me("{name}",l._url),c=l._query,delete l._url,delete l._query,s=this.apiClient.request({path:a,queryParams:c,body:JSON.stringify(l),httpMethod:"DELETE",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(f=>f.json().then(p=>{const h=p;return h.sdkHttpResponse={headers:f.headers},h})),s.then(f=>{const p=R_(f),h=new Zu;return Object.assign(h,p),h})}}async countTokens(e){var t,i,o,r;let s,a="",c={};if(this.apiClient.isVertexAI()){const l=A_(this.apiClient,e);return a=me("{model}:countTokens",l._url),c=l._query,delete l._url,delete l._query,s=this.apiClient.request({path:a,queryParams:c,body:JSON.stringify(l),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json().then(p=>{const h=p;return h.sdkHttpResponse={headers:f.headers},h})),s.then(f=>{const p=w_(f),h=new Qu;return Object.assign(h,p),h})}else{const l=M_(this.apiClient,e);return a=me("{model}:countTokens",l._url),c=l._query,delete l._url,delete l._query,s=this.apiClient.request({path:a,queryParams:c,body:JSON.stringify(l),httpMethod:"POST",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(f=>f.json().then(p=>{const h=p;return h.sdkHttpResponse={headers:f.headers},h})),s.then(f=>{const p=C_(f),h=new Qu;return Object.assign(h,p),h})}}async computeTokens(e){var t,i;let o,r="",s={};if(this.apiClient.isVertexAI()){const a=__(this.apiClient,e);return r=me("{model}:computeTokens",a._url),s=a._query,delete a._url,delete a._query,o=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(a),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(c=>c.json().then(l=>{const f=l;return f.sdkHttpResponse={headers:c.headers},f})),o.then(c=>{const l=v_(c),f=new Bm;return Object.assign(f,l),f})}else throw new Error("This method is only supported by the Vertex AI.")}async generateVideosInternal(e){var t,i,o,r;let s,a="",c={};if(this.apiClient.isVertexAI()){const l=rv(this.apiClient,e);return a=me("{model}:predictLongRunning",l._url),c=l._query,delete l._url,delete l._query,s=this.apiClient.request({path:a,queryParams:c,body:JSON.stringify(l),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json()),s.then(f=>{const p=iv(f),h=new Yr;return Object.assign(h,p),h})}else{const l=ov(this.apiClient,e);return a=me("{model}:predictLongRunning",l._url),c=l._query,delete l._url,delete l._query,s=this.apiClient.request({path:a,queryParams:c,body:JSON.stringify(l),httpMethod:"POST",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(f=>f.json()),s.then(f=>{const p=nv(f),h=new Yr;return Object.assign(h,p),h})}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Yy extends Xn{constructor(e){super(),this.apiClient=e}async getVideosOperation(e){const t=e.operation,i=e.config;if(t.name===void 0||t.name==="")throw new Error("Operation name is required.");if(this.apiClient.isVertexAI()){const o=t.name.split("/operations/")[0];let r;i&&"httpOptions"in i&&(r=i.httpOptions);const s=await this.fetchPredictVideosOperationInternal({operationName:t.name,resourceName:o,config:{httpOptions:r}});return t._fromAPIResponse({apiResponse:s,_isVertexAI:!0})}else{const o=await this.getVideosOperationInternal({operationName:t.name,config:i});return t._fromAPIResponse({apiResponse:o,_isVertexAI:!1})}}async get(e){const t=e.operation,i=e.config;if(t.name===void 0||t.name==="")throw new Error("Operation name is required.");if(this.apiClient.isVertexAI()){const o=t.name.split("/operations/")[0];let r;i&&"httpOptions"in i&&(r=i.httpOptions);const s=await this.fetchPredictVideosOperationInternal({operationName:t.name,resourceName:o,config:{httpOptions:r}});return t._fromAPIResponse({apiResponse:s,_isVertexAI:!0})}else{const o=await this.getVideosOperationInternal({operationName:t.name,config:i});return t._fromAPIResponse({apiResponse:o,_isVertexAI:!1})}}async getVideosOperationInternal(e){var t,i,o,r;let s,a="",c={};if(this.apiClient.isVertexAI()){const l=wm(e);return a=me("{operationName}",l._url),c=l._query,delete l._url,delete l._query,s=this.apiClient.request({path:a,queryParams:c,body:JSON.stringify(l),httpMethod:"GET",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json()),s}else{const l=Cm(e);return a=me("{operationName}",l._url),c=l._query,delete l._url,delete l._query,s=this.apiClient.request({path:a,queryParams:c,body:JSON.stringify(l),httpMethod:"GET",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(f=>f.json()),s}}async fetchPredictVideosOperationInternal(e){var t,i;let o,r="",s={};if(this.apiClient.isVertexAI()){const a=ym(e);return r=me("{resourceName}:fetchPredictOperation",a._url),s=a._query,delete a._url,delete a._query,o=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(a),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(c=>c.json()),o}else throw new Error("This method is only supported by the Vertex AI.")}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function $y(n){const e={},t=u(n,["apiKey"]);if(t!=null&&d(e,["apiKey"],t),u(n,["apiKeyConfig"])!==void 0)throw new Error("apiKeyConfig parameter is not supported in Gemini API.");if(u(n,["authType"])!==void 0)throw new Error("authType parameter is not supported in Gemini API.");if(u(n,["googleServiceAccountConfig"])!==void 0)throw new Error("googleServiceAccountConfig parameter is not supported in Gemini API.");if(u(n,["httpBasicAuthConfig"])!==void 0)throw new Error("httpBasicAuthConfig parameter is not supported in Gemini API.");if(u(n,["oauthConfig"])!==void 0)throw new Error("oauthConfig parameter is not supported in Gemini API.");if(u(n,["oidcConfig"])!==void 0)throw new Error("oidcConfig parameter is not supported in Gemini API.");return e}function Jy(n){const e={},t=u(n,["data"]);if(t!=null&&d(e,["data"],t),u(n,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const i=u(n,["mimeType"]);return i!=null&&d(e,["mimeType"],i),e}function Ky(n){const e={},t=u(n,["parts"]);if(t!=null){let o=t;Array.isArray(o)&&(o=o.map(r=>rx(r))),d(e,["parts"],o)}const i=u(n,["role"]);return i!=null&&d(e,["role"],i),e}function Zy(n,e,t){const i={},o=u(e,["expireTime"]);t!==void 0&&o!=null&&d(t,["expireTime"],o);const r=u(e,["newSessionExpireTime"]);t!==void 0&&r!=null&&d(t,["newSessionExpireTime"],r);const s=u(e,["uses"]);t!==void 0&&s!=null&&d(t,["uses"],s);const a=u(e,["liveConnectConstraints"]);t!==void 0&&a!=null&&d(t,["bidiGenerateContentSetup"],ox(n,a));const c=u(e,["lockAdditionalFields"]);return t!==void 0&&c!=null&&d(t,["fieldMask"],c),i}function Qy(n,e){const t={},i=u(e,["config"]);return i!=null&&d(t,["config"],Zy(n,i,t)),t}function jy(n){const e={};if(u(n,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const t=u(n,["fileUri"]);t!=null&&d(e,["fileUri"],t);const i=u(n,["mimeType"]);return i!=null&&d(e,["mimeType"],i),e}function ex(n){const e={},t=u(n,["id"]);t!=null&&d(e,["id"],t);const i=u(n,["args"]);i!=null&&d(e,["args"],i);const o=u(n,["name"]);if(o!=null&&d(e,["name"],o),u(n,["partialArgs"])!==void 0)throw new Error("partialArgs parameter is not supported in Gemini API.");if(u(n,["willContinue"])!==void 0)throw new Error("willContinue parameter is not supported in Gemini API.");return e}function tx(n){const e={},t=u(n,["authConfig"]);t!=null&&d(e,["authConfig"],$y(t));const i=u(n,["enableWidget"]);return i!=null&&d(e,["enableWidget"],i),e}function nx(n){const e={},t=u(n,["searchTypes"]);if(t!=null&&d(e,["searchTypes"],t),u(n,["blockingConfidence"])!==void 0)throw new Error("blockingConfidence parameter is not supported in Gemini API.");if(u(n,["excludeDomains"])!==void 0)throw new Error("excludeDomains parameter is not supported in Gemini API.");const i=u(n,["timeRangeFilter"]);return i!=null&&d(e,["timeRangeFilter"],i),e}function ix(n,e){const t={},i=u(n,["generationConfig"]);e!==void 0&&i!=null&&d(e,["setup","generationConfig"],i);const o=u(n,["responseModalities"]);e!==void 0&&o!=null&&d(e,["setup","generationConfig","responseModalities"],o);const r=u(n,["temperature"]);e!==void 0&&r!=null&&d(e,["setup","generationConfig","temperature"],r);const s=u(n,["topP"]);e!==void 0&&s!=null&&d(e,["setup","generationConfig","topP"],s);const a=u(n,["topK"]);e!==void 0&&a!=null&&d(e,["setup","generationConfig","topK"],a);const c=u(n,["maxOutputTokens"]);e!==void 0&&c!=null&&d(e,["setup","generationConfig","maxOutputTokens"],c);const l=u(n,["mediaResolution"]);e!==void 0&&l!=null&&d(e,["setup","generationConfig","mediaResolution"],l);const f=u(n,["seed"]);e!==void 0&&f!=null&&d(e,["setup","generationConfig","seed"],f);const p=u(n,["speechConfig"]);e!==void 0&&p!=null&&d(e,["setup","generationConfig","speechConfig"],Ql(p));const h=u(n,["thinkingConfig"]);e!==void 0&&h!=null&&d(e,["setup","generationConfig","thinkingConfig"],h);const m=u(n,["enableAffectiveDialog"]);e!==void 0&&m!=null&&d(e,["setup","generationConfig","enableAffectiveDialog"],m);const v=u(n,["systemInstruction"]);e!==void 0&&v!=null&&d(e,["setup","systemInstruction"],Ky(It(v)));const y=u(n,["tools"]);if(e!==void 0&&y!=null){let C=yo(y);Array.isArray(C)&&(C=C.map(b=>ax(vo(b)))),d(e,["setup","tools"],C)}const g=u(n,["sessionResumption"]);e!==void 0&&g!=null&&d(e,["setup","sessionResumption"],sx(g));const _=u(n,["inputAudioTranscription"]);e!==void 0&&_!=null&&d(e,["setup","inputAudioTranscription"],_);const E=u(n,["outputAudioTranscription"]);e!==void 0&&E!=null&&d(e,["setup","outputAudioTranscription"],E);const A=u(n,["realtimeInputConfig"]);e!==void 0&&A!=null&&d(e,["setup","realtimeInputConfig"],A);const S=u(n,["contextWindowCompression"]);e!==void 0&&S!=null&&d(e,["setup","contextWindowCompression"],S);const R=u(n,["proactivity"]);if(e!==void 0&&R!=null&&d(e,["setup","proactivity"],R),u(n,["explicitVadSignal"])!==void 0)throw new Error("explicitVadSignal parameter is not supported in Gemini API.");return t}function ox(n,e){const t={},i=u(e,["model"]);i!=null&&d(t,["setup","model"],it(n,i));const o=u(e,["config"]);return o!=null&&d(t,["config"],ix(o,t)),t}function rx(n){const e={},t=u(n,["mediaResolution"]);t!=null&&d(e,["mediaResolution"],t);const i=u(n,["codeExecutionResult"]);i!=null&&d(e,["codeExecutionResult"],i);const o=u(n,["executableCode"]);o!=null&&d(e,["executableCode"],o);const r=u(n,["fileData"]);r!=null&&d(e,["fileData"],jy(r));const s=u(n,["functionCall"]);s!=null&&d(e,["functionCall"],ex(s));const a=u(n,["functionResponse"]);a!=null&&d(e,["functionResponse"],a);const c=u(n,["inlineData"]);c!=null&&d(e,["inlineData"],Jy(c));const l=u(n,["text"]);l!=null&&d(e,["text"],l);const f=u(n,["thought"]);f!=null&&d(e,["thought"],f);const p=u(n,["thoughtSignature"]);p!=null&&d(e,["thoughtSignature"],p);const h=u(n,["videoMetadata"]);return h!=null&&d(e,["videoMetadata"],h),e}function sx(n){const e={},t=u(n,["handle"]);if(t!=null&&d(e,["handle"],t),u(n,["transparent"])!==void 0)throw new Error("transparent parameter is not supported in Gemini API.");return e}function ax(n){const e={};if(u(n,["retrieval"])!==void 0)throw new Error("retrieval parameter is not supported in Gemini API.");const t=u(n,["computerUse"]);t!=null&&d(e,["computerUse"],t);const i=u(n,["fileSearch"]);i!=null&&d(e,["fileSearch"],i);const o=u(n,["googleSearch"]);o!=null&&d(e,["googleSearch"],nx(o));const r=u(n,["googleMaps"]);r!=null&&d(e,["googleMaps"],tx(r));const s=u(n,["codeExecution"]);if(s!=null&&d(e,["codeExecution"],s),u(n,["enterpriseWebSearch"])!==void 0)throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");const a=u(n,["functionDeclarations"]);if(a!=null){let p=a;Array.isArray(p)&&(p=p.map(h=>h)),d(e,["functionDeclarations"],p)}const c=u(n,["googleSearchRetrieval"]);if(c!=null&&d(e,["googleSearchRetrieval"],c),u(n,["parallelAiSearch"])!==void 0)throw new Error("parallelAiSearch parameter is not supported in Gemini API.");const l=u(n,["urlContext"]);l!=null&&d(e,["urlContext"],l);const f=u(n,["mcpServers"]);if(f!=null){let p=f;Array.isArray(p)&&(p=p.map(h=>h)),d(e,["mcpServers"],p)}return e}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function lx(n){const e=[];for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t)){const i=n[t];if(typeof i=="object"&&i!=null&&Object.keys(i).length>0){const o=Object.keys(i).map(r=>`${t}.${r}`);e.push(...o)}else e.push(t)}return e.join(",")}function cx(n,e){let t=null;const i=n.bidiGenerateContentSetup;if(typeof i=="object"&&i!==null&&"setup"in i){const r=i.setup;typeof r=="object"&&r!==null?(n.bidiGenerateContentSetup=r,t=r):delete n.bidiGenerateContentSetup}else i!==void 0&&delete n.bidiGenerateContentSetup;const o=n.fieldMask;if(t){const r=lx(t);if(Array.isArray(e==null?void 0:e.lockAdditionalFields)&&(e==null?void 0:e.lockAdditionalFields.length)===0)r?n.fieldMask=r:delete n.fieldMask;else if(e!=null&&e.lockAdditionalFields&&e.lockAdditionalFields.length>0&&o!==null&&Array.isArray(o)&&o.length>0){const s=["temperature","topK","topP","maxOutputTokens","responseModalities","seed","speechConfig"];let a=[];o.length>0&&(a=o.map(l=>s.includes(l)?`generationConfig.${l}`:l));const c=[];r&&c.push(r),a.length>0&&c.push(...a),c.length>0?n.fieldMask=c.join(","):delete n.fieldMask}else delete n.fieldMask}else o!==null&&Array.isArray(o)&&o.length>0?n.fieldMask=o.join(","):delete n.fieldMask;return n}class ux extends Xn{constructor(e){super(),this.apiClient=e}async create(e){var t,i;let o,r="",s={};if(this.apiClient.isVertexAI())throw new Error("The client.tokens.create method is only supported by the Gemini Developer API.");{const a=Qy(this.apiClient,e);r=me("auth_tokens",a._url),s=a._query,delete a.config,delete a._url,delete a._query;const c=cx(a,e.config);return o=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(l=>l.json()),o.then(l=>l)}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function dx(n,e){const t={},i=u(n,["force"]);return e!==void 0&&i!=null&&d(e,["_query","force"],i),t}function fx(n){const e={},t=u(n,["name"]);t!=null&&d(e,["_url","name"],t);const i=u(n,["config"]);return i!=null&&dx(i,e),e}function hx(n){const e={},t=u(n,["name"]);return t!=null&&d(e,["_url","name"],t),e}function px(n,e){const t={},i=u(n,["pageSize"]);e!==void 0&&i!=null&&d(e,["_query","pageSize"],i);const o=u(n,["pageToken"]);return e!==void 0&&o!=null&&d(e,["_query","pageToken"],o),t}function mx(n){const e={},t=u(n,["parent"]);t!=null&&d(e,["_url","parent"],t);const i=u(n,["config"]);return i!=null&&px(i,e),e}function gx(n){const e={},t=u(n,["sdkHttpResponse"]);t!=null&&d(e,["sdkHttpResponse"],t);const i=u(n,["nextPageToken"]);i!=null&&d(e,["nextPageToken"],i);const o=u(n,["documents"]);if(o!=null){let r=o;Array.isArray(r)&&(r=r.map(s=>s)),d(e,["documents"],r)}return e}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class _x extends Xn{constructor(e){super(),this.apiClient=e,this.list=async t=>new Ri(Hn.PAGED_ITEM_DOCUMENTS,i=>this.listInternal({parent:t.parent,config:i.config}),await this.listInternal(t),t)}async get(e){var t,i;let o,r="",s={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const a=hx(e);return r=me("{name}",a._url),s=a._query,delete a._url,delete a._query,o=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(a),httpMethod:"GET",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(c=>c.json()),o.then(c=>c)}}async delete(e){var t,i;let o="",r={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const s=fx(e);o=me("{name}",s._url),r=s._query,delete s._url,delete s._query,await this.apiClient.request({path:o,queryParams:r,body:JSON.stringify(s),httpMethod:"DELETE",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal})}}async listInternal(e){var t,i;let o,r="",s={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const a=mx(e);return r=me("{parent}/documents",a._url),s=a._query,delete a._url,delete a._query,o=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(a),httpMethod:"GET",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(c=>c.json()),o.then(c=>{const l=gx(c),f=new km;return Object.assign(f,l),f})}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class vx extends Xn{constructor(e,t=new _x(e)){super(),this.apiClient=e,this.documents=t,this.list=async(i={})=>new Ri(Hn.PAGED_ITEM_FILE_SEARCH_STORES,o=>this.listInternal(o),await this.listInternal(i),i)}async uploadToFileSearchStore(e){if(this.apiClient.isVertexAI())throw new Error("Vertex AI does not support uploading files to a file search store.");return this.apiClient.uploadFileToFileSearchStore(e.fileSearchStoreName,e.file,e.config)}async create(e){var t,i;let o,r="",s={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const a=ry(e);return r=me("fileSearchStores",a._url),s=a._query,delete a._url,delete a._query,o=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(a),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(c=>c.json()),o.then(c=>c)}}async get(e){var t,i;let o,r="",s={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const a=ly(e);return r=me("{name}",a._url),s=a._query,delete a._url,delete a._query,o=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(a),httpMethod:"GET",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(c=>c.json()),o.then(c=>c)}}async delete(e){var t,i;let o="",r={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const s=ay(e);o=me("{name}",s._url),r=s._query,delete s._url,delete s._query,await this.apiClient.request({path:o,queryParams:r,body:JSON.stringify(s),httpMethod:"DELETE",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal})}}async listInternal(e){var t,i;let o,r="",s={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const a=py(e);return r=me("fileSearchStores",a._url),s=a._query,delete a._url,delete a._query,o=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(a),httpMethod:"GET",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(c=>c.json()),o.then(c=>{const l=my(c),f=new Om;return Object.assign(f,l),f})}}async uploadToFileSearchStoreInternal(e){var t,i;let o,r="",s={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const a=gy(e);return r=me("upload/v1beta/{file_search_store_name}:uploadToFileSearchStore",a._url),s=a._query,delete a._url,delete a._query,o=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(a),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(c=>c.json()),o.then(c=>{const l=_y(c),f=new Gm;return Object.assign(f,l),f})}}async importFile(e){var t,i;let o,r="",s={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const a=dy(e);return r=me("{file_search_store_name}:importFile",a._url),s=a._query,delete a._url,delete a._query,o=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(a),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(c=>c.json()),o.then(c=>{const l=uy(c),f=new Yl;return Object.assign(f,l),f})}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Bh=function(){const{crypto:n}=globalThis;if(n!=null&&n.randomUUID)return Bh=n.randomUUID.bind(n),n.randomUUID();const e=new Uint8Array(1),t=n?()=>n.getRandomValues(e)[0]:()=>Math.random()*255&255;return"10000000-1000-4000-8000-100000000000".replace(/[018]/g,i=>(+i^t()&15>>+i/4).toString(16))};const yx=()=>Bh();/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Ga(n){return typeof n=="object"&&n!==null&&("name"in n&&n.name==="AbortError"||"message"in n&&String(n.message).includes("FetchRequestCanceledException"))}const Va=n=>{if(n instanceof Error)return n;if(typeof n=="object"&&n!==null){try{if(Object.prototype.toString.call(n)==="[object Error]"){const e=new Error(n.message,n.cause?{cause:n.cause}:{});return n.stack&&(e.stack=n.stack),n.cause&&!e.cause&&(e.cause=n.cause),n.name&&(e.name=n.name),e}}catch{}try{return new Error(JSON.stringify(n))}catch{}}return new Error(n)};/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class tn extends Error{}class Ht extends tn{constructor(e,t,i,o){super(`${Ht.makeMessage(e,t,i)}`),this.status=e,this.headers=o,this.error=t}static makeMessage(e,t,i){const o=t!=null&&t.message?typeof t.message=="string"?t.message:JSON.stringify(t.message):t?JSON.stringify(t):i;return e&&o?`${e} ${o}`:e?`${e} status code (no body)`:o||"(no status code or body)"}static generate(e,t,i,o){if(!e||!o)return new ls({message:i,cause:Va(t)});const r=t;return e===400?new Oh(e,r,i,o):e===401?new Gh(e,r,i,o):e===403?new Vh(e,r,i,o):e===404?new Hh(e,r,i,o):e===409?new zh(e,r,i,o):e===422?new Wh(e,r,i,o):e===429?new qh(e,r,i,o):e>=500?new Xh(e,r,i,o):new Ht(e,r,i,o)}}class Ha extends Ht{constructor({message:e}={}){super(void 0,void 0,e||"Request was aborted.",void 0)}}class ls extends Ht{constructor({message:e,cause:t}){super(void 0,void 0,e||"Connection error.",void 0),t&&(this.cause=t)}}class kh extends ls{constructor({message:e}={}){super({message:e??"Request timed out."})}}class Oh extends Ht{}class Gh extends Ht{}class Vh extends Ht{}class Hh extends Ht{}class zh extends Ht{}class Wh extends Ht{}class qh extends Ht{}class Xh extends Ht{}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const xx=/^[a-z][a-z0-9+.-]*:/i,Ex=n=>xx.test(n);let za=n=>(za=Array.isArray,za(n));const Sx=za;let Tx=Sx;const xd=Tx;function Mx(n){if(!n)return!0;for(const e in n)return!1;return!0}function Ax(n,e){return Object.prototype.hasOwnProperty.call(n,e)}const Cx=(n,e)=>{if(typeof e!="number"||!Number.isInteger(e))throw new tn(`${n} must be an integer`);if(e<0)throw new tn(`${n} must be a positive integer`);return e},wx=n=>{try{return JSON.parse(n)}catch{return}};/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const bx=n=>new Promise(e=>setTimeout(e,n));/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Ix(){if(typeof fetch<"u")return fetch;throw new Error("`fetch` is not defined as a global; Either pass `fetch` to the client, `new GeminiNextGenAPIClient({ fetch })` or polyfill the global, `globalThis.fetch = fetch`")}function Yh(...n){const e=globalThis.ReadableStream;if(typeof e>"u")throw new Error("`ReadableStream` is not defined as a global; You will need to polyfill it, `globalThis.ReadableStream = ReadableStream`");return new e(...n)}function Rx(n){let e=Symbol.asyncIterator in n?n[Symbol.asyncIterator]():n[Symbol.iterator]();return Yh({start(){},async pull(t){const{done:i,value:o}=await e.next();i?t.close():t.enqueue(o)},async cancel(){var t;await((t=e.return)===null||t===void 0?void 0:t.call(e))}})}function $h(n){if(n[Symbol.asyncIterator])return n;const e=n.getReader();return{async next(){try{const t=await e.read();return t!=null&&t.done&&e.releaseLock(),t}catch(t){throw e.releaseLock(),t}},async return(){const t=e.cancel();return e.releaseLock(),await t,{done:!0,value:void 0}},[Symbol.asyncIterator](){return this}}}async function Px(n){var e,t;if(n===null||typeof n!="object")return;if(n[Symbol.asyncIterator]){await((t=(e=n[Symbol.asyncIterator]()).return)===null||t===void 0?void 0:t.call(e));return}const i=n.getReader(),o=i.cancel();i.releaseLock(),await o}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Dx=({headers:n,body:e})=>({bodyHeaders:{"content-type":"application/json"},body:JSON.stringify(e)});/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Nx="0.0.1";/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Jh=()=>{var n;if(typeof File>"u"){const{process:e}=globalThis,t=typeof((n=e==null?void 0:e.versions)===null||n===void 0?void 0:n.node)=="string"&&parseInt(e.versions.node.split("."))<20;throw new Error("`File` is not defined as a global, which is required for file uploads."+(t?" Update to Node 20 LTS or newer, or set `globalThis.File` to `import('node:buffer').File`.":""))}};function ys(n,e,t){return Jh(),new File(n,e??"unknown_file",t)}function Lx(n){return(typeof n=="object"&&n!==null&&("name"in n&&n.name&&String(n.name)||"url"in n&&n.url&&String(n.url)||"filename"in n&&n.filename&&String(n.filename)||"path"in n&&n.path&&String(n.path))||"").split(/[\\/]/).pop()||void 0}const Ux=n=>n!=null&&typeof n=="object"&&typeof n[Symbol.asyncIterator]=="function";/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Kh=n=>n!=null&&typeof n=="object"&&typeof n.size=="number"&&typeof n.type=="string"&&typeof n.text=="function"&&typeof n.slice=="function"&&typeof n.arrayBuffer=="function",Fx=n=>n!=null&&typeof n=="object"&&typeof n.name=="string"&&typeof n.lastModified=="number"&&Kh(n),Bx=n=>n!=null&&typeof n=="object"&&typeof n.url=="string"&&typeof n.blob=="function";async function kx(n,e,t){if(Jh(),n=await n,Fx(n))return n instanceof File?n:ys([await n.arrayBuffer()],n.name);if(Bx(n)){const o=await n.blob();return e||(e=new URL(n.url).pathname.split(/[\\/]/).pop()),ys(await Wa(o),e,t)}const i=await Wa(n);if(e||(e=Lx(n)),!(t!=null&&t.type)){const o=i.find(r=>typeof r=="object"&&"type"in r&&r.type);typeof o=="string"&&(t=Object.assign(Object.assign({},t),{type:o}))}return ys(i,e,t)}async function Wa(n){var e,t,i,o,r;let s=[];if(typeof n=="string"||ArrayBuffer.isView(n)||n instanceof ArrayBuffer)s.push(n);else if(Kh(n))s.push(n instanceof Blob?n:await n.arrayBuffer());else if(Ux(n))try{for(var a=!0,c=fn(n),l;l=await c.next(),e=l.done,!e;a=!0){o=l.value,a=!1;const f=o;s.push(...await Wa(f))}}catch(f){t={error:f}}finally{try{!a&&!e&&(i=c.return)&&await i.call(c)}finally{if(t)throw t.error}}else{const f=(r=n==null?void 0:n.constructor)===null||r===void 0?void 0:r.name;throw new Error(`Unexpected data type: ${typeof n}${f?`; constructor: ${f}`:""}${Ox(n)}`)}return s}function Ox(n){return typeof n!="object"||n===null?"":`; props: [${Object.getOwnPropertyNames(n).map(t=>`"${t}"`).join(", ")}]`}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Zh{constructor(e){this._client=e}}Zh._key=[];/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Qh(n){return n.replace(/[^A-Za-z0-9\-._~!$&'()*+,;=:@]+/g,encodeURIComponent)}const Ed=Object.freeze(Object.create(null)),Gx=(n=Qh)=>(function(t,...i){if(t.length===1)return t[0];let o=!1;const r=[],s=t.reduce((f,p,h)=>{var m,v,y;/[?#]/.test(p)&&(o=!0);const g=i[h];let _=(o?encodeURIComponent:n)(""+g);return h!==i.length&&(g==null||typeof g=="object"&&g.toString===((y=Object.getPrototypeOf((v=Object.getPrototypeOf((m=g.hasOwnProperty)!==null&&m!==void 0?m:Ed))!==null&&v!==void 0?v:Ed))===null||y===void 0?void 0:y.toString))&&(_=g+"",r.push({start:f.length+p.length,length:_.length,error:`Value of type ${Object.prototype.toString.call(g).slice(8,-1)} is not a valid path parameter`})),f+p+(h===i.length?"":_)},""),a=s.split(/[?#]/,1)[0],c=/(^|\/)(?:\.|%2e){1,2}(?=\/|$)/gi;let l;for(;(l=c.exec(a))!==null;){const f=l[0].startsWith("/"),p=f?1:0,h=f?l[0].slice(1):l[0];r.push({start:l.index+p,length:h.length,error:`Value "${h}" can't be safely passed as a path parameter`})}if(r.sort((f,p)=>f.start-p.start),r.length>0){let f=0;const p=r.reduce((h,m)=>{const v=" ".repeat(m.start-f),y="^".repeat(m.length);return f=m.start+m.length,h+v+y},"");throw new tn(`Path parameters result in path with invalid segments:
${r.map(h=>h.error).join(`
`)}
${s}
${p}`)}return s}),jo=Gx(Qh);/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class jh extends Zh{create(e,t){var i;const{api_version:o=this._client.apiVersion}=e,r=Jr(e,["api_version"]);if("model"in r&&"agent_config"in r)throw new tn("Invalid request: specified `model` and `agent_config`. If specifying `model`, use `generation_config`.");if("agent"in r&&"generation_config"in r)throw new tn("Invalid request: specified `agent` and `generation_config`. If specifying `agent`, use `agent_config`.");return this._client.post(jo`/${o}/interactions`,Object.assign(Object.assign({body:r},t),{stream:(i=e.stream)!==null&&i!==void 0?i:!1}))}delete(e,t={},i){const{api_version:o=this._client.apiVersion}=t??{};return this._client.delete(jo`/${o}/interactions/${e}`,i)}cancel(e,t={},i){const{api_version:o=this._client.apiVersion}=t??{};return this._client.post(jo`/${o}/interactions/${e}/cancel`,i)}get(e,t={},i){var o;const r=t??{},{api_version:s=this._client.apiVersion}=r,a=Jr(r,["api_version"]);return this._client.get(jo`/${s}/interactions/${e}`,Object.assign(Object.assign({query:a},i),{stream:(o=t==null?void 0:t.stream)!==null&&o!==void 0?o:!1}))}}jh._key=Object.freeze(["interactions"]);class ep extends jh{}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Vx(n){let e=0;for(const o of n)e+=o.length;const t=new Uint8Array(e);let i=0;for(const o of n)t.set(o,i),i+=o.length;return t}let er;function ec(n){let e;return(er??(e=new globalThis.TextEncoder,er=e.encode.bind(e)))(n)}let tr;function Sd(n){let e;return(tr??(e=new globalThis.TextDecoder,tr=e.decode.bind(e)))(n)}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class cs{constructor(){this.buffer=new Uint8Array,this.carriageReturnIndex=null,this.searchIndex=0}decode(e){var t;if(e==null)return[];const i=e instanceof ArrayBuffer?new Uint8Array(e):typeof e=="string"?ec(e):e;this.buffer=Vx([this.buffer,i]);const o=[];let r;for(;(r=Hx(this.buffer,(t=this.carriageReturnIndex)!==null&&t!==void 0?t:this.searchIndex))!=null;){if(r.carriage&&this.carriageReturnIndex==null){this.carriageReturnIndex=r.index;continue}if(this.carriageReturnIndex!=null&&(r.index!==this.carriageReturnIndex+1||r.carriage)){o.push(Sd(this.buffer.subarray(0,this.carriageReturnIndex-1))),this.buffer=this.buffer.subarray(this.carriageReturnIndex),this.carriageReturnIndex=null,this.searchIndex=0;continue}const s=this.carriageReturnIndex!==null?r.preceding-1:r.preceding,a=Sd(this.buffer.subarray(0,s));o.push(a),this.buffer=this.buffer.subarray(r.index),this.carriageReturnIndex=null,this.searchIndex=0}return this.searchIndex=Math.max(0,this.buffer.length-1),o}flush(){return this.buffer.length?this.decode(`
`):[]}}cs.NEWLINE_CHARS=new Set([`
`,"\r"]);cs.NEWLINE_REGEXP=/\r\n|[\n\r]/g;function Hx(n,e){const o=e??0,r=n.indexOf(10,o),s=n.indexOf(13,o);if(r===-1&&s===-1)return null;let a;return r!==-1&&s!==-1?a=Math.min(r,s):a=r!==-1?r:s,n[a]===10?{preceding:a,index:a+1,carriage:!1}:{preceding:a,index:a+1,carriage:!0}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Kr={off:0,error:200,warn:300,info:400,debug:500},Td=(n,e,t)=>{if(n){if(Ax(Kr,n))return n;Vt(t).warn(`${e} was set to ${JSON.stringify(n)}, expected one of ${JSON.stringify(Object.keys(Kr))}`)}};function Fo(){}function nr(n,e,t){return!e||Kr[n]>Kr[t]?Fo:e[n].bind(e)}const zx={error:Fo,warn:Fo,info:Fo,debug:Fo};let Md=new WeakMap;function Vt(n){var e;const t=n.logger,i=(e=n.logLevel)!==null&&e!==void 0?e:"off";if(!t)return zx;const o=Md.get(t);if(o&&o[0]===i)return o[1];const r={error:nr("error",t,i),warn:nr("warn",t,i),info:nr("info",t,i),debug:nr("debug",t,i)};return Md.set(t,[i,r]),r}const Si=n=>(n.options&&(n.options=Object.assign({},n.options),delete n.options.headers),n.headers&&(n.headers=Object.fromEntries((n.headers instanceof Headers?[...n.headers]:Object.entries(n.headers)).map(([e,t])=>[e,e.toLowerCase()==="x-goog-api-key"||e.toLowerCase()==="authorization"||e.toLowerCase()==="cookie"||e.toLowerCase()==="set-cookie"?"***":t]))),"retryOfRequestLogID"in n&&(n.retryOfRequestLogID&&(n.retryOf=n.retryOfRequestLogID),delete n.retryOfRequestLogID),n);/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class io{constructor(e,t,i){this.iterator=e,this.controller=t,this.client=i}static fromSSEResponse(e,t,i){let o=!1;const r=i?Vt(i):console;function s(){return dn(this,arguments,function*(){var c,l,f,p;if(o)throw new tn("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");o=!0;let h=!1;try{try{for(var m=!0,v=fn(Wx(e,t)),y;y=yield Ve(v.next()),c=y.done,!c;m=!0){p=y.value,m=!1;const g=p;if(!h)if(g.data.startsWith("[DONE]")){h=!0;continue}else try{yield yield Ve(JSON.parse(g.data))}catch(_){throw r.error("Could not parse message into JSON:",g.data),r.error("From chunk:",g.raw),_}}}catch(g){l={error:g}}finally{try{!m&&!c&&(f=v.return)&&(yield Ve(f.call(v)))}finally{if(l)throw l.error}}h=!0}catch(g){if(Ga(g))return yield Ve(void 0);throw g}finally{h||t.abort()}})}return new io(s,t,i)}static fromReadableStream(e,t,i){let o=!1;function r(){return dn(this,arguments,function*(){var c,l,f,p;const h=new cs,m=$h(e);try{for(var v=!0,y=fn(m),g;g=yield Ve(y.next()),c=g.done,!c;v=!0){p=g.value,v=!1;const _=p;for(const E of h.decode(_))yield yield Ve(E)}}catch(_){l={error:_}}finally{try{!v&&!c&&(f=y.return)&&(yield Ve(f.call(y)))}finally{if(l)throw l.error}}for(const _ of h.flush())yield yield Ve(_)})}function s(){return dn(this,arguments,function*(){var c,l,f,p;if(o)throw new tn("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");o=!0;let h=!1;try{try{for(var m=!0,v=fn(r()),y;y=yield Ve(v.next()),c=y.done,!c;m=!0){p=y.value,m=!1;const g=p;h||g&&(yield yield Ve(JSON.parse(g)))}}catch(g){l={error:g}}finally{try{!m&&!c&&(f=v.return)&&(yield Ve(f.call(v)))}finally{if(l)throw l.error}}h=!0}catch(g){if(Ga(g))return yield Ve(void 0);throw g}finally{h||t.abort()}})}return new io(s,t,i)}[Symbol.asyncIterator](){return this.iterator()}tee(){const e=[],t=[],i=this.iterator(),o=r=>({next:()=>{if(r.length===0){const s=i.next();e.push(s),t.push(s)}return r.shift()}});return[new io(()=>o(e),this.controller,this.client),new io(()=>o(t),this.controller,this.client)]}toReadableStream(){const e=this;let t;return Yh({async start(){t=e[Symbol.asyncIterator]()},async pull(i){try{const{value:o,done:r}=await t.next();if(r)return i.close();const s=ec(JSON.stringify(o)+`
`);i.enqueue(s)}catch(o){i.error(o)}},async cancel(){var i;await((i=t.return)===null||i===void 0?void 0:i.call(t))}})}}function Wx(n,e){return dn(this,arguments,function*(){var i,o,r,s;if(!n.body)throw e.abort(),typeof globalThis.navigator<"u"&&globalThis.navigator.product==="ReactNative"?new tn("The default react-native fetch implementation does not support streaming. Please use expo/fetch: https://docs.expo.dev/versions/latest/sdk/expo/#expofetch-api"):new tn("Attempted to iterate over a response with no body");const a=new Xx,c=new cs,l=$h(n.body);try{for(var f=!0,p=fn(qx(l)),h;h=yield Ve(p.next()),i=h.done,!i;f=!0){s=h.value,f=!1;const m=s;for(const v of c.decode(m)){const y=a.decode(v);y&&(yield yield Ve(y))}}}catch(m){o={error:m}}finally{try{!f&&!i&&(r=p.return)&&(yield Ve(r.call(p)))}finally{if(o)throw o.error}}for(const m of c.flush()){const v=a.decode(m);v&&(yield yield Ve(v))}})}function qx(n){return dn(this,arguments,function*(){var t,i,o,r;try{for(var s=!0,a=fn(n),c;c=yield Ve(a.next()),t=c.done,!t;s=!0){r=c.value,s=!1;const l=r;if(l==null)continue;const f=l instanceof ArrayBuffer?new Uint8Array(l):typeof l=="string"?ec(l):l;yield yield Ve(f)}}catch(l){i={error:l}}finally{try{!s&&!t&&(o=a.return)&&(yield Ve(o.call(a)))}finally{if(i)throw i.error}}})}class Xx{constructor(){this.event=null,this.data=[],this.chunks=[]}decode(e){if(e.endsWith("\r")&&(e=e.substring(0,e.length-1)),!e){if(!this.event&&!this.data.length)return null;const r={event:this.event,data:this.data.join(`
`),raw:this.chunks};return this.event=null,this.data=[],this.chunks=[],r}if(this.chunks.push(e),e.startsWith(":"))return null;let[t,i,o]=Yx(e,":");return o.startsWith(" ")&&(o=o.substring(1)),t==="event"?this.event=o:t==="data"&&this.data.push(o),null}}function Yx(n,e){const t=n.indexOf(e);return t!==-1?[n.substring(0,t),e,n.substring(t+e.length)]:[n,"",""]}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */async function $x(n,e){const{response:t,requestLogID:i,retryOfRequestLogID:o,startTime:r}=e,s=await(async()=>{var a;if(e.options.stream)return Vt(n).debug("response",t.status,t.url,t.headers,t.body),e.options.__streamClass?e.options.__streamClass.fromSSEResponse(t,e.controller,n):io.fromSSEResponse(t,e.controller,n);if(t.status===204)return null;if(e.options.__binaryResponse)return t;const c=t.headers.get("content-type"),l=(a=c==null?void 0:c.split(";")[0])===null||a===void 0?void 0:a.trim();return(l==null?void 0:l.includes("application/json"))||(l==null?void 0:l.endsWith("+json"))?t.headers.get("content-length")==="0"?void 0:await t.json():await t.text()})();return Vt(n).debug(`[${i}] response parsed`,Si({retryOfRequestLogID:o,url:t.url,status:t.status,body:s,durationMs:Date.now()-r})),s}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class tc extends Promise{constructor(e,t,i=$x){super(o=>{o(null)}),this.responsePromise=t,this.parseResponse=i,this.client=e}_thenUnwrap(e){return new tc(this.client,this.responsePromise,async(t,i)=>e(await this.parseResponse(t,i),i))}asResponse(){return this.responsePromise.then(e=>e.response)}async withResponse(){const[e,t]=await Promise.all([this.parse(),this.asResponse()]);return{data:e,response:t}}parse(){return this.parsedPromise||(this.parsedPromise=this.responsePromise.then(e=>this.parseResponse(this.client,e))),this.parsedPromise}then(e,t){return this.parse().then(e,t)}catch(e){return this.parse().catch(e)}finally(e){return this.parse().finally(e)}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const tp=Symbol("brand.privateNullableHeaders");function*Jx(n){if(!n)return;if(tp in n){const{values:i,nulls:o}=n;yield*i.entries();for(const r of o)yield[r,null];return}let e=!1,t;n instanceof Headers?t=n.entries():xd(n)?t=n:(e=!0,t=Object.entries(n??{}));for(let i of t){const o=i[0];if(typeof o!="string")throw new TypeError("expected header name to be a string");const r=xd(i[1])?i[1]:[i[1]];let s=!1;for(const a of r)a!==void 0&&(e&&!s&&(s=!0,yield[o,null]),yield[o,a])}}const Mo=n=>{const e=new Headers,t=new Set;for(const i of n){const o=new Set;for(const[r,s]of Jx(i)){const a=r.toLowerCase();o.has(a)||(e.delete(r),o.add(a)),s===null?(e.delete(r),t.add(a)):(e.append(r,s),t.delete(a))}}return{[tp]:!0,values:e,nulls:t}};/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const xs=n=>{var e,t,i,o,r,s;if(typeof globalThis.process<"u")return(i=(t=(e=hm)===null||e===void 0?void 0:e[n])===null||t===void 0?void 0:t.trim())!==null&&i!==void 0?i:void 0;if(typeof globalThis.Deno<"u")return(s=(r=(o=globalThis.Deno.env)===null||o===void 0?void 0:o.get)===null||r===void 0?void 0:r.call(o,n))===null||s===void 0?void 0:s.trim()};/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var np;class us{constructor(e){var t,i,o,r,s,a,c,{baseURL:l=xs("GEMINI_NEXT_GEN_API_BASE_URL"),apiKey:f=(t=xs("GEMINI_API_KEY"))!==null&&t!==void 0?t:null,apiVersion:p="v1beta"}=e,h=Jr(e,["baseURL","apiKey","apiVersion"]);const m=Object.assign(Object.assign({apiKey:f,apiVersion:p},h),{baseURL:l||"https://generativelanguage.googleapis.com"});this.baseURL=m.baseURL,this.timeout=(i=m.timeout)!==null&&i!==void 0?i:us.DEFAULT_TIMEOUT,this.logger=(o=m.logger)!==null&&o!==void 0?o:console;const v="warn";this.logLevel=v,this.logLevel=(s=(r=Td(m.logLevel,"ClientOptions.logLevel",this))!==null&&r!==void 0?r:Td(xs("GEMINI_NEXT_GEN_API_LOG"),"process.env['GEMINI_NEXT_GEN_API_LOG']",this))!==null&&s!==void 0?s:v,this.fetchOptions=m.fetchOptions,this.maxRetries=(a=m.maxRetries)!==null&&a!==void 0?a:2,this.fetch=(c=m.fetch)!==null&&c!==void 0?c:Ix(),this.encoder=Dx,this._options=m,this.apiKey=f,this.apiVersion=p,this.clientAdapter=m.clientAdapter}withOptions(e){return new this.constructor(Object.assign(Object.assign(Object.assign({},this._options),{baseURL:this.baseURL,maxRetries:this.maxRetries,timeout:this.timeout,logger:this.logger,logLevel:this.logLevel,fetch:this.fetch,fetchOptions:this.fetchOptions,apiKey:this.apiKey,apiVersion:this.apiVersion}),e))}baseURLOverridden(){return this.baseURL!=="https://generativelanguage.googleapis.com"}defaultQuery(){return this._options.defaultQuery}validateHeaders({values:e,nulls:t}){if(!(e.has("authorization")||e.has("x-goog-api-key"))&&!(this.apiKey&&e.get("x-goog-api-key"))&&!t.has("x-goog-api-key"))throw new Error('Could not resolve authentication method. Expected the apiKey to be set. Or for the "x-goog-api-key" headers to be explicitly omitted')}async authHeaders(e){const t=Mo([e.headers]);if(!(t.values.has("authorization")||t.values.has("x-goog-api-key"))){if(this.apiKey)return Mo([{"x-goog-api-key":this.apiKey}]);if(this.clientAdapter.isVertexAI())return Mo([await this.clientAdapter.getAuthHeaders()])}}stringifyQuery(e){return Object.entries(e).filter(([t,i])=>typeof i<"u").map(([t,i])=>{if(typeof i=="string"||typeof i=="number"||typeof i=="boolean")return`${encodeURIComponent(t)}=${encodeURIComponent(i)}`;if(i===null)return`${encodeURIComponent(t)}=`;throw new tn(`Cannot stringify type ${typeof i}; Expected string, number, boolean, or null. If you need to pass nested query parameters, you can manually encode them, e.g. { query: { 'foo[key1]': value1, 'foo[key2]': value2 } }, and please open a GitHub issue requesting better support for your use case.`)}).join("&")}getUserAgent(){return`${this.constructor.name}/JS ${Nx}`}defaultIdempotencyKey(){return`stainless-node-retry-${yx()}`}makeStatusError(e,t,i,o){return Ht.generate(e,t,i,o)}buildURL(e,t,i){const o=!this.baseURLOverridden()&&i||this.baseURL,r=Ex(e)?new URL(e):new URL(o+(o.endsWith("/")&&e.startsWith("/")?e.slice(1):e)),s=this.defaultQuery();return Mx(s)||(t=Object.assign(Object.assign({},s),t)),typeof t=="object"&&t&&!Array.isArray(t)&&(r.search=this.stringifyQuery(t)),r.toString()}async prepareOptions(e){if(this.clientAdapter&&this.clientAdapter.isVertexAI()&&!e.path.startsWith(`/${this.apiVersion}/projects/`)){const t=e.path.slice(this.apiVersion.length+1);e.path=`/${this.apiVersion}/projects/${this.clientAdapter.getProject()}/locations/${this.clientAdapter.getLocation()}${t}`}}async prepareRequest(e,{url:t,options:i}){}get(e,t){return this.methodRequest("get",e,t)}post(e,t){return this.methodRequest("post",e,t)}patch(e,t){return this.methodRequest("patch",e,t)}put(e,t){return this.methodRequest("put",e,t)}delete(e,t){return this.methodRequest("delete",e,t)}methodRequest(e,t,i){return this.request(Promise.resolve(i).then(o=>Object.assign({method:e,path:t},o)))}request(e,t=null){return new tc(this,this.makeRequest(e,t,void 0))}async makeRequest(e,t,i){var o,r,s;const a=await e,c=(o=a.maxRetries)!==null&&o!==void 0?o:this.maxRetries;t==null&&(t=c),await this.prepareOptions(a);const{req:l,url:f,timeout:p}=await this.buildRequest(a,{retryCount:c-t});await this.prepareRequest(l,{url:f,options:a});const h="log_"+(Math.random()*(1<<24)|0).toString(16).padStart(6,"0"),m=i===void 0?"":`, retryOf: ${i}`,v=Date.now();if(Vt(this).debug(`[${h}] sending request`,Si({retryOfRequestLogID:i,method:a.method,url:f,options:a,headers:l.headers})),!((r=a.signal)===null||r===void 0)&&r.aborted)throw new Ha;const y=new AbortController,g=await this.fetchWithTimeout(f,l,p,y).catch(Va),_=Date.now();if(g instanceof globalThis.Error){const A=`retrying, ${t} attempts remaining`;if(!((s=a.signal)===null||s===void 0)&&s.aborted)throw new Ha;const S=Ga(g)||/timed? ?out/i.test(String(g)+("cause"in g?String(g.cause):""));if(t)return Vt(this).info(`[${h}] connection ${S?"timed out":"failed"} - ${A}`),Vt(this).debug(`[${h}] connection ${S?"timed out":"failed"} (${A})`,Si({retryOfRequestLogID:i,url:f,durationMs:_-v,message:g.message})),this.retryRequest(a,t,i??h);throw Vt(this).info(`[${h}] connection ${S?"timed out":"failed"} - error; no more retries left`),Vt(this).debug(`[${h}] connection ${S?"timed out":"failed"} (error; no more retries left)`,Si({retryOfRequestLogID:i,url:f,durationMs:_-v,message:g.message})),S?new kh:new ls({cause:g})}const E=`[${h}${m}] ${l.method} ${f} ${g.ok?"succeeded":"failed"} with status ${g.status} in ${_-v}ms`;if(!g.ok){const A=await this.shouldRetry(g);if(t&&A){const M=`retrying, ${t} attempts remaining`;return await Px(g.body),Vt(this).info(`${E} - ${M}`),Vt(this).debug(`[${h}] response error (${M})`,Si({retryOfRequestLogID:i,url:g.url,status:g.status,headers:g.headers,durationMs:_-v})),this.retryRequest(a,t,i??h,g.headers)}const S=A?"error; no more retries left":"error; not retryable";Vt(this).info(`${E} - ${S}`);const R=await g.text().catch(M=>Va(M).message),C=wx(R),b=C?void 0:R;throw Vt(this).debug(`[${h}] response error (${S})`,Si({retryOfRequestLogID:i,url:g.url,status:g.status,headers:g.headers,message:b,durationMs:Date.now()-v})),this.makeStatusError(g.status,C,b,g.headers)}return Vt(this).info(E),Vt(this).debug(`[${h}] response start`,Si({retryOfRequestLogID:i,url:g.url,status:g.status,headers:g.headers,durationMs:_-v})),{response:g,options:a,controller:y,requestLogID:h,retryOfRequestLogID:i,startTime:v}}async fetchWithTimeout(e,t,i,o){const r=t||{},{signal:s,method:a}=r,c=Jr(r,["signal","method"]),l=this._makeAbort(o);s&&s.addEventListener("abort",l,{once:!0});const f=setTimeout(l,i),p=globalThis.ReadableStream&&c.body instanceof globalThis.ReadableStream||typeof c.body=="object"&&c.body!==null&&Symbol.asyncIterator in c.body,h=Object.assign(Object.assign(Object.assign({signal:o.signal},p?{duplex:"half"}:{}),{method:"GET"}),c);a&&(h.method=a.toUpperCase());try{return await this.fetch.call(void 0,e,h)}finally{clearTimeout(f)}}async shouldRetry(e){const t=e.headers.get("x-should-retry");return t==="true"?!0:t==="false"?!1:e.status===408||e.status===409||e.status===429||e.status>=500}async retryRequest(e,t,i,o){var r;let s;const a=o==null?void 0:o.get("retry-after-ms");if(a){const l=parseFloat(a);Number.isNaN(l)||(s=l)}const c=o==null?void 0:o.get("retry-after");if(c&&!s){const l=parseFloat(c);Number.isNaN(l)?s=Date.parse(c)-Date.now():s=l*1e3}if(!(s&&0<=s&&s<60*1e3)){const l=(r=e.maxRetries)!==null&&r!==void 0?r:this.maxRetries;s=this.calculateDefaultRetryTimeoutMillis(t,l)}return await bx(s),this.makeRequest(e,t-1,i)}calculateDefaultRetryTimeoutMillis(e,t){const r=t-e,s=Math.min(.5*Math.pow(2,r),8),a=1-Math.random()*.25;return s*a*1e3}async buildRequest(e,{retryCount:t=0}={}){var i,o,r;const s=Object.assign({},e),{method:a,path:c,query:l,defaultBaseURL:f}=s,p=this.buildURL(c,l,f);"timeout"in s&&Cx("timeout",s.timeout),s.timeout=(i=s.timeout)!==null&&i!==void 0?i:this.timeout;const{bodyHeaders:h,body:m}=this.buildBody({options:s}),v=await this.buildHeaders({options:e,method:a,bodyHeaders:h,retryCount:t});return{req:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({method:a,headers:v},s.signal&&{signal:s.signal}),globalThis.ReadableStream&&m instanceof globalThis.ReadableStream&&{duplex:"half"}),m&&{body:m}),(o=this.fetchOptions)!==null&&o!==void 0?o:{}),(r=s.fetchOptions)!==null&&r!==void 0?r:{}),url:p,timeout:s.timeout}}async buildHeaders({options:e,method:t,bodyHeaders:i,retryCount:o}){let r={};this.idempotencyHeader&&t!=="get"&&(e.idempotencyKey||(e.idempotencyKey=this.defaultIdempotencyKey()),r[this.idempotencyHeader]=e.idempotencyKey);const s=await this.authHeaders(e);let a=Mo([r,{Accept:"application/json","User-Agent":this.getUserAgent()},this._options.defaultHeaders,i,e.headers,s]);return this.validateHeaders(a),a.values}_makeAbort(e){return()=>e.abort()}buildBody({options:{body:e,headers:t}}){if(!e)return{bodyHeaders:void 0,body:void 0};const i=Mo([t]);return ArrayBuffer.isView(e)||e instanceof ArrayBuffer||e instanceof DataView||typeof e=="string"&&i.values.has("content-type")||globalThis.Blob&&e instanceof globalThis.Blob||e instanceof FormData||e instanceof URLSearchParams||globalThis.ReadableStream&&e instanceof globalThis.ReadableStream?{bodyHeaders:void 0,body:e}:typeof e=="object"&&(Symbol.asyncIterator in e||Symbol.iterator in e&&"next"in e&&typeof e.next=="function")?{bodyHeaders:void 0,body:Rx(e)}:typeof e=="object"&&i.values.get("content-type")==="application/x-www-form-urlencoded"?{bodyHeaders:{"content-type":"application/x-www-form-urlencoded"},body:this.stringifyQuery(e)}:this.encoder({body:e,headers:i})}}us.DEFAULT_TIMEOUT=6e4;class Rt extends us{constructor(){super(...arguments),this.interactions=new ep(this)}}np=Rt;Rt.GeminiNextGenAPIClient=np;Rt.GeminiNextGenAPIClientError=tn;Rt.APIError=Ht;Rt.APIConnectionError=ls;Rt.APIConnectionTimeoutError=kh;Rt.APIUserAbortError=Ha;Rt.NotFoundError=Hh;Rt.ConflictError=zh;Rt.RateLimitError=qh;Rt.BadRequestError=Oh;Rt.AuthenticationError=Gh;Rt.InternalServerError=Xh;Rt.PermissionDeniedError=Vh;Rt.UnprocessableEntityError=Wh;Rt.toFile=kx;Rt.Interactions=ep;/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Kx(n,e){const t={},i=u(n,["name"]);return i!=null&&d(t,["_url","name"],i),t}function Zx(n,e){const t={},i=u(n,["name"]);return i!=null&&d(t,["_url","name"],i),t}function Qx(n,e){const t={},i=u(n,["sdkHttpResponse"]);return i!=null&&d(t,["sdkHttpResponse"],i),t}function jx(n,e){const t={},i=u(n,["sdkHttpResponse"]);return i!=null&&d(t,["sdkHttpResponse"],i),t}function eE(n,e,t){const i={};if(u(n,["validationDataset"])!==void 0)throw new Error("validationDataset parameter is not supported in Gemini API.");const o=u(n,["tunedModelDisplayName"]);if(e!==void 0&&o!=null&&d(e,["displayName"],o),u(n,["description"])!==void 0)throw new Error("description parameter is not supported in Gemini API.");const r=u(n,["epochCount"]);e!==void 0&&r!=null&&d(e,["tuningTask","hyperparameters","epochCount"],r);const s=u(n,["learningRateMultiplier"]);if(s!=null&&d(i,["tuningTask","hyperparameters","learningRateMultiplier"],s),u(n,["exportLastCheckpointOnly"])!==void 0)throw new Error("exportLastCheckpointOnly parameter is not supported in Gemini API.");if(u(n,["preTunedModelCheckpointId"])!==void 0)throw new Error("preTunedModelCheckpointId parameter is not supported in Gemini API.");if(u(n,["adapterSize"])!==void 0)throw new Error("adapterSize parameter is not supported in Gemini API.");if(u(n,["tuningMode"])!==void 0)throw new Error("tuningMode parameter is not supported in Gemini API.");if(u(n,["customBaseModel"])!==void 0)throw new Error("customBaseModel parameter is not supported in Gemini API.");const a=u(n,["batchSize"]);e!==void 0&&a!=null&&d(e,["tuningTask","hyperparameters","batchSize"],a);const c=u(n,["learningRate"]);if(e!==void 0&&c!=null&&d(e,["tuningTask","hyperparameters","learningRate"],c),u(n,["labels"])!==void 0)throw new Error("labels parameter is not supported in Gemini API.");if(u(n,["beta"])!==void 0)throw new Error("beta parameter is not supported in Gemini API.");if(u(n,["baseTeacherModel"])!==void 0)throw new Error("baseTeacherModel parameter is not supported in Gemini API.");if(u(n,["tunedTeacherModelSource"])!==void 0)throw new Error("tunedTeacherModelSource parameter is not supported in Gemini API.");if(u(n,["sftLossWeightMultiplier"])!==void 0)throw new Error("sftLossWeightMultiplier parameter is not supported in Gemini API.");if(u(n,["outputUri"])!==void 0)throw new Error("outputUri parameter is not supported in Gemini API.");if(u(n,["encryptionSpec"])!==void 0)throw new Error("encryptionSpec parameter is not supported in Gemini API.");return i}function tE(n,e,t){const i={};let o=u(t,["config","method"]);if(o===void 0&&(o="SUPERVISED_FINE_TUNING"),o==="SUPERVISED_FINE_TUNING"){const C=u(n,["validationDataset"]);e!==void 0&&C!=null&&d(e,["supervisedTuningSpec"],Es(C))}else if(o==="PREFERENCE_TUNING"){const C=u(n,["validationDataset"]);e!==void 0&&C!=null&&d(e,["preferenceOptimizationSpec"],Es(C))}else if(o==="DISTILLATION"){const C=u(n,["validationDataset"]);e!==void 0&&C!=null&&d(e,["distillationSpec"],Es(C))}const r=u(n,["tunedModelDisplayName"]);e!==void 0&&r!=null&&d(e,["tunedModelDisplayName"],r);const s=u(n,["description"]);e!==void 0&&s!=null&&d(e,["description"],s);let a=u(t,["config","method"]);if(a===void 0&&(a="SUPERVISED_FINE_TUNING"),a==="SUPERVISED_FINE_TUNING"){const C=u(n,["epochCount"]);e!==void 0&&C!=null&&d(e,["supervisedTuningSpec","hyperParameters","epochCount"],C)}else if(a==="PREFERENCE_TUNING"){const C=u(n,["epochCount"]);e!==void 0&&C!=null&&d(e,["preferenceOptimizationSpec","hyperParameters","epochCount"],C)}else if(a==="DISTILLATION"){const C=u(n,["epochCount"]);e!==void 0&&C!=null&&d(e,["distillationSpec","hyperParameters","epochCount"],C)}let c=u(t,["config","method"]);if(c===void 0&&(c="SUPERVISED_FINE_TUNING"),c==="SUPERVISED_FINE_TUNING"){const C=u(n,["learningRateMultiplier"]);e!==void 0&&C!=null&&d(e,["supervisedTuningSpec","hyperParameters","learningRateMultiplier"],C)}else if(c==="PREFERENCE_TUNING"){const C=u(n,["learningRateMultiplier"]);e!==void 0&&C!=null&&d(e,["preferenceOptimizationSpec","hyperParameters","learningRateMultiplier"],C)}else if(c==="DISTILLATION"){const C=u(n,["learningRateMultiplier"]);e!==void 0&&C!=null&&d(e,["distillationSpec","hyperParameters","learningRateMultiplier"],C)}let l=u(t,["config","method"]);if(l===void 0&&(l="SUPERVISED_FINE_TUNING"),l==="SUPERVISED_FINE_TUNING"){const C=u(n,["exportLastCheckpointOnly"]);e!==void 0&&C!=null&&d(e,["supervisedTuningSpec","exportLastCheckpointOnly"],C)}else if(l==="PREFERENCE_TUNING"){const C=u(n,["exportLastCheckpointOnly"]);e!==void 0&&C!=null&&d(e,["preferenceOptimizationSpec","exportLastCheckpointOnly"],C)}else if(l==="DISTILLATION"){const C=u(n,["exportLastCheckpointOnly"]);e!==void 0&&C!=null&&d(e,["distillationSpec","exportLastCheckpointOnly"],C)}let f=u(t,["config","method"]);if(f===void 0&&(f="SUPERVISED_FINE_TUNING"),f==="SUPERVISED_FINE_TUNING"){const C=u(n,["adapterSize"]);e!==void 0&&C!=null&&d(e,["supervisedTuningSpec","hyperParameters","adapterSize"],C)}else if(f==="PREFERENCE_TUNING"){const C=u(n,["adapterSize"]);e!==void 0&&C!=null&&d(e,["preferenceOptimizationSpec","hyperParameters","adapterSize"],C)}else if(f==="DISTILLATION"){const C=u(n,["adapterSize"]);e!==void 0&&C!=null&&d(e,["distillationSpec","hyperParameters","adapterSize"],C)}let p=u(t,["config","method"]);if(p===void 0&&(p="SUPERVISED_FINE_TUNING"),p==="SUPERVISED_FINE_TUNING"){const C=u(n,["tuningMode"]);e!==void 0&&C!=null&&d(e,["supervisedTuningSpec","tuningMode"],C)}const h=u(n,["customBaseModel"]);e!==void 0&&h!=null&&d(e,["customBaseModel"],h);let m=u(t,["config","method"]);if(m===void 0&&(m="SUPERVISED_FINE_TUNING"),m==="SUPERVISED_FINE_TUNING"){const C=u(n,["batchSize"]);e!==void 0&&C!=null&&d(e,["supervisedTuningSpec","hyperParameters","batchSize"],C)}let v=u(t,["config","method"]);if(v===void 0&&(v="SUPERVISED_FINE_TUNING"),v==="SUPERVISED_FINE_TUNING"){const C=u(n,["learningRate"]);e!==void 0&&C!=null&&d(e,["supervisedTuningSpec","hyperParameters","learningRate"],C)}const y=u(n,["labels"]);e!==void 0&&y!=null&&d(e,["labels"],y);const g=u(n,["beta"]);e!==void 0&&g!=null&&d(e,["preferenceOptimizationSpec","hyperParameters","beta"],g);const _=u(n,["baseTeacherModel"]);e!==void 0&&_!=null&&d(e,["distillationSpec","baseTeacherModel"],_);const E=u(n,["tunedTeacherModelSource"]);e!==void 0&&E!=null&&d(e,["distillationSpec","tunedTeacherModelSource"],E);const A=u(n,["sftLossWeightMultiplier"]);e!==void 0&&A!=null&&d(e,["distillationSpec","hyperParameters","sftLossWeightMultiplier"],A);const S=u(n,["outputUri"]);e!==void 0&&S!=null&&d(e,["outputUri"],S);const R=u(n,["encryptionSpec"]);return e!==void 0&&R!=null&&d(e,["encryptionSpec"],R),i}function nE(n,e){const t={},i=u(n,["baseModel"]);i!=null&&d(t,["baseModel"],i);const o=u(n,["preTunedModel"]);o!=null&&d(t,["preTunedModel"],o);const r=u(n,["trainingDataset"]);r!=null&&hE(r);const s=u(n,["config"]);return s!=null&&eE(s,t),t}function iE(n,e){const t={},i=u(n,["baseModel"]);i!=null&&d(t,["baseModel"],i);const o=u(n,["preTunedModel"]);o!=null&&d(t,["preTunedModel"],o);const r=u(n,["trainingDataset"]);r!=null&&pE(r,t,e);const s=u(n,["config"]);return s!=null&&tE(s,t,e),t}function oE(n,e){const t={},i=u(n,["name"]);return i!=null&&d(t,["_url","name"],i),t}function rE(n,e){const t={},i=u(n,["name"]);return i!=null&&d(t,["_url","name"],i),t}function sE(n,e,t){const i={},o=u(n,["pageSize"]);e!==void 0&&o!=null&&d(e,["_query","pageSize"],o);const r=u(n,["pageToken"]);e!==void 0&&r!=null&&d(e,["_query","pageToken"],r);const s=u(n,["filter"]);return e!==void 0&&s!=null&&d(e,["_query","filter"],s),i}function aE(n,e,t){const i={},o=u(n,["pageSize"]);e!==void 0&&o!=null&&d(e,["_query","pageSize"],o);const r=u(n,["pageToken"]);e!==void 0&&r!=null&&d(e,["_query","pageToken"],r);const s=u(n,["filter"]);return e!==void 0&&s!=null&&d(e,["_query","filter"],s),i}function lE(n,e){const t={},i=u(n,["config"]);return i!=null&&sE(i,t),t}function cE(n,e){const t={},i=u(n,["config"]);return i!=null&&aE(i,t),t}function uE(n,e){const t={},i=u(n,["sdkHttpResponse"]);i!=null&&d(t,["sdkHttpResponse"],i);const o=u(n,["nextPageToken"]);o!=null&&d(t,["nextPageToken"],o);const r=u(n,["tunedModels"]);if(r!=null){let s=r;Array.isArray(s)&&(s=s.map(a=>ip(a))),d(t,["tuningJobs"],s)}return t}function dE(n,e){const t={},i=u(n,["sdkHttpResponse"]);i!=null&&d(t,["sdkHttpResponse"],i);const o=u(n,["nextPageToken"]);o!=null&&d(t,["nextPageToken"],o);const r=u(n,["tuningJobs"]);if(r!=null){let s=r;Array.isArray(s)&&(s=s.map(a=>qa(a))),d(t,["tuningJobs"],s)}return t}function fE(n,e){const t={},i=u(n,["name"]);i!=null&&d(t,["model"],i);const o=u(n,["name"]);return o!=null&&d(t,["endpoint"],o),t}function hE(n,e){const t={};if(u(n,["gcsUri"])!==void 0)throw new Error("gcsUri parameter is not supported in Gemini API.");if(u(n,["vertexDatasetResource"])!==void 0)throw new Error("vertexDatasetResource parameter is not supported in Gemini API.");const i=u(n,["examples"]);if(i!=null){let o=i;Array.isArray(o)&&(o=o.map(r=>r)),d(t,["examples","examples"],o)}return t}function pE(n,e,t){const i={};let o=u(t,["config","method"]);if(o===void 0&&(o="SUPERVISED_FINE_TUNING"),o==="SUPERVISED_FINE_TUNING"){const s=u(n,["gcsUri"]);e!==void 0&&s!=null&&d(e,["supervisedTuningSpec","trainingDatasetUri"],s)}else if(o==="PREFERENCE_TUNING"){const s=u(n,["gcsUri"]);e!==void 0&&s!=null&&d(e,["preferenceOptimizationSpec","trainingDatasetUri"],s)}else if(o==="DISTILLATION"){const s=u(n,["gcsUri"]);e!==void 0&&s!=null&&d(e,["distillationSpec","promptDatasetUri"],s)}let r=u(t,["config","method"]);if(r===void 0&&(r="SUPERVISED_FINE_TUNING"),r==="SUPERVISED_FINE_TUNING"){const s=u(n,["vertexDatasetResource"]);e!==void 0&&s!=null&&d(e,["supervisedTuningSpec","trainingDatasetUri"],s)}else if(r==="PREFERENCE_TUNING"){const s=u(n,["vertexDatasetResource"]);e!==void 0&&s!=null&&d(e,["preferenceOptimizationSpec","trainingDatasetUri"],s)}else if(r==="DISTILLATION"){const s=u(n,["vertexDatasetResource"]);e!==void 0&&s!=null&&d(e,["distillationSpec","promptDatasetUri"],s)}if(u(n,["examples"])!==void 0)throw new Error("examples parameter is not supported in Vertex AI.");return i}function ip(n,e){const t={},i=u(n,["sdkHttpResponse"]);i!=null&&d(t,["sdkHttpResponse"],i);const o=u(n,["name"]);o!=null&&d(t,["name"],o);const r=u(n,["state"]);r!=null&&d(t,["state"],yh(r));const s=u(n,["createTime"]);s!=null&&d(t,["createTime"],s);const a=u(n,["tuningTask","startTime"]);a!=null&&d(t,["startTime"],a);const c=u(n,["tuningTask","completeTime"]);c!=null&&d(t,["endTime"],c);const l=u(n,["updateTime"]);l!=null&&d(t,["updateTime"],l);const f=u(n,["description"]);f!=null&&d(t,["description"],f);const p=u(n,["baseModel"]);p!=null&&d(t,["baseModel"],p);const h=u(n,["_self"]);return h!=null&&d(t,["tunedModel"],fE(h)),t}function qa(n,e){const t={},i=u(n,["sdkHttpResponse"]);i!=null&&d(t,["sdkHttpResponse"],i);const o=u(n,["name"]);o!=null&&d(t,["name"],o);const r=u(n,["state"]);r!=null&&d(t,["state"],yh(r));const s=u(n,["createTime"]);s!=null&&d(t,["createTime"],s);const a=u(n,["startTime"]);a!=null&&d(t,["startTime"],a);const c=u(n,["endTime"]);c!=null&&d(t,["endTime"],c);const l=u(n,["updateTime"]);l!=null&&d(t,["updateTime"],l);const f=u(n,["error"]);f!=null&&d(t,["error"],f);const p=u(n,["description"]);p!=null&&d(t,["description"],p);const h=u(n,["baseModel"]);h!=null&&d(t,["baseModel"],h);const m=u(n,["tunedModel"]);m!=null&&d(t,["tunedModel"],m);const v=u(n,["preTunedModel"]);v!=null&&d(t,["preTunedModel"],v);const y=u(n,["supervisedTuningSpec"]);y!=null&&d(t,["supervisedTuningSpec"],y);const g=u(n,["preferenceOptimizationSpec"]);g!=null&&d(t,["preferenceOptimizationSpec"],g);const _=u(n,["distillationSpec"]);_!=null&&d(t,["distillationSpec"],_);const E=u(n,["tuningDataStats"]);E!=null&&d(t,["tuningDataStats"],E);const A=u(n,["encryptionSpec"]);A!=null&&d(t,["encryptionSpec"],A);const S=u(n,["partnerModelTuningSpec"]);S!=null&&d(t,["partnerModelTuningSpec"],S);const R=u(n,["customBaseModel"]);R!=null&&d(t,["customBaseModel"],R);const C=u(n,["evaluateDatasetRuns"]);if(C!=null){let q=C;Array.isArray(q)&&(q=q.map(W=>W)),d(t,["evaluateDatasetRuns"],q)}const b=u(n,["experiment"]);b!=null&&d(t,["experiment"],b);const x=u(n,["fullFineTuningSpec"]);x!=null&&d(t,["fullFineTuningSpec"],x);const M=u(n,["labels"]);M!=null&&d(t,["labels"],M);const B=u(n,["outputUri"]);B!=null&&d(t,["outputUri"],B);const I=u(n,["pipelineJob"]);I!=null&&d(t,["pipelineJob"],I);const N=u(n,["serviceAccount"]);N!=null&&d(t,["serviceAccount"],N);const L=u(n,["tunedModelDisplayName"]);L!=null&&d(t,["tunedModelDisplayName"],L);const k=u(n,["tuningJobState"]);k!=null&&d(t,["tuningJobState"],k);const z=u(n,["veoTuningSpec"]);return z!=null&&d(t,["veoTuningSpec"],z),t}function mE(n,e){const t={},i=u(n,["sdkHttpResponse"]);i!=null&&d(t,["sdkHttpResponse"],i);const o=u(n,["name"]);o!=null&&d(t,["name"],o);const r=u(n,["metadata"]);r!=null&&d(t,["metadata"],r);const s=u(n,["done"]);s!=null&&d(t,["done"],s);const a=u(n,["error"]);return a!=null&&d(t,["error"],a),t}function Es(n,e){const t={},i=u(n,["gcsUri"]);i!=null&&d(t,["validationDatasetUri"],i);const o=u(n,["vertexDatasetResource"]);return o!=null&&d(t,["validationDatasetUri"],o),t}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class gE extends Xn{constructor(e){super(),this.apiClient=e,this.list=async(t={})=>new Ri(Hn.PAGED_ITEM_TUNING_JOBS,i=>this.listInternal(i),await this.listInternal(t),t),this.get=async t=>await this.getInternal(t),this.tune=async t=>{var i;if(this.apiClient.isVertexAI())if(t.baseModel.startsWith("projects/")){const o={tunedModelName:t.baseModel};!((i=t.config)===null||i===void 0)&&i.preTunedModelCheckpointId&&(o.checkpointId=t.config.preTunedModelCheckpointId);const r=Object.assign(Object.assign({},t),{preTunedModel:o});return r.baseModel=void 0,await this.tuneInternal(r)}else{const o=Object.assign({},t);return await this.tuneInternal(o)}else{const o=Object.assign({},t),r=await this.tuneMldevInternal(o);let s="";return r.metadata!==void 0&&r.metadata.tunedModel!==void 0?s=r.metadata.tunedModel:r.name!==void 0&&r.name.includes("/operations/")&&(s=r.name.split("/operations/")[0]),{name:s,state:Da.JOB_STATE_QUEUED}}}}async getInternal(e){var t,i,o,r;let s,a="",c={};if(this.apiClient.isVertexAI()){const l=rE(e);return a=me("{name}",l._url),c=l._query,delete l._url,delete l._query,s=this.apiClient.request({path:a,queryParams:c,body:JSON.stringify(l),httpMethod:"GET",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json().then(p=>{const h=p;return h.sdkHttpResponse={headers:f.headers},h})),s.then(f=>qa(f))}else{const l=oE(e);return a=me("{name}",l._url),c=l._query,delete l._url,delete l._query,s=this.apiClient.request({path:a,queryParams:c,body:JSON.stringify(l),httpMethod:"GET",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(f=>f.json().then(p=>{const h=p;return h.sdkHttpResponse={headers:f.headers},h})),s.then(f=>ip(f))}}async listInternal(e){var t,i,o,r;let s,a="",c={};if(this.apiClient.isVertexAI()){const l=cE(e);return a=me("tuningJobs",l._url),c=l._query,delete l._url,delete l._query,s=this.apiClient.request({path:a,queryParams:c,body:JSON.stringify(l),httpMethod:"GET",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json().then(p=>{const h=p;return h.sdkHttpResponse={headers:f.headers},h})),s.then(f=>{const p=dE(f),h=new ju;return Object.assign(h,p),h})}else{const l=lE(e);return a=me("tunedModels",l._url),c=l._query,delete l._url,delete l._query,s=this.apiClient.request({path:a,queryParams:c,body:JSON.stringify(l),httpMethod:"GET",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(f=>f.json().then(p=>{const h=p;return h.sdkHttpResponse={headers:f.headers},h})),s.then(f=>{const p=uE(f),h=new ju;return Object.assign(h,p),h})}}async cancel(e){var t,i,o,r;let s,a="",c={};if(this.apiClient.isVertexAI()){const l=Zx(e);return a=me("{name}:cancel",l._url),c=l._query,delete l._url,delete l._query,s=this.apiClient.request({path:a,queryParams:c,body:JSON.stringify(l),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json().then(p=>{const h=p;return h.sdkHttpResponse={headers:f.headers},h})),s.then(f=>{const p=jx(f),h=new ed;return Object.assign(h,p),h})}else{const l=Kx(e);return a=me("{name}:cancel",l._url),c=l._query,delete l._url,delete l._query,s=this.apiClient.request({path:a,queryParams:c,body:JSON.stringify(l),httpMethod:"POST",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(f=>f.json().then(p=>{const h=p;return h.sdkHttpResponse={headers:f.headers},h})),s.then(f=>{const p=Qx(f),h=new ed;return Object.assign(h,p),h})}}async tuneInternal(e){var t,i;let o,r="",s={};if(this.apiClient.isVertexAI()){const a=iE(e,e);return r=me("tuningJobs",a._url),s=a._query,delete a._url,delete a._query,o=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(a),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(c=>c.json().then(l=>{const f=l;return f.sdkHttpResponse={headers:c.headers},f})),o.then(c=>qa(c))}else throw new Error("This method is only supported by the Vertex AI.")}async tuneMldevInternal(e){var t,i;let o,r="",s={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const a=nE(e);return r=me("tunedModels",a._url),s=a._query,delete a._url,delete a._query,o=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(a),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(c=>c.json().then(l=>{const f=l;return f.sdkHttpResponse={headers:c.headers},f})),o.then(c=>mE(c))}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class _E{async download(e,t){throw new Error("Download to file is not supported in the browser, please use a browser compliant download like an <a> tag.")}}const vE=1024*1024*8,yE=3,xE=1e3,EE=2,Zr="x-goog-upload-status";async function SE(n,e,t){var i;const o=await op(n,e,t),r=await(o==null?void 0:o.json());if(((i=o==null?void 0:o.headers)===null||i===void 0?void 0:i[Zr])!=="final")throw new Error("Failed to upload file: Upload status is not finalized.");return r.file}async function TE(n,e,t){var i;const o=await op(n,e,t),r=await(o==null?void 0:o.json());if(((i=o==null?void 0:o.headers)===null||i===void 0?void 0:i[Zr])!=="final")throw new Error("Failed to upload file: Upload status is not finalized.");const s=hh(r),a=new $l;return Object.assign(a,s),a}async function op(n,e,t){var i,o;let r=0,s=0,a=new La(new Response),c="upload";for(r=n.size;s<r;){const l=Math.min(vE,r-s),f=n.slice(s,s+l);s+l>=r&&(c+=", finalize");let p=0,h=xE;for(;p<yE&&(a=await t.request({path:"",body:f,httpMethod:"POST",httpOptions:{apiVersion:"",baseUrl:e,headers:{"X-Goog-Upload-Command":c,"X-Goog-Upload-Offset":String(s),"Content-Length":String(l)}}}),!(!((i=a==null?void 0:a.headers)===null||i===void 0)&&i[Zr]));)p++,await AE(h),h=h*EE;if(s+=l,((o=a==null?void 0:a.headers)===null||o===void 0?void 0:o[Zr])!=="active")break;if(r<=s)throw new Error("All content has been uploaded, but the upload status is not finalized.")}return a}async function ME(n){return{size:n.size,type:n.type}}function AE(n){return new Promise(e=>setTimeout(e,n))}class CE{async upload(e,t,i){if(typeof e=="string")throw new Error("File path is not supported in browser uploader.");return await SE(e,t,i)}async uploadToFileSearchStore(e,t,i){if(typeof e=="string")throw new Error("File path is not supported in browser uploader.");return await TE(e,t,i)}async stat(e){if(typeof e=="string")throw new Error("File path is not supported in browser uploader.");return await ME(e)}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class wE{create(e,t,i){return new bE(e,t,i)}}class bE{constructor(e,t,i){this.url=e,this.headers=t,this.callbacks=i}connect(){this.ws=new WebSocket(this.url),this.ws.onopen=this.callbacks.onopen,this.ws.onerror=this.callbacks.onerror,this.ws.onclose=this.callbacks.onclose,this.ws.onmessage=this.callbacks.onmessage}send(e){if(this.ws===void 0)throw new Error("WebSocket is not connected");this.ws.send(e)}close(){if(this.ws===void 0)throw new Error("WebSocket is not connected");this.ws.close()}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Ad="x-goog-api-key";class IE{constructor(e){this.apiKey=e}async addAuthHeaders(e,t){if(e.get(Ad)===null){if(this.apiKey.startsWith("auth_tokens/"))throw new Error("Ephemeral tokens are only supported by the live API.");if(!this.apiKey)throw new Error("API key is missing. Please provide a valid API key.");e.append(Ad,this.apiKey)}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const RE="gl-node/";class nc{get interactions(){var e;if(this._interactions!==void 0)return this._interactions;console.warn("GoogleGenAI.interactions: Interactions usage is experimental and may change in future versions.");const t=this.httpOptions;t!=null&&t.extraBody&&console.warn("GoogleGenAI.interactions: Client level httpOptions.extraBody is not supported by the interactions client and will be ignored.");const i=new Rt({baseURL:this.apiClient.getBaseUrl(),apiKey:this.apiKey,apiVersion:this.apiClient.getApiVersion(),clientAdapter:this.apiClient,defaultHeaders:this.apiClient.getDefaultHeaders(),timeout:t==null?void 0:t.timeout,maxRetries:(e=t==null?void 0:t.retryOptions)===null||e===void 0?void 0:e.attempts});return this._interactions=i.interactions,this._interactions}constructor(e){var t;if(e.apiKey==null)throw new Error("An API Key must be set when running in a browser");if(e.project||e.location)throw new Error("Vertex AI project based authentication is not supported on browser runtimes. Please do not provide a project or location.");this.vertexai=(t=e.vertexai)!==null&&t!==void 0?t:!1,this.apiKey=e.apiKey;const i=_m(e.httpOptions,e.vertexai,void 0,void 0);i&&(e.httpOptions?e.httpOptions.baseUrl=i:e.httpOptions={baseUrl:i}),this.apiVersion=e.apiVersion,this.httpOptions=e.httpOptions;const o=new IE(this.apiKey);this.apiClient=new wy({auth:o,apiVersion:this.apiVersion,apiKey:this.apiKey,vertexai:this.vertexai,httpOptions:this.httpOptions,userAgentExtra:RE+"web",uploader:new CE,downloader:new _E}),this.models=new Xy(this.apiClient),this.live=new Gy(this.apiClient,o,new wE),this.batches=new Jg(this.apiClient),this.chats=new P0(this.models,this.apiClient),this.caches=new b0(this.apiClient),this.files=new z0(this.apiClient),this.operations=new Yy(this.apiClient),this.authTokens=new ux(this.apiClient),this.tunings=new gE(this.apiClient),this.fileSearchStores=new vx(this.apiClient)}}function PE(n){n.innerHTML=`
    <div class="glass-card-strong ai-tool-card" id="gift-finder-card">
      <div class="ai-tool-header">
        <span class="ai-tool-icon">🎁</span>
        <div>
          <h3 class="ai-tool-title">Gift Finder AI</h3>
          <p class="ai-tool-subtitle">Find the perfect present in seconds</p>
        </div>
      </div>

      <div class="ai-tool-form">
        <div class="ai-tool-row">
          <div class="ai-tool-field">
            <label>Age</label>
            <input type="number" id="gift-age" class="form-input" placeholder="e.g. 21" min="1" max="120" />
          </div>
          <div class="ai-tool-field">
            <label>Gender</label>
            <select id="gift-gender" class="form-input">
              <option value="any">Any</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
        <div class="ai-tool-field">
          <label>Interests</label>
          <input type="text" id="gift-interests" class="form-input" placeholder="e.g. cooking, gaming, music" />
        </div>

        <div class="ai-tool-apikey" id="gift-apikey-section">
          <label>Gemini API Key</label>
          <input type="password" id="gift-apikey" class="form-input" placeholder="Enter your API key" 
            value="${localStorage.getItem("gemini_api_key")||""}" />
          <p style="font-size:0.6875rem; color:var(--text-muted); margin-top:4px;">
            Get free key at <a href="https://aistudio.google.com/app/apikey" target="_blank" style="color:var(--accent-1);">Google AI Studio</a>
          </p>
        </div>

        <button class="btn btn-primary" id="gift-generate" style="width:100%;">
          🎁 Get Gift Ideas
        </button>
      </div>

      <div id="gift-results" style="display:none;"></div>
    </div>
  `,document.getElementById("gift-generate").addEventListener("click",async()=>{const e=document.getElementById("gift-age").value,t=document.getElementById("gift-gender").value,i=document.getElementById("gift-interests").value.trim(),o=document.getElementById("gift-apikey").value.trim();if(!e||!i){alert("Please fill in age and interests!");return}if(!o){alert("Please enter your Gemini API key!");return}localStorage.setItem("gemini_api_key",o);const r=document.getElementById("gift-generate"),s=document.getElementById("gift-results");r.disabled=!0,r.textContent="⏳ Finding gifts...",s.style.display="none";try{const a=new nc({apiKey:o}),c=`You are a creative gift advisor. Suggest exactly 5 unique, thoughtful birthday gift ideas for a ${e}-year-old ${t!=="any"?t:"person"} who is interested in: ${i}.

For each gift, provide:
- A creative name (bold title)
- A 1-2 sentence description explaining why it's perfect

Format each gift as:
🎁 **Gift Name**
Description here.

Make gifts creative, specific, and memorable — not generic. Range from affordable to premium.`,f=(await a.models.generateContent({model:"gemini-2.0-flash",contents:c})).text||"";s.innerHTML=`
        <div class="ai-results-list">
          ${DE(f)}
        </div>
        <button class="btn btn-secondary" id="gift-regenerate" style="width:100%; margin-top:12px; font-size:0.8125rem;">
          🔄 Get More Ideas
        </button>
      `,s.style.display="block",document.getElementById("gift-regenerate").addEventListener("click",()=>{document.getElementById("gift-generate").click()})}catch(a){s.innerHTML=`<div class="ai-error">❌ ${a.message||"Failed to generate. Check your API key."}</div>`,s.style.display="block"}r.disabled=!1,r.textContent="🎁 Get Gift Ideas"})}function DE(n){const e=n.split(`
`).filter(o=>o.trim());let t="",i="";for(const o of e)o.includes("🎁")||o.match(/^\d+\./)?(i&&(t+=`<div class="gift-item glass-card">${i}</div>`),i=`<div class="gift-name">${o.replace(/\*\*/g,"").replace(/🎁\s*/,"🎁 ")}</div>`):o.trim()&&(i+=`<p class="gift-desc">${o.replace(/\*\*/g,"")}</p>`);return i&&(t+=`<div class="gift-item glass-card">${i}</div>`),t||`<div class="gift-item glass-card"><p>${n}</p></div>`}const Cd=[{id:"heartwarming",label:"Heartwarming",emoji:"💖"},{id:"funny",label:"Funny",emoji:"😂"},{id:"poetic",label:"Poetic",emoji:"📝"},{id:"short",label:"Short & Sweet",emoji:"✨"},{id:"formal",label:"Formal",emoji:"🎩"}];function NE(n){n.innerHTML=`
    <div class="glass-card-strong ai-tool-card" id="card-writer-card">
      <div class="ai-tool-header">
        <span class="ai-tool-icon">✍️</span>
        <div>
          <h3 class="ai-tool-title">Card Writer AI</h3>
          <p class="ai-tool-subtitle">Perfect words for every birthday</p>
        </div>
      </div>

      <div class="ai-tool-form">
        <div class="ai-tool-row">
          <div class="ai-tool-field">
            <label>Recipient Name</label>
            <input type="text" id="card-name" class="form-input" placeholder="e.g. Sarah" />
          </div>
          <div class="ai-tool-field">
            <label>Relationship</label>
            <select id="card-relationship" class="form-input">
              <option value="friend">Friend</option>
              <option value="brother">Brother</option>
              <option value="sister">Sister</option>
              <option value="mother">Mother</option>
              <option value="father">Father</option>
              <option value="girlfriend">Girlfriend</option>
              <option value="boyfriend">Boyfriend</option>
              <option value="colleague">Colleague</option>
              <option value="boss">Boss</option>
            </select>
          </div>
        </div>

        <div class="ai-tool-field">
          <label>Tone</label>
          <div class="tone-selector" id="tone-selector">
            ${Cd.map(t=>`
              <button type="button" class="tone-btn ${t.id==="heartwarming"?"active":""}" data-tone="${t.id}">
                ${t.emoji} ${t.label}
              </button>
            `).join("")}
          </div>
        </div>

        <div class="ai-tool-apikey" id="card-apikey-section">
          <label>Gemini API Key</label>
          <input type="password" id="card-apikey" class="form-input" placeholder="Enter your API key"
            value="${localStorage.getItem("gemini_api_key")||""}" />
        </div>

        <button class="btn btn-primary" id="card-generate" style="width:100%;">
          ✍️ Write Birthday Card
        </button>
      </div>

      <div id="card-results" style="display:none;"></div>
    </div>
  `;let e="heartwarming";document.getElementById("tone-selector").addEventListener("click",t=>{const i=t.target.closest(".tone-btn");i&&(document.querySelectorAll(".tone-btn").forEach(o=>o.classList.remove("active")),i.classList.add("active"),e=i.dataset.tone)}),document.getElementById("card-generate").addEventListener("click",async()=>{var a;const t=document.getElementById("card-name").value.trim(),i=document.getElementById("card-relationship").value,o=document.getElementById("card-apikey").value.trim();if(!t){alert("Please enter a name!");return}if(!o){alert("Please enter your Gemini API key!");return}localStorage.setItem("gemini_api_key",o);const r=document.getElementById("card-generate"),s=document.getElementById("card-results");r.disabled=!0,r.textContent="⏳ Writing...",s.style.display="none";try{const c=new nc({apiKey:o}),l=((a=Cd.find(m=>m.id===e))==null?void 0:a.label)||"Heartwarming",f=`Write a beautiful birthday card message for someone named "${t}" who is my ${i}.

Tone: ${l}

Requirements:
- If heartwarming: emotional, touching, mention memories and love
- If funny: witty, include a lighthearted joke, keep it warm
- If poetic: use metaphors, rhythm, may rhyme
- If short & sweet: 2-3 sentences max, impactful
- If formal: professional but warm, respectful

Write ONLY the card message, nothing else. No quotes around it. Start with "Dear ${t}," and end with a warm closing.`,h=(await c.models.generateContent({model:"gemini-2.0-flash",contents:f})).text||"";s.innerHTML=`
        <div class="card-result glass-card">
          <div class="card-result-text">${h.replace(/\n/g,"<br>")}</div>
          <div class="card-result-actions">
            <button class="btn btn-secondary" id="card-copy" style="flex:1;">📋 Copy</button>
            <button class="btn btn-secondary" id="card-share" style="flex:1;">✈️ Share</button>
          </div>
        </div>
        <button class="btn btn-secondary" id="card-regenerate" style="width:100%; margin-top:8px; font-size:0.8125rem;">
          🔄 Write Another Version
        </button>
      `,s.style.display="block",document.getElementById("card-copy").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(h),document.getElementById("card-copy").textContent="✓ Copied!",setTimeout(()=>document.getElementById("card-copy").textContent="📋 Copy",2e3)}catch{}}),document.getElementById("card-share").addEventListener("click",()=>{const m=encodeURIComponent(h);window.open(`https://t.me/share/url?url=&text=${m}`,"_blank")}),document.getElementById("card-regenerate").addEventListener("click",()=>{document.getElementById("card-generate").click()})}catch(c){s.innerHTML=`<div class="ai-error">❌ ${c.message||"Failed to generate."}</div>`,s.style.display="block"}r.disabled=!1,r.textContent="✍️ Write Birthday Card"})}const ir=["The most common birthday in the world is September 9th. Statistically, more people are born in September than any other month!","The tradition of birthday candles started in Ancient Greece. People lit candles on cakes to make them glow like the moon as an offering to Artemis.",'The "Happy Birthday" song was originally titled "Good Morning to All" and was written by two sisters in 1893.',"The world's largest birthday cake weighed 128,238 pounds — about the weight of 8 school buses!","In some cultures, pulling earlobes on birthdays brings good luck. One pull for each year of life!","Shakespeare was born and died on the same date: April 23rd.","The odds of being born on February 29th (Leap Day) are about 1 in 1,461.","Queen Elizabeth II had two birthdays — her actual birthday on April 21st and an official celebration in June.","In Germany, it's considered bad luck to wish someone happy birthday before the actual date.","The most expensive birthday party ever cost $27.2 million — thrown by the Sultan of Brunei.","Babies born on holidays like Christmas or New Year's are statistically rarer due to fewer scheduled deliveries.","The Aztecs didn't celebrate birthdays at all — age was based on the calendar cycle rather than individual birth dates.","In South Korea, everyone turns one year older on New Year's Day, not their actual birthday!","The first known birthday card was sent in 1842 — a hand-painted design for a child's birthday.","On average, about 385,000 babies are born every single day worldwide — that's about 4.5 births per second!"];function LE(n){let e=Math.floor(Math.random()*ir.length);const t=document.createElement("div");t.className="glass-card birthday-fact-card",t.innerHTML=`
    <div class="fact-icon">💡</div>
    <div class="fact-label">Birthday Fact</div>
    <div class="fact-text" id="fact-text">
      Did you know? ${ir[e]}
    </div>
    <button class="fact-next" id="fact-next" title="Next fact">→</button>
  `,n.appendChild(t);const i=t.querySelector("#fact-next"),o=t.querySelector("#fact-text");i.addEventListener("click",()=>{e=(e+1)%ir.length,o.style.opacity="0",o.style.transform="translateY(10px)",setTimeout(()=>{o.textContent=`Did you know? ${ir[e]}`,o.style.opacity="1",o.style.transform="translateY(0)"},200)});const r=setInterval(()=>{document.contains(t)?i.click():clearInterval(r)},15e3);return{destroy:()=>clearInterval(r)}}function UE(n){n.innerHTML=`
    <div class="landing-page">
      <div class="bg-particles" id="landing-particles"></div>

      <!-- Hero Section -->
      <section class="landing-hero">
        <div class="landing-badge">
          <span class="dot"></span>
          <span>AI-Powered Birthday Hub</span>
        </div>

        <h1 class="landing-title">
          It's <span class="text-gradient">Celebration</span> Time!
        </h1>
        <h2 class="landing-title-sub">
          Make Every Birthday <span class="text-gradient">Unforgettable</span>.
        </h2>

        <p class="landing-subtitle">
          The ultimate AI-powered hub for planning, gifting, and celebrating 
          the people you love.
        </p>

        <div class="landing-cta-group">
          <button class="btn btn-primary" id="cta-create" style="font-size:1.0625rem; padding: 16px 40px;">
            ✨ Start Planning
          </button>
          <button class="btn btn-secondary btn-celebrate" id="cta-celebrate">
            🎉 Celebrate Now
          </button>
        </div>

        <!-- Floating decorations -->
        <div class="floating-heart" style="top:15%; left:10%; animation-delay:0s; font-size:1.5rem;">💖</div>
        <div class="floating-heart" style="top:20%; right:12%; animation-delay:1s; font-size:1.2rem;">✨</div>
        <div class="floating-heart" style="top:60%; left:8%;  animation-delay:2s; font-size:1.8rem;">🎂</div>
        <div class="floating-heart" style="top:70%; right:10%; animation-delay:0.5s; font-size:1.4rem;">🎈</div>
        <div class="floating-heart" style="top:40%; left:5%;  animation-delay:1.5s; font-size:1rem;">🎉</div>
        <div class="floating-heart" style="top:35%; right:6%; animation-delay:2.5s; font-size:1.3rem;">🎁</div>
      </section>

      <!-- Features Section -->
      <section class="landing-features">
        <div class="container">
          <h2 class="landing-features-title">
            Everything You Need to <span class="text-gradient">Celebrate</span>
          </h2>

          <div class="features-grid">
            <div class="glass-card feature-card page-enter" style="animation-delay: 0.1s;">
              <div class="feature-icon">💝</div>
              <h3 class="feature-title">Heart Photo Collage</h3>
              <p class="feature-desc">Upload photos and watch them arrange into a beautiful heart shape with 5 unique styles.</p>
            </div>

            <div class="glass-card feature-card page-enter" style="animation-delay: 0.2s;">
              <div class="feature-icon">🎆</div>
              <h3 class="feature-title">Interactive Fireworks</h3>
              <p class="feature-desc">5 firework styles — tap anywhere to launch explosions with heart, star, and rainbow effects.</p>
            </div>

            <div class="glass-card feature-card page-enter" style="animation-delay: 0.3s;">
              <div class="feature-icon">🌌</div>
              <h3 class="feature-title">3D Memory Galaxy</h3>
              <p class="feature-desc">Explore your memories as planets in a Three.js 3D space universe with WASD flight controls.</p>
            </div>

            <div class="glass-card feature-card page-enter" style="animation-delay: 0.4s;">
              <div class="feature-icon">🎁</div>
              <h3 class="feature-title">Gift Finder AI</h3>
              <p class="feature-desc">Enter age and interests — AI finds 5 perfect, creative gift ideas instantly.</p>
            </div>

            <div class="glass-card feature-card page-enter" style="animation-delay: 0.5s;">
              <div class="feature-icon">✍️</div>
              <h3 class="feature-title">Card Writer AI</h3>
              <p class="feature-desc">Generate heartwarming, funny, or poetic birthday card messages with AI.</p>
            </div>

            <div class="glass-card feature-card page-enter" style="animation-delay: 0.6s;">
              <div class="feature-icon">📱</div>
              <h3 class="feature-title">QR & Telegram Bot</h3>
              <p class="feature-desc">Share via QR codes, Telegram bot, or WhatsApp — create birthdays right from chat.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- AI Tools Section -->
      <section class="landing-ai-tools">
        <div class="container">
          <h2 class="landing-features-title">
            AI-Powered <span class="text-gradient">Birthday Tools</span> 🤖
          </h2>
          <p style="color: var(--text-secondary); max-width: 480px; margin: 0 auto var(--space-xl); text-align:center;">
            Powered by Google Gemini AI — find gifts, write cards, and discover fun birthday facts.
          </p>

          <div class="ai-tools-grid">
            <div id="gift-finder-mount"></div>
            <div id="card-writer-mount"></div>
          </div>

          <div id="birthday-fact-mount" style="max-width: 600px; margin: var(--space-xl) auto 0;"></div>
        </div>
      </section>

      <!-- Preview Section -->
      <section class="landing-preview">
        <div class="container">
          <h2 class="landing-features-title">
            See the <span class="text-gradient">Magic</span> ✨
          </h2>
          <p style="color: var(--text-secondary); max-width: 480px; margin: 0 auto var(--space-xl);">
            Every birthday page is a unique, animated experience.
          </p>

          <div class="preview-mockup glass-card-strong" id="preview-mockup">
            <div style="text-align:center; padding: 40px 20px;">
              <div style="font-size: 4rem; margin-bottom: 16px; animation: heartbeat 1.5s ease infinite;">🎂</div>
              <h3 class="text-gradient font-script" style="font-size: 2rem; margin-bottom: 12px;">Happy Birthday!</h3>
              <p style="color: var(--text-secondary); font-size: 0.9375rem;">
                A stunning celebration awaits...<br/>
                with fireworks, photos & love 💕
              </p>
              <div style="margin-top: 24px; display: flex; gap: 12px; justify-content: center;">
                <div class="glass-card" style="padding: 12px 16px; font-size: 1.5rem; font-weight: 700;">00</div>
                <div style="font-size: 1.5rem; color: var(--text-muted); padding-top: 12px;">:</div>
                <div class="glass-card" style="padding: 12px 16px; font-size: 1.5rem; font-weight: 700;">30</div>
                <div style="font-size: 1.5rem; color: var(--text-muted); padding-top: 12px;">:</div>
                <div class="glass-card" style="padding: 12px 16px; font-size: 1.5rem; font-weight: 700;">00</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Footer -->
      <section style="padding: var(--space-3xl) 0; text-align: center; position: relative; z-index: 1;">
        <div class="container">
          <h2 style="font-size: clamp(1.5rem, 4vw, 2.25rem); margin-bottom: var(--space-lg);">
            Ready to Create <span class="text-gradient">Something Special</span>?
          </h2>
          <button class="btn btn-primary" id="cta-create-bottom" style="font-size: 1.0625rem; padding: 16px 40px;">
            ✨ Start Creating Now
          </button>
        </div>
      </section>

      <!-- Footer -->
      <footer class="landing-footer">
        <div class="container">
          <p>Made with 💖 — AI Birthday Wish Generator</p>
        </div>
      </footer>
    </div>
  `,document.getElementById("cta-create").addEventListener("click",()=>{window.location.hash="#/create"}),document.getElementById("cta-create-bottom").addEventListener("click",()=>{window.location.hash="#/create"}),document.getElementById("cta-celebrate").addEventListener("click",()=>{FE()});const e=3*1e3,t=Date.now()+e,i={startVelocity:30,spread:360,ticks:60,zIndex:0},o=(l,f)=>Math.random()*(f-l)+l,r=setInterval(()=>{const l=t-Date.now();if(l<=0)return clearInterval(r);const f=50*(l/e);Ra({...i,particleCount:f,origin:{x:o(.1,.3),y:Math.random()-.2}}),Ra({...i,particleCount:f,origin:{x:o(.7,.9),y:Math.random()-.2}})},250);fo.injectStyles();const s=document.getElementById("landing-particles"),a=new fo(s,{count:20,types:["heart","sparkle","circle"]});a.start(),PE(document.getElementById("gift-finder-mount")),NE(document.getElementById("card-writer-mount"));const c=LE(document.getElementById("birthday-fact-mount"));return{destroy:()=>{a.stop(),clearInterval(r),c!=null&&c.destroy&&c.destroy()}}}function FE(){Ra({particleCount:150,spread:70,origin:{y:.6},colors:["#FF69B4","#FFD700","#00CED1","#9370DB","#FF2D75","#7B2FF7"]})}const Oo={romantic:{id:"romantic",name:"Romantic",emoji:"💕",dataTheme:"",swatch:"linear-gradient(135deg, #ff2d75, #7b2ff7)",particleColors:["#ff2d75","#7b2ff7","#ff6b9d","#c44dff","#ff9ec4"],balloonColors:["🎈","💖","🩷","💜"]},friends:{id:"friends",name:"Friends Party",emoji:"🎉",dataTheme:"friends",swatch:"linear-gradient(135deg, #00d4ff, #7b2ff7)",particleColors:["#00d4ff","#7b2ff7","#00ff88","#ff6b9d","#ffd700"],balloonColors:["🎈","🟢","🔵","🟡"]},royal:{id:"royal",name:"Royal Gold",emoji:"👑",dataTheme:"royal",swatch:"linear-gradient(135deg, #ffd700, #ff8c00)",particleColors:["#ffd700","#ff8c00","#ffe066","#fff5cc","#b8860b"],balloonColors:["🎈","✨","⭐","🌟"]},cute:{id:"cute",name:"Cute Hearts",emoji:"🩷",dataTheme:"cute",swatch:"linear-gradient(135deg, #ff8fab, #ffc2d1)",particleColors:["#ff8fab","#ffc2d1","#ffb3c6","#ffd6e0","#ff69b4"],balloonColors:["🎈","🩷","💗","🌸"]},minimal:{id:"minimal",name:"Minimal Elegant",emoji:"🤍",dataTheme:"minimal",swatch:"linear-gradient(135deg, #e0e0e0, #a0a0a0)",particleColors:["#e0e0e0","#a0a0a0","#c0c0c0","#ffffff","#808080"],balloonColors:["🎈","🤍","🖤","⬜"]}};function ic(n){const e=Oo[n]||Oo.romantic;return e.dataTheme?document.documentElement.setAttribute("data-theme",e.dataTheme):document.documentElement.removeAttribute("data-theme"),e}function rp(n){return Oo[n]||Oo.romantic}const Ss={emotional:{friend:["On this special day, I want you to know how much your friendship means to me. You make the world brighter just by being in it. Happy Birthday, {name}! 🌟","Dear {name}, birthdays come and go, but the memories we've shared will last forever. Here's to another year of laughter and love. Happy Birthday! 💫","{name}, you are one of the most beautiful souls I've ever known. May your birthday be as wonderful as the joy you bring to everyone around you. 🎂","Happy Birthday, {name}! Thank you for being the incredible person you are. Your presence in my life is a gift I cherish every single day. ❤️","To the amazing {name} — may your birthday bring you all the happiness you deserve. You've made my world a better place. 🌈"],brother:["Happy Birthday to the best brother anyone could ask for! {name}, you are my rock, my hero, and my forever friend. Love you always! 💪❤️","Dear {name}, growing up with you has been life's greatest adventure. May this birthday bring you endless joy and all your dreams come true. 🌟","{name}, not just a brother but a best friend. Happy Birthday! Thank you for always being there. You mean the world to me. 🎉"],sister:["Happy Birthday to my beautiful sister {name}! You are my strength, my confidant, and my constant source of inspiration. Love you endlessly! 💖","Dear {name}, having you as my sister is the greatest blessing. May your birthday be filled with love, laughter, and sparkle! ✨🎂","{name}, you're not just my sister — you're my soulmate. Happy Birthday! Here's to another year of making beautiful memories together. 🌸"],girlfriend:["Happy Birthday to the love of my life, {name}! Every moment with you feels like a dream. May this year bring us even closer together. 💕","My dearest {name}, you make my heart skip a beat every single day. On your special day, I want you to know — you are my everything. Happy Birthday, my love! 🥰","{name}, your smile lights up my world. Happy Birthday, beautiful! I promise to make every day of your life as special as you are. 💝"],boyfriend:["Happy Birthday to the one who holds my heart, {name}! You make every day worth living. Here's to celebrating you today and always. 💙","My dearest {name}, you are my safe place and my greatest adventure. Happy Birthday, handsome! I love you more than words can say. 💫"],default:["Happy Birthday, {name}! May your special day be filled with love, laughter, and unforgettable memories. You deserve all the happiness in the world! 🎂✨","Wishing you the most magical birthday, {name}! May all your dreams come true and this year be your best one yet. 🌟❤️","Happy Birthday, dear {name}! May your life be filled with happiness, love, and unforgettable memories. Here's to celebrating you! 🎉💖"]},funny:{friend:["Happy Birthday, {name}! You're not old, you're just... vintage! Like fine wine, you just keep getting better (and more expensive to maintain 😂). 🎂🍷","Hey {name}, Happy Birthday! Don't worry about getting older — you still look almost as good as your Instagram filters! 😜🎉","{name}, Happy Birthday! They say age is just a number, but in your case, it's a really big number! Just kidding, love you! 😄🎈"],default:["Happy Birthday, {name}! You're not getting older, you're leveling up! 🎮🎂 Time to unlock new achievements this year!","Hey {name}, Happy Birthday! At this point, your birthday cake is more of a fire hazard than a dessert! 🔥🎂😂"]},romantic:{girlfriend:["To my beautiful {name} — you are the poetry my heart writes every day. Happy Birthday to the woman who makes my world complete. I love you beyond words. 🌹💕","Happy Birthday, my love {name}. If I could give you one thing, it would be the ability to see yourself through my eyes. Then you'd know how truly special you are. 💝🌙"],boyfriend:["Happy Birthday to my king, {name}! You are the melody in my song and the beat in my heart. I love you more with every passing moment. 👑💙","My darling {name}, Happy Birthday! You're not just my boyfriend — you're my soulmate, my best friend, and my forever. 💫❤️"],default:["Happy Birthday, {name}! May your day be as beautiful as the love that surrounds you. You are cherished, adored, and loved beyond measure. 💕🌹","To the wonderful {name} — your birthday is a celebration of the love you give and receive. May it be as magical as you are. 🌟💖"]},royal:{default:["On this grand occasion, we celebrate the magnificent {name}! May your birthday be draped in golden glory and crowned with eternal joy. Long live the birthday royalty! 👑✨","Your Majesty {name}, today we honor your grace and splendor! May your birthday be as regal as your spirit. The kingdom celebrates you! 🏰👑","All hail {name}! On this glorious birthday, may the heavens shower you with blessings fit for royalty. Cheers to your magnificent existence! 🥂✨"]}};function sp(n,e="default",t="emotional"){const i=Ss[t]||Ss.emotional,o=i[e]||i.default||Ss.emotional.default;return o[Math.floor(Math.random()*o.length)].replace(/{name}/g,n)}function BE(n){const e=[`Roses are red, violets are blue,
No birthday wish is as special as you, ${n}!
May your day shine bright like the stars above,
Filled with joy, laughter, and endless love. 🌹✨`,`A year older, a year wiser, ${n} so true,
The world is a better place because of you!
May candles glow and wishes come alive,
Happy Birthday — it's your time to thrive! 🎂💫`,`${n}, ${n}, born to shine,
Every moment with you feels divine.
On this day we celebrate your grace,
A smile that lights up every place. 🌟❤️`,`Stars align on this blessed night,
For ${n}'s birthday — oh what a sight!
With every candle, make a wish come true,
The whole world is celebrating you! 🎆✨`];return e[Math.floor(Math.random()*e.length)]}const kE=[{id:"emotional",name:"Emotional",emoji:"🥹"},{id:"funny",name:"Funny",emoji:"😄"},{id:"romantic",name:"Romantic",emoji:"💕"},{id:"royal",name:"Royal",emoji:"👑"}],oc="birthday_wishes";function OE(){return Math.random().toString(36).substring(2,15)+Date.now().toString(36)}function GE(n){const e=sc(),t=OE(),i={id:t,...n,createdAt:Date.now()};return e[t]=i,localStorage.setItem(oc,JSON.stringify(e)),t}function rc(n){const e=sc();return e[n]?e[n]:VE(n)}function VE(n){try{const e=window.location.hash,t=e.indexOf("?");if(t===-1)return null;const o=new URLSearchParams(e.substring(t)).get("data");if(!o)return null;const r=atob(o.replace(/-/g,"+").replace(/_/g,"/")),s=JSON.parse(r);s.id=n;const a=sc();a[n]={...s,createdAt:Date.now()};try{localStorage.setItem(oc,JSON.stringify(a))}catch{}return s}catch(e){return console.warn("Failed to decode URL birthday data:",e),null}}function sc(){try{return JSON.parse(localStorage.getItem(oc)||"{}")}catch{return{}}}async function HE(n){const e=[];for(const i of n)try{const o=await zE(i,800);e.push(o)}catch(o){console.warn("Failed to process photo:",o)}return e}function zE(n,e){return new Promise((t,i)=>{const o=new FileReader;o.onload=r=>{const s=new Image;s.onload=()=>{const a=document.createElement("canvas");let{width:c,height:l}=s;(c>e||l>e)&&(c>l?(l=l/c*e,c=e):(c=c/l*e,l=e)),a.width=c,a.height=l,a.getContext("2d").drawImage(s,0,0,c,l),t(a.toDataURL("image/jpeg",.75))},s.onerror=i,s.src=r.target.result},o.onerror=i,o.readAsDataURL(n)})}const WE=[{id:"classic",name:"Classic Heart Grid",emoji:"💝"},{id:"floating",name:"Floating Particles",emoji:"✨"},{id:"mosaic",name:"Photo Mosaic",emoji:"🧩"},{id:"animated",name:"Animated Collage",emoji:"💫"},{id:"rotating",name:"3D Rotating Heart",emoji:"🔄"}];class ap{constructor(e,t,i={}){this.container=e,this.photos=t||[],this.style=i.style||"classic",this.cellSize=i.cellSize||55,this.animated=i.animated!==!1,this.loadedImages=[]}heartPoint(e){const t=16*Math.pow(Math.sin(e),3),i=-(13*Math.cos(e)-5*Math.cos(2*e)-2*Math.cos(3*e)-Math.cos(4*e));return{x:t,y:i}}isInsideHeart(e,t){const i=e/16*(e/16),o=(t+2)/16*((t+2)/16);return Math.pow(i+o-1,3)-i*o*((t+2)/16)<=0}generateHeartCells(){const e=Math.min(this.container.offsetWidth,this.container.offsetHeight)||400,t=e/40,i=e/2,o=e/2,r=this.cellSize+4,s=Math.floor(e/r),a=Math.floor(e/r),c=[];for(let l=0;l<a;l++)for(let f=0;f<s;f++){const p=(f+.5)*r,h=(l+.5)*r,m=(p-i)/t,v=(h-o)/t;this.isInsideHeart(m,v)&&c.push({x:p-r/2,y:h-r/2,size:r-4,row:l,col:f})}return{cells:c,containerSize:e,centerX:i,centerY:o,scale:t}}async preloadImages(){this.loadedImages=[];for(const e of this.photos){const t=await this.loadImage(e);this.loadedImages.push(t)}}loadImage(e){return new Promise(t=>{const i=new Image;i.crossOrigin="anonymous",i.onload=()=>t(i),i.onerror=()=>t(null),i.src=e})}async render(){if(this.container.innerHTML="",this.container.style.position="relative",this.photos.length!==0)switch(this.style){case"floating":this.renderFloating();break;case"mosaic":this.renderMosaic();break;case"animated":this.renderAnimated();break;case"rotating":this.renderRotating();break;default:this.renderClassic();break}}injectSVGClipPath(){if(document.getElementById("heart-clip-path"))return;const e=document.createElementNS("http://www.w3.org/2000/svg","svg");e.style.position="absolute",e.style.width="0",e.style.height="0",e.innerHTML=`
      <defs>
        <clipPath id="heart-clip-path" clipPathUnits="objectBoundingBox">
          <path d="M0.5,0.95 C0.5,0.95 0,0.55 0,0.3 C0,0.1 0.15,0 0.3,0 C0.4,0 0.5,0.1 0.5,0.1 C0.5,0.1 0.6,0 0.7,0 C0.85,0 1,0.1 1,0.3 C1,0.55 0.5,0.95 0.5,0.95 Z"></path>
        </clipPath>
      </defs>
    `,document.body.appendChild(e)}renderClassic(){this.injectSVGClipPath(),this.addBlurBackground();const e=document.createElement("div");e.style.cssText=`
            position: absolute; inset: 5%;
            clip-path: url(#heart-clip-path);
            -webkit-clip-path: url(#heart-clip-path);
            display: flex; flex-wrap: wrap; align-content: flex-start;
            background: rgba(255,255,255,0.05);
            overflow: hidden;
        `;const t=this.photos.length,i=Math.max(3,Math.ceil(Math.sqrt(t*1.5))),o=100/i;this.photos.forEach((s,a)=>{const c=document.createElement("div");c.style.cssText=`
                width: ${o}%; 
                height: ${o}%;
                position: relative;
                overflow: hidden;
            `,this.animated&&(c.style.opacity="0",c.style.transform="scale(0.5)",c.style.transition=`all 0.6s cubic-bezier(0.34,1.56,0.64,1) ${a*.05}s`);const l=document.createElement("img");l.src=s,l.style.cssText=`
                width: 100%; height: 100%; object-fit: cover;
                transition: transform 0.4s ease;
            `,c.appendChild(l),e.appendChild(c),c.addEventListener("mouseenter",()=>{l.style.transform="scale(1.2)",c.style.zIndex="10"}),c.addEventListener("mouseleave",()=>{l.style.transform="scale(1)",c.style.zIndex="1"}),this.animated&&requestAnimationFrame(()=>setTimeout(()=>{c.style.opacity="1",c.style.transform="scale(1)"},50))});const r=i*Math.ceil(t/i);if(t<r)for(let s=t;s<r;s++){const a=document.createElement("div");a.style.cssText=`width: ${o}%; height: ${o}%;`;const c=document.createElement("img");c.src=this.photos[s%t],c.style.cssText="width:100%;height:100%;object-fit:cover; opacity: 0.5; filter: grayscale(50%);",a.appendChild(c),e.appendChild(a)}this.container.appendChild(e),this.addGlowOutline(),this.addPulseAnimation()}renderFloating(){const e=Math.min(this.container.offsetWidth,this.container.offsetHeight)||400;this.addBlurBackground();const t=[],i=Math.min(this.photos.length*4,80);for(let a=0;a<i;a++){const c=a/i*Math.PI*2,{x:l,y:f}=this.heartPoint(c),p=(l/34+.5)*e,h=(f/34+.5)*e;t.push({x:p,y:h})}const{cells:o}=this.generateHeartCells();o.filter((a,c)=>c%4===0).forEach(a=>t.push({x:a.x+a.size/2,y:a.y+a.size/2})),t.slice(0,Math.max(this.photos.length*3,40)).forEach((a,c)=>{const l=c%this.photos.length,f=25+Math.random()*40,p=document.createElement("div");p.style.cssText=`
        position: absolute;
        left: ${a.x-f/2}px; top: ${a.y-f/2}px;
        width: ${f}px; height: ${f}px;
        border-radius: 50%; overflow: hidden;
        border: 2px solid rgba(255,255,255,0.4);
        box-shadow: 0 4px 15px rgba(255,45,117,0.3);
        animation: floatParticle${c%3} ${3+Math.random()*3}s ease-in-out infinite ${Math.random()*2}s;
        opacity: 0; transform: scale(0.5);
        transition: all 0.6s break-out ${c*.05}s;
      `;const h=document.createElement("img");h.src=this.photos[l],h.style.cssText="width:100%;height:100%;object-fit:cover;",p.appendChild(h),this.container.appendChild(p),requestAnimationFrame(()=>setTimeout(()=>{p.style.opacity="1",p.style.transform="scale(1)"},50))}),this.injectFloatStyles(),this.addGlowOutline()}renderMosaic(){this.injectSVGClipPath(),this.addBlurBackground();const e=document.createElement("div");e.style.cssText=`
            position: absolute; inset: 5%;
            clip-path: url(#heart-clip-path);
            -webkit-clip-path: url(#heart-clip-path);
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(40px, 1fr));
            grid-auto-rows: 40px;
            gap: 2px;
            background: transparent;
        `;const t=100;for(let i=0;i<t;i++){const o=i%this.photos.length,r=Math.random()>.8,s=document.createElement("div");s.style.cssText=`
        position:relative; overflow:hidden; border-radius: 4px;
        grid-column: span ${r?2:1};
        grid-row: span ${r?2:1};
        opacity: 0; transform: translateY(20px);
        transition: all 0.5s ease ${Math.random()*1}s;
      `;const a=document.createElement("img");a.src=this.photos[o],a.style.cssText="width:100%;height:100%;object-fit:cover; transition: transform 0.3s ease;",s.appendChild(a),s.addEventListener("mouseenter",()=>a.style.transform="scale(1.15)"),s.addEventListener("mouseleave",()=>a.style.transform="scale(1)"),e.appendChild(s),requestAnimationFrame(()=>setTimeout(()=>{s.style.opacity="1",s.style.transform="translateY(0)"},50))}this.container.appendChild(e),this.addGlowOutline()}renderAnimated(){const{cells:e,containerSize:t}=this.generateHeartCells();if(e.length===0)return;this.addBlurBackground();const i=t/2,o=t/2;e.map(s=>({...s,dist:Math.sqrt(Math.pow(s.x+s.size/2-i,2)+Math.pow(s.y+s.size/2-o,2))})).sort((s,a)=>s.dist-a.dist).forEach((s,a)=>{const c=a%this.photos.length,l=document.createElement("div");l.style.cssText=`
        position:absolute;
        left:${s.x}px; top:${s.y}px;
        width:${s.size}px; height:${s.size}px;
        border-radius: 8px; overflow:hidden;
        border: 2px solid rgba(255,255,255,0.15);
        box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        opacity: 0;
        transform: scale(0) rotate(${-30+Math.random()*60}deg);
        transition: all 0.7s cubic-bezier(0.34,1.56,0.64,1) ${a*.05}s;
      `;const f=document.createElement("img");f.src=this.photos[c],f.style.cssText="width:100%;height:100%;object-fit:cover;",l.appendChild(f),l.addEventListener("mouseenter",()=>{l.style.transform="scale(1.2) rotate(0deg)",l.style.zIndex="10",l.style.boxShadow="0 8px 30px rgba(255,45,117,0.4)"}),l.addEventListener("mouseleave",()=>{l.style.transform="scale(1) rotate(0deg)",l.style.zIndex="",l.style.boxShadow="0 4px 15px rgba(0,0,0,0.3)"}),this.container.appendChild(l),requestAnimationFrame(()=>setTimeout(()=>{l.style.opacity="1",l.style.transform="scale(1) rotate(0deg)"},50))}),this.addGlowOutline(),this.addPulseAnimation(),this.addSparkles()}renderRotating(){const e=Math.min(this.container.offsetWidth,this.container.offsetHeight)||400;this.addBlurBackground();const t=document.createElement("div");t.className="heart-3d-wrapper",t.style.cssText=`
      width: 100%; height: 100%;
      perspective: 800px;
      display: flex; align-items: center; justify-content: center;
    `;const i=document.createElement("div");i.className="heart-3d-rotator",i.style.cssText=`
      width: 90%; height: 90%;
      position: relative;
      transform-style: preserve-3d;
      animation: heartRotate3D 12s ease-in-out infinite;
    `;const{cells:o}=this.generateHeartCells();o.map(s=>({x:s.x*.9+e*.05,y:s.y*.9+e*.05,size:s.size*.9})).forEach((s,a)=>{const c=a%this.photos.length,l=-20+Math.random()*40,f=document.createElement("div");f.style.cssText=`
        position:absolute;
        left:${s.x}px; top:${s.y}px;
        width:${s.size}px; height:${s.size}px;
        border-radius: 6px; overflow:hidden;
        border: 2px solid rgba(255,255,255,0.2);
        transform: translateZ(${l}px);
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        opacity: 0;
        transition: opacity 0.5s ease ${a*.04}s;
      `;const p=document.createElement("img");p.src=this.photos[c],p.style.cssText="width:100%;height:100%;object-fit:cover;",f.appendChild(p),i.appendChild(f),requestAnimationFrame(()=>f.style.opacity="1")}),t.appendChild(i),this.container.appendChild(t),this.inject3DStyles(),this.addGlowOutline()}addBlurBackground(){const e=document.createElement("div");e.style.cssText=`
      position:absolute; inset:0; z-index:-2;
      background: radial-gradient(circle at center, 
        rgba(255,45,117,0.08) 0%, 
        rgba(123,47,247,0.05) 40%, 
        transparent 70%);
      filter: blur(30px);
      border-radius: 50%;
    `,this.container.appendChild(e)}addGlowOutline(){const e=document.createElement("div");e.style.cssText=`
      position:absolute; top:50%; left:50%;
      transform:translate(-50%,-50%);
      width:95%; height:95%;
      border-radius:50%;
      background: radial-gradient(circle, var(--glow-color) 0%, transparent 70%);
      opacity:0.25; pointer-events:none;
      animation: pulse-glow 3s ease-in-out infinite;
      z-index:-1;
    `,this.container.appendChild(e)}addPulseAnimation(){const e=document.createElement("div");e.style.cssText=`
      position:absolute; top:50%; left:50%;
      transform:translate(-50%,-50%);
      width:80%; height:80%;
      border: 2px solid var(--accent-1);
      border-radius: 50%;
      opacity: 0;
      animation: pulseRing 2s ease-out infinite;
      pointer-events: none; z-index: -1;
    `,this.container.appendChild(e),this.injectPulseStyle()}addSparkles(){for(let e=0;e<8;e++){const t=document.createElement("div");t.textContent="✦",t.style.cssText=`
        position:absolute;
        left:${10+Math.random()*80}%;
        top:${10+Math.random()*80}%;
        font-size:${8+Math.random()*12}px;
        color: var(--accent-1);
        opacity:0;
        pointer-events:none;
        animation: sparkle ${2+Math.random()*3}s ease-in-out ${Math.random()*2}s infinite;
      `,this.container.appendChild(t)}}injectFloatStyles(){if(document.getElementById("float-particle-styles"))return;const e=document.createElement("style");e.id="float-particle-styles",e.textContent=`
      @keyframes floatParticle0 { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-12px) rotate(5deg)} }
      @keyframes floatParticle1 { 0%,100%{transform:translateX(0) rotate(0deg)} 50%{transform:translateX(10px) rotate(-3deg)} }
      @keyframes floatParticle2 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(8px,-8px)} }
    `,document.head.appendChild(e)}inject3DStyles(){if(document.getElementById("heart-3d-styles"))return;const e=document.createElement("style");e.id="heart-3d-styles",e.textContent=`
      @keyframes heartRotate3D {
        0% { transform: rotateY(0deg) rotateX(0deg); }
        25% { transform: rotateY(15deg) rotateX(5deg); }
        50% { transform: rotateY(0deg) rotateX(0deg); }
        75% { transform: rotateY(-15deg) rotateX(-5deg); }
        100% { transform: rotateY(0deg) rotateX(0deg); }
      }
    `,document.head.appendChild(e)}injectPulseStyle(){if(document.getElementById("pulse-ring-style"))return;const e=document.createElement("style");e.id="pulse-ring-style",e.textContent=`
      @keyframes pulseRing {
        0% { opacity:0.4; transform:translate(-50%,-50%) scale(0.8); }
        100% { opacity:0; transform:translate(-50%,-50%) scale(1.2); }
      }
    `,document.head.appendChild(e)}async downloadAsImage(e="heart-collage.png"){const t=Math.min(this.container.offsetWidth,this.container.offsetHeight)||400,i=2,o=document.createElement("canvas");o.width=t*i,o.height=t*i;const r=o.getContext("2d");r.scale(i,i);const s=r.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);s.addColorStop(0,"rgba(255,45,117,0.15)"),s.addColorStop(.5,"rgba(123,47,247,0.08)"),s.addColorStop(1,"rgba(10,10,15,1)"),r.fillStyle=s,r.fillRect(0,0,t,t);const{cells:a}=this.generateHeartCells();await this.preloadImages();for(let l=0;l<a.length;l++){const f=a[l],p=l%this.loadedImages.length,h=this.loadedImages[p];if(!h)continue;r.save(),r.beginPath(),r.roundRect(f.x,f.y,f.size,f.size,4),r.clip();const m=h.width/h.height;let v=f.size,y=f.size;m>1?v=f.size*m:y=f.size/m;const g=f.x-(v-f.size)/2,_=f.y-(y-f.size)/2;r.drawImage(h,g,_,v,y),r.strokeStyle="rgba(255,255,255,0.2)",r.lineWidth=1,r.stroke(),r.restore()}const c=document.createElement("a");c.download=e,c.href=o.toDataURL("image/png"),c.click()}}function qE(n){const e=Object.values(Oo).map(y=>`
    <button type="button" class="theme-option ${y.id==="romantic"?"active":""}" data-theme="${y.id}">
      <div class="theme-swatch" style="background: ${y.swatch}"></div>
      <span>${y.emoji} ${y.name}</span>
    </button>
  `).join(""),t=kE.map(y=>`<option value="${y.id}">${y.emoji} ${y.name}</option>`).join(""),i=WE.map(y=>`
    <button type="button" class="collage-style-option ${y.id==="classic"?"active":""}" data-collage="${y.id}">
      <span class="collage-style-emoji">${y.emoji}</span>
      <span>${y.name}</span>
    </button>
  `).join("");n.innerHTML=`
    <div class="form-page">
      <div class="container container-sm">
        <button class="form-back" id="form-back">← Back to Home</button>

        <div class="form-header">
          <h1 class="text-gradient">Create Birthday Surprise ✨</h1>
          <p>Fill in the details to generate a magical birthday experience</p>
        </div>

        <form class="glass-card-strong form-card" id="birthday-form">
          <!-- Basic Info -->
          <div class="form-section">
            <div class="form-section-title">🎂 Birthday Details</div>

            <div class="form-group">
              <label class="form-label" for="bd-name">Name of Birthday Person *</label>
              <input class="form-input" type="text" id="bd-name" placeholder="e.g. Sarah" required />
            </div>

            <div class="form-row">
              <div class="form-group">
                <label class="form-label" for="bd-date">Birthday Date *</label>
                <input class="form-input" type="date" id="bd-date" required />
              </div>
              <div class="form-group">
                <label class="form-label" for="bd-time">Birthday Time (optional)</label>
                <input class="form-input" type="time" id="bd-time" />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label class="form-label" for="bd-relationship">Relationship</label>
                <select class="form-input" id="bd-relationship">
                  <option value="friend">👫 Friend</option>
                  <option value="brother">👦 Brother</option>
                  <option value="sister">👧 Sister</option>
                  <option value="girlfriend">💕 Girlfriend</option>
                  <option value="boyfriend">💙 Boyfriend</option>
                  <option value="default">🤗 Other</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label" for="bd-mood">Message Mood</label>
                <select class="form-input" id="bd-mood">
                  ${t}
                </select>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label" for="bd-message">Custom Message (optional)</label>
              <textarea class="form-input" id="bd-message" placeholder="Write a personal birthday message..." rows="3"></textarea>
            </div>
          </div>

          <!-- Theme Selection -->
          <div class="form-section">
            <div class="form-section-title">🎨 Choose Theme</div>
            <div class="theme-selector" id="theme-selector">
              ${e}
            </div>
          </div>

          <!-- Collage Style -->
          <div class="form-section">
            <div class="form-section-title">💝 Heart Collage Style</div>
            <div class="collage-style-selector" id="collage-selector">
              ${i}
            </div>
          </div>

          <!-- Photo Upload -->
          <div class="form-section">
            <div class="form-section-title">📸 Upload Photos</div>

            <div class="photo-upload-area" id="photo-upload-area">
              <div class="photo-upload-icon">📷</div>
              <div class="photo-upload-text">
                <strong>Click to upload</strong> or drag & drop photos
              </div>
              <div class="photo-upload-hint">Upload 1-20 photos (JPG, PNG, WebP)</div>
              <input type="file" class="photo-upload-input" id="photo-input" multiple accept="image/*" />
            </div>

            <div class="photo-preview-grid" id="photo-preview-grid"></div>
          </div>

          <!-- Timer Settings -->
          <div class="form-section">
            <div class="form-section-title">⏱ Countdown Timer</div>

            <div class="timer-options" id="timer-options">
              <button type="button" class="timer-option active" data-mode="delay" data-value="30">
                <div class="timer-radio"></div>
                <span>⚡ Start in 30 seconds (Quick Demo)</span>
              </button>
              <button type="button" class="timer-option" data-mode="delay" data-value="60">
                <div class="timer-radio"></div>
                <span>⏰ Start in 1 minute</span>
              </button>
              <button type="button" class="timer-option" data-mode="delay" data-value="300">
                <div class="timer-radio"></div>
                <span>⏰ Start in 5 minutes</span>
              </button>
              <button type="button" class="timer-option" data-mode="midnight">
                <div class="timer-radio"></div>
                <span>🌙 Start at midnight on birthday</span>
              </button>
              <button type="button" class="timer-option" data-mode="specific">
                <div class="timer-radio"></div>
                <span>🕐 Start at specific time</span>
              </button>
            </div>
          </div>

          <!-- Submit -->
          <div class="form-submit">
            <button type="submit" class="btn btn-primary" id="form-submit-btn">
              🎉 Generate Birthday Surprise
            </button>
          </div>
        </form>
      </div>
    </div>
  `;let o="romantic",r="classic",s="delay",a=30,c=[];document.getElementById("collage-selector").addEventListener("click",y=>{const g=y.target.closest(".collage-style-option");g&&(document.querySelectorAll(".collage-style-option").forEach(_=>_.classList.remove("active")),g.classList.add("active"),r=g.dataset.collage)}),document.getElementById("form-back").addEventListener("click",()=>{window.location.hash="#/"}),document.getElementById("theme-selector").addEventListener("click",y=>{const g=y.target.closest(".theme-option");g&&(document.querySelectorAll(".theme-option").forEach(_=>_.classList.remove("active")),g.classList.add("active"),o=g.dataset.theme)}),document.getElementById("timer-options").addEventListener("click",y=>{const g=y.target.closest(".timer-option");g&&(document.querySelectorAll(".timer-option").forEach(_=>_.classList.remove("active")),g.classList.add("active"),s=g.dataset.mode,a=parseInt(g.dataset.value)||0)});const l=document.getElementById("photo-input"),f=document.getElementById("photo-upload-area"),p=document.getElementById("photo-preview-grid");f.addEventListener("click",()=>l.click()),f.addEventListener("dragover",y=>{y.preventDefault(),f.classList.add("drag-over")}),f.addEventListener("dragleave",()=>{f.classList.remove("drag-over")}),f.addEventListener("drop",y=>{y.preventDefault(),f.classList.remove("drag-over");const g=Array.from(y.dataTransfer.files).filter(_=>_.type.startsWith("image/"));h(g)}),l.addEventListener("change",()=>{h(Array.from(l.files))});function h(y){const g=20-c.length,_=y.slice(0,g);c=[...c,..._],m()}function m(){p.innerHTML="",c.forEach((y,g)=>{const _=new FileReader;_.onload=E=>{const A=document.createElement("div");A.className="photo-preview-item",A.innerHTML=`
          <img src="${E.target.result}" alt="Photo ${g+1}" />
          <button class="photo-preview-remove" data-index="${g}" type="button">✕</button>
        `,p.appendChild(A),A.querySelector(".photo-preview-remove").addEventListener("click",()=>{c.splice(g,1),m()})},_.readAsDataURL(y)})}document.getElementById("birthday-form").addEventListener("submit",async y=>{y.preventDefault();const g=document.getElementById("form-submit-btn");g.disabled=!0,g.textContent="⏳ Generating...";try{const _=await HE(c),E={name:document.getElementById("bd-name").value.trim(),date:document.getElementById("bd-date").value,time:document.getElementById("bd-time").value||null,relationship:document.getElementById("bd-relationship").value,mood:document.getElementById("bd-mood").value,customMessage:document.getElementById("bd-message").value.trim(),theme:o,collageStyle:r,timerMode:s,timerValue:a,photos:_},A=GE(E);window.location.hash=`#/preview/${A}`}catch(_){console.error("Form submission error:",_),g.disabled=!1,g.textContent="🎉 Generate Birthday Surprise",alert("Something went wrong. Please try again.")}});const v=new Date().toISOString().split("T")[0];document.getElementById("bd-date").value=v}var Fi={},Ts,wd;function XE(){return wd||(wd=1,Ts=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then}),Ts}var Ms={},Kn={},bd;function Pi(){if(bd)return Kn;bd=1;let n;const e=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];return Kn.getSymbolSize=function(i){if(!i)throw new Error('"version" cannot be null or undefined');if(i<1||i>40)throw new Error('"version" should be in range from 1 to 40');return i*4+17},Kn.getSymbolTotalCodewords=function(i){return e[i]},Kn.getBCHDigit=function(t){let i=0;for(;t!==0;)i++,t>>>=1;return i},Kn.setToSJISFunction=function(i){if(typeof i!="function")throw new Error('"toSJISFunc" is not a valid function.');n=i},Kn.isKanjiModeEnabled=function(){return typeof n<"u"},Kn.toSJIS=function(i){return n(i)},Kn}var As={},Id;function ac(){return Id||(Id=1,(function(n){n.L={bit:1},n.M={bit:0},n.Q={bit:3},n.H={bit:2};function e(t){if(typeof t!="string")throw new Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return n.L;case"m":case"medium":return n.M;case"q":case"quartile":return n.Q;case"h":case"high":return n.H;default:throw new Error("Unknown EC Level: "+t)}}n.isValid=function(i){return i&&typeof i.bit<"u"&&i.bit>=0&&i.bit<4},n.from=function(i,o){if(n.isValid(i))return i;try{return e(i)}catch{return o}}})(As)),As}var Cs,Rd;function YE(){if(Rd)return Cs;Rd=1;function n(){this.buffer=[],this.length=0}return n.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let i=0;i<t;i++)this.putBit((e>>>t-i-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},Cs=n,Cs}var ws,Pd;function $E(){if(Pd)return ws;Pd=1;function n(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}return n.prototype.set=function(e,t,i,o){const r=e*this.size+t;this.data[r]=i,o&&(this.reservedBit[r]=!0)},n.prototype.get=function(e,t){return this.data[e*this.size+t]},n.prototype.xor=function(e,t,i){this.data[e*this.size+t]^=i},n.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},ws=n,ws}var bs={},Dd;function JE(){return Dd||(Dd=1,(function(n){const e=Pi().getSymbolSize;n.getRowColCoords=function(i){if(i===1)return[];const o=Math.floor(i/7)+2,r=e(i),s=r===145?26:Math.ceil((r-13)/(2*o-2))*2,a=[r-7];for(let c=1;c<o-1;c++)a[c]=a[c-1]-s;return a.push(6),a.reverse()},n.getPositions=function(i){const o=[],r=n.getRowColCoords(i),s=r.length;for(let a=0;a<s;a++)for(let c=0;c<s;c++)a===0&&c===0||a===0&&c===s-1||a===s-1&&c===0||o.push([r[a],r[c]]);return o}})(bs)),bs}var Is={},Nd;function KE(){if(Nd)return Is;Nd=1;const n=Pi().getSymbolSize,e=7;return Is.getPositions=function(i){const o=n(i);return[[0,0],[o-e,0],[0,o-e]]},Is}var Rs={},Ld;function ZE(){return Ld||(Ld=1,(function(n){n.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};n.isValid=function(o){return o!=null&&o!==""&&!isNaN(o)&&o>=0&&o<=7},n.from=function(o){return n.isValid(o)?parseInt(o,10):void 0},n.getPenaltyN1=function(o){const r=o.size;let s=0,a=0,c=0,l=null,f=null;for(let p=0;p<r;p++){a=c=0,l=f=null;for(let h=0;h<r;h++){let m=o.get(p,h);m===l?a++:(a>=5&&(s+=e.N1+(a-5)),l=m,a=1),m=o.get(h,p),m===f?c++:(c>=5&&(s+=e.N1+(c-5)),f=m,c=1)}a>=5&&(s+=e.N1+(a-5)),c>=5&&(s+=e.N1+(c-5))}return s},n.getPenaltyN2=function(o){const r=o.size;let s=0;for(let a=0;a<r-1;a++)for(let c=0;c<r-1;c++){const l=o.get(a,c)+o.get(a,c+1)+o.get(a+1,c)+o.get(a+1,c+1);(l===4||l===0)&&s++}return s*e.N2},n.getPenaltyN3=function(o){const r=o.size;let s=0,a=0,c=0;for(let l=0;l<r;l++){a=c=0;for(let f=0;f<r;f++)a=a<<1&2047|o.get(l,f),f>=10&&(a===1488||a===93)&&s++,c=c<<1&2047|o.get(f,l),f>=10&&(c===1488||c===93)&&s++}return s*e.N3},n.getPenaltyN4=function(o){let r=0;const s=o.data.length;for(let c=0;c<s;c++)r+=o.data[c];return Math.abs(Math.ceil(r*100/s/5)-10)*e.N4};function t(i,o,r){switch(i){case n.Patterns.PATTERN000:return(o+r)%2===0;case n.Patterns.PATTERN001:return o%2===0;case n.Patterns.PATTERN010:return r%3===0;case n.Patterns.PATTERN011:return(o+r)%3===0;case n.Patterns.PATTERN100:return(Math.floor(o/2)+Math.floor(r/3))%2===0;case n.Patterns.PATTERN101:return o*r%2+o*r%3===0;case n.Patterns.PATTERN110:return(o*r%2+o*r%3)%2===0;case n.Patterns.PATTERN111:return(o*r%3+(o+r)%2)%2===0;default:throw new Error("bad maskPattern:"+i)}}n.applyMask=function(o,r){const s=r.size;for(let a=0;a<s;a++)for(let c=0;c<s;c++)r.isReserved(c,a)||r.xor(c,a,t(o,c,a))},n.getBestMask=function(o,r){const s=Object.keys(n.Patterns).length;let a=0,c=1/0;for(let l=0;l<s;l++){r(l),n.applyMask(l,o);const f=n.getPenaltyN1(o)+n.getPenaltyN2(o)+n.getPenaltyN3(o)+n.getPenaltyN4(o);n.applyMask(l,o),f<c&&(c=f,a=l)}return a}})(Rs)),Rs}var or={},Ud;function lp(){if(Ud)return or;Ud=1;const n=ac(),e=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],t=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];return or.getBlocksCount=function(o,r){switch(r){case n.L:return e[(o-1)*4+0];case n.M:return e[(o-1)*4+1];case n.Q:return e[(o-1)*4+2];case n.H:return e[(o-1)*4+3];default:return}},or.getTotalCodewordsCount=function(o,r){switch(r){case n.L:return t[(o-1)*4+0];case n.M:return t[(o-1)*4+1];case n.Q:return t[(o-1)*4+2];case n.H:return t[(o-1)*4+3];default:return}},or}var Ps={},Ao={},Fd;function QE(){if(Fd)return Ao;Fd=1;const n=new Uint8Array(512),e=new Uint8Array(256);return(function(){let i=1;for(let o=0;o<255;o++)n[o]=i,e[i]=o,i<<=1,i&256&&(i^=285);for(let o=255;o<512;o++)n[o]=n[o-255]})(),Ao.log=function(i){if(i<1)throw new Error("log("+i+")");return e[i]},Ao.exp=function(i){return n[i]},Ao.mul=function(i,o){return i===0||o===0?0:n[e[i]+e[o]]},Ao}var Bd;function jE(){return Bd||(Bd=1,(function(n){const e=QE();n.mul=function(i,o){const r=new Uint8Array(i.length+o.length-1);for(let s=0;s<i.length;s++)for(let a=0;a<o.length;a++)r[s+a]^=e.mul(i[s],o[a]);return r},n.mod=function(i,o){let r=new Uint8Array(i);for(;r.length-o.length>=0;){const s=r[0];for(let c=0;c<o.length;c++)r[c]^=e.mul(o[c],s);let a=0;for(;a<r.length&&r[a]===0;)a++;r=r.slice(a)}return r},n.generateECPolynomial=function(i){let o=new Uint8Array([1]);for(let r=0;r<i;r++)o=n.mul(o,new Uint8Array([1,e.exp(r)]));return o}})(Ps)),Ps}var Ds,kd;function eS(){if(kd)return Ds;kd=1;const n=jE();function e(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}return e.prototype.initialize=function(i){this.degree=i,this.genPoly=n.generateECPolynomial(this.degree)},e.prototype.encode=function(i){if(!this.genPoly)throw new Error("Encoder not initialized");const o=new Uint8Array(i.length+this.degree);o.set(i);const r=n.mod(o,this.genPoly),s=this.degree-r.length;if(s>0){const a=new Uint8Array(this.degree);return a.set(r,s),a}return r},Ds=e,Ds}var Ns={},Ls={},Us={},Od;function cp(){return Od||(Od=1,Us.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}),Us}var mn={},Gd;function up(){if(Gd)return mn;Gd=1;const n="[0-9]+",e="[A-Z $%*+\\-./:]+";let t="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";t=t.replace(/u/g,"\\u");const i="(?:(?![A-Z0-9 $%*+\\-./:]|"+t+`)(?:.|[\r
]))+`;mn.KANJI=new RegExp(t,"g"),mn.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),mn.BYTE=new RegExp(i,"g"),mn.NUMERIC=new RegExp(n,"g"),mn.ALPHANUMERIC=new RegExp(e,"g");const o=new RegExp("^"+t+"$"),r=new RegExp("^"+n+"$"),s=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");return mn.testKanji=function(c){return o.test(c)},mn.testNumeric=function(c){return r.test(c)},mn.testAlphanumeric=function(c){return s.test(c)},mn}var Vd;function Di(){return Vd||(Vd=1,(function(n){const e=cp(),t=up();n.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},n.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},n.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},n.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},n.MIXED={bit:-1},n.getCharCountIndicator=function(r,s){if(!r.ccBits)throw new Error("Invalid mode: "+r);if(!e.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?r.ccBits[0]:s<27?r.ccBits[1]:r.ccBits[2]},n.getBestModeForData=function(r){return t.testNumeric(r)?n.NUMERIC:t.testAlphanumeric(r)?n.ALPHANUMERIC:t.testKanji(r)?n.KANJI:n.BYTE},n.toString=function(r){if(r&&r.id)return r.id;throw new Error("Invalid mode")},n.isValid=function(r){return r&&r.bit&&r.ccBits};function i(o){if(typeof o!="string")throw new Error("Param is not a string");switch(o.toLowerCase()){case"numeric":return n.NUMERIC;case"alphanumeric":return n.ALPHANUMERIC;case"kanji":return n.KANJI;case"byte":return n.BYTE;default:throw new Error("Unknown mode: "+o)}}n.from=function(r,s){if(n.isValid(r))return r;try{return i(r)}catch{return s}}})(Ls)),Ls}var Hd;function tS(){return Hd||(Hd=1,(function(n){const e=Pi(),t=lp(),i=ac(),o=Di(),r=cp(),s=7973,a=e.getBCHDigit(s);function c(h,m,v){for(let y=1;y<=40;y++)if(m<=n.getCapacity(y,v,h))return y}function l(h,m){return o.getCharCountIndicator(h,m)+4}function f(h,m){let v=0;return h.forEach(function(y){const g=l(y.mode,m);v+=g+y.getBitsLength()}),v}function p(h,m){for(let v=1;v<=40;v++)if(f(h,v)<=n.getCapacity(v,m,o.MIXED))return v}n.from=function(m,v){return r.isValid(m)?parseInt(m,10):v},n.getCapacity=function(m,v,y){if(!r.isValid(m))throw new Error("Invalid QR Code version");typeof y>"u"&&(y=o.BYTE);const g=e.getSymbolTotalCodewords(m),_=t.getTotalCodewordsCount(m,v),E=(g-_)*8;if(y===o.MIXED)return E;const A=E-l(y,m);switch(y){case o.NUMERIC:return Math.floor(A/10*3);case o.ALPHANUMERIC:return Math.floor(A/11*2);case o.KANJI:return Math.floor(A/13);case o.BYTE:default:return Math.floor(A/8)}},n.getBestVersionForData=function(m,v){let y;const g=i.from(v,i.M);if(Array.isArray(m)){if(m.length>1)return p(m,g);if(m.length===0)return 1;y=m[0]}else y=m;return c(y.mode,y.getLength(),g)},n.getEncodedBits=function(m){if(!r.isValid(m)||m<7)throw new Error("Invalid QR Code version");let v=m<<12;for(;e.getBCHDigit(v)-a>=0;)v^=s<<e.getBCHDigit(v)-a;return m<<12|v}})(Ns)),Ns}var Fs={},zd;function nS(){if(zd)return Fs;zd=1;const n=Pi(),e=1335,t=21522,i=n.getBCHDigit(e);return Fs.getEncodedBits=function(r,s){const a=r.bit<<3|s;let c=a<<10;for(;n.getBCHDigit(c)-i>=0;)c^=e<<n.getBCHDigit(c)-i;return(a<<10|c)^t},Fs}var Bs={},ks,Wd;function iS(){if(Wd)return ks;Wd=1;const n=Di();function e(t){this.mode=n.NUMERIC,this.data=t.toString()}return e.getBitsLength=function(i){return 10*Math.floor(i/3)+(i%3?i%3*3+1:0)},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(i){let o,r,s;for(o=0;o+3<=this.data.length;o+=3)r=this.data.substr(o,3),s=parseInt(r,10),i.put(s,10);const a=this.data.length-o;a>0&&(r=this.data.substr(o),s=parseInt(r,10),i.put(s,a*3+1))},ks=e,ks}var Os,qd;function oS(){if(qd)return Os;qd=1;const n=Di(),e=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function t(i){this.mode=n.ALPHANUMERIC,this.data=i}return t.getBitsLength=function(o){return 11*Math.floor(o/2)+6*(o%2)},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(o){let r;for(r=0;r+2<=this.data.length;r+=2){let s=e.indexOf(this.data[r])*45;s+=e.indexOf(this.data[r+1]),o.put(s,11)}this.data.length%2&&o.put(e.indexOf(this.data[r]),6)},Os=t,Os}var Gs,Xd;function rS(){if(Xd)return Gs;Xd=1;const n=Di();function e(t){this.mode=n.BYTE,typeof t=="string"?this.data=new TextEncoder().encode(t):this.data=new Uint8Array(t)}return e.getBitsLength=function(i){return i*8},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(t){for(let i=0,o=this.data.length;i<o;i++)t.put(this.data[i],8)},Gs=e,Gs}var Vs,Yd;function sS(){if(Yd)return Vs;Yd=1;const n=Di(),e=Pi();function t(i){this.mode=n.KANJI,this.data=i}return t.getBitsLength=function(o){return o*13},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(i){let o;for(o=0;o<this.data.length;o++){let r=e.toSJIS(this.data[o]);if(r>=33088&&r<=40956)r-=33088;else if(r>=57408&&r<=60351)r-=49472;else throw new Error("Invalid SJIS character: "+this.data[o]+`
Make sure your charset is UTF-8`);r=(r>>>8&255)*192+(r&255),i.put(r,13)}},Vs=t,Vs}var Hs={exports:{}},$d;function aS(){return $d||($d=1,(function(n){var e={single_source_shortest_paths:function(t,i,o){var r={},s={};s[i]=0;var a=e.PriorityQueue.make();a.push(i,0);for(var c,l,f,p,h,m,v,y,g;!a.empty();){c=a.pop(),l=c.value,p=c.cost,h=t[l]||{};for(f in h)h.hasOwnProperty(f)&&(m=h[f],v=p+m,y=s[f],g=typeof s[f]>"u",(g||y>v)&&(s[f]=v,a.push(f,v),r[f]=l))}if(typeof o<"u"&&typeof s[o]>"u"){var _=["Could not find a path from ",i," to ",o,"."].join("");throw new Error(_)}return r},extract_shortest_path_from_predecessor_list:function(t,i){for(var o=[],r=i;r;)o.push(r),t[r],r=t[r];return o.reverse(),o},find_path:function(t,i,o){var r=e.single_source_shortest_paths(t,i,o);return e.extract_shortest_path_from_predecessor_list(r,o)},PriorityQueue:{make:function(t){var i=e.PriorityQueue,o={},r;t=t||{};for(r in i)i.hasOwnProperty(r)&&(o[r]=i[r]);return o.queue=[],o.sorter=t.sorter||i.default_sorter,o},default_sorter:function(t,i){return t.cost-i.cost},push:function(t,i){var o={value:t,cost:i};this.queue.push(o),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};n.exports=e})(Hs)),Hs.exports}var Jd;function lS(){return Jd||(Jd=1,(function(n){const e=Di(),t=iS(),i=oS(),o=rS(),r=sS(),s=up(),a=Pi(),c=aS();function l(_){return unescape(encodeURIComponent(_)).length}function f(_,E,A){const S=[];let R;for(;(R=_.exec(A))!==null;)S.push({data:R[0],index:R.index,mode:E,length:R[0].length});return S}function p(_){const E=f(s.NUMERIC,e.NUMERIC,_),A=f(s.ALPHANUMERIC,e.ALPHANUMERIC,_);let S,R;return a.isKanjiModeEnabled()?(S=f(s.BYTE,e.BYTE,_),R=f(s.KANJI,e.KANJI,_)):(S=f(s.BYTE_KANJI,e.BYTE,_),R=[]),E.concat(A,S,R).sort(function(b,x){return b.index-x.index}).map(function(b){return{data:b.data,mode:b.mode,length:b.length}})}function h(_,E){switch(E){case e.NUMERIC:return t.getBitsLength(_);case e.ALPHANUMERIC:return i.getBitsLength(_);case e.KANJI:return r.getBitsLength(_);case e.BYTE:return o.getBitsLength(_)}}function m(_){return _.reduce(function(E,A){const S=E.length-1>=0?E[E.length-1]:null;return S&&S.mode===A.mode?(E[E.length-1].data+=A.data,E):(E.push(A),E)},[])}function v(_){const E=[];for(let A=0;A<_.length;A++){const S=_[A];switch(S.mode){case e.NUMERIC:E.push([S,{data:S.data,mode:e.ALPHANUMERIC,length:S.length},{data:S.data,mode:e.BYTE,length:S.length}]);break;case e.ALPHANUMERIC:E.push([S,{data:S.data,mode:e.BYTE,length:S.length}]);break;case e.KANJI:E.push([S,{data:S.data,mode:e.BYTE,length:l(S.data)}]);break;case e.BYTE:E.push([{data:S.data,mode:e.BYTE,length:l(S.data)}])}}return E}function y(_,E){const A={},S={start:{}};let R=["start"];for(let C=0;C<_.length;C++){const b=_[C],x=[];for(let M=0;M<b.length;M++){const B=b[M],I=""+C+M;x.push(I),A[I]={node:B,lastCount:0},S[I]={};for(let N=0;N<R.length;N++){const L=R[N];A[L]&&A[L].node.mode===B.mode?(S[L][I]=h(A[L].lastCount+B.length,B.mode)-h(A[L].lastCount,B.mode),A[L].lastCount+=B.length):(A[L]&&(A[L].lastCount=B.length),S[L][I]=h(B.length,B.mode)+4+e.getCharCountIndicator(B.mode,E))}}R=x}for(let C=0;C<R.length;C++)S[R[C]].end=0;return{map:S,table:A}}function g(_,E){let A;const S=e.getBestModeForData(_);if(A=e.from(E,S),A!==e.BYTE&&A.bit<S.bit)throw new Error('"'+_+'" cannot be encoded with mode '+e.toString(A)+`.
 Suggested mode is: `+e.toString(S));switch(A===e.KANJI&&!a.isKanjiModeEnabled()&&(A=e.BYTE),A){case e.NUMERIC:return new t(_);case e.ALPHANUMERIC:return new i(_);case e.KANJI:return new r(_);case e.BYTE:return new o(_)}}n.fromArray=function(E){return E.reduce(function(A,S){return typeof S=="string"?A.push(g(S,null)):S.data&&A.push(g(S.data,S.mode)),A},[])},n.fromString=function(E,A){const S=p(E,a.isKanjiModeEnabled()),R=v(S),C=y(R,A),b=c.find_path(C.map,"start","end"),x=[];for(let M=1;M<b.length-1;M++)x.push(C.table[b[M]].node);return n.fromArray(m(x))},n.rawSplit=function(E){return n.fromArray(p(E,a.isKanjiModeEnabled()))}})(Bs)),Bs}var Kd;function cS(){if(Kd)return Ms;Kd=1;const n=Pi(),e=ac(),t=YE(),i=$E(),o=JE(),r=KE(),s=ZE(),a=lp(),c=eS(),l=tS(),f=nS(),p=Di(),h=lS();function m(C,b){const x=C.size,M=r.getPositions(b);for(let B=0;B<M.length;B++){const I=M[B][0],N=M[B][1];for(let L=-1;L<=7;L++)if(!(I+L<=-1||x<=I+L))for(let k=-1;k<=7;k++)N+k<=-1||x<=N+k||(L>=0&&L<=6&&(k===0||k===6)||k>=0&&k<=6&&(L===0||L===6)||L>=2&&L<=4&&k>=2&&k<=4?C.set(I+L,N+k,!0,!0):C.set(I+L,N+k,!1,!0))}}function v(C){const b=C.size;for(let x=8;x<b-8;x++){const M=x%2===0;C.set(x,6,M,!0),C.set(6,x,M,!0)}}function y(C,b){const x=o.getPositions(b);for(let M=0;M<x.length;M++){const B=x[M][0],I=x[M][1];for(let N=-2;N<=2;N++)for(let L=-2;L<=2;L++)N===-2||N===2||L===-2||L===2||N===0&&L===0?C.set(B+N,I+L,!0,!0):C.set(B+N,I+L,!1,!0)}}function g(C,b){const x=C.size,M=l.getEncodedBits(b);let B,I,N;for(let L=0;L<18;L++)B=Math.floor(L/3),I=L%3+x-8-3,N=(M>>L&1)===1,C.set(B,I,N,!0),C.set(I,B,N,!0)}function _(C,b,x){const M=C.size,B=f.getEncodedBits(b,x);let I,N;for(I=0;I<15;I++)N=(B>>I&1)===1,I<6?C.set(I,8,N,!0):I<8?C.set(I+1,8,N,!0):C.set(M-15+I,8,N,!0),I<8?C.set(8,M-I-1,N,!0):I<9?C.set(8,15-I-1+1,N,!0):C.set(8,15-I-1,N,!0);C.set(M-8,8,1,!0)}function E(C,b){const x=C.size;let M=-1,B=x-1,I=7,N=0;for(let L=x-1;L>0;L-=2)for(L===6&&L--;;){for(let k=0;k<2;k++)if(!C.isReserved(B,L-k)){let z=!1;N<b.length&&(z=(b[N]>>>I&1)===1),C.set(B,L-k,z),I--,I===-1&&(N++,I=7)}if(B+=M,B<0||x<=B){B-=M,M=-M;break}}}function A(C,b,x){const M=new t;x.forEach(function(k){M.put(k.mode.bit,4),M.put(k.getLength(),p.getCharCountIndicator(k.mode,C)),k.write(M)});const B=n.getSymbolTotalCodewords(C),I=a.getTotalCodewordsCount(C,b),N=(B-I)*8;for(M.getLengthInBits()+4<=N&&M.put(0,4);M.getLengthInBits()%8!==0;)M.putBit(0);const L=(N-M.getLengthInBits())/8;for(let k=0;k<L;k++)M.put(k%2?17:236,8);return S(M,C,b)}function S(C,b,x){const M=n.getSymbolTotalCodewords(b),B=a.getTotalCodewordsCount(b,x),I=M-B,N=a.getBlocksCount(b,x),L=M%N,k=N-L,z=Math.floor(M/N),q=Math.floor(I/N),W=q+1,ie=z-q,oe=new c(ie);let F=0;const D=new Array(N),ee=new Array(N);let ae=0;const Ee=new Uint8Array(C.buffer);for(let he=0;he<N;he++){const fe=he<k?q:W;D[he]=Ee.slice(F,F+fe),ee[he]=oe.encode(D[he]),F+=fe,ae=Math.max(ae,fe)}const ye=new Uint8Array(M);let X=0,J,Z;for(J=0;J<ae;J++)for(Z=0;Z<N;Z++)J<D[Z].length&&(ye[X++]=D[Z][J]);for(J=0;J<ie;J++)for(Z=0;Z<N;Z++)ye[X++]=ee[Z][J];return ye}function R(C,b,x,M){let B;if(Array.isArray(C))B=h.fromArray(C);else if(typeof C=="string"){let z=b;if(!z){const q=h.rawSplit(C);z=l.getBestVersionForData(q,x)}B=h.fromString(C,z||40)}else throw new Error("Invalid data");const I=l.getBestVersionForData(B,x);if(!I)throw new Error("The amount of data is too big to be stored in a QR Code");if(!b)b=I;else if(b<I)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+I+`.
`);const N=A(b,x,B),L=n.getSymbolSize(b),k=new i(L);return m(k,b),v(k),y(k,b),_(k,x,0),b>=7&&g(k,b),E(k,N),isNaN(M)&&(M=s.getBestMask(k,_.bind(null,k,x))),s.applyMask(M,k),_(k,x,M),{modules:k,version:b,errorCorrectionLevel:x,maskPattern:M,segments:B}}return Ms.create=function(b,x){if(typeof b>"u"||b==="")throw new Error("No input text");let M=e.M,B,I;return typeof x<"u"&&(M=e.from(x.errorCorrectionLevel,e.M),B=l.from(x.version),I=s.from(x.maskPattern),x.toSJISFunc&&n.setToSJISFunction(x.toSJISFunc)),R(b,B,M,I)},Ms}var zs={},Ws={},Zd;function dp(){return Zd||(Zd=1,(function(n){function e(t){if(typeof t=="number"&&(t=t.toString()),typeof t!="string")throw new Error("Color should be defined as hex string");let i=t.slice().replace("#","").split("");if(i.length<3||i.length===5||i.length>8)throw new Error("Invalid hex color: "+t);(i.length===3||i.length===4)&&(i=Array.prototype.concat.apply([],i.map(function(r){return[r,r]}))),i.length===6&&i.push("F","F");const o=parseInt(i.join(""),16);return{r:o>>24&255,g:o>>16&255,b:o>>8&255,a:o&255,hex:"#"+i.slice(0,6).join("")}}n.getOptions=function(i){i||(i={}),i.color||(i.color={});const o=typeof i.margin>"u"||i.margin===null||i.margin<0?4:i.margin,r=i.width&&i.width>=21?i.width:void 0,s=i.scale||4;return{width:r,scale:r?4:s,margin:o,color:{dark:e(i.color.dark||"#000000ff"),light:e(i.color.light||"#ffffffff")},type:i.type,rendererOpts:i.rendererOpts||{}}},n.getScale=function(i,o){return o.width&&o.width>=i+o.margin*2?o.width/(i+o.margin*2):o.scale},n.getImageWidth=function(i,o){const r=n.getScale(i,o);return Math.floor((i+o.margin*2)*r)},n.qrToImageData=function(i,o,r){const s=o.modules.size,a=o.modules.data,c=n.getScale(s,r),l=Math.floor((s+r.margin*2)*c),f=r.margin*c,p=[r.color.light,r.color.dark];for(let h=0;h<l;h++)for(let m=0;m<l;m++){let v=(h*l+m)*4,y=r.color.light;if(h>=f&&m>=f&&h<l-f&&m<l-f){const g=Math.floor((h-f)/c),_=Math.floor((m-f)/c);y=p[a[g*s+_]?1:0]}i[v++]=y.r,i[v++]=y.g,i[v++]=y.b,i[v]=y.a}}})(Ws)),Ws}var Qd;function uS(){return Qd||(Qd=1,(function(n){const e=dp();function t(o,r,s){o.clearRect(0,0,r.width,r.height),r.style||(r.style={}),r.height=s,r.width=s,r.style.height=s+"px",r.style.width=s+"px"}function i(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}n.render=function(r,s,a){let c=a,l=s;typeof c>"u"&&(!s||!s.getContext)&&(c=s,s=void 0),s||(l=i()),c=e.getOptions(c);const f=e.getImageWidth(r.modules.size,c),p=l.getContext("2d"),h=p.createImageData(f,f);return e.qrToImageData(h.data,r,c),t(p,l,f),p.putImageData(h,0,0),l},n.renderToDataURL=function(r,s,a){let c=a;typeof c>"u"&&(!s||!s.getContext)&&(c=s,s=void 0),c||(c={});const l=n.render(r,s,c),f=c.type||"image/png",p=c.rendererOpts||{};return l.toDataURL(f,p.quality)}})(zs)),zs}var qs={},jd;function dS(){if(jd)return qs;jd=1;const n=dp();function e(o,r){const s=o.a/255,a=r+'="'+o.hex+'"';return s<1?a+" "+r+'-opacity="'+s.toFixed(2).slice(1)+'"':a}function t(o,r,s){let a=o+r;return typeof s<"u"&&(a+=" "+s),a}function i(o,r,s){let a="",c=0,l=!1,f=0;for(let p=0;p<o.length;p++){const h=Math.floor(p%r),m=Math.floor(p/r);!h&&!l&&(l=!0),o[p]?(f++,p>0&&h>0&&o[p-1]||(a+=l?t("M",h+s,.5+m+s):t("m",c,0),c=0,l=!1),h+1<r&&o[p+1]||(a+=t("h",f),f=0)):c++}return a}return qs.render=function(r,s,a){const c=n.getOptions(s),l=r.modules.size,f=r.modules.data,p=l+c.margin*2,h=c.color.light.a?"<path "+e(c.color.light,"fill")+' d="M0 0h'+p+"v"+p+'H0z"/>':"",m="<path "+e(c.color.dark,"stroke")+' d="'+i(f,l,c.margin)+'"/>',v='viewBox="0 0 '+p+" "+p+'"',g='<svg xmlns="http://www.w3.org/2000/svg" '+(c.width?'width="'+c.width+'" height="'+c.width+'" ':"")+v+' shape-rendering="crispEdges">'+h+m+`</svg>
`;return typeof a=="function"&&a(null,g),g},qs}var ef;function fS(){if(ef)return Fi;ef=1;const n=XE(),e=cS(),t=uS(),i=dS();function o(r,s,a,c,l){const f=[].slice.call(arguments,1),p=f.length,h=typeof f[p-1]=="function";if(!h&&!n())throw new Error("Callback required as last argument");if(h){if(p<2)throw new Error("Too few arguments provided");p===2?(l=a,a=s,s=c=void 0):p===3&&(s.getContext&&typeof l>"u"?(l=c,c=void 0):(l=c,c=a,a=s,s=void 0))}else{if(p<1)throw new Error("Too few arguments provided");return p===1?(a=s,s=c=void 0):p===2&&!s.getContext&&(c=a,a=s,s=void 0),new Promise(function(m,v){try{const y=e.create(a,c);m(r(y,s,c))}catch(y){v(y)}})}try{const m=e.create(a,c);l(null,r(m,s,c))}catch(m){l(m)}}return Fi.create=e.create,Fi.toCanvas=o.bind(null,t.render),Fi.toDataURL=o.bind(null,t.renderToDataURL),Fi.toString=o.bind(null,function(r,s,a){return i.render(r,a)}),Fi}var hS=fS();const pS=dh(hS);async function mS(n,e,t={}){const i=t.size||220,o=t.colorDark||"#1a1a2e",r=t.colorLight||"#ffffff";n.innerHTML=`
    <div class="qr-card glass-card">
      <div class="qr-wrapper" id="qr-wrapper">
        <canvas id="qr-canvas"></canvas>
        <div class="qr-heart-overlay">💖</div>
      </div>
      <div class="qr-label">Scan to open the birthday surprise</div>
    </div>
  `;const s=document.getElementById("qr-canvas");try{await pS.toCanvas(s,e,{width:i,margin:2,color:{dark:o,light:r},errorCorrectionLevel:"H"});const a=document.getElementById("qr-wrapper");a&&(a.style.boxShadow="0 0 30px rgba(255, 45, 117, 0.15)")}catch(a){console.error("QR generation failed:",a),n.innerHTML='<p style="color: var(--text-muted);">Failed to generate QR code</p>'}}function gS(){const n=document.getElementById("qr-canvas");if(!n)return;const e=document.createElement("a");e.download="birthday-surprise-qr.png",e.href=n.toDataURL("image/png"),e.click()}function _S(n,e,t=""){const i=encodeURIComponent(e),o=encodeURIComponent(t||"🎉 A special birthday surprise is waiting!"),r=encodeURIComponent(`${t||"🎉 A special birthday surprise is waiting!"}

Open the celebration here:
${e}`);n.innerHTML=`
    <div class="share-section">
      <h3 class="text-gradient">Share the Surprise ✨</h3>
      <div class="share-buttons">
        <button class="share-btn share-btn-telegram" id="share-telegram" title="Share on Telegram">
          <span class="share-btn-icon">✈️</span>
          <span>Share on Telegram</span>
        </button>
        <button class="share-btn share-btn-whatsapp" id="share-whatsapp" title="Share on WhatsApp">
          <span class="share-btn-icon">💬</span>
          <span>Share on WhatsApp</span>
        </button>
        <button class="share-btn share-btn-copy" id="share-copy" title="Copy link">
          <span class="share-btn-icon">🔗</span>
          <span>Copy Link</span>
        </button>
      </div>

      <div class="link-preview" style="margin-top: var(--space-lg);">
        <span>🔗</span>
        <code id="share-link-text">${e}</code>
      </div>
    </div>
  `,document.getElementById("share-telegram").addEventListener("click",()=>{window.open(`https://t.me/share/url?url=${i}&text=${o}`,"_blank")}),document.getElementById("share-whatsapp").addEventListener("click",()=>{window.open(`https://wa.me/?text=${r}`,"_blank")}),document.getElementById("share-copy").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(e);const s=document.getElementById("share-copy"),a=s.querySelector("span:last-child").textContent;s.querySelector("span:last-child").textContent="Copied! ✓",s.style.borderColor="#00ff88",setTimeout(()=>{s.querySelector("span:last-child").textContent=a,s.style.borderColor=""},2e3)}catch{const s=document.createElement("input");s.value=e,document.body.appendChild(s),s.select(),document.execCommand("copy"),document.body.removeChild(s)}})}function vS(n,e){n.innerHTML=`
    <div class="celebration-share-buttons">
      <button class="btn btn-primary" onclick="window.open('https://t.me/share/url?url=${encodeURIComponent(e)}&text=${encodeURIComponent("🎉 A birthday surprise just unlocked!")}', '_blank')">
        ✈️ Share on Telegram
      </button>
      <button class="btn btn-secondary" onclick="window.open('https://wa.me/?text=${encodeURIComponent(`🎉 A birthday surprise just unlocked!

`+e)}', '_blank')">
        💬 Share on WhatsApp
      </button>
      <button class="btn btn-secondary" id="inline-copy-btn">
        🔗 Copy Link
      </button>
    </div>
  `,setTimeout(()=>{const t=document.getElementById("inline-copy-btn");t&&t.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(e),t.textContent="✓ Copied!",setTimeout(()=>{t.textContent="🔗 Copy Link"},2e3)}catch{}})},100)}const lc="gemini_api_key";function fp(){return localStorage.getItem(lc)||""}function yS(n){localStorage.setItem(lc,n)}async function xS(n){var o,r,s,a,c,l,f;const e=fp();if(!e)throw new Error("Gemini API key not set. Please enter your API key in settings.");const t=new nc({apiKey:e}),i=`Write a short, fun, and emotional 30-second birthday song.

Details:
- Name: ${n.name}
- Age: ${n.age||"not specified"}
- Relationship: ${n.relationship||"friend"}
- Personality Style: ${n.personalityStyle||"fun"}
- Favorite Hobby: ${n.hobby||"not specified"}

Song requirements:
- Must be singable in about 30 seconds
- Include the person's name in the chorus
- Make it feel personal and special
- Structure: Short Intro → Verse → Chorus
- Style: ${n.personalityStyle==="romantic"?"sweet and romantic":n.personalityStyle==="funny"?"funny and playful":n.personalityStyle==="royal"?"grand and majestic":"fun, catchy, and celebratory"}
- Add emoji decorations between sections
- End with a sweet closing line

Format the output as lyrics only. Use 🎵 at the start and end.`;try{const p=await t.models.generateContent({model:"gemini-2.5-flash",contents:i});return p.text||((c=(a=(s=(r=(o=p.candidates)==null?void 0:o[0])==null?void 0:r.content)==null?void 0:s.parts)==null?void 0:a[0])==null?void 0:c.text)||"Could not generate song."}catch(p){throw console.error("Gemini API error:",p),(l=p.message)!=null&&l.includes("API_KEY")||(f=p.message)!=null&&f.includes("401")?new Error("Invalid API key. Please check your Gemini API key."):new Error("Failed to generate song. Please try again.")}}function Xa(n,e){const t=fp();n.innerHTML=`
    <div class="glass-card-strong" style="margin-top: var(--space-xl);">
      <h3 style="font-size: 1.25rem; margin-bottom: var(--space-lg);">
        <span class="text-gradient">🎵 AI Birthday Song Generator</span>
      </h3>

      ${t?`
        <div style="display:flex; align-items:center; gap: 8px; margin-bottom: var(--space-md);">
          <span style="color: #00ff88; font-size: 0.875rem;">✓ API Key saved</span>
          <button class="btn btn-secondary" id="change-key-btn" type="button" 
            style="padding: 6px 12px; font-size: 0.75rem;">Change</button>
        </div>
      `:`
        <div class="form-group">
          <label class="form-label">Enter your Gemini API Key</label>
          <div style="display:flex; gap: 8px;">
            <input class="form-input" type="password" id="gemini-key-input" 
              placeholder="Your Gemini API key..." style="flex:1;" />
            <button class="btn btn-secondary" id="save-key-btn" type="button">Save</button>
          </div>
          <p style="font-size:0.75rem; color:var(--text-muted); margin-top:6px;">
            Get a free key at <a href="https://aistudio.google.com/apikey" target="_blank" 
            style="color:var(--accent-1);">aistudio.google.com</a>. Stored locally only.
          </p>
        </div>
      `}

      <div id="song-extra-fields" style="display:${t?"block":"none"};">
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap: var(--space-md); margin-bottom: var(--space-md);">
          <div class="form-group" style="margin:0;">
            <label class="form-label">Age (optional)</label>
            <input class="form-input" type="number" id="song-age" placeholder="e.g. 25" min="1" max="120" />
          </div>
          <div class="form-group" style="margin:0;">
            <label class="form-label">Favorite Hobby</label>
            <input class="form-input" type="text" id="song-hobby" placeholder="e.g. painting" />
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Song Style</label>
          <div style="display:flex; gap:8px; flex-wrap:wrap;">
            <button type="button" class="theme-option active" data-song-style="fun">🎉 Fun</button>
            <button type="button" class="theme-option" data-song-style="romantic">💕 Romantic</button>
            <button type="button" class="theme-option" data-song-style="funny">😂 Funny</button>
            <button type="button" class="theme-option" data-song-style="royal">👑 Royal</button>
          </div>
        </div>
        <button class="btn btn-primary" id="generate-song-btn" type="button" style="width:100%;">
          🎵 Generate Birthday Song
        </button>
      </div>

      <div id="song-output" style="display:none; margin-top: var(--space-lg);">
        <div class="glass-card" style="background: rgba(255,45,117,0.05); border-color: rgba(255,45,117,0.2);">
          <pre id="song-lyrics" style="white-space:pre-wrap; font-family:var(--font-primary); 
            line-height:1.8; color:var(--text-secondary); font-size:0.9375rem;"></pre>
        </div>
        <div style="display:flex; gap:8px; margin-top:var(--space-md); flex-wrap:wrap;">
          <button class="btn btn-secondary" id="copy-song-btn" type="button">📋 Copy Lyrics</button>
          <button class="btn btn-secondary" id="share-song-tg-btn" type="button">✈️ Share on Telegram</button>
          <button class="btn btn-secondary" id="regenerate-song-btn" type="button">🔄 Regenerate</button>
        </div>
      </div>

      <div id="song-loading" style="display:none; text-align:center; padding: var(--space-xl) 0;">
        <div style="font-size:2rem; animation: heartbeat 1.5s ease infinite;">🎵</div>
        <p style="color:var(--text-secondary); margin-top: var(--space-sm);">Composing your birthday song...</p>
      </div>

      <div id="song-error" style="display:none; color:#ff6b6b; padding:var(--space-md) 0; font-size:0.875rem;"></div>
    </div>
  `;let i="fun",o="";const r=document.getElementById("save-key-btn");r&&r.addEventListener("click",()=>{const p=document.getElementById("gemini-key-input").value.trim();p&&(yS(p),Xa(n,e))});const s=document.getElementById("change-key-btn");s&&s.addEventListener("click",()=>{localStorage.removeItem(lc),Xa(n,e)}),n.querySelectorAll("[data-song-style]").forEach(p=>{p.addEventListener("click",()=>{n.querySelectorAll("[data-song-style]").forEach(h=>h.classList.remove("active")),p.classList.add("active"),i=p.dataset.songStyle})});const a=document.getElementById("generate-song-btn");a&&a.addEventListener("click",async()=>{var v,y;const p=document.getElementById("song-loading"),h=document.getElementById("song-output"),m=document.getElementById("song-error");p.style.display="block",h.style.display="none",m.style.display="none",a.disabled=!0;try{o=await xS({name:e.name,age:((v=document.getElementById("song-age"))==null?void 0:v.value)||"",relationship:e.relationship,personalityStyle:i,hobby:((y=document.getElementById("song-hobby"))==null?void 0:y.value)||""}),document.getElementById("song-lyrics").textContent=o,h.style.display="block",p.style.display="none"}catch(g){m.textContent=g.message,m.style.display="block",p.style.display="none"}a.disabled=!1});const c=document.getElementById("copy-song-btn");c&&c.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(o),c.textContent="✓ Copied!",setTimeout(()=>{c.textContent="📋 Copy Lyrics"},2e3)}catch{}});const l=document.getElementById("share-song-tg-btn");l&&l.addEventListener("click",()=>{const p=encodeURIComponent(`🎵 Birthday Song for ${e.name}!

${o}`);window.open(`https://t.me/share/url?url=&text=${p}`,"_blank")});const f=document.getElementById("regenerate-song-btn");f&&f.addEventListener("click",()=>{a==null||a.click()})}function ES(n,e){const t=rc(e);if(!t){n.innerHTML=`
      <div class="form-page" style="display:flex;align-items:center;justify-content:center;min-height:100vh;">
        <div class="glass-card text-center" style="max-width:400px;">
          <h2 style="margin-bottom: 16px;">Birthday Not Found 😢</h2>
          <p style="color:var(--text-secondary); margin-bottom: 24px;">This birthday page doesn't exist or has been removed.</p>
          <button class="btn btn-primary" onclick="window.location.hash='#/create'">Create New Birthday</button>
        </div>
      </div>
    `;return}const i=ic(t.theme),o=t.customMessage||sp(t.name,t.relationship,t.mood),r=BE(t.name),s=window.location.origin+window.location.pathname,a=`${s}#/birthday/${e}`,c=`${s}#/birthday/${e}/surprise`;n.innerHTML=`
    <div class="preview-page">
      <div class="container">
        <button class="form-back" id="preview-back">← Back to Form</button>

        <div class="preview-header">
          <h1 class="text-gradient">Your Birthday Surprise is Ready! 🎉</h1>
          <p style="color: var(--text-secondary);">Preview the design, then share the magic</p>
        </div>

        <div class="preview-layout">
          <!-- Left: Birthday Card -->
          <div>
            <div class="glass-card-strong birthday-card-preview" id="birthday-card">
              <div style="position:relative; z-index:2; padding: 24px;">
                <div style="text-align:center; margin-bottom: 20px; font-size: 3rem;">
                  ${i.balloonColors.slice(0,3).join(" ")}
                </div>
                <h2 class="birthday-card-name text-gradient">Happy Birthday</h2>
                <h2 class="birthday-card-name" style="font-size: clamp(2rem, 5vw, 3rem);">${t.name}!</h2>
                
                <div id="heart-collage-area" class="heart-collage-container" style="width:100%; max-width:350px; margin: 20px auto; aspect-ratio:1;"></div>
                
                <p class="birthday-card-message">${o}</p>
              </div>
            </div>

            ${t.photos&&t.photos.length>0?`
            <div style="text-align:center; margin-top: var(--space-md);">
              <button class="btn btn-secondary download-collage-btn" id="download-collage">
                📥 Download Heart Collage
              </button>
            </div>
            `:""}

            <!-- Poem -->
            <div class="glass-card" style="margin-top: var(--space-lg); text-align: center;">
              <p class="font-script" style="font-size: 1.125rem; color: var(--text-secondary); line-height: 2; white-space: pre-line;">${r}</p>
            </div>

            <!-- Song Generator -->
            <div id="song-section"></div>
          </div>

          <!-- Right: QR & Share -->
          <div>
            <div class="qr-section">
              <h3 style="font-size: 1.25rem; margin-bottom: var(--space-lg);">📱 QR Code</h3>
              <div id="qr-container"></div>

              <div class="qr-actions" style="margin-top: var(--space-lg);">
                <button class="btn btn-primary" id="download-qr">📥 Download QR</button>
                <button class="btn btn-secondary" id="view-celebration">🎆 View Celebration</button>
              </div>
            </div>

            <div id="share-container" style="margin-top: var(--space-xl);"></div>

            <!-- Secret Surprise Link -->
            <div class="glass-card" style="margin-top: var(--space-lg);">
              <h4 style="font-size: 0.9375rem; margin-bottom: var(--space-sm); color: var(--accent-1);">
                🔐 Viral Surprise Mode
              </h4>
              <p style="font-size: 0.8125rem; color: var(--text-muted); margin-bottom: var(--space-sm);">
                Share the countdown link — celebration unlocks automatically!
              </p>
              <div style="display:flex; flex-direction:column; gap: 8px;">
                <div class="link-preview" style="margin:0;">
                  <span>⏱</span>
                  <code style="color:var(--accent-1); font-size:0.75rem; word-break:break-all;">${a}</code>
                </div>
                <div class="link-preview" style="margin:0;">
                  <span>🔓</span>
                  <code style="color:var(--accent-3); font-size:0.75rem; word-break:break-all;">${c}</code>
                </div>
              </div>
              <div style="display:flex; gap:8px; margin-top: var(--space-md);">
                <button class="btn btn-secondary" id="share-countdown-invite" style="flex:1; font-size:0.8125rem; padding:10px;">
                  ✈️ Send Countdown Invite
                </button>
                <button class="btn btn-secondary" id="copy-surprise-link" style="flex:1; font-size:0.8125rem; padding:10px;">
                  🔗 Copy Secret Link
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer Actions -->
        <div class="preview-footer">
          <div class="preview-footer-buttons">
            <button class="btn btn-secondary" onclick="window.location.hash='#/create'">🔄 Create Another</button>
            <button class="btn btn-primary" id="open-celebration">🎉 Open Celebration Page</button>
          </div>
          ${t.photos&&t.photos.length>0?`
          <div style="text-align:center; margin-top: var(--space-md);">
            <button class="btn btn-secondary" id="explore-galaxy-preview"
              style="background:linear-gradient(135deg,#1a0533,#0f0f2e); border:1px solid rgba(123,47,247,0.4);">
              🚀 Explore Memory Galaxy
            </button>
          </div>
          `:""}
        </div>
      </div>
    </div>
  `,document.getElementById("preview-back").addEventListener("click",()=>{window.location.hash="#/create"});let l=null;t.photos&&t.photos.length>0&&setTimeout(()=>{const h=document.getElementById("heart-collage-area");h&&(l=new ap(h,t.photos,{cellSize:45,style:t.collageStyle||"classic"}),l.render())},300);const f=document.getElementById("download-collage");f&&f.addEventListener("click",()=>{l&&l.downloadAsImage(`${t.name}-birthday-collage.png`)}),setTimeout(()=>{mS(document.getElementById("qr-container"),a)},200),_S(document.getElementById("share-container"),a,`🎂 A special birthday surprise for ${t.name} is waiting!`),Xa(document.getElementById("song-section"),t),document.getElementById("download-qr").addEventListener("click",gS),document.getElementById("view-celebration").addEventListener("click",()=>{window.location.hash=`#/birthday/${e}`}),document.getElementById("open-celebration").addEventListener("click",()=>{window.location.hash=`#/birthday/${e}`});const p=document.getElementById("explore-galaxy-preview");p&&p.addEventListener("click",()=>{window.location.hash=`#/galaxy/${e}`}),document.getElementById("share-countdown-invite").addEventListener("click",()=>{const h=encodeURIComponent(`🎂 You're invited to a birthday countdown!

The celebration for ${t.name} starts soon.

Join here:
${a}`);window.open(`https://t.me/share/url?url=${encodeURIComponent(a)}&text=${h}`,"_blank")}),document.getElementById("copy-surprise-link").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(c);const h=document.getElementById("copy-surprise-link");h.textContent="✓ Copied!",setTimeout(()=>{h.textContent="🔗 Copy Secret Link"},2e3)}catch{}})}class SS{constructor(e,t,i){this.container=e,this.targetTime=new Date(t).getTime(),this.onComplete=i,this.interval=null,this.completed=!1}render(){this.container.innerHTML=`
      <div class="countdown-clock" id="countdown-clock">
        <div class="countdown-unit">
          <div class="countdown-number" id="cd-days">00</div>
          <div class="countdown-label">Days</div>
        </div>
        <div class="countdown-separator">:</div>
        <div class="countdown-unit">
          <div class="countdown-number" id="cd-hours">00</div>
          <div class="countdown-label">Hours</div>
        </div>
        <div class="countdown-separator">:</div>
        <div class="countdown-unit">
          <div class="countdown-number" id="cd-minutes">00</div>
          <div class="countdown-label">Minutes</div>
        </div>
        <div class="countdown-separator">:</div>
        <div class="countdown-unit">
          <div class="countdown-number" id="cd-seconds">00</div>
          <div class="countdown-label">Seconds</div>
        </div>
      </div>
    `}start(){this.render(),this.update(),this.interval=setInterval(()=>this.update(),1e3)}update(){const e=Date.now(),t=this.targetTime-e;if(t<=0&&!this.completed){this.completed=!0,clearInterval(this.interval),this.setValues(0,0,0,0),this.onComplete&&this.onComplete();return}const i=Math.floor(t/(1e3*60*60*24)),o=Math.floor(t%(1e3*60*60*24)/(1e3*60*60)),r=Math.floor(t%(1e3*60*60)/(1e3*60)),s=Math.floor(t%(1e3*60)/1e3);this.setValues(i,o,r,s)}setValues(e,t,i,o){const r=f=>String(f).padStart(2,"0"),s=document.getElementById("cd-days"),a=document.getElementById("cd-hours"),c=document.getElementById("cd-minutes"),l=document.getElementById("cd-seconds");if(s&&(s.textContent=r(e)),a&&(a.textContent=r(t)),c&&(c.textContent=r(i)),l){const f=l.textContent,p=r(o);f!==p&&(l.textContent=p,l.style.transform="scale(1.1)",setTimeout(()=>{l.style.transform="scale(1)"},150))}}destroy(){clearInterval(this.interval)}}function TS(n){const{date:e,timerMode:t,timerValue:i}=n;if(t==="midnight"){const o=new Date(e);return o.setHours(0,0,0,0),o.getTime()}if(t==="specific"&&n.time){const o=new Date(e),[r,s]=n.time.split(":");return o.setHours(parseInt(r),parseInt(s),0,0),o.getTime()}if(t==="delay"){const o=(i||30)*1e3;return Date.now()+o}return Date.now()+3e4}class MS{constructor(e){this.canvas=e,this.ctx=e.getContext("2d"),this.rockets=[],this.particles=[],this.running=!1,this.autoMode=!1,this.autoInterval=null,this.style="classic",this.resizeHandler=()=>this.resize(),this.clickHandler=t=>this.handleClick(t),this.touchHandler=t=>this.handleTouch(t),this.keyHandler=t=>this.handleKey(t),this.STYLES={classic:{colors:["#ff2d75","#7b2ff7","#00d4ff","#ff6b35","#ffd700","#ff1493"],shape:"circle"},heart:{colors:["#ff2d75","#ff69b4","#ff1493","#dc143c","#ff6b81","#e91e63"],shape:"heart"},star:{colors:["#ffd700","#ffdf00","#f0e68c","#fff8dc","#ffa500","#ff8c00"],shape:"star"},rainbow:{colors:["#ff0000","#ff7f00","#ffff00","#00ff00","#0000ff","#4b0082","#9400d3"],shape:"circle"},golden:{colors:["#ffd700","#daa520","#b8860b","#cd853f","#f0e68c","#ffdf00"],shape:"circle"}}}resize(){this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight}start(){this.resize(),window.addEventListener("resize",this.resizeHandler),this.canvas.addEventListener("click",this.clickHandler),this.canvas.addEventListener("touchstart",this.touchHandler,{passive:!0}),document.addEventListener("keydown",this.keyHandler),this.running=!0,this.animate()}destroy(){this.running=!1,this.stopAutoMode(),window.removeEventListener("resize",this.resizeHandler),this.canvas.removeEventListener("click",this.clickHandler),this.canvas.removeEventListener("touchstart",this.touchHandler),document.removeEventListener("keydown",this.keyHandler)}setStyle(e){this.style=e}startAutoMode(e=2e3){this.autoMode=!0,this.autoInterval=setInterval(()=>{const t=Math.random()*this.canvas.width,i=this.canvas.height*(.15+Math.random()*.35);this.launchRocket(t,i)},e)}stopAutoMode(){this.autoMode=!1,this.autoInterval&&clearInterval(this.autoInterval),this.autoInterval=null}handleClick(e){const t=this.canvas.getBoundingClientRect(),i=e.clientX-t.left,o=e.clientY-t.top;this.launchRocket(i,Math.min(o,this.canvas.height*.7))}handleTouch(e){const t=e.touches[0],i=this.canvas.getBoundingClientRect(),o=t.clientX-i.left,r=t.clientY-i.top;this.launchRocket(o,Math.min(r,this.canvas.height*.7))}handleKey(e){if(e.code==="Space"&&!e.repeat){e.preventDefault();const t=this.canvas.width*(.2+Math.random()*.6),i=this.canvas.height*(.15+Math.random()*.3);this.launchRocket(t,i)}}launchRocket(e,t){const i=this.STYLES[this.style]||this.STYLES.classic;this.rockets.push({x:e,y:this.canvas.height,targetY:t,speed:4+Math.random()*3,trail:[],color:i.colors[Math.floor(Math.random()*i.colors.length)],style:this.style,styleConfig:i})}explode(e){const t=60+Math.floor(Math.random()*40),{styleConfig:i}=e;for(let o=0;o<t;o++){let r,s;if(i.shape==="heart"){const a=o/t*Math.PI*2,c=16*Math.pow(Math.sin(a),3),l=-(13*Math.cos(a)-5*Math.cos(2*a)-2*Math.cos(3*a)-Math.cos(4*a));r=Math.atan2(l,c),s=Math.sqrt(c*c+l*l)*.25}else if(i.shape==="star"){const c=o%5/5*Math.PI*2-Math.PI/2,l=(Math.random()-.5)*.3;r=c+l,s=2+Math.random()*5}else r=Math.random()*Math.PI*2,s=1+Math.random()*5;this.particles.push({x:e.x,y:e.y,vx:Math.cos(r)*s,vy:Math.sin(r)*s,life:1,decay:.008+Math.random()*.012,color:i.colors[Math.floor(Math.random()*i.colors.length)],size:2+Math.random()*2,gravity:.03})}for(let o=0;o<20;o++)this.particles.push({x:e.x,y:e.y,vx:(Math.random()-.5)*8,vy:(Math.random()-.5)*8,life:1,decay:.03+Math.random()*.02,color:"#ffffff",size:1,gravity:.05})}animate(){if(!(!this.running&&this.rockets.length===0&&this.particles.length===0)){this.ctx.globalCompositeOperation="destination-out",this.ctx.fillStyle="rgba(0,0,0,0.15)",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.ctx.globalCompositeOperation="lighter";for(let e=this.rockets.length-1;e>=0;e--){const t=this.rockets[e];t.trail.push({x:t.x,y:t.y}),t.trail.length>15&&t.trail.shift(),t.y-=t.speed;for(let i=0;i<t.trail.length;i++){const o=i/t.trail.length;this.ctx.beginPath(),this.ctx.arc(t.trail[i].x,t.trail[i].y,2,0,Math.PI*2),this.ctx.fillStyle=t.color,this.ctx.globalAlpha=o*.6,this.ctx.fill()}this.ctx.globalAlpha=1,this.ctx.beginPath(),this.ctx.arc(t.x,t.y,3,0,Math.PI*2),this.ctx.fillStyle="#ffffff",this.ctx.fill(),t.y<=t.targetY&&(this.explode(t),this.rockets.splice(e,1))}for(let e=this.particles.length-1;e>=0;e--){const t=this.particles[e];if(t.x+=t.vx,t.y+=t.vy,t.vy+=t.gravity,t.vx*=.99,t.life-=t.decay,t.life<=0){this.particles.splice(e,1);continue}this.ctx.globalAlpha=t.life,this.ctx.beginPath(),this.ctx.arc(t.x,t.y,t.size*t.life,0,Math.PI*2),this.ctx.fillStyle=t.color,this.ctx.fill(),this.ctx.beginPath(),this.ctx.arc(t.x,t.y,t.size*t.life*3,0,Math.PI*2),this.ctx.fillStyle=t.color,this.ctx.globalAlpha=t.life*.1,this.ctx.fill()}this.ctx.globalAlpha=1,this.ctx.globalCompositeOperation="source-over",(this.running||this.rockets.length>0||this.particles.length>0)&&requestAnimationFrame(()=>this.animate())}}}function AS(n,e){const t=[{id:"classic",emoji:"🎆",name:"Classic"},{id:"heart",emoji:"❤️",name:"Heart"},{id:"star",emoji:"⭐",name:"Star"},{id:"rainbow",emoji:"🌈",name:"Rainbow"},{id:"golden",emoji:"👑",name:"Golden"}],i=document.createElement("div");i.className="firework-style-selector",i.innerHTML=`
    <div class="firework-styles-bar">
      ${t.map(o=>`
        <button class="firework-style-btn ${o.id==="classic"?"active":""}" 
          data-style="${o.id}" title="${o.name}">
          ${o.emoji}
        </button>
      `).join("")}
    </div>
    <div class="firework-hint">Tap anywhere to launch fireworks! 🎆</div>
  `,i.querySelectorAll(".firework-style-btn").forEach(o=>{o.addEventListener("click",r=>{r.stopPropagation(),i.querySelectorAll(".firework-style-btn").forEach(s=>s.classList.remove("active")),o.classList.add("active"),e.setStyle(o.dataset.style)})}),n.appendChild(i)}class CS{constructor(e){this.canvas=e,this.ctx=e.getContext("2d"),this.particles=[],this.running=!1,this.resize(),window.addEventListener("resize",()=>this.resize())}resize(){this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight}start(e=1e4){this.running=!0,this.spawnBurst(200);const t=setInterval(()=>{this.running&&this.spawnBurst(30)},600);this.animate(),setTimeout(()=>{this.running=!1,clearInterval(t)},e)}spawnBurst(e){const t=["#ff2d75","#7b2ff7","#00d4ff","#ffd700","#ff6b9d","#00ff88","#ff8fab","#c44dff","#ffe066","#ff4444","#44ff44","#4444ff","#ff44ff","#44ffff","#ffff44"];for(let i=0;i<e;i++)this.particles.push({x:Math.random()*this.canvas.width,y:-20-Math.random()*100,w:6+Math.random()*6,h:4+Math.random()*8,color:t[Math.floor(Math.random()*t.length)],rotation:Math.random()*360,rotationSpeed:(Math.random()-.5)*8,vx:(Math.random()-.5)*3,vy:1+Math.random()*3,gravity:.04+Math.random()*.02,wobble:Math.random()*Math.PI*2,wobbleSpeed:.02+Math.random()*.04,alpha:1,shape:Math.random()>.5?"rect":"circle"})}animate(){if(!(!this.running&&this.particles.length===0)){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);for(let e=this.particles.length-1;e>=0;e--){const t=this.particles[e];t.wobble+=t.wobbleSpeed,t.x+=t.vx+Math.sin(t.wobble)*.5,t.y+=t.vy,t.vy+=t.gravity,t.rotation+=t.rotationSpeed,t.y>this.canvas.height+20&&(t.alpha-=.05),this.ctx.save(),this.ctx.translate(t.x,t.y),this.ctx.rotate(t.rotation*Math.PI/180),this.ctx.globalAlpha=Math.max(0,t.alpha),this.ctx.fillStyle=t.color,t.shape==="rect"?this.ctx.fillRect(-t.w/2,-t.h/2,t.w,t.h):(this.ctx.beginPath(),this.ctx.arc(0,0,t.w/2,0,Math.PI*2),this.ctx.fill()),this.ctx.restore(),t.alpha<=0&&this.particles.splice(e,1)}requestAnimationFrame(()=>this.animate())}}destroy(){this.running=!1,this.particles=[]}}class wS{constructor(e,t,i={}){this.container=e,this.photos=t,this.currentIndex=0,this.interval=null,this.duration=i.duration||3e3,this.transition=i.transition||"fade",this.onComplete=i.onComplete||null,this.loops=i.loops||1,this.currentLoop=0}render(){this.container.innerHTML=`
      <div class="slideshow-overlay" id="slideshow-overlay">
        <button class="slideshow-close" id="slideshow-close">✕</button>
        <div class="slideshow-content" style="position:relative; width:80%; max-width:600px;">
          <img class="slideshow-image" id="slideshow-img" src="${this.photos[0]}" alt="Memory" />
          <div style="text-align:center; margin-top: 16px; color: rgba(255,255,255,0.5); font-size: 0.875rem;">
            <span id="slideshow-counter">1 / ${this.photos.length}</span>
          </div>
        </div>
      </div>
    `,document.getElementById("slideshow-close").addEventListener("click",()=>this.stop())}start(){this.photos.length!==0&&(this.render(),this.currentIndex=0,this.showCurrent(),this.interval=setInterval(()=>this.next(),this.duration))}next(){if(this.currentIndex++,this.currentIndex>=this.photos.length){if(this.currentLoop++,this.currentLoop>=this.loops){this.stop();return}this.currentIndex=0}this.showCurrent()}showCurrent(){const e=document.getElementById("slideshow-img"),t=document.getElementById("slideshow-counter");if(!e)return;const i={fade:()=>{e.style.transition="opacity 0.6s ease",e.style.opacity="0",setTimeout(()=>{e.src=this.photos[this.currentIndex],e.style.opacity="1"},300)},zoom:()=>{e.style.transition="transform 0.6s ease, opacity 0.6s ease",e.style.transform="scale(0.8)",e.style.opacity="0",setTimeout(()=>{e.src=this.photos[this.currentIndex],e.style.transform="scale(1)",e.style.opacity="1"},300)},flip:()=>{e.style.transition="transform 0.4s ease",e.style.transform="rotateY(90deg)",setTimeout(()=>{e.src=this.photos[this.currentIndex],e.style.transform="rotateY(0deg)"},400)}};(i[this.transition]||i.fade)(),t&&(t.textContent=`${this.currentIndex+1} / ${this.photos.length}`)}stop(){clearInterval(this.interval);const e=document.getElementById("slideshow-overlay");e&&(e.style.transition="opacity 0.3s ease",e.style.opacity="0",setTimeout(()=>e.remove(),300)),this.onComplete&&this.onComplete()}}const hp="reactions_",Qr=[{id:"hearts",emoji:"❤️",label:"Hearts"},{id:"balloons",emoji:"🎈",label:"Balloons"},{id:"cake",emoji:"🎂",label:"Cake"},{id:"confetti",emoji:"🎉",label:"Confetti"},{id:"stars",emoji:"⭐",label:"Stars"},{id:"fire",emoji:"🔥",label:"Fire"}];function pp(n){try{return JSON.parse(localStorage.getItem(hp+n)||"{}")}catch{return{}}}function bS(n,e){const t=pp(n);return t[e]=(t[e]||0)+1,localStorage.setItem(hp+n,JSON.stringify(t)),t[e]}function tf(n){return n?n>=1e3?(n/1e3).toFixed(1)+"k":n.toString():"0"}function IS(n,e,t,i){const o=12+Math.floor(Math.random()*8);for(let r=0;r<o;r++){const s=document.createElement("div");s.textContent=e,s.className="emoji-particle";const a=r/o*Math.PI*2,c=60+Math.random()*80,l=Math.cos(a)*c,f=Math.sin(a)*c-40,p=.8+Math.random()*.6,h=16+Math.random()*16;s.style.cssText=`
      position: fixed; left: ${t}px; top: ${i}px;
      font-size: ${h}px; pointer-events: none; z-index: 9999;
      opacity: 1; transform: scale(0);
      transition: all ${p}s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    `,n.appendChild(s),requestAnimationFrame(()=>{s.style.transform=`translate(${l}px, ${f}px) scale(1) rotate(${Math.random()*360}deg)`,s.style.opacity="0"}),setTimeout(()=>s.remove(),p*1e3+100)}}function mp(n,e,t=3e3){const i=Date.now()+t;function o(){if(Date.now()>=i)return;const r=document.createElement("div");r.textContent=e,r.className="emoji-rain-drop",r.style.cssText=`
      position: fixed;
      left: ${Math.random()*100}vw;
      top: -30px;
      font-size: ${20+Math.random()*20}px;
      pointer-events: none;
      z-index: 9998;
      opacity: 0.8;
      animation: emojiRainFall ${2+Math.random()*2}s linear forwards;
    `,n.appendChild(r),setTimeout(()=>r.remove(),4500),setTimeout(o,80+Math.random()*120)}o()}function RS(n,e){const t=pp(e),i=document.createElement("div");return i.className="reaction-bar",i.innerHTML=`
    <div class="reaction-bar-inner">
      ${Qr.map(o=>`
        <button class="reaction-btn" data-reaction="${o.id}" title="${o.label}">
          <span class="reaction-emoji">${o.emoji}</span>
          <span class="reaction-count" id="count-${o.id}">${tf(t[o.id])}</span>
        </button>
      `).join("")}
    </div>
  `,PS(),i.querySelectorAll(".reaction-btn").forEach(o=>{o.addEventListener("click",r=>{r.stopPropagation();const s=o.dataset.reaction,a=Qr.find(p=>p.id===s),c=bS(e,s),l=document.getElementById(`count-${s}`);l&&(l.textContent=tf(c)),o.classList.add("reaction-bounce"),setTimeout(()=>o.classList.remove("reaction-bounce"),400);const f=o.getBoundingClientRect();IS(document.body,a.emoji,f.left+f.width/2,f.top),mp(document.body,a.emoji,2e3)})}),n.appendChild(i),i}function PS(){if(document.getElementById("reaction-styles"))return;const n=document.createElement("style");n.id="reaction-styles",n.textContent=`
    .reaction-bar {
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1000;
      pointer-events: auto;
    }
    .reaction-bar-inner {
      display: flex;
      gap: 6px;
      padding: 10px 16px;
      background: rgba(15, 15, 25, 0.85);
      backdrop-filter: blur(20px);
      border-radius: 50px;
      border: 1px solid rgba(255,255,255,0.1);
      box-shadow: 0 8px 32px rgba(0,0,0,0.4);
    }
    .reaction-btn {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2px;
      background: none;
      border: none;
      cursor: pointer;
      padding: 6px 10px;
      border-radius: 12px;
      transition: all 0.2s ease;
      color: #fff;
    }
    .reaction-btn:hover {
      background: rgba(255,255,255,0.1);
      transform: scale(1.1);
    }
    .reaction-btn:active { transform: scale(0.9); }
    .reaction-bounce {
      animation: reactionBounce 0.4s cubic-bezier(0.34,1.56,0.64,1);
    }
    .reaction-emoji { font-size: 1.5rem; }
    .reaction-count {
      font-size: 0.625rem;
      color: rgba(255,255,255,0.6);
      font-weight: 600;
    }
    @keyframes reactionBounce {
      0% { transform: scale(1); }
      40% { transform: scale(1.4); }
      100% { transform: scale(1); }
    }
    @keyframes emojiRainFall {
      0% { transform: translateY(0) rotate(0deg); opacity: 0.8; }
      100% { transform: translateY(105vh) rotate(360deg); opacity: 0; }
    }
    @media (max-width: 480px) {
      .reaction-bar-inner { gap: 2px; padding: 8px 10px; }
      .reaction-btn { padding: 4px 6px; }
      .reaction-emoji { font-size: 1.25rem; }
    }
  `,document.head.appendChild(n)}class DS{constructor(e){this.fireworks=e,this.active=!1,this.glowEl=null,this.rainInterval=null}toggle(){return this.active=!this.active,this.active?this.activate():this.deactivate(),this.active}activate(){this.active=!0,document.body.classList.add("party-mix-active"),this.fireworks&&this.fireworks.startAutoMode(1200),this.rainInterval=setInterval(()=>{const e=Qr[Math.floor(Math.random()*Qr.length)];mp(document.body,e.emoji,1500)},1500),this.glowEl=document.createElement("div"),this.glowEl.className="party-mode-glow",this.glowEl.style.cssText=`
      position: fixed; inset: 0; z-index: 0; pointer-events: none;
      background: radial-gradient(circle at 50% 50%, 
        rgba(255,45,117,0.1) 0%, transparent 60%);
      mix-blend-mode: screen;
      animation: partyMix 3s infinite steps(10);
    `,document.body.appendChild(this.glowEl),this.injectStyles()}deactivate(){this.active=!1,document.body.classList.remove("party-mix-active"),this.fireworks&&this.fireworks.stopAutoMode(),this.rainInterval&&(clearInterval(this.rainInterval),this.rainInterval=null),this.glowEl&&(this.glowEl.remove(),this.glowEl=null)}destroy(){this.deactivate()}injectStyles(){if(document.getElementById("party-mode-styles"))return;const e=document.createElement("style");e.id="party-mode-styles",e.textContent=`
      @keyframes partyMix {
        0%, 100% { filter: hue-rotate(0deg) contrast(1.1); transform: scale(1); }
        25% { filter: hue-rotate(90deg) contrast(1.2); transform: scale(1.02); }
        50% { filter: hue-rotate(180deg) contrast(1.1); transform: scale(1); }
        75% { filter: hue-rotate(270deg) contrast(1.2); transform: scale(1.02); }
      }
      body.party-mix-active {
        animation: partyBackgroundCycle 8s linear infinite;
      }
      @keyframes partyBackgroundCycle {
        0% { background-color: #0f101f; }
        33% { background-color: #1a0a10; }
        66% { background-color: #0d0121; }
        100% { background-color: #0f101f; }
      }
      .party-toggle {
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 1001;
        padding: 10px 18px;
        border-radius: 50px;
        border: 2px solid rgba(255,255,255,0.2);
        background: rgba(15,15,25,0.8);
        backdrop-filter: blur(10px);
        color: #fff;
        font-size: 0.875rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex; align-items: center; gap: 8px;
      }
      .party-toggle:hover {
        border-color: var(--accent-1);
        background: rgba(255,45,117,0.15);
      }
      .party-toggle.active {
        border-color: #ffd700;
        background: linear-gradient(135deg, rgba(255,45,117,0.4), rgba(255,215,0,0.4));
        box-shadow: 0 0 30px rgba(255,215,0,0.5);
        animation: partyBtnPulse 1s ease-in-out infinite, partyColorMix 2s linear infinite;
      }
      @keyframes partyBtnPulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
      }
      @keyframes partyColorMix {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
      }
    `,document.head.appendChild(e)}renderButton(e){this.injectStyles();const t=document.createElement("button");return t.className="party-toggle",t.innerHTML="🎊 Party Mode",t.addEventListener("click",i=>{i.stopPropagation();const o=this.toggle();t.classList.toggle("active",o),t.innerHTML=o?"🔥 Party Mix ON":"🎊 Party Mode"}),e.appendChild(t),t}}let Fn=[];function nf(n,e,t=!1){Fn.forEach(a=>{typeof a=="function"?a():a!=null&&a.destroy&&a.destroy()}),Fn=[];const i=rc(e);if(!i){n.innerHTML=`
      <div class="celebration-page" style="display:flex;align-items:center;justify-content:center;min-height:100vh;">
        <div class="glass-card text-center" style="max-width:400px;">
          <h2 style="margin-bottom:16px;">Birthday Not Found 😢</h2>
          <p style="color:var(--text-secondary);margin-bottom:24px;">This birthday page doesn't exist or has expired.</p>
          <button class="btn btn-primary" onclick="window.location.hash='#/create'">Create New One</button>
        </div>
      </div>`;return}ic(i.theme);const o=rp(i.theme),r=TS(i),s=r<=Date.now();t||s?gp(n,i,o):NS(n,i,o,r)}function NS(n,e,t,i){n.innerHTML=`
    <div class="celebration-page">
      <div class="bg-particles" id="countdown-particles"></div>
      <canvas class="confetti-canvas" id="countdown-stars-canvas"></canvas>
      <div class="countdown-container">
        <div style="font-size:3rem; margin-bottom:var(--space-lg); animation: heartbeat 1.5s ease infinite;">🎂</div>
        <div class="countdown-teaser">"Something magical is coming..."</div>
        <div id="countdown-area"></div>
        <div class="countdown-for" style="margin-top: var(--space-xl);">A birthday surprise for</div>
        <div class="countdown-name">${e.name}</div>
        <p style="color:var(--text-muted); font-size:0.8125rem; margin-top:var(--space-xl); max-width:300px; text-align:center;">
          ✨ Stay on this page — the celebration will unlock automatically!
        </p>
      </div>
      <div id="countdown-balloons"></div>
    </div>`,fo.injectStyles();const o=document.getElementById("countdown-particles"),r=new fo(o,{count:20,types:["heart","sparkle","circle"],colors:t.particleColors});r.start(),Fn.push(()=>r.stop()),LS(document.getElementById("countdown-stars-canvas"),t),Ya(t,"countdown-balloons",8,!0);const s=new SS(document.getElementById("countdown-area"),i,()=>{n.style.transition="all 0.8s ease",n.style.filter="brightness(3)",setTimeout(()=>{n.style.filter="",r.stop(),gp(n,e,t)},800)});s.start(),Fn.push(()=>s.destroy())}function gp(n,e,t){var y;const i=e.customMessage||sp(e.name,e.relationship,e.mood),r=`${window.location.origin+window.location.pathname}#/birthday/${e.id||"share"}`;n.innerHTML=`
    <div class="celebration-page">
      <canvas class="fireworks-canvas" id="fireworks-canvas" 
        style="position:fixed;inset:0;z-index:2;pointer-events:auto;"></canvas>
      <canvas class="confetti-canvas" id="confetti-canvas"></canvas>
      <div class="bg-particles" id="celebration-particles"></div>

      <!-- Title Overlay -->
      <div class="birthday-title-overlay" id="birthday-title-overlay">
        <div style="font-size:4rem; opacity:0; transform:scale(0);" id="title-emoji">🎉</div>
        <div class="birthday-title-main text-gradient" id="title-happy" style="opacity:0; transform:scale(0.5);">
          HAPPY BIRTHDAY
        </div>
        <div class="birthday-title-name text-gradient" id="title-name" style="opacity:0; transform:translateY(30px);">
          ${e.name}! 🎂
        </div>
        <div class="birthday-title-message" id="title-message" style="opacity:0; transform:translateY(20px);">
          ${i}
        </div>
      </div>

      <!-- Main Content -->
      <div class="celebration-container" id="celebration-content" style="opacity:0;">
        <div class="celebration-content">
          <div style="text-align:center; padding-top: 100vh;">
            ${e.photos&&e.photos.length>0?`
              <h3 style="font-size: 1.5rem; margin-bottom: var(--space-lg);">
                <span class="text-gradient">Precious Memories</span> 💝
              </h3>
              <div id="celebration-collage" class="heart-collage-container" 
                style="max-width:450px; margin: 0 auto var(--space-2xl);"></div>
            `:""}

            <div class="celebration-message-card glass-card-strong">
              <p class="font-script" style="font-size: 1.5rem; color: var(--accent-1); margin-bottom: 16px;">
                Dear ${e.name},
              </p>
              <p>${i}</p>
            </div>

            ${e.photos&&e.photos.length>0?`
              <h3 style="font-size: 1.25rem; margin-top: var(--space-2xl); margin-bottom: var(--space-lg);">
                📸 Photo Memories
              </h3>
              <div class="celebration-photos-grid" id="photo-grid">
                ${e.photos.map((g,_)=>`
                  <div class="celebration-photo" data-index="${_}">
                    <img src="${g}" alt="Memory ${_+1}" loading="lazy" />
                  </div>
                `).join("")}
              </div>
              <div style="text-align:center; margin-top: var(--space-xl);">
                <button class="btn btn-primary" id="explore-galaxy-btn" 
                  style="background: linear-gradient(135deg, #1a0533, #0f0f2e); border: 1px solid rgba(123,47,247,0.4);">
                  🚀 Explore Memory Galaxy
                </button>
              </div>
            `:""}

            <div class="celebration-share">
              <h3 class="text-gradient">🎉 A birthday surprise just unlocked!</h3>
              <p style="color:var(--text-secondary); margin-bottom:var(--space-lg); font-size:0.9375rem;">
                Share the celebration with everyone!
              </p>
              <div id="celebration-share-btns"></div>
            </div>
          </div>
        </div>
      </div>

      <div id="balloons-container"></div>
      <div id="firework-selector-container" style="position:fixed;top:70px;right:20px;z-index:1001;"></div>
      <div id="party-mode-container"></div>
      <div id="reaction-container"></div>
      <button class="music-toggle" id="music-toggle" title="Toggle Music">🎵</button>
    </div>`;const s=document.getElementById("fireworks-canvas"),a=new MS(s);a.start(),Fn.push(()=>a.destroy()),AS(document.getElementById("firework-selector-container"),a);for(let g=0;g<5;g++)setTimeout(()=>{const _=s.width*(.15+Math.random()*.7),E=s.height*(.1+Math.random()*.3);a.launchRocket(_,E)},500+g*800);setTimeout(()=>{const g=document.getElementById("confetti-canvas"),_=new CS(g);_.start(12e3),Fn.push(()=>_.destroy())},500),setTimeout(()=>Ya(t,"balloons-container",20,!1),800),setTimeout(()=>Ya(t,"balloons-container",10,!1),5e3);const c=(g,_,E)=>{setTimeout(()=>{const A=document.getElementById(g);A&&(A.style.transition=`all ${E.dur||"0.8s"} ${E.ease||"ease"}`,A.style.opacity="1",A.style.transform=E.to||"none")},_)};c("title-emoji",1e3,{to:"scale(1)",dur:"0.6s",ease:"cubic-bezier(0.34,1.56,0.64,1)"}),c("title-happy",1800,{to:"scale(1)",dur:"1s",ease:"cubic-bezier(0.34,1.56,0.64,1)"}),c("title-name",2800,{to:"translateY(0)"}),c("title-message",3800,{to:"translateY(0)"}),setTimeout(()=>{const g=document.getElementById("birthday-title-overlay");g&&(g.style.transition="opacity 1.2s ease",g.style.opacity="0",setTimeout(()=>g.style.pointerEvents="none",1200));const _=document.getElementById("celebration-content");_&&(_.style.transition="opacity 1s ease",_.style.opacity="1")},7e3),fo.injectStyles();const l=document.getElementById("celebration-particles"),f=new fo(l,{count:30,types:["heart","sparkle","circle"],colors:t.particleColors});f.start(),Fn.push(()=>f.stop()),((y=e.photos)==null?void 0:y.length)>0&&setTimeout(()=>{const g=document.getElementById("celebration-collage");g&&new ap(g,e.photos,{cellSize:50,style:e.collageStyle||"animated"}).render()},8e3),setTimeout(()=>{document.querySelectorAll(".celebration-photo").forEach(g=>{g.addEventListener("click",()=>{new wS(document.body,e.photos,{duration:3e3,transition:["fade","zoom","flip"][Math.floor(Math.random()*3)],loops:1}).start()})})},8e3),setTimeout(()=>{const g=document.getElementById("explore-galaxy-btn");g&&g.addEventListener("click",()=>{window.location.hash=`#/galaxy/${e.id||"shared"}`})},100);const p=document.getElementById("celebration-share-btns");p&&vS(p,r),RS(document.getElementById("reaction-container"),e.id||"shared");const h=new DS(a);h.renderButton(document.getElementById("party-mode-container")),Fn.push(()=>h.destroy());const m=document.getElementById("music-toggle");let v=!1;m.addEventListener("click",()=>{v=!v,m.classList.toggle("playing",v),m.textContent=v?"🔇":"🎵"})}function LS(n,e){if(!n)return;n.width=window.innerWidth,n.height=window.innerHeight;const t=n.getContext("2d"),i=[];let o=!0;function r(){o&&(i.push({x:Math.random()*n.width,y:-10,size:1+Math.random()*2,speed:.5+Math.random()*1.5,alpha:.3+Math.random()*.7,color:e.particleColors[Math.floor(Math.random()*e.particleColors.length)]}),setTimeout(r,100+Math.random()*200))}function s(){if(!(!o&&i.length===0)){t.clearRect(0,0,n.width,n.height);for(let a=i.length-1;a>=0;a--){const c=i[a];c.y+=c.speed,c.alpha-=.002,t.beginPath(),t.arc(c.x,c.y,c.size,0,Math.PI*2),t.fillStyle=c.color,t.globalAlpha=Math.max(0,c.alpha),t.fill(),t.beginPath(),t.arc(c.x,c.y,c.size*3,0,Math.PI*2),t.globalAlpha=Math.max(0,c.alpha*.15),t.fill(),t.globalAlpha=1,(c.y>n.height+10||c.alpha<=0)&&i.splice(a,1)}requestAnimationFrame(s)}}r(),s(),Fn.push(()=>{o=!1})}function Ya(n,e,t=15,i=!1){const o=document.getElementById(e);if(!o)return;const r=n.balloonColors;for(let s=0;s<t;s++)setTimeout(()=>{const a=document.createElement("div");a.className="balloon",a.textContent=r[Math.floor(Math.random()*r.length)],a.style.left=`${5+Math.random()*90}%`,a.style.animationDuration=`${i?8:4+Math.random()*4}s`,a.style.animationDelay="0s",a.style.fontSize=`${2+Math.random()*2}rem`,o.appendChild(a),setTimeout(()=>a.remove(),i?12e3:1e4)},s*(i?600:300))}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cc="183",ao={ROTATE:0,DOLLY:1,PAN:2},oo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},US=0,of=1,FS=2,Br=1,BS=2,Bo=3,ci=0,kt=1,cn=2,On=0,lo=1,$a=2,rf=3,sf=4,kS=5,Ti=100,OS=101,GS=102,VS=103,HS=104,zS=200,WS=201,qS=202,XS=203,Ja=204,Ka=205,YS=206,$S=207,JS=208,KS=209,ZS=210,QS=211,jS=212,eT=213,tT=214,Za=0,Qa=1,ja=2,ho=3,el=4,tl=5,nl=6,il=7,_p=0,nT=1,iT=2,Sn=0,vp=1,yp=2,xp=3,uc=4,Ep=5,Sp=6,Tp=7,Mp=300,Ii=301,po=302,Xs=303,Ys=304,ds=306,ol=1e3,Bn=1001,rl=1002,Dt=1003,oT=1004,rr=1005,Bt=1006,$s=1007,Ai=1008,Zt=1009,Ap=1010,Cp=1011,Go=1012,dc=1013,Mn=1014,xn=1015,zn=1016,fc=1017,hc=1018,Vo=1020,wp=35902,bp=35899,Ip=1021,Rp=1022,un=1023,Wn=1026,Ci=1027,Pp=1028,pc=1029,mo=1030,mc=1031,gc=1033,kr=33776,Or=33777,Gr=33778,Vr=33779,sl=35840,al=35841,ll=35842,cl=35843,ul=36196,dl=37492,fl=37496,hl=37488,pl=37489,ml=37490,gl=37491,_l=37808,vl=37809,yl=37810,xl=37811,El=37812,Sl=37813,Tl=37814,Ml=37815,Al=37816,Cl=37817,wl=37818,bl=37819,Il=37820,Rl=37821,Pl=36492,Dl=36494,Nl=36495,Ll=36283,Ul=36284,Fl=36285,Bl=36286,rT=3200,Dp=0,sT=1,ri="",Jt="srgb",go="srgb-linear",jr="linear",rt="srgb",Bi=7680,af=519,aT=512,lT=513,cT=514,_c=515,uT=516,dT=517,vc=518,fT=519,kl=35044,lf="300 es",En=2e3,Ho=2001;function hT(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function zo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function pT(){const n=zo("canvas");return n.style.display="block",n}const cf={};function es(...n){const e="THREE."+n.shift();console.log(e,...n)}function Np(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Oe(...n){n=Np(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Qe(...n){n=Np(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function ts(...n){const e=n.join(" ");e in cf||(cf[e]=!0,Oe(...n))}function mT(n,e,t){return new Promise(function(i,o){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:o();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const gT={[Za]:Qa,[ja]:nl,[el]:il,[ho]:tl,[Qa]:Za,[nl]:ja,[il]:el,[tl]:ho};class Ni{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const o=i[e];if(o!==void 0){const r=o.indexOf(t);r!==-1&&o.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const o=i.slice(0);for(let r=0,s=o.length;r<s;r++)o[r].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hr=Math.PI/180,Ol=180/Math.PI;function li(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]).toLowerCase()}function Ke(n,e,t){return Math.max(e,Math.min(t,n))}function _T(n,e){return(n%e+e)%e}function Js(n,e,t){return(1-t)*n+t*e}function yn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function dt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const vT={DEG2RAD:Hr};class Ue{constructor(e=0,t=0){Ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6],this.y=o[1]*t+o[4]*i+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),o=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*i-s*o+e.x,this.y=r*o+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ui{constructor(e=0,t=0,i=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=o}static slerpFlat(e,t,i,o,r,s,a){let c=i[o+0],l=i[o+1],f=i[o+2],p=i[o+3],h=r[s+0],m=r[s+1],v=r[s+2],y=r[s+3];if(p!==y||c!==h||l!==m||f!==v){let g=c*h+l*m+f*v+p*y;g<0&&(h=-h,m=-m,v=-v,y=-y,g=-g);let _=1-a;if(g<.9995){const E=Math.acos(g),A=Math.sin(E);_=Math.sin(_*E)/A,a=Math.sin(a*E)/A,c=c*_+h*a,l=l*_+m*a,f=f*_+v*a,p=p*_+y*a}else{c=c*_+h*a,l=l*_+m*a,f=f*_+v*a,p=p*_+y*a;const E=1/Math.sqrt(c*c+l*l+f*f+p*p);c*=E,l*=E,f*=E,p*=E}}e[t]=c,e[t+1]=l,e[t+2]=f,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,o,r,s){const a=i[o],c=i[o+1],l=i[o+2],f=i[o+3],p=r[s],h=r[s+1],m=r[s+2],v=r[s+3];return e[t]=a*v+f*p+c*m-l*h,e[t+1]=c*v+f*h+l*p-a*m,e[t+2]=l*v+f*m+a*h-c*p,e[t+3]=f*v-a*p-c*h-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,o){return this._x=e,this._y=t,this._z=i,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,o=e._y,r=e._z,s=e._order,a=Math.cos,c=Math.sin,l=a(i/2),f=a(o/2),p=a(r/2),h=c(i/2),m=c(o/2),v=c(r/2);switch(s){case"XYZ":this._x=h*f*p+l*m*v,this._y=l*m*p-h*f*v,this._z=l*f*v+h*m*p,this._w=l*f*p-h*m*v;break;case"YXZ":this._x=h*f*p+l*m*v,this._y=l*m*p-h*f*v,this._z=l*f*v-h*m*p,this._w=l*f*p+h*m*v;break;case"ZXY":this._x=h*f*p-l*m*v,this._y=l*m*p+h*f*v,this._z=l*f*v+h*m*p,this._w=l*f*p-h*m*v;break;case"ZYX":this._x=h*f*p-l*m*v,this._y=l*m*p+h*f*v,this._z=l*f*v-h*m*p,this._w=l*f*p+h*m*v;break;case"YZX":this._x=h*f*p+l*m*v,this._y=l*m*p+h*f*v,this._z=l*f*v-h*m*p,this._w=l*f*p-h*m*v;break;case"XZY":this._x=h*f*p-l*m*v,this._y=l*m*p-h*f*v,this._z=l*f*v+h*m*p,this._w=l*f*p+h*m*v;break;default:Oe("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,o=Math.sin(i);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],o=t[4],r=t[8],s=t[1],a=t[5],c=t[9],l=t[2],f=t[6],p=t[10],h=i+a+p;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(f-c)*m,this._y=(r-l)*m,this._z=(s-o)*m}else if(i>a&&i>p){const m=2*Math.sqrt(1+i-a-p);this._w=(f-c)/m,this._x=.25*m,this._y=(o+s)/m,this._z=(r+l)/m}else if(a>p){const m=2*Math.sqrt(1+a-i-p);this._w=(r-l)/m,this._x=(o+s)/m,this._y=.25*m,this._z=(c+f)/m}else{const m=2*Math.sqrt(1+p-i-a);this._w=(s-o)/m,this._x=(r+l)/m,this._y=(c+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const o=Math.min(1,t/i);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,o=e._y,r=e._z,s=e._w,a=t._x,c=t._y,l=t._z,f=t._w;return this._x=i*f+s*a+o*l-r*c,this._y=o*f+s*c+r*a-i*l,this._z=r*f+s*l+i*c-o*a,this._w=s*f-i*a-o*c-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,o=e._y,r=e._z,s=e._w,a=this.dot(e);a<0&&(i=-i,o=-o,r=-r,s=-s,a=-a);let c=1-t;if(a<.9995){const l=Math.acos(a),f=Math.sin(l);c=Math.sin(c*l)/f,t=Math.sin(t*l)/f,this._x=this._x*c+i*t,this._y=this._y*c+o*t,this._z=this._z*c+r*t,this._w=this._w*c+s*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+o*t,this._z=this._z*c+r*t,this._w=this._w*c+s*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),o=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(o*Math.sin(e),o*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,i=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(uf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(uf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,o=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*o,this.y=r[1]*t+r[4]*i+r[7]*o,this.z=r[2]*t+r[5]*i+r[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,r=e.elements,s=1/(r[3]*t+r[7]*i+r[11]*o+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*o+r[12])*s,this.y=(r[1]*t+r[5]*i+r[9]*o+r[13])*s,this.z=(r[2]*t+r[6]*i+r[10]*o+r[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,o=this.z,r=e.x,s=e.y,a=e.z,c=e.w,l=2*(s*o-a*i),f=2*(a*t-r*o),p=2*(r*i-s*t);return this.x=t+c*l+s*p-a*f,this.y=i+c*f+a*l-r*p,this.z=o+c*p+r*f-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,o=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*o,this.y=r[1]*t+r[5]*i+r[9]*o,this.z=r[2]*t+r[6]*i+r[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,o=e.y,r=e.z,s=t.x,a=t.y,c=t.z;return this.x=o*c-r*a,this.y=r*s-i*c,this.z=i*a-o*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ks.copy(this).projectOnVector(e),this.sub(Ks)}reflect(e){return this.sub(Ks.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,o=this.z-e.z;return t*t+i*i+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const o=Math.sin(t)*e;return this.x=o*Math.sin(i),this.y=Math.cos(t)*e,this.z=o*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ks=new V,uf=new ui;class Xe{constructor(e,t,i,o,r,s,a,c,l){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,o,r,s,a,c,l)}set(e,t,i,o,r,s,a,c,l){const f=this.elements;return f[0]=e,f[1]=o,f[2]=a,f[3]=t,f[4]=r,f[5]=c,f[6]=i,f[7]=s,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,r=this.elements,s=i[0],a=i[3],c=i[6],l=i[1],f=i[4],p=i[7],h=i[2],m=i[5],v=i[8],y=o[0],g=o[3],_=o[6],E=o[1],A=o[4],S=o[7],R=o[2],C=o[5],b=o[8];return r[0]=s*y+a*E+c*R,r[3]=s*g+a*A+c*C,r[6]=s*_+a*S+c*b,r[1]=l*y+f*E+p*R,r[4]=l*g+f*A+p*C,r[7]=l*_+f*S+p*b,r[2]=h*y+m*E+v*R,r[5]=h*g+m*A+v*C,r[8]=h*_+m*S+v*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],o=e[2],r=e[3],s=e[4],a=e[5],c=e[6],l=e[7],f=e[8];return t*s*f-t*a*l-i*r*f+i*a*c+o*r*l-o*s*c}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],r=e[3],s=e[4],a=e[5],c=e[6],l=e[7],f=e[8],p=f*s-a*l,h=a*c-f*r,m=l*r-s*c,v=t*p+i*h+o*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=p*y,e[1]=(o*l-f*i)*y,e[2]=(a*i-o*s)*y,e[3]=h*y,e[4]=(f*t-o*c)*y,e[5]=(o*r-a*t)*y,e[6]=m*y,e[7]=(i*c-l*t)*y,e[8]=(s*t-i*r)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,o,r,s,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*s+l*a)+s+e,-o*l,o*c,-o*(-l*s+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Zs.makeScale(e,t)),this}rotate(e){return this.premultiply(Zs.makeRotation(-e)),this}translate(e,t){return this.premultiply(Zs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<9;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Zs=new Xe,df=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ff=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yT(){const n={enabled:!0,workingColorSpace:go,spaces:{},convert:function(o,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===rt&&(o.r=Gn(o.r),o.g=Gn(o.g),o.b=Gn(o.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(o.applyMatrix3(this.spaces[r].toXYZ),o.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===rt&&(o.r=co(o.r),o.g=co(o.g),o.b=co(o.b))),o},workingToColorSpace:function(o,r){return this.convert(o,this.workingColorSpace,r)},colorSpaceToWorking:function(o,r){return this.convert(o,r,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===ri?jr:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,r=this.workingColorSpace){return o.fromArray(this.spaces[r].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,r,s){return o.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,r){return ts("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(o,r)},toWorkingColorSpace:function(o,r){return ts("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(o,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[go]:{primaries:e,whitePoint:i,transfer:jr,toXYZ:df,fromXYZ:ff,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Jt},outputColorSpaceConfig:{drawingBufferColorSpace:Jt}},[Jt]:{primaries:e,whitePoint:i,transfer:rt,toXYZ:df,fromXYZ:ff,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Jt}}}),n}const et=yT();function Gn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function co(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ki;class xT{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ki===void 0&&(ki=zo("canvas")),ki.width=e.width,ki.height=e.height;const o=ki.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),i=ki}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=zo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const o=i.getImageData(0,0,e.width,e.height),r=o.data;for(let s=0;s<r.length;s++)r[s]=Gn(r[s]/255)*255;return i.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Gn(t[i]/255)*255):t[i]=Gn(t[i]);return{data:t,width:e.width,height:e.height}}else return Oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ET=0;class yc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ET++}),this.uuid=li(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},o=this.data;if(o!==null){let r;if(Array.isArray(o)){r=[];for(let s=0,a=o.length;s<a;s++)o[s].isDataTexture?r.push(Qs(o[s].image)):r.push(Qs(o[s]))}else r=Qs(o);i.url=r}return t||(e.images[this.uuid]=i),i}}function Qs(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?xT.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Oe("Texture: Unable to serialize Texture."),{})}let ST=0;const js=new V;class Nt extends Ni{constructor(e=Nt.DEFAULT_IMAGE,t=Nt.DEFAULT_MAPPING,i=Bn,o=Bn,r=Bt,s=Ai,a=un,c=Zt,l=Nt.DEFAULT_ANISOTROPY,f=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ST++}),this.uuid=li(),this.name="",this.source=new yc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=o,this.magFilter=r,this.minFilter=s,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(js).x}get height(){return this.source.getSize(js).y}get depth(){return this.source.getSize(js).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Oe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){Oe(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&i&&o.isVector2&&i.isVector2||o&&i&&o.isVector3&&i.isVector3||o&&i&&o.isMatrix3&&i.isMatrix3?o.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ol:e.x=e.x-Math.floor(e.x);break;case Bn:e.x=e.x<0?0:1;break;case rl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ol:e.y=e.y-Math.floor(e.y);break;case Bn:e.y=e.y<0?0:1;break;case rl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=Mp;Nt.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,t=0,i=0,o=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,o){return this.x=e,this.y=t,this.z=i,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*o+s[12]*r,this.y=s[1]*t+s[5]*i+s[9]*o+s[13]*r,this.z=s[2]*t+s[6]*i+s[10]*o+s[14]*r,this.w=s[3]*t+s[7]*i+s[11]*o+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,o,r;const c=e.elements,l=c[0],f=c[4],p=c[8],h=c[1],m=c[5],v=c[9],y=c[2],g=c[6],_=c[10];if(Math.abs(f-h)<.01&&Math.abs(p-y)<.01&&Math.abs(v-g)<.01){if(Math.abs(f+h)<.1&&Math.abs(p+y)<.1&&Math.abs(v+g)<.1&&Math.abs(l+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(l+1)/2,S=(m+1)/2,R=(_+1)/2,C=(f+h)/4,b=(p+y)/4,x=(v+g)/4;return A>S&&A>R?A<.01?(i=0,o=.707106781,r=.707106781):(i=Math.sqrt(A),o=C/i,r=b/i):S>R?S<.01?(i=.707106781,o=0,r=.707106781):(o=Math.sqrt(S),i=C/o,r=x/o):R<.01?(i=.707106781,o=.707106781,r=0):(r=Math.sqrt(R),i=b/r,o=x/r),this.set(i,o,r,t),this}let E=Math.sqrt((g-v)*(g-v)+(p-y)*(p-y)+(h-f)*(h-f));return Math.abs(E)<.001&&(E=1),this.x=(g-v)/E,this.y=(p-y)/E,this.z=(h-f)/E,this.w=Math.acos((l+m+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class TT extends Ni{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:i.depth},r=new Nt(o),s=i.count;for(let a=0;a<s;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Bt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let o=0,r=this.textures.length;o<r;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=i,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new yc(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Tn extends TT{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Lp extends Nt{constructor(e=null,t=1,i=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class MT extends Nt{constructor(e=null,t=1,i=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mt{constructor(e,t,i,o,r,s,a,c,l,f,p,h,m,v,y,g){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,o,r,s,a,c,l,f,p,h,m,v,y,g)}set(e,t,i,o,r,s,a,c,l,f,p,h,m,v,y,g){const _=this.elements;return _[0]=e,_[4]=t,_[8]=i,_[12]=o,_[1]=r,_[5]=s,_[9]=a,_[13]=c,_[2]=l,_[6]=f,_[10]=p,_[14]=h,_[3]=m,_[7]=v,_[11]=y,_[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,o=1/Oi.setFromMatrixColumn(e,0).length(),r=1/Oi.setFromMatrixColumn(e,1).length(),s=1/Oi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*o,t[1]=i[1]*o,t[2]=i[2]*o,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,o=e.y,r=e.z,s=Math.cos(i),a=Math.sin(i),c=Math.cos(o),l=Math.sin(o),f=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){const h=s*f,m=s*p,v=a*f,y=a*p;t[0]=c*f,t[4]=-c*p,t[8]=l,t[1]=m+v*l,t[5]=h-y*l,t[9]=-a*c,t[2]=y-h*l,t[6]=v+m*l,t[10]=s*c}else if(e.order==="YXZ"){const h=c*f,m=c*p,v=l*f,y=l*p;t[0]=h+y*a,t[4]=v*a-m,t[8]=s*l,t[1]=s*p,t[5]=s*f,t[9]=-a,t[2]=m*a-v,t[6]=y+h*a,t[10]=s*c}else if(e.order==="ZXY"){const h=c*f,m=c*p,v=l*f,y=l*p;t[0]=h-y*a,t[4]=-s*p,t[8]=v+m*a,t[1]=m+v*a,t[5]=s*f,t[9]=y-h*a,t[2]=-s*l,t[6]=a,t[10]=s*c}else if(e.order==="ZYX"){const h=s*f,m=s*p,v=a*f,y=a*p;t[0]=c*f,t[4]=v*l-m,t[8]=h*l+y,t[1]=c*p,t[5]=y*l+h,t[9]=m*l-v,t[2]=-l,t[6]=a*c,t[10]=s*c}else if(e.order==="YZX"){const h=s*c,m=s*l,v=a*c,y=a*l;t[0]=c*f,t[4]=y-h*p,t[8]=v*p+m,t[1]=p,t[5]=s*f,t[9]=-a*f,t[2]=-l*f,t[6]=m*p+v,t[10]=h-y*p}else if(e.order==="XZY"){const h=s*c,m=s*l,v=a*c,y=a*l;t[0]=c*f,t[4]=-p,t[8]=l*f,t[1]=h*p+y,t[5]=s*f,t[9]=m*p-v,t[2]=v*p-m,t[6]=a*f,t[10]=y*p+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(AT,e,CT)}lookAt(e,t,i){const o=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),Zn.crossVectors(i,Yt),Zn.lengthSq()===0&&(Math.abs(i.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),Zn.crossVectors(i,Yt)),Zn.normalize(),sr.crossVectors(Yt,Zn),o[0]=Zn.x,o[4]=sr.x,o[8]=Yt.x,o[1]=Zn.y,o[5]=sr.y,o[9]=Yt.y,o[2]=Zn.z,o[6]=sr.z,o[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,r=this.elements,s=i[0],a=i[4],c=i[8],l=i[12],f=i[1],p=i[5],h=i[9],m=i[13],v=i[2],y=i[6],g=i[10],_=i[14],E=i[3],A=i[7],S=i[11],R=i[15],C=o[0],b=o[4],x=o[8],M=o[12],B=o[1],I=o[5],N=o[9],L=o[13],k=o[2],z=o[6],q=o[10],W=o[14],ie=o[3],oe=o[7],F=o[11],D=o[15];return r[0]=s*C+a*B+c*k+l*ie,r[4]=s*b+a*I+c*z+l*oe,r[8]=s*x+a*N+c*q+l*F,r[12]=s*M+a*L+c*W+l*D,r[1]=f*C+p*B+h*k+m*ie,r[5]=f*b+p*I+h*z+m*oe,r[9]=f*x+p*N+h*q+m*F,r[13]=f*M+p*L+h*W+m*D,r[2]=v*C+y*B+g*k+_*ie,r[6]=v*b+y*I+g*z+_*oe,r[10]=v*x+y*N+g*q+_*F,r[14]=v*M+y*L+g*W+_*D,r[3]=E*C+A*B+S*k+R*ie,r[7]=E*b+A*I+S*z+R*oe,r[11]=E*x+A*N+S*q+R*F,r[15]=E*M+A*L+S*W+R*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],o=e[8],r=e[12],s=e[1],a=e[5],c=e[9],l=e[13],f=e[2],p=e[6],h=e[10],m=e[14],v=e[3],y=e[7],g=e[11],_=e[15],E=c*m-l*h,A=a*m-l*p,S=a*h-c*p,R=s*m-l*f,C=s*h-c*f,b=s*p-a*f;return t*(y*E-g*A+_*S)-i*(v*E-g*R+_*C)+o*(v*A-y*R+_*b)-r*(v*S-y*C+g*b)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],r=e[3],s=e[4],a=e[5],c=e[6],l=e[7],f=e[8],p=e[9],h=e[10],m=e[11],v=e[12],y=e[13],g=e[14],_=e[15],E=t*a-i*s,A=t*c-o*s,S=t*l-r*s,R=i*c-o*a,C=i*l-r*a,b=o*l-r*c,x=f*y-p*v,M=f*g-h*v,B=f*_-m*v,I=p*g-h*y,N=p*_-m*y,L=h*_-m*g,k=E*L-A*N+S*I+R*B-C*M+b*x;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/k;return e[0]=(a*L-c*N+l*I)*z,e[1]=(o*N-i*L-r*I)*z,e[2]=(y*b-g*C+_*R)*z,e[3]=(h*C-p*b-m*R)*z,e[4]=(c*B-s*L-l*M)*z,e[5]=(t*L-o*B+r*M)*z,e[6]=(g*S-v*b-_*A)*z,e[7]=(f*b-h*S+m*A)*z,e[8]=(s*N-a*B+l*x)*z,e[9]=(i*B-t*N-r*x)*z,e[10]=(v*C-y*S+_*E)*z,e[11]=(p*S-f*C-m*E)*z,e[12]=(a*M-s*I-c*x)*z,e[13]=(t*I-i*M+o*x)*z,e[14]=(y*A-v*R-g*E)*z,e[15]=(f*R-p*A+h*E)*z,this}scale(e){const t=this.elements,i=e.x,o=e.y,r=e.z;return t[0]*=i,t[4]*=o,t[8]*=r,t[1]*=i,t[5]*=o,t[9]*=r,t[2]*=i,t[6]*=o,t[10]*=r,t[3]*=i,t[7]*=o,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,o))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),o=Math.sin(t),r=1-i,s=e.x,a=e.y,c=e.z,l=r*s,f=r*a;return this.set(l*s+i,l*a-o*c,l*c+o*a,0,l*a+o*c,f*a+i,f*c-o*s,0,l*c-o*a,f*c+o*s,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,o,r,s){return this.set(1,i,r,0,e,1,s,0,t,o,1,0,0,0,0,1),this}compose(e,t,i){const o=this.elements,r=t._x,s=t._y,a=t._z,c=t._w,l=r+r,f=s+s,p=a+a,h=r*l,m=r*f,v=r*p,y=s*f,g=s*p,_=a*p,E=c*l,A=c*f,S=c*p,R=i.x,C=i.y,b=i.z;return o[0]=(1-(y+_))*R,o[1]=(m+S)*R,o[2]=(v-A)*R,o[3]=0,o[4]=(m-S)*C,o[5]=(1-(h+_))*C,o[6]=(g+E)*C,o[7]=0,o[8]=(v+A)*b,o[9]=(g-E)*b,o[10]=(1-(h+y))*b,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,i){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const r=this.determinant();if(r===0)return i.set(1,1,1),t.identity(),this;let s=Oi.set(o[0],o[1],o[2]).length();const a=Oi.set(o[4],o[5],o[6]).length(),c=Oi.set(o[8],o[9],o[10]).length();r<0&&(s=-s),on.copy(this);const l=1/s,f=1/a,p=1/c;return on.elements[0]*=l,on.elements[1]*=l,on.elements[2]*=l,on.elements[4]*=f,on.elements[5]*=f,on.elements[6]*=f,on.elements[8]*=p,on.elements[9]*=p,on.elements[10]*=p,t.setFromRotationMatrix(on),i.x=s,i.y=a,i.z=c,this}makePerspective(e,t,i,o,r,s,a=En,c=!1){const l=this.elements,f=2*r/(t-e),p=2*r/(i-o),h=(t+e)/(t-e),m=(i+o)/(i-o);let v,y;if(c)v=r/(s-r),y=s*r/(s-r);else if(a===En)v=-(s+r)/(s-r),y=-2*s*r/(s-r);else if(a===Ho)v=-s/(s-r),y=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=f,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=p,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,o,r,s,a=En,c=!1){const l=this.elements,f=2/(t-e),p=2/(i-o),h=-(t+e)/(t-e),m=-(i+o)/(i-o);let v,y;if(c)v=1/(s-r),y=s/(s-r);else if(a===En)v=-2/(s-r),y=-(s+r)/(s-r);else if(a===Ho)v=-1/(s-r),y=-r/(s-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=f,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=p,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=v,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<16;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Oi=new V,on=new mt,AT=new V(0,0,0),CT=new V(1,1,1),Zn=new V,sr=new V,Yt=new V,hf=new mt,pf=new ui;class An{constructor(e=0,t=0,i=0,o=An.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,o=this._order){return this._x=e,this._y=t,this._z=i,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const o=e.elements,r=o[0],s=o[4],a=o[8],c=o[1],l=o[5],f=o[9],p=o[2],h=o[6],m=o[10];switch(t){case"XYZ":this._y=Math.asin(Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ke(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(Ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,l),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ke(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-f,m),this._y=0);break;default:Oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return hf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pf.setFromEuler(this),this.setFromQuaternion(pf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}An.DEFAULT_ORDER="XYZ";class xc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wT=0;const mf=new V,Gi=new ui,Rn=new mt,ar=new V,Co=new V,bT=new V,IT=new ui,gf=new V(1,0,0),_f=new V(0,1,0),vf=new V(0,0,1),yf={type:"added"},RT={type:"removed"},Vi={type:"childadded",child:null},ea={type:"childremoved",child:null};class Tt extends Ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wT++}),this.uuid=li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new V,t=new An,i=new ui,o=new V(1,1,1);function r(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new mt},normalMatrix:{value:new Xe}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gi.setFromAxisAngle(e,t),this.quaternion.multiply(Gi),this}rotateOnWorldAxis(e,t){return Gi.setFromAxisAngle(e,t),this.quaternion.premultiply(Gi),this}rotateX(e){return this.rotateOnAxis(gf,e)}rotateY(e){return this.rotateOnAxis(_f,e)}rotateZ(e){return this.rotateOnAxis(vf,e)}translateOnAxis(e,t){return mf.copy(e).applyQuaternion(this.quaternion),this.position.add(mf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gf,e)}translateY(e){return this.translateOnAxis(_f,e)}translateZ(e){return this.translateOnAxis(vf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Rn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ar.copy(e):ar.set(e,t,i);const o=this.parent;this.updateWorldMatrix(!0,!1),Co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rn.lookAt(Co,ar,this.up):Rn.lookAt(ar,Co,this.up),this.quaternion.setFromRotationMatrix(Rn),o&&(Rn.extractRotation(o.matrixWorld),Gi.setFromRotationMatrix(Rn),this.quaternion.premultiply(Gi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yf),Vi.child=e,this.dispatchEvent(Vi),Vi.child=null):Qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(RT),ea.child=e,this.dispatchEvent(ea),ea.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Rn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Rn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Rn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yf),Vi.child=e,this.dispatchEvent(Vi),Vi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,o=this.children.length;i<o;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const o=this.children;for(let r=0,s=o.length;r<s;r++)o[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,e,bT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,IT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,o=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*o,r[13]+=i-r[1]*t-r[5]*i-r[9]*o,r[14]+=o-r[2]*t-r[6]*i-r[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let r=0,s=o.length;r<s;r++)o[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(a=>({...a})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,f=c.length;l<f;l++){const p=c[l];r(e.shapes,p)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));o.material=a}else o.material=r(e.materials,this.material);if(this.children.length>0){o.children=[];for(let a=0;a<this.children.length;a++)o.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];o.animations.push(r(e.animations,c))}}if(t){const a=s(e.geometries),c=s(e.materials),l=s(e.textures),f=s(e.images),p=s(e.shapes),h=s(e.skeletons),m=s(e.animations),v=s(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),f.length>0&&(i.images=f),p.length>0&&(i.shapes=p),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=o,i;function s(a){const c=[];for(const l in a){const f=a[l];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const o=e.children[i];this.add(o.clone())}return this}}Tt.DEFAULT_UP=new V(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class wi extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const PT={type:"move"};class ta{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let o=null,r=null,s=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(const y of e.hand.values()){const g=t.getJointPose(y,i),_=this._getHandJoint(l,y);g!==null&&(_.matrix.fromArray(g.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=g.radius),_.visible=g!==null}const f=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],h=f.position.distanceTo(p.position),m=.02,v=.005;l.inputState.pinching&&h>m+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=m-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(o=t.getPose(e.targetRaySpace,i),o===null&&r!==null&&(o=r),o!==null&&(a.matrix.fromArray(o.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,o.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(o.linearVelocity)):a.hasLinearVelocity=!1,o.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(o.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(PT)))}return a!==null&&(a.visible=o!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new wi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Up={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},lr={h:0,s:0,l:0};function na(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ze{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,i,o=et.workingColorSpace){return this.r=e,this.g=t,this.b=i,et.colorSpaceToWorking(this,o),this}setHSL(e,t,i,o=et.workingColorSpace){if(e=_T(e,1),t=Ke(t,0,1),i=Ke(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,s=2*i-r;this.r=na(s,r,e+1/3),this.g=na(s,r,e),this.b=na(s,r,e-1/3)}return et.colorSpaceToWorking(this,o),this}setStyle(e,t=Jt){function i(r){r!==void 0&&parseFloat(r)<1&&Oe("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=o[1],a=o[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Oe("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=o[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);Oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Jt){const i=Up[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gn(e.r),this.g=Gn(e.g),this.b=Gn(e.b),this}copyLinearToSRGB(e){return this.r=co(e.r),this.g=co(e.g),this.b=co(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jt){return et.workingToColorSpace(Ft.copy(this),e),Math.round(Ke(Ft.r*255,0,255))*65536+Math.round(Ke(Ft.g*255,0,255))*256+Math.round(Ke(Ft.b*255,0,255))}getHexString(e=Jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(Ft.copy(this),t);const i=Ft.r,o=Ft.g,r=Ft.b,s=Math.max(i,o,r),a=Math.min(i,o,r);let c,l;const f=(a+s)/2;if(a===s)c=0,l=0;else{const p=s-a;switch(l=f<=.5?p/(s+a):p/(2-s-a),s){case i:c=(o-r)/p+(o<r?6:0);break;case o:c=(r-i)/p+2;break;case r:c=(i-o)/p+4;break}c/=6}return e.h=c,e.s=l,e.l=f,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=Jt){et.workingToColorSpace(Ft.copy(this),e);const t=Ft.r,i=Ft.g,o=Ft.b;return e!==Jt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(o*255)})`}offsetHSL(e,t,i){return this.getHSL(Qn),this.setHSL(Qn.h+e,Qn.s+t,Qn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Qn),e.getHSL(lr);const i=Js(Qn.h,lr.h,t),o=Js(Qn.s,lr.s,t),r=Js(Qn.l,lr.l,t);return this.setHSL(i,o,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,o=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*o,this.g=r[1]*t+r[4]*i+r[7]*o,this.b=r[2]*t+r[5]*i+r[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new Ze;Ze.NAMES=Up;class Ec{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ze(e),this.density=t}clone(){return new Ec(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class DT extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const rn=new V,Pn=new V,ia=new V,Dn=new V,Hi=new V,zi=new V,xf=new V,oa=new V,ra=new V,sa=new V,aa=new _t,la=new _t,ca=new _t;class en{constructor(e=new V,t=new V,i=new V){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,o){o.subVectors(i,t),rn.subVectors(e,t),o.cross(rn);const r=o.lengthSq();return r>0?o.multiplyScalar(1/Math.sqrt(r)):o.set(0,0,0)}static getBarycoord(e,t,i,o,r){rn.subVectors(o,t),Pn.subVectors(i,t),ia.subVectors(e,t);const s=rn.dot(rn),a=rn.dot(Pn),c=rn.dot(ia),l=Pn.dot(Pn),f=Pn.dot(ia),p=s*l-a*a;if(p===0)return r.set(0,0,0),null;const h=1/p,m=(l*c-a*f)*h,v=(s*f-a*c)*h;return r.set(1-m-v,v,m)}static containsPoint(e,t,i,o){return this.getBarycoord(e,t,i,o,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(e,t,i,o,r,s,a,c){return this.getBarycoord(e,t,i,o,Dn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Dn.x),c.addScaledVector(s,Dn.y),c.addScaledVector(a,Dn.z),c)}static getInterpolatedAttribute(e,t,i,o,r,s){return aa.setScalar(0),la.setScalar(0),ca.setScalar(0),aa.fromBufferAttribute(e,t),la.fromBufferAttribute(e,i),ca.fromBufferAttribute(e,o),s.setScalar(0),s.addScaledVector(aa,r.x),s.addScaledVector(la,r.y),s.addScaledVector(ca,r.z),s}static isFrontFacing(e,t,i,o){return rn.subVectors(i,t),Pn.subVectors(e,t),rn.cross(Pn).dot(o)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,o){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,i,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rn.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),rn.cross(Pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return en.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return en.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,o,r){return en.getInterpolation(e,this.a,this.b,this.c,t,i,o,r)}containsPoint(e){return en.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return en.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,o=this.b,r=this.c;let s,a;Hi.subVectors(o,i),zi.subVectors(r,i),oa.subVectors(e,i);const c=Hi.dot(oa),l=zi.dot(oa);if(c<=0&&l<=0)return t.copy(i);ra.subVectors(e,o);const f=Hi.dot(ra),p=zi.dot(ra);if(f>=0&&p<=f)return t.copy(o);const h=c*p-f*l;if(h<=0&&c>=0&&f<=0)return s=c/(c-f),t.copy(i).addScaledVector(Hi,s);sa.subVectors(e,r);const m=Hi.dot(sa),v=zi.dot(sa);if(v>=0&&m<=v)return t.copy(r);const y=m*l-c*v;if(y<=0&&l>=0&&v<=0)return a=l/(l-v),t.copy(i).addScaledVector(zi,a);const g=f*v-m*p;if(g<=0&&p-f>=0&&m-v>=0)return xf.subVectors(r,o),a=(p-f)/(p-f+(m-v)),t.copy(o).addScaledVector(xf,a);const _=1/(g+y+h);return s=y*_,a=h*_,t.copy(i).addScaledVector(Hi,s).addScaledVector(zi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Yo{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=r.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,sn):sn.fromBufferAttribute(r,s),sn.applyMatrix4(e.matrixWorld),this.expandByPoint(sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),cr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),cr.copy(i.boundingBox)),cr.applyMatrix4(e.matrixWorld),this.union(cr)}const o=e.children;for(let r=0,s=o.length;r<s;r++)this.expandByObject(o[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,sn),sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wo),ur.subVectors(this.max,wo),Wi.subVectors(e.a,wo),qi.subVectors(e.b,wo),Xi.subVectors(e.c,wo),jn.subVectors(qi,Wi),ei.subVectors(Xi,qi),gi.subVectors(Wi,Xi);let t=[0,-jn.z,jn.y,0,-ei.z,ei.y,0,-gi.z,gi.y,jn.z,0,-jn.x,ei.z,0,-ei.x,gi.z,0,-gi.x,-jn.y,jn.x,0,-ei.y,ei.x,0,-gi.y,gi.x,0];return!ua(t,Wi,qi,Xi,ur)||(t=[1,0,0,0,1,0,0,0,1],!ua(t,Wi,qi,Xi,ur))?!1:(dr.crossVectors(jn,ei),t=[dr.x,dr.y,dr.z],ua(t,Wi,qi,Xi,ur))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Nn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Nn=[new V,new V,new V,new V,new V,new V,new V,new V],sn=new V,cr=new Yo,Wi=new V,qi=new V,Xi=new V,jn=new V,ei=new V,gi=new V,wo=new V,ur=new V,dr=new V,_i=new V;function ua(n,e,t,i,o){for(let r=0,s=n.length-3;r<=s;r+=3){_i.fromArray(n,r);const a=o.x*Math.abs(_i.x)+o.y*Math.abs(_i.y)+o.z*Math.abs(_i.z),c=e.dot(_i),l=t.dot(_i),f=i.dot(_i);if(Math.max(-Math.max(c,l,f),Math.min(c,l,f))>a)return!1}return!0}const xt=new V,fr=new Ue;let NT=0;class qt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:NT++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=kl,this.updateRanges=[],this.gpuType=xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let o=0,r=this.itemSize;o<r;o++)this.array[e+o]=t.array[i+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)fr.fromBufferAttribute(this,t),fr.applyMatrix3(e),this.setXY(t,fr.x,fr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=yn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=dt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yn(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yn(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yn(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,o){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),o=dt(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this}setXYZW(e,t,i,o,r){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),o=dt(o,this.array),r=dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==kl&&(e.usage=this.usage),e}}class Fp extends qt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Bp extends qt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class vt extends qt{constructor(e,t,i){super(new Float32Array(e),t,i)}}const LT=new Yo,bo=new V,da=new V;class $o{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):LT.setFromPoints(e).getCenter(i);let o=0;for(let r=0,s=e.length;r<s;r++)o=Math.max(o,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bo.subVectors(e,this.center);const t=bo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),o=(i-this.radius)*.5;this.center.addScaledVector(bo,o/i),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(da.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bo.copy(e.center).add(da)),this.expandByPoint(bo.copy(e.center).sub(da))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let UT=0;const jt=new mt,fa=new Tt,Yi=new V,$t=new Yo,Io=new Yo,bt=new V;class Ct extends Ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:UT++}),this.uuid=li(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hT(e)?Bp:Fp)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Xe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jt.makeRotationFromQuaternion(e),this.applyMatrix4(jt),this}rotateX(e){return jt.makeRotationX(e),this.applyMatrix4(jt),this}rotateY(e){return jt.makeRotationY(e),this.applyMatrix4(jt),this}rotateZ(e){return jt.makeRotationZ(e),this.applyMatrix4(jt),this}translate(e,t,i){return jt.makeTranslation(e,t,i),this.applyMatrix4(jt),this}scale(e,t,i){return jt.makeScale(e,t,i),this.applyMatrix4(jt),this}lookAt(e){return fa.lookAt(e),fa.updateMatrix(),this.applyMatrix4(fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let o=0,r=e.length;o<r;o++){const s=e[o];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new vt(i,3))}else{const i=Math.min(e.length,t.count);for(let o=0;o<i;o++){const r=e[o];t.setXYZ(o,r.x,r.y,r.z||0)}e.length>t.count&&Oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,o=t.length;i<o;i++){const r=t[i];$t.setFromBufferAttribute(r),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $o);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const a=t[r];Io.setFromBufferAttribute(a),this.morphTargetsRelative?(bt.addVectors($t.min,Io.min),$t.expandByPoint(bt),bt.addVectors($t.max,Io.max),$t.expandByPoint(bt)):($t.expandByPoint(Io.min),$t.expandByPoint(Io.max))}$t.getCenter(i);let o=0;for(let r=0,s=e.count;r<s;r++)bt.fromBufferAttribute(e,r),o=Math.max(o,i.distanceToSquared(bt));if(t)for(let r=0,s=t.length;r<s;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,f=a.count;l<f;l++)bt.fromBufferAttribute(a,l),c&&(Yi.fromBufferAttribute(e,l),bt.add(Yi)),o=Math.max(o,i.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,o=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qt(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),a=[],c=[];for(let x=0;x<i.count;x++)a[x]=new V,c[x]=new V;const l=new V,f=new V,p=new V,h=new Ue,m=new Ue,v=new Ue,y=new V,g=new V;function _(x,M,B){l.fromBufferAttribute(i,x),f.fromBufferAttribute(i,M),p.fromBufferAttribute(i,B),h.fromBufferAttribute(r,x),m.fromBufferAttribute(r,M),v.fromBufferAttribute(r,B),f.sub(l),p.sub(l),m.sub(h),v.sub(h);const I=1/(m.x*v.y-v.x*m.y);isFinite(I)&&(y.copy(f).multiplyScalar(v.y).addScaledVector(p,-m.y).multiplyScalar(I),g.copy(p).multiplyScalar(m.x).addScaledVector(f,-v.x).multiplyScalar(I),a[x].add(y),a[M].add(y),a[B].add(y),c[x].add(g),c[M].add(g),c[B].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let x=0,M=E.length;x<M;++x){const B=E[x],I=B.start,N=B.count;for(let L=I,k=I+N;L<k;L+=3)_(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const A=new V,S=new V,R=new V,C=new V;function b(x){R.fromBufferAttribute(o,x),C.copy(R);const M=a[x];A.copy(M),A.sub(R.multiplyScalar(R.dot(M))).normalize(),S.crossVectors(C,M);const I=S.dot(c[x])<0?-1:1;s.setXYZW(x,A.x,A.y,A.z,I)}for(let x=0,M=E.length;x<M;++x){const B=E[x],I=B.start,N=B.count;for(let L=I,k=I+N;L<k;L+=3)b(e.getX(L+0)),b(e.getX(L+1)),b(e.getX(L+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const o=new V,r=new V,s=new V,a=new V,c=new V,l=new V,f=new V,p=new V;if(e)for(let h=0,m=e.count;h<m;h+=3){const v=e.getX(h+0),y=e.getX(h+1),g=e.getX(h+2);o.fromBufferAttribute(t,v),r.fromBufferAttribute(t,y),s.fromBufferAttribute(t,g),f.subVectors(s,r),p.subVectors(o,r),f.cross(p),a.fromBufferAttribute(i,v),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,g),a.add(f),c.add(f),l.add(f),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(g,l.x,l.y,l.z)}else for(let h=0,m=t.count;h<m;h+=3)o.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),s.fromBufferAttribute(t,h+2),f.subVectors(s,r),p.subVectors(o,r),f.cross(p),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(a,c){const l=a.array,f=a.itemSize,p=a.normalized,h=new l.constructor(c.length*f);let m=0,v=0;for(let y=0,g=c.length;y<g;y++){a.isInterleavedBufferAttribute?m=c[y]*a.data.stride+a.offset:m=c[y]*f;for(let _=0;_<f;_++)h[v++]=l[m++]}return new qt(h,f,p)}if(this.index===null)return Oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ct,i=this.index.array,o=this.attributes;for(const a in o){const c=o[a],l=e(c,i);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let f=0,p=l.length;f<p;f++){const h=l[f],m=e(h,i);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,c=s.length;a<c;a++){const l=s[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const o={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],f=[];for(let p=0,h=l.length;p<h;p++){const m=l[p];f.push(m.toJSON(e.data))}f.length>0&&(o[c]=f,r=!0)}r&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const o=e.attributes;for(const l in o){const f=o[l];this.setAttribute(l,f.clone(t))}const r=e.morphAttributes;for(const l in r){const f=[],p=r[l];for(let h=0,m=p.length;h<m;h++)f.push(p[h].clone(t));this.morphAttributes[l]=f}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let l=0,f=s.length;l<f;l++){const p=s[l];this.addGroup(p.start,p.count,p.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class FT{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=kl,this.updateRanges=[],this.version=0,this.uuid=li()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let o=0,r=this.stride;o<r;o++)this.array[e+o]=t.array[i+o];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ot=new V;class ns{constructor(e,t,i,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=yn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=dt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=yn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=yn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=yn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=yn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),o=dt(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=o,this}setXYZW(e,t,i,o,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),o=dt(o,this.array),r=dt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=o,this.data.array[e+3]=r,this}clone(e){if(e===void 0){es("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const o=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[o+r])}return new qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ns(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){es("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const o=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[o+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let BT=0;class hi extends Ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:BT++}),this.uuid=li(),this.name="",this.type="Material",this.blending=lo,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ja,this.blendDst=Ka,this.blendEquation=Ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=af,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bi,this.stencilZFail=Bi,this.stencilZPass=Bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Oe(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){Oe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(i):o&&o.isVector3&&i&&i.isVector3?o.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==lo&&(i.blending=this.blending),this.side!==ci&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ja&&(i.blendSrc=this.blendSrc),this.blendDst!==Ka&&(i.blendDst=this.blendDst),this.blendEquation!==Ti&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ho&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==af&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Bi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Bi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function o(r){const s=[];for(const a in r){const c=r[a];delete c.metadata,s.push(c)}return s}if(t){const r=o(e.textures),s=o(e.images);r.length>0&&(i.textures=r),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const o=t.length;i=new Array(o);for(let r=0;r!==o;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class kp extends hi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let $i;const Ro=new V,Ji=new V,Ki=new V,Zi=new Ue,Po=new Ue,Op=new mt,hr=new V,Do=new V,pr=new V,Ef=new Ue,ha=new Ue,Sf=new Ue;class kT extends Tt{constructor(e=new kp){if(super(),this.isSprite=!0,this.type="Sprite",$i===void 0){$i=new Ct;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new FT(t,5);$i.setIndex([0,1,2,0,2,3]),$i.setAttribute("position",new ns(i,3,0,!1)),$i.setAttribute("uv",new ns(i,2,3,!1))}this.geometry=$i,this.material=e,this.center=new Ue(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Qe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ji.setFromMatrixScale(this.matrixWorld),Op.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ki.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ji.multiplyScalar(-Ki.z);const i=this.material.rotation;let o,r;i!==0&&(r=Math.cos(i),o=Math.sin(i));const s=this.center;mr(hr.set(-.5,-.5,0),Ki,s,Ji,o,r),mr(Do.set(.5,-.5,0),Ki,s,Ji,o,r),mr(pr.set(.5,.5,0),Ki,s,Ji,o,r),Ef.set(0,0),ha.set(1,0),Sf.set(1,1);let a=e.ray.intersectTriangle(hr,Do,pr,!1,Ro);if(a===null&&(mr(Do.set(-.5,.5,0),Ki,s,Ji,o,r),ha.set(0,1),a=e.ray.intersectTriangle(hr,pr,Do,!1,Ro),a===null))return;const c=e.ray.origin.distanceTo(Ro);c<e.near||c>e.far||t.push({distance:c,point:Ro.clone(),uv:en.getInterpolation(Ro,hr,Do,pr,Ef,ha,Sf,new Ue),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function mr(n,e,t,i,o,r){Zi.subVectors(n,t).addScalar(.5).multiply(i),o!==void 0?(Po.x=r*Zi.x-o*Zi.y,Po.y=o*Zi.x+r*Zi.y):Po.copy(Zi),n.copy(e),n.x+=Po.x,n.y+=Po.y,n.applyMatrix4(Op)}const Ln=new V,pa=new V,gr=new V,ti=new V,ma=new V,_r=new V,ga=new V;class Jo{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ln)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ln.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ln.copy(this.origin).addScaledVector(this.direction,t),Ln.distanceToSquared(e))}distanceSqToSegment(e,t,i,o){pa.copy(e).add(t).multiplyScalar(.5),gr.copy(t).sub(e).normalize(),ti.copy(this.origin).sub(pa);const r=e.distanceTo(t)*.5,s=-this.direction.dot(gr),a=ti.dot(this.direction),c=-ti.dot(gr),l=ti.lengthSq(),f=Math.abs(1-s*s);let p,h,m,v;if(f>0)if(p=s*c-a,h=s*a-c,v=r*f,p>=0)if(h>=-v)if(h<=v){const y=1/f;p*=y,h*=y,m=p*(p+s*h+2*a)+h*(s*p+h+2*c)+l}else h=r,p=Math.max(0,-(s*h+a)),m=-p*p+h*(h+2*c)+l;else h=-r,p=Math.max(0,-(s*h+a)),m=-p*p+h*(h+2*c)+l;else h<=-v?(p=Math.max(0,-(-s*r+a)),h=p>0?-r:Math.min(Math.max(-r,-c),r),m=-p*p+h*(h+2*c)+l):h<=v?(p=0,h=Math.min(Math.max(-r,-c),r),m=h*(h+2*c)+l):(p=Math.max(0,-(s*r+a)),h=p>0?r:Math.min(Math.max(-r,-c),r),m=-p*p+h*(h+2*c)+l);else h=s>0?-r:r,p=Math.max(0,-(s*h+a)),m=-p*p+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,p),o&&o.copy(pa).addScaledVector(gr,h),m}intersectSphere(e,t){Ln.subVectors(e.center,this.origin);const i=Ln.dot(this.direction),o=Ln.dot(Ln)-i*i,r=e.radius*e.radius;if(o>r)return null;const s=Math.sqrt(r-o),a=i-s,c=i+s;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,o,r,s,a,c;const l=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,o=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,o=(e.min.x-h.x)*l),f>=0?(r=(e.min.y-h.y)*f,s=(e.max.y-h.y)*f):(r=(e.max.y-h.y)*f,s=(e.min.y-h.y)*f),i>s||r>o||((r>i||isNaN(i))&&(i=r),(s<o||isNaN(o))&&(o=s),p>=0?(a=(e.min.z-h.z)*p,c=(e.max.z-h.z)*p):(a=(e.max.z-h.z)*p,c=(e.min.z-h.z)*p),i>c||a>o)||((a>i||i!==i)&&(i=a),(c<o||o!==o)&&(o=c),o<0)?null:this.at(i>=0?i:o,t)}intersectsBox(e){return this.intersectBox(e,Ln)!==null}intersectTriangle(e,t,i,o,r){ma.subVectors(t,e),_r.subVectors(i,e),ga.crossVectors(ma,_r);let s=this.direction.dot(ga),a;if(s>0){if(o)return null;a=1}else if(s<0)a=-1,s=-s;else return null;ti.subVectors(this.origin,e);const c=a*this.direction.dot(_r.crossVectors(ti,_r));if(c<0)return null;const l=a*this.direction.dot(ma.cross(ti));if(l<0||c+l>s)return null;const f=-a*ti.dot(ga);return f<0?null:this.at(f/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class di extends hi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=_p,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tf=new mt,vi=new Jo,vr=new $o,Mf=new V,yr=new V,xr=new V,Er=new V,_a=new V,Sr=new V,Af=new V,Tr=new V;class st extends Tt{constructor(e=new Ct,t=new di){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=o.length;r<s;r++){const a=o[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,o=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(o,e);const a=this.morphTargetInfluences;if(r&&a){Sr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const f=a[c],p=r[c];f!==0&&(_a.fromBufferAttribute(p,e),s?Sr.addScaledVector(_a,f):Sr.addScaledVector(_a.sub(t),f))}t.add(Sr)}return t}raycast(e,t){const i=this.geometry,o=this.material,r=this.matrixWorld;o!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),vr.copy(i.boundingSphere),vr.applyMatrix4(r),vi.copy(e.ray).recast(e.near),!(vr.containsPoint(vi.origin)===!1&&(vi.intersectSphere(vr,Mf)===null||vi.origin.distanceToSquared(Mf)>(e.far-e.near)**2))&&(Tf.copy(r).invert(),vi.copy(e.ray).applyMatrix4(Tf),!(i.boundingBox!==null&&vi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,vi)))}_computeIntersections(e,t,i){let o;const r=this.geometry,s=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,f=r.attributes.uv1,p=r.attributes.normal,h=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(s))for(let v=0,y=h.length;v<y;v++){const g=h[v],_=s[g.materialIndex],E=Math.max(g.start,m.start),A=Math.min(a.count,Math.min(g.start+g.count,m.start+m.count));for(let S=E,R=A;S<R;S+=3){const C=a.getX(S),b=a.getX(S+1),x=a.getX(S+2);o=Mr(this,_,e,i,l,f,p,C,b,x),o&&(o.faceIndex=Math.floor(S/3),o.face.materialIndex=g.materialIndex,t.push(o))}}else{const v=Math.max(0,m.start),y=Math.min(a.count,m.start+m.count);for(let g=v,_=y;g<_;g+=3){const E=a.getX(g),A=a.getX(g+1),S=a.getX(g+2);o=Mr(this,s,e,i,l,f,p,E,A,S),o&&(o.faceIndex=Math.floor(g/3),t.push(o))}}else if(c!==void 0)if(Array.isArray(s))for(let v=0,y=h.length;v<y;v++){const g=h[v],_=s[g.materialIndex],E=Math.max(g.start,m.start),A=Math.min(c.count,Math.min(g.start+g.count,m.start+m.count));for(let S=E,R=A;S<R;S+=3){const C=S,b=S+1,x=S+2;o=Mr(this,_,e,i,l,f,p,C,b,x),o&&(o.faceIndex=Math.floor(S/3),o.face.materialIndex=g.materialIndex,t.push(o))}}else{const v=Math.max(0,m.start),y=Math.min(c.count,m.start+m.count);for(let g=v,_=y;g<_;g+=3){const E=g,A=g+1,S=g+2;o=Mr(this,s,e,i,l,f,p,E,A,S),o&&(o.faceIndex=Math.floor(g/3),t.push(o))}}}}function OT(n,e,t,i,o,r,s,a){let c;if(e.side===kt?c=i.intersectTriangle(s,r,o,!0,a):c=i.intersectTriangle(o,r,s,e.side===ci,a),c===null)return null;Tr.copy(a),Tr.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Tr);return l<t.near||l>t.far?null:{distance:l,point:Tr.clone(),object:n}}function Mr(n,e,t,i,o,r,s,a,c,l){n.getVertexPosition(a,yr),n.getVertexPosition(c,xr),n.getVertexPosition(l,Er);const f=OT(n,e,t,i,yr,xr,Er,Af);if(f){const p=new V;en.getBarycoord(Af,yr,xr,Er,p),o&&(f.uv=en.getInterpolatedAttribute(o,a,c,l,p,new Ue)),r&&(f.uv1=en.getInterpolatedAttribute(r,a,c,l,p,new Ue)),s&&(f.normal=en.getInterpolatedAttribute(s,a,c,l,p,new V),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new V,materialIndex:0};en.getNormal(yr,xr,Er,h.normal),f.face=h,f.barycoord=p}return f}class GT extends Nt{constructor(e=null,t=1,i=1,o,r,s,a,c,l=Dt,f=Dt,p,h){super(null,s,a,c,l,f,o,r,p,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const va=new V,VT=new V,HT=new Xe;class oi{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,o){return this.normal.set(e,t,i),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const o=va.subVectors(i,t).cross(VT.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(va),o=this.normal.dot(i);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/o;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||HT.getNormalMatrix(e),o=this.coplanarPoint(va).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-o.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yi=new $o,zT=new Ue(.5,.5),Ar=new V;class Sc{constructor(e=new oi,t=new oi,i=new oi,o=new oi,r=new oi,s=new oi){this.planes=[e,t,i,o,r,s]}set(e,t,i,o,r,s){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(o),a[4].copy(r),a[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=En,i=!1){const o=this.planes,r=e.elements,s=r[0],a=r[1],c=r[2],l=r[3],f=r[4],p=r[5],h=r[6],m=r[7],v=r[8],y=r[9],g=r[10],_=r[11],E=r[12],A=r[13],S=r[14],R=r[15];if(o[0].setComponents(l-s,m-f,_-v,R-E).normalize(),o[1].setComponents(l+s,m+f,_+v,R+E).normalize(),o[2].setComponents(l+a,m+p,_+y,R+A).normalize(),o[3].setComponents(l-a,m-p,_-y,R-A).normalize(),i)o[4].setComponents(c,h,g,S).normalize(),o[5].setComponents(l-c,m-h,_-g,R-S).normalize();else if(o[4].setComponents(l-c,m-h,_-g,R-S).normalize(),t===En)o[5].setComponents(l+c,m+h,_+g,R+S).normalize();else if(t===Ho)o[5].setComponents(c,h,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(e){yi.center.set(0,0,0);const t=zT.distanceTo(e.center);return yi.radius=.7071067811865476+t,yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(e){const t=this.planes,i=e.center,o=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const o=t[i];if(Ar.x=o.normal.x>0?e.max.x:e.min.x,Ar.y=o.normal.y>0?e.max.y:e.min.y,Ar.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Ar)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Tc extends hi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const is=new V,os=new V,Cf=new mt,No=new Jo,Cr=new $o,ya=new V,wf=new V;class Gp extends Tt{constructor(e=new Ct,t=new Tc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let o=1,r=t.count;o<r;o++)is.fromBufferAttribute(t,o-1),os.fromBufferAttribute(t,o),i[o]=i[o-1],i[o]+=is.distanceTo(os);e.setAttribute("lineDistance",new vt(i,1))}else Oe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,o=this.matrixWorld,r=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Cr.copy(i.boundingSphere),Cr.applyMatrix4(o),Cr.radius+=r,e.ray.intersectsSphere(Cr)===!1)return;Cf.copy(o).invert(),No.copy(e.ray).applyMatrix4(Cf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,f=i.index,h=i.attributes.position;if(f!==null){const m=Math.max(0,s.start),v=Math.min(f.count,s.start+s.count);for(let y=m,g=v-1;y<g;y+=l){const _=f.getX(y),E=f.getX(y+1),A=wr(this,e,No,c,_,E,y);A&&t.push(A)}if(this.isLineLoop){const y=f.getX(v-1),g=f.getX(m),_=wr(this,e,No,c,y,g,v-1);_&&t.push(_)}}else{const m=Math.max(0,s.start),v=Math.min(h.count,s.start+s.count);for(let y=m,g=v-1;y<g;y+=l){const _=wr(this,e,No,c,y,y+1,y);_&&t.push(_)}if(this.isLineLoop){const y=wr(this,e,No,c,v-1,m,v-1);y&&t.push(y)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=o.length;r<s;r++){const a=o[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function wr(n,e,t,i,o,r,s){const a=n.geometry.attributes.position;if(is.fromBufferAttribute(a,o),os.fromBufferAttribute(a,r),t.distanceSqToSegment(is,os,ya,wf)>i)return;ya.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(ya);if(!(l<e.near||l>e.far))return{distance:l,point:wf.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}class Vp extends hi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const bf=new mt,Gl=new Jo,br=new $o,Ir=new V;class WT extends Tt{constructor(e=new Ct,t=new Vp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,o=this.matrixWorld,r=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),br.copy(i.boundingSphere),br.applyMatrix4(o),br.radius+=r,e.ray.intersectsSphere(br)===!1)return;bf.copy(o).invert(),Gl.copy(e.ray).applyMatrix4(bf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,p=i.attributes.position;if(l!==null){const h=Math.max(0,s.start),m=Math.min(l.count,s.start+s.count);for(let v=h,y=m;v<y;v++){const g=l.getX(v);Ir.fromBufferAttribute(p,g),If(Ir,g,c,o,e,t,this)}}else{const h=Math.max(0,s.start),m=Math.min(p.count,s.start+s.count);for(let v=h,y=m;v<y;v++)Ir.fromBufferAttribute(p,v),If(Ir,v,c,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=o.length;r<s;r++){const a=o[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function If(n,e,t,i,o,r,s){const a=Gl.distanceSqToPoint(n);if(a<t){const c=new V;Gl.closestPointToPoint(n,c),c.applyMatrix4(i);const l=o.ray.origin.distanceTo(c);if(l<o.near||l>o.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class Hp extends Nt{constructor(e=[],t=Ii,i,o,r,s,a,c,l,f){super(e,t,i,o,r,s,a,c,l,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Mc extends Nt{constructor(e,t,i,o,r,s,a,c,l){super(e,t,i,o,r,s,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Wo extends Nt{constructor(e,t,i=Mn,o,r,s,a=Dt,c=Dt,l,f=Wn,p=1){if(f!==Wn&&f!==Ci)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:p};super(h,o,r,s,a,c,f,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new yc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class qT extends Wo{constructor(e,t=Mn,i=Ii,o,r,s=Dt,a=Dt,c,l=Wn){const f={width:e,height:e,depth:1},p=[f,f,f,f,f,f];super(e,e,t,i,o,r,s,a,c,l),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class zp extends Nt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class kn extends Ct{constructor(e=1,t=1,i=1,o=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:o,heightSegments:r,depthSegments:s};const a=this;o=Math.floor(o),r=Math.floor(r),s=Math.floor(s);const c=[],l=[],f=[],p=[];let h=0,m=0;v("z","y","x",-1,-1,i,t,e,s,r,0),v("z","y","x",1,-1,i,t,-e,s,r,1),v("x","z","y",1,1,e,i,t,o,s,2),v("x","z","y",1,-1,e,i,-t,o,s,3),v("x","y","z",1,-1,e,t,i,o,r,4),v("x","y","z",-1,-1,e,t,-i,o,r,5),this.setIndex(c),this.setAttribute("position",new vt(l,3)),this.setAttribute("normal",new vt(f,3)),this.setAttribute("uv",new vt(p,2));function v(y,g,_,E,A,S,R,C,b,x,M){const B=S/b,I=R/x,N=S/2,L=R/2,k=C/2,z=b+1,q=x+1;let W=0,ie=0;const oe=new V;for(let F=0;F<q;F++){const D=F*I-L;for(let ee=0;ee<z;ee++){const ae=ee*B-N;oe[y]=ae*E,oe[g]=D*A,oe[_]=k,l.push(oe.x,oe.y,oe.z),oe[y]=0,oe[g]=0,oe[_]=C>0?1:-1,f.push(oe.x,oe.y,oe.z),p.push(ee/b),p.push(1-F/x),W+=1}}for(let F=0;F<x;F++)for(let D=0;D<b;D++){const ee=h+D+z*F,ae=h+D+z*(F+1),Ee=h+(D+1)+z*(F+1),ye=h+(D+1)+z*F;c.push(ee,ae,ye),c.push(ae,Ee,ye),ie+=6}a.addGroup(m,ie,M),m+=ie,h+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class bi extends Ct{constructor(e=1,t=1,i=1,o=32,r=1,s=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:o,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:c};const l=this;o=Math.floor(o),r=Math.floor(r);const f=[],p=[],h=[],m=[];let v=0;const y=[],g=i/2;let _=0;E(),s===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(f),this.setAttribute("position",new vt(p,3)),this.setAttribute("normal",new vt(h,3)),this.setAttribute("uv",new vt(m,2));function E(){const S=new V,R=new V;let C=0;const b=(t-e)/i;for(let x=0;x<=r;x++){const M=[],B=x/r,I=B*(t-e)+e;for(let N=0;N<=o;N++){const L=N/o,k=L*c+a,z=Math.sin(k),q=Math.cos(k);R.x=I*z,R.y=-B*i+g,R.z=I*q,p.push(R.x,R.y,R.z),S.set(z,b,q).normalize(),h.push(S.x,S.y,S.z),m.push(L,1-B),M.push(v++)}y.push(M)}for(let x=0;x<o;x++)for(let M=0;M<r;M++){const B=y[M][x],I=y[M+1][x],N=y[M+1][x+1],L=y[M][x+1];(e>0||M!==0)&&(f.push(B,I,L),C+=3),(t>0||M!==r-1)&&(f.push(I,N,L),C+=3)}l.addGroup(_,C,0),_+=C}function A(S){const R=v,C=new Ue,b=new V;let x=0;const M=S===!0?e:t,B=S===!0?1:-1;for(let N=1;N<=o;N++)p.push(0,g*B,0),h.push(0,B,0),m.push(.5,.5),v++;const I=v;for(let N=0;N<=o;N++){const k=N/o*c+a,z=Math.cos(k),q=Math.sin(k);b.x=M*q,b.y=g*B,b.z=M*z,p.push(b.x,b.y,b.z),h.push(0,B,0),C.x=z*.5+.5,C.y=q*.5*B+.5,m.push(C.x,C.y),v++}for(let N=0;N<o;N++){const L=R+N,k=I+N;S===!0?f.push(k,k+1,L):f.push(k+1,k,L),x+=3}l.addGroup(_,x,S===!0?1:2),_+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ac extends bi{constructor(e=1,t=1,i=32,o=1,r=!1,s=0,a=Math.PI*2){super(0,e,t,i,o,r,s,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:o,openEnded:r,thetaStart:s,thetaLength:a}}static fromJSON(e){return new Ac(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ko extends Ct{constructor(e=1,t=1,i=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:o};const r=e/2,s=t/2,a=Math.floor(i),c=Math.floor(o),l=a+1,f=c+1,p=e/a,h=t/c,m=[],v=[],y=[],g=[];for(let _=0;_<f;_++){const E=_*h-s;for(let A=0;A<l;A++){const S=A*p-r;v.push(S,-E,0),y.push(0,0,1),g.push(A/a),g.push(1-_/c)}}for(let _=0;_<c;_++)for(let E=0;E<a;E++){const A=E+l*_,S=E+l*(_+1),R=E+1+l*(_+1),C=E+1+l*_;m.push(A,S,C),m.push(S,R,C)}this.setIndex(m),this.setAttribute("position",new vt(v,3)),this.setAttribute("normal",new vt(y,3)),this.setAttribute("uv",new vt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ko(e.width,e.height,e.widthSegments,e.heightSegments)}}class Cc extends Ct{constructor(e=.5,t=1,i=32,o=1,r=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:o,thetaStart:r,thetaLength:s},i=Math.max(3,i),o=Math.max(1,o);const a=[],c=[],l=[],f=[];let p=e;const h=(t-e)/o,m=new V,v=new Ue;for(let y=0;y<=o;y++){for(let g=0;g<=i;g++){const _=r+g/i*s;m.x=p*Math.cos(_),m.y=p*Math.sin(_),c.push(m.x,m.y,m.z),l.push(0,0,1),v.x=(m.x/t+1)/2,v.y=(m.y/t+1)/2,f.push(v.x,v.y)}p+=h}for(let y=0;y<o;y++){const g=y*(i+1);for(let _=0;_<i;_++){const E=_+g,A=E,S=E+i+1,R=E+i+2,C=E+1;a.push(A,S,C),a.push(S,R,C)}}this.setIndex(a),this.setAttribute("position",new vt(c,3)),this.setAttribute("normal",new vt(l,3)),this.setAttribute("uv",new vt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Cn extends Ct{constructor(e=1,t=32,i=16,o=0,r=Math.PI*2,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:o,phiLength:r,thetaStart:s,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(s+a,Math.PI);let l=0;const f=[],p=new V,h=new V,m=[],v=[],y=[],g=[];for(let _=0;_<=i;_++){const E=[],A=_/i;let S=0;_===0&&s===0?S=.5/t:_===i&&c===Math.PI&&(S=-.5/t);for(let R=0;R<=t;R++){const C=R/t;p.x=-e*Math.cos(o+C*r)*Math.sin(s+A*a),p.y=e*Math.cos(s+A*a),p.z=e*Math.sin(o+C*r)*Math.sin(s+A*a),v.push(p.x,p.y,p.z),h.copy(p).normalize(),y.push(h.x,h.y,h.z),g.push(C+S,1-A),E.push(l++)}f.push(E)}for(let _=0;_<i;_++)for(let E=0;E<t;E++){const A=f[_][E+1],S=f[_][E],R=f[_+1][E],C=f[_+1][E+1];(_!==0||s>0)&&m.push(A,S,C),(_!==i-1||c<Math.PI)&&m.push(S,R,C)}this.setIndex(m),this.setAttribute("position",new vt(v,3)),this.setAttribute("normal",new vt(y,3)),this.setAttribute("uv",new vt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class wc extends Ct{constructor(e=1,t=.4,i=12,o=48,r=Math.PI*2,s=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:o,arc:r,thetaStart:s,thetaLength:a},i=Math.floor(i),o=Math.floor(o);const c=[],l=[],f=[],p=[],h=new V,m=new V,v=new V;for(let y=0;y<=i;y++){const g=s+y/i*a;for(let _=0;_<=o;_++){const E=_/o*r;m.x=(e+t*Math.cos(g))*Math.cos(E),m.y=(e+t*Math.cos(g))*Math.sin(E),m.z=t*Math.sin(g),l.push(m.x,m.y,m.z),h.x=e*Math.cos(E),h.y=e*Math.sin(E),v.subVectors(m,h).normalize(),f.push(v.x,v.y,v.z),p.push(_/o),p.push(y/i)}}for(let y=1;y<=i;y++)for(let g=1;g<=o;g++){const _=(o+1)*y+g-1,E=(o+1)*(y-1)+g-1,A=(o+1)*(y-1)+g,S=(o+1)*y+g;c.push(_,E,S),c.push(E,A,S)}this.setIndex(c),this.setAttribute("position",new vt(l,3)),this.setAttribute("normal",new vt(f,3)),this.setAttribute("uv",new vt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function _o(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const o=n[t][i];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(Oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=o.clone():Array.isArray(o)?e[t][i]=o.slice():e[t][i]=o}}return e}function Gt(n){const e={};for(let t=0;t<n.length;t++){const i=_o(n[t]);for(const o in i)e[o]=i[o]}return e}function XT(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Wp(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const YT={clone:_o,merge:Gt};var $T=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,JT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wn extends hi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$T,this.fragmentShader=JT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_o(e.uniforms),this.uniformsGroups=XT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const s=this.uniforms[o].value;s&&s.isTexture?t.uniforms[o]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[o]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[o]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[o]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[o]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[o]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[o]={type:"m4",value:s.toArray()}:t.uniforms[o]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const o in this.extensions)this.extensions[o]===!0&&(i[o]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class KT extends wn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Wt extends hi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dp,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ZT extends hi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class QT extends hi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const xa={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(Rf(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!Rf(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function Rf(n){try{const e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class jT{constructor(e,t,i){const o=this;let r=!1,s=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(f){a++,r===!1&&o.onStart!==void 0&&o.onStart(f,s,a),r=!0},this.itemEnd=function(f){s++,o.onProgress!==void 0&&o.onProgress(f,s,a),s===a&&(r=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(f){o.onError!==void 0&&o.onError(f)},this.resolveURL=function(f){return c?c(f):f},this.setURLModifier=function(f){return c=f,this},this.addHandler=function(f,p){return l.push(f,p),this},this.removeHandler=function(f){const p=l.indexOf(f);return p!==-1&&l.splice(p,2),this},this.getHandler=function(f){for(let p=0,h=l.length;p<h;p+=2){const m=l[p],v=l[p+1];if(m.global&&(m.lastIndex=0),m.test(f))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const eM=new jT;class bc{constructor(e){this.manager=e!==void 0?e:eM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(o,r){i.load(e,o,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}bc.DEFAULT_MATERIAL_NAME="__DEFAULT";const Qi=new WeakMap;class tM extends bc{constructor(e){super(e)}load(e,t,i,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=xa.get(`image:${e}`);if(s!==void 0){if(s.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0);else{let p=Qi.get(s);p===void 0&&(p=[],Qi.set(s,p)),p.push({onLoad:t,onError:o})}return s}const a=zo("img");function c(){f(),t&&t(this);const p=Qi.get(this)||[];for(let h=0;h<p.length;h++){const m=p[h];m.onLoad&&m.onLoad(this)}Qi.delete(this),r.manager.itemEnd(e)}function l(p){f(),o&&o(p),xa.remove(`image:${e}`);const h=Qi.get(this)||[];for(let m=0;m<h.length;m++){const v=h[m];v.onError&&v.onError(p)}Qi.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function f(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),xa.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class nM extends bc{constructor(e){super(e)}load(e,t,i,o){const r=new Nt,s=new tM(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,o),r}}class Ic extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Ea=new mt,Pf=new V,Df=new V;class qp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.mapType=Zt,this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sc,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Pf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Pf),Df.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Df),t.updateMatrixWorld(),Ea.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ea,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Ho||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ea)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Rr=new V,Pr=new ui,gn=new V;class Xp extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=En,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Rr,Pr,gn),gn.x===1&&gn.y===1&&gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rr,Pr,gn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Rr,Pr,gn),gn.x===1&&gn.y===1&&gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rr,Pr,gn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ni=new V,Nf=new Ue,Lf=new Ue;class Kt extends Xp{constructor(e=50,t=1,i=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ol*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ol*2*Math.atan(Math.tan(Hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ni.x,ni.y).multiplyScalar(-e/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ni.x,ni.y).multiplyScalar(-e/ni.z)}getViewSize(e,t){return this.getViewBounds(e,Nf,Lf),t.subVectors(Lf,Nf)}setViewOffset(e,t,i,o,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Hr*.5*this.fov)/this.zoom,i=2*t,o=this.aspect*i,r=-.5*o;const s=this.view;if(this.view!==null&&this.view.enabled){const c=s.fullWidth,l=s.fullHeight;r+=s.offsetX*o/c,t-=s.offsetY*i/l,o*=s.width/c,i*=s.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+o,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class iM extends qp{constructor(){super(new Kt(90,1,.5,500)),this.isPointLightShadow=!0}}class qn extends Ic{constructor(e,t,i=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=o,this.shadow=new iM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Rc extends Xp{constructor(e=-1,t=1,i=1,o=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=o,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,o,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let r=i-e,s=i+e,a=o+t,c=o-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,s=r+l*this.view.width,a-=f*this.view.offsetY,c=a-f*this.view.height}this.projectionMatrix.makeOrthographic(r,s,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class oM extends qp{constructor(){super(new Rc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class rM extends Ic{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new oM}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class sM extends Ic{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const ji=-90,eo=1;class aM extends Tt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Kt(ji,eo,e,t);o.layers=this.layers,this.add(o);const r=new Kt(ji,eo,e,t);r.layers=this.layers,this.add(r);const s=new Kt(ji,eo,e,t);s.layers=this.layers,this.add(s);const a=new Kt(ji,eo,e,t);a.layers=this.layers,this.add(a);const c=new Kt(ji,eo,e,t);c.layers=this.layers,this.add(c);const l=new Kt(ji,eo,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,o,r,s,a,c]=t;for(const l of t)this.remove(l);if(e===En)i.up.set(0,1,0),i.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ho)i.up.set(0,-1,0),i.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,a,c,l,f]=this.children,p=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,o),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,o),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,2,o),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,o),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,o),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,o),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(p,h,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class lM extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Uf=new mt;class cM{constructor(e,t,i=0,o=1/0){this.ray=new Jo(e,t),this.near=i,this.far=o,this.camera=null,this.layers=new xc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Qe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Uf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Uf),this}intersectObject(e,t=!0,i=[]){return Vl(e,this,i,t),i.sort(Ff),i}intersectObjects(e,t=!0,i=[]){for(let o=0,r=e.length;o<r;o++)Vl(e[o],this,i,t);return i.sort(Ff),i}}function Ff(n,e){return n.distance-e.distance}function Vl(n,e,t,i){let o=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(o=!1),o===!0&&i===!0){const r=n.children;for(let s=0,a=r.length;s<a;s++)Vl(r[s],e,t,!0)}}class Bf{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ke(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ke(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class uM extends Ni{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Oe("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function kf(n,e,t,i){const o=dM(i);switch(t){case Ip:return n*e;case Pp:return n*e/o.components*o.byteLength;case pc:return n*e/o.components*o.byteLength;case mo:return n*e*2/o.components*o.byteLength;case mc:return n*e*2/o.components*o.byteLength;case Rp:return n*e*3/o.components*o.byteLength;case un:return n*e*4/o.components*o.byteLength;case gc:return n*e*4/o.components*o.byteLength;case kr:case Or:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Gr:case Vr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case al:case cl:return Math.max(n,16)*Math.max(e,8)/4;case sl:case ll:return Math.max(n,8)*Math.max(e,8)/2;case ul:case dl:case hl:case pl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case fl:case ml:case gl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case _l:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case vl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case yl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case xl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case El:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Sl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Tl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ml:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Al:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Cl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case wl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case bl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Il:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Rl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Pl:case Dl:case Nl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ll:case Ul:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Fl:case Bl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function dM(n){switch(n){case Zt:case Ap:return{byteLength:1,components:1};case Go:case Cp:case zn:return{byteLength:2,components:1};case fc:case hc:return{byteLength:2,components:4};case Mn:case dc:case xn:return{byteLength:4,components:1};case wp:case bp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cc}}));typeof window<"u"&&(window.__THREE__?Oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Yp(){let n=null,e=!1,t=null,i=null;function o(r,s){t(r,s),i=n.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(o),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function fM(n){const e=new WeakMap;function t(a,c){const l=a.array,f=a.usage,p=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,f),a.onUploadCallback();let m;if(l instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=n.SHORT;else if(l instanceof Uint32Array)m=n.UNSIGNED_INT;else if(l instanceof Int32Array)m=n.INT;else if(l instanceof Int8Array)m=n.BYTE;else if(l instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:p}}function i(a,c,l){const f=c.array,p=c.updateRanges;if(n.bindBuffer(l,a),p.length===0)n.bufferSubData(l,0,f);else{p.sort((m,v)=>m.start-v.start);let h=0;for(let m=1;m<p.length;m++){const v=p[h],y=p[m];y.start<=v.start+v.count+1?v.count=Math.max(v.count,y.start+y.count-v.start):(++h,p[h]=y)}p.length=h+1;for(let m=0,v=p.length;m<v;m++){const y=p[m];n.bufferSubData(l,y.start*f.BYTES_PER_ELEMENT,f,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function o(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function s(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:o,remove:r,update:s}}var hM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,mM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_M=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,xM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,EM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,SM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,TM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,MM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,AM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,CM=`#ifdef USE_IRIDESCENCE
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
#endif`,wM=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,bM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,IM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,RM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,PM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,DM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,NM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,LM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,UM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,FM=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
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
} // validated`,BM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,kM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,OM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,GM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,VM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,HM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zM="gl_FragColor = linearToOutputTexel( gl_FragColor );",WM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qM=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,XM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,YM=`#ifdef USE_ENVMAP
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
#endif`,$M=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,JM=`#ifdef USE_ENVMAP
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
#endif`,KM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ZM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,QM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eA=`#ifdef USE_GRADIENTMAP
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
}`,tA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,oA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,rA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,sA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,aA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,dA=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
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
	vec3 f0 = material.specularColorBlended;
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
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,fA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,pA=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_A=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,EA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,SA=`#if defined( USE_POINTS_UV )
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
#endif`,TA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,MA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,AA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,CA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,IA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
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
vec3 nonPerturbedNormal = normal;`,PA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,DA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,UA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
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
#endif`,FA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,BA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,OA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,GA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,VA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,HA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,WA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,XA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,YA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$A=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,JA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,KA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ZA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,QA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,eC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tC=`#ifdef USE_SKINNING
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
#endif`,nC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,oC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rC=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sC=`#ifdef USE_TRANSMISSION
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
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,aC=`#ifdef USE_TRANSMISSION
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
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,lC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
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
#endif`,cC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
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
#endif`,uC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
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
#endif`,dC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hC=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mC=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_C=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,yC=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,xC=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,EC=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,SC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,TC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MC=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,AC=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,CC=`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,wC=`uniform vec3 diffuse;
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
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bC=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,IC=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RC=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,PC=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DC=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,NC=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,LC=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,UC=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FC=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,BC=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kC=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,OC=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GC=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,VC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,HC=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,zC=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,WC=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,qC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:hM,alphahash_pars_fragment:pM,alphamap_fragment:mM,alphamap_pars_fragment:gM,alphatest_fragment:_M,alphatest_pars_fragment:vM,aomap_fragment:yM,aomap_pars_fragment:xM,batching_pars_vertex:EM,batching_vertex:SM,begin_vertex:TM,beginnormal_vertex:MM,bsdfs:AM,iridescence_fragment:CM,bumpmap_pars_fragment:wM,clipping_planes_fragment:bM,clipping_planes_pars_fragment:IM,clipping_planes_pars_vertex:RM,clipping_planes_vertex:PM,color_fragment:DM,color_pars_fragment:NM,color_pars_vertex:LM,color_vertex:UM,common:FM,cube_uv_reflection_fragment:BM,defaultnormal_vertex:kM,displacementmap_pars_vertex:OM,displacementmap_vertex:GM,emissivemap_fragment:VM,emissivemap_pars_fragment:HM,colorspace_fragment:zM,colorspace_pars_fragment:WM,envmap_fragment:qM,envmap_common_pars_fragment:XM,envmap_pars_fragment:YM,envmap_pars_vertex:$M,envmap_physical_pars_fragment:rA,envmap_vertex:JM,fog_vertex:KM,fog_pars_vertex:ZM,fog_fragment:QM,fog_pars_fragment:jM,gradientmap_pars_fragment:eA,lightmap_pars_fragment:tA,lights_lambert_fragment:nA,lights_lambert_pars_fragment:iA,lights_pars_begin:oA,lights_toon_fragment:sA,lights_toon_pars_fragment:aA,lights_phong_fragment:lA,lights_phong_pars_fragment:cA,lights_physical_fragment:uA,lights_physical_pars_fragment:dA,lights_fragment_begin:fA,lights_fragment_maps:hA,lights_fragment_end:pA,logdepthbuf_fragment:mA,logdepthbuf_pars_fragment:gA,logdepthbuf_pars_vertex:_A,logdepthbuf_vertex:vA,map_fragment:yA,map_pars_fragment:xA,map_particle_fragment:EA,map_particle_pars_fragment:SA,metalnessmap_fragment:TA,metalnessmap_pars_fragment:MA,morphinstance_vertex:AA,morphcolor_vertex:CA,morphnormal_vertex:wA,morphtarget_pars_vertex:bA,morphtarget_vertex:IA,normal_fragment_begin:RA,normal_fragment_maps:PA,normal_pars_fragment:DA,normal_pars_vertex:NA,normal_vertex:LA,normalmap_pars_fragment:UA,clearcoat_normal_fragment_begin:FA,clearcoat_normal_fragment_maps:BA,clearcoat_pars_fragment:kA,iridescence_pars_fragment:OA,opaque_fragment:GA,packing:VA,premultiplied_alpha_fragment:HA,project_vertex:zA,dithering_fragment:WA,dithering_pars_fragment:qA,roughnessmap_fragment:XA,roughnessmap_pars_fragment:YA,shadowmap_pars_fragment:$A,shadowmap_pars_vertex:JA,shadowmap_vertex:KA,shadowmask_pars_fragment:ZA,skinbase_vertex:QA,skinning_pars_vertex:jA,skinning_vertex:eC,skinnormal_vertex:tC,specularmap_fragment:nC,specularmap_pars_fragment:iC,tonemapping_fragment:oC,tonemapping_pars_fragment:rC,transmission_fragment:sC,transmission_pars_fragment:aC,uv_pars_fragment:lC,uv_pars_vertex:cC,uv_vertex:uC,worldpos_vertex:dC,background_vert:fC,background_frag:hC,backgroundCube_vert:pC,backgroundCube_frag:mC,cube_vert:gC,cube_frag:_C,depth_vert:vC,depth_frag:yC,distance_vert:xC,distance_frag:EC,equirect_vert:SC,equirect_frag:TC,linedashed_vert:MC,linedashed_frag:AC,meshbasic_vert:CC,meshbasic_frag:wC,meshlambert_vert:bC,meshlambert_frag:IC,meshmatcap_vert:RC,meshmatcap_frag:PC,meshnormal_vert:DC,meshnormal_frag:NC,meshphong_vert:LC,meshphong_frag:UC,meshphysical_vert:FC,meshphysical_frag:BC,meshtoon_vert:kC,meshtoon_frag:OC,points_vert:GC,points_frag:VC,shadow_vert:HC,shadow_frag:zC,sprite_vert:WC,sprite_frag:qC},pe={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},vn={basic:{uniforms:Gt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Gt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ze(0)},envMapIntensity:{value:1}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Gt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Gt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Gt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Gt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Gt([pe.points,pe.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Gt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Gt([pe.common,pe.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Gt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Gt([pe.sprite,pe.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distance:{uniforms:Gt([pe.common,pe.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distance_vert,fragmentShader:Ye.distance_frag},shadow:{uniforms:Gt([pe.lights,pe.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};vn.physical={uniforms:Gt([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const Dr={r:0,b:0,g:0},xi=new An,XC=new mt;function YC(n,e,t,i,o,r){const s=new Ze(0);let a=o===!0?0:1,c,l,f=null,p=0,h=null;function m(E){let A=E.isScene===!0?E.background:null;if(A&&A.isTexture){const S=E.backgroundBlurriness>0;A=e.get(A,S)}return A}function v(E){let A=!1;const S=m(E);S===null?g(s,a):S&&S.isColor&&(g(S,1),A=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(E,A){const S=m(A);S&&(S.isCubeTexture||S.mapping===ds)?(l===void 0&&(l=new st(new kn(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:_o(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(R,C,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),xi.copy(A.backgroundRotation),xi.x*=-1,xi.y*=-1,xi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),l.material.uniforms.envMap.value=S,l.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(XC.makeRotationFromEuler(xi)),l.material.toneMapped=et.getTransfer(S.colorSpace)!==rt,(f!==S||p!==S.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,f=S,p=S.version,h=n.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new st(new Ko(2,2),new wn({name:"BackgroundMaterial",uniforms:_o(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=et.getTransfer(S.colorSpace)!==rt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||p!==S.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,f=S,p=S.version,h=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function g(E,A){E.getRGB(Dr,Wp(n)),t.buffers.color.setClear(Dr.r,Dr.g,Dr.b,A,r)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return s},setClearColor:function(E,A=1){s.set(E),a=A,g(s,a)},getClearAlpha:function(){return a},setClearAlpha:function(E){a=E,g(s,a)},render:v,addToRenderList:y,dispose:_}}function $C(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},o=h(null);let r=o,s=!1;function a(I,N,L,k,z){let q=!1;const W=p(I,k,L,N);r!==W&&(r=W,l(r.object)),q=m(I,k,L,z),q&&v(I,k,L,z),z!==null&&e.update(z,n.ELEMENT_ARRAY_BUFFER),(q||s)&&(s=!1,S(I,N,L,k),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function c(){return n.createVertexArray()}function l(I){return n.bindVertexArray(I)}function f(I){return n.deleteVertexArray(I)}function p(I,N,L,k){const z=k.wireframe===!0;let q=i[N.id];q===void 0&&(q={},i[N.id]=q);const W=I.isInstancedMesh===!0?I.id:0;let ie=q[W];ie===void 0&&(ie={},q[W]=ie);let oe=ie[L.id];oe===void 0&&(oe={},ie[L.id]=oe);let F=oe[z];return F===void 0&&(F=h(c()),oe[z]=F),F}function h(I){const N=[],L=[],k=[];for(let z=0;z<t;z++)N[z]=0,L[z]=0,k[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:L,attributeDivisors:k,object:I,attributes:{},index:null}}function m(I,N,L,k){const z=r.attributes,q=N.attributes;let W=0;const ie=L.getAttributes();for(const oe in ie)if(ie[oe].location>=0){const D=z[oe];let ee=q[oe];if(ee===void 0&&(oe==="instanceMatrix"&&I.instanceMatrix&&(ee=I.instanceMatrix),oe==="instanceColor"&&I.instanceColor&&(ee=I.instanceColor)),D===void 0||D.attribute!==ee||ee&&D.data!==ee.data)return!0;W++}return r.attributesNum!==W||r.index!==k}function v(I,N,L,k){const z={},q=N.attributes;let W=0;const ie=L.getAttributes();for(const oe in ie)if(ie[oe].location>=0){let D=q[oe];D===void 0&&(oe==="instanceMatrix"&&I.instanceMatrix&&(D=I.instanceMatrix),oe==="instanceColor"&&I.instanceColor&&(D=I.instanceColor));const ee={};ee.attribute=D,D&&D.data&&(ee.data=D.data),z[oe]=ee,W++}r.attributes=z,r.attributesNum=W,r.index=k}function y(){const I=r.newAttributes;for(let N=0,L=I.length;N<L;N++)I[N]=0}function g(I){_(I,0)}function _(I,N){const L=r.newAttributes,k=r.enabledAttributes,z=r.attributeDivisors;L[I]=1,k[I]===0&&(n.enableVertexAttribArray(I),k[I]=1),z[I]!==N&&(n.vertexAttribDivisor(I,N),z[I]=N)}function E(){const I=r.newAttributes,N=r.enabledAttributes;for(let L=0,k=N.length;L<k;L++)N[L]!==I[L]&&(n.disableVertexAttribArray(L),N[L]=0)}function A(I,N,L,k,z,q,W){W===!0?n.vertexAttribIPointer(I,N,L,z,q):n.vertexAttribPointer(I,N,L,k,z,q)}function S(I,N,L,k){y();const z=k.attributes,q=L.getAttributes(),W=N.defaultAttributeValues;for(const ie in q){const oe=q[ie];if(oe.location>=0){let F=z[ie];if(F===void 0&&(ie==="instanceMatrix"&&I.instanceMatrix&&(F=I.instanceMatrix),ie==="instanceColor"&&I.instanceColor&&(F=I.instanceColor)),F!==void 0){const D=F.normalized,ee=F.itemSize,ae=e.get(F);if(ae===void 0)continue;const Ee=ae.buffer,ye=ae.type,X=ae.bytesPerElement,J=ye===n.INT||ye===n.UNSIGNED_INT||F.gpuType===dc;if(F.isInterleavedBufferAttribute){const Z=F.data,he=Z.stride,fe=F.offset;if(Z.isInstancedInterleavedBuffer){for(let ve=0;ve<oe.locationSize;ve++)_(oe.location+ve,Z.meshPerAttribute);I.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ve=0;ve<oe.locationSize;ve++)g(oe.location+ve);n.bindBuffer(n.ARRAY_BUFFER,Ee);for(let ve=0;ve<oe.locationSize;ve++)A(oe.location+ve,ee/oe.locationSize,ye,D,he*X,(fe+ee/oe.locationSize*ve)*X,J)}else{if(F.isInstancedBufferAttribute){for(let Z=0;Z<oe.locationSize;Z++)_(oe.location+Z,F.meshPerAttribute);I.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let Z=0;Z<oe.locationSize;Z++)g(oe.location+Z);n.bindBuffer(n.ARRAY_BUFFER,Ee);for(let Z=0;Z<oe.locationSize;Z++)A(oe.location+Z,ee/oe.locationSize,ye,D,ee*X,ee/oe.locationSize*Z*X,J)}}else if(W!==void 0){const D=W[ie];if(D!==void 0)switch(D.length){case 2:n.vertexAttrib2fv(oe.location,D);break;case 3:n.vertexAttrib3fv(oe.location,D);break;case 4:n.vertexAttrib4fv(oe.location,D);break;default:n.vertexAttrib1fv(oe.location,D)}}}}E()}function R(){M();for(const I in i){const N=i[I];for(const L in N){const k=N[L];for(const z in k){const q=k[z];for(const W in q)f(q[W].object),delete q[W];delete k[z]}}delete i[I]}}function C(I){if(i[I.id]===void 0)return;const N=i[I.id];for(const L in N){const k=N[L];for(const z in k){const q=k[z];for(const W in q)f(q[W].object),delete q[W];delete k[z]}}delete i[I.id]}function b(I){for(const N in i){const L=i[N];for(const k in L){const z=L[k];if(z[I.id]===void 0)continue;const q=z[I.id];for(const W in q)f(q[W].object),delete q[W];delete z[I.id]}}}function x(I){for(const N in i){const L=i[N],k=I.isInstancedMesh===!0?I.id:0,z=L[k];if(z!==void 0){for(const q in z){const W=z[q];for(const ie in W)f(W[ie].object),delete W[ie];delete z[q]}delete L[k],Object.keys(L).length===0&&delete i[N]}}}function M(){B(),s=!0,r!==o&&(r=o,l(r.object))}function B(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:a,reset:M,resetDefaultState:B,dispose:R,releaseStatesOfGeometry:C,releaseStatesOfObject:x,releaseStatesOfProgram:b,initAttributes:y,enableAttribute:g,disableUnusedAttributes:E}}function JC(n,e,t){let i;function o(l){i=l}function r(l,f){n.drawArrays(i,l,f),t.update(f,i,1)}function s(l,f,p){p!==0&&(n.drawArraysInstanced(i,l,f,p),t.update(f,i,p))}function a(l,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,f,0,p);let m=0;for(let v=0;v<p;v++)m+=f[v];t.update(m,i,1)}function c(l,f,p,h){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<l.length;v++)s(l[v],f[v],h[v]);else{m.multiDrawArraysInstancedWEBGL(i,l,0,f,0,h,0,p);let v=0;for(let y=0;y<p;y++)v+=f[y]*h[y];t.update(v,i,1)}}this.setMode=o,this.render=r,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function KC(n,e,t,i){let o;function r(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");o=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function s(b){return!(b!==un&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const x=b===zn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Zt&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==xn&&!x)}function c(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const f=c(l);f!==l&&(Oe("WebGLRenderer:",l,"not supported, using",f,"instead."),l=f);const p=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=n.getParameter(n.MAX_SAMPLES),C=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:s,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:p,reversedDepthBuffer:h,maxTextures:m,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:E,maxVaryings:A,maxFragmentUniforms:S,maxSamples:R,samples:C}}function ZC(n){const e=this;let t=null,i=0,o=!1,r=!1;const s=new oi,a=new Xe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){const m=p.length!==0||h||i!==0||o;return o=h,i=p.length,m},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,h){t=f(p,h,0)},this.setState=function(p,h,m){const v=p.clippingPlanes,y=p.clipIntersection,g=p.clipShadows,_=n.get(p);if(!o||v===null||v.length===0||r&&!g)r?f(null):l();else{const E=r?0:i,A=E*4;let S=_.clippingState||null;c.value=S,S=f(v,h,A,m);for(let R=0;R!==A;++R)S[R]=t[R];_.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(p,h,m,v){const y=p!==null?p.length:0;let g=null;if(y!==0){if(g=c.value,v!==!0||g===null){const _=m+y*4,E=h.matrixWorldInverse;a.getNormalMatrix(E),(g===null||g.length<_)&&(g=new Float32Array(_));for(let A=0,S=m;A!==y;++A,S+=4)s.copy(p[A]).applyMatrix4(E,a),s.normal.toArray(g,S),g[S+3]=s.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}const ai=4,Of=[.125,.215,.35,.446,.526,.582],Mi=20,QC=256,Lo=new Rc,Gf=new Ze;let Sa=null,Ta=0,Ma=0,Aa=!1;const jC=new V;class Vf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,o=100,r={}){const{size:s=256,position:a=jC}=r;Sa=this._renderer.getRenderTarget(),Ta=this._renderer.getActiveCubeFace(),Ma=this._renderer.getActiveMipmapLevel(),Aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,o,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Sa,Ta,Ma),this._renderer.xr.enabled=Aa,e.scissorTest=!1,to(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ii||e.mapping===po?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sa=this._renderer.getRenderTarget(),Ta=this._renderer.getActiveCubeFace(),Ma=this._renderer.getActiveMipmapLevel(),Aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:zn,format:un,colorSpace:go,depthBuffer:!1},o=Hf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hf(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ew(r)),this._blurMaterial=nw(r,e,t),this._ggxMaterial=tw(r,e,t)}return o}_compileMaterial(e){const t=new st(new Ct,e);this._renderer.compile(t,Lo)}_sceneToCubeUV(e,t,i,o,r){const c=new Kt(90,1,t,i),l=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],p=this._renderer,h=p.autoClear,m=p.toneMapping;p.getClearColor(Gf),p.toneMapping=Sn,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(o),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new st(new kn,new di({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,g=y.material;let _=!1;const E=e.background;E?E.isColor&&(g.color.copy(E),e.background=null,_=!0):(g.color.copy(Gf),_=!0);for(let A=0;A<6;A++){const S=A%3;S===0?(c.up.set(0,l[A],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+f[A],r.y,r.z)):S===1?(c.up.set(0,0,l[A]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+f[A],r.z)):(c.up.set(0,l[A],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+f[A]));const R=this._cubeSize;to(o,S*R,A>2?R:0,R,R),p.setRenderTarget(o),_&&p.render(y,c),p.render(e,c)}p.toneMapping=m,p.autoClear=h,e.background=E}_textureToCubeUV(e,t){const i=this._renderer,o=e.mapping===Ii||e.mapping===po;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zf());const r=o?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=r;const a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;to(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(s,Lo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let r=1;r<o;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const o=this._renderer,r=this._pingPongRenderTarget,s=this._ggxMaterial,a=this._lodMeshes[i];a.material=s;const c=s.uniforms,l=i/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),p=Math.sqrt(l*l-f*f),h=0+l*1.25,m=p*h,{_lodMax:v}=this,y=this._sizeLods[i],g=3*y*(i>v-ai?i-v+ai:0),_=4*(this._cubeSize-y);c.envMap.value=e.texture,c.roughness.value=m,c.mipInt.value=v-t,to(r,g,_,3*y,2*y),o.setRenderTarget(r),o.render(a,Lo),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=v-i,to(e,g,_,3*y,2*y),o.setRenderTarget(e),o.render(a,Lo)}_blur(e,t,i,o,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,o,"latitudinal",r),this._halfBlur(s,e,i,i,o,"longitudinal",r)}_halfBlur(e,t,i,o,r,s,a){const c=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&Qe("blur direction must be either latitudinal or longitudinal!");const f=3,p=this._lodMeshes[o];p.material=l;const h=l.uniforms,m=this._sizeLods[i]-1,v=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Mi-1),y=r/v,g=isFinite(r)?1+Math.floor(f*y):Mi;g>Mi&&Oe(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Mi}`);const _=[];let E=0;for(let b=0;b<Mi;++b){const x=b/y,M=Math.exp(-x*x/2);_.push(M),b===0?E+=M:b<g&&(E+=2*M)}for(let b=0;b<_.length;b++)_[b]=_[b]/E;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=_,h.latitudinal.value=s==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:A}=this;h.dTheta.value=v,h.mipInt.value=A-i;const S=this._sizeLods[o],R=3*S*(o>A-ai?o-A+ai:0),C=4*(this._cubeSize-S);to(t,R,C,3*S,2*S),c.setRenderTarget(t),c.render(p,Lo)}}function ew(n){const e=[],t=[],i=[];let o=n;const r=n-ai+1+Of.length;for(let s=0;s<r;s++){const a=Math.pow(2,o);e.push(a);let c=1/a;s>n-ai?c=Of[s-n+ai-1]:s===0&&(c=0),t.push(c);const l=1/(a-2),f=-l,p=1+l,h=[f,f,p,f,p,p,f,f,p,p,f,p],m=6,v=6,y=3,g=2,_=1,E=new Float32Array(y*v*m),A=new Float32Array(g*v*m),S=new Float32Array(_*v*m);for(let C=0;C<m;C++){const b=C%3*2/3-1,x=C>2?0:-1,M=[b,x,0,b+2/3,x,0,b+2/3,x+1,0,b,x,0,b+2/3,x+1,0,b,x+1,0];E.set(M,y*v*C),A.set(h,g*v*C);const B=[C,C,C,C,C,C];S.set(B,_*v*C)}const R=new Ct;R.setAttribute("position",new qt(E,y)),R.setAttribute("uv",new qt(A,g)),R.setAttribute("faceIndex",new qt(S,_)),i.push(new st(R,null)),o>ai&&o--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Hf(n,e,t){const i=new Tn(n,e,t);return i.texture.mapping=ds,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function to(n,e,t,i,o){n.viewport.set(e,t,i,o),n.scissor.set(e,t,i,o)}function tw(n,e,t){return new wn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:QC,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:fs(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function nw(n,e,t){const i=new Float32Array(Mi),o=new V(0,1,0);return new wn({name:"SphericalGaussianBlur",defines:{n:Mi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:fs(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function zf(){return new wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fs(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function Wf(){return new wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function fs(){return`

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
	`}class $p extends Tn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},o=[i,i,i,i,i,i];this.texture=new Hp(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new kn(5,5,5),r=new wn({name:"CubemapFromEquirect",uniforms:_o(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:kt,blending:On});r.uniforms.tEquirect.value=t;const s=new st(o,r),a=t.minFilter;return t.minFilter===Ai&&(t.minFilter=Bt),new aM(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,o=!0){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,o);e.setRenderTarget(r)}}function iw(n){let e=new WeakMap,t=new WeakMap,i=null;function o(h,m=!1){return h==null?null:m?s(h):r(h)}function r(h){if(h&&h.isTexture){const m=h.mapping;if(m===Xs||m===Ys)if(e.has(h)){const v=e.get(h).texture;return a(v,h.mapping)}else{const v=h.image;if(v&&v.height>0){const y=new $p(v.height);return y.fromEquirectangularTexture(n,h),e.set(h,y),h.addEventListener("dispose",l),a(y.texture,h.mapping)}else return null}}return h}function s(h){if(h&&h.isTexture){const m=h.mapping,v=m===Xs||m===Ys,y=m===Ii||m===po;if(v||y){let g=t.get(h);const _=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==_)return i===null&&(i=new Vf(n)),g=v?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{const E=h.image;return v&&E&&E.height>0||y&&E&&c(E)?(i===null&&(i=new Vf(n)),g=v?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",f),g.texture):null}}}return h}function a(h,m){return m===Xs?h.mapping=Ii:m===Ys&&(h.mapping=po),h}function c(h){let m=0;const v=6;for(let y=0;y<v;y++)h[y]!==void 0&&m++;return m===v}function l(h){const m=h.target;m.removeEventListener("dispose",l);const v=e.get(m);v!==void 0&&(e.delete(m),v.dispose())}function f(h){const m=h.target;m.removeEventListener("dispose",f);const v=t.get(m);v!==void 0&&(t.delete(m),v.dispose())}function p(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:o,dispose:p}}function ow(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const o=n.getExtension(i);return e[i]=o,o}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const o=t(i);return o===null&&ts("WebGLRenderer: "+i+" extension not supported."),o}}}function rw(n,e,t,i){const o={},r=new WeakMap;function s(p){const h=p.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",s),delete o[h.id];const m=r.get(h);m&&(e.remove(m),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(p,h){return o[h.id]===!0||(h.addEventListener("dispose",s),o[h.id]=!0,t.memory.geometries++),h}function c(p){const h=p.attributes;for(const m in h)e.update(h[m],n.ARRAY_BUFFER)}function l(p){const h=[],m=p.index,v=p.attributes.position;let y=0;if(v===void 0)return;if(m!==null){const E=m.array;y=m.version;for(let A=0,S=E.length;A<S;A+=3){const R=E[A+0],C=E[A+1],b=E[A+2];h.push(R,C,C,b,b,R)}}else{const E=v.array;y=v.version;for(let A=0,S=E.length/3-1;A<S;A+=3){const R=A+0,C=A+1,b=A+2;h.push(R,C,C,b,b,R)}}const g=new(v.count>=65535?Bp:Fp)(h,1);g.version=y;const _=r.get(p);_&&e.remove(_),r.set(p,g)}function f(p){const h=r.get(p);if(h){const m=p.index;m!==null&&h.version<m.version&&l(p)}else l(p);return r.get(p)}return{get:a,update:c,getWireframeAttribute:f}}function sw(n,e,t){let i;function o(h){i=h}let r,s;function a(h){r=h.type,s=h.bytesPerElement}function c(h,m){n.drawElements(i,m,r,h*s),t.update(m,i,1)}function l(h,m,v){v!==0&&(n.drawElementsInstanced(i,m,r,h*s,v),t.update(m,i,v))}function f(h,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,h,0,v);let g=0;for(let _=0;_<v;_++)g+=m[_];t.update(g,i,1)}function p(h,m,v,y){if(v===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<h.length;_++)l(h[_]/s,m[_],y[_]);else{g.multiDrawElementsInstancedWEBGL(i,m,0,r,h,0,y,0,v);let _=0;for(let E=0;E<v;E++)_+=m[E]*y[E];t.update(_,i,1)}}this.setMode=o,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function aw(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,s,a){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:Qe("WebGLInfo: Unknown draw mode:",s);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:i}}function lw(n,e,t){const i=new WeakMap,o=new _t;function r(s,a,c){const l=s.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=f!==void 0?f.length:0;let h=i.get(a);if(h===void 0||h.count!==p){let B=function(){x.dispose(),i.delete(a),a.removeEventListener("dispose",B)};var m=B;h!==void 0&&h.texture.dispose();const v=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],A=a.morphAttributes.color||[];let S=0;v===!0&&(S=1),y===!0&&(S=2),g===!0&&(S=3);let R=a.attributes.position.count*S,C=1;R>e.maxTextureSize&&(C=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const b=new Float32Array(R*C*4*p),x=new Lp(b,R,C,p);x.type=xn,x.needsUpdate=!0;const M=S*4;for(let I=0;I<p;I++){const N=_[I],L=E[I],k=A[I],z=R*C*4*I;for(let q=0;q<N.count;q++){const W=q*M;v===!0&&(o.fromBufferAttribute(N,q),b[z+W+0]=o.x,b[z+W+1]=o.y,b[z+W+2]=o.z,b[z+W+3]=0),y===!0&&(o.fromBufferAttribute(L,q),b[z+W+4]=o.x,b[z+W+5]=o.y,b[z+W+6]=o.z,b[z+W+7]=0),g===!0&&(o.fromBufferAttribute(k,q),b[z+W+8]=o.x,b[z+W+9]=o.y,b[z+W+10]=o.z,b[z+W+11]=k.itemSize===4?o.w:1)}}h={count:p,texture:x,size:new Ue(R,C)},i.set(a,h),a.addEventListener("dispose",B)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let v=0;for(let g=0;g<l.length;g++)v+=l[g];const y=a.morphTargetsRelative?1:1-v;c.getUniforms().setValue(n,"morphTargetBaseInfluence",y),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function cw(n,e,t,i,o){let r=new WeakMap;function s(l){const f=o.render.frame,p=l.geometry,h=e.get(l,p);if(r.get(h)!==f&&(e.update(h),r.set(h,f)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==f&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,f))),l.isSkinnedMesh){const m=l.skeleton;r.get(m)!==f&&(m.update(),r.set(m,f))}return h}function a(){r=new WeakMap}function c(l){const f=l.target;f.removeEventListener("dispose",c),i.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:s,dispose:a}}const uw={[vp]:"LINEAR_TONE_MAPPING",[yp]:"REINHARD_TONE_MAPPING",[xp]:"CINEON_TONE_MAPPING",[uc]:"ACES_FILMIC_TONE_MAPPING",[Sp]:"AGX_TONE_MAPPING",[Tp]:"NEUTRAL_TONE_MAPPING",[Ep]:"CUSTOM_TONE_MAPPING"};function dw(n,e,t,i,o){const r=new Tn(e,t,{type:n,depthBuffer:i,stencilBuffer:o}),s=new Tn(e,t,{type:zn,depthBuffer:!1,stencilBuffer:!1}),a=new Ct;a.setAttribute("position",new vt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new vt([0,2,0,0,2,0],2));const c=new KT({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new st(a,c),f=new Rc(-1,1,1,-1,0,1);let p=null,h=null,m=!1,v,y=null,g=[],_=!1;this.setSize=function(E,A){r.setSize(E,A),s.setSize(E,A);for(let S=0;S<g.length;S++){const R=g[S];R.setSize&&R.setSize(E,A)}},this.setEffects=function(E){g=E,_=g.length>0&&g[0].isRenderPass===!0;const A=r.width,S=r.height;for(let R=0;R<g.length;R++){const C=g[R];C.setSize&&C.setSize(A,S)}},this.begin=function(E,A){if(m||E.toneMapping===Sn&&g.length===0)return!1;if(y=A,A!==null){const S=A.width,R=A.height;(r.width!==S||r.height!==R)&&this.setSize(S,R)}return _===!1&&E.setRenderTarget(r),v=E.toneMapping,E.toneMapping=Sn,!0},this.hasRenderPass=function(){return _},this.end=function(E,A){E.toneMapping=v,m=!0;let S=r,R=s;for(let C=0;C<g.length;C++){const b=g[C];if(b.enabled!==!1&&(b.render(E,R,S,A),b.needsSwap!==!1)){const x=S;S=R,R=x}}if(p!==E.outputColorSpace||h!==E.toneMapping){p=E.outputColorSpace,h=E.toneMapping,c.defines={},et.getTransfer(p)===rt&&(c.defines.SRGB_TRANSFER="");const C=uw[h];C&&(c.defines[C]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=S.texture,E.setRenderTarget(y),E.render(l,f),y=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){r.dispose(),s.dispose(),a.dispose(),c.dispose()}}const Jp=new Nt,Hl=new Wo(1,1),Kp=new Lp,Zp=new MT,Qp=new Hp,qf=[],Xf=[],Yf=new Float32Array(16),$f=new Float32Array(9),Jf=new Float32Array(4);function Eo(n,e,t){const i=n[0];if(i<=0||i>0)return n;const o=e*t;let r=qf[o];if(r===void 0&&(r=new Float32Array(o),qf[o]=r),e!==0){i.toArray(r,0);for(let s=1,a=0;s!==e;++s)a+=t,n[s].toArray(r,a)}return r}function Mt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function At(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function hs(n,e){let t=Xf[e];t===void 0&&(t=new Int32Array(e),Xf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function fw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function hw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2fv(this.addr,e),At(t,e)}}function pw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;n.uniform3fv(this.addr,e),At(t,e)}}function mw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4fv(this.addr,e),At(t,e)}}function gw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Mt(t,i))return;Jf.set(i),n.uniformMatrix2fv(this.addr,!1,Jf),At(t,i)}}function _w(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Mt(t,i))return;$f.set(i),n.uniformMatrix3fv(this.addr,!1,$f),At(t,i)}}function vw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Mt(t,i))return;Yf.set(i),n.uniformMatrix4fv(this.addr,!1,Yf),At(t,i)}}function yw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function xw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2iv(this.addr,e),At(t,e)}}function Ew(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;n.uniform3iv(this.addr,e),At(t,e)}}function Sw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4iv(this.addr,e),At(t,e)}}function Tw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Mw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2uiv(this.addr,e),At(t,e)}}function Aw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;n.uniform3uiv(this.addr,e),At(t,e)}}function Cw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4uiv(this.addr,e),At(t,e)}}function ww(n,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o);let r;this.type===n.SAMPLER_2D_SHADOW?(Hl.compareFunction=t.isReversedDepthBuffer()?vc:_c,r=Hl):r=Jp,t.setTexture2D(e||r,o)}function bw(n,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o),t.setTexture3D(e||Zp,o)}function Iw(n,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o),t.setTextureCube(e||Qp,o)}function Rw(n,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o),t.setTexture2DArray(e||Kp,o)}function Pw(n){switch(n){case 5126:return fw;case 35664:return hw;case 35665:return pw;case 35666:return mw;case 35674:return gw;case 35675:return _w;case 35676:return vw;case 5124:case 35670:return yw;case 35667:case 35671:return xw;case 35668:case 35672:return Ew;case 35669:case 35673:return Sw;case 5125:return Tw;case 36294:return Mw;case 36295:return Aw;case 36296:return Cw;case 35678:case 36198:case 36298:case 36306:case 35682:return ww;case 35679:case 36299:case 36307:return bw;case 35680:case 36300:case 36308:case 36293:return Iw;case 36289:case 36303:case 36311:case 36292:return Rw}}function Dw(n,e){n.uniform1fv(this.addr,e)}function Nw(n,e){const t=Eo(e,this.size,2);n.uniform2fv(this.addr,t)}function Lw(n,e){const t=Eo(e,this.size,3);n.uniform3fv(this.addr,t)}function Uw(n,e){const t=Eo(e,this.size,4);n.uniform4fv(this.addr,t)}function Fw(n,e){const t=Eo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Bw(n,e){const t=Eo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function kw(n,e){const t=Eo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Ow(n,e){n.uniform1iv(this.addr,e)}function Gw(n,e){n.uniform2iv(this.addr,e)}function Vw(n,e){n.uniform3iv(this.addr,e)}function Hw(n,e){n.uniform4iv(this.addr,e)}function zw(n,e){n.uniform1uiv(this.addr,e)}function Ww(n,e){n.uniform2uiv(this.addr,e)}function qw(n,e){n.uniform3uiv(this.addr,e)}function Xw(n,e){n.uniform4uiv(this.addr,e)}function Yw(n,e,t){const i=this.cache,o=e.length,r=hs(t,o);Mt(i,r)||(n.uniform1iv(this.addr,r),At(i,r));let s;this.type===n.SAMPLER_2D_SHADOW?s=Hl:s=Jp;for(let a=0;a!==o;++a)t.setTexture2D(e[a]||s,r[a])}function $w(n,e,t){const i=this.cache,o=e.length,r=hs(t,o);Mt(i,r)||(n.uniform1iv(this.addr,r),At(i,r));for(let s=0;s!==o;++s)t.setTexture3D(e[s]||Zp,r[s])}function Jw(n,e,t){const i=this.cache,o=e.length,r=hs(t,o);Mt(i,r)||(n.uniform1iv(this.addr,r),At(i,r));for(let s=0;s!==o;++s)t.setTextureCube(e[s]||Qp,r[s])}function Kw(n,e,t){const i=this.cache,o=e.length,r=hs(t,o);Mt(i,r)||(n.uniform1iv(this.addr,r),At(i,r));for(let s=0;s!==o;++s)t.setTexture2DArray(e[s]||Kp,r[s])}function Zw(n){switch(n){case 5126:return Dw;case 35664:return Nw;case 35665:return Lw;case 35666:return Uw;case 35674:return Fw;case 35675:return Bw;case 35676:return kw;case 5124:case 35670:return Ow;case 35667:case 35671:return Gw;case 35668:case 35672:return Vw;case 35669:case 35673:return Hw;case 5125:return zw;case 36294:return Ww;case 36295:return qw;case 36296:return Xw;case 35678:case 36198:case 36298:case 36306:case 35682:return Yw;case 35679:case 36299:case 36307:return $w;case 35680:case 36300:case 36308:case 36293:return Jw;case 36289:case 36303:case 36311:case 36292:return Kw}}class Qw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Pw(t.type)}}class jw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Zw(t.type)}}class eb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const o=this.seq;for(let r=0,s=o.length;r!==s;++r){const a=o[r];a.setValue(e,t[a.id],i)}}}const Ca=/(\w+)(\])?(\[|\.)?/g;function Kf(n,e){n.seq.push(e),n.map[e.id]=e}function tb(n,e,t){const i=n.name,o=i.length;for(Ca.lastIndex=0;;){const r=Ca.exec(i),s=Ca.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&s+2===o){Kf(t,l===void 0?new Qw(a,n,e):new jw(a,n,e));break}else{let p=t.map[a];p===void 0&&(p=new eb(a),Kf(t,p)),t=p}}}class zr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const a=e.getActiveUniform(t,s),c=e.getUniformLocation(t,a.name);tb(a,c,this)}const o=[],r=[];for(const s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(s):r.push(s);o.length>0&&(this.seq=o.concat(r))}setValue(e,t,i,o){const r=this.map[t];r!==void 0&&r.setValue(e,i,o)}setOptional(e,t,i){const o=t[i];o!==void 0&&this.setValue(e,i,o)}static upload(e,t,i,o){for(let r=0,s=t.length;r!==s;++r){const a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,o)}}static seqWithValue(e,t){const i=[];for(let o=0,r=e.length;o!==r;++o){const s=e[o];s.id in t&&i.push(s)}return i}}function Zf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const nb=37297;let ib=0;function ob(n,e){const t=n.split(`
`),i=[],o=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=o;s<r;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return i.join(`
`)}const Qf=new Xe;function rb(n){et._getMatrix(Qf,et.workingColorSpace,n);const e=`mat3( ${Qf.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(n)){case jr:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return Oe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function jf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+ob(n.getShaderSource(e),a)}else return r}function sb(n,e){const t=rb(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const ab={[vp]:"Linear",[yp]:"Reinhard",[xp]:"Cineon",[uc]:"ACESFilmic",[Sp]:"AgX",[Tp]:"Neutral",[Ep]:"Custom"};function lb(n,e){const t=ab[e];return t===void 0?(Oe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Nr=new V;function cb(){et.getLuminanceCoefficients(Nr);const n=Nr.x.toFixed(4),e=Nr.y.toFixed(4),t=Nr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ub(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ko).join(`
`)}function db(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function fb(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let o=0;o<i;o++){const r=n.getActiveAttrib(e,o),s=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[s]={type:r.type,location:n.getAttribLocation(e,s),locationSize:a}}return t}function ko(n){return n!==""}function eh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function th(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hb=/^[ \t]*#include +<([\w\d./]+)>/gm;function zl(n){return n.replace(hb,mb)}const pb=new Map;function mb(n,e){let t=Ye[e];if(t===void 0){const i=pb.get(e);if(i!==void 0)t=Ye[i],Oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return zl(t)}const gb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nh(n){return n.replace(gb,_b)}function _b(n,e,t,i){let o="";for(let r=parseInt(e);r<parseInt(t);r++)o+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return o}function ih(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const vb={[Br]:"SHADOWMAP_TYPE_PCF",[Bo]:"SHADOWMAP_TYPE_VSM"};function yb(n){return vb[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const xb={[Ii]:"ENVMAP_TYPE_CUBE",[po]:"ENVMAP_TYPE_CUBE",[ds]:"ENVMAP_TYPE_CUBE_UV"};function Eb(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":xb[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const Sb={[po]:"ENVMAP_MODE_REFRACTION"};function Tb(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Sb[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Mb={[_p]:"ENVMAP_BLENDING_MULTIPLY",[nT]:"ENVMAP_BLENDING_MIX",[iT]:"ENVMAP_BLENDING_ADD"};function Ab(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Mb[n.combine]||"ENVMAP_BLENDING_NONE"}function Cb(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function wb(n,e,t,i){const o=n.getContext(),r=t.defines;let s=t.vertexShader,a=t.fragmentShader;const c=yb(t),l=Eb(t),f=Tb(t),p=Ab(t),h=Cb(t),m=ub(t),v=db(r),y=o.createProgram();let g,_,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ko).join(`
`),g.length>0&&(g+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ko).join(`
`),_.length>0&&(_+=`
`)):(g=[ih(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ko).join(`
`),_=[ih(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+f:"",t.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Sn?"#define TONE_MAPPING":"",t.toneMapping!==Sn?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Sn?lb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,sb("linearToOutputTexel",t.outputColorSpace),cb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ko).join(`
`)),s=zl(s),s=eh(s,t),s=th(s,t),a=zl(a),a=eh(a,t),a=th(a,t),s=nh(s),a=nh(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,_=["#define varying in",t.glslVersion===lf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===lf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const A=E+g+s,S=E+_+a,R=Zf(o,o.VERTEX_SHADER,A),C=Zf(o,o.FRAGMENT_SHADER,S);o.attachShader(y,R),o.attachShader(y,C),t.index0AttributeName!==void 0?o.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(y,0,"position"),o.linkProgram(y);function b(I){if(n.debug.checkShaderErrors){const N=o.getProgramInfoLog(y)||"",L=o.getShaderInfoLog(R)||"",k=o.getShaderInfoLog(C)||"",z=N.trim(),q=L.trim(),W=k.trim();let ie=!0,oe=!0;if(o.getProgramParameter(y,o.LINK_STATUS)===!1)if(ie=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,y,R,C);else{const F=jf(o,R,"vertex"),D=jf(o,C,"fragment");Qe("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(y,o.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+z+`
`+F+`
`+D)}else z!==""?Oe("WebGLProgram: Program Info Log:",z):(q===""||W==="")&&(oe=!1);oe&&(I.diagnostics={runnable:ie,programLog:z,vertexShader:{log:q,prefix:g},fragmentShader:{log:W,prefix:_}})}o.deleteShader(R),o.deleteShader(C),x=new zr(o,y),M=fb(o,y)}let x;this.getUniforms=function(){return x===void 0&&b(this),x};let M;this.getAttributes=function(){return M===void 0&&b(this),M};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=o.getProgramParameter(y,nb)),B},this.destroy=function(){i.releaseStatesOfProgram(this),o.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ib++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=R,this.fragmentShader=C,this}let bb=0;class Ib{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,o=this._getShaderStage(t),r=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(o)===!1&&(s.add(o),o.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Rb(e),t.set(e,i)),i}}class Rb{constructor(e){this.id=bb++,this.code=e,this.usedTimes=0}}function Pb(n,e,t,i,o,r){const s=new xc,a=new Ib,c=new Set,l=[],f=new Map,p=i.logarithmicDepthBuffer;let h=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return c.add(x),x===0?"uv":`uv${x}`}function y(x,M,B,I,N){const L=I.fog,k=N.geometry,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,q=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,W=e.get(x.envMap||z,q),ie=W&&W.mapping===ds?W.image.height:null,oe=m[x.type];x.precision!==null&&(h=i.getMaxPrecision(x.precision),h!==x.precision&&Oe("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const F=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,D=F!==void 0?F.length:0;let ee=0;k.morphAttributes.position!==void 0&&(ee=1),k.morphAttributes.normal!==void 0&&(ee=2),k.morphAttributes.color!==void 0&&(ee=3);let ae,Ee,ye,X;if(oe){const ot=vn[oe];ae=ot.vertexShader,Ee=ot.fragmentShader}else ae=x.vertexShader,Ee=x.fragmentShader,a.update(x),ye=a.getVertexShaderID(x),X=a.getFragmentShaderID(x);const J=n.getRenderTarget(),Z=n.state.buffers.depth.getReversed(),he=N.isInstancedMesh===!0,fe=N.isBatchedMesh===!0,ve=!!x.map,We=!!x.matcap,Fe=!!W,Ae=!!x.aoMap,He=!!x.lightMap,Be=!!x.bumpMap,je=!!x.normalMap,U=!!x.displacementMap,at=!!x.emissiveMap,qe=!!x.metalnessMap,lt=!!x.roughnessMap,Ce=x.anisotropy>0,P=x.clearcoat>0,T=x.dispersion>0,G=x.iridescence>0,te=x.sheen>0,ne=x.transmission>0,Q=Ce&&!!x.anisotropyMap,Me=P&&!!x.clearcoatMap,ue=P&&!!x.clearcoatNormalMap,De=P&&!!x.clearcoatRoughnessMap,ke=G&&!!x.iridescenceMap,re=G&&!!x.iridescenceThicknessMap,le=te&&!!x.sheenColorMap,we=te&&!!x.sheenRoughnessMap,Ie=!!x.specularMap,xe=!!x.specularColorMap,$e=!!x.specularIntensityMap,O=ne&&!!x.transmissionMap,de=ne&&!!x.thicknessMap,ce=!!x.gradientMap,Te=!!x.alphaMap,se=x.alphaTest>0,j=!!x.alphaHash,be=!!x.extensions;let Ge=Sn;x.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ge=n.toneMapping);const pt={shaderID:oe,shaderType:x.type,shaderName:x.name,vertexShader:ae,fragmentShader:Ee,defines:x.defines,customVertexShaderID:ye,customFragmentShaderID:X,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:fe,batchingColor:fe&&N._colorsTexture!==null,instancing:he,instancingColor:he&&N.instanceColor!==null,instancingMorph:he&&N.morphTexture!==null,outputColorSpace:J===null?n.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:go,alphaToCoverage:!!x.alphaToCoverage,map:ve,matcap:We,envMap:Fe,envMapMode:Fe&&W.mapping,envMapCubeUVHeight:ie,aoMap:Ae,lightMap:He,bumpMap:Be,normalMap:je,displacementMap:U,emissiveMap:at,normalMapObjectSpace:je&&x.normalMapType===sT,normalMapTangentSpace:je&&x.normalMapType===Dp,metalnessMap:qe,roughnessMap:lt,anisotropy:Ce,anisotropyMap:Q,clearcoat:P,clearcoatMap:Me,clearcoatNormalMap:ue,clearcoatRoughnessMap:De,dispersion:T,iridescence:G,iridescenceMap:ke,iridescenceThicknessMap:re,sheen:te,sheenColorMap:le,sheenRoughnessMap:we,specularMap:Ie,specularColorMap:xe,specularIntensityMap:$e,transmission:ne,transmissionMap:O,thicknessMap:de,gradientMap:ce,opaque:x.transparent===!1&&x.blending===lo&&x.alphaToCoverage===!1,alphaMap:Te,alphaTest:se,alphaHash:j,combine:x.combine,mapUv:ve&&v(x.map.channel),aoMapUv:Ae&&v(x.aoMap.channel),lightMapUv:He&&v(x.lightMap.channel),bumpMapUv:Be&&v(x.bumpMap.channel),normalMapUv:je&&v(x.normalMap.channel),displacementMapUv:U&&v(x.displacementMap.channel),emissiveMapUv:at&&v(x.emissiveMap.channel),metalnessMapUv:qe&&v(x.metalnessMap.channel),roughnessMapUv:lt&&v(x.roughnessMap.channel),anisotropyMapUv:Q&&v(x.anisotropyMap.channel),clearcoatMapUv:Me&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:ue&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:re&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:le&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:we&&v(x.sheenRoughnessMap.channel),specularMapUv:Ie&&v(x.specularMap.channel),specularColorMapUv:xe&&v(x.specularColorMap.channel),specularIntensityMapUv:$e&&v(x.specularIntensityMap.channel),transmissionMapUv:O&&v(x.transmissionMap.channel),thicknessMapUv:de&&v(x.thicknessMap.channel),alphaMapUv:Te&&v(x.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(je||Ce),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!k.attributes.uv&&(ve||Te),fog:!!L,useFog:x.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||k.attributes.normal===void 0&&je===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Z,skinning:N.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:ee,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ge,decodeVideoTexture:ve&&x.map.isVideoTexture===!0&&et.getTransfer(x.map.colorSpace)===rt,decodeVideoTextureEmissive:at&&x.emissiveMap.isVideoTexture===!0&&et.getTransfer(x.emissiveMap.colorSpace)===rt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===cn,flipSided:x.side===kt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:be&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&x.extensions.multiDraw===!0||fe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return pt.vertexUv1s=c.has(1),pt.vertexUv2s=c.has(2),pt.vertexUv3s=c.has(3),c.clear(),pt}function g(x){const M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(const B in x.defines)M.push(B),M.push(x.defines[B]);return x.isRawShaderMaterial===!1&&(_(M,x),E(M,x),M.push(n.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function _(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapCubeUVHeight),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.morphAttributeCount),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function E(x,M){s.disableAll(),M.instancing&&s.enable(0),M.instancingColor&&s.enable(1),M.instancingMorph&&s.enable(2),M.matcap&&s.enable(3),M.envMap&&s.enable(4),M.normalMapObjectSpace&&s.enable(5),M.normalMapTangentSpace&&s.enable(6),M.clearcoat&&s.enable(7),M.iridescence&&s.enable(8),M.alphaTest&&s.enable(9),M.vertexColors&&s.enable(10),M.vertexAlphas&&s.enable(11),M.vertexUv1s&&s.enable(12),M.vertexUv2s&&s.enable(13),M.vertexUv3s&&s.enable(14),M.vertexTangents&&s.enable(15),M.anisotropy&&s.enable(16),M.alphaHash&&s.enable(17),M.batching&&s.enable(18),M.dispersion&&s.enable(19),M.batchingColor&&s.enable(20),M.gradientMap&&s.enable(21),x.push(s.mask),s.disableAll(),M.fog&&s.enable(0),M.useFog&&s.enable(1),M.flatShading&&s.enable(2),M.logarithmicDepthBuffer&&s.enable(3),M.reversedDepthBuffer&&s.enable(4),M.skinning&&s.enable(5),M.morphTargets&&s.enable(6),M.morphNormals&&s.enable(7),M.morphColors&&s.enable(8),M.premultipliedAlpha&&s.enable(9),M.shadowMapEnabled&&s.enable(10),M.doubleSided&&s.enable(11),M.flipSided&&s.enable(12),M.useDepthPacking&&s.enable(13),M.dithering&&s.enable(14),M.transmission&&s.enable(15),M.sheen&&s.enable(16),M.opaque&&s.enable(17),M.pointsUvs&&s.enable(18),M.decodeVideoTexture&&s.enable(19),M.decodeVideoTextureEmissive&&s.enable(20),M.alphaToCoverage&&s.enable(21),x.push(s.mask)}function A(x){const M=m[x.type];let B;if(M){const I=vn[M];B=YT.clone(I.uniforms)}else B=x.uniforms;return B}function S(x,M){let B=f.get(M);return B!==void 0?++B.usedTimes:(B=new wb(n,M,x,o),l.push(B),f.set(M,B)),B}function R(x){if(--x.usedTimes===0){const M=l.indexOf(x);l[M]=l[l.length-1],l.pop(),f.delete(x.cacheKey),x.destroy()}}function C(x){a.remove(x)}function b(){a.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:A,acquireProgram:S,releaseProgram:R,releaseShaderCache:C,programs:l,dispose:b}}function Db(){let n=new WeakMap;function e(s){return n.has(s)}function t(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function i(s){n.delete(s)}function o(s,a,c){n.get(s)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:o,dispose:r}}function Nb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function oh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function rh(){const n=[];let e=0;const t=[],i=[],o=[];function r(){e=0,t.length=0,i.length=0,o.length=0}function s(h){let m=0;return h.isInstancedMesh&&(m+=2),h.isSkinnedMesh&&(m+=1),m}function a(h,m,v,y,g,_){let E=n[e];return E===void 0?(E={id:h.id,object:h,geometry:m,material:v,materialVariant:s(h),groupOrder:y,renderOrder:h.renderOrder,z:g,group:_},n[e]=E):(E.id=h.id,E.object=h,E.geometry=m,E.material=v,E.materialVariant=s(h),E.groupOrder=y,E.renderOrder=h.renderOrder,E.z=g,E.group=_),e++,E}function c(h,m,v,y,g,_){const E=a(h,m,v,y,g,_);v.transmission>0?i.push(E):v.transparent===!0?o.push(E):t.push(E)}function l(h,m,v,y,g,_){const E=a(h,m,v,y,g,_);v.transmission>0?i.unshift(E):v.transparent===!0?o.unshift(E):t.unshift(E)}function f(h,m){t.length>1&&t.sort(h||Nb),i.length>1&&i.sort(m||oh),o.length>1&&o.sort(m||oh)}function p(){for(let h=e,m=n.length;h<m;h++){const v=n[h];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:i,transparent:o,init:r,push:c,unshift:l,finish:p,sort:f}}function Lb(){let n=new WeakMap;function e(i,o){const r=n.get(i);let s;return r===void 0?(s=new rh,n.set(i,[s])):o>=r.length?(s=new rh,r.push(s)):s=r[o],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function Ub(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new Ze};break;case"SpotLight":t={position:new V,direction:new V,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new V,halfWidth:new V,halfHeight:new V};break}return n[e.id]=t,t}}}function Fb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Bb=0;function kb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Ob(n){const e=new Ub,t=Fb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new V);const o=new V,r=new mt,s=new mt;function a(l){let f=0,p=0,h=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let m=0,v=0,y=0,g=0,_=0,E=0,A=0,S=0,R=0,C=0,b=0;l.sort(kb);for(let M=0,B=l.length;M<B;M++){const I=l[M],N=I.color,L=I.intensity,k=I.distance;let z=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===mo?z=I.shadow.map.texture:z=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)f+=N.r*L,p+=N.g*L,h+=N.b*L;else if(I.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(I.sh.coefficients[q],L);b++}else if(I.isDirectionalLight){const q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const W=I.shadow,ie=t.get(I);ie.shadowIntensity=W.intensity,ie.shadowBias=W.bias,ie.shadowNormalBias=W.normalBias,ie.shadowRadius=W.radius,ie.shadowMapSize=W.mapSize,i.directionalShadow[m]=ie,i.directionalShadowMap[m]=z,i.directionalShadowMatrix[m]=I.shadow.matrix,E++}i.directional[m]=q,m++}else if(I.isSpotLight){const q=e.get(I);q.position.setFromMatrixPosition(I.matrixWorld),q.color.copy(N).multiplyScalar(L),q.distance=k,q.coneCos=Math.cos(I.angle),q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),q.decay=I.decay,i.spot[y]=q;const W=I.shadow;if(I.map&&(i.spotLightMap[R]=I.map,R++,W.updateMatrices(I),I.castShadow&&C++),i.spotLightMatrix[y]=W.matrix,I.castShadow){const ie=t.get(I);ie.shadowIntensity=W.intensity,ie.shadowBias=W.bias,ie.shadowNormalBias=W.normalBias,ie.shadowRadius=W.radius,ie.shadowMapSize=W.mapSize,i.spotShadow[y]=ie,i.spotShadowMap[y]=z,S++}y++}else if(I.isRectAreaLight){const q=e.get(I);q.color.copy(N).multiplyScalar(L),q.halfWidth.set(I.width*.5,0,0),q.halfHeight.set(0,I.height*.5,0),i.rectArea[g]=q,g++}else if(I.isPointLight){const q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),q.distance=I.distance,q.decay=I.decay,I.castShadow){const W=I.shadow,ie=t.get(I);ie.shadowIntensity=W.intensity,ie.shadowBias=W.bias,ie.shadowNormalBias=W.normalBias,ie.shadowRadius=W.radius,ie.shadowMapSize=W.mapSize,ie.shadowCameraNear=W.camera.near,ie.shadowCameraFar=W.camera.far,i.pointShadow[v]=ie,i.pointShadowMap[v]=z,i.pointShadowMatrix[v]=I.shadow.matrix,A++}i.point[v]=q,v++}else if(I.isHemisphereLight){const q=e.get(I);q.skyColor.copy(I.color).multiplyScalar(L),q.groundColor.copy(I.groundColor).multiplyScalar(L),i.hemi[_]=q,_++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=h;const x=i.hash;(x.directionalLength!==m||x.pointLength!==v||x.spotLength!==y||x.rectAreaLength!==g||x.hemiLength!==_||x.numDirectionalShadows!==E||x.numPointShadows!==A||x.numSpotShadows!==S||x.numSpotMaps!==R||x.numLightProbes!==b)&&(i.directional.length=m,i.spot.length=y,i.rectArea.length=g,i.point.length=v,i.hemi.length=_,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=S+R-C,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=b,x.directionalLength=m,x.pointLength=v,x.spotLength=y,x.rectAreaLength=g,x.hemiLength=_,x.numDirectionalShadows=E,x.numPointShadows=A,x.numSpotShadows=S,x.numSpotMaps=R,x.numLightProbes=b,i.version=Bb++)}function c(l,f){let p=0,h=0,m=0,v=0,y=0;const g=f.matrixWorldInverse;for(let _=0,E=l.length;_<E;_++){const A=l[_];if(A.isDirectionalLight){const S=i.directional[p];S.direction.setFromMatrixPosition(A.matrixWorld),o.setFromMatrixPosition(A.target.matrixWorld),S.direction.sub(o),S.direction.transformDirection(g),p++}else if(A.isSpotLight){const S=i.spot[m];S.position.setFromMatrixPosition(A.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(A.matrixWorld),o.setFromMatrixPosition(A.target.matrixWorld),S.direction.sub(o),S.direction.transformDirection(g),m++}else if(A.isRectAreaLight){const S=i.rectArea[v];S.position.setFromMatrixPosition(A.matrixWorld),S.position.applyMatrix4(g),s.identity(),r.copy(A.matrixWorld),r.premultiply(g),s.extractRotation(r),S.halfWidth.set(A.width*.5,0,0),S.halfHeight.set(0,A.height*.5,0),S.halfWidth.applyMatrix4(s),S.halfHeight.applyMatrix4(s),v++}else if(A.isPointLight){const S=i.point[h];S.position.setFromMatrixPosition(A.matrixWorld),S.position.applyMatrix4(g),h++}else if(A.isHemisphereLight){const S=i.hemi[y];S.direction.setFromMatrixPosition(A.matrixWorld),S.direction.transformDirection(g),y++}}}return{setup:a,setupView:c,state:i}}function sh(n){const e=new Ob(n),t=[],i=[];function o(f){l.camera=f,t.length=0,i.length=0}function r(f){t.push(f)}function s(f){i.push(f)}function a(){e.setup(t)}function c(f){e.setupView(t,f)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:s}}function Gb(n){let e=new WeakMap;function t(o,r=0){const s=e.get(o);let a;return s===void 0?(a=new sh(n),e.set(o,[a])):r>=s.length?(a=new sh(n),s.push(a)):a=s[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const Vb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,zb=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],Wb=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],ah=new mt,Uo=new V,wa=new V;function qb(n,e,t){let i=new Sc;const o=new Ue,r=new Ue,s=new _t,a=new ZT,c=new QT,l={},f=t.maxTextureSize,p={[ci]:kt,[kt]:ci,[cn]:cn},h=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:Vb,fragmentShader:Hb}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const v=new Ct;v.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new st(v,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Br;let _=this.type;this.render=function(C,b,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;this.type===BS&&(Oe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Br);const M=n.getRenderTarget(),B=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),N=n.state;N.setBlending(On),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const L=_!==this.type;L&&b.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(z=>z.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,z=C.length;k<z;k++){const q=C[k],W=q.shadow;if(W===void 0){Oe("WebGLShadowMap:",q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;o.copy(W.mapSize);const ie=W.getFrameExtents();o.multiply(ie),r.copy(W.mapSize),(o.x>f||o.y>f)&&(o.x>f&&(r.x=Math.floor(f/ie.x),o.x=r.x*ie.x,W.mapSize.x=r.x),o.y>f&&(r.y=Math.floor(f/ie.y),o.y=r.y*ie.y,W.mapSize.y=r.y));const oe=n.state.buffers.depth.getReversed();if(W.camera._reversedDepth=oe,W.map===null||L===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Bo){if(q.isPointLight){Oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Tn(o.x,o.y,{format:mo,type:zn,minFilter:Bt,magFilter:Bt,generateMipmaps:!1}),W.map.texture.name=q.name+".shadowMap",W.map.depthTexture=new Wo(o.x,o.y,xn),W.map.depthTexture.name=q.name+".shadowMapDepth",W.map.depthTexture.format=Wn,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Dt,W.map.depthTexture.magFilter=Dt}else q.isPointLight?(W.map=new $p(o.x),W.map.depthTexture=new qT(o.x,Mn)):(W.map=new Tn(o.x,o.y),W.map.depthTexture=new Wo(o.x,o.y,Mn)),W.map.depthTexture.name=q.name+".shadowMap",W.map.depthTexture.format=Wn,this.type===Br?(W.map.depthTexture.compareFunction=oe?vc:_c,W.map.depthTexture.minFilter=Bt,W.map.depthTexture.magFilter=Bt):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Dt,W.map.depthTexture.magFilter=Dt);W.camera.updateProjectionMatrix()}const F=W.map.isWebGLCubeRenderTarget?6:1;for(let D=0;D<F;D++){if(W.map.isWebGLCubeRenderTarget)n.setRenderTarget(W.map,D),n.clear();else{D===0&&(n.setRenderTarget(W.map),n.clear());const ee=W.getViewport(D);s.set(r.x*ee.x,r.y*ee.y,r.x*ee.z,r.y*ee.w),N.viewport(s)}if(q.isPointLight){const ee=W.camera,ae=W.matrix,Ee=q.distance||ee.far;Ee!==ee.far&&(ee.far=Ee,ee.updateProjectionMatrix()),Uo.setFromMatrixPosition(q.matrixWorld),ee.position.copy(Uo),wa.copy(ee.position),wa.add(zb[D]),ee.up.copy(Wb[D]),ee.lookAt(wa),ee.updateMatrixWorld(),ae.makeTranslation(-Uo.x,-Uo.y,-Uo.z),ah.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),W._frustum.setFromProjectionMatrix(ah,ee.coordinateSystem,ee.reversedDepth)}else W.updateMatrices(q);i=W.getFrustum(),S(b,x,W.camera,q,this.type)}W.isPointLightShadow!==!0&&this.type===Bo&&E(W,x),W.needsUpdate=!1}_=this.type,g.needsUpdate=!1,n.setRenderTarget(M,B,I)};function E(C,b){const x=e.update(y);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Tn(o.x,o.y,{format:mo,type:zn})),h.uniforms.shadow_pass.value=C.map.depthTexture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(b,null,x,h,y,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(b,null,x,m,y,null)}function A(C,b,x,M){let B=null;const I=x.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(I!==void 0)B=I;else if(B=x.isPointLight===!0?c:a,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const N=B.uuid,L=b.uuid;let k=l[N];k===void 0&&(k={},l[N]=k);let z=k[L];z===void 0&&(z=B.clone(),k[L]=z,b.addEventListener("dispose",R)),B=z}if(B.visible=b.visible,B.wireframe=b.wireframe,M===Bo?B.side=b.shadowSide!==null?b.shadowSide:b.side:B.side=b.shadowSide!==null?b.shadowSide:p[b.side],B.alphaMap=b.alphaMap,B.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,B.map=b.map,B.clipShadows=b.clipShadows,B.clippingPlanes=b.clippingPlanes,B.clipIntersection=b.clipIntersection,B.displacementMap=b.displacementMap,B.displacementScale=b.displacementScale,B.displacementBias=b.displacementBias,B.wireframeLinewidth=b.wireframeLinewidth,B.linewidth=b.linewidth,x.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const N=n.properties.get(B);N.light=x}return B}function S(C,b,x,M,B){if(C.visible===!1)return;if(C.layers.test(b.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&B===Bo)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,C.matrixWorld);const L=e.update(C),k=C.material;if(Array.isArray(k)){const z=L.groups;for(let q=0,W=z.length;q<W;q++){const ie=z[q],oe=k[ie.materialIndex];if(oe&&oe.visible){const F=A(C,oe,M,B);C.onBeforeShadow(n,C,b,x,L,F,ie),n.renderBufferDirect(x,null,L,F,C,ie),C.onAfterShadow(n,C,b,x,L,F,ie)}}}else if(k.visible){const z=A(C,k,M,B);C.onBeforeShadow(n,C,b,x,L,z,null),n.renderBufferDirect(x,null,L,z,C,null),C.onAfterShadow(n,C,b,x,L,z,null)}}const N=C.children;for(let L=0,k=N.length;L<k;L++)S(N[L],b,x,M,B)}function R(C){C.target.removeEventListener("dispose",R);for(const x in l){const M=l[x],B=C.target.uuid;B in M&&(M[B].dispose(),delete M[B])}}}function Xb(n,e){function t(){let O=!1;const de=new _t;let ce=null;const Te=new _t(0,0,0,0);return{setMask:function(se){ce!==se&&!O&&(n.colorMask(se,se,se,se),ce=se)},setLocked:function(se){O=se},setClear:function(se,j,be,Ge,pt){pt===!0&&(se*=Ge,j*=Ge,be*=Ge),de.set(se,j,be,Ge),Te.equals(de)===!1&&(n.clearColor(se,j,be,Ge),Te.copy(de))},reset:function(){O=!1,ce=null,Te.set(-1,0,0,0)}}}function i(){let O=!1,de=!1,ce=null,Te=null,se=null;return{setReversed:function(j){if(de!==j){const be=e.get("EXT_clip_control");j?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),de=j;const Ge=se;se=null,this.setClear(Ge)}},getReversed:function(){return de},setTest:function(j){j?J(n.DEPTH_TEST):Z(n.DEPTH_TEST)},setMask:function(j){ce!==j&&!O&&(n.depthMask(j),ce=j)},setFunc:function(j){if(de&&(j=gT[j]),Te!==j){switch(j){case Za:n.depthFunc(n.NEVER);break;case Qa:n.depthFunc(n.ALWAYS);break;case ja:n.depthFunc(n.LESS);break;case ho:n.depthFunc(n.LEQUAL);break;case el:n.depthFunc(n.EQUAL);break;case tl:n.depthFunc(n.GEQUAL);break;case nl:n.depthFunc(n.GREATER);break;case il:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Te=j}},setLocked:function(j){O=j},setClear:function(j){se!==j&&(se=j,de&&(j=1-j),n.clearDepth(j))},reset:function(){O=!1,ce=null,Te=null,se=null,de=!1}}}function o(){let O=!1,de=null,ce=null,Te=null,se=null,j=null,be=null,Ge=null,pt=null;return{setTest:function(ot){O||(ot?J(n.STENCIL_TEST):Z(n.STENCIL_TEST))},setMask:function(ot){de!==ot&&!O&&(n.stencilMask(ot),de=ot)},setFunc:function(ot,bn,In){(ce!==ot||Te!==bn||se!==In)&&(n.stencilFunc(ot,bn,In),ce=ot,Te=bn,se=In)},setOp:function(ot,bn,In){(j!==ot||be!==bn||Ge!==In)&&(n.stencilOp(ot,bn,In),j=ot,be=bn,Ge=In)},setLocked:function(ot){O=ot},setClear:function(ot){pt!==ot&&(n.clearStencil(ot),pt=ot)},reset:function(){O=!1,de=null,ce=null,Te=null,se=null,j=null,be=null,Ge=null,pt=null}}}const r=new t,s=new i,a=new o,c=new WeakMap,l=new WeakMap;let f={},p={},h=new WeakMap,m=[],v=null,y=!1,g=null,_=null,E=null,A=null,S=null,R=null,C=null,b=new Ze(0,0,0),x=0,M=!1,B=null,I=null,N=null,L=null,k=null;const z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,W=0;const ie=n.getParameter(n.VERSION);ie.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(ie)[1]),q=W>=1):ie.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),q=W>=2);let oe=null,F={};const D=n.getParameter(n.SCISSOR_BOX),ee=n.getParameter(n.VIEWPORT),ae=new _t().fromArray(D),Ee=new _t().fromArray(ee);function ye(O,de,ce,Te){const se=new Uint8Array(4),j=n.createTexture();n.bindTexture(O,j),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let be=0;be<ce;be++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(de,0,n.RGBA,1,1,Te,0,n.RGBA,n.UNSIGNED_BYTE,se):n.texImage2D(de+be,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,se);return j}const X={};X[n.TEXTURE_2D]=ye(n.TEXTURE_2D,n.TEXTURE_2D,1),X[n.TEXTURE_CUBE_MAP]=ye(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[n.TEXTURE_2D_ARRAY]=ye(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),X[n.TEXTURE_3D]=ye(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),J(n.DEPTH_TEST),s.setFunc(ho),Be(!1),je(of),J(n.CULL_FACE),Ae(On);function J(O){f[O]!==!0&&(n.enable(O),f[O]=!0)}function Z(O){f[O]!==!1&&(n.disable(O),f[O]=!1)}function he(O,de){return p[O]!==de?(n.bindFramebuffer(O,de),p[O]=de,O===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=de),O===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=de),!0):!1}function fe(O,de){let ce=m,Te=!1;if(O){ce=h.get(de),ce===void 0&&(ce=[],h.set(de,ce));const se=O.textures;if(ce.length!==se.length||ce[0]!==n.COLOR_ATTACHMENT0){for(let j=0,be=se.length;j<be;j++)ce[j]=n.COLOR_ATTACHMENT0+j;ce.length=se.length,Te=!0}}else ce[0]!==n.BACK&&(ce[0]=n.BACK,Te=!0);Te&&n.drawBuffers(ce)}function ve(O){return v!==O?(n.useProgram(O),v=O,!0):!1}const We={[Ti]:n.FUNC_ADD,[OS]:n.FUNC_SUBTRACT,[GS]:n.FUNC_REVERSE_SUBTRACT};We[VS]=n.MIN,We[HS]=n.MAX;const Fe={[zS]:n.ZERO,[WS]:n.ONE,[qS]:n.SRC_COLOR,[Ja]:n.SRC_ALPHA,[ZS]:n.SRC_ALPHA_SATURATE,[JS]:n.DST_COLOR,[YS]:n.DST_ALPHA,[XS]:n.ONE_MINUS_SRC_COLOR,[Ka]:n.ONE_MINUS_SRC_ALPHA,[KS]:n.ONE_MINUS_DST_COLOR,[$S]:n.ONE_MINUS_DST_ALPHA,[QS]:n.CONSTANT_COLOR,[jS]:n.ONE_MINUS_CONSTANT_COLOR,[eT]:n.CONSTANT_ALPHA,[tT]:n.ONE_MINUS_CONSTANT_ALPHA};function Ae(O,de,ce,Te,se,j,be,Ge,pt,ot){if(O===On){y===!0&&(Z(n.BLEND),y=!1);return}if(y===!1&&(J(n.BLEND),y=!0),O!==kS){if(O!==g||ot!==M){if((_!==Ti||S!==Ti)&&(n.blendEquation(n.FUNC_ADD),_=Ti,S=Ti),ot)switch(O){case lo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $a:n.blendFunc(n.ONE,n.ONE);break;case rf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case sf:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Qe("WebGLState: Invalid blending: ",O);break}else switch(O){case lo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $a:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case rf:Qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sf:Qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qe("WebGLState: Invalid blending: ",O);break}E=null,A=null,R=null,C=null,b.set(0,0,0),x=0,g=O,M=ot}return}se=se||de,j=j||ce,be=be||Te,(de!==_||se!==S)&&(n.blendEquationSeparate(We[de],We[se]),_=de,S=se),(ce!==E||Te!==A||j!==R||be!==C)&&(n.blendFuncSeparate(Fe[ce],Fe[Te],Fe[j],Fe[be]),E=ce,A=Te,R=j,C=be),(Ge.equals(b)===!1||pt!==x)&&(n.blendColor(Ge.r,Ge.g,Ge.b,pt),b.copy(Ge),x=pt),g=O,M=!1}function He(O,de){O.side===cn?Z(n.CULL_FACE):J(n.CULL_FACE);let ce=O.side===kt;de&&(ce=!ce),Be(ce),O.blending===lo&&O.transparent===!1?Ae(On):Ae(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),s.setFunc(O.depthFunc),s.setTest(O.depthTest),s.setMask(O.depthWrite),r.setMask(O.colorWrite);const Te=O.stencilWrite;a.setTest(Te),Te&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),at(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?J(n.SAMPLE_ALPHA_TO_COVERAGE):Z(n.SAMPLE_ALPHA_TO_COVERAGE)}function Be(O){B!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),B=O)}function je(O){O!==US?(J(n.CULL_FACE),O!==I&&(O===of?n.cullFace(n.BACK):O===FS?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Z(n.CULL_FACE),I=O}function U(O){O!==N&&(q&&n.lineWidth(O),N=O)}function at(O,de,ce){O?(J(n.POLYGON_OFFSET_FILL),(L!==de||k!==ce)&&(L=de,k=ce,s.getReversed()&&(de=-de),n.polygonOffset(de,ce))):Z(n.POLYGON_OFFSET_FILL)}function qe(O){O?J(n.SCISSOR_TEST):Z(n.SCISSOR_TEST)}function lt(O){O===void 0&&(O=n.TEXTURE0+z-1),oe!==O&&(n.activeTexture(O),oe=O)}function Ce(O,de,ce){ce===void 0&&(oe===null?ce=n.TEXTURE0+z-1:ce=oe);let Te=F[ce];Te===void 0&&(Te={type:void 0,texture:void 0},F[ce]=Te),(Te.type!==O||Te.texture!==de)&&(oe!==ce&&(n.activeTexture(ce),oe=ce),n.bindTexture(O,de||X[O]),Te.type=O,Te.texture=de)}function P(){const O=F[oe];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function T(){try{n.compressedTexImage2D(...arguments)}catch(O){Qe("WebGLState:",O)}}function G(){try{n.compressedTexImage3D(...arguments)}catch(O){Qe("WebGLState:",O)}}function te(){try{n.texSubImage2D(...arguments)}catch(O){Qe("WebGLState:",O)}}function ne(){try{n.texSubImage3D(...arguments)}catch(O){Qe("WebGLState:",O)}}function Q(){try{n.compressedTexSubImage2D(...arguments)}catch(O){Qe("WebGLState:",O)}}function Me(){try{n.compressedTexSubImage3D(...arguments)}catch(O){Qe("WebGLState:",O)}}function ue(){try{n.texStorage2D(...arguments)}catch(O){Qe("WebGLState:",O)}}function De(){try{n.texStorage3D(...arguments)}catch(O){Qe("WebGLState:",O)}}function ke(){try{n.texImage2D(...arguments)}catch(O){Qe("WebGLState:",O)}}function re(){try{n.texImage3D(...arguments)}catch(O){Qe("WebGLState:",O)}}function le(O){ae.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),ae.copy(O))}function we(O){Ee.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),Ee.copy(O))}function Ie(O,de){let ce=l.get(de);ce===void 0&&(ce=new WeakMap,l.set(de,ce));let Te=ce.get(O);Te===void 0&&(Te=n.getUniformBlockIndex(de,O.name),ce.set(O,Te))}function xe(O,de){const Te=l.get(de).get(O);c.get(de)!==Te&&(n.uniformBlockBinding(de,Te,O.__bindingPointIndex),c.set(de,Te))}function $e(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},oe=null,F={},p={},h=new WeakMap,m=[],v=null,y=!1,g=null,_=null,E=null,A=null,S=null,R=null,C=null,b=new Ze(0,0,0),x=0,M=!1,B=null,I=null,N=null,L=null,k=null,ae.set(0,0,n.canvas.width,n.canvas.height),Ee.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:J,disable:Z,bindFramebuffer:he,drawBuffers:fe,useProgram:ve,setBlending:Ae,setMaterial:He,setFlipSided:Be,setCullFace:je,setLineWidth:U,setPolygonOffset:at,setScissorTest:qe,activeTexture:lt,bindTexture:Ce,unbindTexture:P,compressedTexImage2D:T,compressedTexImage3D:G,texImage2D:ke,texImage3D:re,updateUBOMapping:Ie,uniformBlockBinding:xe,texStorage2D:ue,texStorage3D:De,texSubImage2D:te,texSubImage3D:ne,compressedTexSubImage2D:Q,compressedTexSubImage3D:Me,scissor:le,viewport:we,reset:$e}}function Yb(n,e,t,i,o,r,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ue,f=new WeakMap;let p;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(P,T){return m?new OffscreenCanvas(P,T):zo("canvas")}function y(P,T,G){let te=1;const ne=Ce(P);if((ne.width>G||ne.height>G)&&(te=G/Math.max(ne.width,ne.height)),te<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Q=Math.floor(te*ne.width),Me=Math.floor(te*ne.height);p===void 0&&(p=v(Q,Me));const ue=T?v(Q,Me):p;return ue.width=Q,ue.height=Me,ue.getContext("2d").drawImage(P,0,0,Q,Me),Oe("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+Q+"x"+Me+")."),ue}else return"data"in P&&Oe("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),P;return P}function g(P){return P.generateMipmaps}function _(P){n.generateMipmap(P)}function E(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(P,T,G,te,ne=!1){if(P!==null){if(n[P]!==void 0)return n[P];Oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Q=T;if(T===n.RED&&(G===n.FLOAT&&(Q=n.R32F),G===n.HALF_FLOAT&&(Q=n.R16F),G===n.UNSIGNED_BYTE&&(Q=n.R8)),T===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(Q=n.R8UI),G===n.UNSIGNED_SHORT&&(Q=n.R16UI),G===n.UNSIGNED_INT&&(Q=n.R32UI),G===n.BYTE&&(Q=n.R8I),G===n.SHORT&&(Q=n.R16I),G===n.INT&&(Q=n.R32I)),T===n.RG&&(G===n.FLOAT&&(Q=n.RG32F),G===n.HALF_FLOAT&&(Q=n.RG16F),G===n.UNSIGNED_BYTE&&(Q=n.RG8)),T===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(Q=n.RG8UI),G===n.UNSIGNED_SHORT&&(Q=n.RG16UI),G===n.UNSIGNED_INT&&(Q=n.RG32UI),G===n.BYTE&&(Q=n.RG8I),G===n.SHORT&&(Q=n.RG16I),G===n.INT&&(Q=n.RG32I)),T===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),G===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),G===n.UNSIGNED_INT&&(Q=n.RGB32UI),G===n.BYTE&&(Q=n.RGB8I),G===n.SHORT&&(Q=n.RGB16I),G===n.INT&&(Q=n.RGB32I)),T===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),G===n.UNSIGNED_INT&&(Q=n.RGBA32UI),G===n.BYTE&&(Q=n.RGBA8I),G===n.SHORT&&(Q=n.RGBA16I),G===n.INT&&(Q=n.RGBA32I)),T===n.RGB&&(G===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),G===n.UNSIGNED_INT_10F_11F_11F_REV&&(Q=n.R11F_G11F_B10F)),T===n.RGBA){const Me=ne?jr:et.getTransfer(te);G===n.FLOAT&&(Q=n.RGBA32F),G===n.HALF_FLOAT&&(Q=n.RGBA16F),G===n.UNSIGNED_BYTE&&(Q=Me===rt?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function S(P,T){let G;return P?T===null||T===Mn||T===Vo?G=n.DEPTH24_STENCIL8:T===xn?G=n.DEPTH32F_STENCIL8:T===Go&&(G=n.DEPTH24_STENCIL8,Oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Mn||T===Vo?G=n.DEPTH_COMPONENT24:T===xn?G=n.DEPTH_COMPONENT32F:T===Go&&(G=n.DEPTH_COMPONENT16),G}function R(P,T){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==Dt&&P.minFilter!==Bt?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function C(P){const T=P.target;T.removeEventListener("dispose",C),x(T),T.isVideoTexture&&f.delete(T)}function b(P){const T=P.target;T.removeEventListener("dispose",b),B(T)}function x(P){const T=i.get(P);if(T.__webglInit===void 0)return;const G=P.source,te=h.get(G);if(te){const ne=te[T.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&M(P),Object.keys(te).length===0&&h.delete(G)}i.remove(P)}function M(P){const T=i.get(P);n.deleteTexture(T.__webglTexture);const G=P.source,te=h.get(G);delete te[T.__cacheKey],s.memory.textures--}function B(P){const T=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(T.__webglFramebuffer[te]))for(let ne=0;ne<T.__webglFramebuffer[te].length;ne++)n.deleteFramebuffer(T.__webglFramebuffer[te][ne]);else n.deleteFramebuffer(T.__webglFramebuffer[te]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[te])}else{if(Array.isArray(T.__webglFramebuffer))for(let te=0;te<T.__webglFramebuffer.length;te++)n.deleteFramebuffer(T.__webglFramebuffer[te]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let te=0;te<T.__webglColorRenderbuffer.length;te++)T.__webglColorRenderbuffer[te]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[te]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const G=P.textures;for(let te=0,ne=G.length;te<ne;te++){const Q=i.get(G[te]);Q.__webglTexture&&(n.deleteTexture(Q.__webglTexture),s.memory.textures--),i.remove(G[te])}i.remove(P)}let I=0;function N(){I=0}function L(){const P=I;return P>=o.maxTextures&&Oe("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+o.maxTextures),I+=1,P}function k(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function z(P,T){const G=i.get(P);if(P.isVideoTexture&&qe(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&G.__version!==P.version){const te=P.image;if(te===null)Oe("WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)Oe("WebGLRenderer: Texture marked for update but image is incomplete");else{X(G,P,T);return}}else P.isExternalTexture&&(G.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+T)}function q(P,T){const G=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){X(G,P,T);return}else P.isExternalTexture&&(G.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+T)}function W(P,T){const G=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){X(G,P,T);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+T)}function ie(P,T){const G=i.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&G.__version!==P.version){J(G,P,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+T)}const oe={[ol]:n.REPEAT,[Bn]:n.CLAMP_TO_EDGE,[rl]:n.MIRRORED_REPEAT},F={[Dt]:n.NEAREST,[oT]:n.NEAREST_MIPMAP_NEAREST,[rr]:n.NEAREST_MIPMAP_LINEAR,[Bt]:n.LINEAR,[$s]:n.LINEAR_MIPMAP_NEAREST,[Ai]:n.LINEAR_MIPMAP_LINEAR},D={[aT]:n.NEVER,[fT]:n.ALWAYS,[lT]:n.LESS,[_c]:n.LEQUAL,[cT]:n.EQUAL,[vc]:n.GEQUAL,[uT]:n.GREATER,[dT]:n.NOTEQUAL};function ee(P,T){if(T.type===xn&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Bt||T.magFilter===$s||T.magFilter===rr||T.magFilter===Ai||T.minFilter===Bt||T.minFilter===$s||T.minFilter===rr||T.minFilter===Ai)&&Oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,oe[T.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,oe[T.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,oe[T.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,F[T.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,F[T.minFilter]),T.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,D[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Dt||T.minFilter!==rr&&T.minFilter!==Ai||T.type===xn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function ae(P,T){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",C));const te=T.source;let ne=h.get(te);ne===void 0&&(ne={},h.set(te,ne));const Q=k(T);if(Q!==P.__cacheKey){ne[Q]===void 0&&(ne[Q]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,G=!0),ne[Q].usedTimes++;const Me=ne[P.__cacheKey];Me!==void 0&&(ne[P.__cacheKey].usedTimes--,Me.usedTimes===0&&M(T)),P.__cacheKey=Q,P.__webglTexture=ne[Q].texture}return G}function Ee(P,T,G){return Math.floor(Math.floor(P/G)/T)}function ye(P,T,G,te){const Q=P.updateRanges;if(Q.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,T.width,T.height,G,te,T.data);else{Q.sort((re,le)=>re.start-le.start);let Me=0;for(let re=1;re<Q.length;re++){const le=Q[Me],we=Q[re],Ie=le.start+le.count,xe=Ee(we.start,T.width,4),$e=Ee(le.start,T.width,4);we.start<=Ie+1&&xe===$e&&Ee(we.start+we.count-1,T.width,4)===xe?le.count=Math.max(le.count,we.start+we.count-le.start):(++Me,Q[Me]=we)}Q.length=Me+1;const ue=n.getParameter(n.UNPACK_ROW_LENGTH),De=n.getParameter(n.UNPACK_SKIP_PIXELS),ke=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,T.width);for(let re=0,le=Q.length;re<le;re++){const we=Q[re],Ie=Math.floor(we.start/4),xe=Math.ceil(we.count/4),$e=Ie%T.width,O=Math.floor(Ie/T.width),de=xe,ce=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,$e),n.pixelStorei(n.UNPACK_SKIP_ROWS,O),t.texSubImage2D(n.TEXTURE_2D,0,$e,O,de,ce,G,te,T.data)}P.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ue),n.pixelStorei(n.UNPACK_SKIP_PIXELS,De),n.pixelStorei(n.UNPACK_SKIP_ROWS,ke)}}function X(P,T,G){let te=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(te=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(te=n.TEXTURE_3D);const ne=ae(P,T),Q=T.source;t.bindTexture(te,P.__webglTexture,n.TEXTURE0+G);const Me=i.get(Q);if(Q.version!==Me.__version||ne===!0){t.activeTexture(n.TEXTURE0+G);const ue=et.getPrimaries(et.workingColorSpace),De=T.colorSpace===ri?null:et.getPrimaries(T.colorSpace),ke=T.colorSpace===ri||ue===De?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let re=y(T.image,!1,o.maxTextureSize);re=lt(T,re);const le=r.convert(T.format,T.colorSpace),we=r.convert(T.type);let Ie=A(T.internalFormat,le,we,T.colorSpace,T.isVideoTexture);ee(te,T);let xe;const $e=T.mipmaps,O=T.isVideoTexture!==!0,de=Me.__version===void 0||ne===!0,ce=Q.dataReady,Te=R(T,re);if(T.isDepthTexture)Ie=S(T.format===Ci,T.type),de&&(O?t.texStorage2D(n.TEXTURE_2D,1,Ie,re.width,re.height):t.texImage2D(n.TEXTURE_2D,0,Ie,re.width,re.height,0,le,we,null));else if(T.isDataTexture)if($e.length>0){O&&de&&t.texStorage2D(n.TEXTURE_2D,Te,Ie,$e[0].width,$e[0].height);for(let se=0,j=$e.length;se<j;se++)xe=$e[se],O?ce&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,xe.width,xe.height,le,we,xe.data):t.texImage2D(n.TEXTURE_2D,se,Ie,xe.width,xe.height,0,le,we,xe.data);T.generateMipmaps=!1}else O?(de&&t.texStorage2D(n.TEXTURE_2D,Te,Ie,re.width,re.height),ce&&ye(T,re,le,we)):t.texImage2D(n.TEXTURE_2D,0,Ie,re.width,re.height,0,le,we,re.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){O&&de&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,Ie,$e[0].width,$e[0].height,re.depth);for(let se=0,j=$e.length;se<j;se++)if(xe=$e[se],T.format!==un)if(le!==null)if(O){if(ce)if(T.layerUpdates.size>0){const be=kf(xe.width,xe.height,T.format,T.type);for(const Ge of T.layerUpdates){const pt=xe.data.subarray(Ge*be/xe.data.BYTES_PER_ELEMENT,(Ge+1)*be/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,Ge,xe.width,xe.height,1,le,pt)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,xe.width,xe.height,re.depth,le,xe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,se,Ie,xe.width,xe.height,re.depth,0,xe.data,0,0);else Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?ce&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,xe.width,xe.height,re.depth,le,we,xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,se,Ie,xe.width,xe.height,re.depth,0,le,we,xe.data)}else{O&&de&&t.texStorage2D(n.TEXTURE_2D,Te,Ie,$e[0].width,$e[0].height);for(let se=0,j=$e.length;se<j;se++)xe=$e[se],T.format!==un?le!==null?O?ce&&t.compressedTexSubImage2D(n.TEXTURE_2D,se,0,0,xe.width,xe.height,le,xe.data):t.compressedTexImage2D(n.TEXTURE_2D,se,Ie,xe.width,xe.height,0,xe.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?ce&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,xe.width,xe.height,le,we,xe.data):t.texImage2D(n.TEXTURE_2D,se,Ie,xe.width,xe.height,0,le,we,xe.data)}else if(T.isDataArrayTexture)if(O){if(de&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,Ie,re.width,re.height,re.depth),ce)if(T.layerUpdates.size>0){const se=kf(re.width,re.height,T.format,T.type);for(const j of T.layerUpdates){const be=re.data.subarray(j*se/re.data.BYTES_PER_ELEMENT,(j+1)*se/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,j,re.width,re.height,1,le,we,be)}T.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,le,we,re.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ie,re.width,re.height,re.depth,0,le,we,re.data);else if(T.isData3DTexture)O?(de&&t.texStorage3D(n.TEXTURE_3D,Te,Ie,re.width,re.height,re.depth),ce&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,le,we,re.data)):t.texImage3D(n.TEXTURE_3D,0,Ie,re.width,re.height,re.depth,0,le,we,re.data);else if(T.isFramebufferTexture){if(de)if(O)t.texStorage2D(n.TEXTURE_2D,Te,Ie,re.width,re.height);else{let se=re.width,j=re.height;for(let be=0;be<Te;be++)t.texImage2D(n.TEXTURE_2D,be,Ie,se,j,0,le,we,null),se>>=1,j>>=1}}else if($e.length>0){if(O&&de){const se=Ce($e[0]);t.texStorage2D(n.TEXTURE_2D,Te,Ie,se.width,se.height)}for(let se=0,j=$e.length;se<j;se++)xe=$e[se],O?ce&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,le,we,xe):t.texImage2D(n.TEXTURE_2D,se,Ie,le,we,xe);T.generateMipmaps=!1}else if(O){if(de){const se=Ce(re);t.texStorage2D(n.TEXTURE_2D,Te,Ie,se.width,se.height)}ce&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,le,we,re)}else t.texImage2D(n.TEXTURE_2D,0,Ie,le,we,re);g(T)&&_(te),Me.__version=Q.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function J(P,T,G){if(T.image.length!==6)return;const te=ae(P,T),ne=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+G);const Q=i.get(ne);if(ne.version!==Q.__version||te===!0){t.activeTexture(n.TEXTURE0+G);const Me=et.getPrimaries(et.workingColorSpace),ue=T.colorSpace===ri?null:et.getPrimaries(T.colorSpace),De=T.colorSpace===ri||Me===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);const ke=T.isCompressedTexture||T.image[0].isCompressedTexture,re=T.image[0]&&T.image[0].isDataTexture,le=[];for(let j=0;j<6;j++)!ke&&!re?le[j]=y(T.image[j],!0,o.maxCubemapSize):le[j]=re?T.image[j].image:T.image[j],le[j]=lt(T,le[j]);const we=le[0],Ie=r.convert(T.format,T.colorSpace),xe=r.convert(T.type),$e=A(T.internalFormat,Ie,xe,T.colorSpace),O=T.isVideoTexture!==!0,de=Q.__version===void 0||te===!0,ce=ne.dataReady;let Te=R(T,we);ee(n.TEXTURE_CUBE_MAP,T);let se;if(ke){O&&de&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Te,$e,we.width,we.height);for(let j=0;j<6;j++){se=le[j].mipmaps;for(let be=0;be<se.length;be++){const Ge=se[be];T.format!==un?Ie!==null?O?ce&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,be,0,0,Ge.width,Ge.height,Ie,Ge.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,be,$e,Ge.width,Ge.height,0,Ge.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,be,0,0,Ge.width,Ge.height,Ie,xe,Ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,be,$e,Ge.width,Ge.height,0,Ie,xe,Ge.data)}}}else{if(se=T.mipmaps,O&&de){se.length>0&&Te++;const j=Ce(le[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Te,$e,j.width,j.height)}for(let j=0;j<6;j++)if(re){O?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,le[j].width,le[j].height,Ie,xe,le[j].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,$e,le[j].width,le[j].height,0,Ie,xe,le[j].data);for(let be=0;be<se.length;be++){const pt=se[be].image[j].image;O?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,be+1,0,0,pt.width,pt.height,Ie,xe,pt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,be+1,$e,pt.width,pt.height,0,Ie,xe,pt.data)}}else{O?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ie,xe,le[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,$e,Ie,xe,le[j]);for(let be=0;be<se.length;be++){const Ge=se[be];O?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,be+1,0,0,Ie,xe,Ge.image[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,be+1,$e,Ie,xe,Ge.image[j])}}}g(T)&&_(n.TEXTURE_CUBE_MAP),Q.__version=ne.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Z(P,T,G,te,ne,Q){const Me=r.convert(G.format,G.colorSpace),ue=r.convert(G.type),De=A(G.internalFormat,Me,ue,G.colorSpace),ke=i.get(T),re=i.get(G);if(re.__renderTarget=T,!ke.__hasExternalTextures){const le=Math.max(1,T.width>>Q),we=Math.max(1,T.height>>Q);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,Q,De,le,we,T.depth,0,Me,ue,null):t.texImage2D(ne,Q,De,le,we,0,Me,ue,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),at(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,ne,re.__webglTexture,0,U(T)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,te,ne,re.__webglTexture,Q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function he(P,T,G){if(n.bindRenderbuffer(n.RENDERBUFFER,P),T.depthBuffer){const te=T.depthTexture,ne=te&&te.isDepthTexture?te.type:null,Q=S(T.stencilBuffer,ne),Me=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;at(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,U(T),Q,T.width,T.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,U(T),Q,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,Q,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Me,n.RENDERBUFFER,P)}else{const te=T.textures;for(let ne=0;ne<te.length;ne++){const Q=te[ne],Me=r.convert(Q.format,Q.colorSpace),ue=r.convert(Q.type),De=A(Q.internalFormat,Me,ue,Q.colorSpace);at(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,U(T),De,T.width,T.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,U(T),De,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,De,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function fe(P,T,G){const te=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=i.get(T.depthTexture);if(ne.__renderTarget=T,(!ne.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),te){if(ne.__webglInit===void 0&&(ne.__webglInit=!0,T.depthTexture.addEventListener("dispose",C)),ne.__webglTexture===void 0){ne.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),ee(n.TEXTURE_CUBE_MAP,T.depthTexture);const ke=r.convert(T.depthTexture.format),re=r.convert(T.depthTexture.type);let le;T.depthTexture.format===Wn?le=n.DEPTH_COMPONENT24:T.depthTexture.format===Ci&&(le=n.DEPTH24_STENCIL8);for(let we=0;we<6;we++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,le,T.width,T.height,0,ke,re,null)}}else z(T.depthTexture,0);const Q=ne.__webglTexture,Me=U(T),ue=te?n.TEXTURE_CUBE_MAP_POSITIVE_X+G:n.TEXTURE_2D,De=T.depthTexture.format===Ci?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(T.depthTexture.format===Wn)at(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,De,ue,Q,0,Me):n.framebufferTexture2D(n.FRAMEBUFFER,De,ue,Q,0);else if(T.depthTexture.format===Ci)at(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,De,ue,Q,0,Me):n.framebufferTexture2D(n.FRAMEBUFFER,De,ue,Q,0);else throw new Error("Unknown depthTexture format")}function ve(P){const T=i.get(P),G=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){const te=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),te){const ne=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,te.removeEventListener("dispose",ne)};te.addEventListener("dispose",ne),T.__depthDisposeCallback=ne}T.__boundDepthTexture=te}if(P.depthTexture&&!T.__autoAllocateDepthBuffer)if(G)for(let te=0;te<6;te++)fe(T.__webglFramebuffer[te],P,te);else{const te=P.texture.mipmaps;te&&te.length>0?fe(T.__webglFramebuffer[0],P,0):fe(T.__webglFramebuffer,P,0)}else if(G){T.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[te]),T.__webglDepthbuffer[te]===void 0)T.__webglDepthbuffer[te]=n.createRenderbuffer(),he(T.__webglDepthbuffer[te],P,!1);else{const ne=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=T.__webglDepthbuffer[te];n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,Q)}}else{const te=P.texture.mipmaps;if(te&&te.length>0?t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),he(T.__webglDepthbuffer,P,!1);else{const ne=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,Q)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function We(P,T,G){const te=i.get(P);T!==void 0&&Z(te.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&ve(P)}function Fe(P){const T=P.texture,G=i.get(P),te=i.get(T);P.addEventListener("dispose",b);const ne=P.textures,Q=P.isWebGLCubeRenderTarget===!0,Me=ne.length>1;if(Me||(te.__webglTexture===void 0&&(te.__webglTexture=n.createTexture()),te.__version=T.version,s.memory.textures++),Q){G.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(T.mipmaps&&T.mipmaps.length>0){G.__webglFramebuffer[ue]=[];for(let De=0;De<T.mipmaps.length;De++)G.__webglFramebuffer[ue][De]=n.createFramebuffer()}else G.__webglFramebuffer[ue]=n.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){G.__webglFramebuffer=[];for(let ue=0;ue<T.mipmaps.length;ue++)G.__webglFramebuffer[ue]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(Me)for(let ue=0,De=ne.length;ue<De;ue++){const ke=i.get(ne[ue]);ke.__webglTexture===void 0&&(ke.__webglTexture=n.createTexture(),s.memory.textures++)}if(P.samples>0&&at(P)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ue=0;ue<ne.length;ue++){const De=ne[ue];G.__webglColorRenderbuffer[ue]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[ue]);const ke=r.convert(De.format,De.colorSpace),re=r.convert(De.type),le=A(De.internalFormat,ke,re,De.colorSpace,P.isXRRenderTarget===!0),we=U(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,we,le,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,G.__webglColorRenderbuffer[ue])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),he(G.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){t.bindTexture(n.TEXTURE_CUBE_MAP,te.__webglTexture),ee(n.TEXTURE_CUBE_MAP,T);for(let ue=0;ue<6;ue++)if(T.mipmaps&&T.mipmaps.length>0)for(let De=0;De<T.mipmaps.length;De++)Z(G.__webglFramebuffer[ue][De],P,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,De);else Z(G.__webglFramebuffer[ue],P,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);g(T)&&_(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let ue=0,De=ne.length;ue<De;ue++){const ke=ne[ue],re=i.get(ke);let le=n.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(le=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,re.__webglTexture),ee(le,ke),Z(G.__webglFramebuffer,P,ke,n.COLOR_ATTACHMENT0+ue,le,0),g(ke)&&_(le)}t.unbindTexture()}else{let ue=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ue=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,te.__webglTexture),ee(ue,T),T.mipmaps&&T.mipmaps.length>0)for(let De=0;De<T.mipmaps.length;De++)Z(G.__webglFramebuffer[De],P,T,n.COLOR_ATTACHMENT0,ue,De);else Z(G.__webglFramebuffer,P,T,n.COLOR_ATTACHMENT0,ue,0);g(T)&&_(ue),t.unbindTexture()}P.depthBuffer&&ve(P)}function Ae(P){const T=P.textures;for(let G=0,te=T.length;G<te;G++){const ne=T[G];if(g(ne)){const Q=E(P),Me=i.get(ne).__webglTexture;t.bindTexture(Q,Me),_(Q),t.unbindTexture()}}}const He=[],Be=[];function je(P){if(P.samples>0){if(at(P)===!1){const T=P.textures,G=P.width,te=P.height;let ne=n.COLOR_BUFFER_BIT;const Q=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=i.get(P),ue=T.length>1;if(ue)for(let ke=0;ke<T.length;ke++)t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);const De=P.texture.mipmaps;De&&De.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let ke=0;ke<T.length;ke++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),ue){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[ke]);const re=i.get(T[ke]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,re,0)}n.blitFramebuffer(0,0,G,te,0,0,G,te,ne,n.NEAREST),c===!0&&(He.length=0,Be.length=0,He.push(n.COLOR_ATTACHMENT0+ke),P.depthBuffer&&P.resolveDepthBuffer===!1&&(He.push(Q),Be.push(Q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Be)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,He))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ue)for(let ke=0;ke<T.length;ke++){t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.RENDERBUFFER,Me.__webglColorRenderbuffer[ke]);const re=i.get(T[ke]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.TEXTURE_2D,re,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const T=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function U(P){return Math.min(o.maxSamples,P.samples)}function at(P){const T=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function qe(P){const T=s.render.frame;f.get(P)!==T&&(f.set(P,T),P.update())}function lt(P,T){const G=P.colorSpace,te=P.format,ne=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==go&&G!==ri&&(et.getTransfer(G)===rt?(te!==un||ne!==Zt)&&Oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qe("WebGLTextures: Unsupported texture color space:",G)),T}function Ce(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=L,this.resetTextureUnits=N,this.setTexture2D=z,this.setTexture2DArray=q,this.setTexture3D=W,this.setTextureCube=ie,this.rebindTextures=We,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=Z,this.useMultisampledRTT=at,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function $b(n,e){function t(i,o=ri){let r;const s=et.getTransfer(o);if(i===Zt)return n.UNSIGNED_BYTE;if(i===fc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===hc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===wp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===bp)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ap)return n.BYTE;if(i===Cp)return n.SHORT;if(i===Go)return n.UNSIGNED_SHORT;if(i===dc)return n.INT;if(i===Mn)return n.UNSIGNED_INT;if(i===xn)return n.FLOAT;if(i===zn)return n.HALF_FLOAT;if(i===Ip)return n.ALPHA;if(i===Rp)return n.RGB;if(i===un)return n.RGBA;if(i===Wn)return n.DEPTH_COMPONENT;if(i===Ci)return n.DEPTH_STENCIL;if(i===Pp)return n.RED;if(i===pc)return n.RED_INTEGER;if(i===mo)return n.RG;if(i===mc)return n.RG_INTEGER;if(i===gc)return n.RGBA_INTEGER;if(i===kr||i===Or||i===Gr||i===Vr)if(s===rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===kr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===kr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Or)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Gr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Vr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===sl||i===al||i===ll||i===cl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===sl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===al)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ll)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===cl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ul||i===dl||i===fl||i===hl||i===pl||i===ml||i===gl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ul||i===dl)return s===rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===fl)return s===rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===hl)return r.COMPRESSED_R11_EAC;if(i===pl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===ml)return r.COMPRESSED_RG11_EAC;if(i===gl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===_l||i===vl||i===yl||i===xl||i===El||i===Sl||i===Tl||i===Ml||i===Al||i===Cl||i===wl||i===bl||i===Il||i===Rl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===_l)return s===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===vl)return s===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===yl)return s===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===xl)return s===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===El)return s===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Sl)return s===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Tl)return s===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ml)return s===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Al)return s===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Cl)return s===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===wl)return s===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===bl)return s===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Il)return s===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Rl)return s===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Pl||i===Dl||i===Nl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Pl)return s===rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Dl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Nl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ll||i===Ul||i===Fl||i===Bl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ll)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ul)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Fl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Bl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Vo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Jb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Kb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Zb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new zp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new wn({vertexShader:Jb,fragmentShader:Kb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new st(new Ko(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Qb extends Ni{constructor(e,t){super();const i=this;let o=null,r=1,s=null,a="local-floor",c=1,l=null,f=null,p=null,h=null,m=null,v=null;const y=typeof XRWebGLBinding<"u",g=new Zb,_={},E=t.getContextAttributes();let A=null,S=null;const R=[],C=[],b=new Ue;let x=null;const M=new Kt;M.viewport=new _t;const B=new Kt;B.viewport=new _t;const I=[M,B],N=new lM;let L=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let J=R[X];return J===void 0&&(J=new ta,R[X]=J),J.getTargetRaySpace()},this.getControllerGrip=function(X){let J=R[X];return J===void 0&&(J=new ta,R[X]=J),J.getGripSpace()},this.getHand=function(X){let J=R[X];return J===void 0&&(J=new ta,R[X]=J),J.getHandSpace()};function z(X){const J=C.indexOf(X.inputSource);if(J===-1)return;const Z=R[J];Z!==void 0&&(Z.update(X.inputSource,X.frame,l||s),Z.dispatchEvent({type:X.type,data:X.inputSource}))}function q(){o.removeEventListener("select",z),o.removeEventListener("selectstart",z),o.removeEventListener("selectend",z),o.removeEventListener("squeeze",z),o.removeEventListener("squeezestart",z),o.removeEventListener("squeezeend",z),o.removeEventListener("end",q),o.removeEventListener("inputsourceschange",W);for(let X=0;X<R.length;X++){const J=C[X];J!==null&&(C[X]=null,R[X].disconnect(J))}L=null,k=null,g.reset();for(const X in _)delete _[X];e.setRenderTarget(A),m=null,h=null,p=null,o=null,S=null,ye.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,i.isPresenting===!0&&Oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&Oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return p===null&&y&&(p=new XRWebGLBinding(o,t)),p},this.getFrame=function(){return v},this.getSession=function(){return o},this.setSession=async function(X){if(o=X,o!==null){if(A=e.getRenderTarget(),o.addEventListener("select",z),o.addEventListener("selectstart",z),o.addEventListener("selectend",z),o.addEventListener("squeeze",z),o.addEventListener("squeezestart",z),o.addEventListener("squeezeend",z),o.addEventListener("end",q),o.addEventListener("inputsourceschange",W),E.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(b),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Z=null,he=null,fe=null;E.depth&&(fe=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=E.stencil?Ci:Wn,he=E.stencil?Vo:Mn);const ve={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:r};p=this.getBinding(),h=p.createProjectionLayer(ve),o.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new Tn(h.textureWidth,h.textureHeight,{format:un,type:Zt,depthTexture:new Wo(h.textureWidth,h.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const Z={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(o,t,Z),o.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new Tn(m.framebufferWidth,m.framebufferHeight,{format:un,type:Zt,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,s=await o.requestReferenceSpace(a),ye.setContext(o),ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function W(X){for(let J=0;J<X.removed.length;J++){const Z=X.removed[J],he=C.indexOf(Z);he>=0&&(C[he]=null,R[he].disconnect(Z))}for(let J=0;J<X.added.length;J++){const Z=X.added[J];let he=C.indexOf(Z);if(he===-1){for(let ve=0;ve<R.length;ve++)if(ve>=C.length){C.push(Z),he=ve;break}else if(C[ve]===null){C[ve]=Z,he=ve;break}if(he===-1)break}const fe=R[he];fe&&fe.connect(Z)}}const ie=new V,oe=new V;function F(X,J,Z){ie.setFromMatrixPosition(J.matrixWorld),oe.setFromMatrixPosition(Z.matrixWorld);const he=ie.distanceTo(oe),fe=J.projectionMatrix.elements,ve=Z.projectionMatrix.elements,We=fe[14]/(fe[10]-1),Fe=fe[14]/(fe[10]+1),Ae=(fe[9]+1)/fe[5],He=(fe[9]-1)/fe[5],Be=(fe[8]-1)/fe[0],je=(ve[8]+1)/ve[0],U=We*Be,at=We*je,qe=he/(-Be+je),lt=qe*-Be;if(J.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(lt),X.translateZ(qe),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),fe[10]===-1)X.projectionMatrix.copy(J.projectionMatrix),X.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const Ce=We+qe,P=Fe+qe,T=U-lt,G=at+(he-lt),te=Ae*Fe/P*Ce,ne=He*Fe/P*Ce;X.projectionMatrix.makePerspective(T,G,te,ne,Ce,P),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function D(X,J){J===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(J.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(o===null)return;let J=X.near,Z=X.far;g.texture!==null&&(g.depthNear>0&&(J=g.depthNear),g.depthFar>0&&(Z=g.depthFar)),N.near=B.near=M.near=J,N.far=B.far=M.far=Z,(L!==N.near||k!==N.far)&&(o.updateRenderState({depthNear:N.near,depthFar:N.far}),L=N.near,k=N.far),N.layers.mask=X.layers.mask|6,M.layers.mask=N.layers.mask&-5,B.layers.mask=N.layers.mask&-3;const he=X.parent,fe=N.cameras;D(N,he);for(let ve=0;ve<fe.length;ve++)D(fe[ve],he);fe.length===2?F(N,M,B):N.projectionMatrix.copy(M.projectionMatrix),ee(X,N,he)};function ee(X,J,Z){Z===null?X.matrix.copy(J.matrixWorld):(X.matrix.copy(Z.matrixWorld),X.matrix.invert(),X.matrix.multiply(J.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(J.projectionMatrix),X.projectionMatrixInverse.copy(J.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Ol*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(h===null&&m===null))return c},this.setFoveation=function(X){c=X,h!==null&&(h.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(N)},this.getCameraTexture=function(X){return _[X]};let ae=null;function Ee(X,J){if(f=J.getViewerPose(l||s),v=J,f!==null){const Z=f.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let he=!1;Z.length!==N.cameras.length&&(N.cameras.length=0,he=!0);for(let Fe=0;Fe<Z.length;Fe++){const Ae=Z[Fe];let He=null;if(m!==null)He=m.getViewport(Ae);else{const je=p.getViewSubImage(h,Ae);He=je.viewport,Fe===0&&(e.setRenderTargetTextures(S,je.colorTexture,je.depthStencilTexture),e.setRenderTarget(S))}let Be=I[Fe];Be===void 0&&(Be=new Kt,Be.layers.enable(Fe),Be.viewport=new _t,I[Fe]=Be),Be.matrix.fromArray(Ae.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(Ae.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(He.x,He.y,He.width,He.height),Fe===0&&(N.matrix.copy(Be.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),he===!0&&N.cameras.push(Be)}const fe=o.enabledFeatures;if(fe&&fe.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&y){p=i.getBinding();const Fe=p.getDepthInformation(Z[0]);Fe&&Fe.isValid&&Fe.texture&&g.init(Fe,o.renderState)}if(fe&&fe.includes("camera-access")&&y){e.state.unbindTexture(),p=i.getBinding();for(let Fe=0;Fe<Z.length;Fe++){const Ae=Z[Fe].camera;if(Ae){let He=_[Ae];He||(He=new zp,_[Ae]=He);const Be=p.getCameraImage(Ae);He.sourceTexture=Be}}}}for(let Z=0;Z<R.length;Z++){const he=C[Z],fe=R[Z];he!==null&&fe!==void 0&&fe.update(he,J,l||s)}ae&&ae(X,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),v=null}const ye=new Yp;ye.setAnimationLoop(Ee),this.setAnimationLoop=function(X){ae=X},this.dispose=function(){}}}const Ei=new An,jb=new mt;function eI(n,e){function t(g,_){g.matrixAutoUpdate===!0&&g.updateMatrix(),_.value.copy(g.matrix)}function i(g,_){_.color.getRGB(g.fogColor.value,Wp(n)),_.isFog?(g.fogNear.value=_.near,g.fogFar.value=_.far):_.isFogExp2&&(g.fogDensity.value=_.density)}function o(g,_,E,A,S){_.isMeshBasicMaterial?r(g,_):_.isMeshLambertMaterial?(r(g,_),_.envMap&&(g.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(r(g,_),p(g,_)):_.isMeshPhongMaterial?(r(g,_),f(g,_),_.envMap&&(g.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(r(g,_),h(g,_),_.isMeshPhysicalMaterial&&m(g,_,S)):_.isMeshMatcapMaterial?(r(g,_),v(g,_)):_.isMeshDepthMaterial?r(g,_):_.isMeshDistanceMaterial?(r(g,_),y(g,_)):_.isMeshNormalMaterial?r(g,_):_.isLineBasicMaterial?(s(g,_),_.isLineDashedMaterial&&a(g,_)):_.isPointsMaterial?c(g,_,E,A):_.isSpriteMaterial?l(g,_):_.isShadowMaterial?(g.color.value.copy(_.color),g.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function r(g,_){g.opacity.value=_.opacity,_.color&&g.diffuse.value.copy(_.color),_.emissive&&g.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(g.map.value=_.map,t(_.map,g.mapTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,t(_.alphaMap,g.alphaMapTransform)),_.bumpMap&&(g.bumpMap.value=_.bumpMap,t(_.bumpMap,g.bumpMapTransform),g.bumpScale.value=_.bumpScale,_.side===kt&&(g.bumpScale.value*=-1)),_.normalMap&&(g.normalMap.value=_.normalMap,t(_.normalMap,g.normalMapTransform),g.normalScale.value.copy(_.normalScale),_.side===kt&&g.normalScale.value.negate()),_.displacementMap&&(g.displacementMap.value=_.displacementMap,t(_.displacementMap,g.displacementMapTransform),g.displacementScale.value=_.displacementScale,g.displacementBias.value=_.displacementBias),_.emissiveMap&&(g.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,g.emissiveMapTransform)),_.specularMap&&(g.specularMap.value=_.specularMap,t(_.specularMap,g.specularMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest);const E=e.get(_),A=E.envMap,S=E.envMapRotation;A&&(g.envMap.value=A,Ei.copy(S),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),g.envMapRotation.value.setFromMatrix4(jb.makeRotationFromEuler(Ei)),g.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=_.reflectivity,g.ior.value=_.ior,g.refractionRatio.value=_.refractionRatio),_.lightMap&&(g.lightMap.value=_.lightMap,g.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,g.lightMapTransform)),_.aoMap&&(g.aoMap.value=_.aoMap,g.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,g.aoMapTransform))}function s(g,_){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,_.map&&(g.map.value=_.map,t(_.map,g.mapTransform))}function a(g,_){g.dashSize.value=_.dashSize,g.totalSize.value=_.dashSize+_.gapSize,g.scale.value=_.scale}function c(g,_,E,A){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.size.value=_.size*E,g.scale.value=A*.5,_.map&&(g.map.value=_.map,t(_.map,g.uvTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,t(_.alphaMap,g.alphaMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest)}function l(g,_){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.rotation.value=_.rotation,_.map&&(g.map.value=_.map,t(_.map,g.mapTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,t(_.alphaMap,g.alphaMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest)}function f(g,_){g.specular.value.copy(_.specular),g.shininess.value=Math.max(_.shininess,1e-4)}function p(g,_){_.gradientMap&&(g.gradientMap.value=_.gradientMap)}function h(g,_){g.metalness.value=_.metalness,_.metalnessMap&&(g.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,g.metalnessMapTransform)),g.roughness.value=_.roughness,_.roughnessMap&&(g.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,g.roughnessMapTransform)),_.envMap&&(g.envMapIntensity.value=_.envMapIntensity)}function m(g,_,E){g.ior.value=_.ior,_.sheen>0&&(g.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),g.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(g.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,g.sheenColorMapTransform)),_.sheenRoughnessMap&&(g.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,g.sheenRoughnessMapTransform))),_.clearcoat>0&&(g.clearcoat.value=_.clearcoat,g.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(g.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,g.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(g.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===kt&&g.clearcoatNormalScale.value.negate())),_.dispersion>0&&(g.dispersion.value=_.dispersion),_.iridescence>0&&(g.iridescence.value=_.iridescence,g.iridescenceIOR.value=_.iridescenceIOR,g.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(g.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,g.iridescenceMapTransform)),_.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),_.transmission>0&&(g.transmission.value=_.transmission,g.transmissionSamplerMap.value=E.texture,g.transmissionSamplerSize.value.set(E.width,E.height),_.transmissionMap&&(g.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,g.transmissionMapTransform)),g.thickness.value=_.thickness,_.thicknessMap&&(g.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=_.attenuationDistance,g.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(g.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(g.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=_.specularIntensity,g.specularColor.value.copy(_.specularColor),_.specularColorMap&&(g.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,g.specularColorMapTransform)),_.specularIntensityMap&&(g.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,_){_.matcap&&(g.matcap.value=_.matcap)}function y(g,_){const E=e.get(_).light;g.referencePosition.value.setFromMatrixPosition(E.matrixWorld),g.nearDistance.value=E.shadow.camera.near,g.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:o}}function tI(n,e,t,i){let o={},r={},s=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,A){const S=A.program;i.uniformBlockBinding(E,S)}function l(E,A){let S=o[E.id];S===void 0&&(v(E),S=f(E),o[E.id]=S,E.addEventListener("dispose",g));const R=A.program;i.updateUBOMapping(E,R);const C=e.render.frame;r[E.id]!==C&&(h(E),r[E.id]=C)}function f(E){const A=p();E.__bindingPointIndex=A;const S=n.createBuffer(),R=E.__size,C=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,R,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,S),S}function p(){for(let E=0;E<a;E++)if(s.indexOf(E)===-1)return s.push(E),E;return Qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(E){const A=o[E.id],S=E.uniforms,R=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let C=0,b=S.length;C<b;C++){const x=Array.isArray(S[C])?S[C]:[S[C]];for(let M=0,B=x.length;M<B;M++){const I=x[M];if(m(I,C,M,R)===!0){const N=I.__offset,L=Array.isArray(I.value)?I.value:[I.value];let k=0;for(let z=0;z<L.length;z++){const q=L[z],W=y(q);typeof q=="number"||typeof q=="boolean"?(I.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,N+k,I.__data)):q.isMatrix3?(I.__data[0]=q.elements[0],I.__data[1]=q.elements[1],I.__data[2]=q.elements[2],I.__data[3]=0,I.__data[4]=q.elements[3],I.__data[5]=q.elements[4],I.__data[6]=q.elements[5],I.__data[7]=0,I.__data[8]=q.elements[6],I.__data[9]=q.elements[7],I.__data[10]=q.elements[8],I.__data[11]=0):(q.toArray(I.__data,k),k+=W.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(E,A,S,R){const C=E.value,b=A+"_"+S;if(R[b]===void 0)return typeof C=="number"||typeof C=="boolean"?R[b]=C:R[b]=C.clone(),!0;{const x=R[b];if(typeof C=="number"||typeof C=="boolean"){if(x!==C)return R[b]=C,!0}else if(x.equals(C)===!1)return x.copy(C),!0}return!1}function v(E){const A=E.uniforms;let S=0;const R=16;for(let b=0,x=A.length;b<x;b++){const M=Array.isArray(A[b])?A[b]:[A[b]];for(let B=0,I=M.length;B<I;B++){const N=M[B],L=Array.isArray(N.value)?N.value:[N.value];for(let k=0,z=L.length;k<z;k++){const q=L[k],W=y(q),ie=S%R,oe=ie%W.boundary,F=ie+oe;S+=oe,F!==0&&R-F<W.storage&&(S+=R-F),N.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=S,S+=W.storage}}}const C=S%R;return C>0&&(S+=R-C),E.__size=S,E.__cache={},this}function y(E){const A={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(A.boundary=4,A.storage=4):E.isVector2?(A.boundary=8,A.storage=8):E.isVector3||E.isColor?(A.boundary=16,A.storage=12):E.isVector4?(A.boundary=16,A.storage=16):E.isMatrix3?(A.boundary=48,A.storage=48):E.isMatrix4?(A.boundary=64,A.storage=64):E.isTexture?Oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Oe("WebGLRenderer: Unsupported uniform value type.",E),A}function g(E){const A=E.target;A.removeEventListener("dispose",g);const S=s.indexOf(A.__bindingPointIndex);s.splice(S,1),n.deleteBuffer(o[A.id]),delete o[A.id],delete r[A.id]}function _(){for(const E in o)n.deleteBuffer(o[E]);s=[],o={},r={}}return{bind:c,update:l,dispose:_}}const nI=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let _n=null;function iI(){return _n===null&&(_n=new GT(nI,16,16,mo,zn),_n.name="DFG_LUT",_n.minFilter=Bt,_n.magFilter=Bt,_n.wrapS=Bn,_n.wrapT=Bn,_n.generateMipmaps=!1,_n.needsUpdate=!0),_n}class oI{constructor(e={}){const{canvas:t=pT(),context:i=null,depth:o=!0,stencil:r=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:m=Zt}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=s;const y=m,g=new Set([gc,mc,pc]),_=new Set([Zt,Mn,Go,Vo,fc,hc]),E=new Uint32Array(4),A=new Int32Array(4);let S=null,R=null;const C=[],b=[];let x=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Sn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let B=!1;this._outputColorSpace=Jt;let I=0,N=0,L=null,k=-1,z=null;const q=new _t,W=new _t;let ie=null;const oe=new Ze(0);let F=0,D=t.width,ee=t.height,ae=1,Ee=null,ye=null;const X=new _t(0,0,D,ee),J=new _t(0,0,D,ee);let Z=!1;const he=new Sc;let fe=!1,ve=!1;const We=new mt,Fe=new V,Ae=new _t,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function je(){return L===null?ae:1}let U=i;function at(w,H){return t.getContext(w,H)}try{const w={alpha:!0,depth:o,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${cc}`),t.addEventListener("webglcontextlost",be,!1),t.addEventListener("webglcontextrestored",Ge,!1),t.addEventListener("webglcontextcreationerror",pt,!1),U===null){const H="webgl2";if(U=at(H,w),U===null)throw at(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw Qe("WebGLRenderer: "+w.message),w}let qe,lt,Ce,P,T,G,te,ne,Q,Me,ue,De,ke,re,le,we,Ie,xe,$e,O,de,ce,Te;function se(){qe=new ow(U),qe.init(),de=new $b(U,qe),lt=new KC(U,qe,e,de),Ce=new Xb(U,qe),lt.reversedDepthBuffer&&h&&Ce.buffers.depth.setReversed(!0),P=new aw(U),T=new Db,G=new Yb(U,qe,Ce,T,lt,de,P),te=new iw(M),ne=new fM(U),ce=new $C(U,ne),Q=new rw(U,ne,P,ce),Me=new cw(U,Q,ne,ce,P),xe=new lw(U,lt,G),le=new ZC(T),ue=new Pb(M,te,qe,lt,ce,le),De=new eI(M,T),ke=new Lb,re=new Gb(qe),Ie=new YC(M,te,Ce,Me,v,c),we=new qb(M,Me,lt),Te=new tI(U,P,lt,Ce),$e=new JC(U,qe,P),O=new sw(U,qe,P),P.programs=ue.programs,M.capabilities=lt,M.extensions=qe,M.properties=T,M.renderLists=ke,M.shadowMap=we,M.state=Ce,M.info=P}se(),y!==Zt&&(x=new dw(y,t.width,t.height,o,r));const j=new Qb(M,U);this.xr=j,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const w=qe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=qe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(w){w!==void 0&&(ae=w,this.setSize(D,ee,!1))},this.getSize=function(w){return w.set(D,ee)},this.setSize=function(w,H,K=!0){if(j.isPresenting){Oe("WebGLRenderer: Can't change size while VR device is presenting.");return}D=w,ee=H,t.width=Math.floor(w*ae),t.height=Math.floor(H*ae),K===!0&&(t.style.width=w+"px",t.style.height=H+"px"),x!==null&&x.setSize(t.width,t.height),this.setViewport(0,0,w,H)},this.getDrawingBufferSize=function(w){return w.set(D*ae,ee*ae).floor()},this.setDrawingBufferSize=function(w,H,K){D=w,ee=H,ae=K,t.width=Math.floor(w*K),t.height=Math.floor(H*K),this.setViewport(0,0,w,H)},this.setEffects=function(w){if(y===Zt){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let H=0;H<w.length;H++)if(w[H].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(q)},this.getViewport=function(w){return w.copy(X)},this.setViewport=function(w,H,K,$){w.isVector4?X.set(w.x,w.y,w.z,w.w):X.set(w,H,K,$),Ce.viewport(q.copy(X).multiplyScalar(ae).round())},this.getScissor=function(w){return w.copy(J)},this.setScissor=function(w,H,K,$){w.isVector4?J.set(w.x,w.y,w.z,w.w):J.set(w,H,K,$),Ce.scissor(W.copy(J).multiplyScalar(ae).round())},this.getScissorTest=function(){return Z},this.setScissorTest=function(w){Ce.setScissorTest(Z=w)},this.setOpaqueSort=function(w){Ee=w},this.setTransparentSort=function(w){ye=w},this.getClearColor=function(w){return w.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor(...arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha(...arguments)},this.clear=function(w=!0,H=!0,K=!0){let $=0;if(w){let Y=!1;if(L!==null){const ge=L.texture.format;Y=g.has(ge)}if(Y){const ge=L.texture.type,Se=_.has(ge),_e=Ie.getClearColor(),Re=Ie.getClearAlpha(),Ne=_e.r,ze=_e.g,Je=_e.b;Se?(E[0]=Ne,E[1]=ze,E[2]=Je,E[3]=Re,U.clearBufferuiv(U.COLOR,0,E)):(A[0]=Ne,A[1]=ze,A[2]=Je,A[3]=Re,U.clearBufferiv(U.COLOR,0,A))}else $|=U.COLOR_BUFFER_BIT}H&&($|=U.DEPTH_BUFFER_BIT),K&&($|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&U.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",be,!1),t.removeEventListener("webglcontextrestored",Ge,!1),t.removeEventListener("webglcontextcreationerror",pt,!1),Ie.dispose(),ke.dispose(),re.dispose(),T.dispose(),te.dispose(),Me.dispose(),ce.dispose(),Te.dispose(),ue.dispose(),j.dispose(),j.removeEventListener("sessionstart",Lc),j.removeEventListener("sessionend",Uc),pi.stop()};function be(w){w.preventDefault(),es("WebGLRenderer: Context Lost."),B=!0}function Ge(){es("WebGLRenderer: Context Restored."),B=!1;const w=P.autoReset,H=we.enabled,K=we.autoUpdate,$=we.needsUpdate,Y=we.type;se(),P.autoReset=w,we.enabled=H,we.autoUpdate=K,we.needsUpdate=$,we.type=Y}function pt(w){Qe("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ot(w){const H=w.target;H.removeEventListener("dispose",ot),bn(H)}function bn(w){In(w),T.remove(w)}function In(w){const H=T.get(w).programs;H!==void 0&&(H.forEach(function(K){ue.releaseProgram(K)}),w.isShaderMaterial&&ue.releaseShaderCache(w))}this.renderBufferDirect=function(w,H,K,$,Y,ge){H===null&&(H=He);const Se=Y.isMesh&&Y.matrixWorld.determinant()<0,_e=nm(w,H,K,$,Y);Ce.setMaterial($,Se);let Re=K.index,Ne=1;if($.wireframe===!0){if(Re=Q.getWireframeAttribute(K),Re===void 0)return;Ne=2}const ze=K.drawRange,Je=K.attributes.position;let Le=ze.start*Ne,ct=(ze.start+ze.count)*Ne;ge!==null&&(Le=Math.max(Le,ge.start*Ne),ct=Math.min(ct,(ge.start+ge.count)*Ne)),Re!==null?(Le=Math.max(Le,0),ct=Math.min(ct,Re.count)):Je!=null&&(Le=Math.max(Le,0),ct=Math.min(ct,Je.count));const yt=ct-Le;if(yt<0||yt===1/0)return;ce.setup(Y,$,_e,K,Re);let gt,ut=$e;if(Re!==null&&(gt=ne.get(Re),ut=O,ut.setIndex(gt)),Y.isMesh)$.wireframe===!0?(Ce.setLineWidth($.wireframeLinewidth*je()),ut.setMode(U.LINES)):ut.setMode(U.TRIANGLES);else if(Y.isLine){let Lt=$.linewidth;Lt===void 0&&(Lt=1),Ce.setLineWidth(Lt*je()),Y.isLineSegments?ut.setMode(U.LINES):Y.isLineLoop?ut.setMode(U.LINE_LOOP):ut.setMode(U.LINE_STRIP)}else Y.isPoints?ut.setMode(U.POINTS):Y.isSprite&&ut.setMode(U.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)ts("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ut.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(qe.get("WEBGL_multi_draw"))ut.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Lt=Y._multiDrawStarts,Pe=Y._multiDrawCounts,Xt=Y._multiDrawCount,tt=Re?ne.get(Re).bytesPerElement:1,nn=T.get($).currentProgram.getUniforms();for(let pn=0;pn<Xt;pn++)nn.setValue(U,"_gl_DrawID",pn),ut.render(Lt[pn]/tt,Pe[pn])}else if(Y.isInstancedMesh)ut.renderInstances(Le,yt,Y.count);else if(K.isInstancedBufferGeometry){const Lt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Pe=Math.min(K.instanceCount,Lt);ut.renderInstances(Le,yt,Pe)}else ut.render(Le,yt)};function Nc(w,H,K){w.transparent===!0&&w.side===cn&&w.forceSinglePass===!1?(w.side=kt,w.needsUpdate=!0,Qo(w,H,K),w.side=ci,w.needsUpdate=!0,Qo(w,H,K),w.side=cn):Qo(w,H,K)}this.compile=function(w,H,K=null){K===null&&(K=w),R=re.get(K),R.init(H),b.push(R),K.traverseVisible(function(Y){Y.isLight&&Y.layers.test(H.layers)&&(R.pushLight(Y),Y.castShadow&&R.pushShadow(Y))}),w!==K&&w.traverseVisible(function(Y){Y.isLight&&Y.layers.test(H.layers)&&(R.pushLight(Y),Y.castShadow&&R.pushShadow(Y))}),R.setupLights();const $=new Set;return w.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const ge=Y.material;if(ge)if(Array.isArray(ge))for(let Se=0;Se<ge.length;Se++){const _e=ge[Se];Nc(_e,K,Y),$.add(_e)}else Nc(ge,K,Y),$.add(ge)}),R=b.pop(),$},this.compileAsync=function(w,H,K=null){const $=this.compile(w,H,K);return new Promise(Y=>{function ge(){if($.forEach(function(Se){T.get(Se).currentProgram.isReady()&&$.delete(Se)}),$.size===0){Y(w);return}setTimeout(ge,10)}qe.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let ps=null;function tm(w){ps&&ps(w)}function Lc(){pi.stop()}function Uc(){pi.start()}const pi=new Yp;pi.setAnimationLoop(tm),typeof self<"u"&&pi.setContext(self),this.setAnimationLoop=function(w){ps=w,j.setAnimationLoop(w),w===null?pi.stop():pi.start()},j.addEventListener("sessionstart",Lc),j.addEventListener("sessionend",Uc),this.render=function(w,H){if(H!==void 0&&H.isCamera!==!0){Qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;const K=j.enabled===!0&&j.isPresenting===!0,$=x!==null&&(L===null||K)&&x.begin(M,L);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(j.cameraAutoUpdate===!0&&j.updateCamera(H),H=j.getCamera()),w.isScene===!0&&w.onBeforeRender(M,w,H,L),R=re.get(w,b.length),R.init(H),b.push(R),We.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),he.setFromProjectionMatrix(We,En,H.reversedDepth),ve=this.localClippingEnabled,fe=le.init(this.clippingPlanes,ve),S=ke.get(w,C.length),S.init(),C.push(S),j.enabled===!0&&j.isPresenting===!0){const Se=M.xr.getDepthSensingMesh();Se!==null&&ms(Se,H,-1/0,M.sortObjects)}ms(w,H,0,M.sortObjects),S.finish(),M.sortObjects===!0&&S.sort(Ee,ye),Be=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Be&&Ie.addToRenderList(S,w),this.info.render.frame++,fe===!0&&le.beginShadows();const Y=R.state.shadowsArray;if(we.render(Y,w,H),fe===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset(),($&&x.hasRenderPass())===!1){const Se=S.opaque,_e=S.transmissive;if(R.setupLights(),H.isArrayCamera){const Re=H.cameras;if(_e.length>0)for(let Ne=0,ze=Re.length;Ne<ze;Ne++){const Je=Re[Ne];Bc(Se,_e,w,Je)}Be&&Ie.render(w);for(let Ne=0,ze=Re.length;Ne<ze;Ne++){const Je=Re[Ne];Fc(S,w,Je,Je.viewport)}}else _e.length>0&&Bc(Se,_e,w,H),Be&&Ie.render(w),Fc(S,w,H)}L!==null&&N===0&&(G.updateMultisampleRenderTarget(L),G.updateRenderTargetMipmap(L)),$&&x.end(M),w.isScene===!0&&w.onAfterRender(M,w,H),ce.resetDefaultState(),k=-1,z=null,b.pop(),b.length>0?(R=b[b.length-1],fe===!0&&le.setGlobalState(M.clippingPlanes,R.state.camera)):R=null,C.pop(),C.length>0?S=C[C.length-1]:S=null};function ms(w,H,K,$){if(w.visible===!1)return;if(w.layers.test(H.layers)){if(w.isGroup)K=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(H);else if(w.isLight)R.pushLight(w),w.castShadow&&R.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||he.intersectsSprite(w)){$&&Ae.setFromMatrixPosition(w.matrixWorld).applyMatrix4(We);const Se=Me.update(w),_e=w.material;_e.visible&&S.push(w,Se,_e,K,Ae.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||he.intersectsObject(w))){const Se=Me.update(w),_e=w.material;if($&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ae.copy(w.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Ae.copy(Se.boundingSphere.center)),Ae.applyMatrix4(w.matrixWorld).applyMatrix4(We)),Array.isArray(_e)){const Re=Se.groups;for(let Ne=0,ze=Re.length;Ne<ze;Ne++){const Je=Re[Ne],Le=_e[Je.materialIndex];Le&&Le.visible&&S.push(w,Se,Le,K,Ae.z,Je)}}else _e.visible&&S.push(w,Se,_e,K,Ae.z,null)}}const ge=w.children;for(let Se=0,_e=ge.length;Se<_e;Se++)ms(ge[Se],H,K,$)}function Fc(w,H,K,$){const{opaque:Y,transmissive:ge,transparent:Se}=w;R.setupLightsView(K),fe===!0&&le.setGlobalState(M.clippingPlanes,K),$&&Ce.viewport(q.copy($)),Y.length>0&&Zo(Y,H,K),ge.length>0&&Zo(ge,H,K),Se.length>0&&Zo(Se,H,K),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function Bc(w,H,K,$){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[$.id]===void 0){const Le=qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[$.id]=new Tn(1,1,{generateMipmaps:!0,type:Le?zn:Zt,minFilter:Ai,samples:Math.max(4,lt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace})}const ge=R.state.transmissionRenderTarget[$.id],Se=$.viewport||q;ge.setSize(Se.z*M.transmissionResolutionScale,Se.w*M.transmissionResolutionScale);const _e=M.getRenderTarget(),Re=M.getActiveCubeFace(),Ne=M.getActiveMipmapLevel();M.setRenderTarget(ge),M.getClearColor(oe),F=M.getClearAlpha(),F<1&&M.setClearColor(16777215,.5),M.clear(),Be&&Ie.render(K);const ze=M.toneMapping;M.toneMapping=Sn;const Je=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),R.setupLightsView($),fe===!0&&le.setGlobalState(M.clippingPlanes,$),Zo(w,K,$),G.updateMultisampleRenderTarget(ge),G.updateRenderTargetMipmap(ge),qe.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let ct=0,yt=H.length;ct<yt;ct++){const gt=H[ct],{object:ut,geometry:Lt,material:Pe,group:Xt}=gt;if(Pe.side===cn&&ut.layers.test($.layers)){const tt=Pe.side;Pe.side=kt,Pe.needsUpdate=!0,kc(ut,K,$,Lt,Pe,Xt),Pe.side=tt,Pe.needsUpdate=!0,Le=!0}}Le===!0&&(G.updateMultisampleRenderTarget(ge),G.updateRenderTargetMipmap(ge))}M.setRenderTarget(_e,Re,Ne),M.setClearColor(oe,F),Je!==void 0&&($.viewport=Je),M.toneMapping=ze}function Zo(w,H,K){const $=H.isScene===!0?H.overrideMaterial:null;for(let Y=0,ge=w.length;Y<ge;Y++){const Se=w[Y],{object:_e,geometry:Re,group:Ne}=Se;let ze=Se.material;ze.allowOverride===!0&&$!==null&&(ze=$),_e.layers.test(K.layers)&&kc(_e,H,K,Re,ze,Ne)}}function kc(w,H,K,$,Y,ge){w.onBeforeRender(M,H,K,$,Y,ge),w.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Y.onBeforeRender(M,H,K,$,w,ge),Y.transparent===!0&&Y.side===cn&&Y.forceSinglePass===!1?(Y.side=kt,Y.needsUpdate=!0,M.renderBufferDirect(K,H,$,Y,w,ge),Y.side=ci,Y.needsUpdate=!0,M.renderBufferDirect(K,H,$,Y,w,ge),Y.side=cn):M.renderBufferDirect(K,H,$,Y,w,ge),w.onAfterRender(M,H,K,$,Y,ge)}function Qo(w,H,K){H.isScene!==!0&&(H=He);const $=T.get(w),Y=R.state.lights,ge=R.state.shadowsArray,Se=Y.state.version,_e=ue.getParameters(w,Y.state,ge,H,K),Re=ue.getProgramCacheKey(_e);let Ne=$.programs;$.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?H.environment:null,$.fog=H.fog;const ze=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;$.envMap=te.get(w.envMap||$.environment,ze),$.envMapRotation=$.environment!==null&&w.envMap===null?H.environmentRotation:w.envMapRotation,Ne===void 0&&(w.addEventListener("dispose",ot),Ne=new Map,$.programs=Ne);let Je=Ne.get(Re);if(Je!==void 0){if($.currentProgram===Je&&$.lightsStateVersion===Se)return Gc(w,_e),Je}else _e.uniforms=ue.getUniforms(w),w.onBeforeCompile(_e,M),Je=ue.acquireProgram(_e,Re),Ne.set(Re,Je),$.uniforms=_e.uniforms;const Le=$.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Le.clippingPlanes=le.uniform),Gc(w,_e),$.needsLights=om(w),$.lightsStateVersion=Se,$.needsLights&&(Le.ambientLightColor.value=Y.state.ambient,Le.lightProbe.value=Y.state.probe,Le.directionalLights.value=Y.state.directional,Le.directionalLightShadows.value=Y.state.directionalShadow,Le.spotLights.value=Y.state.spot,Le.spotLightShadows.value=Y.state.spotShadow,Le.rectAreaLights.value=Y.state.rectArea,Le.ltc_1.value=Y.state.rectAreaLTC1,Le.ltc_2.value=Y.state.rectAreaLTC2,Le.pointLights.value=Y.state.point,Le.pointLightShadows.value=Y.state.pointShadow,Le.hemisphereLights.value=Y.state.hemi,Le.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Le.spotLightMatrix.value=Y.state.spotLightMatrix,Le.spotLightMap.value=Y.state.spotLightMap,Le.pointShadowMatrix.value=Y.state.pointShadowMatrix),$.currentProgram=Je,$.uniformsList=null,Je}function Oc(w){if(w.uniformsList===null){const H=w.currentProgram.getUniforms();w.uniformsList=zr.seqWithValue(H.seq,w.uniforms)}return w.uniformsList}function Gc(w,H){const K=T.get(w);K.outputColorSpace=H.outputColorSpace,K.batching=H.batching,K.batchingColor=H.batchingColor,K.instancing=H.instancing,K.instancingColor=H.instancingColor,K.instancingMorph=H.instancingMorph,K.skinning=H.skinning,K.morphTargets=H.morphTargets,K.morphNormals=H.morphNormals,K.morphColors=H.morphColors,K.morphTargetsCount=H.morphTargetsCount,K.numClippingPlanes=H.numClippingPlanes,K.numIntersection=H.numClipIntersection,K.vertexAlphas=H.vertexAlphas,K.vertexTangents=H.vertexTangents,K.toneMapping=H.toneMapping}function nm(w,H,K,$,Y){H.isScene!==!0&&(H=He),G.resetTextureUnits();const ge=H.fog,Se=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?H.environment:null,_e=L===null?M.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:go,Re=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Ne=te.get($.envMap||Se,Re),ze=$.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Je=!!K.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Le=!!K.morphAttributes.position,ct=!!K.morphAttributes.normal,yt=!!K.morphAttributes.color;let gt=Sn;$.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(gt=M.toneMapping);const ut=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Lt=ut!==void 0?ut.length:0,Pe=T.get($),Xt=R.state.lights;if(fe===!0&&(ve===!0||w!==z)){const wt=w===z&&$.id===k;le.setState($,w,wt)}let tt=!1;$.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==Xt.state.version||Pe.outputColorSpace!==_e||Y.isBatchedMesh&&Pe.batching===!1||!Y.isBatchedMesh&&Pe.batching===!0||Y.isBatchedMesh&&Pe.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Pe.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Pe.instancing===!1||!Y.isInstancedMesh&&Pe.instancing===!0||Y.isSkinnedMesh&&Pe.skinning===!1||!Y.isSkinnedMesh&&Pe.skinning===!0||Y.isInstancedMesh&&Pe.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Pe.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Pe.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Pe.instancingMorph===!1&&Y.morphTexture!==null||Pe.envMap!==Ne||$.fog===!0&&Pe.fog!==ge||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==le.numPlanes||Pe.numIntersection!==le.numIntersection)||Pe.vertexAlphas!==ze||Pe.vertexTangents!==Je||Pe.morphTargets!==Le||Pe.morphNormals!==ct||Pe.morphColors!==yt||Pe.toneMapping!==gt||Pe.morphTargetsCount!==Lt)&&(tt=!0):(tt=!0,Pe.__version=$.version);let nn=Pe.currentProgram;tt===!0&&(nn=Qo($,H,Y));let pn=!1,mi=!1,Li=!1;const ht=nn.getUniforms(),Pt=Pe.uniforms;if(Ce.useProgram(nn.program)&&(pn=!0,mi=!0,Li=!0),$.id!==k&&(k=$.id,mi=!0),pn||z!==w){Ce.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ht.setValue(U,"projectionMatrix",w.projectionMatrix),ht.setValue(U,"viewMatrix",w.matrixWorldInverse);const Jn=ht.map.cameraPosition;Jn!==void 0&&Jn.setValue(U,Fe.setFromMatrixPosition(w.matrixWorld)),lt.logarithmicDepthBuffer&&ht.setValue(U,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&ht.setValue(U,"isOrthographic",w.isOrthographicCamera===!0),z!==w&&(z=w,mi=!0,Li=!0)}if(Pe.needsLights&&(Xt.state.directionalShadowMap.length>0&&ht.setValue(U,"directionalShadowMap",Xt.state.directionalShadowMap,G),Xt.state.spotShadowMap.length>0&&ht.setValue(U,"spotShadowMap",Xt.state.spotShadowMap,G),Xt.state.pointShadowMap.length>0&&ht.setValue(U,"pointShadowMap",Xt.state.pointShadowMap,G)),Y.isSkinnedMesh){ht.setOptional(U,Y,"bindMatrix"),ht.setOptional(U,Y,"bindMatrixInverse");const wt=Y.skeleton;wt&&(wt.boneTexture===null&&wt.computeBoneTexture(),ht.setValue(U,"boneTexture",wt.boneTexture,G))}Y.isBatchedMesh&&(ht.setOptional(U,Y,"batchingTexture"),ht.setValue(U,"batchingTexture",Y._matricesTexture,G),ht.setOptional(U,Y,"batchingIdTexture"),ht.setValue(U,"batchingIdTexture",Y._indirectTexture,G),ht.setOptional(U,Y,"batchingColorTexture"),Y._colorsTexture!==null&&ht.setValue(U,"batchingColorTexture",Y._colorsTexture,G));const $n=K.morphAttributes;if(($n.position!==void 0||$n.normal!==void 0||$n.color!==void 0)&&xe.update(Y,K,nn),(mi||Pe.receiveShadow!==Y.receiveShadow)&&(Pe.receiveShadow=Y.receiveShadow,ht.setValue(U,"receiveShadow",Y.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&H.environment!==null&&(Pt.envMapIntensity.value=H.environmentIntensity),Pt.dfgLUT!==void 0&&(Pt.dfgLUT.value=iI()),mi&&(ht.setValue(U,"toneMappingExposure",M.toneMappingExposure),Pe.needsLights&&im(Pt,Li),ge&&$.fog===!0&&De.refreshFogUniforms(Pt,ge),De.refreshMaterialUniforms(Pt,$,ae,ee,R.state.transmissionRenderTarget[w.id]),zr.upload(U,Oc(Pe),Pt,G)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(zr.upload(U,Oc(Pe),Pt,G),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&ht.setValue(U,"center",Y.center),ht.setValue(U,"modelViewMatrix",Y.modelViewMatrix),ht.setValue(U,"normalMatrix",Y.normalMatrix),ht.setValue(U,"modelMatrix",Y.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const wt=$.uniformsGroups;for(let Jn=0,Ui=wt.length;Jn<Ui;Jn++){const Vc=wt[Jn];Te.update(Vc,nn),Te.bind(Vc,nn)}}return nn}function im(w,H){w.ambientLightColor.needsUpdate=H,w.lightProbe.needsUpdate=H,w.directionalLights.needsUpdate=H,w.directionalLightShadows.needsUpdate=H,w.pointLights.needsUpdate=H,w.pointLightShadows.needsUpdate=H,w.spotLights.needsUpdate=H,w.spotLightShadows.needsUpdate=H,w.rectAreaLights.needsUpdate=H,w.hemisphereLights.needsUpdate=H}function om(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(w,H,K){const $=T.get(w);$.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),T.get(w.texture).__webglTexture=H,T.get(w.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:K,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,H){const K=T.get(w);K.__webglFramebuffer=H,K.__useDefaultFramebuffer=H===void 0};const rm=U.createFramebuffer();this.setRenderTarget=function(w,H=0,K=0){L=w,I=H,N=K;let $=null,Y=!1,ge=!1;if(w){const _e=T.get(w);if(_e.__useDefaultFramebuffer!==void 0){Ce.bindFramebuffer(U.FRAMEBUFFER,_e.__webglFramebuffer),q.copy(w.viewport),W.copy(w.scissor),ie=w.scissorTest,Ce.viewport(q),Ce.scissor(W),Ce.setScissorTest(ie),k=-1;return}else if(_e.__webglFramebuffer===void 0)G.setupRenderTarget(w);else if(_e.__hasExternalTextures)G.rebindTextures(w,T.get(w.texture).__webglTexture,T.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const ze=w.depthTexture;if(_e.__boundDepthTexture!==ze){if(ze!==null&&T.has(ze)&&(w.width!==ze.image.width||w.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");G.setupDepthRenderbuffer(w)}}const Re=w.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(ge=!0);const Ne=T.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ne[H])?$=Ne[H][K]:$=Ne[H],Y=!0):w.samples>0&&G.useMultisampledRTT(w)===!1?$=T.get(w).__webglMultisampledFramebuffer:Array.isArray(Ne)?$=Ne[K]:$=Ne,q.copy(w.viewport),W.copy(w.scissor),ie=w.scissorTest}else q.copy(X).multiplyScalar(ae).floor(),W.copy(J).multiplyScalar(ae).floor(),ie=Z;if(K!==0&&($=rm),Ce.bindFramebuffer(U.FRAMEBUFFER,$)&&Ce.drawBuffers(w,$),Ce.viewport(q),Ce.scissor(W),Ce.setScissorTest(ie),Y){const _e=T.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+H,_e.__webglTexture,K)}else if(ge){const _e=H;for(let Re=0;Re<w.textures.length;Re++){const Ne=T.get(w.textures[Re]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Re,Ne.__webglTexture,K,_e)}}else if(w!==null&&K!==0){const _e=T.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,_e.__webglTexture,K)}k=-1},this.readRenderTargetPixels=function(w,H,K,$,Y,ge,Se,_e=0){if(!(w&&w.isWebGLRenderTarget)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=T.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Se!==void 0&&(Re=Re[Se]),Re){Ce.bindFramebuffer(U.FRAMEBUFFER,Re);try{const Ne=w.textures[_e],ze=Ne.format,Je=Ne.type;if(w.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+_e),!lt.textureFormatReadable(ze)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(Je)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=w.width-$&&K>=0&&K<=w.height-Y&&U.readPixels(H,K,$,Y,de.convert(ze),de.convert(Je),ge)}finally{const Ne=L!==null?T.get(L).__webglFramebuffer:null;Ce.bindFramebuffer(U.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(w,H,K,$,Y,ge,Se,_e=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=T.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Se!==void 0&&(Re=Re[Se]),Re)if(H>=0&&H<=w.width-$&&K>=0&&K<=w.height-Y){Ce.bindFramebuffer(U.FRAMEBUFFER,Re);const Ne=w.textures[_e],ze=Ne.format,Je=Ne.type;if(w.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+_e),!lt.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Le=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Le),U.bufferData(U.PIXEL_PACK_BUFFER,ge.byteLength,U.STREAM_READ),U.readPixels(H,K,$,Y,de.convert(ze),de.convert(Je),0);const ct=L!==null?T.get(L).__webglFramebuffer:null;Ce.bindFramebuffer(U.FRAMEBUFFER,ct);const yt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await mT(U,yt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Le),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ge),U.deleteBuffer(Le),U.deleteSync(yt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,H=null,K=0){const $=Math.pow(2,-K),Y=Math.floor(w.image.width*$),ge=Math.floor(w.image.height*$),Se=H!==null?H.x:0,_e=H!==null?H.y:0;G.setTexture2D(w,0),U.copyTexSubImage2D(U.TEXTURE_2D,K,0,0,Se,_e,Y,ge),Ce.unbindTexture()};const sm=U.createFramebuffer(),am=U.createFramebuffer();this.copyTextureToTexture=function(w,H,K=null,$=null,Y=0,ge=0){let Se,_e,Re,Ne,ze,Je,Le,ct,yt;const gt=w.isCompressedTexture?w.mipmaps[ge]:w.image;if(K!==null)Se=K.max.x-K.min.x,_e=K.max.y-K.min.y,Re=K.isBox3?K.max.z-K.min.z:1,Ne=K.min.x,ze=K.min.y,Je=K.isBox3?K.min.z:0;else{const Pt=Math.pow(2,-Y);Se=Math.floor(gt.width*Pt),_e=Math.floor(gt.height*Pt),w.isDataArrayTexture?Re=gt.depth:w.isData3DTexture?Re=Math.floor(gt.depth*Pt):Re=1,Ne=0,ze=0,Je=0}$!==null?(Le=$.x,ct=$.y,yt=$.z):(Le=0,ct=0,yt=0);const ut=de.convert(H.format),Lt=de.convert(H.type);let Pe;H.isData3DTexture?(G.setTexture3D(H,0),Pe=U.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(G.setTexture2DArray(H,0),Pe=U.TEXTURE_2D_ARRAY):(G.setTexture2D(H,0),Pe=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,H.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,H.unpackAlignment);const Xt=U.getParameter(U.UNPACK_ROW_LENGTH),tt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),nn=U.getParameter(U.UNPACK_SKIP_PIXELS),pn=U.getParameter(U.UNPACK_SKIP_ROWS),mi=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,gt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,gt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ne),U.pixelStorei(U.UNPACK_SKIP_ROWS,ze),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Je);const Li=w.isDataArrayTexture||w.isData3DTexture,ht=H.isDataArrayTexture||H.isData3DTexture;if(w.isDepthTexture){const Pt=T.get(w),$n=T.get(H),wt=T.get(Pt.__renderTarget),Jn=T.get($n.__renderTarget);Ce.bindFramebuffer(U.READ_FRAMEBUFFER,wt.__webglFramebuffer),Ce.bindFramebuffer(U.DRAW_FRAMEBUFFER,Jn.__webglFramebuffer);for(let Ui=0;Ui<Re;Ui++)Li&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,T.get(w).__webglTexture,Y,Je+Ui),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,T.get(H).__webglTexture,ge,yt+Ui)),U.blitFramebuffer(Ne,ze,Se,_e,Le,ct,Se,_e,U.DEPTH_BUFFER_BIT,U.NEAREST);Ce.bindFramebuffer(U.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(Y!==0||w.isRenderTargetTexture||T.has(w)){const Pt=T.get(w),$n=T.get(H);Ce.bindFramebuffer(U.READ_FRAMEBUFFER,sm),Ce.bindFramebuffer(U.DRAW_FRAMEBUFFER,am);for(let wt=0;wt<Re;wt++)Li?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Pt.__webglTexture,Y,Je+wt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Pt.__webglTexture,Y),ht?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,$n.__webglTexture,ge,yt+wt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,$n.__webglTexture,ge),Y!==0?U.blitFramebuffer(Ne,ze,Se,_e,Le,ct,Se,_e,U.COLOR_BUFFER_BIT,U.NEAREST):ht?U.copyTexSubImage3D(Pe,ge,Le,ct,yt+wt,Ne,ze,Se,_e):U.copyTexSubImage2D(Pe,ge,Le,ct,Ne,ze,Se,_e);Ce.bindFramebuffer(U.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ht?w.isDataTexture||w.isData3DTexture?U.texSubImage3D(Pe,ge,Le,ct,yt,Se,_e,Re,ut,Lt,gt.data):H.isCompressedArrayTexture?U.compressedTexSubImage3D(Pe,ge,Le,ct,yt,Se,_e,Re,ut,gt.data):U.texSubImage3D(Pe,ge,Le,ct,yt,Se,_e,Re,ut,Lt,gt):w.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ge,Le,ct,Se,_e,ut,Lt,gt.data):w.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ge,Le,ct,gt.width,gt.height,ut,gt.data):U.texSubImage2D(U.TEXTURE_2D,ge,Le,ct,Se,_e,ut,Lt,gt);U.pixelStorei(U.UNPACK_ROW_LENGTH,Xt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,tt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,nn),U.pixelStorei(U.UNPACK_SKIP_ROWS,pn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,mi),ge===0&&H.generateMipmaps&&U.generateMipmap(Pe),Ce.unbindTexture()},this.initRenderTarget=function(w){T.get(w).__webglFramebuffer===void 0&&G.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?G.setTextureCube(w,0):w.isData3DTexture?G.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?G.setTexture2DArray(w,0):G.setTexture2D(w,0),Ce.unbindTexture()},this.resetState=function(){I=0,N=0,L=null,Ce.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}}const lh={type:"change"},Pc={type:"start"},jp={type:"end"},Lr=new Jo,ch=new oi,rI=Math.cos(70*vT.DEG2RAD),St=new V,zt=2*Math.PI,ft={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ba=1e-6;class sI extends uM{constructor(e,t=null){super(e,t),this.state=ft.NONE,this.target=new V,this.cursor=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ao.ROTATE,MIDDLE:ao.DOLLY,RIGHT:ao.PAN},this.touches={ONE:oo.ROTATE,TWO:oo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new V,this._lastQuaternion=new ui,this._lastTargetPosition=new V,this._quat=new ui().setFromUnitVectors(e.up,new V(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Bf,this._sphericalDelta=new Bf,this._scale=1,this._panOffset=new V,this._rotateStart=new Ue,this._rotateEnd=new Ue,this._rotateDelta=new Ue,this._panStart=new Ue,this._panEnd=new Ue,this._panDelta=new Ue,this._dollyStart=new Ue,this._dollyEnd=new Ue,this._dollyDelta=new Ue,this._dollyDirection=new V,this._mouse=new Ue,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=lI.bind(this),this._onPointerDown=aI.bind(this),this._onPointerUp=cI.bind(this),this._onContextMenu=gI.bind(this),this._onMouseWheel=fI.bind(this),this._onKeyDown=hI.bind(this),this._onTouchStart=pI.bind(this),this._onTouchMove=mI.bind(this),this._onMouseDown=uI.bind(this),this._onMouseMove=dI.bind(this),this._interceptControlDown=_I.bind(this),this._interceptControlUp=vI.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(lh),this.update(),this.state=ft.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;St.copy(t).sub(this.target),St.applyQuaternion(this._quat),this._spherical.setFromVector3(St),this.autoRotate&&this.state===ft.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(i)&&isFinite(o)&&(i<-Math.PI?i+=zt:i>Math.PI&&(i-=zt),o<-Math.PI?o+=zt:o>Math.PI&&(o-=zt),i<=o?this._spherical.theta=Math.max(i,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+o)/2?Math.max(i,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const s=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=s!=this._spherical.radius}if(St.setFromSpherical(this._spherical),St.applyQuaternion(this._quatInverse),t.copy(this.target).add(St),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let s=null;if(this.object.isPerspectiveCamera){const a=St.length();s=this._clampDistance(a*this._scale);const c=a-s;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new V(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new V(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),s=St.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;s!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(s).add(this.object.position):(Lr.origin.copy(this.object.position),Lr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Lr.direction))<rI?this.object.lookAt(this.target):(ch.setFromNormalAndCoplanarPoint(this.object.up,this.target),Lr.intersectPlane(ch,this.target))))}else if(this.object.isOrthographicCamera){const s=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),s!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ba||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ba||this._lastTargetPosition.distanceToSquared(this.target)>ba?(this.dispatchEvent(lh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?zt/60*this.autoRotateSpeed*e:zt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){St.setFromMatrixColumn(t,0),St.multiplyScalar(-e),this._panOffset.add(St)}_panUp(e,t){this.screenSpacePanning===!0?St.setFromMatrixColumn(t,1):(St.setFromMatrixColumn(t,0),St.crossVectors(this.object.up,St)),St.multiplyScalar(e),this._panOffset.add(St)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;St.copy(o).sub(this.target);let r=St.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),o=e-i.left,r=t-i.top,s=i.width,a=i.height;this._mouse.x=o/s*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(zt*this._rotateDelta.x/t.clientHeight),this._rotateUp(zt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(zt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-zt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(zt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-zt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._rotateStart.set(i,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panStart.set(i,o)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,o=e.pageY-t.y,r=Math.sqrt(i*i+o*o);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),o=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(o,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(zt*this._rotateDelta.x/t.clientHeight),this._rotateUp(zt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panEnd.set(i,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,o=e.pageY-t.y,r=Math.sqrt(i*i+o*o);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const s=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(s,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ue,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function aI(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function lI(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function cI(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(jp),this.state=ft.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function uI(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ao.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ft.DOLLY;break;case ao.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ft.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ft.ROTATE}break;case ao.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ft.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ft.PAN}break;default:this.state=ft.NONE}this.state!==ft.NONE&&this.dispatchEvent(Pc)}function dI(n){switch(this.state){case ft.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ft.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ft.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function fI(n){this.enabled===!1||this.enableZoom===!1||this.state!==ft.NONE||(n.preventDefault(),this.dispatchEvent(Pc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(jp))}function hI(n){this.enabled!==!1&&this._handleKeyDown(n)}function pI(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case oo.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ft.TOUCH_ROTATE;break;case oo.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ft.TOUCH_PAN;break;default:this.state=ft.NONE}break;case 2:switch(this.touches.TWO){case oo.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ft.TOUCH_DOLLY_PAN;break;case oo.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ft.TOUCH_DOLLY_ROTATE;break;default:this.state=ft.NONE}break;default:this.state=ft.NONE}this.state!==ft.NONE&&this.dispatchEvent(Pc)}function mI(n){switch(this._trackPointer(n),this.state){case ft.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ft.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ft.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ft.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ft.NONE}}function gI(n){this.enabled!==!1&&n.preventDefault()}function _I(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function vI(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}let nt,Et,an,ln,Vn=[],uo,Wl,Wr,qo=[];function yI(n,e){em();const t=rc(e);if(!t||!t.photos||t.photos.length===0){n.innerHTML=`
      <div class="celebration-page" style="display:flex;align-items:center;justify-content:center;min-height:100vh;">
        <div class="glass-card text-center" style="max-width:450px;">
          <h2 style="font-size:3rem; margin-bottom:16px;">🌌</h2>
          <h2 style="margin-bottom:16px;">Memory Galaxy</h2>
          <p style="color:var(--text-secondary); margin-bottom:24px;">
            Upload photos to create your Memory Galaxy!<br>
            Each photo becomes a planet in space.
          </p>
          <button class="btn btn-primary" onclick="window.location.hash='#/create'">Add Photos</button>
        </div>
      </div>
    `;return}ic(t.theme);const i=rp(t.theme);n.innerHTML=`
    <div class="galaxy-page" style="position:relative; width:100%; height:100vh; overflow:hidden; background:#050510;">
      <canvas id="galaxy-canvas" style="display:block;"></canvas>
      
      <div class="galaxy-overlay glass-card-strong" id="galaxy-overlay" style="
        position:absolute; inset:0; margin:auto; width:90%; max-width:500px; height:fit-content;
        display:flex; flex-direction:column; align-items:center; justify-content:center;
        z-index:10; transition: opacity 1.5s ease; text-align:center; box-shadow: 0 0 100px rgba(123,47,247,0.3);">
        <div style="font-size:5rem; margin-bottom:16px; animation: float 3s ease-in-out infinite;">🚀</div>
        <h1 class="text-gradient" style="font-size:2.5rem; margin-bottom:12px; font-weight:800;">Memory Galaxy</h1>
        <p style="color:var(--text-secondary); margin-bottom:32px; font-size:1.1rem;">
          Explore a 3D universe created entirely from ${t.name}'s memories.
        </p>
        <button class="btn btn-primary" id="enter-galaxy" style="padding: 16px 40px; font-size: 1.2rem;">
          ✨ Enter Galaxy
        </button>
      </div>

      <div class="galaxy-hud" id="galaxy-hud" style="
        position:absolute; top:20px; left:20px; z-index:5; opacity:0;
        transition: opacity 0.5s ease;">
        <button class="btn btn-secondary" style="padding:10px 20px; font-size:0.9rem; border-radius:30px;"
          onclick="window.location.hash='#/birthday/${e}'">← Back to Celebration</button>
      </div>

      <div class="galaxy-info" id="galaxy-info" style="
        position:absolute; bottom:40px; left:50%; transform:translateX(-50%);
        z-index:5; opacity:0; transition: opacity 0.5s ease;
        padding: 12px 24px; border-radius: 50px; background: rgba(0,0,0,0.6); backdrop-filter: blur(10px);
        color:rgba(255,255,255,0.9); font-size:0.9rem; text-align:center;
        pointer-events:none; border: 1px solid rgba(255,255,255,0.1);">
        🖱️ Drag to rotate &nbsp;·&nbsp; Scroll to zoom &nbsp;·&nbsp; Click a planet to view memory
      </div>

      <div id="photo-modal" style="
        position:fixed; inset:0; z-index:100; display:none;
        background:rgba(0,0,0,0.9); backdrop-filter:blur(15px);
        align-items:center; justify-content:center; cursor:pointer;">
        <img id="modal-img" style="max-width:90vw; max-height:85vh; border-radius:16px;
          box-shadow:0 30px 90px rgba(0,0,0,0.8); object-fit:contain; transition: transform 0.3s ease;" />
        <div style="position:absolute; top:30px; right:40px; color:white; font-size:2.5rem; 
          background: rgba(255,255,255,0.1); width: 60px; height: 60px; border-radius: 50%;
          display:flex; align-items:center; justify-content:center; cursor:pointer; hover:background:rgba(255,255,255,0.2);">✕</div>
      </div>
    </div>
  `;const o=document.getElementById("galaxy-canvas");xI(o,t,i),document.getElementById("enter-galaxy").addEventListener("click",()=>{const s=document.getElementById("galaxy-overlay");s.style.opacity="0",s.style.pointerEvents="none",setTimeout(()=>{s.style.display="none",document.getElementById("galaxy-hud").style.opacity="1",document.getElementById("galaxy-info").style.opacity="1",DI()},800)});const r=document.getElementById("photo-modal");r.addEventListener("click",()=>{const s=document.getElementById("modal-img");s.style.transform="scale(0.8)",setTimeout(()=>r.style.display="none",200)})}function xI(n,e,t){nt=new DT,nt.fog=new Ec(328976,.002),Et=new Kt(60,window.innerWidth/window.innerHeight,.1,2e3),Et.position.set(0,30,80),an=new oI({canvas:n,antialias:!0,alpha:!0}),an.setSize(window.innerWidth,window.innerHeight),an.setPixelRatio(Math.min(window.devicePixelRatio,2)),an.toneMapping=uc,an.toneMappingExposure=1.2,ln=new sI(Et,an.domElement),ln.enableDamping=!0,ln.dampingFactor=.05,ln.maxDistance=250,ln.minDistance=5,ln.autoRotate=!0,ln.autoRotateSpeed=.4;const i=new sM(16777215,1.5);nt.add(i);const o=new qn(16777215,3,500);o.position.set(0,50,0),nt.add(o);const r=new rM(16777215,2);r.position.set(100,100,50),nt.add(r),EI(),SI(t),TI(e),MI(),AI(e),CI(e),wI(),bI(e),II(e),RI();const s=new cM,a=new Ue;n.addEventListener("click",m=>{var E,A;a.x=m.clientX/window.innerWidth*2-1,a.y=-(m.clientY/window.innerHeight)*2+1,s.setFromCamera(a,Et);const v=Vn.map(S=>S.mesh).filter(Boolean),y=s.intersectObjects(v);if(y.length>0){const S=Vn.find(R=>R.mesh===y[0].object);S&&S.photoUrl&&NI(S.photoUrl)}const g=nt.children.filter(S=>S.userData&&S.userData.interactive),_=s.intersectObjects(g,!0);if(_.length>0){let S=_[0].object;for(;S&&!((E=S.userData)!=null&&E.interactive);)S=S.parent;(A=S==null?void 0:S.userData)!=null&&A.interactive&&PI(S)}});const c=()=>{Et.aspect=window.innerWidth/window.innerHeight,Et.updateProjectionMatrix(),an.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",c),qo.push(()=>window.removeEventListener("resize",c));const l={},f=m=>{l[m.code]=!0},p=m=>{l[m.code]=!1};document.addEventListener("keydown",f),document.addEventListener("keyup",p),qo.push(()=>{document.removeEventListener("keydown",f),document.removeEventListener("keyup",p)});function h(){Wr=requestAnimationFrame(h);const m=.5,v=new V;Et.getWorldDirection(v);const y=new V().crossVectors(v,Et.up).normalize();l.KeyW&&Et.position.addScaledVector(v,m),l.KeyS&&Et.position.addScaledVector(v,-m),l.KeyA&&Et.position.addScaledVector(y,-m),l.KeyD&&Et.position.addScaledVector(y,m),l.KeyQ&&(Et.position.y+=m),l.KeyE&&(Et.position.y-=m),Vn.forEach(g=>{g.mesh&&(g.mesh.rotation.y+=.003),g.glow&&(g.glow.material.opacity=.3+Math.sin(Date.now()*.001+g.phase)*.15),g.ring&&(g.ring.rotation.z+=.001)}),uo&&(uo.rotation.y+=1e-4,uo.rotation.x+=5e-5),ln.update(),an.render(nt,Et)}h()}function EI(){const e=new Ct,t=new Float32Array(3e3*3),i=new Float32Array(3e3*3),o=new Float32Array(3e3);for(let s=0;s<3e3;s++){const a=s*3,c=300+Math.random()*700,l=Math.random()*Math.PI*2,f=Math.acos(2*Math.random()-1);t[a]=c*Math.sin(f)*Math.cos(l),t[a+1]=c*Math.sin(f)*Math.sin(l),t[a+2]=c*Math.cos(f);const p=.5+Math.random()*.5;i[a]=p,i[a+1]=p,i[a+2]=.8+Math.random()*.2,o[s]=.5+Math.random()*2}e.setAttribute("position",new qt(t,3)),e.setAttribute("color",new qt(i,3)),e.setAttribute("size",new qt(o,1));const r=new Vp({size:1.5,vertexColors:!0,transparent:!0,opacity:.8,sizeAttenuation:!0});uo=new WT(e,r),nt.add(uo)}function SI(n){const e=n.particleColors||["#ff2d75","#7b2ff7","#00d4ff"];for(let t=0;t<8;t++){const i=document.createElement("canvas");i.width=128,i.height=128;const o=i.getContext("2d"),r=o.createRadialGradient(64,64,0,64,64,64),s=e[t%e.length];r.addColorStop(0,s+"33"),r.addColorStop(.5,s+"11"),r.addColorStop(1,"transparent"),o.fillStyle=r,o.fillRect(0,0,128,128);const a=new Mc(i),c=new kT(new kp({map:a,transparent:!0,opacity:.15,blending:$a}));c.position.set((Math.random()-.5)*200,(Math.random()-.5)*100,(Math.random()-.5)*200),c.scale.set(80+Math.random()*60,80+Math.random()*60,1),nt.add(c)}}function TI(n){const e=n.photos||[],t=e.length;Vn=[],e.forEach((i,o)=>{const r=o/t*Math.PI*2*1.5,s=20+o/t*40,a=Math.cos(r)*s,c=Math.sin(r)*s,l=(Math.random()-.5)*20,f=3+Math.random()*2,p=new Cn(f,32,32),h=new nM,m=new Wt({color:16777215,roughness:.5,metalness:.1});h.load(i,S=>{S.colorSpace=Jt,m.map=S,m.needsUpdate=!0},void 0,()=>{m.color.setHex(16723317)});const v=new st(p,m);v.position.set(a,l,c),nt.add(v);const y=new Cn(f*1.3,16,16),g=new di({color:16723317,transparent:!0,opacity:.15,side:kt}),_=new st(y,g);_.position.copy(v.position),nt.add(_);let E=null;if(Math.random()>.5){const S=new Cc(f*1.5,f*2,32),R=new di({color:8073207,transparent:!0,opacity:.2,side:cn});E=new st(S,R),E.position.copy(v.position),E.rotation.x=Math.PI/3+Math.random()*.5,nt.add(E)}const A=new qn(16723317,.5,15);A.position.copy(v.position),nt.add(A),Vn.push({mesh:v,glow:_,ring:E,photoUrl:i,phase:Math.random()*Math.PI*2,position:v.position.clone()})})}function MI(){if(Vn.length<2)return;const n=Vn.map(i=>i.position),e=new Ct().setFromPoints(n),t=new Tc({color:3359863,transparent:!0,opacity:.3});Wl=new Gp(e,t),nt.add(Wl)}function AI(n){const e=new Cn(6,64,64),t=document.createElement("canvas");t.width=512,t.height=512;const i=t.getContext("2d"),o=i.createLinearGradient(0,0,512,512);o.addColorStop(0,"#ff2d75"),o.addColorStop(.5,"#7b2ff7"),o.addColorStop(1,"#00d4ff"),i.fillStyle=o,i.fillRect(0,0,512,512),i.fillStyle="#ffffff",i.font="bold 48px Arial",i.textAlign="center",i.fillText("🎂",256,200),i.font="bold 36px Arial",i.fillText("HAPPY",256,280),i.fillText("BIRTHDAY",256,330),i.font="bold 40px Arial",i.fillText(n.name||"",256,400);const r=new Mc(t),s=new Wt({map:r,roughness:.3,metalness:.2,emissive:3346739,emissiveIntensity:.3}),a=new st(e,s);a.position.set(0,0,0),nt.add(a);const c=new Cn(9,16,16),l=new di({color:16723317,transparent:!0,opacity:.1,side:kt}),f=new st(c,l);nt.add(f);const p=new qn(16723317,3,50);nt.add(p),Vn.push({mesh:a,glow:f,ring:null,photoUrl:null,phase:0,position:a.position.clone(),isBirthdayPlanet:!0})}function CI(n){const e=new wi;e.position.set(-30,-5,-20),e.userData={interactive:!0,type:"cake",name:n.name};const t=new st(new bi(5,5,4,32),new Wt({color:16107216,roughness:.6}));t.position.y=2,e.add(t);const i=new st(new bi(3.5,3.5,3,32),new Wt({color:16758465,roughness:.6}));i.position.y=5.5,e.add(i);const o=new st(new bi(2.2,2.2,2.5,32),new Wt({color:16738740,roughness:.5}));o.position.y=8.25,e.add(o);for(let a=0;a<8;a++){const c=a/8*Math.PI*2,l=new st(new Cn(.3,8,8),new Wt({color:16777215,roughness:.3}));l.position.set(Math.cos(c)*5,3.8,Math.sin(c)*5),l.scale.y=1.5,e.add(l)}const r=[16723317,8073207,54527,16766720,16739125];for(let a=0;a<5;a++){const c=a/5*Math.PI*2,l=new st(new bi(.15,.15,1.5,8),new Wt({color:r[a]}));l.position.set(Math.cos(c)*1.5,10.2,Math.sin(c)*1.5),e.add(l);const f=new qn(16755200,1,5);f.position.set(Math.cos(c)*1.5,11.2,Math.sin(c)*1.5),e.add(f);const p=new st(new Cn(.2,8,8),new di({color:16768324}));p.position.copy(f.position),p.scale.y=1.5,e.add(p)}const s=new qn(16738740,2,25);s.position.set(-30,15,-20),nt.add(s),nt.add(e)}function wI(){[16723317,8073207,54527,16766720,16739125,3800852,16716947,9662683,52945,16729344,3329330,16738740].forEach((e,t)=>{const i=new wi,o=(Math.random()-.5)*80,r=15+Math.random()*30,s=(Math.random()-.5)*80;i.position.set(o,r,s);const a=new st(new Cn(1.2,16,16),new Wt({color:e,roughness:.3,metalness:.1}));a.scale.y=1.3,i.add(a);const c=new st(new Ac(.2,.4,8),new Wt({color:e}));c.position.y=-1.4,c.rotation.x=Math.PI,i.add(c);const l=new Ct().setFromPoints([new V(0,-1.6,0),new V(.1,-3.5,.1)]),f=new Tc({color:8947848,transparent:!0,opacity:.4});i.add(new Gp(l,f));const p=new qn(e,.3,8);i.add(p),i.userData={bobPhase:Math.random()*Math.PI*2,bobSpeed:.5+Math.random()*.5,baseY:r},nt.add(i)})}function bI(n){[{pos:[25,-3,-15],color:16723317,ribbonColor:16766720,message:`A special surprise for ${n.name}! 🎁`},{pos:[-15,-3,25],color:8073207,ribbonColor:54527,message:"Unwrap happiness! 🎉"},{pos:[35,-3,20],color:54527,ribbonColor:16723317,message:"Every moment is a gift! ✨"},{pos:[-35,-3,-10],color:16766720,ribbonColor:16739125,message:`Love and joy for you, ${n.name}! 💖`},{pos:[10,-3,-35],color:3800852,ribbonColor:8073207,message:"Best wishes forever! 🌟"}].forEach(t=>{const i=new wi;i.position.set(...t.pos),i.userData={interactive:!0,type:"gift",message:t.message};const o=new st(new kn(3,3,3),new Wt({color:t.color,roughness:.4,metalness:.1}));o.position.y=1.5,i.add(o);const r=new st(new kn(3.3,.5,3.3),new Wt({color:t.color,roughness:.3}));r.position.y=3.25,i.add(r);const s=new st(new kn(.3,3.1,3.1),new Wt({color:t.ribbonColor,roughness:.2,metalness:.3}));s.position.y=1.5,i.add(s);const a=new st(new kn(3.1,3.1,.3),new Wt({color:t.ribbonColor,roughness:.2,metalness:.3}));a.position.y=1.5,i.add(a);const c=new st(new wc(.6,.2,8,16),new Wt({color:t.ribbonColor}));c.position.y=3.5,c.rotation.x=Math.PI/2,i.add(c);const l=new qn(t.color,.5,10);l.position.y=3,i.add(l),nt.add(i)})}function II(n){[{text:`HAPPY BIRTHDAY
${n.name||"Friend"}!`,pos:[0,12,-50]},{text:`MAKE A WISH
⭐✨⭐`,pos:[40,10,0]},{text:`MEMORIES
ALL AROUND`,pos:[-40,10,15]}].forEach(t=>{const i=document.createElement("canvas");i.width=512,i.height=256;const o=i.getContext("2d");o.fillStyle="rgba(15,15,25,0.8)",o.fillRect(0,0,512,256),o.strokeStyle="#ff2d75",o.lineWidth=3,o.strokeRect(5,5,502,246),o.fillStyle="#ffffff",o.font="bold 36px Arial",o.textAlign="center",t.text.split(`
`).forEach((l,f)=>{o.fillText(l,256,110+f*50)});const s=new Mc(i),a=new st(new Ko(12,6),new di({map:s,transparent:!0,side:cn}));a.position.set(...t.pos),a.lookAt(0,a.position.y,0),nt.add(a);const c=new qn(16723317,1,15);c.position.set(...t.pos),nt.add(c)})}function RI(){const n=()=>{if(!nt)return;const t=(Math.random()-.5)*300,i=100+Math.random()*100,o=(Math.random()-.5)*300,r=new Cn(.3,8,8),s=new di({color:16777215}),a=new st(r,s);a.position.set(t,i,o),nt.add(a);const c=new qn(16777215,1,20);c.position.copy(a.position),nt.add(c);const l=(Math.random()-.5)*2,f=-1-Math.random(),p=(Math.random()-.5)*2;let h=1;const m=()=>{if(!nt||h<=0){nt&&(nt.remove(a),nt.remove(c)),r.dispose(),s.dispose();return}a.position.x+=l,a.position.y+=f,a.position.z+=p,c.position.copy(a.position),h-=.02,s.opacity=h,s.transparent=!0,c.intensity=h,requestAnimationFrame(m)};m()},e=setInterval(()=>{if(!nt){clearInterval(e);return}n()},3e3+Math.random()*2e3);qo.push(()=>clearInterval(e))}function PI(n){const{type:e,message:t,name:i}=n.userData;if(e==="cake")n.children.forEach(o=>{o.isPointLight&&(o.intensity=3,setTimeout(()=>{o.intensity=1},1500))}),uh(`🎂 Happy Birthday ${i||""}! Make a wish!`);else if(e==="gift"){const o=n.position.y;n.position.y+=2,setTimeout(()=>{n.position.y=o},300),uh(t)}}function uh(n){let e=document.getElementById("galaxy-popup");e||(e=document.createElement("div"),e.id="galaxy-popup",e.style.cssText=`
      position:fixed; bottom:100px; left:50%; transform:translateX(-50%);
      padding:16px 28px; background:rgba(15,15,25,0.9); backdrop-filter:blur(20px);
      border:1px solid rgba(255,45,117,0.3); border-radius:20px;
      color:#fff; font-size:1rem; font-weight:500; z-index:50;
      opacity:0; transition:opacity 0.4s ease; pointer-events:none;
      box-shadow:0 8px 32px rgba(0,0,0,0.4); text-align:center; max-width:400px;
    `,document.body.appendChild(e)),e.textContent=n,e.style.opacity="1",clearTimeout(e._timeout),e._timeout=setTimeout(()=>{e.style.opacity="0"},3e3)}function DI(){if(!Et)return;const n=200;Et.position.set(0,30,n);const e=2500,t=Date.now();function i(){const o=Date.now()-t,r=Math.min(o/e,1),s=1-Math.pow(1-r,3);Et.position.z=n-(n-80)*s,Et.position.y=30-10*s,r<1&&requestAnimationFrame(i)}i()}function NI(n){const e=document.getElementById("photo-modal"),t=document.getElementById("modal-img");!e||!t||(t.src=n,e.style.display="flex")}function em(){qo.forEach(n=>n()),qo=[],Vn=[],Wr&&(cancelAnimationFrame(Wr),Wr=null),an&&(an.dispose(),an=null),ln&&(ln.dispose(),ln=null),nt=null,Et=null,uo=null,Wl=null}function LI(){em()}const Un=document.getElementById("app");let ii=null,Ia=null;function Dc(){ii&&typeof ii=="function"?ii():ii&&typeof ii.destroy=="function"&&ii.destroy(),Ia==="galaxy"&&LI(),ii=null,Ia=null;const t=(window.location.hash||"#/").slice(1).split("?")[0];if(window.scrollTo(0,0),Un.classList.add("page-enter"),t==="/"||t==="")ii=UE(Un);else if(t==="/create")qE(Un);else if(t.startsWith("/preview/")){const i=t.split("/preview/")[1];ES(Un,i)}else if(t.match(/^\/galaxy\//)){const i=t.split("/galaxy/")[1];Ia="galaxy",yI(Un,i)}else if(t.match(/^\/birthday\/[^/]+\/surprise/)){const i=t.split("/birthday/")[1].split("/surprise")[0];nf(Un,i,!0)}else if(t.startsWith("/birthday/")){const i=t.split("/birthday/")[1];nf(Un,i,!1)}else Un.innerHTML=`
      <div style="min-height:100vh; display:flex; align-items:center; justify-content:center; text-align:center;">
        <div class="glass-card" style="max-width:400px;">
          <h1 style="font-size: 4rem; margin-bottom: 16px;">🎂</h1>
          <h2 style="margin-bottom: 12px;">Page Not Found</h2>
          <p style="color:var(--text-secondary); margin-bottom: 24px;">The page you're looking for doesn't exist.</p>
          <button class="btn btn-primary" onclick="window.location.hash='#/'">Go Home</button>
        </div>
      </div>
    `;setTimeout(()=>Un.classList.remove("page-enter"),500)}window.addEventListener("hashchange",Dc);window.addEventListener("DOMContentLoaded",Dc);Dc();
