/*
SPF 24 (v2.4.0)
(c) 2012-2017 Google Inc.
https://ajax.googleapis.com/ajax/libs/spf/2.4.0/LICENSE
*/
/**
 * https://github.com/google/tracing-framework
 * Copyright 2013 Google, Inc. All Rights Reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found at https://github.com/google/tracing-framework/blob/master/LICENSE.
 */
(function(){function aa(a){return a};function g(a,b,c){var d=Array.prototype.slice.call(arguments,2);return function(){var c=d.slice();c.push.apply(c,arguments);return a.apply(b,c)}}function ba(a,b){if(a){var c=Array.prototype.slice.call(arguments,1);try{return a.apply(null,c)}catch(d){return d}}}function m(a,b){if(document.createEvent){var c=document.createEvent("CustomEvent");c.initCustomEvent(a,!0,!0,b);return document.dispatchEvent(c)}return!0}
var n=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function ca(){};function p(a,b){return r[a]=b}var r=window._spf_state||{};window._spf_state=r;var da={"animation-class":"spf-animate","animation-duration":425,"cache-lifetime":6E5,"cache-max":50,"cache-unified":!1,"link-class":"spf-link","nolink-class":"spf-nolink","navigate-limit":20,"navigate-lifetime":864E5,"reload-identifier":null,"request-timeout":0,"url-identifier":"?spf=__type__"},u={};"config"in r||p("config",u);u=r.config;n();function ea(a,b){var c=b||document;return c.querySelectorAll?c.querySelectorAll(a):[]}function fa(a,b,c){for(;a;){if(b(a))return a;if(c&&a==c)break;a=a.parentNode}return null}function ga(a,b,c){b=b||document;var d=b.createElement("iframe");d.id=a||"";d.src='javascript:""';d.style.display="none";c&&(d.onload=g(c,null,d));b.body.appendChild(d);return d};function ha(a,b,c){var d=null,e=window.history.state;if(e){var d={},f;for(f in e)d[f]=e[f]}if(b)for(f in d=d||{},b)d[f]=b[f];ia(!0,a,d,c)}function ia(a,b,c,d){if(b||c){b=b||window.location.href;c=c||{};var e=n();p("history-timestamp",e);c["spf-timestamp"]=e;if(a)ja(c,b);else if(a=ka().contentWindow.history.pushState,"function"==typeof a)a.call(window.history,c,"",b);else throw Error("history.pushState is not a function.");p("history-url",b);d&&(d=r["history-callback"])&&d(b,c)}}
function la(a){var b=window.location.href;if(r["history-ignore-pop"])p("history-ignore-pop",!1);else if(a.state){a=a.state;var c=a["spf-timestamp"];b==r["history-url"]?(p("history-timestamp",c),ja(a,b)):(a["spf-back"]=c<parseInt(r["history-timestamp"],10),a["spf-current"]=r["history-url"],p("history-timestamp",c),p("history-url",b),(c=r["history-callback"])&&c(b,a))}}
function ja(a,b){var c=ka().contentWindow.history.replaceState;if("function"==typeof c)c.call(window.history,a,"",b);else throw Error("history.replaceState is not a function");}function ka(){var a=document.getElementById("history-iframe");a||(a=ga("history-iframe"));return a};function v(a,b){if(a.forEach)a.forEach(b,void 0);else for(var c=0,d=a.length;c<d;c++)c in a&&b.call(void 0,a[c],c,a)}function ma(a,b){if(a.every)return a.every(b,void 0);for(var c=0,d=a.length;c<d;c++)if(c in a&&!b.call(void 0,a[c],c,a))return!1;return!0}function na(a,b){if(a.some)return a.some(b,void 0);for(var c=0,d=a.length;c<d;c++)if(c in a&&b.call(void 0,a[c],c,a))return!0;return!1}
function oa(a,b){if(a.filter)return a.filter(b,void 0);var c=[];v(a,function(a,e,f){b.call(void 0,a,e,f)&&c.push(a)});return c}function pa(a,b){if(a.map)return a.map(b,void 0);var c=[];c.length=a.length;v(a,function(a,e,f){c[e]=b.call(void 0,a,e,f)});return c}function x(a){return"[object Array]"==Object.prototype.toString.call(a)?a:[a]};function qa(a){var b=y();a in b&&delete b[a]}function ra(){var a=y(),b;for(b in a)sa(a[b])||delete a[b];a=y();b=parseInt(u["cache-max"],10);b=isNaN(b)?Infinity:b;b=Object.keys(a).length-b;if(!(0>=b))for(var c=0;c<b;c++){var d=Infinity,e,f;for(f in a)a[f].count<d&&(e=f,d=a[f].count);delete a[e]}}function sa(a){if(!(a&&"data"in a))return!1;var b=a.life,b=isNaN(b)?Infinity:b;a=a.time;return n()-a<b}function ta(a){var b=parseInt(r["cache-counter"],10)||0;b++;p("cache-counter",b);a.count=b}
function y(a){return!a&&"cache-storage"in r?r["cache-storage"]:p("cache-storage",a||{})};function ua(a){return a.classList?a.classList:a.className&&a.className.match(/\S+/g)||[]}function va(a,b){if(b){if(a.classList)return a.classList.contains(b);var c=ua(a);return na(c,function(a){return a==b})}return!1}function z(a,b){b&&(a.classList?a.classList.add(b):va(a,b)||(a.className+=" "+b))}function A(a,b){if(b)if(a.classList)a.classList.remove(b);else{var c=ua(a),c=oa(c,function(a){return a!=b});a.className=c.join(" ")}};function wa(a){var b=document.body;b.dataset?b.dataset.spfName=a:b.setAttribute("data-"+"spfName".replace(/([A-Z])/g,"-$1").toLowerCase(),a)};function xa(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}function ya(a){return"[object String]"==Object.prototype.toString.call(a)}var za=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^\s+|\s+$/g,"")};function B(a,b){var c=a.split(b),d=1==c.length;return[c[0],d?"":b,d?"":c.slice(1).join(b)]};var Aa=!!this.wtf&&2==this.wtf.trace.API_VERSION,Ba=Aa?this.wtf.trace.instrument:aa;function Ca(a){return a}var C=!window._spf_tracing_runtime_disabled&&Aa?Ba:Ca;function Da(a){var b;b=window._spf_state=window._spf_state||{};var c=parseInt(b.uid,10)||0;c++;b=b.uid=c;Ea[b]=a;Fa?window.postMessage(Ga+b,"*"):window.setTimeout(g(Ha,null,b),0)}function Ia(a){a.data&&ya(a.data)&&0==a.data.lastIndexOf(Ga,0)&&Ha(a.data.substring(Ga.length))}function Ha(a){var b=Ea[a];b&&(delete Ea[a],b())}function Ja(a){window.addEventListener?window.addEventListener("message",a,!1):window.attachEvent&&window.attachEvent("onmessage",a)}
function Ka(a){window.removeEventListener?window.removeEventListener("message",a,!1):window.detachEvent&&window.detachEvent("onmessage",a)}var Fa=function(){function a(){b=!1}if(!window.postMessage)return!1;var b=!0;Ja(a);window.postMessage("","*");Ka(a);return b}(),Ga="spf:",Ea={};"async-defers"in r||p("async-defers",Ea);Ea=r["async-defers"];Fa&&("async-listener"in r&&Ka(r["async-listener"]),Ja(Ia),p("async-listener",Ia));Da=C(Da,"spf.async.defer");function La(a,b){a&&b&&(a in D||(D[a]=[]),D[a].push(b))}function Ma(a,b){a in D&&b&&ma(D[a],function(a,d,e){return a==b?(e[d]=null,!1):!0})}function Na(a){a in D&&v(D[a],function(a,c,d){d[c]=null;a&&a()})}var D={};"ps-s"in r||p("ps-s",D);D=r["ps-s"];function E(a,b,c){var d=F[a];return a&&b?(d||(d=F[a]=Oa()),a=Pa(b,c||0),d.items.push(a)):d&&d.items.length||0}function G(a,b){var c=F[a];if(c){var d=!!c.j||!!c.i;0<c.o&&(b||!d)&&Qa(a,b)}}function H(a){(a=F[a])&&a.o--}function I(a,b){var c=F[a];c&&(c.o++,G(a,b))}function Ra(a){var b=F[a];b&&(Sa(b),delete F[a])}function Ta(a,b){var c=a||"",d;for(d in F)b!=d&&0==d.lastIndexOf(c,0)&&Ra(d)}function Ua(a){var b=parseInt(r.uid,10)||0;b++;return a["spf-key"]||(a["spf-key"]=""+p("uid",b))}
function Qa(a,b){var c=F[a];if(c&&(Sa(c),0<c.o&&c.items.length)){var d=c.items[0];if(d){var e=g(function(a,b){b();a()},null,g(Qa,null,a,b));b?(c.items.shift(),e(d.t)):Va(c,d,e)}}}function Va(a,b,c){b.p?(c=g(c,null,ca),a.i=setTimeout(c,b.p),b.p=0):(a.items.shift(),c=g(c,null,b.t),(b=(b=u["advanced-task-scheduler"])&&b.addTask)?a.j=b(c):a.i=setTimeout(c,0))}function Sa(a){if(a.j){var b=u["advanced-task-scheduler"];(b=b&&b.cancelTask)&&b(a.j);a.j=0}a.i&&(clearTimeout(a.i),a.i=0)}
function Oa(){return{items:[],j:0,i:0,o:1}}function Pa(a,b){return{t:a,p:b}}var F={},E=C(E,"spf.tasks.add"),G=C(G,"spf.tasks.run"),H=C(H,"spf.tasks.suspend"),I=C(I,"spf.tasks.resume"),Ra=C(Ra,"spf.tasks.cancel"),Ta=C(Ta,"spf.tasks.cancelAllExcept"),Ua=C(Ua,"spf.tasks.key"),Qa=C(Qa,"spf.tasks.do_"),Oa=C(Oa,"spf.tasks.createQueue_"),Pa=C(Pa,"spf.tasks.createTask_");function Wa(a){var b=document.createElement("a");b.href=a;b.href=b.href;a={href:b.href,protocol:b.protocol,host:b.host,hostname:b.hostname,port:b.port,pathname:b.pathname,search:b.search,hash:b.hash,L:b.L,K:b.K};a.origin=a.protocol+"//"+a.host;a.pathname&&"/"==a.pathname[0]||(a.pathname="/"+a.pathname);return a}function K(a,b){var c=Wa(a);return b?c.href:B(c.href,"#")[0]}
function Xa(a,b){var c=B(a,"#");a=c[0];v(b,function(b){a=a.replace(new RegExp("([?&])"+b+"(?:=[^&]*)?(?:(?=[&])|$)","g"),function(a,b){return"?"==b?b:""})});xa(a,"?")&&(a=a.slice(0,-1));return a+c[1]+c[2]}function Ya(a){var b=u["advanced-persistent-parameters"]||"",c=B(a,"#");a=c[0];var d=-1!=a.indexOf("?")?"&":"?";return a+(b?d+b:"")+c[1]+c[2]};var $a;function ab(a,b,c,d){var e=a==L;b=N(a,b);var f=c||"^"+b,l=O(a,f),h;c&&(h=P(a,c))&&b!=h&&(m(e?"spfjsbeforeunload":"spfcssbeforeunload",{name:c,url:h}),bb(a,c,h),La(l,g(cb,null,a,c,h)));e=O(a,b);if((e=Q[e])&&f!=e){db(a,e);var k=O(a,b);delete Q[k];(k=O(a,e))&&l&&k in D&&(D[l]=(D[l]||[]).concat(D[k]),delete D[k])}k=O(a,b);Q[k]=f;eb(a,f,b);La(l,d);d=g(fb,null,a);R(a,b)?(e&&f!=e&&(a=gb(a,b))&&a.setAttribute("name",c||""),d()):(a=hb(a,b,d,void 0,void 0,h))&&c&&a.setAttribute("name",c)}
function ib(a,b){var c=P(a,b);bb(a,b,c);cb(a,b,c)}function bb(a,b,c){db(a,b);c&&(c=O(a,c),delete Q[c]);a=O(a,b);delete D[a]}function cb(a,b,c){var d=a==L;c&&(m(d?"spfjsunload":"spfcssunload",{name:b,url:c}),jb(a,c))}function fb(a){var b=O(a,""),c;for(c in D)0==c.indexOf(b)&&ma(c.substring(b.length).split("|"),g(kb,null,a))&&Na(c)}
function hb(a,b,c,d,e,f){function l(){R(a,b,e)&&lb(mb,a,b,e);h&&q&&q.parentNode&&k==document&&q.parentNode.removeChild(q);c&&setTimeout(c,0);return null}var h=a==L;b=N(a,b);lb(nb,a,b,e);var k=d||document,q=k.createElement(h?"script":"link");if(!b)return l();d=S(b);q.className=O(a,d);"onload"in q?q.onerror=q.onload=l:q.onreadystatechange=function(){/^c|loade/.test(q.readyState)&&l()};d=k.getElementsByTagName("head")[0]||k.body;h?(q.async=!0,q.src=b,d.insertBefore(q,d.firstChild)):(q.rel="stylesheet",
q.href=b,(f=f?gb(a,f,d):null)?d.insertBefore(q,f):d.appendChild(q));return q}function jb(a,b,c){b=N(a,b);(c=gb(a,b,c))&&c.parentNode&&c.parentNode.removeChild(c);ob(a,b)}function gb(a,b,c){b=S(b);a="."+O(a,b);return ea(a,c)[0]}function pb(a){var b=a==L,c=[];v(ea(b?"script[src]":'link[rel~="stylesheet"]'),function(d){var e=b?d.src:d.href,e=N(a,e);if(!R(a,e)){lb(mb,a,e);var f=S(e),f=O(a,f);z(d,f);if(f=d.getAttribute("name")){var l=O(a,e);Q[l]=f;eb(a,f,e)}c.push(d)}});return c}
function qb(a,b,c){if(b&&(b=N(a,b),c||!R(a,b)))if(c&&a==rb)sb(b);else{var d=S(b),e=O(a,d),f=O(a,"prefetch"),d=document.getElementById(f);if(!d)d=ga(f,null,function(a){a.title=f;G(f,!0)});else if(!c&&d.contentWindow.document.getElementById(e))return;a=g(tb,null,d,a,b,e,f);d.title?a():E(f,a)}}
function tb(a,b,c,d,e){var f=b==L,l=b==T;a=a.contentWindow.document;var h=a.getElementById(d);h&&h.parentNode.removeChild(h);f?(h=a.createElement("object"),ub?a.createElement("script").src=c:h.data=c,h.id=d,a.body.appendChild(h)):l?(h=hb(b,c,null,a,e),h.id=d):(h=a.createElement("img"),ub&&(c=c+"#"+n()),h.src=c,h.id=d,a.body.appendChild(h))}function sb(a){var b=new Image;ub&&(a=a+"#"+n());b.src=a}
function vb(a,b,c){for(var d=a==L,e=P(a,c),f=b.replace(/\s/g,""),f=f||"",l=0,h=0,k=f.length;h<k;++h)l=31*l+f.charCodeAt(h),l%=4294967296;f="hash-"+l;eb(a,c,f);!wb(a,f)&&(b=xb(a,b))&&(lb(mb,a,f),b&&!d&&(d=S(f),d=O(a,d),b.className=d,b.setAttribute("name",c)),(e=e&&e[0])&&jb(a,e))}
function xb(a,b){b=za(b);if(!b)return null;var c=document.getElementsByTagName("head")[0]||document.body,d;a==L?(d=document.createElement("script"),d.text=b,c.appendChild(d),c.removeChild(d)):(d=document.createElement("style"),c.appendChild(d),"styleSheet"in d?d.styleSheet.cssText=b:d.appendChild(document.createTextNode(b)));return d}function yb(a,b){p("rsrc-p-"+a,b)}
function N(a,b){var c="rsrc-p-"+a;if(b){var d=b.indexOf("//");if(0>d){if(0==b.lastIndexOf("hash-",0))return b;c=r[c]||"";if(ya(c))b=c+b;else for(var e in c)b=b.replace(e,c[e]);a!=rb&&(b=0>b.indexOf("."+a)?b+"."+a:b);b=K(b)}else 0==d&&(b=K(b))}return b}function O(a,b,c){b+=c?"-"+c:"";c=5381;for(var d=b.length;d;)c=33*c^b.charCodeAt(--d);return a+"-"+(c>>>0).toString(16)}function S(a){return a?String(a).replace(/[^\w]/g,""):""}function lb(a,b,c,d){b=O(b,c,d);zb[b]=a}
function R(a,b,c){a=O(a,b,c);return zb[a]}function ob(a,b){var c=O(a,b);delete zb[c]}function wb(a,b){var c=R(a,b);return""==b||c==mb}function eb(a,b,c){a=O(a,b);Ab[a]=c}function P(a,b){var c=O(a,b);return Ab[c]}function db(a,b){var c=O(a,b);delete Ab[c]}function kb(a,b){var c=P(a,b);return void 0!=c&&wb(a,c)}var zb={},Q={},Ab={},ub=-1!=navigator.userAgent.indexOf(" Trident/"),nb=1,mb=2,T="css",rb="img",L="js";"rsrc-s"in r||p("rsrc-s",zb);zb=r["rsrc-s"];"rsrc-n"in r||p("rsrc-n",Q);Q=r["rsrc-n"];
"rsrc-u"in r||p("rsrc-u",Ab);Ab=r["rsrc-u"];ab=C(ab,"spf.net.resource.load");ib=C(ib,"spf.net.resource.unload");$a=C($a,"spf.net.resource.unload_");fb=C(fb,"spf.net.resource.check");hb=C(hb,"spf.net.resource.create");jb=C(jb,"spf.net.resource.destroy");pb=C(pb,"spf.net.resource.discover");qb=C(qb,"spf.net.resource.prefetch");tb=C(tb,"spf.net.resource.prefetch_");vb=C(vb,"spf.net.resource.eval");xb=C(xb,"spf.net.resource.exec");yb=C(yb,"spf.net.resource.path");N=C(N,"spf.net.resource.canonicalize");
O=C(O,"spf.net.resource.key");S=C(S,"spf.net.resource.label");lb=C(lb,"spf.net.resource.status.set");R=C(R,"spf.net.resource.status.get");ob=C(ob,"spf.net.resource.status.clear");wb=C(wb,"spf.net.resource.status.loaded");eb=C(eb,"spf.net.resource.url.set");P=C(P,"spf.net.resource.url.get");db=C(db,"spf.net.resource.url.clear");kb=C(kb,"spf.net.resource.url.loaded");function Bb(a){a=x(a);v(a,function(a){qb(rb,a,!0)})}Bb=C(Bb,"spf.net.connect.preconnect");function Cb(a,b,c){ab(L,a,b,c)}function Db(a){ib(L,a)}function Eb(){pb(L)}function Fb(a,b){hb(L,a,b)}function Gb(a){a=x(a);v(a,function(a){qb(L,a)})}function Hb(a,b,c){a=x(a);a=oa(a,function(a){return!!a});var d=[];v(a,function(a){void 0==P(L,a)&&d.push(a)});var e=!d.length;if(b){var f=ma(a,g(kb,null,L));e&&f?b():(a=O(L,a.sort().join("|")),La(a,b))}c&&!e&&c(d)}function Ib(a){eb(L,a,"");fb(L)}function Jb(a,b){a=x(a);var c=O(L,a.sort().join("|"));Ma(c,b)}
function Kb(a,b){a=x(a);v(a,function(a){if(a){var b=Lb[a]||a,b=N(L,b),e=P(L,a);e&&b!=e&&Mb(a)}});Hb(a,b,Nb)}function Nb(a){v(a,function(a){function c(){Cb(e,a)}var d=Ob[a],e=Lb[a]||a;d?Kb(d,c):c()})}function Mb(a){a=x(a);v(a,function(a){var c=[],d;for(d in Ob){var e=Ob[d],e=x(e);v(e,function(e){e==a&&c.push(d)})}v(c,function(a){Mb(a)});Db(a)})}function Pb(a,b){vb(L,a,b)}function Qb(a){xb(L,a)}function Rb(a,b){if(a){for(var c in a)Ob[c]=a[c];if(b)for(c in b)Lb[c]=b[c]}}function Sb(a){yb(L,a)}
var Ob={};"js-d"in r||p("js-d",Ob);var Ob=r["js-d"],Lb={};"js-u"in r||p("js-u",Lb);Lb=r["js-u"];Cb=C(Cb,"spf.net.script.load");Db=C(Db,"spf.net.script.unload");Eb=C(Eb,"spf.net.script.discover");Fb=C(Fb,"spf.net.script.get");Gb=C(Gb,"spf.net.script.prefetch");Hb=C(Hb,"spf.net.script.ready");Ib=C(Ib,"spf.net.script.done");Jb=C(Jb,"spf.net.script.ignore");Kb=C(Kb,"spf.net.script.require");Nb=C(Nb,"spf.net.script.require_");Mb=C(Mb,"spf.net.script.unrequire");Pb=C(Pb,"spf.net.script.eval");Rb=C(Rb,"spf.net.script.declare");
Sb=C(Sb,"spf.net.script.path");function Tb(a,b,c){ab(T,a,b,c)}function Ub(a){ib(T,a)}function Wb(){pb(T)}function Xb(a,b){hb(T,a,b)}function Yb(a){a=x(a);v(a,function(a){qb(T,a)})}function Zb(a,b){vb(T,a,b)}function $b(a){yb(T,a)}Tb=C(Tb,"spf.net.style.load");Ub=C(Ub,"spf.net.style.unload");Wb=C(Wb,"spf.net.style.discover");Xb=C(Xb,"spf.net.style.get");Yb=C(Yb,"spf.net.style.prefetch");Zb=C(Zb,"spf.net.style.eval");$b=C($b,"spf.net.style.path");function ac(a,b,c){if(b){b=[];var d,e=0;c&&(a+="\r\n");var f=a.indexOf(bc,e);for(-1<f&&(e=f+bc.length);-1<(f=a.indexOf(cc,e));)d=za(a.substring(e,f)),e=f+cc.length,d&&b.push(JSON.parse(d));f=a.indexOf(dc,e);-1<f&&(d=za(a.substring(e,f)),e=f+dc.length,d&&b.push(JSON.parse(d)));d="";a.length>e&&(d=a.substring(e),c&&xa(d,"\r\n")&&(d=d.substring(0,d.length-2)));b=ec(b);return{n:b,c:d}}a=JSON.parse(a);b=ec(x(a));return{n:b,c:""}}
function U(a,b,c,d){var e=c&&0==c.type.lastIndexOf("navigate",0),f=c&&c.reverse,l=c&&!!c.position,h=c&&c.f,k=b.name||"",q="process "+K(a),t=!u["experimental-process-async"],w;w=0;b.timing||(b.timing={});b.title&&(document.title=b.title);e&&b.url&&K(b.url)!=K(window.location.href)&&ha(b.url+window.location.hash);b.head&&(w=g(function(a,b){var c=V(a);fc(c);gc(c);H(q);hc(c,function(){b.spfProcessHead=n();I(q,t)})},null,b.head,b.timing),w=E(q,w));b.attr&&(w=g(function(a,b){for(var c in a){var d=document.getElementById(c);
if(d){var e=a[c],f=void 0;for(f in e){var h=e[f];"class"==f?d.className=h:"style"==f?d.style.cssText=h:(d.setAttribute(f,h),"value"==f&&(d[f]=h))}}}b.spfProcessAttr=n()},null,b.attr,b.timing),w=E(q,w));var J=b.body||{},Bd=w,Vb;for(Vb in J)w=g(function(a,b){var d=document.getElementById(a);if(d){!e||l||h||(p("nav-scroll-position",null),p("nav-scroll-url",null),window.scroll(0,0),h=!0,c&&(c.f=!0));var w=V(b);gc(w);var J=function(){H(q);hc(w,function(){I(q,t)})},Za=u["animation-class"];ic&&va(d,Za)?
(d=new jc(d,w.html,Za,k,!!f),H(q),G(d.key,!0),E(d.key,g(kc,null,d),0),E(d.key,g(lc,null,d),17),E(d.key,g(mc,null,d),d.duration),E(d.key,g(function(){J();I(q,t)},null),0),G(d.key)):(Za=u["experimental-html-handler"])?(H(q),Za(w.html,d,function(){J();I(q,t)})):(d.innerHTML=w.html,J())}},null,Vb,J[Vb],b.timing),w=E(q,w);J=w-Bd;b.foot?(w=g(function(a,b,c){c&&(b.spfProcessBody=n());a=V(a);gc(a);H(q);hc(a,function(){b.spfProcessFoot=n();I(q,t)})},null,b.foot,b.timing,J),w=E(q,w)):J&&(w=g(function(a){a.spfProcessBody=
n()},null,b.timing),w=E(q,w));d&&(w=E(q,g(d,null,a,b)));G(q,t)}function nc(a,b,c,d){c="preprocess "+K(a);var e;b.head&&(e=g(function(a){a=V(a);oc(a);pc(a);qc(a)},null,b.head),E(c,e));var f=b.body||{},l;for(l in f)f[l]&&(e=g(function(a,b){var c=V(b);pc(c);qc(c)},null,l,f[l]),E(c,e));b.foot&&(e=g(function(a){a=V(a);pc(a);qc(a)},null,b.foot),E(c,e));d&&E(c,g(d,null,a,b));G(c)}
function kc(a){z(a.element,a.k);z(a.element,a.u);z(a.element,a.G);z(a.element,a.C);z(a.element,a.D);a.h=document.createElement("div");a.h.className=a.J;var b=a.element,c=a.h;if(c){for(var d;d=b.firstChild;)c.appendChild(d);b.appendChild(c)}a.g=document.createElement("div");a.g.className=a.I;a.g.innerHTML=a.H;a.reverse?(b=a.h,b.parentNode.insertBefore(a.g,b)):(b=a.h,b.parentNode.insertBefore(a.g,b.nextSibling))}function lc(a){A(a.element,a.C);A(a.element,a.D);z(a.element,a.r);z(a.element,a.s)}
function mc(a){a.element.removeChild(a.h);var b=a.g,c,d=b.parentNode;if(d&&11!=d.nodeType)if(b.removeNode)b.removeNode(!1);else{for(;c=b.firstChild;)d.insertBefore(c,b);d.removeChild(b)}A(a.element,a.r);A(a.element,a.s);A(a.element,a.u);A(a.element,a.G);A(a.element,a.k)}function ec(a){v(x(a),function(a){if(a){a.head&&(a.head=V(a.head));if(a.body)for(var c in a.body)a.body[c]=V(a.body[c]);a.foot&&(a.foot=V(a.foot))}});return a}
function V(a){var b=new rc;if(!a)return b;if(!ya(a))return a.scripts&&v(a.scripts,function(a){b.scripts.push({url:a.url||"",text:a.text||"",name:a.name||"",async:a.async||!1})}),a.styles&&v(a.styles,function(a){b.styles.push({url:a.url||"",text:a.text||"",name:a.name||""})}),a.links&&v(a.links,function(a){"spf-preconnect"==a.rel&&b.links.push({url:a.url||"",rel:a.rel||""})}),b.html=a.html||"",b;a=a.replace(sc,function(a,d,e,f){if("script"==d){d=(d=e.match(tc))?d[1]:"";var l=e.match(uc),l=l?l[1]:"",
h=vc.test(e);e=wc.exec(e);return(e=!e||-1!=e[1].indexOf("/javascript")||-1!=e[1].indexOf("/x-javascript")||-1!=e[1].indexOf("/ecmascript"))?(b.scripts.push({url:l,text:f,name:d,async:h}),""):a}return"style"==d&&(d=(d=e.match(tc))?d[1]:"",e=wc.exec(e),e=!e||-1!=e[1].indexOf("text/css"))?(b.styles.push({url:"",text:f,name:d}),""):a});a=a.replace(xc,function(a,d){var e=d.match(yc),e=e?e[1]:"";if("stylesheet"==e){var e=(e=d.match(tc))?e[1]:"",f=d.match(zc),f=f?f[1]:"";b.styles.push({url:f,text:"",name:e});
return""}return"spf-preconnect"==e?(f=(f=d.match(zc))?f[1]:"",b.links.push({url:f,rel:e}),""):a});b.html=a;return b}function hc(a,b){if(0>=a.scripts.length)b&&b();else{var c=-1,d=function(){c++;if(c<a.scripts.length){var e=a.scripts[c],f=function(){};e.url?f=e.name?g(Cb,null,e.url,e.name):g(Fb,null,e.url):e.text&&(f=e.name?g(Pb,null,e.text,e.name):g(Qb,null,e.text));e.url&&!e.async?f(d):(f(),d())}else b&&b()};d()}}
function qc(a){0>=a.scripts.length||(a=pa(a.scripts,function(a){return a.url}),Gb(a))}function gc(a){0>=a.styles.length||v(a.styles,function(a){a.url?a.name?Tb(a.url,a.name):Xb(a.url):a.text&&(a.name?Zb(a.text,a.name):xb(T,a.text))})}function pc(a){0>=a.styles.length||(a=pa(a.styles,function(a){return a.url}),Yb(a))}function fc(a){oc(a)}function oc(a){0>=a.links.length||(a=pa(a.links,function(a){return"spf-preconnect"==a.rel?a.url:""}),Bb(a))}
function jc(a,b,c,d,e){var f=parseInt(u["animation-duration"],10);this.element=a;this.H=b;this.duration=f;this.reverse=e;b=document.body;b=(b.dataset?b.dataset.spfName:b.getAttribute("data-"+"spfName".replace(/([A-Z])/g,"-$1").toLowerCase()))||"";this.key=Ua(a);this.u=b&&c+"-from-"+b;this.G=d&&c+"-to-"+d;this.h=null;this.J=c+"-old";this.g=null;this.I=c+"-new";this.k=c+(e?"-reverse":"-forward");this.C=c+"-start";this.D=this.k+"-start";this.r=c+"-end";this.s=this.k+"-end"}
function rc(){this.html="";this.scripts=[];this.styles=[];this.links=[]}
var ic=function(){var a=document.createElement("div");return"transition"in a.style?!0:na(["webkit","Moz","Ms","O","Khtml"],function(b){return b+"Transition"in a.style})}(),xc=/\x3clink([\s\S]*?)\x3e/ig,sc=/\x3c(script|style)([\s\S]*?)\x3e([\s\S]*?)\x3c\/\1\x3e/ig,vc=/(?:\s|^)async(?:\s|=|$)/i,zc=/(?:\s|^)href\s*=\s*["']?([^\s"']+)/i,tc=/(?:\s|^)name\s*=\s*["']?([^\s"']+)/i,yc=/(?:\s|^)rel\s*=\s*["']?([^\s"']+)/i,uc=/(?:\s|^)src\s*=\s*["']?([^\s"']+)/i,wc=/(?:\s|^)type\s*=\s*["']([^"']+)["']/i,bc=
"[\r\n",cc=",\r\n",dc="]\r\n",ac=C(ac,"spf.nav.response.parse"),U=C(U,"spf.nav.response.process"),nc=C(nc,"spf.nav.response.preprocess"),ec=C(ec,"spf.nav.response.extract"),V=C(V,"spf.nav.response.extract_"),hc=C(hc,"spf.nav.response.installScripts_"),qc=C(qc,"spf.nav.response.preinstallScripts_"),gc=C(gc,"spf.nav.response.installStyles_"),pc=C(pc,"spf.nav.response.preinstallStyles_"),fc=C(fc,"spf.nav.response.installLinks_"),oc=C(oc,"spf.nav.response.preinstallLinks_");function Ac(a,b,c,d){var e=d||{},f=!1,l=0,h,k=new XMLHttpRequest;k.open(a,b,!0);k.timing={};var q=k.abort;k.abort=function(){clearTimeout(h);k.onreadystatechange=null;q.call(k)};k.onreadystatechange=function(){var a=k.timing;if(k.readyState==Bc){a.responseStart=a.responseStart||n();if("json"==k.responseType)f=!1;else if(-1<(k.getResponseHeader("Transfer-Encoding")||"").toLowerCase().indexOf("chunked"))f=!0;else{var a=k.getResponseHeader("X-Firefox-Spdy"),c=window.chrome&&(window.M?["h2","hq"].N(performance.getEntriesByType("navigation")[0].O):
chrome.loadTimes&&chrome.loadTimes().wasFetchedViaSpdy);f=!(!a&&!c)}e.A&&e.A(k)}else k.readyState==Cc?f&&e.l&&(a=k.responseText.substring(l),l=k.responseText.length,e.l(k,a)):k.readyState==Dc&&(a.responseEnd=a.responseEnd||n(),window.performance&&window.performance.getEntriesByName&&(k.resourceTiming=window.performance.getEntriesByName(b).pop()),f&&e.l&&k.responseText.length>l&&(a=k.responseText.substring(l),l=k.responseText.length,e.l(k,a)),clearTimeout(h),e.w&&e.w(k))};"responseType"in k&&"json"==
e.responseType&&(k.responseType="json");e.withCredentials&&(k.withCredentials=e.withCredentials);d="FormData"in window&&c instanceof FormData;a="POST"==a&&!d;if(e.headers)for(var t in e.headers)k.setRequestHeader(t,e.headers[t]),"content-type"==t.toLowerCase()&&(a=!1);a&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");0<e.F&&(h=setTimeout(function(){k.abort();e.B&&e.B(k)},e.F));k.timing.fetchStart=n();k.send(c);return k}var Bc=2,Cc=3,Dc=4;function Ec(a,b){var c=b||{};c.method=((c.method||"GET")+"").toUpperCase();c.type=c.type||"request";var d=a,e=u["url-identifier"]||"";if(e){var e=e.replace("__type__",c.type||""),f=B(d,"#"),l=B(f[0],"?"),d=l[0],h=l[1],l=l[2],k=f[1],f=f[2];if(0==e.lastIndexOf("?",0))h&&(e=e.replace("?","&")),l+=e;else{if(0==e.lastIndexOf(".",0))if(xa(d,"/"))e="index"+e;else{var q=d.lastIndexOf(".");-1<q&&(d=d.substring(0,q))}else xa(d,"/")&&0==e.lastIndexOf("/",0)&&(e=e.substring(1));d+=e}d=d+h+l+k+f}e=K(d);d={};d.spfUrl=
e;d.startTime=n();d.fetchStart=d.startTime;h=Fc(a,c.current,null,c.type,!1);h=Gc(h,c.current);d.spfPrefetched=!!h&&"prefetch"==h.type;d.spfCached=!!h;if(h)return Da(g(Hc,null,a,c,d,h.key,h.response)),null;h={};if(l=u["request-headers"])for(var t in l)k=l[t],h[t]=null==k?"":String(k);if(c.headers)for(t in c.headers)k=c.headers[t],h[t]=null==k?"":String(k);null!=c.b&&(h["X-SPF-Referer"]=c.b);null!=c.current&&(h["X-SPF-Previous"]=c.current);if(t=u["advanced-header-identifier"])h["X-SPF-Request"]=t.replace("__type__",
c.type),h.Accept="application/json";t=new Ic;l=g(Jc,null,a,c,d,t);t={headers:h,F:u["request-timeout"],A:g(Kc,null,a,t),l:g(Lc,null,a,c,d,t),w:l,B:l};c.withCredentials&&(t.withCredentials=c.withCredentials);u["advanced-response-type-json"]&&(t.responseType="json");return"POST"==c.method?Ac("POST",e,c.q,t):Ac("GET",e,null,t)}
function Hc(a,b,c,d,e){var f=!1;c.responseStart=c.responseEnd=n();b.type&&0==b.type.lastIndexOf("navigate",0)&&(c.navigationStart=c.startTime,u["cache-unified"]||(qa(d),f=!0));b.e&&"multipart"==e.type&&v(e.parts,function(d){d.timing||(d.timing={});d.timing.spfCached=!!c.spfCached;d.timing.spfPrefetched=!!c.spfPrefetched;b.e(a,d)});Mc(a,b,c,e,f)}function Kc(a,b,c){a=-1!=(c.getResponseHeader("X-SPF-Response-Type")||"").toLowerCase().indexOf("multipart");b.v=a}
function Lc(a,b,c,d,e,f,l){if(d.v){f=d.c+f;var h;try{h=ac(f,!0,l)}catch(k){e.abort();b.d&&b.d(a,k,e);return}b.e&&v(h.n,function(d){d.timing||(d.timing={});d.timing.spfCached=!!c.spfCached;d.timing.spfPrefetched=!!c.spfPrefetched;b.e(a,d)});d.complete=d.complete.concat(h.n);d.c=h.c}}
function Jc(a,b,c,d,e){if(e.timing)for(var f in e.timing)c[f]=e.timing[f];if(e.resourceTiming)if("load"==b.type)for(var l in e.resourceTiming)c[l]=e.resourceTiming[l];else if(window.performance&&window.performance.timing&&(f=window.performance.timing.navigationStart,f+e.resourceTiming.startTime>=c.startTime))for(var h in e.resourceTiming)l=e.resourceTiming[h],void 0!==l&&(xa(h,"Start")||xa(h,"End")||"startTime"==h)&&(c[h]=f+Math.round(l));"load"!=b.type&&(c.navigationStart=c.startTime);d.complete.length&&
(d.c=za(d.c),d.c&&Lc(a,b,c,d,e,"",!0));var k;if("json"==e.responseType){if(!e.response){b.d&&b.d(a,Error("JSON response parsing failed"),e);return}k=ec(x(e.response))}else try{k=ac(e.responseText).n}catch(q){b.d&&b.d(a,q,e);return}if(b.e&&1<k.length)for(d=d.complete.length;d<k.length;d++)e=k[d],e.timing||(e.timing={}),e.timing.spfCached=!!c.spfCached,e.timing.spfPrefetched=!!c.spfPrefetched,b.e(a,e);if(1<k.length){var t;v(k,function(a){a.cacheType&&(t=a.cacheType)});k={parts:k,type:"multipart"};t&&
(k.cacheType=t)}else k=1==k.length?k[0]:{};Mc(a,b,c,k,!0)}function Mc(a,b,c,d,e){if(e&&"POST"!=b.method&&(e=Fc(a,b.current,d.cacheType,b.type,!0))){d.cacheKey=e;var f={response:d,type:b.type||""},l=parseInt(u["cache-lifetime"],10),h=parseInt(u["cache-max"],10);0>=l||0>=h||(h=y(),f={data:f,life:l,time:n(),count:0},ta(f),h[e]=f,setTimeout(ra,1E3))}d.timing=c;b.m&&b.m(a,d)}
function Fc(a,b,c,d,e){a=K(a);var f;u["cache-unified"]?f=a:"navigate-back"==d||"navigate-forward"==d?f="history "+a:"navigate"==d?f=(e?"history ":"prefetch ")+a:"prefetch"==d&&(f=e?"prefetch "+a:"");b&&"url"==c?f+=" previous "+b:b&&"path"==c&&(f+=" previous "+Wa(b).pathname);return f||""}
function Gc(a,b){var c=[];b&&(c.push(a+" previous "+b),c.push(a+" previous "+Wa(b).pathname));c.push(a);var d=null;na(c,function(a){var b;a:{b=y();if(a in b){b=b[a];if(sa(b)){ta(b);b=b.data;break a}qa(a)}b=void 0}b&&(d={key:a,response:b.response,type:b.type});return!!b});return d}function Ic(){this.v=!1;this.c="";this.complete=[]}Ec=C(Ec,"spf.nav.request.send");Hc=C(Hc,"spf.nav.request.handleResponseFromCache_");Kc=C(Kc,"spf.nav.request.handleHeadersFromXHR_");Lc=C(Lc,"spf.nav.request.handleChunkFromXHR_");
Jc=C(Jc,"spf.nav.request.handleCompleteFromXHR_");Mc=C(Mc,"spf.nav.request.done_");function Nc(){var a=Oc,b=Pc;if(!r["history-init"]&&window.addEventListener){var c=window.location.href;window.addEventListener("popstate",la,!1);p("history-init",!0);p("history-callback",a);p("history-error-callback",b);p("history-listener",la);p("history-url",c);p("history-timestamp",n());a={"spf-referer":document.referrer};try{ha(c,a)}catch(d){b&&b(c,d)}}!r["nav-init"]&&document.addEventListener&&(p("nav-init",!0),p("nav-init-time",n()),p("nav-counter",0),document.addEventListener("click",Qc,!1),
p("nav-listener",Qc),!u["experimental-prefetch-mousedown"]||"ontouchstart"in window||0<window.navigator.maxTouchPoints||0<window.navigator.msMaxTouchPoints||(document.addEventListener("mousedown",Rc,!1),p("nav-mousedown-listener",Rc)),document.addEventListener("scroll",Sc,!1),p("nav-scroll-listener",Sc))}
function Tc(){W();r["nav-init"]&&(document.removeEventListener&&(document.removeEventListener("click",r["nav-listener"],!1),document.removeEventListener("mousedown",r["nav-mousedown-listener"],!1),document.removeEventListener("scroll",r["nav-scroll-listener"],!1)),p("nav-listener",null),p("nav-mousedown-listener",null),p("nav-scroll-listener",null),p("nav-scroll-position",null),p("nav-scroll-url",null),p("nav-init",!1),p("nav-init-time",null),p("nav-counter",null));r["history-init"]&&(window.removeEventListener&&
window.removeEventListener("popstate",r["history-listener"],!1),p("history-init",!1),p("history-callback",null),p("history-error-callback",null),p("history-listener",null),p("history-url",null),p("history-timestamp",0))}function Uc(a){return fa(a,function(a){return va(a,u["link-class"])})}function Vc(a){return fa(a,function(a){return va(a,u["nolink-class"])})}function Wc(a,b){return fa(a,function(a){return a.href&&"img"!=a.tagName.toLowerCase()},b)}
function Xc(a){if(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey||0<a.button)return null;var b=Uc(a.target);return!b||u["nolink-class"]&&Vc(a.target)?null:(a=Wc(a.target,b))?a.href:null}function Yc(a){return Wa(a).origin!=Wa(window.location.href).origin?!1:!0}
function Zc(){if(!r["nav-init"])return!1;var a=parseInt(r["nav-counter"],10)||0;a++;var b=parseInt(u["navigate-limit"],10),b=isNaN(b)?Infinity:b;if(a>b)return!1;a=parseInt(r["nav-init-time"],10);a--;a=n()-a;b=parseInt(u["navigate-lifetime"],10);b=isNaN(b)?Infinity:b;return a>b?!1:!0}function $c(a,b){var c=b||window.location.href;if(-1!=a.indexOf("#")){var d=K(a),c=K(c);if(d==c)return!1}return!0}
function Qc(a){if(!a.defaultPrevented){var b=Xc(a);b&&(b=Ya(b),Yc(b)&&Zc()&&m("spfclick",{url:b,target:a.target})&&(ad(b,{},new bd),a.preventDefault()))}}function Rc(a){var b=Xc(a);b&&setTimeout(function(){cd(b)},0)}function Sc(){var a;a=r["nav-scroll-position"]||null;var b=r["nav-scroll-url"]||"";a=a&&b==window.location.href?a:null;dd();a&&window.scroll.apply(null,a)}
function Oc(a,b){var c=new bd({current:b&&b["spf-current"],history:!0,position:b&&b["spf-position"],b:b&&b["spf-referer"],reverse:!(!b||!b["spf-back"])}),d=u["reload-identifier"];d&&(a=Xa(a,[d]));Yc(a)?Zc()?m("spfhistory",{url:a,referer:c.b,previous:c.current})&&(c.position&&(p("nav-scroll-position",[window.pageXOffset,window.pageYOffset]),p("nav-scroll-url",window.location.href)),ad(a,{},c)):X(a,fd):X(a,ed)}function gd(a,b){a&&(a=Ya(a),Yc(a)?Zc()?ad(a,b||{},new bd):X(a,fd):X(a,ed))}
function ad(a,b,c){W();if($c(a,c.current))if(hd(a,c.b,c.current,b)){p("nav-counter",(parseInt(r["nav-counter"],10)||0)+1);id(a);var d=K(a),e="preprocess "+K(d);Ta("preprocess",e);d=jd()[d];p("nav-request",d);p("nav-promote",null);p("nav-promote-time",null);d&&4!=d.readyState?kd(a,b,c):ld(a,b,c)}else X(a,md);else c.history||nd(a,c.b,g(Y,null,b)),od(a,c)}
function kd(a,b,c){var d="preprocess "+K(a),e="promote "+K(a);p("nav-promote",a);p("nav-promote-time",n());Ra(d);G(e,!0);c.history||nd(a,c.b,g(Y,null,b))}function ld(a,b,c){var d=g(Y,null,b),e=g(pd,null,b,c),f=g(qd,null,b,c);u["advanced-navigate-persist-timing"]||rd();c.type="navigate";c.history&&(c.type+=c.reverse?"-back":"-forward");b=Ec(a,{method:b.method,headers:b.headers,e:e,d:d,m:f,q:b.postData,type:c.type,current:c.current,b:c.b});p("nav-request",b);c.history||nd(a,c.b,d)}
function od(a,b){if(b.position)dd(),window.scroll.apply(null,b.position),b.f=!0;else{var c=B(a,"#");if(c[2]){if(c=document.getElementById(c[2]))dd(),c.scrollIntoView(),b.f=!0}else b.f||(dd(),window.scroll(0,0),b.f=!0)}}function nd(a,b,c){try{ha(null,{"spf-position":[window.pageXOffset,window.pageYOffset]}),K(a,!0)!=window.location.href&&ia(!1,a,{"spf-referer":b},void 0)}catch(d){W(),c(a,d)}}function Y(a,b,c,d){p("nav-request",null);Pc(b,c,a,void 0,d)&&X(b,sd,c)}
function pd(a,b,c,d){if(td(c,d,a))if(d.reload)X(c,ud);else if(d.redirect)vd(a,d.redirect);else try{U(c,d,b,function(){wd(c,d,a)})}catch(e){Y(a,c,e)}else X(c,xd)}
function qd(a,b,c,d){p("nav-request",null);if(r["nav-promote"]==b.a){var e=d.timing||{};e.navigationStart=r["nav-promote-time"];e.spfPrefetched=!0}var f="multipart"==d.type;if(!f){if(!yd(c,d,a)){X(c,zd);return}if(d.reload){X(c,ud);return}if(d.redirect){vd(a,d.redirect);return}}try{U(c,f?{}:d,b,function(){var e=d.name||"";f&&v(d.parts,function(a){e=a.name||e});wa(e);od(c,b);Ad(c,d,a)})}catch(l){Y(a,c,l)}}function vd(a,b){try{b+=window.location.hash,ha(b,null,!0)}catch(c){W(),Y(a,b,c)}}
function W(){var a=r["nav-request"];a&&(a.abort(),p("nav-request",null))}function Z(a,b){var c;a&&(c=Array.prototype.slice.call(arguments),c[0]=a,c=ba.apply(null,c));return!1!==c}
function X(a,b,c){c=c?c.message:"";W();id();var d=b;c&&(d+=" Message: "+c);m("spfreload",{url:a,reason:d});var e=window.location.href;u["experimental-remove-history"]&&e==a&&(p("history-ignore-pop",!0),window.history.back());setTimeout(function(){var c=u["reload-identifier"];if(c){var d={};d[c]=encodeURIComponent(b);var c=a,h=B(c,"#"),c=h[0],k=-1!=c.indexOf("?")?"&":"?",q;for(q in d)c+=k+q,d[q]&&(c+="="+d[q]),k="&";a=c+h[1]+h[2]}window.location.href=a;$c(a,e)||window.location.reload()},0)}
function Cd(a,b){a=Ya(a);Dd(a,b||{},new bd)}function Dd(a,b,c){c.a=c.a||a;if(hd(a,void 0,void 0,b,!0)){var d=g(Ed,null,!1,b,c),e=g(Fd,null,!1,b,c),f=g(Gd,null,!1,b,c);c.type="load";Ec(a,{method:b.method,headers:b.headers,e:e,d:d,m:f,q:b.postData,type:c.type,withCredentials:b.withCredentials})}}function cd(a,b){a=Ya(a);Hd(a,b||{},new bd)}
function Hd(a,b,c){c.a=c.a||a;if(hd(a,void 0,void 0,b,!0)){var d=g(Ed,null,!0,b,c),e=g(Fd,null,!0,b,c),f=g(Gd,null,!0,b,c);c.type="prefetch";b=Ec(a,{method:b.method,headers:b.headers,e:e,d:d,m:f,q:b.postData,type:c.type,current:c.current});a=K(a);jd()[a]=b}}function Ed(a,b,c,d,e){a&&Id(d);a&&r["nav-promote"]==c.a?Y(b,d,e):Pc(d,e,b,!0)}
function Fd(a,b,c,d,e){if(td(d,e,b,!0)){if(e.reload){if(!a)return;if(r["nav-promote"]==c.a){X(d,ud);return}}if(e.redirect)Jd(a,b,c,e.redirect);else{if(a){var f=g(pd,null,b,c,d,e),l="promote "+K(c.a);E(l,f);if(r["nav-promote"]==c.a){G(l,!0);return}}(a?nc:U)(d,e,c,function(){wd(d,e,b,!0)})}}}
function Gd(a,b,c,d,e){var f="multipart"==e.type;if(!f){if(!yd(d,e,b,!0)){X(d,zd);return}if(e.reload){if(!a)return;if(r["nav-promote"]==c.a){X(d,ud);return}}if(e.redirect){Jd(a,b,c,e.redirect);return}}var l="promote "+K(c.a);if(a){Id(d);if(r["nav-promote"]==c.a){E(l,g(qd,null,b,c,d,e));G(l,!0);return}Ra(l)}l=a?nc:U;try{l(d,f?{}:e,c,function(){Ad(d,e,b,!0)})}catch(h){Ed(a,b,c,d,h)}}function Jd(a,b,c,d){a=a?Hd:Dd;var e={};v([Kd,Ld,Md,Nd,Od,Pd],function(a){e[a]=b[a]});a(d,e,c)}
function Pc(a,b,c,d,e){a={url:a,err:b,xhr:e};(c=Z((c||{})[Kd],a))&&!d&&(c=m("spferror",a));return c}function hd(a,b,c,d,e){a={url:a,referer:b,previous:c};(d=Z((d||{})[Ld],a))&&!e&&(d=m("spfrequest",a));return d}function td(a,b,c,d){a={url:a,part:b};(c=Z((c||{})[Md],a))&&!d&&(c=m("spfpartprocess",a));return c}function wd(a,b,c,d){a={url:a,part:b};Z((c||{})[Nd],a)&&!d&&m("spfpartdone",a)}function yd(a,b,c,d){a={url:a,response:b};(c=Z((c||{})[Od],a))&&!d&&(c=m("spfprocess",a));return c}
function Ad(a,b,c,d){a={url:a,response:b};Z((c||{})[Pd],a)&&!d&&m("spfdone",a)}function Id(a){a=K(a);var b=jd(),c=b[a];c&&c.abort();delete b[a]}function id(a){var b=jd();a=a&&K(a);for(var c in b)a!=c&&Id(c)}var rd,Qd=window.performance&&(window.performance.clearResourceTimings||window.performance.webkitClearResourceTimings||window.performance.mozClearResourceTimings||window.performance.msClearResourceTimings||window.performance.oClearResourceTimings);rd=Qd?g(Qd,window.performance):ca;
function jd(){return"nav-prefetches"in r?r["nav-prefetches"]:p("nav-prefetches",{})}function dd(){p("nav-scroll-position",null);p("nav-scroll-url",null)}function bd(a){a=a||{};this.current=a.history&&a.current?a.current:window.location.href;this.history=!!a.history;this.a=a.a||"";this.position=a.position||null;this.b=void 0!=a.b?a.b:window.location.href;this.reverse=!!a.reverse;this.f=!!a.f;this.type=a.type||""}
var Kd="onError",Ld="onRequest",Md="onPartProcess",Nd="onPartDone",Od="onProcess",Pd="onDone",fd="1",md="2",xd="3",zd="4",ud="5",ed="9",sd="10",Nc=C(Nc,"spf.nav.init"),Tc=C(Tc,"spf.nav.dispose"),Qc=C(Qc,"spf.nav.handleClick_"),Oc=C(Oc,"spf.nav.handleHistory_"),gd=C(gd,"spf.nav.navigate"),ad=C(ad,"spf.nav.navigate_"),kd=C(kd,"spf.nav.navigatePromotePrefetch_"),ld=C(ld,"spf.nav.navigateSendRequest_"),Y=C(Y,"spf.nav.handleNavigateError_"),pd=C(pd,"spf.nav.handleNavigatePart_"),qd=C(qd,"spf.nav.handleNavigateSuccess_"),
W=C(W,"spf.nav.cancel"),Z=C(Z,"spf.nav.callback"),X=C(X,"spf.nav.reload"),cd=C(cd,"spf.nav.prefetch"),Hd=C(Hd,"spf.nav.prefetch_"),Cd=C(Cd,"spf.nav.load"),Ed=C(Ed,"spf.nav.handleLoadError_"),Fd=C(Fd,"spf.nav.handleLoadPart_"),Gd=C(Gd,"spf.nav.handleLoadSuccess_");function Rd(){Eb();Wb();"complete"==document.readyState&&(document.removeEventListener?document.removeEventListener("DOMContentLoaded",Rd,!1):document.detachEvent&&document.detachEvent("onreadystatechange",Rd))}document.addEventListener?document.addEventListener("DOMContentLoaded",Rd,!1):document.attachEvent&&document.attachEvent("onreadystatechange",Rd);Rd();
var Sd={init:function(a){var b=!("function"!=typeof window.history.pushState&&!ka().contentWindow.history.pushState);a=a||{};for(var c in da)u[c]=c in a?a[c]:da[c];for(c in a)c in da||(u[c]=a[c]);b&&Nc();return b},dispose:function(){"undefined"!=typeof History&&History.prototype.pushState&&Tc();for(var a in u)delete u[a]},navigate:gd,load:Cd,prefetch:cd,process:function(a,b){function c(a,c,d,e){a==c&&b&&b(e)}var d=window.location.href;if("multipart"==a.type){var e=a.parts,f=e.length-1;v(e,function(a,
b){U(d,a,null,g(c,null,b,f))})}else U(d,a,null,g(c,null,0,0))}},Td={cache:{remove:qa,clear:function(){y({})}},script:{load:Cb,get:Fb,ready:Hb,done:Ib,require:Kb,declare:Rb,path:Sb,unload:Db,ignore:Jb,unrequire:Mb,prefetch:Gb},style:{load:Tb,get:Xb,unload:Ub,path:$b,prefetch:Yb}},Ud=this.spf=this.spf||{},Vd;for(Vd in Sd)Ud[Vd]=Sd[Vd];for(var Wd in Td)for(var Xd in Td[Wd])Ud[Wd]=Ud[Wd]||{},Ud[Wd][Xd]=Td[Wd][Xd];m("spfready");if(typeof define=='function'&&define.amd)define(spf);else if(typeof exports=='object')for(var f in spf)exports[f]=spf[f];})();

