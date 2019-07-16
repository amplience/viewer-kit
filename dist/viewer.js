!function(a){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var b;b="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,b.videojs=a()}}(function(){var a;return function b(a,c,d){function e(g,h){if(!c[g]){if(!a[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};a[g][0].call(k.exports,function(b){var c=a[g][1][b];return e(c?c:b)},k,k.exports,b,a,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function g(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var h=a(2),i=d(h),j=a(5),k=d(j),l=function(a){function b(){return e(this,b),f(this,a.apply(this,arguments))}return g(b,a),b.prototype.buildCSSClass=function(){return"vjs-big-play-button"},b.prototype.handleClick=function(){this.player_.play()},b}(i["default"]);l.prototype.controlText_="Play Video",k["default"].registerComponent("BigPlayButton",l),c["default"]=l},{2:2,5:5}],2:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function g(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var h=a(3),i=d(h),j=a(5),k=d(j),l=a(86),m=d(l),n=a(138),o=d(n),p=function(a){function b(){return e(this,b),f(this,a.apply(this,arguments))}return g(b,a),b.prototype.createEl=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"button",b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};b=o["default"]({className:this.buildCSSClass()},b),"button"!==a&&(m["default"].warn("Creating a Button with an HTML element of "+a+" is deprecated; use ClickableComponent instead."),b=o["default"]({tabIndex:0},b),c=o["default"]({role:"button"},c)),c=o["default"]({type:"button","aria-live":"polite"},c);var d=k["default"].prototype.createEl.call(this,a,b,c);return this.createControlTextEl(d),d},b.prototype.addChild=function(a){var b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=this.constructor.name;return m["default"].warn("Adding an actionable (user controllable) child to a Button ("+c+") is not supported; use a ClickableComponent instead."),k["default"].prototype.addChild.call(this,a,b)},b.prototype.enable=function(){a.prototype.enable.call(this),this.el_.removeAttribute("disabled")},b.prototype.disable=function(){a.prototype.disable.call(this),this.el_.setAttribute("disabled","disabled")},b.prototype.handleKeyPress=function(b){32!==b.which&&13!==b.which&&a.prototype.handleKeyPress.call(this,b)},b}(i["default"]);k["default"].registerComponent("Button",p),c["default"]=p},{138:138,3:3,5:5,86:86}],3:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i=a(5),j=e(i),k=a(81),l=d(k),m=a(82),n=d(m),o=a(83),p=d(o),q=a(86),r=e(q),s=a(94),t=e(s),u=a(138),v=e(u),w=function(a){function b(c,d){f(this,b);var e=g(this,a.call(this,c,d));return e.emitTapEvents(),e.enable(),e}return h(b,a),b.prototype.createEl=function(){var b=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"div",c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},d=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};c=v["default"]({className:this.buildCSSClass(),tabIndex:0},c),"button"===b&&r["default"].error("Creating a ClickableComponent with an HTML element of "+b+" is not supported; use a Button instead."),d=v["default"]({role:"button","aria-live":"polite"},d),this.tabIndex_=c.tabIndex;var e=a.prototype.createEl.call(this,b,c,d);return this.createControlTextEl(e),e},b.prototype.createControlTextEl=function(a){return this.controlTextEl_=l.createEl("span",{className:"vjs-control-text"}),a&&a.appendChild(this.controlTextEl_),this.controlText(this.controlText_,a),this.controlTextEl_},b.prototype.controlText=function(a){var b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.el();if(!a)return this.controlText_||"Need Text";var c=this.localize(a);return this.controlText_=a,this.controlTextEl_.innerHTML=c,b.setAttribute("title",c),this},b.prototype.buildCSSClass=function(){return"vjs-control vjs-button "+a.prototype.buildCSSClass.call(this)},b.prototype.enable=function(){return this.removeClass("vjs-disabled"),this.el_.setAttribute("aria-disabled","false"),"undefined"!=typeof this.tabIndex_&&this.el_.setAttribute("tabIndex",this.tabIndex_),this.on("tap",this.handleClick),this.on("click",this.handleClick),this.on("focus",this.handleFocus),this.on("blur",this.handleBlur),this},b.prototype.disable=function(){return this.addClass("vjs-disabled"),this.el_.setAttribute("aria-disabled","true"),"undefined"!=typeof this.tabIndex_&&this.el_.removeAttribute("tabIndex"),this.off("tap",this.handleClick),this.off("click",this.handleClick),this.off("focus",this.handleFocus),this.off("blur",this.handleBlur),this},b.prototype.handleClick=function(){},b.prototype.handleFocus=function(){n.on(t["default"],"keydown",p.bind(this,this.handleKeyPress))},b.prototype.handleKeyPress=function(b){32===b.which||13===b.which?(b.preventDefault(),this.handleClick(b)):a.prototype.handleKeyPress&&a.prototype.handleKeyPress.call(this,b)},b.prototype.handleBlur=function(){n.off(t["default"],"keydown",p.bind(this,this.handleKeyPress))},b}(j["default"]);j["default"].registerComponent("ClickableComponent",w),c["default"]=w},{138:138,5:5,81:81,82:82,83:83,86:86,94:94}],4:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function g(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var h=a(2),i=d(h),j=a(5),k=d(j),l=function(a){function b(c,d){e(this,b);var g=f(this,a.call(this,c,d));return g.controlText(d&&d.controlText||g.localize("Close")),g}return g(b,a),b.prototype.buildCSSClass=function(){return"vjs-close-button "+a.prototype.buildCSSClass.call(this)},b.prototype.handleClick=function(){this.trigger({type:"close",bubbles:!1})},b}(i["default"]);k["default"].registerComponent("CloseButton",l),c["default"]=l},{2:2,5:5}],5:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}c.__esModule=!0;var g=a(95),h=e(g),i=a(81),j=d(i),k=a(83),l=d(k),m=a(85),n=d(m),o=a(82),p=d(o),q=a(86),r=e(q),s=a(91),t=e(s),u=a(87),v=e(u),w=function(){function a(b,c,d){if(f(this,a),!b&&this.play?this.player_=b=this:this.player_=b,this.options_=v["default"]({},this.options_),c=this.options_=v["default"](this.options_,c),this.id_=c.id||c.el&&c.el.id,!this.id_){var e=b&&b.id&&b.id()||"no_player";this.id_=e+"_component_"+n.newGUID()}this.name_=c.name||null,c.el?this.el_=c.el:c.createEl!==!1&&(this.el_=this.createEl()),this.children_=[],this.childIndex_={},this.childNameIndex_={},c.initChildren!==!1&&this.initChildren(),this.ready(d),c.reportTouchActivity!==!1&&this.enableTouchActivity()}return a.prototype.dispose=function(){if(this.trigger({type:"dispose",bubbles:!1}),this.children_)for(var a=this.children_.length-1;a>=0;a--)this.children_[a].dispose&&this.children_[a].dispose();this.children_=null,this.childIndex_=null,this.childNameIndex_=null,this.off(),this.el_.parentNode&&this.el_.parentNode.removeChild(this.el_),j.removeElData(this.el_),this.el_=null},a.prototype.player=function(){return this.player_},a.prototype.options=function(a){return r["default"].warn("this.options() has been deprecated and will be moved to the constructor in 6.0"),a?(this.options_=v["default"](this.options_,a),this.options_):this.options_},a.prototype.el=function(){return this.el_},a.prototype.createEl=function(a,b,c){return j.createEl(a,b,c)},a.prototype.localize=function(a){var b=this.player_.language&&this.player_.language(),c=this.player_.languages&&this.player_.languages();if(!b||!c)return a;var d=c[b];if(d&&d[a])return d[a];var e=b.split("-")[0],f=c[e];return f&&f[a]?f[a]:a},a.prototype.contentEl=function(){return this.contentEl_||this.el_},a.prototype.id=function(){return this.id_},a.prototype.name=function(){return this.name_},a.prototype.children=function(){return this.children_},a.prototype.getChildById=function(a){return this.childIndex_[a]},a.prototype.getChild=function(a){return a?(a=t["default"](a),this.childNameIndex_[a]):void 0},a.prototype.addChild=function(b){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},d=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.children_.length,e=void 0,f=void 0;if("string"==typeof b){f=t["default"](b),c||(c={}),c===!0&&(r["default"].warn("Initializing a child component with `true` is deprecated. Children should be defined in an array when possible, but if necessary use an object instead of `true`."),c={});var g=c.componentClass||f;c.name=f;var h=a.getComponent(g);if(!h)throw new Error("Component "+g+" does not exist");if("function"!=typeof h)return null;e=new h(this.player_||this,c)}else e=b;if(this.children_.splice(d,0,e),"function"==typeof e.id&&(this.childIndex_[e.id()]=e),f=f||e.name&&e.name(),f&&(this.childNameIndex_[f]=e),"function"==typeof e.el&&e.el()){var i=this.contentEl().children,j=i[d]||null;this.contentEl().insertBefore(e.el(),j)}return e},a.prototype.removeChild=function(a){if("string"==typeof a&&(a=this.getChild(a)),a&&this.children_){for(var b=!1,c=this.children_.length-1;c>=0;c--)if(this.children_[c]===a){b=!0,this.children_.splice(c,1);break}if(b){this.childIndex_[a.id()]=null,this.childNameIndex_[a.name()]=null;var d=a.el();d&&d.parentNode===this.contentEl()&&this.contentEl().removeChild(a.el())}}},a.prototype.initChildren=function(){var b=this,c=this.options_.children;c&&!function(){var d=b.options_,e=function(a){var c=a.name,e=a.opts;if(void 0!==d[c]&&(e=d[c]),e!==!1){e===!0&&(e={}),e.playerOptions=b.options_.playerOptions;var f=b.addChild(c,e);f&&(b[c]=f)}},f=void 0,g=a.getComponent("Tech");f=Array.isArray(c)?c:Object.keys(c),f.concat(Object.keys(b.options_).filter(function(a){return!f.some(function(b){return"string"==typeof b?a===b:a===b.name})})).map(function(a){var d=void 0,e=void 0;return"string"==typeof a?(d=a,e=c[d]||b.options_[d]||{}):(d=a.name,e=a),{name:d,opts:e}}).filter(function(b){var c=a.getComponent(b.opts.componentClass||t["default"](b.name));return c&&!g.isTech(c)}).forEach(e)}()},a.prototype.buildCSSClass=function(){return""},a.prototype.on=function(a,b,c){var d=this;return"string"==typeof a||Array.isArray(a)?p.on(this.el_,a,l.bind(this,b)):!function(){var e=a,f=b,g=l.bind(d,c),h=function(){return d.off(e,f,g)};h.guid=g.guid,d.on("dispose",h);var i=function(){return d.off("dispose",h)};i.guid=g.guid,a.nodeName?(p.on(e,f,g),p.on(e,"dispose",i)):"function"==typeof a.on&&(e.on(f,g),e.on("dispose",i))}(),this},a.prototype.off=function(a,b,c){if(!a||"string"==typeof a||Array.isArray(a))p.off(this.el_,a,b);else{var d=a,e=b,f=l.bind(this,c);this.off("dispose",f),a.nodeName?(p.off(d,e,f),p.off(d,"dispose",f)):(d.off(e,f),d.off("dispose",f))}return this},a.prototype.one=function(a,b,c){var d=this,e=arguments;return"string"==typeof a||Array.isArray(a)?p.one(this.el_,a,l.bind(this,b)):!function(){var f=a,g=b,h=l.bind(d,c),i=function j(){d.off(f,g,j),h.apply(null,e)};i.guid=h.guid,d.on(f,g,i)}(),this},a.prototype.trigger=function(a,b){return p.trigger(this.el_,a,b),this},a.prototype.ready=function(a){var b=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return a&&(this.isReady_?b?a.call(this):this.setTimeout(a,1):(this.readyQueue_=this.readyQueue_||[],this.readyQueue_.push(a))),this},a.prototype.triggerReady=function(){this.isReady_=!0,this.setTimeout(function(){var a=this.readyQueue_;this.readyQueue_=[],a&&a.length>0&&a.forEach(function(a){a.call(this)},this),this.trigger("ready")},1)},a.prototype.$=function(a,b){return j.$(a,b||this.contentEl())},a.prototype.$$=function(a,b){return j.$$(a,b||this.contentEl())},a.prototype.hasClass=function(a){return j.hasElClass(this.el_,a)},a.prototype.addClass=function(a){return j.addElClass(this.el_,a),this},a.prototype.removeClass=function(a){return j.removeElClass(this.el_,a),this},a.prototype.toggleClass=function(a,b){return j.toggleElClass(this.el_,a,b),this},a.prototype.show=function(){return this.removeClass("vjs-hidden"),this},a.prototype.hide=function(){return this.addClass("vjs-hidden"),this},a.prototype.lockShowing=function(){return this.addClass("vjs-lock-showing"),this},a.prototype.unlockShowing=function(){return this.removeClass("vjs-lock-showing"),this},a.prototype.getAttribute=function(a){return j.getAttribute(this.el_,a)},a.prototype.setAttribute=function(a,b){return j.setAttribute(this.el_,a,b),this},a.prototype.removeAttribute=function(a){return j.removeAttribute(this.el_,a),this},a.prototype.width=function(a,b){return this.dimension("width",a,b)},a.prototype.height=function(a,b){return this.dimension("height",a,b)},a.prototype.dimensions=function(a,b){return this.width(a,!0).height(b)},a.prototype.dimension=function(a,b,c){if(void 0!==b)return null!==b&&b===b||(b=0),-1!==(""+b).indexOf("%")||-1!==(""+b).indexOf("px")?this.el_.style[a]=b:"auto"===b?this.el_.style[a]="":this.el_.style[a]=b+"px",c||this.trigger("resize"),this;if(!this.el_)return 0;var d=this.el_.style[a],e=d.indexOf("px");return-1!==e?parseInt(d.slice(0,e),10):parseInt(this.el_["offset"+t["default"](a)],10)},a.prototype.currentDimension=function(a){var b=0;if("width"!==a&&"height"!==a)throw new Error("currentDimension only accepts width or height value");if("function"==typeof h["default"].getComputedStyle){var c=h["default"].getComputedStyle(this.el_);b=c.getPropertyValue(a)||c[a]}if(b=parseFloat(b),0===b){var d="offset"+t["default"](a);b=this.el_[d]}return b},a.prototype.currentDimensions=function(){return{width:this.currentDimension("width"),height:this.currentDimension("height")}},a.prototype.currentWidth=function(){return this.currentDimension("width")},a.prototype.currentHeight=function(){return this.currentDimension("height")},a.prototype.emitTapEvents=function(){var a=0,b=null,c=10,d=200,e=void 0;this.on("touchstart",function(c){1===c.touches.length&&(b={pageX:c.touches[0].pageX,pageY:c.touches[0].pageY},a=(new Date).getTime(),e=!0)}),this.on("touchmove",function(a){if(a.touches.length>1)e=!1;else if(b){var d=a.touches[0].pageX-b.pageX,f=a.touches[0].pageY-b.pageY,g=Math.sqrt(d*d+f*f);g>c&&(e=!1)}});var f=function(){e=!1};this.on("touchleave",f),this.on("touchcancel",f),this.on("touchend",function(c){if(b=null,e===!0){var f=(new Date).getTime()-a;d>f&&(c.preventDefault(),this.trigger("tap"))}})},a.prototype.enableTouchActivity=function(){if(this.player()&&this.player().reportUserActivity){var a=l.bind(this.player(),this.player().reportUserActivity),b=void 0;this.on("touchstart",function(){a(),this.clearInterval(b),b=this.setInterval(a,250)});var c=function(c){a(),this.clearInterval(b)};this.on("touchmove",a),this.on("touchend",c),this.on("touchcancel",c)}},a.prototype.setTimeout=function(a,b){a=l.bind(this,a);var c=h["default"].setTimeout(a,b),d=function(){this.clearTimeout(c)};return d.guid="vjs-timeout-"+c,this.on("dispose",d),c},a.prototype.clearTimeout=function(a){h["default"].clearTimeout(a);var b=function(){};return b.guid="vjs-timeout-"+a,this.off("dispose",b),a},a.prototype.setInterval=function(a,b){a=l.bind(this,a);var c=h["default"].setInterval(a,b),d=function(){this.clearInterval(c)};return d.guid="vjs-interval-"+c,this.on("dispose",d),c},a.prototype.clearInterval=function(a){h["default"].clearInterval(a);var b=function(){};return b.guid="vjs-interval-"+a,this.off("dispose",b),a},a.registerComponent=function(b,c){return b?(b=t["default"](b),a.components_||(a.components_={}),a.components_[b]=c,c):void 0},a.getComponent=function(b){return b?(b=t["default"](b),a.components_&&a.components_[b]?a.components_[b]:h["default"]&&h["default"].videojs&&h["default"].videojs[b]?(r["default"].warn("The "+b+" component was added to the videojs object when it should be registered using videojs.registerComponent(name, component)"),h["default"].videojs[b]):void 0):void 0},a.extend=function(b){b=b||{},r["default"].warn("Component.extend({}) has been deprecated, use videojs.extend(Component, {}) instead");var c=b.init||b.init||this.prototype.init||this.prototype.init||function(){},d=function(){c.apply(this,arguments)};d.prototype=Object.create(this.prototype),d.prototype.constructor=d,d.extend=a.extend;for(var e in b)b.hasOwnProperty(e)&&(d.prototype[e]=b[e]);return d},a}();w.registerComponent("Component",w),c["default"]=w},{81:81,82:82,83:83,85:85,86:86,87:87,91:91,95:95}],6:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function g(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var h=a(36),i=d(h),j=a(5),k=d(j),l=a(7),m=d(l),n=function(a){function b(c){var d=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e(this,b),d.tracks=c.audioTracks&&c.audioTracks();var g=f(this,a.call(this,c,d));return g.el_.setAttribute("aria-label","Audio Menu"),g}return g(b,a),b.prototype.buildCSSClass=function(){return"vjs-audio-button "+a.prototype.buildCSSClass.call(this)},b.prototype.createItems=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],b=this.player_.audioTracks&&this.player_.audioTracks();if(!b)return a;for(var c=0;c<b.length;c++){var d=b[c];a.push(new m["default"](this.player_,{track:d,selectable:!0}))}return a},b}(i["default"]);n.prototype.controlText_="Audio Track",k["default"].registerComponent("AudioTrackButton",n),c["default"]=n},{36:36,5:5,7:7}],7:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i=a(48),j=e(i),k=a(5),l=e(k),m=a(83),n=d(m),o=function(a){function b(c,d){f(this,b);var e=d.track,h=c.audioTracks();d.label=e.label||e.language||"Unknown",d.selected=e.enabled;var i=g(this,a.call(this,c,d));return i.track=e,h&&!function(){var a=n.bind(i,i.handleTracksChange);h.addEventListener("change",a),i.on("dispose",function(){h.removeEventListener("change",a)})}(),i}return h(b,a),b.prototype.handleClick=function(b){var c=this.player_.audioTracks();if(a.prototype.handleClick.call(this,b),c)for(var d=0;d<c.length;d++){var e=c[d];e.enabled=e===this.track}},b.prototype.handleTracksChange=function(a){this.selected(this.track.enabled)},b}(j["default"]);l["default"].registerComponent("AudioTrackMenuItem",o),c["default"]=o},{48:48,5:5,83:83}],8:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function g(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var h=a(5),i=d(h);a(12),a(32),a(33),a(35),a(34),a(10),a(18),a(9),a(38),a(40),a(11),a(25),a(27),a(29),a(24),a(6),a(13),a(21);var j=function(a){function b(){return e(this,b),f(this,a.apply(this,arguments))}return g(b,a),b.prototype.createEl=function(){return a.prototype.createEl.call(this,"div",{className:"vjs-control-bar",dir:"ltr"},{role:"group"})},b}(i["default"]);j.prototype.options_={children:["playToggle","volumeMenuButton","currentTimeDisplay","timeDivider","durationDisplay","progressControl","liveDisplay","remainingTimeDisplay","customControlSpacer","playbackRateMenuButton","chaptersButton","descriptionsButton","subtitlesButton","captionsButton","audioTrackButton","fullscreenToggle"]},i["default"].registerComponent("ControlBar",j),c["default"]=j},{10:10,11:11,12:12,13:13,18:18,21:21,24:24,25:25,27:27,29:29,32:32,33:33,34:34,35:35,38:38,40:40,5:5,6:6,9:9}],9:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function g(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var h=a(2),i=d(h),j=a(5),k=d(j),l=function(a){function b(c,d){e(this,b);var g=f(this,a.call(this,c,d));return g.on(c,"fullscreenchange",g.handleFullscreenChange),g}return g(b,a),b.prototype.buildCSSClass=function(){return"vjs-fullscreen-control "+a.prototype.buildCSSClass.call(this)},b.prototype.handleFullscreenChange=function(){this.player_.isFullscreen()?this.controlText("Non-Fullscreen"):this.controlText("Fullscreen")},b.prototype.handleClick=function(){this.player_.isFullscreen()?this.player_.exitFullscreen():this.player_.requestFullscreen()},b}(i["default"]);l.prototype.controlText_="Fullscreen",k["default"].registerComponent("FullscreenToggle",l),c["default"]=l},{2:2,5:5}],10:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i=a(5),j=e(i),k=a(81),l=d(k),m=function(a){function b(c,d){f(this,b);var e=g(this,a.call(this,c,d));return e.updateShowing(),e.on(e.player(),"durationchange",e.updateShowing),e}return h(b,a),b.prototype.createEl=function(){var b=a.prototype.createEl.call(this,"div",{className:"vjs-live-control vjs-control"});return this.contentEl_=l.createEl("div",{className:"vjs-live-display",innerHTML:'<span class="vjs-control-text">'+this.localize("Stream Type")+"</span>"+this.localize("LIVE")},{"aria-live":"off"}),b.appendChild(this.contentEl_),b},b.prototype.updateShowing=function(){this.player().duration()===1/0?this.show():this.hide()},b}(j["default"]);j["default"].registerComponent("LiveDisplay",m),c["default"]=m},{5:5,81:81}],11:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i=a(2),j=e(i),k=a(5),l=e(k),m=a(81),n=d(m),o=function(a){function b(c,d){f(this,b);var e=g(this,a.call(this,c,d));return e.on(c,"volumechange",e.update),c.tech_&&c.tech_.featuresVolumeControl===!1&&e.addClass("vjs-hidden"),e.on(c,"loadstart",function(){this.update(),c.tech_.featuresVolumeControl===!1?this.addClass("vjs-hidden"):this.removeClass("vjs-hidden")}),e}return h(b,a),b.prototype.buildCSSClass=function(){return"vjs-mute-control "+a.prototype.buildCSSClass.call(this)},b.prototype.handleClick=function(){this.player_.muted(!this.player_.muted())},b.prototype.update=function(){var a=this.player_.volume(),b=3;0===a||this.player_.muted()?b=0:.33>a?b=1:.67>a&&(b=2);var c=this.player_.muted()?"Unmute":"Mute";this.controlText()!==c&&this.controlText(c);for(var d=0;4>d;d++)n.removeElClass(this.el_,"vjs-vol-"+d);n.addElClass(this.el_,"vjs-vol-"+b)},b}(j["default"]);o.prototype.controlText_="Mute",l["default"].registerComponent("MuteToggle",o),c["default"]=o},{2:2,5:5,81:81}],12:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function g(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var h=a(2),i=d(h),j=a(5),k=d(j),l=function(a){function b(c,d){e(this,b);var g=f(this,a.call(this,c,d));return g.on(c,"play",g.handlePlay),g.on(c,"pause",g.handlePause),g}return g(b,a),b.prototype.buildCSSClass=function(){return"vjs-play-control "+a.prototype.buildCSSClass.call(this)},b.prototype.handleClick=function(){this.player_.paused()?this.player_.play():this.player_.pause()},b.prototype.handlePlay=function(){this.removeClass("vjs-paused"),this.addClass("vjs-playing"),this.controlText("Pause")},b.prototype.handlePause=function(){this.removeClass("vjs-playing"),this.addClass("vjs-paused"),this.controlText("Play")},b}(i["default"]);l.prototype.controlText_="Play",k["default"].registerComponent("PlayToggle",l),c["default"]=l},{2:2,5:5}],13:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i=a(47),j=e(i),k=a(49),l=e(k),m=a(14),n=e(m),o=a(5),p=e(o),q=a(81),r=d(q),s=function(a){function b(c,d){f(this,b);var e=g(this,a.call(this,c,d));return e.updateVisibility(),e.updateLabel(),e.on(c,"loadstart",e.updateVisibility),e.on(c,"ratechange",e.updateLabel),e}return h(b,a),b.prototype.createEl=function(){var b=a.prototype.createEl.call(this);return this.labelEl_=r.createEl("div",{className:"vjs-playback-rate-value",innerHTML:1}),b.appendChild(this.labelEl_),b},b.prototype.buildCSSClass=function(){return"vjs-playback-rate "+a.prototype.buildCSSClass.call(this)},b.prototype.createMenu=function(){var a=new l["default"](this.player()),b=this.playbackRates();if(b)for(var c=b.length-1;c>=0;c--)a.addChild(new n["default"](this.player(),{rate:b[c]+"x"}));return a},b.prototype.updateARIAAttributes=function(){this.el().setAttribute("aria-valuenow",this.player().playbackRate())},b.prototype.handleClick=function(){for(var a=this.player().playbackRate(),b=this.playbackRates(),c=b[0],d=0;d<b.length;d++)if(b[d]>a){c=b[d];break}this.player().playbackRate(c)},b.prototype.playbackRates=function(){return this.options_.playbackRates||this.options_.playerOptions&&this.options_.playerOptions.playbackRates},b.prototype.playbackRateSupported=function(){
return this.player().tech_&&this.player().tech_.featuresPlaybackRate&&this.playbackRates()&&this.playbackRates().length>0},b.prototype.updateVisibility=function(){this.playbackRateSupported()?this.removeClass("vjs-hidden"):this.addClass("vjs-hidden")},b.prototype.updateLabel=function(){this.playbackRateSupported()&&(this.labelEl_.innerHTML=this.player().playbackRate()+"x")},b}(j["default"]);s.prototype.controlText_="Playback Rate",p["default"].registerComponent("PlaybackRateMenuButton",s),c["default"]=s},{14:14,47:47,49:49,5:5,81:81}],14:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function g(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var h=a(48),i=d(h),j=a(5),k=d(j),l=function(a){function b(c,d){e(this,b);var g=d.rate,h=parseFloat(g,10);d.label=g,d.selected=1===h;var i=f(this,a.call(this,c,d));return i.label=g,i.rate=h,i.on(c,"ratechange",i.update),i}return g(b,a),b.prototype.handleClick=function(){a.prototype.handleClick.call(this),this.player().playbackRate(this.rate)},b.prototype.update=function(){this.selected(this.player().playbackRate()===this.rate)},b}(i["default"]);l.prototype.contentElType="button",k["default"].registerComponent("PlaybackRateMenuItem",l),c["default"]=l},{48:48,5:5}],15:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i=a(5),j=e(i),k=a(81),l=d(k),m=function(a){function b(c,d){f(this,b);var e=g(this,a.call(this,c,d));return e.partEls_=[],e.on(c,"progress",e.update),e}return h(b,a),b.prototype.createEl=function(){return a.prototype.createEl.call(this,"div",{className:"vjs-load-progress",innerHTML:'<span class="vjs-control-text"><span>'+this.localize("Loaded")+"</span>: 0%</span>"})},b.prototype.update=function(){var a=this.player_.buffered(),b=this.player_.duration(),c=this.player_.bufferedEnd(),d=this.partEls_,e=function(a,b){var c=a/b||0;return 100*(c>=1?1:c)+"%"};this.el_.style.width=e(c,b);for(var f=0;f<a.length;f++){var g=a.start(f),h=a.end(f),i=d[f];i||(i=this.el_.appendChild(l.createEl()),d[f]=i),i.style.left=e(g,c),i.style.width=e(h-g,c)}for(var j=d.length;j>a.length;j--)this.el_.removeChild(d[j-1]);d.length=a.length},b}(j["default"]);j["default"].registerComponent("LoadProgressBar",m),c["default"]=m},{5:5,81:81}],16:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i=a(5),j=e(i),k=a(81),l=d(k),m=a(83),n=d(m),o=a(84),p=e(o),q=a(100),r=e(q),s=a(80),t=e(s),u=function(a){function b(c,d){f(this,b);var e=g(this,a.call(this,c,d));return d.playerOptions&&d.playerOptions.controlBar&&d.playerOptions.controlBar.progressControl&&d.playerOptions.controlBar.progressControl.keepTooltipsInside&&(e.keepTooltipsInside=d.playerOptions.controlBar.progressControl.keepTooltipsInside),e.keepTooltipsInside&&(e.tooltip=l.createEl("div",{className:"vjs-time-tooltip"}),e.el().appendChild(e.tooltip),e.addClass("vjs-keep-tooltips-inside")),e.update(0,0),c.on("ready",function(){e.on(c.controlBar.progressControl.el(),"mousemove",r["default"](n.bind(e,e.handleMouseMove),25))}),e}return h(b,a),b.prototype.createEl=function(){return a.prototype.createEl.call(this,"div",{className:"vjs-mouse-display"})},b.prototype.handleMouseMove=function(a){var b=this.player_.duration(),c=this.calculateDistance(a)*b,d=a.pageX-l.findElPosition(this.el().parentNode).left;this.update(c,d)},b.prototype.update=function(a,b){var c=p["default"](a,this.player_.duration());if(this.el().style.left=b+"px",this.el().setAttribute("data-current-time",c),this.keepTooltipsInside){var d=this.clampPosition_(b),e=b-d+1,f=parseFloat(t["default"](this.tooltip,"width")),g=f/2;this.tooltip.innerHTML=c,this.tooltip.style.right="-"+(g-e)+"px"}},b.prototype.calculateDistance=function(a){return l.getPointerPosition(this.el().parentNode,a).x},b.prototype.clampPosition_=function(a){if(!this.keepTooltipsInside)return a;var b=parseFloat(t["default"](this.player().el(),"width")),c=parseFloat(t["default"](this.tooltip,"width")),d=c/2,e=a;return d>a?e=Math.ceil(d):a>b-d&&(e=Math.floor(b-d)),e},b}(j["default"]);j["default"].registerComponent("MouseTimeDisplay",u),c["default"]=u},{100:100,5:5,80:80,81:81,83:83,84:84}],17:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i=a(5),j=e(i),k=a(83),l=d(k),m=a(84),n=e(m),o=function(a){function b(c,d){f(this,b);var e=g(this,a.call(this,c,d));return e.updateDataAttr(),e.on(c,"timeupdate",e.updateDataAttr),c.ready(l.bind(e,e.updateDataAttr)),d.playerOptions&&d.playerOptions.controlBar&&d.playerOptions.controlBar.progressControl&&d.playerOptions.controlBar.progressControl.keepTooltipsInside&&(e.keepTooltipsInside=d.playerOptions.controlBar.progressControl.keepTooltipsInside),e.keepTooltipsInside&&e.addClass("vjs-keep-tooltips-inside"),e}return h(b,a),b.prototype.createEl=function(){return a.prototype.createEl.call(this,"div",{className:"vjs-play-progress vjs-slider-bar",innerHTML:'<span class="vjs-control-text"><span>'+this.localize("Progress")+"</span>: 0%</span>"})},b.prototype.updateDataAttr=function(){var a=this.player_.scrubbing()?this.player_.getCache().currentTime:this.player_.currentTime();this.el_.setAttribute("data-current-time",n["default"](a,this.player_.duration()))},b}(j["default"]);j["default"].registerComponent("PlayProgressBar",o),c["default"]=o},{5:5,83:83,84:84}],18:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function g(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var h=a(5),i=d(h);a(19),a(16);var j=function(a){function b(){return e(this,b),f(this,a.apply(this,arguments))}return g(b,a),b.prototype.createEl=function(){return a.prototype.createEl.call(this,"div",{className:"vjs-progress-control vjs-control"})},b}(i["default"]);j.prototype.options_={children:["seekBar"]},i["default"].registerComponent("ProgressControl",j),c["default"]=j},{16:16,19:19,5:5}],19:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i=a(57),j=e(i),k=a(5),l=e(k),m=a(83),n=d(m),o=a(84),p=e(o),q=a(80),r=e(q);a(15),a(17),a(20);var s=function(a){function b(c,d){f(this,b);var e=g(this,a.call(this,c,d));return e.on(c,"timeupdate",e.updateProgress),e.on(c,"ended",e.updateProgress),c.ready(n.bind(e,e.updateProgress)),d.playerOptions&&d.playerOptions.controlBar&&d.playerOptions.controlBar.progressControl&&d.playerOptions.controlBar.progressControl.keepTooltipsInside&&(e.keepTooltipsInside=d.playerOptions.controlBar.progressControl.keepTooltipsInside),e.keepTooltipsInside&&(e.tooltipProgressBar=e.addChild("TooltipProgressBar")),e}return h(b,a),b.prototype.createEl=function(){return a.prototype.createEl.call(this,"div",{className:"vjs-progress-holder"},{"aria-label":"progress bar"})},b.prototype.updateProgress=function(){if(this.updateAriaAttributes(this.el_),this.keepTooltipsInside){this.updateAriaAttributes(this.tooltipProgressBar.el_),this.tooltipProgressBar.el_.style.width=this.bar.el_.style.width;var a=parseFloat(r["default"](this.player().el(),"width")),b=parseFloat(r["default"](this.tooltipProgressBar.tooltip,"width")),c=this.tooltipProgressBar.el().style;c.maxWidth=Math.floor(a-b/2)+"px",c.minWidth=Math.ceil(b/2)+"px",c.right="-"+b/2+"px"}},b.prototype.updateAriaAttributes=function(a){var b=this.player_.scrubbing()?this.player_.getCache().currentTime:this.player_.currentTime();a.setAttribute("aria-valuenow",(100*this.getPercent()).toFixed(2)),a.setAttribute("aria-valuetext",p["default"](b,this.player_.duration()))},b.prototype.getPercent=function(){var a=this.player_.currentTime()/this.player_.duration();return a>=1?1:a},b.prototype.handleMouseDown=function(b){a.prototype.handleMouseDown.call(this,b),this.player_.scrubbing(!0),this.videoWasPlaying=!this.player_.paused(),this.player_.pause()},b.prototype.handleMouseMove=function(a){var b=this.calculateDistance(a)*this.player_.duration();b===this.player_.duration()&&(b-=.1),this.player_.currentTime(b)},b.prototype.handleMouseUp=function(b){a.prototype.handleMouseUp.call(this,b),this.player_.scrubbing(!1),this.videoWasPlaying&&this.player_.play()},b.prototype.stepForward=function(){this.player_.currentTime(this.player_.currentTime()+5)},b.prototype.stepBack=function(){this.player_.currentTime(this.player_.currentTime()-5)},b}(j["default"]);s.prototype.options_={children:["loadProgressBar","mouseTimeDisplay","playProgressBar"],barName:"playProgressBar"},s.prototype.playerEvent="timeupdate",l["default"].registerComponent("SeekBar",s),c["default"]=s},{15:15,17:17,20:20,5:5,57:57,80:80,83:83,84:84}],20:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i=a(5),j=e(i),k=a(83),l=d(k),m=a(84),n=e(m),o=function(a){function b(c,d){f(this,b);var e=g(this,a.call(this,c,d));return e.updateDataAttr(),e.on(c,"timeupdate",e.updateDataAttr),c.ready(l.bind(e,e.updateDataAttr)),e}return h(b,a),b.prototype.createEl=function(){var b=a.prototype.createEl.call(this,"div",{className:"vjs-tooltip-progress-bar vjs-slider-bar",innerHTML:'<div class="vjs-time-tooltip"></div>\n        <span class="vjs-control-text"><span>'+this.localize("Progress")+"</span>: 0%</span>"});return this.tooltip=b.querySelector(".vjs-time-tooltip"),b},b.prototype.updateDataAttr=function(){var a=this.player_.scrubbing()?this.player_.getCache().currentTime:this.player_.currentTime(),b=n["default"](a,this.player_.duration());this.el_.setAttribute("data-current-time",b),this.tooltip.innerHTML=b},b}(j["default"]);j["default"].registerComponent("TooltipProgressBar",o),c["default"]=o},{5:5,83:83,84:84}],21:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function g(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var h=a(22),i=d(h),j=a(5),k=d(j),l=function(a){function b(){return e(this,b),f(this,a.apply(this,arguments))}return g(b,a),b.prototype.buildCSSClass=function(){return"vjs-custom-control-spacer "+a.prototype.buildCSSClass.call(this)},b.prototype.createEl=function(){var b=a.prototype.createEl.call(this,{className:this.buildCSSClass()});return b.innerHTML="&nbsp;",b},b}(i["default"]);k["default"].registerComponent("CustomControlSpacer",l),c["default"]=l},{22:22,5:5}],22:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function g(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var h=a(5),i=d(h),j=function(a){function b(){return e(this,b),f(this,a.apply(this,arguments))}return g(b,a),b.prototype.buildCSSClass=function(){return"vjs-spacer "+a.prototype.buildCSSClass.call(this)},b.prototype.createEl=function(){return a.prototype.createEl.call(this,"div",{className:this.buildCSSClass()})},b}(i["default"]);i["default"].registerComponent("Spacer",j),c["default"]=j},{5:5}],23:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function g(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var h=a(31),i=d(h),j=a(5),k=d(j),l=function(a){function b(c,d){e(this,b),d.track={player:c,kind:d.kind,label:d.kind+" settings",selectable:!1,"default":!1,mode:"disabled"},d.selectable=!1;var g=f(this,a.call(this,c,d));return g.addClass("vjs-texttrack-settings"),g.controlText(", opens "+d.kind+" settings dialog"),g}return g(b,a),b.prototype.handleClick=function(){this.player().getChild("textTrackSettings").show(),this.player().getChild("textTrackSettings").el_.focus()},b}(i["default"]);k["default"].registerComponent("CaptionSettingsMenuItem",l),c["default"]=l},{31:31,5:5}],24:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function g(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var h=a(30),i=d(h),j=a(5),k=d(j),l=a(23),m=d(l),n=function(a){function b(c,d,g){e(this,b);var h=f(this,a.call(this,c,d,g));return h.el_.setAttribute("aria-label","Captions Menu"),h}return g(b,a),b.prototype.buildCSSClass=function(){return"vjs-captions-button "+a.prototype.buildCSSClass.call(this)},b.prototype.update=function(){var b=2;a.prototype.update.call(this),this.player().tech_&&this.player().tech_.featuresNativeTextTracks&&(b=1),this.items&&this.items.length>b?this.show():this.hide()},b.prototype.createItems=function(){var b=[];return this.player().tech_&&this.player().tech_.featuresNativeTextTracks||b.push(new m["default"](this.player_,{kind:this.kind_})),a.prototype.createItems.call(this,b)},b}(i["default"]);n.prototype.kind_="captions",n.prototype.controlText_="Captions",k["default"].registerComponent("CaptionsButton",n),c["default"]=n},{23:23,30:30,5:5}],25:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i=a(30),j=e(i),k=a(5),l=e(k),m=a(31),n=e(m),o=a(26),p=e(o),q=a(49),r=e(q),s=a(81),t=d(s),u=a(91),v=e(u),w=function(a){function b(c,d,e){f(this,b);var h=g(this,a.call(this,c,d,e));return h.el_.setAttribute("aria-label","Chapters Menu"),h}return h(b,a),b.prototype.buildCSSClass=function(){return"vjs-chapters-button "+a.prototype.buildCSSClass.call(this)},b.prototype.createItems=function(){var a=[],b=this.player_.textTracks();if(!b)return a;for(var c=0;c<b.length;c++){var d=b[c];d.kind===this.kind_&&a.push(new n["default"](this.player_,{track:d}))}return a},b.prototype.createMenu=function(){for(var a=this,b=this.player_.textTracks()||[],c=void 0,d=this.items||[],e=b.length-1;e>=0;e--){var f=b[e];if(f.kind===this.kind_){c=f;break}}var g=this.menu;if(void 0===g){g=new r["default"](this.player_);var h=t.createEl("li",{className:"vjs-menu-title",innerHTML:v["default"](this.kind_),tabIndex:-1});g.children_.unshift(h),t.insertElFirst(h,g.contentEl())}else d.forEach(function(a){return g.removeChild(a)}),d=[];if(c&&(null===c.cues||void 0===c.cues)){c.mode="hidden";var i=this.player_.remoteTextTrackEls().getTrackElementByTrack_(c);i&&i.addEventListener("load",function(b){return a.update()})}if(c&&c.cues&&c.cues.length>0)for(var j=c.cues,k=0,l=j.length;l>k;k++){var m=j[k],n=new p["default"](this.player_,{cue:m,track:c});d.push(n),g.addChild(n)}return d.length>0&&this.show(),this.items=d,g},b}(j["default"]);w.prototype.kind_="chapters",w.prototype.controlText_="Chapters",l["default"].registerComponent("ChaptersButton",w),c["default"]=w},{26:26,30:30,31:31,49:49,5:5,81:81,91:91}],26:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i=a(48),j=e(i),k=a(5),l=e(k),m=a(83),n=d(m),o=function(a){function b(c,d){f(this,b);var e=d.track,h=d.cue,i=c.currentTime();d.label=h.text,d.selected=h.startTime<=i&&i<h.endTime;var j=g(this,a.call(this,c,d));return j.track=e,j.cue=h,e.addEventListener("cuechange",n.bind(j,j.update)),j}return h(b,a),b.prototype.handleClick=function(){a.prototype.handleClick.call(this),this.player_.currentTime(this.cue.startTime),this.update(this.cue.startTime)},b.prototype.update=function(){var a=this.cue,b=this.player_.currentTime();this.selected(a.startTime<=b&&b<a.endTime)},b}(j["default"]);l["default"].registerComponent("ChaptersTrackMenuItem",o),c["default"]=o},{48:48,5:5,83:83}],27:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i=a(30),j=e(i),k=a(5),l=e(k),m=a(83),n=d(m),o=function(a){function b(c,d,e){f(this,b);var h=g(this,a.call(this,c,d,e));h.el_.setAttribute("aria-label","Descriptions Menu");var i=c.textTracks();return i&&!function(){var a=n.bind(h,h.handleTracksChange);i.addEventListener("change",a),h.on("dispose",function(){i.removeEventListener("change",a)})}(),h}return h(b,a),b.prototype.handleTracksChange=function(a){for(var b=this.player().textTracks(),c=!1,d=0,e=b.length;e>d;d++){var f=b[d];if(f.kind!==this.kind_&&"showing"===f.mode){c=!0;break}}c?this.disable():this.enable()},b.prototype.buildCSSClass=function(){return"vjs-descriptions-button "+a.prototype.buildCSSClass.call(this)},b}(j["default"]);o.prototype.kind_="descriptions",o.prototype.controlText_="Descriptions",l["default"].registerComponent("DescriptionsButton",o),c["default"]=o},{30:30,5:5,83:83}],28:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function g(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var h=a(31),i=d(h),j=a(5),k=d(j),l=function(a){function b(c,d){e(this,b),d.track={player:c,kind:d.kind,label:d.kind+" off","default":!1,mode:"disabled"},d.selectable=!0;var g=f(this,a.call(this,c,d));return g.selected(!0),g}return g(b,a),b.prototype.handleTracksChange=function(a){for(var b=this.player().textTracks(),c=!0,d=0,e=b.length;e>d;d++){var f=b[d];if(f.kind===this.track.kind&&"showing"===f.mode){c=!1;break}}this.selected(c)},b}(i["default"]);k["default"].registerComponent("OffTextTrackMenuItem",l),c["default"]=l},{31:31,5:5}],29:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function g(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var h=a(30),i=d(h),j=a(5),k=d(j),l=function(a){function b(c,d,g){e(this,b);var h=f(this,a.call(this,c,d,g));return h.el_.setAttribute("aria-label","Subtitles Menu"),h}return g(b,a),b.prototype.buildCSSClass=function(){return"vjs-subtitles-button "+a.prototype.buildCSSClass.call(this)},b}(i["default"]);l.prototype.kind_="subtitles",l.prototype.controlText_="Subtitles",k["default"].registerComponent("SubtitlesButton",l),c["default"]=l},{30:30,5:5}],30:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function g(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var h=a(36),i=d(h),j=a(5),k=d(j),l=a(31),m=d(l),n=a(28),o=d(n),p=function(a){function b(c){var d=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e(this,b),d.tracks=c.textTracks(),f(this,a.call(this,c,d))}return g(b,a),b.prototype.createItems=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];a.push(new o["default"](this.player_,{kind:this.kind_}));var b=this.player_.textTracks();if(!b)return a;for(var c=0;c<b.length;c++){var d=b[c];d.kind===this.kind_&&a.push(new m["default"](this.player_,{track:d,selectable:!0}))}return a},b}(i["default"]);k["default"].registerComponent("TextTrackButton",p),c["default"]=p},{28:28,31:31,36:36,5:5}],31:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},j=a(48),k=e(j),l=a(5),m=e(l),n=a(83),o=d(n),p=a(95),q=e(p),r=a(94),s=e(r),t=function(a){function b(c,d){f(this,b);var e=d.track,h=c.textTracks();d.label=e.label||e.language||"Unknown",d.selected=e["default"]||"showing"===e.mode;var j=g(this,a.call(this,c,d));return j.track=e,h&&!function(){var a=o.bind(j,j.handleTracksChange);h.addEventListener("change",a),j.on("dispose",function(){h.removeEventListener("change",a)})}(),h&&void 0===h.onchange&&!function(){var a=void 0;j.on(["tap","click"],function(){if("object"!==i(q["default"].Event))try{a=new q["default"].Event("change")}catch(b){}a||(a=s["default"].createEvent("Event"),a.initEvent("change",!0,!0)),h.dispatchEvent(a)})}(),j}return h(b,a),b.prototype.handleClick=function(b){var c=this.track.kind,d=this.player_.textTracks();if(a.prototype.handleClick.call(this,b),d)for(var e=0;e<d.length;e++){var f=d[e];f.kind===c&&(f===this.track?f.mode="showing":f.mode="disabled")}},b.prototype.handleTracksChange=function(a){this.selected("showing"===this.track.mode)},b}(k["default"]);m["default"].registerComponent("TextTrackMenuItem",t),c["default"]=t},{48:48,5:5,83:83,94:94,95:95}],32:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i=a(5),j=e(i),k=a(81),l=d(k),m=a(84),n=e(m),o=function(a){function b(c,d){f(this,b);var e=g(this,a.call(this,c,d));return e.on(c,"timeupdate",e.updateContent),e}return h(b,a),b.prototype.createEl=function(){var b=a.prototype.createEl.call(this,"div",{className:"vjs-current-time vjs-time-control vjs-control"});return this.contentEl_=l.createEl("div",{className:"vjs-current-time-display",
innerHTML:'<span class="vjs-control-text">Current Time </span>0:00'},{"aria-live":"off"}),b.appendChild(this.contentEl_),b},b.prototype.updateContent=function(){var a=this.player_.scrubbing()?this.player_.getCache().currentTime:this.player_.currentTime(),b=this.localize("Current Time"),c=n["default"](a,this.player_.duration());c!==this.formattedTime_&&(this.formattedTime_=c,this.contentEl_.innerHTML='<span class="vjs-control-text">'+b+"</span> "+c)},b}(j["default"]);j["default"].registerComponent("CurrentTimeDisplay",o),c["default"]=o},{5:5,81:81,84:84}],33:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i=a(5),j=e(i),k=a(81),l=d(k),m=a(84),n=e(m),o=function(a){function b(c,d){f(this,b);var e=g(this,a.call(this,c,d));return e.on(c,"durationchange",e.updateContent),e.on(c,"timeupdate",e.updateContent),e.on(c,"loadedmetadata",e.updateContent),e}return h(b,a),b.prototype.createEl=function(){var b=a.prototype.createEl.call(this,"div",{className:"vjs-duration vjs-time-control vjs-control"});return this.contentEl_=l.createEl("div",{className:"vjs-duration-display",innerHTML:'<span class="vjs-control-text">'+this.localize("Duration Time")+"</span> 0:00"},{"aria-live":"off"}),b.appendChild(this.contentEl_),b},b.prototype.updateContent=function(){var a=this.player_.duration();if(a&&this.duration_!==a){this.duration_=a;var b=this.localize("Duration Time"),c=n["default"](a);this.contentEl_.innerHTML='<span class="vjs-control-text">'+b+"</span> "+c}},b}(j["default"]);j["default"].registerComponent("DurationDisplay",o),c["default"]=o},{5:5,81:81,84:84}],34:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i=a(5),j=e(i),k=a(81),l=d(k),m=a(84),n=e(m),o=function(a){function b(c,d){f(this,b);var e=g(this,a.call(this,c,d));return e.on(c,"timeupdate",e.updateContent),e.on(c,"durationchange",e.updateContent),e}return h(b,a),b.prototype.createEl=function(){var b=a.prototype.createEl.call(this,"div",{className:"vjs-remaining-time vjs-time-control vjs-control"});return this.contentEl_=l.createEl("div",{className:"vjs-remaining-time-display",innerHTML:'<span class="vjs-control-text">'+this.localize("Remaining Time")+"</span> -0:00"},{"aria-live":"off"}),b.appendChild(this.contentEl_),b},b.prototype.updateContent=function(){if(this.player_.duration()){var a=this.localize("Remaining Time"),b=n["default"](this.player_.remainingTime());b!==this.formattedTime_&&(this.formattedTime_=b,this.contentEl_.innerHTML='<span class="vjs-control-text">'+a+"</span> -"+b)}},b}(j["default"]);j["default"].registerComponent("RemainingTimeDisplay",o),c["default"]=o},{5:5,81:81,84:84}],35:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function g(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var h=a(5),i=d(h),j=function(a){function b(){return e(this,b),f(this,a.apply(this,arguments))}return g(b,a),b.prototype.createEl=function(){return a.prototype.createEl.call(this,"div",{className:"vjs-time-control vjs-time-divider",innerHTML:"<div><span>/</span></div>"})},b}(i["default"]);i["default"].registerComponent("TimeDivider",j),c["default"]=j},{5:5}],36:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i=a(47),j=e(i),k=a(5),l=e(k),m=a(83),n=d(m),o=function(a){function b(c,d){f(this,b);var e=d.tracks,h=g(this,a.call(this,c,d));if(h.items.length<=1&&h.hide(),!e)return g(h);var i=n.bind(h,h.update);return e.addEventListener("removetrack",i),e.addEventListener("addtrack",i),h.player_.on("dispose",function(){e.removeEventListener("removetrack",i),e.removeEventListener("addtrack",i)}),h}return h(b,a),b}(j["default"]);l["default"].registerComponent("TrackButton",o),c["default"]=o},{47:47,5:5,83:83}],37:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i=a(57),j=e(i),k=a(5),l=e(k),m=a(83),n=d(m);a(39);var o=function(a){function b(c,d){f(this,b);var e=g(this,a.call(this,c,d));return e.on(c,"volumechange",e.updateARIAAttributes),c.ready(n.bind(e,e.updateARIAAttributes)),e}return h(b,a),b.prototype.createEl=function(){return a.prototype.createEl.call(this,"div",{className:"vjs-volume-bar vjs-slider-bar"},{"aria-label":"volume level"})},b.prototype.handleMouseMove=function(a){this.checkMuted(),this.player_.volume(this.calculateDistance(a))},b.prototype.checkMuted=function(){this.player_.muted()&&this.player_.muted(!1)},b.prototype.getPercent=function(){return this.player_.muted()?0:this.player_.volume()},b.prototype.stepForward=function(){this.checkMuted(),this.player_.volume(this.player_.volume()+.1)},b.prototype.stepBack=function(){this.checkMuted(),this.player_.volume(this.player_.volume()-.1)},b.prototype.updateARIAAttributes=function(){var a=(100*this.player_.volume()).toFixed(2);this.el_.setAttribute("aria-valuenow",a),this.el_.setAttribute("aria-valuetext",a+"%")},b}(j["default"]);o.prototype.options_={children:["volumeLevel"],barName:"volumeLevel"},o.prototype.playerEvent="volumechange",l["default"].registerComponent("VolumeBar",o),c["default"]=o},{39:39,5:5,57:57,83:83}],38:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function g(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var h=a(5),i=d(h);a(37);var j=function(a){function b(c,d){e(this,b);var g=f(this,a.call(this,c,d));return c.tech_&&c.tech_.featuresVolumeControl===!1&&g.addClass("vjs-hidden"),g.on(c,"loadstart",function(){c.tech_.featuresVolumeControl===!1?this.addClass("vjs-hidden"):this.removeClass("vjs-hidden")}),g}return g(b,a),b.prototype.createEl=function(){return a.prototype.createEl.call(this,"div",{className:"vjs-volume-control vjs-control"})},b}(i["default"]);j.prototype.options_={children:["volumeBar"]},i["default"].registerComponent("VolumeControl",j),c["default"]=j},{37:37,5:5}],39:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function g(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var h=a(5),i=d(h),j=function(a){function b(){return e(this,b),f(this,a.apply(this,arguments))}return g(b,a),b.prototype.createEl=function(){return a.prototype.createEl.call(this,"div",{className:"vjs-volume-level",innerHTML:'<span class="vjs-control-text"></span>'})},b}(i["default"]);i["default"].registerComponent("VolumeLevel",j),c["default"]=j},{5:5}],40:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i=a(83),j=e(i),k=a(5),l=d(k),m=a(54),n=d(m),o=a(53),p=d(o),q=a(11),r=d(q),s=a(37),t=d(s),u=function(a){function b(c){function d(){c.tech_&&c.tech_.featuresVolumeControl===!1?this.addClass("vjs-hidden"):this.removeClass("vjs-hidden")}var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};f(this,b),void 0===e.inline&&(e.inline=!0),void 0===e.vertical&&(e.inline?e.vertical=!1:e.vertical=!0),e.volumeBar=e.volumeBar||{},e.volumeBar.vertical=!!e.vertical;var h=g(this,a.call(this,c,e));return h.on(c,"volumechange",h.volumeUpdate),h.on(c,"loadstart",h.volumeUpdate),d.call(h),h.on(c,"loadstart",d),h.on(h.volumeBar,["slideractive","focus"],function(){this.addClass("vjs-slider-active")}),h.on(h.volumeBar,["sliderinactive","blur"],function(){this.removeClass("vjs-slider-active")}),h.on(h.volumeBar,["focus"],function(){this.addClass("vjs-lock-showing")}),h.on(h.volumeBar,["blur"],function(){this.removeClass("vjs-lock-showing")}),h}return h(b,a),b.prototype.buildCSSClass=function(){var b="";return b=this.options_.vertical?"vjs-volume-menu-button-vertical":"vjs-volume-menu-button-horizontal","vjs-volume-menu-button "+a.prototype.buildCSSClass.call(this)+" "+b},b.prototype.createPopup=function(){var a=new n["default"](this.player_,{contentElType:"div"}),b=new t["default"](this.player_,this.options_.volumeBar);return a.addChild(b),this.menuContent=a,this.volumeBar=b,this.attachVolumeBarEvents(),a},b.prototype.handleClick=function(){r["default"].prototype.handleClick.call(this),a.prototype.handleClick.call(this)},b.prototype.attachVolumeBarEvents=function(){this.menuContent.on(["mousedown","touchdown"],j.bind(this,this.handleMouseDown))},b.prototype.handleMouseDown=function(a){this.on(["mousemove","touchmove"],j.bind(this.volumeBar,this.volumeBar.handleMouseMove)),this.on(this.el_.ownerDocument,["mouseup","touchend"],this.handleMouseUp)},b.prototype.handleMouseUp=function(a){this.off(["mousemove","touchmove"],j.bind(this.volumeBar,this.volumeBar.handleMouseMove))},b}(p["default"]);u.prototype.volumeUpdate=r["default"].prototype.update,u.prototype.controlText_="Mute",l["default"].registerComponent("VolumeMenuButton",u),c["default"]=u},{11:11,37:37,5:5,53:53,54:54,83:83}],41:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function g(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var h=a(5),i=d(h),j=a(50),k=d(j),l=a(87),m=d(l),n=function(a){function b(c,d){e(this,b);var g=f(this,a.call(this,c,d));return g.on(c,"error",g.open),g}return g(b,a),b.prototype.buildCSSClass=function(){return"vjs-error-display "+a.prototype.buildCSSClass.call(this)},b.prototype.content=function(){var a=this.player().error();return a?this.localize(a.message):""},b}(k["default"]);n.prototype.options_=m["default"](k["default"].prototype.options_,{fillAlways:!0,temporary:!1,uncloseable:!0}),i["default"].registerComponent("ErrorDisplay",n),c["default"]=n},{5:5,50:50,87:87}],42:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}c.__esModule=!0;var e=a(82),f=d(e),g=function(){};g.prototype.allowedEvents_={},g.prototype.on=function(a,b){var c=this.addEventListener;this.addEventListener=function(){},f.on(this,a,b),this.addEventListener=c},g.prototype.addEventListener=g.prototype.on,g.prototype.off=function(a,b){f.off(this,a,b)},g.prototype.removeEventListener=g.prototype.off,g.prototype.one=function(a,b){var c=this.addEventListener;this.addEventListener=function(){},f.one(this,a,b),this.addEventListener=c},g.prototype.trigger=function(a){var b=a.type||a;"string"==typeof a&&(a={type:b}),a=f.fixEvent(a),this.allowedEvents_[b]&&this["on"+b]&&this["on"+b](a),f.trigger(this,a)},g.prototype.dispatchEvent=g.prototype.trigger,c["default"]=g},{82:82}],43:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}c.__esModule=!0;var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},f=a(86),g=d(f),h=function(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof b?"undefined":e(b)));a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(a.super_=b)},i=function(a){var b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=function(){a.apply(this,arguments)},d={};"object"===("undefined"==typeof b?"undefined":e(b))?("function"==typeof b.init&&(g["default"].warn("Constructor logic via init() is deprecated; please use constructor() instead."),b.constructor=b.init),b.constructor!==Object.prototype.constructor&&(c=b.constructor),d=b):"function"==typeof b&&(c=b),h(c,a);for(var f in d)d.hasOwnProperty(f)&&(c.prototype[f]=d[f]);return c};c["default"]=i},{86:86}],44:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}c.__esModule=!0;for(var e=a(94),f=d(e),g={},h=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],i=h[0],j=void 0,k=0;k<h.length;k++)if(h[k][1]in f["default"]){j=h[k];break}if(j)for(var l=0;l<j.length;l++)g[i[l]]=j[l];c["default"]=g},{94:94}],45:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function g(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var h=a(5),i=d(h),j=function(a){function b(){return e(this,b),f(this,a.apply(this,arguments))}return g(b,a),b.prototype.createEl=function(){return a.prototype.createEl.call(this,"div",{className:"vjs-loading-spinner",dir:"ltr"})},b}(i["default"]);i["default"].registerComponent("LoadingSpinner",j),c["default"]=j},{5:5}],46:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a){return a instanceof e?a:("number"==typeof a?this.code=a:"string"==typeof a?this.message=a:"object"===("undefined"==typeof a?"undefined":f(a))&&("number"==typeof a.code&&(this.code=a.code),h["default"](this,a)),void(this.message||(this.message=e.defaultMessages[this.code]||"")))}c.__esModule=!0;var f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},g=a(138),h=d(g);e.prototype.code=0,e.prototype.message="",e.prototype.status=null,e.errorTypes=["MEDIA_ERR_CUSTOM","MEDIA_ERR_ABORTED","MEDIA_ERR_NETWORK","MEDIA_ERR_DECODE","MEDIA_ERR_SRC_NOT_SUPPORTED","MEDIA_ERR_ENCRYPTED"],e.defaultMessages={1:"You aborted the media playback",2:"A network error caused the media download to fail part-way.",3:"The media playback was aborted due to a corruption problem or because the media used features your browser did not support.",4:"The media could not be loaded, either because the server or network failed or because the format is not supported.",5:"The media is encrypted and we do not have the keys to decrypt it."};for(var i=0;i<e.errorTypes.length;i++)e[e.errorTypes[i]]=i,e.prototype[e.errorTypes[i]]=i;c["default"]=e},{138:138}],47:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i=a(3),j=e(i),k=a(5),l=e(k),m=a(49),n=e(m),o=a(81),p=d(o),q=a(83),r=d(q),s=a(91),t=e(s),u=function(a){function b(c){var d=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};f(this,b);var e=g(this,a.call(this,c,d));return e.update(),e.enabled_=!0,e.el_.setAttribute("aria-haspopup","true"),e.el_.setAttribute("role","menuitem"),e.on("keydown",e.handleSubmenuKeyPress),e}return h(b,a),b.prototype.update=function(){var a=this.createMenu();this.menu&&this.removeChild(this.menu),this.menu=a,this.addChild(a),this.buttonPressed_=!1,this.el_.setAttribute("aria-expanded","false"),this.items&&0===this.items.length?this.hide():this.items&&this.items.length>1&&this.show()},b.prototype.createMenu=function(){var a=new n["default"](this.player_);if(this.options_.title){var b=p.createEl("li",{className:"vjs-menu-title",innerHTML:t["default"](this.options_.title),tabIndex:-1});a.children_.unshift(b),p.insertElFirst(b,a.contentEl())}if(this.items=this.createItems(),this.items)for(var c=0;c<this.items.length;c++)a.addItem(this.items[c]);return a},b.prototype.createItems=function(){},b.prototype.createEl=function(){return a.prototype.createEl.call(this,"div",{className:this.buildCSSClass()})},b.prototype.buildCSSClass=function(){var b="vjs-menu-button";return b+=this.options_.inline===!0?"-inline":"-popup","vjs-menu-button "+b+" "+a.prototype.buildCSSClass.call(this)},b.prototype.handleClick=function(){this.one(this.menu.contentEl(),"mouseleave",r.bind(this,function(a){this.unpressButton(),this.el_.blur()})),this.buttonPressed_?this.unpressButton():this.pressButton()},b.prototype.handleKeyPress=function(b){27===b.which||9===b.which?(this.buttonPressed_&&this.unpressButton(),9!==b.which&&b.preventDefault()):38===b.which||40===b.which?this.buttonPressed_||(this.pressButton(),b.preventDefault()):a.prototype.handleKeyPress.call(this,b)},b.prototype.handleSubmenuKeyPress=function(a){27!==a.which&&9!==a.which||(this.buttonPressed_&&this.unpressButton(),9!==a.which&&a.preventDefault())},b.prototype.pressButton=function(){this.enabled_&&(this.buttonPressed_=!0,this.menu.lockShowing(),this.el_.setAttribute("aria-expanded","true"),this.menu.focus())},b.prototype.unpressButton=function(){this.enabled_&&(this.buttonPressed_=!1,this.menu.unlockShowing(),this.el_.setAttribute("aria-expanded","false"),this.el_.focus())},b.prototype.disable=function(){return this.buttonPressed_=!1,this.menu.unlockShowing(),this.el_.setAttribute("aria-expanded","false"),this.enabled_=!1,a.prototype.disable.call(this)},b.prototype.enable=function(){return this.enabled_=!0,a.prototype.enable.call(this)},b}(j["default"]);l["default"].registerComponent("MenuButton",u),c["default"]=u},{3:3,49:49,5:5,81:81,83:83,91:91}],48:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function g(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var h=a(3),i=d(h),j=a(5),k=d(j),l=a(138),m=d(l),n=function(a){function b(c,d){e(this,b);var g=f(this,a.call(this,c,d));return g.selectable=d.selectable,g.selected(d.selected),g.selectable?g.el_.setAttribute("role","menuitemcheckbox"):g.el_.setAttribute("role","menuitem"),g}return g(b,a),b.prototype.createEl=function(b,c,d){return a.prototype.createEl.call(this,"li",m["default"]({className:"vjs-menu-item",innerHTML:this.localize(this.options_.label),tabIndex:-1},c),d)},b.prototype.handleClick=function(){this.selected(!0)},b.prototype.selected=function(a){this.selectable&&(a?(this.addClass("vjs-selected"),this.el_.setAttribute("aria-checked","true"),this.controlText(", selected")):(this.removeClass("vjs-selected"),this.el_.setAttribute("aria-checked","false"),this.controlText(" ")))},b}(i["default"]);k["default"].registerComponent("MenuItem",n),c["default"]=n},{138:138,3:3,5:5}],49:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i=a(5),j=e(i),k=a(81),l=d(k),m=a(83),n=d(m),o=a(82),p=d(o),q=function(a){function b(c,d){f(this,b);var e=g(this,a.call(this,c,d));return e.focusedChild_=-1,e.on("keydown",e.handleKeyPress),e}return h(b,a),b.prototype.addItem=function(a){this.addChild(a),a.on("click",n.bind(this,function(){this.unlockShowing()}))},b.prototype.createEl=function(){var b=this.options_.contentElType||"ul";this.contentEl_=l.createEl(b,{className:"vjs-menu-content"}),this.contentEl_.setAttribute("role","menu");var c=a.prototype.createEl.call(this,"div",{append:this.contentEl_,className:"vjs-menu"});return c.setAttribute("role","presentation"),c.appendChild(this.contentEl_),p.on(c,"click",function(a){a.preventDefault(),a.stopImmediatePropagation()}),c},b.prototype.handleKeyPress=function(a){37===a.which||40===a.which?(a.preventDefault(),this.stepForward()):38!==a.which&&39!==a.which||(a.preventDefault(),this.stepBack())},b.prototype.stepForward=function(){var a=0;void 0!==this.focusedChild_&&(a=this.focusedChild_+1),this.focus(a)},b.prototype.stepBack=function(){var a=0;void 0!==this.focusedChild_&&(a=this.focusedChild_-1),this.focus(a)},b.prototype.focus=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,b=this.children().slice(),c=b.length&&b[0].className&&/vjs-menu-title/.test(b[0].className);c&&b.shift(),b.length>0&&(0>a?a=0:a>=b.length&&(a=b.length-1),this.focusedChild_=a,b[a].el_.focus())},b}(j["default"]);j["default"].registerComponent("Menu",q),c["default"]=q},{5:5,81:81,82:82,83:83}],50:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i=a(81),j=e(i),k=a(83),l=e(k),m=a(5),n=d(m),o="vjs-modal-dialog",p=27,q=function(a){function b(c,d){f(this,b);var e=g(this,a.call(this,c,d));return e.opened_=e.hasBeenOpened_=e.hasBeenFilled_=!1,e.closeable(!e.options_.uncloseable),e.content(e.options_.content),e.contentEl_=j.createEl("div",{className:o+"-content"},{role:"document"}),e.descEl_=j.createEl("p",{className:o+"-description vjs-offscreen",id:e.el().getAttribute("aria-describedby")}),j.textContent(e.descEl_,e.description()),e.el_.appendChild(e.descEl_),e.el_.appendChild(e.contentEl_),e}return h(b,a),b.prototype.createEl=function(){return a.prototype.createEl.call(this,"div",{className:this.buildCSSClass(),tabIndex:-1},{"aria-describedby":this.id()+"_description","aria-hidden":"true","aria-label":this.label(),role:"dialog"})},b.prototype.buildCSSClass=function(){return o+" vjs-hidden "+a.prototype.buildCSSClass.call(this)},b.prototype.handleKeyPress=function(a){a.which===p&&this.closeable()&&this.close()},b.prototype.label=function(){return this.options_.label||this.localize("Modal Window")},b.prototype.description=function(){var a=this.options_.description||this.localize("This is a modal window.");return this.closeable()&&(a+=" "+this.localize("This modal can be closed by pressing the Escape key or activating the close button.")),a},b.prototype.open=function(){if(!this.opened_){var a=this.player();this.trigger("beforemodalopen"),this.opened_=!0,(this.options_.fillAlways||!this.hasBeenOpened_&&!this.hasBeenFilled_)&&this.fill(),this.wasPlaying_=!a.paused(),this.wasPlaying_&&a.pause(),this.closeable()&&this.on(this.el_.ownerDocument,"keydown",l.bind(this,this.handleKeyPress)),a.controls(!1),this.show(),this.el().setAttribute("aria-hidden","false"),this.trigger("modalopen"),this.hasBeenOpened_=!0}return this},b.prototype.opened=function(a){return"boolean"==typeof a&&this[a?"open":"close"](),this.opened_},b.prototype.close=function(){if(this.opened_){var a=this.player();this.trigger("beforemodalclose"),this.opened_=!1,this.wasPlaying_&&a.play(),this.closeable()&&this.off(this.el_.ownerDocument,"keydown",l.bind(this,this.handleKeyPress)),a.controls(!0),this.hide(),this.el().setAttribute("aria-hidden","true"),this.trigger("modalclose"),this.options_.temporary&&this.dispose()}return this},b.prototype.closeable=function c(a){if("boolean"==typeof a){var c=this.closeable_=!!a,b=this.getChild("closeButton");if(c&&!b){var d=this.contentEl_;this.contentEl_=this.el_,b=this.addChild("closeButton",{controlText:"Close Modal Dialog"}),this.contentEl_=d,this.on(b,"close",this.close)}!c&&b&&(this.off(b,"close",this.close),this.removeChild(b),b.dispose())}return this.closeable_},b.prototype.fill=function(){return this.fillWith(this.content())},b.prototype.fillWith=function(a){var b=this.contentEl(),c=b.parentNode,d=b.nextSibling;return this.trigger("beforemodalfill"),this.hasBeenFilled_=!0,c.removeChild(b),this.empty(),j.insertContent(b,a),this.trigger("modalfill"),d?c.insertBefore(b,d):c.appendChild(b),this},b.prototype.empty=function(){return this.trigger("beforemodalempty"),j.emptyEl(this.contentEl()),this.trigger("modalempty"),this;
},b.prototype.content=function(a){return"undefined"!=typeof a&&(this.content_=a),this.content_},b}(n["default"]);q.prototype.options_={temporary:!0},n["default"].registerComponent("ModalDialog",q),c["default"]=q},{5:5,81:81,83:83}],51:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i=a(5),j=e(i),k=a(94),l=e(k),m=a(95),n=e(m),o=a(82),p=d(o),q=a(81),r=d(q),s=a(83),t=d(s),u=a(85),v=d(u),w=a(78),x=d(w),y=a(86),z=e(y),A=a(91),B=e(A),C=a(90),D=a(79),E=a(89),F=d(E),G=a(44),H=e(G),I=a(46),J=e(I),K=a(147),L=e(K),M=a(138),N=e(M),O=a(87),P=e(O),Q=a(69),R=e(Q),S=a(50),T=e(S),U=a(62),V=e(U),W=a(63),X=e(W),Y=a(76),Z=e(Y);a(61),a(59),a(55),a(68),a(45),a(1),a(4),a(8),a(41),a(71),a(60);var $=["progress","abort","suspend","emptied","stalled","loadedmetadata","loadeddata","timeupdate","ratechange","volumechange","texttrackchange"],_=function(a){function b(c,d,e){if(f(this,b),c.id=c.id||"vjs_video_"+v.newGUID(),d=N["default"](b.getTagSettings(c),d),d.initChildren=!1,d.createEl=!1,d.reportTouchActivity=!1,!d.language)if("function"==typeof c.closest){var h=c.closest("[lang]");h&&(d.language=h.getAttribute("lang"))}else for(var i=c;i&&1===i.nodeType;){if(r.getElAttributes(i).hasOwnProperty("lang")){d.language=i.getAttribute("lang");break}i=i.parentNode}var j=g(this,a.call(this,null,d,e));if(!j.options_||!j.options_.techOrder||!j.options_.techOrder.length)throw new Error("No techOrder specified. Did you overwrite videojs.options instead of just changing the properties you want to override?");j.tag=c,j.tagAttributes=c&&r.getElAttributes(c),j.language(j.options_.language),d.languages?!function(){var a={};Object.getOwnPropertyNames(d.languages).forEach(function(b){a[b.toLowerCase()]=d.languages[b]}),j.languages_=a}():j.languages_=b.prototype.options_.languages,j.cache_={},j.poster_=d.poster||"",j.controls_=!!d.controls,c.controls=!1,j.scrubbing_=!1,j.el_=j.createEl();var k=P["default"](j.options_);return d.plugins&&!function(){var a=d.plugins;Object.getOwnPropertyNames(a).forEach(function(b){"function"==typeof this[b]?this[b](a[b]):z["default"].error("Unable to find plugin:",b)},j)}(),j.options_.playerOptions=k,j.initChildren(),j.isAudio("audio"===c.nodeName.toLowerCase()),j.controls()?j.addClass("vjs-controls-enabled"):j.addClass("vjs-controls-disabled"),j.el_.setAttribute("role","region"),j.isAudio()?j.el_.setAttribute("aria-label","audio player"):j.el_.setAttribute("aria-label","video player"),j.isAudio()&&j.addClass("vjs-audio"),j.flexNotSupported_()&&j.addClass("vjs-no-flex"),x.IS_IOS||j.addClass("vjs-workinghover"),b.players[j.id_]=j,j.userActive(!0),j.reportUserActivity(),j.listenForUserActivity_(),j.on("fullscreenchange",j.handleFullscreenChange_),j.on("stageclick",j.handleStageClick_),j}return h(b,a),b.prototype.dispose=function(){this.trigger("dispose"),this.off("dispose"),this.styleEl_&&this.styleEl_.parentNode&&this.styleEl_.parentNode.removeChild(this.styleEl_),b.players[this.id_]=null,this.tag&&this.tag.player&&(this.tag.player=null),this.el_&&this.el_.player&&(this.el_.player=null),this.tech_&&this.tech_.dispose(),a.prototype.dispose.call(this)},b.prototype.createEl=function(){var b=this.el_=a.prototype.createEl.call(this,"div"),c=this.tag;c.removeAttribute("width"),c.removeAttribute("height");var d=r.getElAttributes(c);if(Object.getOwnPropertyNames(d).forEach(function(a){"class"===a?b.className=d[a]:b.setAttribute(a,d[a])}),c.playerId=c.id,c.id+="_html5_api",c.className="vjs-tech",c.player=b.player=this,this.addClass("vjs-paused"),n["default"].VIDEOJS_NO_DYNAMIC_STYLE!==!0){this.styleEl_=F.createStyleElement("vjs-styles-dimensions");var e=r.$(".vjs-styles-defaults"),f=r.$("head");f.insertBefore(this.styleEl_,e?e.nextSibling:f.firstChild)}this.width(this.options_.width),this.height(this.options_.height),this.fluid(this.options_.fluid),this.aspectRatio(this.options_.aspectRatio);for(var g=c.getElementsByTagName("a"),h=0;h<g.length;h++){var i=g.item(h);r.addElClass(i,"vjs-hidden"),i.setAttribute("hidden","hidden")}return c.initNetworkState_=c.networkState,c.parentNode&&c.parentNode.insertBefore(b,c),r.insertElFirst(c,b),this.children_.unshift(c),this.el_=b,b},b.prototype.width=function(a){return this.dimension("width",a)},b.prototype.height=function(a){return this.dimension("height",a)},b.prototype.dimension=function(a,b){var c=a+"_";if(void 0===b)return this[c]||0;if(""===b)this[c]=void 0;else{var d=parseFloat(b);if(isNaN(d))return z["default"].error('Improper value "'+b+'" supplied for for '+a),this;this[c]=d}return this.updateStyleEl_(),this},b.prototype.fluid=function(a){return void 0===a?!!this.fluid_:(this.fluid_=!!a,a?this.addClass("vjs-fluid"):this.removeClass("vjs-fluid"),void this.updateStyleEl_())},b.prototype.aspectRatio=function(a){if(void 0===a)return this.aspectRatio_;if(!/^\d+\:\d+$/.test(a))throw new Error("Improper value supplied for aspect ratio. The format should be width:height, for example 16:9.");this.aspectRatio_=a,this.fluid(!0),this.updateStyleEl_()},b.prototype.updateStyleEl_=function(){if(n["default"].VIDEOJS_NO_DYNAMIC_STYLE===!0){var a="number"==typeof this.width_?this.width_:this.options_.width,b="number"==typeof this.height_?this.height_:this.options_.height,c=this.tech_&&this.tech_.el();return void(c&&(a>=0&&(c.width=a),b>=0&&(c.height=b)))}var d=void 0,e=void 0,f=void 0,g=void 0;f=void 0!==this.aspectRatio_&&"auto"!==this.aspectRatio_?this.aspectRatio_:this.videoWidth()>0?this.videoWidth()+":"+this.videoHeight():"16:9";var h=f.split(":"),i=h[1]/h[0];d=void 0!==this.width_?this.width_:void 0!==this.height_?this.height_/i:this.videoWidth()||300,e=void 0!==this.height_?this.height_:d*i,g=/^[^a-zA-Z]/.test(this.id())?"dimensions-"+this.id():this.id()+"-dimensions",this.addClass(g),F.setTextContent(this.styleEl_,"\n      ."+g+" {\n        width: "+d+"px;\n        height: "+e+"px;\n      }\n\n      ."+g+".vjs-fluid {\n        padding-top: "+100*i+"%;\n      }\n    ")},b.prototype.loadTech_=function(a,b){var c=this;this.tech_&&this.unloadTech_(),"Html5"!==a&&this.tag&&(V["default"].getTech("Html5").disposeMediaElement(this.tag),this.tag.player=null,this.tag=null),this.techName_=a,this.isReady_=!1;var d=N["default"]({source:b,nativeControlsForTouch:this.options_.nativeControlsForTouch,playerId:this.id(),techId:this.id()+"_"+a+"_api",videoTracks:this.videoTracks_,textTracks:this.textTracks_,audioTracks:this.audioTracks_,autoplay:this.options_.autoplay,preload:this.options_.preload,loop:this.options_.loop,muted:this.options_.muted,poster:this.poster(),language:this.language(),"vtt.js":this.options_["vtt.js"]},this.options_[a.toLowerCase()]);this.tag&&(d.tag=this.tag),b&&(this.currentType_=b.type,b.src===this.cache_.src&&this.cache_.currentTime>0&&(d.startTime=this.cache_.currentTime),this.cache_.sources=null,this.cache_.source=b,this.cache_.src=b.src);var e=V["default"].getTech(a);e||(e=j["default"].getComponent(a)),this.tech_=new e(d),this.tech_.ready(t.bind(this,this.handleTechReady_),!0),R["default"].jsonToTextTracks(this.textTracksJson_||[],this.tech_),$.forEach(function(a){c.on(c.tech_,a,c["handleTech"+B["default"](a)+"_"])}),this.on(this.tech_,"loadstart",this.handleTechLoadStart_),this.on(this.tech_,"waiting",this.handleTechWaiting_),this.on(this.tech_,"canplay",this.handleTechCanPlay_),this.on(this.tech_,"canplaythrough",this.handleTechCanPlayThrough_),this.on(this.tech_,"playing",this.handleTechPlaying_),this.on(this.tech_,"ended",this.handleTechEnded_),this.on(this.tech_,"seeking",this.handleTechSeeking_),this.on(this.tech_,"seeked",this.handleTechSeeked_),this.on(this.tech_,"play",this.handleTechPlay_),this.on(this.tech_,"firstplay",this.handleTechFirstPlay_),this.on(this.tech_,"pause",this.handleTechPause_),this.on(this.tech_,"durationchange",this.handleTechDurationChange_),this.on(this.tech_,"fullscreenchange",this.handleTechFullscreenChange_),this.on(this.tech_,"error",this.handleTechError_),this.on(this.tech_,"loadedmetadata",this.updateStyleEl_),this.on(this.tech_,"posterchange",this.handleTechPosterChange_),this.on(this.tech_,"textdata",this.handleTechTextData_),this.usingNativeControls(this.techGet_("controls")),this.controls()&&!this.usingNativeControls()&&this.addTechControlsListeners_(),this.tech_.el().parentNode===this.el()||"Html5"===a&&this.tag||r.insertElFirst(this.tech_.el(),this.el()),this.tag&&(this.tag.player=null,this.tag=null)},b.prototype.unloadTech_=function(){this.videoTracks_=this.videoTracks(),this.textTracks_=this.textTracks(),this.audioTracks_=this.audioTracks(),this.textTracksJson_=R["default"].textTracksToJson(this.tech_),this.isReady_=!1,this.tech_.dispose(),this.tech_=!1},b.prototype.tech=function(a){if(a&&a.IWillNotUseThisInPlugins)return this.tech_;var b="\n      Please make sure that you are not using this inside of a plugin.\n      To disable this alert and error, please pass in an object with\n      `IWillNotUseThisInPlugins` to the `tech` method. See\n      https://github.com/videojs/video.js/issues/2617 for more info.\n    ";throw n["default"].alert(b),new Error(b)},b.prototype.addTechControlsListeners_=function(){this.removeTechControlsListeners_(),this.on(this.tech_,"mousedown",this.handleTechClick_),this.on(this.tech_,"touchstart",this.handleTechTouchStart_),this.on(this.tech_,"touchmove",this.handleTechTouchMove_),this.on(this.tech_,"touchend",this.handleTechTouchEnd_),this.on(this.tech_,"tap",this.handleTechTap_)},b.prototype.removeTechControlsListeners_=function(){this.off(this.tech_,"tap",this.handleTechTap_),this.off(this.tech_,"touchstart",this.handleTechTouchStart_),this.off(this.tech_,"touchmove",this.handleTechTouchMove_),this.off(this.tech_,"touchend",this.handleTechTouchEnd_),this.off(this.tech_,"mousedown",this.handleTechClick_)},b.prototype.handleTechReady_=function(){if(this.triggerReady(),this.cache_.volume&&this.techCall_("setVolume",this.cache_.volume),this.handleTechPosterChange_(),this.handleTechDurationChange_(),(this.src()||this.currentSrc())&&this.tag&&this.options_.autoplay&&this.paused()){try{delete this.tag.poster}catch(a){z["default"]("deleting tag.poster throws in some browsers",a)}this.play()}},b.prototype.handleTechLoadStart_=function(){this.removeClass("vjs-ended"),this.error(null),this.paused()?(this.hasStarted(!1),this.trigger("loadstart")):(this.trigger("loadstart"),this.trigger("firstplay"))},b.prototype.hasStarted=function(a){return void 0!==a?(this.hasStarted_!==a&&(this.hasStarted_=a,a?(this.addClass("vjs-has-started"),this.trigger("firstplay")):this.removeClass("vjs-has-started")),this):!!this.hasStarted_},b.prototype.handleTechPlay_=function(){this.removeClass("vjs-ended"),this.removeClass("vjs-paused"),this.addClass("vjs-playing"),this.hasStarted(!0),this.trigger("play")},b.prototype.handleTechWaiting_=function(){var a=this;this.addClass("vjs-waiting"),this.trigger("waiting"),this.one("timeupdate",function(){return a.removeClass("vjs-waiting")})},b.prototype.handleTechCanPlay_=function(){this.removeClass("vjs-waiting"),this.trigger("canplay")},b.prototype.handleTechCanPlayThrough_=function(){this.removeClass("vjs-waiting"),this.trigger("canplaythrough")},b.prototype.handleTechPlaying_=function(){this.removeClass("vjs-waiting"),this.trigger("playing")},b.prototype.handleTechSeeking_=function(){this.addClass("vjs-seeking"),this.trigger("seeking")},b.prototype.handleTechSeeked_=function(){this.removeClass("vjs-seeking"),this.trigger("seeked")},b.prototype.handleTechFirstPlay_=function(){this.options_.starttime&&this.currentTime(this.options_.starttime),this.addClass("vjs-has-started"),this.trigger("firstplay")},b.prototype.handleTechPause_=function(){this.removeClass("vjs-playing"),this.addClass("vjs-paused"),this.trigger("pause")},b.prototype.handleTechEnded_=function(){this.addClass("vjs-ended"),this.options_.loop?(this.currentTime(0),this.play()):this.paused()||this.pause(),this.trigger("ended")},b.prototype.handleTechDurationChange_=function(){this.duration(this.techGet_("duration"))},b.prototype.handleTechClick_=function(a){0===a.button&&this.controls()&&(this.paused()?this.play():this.pause())},b.prototype.handleTechTap_=function(){this.userActive(!this.userActive())},b.prototype.handleTechTouchStart_=function(){this.userWasActive=this.userActive()},b.prototype.handleTechTouchMove_=function(){this.userWasActive&&this.reportUserActivity()},b.prototype.handleTechTouchEnd_=function(a){a.preventDefault()},b.prototype.handleFullscreenChange_=function(){this.isFullscreen()?this.addClass("vjs-fullscreen"):this.removeClass("vjs-fullscreen")},b.prototype.handleStageClick_=function(){this.reportUserActivity()},b.prototype.handleTechFullscreenChange_=function(a,b){b&&this.isFullscreen(b.isFullscreen),this.trigger("fullscreenchange")},b.prototype.handleTechError_=function(){var a=this.tech_.error();this.error(a)},b.prototype.handleTechTextData_=function(){var a=null;arguments.length>1&&(a=arguments[1]),this.trigger("textdata",a)},b.prototype.getCache=function(){return this.cache_},b.prototype.techCall_=function(a,b){if(this.tech_&&!this.tech_.isReady_)this.tech_.ready(function(){this[a](b)},!0);else try{this.tech_&&this.tech_[a](b)}catch(c){throw z["default"](c),c}},b.prototype.techGet_=function(a){if(this.tech_&&this.tech_.isReady_)try{return this.tech_[a]()}catch(b){throw void 0===this.tech_[a]?z["default"]("Video.js: "+a+" method not defined for "+this.techName_+" playback technology.",b):"TypeError"===b.name?(z["default"]("Video.js: "+a+" unavailable on "+this.techName_+" playback technology element.",b),this.tech_.isReady_=!1):z["default"](b),b}},b.prototype.play=function(){return this.src()||this.currentSrc()?this.techCall_("play"):this.tech_.one("loadstart",function(){this.play()}),this},b.prototype.pause=function(){return this.techCall_("pause"),this},b.prototype.paused=function(){return this.techGet_("paused")!==!1},b.prototype.scrubbing=function(a){return void 0!==a?(this.scrubbing_=!!a,a?this.addClass("vjs-scrubbing"):this.removeClass("vjs-scrubbing"),this):this.scrubbing_},b.prototype.currentTime=function(a){return void 0!==a?(this.techCall_("setCurrentTime",a),this):(this.cache_.currentTime=this.techGet_("currentTime")||0,this.cache_.currentTime)},b.prototype.duration=function(a){return void 0===a?this.cache_.duration||0:(a=parseFloat(a)||0,0>a&&(a=1/0),a!==this.cache_.duration&&(this.cache_.duration=a,a===1/0?this.addClass("vjs-live"):this.removeClass("vjs-live"),this.trigger("durationchange")),this)},b.prototype.remainingTime=function(){return this.duration()-this.currentTime()},b.prototype.buffered=function c(){var c=this.techGet_("buffered");return c&&c.length||(c=C.createTimeRange(0,0)),c},b.prototype.bufferedPercent=function(){return D.bufferedPercent(this.buffered(),this.duration())},b.prototype.bufferedEnd=function(){var a=this.buffered(),b=this.duration(),c=a.end(a.length-1);return c>b&&(c=b),c},b.prototype.volume=function(a){var b=void 0;return void 0!==a?(b=Math.max(0,Math.min(1,parseFloat(a))),this.cache_.volume=b,this.techCall_("setVolume",b),this):(b=parseFloat(this.techGet_("volume")),isNaN(b)?1:b)},b.prototype.muted=function(a){return void 0!==a?(this.techCall_("setMuted",a),this):this.techGet_("muted")||!1},b.prototype.supportsFullScreen=function(){return this.techGet_("supportsFullScreen")||!1},b.prototype.isFullscreen=function(a){return void 0!==a?(this.isFullscreen_=!!a,this):!!this.isFullscreen_},b.prototype.requestFullscreen=function(){var a=H["default"];return this.isFullscreen(!0),a.requestFullscreen?(p.on(l["default"],a.fullscreenchange,t.bind(this,function b(c){this.isFullscreen(l["default"][a.fullscreenElement]),this.isFullscreen()===!1&&p.off(l["default"],a.fullscreenchange,b),this.trigger("fullscreenchange")})),this.el_[a.requestFullscreen]()):this.tech_.supportsFullScreen()?this.techCall_("enterFullScreen"):(this.enterFullWindow(),this.trigger("fullscreenchange")),this},b.prototype.exitFullscreen=function(){var a=H["default"];return this.isFullscreen(!1),a.requestFullscreen?l["default"][a.exitFullscreen]():this.tech_.supportsFullScreen()?this.techCall_("exitFullScreen"):(this.exitFullWindow(),this.trigger("fullscreenchange")),this},b.prototype.enterFullWindow=function(){this.isFullWindow=!0,this.docOrigOverflow=l["default"].documentElement.style.overflow,p.on(l["default"],"keydown",t.bind(this,this.fullWindowOnEscKey)),l["default"].documentElement.style.overflow="hidden",r.addElClass(l["default"].body,"vjs-full-window"),this.trigger("enterFullWindow")},b.prototype.fullWindowOnEscKey=function(a){27===a.keyCode&&(this.isFullscreen()===!0?this.exitFullscreen():this.exitFullWindow())},b.prototype.exitFullWindow=function(){this.isFullWindow=!1,p.off(l["default"],"keydown",this.fullWindowOnEscKey),l["default"].documentElement.style.overflow=this.docOrigOverflow,r.removeElClass(l["default"].body,"vjs-full-window"),this.trigger("exitFullWindow")},b.prototype.canPlayType=function(a){for(var b=void 0,c=0,d=this.options_.techOrder;c<d.length;c++){var e=B["default"](d[c]),f=V["default"].getTech(e);if(f||(f=j["default"].getComponent(e)),f){if(f.isSupported()&&(b=f.canPlayType(a)))return b}else z["default"].error('The "'+e+'" tech is undefined. Skipped browser support check for that tech.')}return""},b.prototype.selectSource=function(a){var b=this,c=this.options_.techOrder.map(B["default"]).map(function(a){return[a,V["default"].getTech(a)||j["default"].getComponent(a)]}).filter(function(a){var b=a[0],c=a[1];return c?c.isSupported():(z["default"].error('The "'+b+'" tech is undefined. Skipped browser support check for that tech.'),!1)}),d=function(a,b,c){var d=void 0;return a.some(function(a){return b.some(function(b){return(d=c(a,b))?!0:void 0})}),d},e=void 0,f=function(a){return function(b,c){return a(c,b)}},g=function(a,c){var d=a[0],e=a[1];return e.canPlaySource(c,b.options_[d.toLowerCase()])?{source:c,tech:d}:void 0};return e=this.options_.sourceOrder?d(a,c,f(g)):d(c,a,g),e||!1},b.prototype.src=function(a){if(void 0===a)return this.techGet_("src");var b=V["default"].getTech(this.techName_);return b||(b=j["default"].getComponent(this.techName_)),Array.isArray(a)?this.sourceList_(a):"string"==typeof a?this.src({src:a}):a instanceof Object&&(a.type&&!b.canPlaySource(a,this.options_[this.techName_.toLowerCase()])?this.sourceList_([a]):(this.cache_.sources=null,this.cache_.source=a,this.cache_.src=a.src,this.currentType_=a.type||"",this.ready(function(){b.prototype.hasOwnProperty("setSource")?this.techCall_("setSource",a):this.techCall_("src",a.src),"auto"===this.options_.preload&&this.load(),this.options_.autoplay&&this.play()},!0))),this},b.prototype.sourceList_=function(a){var b=this.selectSource(a);b?(b.tech===this.techName_?this.src(b.source):this.loadTech_(b.tech,b.source),this.cache_.sources=a):(this.setTimeout(function(){this.error({code:4,message:this.localize(this.options_.notSupportedMessage)})},0),this.triggerReady())},b.prototype.load=function(){return this.techCall_("load"),this},b.prototype.reset=function(){return this.loadTech_(B["default"](this.options_.techOrder[0]),null),this.techCall_("reset"),this},b.prototype.currentSources=function(){var a=this.currentSource(),b=[];return 0!==Object.keys(a).length&&b.push(a),this.cache_.sources||b},b.prototype.currentSource=function(){var a={},b=this.currentSrc();return b&&(a.src=b),this.cache_.source||a},b.prototype.currentSrc=function(){return this.techGet_("currentSrc")||this.cache_.src||""},b.prototype.currentType=function(){return this.currentType_||""},b.prototype.preload=function(a){return void 0!==a?(this.techCall_("setPreload",a),this.options_.preload=a,this):this.techGet_("preload")},b.prototype.autoplay=function(a){return void 0!==a?(this.techCall_("setAutoplay",a),this.options_.autoplay=a,this):this.techGet_("autoplay",a)},b.prototype.loop=function(a){return void 0!==a?(this.techCall_("setLoop",a),this.options_.loop=a,this):this.techGet_("loop")},b.prototype.poster=function(a){return void 0===a?this.poster_:(a||(a=""),this.poster_=a,this.techCall_("setPoster",a),this.trigger("posterchange"),this)},b.prototype.handleTechPosterChange_=function(){!this.poster_&&this.tech_&&this.tech_.poster&&(this.poster_=this.tech_.poster()||"",this.trigger("posterchange"))},b.prototype.controls=function(a){return void 0!==a?(a=!!a,this.controls_!==a&&(this.controls_=a,this.usingNativeControls()&&this.techCall_("setControls",a),a?(this.removeClass("vjs-controls-disabled"),this.addClass("vjs-controls-enabled"),this.trigger("controlsenabled"),this.usingNativeControls()||this.addTechControlsListeners_()):(this.removeClass("vjs-controls-enabled"),this.addClass("vjs-controls-disabled"),this.trigger("controlsdisabled"),this.usingNativeControls()||this.removeTechControlsListeners_())),this):!!this.controls_},b.prototype.usingNativeControls=function(a){return void 0!==a?(a=!!a,this.usingNativeControls_!==a&&(this.usingNativeControls_=a,a?(this.addClass("vjs-using-native-controls"),this.trigger("usingnativecontrols")):(this.removeClass("vjs-using-native-controls"),this.trigger("usingcustomcontrols"))),this):!!this.usingNativeControls_},b.prototype.error=function(a){return void 0===a?this.error_||null:null===a?(this.error_=a,this.removeClass("vjs-error"),this.errorDisplay&&this.errorDisplay.close(),this):(this.error_=new J["default"](a),this.addClass("vjs-error"),z["default"].error("(CODE:"+this.error_.code+" "+J["default"].errorTypes[this.error_.code]+")",this.error_.message,this.error_),this.trigger("error"),this)},b.prototype.reportUserActivity=function(a){this.userActivity_=!0},b.prototype.userActive=function(a){return void 0!==a?(a=!!a,a!==this.userActive_&&(this.userActive_=a,a?(this.userActivity_=!0,this.removeClass("vjs-user-inactive"),this.addClass("vjs-user-active"),this.trigger("useractive")):(this.userActivity_=!1,this.tech_&&this.tech_.one("mousemove",function(a){a.stopPropagation(),a.preventDefault()}),this.removeClass("vjs-user-active"),this.addClass("vjs-user-inactive"),this.trigger("userinactive"))),this):this.userActive_},b.prototype.listenForUserActivity_=function(){var a=void 0,b=void 0,c=void 0,d=t.bind(this,this.reportUserActivity),e=function(a){a.screenX===b&&a.screenY===c||(b=a.screenX,c=a.screenY,d())},f=function(){d(),this.clearInterval(a),a=this.setInterval(d,250)},g=function(b){d(),this.clearInterval(a)};this.on("mousedown",f),this.on("mousemove",e),this.on("mouseup",g),this.on("keydown",d),this.on("keyup",d);var h=void 0;this.setInterval(function(){if(this.userActivity_){this.userActivity_=!1,this.userActive(!0),this.clearTimeout(h);var a=this.options_.inactivityTimeout;a>0&&(h=this.setTimeout(function(){this.userActivity_||this.userActive(!1)},a))}},250)},b.prototype.playbackRate=function(a){return void 0!==a?(this.techCall_("setPlaybackRate",a),this):this.tech_&&this.tech_.featuresPlaybackRate?this.techGet_("playbackRate"):1},b.prototype.isAudio=function(a){return void 0!==a?(this.isAudio_=!!a,this):!!this.isAudio_},b.prototype.videoTracks=function(){return this.tech_?this.tech_.videoTracks():(this.videoTracks_=this.videoTracks_||new Z["default"],this.videoTracks_)},b.prototype.audioTracks=function(){return this.tech_?this.tech_.audioTracks():(this.audioTracks_=this.audioTracks_||new X["default"],this.audioTracks_)},b.prototype.textTracks=function(){return this.tech_?this.tech_.textTracks():void 0},b.prototype.remoteTextTracks=function(){return this.tech_?this.tech_.remoteTextTracks():void 0},b.prototype.remoteTextTrackEls=function(){return this.tech_?this.tech_.remoteTextTrackEls():void 0},b.prototype.addTextTrack=function(a,b,c){return this.tech_?this.tech_.addTextTrack(a,b,c):void 0},b.prototype.addRemoteTextTrack=function(a,b){return this.tech_?this.tech_.addRemoteTextTrack(a,b):void 0},b.prototype.removeRemoteTextTrack=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},b=a.track,c=void 0===b?arguments[0]:b;return this.tech_?this.tech_.removeRemoteTextTrack(c):void 0},b.prototype.videoWidth=function(){return this.tech_&&this.tech_.videoWidth&&this.tech_.videoWidth()||0},b.prototype.videoHeight=function(){return this.tech_&&this.tech_.videoHeight&&this.tech_.videoHeight()||0},b.prototype.language=function(a){return void 0===a?this.language_:(this.language_=String(a).toLowerCase(),this)},b.prototype.languages=function(){return P["default"](b.prototype.options_.languages,this.languages_)},b.prototype.toJSON=function(){var a=P["default"](this.options_),b=a.tracks;a.tracks=[];for(var c=0;c<b.length;c++){var d=b[c];d=P["default"](d),d.player=void 0,a.tracks[c]=d}return a},b.prototype.createModal=function(a,b){var c=this;b=b||{},b.content=a||"";var d=new T["default"](this,b);return this.addChild(d),d.on("dispose",function(){c.removeChild(d)}),d.open()},b.getTagSettings=function(a){var b={sources:[],tracks:[]},c=r.getElAttributes(a),d=c["data-setup"];if(r.hasElClass(a,"vjs-fluid")&&(c.fluid=!0),null!==d){var e=L["default"](d||"{}"),f=e[0],g=e[1];f&&z["default"].error(f),N["default"](c,g)}if(N["default"](b,c),a.hasChildNodes())for(var h=a.childNodes,i=0,j=h.length;j>i;i++){var k=h[i],l=k.nodeName.toLowerCase();"source"===l?b.sources.push(r.getElAttributes(k)):"track"===l&&b.tracks.push(r.getElAttributes(k))}return b},b.prototype.flexNotSupported_=function(){var a=l["default"].createElement("i");return!("flexBasis"in a.style||"webkitFlexBasis"in a.style||"mozFlexBasis"in a.style||"msFlexBasis"in a.style||"msFlexOrder"in a.style)},b}(j["default"]);_.players={};var aa=n["default"].navigator;_.prototype.options_={techOrder:["html5","flash"],html5:{},flash:{},defaultVolume:0,inactivityTimeout:2e3,playbackRates:[],children:["mediaLoader","posterImage","textTrackDisplay","loadingSpinner","bigPlayButton","controlBar","errorDisplay","textTrackSettings"],language:aa&&(aa.languages&&aa.languages[0]||aa.userLanguage||aa.language)||"en",languages:{},notSupportedMessage:"No compatible source was found for this media."},["ended","seeking","seekable","networkState","readyState"].forEach(function(a){_.prototype[a]=function(){return this.techGet_(a)}}),$.forEach(function(a){_.prototype["handleTech"+B["default"](a)+"_"]=function(){return this.trigger(a)}}),j["default"].registerComponent("Player",_),c["default"]=_},{1:1,138:138,147:147,4:4,41:41,44:44,45:45,46:46,5:5,50:50,55:55,59:59,60:60,61:61,62:62,63:63,68:68,69:69,71:71,76:76,78:78,79:79,8:8,81:81,82:82,83:83,85:85,86:86,87:87,89:89,90:90,91:91,94:94,95:95}],52:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}c.__esModule=!0;var e=a(51),f=d(e),g=function(a,b){f["default"].prototype[a]=b};c["default"]=g},{51:51}],53:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function g(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var h=a(3),i=d(h),j=a(5),k=d(j),l=function(a){function b(c){var d=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e(this,b);var g=f(this,a.call(this,c,d));return g.update(),g}return g(b,a),b.prototype.update=function(){var a=this.createPopup();this.popup&&this.removeChild(this.popup),this.popup=a,this.addChild(a),this.items&&0===this.items.length?this.hide():this.items&&this.items.length>1&&this.show()},b.prototype.createPopup=function(){},b.prototype.createEl=function(){return a.prototype.createEl.call(this,"div",{className:this.buildCSSClass()})},b.prototype.buildCSSClass=function(){var b="vjs-menu-button";return b+=this.options_.inline===!0?"-inline":"-popup","vjs-menu-button "+b+" "+a.prototype.buildCSSClass.call(this)},b}(i["default"]);k["default"].registerComponent("PopupButton",l),c["default"]=l},{3:3,5:5}],54:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i=a(5),j=e(i),k=a(81),l=d(k),m=a(83),n=d(m),o=a(82),p=d(o),q=function(a){function b(){return f(this,b),g(this,a.apply(this,arguments))}return h(b,a),b.prototype.addItem=function(a){this.addChild(a),a.on("click",n.bind(this,function(){this.unlockShowing()}))},b.prototype.createEl=function(){var b=this.options_.contentElType||"ul";this.contentEl_=l.createEl(b,{className:"vjs-menu-content"});var c=a.prototype.createEl.call(this,"div",{append:this.contentEl_,className:"vjs-menu"});return c.appendChild(this.contentEl_),p.on(c,"click",function(a){a.preventDefault(),a.stopImmediatePropagation()}),c},b}(j["default"]);j["default"].registerComponent("Popup",q),c["default"]=q},{5:5,81:81,82:82,83:83}],55:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i=a(3),j=e(i),k=a(5),l=e(k),m=a(83),n=d(m),o=a(81),p=d(o),q=a(78),r=d(q),s=function(a){function b(c,d){f(this,b);var e=g(this,a.call(this,c,d));return e.update(),c.on("posterchange",n.bind(e,e.update)),e}return h(b,a),b.prototype.dispose=function(){this.player().off("posterchange",this.update),a.prototype.dispose.call(this)},b.prototype.createEl=function(){var a=p.createEl("div",{className:"vjs-poster",tabIndex:-1});return r.BACKGROUND_SIZE_SUPPORTED||(this.fallbackImg_=p.createEl("img"),a.appendChild(this.fallbackImg_)),a},b.prototype.update=function(){var a=this.player().poster();this.setSrc(a),a?this.show():this.hide()},b.prototype.setSrc=function(a){if(this.fallbackImg_)this.fallbackImg_.src=a;else{var b="";a&&(b='url("'+a+'")'),this.el_.style.backgroundImage=b}},b.prototype.handleClick=function(){this.player_.paused()?this.player_.play():this.player_.pause();
},b}(j["default"]);l["default"].registerComponent("PosterImage",s),c["default"]=s},{3:3,5:5,78:78,81:81,83:83}],56:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function f(a,b){b&&(n=b),setTimeout(o,a)}c.__esModule=!0,c.hasLoaded=c.autoSetupTimeout=c.autoSetup=void 0;var g=a(82),h=e(g),i=a(94),j=d(i),k=a(95),l=d(k),m=!1,n=void 0,o=function(){var a=j["default"].getElementsByTagName("video"),b=j["default"].getElementsByTagName("audio"),c=[];if(a&&a.length>0)for(var d=0,e=a.length;e>d;d++)c.push(a[d]);if(b&&b.length>0)for(var g=0,h=b.length;h>g;g++)c.push(b[g]);if(c&&c.length>0)for(var i=0,k=c.length;k>i;i++){var l=c[i];if(!l||!l.getAttribute){f(1);break}if(void 0===l.player){var o=l.getAttribute("data-setup");null!==o&&n(l)}}else m||f(1)};"complete"===j["default"].readyState?m=!0:h.one(l["default"],"load",function(){m=!0});var p=function(){return m};c.autoSetup=o,c.autoSetupTimeout=f,c.hasLoaded=p},{82:82,94:94,95:95}],57:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i=a(5),j=e(i),k=a(81),l=d(k),m=a(138),n=e(m),o=function(a){function b(c,d){f(this,b);var e=g(this,a.call(this,c,d));return e.bar=e.getChild(e.options_.barName),e.vertical(!!e.options_.vertical),e.on("mousedown",e.handleMouseDown),e.on("touchstart",e.handleMouseDown),e.on("focus",e.handleFocus),e.on("blur",e.handleBlur),e.on("click",e.handleClick),e.on(c,"controlsvisible",e.update),e.on(c,e.playerEvent,e.update),e}return h(b,a),b.prototype.createEl=function(b){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},d=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return c.className=c.className+" vjs-slider",c=n["default"]({tabIndex:0},c),d=n["default"]({role:"slider","aria-valuenow":0,"aria-valuemin":0,"aria-valuemax":100,tabIndex:0},d),a.prototype.createEl.call(this,b,c,d)},b.prototype.handleMouseDown=function(a){var b=this.bar.el_.ownerDocument;a.preventDefault(),l.blockTextSelection(),this.addClass("vjs-sliding"),this.trigger("slideractive"),this.on(b,"mousemove",this.handleMouseMove),this.on(b,"mouseup",this.handleMouseUp),this.on(b,"touchmove",this.handleMouseMove),this.on(b,"touchend",this.handleMouseUp),this.handleMouseMove(a)},b.prototype.handleMouseMove=function(){},b.prototype.handleMouseUp=function(){var a=this.bar.el_.ownerDocument;l.unblockTextSelection(),this.removeClass("vjs-sliding"),this.trigger("sliderinactive"),this.off(a,"mousemove",this.handleMouseMove),this.off(a,"mouseup",this.handleMouseUp),this.off(a,"touchmove",this.handleMouseMove),this.off(a,"touchend",this.handleMouseUp),this.update()},b.prototype.update=function(){if(this.el_){var a=this.getPercent(),b=this.bar;if(b){("number"!=typeof a||a!==a||0>a||a===1/0)&&(a=0);var c=(100*a).toFixed(2)+"%";this.vertical()?b.el().style.height=c:b.el().style.width=c}}},b.prototype.calculateDistance=function(a){var b=l.getPointerPosition(this.el_,a);return this.vertical()?b.y:b.x},b.prototype.handleFocus=function(){this.on(this.bar.el_.ownerDocument,"keydown",this.handleKeyPress)},b.prototype.handleKeyPress=function(a){37===a.which||40===a.which?(a.preventDefault(),this.stepBack()):38!==a.which&&39!==a.which||(a.preventDefault(),this.stepForward())},b.prototype.handleBlur=function(){this.off(this.bar.el_.ownerDocument,"keydown",this.handleKeyPress)},b.prototype.handleClick=function(a){a.stopImmediatePropagation(),a.preventDefault()},b.prototype.vertical=function(a){return void 0===a?this.vertical_||!1:(this.vertical_=!!a,this.vertical_?this.addClass("vjs-slider-vertical"):this.addClass("vjs-slider-horizontal"),this)},b}(j["default"]);j["default"].registerComponent("Slider",o),c["default"]=o},{138:138,5:5,81:81}],58:[function(a,b,c){"use strict";function d(a){return a.streamingFormats={"rtmp/mp4":"MP4","rtmp/flv":"FLV"},a.streamFromParts=function(a,b){return a+"&"+b},a.streamToParts=function(a){var b={connection:"",stream:""};if(!a)return b;var c=a.search(/&(?!\w+=)/),d=void 0;return-1!==c?d=c+1:(c=d=a.lastIndexOf("/")+1,0===c&&(c=d=a.length)),b.connection=a.substring(0,c),b.stream=a.substring(d,a.length),b},a.isStreamingType=function(b){return b in a.streamingFormats},a.RTMP_RE=/^rtmp[set]?:\/\//i,a.isStreamingSrc=function(b){return a.RTMP_RE.test(b)},a.rtmpSourceHandler={},a.rtmpSourceHandler.canPlayType=function(b){return a.isStreamingType(b)?"maybe":""},a.rtmpSourceHandler.canHandleSource=function(b,c){var d=a.rtmpSourceHandler.canPlayType(b.type);return d?d:a.isStreamingSrc(b.src)?"maybe":""},a.rtmpSourceHandler.handleSource=function(b,c,d){var e=a.streamToParts(b.src);c.setRtmpConnection(e.connection),c.setRtmpStream(e.stream)},a.registerSourceHandler(a.rtmpSourceHandler),a}c.__esModule=!0,c["default"]=d},{}],59:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}function i(a){var b=a.charAt(0).toUpperCase()+a.slice(1);B["set"+b]=function(b){return this.el_.vjs_setProperty(a,b)}}function j(a){B[a]=function(){return this.el_.vjs_getProperty(a)}}c.__esModule=!0;for(var k=a(62),l=e(k),m=a(81),n=d(m),o=a(92),p=d(o),q=a(90),r=a(58),s=e(r),t=a(5),u=e(t),v=a(95),w=e(v),x=a(138),y=e(x),z=w["default"].navigator,A=function(a){function b(c,d){f(this,b);var e=g(this,a.call(this,c,d));return c.source&&e.ready(function(){this.setSource(c.source)},!0),c.startTime&&e.ready(function(){this.load(),this.play(),this.currentTime(c.startTime)},!0),w["default"].videojs=w["default"].videojs||{},w["default"].videojs.Flash=w["default"].videojs.Flash||{},w["default"].videojs.Flash.onReady=b.onReady,w["default"].videojs.Flash.onEvent=b.onEvent,w["default"].videojs.Flash.onError=b.onError,e.on("seeked",function(){this.lastSeekTarget_=void 0}),e}return h(b,a),b.prototype.createEl=function(){var a=this.options_;if(!a.swf){var c="5.1.0";a.swf="//vjs.zencdn.net/swf/"+c+"/video-js.swf"}var d=a.techId,e=y["default"]({readyFunction:"videojs.Flash.onReady",eventProxyFunction:"videojs.Flash.onEvent",errorEventProxyFunction:"videojs.Flash.onError",autoplay:a.autoplay,preload:a.preload,loop:a.loop,muted:a.muted},a.flashVars),f=y["default"]({wmode:"opaque",bgcolor:"#000000"},a.params),g=y["default"]({id:d,name:d,"class":"vjs-tech"},a.attributes);return this.el_=b.embed(a.swf,e,f,g),this.el_.tech=this,this.el_},b.prototype.play=function(){this.ended()&&this.setCurrentTime(0),this.el_.vjs_play()},b.prototype.pause=function(){this.el_.vjs_pause()},b.prototype.src=function(a){return void 0===a?this.currentSrc():this.setSrc(a)},b.prototype.setSrc=function(a){var b=this;a=p.getAbsoluteURL(a),this.el_.vjs_src(a),this.autoplay()&&this.setTimeout(function(){return b.play()},0)},b.prototype.seeking=function(){return void 0!==this.lastSeekTarget_},b.prototype.setCurrentTime=function(b){var c=this.seekable();c.length&&(b=b>c.start(0)?b:c.start(0),b=b<c.end(c.length-1)?b:c.end(c.length-1),this.lastSeekTarget_=b,this.trigger("seeking"),this.el_.vjs_setProperty("currentTime",b),a.prototype.setCurrentTime.call(this))},b.prototype.currentTime=function(a){return this.seeking()?this.lastSeekTarget_||0:this.el_.vjs_getProperty("currentTime")},b.prototype.currentSrc=function(){return this.currentSource_?this.currentSource_.src:this.el_.vjs_getProperty("currentSrc")},b.prototype.duration=function c(){if(0===this.readyState())return NaN;var c=this.el_.vjs_getProperty("duration");return c>=0?c:1/0},b.prototype.load=function(){this.el_.vjs_load()},b.prototype.poster=function(){this.el_.vjs_getProperty("poster")},b.prototype.setPoster=function(){},b.prototype.seekable=function(){var a=this.duration();return 0===a?q.createTimeRange():q.createTimeRange(0,a)},b.prototype.buffered=function(){var a=this.el_.vjs_getProperty("buffered");return 0===a.length?q.createTimeRange():q.createTimeRange(a[0][0],a[0][1])},b.prototype.supportsFullScreen=function(){return!1},b.prototype.enterFullScreen=function(){return!1},b}(l["default"]),B=A.prototype,C="rtmpConnection,rtmpStream,preload,defaultPlaybackRate,playbackRate,autoplay,loop,mediaGroup,controller,controls,volume,muted,defaultMuted".split(","),D="networkState,readyState,initialTime,startOffsetTime,paused,ended,videoWidth,videoHeight".split(","),E=0;E<C.length;E++)j(C[E]),i(C[E]);for(var F=0;F<D.length;F++)j(D[F]);A.isSupported=function(){return A.version()[0]>=10},l["default"].withSourceHandlers(A),A.nativeSourceHandler={},A.nativeSourceHandler.canPlayType=function(a){return a in A.formats?"maybe":""},A.nativeSourceHandler.canHandleSource=function(a,b){function c(a){var b=p.getFileExtension(a);return b?"video/"+b:""}var d=void 0;return d=a.type?a.type.replace(/;.*/,"").toLowerCase():c(a.src),A.nativeSourceHandler.canPlayType(d)},A.nativeSourceHandler.handleSource=function(a,b,c){b.setSrc(a.src)},A.nativeSourceHandler.dispose=function(){},A.registerSourceHandler(A.nativeSourceHandler),A.formats={"video/flv":"FLV","video/x-flv":"FLV","video/mp4":"MP4","video/m4v":"MP4"},A.onReady=function(a){var b=n.getEl(a),c=b&&b.tech;c&&c.el()&&A.checkReady(c)},A.checkReady=function(a){a.el()&&(a.el().vjs_getProperty?a.triggerReady():this.setTimeout(function(){A.checkReady(a)},50))},A.onEvent=function(a,b){var c=n.getEl(a).tech,d=Array.prototype.slice.call(arguments,2);c.setTimeout(function(){c.trigger(b,d)},1)},A.onError=function(a,b){var c=n.getEl(a).tech;return"srcnotfound"===b?c.error(4):void c.error("FLASH: "+b)},A.version=function(){var a="0,0,0";try{a=new w["default"].ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").replace(/\D+/g,",").match(/^,?(.+),?$/)[1]}catch(b){try{z.mimeTypes["application/x-shockwave-flash"].enabledPlugin&&(a=(z.plugins["Shockwave Flash 2.0"]||z.plugins["Shockwave Flash"]).description.replace(/\D+/g,",").match(/^,?(.+),?$/)[1])}catch(c){}}return a.split(",")},A.embed=function(a,b,c,d){var e=A.getEmbedCode(a,b,c,d),f=n.createEl("div",{innerHTML:e}).childNodes[0];return f},A.getEmbedCode=function(a,b,c,d){var e='<object type="application/x-shockwave-flash" ',f="",g="",h="";return b&&Object.getOwnPropertyNames(b).forEach(function(a){f+=a+"="+b[a]+"&amp;"}),c=y["default"]({movie:a,flashvars:f,allowScriptAccess:"always",allowNetworking:"all"},c),Object.getOwnPropertyNames(c).forEach(function(a){g+='<param name="'+a+'" value="'+c[a]+'" />'}),d=y["default"]({data:a,width:"100%",height:"100%"},d),Object.getOwnPropertyNames(d).forEach(function(a){h+=a+'="'+d[a]+'" '}),""+e+h+">"+g+"</object>"},s["default"](A),u["default"].registerComponent("Flash",A),l["default"].registerTech("Flash",A),c["default"]=A},{138:138,5:5,58:58,62:62,81:81,90:90,92:92,95:95}],60:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){return a.raw=b,a}function g(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function h(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function i(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},k=f(["Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\n            This may prevent text tracks from loading."],["Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\n            This may prevent text tracks from loading."]),l=a(62),m=e(l),n=a(5),o=e(n),p=a(81),q=d(p),r=a(92),s=d(r),t=a(83),u=d(t),v=a(86),w=e(v),x=a(148),y=e(x),z=a(78),A=d(z),B=a(94),C=e(B),D=a(95),E=e(D),F=a(138),G=e(F),H=a(87),I=e(H),J=a(91),K=e(J),L=function(a){function b(c,d){g(this,b);var e=h(this,a.call(this,c,d)),f=c.source,i=!1;if(f&&(e.el_.currentSrc!==f.src||c.tag&&3===c.tag.initNetworkState_)?e.setSource(f):e.handleLateInit_(e.el_),e.el_.hasChildNodes()){for(var j=e.el_.childNodes,l=j.length,m=[];l--;){var n=j[l],o=n.nodeName.toLowerCase();"track"===o&&(e.featuresNativeTextTracks?(e.remoteTextTrackEls().addTrackElement_(n),e.remoteTextTracks().addTrack_(n.track),i||e.el_.hasAttribute("crossorigin")||!s.isCrossOrigin(n.src)||(i=!0)):m.push(n))}for(var p=0;p<m.length;p++)e.el_.removeChild(m[p])}var q=["audio","video"];return q.forEach(function(a){var b=e.el()[a+"Tracks"],c=e[a+"Tracks"](),d=K["default"](a);e["featuresNative"+d+"Tracks"]&&b&&b.addEventListener&&(e["handle"+d+"TrackChange_"]=function(a){c.trigger({type:"change",target:c,currentTarget:c,srcElement:c})},e["handle"+d+"TrackAdd_"]=function(a){return c.addTrack(a.track)},e["handle"+d+"TrackRemove_"]=function(a){return c.removeTrack(a.track)},b.addEventListener("change",e["handle"+d+"TrackChange_"]),b.addEventListener("addtrack",e["handle"+d+"TrackAdd_"]),b.addEventListener("removetrack",e["handle"+d+"TrackRemove_"]),e["removeOld"+d+"Tracks_"]=function(a){return e.removeOldTracks_(c,b)},e.on("loadstart",e["removeOld"+d+"Tracks_"]))}),e.featuresNativeTextTracks&&(i&&w["default"].warn(y["default"](k)),e.handleTextTrackChange_=u.bind(e,e.handleTextTrackChange),e.handleTextTrackAdd_=u.bind(e,e.handleTextTrackAdd),e.handleTextTrackRemove_=u.bind(e,e.handleTextTrackRemove),e.proxyNativeTextTracks_()),(A.TOUCH_ENABLED||A.IS_IPHONE||A.IS_NATIVE_ANDROID)&&c.nativeControlsForTouch===!0&&e.setControls(!0),e.proxyWebkitFullscreen_(),e.triggerReady(),e}return i(b,a),b.prototype.dispose=function(){var c=this;["audio","video","text"].forEach(function(a){var b=K["default"](a),d=c.el_[a+"Tracks"];d&&d.removeEventListener&&(d.removeEventListener("change",c["handle"+b+"TrackChange_"]),d.removeEventListener("addtrack",c["handle"+b+"TrackAdd_"]),d.removeEventListener("removetrack",c["handle"+b+"TrackRemove_"])),d&&c.off("loadstart",c["removeOld"+b+"Tracks_"])}),b.disposeMediaElement(this.el_),a.prototype.dispose.call(this)},b.prototype.createEl=function(){var a=this.options_.tag;if(!a||this.movingMediaElementInDOM===!1){if(a){var c=a.cloneNode(!0);a.parentNode.insertBefore(c,a),b.disposeMediaElement(a),a=c}else{a=C["default"].createElement("video");var d=this.options_.tag&&q.getElAttributes(this.options_.tag),e=I["default"]({},d);A.TOUCH_ENABLED&&this.options_.nativeControlsForTouch===!0||delete e.controls,q.setElAttributes(a,G["default"](e,{id:this.options_.techId,"class":"vjs-tech"}))}a.playerId=this.options_.playerId}for(var f=["autoplay","preload","loop","muted"],g=f.length-1;g>=0;g--){var h=f[g],i={};"undefined"!=typeof this.options_[h]&&(i[h]=this.options_[h]),q.setElAttributes(a,i)}return a},b.prototype.handleLateInit_=function(a){var b=this;if(0!==a.networkState&&3!==a.networkState){if(0===a.readyState){var c=function(){var a=!1,c=function(){a=!0};b.on("loadstart",c);var d=function(){a||this.trigger("loadstart")};return b.on("loadedmetadata",d),b.ready(function(){this.off("loadstart",c),this.off("loadedmetadata",d),a||this.trigger("loadstart")}),{v:void 0}}();if("object"===("undefined"==typeof c?"undefined":j(c)))return c.v}var d=["loadstart"];d.push("loadedmetadata"),a.readyState>=2&&d.push("loadeddata"),a.readyState>=3&&d.push("canplay"),a.readyState>=4&&d.push("canplaythrough"),this.ready(function(){d.forEach(function(a){this.trigger(a)},this)})}},b.prototype.proxyNativeTextTracks_=function(){var a=this.el().textTracks;if(a){for(var b=0;b<a.length;b++)this.textTracks().addTrack_(a[b]);a.addEventListener&&(a.addEventListener("change",this.handleTextTrackChange_),a.addEventListener("addtrack",this.handleTextTrackAdd_),a.addEventListener("removetrack",this.handleTextTrackRemove_)),this.on("loadstart",this.removeOldTextTracks_)}},b.prototype.handleTextTrackChange=function(a){var b=this.textTracks();this.textTracks().trigger({type:"change",target:b,currentTarget:b,srcElement:b})},b.prototype.handleTextTrackAdd=function(a){this.textTracks().addTrack_(a.track)},b.prototype.handleTextTrackRemove=function(a){this.textTracks().removeTrack_(a.track)},b.prototype.removeOldTracks_=function(a,b){var c=[];if(b){for(var d=0;d<a.length;d++){for(var e=a[d],f=!1,g=0;g<b.length;g++)if(b[g]===e){f=!0;break}f||c.push(e)}for(var h=0;h<c.length;h++){var i=c[h];a.removeTrack_(i)}}},b.prototype.removeOldTextTracks_=function(){var a=this.textTracks(),b=this.el().textTracks;this.removeOldTracks_(a,b)},b.prototype.play=function(){var a=this.el_.play();void 0!==a&&"function"==typeof a.then&&a.then(null,function(a){})},b.prototype.setCurrentTime=function(a){try{this.el_.currentTime=a}catch(b){w["default"](b,"Video is not ready. (Video.js)")}},b.prototype.duration=function(){var a=this;if(this.el_.duration===1/0&&A.IS_ANDROID&&A.IS_CHROME&&0===this.el_.currentTime){var b=function(){var b=function c(){a.el_.currentTime>0&&(a.el_.duration===1/0&&a.trigger("durationchange"),a.off(a.player_,"timeupdate",c))};return a.on(a.player_,"timeupdate",b),{v:NaN}}();if("object"===("undefined"==typeof b?"undefined":j(b)))return b.v}return this.el_.duration||NaN},b.prototype.width=function(){return this.el_.offsetWidth},b.prototype.height=function(){return this.el_.offsetHeight},b.prototype.proxyWebkitFullscreen_=function(){var a=this;if("webkitDisplayingFullscreen"in this.el_){var b=function(){this.trigger("fullscreenchange",{isFullscreen:!1})},c=function(){this.one("webkitendfullscreen",b),this.trigger("fullscreenchange",{isFullscreen:!0})};this.on("webkitbeginfullscreen",c),this.on("dispose",function(){a.off("webkitbeginfullscreen",c),a.off("webkitendfullscreen",b)})}},b.prototype.supportsFullScreen=function(){if("function"==typeof this.el_.webkitEnterFullScreen){var a=E["default"].navigator&&E["default"].navigator.userAgent||"";if(/Android/.test(a)||!/Chrome|Mac OS X 10.5/.test(a))return!0}return!1},b.prototype.enterFullScreen=function(){var a=this.el_;a.paused&&a.networkState<=a.HAVE_METADATA?(this.el_.play(),this.setTimeout(function(){a.pause(),a.webkitEnterFullScreen()},0)):a.webkitEnterFullScreen()},b.prototype.exitFullScreen=function(){this.el_.webkitExitFullScreen()},b.prototype.src=function(a){return void 0===a?this.el_.src:void this.setSrc(a)},b.prototype.reset=function(){b.resetMediaElement(this.el_)},b.prototype.currentSrc=function(){return this.currentSource_?this.currentSource_.src:this.el_.currentSrc},b.prototype.setControls=function(a){this.el_.controls=!!a},b.prototype.addTextTrack=function(b,c,d){return this.featuresNativeTextTracks?this.el_.addTextTrack(b,c,d):a.prototype.addTextTrack.call(this,b,c,d)},b.prototype.createRemoteTextTrack=function(b){if(!this.featuresNativeTextTracks)return a.prototype.createRemoteTextTrack.call(this,b);var c=C["default"].createElement("track");return b.kind&&(c.kind=b.kind),b.label&&(c.label=b.label),(b.language||b.srclang)&&(c.srclang=b.language||b.srclang),b["default"]&&(c["default"]=b["default"]),b.id&&(c.id=b.id),b.src&&(c.src=b.src),c},b.prototype.addRemoteTextTrack=function(b,c){var d=a.prototype.addRemoteTextTrack.call(this,b,c);return this.featuresNativeTextTracks&&this.el().appendChild(d),d},b.prototype.removeRemoteTextTrack=function(b){if(a.prototype.removeRemoteTextTrack.call(this,b),this.featuresNativeTextTracks)for(var c=this.$$("track"),d=c.length;d--;)b!==c[d]&&b!==c[d].track||this.el().removeChild(c[d])},b}(m["default"]);L.TEST_VID=C["default"].createElement("video");var M=C["default"].createElement("track");M.kind="captions",M.srclang="en",M.label="English",L.TEST_VID.appendChild(M),L.isSupported=function(){try{L.TEST_VID.volume=.5}catch(a){return!1}return!!L.TEST_VID.canPlayType},L.canControlVolume=function(){try{var a=L.TEST_VID.volume;return L.TEST_VID.volume=a/2+.1,a!==L.TEST_VID.volume}catch(b){return!1}},L.canControlPlaybackRate=function(){if(A.IS_ANDROID&&A.IS_CHROME)return!1;try{var a=L.TEST_VID.playbackRate;return L.TEST_VID.playbackRate=a/2+.1,a!==L.TEST_VID.playbackRate}catch(b){return!1}},L.supportsNativeTextTracks=function(){var a=void 0;return a=!!L.TEST_VID.textTracks,a&&L.TEST_VID.textTracks.length>0&&(a="number"!=typeof L.TEST_VID.textTracks[0].mode),a&&A.IS_FIREFOX&&(a=!1),!a||"onremovetrack"in L.TEST_VID.textTracks||(a=!1),a},L.supportsNativeVideoTracks=function(){var a=!!L.TEST_VID.videoTracks;return a},L.supportsNativeAudioTracks=function(){var a=!!L.TEST_VID.audioTracks;return a},L.Events=["loadstart","suspend","abort","error","emptied","stalled","loadedmetadata","loadeddata","canplay","canplaythrough","playing","waiting","seeking","seeked","ended","durationchange","timeupdate","progress","play","pause","ratechange","volumechange"],L.prototype.featuresVolumeControl=L.canControlVolume(),L.prototype.featuresPlaybackRate=L.canControlPlaybackRate(),L.prototype.movingMediaElementInDOM=!A.IS_IOS,L.prototype.featuresFullscreenResize=!0,L.prototype.featuresProgressEvents=!0,L.prototype.featuresTimeupdateEvents=!0,L.prototype.featuresNativeTextTracks=L.supportsNativeTextTracks(),L.prototype.featuresNativeVideoTracks=L.supportsNativeVideoTracks(),L.prototype.featuresNativeAudioTracks=L.supportsNativeAudioTracks();var N=void 0,O=/^application\/(?:x-|vnd\.apple\.)mpegurl/i,P=/^video\/mp4/i;L.patchCanPlayType=function(){A.ANDROID_VERSION>=4&&!A.IS_FIREFOX&&(N||(N=L.TEST_VID.constructor.prototype.canPlayType),L.TEST_VID.constructor.prototype.canPlayType=function(a){return a&&O.test(a)?"maybe":N.call(this,a)}),A.IS_OLD_ANDROID&&(N||(N=L.TEST_VID.constructor.prototype.canPlayType),L.TEST_VID.constructor.prototype.canPlayType=function(a){return a&&P.test(a)?"maybe":N.call(this,a)})},L.unpatchCanPlayType=function(){var a=L.TEST_VID.constructor.prototype.canPlayType;return L.TEST_VID.constructor.prototype.canPlayType=N,N=null,a},L.patchCanPlayType(),L.disposeMediaElement=function(a){if(a){for(a.parentNode&&a.parentNode.removeChild(a);a.hasChildNodes();)a.removeChild(a.firstChild);a.removeAttribute("src"),"function"==typeof a.load&&!function(){try{a.load()}catch(b){}}()}},L.resetMediaElement=function(a){if(a){for(var b=a.querySelectorAll("source"),c=b.length;c--;)a.removeChild(b[c]);a.removeAttribute("src"),"function"==typeof a.load&&!function(){try{a.load()}catch(b){}}()}},["paused","currentTime","buffered","volume","muted","poster","preload","autoplay","controls","loop","error","seeking","seekable","ended","defaultMuted","playbackRate","played","networkState","readyState","videoWidth","videoHeight"].forEach(function(a){L.prototype[a]=function(){return this.el_[a]}}),["volume","muted","src","poster","preload","autoplay","loop","playbackRate"].forEach(function(a){L.prototype["set"+K["default"](a)]=function(b){this.el_[a]=b}}),["pause","load"].forEach(function(a){L.prototype[a]=function(){return this.el_[a]()}}),m["default"].withSourceHandlers(L),L.nativeSourceHandler={},L.nativeSourceHandler.canPlayType=function(a){try{return L.TEST_VID.canPlayType(a)}catch(b){return""}},L.nativeSourceHandler.canHandleSource=function(a,b){if(a.type)return L.nativeSourceHandler.canPlayType(a.type);if(a.src){var c=s.getFileExtension(a.src);return L.nativeSourceHandler.canPlayType("video/"+c)}return""},L.nativeSourceHandler.handleSource=function(a,b,c){b.setSrc(a.src)},L.nativeSourceHandler.dispose=function(){},L.registerSourceHandler(L.nativeSourceHandler),o["default"].registerComponent("Html5",L),m["default"].registerTech("Html5",L),c["default"]=L},{138:138,148:148,5:5,62:62,78:78,81:81,83:83,86:86,87:87,91:91,92:92,94:94,95:95}],61:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function g(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var h=a(5),i=d(h),j=a(62),k=d(j),l=a(91),m=d(l),n=function(a){function b(c,d,g){e(this,b);var h=f(this,a.call(this,c,d,g));if(d.playerOptions.sources&&0!==d.playerOptions.sources.length)c.src(d.playerOptions.sources);else for(var j=0,l=d.playerOptions.techOrder;j<l.length;j++){var n=m["default"](l[j]),o=k["default"].getTech(n);if(n||(o=i["default"].getComponent(n)),o&&o.isSupported()){c.loadTech_(n);break}}return h}return g(b,a),b}(i["default"]);i["default"].registerComponent("MediaLoader",n),c["default"]=n},{5:5,62:62,91:91}],62:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}function i(a,b,c,d){var e=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},f=a.textTracks();e.kind=b,c&&(e.label=c),d&&(e.language=d),e.tech=a;var g=new s["default"](e);return f.addTrack_(g),g}c.__esModule=!0;var j=a(5),k=e(j),l=a(66),m=e(l),n=a(65),o=e(n),p=a(87),q=e(p),r=a(72),s=e(r),t=a(70),u=e(t),v=a(76),w=e(v),x=a(63),y=e(x),z=a(83),A=d(z),B=a(86),C=e(B),D=a(90),E=a(79),F=a(46),G=e(F),H=a(95),I=e(H),J=a(94),K=e(J),L=function(a){function b(){var c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},d=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};f(this,b),c.reportTouchActivity=!1;var e=g(this,a.call(this,null,c,d));return e.hasStarted_=!1,e.on("playing",function(){this.hasStarted_=!0}),e.on("loadstart",function(){this.hasStarted_=!1}),e.textTracks_=c.textTracks,e.videoTracks_=c.videoTracks,e.audioTracks_=c.audioTracks,e.featuresProgressEvents||e.manualProgressOn(),e.featuresTimeupdateEvents||e.manualTimeUpdatesOn(),c.nativeCaptions!==!1&&c.nativeTextTracks!==!1||(e.featuresNativeTextTracks=!1),e.featuresNativeTextTracks||e.emulateTextTracks(),e.autoRemoteTextTracks_=new u["default"],e.initTextTrackListeners(),e.initTrackListeners(),e.emitTapEvents(),e}return h(b,a),b.prototype.manualProgressOn=function(){this.on("durationchange",this.onDurationChange),this.manualProgress=!0,this.one("ready",this.trackProgress)},b.prototype.manualProgressOff=function(){this.manualProgress=!1,this.stopTrackingProgress(),this.off("durationchange",this.onDurationChange)},b.prototype.trackProgress=function(){this.stopTrackingProgress(),this.progressInterval=this.setInterval(A.bind(this,function(){var a=this.bufferedPercent();this.bufferedPercent_!==a&&this.trigger("progress"),this.bufferedPercent_=a,1===a&&this.stopTrackingProgress()}),500)},b.prototype.onDurationChange=function(){this.duration_=this.duration()},b.prototype.buffered=function(){return D.createTimeRange(0,0)},b.prototype.bufferedPercent=function(){return E.bufferedPercent(this.buffered(),this.duration_)},b.prototype.stopTrackingProgress=function(){this.clearInterval(this.progressInterval)},b.prototype.manualTimeUpdatesOn=function(){this.manualTimeUpdates=!0,this.on("play",this.trackCurrentTime),this.on("pause",this.stopTrackingCurrentTime)},b.prototype.manualTimeUpdatesOff=function(){this.manualTimeUpdates=!1,this.stopTrackingCurrentTime(),this.off("play",this.trackCurrentTime),this.off("pause",this.stopTrackingCurrentTime)},b.prototype.trackCurrentTime=function(){this.currentTimeInterval&&this.stopTrackingCurrentTime(),this.currentTimeInterval=this.setInterval(function(){this.trigger({type:"timeupdate",target:this,manuallyTriggered:!0})},250)},b.prototype.stopTrackingCurrentTime=function(){this.clearInterval(this.currentTimeInterval),this.trigger({type:"timeupdate",target:this,manuallyTriggered:!0})},b.prototype.dispose=function(){this.clearTracks(["audio","video","text"]),this.manualProgress&&this.manualProgressOff(),this.manualTimeUpdates&&this.manualTimeUpdatesOff(),a.prototype.dispose.call(this)},b.prototype.clearTracks=function(a){var b=this;a=[].concat(a),a.forEach(function(a){for(var c=b[a+"Tracks"]()||[],d=c.length;d--;){var e=c[d];"text"===a&&b.removeRemoteTextTrack(e),c.removeTrack_(e)}})},b.prototype.cleanupAutoTextTracks=function(){for(var a=this.autoRemoteTextTracks_||[],b=a.length;b--;){var c=a[b];this.removeRemoteTextTrack(c)}},b.prototype.reset=function(){},b.prototype.error=function(a){return void 0!==a&&(this.error_=new G["default"](a),this.trigger("error")),this.error_},b.prototype.played=function(){return this.hasStarted_?D.createTimeRange(0,0):D.createTimeRange()},b.prototype.setCurrentTime=function(){this.manualTimeUpdates&&this.trigger({type:"timeupdate",target:this,manuallyTriggered:!0})},b.prototype.initTextTrackListeners=function(){var a=A.bind(this,function(){this.trigger("texttrackchange")}),b=this.textTracks();b&&(b.addEventListener("removetrack",a),b.addEventListener("addtrack",a),this.on("dispose",A.bind(this,function(){b.removeEventListener("removetrack",a),b.removeEventListener("addtrack",a)})))},b.prototype.initTrackListeners=function(){var a=this,b=["video","audio"];b.forEach(function(b){var c=function(){a.trigger(b+"trackchange")},d=a[b+"Tracks"]();d.addEventListener("removetrack",c),d.addEventListener("addtrack",c),a.on("dispose",function(){d.removeEventListener("removetrack",c),d.removeEventListener("addtrack",c)})})},b.prototype.addWebVttScript_=function(){var a=this;I["default"].WebVTT||null===this.el().parentNode||void 0===this.el().parentNode||!function(){var b=K["default"].createElement("script");b.src=a.options_["vtt.js"]||"https://cdn.rawgit.com/gkatsev/vtt.js/vjs-v0.12.1/dist/vtt.min.js",
b.onload=function(){a.trigger("vttjsloaded")},b.onerror=function(){a.trigger("vttjserror")},a.on("dispose",function(){b.onload=null,b.onerror=null}),I["default"].WebVTT=!0,a.el().parentNode.appendChild(b)}()},b.prototype.emulateTextTracks=function(){var a=this,b=this.textTracks();if(b){this.remoteTextTracks().on("addtrack",function(b){a.textTracks().addTrack_(b.track)}),this.remoteTextTracks().on("removetrack",function(b){a.textTracks().removeTrack_(b.track)}),this.on("ready",this.addWebVttScript_);var c=function(){return a.trigger("texttrackchange")},d=function(){c();for(var a=0;a<b.length;a++){var d=b[a];d.removeEventListener("cuechange",c),"showing"===d.mode&&d.addEventListener("cuechange",c)}};d(),b.addEventListener("change",d),this.on("dispose",function(){b.removeEventListener("change",d)})}},b.prototype.videoTracks=function(){return this.videoTracks_=this.videoTracks_||new w["default"],this.videoTracks_},b.prototype.audioTracks=function(){return this.audioTracks_=this.audioTracks_||new y["default"],this.audioTracks_},b.prototype.textTracks=function(){return this.textTracks_=this.textTracks_||new u["default"],this.textTracks_},b.prototype.remoteTextTracks=function(){return this.remoteTextTracks_=this.remoteTextTracks_||new u["default"],this.remoteTextTracks_},b.prototype.remoteTextTrackEls=function(){return this.remoteTextTrackEls_=this.remoteTextTrackEls_||new o["default"],this.remoteTextTrackEls_},b.prototype.addTextTrack=function(a,b,c){if(!a)throw new Error("TextTrack kind is required but was not provided");return i(this,a,b,c)},b.prototype.createRemoteTextTrack=function(a){var b=q["default"](a,{tech:this});return new m["default"](b)},b.prototype.addRemoteTextTrack=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},b=arguments[1],c=this.createRemoteTextTrack(a);return b!==!0&&b!==!1&&(C["default"].warn('Calling addRemoteTextTrack without explicitly setting the "manualCleanup" parameter to `true` is deprecated and default to `false` in future version of video.js'),b=!0),this.remoteTextTrackEls().addTrackElement_(c),this.remoteTextTracks().addTrack_(c.track),b!==!0&&this.autoRemoteTextTracks_.addTrack_(c.track),c},b.prototype.removeRemoteTextTrack=function(a){var b=this.remoteTextTrackEls().getTrackElementByTrack_(a);this.remoteTextTrackEls().removeTrackElement_(b),this.remoteTextTracks().removeTrack_(a),this.autoRemoteTextTracks_.removeTrack_(a)},b.prototype.setPoster=function(){},b.prototype.canPlayType=function(){return""},b.isTech=function(a){return a.prototype instanceof b||a instanceof b||a===b},b.registerTech=function(a,c){if(b.techs_||(b.techs_={}),!b.isTech(c))throw new Error("Tech "+a+" must be a Tech");return b.techs_[a]=c,c},b.getTech=function(a){return b.techs_&&b.techs_[a]?b.techs_[a]:I["default"]&&I["default"].videojs&&I["default"].videojs[a]?(C["default"].warn("The "+a+" tech was added to the videojs object when it should be registered using videojs.registerTech(name, tech)"),I["default"].videojs[a]):void 0},b}(k["default"]);L.prototype.textTracks_,L.prototype.audioTracks_,L.prototype.videoTracks_,L.prototype.featuresVolumeControl=!0,L.prototype.featuresFullscreenResize=!1,L.prototype.featuresPlaybackRate=!1,L.prototype.featuresProgressEvents=!1,L.prototype.featuresTimeupdateEvents=!1,L.prototype.featuresNativeTextTracks=!1,L.withSourceHandlers=function(a){a.registerSourceHandler=function(b,c){var d=a.sourceHandlers;d||(d=a.sourceHandlers=[]),void 0===c&&(c=d.length),d.splice(c,0,b)},a.canPlayType=function(b){for(var c=a.sourceHandlers||[],d=void 0,e=0;e<c.length;e++)if(d=c[e].canPlayType(b))return d;return""},a.selectSourceHandler=function(b,c){for(var d=a.sourceHandlers||[],e=void 0,f=0;f<d.length;f++)if(e=d[f].canHandleSource(b,c))return d[f];return null},a.canPlaySource=function(b,c){var d=a.selectSourceHandler(b,c);return d?d.canHandleSource(b,c):""};var b=["seekable","duration"];b.forEach(function(a){var b=this[a];"function"==typeof b&&(this[a]=function(){return this.sourceHandler_&&this.sourceHandler_[a]?this.sourceHandler_[a].apply(this.sourceHandler_,arguments):b.apply(this,arguments)})},a.prototype),a.prototype.setSource=function(b){var c=a.selectSourceHandler(b,this.options_);return c||(a.nativeSourceHandler?c=a.nativeSourceHandler:C["default"].error("No source hander found for the current source.")),this.disposeSourceHandler(),this.off("dispose",this.disposeSourceHandler),c!==a.nativeSourceHandler&&(this.currentSource_=b,this.off(this.el_,"loadstart",a.prototype.firstLoadStartListener_),this.off(this.el_,"loadstart",a.prototype.successiveLoadStartListener_),this.one(this.el_,"loadstart",a.prototype.firstLoadStartListener_)),this.sourceHandler_=c.handleSource(b,this,this.options_),this.on("dispose",this.disposeSourceHandler),this},a.prototype.firstLoadStartListener_=function(){this.one(this.el_,"loadstart",a.prototype.successiveLoadStartListener_)},a.prototype.successiveLoadStartListener_=function(){this.disposeSourceHandler(),this.one(this.el_,"loadstart",a.prototype.successiveLoadStartListener_)},a.prototype.disposeSourceHandler=function(){this.currentSource_&&(this.clearTracks(["audio","video"]),this.currentSource_=null),this.cleanupAutoTextTracks(),this.sourceHandler_&&(this.off(this.el_,"loadstart",a.prototype.firstLoadStartListener_),this.off(this.el_,"loadstart",a.prototype.successiveLoadStartListener_),this.sourceHandler_.dispose&&this.sourceHandler_.dispose(),this.sourceHandler_=null)}},k["default"].registerComponent("Tech",L),k["default"].registerComponent("MediaTechController",L),L.registerTech("Tech",L),c["default"]=L},{46:46,5:5,63:63,65:65,66:66,70:70,72:72,76:76,79:79,83:83,86:86,87:87,90:90,94:94,95:95}],63:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i=a(74),j=e(i),k=a(78),l=d(k),m=a(94),n=e(m),o=function(a,b){for(var c=0;c<a.length;c++)b.id!==a[c].id&&(a[c].enabled=!1)},p=function(a){function b(){var c,d,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];f(this,b);for(var h=void 0,i=e.length-1;i>=0;i--)if(e[i].enabled){o(e,e[i]);break}if(l.IS_IE8){h=n["default"].createElement("custom");for(var k in j["default"].prototype)"constructor"!==k&&(h[k]=j["default"].prototype[k]);for(var m in b.prototype)"constructor"!==m&&(h[m]=b.prototype[m])}return h=c=g(this,a.call(this,e,h)),h.changing_=!1,d=h,g(c,d)}return h(b,a),b.prototype.addTrack_=function(b){var c=this;b.enabled&&o(this,b),a.prototype.addTrack_.call(this,b),b.addEventListener&&b.addEventListener("enabledchange",function(){c.changing_||(c.changing_=!0,o(c,b),c.changing_=!1,c.trigger("change"))})},b.prototype.addTrack=function(a){this.addTrack_(a)},b.prototype.removeTrack=function(b){a.prototype.removeTrack_.call(this,b)},b}(j["default"]);c["default"]=p},{74:74,78:78,94:94}],64:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i=a(73),j=a(75),k=e(j),l=a(87),m=e(l),n=a(78),o=d(n),p=function(a){function b(){var c,d,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};f(this,b);var h=m["default"](e,{kind:i.AudioTrackKind[e.kind]||""}),j=c=g(this,a.call(this,h)),k=!1;if(o.IS_IE8)for(var l in b.prototype)"constructor"!==l&&(j[l]=b.prototype[l]);return Object.defineProperty(j,"enabled",{get:function(){return k},set:function(a){"boolean"==typeof a&&a!==k&&(k=a,this.trigger("enabledchange"))}}),h.enabled&&(j.enabled=h.enabled),j.loaded_=!0,d=j,g(c,d)}return h(b,a),b}(k["default"]);c["default"]=p},{73:73,75:75,78:78,87:87}],65:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}c.__esModule=!0;var g=a(78),h=e(g),i=a(94),j=d(i),k=function(){function a(){var b=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];f(this,a);var c=this;if(h.IS_IE8){c=j["default"].createElement("custom");for(var d in a.prototype)"constructor"!==d&&(c[d]=a.prototype[d])}c.trackElements_=[],Object.defineProperty(c,"length",{get:function(){return this.trackElements_.length}});for(var e=0,g=b.length;g>e;e++)c.addTrackElement_(b[e]);return h.IS_IE8?c:void 0}return a.prototype.addTrackElement_=function(a){var b=this.trackElements_.length;""+b in this||Object.defineProperty(this,b,{get:function(){return this.trackElements_[b]}}),-1===this.trackElements_.indexOf(a)&&this.trackElements_.push(a)},a.prototype.getTrackElementByTrack_=function(a){for(var b=void 0,c=0,d=this.trackElements_.length;d>c;c++)if(a===this.trackElements_[c].track){b=this.trackElements_[c];break}return b},a.prototype.removeTrackElement_=function(a){for(var b=0,c=this.trackElements_.length;c>b;b++)if(a===this.trackElements_[b]){this.trackElements_.splice(b,1);break}},a}();c["default"]=k},{78:78,94:94}],66:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i=a(78),j=e(i),k=a(94),l=d(k),m=a(42),n=d(m),o=a(72),p=d(o),q=0,r=1,s=2,t=3,u=function(a){function b(){var c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};f(this,b);var d=g(this,a.call(this)),e=void 0,h=d;if(j.IS_IE8){h=l["default"].createElement("custom");for(var i in b.prototype)"constructor"!==i&&(h[i]=b.prototype[i])}var k=new p["default"](c);if(h.kind=k.kind,h.src=k.src,h.srclang=k.language,h.label=k.label,h["default"]=k["default"],Object.defineProperty(h,"readyState",{get:function(){return e}}),Object.defineProperty(h,"track",{get:function(){return k}}),e=q,k.addEventListener("loadeddata",function(){e=s,h.trigger({type:"load",target:h})}),j.IS_IE8){var m;return m=h,g(d,m)}return d}return h(b,a),b}(n["default"]);u.prototype.allowedEvents_={load:"load"},u.NONE=q,u.LOADING=r,u.LOADED=s,u.ERROR=t,c["default"]=u},{42:42,72:72,78:78,94:94}],67:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}c.__esModule=!0;var g=a(78),h=e(g),i=a(94),j=d(i),k=function(){function a(b){f(this,a);var c=this;if(h.IS_IE8){c=j["default"].createElement("custom");for(var d in a.prototype)"constructor"!==d&&(c[d]=a.prototype[d])}return a.prototype.setCues_.call(c,b),Object.defineProperty(c,"length",{get:function(){return this.length_}}),h.IS_IE8?c:void 0}return a.prototype.setCues_=function(a){var b=this.length||0,c=0,d=a.length;this.cues_=a,this.length_=a.length;var e=function(a){""+a in this||Object.defineProperty(this,""+a,{get:function(){return this.cues_[a]}})};if(d>b)for(c=b;d>c;c++)e.call(this,c)},a.prototype.getCueById=function(a){for(var b=null,c=0,d=this.length;d>c;c++){var e=this[c];if(e.id===a){b=e;break}}return b},a}();c["default"]=k},{78:78,94:94}],68:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}function i(a,b){return"rgba("+parseInt(a[1]+a[1],16)+","+parseInt(a[2]+a[2],16)+","+parseInt(a[3]+a[3],16)+","+b+")"}function j(a,b,c){try{a.style[b]=c}catch(d){return}}c.__esModule=!0;var k=a(5),l=e(k),m=a(83),n=d(m),o=a(95),p=e(o),q="#222",r="#ccc",s={monospace:"monospace",sansSerif:"sans-serif",serif:"serif",monospaceSansSerif:'"Andale Mono", "Lucida Console", monospace',monospaceSerif:'"Courier New", monospace',proportionalSansSerif:"sans-serif",proportionalSerif:"serif",casual:'"Comic Sans MS", Impact, fantasy',script:'"Monotype Corsiva", cursive',smallcaps:'"Andale Mono", "Lucida Console", monospace, sans-serif'},t=function(a){function b(c,d,e){f(this,b);var h=g(this,a.call(this,c,d,e));return c.on("loadstart",n.bind(h,h.toggleDisplay)),c.on("texttrackchange",n.bind(h,h.updateDisplay)),c.ready(n.bind(h,function(){if(c.tech_&&c.tech_.featuresNativeTextTracks)return void this.hide();c.on("fullscreenchange",n.bind(this,this.updateDisplay));for(var a=this.options_.playerOptions.tracks||[],b=0;b<a.length;b++)this.player_.addRemoteTextTrack(a[b]);var d={captions:1,subtitles:1},e=this.player_.textTracks(),f=void 0,g=void 0;if(e){for(var h=0;h<e.length;h++){var i=e[h];i["default"]&&("descriptions"!==i.kind||f?i.kind in d&&!g&&(g=i):f=i)}g?g.mode="showing":f&&(f.mode="showing")}})),h}return h(b,a),b.prototype.toggleDisplay=function(){this.player_.tech_&&this.player_.tech_.featuresNativeTextTracks?this.hide():this.show()},b.prototype.createEl=function(){return a.prototype.createEl.call(this,"div",{className:"vjs-text-track-display"},{"aria-live":"off","aria-atomic":"true"})},b.prototype.clearDisplay=function(){"function"==typeof p["default"].WebVTT&&p["default"].WebVTT.processCues(p["default"],[],this.el_)},b.prototype.updateDisplay=function(){var a=this.player_.textTracks();if(this.clearDisplay(),a){for(var b=null,c=null,d=a.length;d--;){var e=a[d];"showing"===e.mode&&("descriptions"===e.kind?b=e:c=e)}c?("off"!==this.getAttribute("aria-live")&&this.setAttribute("aria-live","off"),this.updateForTrack(c)):b&&("assertive"!==this.getAttribute("aria-live")&&this.setAttribute("aria-live","assertive"),this.updateForTrack(b))}},b.prototype.updateForTrack=function(a){if("function"==typeof p["default"].WebVTT&&a.activeCues){for(var b=this.player_.textTrackSettings.getValues(),c=[],d=0;d<a.activeCues.length;d++)c.push(a.activeCues[d]);p["default"].WebVTT.processCues(p["default"],c,this.el_);for(var e=c.length;e--;){var f=c[e];if(f){var g=f.displayState;if(b.color&&(g.firstChild.style.color=b.color),b.textOpacity&&j(g.firstChild,"color",i(b.color||"#fff",b.textOpacity)),b.backgroundColor&&(g.firstChild.style.backgroundColor=b.backgroundColor),b.backgroundOpacity&&j(g.firstChild,"backgroundColor",i(b.backgroundColor||"#000",b.backgroundOpacity)),b.windowColor&&(b.windowOpacity?j(g,"backgroundColor",i(b.windowColor,b.windowOpacity)):g.style.backgroundColor=b.windowColor),b.edgeStyle&&("dropshadow"===b.edgeStyle?g.firstChild.style.textShadow="2px 2px 3px "+q+", 2px 2px 4px "+q+", 2px 2px 5px "+q:"raised"===b.edgeStyle?g.firstChild.style.textShadow="1px 1px "+q+", 2px 2px "+q+", 3px 3px "+q:"depressed"===b.edgeStyle?g.firstChild.style.textShadow="1px 1px "+r+", 0 1px "+r+", -1px -1px "+q+", 0 -1px "+q:"uniform"===b.edgeStyle&&(g.firstChild.style.textShadow="0 0 4px "+q+", 0 0 4px "+q+", 0 0 4px "+q+", 0 0 4px "+q)),b.fontPercent&&1!==b.fontPercent){var h=p["default"].parseFloat(g.style.fontSize);g.style.fontSize=h*b.fontPercent+"px",g.style.height="auto",g.style.top="auto",g.style.bottom="2px"}b.fontFamily&&"default"!==b.fontFamily&&("small-caps"===b.fontFamily?g.firstChild.style.fontVariant="small-caps":g.firstChild.style.fontFamily=s[b.fontFamily])}}}},b}(l["default"]);l["default"].registerComponent("TextTrackDisplay",t),c["default"]=t},{5:5,83:83,95:95}],69:[function(a,b,c){"use strict";c.__esModule=!0;var d=function(a){var b=["kind","label","language","id","inBandMetadataTrackDispatchType","mode","src"].reduce(function(b,c,d){return a[c]&&(b[c]=a[c]),b},{cues:a.cues&&Array.prototype.map.call(a.cues,function(a){return{startTime:a.startTime,endTime:a.endTime,text:a.text,id:a.id}})});return b},e=function(a){var b=a.$$("track"),c=Array.prototype.map.call(b,function(a){return a.track}),e=Array.prototype.map.call(b,function(a){var b=d(a.track);return a.src&&(b.src=a.src),b});return e.concat(Array.prototype.filter.call(a.textTracks(),function(a){return-1===c.indexOf(a)}).map(d))},f=function(a,b){return a.forEach(function(a){var c=b.addRemoteTextTrack(a).track;!a.src&&a.cues&&a.cues.forEach(function(a){return c.addCue(a)})}),b.textTracks()};c["default"]={textTracksToJson:e,jsonToTextTracks:f,trackToJson_:d}},{}],70:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i=a(74),j=e(i),k=a(83),l=d(k),m=a(78),n=d(m),o=a(94),p=e(o),q=function(a){function b(){var c,d,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];f(this,b);var h=void 0;if(n.IS_IE8){h=p["default"].createElement("custom");for(var i in j["default"].prototype)"constructor"!==i&&(h[i]=j["default"].prototype[i]);for(var k in b.prototype)"constructor"!==k&&(h[k]=b.prototype[k])}return h=c=g(this,a.call(this,e,h)),d=h,g(c,d)}return h(b,a),b.prototype.addTrack_=function(b){a.prototype.addTrack_.call(this,b),b.addEventListener("modechange",l.bind(this,function(){this.trigger("change")}))},b.prototype.removeTrack_=function(a){for(var b=void 0,c=0,d=this.length;d>c;c++)if(this[c]===a){b=this[c],b.off&&b.off(),this.tracks_.splice(c,1);break}b&&this.trigger({track:b,type:"removetrack"})},b.prototype.getTrackById=function(a){for(var b=null,c=0,d=this.length;d>c;c++){var e=this[c];if(e.id===a){b=e;break}}return b},b}(j["default"]);c["default"]=q},{74:74,78:78,83:83,94:94}],71:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}function i(a,b){return b&&(a=b(a)),a&&"none"!==a?a:void 0}function j(a,b){var c=a.options[a.options.selectedIndex].value;return i(c,b)}function k(a,b,c){if(b)for(var d=0;d<a.options.length;d++)if(i(a.options[d].value,c)===b){a.selectedIndex=d;break}}c.__esModule=!0;var l=a(95),m=e(l),n=a(5),o=e(n),p=a(81),q=a(83),r=d(q),s=a(88),t=d(s),u=a(86),v=e(u),w="vjs-text-track-settings",x=["#000","Black"],y=["#00F","Blue"],z=["#0FF","Cyan"],A=["#0F0","Green"],B=["#F0F","Magenta"],C=["#F00","Red"],D=["#FFF","White"],E=["#FF0","Yellow"],F=["1","Opaque"],G=["0.5","Semi-Transparent"],H=["0","Transparent"],I={backgroundColor:{selector:".vjs-bg-color > select",id:"captions-background-color-%s",label:"Color",options:[x,D,C,A,y,E,B,z]},backgroundOpacity:{selector:".vjs-bg-opacity > select",id:"captions-background-opacity-%s",label:"Transparency",options:[F,G,H]},color:{selector:".vjs-fg-color > select",id:"captions-foreground-color-%s",label:"Color",options:[D,x,C,A,y,E,B,z]},edgeStyle:{selector:".vjs-edge-style > select",id:"%s",label:"Text Edge Style",options:[["none","None"],["raised","Raised"],["depressed","Depressed"],["uniform","Uniform"],["dropshadow","Dropshadow"]]},fontFamily:{selector:".vjs-font-family > select",id:"captions-font-family-%s",label:"Font Family",options:[["proportionalSansSerif","Proportional Sans-Serif"],["monospaceSansSerif","Monospace Sans-Serif"],["proportionalSerif","Proportional Serif"],["monospaceSerif","Monospace Serif"],["casual","Casual"],["script","Script"],["small-caps","Small Caps"]]},fontPercent:{selector:".vjs-font-percent > select",id:"captions-font-size-%s",label:"Font Size",options:[["0.50","50%"],["0.75","75%"],["1.00","100%"],["1.25","125%"],["1.50","150%"],["1.75","175%"],["2.00","200%"],["3.00","300%"],["4.00","400%"]],"default":2,parser:function(a){return"1.00"===a?null:Number(a)}},textOpacity:{selector:".vjs-text-opacity > select",id:"captions-foreground-opacity-%s",label:"Transparency",options:[F,G]},windowColor:{selector:".vjs-window-color > select",id:"captions-window-color-%s",label:"Color"},windowOpacity:{selector:".vjs-window-opacity > select",id:"captions-window-opacity-%s",label:"Transparency",options:[H,G,F]}};I.windowColor.options=I.backgroundColor.options;var J=function(a){function b(c,d){f(this,b);var e=g(this,a.call(this,c,d));return e.setDefaults(),e.hide(),e.updateDisplay=r.bind(e,e.updateDisplay),void 0===d.persistTextTrackSettings&&(e.options_.persistTextTrackSettings=e.options_.playerOptions.persistTextTrackSettings),e.on(e.$(".vjs-done-button"),"click",function(){e.saveSettings(),e.hide()}),e.on(e.$(".vjs-default-button"),"click",function(){e.setDefaults(),e.updateDisplay()}),t.each(I,function(a){e.on(e.$(a.selector),"change",e.updateDisplay)}),e.options_.persistTextTrackSettings&&e.restoreSettings(),e}return h(b,a),b.prototype.createElSelect_=function(a){var b=this,c=I[a],d=c.id.replace("%s",this.id_);return[p.createEl("label",{className:"vjs-label",textContent:c.label},{"for":d}),p.createEl("select",{id:d},void 0,c.options.map(function(a){return p.createEl("option",{textContent:b.localize(a[1]),value:a[0]})}))]},b.prototype.createElFgColor_=function(){var a=p.createEl("legend",{textContent:this.localize("Text")}),b=this.createElSelect_("color"),c=p.createEl("span",{className:"vjs-text-opacity vjs-opacity"},void 0,this.createElSelect_("textOpacity"));return p.createEl("fieldset",{className:"vjs-fg-color vjs-tracksetting"},void 0,[a].concat(b,c))},b.prototype.createElBgColor_=function(){var a=p.createEl("legend",{textContent:this.localize("Background")}),b=this.createElSelect_("backgroundColor"),c=p.createEl("span",{className:"vjs-bg-opacity vjs-opacity"},void 0,this.createElSelect_("backgroundOpacity"));return p.createEl("fieldset",{className:"vjs-bg-color vjs-tracksetting"},void 0,[a].concat(b,c))},b.prototype.createElWinColor_=function(){var a=p.createEl("legend",{textContent:this.localize("Window")}),b=this.createElSelect_("windowColor"),c=p.createEl("span",{className:"vjs-window-opacity vjs-opacity"},void 0,this.createElSelect_("windowOpacity"));return p.createEl("fieldset",{className:"vjs-window-color vjs-tracksetting"},void 0,[a].concat(b,c))},b.prototype.createElColors_=function(){return p.createEl("div",{className:"vjs-tracksettings-colors"},void 0,[this.createElFgColor_(),this.createElBgColor_(),this.createElWinColor_()])},b.prototype.createElFont_=function(){var a=p.createEl("div",{className:"vjs-font-percent vjs-tracksetting"},void 0,this.createElSelect_("fontPercent")),b=p.createEl("div",{className:"vjs-edge-style vjs-tracksetting"},void 0,this.createElSelect_("edgeStyle")),c=p.createEl("div",{className:"vjs-font-family vjs-tracksetting"},void 0,this.createElSelect_("fontFamily"));return p.createEl("div",{className:"vjs-tracksettings-font"},void 0,[a,b,c])},b.prototype.createElControls_=function(){var a=p.createEl("button",{className:"vjs-default-button",textContent:this.localize("Defaults")}),b=p.createEl("button",{className:"vjs-done-button",textContent:"Done"});return p.createEl("div",{className:"vjs-tracksettings-controls"},void 0,[a,b])},b.prototype.createEl=function(){var a=p.createEl("div",{className:"vjs-tracksettings"},void 0,[this.createElColors_(),this.createElFont_(),this.createElControls_()]),b=p.createEl("div",{className:"vjs-control-text",id:"TTsettingsDialogLabel-"+this.id_,textContent:"Caption Settings Dialog"},{"aria-level":"1",role:"heading"}),c=p.createEl("div",{className:"vjs-control-text",id:"TTsettingsDialogDescription-"+this.id_,textContent:"Beginning of dialog window. Escape will cancel and close the window."}),d=p.createEl("div",void 0,{role:"document"},[b,c,a]);return p.createEl("div",{className:"vjs-caption-settings vjs-modal-overlay",tabIndex:-1},{role:"dialog","aria-labelledby":b.id,"aria-describedby":c.id},d)},b.prototype.getValues=function(){var a=this;return t.reduce(I,function(b,c,d){var e=j(a.$(c.selector),c.parser);return void 0!==e&&(b[d]=e),b},{})},b.prototype.setValues=function(a){var b=this;t.each(I,function(c,d){k(b.$(c.selector),a[d],c.parser)})},b.prototype.setDefaults=function(){var a=this;t.each(I,function(b){var c=b.hasOwnProperty("default")?b["default"]:0;a.$(b.selector).selectedIndex=c})},b.prototype.restoreSettings=function(){var a=void 0;try{a=JSON.parse(m["default"].localStorage.getItem(w))}catch(b){v["default"].warn(b)}a&&this.setValues(a)},b.prototype.saveSettings=function(){if(this.options_.persistTextTrackSettings){var a=this.getValues();try{Object.keys(a).length?m["default"].localStorage.setItem(w,JSON.stringify(a)):m["default"].localStorage.removeItem(w)}catch(b){v["default"].warn(b)}}},b.prototype.updateDisplay=function(){var a=this.player_.getChild("textTrackDisplay");a&&a.updateDisplay()},b}(o["default"]);o["default"].registerComponent("TextTrackSettings",J),c["default"]=J},{5:5,81:81,83:83,86:86,88:88,95:95}],72:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i=a(67),j=e(i),k=a(83),l=d(k),m=a(73),n=a(86),o=e(n),p=a(95),q=e(p),r=a(75),s=e(r),t=a(92),u=a(149),v=e(u),w=a(87),x=e(w),y=a(78),z=d(y),A=function(a,b){var c=new q["default"].WebVTT.Parser(q["default"],q["default"].vttjs,q["default"].WebVTT.StringDecoder()),d=[];c.oncue=function(a){b.addCue(a)},c.onparsingerror=function(a){d.push(a)},c.onflush=function(){b.trigger({type:"loadeddata",target:b})},c.parse(a),d.length>0&&(q["default"].console&&q["default"].console.groupCollapsed&&q["default"].console.groupCollapsed("Text Track parsing errors for "+b.src),d.forEach(function(a){return o["default"].error(a)}),q["default"].console&&q["default"].console.groupEnd&&q["default"].console.groupEnd()),c.flush()},B=function(a,b){var c={uri:a},d=t.isCrossOrigin(a);d&&(c.cors=d),v["default"](c,l.bind(this,function(a,c,d){return a?o["default"].error(a,c):(b.loaded_=!0,void("function"!=typeof q["default"].WebVTT?b.tech_&&!function(){var a=function(){return A(d,b)};b.tech_.on("vttjsloaded",a),b.tech_.on("vttjserror",function(){o["default"].error("vttjs failed to load, stopping trying to process "+b.src),b.tech_.off("vttjsloaded",a)})}():A(d,b)))}))},C=function(a){function b(){var c,d,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(f(this,b),!e.tech)throw new Error("A tech was not provided.");var h=x["default"](e,{kind:m.TextTrackKind[e.kind]||"subtitles",language:e.language||e.srclang||""}),i=m.TextTrackMode[h.mode]||"disabled",k=h["default"];"metadata"!==h.kind&&"chapters"!==h.kind||(i="hidden");var n=c=g(this,a.call(this,h));if(n.tech_=h.tech,z.IS_IE8)for(var o in b.prototype)"constructor"!==o&&(n[o]=b.prototype[o]);n.cues_=[],n.activeCues_=[];var p=new j["default"](n.cues_),q=new j["default"](n.activeCues_),r=!1,s=l.bind(n,function(){this.activeCues,r&&(this.trigger("cuechange"),r=!1)});return"disabled"!==i&&n.tech_.on("timeupdate",s),Object.defineProperty(n,"default",{get:function(){return k},set:function(){}}),Object.defineProperty(n,"mode",{get:function(){return i},set:function(a){m.TextTrackMode[a]&&(i=a,"showing"===i&&this.tech_.on("timeupdate",s),this.trigger("modechange"))}}),Object.defineProperty(n,"cues",{get:function(){return this.loaded_?p:null},set:function(){}}),Object.defineProperty(n,"activeCues",{get:function(){if(!this.loaded_)return null;if(0===this.cues.length)return q;for(var a=this.tech_.currentTime(),b=[],c=0,d=this.cues.length;d>c;c++){var e=this.cues[c];e.startTime<=a&&e.endTime>=a?b.push(e):e.startTime===e.endTime&&e.startTime<=a&&e.startTime+.5>=a&&b.push(e)}if(r=!1,b.length!==this.activeCues_.length)r=!0;else for(var f=0;f<b.length;f++)-1===this.activeCues_.indexOf(b[f])&&(r=!0);return this.activeCues_=b,q.setCues_(this.activeCues_),q},set:function(){}}),h.src?(n.src=h.src,B(h.src,n)):n.loaded_=!0,d=n,g(c,d)}return h(b,a),b.prototype.addCue=function(a){var b=this.tech_.textTracks();if(b)for(var c=0;c<b.length;c++)b[c]!==this&&b[c].removeCue(a);this.cues_.push(a),this.cues.setCues_(this.cues_)},b.prototype.removeCue=function(a){
for(var b=!1,c=0,d=this.cues_.length;d>c;c++){var e=this.cues_[c];e===a&&(this.cues_.splice(c,1),b=!0)}b&&this.cues.setCues_(this.cues_)},b}(s["default"]);C.prototype.allowedEvents_={cuechange:"cuechange"},c["default"]=C},{149:149,67:67,73:73,75:75,78:78,83:83,86:86,87:87,92:92,95:95}],73:[function(a,b,c){"use strict";c.__esModule=!0,c.VideoTrackKind={alternative:"alternative",captions:"captions",main:"main",sign:"sign",subtitles:"subtitles",commentary:"commentary"},c.AudioTrackKind={alternative:"alternative",descriptions:"descriptions",main:"main","main-desc":"main-desc",translation:"translation",commentary:"commentary"},c.TextTrackKind={subtitles:"subtitles",captions:"captions",descriptions:"descriptions",chapters:"chapters",metadata:"metadata"},c.TextTrackMode={disabled:"disabled",hidden:"hidden",showing:"showing"}},{}],74:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i=a(42),j=e(i),k=a(78),l=d(k),m=a(94),n=e(m),o=function(a){function b(){var c,d=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;f(this,b);var h=g(this,a.call(this));if(!e&&(e=h,l.IS_IE8)){e=n["default"].createElement("custom");for(var i in b.prototype)"constructor"!==i&&(e[i]=b.prototype[i])}e.tracks_=[],Object.defineProperty(e,"length",{get:function(){return this.tracks_.length}});for(var j=0;j<d.length;j++)e.addTrack_(d[j]);return c=e,g(h,c)}return h(b,a),b.prototype.addTrack_=function(a){var b=this.tracks_.length;""+b in this||Object.defineProperty(this,b,{get:function(){return this.tracks_[b]}}),-1===this.tracks_.indexOf(a)&&(this.tracks_.push(a),this.trigger({track:a,type:"addtrack"}))},b.prototype.removeTrack_=function(a){for(var b=void 0,c=0,d=this.length;d>c;c++)if(this[c]===a){b=this[c],b.off&&b.off(),this.tracks_.splice(c,1);break}b&&this.trigger({track:b,type:"removetrack"})},b.prototype.getTrackById=function(a){for(var b=null,c=0,d=this.length;d>c;c++){var e=this[c];if(e.id===a){b=e;break}}return b},b}(j["default"]);o.prototype.allowedEvents_={change:"change",addtrack:"addtrack",removetrack:"removetrack"};for(var p in o.prototype.allowedEvents_)o.prototype["on"+p]=null;c["default"]=o},{42:42,78:78,94:94}],75:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i=a(78),j=e(i),k=a(94),l=d(k),m=a(85),n=e(m),o=a(42),p=d(o),q=function(a){function b(){var c,d=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};f(this,b);var e=g(this,a.call(this)),h=e;if(j.IS_IE8){h=l["default"].createElement("custom");for(var i in b.prototype)"constructor"!==i&&(h[i]=b.prototype[i])}var k={id:d.id||"vjs_track_"+n.newGUID(),kind:d.kind||"",label:d.label||"",language:d.language||""},m=function(a){Object.defineProperty(h,a,{get:function(){return k[a]},set:function(){}})};for(var o in k)m(o);return c=h,g(e,c)}return h(b,a),b}(p["default"]);c["default"]=q},{42:42,78:78,85:85,94:94}],76:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i=a(74),j=e(i),k=a(78),l=d(k),m=a(94),n=e(m),o=function(a,b){for(var c=0;c<a.length;c++)b.id!==a[c].id&&(a[c].selected=!1)},p=function(a){function b(){var c,d,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];f(this,b);for(var h=void 0,i=e.length-1;i>=0;i--)if(e[i].selected){o(e,e[i]);break}if(l.IS_IE8){h=n["default"].createElement("custom");for(var k in j["default"].prototype)"constructor"!==k&&(h[k]=j["default"].prototype[k]);for(var m in b.prototype)"constructor"!==m&&(h[m]=b.prototype[m])}return h=c=g(this,a.call(this,e,h)),h.changing_=!1,Object.defineProperty(h,"selectedIndex",{get:function(){for(var a=0;a<this.length;a++)if(this[a].selected)return a;return-1},set:function(){}}),d=h,g(c,d)}return h(b,a),b.prototype.addTrack_=function(b){var c=this;b.selected&&o(this,b),a.prototype.addTrack_.call(this,b),b.addEventListener&&b.addEventListener("selectedchange",function(){c.changing_||(c.changing_=!0,o(c,b),c.changing_=!1,c.trigger("change"))})},b.prototype.addTrack=function(a){this.addTrack_(a)},b.prototype.removeTrack=function(b){a.prototype.removeTrack_.call(this,b)},b}(j["default"]);c["default"]=p},{74:74,78:78,94:94}],77:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i=a(73),j=a(75),k=e(j),l=a(87),m=e(l),n=a(78),o=d(n),p=function(a){function b(){var c,d,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};f(this,b);var h=m["default"](e,{kind:i.VideoTrackKind[e.kind]||""}),j=c=g(this,a.call(this,h)),k=!1;if(o.IS_IE8)for(var l in b.prototype)"constructor"!==l&&(j[l]=b.prototype[l]);return Object.defineProperty(j,"selected",{get:function(){return k},set:function(a){"boolean"==typeof a&&a!==k&&(k=a,this.trigger("selectedchange"))}}),h.selected&&(j.selected=h.selected),d=j,g(c,d)}return h(b,a),b}(k["default"]);c["default"]=p},{73:73,75:75,78:78,87:87}],78:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}c.__esModule=!0,c.BACKGROUND_SIZE_SUPPORTED=c.TOUCH_ENABLED=c.IE_VERSION=c.IS_IE8=c.IS_CHROME=c.IS_EDGE=c.IS_FIREFOX=c.IS_NATIVE_ANDROID=c.IS_OLD_ANDROID=c.ANDROID_VERSION=c.IS_ANDROID=c.IOS_VERSION=c.IS_IOS=c.IS_IPOD=c.IS_IPHONE=c.IS_IPAD=void 0;var e=a(94),f=d(e),g=a(95),h=d(g),i=h["default"].navigator&&h["default"].navigator.userAgent||"",j=/AppleWebKit\/([\d.]+)/i.exec(i),k=j?parseFloat(j.pop()):null,l=c.IS_IPAD=/iPad/i.test(i),m=c.IS_IPHONE=/iPhone/i.test(i)&&!l,n=c.IS_IPOD=/iPod/i.test(i),o=(c.IS_IOS=m||l||n,c.IOS_VERSION=function(){var a=i.match(/OS (\d+)_/i);return a&&a[1]?a[1]:null}(),c.IS_ANDROID=/Android/i.test(i)),p=c.ANDROID_VERSION=function(){var a=i.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);if(!a)return null;var b=a[1]&&parseFloat(a[1]),c=a[2]&&parseFloat(a[2]);return b&&c?parseFloat(a[1]+"."+a[2]):b?b:null}(),q=(c.IS_OLD_ANDROID=o&&/webkit/i.test(i)&&2.3>p,c.IS_NATIVE_ANDROID=o&&5>p&&537>k,c.IS_FIREFOX=/Firefox/i.test(i),c.IS_EDGE=/Edge/i.test(i));c.IS_CHROME=!q&&/Chrome/i.test(i),c.IS_IE8=/MSIE\s8\.0/.test(i),c.IE_VERSION=function(a){return a&&parseFloat(a[1])}(/MSIE\s(\d+)\.\d/.exec(i)),c.TOUCH_ENABLED=!!("ontouchstart"in h["default"]||h["default"].DocumentTouch&&f["default"]instanceof h["default"].DocumentTouch),c.BACKGROUND_SIZE_SUPPORTED="backgroundSize"in f["default"].createElement("video").style},{94:94,95:95}],79:[function(a,b,c){"use strict";function d(a,b){var c=0,d=void 0,f=void 0;if(!b)return 0;a&&a.length||(a=e.createTimeRange(0,0));for(var g=0;g<a.length;g++)d=a.start(g),f=a.end(g),f>b&&(f=b),c+=f-d;return c/b}c.__esModule=!0,c.bufferedPercent=d;var e=a(90)},{90:90}],80:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a,b){if(!a||!b)return"";if("function"==typeof g["default"].getComputedStyle){var c=g["default"].getComputedStyle(a);return c?c[b]:""}return a.currentStyle[b]||""}c.__esModule=!0,c["default"]=e;var f=a(95),g=d(f)},{95:95}],81:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){return a.raw=b,a}function g(a){return"string"==typeof a&&/\S/.test(a)}function h(a){if(/\s/.test(a))throw new Error("class has illegal whitespace characters")}function i(a){return new RegExp("(^|\\s)"+a+"($|\\s)")}function j(a){return!!a&&"object"===("undefined"==typeof a?"undefined":K(a))&&1===a.nodeType}function k(a){return function(b,c){if(!g(b))return N["default"][a](null);g(c)&&(c=N["default"].querySelector(c));var d=j(c)?c:N["default"];return d[a]&&d[a](b)}}function l(a){return 0===a.indexOf("#")&&(a=a.slice(1)),N["default"].getElementById(a)}function m(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"div",b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},d=arguments[3],e=N["default"].createElement(a);return Object.getOwnPropertyNames(b).forEach(function(a){var c=b[a];-1!==a.indexOf("aria-")||"role"===a||"type"===a?(T["default"].warn(V["default"](L,a,c)),e.setAttribute(a,c)):"textContent"===a?n(e,c):e[a]=c}),Object.getOwnPropertyNames(c).forEach(function(a){e.setAttribute(a,c[a])}),d&&I(e,d),e}function n(a,b){return"undefined"==typeof a.textContent?a.innerText=b:a.textContent=b,a}function o(a,b){b.firstChild?b.insertBefore(a,b.firstChild):b.appendChild(a)}function p(a){var b=a[X];return b||(b=a[X]=R.newGUID()),W[b]||(W[b]={}),W[b]}function q(a){var b=a[X];return!!b&&!!Object.getOwnPropertyNames(W[b]).length}function r(a){var b=a[X];if(b){delete W[b];try{delete a[X]}catch(c){a.removeAttribute?a.removeAttribute(X):a[X]=null}}}function s(a,b){return h(b),a.classList?a.classList.contains(b):i(b).test(a.className)}function t(a,b){return a.classList?a.classList.add(b):s(a,b)||(a.className=(a.className+" "+b).trim()),a}function u(a,b){return a.classList?a.classList.remove(b):(h(b),a.className=a.className.split(/\s+/).filter(function(a){return a!==b}).join(" ")),a}function v(a,b,c){var d=s(a,b);return"function"==typeof c&&(c=c(a,b)),"boolean"!=typeof c&&(c=!d),c!==d?(c?t(a,b):u(a,b),a):void 0}function w(a,b){Object.getOwnPropertyNames(b).forEach(function(c){var d=b[c];null===d||"undefined"==typeof d||d===!1?a.removeAttribute(c):a.setAttribute(c,d===!0?"":d)})}function x(a){var b={},c=",autoplay,controls,loop,muted,default,";if(a&&a.attributes&&a.attributes.length>0)for(var d=a.attributes,e=d.length-1;e>=0;e--){var f=d[e].name,g=d[e].value;"boolean"!=typeof a[f]&&-1===c.indexOf(","+f+",")||(g=null!==g),b[f]=g}return b}function y(a,b){return a.getAttribute(b)}function z(a,b,c){a.setAttribute(b,c)}function A(a,b){a.removeAttribute(b)}function B(){N["default"].body.focus(),N["default"].onselectstart=function(){return!1}}function C(){N["default"].onselectstart=function(){return!0}}function D(a){var b=void 0;if(a.getBoundingClientRect&&a.parentNode&&(b=a.getBoundingClientRect()),!b)return{left:0,top:0};var c=N["default"].documentElement,d=N["default"].body,e=c.clientLeft||d.clientLeft||0,f=P["default"].pageXOffset||d.scrollLeft,g=b.left+f-e,h=c.clientTop||d.clientTop||0,i=P["default"].pageYOffset||d.scrollTop,j=b.top+i-h;return{left:Math.round(g),top:Math.round(j)}}function E(a,b){var c={},d=D(a),e=a.offsetWidth,f=a.offsetHeight,g=d.top,h=d.left,i=b.pageY,j=b.pageX;return b.changedTouches&&(j=b.changedTouches[0].pageX,i=b.changedTouches[0].pageY),c.y=Math.max(0,Math.min(1,(g-i+f)/f)),c.x=Math.max(0,Math.min(1,(j-h)/e)),c}function F(a){return!!a&&"object"===("undefined"==typeof a?"undefined":K(a))&&3===a.nodeType}function G(a){for(;a.firstChild;)a.removeChild(a.firstChild);return a}function H(a){return"function"==typeof a&&(a=a()),(Array.isArray(a)?a:[a]).map(function(a){return"function"==typeof a&&(a=a()),j(a)||F(a)?a:"string"==typeof a&&/\S/.test(a)?N["default"].createTextNode(a):void 0}).filter(function(a){return a})}function I(a,b){return H(b).forEach(function(b){return a.appendChild(b)}),a}function J(a,b){return I(G(a),b)}c.__esModule=!0,c.$$=c.$=void 0;var K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},L=f(["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set "," to ","."],["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set "," to ","."]);c.isEl=j,c.getEl=l,c.createEl=m,c.textContent=n,c.insertElFirst=o,c.getElData=p,c.hasElData=q,c.removeElData=r,c.hasElClass=s,c.addElClass=t,c.removeElClass=u,c.toggleElClass=v,c.setElAttributes=w,c.getElAttributes=x,c.getAttribute=y,c.setAttribute=z,c.removeAttribute=A,c.blockTextSelection=B,c.unblockTextSelection=C,c.findElPosition=D,c.getPointerPosition=E,c.isTextNode=F,c.emptyEl=G,c.normalizeContent=H,c.appendContent=I,c.insertContent=J;var M=a(94),N=e(M),O=a(95),P=e(O),Q=a(85),R=d(Q),S=a(86),T=e(S),U=a(148),V=e(U),W={},X="vdata"+(new Date).getTime();c.$=k("querySelector"),c.$$=k("querySelectorAll")},{148:148,85:85,86:86,94:94,95:95}],82:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function f(a,b){var c=n.getElData(a);0===c.handlers[b].length&&(delete c.handlers[b],a.removeEventListener?a.removeEventListener(b,c.dispatcher,!1):a.detachEvent&&a.detachEvent("on"+b,c.dispatcher)),Object.getOwnPropertyNames(c.handlers).length<=0&&(delete c.handlers,delete c.dispatcher,delete c.disabled),0===Object.getOwnPropertyNames(c).length&&n.removeElData(a)}function g(a,b,c,d){c.forEach(function(c){a(b,c,d)})}function h(a){function b(){return!0}function c(){return!1}return a&&a.isPropagationStopped||!function(){var d=a||t["default"].event;a={};for(var e in d)"layerX"!==e&&"layerY"!==e&&"keyLocation"!==e&&"webkitMovementX"!==e&&"webkitMovementY"!==e&&("returnValue"===e&&d.preventDefault||(a[e]=d[e]));if(a.target||(a.target=a.srcElement||v["default"]),a.relatedTarget||(a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement),a.preventDefault=function(){d.preventDefault&&d.preventDefault(),a.returnValue=!1,d.returnValue=!1,a.defaultPrevented=!0},a.defaultPrevented=!1,a.stopPropagation=function(){d.stopPropagation&&d.stopPropagation(),a.cancelBubble=!0,d.cancelBubble=!0,a.isPropagationStopped=b},a.isPropagationStopped=c,a.stopImmediatePropagation=function(){d.stopImmediatePropagation&&d.stopImmediatePropagation(),a.isImmediatePropagationStopped=b,a.stopPropagation()},a.isImmediatePropagationStopped=c,null!==a.clientX&&void 0!==a.clientX){var f=v["default"].documentElement,g=v["default"].body;a.pageX=a.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=a.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)}a.which=a.charCode||a.keyCode,null!==a.button&&void 0!==a.button&&(a.button=1&a.button?0:4&a.button?1:2&a.button?2:0)}(),a}function i(a,b,c){if(Array.isArray(b))return g(i,a,b,c);var d=n.getElData(a);d.handlers||(d.handlers={}),d.handlers[b]||(d.handlers[b]=[]),c.guid||(c.guid=p.newGUID()),d.handlers[b].push(c),d.dispatcher||(d.disabled=!1,d.dispatcher=function(b,c){if(!d.disabled){b=h(b);var e=d.handlers[b.type];if(e)for(var f=e.slice(0),g=0,i=f.length;i>g&&!b.isImmediatePropagationStopped();g++)try{f[g].call(a,b,c)}catch(j){r["default"].error(j)}}}),1===d.handlers[b].length&&(a.addEventListener?a.addEventListener(b,d.dispatcher,!1):a.attachEvent&&a.attachEvent("on"+b,d.dispatcher))}function j(a,b,c){if(n.hasElData(a)){var d=n.getElData(a);if(d.handlers){if(Array.isArray(b))return g(j,a,b,c);var e=function(b){d.handlers[b]=[],f(a,b)};if(b){var h=d.handlers[b];if(h){if(!c)return void e(b);if(c.guid)for(var i=0;i<h.length;i++)h[i].guid===c.guid&&h.splice(i--,1);f(a,b)}}else for(var k in d.handlers)e(k)}}}function k(a,b,c){var d=n.hasElData(a)?n.getElData(a):{},e=a.parentNode||a.ownerDocument;if("string"==typeof b&&(b={type:b,target:a}),b=h(b),d.dispatcher&&d.dispatcher.call(a,b,c),e&&!b.isPropagationStopped()&&b.bubbles===!0)k.call(null,e,b,c);else if(!e&&!b.defaultPrevented){var f=n.getElData(b.target);b.target[b.type]&&(f.disabled=!0,"function"==typeof b.target[b.type]&&b.target[b.type](),f.disabled=!1)}return!b.defaultPrevented}function l(a,b,c){if(Array.isArray(b))return g(l,a,b,c);var d=function e(){j(a,b,e),c.apply(this,arguments)};d.guid=c.guid=c.guid||p.newGUID(),i(a,b,d)}c.__esModule=!0,c.fixEvent=h,c.on=i,c.off=j,c.trigger=k,c.one=l;var m=a(81),n=e(m),o=a(85),p=e(o),q=a(86),r=d(q),s=a(95),t=d(s),u=a(94),v=d(u)},{81:81,85:85,86:86,94:94,95:95}],83:[function(a,b,c){"use strict";c.__esModule=!0,c.bind=void 0;var d=a(85);c.bind=function(a,b,c){b.guid||(b.guid=d.newGUID());var e=function(){return b.apply(a,arguments)};return e.guid=c?c+"_"+b.guid:b.guid,e}},{85:85}],84:[function(a,b,c){"use strict";function d(a){var b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a;a=0>a?0:a;var c=Math.floor(a%60),d=Math.floor(a/60%60),e=Math.floor(a/3600),f=Math.floor(b/60%60),g=Math.floor(b/3600);return(isNaN(a)||a===1/0)&&(e=d=c="-"),e=e>0||g>0?e+":":"",d=((e||f>=10)&&10>d?"0"+d:d)+":",c=10>c?"0"+c:c,e+d+c}c.__esModule=!0,c["default"]=d},{}],85:[function(a,b,c){"use strict";function d(){return e++}c.__esModule=!0,c.newGUID=d;var e=1},{}],86:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}c.__esModule=!0,c.logByType=void 0;var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},f=a(95),g=d(f),h=a(78),i=void 0,j=c.logByType=function(a,b){var c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:!!h.IE_VERSION&&h.IE_VERSION<11;"log"!==a&&b.unshift(a.toUpperCase()+":"),i.history.push(b),b.unshift("VIDEOJS:");var d=g["default"].console&&g["default"].console[a];d&&(c&&(b=b.map(function(a){if(a&&"object"===("undefined"==typeof a?"undefined":e(a))||Array.isArray(a))try{return JSON.stringify(a)}catch(b){return String(a)}return String(a)}).join(" ")),d.apply?d[Array.isArray(b)?"apply":"call"](g["default"].console,b):d(b))};i=function(){for(var a=arguments.length,b=Array(a),c=0;a>c;c++)b[c]=arguments[c];j("log",b)},i.history=[],i.error=function(){for(var a=arguments.length,b=Array(a),c=0;a>c;c++)b[c]=arguments[c];return j("error",b)},i.warn=function(){for(var a=arguments.length,b=Array(a),c=0;a>c;c++)b[c]=arguments[c];return j("warn",b)},c["default"]=i},{78:78,95:95}],87:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a){return!!a&&"object"===("undefined"==typeof a?"undefined":h(a))&&"[object Object]"===a.toString()&&a.constructor===Object}function f(a,b){return e(b)?e(a)?void 0:g(b):b}function g(){for(var a=arguments.length,b=Array(a),c=0;a>c;c++)b[c]=arguments[c];return b.unshift({}),b.push(f),j["default"].apply(null,b),b[0]}c.__esModule=!0;var h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a};c["default"]=g;var i=a(133),j=d(i)},{133:133}],88:[function(a,b,c){"use strict";function d(a,b){Object.keys(a).forEach(function(c){return b(a[c],c)})}function e(a,b){var c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return Object.keys(a).reduce(function(c,d){return b(c,a[d],d)},c)}c.__esModule=!0,c.each=d,c.reduce=e},{}],89:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}c.__esModule=!0,c.setTextContent=c.createStyleElement=void 0;var e=a(94),f=d(e);c.createStyleElement=function(a){var b=f["default"].createElement("style");return b.className=a,b},c.setTextContent=function(a,b){a.styleSheet?a.styleSheet.cssText=b:a.textContent=b}},{94:94}],90:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a,b,c){if(0>b||b>c)throw new Error("Failed to execute '"+a+"' on 'TimeRanges': The index provided ("+b+") is greater than or equal to the maximum bound ("+c+").")}function f(a,b,c,d){return void 0===d&&(j["default"].warn("DEPRECATED: Function '"+a+"' on 'TimeRanges' called without an index argument."),d=0),e(a,d,c.length-1),c[d][b]}function g(a){return void 0===a||0===a.length?{length:0,start:function(){throw new Error("This TimeRanges object is empty")},end:function(){throw new Error("This TimeRanges object is empty")}}:{length:a.length,start:f.bind(null,"start",0,a),end:f.bind(null,"end",1,a)}}function h(a,b){return Array.isArray(a)?g(a):void 0===a||void 0===b?g():g([[a,b]])}c.__esModule=!0,c.createTimeRange=void 0,c.createTimeRanges=h;var i=a(86),j=d(i);c.createTimeRange=h},{86:86}],91:[function(a,b,c){"use strict";function d(a){return"string"!=typeof a?a:a.charAt(0).toUpperCase()+a.slice(1)}c.__esModule=!0,c["default"]=d},{}],92:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}c.__esModule=!0,c.isCrossOrigin=c.getFileExtension=c.getAbsoluteURL=c.parseUrl=void 0;var e=a(94),f=d(e),g=a(95),h=d(g),i=c.parseUrl=function(a){var b=["protocol","hostname","port","pathname","search","hash","host"],c=f["default"].createElement("a");c.href=a;var d=""===c.host&&"file:"!==c.protocol,e=void 0;d&&(e=f["default"].createElement("div"),e.innerHTML='<a href="'+a+'"></a>',c=e.firstChild,e.setAttribute("style","display:none; position:absolute;"),f["default"].body.appendChild(e));for(var g={},h=0;h<b.length;h++)g[b[h]]=c[b[h]];return"http:"===g.protocol&&(g.host=g.host.replace(/:80$/,"")),"https:"===g.protocol&&(g.host=g.host.replace(/:443$/,"")),d&&f["default"].body.removeChild(e),g};c.getAbsoluteURL=function(a){if(!a.match(/^https?:\/\//)){var b=f["default"].createElement("div");b.innerHTML='<a href="'+a+'">x</a>',a=b.firstChild.href}return a},c.getFileExtension=function(a){if("string"==typeof a){var b=/^(\/?)([\s\S]*?)((?:\.{1,2}|[^\/]+?)(\.([^\.\/\?]+)))(?:[\/]*|[\?].*)$/i,c=b.exec(a);if(c)return c.pop().toLowerCase()}return""},c.isCrossOrigin=function(a){var b=h["default"].location,c=i(a),d=":"===c.protocol?b.protocol:c.protocol,e=d+c.host!==b.protocol+b.host;return e}},{94:94,95:95}],93:[function(b,c,d){"use strict";function e(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function f(a){return a&&a.__esModule?a:{"default":a}}function g(a,b,c){var d=void 0;if(b=b||{},"string"==typeof a){if(0===a.indexOf("#")&&(a=a.slice(1)),g.getPlayers()[a])return b&&O["default"].warn('Player "'+a+'" is already initialised. Options will not be applied.'),c&&g.getPlayers()[a].ready(c),g.getPlayers()[a];d=Q.getEl(a)}else d=a;if(!d||!d.nodeName)throw new TypeError("The element or ID supplied is not valid. (videojs)");if(d.player||x["default"].players[d.playerId])return d.player||x["default"].players[d.playerId];g.hooks("beforesetup").forEach(function(a){var c=a(d,B["default"](b));return!c||"object"!==("undefined"==typeof c?"undefined":h(c))||Array.isArray(c)?void g.log.error("please return an object in beforesetup hooks"):void(b=B["default"](b,c))});var e=new x["default"](d,b,c);return g.hooks("setup").forEach(function(a){return a(e)}),e}d.__esModule=!0;var h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},i=b(95),j=f(i),k=b(94),l=f(k),m=b(56),n=e(m),o=b(89),p=e(o),q=b(5),r=f(q),s=b(42),t=f(s),u=b(82),v=e(u),w=b(51),x=f(w),y=b(52),z=f(y),A=b(87),B=f(A),C=b(83),D=e(C),E=b(72),F=f(E),G=b(64),H=f(G),I=b(77),J=f(I),K=b(90),L=b(84),M=f(L),N=b(86),O=f(N),P=b(81),Q=e(P),R=b(78),S=e(R),T=b(92),U=e(T),V=b(80),W=f(V),X=b(43),Y=f(X),Z=b(133),$=f(Z),_=b(149),aa=f(_),ba=b(62),ca=f(ba);if("undefined"==typeof HTMLVideoElement&&j["default"].document&&j["default"].document.createElement&&(l["default"].createElement("video"),l["default"].createElement("audio"),l["default"].createElement("track")),g.hooks_={},g.hooks=function(a,b){return g.hooks_[a]=g.hooks_[a]||[],b&&(g.hooks_[a]=g.hooks_[a].concat(b)),g.hooks_[a]},g.hook=function(a,b){g.hooks(a,b)},g.removeHook=function(a,b){var c=g.hooks(a).indexOf(b);return!(-1>=c||(g.hooks_[a]=g.hooks_[a].slice(),g.hooks_[a].splice(c,1),0))},j["default"].VIDEOJS_NO_DYNAMIC_STYLE!==!0){var da=Q.$(".vjs-styles-defaults");if(!da){da=p.createStyleElement("vjs-styles-defaults");var ea=Q.$("head");ea&&ea.insertBefore(da,ea.firstChild),p.setTextContent(da,"\n      .video-js {\n        width: 300px;\n        height: 150px;\n      }\n\n      .vjs-fluid {\n        padding-top: 56.25%\n      }\n    ")}}n.autoSetupTimeout(1,g),g.VERSION="5.13.2",g.options=x["default"].prototype.options_,g.getPlayers=function(){return x["default"].players},g.players=x["default"].players,g.getComponent=r["default"].getComponent,g.registerComponent=function(a,b){ca["default"].isTech(b)&&O["default"].warn("The "+a+" tech was registered as a component. It should instead be registered using videojs.registerTech(name, tech)"),r["default"].registerComponent.call(r["default"],a,b)},g.getTech=ca["default"].getTech,g.registerTech=ca["default"].registerTech,g.browser=S,g.TOUCH_ENABLED=S.TOUCH_ENABLED,g.extend=Y["default"],g.mergeOptions=B["default"],g.bind=D.bind,g.plugin=z["default"],g.addLanguage=function(a,b){var c;return a=(""+a).toLowerCase(),$["default"](g.options.languages,(c={},c[a]=b,c))[a]},g.log=O["default"],g.createTimeRange=g.createTimeRanges=K.createTimeRanges,g.formatTime=M["default"],g.parseUrl=U.parseUrl,g.isCrossOrigin=U.isCrossOrigin,g.EventTarget=t["default"],g.on=v.on,g.one=v.one,g.off=v.off,g.trigger=v.trigger,g.xhr=aa["default"],g.TextTrack=F["default"],g.AudioTrack=H["default"],g.VideoTrack=J["default"],g.isEl=Q.isEl,g.isTextNode=Q.isTextNode,g.createEl=Q.createEl,g.hasClass=Q.hasElClass,g.addClass=Q.addElClass,g.removeClass=Q.removeElClass,g.toggleClass=Q.toggleElClass,g.setAttributes=Q.setElAttributes,g.getAttributes=Q.getElAttributes,g.emptyEl=Q.emptyEl,g.appendContent=Q.appendContent,g.insertContent=Q.insertContent,g.computedStyle=W["default"],"function"==typeof a&&a.amd?a("videojs",[],function(){return g}):"object"===("undefined"==typeof d?"undefined":h(d))&&"object"===("undefined"==typeof c?"undefined":h(c))&&(c.exports=g),d["default"]=g},{133:133,149:149,42:42,43:43,5:5,51:51,52:52,56:56,62:62,64:64,72:72,77:77,78:78,80:80,81:81,82:82,83:83,84:84,86:86,87:87,89:89,90:90,92:92,94:94,95:95}],94:[function(a,b,c){(function(c){var d="undefined"!=typeof c?c:"undefined"!=typeof window?window:{},e=a(96);if("undefined"!=typeof document)b.exports=document;else{var f=d["__GLOBAL_DOCUMENT_CACHE@4"];f||(f=d["__GLOBAL_DOCUMENT_CACHE@4"]=e),b.exports=f}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{96:96}],95:[function(a,b,c){(function(a){"undefined"!=typeof window?b.exports=window:"undefined"!=typeof a?b.exports=a:"undefined"!=typeof self?b.exports=self:b.exports={}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],96:[function(a,b,c){},{}],97:[function(a,b,c){var d=a(113),e=d(Date,"now"),f=e||function(){return(new Date).getTime()};b.exports=f},{113:113}],98:[function(a,b,c){function d(a,b,c){function d(){r&&clearTimeout(r),n&&clearTimeout(n),t=0,n=r=s=void 0}function i(b,c){c&&clearTimeout(c),n=r=s=void 0,b&&(t=f(),o=a.apply(q,m),r||n||(m=q=void 0))}function j(){var a=b-(f()-p);0>=a||a>b?i(s,n):r=setTimeout(j,a)}function k(){i(v,r)}function l(){if(m=arguments,p=f(),q=this,s=v&&(r||!w),u===!1)var c=w&&!r;else{n||w||(t=p);var d=u-(p-t),e=0>=d||d>u;e?(n&&(n=clearTimeout(n)),t=p,o=a.apply(q,m)):n||(n=setTimeout(k,d))}return e&&r?r=clearTimeout(r):r||b===u||(r=setTimeout(j,b)),c&&(e=!0,o=a.apply(q,m)),!e||r||n||(m=q=void 0),o}var m,n,o,p,q,r,s,t=0,u=!1,v=!0;if("function"!=typeof a)throw new TypeError(g);if(b=0>b?0:+b||0,c===!0){var w=!0;v=!1}else e(c)&&(w=!!c.leading,u="maxWait"in c&&h(+c.maxWait||0,b),v="trailing"in c?!!c.trailing:v);return l.cancel=d,l}var e=a(126),f=a(97),g="Expected a function",h=Math.max;b.exports=d},{126:126,97:97}],99:[function(a,b,c){function d(a,b){if("function"!=typeof a)throw new TypeError(e);return b=f(void 0===b?a.length-1:+b||0,0),function(){for(var c=arguments,d=-1,e=f(c.length-b,0),g=Array(e);++d<e;)g[d]=c[b+d];switch(b){case 0:return a.call(this,g);case 1:return a.call(this,c[0],g);case 2:return a.call(this,c[0],c[1],g)}var h=Array(b+1);for(d=-1;++d<b;)h[d]=c[d];return h[b]=g,a.apply(this,h)}}var e="Expected a function",f=Math.max;b.exports=d},{}],100:[function(a,b,c){function d(a,b,c){var d=!0,h=!0;if("function"!=typeof a)throw new TypeError(g);return c===!1?d=!1:f(c)&&(d="leading"in c?!!c.leading:d,h="trailing"in c?!!c.trailing:h),e(a,b,{leading:d,maxWait:+b,trailing:h})}var e=a(98),f=a(126),g="Expected a function";b.exports=d},{126:126,98:98}],101:[function(a,b,c){function d(a,b){var c=-1,d=a.length;for(b||(b=Array(d));++c<d;)b[c]=a[c];return b}b.exports=d},{}],102:[function(a,b,c){function d(a,b){for(var c=-1,d=a.length;++c<d&&b(a[c],c,a)!==!1;);return a}b.exports=d},{}],103:[function(a,b,c){function d(a,b,c){c||(c={});for(var d=-1,e=b.length;++d<e;){var f=b[d];c[f]=a[f]}return c}b.exports=d},{}],104:[function(a,b,c){var d=a(111),e=d();b.exports=e},{111:111}],105:[function(a,b,c){function d(a,b){return e(a,b,f)}var e=a(104),f=a(132);b.exports=d},{104:104,132:132}],106:[function(a,b,c){function d(a,b,c,m,n){if(!i(a))return a;var o=h(b)&&(g(b)||k(b)),p=o?void 0:l(b);return e(p||b,function(e,g){
if(p&&(g=e,e=b[g]),j(e))m||(m=[]),n||(n=[]),f(a,b,g,d,c,m,n);else{var h=a[g],i=c?c(h,e,g,a,b):void 0,k=void 0===i;k&&(i=e),void 0===i&&(!o||g in a)||!k&&(i===i?i===h:h!==h)||(a[g]=i)}}),a}var e=a(102),f=a(107),g=a(123),h=a(114),i=a(126),j=a(119),k=a(129),l=a(131);b.exports=d},{102:102,107:107,114:114,119:119,123:123,126:126,129:129,131:131}],107:[function(a,b,c){function d(a,b,c,d,l,m,n){for(var o=m.length,p=b[c];o--;)if(m[o]==p)return void(a[c]=n[o]);var q=a[c],r=l?l(q,p,c,a,b):void 0,s=void 0===r;s&&(r=p,h(p)&&(g(p)||j(p))?r=g(q)?q:h(q)?e(q):[]:i(p)||f(p)?r=f(q)?k(q):i(q)?q:{}:s=!1),m.push(p),n.push(r),s?a[c]=d(r,p,l,m,n):(r===r?r!==q:q===q)&&(a[c]=r)}var e=a(101),f=a(122),g=a(123),h=a(114),i=a(127),j=a(129),k=a(130);b.exports=d},{101:101,114:114,122:122,123:123,127:127,129:129,130:130}],108:[function(a,b,c){function d(a){return function(b){return null==b?void 0:e(b)[a]}}var e=a(121);b.exports=d},{121:121}],109:[function(a,b,c){function d(a,b,c){if("function"!=typeof a)return e;if(void 0===b)return a;switch(c){case 1:return function(c){return a.call(b,c)};case 3:return function(c,d,e){return a.call(b,c,d,e)};case 4:return function(c,d,e,f){return a.call(b,c,d,e,f)};case 5:return function(c,d,e,f,g){return a.call(b,c,d,e,f,g)}}return function(){return a.apply(b,arguments)}}var e=a(135);b.exports=d},{135:135}],110:[function(a,b,c){function d(a){return g(function(b,c){var d=-1,g=null==b?0:c.length,h=g>2?c[g-2]:void 0,i=g>2?c[2]:void 0,j=g>1?c[g-1]:void 0;for("function"==typeof h?(h=e(h,j,5),g-=2):(h="function"==typeof j?j:void 0,g-=h?1:0),i&&f(c[0],c[1],i)&&(h=3>g?void 0:h,g=1);++d<g;){var k=c[d];k&&a(b,k,h)}return b})}var e=a(109),f=a(117),g=a(99);b.exports=d},{109:109,117:117,99:99}],111:[function(a,b,c){function d(a){return function(b,c,d){for(var f=e(b),g=d(b),h=g.length,i=a?h:-1;a?i--:++i<h;){var j=g[i];if(c(f[j],j,f)===!1)break}return b}}var e=a(121);b.exports=d},{121:121}],112:[function(a,b,c){var d=a(108),e=d("length");b.exports=e},{108:108}],113:[function(a,b,c){function d(a,b){var c=null==a?void 0:a[b];return e(c)?c:void 0}var e=a(125);b.exports=d},{125:125}],114:[function(a,b,c){function d(a){return null!=a&&f(e(a))}var e=a(112),f=a(118);b.exports=d},{112:112,118:118}],115:[function(a,b,c){var d=function(){try{Object({toString:0}+"")}catch(a){return function(){return!1}}return function(a){return"function"!=typeof a.toString&&"string"==typeof(a+"")}}();b.exports=d},{}],116:[function(a,b,c){function d(a,b){return a="number"==typeof a||e.test(a)?+a:-1,b=null==b?f:b,a>-1&&a%1==0&&b>a}var e=/^\d+$/,f=9007199254740991;b.exports=d},{}],117:[function(a,b,c){function d(a,b,c){if(!g(c))return!1;var d=typeof b;if("number"==d?e(c)&&f(b,c.length):"string"==d&&b in c){var h=c[b];return a===a?a===h:h!==h}return!1}var e=a(114),f=a(116),g=a(126);b.exports=d},{114:114,116:116,126:126}],118:[function(a,b,c){function d(a){return"number"==typeof a&&a>-1&&a%1==0&&e>=a}var e=9007199254740991;b.exports=d},{}],119:[function(a,b,c){function d(a){return!!a&&"object"==typeof a}b.exports=d},{}],120:[function(a,b,c){function d(a){for(var b=j(a),c=b.length,d=c&&a.length,k=!!d&&h(d)&&(f(a)||e(a)||i(a)),m=-1,n=[];++m<c;){var o=b[m];(k&&g(o,d)||l.call(a,o))&&n.push(o)}return n}var e=a(122),f=a(123),g=a(116),h=a(118),i=a(128),j=a(132),k=Object.prototype,l=k.hasOwnProperty;b.exports=d},{116:116,118:118,122:122,123:123,128:128,132:132}],121:[function(a,b,c){function d(a){if(g.unindexedChars&&f(a)){for(var b=-1,c=a.length,d=Object(a);++b<c;)d[b]=a.charAt(b);return d}return e(a)?a:Object(a)}var e=a(126),f=a(128),g=a(134);b.exports=d},{126:126,128:128,134:134}],122:[function(a,b,c){function d(a){return f(a)&&e(a)&&h.call(a,"callee")&&!i.call(a,"callee")}var e=a(114),f=a(119),g=Object.prototype,h=g.hasOwnProperty,i=g.propertyIsEnumerable;b.exports=d},{114:114,119:119}],123:[function(a,b,c){var d=a(113),e=a(118),f=a(119),g="[object Array]",h=Object.prototype,i=h.toString,j=d(Array,"isArray"),k=j||function(a){return f(a)&&e(a.length)&&i.call(a)==g};b.exports=k},{113:113,118:118,119:119}],124:[function(a,b,c){function d(a){return e(a)&&h.call(a)==f}var e=a(126),f="[object Function]",g=Object.prototype,h=g.toString;b.exports=d},{126:126}],125:[function(a,b,c){function d(a){return null!=a&&(e(a)?l.test(j.call(a)):g(a)&&(f(a)?l:h).test(a))}var e=a(124),f=a(115),g=a(119),h=/^\[object .+?Constructor\]$/,i=Object.prototype,j=Function.prototype.toString,k=i.hasOwnProperty,l=RegExp("^"+j.call(k).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");b.exports=d},{115:115,119:119,124:124}],126:[function(a,b,c){function d(a){var b=typeof a;return!!a&&("object"==b||"function"==b)}b.exports=d},{}],127:[function(a,b,c){function d(a){var b;if(!h(a)||m.call(a)!=j||g(a)||f(a)||!l.call(a,"constructor")&&(b=a.constructor,"function"==typeof b&&!(b instanceof b)))return!1;var c;return i.ownLast?(e(a,function(a,b,d){return c=l.call(d,b),!1}),c!==!1):(e(a,function(a,b){c=b}),void 0===c||l.call(a,c))}var e=a(105),f=a(122),g=a(115),h=a(119),i=a(134),j="[object Object]",k=Object.prototype,l=k.hasOwnProperty,m=k.toString;b.exports=d},{105:105,115:115,119:119,122:122,134:134}],128:[function(a,b,c){function d(a){return"string"==typeof a||e(a)&&h.call(a)==f}var e=a(119),f="[object String]",g=Object.prototype,h=g.toString;b.exports=d},{119:119}],129:[function(a,b,c){function d(a){return f(a)&&e(a.length)&&!!D[F.call(a)]}var e=a(118),f=a(119),g="[object Arguments]",h="[object Array]",i="[object Boolean]",j="[object Date]",k="[object Error]",l="[object Function]",m="[object Map]",n="[object Number]",o="[object Object]",p="[object RegExp]",q="[object Set]",r="[object String]",s="[object WeakMap]",t="[object ArrayBuffer]",u="[object Float32Array]",v="[object Float64Array]",w="[object Int8Array]",x="[object Int16Array]",y="[object Int32Array]",z="[object Uint8Array]",A="[object Uint8ClampedArray]",B="[object Uint16Array]",C="[object Uint32Array]",D={};D[u]=D[v]=D[w]=D[x]=D[y]=D[z]=D[A]=D[B]=D[C]=!0,D[g]=D[h]=D[t]=D[i]=D[j]=D[k]=D[l]=D[m]=D[n]=D[o]=D[p]=D[q]=D[r]=D[s]=!1;var E=Object.prototype,F=E.toString;b.exports=d},{118:118,119:119}],130:[function(a,b,c){function d(a){return e(a,f(a))}var e=a(103),f=a(132);b.exports=d},{103:103,132:132}],131:[function(a,b,c){var d=a(113),e=a(114),f=a(126),g=a(120),h=a(134),i=d(Object,"keys"),j=i?function(a){var b=null==a?void 0:a.constructor;return"function"==typeof b&&b.prototype===a||("function"==typeof a?h.enumPrototypes:e(a))?g(a):f(a)?i(a):[]}:g;b.exports=j},{113:113,114:114,120:120,126:126,134:134}],132:[function(a,b,c){function d(a){if(null==a)return[];k(a)||(a=Object(a));var b=a.length;b=b&&j(b)&&(g(a)||f(a)||l(a))&&b||0;for(var c=a.constructor,d=-1,e=h(c)&&c.prototype||y,n=e===a,o=Array(b),p=b>0,r=m.enumErrorProps&&(a===x||a instanceof Error),s=m.enumPrototypes&&h(a);++d<b;)o[d]=d+"";for(var u in a)s&&"prototype"==u||r&&("message"==u||"name"==u)||p&&i(u,b)||"constructor"==u&&(n||!A.call(a,u))||o.push(u);if(m.nonEnumShadows&&a!==y){var D=a===z?v:a===x?q:B.call(a),E=C[D]||C[t];for(D==t&&(e=y),b=w.length;b--;){u=w[b];var F=E[u];n&&F||(F?!A.call(a,u):a[u]===e[u])||o.push(u)}}return o}var e=a(102),f=a(122),g=a(123),h=a(124),i=a(116),j=a(118),k=a(126),l=a(128),m=a(134),n="[object Array]",o="[object Boolean]",p="[object Date]",q="[object Error]",r="[object Function]",s="[object Number]",t="[object Object]",u="[object RegExp]",v="[object String]",w=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],x=Error.prototype,y=Object.prototype,z=String.prototype,A=y.hasOwnProperty,B=y.toString,C={};C[n]=C[p]=C[s]={constructor:!0,toLocaleString:!0,toString:!0,valueOf:!0},C[o]=C[v]={constructor:!0,toString:!0,valueOf:!0},C[q]=C[r]=C[u]={constructor:!0,toString:!0},C[t]={constructor:!0},e(w,function(a){for(var b in C)if(A.call(C,b)){var c=C[b];c[a]=A.call(c,a)}}),b.exports=d},{102:102,116:116,118:118,122:122,123:123,124:124,126:126,128:128,134:134}],133:[function(a,b,c){var d=a(106),e=a(110),f=e(d);b.exports=f},{106:106,110:110}],134:[function(a,b,c){var d=Array.prototype,e=Error.prototype,f=Object.prototype,g=f.propertyIsEnumerable,h=d.splice,i={};!function(a){var b=function(){this.x=a},c={0:a,length:a},d=[];b.prototype={valueOf:a,y:a};for(var f in new b)d.push(f);i.enumErrorProps=g.call(e,"message")||g.call(e,"name"),i.enumPrototypes=g.call(b,"prototype"),i.nonEnumShadows=!/valueOf/.test(d),i.ownLast="x"!=d[0],i.spliceObjects=(h.call(c,0,1),!c[0]),i.unindexedChars="x"[0]+Object("x")[0]!="xx"}(1,0),b.exports=i},{}],135:[function(a,b,c){function d(a){return a}b.exports=d},{}],136:[function(a,b,c){"use strict";var d=a(143);b.exports=function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"==typeof Symbol.iterator)return!0;var a={},b=Symbol("test"),c=Object(b);if("string"==typeof b)return!1;if("[object Symbol]"!==Object.prototype.toString.call(b))return!1;if("[object Symbol]"!==Object.prototype.toString.call(c))return!1;var e=42;a[b]=e;for(b in a)return!1;if(0!==d(a).length)return!1;if("function"==typeof Object.keys&&0!==Object.keys(a).length)return!1;if("function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(a).length)return!1;var f=Object.getOwnPropertySymbols(a);if(1!==f.length||f[0]!==b)return!1;if(!Object.prototype.propertyIsEnumerable.call(a,b))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){var g=Object.getOwnPropertyDescriptor(a,b);if(g.value!==e||g.enumerable!==!0)return!1}return!0}},{143:143}],137:[function(a,b,c){"use strict";var d=a(143),e=a(142),f=function(a){return"undefined"!=typeof a&&null!==a},g=a(136)(),h=Object,i=e.call(Function.call,Array.prototype.push),j=e.call(Function.call,Object.prototype.propertyIsEnumerable),k=g?Object.getOwnPropertySymbols:null;b.exports=function(a,b){if(!f(a))throw new TypeError("target must be an object");var c,e,l,m,n,o,p,q=h(a);for(c=1;c<arguments.length;++c){e=h(arguments[c]),m=d(e);var r=g&&(Object.getOwnPropertySymbols||k);if(r)for(n=r(e),l=0;l<n.length;++l)p=n[l],j(e,p)&&i(m,p);for(l=0;l<m.length;++l)p=m[l],o=e[p],j(e,p)&&(q[p]=o)}return q}},{136:136,142:142,143:143}],138:[function(a,b,c){"use strict";var d=a(139),e=a(137),f=a(145),g=a(146),h=f();d(h,{implementation:e,getPolyfill:f,shim:g}),b.exports=h},{137:137,139:139,145:145,146:146}],139:[function(a,b,c){"use strict";var d=a(143),e=a(140),f="function"==typeof Symbol&&"symbol"==typeof Symbol(),g=Object.prototype.toString,h=function(a){return"function"==typeof a&&"[object Function]"===g.call(a)},i=function(){var a={};try{Object.defineProperty(a,"x",{enumerable:!1,value:a});for(var b in a)return!1;return a.x===a}catch(c){return!1}},j=Object.defineProperty&&i(),k=function(a,b,c,d){(!(b in a)||h(d)&&d())&&(j?Object.defineProperty(a,b,{configurable:!0,enumerable:!1,value:c,writable:!0}):a[b]=c)},l=function(a,b){var c=arguments.length>2?arguments[2]:{},g=d(b);f&&(g=g.concat(Object.getOwnPropertySymbols(b))),e(g,function(d){k(a,d,b[d],c[d])})};l.supportsDescriptors=!!j,b.exports=l},{140:140,143:143}],140:[function(a,b,c){var d=Object.prototype.hasOwnProperty,e=Object.prototype.toString;b.exports=function(a,b,c){if("[object Function]"!==e.call(b))throw new TypeError("iterator must be a function");var f=a.length;if(f===+f)for(var g=0;f>g;g++)b.call(c,a[g],g,a);else for(var h in a)d.call(a,h)&&b.call(c,a[h],h,a)}},{}],141:[function(a,b,c){var d="Function.prototype.bind called on incompatible ",e=Array.prototype.slice,f=Object.prototype.toString,g="[object Function]";b.exports=function(a){var b=this;if("function"!=typeof b||f.call(b)!==g)throw new TypeError(d+b);for(var c,h=e.call(arguments,1),i=function(){if(this instanceof c){var d=b.apply(this,h.concat(e.call(arguments)));return Object(d)===d?d:this}return b.apply(a,h.concat(e.call(arguments)))},j=Math.max(0,b.length-h.length),k=[],l=0;j>l;l++)k.push("$"+l);if(c=Function("binder","return function ("+k.join(",")+"){ return binder.apply(this,arguments); }")(i),b.prototype){var m=function(){};m.prototype=b.prototype,c.prototype=new m,m.prototype=null}return c}},{}],142:[function(a,b,c){var d=a(141);b.exports=Function.prototype.bind||d},{141:141}],143:[function(a,b,c){"use strict";var d=Object.prototype.hasOwnProperty,e=Object.prototype.toString,f=Array.prototype.slice,g=a(144),h=Object.prototype.propertyIsEnumerable,i=!h.call({toString:null},"toString"),j=h.call(function(){},"prototype"),k=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],l=function(a){var b=a.constructor;return b&&b.prototype===a},m={$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},n=function(){if("undefined"==typeof window)return!1;for(var a in window)try{if(!m["$"+a]&&d.call(window,a)&&null!==window[a]&&"object"==typeof window[a])try{l(window[a])}catch(b){return!0}}catch(b){return!0}return!1}(),o=function(a){if("undefined"==typeof window||!n)return l(a);try{return l(a)}catch(b){return!1}},p=function(a){var b=null!==a&&"object"==typeof a,c="[object Function]"===e.call(a),f=g(a),h=b&&"[object String]"===e.call(a),l=[];if(!b&&!c&&!f)throw new TypeError("Object.keys called on a non-object");var m=j&&c;if(h&&a.length>0&&!d.call(a,0))for(var n=0;n<a.length;++n)l.push(String(n));if(f&&a.length>0)for(var p=0;p<a.length;++p)l.push(String(p));else for(var q in a)m&&"prototype"===q||!d.call(a,q)||l.push(String(q));if(i)for(var r=o(a),s=0;s<k.length;++s)r&&"constructor"===k[s]||!d.call(a,k[s])||l.push(k[s]);return l};p.shim=function(){if(Object.keys){var a=function(){return 2===(Object.keys(arguments)||"").length}(1,2);if(!a){var b=Object.keys;Object.keys=function(a){return b(g(a)?f.call(a):a)}}}else Object.keys=p;return Object.keys||p},b.exports=p},{144:144}],144:[function(a,b,c){"use strict";var d=Object.prototype.toString;b.exports=function(a){var b=d.call(a),c="[object Arguments]"===b;return c||(c="[object Array]"!==b&&null!==a&&"object"==typeof a&&"number"==typeof a.length&&a.length>=0&&"[object Function]"===d.call(a.callee)),c}},{}],145:[function(a,b,c){"use strict";var d=a(137),e=function(){if(!Object.assign)return!1;for(var a="abcdefghijklmnopqrst",b=a.split(""),c={},d=0;d<b.length;++d)c[b[d]]=b[d];var e=Object.assign({},c),f="";for(var g in e)f+=g;return a!==f},f=function(){if(!Object.assign||!Object.preventExtensions)return!1;var a=Object.preventExtensions({1:2});try{Object.assign(a,"xy")}catch(b){return"y"===a[1]}return!1};b.exports=function(){return Object.assign?e()?d:f()?d:Object.assign:d}},{137:137}],146:[function(a,b,c){"use strict";var d=a(139),e=a(145);b.exports=function(){var a=e();return d(Object,{assign:a},{assign:function(){return Object.assign!==a}}),a}},{139:139,145:145}],147:[function(a,b,c){function d(a,b){var c,d=null;try{c=JSON.parse(a,b)}catch(e){d=e}return[d,c]}b.exports=d},{}],148:[function(a,b,c){function d(a){return a.replace(/\n\r?\s*/g,"")}b.exports=function(a){for(var b="",c=0;c<arguments.length;c++)b+=d(a[c])+(arguments[c+1]||"");return b}},{}],149:[function(a,b,c){"use strict";function d(a,b){for(var c=0;c<a.length;c++)b(a[c])}function e(a){for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}function f(a,b,c){var d=a;return l(b)?(c=b,"string"==typeof a&&(d={uri:a})):d=n(b,{uri:a}),d.callback=c,d}function g(a,b,c){return b=f(a,b,c),h(b)}function h(a){function b(){4===j.readyState&&f()}function c(){var a=void 0;if(j.response?a=j.response:"text"!==j.responseType&&j.responseType||(a=j.responseText||j.responseXML),u)try{a=JSON.parse(a)}catch(b){}return a}function d(a){clearTimeout(o),a instanceof Error||(a=new Error(""+(a||"Unknown XMLHttpRequest Error"))),a.statusCode=0,h(a,i)}function f(){if(!n){var b;clearTimeout(o),b=a.useXDR&&void 0===j.status?200:1223===j.status?204:j.status;var d=i,e=null;0!==b?(d={body:c(),statusCode:b,method:q,headers:{},url:p,rawRequest:j},j.getAllResponseHeaders&&(d.headers=m(j.getAllResponseHeaders()))):e=new Error("Internal XMLHttpRequest Error"),h(e,d,d.body)}}var h=a.callback;if("undefined"==typeof h)throw new Error("callback argument missing");h=k(h);var i={body:void 0,headers:{},statusCode:0,method:q,url:p,rawRequest:j},j=a.xhr||null;j||(j=a.cors||a.useXDR?new g.XDomainRequest:new g.XMLHttpRequest);var l,n,o,p=j.url=a.uri||a.url,q=j.method=a.method||"GET",r=a.body||a.data||null,s=j.headers=a.headers||{},t=!!a.sync,u=!1;if("json"in a&&(u=!0,s.accept||s.Accept||(s.Accept="application/json"),"GET"!==q&&"HEAD"!==q&&(s["content-type"]||s["Content-Type"]||(s["Content-Type"]="application/json"),r=JSON.stringify(a.json))),j.onreadystatechange=b,j.onload=f,j.onerror=d,j.onprogress=function(){},j.ontimeout=d,j.open(q,p,!t,a.username,a.password),t||(j.withCredentials=!!a.withCredentials),!t&&a.timeout>0&&(o=setTimeout(function(){n=!0,j.abort("timeout");var a=new Error("XMLHttpRequest timeout");a.code="ETIMEDOUT",d(a)},a.timeout)),j.setRequestHeader)for(l in s)s.hasOwnProperty(l)&&j.setRequestHeader(l,s[l]);else if(a.headers&&!e(a.headers))throw new Error("Headers cannot be set on an XDomainRequest object");return"responseType"in a&&(j.responseType=a.responseType),"beforeSend"in a&&"function"==typeof a.beforeSend&&a.beforeSend(j),j.send(r),j}function i(){}var j=a(95),k=a(151),l=a(150),m=a(154),n=a(155);b.exports=g,g.XMLHttpRequest=j.XMLHttpRequest||i,g.XDomainRequest="withCredentials"in new g.XMLHttpRequest?g.XMLHttpRequest:j.XDomainRequest,d(["get","put","post","patch","head","delete"],function(a){g["delete"===a?"del":a]=function(b,c,d){return c=f(b,c,d),c.method=a.toUpperCase(),h(c)}})},{150:150,151:151,154:154,155:155,95:95}],150:[function(a,b,c){function d(a){var b=e.call(a);return"[object Function]"===b||"function"==typeof a&&"[object RegExp]"!==b||"undefined"!=typeof window&&(a===window.setTimeout||a===window.alert||a===window.confirm||a===window.prompt)}b.exports=d;var e=Object.prototype.toString},{}],151:[function(a,b,c){function d(a){var b=!1;return function(){return b?void 0:(b=!0,a.apply(this,arguments))}}b.exports=d,d.proto=d(function(){Object.defineProperty(Function.prototype,"once",{value:function(){return d(this)},configurable:!0})})},{}],152:[function(a,b,c){function d(a,b,c){if(!h(b))throw new TypeError("iterator must be a function");arguments.length<3&&(c=this),"[object Array]"===i.call(a)?e(a,b,c):"string"==typeof a?f(a,b,c):g(a,b,c)}function e(a,b,c){for(var d=0,e=a.length;e>d;d++)j.call(a,d)&&b.call(c,a[d],d,a)}function f(a,b,c){for(var d=0,e=a.length;e>d;d++)b.call(c,a.charAt(d),d,a)}function g(a,b,c){for(var d in a)j.call(a,d)&&b.call(c,a[d],d,a)}var h=a(150);b.exports=d;var i=Object.prototype.toString,j=Object.prototype.hasOwnProperty},{150:150}],153:[function(a,b,c){function d(a){return a.replace(/^\s*|\s*$/g,"")}c=b.exports=d,c.left=function(a){return a.replace(/^\s*/,"")},c.right=function(a){return a.replace(/\s*$/,"")}},{}],154:[function(a,b,c){var d=a(153),e=a(152),f=function(a){return"[object Array]"===Object.prototype.toString.call(a)};b.exports=function(a){if(!a)return{};var b={};return e(d(a).split("\n"),function(a){var c=a.indexOf(":"),e=d(a.slice(0,c)).toLowerCase(),g=d(a.slice(c+1));"undefined"==typeof b[e]?b[e]=g:f(b[e])?b[e].push(g):b[e]=[b[e],g]}),b}},{152:152,153:153}],155:[function(a,b,c){function d(){for(var a={},b=0;b<arguments.length;b++){var c=arguments[b];for(var d in c)e.call(c,d)&&(a[d]=c[d])}return a}b.exports=d;var e=Object.prototype.hasOwnProperty},{}]},{},[93])(93)}),function(a){var b=a.vttjs={},c=b.VTTCue,d=b.VTTRegion,e=a.VTTCue,f=a.VTTRegion;b.shim=function(){b.VTTCue=c,b.VTTRegion=d},b.restore=function(){b.VTTCue=e,b.VTTRegion=f}}(this),function(a,b){function c(a){if("string"!=typeof a)return!1;var b=h[a.toLowerCase()];return!!b&&a.toLowerCase()}function d(a){if("string"!=typeof a)return!1;var b=i[a.toLowerCase()];return!!b&&a.toLowerCase()}function e(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)a[d]=c[d]}return a}function f(a,b,f){var h=this,i=/MSIE\s8\.0/.test(navigator.userAgent),j={};i?h=document.createElement("custom"):j.enumerable=!0,h.hasBeenReset=!1;var k="",l=!1,m=a,n=b,o=f,p=null,q="",r=!0,s="auto",t="start",u=50,v="middle",w=50,x="middle";return Object.defineProperty(h,"id",e({},j,{get:function(){return k},set:function(a){k=""+a}})),Object.defineProperty(h,"pauseOnExit",e({},j,{get:function(){return l},set:function(a){l=!!a}})),Object.defineProperty(h,"startTime",e({},j,{get:function(){return m},set:function(a){if("number"!=typeof a)throw new TypeError("Start time must be set to a number.");m=a,this.hasBeenReset=!0}})),Object.defineProperty(h,"endTime",e({},j,{get:function(){return n},set:function(a){if("number"!=typeof a)throw new TypeError("End time must be set to a number.");n=a,this.hasBeenReset=!0}})),Object.defineProperty(h,"text",e({},j,{get:function(){return o},set:function(a){o=""+a,this.hasBeenReset=!0}})),Object.defineProperty(h,"region",e({},j,{get:function(){return p},set:function(a){p=a,this.hasBeenReset=!0}})),Object.defineProperty(h,"vertical",e({},j,{get:function(){return q},set:function(a){var b=c(a);if(b===!1)throw new SyntaxError("An invalid or illegal string was specified.");q=b,this.hasBeenReset=!0}})),Object.defineProperty(h,"snapToLines",e({},j,{get:function(){return r},set:function(a){r=!!a,this.hasBeenReset=!0}})),Object.defineProperty(h,"line",e({},j,{get:function(){return s},set:function(a){if("number"!=typeof a&&a!==g)throw new SyntaxError("An invalid number or illegal string was specified.");s=a,this.hasBeenReset=!0}})),Object.defineProperty(h,"lineAlign",e({},j,{get:function(){return t},set:function(a){var b=d(a);if(!b)throw new SyntaxError("An invalid or illegal string was specified.");t=b,this.hasBeenReset=!0}})),Object.defineProperty(h,"position",e({},j,{get:function(){return u},set:function(a){if(0>a||a>100)throw new Error("Position must be between 0 and 100.");u=a,this.hasBeenReset=!0}})),Object.defineProperty(h,"positionAlign",e({},j,{get:function(){return v},set:function(a){var b=d(a);if(!b)throw new SyntaxError("An invalid or illegal string was specified.");v=b,this.hasBeenReset=!0}})),Object.defineProperty(h,"size",e({},j,{get:function(){return w},set:function(a){if(0>a||a>100)throw new Error("Size must be between 0 and 100.");w=a,this.hasBeenReset=!0}})),Object.defineProperty(h,"align",e({},j,{get:function(){return x},set:function(a){var b=d(a);if(!b)throw new SyntaxError("An invalid or illegal string was specified.");x=b,this.hasBeenReset=!0}})),h.displayState=void 0,i?h:void 0}var g="auto",h={"":!0,lr:!0,rl:!0},i={start:!0,middle:!0,end:!0,left:!0,right:!0};f.prototype.getCueAsHTML=function(){return WebVTT.convertCueToDOMTree(window,this.text)},a.VTTCue=a.VTTCue||f,b.VTTCue=f}(this,this.vttjs||{}),function(a,b){function c(a){if("string"!=typeof a)return!1;var b=f[a.toLowerCase()];return!!b&&a.toLowerCase()}function d(a){return"number"==typeof a&&a>=0&&100>=a}function e(){var a=100,b=3,e=0,f=100,g=0,h=100,i="";Object.defineProperties(this,{width:{enumerable:!0,get:function(){return a},set:function(b){if(!d(b))throw new Error("Width must be between 0 and 100.");a=b}},lines:{enumerable:!0,get:function(){return b},set:function(a){if("number"!=typeof a)throw new TypeError("Lines must be set to a number.");b=a}},regionAnchorY:{enumerable:!0,get:function(){return f},set:function(a){if(!d(a))throw new Error("RegionAnchorX must be between 0 and 100.");f=a}},regionAnchorX:{enumerable:!0,get:function(){return e},set:function(a){if(!d(a))throw new Error("RegionAnchorY must be between 0 and 100.");e=a}},viewportAnchorY:{enumerable:!0,get:function(){return h},set:function(a){if(!d(a))throw new Error("ViewportAnchorY must be between 0 and 100.");h=a}},viewportAnchorX:{enumerable:!0,get:function(){return g},set:function(a){if(!d(a))throw new Error("ViewportAnchorX must be between 0 and 100.");g=a}},scroll:{enumerable:!0,get:function(){return i},set:function(a){var b=c(a);if(b===!1)throw new SyntaxError("An invalid or illegal string was specified.");i=b}}})}var f={"":!0,up:!0};a.VTTRegion=a.VTTRegion||e,b.VTTRegion=e}(this,this.vttjs||{}),function(a){function b(a,b){this.name="ParsingError",this.code=a.code,this.message=b||a.message}function c(a){function b(a,b,c,d){return 3600*(0|a)+60*(0|b)+(0|c)+(0|d)/1e3}var c=a.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);return c?c[3]?b(c[1],c[2],c[3].replace(":",""),c[4]):c[1]>59?b(c[1],c[2],0,c[4]):b(0,c[1],c[2],c[4]):null}function d(){this.values=o(null)}function e(a,b,c,d){var e=d?a.split(d):[a];for(var f in e)if("string"==typeof e[f]){var g=e[f].split(c);if(2===g.length){var h=g[0],i=g[1];b(h,i)}}}function f(a,f,g){function h(){var d=c(a);if(null===d)throw new b(b.Errors.BadTimeStamp,"Malformed timestamp: "+k);return a=a.replace(/^[^\sa-zA-Z-]+/,""),d}function i(a,b){var c=new d;e(a,function(a,b){switch(a){case"region":for(var d=g.length-1;d>=0;d--)if(g[d].id===b){c.set(a,g[d].region);break}break;case"vertical":c.alt(a,b,["rl","lr"]);break;case"line":var e=b.split(","),f=e[0];c.integer(a,f),c.percent(a,f)?c.set("snapToLines",!1):null,c.alt(a,f,["auto"]),2===e.length&&c.alt("lineAlign",e[1],["start","middle","end"]);break;case"position":e=b.split(","),c.percent(a,e[0]),2===e.length&&c.alt("positionAlign",e[1],["start","middle","end"]);break;case"size":c.percent(a,b);break;case"align":c.alt(a,b,["start","middle","end","left","right"])}},/:/,/\s/),b.region=c.get("region",null),b.vertical=c.get("vertical",""),b.line=c.get("line","auto"),b.lineAlign=c.get("lineAlign","start"),b.snapToLines=c.get("snapToLines",!0),b.size=c.get("size",100),b.align=c.get("align","middle"),b.position=c.get("position",{start:0,left:0,middle:50,end:100,right:100},b.align),b.positionAlign=c.get("positionAlign",{start:"start",left:"start",middle:"middle",end:"end",right:"end"},b.align)}function j(){a=a.replace(/^\s+/,"")}var k=a;if(j(),f.startTime=h(),j(),"-->"!==a.substr(0,3))throw new b(b.Errors.BadTimeStamp,"Malformed time stamp (time stamps must be separated by '-->'): "+k);a=a.substr(3),j(),f.endTime=h(),j(),i(a,f)}function g(a,b){function d(){function a(a){return b=b.substr(a.length),a}if(!b)return null;var c=b.match(/^([^<]*)(<[^>]+>?)?/);return a(c[1]?c[1]:c[2])}function e(a){return p[a]}function f(a){for(;o=a.match(/&(amp|lt|gt|lrm|rlm|nbsp);/);)a=a.replace(o[0],e);return a}function g(a,b){return!s[b.localName]||s[b.localName]===a.localName}function h(b,c){var d=q[b];if(!d)return null;var e=a.document.createElement(d);e.localName=d;var f=r[b];return f&&c&&(e[f]=c.trim()),e}for(var i,j=a.document.createElement("div"),k=j,l=[];null!==(i=d());)if("<"!==i[0])k.appendChild(a.document.createTextNode(f(i)));else{if("/"===i[1]){l.length&&l[l.length-1]===i.substr(2).replace(">","")&&(l.pop(),k=k.parentNode);continue}var m,n=c(i.substr(1,i.length-2));if(n){m=a.document.createProcessingInstruction("timestamp",n),k.appendChild(m);continue}var o=i.match(/^<([^.\s\/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);if(!o)continue;if(m=h(o[1],o[3]),!m)continue;if(!g(k,m))continue;o[2]&&(m.className=o[2].substr(1).replace("."," ")),l.push(o[1]),k.appendChild(m),k=m}return j}function h(a){function b(a,b){for(var c=b.childNodes.length-1;c>=0;c--)a.push(b.childNodes[c])}function c(a){if(!a||!a.length)return null;var d=a.pop(),e=d.textContent||d.innerText;if(e){var f=e.match(/^.*(\n|\r)/);return f?(a.length=0,f[0]):e}return"ruby"===d.tagName?c(a):d.childNodes?(b(a,d),c(a)):void 0}var d,e=[],f="";if(!a||!a.childNodes)return"ltr";for(b(e,a);f=c(e);)for(var g=0;g<f.length;g++){d=f.charCodeAt(g);for(var h=0;h<t.length;h++)if(t[h]===d)return"rtl"}return"ltr"}function i(a){if("number"==typeof a.line&&(a.snapToLines||a.line>=0&&a.line<=100))return a.line;if(!a.track||!a.track.textTrackList||!a.track.textTrackList.mediaElement)return-1;for(var b=a.track,c=b.textTrackList,d=0,e=0;e<c.length&&c[e]!==b;e++)"showing"===c[e].mode&&d++;return-1*++d}function j(){}function k(a,b,c){var d=/MSIE\s8\.0/.test(navigator.userAgent),e="rgba(255, 255, 255, 1)",f="rgba(0, 0, 0, 0.8)";d&&(e="rgb(255, 255, 255)",f="rgb(0, 0, 0)"),j.call(this),this.cue=b,this.cueDiv=g(a,b.text);var i={color:e,backgroundColor:f,position:"relative",left:0,right:0,top:0,bottom:0,display:"inline"};d||(i.writingMode=""===b.vertical?"horizontal-tb":"lr"===b.vertical?"vertical-lr":"vertical-rl",i.unicodeBidi="plaintext"),this.applyStyles(i,this.cueDiv),this.div=a.document.createElement("div"),i={textAlign:"middle"===b.align?"center":b.align,font:c.font,whiteSpace:"pre-line",position:"absolute"},d||(i.direction=h(this.cueDiv),i.writingMode=""===b.vertical?"horizontal-tb":"lr"===b.vertical?"vertical-lr":"vertical-rl".stylesunicodeBidi="plaintext"),this.applyStyles(i),this.div.appendChild(this.cueDiv);var k=0;switch(b.positionAlign){case"start":k=b.position;break;case"middle":k=b.position-b.size/2;break;case"end":k=b.position-b.size}""===b.vertical?this.applyStyles({left:this.formatStyle(k,"%"),width:this.formatStyle(b.size,"%")}):this.applyStyles({top:this.formatStyle(k,"%"),height:this.formatStyle(b.size,"%")}),this.move=function(a){this.applyStyles({top:this.formatStyle(a.top,"px"),bottom:this.formatStyle(a.bottom,"px"),left:this.formatStyle(a.left,"px"),right:this.formatStyle(a.right,"px"),height:this.formatStyle(a.height,"px"),width:this.formatStyle(a.width,"px")})}}function l(a){var b,c,d,e,f=/MSIE\s8\.0/.test(navigator.userAgent);if(a.div){c=a.div.offsetHeight,d=a.div.offsetWidth,e=a.div.offsetTop;var g=(g=a.div.childNodes)&&(g=g[0])&&g.getClientRects&&g.getClientRects();a=a.div.getBoundingClientRect(),b=g?Math.max(g[0]&&g[0].height||0,a.height/g.length):0}this.left=a.left,this.right=a.right,this.top=a.top||e,this.height=a.height||c,this.bottom=a.bottom||e+(a.height||c),this.width=a.width||d,this.lineHeight=void 0!==b?b:a.lineHeight,f&&!this.lineHeight&&(this.lineHeight=13)}function m(a,b,c,d){function e(a,b){for(var e,f=new l(a),g=1,h=0;h<b.length;h++){for(;a.overlapsOppositeAxis(c,b[h])||a.within(c)&&a.overlapsAny(d);)a.move(b[h]);if(a.within(c))return a;var i=a.intersectPercentage(c);g>i&&(e=new l(a),g=i),a=new l(f)}return e||f}var f=new l(b),g=b.cue,h=i(g),j=[];if(g.snapToLines){var k;switch(g.vertical){case"":j=["+y","-y"],k="height";break;case"rl":j=["+x","-x"],k="width";break;case"lr":j=["-x","+x"],k="width"}var m=f.lineHeight,n=m*Math.round(h),o=c[k]+m,p=j[0];Math.abs(n)>o&&(n=0>n?-1:1,n*=Math.ceil(o/m)*m),0>h&&(n+=""===g.vertical?c.height:c.width,j=j.reverse()),f.move(p,n)}else{var q=f.lineHeight/c.height*100;switch(g.lineAlign){case"middle":h-=q/2;break;case"end":h-=q}switch(g.vertical){case"":b.applyStyles({top:b.formatStyle(h,"%")});break;case"rl":b.applyStyles({left:b.formatStyle(h,"%")});break;case"lr":b.applyStyles({right:b.formatStyle(h,"%")})}j=["+y","-x","+x","-y"],f=new l(b)}var r=e(f,j);b.move(r.toCSSCompatValues(c))}function n(){}var o=Object.create||function(){function a(){}return function(b){if(1!==arguments.length)throw new Error("Object.create shim only accepts one parameter.");return a.prototype=b,new a}}();b.prototype=o(Error.prototype),b.prototype.constructor=b,b.Errors={BadSignature:{code:0,message:"Malformed WebVTT signature."},BadTimeStamp:{code:1,message:"Malformed time stamp."}},d.prototype={set:function(a,b){this.get(a)||""===b||(this.values[a]=b)},get:function(a,b,c){return c?this.has(a)?this.values[a]:b[c]:this.has(a)?this.values[a]:b},has:function(a){return a in this.values},alt:function(a,b,c){for(var d=0;d<c.length;++d)if(b===c[d]){this.set(a,b);break}},integer:function(a,b){/^-?\d+$/.test(b)&&this.set(a,parseInt(b,10))},percent:function(a,b){var c;return!!((c=b.match(/^([\d]{1,3})(\.[\d]*)?%$/))&&(b=parseFloat(b),b>=0&&100>=b))&&(this.set(a,b),!0)}};var p={"&amp;":"&","&lt;":"<","&gt;":">","&lrm;":"‎","&rlm;":"‏","&nbsp;":" "},q={c:"span",i:"i",b:"b",u:"u",ruby:"ruby",rt:"rt",v:"span",lang:"span"},r={v:"title",lang:"lang"},s={rt:"ruby"},t=[1470,1472,1475,1478,1488,1489,1490,1491,1492,1493,1494,1495,1496,1497,1498,1499,1500,1501,1502,1503,1504,1505,1506,1507,1508,1509,1510,1511,1512,1513,1514,1520,1521,1522,1523,1524,1544,1547,1549,1563,1566,1567,1568,1569,1570,1571,1572,1573,1574,1575,1576,1577,1578,1579,1580,1581,1582,1583,1584,1585,1586,1587,1588,1589,1590,1591,1592,1593,1594,1595,1596,1597,1598,1599,1600,1601,1602,1603,1604,1605,1606,1607,1608,1609,1610,1645,1646,1647,1649,1650,1651,1652,1653,1654,1655,1656,1657,1658,1659,1660,1661,1662,1663,1664,1665,1666,1667,1668,1669,1670,1671,1672,1673,1674,1675,1676,1677,1678,1679,1680,1681,1682,1683,1684,1685,1686,1687,1688,1689,1690,1691,1692,1693,1694,1695,1696,1697,1698,1699,1700,1701,1702,1703,1704,1705,1706,1707,1708,1709,1710,1711,1712,1713,1714,1715,1716,1717,1718,1719,1720,1721,1722,1723,1724,1725,1726,1727,1728,1729,1730,1731,1732,1733,1734,1735,1736,1737,1738,1739,1740,1741,1742,1743,1744,1745,1746,1747,1748,1749,1765,1766,1774,1775,1786,1787,1788,1789,1790,1791,1792,1793,1794,1795,1796,1797,1798,1799,1800,1801,1802,1803,1804,1805,1807,1808,1810,1811,1812,1813,1814,1815,1816,1817,1818,1819,1820,1821,1822,1823,1824,1825,1826,1827,1828,1829,1830,1831,1832,1833,1834,1835,1836,1837,1838,1839,1869,1870,1871,1872,1873,1874,1875,1876,1877,1878,1879,1880,1881,1882,1883,1884,1885,1886,1887,1888,1889,1890,1891,1892,1893,1894,1895,1896,1897,1898,1899,1900,1901,1902,1903,1904,1905,1906,1907,1908,1909,1910,1911,1912,1913,1914,1915,1916,1917,1918,1919,1920,1921,1922,1923,1924,1925,1926,1927,1928,1929,1930,1931,1932,1933,1934,1935,1936,1937,1938,1939,1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1969,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2e3,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026,2036,2037,2042,2048,2049,2050,2051,2052,2053,2054,2055,2056,2057,2058,2059,2060,2061,2062,2063,2064,2065,2066,2067,2068,2069,2074,2084,2088,2096,2097,2098,2099,2100,2101,2102,2103,2104,2105,2106,2107,2108,2109,2110,2112,2113,2114,2115,2116,2117,2118,2119,2120,2121,2122,2123,2124,2125,2126,2127,2128,2129,2130,2131,2132,2133,2134,2135,2136,2142,2208,2210,2211,2212,2213,2214,2215,2216,2217,2218,2219,2220,8207,64285,64287,64288,64289,64290,64291,64292,64293,64294,64295,64296,64298,64299,64300,64301,64302,64303,64304,64305,64306,64307,64308,64309,64310,64312,64313,64314,64315,64316,64318,64320,64321,64323,64324,64326,64327,64328,64329,64330,64331,64332,64333,64334,64335,64336,64337,64338,64339,64340,64341,64342,64343,64344,64345,64346,64347,64348,64349,64350,64351,64352,64353,64354,64355,64356,64357,64358,64359,64360,64361,64362,64363,64364,64365,64366,64367,64368,64369,64370,64371,64372,64373,64374,64375,64376,64377,64378,64379,64380,64381,64382,64383,64384,64385,64386,64387,64388,64389,64390,64391,64392,64393,64394,64395,64396,64397,64398,64399,64400,64401,64402,64403,64404,64405,64406,64407,64408,64409,64410,64411,64412,64413,64414,64415,64416,64417,64418,64419,64420,64421,64422,64423,64424,64425,64426,64427,64428,64429,64430,64431,64432,64433,64434,64435,64436,64437,64438,64439,64440,64441,64442,64443,64444,64445,64446,64447,64448,64449,64467,64468,64469,64470,64471,64472,64473,64474,64475,64476,64477,64478,64479,64480,64481,64482,64483,64484,64485,64486,64487,64488,64489,64490,64491,64492,64493,64494,64495,64496,64497,64498,64499,64500,64501,64502,64503,64504,64505,64506,64507,64508,64509,64510,64511,64512,64513,64514,64515,64516,64517,64518,64519,64520,64521,64522,64523,64524,64525,64526,64527,64528,64529,64530,64531,64532,64533,64534,64535,64536,64537,64538,64539,64540,64541,64542,64543,64544,64545,64546,64547,64548,64549,64550,64551,64552,64553,64554,64555,64556,64557,64558,64559,64560,64561,64562,64563,64564,64565,64566,64567,64568,64569,64570,64571,64572,64573,64574,64575,64576,64577,64578,64579,64580,64581,64582,64583,64584,64585,64586,64587,64588,64589,64590,64591,64592,64593,64594,64595,64596,64597,64598,64599,64600,64601,64602,64603,64604,64605,64606,64607,64608,64609,64610,64611,64612,64613,64614,64615,64616,64617,64618,64619,64620,64621,64622,64623,64624,64625,64626,64627,64628,64629,64630,64631,64632,64633,64634,64635,64636,64637,64638,64639,64640,64641,64642,64643,64644,64645,64646,64647,64648,64649,64650,64651,64652,64653,64654,64655,64656,64657,64658,64659,64660,64661,64662,64663,64664,64665,64666,64667,64668,64669,64670,64671,64672,64673,64674,64675,64676,64677,64678,64679,64680,64681,64682,64683,64684,64685,64686,64687,64688,64689,64690,64691,64692,64693,64694,64695,64696,64697,64698,64699,64700,64701,64702,64703,64704,64705,64706,64707,64708,64709,64710,64711,64712,64713,64714,64715,64716,64717,64718,64719,64720,64721,64722,64723,64724,64725,64726,64727,64728,64729,64730,64731,64732,64733,64734,64735,64736,64737,64738,64739,64740,64741,64742,64743,64744,64745,64746,64747,64748,64749,64750,64751,64752,64753,64754,64755,64756,64757,64758,64759,64760,64761,64762,64763,64764,64765,64766,64767,64768,64769,64770,64771,64772,64773,64774,64775,64776,64777,64778,64779,64780,64781,64782,64783,64784,64785,64786,64787,64788,64789,64790,64791,64792,64793,64794,64795,64796,64797,64798,64799,64800,64801,64802,64803,64804,64805,64806,64807,64808,64809,64810,64811,64812,64813,64814,64815,64816,64817,64818,64819,64820,64821,64822,64823,64824,64825,64826,64827,64828,64829,64848,64849,64850,64851,64852,64853,64854,64855,64856,64857,64858,64859,64860,64861,64862,64863,64864,64865,64866,64867,64868,64869,64870,64871,64872,64873,64874,64875,64876,64877,64878,64879,64880,64881,64882,64883,64884,64885,64886,64887,64888,64889,64890,64891,64892,64893,64894,64895,64896,64897,64898,64899,64900,64901,64902,64903,64904,64905,64906,64907,64908,64909,64910,64911,64914,64915,64916,64917,64918,64919,64920,64921,64922,64923,64924,64925,64926,64927,64928,64929,64930,64931,64932,64933,64934,64935,64936,64937,64938,64939,64940,64941,64942,64943,64944,64945,64946,64947,64948,64949,64950,64951,64952,64953,64954,64955,64956,64957,64958,64959,64960,64961,64962,64963,64964,64965,64966,64967,65008,65009,65010,65011,65012,65013,65014,65015,65016,65017,65018,65019,65020,65136,65137,65138,65139,65140,65142,65143,65144,65145,65146,65147,65148,65149,65150,65151,65152,65153,65154,65155,65156,65157,65158,65159,65160,65161,65162,65163,65164,65165,65166,65167,65168,65169,65170,65171,65172,65173,65174,65175,65176,65177,65178,65179,65180,65181,65182,65183,65184,65185,65186,65187,65188,65189,65190,65191,65192,65193,65194,65195,65196,65197,65198,65199,65200,65201,65202,65203,65204,65205,65206,65207,65208,65209,65210,65211,65212,65213,65214,65215,65216,65217,65218,65219,65220,65221,65222,65223,65224,65225,65226,65227,65228,65229,65230,65231,65232,65233,65234,65235,65236,65237,65238,65239,65240,65241,65242,65243,65244,65245,65246,65247,65248,65249,65250,65251,65252,65253,65254,65255,65256,65257,65258,65259,65260,65261,65262,65263,65264,65265,65266,65267,65268,65269,65270,65271,65272,65273,65274,65275,65276,67584,67585,67586,67587,67588,67589,67592,67594,67595,67596,67597,67598,67599,67600,67601,67602,67603,67604,67605,67606,67607,67608,67609,67610,67611,67612,67613,67614,67615,67616,67617,67618,67619,67620,67621,67622,67623,67624,67625,67626,67627,67628,67629,67630,67631,67632,67633,67634,67635,67636,67637,67639,67640,67644,67647,67648,67649,67650,67651,67652,67653,67654,67655,67656,67657,67658,67659,67660,67661,67662,67663,67664,67665,67666,67667,67668,67669,67671,67672,67673,67674,67675,67676,67677,67678,67679,67840,67841,67842,67843,67844,67845,67846,67847,67848,67849,67850,67851,67852,67853,67854,67855,67856,67857,67858,67859,67860,67861,67862,67863,67864,67865,67866,67867,67872,67873,67874,67875,67876,67877,67878,67879,67880,67881,67882,67883,67884,67885,67886,67887,67888,67889,67890,67891,67892,67893,67894,67895,67896,67897,67903,67968,67969,67970,67971,67972,67973,67974,67975,67976,67977,67978,67979,67980,67981,67982,67983,67984,67985,67986,67987,67988,67989,67990,67991,67992,67993,67994,67995,67996,67997,67998,67999,68e3,68001,68002,68003,68004,68005,68006,68007,68008,68009,68010,68011,68012,68013,68014,68015,68016,68017,68018,68019,68020,68021,68022,68023,68030,68031,68096,68112,68113,68114,68115,68117,68118,68119,68121,68122,68123,68124,68125,68126,68127,68128,68129,68130,68131,68132,68133,68134,68135,68136,68137,68138,68139,68140,68141,68142,68143,68144,68145,68146,68147,68160,68161,68162,68163,68164,68165,68166,68167,68176,68177,68178,68179,68180,68181,68182,68183,68184,68192,68193,68194,68195,68196,68197,68198,68199,68200,68201,68202,68203,68204,68205,68206,68207,68208,68209,68210,68211,68212,68213,68214,68215,68216,68217,68218,68219,68220,68221,68222,68223,68352,68353,68354,68355,68356,68357,68358,68359,68360,68361,68362,68363,68364,68365,68366,68367,68368,68369,68370,68371,68372,68373,68374,68375,68376,68377,68378,68379,68380,68381,68382,68383,68384,68385,68386,68387,68388,68389,68390,68391,68392,68393,68394,68395,68396,68397,68398,68399,68400,68401,68402,68403,68404,68405,68416,68417,68418,68419,68420,68421,68422,68423,68424,68425,68426,68427,68428,68429,68430,68431,68432,68433,68434,68435,68436,68437,68440,68441,68442,68443,68444,68445,68446,68447,68448,68449,68450,68451,68452,68453,68454,68455,68456,68457,68458,68459,68460,68461,68462,68463,68464,68465,68466,68472,68473,68474,68475,68476,68477,68478,68479,68608,68609,68610,68611,68612,68613,68614,68615,68616,68617,68618,68619,68620,68621,68622,68623,68624,68625,68626,68627,68628,68629,68630,68631,68632,68633,68634,68635,68636,68637,68638,68639,68640,68641,68642,68643,68644,68645,68646,68647,68648,68649,68650,68651,68652,68653,68654,68655,68656,68657,68658,68659,68660,68661,68662,68663,68664,68665,68666,68667,68668,68669,68670,68671,68672,68673,68674,68675,68676,68677,68678,68679,68680,126464,126465,126466,126467,126469,126470,126471,126472,126473,126474,126475,126476,126477,126478,126479,126480,126481,126482,126483,126484,126485,126486,126487,126488,126489,126490,126491,126492,126493,126494,126495,126497,126498,126500,126503,126505,126506,126507,126508,126509,126510,126511,126512,126513,126514,126516,126517,126518,126519,126521,126523,126530,126535,126537,126539,126541,126542,126543,126545,126546,126548,126551,126553,126555,126557,126559,126561,126562,126564,126567,126568,126569,126570,126572,126573,126574,126575,126576,126577,126578,126580,126581,126582,126583,126585,126586,126587,126588,126590,126592,126593,126594,126595,126596,126597,126598,126599,126600,126601,126603,126604,126605,126606,126607,126608,126609,126610,126611,126612,126613,126614,126615,126616,126617,126618,126619,126625,126626,126627,126629,126630,126631,126632,126633,126635,126636,126637,126638,126639,126640,126641,126642,126643,126644,126645,126646,126647,126648,126649,126650,126651,1114109];
j.prototype.applyStyles=function(a,b){b=b||this.div;for(var c in a)a.hasOwnProperty(c)&&(b.style[c]=a[c])},j.prototype.formatStyle=function(a,b){return 0===a?0:a+b},k.prototype=o(j.prototype),k.prototype.constructor=k,l.prototype.move=function(a,b){switch(b=void 0!==b?b:this.lineHeight,a){case"+x":this.left+=b,this.right+=b;break;case"-x":this.left-=b,this.right-=b;break;case"+y":this.top+=b,this.bottom+=b;break;case"-y":this.top-=b,this.bottom-=b}},l.prototype.overlaps=function(a){return this.left<a.right&&this.right>a.left&&this.top<a.bottom&&this.bottom>a.top},l.prototype.overlapsAny=function(a){for(var b=0;b<a.length;b++)if(this.overlaps(a[b]))return!0;return!1},l.prototype.within=function(a){return this.top>=a.top&&this.bottom<=a.bottom&&this.left>=a.left&&this.right<=a.right},l.prototype.overlapsOppositeAxis=function(a,b){switch(b){case"+x":return this.left<a.left;case"-x":return this.right>a.right;case"+y":return this.top<a.top;case"-y":return this.bottom>a.bottom}},l.prototype.intersectPercentage=function(a){var b=Math.max(0,Math.min(this.right,a.right)-Math.max(this.left,a.left)),c=Math.max(0,Math.min(this.bottom,a.bottom)-Math.max(this.top,a.top)),d=b*c;return d/(this.height*this.width)},l.prototype.toCSSCompatValues=function(a){return{top:this.top-a.top,bottom:a.bottom-this.bottom,left:this.left-a.left,right:a.right-this.right,height:this.height,width:this.width}},l.getSimpleBoxPosition=function(a){var b=a.div?a.div.offsetHeight:a.tagName?a.offsetHeight:0,c=a.div?a.div.offsetWidth:a.tagName?a.offsetWidth:0,d=a.div?a.div.offsetTop:a.tagName?a.offsetTop:0;a=a.div?a.div.getBoundingClientRect():a.tagName?a.getBoundingClientRect():a;var e={left:a.left,right:a.right,top:a.top||d,height:a.height||b,bottom:a.bottom||d+(a.height||b),width:a.width||c};return e},n.StringDecoder=function(){return{decode:function(a){if(!a)return"";if("string"!=typeof a)throw new Error("Error - expected string data.");return decodeURIComponent(encodeURIComponent(a))}}},n.convertCueToDOMTree=function(a,b){return a&&b?g(a,b):null};var u=.05,v="sans-serif",w="1.5%";n.processCues=function(a,b,c){function d(a){for(var b=0;b<a.length;b++)if(a[b].hasBeenReset||!a[b].displayState)return!0;return!1}if(!a||!b||!c)return null;for(;c.firstChild;)c.removeChild(c.firstChild);var e=a.document.createElement("div");if(e.style.position="absolute",e.style.left="0",e.style.right="0",e.style.top="0",e.style.bottom="0",e.style.margin=w,c.appendChild(e),d(b)){var f=[],g=l.getSimpleBoxPosition(e),h=Math.round(g.height*u*100)/100,i={font:h+"px "+v};!function(){for(var c,d,h=0;h<b.length;h++)d=b[h],c=new k(a,d,i),e.appendChild(c.div),m(a,c,g,f),d.displayState=c.div,f.push(l.getSimpleBoxPosition(c))}()}else for(var j=0;j<b.length;j++)e.appendChild(b[j].displayState)},n.Parser=function(a,b,c){c||(c=b,b={}),b||(b={}),this.window=a,this.vttjs=b,this.state="INITIAL",this.buffer="",this.decoder=c||new TextDecoder("utf8"),this.regionList=[]},n.Parser.prototype={reportOrThrowError:function(a){if(!(a instanceof b))throw a;this.onparsingerror&&this.onparsingerror(a)},parse:function(a){function c(){for(var a=i.buffer,b=0;b<a.length&&"\r"!==a[b]&&"\n"!==a[b];)++b;var c=a.substr(0,b);return"\r"===a[b]&&++b,"\n"===a[b]&&++b,i.buffer=a.substr(b),c}function g(a){var b=new d;if(e(a,function(a,c){switch(a){case"id":b.set(a,c);break;case"width":b.percent(a,c);break;case"lines":b.integer(a,c);break;case"regionanchor":case"viewportanchor":var e=c.split(",");if(2!==e.length)break;var f=new d;if(f.percent("x",e[0]),f.percent("y",e[1]),!f.has("x")||!f.has("y"))break;b.set(a+"X",f.get("x")),b.set(a+"Y",f.get("y"));break;case"scroll":b.alt(a,c,["up"])}},/=/,/\s/),b.has("id")){var c=new(i.vttjs.VTTRegion||i.window.VTTRegion);c.width=b.get("width",100),c.lines=b.get("lines",3),c.regionAnchorX=b.get("regionanchorX",0),c.regionAnchorY=b.get("regionanchorY",100),c.viewportAnchorX=b.get("viewportanchorX",0),c.viewportAnchorY=b.get("viewportanchorY",100),c.scroll=b.get("scroll",""),i.onregion&&i.onregion(c),i.regionList.push({id:b.get("id"),region:c})}}function h(a){e(a,function(a,b){switch(a){case"Region":g(b)}},/:/)}var i=this;a&&(i.buffer+=i.decoder.decode(a,{stream:!0}));try{var j;if("INITIAL"===i.state){if(!/\r\n|\n/.test(i.buffer))return this;j=c();var k=j.match(/^WEBVTT([ \t].*)?$/);if(!k||!k[0])throw new b(b.Errors.BadSignature);i.state="HEADER"}for(var l=!1;i.buffer;){if(!/\r\n|\n/.test(i.buffer))return this;switch(l?l=!1:j=c(),i.state){case"HEADER":/:/.test(j)?h(j):j||(i.state="ID");continue;case"NOTE":j||(i.state="ID");continue;case"ID":if(/^NOTE($|[ \t])/.test(j)){i.state="NOTE";break}if(!j)continue;if(i.cue=new(i.vttjs.VTTCue||i.window.VTTCue)(0,0,""),i.state="CUE",-1===j.indexOf("-->")){i.cue.id=j;continue}case"CUE":try{f(j,i.cue,i.regionList)}catch(m){i.reportOrThrowError(m),i.cue=null,i.state="BADCUE";continue}i.state="CUETEXT";continue;case"CUETEXT":var n=-1!==j.indexOf("-->");if(!j||n&&(l=!0)){i.oncue&&i.oncue(i.cue),i.cue=null,i.state="ID";continue}i.cue.text&&(i.cue.text+="\n"),i.cue.text+=j;continue;case"BADCUE":j||(i.state="ID");continue}}}catch(m){i.reportOrThrowError(m),"CUETEXT"===i.state&&i.cue&&i.oncue&&i.oncue(i.cue),i.cue=null,i.state="INITIAL"===i.state?"BADWEBVTT":"BADCUE"}return this},flush:function(){var a=this;try{if(a.buffer+=a.decoder.decode(),(a.cue||"HEADER"===a.state)&&(a.buffer+="\n\n",a.parse()),"INITIAL"===a.state)throw new b(b.Errors.BadSignature)}catch(c){a.reportOrThrowError(c)}return a.onflush&&a.onflush(),this}},a.WebVTT=n}(this,this.vttjs||{}),function(){"use strict";var a=null;a="undefined"==typeof window.videojs&&"function"==typeof require?require("video.js"):window.videojs,function(a,b){function c(a,b,c,d){return f={label:c,sources:b},"function"==typeof d?d(a,b,c):a.src(b.map(function(a){return{src:a.src,type:a.type,res:a.res}}))}var d,e={},f={},g={},h=b.getComponent("MenuItem"),i=b.extend(h,{constructor:function(a,b,c,d){this.onClickListener=c,this.label=d,h.call(this,a,b),this.src=b.src,this.on("click",this.onClick),this.on("touchstart",this.onClick),b.initialySelected&&(this.showAsLabel(),this.selected(!0),this.addClass("vjs-selected"))},showAsLabel:function(){this.label&&(this.label.innerHTML=this.options_.label)},onClick:function(a){this.onClickListener(this);var b=this.player_.currentTime(),d=this.player_.paused();this.showAsLabel(),this.addClass("vjs-selected"),d||this.player_.bigPlayButton.hide(),"function"!=typeof a&&"function"==typeof this.options_.customSourcePicker&&(a=this.options_.customSourcePicker);var e="loadeddata";"Youtube"!==this.player_.techName_&&"none"===this.player_.preload()&&"Flash"!==this.player_.techName_&&(e="timeupdate"),c(this.player_,this.src,this.options_.label,a).one(e,function(){this.player_.currentTime(b),this.player_.handleTechSeeked_(),d||this.player_.play().handleTechSeeked_(),this.player_.trigger("resolutionchange")})}}),j=b.getComponent("MenuButton"),k=b.extend(j,{constructor:function(a,c,d,e){if(this.sources=c.sources,this.label=e,this.label.innerHTML=c.initialySelectedLabel,j.call(this,a,c,d),this.controlText("Quality"),d.dynamicLabel)this.el().appendChild(e);else{var f=document.createElement("span");b.addClass(f,"vjs-resolution-button-staticlabel"),this.el().appendChild(f)}},createItems:function(){var a=[],b=this.sources&&this.sources.label||{},c=function(b){a.map(function(a){a.selected(a===b),a.removeClass("vjs-selected")})};for(var d in b)b.hasOwnProperty(d)&&(a.push(new i(this.player_,{label:d,src:b[d],initialySelected:d===this.options_.initialySelectedLabel,customSourcePicker:this.options_.customSourcePicker},c,this.label)),g[d]=a[a.length-1]);return a}});d=function(a){function d(a,b){return a.res&&b.res?+b.res-+a.res:0}function h(a){var b={label:{},res:{},type:{}};return a.map(function(a){i(b,"label",a),i(b,"res",a),i(b,"type",a),j(b,"label",a),j(b,"res",a),j(b,"type",a)}),b}function i(a,b,c){null==a[b][c[b]]&&(a[b][c[b]]=[])}function j(a,b,c){a[b][c[b]].push(c)}function l(a,b){var c=n["default"],d="";return"high"===c?(c=b[0].res,d=b[0].label):"low"!==c&&null!=c&&a.res[c]?a.res[c]&&(d=a.res[c][0].label):(c=b[b.length-1].res,d=b[b.length-1].label),{res:c,label:d,sources:a.res[c]}}function m(a){a.tech_.ytPlayer.setPlaybackQuality("default"),a.tech_.ytPlayer.addEventListener("onPlaybackQualityChange",function(){a.trigger("resolutionchange")}),a.one("play",function(){var b=a.tech_.ytPlayer.getAvailableQualityLevels(),c={highres:{res:1080,label:"1080",yt:"highres"},hd1080:{res:1080,label:"1080",yt:"hd1080"},hd720:{res:720,label:"720",yt:"hd720"},large:{res:480,label:"480",yt:"large"},medium:{res:360,label:"360",yt:"medium"},small:{res:240,label:"240",yt:"small"},tiny:{res:144,label:"144",yt:"tiny"},auto:{res:0,label:"auto",yt:"default"}},d=[];b.map(function(b){d.push({src:a.src().src,type:a.src().type,label:c[b].label,res:c[b].res,_yt:c[b].yt})}),q=h(d);var e=function(b,c,d){return a.tech_.ytPlayer.setPlaybackQuality(c[0]._yt),a},f={label:"auto",res:0,sources:q.label.auto},g=new k(a,{sources:q,initialySelectedLabel:f.label,initialySelectedRes:f.res,customSourcePicker:e},n,p);g.el().classList.add("vjs-resolution-button"),a.controlBar.resolutionSwitcher=a.controlBar.addChild(g)})}var n=b.mergeOptions(e,a),o=this,p=document.createElement("span"),q={};b.addClass(p,"vjs-resolution-button-label"),o.updateSrc=function(a){if(!a)return o.src();o.controlBar.resolutionSwitcher&&(o.controlBar.resolutionSwitcher.dispose(),delete o.controlBar.resolutionSwitcher),a=a.sort(d),q=h(a);var e=l(q,a),f=new k(o,{sources:q,initialySelectedLabel:e.label,initialySelectedRes:e.res,customSourcePicker:n.customSourcePicker},n,p);return b.addClass(f.el(),"vjs-resolution-button"),o.controlBar.resolutionSwitcher=o.controlBar.el_.insertBefore(f.el_,o.controlBar.getChild("fullscreenToggle").el_),o.controlBar.resolutionSwitcher.dispose=function(){this.parentNode.removeChild(this)},c(o,e.sources,e.label)},o.currentResolution=function(a,b){return null==a?f:(null!=g[a]&&g[a].onClick(b),o)},o.getGroupedSrc=function(){return q},o.ready(function(){o.options_.sources.length>1&&o.updateSrc(o.options_.sources),"Youtube"===o.techName_&&m(o)})},b.plugin("videoJsResolutionSwitcher",d)}(window,a)}();
/**
 * amp amplience-sdk-client v0.1.0
 *
 * @class amp
 */
var amp = amp || {};

(function(){

    amp.di = {};
    amp.stats = {};

/**
 * Polyfills for IE
 *
 * @class __Global__
 */

// requestAnimationFrame Polyfill (Paul Irish / Erik Möller)
(function() {
    var lastTime = 0;
    var vendors = ['webkit', 'moz'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame =
            window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
                timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());

// JSON
var JSON = JSON || {};
/**
 * Adds stringify if it doesn't exit
 * @method JSOP.stringify
 * @param {Object} obj
 */
// implement JSON.stringify serialization
JSON.stringify = JSON.stringify || function (obj) {
    var t = typeof (obj);
    if (t != "object" || obj === null) {

        // simple data type
        if (t == "string") obj = '"' + obj + '"';
        return String(obj);

    }
    else {

        // recurse array or object
        var n, v, json = [], arr = (obj && obj.constructor == Array);

        for (n in obj) {
            if(obj.hasOwnProperty(n)){
                v = obj[n];
                t = typeof(v);

                if (t == "string") v = '"' + v + '"';
                else if (t == "object" && v !== null) v = JSON.stringify(v);

                json.push((arr ? "" : '"' + n + '":') + String(v));
            }
        }

        return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
    }
};
/**
 * implement JSON.parse de-serialization it doesn't exit
 * @method JSON.parse
 * @param {String} data
 */
JSON.parse = JSON.parse || function (data) {

    if ( typeof data !== "string" || !data ) {
        return null;
    }

    var rvalidchars = /^[\],:{}\s]*$/;

    var rvalidescape = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;

    var rvalidtokens = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;

    var rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g;

    var rwhitespace = /^\s+|\s+$/g;

    // Make sure the incoming data is actual JSON
    // Logic borrowed from jquery && http://json.org/json2.js
    if ( rvalidchars.test( data.replace(rwhitespace,"").replace( rvalidescape, "@" ).replace( rvalidtokens, "]" ).replace( rvalidbraces, "")) ) {
        return ( new Function( "return " + data ) )();
    }
};



(function() {
    var define, requireModule, require, requirejs;

    (function() {
        var registry = {}, seen = {};

        define = function(name, deps, callback) {
            registry[name] = { deps: deps, callback: callback };
        };

        requirejs = require = requireModule = function(name) {
            requirejs._eak_seen = registry;

            if (seen[name]) { return seen[name]; }
            seen[name] = {};

            if (!registry[name]) {
                throw new Error("Could not find module " + name);
            }

            var mod = registry[name],
                deps = mod.deps,
                callback = mod.callback,
                reified = [],
                exports;

            for (var i=0, l=deps.length; i<l; i++) {
                if (deps[i] === 'exports') {
                    reified.push(exports = {});
                } else {
                    reified.push(requireModule(resolve(deps[i])));
                }
            }

            var value = callback.apply(this, reified);
            return seen[name] = exports || value;

            function resolve(child) {
                if (child.charAt(0) !== '.') { return child; }
                var parts = child.split("/");
                var parentBase = name.split("/").slice(0, -1);

                for (var i=0, l=parts.length; i<l; i++) {
                    var part = parts[i];

                    if (part === '..') { parentBase.pop(); }
                    else if (part === '.') { continue; }
                    else { parentBase.push(part); }
                }

                return parentBase.join("/");
            }
        };
    })();

    define("promise/all",
        ["./utils","exports"],
        function(__dependency1__, __exports__) {
            "use strict";
            /* global toString */

            var isArray = __dependency1__.isArray;
            var isFunction = __dependency1__.isFunction;

            /**
             Returns a promise that is fulfilled when all the given promises have been
             fulfilled, or rejected if any of them become rejected. The return promise
             is fulfilled with an array that gives all the values in the order they were
             passed in the `promises` array argument.

             Example:

             ```javascript
             var promise1 = RSVP.resolve(1);
             var promise2 = RSVP.resolve(2);
             var promise3 = RSVP.resolve(3);
             var promises = [ promise1, promise2, promise3 ];

             RSVP.all(promises).then(function(array){
        // The array here would be [ 1, 2, 3 ];
      });
             ```

             If any of the `promises` given to `RSVP.all` are rejected, the first promise
             that is rejected will be given as an argument to the returned promises's
             rejection handler. For example:

             Example:

             ```javascript
             var promise1 = RSVP.resolve(1);
             var promise2 = RSVP.reject(new Error("2"));
             var promise3 = RSVP.reject(new Error("3"));
             var promises = [ promise1, promise2, promise3 ];

             RSVP.all(promises).then(function(array){
        // Code here never runs because there are rejected promises!
      }, function(error) {
        // error.message === "2"
      });
             ```

             @method all
             @for RSVP
             @param {Array} promises
             @param {String} label
             @return {Promise} promise that is fulfilled when all `promises` have been
             fulfilled, or rejected if any of them become rejected.
             */
            function all(promises) {
                /*jshint validthis:true */
                var Promise = this;

                if (!isArray(promises)) {
                    throw new TypeError('You must pass an array to all.');
                }

                return new Promise(function(resolve, reject) {
                    var results = [], remaining = promises.length,
                        promise;

                    if (remaining === 0) {
                        resolve([]);
                    }

                    function resolver(index) {
                        return function(value) {
                            resolveAll(index, value);
                        };
                    }

                    function resolveAll(index, value) {
                        results[index] = value;
                        if (--remaining === 0) {
                            resolve(results);
                        }
                    }

                    for (var i = 0; i < promises.length; i++) {
                        promise = promises[i];

                        if (promise && isFunction(promise.then)) {
                            promise.then(resolver(i), reject);
                        } else {
                            resolveAll(i, promise);
                        }
                    }
                });
            }

            __exports__.all = all;
        });
    define("promise/asap",
        ["exports"],
        function(__exports__) {
            "use strict";
            var browserGlobal = (typeof window !== 'undefined') ? window : {};
            var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
            var local = (typeof global !== 'undefined') ? global : (this === undefined? window:this);

            // node
            function useNextTick() {
                return function() {
                    process.nextTick(flush);
                };
            }

            function useMutationObserver() {
                var iterations = 0;
                var observer = new BrowserMutationObserver(flush);
                var node = document.createTextNode('');
                observer.observe(node, { characterData: true });

                return function() {
                    node.data = (iterations = ++iterations % 2);
                };
            }

            function useSetTimeout() {
                return function() {
                    local.setTimeout(flush, 1);
                };
            }

            var queue = [];
            function flush() {
                for (var i = 0; i < queue.length; i++) {
                    var tuple = queue[i];
                    var callback = tuple[0], arg = tuple[1];
                    callback(arg);
                }
                queue = [];
            }

            var scheduleFlush;

            // Decide what async method to use to triggering processing of queued callbacks:
            if (typeof process !== 'undefined' && {}.toString.call(process) === '[object process]') {
                scheduleFlush = useNextTick();
            } else if (BrowserMutationObserver) {
                scheduleFlush = useMutationObserver();
            } else {
                scheduleFlush = useSetTimeout();
            }

            function asap(callback, arg) {
                var length = queue.push([callback, arg]);
                if (length === 1) {
                    // If length is 1, that means that we need to schedule an async flush.
                    // If additional callbacks are queued before the queue is flushed, they
                    // will be processed by this flush that we are scheduling.
                    scheduleFlush();
                }
            }

            __exports__.asap = asap;
        });
    define("promise/config",
        ["exports"],
        function(__exports__) {
            "use strict";
            var config = {
                instrument: false
            };

            function configure(name, value) {
                if (arguments.length === 2) {
                    config[name] = value;
                } else {
                    return config[name];
                }
            }

            __exports__.config = config;
            __exports__.configure = configure;
        });
    define("promise/polyfill",
        ["./promise","./utils","exports"],
        function(__dependency1__, __dependency2__, __exports__) {
            "use strict";
            /*global self*/
            var RSVPPromise = __dependency1__.Promise;
            var isFunction = __dependency2__.isFunction;

            function polyfill() {
                var local;

                if (typeof global !== 'undefined') {
                    local = global;
                } else if (typeof window !== 'undefined' && window.document) {
                    local = window;
                } else {
                    local = self;
                }

                var es6PromiseSupport =
                    "Promise" in local &&
                    // Some of these methods are missing from
                    // Firefox/Chrome experimental implementations
                    "resolve" in local.Promise &&
                    "reject" in local.Promise &&
                    "all" in local.Promise &&
                    "race" in local.Promise &&
                    // Older version of the spec had a resolver object
                    // as the arg rather than a function
                    (function() {
                        var resolve;
                        new local.Promise(function(r) { resolve = r; });
                        return isFunction(resolve);
                    }());

                if (!es6PromiseSupport) {
                    local.Promise = RSVPPromise;
                }
            }

            __exports__.polyfill = polyfill;
        });
    define("promise/promise",
        ["./config","./utils","./all","./race","./resolve","./reject","./asap","exports"],
        function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__, __dependency6__, __dependency7__, __exports__) {
            "use strict";
            var config = __dependency1__.config;
            var configure = __dependency1__.configure;
            var objectOrFunction = __dependency2__.objectOrFunction;
            var isFunction = __dependency2__.isFunction;
            var now = __dependency2__.now;
            var all = __dependency3__.all;
            var race = __dependency4__.race;
            var staticResolve = __dependency5__.resolve;
            var staticReject = __dependency6__.reject;
            var asap = __dependency7__.asap;

            var counter = 0;

            config.async = asap; // default async is asap;

            function Promise(resolver) {
                if (!isFunction(resolver)) {
                    throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
                }

                if (!(this instanceof Promise)) {
                    throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
                }

                this._subscribers = [];

                invokeResolver(resolver, this);
            }

            function invokeResolver(resolver, promise) {
                function resolvePromise(value) {
                    resolve(promise, value);
                }

                function rejectPromise(reason) {
                    reject(promise, reason);
                }

                try {
                    resolver(resolvePromise, rejectPromise);
                } catch(e) {
                    rejectPromise(e);
                }
            }

            function invokeCallback(settled, promise, callback, detail) {
                var hasCallback = isFunction(callback),
                    value, error, succeeded, failed;

                if (hasCallback) {
                    try {
                        value = callback(detail);
                        succeeded = true;
                    } catch(e) {
                        failed = true;
                        error = e;
                    }
                } else {
                    value = detail;
                    succeeded = true;
                }

                if (handleThenable(promise, value)) {
                    return;
                } else if (hasCallback && succeeded) {
                    resolve(promise, value);
                } else if (failed) {
                    reject(promise, error);
                } else if (settled === FULFILLED) {
                    resolve(promise, value);
                } else if (settled === REJECTED) {
                    reject(promise, value);
                }
            }

            var PENDING   = void 0;
            var SEALED    = 0;
            var FULFILLED = 1;
            var REJECTED  = 2;

            function subscribe(parent, child, onFulfillment, onRejection) {
                var subscribers = parent._subscribers;
                var length = subscribers.length;

                subscribers[length] = child;
                subscribers[length + FULFILLED] = onFulfillment;
                subscribers[length + REJECTED]  = onRejection;
            }

            function publish(promise, settled) {
                var child, callback, subscribers = promise._subscribers, detail = promise._detail;

                for (var i = 0; i < subscribers.length; i += 3) {
                    child = subscribers[i];
                    callback = subscribers[i + settled];

                    invokeCallback(settled, child, callback, detail);
                }

                promise._subscribers = null;
            }

            Promise.prototype = {
                constructor: Promise,

                _state: undefined,
                _detail: undefined,
                _subscribers: undefined,

                then: function(onFulfillment, onRejection) {
                    var promise = this;

                    var thenPromise = new this.constructor(function() {});

                    if (this._state) {
                        var callbacks = arguments;
                        config.async(function invokePromiseCallback() {
                            invokeCallback(promise._state, thenPromise, callbacks[promise._state - 1], promise._detail);
                        });
                    } else {
                        subscribe(this, thenPromise, onFulfillment, onRejection);
                    }

                    return thenPromise;
                },

                'catch': function(onRejection) {
                    return this.then(null, onRejection);
                }
            };

            Promise.all = all;
            Promise.race = race;
            Promise.resolve = staticResolve;
            Promise.reject = staticReject;

            function handleThenable(promise, value) {
                var then = null,
                    resolved;

                try {
                    if (promise === value) {
                        throw new TypeError("A promises callback cannot return that same promise.");
                    }

                    if (objectOrFunction(value)) {
                        then = value.then;

                        if (isFunction(then)) {
                            then.call(value, function(val) {
                                if (resolved) { return true; }
                                resolved = true;

                                if (value !== val) {
                                    resolve(promise, val);
                                } else {
                                    fulfill(promise, val);
                                }
                            }, function(val) {
                                if (resolved) { return true; }
                                resolved = true;

                                reject(promise, val);
                            });

                            return true;
                        }
                    }
                } catch (error) {
                    if (resolved) { return true; }
                    reject(promise, error);
                    return true;
                }

                return false;
            }

            function resolve(promise, value) {
                if (promise === value) {
                    fulfill(promise, value);
                } else if (!handleThenable(promise, value)) {
                    fulfill(promise, value);
                }
            }

            function fulfill(promise, value) {
                if (promise._state !== PENDING) { return; }
                promise._state = SEALED;
                promise._detail = value;

                config.async(publishFulfillment, promise);
            }

            function reject(promise, reason) {
                if (promise._state !== PENDING) { return; }
                promise._state = SEALED;
                promise._detail = reason;

                config.async(publishRejection, promise);
            }

            function publishFulfillment(promise) {
                publish(promise, promise._state = FULFILLED);
            }

            function publishRejection(promise) {
                publish(promise, promise._state = REJECTED);
            }

            __exports__.Promise = Promise;
        });
    define("promise/race",
        ["./utils","exports"],
        function(__dependency1__, __exports__) {
            "use strict";
            /* global toString */
            var isArray = __dependency1__.isArray;

            /**
             `RSVP.race` allows you to watch a series of promises and act as soon as the
             first promise given to the `promises` argument fulfills or rejects.

             Example:

             ```javascript
             var promise1 = new RSVP.Promise(function(resolve, reject){
        setTimeout(function(){
          resolve("promise 1");
        }, 200);
      });

             var promise2 = new RSVP.Promise(function(resolve, reject){
        setTimeout(function(){
          resolve("promise 2");
        }, 100);
      });

             RSVP.race([promise1, promise2]).then(function(result){
        // result === "promise 2" because it was resolved before promise1
        // was resolved.
      });
             ```

             `RSVP.race` is deterministic in that only the state of the first completed
             promise matters. For example, even if other promises given to the `promises`
             array argument are resolved, but the first completed promise has become
             rejected before the other promises became fulfilled, the returned promise
             will become rejected:

             ```javascript
             var promise1 = new RSVP.Promise(function(resolve, reject){
        setTimeout(function(){
          resolve("promise 1");
        }, 200);
      });

             var promise2 = new RSVP.Promise(function(resolve, reject){
        setTimeout(function(){
          reject(new Error("promise 2"));
        }, 100);
      });

             RSVP.race([promise1, promise2]).then(function(result){
        // Code here never runs because there are rejected promises!
      }, function(reason){
        // reason.message === "promise2" because promise 2 became rejected before
        // promise 1 became fulfilled
      });
             ```

             @method race
             @for RSVP
             @param {Array} promises array of promises to observe
             @param {String} label optional string for describing the promise returned.
             Useful for tooling.
             @return {Promise} a promise that becomes fulfilled with the value the first
             completed promises is resolved with if the first completed promise was
             fulfilled, or rejected with the reason that the first completed promise
             was rejected with.
             */
            function race(promises) {
                /*jshint validthis:true */
                var Promise = this;

                if (!isArray(promises)) {
                    throw new TypeError('You must pass an array to race.');
                }
                return new Promise(function(resolve, reject) {
                    var results = [], promise;

                    for (var i = 0; i < promises.length; i++) {
                        promise = promises[i];

                        if (promise && typeof promise.then === 'function') {
                            promise.then(resolve, reject);
                        } else {
                            resolve(promise);
                        }
                    }
                });
            }

            __exports__.race = race;
        });
    define("promise/reject",
        ["exports"],
        function(__exports__) {
            "use strict";
            /**
             `RSVP.reject` returns a promise that will become rejected with the passed
             `reason`. `RSVP.reject` is essentially shorthand for the following:

             ```javascript
             var promise = new RSVP.Promise(function(resolve, reject){
        reject(new Error('WHOOPS'));
      });

             promise.then(function(value){
        // Code here doesn't run because the promise is rejected!
      }, function(reason){
        // reason.message === 'WHOOPS'
      });
             ```

             Instead of writing the above, your code now simply becomes the following:

             ```javascript
             var promise = RSVP.reject(new Error('WHOOPS'));

             promise.then(function(value){
        // Code here doesn't run because the promise is rejected!
      }, function(reason){
        // reason.message === 'WHOOPS'
      });
             ```

             @method reject
             @for RSVP
             @param {Any} reason value that the returned promise will be rejected with.
             @param {String} label optional string for identifying the returned promise.
             Useful for tooling.
             @return {Promise} a promise that will become rejected with the given
             `reason`.
             */
            function reject(reason) {
                /*jshint validthis:true */
                var Promise = this;

                return new Promise(function (resolve, reject) {
                    reject(reason);
                });
            }

            __exports__.reject = reject;
        });
    define("promise/resolve",
        ["exports"],
        function(__exports__) {
            "use strict";
            function resolve(value) {
                /*jshint validthis:true */
                if (value && typeof value === 'object' && value.constructor === this) {
                    return value;
                }

                var Promise = this;

                return new Promise(function(resolve) {
                    resolve(value);
                });
            }

            __exports__.resolve = resolve;
        });
    define("promise/utils",
        ["exports"],
        function(__exports__) {
            "use strict";
            function objectOrFunction(x) {
                return isFunction(x) || (typeof x === "object" && x !== null);
            }

            function isFunction(x) {
                return typeof x === "function";
            }

            function isArray(x) {
                return Object.prototype.toString.call(x) === "[object Array]";
            }

            // Date.now is not available in browsers < IE9
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now#Compatibility
            var now = Date.now || function() { return new Date().getTime(); };


            __exports__.objectOrFunction = objectOrFunction;
            __exports__.isFunction = isFunction;
            __exports__.isArray = isArray;
            __exports__.now = now;
        });
    requireModule('promise/polyfill').polyfill();
}());
/**
 * Global SDK config settings
 *
 * @property conf
 * @type {Object}
 * @default {"cache_window": 21600000,"default_size": 190,"client_id":null,"di_basepath":null}
 */
amp.conf = {
    "cache_window": 21600000,
    "default_size": 190,
    "client_id":null,
    "di_basepath":'http://i1.adis.ws/',
    "content_basepath": "http://c1.adis.ws/",
    "err_img":null
};

(function(){
    /**
     * Overwrites the conf defaults and sets up analytics binding
     * @method init
     * @param {Object} conf The config object
     */
    amp.init = function(conf) {
        for (var i in conf) {
            if (amp.conf.hasOwnProperty(i)){
                amp.conf[i] = conf[i];
            }
        }

    };
}());
/**
 * indexOf function
 * @method indexOf
 * @param {Integer}
 */
var indexOf = amp.indexOf = function(arr, elt /*, from*/)
{
    "use strict";
    if (arr == null) {
        throw new TypeError();
    }
    var t = Object(arr);
    var len = t.length >>> 0;
    if (len === 0) {
        return -1;
    }
    var n = 0;
    if (arguments.length > 1) {
        n = Number(arguments[2]);
        if (n != n) { // shortcut for verifying if it's NaN
            n = 0;
        } else if (n != 0 && n != Infinity && n != -Infinity) {
            n = (n > 0 || -1) * Math.floor(Math.abs(n));
        }
    }
    if (n >= len) {
        return -1;
    }
    var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
    for (; k < len; k++) {
        if (k in t && t[k] === elt) {
            return k;
        }
    }
    return -1;
}
/**
 * Returns an array of object keys
 * @method keys
 * @param {Object} obj
 */
var keys = (function () {
    var hasOwnProperty = Object.prototype.hasOwnProperty,
        hasDontEnumBug = !({toString: null}).propertyIsEnumerable('toString'),
        dontEnums = [
            'toString',
            'toLocaleString',
            'valueOf',
            'hasOwnProperty',
            'isPrototypeOf',
            'propertyIsEnumerable',
            'constructor'
        ],
        dontEnumsLength = dontEnums.length;

    return function (obj) {
        if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
            throw new TypeError('Object.keys called on non-object');
        }

        var result = [], prop, i;

        for (prop in obj) {
            if (hasOwnProperty.call(obj, prop)) {
                result.push(prop);
            }
        }

        if (hasDontEnumBug) {
            for (i = 0; i < dontEnumsLength; i++) {
                if (hasOwnProperty.call(obj, dontEnums[i])) {
                    result.push(dontEnums[i]);
                }
            }
        }
        return result;
    };
}());

function buildQueryString(obj) {
    var str = [];
    for(var p in obj){
        if (obj.hasOwnProperty(p)) {
            str.push(p+ "=" + obj[p]);
        }
    }
    return str.join("&");
}


function querystringToArray(str, specialCase) {
    var options = str.split('&'),
        optionsArray = [];
    for (var i=0; i<options.length;i++){
        var parts = options[i].split('='), optionsObj = {};
        if(specialCase){
            specialCase(parts, optionsObj);
        }else{
            optionsObj[parts[0]] = parts[1];
        }
        optionsArray.push(optionsObj);
    }
    return optionsArray;
}

function isArray(o){
    return Object.prototype.toString.call( o ) === '[object Array]';
}

(function(){
/**
 * Creates a url to an asset
 * @method getAssetURL
 * @param {Object} asset to build the url for format {'name':'asset','type':'i'}
 */
amp.getAssetURL = function (asset) {
    return amp.conf.di_basepath + asset.type + '/' + amp.conf.client_id + '/' + asset.name;
};

var videoAssetsNeeded = function(o) {
    var arr = [];
    if(o.items || (o.set && o.set.items)) {
        var items = o.items || o.set.items;
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if(item.type == "video"){
                arr.push({name:item.name,type:'v'});
            } else {
                if(item.items || (item.set && item.set.items)){
                    arr = arr.concat(videoAssetsNeeded(item));
                }
            }
        }
    }
    return arr;
};

var getVidsNotLoaded = function(toload,loaded) {
    var notLoaded = [];
    for (var i =0; i<toload.length;i++) {
        var item = toload[i];
        var found = false;
        for (var m=0;m<loaded.length;m++){
            var l = loaded[m];
            if(l.name === item.name && l.type === item.type) {
                found = true;
                break;
            }
        }
        if(!found) {
            notLoaded.push(item);
        }
    }
    return notLoaded;
};
var copyObj = function(a,b,exclude) {
    for (var i in b) {
        if(b.hasOwnProperty(i)){
            if(indexOf(exclude, i)!=-1)
                continue;
            a[i] = b[i];
        }
    }
    return a;
};

var setMediaCodec = function(data) {
    for(var i in data) {
        if(data.hasOwnProperty(i)){
            var v = data[i];
            for(var m =0; m<v.media.length; m++) {
                v.media[m].htmlCodec = amp.videoToFormat(v.media[m]);
            }
        }

    }
    return data;
};

var orderVideoSources = function(data,order) {
    for(var i in data) {
        if(data.hasOwnProperty(i)){
            var v = data[i];
            v.media = amp.sortVideoSource(v.media,order);
        }

    }
    return data;
};

var combineData = function(vData,data) {
    for(var i in vData) {
        if(vData.hasOwnProperty(i)){
            var v = vData[i];
            var recurse = function(o,v){
                if(o.items || (o.set && o.set.items)){
                    var items = o.items || o.set.items;
                    for (var i = 0; i < items.length; i++) {
                        var item = items[i];
                        if(item.type == "video" && item.name == v.name){
                            item = copyObj(item, v, ['url']);
                        } else {
                            if(item.items || (item.set && item.set.items)){
                                item = recurse(item,v);
                            }
                        }
                    }
                }
                return o;
            }
        }
        data = recurse(data,v);
    }
    return data;
};
var removeData = function(vData,data) {
    for(var i in vData) {
        if(vData.hasOwnProperty(i)){
            var v = vData[i];
            var recurse = function(o,v){
                if(o.items || (o.set && o.set.items)){
                    var items = o.items || o.set.items;
                    for (var i = 0; i < items.length; i++) {
                        var item = items[i];
                        if(item.type == "video"){
                            items.splice(i, 1);
                        } else {
                            if(item.items || (item.set && item.set.items)){
                                item = recurse(item,v);
                            }
                        }
                    }
                }
                return o;
            }
        }
        data = recurse(data,v);
    }
    return data;
};
function objLength(obj) {
    var count = 0;
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            ++count;
    }
    return count;
}
/**
 * Retrieves DI Data through JSONP
 * @method get
 * @param {Object} assets to load in the format {'name':'asset','type':'i'}
 * @param {Function} success Callback function called on successful load
 * @param {Function} error Callback function called on unsuccessful load
 * @param {Int} integer to change timeout time
 */
amp.get = function (assets, success, error, videoSort, timeout, transformData) {
    var assCount = 0, failed = true, dataWin = {}, dataFail = {}, assLength = 0, timeout = timeout || 60000;

    var win = function(url){
        return function (name,data) {
            var vidAssets = videoAssetsNeeded(data);
            var notLoaded = getVidsNotLoaded(vidAssets,assets);
            var allLoaded = function() {
                assCount++;
                dataWin[name] = data;
                dataWin[name].url = url;
                dataWin[name].name = !dataWin[name].name ? name : dataWin[name].name;
                if(assCount == assLength) {
                    done();
                }
            };
            if(notLoaded.length){
                amp.get(notLoaded,function(vData) {
                    vData = setMediaCodec(vData);
                    if(videoSort) {
                        vData = orderVideoSources(vData,videoSort);
                    }
                    data = combineData(vData,data);
                    allLoaded();
                },function(vData) {
                    data = removeData(vData,data);
                    allLoaded();
                },
                    false,
                    timeout,
                    transformData || false);
            } else {
                if(data.media){
                    data = setMediaCodec({'d':data})['d'];
                    if(videoSort) {
                        data = orderVideoSources({'d':data},videoSort)['d'];
                    }
                }

                allLoaded();
            }
        }
    };
    var fail = function(url){
        return function (name,data) {
            assCount++;
            dataFail[name] = data;
            dataFail[name].url = url;
            failed = true;
            if(assCount == assLength) {
                done();
            }
        }
    };
    var done = function(){
        if(objLength(dataWin)>0 && success) {
            if(transformData && typeof transformData === 'function'){
                dataWin = transformData(dataWin);
            }
            success(dataWin);
        }
        if(objLength(dataFail)>0 && error) {
            if(transformData && typeof transformData === 'function'){
                dataFail = transformData(dataFail);
            }
            error(dataFail);
        }
    };

    var isValid = function(asset){
        if (!asset || !asset.type || !asset.name) {
            return false;
        } else {
            return true;
        }
    }

    if(!isArray(assets)){
        assLength = 1;
        if(!isValid(assets))
            return;
        var url = amp.getAssetURL(assets);
        jsonp(amp.getAssetURL(assets)+ '.js', assets.name, win(url), fail(url),assets.transform, timeout);
    }else{
        assLength = assets.length;
        for (var i = 0; i < assLength; i++) {
            if(!isValid(assets[i]))
                continue;
            var url = amp.getAssetURL(assets[i]);
            jsonp(url + '.js', assets[i].name, win(url), fail(url),assets[i].transform, timeout);
        }
    }
};

var movingCacheWindow = function () {
    var timestamp = new Date();
    timestamp -= timestamp % amp.conf.cache_window;
    return timestamp;
};

var clean = function(name){
    var script = cbScripts[name];
    if(script){
        script.dispose();
    }
    delete cbArray[name];
    delete cbTimeout[name];
    delete cbScripts[name];
};

var cbArray = [], cbScripts = [], cbTimeout = [];

/**
 * Cache for all successful JSONP calls
 *
 * @property jsonCache
 * @type {Object}
 * @default {}
 */
amp.jsonCache = {};

/**
 * Callback method for JSONP
 * @method jsonReturn
 * @param {String} name The name of the asset
 * @param {Object} data The returned JSON data
 */
amp.jsonReturn = function(name, data) {
    // do we have callbacks waiting for that name?
    if(!cbArray[name])
        return;
    // clear the timeout because we have answers!
    clearTimeout(cbTimeout[name]);
    // go through callbacks
    for (var i = 0; i < cbArray[name].length; i++) {
        var obj = cbArray[name][i];
        // success or error callback
        if(data.status == "error") {
            if(obj.fail) {
                obj.fail(name,data);
            }
        } else {
            // add it to the cache
            amp.jsonCache[name] = data;
            if(obj.win) {
                obj.win(name,data);
            }
        }
    }
    clean(name);
};

amp.get.createScript = function(src, onerror) {
    // lets create a home for our json
    var script = document.createElement('script');
    script.src = src;
    script.onerror= onerror;
    script.dispose = function(){
        document.body.removeChild(script);
    };

    // set the thing off:
    document.body.appendChild(script);
    return script;
};

/**
 * Clears the cache of JSONP responses
 */
amp.clearJsonCache = function(){
    amp.jsonCache = {};
}

var jsonp =  amp.jsonp = function(url, name, success, error, transform, timeout){
    var timeout = timeout || 60000;
    if(!transform){
        transform = '';
    } else {
        transform = transform+'&'
    }
    // do we already have the data?
    if(amp.jsonCache[name]) {
        success(name, amp.jsonCache[name]);
        return;
    }
    // is the json in progress?
    if(cbArray[name]) {
        // if so add it to the pile and get out of here
        cbArray[name].push({'win':success,'fail':error});
        return;
    } else {
        // otherwise create the object
        cbArray[name] = [{'win':success,'fail':error}];
    }

    // waiting for fail
    cbTimeout[name] = setTimeout(function() {
        amp.jsonReturn(name,{ status:'error',code: 404, message: "Not Found", name: name });
    }, timeout);

    var src = url + "?" + transform + buildQueryString({deep:true, timestamp: movingCacheWindow(), arg: "'"+name+"'", func:"amp.jsonReturn"});
    var script = amp.get.createScript(src, function(e) {
        amp.jsonReturn(name,{ status:'error',code: 404, message: "Not Found", name: name });
    });

    // remember it for cleaning
    cbScripts[name] = script;
};

}());
(function () {

    var payloadSize = 10;

    amp.content = function (assets, win, fail, timeout) {
        var timeout = timeout || 60000;

        if (!isArray(assets)) {
            assets = [assets];
        }

        payloader(assets, timeout, function(wins,fails){
            if(wins.length>0) {
                win(formatPayloadResponse(wins));
            }
            if(fails.length>0) {
                fail(fails);
            }
        });
    };

    var formatPayloadResponse = function(response) {
        var data = [];
        for(var i=0;i<response.length;i++) {
            var payloads = response[i].result.payload;
            for (var p = 0; p < payloads.length; p++) {
                var payload = payloads[p];
                payload.name = payload.key.split('/');
                payload.name = payload.name[payload.name.length-1];
                data.push(payload);
            }
        }
        return data;
    };

    var buildContentUrl = function (name) {
        return amp.conf.content_basepath + 'c/' + amp.conf.client_id + '/' + name+'.js';
    };

    var buildPayloadUrl = function (assets) {
        return amp.conf.content_basepath + 'p/' + amp.conf.client_id + '/[' + generateContentArray(assets) + '].js';
    };

    var payloader = function(assets, timeout, finished) {
        var wins = [];
        var fails = [];
        var it = Math.ceil(assets.length/payloadSize);

        var onWin = function(name,result) {
            wins.push({name:name,result:result});
            doneYet();
        };

        var onFail = function (name,result) {
            fails.push({name:name,result:result});
            doneYet();
        };

        var doneYet = function() {
            if(wins.length + fails.length === it) {
                if(finished) {
                    finished(wins,fails);
                }
            }
        };

        for(var i=0;i<it;i++) {
            var array = assets.slice(i*payloadSize,(i*payloadSize)+payloadSize);
            amp.jsonp(buildPayloadUrl(assets),array.join(','),onWin,onFail, timeout);
        }
    };

    var generateContentArray = function(assets) {
        var s = '';
        var a = [];
        for(var i=0; i<assets.length;i++) {
            a.push('"/c//' + assets[i] +'"');
        }
        return a.join(',');
    }

}());
(function(){
/**
 * Generated HTML based on asset JSON
 * @method genHTML
 * @param {Object} asset The Asset Data
 * @param {Object} attach The DOM node to attach the result to
 */
amp.genHTML = function (asset, attach, lazy, videoSourceSort) {
    if(!asset) return;
    var doms = {};
    var transform = function(asset) {
        var assHTML = genAssetHTML(asset, lazy, videoSourceSort);
        doms[asset.name]=(assHTML);
        if (attach && attach.appendChild) {
            attach.appendChild(assHTML);
        }
    };
    if(isArray(asset)) {
        for (var i = 0; i < asset.length; i++) {
            transform(asset[i]);
        }
    } else if(typeof asset == "object") {
        transform(asset);
    } else {
        return;
    }

    return doms;
};

var hasSize = function(o) {
    if(!o || (!o.src && !o.url))
        return false;
    var src = o.isImage? o.url :  o.src;
    var op =  amp.di.get(src);
    for (var i = 0; i < op.length; i++) {
        var obj = op[i];
        if ((obj.width && obj.width!='undefined')||(obj.height && obj.height!='undefined')) {
           return true;
        }
    }
    return false;

}

amp.videoToFormat = function(video){
    if(!video) return;

    var format = video.format;
    var videoCodec = "";
    var audioCodec = "";

    switch(format && format.toLowerCase()){
        case "flash video":
            format = "flv";
            break;
        case "mpeg4":
            format = "mp4";
            break;
    }

    switch(video["video.codec"] && video["video.codec"].toLowerCase()){
        case "h264":
            /** Baseline, it could be higher but we dont have that info **/
            //videoCodec = "avc1.42E01E";
            break;
        case "theora":
            videoCodec = "theora";
            break;
        case "vp8":
            videoCodec = "vp8";
            break;
    }

    switch(video["audio.codec"] && video["audio.codec"].toLowerCase()){
        case "aac":
            if(format == "mp4"){
                audioCodec = "mp4a.40.2";
            }
            break;
        case "vorbis":
            audioCodec = "vorbis";
            break;
    }

    var typeString = format ? "video/" + format : typeString;
    if(videoCodec != ""){
        typeString += '; codecs="';
        typeString += videoCodec;
        if(audioCodec != ""){
            typeString += ", " + audioCodec;
        }
        typeString += '"'
    }

     return typeString;
};

amp.genVideoHTML = function(asset,  videoSourceSort){
    if(!asset.src) {
        asset.src=asset.url;
    }
    var dom = document.createElement('div');
    dom.setAttribute('id', asset.name);
    var video = document.createElement('video');
    if(!hasSize(asset)) {
        video.setAttribute('poster', amp.di.width( asset.src, amp.conf.default_size));
    } else {
        video.setAttribute('poster', asset.src);
    }

    try{
        video.setAttribute('preload', 'auto');
    } catch(e) {
    }
    video.setAttribute('controls', '');
    var media = asset.media, sorted;

    if(videoSourceSort){
        sorted = amp.sortVideoSource(media, videoSourceSort);
    }else{
        sorted = media;
    }
    if(sorted) {
        for (var m=0;m<sorted.length;m++) {
            var media = sorted[m];
            var src = document.createElement('source');
            src.setAttribute('src',media.src);
            src.setAttribute('res',media.bitrate);
            src.setAttribute('label',media.profileLabel);
            src.setAttribute('type', amp.videoToFormat(media));
            video.appendChild(src);
        }
    }
    dom.appendChild(video);
    return dom;
}

amp.sortVideoSource = function(media, by){

    if(isArray(by)){
        if(by.length > 0){
            var mediaLen = media.length, result = [];
            for(var c=0; c<by.length;c++){
                for(var i=0; i<mediaLen; i++) {
                    if(by[c] == media[i].profile || by[c] == media[i].profileLabel) {
                        result.push(media[i]);
                    }
                }
            }

            for(var i=0; i<mediaLen; i++) {
                if((indexOf(by, media[i].profile) == -1 )&& (indexOf(by, media[i].profileLabel) == -1)){
                    result.push(media[i]);
                }
            }
            return result;
        }
    } else if(!isNaN(by)){
        return media.sort(function(a,b){
            var indexA = Math.abs(by - parseInt(a.bitrate));
            var indexB = Math.abs(by - parseInt(b.bitrate));

            return indexA - indexB;
        });
    }

    return media;
};

var getIdFromUrl = function(url) {
    var arr = url.split('/');
    var last = arr[arr.length-1];
    return last.split('?')[0];
};

var genAssetHTML = function (asset,lazy, videoSourceSort) {
    var dom;
     if (asset.isImage || asset.type == "img") {

        var dom = document.createElement('img');
        var attr = asset.isImage ? asset.url :  asset.src;

        if(!hasSize(asset)) {
            attr = attr + '?' + webCacheSize(asset);
        }
        if(lazy) {
            dom.setAttribute('data-amp-src', attr);
        } else {
            dom.setAttribute('src', attr);
        }
        dom.setAttribute('class','amp-main-img');
        if(!asset.name) {
            dom.setAttribute('id', getIdFromUrl(attr));
        } else {
            dom.setAttribute('id', asset.name);
        }

    } else if (asset.type == "video" || asset.media ) {
        dom = amp.genVideoHTML(asset, videoSourceSort);
    } else if (asset.items || asset.set.items) {
        var items = asset.items || asset.set.items;
        var dom = document.createElement('ul');
        dom.setAttribute('id', asset.name);
        for (var i = 0; i < items.length; i++) {
            var li = document.createElement('li');
            dom.appendChild(li);
            var child = items[i];
            child.url = asset.url;
            li.appendChild(genAssetHTML(child, lazy));
        }
    }
    return dom;
};

var webCacheSize = function (data) {
    if (data.width > data.height) {
        return 'w='+amp.conf.default_size;
    } else {
        return 'h='+amp.conf.default_size;
    }
};




}());
(function () {
    /**
     * DI Methods
     *
     * @class amp.di
     */

    var diOptions = [
        {shortName: 'cs', fullName: 'grayscale', val: 'gray'},
        {shortName: 'dpi', fullName: 'dpi',type:'number'},
        {shortName: 'dpiFilter', fullName: 'dpiFilter',type:'string'},
        {shortName: 'resize', fullName: 'resize', type:'boolean'},
        {shortName: 'filter', fullName: 'filter', type:'string'},
        {shortName: 'upscale', fullName: 'upscale',  type:'boolean'},
        {shortName: 'bg', fullName: 'background', type:'string'},
        {shortName: 'qlt', fullName: 'quality', type:'number'},
        {shortName: 'cm', fullName: 'compositeMode',type:'string'},
        {shortName: 'cs', fullName: 'colourSpace', type:'string'},
        {shortName: 'maxW', fullName: 'maxWidth', type:'number'},
        {shortName: 'maxH', fullName: 'maxHeight', type:'number'},
        {shortName: 'template', fullName: 'template',type:'array'},
        {shortName: 'w', fullName: 'width', type:'number'},
        {shortName: 'h', fullName: 'height', type:'number'},
        {shortName: 'fmt', fullName: 'format', type:'string'},
        {shortName: 'unsharp', fullName: 'sharpen', type:'string'},
        {shortName: 'crop', fullName: 'crop', type:'string'},
        {shortName: 'pcrop', fullName: 'preCrop',type:'string'},
        {shortName: 'img404', fullName: 'missingImage', type:'string'},
        {shortName: 'sm', fullName: 'scaleMode', type:'string'},
        {shortName: 'strip', fullName: 'strip',  type:'boolean'},
        {shortName: 'orig', fullName: 'original',  type:'boolean'}
        ],
    /**
     * Switches options from longName to shortName and vice versa
     * @method returnAs
     * @param {Array} options The options array
     * @param {String} from shortName|fullName
     * @param {String} to shortName|fullName
     * @private
     */
    returnAs = function(options, from, to){
        for (var i = 0; i < options.length; i++) {
            var key = typeof options[i] == "object" && keys(options[i]); 
            for(var o in options[i]){
                if(options[i].hasOwnProperty(o)){
                    for (var c = 0; c < diOptions.length; c++) {
                        if (diOptions[c][from] == o) {
                            if (diOptions[c].val) options[i][diOptions[c][from]] = diOptions[c].val;
                            //rename object key from to
                            if(diOptions[c][to] != diOptions[c][from]) {
                                options[i][diOptions[c][to]] = options[i][o];
                                delete options[i][o];
                            }
                        }
                    }
                }
            }
        }
        return options;
    },
    removeDuplicates = function(arr){
        var obj = {}, i = arr.length;
        while(i--){
            var key = typeof arr[i] == "object" && keys(arr[i]);
            if(obj[key] && (key!="template")) arr.splice(i,1);
            obj[key] = true;
        }

        return arr;
    },
    buildUrl = function(str, setOptions, caller) {
        var url = str.split('?');
        var optionsArray = url[1] ? querystringToArray(url[1],function(parts, optionsObj){
            !parts[1] ? optionsObj["template"] = parts[0] : optionsObj[parts[0]] = parts[1];
        }) : [];

        if(!optionsArray)
            return false;

        if (!setOptions && !caller)
            return removeDuplicates(optionsArray);

        optionsArray = removeDuplicates(optionsArray);
        if (!setOptions && caller) {
            var specificVal = [];
            for (var i = 0; i < optionsArray.length; i++) {
                if(optionsArray[i][caller]){
                    //only need an array for templates otherwise values should be unique
                     if(caller == "template"){
                        specificVal.push(optionsArray[i][caller])
                    }else{
                        return optionsArray[i][caller];
                     }
                }
            }
            return specificVal.length > 0 ? specificVal : false;
        }

        optionsArray = removeDuplicates(optionsArray.concat(setOptions));
        var params = [];
        for (var i = 0; i < optionsArray.length; i++) {
            var key = keys(optionsArray[i]);
            if (key == "template") {
                var names = optionsArray[i][key];
                if( Object.prototype.toString.call( names ) === '[object Array]' ) {
                    for (var l=0;l<names.length;l++) {
                        params.push(names[l]);
                    }
                } else {
                    params.push(names);
                }
            } else {
                params.push(buildQueryString(optionsArray[i]));
            }


        }

        return url[0] + '?' + params.join("&");
    },
    traverse = function(o, options, filter, caller) {
        for (var i in o) {
            if(o.hasOwnProperty(i)){
                if (o[i] != null && typeof o[i] == "object") {
                    if (o[i].type == "img" || o[i].type == "set" || o[i].type == "video"){
                        if (filter && filter.exclude) {
                            var exclude = false;
                            for (var c = 0; c < filter.exclude.length; c++) {
                                 if (o[i].name == filter.exclude[c]) {
                                   exclude = true;
                                }
                            }
                            if(exclude)
                                continue;
                        }
                       // o[i].src = buildUrl(o[i].src, options, caller);
                    }
                    traverse(o[i], options, filter, caller);
                }else{
                    if((i == "src" && ( o.type == "img" ||  o.type == "set" || o.type == "video"))|| (i == "url" && o.isImage)){
                         o[i] = buildUrl(o[i], options, caller);
                    }
                }
            }
        }
        return o;
    };

    /**
     * Returns an object of the DI options set on a URL
     * @method get
     * @param {String} src A URL string
     */
    amp.di.get = function (src) {
        if(!src) return false;
        return returnAs(buildUrl(src), "shortName", "fullName");
    }

    /**
     * Returns a string or data object with the DI options chosen

     * @method set
     * @param {Object|String} src The source data or url to be set with the given options
     * @param {Array of Objects} options The DI options to be set on string
     * @param {Object} filter Exclude objects by name
     * @return The value passed to the src parameter with the options set
     */
    amp.di.set = function (src, options, filter, caller) {
        if(options){
             !isArray(options) ?
                options = returnAs([options], "fullName", "shortName"):
                options = returnAs(options, "fullName", "shortName")
        }

        return typeof src != "string" ?
            traverse(src, options, filter, caller) :
            buildUrl(src, options, caller);
    };

    /**
     * Method to set the image's colour space to grayscale
     * @method grayscale
     * @param {Object|String} src  Data containing src values or a src string
     * @returns The modified value passed to the src param
     */

    /**
     * Method to set the image resolution.  If not set the image will retain its
     * original resolution
     * @method resolution
     * @param {Object|String} src Data containing src values or a src string
     * @param {Integer} option  The number of dots per inch required.
     * @returns The modified value passed to the src param
     */

    /**
     * Method to set the resampling algorithm to use when changing the image's resolution
     * @method resolutionFilter
     * @param {Object|String} src  Data containing src values or a src string
     * @param {String} option Accepts string values:
     * q(Quadratic),
     * s(Sinc),
     * l(Lanczos) default,
     * p(Point),
     * c(Cubic)
     * @returns The modified value passed to the src param
     */

    /**
     * Method to set the image's background colour. This will only have effect when the image is padded or the original image is transparent
     * @method background
     * @param {Object|String} src  Data containing src values or a src string
     * @param {String} option  The colour required as RGB values
     * @returns The modified value passed to the src param
     */

    /**
     * Method to set the compression quality of the image
     * @method quality
     * @param {Object|String} src  Data containing src values or a src string
     * @param {Integer} option  An integer value between 1-100
     * @returns The modified value passed to the src param
     */

    /**
     * Method to cut out a section of the image
     * @method crop
     * @param {Object|String} src  Data containing src values or a src string
     * @param {String} option  A string with the values for x,y,w,h respectively.
     * @returns The modified value passed to the src param
     */

    /**
     * Method to cut out a section of the image.  Crops relative to the original image size
     * @method preCrop
     * @param {Object|String} src  Data containing src values or a src string
     * @param {String} option  A string with the values for x,y,w,h respectively.
     * @returns The modified value passed to the src param
     */

    /**
     * Method to set the image format
     * @method format
     * @param {Object|String} src  Data containing src values or a src string
     * @param {String} option  Accepts the following string values:
     * GIF,
     * JPEG,
     * JPG,
     * PNG,
     * TIFF
     * @returns The modified value passed to the src param
     */

    /**
     * Method to set the resizing algorithim to use
     * @method filter
     * @param {Object|String} src  Data containing src values or a src string
     * @param {String} option Accepts string values:
     * q(Quadratic),
     * s(Sinc),
     * l(Lanczos) default,
     * p(Point),
     * c(Cubic),
     * h(Hermite)
     * @returns The modified value passed to the src param
     */

   /**
     * Method to allow the image to be scaled to a bigger size than the original output.
     * @method upscale
     * @param {Object|String} src  Data containing src values or a src string
     * @param {String} option  Accpets the following string values:
     * true,
    *  false,
    *  padd
     * @returns The modified value passed to the src param
     */

    /**
     * Method to set the source colour space to grayscale
     * @method colourSpace
     * @param {Object|String} src  Data containing src values or a src string
     * @param {String} option Accepts the following string values
     * rgb,
     * rgba,
     * srgb,
     * gray,
     * cmyk,
     * ohta,
     * lab,
     * xyz,
     * hsb,
     * hsl
     * @returns The modified value passed to the src param
     */

    /**
     * Method to resize the image
     * @method resize
     * @param {Object|String} src  Data containing src values or a src string
     * @param {Object} option  An object accepting the following values
     * width,
     * height,
     * scale mode - S(Stretch), TL (Top Left),TC (Top Center),TR (Top Right),ML (Middle Left),
     * MC (Middle Center - Default), MR (Middle Right), BL (Bottom Left), BC (Bottom Center),BR (Bottom Right),
     * e.g., {'w':'asset','h':'i', sm:'S'}
     * @returns The modified value passed to the src param
     */

    /**
     * Method to sharpen the image with an unsharp mask
     * @method sharpen
     * @param {Object|String} src  Data containing src values or a src string
     * @param {String} option  A string value specifying the following:
     * radius (0-5),
     * sigma (0.01-5),
     * amount (1-300),
     * threshold (1-255),
     * e.g., '4,3,120,220'
     * @returns The modified value passed to the src param
     */

    /**
     * Method to set the width of the image
     * @method width
     * @param {Object|String} src  Data containing src values or a src string
     * @param {Integer} option The width in pixels.
     * @returns The modified value passed to the src param
     */

    /**
     * Method to set the height of the image
     * @method height
     * @param {Object|String} src  Data containing src values or a src string
     * @param {Integer} option The height in pixels.
     * @returns The modified value passed to the src param
     */

    /**
     * Method to set the maximum height allowed for the image.  May be overridden at account level
     * @method maxHeight
     * @param {Object|String} src  Data containing src values or a src string
     * @param {Integer} option The maximum height in pixels.
     * @returns The modified value passed to the src param
     */

    /**
     * Method to set the maximum width allowed for the image.  May be overridden at account level
     * @method maxWidth
     * @param {Object|String} src  Data containing src values or a src string
     * @param {Integer} option The maximum width in pixels.
     * @returns The modified value passed to the src param
     */

    /**
     * Method to set the composite operator when the image is applied on top of a background colour
     * @method compositeMode
     * @param {Object|String} src  Data containing src values or a src string
     * @param {String} option Accepts the following string values:
     * over(default),
     * colo,
     * dark,
     * diff,
     * light,
     * multi,
     * cout,
     * cover
     * @returns The modified value passed to the src param
     */

    /**
     * Method to set an existing transformation template on the image.
     * @method template
     * @param {Object|String} src  Data containing src values or a src string
     * @param {String} option The template name wrapped with the $ symbol. e.g., $mobileTemplate$
     * @returns The modified value passed to the src param
     */

    (function buildDIOptions() {
        for (var i = 0; i < diOptions.length; i++) {
            (function (options) {
                amp.di[options.fullName] = function (src, option) {
                    if(!src) return;
                    var sn = options.fullName != "grayscale" ? options.shortName : null;
                    //checks if has auto filled option
                    var opt = typeof(options.val)!="undefined" ? options.val : option;
                    if(typeof(opt)!="undefined"){
                        var newObj = {};
                        newObj[options.shortName] = opt;
                        return amp.di.set(src, newObj, null, sn);
                    }
                    var val = amp.di.set(src, null, null, sn);
                    switch (options.type) {
                        case 'number':
                            return Number(val);
                        case 'boolean':
                            if(val=='true') {
                                return true;
                            } else if (val=='false') {
                                return false;
                            }
                        case 'string':
                        default:
                            return val
                    }
                }
            })(diOptions[i]);
        }
    })();
}());
(function(){

/**
 * Event binding for Analytics
 *
 * @class amp.stats
 */

var aEvents = [];
aEvents.all = [];

/**
 * Binds a callback to a set of events which can be filtered
 * (e.g. {type:slider,cb:function} will bind cb to all slider events
 * @method bind
 * @param {Object} o The config object
 */
amp.stats.bind = function(o) {
    if(typeof o == "function"){
        aEvents.all.push(o);
        return;
    };
    if(isArray(o)) {
        for (var i=0; i<o.length;i++) {
            amp.stats.bind(o[i]);
        }
        return;
    };
    if(typeof o != "object")
        return;

    if(!o.cb)
        return;

    if(o.type && o.event){
        aPush(o.type+'.'+ o.event, o.cb);
    } else if (o.type) {
        aPush(o.type, o.cb);
    } else if (o.event) {
        aPush(o.event,o.cb);
    }
};
var aPush = function (obj,fn){
    aEvents[obj] ? aEvents[obj].push(fn) :  aEvents[obj] = [fn];
};
 
/**
 * Triggers an event and its callbacks
 * @method event
 * @param {Object} dom The DOM source of the event
 * @param {String} type The type of source for the event e.g. Slider
 * @param {String} name The nature of the event e.g. Click
 * @param {Object} value The value of the event e.g. {'was':2,'now':3}
 */
amp.stats.event = function(dom,type,event,value){
    var cbs = [];
    cbs = cbs.concat(aEvents.all,aEvents[type]?aEvents[type]:[],aEvents[event]?aEvents[event]:[],aEvents[type+'.'+event]?aEvents[type+'.'+event]:[]);
    for (var i=0; i<cbs.length;i++) {
        cbs[i](dom,type,event,value);
    }
};

}());

}());
// amplience-sdk-client v0.1.0
(function ( $ ) {
    $.widget( "amp.ampStack", {
        // Default options.
        options: {
            delay: 3000,
            autoplay:false,
            loop:true,
            fade:false,
            start:1,
            responsive:true,
            center:false,
            parentSize:false,
            gesture:{
                enabled:false,
                fingers:1,
                dir:'horz',
                distance:50
            },
            states:{
                "selected":"amp-selected",
                "seen":"amp-seen"
            }
        },
        _getCreateOptions:function(){
            var attributes = this.element.data().ampStack;
            if (attributes) {
                return $.extend(true, {}, this.options, attributes);
            }
            return this.options;
        },
        _create: function() {
            var _asyncMethods = [],
                self = this,
                children = this._children = this.element.children();
            this.canTouch =  !!(('ontouchstart' in window) || window.DocumentTouch && document instanceof window.DocumentTouch);
            this.element.addClass('amp');
            this.element.addClass('amp-stack');
            this.count = this._children.length;
            this._index = Math.max(1,Math.min(this.options.start,this.count));
            children.addClass('amp-layer');
            children.css({'display':'none'});
            children.eq(this._index-1).css('display','block');
            children.eq(this._index-1).addClass(this.options.states.selected + ' ' +this.options.states.seen);
            this._addGestures();
            if(this.options.autoplay) {
                this.play();
            }
            setTimeout(function(_self) {
                return function() {
                    return _self._calcSize();
                }
            }(self),1);

            $(window).bind("resize", function(_self) {
                return function() {
                    return setTimeout($.proxy(_self._calcSize,_self),1);
                }
            }(self));



            this._track("created",{'index':this._index,'canNext':this.canNext(),'canPrev':this.canPrev()});

        },

        _addGestures : function() {
            if(!this.options.gesture.enabled || !this.canTouch)
                return;
            var start, move, stop, getEvent;

            this._startG = function(e){

                if(e.originalEvent && e.originalEvent.touches && e.originalEvent.touches[0] ) {
                    if (e.originalEvent.touches.length!=this.options.gesture.fingers)
                        return true;
                }

                if (e.originalEvent && e.originalEvent.target && e.originalEvent.target.type === 'range') {
                    return true;
                }

                this.changed = false;
                this.moved = false;
                this.startTouchEvent = e;
                var e = this._getEvent(e);
                this.startPos = this.options.gesture.dir == 'horz' ?  e.pageX - e.target.offsetLeft : e.pageY - e.target.offsetTop;
                $(window).on('touchmove',$.proxy(this._moveG,this));
                $(window).on('touchcancel',$.proxy(this._stopG,this));
                $(window).on('touchend',$.proxy(this._stopG,this));
                return true;
            };

            this._getEvent = function(e) {
                if(e.type == "touchend" || e.type == "touchcancel") {
                    e = this.lastEvent;
                }
                if(e.originalEvent && e.originalEvent.touches && e.originalEvent.touches[0] ) {
                    e = e.originalEvent.touches[0];
                }
                return e;
            };

            this._moveG = function(e){
                if(e.originalEvent && e.originalEvent.touches && e.originalEvent.touches[0] ) {
                    if (e.originalEvent.touches.length!=this.options.gesture.fingers)
                        return true;
                }
                if (e.originalEvent && e.originalEvent.target && e.originalEvent.target.type === 'range') {
                    return true;
                }
                this.moved = true;
                this.lastEvent = e;
                e = this._getEvent(e);
                if(this.options.gesture.dir == 'horz' ? e.pageX - this.startPos: e.pageY - this.startPos !=0){
                    return false;
                }
                return true;
            };

            this._stopG = function(e){
                $(window).off('touchmove',$.proxy(this._moveG,this));
                $(window).off('touchcancel',$.proxy(this._stopG,this));
                $(window).off('touchend',$.proxy(this._stopG,this));
                if(this.moved && !this.changed){
                    this.changed = true;
                    e = this._getEvent(e);
                    var endPos = this.options.gesture.dir == 'horz' ?  e.pageX - e.target.offsetLeft : e.pageY - e.target.offsetTop;
                    var diff = endPos - this.startPos;
                    if(Math.abs(diff)<this.options.gesture.distance)
                        return;
                    if(diff>0) {
                        this.prev();
                    } else {
                        this.next();
                    }
                }
            };

            this._children.on('touchstart', $.proxy(this._startG,this));

        },

        _getIndex : function(_index) {
            var children = this._children;
            if(_index > children.length){
                if(!this.options.loop)
                    return _index;
                while(_index > children.length) {
                    _index = _index-children.length;
                }
            } else if(_index<1) {
                if(!this.options.loop)
                    return _index;
                while(_index<1) {
                    _index += children.length;
                }
            }
            return _index;
        },
        play: function(){
            var self = this;
            clearInterval(this.interval);
            this.interval = setInterval(function() {
                self.next();
            },this.options.delay);
            this._track("play",null);
        },
        pause: function(){
            clearInterval(this.interval);
            this._track("pause",null);
        },
        next: function() {
            this.goTo(this._index+1);
        },
        prev: function() {
            this.goTo(this._index-1);
        },
        redraw: function() {
            this._calcSize();
        },
        _calcSize : function() {
            var w,h;
            if ((this.options.responsive) && (this.options.width && this.options.height && this.options.width!='auto' && this.options.height!='auto')) {
                if(!this.options.parentSize) {
                    w  = Math.round((this.element.width()));
                    h =  Math.round((w*(this.options.height/this.options.width)));
                    this.element.height(h);
                } else {
                    w  = Math.round((this.element.parent().width()));
                    h =  Math.round((w*(this.options.height/this.options.width)));
                    if(h > this.element.parent().height()) {
                        h = this.element.parent().height();
                        w = Math.round((h*(this.options.width/this.options.height)));

                    }
                    this.element.width(w);
                    this.element.height(h);
                }
                if(this.options.center) {
                    this.element.css('margin-left',((this.element.parent().width()/2)-(w/2))+'px');
                    this.element.css('margin-top',((this.element.parent().height()/2)-(h/2))+'px');
                }

            } else {
                if (this.options.width && this.options.width!='auto') {
                    this.element.width(this.options.width);
                } else if (this.options.width=='auto') {
                    var biggest = 0;
                    for(var i=0;i<this.count;i++) {

                        for (var i = 0 ; i < this.count; i++) {
                            var elm = this._children.eq(i),
                                display = elm.css('display');
                            elm.css('display','block');
                            biggest = Math.max(elm.outerWidth(true),biggest);
                            elm.css('display',display);
                        }
                    }
                    this.element.width(biggest);
                }
                if (this.options.height && this.options.height!='auto') {
                    this.element.height(this.options.height);
                } else if (this.options.height=='auto') {
                    var biggest = 0;
                    for(var i=0;i<this.count;i++) {
                        for (var i = 0 ; i < this.count; i++) {
                            var elm = this._children.eq(i),
                                display = elm.css('display');
                            elm.css('display','block');
                            var h = elm.outerHeight(true);
                            biggest = Math.max(elm.outerHeight(true),biggest);
                            elm.css('display',display);
                        }
                    }
                    this.element.height(biggest);
                }
            }
        },
        _onFinish: function() {
            var count = 1,
                self = this;
            while(this._asyncMethods.length!=0) {
                var method = this._asyncMethods.splice(0,1)[0];
                if(method.func && method.args) {
                    setTimeout(function(){
                        if (method && method.func) {
                            method.func.apply(self,method.args);
                        }
                    },count);
                    count++
                }
            }
        },
        visible: function(visible, parent) {
            if (visible != this._visible) {
                this._track('visible',{'visible':visible});
                this._visible = visible;
                this.callChildMethod(this._children.eq(this._index-1),'visible',visible)
                if(visible)
                    this._calcSize();
            }
        },
        callChildMethod: function(element,type,value) {
            var recursive = function(children) {
                for(var m=0;m<children.length;m++) {
                    var found = false,
                        child = $(children[m]),
                        components = child.data();
                    for (var c in components) {
                        if(components.hasOwnProperty(c)){
                            var component = components[c];
                            if(component[type] && typeof component[type] == 'function' && c.substring(0,3)=='amp'){
                                component[type](value);
                                found = true;
                            }
                        }
                    }
                    // go through only one amp-component deep
                    if(!found) {
                        recursive(child.children());
                    }
                }
            };
            recursive(element.children());
        },
        goTo:function(_index,triggered,noAnim) {
            _index = parseInt(_index);

            if(isNaN(_index))
                return;

            if(this._animating) {
                this._asyncMethods.push({func:this.goTo,args:arguments});
                return;
            }

            if(!triggered) {
                this._exeBinds(_index,'goTo');
            }

            if(this._getIndex(_index) == this._index)
                return;

            if(_index > this.count){
                if(!this.options.loop)
                    return;
                while(_index > this.count) {
                    _index = _index-this.count;
                }
                this._track("looped","forwards");
            } else if(_index<1) {
                if(!this.options.loop)
                    return;
                while(_index<1) {
                    _index += this.count;
                }
                this._track("looped","backwards");
            }
            if(!noAnim) {
                this._animate(_index);
            }
        },

        _exeBinds:function(value,on){
            // triggering goTos and Selects on elements set up by ampNav
            if(!this._boundArray)
                return;
            for (var i = 0; i < this._boundArray.length; i++) {
                var obj = this._boundArray[i];
                if(on && on!=obj.on)
                    continue;
                var $target = $(obj.selector);
                var components = $target.data();
                for (var c in components) {
                    if(components.hasOwnProperty(c)){
                        var component = components[c];
                        if(component[obj.action] && c.substring(0,3)=='amp'){
                            component[obj.action](value,true);
                        }
                    }
                }
            }
        },
        _numToIndex:function(num){
            if(num > this.count){
                if(!this.options.loop)
                    return this.count;
                while(num > this.count) {
                    num = num-this.count;
                }
            } else if(num<1) {
                if(!this.options.loop)
                    return 1;
                while(num<1) {
                    num += this.count;
                }
            }
            return num;
        },
         bind:function(options) {
            if(!this._boundArray)
                this._boundArray = [];
            this._boundArray.push(options);
        },
        canPrev : function() {
            return this.options.loop || this._index>1;
        },
        canNext : function() {
            return this.options.loop || this._index<this.count;
        },
        _animate : function(_index){
            var items = this.element,
                currItem  = items.children('li').eq(this._index - 1),
                nextItem = items.children('li').eq(_index - 1);

            currItem.removeClass(this.options.states.selected);
            if(this.options.fade){
                currItem.fadeOut();
            } else {
                currItem.css('display','none');
            }

            nextItem.addClass(this.options.states.selected + ' ' +this.options.states.seen);
            if(this.options.fade){
                nextItem.fadeIn();
            } else {
                nextItem.css('display','block');
            }
            this._setIndex(_index);
        },
        _setIndex:function(index, noVisibilityToggle) {
            if (!noVisibilityToggle) {
                var elmWas = this._children.eq(this._index-1);
                var elm = this._children.eq(index-1);

                this.callChildMethod(elm,'visible',true);
                this.callChildMethod(elmWas,'visible',false);
            }

            this._index = index;
            this._track("change",{'index':index,'canPrev':this.canPrev(),'canNext':this.canNext()});
        },
        _track: function(event,value) {
            this._trigger( event, null, value );
            if(window.amp && amp.stats && amp.stats.event){
                amp.stats.event(this.element,'stack',event,value);
            }
        },
        _destroy: function() {
            this.element.removeClass('amp');
            this.element.removeClass('amp-stack');
            this._removeEmptyAttributeHelper(this.element);
            var children = this._children;
            children.removeClass('amp-layer');
            children.removeClass(this.options.states.selected);
            children.removeClass(this.options.states.seen);
            children.css('display','');
            for (var i=0,len=children.length;i<len;i++ ) {
                this._removeEmptyAttributeHelper($(children[i]));
            }
        },
        _removeEmptyAttributeHelper:function(elm, attsToCleanIfEmpty){
            var attArr = attsToCleanIfEmpty || ['class','style'];
            for (var i= 0,len=attArr.length;i<len;i++ ) {
                if(!(elm.attr(attArr[i]) && elm.prop(attArr[i]))){
                    elm.removeAttr(attArr[i]);
                }
            }
        }
    });


}( jQuery ));
(function ( $ ) {

    $.widget( "amp.ampCarousel",$.amp.ampStack, {
        options:{
            animDuration : 250,
            easing : '',
            dir : 'horz',
            animate:true,
            layout:'standard',
            start:1,
            preferForward: false,
            no3D: false,
            thumbWidthExceed:0,
            gesture:{
                enabled:false,
                fingers:2,
                distance:50
            },
            onActivate: {
                select:true,
                goTo:true
            },
            preloadNext:true,
            responsive:true,
            states : {
                visible : 'amp-visible',
                partiallyVisible: 'amp-partially-visible'
            },
            animationStartCallback: function(){},
            animationEndCallback: function(){}
        },
        _getCreateOptions:function(){
            var attributes = this.element.data().ampCarousel;
            if (attributes) {
                return $.extend(true, {}, this.options, attributes);
            }
            return this.options;
        },
        _layoutManagers:{},
        _create: function() {

            this._elms = [];
            this._visible = 0;
            this._asyncMethods = [];
            this._canNext = true;
            this._movedCounter = 0;
            var self = this;

            this.options.delay = Math.max(this.options.delay,this.options.animDuration+1);
            this.options.animDuration = this.options.animate ? this.options.animDuration : 1;
            this.canTouch =  !!(('ontouchstart' in window) || window.DocumentTouch && document instanceof window.DocumentTouch);
            this.element.addClass('amp');
            this.element.addClass('amp-carousel');
            this.element.wrapInner("<div class='amp-anim-container' style='width:100%;height:100%;position:absolute'></div>");
            this._container = this.element.children().eq(0);
            this._containerPos = 0;
            this._children = this.element.children().eq(0).children();
            this.count = this._children.length;
            this._checkCSS3();
            this._index = Math.max(1,Math.min(this.options.start,this.count));
            this._selectedIndex = this._index;
            this._children.addClass('amp-slide');
            this._calcSize();
            this._chooseLayoutManager();

            this._children.eq(this._index-1).addClass(this.options.states.selected);

            if(this.options.onActivate.goTo || this.options.onActivate.select ) {
                for (var i = 0 ; i < this.count; i++) {
                    var start = function() {
                        self.moved = false;
                        $(window).on(!this.canTouch?'mousemove':'touchmove', $.proxy(move,self));
                    };
                    var move = function(evt) {
                        self._movedCounter +=1;
                        if(self._movedCounter >= 3){
                            self.moved = true;
                        }
                    };
                    var activate = (function(_i){
                        var me = self;
                        return function(e){
                            $(window).off(!this.canTouch?'mousemove':'touchmove', $.proxy(move,self));
                            if(me.moved)
                                return true;
                            if (me.options.onActivate.goTo)
                                me.goTo(_i);
                            if (me.options.onActivate.select)
                                me.select(_i);
                            return true;
                        }
                    }(i+1));

                    this._children.eq(i).on(!this.canTouch?'mousedown':'touchstart', $.proxy(start,self));
                    this._children.eq(i).on(!this.canTouch?'mouseup':'touchend',$.proxy(activate,self));
                }
            }

            this._calcSize();
            setTimeout($.proxy(this._calcSize,this),1);

            if(this.options.responsive){
                $(window).bind("resize", function(_self) {
                    return function() {
                        return setTimeout($.proxy(_self.redraw,_self),1);
                    }
                }(self));
            }


            if(this.options.autoplay) {
                this.play();
            }

            this._preloadNext();
            this._track("created",{'index':this._index,'canNext':this.canNext(),'canPrev':this.canPrev(),'visible':this._visible, 'count':this.count});
        },
        _chooseLayoutManager : function(){
            var chosenLayout,
                layout
            if( Object.prototype.toString.call( this.options.layout ) === '[object Array]' ) {
                for (var i=0; i<this.options.layout.length;i++) {
                    layout = this._layoutManagers[this.options.layout[i]];
                    if (this.checkFeatures(layout)) {
                        chosenLayout = layout;
                        break;
                    }
                }
            } else {
                layout = this._layoutManagers[this.options.layout];
                if (this.checkFeatures(layout)) {
                    chosenLayout = layout;
                }
            }
            if (!chosenLayout) {
                chosenLayout = this._layoutManagers.standard;
            }
            this._layoutManager = chosenLayout.create(this);
        },
        _calcSize: function() {
            this._super();
            if(this._layoutManager)
                this._layoutManager.layout(this._index);
            this._track('resized',{'index':this._index,'canNext':this.canNext(),'canPrev':this.canPrev(),'visible':this._visible, 'count':this.count});
        },
        _firstCharLowerCase : function(str) {
            return (str.substr(0,1).toLowerCase()+str.substr(1));
        },
        _dashConvert: function(val) {
            var str = '';
            for(var i =0; i<val.length; i++) {
                var c = val.substr(i,1);
                if (c === c.toUpperCase()) {
                    str+='-'+c.toLowerCase();
                } else {
                    str+=c;
                }
            }
            return str;
        },
        _checkCSS3: function() {
            var prefixes = ['', 'Webkit','Moz','O','ms','Khtml'],
                cssChecks = [{'name':'transform','dom':'Transform'},{'name':'transition','dom':'Transition'},{name:'transitionDuration',dom:'TransitionDuration'},{name:'transitionTimingFunction',dom:'TransitionTimingFunction'},{name:'anim',dom:'AnimationName'}],
                elm = this.element[0],
                el = document.createElement('p');
            this._canCSS3 = {};
            document.body.insertBefore(el, null);
            for( var i = 0; i < prefixes.length; i++ ) {
                var pre = prefixes[i];
                for (var j = 0; j < cssChecks.length; j++) {
                    var o =  cssChecks[j];
                    if(this._canCSS3[o.name])
                        continue;
                    if(elm.style[ pre + o.dom ] !== undefined) {
                        this._canCSS3[o.name] = pre+ o.dom;
                    }
                    if(elm.style[ pre + this._firstCharLowerCase(o.dom) ] !== undefined) {
                        this._canCSS3[o.name] = pre+this._firstCharLowerCase(o.dom);
                    }
                }
            }
            if(this._canCSS3.transform && !this.options.no3D) {
                if (el.style[this._canCSS3.transform] !== undefined) {
                    el.style[this._canCSS3.transform] = "translate3d(1px,1px,1px)";
                    var computed = window.getComputedStyle(el).getPropertyValue(this._dashConvert(this._canCSS3.transform));
                    this._canCSS3.can3D = ((computed !=null) && (computed != ""));
                }
            }
            document.body.removeChild(el);
        },
        _direction : function(index) {

            if(!this.options.loop) {
                return index>this._index;
            }
            var forw=0, back=0;
            this._index = Math.min(this._index,this.count);
            var oIndex =  this._index;
            while(oIndex!=index) {
                if(oIndex>this.count){
                    oIndex = 1;
                    continue;
                } else {
                    oIndex++;
                }
                forw++
            }
            oIndex = this._index;
            while(oIndex!=index) {
                if(oIndex<1) {
                    oIndex = this.count;
                    continue;
                } else {
                    oIndex--;
                }
                back++;
            }
            if(this.options.preferForward) {
                if(forw>1 && back >1) {
                    return true;
                }
            }
            return forw<=back;
        },
        _loopIndex : function(dir,start,count) {
            var inc = dir ? 1 : -1;
            var curr = start;
            for (var i= 0;i<count;i++) {

                if(curr+inc>this.count){
                    curr = 1;
                } else if(curr+inc<1) {
                    curr = this.count
                } else {
                    curr = curr + inc;
                }

            }
            return curr;
        },
        _loopCount : function(dir,start,target) {
            target = Math.min(target,this.count);
            var inc = dir ? 1 : -1;
            var curr = start;
            var count = 0;
            while(curr != target) {
                count++;
                if(curr+inc>this.count){
                    curr = 1;
                } else if(curr+inc<1) {
                    curr = this.count
                } else {
                    curr = curr + inc;
                }
            }
            return count;
        },
        _resetPos: function(elm) {
            if(this._canCSS3.transform && this._canCSS3.transition) {
                elm.css(this._canCSS3.transform,'');
            } else {
                if(this.options.dir=='horz') {
                    elm.css('left','');
                } else {
                    elm.css('top','');
                }
            }
        },
        _removeStates: function() {
            this._children.removeClass(this.options.states.visible);
            this._children.removeClass(this.options.states.partiallyVisible);
        },
        _setState: function(elm,state) {
            switch(state) {
                case 'visible' :
                    elm.addClass(this.options.states.visible);
                    elm.addClass(this.options.states.seen);
                    this.callChildMethod(elm,'visible',true);
                    break;
                case 'invisible' :
                    elm.removeClass(this.options.states.visible);
                    this.callChildMethod(elm,'visible',false);
                    break;
                case 'partial' :
                    elm.addClass(this.options.states.partiallyVisible);
                    this.callChildMethod(elm,'visible',false);
                    break;

            }
        },
        _posElm: function(elm,num,index,add) {
            if (!this._elms[index])
                this._elms[index] = 0;
            var number = add ? this._elms[index]+num : num//, transform;
            if(this._canCSS3.transform && this._canCSS3.transition) {
                if(this._canCSS3.can3D) {
                    //transform = elm.css(this._canCSS3.transform);
                    if(this.options.dir=='horz') {
                        elm.css(this._canCSS3.transform,'translate3d('+number+'px,0,0)');
                    } else {
                        elm.css(this._canCSS3.transform,'translate3d(0,'+number+'px,0)');
                    }
                } else {
                    if(this.options.dir=='horz') {
                        elm.css(this._canCSS3.transform,'translate('+number+'px,0)');
                    } else {
                        elm.css(this._canCSS3.transform,'translate(0,'+number+'px)');
                    }
                }
            } else {
                if(this.options.dir=='horz') {
                    elm.css('left',number+'px');
                } else {
                    elm.css('top',number+'px');
                }
            }
            this._elms[index] = number;
        },
        _preloadNext:function(){
            if(this.options.preloadNext) {
                var num = this._visible + (this._index - 1);
                var index = this._loopIndex(true,num,1);
                var nextNextItem = this._children.eq(index-1);
                this.callChildMethod(nextNextItem,'preload',true);
            }
        },
        _measureElements : function (dir,index,count) {
            var size = 0,
                horz = this.options.dir == 'horz';

            for (var i=0; i<count; i++) {

                var eindex = dir? index+i:index-i;
                if (eindex > this.count) {
                    eindex = 1;
                }
                if(eindex < 1) {
                    eindex = this.count;
                }
                size += this._measureElement(eindex-1);
            }
            return dir ? 0-size : size;
        },
        _moveElements : function(howMuch,onDone,animate) {

            var $container = this._container,
                self = this;

            // if the position is the same, don't bother moving and fire the cb (transitionend won't fire without change)
            if(this._containerPos == howMuch) {
                if(self._canCSS3.transform && self._canCSS3.transitionDuration) {
                    $container.css(self._canCSS3.transitionTimingFunction, '');
                    $container.css(self._canCSS3.transitionDuration,'');
                }
                if(onDone)
                    onDone();
                return;
            }
            this._containerPos = howMuch;

            self.options.animationStartCallback();

            if(!animate) {
                if(self._canCSS3.transform && self._canCSS3.transitionDuration) {
                    var transform = self._canCSS3.can3D ? (self.options.dir=='horz'?'translate3d('+howMuch+'px,0,0)':'translate3d(0, '+howMuch+'px,0)') : (self.options.dir=='horz'?'translateX('+howMuch+'px)':'translateY('+howMuch+'px');
                    $container.css(self._canCSS3.transform,transform);
                } else {
                    if(self.options.dir=='horz'){
                        $container.css('left',howMuch+'px');
                    } else {
                        $container.css('top',howMuch+'px');
                    }
                }
                if(onDone)
                    onDone();

                return;
            }

            if(self._canCSS3.transform && self._canCSS3.transitionDuration) {
                var transform = self._canCSS3.can3D ? (self.options.dir=='horz'?'translate3d('+howMuch+'px,0,0)':'translate3d(0, '+howMuch+'px,0)') : (self.options.dir=='horz'?'translateX('+howMuch+'px)':'translateY('+howMuch+'px');
                $container.css(self._canCSS3.transform,transform);
                $container.css(self._canCSS3.transitionTimingFunction, self.options.easing);
                $container.css(self._canCSS3.transitionDuration, self.options.animDuration + 'ms');

                $container.off().on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function() {
                    $container.css(self._canCSS3.transitionTimingFunction, '');
                    $container.css(self._canCSS3.transitionDuration,'');
                    if(onDone)
                        onDone();
                    self.options.animationEndCallback();
                });
            } else {
                var anim = {};
                if(self.options.dir=='horz'){
                    anim.left = howMuch+'px';
                } else {
                    anim.top = howMuch+'px';
                }
                $container.animate(anim, self.options.animDuration,'swing',function(){
                    if(onDone)
                        onDone();
                    self.options.animationEndCallback();
                });
            }

        },
        _measureElement : function (index) {
            var size,
                horz = this.options.dir == 'horz',
                elm = this._children.eq(index),
                clientHeight = elm[0].getBoundingClientRect().height;

            elm.css('display','block');
            if(horz) {
                size = elm.outerWidth(true);
            } else {
                size = elm.outerHeight(true);
                if(clientHeight && (size - clientHeight <= 1)){
                    size = clientHeight;
                }
                if(!clientHeight){
                    size = elm.outerHeight(true) - 1;
                }
            }
            elm.css('display','');
            return size;
        },
        _elmSize : function() {
            return this.options.dir=='horz' ? this.element.width(): this.element.height();
        },
        _animate : function(_index){
            var self = this;
            this._animating = true;
            this._layoutManager.focus(_index,true,function(){
                self._setIndex(_index);
            });

        },
        _setIndex : function (_index) {
            this._index = _index;
            this._track("change",{'index':this._index,'canNext':this.canNext(),'canPrev':this.canPrev(),'visible':this._visible, 'count':this.count});
            this._animating = false;
            this._preloadNext();
            this._onFinish();
        },
        _track: function(event,value) {
            this._trigger( event, null, value );
            if(window.amp && amp.stats && amp.stats.event){
                amp.stats.event(this.element,'carousel',event,value);
            }
        },
        _destroy: function() {
            this.element.removeClass('amp');
            this.element.removeClass('amp-carousel');
            this._removeEmptyAttributeHelper(this.element);
            var c = this._children;
            c.removeClass('amp-slide');
            c.removeClass(this.options.states.visible);
            c.removeClass(this.options.states.partiallyVisible);
            c.removeClass(this.options.states.selected);
            c.removeClass(this.options.states.seen);
            for (var i=0;i<c.length;i++ ) {
                var elm = c.eq(i);
                this._resetPos(elm,0);
                this._removeEmptyAttributeHelper(elm);
            }
            this._container.replaceWith(c);

        },
        checkFeatures: function(lm) {
            if (lm) {
                if(lm.requiredFeatures) {
                    var passed = true;
                    for (var i=0; i<lm.requiredFeatures.length; i++) {
                        var feature = lm.requiredFeatures[i];
                        if(!this._canCSS3[feature]) {
                            passed = false;
                        }
                    }
                    return passed;
                } else {
                    return true;
                }
            }
            return false;
        },
        canNext : function() {
            return this.options.loop || (this._canNext && this._index + this._visible <= this.count);
        },
        redraw:function(){
            if(this._animating) {
                this._asyncMethods.push({func:self._calcSize,args:arguments});
                return;
            }
            return this._calcSize();
        },
        select : function(num,triggered) {
            var _index = this._numToIndex(num),
                currItem  = this._children.eq(this._selectedIndex-1),
                nextItem = this._children.eq(_index-1);

            var mainSize = 0;
            currItem.removeClass(this.options.states.selected);
            nextItem.addClass(this.options.states.selected + ' ' +this.options.states.seen);
            this._selectedIndex = _index;
            if(!nextItem.hasClass(this.options.states.visible)) {
                this.goTo(_index,triggered);
            }
            if(!triggered) {
                this._exeBinds(_index,'select');
            }
            this._preloadNext();
            this._track("selected",{'index':_index});
        }
    });
    // -----------------------------------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------------------------------STANDARD LAYOUT MANAGER
    // -----------------------------------------------------------------------------------------------------------------
    (function(){
        var standard = function(widget,options){
            function Manager() {
                this.name = 'standard';
                this.options = options;
                this.duplicated = [];
            }

            var m = Manager.prototype;
            m.init = function() {
                if(widget.canTouch && widget.options.gesture.enabled) {
                    widget._children.on('touchstart', $.proxy(this.start,this));
                }
                else{
                    widget._children.on('mousedown', $.proxy(this.start,this));
                }
            };

            m.start = function(e){
                if(this.animating)
                    return;
                if(e.originalEvent && e.originalEvent.touches && e.originalEvent.touches[0] ) {
                    if (e.originalEvent.touches.length!=widget.options.gesture.fingers)
                        return true;
                }
                this.duplicationOffsets = {};
                this.duplicationOffsets.left = 0;
                this.duplicationOffsets.leftSize = 0;
                this.duplicationOffsets.right = 0;
                this.duplicationOffsets.rightSize = 0;
                this.changed = false;
                this.startPos = widget._containerPos;
                this.moved = false;
                this.startTouchEvent = e;
                var e = this.getEvent(e);
                this.xo = e.pageX - widget._containerPos;
                this.yo = e.pageY - widget._containerPos;
                this.xo2 = e.pageX;
                this.yo2 = e.pageY;
                $(window).on('touchmove',$.proxy(this.move,this));
                $(window).on('touchcancel',$.proxy(this.stop,this));
                $(window).on('touchend',$.proxy(this.stop,this));
                $(window).on('mouseup',$.proxy(this.stop,this));
                return true;
            };

            m.move = function(e){
                if(e.originalEvent && e.originalEvent.touches && e.originalEvent.touches[0] ) {
                    if (e.originalEvent.touches.length!=widget.options.gesture.fingers)
                        return true;
                }
                this.moved = true;
                this.lastEvent = e;

                e = this.getEvent(e);
                var mx = e.pageX - this.xo;
                var my = e.pageY - this.yo;
                var mx2 = e.pageX - this.xo2;
                var my2 = e.pageY - this.yo2;
                if(!this.moveDir) {
                    if(Math.abs(mx2)< Math.abs(my2)) {
                        this.moveDir = 'vert';
                    } else if (Math.abs(mx2)> Math.abs(my2)){
                        this.moveDir = 'horz';
                    } else {
                        this.moveDir = widget.options.dir;
                    }
                }
                if(widget.options.dir != this.moveDir){
                    return true;
                }

                var offset = widget.options.dir == 'horz' ? mx : my;
                widget._moveElements(offset,null,false);

                if(widget.options.loop) {
                    this.checkDuplicate(offset)
                }

                if(widget.options.dir == this.moveDir){
                    return false;
                }
            };

            m.checkDuplicate = function(offset) {
                if (offset-this.metrics[this.lastOne-1].size<0-(this.allSize-widget._elmSize())){
                    this.duplicateSlide(true);
                }

                if (0-offset-this.metrics[0].size <= 0-this.duplicationOffsets.leftSize){
                    this.duplicateSlide(false);
                }
            };

            m.duplicateSlide = function(dir) {
                if(dir){
                    var i=widget._numToIndex(widget._index-1+widget.count+this.duplicationOffsets.right+1)-1;
                    var elm = widget._children.eq(i);
                    var clone = elm.clone();
                    widget._container.append(clone);
                    var cloneSize = widget.options.dir=='horz' ? clone.width() : clone.height();
                    var target = this.allSize;
                    widget._posElm(clone,target,this.count+this.duplicated.length);
                    this.duplicated.push(clone);
                    this.duplicationOffsets.right++;
                    this.duplicationOffsets.rightSize+=cloneSize;
                    this.lastOne=i+1;
                    this.allSize+=cloneSize;
                } else {
                    var i=widget._numToIndex(widget._index-1-this.duplicationOffsets.left)-1;
                    var elm = widget._children.eq(i);
                    var clone = elm.clone();
                    widget._container.append(clone);
                    var cloneSize = widget.options.dir=='horz' ? clone.width() : clone.height();
                    var target = 0-this.duplicationOffsets.leftSize-cloneSize;
                    widget._posElm(clone,target,this.count+this.duplicated.length);
                    this.duplicated.push(clone);
                    this.duplicationOffsets.left++;
                    this.duplicationOffsets.leftSize+=cloneSize;
                }
            };

            m.stop = function(e){
                widget._movedCounter = 0;
                $(window).off('touchmove',$.proxy(this.move,this));
                $(window).off('touchcancel',$.proxy(this.stop,this));
                $(window).off('touchend',$.proxy(this.stop,this));
                $(window).off('mouseup',$.proxy(this.stop,this));
                this.moveDir = null;
                if(this.moved && !this.changed){
                    if(widget.preventStop){
                        widget.preventStop = false;
                        return;
                    }
                    var nearest = this.findNearest();
                    var nearestIndex = nearest.index+1;
                    if (nearestIndex == widget._index) {
                        // we are closest to our original position, but how far did we move?
                        var diff = this.startPos - widget._containerPos;
                        if(Math.abs(diff)>=widget.options.gesture.distance) {
                            if(diff>0) {
                                if(widget.canNext()) {
                                    widget.next();
                                } else {
                                    widget._moveElements(this.startPos,null,true);
                                }
                            } else {
                                if(widget.canPrev()) {
                                    widget.prev();
                                } else {
                                    widget._moveElements(this.startPos,null,true);
                                }
                            }
                        } else {
                            widget._moveElements(this.startPos,null,true);
                        }
                        this.changed = true;
                        if (widget.options.loop) {
                            widget._containerPos = 0;
                        }
                        return;
                    }
                    if (!widget.options.loop) {
                        this.changed = true;
                        widget.goTo(nearestIndex);
                    } else {
                        this.animating = true;
                        widget._moveElements(nearest.pos, $.proxy(function(){
                            this.allSize = this.oAllSize;
                            this.focus(nearestIndex,false);
                            widget._containerPos = 0;
                            widget._setIndex(nearestIndex);
                            widget.goTo(nearestIndex,null,true);
                            this.changed = true;
                            this.animating = false;
                        },this),true);

                    }
                }
                widget.preventStop = false;
            };

            m.getEvent = function(e) {
                if(e.type == "touchend"  || e.type == "touchcancel") {
                    e = this.startTouchEvent;
                }
                if(e.originalEvent && e.originalEvent.touches && e.originalEvent.touches[0] ) {
                    e = e.originalEvent.touches[0];
                }
                return e;
            };

            m.findNearest = function() {
                var index = 0;
                var target = widget._containerPos;
                var smallest = this.oAllSize;
                var multi = 0;
                if(widget.options.loop) {
                    while(target<0-this.oAllSize) {
                        target += this.oAllSize;
                        multi--;
                    }
                    while(target>0) {
                        target -= this.oAllSize;
                        multi++;
                    }
                }
                for (var i =0; i<this.metrics.length; i++){
                    var diff = Math.abs(target + this.metrics[i].pos);
                    if (diff<smallest) {
                        smallest = diff;
                        index = i;
                    }
                }
                // test the end position as well!
                var end = widget._numToIndex(widget._index+widget.count-1)-1;
                var diff = Math.abs(target + (this.metrics[end].pos+this.metrics[end].size));
                if (diff<smallest) {
                    smallest = diff;
                    index = widget._index-1;
                    target += this.oAllSize;
                }
                var offset = target>=0? this.metrics[index].pos+(this.oAllSize*(multi-1)) : (0-this.metrics[index].pos)+(this.oAllSize*multi);
                return {index:index,pos:offset};
            };

            m.layout = function(_index) {
                if(!widget.options.loop){
                    this.arrange(1);
                    this.focusNoLoop(_index,false);
                } else {
                    this.arrange(_index);
                    this.focusLoop(_index, false);
                }
            };

            m.focus= function(_index,anim,cb) {
                if(!widget.options.loop){
                    this.focusNoLoop(_index,anim);
                    if(cb)
                        cb();
                } else {
                    this.focusLoop(_index,anim,cb);
                }
            };

            m.focusNoLoop= function(_index,anim) {
                var target = 0-this.metrics[_index-1].pos;
                var min = 0-(this.allSize-widget._elmSize());
                target = Math.min(Math.max(min, target),0);
                this.setVisibleStates(_index,target);
                widget._moveElements(target,null,anim);
            };

            m.setVisibleStates = function(_index,target) {
                var target = Math.abs(target);
                widget._removeStates();
                var visible = 0;
                for (var i=0; i<this.metrics.length; i++) {
                    var pos = this.metrics[i].pos;
                    var elm = widget._children.eq(i);
                    var elmSize = this.metrics[i].size;
                    var bounds = parseFloat(widget._children.eq(i).css('margin-right')) * 2;

                    if (pos >= target && (pos + elmSize - widget.options.thumbWidthExceed - bounds - target) <= widget._elmSize()) {
                        widget._setState(elm, 'visible');
                        visible++;
                    } else if ((pos + elmSize - bounds > target && (pos + elmSize - bounds - target) < widget._elmSize()) || (pos > target && (pos - target) < widget._elmSize())) {
                        widget._setState(elm, 'partial');
                    } else {
                        widget._setState(elm, 'invisible');
                    }
                }
                widget._visible = visible;
            };

            m.focusLoop= function(_index,anim,cb) {
                var self = this,
                    dir = (widget._direction(_index)),
                    target = dir ? 0-this.metrics[_index-1].pos : this.allSize - this.metrics[_index-1].pos,
                    diff = widget._loopCount(dir,widget._index,_index);
                this.duplicate(dir);

                this.setVisibleStates(_index,target);

                widget._moveElements(target,function(){
                    widget._container[0].style[widget._canCSS3.transform] = '';
                    widget.options.dir === 'horz' ? widget._container[0].style.left = '' : widget._container[0].style.top = '';
                    self.arrange(_index);
                    while (self.duplicated.length > 0) {
                        var obj = self.duplicated.splice(0,1);
                        obj[0].remove();
                        delete obj[0];
                    }
                    if(cb)
                        cb();
                },anim);
            };

            m.duplicate= function(dir){
                for (var i=0; i<widget.count; i++) {
                    var elm = widget._children.eq(i);
                    var clone = elm.clone();
                    widget._container.append(clone);
                    var target = dir ?this.metrics[i].pos+this.allSize :this.metrics[i].pos-this.allSize ;
                    widget._posElm(clone,target,this.count+this.duplicated.length);
                    this.duplicated.push(clone);
                    var borderW = elm.css('box-sizing') == 'border-box' ? elm.css('borderBottomWidth')
                    + elm.css('borderTopWidth') : 0;
                    var borderH = borderW ? elm.css('borderLeftWidth') + elm.css('borderRightWidth') : 0;
                    clone.css({
                        width: elm.width() + borderW,
                        height: elm.height() + borderH
                    });

                }
            };

            m.arrange= function (index) {
                var offset = 0,
                    metrics = [],
                    sizes = [];
                widget._removeStates();
                for (var s=0; s<widget.count; s++) {
                    var i = s;
                    if(index !== void 0){
                        i+=index-1;
                        while(i>=widget.count){
                            i-=widget.count;
                        }
                    }
                    var elm = widget._children.eq(i);
                    var eSize = widget._measureElement(i);
                    if(eSize+offset<=widget._elmSize()) {
                        widget._setState(elm,'visible');
                    } else if (offset<widget._elmSize()) {
                        widget._setState(elm,'partial');
                    } else {
                        widget._setState(elm,'invisible');
                    }
                    metrics[i] = {};
                    metrics[i].size = eSize;
                    metrics[i].pos = offset;
                    widget._posElm(elm,offset,i);
                    sizes[i] = (eSize);
                    offset += eSize;
                }
                if(widget.options.loop){
                    widget._containerPos = 0;
                }
                this.lastOne = index;
                delete this.metrics;
                this.metrics = metrics;
                this.allSize = offset;
                this.oAllSize = offset;
                return {allSize:offset,metrics:metrics};
            };
            var mo = new Manager( );
            mo.init();
            return mo;

        };

        $.amp.ampCarousel.prototype._layoutManagers['standard'] = {'requiredFeatures':null,'create':standard};
    }());


    // -----------------------------------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------------------------------- 3D Layout Manager
    // -----------------------------------------------------------------------------------------------------------------
    // Made with help from: 'Intro to CSS 3D transforms' By David DeSandro
    (function(){
        var carousel3D = function(widget,options){
            var transformProp = widget._canCSS3.transform;
            function Manager() {
                this.name = 'carousel3D';
                this.options = options;
                this.styles = [];
                this.angles = [];
            }
            var m = Manager.prototype;

            m.init = function() {
                var self = this;
                this.element = widget._container[0];
                this.rotation = 0;
                this.panelCount = widget.count;
                this.totalPanelCount = this.element.children.length;
                this.theta = 0;
                this.isHorizontal = widget.options.dir == 'horz';
                widget._container.css('perspective','1000px');
                this.modify();
                setTimeout(function(){
                    self.animation(true);
                },10);
                if(widget.canTouch && widget.options.gesture.enabled) {
                    widget._children.on('touchstart', $.proxy(this.start,this));
                }
            };

            m.animation = function(enable) {
                if (enable) {
                    widget._children.css('transitionTimingFunction',widget.options.easing);
                    widget._children.css('transitionDuration',widget.options.animDuration+'ms');
                } else {
                    widget._children.css('transitionTimingFunction','');
                    widget._children.css('transitionDuration','');
                }
            };

            m.start = function(e) {
                if(e.originalEvent && e.originalEvent.touches && e.originalEvent.touches[0] ) {
                    if (e.originalEvent.touches.length!=widget.options.gesture.fingers)
                        return true;
                }
                var e = this.getEvent(e);
                this.xo = e.pageX - e.target.offsetLeft;
                this.yo = e.pageY - e.target.offsetTop;

                this.changed = false;
                this.moved = false;
                this.animation(false);
                this.startPos = this.rotation;

                $(window).on('touchmove',$.proxy(this.move,this));
                $(window).on('touchcancel',$.proxy(this.stop,this));
                $(window).on('touchend',$.proxy(this.stop,this));

            };

            m.move = function(e) {

                if(e.originalEvent && e.originalEvent.touches && e.originalEvent.touches[0] ) {
                    if (e.originalEvent.touches.length!=widget.options.gesture.fingers)
                        return true;
                }
                this.lastEvent = e;
                this.moved = true;
                e = this.getEvent(e);
                var mx = e.pageX - this.xo;
                var my = this.yo - e.pageY;
                var diff = widget.options.dir == 'horz' ? mx : my;
                if(diff>0) {
                    diff = Math.min(this.theta/2,diff/10)
                } else {
                    diff = Math.max(0-(this.theta/2),diff/10);
                }
                this.rotation = this.startPos + diff;
                this.transform();
                return false;
            };

            m.getEvent = function(e) {
                if(e.type == "touchend" || e.type == "touchcancel") {
                    e = this.lastEvent;
                }
                if(e.originalEvent && e.originalEvent.touches && e.originalEvent.touches[0] ) {
                    e = e.originalEvent.touches[0];
                }
                return e;
            };

            m.stop = function(e) {
                $(window).off('touchmove',$.proxy(this.move,this));
                $(window).off('touchcancel',$.proxy(this.stop,this));
                $(window).off('touchend',$.proxy(this.stop,this));
                this.animation(true);
                if(this.moved && !this.changed){
                    e = this.getEvent(e);
                    var mx = e.pageX - this.xo;
                    var my = this.yo - e.pageY;
                    var diff = widget.options.dir == 'horz' ? mx : my;
                    this.rotation = this.startPos;
                    // we are closest to our original position, but how far did we move?
                    if(Math.abs(diff)>=widget.options.gesture.distance) {
                        if(diff<0) {
                            if(widget.canNext()) {
                                widget.next();
                                return;
                            }
                        } else {
                            if(widget.canPrev()) {
                                widget.prev();
                                return;
                            }
                        }
                    }
                    this.transform();
                    this.changed = true;
                }
            };

            m.modify = function() {

                var panel, angle, i;
                this.xOffset = widget._container.width()/2 - widget._children.eq(0).width()/2;
                this.yOffset = widget._container.height()/2 - widget._children.eq(0).height()/2;
                this.panelSize = this.isHorizontal ? widget._children.eq(0).width() : widget._children.eq(0).height();
                this.rotateFn = this.isHorizontal ? 'rotateY' : 'rotateX';
                this.theta = 360 / this.panelCount;

                // do some trig to figure out how big the carousel is in 3D space
                this.radius = Math.round( ( this.panelSize / 2) / Math.tan( Math.PI / this.panelCount ) );
                delete this.styles;
                delete this.angles;
                this.styles = [];
                this.angles = [];
                for ( i = 0; i < this.panelCount; i++ ) {
                    panel = this.element.children[i];
                    if(!panel)
                        continue;
                    angle = this.theta * i;
                    this.angles[i] = angle;
                    // rotate panel, then push it out in 3D space
                    this.styles[i] = this.rotateFn + '(' + angle + 'deg) translateZ(' + this.radius + 'px)';
                    panel.style[ transformProp ] = this.styles[i];
                    if(widget.options.dir=="horz"){
                        panel.style.left = this.xOffset + 'px'
                    }else{
                        panel.style.top = this.yOffset + 'px'
                    }
                }

                // hide other panels
                for (  ; i < this.totalPanelCount; i++ ) {
                    panel = this.element.children[i];
                    if(!panel)
                        continue;
                    panel.style.opacity = 0;
                    panel.style[ transformProp ] = 'none';
                }

                // adjust rotation so panels are always flat
                this.rotation = Math.round( this.rotation / this.theta ) * this.theta;

                this.transform();

            };

            m.transform = function() {
                // push the carousel back in 3D space,
                // and rotate it
                for (var i = 0; i < this.panelCount; i++ ) {
                    if(!this.element.children[i])
                        continue;

                    var totalAngle = this.angles[i]+this.rotation;

                    while (totalAngle > 360) {
                        totalAngle -= 360;
                    }
                    while (totalAngle <0) {
                        totalAngle += 360;
                    }

                        var zIndexAngle;
                        if(totalAngle <= 180) {
                            zIndexAngle = 180 - totalAngle;
                        } else {
                            zIndexAngle = totalAngle - 180;
                        }
                        this.element.children[i].style.zIndex = zIndexAngle;

                    this.element.children[i].style[ transformProp ] = 'translateZ(-' + this.radius + 'px) ' + this.rotateFn + '(' + this.rotation + 'deg)' + this.styles[i];
                }

            };

            m.focus = function (index,anim,cb) {
                var dir = (widget._direction(index));
                var diff = widget._loopCount(dir,widget._index,index);
                var elm = widget._children.eq(index-1);
                var wasElm = widget._children.eq(widget._index-1);
                widget._setState(elm,'visible');
                widget._setState(wasElm,'invisible');

                if(dir){
                    this.rotation -= this.theta * diff;
                } else {
                    this.rotation += this.theta * diff;
                }
                this.transform();
                if(cb)
                    cb();
            };

            m.layout = function (index) {
                this.modify();
                this.focus(index);

            };

            var mo =  new Manager();
            mo.init();
            return mo;
        };
        $.amp.ampCarousel.prototype._layoutManagers['carousel3D'] = {'requiredFeatures':['can3D','transform'],'create':carousel3D};
    }());
}( jQuery ));
(function ( $ ) {

    $.widget( "amp.ampImage", {
        options: {
            errImg: null,
            preload:'visible',
            insertAfter:false
        },
        _loadedHistory : [],
        _getCreateOptions:function(){
            var attributes = this.element.data().ampImage;
            if (attributes) {
                return $.extend(true, {}, this.options, attributes);
            }
            return this.options;
        },
        _create: function() {
            this.element.addClass('amp');
            this.element.addClass('amp-image');
            var self = this;
            this.element.bind('load',function(e){
                self._loaded();
            });
            this.element.bind('error',function(){
                self._failLoad();
            });

            if($.inArray(this.options.preload, ['created', 'visible', 'none']) == -1){
                this.options.preload = 'visible';
            }

            if(this.options.preload == 'created') {
                this.newLoad();
            }
            this._track("created");

        },

        dimensionsParams: function (imgSrc) {
            //Dynamically assign width and/or height attributes in src attribute of an image
            var self = this;
            var dimensionsObj = self.element.data('amp-dimensions');
            var src = imgSrc;
            if (!dimensionsObj) {
                return src;
            }

            var paramPrefix = src.indexOf('?') === -1 ? '?' : '&';
            var paramsString = '';

            $.each(dimensionsObj[0], function (key, obj) {
                var regExp = new RegExp(paramPrefix + key + '=' + '[0-9]*', "g");
                var duplicate = src.match(regExp);

                if (duplicate && duplicate.length > 0) {
                    $.each(duplicate, function (i, v) {
                        src = src.replace(v, '');
                    });
                }

                var $parent = obj.domName === 'window' ? $(window) : self.element.closest(obj.domName);
                paramsString += paramPrefix + key + '=' + parseFloat($parent[obj.domProp](), 10);
                paramPrefix = '&';

            });

            src += paramsString;
            return src;
        },

        newLoad: function() {
            var src = (this.element.attr('src') && this.element.attr('src')!="")?this.element.attr('src'):this.element.attr('data-amp-src');
            src = this.dimensionsParams(src);
            var ampSrcSet = this.element.attr('data-amp-srcset') || null;

            if($.inArray(src, this._loadedHistory)!==-1){
                if(this.loading) {
                    this.loading.remove();
                }
                this.element.attr('src',src);
                if(ampSrcSet){
                    this.element.attr('srcset',ampSrcSet);
                }
                this.element.show();
                return;
            }
            if(!this.loading) {
                this.loading = $('<div class="amp-loading"></div>');
            }
            this.element.hide();
            !this.options.insertAfter ? this.element.parent().append(this.loading) :this.options.insertAfter.prepend(this.loading);
            this.element.attr('src','');
            this.element.attr('src',src);

            if(ampSrcSet){
                this.element.attr('srcset','');
                this.element.attr('srcset', ampSrcSet);
            }
        },

        visible: function(visible) {
            if(visible && visible!= this._visible) {
                if(this.options.preload == 'visible'){
                    if(this.loaded || this.loading)
                        return;

                    this.newLoad();
            }
            }
            this._visible = visible;
        },
        load: function(options) {
            if(this.loaded || this.loading)
                return;

            this.newLoad();
        },
        preload: function() {
            if(!this.element.parent().hasClass('amp-spin')){
                this.newLoad();
            }
        },
        loaded:false,
        _loaded: function(){
            this._loadedHistory.push(this.element.attr('src'));
            this._track( 'loaded', true );
            this.loaded = true;
            if(this.loading) {
                this.loading.remove();
            }
            this.element.show();
        },
        _failLoad: function() {
            if(this.options.errImg) {
                this.element.attr('src',this.options.errImg);
            } else {
                if (window.amp && amp.conf && amp.conf.err_img) {
                    this.element.attr('src',amp.conf.err_img);
                }
            }
        },
        _track: function(event,value) {
            this._trigger( event, null, value );
            if(window.amp && amp.stats && amp.stats.event){
                amp.stats.event(this.element,'image',event,value);
            }
        },
        _destroy: function() {
            this.element.removeClass('amp');
            this.element.removeClass('amp-image');
            if(this.loading) {
                this.loading.remove();
            }
            this.element.css('display','');
            this._removeEmptyAttributeHelper(this.element);
        },
        _removeEmptyAttributeHelper:function(elm, attsToCleanIfEmpty){
            var attArr = attsToCleanIfEmpty || ['class','style'];
            for (var i= 0,len=attArr.length;i<len;i++ ) {
                if(!(elm.attr(attArr[i]) && elm.prop(attArr[i]))){
                    elm.removeAttr(attArr[i]);
                }
            }
        }
    });


}( jQuery ));
(function ( $ ) {
    $.widget( "amp.ampBuild", {
        // Default options.
        options: {
        },
        _create: function() {
            for(var prop in $.amp){
                if($.amp.hasOwnProperty(prop)){
                    this.element.find("[data-"+ prop.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()+"]")[prop]();
                }
            }
            this._track("created");
        },
        _track: function(event,value) {
            this._trigger( event, null, value );
            if(window.amp && amp.stats && amp.stats.event){
                amp.stats.event(this.element,'build',event,value);
            }
        }
    });

}( jQuery ));
(function ( $ ) {

    $.widget( "amp.ampNav", {
        // Default options.
        options: {
        },
        _getCreateOptions:function(){
            var attributes = this.element.data().ampNav;
            if (attributes) {
                return $.extend(true, {}, this.options, attributes);
            }
            return this.options;
        },
        _create: function() {
            var self = this;
            var components = this.element.data();
            for (var i in components) {
                if(components.hasOwnProperty(i)){
                    var component = components[i];
                    if(component.bind && i.substring(0,3)=='amp'){
                        component.bind(this.options);
                    }
                }
            }
            this._track("created");
        },
        _track: function(event,value) {
            if(window.amp && amp.stats && amp.stats.event){
                amp.stats.event(this.element,'navigation',event,value);
            }
        }
    });



}( jQuery ));
(function ($) {
    var reset = {
        top: 0, left: 0,  opacity:0, width:'', height:''
    };

    $.widget("amp.ampZoom", {
        // Default options.
        options: {
            zoom: 3,
            url: '',
            activate:{
                touch:"up",
                mouse:"up"
            },
            pan:false,
            map:false,
            target:{},
            lens: true,
            fade: true,
            preload: {
                image:'created',
                zoomed:'none'
            },
            responsive:true,
            cursor:{active: 'auto', inactive: 'auto'},
            transforms:'',
            states:{
                "active":"amp-active",
                "inactive":"amp-inactive"
            },
            width:'auto',
            height:'auto',
            create:function(){},
            created:function(){},
            zoomedIn:function(){},
            zoomedOut:function(){},
            move:function(){},
            startMove:function(){},
            stopMove:function(){},
            startPreload:function(){},
            preloaded:function(){},
            visible:function(){}
        },
        _zoomLoaded:false,
        _getCreateOptions:function(){
            this.validTypes = this._createValidTypes(this.options);
            var attributes = this.element.data().ampZoom;
            if (attributes) {
                return $.extend(true, {}, this.options, attributes);
            }

            return this.options;
        },
        _createValidTypes: function(options){
            var validTypes = {};
            for(var option in options){
                if(options.hasOwnProperty(option)){
                    var val = options[option], newType;
                    newType = (option == "width" || option == "height") ? "number" :  typeof val;
                    validTypes[option] = typeof val === "object" ?
                        this._createValidTypes(val) :
                    { type: newType, defaultValue:val };
                }
            }
            return validTypes;
        },
        _checkValidTypes:function(options, validTypes){
            return options;
        },
        _create: function () {
            this.options = this._checkValidTypes(this.options, this.validTypes);

            if($.isArray(this.options.zoom))
                this._cycle = {current:-1, len:this.options.zoom.length};

            var preloadOptionsArray = ['created', 'visible', 'none'];
            if($.inArray(this.options.preload.image, preloadOptionsArray) == -1)
                this.options.preload.image = 'created';

            if($.inArray(this.options.preload.zoomed, preloadOptionsArray) == -1)
                this.options.preload.zoomed = 'none';

            this.element.addClass('amp amp-zoom');
            this.element.wrap('<div class="amp-zoom-container"></div>');
            this.parent = this.element.parent();
            this.parent.prepend(this.loading);
            this.element.wrap('<div class="amp-zoom-overflow"></div>');
            this.overflow = this.element.parent();
            this.wrapper = $('<div class="amp-zoom-wrapper"></div>');
            this.imgs = [];
            var i = 0;
            do{
				var img = $('<img class="amp-zoom-img">');
				img.css(reset); 
				this.wrapper.append(img); 
                this.imgs.push(img);
                i++;
            }while(i < (this._cycle && this._cycle.len));

       
            if(this.options.responsive){
                this.element.css({ height:'auto', width:'100%', maxWidth:'100%' });
            }

            if(this.options.target){
                this.mark = this.options.map ? {name:"map", inner:"inner"} : {name:"box", inner:"wrapper"};
                try{
                    this[this.mark.name] = $('body').find(this.options.target);
                } catch(e) {
                    this[this.mark.name] = false;
                }

                if(this[this.mark.name] && this[this.mark.name].length > 0){
                    if(this.options.lens){
                        this.lens = $('<div class="amp-zoom-lens"></div>');
                        if(this.mark.name == "map"){
                            this[this.mark.name].addClass('amp-zoom-map');
                            this[this.mark.inner] = $('<div class="amp-zoom-wrapper"></div>');
                            this[this.mark.inner].append($('<img class="amp-main-img" src="'+this.element.attr('src')+'">'));
                            this[this.mark.inner].append(this.lens);
                        }else{
                            this[this.mark.name].addClass('amp-zoom-container');
                            this.parent.append(this.lens);
                        }
                    }

                    this[this.mark.inner].hide();
                    this[this.mark.name].append(this[this.mark.inner]);
                    this[this.mark.inner].addClass(this.options.states.inactive);
                    this[this.mark.inner][0].relatedUUID = this.uuid;
                }else{
                    this[this.mark.name] = false;
                }
            }

            if(!this.box){
                this.overflow.append(this.wrapper);
                this.canHideEl = !!$.amp.ampImage;
            }

            this.target = this.imgs[0];
            this._setZoomCursor(this.parent);
            this.parent.addClass(this.options.states.inactive);

            if(this.options.preload.image == 'created' || this.element[0].src)
                this._loadImage();

            if(this.options.preload.zoomed == 'created'){
                this._loadZoomed();
            }
        },
        _onImageLoad: function(){
            if (this._imageLoaded) {
                return;
            }

            this._track( 'loaded', true );
            this._imageLoaded = true;
            this._imageLoading = false;

            this._originalImage = this._getNaturalSize(this.element[0].src);

            var self = this;
            this._calcSize();
            if(this.options.responsive){
                $(window).bind("resize", function(_self) {
                    return function() {
                        if(_self.zoomed)
                            _self.zoom(false);
                        return _self._calcSize();
                    }
                }(self));
            }
            this.moved = false;
            this.canTouch =  !!(('ontouchstart' in window) || window.DocumentTouch && document instanceof window.DocumentTouch);

            // start touch position
            this.zoomBy = 1;
            this.pos = {
                start: {'x':0,'y':0},
                last: {'x':0,'y':0},
                cur: {'x':0,'y':0}
            };


            var up = function(){
                var moveit = function(e){
                    self.moved = true;
                    return true;
                };

                var mouseleave = function(e){
                    end();
                    return true;
                };

                var end = function(e){
                    self.pos.cur = self.pos.last;
                    self.mousedown = false;
                    self.parent.off(self.canTouch ? "touchmove" : "mousemove", $.proxy(moveit,self) );
                    if(!self.canTouch){
                        self.parent.off("mouseleave", $.proxy(mouseleave,self) );
                    }
                    self.parent.off(self.canTouch ? "touchend" : "mouseup", $.proxy(end,self) );
                    if(self.moved){
                        return;
                    }

                    return self.toggle(e);
                };
                var start = function(e){
                    if(self.zoomed){
                        e.stopPropagation();
                        e.preventDefault();
                    }

                    self.mousedown = true;
                    var a = self._getEvent(e);
                    self.pos.start = {x: a.pageX, y:a.pageY};
                    setTimeout(function(){
                        self.parent.on(self.canTouch ? "touchmove" : "mousemove", $.proxy(moveit,self) );
                        self.parent.on(self.canTouch ? "touchend" : "mouseup", $.proxy(end,self) );
                    },1);

                    if(!self.canTouch){
                        self.parent.on("mouseleave", $.proxy(mouseleave,self) );
                    }
                    self.moved = false;
                    var time = e.timeStamp;
                    self.startTouchEvent = e;
                    return true;
                };
                self.parent.on(self.canTouch ? "touchstart" : "mousedown", $.proxy(start,self));
            };

            if(this.canTouch){
                if(this.options.activate.touch == "disable")
                    return false;
                if(this.options.activate.touch == "doubleTap"){
                    var timeAllowed = 300,
                        distanceAllowed = 20;

                    this._lastEvent = '';
                    var start = function(e){ 
                        //e.preventDefault();
                        self.parent.on("touchend touchcancel", $.proxy(end,self));
                        this.startTouchEvent = e;
                        var e = this._getEvent(e);
                        self.pos.start = {x: e.pageX, y: e.pageY}
                        e.timeStamp = new Date().getTime();
                        var delta = e.timeStamp - (this._lastEvent && this._lastEvent.timeStamp) || 0,
                            movedTooFar = Math.abs(e.pageX - this._lastEvent.pageX) > distanceAllowed || Math.abs(e.pageY - this._lastEvent.pageY) > distanceAllowed;

                        if (delta < timeAllowed && delta != 0 && !movedTooFar) {
                            this.toggle(this.startTouchEvent);
                        }

                        this._lastEvent = e;
                        return true;
                    };

                    var end = function(e){
                        self.pos.cur = self.pos.last;
                        self.parent.off("touchend touchcancel", $.proxy(end,self));
                    }
                    self.parent.on("touchstart", $.proxy(start,self));
                }else if(this.options.activate.touch == "pinch"){
                    var fingersRequired = 2;
                    this._scale = 1;
                    this._scaled = false;

                    if(this._cycle){
                        this.maxZoom = this.options.zoom[this._cycle.len - 1];
                        this._cycle = false;
                    }else{
                        this.maxZoom = this.options.zoom;
                    }

                    var start = function (e) {
                        self.parent.on('touchcancel touchend', $.proxy(panEnd, self));
                        if (e.originalEvent && e.originalEvent.touches && e.originalEvent.touches[0]) {
                            if(e.originalEvent.touches.length == 1){
                                var ev = self._getEvent(e);
                                self.pos.start = {x: ev.pageX, y: ev.pageY};
                                return true;
                            } else if (e.originalEvent.touches.length != fingersRequired)
                                return true;
                        }

                        e.preventDefault();
                        e.stopPropagation();
                        this.startZoom = this.zoomBy;
                        this.startPos = this.pos.last;
                        this.pos.start = this._getPosition(e.originalEvent.touches);
                        this.pinching = true;
                        this.hasPinchEnded = false;
                        if(!this._scaled)
                            this.o = this._pinchZoomStart(e);

                        this._startDist = this._getDistance(e.originalEvent.touches);
                        this._scale = this._lastScale || this._scale;
                        this.parent.on('touchmove', $.proxy(move, this));
                        this.parent.on('touchcancel touchend', $.proxy(end, this));
                        return true;
                    };

                    var move = function (e) {
                        if (e.originalEvent && e.originalEvent.touches && e.originalEvent.touches[0]) {
                            if (e.originalEvent.touches.length != fingersRequired)
                                return true;
                        }

                        var moveDist = this._getDistance(e.originalEvent.touches),
                            position = this._getPosition(e.originalEvent.touches),
                            scale = moveDist / this._startDist;
                        scale = Math.max(1, Math.min((scale * this._scale), this.maxZoom));
                        this._pinchZoom(e, scale, position, this.o);
                        this._lastScale = scale;
                        this._scaled = true;
                    };

                    var panEnd = function (e) {
                        self.pos.cur = self.pos.last;
                        self.parent.off('touchcancel touchend', $.proxy(panEnd, self));
                    }

                    var end = function (e) {
                        if (e.originalEvent && e.originalEvent.touches) {
                            if (e.originalEvent.touches.length == 0){
                                self.hasPinchEnded = true;
                            }
                        }
                        self.parent.off('touchmove', $.proxy(move, this));
                        if(self.hasPinchEnded){
                            if(this.zoomBy == 1){
                                this.zoomed = false;
                            }
                            self.pinching = false;
                            self.pos.cur = self.pos.last;
                            self.parent.off('touchcancel touchend', $.proxy(end, this));
                        }
                    };
                    self.parent.on("touchstart", $.proxy(start, self));
                }else if(this.options.activate.touch == "none"){
                } else {
                    up();
                }
            }else{
                if(this.options.activate.mouse == "disable")
                    return false;
                if(this.options.activate.mouse == 'over' || this.options.activate.mouse == 'over-noclick' ) {
                    var evstr = 'mouseenter mousedown';
                    if(this.options.activate.mouse == 'over-noclick'){
                        evstr = 'mouseenter';
                    };
                    self.parent.on(evstr, function(e){
                        if(e.type == "mouseenter" && !self.zoomed){
                            return self.toggle(e);
                        }

                        if(e.type == "mousedown"){
                            return self.toggle(e);
                        }
                    });
                    self.parent.on("mouseleave",function(e){
                        return self.zoom(false,e);
                    });
                }else if(this.options.activate.mouse == 'down') {
                    this.options.pan = false;
                    self.parent.on("mousedown", function(e){
                        self.toggle(e)
                    });
                }else if(this.options.activate.mouse == "none"){
                }else{
                   up();
                }
            }

            if(this.options.preload.zoomed == 'created' || (this.canTouch && this.options.activate.touch == "pinch") || this._loadZoomedPromise)
                this.preload();

            this._track("created");
        },
        zoomed: false,
        toggle: function (e,index) {
            this._cycle ?
                this.cycle(e,index) :
                this.zoom(!this.zoomed, e);
        },
        cycle: function(e,index){
            if(this.animating) return;
            if(index!==void 0) {
                this._cycle.current = index
            } else {
                this._cycle.current = this._cycle.current+=1;
            }

            if(!this.options.zoom[this._cycle.current]){
                this._cycle.current = -1;
                this.zoom(false, e);
            }else{
                if(this.map)
                    this.inner.off('mousemove touchmove', $.proxy(this._mapMove,this));
                this.parent.off('mousemove touchmove');
                //this.parent.off('mousemove touchmove', $.proxy(this._parentMove,this));

                this.oldTarget = this.target[0] == this.imgs[this._cycle.current][0] ? null : this.target;
                this.oldZoom = this.options.zoom[this._cycle.current];
                this.target = this.imgs[this._cycle.current];
                this.zoom(true, e);
                this.pos.cur = this.pos.last;
            }
        },
        zoom: function (on, e, bypass) {
            if (on == this.zoomed && !this._cycle && !bypass)
                return;

            this.zoomed = on;
            var self = this;
            if (on) {
                this.box && this.box.show();
                if(!this._zoomLoaded){
                    this._checkLoaded(e);
                    return;
                }

                this.init = false;
                this.moveEvent = this.canTouch ? "touchmove" : "mousemove";
                this.zoomBy = this._cycle ? (this.options.zoom[this._cycle.current] || 1) : this.options.zoom;

                var pw = this.overflow.width(), ph = this.overflow.height(),
                    tw = pw * this.zoomBy, th = ph * this.zoomBy,
                    po = this.parent.offset(), bw = 0, bh = 0, mw = 0, mh = 0,lens = 0;

                if(e === void 0){
                    e = {
                        pageX:pw/2,
                        pageY:ph/2
                    }
                }

                this._track('startMove',{domEvent:e, zoom:this.zoomBy });
                this.parent.removeClass(this.options.states.inactive).addClass(this.options.states.active);
                this.wrapper.css({width: tw, height:th});

                if(this[this.mark.name]){
                    if(this.box){
                        bw = this.box.width();
                        bh = this.box.height();
                        if(this.lens) lens = this._makeLens(this.lens, bw, bh, this.zoomBy, {w:pw, h:ph});
                    }

                    if(this.map){
                        mw = this.map.width();
                        mh = mw*(this.element.height()/this.element.width());
                        this.inner.height(mh);
                        this.inner.width(mw);
                        if(this.lens) lens = this._makeLens(this.lens,  mw, mh, this.zoomBy, {w:mw, h:mh});

                        this._mapEnd = function(e){
                            self.mousedownForMap = false;
                            self.inner.off(self.canTouch ? "touchmove" : "mousemove", $.proxy(self._mapMove,self));
                            self.inner.off(self.canTouch ? "touchend" : "mouseup", $.proxy(self._mapEnd,self));

                        };

                        this._mapMove = function(e){
                            if( self.mousedownForMap)
                            self._mouseMove(self._getEvent(e), pw, ph, tw, th, self.map.offset(), bw, bh, mw, mh, lens, true);
                        };

                        this._mapStart = function(e) {
                            e.preventDefault();
                            e.stopPropagation();
                            self.mousedownForMap = true;
                            self._mouseMove(self._getEvent(e), pw, ph, tw, th, self.map.offset(), bw, bh, mw, mh, lens, true);
                            this.inner.on(self.canTouch ? "touchmove" : "mousemove", $.proxy(self._mapMove,self));
                            this.inner.on(self.canTouch ? "touchend" : "mouseup", $.proxy(self._mapEnd,self));
                        };
                        this.inner.on("mouseleave", $.proxy(self._mapEnd,self));
                        this.inner.on(self.canTouch ? "touchstart" : "mousedown", $.proxy(this._mapStart,self));
                    }

                    this[this.mark.name].show();
                    this[this.mark.inner].show();
                    this[this.mark.inner].removeClass(this.options.states.inactive).addClass(this.options.states.active);
                }

                 this._parentMove = function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    self._mouseMove(self._getEvent(e), pw, ph, tw, th, po, bw, bh, mw, mh, lens);
                 };
                 this.parent.on(this.moveEvent, $.proxy(self._parentMove,self));
                 this._mouseMove(self._getEvent(e), pw, ph, tw, th, po, bw, bh, mw, mh, lens);
                 this._setZoomCursor(self.lens ? self.lens : self.parent);

                 if(this.options.fade) {
                    this.animating = true;
                    this.target.animate({opacity:1},{
                        complete:function(){
                            if(self.canHideEl) self.element.css({opacity:1});
                            self.animating = false;
                            if(self.oldTarget){
                                self.oldTarget.css(reset);
                            }
                        }
                    });
                }else{
                    this.target.css({opacity:1});
                    if(self.canHideEl) this.element.css({opacity:1});
                    if(self.oldTarget){
                        self.oldTarget.css(reset);
                    }
                }

                this.lens && this.lens.show();
                this._track('zoomedIn', {domEvent:e, zoom:this.zoomBy });
            } else {
                this.init = false;
                this._track('stopMove',{domEvent:e});
                this.pos = {
                    start: {'x':0,'y':0},
                    last: {'x':0,'y':0},
                    cur: {'x':0,'y':0}
                };

                this.target.css(reset);
                clearInterval(self.interval);
                if(this.options.fade)
                    this.target.stop();

                if(this[this.mark.name]){
                    this[this.mark.name].hide();
                    this[this.mark.inner].hide();
                    this[this.mark.inner].removeClass(this.options.states.active).addClass(this.options.states.inactive);

                    if(this.map){
                        this.inner.off("mouseleave", $.proxy(self._mapEnd,self));
                        this.inner.off(self.canTouch ? "touchstart" : "mousedown", $.proxy(this._mapStart,self));
                    }
                }

                if(this.canHideEl)
                    this.element.css({opacity:1});

                if(this._cycle){
                    this._cycle.current = -1;
                }

                this.lens && this.lens.hide();

                if(this.moveEvent&&$.proxy(this._parentMove, this) ) {
                    this.parent.off(this.moveEvent, $.proxy(this._parentMove, this));
                }
                this.wrapper.css({width: '', height:''});
                this._setCursor(this.options.cursor.inactive, this.parent);
                this.parent.removeClass(this.options.states.active).addClass(this.options.states.inactive);
                this._track('zoomedOut', e);
            }
        },
        _getEvent: function(e) {
            if(e && e.type == "touchend") {
                e = this.startTouchEvent;
            }
            if(e && e.originalEvent && e.originalEvent.touches && e.originalEvent.touches[0] ) {
                e = e.originalEvent.touches[0];
            }
            return e;
        },
        load: function(option){
            this._loadImage();
        },
        visible: function(visible) {
            if (this._visible == visible){
                if(visible == this._zoomVisible)
                    return;

                if(visible && this.options.preload.zoomed == 'visible'){
                    this._loadZoomed();
                    this._zoomVisible = visible;
                }
                return;
            }

            if (visible) {
                if(this.options.preload.image == 'visible'){
                    this._loadImage();
                }

                if(this.options.preload.zoomed == 'visible'){
                    this._loadZoomed();
                    this._zoomVisible = visible;
                }
                this._calcSize();
            } else {
                this.zoom(false);
            }

            this._track('visible',{'visible':visible});
            this._visible = visible;
        },
        preload:function() {
            this._loadZoomed();
        },
        _makeLens:function(lens, rw, rh, zoom, limit){
            var o = { lw:rw / zoom, lh:rh / zoom,  lwh:0,  lhh:0,  dl:0,  dt:0};
            lens.width(o.lw);
            lens.height(o.lh);
            o.dl = (lens.outerWidth(true)-o.lw);
            o.dt = (lens.outerHeight(true)-o.lh);

            if(o.lw + o.dl > limit.w)
                o.lw = limit.w - o.dl;

            if(o.lh + o.dt > limit.h)
                o.lh = limit.h - o.dt;

            lens.width(o.lw);
            lens.height(o.lh);
            o.lwh = o.lw/2;
            o.lhh = o.lh/2;
            o.dlh = o.dl/2;
            o.dth = o.dt/2;
            return o;
        },
        _loadZoomed: function(){
            if(!this._imageLoaded){
                if(this.options.preload.zoomed != 'none')
                    this._loadZoomedPromise = true;
                this._loadImage();
                return;
            }
 
            if(this._zoomLoaded || this._zoomLoading)
                return;

            var self = this;
            this._zoomLoading = true;
            this._zoomLoaded = false;
            this._toLoadCount = this.imgs.length;
            this._zoomLoadedCount = 0;

            this._track('startPreload');
            var onLoad = function(e){
                self._zoomLoadedCount++;
                if(self._zoomLoadedCount == self._toLoadCount){
                    self._zoomLoaded = true;
                    self._zoomLoading = false;
                    self.loading.hide();
                    self._track('preloaded');
                    self._calcSize();
                }
            };

            $.each(this.imgs, function(i,el){
                el.on('load', onLoad);
                el[0].src = self._getUrl(self.options.zoom[i]);
            });

        },
        _checkLoaded: function(e){
            var self = this, opacitySet = false;
            if(!this._zoomLoading)
                this._loadZoomed();
            clearInterval(this.interval);
            this.interval = setInterval(function(){
                if(self._zoomLoaded){
                    clearInterval(self.interval);
                    self.zoom(self.zoomed, e, true);
                }else if(self._zoomLoading && !opacitySet){
                    if(self.canHideEl)
                        self.element.css({opacity:0});
                    opacitySet = true;
                }
            },50)
        },
        _pinchZoomStart: function(e){
            var self = this;
            this.zoomed = true;
            if(this.options.fade) {
                this.target.animate({opacity:1});
            }else{
                this.target.css({opacity:1});
            }
            this.target.show();

            var o = {pw:this.overflow.width(), ph: this.overflow.height(), po: this.parent.offset(), mw:0, mh:0, lens:null};
            o.tw = o.pw * 1, o.th = o.ph * 1;

            this.wrapper.css({width: this.overflow.width(), height: this.overflow.height()});
            if(this.map){
                o.mw = this.map.width(),
                o.mh =  o.mw*(this.element.height()/this.element.width());
                o.mo =  this.map.offset();
                this.inner.height(o.mh)
                this.map.show();
                if(this.lens)
                    o.lens = this._makeLens(this.lens, o.mw, o.mh, 1, {w: o.mw, h: o.mh});

                this._mapEnd = function(e){
                    self.inner.off("touchmove", $.proxy(self._mapMove,self));
                    self.inner.off("touchend", $.proxy(self._mapEnd,self));
                }

                this._mapMove = function(e){
                    e.preventDefault();
                    e.stopPropagation();
                    self._mouseMove(self._getEvent(e), o.pw, o.ph, o.tw, o.th,self.map.offset(), null,null, o.mw, o.mh, o.lens, true);
                }

                this._mapStart = function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    self._mouseMove(self._getEvent(e), o.pw, o.ph, o.tw, o.th,self.map.offset(), null,null, o.mw, o.mh, o.lens, true);
                    this.inner.on("touchmove",  $.proxy(self._mapMove,self));
                    this.inner.on("touchend", $.proxy(self._mapEnd,self));
                }
                this.inner.on("touchstart", $.proxy(this._mapStart,this));
                this.inner.removeClass(this.options.states.inactive).addClass(this.options.states.active);
                this.inner.show();
                this.lens && this.lens.show();
            }

            this._parentMove = function(e) {

                if(!self.hasPinchEnded){
                    e.stopPropagation();
                    return true;
                }
                if (e.originalEvent && e.originalEvent.touches && e.originalEvent.touches[0]) {
                    if (e.originalEvent.touches.length != 1)
                        return true;
                }

                e.preventDefault();
                if(this.zoomBy!==1) {
                    e.stopPropagation();
                }
                self._mouseMove(self._getEvent(e), o.pw, o.ph, o.tw, o.th, o.po, null, null, o.mw, o.mh, o.lens);
            };
            this.parent.on('touchmove', $.proxy(this._parentMove,this));
            return o;
        },
        _pinchZoom: function (e, scale, center, o) {
            if(scale == this.maxZoom){
                this._track('maxZoom', {domEvent:e, scale:scale, center:center});
            }else if(scale == 1){
                this._track('minZoom', {domEvent:e, scale:scale, center:center});
            }

            o.tw = o.pw * scale;
            o.th = o.ph * scale;
            this.zoomBy = scale;
            this.wrapper.css({width: o.tw, height: o.th});
            if(this.lens)
                o.lens = this._makeLens(this.lens, o.mw, o.mh, scale, {w: o.mw, h: o.mh});

            this._mouseMove({currentTarget:e.currentTarget, pageX:center.x, pageY:center.y}, o.pw, o.ph, o.tw, o.th, o.po, null, null, o.mw, o.mh, o.lens);
        },
        _mouseMove: function (e, pw, ph, tw, th, po, bw, bh, mw, mh, l, mapIsTarget){
            var dw = bw ? (tw - pw) + (pw - bw) : tw - pw,
                dh = bh ? (th - ph) + (ph - bh) : th - ph,
                mx, my, x, y, limited;

            if(this.init && this.options.pan){
                if(this.mousedown || this.canTouch || mapIsTarget){
                    if(!this.pinching){
                        this.panning = true;
                        var dx = (this.pos.start.x - e.pageX),
                            dy = (this.pos.start.y - e.pageY);
                        x = dx + this.pos.cur.x;
                        y = dy + this.pos.cur.y;
                        mx = (x+(pw/2))/(tw/pw);
                        my = (y+(ph/2))/(th/ph);
                    }else{
                        mx = (this.startPos.x+(this.pos.start.x - po.left))/this.startZoom;
                        my = (this.startPos.y+(this.pos.start.y - po.top))/this.startZoom;
                        x = (dw * (mx / pw));
                        y = (dh * (my / ph));
                    }
                }else{
                    this.panning = false;
                    return;
                }
            }else{
                this.init = true;
                this.panning = false;
                mx = e.pageX - po.left;
                my = e.pageY - po.top;
                x = dw * (mx / pw);
                y = dh * (my / ph);
                this.pos.cur.x = this.pos.last.x || x;
                this.pos.cur.y = this.pos.last.y || y;
            }

            if(this.lens){
                if(this.box){
                    if(this.box[0].lastChild.relatedUUID != this.uuid){
                        this.box.append(this.wrapper);
                        this.wrapper.show().siblings().hide();
                    }
                    var lx = pw, ly = ph;
                    var tmx = mx - l.lwh - l.dlh, tmy = my - l.lhh - l.dth;
                    x = ((tmx + l.dlh) * this.zoomBy - ((l.lw)/pw));
                    y = ((tmy + l.dth) * this.zoomBy - ((l.lh)/ph));
                    limited = this._setBounds(mx, my, pw, ph, 0, 0);
                    mx = limited.x;
                    my = limited.y;

                } else if (mapIsTarget){
                    if(this.panning){
                        mx = e.pageX - po.left;
                        my = e.pageY - po.top;
                    }

                    var lx = mw, ly = mh;
                    var tmx = mx - l.lwh - l.dlh, tmy = my - l.lhh - l.dth;
                    x = ((tmx + l.dlh) * this.zoomBy - ((l.lw)/pw)) * pw/mw;
                    y = ((tmy + l.dth) * this.zoomBy - ((l.lh)/ph)) * ph/mh;
                    this.pos.cur = {'x':x,'y':y};

                } else if (this.map){
                    if(this.map[0].lastChild.relatedUUID != this.uuid){
                        this.map.append(this.inner);
                        this.inner.show().siblings().hide();
                    }

                    if(!this.panning){
                        var rx = mx/(pw/l.lw), ry = my/(ph/l.lh),
                            tmx = (mx/(pw/mw))-rx-l.dlh, tmy = (my/(ph/mh))-ry-l.dth;
                    }else{
                        var tmx = (mx/(pw/mw)) - l.lwh - l.dth;
                        tmy = (my/(ph/mh)) - l.lhh - l.dth;
                    }

                    limited = this._setBounds(tmx, tmy, mw - l.lw - l.dl, mh - l.lh - l.dt, 0, 0);
                    tmx = limited.x;
                    tmy = limited.y;
                }

                if(this.box || mapIsTarget){
                    if(mx + l.lwh + l.dlh >= lx) tmx = lx - l.lw - l.dl;
                    if(my + l.lhh + l.dth >= ly) tmy = ly - l.lh - l.dt;
                    if(mx - l.lwh - l.dlh <= 0) tmx = 0;
                    if(my - l.lhh - l.dth <= 0) tmy = 0;
                }

                this.lens.css({'top': tmy + 'px', 'left': tmx + 'px'});
            }

            limited = this._setBounds(x, y, dw, dh, 0, 0);
            x = limited.x;
            y = limited.y;

            this.pos.last = {'x':x,'y':y};
            this.lastPos = {'x':x,'y':y};
            if(this.oldTarget)
                this.oldTarget.css({'top': -y + 'px', 'left': -x + 'px'});
            this.target.css({'top': -y + 'px', 'left': -x + 'px'});
            this._track('move',{domEvent:e,pos:{x:(mx / pw),y:(my / ph)}});
        },
        _calcSize: function() {
            var w,h;
            if ((this.options.responsive) && (this.options.width && this.options.height && this.options.width!='auto' && this.options.height!='auto')) {
                w = this.element.width();
                h = w*(this.options.height/this.options.width);
                this.parent.height(h);
                this.overflow.height(h);
                if(this.element.height() != 0 && h > this.element.height()){
                    this.overflow.height(this.element.height())
                }
            } else {
                if (this.options.width) {
                    this.parent.width(this.options.width);
                }
                if (this.options.height) {
                    this.parent.height(this.options.height);
                }
            }

            if(this.map){
                var mw = this.map.width();
                var mh =  mw*(this.element.height()/this.element.width());
                this.inner.height(mh)
            }
        },
        _getUrl: function(current){
            if(this.options.url)
                return this.options.url;

            var url = this.element.attr('src') || this.element.attr('data-amp-src');
            if(!url) return;

            var zoomBy = this._cycle ? (current || 1) : this.options.zoom;
            url = this._cleanUrl(url);
            var transform = this.options.transforms;
            if(this._cycle) {
                var index = $.inArray(current, this.options.zoom);
                transform = transform[index];
            }
            url = transform ? this._setTransforms(url, transform) : url; 
            url = this._setWidth(url, {h:this._originalImage.height * zoomBy, w:this._originalImage.width * zoomBy});
            return url;
        },
        _getWidth: function(url){
            if(window.amp && amp.di)
                return amp.di.width(url);

            var url = url.split("?");
            if(!url[1]) return false;
            var options = url[1].split('&');
            for (var i=0; i<options.length;i++){
                var parts = options[i].split('='), optionsObj = {};
                if(parts[0] == "w") {
                    return parseInt(parts[1]);
                }
            }
            return false;
        },
        _setWidth: function(url, width){
            if(window.amp && amp.di)
                return amp.di.set(url, width);

            var url = url.split("?");

            if(url[1]){
                var options = url[1].split('&'),
                    params = [];

                for (var i=0; i<options.length;i++){
                    var parts = options[i].split('='), optionsObj = {};
                    if(parts[0] != "w"){
                        optionsObj[parts[0]] = parts[1];
                        params.push($.param(optionsObj));
                    }
                }
                params = params.concat($.param(width));
                return url[0] +"?"+ params.join("&");
            }

            return url[0] +"?"+ $.param(width);
        },
        // removing everything
        _cleanUrl:function(url){
            var u = url.split('?');
            return u[0];
        },
        _loadImage:function(){ 
            if(this._imageLoaded || this._imageLoading)
                return;

            this.loading = $('<div class="amp-loading"></div>');
            this._imageLoading = true;
            var src = this.element[0].src || this.element.attr('data-amp-src');
            this.element.on('load', $.proxy(this._onImageLoad,this));
            this.element[0].src = '';
            this.element[0].src = src;
        },
        _getNaturalSize:function(src){ 
            return {width: this.element[0].naturalWidth, height: this.element[0].naturalHeight};
        },
        _setTransforms: function(url, transforms){
            if(url.indexOf('?')==-1) {
                return url+'?'+transforms;
            } else {
                return url+'&'+transforms;
            }
        },
        _setBounds: function(x, y, r, b, l, t){
            if(x >= r) x = r;
            if(y >= b) y = b;
            if(x <= l) x = l;
            if(y <= t) y = t;
            return {
                x:x, y:y
            }
        },
        _track: function(event,value) {
            this._trigger( event, null, value );
            if(window.amp && amp.stats && amp.stats.event){
                amp.stats.event(this.element,'zoom',event,value);
            }
        },
        _setCursor: function(cursorStyle, el){
            if(typeof cursorStyle != "string")
                cursorStyle = "auto"

            if(cursorStyle.indexOf('zoom') < 0){
                el.css('cursor', cursorStyle);
                return false;
            }
            // zoom
            //TODO: This won't survive minification. We probably don't need it anyway, it should be easier to just detect IE8+
            if (/*@cc_on!@*/false || !!document.documentMode){ return false; }     // ie bye bye
            if(typeof InstallTrigger !== 'undefined'){        // moz
                el.css('cursor', '-moz-' + cursorStyle);
            }
            if(!!window.chrome){     // chrome + opera
                el.css('cursor', '-webkit-' + cursorStyle);
            }
        },
        _setZoomCursor: function(el) {
            var zoomLevels = this.options.zoom;

            if (zoomLevels.length) {
                // we have multiple zoom levels, set the zoom cursor according to where we are in the cycle
                var zoomIndex = zoomLevels.indexOf(this.zoomBy);

                if (zoomIndex === zoomLevels.length - 1) {
                    this._setCursor(this.options.cursor.active, el);
                } else {
                    this._setCursor(this.options.cursor.inactive, el);
                }

            } else {
                // we have single level zoom, set the zoom cursor according to whether we are in zoom or not
                if (this.zoomBy > 1) {
                    this._setCursor(this.options.cursor.active, el);
                } else {
                    this._setCursor(this.options.cursor.inactive, el);
                }
            }
        },
        _getDistance:function(t){
            var x = Math.abs(t[0].pageX-t[1].pageX),
                y = Math.abs(t[0].pageY-t[1].pageY);
            return Math.sqrt(
                (x * x) + (y * y)
            );
        },
        _getPosition:function(t){
            return {
                x:(t[0].pageX + t[1].pageX)/2,
                y:(t[0].pageY + t[1].pageY)/2
            };
        },
        _destroy: function() {
            this.element.unwrap().unwrap();
            this.wrapper.remove();
            this.element.removeClass('amp');
            this.element.removeClass('amp-zoom');
            this.element.removeClass(this.options.states.active);
            this.element.removeClass(this.options.states.inactive);
            this.element.css({'cursor':'', 'height':'', 'max-width':'','width':'', 'opacity':'', 'position':'', 'display':'','top':'',left:'',zoom:''});
            this._removeEmptyAttributeHelper(this.element);
        },
        _removeEmptyAttributeHelper:function(elm, attsToCleanIfEmpty){
            var attArr = attsToCleanIfEmpty || ['class','style'];
            for (var i= 0,len=attArr.length;i<len;i++ ) {
                if(!(elm.attr(attArr[i]) && elm.prop(attArr[i]))){
                    elm.removeAttr(attArr[i]);
                }
            }
        }
    });

}(jQuery));
(function ($) {

    $.widget("amp.ampZoomInline", {
        // Default options.
        options: {
            // the max size for the image to go up to
            scaleMax: 3,
            // the scale multiplier to apply to the image
            scaleStep: 0.5,
            // toggle the zoom or not, needed when we are using the same mouse event to zoom in and out
            scaleSteps: false,
            scaleProcess: false,
            events:{
                zoomIn:'mouseup touchstart',
                zoomOut:'mouseup touchend',
                move:'mousemove touchmove'
            },
            stopPropagation:'',
            activation:{
                inGesture:true
            },
            pinch:false,
            transforms:'',
            // created, visible, none
            preload:'none',
            pan:false

        },
        _getCreateOptions:function(){
            var attributes = this.element.data().ampZoomInline;
            if (attributes) {
                return $.extend(true, {}, this.options, attributes);
            }
            return this.options;
        },
        _create: function () {
            var self = this;
            this.scale = 1;
            this.element.addClass('amp amp-zoom');
            this.$parent = this.element.parent();
            this._invalidateParentSize();
            this.element.on(this.options.events.zoomIn,$.proxy(this.zoomIn,this));
            if(!this.options.activation.inGesture){
                this.gestureDetect = new gestureDetector(this.element);
            }
            this._track("created");
            if(this.options.preload=='created') {
                this.load();
            }
            if(this.options.pan) {
                $(document).on("dragstart", function() {
                    return false;
                });

                this.element.parent().on('mousedown touchstart',$.proxy(function(e){
                    this._touchmove = false;
                    // are we panning? if so don't let mousedown trigger anything else
                    if(this.scale>1) {
                        e.stopPropagation();
                    }
                    if(this.panner) {
                        this.panner.remove();
                        delete this.panner;
                    }
                    if(this.scale>1) {
                        this.panner = new pan(this,e,$.proxy(function(x,y){
                            if(this.zoomArea){
                                this.zoomArea.setPosition(x,y);
                            }
                        },this));
                    }
                    return true;
                },this));
            }
            if(this.options.pinch) {
                this.element.parent().on('touchstart',$.proxy(function(e){
                    this_touchmove = false;
                    if(this.pincher) {
                        this.pincher.remove();
                        delete this.pincher;
                    }
//                    if(e.originalEvent && e.originalEvent.touches && e.originalEvent.touches.length>1){
//                        this._getPercentagePos(e);
//                        if(this.zoomArea){
//                        }
//                    }
                    this.pincher = new pinch(e,$.proxy(function(){
                        this.zoomIn();
                    },this),$.proxy(function(){
                        this.zoomOut();
                    },this));
                    return true;
                },this));
            }
            if(this.options.stopPropagation!=='') {
                this.element.parent().on(this.options.stopPropagation, $.proxy(function(e){
                    if(this.scale!=1){
                        e.stopPropagation();
                    }
                },this))
            }
        },


        visible: function(visible) {
            if (this._visible == visible) {
                return;
            }

            if (visible) {
                if(this.options.preload=='visible') {
                    this.load();
                }
            } else {
                if(!this.options.preventVisibleZoomOut){
                    this.zoomOutFull();
                }
            }

            this._track('visible',{'visible':visible});
            this._visible = visible;
        },
        load:function(){
            this._setupZoomArea().then($.proxy(function(area){
                this.zoomArea.allowClone = true;
                area.setScale(this.options.zoom);
            },this))
        },
        _setupZoomArea: function(){
            return new Promise($.proxy(function(resolve, reject) {
                if (!this.zoomArea) {
                    this.getImageSize().then($.proxy(function (size) {
                        if (!size.error) {
                            var self = this;
                            var img = new Image();
                            img.src = this.element.attr('src');
                            var $loading = $('<div class="amp-loading"></div>');
                            this.$parent.append($loading);
                            this.zoomArea = new zoomArea(this.element, this.$parent, size, this.options.transforms, this.options);

                            img.onload = function(){
                                $loading.remove();
                                resolve(self.zoomArea);
                            }
                        } else {
                            reject(false);
                        }
                    },this));
                } else {
                    resolve(this.zoomArea);
                }
            },this));
        },
        getImageSize : function(){
            return new Promise($.proxy(function(resolve, reject) {
                if(this.element[0].naturalWidth && this.element[0].naturalHeight) {
                    resolve({'x':this.element[0].naturalWidth,'y':this.element[0].naturalHeight});
                } else {
                    if(this.element[0].width && this.element[0].height) {
                        resolve({'x':this.element[0].width,'y':this.element[0].height});
                    }
                }
                this.element.on('load',$.proxy(function(){
                    if(this.element[0].naturalWidth && this.element[0].naturalHeight) {
                        resolve({'x':this.element[0].naturalWidth,'y':this.element[0].naturalHeight});
                    } else {
                        if(this.element[0].width && this.element[0].height) {
                            resolve({'x':this.element[0].width,'y':this.element[0].height});
                        }
                    }
                },this));

                this.element.on('error',$.proxy(function(){
                    reject({'error':true});
                },this));
            },this));
        },
        _invalidateParentSize : function(){
            this.parentSize = {"x":this.$parent.width(),"y":this.$parent.height()};
        },

        state: function() {
            return {
                scale: this.scale,
                scaleMax:this.options.scaleMax,
                scaleStep:this.options.scaleStep
            };
        },

        zoomInFull:function(e) {
            this.setScale(this.options.scaleMax);
            this._track('zoomedInFull',{domEvent:e,scale:this.options.scaleMax,scaleMax:this.options.scaleMax,scaleStep:this.options.scaleStep});
        },

        zoomIn: function (e) {
            var self = this;
            if (!self.zoomArea) {
                self._setupZoomArea().then(function(area){
                    if(!area){
                        return;
                    }
                    self.zoomIn(e);
                });
                return false;
            }
            if(!this.options.scaleSteps){
                if(this.scale != 1){
                    return;
                }
            }
            if(e) {
                e.preventDefault();
            }
            if(!this.options.activation.inGesture){
                if (this.gestureDetect.detected) {
                    return;
                }
            }

            if (self.zoomArea && self.zoomArea.animating) {
                return;
            }

            if(this.scale == this.options.scaleMax) {
                if (this.options.events.zoomIn) {
                    self.zoomArea.$container.off(this.options.events.zoomIn,this.zoomIn);
                    self.isZoomIn = false;
                }
            }

            var currScale = this.scale;

            if(this.options.scaleSteps) {
                this.scale+=this.options.scaleStep;
                this.scale = Math.min(this.scale,this.options.scaleMax);
            } else {
                this.scale = this.options.scaleMax;
            }

            if(currScale == this.scale) {
                return;
            }
            this._track('zoomedIn',{domEvent:e,scale:this.scale,scaleMax:this.options.scaleMax,scaleStep:this.options.scaleStep});
            this.setScale(this.scale).then(function(){
                // need to take these outside of execution because if we have the same event for zoomIn and zoomOut both would trigger due to bubbling
                setTimeout($.proxy(function(){
                    if (!self.isMoveOn  && self.options.events.move) {
                        self.zoomArea.$container.on(this.options.events.move, $.proxy(self._setPos,self));
                        self.isMoveOn = true;
                    }
                    if (self.options.scaleProcess) {
                        if(!self.options.scaleSteps || self.scale == self.options.scaleMax) {
                            self.zoomArea.$container.on(self.options.events.zoomOut, $.proxy(self.zoomOut, self));
                        } else {
                            if (!self.isZoomIn) {
                                self.zoomArea.$container.on(this.options.events.zoomIn,$.proxy(self.zoomIn,self));
                                self.isZoomIn = true;
                            }
                        }
                    } else {
                        if(!self.options.scaleSteps) { // put inside the if as if we use steps we don't want it to zoom out (mostly for spin)
                            self.zoomArea.$container.on(self.options.events.zoomOut, $.proxy(self.zoomOut, self));
                        }
                    }

                },self),500);
            });

        },

        zoomInClick: function (e) {
            if(!this.options.activation.inGesture){
                if (this.gestureDetect.detected) {
                    return;
                }
            }
            var currScale = this.scale;
            this.scale+=this.options.scaleStep;
            this.scale = Math.min(this.scale,this.options.scaleMax);
            if(currScale == this.scale) {
                return;
            }
            this._track('zoomedIn',{domEvent:e,scale:this.scale,scaleMax:this.options.scaleMax,scaleStep:this.options.scaleStep});
            this.setScale(this.scale);
            // need to take these outside of execution because if we have the same event for zoomIn and zoomOut both would trigger due to bubbling
            setTimeout($.proxy(function(){
                self.zoomArea.$container.on(this.options.events.move, $.proxy(this._setPos,this));
            },this),1);
        },

        setScale : function(s) {
            this.scale = s;
            return this._setupZoomArea().then($.proxy(function(area){
                if(!area){
                    return;
                }
                area.setScale(this.scale);
                this._invalidateParentSize();
//                this._setPos(e);

            },this));
        },
        _setPos : function(e){
            if(e.type === 'touchmove'){
                this._touchmove = true;
            }
            this._track('settingPos',{domEvent:e});
            var pos = e?this._getPercentagePos(e):{x:0.5,y:0.5};
            this.zoomArea.setPosition(pos.x,pos.y)
        },
        zoomOut:function(e) {
            this.zoomArea.allowClone = false;
            if(this._touchmove) {
                return false;
            }

            if (this.zoomArea && this.zoomArea.animating) {
                return;
            }

            var currScale = this.scale;
            if(this.options.scaleSteps) {
                this.scale -= this.options.scaleStep;
                this.scale = Math.max(this.scale, 1);
            } else {
                this.scale = 1;
            }
            if(currScale == this.scale) {
                return;
            }
            if(this.scale == 1) {
                if (this.options.events.move) {
                    this.zoomArea.$container.off(this.options.events.move, this._setPos);
                    this.isMoveOn = false;
                }

                if (this.options.events.zoomOut) {
                    this.zoomArea.$container.off(this.options.events.zoomOut,this.zoomOut);
                }
            }

            this.zoomArea.setScale(this.scale);
            this._track('zoomedOut',{domEvent:e,scale:this.scale,scaleMax:this.options.scaleMax,scaleStep:this.options.scaleStep});
        },

        zoomOutFull:function(e) {
            if (!this.zoomArea) {
                return;
            }
            if (this.options.events.move) {
                self.zoomArea.$container.off(this.options.events.move, this._setPos);
            }

            if (this.options.events.zoomOut) {
                self.zoomArea.$container.off(this.options.events.zoomOut,this.zoomOut);
            }

            this.scale = 1;

            this.zoomArea.setScale(1);
            this._track('zoomedOutFull',{domEvent:e,scale:this.scale,scaleMax:this.options.scaleMax,scaleStep:this.options.scaleStep});
        },
        // Convert touch event into a standard event
        _convertEvent:function(e) {
            if (e.originalEvent && e.originalEvent.touches && e.originalEvent.touches[0]) {
                // stop stupid device behaviour
                e.preventDefault();
                e = e.originalEvent.touches[0];
            }
            return(e);
        },
        _getPercentagePos:function(e){
            e = this._convertEvent(e);
            var offset = this.$parent.offset();
            return {"x": (e.pageX-offset.left)/this.parentSize.x,"y":(e.pageY-offset.top)/this.parentSize.y};
        },

        _track: function(event,value) {
            this._trigger( event, null, value );
            if(window.amp && amp.stats && amp.stats.event){
                amp.stats.event(this.element,'zoom',event,value);
            }
        },
        _destroy: function() {
            this.element.removeClass('amp');
            this.element.removeClass('amp-zoom');
            this._removeEmptyAttributeHelper(this.element);
        },
        _removeEmptyAttributeHelper:function(elm, attsToCleanIfEmpty){
            var attArr = attsToCleanIfEmpty || ['class','style'];
            for (var i= 0,len=attArr.length;i<len;i++ ) {
                if(!(elm.attr(attArr[i]) && elm.prop(attArr[i]))){
                    elm.removeAttr(attArr[i]);
                }
            }
        }
    });

    var gestureDetector = function(toleranceX,toleranceY){
        this.toleranceX = toleranceX!==undefined?toleranceX:0;
        this.toleranceY = toleranceY!==undefined?toleranceY:0;
        this.detected = false;
        this.$document = $('body');
        this.$document.on('mousedown touchstart',$.proxy(this.startDetecting,this));
    };

    // Convert touch event into a standard event
    gestureDetector.prototype.convertEvent = function(e) {
        if (e.originalEvent && e.originalEvent.touches && e.originalEvent.touches[0]) {
            e = e.originalEvent.touches[0];
        }
        return(e);
    };

    gestureDetector.prototype.startDetecting = function(e) {
        this.detected = false;
        this.$document.on('mousemove touchmove', $.proxy(this.moveDetected,this));
        this.$document.on('mouseup touchend', $.proxy(this.stopDetecting,this));
    };

    gestureDetector.prototype.moveDetected = function(e) {
        this.detected = true;
    };

    gestureDetector.prototype.stopDetecting = function(e) {
        this.$document.off('mousemove touchmove',this.moveDetected);
        this.$document.off('mouseup touchend',this.stopDetecting);
    };

    var pinch = function(e,cbIn,cbOut) {
        // pixel value at which to use callbacks
        this.threshold = 100;
        e = this.getFingers(e);
        this.cbIn = cbIn;
        this.cbOut = cbOut;
        if(e.length==2){
            this.start = this.getDistance(e);
            $(document).on('touchmove', $.proxy(this.move,this));
            $(document).on('touchend', $.proxy(this.end,this));
        }
    };

    pinch.prototype.getDistance = function(touches){
        var x = Math.abs(touches[0].pageX-touches[1].pageX),
            y = Math.abs(touches[0].pageY-touches[1].pageY);
        return Math.sqrt(
            (x * x) + (y * y)
        );
    };

    pinch.prototype.move = function(e) {
        e.preventDefault();
        e = this.getFingers(e);
        var newDistance = this.getDistance(e);
        var distance = (newDistance - this.start);
        if(distance > this.threshold) {
            this.cbIn();
            this.start = newDistance;
        }

        if(distance < 0-this.threshold) {
            this.cbOut();
            this.start = newDistance;
        }
    };

    pinch.prototype.remove = function(){
        this.end();
    };

    pinch.prototype.end = function(e){
        $(document).off('mousemove touchmove',this.move);
        $(document).off('mouseup touchend',this.end);
    };
    // get touch event stuff
    pinch.prototype.getFingers = function(e) {
        if (e.originalEvent && e.originalEvent.touches) {
            e = e.originalEvent.touches;
        }
        return(e);
    };

    var pan = function(zoom,e,cb) {
        if(this.multiFinger(e)){
            return;
        }
        e = this.convertEvent(e);
        this.start = {'x': e.pageX, 'y': e.pageY};
        this.zoomArea = zoom.zoomArea;
        this.cb = cb;
        this.element = zoom.element;
        if(!this.zoomArea.newSize){
            this.zoomArea.newSize = {'x':this.zoomArea.$source.width(), 'y':this.zoomArea.$source.height()};
        }
        this.currentPixPos = this.zoomArea.getPixPos();
        $(document).on('mousemove touchmove', $.proxy(this.move,this));
        $(document).on('mouseup touchend', $.proxy(this.end,this));
    };

    pan.prototype.move = function(e) {
        e.preventDefault();
        e = this.convertEvent(e);
        var offsetX = e.pageX - this.start.x;
        var offsetY = e.pageY - this.start.y;
        var newPos = this.zoomArea.getPercentFromPos(this.currentPixPos.x + offsetX, this.currentPixPos.y + offsetY);
        this.cb(newPos.x,newPos.y);
    };

    pan.prototype.end = function(e){
        $(document).off('mousemove touchmove',this.move);
        $(document).off('mouseup touchend',this.end);
    };

    pan.prototype.remove = function(){
        this.end();
    };

    // Convert touch event into a standard event
    pan.prototype.multiFinger = function(e) {
        return(e.originalEvent && e.originalEvent.touches && e.originalEvent.touches.length>1);
    };

    // Convert touch event into a standard event
    pan.prototype.convertEvent = function(e) {
        if (e.originalEvent && e.originalEvent.touches && e.originalEvent.touches[0]) {
            e = e.originalEvent.touches[0];
        }
        return(e);
    };


    var zoomArea = function($source,$area,originalSize,transforms, options) {
        this.options = options;
        this.animating = false;
        this._allowChangeClone = true;
        this.isFF = navigator.userAgent.toLowerCase().search("firefox") > -1;
        this.transforms = transforms;
        this.initialSrc = $source[0].src;
        this.scale = 1;
        this.$area = $area;
        this.$source = $source;
        this.originalSize = originalSize;
        this.posPercentageX = 0.5;
        this.posPercentageY = 0.5;
        this.createContainer();
        this.hide();
    };

    zoomArea.prototype.getPercentagePosWithScale = function(e) {
//        this.newSize.x
    };

    zoomArea.prototype.createContainer = function() {
        var self = this;
        this.$container = $('<div class="amp-zoomed-container"></div>');
        this.$preloader = new Image();
        $(this.$preloader).on('load', function(){
            //Assign preloader loaded Boolean to true
            self._preloaderImgLoaded = true;
            if (self.allowClone && !self.animating) {
                self.updateImageSrc(true);
            }
        });
        this.$zoomed = $('<img class="amp-zoomed" style="z-index:2;" src=""/>');
        this.$zoomedClone = $('<img class="amp-zoomed-clone" style="z-index:2;" src=""/>');
        this.$container.append(this.$zoomedClone);
        this.$container.append(this.$zoomed);
        this.$area.append(this.$container);
        this.$container.css({
            position:'absolute',
            top:0,
            left:0,
            bottom:0,
            right:0
        })
    };

    zoomArea.prototype.invalidatePosition = function() {
        this.setPosition(this.posPercentageX,this.posPercentageY);
    };

    zoomArea.prototype.setPosition = function(x,y) {
        if(this.animating)
            return;

        if(this.$zoomed.width()<=this.$area.width()) {
            x = 0.5;
        }

        if(this.$zoomed.height()<=this.$area.height()) {
            y = 0.5;
        }
        this.posPercentageX = x;
        this.posPercentageY = y;
        x = Math.min(1,Math.max(0,x));
        y = Math.min(1,Math.max(0,y));
        this.$zoomed.css('left',(0-((this.$zoomed.width()-this.$area.width())*x))+'px');
        this.$zoomed.css('top',(0-((this.$zoomed.height()-this.$area.height())*y))+'px');
        this.$zoomedClone.css('left',(0-((this.$zoomed.width()-this.$area.width())*x))+'px');
        this.$zoomedClone.css('top',(0-((this.$zoomed.height()-this.$area.height())*y))+'px');
    };

    zoomArea.prototype.getPixPos = function(x,y) {
        if(x==undefined && y == undefined) {
            x = this.posPercentageX;
            y = this.posPercentageY;
        }
        x = Math.min(1,Math.max(0,x));
        y = Math.min(1,Math.max(0,y));
        return {'x':(0-((this.newSize.x-this.$area.width())*x)),'y':(0-((this.newSize.y-this.$area.height())*y))};
    };

    zoomArea.prototype.getPercentFromPos = function(x,y) {
        var percentX = 0-(x/(this.newSize.x-this.$area.width()));
        var percentY = 0-(y/(this.newSize.y-this.$area.height()));
        return {'x':percentX,'y':percentY};
    };

    zoomArea.prototype.animate = function (size,pos,cb) {
        this.animating = true;
        if(size.x <= this.$area.width()) {
            pos.x = this.getPixPos(0.5,0.5).x;
        }
        if(size.y <= this.$area.height()) {
            pos.y = this.getPixPos(0.5,0.5).y;
        }

        var animConfig = {'width':size.x,'height':size.y,'left':pos.x+'px','top':pos.y+'px'};

        this.$zoomed.animate(animConfig, 500);
        this.$zoomedClone.animate(animConfig, 500);

        setTimeout($.proxy(function(){
            if (cb) {
                cb();
            }
            this.animating = false;
        },this),this.isFF ? 1000 : 600);
    };

    zoomArea.prototype.updateImageSrc = function(scaleIncreased){
        var self = this;
        if(!scaleIncreased || !self.allowClone || !self._preloaderImgLoaded){
            return false;
        }
        self.setImage();

    };

    zoomArea.prototype.setScale = function(scale,cb){
        var self = this;
        var scaleIncreased = scale > this.scale;
        if(scale == this.scale) {
            return;
        }

        if(!scaleIncreased){
            this.allowClone = false;
        }
        else{
            this.allowClone = true;
        }

        self._preloaderImgLoaded = false;

        if((scale < this.scale) && scale == 1) {
            this.newSize = {'x':this.$source.width(), 'y':this.$source.height()};
        } else {
            this.newSize = {'x':this.$source.width()*scale, 'y':this.$source.height()*scale};
        }
        if (this.scale==1) {
            this.$zoomed.attr('src',this.$source[0].src);
            if(scale > this.scale) {
                this.$zoomed.width(this.$source.width());
                this.$zoomed.height(this.$source.height());
                this.$zoomedClone.width(this.$source.width());
                this.$zoomedClone.height(this.$source.height());
            }
            this.setPosition(0.5,0.5);
            this.show();
        }
        if(scale==1){
            this.animate(this.newSize,this.getPixPos(), function(){
                self.hide();
                self.updateImageSrc(false);
            });
        } else {
            this.animate(this.newSize, this.getPixPos(), function(){
                self.updateImageSrc(scaleIncreased);
            });
        }
        this.scale = scale;
        this.invalidateImageURL({'x':this.originalSize.x*scale, 'y':this.originalSize.y*scale});
    };

    zoomArea.prototype.show = function(){
        this.invalidatePosition();
        $(window).off('resize', this.invalidatePosition);
        $(window).on('resize', $.proxy(this.invalidatePosition,this));
        this.$container.show();
    };

    zoomArea.prototype.hide = function(){
        this.$container.hide();
        $(window).off('resize', this.invalidatePosition);
    };

    zoomArea.prototype.invalidateImageURL = function(size) {
        var self = this;
        var templateQueryParam = '';

        if (this.transforms && this.transforms.length) {
            templateQueryParam = this.transforms + '&';
        }

        var src = this.initialSrc.split('?')[0] + '?' + templateQueryParam + 'w=' + size.x + '&h=' +size.y;

        if(size.x == 0 || size.y ==0) {
            src='';
        }
        self.$preloader = new Image();
        self._preloaderImgLoaded = true;
        self.$preloader.setAttribute('src', src);

    };
    zoomArea.prototype.setImage = function() {
        var self = this;
        var loaded;
        var previousSrc = self.$zoomed.attr('src');

        if(self._allowChangeClone){
            self.$zoomedClone.attr('src', previousSrc);
        }

        if(self.$preloader.complete && self.$preloader.naturalWidth && self.$preloader.naturalWidth > 0){
            if(loaded){
                return;
            }

            setTimeout(function(){
                self.$zoomed.attr('src', self.$preloader.src);
            }, self.isFF ? 1000 : 10);
            loaded = true;
        }

        else{
            self.$preloader.onload = function(){
                if(loaded){
                    return;
                }
                self.$zoomed.attr('src', self.$preloader.src);
                loaded = true;
            };
        }

        self._allowChangeClone = false;
    };


}(jQuery));

(function ($) {

    $.widget("amp.ampVideo", {
        options: {
            autoplay: false,
            loop: false,
            muted: false,
            skin: '',
            responsive: true,
            preload: 'auto',
            pauseOnHide: true,
            controls:true,
            nativeControlsForTouch:true,
            plugins:{},
            enableSoftStates: true
        },
        _states: {
            stopped:0,
            buffering:1,
            paused:2,
            playing:3,
            loading:4,
            error:5,
            idle:6
        },
        _currentState: 0,
        _ready: false,
        _loopCount: 0,
        _savedHTML:'',
        _getCreateOptions:function(){
            this._savedHTML = this.element[0].outerHTML;
            var attributes = this.element.data().ampVideo;
            if (attributes) {
                return $.extend(true, {}, this.options, attributes);
            }
            return this.options;
        },
        _create: function () {
            this.element.addClass('amp amp-video');
            var video = this.element.find('video');
            var self = this;
            video.addClass('video-js' + ' ' + this.options.skin + ' ' + 'vjs-big-play-centered');
            if(videojs) {
                videojs.options.flash.swf = (this.options.swfUrl +"video-js.swf") || "../../assets/video-js.swf";

                this._player = videojs(video[0], {
                    autoplay: this.options.autoplay,
                    muted: this.options.muted,
                    width: '100%',
                    height: '100%',
                    loop: false,
                    controls: this.options.controls,
                    preload: this.options.preload,
                    plugins: self._sanitisePlugins(this.options.plugins),
                    nativeControlsForTouch:this.options.nativeControlsForTouch
                });
            }

            self._calcSize();
            if (self.options.responsive) {
                $(window).bind("resize", function (_self) {
                    return function () {
                        return _self._calcSize();
                    }
                }(self));
            }

            this._player.ready(function () {

                if(this.options_.muted){
                    this.volume(0);
                }

                self._ready = true;
                var vid = self.element.find('.vjs-tech');
                var interval = setInterval(function () {
                    if(self.options.height == 'auto'){
                        var height = vid.css({'height':'auto'}).height();
                        if (height != 0) {
                            clearInterval(interval);
                            self.element.height(height);
                            vid.css({height:''});
                            self._player.dimensions(self.element.width(), self.element.height())
                        }
                    }
                }, 200);
                if (self.options.autoplay)
                    self.state(self._states.playing);


                if (self.options.plugins && self.options.plugins['videoJsResolutionSwitcher'] && self.options.plugins['videoJsResolutionSwitcher'].default) {
                    self._player.on('ready', function () {
                        self._player.currentResolution(self.options.plugins['videoJsResolutionSwitcher'].default);
                        self._allowResolutionChange = false;
                    });
                    self._player.on('resolutionchange', function () {
                        if (self._player.paused()) {
                            if (self._allowResolutionChange) {
                                self._player.play();
                                self._player.pause();
                            }
                            if (self._player.currentTime() > 0.5) {
                                self._allowResolutionChange = true;
                            }
                        }
                    });
                }

                this.on("play", function (e) {
                    if (!self.softPlay || !self.options.enableSoftStates) {
                        self.state(self._states.playing);
                        self._track("play", {event:e,player:this,time: this.currentTime(),duration: self.duration});
                    } else {
                        self.softPlay = false;
                    }
                });

                this.on("error", function (e) {
                    self.state(self._states.error);
                    self._track("error", null);
                });

                this.on("pause", function (e) {
                    if(!e.target.ended && !e.target.seeking){
                        self.state(self._states.paused);
                        self._track("pause", {event:e,player:this,time: this.currentTime(),duration: self.duration});
                    }
                });

                this.on("waiting", function (e) {
                    self.state(self._states.buffering);
                });

                this.on("seeking", function (e) {
                    if (!self.softSeek) {
                        if (self.state() !== self._states.paused && e.target.currentTime !== 0 && self.options.enableSoftStates)
                            self.softPlay = true;
                        self._track("seeked", {event:e,player:this,time: this.currentTime(),duration: self.duration});
                    } else {
                        self.softSeek = false;
                    }
                });

                this.on("timeupdate", function (e) {
                    self._track("timeUpdate", {event:e,player:this,time: this.currentTime(),duration: self.duration});
                });

                this.on("volumechange", function (e) {
                    self._track("volume", {event:e,player:this,volume: this.volume(), muted: this.muted()});
                });

                this.on("durationchange", function (e) {
                    self.duration = this.duration();
                    self._track("durationChange", {event:e,player:this,duration: self.duration});
                });

                this.on("fullscreenchange", function (e) {
                    self._track("fullScreenChange", {event:e,player:this});
                    setTimeout(function(){$(window).resize()},200);
                });

                this.on("ended", function (e) {
                    if (self.options.loop) {
                        self.softSeek = true;
                        self._player.currentTime(0);
                        self.softPlay = true;
                        self._player.play();
                        self._track("ended", null);
                        self._track("looped", { count: ++self._loopCount });
                    }else{
                        self.state(self._states.stopped);
                        self._track("ended", null);
                        self._track("stopped", null);
                    }
                });
                self._track("created",{player:this,duration: self.duration});
            });
        },
        visible: function(visible) {
            if(visible == this._visible)
                return;

            this._track('visible',{'visible':visible});

            if (visible) {
                this._calcSize();
            } else {
                if(this._states.playing == this.state() || this._states.buffering== this.state()) {
                    if(this.options.pauseOnHide){
                        this.pause();
                    }
                }
            }

            this._visible = visible;
        },

        redraw:function(){
            this._calcSize();
        },
        _calcSize: function() {
            var w,h;
            if ((this.options.responsive) && (this.options.width && this.options.height && this.options.width!='auto' && this.options.height!='auto')) {
                var display = this.element.css('display');
                this.element.css('display','block');
                w  = Math.round((this.element.width()));
                this.element.css('display',display);
                h =  Math.round((w*(this.options.height/this.options.width)));
                this.element.height(h);
            } else {
                if (this.options.width) {
                    this.element.width(this.options.width)
                } else if (this.options.responsive) {
                    this.element.width(this.element.parent().width());
                }
                if (this.options.height) {
                    this.element.height(this.options.height);
                }else if (this.options.responsive) {
                    this.element.height(this.element.parent().height());
                }
            }

            if(this.options.center) {
                var eh = this.element.height();
                var ph = this.element.parent().height();
                this.element.css('margin-top',((ph/2)-(eh/2))+'px');
            }

            if (this._player)
                this._player.dimensions(this.element.width(), this.element.height())

        },
        play: function () {
            if(!this._ready || this._states.playing === this.state()) return;
            this._player.play();
        },
        pause: function () {
            if(!this._ready || this._states.paused === this.state()) return;
            this._player.pause();
        },
        stop: function () {
            if(!this._ready || this._states.stopped === this.state()) return;
            this._player.pause();
            this.softSeek = true;
            this._player.currentTime(0);
            this._track("stopped", null);
            this.state(this._states.stopped);
        },
        seek: function (time) {
            if(!this._ready) return;
            this.currentTime(time)
        },
        currentTime: function (time) {
            if (time === void 0)
                return this._player.currentTime();
            this._player.currentTime(time);
        },
        state: function(state){
            if (state === void 0)
                return this._currentState;
            this._currentState = state;
            this._trigger("stateChange", null, {state:state})
        },
        _track: function (event, value) {
            this._trigger(event, null, value);
            if(window.amp && amp.stats && amp.stats.event){
                amp.stats.event(this.element, 'video', event, value);
            }
        },
        _destroy: function() {
            this._player.dispose();
            this._player = null;
            this.element[0].outerHTML = this._savedHTML;
        },
        _sanitisePlugins: function(plugins){
            // setting plugins to false doesn't deactivate, remove instead
            if (plugins && plugins['videoJsResolutionSwitcher'] == false){
                delete plugins['videoJsResolutionSwitcher'];
            }
            return plugins;
        }
    });

}(jQuery));

(function ( $ ) {

    $.widget( "amp.ampSpin",$.amp.ampStack, {
        options:{
            delay: 50,
            autoplay:false,
            loop:true,
            responsive:true,
            states:{
                "selected":"amp-selected",
                "seen":"amp-seen",
                "active":"amp-active",
                "inactive":"amp-inactive"
            },
            events:{
                start:'mousedown touchstart',
                move:'mousemove touchmove',
                end:'mouseup touchend'
            },
            momentum : true,
            preload: 'created',
            preloadType:'full',
            minDistance : 25,
            activate:'down',
            friction: 0.97,
            dir:'normal',
            gesture:{
                enabled:true,
                fingers:1
            },
            orientation: 'horz',
            start:1,
            cursor:{active: 'auto', inactive: 'auto'},
            play: {
                onLoad:false,
                onVisible:false,
                repeat:1,
                delay: 10
            },
            dragDistance:200,
            lazyLoad:false

        },
        _getCreateOptions:function(){
            var attributes = this.element.data().ampSpin;
            if (attributes) {
                return $.extend(true, {}, this.options, attributes);
            }
            return this.options;
        },
        _create: function() {
            var self = this,
                children = this._children = this.element.children(),
                count = this._count = this.element.children().length;
            this.isWebkit = /Chrome|Safari/.test(navigator.userAgent) && !/Edge/.test(navigator.userAgent);
            this.$document = $(document);
            this.options.friction = Math.min(this.options.friction,0.999);
            this.options.friction = Math.max(this.options.friction,0);
            this._setCursor(this.options.cursor.inactive);
            this.count = this.element.children().length;
            this.options.dragDistance = Math.max(this.options.dragDistance,1);
            this._index = Math.max(1,Math.min(this.options.start,this.count));
            if($.inArray(this.options.preload, ['created', 'visible', 'none']) == -1){
                this.options.preload = 'created';
            }
            this.element.addClass('amp');
            this.element.addClass('amp-spin');
            this.element.addClass(this.options.states.inactive);
            this.imgs = this.element.find('img:not(.amp-zoom-img)');
            this.toLoadCount =  this.imgs.length;
            this.loadedCount = 0;
            children.addClass('amp-frame');
            var currentChild =  children.eq(this._index-1);
            var currentChildClone = currentChild.clone();
            currentChildClone.addClass('amp-frame-clone');
            if (this.isWebkit){
                children.css({'display':'none'});
                currentChild.css('display','block');
            } else {
                children.css({'z-index':-1});
                currentChild.css('z-index', 1);
            }

            this.element.append(currentChildClone);
            currentChild.eq(this._index-1).addClass(this.options.states.selected + ' ' +this.options.states.seen);
            setTimeout(function(_self) {
                return function() {
                    return _self._calcSize();
                }
            }(self),1);
            
            if(this.options.responsive){
                $(window).on("resize", function(_self) {
                    return function() {
                        return _self._calcSize();
                    }
                }(self));
            }
            this.element.on('dragstart',function(e) {
                return false;
            });

            this.element.on(this.options.events.start, $.proxy(this._startDrag,this));

            // mousewheel
            this.element.on('mousewheel DOMMouseScroll', function(e){return self._mouseScroll(e);});

            if(this.options.autoplay) {
                this.play();
            }

            if(this.options.preload == 'created') {
                this._startPreload();
            }

            this._track("created",{'index':this._index,'canNext':this.canNext(),'canPrev':this.canPrev()});
        },
        _setCursor: function(cursorStyle){
            if((cursorStyle.indexOf('zoom') < 0)&&(cursorStyle.indexOf('grab') < 0)){
                this.element.css('cursor', cursorStyle);
                return false;
            }
            // zoom
            if (/*@cc_on!@*/false || !!document.documentMode){ return false; }     // ie bye bye
            if(typeof InstallTrigger !== 'undefined'){        // moz
                this.element.css('cursor', '-moz-' + cursorStyle);
            }

            if(!!window.chrome){     // chrome + opera

                this.element.css('cursor', '-webkit-' + cursorStyle);
            }
        },
        redraw:function(){
            this._calcSize();
        },
        _mouseScroll:function(e){
            var delta = 0;
            if (!e){e = window.event;} // for ie

            if (e.originalEvent.wheelDelta) {
                delta = e.originalEvent.wheelDelta;  // chrome, ie
            } else if (e.originalEvent.detail) {
                delta = -e.originalEvent.detail;   // ff
            }

            if (delta > 0){
                this.next();
            }else{
                this.prev();
            }

            this._track("scroll", { 'domEvent': e, delta: delta });

            e.preventDefault();
            return false;
        },
        visible:function(visible) {
            var self = this;
            if (visible != self._visible) {
                self._super(visible);
                if(visible) {
                    if(self.options.preload=='visible') {
                        self._startPreload();
                    }

                    if(this.options.preload == 'none'){
                        self._startPreload(self._index);
                    }
                    if(self.options.play.onVisible && self._loaded) {
                        setTimeout(function() {
                            self.playRepeat(self.options.play.repeat);
                        }, self.options.play.delay);
                    }
                }
            }
        },
        _resolveEventCoords: function(e){
            e = e.originalEvent;
            if(e.touches && e.touches.length){
                return {x: e.touches[0].clientX, y: e.touches[0].clientY};
            }else if(e.changedTouches && e.changedTouches.length){
                return {x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY};
            }else{
                return {x: e.clientX, y: e.clientY};
            }
        },
        _startPreload: function(index){
            if(this._loaded || (this._loading && !this.first))
                return;

            var self=this;
            this._loading = true;
            if(!this.first){
                this._track('startPreload');
                if(this.options.preload != 'none'){
                     if(this.options.preloadType == 'full') {
                        this.pre = $('<li class="amp-progress amp-frame"></li>');
                        this.element.append(this.pre);
                    } else if (this.options.preloadType == 'window'){
                        // create progress indicator
                        this.progressIndicator = $('<div class="amp-progress-indicator"><div class="amp-progress-message"></div><div class="amp-progress-bar-background"><div class="amp-progress-bar"></div></div></div>');
                        this.progressIndicator.find('.amp-progress-message').html(this.options.progressMessage || 'Loading...');
                        this.progressIndicator.progress = self.progressIndicator.find('.amp-progress-bar');
                        this.progressIndicator.visible = true;
                        this.element.append(this.progressIndicator);
                    }
                }
            }


            var onLoad = function (e) {
                self.loadedCount++;
                if (self.loadedCount >= self.toLoadCount && !self._loaded) {
                    self._unsetLoadEvents(self.imgs);
                    self._loaded = true;
                    if (self.pre) {
                        self.pre.remove();
                    }
                    if (self.options.play.onLoad) {
                        self.playRepeat(self.options.play.repeat);
                    }
                    self._loading = false;
                    if (self.progressIndicator) {
                        self.progressIndicator.visible = false;
                        self.progressIndicator.remove();
                    }

                    self._track('preloaded');
                } else {
                    var percent = ((self.loadedCount / self.toLoadCount) * 100);
                    if (self.pre) {
                        self.pre.css('width', 100 - percent + '%');
                        self.pre.css('left', percent + '%');
                    }
                    if (self.progressIndicator && self.progressIndicator.visible) {
                        self.progressIndicator.progress.css('width', percent + '%');
                    }
                }

            };

            if(index){
                this.first = true;
                this.toLoadCount -= 1;
                this._callImageMethod($(this.imgs[index - 1]), onLoad)
            }else{
                this._callImageMethod(this.imgs, onLoad)
            }

        },
        _unsetLoadEvents: function(imgs) {
            if(!imgs){
                return;
            }
            for(var m = 0, len = imgs.length; m < len; m++) {
                var child = $(imgs[m]),
                    components = child.data();

                if(components['amp-ampZoom'] || components['ampAmpZoom']){
                    child.ampZoom({'loaded':null});
                }else{
                    child.ampImage({'loaded':null});
                }
            }
        },
        _callImageMethod: function(imgs, onLoad) {
            for(var m = 0, len = imgs.length; m < len; m++) {
                var child = $(imgs[m]),
                    components = child.data();

                if(components['amp-ampZoom']  || components['ampAmpZoom']){
                    child.ampZoom({'loaded':onLoad});
                    child.ampZoom('load', this.options.preload);
                }else{
                    var imgComponent = components['amp-ampImage'] || components['ampAmpImage'];
                    if(typeof imgComponent !== 'undefined' && imgComponent.loaded){
                        onLoad();
                    }
                    child.ampImage({'loaded':onLoad});
                    child.ampImage('load', this.options.preload);
                }
            }
        },
        preload:function() {
            this._startPreload();
        },
        playRepeat:function(num) {
            if(num=='inf'){
                this.play();
                return;
            }
            var self = this;

            for(var i=0; i<num; i++) {
                for (var x=0; x<this.count;x++) {
                    setTimeout(function(){
                        self.next();
                    },this.options.delay*((i*this.count)+x));
                }

            }
        },
        _startDrag: function(e) {
            var self = this,
                coords = this._resolveEventCoords(e),
                o = $(e.currentTarget).offset(),
                mx = coords.x - o.left,
                my = coords.y - o.top;
            
            if(this._started) {
                return;
            }
            
            if(this.options.gesture.enabled) {
                if(e.originalEvent && e.originalEvent.touches && e.originalEvent.touches[0] ) {
                    if (e.originalEvent.touches.length!=this.options.gesture.fingers)
                        return true;
                }
            }

            this._started = true;

            this._track("startMove",{'domEvent':e,pos:{x:mx,y:my}});
            this._ended = false;
            this.pause();

            this._setCursor(this.options.cursor.active);
            this.element.removeClass(this.options.states.inactive).addClass(this.options.states.active);

            var m = this._mbind =function(i) {
                return function(e){
                    return self._mouseMove(e,o,mx,my,i);
                }
            }(this._index);
            var u = this._ubind = function(i){
                return function(e){
                    return self._endDrag(e,o,mx,my,i);
                }
            }(this._index);
                this.$document.on(this.options.events.move, m);
                this.$document.on(this.options.events.end,u);

            this._mouseMoveInfo = [{e:e,o:o,mx:mx,my:my,sindex:this._index}];
            if(window.navigator.userAgent.indexOf("MSIE ")>0){
                return false;
            }
            this.element.find('.amp-spin').each(function(i, element){
                var childSpin = $(element).data()['amp-ampSpin'] || $(element).data()['ampAmpSpin'];
                if(childSpin && childSpin._startDrag){
                    childSpin._startDrag(e);
                }
            })
        },
        _mouseMove: function(e,o,sx,sy,sindex) {

            if(this.options.gesture.enabled) {
                if(e.originalEvent && e.originalEvent.touches && e.originalEvent.touches[0] ) {
                    if (e.originalEvent.touches.length!=this.options.gesture.fingers)
                        return true;
                }
            }
            var coords = this._resolveEventCoords(e),
                v= 0,
                mx = coords.x- o.left,
                my = coords.y - o.top,
                dx = mx-sx,
                dy = my-sy,
                m = this._mouseMoveInfo,
                mm = {e:e,mx:mx,my:my};

                if(Math.abs(dx)< Math.abs(dy)) {
                    this.moveDir = 'vert';
                } else if (Math.abs(dx)> Math.abs(dy)){
                    this.moveDir = 'horz';
                } else {
                    this.moveDir = this.options.orientation;
                }
            this._mouseMoveInfo.push(mm);
            if (this._mouseMoveInfo.length > 2) {
                this._mouseMoveInfo.shift();
            }
            this._moveSpin(this.options.orientation == 'horz' ? dx : dy,e,sindex);

            if(this.options.orientation == this.moveDir){
                e.preventDefault();
                return false;
            }
        },

        _moveSpin : function(distance,e,sindex) {
            var index = Math.round((distance/this.options.dragDistance)* (this._count-1));
            if(this.options.dir=='normal') {
                index = 0-index;
            }
            this._track("move",{domEvent:e,distFromStart:distance});
            var toIndex = this._numToIndex(index+sindex);
            if(toIndex!=this._index) {
                this._checkLoop(toIndex);
                this.goTo(toIndex);
            }
        },

        _checkLoop:function(toIndex) {
            if(Math.abs(this._index-toIndex)>2) {
                if(this._index>toIndex) {
                    this._track("looped","forwards");
                } else {
                    this._track("looped","backwards");
                }
            }
        },

        _endDrag: function(e,o,sx,sy,sindex) {
            if(this.moveDir == 'horz'){
                e.preventDefault();
                e.stopPropagation();
            }
            this.moveDir = null;
            var self = this;
            if(this._ended) {
                return;
            }
            this._started = false;
            this._ended = true;

            this._track("endMove",{'domEvent': e});
                this.$document.off(this.options.events.end, this._ubind);
                this.$document.off(this.options.events.move, this._mbind);
            clearInterval(this._timer);

            this._setCursor(this.options.cursor.inactive);
            this.element.removeClass(this.options.states.active).addClass(this.options.states.inactive);

            if(this.options.momentum && this._mouseMoveInfo.length==2) {
                var m = this._mouseMoveInfo,
                    time = m[1].e.timeStamp - m[0].e.timeStamp,
                    distance = this.options.orientation == 'horz' ? m[1].mx -  m[0].mx : m[1].my -  m[0].my;
                // we can't have inf speed or zero speed
                if(distance==0||time==0)
                    return;
                var speed = distance/time,
                    travelSpeed = speed,
                    friction = this.options.friction,
                    totalDistance = this.options.orientation == 'horz' ? m[1].mx -  sx : m[1].my -  sy,
                    travelDistance = 0,
                    travelTime = 0,
                    timeInterval = 10; // time interval in ms
                // Meeting the min distance requirement
                if(Math.abs(totalDistance) < this.options.minDistance)
                    return;

                var lastAnimationTime = null;

                var animateMomentum = function(timeStamp) {
                    var timeElapsed;

                    if (lastAnimationTime) {
                        timeElapsed = timeStamp - lastAnimationTime;
                    } else {
                        // this is the first iteration, assume 15ms
                        timeElapsed = 15;
                    }

                    lastAnimationTime = timeStamp;

                    // apply a unit of friction for every elapsed 10ms
                    var frictionIteration = timeElapsed / 10;
                    while (frictionIteration > 0) {
                        // allow for a partial application of friction, ie. if we had to apply 3.5 friction iterations
                        // for the last iteration (0.5), we only want to apply 50% of the friction speed delta
                        travelSpeed -= (travelSpeed - travelSpeed * friction) * Math.min(frictionIteration, 1);
                        frictionIteration -= 1;
                    }

                    travelDistance += travelSpeed * timeElapsed;
                    travelTime += timeElapsed;

                    self._moveSpin(travelDistance + totalDistance, e, sindex);

                    if (Math.abs(travelSpeed) > 0.1) {
                        window.requestAnimationFrame(animateMomentum);
                    }
                };

                // trigger the initial momentum animation
                window.requestAnimationFrame(animateMomentum);

                return;
            }
        },
        _calcSize: function() {
            this._super();

            if(this.progressIndicator && this.progressIndicator.visible){
                // position centrally
                this.progressIndicator.css('top', (parseInt($(this.element.find('li')[0]).css('height')) - parseInt(this.progressIndicator.css('height'))) / 2 + 'px');
                this.progressIndicator.css('left',(parseInt($(this.element.find('li')[0]).css('width')) - parseInt(this.progressIndicator.css('width'))) / 2 + 'px');
            }
        },
        _getIndex : function(_index) {
            var children = this.element.children();
            if(_index > children.length){
                if(!this.options.loop)
                    return;
                _index = 1;
            } else if(_index<1) {
                if(!this.options.loop)
                    return;
                _index = children.length;
            }
        },
        _direction : function(index) {
            var forw=0, back=0;
            var oIndex = index;
            while(oIndex!=this._index) {
                if(oIndex>this._count){
                    oIndex = 0;
                } else {
                    oIndex++;
                }
                forw++
            }
            oIndex = index;
            while(oIndex!=this._index) {
                if(oIndex<1) {
                    oIndex = this._count;
                } else {
                    oIndex--;
                }
                back++;
            }
            if (back<forw) {
                return true;
            } else {
                return false;
            }
        },
        _loopIndex : function(dir,start,count) {
            var inc = dir ? 1 : -1;
            var curr = start;
            for (var i= 0;i<count;i++) {

                if(curr+inc>this._count){
                    curr = 1;
                } else if(curr+inc<1) {
                    curr = this._count
                } else {
                    curr = curr + inc;
                }

            }
            return curr;
        },
        _loopCount : function(dir,start,target) {
            var inc = dir ? 1 : -1;
            var curr = start;
            var count = 0;
            while(curr != target) {
                count++;
                if(curr+inc>this._count){
                    curr = 1;
                } else if(curr+inc<1) {
                    curr = this._count
                } else {
                    curr = curr + inc;
                }
            }
            return count;
        },

        _animate : function(_index){
            var items = this.element,
                currItem  = items.children('li').eq(this._index - 1),
                nextItem = items.children('li').eq(_index - 1);
            if(this._index == _index){
                return;
            }
            nextItem.addClass(this.options.states.selected + ' ' +this.options.states.seen);
            if (this.isWebkit){
                nextItem.css('display', 'block');
                currItem.css('display', 'none');
            }else{
                nextItem.css('zIndex', 1);
                currItem.css('zIndex', -1);
            }
            currItem.removeClass(this.options.states.selected);
            this._setIndex(_index);

            // set the index, but ignore visibility toggling as this is already done
            this._setIndex(_index, true);
        },
        _track: function(event,value) {
            this._trigger( event, null, value );
            if(window.amp && amp.stats && amp.stats.event){
                amp.stats.event(this.element,'spin',event,value);
            }
        },
        _destroy: function() {
            this.element.removeClass('amp');
            this.element.removeClass('amp-spin');
            this.element.removeClass(this.options.states.active);
            this.element.removeClass(this.options.states.inactive);
            this.element.css('cursor','');
            this.element.find('.amp-progress').remove();
            this.element.find('.amp-loading').remove();
            this._removeEmptyAttributeHelper(this.element);
            var children = this.element.children();
            children.removeClass('amp-frame');
            children.removeClass(this.options.states.selected);
            children.removeClass(this.options.states.seen);
            children.css('display','');
            for (var i=0,len=children.length;i<len;i++ ) {
                this._removeEmptyAttributeHelper($(children[i]));
            }
            var imgs = children.find('img');
            imgs.removeClass('amp amp-main-img, amp-image');
            imgs.css('display','');
            for (var i= 0,len=imgs.length;i<len;i++ ) {
                this._removeEmptyAttributeHelper($(imgs[i]));
            }
        }

    });


}( jQuery ));
/**!

 @license
 handlebars v4.1.2

Copyright (C) 2011-2017 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Handlebars"] = factory();
	else
		root["Handlebars"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = __webpack_require__(1)['default'];

	var _interopRequireDefault = __webpack_require__(2)['default'];

	exports.__esModule = true;

	var _handlebarsBase = __webpack_require__(3);

	var base = _interopRequireWildcard(_handlebarsBase);

	// Each of these augment the Handlebars object. No need to setup here.
	// (This is done to easily share code between commonjs and browse envs)

	var _handlebarsSafeString = __webpack_require__(20);

	var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);

	var _handlebarsException = __webpack_require__(5);

	var _handlebarsException2 = _interopRequireDefault(_handlebarsException);

	var _handlebarsUtils = __webpack_require__(4);

	var Utils = _interopRequireWildcard(_handlebarsUtils);

	var _handlebarsRuntime = __webpack_require__(21);

	var runtime = _interopRequireWildcard(_handlebarsRuntime);

	var _handlebarsNoConflict = __webpack_require__(33);

	var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

	// For compatibility and usage outside of module systems, make the Handlebars object a namespace
	function create() {
	  var hb = new base.HandlebarsEnvironment();

	  Utils.extend(hb, base);
	  hb.SafeString = _handlebarsSafeString2['default'];
	  hb.Exception = _handlebarsException2['default'];
	  hb.Utils = Utils;
	  hb.escapeExpression = Utils.escapeExpression;

	  hb.VM = runtime;
	  hb.template = function (spec) {
	    return runtime.template(spec, hb);
	  };

	  return hb;
	}

	var inst = create();
	inst.create = create;

	_handlebarsNoConflict2['default'](inst);

	inst['default'] = inst;

	exports['default'] = inst;
	module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  if (obj && obj.__esModule) {
	    return obj;
	  } else {
	    var newObj = {};

	    if (obj != null) {
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	      }
	    }

	    newObj["default"] = obj;
	    return newObj;
	  }
	};

	exports.__esModule = true;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};

	exports.__esModule = true;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(2)['default'];

	exports.__esModule = true;
	exports.HandlebarsEnvironment = HandlebarsEnvironment;

	var _utils = __webpack_require__(4);

	var _exception = __webpack_require__(5);

	var _exception2 = _interopRequireDefault(_exception);

	var _helpers = __webpack_require__(9);

	var _decorators = __webpack_require__(17);

	var _logger = __webpack_require__(19);

	var _logger2 = _interopRequireDefault(_logger);

	var VERSION = '4.1.2';
	exports.VERSION = VERSION;
	var COMPILER_REVISION = 7;

	exports.COMPILER_REVISION = COMPILER_REVISION;
	var REVISION_CHANGES = {
	  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
	  2: '== 1.0.0-rc.3',
	  3: '== 1.0.0-rc.4',
	  4: '== 1.x.x',
	  5: '== 2.0.0-alpha.x',
	  6: '>= 2.0.0-beta.1',
	  7: '>= 4.0.0'
	};

	exports.REVISION_CHANGES = REVISION_CHANGES;
	var objectType = '[object Object]';

	function HandlebarsEnvironment(helpers, partials, decorators) {
	  this.helpers = helpers || {};
	  this.partials = partials || {};
	  this.decorators = decorators || {};

	  _helpers.registerDefaultHelpers(this);
	  _decorators.registerDefaultDecorators(this);
	}

	HandlebarsEnvironment.prototype = {
	  constructor: HandlebarsEnvironment,

	  logger: _logger2['default'],
	  log: _logger2['default'].log,

	  registerHelper: function registerHelper(name, fn) {
	    if (_utils.toString.call(name) === objectType) {
	      if (fn) {
	        throw new _exception2['default']('Arg not supported with multiple helpers');
	      }
	      _utils.extend(this.helpers, name);
	    } else {
	      this.helpers[name] = fn;
	    }
	  },
	  unregisterHelper: function unregisterHelper(name) {
	    delete this.helpers[name];
	  },

	  registerPartial: function registerPartial(name, partial) {
	    if (_utils.toString.call(name) === objectType) {
	      _utils.extend(this.partials, name);
	    } else {
	      if (typeof partial === 'undefined') {
	        throw new _exception2['default']('Attempting to register a partial called "' + name + '" as undefined');
	      }
	      this.partials[name] = partial;
	    }
	  },
	  unregisterPartial: function unregisterPartial(name) {
	    delete this.partials[name];
	  },

	  registerDecorator: function registerDecorator(name, fn) {
	    if (_utils.toString.call(name) === objectType) {
	      if (fn) {
	        throw new _exception2['default']('Arg not supported with multiple decorators');
	      }
	      _utils.extend(this.decorators, name);
	    } else {
	      this.decorators[name] = fn;
	    }
	  },
	  unregisterDecorator: function unregisterDecorator(name) {
	    delete this.decorators[name];
	  }
	};

	var log = _logger2['default'].log;

	exports.log = log;
	exports.createFrame = _utils.createFrame;
	exports.logger = _logger2['default'];

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.extend = extend;
	exports.indexOf = indexOf;
	exports.escapeExpression = escapeExpression;
	exports.isEmpty = isEmpty;
	exports.createFrame = createFrame;
	exports.blockParams = blockParams;
	exports.appendContextPath = appendContextPath;
	var escape = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;',
	  "'": '&#x27;',
	  '`': '&#x60;',
	  '=': '&#x3D;'
	};

	var badChars = /[&<>"'`=]/g,
	    possible = /[&<>"'`=]/;

	function escapeChar(chr) {
	  return escape[chr];
	}

	function extend(obj /* , ...source */) {
	  for (var i = 1; i < arguments.length; i++) {
	    for (var key in arguments[i]) {
	      if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
	        obj[key] = arguments[i][key];
	      }
	    }
	  }

	  return obj;
	}

	var toString = Object.prototype.toString;

	exports.toString = toString;
	// Sourced from lodash
	// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
	/* eslint-disable func-style */
	var isFunction = function isFunction(value) {
	  return typeof value === 'function';
	};
	// fallback for older versions of Chrome and Safari
	/* istanbul ignore next */
	if (isFunction(/x/)) {
	  exports.isFunction = isFunction = function (value) {
	    return typeof value === 'function' && toString.call(value) === '[object Function]';
	  };
	}
	exports.isFunction = isFunction;

	/* eslint-enable func-style */

	/* istanbul ignore next */
	var isArray = Array.isArray || function (value) {
	  return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
	};

	exports.isArray = isArray;
	// Older IE versions do not directly support indexOf so we must implement our own, sadly.

	function indexOf(array, value) {
	  for (var i = 0, len = array.length; i < len; i++) {
	    if (array[i] === value) {
	      return i;
	    }
	  }
	  return -1;
	}

	function escapeExpression(string) {
	  if (typeof string !== 'string') {
	    // don't escape SafeStrings, since they're already safe
	    if (string && string.toHTML) {
	      return string.toHTML();
	    } else if (string == null) {
	      return '';
	    } else if (!string) {
	      return string + '';
	    }

	    // Force a string conversion as this will be done by the append regardless and
	    // the regex test will do this transparently behind the scenes, causing issues if
	    // an object's to string has escaped characters in it.
	    string = '' + string;
	  }

	  if (!possible.test(string)) {
	    return string;
	  }
	  return string.replace(badChars, escapeChar);
	}

	function isEmpty(value) {
	  if (!value && value !== 0) {
	    return true;
	  } else if (isArray(value) && value.length === 0) {
	    return true;
	  } else {
	    return false;
	  }
	}

	function createFrame(object) {
	  var frame = extend({}, object);
	  frame._parent = object;
	  return frame;
	}

	function blockParams(params, ids) {
	  params.path = ids;
	  return params;
	}

	function appendContextPath(contextPath, id) {
	  return (contextPath ? contextPath + '.' : '') + id;
	}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _Object$defineProperty = __webpack_require__(6)['default'];

	exports.__esModule = true;

	var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

	function Exception(message, node) {
	  var loc = node && node.loc,
	      line = undefined,
	      column = undefined;
	  if (loc) {
	    line = loc.start.line;
	    column = loc.start.column;

	    message += ' - ' + line + ':' + column;
	  }

	  var tmp = Error.prototype.constructor.call(this, message);

	  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
	  for (var idx = 0; idx < errorProps.length; idx++) {
	    this[errorProps[idx]] = tmp[errorProps[idx]];
	  }

	  /* istanbul ignore else */
	  if (Error.captureStackTrace) {
	    Error.captureStackTrace(this, Exception);
	  }

	  try {
	    if (loc) {
	      this.lineNumber = line;

	      // Work around issue under safari where we can't directly set the column value
	      /* istanbul ignore next */
	      if (_Object$defineProperty) {
	        Object.defineProperty(this, 'column', {
	          value: column,
	          enumerable: true
	        });
	      } else {
	        this.column = column;
	      }
	    }
	  } catch (nop) {
	    /* Ignore if the browser is very particular */
	  }
	}

	Exception.prototype = new Error();

	exports['default'] = Exception;
	module.exports = exports['default'];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(7), __esModule: true };

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(8);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(2)['default'];

	exports.__esModule = true;
	exports.registerDefaultHelpers = registerDefaultHelpers;

	var _helpersBlockHelperMissing = __webpack_require__(10);

	var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);

	var _helpersEach = __webpack_require__(11);

	var _helpersEach2 = _interopRequireDefault(_helpersEach);

	var _helpersHelperMissing = __webpack_require__(12);

	var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);

	var _helpersIf = __webpack_require__(13);

	var _helpersIf2 = _interopRequireDefault(_helpersIf);

	var _helpersLog = __webpack_require__(14);

	var _helpersLog2 = _interopRequireDefault(_helpersLog);

	var _helpersLookup = __webpack_require__(15);

	var _helpersLookup2 = _interopRequireDefault(_helpersLookup);

	var _helpersWith = __webpack_require__(16);

	var _helpersWith2 = _interopRequireDefault(_helpersWith);

	function registerDefaultHelpers(instance) {
	  _helpersBlockHelperMissing2['default'](instance);
	  _helpersEach2['default'](instance);
	  _helpersHelperMissing2['default'](instance);
	  _helpersIf2['default'](instance);
	  _helpersLog2['default'](instance);
	  _helpersLookup2['default'](instance);
	  _helpersWith2['default'](instance);
	}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(4);

	exports['default'] = function (instance) {
	  instance.registerHelper('blockHelperMissing', function (context, options) {
	    var inverse = options.inverse,
	        fn = options.fn;

	    if (context === true) {
	      return fn(this);
	    } else if (context === false || context == null) {
	      return inverse(this);
	    } else if (_utils.isArray(context)) {
	      if (context.length > 0) {
	        if (options.ids) {
	          options.ids = [options.name];
	        }

	        return instance.helpers.each(context, options);
	      } else {
	        return inverse(this);
	      }
	    } else {
	      if (options.data && options.ids) {
	        var data = _utils.createFrame(options.data);
	        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
	        options = { data: data };
	      }

	      return fn(context, options);
	    }
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(2)['default'];

	exports.__esModule = true;

	var _utils = __webpack_require__(4);

	var _exception = __webpack_require__(5);

	var _exception2 = _interopRequireDefault(_exception);

	exports['default'] = function (instance) {
	  instance.registerHelper('each', function (context, options) {
	    if (!options) {
	      throw new _exception2['default']('Must pass iterator to #each');
	    }

	    var fn = options.fn,
	        inverse = options.inverse,
	        i = 0,
	        ret = '',
	        data = undefined,
	        contextPath = undefined;

	    if (options.data && options.ids) {
	      contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
	    }

	    if (_utils.isFunction(context)) {
	      context = context.call(this);
	    }

	    if (options.data) {
	      data = _utils.createFrame(options.data);
	    }

	    function execIteration(field, index, last) {
	      if (data) {
	        data.key = field;
	        data.index = index;
	        data.first = index === 0;
	        data.last = !!last;

	        if (contextPath) {
	          data.contextPath = contextPath + field;
	        }
	      }

	      ret = ret + fn(context[field], {
	        data: data,
	        blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
	      });
	    }

	    if (context && typeof context === 'object') {
	      if (_utils.isArray(context)) {
	        for (var j = context.length; i < j; i++) {
	          if (i in context) {
	            execIteration(i, i, i === context.length - 1);
	          }
	        }
	      } else {
	        var priorKey = undefined;

	        for (var key in context) {
	          if (context.hasOwnProperty(key)) {
	            // We're running the iterations one step out of sync so we can detect
	            // the last iteration without have to scan the object twice and create
	            // an itermediate keys array.
	            if (priorKey !== undefined) {
	              execIteration(priorKey, i - 1);
	            }
	            priorKey = key;
	            i++;
	          }
	        }
	        if (priorKey !== undefined) {
	          execIteration(priorKey, i - 1, true);
	        }
	      }
	    }

	    if (i === 0) {
	      ret = inverse(this);
	    }

	    return ret;
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(2)['default'];

	exports.__esModule = true;

	var _exception = __webpack_require__(5);

	var _exception2 = _interopRequireDefault(_exception);

	exports['default'] = function (instance) {
	  instance.registerHelper('helperMissing', function () /* [args, ]options */{
	    if (arguments.length === 1) {
	      // A missing field in a {{foo}} construct.
	      return undefined;
	    } else {
	      // Someone is actually trying to call something, blow up.
	      throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
	    }
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(4);

	exports['default'] = function (instance) {
	  instance.registerHelper('if', function (conditional, options) {
	    if (_utils.isFunction(conditional)) {
	      conditional = conditional.call(this);
	    }

	    // Default behavior is to render the positive path if the value is truthy and not empty.
	    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
	    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
	    if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
	      return options.inverse(this);
	    } else {
	      return options.fn(this);
	    }
	  });

	  instance.registerHelper('unless', function (conditional, options) {
	    return instance.helpers['if'].call(this, conditional, { fn: options.inverse, inverse: options.fn, hash: options.hash });
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;

	exports['default'] = function (instance) {
	  instance.registerHelper('log', function () /* message, options */{
	    var args = [undefined],
	        options = arguments[arguments.length - 1];
	    for (var i = 0; i < arguments.length - 1; i++) {
	      args.push(arguments[i]);
	    }

	    var level = 1;
	    if (options.hash.level != null) {
	      level = options.hash.level;
	    } else if (options.data && options.data.level != null) {
	      level = options.data.level;
	    }
	    args[0] = level;

	    instance.log.apply(instance, args);
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;

	exports['default'] = function (instance) {
	  instance.registerHelper('lookup', function (obj, field) {
	    if (!obj) {
	      return obj;
	    }
	    if (field === 'constructor' && !obj.propertyIsEnumerable(field)) {
	      return undefined;
	    }
	    return obj[field];
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(4);

	exports['default'] = function (instance) {
	  instance.registerHelper('with', function (context, options) {
	    if (_utils.isFunction(context)) {
	      context = context.call(this);
	    }

	    var fn = options.fn;

	    if (!_utils.isEmpty(context)) {
	      var data = options.data;
	      if (options.data && options.ids) {
	        data = _utils.createFrame(options.data);
	        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
	      }

	      return fn(context, {
	        data: data,
	        blockParams: _utils.blockParams([context], [data && data.contextPath])
	      });
	    } else {
	      return options.inverse(this);
	    }
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(2)['default'];

	exports.__esModule = true;
	exports.registerDefaultDecorators = registerDefaultDecorators;

	var _decoratorsInline = __webpack_require__(18);

	var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);

	function registerDefaultDecorators(instance) {
	  _decoratorsInline2['default'](instance);
	}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(4);

	exports['default'] = function (instance) {
	  instance.registerDecorator('inline', function (fn, props, container, options) {
	    var ret = fn;
	    if (!props.partials) {
	      props.partials = {};
	      ret = function (context, options) {
	        // Create a new partials stack frame prior to exec.
	        var original = container.partials;
	        container.partials = _utils.extend({}, original, props.partials);
	        var ret = fn(context, options);
	        container.partials = original;
	        return ret;
	      };
	    }

	    props.partials[options.args[0]] = options.fn;

	    return ret;
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(4);

	var logger = {
	  methodMap: ['debug', 'info', 'warn', 'error'],
	  level: 'info',

	  // Maps a given level value to the `methodMap` indexes above.
	  lookupLevel: function lookupLevel(level) {
	    if (typeof level === 'string') {
	      var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
	      if (levelMap >= 0) {
	        level = levelMap;
	      } else {
	        level = parseInt(level, 10);
	      }
	    }

	    return level;
	  },

	  // Can be overridden in the host environment
	  log: function log(level) {
	    level = logger.lookupLevel(level);

	    if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
	      var method = logger.methodMap[level];
	      if (!console[method]) {
	        // eslint-disable-line no-console
	        method = 'log';
	      }

	      for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        message[_key - 1] = arguments[_key];
	      }

	      console[method].apply(console, message); // eslint-disable-line no-console
	    }
	  }
	};

	exports['default'] = logger;
	module.exports = exports['default'];

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	// Build out our basic SafeString type
	'use strict';

	exports.__esModule = true;
	function SafeString(string) {
	  this.string = string;
	}

	SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
	  return '' + this.string;
	};

	exports['default'] = SafeString;
	module.exports = exports['default'];

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _Object$seal = __webpack_require__(22)['default'];

	var _interopRequireWildcard = __webpack_require__(1)['default'];

	var _interopRequireDefault = __webpack_require__(2)['default'];

	exports.__esModule = true;
	exports.checkRevision = checkRevision;
	exports.template = template;
	exports.wrapProgram = wrapProgram;
	exports.resolvePartial = resolvePartial;
	exports.invokePartial = invokePartial;
	exports.noop = noop;

	var _utils = __webpack_require__(4);

	var Utils = _interopRequireWildcard(_utils);

	var _exception = __webpack_require__(5);

	var _exception2 = _interopRequireDefault(_exception);

	var _base = __webpack_require__(3);

	function checkRevision(compilerInfo) {
	  var compilerRevision = compilerInfo && compilerInfo[0] || 1,
	      currentRevision = _base.COMPILER_REVISION;

	  if (compilerRevision !== currentRevision) {
	    if (compilerRevision < currentRevision) {
	      var runtimeVersions = _base.REVISION_CHANGES[currentRevision],
	          compilerVersions = _base.REVISION_CHANGES[compilerRevision];
	      throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
	    } else {
	      // Use the embedded version info since the runtime doesn't know about this revision yet
	      throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
	    }
	  }
	}

	function template(templateSpec, env) {
	  /* istanbul ignore next */
	  if (!env) {
	    throw new _exception2['default']('No environment passed to template');
	  }
	  if (!templateSpec || !templateSpec.main) {
	    throw new _exception2['default']('Unknown template object: ' + typeof templateSpec);
	  }

	  templateSpec.main.decorator = templateSpec.main_d;

	  // Note: Using env.VM references rather than local var references throughout this section to allow
	  // for external users to override these as psuedo-supported APIs.
	  env.VM.checkRevision(templateSpec.compiler);

	  function invokePartialWrapper(partial, context, options) {
	    if (options.hash) {
	      context = Utils.extend({}, context, options.hash);
	      if (options.ids) {
	        options.ids[0] = true;
	      }
	    }

	    partial = env.VM.resolvePartial.call(this, partial, context, options);
	    var result = env.VM.invokePartial.call(this, partial, context, options);

	    if (result == null && env.compile) {
	      options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
	      result = options.partials[options.name](context, options);
	    }
	    if (result != null) {
	      if (options.indent) {
	        var lines = result.split('\n');
	        for (var i = 0, l = lines.length; i < l; i++) {
	          if (!lines[i] && i + 1 === l) {
	            break;
	          }

	          lines[i] = options.indent + lines[i];
	        }
	        result = lines.join('\n');
	      }
	      return result;
	    } else {
	      throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
	    }
	  }

	  // Just add water
	  var container = {
	    strict: function strict(obj, name) {
	      if (!(name in obj)) {
	        throw new _exception2['default']('"' + name + '" not defined in ' + obj);
	      }
	      return obj[name];
	    },
	    lookup: function lookup(depths, name) {
	      var len = depths.length;
	      for (var i = 0; i < len; i++) {
	        if (depths[i] && depths[i][name] != null) {
	          return depths[i][name];
	        }
	      }
	    },
	    lambda: function lambda(current, context) {
	      return typeof current === 'function' ? current.call(context) : current;
	    },

	    escapeExpression: Utils.escapeExpression,
	    invokePartial: invokePartialWrapper,

	    fn: function fn(i) {
	      var ret = templateSpec[i];
	      ret.decorator = templateSpec[i + '_d'];
	      return ret;
	    },

	    programs: [],
	    program: function program(i, data, declaredBlockParams, blockParams, depths) {
	      var programWrapper = this.programs[i],
	          fn = this.fn(i);
	      if (data || depths || blockParams || declaredBlockParams) {
	        programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
	      } else if (!programWrapper) {
	        programWrapper = this.programs[i] = wrapProgram(this, i, fn);
	      }
	      return programWrapper;
	    },

	    data: function data(value, depth) {
	      while (value && depth--) {
	        value = value._parent;
	      }
	      return value;
	    },
	    merge: function merge(param, common) {
	      var obj = param || common;

	      if (param && common && param !== common) {
	        obj = Utils.extend({}, common, param);
	      }

	      return obj;
	    },
	    // An empty object to use as replacement for null-contexts
	    nullContext: _Object$seal({}),

	    noop: env.VM.noop,
	    compilerInfo: templateSpec.compiler
	  };

	  function ret(context) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    var data = options.data;

	    ret._setup(options);
	    if (!options.partial && templateSpec.useData) {
	      data = initData(context, data);
	    }
	    var depths = undefined,
	        blockParams = templateSpec.useBlockParams ? [] : undefined;
	    if (templateSpec.useDepths) {
	      if (options.depths) {
	        depths = context != options.depths[0] ? [context].concat(options.depths) : options.depths;
	      } else {
	        depths = [context];
	      }
	    }

	    function main(context /*, options*/) {
	      return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
	    }
	    main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
	    return main(context, options);
	  }
	  ret.isTop = true;

	  ret._setup = function (options) {
	    if (!options.partial) {
	      container.helpers = container.merge(options.helpers, env.helpers);

	      if (templateSpec.usePartial) {
	        container.partials = container.merge(options.partials, env.partials);
	      }
	      if (templateSpec.usePartial || templateSpec.useDecorators) {
	        container.decorators = container.merge(options.decorators, env.decorators);
	      }
	    } else {
	      container.helpers = options.helpers;
	      container.partials = options.partials;
	      container.decorators = options.decorators;
	    }
	  };

	  ret._child = function (i, data, blockParams, depths) {
	    if (templateSpec.useBlockParams && !blockParams) {
	      throw new _exception2['default']('must pass block params');
	    }
	    if (templateSpec.useDepths && !depths) {
	      throw new _exception2['default']('must pass parent depths');
	    }

	    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
	  };
	  return ret;
	}

	function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
	  function prog(context) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    var currentDepths = depths;
	    if (depths && context != depths[0] && !(context === container.nullContext && depths[0] === null)) {
	      currentDepths = [context].concat(depths);
	    }

	    return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
	  }

	  prog = executeDecorators(fn, prog, container, depths, data, blockParams);

	  prog.program = i;
	  prog.depth = depths ? depths.length : 0;
	  prog.blockParams = declaredBlockParams || 0;
	  return prog;
	}

	function resolvePartial(partial, context, options) {
	  if (!partial) {
	    if (options.name === '@partial-block') {
	      partial = options.data['partial-block'];
	    } else {
	      partial = options.partials[options.name];
	    }
	  } else if (!partial.call && !options.name) {
	    // This is a dynamic partial that returned a string
	    options.name = partial;
	    partial = options.partials[partial];
	  }
	  return partial;
	}

	function invokePartial(partial, context, options) {
	  // Use the current closure context to save the partial-block if this partial
	  var currentPartialBlock = options.data && options.data['partial-block'];
	  options.partial = true;
	  if (options.ids) {
	    options.data.contextPath = options.ids[0] || options.data.contextPath;
	  }

	  var partialBlock = undefined;
	  if (options.fn && options.fn !== noop) {
	    (function () {
	      options.data = _base.createFrame(options.data);
	      // Wrapper function to get access to currentPartialBlock from the closure
	      var fn = options.fn;
	      partialBlock = options.data['partial-block'] = function partialBlockWrapper(context) {
	        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	        // Restore the partial-block from the closure for the execution of the block
	        // i.e. the part inside the block of the partial call.
	        options.data = _base.createFrame(options.data);
	        options.data['partial-block'] = currentPartialBlock;
	        return fn(context, options);
	      };
	      if (fn.partials) {
	        options.partials = Utils.extend({}, options.partials, fn.partials);
	      }
	    })();
	  }

	  if (partial === undefined && partialBlock) {
	    partial = partialBlock;
	  }

	  if (partial === undefined) {
	    throw new _exception2['default']('The partial ' + options.name + ' could not be found');
	  } else if (partial instanceof Function) {
	    return partial(context, options);
	  }
	}

	function noop() {
	  return '';
	}

	function initData(context, data) {
	  if (!data || !('root' in data)) {
	    data = data ? _base.createFrame(data) : {};
	    data.root = context;
	  }
	  return data;
	}

	function executeDecorators(fn, prog, container, depths, data, blockParams) {
	  if (fn.decorator) {
	    var props = {};
	    prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
	    Utils.extend(prog, props);
	  }
	  return prog;
	}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(23), __esModule: true };

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(24);
	module.exports = __webpack_require__(29).Object.seal;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(25);

	__webpack_require__(26)('seal', function($seal){
	  return function seal(it){
	    return $seal && isObject(it) ? $seal(it) : it;
	  };
	});

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(27)
	  , core    = __webpack_require__(29)
	  , fails   = __webpack_require__(32);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(28)
	  , core      = __webpack_require__(29)
	  , ctx       = __webpack_require__(30)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(31);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ }),
/* 33 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/* global window */
	'use strict';

	exports.__esModule = true;

	exports['default'] = function (Handlebars) {
	  /* istanbul ignore next */
	  var root = typeof global !== 'undefined' ? global : window,
	      $Handlebars = root.Handlebars;
	  /* istanbul ignore next */
	  Handlebars.noConflict = function () {
	    if (root.Handlebars === Handlebars) {
	      root.Handlebars = $Handlebars;
	    }
	    return Handlebars;
	  };
	};

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ })
/******/ ])
});
;
this["amp"] = this["amp"] || {};
this["amp"]["templates"] = this["amp"]["templates"] || {};

Handlebars.registerPartial("main-container-list-image", this["amp"]["templates"]["main-container-list-image"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<li>\n    <div class=\"zoom-trap\">\n        <img data-amp-src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.image : depth0)) != null ? stack1.src : stack1), depth0))
    + "?"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.templates : depth0)) != null ? stack1.main : stack1), depth0))
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.locale : depth0)) != null ? stack1.second : stack1), depth0))
    + "\"\n            data-amp-srcset=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.image : depth0)) != null ? stack1.src : stack1), depth0))
    + "?"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.templates : depth0)) != null ? stack1.main : stack1), depth0))
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.locale : depth0)) != null ? stack1.second : stack1), depth0))
    + " 1x, "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.image : depth0)) != null ? stack1.src : stack1), depth0))
    + "?"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.templates : depth0)) != null ? stack1.mainRetina : stack1), depth0))
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.locale : depth0)) != null ? stack1.second : stack1), depth0))
    + " 2x\"\n            class=\"amp-main-img inner-element\">\n    </div>\n</li>\n";
},"useData":true}));

Handlebars.registerPartial("main-container-list-spin-3d", this["amp"]["templates"]["main-container-list-spin-3d"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "            <li>\n                <ul class=\"amp-inner-spinset\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.set : depth0)) != null ? stack1.items : stack1),{"name":"each","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </ul>\n            </li>\n";
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "                        <li>\n                            <img data-amp-src=\""
    + alias4(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"src","hash":{},"data":data}) : helper)))
    + "?"
    + alias4(alias5(((stack1 = (depths[2] != null ? depths[2].templates : depths[2])) != null ? stack1.main : stack1), depth0))
    + alias4(alias5(((stack1 = (depths[2] != null ? depths[2].locale : depths[2])) != null ? stack1.second : stack1), depth0))
    + "\"\n                                 data-amp-srcset=\""
    + alias4(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"src","hash":{},"data":data}) : helper)))
    + "?"
    + alias4(alias5(((stack1 = (depths[2] != null ? depths[2].templates : depths[2])) != null ? stack1.main : stack1), depth0))
    + alias4(alias5(((stack1 = (depths[2] != null ? depths[2].locale : depths[2])) != null ? stack1.second : stack1), depth0))
    + " 1x, "
    + alias4(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"src","hash":{},"data":data}) : helper)))
    + "?"
    + alias4(alias5(((stack1 = (depths[2] != null ? depths[2].templates : depths[2])) != null ? stack1.mainRetina : stack1), depth0))
    + alias4(alias5(((stack1 = (depths[2] != null ? depths[2].locale : depths[2])) != null ? stack1.second : stack1), depth0))
    + " 2x\"\n                                 class=\"amp-main-img\">\n                        </li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<li>\n    <div class=\"spin-trap\"></div>\n    <ul id=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.spin : depth0)) != null ? stack1.name : stack1), depth0))
    + "\" class=\"inner-element amp-outer-spin\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? depth0.spin : depth0)) != null ? stack1.set : stack1)) != null ? stack1.items : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\n</li>\n\n";
},"useData":true,"useDepths":true}));

Handlebars.registerPartial("main-container-list-spin", this["amp"]["templates"]["main-container-list-spin"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "            <li>\n                <img data-amp-src=\""
    + alias4(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"src","hash":{},"data":data}) : helper)))
    + "?"
    + alias4(alias5(((stack1 = (depths[1] != null ? depths[1].templates : depths[1])) != null ? stack1.main : stack1), depth0))
    + alias4(alias5(((stack1 = (depths[1] != null ? depths[1].locale : depths[1])) != null ? stack1.second : stack1), depth0))
    + "\"\n                    data-amp-srcset=\""
    + alias4(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"src","hash":{},"data":data}) : helper)))
    + "?"
    + alias4(alias5(((stack1 = (depths[1] != null ? depths[1].templates : depths[1])) != null ? stack1.main : stack1), depth0))
    + alias4(alias5(((stack1 = (depths[1] != null ? depths[1].locale : depths[1])) != null ? stack1.second : stack1), depth0))
    + " 1x, "
    + alias4(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"src","hash":{},"data":data}) : helper)))
    + "?"
    + alias4(alias5(((stack1 = (depths[1] != null ? depths[1].templates : depths[1])) != null ? stack1.mainRetina : stack1), depth0))
    + alias4(alias5(((stack1 = (depths[1] != null ? depths[1].locale : depths[1])) != null ? stack1.second : stack1), depth0))
    + " 2x\"\n                    class=\"amp-main-img\">\n            </li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<li>\n    <div class=\"spin-trap\"></div>\n    <ul id=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.spin : depth0)) != null ? stack1.name : stack1), depth0))
    + "\" class=\"inner-element\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? depth0.spin : depth0)) != null ? stack1.set : stack1)) != null ? stack1.items : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\n</li>\n";
},"useData":true,"useDepths":true}));

Handlebars.registerPartial("main-container-list-video", this["amp"]["templates"]["main-container-list-video"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "                <source src=\""
    + alias4(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"src","hash":{},"data":data}) : helper)))
    + alias4(alias5(((stack1 = (depths[1] != null ? depths[1].locale : depths[1])) != null ? stack1.first : stack1), depth0))
    + "\" data-res=\""
    + alias4(((helper = (helper = helpers.profileLabel || (depth0 != null ? depth0.profileLabel : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"profileLabel","hash":{},"data":data}) : helper)))
    + "\" data-bitrate=\""
    + alias4(((helper = (helper = helpers.bitrate || (depth0 != null ? depth0.bitrate : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"bitrate","hash":{},"data":data}) : helper)))
    + "\" label=\""
    + alias4(((helper = (helper = helpers.profileLabel || (depth0 != null ? depth0.profileLabel : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"profileLabel","hash":{},"data":data}) : helper)))
    + "\" type=\""
    + alias4(((helper = (helper = helpers.htmlCodec || (depth0 != null ? depth0.htmlCodec : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"htmlCodec","hash":{},"data":data}) : helper)))
    + "; codecs="
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.video : depth0)) != null ? stack1.codec : stack1), depth0))
    + "\">\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<li>\n    <div id=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.video : depth0)) != null ? stack1.name : stack1), depth0))
    + "\" class=\"inner-element video\">\n        <video poster=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.video : depth0)) != null ? stack1.src : stack1), depth0))
    + "?"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.templates : depth0)) != null ? stack1.main : stack1), depth0))
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.locale : depth0)) != null ? stack1.second : stack1), depth0))
    + "\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.video : depth0)) != null ? stack1.media : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </video>\n    </div>\n</li>\n";
},"useData":true,"useDepths":true}));

Handlebars.registerPartial("main-container-list", this["amp"]["templates"]["main-container-list"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.set : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.program(7, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.set : depth0)) != null ? stack1.items : stack1)) != null ? stack1["0"] : stack1)) != null ? stack1.set : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.program(5, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data,blockParams,depths) {
    return "                "
    + container.escapeExpression((helpers.renderPartial || (depth0 && depth0.renderPartial) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"main-container-list-spin-3d",{"name":"renderPartial","hash":{"locale":(depths[1] != null ? depths[1].locale : depths[1]),"templates":(depths[1] != null ? depths[1].templates : depths[1]),"spin":depth0},"data":data}))
    + "\n";
},"5":function(container,depth0,helpers,partials,data,blockParams,depths) {
    return "                "
    + container.escapeExpression((helpers.renderPartial || (depth0 && depth0.renderPartial) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"main-container-list-spin",{"name":"renderPartial","hash":{"locale":(depths[1] != null ? depths[1].locale : depths[1]),"templates":(depths[1] != null ? depths[1].templates : depths[1]),"spin":depth0},"data":data}))
    + "\n";
},"7":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.media : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.program(10, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data,blockParams,depths) {
    return "                "
    + container.escapeExpression((helpers.renderPartial || (depth0 && depth0.renderPartial) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"main-container-list-video",{"name":"renderPartial","hash":{"locale":(depths[1] != null ? depths[1].locale : depths[1]),"templates":(depths[1] != null ? depths[1].templates : depths[1]),"video":depth0},"data":data}))
    + "\n";
},"10":function(container,depth0,helpers,partials,data,blockParams,depths) {
    return "                "
    + container.escapeExpression((helpers.renderPartial || (depth0 && depth0.renderPartial) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"main-container-list-image",{"name":"renderPartial","hash":{"locale":(depths[1] != null ? depths[1].locale : depths[1]),"templates":(depths[1] != null ? depths[1].templates : depths[1]),"image":depth0},"data":data}))
    + "\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<ul class=\"list\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\n";
},"useData":true,"useDepths":true}));

Handlebars.registerPartial("nav-container-list-item", this["amp"]["templates"]["nav-container-list-item"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <div class=\"tooltip "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.set : stack1)) != null ? stack1.items : stack1)) != null ? stack1["0"] : stack1)) != null ? stack1.set : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "\">\n            <span class=\"tooltip-icon\"></span>\n        </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "spin-3d";
},"4":function(container,depth0,helpers,partials,data) {
    return "spin";
},"6":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"tooltip video\">\n            <span class=\"tooltip-icon\"></span>\n        </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.lambda, alias3=container.escapeExpression;

  return "<li>\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.set : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.media : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <img data-amp-src=\""
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.src : stack1), depth0))
    + "?"
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.templates : depth0)) != null ? stack1.thumb : stack1), depth0))
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.locale : depth0)) != null ? stack1.second : stack1), depth0))
    + "\"\n        alt=\"\"\n        class=\"amp-main-img thumbnail\">\n    <div class=\"amp-margin-helper\"></div>\n</li>\n";
},"useData":true}));

Handlebars.registerPartial("nav-container-list", this["amp"]["templates"]["nav-container-list"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    return "        "
    + container.escapeExpression((helpers.renderPartial || (depth0 && depth0.renderPartial) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"nav-container-list-item",{"name":"renderPartial","hash":{"locale":(depths[1] != null ? depths[1].locale : depths[1]),"templates":(depths[1] != null ? depths[1].templates : depths[1]),"item":depth0},"data":data}))
    + "\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<ul class=\"list\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\n";
},"useData":true,"useDepths":true}));

this["amp"]["templates"]["desktopFullView"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4=container.lambda;

  return "<div class=\"desktop-full-view\">\n    <div class=\"main-container\">\n        "
    + alias3((helpers.renderPartial || (depth0 && depth0.renderPartial) || alias2).call(alias1,"main-container-list",{"name":"renderPartial","hash":{"locale":(depth0 != null ? depth0.locale : depth0),"templates":(depth0 != null ? depth0.templates : depth0),"items":(depth0 != null ? depth0.items : depth0)},"data":data}))
    + "\n        <div class=\"icon close\"></div>\n        <div class=\"tooltip\">\n            <span class=\"text\"></span>\n            <span class=\"tooltip-icon\"></span>\n        </div>\n        <div class=\""
    + alias3(alias4(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.templates : depth0)) != null ? stack1.navIcons : stack1)) != null ? stack1.main : stack1)) != null ? stack1.prev : stack1), depth0))
    + " amp-js-nav main-container-prev\"></div>\n        <div class=\""
    + alias3(alias4(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.templates : depth0)) != null ? stack1.navIcons : stack1)) != null ? stack1.main : stack1)) != null ? stack1.next : stack1), depth0))
    + " amp-js-nav main-container-next\"></div>\n    </div>\n    <div class=\"nav-container\">\n        "
    + alias3((helpers.renderPartial || (depth0 && depth0.renderPartial) || alias2).call(alias1,"nav-container-list",{"name":"renderPartial","hash":{"locale":(depth0 != null ? depth0.locale : depth0),"templates":(depth0 != null ? depth0.templates : depth0),"items":(depth0 != null ? depth0.items : depth0)},"data":data}))
    + "\n        <div class=\""
    + alias3(alias4(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.templates : depth0)) != null ? stack1.navIcons : stack1)) != null ? stack1.nav : stack1)) != null ? stack1.prev : stack1), depth0))
    + " amp-js-nav nav-container-prev\"></div>\n        <div class=\""
    + alias3(alias4(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.templates : depth0)) != null ? stack1.navIcons : stack1)) != null ? stack1.nav : stack1)) != null ? stack1.next : stack1), depth0))
    + " amp-js-nav nav-container-next\"></div>\n    </div>\n    <div class=\"panel\">\n        <div class=\"icon plus\"></div>\n        <div class=\"icon minus\"></div>\n    </div>\n</div>\n";
},"useData":true});

this["amp"]["templates"]["desktopNormalView"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "amp-"
    + container.escapeExpression(((helper = (helper = helpers.view || (depth0 != null ? depth0.view : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"view","hash":{},"data":data}) : helper)))
    + "-view";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4=container.lambda;

  return "<div class=\"desktop-normal-view "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.view : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n    <div class=\"main-container\">\n        "
    + alias3((helpers.renderPartial || (depth0 && depth0.renderPartial) || alias2).call(alias1,"main-container-list",{"name":"renderPartial","hash":{"locale":(depth0 != null ? depth0.locale : depth0),"templates":(depth0 != null ? depth0.templates : depth0),"items":(depth0 != null ? depth0.items : depth0)},"data":data}))
    + "\n        <div class=\"tooltip\">\n            <span class=\"text\">Click to zoom</span>\n            <span class=\"tooltip-icon\"></span>\n        </div>\n        <div class=\""
    + alias3(alias4(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.templates : depth0)) != null ? stack1.navIcons : stack1)) != null ? stack1.main : stack1)) != null ? stack1.prev : stack1), depth0))
    + " amp-js-nav main-container-prev\"></div>\n        <div class=\""
    + alias3(alias4(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.templates : depth0)) != null ? stack1.navIcons : stack1)) != null ? stack1.main : stack1)) != null ? stack1.next : stack1), depth0))
    + " amp-js-nav main-container-next\"></div>\n    </div>\n    <div class=\"nav-container\">\n        "
    + alias3((helpers.renderPartial || (depth0 && depth0.renderPartial) || alias2).call(alias1,"nav-container-list",{"name":"renderPartial","hash":{"locale":(depth0 != null ? depth0.locale : depth0),"templates":(depth0 != null ? depth0.templates : depth0),"items":(depth0 != null ? depth0.items : depth0)},"data":data}))
    + "\n        <div class=\""
    + alias3(alias4(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.templates : depth0)) != null ? stack1.navIcons : stack1)) != null ? stack1.nav : stack1)) != null ? stack1.prev : stack1), depth0))
    + " amp-js-nav nav-container-prev\"></div>\n        <div class=\""
    + alias3(alias4(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.templates : depth0)) != null ? stack1.navIcons : stack1)) != null ? stack1.nav : stack1)) != null ? stack1.next : stack1), depth0))
    + " amp-js-nav nav-container-next\"></div>\n    </div>\n</div>\n";
},"useData":true});

this["amp"]["templates"]["mobileNormalView"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "mobile-"
    + container.escapeExpression(((helper = (helper = helpers.view || (depth0 != null ? depth0.view : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"view","hash":{},"data":data}) : helper)))
    + "-view";
},"3":function(container,depth0,helpers,partials,data) {
    return "                <div>\n                    <div class=\"mobile-thumbnail\"></div>\n                </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, alias3=container.lambda;

  return "<div class=\"mobile-normal-view "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.view : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n    <div class=\"main-container\">\n        "
    + alias2((helpers.renderPartial || (depth0 && depth0.renderPartial) || helpers.helperMissing).call(alias1,"main-container-list",{"name":"renderPartial","hash":{"locale":(depth0 != null ? depth0.locale : depth0),"templates":(depth0 != null ? depth0.templates : depth0),"items":(depth0 != null ? depth0.items : depth0)},"data":data}))
    + "\n        <div class=\"icon close\"></div>\n        <div class=\"tooltip\">\n            <span class=\"text\"></span>\n            <span class=\"tooltip-icon\"></span>\n        </div>\n    </div>\n    <div class=\"nav-container\">\n        <ul class=\"list\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>\n        <div class=\""
    + alias2(alias3(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.templates : depth0)) != null ? stack1.navIcons : stack1)) != null ? stack1.nav : stack1)) != null ? stack1.prev : stack1), depth0))
    + " amp-js-nav nav-container-prev\"></div>\n        <div class=\""
    + alias2(alias3(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.templates : depth0)) != null ? stack1.navIcons : stack1)) != null ? stack1.nav : stack1)) != null ? stack1.next : stack1), depth0))
    + " amp-js-nav nav-container-next\"></div>\n    </div>\n</div>\n";
},"useData":true});
(function (global) {
    /* jshint -W097 */
    'use strict';

    Handlebars.registerHelper('renderPartial', function(partialName, options) {
        if (!partialName) {
            console.error('No partial name given.');
            return '';
        }
        var partial = Handlebars.partials[partialName];
        if (!partial) {
            console.error('Couldnt find the compiled partial: ' + partialName);
            return '';
        }
        return new Handlebars.SafeString( partial(options.hash) );
    });
    
}(window));
(function(e){Array.prototype.map||(Array.prototype.map=function(e,r){var a,o,i;if(null==this)throw new TypeError(" this is null or not defined");var n=Object(this),t=n.length>>>0;if("function"!=typeof e)throw new TypeError(e+" is not a function");for(r&&(a=r),o=Array(t),i=0;t>i;){var l,d;i in n&&(l=n[i],d=e.call(a,l,i,n),o[i]=d),i++}return o});var r=e.detect=function(){var e=function(){},r={browser_parsers:[{regex:"^(Opera)/(\\d+)\\.(\\d+) \\(Nintendo Wii",family_replacement:"Wii",manufacturer:"Nintendo"},{regex:"(SeaMonkey|Camino)/(\\d+)\\.(\\d+)\\.?([ab]?\\d+[a-z]*)",family_replacement:"Camino",other:!0},{regex:"(Pale[Mm]oon)/(\\d+)\\.(\\d+)\\.?(\\d+)?",family_replacement:"Pale Moon (Firefox Variant)",other:!0},{regex:"(Fennec)/(\\d+)\\.(\\d+)\\.?([ab]?\\d+[a-z]*)",family_replacement:"Firefox Mobile"},{regex:"(Fennec)/(\\d+)\\.(\\d+)(pre)",family_replacment:"Firefox Mobile"},{regex:"(Fennec)/(\\d+)\\.(\\d+)",family_replacement:"Firefox Mobile"},{regex:"Mobile.*(Firefox)/(\\d+)\\.(\\d+)",family_replacement:"Firefox Mobile"},{regex:"(Namoroka|Shiretoko|Minefield)/(\\d+)\\.(\\d+)\\.(\\d+(?:pre)?)",family_replacement:"Firefox ($1)"},{regex:"(Firefox)/(\\d+)\\.(\\d+)(a\\d+[a-z]*)",family_replacement:"Firefox Alpha"},{regex:"(Firefox)/(\\d+)\\.(\\d+)(b\\d+[a-z]*)",family_replacement:"Firefox Beta"},{regex:"(Firefox)-(?:\\d+\\.\\d+)?/(\\d+)\\.(\\d+)(a\\d+[a-z]*)",family_replacement:"Firefox Alpha"},{regex:"(Firefox)-(?:\\d+\\.\\d+)?/(\\d+)\\.(\\d+)(b\\d+[a-z]*)",family_replacement:"Firefox Beta"},{regex:"(Namoroka|Shiretoko|Minefield)/(\\d+)\\.(\\d+)([ab]\\d+[a-z]*)?",family_replacement:"Firefox ($1)"},{regex:"(Firefox).*Tablet browser (\\d+)\\.(\\d+)\\.(\\d+)",family_replacement:"MicroB",tablet:!0},{regex:"(MozillaDeveloperPreview)/(\\d+)\\.(\\d+)([ab]\\d+[a-z]*)?"},{regex:"(Flock)/(\\d+)\\.(\\d+)(b\\d+?)",family_replacement:"Flock",other:!0},{regex:"(RockMelt)/(\\d+)\\.(\\d+)\\.(\\d+)",family_replacement:"Rockmelt",other:!0},{regex:"(Navigator)/(\\d+)\\.(\\d+)\\.(\\d+)",family_replacement:"Netscape"},{regex:"(Navigator)/(\\d+)\\.(\\d+)([ab]\\d+)",family_replacement:"Netscape"},{regex:"(Netscape6)/(\\d+)\\.(\\d+)\\.(\\d+)",family_replacement:"Netscape"},{regex:"(MyIBrow)/(\\d+)\\.(\\d+)",family_replacement:"My Internet Browser",other:!0},{regex:"(Opera Tablet).*Version/(\\d+)\\.(\\d+)(?:\\.(\\d+))?",family_replacement:"Opera Tablet",tablet:!0},{regex:"(Opera)/.+Opera Mobi.+Version/(\\d+)\\.(\\d+)",family_replacement:"Opera Mobile"},{regex:"Opera Mobi",family_replacement:"Opera Mobile"},{regex:"(Opera Mini)/(\\d+)\\.(\\d+)",family_replacement:"Opera Mini"},{regex:"(Opera Mini)/att/(\\d+)\\.(\\d+)",family_replacement:"Opera Mini"},{regex:"(Opera)/9.80.*Version/(\\d+)\\.(\\d+)(?:\\.(\\d+))?",family_replacement:"Opera"},{regex:"(OPR)/(\\d+)\\.(\\d+)(?:\\.(\\d+))?",family_replacement:"Opera"},{regex:"(webOSBrowser)/(\\d+)\\.(\\d+)",family_replacement:"webOS"},{regex:"(webOS)/(\\d+)\\.(\\d+)",family_replacement:"webOS"},{regex:"(wOSBrowser).+TouchPad/(\\d+)\\.(\\d+)",family_replacement:"webOS TouchPad"},{regex:"(luakit)",family_replacement:"LuaKit",other:!0},{regex:"(Lightning)/(\\d+)\\.(\\d+)([ab]?\\d+[a-z]*)",family_replacement:"Lightning",other:!0},{regex:"(Firefox)/(\\d+)\\.(\\d+)\\.(\\d+(?:pre)?) \\(Swiftfox\\)",family_replacement:"Swiftfox",other:!0},{regex:"(Firefox)/(\\d+)\\.(\\d+)([ab]\\d+[a-z]*)? \\(Swiftfox\\)",family_replacement:"Swiftfox",other:!0},{regex:"rekonq",family_replacement:"Rekonq",other:!0},{regex:"(conkeror|Conkeror)/(\\d+)\\.(\\d+)\\.?(\\d+)?",family_replacement:"Conkeror",other:!0},{regex:"(konqueror)/(\\d+)\\.(\\d+)\\.(\\d+)",family_replacement:"Konqueror",other:!0},{regex:"(WeTab)-Browser",family_replacement:"WeTab",other:!0},{regex:"(Comodo_Dragon)/(\\d+)\\.(\\d+)\\.(\\d+)",family_replacement:"Comodo Dragon",other:!0},{regex:"(YottaaMonitor)",family_replacement:"Yottaa Monitor",other:!0},{regex:"(Kindle)/(\\d+)\\.(\\d+)",family_replacement:"Kindle"},{regex:"(Symphony) (\\d+).(\\d+)",family_replacement:"Symphony",other:!0},{regex:"Minimo",family_replacement:"Minimo",other:!0},{regex:"(Edge)/(\\d+)\\.(\\d+)",family_replacement:"Edge"},{regex:"(CrMo)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)",family_replacement:"Chrome Mobile"},{regex:"(CriOS)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)",family_replacement:"Chrome Mobile iOS"},{regex:"(Chrome)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+) Mobile",family_replacement:"Chrome Mobile"},{regex:"(chromeframe)/(\\d+)\\.(\\d+)\\.(\\d+)",family_replacement:"Chrome Frame"},{regex:"(UC Browser)(\\d+)\\.(\\d+)\\.(\\d+)",family_replacement:"UC Browser",other:!0},{regex:"(SLP Browser)/(\\d+)\\.(\\d+)",family_replacement:"Tizen Browser",other:!0},{regex:"(Epiphany)/(\\d+)\\.(\\d+).(\\d+)",family_replacement:"Epiphany",other:!0},{regex:"(SE 2\\.X) MetaSr (\\d+)\\.(\\d+)",family_replacement:"Sogou Explorer",other:!0},{regex:"(Pingdom.com_bot_version_)(\\d+)\\.(\\d+)",family_replacement:"PingdomBot",other:!0},{regex:"(facebookexternalhit)/(\\d+)\\.(\\d+)",family_replacement:"FacebookBot"},{regex:"(Twitterbot)/(\\d+)\\.(\\d+)",family_replacement:"TwitterBot"},{regex:"(AdobeAIR|Chromium|FireWeb|Jasmine|ANTGalio|Midori|Fresco|Lobo|PaleMoon|Maxthon|Lynx|OmniWeb|Dillo|Camino|Demeter|Fluid|Fennec|Shiira|Sunrise|Chrome|Flock|Netscape|Lunascape|WebPilot|NetFront|Netfront|Konqueror|SeaMonkey|Kazehakase|Vienna|Iceape|Iceweasel|IceWeasel|Iron|K-Meleon|Sleipnir|Galeon|GranParadiso|Opera Mini|iCab|NetNewsWire|ThunderBrowse|Iron|Iris|UP\\.Browser|Bunjaloo|Google Earth|Raven for Mac)/(\\d+)\\.(\\d+)\\.(\\d+)"},{regex:"(Bolt|Jasmine|IceCat|Skyfire|Midori|Maxthon|Lynx|Arora|IBrowse|Dillo|Camino|Shiira|Fennec|Phoenix|Chrome|Flock|Netscape|Lunascape|Epiphany|WebPilot|Opera Mini|Opera|NetFront|Netfront|Konqueror|Googlebot|SeaMonkey|Kazehakase|Vienna|Iceape|Iceweasel|IceWeasel|Iron|K-Meleon|Sleipnir|Galeon|GranParadiso|iCab|NetNewsWire|Iron|Space Bison|Stainless|Orca|Dolfin|BOLT|Minimo|Tizen Browser|Polaris)/(\\d+)\\.(\\d+)"},{regex:"(iRider|Crazy Browser|SkipStone|iCab|Lunascape|Sleipnir|Maemo Browser) (\\d+)\\.(\\d+)\\.(\\d+)"},{regex:"(iCab|Lunascape|Opera|Android|Jasmine|Polaris|BREW) (\\d+)\\.(\\d+)\\.?(\\d+)?"},{regex:"(Android) Donut",v2_replacement:"2",v1_replacement:"1"},{regex:"(Android) Eclair",v2_replacement:"1",v1_replacement:"2"},{regex:"(Android) Froyo",v2_replacement:"2",v1_replacement:"2"},{regex:"(Android) Gingerbread",v2_replacement:"3",v1_replacement:"2"},{regex:"(Android) Honeycomb",v1_replacement:"3"},{regex:"(IEMobile)[ /](\\d+)\\.(\\d+)",family_replacement:"IE Mobile"},{regex:"(MSIE) (\\d+)\\.(\\d+).*XBLWP7",family_replacement:"IE Large Screen"},{regex:"(Firefox)/(\\d+)\\.(\\d+)\\.(\\d+)"},{regex:"(Firefox)/(\\d+)\\.(\\d+)(pre|[ab]\\d+[a-z]*)?"},{regex:"(Obigo)InternetBrowser",other:!0},{regex:"(Obigo)\\-Browser",other:!0},{regex:"(Obigo|OBIGO)[^\\d]*(\\d+)(?:.(\\d+))?",other:!0},{regex:"(MAXTHON|Maxthon) (\\d+)\\.(\\d+)",family_replacement:"Maxthon",other:!0},{regex:"(Maxthon|MyIE2|Uzbl|Shiira)",v1_replacement:"0",other:!0},{regex:"(PLAYSTATION) (\\d+)",family_replacement:"PlayStation",manufacturer:"Sony"},{regex:"(PlayStation Portable)[^\\d]+(\\d+).(\\d+)",manufacturer:"Sony"},{regex:"(BrowseX) \\((\\d+)\\.(\\d+)\\.(\\d+)",other:!0},{regex:"(POLARIS)/(\\d+)\\.(\\d+)",family_replacement:"Polaris",other:!0},{regex:"(Embider)/(\\d+)\\.(\\d+)",family_replacement:"Polaris",other:!0},{regex:"(BonEcho)/(\\d+)\\.(\\d+)\\.(\\d+)",family_replacement:"Bon Echo",other:!0},{regex:"(iPod).+Version/(\\d+)\\.(\\d+)\\.(\\d+)",family_replacement:"Mobile Safari",manufacturer:"Apple"},{regex:"(iPod).*Version/(\\d+)\\.(\\d+)",family_replacement:"Mobile Safari",manufacturer:"Apple"},{regex:"(iPod)",family_replacement:"Mobile Safari",manufacturer:"Apple"},{regex:"(iPhone).*Version/(\\d+)\\.(\\d+)\\.(\\d+)",family_replacement:"Mobile Safari",manufacturer:"Apple"},{regex:"(iPhone).*Version/(\\d+)\\.(\\d+)",family_replacement:"Mobile Safari",manufacturer:"Apple"},{regex:"(iPhone)",family_replacement:"Mobile Safari",manufacturer:"Apple"},{regex:"(iPad).*Version/(\\d+)\\.(\\d+)\\.(\\d+)",family_replacement:"Mobile Safari",tablet:!0,manufacturer:"Apple"},{regex:"(iPad).*Version/(\\d+)\\.(\\d+)",family_replacement:"Mobile Safari",tablet:!0,manufacturer:"Apple"},{regex:"(iPad)",family_replacement:"Mobile Safari",tablet:!0,manufacturer:"Apple"},{regex:"(AvantGo) (\\d+).(\\d+)",other:!0},{regex:"(Avant)",v1_replacement:"1",other:!0},{regex:"^(Nokia)",family_replacement:"Nokia Services (WAP) Browser",manufacturer:"Nokia"},{regex:"(NokiaBrowser)/(\\d+)\\.(\\d+).(\\d+)\\.(\\d+)",manufacturer:"Nokia"},{regex:"(NokiaBrowser)/(\\d+)\\.(\\d+).(\\d+)",manufacturer:"Nokia"},{regex:"(NokiaBrowser)/(\\d+)\\.(\\d+)",manufacturer:"Nokia"},{regex:"(BrowserNG)/(\\d+)\\.(\\d+).(\\d+)",family_replacement:"NokiaBrowser",manufacturer:"Nokia"},{regex:"(Series60)/5\\.0",v2_replacement:"0",v1_replacement:"7",family_replacement:"NokiaBrowser",manufacturer:"Nokia"},{regex:"(Series60)/(\\d+)\\.(\\d+)",family_replacement:"Nokia OSS Browser",manufacturer:"Nokia"},{regex:"(S40OviBrowser)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)",family_replacement:"Nokia Series 40 Ovi Browser",manufacturer:"Nokia"},{regex:"(Nokia)[EN]?(\\d+)",manufacturer:"Nokia"},{regex:"(PlayBook).+RIM Tablet OS (\\d+)\\.(\\d+)\\.(\\d+)",family_replacement:"Blackberry WebKit",tablet:!0,manufacturer:"Nokia"},{regex:"(Black[bB]erry).+Version/(\\d+)\\.(\\d+)\\.(\\d+)",family_replacement:"Blackberry WebKit",manufacturer:"RIM"},{regex:"(Black[bB]erry)\\s?(\\d+)",family_replacement:"Blackberry",manufacturer:"RIM"},{regex:"(OmniWeb)/v(\\d+)\\.(\\d+)",other:!0},{regex:"(Blazer)/(\\d+)\\.(\\d+)",family_replacement:"Palm Blazer",manufacturer:"Palm"},{regex:"(Pre)/(\\d+)\\.(\\d+)",family_replacement:"Palm Pre",manufacturer:"Palm"},{regex:"(Links) \\((\\d+)\\.(\\d+)",other:!0},{regex:"(QtWeb) Internet Browser/(\\d+)\\.(\\d+)",other:!0},{regex:"(Silk)/(\\d+)\\.(\\d+)(?:\\.([0-9\\-]+))?",other:!0,tablet:!0},{regex:"(AppleWebKit)/(\\d+)\\.?(\\d+)?\\+ .* Version/\\d+\\.\\d+.\\d+ Safari/",family_replacement:"WebKit Nightly"},{regex:"(Version)/(\\d+)\\.(\\d+)(?:\\.(\\d+))?.*Safari/",family_replacement:"Safari"},{regex:"(Safari)/\\d+"},{regex:"(OLPC)/Update(\\d+)\\.(\\d+)",other:!0},{regex:"(OLPC)/Update()\\.(\\d+)",v1_replacement:"0",other:!0},{regex:"(SEMC\\-Browser)/(\\d+)\\.(\\d+)",other:!0},{regex:"(Teleca)",family_replacement:"Teleca Browser",other:!0},{regex:"Trident(.*)rv.(\\d+)\\.(\\d+)",family_replacement:"IE"},{regex:"(MSIE) (\\d+)\\.(\\d+)",family_replacement:"IE"}],os_parsers:[{regex:"(Android) (\\d+)\\.(\\d+)(?:[.\\-]([a-z0-9]+))?"},{regex:"(Android)\\-(\\d+)\\.(\\d+)(?:[.\\-]([a-z0-9]+))?"},{regex:"(Android) Donut",os_v2_replacement:"2",os_v1_replacement:"1"},{regex:"(Android) Eclair",os_v2_replacement:"1",os_v1_replacement:"2"},{regex:"(Android) Froyo",os_v2_replacement:"2",os_v1_replacement:"2"},{regex:"(Android) Gingerbread",os_v2_replacement:"3",os_v1_replacement:"2"},{regex:"(Android) Honeycomb",os_v1_replacement:"3"},{regex:"(Silk-Accelerated=[a-z]{4,5})",os_replacement:"Android"},{regex:"(Windows Phone 6\\.5)"},{regex:"(Windows (?:NT 5\\.2|NT 5\\.1))",os_replacement:"Windows XP"},{regex:"(XBLWP7)",os_replacement:"Windows Phone OS"},{regex:"(Windows NT 6\\.1)",os_replacement:"Windows 7"},{regex:"(Windows NT 6\\.0)",os_replacement:"Windows Vista"},{regex:"(Windows 98|Windows XP|Windows ME|Windows 95|Windows CE|Windows 7|Windows NT 4\\.0|Windows Vista|Windows 2000)"},{regex:"(Windows NT 6\\.4|Windows NT 10\\.0)",os_replacement:"Windows 10"},{regex:"(Windows NT 6\\.2)",os_replacement:"Windows 8"},{regex:"(Windows Phone 8)",os_replacement:"Windows Phone 8"},{regex:"(Windows NT 5\\.0)",os_replacement:"Windows 2000"},{regex:"(Windows Phone OS) (\\d+)\\.(\\d+)"},{regex:"(Windows ?Mobile)",os_replacement:"Windows Mobile"},{regex:"(WinNT4.0)",os_replacement:"Windows NT 4.0"},{regex:"(Win98)",os_replacement:"Windows 98"},{regex:"(Tizen)/(\\d+)\\.(\\d+)",other:!0},{regex:"(Mac OS X) (\\d+)[_.](\\d+)(?:[_.](\\d+))?",manufacturer:"Apple"},{regex:"(?:PPC|Intel) (Mac OS X)",manufacturer:"Apple"},{regex:"(CPU OS|iPhone OS) (\\d+)_(\\d+)(?:_(\\d+))?",os_replacement:"iOS",manufacturer:"Apple"},{regex:"(iPhone|iPad|iPod); Opera",os_replacement:"iOS",manufacturer:"Apple"},{regex:"(iPad); Opera",tablet:!0,manufacturer:"Apple"},{regex:"(iPhone|iPad|iPod).*Mac OS X.*Version/(\\d+)\\.(\\d+)",os_replacement:"iOS",manufacturer:"Apple"},{regex:"(CrOS) [a-z0-9_]+ (\\d+)\\.(\\d+)(?:\\.(\\d+))?",os_replacement:"Chrome OS"},{regex:"(Debian)-(\\d+)\\.(\\d+)\\.(\\d+)(?:\\.(\\d+))?",other:!0},{regex:"(Linux Mint)(?:/(\\d+))?",other:!0},{regex:"(Mandriva)(?: Linux)?/(\\d+)\\.(\\d+)\\.(\\d+)(?:\\.(\\d+))?",other:!0},{regex:"(Symbian[Oo][Ss])/(\\d+)\\.(\\d+)",os_replacement:"Symbian OS"},{regex:"(Symbian/3).+NokiaBrowser/7\\.3",os_replacement:"Symbian^3 Anna"},{regex:"(Symbian/3).+NokiaBrowser/7\\.4",os_replacement:"Symbian^3 Belle"},{regex:"(Symbian/3)",os_replacement:"Symbian^3"},{regex:"(Series 60|SymbOS|S60)",os_replacement:"Symbian OS"},{regex:"(MeeGo)",other:!0},{regex:"Symbian [Oo][Ss]",os_replacement:"Symbian OS"},{regex:"(Black[Bb]erry)[0-9a-z]+/(\\d+)\\.(\\d+)\\.(\\d+)(?:\\.(\\d+))?",os_replacement:"BlackBerry OS",manufacturer:"RIM"},{regex:"(Black[Bb]erry).+Version/(\\d+)\\.(\\d+)\\.(\\d+)(?:\\.(\\d+))?",os_replacement:"BlackBerry OS",manufacturer:"RIM"},{regex:"(RIM Tablet OS) (\\d+)\\.(\\d+)\\.(\\d+)",os_replacement:"BlackBerry Tablet OS",tablet:!0,manufacturer:"RIM"},{regex:"(Play[Bb]ook)",os_replacement:"BlackBerry Tablet OS",tablet:!0,manufacturer:"RIM"},{regex:"(Black[Bb]erry)",os_replacement:"Blackberry OS",manufacturer:"RIM"},{regex:"(webOS|hpwOS)/(\\d+)\\.(\\d+)(?:\\.(\\d+))?",os_replacement:"webOS"},{regex:"(SUSE|Fedora|Red Hat|PCLinuxOS)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)",other:!0},{regex:"(SUSE|Fedora|Red Hat|Puppy|PCLinuxOS|CentOS)/(\\d+)\\.(\\d+)\\.(\\d+)",other:!0},{regex:"(Ubuntu|Kindle|Bada|Lubuntu|BackTrack|Red Hat|Slackware)/(\\d+)\\.(\\d+)"},{regex:"(Windows|OpenBSD|FreeBSD|NetBSD|Ubuntu|Kubuntu|Android|Arch Linux|CentOS|WeTab|Slackware)"},{regex:"(Linux|BSD)",other:!0}],mobile_os_families:["Windows Phone 6.5","Windows CE","Symbian OS"],device_parsers:[{regex:"HTC ([A-Z][a-z0-9]+) Build",device_replacement:"HTC $1",manufacturer:"HTC"},{regex:"HTC ([A-Z][a-z0-9 ]+) \\d+\\.\\d+\\.\\d+\\.\\d+",device_replacement:"HTC $1",manufacturer:"HTC"},{regex:"HTC_Touch_([A-Za-z0-9]+)",device_replacement:"HTC Touch ($1)",manufacturer:"HTC"},{regex:"USCCHTC(\\d+)",device_replacement:"HTC $1 (US Cellular)",manufacturer:"HTC"},{regex:"Sprint APA(9292)",device_replacement:"HTC $1 (Sprint)",manufacturer:"HTC"},{regex:"HTC ([A-Za-z0-9]+ [A-Z])",device_replacement:"HTC $1",manufacturer:"HTC"},{regex:"HTC-([A-Za-z0-9]+)",device_replacement:"HTC $1",manufacturer:"HTC"},{regex:"HTC_([A-Za-z0-9]+)",device_replacement:"HTC $1",manufacturer:"HTC"},{regex:"HTC ([A-Za-z0-9]+)",device_replacement:"HTC $1",manufacturer:"HTC"},{regex:"(ADR[A-Za-z0-9]+)",device_replacement:"HTC $1",manufacturer:"HTC"},{regex:"(HTC)",manufacturer:"HTC"},{regex:"SonyEricsson([A-Za-z0-9]+)/",device_replacement:"Ericsson $1",other:!0,manufacturer:"Sony"},{regex:"Android[\\- ][\\d]+\\.[\\d]+\\; [A-Za-z]{2}\\-[A-Za-z]{2}\\; WOWMobile (.+) Build"},{regex:"Android[\\- ][\\d]+\\.[\\d]+\\.[\\d]+; [A-Za-z]{2}\\-[A-Za-z]{2}\\; (.+) Build"},{regex:"Android[\\- ][\\d]+\\.[\\d]+\\-update1\\; [A-Za-z]{2}\\-[A-Za-z]{2}\\; (.+) Build"},{regex:"Android[\\- ][\\d]+\\.[\\d]+\\; [A-Za-z]{2}\\-[A-Za-z]{2}\\; (.+) Build"},{regex:"Android[\\- ][\\d]+\\.[\\d]+\\.[\\d]+; (.+) Build"},{regex:"NokiaN([0-9]+)",device_replacement:"Nokia N$1",manufacturer:"Nokia"},{regex:"Nokia([A-Za-z0-9\\v-]+)",device_replacement:"Nokia $1",manufacturer:"Nokia"},{regex:"NOKIA ([A-Za-z0-9\\-]+)",device_replacement:"Nokia $1",manufacturer:"Nokia"},{regex:"Nokia ([A-Za-z0-9\\-]+)",device_replacement:"Nokia $1",manufacturer:"Nokia"},{regex:"Lumia ([A-Za-z0-9\\-]+)",device_replacement:"Lumia $1",manufacturer:"Nokia"},{regex:"Symbian",device_replacement:"Nokia",manufacturer:"Nokia"},{regex:"(PlayBook).+RIM Tablet OS",device_replacement:"Blackberry Playbook",tablet:!0,manufacturer:"RIM"},{regex:"(Black[Bb]erry [0-9]+);",manufacturer:"RIM"},{regex:"Black[Bb]erry([0-9]+)",device_replacement:"BlackBerry $1",manufacturer:"RIM"},{regex:"(Pre)/(\\d+)\\.(\\d+)",device_replacement:"Palm Pre",manufacturer:"Palm"},{regex:"(Pixi)/(\\d+)\\.(\\d+)",device_replacement:"Palm Pixi",manufacturer:"Palm"},{regex:"(Touchpad)/(\\d+)\\.(\\d+)",device_replacement:"HP Touchpad",manufacturer:"HP"},{regex:"HPiPAQ([A-Za-z0-9]+)/(\\d+).(\\d+)",device_replacement:"HP iPAQ $1",manufacturer:"HP"},{regex:"Palm([A-Za-z0-9]+)",device_replacement:"Palm $1",manufacturer:"Palm"},{regex:"Treo([A-Za-z0-9]+)",device_replacement:"Palm Treo $1",manufacturer:"Palm"},{regex:"webOS.*(P160UNA)/(\\d+).(\\d+)",device_replacement:"HP Veer",manufacturer:"HP"},{regex:"(Kindle Fire)",manufacturer:"Amazon"},{regex:"(Kindle)",manufacturer:"Amazon"},{regex:"(Silk)/(\\d+)\\.(\\d+)(?:\\.([0-9\\-]+))?",device_replacement:"Kindle Fire",tablet:!0,manufacturer:"Amazon"},{regex:"(iPad) Simulator;",manufacturer:"Apple"},{regex:"(iPad);",manufacturer:"Apple"},{regex:"(iPod);",manufacturer:"Apple"},{regex:"(iPhone) Simulator;",manufacturer:"Apple"},{regex:"(iPhone);",manufacturer:"Apple"},{regex:"Nexus\\ ([A-Za-z0-9\\-]+)",device_replacement:"Nexus $1"},{regex:"acer_([A-Za-z0-9]+)_",device_replacement:"Acer $1",manufacturer:"Acer"},{regex:"acer_([A-Za-z0-9]+)_",device_replacement:"Acer $1",manufacturer:"Acer"},{regex:"Amoi\\-([A-Za-z0-9]+)",device_replacement:"Amoi $1",other:!0,manufacturer:"Amoi"},{regex:"AMOI\\-([A-Za-z0-9]+)",device_replacement:"Amoi $1",other:!0,manufacturer:"Amoi"},{regex:"Asus\\-([A-Za-z0-9]+)",device_replacement:"Asus $1",manufacturer:"Asus"},{regex:"ASUS\\-([A-Za-z0-9]+)",device_replacement:"Asus $1",manufacturer:"Asus"},{regex:"BIRD\\-([A-Za-z0-9]+)",device_replacement:"Bird $1",other:!0},{regex:"BIRD\\.([A-Za-z0-9]+)",device_replacement:"Bird $1",other:!0},{regex:"BIRD ([A-Za-z0-9]+)",device_replacement:"Bird $1",other:!0},{regex:"Dell ([A-Za-z0-9]+)",device_replacement:"Dell $1",manufacturer:"Dell"},{regex:"DoCoMo/2\\.0 ([A-Za-z0-9]+)",device_replacement:"DoCoMo $1",other:!0},{regex:"([A-Za-z0-9]+)\\_W\\;FOMA",device_replacement:"DoCoMo $1",other:!0},{regex:"([A-Za-z0-9]+)\\;FOMA",device_replacement:"DoCoMo $1",other:!0},{regex:"vodafone([A-Za-z0-9]+)",device_replacement:"Huawei Vodafone $1",other:!0},{regex:"i\\-mate ([A-Za-z0-9]+)",device_replacement:"i-mate $1",other:!0},{regex:"Kyocera\\-([A-Za-z0-9]+)",device_replacement:"Kyocera $1",other:!0},{regex:"KWC\\-([A-Za-z0-9]+)",device_replacement:"Kyocera $1",other:!0},{regex:"Lenovo\\-([A-Za-z0-9]+)",device_replacement:"Lenovo $1",manufacturer:"Lenovo"},{regex:"Lenovo\\_([A-Za-z0-9]+)",device_replacement:"Lenovo $1",manufacturer:"Levovo"},{regex:"LG/([A-Za-z0-9]+)",device_replacement:"LG $1",manufacturer:"LG"},{regex:"LG-LG([A-Za-z0-9]+)",device_replacement:"LG $1",manufacturer:"LG"},{regex:"LGE-LG([A-Za-z0-9]+)",device_replacement:"LG $1",manufacturer:"LG"},{regex:"LGE VX([A-Za-z0-9]+)",device_replacement:"LG $1",manufacturer:"LG"},{regex:"LG ([A-Za-z0-9]+)",device_replacement:"LG $1",manufacturer:"LG"},{regex:"LGE LG\\-AX([A-Za-z0-9]+)",device_replacement:"LG $1",manufacturer:"LG"},{regex:"LG\\-([A-Za-z0-9]+)",device_replacement:"LG $1",manufacturer:"LG"},{regex:"LGE\\-([A-Za-z0-9]+)",device_replacement:"LG $1",manufacturer:"LG"},{regex:"LG([A-Za-z0-9]+)",device_replacement:"LG $1",manufacturer:"LG"},{regex:"(KIN)\\.One (\\d+)\\.(\\d+)",device_replacement:"Microsoft $1"},{regex:"(KIN)\\.Two (\\d+)\\.(\\d+)",device_replacement:"Microsoft $1"},{regex:"(Motorola)\\-([A-Za-z0-9]+)",manufacturer:"Motorola"},{regex:"MOTO\\-([A-Za-z0-9]+)",device_replacement:"Motorola $1",manufacturer:"Motorola"},{regex:"MOT\\-([A-Za-z0-9]+)",device_replacement:"Motorola $1",manufacturer:"Motorola"},{regex:"Philips([A-Za-z0-9]+)",device_replacement:"Philips $1",manufacturer:"Philips"},{regex:"Philips ([A-Za-z0-9]+)",device_replacement:"Philips $1",manufacturer:"Philips"},{regex:"SAMSUNG-([A-Za-z0-9\\-]+)",device_replacement:"Samsung $1",manufacturer:"Samsung"},{regex:"SAMSUNG\\; ([A-Za-z0-9\\-]+)",device_replacement:"Samsung $1",manufacturer:"Samsung"},{regex:"Softbank/1\\.0/([A-Za-z0-9]+)",device_replacement:"Softbank $1",other:!0},{regex:"Softbank/2\\.0/([A-Za-z0-9]+)",device_replacement:"Softbank $1",other:!0},{regex:"(hiptop|avantgo|plucker|xiino|blazer|elaine|up.browser|up.link|mmp|smartphone|midp|wap|vodafone|o2|pocket|mobile|pda)",device_replacement:"Generic Smartphone"},{regex:"^(1207|3gso|4thp|501i|502i|503i|504i|505i|506i|6310|6590|770s|802s|a wa|acer|acs\\-|airn|alav|asus|attw|au\\-m|aur |aus |abac|acoo|aiko|alco|alca|amoi|anex|anny|anyw|aptu|arch|argo|bell|bird|bw\\-n|bw\\-u|beck|benq|bilb|blac|c55/|cdm\\-|chtm|capi|comp|cond|craw|dall|dbte|dc\\-s|dica|ds\\-d|ds12|dait|devi|dmob|doco|dopo|el49|erk0|esl8|ez40|ez60|ez70|ezos|ezze|elai|emul|eric|ezwa|fake|fly\\-|fly\\_|g\\-mo|g1 u|g560|gf\\-5|grun|gene|go.w|good|grad|hcit|hd\\-m|hd\\-p|hd\\-t|hei\\-|hp i|hpip|hs\\-c|htc |htc\\-|htca|htcg)",device_replacement:"Generic Feature Phone"},{regex:"^(htcp|htcs|htct|htc\\_|haie|hita|huaw|hutc|i\\-20|i\\-go|i\\-ma|i230|iac|iac\\-|iac/|ig01|im1k|inno|iris|jata|java|kddi|kgt|kgt/|kpt |kwc\\-|klon|lexi|lg g|lg\\-a|lg\\-b|lg\\-c|lg\\-d|lg\\-f|lg\\-g|lg\\-k|lg\\-l|lg\\-m|lg\\-o|lg\\-p|lg\\-s|lg\\-t|lg\\-u|lg\\-w|lg/k|lg/l|lg/u|lg50|lg54|lge\\-|lge/|lynx|leno|m1\\-w|m3ga|m50/|maui|mc01|mc21|mcca|medi|meri|mio8|mioa|mo01|mo02|mode|modo|mot |mot\\-|mt50|mtp1|mtv |mate|maxo|merc|mits|mobi|motv|mozz|n100|n101|n102|n202|n203|n300|n302|n500|n502|n505|n700|n701|n710|nec\\-|nem\\-|newg|neon)",device_replacement:"Generic Feature Phone"},{regex:"^(netf|noki|nzph|o2 x|o2\\-x|opwv|owg1|opti|oran|ot\\-s|p800|pand|pg\\-1|pg\\-2|pg\\-3|pg\\-6|pg\\-8|pg\\-c|pg13|phil|pn\\-2|pt\\-g|palm|pana|pire|pock|pose|psio|qa\\-a|qc\\-2|qc\\-3|qc\\-5|qc\\-7|qc07|qc12|qc21|qc32|qc60|qci\\-|qwap|qtek|r380|r600|raks|rim9|rove|s55/|sage|sams|sc01|sch\\-|scp\\-|sdk/|se47|sec\\-|sec0|sec1|semc|sgh\\-|shar|sie\\-|sk\\-0|sl45|slid|smb3|smt5|sp01|sph\\-|spv |spv\\-|sy01|samm|sany|sava|scoo|send|siem|smar|smit|soft|sony|t\\-mo|t218|t250|t600|t610|t618|tcl\\-|tdg\\-|telm|tim\\-|ts70|tsm\\-|tsm3|tsm5|tx\\-9|tagt)",device_replacement:"Generic Feature Phone"},{regex:"^(talk|teli|topl|tosh|up.b|upg1|utst|v400|v750|veri|vk\\-v|vk40|vk50|vk52|vk53|vm40|vx98|virg|vite|voda|vulc|w3c |w3c\\-|wapj|wapp|wapu|wapm|wig |wapi|wapr|wapv|wapy|wapa|waps|wapt|winc|winw|wonu|x700|xda2|xdag|yas\\-|your|zte\\-|zeto|aste|audi|avan|blaz|brew|brvw|bumb|ccwa|cell|cldc|cmd\\-|dang|eml2|fetc|hipt|http|ibro|idea|ikom|ipaq|jbro|jemu|jigs|keji|kyoc|kyok|libw|m\\-cr|midp|mmef|moto|mwbp|mywa|newt|nok6|o2im|pant|pdxg|play|pluc|port|prox|rozo|sama|seri|smal|symb|treo|upsi|vx52|vx53|vx60|vx61|vx70|vx80|vx81|vx83|vx85|wap\\-|webc|whit|wmlb|xda\\-|xda\\_)",device_replacement:"Generic Feature Phone"},{regex:"(bot|borg|google(^tv)|yahoo|slurp|msnbot|msrbot|openbot|archiver|netresearch|lycos|scooter|altavista|teoma|gigabot|baiduspider|blitzbot|oegp|charlotte|furlbot|http%20client|polybot|htdig|ichiro|mogimogi|larbin|pompos|scrubby|searchsight|seekbot|semanticdiscovery|silk|snappy|speedy|spider|voila|vortex|voyager|zao|zeal|fast\\-webcrawler|converacrawler|dataparksearch|findlinks)",device_replacement:"Spider"}],mobile_browser_families:["Firefox Mobile","Opera Mobile","Opera Mini","Mobile Safari","webOS","IE Mobile","Playstation Portable","Nokia","Blackberry","Palm","Silk","Android","Maemo","Obigo","Netfront","AvantGo","Teleca","SEMC-Browser","Bolt","Iris","UP.Browser","Symphony","Minimo","Bunjaloo","Jasmine","Dolfin","Polaris","BREW","Chrome Mobile","Chrome Mobile iOS","UC Browser","Tizen Browser"]};e.parsers=["device_parsers","browser_parsers","os_parsers","mobile_os_families","mobile_browser_families"],e.types=["browser","os","device"],e.regexes=r||function(){var r={};return e.parsers.map(function(e){r[e]=[]}),r}(),e.families=function(){var r={};return e.types.map(function(e){r[e]=[]}),r}();var a=Array.prototype,o=(Object.prototype,Function.prototype,a.forEach);a.indexOf;var i=function(e,r){for(var a={},o=0;r.length>o&&!(a=r[o](e));o++);return a},n=function(e,r){t(e,function(e){t(r,function(r){delete e[r]})})},t=forEach=function(e,r,a){if(null!=e)if(o&&e.forEach===o)e.forEach(r,a);else if(e.length===+e.length)for(var i=0,n=e.length;n>i;i++)r.call(a,e[i],i,e);else for(var t in e)_.has(e,t)&&r.call(a,e[t],t,e)},l=function(e){return!(!e||e===undefined||null==e)},d=function(e){var r="";return e=e||{},l(e)&&l(e.major)&&(r+=e.major,l(e.minor)&&(r+="."+e.minor,l(e.patch)&&(r+="."+e.patch))),r},c=function(e){e=e||{};var r=d(e);return r&&(r=" "+r),e&&l(e.family)?e.family+r:""};return e.parse=function(r){var a=function(r){return e.regexes[r+"_parsers"].map(function(e){function a(r){var a=r.match(o);if(!a)return null;var t={};return t.family=(i?i.replace("$1",a[1]):a[1])||"other",t.major=parseInt(n?n:a[2])||null,t.minor=a[3]?parseInt(a[3]):null,t.patch=a[4]?parseInt(a[4]):null,t.tablet=e.tablet,t.man=e.manufacturer||null,t}var o=RegExp(e.regex),i=e[("browser"===r?"family":r)+"_replacement"],n=e.major_version_replacement;return a})},o=function(){},t=a("browser"),m=a("os"),p=a("device"),s=new o;s.source=r,s.browser=i(r,t),l(s.browser)?(s.browser.name=c(s.browser),s.browser.version=d(s.browser)):s.browser={},s.os=i(r,m),l(s.os)?(s.os.name=c(s.os),s.os.version=d(s.os)):s.os={},s.device=i(r,p),l(s.device)?(s.device.name=c(s.device),s.device.version=d(s.device)):s.device={tablet:!1,family:"Other"};var g={};return e.regexes.mobile_browser_families.map(function(e){g[e]=!0}),e.regexes.mobile_os_families.map(function(e){g[e]=!0}),s.device.type="Spider"===s.browser.family?"Spider":s.browser.tablet||s.os.tablet||s.device.tablet?"Tablet":g.hasOwnProperty(s.browser.family)?"Mobile":"Desktop",s.device.manufacturer=s.browser.man||s.os.man||s.device.man||null,n([s.browser,s.os,s.device],["tablet","man"]),s},e}();"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=r),exports.detect=r):e.detect=r,"function"==typeof define&&define.amd&&define(function(){return r})})(window);
(function () {
    'use strict';
    var addConfig = function (target, name, value) {
        if (!target.hasOwnProperty(name)) {
            target[name] = value;
        }

        else {
            console.warn('Property already exist');
        }
    };

    amp.viewerSettings = {
        viewerConfigs: {
            v:'1.1.3',
            target: '#amp-container',
            client: 'playground',
            imageBasePath: '//i1.adis.ws/',
            errImg: '404',
            errCallback: function () {
            },
            cacheControl: 1,
            cacheWindow: 315569259747,
            fullNavHeight: 100,
            templates: {
                thumb: 'w=85&h=85&qlt=70',
                desktop: {
                    main: 'w=1000&h=1000',
                    mainRetina: 'w=2000&h=2000'
                },
                desktopFull: {
                    main: 'w=1000',
                    mainRetina: 'w=2000'
                },
                mobile: {
                    main: 'w=500&h=500',
                    mainRetina: 'w=1000&h=1000'
                }
            },
            tooltips: {
                offsets: {
                    left: -102,
                    top:  -39
                },
                displayTime: 3000,
                desktop: {
                    image: {
                        noTouch: {
                            text: 'Click to zoom'
                        },
                        touch: {
                            text: 'Tap to zoom'
                        },
                        doubleTouch: {
                            text: 'Double tap to zoom'
                        }
                    },
                    spin: {
                        noTouch: {
                            text: 'Drag to rotate'
                        },
                        touch: {
                            text: 'Tap to rotate'
                        },
                        doubleTouch: {
                            text: 'Double tap to rotate'
                        }

                    },
                    video: {
                        play: {
                            noTouch:{
                                text: ''
                            },
                            touch:{
                                text: ''
                            }
                        },
                        pause: {
                            noTouch:{
                                text: ''
                            },
                            touch:{
                                text: ''
                            }
                        }
                    }
                },
                desktopFull: {
                    image: {
                        noTouch: {
                            text: 'Click to zoom'
                        },
                        touch: {
                            text: 'Tap to zoom'
                        },
                        doubleTouch: {
                            text: 'Double tap to zoom'
                        }
                    },
                    spin: {
                        noTouch: {
                            text: 'Drag to rotate'
                        },
                        touch: {
                            text: 'Tap to rotate'
                        },
                        doubleTouch: {
                            text: 'Double tap to rotate'
                        }

                    },
                    video: {
                        play: {
                            noTouch:{
                                text: ''
                            },
                            touch:{
                                text: ''
                            }
                        },
                        pause: {
                            noTouch:{
                                text: ''
                            },
                            touch:{
                                text: ''
                            }
                        }
                    }
                },
                mobile: {
                    image: {
                        noTouch: {
                            text: 'Click to zoom'
                        },
                        touch: {
                            text: 'Tap to zoom'
                        },
                        doubleTouch: {
                            text: 'Double tap to zoom'
                        }
                    },
                    spin: {
                        noTouch: {
                            text: 'Drag to rotate'
                        },
                        touch: {
                            text: 'Tap to rotate'
                        },
                        doubleTouch: {
                            text: 'Double tap to rotate'
                        }

                    },
                    video: {
                        play: {
                            noTouch:{
                                text: ''
                            },
                            touch:{
                                text: ''
                            }
                        },
                        pause: {
                            noTouch:{
                                text: ''
                            },
                            touch:{
                                text: ''
                            }
                        }
                    }
                }
            },
            navIconsMain: {
                next: 'icon icon-right bla-main-next',
                prev: 'icon icon-left bla-main-prev'
            },
            navIconsNav: {
                next: 'icon icon-right bla-nav-next',
                prev: 'icon icon-left bla-nav-prev'
            },
            navIconsPortraitNav: {
                next: 'icon icon-right bla-portrait-next',
                prev: 'icon icon-left bla-portrait-prev'
            },
            zoomInlineDoubleTap: true,
            doubleTapTime: 250,
            ampConfigs: {
                navElementsWidthPx: 100,
                navElementsWidthPxMobile: 50,
                navElementsCount: {
                    forDesktop: 5,
                    forDesktopFull: 4
                },
                mainContainerCarousel: {
                    width: 1,
                    height: 1,
                    responsive: true,
                    start: 1,
                    loop: false,
                    dir: 'horz',
                    autoplay: false,
                    gesture: {
                        enabled: true,
                        fingers: 1,
                        dir: 'horz',
                        distance: 100
                    },
                    animDuration: 200,
                    layout: 'standard',
                    onActivate: {
                        select: true,
                        goTo: true
                    },
                    animate: true,
                    easing: 'linear',
                    preferForward: true,
                    preloadNext: true

                },
                mainContainerNav: {
                    on: 'goTo',
                    action: 'select',
                    selector: '.nav-container .list'
                },
                mainContainerSpin: {
                    width: 1,
                    height: 1,
                    responsive: true,
                    delay: 100,
                    autoplay: false,
                    gesture: {
                        enabled: true,
                        fingers: 1
                    },
                    loop: true,
                    start: 1,
                    momentum: true,
                    minDistance: 50,
                    friction: 0.97,
                    dragDistance: 200,
                    preload: 'created',
                    preloadType: 'full',
                    activate: 'down',
                    dir: 'normal',
                    cursor: {
                        active: 'pointer',
                        inactive: 'pointer'
                    },
                    play: {
                        onLoad: true,
                        onVisible: true,
                        repeat: 1,
                        delay: 600
                    },
                    lazyLoad: false,
                    orientation: 'horz'
                },
                mainContainerSpin3d: {
                    loop:false,
                    dragDistance: 200,
                    orientation: 'vert',
                    preload:'created',
                    preloadType: 'window',
                    width: 1,
                    height: 1,
                    gesture: {
                        enabled: true,
                        fingers: 1
                    }
                },
                mainContainerVideo: {
                    preload:"none",
                    width: 1,
                    height: 1,
                    center: true,
                    responsive: true,
                    autoplay: false,
                    loop: false,
                    muted: false,
                    controls: true,
                    pauseOnHide: true,
                    nativeControlsForTouch: false,
                    "plugins": {
                        "videoJsResolutionSwitcher": {
                            "default": "Medium"
                        }
                    }
                },
                mainContainerZoomInline: {
                    transforms: [],
                    scaleMax: 3,
                    scaleStep:0.5,
                    scaleSteps: true,
                    pinch: true,
                    pan: true,
                    events: {
                        zoomIn: '',
                        zoomOut: '',
                        move: ''
                    },
                    activation: {
                        inGesture: true
                    },
                    preload: false,
                    preventVisibleZoomOut: true
                },
                navContainerCarousel: {
                    height: 1,
                    responsive: true,
                    start: 1,
                    loop: false,
                    dir: 'horz',
                    autoplay: false,
                    gesture: {
                        enabled: true,
                        fingers: 1,
                        dir: 'horz',
                        distance: 50
                    },
                    animDuration: 200,
                    layout: 'standard',
                    onActivate: {
                        select: true,
                        goTo: false
                    },
                    animate: true,
                    easing: 'linear',
                    preferForward: true,
                    preloadNext: true
                },
                navContainerNav: {
                    on: 'select',
                    action: 'select',
                    selector: '.main-container .list'
                },
                image: {
                    preload: 'created',
                    insertAfter: false,
                    errImg: null
                }
            }
        },
        portraitConfigs: function () {
            var self = this;
            addConfig(self.viewerConfigs.ampConfigs, 'navContainerCarouselPortrait', {
                height: '100%',
                responsive: true,
                start: 1,
                loop: false,
                dir: 'vert',
                autoplay: false,
                gesture: {
                    enabled: true,
                    fingers: 1,
                    dir: 'vert',
                    distance: 50
                },
                animDuration: 500,
                layout: 'standard',
                onActivate: {
                    select: true,
                    goTo: false
                },
                animate: true,
                easing: 'linear',
                preferForward: true,
                preloadNext: true
            });

            addConfig(self.viewerConfigs.ampConfigs, 'mainContainerSpinPortrait', {
                height: '100%',
                responsive: true,
                delay: 100,
                autoplay: false,
                gesture: {
                    enabled: true,
                    fingers: 1
                },
                loop: true,
                start: 1,
                momentum: true,
                minDistance: 50,
                friction: 0.97,
                dragDistance: 200,
                preload: 'created',
                preloadType: 'full',
                activate: 'down',
                dir: 'normal',
                cursor: {
                    active: 'pointer',
                    inactive: 'pointer'
                },
                play: {
                    onLoad: true,
                    onVisible: true,
                    repeat: 1
                },
                lazyLoad: false,
                orientation: 'horz'
            });

            addConfig(self.viewerConfigs.ampConfigs, 'mainContainerVideoPortrait', {
                preload: 'none',
                height: '100%',
                responsive: true,
                autoplay: false,
                loop: false,
                muted: false,
                controls: true,
                pauseOnHide: true,
                nativeControlsForTouch: true,
                plugins: {
                    videoJsResolutionSwitcher : true
                }
            });
        },
        overwritePortraitSettings: function (settings) {
            var self = this;
            settings.ampConfigs.mainContainerCarousel.width = 0.8;
            settings.ampConfigs.mainContainerCarousel.height = 1.2;
            settings.templates = {
                thumb: 'w=85&h=85&qlt=70',
                thumbPortrait: 'w=67&h=89&qlt=100',
                desktop: {
                    main: 'w=1010&h=1416',
                    mainRetina: 'w=2020&h=2832'
                },
                desktopFull: {
                    main: 'w=1010&h=1416',
                    mainRetina: 'w=2020&h=2832'
                },
                mobile: {
                    main: 'w=505&h=708',
                    mainRetina: 'w=1010&h=1416'
                }
            };
        }
    };

}());


(function (global, $) {
    'use strict';
    var PLAYER_NAME = 'Amplience Viewer';

    var Viewer = function (settings) {
        var self = this;

        var defaultSettings = amp.viewerSettings.viewerConfigs;

        if (settings.view === 'portrait') {

            amp.viewerSettings.overwritePortraitSettings(defaultSettings);
            //assign portrait settings
            amp.viewerSettings.portraitConfigs();
            self.isPortraitView = true;
        }

        else if (settings.view === 'landscape') {
            self.isLandscapeView = true;
        }

        else {
            self.isSquareView = true;
        }

        self.settings = $.extend(true, {}, defaultSettings, settings);

        if (self.settings.locale && self.settings.locale.length > 0) {
            self.settings.ampConfigs.mainContainerZoomInline.transforms.push('locale=' + self.settings.locale);
        }

        if (self.settings.ampConfigs.mainContainerCarousel.loop) {
            self.settings.ampConfigs.navContainerCarousel.loop = true;
            if(self.isPortraitView){
                self.settings.ampConfigs.navContainerCarouselPortrait.loop = true;
            }
        }

        self.views = {
            desktopNormalView: 'desktopNormalView',
            desktopFullView: 'desktopFullView',
            mobileNormalView: 'mobileNormalView'
        };
        self.assets = [];
        self.currentAssetIndex = 0;
        self.navCurrentAssetIndex = 0;
        self.canTouch = !!(('ontouchstart' in window) ||
        window.DocumentTouch && document instanceof window.DocumentTouch);
        self.wrapper = $('<div class="amp-viewer-kit"></div>');
        self.deviceWidth = global.innerWidth;

        self.controller();
        self.tags = [];
        self.IE = self.isIE();
    };

    Viewer.prototype.controller = function () {
        var self = this;
        amp.init({
            'client_id': self.settings.client,
            'di_basepath': self.settings.imageBasePath,
            'cache_window': self.settings.cacheWindow
        });

        //init ecommBridge

        if (window.ecommBridge && self.settings.ecommBridge) {
            this.bridgeConnector.initAll();
        }

        self.applyImgTemplates();

        var target = $(self.settings.target);
        target.append(self.wrapper);

        var setInfo = self.initSetData();

        self.getSet(setInfo)
            .then(function (result) {
                self.assets = result;
                self.renderInitialView();
            })
            .catch(function (error) {
                console.warn(error, PLAYER_NAME + ' unable to get set list.');
            });
    };

    Viewer.prototype.initSetData = function () {
        var self = this;
        var page = self.bridgeConnector.page;
        //Check if bridge page exists, and assign its settings instead of defaults
        if (page !== null && self.settings.ecommBridge) {
            if (page.mediaList && page.mediaList.constructor === Array && page.mediaList.length > 0) {
                return self.returnSetData(page.mediaList);
            } else if (page.mediaSet && typeof page.mediaSet === 'string' && page.mediaSet.length > 0) {
                return self.returnSetData(page.mediaSet);
            }
        } else {
            return self.returnSetData(self.settings.set);
        }
    };

    Viewer.prototype.returnSetData = function (data) {
        var self = this;
        var transform = '&v=' + self.settings.cacheControl;
        if (data.constructor === Array) {
            self.bridgeConnector.enrichMediaListWithParams(data, {
                transform: transform
            });
            return data;
        } else {
            return {
                name: data,
                type: 's',
                transform: transform
            };
        }
    };

    Viewer.prototype.secureData = function (data) {
        var self = this;
        if (self.settings.secure) {
            var strData = JSON.stringify(data);
            strData = strData.replace(/http:\/\//g, 'https://');
            data = JSON.parse(strData);
        }
        return data;
    };

    Viewer.prototype.getSet = function (setInfo) {
        /*
         @setInfo Object | Array
         if ecommBridge holds List info about assets, then it will be array, otherwise object
         */

        var self = this;

        return new Promise(function (resolve, reject) {
            amp.get(setInfo,
                function (data) {
                    var items = null;
                    if (setInfo.constructor === Array) {
                        items = self.bridgeConnector.convertListToSet(setInfo, data).items;
                    } else {
                        items = data[setInfo.name].items;
                    }
                    resolve(items);
                },
                function () {
                    self.getImage(self.settings.errImg)
                        .then(function (result) {
                            self.settings.errCallback.call(self);
                            resolve([{
                                src: result.url
                            }]);
                        });
                },
                false,
                false,
                self.secureData.bind(self)
            );
        });
    };

    Viewer.prototype.getImage = function (imageName) {
        var self = this;
        return new Promise(function (resolve, reject) {
            amp.get({
                    name: imageName,
                    type: 'i',
                    transform: '&v=' + self.settings.cacheControl
                },
                function (data) {
                    resolve(data[imageName]);
                },
                function () {
                    resolve({
                        url: '//i1.adis.ws/i/playground/404'
                    });
                },
                false,
                false,
                self.secureData.bind(self)
            );
        });
    };

    Viewer.prototype.changeSet = function (setInfo) {
        /*
         @setInfo Array | String
         if setInfo is Array, assume that ecommBridge is used
         */
        var self = this;

        if (self.bridgeConnector.page !== null && self.settings.ecommBridge) {
            if (setInfo.constructor === Array && setInfo.length > 0) {
                self.bridgeConnector.page.mediaList = setInfo;
            } else if (typeof setInfo === 'string' && setInfo.length > 0) {
                self.bridgeConnector.page.mediaset = setInfo;
                self.bridgeConnector.page.mediaList = null;
            }
        } else {
            self.settings.set = setInfo;
        }

        var setData = self.returnSetData(setInfo);

        self.getSet(setData)
            .then(function (result) {
                self.assets = result;
                self.currentAssetIndex = 0;
                self.renderInitialView();
            })
            .catch(function (error) {
                console.warn(error, PLAYER_NAME + ' unable to get set list.');
            });
    };

    Viewer.prototype.isIE = function () {
        if (/MSIE [0-9]{1,}/.test(navigator.userAgent)) {
            return true;
        } else if (/Trident\/\d./i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) {
            return true;
        }
        return false;
    }

    Viewer.prototype.isMobile = function () {
        var self = this;
        if (self.settings.isMobile) {
            return true;
        }
        return global.innerWidth <= 768;
    };

    Viewer.prototype.renderInitialView = function () {
        var self = this;
        self.currentView = self.isMobile() ? self.views.mobileNormalView : self.views.desktopNormalView;
        self.renderView(self.currentView);
    };

    Viewer.prototype.renderView = function (view, spinManipulate) {
        var self = this;
        var spinManipulate = spinManipulate || false;
        self.destroyAmpWidgets();

        switch (view) {
            case self.views.desktopNormalView:
                self.renderDesktopNormalView();
                break;
            case self.views.desktopFullView:
                self.renderDesktopFullView();
                break;
            case self.views.mobileNormalView:
                self.renderMobileNormalView();
                break;
            default:
                console.warn(PLAYER_NAME + ': Unknown view: ' + view + '. Viewer desktopNormalView.');
                self.renderDesktopNormalView();
                break;
        }

        if (view === self.views.desktopFullView) {
            this._scrollPosition = $(window).scrollTop();
            $('html, body').addClass('amp-no-scroll');
        }
        else {
            $('html, body').removeClass('amp-no-scroll');
            $(window).scrollTop(this._scrollPosition)
        }

        self.mainContainerList = self.wrapper.find('.main-container .list');
        self.navContainerList = self.wrapper.find('.nav-container .list');
        self.tooltip = self.wrapper.find('.main-container .tooltip');
        self.tooltipText = self.tooltip.find('span.text');

        self.bindGenericEvents();
        self.bindAmpEvents();
        self.bindNavigationEvents();
        self.bindSpinEvents();

        self.initImagesSrcset();
        self.initAmpWidgets(spinManipulate);

        self.applyNavigationStyles();

        self.checkMainContainerNavArrows();
        self.checkNavContainerNavArrows();
        self.checkZoomIcons();
        self.checkMainContainerSlidesVisibility();

        switch (view) {
            case self.views.desktopNormalView:
                self.bindDesktopNormalViewEvents();
                break;
            case self.views.desktopFullView:
                self.bindDesktopFullViewEvents();
                break;
            case self.views.mobileNormalView:
                self.bindMobileNormalViewEvents();
                break;
        }

        if (self.settings.initCallback) {
            self.settings.initCallback.apply(self);
        }
    };

    Viewer.prototype.getTemplateData = function (firstLocaleParam) {
        var self = this;
        var data = {
            items: self.assets,
            templates: self.getTemplates(),
            locale: {
                first: '',
                second: ''
            },
            view: ''
        };

        if (self.settings.locale && $.trim(self.settings.locale).length > 0) {
            var base = 'locale=' + self.settings.locale;
            data.locale.first = '?' + base;
            data.locale.second = '&' + base;
        }

        if (self.settings.view && self.settings.view.length > 0) {
            data.view = self.settings.view;
        }

        return data;
    };

    Viewer.prototype.renderDesktopNormalView = function () {
        var self = this;
        self.currentView = self.views.desktopNormalView;
        self.wrapper.html(amp.templates.desktopNormalView(self.getTemplateData()));
    };

    Viewer.prototype.renderDesktopFullView = function () {
        var self = this;
        self.currentView = self.views.desktopFullView;
        self.wrapper.html(amp.templates.desktopFullView(self.getTemplateData()));
    };

    Viewer.prototype.renderMobileNormalView = function () {
        var self = this;
        self.currentView = self.views.mobileNormalView;
        self.wrapper.html(amp.templates.mobileNormalView(self.getTemplateData()));
    };

    Viewer.prototype.applyImgTemplates = function () {
        var self = this;
        var errImgTransform = '&img404=' + self.settings.errImg + '&v=' + self.settings.cacheControl;
        var iterate = function (obj, callback) {
            $.each(obj, function (key, val) {
                if ($.type(val) === 'string') {
                    callback(obj, key);
                }
                else {
                    iterate(val, callback);
                }
            });
        };

        iterate(self.settings.templates, function (obj, key) {
            obj[key] += errImgTransform;
        });
    };

    Viewer.prototype.getTemplates = function () {
        var self = this;
        var thumbTemplate = self.settings.templates.thumb;
        var isPortrait = self.isPortraitView && self.currentView === self.views.desktopNormalView;

        if (isPortrait) {
            thumbTemplate = self.settings.templates.thumbPortrait;
        }

        var tts = {
            thumb: thumbTemplate,
            navIcons: {
                nav: isPortrait ? self.settings.navIconsPortraitNav : self.settings.navIconsNav,
                main: self.settings.navIconsMain
            }
        };

        switch (self.currentView) {
            case self.views.desktopNormalView:
                tts.main = self.settings.templates.desktop.main;
                tts.mainRetina = self.settings.templates.desktop.mainRetina;
                tts.zoom = self.settings.templates.desktop.zoom;
                break;
            case self.views.desktopFullView:
                tts.main = self.settings.templates.desktopFull.main;
                tts.mainRetina = self.settings.templates.desktopFull.mainRetina;
                tts.zoom = self.settings.templates.desktopFull.zoom;
                break;
            case self.views.mobileNormalView:
                tts.main = self.settings.templates.mobile.main;
                tts.mainRetina = self.settings.templates.mobile.mainRetina;
                tts.zoom = self.settings.templates.mobile.zoom;
                break;
        }

        return tts;
    };

    Viewer.prototype.initImagesSrcset = function () {
        var self = this;
    };

    Viewer.prototype.initAmpWidgets = function (spinManipulate) {
        var self = this;
        var ampConfigs = self.getAmpConfigs();

        var navSettings = ampConfigs.navContainerCarousel;

        if (self.settings.view && self.isPortraitView && self.currentView === 'desktopNormalView') {
            navSettings = ampConfigs.navContainerCarouselPortrait;
        }

        self.wrapper.find('[data-amp-src]').ampImage(ampConfigs.image);

        self.mainContainerList.ampCarousel(ampConfigs.mainContainerCarousel);
        self.mainContainerList.ampNav(ampConfigs.mainContainerNav);

        self.navContainerList.ampCarousel(navSettings);
        self.navContainerList.ampNav(ampConfigs.navContainerNav);

        var carouselData = self.mainContainerList.data()['amp-ampCarousel'] || self.mainContainerList.data()['ampAmpCarousel'];

        self.mainContainerList.on('touchstart', function(){
            carouselData.preventStop = false;
        });

        self.navContainerList.find('.amp-slide').on('touchstart', function(){
            carouselData.preventStop = true;
        });

        for (var i = 0; i < self.assets.length; i++) {
            var asset = self.assets[i];

            if (asset.hasOwnProperty('set')) {
                var spinSettings = ampConfigs.mainContainerSpin;
                if (self.settings.view && self.isPortraitView && self.currentView === self.views.desktopNormalView) {
                    spinSettings = ampConfigs.mainContainerSpinPortrait;
                }

                var $spin = $('#' + asset.name);
                var $spin3d = $spin.find('.amp-inner-spinset');

                if ($spin3d.length > 0) {
                    $spin.ampSpin(ampConfigs.mainContainerSpin3d);
                    $spin3d.each(function (i) {
                        var spinConfig = $.extend(true, {}, ampConfigs.mainContainerSpin, {
                            play: {
                                onVisible: false,
                                onLoad: false
                            },
                            preloadType: 'window'
                        });
                        $(this).ampSpin(spinConfig);
                    });
                }

                else {
                    var mainContainerSpin = ampConfigs.mainContainerSpin;
                    if(mainContainerSpin.play.onVisible == true){
                        self.spinVisible = true;
                        mainContainerSpin.play.onVisible = false;
                    }
                    $spin.ampSpin(mainContainerSpin);
                }
            } else if (asset.hasOwnProperty('media')) {
                var videoSettings = ampConfigs.mainContainerVideo;
                if (self.settings.view && self.isPortraitView && self.currentView === self.views.desktopNormalView) {
                    videoSettings = ampConfigs.mainContainerVideoPortrait;
                    videoSettings.nativeControlsForTouch = false;
                }

                if(self.IE && videoSettings.preload ==='none'){
                    delete videoSettings.preload;
                }

                var $videoTag = self.mainContainerList.find('#' + asset.name).ampVideo(videoSettings);

                $videoTag.find('video').on('touchstart', function () {
                    var state = $videoTag.ampVideo('state');
                    if (state == 2) {
                        $videoTag.ampVideo('play');
                    }
                    else {
                        $videoTag.ampVideo('pause');
                    }
                });

                self.tags.push({
                    alias: 'videoContainer',
                    $tag: $videoTag
                });

            } else if (self.currentView !== self.views.desktopNormalView) {
                self.mainContainerList.find('> > li:eq(' + i + ') img')
                    .ampZoomInline(ampConfigs.mainContainerZoomInline);
            }
        }
    };

    Viewer.prototype.destroyAmpWidgets = function () {
        var self = this;
        self.tags.length = 0;
        for (var i = 0; i < self.assets.length; i++) {
            var asset = self.assets[i];

            if (asset.hasOwnProperty('media')) {
                var video = $('#' + asset.name);
                if (video.length > 0) {
                    video.ampVideo('destroy');
                }
            }
        }
    };
//Move thumbs to one position after active or to one position before active
    Viewer.prototype.navMove = function (thumb) {
        var self = this;
        var slidesLength = self.mainContainerList.data()['ampAmpCarousel'].count;
        var next = self.settings.ampConfigs.mainContainerCarousel.loop ? (self.navPrevAssetIndex - 1 === slidesLength && self.navCurrentAssetIndex === 0) : false;
        var prev = self.settings.ampConfigs.mainContainerCarousel.loop ? (self.navPrevAssetIndex === 0 && self.navCurrentAssetIndex === (slidesLength - 1)) : false;
        var $thumb = $(thumb);
        var $next = $thumb.next();
        var $prev = $thumb.prev();

        if(self.navPrevAssetIndex === self.navCurrentAssetIndex){
            return;
        }

        if ($next.length > 0 || self.settings.ampConfigs.mainContainerCarousel.loop) {
            setTimeout(function () {
                if (!$next.hasClass('amp-visible')  && !prev) {
                    if(!self.settings.ampConfigs.mainContainerCarousel.loop && $next.length < 1){
                        return;
                    }
                    self.navContainerList.ampCarousel('next');

                }
                else if (!$prev.hasClass('amp-visible') && !next) {
                    if(!self.settings.ampConfigs.mainContainerCarousel.loop && $prev.length < 1){
                        return;
                    }
                    self.navContainerList.ampCarousel('prev');
                }
            }, 100);
        }
    };

    Viewer.prototype.navigateToActiveThumb = function () {
        var self = this;
        var $thumbs = self.navContainerList.find('.amp-slide');
        var $currentThumb = $thumbs.filter('.amp-selected');
        var visibleSlidesNum = Math.floor(self.navContainerList.width() /
            self.settings.ampConfigs.navElementsWidthPxMobile);
        var nextThumbsWidth = $thumbs.nextAll().length * self.settings.ampConfigs.navElementsWidthPxMobile;
        var prevThumbsWidth = $thumbs.prevAll().length * self.settings.ampConfigs.navElementsWidthPxMobile;
        if ($currentThumb.index() === 0 || $currentThumb.index() === $thumbs.length - 1) {
            self.navContainerList.ampCarousel('goTo', $currentThumb.index() + 1);
        }
        else if (nextThumbsWidth >= visibleSlidesNum) {
            self.navContainerList.ampCarousel('goTo', $currentThumb.index());
        }
        else {
            self.navContainerList.ampCarousel('goTo', $currentThumb.index() + 2);
        }
    };

    Viewer.prototype.bindNavigationEvents = function () {
        var self = this;
        var loop = self.settings.ampConfigs.mainContainerCarousel.loop;
        self.bindIconClickEvent(self.wrapper.find('.main-container-prev'), function () {
            self.checkMainContainerSlidesVisibility(0, true);
            self.mainContainerMove('prev', loop);
        });
        self.bindIconClickEvent(self.wrapper.find('.main-container-next'), function () {
            self.checkMainContainerSlidesVisibility(0, true);
            self.mainContainerMove('next', loop);
        });

        self.bindIconClickEvent(self.wrapper.find('.nav-container-prev'), function () {
            self.navContainerMove('prev', loop);
        });
        self.bindIconClickEvent(self.wrapper.find('.nav-container-next'), function () {
            self.navContainerMove('next', loop);
        });
    };

    Viewer.prototype.navContainerMove = function (dir, loop) {
        var self = this;
        if(loop){
            self.navContainerList.ampCarousel(dir);
            return;
        }
        var info = self.getNavigationVisibleSlidesInfo();
        var goToIndex = info.firstVisible + 1;
        if (dir === 'prev') {
            goToIndex = info.isFirst ? 1 : info.firstVisible;
        } else if (dir === 'next') {
            goToIndex = info.isLast ? info.firstVisible + 1 : info.firstVisible + 2;
        }
        self.navContainerList.ampCarousel('goTo', goToIndex);
    };

    Viewer.prototype.mainContainerMove = function (dir, loop) {
        var self = this;
        if(loop){
            self.mainContainerList.ampCarousel(dir);
            return;
        }

        var info = self.getMainVisibleSlidesInfo();
        var goToIndex = info.firstVisible + 1;
        if (dir === 'prev') {
            goToIndex = info.isFirst ? 1 : info.firstVisible;
        } else if (dir === 'next') {
            goToIndex = info.isLast ? info.firstVisible + 1 : info.firstVisible + 2;
        }

        self.mainContainerList.ampCarousel('goTo', goToIndex);
    };

    Viewer.prototype.initTooltips = function () {
        var self = this;

        self.mainContainerList.off('mousemove mouseout');
        self.tooltip.attr({style: ''});

        var assetIndex = self.currentAssetIndex;
        var currentAsset = self.assets[assetIndex];

        if (currentAsset.hasOwnProperty('set')) {
            var spin3D = false;
            if (currentAsset.set.items && currentAsset.set.items.length > 0 && currentAsset.set.items[0].set) {
                spin3D = true;
            }
            self.initSpinTooltip(spin3D);
        } else if (currentAsset.hasOwnProperty('media')) {
            self.initVideoTooltip();
        } else {
            self.initImageTooltip();
        }
    };

    Viewer.prototype.initImageTooltip = function () {
        var self = this;
        var tapText = '';
        self.tooltip.attr({class: 'tooltip image'});
        switch (self.currentView) {
            case self.views.desktopNormalView:
                if (self.canTouch) {
                    tapText = (self.settings.zoomInlineDoubleTap) ? self.settings.tooltips.desktop.image.doubleTouch.text :
                        self.settings.tooltips.desktop.image.touch.text;
                    self.tooltip.css({position: 'absolute'});
                    self.tooltipText.text(tapText);
                    self.fadeOutTooltip();
                } else {
                    self.tooltip.fadeOut(0);

                    var margin = +self.mainContainerList.css('margin-left').replace('px', '');

                    self.tooltipText.text(self.settings.tooltips.desktop.image.noTouch.text);

                    self.mainContainerList.on('mousemove', function (e) {
                        self.tooltip.css({
                            top: e.clientY - self.settings.tooltips.offsets.top,
                            left: e.clientX - self.settings.tooltips.offsets.left,
                            display: 'block'
                        });
                    });

                    self.mainContainerList.on('mouseout', function () {
                        self.tooltip.fadeOut(0);
                    });
                }
                break;
            case self.views.desktopFullView:
                tapText = (self.settings.zoomInlineDoubleTap) ? self.settings.tooltips.desktopFull.image.doubleTouch.text :
                    self.settings.tooltips.desktopFull.image.touch.text;
                self.tooltipText.text(self.canTouch ? tapText : self.settings.tooltips.desktopFull.image.noTouch.text);
                self.tooltip.fadeOut(0);
                break;
            case self.views.mobileNormalView:
                tapText = (self.settings.zoomInlineDoubleTap) ? self.settings.tooltips.mobile.image.doubleTouch.text :
                    self.settings.tooltips.mobile.image.touch.text;
                self.tooltipText.text(self.canTouch ? tapText : self.settings.tooltips.mobile.image.noTouch.text);
                self.fadeOutTooltip();
                break;
        }
    };

    Viewer.prototype.initSpinTooltip = function (spin3D) {
        var self = this;
        var tapText = '';
        var spinClass = spin3D ? 'spin-3d' : 'spin';
        self.tooltip.attr({class: 'tooltip ' + spinClass});
        switch (self.currentView) {
            case self.views.desktopNormalView:
                tapText = (self.settings.zoomInlineDoubleTap) ? self.settings.tooltips.desktop.spin.doubleTouch.text :
                    self.settings.tooltips.desktop.spin.touch.text;
                self.tooltipText.text(self.canTouch ? tapText : self.settings.tooltips.desktop.spin.noTouch.text);
                break;
            case self.views.desktopFullView:
                tapText = (self.settings.zoomInlineDoubleTap) ? self.settings.tooltips.desktopFull.spin.doubleTouch.text :
                    self.settings.tooltips.desktopFull.spin.touch.text;
                self.tooltipText.text(self.canTouch ? tapText : self.settings.tooltips.desktopFull.spin.noTouch.text);
                break;
            case self.views.mobileNormalView:
                tapText = (self.settings.zoomInlineDoubleTap) ? self.settings.tooltips.mobile.spin.doubleTouch.text :
                    self.settings.tooltips.mobile.spin.touch.text;
                self.tooltipText.text(self.canTouch ? tapText : self.settings.tooltips.mobile.spin.noTouch.text);
                break;
        }

        self.fadeOutTooltip();
    };

    Viewer.prototype.initVideoTooltip = function () {
        var self = this;

        self.tooltip.attr({class: 'tooltip video'});

        switch (self.currentView) {
            case self.views.desktopNormalView:
                self.tooltipText.text(self.canTouch ? self.settings.tooltips.desktop.video.play.touch.text : self.settings.tooltips.desktop.video.play.noTouch.text);
                break;
            case self.views.desktopFullView:
                self.tooltipText.text(self.canTouch ? self.settings.tooltips.desktopFull.video.play.touch.text : self.settings.tooltips.desktopFull.video.play.noTouch.text);
                break;
            case self.views.mobileNormalView:
                self.tooltipText.text(self.canTouch ? self.settings.tooltips.mobile.video.play.touch.text : self.settings.tooltips.mobile.video.play.noTouch.text);
                break;
        }

        self.fadeOutTooltip();
    };

    Viewer.prototype.fadeOutTooltip = function () {
        var self = this;
        clearTimeout(self.tooltipTimeout);
        self.tooltip.stop();
        self.tooltipTimeout = setTimeout(function () {
            self.tooltip.fadeOut();
        }, self.settings.tooltips.displayTime);
    };

    Viewer.prototype.doubleTapEvent = function ($element) {
        var self = this;
        var lastTapTime = 0;
        var lastTapTime2 = 0;
        var firsttouch = true;
        var touchStart = {
          x: 0,
          y: 0
        };
        var touchEnd = {
          x: 1000,
          y: 1000
        };
        var touch1 = {
          x: 0,
          y: 0
        };
        var touch2 = {
          x: 1000,
          y: 1000
        };
        $element.on('touchstart', function (e) {
            if (self.isZoomCycle) {
                lastTapTime = 0;
                lastTapTime2 = 0;
                e.preventDefault();
                e.stopPropagation();
                return;
            }
            var currentTime = new Date();
            var tapTime = currentTime - lastTapTime2;
            //if (tapTime < self.settings.doubleTapTime && tapTime > 0) {
            //    e.preventDefault();
            //}
            touchStart = {
                x: Math.abs(e.originalEvent.touches[0].pageX) || 0,
                y: Math.abs(e.originalEvent.touches[0].pageY) || 0
            };
            if (firsttouch) {
              touch1 = touchStart;
              firsttouch = false;
            } else {
              touch2 = touchStart;
              firsttouch = true;
            }
            lastTapTime2 = currentTime;
        });
        $element.on('touchend', function (e) {
            e.preventDefault();
            var currentTime = new Date();
            var tapTime = currentTime - lastTapTime;
            touchEnd = {
                x: Math.abs(e.originalEvent.changedTouches[0].pageX) || 1000,
                y: Math.abs(e.originalEvent.changedTouches[0].pageY) || 1000
            };
            var diff1 = {
                x: Math.abs(touch2.x - touch1.x),
                y: Math.abs(touch2.y - touch1.y)
            };
            var diff2 = {
                x: Math.abs(touchEnd.x - touchStart.x),
                y: Math.abs(touchEnd.y - touchStart.y)
            };
            if (diff1.x < 50 && diff1.y < 50 && diff2.x < 50 && diff2.y < 50) {
                if (tapTime < self.settings.doubleTapTime && tapTime > 0) {
                    $(this).trigger('doubletap');
                    $(this).trigger('doubletapend');
                } else {
                    if ($(e.target).hasClass('amp-slide')) {
                        e.stopPropagation();
                    }
                }
            }
            lastTapTime = currentTime;
        });
        return 'doubletap';
    };

    Viewer.prototype.bindDesktopNormalViewEvents = function () {
        var self = this;
        var $element = self.mainContainerList.find('.zoom-trap');

        var event = (self.canTouch && self.settings.zoomInlineDoubleTap)
            ? self.doubleTapEvent($element) : 'click';

        $element.on(event, function () {
            self.renderView(self.views.desktopFullView);
        });
    };

    Viewer.prototype.bindDesktopFullViewEvents = function () {
        var self = this;
        self.bindIconClickEvent(self.wrapper.find('.main-container .close'), function () {
            self.renderView(self.views.desktopNormalView, true);
        });

        self.bindIconClickEvent(self.wrapper.find('.panel .plus'), function () {
            self.zoomIn();
        });
        self.bindIconClickEvent(self.wrapper.find('.panel .minus'), function () {
            self.zoomOut();
        });

        self.bindZoomEvents(self.zoomCycle);
    };

    Viewer.prototype.bindMobileNormalViewEvents = function () {
        var self = this;
        self.bindIconClickEvent(self.wrapper.find('.main-container .close'), function () {
            self.zoomOutFull();
        });
        self.bindZoomEvents(self.zoomCycle);
    };

    Viewer.prototype.bindSpinEvents = function () {
        var self = this;
        var spinTraps = self.mainContainerList.find('.spin-trap');
        var spins = self.mainContainerList.find('.spin-trap + ul');
        if (self.canTouch) {
            self.bindTapEvent(spinTraps, function () {
                var $spinTrap = $(this);
                $spinTrap.addClass('active-for-scrolling');
                if($spinTrap.next().hasClass('amp-outer-spin')){
                    $spinTrap.parent().on('touchstart', self._prevent);
                }
            });

            self.bindTapEvent(spins, function () {
                var $spin = $(this);
                var $parent = $(this).parent()
                $parent.find('.spin-trap').removeClass('active-for-scrolling');
                if($spin.hasClass('amp-outer-spin')){
                    $parent.off('touchstart', self._prevent);
                }
            });
        } else {
            spinTraps.css({display: 'none'});
        }
    };

    Viewer.prototype.bindZoomEvents = function (zoomAction) {
        var self = this;
        var zoomTraps = self.mainContainerList.find('.zoom-trap');
        self.bindTapEvent(zoomTraps, zoomAction.bind(self), true);
    };

    Viewer.prototype._resize = function () {
        this.checkView();
        if (this.currentView === this.views.mobileNormalView ||
            this.isPortraitView && this.currentView === this.views.desktopNormalView) {
            if(!this.settings.ampConfigs.mainContainerCarousel.loop){
                this.navigateToActiveThumb();
            }

            this.applyNavigationStyles();
            this.checkNavContainerNavArrows();
        }
    };

    Viewer.prototype._orientationChange = function(){
        var self = this;
        setTimeout(function(){
            self._resize();
        }, 300)
    };


    Viewer.prototype.bindGenericEvents = function () {
        var self = this;
        $(window).off('resize', this._resize);
        $(window).on('resize', this._resize.bind(this));

        $(document).off('gesturestart', self._prevent);
        $(document).on('gesturestart', self._prevent.bind(this));


        window.removeEventListener("orientationchange", self._orientationChange);
        window.addEventListener("orientationchange", self._orientationChange.bind(this));


        var touchmoves = [];
        var $ampCarousel = false;
        var blocked = false;

        $(document).off('touchmove.viewerkit');
        $(document).on('touchmove.viewerkit', function (e) {
            if (e.originalEvent.touches[0] && e.originalEvent.touches[0].clientX !== undefined) {
              if(!$ampCarousel)  {
                $ampCarousel = $(e.target).parents('.amp-carousel');
              }
              if ($ampCarousel && $ampCarousel.length > 0) {
                var coords = {
                  clientX: e.originalEvent.touches[0].clientX,
                  clientY: e.originalEvent.touches[0].clientY
                };
                touchmoves.push(coords);
                var diffX = Math.abs(touchmoves[touchmoves.length-1].clientX - touchmoves[0].clientX);
                var diffY = Math.abs(touchmoves[touchmoves.length-1].clientY - touchmoves[0].clientY);
                if (!blocked && diffX > diffY) {
                  $ampCarousel.on('touchmove', self._prevent);
                  blocked = true;
                }
                if (blocked && diffX <= diffY) {
                  $ampCarousel.off('touchmove', self._prevent);
                  blocked = false;
                }
              }
            }
        });

        $(document).off('touchend.viewerkit');
        $(document).on('touchend.viewerkit', function (e) {
            touchmoves = [];
            if (blocked && $ampCarousel && $ampCarousel.length > 0) {
              $ampCarousel.off('touchmove', self._prevent);
              blocked = false;
            }
            $ampCarousel = false;
        });
    };

    Viewer.prototype.startSpin = function(assetIndex){
        var self = this;
        var currentAsset = self.assets[assetIndex];

        if(currentAsset.type === 'set' && currentAsset.set.items[0].type != 'set'){
            var $spin = self.mainContainerList.find('.amp-slide').eq(assetIndex).find('.amp-spin');

            var spinData = typeof $spin.data() !== 'undefined' ?
                ($spin.data()['amp-ampSpin'] || $spin.data()['ampAmpSpin']) : false;

            if($spin.length > 0 && (!spinData || spinData._loaded == true)){
                setTimeout(function(){
                    $spin.ampSpin('playRepeat', 1);
                }, self.settings.ampConfigs.mainContainerCarousel.animDuration);
            }
        }
    };

    Viewer.prototype.bindAmpEvents = function () {
        var self = this;

        self.mainContainerList.on('ampcarouselselected', function (e, data) {
            self.navPrevAssetIndex = self.navCurrentAssetIndex;
            self.navCurrentAssetIndex = (data.index - 1);
            self.checkMainContainerSlidesVisibility(0, true);
        });

        self.mainContainerList.on('ampcarouselcreated ampcarouselchange', function (e, data) {
            $('.amp-spin').find('.amp-frame').css({
                'margin-left': '-1px'
            });
            self.prevAssetIndex = self.currentAssetIndex;
            self.currentAssetIndex = data.index - 1;
            self.zoomOutFull();
            self.initTooltips();
            self.checkSpins();
            self.checkMainContainerNavArrows();
            self.checkZoomIcons();
            self.checkMainContainerSlidesVisibility(self.settings.ampConfigs.mainContainerCarousel.animDuration);
            if (self.spinVisible) {
                self.startSpin(self.currentAssetIndex);
            }
        });

        self.navContainerList.on('ampcarouselcreated ampcarouselchange', function (e, data) {
            self.checkNavContainerNavArrows();
            if (self.currentView === self.views.mobileNormalView && e.type === 'ampcarouselcreated') {
                var selected = false;
                self.navContainerList.find('.amp-slide')
                    .on('touchstart mousedown', function(){
                        selected = $(this).hasClass('amp-selected');
                    })
                    .on('touchend mouseup', function () {
                        if (!selected) {
                            self.navMove(this);
                        }
                    });
            }
        });

        self.mainContainerList.find('.zoom-trap > img').on('ampzoominlinezoomedin ampzoominlinezoomedinfull ' +
                'ampzoominlinezoomedout ampzoominlinezoomedoutfull', function (e, data) {
                self.checkZoomIcons();
                self.toggleZoomScrolling($(this).parent().find('.amp-zoomed'));
            })
            .on('ampzoominlinezoomedin ampzoominlinezoomedinfull', function (e, data) {
                self.lastZoomDir = 'In';
            })
            .on('ampzoominlinezoomedout ampzoominlinezoomedoutfull', function (e, data) {
                self.lastZoomDir = 'Out';
            });

        self.mainContainerList.find('.video').on('ampvideofullscreenchange', function (e, data) {
            var state = $(e.target).ampVideo('state');
            // If video is not paused
            if (state !== 2 && data.player && data.player.isFullscreen_) {
                setTimeout(function () {
                    $(e.target).ampVideo('play');
                }, 1000);
            }
        });
    };

    Viewer.prototype.checkMainContainerNavArrows = function () {
        var self = this;

        if(self.settings.ampConfigs.mainContainerCarousel.loop){
            return;
        }

        var assetIndex = self.currentAssetIndex;
        self.wrapper.find('.main-container > .amp-js-nav').removeClass('disabled');

        if (assetIndex === 0) {
            self.wrapper.find('.main-container-prev').addClass('disabled');
        }
        if (assetIndex === self.assets.length - 1) {
            self.wrapper.find('.main-container-next').addClass('disabled');
        }
    };

    Viewer.prototype.checkNavContainerNavArrows = function () {
        var self = this;

        if (self.settings.ampConfigs.mainContainerCarousel.loop) {
            return;
        }

        self.wrapper.find('.nav-container > .amp-js-nav').removeClass('disabled');
        var info = self.getNavigationVisibleSlidesInfo();
        if (info.isFirst) {
            self.wrapper.find('.nav-container-prev').addClass('disabled');
        }
        if (info.isLast) {
            self.wrapper.find('.nav-container-next').addClass('disabled');
        }
    };

    Viewer.prototype.checkView = function () {
        var self = this;
        if (self.isMobile() && self.currentView !== self.views.mobileNormalView) {
            self.renderView(self.views.mobileNormalView);
        } else if (!self.isMobile() && self.currentView === self.views.mobileNormalView) {
            self.renderView(self.views.desktopNormalView);
        }
    };

    Viewer.prototype.getAmpConfigs = function () {
        var self = this;

        var ampConfigs = self.settings.ampConfigs;

        switch (self.currentView) {
            case self.views.desktopNormalView:
                if (!self.settings.view && !self.isPortraitView) {
                    ampConfigs.navContainerCarousel.width = self.settings.ampConfigs.navElementsCount.forDesktop;
                    ampConfigs.navContainerCarousel.gesture.enabled = true;
                }
                break;
            case self.views.desktopFullView:
                ampConfigs.navContainerCarousel.width = self.settings.ampConfigs.navElementsCount.forDesktopFull;
                break;
            case self.views.mobileNormalView:
                var containerWidth = self.wrapper.width();
                var assetsCount = self.assets.length;
                var assetsWidth = assetsCount * ampConfigs.navElementsWidthPxMobile;
                var navIconsWidth = parseFloat(self.wrapper.find('.nav-container').css('padding-left'), 10) * 2;

                if (assetsWidth > containerWidth) {
                    //Calculate number of pagination dots fully visible inside thumbs container
                    ampConfigs.navContainerCarousel.width = Math.floor((containerWidth - navIconsWidth) /
                        ampConfigs.navElementsWidthPxMobile);
                    ampConfigs.navContainerCarousel.gesture.enabled = true;
                } else {
                    //Assume that all pagination dots could be shown
                    ampConfigs.navContainerCarousel.width = self.assets.length;
                    ampConfigs.navContainerCarousel.gesture.enabled = false;
                }
                break;
        }

        ampConfigs.mainContainerCarousel.start = self.currentAssetIndex + 1;
        ampConfigs.navContainerCarousel.start = self.currentAssetIndex + 1;

        return ampConfigs;
    };

    Viewer.prototype.applyNavigationStyles = function () {
        var self = this;
        var ampConfigs = self.getAmpConfigs();
        var navContainer = self.wrapper.find('.nav-container');
        var $navIcon = navContainer.find('> .amp-js-nav');

        if (self.settings.view && self.isPortraitView && self.currentView === self.views.desktopNormalView) {
            var $visibleThumbs = navContainer.find('.amp-slide.amp-visible');

            if ($visibleThumbs.length === self.assets.length) {
                $navIcon.css({display: 'none'});
                navContainer.addClass('amp-without-thumbs');
            }
            else {
                $navIcon.css({display: 'block'});
                navContainer.removeClass('amp-without-thumbs');
                self.checkNavContainerNavArrowsStyle();
            }

            return false;
        }

        if (self.assets.length <= ampConfigs.navContainerCarousel.width) {
            $navIcon.css({display: 'none'});
        }
        else {
            $navIcon.css({display: 'block'});
        }

        var iconWidth = $navIcon.width();
        var navElementsWidthPercent = 100 / ampConfigs.navContainerCarousel.width;
        var normalNavContainerWidth = ampConfigs.navContainerCarousel.width * ampConfigs.navElementsWidthPx + iconWidth * 4;

        if (self.currentView === self.views.mobileNormalView) {
            if (self.assets.length <= ampConfigs.navContainerCarousel.width) {
                navContainer.css('padding', 0);
            } else {
                self.checkNavContainerNavArrowsStyle();
                navContainer.css('padding', '');
            }
        }

        var mobileNavContainerWidth = ampConfigs.navContainerCarousel.width * ampConfigs.navElementsWidthPxMobile +
            parseFloat(navContainer.css('padding-left'), 10) * 2;
        navContainer.css({
            'max-width': self.currentView === self.views.mobileNormalView ?
                mobileNavContainerWidth : normalNavContainerWidth
        });

        // For desktop thumnails we need to substract extra 20px due to margin
        var thumbWidth = self.currentView !== self.views.mobileNormalView ?
        'calc(' + navElementsWidthPercent + '% - 20px)'
            : ampConfigs.navElementsWidthPxMobile + 'px';

        self.navContainerList.find('.amp-slide').css('width', thumbWidth);
    };

    Viewer.prototype.getNavigationVisibleSlidesInfo = function () {
        var self = this;
        var elements = self.navContainerList.find('.amp-slide');
        var firstVisible = elements.length;
        for (var i = 0; i < elements.length; i++) {
            if (elements.eq(i).is('.amp-visible, .amp-partially-visible') && i < firstVisible) {
                firstVisible = i;
            }
        }
        var ampConfigs = self.getAmpConfigs();
        var visibleCount = ampConfigs.navContainerCarousel.width;

        if (self.settings.view && self.isPortraitView && self.currentView === self.views.desktopNormalView) {
            visibleCount = elements.filter('.amp-visible, .amp-partially-visible').length;
        }

        return {
            firstVisible: firstVisible,
            isFirst: firstVisible === 0,
            isLast: firstVisible >= elements.length - visibleCount
        };
    };

    Viewer.prototype.getMainVisibleSlidesInfo = function () {
        var self = this;
        var elements = self.mainContainerList.find('.amp-slide');
        var firstVisible = elements.length;
        for (var i = 0; i < elements.length; i++) {
            if (elements.eq(i).is('.amp-visible, .amp-partially-visible') && i < firstVisible) {
                firstVisible = i;
            }
        }
        var ampConfigs = self.getAmpConfigs();
        var visibleCount = ampConfigs.mainContainerCarousel.width;

        if (self.settings.view && self.isPortraitView && self.currentView === self.views.desktopNormalView) {
            visibleCount = elements.filter('.amp-visible, .amp-partially-visible').length;
        }

        return {
            firstVisible: firstVisible,
            isFirst: firstVisible === 0,
            isLast: firstVisible >= elements.length - visibleCount
        };
    };

    Viewer.prototype.zoomIn = function () {
        var self = this;
        var slide = self.getZoomSlide();
        if (slide.length > 0) {
            slide.ampZoomInline('zoomIn');
        }
    };

    Viewer.prototype.zoomOut = function () {
        var self = this;
        var slide = self.getZoomSlide();
        if (slide.length > 0) {
            slide.ampZoomInline('zoomOut');
        }
    };

    Viewer.prototype.zoomInFull = function () {
        var self = this;
        var slide = self.getZoomSlide();
        if (slide.length > 0) {
            slide.ampZoomInline('zoomInFull');
        }
    };

    Viewer.prototype.zoomOutFull = function () {
        var self = this;
        if (!self.isZoomCycle) {
            var slide = self.getZoomSlide();

            $.each(self._preventElements, function (ix, val) {
              val.off('touchmove', self._prevent);
            });
            self._preventElements = [];
            if (self.isZoomed()) {
              self.isZoomCycle = true;
              slide.ampZoomInline('zoomOutFull');
            }

            var prevSlide = self.getZoomSlide(self.prevAssetIndex);
            if (prevSlide.length > 0) {
                prevSlide.ampZoomInline('zoomOutFull');
            }
            setTimeout(function () {
              self.isZoomCycle = false;
            }, 600)
        }
    };

    Viewer.prototype.zoomToggle = function () {
        var self = this;
        var slide = self.getZoomSlide();
        if (slide.length > 0) {
            var state = slide.ampZoomInline('state');
            var scaleTo = 1 + state.scaleMax - state.scale;
            slide.ampZoomInline('setScale', scaleTo);
        }
    };

    Viewer.prototype.zoomCycle = function () {
        var self = this;
        if (!self.isZoomCycle) {
            var slide = self.getZoomSlide();
          if (slide.length > 0) {
                self.isZoomCycle = true;
                var dir = self.getNextCycleDir();
                slide.ampZoomInline('zoom' + dir);
            }
            setTimeout(function () {
                self.isZoomCycle = false;
            }, 500)
        }
    };

    Viewer.prototype.getNextCycleDir = function () {
        var self = this;
        var slide = self.getZoomSlide();
        var state = slide.ampZoomInline('state');

        if (state.scale === 1) {
            return 'In';
        } else if (state.scale === state.scaleMax) {
            return 'Out';
        } else {
            return self.lastZoomDir;
        }
    };

    Viewer.prototype.getZoomSlide = function (index) {
        var self = this;
        var index = typeof index !== 'undefined' ? index : self.currentAssetIndex;
        return self.mainContainerList.find('> > li:eq(' + index + ') .amp-zoom');
    };

    Viewer.prototype.toggleZoomScrolling = function($elem){
        var self = this;
        var slide = this.getZoomSlide();
        var state = slide.ampZoomInline('state')

        $.each(self._preventElements, function (ix, val) {
            val.off('touchmove', self._prevent);
        });
        self._preventElements = [];
        self._preventElements.push($elem);


        if(state.scale === 1){
            $elem.off('touchmove', self._prevent);
        }
        else{
            $elem.on('touchmove', self._prevent);
        }
    };

    Viewer.prototype.checkZoomIcons = function () {
        var self = this;
        var slide = self.getZoomSlide();
        var state = slide.ampZoomInline('state');
        switch (self.currentView) {
            case self.views.desktopFullView:
                var plus = self.wrapper.find('.panel .plus');
                var minus = self.wrapper.find('.panel .minus');
                plus.add(minus).removeClass('disabled');
                if (slide.length > 0) {
                    if (state.scale === 1) {
                        minus.addClass('disabled');
                    }
                    if (state.scale === state.scaleMax) {
                        plus.addClass('disabled');
                    }
                } else {
                    plus.add(minus).addClass('disabled');
                }
                break;
            case self.views.mobileNormalView:
                var close = self.wrapper.find('.main-container .close');
                close.css({display: 'none'});
                if (slide.length > 0) {
                    if (state.scale > 1) {
                        close.css({display: 'block'});
                    } else {
                      $.each(self._preventElements, function (ix, val) {
                        val.off('touchmove', self._prevent);
                        self._preventElements = [];
                      });
                    }
                }
                break;
        }
    };

    Viewer.prototype.isZoomed = function () {
        var self = this;
        var state = self.getZoomSlide().ampZoomInline('state');
        return state.scale > 1;
    };

    Viewer.prototype.bindTapEvent = function (element, action, preventDefault) {
        var self = this;
        var coords;
        var newCoords;

        // Need to remove mouse events on touch devices since it fires callbacks twice on tap
        var startEvents = (self.canTouch ? '' : 'mousedown ');
        var endEvents = (self.canTouch ? '' : 'mouseup ');
        if (this.settings.zoomInlineDoubleTap) {
            startEvents += self.doubleTapEvent(element);
            endEvents += 'doubletapend';
        } else {
            startEvents += 'touchstart';
            endEvents += 'touchend';
        }

        function getPageCoords(e) {
            var out = {x: 0, y: 0};

            if (e.type === 'touchstart' || e.type === 'touchmove' ||
                e.type === 'touchend' || e.type === 'touchcancel') {
                var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
                out.x = touch.pageX;
                out.y = touch.pageY;
            } else if (e.type === 'mousedown' || e.type === 'mouseup' ||
                e.type === 'mousemove' || e.type === 'mouseover' ||
                e.type === 'mouseout' || e.type === 'mouseenter' ||
                e.type === 'mouseleave') {
                out.x = e.pageX;
                out.y = e.pageY;
            }
            return out;
        }

        element.on(startEvents, function (e) {
            var $self = $(this);

            if(preventDefault){
                e.preventDefault();
            }

            if (e.which === 3) {
                return false;
            }

            if ($self.data('startEvent') === 'progress') return;
            $self.data('startEvent', 'progress');
            setTimeout(function () {
                $self.data('startEvent', 'done');
            }, 500);

            var target = this;
            target.tap = true;
            coords = getPageCoords(e);
            element.one(endEvents, function (e) {

                if (e.which === 3) {
                    return false;
                }

                //$.each(self._preventElements, function (ix, val) {
                //    val.off('touchmove', self._prevent);
                //});
                //self._preventElements = [];
                ////element.on('touchmove', self._prevent);
                //self._preventElements.push(element);

                var target = this;
                newCoords = getPageCoords(e);

                var distX = coords.x - newCoords.x;
                var distY = coords.y - newCoords.y;

                if (Math.abs(distX) >= 5 || Math.abs(distY) >= 5) {
                    target.tap = false;
                }

                if (target.tap) {
                    target.tap = false;
                    action.call(target);
                }
            });



            if (self.isZoomed()) {
                e.stopPropagation();
            }
        });
    };

    Viewer.prototype.checkSpins = function () {
        var self = this;
        var spinTraps = self.mainContainerList.find('.spin-trap');
        if (self.canTouch) {
            spinTraps.removeClass('active-for-scrolling');
            spinTraps.parent().off('touchstart', self._prevent);
        } else {
            spinTraps.css({display: 'none'});
        }
    };

    Viewer.prototype.bindIconClickEvent = function (icon, action) {
        var self = this;
        icon.on('click', function (e, data) {
            e.stopPropagation();
            if ($(this).hasClass('disabled')) {
                e.preventDefault();
            } else {
                action();
            }
        });
    };

    Viewer.prototype.checkNavContainerNavArrowsStyle = function () {
        var self = this;
        var navContainer = self.wrapper.find('.nav-container');
        var leftArrow = navContainer.find('.nav-container-prev');
        var rightArrow = navContainer.find('.nav-container-next');
        var thumbWidth = navContainer.find('.amp-slide:not(.amp-selected) .mobile-thumbnail').width();
        var shift = (52 - thumbWidth) / 2;

        leftArrow.add(rightArrow)
            .css('width', thumbWidth)
            .css('height', thumbWidth);

        leftArrow.css('left', shift);
        rightArrow.css('right', shift);
    };

    Viewer.prototype.checkMainContainerSlidesVisibility = function (timeout, showSlide) {

        var self = this;
        var assetIndex = self.currentAssetIndex;
        var timeout = timeout || 0;
        var currentAsset = self.assets[assetIndex];
        var $slide = self.mainContainerList.find('.amp-slide').has('.video');

        if (typeof showSlide !== 'undefined' && showSlide) {
            $slide.css({
                opacity: 1
            })
            return;
        }

        if (currentAsset.hasOwnProperty('media')) {
            $slide.css({
                opacity: 1
            })
            return;
        }

        else {
                $slide.css({opacity: 0});
        }
    };

    Viewer.prototype._prevent = function (e) {
        e.preventDefault();
    };

    Viewer.prototype._preventElements = [];

    global.amp.Viewer = Viewer;
}(window, jQuery));

(function (global, $) {
    'use strict';
    var bridgeConnector = {
        bridge: window.ecommBridge,
        page: null,
        setPageInfo: function (page) {
            this.page = {};
            for (var x in page) {
                if (page.hasOwnProperty(x)) {
                    this.page[x] = page[x];
                }
            }
        },
        enrichMediaListWithParams: function (list, params) {
            if (list && list.constructor === Array && list.length > 0) {
                $.each(list, function (i, v) {
                    for (var name in params) {
                        v[name] = params[name];
                    }
                });
            }
            return list;
        },

        convertListToSet: function (assetsList, assetsData) {
            var setObject = {'name': 'set', 'items': []};

            //ew, we have to loop through to preserve order
            for (var i = 0; i < assetsList.length; i++) {
                var name = assetsList[i].name;
                var key;
                for (key in assetsData) {
                    if (key === name && assetsData.hasOwnProperty(key)) {
                        setObject.items.push(assetsData[key]);
                        break;
                    }
                }
            }

            for (var s = 0; s < setObject.items.length; s++) {
                if (setObject.items[s].thumbs) {
                    setObject.items[s].type = 'video';
                } else if (setObject.items[s].items) {
                    setObject.items[s].type = 'set';
                    setObject.items[s].set = {'items': setObject.items[s].items};
                } else if (setObject.items[s].isImage) {
                    setObject.items[s].type = 'img';
                }
                setObject.items[s].src = setObject.items[s].url;
            }
            return setObject;
        },
        initAll: function () {
            if (this.bridge !== null && this.bridge.site && this.bridge.site.page) {
                this.setPageInfo(this.bridge.site.page);
            }
        }
    };

    global.amp.Viewer.prototype.bridgeConnector = bridgeConnector;
}(window, jQuery));
