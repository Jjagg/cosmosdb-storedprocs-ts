!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function u(e){try{l(r.next(e))}catch(e){i(e)}}function c(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,c)}l((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};Object.defineProperty(t,"__esModule",{value:!0});var i,u,c,l=n(1),a=n(7);(i=args,u=i.id,c=i.patch,r(void 0,void 0,void 0,(function(){var e,t,n;return o(this,(function(r){switch(r.label){case 0:return n=(t=Object).assign,[4,l.readDocument(u)];case 1:return e=n.apply(t,[r.sent(),c]),[4,l.replaceDocument(u,e)];case 2:return r.sent(),getContext().getResponse().setBody(e),[2]}}))}))).catch(a.handleError)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.replaceDocument=t.readDocument=void 0;var r=n(2),o=n(6);t.readDocument=r.promisify((function(e,t){return getContext().getCollection().readDocument(o.documentLink(e),t)})),t.replaceDocument=r.promisify((function(e,t,n){return getContext().getCollection().replaceDocument(o.documentLink(e),t,n)}))},function(e,t,n){(function(e){var r=Object.getOwnPropertyDescriptors||function(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++)n[t[r]]=Object.getOwnPropertyDescriptor(e,t[r]);return n},o=/%[sdj%]/g;t.format=function(e){if(!b(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(c(arguments[n]));return t.join(" ")}n=1;for(var r=arguments,i=r.length,u=String(e).replace(o,(function(e){if("%%"===e)return"%";if(n>=i)return e;switch(e){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(e){return"[Circular]"}default:return e}})),l=r[n];n<i;l=r[++n])g(l)||!w(l)?u+=" "+l:u+=" "+c(l);return u},t.deprecate=function(n,r){if(void 0!==e&&!0===e.noDeprecation)return n;if(void 0===e)return function(){return t.deprecate(n,r).apply(this,arguments)};var o=!1;return function(){if(!o){if(e.throwDeprecation)throw new Error(r);e.traceDeprecation?console.trace(r):console.error(r),o=!0}return n.apply(this,arguments)}};var i,u={};function c(e,n){var r={seen:[],stylize:a};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),d(n)?r.showHidden=n:n&&t._extend(r,n),m(r.showHidden)&&(r.showHidden=!1),m(r.depth)&&(r.depth=2),m(r.colors)&&(r.colors=!1),m(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=l),f(r,e,r.depth)}function l(e,t){var n=c.styles[t];return n?"["+c.colors[n][0]+"m"+e+"["+c.colors[n][1]+"m":e}function a(e,t){return e}function f(e,n,r){if(e.customInspect&&n&&x(n.inspect)&&n.inspect!==t.inspect&&(!n.constructor||n.constructor.prototype!==n)){var o=n.inspect(r,e);return b(o)||(o=f(e,o,r)),o}var i=function(e,t){if(m(t))return e.stylize("undefined","undefined");if(b(t)){var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string")}if(h(t))return e.stylize(""+t,"number");if(d(t))return e.stylize(""+t,"boolean");if(g(t))return e.stylize("null","null")}(e,n);if(i)return i;var u=Object.keys(n),c=function(e){var t={};return e.forEach((function(e,n){t[e]=!0})),t}(u);if(e.showHidden&&(u=Object.getOwnPropertyNames(n)),j(n)&&(u.indexOf("message")>=0||u.indexOf("description")>=0))return s(n);if(0===u.length){if(x(n)){var l=n.name?": "+n.name:"";return e.stylize("[Function"+l+"]","special")}if(v(n))return e.stylize(RegExp.prototype.toString.call(n),"regexp");if(O(n))return e.stylize(Date.prototype.toString.call(n),"date");if(j(n))return s(n)}var a,w="",S=!1,T=["{","}"];(y(n)&&(S=!0,T=["[","]"]),x(n))&&(w=" [Function"+(n.name?": "+n.name:"")+"]");return v(n)&&(w=" "+RegExp.prototype.toString.call(n)),O(n)&&(w=" "+Date.prototype.toUTCString.call(n)),j(n)&&(w=" "+s(n)),0!==u.length||S&&0!=n.length?r<0?v(n)?e.stylize(RegExp.prototype.toString.call(n),"regexp"):e.stylize("[Object]","special"):(e.seen.push(n),a=S?function(e,t,n,r,o){for(var i=[],u=0,c=t.length;u<c;++u)_(t,String(u))?i.push(p(e,t,n,r,String(u),!0)):i.push("");return o.forEach((function(o){o.match(/^\d+$/)||i.push(p(e,t,n,r,o,!0))})),i}(e,n,r,c,u):u.map((function(t){return p(e,n,r,c,t,S)})),e.seen.pop(),function(e,t,n){if(e.reduce((function(e,t){return t.indexOf("\n")>=0&&0,e+t.replace(/\u001b\[\d\d?m/g,"").length+1}),0)>60)return n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1];return n[0]+t+" "+e.join(", ")+" "+n[1]}(a,w,T)):T[0]+w+T[1]}function s(e){return"["+Error.prototype.toString.call(e)+"]"}function p(e,t,n,r,o,i){var u,c,l;if((l=Object.getOwnPropertyDescriptor(t,o)||{value:t[o]}).get?c=l.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):l.set&&(c=e.stylize("[Setter]","special")),_(r,o)||(u="["+o+"]"),c||(e.seen.indexOf(l.value)<0?(c=g(n)?f(e,l.value,null):f(e,l.value,n-1)).indexOf("\n")>-1&&(c=i?c.split("\n").map((function(e){return"  "+e})).join("\n").substr(2):"\n"+c.split("\n").map((function(e){return"   "+e})).join("\n")):c=e.stylize("[Circular]","special")),m(u)){if(i&&o.match(/^\d+$/))return c;(u=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(u=u.substr(1,u.length-2),u=e.stylize(u,"name")):(u=u.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),u=e.stylize(u,"string"))}return u+": "+c}function y(e){return Array.isArray(e)}function d(e){return"boolean"==typeof e}function g(e){return null===e}function h(e){return"number"==typeof e}function b(e){return"string"==typeof e}function m(e){return void 0===e}function v(e){return w(e)&&"[object RegExp]"===S(e)}function w(e){return"object"==typeof e&&null!==e}function O(e){return w(e)&&"[object Date]"===S(e)}function j(e){return w(e)&&("[object Error]"===S(e)||e instanceof Error)}function x(e){return"function"==typeof e}function S(e){return Object.prototype.toString.call(e)}function T(e){return e<10?"0"+e.toString(10):e.toString(10)}t.debuglog=function(n){if(m(i)&&(i=e.env.NODE_DEBUG||""),n=n.toUpperCase(),!u[n])if(new RegExp("\\b"+n+"\\b","i").test(i)){var r=e.pid;u[n]=function(){var e=t.format.apply(t,arguments);console.error("%s %d: %s",n,r,e)}}else u[n]=function(){};return u[n]},t.inspect=c,c.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},c.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=y,t.isBoolean=d,t.isNull=g,t.isNullOrUndefined=function(e){return null==e},t.isNumber=h,t.isString=b,t.isSymbol=function(e){return"symbol"==typeof e},t.isUndefined=m,t.isRegExp=v,t.isObject=w,t.isDate=O,t.isError=j,t.isFunction=x,t.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},t.isBuffer=n(4);var E=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function P(){var e=new Date,t=[T(e.getHours()),T(e.getMinutes()),T(e.getSeconds())].join(":");return[e.getDate(),E[e.getMonth()],t].join(" ")}function _(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.log=function(){console.log("%s - %s",P(),t.format.apply(t,arguments))},t.inherits=n(5),t._extend=function(e,t){if(!t||!w(t))return e;for(var n=Object.keys(t),r=n.length;r--;)e[n[r]]=t[n[r]];return e};var D="undefined"!=typeof Symbol?Symbol("util.promisify.custom"):void 0;function z(e,t){if(!e){var n=new Error("Promise was rejected with a falsy value");n.reason=e,e=n}return t(e)}t.promisify=function(e){if("function"!=typeof e)throw new TypeError('The "original" argument must be of type Function');if(D&&e[D]){var t;if("function"!=typeof(t=e[D]))throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(t,D,{value:t,enumerable:!1,writable:!1,configurable:!0}),t}function t(){for(var t,n,r=new Promise((function(e,r){t=e,n=r})),o=[],i=0;i<arguments.length;i++)o.push(arguments[i]);o.push((function(e,r){e?n(e):t(r)}));try{e.apply(this,o)}catch(e){n(e)}return r}return Object.setPrototypeOf(t,Object.getPrototypeOf(e)),D&&Object.defineProperty(t,D,{value:t,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(t,r(e))},t.promisify.custom=D,t.callbackify=function(t){if("function"!=typeof t)throw new TypeError('The "original" argument must be of type Function');function n(){for(var n=[],r=0;r<arguments.length;r++)n.push(arguments[r]);var o=n.pop();if("function"!=typeof o)throw new TypeError("The last argument must be of type Function");var i=this,u=function(){return o.apply(i,arguments)};t.apply(this,n).then((function(t){e.nextTick(u,null,t)}),(function(t){e.nextTick(z,t,u)}))}return Object.setPrototypeOf(n,Object.getPrototypeOf(t)),Object.defineProperties(n,r(t)),n}}).call(this,n(3))},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:u}catch(e){r=u}}();var l,a=[],f=!1,s=-1;function p(){f&&l&&(f=!1,l.length?a=l.concat(a):s=-1,a.length&&y())}function y(){if(!f){var e=c(p);f=!0;for(var t=a.length;t;){for(l=a,a=[];++s<t;)l&&l[s].run();s=-1,t=a.length}l=null,f=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function g(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];a.push(new d(e,t)),1!==a.length||f||c(y)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=g,o.addListener=g,o.once=g,o.off=g,o.removeListener=g,o.removeAllListeners=g,o.emit=g,o.prependListener=g,o.prependOnceListener=g,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t){e.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},function(e,t){"function"==typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.documentLink=void 0,t.documentLink=function(e){return getContext().getCollection().getAltLink()+"/docs/"+e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handleError=void 0,t.handleError=function(e){return getContext().abort(e)}}]);
//# sourceMappingURL=PatchDocument.js.map