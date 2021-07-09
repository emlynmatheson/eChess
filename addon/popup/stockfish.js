
var Stockfish = (function() {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  if (typeof __filename !== 'undefined') _scriptDir = _scriptDir || __filename;
  return (
function(Stockfish) {
  Stockfish = Stockfish || {};


function d(){k.buffer!=l&&n(k.buffer);return aa}function q(){k.buffer!=l&&n(k.buffer);return ba}function r(){k.buffer!=l&&n(k.buffer);return ca}function u(){k.buffer!=l&&n(k.buffer);return da}function ea(){k.buffer!=l&&n(k.buffer);return fa}null;var w;w||(w=typeof Stockfish !== 'undefined' ? Stockfish : {});var ha,ia;w.ready=new Promise(function(a,b){ha=a;ia=b});w.postCustomMessage=a=>{for(let b of A.xa)b.postMessage({cmd:"custom",userData:a})};
class ja{constructor(){this.Ha=null;this.Sa=[]}async get(){return 0<this.Sa.length?this.Sa.shift():await new Promise(a=>this.Ha=a)}put(a){this.Ha?(this.Ha(a),this.Ha=null):this.Sa.push(a)}}w.queue=new ja;w.onCustomMessage=a=>{w.queue.put(a)};w.postMessage=w.postCustomMessage;const B=[];w.addMessageListener=a=>{B.push(a)};w.removeMessageListener=a=>{a=B.indexOf(a);0<=a&&B.splice(a,1)};w.print=w.printErr=a=>{if(0===B.length)console.log(a);else for(let b of B)b(a)};w.terminate=()=>{A.Ya()};
var C={},D;for(D in w)w.hasOwnProperty(D)&&(C[D]=w[D]);var ka=[],la="./this.program";function ma(a,b){throw b;}var na=!1,E=!1,F=!1;na="object"===typeof window;E="function"===typeof importScripts;F="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;var G=w.ENVIRONMENT_IS_PTHREAD||!1;G&&(l=w.buffer);var H="";function oa(a){return w.locateFile?w.locateFile(a,H):H+a}var I,J,K,L;
if(F){H=E?require("path").dirname(H)+"/":__dirname+"/";I=function(a,b){K||(K=require("fs"));L||(L=require("path"));a=L.normalize(a);return K.readFileSync(a,b?null:"utf8")};J=function(a){a=I(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a};1<process.argv.length&&(la=process.argv[1].replace(/\\/g,"/"));ka=process.argv.slice(2);process.on("uncaughtException",function(a){if(!(a instanceof pa))throw a;});process.on("unhandledRejection",M);ma=function(a){process.exit(a)};w.inspect=function(){return"[Emscripten Module object]"};
var qa;try{qa=require("worker_threads")}catch(a){throw console.error('The "worker_threads" module is not supported in this node.js build - perhaps a newer version is needed?'),a;}global.Worker=qa.Worker}else if(na||E)E?H=self.location.href:"undefined"!==typeof document&&document.currentScript&&(H=document.currentScript.src),_scriptDir&&(H=_scriptDir),0!==H.indexOf("blob:")?H=H.substr(0,H.lastIndexOf("/")+1):H="",F?(I=function(a,b){K||(K=require("fs"));L||(L=require("path"));a=L.normalize(a);return K.readFileSync(a,
b?null:"utf8")},J=function(a){a=I(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a}):(I=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},E&&(J=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}));F&&"undefined"===typeof performance&&(global.performance=require("perf_hooks").performance);var ra=w.print||console.log.bind(console),N=w.printErr||console.warn.bind(console);
for(D in C)C.hasOwnProperty(D)&&(w[D]=C[D]);C=null;w.arguments&&(ka=w.arguments);w.thisProgram&&(la=w.thisProgram);w.quit&&(ma=w.quit);var sa,ta;w.wasmBinary&&(ta=w.wasmBinary);var noExitRuntime=w.noExitRuntime||!0;"object"!==typeof WebAssembly&&M("no native wasm support detected");var k,ua,O=!1;function assert(a,b){a||M("Assertion failed: "+b)}
function va(a,b,c){c=b+c;for(var e="";!(b>=c);){var h=a[b++];if(!h)break;if(h&128){var g=a[b++]&63;if(192==(h&224))e+=String.fromCharCode((h&31)<<6|g);else{var m=a[b++]&63;h=224==(h&240)?(h&15)<<12|g<<6|m:(h&7)<<18|g<<12|m<<6|a[b++]&63;65536>h?e+=String.fromCharCode(h):(h-=65536,e+=String.fromCharCode(55296|h>>10,56320|h&1023))}}else e+=String.fromCharCode(h)}return e}function P(a){return a?va(q(),a,void 0):""}
function wa(a,b,c,e){if(0<e){e=c+e-1;for(var h=0;h<a.length;++h){var g=a.charCodeAt(h);if(55296<=g&&57343>=g){var m=a.charCodeAt(++h);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=e)break;b[c++]=g}else{if(2047>=g){if(c+1>=e)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=e)break;b[c++]=224|g>>12}else{if(c+3>=e)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0}}
function xa(a){for(var b=0,c=0;c<a.length;++c){var e=a.charCodeAt(c);55296<=e&&57343>=e&&(e=65536+((e&1023)<<10)|a.charCodeAt(++c)&1023);127>=e?++b:b=2047>=e?b+2:65535>=e?b+3:b+4}return b}function ya(a){var b=xa(a)+1,c=za(b);wa(a,d(),c,b);return c}function Aa(a,b){d().set(a,b)}var l,aa,ba,ca,da,fa;
function n(a){l=a;w.HEAP8=aa=new Int8Array(a);w.HEAP16=new Int16Array(a);w.HEAP32=ca=new Int32Array(a);w.HEAPU8=ba=new Uint8Array(a);w.HEAPU16=new Uint16Array(a);w.HEAPU32=da=new Uint32Array(a);w.HEAPF32=new Float32Array(a);w.HEAPF64=fa=new Float64Array(a)}var Ba=w.INITIAL_MEMORY||134217728;
if(G)k=w.wasmMemory,l=w.buffer;else if(w.wasmMemory)k=w.wasmMemory;else if(k=new WebAssembly.Memory({initial:Ba/65536,maximum:32768,shared:!0}),!(k.buffer instanceof SharedArrayBuffer))throw N("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag"),F&&console.log("(on node you may need: --experimental-wasm-threads --experimental-wasm-bulk-memory and also use a recent version)"),
Error("bad memory");k&&(l=k.buffer);Ba=l.byteLength;n(l);var Ca=[],Da=[],Ea=[],Fa=[];function Ga(){var a=w.preRun.shift();Ca.unshift(a)}var R=0,Ha=null,Ia=null;w.preloadedImages={};w.preloadedAudios={};function M(a){if(w.onAbort)w.onAbort(a);G&&console.error("Pthread aborting at "+Error().stack);N(a);O=!0;a=new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");ia(a);throw a;}
function Ja(){var a=S;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var S="stockfish.wasm";Ja()||(S=oa(S));function Ka(){var a=S;try{if(a==S&&ta)return new Uint8Array(ta);if(J)return J(a);throw"both async and sync fetching of the wasm failed";}catch(b){M(b)}}
function La(){return ta||!na&&!E||"function"!==typeof fetch?Promise.resolve().then(function(){return Ka()}):fetch(S,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+S+"'";return a.arrayBuffer()}).catch(function(){return Ka()})}var Na={21050523:function(){throw"Canceled!";},21050541:function(a,b){setTimeout(function(){Ma(a,b)},0)}};
function Oa(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(w);else{var c=b.Ua;"number"===typeof c?void 0===b.Ca?Pa.call(null,c):Qa.apply(null,[c,b.Ca]):c(void 0===b.Ca?null:b.Ca)}}}
function Ra(a,b){if(0>=a||a>d().length||a&1||0>b)return-28;if(0==b)return 0;2147483647<=b&&(b=Infinity);var c=Atomics.load(r(),T>>2),e=0;if(c==a&&Atomics.compareExchange(r(),T>>2,c,0)==c&&(--b,e=1,0>=b))return 1;a=Atomics.notify(r(),a>>2,b);if(0<=a)return a+e;throw"Atomics.notify returned an unexpected value "+a;}w._emscripten_futex_wake=Ra;
function Sa(a){if(G)throw"Internal Error! cleanupThread() can only ever be called from main application thread!";if(!a)throw"Internal Error! Null pthread_ptr in cleanupThread!";var b=A.va[a];b&&(r()[a+12>>2]=0,A.Ka(b.worker))}
var A={ya:[],xa:[],Ra:[],Gb:function(){},gb:function(){for(var a=U(228),b=0;57>b;++b)u()[a/4+b]=0;r()[a+12>>2]=a;b=a+152;r()[b>>2]=b;var c=U(512);for(b=0;128>b;++b)u()[c/4+b]=0;Atomics.store(u(),a+100>>2,c);Atomics.store(u(),a+40>>2,a);Ta(a,!E,1);Ua(a)},hb:function(){A.receiveObjectTransfer=A.mb;A.threadInit=A.tb;A.threadCancel=A.rb;A.threadExit=A.sb;A.setExitStatus=A.pb},va:{},Za:[],nb:function(){for(;0<A.Za.length;)A.Za.pop()();G&&V()&&Va()},Xa:function(a,b){Atomics.store(u(),a+56>>2,1);Atomics.store(u(),
a+60>>2,0);A.nb();Atomics.store(u(),a+4>>2,b);Atomics.store(u(),a+0>>2,1);Ra(a+0,2147483647);Ta(0,0,0)},pb:function(){},sb:function(a){var b=V();b&&(A.Xa(b,a),G&&postMessage({cmd:"exit"}))},rb:function(){A.Xa(V(),-1);postMessage({cmd:"cancelDone"})},Ya:function(){for(var a in A.va){var b=A.va[a];b&&b.worker&&A.Ka(b.worker)}A.va={};for(a=0;a<A.ya.length;++a){var c=A.ya[a];c.terminate()}A.ya=[];for(a=0;a<A.xa.length;++a)c=A.xa[a],b=c.ua,A.Pa(b),c.terminate();A.xa=[]},Pa:function(a){if(a){if(a.wa){var b=
r()[a.wa+100>>2];r()[a.wa+100>>2]=0;W(b);W(a.wa)}a.wa=0;a.Oa&&a.za&&W(a.za);a.za=0;a.worker&&(a.worker.ua=null)}},Ka:function(a){A.ob(function(){delete A.va[a.ua.wa];A.ya.push(a);A.xa.splice(A.xa.indexOf(a),1);A.Pa(a.ua);a.ua=void 0})},ob:function(a){r()[Wa>>2]=0;try{a()}finally{r()[Wa>>2]=1}},mb:function(){},tb:function(){for(var a in A.Ra)A.Ra[a]()},jb:function(a,b){a.onmessage=function(c){var e=c.data,h=e.cmd;a.ua&&(A.bb=a.ua.wa);if(e.targetThread&&e.targetThread!=V()){var g=A.va[e.Mb];g?g.worker.postMessage(c.data,
e.transferList):console.error('Internal error! Worker sent a message "'+h+'" to target pthread '+e.targetThread+", but that thread no longer exists!")}else if("processQueuedMainThreadWork"===h)Xa();else if("spawnThread"===h)Ya(c.data);else if("cleanupThread"===h)Sa(e.thread);else if("killThread"===h){c=e.thread;if(G)throw"Internal Error! killThread() can only ever be called from main application thread!";if(!c)throw"Internal Error! Null pthread_ptr in killThread!";r()[c+12>>2]=0;c=A.va[c];c.worker.terminate();
A.Pa(c);A.xa.splice(A.xa.indexOf(c.worker),1);c.worker.ua=void 0}else if("cancelThread"===h){c=e.thread;if(G)throw"Internal Error! cancelThread() can only ever be called from main application thread!";if(!c)throw"Internal Error! Null pthread_ptr in cancelThread!";A.va[c].worker.postMessage({cmd:"cancel"})}else if("loaded"===h)a.loaded=!0,b&&b(a),a.Da&&(a.Da(),delete a.Da);else if("print"===h)ra("Thread "+e.threadId+": "+e.text);else if("printErr"===h)N("Thread "+e.threadId+": "+e.text);else if("alert"===
h)alert("Thread "+e.threadId+": "+e.text);else if("exit"===h)a.ua&&Atomics.load(u(),a.ua.wa+64>>2)&&A.Ka(a);else if("exitProcess"===h)try{Za(e.returnCode)}catch(m){if(m instanceof pa)return;throw m;}else"cancelDone"===h?A.Ka(a):"objectTransfer"!==h&&("setimmediate"===c.data.target?a.postMessage(c.data):N("worker sent an unknown command "+h));A.bb=void 0};a.onerror=function(c){N("pthread sent an error! "+c.filename+":"+c.lineno+": "+c.message)};F&&(a.on("message",function(c){a.onmessage({data:c})}),
a.on("error",function(c){a.onerror(c)}),a.on("exit",function(){}));a.postMessage({cmd:"load",urlOrBlob:w.mainScriptUrlOrBlob||_scriptDir,wasmMemory:k,wasmModule:ua})},$a:function(){var a=oa("stockfish.worker.js");A.ya.push(new Worker(a))},eb:function(){0==A.ya.length&&(A.$a(),A.jb(A.ya[0]));return A.ya.pop()},zb:function(a){for(a=performance.now()+a;performance.now()<a;);}};w.establishStackSpace=function(a,b){$a(a,b);ab(a)};w.invokeEntryPoint=function(a,b){return bb.apply(null,[a,b])};var cb=0;
function db(){return noExitRuntime||0<cb}w.keepRuntimeAlive=db;var eb;eb=F?function(){var a=process.hrtime();return 1E3*a[0]+a[1]/1E6}:G?function(){return performance.now()-w.__performance_now_clock_drift}:function(){return performance.now()};var fb={},gb=[null,[],[]],hb={};function ib(a,b,c){return G?X(2,1,a,b,c):0}function jb(a,b){if(G)return X(3,1,a,b)}function kb(a,b,c){return G?X(4,1,a,b,c):0}
function lb(a,b,c,e,h,g){G?b=X(5,1,a,b,c,e,h,g):(g<<=12,0!==(e&16)&&0!==a%16384?b=-28:0!==(e&32)?(a=mb(16384,b))?(nb(a,0,b),fb[a]={lb:a,ib:b,ab:!0,fd:h,Jb:c,flags:e,offset:g},b=a):b=-48:b=-52);return b}function ob(a,b){if(G)a=X(6,1,a,b);else if(-1===(a|0)||0===b)a=-28;else{var c=fb[a];c&&b===c.ib&&(fb[a]=null,c.ab&&W(c.lb));a=0}return a}function pb(a,b,c){if(G)return X(7,1,a,b,c)}function qb(a,b){if(G)return X(8,1,a,b)}var rb=[];
function sb(){F||E||(sa||(sa={}),sa["Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread"]||(sa["Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread"]=1,N("Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread")))}
function tb(a){if(G)return X(9,1,a);noExitRuntime=!1;cb=0;Za(a)}
function ub(a,b,c){if(0>=a||a>d().length||a&1)return-28;if(na){if(Atomics.load(r(),a>>2)!=b)return-6;var e=performance.now();c=e+c;for(Atomics.exchange(r(),T>>2,a);;){e=performance.now();if(e>c)return Atomics.exchange(r(),T>>2,0),-73;e=Atomics.exchange(r(),T>>2,0);if(0==e)break;Xa();if(Atomics.load(r(),a>>2)!=b)return-6;Atomics.exchange(r(),T>>2,a)}return 0}a=Atomics.wait(r(),a>>2,b,c);if("timed-out"===a)return-73;if("not-equal"===a)return-6;if("ok"===a)return 0;throw"Atomics.wait returned an unexpected value "+
a;}function X(a,b){for(var c=arguments.length-2,e=vb(),h=za(8*c),g=h>>3,m=0;m<c;m++){var v=arguments[2+m];ea()[g+m]=v}c=wb(a,c,h,b);ab(e);return c}var xb=[],yb=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function zb(a){a=2<a?P(a):a;return yb[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}
function Ab(a,b,c){var e=zb(a);if(!e)return-4;e.Ia&&(r()[e.Ia>>2]=b,r()[e.Ia+4>>2]=c);if(e.Wa||!e.Bb)e.Wa&&(e=e.Wa),a=!1,e.Ga&&e.Ga.Fa&&(a=e.Ga.Fa.getParameter(2978),a=0===a[0]&&0===a[1]&&a[2]===e.width&&a[3]===e.height),e.width=b,e.height=c,a&&e.Ga.Fa.viewport(0,0,b,c);else{if(e.Ia){e=r()[e.Ia+8>>2];a=a?P(a):"";var h=vb(),g=za(12),m=0;if(a){m=xa(a)+1;var v=U(m);wa(a,q(),v,m);m=v}r()[g>>2]=m;r()[g+4>>2]=b;r()[g+8>>2]=c;Bb(0,e,657457152,0,m,g);ab(h);return 1}return-4}return 0}
function Cb(a,b,c){return G?X(10,1,a,b,c):Ab(a,b,c)}function Db(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,e){b.vertexAttribDivisorANGLE(c,e)},a.drawArraysInstanced=function(c,e,h,g){b.drawArraysInstancedANGLE(c,e,h,g)},a.drawElementsInstanced=function(c,e,h,g,m){b.drawElementsInstancedANGLE(c,e,h,g,m)})}
function Eb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function Fb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,e){b.drawBuffersWEBGL(c,e)})}
function Gb(a,b){a.Va||(a.Va=a.getContext,a.getContext=function(e,h){h=a.Va(e,h);return"webgl"==e==h instanceof WebGLRenderingContext?h:null});var c=a.getContext("webgl",b);return c?Hb(c,b):0}function Hb(a,b){var c=U(8);r()[c+4>>2]=V();var e={Fb:c,attributes:b,version:b.kb,Fa:a};a.canvas&&(a.canvas.Ga=e);("undefined"===typeof b.Ta||b.Ta)&&Ib(e);return c}
function Ib(a){a||(a=Jb);if(!a.fb){a.fb=!0;var b=a.Fa;Db(b);Eb(b);Fb(b);b.Cb=b.getExtension("EXT_disjoint_timer_query");b.Ib=b.getExtension("WEBGL_multi_draw");(b.getSupportedExtensions()||[]).forEach(function(c){0>c.indexOf("lose_context")&&0>c.indexOf("debug")&&b.getExtension(c)})}}var Jb,Kb=["default","low-power","high-performance"],Lb={};
function Mb(){if(!Nb){var a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"===typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:la||"./this.program"},b;for(b in Lb)a[b]=Lb[b];var c=[];for(b in a)c.push(b+"="+a[b]);Nb=c}return Nb}var Nb;
function Ob(a,b){if(G)return X(11,1,a,b);var c=0;Mb().forEach(function(e,h){var g=b+c;h=r()[a+4*h>>2]=g;for(g=0;g<e.length;++g)d()[h++>>0]=e.charCodeAt(g);d()[h>>0]=0;c+=e.length+1});return 0}function Pb(a,b){if(G)return X(12,1,a,b);var c=Mb();r()[a>>2]=c.length;var e=0;c.forEach(function(h){e+=h.length+1});r()[b>>2]=e;return 0}function Qb(a){return G?X(13,1,a):0}function Rb(a,b){if(G)return X(14,1,a,b);a=1==a||2==a?2:M();d()[b>>0]=a;return 0}
function Vb(a,b,c,e){if(G)return X(15,1,a,b,c,e);a=hb.Eb(a);b=hb.Db(a,b,c);r()[e>>2]=b;return 0}function Wb(a,b,c,e,h){if(G)return X(16,1,a,b,c,e,h)}function Xb(a,b,c,e){if(G)return X(17,1,a,b,c,e);for(var h=0,g=0;g<c;g++){for(var m=r()[b+8*g>>2],v=r()[b+(8*g+4)>>2],z=0;z<v;z++){var x=q()[m+z],y=gb[a];0===x||10===x?((1===a?ra:N)(va(y,0)),y.length=0):y.push(x)}h+=v}r()[e>>2]=h;return 0}
function Ya(a){if(G)throw"Internal Error! spawnThread() can only ever be called from main application thread!";var b=A.eb();if(!b)return 6;if(void 0!==b.ua)throw"Internal error!";if(!a.Ja)throw"Internal error, no pthread ptr!";A.xa.push(b);for(var c=U(512),e=0;128>e;++e)r()[c+4*e>>2]=0;var h=a.za+a.Aa;e=A.va[a.Ja]={worker:b,za:a.za,Aa:a.Aa,Oa:a.Oa,wa:a.Ja};var g=e.wa>>2;Atomics.store(u(),g+16,a.detached);Atomics.store(u(),g+25,c);Atomics.store(u(),g+10,e.wa);Atomics.store(u(),g+20,a.Aa);Atomics.store(u(),
g+19,h);Atomics.store(u(),g+26,a.Aa);Atomics.store(u(),g+28,h);Atomics.store(u(),g+29,a.detached);c=Yb()+40;Atomics.store(u(),g+43,c);b.ua=e;var m={cmd:"run",start_routine:a.qb,arg:a.Ca,threadInfoStruct:a.Ja,stackBase:a.za,stackSize:a.Aa};b.Da=function(){m.time=performance.now();b.postMessage(m,a.yb)};b.loaded&&(b.Da(),delete b.Da);return 0}
function Zb(a,b){if(!a)return N("pthread_join attempted on a null thread pointer!"),71;if(G&&V()==a)return N("PThread "+a+" is attempting to join to itself!"),16;if(!G&&$b()==a)return N("Main thread "+a+" is attempting to join to itself!"),16;if(r()[a+12>>2]!==a)return N("pthread_join attempted on thread "+a+", which does not point to a valid thread, or does not exist anymore!"),71;if(Atomics.load(u(),a+64>>2))return N("Attempted to join thread "+a+", which was already detached!"),28;for(sb();;){var c=
Atomics.load(u(),a+0>>2);if(1==c)return c=Atomics.load(u(),a+4>>2),b&&(r()[b>>2]=c),Atomics.store(u(),a+64>>2,1),G?postMessage({cmd:"cleanupThread",thread:a}):Sa(a),0;if(G){var e=V();if(e&&!Atomics.load(u(),e+56>>2)&&2==Atomics.load(u(),e+0>>2))throw"Canceled!";}G||Xa();ub(a+0,c,G?100:1)}}function ac(a){return 0===a%4&&(0!==a%100||0===a%400)}function bc(a,b){for(var c=0,e=0;e<=b;c+=a[e++]);return c}var cc=[31,29,31,30,31,30,31,31,30,31,30,31],dc=[31,28,31,30,31,30,31,31,30,31,30,31];
function ec(a,b){for(a=new Date(a.getTime());0<b;){var c=a.getMonth(),e=(ac(a.getFullYear())?cc:dc)[c];if(b>e-a.getDate())b-=e-a.getDate()+1,a.setDate(1),11>c?a.setMonth(c+1):(a.setMonth(0),a.setFullYear(a.getFullYear()+1));else{a.setDate(a.getDate()+b);break}}return a}
function fc(a,b,c,e){function h(f,p,t){for(f="number"===typeof f?f.toString():f||"";f.length<p;)f=t[0]+f;return f}function g(f,p){return h(f,p,"0")}function m(f,p){function t(Sb){return 0>Sb?-1:0<Sb?1:0}var Q;0===(Q=t(f.getFullYear()-p.getFullYear()))&&0===(Q=t(f.getMonth()-p.getMonth()))&&(Q=t(f.getDate()-p.getDate()));return Q}function v(f){switch(f.getDay()){case 0:return new Date(f.getFullYear()-1,11,29);case 1:return f;case 2:return new Date(f.getFullYear(),0,3);case 3:return new Date(f.getFullYear(),
0,2);case 4:return new Date(f.getFullYear(),0,1);case 5:return new Date(f.getFullYear()-1,11,31);case 6:return new Date(f.getFullYear()-1,11,30)}}function z(f){f=ec(new Date(f.T+1900,0,1),f.Na);var p=new Date(f.getFullYear()+1,0,4),t=v(new Date(f.getFullYear(),0,4));p=v(p);return 0>=m(t,f)?0>=m(p,f)?f.getFullYear()+1:f.getFullYear():f.getFullYear()-1}var x=r()[e+40>>2];e={wb:r()[e>>2],vb:r()[e+4>>2],La:r()[e+8>>2],Ea:r()[e+12>>2],Ba:r()[e+16>>2],T:r()[e+20>>2],Ma:r()[e+24>>2],Na:r()[e+28>>2],Nb:r()[e+
32>>2],ub:r()[e+36>>2],xb:x?P(x):""};c=P(c);x={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var y in x)c=c.replace(new RegExp(y,"g"),x[y]);var Tb="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
Ub="January February March April May June July August September October November December".split(" ");x={"%a":function(f){return Tb[f.Ma].substring(0,3)},"%A":function(f){return Tb[f.Ma]},"%b":function(f){return Ub[f.Ba].substring(0,3)},"%B":function(f){return Ub[f.Ba]},"%C":function(f){return g((f.T+1900)/100|0,2)},"%d":function(f){return g(f.Ea,2)},"%e":function(f){return h(f.Ea,2," ")},"%g":function(f){return z(f).toString().substring(2)},"%G":function(f){return z(f)},"%H":function(f){return g(f.La,
2)},"%I":function(f){f=f.La;0==f?f=12:12<f&&(f-=12);return g(f,2)},"%j":function(f){return g(f.Ea+bc(ac(f.T+1900)?cc:dc,f.Ba-1),3)},"%m":function(f){return g(f.Ba+1,2)},"%M":function(f){return g(f.vb,2)},"%n":function(){return"\n"},"%p":function(f){return 0<=f.La&&12>f.La?"AM":"PM"},"%S":function(f){return g(f.wb,2)},"%t":function(){return"\t"},"%u":function(f){return f.Ma||7},"%U":function(f){var p=new Date(f.T+1900,0,1),t=0===p.getDay()?p:ec(p,7-p.getDay());f=new Date(f.T+1900,f.Ba,f.Ea);return 0>
m(t,f)?g(Math.ceil((31-t.getDate()+(bc(ac(f.getFullYear())?cc:dc,f.getMonth()-1)-31)+f.getDate())/7),2):0===m(t,p)?"01":"00"},"%V":function(f){var p=new Date(f.T+1901,0,4),t=v(new Date(f.T+1900,0,4));p=v(p);var Q=ec(new Date(f.T+1900,0,1),f.Na);return 0>m(Q,t)?"53":0>=m(p,Q)?"01":g(Math.ceil((t.getFullYear()<f.T+1900?f.Na+32-t.getDate():f.Na+1-t.getDate())/7),2)},"%w":function(f){return f.Ma},"%W":function(f){var p=new Date(f.T,0,1),t=1===p.getDay()?p:ec(p,0===p.getDay()?1:7-p.getDay()+1);f=new Date(f.T+
1900,f.Ba,f.Ea);return 0>m(t,f)?g(Math.ceil((31-t.getDate()+(bc(ac(f.getFullYear())?cc:dc,f.getMonth()-1)-31)+f.getDate())/7),2):0===m(t,p)?"01":"00"},"%y":function(f){return(f.T+1900).toString().substring(2)},"%Y":function(f){return f.T+1900},"%z":function(f){f=f.ub;var p=0<=f;f=Math.abs(f)/60;return(p?"+":"-")+String("0000"+(f/60*100+f%60)).slice(-4)},"%Z":function(f){return f.xb},"%%":function(){return"%"}};for(y in x)0<=c.indexOf(y)&&(c=c.replace(new RegExp(y,"g"),x[y](e)));y=gc(c);if(y.length>
b)return 0;Aa(y,a);return y.length-1}function hc(a){try{a()}catch(b){M(b)}}var Y=0,Z=null,ic=0,jc=[],kc={},lc={},mc=0,nc=null,oc=[],pc=[];function qc(a){var b={},c;for(c in a)(function(e){var h=a[e];b[e]="function"===typeof h?function(){jc.push(e);try{return h.apply(null,arguments)}finally{if(O)return;var g=jc.pop();assert(g===e);Z&&1===Y&&0===jc.length&&(Y=0,hc(w._asyncify_stop_unwind),"undefined"!==typeof Fibers&&Fibers.Ob(),nc&&(nc(),nc=null))}}:h})(c);return b}
function rc(){var a=U(4108),b=a+12;r()[a>>2]=b;r()[a+4>>2]=b+4096;b=jc[0];var c=kc[b];void 0===c&&(c=mc++,kc[b]=c,lc[c]=b);b=c;r()[a+8>>2]=b;return a}function sc(){var a=Z;a=r()[a+8>>2];return w.asm[lc[a]]}
function tc(a){if(!O){noExitRuntime=!0;if(0===Y){var b=!1,c=!1;a(function(e){if(!O&&(ic=e||0,b=!0,c)){Y=2;hc(function(){w._asyncify_start_rewind(Z)});"undefined"!==typeof Browser&&Browser.Qa.Ua&&Browser.Qa.resume();var h=sc()();Z||(e=oc,oc=[],e.forEach(function(g){g(h)}))}});c=!0;b||(Y=1,Z=rc(),hc(function(){w._asyncify_start_unwind(Z)}),"undefined"!==typeof Browser&&Browser.Qa.Ua&&Browser.Qa.pause())}else 2===Y?(Y=0,hc(w._asyncify_stop_rewind),W(Z),Z=null,pc.forEach(function(e){e()})):M("invalid state: "+
Y);return ic}}function uc(a){return tc(function(b){a().then(b)})}var vc=[null,function(a,b){if(G)return X(1,1,a,b)},ib,jb,kb,lb,ob,pb,qb,tb,Cb,Ob,Pb,Qb,Rb,Vb,Wb,Xb];function gc(a){var b=Array(xa(a)+1);wa(a,b,0,b.length);return b}
var zc={c:function(a,b,c,e){M("Assertion failed: "+P(a)+", at: "+[b?P(b):"unknown filename",c,e?P(e):"unknown function"])},x:function(a,b){wc(a,b)},j:ib,J:jb,o:kb,M:function(){return 0},L:lb,K:ob,k:pb,I:qb,C:function(a,b){if(a==b)postMessage({cmd:"processQueuedMainThreadWork"});else if(G)postMessage({targetThread:a,cmd:"processThreadQueue"});else{a=(a=A.va[a])&&a.worker;if(!a)return;a.postMessage({cmd:"processThreadQueue"})}return 1},b:function(){M()},v:function(a,b){if(0===a)a=Date.now();else if(1===
a||4===a)a=eb();else return r()[xc()>>2]=28,-1;r()[b>>2]=a/1E3|0;r()[b+4>>2]=a%1E3*1E6|0;return 0},n:function(a,b,c){rb.length=0;var e;for(c>>=2;e=q()[b++];)(e=105>e)&&c&1&&c++,rb.push(e?ea()[c++>>1]:r()[c]),++c;return Na[a].apply(null,rb)},w:sb,m:function(){},p:tb,e:ub,d:Ra,g:eb,t:function(a,b,c){q().copyWithin(a,b,b+c)},z:function(a,b,c){xb.length=b;c>>=3;for(var e=0;e<b;e++)xb[e]=ea()[c+e];return(0>a?Na[-a-1]:vc[a]).apply(null,xb)},u:function(a){var b=q().length;a>>>=0;if(a<=b||2147483648<a)return!1;
for(var c=1;4>=c;c*=2){var e=b*(1+.2/c);e=Math.min(e,a+100663296);e=Math.max(a,e);0<e%65536&&(e+=65536-e%65536);a:{try{k.grow(Math.min(2147483648,e)-l.byteLength+65535>>>16);n(k.buffer);var h=1;break a}catch(g){}h=void 0}if(h)return!0}return!1},A:function(a,b,c){return zb(a)?Ab(a,b,c):Cb(a,b,c)},l:function(){},y:function(){},r:function(){return uc(async()=>{{var a=await w.queue.get();var b=xa(a)+1;const e=U(b);var c=e;wa(a,q(),c,b);a=e}return a})},B:function(a,b){b>>=2;var c=r()[b+6];b={alpha:!!r()[b],
depth:!!r()[b+1],stencil:!!r()[b+2],antialias:!!r()[b+3],premultipliedAlpha:!!r()[b+4],preserveDrawingBuffer:!!r()[b+5],powerPreference:Kb[c],failIfMajorPerformanceCaveat:!!r()[b+7],kb:r()[b+8],Hb:r()[b+9],Ta:r()[b+10],cb:r()[b+11],Kb:r()[b+12],Lb:r()[b+13]};a=zb(a);return!a||b.cb?0:Gb(a,b)},F:Ob,G:Pb,f:function(a){Za(a)},h:Qb,H:Rb,O:Vb,q:Wb,N:Xb,s:function(){A.gb()},a:k||w.wasmMemory,i:function(a,b,c,e){if("undefined"===typeof SharedArrayBuffer)return N("Current environment does not support SharedArrayBuffer, pthreads are not available!"),
6;if(!a)return N("pthread_create called with a null thread pointer!"),28;var h=[];if(G&&0===h.length)return yc(687865856,a,b,c,e);var g=0,m=0;if(b&&-1!=b){var v=r()[b>>2];v+=81920;g=r()[b+8>>2];m=0!==r()[b+12>>2]}else v=2097152;(b=0==g)?g=mb(16,v):(g-=v,assert(0<g));for(var z=U(228),x=0;57>x;++x)u()[(z>>2)+x]=0;r()[a>>2]=z;r()[z+12>>2]=z;a=z+152;r()[a>>2]=a;c={za:g,Aa:v,Oa:b,detached:m,qb:c,Ja:z,Ca:e,yb:h};return G?(c.Ab="spawnThread",postMessage(c,h),0):Ya(c)},E:function(a,b){return Zb(a,b)},D:function(a,
b,c,e){return fc(a,b,c,e)}};
(function(){function a(g,m){g=g.exports;g=qc(g);w.asm=g;Da.unshift(w.asm.P);A.Ra.push(w.asm.S);ua=m;G||(R--,w.monitorRunDependencies&&w.monitorRunDependencies(R),0==R&&(null!==Ha&&(clearInterval(Ha),Ha=null),Ia&&(m=Ia,Ia=null,m())))}function b(g){a(g.instance,g.module)}function c(g){return La().then(function(m){return WebAssembly.instantiate(m,e)}).then(g,function(m){N("failed to asynchronously prepare wasm: "+m);M(m)})}var e={a:zc};G||(assert(!G,"addRunDependency cannot be used in a pthread worker"),R++,
w.monitorRunDependencies&&w.monitorRunDependencies(R));if(w.instantiateWasm)try{var h=w.instantiateWasm(e,a);return h=qc(h)}catch(g){return N("Module.instantiateWasm callback failed with error: "+g),!1}(function(){return ta||"function"!==typeof WebAssembly.instantiateStreaming||Ja()||"function"!==typeof fetch?c(b):fetch(S,{credentials:"same-origin"}).then(function(g){return WebAssembly.instantiateStreaming(g,e).then(b,function(m){N("wasm streaming compile failed: "+m);N("falling back to ArrayBuffer instantiation");
return c(b)})})})().catch(ia);return{}})();w.___wasm_call_ctors=function(){return(w.___wasm_call_ctors=w.asm.P).apply(null,arguments)};var wc=w._main=function(){return(wc=w._main=w.asm.Q).apply(null,arguments)},W=w._free=function(){return(W=w._free=w.asm.R).apply(null,arguments)};w._emscripten_tls_init=function(){return(w._emscripten_tls_init=w.asm.S).apply(null,arguments)};
var xc=w.___errno_location=function(){return(xc=w.___errno_location=w.asm.U).apply(null,arguments)},U=w._malloc=function(){return(U=w._malloc=w.asm.V).apply(null,arguments)},nb=w._memset=function(){return(nb=w._memset=w.asm.W).apply(null,arguments)},Yb=w._emscripten_get_global_libc=function(){return(Yb=w._emscripten_get_global_libc=w.asm.X).apply(null,arguments)},V=w._pthread_self=function(){return(V=w._pthread_self=w.asm.Y).apply(null,arguments)},Va=w.___pthread_tsd_run_dtors=function(){return(Va=
w.___pthread_tsd_run_dtors=w.asm.Z).apply(null,arguments)};w._emscripten_current_thread_process_queued_calls=function(){return(w._emscripten_current_thread_process_queued_calls=w.asm._).apply(null,arguments)};
var Ua=w._emscripten_register_main_browser_thread_id=function(){return(Ua=w._emscripten_register_main_browser_thread_id=w.asm.$).apply(null,arguments)},$b=w._emscripten_main_browser_thread_id=function(){return($b=w._emscripten_main_browser_thread_id=w.asm.aa).apply(null,arguments)},Ma=w.__emscripten_do_dispatch_to_thread=function(){return(Ma=w.__emscripten_do_dispatch_to_thread=w.asm.ba).apply(null,arguments)},yc=w._emscripten_sync_run_in_main_thread_4=function(){return(yc=w._emscripten_sync_run_in_main_thread_4=
w.asm.ca).apply(null,arguments)},Xa=w._emscripten_main_thread_process_queued_calls=function(){return(Xa=w._emscripten_main_thread_process_queued_calls=w.asm.da).apply(null,arguments)},wb=w._emscripten_run_in_main_runtime_thread_js=function(){return(wb=w._emscripten_run_in_main_runtime_thread_js=w.asm.ea).apply(null,arguments)},Bb=w.__emscripten_call_on_thread=function(){return(Bb=w.__emscripten_call_on_thread=w.asm.fa).apply(null,arguments)};
w._emscripten_proxy_main=function(){return(w._emscripten_proxy_main=w.asm.ga).apply(null,arguments)};
var Ta=w.__emscripten_thread_init=function(){return(Ta=w.__emscripten_thread_init=w.asm.ha).apply(null,arguments)},vb=w.stackSave=function(){return(vb=w.stackSave=w.asm.ia).apply(null,arguments)},ab=w.stackRestore=function(){return(ab=w.stackRestore=w.asm.ja).apply(null,arguments)},za=w.stackAlloc=function(){return(za=w.stackAlloc=w.asm.ka).apply(null,arguments)},$a=w._emscripten_stack_set_limits=function(){return($a=w._emscripten_stack_set_limits=w.asm.la).apply(null,arguments)},mb=w._memalign=function(){return(mb=
w._memalign=w.asm.ma).apply(null,arguments)},Qa=w.dynCall_vi=function(){return(Qa=w.dynCall_vi=w.asm.na).apply(null,arguments)},bb=w.dynCall_ii=function(){return(bb=w.dynCall_ii=w.asm.oa).apply(null,arguments)},Pa=w.dynCall_v=function(){return(Pa=w.dynCall_v=w.asm.pa).apply(null,arguments)};w._asyncify_start_unwind=function(){return(w._asyncify_start_unwind=w.asm.qa).apply(null,arguments)};w._asyncify_stop_unwind=function(){return(w._asyncify_stop_unwind=w.asm.ra).apply(null,arguments)};
w._asyncify_start_rewind=function(){return(w._asyncify_start_rewind=w.asm.sa).apply(null,arguments)};w._asyncify_stop_rewind=function(){return(w._asyncify_stop_rewind=w.asm.ta).apply(null,arguments)};var Wa=w.__emscripten_allow_main_runtime_queued_calls=21049756,T=w.__emscripten_main_thread_futex=22250884;w.PThread=A;w.PThread=A;w.wasmMemory=k;w.ExitStatus=pa;var Ac;function pa(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}
Ia=function Bc(){Ac||Cc();Ac||(Ia=Bc)};
function Cc(a){function b(){if(!Ac&&(Ac=!0,w.calledRun=!0,!O)){G||Oa(Da);G||Oa(Ea);ha(w);if(w.onRuntimeInitialized)w.onRuntimeInitialized();if(Dc){var c=a,e=w._emscripten_proxy_main;c=c||[];var h=c.length+1,g=za(4*(h+1));r()[g>>2]=ya(la);for(var m=1;m<h;m++)r()[(g>>2)+m]=ya(c[m-1]);r()[(g>>2)+h]=0;e(h,g)}if(!G){if(w.postRun)for("function"==typeof w.postRun&&(w.postRun=[w.postRun]);w.postRun.length;)c=w.postRun.shift(),Fa.unshift(c);Oa(Fa)}}}a=a||ka;if(!(0<R))if(G)ha(w),G||Oa(Da),postMessage({cmd:"loaded"});
else{if(!G){if(w.preRun)for("function"==typeof w.preRun&&(w.preRun=[w.preRun]);w.preRun.length;)Ga();Oa(Ca)}0<R||(w.setStatus?(w.setStatus("Running..."),setTimeout(function(){setTimeout(function(){w.setStatus("")},1);b()},1)):b())}}w.run=Cc;function Za(a){if(G)throw postMessage({cmd:"exitProcess",returnCode:a}),new pa(a);if(!db()){A.Ya();if(w.onExit)w.onExit(a);O=!0}ma(a,new pa(a))}if(w.preInit)for("function"==typeof w.preInit&&(w.preInit=[w.preInit]);0<w.preInit.length;)w.preInit.pop()();
var Dc=!0;w.noInitialRun&&(Dc=!1);G&&(noExitRuntime=!1,A.hb());Cc();


  return Stockfish.ready
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
  module.exports = Stockfish;
else if (typeof define === 'function' && define['amd'])
  define([], function() { return Stockfish; });
else if (typeof exports === 'object')
  exports["Stockfish"] = Stockfish;