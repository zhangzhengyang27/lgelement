(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{281:function(module,exports,__webpack_require__){var api=__webpack_require__(628),content=__webpack_require__(629);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},283:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(process){__webpack_require__(28),__webpack_require__(36),__webpack_require__(37),__webpack_require__(14),__webpack_require__(160),__webpack_require__(38),__webpack_require__(174),__webpack_require__(49),__webpack_require__(23),__webpack_require__(620),__webpack_require__(60),__webpack_require__(106),__webpack_require__(621),__webpack_require__(50),__webpack_require__(161),__webpack_require__(53),__webpack_require__(171),__webpack_require__(278),__webpack_require__(47),__webpack_require__(264),__webpack_require__(150),__webpack_require__(61),__webpack_require__(267),__webpack_require__(19),__webpack_require__(622),__webpack_require__(88),__webpack_require__(624),__webpack_require__(625),__webpack_require__(51),__webpack_require__(52),__webpack_require__(29),__webpack_require__(87),__webpack_require__(268),__webpack_require__(39),__webpack_require__(30);function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:key+""}(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function e(){return(e=Object.assign||function(e){for(var t,r=1;r<arguments.length;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)}function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function t(e,r){return(t=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e})(e,r)}function n(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function i(){return(i=n()?Reflect.construct:function(e,r,n){var i=[null];i.push.apply(i,r);var a=new(Function.bind.apply(e,i));return n&&t(a,n.prototype),a}).apply(null,arguments)}function a(e){var n="function"==typeof Map?new Map:void 0;return(a=function(e){if(null===e||(a=e,-1===Function.toString.call(a).indexOf("[native code]")))return e;var a;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(e))return n.get(e);n.set(e,s)}function s(){return i(e,arguments,r(this).constructor)}return s.prototype=Object.create(e.prototype,{constructor:{value:s,enumerable:!1,writable:!0,configurable:!0}}),t(s,e)})(e)}var s=/%[sdj%]/g,o=function(){};function u(e){if(!e||!e.length)return null;var r={};return e.forEach((function(e){var t=e.field;r[t]=r[t]||[],r[t].push(e)})),r}function f(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];var n=1,i=r[0],a=r.length;if("function"==typeof i)return i.apply(null,r.slice(1));if("string"==typeof i){for(var o=(i+"").replace(s,(function(e){if("%%"===e)return"%";if(n>=a)return e;switch(e){case"%s":return r[n++]+"";case"%d":return+r[n++];case"%j":try{return JSON.stringify(r[n++])}catch(e){return"[Circular]"}break;default:return e}})),u=r[n];n<a;u=r[++n])o+=" "+u;return o}return i}function l(e,r){return null==e||!("array"!==r||!Array.isArray(e)||e.length)||!(!function(e){return"string"===e||"url"===e||"hex"===e||"email"===e||"pattern"===e}(r)||"string"!=typeof e||e)}function c(e,r,t){var n=0,i=e.length;!function a(s){if(s&&s.length)t(s);else{var o=n;n+=1,o<i?r(e[o],a):t([])}}([])}void 0!==process&&Object({NODE_ENV:"production",NODE_PATH:"",PUBLIC_URL:"."});var d=function(e){var r,t;function n(r,t){var n;return(n=e.call(this,"Async Validation Error")||this).errors=r,n.fields=t,n}return t=e,(r=n).prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t,n}(a(Error));function p(e,r,t,n){if(r.first){var i=new Promise((function(r,i){c(function(e){var r=[];return Object.keys(e).forEach((function(t){r.push.apply(r,e[t])})),r}(e),t,(function(e){return n(e),e.length?i(new d(e,u(e))):r()}))}));return i.catch((function(e){return e})),i}var a=r.firstFields||[];!0===a&&(a=Object.keys(e));var s=Object.keys(e),o=s.length,f=0,l=[],p=new Promise((function(r,i){var p=function(e){if(l.push.apply(l,e),++f===o)return n(l),l.length?i(new d(l,u(l))):r()};s.length||(n(l),r()),s.forEach((function(r){var n=e[r];-1!==a.indexOf(r)?c(n,t,p):function(e,r,t){var n=[],i=0,a=e.length;function s(e){n.push.apply(n,e),++i===a&&t(n)}e.forEach((function(e){r(e,s)}))}(n,t,p)}))}));return p.catch((function(e){return e})),p}function y(e){return function(r){return r&&r.message?(r.field=r.field||e.fullField,r):{message:"function"==typeof r?r():r,field:r.field||e.fullField}}}function h(r,t){if(t)for(var n in t)if(t.hasOwnProperty(n)){var i=t[n];"object"==_typeof(i)&&"object"==_typeof(r[n])?r[n]=e(e({},r[n]),i):r[n]=i}return r}function g(e,r,t,n,i,a){e.required&&(!t.hasOwnProperty(e.field)||l(r,a||e.type))&&n.push(f(i.messages.required,e.fullField))}var m_email=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,m_url=/^(?!mailto:)(?:(?:http|https|ftp):\/\/|\/\/)(?:\S+(?::\S*)?@)?(?:(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[0-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))|localhost)(?::\d{2,5})?(?:(\/|\?|#)[^\s]*)?$/i,m_hex=/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i,v={integer:function integer(e){return v.number(e)&&parseInt(e,10)===e},float:function float(e){return v.number(e)&&!v.integer(e)},array:function array(e){return Array.isArray(e)},regexp:function regexp(e){if(e instanceof RegExp)return!0;try{return!!new RegExp(e)}catch(e){return!1}},date:function date(e){return"function"==typeof e.getTime&&"function"==typeof e.getMonth&&"function"==typeof e.getYear},number:function number(e){return!isNaN(e)&&"number"==typeof e},object:function object(e){return"object"==_typeof(e)&&!v.array(e)},method:function method(e){return"function"==typeof e},email:function email(e){return"string"==typeof e&&!!e.match(m_email)&&255>e.length},url:function url(e){return"string"==typeof e&&!!e.match(m_url)},hex:function hex(e){return"string"==typeof e&&!!e.match(m_hex)}},b={required:g,whitespace:function whitespace(e,r,t,n,i){(/^\s+$/.test(r)||""===r)&&n.push(f(i.messages.whitespace,e.fullField))},type:function type(e,r,t,n,i){if(e.required&&void 0===r)g(e,r,t,n,i);else{var a=e.type;-1<["integer","float","array","regexp","object","method","email","number","date","url","hex"].indexOf(a)?v[a](r)||n.push(f(i.messages.types[a],e.fullField,e.type)):a&&_typeof(r)!==e.type&&n.push(f(i.messages.types[a],e.fullField,e.type))}},range:function range(e,r,t,n,i){var a="number"==typeof e.len,s="number"==typeof e.min,o="number"==typeof e.max,u=r,l=null,d="string"==typeof r,p=Array.isArray(r);if("number"==typeof r?l="number":d?l="string":p&&(l="array"),!l)return!1;p&&(u=r.length),d&&(u=r.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,"_").length),a?u!==e.len&&n.push(f(i.messages[l].len,e.fullField,e.len)):s&&!o&&u<e.min?n.push(f(i.messages[l].min,e.fullField,e.min)):o&&!s&&u>e.max?n.push(f(i.messages[l].max,e.fullField,e.max)):s&&o&&(u<e.min||u>e.max)&&n.push(f(i.messages[l].range,e.fullField,e.min,e.max))},enum:function _enum(e,r,t,n,i){e.enum=Array.isArray(e.enum)?e.enum:[],-1===e.enum.indexOf(r)&&n.push(f(i.messages.enum,e.fullField,e.enum.join(", ")))},pattern:function pattern(e,r,t,n,i){e.pattern&&(e.pattern instanceof RegExp?(e.pattern.lastIndex=0,e.pattern.test(r)||n.push(f(i.messages.pattern.mismatch,e.fullField,r,e.pattern))):"string"==typeof e.pattern&&(new RegExp(e.pattern).test(r)||n.push(f(i.messages.pattern.mismatch,e.fullField,r,e.pattern))))}};function q(e,r,t,n,i){var a=e.type,s=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(l(r,a)&&!e.required)return t();b.required(e,r,n,s,i,a),l(r,a)||b.type(e,r,n,s,i)}t(s)}var w={string:function string(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(l(r,"string")&&!e.required)return t();b.required(e,r,n,a,i,"string"),l(r,"string")||(b.type(e,r,n,a,i),b.range(e,r,n,a,i),b.pattern(e,r,n,a,i),!0===e.whitespace&&b.whitespace(e,r,n,a,i))}t(a)},method:function method(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(l(r)&&!e.required)return t();b.required(e,r,n,a,i),void 0!==r&&b.type(e,r,n,a,i)}t(a)},number:function number(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(""===r&&(r=void 0),l(r)&&!e.required)return t();b.required(e,r,n,a,i),void 0!==r&&(b.type(e,r,n,a,i),b.range(e,r,n,a,i))}t(a)},boolean:function boolean(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(l(r)&&!e.required)return t();b.required(e,r,n,a,i),void 0!==r&&b.type(e,r,n,a,i)}t(a)},regexp:function regexp(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(l(r)&&!e.required)return t();b.required(e,r,n,a,i),l(r)||b.type(e,r,n,a,i)}t(a)},integer:function integer(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(l(r)&&!e.required)return t();b.required(e,r,n,a,i),void 0!==r&&(b.type(e,r,n,a,i),b.range(e,r,n,a,i))}t(a)},float:function float(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(l(r)&&!e.required)return t();b.required(e,r,n,a,i),void 0!==r&&(b.type(e,r,n,a,i),b.range(e,r,n,a,i))}t(a)},array:function array(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(l(r,"array")&&!e.required)return t();b.required(e,r,n,a,i,"array"),l(r,"array")||(b.type(e,r,n,a,i),b.range(e,r,n,a,i))}t(a)},object:function object(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(l(r)&&!e.required)return t();b.required(e,r,n,a,i),void 0!==r&&b.type(e,r,n,a,i)}t(a)},enum:function _enum(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(l(r)&&!e.required)return t();b.required(e,r,n,a,i),void 0!==r&&b.enum(e,r,n,a,i)}t(a)},pattern:function pattern(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(l(r,"string")&&!e.required)return t();b.required(e,r,n,a,i),l(r,"string")||b.pattern(e,r,n,a,i)}t(a)},date:function date(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(l(r)&&!e.required)return t();var s;b.required(e,r,n,a,i),l(r)||(s="number"==typeof r?new Date(r):r,b.type(e,s,n,a,i),s&&b.range(e,s.getTime(),n,a,i))}t(a)},url:q,hex:q,email:q,required:function required(e,r,t,n,i){var a=[],s=Array.isArray(r)?"array":_typeof(r);b.required(e,r,n,a,i,s),t(a)},any:function any(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(l(r)&&!e.required)return t();b.required(e,r,n,a,i)}t(a)}};function O(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function clone(){var e=JSON.parse(JSON.stringify(this));return e.clone=this.clone,e}}}var x=O();function _(e){this.rules=null,this._messages=x,this.define(e)}_.prototype={messages:function messages(e){return e&&(this._messages=h(O(),e)),this._messages},define:function define(e){if(!e)throw new Error("Cannot configure a schema with no rules");if("object"!=_typeof(e)||Array.isArray(e))throw new Error("Rules must be an object");var r,t;for(r in this.rules={},e)e.hasOwnProperty(r)&&(t=e[r],this.rules[r]=Array.isArray(t)?t:[t])},validate:function validate(r,t,n){var i=this;void 0===t&&(t={}),void 0===n&&(n=function(){});var a,s,o=r,l=t,c=n;if("function"==typeof l&&(c=l,l={}),!this.rules||0===Object.keys(this.rules).length)return c&&c(),Promise.resolve();if(l.messages){var d=this.messages();d===x&&(d=O()),h(d,l.messages),l.messages=d}else l.messages=this.messages();var g={};(l.keys||Object.keys(this.rules)).forEach((function(t){a=i.rules[t],s=o[t],a.forEach((function(n){var a=n;"function"==typeof a.transform&&(o===r&&(o=e({},o)),s=o[t]=a.transform(s)),(a="function"==typeof a?{validator:a}:e({},a)).validator=i.getValidationMethod(a),a.field=t,a.fullField=a.fullField||t,a.type=i.getType(a),a.validator&&(g[t]=g[t]||[],g[t].push({rule:a,value:s,source:o,field:t}))}))}));var m={};return p(g,l,(function(r,t){var n,i=r.rule,a=!("object"!==i.type&&"array"!==i.type||"object"!=_typeof(i.fields)&&"object"!=_typeof(i.defaultField));function s(r,t){return e(e({},t),{},{fullField:i.fullField+"."+r})}function o(n){void 0===n&&(n=[]);var o=n;if(Array.isArray(o)||(o=[o]),!l.suppressWarning&&o.length&&_.warning("async-validator:",o),o.length&&i.message&&(o=[].concat(i.message)),o=o.map(y(i)),l.first&&o.length)return m[i.field]=1,t(o);if(a){if(i.required&&!r.value)return i.message?o=[].concat(i.message).map(y(i)):l.error&&(o=[l.error(i,f(l.messages.required,i.field))]),t(o);var u={};if(i.defaultField)for(var c in r.value)r.value.hasOwnProperty(c)&&(u[c]=i.defaultField);for(var d in u=e(e({},u),r.rule.fields))if(u.hasOwnProperty(d)){var p=Array.isArray(u[d])?u[d]:[u[d]];u[d]=p.map(s.bind(null,d))}var h=new _(u);h.messages(l.messages),r.rule.options&&(r.rule.options.messages=l.messages,r.rule.options.error=l.error),h.validate(r.value,r.rule.options||l,(function(e){var r=[];o&&o.length&&r.push.apply(r,o),e&&e.length&&r.push.apply(r,e),t(r.length?r:null)}))}else t(o)}a=a&&(i.required||!i.required&&r.value),i.field=r.field,i.asyncValidator?n=i.asyncValidator(i,r.value,o,r.source,l):i.validator&&(!0===(n=i.validator(i,r.value,o,r.source,l))?o():!1===n?o(i.message||i.field+" fails"):n instanceof Array?o(n):n instanceof Error&&o(n.message)),n&&n.then&&n.then((function(){return o()}),(function(e){return o(e)}))}),(function(e){!function(e){var r,t,n,i=[],a={};for(r=0;r<e.length;r++)t=e[r],n=void 0,Array.isArray(t)?i=(n=i).concat.apply(n,t):i.push(t);i.length?a=u(i):(i=null,a=null),c(i,a)}(e)}))},getType:function getType(e){if(void 0===e.type&&e.pattern instanceof RegExp&&(e.type="pattern"),"function"!=typeof e.validator&&e.type&&!w.hasOwnProperty(e.type))throw new Error(f("Unknown rule type %s",e.type));return e.type||"string"},getValidationMethod:function getValidationMethod(e){if("function"==typeof e.validator)return e.validator;var r=Object.keys(e),t=r.indexOf("message");return-1!==t&&r.splice(t,1),1===r.length&&"required"===r[0]?w.required:w[this.getType(e)]||!1}},_.register=function(e,r){if("function"!=typeof r)throw new Error("Cannot register a validator by type, validator is not a function");w[e]=r},_.warning=o,_.messages=x,_.validators=w;var j=function F(e,r,t,n,i,a,s,o,u,f){"boolean"!=typeof s&&(u=o,o=s,s=!1);var c,l="function"==typeof t?t.options:t;if(e&&e.render&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0,i&&(l.functional=!0)),n&&(l._scopeId=n),a?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,u(e)),e&&e._registeredComponents&&e._registeredComponents.add(a)},l._ssrRegister=c):r&&(c=s?function(e){r.call(this,f(e,this.$root.$options.shadowRoot))}:function(e){r.call(this,o(e))}),c)if(l.functional){var _e=l.render;l.render=function(r,t){return c.call(t),_e(r,t)}}else{var _e2=l.beforeCreate;l.beforeCreate=_e2?[].concat(_e2,c):[c]}return t}({render:function render(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("label",[e._v(e._s(e.label))]),e._v(" "),t("div",[e._t("default"),e._v(" "),e.errMessage?t("p",[e._v(e._s(e.errMessage))]):e._e()],2)])},staticRenderFns:[]},void 0,{name:"LgFormItem",inject:["form"],props:{label:{type:String},prop:{type:String}},mounted:function mounted(){this.$on("validate",(function(){console.log("xxxxx"),this.validate()}))},data:function data(){return{errMessage:""}},methods:{validate:function validate(){if(this.prop){var e=this.form.model[this.prop],r=this.form.rules[this.prop];return new _(_defineProperty({},this.prop,r)).validate(_defineProperty({},this.prop,e),(function(e){this.errMessage=e?e[0].message:""}))}}}},void 0,!1,void 0,!1,void 0,void 0,void 0);j.install=function(e){e.component(j.name,j)},__webpack_exports__.a=j}).call(this,__webpack_require__(92))},285:function(module,exports,__webpack_require__){__webpack_require__(286),__webpack_require__(436),module.exports=__webpack_require__(437)},352:function(module,exports){},437:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_vue__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(282);module._StorybookPreserveDecorators=!0,Object(_storybook_vue__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(619)],module)}.call(this,__webpack_require__(438)(module))},619:function(module,exports,__webpack_require__){var map={"./form/stories/form.stories.js":632,"./input/stories/input.stories.js":626,"./link/stories/link.stories.js":631};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=619},626:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Text",(function(){return Text})),__webpack_require__.d(__webpack_exports__,"Password",(function(){return Password}));var ___WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(69);__webpack_exports__.default={title:"LgInput",component:___WEBPACK_IMPORTED_MODULE_0__.a};var Text=function(){return{components:{LgInput:___WEBPACK_IMPORTED_MODULE_0__.a},template:'<lg-input v-model="value"></lg-input>',data:function data(){return{value:"admin"}}}},Password=function(){return{components:{LgInput:___WEBPACK_IMPORTED_MODULE_0__.a},template:'<lg-input type="password" v-model="value"></lg-input>',data:function data(){return{value:"admin"}}}}},627:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(281)},629:function(module,exports,__webpack_require__){(exports=__webpack_require__(630)(!1)).push([module.i,"\n.disabled[data-v-56fdcfc2] {\r\n  cursor: not-allowed;\n}\n.no-underline[data-v-56fdcfc2] {\r\n  text-decoration: none;\n}\r\n",""]),module.exports=exports},631:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Link",(function(){return Link}));var src_linkvue_type_script_lang_js_={name:"LgLink",props:{href:{type:String},disabled:{type:Boolean,default:!1},underline:{type:Boolean,default:!1}}},componentNormalizer=(__webpack_require__(627),__webpack_require__(284)),src_link=Object(componentNormalizer.a)(src_linkvue_type_script_lang_js_,(function render(){return(0,this._self._c)("a",{class:[this.disabled&&"disabled",!this.underline&&"no-underline"],attrs:{href:this.disabled?null:this.href}},[this._t("default")],2)}),[],!1,null,"56fdcfc2",null).exports,Link=(__webpack_exports__.default={title:"LgLink",component:src_link},function(){return{components:{LgLink:src_link},template:'\n    <div>\n      <lg-link :disabled="true" href="http://www.baidu.com">baidu</lg-link>\n    </div>\n  '}})},632:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Login",(function(){return Login}));__webpack_require__(14),__webpack_require__(105),__webpack_require__(23),__webpack_require__(60),__webpack_require__(53),__webpack_require__(19),__webpack_require__(88),__webpack_require__(29),__webpack_require__(30);var t=function e(e,t,n,o,r,s,i,d,c,a){"boolean"!=typeof i&&(c=d,d=i,i=!1);var f,l="function"==typeof n?n.options:n;if(e&&e.render&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0,r&&(l.functional=!0)),o&&(l._scopeId=o),s?(f=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,c(e)),e&&e._registeredComponents&&e._registeredComponents.add(s)},l._ssrRegister=f):t&&(f=i?function(e){t.call(this,a(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,d(e))}),f)if(l.functional){var _e=l.render;l.render=function(t,n){return f.call(n),_e(t,n)}}else{var _e2=l.beforeCreate;l.beforeCreate=_e2?[].concat(_e2,f):[f]}return n}({render:function render(){var e=this.$createElement;return(this._self._c||e)("form",[this._t("default")],2)},staticRenderFns:[]},void 0,{name:"LgForm",provide:function provide(){return{form:this}},props:{model:{type:Object},rules:{type:Object}},methods:{validate:function validate(e){var t=this.$children.filter((function(e){return e.prop})).map((function(e){return e.validate()}));Promise.all(t).then((function(){return e(!0)})).catch((function(){return e(!1)}))}}},void 0,!1,void 0,!1,void 0,void 0,void 0);t.install=function(e){e.component(t.name,t)},console.log("test");var es=t,dist_es=__webpack_require__(283),input_dist_es=__webpack_require__(69);var es_t=function es_e(e,t,n,o,i,s,r,d,c,a){"boolean"!=typeof r&&(c=d,d=r,r=!1);var f,l="function"==typeof n?n.options:n;if(e&&e.render&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0,i&&(l.functional=!0)),o&&(l._scopeId=o),s?(f=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,c(e)),e&&e._registeredComponents&&e._registeredComponents.add(s)},l._ssrRegister=f):t&&(f=r?function(e){t.call(this,a(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,d(e))}),f)if(l.functional){var _e=l.render;l.render=function(t,n){return f.call(n),_e(t,n)}}else{var _e2=l.beforeCreate;l.beforeCreate=_e2?[].concat(_e2,f):[f]}return n}({render:function render(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("button",{on:{click:this.handleClick}},[this._t("default")],2)])},staticRenderFns:[]},void 0,{name:"LgButton",methods:{handleClick:function handleClick(e){this.$emit("click",e),e.preventDefault()}}},void 0,!1,void 0,!1,void 0,void 0,void 0);es_t.install=function(e){e.component(es_t.name,es_t)};var button_dist_es=es_t,Login=(__webpack_exports__.default={title:"LgForm",component:es},function(){return{components:{LgForm:es,LgFormItem:dist_es.a,LgInput:input_dist_es.a,LgButton:button_dist_es},template:'\n    <lg-form class="form" ref="form" :model="user" :rules="rules">\n      <lg-form-item label="用户名" prop="username">\n        \x3c!-- <lg-input v-model="user.username"></lg-input> --\x3e\n        <lg-input :value="user.username" @input="user.username=$event" placeholder="请输入用户名"></lg-input>\n      </lg-form-item>\n      <lg-form-item label="密码" prop="password">\n        <lg-input type="password" v-model="user.password"></lg-input>\n      </lg-form-item>\n      <lg-form-item>\n        <lg-button type="primary" @click="login">登 录</lg-button>\n      </lg-form-item>\n    </lg-form>\n  ',data:function data(){return{user:{username:"",password:""},rules:{username:[{required:!0,message:"请输入用户名"}],password:[{required:!0,message:"请输入密码"},{min:6,max:12,message:"请输入6-12位密码"}]}}},methods:{login:function login(){console.log("button"),this.$refs.form.validate((function(valid){if(!valid)return alert("验证失败"),!1;alert("验证成功")}))}}}})},69:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(14),__webpack_require__(53);var e=function t(t,e,n,o,i,r,s,a,d,p){"boolean"!=typeof s&&(d=a,a=s,s=!1);var l,c="function"==typeof n?n.options:n;if(t&&t.render&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0,i&&(c.functional=!0)),o&&(c._scopeId=o),r?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,d(t)),t&&t._registeredComponents&&t._registeredComponents.add(r)},c._ssrRegister=l):e&&(l=s?function(t){e.call(this,p(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,a(t))}),l)if(c.functional){var _t=c.render;c.render=function(e,n){return l.call(n),_t(e,n)}}else{var _t2=c.beforeCreate;c.beforeCreate=_t2?[].concat(_t2,l):[l]}return n}({render:function render(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("input",this._b({attrs:{type:this.type},domProps:{value:this.value},on:{input:this.handleInput}},"input",this.$attrs,!1))])},staticRenderFns:[]},void 0,{name:"LgInput",inheritAttrs:!1,props:{value:{type:String},type:{type:String,default:"text"}},methods:{handleInput:function handleInput(t){this.$emit("input",t.target.value);var e=function(t){for(;t&&"LgFormItem"!==t.$options.name;)t=t.$parent;return t}(this.$parent);e&&e.$emit("validate")}}},void 0,!1,void 0,!1,void 0,void 0,void 0);e.install=function(t){t.component(e.name,e)},__webpack_exports__.a=e}},[[285,1,2]]]);
//# sourceMappingURL=main.89ff636350bd31e71a85.bundle.js.map