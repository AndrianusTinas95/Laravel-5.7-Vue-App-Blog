/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
__webpack_require__(2);
__webpack_require__(3);
__webpack_require__(4);
__webpack_require__(5);
__webpack_require__(6);
__webpack_require__(7);
module.exports = __webpack_require__(8);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

$.noConflict();

jQuery(document).ready(function ($) {

	"use strict";

	[].slice.call(document.querySelectorAll('select.cs-select')).forEach(function (el) {
		new SelectFx(el);
	});

	jQuery('.selectpicker').selectpicker;

	$('#menuToggle').on('click', function (event) {
		$('body').toggleClass('open');
	});

	$('.search-trigger').on('click', function (event) {
		event.preventDefault();
		event.stopPropagation();
		$('.search-trigger').parent('.header-left').addClass('open');
	});

	$('.search-close').on('click', function (event) {
		event.preventDefault();
		event.stopPropagation();
		$('.search-trigger').parent('.header-left').removeClass('open');
	});

	// $('.user-area> a').on('click', function(event) {
	// 	event.preventDefault();
	// 	event.stopPropagation();
	// 	$('.user-menu').parent().removeClass('open');
	// 	$('.user-menu').parent().toggleClass('open');
	// });

});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * Chart.js
 * http://chartjs.org/
 * Version: 2.7.2
 *
 * Copyright 2018 Chart.js Contributors
 * Released under the MIT license
 * https://github.com/chartjs/Chart.js/blob/master/LICENSE.md
 */
!function (t) {
  if ("object" == ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module) module.exports = t();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).Chart = t();
  }
}(function () {
  return function t(e, i, n) {
    function a(o, s) {
      if (!i[o]) {
        if (!e[o]) {
          var l = "function" == typeof require && require;if (!s && l) return require(o, !0);if (r) return r(o, !0);var u = new Error("Cannot find module '" + o + "'");throw u.code = "MODULE_NOT_FOUND", u;
        }var d = i[o] = { exports: {} };e[o][0].call(d.exports, function (t) {
          var i = e[o][1][t];return a(i || t);
        }, d, d.exports, t, e, i, n);
      }return i[o].exports;
    }for (var r = "function" == typeof require && require, o = 0; o < n.length; o++) {
      a(n[o]);
    }return a;
  }({ 1: [function (t, e, i) {
      var n = t(5);function a(t) {
        if (t) {
          var e = [0, 0, 0],
              i = 1,
              a = t.match(/^#([a-fA-F0-9]{3})$/i);if (a) {
            a = a[1];for (var r = 0; r < e.length; r++) {
              e[r] = parseInt(a[r] + a[r], 16);
            }
          } else if (a = t.match(/^#([a-fA-F0-9]{6})$/i)) {
            a = a[1];for (r = 0; r < e.length; r++) {
              e[r] = parseInt(a.slice(2 * r, 2 * r + 2), 16);
            }
          } else if (a = t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
            for (r = 0; r < e.length; r++) {
              e[r] = parseInt(a[r + 1]);
            }i = parseFloat(a[4]);
          } else if (a = t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
            for (r = 0; r < e.length; r++) {
              e[r] = Math.round(2.55 * parseFloat(a[r + 1]));
            }i = parseFloat(a[4]);
          } else if (a = t.match(/(\w+)/)) {
            if ("transparent" == a[1]) return [0, 0, 0, 0];if (!(e = n[a[1]])) return;
          }for (r = 0; r < e.length; r++) {
            e[r] = d(e[r], 0, 255);
          }return i = i || 0 == i ? d(i, 0, 1) : 1, e[3] = i, e;
        }
      }function r(t) {
        if (t) {
          var e = t.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);if (e) {
            var i = parseFloat(e[4]);return [d(parseInt(e[1]), 0, 360), d(parseFloat(e[2]), 0, 100), d(parseFloat(e[3]), 0, 100), d(isNaN(i) ? 1 : i, 0, 1)];
          }
        }
      }function o(t) {
        if (t) {
          var e = t.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);if (e) {
            var i = parseFloat(e[4]);return [d(parseInt(e[1]), 0, 360), d(parseFloat(e[2]), 0, 100), d(parseFloat(e[3]), 0, 100), d(isNaN(i) ? 1 : i, 0, 1)];
          }
        }
      }function s(t, e) {
        return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")";
      }function l(t, e) {
        return "rgba(" + Math.round(t[0] / 255 * 100) + "%, " + Math.round(t[1] / 255 * 100) + "%, " + Math.round(t[2] / 255 * 100) + "%, " + (e || t[3] || 1) + ")";
      }function u(t, e) {
        return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")";
      }function d(t, e, i) {
        return Math.min(Math.max(e, t), i);
      }function h(t) {
        var e = t.toString(16).toUpperCase();return e.length < 2 ? "0" + e : e;
      }e.exports = { getRgba: a, getHsla: r, getRgb: function getRgb(t) {
          var e = a(t);return e && e.slice(0, 3);
        }, getHsl: function getHsl(t) {
          var e = r(t);return e && e.slice(0, 3);
        }, getHwb: o, getAlpha: function getAlpha(t) {
          var e = a(t);{
            if (e) return e[3];if (e = r(t)) return e[3];if (e = o(t)) return e[3];
          }
        }, hexString: function hexString(t) {
          return "#" + h(t[0]) + h(t[1]) + h(t[2]);
        }, rgbString: function rgbString(t, e) {
          if (e < 1 || t[3] && t[3] < 1) return s(t, e);return "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")";
        }, rgbaString: s, percentString: function percentString(t, e) {
          if (e < 1 || t[3] && t[3] < 1) return l(t, e);var i = Math.round(t[0] / 255 * 100),
              n = Math.round(t[1] / 255 * 100),
              a = Math.round(t[2] / 255 * 100);return "rgb(" + i + "%, " + n + "%, " + a + "%)";
        }, percentaString: l, hslString: function hslString(t, e) {
          if (e < 1 || t[3] && t[3] < 1) return u(t, e);return "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)";
        }, hslaString: u, hwbString: function hwbString(t, e) {
          void 0 === e && (e = void 0 !== t[3] ? t[3] : 1);return "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (void 0 !== e && 1 !== e ? ", " + e : "") + ")";
        }, keyword: function keyword(t) {
          return c[t.slice(0, 3)];
        } };var c = {};for (var f in n) {
        c[n[f]] = f;
      }
    }, { 5: 5 }], 2: [function (t, e, i) {
      var n = t(4),
          a = t(1),
          r = function r(t) {
        return t instanceof r ? t : this instanceof r ? (this.valid = !1, this.values = { rgb: [0, 0, 0], hsl: [0, 0, 0], hsv: [0, 0, 0], hwb: [0, 0, 0], cmyk: [0, 0, 0, 0], alpha: 1 }, void ("string" == typeof t ? (e = a.getRgba(t)) ? this.setValues("rgb", e) : (e = a.getHsla(t)) ? this.setValues("hsl", e) : (e = a.getHwb(t)) && this.setValues("hwb", e) : "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (void 0 !== (e = t).r || void 0 !== e.red ? this.setValues("rgb", e) : void 0 !== e.l || void 0 !== e.lightness ? this.setValues("hsl", e) : void 0 !== e.v || void 0 !== e.value ? this.setValues("hsv", e) : void 0 !== e.w || void 0 !== e.whiteness ? this.setValues("hwb", e) : void 0 === e.c && void 0 === e.cyan || this.setValues("cmyk", e)))) : new r(t);var e;
      };r.prototype = { isValid: function isValid() {
          return this.valid;
        }, rgb: function rgb() {
          return this.setSpace("rgb", arguments);
        }, hsl: function hsl() {
          return this.setSpace("hsl", arguments);
        }, hsv: function hsv() {
          return this.setSpace("hsv", arguments);
        }, hwb: function hwb() {
          return this.setSpace("hwb", arguments);
        }, cmyk: function cmyk() {
          return this.setSpace("cmyk", arguments);
        }, rgbArray: function rgbArray() {
          return this.values.rgb;
        }, hslArray: function hslArray() {
          return this.values.hsl;
        }, hsvArray: function hsvArray() {
          return this.values.hsv;
        }, hwbArray: function hwbArray() {
          var t = this.values;return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb;
        }, cmykArray: function cmykArray() {
          return this.values.cmyk;
        }, rgbaArray: function rgbaArray() {
          var t = this.values;return t.rgb.concat([t.alpha]);
        }, hslaArray: function hslaArray() {
          var t = this.values;return t.hsl.concat([t.alpha]);
        }, alpha: function alpha(t) {
          return void 0 === t ? this.values.alpha : (this.setValues("alpha", t), this);
        }, red: function red(t) {
          return this.setChannel("rgb", 0, t);
        }, green: function green(t) {
          return this.setChannel("rgb", 1, t);
        }, blue: function blue(t) {
          return this.setChannel("rgb", 2, t);
        }, hue: function hue(t) {
          return t && (t = (t %= 360) < 0 ? 360 + t : t), this.setChannel("hsl", 0, t);
        }, saturation: function saturation(t) {
          return this.setChannel("hsl", 1, t);
        }, lightness: function lightness(t) {
          return this.setChannel("hsl", 2, t);
        }, saturationv: function saturationv(t) {
          return this.setChannel("hsv", 1, t);
        }, whiteness: function whiteness(t) {
          return this.setChannel("hwb", 1, t);
        }, blackness: function blackness(t) {
          return this.setChannel("hwb", 2, t);
        }, value: function value(t) {
          return this.setChannel("hsv", 2, t);
        }, cyan: function cyan(t) {
          return this.setChannel("cmyk", 0, t);
        }, magenta: function magenta(t) {
          return this.setChannel("cmyk", 1, t);
        }, yellow: function yellow(t) {
          return this.setChannel("cmyk", 2, t);
        }, black: function black(t) {
          return this.setChannel("cmyk", 3, t);
        }, hexString: function hexString() {
          return a.hexString(this.values.rgb);
        }, rgbString: function rgbString() {
          return a.rgbString(this.values.rgb, this.values.alpha);
        }, rgbaString: function rgbaString() {
          return a.rgbaString(this.values.rgb, this.values.alpha);
        }, percentString: function percentString() {
          return a.percentString(this.values.rgb, this.values.alpha);
        }, hslString: function hslString() {
          return a.hslString(this.values.hsl, this.values.alpha);
        }, hslaString: function hslaString() {
          return a.hslaString(this.values.hsl, this.values.alpha);
        }, hwbString: function hwbString() {
          return a.hwbString(this.values.hwb, this.values.alpha);
        }, keyword: function keyword() {
          return a.keyword(this.values.rgb, this.values.alpha);
        }, rgbNumber: function rgbNumber() {
          var t = this.values.rgb;return t[0] << 16 | t[1] << 8 | t[2];
        }, luminosity: function luminosity() {
          for (var t = this.values.rgb, e = [], i = 0; i < t.length; i++) {
            var n = t[i] / 255;e[i] = n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4);
          }return .2126 * e[0] + .7152 * e[1] + .0722 * e[2];
        }, contrast: function contrast(t) {
          var e = this.luminosity(),
              i = t.luminosity();return e > i ? (e + .05) / (i + .05) : (i + .05) / (e + .05);
        }, level: function level(t) {
          var e = this.contrast(t);return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : "";
        }, dark: function dark() {
          var t = this.values.rgb;return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128;
        }, light: function light() {
          return !this.dark();
        }, negate: function negate() {
          for (var t = [], e = 0; e < 3; e++) {
            t[e] = 255 - this.values.rgb[e];
          }return this.setValues("rgb", t), this;
        }, lighten: function lighten(t) {
          var e = this.values.hsl;return e[2] += e[2] * t, this.setValues("hsl", e), this;
        }, darken: function darken(t) {
          var e = this.values.hsl;return e[2] -= e[2] * t, this.setValues("hsl", e), this;
        }, saturate: function saturate(t) {
          var e = this.values.hsl;return e[1] += e[1] * t, this.setValues("hsl", e), this;
        }, desaturate: function desaturate(t) {
          var e = this.values.hsl;return e[1] -= e[1] * t, this.setValues("hsl", e), this;
        }, whiten: function whiten(t) {
          var e = this.values.hwb;return e[1] += e[1] * t, this.setValues("hwb", e), this;
        }, blacken: function blacken(t) {
          var e = this.values.hwb;return e[2] += e[2] * t, this.setValues("hwb", e), this;
        }, greyscale: function greyscale() {
          var t = this.values.rgb,
              e = .3 * t[0] + .59 * t[1] + .11 * t[2];return this.setValues("rgb", [e, e, e]), this;
        }, clearer: function clearer(t) {
          var e = this.values.alpha;return this.setValues("alpha", e - e * t), this;
        }, opaquer: function opaquer(t) {
          var e = this.values.alpha;return this.setValues("alpha", e + e * t), this;
        }, rotate: function rotate(t) {
          var e = this.values.hsl,
              i = (e[0] + t) % 360;return e[0] = i < 0 ? 360 + i : i, this.setValues("hsl", e), this;
        }, mix: function mix(t, e) {
          var i = this,
              n = t,
              a = void 0 === e ? .5 : e,
              r = 2 * a - 1,
              o = i.alpha() - n.alpha(),
              s = ((r * o == -1 ? r : (r + o) / (1 + r * o)) + 1) / 2,
              l = 1 - s;return this.rgb(s * i.red() + l * n.red(), s * i.green() + l * n.green(), s * i.blue() + l * n.blue()).alpha(i.alpha() * a + n.alpha() * (1 - a));
        }, toJSON: function toJSON() {
          return this.rgb();
        }, clone: function clone() {
          var t,
              e,
              i = new r(),
              n = this.values,
              a = i.values;for (var o in n) {
            n.hasOwnProperty(o) && (t = n[o], "[object Array]" === (e = {}.toString.call(t)) ? a[o] = t.slice(0) : "[object Number]" === e ? a[o] = t : console.error("unexpected color value:", t));
          }return i;
        } }, r.prototype.spaces = { rgb: ["red", "green", "blue"], hsl: ["hue", "saturation", "lightness"], hsv: ["hue", "saturation", "value"], hwb: ["hue", "whiteness", "blackness"], cmyk: ["cyan", "magenta", "yellow", "black"] }, r.prototype.maxes = { rgb: [255, 255, 255], hsl: [360, 100, 100], hsv: [360, 100, 100], hwb: [360, 100, 100], cmyk: [100, 100, 100, 100] }, r.prototype.getValues = function (t) {
        for (var e = this.values, i = {}, n = 0; n < t.length; n++) {
          i[t.charAt(n)] = e[t][n];
        }return 1 !== e.alpha && (i.a = e.alpha), i;
      }, r.prototype.setValues = function (t, e) {
        var i,
            a,
            r = this.values,
            o = this.spaces,
            s = this.maxes,
            l = 1;if (this.valid = !0, "alpha" === t) l = e;else if (e.length) r[t] = e.slice(0, t.length), l = e[t.length];else if (void 0 !== e[t.charAt(0)]) {
          for (i = 0; i < t.length; i++) {
            r[t][i] = e[t.charAt(i)];
          }l = e.a;
        } else if (void 0 !== e[o[t][0]]) {
          var u = o[t];for (i = 0; i < t.length; i++) {
            r[t][i] = e[u[i]];
          }l = e.alpha;
        }if (r.alpha = Math.max(0, Math.min(1, void 0 === l ? r.alpha : l)), "alpha" === t) return !1;for (i = 0; i < t.length; i++) {
          a = Math.max(0, Math.min(s[t][i], r[t][i])), r[t][i] = Math.round(a);
        }for (var d in o) {
          d !== t && (r[d] = n[t][d](r[t]));
        }return !0;
      }, r.prototype.setSpace = function (t, e) {
        var i = e[0];return void 0 === i ? this.getValues(t) : ("number" == typeof i && (i = Array.prototype.slice.call(e)), this.setValues(t, i), this);
      }, r.prototype.setChannel = function (t, e, i) {
        var n = this.values[t];return void 0 === i ? n[e] : i === n[e] ? this : (n[e] = i, this.setValues(t, n), this);
      }, "undefined" != typeof window && (window.Color = r), e.exports = r;
    }, { 1: 1, 4: 4 }], 3: [function (t, e, i) {
      function n(t) {
        var e,
            i,
            n = t[0] / 255,
            a = t[1] / 255,
            r = t[2] / 255,
            o = Math.min(n, a, r),
            s = Math.max(n, a, r),
            l = s - o;return s == o ? e = 0 : n == s ? e = (a - r) / l : a == s ? e = 2 + (r - n) / l : r == s && (e = 4 + (n - a) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), i = (o + s) / 2, [e, 100 * (s == o ? 0 : i <= .5 ? l / (s + o) : l / (2 - s - o)), 100 * i];
      }function a(t) {
        var e,
            i,
            n = t[0],
            a = t[1],
            r = t[2],
            o = Math.min(n, a, r),
            s = Math.max(n, a, r),
            l = s - o;return i = 0 == s ? 0 : l / s * 1e3 / 10, s == o ? e = 0 : n == s ? e = (a - r) / l : a == s ? e = 2 + (r - n) / l : r == s && (e = 4 + (n - a) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), [e, i, s / 255 * 1e3 / 10];
      }function o(t) {
        var e = t[0],
            i = t[1],
            a = t[2];return [n(t)[0], 100 * (1 / 255 * Math.min(e, Math.min(i, a))), 100 * (a = 1 - 1 / 255 * Math.max(e, Math.max(i, a)))];
      }function s(t) {
        var e,
            i = t[0] / 255,
            n = t[1] / 255,
            a = t[2] / 255;return [100 * ((1 - i - (e = Math.min(1 - i, 1 - n, 1 - a))) / (1 - e) || 0), 100 * ((1 - n - e) / (1 - e) || 0), 100 * ((1 - a - e) / (1 - e) || 0), 100 * e];
      }function l(t) {
        return S[JSON.stringify(t)];
      }function u(t) {
        var e = t[0] / 255,
            i = t[1] / 255,
            n = t[2] / 255;return [100 * (.4124 * (e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92) + .3576 * (i = i > .04045 ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92) + .1805 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92)), 100 * (.2126 * e + .7152 * i + .0722 * n), 100 * (.0193 * e + .1192 * i + .9505 * n)];
      }function d(t) {
        var e = u(t),
            i = e[0],
            n = e[1],
            a = e[2];return n /= 100, a /= 108.883, i = (i /= 95.047) > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116, [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (i - n), 200 * (n - (a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116))];
      }function h(t) {
        var e,
            i,
            n,
            a,
            r,
            o = t[0] / 360,
            s = t[1] / 100,
            l = t[2] / 100;if (0 == s) return [r = 255 * l, r, r];e = 2 * l - (i = l < .5 ? l * (1 + s) : l + s - l * s), a = [0, 0, 0];for (var u = 0; u < 3; u++) {
          (n = o + 1 / 3 * -(u - 1)) < 0 && n++, n > 1 && n--, r = 6 * n < 1 ? e + 6 * (i - e) * n : 2 * n < 1 ? i : 3 * n < 2 ? e + (i - e) * (2 / 3 - n) * 6 : e, a[u] = 255 * r;
        }return a;
      }function c(t) {
        var e = t[0] / 60,
            i = t[1] / 100,
            n = t[2] / 100,
            a = Math.floor(e) % 6,
            r = e - Math.floor(e),
            o = 255 * n * (1 - i),
            s = 255 * n * (1 - i * r),
            l = 255 * n * (1 - i * (1 - r));n *= 255;switch (a) {case 0:
            return [n, l, o];case 1:
            return [s, n, o];case 2:
            return [o, n, l];case 3:
            return [o, s, n];case 4:
            return [l, o, n];case 5:
            return [n, o, s];}
      }function f(t) {
        var e,
            i,
            n,
            a,
            o = t[0] / 360,
            s = t[1] / 100,
            l = t[2] / 100,
            u = s + l;switch (u > 1 && (s /= u, l /= u), n = 6 * o - (e = Math.floor(6 * o)), 0 != (1 & e) && (n = 1 - n), a = s + n * ((i = 1 - l) - s), e) {default:case 6:case 0:
            r = i, g = a, b = s;break;case 1:
            r = a, g = i, b = s;break;case 2:
            r = s, g = i, b = a;break;case 3:
            r = s, g = a, b = i;break;case 4:
            r = a, g = s, b = i;break;case 5:
            r = i, g = s, b = a;}return [255 * r, 255 * g, 255 * b];
      }function m(t) {
        var e = t[0] / 100,
            i = t[1] / 100,
            n = t[2] / 100,
            a = t[3] / 100;return [255 * (1 - Math.min(1, e * (1 - a) + a)), 255 * (1 - Math.min(1, i * (1 - a) + a)), 255 * (1 - Math.min(1, n * (1 - a) + a))];
      }function p(t) {
        var e,
            i,
            n,
            a = t[0] / 100,
            r = t[1] / 100,
            o = t[2] / 100;return i = -.9689 * a + 1.8758 * r + .0415 * o, n = .0557 * a + -.204 * r + 1.057 * o, e = (e = 3.2406 * a + -1.5372 * r + -.4986 * o) > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : e *= 12.92, i = i > .0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : i *= 12.92, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : n *= 12.92, [255 * (e = Math.min(Math.max(0, e), 1)), 255 * (i = Math.min(Math.max(0, i), 1)), 255 * (n = Math.min(Math.max(0, n), 1))];
      }function v(t) {
        var e = t[0],
            i = t[1],
            n = t[2];return i /= 100, n /= 108.883, e = (e /= 95.047) > .008856 ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116, [116 * (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116) - 16, 500 * (e - i), 200 * (i - (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116))];
      }function y(t) {
        var e,
            i,
            n,
            a,
            r = t[0],
            o = t[1],
            s = t[2];return r <= 8 ? a = (i = 100 * r / 903.3) / 100 * 7.787 + 16 / 116 : (i = 100 * Math.pow((r + 16) / 116, 3), a = Math.pow(i / 100, 1 / 3)), [e = e / 95.047 <= .008856 ? e = 95.047 * (o / 500 + a - 16 / 116) / 7.787 : 95.047 * Math.pow(o / 500 + a, 3), i, n = n / 108.883 <= .008859 ? n = 108.883 * (a - s / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(a - s / 200, 3)];
      }function x(t) {
        var e,
            i = t[0],
            n = t[1],
            a = t[2];return (e = 360 * Math.atan2(a, n) / 2 / Math.PI) < 0 && (e += 360), [i, Math.sqrt(n * n + a * a), e];
      }function _(t) {
        return p(y(t));
      }function k(t) {
        var e,
            i = t[0],
            n = t[1];return e = t[2] / 360 * 2 * Math.PI, [i, n * Math.cos(e), n * Math.sin(e)];
      }function w(t) {
        return M[t];
      }e.exports = { rgb2hsl: n, rgb2hsv: a, rgb2hwb: o, rgb2cmyk: s, rgb2keyword: l, rgb2xyz: u, rgb2lab: d, rgb2lch: function rgb2lch(t) {
          return x(d(t));
        }, hsl2rgb: h, hsl2hsv: function hsl2hsv(t) {
          var e = t[0],
              i = t[1] / 100,
              n = t[2] / 100;if (0 === n) return [0, 0, 0];return [e, 100 * (2 * (i *= (n *= 2) <= 1 ? n : 2 - n) / (n + i)), 100 * ((n + i) / 2)];
        }, hsl2hwb: function hsl2hwb(t) {
          return o(h(t));
        }, hsl2cmyk: function hsl2cmyk(t) {
          return s(h(t));
        }, hsl2keyword: function hsl2keyword(t) {
          return l(h(t));
        }, hsv2rgb: c, hsv2hsl: function hsv2hsl(t) {
          var e,
              i,
              n = t[0],
              a = t[1] / 100,
              r = t[2] / 100;return e = a * r, [n, 100 * (e = (e /= (i = (2 - a) * r) <= 1 ? i : 2 - i) || 0), 100 * (i /= 2)];
        }, hsv2hwb: function hsv2hwb(t) {
          return o(c(t));
        }, hsv2cmyk: function hsv2cmyk(t) {
          return s(c(t));
        }, hsv2keyword: function hsv2keyword(t) {
          return l(c(t));
        }, hwb2rgb: f, hwb2hsl: function hwb2hsl(t) {
          return n(f(t));
        }, hwb2hsv: function hwb2hsv(t) {
          return a(f(t));
        }, hwb2cmyk: function hwb2cmyk(t) {
          return s(f(t));
        }, hwb2keyword: function hwb2keyword(t) {
          return l(f(t));
        }, cmyk2rgb: m, cmyk2hsl: function cmyk2hsl(t) {
          return n(m(t));
        }, cmyk2hsv: function cmyk2hsv(t) {
          return a(m(t));
        }, cmyk2hwb: function cmyk2hwb(t) {
          return o(m(t));
        }, cmyk2keyword: function cmyk2keyword(t) {
          return l(m(t));
        }, keyword2rgb: w, keyword2hsl: function keyword2hsl(t) {
          return n(w(t));
        }, keyword2hsv: function keyword2hsv(t) {
          return a(w(t));
        }, keyword2hwb: function keyword2hwb(t) {
          return o(w(t));
        }, keyword2cmyk: function keyword2cmyk(t) {
          return s(w(t));
        }, keyword2lab: function keyword2lab(t) {
          return d(w(t));
        }, keyword2xyz: function keyword2xyz(t) {
          return u(w(t));
        }, xyz2rgb: p, xyz2lab: v, xyz2lch: function xyz2lch(t) {
          return x(v(t));
        }, lab2xyz: y, lab2rgb: _, lab2lch: x, lch2lab: k, lch2xyz: function lch2xyz(t) {
          return y(k(t));
        }, lch2rgb: function lch2rgb(t) {
          return _(k(t));
        } };var M = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] },
          S = {};for (var D in M) {
        S[JSON.stringify(M[D])] = D;
      }
    }, {}], 4: [function (t, e, i) {
      var n = t(3),
          a = function a() {
        return new u();
      };for (var r in n) {
        a[r + "Raw"] = function (t) {
          return function (e) {
            return "number" == typeof e && (e = Array.prototype.slice.call(arguments)), n[t](e);
          };
        }(r);var o = /(\w+)2(\w+)/.exec(r),
            s = o[1],
            l = o[2];(a[s] = a[s] || {})[l] = a[r] = function (t) {
          return function (e) {
            "number" == typeof e && (e = Array.prototype.slice.call(arguments));var i = n[t](e);if ("string" == typeof i || void 0 === i) return i;for (var a = 0; a < i.length; a++) {
              i[a] = Math.round(i[a]);
            }return i;
          };
        }(r);
      }var u = function u() {
        this.convs = {};
      };u.prototype.routeSpace = function (t, e) {
        var i = e[0];return void 0 === i ? this.getValues(t) : ("number" == typeof i && (i = Array.prototype.slice.call(e)), this.setValues(t, i));
      }, u.prototype.setValues = function (t, e) {
        return this.space = t, this.convs = {}, this.convs[t] = e, this;
      }, u.prototype.getValues = function (t) {
        var e = this.convs[t];if (!e) {
          var i = this.space,
              n = this.convs[i];e = a[i][t](n), this.convs[t] = e;
        }return e;
      }, ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function (t) {
        u.prototype[t] = function (e) {
          return this.routeSpace(t, arguments);
        };
      }), e.exports = a;
    }, { 3: 3 }], 5: [function (t, e, i) {
      "use strict";
      e.exports = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] };
    }, {}], 6: [function (t, e, i) {
      var n, a;n = this, a = function a() {
        "use strict";
        var i, n;function a() {
          return i.apply(null, arguments);
        }function r(t) {
          return t instanceof Array || "[object Array]" === Object.prototype.toString.call(t);
        }function o(t) {
          return null != t && "[object Object]" === Object.prototype.toString.call(t);
        }function s(t) {
          return void 0 === t;
        }function l(t) {
          return "number" == typeof t || "[object Number]" === Object.prototype.toString.call(t);
        }function u(t) {
          return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t);
        }function d(t, e) {
          var i,
              n = [];for (i = 0; i < t.length; ++i) {
            n.push(e(t[i], i));
          }return n;
        }function h(t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        }function c(t, e) {
          for (var i in e) {
            h(e, i) && (t[i] = e[i]);
          }return h(e, "toString") && (t.toString = e.toString), h(e, "valueOf") && (t.valueOf = e.valueOf), t;
        }function f(t, e, i, n) {
          return Pe(t, e, i, n, !0).utc();
        }function g(t) {
          return null == t._pf && (t._pf = { empty: !1, unusedTokens: [], unusedInput: [], overflow: -2, charsLeftOver: 0, nullInput: !1, invalidMonth: null, invalidFormat: !1, userInvalidated: !1, iso: !1, parsedDateParts: [], meridiem: null, rfc2822: !1, weekdayMismatch: !1 }), t._pf;
        }function m(t) {
          if (null == t._isValid) {
            var e = g(t),
                i = n.call(e.parsedDateParts, function (t) {
              return null != t;
            }),
                a = !isNaN(t._d.getTime()) && e.overflow < 0 && !e.empty && !e.invalidMonth && !e.invalidWeekday && !e.weekdayMismatch && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && i);if (t._strict && (a = a && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour), null != Object.isFrozen && Object.isFrozen(t)) return a;t._isValid = a;
          }return t._isValid;
        }function p(t) {
          var e = f(NaN);return null != t ? c(g(e), t) : g(e).userInvalidated = !0, e;
        }n = Array.prototype.some ? Array.prototype.some : function (t) {
          for (var e = Object(this), i = e.length >>> 0, n = 0; n < i; n++) {
            if (n in e && t.call(this, e[n], n, e)) return !0;
          }return !1;
        };var v = a.momentProperties = [];function y(t, e) {
          var i, n, a;if (s(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject), s(e._i) || (t._i = e._i), s(e._f) || (t._f = e._f), s(e._l) || (t._l = e._l), s(e._strict) || (t._strict = e._strict), s(e._tzm) || (t._tzm = e._tzm), s(e._isUTC) || (t._isUTC = e._isUTC), s(e._offset) || (t._offset = e._offset), s(e._pf) || (t._pf = g(e)), s(e._locale) || (t._locale = e._locale), v.length > 0) for (i = 0; i < v.length; i++) {
            s(a = e[n = v[i]]) || (t[n] = a);
          }return t;
        }var b = !1;function x(t) {
          y(this, t), this._d = new Date(null != t._d ? t._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === b && (b = !0, a.updateOffset(this), b = !1);
        }function _(t) {
          return t instanceof x || null != t && null != t._isAMomentObject;
        }function k(t) {
          return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
        }function w(t) {
          var e = +t,
              i = 0;return 0 !== e && isFinite(e) && (i = k(e)), i;
        }function M(t, e, i) {
          var n,
              a = Math.min(t.length, e.length),
              r = Math.abs(t.length - e.length),
              o = 0;for (n = 0; n < a; n++) {
            (i && t[n] !== e[n] || !i && w(t[n]) !== w(e[n])) && o++;
          }return o + r;
        }function S(t) {
          !1 === a.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + t);
        }function D(t, e) {
          var i = !0;return c(function () {
            if (null != a.deprecationHandler && a.deprecationHandler(null, t), i) {
              for (var n, r = [], o = 0; o < arguments.length; o++) {
                if (n = "", "object" == _typeof(arguments[o])) {
                  for (var s in n += "\n[" + o + "] ", arguments[0]) {
                    n += s + ": " + arguments[0][s] + ", ";
                  }n = n.slice(0, -2);
                } else n = arguments[o];r.push(n);
              }S(t + "\nArguments: " + Array.prototype.slice.call(r).join("") + "\n" + new Error().stack), i = !1;
            }return e.apply(this, arguments);
          }, e);
        }var C,
            P = {};function T(t, e) {
          null != a.deprecationHandler && a.deprecationHandler(t, e), P[t] || (S(e), P[t] = !0);
        }function O(t) {
          return t instanceof Function || "[object Function]" === Object.prototype.toString.call(t);
        }function I(t, e) {
          var i,
              n = c({}, t);for (i in e) {
            h(e, i) && (o(t[i]) && o(e[i]) ? (n[i] = {}, c(n[i], t[i]), c(n[i], e[i])) : null != e[i] ? n[i] = e[i] : delete n[i]);
          }for (i in t) {
            h(t, i) && !h(e, i) && o(t[i]) && (n[i] = c({}, n[i]));
          }return n;
        }function A(t) {
          null != t && this.set(t);
        }a.suppressDeprecationWarnings = !1, a.deprecationHandler = null, C = Object.keys ? Object.keys : function (t) {
          var e,
              i = [];for (e in t) {
            h(t, e) && i.push(e);
          }return i;
        };var F = {};function R(t, e) {
          var i = t.toLowerCase();F[i] = F[i + "s"] = F[e] = t;
        }function L(t) {
          return "string" == typeof t ? F[t] || F[t.toLowerCase()] : void 0;
        }function W(t) {
          var e,
              i,
              n = {};for (i in t) {
            h(t, i) && (e = L(i)) && (n[e] = t[i]);
          }return n;
        }var Y = {};function N(t, e) {
          Y[t] = e;
        }function z(t, e, i) {
          var n = "" + Math.abs(t),
              a = e - n.length;return (t >= 0 ? i ? "+" : "" : "-") + Math.pow(10, Math.max(0, a)).toString().substr(1) + n;
        }var H = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
            V = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
            B = {},
            E = {};function j(t, e, i, n) {
          var a = n;"string" == typeof n && (a = function a() {
            return this[n]();
          }), t && (E[t] = a), e && (E[e[0]] = function () {
            return z(a.apply(this, arguments), e[1], e[2]);
          }), i && (E[i] = function () {
            return this.localeData().ordinal(a.apply(this, arguments), t);
          });
        }function U(t, e) {
          return t.isValid() ? (e = q(e, t.localeData()), B[e] = B[e] || function (t) {
            var e,
                i,
                n,
                a = t.match(H);for (e = 0, i = a.length; e < i; e++) {
              E[a[e]] ? a[e] = E[a[e]] : a[e] = (n = a[e]).match(/\[[\s\S]/) ? n.replace(/^\[|\]$/g, "") : n.replace(/\\/g, "");
            }return function (e) {
              var n,
                  r = "";for (n = 0; n < i; n++) {
                r += O(a[n]) ? a[n].call(e, t) : a[n];
              }return r;
            };
          }(e), B[e](t)) : t.localeData().invalidDate();
        }function q(t, e) {
          var i = 5;function n(t) {
            return e.longDateFormat(t) || t;
          }for (V.lastIndex = 0; i >= 0 && V.test(t);) {
            t = t.replace(V, n), V.lastIndex = 0, i -= 1;
          }return t;
        }var G = /\d/,
            Z = /\d\d/,
            X = /\d{3}/,
            J = /\d{4}/,
            K = /[+-]?\d{6}/,
            $ = /\d\d?/,
            Q = /\d\d\d\d?/,
            tt = /\d\d\d\d\d\d?/,
            et = /\d{1,3}/,
            it = /\d{1,4}/,
            nt = /[+-]?\d{1,6}/,
            at = /\d+/,
            rt = /[+-]?\d+/,
            ot = /Z|[+-]\d\d:?\d\d/gi,
            st = /Z|[+-]\d\d(?::?\d\d)?/gi,
            lt = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
            ut = {};function dt(t, e, i) {
          ut[t] = O(e) ? e : function (t, n) {
            return t && i ? i : e;
          };
        }function ht(t, e) {
          return h(ut, t) ? ut[t](e._strict, e._locale) : new RegExp(ct(t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (t, e, i, n, a) {
            return e || i || n || a;
          })));
        }function ct(t) {
          return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
        }var ft = {};function gt(t, e) {
          var i,
              n = e;for ("string" == typeof t && (t = [t]), l(e) && (n = function n(t, i) {
            i[e] = w(t);
          }), i = 0; i < t.length; i++) {
            ft[t[i]] = n;
          }
        }function mt(t, e) {
          gt(t, function (t, i, n, a) {
            n._w = n._w || {}, e(t, n._w, n, a);
          });
        }var pt = 0,
            vt = 1,
            yt = 2,
            bt = 3,
            xt = 4,
            _t = 5,
            kt = 6,
            wt = 7,
            Mt = 8;function St(t) {
          return Dt(t) ? 366 : 365;
        }function Dt(t) {
          return t % 4 == 0 && t % 100 != 0 || t % 400 == 0;
        }j("Y", 0, 0, function () {
          var t = this.year();return t <= 9999 ? "" + t : "+" + t;
        }), j(0, ["YY", 2], 0, function () {
          return this.year() % 100;
        }), j(0, ["YYYY", 4], 0, "year"), j(0, ["YYYYY", 5], 0, "year"), j(0, ["YYYYYY", 6, !0], 0, "year"), R("year", "y"), N("year", 1), dt("Y", rt), dt("YY", $, Z), dt("YYYY", it, J), dt("YYYYY", nt, K), dt("YYYYYY", nt, K), gt(["YYYYY", "YYYYYY"], pt), gt("YYYY", function (t, e) {
          e[pt] = 2 === t.length ? a.parseTwoDigitYear(t) : w(t);
        }), gt("YY", function (t, e) {
          e[pt] = a.parseTwoDigitYear(t);
        }), gt("Y", function (t, e) {
          e[pt] = parseInt(t, 10);
        }), a.parseTwoDigitYear = function (t) {
          return w(t) + (w(t) > 68 ? 1900 : 2e3);
        };var Ct,
            Pt = Tt("FullYear", !0);function Tt(t, e) {
          return function (i) {
            return null != i ? (It(this, t, i), a.updateOffset(this, e), this) : Ot(this, t);
          };
        }function Ot(t, e) {
          return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN;
        }function It(t, e, i) {
          t.isValid() && !isNaN(i) && ("FullYear" === e && Dt(t.year()) && 1 === t.month() && 29 === t.date() ? t._d["set" + (t._isUTC ? "UTC" : "") + e](i, t.month(), At(i, t.month())) : t._d["set" + (t._isUTC ? "UTC" : "") + e](i));
        }function At(t, e) {
          if (isNaN(t) || isNaN(e)) return NaN;var i,
              n = (e % (i = 12) + i) % i;return t += (e - n) / 12, 1 === n ? Dt(t) ? 29 : 28 : 31 - n % 7 % 2;
        }Ct = Array.prototype.indexOf ? Array.prototype.indexOf : function (t) {
          var e;for (e = 0; e < this.length; ++e) {
            if (this[e] === t) return e;
          }return -1;
        }, j("M", ["MM", 2], "Mo", function () {
          return this.month() + 1;
        }), j("MMM", 0, 0, function (t) {
          return this.localeData().monthsShort(this, t);
        }), j("MMMM", 0, 0, function (t) {
          return this.localeData().months(this, t);
        }), R("month", "M"), N("month", 8), dt("M", $), dt("MM", $, Z), dt("MMM", function (t, e) {
          return e.monthsShortRegex(t);
        }), dt("MMMM", function (t, e) {
          return e.monthsRegex(t);
        }), gt(["M", "MM"], function (t, e) {
          e[vt] = w(t) - 1;
        }), gt(["MMM", "MMMM"], function (t, e, i, n) {
          var a = i._locale.monthsParse(t, n, i._strict);null != a ? e[vt] = a : g(i).invalidMonth = t;
        });var Ft = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
            Rt = "January_February_March_April_May_June_July_August_September_October_November_December".split("_");var Lt = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");function Wt(t, e) {
          var i;if (!t.isValid()) return t;if ("string" == typeof e) if (/^\d+$/.test(e)) e = w(e);else if (!l(e = t.localeData().monthsParse(e))) return t;return i = Math.min(t.date(), At(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, i), t;
        }function Yt(t) {
          return null != t ? (Wt(this, t), a.updateOffset(this, !0), this) : Ot(this, "Month");
        }var Nt = lt;var zt = lt;function Ht() {
          function t(t, e) {
            return e.length - t.length;
          }var e,
              i,
              n = [],
              a = [],
              r = [];for (e = 0; e < 12; e++) {
            i = f([2e3, e]), n.push(this.monthsShort(i, "")), a.push(this.months(i, "")), r.push(this.months(i, "")), r.push(this.monthsShort(i, ""));
          }for (n.sort(t), a.sort(t), r.sort(t), e = 0; e < 12; e++) {
            n[e] = ct(n[e]), a[e] = ct(a[e]);
          }for (e = 0; e < 24; e++) {
            r[e] = ct(r[e]);
          }this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + n.join("|") + ")", "i");
        }function Vt(t) {
          var e = new Date(Date.UTC.apply(null, arguments));return t < 100 && t >= 0 && isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t), e;
        }function Bt(t, e, i) {
          var n = 7 + e - i;return -((7 + Vt(t, 0, n).getUTCDay() - e) % 7) + n - 1;
        }function Et(t, e, i, n, a) {
          var r,
              o,
              s = 1 + 7 * (e - 1) + (7 + i - n) % 7 + Bt(t, n, a);return s <= 0 ? o = St(r = t - 1) + s : s > St(t) ? (r = t + 1, o = s - St(t)) : (r = t, o = s), { year: r, dayOfYear: o };
        }function jt(t, e, i) {
          var n,
              a,
              r = Bt(t.year(), e, i),
              o = Math.floor((t.dayOfYear() - r - 1) / 7) + 1;return o < 1 ? n = o + Ut(a = t.year() - 1, e, i) : o > Ut(t.year(), e, i) ? (n = o - Ut(t.year(), e, i), a = t.year() + 1) : (a = t.year(), n = o), { week: n, year: a };
        }function Ut(t, e, i) {
          var n = Bt(t, e, i),
              a = Bt(t + 1, e, i);return (St(t) - n + a) / 7;
        }j("w", ["ww", 2], "wo", "week"), j("W", ["WW", 2], "Wo", "isoWeek"), R("week", "w"), R("isoWeek", "W"), N("week", 5), N("isoWeek", 5), dt("w", $), dt("ww", $, Z), dt("W", $), dt("WW", $, Z), mt(["w", "ww", "W", "WW"], function (t, e, i, n) {
          e[n.substr(0, 1)] = w(t);
        });j("d", 0, "do", "day"), j("dd", 0, 0, function (t) {
          return this.localeData().weekdaysMin(this, t);
        }), j("ddd", 0, 0, function (t) {
          return this.localeData().weekdaysShort(this, t);
        }), j("dddd", 0, 0, function (t) {
          return this.localeData().weekdays(this, t);
        }), j("e", 0, 0, "weekday"), j("E", 0, 0, "isoWeekday"), R("day", "d"), R("weekday", "e"), R("isoWeekday", "E"), N("day", 11), N("weekday", 11), N("isoWeekday", 11), dt("d", $), dt("e", $), dt("E", $), dt("dd", function (t, e) {
          return e.weekdaysMinRegex(t);
        }), dt("ddd", function (t, e) {
          return e.weekdaysShortRegex(t);
        }), dt("dddd", function (t, e) {
          return e.weekdaysRegex(t);
        }), mt(["dd", "ddd", "dddd"], function (t, e, i, n) {
          var a = i._locale.weekdaysParse(t, n, i._strict);null != a ? e.d = a : g(i).invalidWeekday = t;
        }), mt(["d", "e", "E"], function (t, e, i, n) {
          e[n] = w(t);
        });var qt = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");var Gt = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");var Zt = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");var Xt = lt;var Jt = lt;var Kt = lt;function $t() {
          function t(t, e) {
            return e.length - t.length;
          }var e,
              i,
              n,
              a,
              r,
              o = [],
              s = [],
              l = [],
              u = [];for (e = 0; e < 7; e++) {
            i = f([2e3, 1]).day(e), n = this.weekdaysMin(i, ""), a = this.weekdaysShort(i, ""), r = this.weekdays(i, ""), o.push(n), s.push(a), l.push(r), u.push(n), u.push(a), u.push(r);
          }for (o.sort(t), s.sort(t), l.sort(t), u.sort(t), e = 0; e < 7; e++) {
            s[e] = ct(s[e]), l[e] = ct(l[e]), u[e] = ct(u[e]);
          }this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + o.join("|") + ")", "i");
        }function Qt() {
          return this.hours() % 12 || 12;
        }function te(t, e) {
          j(t, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), e);
          });
        }function ee(t, e) {
          return e._meridiemParse;
        }j("H", ["HH", 2], 0, "hour"), j("h", ["hh", 2], 0, Qt), j("k", ["kk", 2], 0, function () {
          return this.hours() || 24;
        }), j("hmm", 0, 0, function () {
          return "" + Qt.apply(this) + z(this.minutes(), 2);
        }), j("hmmss", 0, 0, function () {
          return "" + Qt.apply(this) + z(this.minutes(), 2) + z(this.seconds(), 2);
        }), j("Hmm", 0, 0, function () {
          return "" + this.hours() + z(this.minutes(), 2);
        }), j("Hmmss", 0, 0, function () {
          return "" + this.hours() + z(this.minutes(), 2) + z(this.seconds(), 2);
        }), te("a", !0), te("A", !1), R("hour", "h"), N("hour", 13), dt("a", ee), dt("A", ee), dt("H", $), dt("h", $), dt("k", $), dt("HH", $, Z), dt("hh", $, Z), dt("kk", $, Z), dt("hmm", Q), dt("hmmss", tt), dt("Hmm", Q), dt("Hmmss", tt), gt(["H", "HH"], bt), gt(["k", "kk"], function (t, e, i) {
          var n = w(t);e[bt] = 24 === n ? 0 : n;
        }), gt(["a", "A"], function (t, e, i) {
          i._isPm = i._locale.isPM(t), i._meridiem = t;
        }), gt(["h", "hh"], function (t, e, i) {
          e[bt] = w(t), g(i).bigHour = !0;
        }), gt("hmm", function (t, e, i) {
          var n = t.length - 2;e[bt] = w(t.substr(0, n)), e[xt] = w(t.substr(n)), g(i).bigHour = !0;
        }), gt("hmmss", function (t, e, i) {
          var n = t.length - 4,
              a = t.length - 2;e[bt] = w(t.substr(0, n)), e[xt] = w(t.substr(n, 2)), e[_t] = w(t.substr(a)), g(i).bigHour = !0;
        }), gt("Hmm", function (t, e, i) {
          var n = t.length - 2;e[bt] = w(t.substr(0, n)), e[xt] = w(t.substr(n));
        }), gt("Hmmss", function (t, e, i) {
          var n = t.length - 4,
              a = t.length - 2;e[bt] = w(t.substr(0, n)), e[xt] = w(t.substr(n, 2)), e[_t] = w(t.substr(a));
        });var ie,
            ne = Tt("Hours", !0),
            ae = { calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, longDateFormat: { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, invalidDate: "Invalid date", ordinal: "%d", dayOfMonthOrdinalParse: /\d{1,2}/, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, months: Rt, monthsShort: Lt, week: { dow: 0, doy: 6 }, weekdays: qt, weekdaysMin: Zt, weekdaysShort: Gt, meridiemParse: /[ap]\.?m?\.?/i },
            re = {},
            oe = {};function se(t) {
          return t ? t.toLowerCase().replace("_", "-") : t;
        }function le(i) {
          var n = null;if (!re[i] && void 0 !== e && e && e.exports) try {
            n = ie._abbr, t("./locale/" + i), ue(n);
          } catch (t) {}return re[i];
        }function ue(t, e) {
          var i;return t && (i = s(e) ? he(t) : de(t, e)) && (ie = i), ie._abbr;
        }function de(t, e) {
          if (null !== e) {
            var i = ae;if (e.abbr = t, null != re[t]) T("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), i = re[t]._config;else if (null != e.parentLocale) {
              if (null == re[e.parentLocale]) return oe[e.parentLocale] || (oe[e.parentLocale] = []), oe[e.parentLocale].push({ name: t, config: e }), null;i = re[e.parentLocale]._config;
            }return re[t] = new A(I(i, e)), oe[t] && oe[t].forEach(function (t) {
              de(t.name, t.config);
            }), ue(t), re[t];
          }return delete re[t], null;
        }function he(t) {
          var e;if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return ie;if (!r(t)) {
            if (e = le(t)) return e;t = [t];
          }return function (t) {
            for (var e, i, n, a, r = 0; r < t.length;) {
              for (e = (a = se(t[r]).split("-")).length, i = (i = se(t[r + 1])) ? i.split("-") : null; e > 0;) {
                if (n = le(a.slice(0, e).join("-"))) return n;if (i && i.length >= e && M(a, i, !0) >= e - 1) break;e--;
              }r++;
            }return null;
          }(t);
        }function ce(t) {
          var e,
              i = t._a;return i && -2 === g(t).overflow && (e = i[vt] < 0 || i[vt] > 11 ? vt : i[yt] < 1 || i[yt] > At(i[pt], i[vt]) ? yt : i[bt] < 0 || i[bt] > 24 || 24 === i[bt] && (0 !== i[xt] || 0 !== i[_t] || 0 !== i[kt]) ? bt : i[xt] < 0 || i[xt] > 59 ? xt : i[_t] < 0 || i[_t] > 59 ? _t : i[kt] < 0 || i[kt] > 999 ? kt : -1, g(t)._overflowDayOfYear && (e < pt || e > yt) && (e = yt), g(t)._overflowWeeks && -1 === e && (e = wt), g(t)._overflowWeekday && -1 === e && (e = Mt), g(t).overflow = e), t;
        }function fe(t, e, i) {
          return null != t ? t : null != e ? e : i;
        }function ge(t) {
          var e,
              i,
              n,
              r,
              o,
              s = [];if (!t._d) {
            var l, u;for (l = t, u = new Date(a.now()), n = l._useUTC ? [u.getUTCFullYear(), u.getUTCMonth(), u.getUTCDate()] : [u.getFullYear(), u.getMonth(), u.getDate()], t._w && null == t._a[yt] && null == t._a[vt] && function (t) {
              var e, i, n, a, r, o, s, l;if (null != (e = t._w).GG || null != e.W || null != e.E) r = 1, o = 4, i = fe(e.GG, t._a[pt], jt(Te(), 1, 4).year), n = fe(e.W, 1), ((a = fe(e.E, 1)) < 1 || a > 7) && (l = !0);else {
                r = t._locale._week.dow, o = t._locale._week.doy;var u = jt(Te(), r, o);i = fe(e.gg, t._a[pt], u.year), n = fe(e.w, u.week), null != e.d ? ((a = e.d) < 0 || a > 6) && (l = !0) : null != e.e ? (a = e.e + r, (e.e < 0 || e.e > 6) && (l = !0)) : a = r;
              }n < 1 || n > Ut(i, r, o) ? g(t)._overflowWeeks = !0 : null != l ? g(t)._overflowWeekday = !0 : (s = Et(i, n, a, r, o), t._a[pt] = s.year, t._dayOfYear = s.dayOfYear);
            }(t), null != t._dayOfYear && (o = fe(t._a[pt], n[pt]), (t._dayOfYear > St(o) || 0 === t._dayOfYear) && (g(t)._overflowDayOfYear = !0), i = Vt(o, 0, t._dayOfYear), t._a[vt] = i.getUTCMonth(), t._a[yt] = i.getUTCDate()), e = 0; e < 3 && null == t._a[e]; ++e) {
              t._a[e] = s[e] = n[e];
            }for (; e < 7; e++) {
              t._a[e] = s[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
            }24 === t._a[bt] && 0 === t._a[xt] && 0 === t._a[_t] && 0 === t._a[kt] && (t._nextDay = !0, t._a[bt] = 0), t._d = (t._useUTC ? Vt : function (t, e, i, n, a, r, o) {
              var s = new Date(t, e, i, n, a, r, o);return t < 100 && t >= 0 && isFinite(s.getFullYear()) && s.setFullYear(t), s;
            }).apply(null, s), r = t._useUTC ? t._d.getUTCDay() : t._d.getDay(), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), t._nextDay && (t._a[bt] = 24), t._w && void 0 !== t._w.d && t._w.d !== r && (g(t).weekdayMismatch = !0);
          }
        }var me = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            pe = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            ve = /Z|[+-]\d\d(?::?\d\d)?/,
            ye = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]],
            be = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]],
            xe = /^\/?Date\((\-?\d+)/i;function _e(t) {
          var e,
              i,
              n,
              a,
              r,
              o,
              s = t._i,
              l = me.exec(s) || pe.exec(s);if (l) {
            for (g(t).iso = !0, e = 0, i = ye.length; e < i; e++) {
              if (ye[e][1].exec(l[1])) {
                a = ye[e][0], n = !1 !== ye[e][2];break;
              }
            }if (null == a) return void (t._isValid = !1);if (l[3]) {
              for (e = 0, i = be.length; e < i; e++) {
                if (be[e][1].exec(l[3])) {
                  r = (l[2] || " ") + be[e][0];break;
                }
              }if (null == r) return void (t._isValid = !1);
            }if (!n && null != r) return void (t._isValid = !1);if (l[4]) {
              if (!ve.exec(l[4])) return void (t._isValid = !1);o = "Z";
            }t._f = a + (r || "") + (o || ""), De(t);
          } else t._isValid = !1;
        }var ke = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;function we(t, e, i, n, a, r) {
          var o = [function (t) {
            var e = parseInt(t, 10);{
              if (e <= 49) return 2e3 + e;if (e <= 999) return 1900 + e;
            }return e;
          }(t), Lt.indexOf(e), parseInt(i, 10), parseInt(n, 10), parseInt(a, 10)];return r && o.push(parseInt(r, 10)), o;
        }var Me = { UT: 0, GMT: 0, EDT: -240, EST: -300, CDT: -300, CST: -360, MDT: -360, MST: -420, PDT: -420, PST: -480 };function Se(t) {
          var e,
              i,
              n,
              a = ke.exec(t._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim());if (a) {
            var r = we(a[4], a[3], a[2], a[5], a[6], a[7]);if (e = a[1], i = r, n = t, e && Gt.indexOf(e) !== new Date(i[0], i[1], i[2]).getDay() && (g(n).weekdayMismatch = !0, n._isValid = !1, 1)) return;t._a = r, t._tzm = function (t, e, i) {
              if (t) return Me[t];if (e) return 0;var n = parseInt(i, 10),
                  a = n % 100;return (n - a) / 100 * 60 + a;
            }(a[8], a[9], a[10]), t._d = Vt.apply(null, t._a), t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), g(t).rfc2822 = !0;
          } else t._isValid = !1;
        }function De(t) {
          if (t._f !== a.ISO_8601) {
            if (t._f !== a.RFC_2822) {
              t._a = [], g(t).empty = !0;var e,
                  i,
                  n,
                  r,
                  o,
                  s,
                  l,
                  u,
                  d = "" + t._i,
                  c = d.length,
                  f = 0;for (n = q(t._f, t._locale).match(H) || [], e = 0; e < n.length; e++) {
                r = n[e], (i = (d.match(ht(r, t)) || [])[0]) && ((o = d.substr(0, d.indexOf(i))).length > 0 && g(t).unusedInput.push(o), d = d.slice(d.indexOf(i) + i.length), f += i.length), E[r] ? (i ? g(t).empty = !1 : g(t).unusedTokens.push(r), s = r, u = t, null != (l = i) && h(ft, s) && ft[s](l, u._a, u, s)) : t._strict && !i && g(t).unusedTokens.push(r);
              }g(t).charsLeftOver = c - f, d.length > 0 && g(t).unusedInput.push(d), t._a[bt] <= 12 && !0 === g(t).bigHour && t._a[bt] > 0 && (g(t).bigHour = void 0), g(t).parsedDateParts = t._a.slice(0), g(t).meridiem = t._meridiem, t._a[bt] = function (t, e, i) {
                var n;if (null == i) return e;return null != t.meridiemHour ? t.meridiemHour(e, i) : null != t.isPM ? ((n = t.isPM(i)) && e < 12 && (e += 12), n || 12 !== e || (e = 0), e) : e;
              }(t._locale, t._a[bt], t._meridiem), ge(t), ce(t);
            } else Se(t);
          } else _e(t);
        }function Ce(t) {
          var e,
              i,
              n,
              h,
              f = t._i,
              v = t._f;return t._locale = t._locale || he(t._l), null === f || void 0 === v && "" === f ? p({ nullInput: !0 }) : ("string" == typeof f && (t._i = f = t._locale.preparse(f)), _(f) ? new x(ce(f)) : (u(f) ? t._d = f : r(v) ? function (t) {
            var e, i, n, a, r;if (0 === t._f.length) return g(t).invalidFormat = !0, void (t._d = new Date(NaN));for (a = 0; a < t._f.length; a++) {
              r = 0, e = y({}, t), null != t._useUTC && (e._useUTC = t._useUTC), e._f = t._f[a], De(e), m(e) && (r += g(e).charsLeftOver, r += 10 * g(e).unusedTokens.length, g(e).score = r, (null == n || r < n) && (n = r, i = e));
            }c(t, i || e);
          }(t) : v ? De(t) : s(i = (e = t)._i) ? e._d = new Date(a.now()) : u(i) ? e._d = new Date(i.valueOf()) : "string" == typeof i ? (n = e, null === (h = xe.exec(n._i)) ? (_e(n), !1 === n._isValid && (delete n._isValid, Se(n), !1 === n._isValid && (delete n._isValid, a.createFromInputFallback(n)))) : n._d = new Date(+h[1])) : r(i) ? (e._a = d(i.slice(0), function (t) {
            return parseInt(t, 10);
          }), ge(e)) : o(i) ? function (t) {
            if (!t._d) {
              var e = W(t._i);t._a = d([e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond], function (t) {
                return t && parseInt(t, 10);
              }), ge(t);
            }
          }(e) : l(i) ? e._d = new Date(i) : a.createFromInputFallback(e), m(t) || (t._d = null), t));
        }function Pe(t, e, i, n, a) {
          var s,
              l = {};return !0 !== i && !1 !== i || (n = i, i = void 0), (o(t) && function (t) {
            if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(t).length;var e;for (e in t) {
              if (t.hasOwnProperty(e)) return !1;
            }return !0;
          }(t) || r(t) && 0 === t.length) && (t = void 0), l._isAMomentObject = !0, l._useUTC = l._isUTC = a, l._l = i, l._i = t, l._f = e, l._strict = n, (s = new x(ce(Ce(l))))._nextDay && (s.add(1, "d"), s._nextDay = void 0), s;
        }function Te(t, e, i, n) {
          return Pe(t, e, i, n, !1);
        }a.createFromInputFallback = D("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (t) {
          t._d = new Date(t._i + (t._useUTC ? " UTC" : ""));
        }), a.ISO_8601 = function () {}, a.RFC_2822 = function () {};var Oe = D("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
          var t = Te.apply(null, arguments);return this.isValid() && t.isValid() ? t < this ? this : t : p();
        }),
            Ie = D("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
          var t = Te.apply(null, arguments);return this.isValid() && t.isValid() ? t > this ? this : t : p();
        });function Ae(t, e) {
          var i, n;if (1 === e.length && r(e[0]) && (e = e[0]), !e.length) return Te();for (i = e[0], n = 1; n < e.length; ++n) {
            e[n].isValid() && !e[n][t](i) || (i = e[n]);
          }return i;
        }var Fe = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];function Re(t) {
          var e = W(t),
              i = e.year || 0,
              n = e.quarter || 0,
              a = e.month || 0,
              r = e.week || 0,
              o = e.day || 0,
              s = e.hour || 0,
              l = e.minute || 0,
              u = e.second || 0,
              d = e.millisecond || 0;this._isValid = function (t) {
            for (var e in t) {
              if (-1 === Ct.call(Fe, e) || null != t[e] && isNaN(t[e])) return !1;
            }for (var i = !1, n = 0; n < Fe.length; ++n) {
              if (t[Fe[n]]) {
                if (i) return !1;parseFloat(t[Fe[n]]) !== w(t[Fe[n]]) && (i = !0);
              }
            }return !0;
          }(e), this._milliseconds = +d + 1e3 * u + 6e4 * l + 1e3 * s * 60 * 60, this._days = +o + 7 * r, this._months = +a + 3 * n + 12 * i, this._data = {}, this._locale = he(), this._bubble();
        }function Le(t) {
          return t instanceof Re;
        }function We(t) {
          return t < 0 ? -1 * Math.round(-1 * t) : Math.round(t);
        }function Ye(t, e) {
          j(t, 0, 0, function () {
            var t = this.utcOffset(),
                i = "+";return t < 0 && (t = -t, i = "-"), i + z(~~(t / 60), 2) + e + z(~~t % 60, 2);
          });
        }Ye("Z", ":"), Ye("ZZ", ""), dt("Z", st), dt("ZZ", st), gt(["Z", "ZZ"], function (t, e, i) {
          i._useUTC = !0, i._tzm = ze(st, t);
        });var Ne = /([\+\-]|\d\d)/gi;function ze(t, e) {
          var i = (e || "").match(t);if (null === i) return null;var n = ((i[i.length - 1] || []) + "").match(Ne) || ["-", 0, 0],
              a = 60 * n[1] + w(n[2]);return 0 === a ? 0 : "+" === n[0] ? a : -a;
        }function He(t, e) {
          var i, n;return e._isUTC ? (i = e.clone(), n = (_(t) || u(t) ? t.valueOf() : Te(t).valueOf()) - i.valueOf(), i._d.setTime(i._d.valueOf() + n), a.updateOffset(i, !1), i) : Te(t).local();
        }function Ve(t) {
          return 15 * -Math.round(t._d.getTimezoneOffset() / 15);
        }function Be() {
          return !!this.isValid() && this._isUTC && 0 === this._offset;
        }a.updateOffset = function () {};var Ee = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
            je = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function Ue(t, e) {
          var i,
              n,
              a,
              r = t,
              o = null;return Le(t) ? r = { ms: t._milliseconds, d: t._days, M: t._months } : l(t) ? (r = {}, e ? r[e] = t : r.milliseconds = t) : (o = Ee.exec(t)) ? (i = "-" === o[1] ? -1 : 1, r = { y: 0, d: w(o[yt]) * i, h: w(o[bt]) * i, m: w(o[xt]) * i, s: w(o[_t]) * i, ms: w(We(1e3 * o[kt])) * i }) : (o = je.exec(t)) ? (i = "-" === o[1] ? -1 : (o[1], 1), r = { y: qe(o[2], i), M: qe(o[3], i), w: qe(o[4], i), d: qe(o[5], i), h: qe(o[6], i), m: qe(o[7], i), s: qe(o[8], i) }) : null == r ? r = {} : "object" == (typeof r === "undefined" ? "undefined" : _typeof(r)) && ("from" in r || "to" in r) && (a = function (t, e) {
            var i;if (!t.isValid() || !e.isValid()) return { milliseconds: 0, months: 0 };e = He(e, t), t.isBefore(e) ? i = Ge(t, e) : ((i = Ge(e, t)).milliseconds = -i.milliseconds, i.months = -i.months);return i;
          }(Te(r.from), Te(r.to)), (r = {}).ms = a.milliseconds, r.M = a.months), n = new Re(r), Le(t) && h(t, "_locale") && (n._locale = t._locale), n;
        }function qe(t, e) {
          var i = t && parseFloat(t.replace(",", "."));return (isNaN(i) ? 0 : i) * e;
        }function Ge(t, e) {
          var i = { milliseconds: 0, months: 0 };return i.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(i.months, "M").isAfter(e) && --i.months, i.milliseconds = +e - +t.clone().add(i.months, "M"), i;
        }function Ze(t, e) {
          return function (i, n) {
            var a;return null === n || isNaN(+n) || (T(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), a = i, i = n, n = a), Xe(this, Ue(i = "string" == typeof i ? +i : i, n), t), this;
          };
        }function Xe(t, e, i, n) {
          var r = e._milliseconds,
              o = We(e._days),
              s = We(e._months);t.isValid() && (n = null == n || n, s && Wt(t, Ot(t, "Month") + s * i), o && It(t, "Date", Ot(t, "Date") + o * i), r && t._d.setTime(t._d.valueOf() + r * i), n && a.updateOffset(t, o || s));
        }Ue.fn = Re.prototype, Ue.invalid = function () {
          return Ue(NaN);
        };var Je = Ze(1, "add"),
            Ke = Ze(-1, "subtract");function $e(t, e) {
          var i = 12 * (e.year() - t.year()) + (e.month() - t.month()),
              n = t.clone().add(i, "months");return -(i + (e - n < 0 ? (e - n) / (n - t.clone().add(i - 1, "months")) : (e - n) / (t.clone().add(i + 1, "months") - n))) || 0;
        }function Qe(t) {
          var e;return void 0 === t ? this._locale._abbr : (null != (e = he(t)) && (this._locale = e), this);
        }a.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", a.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";var ti = D("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (t) {
          return void 0 === t ? this.localeData() : this.locale(t);
        });function ei() {
          return this._locale;
        }function ii(t, e) {
          j(0, [t, t.length], 0, e);
        }function ni(t, e, i, n, a) {
          var r;return null == t ? jt(this, n, a).year : (e > (r = Ut(t, n, a)) && (e = r), function (t, e, i, n, a) {
            var r = Et(t, e, i, n, a),
                o = Vt(r.year, 0, r.dayOfYear);return this.year(o.getUTCFullYear()), this.month(o.getUTCMonth()), this.date(o.getUTCDate()), this;
          }.call(this, t, e, i, n, a));
        }j(0, ["gg", 2], 0, function () {
          return this.weekYear() % 100;
        }), j(0, ["GG", 2], 0, function () {
          return this.isoWeekYear() % 100;
        }), ii("gggg", "weekYear"), ii("ggggg", "weekYear"), ii("GGGG", "isoWeekYear"), ii("GGGGG", "isoWeekYear"), R("weekYear", "gg"), R("isoWeekYear", "GG"), N("weekYear", 1), N("isoWeekYear", 1), dt("G", rt), dt("g", rt), dt("GG", $, Z), dt("gg", $, Z), dt("GGGG", it, J), dt("gggg", it, J), dt("GGGGG", nt, K), dt("ggggg", nt, K), mt(["gggg", "ggggg", "GGGG", "GGGGG"], function (t, e, i, n) {
          e[n.substr(0, 2)] = w(t);
        }), mt(["gg", "GG"], function (t, e, i, n) {
          e[n] = a.parseTwoDigitYear(t);
        }), j("Q", 0, "Qo", "quarter"), R("quarter", "Q"), N("quarter", 7), dt("Q", G), gt("Q", function (t, e) {
          e[vt] = 3 * (w(t) - 1);
        }), j("D", ["DD", 2], "Do", "date"), R("date", "D"), N("date", 9), dt("D", $), dt("DD", $, Z), dt("Do", function (t, e) {
          return t ? e._dayOfMonthOrdinalParse || e._ordinalParse : e._dayOfMonthOrdinalParseLenient;
        }), gt(["D", "DD"], yt), gt("Do", function (t, e) {
          e[yt] = w(t.match($)[0]);
        });var ai = Tt("Date", !0);j("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), R("dayOfYear", "DDD"), N("dayOfYear", 4), dt("DDD", et), dt("DDDD", X), gt(["DDD", "DDDD"], function (t, e, i) {
          i._dayOfYear = w(t);
        }), j("m", ["mm", 2], 0, "minute"), R("minute", "m"), N("minute", 14), dt("m", $), dt("mm", $, Z), gt(["m", "mm"], xt);var ri = Tt("Minutes", !1);j("s", ["ss", 2], 0, "second"), R("second", "s"), N("second", 15), dt("s", $), dt("ss", $, Z), gt(["s", "ss"], _t);var oi,
            si = Tt("Seconds", !1);for (j("S", 0, 0, function () {
          return ~~(this.millisecond() / 100);
        }), j(0, ["SS", 2], 0, function () {
          return ~~(this.millisecond() / 10);
        }), j(0, ["SSS", 3], 0, "millisecond"), j(0, ["SSSS", 4], 0, function () {
          return 10 * this.millisecond();
        }), j(0, ["SSSSS", 5], 0, function () {
          return 100 * this.millisecond();
        }), j(0, ["SSSSSS", 6], 0, function () {
          return 1e3 * this.millisecond();
        }), j(0, ["SSSSSSS", 7], 0, function () {
          return 1e4 * this.millisecond();
        }), j(0, ["SSSSSSSS", 8], 0, function () {
          return 1e5 * this.millisecond();
        }), j(0, ["SSSSSSSSS", 9], 0, function () {
          return 1e6 * this.millisecond();
        }), R("millisecond", "ms"), N("millisecond", 16), dt("S", et, G), dt("SS", et, Z), dt("SSS", et, X), oi = "SSSS"; oi.length <= 9; oi += "S") {
          dt(oi, at);
        }function li(t, e) {
          e[kt] = w(1e3 * ("0." + t));
        }for (oi = "S"; oi.length <= 9; oi += "S") {
          gt(oi, li);
        }var ui = Tt("Milliseconds", !1);j("z", 0, 0, "zoneAbbr"), j("zz", 0, 0, "zoneName");var di = x.prototype;function hi(t) {
          return t;
        }di.add = Je, di.calendar = function (t, e) {
          var i = t || Te(),
              n = He(i, this).startOf("day"),
              r = a.calendarFormat(this, n) || "sameElse",
              o = e && (O(e[r]) ? e[r].call(this, i) : e[r]);return this.format(o || this.localeData().calendar(r, this, Te(i)));
        }, di.clone = function () {
          return new x(this);
        }, di.diff = function (t, e, i) {
          var n, a, r;if (!this.isValid()) return NaN;if (!(n = He(t, this)).isValid()) return NaN;switch (a = 6e4 * (n.utcOffset() - this.utcOffset()), e = L(e)) {case "year":
              r = $e(this, n) / 12;break;case "month":
              r = $e(this, n);break;case "quarter":
              r = $e(this, n) / 3;break;case "second":
              r = (this - n) / 1e3;break;case "minute":
              r = (this - n) / 6e4;break;case "hour":
              r = (this - n) / 36e5;break;case "day":
              r = (this - n - a) / 864e5;break;case "week":
              r = (this - n - a) / 6048e5;break;default:
              r = this - n;}return i ? r : k(r);
        }, di.endOf = function (t) {
          return void 0 === (t = L(t)) || "millisecond" === t ? this : ("date" === t && (t = "day"), this.startOf(t).add(1, "isoWeek" === t ? "week" : t).subtract(1, "ms"));
        }, di.format = function (t) {
          t || (t = this.isUtc() ? a.defaultFormatUtc : a.defaultFormat);var e = U(this, t);return this.localeData().postformat(e);
        }, di.from = function (t, e) {
          return this.isValid() && (_(t) && t.isValid() || Te(t).isValid()) ? Ue({ to: this, from: t }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate();
        }, di.fromNow = function (t) {
          return this.from(Te(), t);
        }, di.to = function (t, e) {
          return this.isValid() && (_(t) && t.isValid() || Te(t).isValid()) ? Ue({ from: this, to: t }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate();
        }, di.toNow = function (t) {
          return this.to(Te(), t);
        }, di.get = function (t) {
          return O(this[t = L(t)]) ? this[t]() : this;
        }, di.invalidAt = function () {
          return g(this).overflow;
        }, di.isAfter = function (t, e) {
          var i = _(t) ? t : Te(t);return !(!this.isValid() || !i.isValid()) && ("millisecond" === (e = L(s(e) ? "millisecond" : e)) ? this.valueOf() > i.valueOf() : i.valueOf() < this.clone().startOf(e).valueOf());
        }, di.isBefore = function (t, e) {
          var i = _(t) ? t : Te(t);return !(!this.isValid() || !i.isValid()) && ("millisecond" === (e = L(s(e) ? "millisecond" : e)) ? this.valueOf() < i.valueOf() : this.clone().endOf(e).valueOf() < i.valueOf());
        }, di.isBetween = function (t, e, i, n) {
          return ("(" === (n = n || "()")[0] ? this.isAfter(t, i) : !this.isBefore(t, i)) && (")" === n[1] ? this.isBefore(e, i) : !this.isAfter(e, i));
        }, di.isSame = function (t, e) {
          var i,
              n = _(t) ? t : Te(t);return !(!this.isValid() || !n.isValid()) && ("millisecond" === (e = L(e || "millisecond")) ? this.valueOf() === n.valueOf() : (i = n.valueOf(), this.clone().startOf(e).valueOf() <= i && i <= this.clone().endOf(e).valueOf()));
        }, di.isSameOrAfter = function (t, e) {
          return this.isSame(t, e) || this.isAfter(t, e);
        }, di.isSameOrBefore = function (t, e) {
          return this.isSame(t, e) || this.isBefore(t, e);
        }, di.isValid = function () {
          return m(this);
        }, di.lang = ti, di.locale = Qe, di.localeData = ei, di.max = Ie, di.min = Oe, di.parsingFlags = function () {
          return c({}, g(this));
        }, di.set = function (t, e) {
          if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t))) for (var i = function (t) {
            var e = [];for (var i in t) {
              e.push({ unit: i, priority: Y[i] });
            }return e.sort(function (t, e) {
              return t.priority - e.priority;
            }), e;
          }(t = W(t)), n = 0; n < i.length; n++) {
            this[i[n].unit](t[i[n].unit]);
          } else if (O(this[t = L(t)])) return this[t](e);return this;
        }, di.startOf = function (t) {
          switch (t = L(t)) {case "year":
              this.month(0);case "quarter":case "month":
              this.date(1);case "week":case "isoWeek":case "day":case "date":
              this.hours(0);case "hour":
              this.minutes(0);case "minute":
              this.seconds(0);case "second":
              this.milliseconds(0);}return "week" === t && this.weekday(0), "isoWeek" === t && this.isoWeekday(1), "quarter" === t && this.month(3 * Math.floor(this.month() / 3)), this;
        }, di.subtract = Ke, di.toArray = function () {
          var t = this;return [t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second(), t.millisecond()];
        }, di.toObject = function () {
          var t = this;return { years: t.year(), months: t.month(), date: t.date(), hours: t.hours(), minutes: t.minutes(), seconds: t.seconds(), milliseconds: t.milliseconds() };
        }, di.toDate = function () {
          return new Date(this.valueOf());
        }, di.toISOString = function (t) {
          if (!this.isValid()) return null;var e = !0 !== t,
              i = e ? this.clone().utc() : this;return i.year() < 0 || i.year() > 9999 ? U(i, e ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : O(Date.prototype.toISOString) ? e ? this.toDate().toISOString() : new Date(this._d.valueOf()).toISOString().replace("Z", U(i, "Z")) : U(i, e ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ");
        }, di.inspect = function () {
          if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";var t = "moment",
              e = "";this.isLocal() || (t = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", e = "Z");var i = "[" + t + '("]',
              n = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
              a = e + '[")]';return this.format(i + n + "-MM-DD[T]HH:mm:ss.SSS" + a);
        }, di.toJSON = function () {
          return this.isValid() ? this.toISOString() : null;
        }, di.toString = function () {
          return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
        }, di.unix = function () {
          return Math.floor(this.valueOf() / 1e3);
        }, di.valueOf = function () {
          return this._d.valueOf() - 6e4 * (this._offset || 0);
        }, di.creationData = function () {
          return { input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict };
        }, di.year = Pt, di.isLeapYear = function () {
          return Dt(this.year());
        }, di.weekYear = function (t) {
          return ni.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
        }, di.isoWeekYear = function (t) {
          return ni.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4);
        }, di.quarter = di.quarters = function (t) {
          return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3);
        }, di.month = Yt, di.daysInMonth = function () {
          return At(this.year(), this.month());
        }, di.week = di.weeks = function (t) {
          var e = this.localeData().week(this);return null == t ? e : this.add(7 * (t - e), "d");
        }, di.isoWeek = di.isoWeeks = function (t) {
          var e = jt(this, 1, 4).week;return null == t ? e : this.add(7 * (t - e), "d");
        }, di.weeksInYear = function () {
          var t = this.localeData()._week;return Ut(this.year(), t.dow, t.doy);
        }, di.isoWeeksInYear = function () {
          return Ut(this.year(), 1, 4);
        }, di.date = ai, di.day = di.days = function (t) {
          if (!this.isValid()) return null != t ? this : NaN;var e,
              i,
              n = this._isUTC ? this._d.getUTCDay() : this._d.getDay();return null != t ? (e = t, i = this.localeData(), t = "string" != typeof e ? e : isNaN(e) ? "number" == typeof (e = i.weekdaysParse(e)) ? e : null : parseInt(e, 10), this.add(t - n, "d")) : n;
        }, di.weekday = function (t) {
          if (!this.isValid()) return null != t ? this : NaN;var e = (this.day() + 7 - this.localeData()._week.dow) % 7;return null == t ? e : this.add(t - e, "d");
        }, di.isoWeekday = function (t) {
          if (!this.isValid()) return null != t ? this : NaN;if (null != t) {
            var e = (i = t, n = this.localeData(), "string" == typeof i ? n.weekdaysParse(i) % 7 || 7 : isNaN(i) ? null : i);return this.day(this.day() % 7 ? e : e - 7);
          }return this.day() || 7;var i, n;
        }, di.dayOfYear = function (t) {
          var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;return null == t ? e : this.add(t - e, "d");
        }, di.hour = di.hours = ne, di.minute = di.minutes = ri, di.second = di.seconds = si, di.millisecond = di.milliseconds = ui, di.utcOffset = function (t, e, i) {
          var n,
              r = this._offset || 0;if (!this.isValid()) return null != t ? this : NaN;if (null != t) {
            if ("string" == typeof t) {
              if (null === (t = ze(st, t))) return this;
            } else Math.abs(t) < 16 && !i && (t *= 60);return !this._isUTC && e && (n = Ve(this)), this._offset = t, this._isUTC = !0, null != n && this.add(n, "m"), r !== t && (!e || this._changeInProgress ? Xe(this, Ue(t - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, a.updateOffset(this, !0), this._changeInProgress = null)), this;
          }return this._isUTC ? r : Ve(this);
        }, di.utc = function (t) {
          return this.utcOffset(0, t);
        }, di.local = function (t) {
          return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(Ve(this), "m")), this;
        }, di.parseZone = function () {
          if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);else if ("string" == typeof this._i) {
            var t = ze(ot, this._i);null != t ? this.utcOffset(t) : this.utcOffset(0, !0);
          }return this;
        }, di.hasAlignedHourOffset = function (t) {
          return !!this.isValid() && (t = t ? Te(t).utcOffset() : 0, (this.utcOffset() - t) % 60 == 0);
        }, di.isDST = function () {
          return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
        }, di.isLocal = function () {
          return !!this.isValid() && !this._isUTC;
        }, di.isUtcOffset = function () {
          return !!this.isValid() && this._isUTC;
        }, di.isUtc = Be, di.isUTC = Be, di.zoneAbbr = function () {
          return this._isUTC ? "UTC" : "";
        }, di.zoneName = function () {
          return this._isUTC ? "Coordinated Universal Time" : "";
        }, di.dates = D("dates accessor is deprecated. Use date instead.", ai), di.months = D("months accessor is deprecated. Use month instead", Yt), di.years = D("years accessor is deprecated. Use year instead", Pt), di.zone = D("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function (t, e) {
          return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset();
        }), di.isDSTShifted = D("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function () {
          if (!s(this._isDSTShifted)) return this._isDSTShifted;var t = {};if (y(t, this), (t = Ce(t))._a) {
            var e = t._isUTC ? f(t._a) : Te(t._a);this._isDSTShifted = this.isValid() && M(t._a, e.toArray()) > 0;
          } else this._isDSTShifted = !1;return this._isDSTShifted;
        });var ci = A.prototype;function fi(t, e, i, n) {
          var a = he(),
              r = f().set(n, e);return a[i](r, t);
        }function gi(t, e, i) {
          if (l(t) && (e = t, t = void 0), t = t || "", null != e) return fi(t, e, i, "month");var n,
              a = [];for (n = 0; n < 12; n++) {
            a[n] = fi(t, n, i, "month");
          }return a;
        }function mi(t, e, i, n) {
          "boolean" == typeof t ? (l(e) && (i = e, e = void 0), e = e || "") : (i = e = t, t = !1, l(e) && (i = e, e = void 0), e = e || "");var a,
              r = he(),
              o = t ? r._week.dow : 0;if (null != i) return fi(e, (i + o) % 7, n, "day");var s = [];for (a = 0; a < 7; a++) {
            s[a] = fi(e, (a + o) % 7, n, "day");
          }return s;
        }ci.calendar = function (t, e, i) {
          var n = this._calendar[t] || this._calendar.sameElse;return O(n) ? n.call(e, i) : n;
        }, ci.longDateFormat = function (t) {
          var e = this._longDateFormat[t],
              i = this._longDateFormat[t.toUpperCase()];return e || !i ? e : (this._longDateFormat[t] = i.replace(/MMMM|MM|DD|dddd/g, function (t) {
            return t.slice(1);
          }), this._longDateFormat[t]);
        }, ci.invalidDate = function () {
          return this._invalidDate;
        }, ci.ordinal = function (t) {
          return this._ordinal.replace("%d", t);
        }, ci.preparse = hi, ci.postformat = hi, ci.relativeTime = function (t, e, i, n) {
          var a = this._relativeTime[i];return O(a) ? a(t, e, i, n) : a.replace(/%d/i, t);
        }, ci.pastFuture = function (t, e) {
          var i = this._relativeTime[t > 0 ? "future" : "past"];return O(i) ? i(e) : i.replace(/%s/i, e);
        }, ci.set = function (t) {
          var e, i;for (i in t) {
            O(e = t[i]) ? this[i] = e : this["_" + i] = e;
          }this._config = t, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source);
        }, ci.months = function (t, e) {
          return t ? r(this._months) ? this._months[t.month()] : this._months[(this._months.isFormat || Ft).test(e) ? "format" : "standalone"][t.month()] : r(this._months) ? this._months : this._months.standalone;
        }, ci.monthsShort = function (t, e) {
          return t ? r(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[Ft.test(e) ? "format" : "standalone"][t.month()] : r(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
        }, ci.monthsParse = function (t, e, i) {
          var n, a, r;if (this._monthsParseExact) return function (t, e, i) {
            var n,
                a,
                r,
                o = t.toLocaleLowerCase();if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0; n < 12; ++n) {
              r = f([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(r, "").toLocaleLowerCase(), this._longMonthsParse[n] = this.months(r, "").toLocaleLowerCase();
            }return i ? "MMM" === e ? -1 !== (a = Ct.call(this._shortMonthsParse, o)) ? a : null : -1 !== (a = Ct.call(this._longMonthsParse, o)) ? a : null : "MMM" === e ? -1 !== (a = Ct.call(this._shortMonthsParse, o)) ? a : -1 !== (a = Ct.call(this._longMonthsParse, o)) ? a : null : -1 !== (a = Ct.call(this._longMonthsParse, o)) ? a : -1 !== (a = Ct.call(this._shortMonthsParse, o)) ? a : null;
          }.call(this, t, e, i);for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; n < 12; n++) {
            if (a = f([2e3, n]), i && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp("^" + this.months(a, "").replace(".", "") + "$", "i"), this._shortMonthsParse[n] = new RegExp("^" + this.monthsShort(a, "").replace(".", "") + "$", "i")), i || this._monthsParse[n] || (r = "^" + this.months(a, "") + "|^" + this.monthsShort(a, ""), this._monthsParse[n] = new RegExp(r.replace(".", ""), "i")), i && "MMMM" === e && this._longMonthsParse[n].test(t)) return n;if (i && "MMM" === e && this._shortMonthsParse[n].test(t)) return n;if (!i && this._monthsParse[n].test(t)) return n;
          }
        }, ci.monthsRegex = function (t) {
          return this._monthsParseExact ? (h(this, "_monthsRegex") || Ht.call(this), t ? this._monthsStrictRegex : this._monthsRegex) : (h(this, "_monthsRegex") || (this._monthsRegex = zt), this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex);
        }, ci.monthsShortRegex = function (t) {
          return this._monthsParseExact ? (h(this, "_monthsRegex") || Ht.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex) : (h(this, "_monthsShortRegex") || (this._monthsShortRegex = Nt), this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex);
        }, ci.week = function (t) {
          return jt(t, this._week.dow, this._week.doy).week;
        }, ci.firstDayOfYear = function () {
          return this._week.doy;
        }, ci.firstDayOfWeek = function () {
          return this._week.dow;
        }, ci.weekdays = function (t, e) {
          return t ? r(this._weekdays) ? this._weekdays[t.day()] : this._weekdays[this._weekdays.isFormat.test(e) ? "format" : "standalone"][t.day()] : r(this._weekdays) ? this._weekdays : this._weekdays.standalone;
        }, ci.weekdaysMin = function (t) {
          return t ? this._weekdaysMin[t.day()] : this._weekdaysMin;
        }, ci.weekdaysShort = function (t) {
          return t ? this._weekdaysShort[t.day()] : this._weekdaysShort;
        }, ci.weekdaysParse = function (t, e, i) {
          var n, a, r;if (this._weekdaysParseExact) return function (t, e, i) {
            var n,
                a,
                r,
                o = t.toLocaleLowerCase();if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], n = 0; n < 7; ++n) {
              r = f([2e3, 1]).day(n), this._minWeekdaysParse[n] = this.weekdaysMin(r, "").toLocaleLowerCase(), this._shortWeekdaysParse[n] = this.weekdaysShort(r, "").toLocaleLowerCase(), this._weekdaysParse[n] = this.weekdays(r, "").toLocaleLowerCase();
            }return i ? "dddd" === e ? -1 !== (a = Ct.call(this._weekdaysParse, o)) ? a : null : "ddd" === e ? -1 !== (a = Ct.call(this._shortWeekdaysParse, o)) ? a : null : -1 !== (a = Ct.call(this._minWeekdaysParse, o)) ? a : null : "dddd" === e ? -1 !== (a = Ct.call(this._weekdaysParse, o)) ? a : -1 !== (a = Ct.call(this._shortWeekdaysParse, o)) ? a : -1 !== (a = Ct.call(this._minWeekdaysParse, o)) ? a : null : "ddd" === e ? -1 !== (a = Ct.call(this._shortWeekdaysParse, o)) ? a : -1 !== (a = Ct.call(this._weekdaysParse, o)) ? a : -1 !== (a = Ct.call(this._minWeekdaysParse, o)) ? a : null : -1 !== (a = Ct.call(this._minWeekdaysParse, o)) ? a : -1 !== (a = Ct.call(this._weekdaysParse, o)) ? a : -1 !== (a = Ct.call(this._shortWeekdaysParse, o)) ? a : null;
          }.call(this, t, e, i);for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), n = 0; n < 7; n++) {
            if (a = f([2e3, 1]).day(n), i && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp("^" + this.weekdays(a, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[n] = new RegExp("^" + this.weekdaysShort(a, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[n] = new RegExp("^" + this.weekdaysMin(a, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[n] || (r = "^" + this.weekdays(a, "") + "|^" + this.weekdaysShort(a, "") + "|^" + this.weekdaysMin(a, ""), this._weekdaysParse[n] = new RegExp(r.replace(".", ""), "i")), i && "dddd" === e && this._fullWeekdaysParse[n].test(t)) return n;if (i && "ddd" === e && this._shortWeekdaysParse[n].test(t)) return n;if (i && "dd" === e && this._minWeekdaysParse[n].test(t)) return n;if (!i && this._weekdaysParse[n].test(t)) return n;
          }
        }, ci.weekdaysRegex = function (t) {
          return this._weekdaysParseExact ? (h(this, "_weekdaysRegex") || $t.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex) : (h(this, "_weekdaysRegex") || (this._weekdaysRegex = Xt), this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex);
        }, ci.weekdaysShortRegex = function (t) {
          return this._weekdaysParseExact ? (h(this, "_weekdaysRegex") || $t.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (h(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Jt), this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
        }, ci.weekdaysMinRegex = function (t) {
          return this._weekdaysParseExact ? (h(this, "_weekdaysRegex") || $t.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (h(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Kt), this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
        }, ci.isPM = function (t) {
          return "p" === (t + "").toLowerCase().charAt(0);
        }, ci.meridiem = function (t, e, i) {
          return t > 11 ? i ? "pm" : "PM" : i ? "am" : "AM";
        }, ue("en", { dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function ordinal(t) {
            var e = t % 10;return t + (1 === w(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th");
          } }), a.lang = D("moment.lang is deprecated. Use moment.locale instead.", ue), a.langData = D("moment.langData is deprecated. Use moment.localeData instead.", he);var pi = Math.abs;function vi(t, e, i, n) {
          var a = Ue(e, i);return t._milliseconds += n * a._milliseconds, t._days += n * a._days, t._months += n * a._months, t._bubble();
        }function yi(t) {
          return t < 0 ? Math.floor(t) : Math.ceil(t);
        }function bi(t) {
          return 4800 * t / 146097;
        }function xi(t) {
          return 146097 * t / 4800;
        }function _i(t) {
          return function () {
            return this.as(t);
          };
        }var ki = _i("ms"),
            wi = _i("s"),
            Mi = _i("m"),
            Si = _i("h"),
            Di = _i("d"),
            Ci = _i("w"),
            Pi = _i("M"),
            Ti = _i("y");function Oi(t) {
          return function () {
            return this.isValid() ? this._data[t] : NaN;
          };
        }var Ii = Oi("milliseconds"),
            Ai = Oi("seconds"),
            Fi = Oi("minutes"),
            Ri = Oi("hours"),
            Li = Oi("days"),
            Wi = Oi("months"),
            Yi = Oi("years");var Ni = Math.round,
            zi = { ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11 };var Hi = Math.abs;function Vi(t) {
          return (t > 0) - (t < 0) || +t;
        }function Bi() {
          if (!this.isValid()) return this.localeData().invalidDate();var t,
              e,
              i = Hi(this._milliseconds) / 1e3,
              n = Hi(this._days),
              a = Hi(this._months);e = k((t = k(i / 60)) / 60), i %= 60, t %= 60;var r = k(a / 12),
              o = a %= 12,
              s = n,
              l = e,
              u = t,
              d = i ? i.toFixed(3).replace(/\.?0+$/, "") : "",
              h = this.asSeconds();if (!h) return "P0D";var c = h < 0 ? "-" : "",
              f = Vi(this._months) !== Vi(h) ? "-" : "",
              g = Vi(this._days) !== Vi(h) ? "-" : "",
              m = Vi(this._milliseconds) !== Vi(h) ? "-" : "";return c + "P" + (r ? f + r + "Y" : "") + (o ? f + o + "M" : "") + (s ? g + s + "D" : "") + (l || u || d ? "T" : "") + (l ? m + l + "H" : "") + (u ? m + u + "M" : "") + (d ? m + d + "S" : "");
        }var Ei = Re.prototype;return Ei.isValid = function () {
          return this._isValid;
        }, Ei.abs = function () {
          var t = this._data;return this._milliseconds = pi(this._milliseconds), this._days = pi(this._days), this._months = pi(this._months), t.milliseconds = pi(t.milliseconds), t.seconds = pi(t.seconds), t.minutes = pi(t.minutes), t.hours = pi(t.hours), t.months = pi(t.months), t.years = pi(t.years), this;
        }, Ei.add = function (t, e) {
          return vi(this, t, e, 1);
        }, Ei.subtract = function (t, e) {
          return vi(this, t, e, -1);
        }, Ei.as = function (t) {
          if (!this.isValid()) return NaN;var e,
              i,
              n = this._milliseconds;if ("month" === (t = L(t)) || "year" === t) return e = this._days + n / 864e5, i = this._months + bi(e), "month" === t ? i : i / 12;switch (e = this._days + Math.round(xi(this._months)), t) {case "week":
              return e / 7 + n / 6048e5;case "day":
              return e + n / 864e5;case "hour":
              return 24 * e + n / 36e5;case "minute":
              return 1440 * e + n / 6e4;case "second":
              return 86400 * e + n / 1e3;case "millisecond":
              return Math.floor(864e5 * e) + n;default:
              throw new Error("Unknown unit " + t);}
        }, Ei.asMilliseconds = ki, Ei.asSeconds = wi, Ei.asMinutes = Mi, Ei.asHours = Si, Ei.asDays = Di, Ei.asWeeks = Ci, Ei.asMonths = Pi, Ei.asYears = Ti, Ei.valueOf = function () {
          return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * w(this._months / 12) : NaN;
        }, Ei._bubble = function () {
          var t,
              e,
              i,
              n,
              a,
              r = this._milliseconds,
              o = this._days,
              s = this._months,
              l = this._data;return r >= 0 && o >= 0 && s >= 0 || r <= 0 && o <= 0 && s <= 0 || (r += 864e5 * yi(xi(s) + o), o = 0, s = 0), l.milliseconds = r % 1e3, t = k(r / 1e3), l.seconds = t % 60, e = k(t / 60), l.minutes = e % 60, i = k(e / 60), l.hours = i % 24, s += a = k(bi(o += k(i / 24))), o -= yi(xi(a)), n = k(s / 12), s %= 12, l.days = o, l.months = s, l.years = n, this;
        }, Ei.clone = function () {
          return Ue(this);
        }, Ei.get = function (t) {
          return t = L(t), this.isValid() ? this[t + "s"]() : NaN;
        }, Ei.milliseconds = Ii, Ei.seconds = Ai, Ei.minutes = Fi, Ei.hours = Ri, Ei.days = Li, Ei.weeks = function () {
          return k(this.days() / 7);
        }, Ei.months = Wi, Ei.years = Yi, Ei.humanize = function (t) {
          if (!this.isValid()) return this.localeData().invalidDate();var e,
              i,
              n,
              a,
              r,
              o,
              s,
              l,
              u,
              d,
              h,
              c = this.localeData(),
              f = (i = !t, n = c, a = Ue(e = this).abs(), r = Ni(a.as("s")), o = Ni(a.as("m")), s = Ni(a.as("h")), l = Ni(a.as("d")), u = Ni(a.as("M")), d = Ni(a.as("y")), (h = r <= zi.ss && ["s", r] || r < zi.s && ["ss", r] || o <= 1 && ["m"] || o < zi.m && ["mm", o] || s <= 1 && ["h"] || s < zi.h && ["hh", s] || l <= 1 && ["d"] || l < zi.d && ["dd", l] || u <= 1 && ["M"] || u < zi.M && ["MM", u] || d <= 1 && ["y"] || ["yy", d])[2] = i, h[3] = +e > 0, h[4] = n, function (t, e, i, n, a) {
            return a.relativeTime(e || 1, !!i, t, n);
          }.apply(null, h));return t && (f = c.pastFuture(+this, f)), c.postformat(f);
        }, Ei.toISOString = Bi, Ei.toString = Bi, Ei.toJSON = Bi, Ei.locale = Qe, Ei.localeData = ei, Ei.toIsoString = D("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Bi), Ei.lang = ti, j("X", 0, 0, "unix"), j("x", 0, 0, "valueOf"), dt("x", rt), dt("X", /[+-]?\d+(\.\d{1,3})?/), gt("X", function (t, e, i) {
          i._d = new Date(1e3 * parseFloat(t, 10));
        }), gt("x", function (t, e, i) {
          i._d = new Date(w(t));
        }), a.version = "2.20.1", i = Te, a.fn = di, a.min = function () {
          return Ae("isBefore", [].slice.call(arguments, 0));
        }, a.max = function () {
          return Ae("isAfter", [].slice.call(arguments, 0));
        }, a.now = function () {
          return Date.now ? Date.now() : +new Date();
        }, a.utc = f, a.unix = function (t) {
          return Te(1e3 * t);
        }, a.months = function (t, e) {
          return gi(t, e, "months");
        }, a.isDate = u, a.locale = ue, a.invalid = p, a.duration = Ue, a.isMoment = _, a.weekdays = function (t, e, i) {
          return mi(t, e, i, "weekdays");
        }, a.parseZone = function () {
          return Te.apply(null, arguments).parseZone();
        }, a.localeData = he, a.isDuration = Le, a.monthsShort = function (t, e) {
          return gi(t, e, "monthsShort");
        }, a.weekdaysMin = function (t, e, i) {
          return mi(t, e, i, "weekdaysMin");
        }, a.defineLocale = de, a.updateLocale = function (t, e) {
          if (null != e) {
            var i,
                n,
                a = ae;null != (n = le(t)) && (a = n._config), (i = new A(e = I(a, e))).parentLocale = re[t], re[t] = i, ue(t);
          } else null != re[t] && (null != re[t].parentLocale ? re[t] = re[t].parentLocale : null != re[t] && delete re[t]);return re[t];
        }, a.locales = function () {
          return C(re);
        }, a.weekdaysShort = function (t, e, i) {
          return mi(t, e, i, "weekdaysShort");
        }, a.normalizeUnits = L, a.relativeTimeRounding = function (t) {
          return void 0 === t ? Ni : "function" == typeof t && (Ni = t, !0);
        }, a.relativeTimeThreshold = function (t, e) {
          return void 0 !== zi[t] && (void 0 === e ? zi[t] : (zi[t] = e, "s" === t && (zi.ss = e - 1), !0));
        }, a.calendarFormat = function (t, e) {
          var i = t.diff(e, "days", !0);return i < -6 ? "sameElse" : i < -1 ? "lastWeek" : i < 0 ? "lastDay" : i < 1 ? "sameDay" : i < 2 ? "nextDay" : i < 7 ? "nextWeek" : "sameElse";
        }, a.prototype = di, a.HTML5_FMT = { DATETIME_LOCAL: "YYYY-MM-DDTHH:mm", DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss", DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS", DATE: "YYYY-MM-DD", TIME: "HH:mm", TIME_SECONDS: "HH:mm:ss", TIME_MS: "HH:mm:ss.SSS", WEEK: "YYYY-[W]WW", MONTH: "YYYY-MM" }, a;
      }, "object" == (typeof i === "undefined" ? "undefined" : _typeof(i)) && void 0 !== e ? e.exports = a() : n.moment = a();
    }, {}], 7: [function (t, e, i) {
      var n = t(29)();n.helpers = t(45), t(27)(n), n.defaults = t(25), n.Element = t(26), n.elements = t(40), n.Interaction = t(28), n.layouts = t(30), n.platform = t(48), n.plugins = t(31), n.Ticks = t(34), t(22)(n), t(23)(n), t(24)(n), t(33)(n), t(32)(n), t(35)(n), t(55)(n), t(53)(n), t(54)(n), t(56)(n), t(57)(n), t(58)(n), t(15)(n), t(16)(n), t(17)(n), t(18)(n), t(19)(n), t(20)(n), t(21)(n), t(8)(n), t(9)(n), t(10)(n), t(11)(n), t(12)(n), t(13)(n), t(14)(n);var a = t(49);for (var r in a) {
        a.hasOwnProperty(r) && n.plugins.register(a[r]);
      }n.platform.initialize(), e.exports = n, "undefined" != typeof window && (window.Chart = n), n.Legend = a.legend._element, n.Title = a.title._element, n.pluginService = n.plugins, n.PluginBase = n.Element.extend({}), n.canvasHelpers = n.helpers.canvas, n.layoutService = n.layouts;
    }, { 10: 10, 11: 11, 12: 12, 13: 13, 14: 14, 15: 15, 16: 16, 17: 17, 18: 18, 19: 19, 20: 20, 21: 21, 22: 22, 23: 23, 24: 24, 25: 25, 26: 26, 27: 27, 28: 28, 29: 29, 30: 30, 31: 31, 32: 32, 33: 33, 34: 34, 35: 35, 40: 40, 45: 45, 48: 48, 49: 49, 53: 53, 54: 54, 55: 55, 56: 56, 57: 57, 58: 58, 8: 8, 9: 9 }], 8: [function (t, e, i) {
      "use strict";
      e.exports = function (t) {
        t.Bar = function (e, i) {
          return i.type = "bar", new t(e, i);
        };
      };
    }, {}], 9: [function (t, e, i) {
      "use strict";
      e.exports = function (t) {
        t.Bubble = function (e, i) {
          return i.type = "bubble", new t(e, i);
        };
      };
    }, {}], 10: [function (t, e, i) {
      "use strict";
      e.exports = function (t) {
        t.Doughnut = function (e, i) {
          return i.type = "doughnut", new t(e, i);
        };
      };
    }, {}], 11: [function (t, e, i) {
      "use strict";
      e.exports = function (t) {
        t.Line = function (e, i) {
          return i.type = "line", new t(e, i);
        };
      };
    }, {}], 12: [function (t, e, i) {
      "use strict";
      e.exports = function (t) {
        t.PolarArea = function (e, i) {
          return i.type = "polarArea", new t(e, i);
        };
      };
    }, {}], 13: [function (t, e, i) {
      "use strict";
      e.exports = function (t) {
        t.Radar = function (e, i) {
          return i.type = "radar", new t(e, i);
        };
      };
    }, {}], 14: [function (t, e, i) {
      "use strict";
      e.exports = function (t) {
        t.Scatter = function (e, i) {
          return i.type = "scatter", new t(e, i);
        };
      };
    }, {}], 15: [function (t, e, i) {
      "use strict";
      var n = t(25),
          a = t(40),
          r = t(45);n._set("bar", { hover: { mode: "label" }, scales: { xAxes: [{ type: "category", categoryPercentage: .8, barPercentage: .9, offset: !0, gridLines: { offsetGridLines: !0 } }], yAxes: [{ type: "linear" }] } }), n._set("horizontalBar", { hover: { mode: "index", axis: "y" }, scales: { xAxes: [{ type: "linear", position: "bottom" }], yAxes: [{ position: "left", type: "category", categoryPercentage: .8, barPercentage: .9, offset: !0, gridLines: { offsetGridLines: !0 } }] }, elements: { rectangle: { borderSkipped: "left" } }, tooltips: { callbacks: { title: function title(t, e) {
              var i = "";return t.length > 0 && (t[0].yLabel ? i = t[0].yLabel : e.labels.length > 0 && t[0].index < e.labels.length && (i = e.labels[t[0].index])), i;
            }, label: function label(t, e) {
              return (e.datasets[t.datasetIndex].label || "") + ": " + t.xLabel;
            } }, mode: "index", axis: "y" } }), e.exports = function (t) {
        t.controllers.bar = t.DatasetController.extend({ dataElementType: a.Rectangle, initialize: function initialize() {
            var e;t.DatasetController.prototype.initialize.apply(this, arguments), (e = this.getMeta()).stack = this.getDataset().stack, e.bar = !0;
          }, update: function update(t) {
            var e,
                i,
                n = this.getMeta().data;for (this._ruler = this.getRuler(), e = 0, i = n.length; e < i; ++e) {
              this.updateElement(n[e], e, t);
            }
          }, updateElement: function updateElement(t, e, i) {
            var n = this,
                a = n.chart,
                o = n.getMeta(),
                s = n.getDataset(),
                l = t.custom || {},
                u = a.options.elements.rectangle;t._xScale = n.getScaleForId(o.xAxisID), t._yScale = n.getScaleForId(o.yAxisID), t._datasetIndex = n.index, t._index = e, t._model = { datasetLabel: s.label, label: a.data.labels[e], borderSkipped: l.borderSkipped ? l.borderSkipped : u.borderSkipped, backgroundColor: l.backgroundColor ? l.backgroundColor : r.valueAtIndexOrDefault(s.backgroundColor, e, u.backgroundColor), borderColor: l.borderColor ? l.borderColor : r.valueAtIndexOrDefault(s.borderColor, e, u.borderColor), borderWidth: l.borderWidth ? l.borderWidth : r.valueAtIndexOrDefault(s.borderWidth, e, u.borderWidth) }, n.updateElementGeometry(t, e, i), t.pivot();
          }, updateElementGeometry: function updateElementGeometry(t, e, i) {
            var n = this,
                a = t._model,
                r = n.getValueScale(),
                o = r.getBasePixel(),
                s = r.isHorizontal(),
                l = n._ruler || n.getRuler(),
                u = n.calculateBarValuePixels(n.index, e),
                d = n.calculateBarIndexPixels(n.index, e, l);a.horizontal = s, a.base = i ? o : u.base, a.x = s ? i ? o : u.head : d.center, a.y = s ? d.center : i ? o : u.head, a.height = s ? d.size : void 0, a.width = s ? void 0 : d.size;
          }, getValueScaleId: function getValueScaleId() {
            return this.getMeta().yAxisID;
          }, getIndexScaleId: function getIndexScaleId() {
            return this.getMeta().xAxisID;
          }, getValueScale: function getValueScale() {
            return this.getScaleForId(this.getValueScaleId());
          }, getIndexScale: function getIndexScale() {
            return this.getScaleForId(this.getIndexScaleId());
          }, _getStacks: function _getStacks(t) {
            var e,
                i,
                n = this.chart,
                a = this.getIndexScale().options.stacked,
                r = void 0 === t ? n.data.datasets.length : t + 1,
                o = [];for (e = 0; e < r; ++e) {
              (i = n.getDatasetMeta(e)).bar && n.isDatasetVisible(e) && (!1 === a || !0 === a && -1 === o.indexOf(i.stack) || void 0 === a && (void 0 === i.stack || -1 === o.indexOf(i.stack))) && o.push(i.stack);
            }return o;
          }, getStackCount: function getStackCount() {
            return this._getStacks().length;
          }, getStackIndex: function getStackIndex(t, e) {
            var i = this._getStacks(t),
                n = void 0 !== e ? i.indexOf(e) : -1;return -1 === n ? i.length - 1 : n;
          }, getRuler: function getRuler() {
            var t,
                e,
                i = this.getIndexScale(),
                n = this.getStackCount(),
                a = this.index,
                o = i.isHorizontal(),
                s = o ? i.left : i.top,
                l = s + (o ? i.width : i.height),
                u = [];for (t = 0, e = this.getMeta().data.length; t < e; ++t) {
              u.push(i.getPixelForValue(null, t, a));
            }return { min: r.isNullOrUndef(i.options.barThickness) ? function (t, e) {
                var i,
                    n,
                    a,
                    r,
                    o = t.isHorizontal() ? t.width : t.height,
                    s = t.getTicks();for (a = 1, r = e.length; a < r; ++a) {
                  o = Math.min(o, e[a] - e[a - 1]);
                }for (a = 0, r = s.length; a < r; ++a) {
                  n = t.getPixelForTick(a), o = a > 0 ? Math.min(o, n - i) : o, i = n;
                }return o;
              }(i, u) : -1, pixels: u, start: s, end: l, stackCount: n, scale: i };
          }, calculateBarValuePixels: function calculateBarValuePixels(t, e) {
            var i,
                n,
                a,
                r,
                o,
                s,
                l = this.chart,
                u = this.getMeta(),
                d = this.getValueScale(),
                h = l.data.datasets,
                c = d.getRightValue(h[t].data[e]),
                f = d.options.stacked,
                g = u.stack,
                m = 0;if (f || void 0 === f && void 0 !== g) for (i = 0; i < t; ++i) {
              (n = l.getDatasetMeta(i)).bar && n.stack === g && n.controller.getValueScaleId() === d.id && l.isDatasetVisible(i) && (a = d.getRightValue(h[i].data[e]), (c < 0 && a < 0 || c >= 0 && a > 0) && (m += a));
            }return r = d.getPixelForValue(m), { size: s = ((o = d.getPixelForValue(m + c)) - r) / 2, base: r, head: o, center: o + s / 2 };
          }, calculateBarIndexPixels: function calculateBarIndexPixels(t, e, i) {
            var n,
                a,
                o,
                s,
                l,
                u,
                d,
                h,
                c,
                f,
                g,
                m,
                p,
                v,
                y,
                b,
                x,
                _ = i.scale.options,
                k = "flex" === _.barThickness ? (c = e, g = _, p = (f = i).pixels, v = p[c], y = c > 0 ? p[c - 1] : null, b = c < p.length - 1 ? p[c + 1] : null, x = g.categoryPercentage, null === y && (y = v - (null === b ? f.end - v : b - v)), null === b && (b = v + v - y), m = v - (v - y) / 2 * x, { chunk: (b - y) / 2 * x / f.stackCount, ratio: g.barPercentage, start: m }) : (n = e, a = i, u = (o = _).barThickness, d = a.stackCount, h = a.pixels[n], r.isNullOrUndef(u) ? (s = a.min * o.categoryPercentage, l = o.barPercentage) : (s = u * d, l = 1), { chunk: s / d, ratio: l, start: h - s / 2 }),
                w = this.getStackIndex(t, this.getMeta().stack),
                M = k.start + k.chunk * w + k.chunk / 2,
                S = Math.min(r.valueOrDefault(_.maxBarThickness, 1 / 0), k.chunk * k.ratio);return { base: M - S / 2, head: M + S / 2, center: M, size: S };
          }, draw: function draw() {
            var t = this.chart,
                e = this.getValueScale(),
                i = this.getMeta().data,
                n = this.getDataset(),
                a = i.length,
                o = 0;for (r.canvas.clipArea(t.ctx, t.chartArea); o < a; ++o) {
              isNaN(e.getRightValue(n.data[o])) || i[o].draw();
            }r.canvas.unclipArea(t.ctx);
          }, setHoverStyle: function setHoverStyle(t) {
            var e = this.chart.data.datasets[t._datasetIndex],
                i = t._index,
                n = t.custom || {},
                a = t._model;a.backgroundColor = n.hoverBackgroundColor ? n.hoverBackgroundColor : r.valueAtIndexOrDefault(e.hoverBackgroundColor, i, r.getHoverColor(a.backgroundColor)), a.borderColor = n.hoverBorderColor ? n.hoverBorderColor : r.valueAtIndexOrDefault(e.hoverBorderColor, i, r.getHoverColor(a.borderColor)), a.borderWidth = n.hoverBorderWidth ? n.hoverBorderWidth : r.valueAtIndexOrDefault(e.hoverBorderWidth, i, a.borderWidth);
          }, removeHoverStyle: function removeHoverStyle(t) {
            var e = this.chart.data.datasets[t._datasetIndex],
                i = t._index,
                n = t.custom || {},
                a = t._model,
                o = this.chart.options.elements.rectangle;a.backgroundColor = n.backgroundColor ? n.backgroundColor : r.valueAtIndexOrDefault(e.backgroundColor, i, o.backgroundColor), a.borderColor = n.borderColor ? n.borderColor : r.valueAtIndexOrDefault(e.borderColor, i, o.borderColor), a.borderWidth = n.borderWidth ? n.borderWidth : r.valueAtIndexOrDefault(e.borderWidth, i, o.borderWidth);
          } }), t.controllers.horizontalBar = t.controllers.bar.extend({ getValueScaleId: function getValueScaleId() {
            return this.getMeta().xAxisID;
          }, getIndexScaleId: function getIndexScaleId() {
            return this.getMeta().yAxisID;
          } });
      };
    }, { 25: 25, 40: 40, 45: 45 }], 16: [function (t, e, i) {
      "use strict";
      var n = t(25),
          a = t(40),
          r = t(45);n._set("bubble", { hover: { mode: "single" }, scales: { xAxes: [{ type: "linear", position: "bottom", id: "x-axis-0" }], yAxes: [{ type: "linear", position: "left", id: "y-axis-0" }] }, tooltips: { callbacks: { title: function title() {
              return "";
            }, label: function label(t, e) {
              var i = e.datasets[t.datasetIndex].label || "",
                  n = e.datasets[t.datasetIndex].data[t.index];return i + ": (" + t.xLabel + ", " + t.yLabel + ", " + n.r + ")";
            } } } }), e.exports = function (t) {
        t.controllers.bubble = t.DatasetController.extend({ dataElementType: a.Point, update: function update(t) {
            var e = this,
                i = e.getMeta().data;r.each(i, function (i, n) {
              e.updateElement(i, n, t);
            });
          }, updateElement: function updateElement(t, e, i) {
            var n = this,
                a = n.getMeta(),
                r = t.custom || {},
                o = n.getScaleForId(a.xAxisID),
                s = n.getScaleForId(a.yAxisID),
                l = n._resolveElementOptions(t, e),
                u = n.getDataset().data[e],
                d = n.index,
                h = i ? o.getPixelForDecimal(.5) : o.getPixelForValue("object" == (typeof u === "undefined" ? "undefined" : _typeof(u)) ? u : NaN, e, d),
                c = i ? s.getBasePixel() : s.getPixelForValue(u, e, d);t._xScale = o, t._yScale = s, t._options = l, t._datasetIndex = d, t._index = e, t._model = { backgroundColor: l.backgroundColor, borderColor: l.borderColor, borderWidth: l.borderWidth, hitRadius: l.hitRadius, pointStyle: l.pointStyle, radius: i ? 0 : l.radius, skip: r.skip || isNaN(h) || isNaN(c), x: h, y: c }, t.pivot();
          }, setHoverStyle: function setHoverStyle(t) {
            var e = t._model,
                i = t._options;e.backgroundColor = r.valueOrDefault(i.hoverBackgroundColor, r.getHoverColor(i.backgroundColor)), e.borderColor = r.valueOrDefault(i.hoverBorderColor, r.getHoverColor(i.borderColor)), e.borderWidth = r.valueOrDefault(i.hoverBorderWidth, i.borderWidth), e.radius = i.radius + i.hoverRadius;
          }, removeHoverStyle: function removeHoverStyle(t) {
            var e = t._model,
                i = t._options;e.backgroundColor = i.backgroundColor, e.borderColor = i.borderColor, e.borderWidth = i.borderWidth, e.radius = i.radius;
          }, _resolveElementOptions: function _resolveElementOptions(t, e) {
            var i,
                n,
                a,
                o = this.chart,
                s = o.data.datasets[this.index],
                l = t.custom || {},
                u = o.options.elements.point,
                d = r.options.resolve,
                h = s.data[e],
                c = {},
                f = { chart: o, dataIndex: e, dataset: s, datasetIndex: this.index },
                g = ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle"];for (i = 0, n = g.length; i < n; ++i) {
              c[a = g[i]] = d([l[a], s[a], u[a]], f, e);
            }return c.radius = d([l.radius, h ? h.r : void 0, s.radius, u.radius], f, e), c;
          } });
      };
    }, { 25: 25, 40: 40, 45: 45 }], 17: [function (t, e, i) {
      "use strict";
      var n = t(25),
          a = t(40),
          r = t(45);n._set("doughnut", { animation: { animateRotate: !0, animateScale: !1 }, hover: { mode: "single" }, legendCallback: function legendCallback(t) {
          var e = [];e.push('<ul class="' + t.id + '-legend">');var i = t.data,
              n = i.datasets,
              a = i.labels;if (n.length) for (var r = 0; r < n[0].data.length; ++r) {
            e.push('<li><span style="background-color:' + n[0].backgroundColor[r] + '"></span>'), a[r] && e.push(a[r]), e.push("</li>");
          }return e.push("</ul>"), e.join("");
        }, legend: { labels: { generateLabels: function generateLabels(t) {
              var e = t.data;return e.labels.length && e.datasets.length ? e.labels.map(function (i, n) {
                var a = t.getDatasetMeta(0),
                    o = e.datasets[0],
                    s = a.data[n],
                    l = s && s.custom || {},
                    u = r.valueAtIndexOrDefault,
                    d = t.options.elements.arc;return { text: i, fillStyle: l.backgroundColor ? l.backgroundColor : u(o.backgroundColor, n, d.backgroundColor), strokeStyle: l.borderColor ? l.borderColor : u(o.borderColor, n, d.borderColor), lineWidth: l.borderWidth ? l.borderWidth : u(o.borderWidth, n, d.borderWidth), hidden: isNaN(o.data[n]) || a.data[n].hidden, index: n };
              }) : [];
            } }, onClick: function onClick(t, e) {
            var i,
                n,
                a,
                r = e.index,
                o = this.chart;for (i = 0, n = (o.data.datasets || []).length; i < n; ++i) {
              (a = o.getDatasetMeta(i)).data[r] && (a.data[r].hidden = !a.data[r].hidden);
            }o.update();
          } }, cutoutPercentage: 50, rotation: -.5 * Math.PI, circumference: 2 * Math.PI, tooltips: { callbacks: { title: function title() {
              return "";
            }, label: function label(t, e) {
              var i = e.labels[t.index],
                  n = ": " + e.datasets[t.datasetIndex].data[t.index];return r.isArray(i) ? (i = i.slice())[0] += n : i += n, i;
            } } } }), n._set("pie", r.clone(n.doughnut)), n._set("pie", { cutoutPercentage: 0 }), e.exports = function (t) {
        t.controllers.doughnut = t.controllers.pie = t.DatasetController.extend({ dataElementType: a.Arc, linkScales: r.noop, getRingIndex: function getRingIndex(t) {
            for (var e = 0, i = 0; i < t; ++i) {
              this.chart.isDatasetVisible(i) && ++e;
            }return e;
          }, update: function update(t) {
            var e = this,
                i = e.chart,
                n = i.chartArea,
                a = i.options,
                o = a.elements.arc,
                s = n.right - n.left - o.borderWidth,
                l = n.bottom - n.top - o.borderWidth,
                u = Math.min(s, l),
                d = { x: 0, y: 0 },
                h = e.getMeta(),
                c = a.cutoutPercentage,
                f = a.circumference;if (f < 2 * Math.PI) {
              var g = a.rotation % (2 * Math.PI),
                  m = (g += 2 * Math.PI * (g >= Math.PI ? -1 : g < -Math.PI ? 1 : 0)) + f,
                  p = Math.cos(g),
                  v = Math.sin(g),
                  y = Math.cos(m),
                  b = Math.sin(m),
                  x = g <= 0 && m >= 0 || g <= 2 * Math.PI && 2 * Math.PI <= m,
                  _ = g <= .5 * Math.PI && .5 * Math.PI <= m || g <= 2.5 * Math.PI && 2.5 * Math.PI <= m,
                  k = g <= -Math.PI && -Math.PI <= m || g <= Math.PI && Math.PI <= m,
                  w = g <= .5 * -Math.PI && .5 * -Math.PI <= m || g <= 1.5 * Math.PI && 1.5 * Math.PI <= m,
                  M = c / 100,
                  S = k ? -1 : Math.min(p * (p < 0 ? 1 : M), y * (y < 0 ? 1 : M)),
                  D = w ? -1 : Math.min(v * (v < 0 ? 1 : M), b * (b < 0 ? 1 : M)),
                  C = x ? 1 : Math.max(p * (p > 0 ? 1 : M), y * (y > 0 ? 1 : M)),
                  P = _ ? 1 : Math.max(v * (v > 0 ? 1 : M), b * (b > 0 ? 1 : M)),
                  T = .5 * (C - S),
                  O = .5 * (P - D);u = Math.min(s / T, l / O), d = { x: -.5 * (C + S), y: -.5 * (P + D) };
            }i.borderWidth = e.getMaxBorderWidth(h.data), i.outerRadius = Math.max((u - i.borderWidth) / 2, 0), i.innerRadius = Math.max(c ? i.outerRadius / 100 * c : 0, 0), i.radiusLength = (i.outerRadius - i.innerRadius) / i.getVisibleDatasetCount(), i.offsetX = d.x * i.outerRadius, i.offsetY = d.y * i.outerRadius, h.total = e.calculateTotal(), e.outerRadius = i.outerRadius - i.radiusLength * e.getRingIndex(e.index), e.innerRadius = Math.max(e.outerRadius - i.radiusLength, 0), r.each(h.data, function (i, n) {
              e.updateElement(i, n, t);
            });
          }, updateElement: function updateElement(t, e, i) {
            var n = this,
                a = n.chart,
                o = a.chartArea,
                s = a.options,
                l = s.animation,
                u = (o.left + o.right) / 2,
                d = (o.top + o.bottom) / 2,
                h = s.rotation,
                c = s.rotation,
                f = n.getDataset(),
                g = i && l.animateRotate ? 0 : t.hidden ? 0 : n.calculateCircumference(f.data[e]) * (s.circumference / (2 * Math.PI)),
                m = i && l.animateScale ? 0 : n.innerRadius,
                p = i && l.animateScale ? 0 : n.outerRadius,
                v = r.valueAtIndexOrDefault;r.extend(t, { _datasetIndex: n.index, _index: e, _model: { x: u + a.offsetX, y: d + a.offsetY, startAngle: h, endAngle: c, circumference: g, outerRadius: p, innerRadius: m, label: v(f.label, e, a.data.labels[e]) } });var y = t._model;this.removeHoverStyle(t), i && l.animateRotate || (y.startAngle = 0 === e ? s.rotation : n.getMeta().data[e - 1]._model.endAngle, y.endAngle = y.startAngle + y.circumference), t.pivot();
          }, removeHoverStyle: function removeHoverStyle(e) {
            t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc);
          }, calculateTotal: function calculateTotal() {
            var t,
                e = this.getDataset(),
                i = this.getMeta(),
                n = 0;return r.each(i.data, function (i, a) {
              t = e.data[a], isNaN(t) || i.hidden || (n += Math.abs(t));
            }), n;
          }, calculateCircumference: function calculateCircumference(t) {
            var e = this.getMeta().total;return e > 0 && !isNaN(t) ? 2 * Math.PI * (Math.abs(t) / e) : 0;
          }, getMaxBorderWidth: function getMaxBorderWidth(t) {
            for (var e, i, n = 0, a = this.index, r = t.length, o = 0; o < r; o++) {
              e = t[o]._model ? t[o]._model.borderWidth : 0, n = (i = t[o]._chart ? t[o]._chart.config.data.datasets[a].hoverBorderWidth : 0) > (n = e > n ? e : n) ? i : n;
            }return n;
          } });
      };
    }, { 25: 25, 40: 40, 45: 45 }], 18: [function (t, e, i) {
      "use strict";
      var n = t(25),
          a = t(40),
          r = t(45);n._set("line", { showLines: !0, spanGaps: !1, hover: { mode: "label" }, scales: { xAxes: [{ type: "category", id: "x-axis-0" }], yAxes: [{ type: "linear", id: "y-axis-0" }] } }), e.exports = function (t) {
        function e(t, e) {
          return r.valueOrDefault(t.showLine, e.showLines);
        }t.controllers.line = t.DatasetController.extend({ datasetElementType: a.Line, dataElementType: a.Point, update: function update(t) {
            var i,
                n,
                a,
                o = this,
                s = o.getMeta(),
                l = s.dataset,
                u = s.data || [],
                d = o.chart.options,
                h = d.elements.line,
                c = o.getScaleForId(s.yAxisID),
                f = o.getDataset(),
                g = e(f, d);for (g && (a = l.custom || {}, void 0 !== f.tension && void 0 === f.lineTension && (f.lineTension = f.tension), l._scale = c, l._datasetIndex = o.index, l._children = u, l._model = { spanGaps: f.spanGaps ? f.spanGaps : d.spanGaps, tension: a.tension ? a.tension : r.valueOrDefault(f.lineTension, h.tension), backgroundColor: a.backgroundColor ? a.backgroundColor : f.backgroundColor || h.backgroundColor, borderWidth: a.borderWidth ? a.borderWidth : f.borderWidth || h.borderWidth, borderColor: a.borderColor ? a.borderColor : f.borderColor || h.borderColor, borderCapStyle: a.borderCapStyle ? a.borderCapStyle : f.borderCapStyle || h.borderCapStyle, borderDash: a.borderDash ? a.borderDash : f.borderDash || h.borderDash, borderDashOffset: a.borderDashOffset ? a.borderDashOffset : f.borderDashOffset || h.borderDashOffset, borderJoinStyle: a.borderJoinStyle ? a.borderJoinStyle : f.borderJoinStyle || h.borderJoinStyle, fill: a.fill ? a.fill : void 0 !== f.fill ? f.fill : h.fill, steppedLine: a.steppedLine ? a.steppedLine : r.valueOrDefault(f.steppedLine, h.stepped), cubicInterpolationMode: a.cubicInterpolationMode ? a.cubicInterpolationMode : r.valueOrDefault(f.cubicInterpolationMode, h.cubicInterpolationMode) }, l.pivot()), i = 0, n = u.length; i < n; ++i) {
              o.updateElement(u[i], i, t);
            }for (g && 0 !== l._model.tension && o.updateBezierControlPoints(), i = 0, n = u.length; i < n; ++i) {
              u[i].pivot();
            }
          }, getPointBackgroundColor: function getPointBackgroundColor(t, e) {
            var i = this.chart.options.elements.point.backgroundColor,
                n = this.getDataset(),
                a = t.custom || {};return a.backgroundColor ? i = a.backgroundColor : n.pointBackgroundColor ? i = r.valueAtIndexOrDefault(n.pointBackgroundColor, e, i) : n.backgroundColor && (i = n.backgroundColor), i;
          }, getPointBorderColor: function getPointBorderColor(t, e) {
            var i = this.chart.options.elements.point.borderColor,
                n = this.getDataset(),
                a = t.custom || {};return a.borderColor ? i = a.borderColor : n.pointBorderColor ? i = r.valueAtIndexOrDefault(n.pointBorderColor, e, i) : n.borderColor && (i = n.borderColor), i;
          }, getPointBorderWidth: function getPointBorderWidth(t, e) {
            var i = this.chart.options.elements.point.borderWidth,
                n = this.getDataset(),
                a = t.custom || {};return isNaN(a.borderWidth) ? !isNaN(n.pointBorderWidth) || r.isArray(n.pointBorderWidth) ? i = r.valueAtIndexOrDefault(n.pointBorderWidth, e, i) : isNaN(n.borderWidth) || (i = n.borderWidth) : i = a.borderWidth, i;
          }, updateElement: function updateElement(t, e, i) {
            var n,
                a,
                o = this,
                s = o.getMeta(),
                l = t.custom || {},
                u = o.getDataset(),
                d = o.index,
                h = u.data[e],
                c = o.getScaleForId(s.yAxisID),
                f = o.getScaleForId(s.xAxisID),
                g = o.chart.options.elements.point;void 0 !== u.radius && void 0 === u.pointRadius && (u.pointRadius = u.radius), void 0 !== u.hitRadius && void 0 === u.pointHitRadius && (u.pointHitRadius = u.hitRadius), n = f.getPixelForValue("object" == (typeof h === "undefined" ? "undefined" : _typeof(h)) ? h : NaN, e, d), a = i ? c.getBasePixel() : o.calculatePointY(h, e, d), t._xScale = f, t._yScale = c, t._datasetIndex = d, t._index = e, t._model = { x: n, y: a, skip: l.skip || isNaN(n) || isNaN(a), radius: l.radius || r.valueAtIndexOrDefault(u.pointRadius, e, g.radius), pointStyle: l.pointStyle || r.valueAtIndexOrDefault(u.pointStyle, e, g.pointStyle), backgroundColor: o.getPointBackgroundColor(t, e), borderColor: o.getPointBorderColor(t, e), borderWidth: o.getPointBorderWidth(t, e), tension: s.dataset._model ? s.dataset._model.tension : 0, steppedLine: !!s.dataset._model && s.dataset._model.steppedLine, hitRadius: l.hitRadius || r.valueAtIndexOrDefault(u.pointHitRadius, e, g.hitRadius) };
          }, calculatePointY: function calculatePointY(t, e, i) {
            var n,
                a,
                r,
                o = this.chart,
                s = this.getMeta(),
                l = this.getScaleForId(s.yAxisID),
                u = 0,
                d = 0;if (l.options.stacked) {
              for (n = 0; n < i; n++) {
                if (a = o.data.datasets[n], "line" === (r = o.getDatasetMeta(n)).type && r.yAxisID === l.id && o.isDatasetVisible(n)) {
                  var h = Number(l.getRightValue(a.data[e]));h < 0 ? d += h || 0 : u += h || 0;
                }
              }var c = Number(l.getRightValue(t));return c < 0 ? l.getPixelForValue(d + c) : l.getPixelForValue(u + c);
            }return l.getPixelForValue(t);
          }, updateBezierControlPoints: function updateBezierControlPoints() {
            var t,
                e,
                i,
                n,
                a = this.getMeta(),
                o = this.chart.chartArea,
                s = a.data || [];function l(t, e, i) {
              return Math.max(Math.min(t, i), e);
            }if (a.dataset._model.spanGaps && (s = s.filter(function (t) {
              return !t._model.skip;
            })), "monotone" === a.dataset._model.cubicInterpolationMode) r.splineCurveMonotone(s);else for (t = 0, e = s.length; t < e; ++t) {
              i = s[t]._model, n = r.splineCurve(r.previousItem(s, t)._model, i, r.nextItem(s, t)._model, a.dataset._model.tension), i.controlPointPreviousX = n.previous.x, i.controlPointPreviousY = n.previous.y, i.controlPointNextX = n.next.x, i.controlPointNextY = n.next.y;
            }if (this.chart.options.elements.line.capBezierPoints) for (t = 0, e = s.length; t < e; ++t) {
              (i = s[t]._model).controlPointPreviousX = l(i.controlPointPreviousX, o.left, o.right), i.controlPointPreviousY = l(i.controlPointPreviousY, o.top, o.bottom), i.controlPointNextX = l(i.controlPointNextX, o.left, o.right), i.controlPointNextY = l(i.controlPointNextY, o.top, o.bottom);
            }
          }, draw: function draw() {
            var t = this.chart,
                i = this.getMeta(),
                n = i.data || [],
                a = t.chartArea,
                o = n.length,
                s = 0;for (r.canvas.clipArea(t.ctx, a), e(this.getDataset(), t.options) && i.dataset.draw(), r.canvas.unclipArea(t.ctx); s < o; ++s) {
              n[s].draw(a);
            }
          }, setHoverStyle: function setHoverStyle(t) {
            var e = this.chart.data.datasets[t._datasetIndex],
                i = t._index,
                n = t.custom || {},
                a = t._model;a.radius = n.hoverRadius || r.valueAtIndexOrDefault(e.pointHoverRadius, i, this.chart.options.elements.point.hoverRadius), a.backgroundColor = n.hoverBackgroundColor || r.valueAtIndexOrDefault(e.pointHoverBackgroundColor, i, r.getHoverColor(a.backgroundColor)), a.borderColor = n.hoverBorderColor || r.valueAtIndexOrDefault(e.pointHoverBorderColor, i, r.getHoverColor(a.borderColor)), a.borderWidth = n.hoverBorderWidth || r.valueAtIndexOrDefault(e.pointHoverBorderWidth, i, a.borderWidth);
          }, removeHoverStyle: function removeHoverStyle(t) {
            var e = this,
                i = e.chart.data.datasets[t._datasetIndex],
                n = t._index,
                a = t.custom || {},
                o = t._model;void 0 !== i.radius && void 0 === i.pointRadius && (i.pointRadius = i.radius), o.radius = a.radius || r.valueAtIndexOrDefault(i.pointRadius, n, e.chart.options.elements.point.radius), o.backgroundColor = e.getPointBackgroundColor(t, n), o.borderColor = e.getPointBorderColor(t, n), o.borderWidth = e.getPointBorderWidth(t, n);
          } });
      };
    }, { 25: 25, 40: 40, 45: 45 }], 19: [function (t, e, i) {
      "use strict";
      var n = t(25),
          a = t(40),
          r = t(45);n._set("polarArea", { scale: { type: "radialLinear", angleLines: { display: !1 }, gridLines: { circular: !0 }, pointLabels: { display: !1 }, ticks: { beginAtZero: !0 } }, animation: { animateRotate: !0, animateScale: !0 }, startAngle: -.5 * Math.PI, legendCallback: function legendCallback(t) {
          var e = [];e.push('<ul class="' + t.id + '-legend">');var i = t.data,
              n = i.datasets,
              a = i.labels;if (n.length) for (var r = 0; r < n[0].data.length; ++r) {
            e.push('<li><span style="background-color:' + n[0].backgroundColor[r] + '"></span>'), a[r] && e.push(a[r]), e.push("</li>");
          }return e.push("</ul>"), e.join("");
        }, legend: { labels: { generateLabels: function generateLabels(t) {
              var e = t.data;return e.labels.length && e.datasets.length ? e.labels.map(function (i, n) {
                var a = t.getDatasetMeta(0),
                    o = e.datasets[0],
                    s = a.data[n].custom || {},
                    l = r.valueAtIndexOrDefault,
                    u = t.options.elements.arc;return { text: i, fillStyle: s.backgroundColor ? s.backgroundColor : l(o.backgroundColor, n, u.backgroundColor), strokeStyle: s.borderColor ? s.borderColor : l(o.borderColor, n, u.borderColor), lineWidth: s.borderWidth ? s.borderWidth : l(o.borderWidth, n, u.borderWidth), hidden: isNaN(o.data[n]) || a.data[n].hidden, index: n };
              }) : [];
            } }, onClick: function onClick(t, e) {
            var i,
                n,
                a,
                r = e.index,
                o = this.chart;for (i = 0, n = (o.data.datasets || []).length; i < n; ++i) {
              (a = o.getDatasetMeta(i)).data[r].hidden = !a.data[r].hidden;
            }o.update();
          } }, tooltips: { callbacks: { title: function title() {
              return "";
            }, label: function label(t, e) {
              return e.labels[t.index] + ": " + t.yLabel;
            } } } }), e.exports = function (t) {
        t.controllers.polarArea = t.DatasetController.extend({ dataElementType: a.Arc, linkScales: r.noop, update: function update(t) {
            var e = this,
                i = e.chart,
                n = i.chartArea,
                a = e.getMeta(),
                o = i.options,
                s = o.elements.arc,
                l = Math.min(n.right - n.left, n.bottom - n.top);i.outerRadius = Math.max((l - s.borderWidth / 2) / 2, 0), i.innerRadius = Math.max(o.cutoutPercentage ? i.outerRadius / 100 * o.cutoutPercentage : 1, 0), i.radiusLength = (i.outerRadius - i.innerRadius) / i.getVisibleDatasetCount(), e.outerRadius = i.outerRadius - i.radiusLength * e.index, e.innerRadius = e.outerRadius - i.radiusLength, a.count = e.countVisibleElements(), r.each(a.data, function (i, n) {
              e.updateElement(i, n, t);
            });
          }, updateElement: function updateElement(t, e, i) {
            for (var n = this, a = n.chart, o = n.getDataset(), s = a.options, l = s.animation, u = a.scale, d = a.data.labels, h = n.calculateCircumference(o.data[e]), c = u.xCenter, f = u.yCenter, g = 0, m = n.getMeta(), p = 0; p < e; ++p) {
              isNaN(o.data[p]) || m.data[p].hidden || ++g;
            }var v = s.startAngle,
                y = t.hidden ? 0 : u.getDistanceFromCenterForValue(o.data[e]),
                b = v + h * g,
                x = b + (t.hidden ? 0 : h),
                _ = l.animateScale ? 0 : u.getDistanceFromCenterForValue(o.data[e]);r.extend(t, { _datasetIndex: n.index, _index: e, _scale: u, _model: { x: c, y: f, innerRadius: 0, outerRadius: i ? _ : y, startAngle: i && l.animateRotate ? v : b, endAngle: i && l.animateRotate ? v : x, label: r.valueAtIndexOrDefault(d, e, d[e]) } }), n.removeHoverStyle(t), t.pivot();
          }, removeHoverStyle: function removeHoverStyle(e) {
            t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc);
          }, countVisibleElements: function countVisibleElements() {
            var t = this.getDataset(),
                e = this.getMeta(),
                i = 0;return r.each(e.data, function (e, n) {
              isNaN(t.data[n]) || e.hidden || i++;
            }), i;
          }, calculateCircumference: function calculateCircumference(t) {
            var e = this.getMeta().count;return e > 0 && !isNaN(t) ? 2 * Math.PI / e : 0;
          } });
      };
    }, { 25: 25, 40: 40, 45: 45 }], 20: [function (t, e, i) {
      "use strict";
      var n = t(25),
          a = t(40),
          r = t(45);n._set("radar", { scale: { type: "radialLinear" }, elements: { line: { tension: 0 } } }), e.exports = function (t) {
        t.controllers.radar = t.DatasetController.extend({ datasetElementType: a.Line, dataElementType: a.Point, linkScales: r.noop, update: function update(t) {
            var e = this,
                i = e.getMeta(),
                n = i.dataset,
                a = i.data,
                o = n.custom || {},
                s = e.getDataset(),
                l = e.chart.options.elements.line,
                u = e.chart.scale;void 0 !== s.tension && void 0 === s.lineTension && (s.lineTension = s.tension), r.extend(i.dataset, { _datasetIndex: e.index, _scale: u, _children: a, _loop: !0, _model: { tension: o.tension ? o.tension : r.valueOrDefault(s.lineTension, l.tension), backgroundColor: o.backgroundColor ? o.backgroundColor : s.backgroundColor || l.backgroundColor, borderWidth: o.borderWidth ? o.borderWidth : s.borderWidth || l.borderWidth, borderColor: o.borderColor ? o.borderColor : s.borderColor || l.borderColor, fill: o.fill ? o.fill : void 0 !== s.fill ? s.fill : l.fill, borderCapStyle: o.borderCapStyle ? o.borderCapStyle : s.borderCapStyle || l.borderCapStyle, borderDash: o.borderDash ? o.borderDash : s.borderDash || l.borderDash, borderDashOffset: o.borderDashOffset ? o.borderDashOffset : s.borderDashOffset || l.borderDashOffset, borderJoinStyle: o.borderJoinStyle ? o.borderJoinStyle : s.borderJoinStyle || l.borderJoinStyle } }), i.dataset.pivot(), r.each(a, function (i, n) {
              e.updateElement(i, n, t);
            }, e), e.updateBezierControlPoints();
          }, updateElement: function updateElement(t, e, i) {
            var n = this,
                a = t.custom || {},
                o = n.getDataset(),
                s = n.chart.scale,
                l = n.chart.options.elements.point,
                u = s.getPointPositionForValue(e, o.data[e]);void 0 !== o.radius && void 0 === o.pointRadius && (o.pointRadius = o.radius), void 0 !== o.hitRadius && void 0 === o.pointHitRadius && (o.pointHitRadius = o.hitRadius), r.extend(t, { _datasetIndex: n.index, _index: e, _scale: s, _model: { x: i ? s.xCenter : u.x, y: i ? s.yCenter : u.y, tension: a.tension ? a.tension : r.valueOrDefault(o.lineTension, n.chart.options.elements.line.tension), radius: a.radius ? a.radius : r.valueAtIndexOrDefault(o.pointRadius, e, l.radius), backgroundColor: a.backgroundColor ? a.backgroundColor : r.valueAtIndexOrDefault(o.pointBackgroundColor, e, l.backgroundColor), borderColor: a.borderColor ? a.borderColor : r.valueAtIndexOrDefault(o.pointBorderColor, e, l.borderColor), borderWidth: a.borderWidth ? a.borderWidth : r.valueAtIndexOrDefault(o.pointBorderWidth, e, l.borderWidth), pointStyle: a.pointStyle ? a.pointStyle : r.valueAtIndexOrDefault(o.pointStyle, e, l.pointStyle), hitRadius: a.hitRadius ? a.hitRadius : r.valueAtIndexOrDefault(o.pointHitRadius, e, l.hitRadius) } }), t._model.skip = a.skip ? a.skip : isNaN(t._model.x) || isNaN(t._model.y);
          }, updateBezierControlPoints: function updateBezierControlPoints() {
            var t = this.chart.chartArea,
                e = this.getMeta();r.each(e.data, function (i, n) {
              var a = i._model,
                  o = r.splineCurve(r.previousItem(e.data, n, !0)._model, a, r.nextItem(e.data, n, !0)._model, a.tension);a.controlPointPreviousX = Math.max(Math.min(o.previous.x, t.right), t.left), a.controlPointPreviousY = Math.max(Math.min(o.previous.y, t.bottom), t.top), a.controlPointNextX = Math.max(Math.min(o.next.x, t.right), t.left), a.controlPointNextY = Math.max(Math.min(o.next.y, t.bottom), t.top), i.pivot();
            });
          }, setHoverStyle: function setHoverStyle(t) {
            var e = this.chart.data.datasets[t._datasetIndex],
                i = t.custom || {},
                n = t._index,
                a = t._model;a.radius = i.hoverRadius ? i.hoverRadius : r.valueAtIndexOrDefault(e.pointHoverRadius, n, this.chart.options.elements.point.hoverRadius), a.backgroundColor = i.hoverBackgroundColor ? i.hoverBackgroundColor : r.valueAtIndexOrDefault(e.pointHoverBackgroundColor, n, r.getHoverColor(a.backgroundColor)), a.borderColor = i.hoverBorderColor ? i.hoverBorderColor : r.valueAtIndexOrDefault(e.pointHoverBorderColor, n, r.getHoverColor(a.borderColor)), a.borderWidth = i.hoverBorderWidth ? i.hoverBorderWidth : r.valueAtIndexOrDefault(e.pointHoverBorderWidth, n, a.borderWidth);
          }, removeHoverStyle: function removeHoverStyle(t) {
            var e = this.chart.data.datasets[t._datasetIndex],
                i = t.custom || {},
                n = t._index,
                a = t._model,
                o = this.chart.options.elements.point;a.radius = i.radius ? i.radius : r.valueAtIndexOrDefault(e.pointRadius, n, o.radius), a.backgroundColor = i.backgroundColor ? i.backgroundColor : r.valueAtIndexOrDefault(e.pointBackgroundColor, n, o.backgroundColor), a.borderColor = i.borderColor ? i.borderColor : r.valueAtIndexOrDefault(e.pointBorderColor, n, o.borderColor), a.borderWidth = i.borderWidth ? i.borderWidth : r.valueAtIndexOrDefault(e.pointBorderWidth, n, o.borderWidth);
          } });
      };
    }, { 25: 25, 40: 40, 45: 45 }], 21: [function (t, e, i) {
      "use strict";
      t(25)._set("scatter", { hover: { mode: "single" }, scales: { xAxes: [{ id: "x-axis-1", type: "linear", position: "bottom" }], yAxes: [{ id: "y-axis-1", type: "linear", position: "left" }] }, showLines: !1, tooltips: { callbacks: { title: function title() {
              return "";
            }, label: function label(t) {
              return "(" + t.xLabel + ", " + t.yLabel + ")";
            } } } }), e.exports = function (t) {
        t.controllers.scatter = t.controllers.line;
      };
    }, { 25: 25 }], 22: [function (t, e, i) {
      "use strict";
      var n = t(25),
          a = t(26),
          r = t(45);n._set("global", { animation: { duration: 1e3, easing: "easeOutQuart", onProgress: r.noop, onComplete: r.noop } }), e.exports = function (t) {
        t.Animation = a.extend({ chart: null, currentStep: 0, numSteps: 60, easing: "", render: null, onAnimationProgress: null, onAnimationComplete: null }), t.animationService = { frameDuration: 17, animations: [], dropFrames: 0, request: null, addAnimation: function addAnimation(t, e, i, n) {
            var a,
                r,
                o = this.animations;for (e.chart = t, n || (t.animating = !0), a = 0, r = o.length; a < r; ++a) {
              if (o[a].chart === t) return void (o[a] = e);
            }o.push(e), 1 === o.length && this.requestAnimationFrame();
          }, cancelAnimation: function cancelAnimation(t) {
            var e = r.findIndex(this.animations, function (e) {
              return e.chart === t;
            });-1 !== e && (this.animations.splice(e, 1), t.animating = !1);
          }, requestAnimationFrame: function requestAnimationFrame() {
            var t = this;null === t.request && (t.request = r.requestAnimFrame.call(window, function () {
              t.request = null, t.startDigest();
            }));
          }, startDigest: function startDigest() {
            var t = this,
                e = Date.now(),
                i = 0;t.dropFrames > 1 && (i = Math.floor(t.dropFrames), t.dropFrames = t.dropFrames % 1), t.advance(1 + i);var n = Date.now();t.dropFrames += (n - e) / t.frameDuration, t.animations.length > 0 && t.requestAnimationFrame();
          }, advance: function advance(t) {
            for (var e, i, n = this.animations, a = 0; a < n.length;) {
              i = (e = n[a]).chart, e.currentStep = (e.currentStep || 0) + t, e.currentStep = Math.min(e.currentStep, e.numSteps), r.callback(e.render, [i, e], i), r.callback(e.onAnimationProgress, [e], i), e.currentStep >= e.numSteps ? (r.callback(e.onAnimationComplete, [e], i), i.animating = !1, n.splice(a, 1)) : ++a;
            }
          } }, Object.defineProperty(t.Animation.prototype, "animationObject", { get: function get() {
            return this;
          } }), Object.defineProperty(t.Animation.prototype, "chartInstance", { get: function get() {
            return this.chart;
          }, set: function set(t) {
            this.chart = t;
          } });
      };
    }, { 25: 25, 26: 26, 45: 45 }], 23: [function (t, e, i) {
      "use strict";
      var n = t(25),
          a = t(45),
          r = t(28),
          o = t(30),
          s = t(48),
          l = t(31);e.exports = function (t) {
        function e(t) {
          return "top" === t || "bottom" === t;
        }t.types = {}, t.instances = {}, t.controllers = {}, a.extend(t.prototype, { construct: function construct(e, i) {
            var r,
                o,
                l = this;(o = (r = (r = i) || {}).data = r.data || {}).datasets = o.datasets || [], o.labels = o.labels || [], r.options = a.configMerge(n.global, n[r.type], r.options || {}), i = r;var u = s.acquireContext(e, i),
                d = u && u.canvas,
                h = d && d.height,
                c = d && d.width;l.id = a.uid(), l.ctx = u, l.canvas = d, l.config = i, l.width = c, l.height = h, l.aspectRatio = h ? c / h : null, l.options = i.options, l._bufferedRender = !1, l.chart = l, l.controller = l, t.instances[l.id] = l, Object.defineProperty(l, "data", { get: function get() {
                return l.config.data;
              }, set: function set(t) {
                l.config.data = t;
              } }), u && d ? (l.initialize(), l.update()) : console.error("Failed to create chart: can't acquire context from the given item");
          }, initialize: function initialize() {
            var t = this;return l.notify(t, "beforeInit"), a.retinaScale(t, t.options.devicePixelRatio), t.bindEvents(), t.options.responsive && t.resize(!0), t.ensureScalesHaveIDs(), t.buildOrUpdateScales(), t.initToolTip(), l.notify(t, "afterInit"), t;
          }, clear: function clear() {
            return a.canvas.clear(this), this;
          }, stop: function stop() {
            return t.animationService.cancelAnimation(this), this;
          }, resize: function resize(t) {
            var e = this,
                i = e.options,
                n = e.canvas,
                r = i.maintainAspectRatio && e.aspectRatio || null,
                o = Math.max(0, Math.floor(a.getMaximumWidth(n))),
                s = Math.max(0, Math.floor(r ? o / r : a.getMaximumHeight(n)));if ((e.width !== o || e.height !== s) && (n.width = e.width = o, n.height = e.height = s, n.style.width = o + "px", n.style.height = s + "px", a.retinaScale(e, i.devicePixelRatio), !t)) {
              var u = { width: o, height: s };l.notify(e, "resize", [u]), e.options.onResize && e.options.onResize(e, u), e.stop(), e.update(e.options.responsiveAnimationDuration);
            }
          }, ensureScalesHaveIDs: function ensureScalesHaveIDs() {
            var t = this.options,
                e = t.scales || {},
                i = t.scale;a.each(e.xAxes, function (t, e) {
              t.id = t.id || "x-axis-" + e;
            }), a.each(e.yAxes, function (t, e) {
              t.id = t.id || "y-axis-" + e;
            }), i && (i.id = i.id || "scale");
          }, buildOrUpdateScales: function buildOrUpdateScales() {
            var i = this,
                n = i.options,
                r = i.scales || {},
                o = [],
                s = Object.keys(r).reduce(function (t, e) {
              return t[e] = !1, t;
            }, {});n.scales && (o = o.concat((n.scales.xAxes || []).map(function (t) {
              return { options: t, dtype: "category", dposition: "bottom" };
            }), (n.scales.yAxes || []).map(function (t) {
              return { options: t, dtype: "linear", dposition: "left" };
            }))), n.scale && o.push({ options: n.scale, dtype: "radialLinear", isDefault: !0, dposition: "chartArea" }), a.each(o, function (n) {
              var o = n.options,
                  l = o.id,
                  u = a.valueOrDefault(o.type, n.dtype);e(o.position) !== e(n.dposition) && (o.position = n.dposition), s[l] = !0;var d = null;if (l in r && r[l].type === u) (d = r[l]).options = o, d.ctx = i.ctx, d.chart = i;else {
                var h = t.scaleService.getScaleConstructor(u);if (!h) return;d = new h({ id: l, type: u, options: o, ctx: i.ctx, chart: i }), r[d.id] = d;
              }d.mergeTicksOptions(), n.isDefault && (i.scale = d);
            }), a.each(s, function (t, e) {
              t || delete r[e];
            }), i.scales = r, t.scaleService.addScalesToLayout(this);
          }, buildOrUpdateControllers: function buildOrUpdateControllers() {
            var e = this,
                i = [],
                n = [];return a.each(e.data.datasets, function (a, r) {
              var o = e.getDatasetMeta(r),
                  s = a.type || e.config.type;if (o.type && o.type !== s && (e.destroyDatasetMeta(r), o = e.getDatasetMeta(r)), o.type = s, i.push(o.type), o.controller) o.controller.updateIndex(r), o.controller.linkScales();else {
                var l = t.controllers[o.type];if (void 0 === l) throw new Error('"' + o.type + '" is not a chart type.');o.controller = new l(e, r), n.push(o.controller);
              }
            }, e), n;
          }, resetElements: function resetElements() {
            var t = this;a.each(t.data.datasets, function (e, i) {
              t.getDatasetMeta(i).controller.reset();
            }, t);
          }, reset: function reset() {
            this.resetElements(), this.tooltip.initialize();
          }, update: function update(e) {
            var i,
                n,
                r = this;if (e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) || (e = { duration: e, lazy: arguments[1] }), n = (i = r).options, a.each(i.scales, function (t) {
              o.removeBox(i, t);
            }), n = a.configMerge(t.defaults.global, t.defaults[i.config.type], n), i.options = i.config.options = n, i.ensureScalesHaveIDs(), i.buildOrUpdateScales(), i.tooltip._options = n.tooltips, i.tooltip.initialize(), l._invalidate(r), !1 !== l.notify(r, "beforeUpdate")) {
              r.tooltip._data = r.data;var s = r.buildOrUpdateControllers();a.each(r.data.datasets, function (t, e) {
                r.getDatasetMeta(e).controller.buildOrUpdateElements();
              }, r), r.updateLayout(), r.options.animation && r.options.animation.duration && a.each(s, function (t) {
                t.reset();
              }), r.updateDatasets(), r.tooltip.initialize(), r.lastActive = [], l.notify(r, "afterUpdate"), r._bufferedRender ? r._bufferedRequest = { duration: e.duration, easing: e.easing, lazy: e.lazy } : r.render(e);
            }
          }, updateLayout: function updateLayout() {
            !1 !== l.notify(this, "beforeLayout") && (o.update(this, this.width, this.height), l.notify(this, "afterScaleUpdate"), l.notify(this, "afterLayout"));
          }, updateDatasets: function updateDatasets() {
            if (!1 !== l.notify(this, "beforeDatasetsUpdate")) {
              for (var t = 0, e = this.data.datasets.length; t < e; ++t) {
                this.updateDataset(t);
              }l.notify(this, "afterDatasetsUpdate");
            }
          }, updateDataset: function updateDataset(t) {
            var e = this.getDatasetMeta(t),
                i = { meta: e, index: t };!1 !== l.notify(this, "beforeDatasetUpdate", [i]) && (e.controller.update(), l.notify(this, "afterDatasetUpdate", [i]));
          }, render: function render(e) {
            var i = this;e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) || (e = { duration: e, lazy: arguments[1] });var n = e.duration,
                r = e.lazy;if (!1 !== l.notify(i, "beforeRender")) {
              var o = i.options.animation,
                  s = function s(t) {
                l.notify(i, "afterRender"), a.callback(o && o.onComplete, [t], i);
              };if (o && (void 0 !== n && 0 !== n || void 0 === n && 0 !== o.duration)) {
                var u = new t.Animation({ numSteps: (n || o.duration) / 16.66, easing: e.easing || o.easing, render: function render(t, e) {
                    var i = a.easing.effects[e.easing],
                        n = e.currentStep,
                        r = n / e.numSteps;t.draw(i(r), r, n);
                  }, onAnimationProgress: o.onProgress, onAnimationComplete: s });t.animationService.addAnimation(i, u, n, r);
              } else i.draw(), s(new t.Animation({ numSteps: 0, chart: i }));return i;
            }
          }, draw: function draw(t) {
            var e = this;e.clear(), a.isNullOrUndef(t) && (t = 1), e.transition(t), !1 !== l.notify(e, "beforeDraw", [t]) && (a.each(e.boxes, function (t) {
              t.draw(e.chartArea);
            }, e), e.scale && e.scale.draw(), e.drawDatasets(t), e._drawTooltip(t), l.notify(e, "afterDraw", [t]));
          }, transition: function transition(t) {
            for (var e = 0, i = (this.data.datasets || []).length; e < i; ++e) {
              this.isDatasetVisible(e) && this.getDatasetMeta(e).controller.transition(t);
            }this.tooltip.transition(t);
          }, drawDatasets: function drawDatasets(t) {
            var e = this;if (!1 !== l.notify(e, "beforeDatasetsDraw", [t])) {
              for (var i = (e.data.datasets || []).length - 1; i >= 0; --i) {
                e.isDatasetVisible(i) && e.drawDataset(i, t);
              }l.notify(e, "afterDatasetsDraw", [t]);
            }
          }, drawDataset: function drawDataset(t, e) {
            var i = this.getDatasetMeta(t),
                n = { meta: i, index: t, easingValue: e };!1 !== l.notify(this, "beforeDatasetDraw", [n]) && (i.controller.draw(e), l.notify(this, "afterDatasetDraw", [n]));
          }, _drawTooltip: function _drawTooltip(t) {
            var e = this.tooltip,
                i = { tooltip: e, easingValue: t };!1 !== l.notify(this, "beforeTooltipDraw", [i]) && (e.draw(), l.notify(this, "afterTooltipDraw", [i]));
          }, getElementAtEvent: function getElementAtEvent(t) {
            return r.modes.single(this, t);
          }, getElementsAtEvent: function getElementsAtEvent(t) {
            return r.modes.label(this, t, { intersect: !0 });
          }, getElementsAtXAxis: function getElementsAtXAxis(t) {
            return r.modes["x-axis"](this, t, { intersect: !0 });
          }, getElementsAtEventForMode: function getElementsAtEventForMode(t, e, i) {
            var n = r.modes[e];return "function" == typeof n ? n(this, t, i) : [];
          }, getDatasetAtEvent: function getDatasetAtEvent(t) {
            return r.modes.dataset(this, t, { intersect: !0 });
          }, getDatasetMeta: function getDatasetMeta(t) {
            var e = this.data.datasets[t];e._meta || (e._meta = {});var i = e._meta[this.id];return i || (i = e._meta[this.id] = { type: null, data: [], dataset: null, controller: null, hidden: null, xAxisID: null, yAxisID: null }), i;
          }, getVisibleDatasetCount: function getVisibleDatasetCount() {
            for (var t = 0, e = 0, i = this.data.datasets.length; e < i; ++e) {
              this.isDatasetVisible(e) && t++;
            }return t;
          }, isDatasetVisible: function isDatasetVisible(t) {
            var e = this.getDatasetMeta(t);return "boolean" == typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden;
          }, generateLegend: function generateLegend() {
            return this.options.legendCallback(this);
          }, destroyDatasetMeta: function destroyDatasetMeta(t) {
            var e = this.id,
                i = this.data.datasets[t],
                n = i._meta && i._meta[e];n && (n.controller.destroy(), delete i._meta[e]);
          }, destroy: function destroy() {
            var e,
                i,
                n = this,
                r = n.canvas;for (n.stop(), e = 0, i = n.data.datasets.length; e < i; ++e) {
              n.destroyDatasetMeta(e);
            }r && (n.unbindEvents(), a.canvas.clear(n), s.releaseContext(n.ctx), n.canvas = null, n.ctx = null), l.notify(n, "destroy"), delete t.instances[n.id];
          }, toBase64Image: function toBase64Image() {
            return this.canvas.toDataURL.apply(this.canvas, arguments);
          }, initToolTip: function initToolTip() {
            var e = this;e.tooltip = new t.Tooltip({ _chart: e, _chartInstance: e, _data: e.data, _options: e.options.tooltips }, e);
          }, bindEvents: function bindEvents() {
            var t = this,
                e = t._listeners = {},
                i = function i() {
              t.eventHandler.apply(t, arguments);
            };a.each(t.options.events, function (n) {
              s.addEventListener(t, n, i), e[n] = i;
            }), t.options.responsive && (i = function i() {
              t.resize();
            }, s.addEventListener(t, "resize", i), e.resize = i);
          }, unbindEvents: function unbindEvents() {
            var t = this,
                e = t._listeners;e && (delete t._listeners, a.each(e, function (e, i) {
              s.removeEventListener(t, i, e);
            }));
          }, updateHoverStyle: function updateHoverStyle(t, e, i) {
            var n,
                a,
                r,
                o = i ? "setHoverStyle" : "removeHoverStyle";for (a = 0, r = t.length; a < r; ++a) {
              (n = t[a]) && this.getDatasetMeta(n._datasetIndex).controller[o](n);
            }
          }, eventHandler: function eventHandler(t) {
            var e = this,
                i = e.tooltip;if (!1 !== l.notify(e, "beforeEvent", [t])) {
              e._bufferedRender = !0, e._bufferedRequest = null;var n = e.handleEvent(t);i && (n = i._start ? i.handleEvent(t) : n | i.handleEvent(t)), l.notify(e, "afterEvent", [t]);var a = e._bufferedRequest;return a ? e.render(a) : n && !e.animating && (e.stop(), e.render(e.options.hover.animationDuration, !0)), e._bufferedRender = !1, e._bufferedRequest = null, e;
            }
          }, handleEvent: function handleEvent(t) {
            var e,
                i = this,
                n = i.options || {},
                r = n.hover;return i.lastActive = i.lastActive || [], "mouseout" === t.type ? i.active = [] : i.active = i.getElementsAtEventForMode(t, r.mode, r), a.callback(n.onHover || n.hover.onHover, [t.native, i.active], i), "mouseup" !== t.type && "click" !== t.type || n.onClick && n.onClick.call(i, t.native, i.active), i.lastActive.length && i.updateHoverStyle(i.lastActive, r.mode, !1), i.active.length && r.mode && i.updateHoverStyle(i.active, r.mode, !0), e = !a.arrayEquals(i.active, i.lastActive), i.lastActive = i.active, e;
          } }), t.Controller = t;
      };
    }, { 25: 25, 28: 28, 30: 30, 31: 31, 45: 45, 48: 48 }], 24: [function (t, e, i) {
      "use strict";
      var n = t(45);e.exports = function (t) {
        var e = ["push", "pop", "shift", "splice", "unshift"];function i(t, i) {
          var n = t._chartjs;if (n) {
            var a = n.listeners,
                r = a.indexOf(i);-1 !== r && a.splice(r, 1), a.length > 0 || (e.forEach(function (e) {
              delete t[e];
            }), delete t._chartjs);
          }
        }t.DatasetController = function (t, e) {
          this.initialize(t, e);
        }, n.extend(t.DatasetController.prototype, { datasetElementType: null, dataElementType: null, initialize: function initialize(t, e) {
            this.chart = t, this.index = e, this.linkScales(), this.addElements();
          }, updateIndex: function updateIndex(t) {
            this.index = t;
          }, linkScales: function linkScales() {
            var t = this,
                e = t.getMeta(),
                i = t.getDataset();null !== e.xAxisID && e.xAxisID in t.chart.scales || (e.xAxisID = i.xAxisID || t.chart.options.scales.xAxes[0].id), null !== e.yAxisID && e.yAxisID in t.chart.scales || (e.yAxisID = i.yAxisID || t.chart.options.scales.yAxes[0].id);
          }, getDataset: function getDataset() {
            return this.chart.data.datasets[this.index];
          }, getMeta: function getMeta() {
            return this.chart.getDatasetMeta(this.index);
          }, getScaleForId: function getScaleForId(t) {
            return this.chart.scales[t];
          }, reset: function reset() {
            this.update(!0);
          }, destroy: function destroy() {
            this._data && i(this._data, this);
          }, createMetaDataset: function createMetaDataset() {
            var t = this.datasetElementType;return t && new t({ _chart: this.chart, _datasetIndex: this.index });
          }, createMetaData: function createMetaData(t) {
            var e = this.dataElementType;return e && new e({ _chart: this.chart, _datasetIndex: this.index, _index: t });
          }, addElements: function addElements() {
            var t,
                e,
                i = this.getMeta(),
                n = this.getDataset().data || [],
                a = i.data;for (t = 0, e = n.length; t < e; ++t) {
              a[t] = a[t] || this.createMetaData(t);
            }i.dataset = i.dataset || this.createMetaDataset();
          }, addElementAndReset: function addElementAndReset(t) {
            var e = this.createMetaData(t);this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0);
          }, buildOrUpdateElements: function buildOrUpdateElements() {
            var t,
                a,
                r = this,
                o = r.getDataset(),
                s = o.data || (o.data = []);r._data !== s && (r._data && i(r._data, r), a = r, (t = s)._chartjs ? t._chartjs.listeners.push(a) : (Object.defineProperty(t, "_chartjs", { configurable: !0, enumerable: !1, value: { listeners: [a] } }), e.forEach(function (e) {
              var i = "onData" + e.charAt(0).toUpperCase() + e.slice(1),
                  a = t[e];Object.defineProperty(t, e, { configurable: !0, enumerable: !1, value: function value() {
                  var e = Array.prototype.slice.call(arguments),
                      r = a.apply(this, e);return n.each(t._chartjs.listeners, function (t) {
                    "function" == typeof t[i] && t[i].apply(t, e);
                  }), r;
                } });
            })), r._data = s), r.resyncElements();
          }, update: n.noop, transition: function transition(t) {
            for (var e = this.getMeta(), i = e.data || [], n = i.length, a = 0; a < n; ++a) {
              i[a].transition(t);
            }e.dataset && e.dataset.transition(t);
          }, draw: function draw() {
            var t = this.getMeta(),
                e = t.data || [],
                i = e.length,
                n = 0;for (t.dataset && t.dataset.draw(); n < i; ++n) {
              e[n].draw();
            }
          }, removeHoverStyle: function removeHoverStyle(t, e) {
            var i = this.chart.data.datasets[t._datasetIndex],
                a = t._index,
                r = t.custom || {},
                o = n.valueAtIndexOrDefault,
                s = t._model;s.backgroundColor = r.backgroundColor ? r.backgroundColor : o(i.backgroundColor, a, e.backgroundColor), s.borderColor = r.borderColor ? r.borderColor : o(i.borderColor, a, e.borderColor), s.borderWidth = r.borderWidth ? r.borderWidth : o(i.borderWidth, a, e.borderWidth);
          }, setHoverStyle: function setHoverStyle(t) {
            var e = this.chart.data.datasets[t._datasetIndex],
                i = t._index,
                a = t.custom || {},
                r = n.valueAtIndexOrDefault,
                o = n.getHoverColor,
                s = t._model;s.backgroundColor = a.hoverBackgroundColor ? a.hoverBackgroundColor : r(e.hoverBackgroundColor, i, o(s.backgroundColor)), s.borderColor = a.hoverBorderColor ? a.hoverBorderColor : r(e.hoverBorderColor, i, o(s.borderColor)), s.borderWidth = a.hoverBorderWidth ? a.hoverBorderWidth : r(e.hoverBorderWidth, i, s.borderWidth);
          }, resyncElements: function resyncElements() {
            var t = this.getMeta(),
                e = this.getDataset().data,
                i = t.data.length,
                n = e.length;n < i ? t.data.splice(n, i - n) : n > i && this.insertElements(i, n - i);
          }, insertElements: function insertElements(t, e) {
            for (var i = 0; i < e; ++i) {
              this.addElementAndReset(t + i);
            }
          }, onDataPush: function onDataPush() {
            this.insertElements(this.getDataset().data.length - 1, arguments.length);
          }, onDataPop: function onDataPop() {
            this.getMeta().data.pop();
          }, onDataShift: function onDataShift() {
            this.getMeta().data.shift();
          }, onDataSplice: function onDataSplice(t, e) {
            this.getMeta().data.splice(t, e), this.insertElements(t, arguments.length - 2);
          }, onDataUnshift: function onDataUnshift() {
            this.insertElements(0, arguments.length);
          } }), t.DatasetController.extend = n.inherits;
      };
    }, { 45: 45 }], 25: [function (t, e, i) {
      "use strict";
      var n = t(45);e.exports = { _set: function _set(t, e) {
          return n.merge(this[t] || (this[t] = {}), e);
        } };
    }, { 45: 45 }], 26: [function (t, e, i) {
      "use strict";
      var n = t(2),
          a = t(45);var r = function r(t) {
        a.extend(this, t), this.initialize.apply(this, arguments);
      };a.extend(r.prototype, { initialize: function initialize() {
          this.hidden = !1;
        }, pivot: function pivot() {
          var t = this;return t._view || (t._view = a.clone(t._model)), t._start = {}, t;
        }, transition: function transition(t) {
          var e = this,
              i = e._model,
              a = e._start,
              r = e._view;return i && 1 !== t ? (r || (r = e._view = {}), a || (a = e._start = {}), function (t, e, i, a) {
            var r,
                o,
                s,
                l,
                u,
                d,
                h,
                c,
                f,
                g = Object.keys(i);for (r = 0, o = g.length; r < o; ++r) {
              if (d = i[s = g[r]], e.hasOwnProperty(s) || (e[s] = d), (l = e[s]) !== d && "_" !== s[0]) {
                if (t.hasOwnProperty(s) || (t[s] = l), (h = typeof d === "undefined" ? "undefined" : _typeof(d)) == _typeof(u = t[s])) if ("string" === h) {
                  if ((c = n(u)).valid && (f = n(d)).valid) {
                    e[s] = f.mix(c, a).rgbString();continue;
                  }
                } else if ("number" === h && isFinite(u) && isFinite(d)) {
                  e[s] = u + (d - u) * a;continue;
                }e[s] = d;
              }
            }
          }(a, r, i, t), e) : (e._view = i, e._start = null, e);
        }, tooltipPosition: function tooltipPosition() {
          return { x: this._model.x, y: this._model.y };
        }, hasValue: function hasValue() {
          return a.isNumber(this._model.x) && a.isNumber(this._model.y);
        } }), r.extend = a.inherits, e.exports = r;
    }, { 2: 2, 45: 45 }], 27: [function (t, e, i) {
      "use strict";
      var n = t(2),
          a = t(25),
          r = t(45);e.exports = function (t) {
        function e(t, e, i) {
          var n;return "string" == typeof t ? (n = parseInt(t, 10), -1 !== t.indexOf("%") && (n = n / 100 * e.parentNode[i])) : n = t, n;
        }function i(t) {
          return null != t && "none" !== t;
        }function o(t, n, a) {
          var r = document.defaultView,
              o = t.parentNode,
              s = r.getComputedStyle(t)[n],
              l = r.getComputedStyle(o)[n],
              u = i(s),
              d = i(l),
              h = Number.POSITIVE_INFINITY;return u || d ? Math.min(u ? e(s, t, a) : h, d ? e(l, o, a) : h) : "none";
        }r.configMerge = function () {
          return r.merge(r.clone(arguments[0]), [].slice.call(arguments, 1), { merger: function merger(e, i, n, a) {
              var o = i[e] || {},
                  s = n[e];"scales" === e ? i[e] = r.scaleMerge(o, s) : "scale" === e ? i[e] = r.merge(o, [t.scaleService.getScaleDefaults(s.type), s]) : r._merger(e, i, n, a);
            } });
        }, r.scaleMerge = function () {
          return r.merge(r.clone(arguments[0]), [].slice.call(arguments, 1), { merger: function merger(e, i, n, a) {
              if ("xAxes" === e || "yAxes" === e) {
                var o,
                    s,
                    l,
                    u = n[e].length;for (i[e] || (i[e] = []), o = 0; o < u; ++o) {
                  l = n[e][o], s = r.valueOrDefault(l.type, "xAxes" === e ? "category" : "linear"), o >= i[e].length && i[e].push({}), !i[e][o].type || l.type && l.type !== i[e][o].type ? r.merge(i[e][o], [t.scaleService.getScaleDefaults(s), l]) : r.merge(i[e][o], l);
                }
              } else r._merger(e, i, n, a);
            } });
        }, r.where = function (t, e) {
          if (r.isArray(t) && Array.prototype.filter) return t.filter(e);var i = [];return r.each(t, function (t) {
            e(t) && i.push(t);
          }), i;
        }, r.findIndex = Array.prototype.findIndex ? function (t, e, i) {
          return t.findIndex(e, i);
        } : function (t, e, i) {
          i = void 0 === i ? t : i;for (var n = 0, a = t.length; n < a; ++n) {
            if (e.call(i, t[n], n, t)) return n;
          }return -1;
        }, r.findNextWhere = function (t, e, i) {
          r.isNullOrUndef(i) && (i = -1);for (var n = i + 1; n < t.length; n++) {
            var a = t[n];if (e(a)) return a;
          }
        }, r.findPreviousWhere = function (t, e, i) {
          r.isNullOrUndef(i) && (i = t.length);for (var n = i - 1; n >= 0; n--) {
            var a = t[n];if (e(a)) return a;
          }
        }, r.isNumber = function (t) {
          return !isNaN(parseFloat(t)) && isFinite(t);
        }, r.almostEquals = function (t, e, i) {
          return Math.abs(t - e) < i;
        }, r.almostWhole = function (t, e) {
          var i = Math.round(t);return i - e < t && i + e > t;
        }, r.max = function (t) {
          return t.reduce(function (t, e) {
            return isNaN(e) ? t : Math.max(t, e);
          }, Number.NEGATIVE_INFINITY);
        }, r.min = function (t) {
          return t.reduce(function (t, e) {
            return isNaN(e) ? t : Math.min(t, e);
          }, Number.POSITIVE_INFINITY);
        }, r.sign = Math.sign ? function (t) {
          return Math.sign(t);
        } : function (t) {
          return 0 === (t = +t) || isNaN(t) ? t : t > 0 ? 1 : -1;
        }, r.log10 = Math.log10 ? function (t) {
          return Math.log10(t);
        } : function (t) {
          var e = Math.log(t) * Math.LOG10E,
              i = Math.round(e);return t === Math.pow(10, i) ? i : e;
        }, r.toRadians = function (t) {
          return t * (Math.PI / 180);
        }, r.toDegrees = function (t) {
          return t * (180 / Math.PI);
        }, r.getAngleFromPoint = function (t, e) {
          var i = e.x - t.x,
              n = e.y - t.y,
              a = Math.sqrt(i * i + n * n),
              r = Math.atan2(n, i);return r < -.5 * Math.PI && (r += 2 * Math.PI), { angle: r, distance: a };
        }, r.distanceBetweenPoints = function (t, e) {
          return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
        }, r.aliasPixel = function (t) {
          return t % 2 == 0 ? 0 : .5;
        }, r.splineCurve = function (t, e, i, n) {
          var a = t.skip ? e : t,
              r = e,
              o = i.skip ? e : i,
              s = Math.sqrt(Math.pow(r.x - a.x, 2) + Math.pow(r.y - a.y, 2)),
              l = Math.sqrt(Math.pow(o.x - r.x, 2) + Math.pow(o.y - r.y, 2)),
              u = s / (s + l),
              d = l / (s + l),
              h = n * (u = isNaN(u) ? 0 : u),
              c = n * (d = isNaN(d) ? 0 : d);return { previous: { x: r.x - h * (o.x - a.x), y: r.y - h * (o.y - a.y) }, next: { x: r.x + c * (o.x - a.x), y: r.y + c * (o.y - a.y) } };
        }, r.EPSILON = Number.EPSILON || 1e-14, r.splineCurveMonotone = function (t) {
          var e,
              i,
              n,
              a,
              o,
              s,
              l,
              u,
              d,
              h = (t || []).map(function (t) {
            return { model: t._model, deltaK: 0, mK: 0 };
          }),
              c = h.length;for (e = 0; e < c; ++e) {
            if (!(n = h[e]).model.skip) {
              if (i = e > 0 ? h[e - 1] : null, (a = e < c - 1 ? h[e + 1] : null) && !a.model.skip) {
                var f = a.model.x - n.model.x;n.deltaK = 0 !== f ? (a.model.y - n.model.y) / f : 0;
              }!i || i.model.skip ? n.mK = n.deltaK : !a || a.model.skip ? n.mK = i.deltaK : this.sign(i.deltaK) !== this.sign(n.deltaK) ? n.mK = 0 : n.mK = (i.deltaK + n.deltaK) / 2;
            }
          }for (e = 0; e < c - 1; ++e) {
            n = h[e], a = h[e + 1], n.model.skip || a.model.skip || (r.almostEquals(n.deltaK, 0, this.EPSILON) ? n.mK = a.mK = 0 : (o = n.mK / n.deltaK, s = a.mK / n.deltaK, (u = Math.pow(o, 2) + Math.pow(s, 2)) <= 9 || (l = 3 / Math.sqrt(u), n.mK = o * l * n.deltaK, a.mK = s * l * n.deltaK)));
          }for (e = 0; e < c; ++e) {
            (n = h[e]).model.skip || (i = e > 0 ? h[e - 1] : null, a = e < c - 1 ? h[e + 1] : null, i && !i.model.skip && (d = (n.model.x - i.model.x) / 3, n.model.controlPointPreviousX = n.model.x - d, n.model.controlPointPreviousY = n.model.y - d * n.mK), a && !a.model.skip && (d = (a.model.x - n.model.x) / 3, n.model.controlPointNextX = n.model.x + d, n.model.controlPointNextY = n.model.y + d * n.mK));
          }
        }, r.nextItem = function (t, e, i) {
          return i ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1];
        }, r.previousItem = function (t, e, i) {
          return i ? e <= 0 ? t[t.length - 1] : t[e - 1] : e <= 0 ? t[0] : t[e - 1];
        }, r.niceNum = function (t, e) {
          var i = Math.floor(r.log10(t)),
              n = t / Math.pow(10, i);return (e ? n < 1.5 ? 1 : n < 3 ? 2 : n < 7 ? 5 : 10 : n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * Math.pow(10, i);
        }, r.requestAnimFrame = "undefined" == typeof window ? function (t) {
          t();
        } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
          return window.setTimeout(t, 1e3 / 60);
        }, r.getRelativePosition = function (t, e) {
          var i,
              n,
              a = t.originalEvent || t,
              o = t.currentTarget || t.srcElement,
              s = o.getBoundingClientRect(),
              l = a.touches;l && l.length > 0 ? (i = l[0].clientX, n = l[0].clientY) : (i = a.clientX, n = a.clientY);var u = parseFloat(r.getStyle(o, "padding-left")),
              d = parseFloat(r.getStyle(o, "padding-top")),
              h = parseFloat(r.getStyle(o, "padding-right")),
              c = parseFloat(r.getStyle(o, "padding-bottom")),
              f = s.right - s.left - u - h,
              g = s.bottom - s.top - d - c;return { x: i = Math.round((i - s.left - u) / f * o.width / e.currentDevicePixelRatio), y: n = Math.round((n - s.top - d) / g * o.height / e.currentDevicePixelRatio) };
        }, r.getConstraintWidth = function (t) {
          return o(t, "max-width", "clientWidth");
        }, r.getConstraintHeight = function (t) {
          return o(t, "max-height", "clientHeight");
        }, r.getMaximumWidth = function (t) {
          var e = t.parentNode;if (!e) return t.clientWidth;var i = parseInt(r.getStyle(e, "padding-left"), 10),
              n = parseInt(r.getStyle(e, "padding-right"), 10),
              a = e.clientWidth - i - n,
              o = r.getConstraintWidth(t);return isNaN(o) ? a : Math.min(a, o);
        }, r.getMaximumHeight = function (t) {
          var e = t.parentNode;if (!e) return t.clientHeight;var i = parseInt(r.getStyle(e, "padding-top"), 10),
              n = parseInt(r.getStyle(e, "padding-bottom"), 10),
              a = e.clientHeight - i - n,
              o = r.getConstraintHeight(t);return isNaN(o) ? a : Math.min(a, o);
        }, r.getStyle = function (t, e) {
          return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e);
        }, r.retinaScale = function (t, e) {
          var i = t.currentDevicePixelRatio = e || window.devicePixelRatio || 1;if (1 !== i) {
            var n = t.canvas,
                a = t.height,
                r = t.width;n.height = a * i, n.width = r * i, t.ctx.scale(i, i), n.style.height || n.style.width || (n.style.height = a + "px", n.style.width = r + "px");
          }
        }, r.fontString = function (t, e, i) {
          return e + " " + t + "px " + i;
        }, r.longestText = function (t, e, i, n) {
          var a = (n = n || {}).data = n.data || {},
              o = n.garbageCollect = n.garbageCollect || [];n.font !== e && (a = n.data = {}, o = n.garbageCollect = [], n.font = e), t.font = e;var s = 0;r.each(i, function (e) {
            null != e && !0 !== r.isArray(e) ? s = r.measureText(t, a, o, s, e) : r.isArray(e) && r.each(e, function (e) {
              null == e || r.isArray(e) || (s = r.measureText(t, a, o, s, e));
            });
          });var l = o.length / 2;if (l > i.length) {
            for (var u = 0; u < l; u++) {
              delete a[o[u]];
            }o.splice(0, l);
          }return s;
        }, r.measureText = function (t, e, i, n, a) {
          var r = e[a];return r || (r = e[a] = t.measureText(a).width, i.push(a)), r > n && (n = r), n;
        }, r.numberOfLabelLines = function (t) {
          var e = 1;return r.each(t, function (t) {
            r.isArray(t) && t.length > e && (e = t.length);
          }), e;
        }, r.color = n ? function (t) {
          return t instanceof CanvasGradient && (t = a.global.defaultColor), n(t);
        } : function (t) {
          return console.error("Color.js not found!"), t;
        }, r.getHoverColor = function (t) {
          return t instanceof CanvasPattern ? t : r.color(t).saturate(.5).darken(.1).rgbString();
        };
      };
    }, { 2: 2, 25: 25, 45: 45 }], 28: [function (t, e, i) {
      "use strict";
      var n = t(45);function a(t, e) {
        return t.native ? { x: t.x, y: t.y } : n.getRelativePosition(t, e);
      }function r(t, e) {
        var i, n, a, r, o;for (n = 0, r = t.data.datasets.length; n < r; ++n) {
          if (t.isDatasetVisible(n)) for (a = 0, o = (i = t.getDatasetMeta(n)).data.length; a < o; ++a) {
            var s = i.data[a];s._view.skip || e(s);
          }
        }
      }function o(t, e) {
        var i = [];return r(t, function (t) {
          t.inRange(e.x, e.y) && i.push(t);
        }), i;
      }function s(t, e, i, n) {
        var a = Number.POSITIVE_INFINITY,
            o = [];return r(t, function (t) {
          if (!i || t.inRange(e.x, e.y)) {
            var r = t.getCenterPoint(),
                s = n(e, r);s < a ? (o = [t], a = s) : s === a && o.push(t);
          }
        }), o;
      }function l(t) {
        var e = -1 !== t.indexOf("x"),
            i = -1 !== t.indexOf("y");return function (t, n) {
          var a = e ? Math.abs(t.x - n.x) : 0,
              r = i ? Math.abs(t.y - n.y) : 0;return Math.sqrt(Math.pow(a, 2) + Math.pow(r, 2));
        };
      }function u(t, e, i) {
        var n = a(e, t);i.axis = i.axis || "x";var r = l(i.axis),
            u = i.intersect ? o(t, n) : s(t, n, !1, r),
            d = [];return u.length ? (t.data.datasets.forEach(function (e, i) {
          if (t.isDatasetVisible(i)) {
            var n = t.getDatasetMeta(i).data[u[0]._index];n && !n._view.skip && d.push(n);
          }
        }), d) : [];
      }e.exports = { modes: { single: function single(t, e) {
            var i = a(e, t),
                n = [];return r(t, function (t) {
              if (t.inRange(i.x, i.y)) return n.push(t), n;
            }), n.slice(0, 1);
          }, label: u, index: u, dataset: function dataset(t, e, i) {
            var n = a(e, t);i.axis = i.axis || "xy";var r = l(i.axis),
                u = i.intersect ? o(t, n) : s(t, n, !1, r);return u.length > 0 && (u = t.getDatasetMeta(u[0]._datasetIndex).data), u;
          }, "x-axis": function xAxis(t, e) {
            return u(t, e, { intersect: !1 });
          }, point: function point(t, e) {
            return o(t, a(e, t));
          }, nearest: function nearest(t, e, i) {
            var n = a(e, t);i.axis = i.axis || "xy";var r = l(i.axis),
                o = s(t, n, i.intersect, r);return o.length > 1 && o.sort(function (t, e) {
              var i = t.getArea() - e.getArea();return 0 === i && (i = t._datasetIndex - e._datasetIndex), i;
            }), o.slice(0, 1);
          }, x: function x(t, e, i) {
            var n = a(e, t),
                o = [],
                s = !1;return r(t, function (t) {
              t.inXRange(n.x) && o.push(t), t.inRange(n.x, n.y) && (s = !0);
            }), i.intersect && !s && (o = []), o;
          }, y: function y(t, e, i) {
            var n = a(e, t),
                o = [],
                s = !1;return r(t, function (t) {
              t.inYRange(n.y) && o.push(t), t.inRange(n.x, n.y) && (s = !0);
            }), i.intersect && !s && (o = []), o;
          } } };
    }, { 45: 45 }], 29: [function (t, e, i) {
      "use strict";
      t(25)._set("global", { responsive: !0, responsiveAnimationDuration: 0, maintainAspectRatio: !0, events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"], hover: { onHover: null, mode: "nearest", intersect: !0, animationDuration: 400 }, onClick: null, defaultColor: "rgba(0,0,0,0.1)", defaultFontColor: "#666", defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif", defaultFontSize: 12, defaultFontStyle: "normal", showLines: !0, elements: {}, layout: { padding: { top: 0, right: 0, bottom: 0, left: 0 } } }), e.exports = function () {
        var t = function t(_t2, e) {
          return this.construct(_t2, e), this;
        };return t.Chart = t, t;
      };
    }, { 25: 25 }], 30: [function (t, e, i) {
      "use strict";
      var n = t(45);function a(t, e) {
        return n.where(t, function (t) {
          return t.position === e;
        });
      }function r(t, e) {
        t.forEach(function (t, e) {
          return t._tmpIndex_ = e, t;
        }), t.sort(function (t, i) {
          var n = e ? i : t,
              a = e ? t : i;return n.weight === a.weight ? n._tmpIndex_ - a._tmpIndex_ : n.weight - a.weight;
        }), t.forEach(function (t) {
          delete t._tmpIndex_;
        });
      }e.exports = { defaults: {}, addBox: function addBox(t, e) {
          t.boxes || (t.boxes = []), e.fullWidth = e.fullWidth || !1, e.position = e.position || "top", e.weight = e.weight || 0, t.boxes.push(e);
        }, removeBox: function removeBox(t, e) {
          var i = t.boxes ? t.boxes.indexOf(e) : -1;-1 !== i && t.boxes.splice(i, 1);
        }, configure: function configure(t, e, i) {
          for (var n, a = ["fullWidth", "position", "weight"], r = a.length, o = 0; o < r; ++o) {
            n = a[o], i.hasOwnProperty(n) && (e[n] = i[n]);
          }
        }, update: function update(t, e, i) {
          if (t) {
            var o = t.options.layout || {},
                s = n.options.toPadding(o.padding),
                l = s.left,
                u = s.right,
                d = s.top,
                h = s.bottom,
                c = a(t.boxes, "left"),
                f = a(t.boxes, "right"),
                g = a(t.boxes, "top"),
                m = a(t.boxes, "bottom"),
                p = a(t.boxes, "chartArea");r(c, !0), r(f, !1), r(g, !0), r(m, !1);var v = e - l - u,
                y = i - d - h,
                b = y / 2,
                x = (e - v / 2) / (c.length + f.length),
                _ = (i - b) / (g.length + m.length),
                k = v,
                w = y,
                M = [];n.each(c.concat(f, g, m), function (t) {
              var e,
                  i = t.isHorizontal();i ? (e = t.update(t.fullWidth ? v : k, _), w -= e.height) : (e = t.update(x, w), k -= e.width), M.push({ horizontal: i, minSize: e, box: t });
            });var S = 0,
                D = 0,
                C = 0,
                P = 0;n.each(g.concat(m), function (t) {
              if (t.getPadding) {
                var e = t.getPadding();S = Math.max(S, e.left), D = Math.max(D, e.right);
              }
            }), n.each(c.concat(f), function (t) {
              if (t.getPadding) {
                var e = t.getPadding();C = Math.max(C, e.top), P = Math.max(P, e.bottom);
              }
            });var T = l,
                O = u,
                I = d,
                A = h;n.each(c.concat(f), z), n.each(c, function (t) {
              T += t.width;
            }), n.each(f, function (t) {
              O += t.width;
            }), n.each(g.concat(m), z), n.each(g, function (t) {
              I += t.height;
            }), n.each(m, function (t) {
              A += t.height;
            }), n.each(c.concat(f), function (t) {
              var e = n.findNextWhere(M, function (e) {
                return e.box === t;
              }),
                  i = { left: 0, right: 0, top: I, bottom: A };e && t.update(e.minSize.width, w, i);
            }), T = l, O = u, I = d, A = h, n.each(c, function (t) {
              T += t.width;
            }), n.each(f, function (t) {
              O += t.width;
            }), n.each(g, function (t) {
              I += t.height;
            }), n.each(m, function (t) {
              A += t.height;
            });var F = Math.max(S - T, 0);T += F, O += Math.max(D - O, 0);var R = Math.max(C - I, 0);I += R, A += Math.max(P - A, 0);var L = i - I - A,
                W = e - T - O;W === k && L === w || (n.each(c, function (t) {
              t.height = L;
            }), n.each(f, function (t) {
              t.height = L;
            }), n.each(g, function (t) {
              t.fullWidth || (t.width = W);
            }), n.each(m, function (t) {
              t.fullWidth || (t.width = W);
            }), w = L, k = W);var Y = l + F,
                N = d + R;n.each(c.concat(g), H), Y += k, N += w, n.each(f, H), n.each(m, H), t.chartArea = { left: T, top: I, right: T + k, bottom: I + w }, n.each(p, function (e) {
              e.left = t.chartArea.left, e.top = t.chartArea.top, e.right = t.chartArea.right, e.bottom = t.chartArea.bottom, e.update(k, w);
            });
          }function z(t) {
            var e = n.findNextWhere(M, function (e) {
              return e.box === t;
            });if (e) if (t.isHorizontal()) {
              var i = { left: Math.max(T, S), right: Math.max(O, D), top: 0, bottom: 0 };t.update(t.fullWidth ? v : k, y / 2, i);
            } else t.update(e.minSize.width, w);
          }function H(t) {
            t.isHorizontal() ? (t.left = t.fullWidth ? l : T, t.right = t.fullWidth ? e - u : T + k, t.top = N, t.bottom = N + t.height, N = t.bottom) : (t.left = Y, t.right = Y + t.width, t.top = I, t.bottom = I + w, Y = t.right);
          }
        } };
    }, { 45: 45 }], 31: [function (t, e, i) {
      "use strict";
      var n = t(25),
          a = t(45);n._set("global", { plugins: {} }), e.exports = { _plugins: [], _cacheId: 0, register: function register(t) {
          var e = this._plugins;[].concat(t).forEach(function (t) {
            -1 === e.indexOf(t) && e.push(t);
          }), this._cacheId++;
        }, unregister: function unregister(t) {
          var e = this._plugins;[].concat(t).forEach(function (t) {
            var i = e.indexOf(t);-1 !== i && e.splice(i, 1);
          }), this._cacheId++;
        }, clear: function clear() {
          this._plugins = [], this._cacheId++;
        }, count: function count() {
          return this._plugins.length;
        }, getAll: function getAll() {
          return this._plugins;
        }, notify: function notify(t, e, i) {
          var n,
              a,
              r,
              o,
              s,
              l = this.descriptors(t),
              u = l.length;for (n = 0; n < u; ++n) {
            if ("function" == typeof (s = (r = (a = l[n]).plugin)[e]) && ((o = [t].concat(i || [])).push(a.options), !1 === s.apply(r, o))) return !1;
          }return !0;
        }, descriptors: function descriptors(t) {
          var e = t.$plugins || (t.$plugins = {});if (e.id === this._cacheId) return e.descriptors;var i = [],
              r = [],
              o = t && t.config || {},
              s = o.options && o.options.plugins || {};return this._plugins.concat(o.plugins || []).forEach(function (t) {
            if (-1 === i.indexOf(t)) {
              var e = t.id,
                  o = s[e];!1 !== o && (!0 === o && (o = a.clone(n.global.plugins[e])), i.push(t), r.push({ plugin: t, options: o || {} }));
            }
          }), e.descriptors = r, e.id = this._cacheId, r;
        }, _invalidate: function _invalidate(t) {
          delete t.$plugins;
        } };
    }, { 25: 25, 45: 45 }], 32: [function (t, e, i) {
      "use strict";
      var n = t(25),
          a = t(26),
          r = t(45),
          o = t(34);function s(t) {
        var e,
            i,
            n = [];for (e = 0, i = t.length; e < i; ++e) {
          n.push(t[e].label);
        }return n;
      }function l(t, e, i) {
        var n = t.getPixelForTick(e);return i && (n -= 0 === e ? (t.getPixelForTick(1) - n) / 2 : (n - t.getPixelForTick(e - 1)) / 2), n;
      }n._set("scale", { display: !0, position: "left", offset: !1, gridLines: { display: !0, color: "rgba(0, 0, 0, 0.1)", lineWidth: 1, drawBorder: !0, drawOnChartArea: !0, drawTicks: !0, tickMarkLength: 10, zeroLineWidth: 1, zeroLineColor: "rgba(0,0,0,0.25)", zeroLineBorderDash: [], zeroLineBorderDashOffset: 0, offsetGridLines: !1, borderDash: [], borderDashOffset: 0 }, scaleLabel: { display: !1, labelString: "", lineHeight: 1.2, padding: { top: 4, bottom: 4 } }, ticks: { beginAtZero: !1, minRotation: 0, maxRotation: 50, mirror: !1, padding: 0, reverse: !1, display: !0, autoSkip: !0, autoSkipPadding: 0, labelOffset: 0, callback: o.formatters.values, minor: {}, major: {} } }), e.exports = function (t) {
        function e(t, e, i) {
          return r.isArray(e) ? r.longestText(t, i, e) : t.measureText(e).width;
        }function i(t) {
          var e = r.valueOrDefault,
              i = n.global,
              a = e(t.fontSize, i.defaultFontSize),
              o = e(t.fontStyle, i.defaultFontStyle),
              s = e(t.fontFamily, i.defaultFontFamily);return { size: a, style: o, family: s, font: r.fontString(a, o, s) };
        }function o(t) {
          return r.options.toLineHeight(r.valueOrDefault(t.lineHeight, 1.2), r.valueOrDefault(t.fontSize, n.global.defaultFontSize));
        }t.Scale = a.extend({ getPadding: function getPadding() {
            return { left: this.paddingLeft || 0, top: this.paddingTop || 0, right: this.paddingRight || 0, bottom: this.paddingBottom || 0 };
          }, getTicks: function getTicks() {
            return this._ticks;
          }, mergeTicksOptions: function mergeTicksOptions() {
            var t = this.options.ticks;for (var e in !1 === t.minor && (t.minor = { display: !1 }), !1 === t.major && (t.major = { display: !1 }), t) {
              "major" !== e && "minor" !== e && (void 0 === t.minor[e] && (t.minor[e] = t[e]), void 0 === t.major[e] && (t.major[e] = t[e]));
            }
          }, beforeUpdate: function beforeUpdate() {
            r.callback(this.options.beforeUpdate, [this]);
          }, update: function update(t, e, i) {
            var n,
                a,
                o,
                s,
                l,
                u,
                d = this;for (d.beforeUpdate(), d.maxWidth = t, d.maxHeight = e, d.margins = r.extend({ left: 0, right: 0, top: 0, bottom: 0 }, i), d.longestTextCache = d.longestTextCache || {}, d.beforeSetDimensions(), d.setDimensions(), d.afterSetDimensions(), d.beforeDataLimits(), d.determineDataLimits(), d.afterDataLimits(), d.beforeBuildTicks(), l = d.buildTicks() || [], d.afterBuildTicks(), d.beforeTickToLabelConversion(), o = d.convertTicksToLabels(l) || d.ticks, d.afterTickToLabelConversion(), d.ticks = o, n = 0, a = o.length; n < a; ++n) {
              s = o[n], (u = l[n]) ? u.label = s : l.push(u = { label: s, major: !1 });
            }return d._ticks = l, d.beforeCalculateTickRotation(), d.calculateTickRotation(), d.afterCalculateTickRotation(), d.beforeFit(), d.fit(), d.afterFit(), d.afterUpdate(), d.minSize;
          }, afterUpdate: function afterUpdate() {
            r.callback(this.options.afterUpdate, [this]);
          }, beforeSetDimensions: function beforeSetDimensions() {
            r.callback(this.options.beforeSetDimensions, [this]);
          }, setDimensions: function setDimensions() {
            var t = this;t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0;
          }, afterSetDimensions: function afterSetDimensions() {
            r.callback(this.options.afterSetDimensions, [this]);
          }, beforeDataLimits: function beforeDataLimits() {
            r.callback(this.options.beforeDataLimits, [this]);
          }, determineDataLimits: r.noop, afterDataLimits: function afterDataLimits() {
            r.callback(this.options.afterDataLimits, [this]);
          }, beforeBuildTicks: function beforeBuildTicks() {
            r.callback(this.options.beforeBuildTicks, [this]);
          }, buildTicks: r.noop, afterBuildTicks: function afterBuildTicks() {
            r.callback(this.options.afterBuildTicks, [this]);
          }, beforeTickToLabelConversion: function beforeTickToLabelConversion() {
            r.callback(this.options.beforeTickToLabelConversion, [this]);
          }, convertTicksToLabels: function convertTicksToLabels() {
            var t = this.options.ticks;this.ticks = this.ticks.map(t.userCallback || t.callback, this);
          }, afterTickToLabelConversion: function afterTickToLabelConversion() {
            r.callback(this.options.afterTickToLabelConversion, [this]);
          }, beforeCalculateTickRotation: function beforeCalculateTickRotation() {
            r.callback(this.options.beforeCalculateTickRotation, [this]);
          }, calculateTickRotation: function calculateTickRotation() {
            var t = this,
                e = t.ctx,
                n = t.options.ticks,
                a = s(t._ticks),
                o = i(n);e.font = o.font;var l = n.minRotation || 0;if (a.length && t.options.display && t.isHorizontal()) for (var u, d = r.longestText(e, o.font, a, t.longestTextCache), h = d, c = t.getPixelForTick(1) - t.getPixelForTick(0) - 6; h > c && l < n.maxRotation;) {
              var f = r.toRadians(l);if (u = Math.cos(f), Math.sin(f) * d > t.maxHeight) {
                l--;break;
              }l++, h = u * d;
            }t.labelRotation = l;
          }, afterCalculateTickRotation: function afterCalculateTickRotation() {
            r.callback(this.options.afterCalculateTickRotation, [this]);
          }, beforeFit: function beforeFit() {
            r.callback(this.options.beforeFit, [this]);
          }, fit: function fit() {
            var t = this,
                n = t.minSize = { width: 0, height: 0 },
                a = s(t._ticks),
                l = t.options,
                u = l.ticks,
                d = l.scaleLabel,
                h = l.gridLines,
                c = l.display,
                f = t.isHorizontal(),
                g = i(u),
                m = l.gridLines.tickMarkLength;if (n.width = f ? t.isFullWidth() ? t.maxWidth - t.margins.left - t.margins.right : t.maxWidth : c && h.drawTicks ? m : 0, n.height = f ? c && h.drawTicks ? m : 0 : t.maxHeight, d.display && c) {
              var p = o(d) + r.options.toPadding(d.padding).height;f ? n.height += p : n.width += p;
            }if (u.display && c) {
              var v = r.longestText(t.ctx, g.font, a, t.longestTextCache),
                  y = r.numberOfLabelLines(a),
                  b = .5 * g.size,
                  x = t.options.ticks.padding;if (f) {
                t.longestLabelWidth = v;var _ = r.toRadians(t.labelRotation),
                    k = Math.cos(_),
                    w = Math.sin(_) * v + g.size * y + b * (y - 1) + b;n.height = Math.min(t.maxHeight, n.height + w + x), t.ctx.font = g.font;var M = e(t.ctx, a[0], g.font),
                    S = e(t.ctx, a[a.length - 1], g.font);0 !== t.labelRotation ? (t.paddingLeft = "bottom" === l.position ? k * M + 3 : k * b + 3, t.paddingRight = "bottom" === l.position ? k * b + 3 : k * S + 3) : (t.paddingLeft = M / 2 + 3, t.paddingRight = S / 2 + 3);
              } else u.mirror ? v = 0 : v += x + b, n.width = Math.min(t.maxWidth, n.width + v), t.paddingTop = g.size / 2, t.paddingBottom = g.size / 2;
            }t.handleMargins(), t.width = n.width, t.height = n.height;
          }, handleMargins: function handleMargins() {
            var t = this;t.margins && (t.paddingLeft = Math.max(t.paddingLeft - t.margins.left, 0), t.paddingTop = Math.max(t.paddingTop - t.margins.top, 0), t.paddingRight = Math.max(t.paddingRight - t.margins.right, 0), t.paddingBottom = Math.max(t.paddingBottom - t.margins.bottom, 0));
          }, afterFit: function afterFit() {
            r.callback(this.options.afterFit, [this]);
          }, isHorizontal: function isHorizontal() {
            return "top" === this.options.position || "bottom" === this.options.position;
          }, isFullWidth: function isFullWidth() {
            return this.options.fullWidth;
          }, getRightValue: function getRightValue(t) {
            if (r.isNullOrUndef(t)) return NaN;if ("number" == typeof t && !isFinite(t)) return NaN;if (t) if (this.isHorizontal()) {
              if (void 0 !== t.x) return this.getRightValue(t.x);
            } else if (void 0 !== t.y) return this.getRightValue(t.y);return t;
          }, getLabelForIndex: r.noop, getPixelForValue: r.noop, getValueForPixel: r.noop, getPixelForTick: function getPixelForTick(t) {
            var e = this,
                i = e.options.offset;if (e.isHorizontal()) {
              var n = (e.width - (e.paddingLeft + e.paddingRight)) / Math.max(e._ticks.length - (i ? 0 : 1), 1),
                  a = n * t + e.paddingLeft;i && (a += n / 2);var r = e.left + Math.round(a);return r += e.isFullWidth() ? e.margins.left : 0;
            }var o = e.height - (e.paddingTop + e.paddingBottom);return e.top + t * (o / (e._ticks.length - 1));
          }, getPixelForDecimal: function getPixelForDecimal(t) {
            var e = this;if (e.isHorizontal()) {
              var i = (e.width - (e.paddingLeft + e.paddingRight)) * t + e.paddingLeft,
                  n = e.left + Math.round(i);return n += e.isFullWidth() ? e.margins.left : 0;
            }return e.top + t * e.height;
          }, getBasePixel: function getBasePixel() {
            return this.getPixelForValue(this.getBaseValue());
          }, getBaseValue: function getBaseValue() {
            var t = this.min,
                e = this.max;return this.beginAtZero ? 0 : t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
          }, _autoSkip: function _autoSkip(t) {
            var e,
                i,
                n,
                a,
                o = this,
                s = o.isHorizontal(),
                l = o.options.ticks.minor,
                u = t.length,
                d = r.toRadians(o.labelRotation),
                h = Math.cos(d),
                c = o.longestLabelWidth * h,
                f = [];for (l.maxTicksLimit && (a = l.maxTicksLimit), s && (e = !1, (c + l.autoSkipPadding) * u > o.width - (o.paddingLeft + o.paddingRight) && (e = 1 + Math.floor((c + l.autoSkipPadding) * u / (o.width - (o.paddingLeft + o.paddingRight)))), a && u > a && (e = Math.max(e, Math.floor(u / a)))), i = 0; i < u; i++) {
              n = t[i], (e > 1 && i % e > 0 || i % e == 0 && i + e >= u) && i !== u - 1 && delete n.label, f.push(n);
            }return f;
          }, draw: function draw(t) {
            var e = this,
                a = e.options;if (a.display) {
              var s = e.ctx,
                  u = n.global,
                  d = a.ticks.minor,
                  h = a.ticks.major || d,
                  c = a.gridLines,
                  f = a.scaleLabel,
                  g = 0 !== e.labelRotation,
                  m = e.isHorizontal(),
                  p = d.autoSkip ? e._autoSkip(e.getTicks()) : e.getTicks(),
                  v = r.valueOrDefault(d.fontColor, u.defaultFontColor),
                  y = i(d),
                  b = r.valueOrDefault(h.fontColor, u.defaultFontColor),
                  x = i(h),
                  _ = c.drawTicks ? c.tickMarkLength : 0,
                  k = r.valueOrDefault(f.fontColor, u.defaultFontColor),
                  w = i(f),
                  M = r.options.toPadding(f.padding),
                  S = r.toRadians(e.labelRotation),
                  D = [],
                  C = e.options.gridLines.lineWidth,
                  P = "right" === a.position ? e.right : e.right - C - _,
                  T = "right" === a.position ? e.right + _ : e.right,
                  O = "bottom" === a.position ? e.top + C : e.bottom - _ - C,
                  I = "bottom" === a.position ? e.top + C + _ : e.bottom + C;if (r.each(p, function (i, n) {
                if (!r.isNullOrUndef(i.label)) {
                  var o,
                      s,
                      h,
                      f,
                      v,
                      y,
                      b,
                      x,
                      k,
                      w,
                      M,
                      A,
                      F,
                      R,
                      L = i.label;n === e.zeroLineIndex && a.offset === c.offsetGridLines ? (o = c.zeroLineWidth, s = c.zeroLineColor, h = c.zeroLineBorderDash, f = c.zeroLineBorderDashOffset) : (o = r.valueAtIndexOrDefault(c.lineWidth, n), s = r.valueAtIndexOrDefault(c.color, n), h = r.valueOrDefault(c.borderDash, u.borderDash), f = r.valueOrDefault(c.borderDashOffset, u.borderDashOffset));var W = "middle",
                      Y = "middle",
                      N = d.padding;if (m) {
                    var z = _ + N;"bottom" === a.position ? (Y = g ? "middle" : "top", W = g ? "right" : "center", R = e.top + z) : (Y = g ? "middle" : "bottom", W = g ? "left" : "center", R = e.bottom - z);var H = l(e, n, c.offsetGridLines && p.length > 1);H < e.left && (s = "rgba(0,0,0,0)"), H += r.aliasPixel(o), F = e.getPixelForTick(n) + d.labelOffset, v = b = k = M = H, y = O, x = I, w = t.top, A = t.bottom + C;
                  } else {
                    var V,
                        B = "left" === a.position;d.mirror ? (W = B ? "left" : "right", V = N) : (W = B ? "right" : "left", V = _ + N), F = B ? e.right - V : e.left + V;var E = l(e, n, c.offsetGridLines && p.length > 1);E < e.top && (s = "rgba(0,0,0,0)"), E += r.aliasPixel(o), R = e.getPixelForTick(n) + d.labelOffset, v = P, b = T, k = t.left, M = t.right + C, y = x = w = A = E;
                  }D.push({ tx1: v, ty1: y, tx2: b, ty2: x, x1: k, y1: w, x2: M, y2: A, labelX: F, labelY: R, glWidth: o, glColor: s, glBorderDash: h, glBorderDashOffset: f, rotation: -1 * S, label: L, major: i.major, textBaseline: Y, textAlign: W });
                }
              }), r.each(D, function (t) {
                if (c.display && (s.save(), s.lineWidth = t.glWidth, s.strokeStyle = t.glColor, s.setLineDash && (s.setLineDash(t.glBorderDash), s.lineDashOffset = t.glBorderDashOffset), s.beginPath(), c.drawTicks && (s.moveTo(t.tx1, t.ty1), s.lineTo(t.tx2, t.ty2)), c.drawOnChartArea && (s.moveTo(t.x1, t.y1), s.lineTo(t.x2, t.y2)), s.stroke(), s.restore()), d.display) {
                  s.save(), s.translate(t.labelX, t.labelY), s.rotate(t.rotation), s.font = t.major ? x.font : y.font, s.fillStyle = t.major ? b : v, s.textBaseline = t.textBaseline, s.textAlign = t.textAlign;var i = t.label;if (r.isArray(i)) for (var n = i.length, a = 1.5 * y.size, o = e.isHorizontal() ? 0 : -a * (n - 1) / 2, l = 0; l < n; ++l) {
                    s.fillText("" + i[l], 0, o), o += a;
                  } else s.fillText(i, 0, 0);s.restore();
                }
              }), f.display) {
                var A,
                    F,
                    R = 0,
                    L = o(f) / 2;if (m) A = e.left + (e.right - e.left) / 2, F = "bottom" === a.position ? e.bottom - L - M.bottom : e.top + L + M.top;else {
                  var W = "left" === a.position;A = W ? e.left + L + M.top : e.right - L - M.top, F = e.top + (e.bottom - e.top) / 2, R = W ? -.5 * Math.PI : .5 * Math.PI;
                }s.save(), s.translate(A, F), s.rotate(R), s.textAlign = "center", s.textBaseline = "middle", s.fillStyle = k, s.font = w.font, s.fillText(f.labelString, 0, 0), s.restore();
              }if (c.drawBorder) {
                s.lineWidth = r.valueAtIndexOrDefault(c.lineWidth, 0), s.strokeStyle = r.valueAtIndexOrDefault(c.color, 0);var Y = e.left,
                    N = e.right + C,
                    z = e.top,
                    H = e.bottom + C,
                    V = r.aliasPixel(s.lineWidth);m ? (z = H = "top" === a.position ? e.bottom : e.top, z += V, H += V) : (Y = N = "left" === a.position ? e.right : e.left, Y += V, N += V), s.beginPath(), s.moveTo(Y, z), s.lineTo(N, H), s.stroke();
              }
            }
          } });
      };
    }, { 25: 25, 26: 26, 34: 34, 45: 45 }], 33: [function (t, e, i) {
      "use strict";
      var n = t(25),
          a = t(45),
          r = t(30);e.exports = function (t) {
        t.scaleService = { constructors: {}, defaults: {}, registerScaleType: function registerScaleType(t, e, i) {
            this.constructors[t] = e, this.defaults[t] = a.clone(i);
          }, getScaleConstructor: function getScaleConstructor(t) {
            return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0;
          }, getScaleDefaults: function getScaleDefaults(t) {
            return this.defaults.hasOwnProperty(t) ? a.merge({}, [n.scale, this.defaults[t]]) : {};
          }, updateScaleDefaults: function updateScaleDefaults(t, e) {
            this.defaults.hasOwnProperty(t) && (this.defaults[t] = a.extend(this.defaults[t], e));
          }, addScalesToLayout: function addScalesToLayout(t) {
            a.each(t.scales, function (e) {
              e.fullWidth = e.options.fullWidth, e.position = e.options.position, e.weight = e.options.weight, r.addBox(t, e);
            });
          } };
      };
    }, { 25: 25, 30: 30, 45: 45 }], 34: [function (t, e, i) {
      "use strict";
      var n = t(45);e.exports = { formatters: { values: function values(t) {
            return n.isArray(t) ? t : "" + t;
          }, linear: function linear(t, e, i) {
            var a = i.length > 3 ? i[2] - i[1] : i[1] - i[0];Math.abs(a) > 1 && t !== Math.floor(t) && (a = t - Math.floor(t));var r = n.log10(Math.abs(a)),
                o = "";if (0 !== t) {
              var s = -1 * Math.floor(r);s = Math.max(Math.min(s, 20), 0), o = t.toFixed(s);
            } else o = "0";return o;
          }, logarithmic: function logarithmic(t, e, i) {
            var a = t / Math.pow(10, Math.floor(n.log10(t)));return 0 === t ? "0" : 1 === a || 2 === a || 5 === a || 0 === e || e === i.length - 1 ? t.toExponential() : "";
          } } };
    }, { 45: 45 }], 35: [function (t, e, i) {
      "use strict";
      var n = t(25),
          a = t(26),
          r = t(45);n._set("global", { tooltips: { enabled: !0, custom: null, mode: "nearest", position: "average", intersect: !0, backgroundColor: "rgba(0,0,0,0.8)", titleFontStyle: "bold", titleSpacing: 2, titleMarginBottom: 6, titleFontColor: "#fff", titleAlign: "left", bodySpacing: 2, bodyFontColor: "#fff", bodyAlign: "left", footerFontStyle: "bold", footerSpacing: 2, footerMarginTop: 6, footerFontColor: "#fff", footerAlign: "left", yPadding: 6, xPadding: 6, caretPadding: 2, caretSize: 5, cornerRadius: 6, multiKeyBackground: "#fff", displayColors: !0, borderColor: "rgba(0,0,0,0)", borderWidth: 0, callbacks: { beforeTitle: r.noop, title: function title(t, e) {
              var i = "",
                  n = e.labels,
                  a = n ? n.length : 0;if (t.length > 0) {
                var r = t[0];r.xLabel ? i = r.xLabel : a > 0 && r.index < a && (i = n[r.index]);
              }return i;
            }, afterTitle: r.noop, beforeBody: r.noop, beforeLabel: r.noop, label: function label(t, e) {
              var i = e.datasets[t.datasetIndex].label || "";return i && (i += ": "), i += t.yLabel;
            }, labelColor: function labelColor(t, e) {
              var i = e.getDatasetMeta(t.datasetIndex).data[t.index]._view;return { borderColor: i.borderColor, backgroundColor: i.backgroundColor };
            }, labelTextColor: function labelTextColor() {
              return this._options.bodyFontColor;
            }, afterLabel: r.noop, afterBody: r.noop, beforeFooter: r.noop, footer: r.noop, afterFooter: r.noop } } }), e.exports = function (t) {
        function e(t, e) {
          var i = r.color(t);return i.alpha(e * i.alpha()).rgbaString();
        }function i(t, e) {
          return e && (r.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t;
        }function o(t) {
          var e = n.global,
              i = r.valueOrDefault;return { xPadding: t.xPadding, yPadding: t.yPadding, xAlign: t.xAlign, yAlign: t.yAlign, bodyFontColor: t.bodyFontColor, _bodyFontFamily: i(t.bodyFontFamily, e.defaultFontFamily), _bodyFontStyle: i(t.bodyFontStyle, e.defaultFontStyle), _bodyAlign: t.bodyAlign, bodyFontSize: i(t.bodyFontSize, e.defaultFontSize), bodySpacing: t.bodySpacing, titleFontColor: t.titleFontColor, _titleFontFamily: i(t.titleFontFamily, e.defaultFontFamily), _titleFontStyle: i(t.titleFontStyle, e.defaultFontStyle), titleFontSize: i(t.titleFontSize, e.defaultFontSize), _titleAlign: t.titleAlign, titleSpacing: t.titleSpacing, titleMarginBottom: t.titleMarginBottom, footerFontColor: t.footerFontColor, _footerFontFamily: i(t.footerFontFamily, e.defaultFontFamily), _footerFontStyle: i(t.footerFontStyle, e.defaultFontStyle), footerFontSize: i(t.footerFontSize, e.defaultFontSize), _footerAlign: t.footerAlign, footerSpacing: t.footerSpacing, footerMarginTop: t.footerMarginTop, caretSize: t.caretSize, cornerRadius: t.cornerRadius, backgroundColor: t.backgroundColor, opacity: 0, legendColorBackground: t.multiKeyBackground, displayColors: t.displayColors, borderColor: t.borderColor, borderWidth: t.borderWidth };
        }t.Tooltip = a.extend({ initialize: function initialize() {
            this._model = o(this._options), this._lastActive = [];
          }, getTitle: function getTitle() {
            var t = this._options.callbacks,
                e = t.beforeTitle.apply(this, arguments),
                n = t.title.apply(this, arguments),
                a = t.afterTitle.apply(this, arguments),
                r = [];return r = i(r = i(r = i(r, e), n), a);
          }, getBeforeBody: function getBeforeBody() {
            var t = this._options.callbacks.beforeBody.apply(this, arguments);return r.isArray(t) ? t : void 0 !== t ? [t] : [];
          }, getBody: function getBody(t, e) {
            var n = this,
                a = n._options.callbacks,
                o = [];return r.each(t, function (t) {
              var r = { before: [], lines: [], after: [] };i(r.before, a.beforeLabel.call(n, t, e)), i(r.lines, a.label.call(n, t, e)), i(r.after, a.afterLabel.call(n, t, e)), o.push(r);
            }), o;
          }, getAfterBody: function getAfterBody() {
            var t = this._options.callbacks.afterBody.apply(this, arguments);return r.isArray(t) ? t : void 0 !== t ? [t] : [];
          }, getFooter: function getFooter() {
            var t = this._options.callbacks,
                e = t.beforeFooter.apply(this, arguments),
                n = t.footer.apply(this, arguments),
                a = t.afterFooter.apply(this, arguments),
                r = [];return r = i(r = i(r = i(r, e), n), a);
          }, update: function update(e) {
            var i,
                n,
                a,
                s,
                l,
                u,
                d,
                h,
                c,
                f,
                g,
                m,
                p,
                v,
                y,
                b,
                x,
                _,
                k,
                w,
                M = this,
                S = M._options,
                D = M._model,
                C = M._model = o(S),
                P = M._active,
                T = M._data,
                O = { xAlign: D.xAlign, yAlign: D.yAlign },
                I = { x: D.x, y: D.y },
                A = { width: D.width, height: D.height },
                F = { x: D.caretX, y: D.caretY };if (P.length) {
              C.opacity = 1;var R = [],
                  L = [];F = t.Tooltip.positioners[S.position].call(M, P, M._eventPosition);var W = [];for (i = 0, n = P.length; i < n; ++i) {
                W.push((b = P[i], x = void 0, _ = void 0, void 0, void 0, x = b._xScale, _ = b._yScale || b._scale, k = b._index, w = b._datasetIndex, { xLabel: x ? x.getLabelForIndex(k, w) : "", yLabel: _ ? _.getLabelForIndex(k, w) : "", index: k, datasetIndex: w, x: b._model.x, y: b._model.y }));
              }S.filter && (W = W.filter(function (t) {
                return S.filter(t, T);
              })), S.itemSort && (W = W.sort(function (t, e) {
                return S.itemSort(t, e, T);
              })), r.each(W, function (t) {
                R.push(S.callbacks.labelColor.call(M, t, M._chart)), L.push(S.callbacks.labelTextColor.call(M, t, M._chart));
              }), C.title = M.getTitle(W, T), C.beforeBody = M.getBeforeBody(W, T), C.body = M.getBody(W, T), C.afterBody = M.getAfterBody(W, T), C.footer = M.getFooter(W, T), C.x = Math.round(F.x), C.y = Math.round(F.y), C.caretPadding = S.caretPadding, C.labelColors = R, C.labelTextColors = L, C.dataPoints = W, O = function (t, e) {
                var i,
                    n,
                    a,
                    r,
                    o,
                    s = t._model,
                    l = t._chart,
                    u = t._chart.chartArea,
                    d = "center",
                    h = "center";s.y < e.height ? h = "top" : s.y > l.height - e.height && (h = "bottom");var c = (u.left + u.right) / 2,
                    f = (u.top + u.bottom) / 2;"center" === h ? (i = function i(t) {
                  return t <= c;
                }, n = function n(t) {
                  return t > c;
                }) : (i = function i(t) {
                  return t <= e.width / 2;
                }, n = function n(t) {
                  return t >= l.width - e.width / 2;
                }), a = function a(t) {
                  return t + e.width + s.caretSize + s.caretPadding > l.width;
                }, r = function r(t) {
                  return t - e.width - s.caretSize - s.caretPadding < 0;
                }, o = function o(t) {
                  return t <= f ? "top" : "bottom";
                }, i(s.x) ? (d = "left", a(s.x) && (d = "center", h = o(s.y))) : n(s.x) && (d = "right", r(s.x) && (d = "center", h = o(s.y)));var g = t._options;return { xAlign: g.xAlign ? g.xAlign : d, yAlign: g.yAlign ? g.yAlign : h };
              }(this, A = function (t, e) {
                var i = t._chart.ctx,
                    n = 2 * e.yPadding,
                    a = 0,
                    o = e.body,
                    s = o.reduce(function (t, e) {
                  return t + e.before.length + e.lines.length + e.after.length;
                }, 0);s += e.beforeBody.length + e.afterBody.length;var l = e.title.length,
                    u = e.footer.length,
                    d = e.titleFontSize,
                    h = e.bodyFontSize,
                    c = e.footerFontSize;n += l * d, n += l ? (l - 1) * e.titleSpacing : 0, n += l ? e.titleMarginBottom : 0, n += s * h, n += s ? (s - 1) * e.bodySpacing : 0, n += u ? e.footerMarginTop : 0, n += u * c, n += u ? (u - 1) * e.footerSpacing : 0;var f = 0,
                    g = function g(t) {
                  a = Math.max(a, i.measureText(t).width + f);
                };return i.font = r.fontString(d, e._titleFontStyle, e._titleFontFamily), r.each(e.title, g), i.font = r.fontString(h, e._bodyFontStyle, e._bodyFontFamily), r.each(e.beforeBody.concat(e.afterBody), g), f = e.displayColors ? h + 2 : 0, r.each(o, function (t) {
                  r.each(t.before, g), r.each(t.lines, g), r.each(t.after, g);
                }), f = 0, i.font = r.fontString(c, e._footerFontStyle, e._footerFontFamily), r.each(e.footer, g), { width: a += 2 * e.xPadding, height: n };
              }(this, C)), a = C, s = A, l = O, u = M._chart, d = a.x, h = a.y, c = a.caretSize, f = a.caretPadding, g = a.cornerRadius, m = l.xAlign, p = l.yAlign, v = c + f, y = g + f, "right" === m ? d -= s.width : "center" === m && ((d -= s.width / 2) + s.width > u.width && (d = u.width - s.width), d < 0 && (d = 0)), "top" === p ? h += v : h -= "bottom" === p ? s.height + v : s.height / 2, "center" === p ? "left" === m ? d += v : "right" === m && (d -= v) : "left" === m ? d -= y : "right" === m && (d += y), I = { x: d, y: h };
            } else C.opacity = 0;return C.xAlign = O.xAlign, C.yAlign = O.yAlign, C.x = I.x, C.y = I.y, C.width = A.width, C.height = A.height, C.caretX = F.x, C.caretY = F.y, M._model = C, e && S.custom && S.custom.call(M, C), M;
          }, drawCaret: function drawCaret(t, e) {
            var i = this._chart.ctx,
                n = this._view,
                a = this.getCaretPosition(t, e, n);i.lineTo(a.x1, a.y1), i.lineTo(a.x2, a.y2), i.lineTo(a.x3, a.y3);
          }, getCaretPosition: function getCaretPosition(t, e, i) {
            var n,
                a,
                r,
                o,
                s,
                l,
                u = i.caretSize,
                d = i.cornerRadius,
                h = i.xAlign,
                c = i.yAlign,
                f = t.x,
                g = t.y,
                m = e.width,
                p = e.height;if ("center" === c) s = g + p / 2, "left" === h ? (a = (n = f) - u, r = n, o = s + u, l = s - u) : (a = (n = f + m) + u, r = n, o = s - u, l = s + u);else if ("left" === h ? (n = (a = f + d + u) - u, r = a + u) : "right" === h ? (n = (a = f + m - d - u) - u, r = a + u) : (n = (a = i.caretX) - u, r = a + u), "top" === c) s = (o = g) - u, l = o;else {
              s = (o = g + p) + u, l = o;var v = r;r = n, n = v;
            }return { x1: n, x2: a, x3: r, y1: o, y2: s, y3: l };
          }, drawTitle: function drawTitle(t, i, n, a) {
            var o = i.title;if (o.length) {
              n.textAlign = i._titleAlign, n.textBaseline = "top";var s,
                  l,
                  u = i.titleFontSize,
                  d = i.titleSpacing;for (n.fillStyle = e(i.titleFontColor, a), n.font = r.fontString(u, i._titleFontStyle, i._titleFontFamily), s = 0, l = o.length; s < l; ++s) {
                n.fillText(o[s], t.x, t.y), t.y += u + d, s + 1 === o.length && (t.y += i.titleMarginBottom - d);
              }
            }
          }, drawBody: function drawBody(t, i, n, a) {
            var o = i.bodyFontSize,
                s = i.bodySpacing,
                l = i.body;n.textAlign = i._bodyAlign, n.textBaseline = "top", n.font = r.fontString(o, i._bodyFontStyle, i._bodyFontFamily);var u = 0,
                d = function d(e) {
              n.fillText(e, t.x + u, t.y), t.y += o + s;
            };n.fillStyle = e(i.bodyFontColor, a), r.each(i.beforeBody, d);var h = i.displayColors;u = h ? o + 2 : 0, r.each(l, function (s, l) {
              var u = e(i.labelTextColors[l], a);n.fillStyle = u, r.each(s.before, d), r.each(s.lines, function (r) {
                h && (n.fillStyle = e(i.legendColorBackground, a), n.fillRect(t.x, t.y, o, o), n.lineWidth = 1, n.strokeStyle = e(i.labelColors[l].borderColor, a), n.strokeRect(t.x, t.y, o, o), n.fillStyle = e(i.labelColors[l].backgroundColor, a), n.fillRect(t.x + 1, t.y + 1, o - 2, o - 2), n.fillStyle = u), d(r);
              }), r.each(s.after, d);
            }), u = 0, r.each(i.afterBody, d), t.y -= s;
          }, drawFooter: function drawFooter(t, i, n, a) {
            var o = i.footer;o.length && (t.y += i.footerMarginTop, n.textAlign = i._footerAlign, n.textBaseline = "top", n.fillStyle = e(i.footerFontColor, a), n.font = r.fontString(i.footerFontSize, i._footerFontStyle, i._footerFontFamily), r.each(o, function (e) {
              n.fillText(e, t.x, t.y), t.y += i.footerFontSize + i.footerSpacing;
            }));
          }, drawBackground: function drawBackground(t, i, n, a, r) {
            n.fillStyle = e(i.backgroundColor, r), n.strokeStyle = e(i.borderColor, r), n.lineWidth = i.borderWidth;var o = i.xAlign,
                s = i.yAlign,
                l = t.x,
                u = t.y,
                d = a.width,
                h = a.height,
                c = i.cornerRadius;n.beginPath(), n.moveTo(l + c, u), "top" === s && this.drawCaret(t, a), n.lineTo(l + d - c, u), n.quadraticCurveTo(l + d, u, l + d, u + c), "center" === s && "right" === o && this.drawCaret(t, a), n.lineTo(l + d, u + h - c), n.quadraticCurveTo(l + d, u + h, l + d - c, u + h), "bottom" === s && this.drawCaret(t, a), n.lineTo(l + c, u + h), n.quadraticCurveTo(l, u + h, l, u + h - c), "center" === s && "left" === o && this.drawCaret(t, a), n.lineTo(l, u + c), n.quadraticCurveTo(l, u, l + c, u), n.closePath(), n.fill(), i.borderWidth > 0 && n.stroke();
          }, draw: function draw() {
            var t = this._chart.ctx,
                e = this._view;if (0 !== e.opacity) {
              var i = { width: e.width, height: e.height },
                  n = { x: e.x, y: e.y },
                  a = Math.abs(e.opacity < .001) ? 0 : e.opacity,
                  r = e.title.length || e.beforeBody.length || e.body.length || e.afterBody.length || e.footer.length;this._options.enabled && r && (this.drawBackground(n, e, t, i, a), n.x += e.xPadding, n.y += e.yPadding, this.drawTitle(n, e, t, a), this.drawBody(n, e, t, a), this.drawFooter(n, e, t, a));
            }
          }, handleEvent: function handleEvent(t) {
            var e,
                i = this,
                n = i._options;return i._lastActive = i._lastActive || [], "mouseout" === t.type ? i._active = [] : i._active = i._chart.getElementsAtEventForMode(t, n.mode, n), (e = !r.arrayEquals(i._active, i._lastActive)) && (i._lastActive = i._active, (n.enabled || n.custom) && (i._eventPosition = { x: t.x, y: t.y }, i.update(!0), i.pivot())), e;
          } }), t.Tooltip.positioners = { average: function average(t) {
            if (!t.length) return !1;var e,
                i,
                n = 0,
                a = 0,
                r = 0;for (e = 0, i = t.length; e < i; ++e) {
              var o = t[e];if (o && o.hasValue()) {
                var s = o.tooltipPosition();n += s.x, a += s.y, ++r;
              }
            }return { x: Math.round(n / r), y: Math.round(a / r) };
          }, nearest: function nearest(t, e) {
            var i,
                n,
                a,
                o = e.x,
                s = e.y,
                l = Number.POSITIVE_INFINITY;for (i = 0, n = t.length; i < n; ++i) {
              var u = t[i];if (u && u.hasValue()) {
                var d = u.getCenterPoint(),
                    h = r.distanceBetweenPoints(e, d);h < l && (l = h, a = u);
              }
            }if (a) {
              var c = a.tooltipPosition();o = c.x, s = c.y;
            }return { x: o, y: s };
          } };
      };
    }, { 25: 25, 26: 26, 45: 45 }], 36: [function (t, e, i) {
      "use strict";
      var n = t(25),
          a = t(26),
          r = t(45);n._set("global", { elements: { arc: { backgroundColor: n.global.defaultColor, borderColor: "#fff", borderWidth: 2 } } }), e.exports = a.extend({ inLabelRange: function inLabelRange(t) {
          var e = this._view;return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2);
        }, inRange: function inRange(t, e) {
          var i = this._view;if (i) {
            for (var n = r.getAngleFromPoint(i, { x: t, y: e }), a = n.angle, o = n.distance, s = i.startAngle, l = i.endAngle; l < s;) {
              l += 2 * Math.PI;
            }for (; a > l;) {
              a -= 2 * Math.PI;
            }for (; a < s;) {
              a += 2 * Math.PI;
            }var u = a >= s && a <= l,
                d = o >= i.innerRadius && o <= i.outerRadius;return u && d;
          }return !1;
        }, getCenterPoint: function getCenterPoint() {
          var t = this._view,
              e = (t.startAngle + t.endAngle) / 2,
              i = (t.innerRadius + t.outerRadius) / 2;return { x: t.x + Math.cos(e) * i, y: t.y + Math.sin(e) * i };
        }, getArea: function getArea() {
          var t = this._view;return Math.PI * ((t.endAngle - t.startAngle) / (2 * Math.PI)) * (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2));
        }, tooltipPosition: function tooltipPosition() {
          var t = this._view,
              e = t.startAngle + (t.endAngle - t.startAngle) / 2,
              i = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;return { x: t.x + Math.cos(e) * i, y: t.y + Math.sin(e) * i };
        }, draw: function draw() {
          var t = this._chart.ctx,
              e = this._view,
              i = e.startAngle,
              n = e.endAngle;t.beginPath(), t.arc(e.x, e.y, e.outerRadius, i, n), t.arc(e.x, e.y, e.innerRadius, n, i, !0), t.closePath(), t.strokeStyle = e.borderColor, t.lineWidth = e.borderWidth, t.fillStyle = e.backgroundColor, t.fill(), t.lineJoin = "bevel", e.borderWidth && t.stroke();
        } });
    }, { 25: 25, 26: 26, 45: 45 }], 37: [function (t, e, i) {
      "use strict";
      var n = t(25),
          a = t(26),
          r = t(45),
          o = n.global;n._set("global", { elements: { line: { tension: .4, backgroundColor: o.defaultColor, borderWidth: 3, borderColor: o.defaultColor, borderCapStyle: "butt", borderDash: [], borderDashOffset: 0, borderJoinStyle: "miter", capBezierPoints: !0, fill: !0 } } }), e.exports = a.extend({ draw: function draw() {
          var t,
              e,
              i,
              n,
              a = this._view,
              s = this._chart.ctx,
              l = a.spanGaps,
              u = this._children.slice(),
              d = o.elements.line,
              h = -1;for (this._loop && u.length && u.push(u[0]), s.save(), s.lineCap = a.borderCapStyle || d.borderCapStyle, s.setLineDash && s.setLineDash(a.borderDash || d.borderDash), s.lineDashOffset = a.borderDashOffset || d.borderDashOffset, s.lineJoin = a.borderJoinStyle || d.borderJoinStyle, s.lineWidth = a.borderWidth || d.borderWidth, s.strokeStyle = a.borderColor || o.defaultColor, s.beginPath(), h = -1, t = 0; t < u.length; ++t) {
            e = u[t], i = r.previousItem(u, t), n = e._view, 0 === t ? n.skip || (s.moveTo(n.x, n.y), h = t) : (i = -1 === h ? i : u[h], n.skip || (h !== t - 1 && !l || -1 === h ? s.moveTo(n.x, n.y) : r.canvas.lineTo(s, i._view, e._view), h = t));
          }s.stroke(), s.restore();
        } });
    }, { 25: 25, 26: 26, 45: 45 }], 38: [function (t, e, i) {
      "use strict";
      var n = t(25),
          a = t(26),
          r = t(45),
          o = n.global.defaultColor;function s(t) {
        var e = this._view;return !!e && Math.abs(t - e.x) < e.radius + e.hitRadius;
      }n._set("global", { elements: { point: { radius: 3, pointStyle: "circle", backgroundColor: o, borderColor: o, borderWidth: 1, hitRadius: 1, hoverRadius: 4, hoverBorderWidth: 1 } } }), e.exports = a.extend({ inRange: function inRange(t, e) {
          var i = this._view;return !!i && Math.pow(t - i.x, 2) + Math.pow(e - i.y, 2) < Math.pow(i.hitRadius + i.radius, 2);
        }, inLabelRange: s, inXRange: s, inYRange: function inYRange(t) {
          var e = this._view;return !!e && Math.abs(t - e.y) < e.radius + e.hitRadius;
        }, getCenterPoint: function getCenterPoint() {
          var t = this._view;return { x: t.x, y: t.y };
        }, getArea: function getArea() {
          return Math.PI * Math.pow(this._view.radius, 2);
        }, tooltipPosition: function tooltipPosition() {
          var t = this._view;return { x: t.x, y: t.y, padding: t.radius + t.borderWidth };
        }, draw: function draw(t) {
          var e = this._view,
              i = this._model,
              a = this._chart.ctx,
              s = e.pointStyle,
              l = e.radius,
              u = e.x,
              d = e.y,
              h = r.color,
              c = 0;e.skip || (a.strokeStyle = e.borderColor || o, a.lineWidth = r.valueOrDefault(e.borderWidth, n.global.elements.point.borderWidth), a.fillStyle = e.backgroundColor || o, void 0 !== t && (i.x < t.left || 1.01 * t.right < i.x || i.y < t.top || 1.01 * t.bottom < i.y) && (i.x < t.left ? c = (u - i.x) / (t.left - i.x) : 1.01 * t.right < i.x ? c = (i.x - u) / (i.x - t.right) : i.y < t.top ? c = (d - i.y) / (t.top - i.y) : 1.01 * t.bottom < i.y && (c = (i.y - d) / (i.y - t.bottom)), c = Math.round(100 * c) / 100, a.strokeStyle = h(a.strokeStyle).alpha(c).rgbString(), a.fillStyle = h(a.fillStyle).alpha(c).rgbString()), r.canvas.drawPoint(a, s, l, u, d));
        } });
    }, { 25: 25, 26: 26, 45: 45 }], 39: [function (t, e, i) {
      "use strict";
      var n = t(25),
          a = t(26);function r(t) {
        return void 0 !== t._view.width;
      }function o(t) {
        var e,
            i,
            n,
            a,
            o = t._view;if (r(t)) {
          var s = o.width / 2;e = o.x - s, i = o.x + s, n = Math.min(o.y, o.base), a = Math.max(o.y, o.base);
        } else {
          var l = o.height / 2;e = Math.min(o.x, o.base), i = Math.max(o.x, o.base), n = o.y - l, a = o.y + l;
        }return { left: e, top: n, right: i, bottom: a };
      }n._set("global", { elements: { rectangle: { backgroundColor: n.global.defaultColor, borderColor: n.global.defaultColor, borderSkipped: "bottom", borderWidth: 0 } } }), e.exports = a.extend({ draw: function draw() {
          var t,
              e,
              i,
              n,
              a,
              r,
              o,
              s = this._chart.ctx,
              l = this._view,
              u = l.borderWidth;if (l.horizontal ? (t = l.base, e = l.x, i = l.y - l.height / 2, n = l.y + l.height / 2, a = e > t ? 1 : -1, r = 1, o = l.borderSkipped || "left") : (t = l.x - l.width / 2, e = l.x + l.width / 2, i = l.y, a = 1, r = (n = l.base) > i ? 1 : -1, o = l.borderSkipped || "bottom"), u) {
            var d = Math.min(Math.abs(t - e), Math.abs(i - n)),
                h = (u = u > d ? d : u) / 2,
                c = t + ("left" !== o ? h * a : 0),
                f = e + ("right" !== o ? -h * a : 0),
                g = i + ("top" !== o ? h * r : 0),
                m = n + ("bottom" !== o ? -h * r : 0);c !== f && (i = g, n = m), g !== m && (t = c, e = f);
          }s.beginPath(), s.fillStyle = l.backgroundColor, s.strokeStyle = l.borderColor, s.lineWidth = u;var p = [[t, n], [t, i], [e, i], [e, n]],
              v = ["bottom", "left", "top", "right"].indexOf(o, 0);function y(t) {
            return p[(v + t) % 4];
          }-1 === v && (v = 0);var b = y(0);s.moveTo(b[0], b[1]);for (var x = 1; x < 4; x++) {
            b = y(x), s.lineTo(b[0], b[1]);
          }s.fill(), u && s.stroke();
        }, height: function height() {
          var t = this._view;return t.base - t.y;
        }, inRange: function inRange(t, e) {
          var i = !1;if (this._view) {
            var n = o(this);i = t >= n.left && t <= n.right && e >= n.top && e <= n.bottom;
          }return i;
        }, inLabelRange: function inLabelRange(t, e) {
          if (!this._view) return !1;var i = o(this);return r(this) ? t >= i.left && t <= i.right : e >= i.top && e <= i.bottom;
        }, inXRange: function inXRange(t) {
          var e = o(this);return t >= e.left && t <= e.right;
        }, inYRange: function inYRange(t) {
          var e = o(this);return t >= e.top && t <= e.bottom;
        }, getCenterPoint: function getCenterPoint() {
          var t,
              e,
              i = this._view;return r(this) ? (t = i.x, e = (i.y + i.base) / 2) : (t = (i.x + i.base) / 2, e = i.y), { x: t, y: e };
        }, getArea: function getArea() {
          var t = this._view;return t.width * Math.abs(t.y - t.base);
        }, tooltipPosition: function tooltipPosition() {
          var t = this._view;return { x: t.x, y: t.y };
        } });
    }, { 25: 25, 26: 26 }], 40: [function (t, e, i) {
      "use strict";
      e.exports = {}, e.exports.Arc = t(36), e.exports.Line = t(37), e.exports.Point = t(38), e.exports.Rectangle = t(39);
    }, { 36: 36, 37: 37, 38: 38, 39: 39 }], 41: [function (t, e, i) {
      "use strict";
      var n = t(42);i = e.exports = { clear: function clear(t) {
          t.ctx.clearRect(0, 0, t.width, t.height);
        }, roundedRect: function roundedRect(t, e, i, n, a, r) {
          if (r) {
            var o = Math.min(r, n / 2),
                s = Math.min(r, a / 2);t.moveTo(e + o, i), t.lineTo(e + n - o, i), t.quadraticCurveTo(e + n, i, e + n, i + s), t.lineTo(e + n, i + a - s), t.quadraticCurveTo(e + n, i + a, e + n - o, i + a), t.lineTo(e + o, i + a), t.quadraticCurveTo(e, i + a, e, i + a - s), t.lineTo(e, i + s), t.quadraticCurveTo(e, i, e + o, i);
          } else t.rect(e, i, n, a);
        }, drawPoint: function drawPoint(t, e, i, n, a) {
          var r, o, s, l, u, d;if (!e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) || "[object HTMLImageElement]" !== (r = e.toString()) && "[object HTMLCanvasElement]" !== r) {
            if (!(isNaN(i) || i <= 0)) {
              switch (e) {default:
                  t.beginPath(), t.arc(n, a, i, 0, 2 * Math.PI), t.closePath(), t.fill();break;case "triangle":
                  t.beginPath(), u = (o = 3 * i / Math.sqrt(3)) * Math.sqrt(3) / 2, t.moveTo(n - o / 2, a + u / 3), t.lineTo(n + o / 2, a + u / 3), t.lineTo(n, a - 2 * u / 3), t.closePath(), t.fill();break;case "rect":
                  d = 1 / Math.SQRT2 * i, t.beginPath(), t.fillRect(n - d, a - d, 2 * d, 2 * d), t.strokeRect(n - d, a - d, 2 * d, 2 * d);break;case "rectRounded":
                  var h = i / Math.SQRT2,
                      c = n - h,
                      f = a - h,
                      g = Math.SQRT2 * i;t.beginPath(), this.roundedRect(t, c, f, g, g, i / 2), t.closePath(), t.fill();break;case "rectRot":
                  d = 1 / Math.SQRT2 * i, t.beginPath(), t.moveTo(n - d, a), t.lineTo(n, a + d), t.lineTo(n + d, a), t.lineTo(n, a - d), t.closePath(), t.fill();break;case "cross":
                  t.beginPath(), t.moveTo(n, a + i), t.lineTo(n, a - i), t.moveTo(n - i, a), t.lineTo(n + i, a), t.closePath();break;case "crossRot":
                  t.beginPath(), s = Math.cos(Math.PI / 4) * i, l = Math.sin(Math.PI / 4) * i, t.moveTo(n - s, a - l), t.lineTo(n + s, a + l), t.moveTo(n - s, a + l), t.lineTo(n + s, a - l), t.closePath();break;case "star":
                  t.beginPath(), t.moveTo(n, a + i), t.lineTo(n, a - i), t.moveTo(n - i, a), t.lineTo(n + i, a), s = Math.cos(Math.PI / 4) * i, l = Math.sin(Math.PI / 4) * i, t.moveTo(n - s, a - l), t.lineTo(n + s, a + l), t.moveTo(n - s, a + l), t.lineTo(n + s, a - l), t.closePath();break;case "line":
                  t.beginPath(), t.moveTo(n - i, a), t.lineTo(n + i, a), t.closePath();break;case "dash":
                  t.beginPath(), t.moveTo(n, a), t.lineTo(n + i, a), t.closePath();}t.stroke();
            }
          } else t.drawImage(e, n - e.width / 2, a - e.height / 2, e.width, e.height);
        }, clipArea: function clipArea(t, e) {
          t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip();
        }, unclipArea: function unclipArea(t) {
          t.restore();
        }, lineTo: function lineTo(t, e, i, n) {
          if (i.steppedLine) return "after" === i.steppedLine && !n || "after" !== i.steppedLine && n ? t.lineTo(e.x, i.y) : t.lineTo(i.x, e.y), void t.lineTo(i.x, i.y);i.tension ? t.bezierCurveTo(n ? e.controlPointPreviousX : e.controlPointNextX, n ? e.controlPointPreviousY : e.controlPointNextY, n ? i.controlPointNextX : i.controlPointPreviousX, n ? i.controlPointNextY : i.controlPointPreviousY, i.x, i.y) : t.lineTo(i.x, i.y);
        } };n.clear = i.clear, n.drawRoundedRectangle = function (t) {
        t.beginPath(), i.roundedRect.apply(i, arguments), t.closePath();
      };
    }, { 42: 42 }], 42: [function (t, e, i) {
      "use strict";
      var n,
          a = { noop: function noop() {}, uid: (n = 0, function () {
          return n++;
        }), isNullOrUndef: function isNullOrUndef(t) {
          return null == t;
        }, isArray: Array.isArray ? Array.isArray : function (t) {
          return "[object Array]" === Object.prototype.toString.call(t);
        }, isObject: function isObject(t) {
          return null !== t && "[object Object]" === Object.prototype.toString.call(t);
        }, valueOrDefault: function valueOrDefault(t, e) {
          return void 0 === t ? e : t;
        }, valueAtIndexOrDefault: function valueAtIndexOrDefault(t, e, i) {
          return a.valueOrDefault(a.isArray(t) ? t[e] : t, i);
        }, callback: function callback(t, e, i) {
          if (t && "function" == typeof t.call) return t.apply(i, e);
        }, each: function each(t, e, i, n) {
          var r, o, s;if (a.isArray(t)) {
            if (o = t.length, n) for (r = o - 1; r >= 0; r--) {
              e.call(i, t[r], r);
            } else for (r = 0; r < o; r++) {
              e.call(i, t[r], r);
            }
          } else if (a.isObject(t)) for (o = (s = Object.keys(t)).length, r = 0; r < o; r++) {
            e.call(i, t[s[r]], s[r]);
          }
        }, arrayEquals: function arrayEquals(t, e) {
          var i, n, r, o;if (!t || !e || t.length !== e.length) return !1;for (i = 0, n = t.length; i < n; ++i) {
            if (r = t[i], o = e[i], r instanceof Array && o instanceof Array) {
              if (!a.arrayEquals(r, o)) return !1;
            } else if (r !== o) return !1;
          }return !0;
        }, clone: function clone(t) {
          if (a.isArray(t)) return t.map(a.clone);if (a.isObject(t)) {
            for (var e = {}, i = Object.keys(t), n = i.length, r = 0; r < n; ++r) {
              e[i[r]] = a.clone(t[i[r]]);
            }return e;
          }return t;
        }, _merger: function _merger(t, e, i, n) {
          var r = e[t],
              o = i[t];a.isObject(r) && a.isObject(o) ? a.merge(r, o, n) : e[t] = a.clone(o);
        }, _mergerIf: function _mergerIf(t, e, i) {
          var n = e[t],
              r = i[t];a.isObject(n) && a.isObject(r) ? a.mergeIf(n, r) : e.hasOwnProperty(t) || (e[t] = a.clone(r));
        }, merge: function merge(t, e, i) {
          var n,
              r,
              o,
              s,
              l,
              u = a.isArray(e) ? e : [e],
              d = u.length;if (!a.isObject(t)) return t;for (n = (i = i || {}).merger || a._merger, r = 0; r < d; ++r) {
            if (e = u[r], a.isObject(e)) for (l = 0, s = (o = Object.keys(e)).length; l < s; ++l) {
              n(o[l], t, e, i);
            }
          }return t;
        }, mergeIf: function mergeIf(t, e) {
          return a.merge(t, e, { merger: a._mergerIf });
        }, extend: function extend(t) {
          for (var e = function e(_e2, i) {
            t[i] = _e2;
          }, i = 1, n = arguments.length; i < n; ++i) {
            a.each(arguments[i], e);
          }return t;
        }, inherits: function inherits(t) {
          var e = this,
              i = t && t.hasOwnProperty("constructor") ? t.constructor : function () {
            return e.apply(this, arguments);
          },
              n = function n() {
            this.constructor = i;
          };return n.prototype = e.prototype, i.prototype = new n(), i.extend = a.inherits, t && a.extend(i.prototype, t), i.__super__ = e.prototype, i;
        } };e.exports = a, a.callCallback = a.callback, a.indexOf = function (t, e, i) {
        return Array.prototype.indexOf.call(t, e, i);
      }, a.getValueOrDefault = a.valueOrDefault, a.getValueAtIndexOrDefault = a.valueAtIndexOrDefault;
    }, {}], 43: [function (t, e, i) {
      "use strict";
      var n = t(42),
          a = { linear: function linear(t) {
          return t;
        }, easeInQuad: function easeInQuad(t) {
          return t * t;
        }, easeOutQuad: function easeOutQuad(t) {
          return -t * (t - 2);
        }, easeInOutQuad: function easeInOutQuad(t) {
          return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1);
        }, easeInCubic: function easeInCubic(t) {
          return t * t * t;
        }, easeOutCubic: function easeOutCubic(t) {
          return (t -= 1) * t * t + 1;
        }, easeInOutCubic: function easeInOutCubic(t) {
          return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2);
        }, easeInQuart: function easeInQuart(t) {
          return t * t * t * t;
        }, easeOutQuart: function easeOutQuart(t) {
          return -((t -= 1) * t * t * t - 1);
        }, easeInOutQuart: function easeInOutQuart(t) {
          return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2);
        }, easeInQuint: function easeInQuint(t) {
          return t * t * t * t * t;
        }, easeOutQuint: function easeOutQuint(t) {
          return (t -= 1) * t * t * t * t + 1;
        }, easeInOutQuint: function easeInOutQuint(t) {
          return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2);
        }, easeInSine: function easeInSine(t) {
          return 1 - Math.cos(t * (Math.PI / 2));
        }, easeOutSine: function easeOutSine(t) {
          return Math.sin(t * (Math.PI / 2));
        }, easeInOutSine: function easeInOutSine(t) {
          return -.5 * (Math.cos(Math.PI * t) - 1);
        }, easeInExpo: function easeInExpo(t) {
          return 0 === t ? 0 : Math.pow(2, 10 * (t - 1));
        }, easeOutExpo: function easeOutExpo(t) {
          return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
        }, easeInOutExpo: function easeInOutExpo(t) {
          return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t));
        }, easeInCirc: function easeInCirc(t) {
          return t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1);
        }, easeOutCirc: function easeOutCirc(t) {
          return Math.sqrt(1 - (t -= 1) * t);
        }, easeInOutCirc: function easeInOutCirc(t) {
          return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
        }, easeInElastic: function easeInElastic(t) {
          var e = 1.70158,
              i = 0,
              n = 1;return 0 === t ? 0 : 1 === t ? 1 : (i || (i = .3), n < 1 ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), -n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i));
        }, easeOutElastic: function easeOutElastic(t) {
          var e = 1.70158,
              i = 0,
              n = 1;return 0 === t ? 0 : 1 === t ? 1 : (i || (i = .3), n < 1 ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / i) + 1);
        }, easeInOutElastic: function easeInOutElastic(t) {
          var e = 1.70158,
              i = 0,
              n = 1;return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (i || (i = .45), n < 1 ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), t < 1 ? n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i) * -.5 : n * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i) * .5 + 1);
        }, easeInBack: function easeInBack(t) {
          return t * t * (2.70158 * t - 1.70158);
        }, easeOutBack: function easeOutBack(t) {
          return (t -= 1) * t * (2.70158 * t + 1.70158) + 1;
        }, easeInOutBack: function easeInOutBack(t) {
          var e = 1.70158;return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
        }, easeInBounce: function easeInBounce(t) {
          return 1 - a.easeOutBounce(1 - t);
        }, easeOutBounce: function easeOutBounce(t) {
          return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
        }, easeInOutBounce: function easeInOutBounce(t) {
          return t < .5 ? .5 * a.easeInBounce(2 * t) : .5 * a.easeOutBounce(2 * t - 1) + .5;
        } };e.exports = { effects: a }, n.easingEffects = a;
    }, { 42: 42 }], 44: [function (t, e, i) {
      "use strict";
      var n = t(42);e.exports = { toLineHeight: function toLineHeight(t, e) {
          var i = ("" + t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);if (!i || "normal" === i[1]) return 1.2 * e;switch (t = +i[2], i[3]) {case "px":
              return t;case "%":
              t /= 100;}return e * t;
        }, toPadding: function toPadding(t) {
          var e, i, a, r;return n.isObject(t) ? (e = +t.top || 0, i = +t.right || 0, a = +t.bottom || 0, r = +t.left || 0) : e = i = a = r = +t || 0, { top: e, right: i, bottom: a, left: r, height: e + a, width: r + i };
        }, resolve: function resolve(t, e, i) {
          var a, r, o;for (a = 0, r = t.length; a < r; ++a) {
            if (void 0 !== (o = t[a]) && (void 0 !== e && "function" == typeof o && (o = o(e)), void 0 !== i && n.isArray(o) && (o = o[i]), void 0 !== o)) return o;
          }
        } };
    }, { 42: 42 }], 45: [function (t, e, i) {
      "use strict";
      e.exports = t(42), e.exports.easing = t(43), e.exports.canvas = t(41), e.exports.options = t(44);
    }, { 41: 41, 42: 42, 43: 43, 44: 44 }], 46: [function (t, e, i) {
      e.exports = { acquireContext: function acquireContext(t) {
          return t && t.canvas && (t = t.canvas), t && t.getContext("2d") || null;
        } };
    }, {}], 47: [function (t, e, i) {
      "use strict";
      var n = t(45),
          a = "$chartjs",
          r = "chartjs-",
          o = r + "render-monitor",
          s = r + "render-animation",
          l = ["animationstart", "webkitAnimationStart"],
          u = { touchstart: "mousedown", touchmove: "mousemove", touchend: "mouseup", pointerenter: "mouseenter", pointerdown: "mousedown", pointermove: "mousemove", pointerup: "mouseup", pointerleave: "mouseout", pointerout: "mouseout" };function d(t, e) {
        var i = n.getStyle(t, e),
            a = i && i.match(/^(\d+)(\.\d+)?px$/);return a ? Number(a[1]) : void 0;
      }var h = !!function () {
        var t = !1;try {
          var e = Object.defineProperty({}, "passive", { get: function get() {
              t = !0;
            } });window.addEventListener("e", null, e);
        } catch (t) {}return t;
      }() && { passive: !0 };function c(t, e, i) {
        t.addEventListener(e, i, h);
      }function f(t, e, i) {
        t.removeEventListener(e, i, h);
      }function g(t, e, i, n, a) {
        return { type: t, chart: e, native: a || null, x: void 0 !== i ? i : null, y: void 0 !== n ? n : null };
      }function m(t, e, i) {
        var u,
            d,
            h,
            f,
            m,
            p,
            v,
            y,
            b = t[a] || (t[a] = {}),
            x = b.resizer = function (t) {
          var e = document.createElement("div"),
              i = r + "size-monitor",
              n = "position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;";e.style.cssText = n, e.className = i, e.innerHTML = '<div class="' + i + '-expand" style="' + n + '"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="' + i + '-shrink" style="' + n + '"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div>';var a = e.childNodes[0],
              o = e.childNodes[1];e._reset = function () {
            a.scrollLeft = 1e6, a.scrollTop = 1e6, o.scrollLeft = 1e6, o.scrollTop = 1e6;
          };var s = function s() {
            e._reset(), t();
          };return c(a, "scroll", s.bind(a, "expand")), c(o, "scroll", s.bind(o, "shrink")), e;
        }((u = function u() {
          if (b.resizer) return e(g("resize", i));
        }, h = !1, f = [], function () {
          f = Array.prototype.slice.call(arguments), d = d || this, h || (h = !0, n.requestAnimFrame.call(window, function () {
            h = !1, u.apply(d, f);
          }));
        }));p = function p() {
          if (b.resizer) {
            var e = t.parentNode;e && e !== x.parentNode && e.insertBefore(x, e.firstChild), x._reset();
          }
        }, v = (m = t)[a] || (m[a] = {}), y = v.renderProxy = function (t) {
          t.animationName === s && p();
        }, n.each(l, function (t) {
          c(m, t, y);
        }), v.reflow = !!m.offsetParent, m.classList.add(o);
      }function p(t) {
        var e,
            i,
            r,
            s = t[a] || {},
            u = s.resizer;delete s.resizer, i = (e = t)[a] || {}, (r = i.renderProxy) && (n.each(l, function (t) {
          f(e, t, r);
        }), delete i.renderProxy), e.classList.remove(o), u && u.parentNode && u.parentNode.removeChild(u);
      }e.exports = { _enabled: "undefined" != typeof window && "undefined" != typeof document, initialize: function initialize() {
          var t,
              e,
              i,
              n = "from{opacity:0.99}to{opacity:1}";e = "@-webkit-keyframes " + s + "{" + n + "}@keyframes " + s + "{" + n + "}." + o + "{-webkit-animation:" + s + " 0.001s;animation:" + s + " 0.001s;}", i = (t = this)._style || document.createElement("style"), t._style || (t._style = i, e = "/* Chart.js */\n" + e, i.setAttribute("type", "text/css"), document.getElementsByTagName("head")[0].appendChild(i)), i.appendChild(document.createTextNode(e));
        }, acquireContext: function acquireContext(t, e) {
          "string" == typeof t ? t = document.getElementById(t) : t.length && (t = t[0]), t && t.canvas && (t = t.canvas);var i = t && t.getContext && t.getContext("2d");return i && i.canvas === t ? (function (t, e) {
            var i = t.style,
                n = t.getAttribute("height"),
                r = t.getAttribute("width");if (t[a] = { initial: { height: n, width: r, style: { display: i.display, height: i.height, width: i.width } } }, i.display = i.display || "block", null === r || "" === r) {
              var o = d(t, "width");void 0 !== o && (t.width = o);
            }if (null === n || "" === n) if ("" === t.style.height) t.height = t.width / (e.options.aspectRatio || 2);else {
              var s = d(t, "height");void 0 !== o && (t.height = s);
            }
          }(t, e), i) : null;
        }, releaseContext: function releaseContext(t) {
          var e = t.canvas;if (e[a]) {
            var i = e[a].initial;["height", "width"].forEach(function (t) {
              var a = i[t];n.isNullOrUndef(a) ? e.removeAttribute(t) : e.setAttribute(t, a);
            }), n.each(i.style || {}, function (t, i) {
              e.style[i] = t;
            }), e.width = e.width, delete e[a];
          }
        }, addEventListener: function addEventListener(t, e, i) {
          var r = t.canvas;if ("resize" !== e) {
            var o = i[a] || (i[a] = {});c(r, e, (o.proxies || (o.proxies = {}))[t.id + "_" + e] = function (e) {
              var a, r, o, s;i((r = t, o = u[(a = e).type] || a.type, s = n.getRelativePosition(a, r), g(o, r, s.x, s.y, a)));
            });
          } else m(r, i, t);
        }, removeEventListener: function removeEventListener(t, e, i) {
          var n = t.canvas;if ("resize" !== e) {
            var r = ((i[a] || {}).proxies || {})[t.id + "_" + e];r && f(n, e, r);
          } else p(n);
        } }, n.addEvent = c, n.removeEvent = f;
    }, { 45: 45 }], 48: [function (t, e, i) {
      "use strict";
      var n = t(45),
          a = t(46),
          r = t(47),
          o = r._enabled ? r : a;e.exports = n.extend({ initialize: function initialize() {}, acquireContext: function acquireContext() {}, releaseContext: function releaseContext() {}, addEventListener: function addEventListener() {}, removeEventListener: function removeEventListener() {} }, o);
    }, { 45: 45, 46: 46, 47: 47 }], 49: [function (t, e, i) {
      "use strict";
      e.exports = {}, e.exports.filler = t(50), e.exports.legend = t(51), e.exports.title = t(52);
    }, { 50: 50, 51: 51, 52: 52 }], 50: [function (t, e, i) {
      "use strict";
      var n = t(25),
          a = t(40),
          r = t(45);n._set("global", { plugins: { filler: { propagate: !0 } } });var o = { dataset: function dataset(t) {
          var e = t.fill,
              i = t.chart,
              n = i.getDatasetMeta(e),
              a = n && i.isDatasetVisible(e) && n.dataset._children || [],
              r = a.length || 0;return r ? function (t, e) {
            return e < r && a[e]._view || null;
          } : null;
        }, boundary: function boundary(t) {
          var e = t.boundary,
              i = e ? e.x : null,
              n = e ? e.y : null;return function (t) {
            return { x: null === i ? t.x : i, y: null === n ? t.y : n };
          };
        } };function s(t, e, i) {
        var n,
            a = t._model || {},
            r = a.fill;if (void 0 === r && (r = !!a.backgroundColor), !1 === r || null === r) return !1;if (!0 === r) return "origin";if (n = parseFloat(r, 10), isFinite(n) && Math.floor(n) === n) return "-" !== r[0] && "+" !== r[0] || (n = e + n), !(n === e || n < 0 || n >= i) && n;switch (r) {case "bottom":
            return "start";case "top":
            return "end";case "zero":
            return "origin";case "origin":case "start":case "end":
            return r;default:
            return !1;}
      }function l(t) {
        var e,
            i = t.el._model || {},
            n = t.el._scale || {},
            a = t.fill,
            r = null;if (isFinite(a)) return null;if ("start" === a ? r = void 0 === i.scaleBottom ? n.bottom : i.scaleBottom : "end" === a ? r = void 0 === i.scaleTop ? n.top : i.scaleTop : void 0 !== i.scaleZero ? r = i.scaleZero : n.getBasePosition ? r = n.getBasePosition() : n.getBasePixel && (r = n.getBasePixel()), null != r) {
          if (void 0 !== r.x && void 0 !== r.y) return r;if ("number" == typeof r && isFinite(r)) return { x: (e = n.isHorizontal()) ? r : null, y: e ? null : r };
        }return null;
      }function u(t, e, i) {
        var n,
            a = t[e].fill,
            r = [e];if (!i) return a;for (; !1 !== a && -1 === r.indexOf(a);) {
          if (!isFinite(a)) return a;if (!(n = t[a])) return !1;if (n.visible) return a;r.push(a), a = n.fill;
        }return !1;
      }function d(t) {
        return t && !t.skip;
      }function h(t, e, i, n, a) {
        var o;if (n && a) {
          for (t.moveTo(e[0].x, e[0].y), o = 1; o < n; ++o) {
            r.canvas.lineTo(t, e[o - 1], e[o]);
          }for (t.lineTo(i[a - 1].x, i[a - 1].y), o = a - 1; o > 0; --o) {
            r.canvas.lineTo(t, i[o], i[o - 1], !0);
          }
        }
      }e.exports = { id: "filler", afterDatasetsUpdate: function afterDatasetsUpdate(t, e) {
          var i,
              n,
              r,
              d,
              h,
              c,
              f,
              g = (t.data.datasets || []).length,
              m = e.propagate,
              p = [];for (n = 0; n < g; ++n) {
            d = null, (r = (i = t.getDatasetMeta(n)).dataset) && r._model && r instanceof a.Line && (d = { visible: t.isDatasetVisible(n), fill: s(r, n, g), chart: t, el: r }), i.$filler = d, p.push(d);
          }for (n = 0; n < g; ++n) {
            (d = p[n]) && (d.fill = u(p, n, m), d.boundary = l(d), d.mapper = (void 0, f = void 0, c = (h = d).fill, f = "dataset", !1 === c ? null : (isFinite(c) || (f = "boundary"), o[f](h))));
          }
        }, beforeDatasetDraw: function beforeDatasetDraw(t, e) {
          var i = e.meta.$filler;if (i) {
            var a = t.ctx,
                o = i.el,
                s = o._view,
                l = o._children || [],
                u = i.mapper,
                c = s.backgroundColor || n.global.defaultColor;u && c && l.length && (r.canvas.clipArea(a, t.chartArea), function (t, e, i, n, a, r) {
              var o,
                  s,
                  l,
                  u,
                  c,
                  f,
                  g,
                  m = e.length,
                  p = n.spanGaps,
                  v = [],
                  y = [],
                  b = 0,
                  x = 0;for (t.beginPath(), o = 0, s = m + !!r; o < s; ++o) {
                c = i(u = e[l = o % m]._view, l, n), f = d(u), g = d(c), f && g ? (b = v.push(u), x = y.push(c)) : b && x && (p ? (f && v.push(u), g && y.push(c)) : (h(t, v, y, b, x), b = x = 0, v = [], y = []));
              }h(t, v, y, b, x), t.closePath(), t.fillStyle = a, t.fill();
            }(a, l, u, s, c, o._loop), r.canvas.unclipArea(a));
          }
        } };
    }, { 25: 25, 40: 40, 45: 45 }], 51: [function (t, e, i) {
      "use strict";
      var n = t(25),
          a = t(26),
          r = t(45),
          o = t(30),
          s = r.noop;function l(t, e) {
        return t.usePointStyle ? e * Math.SQRT2 : t.boxWidth;
      }n._set("global", { legend: { display: !0, position: "top", fullWidth: !0, reverse: !1, weight: 1e3, onClick: function onClick(t, e) {
            var i = e.datasetIndex,
                n = this.chart,
                a = n.getDatasetMeta(i);a.hidden = null === a.hidden ? !n.data.datasets[i].hidden : null, n.update();
          }, onHover: null, labels: { boxWidth: 40, padding: 10, generateLabels: function generateLabels(t) {
              var e = t.data;return r.isArray(e.datasets) ? e.datasets.map(function (e, i) {
                return { text: e.label, fillStyle: r.isArray(e.backgroundColor) ? e.backgroundColor[0] : e.backgroundColor, hidden: !t.isDatasetVisible(i), lineCap: e.borderCapStyle, lineDash: e.borderDash, lineDashOffset: e.borderDashOffset, lineJoin: e.borderJoinStyle, lineWidth: e.borderWidth, strokeStyle: e.borderColor, pointStyle: e.pointStyle, datasetIndex: i };
              }, this) : [];
            } } }, legendCallback: function legendCallback(t) {
          var e = [];e.push('<ul class="' + t.id + '-legend">');for (var i = 0; i < t.data.datasets.length; i++) {
            e.push('<li><span style="background-color:' + t.data.datasets[i].backgroundColor + '"></span>'), t.data.datasets[i].label && e.push(t.data.datasets[i].label), e.push("</li>");
          }return e.push("</ul>"), e.join("");
        } });var u = a.extend({ initialize: function initialize(t) {
          r.extend(this, t), this.legendHitBoxes = [], this.doughnutMode = !1;
        }, beforeUpdate: s, update: function update(t, e, i) {
          var n = this;return n.beforeUpdate(), n.maxWidth = t, n.maxHeight = e, n.margins = i, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize;
        }, afterUpdate: s, beforeSetDimensions: s, setDimensions: function setDimensions() {
          var t = this;t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = { width: 0, height: 0 };
        }, afterSetDimensions: s, beforeBuildLabels: s, buildLabels: function buildLabels() {
          var t = this,
              e = t.options.labels || {},
              i = r.callback(e.generateLabels, [t.chart], t) || [];e.filter && (i = i.filter(function (i) {
            return e.filter(i, t.chart.data);
          })), t.options.reverse && i.reverse(), t.legendItems = i;
        }, afterBuildLabels: s, beforeFit: s, fit: function fit() {
          var t = this,
              e = t.options,
              i = e.labels,
              a = e.display,
              o = t.ctx,
              s = n.global,
              u = r.valueOrDefault,
              d = u(i.fontSize, s.defaultFontSize),
              h = u(i.fontStyle, s.defaultFontStyle),
              c = u(i.fontFamily, s.defaultFontFamily),
              f = r.fontString(d, h, c),
              g = t.legendHitBoxes = [],
              m = t.minSize,
              p = t.isHorizontal();if (p ? (m.width = t.maxWidth, m.height = a ? 10 : 0) : (m.width = a ? 10 : 0, m.height = t.maxHeight), a) if (o.font = f, p) {
            var v = t.lineWidths = [0],
                y = t.legendItems.length ? d + i.padding : 0;o.textAlign = "left", o.textBaseline = "top", r.each(t.legendItems, function (e, n) {
              var a = l(i, d) + d / 2 + o.measureText(e.text).width;v[v.length - 1] + a + i.padding >= t.width && (y += d + i.padding, v[v.length] = t.left), g[n] = { left: 0, top: 0, width: a, height: d }, v[v.length - 1] += a + i.padding;
            }), m.height += y;
          } else {
            var b = i.padding,
                x = t.columnWidths = [],
                _ = i.padding,
                k = 0,
                w = 0,
                M = d + b;r.each(t.legendItems, function (t, e) {
              var n = l(i, d) + d / 2 + o.measureText(t.text).width;w + M > m.height && (_ += k + i.padding, x.push(k), k = 0, w = 0), k = Math.max(k, n), w += M, g[e] = { left: 0, top: 0, width: n, height: d };
            }), _ += k, x.push(k), m.width += _;
          }t.width = m.width, t.height = m.height;
        }, afterFit: s, isHorizontal: function isHorizontal() {
          return "top" === this.options.position || "bottom" === this.options.position;
        }, draw: function draw() {
          var t = this,
              e = t.options,
              i = e.labels,
              a = n.global,
              o = a.elements.line,
              s = t.width,
              u = t.lineWidths;if (e.display) {
            var d,
                h = t.ctx,
                c = r.valueOrDefault,
                f = c(i.fontColor, a.defaultFontColor),
                g = c(i.fontSize, a.defaultFontSize),
                m = c(i.fontStyle, a.defaultFontStyle),
                p = c(i.fontFamily, a.defaultFontFamily),
                v = r.fontString(g, m, p);h.textAlign = "left", h.textBaseline = "middle", h.lineWidth = .5, h.strokeStyle = f, h.fillStyle = f, h.font = v;var y = l(i, g),
                b = t.legendHitBoxes,
                x = t.isHorizontal();d = x ? { x: t.left + (s - u[0]) / 2, y: t.top + i.padding, line: 0 } : { x: t.left + i.padding, y: t.top + i.padding, line: 0 };var _ = g + i.padding;r.each(t.legendItems, function (n, l) {
              var f,
                  m,
                  p,
                  v,
                  k,
                  w = h.measureText(n.text).width,
                  M = y + g / 2 + w,
                  S = d.x,
                  D = d.y;x ? S + M >= s && (D = d.y += _, d.line++, S = d.x = t.left + (s - u[d.line]) / 2) : D + _ > t.bottom && (S = d.x = S + t.columnWidths[d.line] + i.padding, D = d.y = t.top + i.padding, d.line++), function (t, i, n) {
                if (!(isNaN(y) || y <= 0)) {
                  h.save(), h.fillStyle = c(n.fillStyle, a.defaultColor), h.lineCap = c(n.lineCap, o.borderCapStyle), h.lineDashOffset = c(n.lineDashOffset, o.borderDashOffset), h.lineJoin = c(n.lineJoin, o.borderJoinStyle), h.lineWidth = c(n.lineWidth, o.borderWidth), h.strokeStyle = c(n.strokeStyle, a.defaultColor);var s = 0 === c(n.lineWidth, o.borderWidth);if (h.setLineDash && h.setLineDash(c(n.lineDash, o.borderDash)), e.labels && e.labels.usePointStyle) {
                    var l = g * Math.SQRT2 / 2,
                        u = l / Math.SQRT2,
                        d = t + u,
                        f = i + u;r.canvas.drawPoint(h, n.pointStyle, l, d, f);
                  } else s || h.strokeRect(t, i, y, g), h.fillRect(t, i, y, g);h.restore();
                }
              }(S, D, n), b[l].left = S, b[l].top = D, f = n, m = w, v = y + (p = g / 2) + S, k = D + p, h.fillText(f.text, v, k), f.hidden && (h.beginPath(), h.lineWidth = 2, h.moveTo(v, k), h.lineTo(v + m, k), h.stroke()), x ? d.x += M + i.padding : d.y += _;
            });
          }
        }, handleEvent: function handleEvent(t) {
          var e = this,
              i = e.options,
              n = "mouseup" === t.type ? "click" : t.type,
              a = !1;if ("mousemove" === n) {
            if (!i.onHover) return;
          } else {
            if ("click" !== n) return;if (!i.onClick) return;
          }var r = t.x,
              o = t.y;if (r >= e.left && r <= e.right && o >= e.top && o <= e.bottom) for (var s = e.legendHitBoxes, l = 0; l < s.length; ++l) {
            var u = s[l];if (r >= u.left && r <= u.left + u.width && o >= u.top && o <= u.top + u.height) {
              if ("click" === n) {
                i.onClick.call(e, t.native, e.legendItems[l]), a = !0;break;
              }if ("mousemove" === n) {
                i.onHover.call(e, t.native, e.legendItems[l]), a = !0;break;
              }
            }
          }return a;
        } });function d(t, e) {
        var i = new u({ ctx: t.ctx, options: e, chart: t });o.configure(t, i, e), o.addBox(t, i), t.legend = i;
      }e.exports = { id: "legend", _element: u, beforeInit: function beforeInit(t) {
          var e = t.options.legend;e && d(t, e);
        }, beforeUpdate: function beforeUpdate(t) {
          var e = t.options.legend,
              i = t.legend;e ? (r.mergeIf(e, n.global.legend), i ? (o.configure(t, i, e), i.options = e) : d(t, e)) : i && (o.removeBox(t, i), delete t.legend);
        }, afterEvent: function afterEvent(t, e) {
          var i = t.legend;i && i.handleEvent(e);
        } };
    }, { 25: 25, 26: 26, 30: 30, 45: 45 }], 52: [function (t, e, i) {
      "use strict";
      var n = t(25),
          a = t(26),
          r = t(45),
          o = t(30),
          s = r.noop;n._set("global", { title: { display: !1, fontStyle: "bold", fullWidth: !0, lineHeight: 1.2, padding: 10, position: "top", text: "", weight: 2e3 } });var l = a.extend({ initialize: function initialize(t) {
          r.extend(this, t), this.legendHitBoxes = [];
        }, beforeUpdate: s, update: function update(t, e, i) {
          var n = this;return n.beforeUpdate(), n.maxWidth = t, n.maxHeight = e, n.margins = i, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize;
        }, afterUpdate: s, beforeSetDimensions: s, setDimensions: function setDimensions() {
          var t = this;t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = { width: 0, height: 0 };
        }, afterSetDimensions: s, beforeBuildLabels: s, buildLabels: s, afterBuildLabels: s, beforeFit: s, fit: function fit() {
          var t = r.valueOrDefault,
              e = this.options,
              i = e.display,
              a = t(e.fontSize, n.global.defaultFontSize),
              o = this.minSize,
              s = r.isArray(e.text) ? e.text.length : 1,
              l = r.options.toLineHeight(e.lineHeight, a),
              u = i ? s * l + 2 * e.padding : 0;this.isHorizontal() ? (o.width = this.maxWidth, o.height = u) : (o.width = u, o.height = this.maxHeight), this.width = o.width, this.height = o.height;
        }, afterFit: s, isHorizontal: function isHorizontal() {
          var t = this.options.position;return "top" === t || "bottom" === t;
        }, draw: function draw() {
          var t = this.ctx,
              e = r.valueOrDefault,
              i = this.options,
              a = n.global;if (i.display) {
            var o,
                s,
                l,
                u = e(i.fontSize, a.defaultFontSize),
                d = e(i.fontStyle, a.defaultFontStyle),
                h = e(i.fontFamily, a.defaultFontFamily),
                c = r.fontString(u, d, h),
                f = r.options.toLineHeight(i.lineHeight, u),
                g = f / 2 + i.padding,
                m = 0,
                p = this.top,
                v = this.left,
                y = this.bottom,
                b = this.right;t.fillStyle = e(i.fontColor, a.defaultFontColor), t.font = c, this.isHorizontal() ? (s = v + (b - v) / 2, l = p + g, o = b - v) : (s = "left" === i.position ? v + g : b - g, l = p + (y - p) / 2, o = y - p, m = Math.PI * ("left" === i.position ? -.5 : .5)), t.save(), t.translate(s, l), t.rotate(m), t.textAlign = "center", t.textBaseline = "middle";var x = i.text;if (r.isArray(x)) for (var _ = 0, k = 0; k < x.length; ++k) {
              t.fillText(x[k], 0, _, o), _ += f;
            } else t.fillText(x, 0, 0, o);t.restore();
          }
        } });function u(t, e) {
        var i = new l({ ctx: t.ctx, options: e, chart: t });o.configure(t, i, e), o.addBox(t, i), t.titleBlock = i;
      }e.exports = { id: "title", _element: l, beforeInit: function beforeInit(t) {
          var e = t.options.title;e && u(t, e);
        }, beforeUpdate: function beforeUpdate(t) {
          var e = t.options.title,
              i = t.titleBlock;e ? (r.mergeIf(e, n.global.title), i ? (o.configure(t, i, e), i.options = e) : u(t, e)) : i && (o.removeBox(t, i), delete t.titleBlock);
        } };
    }, { 25: 25, 26: 26, 30: 30, 45: 45 }], 53: [function (t, e, i) {
      "use strict";
      e.exports = function (t) {
        var e = t.Scale.extend({ getLabels: function getLabels() {
            var t = this.chart.data;return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels;
          }, determineDataLimits: function determineDataLimits() {
            var t,
                e = this,
                i = e.getLabels();e.minIndex = 0, e.maxIndex = i.length - 1, void 0 !== e.options.ticks.min && (t = i.indexOf(e.options.ticks.min), e.minIndex = -1 !== t ? t : e.minIndex), void 0 !== e.options.ticks.max && (t = i.indexOf(e.options.ticks.max), e.maxIndex = -1 !== t ? t : e.maxIndex), e.min = i[e.minIndex], e.max = i[e.maxIndex];
          }, buildTicks: function buildTicks() {
            var t = this.getLabels();this.ticks = 0 === this.minIndex && this.maxIndex === t.length - 1 ? t : t.slice(this.minIndex, this.maxIndex + 1);
          }, getLabelForIndex: function getLabelForIndex(t, e) {
            var i = this.chart.data,
                n = this.isHorizontal();return i.yLabels && !n ? this.getRightValue(i.datasets[e].data[t]) : this.ticks[t - this.minIndex];
          }, getPixelForValue: function getPixelForValue(t, e) {
            var i,
                n = this,
                a = n.options.offset,
                r = Math.max(n.maxIndex + 1 - n.minIndex - (a ? 0 : 1), 1);if (null != t && (i = n.isHorizontal() ? t.x : t.y), void 0 !== i || void 0 !== t && isNaN(e)) {
              t = i || t;var o = n.getLabels().indexOf(t);e = -1 !== o ? o : e;
            }if (n.isHorizontal()) {
              var s = n.width / r,
                  l = s * (e - n.minIndex);return a && (l += s / 2), n.left + Math.round(l);
            }var u = n.height / r,
                d = u * (e - n.minIndex);return a && (d += u / 2), n.top + Math.round(d);
          }, getPixelForTick: function getPixelForTick(t) {
            return this.getPixelForValue(this.ticks[t], t + this.minIndex, null);
          }, getValueForPixel: function getValueForPixel(t) {
            var e = this.options.offset,
                i = Math.max(this._ticks.length - (e ? 0 : 1), 1),
                n = this.isHorizontal(),
                a = (n ? this.width : this.height) / i;return t -= n ? this.left : this.top, e && (t -= a / 2), (t <= 0 ? 0 : Math.round(t / a)) + this.minIndex;
          }, getBasePixel: function getBasePixel() {
            return this.bottom;
          } });t.scaleService.registerScaleType("category", e, { position: "bottom" });
      };
    }, {}], 54: [function (t, e, i) {
      "use strict";
      var n = t(25),
          a = t(45),
          r = t(34);e.exports = function (t) {
        var e = { position: "left", ticks: { callback: r.formatters.linear } },
            i = t.LinearScaleBase.extend({ determineDataLimits: function determineDataLimits() {
            var t = this,
                e = t.options,
                i = t.chart,
                n = i.data.datasets,
                r = t.isHorizontal();function o(e) {
              return r ? e.xAxisID === t.id : e.yAxisID === t.id;
            }t.min = null, t.max = null;var s = e.stacked;if (void 0 === s && a.each(n, function (t, e) {
              if (!s) {
                var n = i.getDatasetMeta(e);i.isDatasetVisible(e) && o(n) && void 0 !== n.stack && (s = !0);
              }
            }), e.stacked || s) {
              var l = {};a.each(n, function (n, r) {
                var s = i.getDatasetMeta(r),
                    u = [s.type, void 0 === e.stacked && void 0 === s.stack ? r : "", s.stack].join(".");void 0 === l[u] && (l[u] = { positiveValues: [], negativeValues: [] });var d = l[u].positiveValues,
                    h = l[u].negativeValues;i.isDatasetVisible(r) && o(s) && a.each(n.data, function (i, n) {
                  var a = +t.getRightValue(i);isNaN(a) || s.data[n].hidden || (d[n] = d[n] || 0, h[n] = h[n] || 0, e.relativePoints ? d[n] = 100 : a < 0 ? h[n] += a : d[n] += a);
                });
              }), a.each(l, function (e) {
                var i = e.positiveValues.concat(e.negativeValues),
                    n = a.min(i),
                    r = a.max(i);t.min = null === t.min ? n : Math.min(t.min, n), t.max = null === t.max ? r : Math.max(t.max, r);
              });
            } else a.each(n, function (e, n) {
              var r = i.getDatasetMeta(n);i.isDatasetVisible(n) && o(r) && a.each(e.data, function (e, i) {
                var n = +t.getRightValue(e);isNaN(n) || r.data[i].hidden || (null === t.min ? t.min = n : n < t.min && (t.min = n), null === t.max ? t.max = n : n > t.max && (t.max = n));
              });
            });t.min = isFinite(t.min) && !isNaN(t.min) ? t.min : 0, t.max = isFinite(t.max) && !isNaN(t.max) ? t.max : 1, this.handleTickRangeOptions();
          }, getTickLimit: function getTickLimit() {
            var t,
                e = this.options.ticks;if (this.isHorizontal()) t = Math.min(e.maxTicksLimit ? e.maxTicksLimit : 11, Math.ceil(this.width / 50));else {
              var i = a.valueOrDefault(e.fontSize, n.global.defaultFontSize);t = Math.min(e.maxTicksLimit ? e.maxTicksLimit : 11, Math.ceil(this.height / (2 * i)));
            }return t;
          }, handleDirectionalChanges: function handleDirectionalChanges() {
            this.isHorizontal() || this.ticks.reverse();
          }, getLabelForIndex: function getLabelForIndex(t, e) {
            return +this.getRightValue(this.chart.data.datasets[e].data[t]);
          }, getPixelForValue: function getPixelForValue(t) {
            var e = this.start,
                i = +this.getRightValue(t),
                n = this.end - e;return this.isHorizontal() ? this.left + this.width / n * (i - e) : this.bottom - this.height / n * (i - e);
          }, getValueForPixel: function getValueForPixel(t) {
            var e = this.isHorizontal(),
                i = e ? this.width : this.height,
                n = (e ? t - this.left : this.bottom - t) / i;return this.start + (this.end - this.start) * n;
          }, getPixelForTick: function getPixelForTick(t) {
            return this.getPixelForValue(this.ticksAsNumbers[t]);
          } });t.scaleService.registerScaleType("linear", i, e);
      };
    }, { 25: 25, 34: 34, 45: 45 }], 55: [function (t, e, i) {
      "use strict";
      var n = t(45);e.exports = function (t) {
        var e = n.noop;t.LinearScaleBase = t.Scale.extend({ getRightValue: function getRightValue(e) {
            return "string" == typeof e ? +e : t.Scale.prototype.getRightValue.call(this, e);
          }, handleTickRangeOptions: function handleTickRangeOptions() {
            var t = this,
                e = t.options.ticks;if (e.beginAtZero) {
              var i = n.sign(t.min),
                  a = n.sign(t.max);i < 0 && a < 0 ? t.max = 0 : i > 0 && a > 0 && (t.min = 0);
            }var r = void 0 !== e.min || void 0 !== e.suggestedMin,
                o = void 0 !== e.max || void 0 !== e.suggestedMax;void 0 !== e.min ? t.min = e.min : void 0 !== e.suggestedMin && (null === t.min ? t.min = e.suggestedMin : t.min = Math.min(t.min, e.suggestedMin)), void 0 !== e.max ? t.max = e.max : void 0 !== e.suggestedMax && (null === t.max ? t.max = e.suggestedMax : t.max = Math.max(t.max, e.suggestedMax)), r !== o && t.min >= t.max && (r ? t.max = t.min + 1 : t.min = t.max - 1), t.min === t.max && (t.max++, e.beginAtZero || t.min--);
          }, getTickLimit: e, handleDirectionalChanges: e, buildTicks: function buildTicks() {
            var t = this,
                e = t.options.ticks,
                i = t.getTickLimit(),
                a = { maxTicks: i = Math.max(2, i), min: e.min, max: e.max, stepSize: n.valueOrDefault(e.fixedStepSize, e.stepSize) },
                r = t.ticks = function (t, e) {
              var i,
                  a = [];if (t.stepSize && t.stepSize > 0) i = t.stepSize;else {
                var r = n.niceNum(e.max - e.min, !1);i = n.niceNum(r / (t.maxTicks - 1), !0);
              }var o = Math.floor(e.min / i) * i,
                  s = Math.ceil(e.max / i) * i;t.min && t.max && t.stepSize && n.almostWhole((t.max - t.min) / t.stepSize, i / 1e3) && (o = t.min, s = t.max);var l = (s - o) / i;l = n.almostEquals(l, Math.round(l), i / 1e3) ? Math.round(l) : Math.ceil(l);var u = 1;i < 1 && (u = Math.pow(10, i.toString().length - 2), o = Math.round(o * u) / u, s = Math.round(s * u) / u), a.push(void 0 !== t.min ? t.min : o);for (var d = 1; d < l; ++d) {
                a.push(Math.round((o + d * i) * u) / u);
              }return a.push(void 0 !== t.max ? t.max : s), a;
            }(a, t);t.handleDirectionalChanges(), t.max = n.max(r), t.min = n.min(r), e.reverse ? (r.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max);
          }, convertTicksToLabels: function convertTicksToLabels() {
            this.ticksAsNumbers = this.ticks.slice(), this.zeroLineIndex = this.ticks.indexOf(0), t.Scale.prototype.convertTicksToLabels.call(this);
          } });
      };
    }, { 45: 45 }], 56: [function (t, e, i) {
      "use strict";
      var n = t(45),
          a = t(34);e.exports = function (t) {
        var e = { position: "left", ticks: { callback: a.formatters.logarithmic } },
            i = t.Scale.extend({ determineDataLimits: function determineDataLimits() {
            var t = this,
                e = t.options,
                i = t.chart,
                a = i.data.datasets,
                r = t.isHorizontal();function o(e) {
              return r ? e.xAxisID === t.id : e.yAxisID === t.id;
            }t.min = null, t.max = null, t.minNotZero = null;var s = e.stacked;if (void 0 === s && n.each(a, function (t, e) {
              if (!s) {
                var n = i.getDatasetMeta(e);i.isDatasetVisible(e) && o(n) && void 0 !== n.stack && (s = !0);
              }
            }), e.stacked || s) {
              var l = {};n.each(a, function (a, r) {
                var s = i.getDatasetMeta(r),
                    u = [s.type, void 0 === e.stacked && void 0 === s.stack ? r : "", s.stack].join(".");i.isDatasetVisible(r) && o(s) && (void 0 === l[u] && (l[u] = []), n.each(a.data, function (e, i) {
                  var n = l[u],
                      a = +t.getRightValue(e);isNaN(a) || s.data[i].hidden || a < 0 || (n[i] = n[i] || 0, n[i] += a);
                }));
              }), n.each(l, function (e) {
                if (e.length > 0) {
                  var i = n.min(e),
                      a = n.max(e);t.min = null === t.min ? i : Math.min(t.min, i), t.max = null === t.max ? a : Math.max(t.max, a);
                }
              });
            } else n.each(a, function (e, a) {
              var r = i.getDatasetMeta(a);i.isDatasetVisible(a) && o(r) && n.each(e.data, function (e, i) {
                var n = +t.getRightValue(e);isNaN(n) || r.data[i].hidden || n < 0 || (null === t.min ? t.min = n : n < t.min && (t.min = n), null === t.max ? t.max = n : n > t.max && (t.max = n), 0 !== n && (null === t.minNotZero || n < t.minNotZero) && (t.minNotZero = n));
              });
            });this.handleTickRangeOptions();
          }, handleTickRangeOptions: function handleTickRangeOptions() {
            var t = this,
                e = t.options.ticks,
                i = n.valueOrDefault;t.min = i(e.min, t.min), t.max = i(e.max, t.max), t.min === t.max && (0 !== t.min && null !== t.min ? (t.min = Math.pow(10, Math.floor(n.log10(t.min)) - 1), t.max = Math.pow(10, Math.floor(n.log10(t.max)) + 1)) : (t.min = 1, t.max = 10)), null === t.min && (t.min = Math.pow(10, Math.floor(n.log10(t.max)) - 1)), null === t.max && (t.max = 0 !== t.min ? Math.pow(10, Math.floor(n.log10(t.min)) + 1) : 10), null === t.minNotZero && (t.min > 0 ? t.minNotZero = t.min : t.max < 1 ? t.minNotZero = Math.pow(10, Math.floor(n.log10(t.max))) : t.minNotZero = 1);
          }, buildTicks: function buildTicks() {
            var t = this,
                e = t.options.ticks,
                i = !t.isHorizontal(),
                a = { min: e.min, max: e.max },
                r = t.ticks = function (t, e) {
              var i,
                  a,
                  r = [],
                  o = n.valueOrDefault,
                  s = o(t.min, Math.pow(10, Math.floor(n.log10(e.min)))),
                  l = Math.floor(n.log10(e.max)),
                  u = Math.ceil(e.max / Math.pow(10, l));0 === s ? (i = Math.floor(n.log10(e.minNotZero)), a = Math.floor(e.minNotZero / Math.pow(10, i)), r.push(s), s = a * Math.pow(10, i)) : (i = Math.floor(n.log10(s)), a = Math.floor(s / Math.pow(10, i)));for (var d = i < 0 ? Math.pow(10, Math.abs(i)) : 1; r.push(s), 10 == ++a && (a = 1, d = ++i >= 0 ? 1 : d), s = Math.round(a * Math.pow(10, i) * d) / d, i < l || i === l && a < u;) {}var h = o(t.max, s);return r.push(h), r;
            }(a, t);t.max = n.max(r), t.min = n.min(r), e.reverse ? (i = !i, t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max), i && r.reverse();
          }, convertTicksToLabels: function convertTicksToLabels() {
            this.tickValues = this.ticks.slice(), t.Scale.prototype.convertTicksToLabels.call(this);
          }, getLabelForIndex: function getLabelForIndex(t, e) {
            return +this.getRightValue(this.chart.data.datasets[e].data[t]);
          }, getPixelForTick: function getPixelForTick(t) {
            return this.getPixelForValue(this.tickValues[t]);
          }, _getFirstTickValue: function _getFirstTickValue(t) {
            var e = Math.floor(n.log10(t));return Math.floor(t / Math.pow(10, e)) * Math.pow(10, e);
          }, getPixelForValue: function getPixelForValue(e) {
            var i,
                a,
                r,
                o,
                s,
                l = this,
                u = l.options.ticks.reverse,
                d = n.log10,
                h = l._getFirstTickValue(l.minNotZero),
                c = 0;return e = +l.getRightValue(e), u ? (r = l.end, o = l.start, s = -1) : (r = l.start, o = l.end, s = 1), l.isHorizontal() ? (i = l.width, a = u ? l.right : l.left) : (i = l.height, s *= -1, a = u ? l.top : l.bottom), e !== r && (0 === r && (i -= c = n.getValueOrDefault(l.options.ticks.fontSize, t.defaults.global.defaultFontSize), r = h), 0 !== e && (c += i / (d(o) - d(r)) * (d(e) - d(r))), a += s * c), a;
          }, getValueForPixel: function getValueForPixel(e) {
            var i,
                a,
                r,
                o,
                s = this,
                l = s.options.ticks.reverse,
                u = n.log10,
                d = s._getFirstTickValue(s.minNotZero);if (l ? (a = s.end, r = s.start) : (a = s.start, r = s.end), s.isHorizontal() ? (i = s.width, o = l ? s.right - e : e - s.left) : (i = s.height, o = l ? e - s.top : s.bottom - e), o !== a) {
              if (0 === a) {
                var h = n.getValueOrDefault(s.options.ticks.fontSize, t.defaults.global.defaultFontSize);o -= h, i -= h, a = d;
              }o *= u(r) - u(a), o /= i, o = Math.pow(10, u(a) + o);
            }return o;
          } });t.scaleService.registerScaleType("logarithmic", i, e);
      };
    }, { 34: 34, 45: 45 }], 57: [function (t, e, i) {
      "use strict";
      var n = t(25),
          a = t(45),
          r = t(34);e.exports = function (t) {
        var e = n.global,
            i = { display: !0, animate: !0, position: "chartArea", angleLines: { display: !0, color: "rgba(0, 0, 0, 0.1)", lineWidth: 1 }, gridLines: { circular: !1 }, ticks: { showLabelBackdrop: !0, backdropColor: "rgba(255,255,255,0.75)", backdropPaddingY: 2, backdropPaddingX: 2, callback: r.formatters.linear }, pointLabels: { display: !0, fontSize: 10, callback: function callback(t) {
              return t;
            } } };function o(t) {
          var e = t.options;return e.angleLines.display || e.pointLabels.display ? t.chart.data.labels.length : 0;
        }function s(t) {
          var i = t.options.pointLabels,
              n = a.valueOrDefault(i.fontSize, e.defaultFontSize),
              r = a.valueOrDefault(i.fontStyle, e.defaultFontStyle),
              o = a.valueOrDefault(i.fontFamily, e.defaultFontFamily);return { size: n, style: r, family: o, font: a.fontString(n, r, o) };
        }function l(t, e, i, n, a) {
          return t === n || t === a ? { start: e - i / 2, end: e + i / 2 } : t < n || t > a ? { start: e - i - 5, end: e } : { start: e, end: e + i + 5 };
        }function u(t, e, i, n) {
          if (a.isArray(e)) for (var r = i.y, o = 1.5 * n, s = 0; s < e.length; ++s) {
            t.fillText(e[s], i.x, r), r += o;
          } else t.fillText(e, i.x, i.y);
        }function d(t) {
          return a.isNumber(t) ? t : 0;
        }var h = t.LinearScaleBase.extend({ setDimensions: function setDimensions() {
            var t = this,
                i = t.options,
                n = i.ticks;t.width = t.maxWidth, t.height = t.maxHeight, t.xCenter = Math.round(t.width / 2), t.yCenter = Math.round(t.height / 2);var r = a.min([t.height, t.width]),
                o = a.valueOrDefault(n.fontSize, e.defaultFontSize);t.drawingArea = i.display ? r / 2 - (o / 2 + n.backdropPaddingY) : r / 2;
          }, determineDataLimits: function determineDataLimits() {
            var t = this,
                e = t.chart,
                i = Number.POSITIVE_INFINITY,
                n = Number.NEGATIVE_INFINITY;a.each(e.data.datasets, function (r, o) {
              if (e.isDatasetVisible(o)) {
                var s = e.getDatasetMeta(o);a.each(r.data, function (e, a) {
                  var r = +t.getRightValue(e);isNaN(r) || s.data[a].hidden || (i = Math.min(r, i), n = Math.max(r, n));
                });
              }
            }), t.min = i === Number.POSITIVE_INFINITY ? 0 : i, t.max = n === Number.NEGATIVE_INFINITY ? 0 : n, t.handleTickRangeOptions();
          }, getTickLimit: function getTickLimit() {
            var t = this.options.ticks,
                i = a.valueOrDefault(t.fontSize, e.defaultFontSize);return Math.min(t.maxTicksLimit ? t.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * i)));
          }, convertTicksToLabels: function convertTicksToLabels() {
            t.LinearScaleBase.prototype.convertTicksToLabels.call(this), this.pointLabels = this.chart.data.labels.map(this.options.pointLabels.callback, this);
          }, getLabelForIndex: function getLabelForIndex(t, e) {
            return +this.getRightValue(this.chart.data.datasets[e].data[t]);
          }, fit: function fit() {
            var t, e;this.options.pointLabels.display ? function (t) {
              var e,
                  i,
                  n,
                  r = s(t),
                  u = Math.min(t.height / 2, t.width / 2),
                  d = { r: t.width, l: 0, t: t.height, b: 0 },
                  h = {};t.ctx.font = r.font, t._pointLabelSizes = [];var c,
                  f,
                  g,
                  m = o(t);for (e = 0; e < m; e++) {
                n = t.getPointPosition(e, u), c = t.ctx, f = r.size, g = t.pointLabels[e] || "", i = a.isArray(g) ? { w: a.longestText(c, c.font, g), h: g.length * f + 1.5 * (g.length - 1) * f } : { w: c.measureText(g).width, h: f }, t._pointLabelSizes[e] = i;var p = t.getIndexAngle(e),
                    v = a.toDegrees(p) % 360,
                    y = l(v, n.x, i.w, 0, 180),
                    b = l(v, n.y, i.h, 90, 270);y.start < d.l && (d.l = y.start, h.l = p), y.end > d.r && (d.r = y.end, h.r = p), b.start < d.t && (d.t = b.start, h.t = p), b.end > d.b && (d.b = b.end, h.b = p);
              }t.setReductions(u, d, h);
            }(this) : (t = this, e = Math.min(t.height / 2, t.width / 2), t.drawingArea = Math.round(e), t.setCenterPoint(0, 0, 0, 0));
          }, setReductions: function setReductions(t, e, i) {
            var n = e.l / Math.sin(i.l),
                a = Math.max(e.r - this.width, 0) / Math.sin(i.r),
                r = -e.t / Math.cos(i.t),
                o = -Math.max(e.b - this.height, 0) / Math.cos(i.b);n = d(n), a = d(a), r = d(r), o = d(o), this.drawingArea = Math.min(Math.round(t - (n + a) / 2), Math.round(t - (r + o) / 2)), this.setCenterPoint(n, a, r, o);
          }, setCenterPoint: function setCenterPoint(t, e, i, n) {
            var a = this,
                r = a.width - e - a.drawingArea,
                o = t + a.drawingArea,
                s = i + a.drawingArea,
                l = a.height - n - a.drawingArea;a.xCenter = Math.round((o + r) / 2 + a.left), a.yCenter = Math.round((s + l) / 2 + a.top);
          }, getIndexAngle: function getIndexAngle(t) {
            return t * (2 * Math.PI / o(this)) + (this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0) * Math.PI * 2 / 360;
          }, getDistanceFromCenterForValue: function getDistanceFromCenterForValue(t) {
            if (null === t) return 0;var e = this.drawingArea / (this.max - this.min);return this.options.ticks.reverse ? (this.max - t) * e : (t - this.min) * e;
          }, getPointPosition: function getPointPosition(t, e) {
            var i = this.getIndexAngle(t) - Math.PI / 2;return { x: Math.round(Math.cos(i) * e) + this.xCenter, y: Math.round(Math.sin(i) * e) + this.yCenter };
          }, getPointPositionForValue: function getPointPositionForValue(t, e) {
            return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
          }, getBasePosition: function getBasePosition() {
            var t = this.min,
                e = this.max;return this.getPointPositionForValue(0, this.beginAtZero ? 0 : t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0);
          }, draw: function draw() {
            var t = this,
                i = t.options,
                n = i.gridLines,
                r = i.ticks,
                l = a.valueOrDefault;if (i.display) {
              var d = t.ctx,
                  h = this.getIndexAngle(0),
                  c = l(r.fontSize, e.defaultFontSize),
                  f = l(r.fontStyle, e.defaultFontStyle),
                  g = l(r.fontFamily, e.defaultFontFamily),
                  m = a.fontString(c, f, g);a.each(t.ticks, function (i, s) {
                if (s > 0 || r.reverse) {
                  var u = t.getDistanceFromCenterForValue(t.ticksAsNumbers[s]);if (n.display && 0 !== s && function (t, e, i, n) {
                    var r = t.ctx;if (r.strokeStyle = a.valueAtIndexOrDefault(e.color, n - 1), r.lineWidth = a.valueAtIndexOrDefault(e.lineWidth, n - 1), t.options.gridLines.circular) r.beginPath(), r.arc(t.xCenter, t.yCenter, i, 0, 2 * Math.PI), r.closePath(), r.stroke();else {
                      var s = o(t);if (0 === s) return;r.beginPath();var l = t.getPointPosition(0, i);r.moveTo(l.x, l.y);for (var u = 1; u < s; u++) {
                        l = t.getPointPosition(u, i), r.lineTo(l.x, l.y);
                      }r.closePath(), r.stroke();
                    }
                  }(t, n, u, s), r.display) {
                    var f = l(r.fontColor, e.defaultFontColor);if (d.font = m, d.save(), d.translate(t.xCenter, t.yCenter), d.rotate(h), r.showLabelBackdrop) {
                      var g = d.measureText(i).width;d.fillStyle = r.backdropColor, d.fillRect(-g / 2 - r.backdropPaddingX, -u - c / 2 - r.backdropPaddingY, g + 2 * r.backdropPaddingX, c + 2 * r.backdropPaddingY);
                    }d.textAlign = "center", d.textBaseline = "middle", d.fillStyle = f, d.fillText(i, 0, -u), d.restore();
                  }
                }
              }), (i.angleLines.display || i.pointLabels.display) && function (t) {
                var i = t.ctx,
                    n = t.options,
                    r = n.angleLines,
                    l = n.pointLabels;i.lineWidth = r.lineWidth, i.strokeStyle = r.color;var d,
                    h,
                    c,
                    f,
                    g = t.getDistanceFromCenterForValue(n.ticks.reverse ? t.min : t.max),
                    m = s(t);i.textBaseline = "top";for (var p = o(t) - 1; p >= 0; p--) {
                  if (r.display) {
                    var v = t.getPointPosition(p, g);i.beginPath(), i.moveTo(t.xCenter, t.yCenter), i.lineTo(v.x, v.y), i.stroke(), i.closePath();
                  }if (l.display) {
                    var y = t.getPointPosition(p, g + 5),
                        b = a.valueAtIndexOrDefault(l.fontColor, p, e.defaultFontColor);i.font = m.font, i.fillStyle = b;var x = t.getIndexAngle(p),
                        _ = a.toDegrees(x);i.textAlign = 0 === (f = _) || 180 === f ? "center" : f < 180 ? "left" : "right", d = _, h = t._pointLabelSizes[p], c = y, 90 === d || 270 === d ? c.y -= h.h / 2 : (d > 270 || d < 90) && (c.y -= h.h), u(i, t.pointLabels[p] || "", y, m.size);
                  }
                }
              }(t);
            }
          } });t.scaleService.registerScaleType("radialLinear", h, i);
      };
    }, { 25: 25, 34: 34, 45: 45 }], 58: [function (t, e, i) {
      "use strict";
      var n = t(6);n = "function" == typeof n ? n : window.moment;var a = t(25),
          r = t(45),
          o = Number.MIN_SAFE_INTEGER || -9007199254740991,
          s = Number.MAX_SAFE_INTEGER || 9007199254740991,
          l = { millisecond: { common: !0, size: 1, steps: [1, 2, 5, 10, 20, 50, 100, 250, 500] }, second: { common: !0, size: 1e3, steps: [1, 2, 5, 10, 30] }, minute: { common: !0, size: 6e4, steps: [1, 2, 5, 10, 30] }, hour: { common: !0, size: 36e5, steps: [1, 2, 3, 6, 12] }, day: { common: !0, size: 864e5, steps: [1, 2, 5] }, week: { common: !1, size: 6048e5, steps: [1, 2, 3, 4] }, month: { common: !0, size: 2628e6, steps: [1, 2, 3] }, quarter: { common: !1, size: 7884e6, steps: [1, 2, 3, 4] }, year: { common: !0, size: 3154e7 } },
          u = Object.keys(l);function d(t, e) {
        return t - e;
      }function h(t) {
        var e,
            i,
            n,
            a = {},
            r = [];for (e = 0, i = t.length; e < i; ++e) {
          a[n = t[e]] || (a[n] = !0, r.push(n));
        }return r;
      }function c(t, e, i, n) {
        var a = function (t, e, i) {
          for (var n, a, r, o = 0, s = t.length - 1; o >= 0 && o <= s;) {
            if (a = t[(n = o + s >> 1) - 1] || null, r = t[n], !a) return { lo: null, hi: r };if (r[e] < i) o = n + 1;else {
              if (!(a[e] > i)) return { lo: a, hi: r };s = n - 1;
            }
          }return { lo: r, hi: null };
        }(t, e, i),
            r = a.lo ? a.hi ? a.lo : t[t.length - 2] : t[0],
            o = a.lo ? a.hi ? a.hi : t[t.length - 1] : t[1],
            s = o[e] - r[e],
            l = s ? (i - r[e]) / s : 0,
            u = (o[n] - r[n]) * l;return r[n] + u;
      }function f(t, e) {
        var i = e.parser,
            a = e.parser || e.format;return "function" == typeof i ? i(t) : "string" == typeof t && "string" == typeof a ? n(t, a) : (t instanceof n || (t = n(t)), t.isValid() ? t : "function" == typeof a ? a(t) : t);
      }function g(t, e) {
        if (r.isNullOrUndef(t)) return null;var i = e.options.time,
            n = f(e.getRightValue(t), i);return n.isValid() ? (i.round && n.startOf(i.round), n.valueOf()) : null;
      }function m(t) {
        for (var e = u.indexOf(t) + 1, i = u.length; e < i; ++e) {
          if (l[u[e]].common) return u[e];
        }
      }function p(t, e, i, a) {
        var o,
            d = a.time,
            h = d.unit || function (t, e, i, n) {
          var a,
              r,
              o,
              d = u.length;for (a = u.indexOf(t); a < d - 1; ++a) {
            if (o = (r = l[u[a]]).steps ? r.steps[r.steps.length - 1] : s, r.common && Math.ceil((i - e) / (o * r.size)) <= n) return u[a];
          }return u[d - 1];
        }(d.minUnit, t, e, i),
            c = m(h),
            f = r.valueOrDefault(d.stepSize, d.unitStepSize),
            g = "week" === h && d.isoWeekday,
            p = a.ticks.major.enabled,
            v = l[h],
            y = n(t),
            b = n(e),
            x = [];for (f || (f = function (t, e, i, n) {
          var a,
              r,
              o,
              s = e - t,
              u = l[i],
              d = u.size,
              h = u.steps;if (!h) return Math.ceil(s / (n * d));for (a = 0, r = h.length; a < r && (o = h[a], !(Math.ceil(s / (d * o)) <= n)); ++a) {}return o;
        }(t, e, h, i)), g && (y = y.isoWeekday(g), b = b.isoWeekday(g)), y = y.startOf(g ? "day" : h), (b = b.startOf(g ? "day" : h)) < e && b.add(1, h), o = n(y), p && c && !g && !d.round && (o.startOf(c), o.add(~~((y - o) / (v.size * f)) * f, h)); o < b; o.add(f, h)) {
          x.push(+o);
        }return x.push(+o), x;
      }e.exports = function (t) {
        var e = t.Scale.extend({ initialize: function initialize() {
            if (!n) throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");this.mergeTicksOptions(), t.Scale.prototype.initialize.call(this);
          }, update: function update() {
            var e = this.options;return e.time && e.time.format && console.warn("options.time.format is deprecated and replaced by options.time.parser."), t.Scale.prototype.update.apply(this, arguments);
          }, getRightValue: function getRightValue(e) {
            return e && void 0 !== e.t && (e = e.t), t.Scale.prototype.getRightValue.call(this, e);
          }, determineDataLimits: function determineDataLimits() {
            var t,
                e,
                i,
                a,
                l,
                u,
                c = this,
                f = c.chart,
                m = c.options.time,
                p = m.unit || "day",
                v = s,
                y = o,
                b = [],
                x = [],
                _ = [];for (t = 0, i = f.data.labels.length; t < i; ++t) {
              _.push(g(f.data.labels[t], c));
            }for (t = 0, i = (f.data.datasets || []).length; t < i; ++t) {
              if (f.isDatasetVisible(t)) {
                if (l = f.data.datasets[t].data, r.isObject(l[0])) for (x[t] = [], e = 0, a = l.length; e < a; ++e) {
                  u = g(l[e], c), b.push(u), x[t][e] = u;
                } else b.push.apply(b, _), x[t] = _.slice(0);
              } else x[t] = [];
            }_.length && (_ = h(_).sort(d), v = Math.min(v, _[0]), y = Math.max(y, _[_.length - 1])), b.length && (b = h(b).sort(d), v = Math.min(v, b[0]), y = Math.max(y, b[b.length - 1])), v = g(m.min, c) || v, y = g(m.max, c) || y, v = v === s ? +n().startOf(p) : v, y = y === o ? +n().endOf(p) + 1 : y, c.min = Math.min(v, y), c.max = Math.max(v + 1, y), c._horizontal = c.isHorizontal(), c._table = [], c._timestamps = { data: b, datasets: x, labels: _ };
          }, buildTicks: function buildTicks() {
            var t,
                e,
                i,
                a,
                r,
                o,
                s,
                d,
                h,
                v,
                y,
                b,
                x = this,
                _ = x.min,
                k = x.max,
                w = x.options,
                M = w.time,
                S = [],
                D = [];switch (w.ticks.source) {case "data":
                S = x._timestamps.data;break;case "labels":
                S = x._timestamps.labels;break;case "auto":default:
                S = p(_, k, x.getLabelCapacity(_), w);}for ("ticks" === w.bounds && S.length && (_ = S[0], k = S[S.length - 1]), _ = g(M.min, x) || _, k = g(M.max, x) || k, t = 0, e = S.length; t < e; ++t) {
              (i = S[t]) >= _ && i <= k && D.push(i);
            }return x.min = _, x.max = k, x._unit = M.unit || function (t, e, i, a) {
              var r,
                  o,
                  s = n.duration(n(a).diff(n(i)));for (r = u.length - 1; r >= u.indexOf(e); r--) {
                if (o = u[r], l[o].common && s.as(o) >= t.length) return o;
              }return u[e ? u.indexOf(e) : 0];
            }(D, M.minUnit, x.min, x.max), x._majorUnit = m(x._unit), x._table = function (t, e, i, n) {
              if ("linear" === n || !t.length) return [{ time: e, pos: 0 }, { time: i, pos: 1 }];var a,
                  r,
                  o,
                  s,
                  l,
                  u = [],
                  d = [e];for (a = 0, r = t.length; a < r; ++a) {
                (s = t[a]) > e && s < i && d.push(s);
              }for (d.push(i), a = 0, r = d.length; a < r; ++a) {
                l = d[a + 1], o = d[a - 1], s = d[a], void 0 !== o && void 0 !== l && Math.round((l + o) / 2) === s || u.push({ time: s, pos: a / (r - 1) });
              }return u;
            }(x._timestamps.data, _, k, w.distribution), x._offsets = (a = x._table, r = D, o = _, s = k, y = 0, b = 0, (d = w).offset && r.length && (d.time.min || (h = r.length > 1 ? r[1] : s, v = r[0], y = (c(a, "time", h, "pos") - c(a, "time", v, "pos")) / 2), d.time.max || (h = r[r.length - 1], v = r.length > 1 ? r[r.length - 2] : o, b = (c(a, "time", h, "pos") - c(a, "time", v, "pos")) / 2)), { left: y, right: b }), x._labelFormat = function (t, e) {
              var i,
                  n,
                  a,
                  r = t.length;for (i = 0; i < r; i++) {
                if (0 !== (n = f(t[i], e)).millisecond()) return "MMM D, YYYY h:mm:ss.SSS a";0 === n.second() && 0 === n.minute() && 0 === n.hour() || (a = !0);
              }return a ? "MMM D, YYYY h:mm:ss a" : "MMM D, YYYY";
            }(x._timestamps.data, M), function (t, e) {
              var i,
                  a,
                  r,
                  o,
                  s = [];for (i = 0, a = t.length; i < a; ++i) {
                r = t[i], o = !!e && r === +n(r).startOf(e), s.push({ value: r, major: o });
              }return s;
            }(D, x._majorUnit);
          }, getLabelForIndex: function getLabelForIndex(t, e) {
            var i = this.chart.data,
                n = this.options.time,
                a = i.labels && t < i.labels.length ? i.labels[t] : "",
                o = i.datasets[e].data[t];return r.isObject(o) && (a = this.getRightValue(o)), n.tooltipFormat ? f(a, n).format(n.tooltipFormat) : "string" == typeof a ? a : f(a, n).format(this._labelFormat);
          }, tickFormatFunction: function tickFormatFunction(t, e, i, n) {
            var a = this.options,
                o = t.valueOf(),
                s = a.time.displayFormats,
                l = s[this._unit],
                u = this._majorUnit,
                d = s[u],
                h = t.clone().startOf(u).valueOf(),
                c = a.ticks.major,
                f = c.enabled && u && d && o === h,
                g = t.format(n || (f ? d : l)),
                m = f ? c : a.ticks.minor,
                p = r.valueOrDefault(m.callback, m.userCallback);return p ? p(g, e, i) : g;
          }, convertTicksToLabels: function convertTicksToLabels(t) {
            var e,
                i,
                a = [];for (e = 0, i = t.length; e < i; ++e) {
              a.push(this.tickFormatFunction(n(t[e].value), e, t));
            }return a;
          }, getPixelForOffset: function getPixelForOffset(t) {
            var e = this,
                i = e._horizontal ? e.width : e.height,
                n = e._horizontal ? e.left : e.top,
                a = c(e._table, "time", t, "pos");return n + i * (e._offsets.left + a) / (e._offsets.left + 1 + e._offsets.right);
          }, getPixelForValue: function getPixelForValue(t, e, i) {
            var n = null;if (void 0 !== e && void 0 !== i && (n = this._timestamps.datasets[i][e]), null === n && (n = g(t, this)), null !== n) return this.getPixelForOffset(n);
          }, getPixelForTick: function getPixelForTick(t) {
            var e = this.getTicks();return t >= 0 && t < e.length ? this.getPixelForOffset(e[t].value) : null;
          }, getValueForPixel: function getValueForPixel(t) {
            var e = this,
                i = e._horizontal ? e.width : e.height,
                a = e._horizontal ? e.left : e.top,
                r = (i ? (t - a) / i : 0) * (e._offsets.left + 1 + e._offsets.left) - e._offsets.right,
                o = c(e._table, "pos", r, "time");return n(o);
          }, getLabelWidth: function getLabelWidth(t) {
            var e = this.options.ticks,
                i = this.ctx.measureText(t).width,
                n = r.toRadians(e.maxRotation),
                o = Math.cos(n),
                s = Math.sin(n);return i * o + r.valueOrDefault(e.fontSize, a.global.defaultFontSize) * s;
          }, getLabelCapacity: function getLabelCapacity(t) {
            var e = this.options.time.displayFormats.millisecond,
                i = this.tickFormatFunction(n(t), 0, [], e),
                a = this.getLabelWidth(i),
                r = this.isHorizontal() ? this.width : this.height,
                o = Math.floor(r / a);return o > 0 ? o : 1;
          } });t.scaleService.registerScaleType("time", e, { position: "bottom", distribution: "linear", bounds: "data", time: { parser: !1, format: !1, unit: !1, round: !1, displayFormat: !1, isoWeekday: !1, minUnit: "millisecond", displayFormats: { millisecond: "h:mm:ss.SSS a", second: "h:mm:ss a", minute: "h:mm a", hour: "hA", day: "MMM D", week: "ll", month: "MMM YYYY", quarter: "[Q]Q - YYYY", year: "YYYY" } }, ticks: { autoSkip: !1, source: "auto", major: { enabled: !1 } } });
      };
    }, { 25: 25, 45: 45, 6: 6 }] }, {}, [7])(7);
});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

(function ($) {
    "use strict";

    // const brandPrimary = '#20a8d8'

    var brandSuccess = '#4dbd74';
    var brandInfo = '#63c2de';
    var brandDanger = '#f86c6b';

    function convertHex(hex, opacity) {
        hex = hex.replace('#', '');
        var r = parseInt(hex.substring(0, 2), 16);
        var g = parseInt(hex.substring(2, 4), 16);
        var b = parseInt(hex.substring(4, 6), 16);

        var result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';
        return result;
    }

    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    var elements = 27;
    var data1 = [];
    var data2 = [];
    var data3 = [];

    for (var i = 0; i <= elements; i++) {
        data1.push(random(50, 200));
        data2.push(random(80, 100));
        data3.push(65);
    }

    //Traffic Chart
    var ctx = document.getElementById("trafficChart");
    //ctx.height = 200;
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S'],
            datasets: [{
                label: 'My First dataset',
                backgroundColor: convertHex(brandInfo, 10),
                borderColor: brandInfo,
                pointHoverBackgroundColor: '#fff',
                borderWidth: 2,
                data: data1
            }, {
                label: 'My Second dataset',
                backgroundColor: 'transparent',
                borderColor: brandSuccess,
                pointHoverBackgroundColor: '#fff',
                borderWidth: 2,
                data: data2
            }, {
                label: 'My Third dataset',
                backgroundColor: 'transparent',
                borderColor: brandDanger,
                pointHoverBackgroundColor: '#fff',
                borderWidth: 1,
                borderDash: [8, 5],
                data: data3
            }]
        },
        options: {
            //   maintainAspectRatio: true,
            //   legend: {
            //     display: false
            // },
            // scales: {
            //     xAxes: [{
            //       display: false,
            //       categoryPercentage: 1,
            //       barPercentage: 0.5
            //     }],
            //     yAxes: [ {
            //         display: false
            //     } ]
            // }


            maintainAspectRatio: true,
            legend: {
                display: false
            },
            responsive: true,
            scales: {
                xAxes: [{
                    gridLines: {
                        drawOnChartArea: false
                    }
                }],
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        maxTicksLimit: 5,
                        stepSize: Math.ceil(250 / 5),
                        max: 250
                    },
                    gridLines: {
                        display: true
                    }
                }]
            },
            elements: {
                point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                    hoverBorderWidth: 3
                }
            }

        }
    });
})(jQuery);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

(function ($) {
    "use strict";

    // Counter Number

    $('.count').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 3000,
            easing: 'swing',
            step: function step(now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    //WidgetChart 1
    var ctx = document.getElementById("widgetChart1");
    ctx.height = 150;
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            type: 'line',
            datasets: [{
                data: [65, 59, 84, 84, 51, 55, 40],
                label: 'Dataset',
                backgroundColor: 'transparent',
                borderColor: 'rgba(255,255,255,.55)'
            }]
        },
        options: {

            maintainAspectRatio: false,
            legend: {
                display: false
            },
            responsive: true,
            scales: {
                xAxes: [{
                    gridLines: {
                        color: 'transparent',
                        zeroLineColor: 'transparent'
                    },
                    ticks: {
                        fontSize: 2,
                        fontColor: 'transparent'
                    }
                }],
                yAxes: [{
                    display: false,
                    ticks: {
                        display: false
                    }
                }]
            },
            title: {
                display: false
            },
            elements: {
                line: {
                    borderWidth: 1
                },
                point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4
                }
            }
        }
    });

    //WidgetChart 2
    var ctx = document.getElementById("widgetChart2");
    ctx.height = 150;
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            type: 'line',
            datasets: [{
                data: [1, 18, 9, 17, 34, 22, 11],
                label: 'Dataset',
                backgroundColor: '#63c2de',
                borderColor: 'rgba(255,255,255,.55)'
            }]
        },
        options: {

            maintainAspectRatio: false,
            legend: {
                display: false
            },
            responsive: true,
            scales: {
                xAxes: [{
                    gridLines: {
                        color: 'transparent',
                        zeroLineColor: 'transparent'
                    },
                    ticks: {
                        fontSize: 2,
                        fontColor: 'transparent'
                    }
                }],
                yAxes: [{
                    display: false,
                    ticks: {
                        display: false
                    }
                }]
            },
            title: {
                display: false
            },
            elements: {
                line: {
                    tension: 0.00001,
                    borderWidth: 1
                },
                point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4
                }
            }
        }
    });

    //WidgetChart 3
    var ctx = document.getElementById("widgetChart3");
    ctx.height = 70;
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            type: 'line',
            datasets: [{
                data: [78, 81, 80, 45, 34, 12, 40],
                label: 'Dataset',
                backgroundColor: 'rgba(255,255,255,.2)',
                borderColor: 'rgba(255,255,255,.55)'
            }]
        },
        options: {

            maintainAspectRatio: true,
            legend: {
                display: false
            },
            responsive: true,
            scales: {
                xAxes: [{
                    gridLines: {
                        color: 'transparent',
                        zeroLineColor: 'transparent'
                    },
                    ticks: {
                        fontSize: 2,
                        fontColor: 'transparent'
                    }
                }],
                yAxes: [{
                    display: false,
                    ticks: {
                        display: false
                    }
                }]
            },
            title: {
                display: false
            },
            elements: {
                line: {
                    borderWidth: 2
                },
                point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4
                }
            }
        }
    });

    //WidgetChart 4
    var ctx = document.getElementById("widgetChart4");
    ctx.height = 70;
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
            datasets: [{
                label: "My First dataset",
                data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98],
                borderColor: "rgba(0, 123, 255, 0.9)",
                //borderWidth: "0",
                backgroundColor: "rgba(255,255,255,.3)"
            }]
        },
        options: {
            maintainAspectRatio: true,
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    display: false,
                    categoryPercentage: 1,
                    barPercentage: 0.5
                }],
                yAxes: [{
                    display: false
                }]
            }
        }
    });
})(jQuery);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

/*!
 * JQVMap: jQuery Vector Map Library
 * @author JQVMap <me@peterschmalfeldt.com>
 * @version 1.5.1
 * @link http://jqvmap.com
 * @license https://github.com/manifestinteractive/jqvmap/blob/master/LICENSE
 * @builddate 2016/05/18
 */

var VectorCanvas = function VectorCanvas(a, b, c) {
  if (this.mode = window.SVGAngle ? "svg" : "vml", this.params = c, "svg" === this.mode) this.createSvgNode = function (a) {
    return document.createElementNS(this.svgns, a);
  };else {
    try {
      document.namespaces.rvml || document.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"), this.createVmlNode = function (a) {
        return document.createElement("<rvml:" + a + ' class="rvml">');
      };
    } catch (d) {
      this.createVmlNode = function (a) {
        return document.createElement("<" + a + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">');
      };
    }document.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
  }"svg" === this.mode ? this.canvas = this.createSvgNode("svg") : (this.canvas = this.createVmlNode("group"), this.canvas.style.position = "absolute"), this.setSize(a, b);
};VectorCanvas.prototype = { svgns: "http://www.w3.org/2000/svg", mode: "svg", width: 0, height: 0, canvas: null };var ColorScale = function ColorScale(a, b, c, d) {
  a && this.setColors(a), b && this.setNormalizeFunction(b), c && this.setMin(c), c && this.setMax(d);
};ColorScale.prototype = { colors: [] };var JQVMap = function JQVMap(a) {
  a = a || {};var b,
      c = this,
      d = JQVMap.maps[a.map];if (!d) throw new Error('Invalid "' + a.map + '" map parameter. Please make sure you have loaded this map file in your HTML.');this.selectedRegions = [], this.multiSelectRegion = a.multiSelectRegion, this.container = a.container, this.defaultWidth = d.width, this.defaultHeight = d.height, this.color = a.color, this.selectedColor = a.selectedColor, this.hoverColor = a.hoverColor, this.hoverColors = a.hoverColors, this.hoverOpacity = a.hoverOpacity, this.setBackgroundColor(a.backgroundColor), this.width = a.container.width(), this.height = a.container.height(), this.resize(), jQuery(window).resize(function () {
    var d = a.container.width(),
        e = a.container.height();if (d && e) {
      c.width = d, c.height = e, c.resize(), c.canvas.setSize(c.width, c.height), c.applyTransform();var f = jQuery.Event("resize.jqvmap");jQuery(a.container).trigger(f, [d, e]), b && (jQuery(".jqvmap-pin").remove(), c.pinHandlers = !1, c.placePins(b.pins, b.mode));
    }
  }), this.canvas = new VectorCanvas(this.width, this.height, a), a.container.append(this.canvas.canvas), this.makeDraggable(), this.rootGroup = this.canvas.createGroup(!0), this.index = JQVMap.mapIndex, this.label = jQuery("<div/>").addClass("jqvmap-label").appendTo(jQuery("body")).hide(), a.enableZoom && (jQuery("<div/>").addClass("jqvmap-zoomin").text("+").appendTo(a.container), jQuery("<div/>").addClass("jqvmap-zoomout").html("&#x2212;").appendTo(a.container)), c.countries = [];for (var e in d.paths) {
    var f = this.canvas.createPath({ path: d.paths[e].path });f.setFill(this.color), f.id = c.getCountryId(e), c.countries[e] = f, "svg" === this.canvas.mode ? f.setAttribute("class", "jqvmap-region") : jQuery(f).addClass("jqvmap-region"), jQuery(this.rootGroup).append(f);
  }if (jQuery(a.container).delegate("svg" === this.canvas.mode ? "path" : "shape", "mouseover mouseout", function (b) {
    var e = b.target,
        f = b.target.id.split("_").pop(),
        g = jQuery.Event("labelShow.jqvmap"),
        h = jQuery.Event("regionMouseOver.jqvmap");f = f.toLowerCase(), "mouseover" === b.type ? (jQuery(a.container).trigger(h, [f, d.paths[f].name]), h.isDefaultPrevented() || c.highlight(f, e), a.showTooltip && (c.label.text(d.paths[f].name), jQuery(a.container).trigger(g, [c.label, f]), g.isDefaultPrevented() || (c.label.show(), c.labelWidth = c.label.width(), c.labelHeight = c.label.height()))) : (c.unhighlight(f, e), c.label.hide(), jQuery(a.container).trigger("regionMouseOut.jqvmap", [f, d.paths[f].name]));
  }), jQuery(a.container).delegate("svg" === this.canvas.mode ? "path" : "shape", "click", function (b) {
    var e = b.target,
        f = b.target.id.split("_").pop(),
        g = jQuery.Event("regionClick.jqvmap");if (f = f.toLowerCase(), jQuery(a.container).trigger(g, [f, d.paths[f].name]), !a.multiSelectRegion && !g.isDefaultPrevented()) for (var h in d.paths) {
      c.countries[h].currentFillColor = c.countries[h].getOriginalFill(), c.countries[h].setFill(c.countries[h].getOriginalFill());
    }g.isDefaultPrevented() || (c.isSelected(f) ? c.deselect(f, e) : c.select(f, e));
  }), a.showTooltip && a.container.mousemove(function (a) {
    if (c.label.is(":visible")) {
      var b = a.pageX - 15 - c.labelWidth,
          d = a.pageY - 15 - c.labelHeight;0 > b && (b = a.pageX + 15), 0 > d && (d = a.pageY + 15), c.label.css({ left: b, top: d });
    }
  }), this.setColors(a.colors), this.canvas.canvas.appendChild(this.rootGroup), this.applyTransform(), this.colorScale = new ColorScale(a.scaleColors, a.normalizeFunction, a.valueMin, a.valueMax), a.values && (this.values = a.values, this.setValues(a.values)), a.selectedRegions) if (a.selectedRegions instanceof Array) for (var g in a.selectedRegions) {
    this.select(a.selectedRegions[g].toLowerCase());
  } else this.select(a.selectedRegions.toLowerCase());if (this.bindZoomButtons(), a.pins && (b = { pins: a.pins, mode: a.pinMode }, this.pinHandlers = !1, this.placePins(a.pins, a.pinMode)), a.showLabels) {
    this.pinHandlers = !1;var h = {};for (e in c.countries) {
      "function" != typeof c.countries[e] && (a.pins && a.pins[e] || (h[e] = e.toUpperCase()));
    }b = { pins: h, mode: "content" }, this.placePins(h, "content");
  }JQVMap.mapIndex++;
};JQVMap.prototype = { transX: 0, transY: 0, scale: 1, baseTransX: 0, baseTransY: 0, baseScale: 1, width: 0, height: 0, countries: {}, countriesColors: {}, countriesData: {}, zoomStep: 1.4, zoomMaxStep: 4, zoomCurStep: 1 }, JQVMap.xlink = "http://www.w3.org/1999/xlink", JQVMap.mapIndex = 1, JQVMap.maps = {}, function () {
  var a = { colors: 1, values: 1, backgroundColor: 1, scaleColors: 1, normalizeFunction: 1, enableZoom: 1, showTooltip: 1, borderColor: 1, borderWidth: 1, borderOpacity: 1, selectedRegions: 1, multiSelectRegion: 1 },
      b = { onLabelShow: "labelShow", onLoad: "load", onRegionOver: "regionMouseOver", onRegionOut: "regionMouseOut", onRegionClick: "regionClick", onRegionSelect: "regionSelect", onRegionDeselect: "regionDeselect", onResize: "resize" };jQuery.fn.vectorMap = function (c) {
    var d = { map: "world_en", backgroundColor: "#a5bfdd", color: "#f4f3f0", hoverColor: "#c9dfaf", hoverColors: {}, selectedColor: "#c9dfaf", scaleColors: ["#b6d6ff", "#005ace"], normalizeFunction: "linear", enableZoom: !0, showTooltip: !0, borderColor: "#818181", borderWidth: 1, borderOpacity: .25, selectedRegions: null, multiSelectRegion: !1 },
        e = this.data("mapObject");if ("addMap" === c) JQVMap.maps[arguments[1]] = arguments[2];else {
      if ("set" !== c || !a[arguments[1]]) {
        if ("string" == typeof c && "function" == typeof e[c]) return e[c].apply(e, Array.prototype.slice.call(arguments, 1));jQuery.extend(d, c), d.container = this, this.css({ position: "relative", overflow: "hidden" }), e = new JQVMap(d), this.data("mapObject", e), this.unbind(".jqvmap");for (var f in b) {
          d[f] && this.bind(b[f] + ".jqvmap", d[f]);
        }var g = jQuery.Event("load.jqvmap");return jQuery(d.container).trigger(g, e), e;
      }e["set" + arguments[1].charAt(0).toUpperCase() + arguments[1].substr(1)].apply(e, Array.prototype.slice.call(arguments, 2));
    }
  };
}(jQuery), ColorScale.arrayToRgb = function (a) {
  for (var b, c = "#", d = 0; d < a.length; d++) {
    b = a[d].toString(16), c += 1 === b.length ? "0" + b : b;
  }return c;
}, ColorScale.prototype.getColor = function (a) {
  "function" == typeof this.normalize && (a = this.normalize(a));for (var b, c = [], d = 0, e = 0; e < this.colors.length - 1; e++) {
    b = this.vectorLength(this.vectorSubtract(this.colors[e + 1], this.colors[e])), c.push(b), d += b;
  }var f = (this.maxValue - this.minValue) / d;for (e = 0; e < c.length; e++) {
    c[e] *= f;
  }for (e = 0, a -= this.minValue; a - c[e] >= 0;) {
    a -= c[e], e++;
  }var g;for (g = e === this.colors.length - 1 ? this.vectorToNum(this.colors[e]).toString(16) : this.vectorToNum(this.vectorAdd(this.colors[e], this.vectorMult(this.vectorSubtract(this.colors[e + 1], this.colors[e]), a / c[e]))).toString(16); g.length < 6;) {
    g = "0" + g;
  }return "#" + g;
}, ColorScale.rgbToArray = function (a) {
  return a = a.substr(1), [parseInt(a.substr(0, 2), 16), parseInt(a.substr(2, 2), 16), parseInt(a.substr(4, 2), 16)];
}, ColorScale.prototype.setColors = function (a) {
  for (var b = 0; b < a.length; b++) {
    a[b] = ColorScale.rgbToArray(a[b]);
  }this.colors = a;
}, ColorScale.prototype.setMax = function (a) {
  this.clearMaxValue = a, "function" == typeof this.normalize ? this.maxValue = this.normalize(a) : this.maxValue = a;
}, ColorScale.prototype.setMin = function (a) {
  this.clearMinValue = a, "function" == typeof this.normalize ? this.minValue = this.normalize(a) : this.minValue = a;
}, ColorScale.prototype.setNormalizeFunction = function (a) {
  "polynomial" === a ? this.normalize = function (a) {
    return Math.pow(a, .2);
  } : "linear" === a ? delete this.normalize : this.normalize = a, this.setMin(this.clearMinValue), this.setMax(this.clearMaxValue);
}, ColorScale.prototype.vectorAdd = function (a, b) {
  for (var c = [], d = 0; d < a.length; d++) {
    c[d] = a[d] + b[d];
  }return c;
}, ColorScale.prototype.vectorLength = function (a) {
  for (var b = 0, c = 0; c < a.length; c++) {
    b += a[c] * a[c];
  }return Math.sqrt(b);
}, ColorScale.prototype.vectorMult = function (a, b) {
  for (var c = [], d = 0; d < a.length; d++) {
    c[d] = a[d] * b;
  }return c;
}, ColorScale.prototype.vectorSubtract = function (a, b) {
  for (var c = [], d = 0; d < a.length; d++) {
    c[d] = a[d] - b[d];
  }return c;
}, ColorScale.prototype.vectorToNum = function (a) {
  for (var b = 0, c = 0; c < a.length; c++) {
    b += Math.round(a[c]) * Math.pow(256, a.length - c - 1);
  }return b;
}, JQVMap.prototype.applyTransform = function () {
  var a, b, c, d;this.defaultWidth * this.scale <= this.width ? (a = (this.width - this.defaultWidth * this.scale) / (2 * this.scale), c = (this.width - this.defaultWidth * this.scale) / (2 * this.scale)) : (a = 0, c = (this.width - this.defaultWidth * this.scale) / this.scale), this.defaultHeight * this.scale <= this.height ? (b = (this.height - this.defaultHeight * this.scale) / (2 * this.scale), d = (this.height - this.defaultHeight * this.scale) / (2 * this.scale)) : (b = 0, d = (this.height - this.defaultHeight * this.scale) / this.scale), this.transY > b ? this.transY = b : this.transY < d && (this.transY = d), this.transX > a ? this.transX = a : this.transX < c && (this.transX = c), this.canvas.applyTransformParams(this.scale, this.transX, this.transY);
}, JQVMap.prototype.bindZoomButtons = function () {
  var a = this;this.container.find(".jqvmap-zoomin").click(function () {
    a.zoomIn();
  }), this.container.find(".jqvmap-zoomout").click(function () {
    a.zoomOut();
  });
}, JQVMap.prototype.deselect = function (a, b) {
  if (a = a.toLowerCase(), b = b || jQuery("#" + this.getCountryId(a))[0], this.isSelected(a)) this.selectedRegions.splice(this.selectIndex(a), 1), jQuery(this.container).trigger("regionDeselect.jqvmap", [a]), b.currentFillColor = b.getOriginalFill(), b.setFill(b.getOriginalFill());else for (var c in this.countries) {
    this.selectedRegions.splice(this.selectedRegions.indexOf(c), 1), this.countries[c].currentFillColor = this.color, this.countries[c].setFill(this.color);
  }
}, JQVMap.prototype.getCountryId = function (a) {
  return "jqvmap" + this.index + "_" + a;
}, JQVMap.prototype.getPin = function (a) {
  var b = jQuery("#" + this.getPinId(a));return b.html();
}, JQVMap.prototype.getPinId = function (a) {
  return this.getCountryId(a) + "_pin";
}, JQVMap.prototype.getPins = function () {
  var a = this.container.find(".jqvmap-pin"),
      b = {};return jQuery.each(a, function (a, c) {
    c = jQuery(c);var d = c.attr("for").toLowerCase(),
        e = c.html();b[d] = e;
  }), JSON.stringify(b);
}, JQVMap.prototype.highlight = function (a, b) {
  b = b || jQuery("#" + this.getCountryId(a))[0], this.hoverOpacity ? b.setOpacity(this.hoverOpacity) : this.hoverColors && a in this.hoverColors ? (b.currentFillColor = b.getFill() + "", b.setFill(this.hoverColors[a])) : this.hoverColor && (b.currentFillColor = b.getFill() + "", b.setFill(this.hoverColor));
}, JQVMap.prototype.isSelected = function (a) {
  return this.selectIndex(a) >= 0;
}, JQVMap.prototype.makeDraggable = function () {
  var a,
      b,
      c = !1,
      d = this;d.isMoving = !1, d.isMovingTimeout = !1;var e, f, g, h, i, j, k;this.container.mousemove(function (e) {
    return c && (d.transX -= (a - e.pageX) / d.scale, d.transY -= (b - e.pageY) / d.scale, d.applyTransform(), a = e.pageX, b = e.pageY, d.isMoving = !0, d.isMovingTimeout && clearTimeout(d.isMovingTimeout), d.container.trigger("drag")), !1;
  }).mousedown(function (d) {
    return c = !0, a = d.pageX, b = d.pageY, !1;
  }).mouseup(function () {
    return c = !1, clearTimeout(d.isMovingTimeout), d.isMovingTimeout = setTimeout(function () {
      d.isMoving = !1;
    }, 100), !1;
  }).mouseout(function () {
    return c && d.isMoving ? (clearTimeout(d.isMovingTimeout), d.isMovingTimeout = setTimeout(function () {
      c = !1, d.isMoving = !1;
    }, 100), !1) : void 0;
  }), jQuery(this.container).bind("touchmove", function (a) {
    var b,
        c,
        l,
        m,
        n = a.originalEvent.touches;if (1 === n.length) {
      if (1 === e) {
        if (j === n[0].pageX && k === n[0].pageY) return;l = d.transX, m = d.transY, d.transX -= (j - n[0].pageX) / d.scale, d.transY -= (k - n[0].pageY) / d.scale, d.applyTransform(), (l !== d.transX || m !== d.transY) && a.preventDefault(), d.isMoving = !0, d.isMovingTimeout && clearTimeout(d.isMovingTimeout);
      }j = n[0].pageX, k = n[0].pageY;
    } else 2 === n.length && (2 === e ? (c = Math.sqrt(Math.pow(n[0].pageX - n[1].pageX, 2) + Math.pow(n[0].pageY - n[1].pageY, 2)) / h, d.setScale(i * c, f, g), a.preventDefault()) : (b = jQuery(d.container).offset(), f = n[0].pageX > n[1].pageX ? n[1].pageX + (n[0].pageX - n[1].pageX) / 2 : n[0].pageX + (n[1].pageX - n[0].pageX) / 2, g = n[0].pageY > n[1].pageY ? n[1].pageY + (n[0].pageY - n[1].pageY) / 2 : n[0].pageY + (n[1].pageY - n[0].pageY) / 2, f -= b.left, g -= b.top, i = d.scale, h = Math.sqrt(Math.pow(n[0].pageX - n[1].pageX, 2) + Math.pow(n[0].pageY - n[1].pageY, 2))));e = n.length;
  }), jQuery(this.container).bind("touchstart", function () {
    e = 0;
  }), jQuery(this.container).bind("touchend", function () {
    e = 0;
  });
}, JQVMap.prototype.placePins = function (a, b) {
  var c = this;if ((!b || "content" !== b && "id" !== b) && (b = "content"), "content" === b ? jQuery.each(a, function (a, b) {
    if (0 !== jQuery("#" + c.getCountryId(a)).length) {
      var d = c.getPinId(a),
          e = jQuery("#" + d);e.length > 0 && e.remove(), c.container.append('<div id="' + d + '" for="' + a + '" class="jqvmap-pin" style="position:absolute">' + b + "</div>");
    }
  }) : jQuery.each(a, function (a, b) {
    if (0 !== jQuery("#" + c.getCountryId(a)).length) {
      var d = c.getPinId(a),
          e = jQuery("#" + d);e.length > 0 && e.remove(), c.container.append('<div id="' + d + '" for="' + a + '" class="jqvmap-pin" style="position:absolute"></div>'), e.append(jQuery("#" + b));
    }
  }), this.positionPins(), !this.pinHandlers) {
    this.pinHandlers = !0;var d = function d() {
      c.positionPins();
    };this.container.bind("zoomIn", d).bind("zoomOut", d).bind("drag", d);
  }
}, JQVMap.prototype.positionPins = function () {
  var a = this,
      b = this.container.find(".jqvmap-pin");jQuery.each(b, function (b, c) {
    c = jQuery(c);var d = a.getCountryId(c.attr("for").toLowerCase()),
        e = jQuery("#" + d),
        f = document.getElementById(d).getBBox(),
        g = e.position(),
        h = a.scale,
        i = g.left + f.width / 2 * h - c.width() / 2,
        j = g.top + f.height / 2 * h - c.height() / 2;c.css("left", i).css("top", j);
  });
}, JQVMap.prototype.removePin = function (a) {
  a = a.toLowerCase(), jQuery("#" + this.getPinId(a)).remove();
}, JQVMap.prototype.removePins = function () {
  this.container.find(".jqvmap-pin").remove();
}, JQVMap.prototype.reset = function () {
  for (var a in this.countries) {
    this.countries[a].setFill(this.color);
  }this.scale = this.baseScale, this.transX = this.baseTransX, this.transY = this.baseTransY, this.applyTransform();
}, JQVMap.prototype.resize = function () {
  var a = this.baseScale;this.width / this.height > this.defaultWidth / this.defaultHeight ? (this.baseScale = this.height / this.defaultHeight, this.baseTransX = Math.abs(this.width - this.defaultWidth * this.baseScale) / (2 * this.baseScale)) : (this.baseScale = this.width / this.defaultWidth, this.baseTransY = Math.abs(this.height - this.defaultHeight * this.baseScale) / (2 * this.baseScale)), this.scale *= this.baseScale / a, this.transX *= this.baseScale / a, this.transY *= this.baseScale / a;
}, JQVMap.prototype.select = function (a, b) {
  a = a.toLowerCase(), b = b || jQuery("#" + this.getCountryId(a))[0], this.isSelected(a) || (this.multiSelectRegion ? this.selectedRegions.push(a) : this.selectedRegions = [a], jQuery(this.container).trigger("regionSelect.jqvmap", [a]), this.selectedColor && b && (b.currentFillColor = this.selectedColor, b.setFill(this.selectedColor)));
}, JQVMap.prototype.selectIndex = function (a) {
  a = a.toLowerCase();for (var b = 0; b < this.selectedRegions.length; b++) {
    if (a === this.selectedRegions[b]) return b;
  }return -1;
}, JQVMap.prototype.setBackgroundColor = function (a) {
  this.container.css("background-color", a);
}, JQVMap.prototype.setColors = function (a, b) {
  if ("string" == typeof a) this.countries[a].setFill(b), this.countries[a].setAttribute("original", b);else {
    var c = a;for (var d in c) {
      this.countries[d] && (this.countries[d].setFill(c[d]), this.countries[d].setAttribute("original", c[d]));
    }
  }
}, JQVMap.prototype.setNormalizeFunction = function (a) {
  this.colorScale.setNormalizeFunction(a), this.values && this.setValues(this.values);
}, JQVMap.prototype.setScale = function (a) {
  this.scale = a, this.applyTransform();
}, JQVMap.prototype.setScaleColors = function (a) {
  this.colorScale.setColors(a), this.values && this.setValues(this.values);
}, JQVMap.prototype.setValues = function (a) {
  var b,
      c = 0,
      d = Number.MAX_VALUE;for (var e in a) {
    e = e.toLowerCase(), b = parseFloat(a[e]), isNaN(b) || (b > c && (c = a[e]), d > b && (d = b));
  }d === c && c++, this.colorScale.setMin(d), this.colorScale.setMax(c);var f = {};for (e in a) {
    e = e.toLowerCase(), b = parseFloat(a[e]), f[e] = isNaN(b) ? this.color : this.colorScale.getColor(b);
  }this.setColors(f), this.values = a;
}, JQVMap.prototype.unhighlight = function (a, b) {
  a = a.toLowerCase(), b = b || jQuery("#" + this.getCountryId(a))[0], b.setOpacity(1), b.currentFillColor && b.setFill(b.currentFillColor);
}, JQVMap.prototype.zoomIn = function () {
  var a = this,
      b = (jQuery("#zoom").innerHeight() - 12 - 30 - 6 - 7 - 6) / (this.zoomMaxStep - this.zoomCurStep);if (a.zoomCurStep < a.zoomMaxStep) {
    a.transX -= (a.width / a.scale - a.width / (a.scale * a.zoomStep)) / 2, a.transY -= (a.height / a.scale - a.height / (a.scale * a.zoomStep)) / 2, a.setScale(a.scale * a.zoomStep), a.zoomCurStep++;var c = jQuery("#zoomSlider");c.css("top", parseInt(c.css("top"), 10) - b), a.container.trigger("zoomIn");
  }
}, JQVMap.prototype.zoomOut = function () {
  var a = this,
      b = (jQuery("#zoom").innerHeight() - 12 - 30 - 6 - 7 - 6) / (this.zoomMaxStep - this.zoomCurStep);if (a.zoomCurStep > 1) {
    a.transX += (a.width / (a.scale / a.zoomStep) - a.width / a.scale) / 2, a.transY += (a.height / (a.scale / a.zoomStep) - a.height / a.scale) / 2, a.setScale(a.scale / a.zoomStep), a.zoomCurStep--;var c = jQuery("#zoomSlider");c.css("top", parseInt(c.css("top"), 10) + b), a.container.trigger("zoomOut");
  }
}, VectorCanvas.prototype.applyTransformParams = function (a, b, c) {
  "svg" === this.mode ? this.rootGroup.setAttribute("transform", "scale(" + a + ") translate(" + b + ", " + c + ")") : (this.rootGroup.coordorigin = this.width - b + "," + (this.height - c), this.rootGroup.coordsize = this.width / a + "," + this.height / a);
}, VectorCanvas.prototype.createGroup = function (a) {
  var b;return "svg" === this.mode ? b = this.createSvgNode("g") : (b = this.createVmlNode("group"), b.style.width = this.width + "px", b.style.height = this.height + "px", b.style.left = "0px", b.style.top = "0px", b.coordorigin = "0 0", b.coordsize = this.width + " " + this.height), a && (this.rootGroup = b), b;
}, VectorCanvas.prototype.createPath = function (a) {
  var b;if ("svg" === this.mode) b = this.createSvgNode("path"), b.setAttribute("d", a.path), null !== this.params.borderColor && b.setAttribute("stroke", this.params.borderColor), this.params.borderWidth > 0 && (b.setAttribute("stroke-width", this.params.borderWidth), b.setAttribute("stroke-linecap", "round"), b.setAttribute("stroke-linejoin", "round")), this.params.borderOpacity > 0 && b.setAttribute("stroke-opacity", this.params.borderOpacity), b.setFill = function (a) {
    this.setAttribute("fill", a), null === this.getAttribute("original") && this.setAttribute("original", a);
  }, b.getFill = function () {
    return this.getAttribute("fill");
  }, b.getOriginalFill = function () {
    return this.getAttribute("original");
  }, b.setOpacity = function (a) {
    this.setAttribute("fill-opacity", a);
  };else {
    b = this.createVmlNode("shape"), b.coordorigin = "0 0", b.coordsize = this.width + " " + this.height, b.style.width = this.width + "px", b.style.height = this.height + "px", b.fillcolor = JQVMap.defaultFillColor, b.stroked = !1, b.path = VectorCanvas.pathSvgToVml(a.path);var c = this.createVmlNode("skew");c.on = !0, c.matrix = "0.01,0,0,0.01,0,0", c.offset = "0,0", b.appendChild(c);var d = this.createVmlNode("fill");b.appendChild(d), b.setFill = function (a) {
      this.getElementsByTagName("fill")[0].color = a, null === this.getAttribute("original") && this.setAttribute("original", a);
    }, b.getFill = function () {
      return this.getElementsByTagName("fill")[0].color;
    }, b.getOriginalFill = function () {
      return this.getAttribute("original");
    }, b.setOpacity = function (a) {
      this.getElementsByTagName("fill")[0].opacity = parseInt(100 * a, 10) + "%";
    };
  }return b;
}, VectorCanvas.prototype.pathSvgToVml = function (a) {
  var b,
      c,
      d = "",
      e = 0,
      f = 0;return a.replace(/([MmLlHhVvCcSs])((?:-?(?:\d+)?(?:\.\d+)?,?\s?)+)/g, function (a, g, h) {
    h = h.replace(/(\d)-/g, "$1,-").replace(/\s+/g, ",").split(","), h[0] || h.shift();for (var i = 0, j = h.length; j > i; i++) {
      h[i] = Math.round(100 * h[i]);
    }switch (g) {case "m":
        e += h[0], f += h[1], d = "t" + h.join(",");break;case "M":
        e = h[0], f = h[1], d = "m" + h.join(",");break;case "l":
        e += h[0], f += h[1], d = "r" + h.join(",");break;case "L":
        e = h[0], f = h[1], d = "l" + h.join(",");break;case "h":
        e += h[0], d = "r" + h[0] + ",0";break;case "H":
        e = h[0], d = "l" + e + "," + f;break;case "v":
        f += h[0], d = "r0," + h[0];break;case "V":
        f = h[0], d = "l" + e + "," + f;break;case "c":
        b = e + h[h.length - 4], c = f + h[h.length - 3], e += h[h.length - 2], f += h[h.length - 1], d = "v" + h.join(",");break;case "C":
        b = h[h.length - 4], c = h[h.length - 3], e = h[h.length - 2], f = h[h.length - 1], d = "c" + h.join(",");break;case "s":
        h.unshift(f - c), h.unshift(e - b), b = e + h[h.length - 4], c = f + h[h.length - 3], e += h[h.length - 2], f += h[h.length - 1], d = "v" + h.join(",");break;case "S":
        h.unshift(f + f - c), h.unshift(e + e - b), b = h[h.length - 4], c = h[h.length - 3], e = h[h.length - 2], f = h[h.length - 1], d = "c" + h.join(",");}return d;
  }).replace(/z/g, "");
}, VectorCanvas.prototype.setSize = function (a, b) {
  if ("svg" === this.mode) this.canvas.setAttribute("width", a), this.canvas.setAttribute("height", b);else if (this.canvas.style.width = a + "px", this.canvas.style.height = b + "px", this.canvas.coordsize = a + " " + b, this.canvas.coordorigin = "0 0", this.rootGroup) {
    for (var c = this.rootGroup.getElementsByTagName("shape"), d = 0, e = c.length; e > d; d++) {
      c[d].coordsize = a + " " + b, c[d].style.width = a + "px", c[d].style.height = b + "px";
    }this.rootGroup.coordsize = a + " " + b, this.rootGroup.style.width = a + "px", this.rootGroup.style.height = b + "px";
  }this.width = a, this.height = b;
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var sample_data = { "af": "16.63", "al": "11.58", "dz": "158.97", "ao": "85.81", "ag": "1.1", "ar": "351.02", "am": "8.83", "au": "1219.72", "at": "366.26", "az": "52.17", "bs": "7.54", "bh": "21.73", "bd": "105.4", "bb": "3.96", "by": "52.89", "be": "461.33", "bz": "1.43", "bj": "6.49", "bt": "1.4", "bo": "19.18", "ba": "16.2", "bw": "12.5", "br": "2023.53", "bn": "11.96", "bg": "44.84", "bf": "8.67", "bi": "1.47", "kh": "11.36", "cm": "21.88", "ca": "1563.66", "cv": "1.57", "cf": "2.11", "td": "7.59", "cl": "199.18", "cn": "5745.13", "co": "283.11", "km": "0.56", "cd": "12.6", "cg": "11.88", "cr": "35.02", "ci": "22.38", "hr": "59.92", "cy": "22.75", "cz": "195.23", "dk": "304.56", "dj": "1.14", "dm": "0.38", "do": "50.87", "ec": "61.49", "eg": "216.83", "sv": "21.8", "gq": "14.55", "er": "2.25", "ee": "19.22", "et": "30.94", "fj": "3.15", "fi": "231.98", "fr": "2555.44", "ga": "12.56", "gm": "1.04", "ge": "11.23", "de": "3305.9", "gh": "18.06", "gr": "305.01", "gd": "0.65", "gt": "40.77", "gn": "4.34", "gw": "0.83", "gy": "2.2", "ht": "6.5", "hn": "15.34", "hk": "226.49", "hu": "132.28", "is": "12.77", "in": "1430.02", "id": "695.06", "ir": "337.9", "iq": "84.14", "ie": "204.14", "il": "201.25", "it": "2036.69", "jm": "13.74", "jp": "5390.9", "jo": "27.13", "kz": "129.76", "ke": "32.42", "ki": "0.15", "kr": "986.26", "undefined": "5.73", "kw": "117.32", "kg": "4.44", "la": "6.34", "lv": "23.39", "lb": "39.15", "ls": "1.8", "lr": "0.98", "ly": "77.91", "lt": "35.73", "lu": "52.43", "mk": "9.58", "mg": "8.33", "mw": "5.04", "my": "218.95", "mv": "1.43", "ml": "9.08", "mt": "7.8", "mr": "3.49", "mu": "9.43", "mx": "1004.04", "md": "5.36", "mn": "5.81", "me": "3.88", "ma": "91.7", "mz": "10.21", "mm": "35.65", "na": "11.45", "np": "15.11", "nl": "770.31", "nz": "138", "ni": "6.38", "ne": "5.6", "ng": "206.66", "no": "413.51", "om": "53.78", "pk": "174.79", "pa": "27.2", "pg": "8.81", "py": "17.17", "pe": "153.55", "ph": "189.06", "pl": "438.88", "pt": "223.7", "qa": "126.52", "ro": "158.39", "ru": "1476.91", "rw": "5.69", "ws": "0.55", "st": "0.19", "sa": "434.44", "sn": "12.66", "rs": "38.92", "sc": "0.92", "sl": "1.9", "sg": "217.38", "sk": "86.26", "si": "46.44", "sb": "0.67", "za": "354.41", "es": "1374.78", "lk": "48.24", "kn": "0.56", "lc": "1", "vc": "0.58", "sd": "65.93", "sr": "3.3", "sz": "3.17", "se": "444.59", "ch": "522.44", "sy": "59.63", "tw": "426.98", "tj": "5.58", "tz": "22.43", "th": "312.61", "tl": "0.62", "tg": "3.07", "to": "0.3", "tt": "21.2", "tn": "43.86", "tr": "729.05", "tm": 0, "ug": "17.12", "ua": "136.56", "ae": "239.65", "gb": "2258.57", "us": "14624.18", "uy": "40.71", "uz": "37.72", "vu": "0.72", "ve": "285.21", "vn": "101.99", "ye": "30.02", "zm": "15.69", "zw": "5.57" };

/***/ }),
/* 7 */
/***/ (function(module, exports) {

/** Add World Map Data Points */
jQuery.fn.vectorMap('addMap', 'world_en', { "width": 950, "height": 550, "paths": { "id": { "path": "M781.68,324.4l-2.31,8.68l-12.53,4.23l-3.75-4.4l-1.82,0.5l3.4,13.12l5.09,0.57l6.79,2.57v2.57l3.11-0.57l4.53-6.27v-5.13l2.55-5.13l2.83,0.57l-3.4-7.13l-0.52-4.59L781.68,324.4L781.68,324.4M722.48,317.57l-0.28,2.28l6.79,11.41h1.98l14.15,23.67l5.66,0.57l2.83-8.27l-4.53-2.85l-0.85-4.56L722.48,317.57L722.48,317.57M789.53,349.11l2.26,2.77l-1.47,4.16v0.79h3.34l1.18-10.4l1.08,0.3l1.96,9.5l1.87,0.5l1.77-4.06l-1.77-6.14l-1.47-2.67l4.62-3.37l-1.08-1.49l-4.42,2.87h-1.18l-2.16-3.17l0.69-1.39l3.64-1.78l5.5,1.68l1.67-0.1l4.13-3.86l-1.67-1.68l-3.83,2.97h-2.46l-3.73-1.78l-2.65,0.1l-2.95,4.75l-1.87,8.22L789.53,349.11L789.53,349.11M814.19,330.5l-1.87,4.55l2.95,3.86h0.98l1.28-2.57l0.69-0.89l-1.28-1.39l-1.87-0.69L814.19,330.5L814.19,330.5M819.99,345.45l-4.03,0.89l-1.18,1.29l0.98,1.68l2.65-0.99l1.67-0.99l2.46,1.98l1.08-0.89l-1.96-2.38L819.99,345.45L819.99,345.45M753.17,358.32l-2.75,1.88l0.59,1.58l8.75,1.98l4.42,0.79l1.87,1.98l5.01,0.4l2.36,1.98l2.16-0.5l1.97-1.78l-3.64-1.68l-3.14-2.67l-8.16-1.98L753.17,358.32L753.17,358.32M781.77,366.93l-2.16,1.19l1.28,1.39l3.14-1.19L781.77,366.93L781.77,366.93M785.5,366.04l0.39,1.88l2.26,0.59l0.88-1.09l-0.98-1.49L785.5,366.04L785.5,366.04M790.91,370.99l-2.75,0.4l2.46,2.08h1.96L790.91,370.99L790.91,370.99M791.69,367.72l-0.59,1.19l4.42,0.69l3.44-1.98l-1.96-0.59l-3.14,0.89l-1.18-0.99L791.69,367.72L791.69,367.72M831.93,339.34l-4.17,0.47l-2.68,1.96l1.11,2.24l4.54,0.84v0.84l-2.87,2.33l1.39,4.85l1.39,0.09l1.2-4.76h2.22l0.93,4.66l10.83,8.96l0.28,7l3.7,4.01l1.67-0.09l0.37-24.72l-6.29-4.38l-5.93,4.01l-2.13,1.31l-3.52-2.24l-0.09-7.09L831.93,339.34L831.93,339.34z", "name": "Indonesia" }, "pg": { "path": "M852.76,348.29l-0.37,24.44l3.52-0.19l4.63-5.41l3.89,0.19l2.5,2.24l0.83,6.9l7.96,4.2l2.04-0.75v-2.52l-6.39-5.32l-3.15-7.28l2.5-1.21l-1.85-4.01l-3.7-0.09l-0.93-4.29l-9.81-6.62L852.76,348.29L852.76,348.29M880.48,349l-0.88,1.25l4.81,4.26l0.66,2.5l1.31-0.15l0.15-2.57l-1.46-1.32L880.48,349L880.48,349M882.89,355.03l-0.95,0.22l-0.58,2.57l-1.82,1.18l-5.47,0.96l0.22,2.06l5.76-0.29l3.65-2.28l-0.22-3.97L882.89,355.03L882.89,355.03M889.38,359.51l1.24,3.45l2.19,2.13l0.66-0.59l-0.22-2.28l-2.48-3.01L889.38,359.51L889.38,359.51z", "name": "Papua New Guinea" }, "mx": { "path": "M137.49,225.43l4.83,15.21l-2.25,1.26l0.25,3.02l4.25,3.27v6.05l5.25,5.04l-2.25-14.86l-3-9.83l0.75-6.8l2.5,0.25l1,2.27l-1,5.79l13,25.44v9.07l10.5,12.34l11.5,5.29l4.75-2.77l6.75,5.54l4-4.03l-1.75-4.54l5.75-1.76l1.75,1.01l1.75-1.76h2.75l5-8.82l-2.5-2.27l-9.75,2.27l-2.25,6.55l-5.75,1.01l-6.75-2.77l-3-9.57l2.27-12.07l-4.64-2.89l-2.21-11.59l-1.85-0.79l-3.38,3.43l-3.88-2.07l-1.52-7.73l-15.37-1.61l-7.94-5.97L137.49,225.43L137.49,225.43z", "name": "Mexico" }, "ee": { "path": "M517.77,143.66l-5.6-0.2l-3.55,2.17l-0.05,1.61l2.3,2.17l7.15,1.21L517.77,143.66L517.77,143.66M506.76,147.64l-1.55-0.05l-0.9,0.91l0.65,0.96l1.55,0.1l0.8-1.16L506.76,147.64L506.76,147.64z", "name": "Estonia" }, "dz": { "path": "M473.88,227.49l-4.08-1.37l-16.98,3.19l-3.7,2.81l2.26,11.67l-6.75,0.27l-4.06,6.53l-9.67,2.32l0.03,4.75l31.85,24.35l5.43,0.46l18.11-14.15l-1.81-2.28l-3.4-0.46l-2.04-3.42v-14.15l-1.36-1.37l0.23-3.65l-3.62-3.65l-0.45-3.88l1.58-1.14l-0.68-4.11L473.88,227.49L473.88,227.49z", "name": "Algeria" }, "ma": { "path": "M448.29,232.28h-11.55l-2.26,5.02l-5.21,2.51l-4.3,11.64l-8.38,5.02l-11.77,19.39l11.55-0.23l0.45-5.7h2.94v-7.76h10.19l0.23-10.04l9.74-2.28l4.08-6.62l6.34-0.23L448.29,232.28L448.29,232.28z", "name": "Morocco" }, "mr": { "path": "M404.9,276.66l2.18,2.85l-0.45,12.32l3.17-2.28l2.26-0.46l3.17,1.14l3.62,5.02l3.4-2.28l16.53-0.23l-4.08-27.61l4.38-0.02l-8.16-6.25l0.01,4.06l-10.33,0.01l-0.05,7.75l-2.97-0.01l-0.38,5.72L404.9,276.66L404.9,276.66z", "name": "Mauritania" }, "sn": { "path": "M412.03,289.84L410.12,290.31L406.18,293.18L405.28,294.78L405,296.37L406.43,297.40L411.28,297.34L414.40,296.5L414.75,298.03L414.46,300.06L414.53,300.09L406.78,300.21L408.03,303.21L408.71,301.37L418,302.15L418.06,302.21L419.03,302.25L422,302.37L422.12,300.62L418.53,296.31L414.53,290.87L412.03,289.84z", "name": "Senegal" }, "gm": { "path": "M406.89,298.34l-0.13,1.11l6.92-0.1l0.35-1.03l-0.15-1.04l-1.99,0.81L406.89,298.34L406.89,298.34z", "name": "Gambia" }, "gw": { "path": "M408.6,304.53l1.4,2.77l3.93-3.38l0.04-1.04l-4.63-0.67L408.6,304.53L408.6,304.53z", "name": "Guinea-Bissau" }, "gn": { "path": "M410.42,307.94l3.04,4.68l3.96-3.44l4.06-0.18l3.38,4.49l2.87,1.89l1.08-2.1l0.96-0.54l-0.07-4.62l-1.91-5.48l-5.86,0.65l-7.25-0.58l-0.04,1.86L410.42,307.94L410.42,307.94z", "name": "Guinea" }, "sl": { "path": "M413.93,313.13l5.65,5.46l4.03-4.89l-2.52-3.95l-3.47,0.35L413.93,313.13L413.93,313.13z", "name": "Sierra Leone" }, "lr": { "path": "M420.17,319.19l10.98,7.34l-0.26-5.56l-3.32-3.91l-3.24-2.87L420.17,319.19L420.17,319.19z", "name": "Liberia" }, "ci": { "path": "M432.07,326.75l4.28-3.03l5.32-0.93l5.43,1.17l-2.77-4.19l-0.81-2.56l0.81-7.57l-4.85,0.23l-2.2-2.1l-4.62,0.12l-2.2,0.35l0.23,5.12l-1.16,0.47l-1.39,2.56l3.58,4.19L432.07,326.75L432.07,326.75z", "name": "Cote d'Ivoire" }, "ml": { "path": "M419.46,295.84l3.08-2.11l17.12-0.1l-3.96-27.54l4.52-0.13l21.87,16.69l2.94,0.42l-1.11,9.28l-13.75,1.25l-10.61,7.92l-1.93,5.42l-7.37,0.31l-1.88-5.41l-5.65,0.4l0.22-1.77L419.46,295.84L419.46,295.84z", "name": "Mali" }, "bf": { "path": "M450.59,294.28l3.64-0.29l5.97,8.44l-5.54,4.18l-4.01-1.03l-5.39,0.07l-0.87,3.16l-4.52,0.22l-1.24-1.69l1.6-5.14L450.59,294.28L450.59,294.28z", "name": "Burkina Faso" }, "ne": { "path": "M460.89,302l2.55-0.06l2.3-3.45l3.86-0.69l4.11,2.51l8.77,0.25l6.78-2.76l2.55-2.19l0.19-2.88l4.73-4.77l1.25-10.53l-3.11-6.52l-7.96-1.94l-18.42,14.36l-2.61-0.25l-1.12,9.97l-9.4,0.94L460.89,302L460.89,302z", "name": "Niger" }, "gh": { "path": "M444.34,317.05l1.12,2.63l2.92,4.58l1.62-0.06l4.42-2.51l-0.31-14.29l-3.42-1l-4.79,0.13L444.34,317.05L444.34,317.05z", "name": "Ghana" }, "tg": { "path": "M455.22,321.25l2.68-1.57l-0.06-10.35l-1.74-2.82l-1.12,0.94L455.22,321.25L455.22,321.25z", "name": "Togo" }, "bj": { "path": "M458.71,319.49h2.12l0.12-6.02l2.68-3.89l-0.12-6.77l-2.43-0.06l-4.17,3.26l1.74,3.32L458.71,319.49L458.71,319.49z", "name": "Benin" }, "ng": { "path": "M461.57,319.37l3.92,0.19l4.73,5.27l2.3,0.63l1.8-0.88l2.74-0.38l0.93-3.82l3.73-2.45l4.04-0.19l7.4-13.61l-0.12-3.07l-3.42-2.63l-6.84,3.01l-9.15-0.13l-4.36-2.76l-3.11,0.69l-1.62,2.82l-0.12,7.96l-2.61,3.7L461.57,319.37L461.57,319.37z", "name": "Nigeria" }, "tn": { "path": "M474.91,227.33l5.53-2.23l1.82,1.18l0.07,1.44l-0.85,1.11l0.13,1.97l0.85,0.46v3.54l-0.98,1.64l0.13,1.05l3.71,1.31l-2.99,4.65l-1.17-0.07l-0.2,3.74l-1.3,0.2l-1.11-0.98l0.26-3.8l-3.64-3.54l-0.46-3.08l1.76-1.38L474.91,227.33L474.91,227.33z", "name": "Tunisia" }, "ly": { "path": "M480.05,248.03l1.56-0.26l0.46-3.6h0.78l3.19-5.24l7.87,2.29l2.15,3.34l7.74,3.54l4.03-1.7l-0.39-1.7l-1.76-1.7l0.2-1.18l2.86-2.42h5.66l2.15,2.88l4.55,0.66l0.59,36.89l-3.38-0.13l-20.42-10.62l-2.21,1.25l-8.39-2.1l-2.28-3.01l-3.32-0.46l-1.69-3.01L480.05,248.03L480.05,248.03z", "name": "Libya" }, "eg": { "path": "M521.93,243.06l2.67,0.07l5.2,1.44l2.47,0.07l3.06-2.56h1.43l2.6,1.44h3.29l0.59-0.04l2.08,5.98l0.59,1.93l0.55,2.89l-0.98,0.72l-1.69-0.85l-1.95-6.36l-1.76-0.13l-0.13,2.16l1.17,3.74l9.37,11.6l0.2,4.98l-2.73,3.15L522.32,273L521.93,243.06L521.93,243.06z", "name": "Egypt" }, "td": { "path": "M492.79,296l0.13-2.95l4.74-4.61l1.27-11.32l-3.16-6.04l2.21-1.13l21.4,11.15l-0.13,10.94l-3.77,3.21v5.64l2.47,4.78h-4.36l-7.22,7.14l-0.19,2.16l-5.33-0.07l-0.07,0.98l-3.04-0.4l-2.08-3.93l-1.56-0.77l0.2-1.2l1.96-1.5v-7.02l-2.71-0.42l-3.27-2.43L492.79,296L492.79,296L492.79,296z", "name": "Chad" }, "sd": { "path": "M520.15,292.43l0.18-11.83l2.46,0.07l-0.28-6.57l25.8,0.23l3.69-3.72l7.96,12.73l-4.36,5.14v7.85l-6.86,14.75l-2.36,1.04l0.75,4.11h2.94l3.99,5.79l-3.2,0.41l-0.82,1.49l-0.08,2.15l-9.6-0.17l-0.98-1.49l-6.71-0.38l-12.32-12.68l1.23-0.74l0.33-2.98l-2.95-1.74l-2.69-5.31l0.15-4.94L520.15,292.43L520.15,292.43z", "name": "Sudan" }, "cm": { "path": "M477.82,324.28l3.22,2.96l-0.23,4.58l17.66-0.41l1.44-1.62l-5.06-5.45l-0.75-1.97l3.22-6.03l-2.19-4l-1.84-0.99v-2.03l2.13-1.39l0.12-6.32l-1.69-0.19l-0.03,3.32l-7.42,13.85l-4.54,0.23l-3.11,2.14L477.82,324.28L477.82,324.28z", "name": "Cameroon" }, "er": { "path": "M556.71,294.7l-0.25-5.89l3.96-4.62l1.07,0.82l1.95,6.52l9.36,6.97l-1.7,2.09l-6.85-5.89H556.71L556.71,294.7z", "name": "Eritrea" }, "dj": { "path": "M571.48,301.54l-0.57,3.36l3.96-0.06l0.06-4.94l-1.45-0.89L571.48,301.54L571.48,301.54z", "name": "Djibouti" }, "et": { "path": "M549.49,311.76l7.28-16.2l7.23,0.04l6.41,5.57l-0.45,4.59h4.97l0.51,2.76l8.04,4.81l4.96,0.25l-9.43,10.13l-12.95,3.99h-3.21l-5.72-4.88l-2.26-0.95l-4.38-6.45l-2.89,0.04l-0.34-2.96L549.49,311.76L549.49,311.76z", "name": "Ethiopia" }, "so": { "path": "M575.74,305.04l4.08,2.78l1.21-0.06l10.13-3.48l1.15,3.71l-0.81,3.13l-2.19,1.74l-5.47-0.35l-7.83-4.81L575.74,305.04L575.74,305.04M591.97,304.05l4.37-1.68l1.55,0.93l-0.17,3.88l-4.03,11.48l-21.81,23.36l-2.53-1.74l-0.17-9.86l3.28-3.77l6.96-2.15l10.21-10.78l2.67-2.38l0.75-3.48L591.97,304.05L591.97,304.05z", "name": "Somalia" }, "ye": { "path": "M599.62,299.65l2.13,2.38l2.88-1.74l1.04-0.35l-1.32-1.28l-2.53,0.75L599.62,299.65L599.62,299.65M571.99,289.23l1.44,4.28v4.18l3.46,3.14l24.38-9.93l0.23-2.73l-3.91-7.02l-9.81,3.13l-5.63,5.54l-6.53-3.86L571.99,289.23L571.99,289.23z", "name": "Yemen" }, "cf": { "path": "M495.66,324.05l4.66,5.04l1.84-2.38l2.93,0.12l0.63-2.32l2.88-1.8l5.98,4.12l3.45-3.42l13.39,0.59L519,311.18l1.67-1.04l0.23-2.26l-2.82-1.33h-4.14l-6.67,6.61l-0.23,2.72l-5.29-0.17l-0.17,1.16l-3.45-0.35l-3.11,5.91L495.66,324.05L495.66,324.05z", "name": "Central African Republic" }, "st": { "path": "M470.74,337.15l1.15-0.58l0.86,0.7l-0.86,1.33l-1.04-0.41L470.74,337.15L470.74,337.15M473.05,333.5l1.73-0.29l0.58,1.1l-0.86,0.93l-0.86-0.12L473.05,333.5L473.05,333.5z", "name": "Sao Tome and Principe" }, "gq": { "path": "M476.84,327.41l-0.46,1.97l1.38,0.75l1.32-0.99l-0.46-2.03L476.84,327.41L476.84,327.41M480.99,332.69l-0.06,1.39l4.54,0.23l-0.06-1.57L480.99,332.69L480.99,332.69z", "name": "Equatorial Guinea" }, "ga": { "path": "M486.39,332.63l-0.12,2.49l-5.64-0.12l-3.45,6.67l8.11,8.87l2.01-1.68l-0.06-1.74l-1.38-0.64v-1.22l3.11-1.97l2.76,2.09l3.05,0.06l-0.06-10.49l-4.83-0.23l-0.06-2.2L486.39,332.63L486.39,332.63z", "name": "Gabon" }, "cg": { "path": "M491,332.52l-0.06,1.45l4.78,0.12l0.17,12.41l-4.37-0.12l-2.53-1.97l-1.96,1.1l-0.09,0.55l1.01,0.49l0.29,2.55l-2.7,2.32l0.58,1.22l2.99-2.32h1.44l0.46,1.39l1.9,0.81l6.1-5.16l-0.12-3.77l1.27-3.07l3.91-2.9l1.05-9.81l-2.78,0.01l-3.22,4.41L491,332.52L491,332.52z", "name": "Congo" }, "ao": { "path": "M486.55,353.23l1.74,2.26l2.25-2.13l-0.66-2.21l-0.56-0.04L486.55,353.23L486.55,353.23M488.62,356.71l3.41,12.73l-0.08,4.02l-4.99,5.36l-0.75,8.71l19.2,0.17l6.24,2.26l5.15-0.67l-3-3.76l0.01-10.74l5.9-0.25v-4.19l-4.79-0.2l-0.96-9.92l-2.02,0.03l-1.09-0.98l-1.19,0.06l-1.58,3.06H502l-1.41-1.42l0.42-2.01l-1.66-2.43L488.62,356.71L488.62,356.71z", "name": "Angola" }, "cd": { "path": "M489.38,355.71l10.31-0.18l2.09,2.97l-0.08,2.19l0.77,0.7h5.12l1.47-2.89h2.09l0.85,0.86l2.87-0.08l0.85,10.08l4.96,0.16v0.78l13.33,6.01l0.62,1.17h2.79l-0.31-4.22l-5.04-2.42l0.31-3.2l2.17-5.08l4.96-0.16l-4.26-14.14l0.08-6.01l6.74-10.54l0.08-1.48l-1.01-0.55l0.04-2.86l-1.23-0.11l-1.24-1.58l-20.35-0.92l-3.73,3.63l-6.11-4.02l-2.15,1.32l-1.56,13.13l-3.86,2.98l-1.16,2.64l0.21,3.91l-6.96,5.69l-1.85-0.84l0.25,1.09L489.38,355.71L489.38,355.71z", "name": "Congo" }, "rw": { "path": "M537.82,339.9l2.81,2.59l-0.12,2.77l-4.36,0.09v-3.06L537.82,339.9L537.82,339.9z", "name": "Rwanda" }, "bi": { "path": "M536.21,346.21l4.27-0.09l-1.11,3.74l-1.08,0.94h-1.32l-0.94-2.53L536.21,346.21L536.21,346.21z", "name": "Burundi" }, "ug": { "path": "M538.3,339.09l3.03,2.84l1.9-1.21l5.14-0.84l0.88,0.09l0.33-1.95l2.9-6.1l-2.44-5.08l-7.91,0.05l-0.05,2.09l1.06,1.02l-0.16,2.09L538.3,339.09L538.3,339.09z", "name": "Uganda" }, "ke": { "path": "M550.83,326.52l2.66,5.19l-3.19,6.69l-0.42,2.03l15.93,9.85l4.94-7.76l-2.5-2.03l-0.05-10.22l3.13-3.42l-4.99,1.66l-3.77,0.05l-5.9-4.98l-1.86-0.8l-3.45,0.32l-0.61,1.02L550.83,326.52L550.83,326.52z", "name": "Kenya" }, "tz": { "path": "M550.57,371.42l17.47-2.14l-3.93-7.6l-0.21-7.28l1.27-3.48l-16.62-10.44l-5.21,0.86l-1.81,1.34l-0.16,3.05l-1.17,4.23l-1.22,1.45l-1.75,0.16l3.35,11.61l5.47,2.57l3.77,0.11L550.57,371.42L550.57,371.42z", "name": "Tanzania" }, "zm": { "path": "M514.55,384.7l3.17,4.4l4.91,0.3l1.74,0.96l5.14,0.06l4.43-6.21l12.38-5.54l1.08-4.88l-1.44-6.99l-6.46-3.68l-4.31,0.3l-2.15,4.76l0.06,2.17l5.08,2.47l0.3,5.37l-4.37,0.24l-1.08-1.81l-12.14-5.18l-0.36,3.98l-5.74,0.18L514.55,384.7L514.55,384.7z", "name": "Zambia" }, "mw": { "path": "M547.16,379.4l3.11,3.25l-0.06,4.16l0.6,1.75l4.13-4.46l-0.48-5.67l-2.21-1.69l-1.97-9.95l-3.41-0.12l1.55,7.17L547.16,379.4L547.16,379.4z", "name": "Malawi" }, "mz": { "path": "M541.17,413.28l2.69,2.23l6.34-3.86l1.02-5.73v-9.46l10.17-8.32l1.74,0.06l6.16-5.91l-0.96-12.18L552,372.17l0.48,3.68l2.81,2.17l0.66,6.63l-5.5,5.37l-1.32-3.01l0.24-3.98l-3.17-3.44l-7.78,3.62l7.24,3.68l0.24,10.73l-4.79,7.11L541.17,413.28L541.17,413.28z", "name": "Mozambique" }, "zw": { "path": "M524.66,392.3l8.97,10.13l6.88,1.75l4.61-7.23l-0.36-9.58l-7.48-3.86l-2.81,1.27l-4.19,6.39l-5.8-0.06L524.66,392.3L524.66,392.3z", "name": "Zimbabwe" }, "na": { "path": "M496.55,421.96l3.35,0.24l1.97,1.99l4.67,0.06l1.14-13.26v-8.68l2.99-0.6l1.14-9.1l7.6-0.24l2.69-2.23l-4.55-0.18l-6.16,0.84l-6.64-2.41h-18.66l0.48,5.3l6.22,9.16l-1.08,4.7l0.06,2.47L496.55,421.96L496.55,421.96z", "name": "Namibia" }, "bw": { "path": "M508.51,411.23l2.15,0.66l-0.3,6.15l2.21,0.3l5.08-4.58l6.1,0.66l1.62-4.1l7.72-7.05l-9.27-10.67l-0.12-1.75l-1.02-0.3l-2.81,2.59l-7.3,0.18l-1.02,9.1l-2.87,0.66L508.51,411.23L508.51,411.23z", "name": "Botswana" }, "sz": { "path": "M540.87,414l-2.51,0.42l-1.08,2.95l1.92,1.75h2.33l1.97-2.83L540.87,414L540.87,414z", "name": "Swaziland" }, "ls": { "path": "M527.41,425.39l3.05-2.35l1.44,0.06l1.74,2.17l-0.18,2.17l-2.93,1.08v0.84l-3.23-0.18l-0.78-2.35L527.41,425.39L527.41,425.39z", "name": "Lesotho" }, "za": { "path": "M534.16,403.63l-7.9,7.3l-1.88,4.51l-6.26-0.78l-5.21,4.63l-3.46-0.34l0.28-6.4l-1.23-0.43l-0.86,13.09l-6.14-0.06l-1.85-2.18l-2.71-0.03l2.47,7.09l4.41,4.17l-3.15,3.67l2.04,4.6l4.72,1.8l3.76-3.2l10.77,0.06l0.77-0.96l4.78-0.84l16.17-16.1l-0.06-5.07l-1.73,2.24h-2.59l-3.15-2.64l1.6-3.98l2.75-0.56l-0.25-8.18L534.16,403.63L534.16,403.63z M530.37,422.13l1.51-0.06l2.45,2.66l-0.07,3.08l-2.87,1.45l-0.18,1.02l-4.38,0.05l-1.37-3.3l1.25-2.42L530.37,422.13L530.37,422.13z", "name": "South Africa" }, "gl": { "path": "M321.13,50.07l-1.36,2.17l2.45,2.45l-1.09,2.45l3.54,4.62l4.35-1.36l5.71-0.54l6.53,7.07l4.35,11.69l-3.53,7.34l4.89-0.82l2.72,1.63l0.27,3.54l-5.98,0.27l3.26,3.26l4.08,0.82l-8.97,11.96l-1.09,7.34l1.9,5.98l-1.36,3.54l2.45,7.61l4.62,5.17l1.36-0.27l2.99-0.82l0.27,4.35l1.9,2.72l3.53-0.27l2.72-10.06l8.16-10.06l12.24-4.89l7.61-9.52l3.53,1.63h7.34l5.98-5.98l7.34-2.99l0.82-4.62l-4.62-4.08l-4.08-1.36l-2.18-5.71l5.17-2.99l8.16,4.35l2.72-2.99l-4.35-2.45l9.25-12.51l-1.63-5.44l-4.35-0.27l1.63-4.89l5.44-2.45l11.15-9.79l-3.26-3.53l-12.51,1.09l-6.53,6.53l3.81-8.43l-4.35-1.09l-2.45,4.35l-3.53-2.99l-9.79,1.09l2.72-4.35l16.04-0.54l-4.08-5.44l-17.4-3.26l-7.07,1.09l0.27,3.54l-7.34-2.45l0.27-2.45l-5.17,1.09l-1.09,2.72l5.44,1.9l-5.71,4.08l-4.08-4.62l-5.71-1.63l-0.82,4.35h-5.71l-2.18-4.62l-8.97-1.36l-4.89,2.45l-0.27,3.26l-6.25-0.82l-3.81,1.63l0.27,3.81v1.9l-7.07,1.36l-3.26-2.17l-2.18,3.53l3.26,3.54l6.8-0.82l0.54,2.18l-5.17,2.45L321.13,50.07L321.13,50.07M342.89,92.49l1.63,2.45l-0.82,2.99h-1.63l-2.18-2.45l0.54-1.9L342.89,92.49L342.89,92.49M410.87,85.69l4.62,1.36l-0.27,3.81l-4.89-2.45l-1.09-1.36L410.87,85.69L410.87,85.69z", "name": "Greenland" }, "au": { "path": "M761.17,427.98l-0.35,25.38l-3.9,2.86l-0.35,2.5l5.32,3.57l13.13-2.5h6.74l2.48-3.58l14.9-2.86l10.64,3.22l-0.71,4.29l1.42,4.29l8.16-1.43l0.35,2.14l-5.32,3.93l1.77,1.43l3.9-1.43l-1.06,11.8l7.45,5.72l4.26-1.43l2.13,2.14l12.42-1.79l11.71-18.95l4.26-1.07l8.51-15.73l2.13-13.58l-5.32-6.79l2.13-1.43l-4.26-13.23l-4.61-3.22l0.71-17.87l-4.26-3.22l-1.06-10.01h-2.13l-7.1,23.59l-3.9,0.36l-8.87-8.94l4.97-13.23l-9.22-1.79l-10.29,2.86l-2.84,8.22l-4.61,1.07l-0.35-5.72l-18.8,11.44l0.35,4.29l-2.84,3.93h-7.1l-15.26,6.43L761.17,427.98L761.17,427.98M825.74,496.26l-1.77,7.15l0.35,5l5.32-0.36l6.03-9.29L825.74,496.26L825.74,496.26z", "name": "Australia" }, "nz": { "path": "M913.02,481.96l1.06,11.8l-1.42,5.36l-5.32,3.93l0.35,4.65v5l1.42,1.79l14.55-12.51v-2.86h-3.55l-4.97-16.8L913.02,481.96L913.02,481.96M902.38,507.7l2.84,5.36l-7.81,7.51l-0.71,3.93l-5.32,0.71l-8.87,8.22l-8.16-3.93l-0.71-2.86l14.9-6.43L902.38,507.7L902.38,507.7z", "name": "New Zealand" }, "nc": { "path": "M906.64,420.47l-0.35,1.79l4.61,6.43l2.48,1.07l0.35-2.5L906.64,420.47L906.64,420.47z", "name": "New Caledonia" }, "my": { "path": "M764.14,332.92l3.02,3.49l11.58-4.01l2.29-8.84l5.16-0.37l4.72-3.42l-6.12-4.46l-1.4-2.45l-3.02,5.57l1.11,3.2l-1.84,2.67l-3.47-0.89l-8.41,6.17l0.22,3.57L764.14,332.92L764.14,332.92M732.71,315.45l2.01,4.51l0.45,5.86l2.69,4.17l6.49,3.94l2.46,0.23l-0.45-4.06l-2.13-5.18l-3.12-6.63l-0.26,1.16l-3.76-0.17l-2.7-3.88L732.71,315.45L732.71,315.45z", "name": "Malaysia" }, "bn": { "path": "M779.77,319.25l-2.88,3.49l2.36,0.74l1.33-1.86L779.77,319.25L779.77,319.25z", "name": "Brunei Darussalam" }, "tl": { "path": "M806.14,368.42l-5.11,4.26l0.49,1.09l2.16-0.4l2.55-2.38l5.01-0.69l-0.98-1.68L806.14,368.42L806.14,368.42z", "name": "Timor-Leste" }, "sb": { "path": "M895.43,364.65l0.15,2.28l1.39,1.32l1.31-0.81l-1.17-2.43L895.43,364.65L895.43,364.65M897.18,370.31l-1.17,1.25l1.24,2.28l1.46,0.44l-0.07-1.54L897.18,370.31L897.18,370.31M900.03,368.99l1.02,2.5l1.97,2.35l1.09-1.76l-1.46-2.5L900.03,368.99L900.03,368.99M905.14,372.74l0.58,3.09l1.39,1.91l1.17-2.42L905.14,372.74L905.14,372.74M906.74,379.65l-0.51,0.88l1.68,2.21l1.17,0.07l-0.73-2.87L906.74,379.65L906.74,379.65M903.02,384.05l-1.75,0.81l1.53,2.13l1.31-0.74L903.02,384.05L903.02,384.05z", "name": "Solomon Islands" }, "vu": { "path": "M920.87,397.22l-1.24,1.66l0.52,1.87l0.62,0.42l1.13-1.46L920.87,397.22L920.87,397.22M921.49,402.31l0.1,1.35l1.34,0.42l0.93-0.52l-0.93-1.46L921.49,402.31L921.49,402.31M923.45,414.37l-0.62,0.94l0.93,1.04l1.55-0.52L923.45,414.37L923.45,414.37z", "name": "Vanuatu" }, "fj": { "path": "M948.62,412.29l-1.24,1.66l-0.1,1.87l1.44,1.46L948.62,412.29L948.62,412.29z", "name": "Fiji" }, "ph": { "path": "M789.37,297.53l-0.86,1.64l-0.48,2.02l-4.78,6.07l0.29,1.25l2.01-0.29l6.21-6.94L789.37,297.53L789.37,297.53M797.11,295.22l-0.1,5.01l1.82,1.83l0.67,3.56l1.82,0.39l0.86-2.22l-1.43-1.06l-0.38-6.26L797.11,295.22L797.11,295.22M802.28,297.15l-0.1,4.43l1.05,1.73l1.82-2.12l-0.48-3.85L802.28,297.15L802.28,297.15M803.42,293.29l1.82,2.41l0.86,2.31h1.63l-0.29-3.95l-1.82-1.25L803.42,293.29L803.42,293.29M806.96,302.35l0.38,2.89l-3.35,2.7l-2.77,0.29l-2.96,3.18l0.1,1.45l2.77-0.87l1.91-1.25l1.63,4.14l2.87,2.02l1.15-0.39l1.05-1.25l-2.29-2.31l1.34-1.06l1.53,1.25l1.05-1.73l-1.05-2.12l-0.19-4.72L806.96,302.35L806.96,302.35M791.38,272.97l-2.58,1.83l-0.29,5.78l4.02,7.8l1.34,1.06l1.72-1.16l2.96,0.48l0.57,2.6l2.2,0.19l1.05-1.44l-1.34-1.83l-1.63-1.54l-3.44-0.38l-1.82-2.99l2.1-3.18l0.19-2.79l-1.43-3.56L791.38,272.97L791.38,272.97M792.72,290.21l0.76,2.7l1.34,0.87l0.96-1.25l-1.53-2.12L792.72,290.21L792.72,290.21z", "name": "Philippines" }, "cn": { "path": "M759.83,270.17l-2.39,0.67l-1.72,2.12l1.43,2.79l2.1,0.19l2.39-2.12l0.57-2.79L759.83,270.17L759.83,270.17M670.4,170.07l-3.46,8.7l-4.77-0.25l-5.03,11.01l4.27,5.44l-8.8,12.15l-4.52-0.76l-3.02,3.8l0.75,2.28l3.52,0.25l1.76,4.05l3.52,0.76l10.81,13.93v7.09l5.28,3.29l5.78-1.01l7.29,4.3l8.8,2.53l4.27-0.51l4.78-0.51l10.05-6.58l3.27,0.51l1.25,2.97l2.77,0.83l3.77,5.57l-2.51,5.57l1.51,3.8l4.27,1.52l0.75,4.56l5.03,0.51l0.75-2.28l7.29-3.8l4.52,0.25l5.28,5.82l3.52-1.52l2.26,0.25l1.01,2.79l1.76,0.25l2.51-3.54l10.05-3.8l9.05-10.89l3.02-10.38l-0.25-6.84l-3.77-0.76l2.26-2.53l-0.5-4.05l-9.55-9.62v-4.81l2.76-3.54l2.76-1.27l0.25-2.79h-7.04l-1.26,3.8l-3.27-0.76l-4.02-4.3l2.51-6.58l3.52-3.8l3.27,0.25l-0.5,5.82l1.76,1.52l4.27-4.3l1.51-0.25l-0.5-3.29l4.02-4.81l3.02,0.25l1.76-5.57l2.06-1.09l0.21-3.47l-2-2.1l-0.17-5.48l3.85-0.25l-0.25-14.13l-2.7,1.62l-1.01,3.62l-4.51-0.01l-13.07-7.35l-9.44-11.38l-9.58-0.1l-2.44,2.12l3.1,7.1l-1.08,6.66l-3.86,1.6l-2.17-0.17l-0.16,6.59l2.26,0.51l4.02-1.77l5.28,2.53v2.53l-3.77,0.25l-3.02,6.58l-2.76,0.25l-9.8,12.91l-10.3,4.56l-7.04,0.51l-4.77-3.29l-6.79,3.55l-7.29-2.28l-1.76-4.81l-12.31-0.76l-6.53-10.63h-2.76l-2.22-4.93L670.4,170.07z", "name": "China" }, "tw": { "path": "M787.46,248.31l-3.54,2.7l-0.19,5.2l3.06,3.56l0.76-0.67L787.46,248.31L787.46,248.31z", "name": "Taiwan" }, "jp": { "path": "M803.23,216.42l-1.63,1.64l0.67,2.31l1.43,0.1l0.96,5.01l1.15,1.25l2.01-1.83l0.86-3.28l-2.49-3.56L803.23,216.42L803.23,216.42M812.03,213.15l-2.77,2.6l-0.1,2.99l0.67,0.87l3.73-3.18l-0.29-3.18L812.03,213.15L812.03,213.15M808.2,206.98l-4.88,5.59l0.86,1.35l2.39,0.29l4.49-3.47l3.16-0.58l2.87,3.37l2.2-0.77l0.86-3.28l4.11-0.1l4.02-4.82l-2.1-8l-0.96-4.24l2.1-1.73l-4.78-7.22l-1.24,0.1l-2.58,2.89v2.41l1.15,1.35l0.38,6.36l-2.96,3.66l-1.72-1.06l-1.34,2.99l-0.29,2.79l1.05,1.64l-0.67,1.25l-2.2-1.83h-1.53l-1.34,0.77L808.2,206.98L808.2,206.98M816.43,163.44l-1.53,1.35l0.77,2.89l1.34,1.35l-0.1,4.43l-1.72,0.67l-1.34,2.99l3.92,5.39l2.58-0.87l0.48-1.35l-2.77-2.5l1.72-2.22l1.82,0.29l1.43,1.54l0.1-3.18l3.92-3.18l2.2-0.58l-1.82-3.08l-0.86-1.35l-1.43,0.96l-1.24,1.54l-2.68-0.58l-2.77-1.83L816.43,163.44L816.43,163.44z", "name": "Japan" }, "ru": { "path": "M506.61,151.72l-1.5-0.15l-2.7,3.23v1.51l0.9,0.35l1.75,0.05l2.9-2.37l0.4-0.81L506.61,151.72L506.61,151.72M830.86,160.45l-2.68,3.76l0.19,1.83l1.34-0.58l3.15-3.95L830.86,160.45L830.86,160.45M834.4,154.96l-0.96,2.6l0.1,1.73l1.63-1.06l1.53-3.08V154L834.4,154.96L834.4,154.96M840.04,132.03l-1.24,1.54l0.1,2.41l1.15-0.1l1.91-3.37L840.04,132.03L840.04,132.03M837.75,137.91v4.24l1.34,0.48l0.96-1.54v-3.27L837.75,137.91L837.75,137.91M798.64,122.59l-0.09,6.17l7.74,11.95l2.77,10.4l4.88,9.25l1.91,0.67l1.63-1.35l0.76-2.22l-6.98-7.61l0.19-3.95l1.53-0.67l0.38-2.31l-13.67-19.36L798.64,122.59L798.64,122.59M852.57,103.42l-1.91,0.19l1.15,1.64l2.39,1.64l0.67-0.77L852.57,103.42L852.57,103.42M856.29,104.58l0.29,1.64l2.96,0.87l0.29-1.16L856.29,104.58L856.29,104.58M547.82,38.79l1.72,0.69l-1.21,2.08v2.95l-2.58,1.56H543l-1.55-1.91l0.17-2.08l1.21-1.56h2.41L547.82,38.79L547.82,38.79M554.36,36.88v2.08l1.72,1.39l2.41-0.17l2.07-1.91v-1.39h-1.89l-1.55,0.52l-1.21-1.39L554.36,36.88L554.36,36.88M564.18,37.06l1.21,2.6l2.41,0.17l1.72-0.69l-0.86-2.43l-2.24-0.52L564.18,37.06L564.18,37.06M573.99,33.59l-1.89-0.35l-1.72,1.74l0.86,1.56l0.52,2.43l2.24-1.73l0.52-1.91L573.99,33.59L573.99,33.59M584.49,51.98l-0.52,2.43l-3.96,3.47l-8.44,1.91l-6.89,11.45l-1.21,3.3l6.89,1.74l1.03-4.16l2.07-6.42l5.34-2.78l4.48-3.47l3.27-1.39h1.72v-4.68L584.49,51.98L584.49,51.98M562.28,77.31l4.65,0.52l1.55,5.38l3.96,4.16l-1.38,2.78h-2.41l-2.24-2.6l-4.99-0.17l-2.07-2.78v-1.91l3.1-0.87L562.28,77.31L562.28,77.31M634.95,18.15l-2.24-1.39h-2.58l-0.52,1.56l-2.75,1.56l-2.07,0.69l-0.34,2.08l4.82,0.35L634.95,18.15L634.95,18.15M640.28,18.67l-1.21,2.6l-2.41-0.17l-3.79,2.78l-1.03,3.47h2.41l1.38-2.26l3.27,2.43l3.1-1.39l2.24-1.91l-0.86-2.95l-1.21-2.08L640.28,18.67L640.28,18.67M645.28,20.58l1.21,4.86l1.89,4.51l2.07-3.64l3.96-0.87v-2.6l-2.58-1.91L645.28,20.58L645.28,20.58M739.76,12.8l2.69,2.26l1.91-0.79l0.56-3.17L741,8.39l-2.58,1.7l-6.28,0.57v2.83l-6.62,0.11v4.63l7.74,5.76l2.02-1.47l-0.45-4.07l4.94-1.24l-1.01-1.92l-1.79-1.81L739.76,12.8L739.76,12.8M746.94,10.09l1.79,3.39l6.96-0.79l1.91-2.49l-0.45-2.15l-1.91-0.79l-1.79,1.36l-5.16,1.13L746.94,10.09L746.94,10.09M746.49,23.31l-3.48-0.9L741,24.56l-0.9,2.94l4.71-0.45l3.59-1.81L746.49,23.31L746.49,23.31M836.68,3.76l-2.92-0.9L830.4,4.1l-1.68,2.49l2.13,2.83l5.61-2.49l1.12-1.24L836.68,3.76L836.68,3.76M817.97,72.93l1.76,6.08l3.52,1.01l3.52-5.57l-2.01-3.8l0.75-3.29h5.28l-1.26,2.53l0.5,9.12l-7.54,18.74l0.75,4.05l-0.25,6.84l14.07,20.51l2.76,0.76l0.25-16.71l2.76-2.53l-3.02-6.58l2.51-2.79l-5.53-7.34l-3.02,0.25l-1-12.15l7.79-2.03l0.5-3.55l4.02-1.01l2.26,2.03l2.76-11.14l4.77-8.1l3.77-2.03l3.27,0.25v-3.8l-5.28-1.01l-7.29-6.08l3.52-4.05l-3.02-6.84l2.51-2.53l3.02,4.05l7.54,2.79l8.29,0.76l1.01-3.54l-4.27-4.3l4.77-6.58l-10.81-3.8l-2.76,5.57l-3.52-4.56l-19.85-6.84l-18.85,3.29l-2.76,1.52v1.52l4.02,2.03l-0.5,4.81l-7.29-3.04l-16.08,6.33l-2.76-5.82h-11.06l-5.03,5.32l-17.84-4.05l-16.33,3.29l-2.01,5.06l2.51,0.76l-0.25,3.8l-15.83,1.77l1.01,5.06l-14.58-2.53l3.52-6.58l-14.83-0.76l1.26,6.84l-4.77,2.28l-4.02-3.8l-16.33,2.79l-6.28,5.82l-0.25,3.54l-4.02,0.25l-0.5-4.05l12.82-11.14v-7.6l-8.29-2.28l-10.81,3.54l-4.52-4.56h-2.01l-2.51,5.06l2.01,2.28l-14.33,7.85l-12.31,9.37l-7.54,10.38v4.3l8.04,3.29l-4.02,3.04l-8.54-3.04l-3.52,3.04l-5.28-6.08l-1.01,2.28l5.78,18.23l1.51,0.51l4.02-2.03l2.01,1.52v3.29l-3.77-1.52l-2.26,1.77l1.51,3.29l-1.26,8.61l-7.79,0.76l-0.5-2.79l4.52-2.79l1.01-7.6l-5.03-6.58l-1.76-11.39l-8.04-1.27l-0.75,4.05l1.51,2.03l-3.27,2.79l1.26,7.6l4.77,2.03l1.01,5.57l-4.78-3.04l-12.31-2.28l-1.51,4.05l-9.8,3.54l-1.51-2.53l-12.82,7.09l-0.25,4.81l-5.03,0.76l1.51-3.54v-3.54l-5.03-1.77l-3.27,1.27l2.76,5.32l2.01,3.54v2.79l-3.77-0.76l-0.75-0.76l-3.77,4.05l2.01,3.54l-8.54-0.25l2.76,3.55l-0.75,1.52h-4.52l-3.27-2.28l-0.75-6.33l-5.28-2.03v-2.53l11.06,2.28l6.03,0.51l2.51-3.8l-2.26-4.05l-16.08-6.33l-5.55,1.38l-1.9,1.63l0.59,3.75l2.36,0.41l-0.55,5.9l7.28,17.1l-5.26,8.34l-0.36,1.88l2.67,1.88l-2.41,1.59l-1.6,0.03l0.3,7.35l2.21,3.13l0.03,3.04l2.83,0.26l4.33,1.65l4.58,6.3l0.05,1.66l-1.49,2.55l3.42-0.19l3.33,0.96l4.5,6.37l11.08,1.01l-0.48,7.58l-3.82,3.27l0.79,1.28l-3.77,4.05l-1,3.8l2.26,3.29l7.29,2.53l3.02-1.77l19.35,7.34l0.75-2.03l-4.02-3.8v-4.81l-2.51-0.76l0.5-4.05l4.02-4.81l-7.21-5.4l0.5-7.51l7.71-5.07l9.05,0.51l1.51,2.79l9.3,0.51l6.79-3.8l-3.52-3.8l0.75-7.09l17.59-8.61l13.53,6.1l4.52-4.05l13.32,12.66l10.05-1.01l3.52,3.54l9.55,1.01l6.28-8.61l8.04,3.55l4.27,0.76l4.27-3.8l-3.77-2.53l3.27-5.06l9.3,3.04l2.01,4.05l4.02,0.25l2.51-1.77l6.79-0.25l0.75,1.77l7.79,0.51l5.28-5.57l10.81,1.27l3.27-1.27l1-6.08l-3.27-7.34l3.27-2.79h10.3l9.8,11.65l12.56,7.09h3.77l0.5-3.04l4.52-2.79l0.5,16.46l-4.02,0.25v4.05l2.26,2.79l-0.42,3.62l1.67,0.69l1.01-2.53l1.51,0.51l1,1.01l4.52-1.01l4.52-13.17l0.5-16.46l-5.78-13.17l-7.29-8.86l-3.52,0.51v2.79l-8.54-3.29l3.27-7.09l2.76-18.74l11.56-3.54l5.53-3.54h6.03L805.86,96l1.51,2.53l5.28-5.57l3.02,0.25l-0.5-3.29l-4.78-1.01l3.27-11.9L817.97,72.93L817.97,72.93z", "name": "Russian Federation" }, "us": { "path": "M69.17,53.35l3.46,6.47l2.22-0.5v-2.24L69.17,53.35L69.17,53.35M49.66,110.26l-0.17,3.01l2.16-0.5v-1.34L49.66,110.26L49.66,110.26M46.34,111.6l-4.32,2.18l0.67,2.34l1.66-1.34l3.32-1.51L46.34,111.6L46.34,111.6M28.39,114.44l-2.99-0.67l-0.5,1.34l0.33,2.51L28.39,114.44L28.39,114.44M22.07,114.28l-2.83-1.17l-1,1.84l1.83,1.84L22.07,114.28L22.07,114.28M12.27,111.6l-1.33-1.84l-1.33,0.5v2.51l1.5,1L12.27,111.6L12.27,111.6M1.47,99.71l1.66,1.17l-0.5,1.34H1.47V99.71L1.47,99.71M10,248.7l-0.14,2.33l2.04,1.37l1.22-1.09L10,248.7L10,248.7M15.29,252.13l-1.9,1.37l1.63,2.05l1.9-1.64L15.29,252.13L15.29,252.13M19.1,255.41l-1.63,2.19l0.54,1.37l2.31-1.09L19.1,255.41L19.1,255.41M21.81,259.65l-0.95,5.47l0.95,2.05l3.12-0.96l1.63-2.74l-3.4-3.15L21.81,259.65L21.81,259.65M271.05,281.06l-2.64-0.89l-2.12,1.33l1.06,1.24l3.61,0.53L271.05,281.06L271.05,281.06M93.11,44.89l-8.39,1.99l1.73,9.45l9.13,2.49l0.49,1.99L82.5,65.04l-7.65,12.68l2.71,13.43L82,94.13l3.46-3.23l0.99,1.99l-4.2,4.97l-16.29,7.46l-10.37,2.49l-0.25,3.73l23.94-6.96l9.87-2.74l9.13-11.19l10.12-6.71l-5.18,8.7l5.68,0.75l9.63-4.23l1.73,6.96l6.66,1.49l6.91,6.71l0.49,4.97l-0.99,1.24l1.23,4.72h1.73l0.25-7.96h1.97l0.49,19.64l4.94-4.23l-3.46-20.39h-5.18l-5.68-7.21l27.89-47.25l-27.64-21.63l-30.85,5.97l-1.23,9.45l6.66,3.98l-2.47,6.47L93.11,44.89L93.11,44.89M148.76,158.34l-1,4.02l-3.49-2.26h-1.74l-1,4.27l-12.21,27.36l3.24,23.84l3.99,2.01l0.75,6.53h8.22l7.97,6.02l15.69,1.51l1.74,8.03l2.49,1.76l3.49-3.51l2.74,1.25l2.49,11.54l4.23,2.76l3.49-6.53l10.71-7.78l6.97,3.26l5.98,0.5l0.25-3.76l12.45,0.25l2.49,2.76l0.5,6.27l-1.49,3.51l1.74,6.02h3.74l3.74-5.77l-1.49-2.76l-1.49-6.02l2.24-6.78l10.21-8.78l7.72-2.26l-1-7.28l10.71-11.55l10.71-1.76L272.8,199l10.46-6.02v-8.03l-1-0.5l-3.74,1.25l-0.5,4.92l-12.43,0.15l-9.74,6.47l-15.29,5l-2.44-2.99l6.94-10.5l-3.43-3.27l-2.33-4.44l-4.83-3.88l-5.25-0.44l-9.92-6.77L148.76,158.34L148.76,158.34z", "name": "United States of America" }, "mu": { "path": "M613.01,398.99l-1.52,1.99l0.3,2.15l3.2-2.61L613.01,398.99L613.01,398.99z", "name": "Mauritius" }, "re": { "path": "M607.38,402.37l-2.28,0.15l-0.15,1.99l1.52,0.31l2.28-1.07L607.38,402.37L607.38,402.37z", "name": "Reunion" }, "mg": { "path": "M592.3,372.92l-2.13,5.06l-3.65,6.44l-6.39,0.46l-2.74,3.22l0.46,9.82l-3.96,4.6l0.46,7.82l3.35,3.83l3.96-0.46l3.96-2.92l-0.91-4.6l9.13-15.8l-1.83-1.99l1.83-3.83l1.98,0.61l0.61-1.53l-1.83-7.82l-1.07-3.22L592.3,372.92L592.3,372.92z", "name": "Madagascar" }, "km": { "path": "M577.69,371.23l0.46,1.53l1.98,0.31l0.76-1.99L577.69,371.23L577.69,371.23M580.58,374.3l0.76,1.69h1.22l0.61-2.15L580.58,374.3L580.58,374.3z", "name": "Comoros" }, "sc": { "path": "M602.35,358.34l-0.61,1.23l1.67,1.38l1.22-1.38L602.35,358.34L602.35,358.34M610.88,349.14l-1.83,1.23l1.37,2.15h1.83L610.88,349.14L610.88,349.14M611.64,354.51l-1.22,1.38l0.91,1.38l1.67,0.31l0.15-2.92L611.64,354.51L611.64,354.51z", "name": "Seychelles" }, "mv": { "path": "M656.4,320.76l0.3,2.61l1.67,0.61l0.3-2.3L656.4,320.76L656.4,320.76M658.53,326.28l-0.15,3.22l1.22,0.61l1.07-2.15L658.53,326.28L658.53,326.28M658.84,332.57l-1.07,1.07l1.22,1.07l1.52-1.07L658.84,332.57L658.84,332.57z", "name": "Maldives" }, "pt": { "path": "M372.64,217.02l-1.36,1.37l2.44,1.37l0.27-1.91L372.64,217.02L372.64,217.02M379.97,216.2l-1.63,1.09l1.36,1.09l2.17-0.55L379.97,216.2L379.97,216.2M381.05,220.03l-0.81,2.19l1.08,1.37l1.36-1.09L381.05,220.03L381.05,220.03M387.56,224.4l-0.54,1.37l0.81,0.82l2.17-1.37L387.56,224.4L387.56,224.4M408.18,236.42l-1.08,1.37l1.08,1.37l1.63-0.82L408.18,236.42L408.18,236.42M430.93,211.24l-0.62,8.65l-1.77,1.6l0.18,0.98l1.24,2.05l-0.8,2.5l1.33,0.45l3.1-0.36l-0.18-2.5l2.03-11.59l-0.44-1.6L430.93,211.24L430.93,211.24z", "name": "Portugal" }, "es": { "path": "M415.62,253.73l-1.75,1.01l0.81,0.82L415.62,253.73L415.62,253.73M409.54,253.92l-2.17,0.55l1.08,1.64h1.63L409.54,253.92L409.54,253.92M404.38,252.28l-1.36,1.37l1.9,1.64l1.08-2.46L404.38,252.28L404.38,252.28M448.36,205h-12.74l-2.57-1.16l-1.24,0.09l-1.5,3.12l0.53,3.21l4.87,0.45l0.62,2.05l-2.12,11.95l0.09,2.14l3.45,1.87l3.98,0.27l7.96-1.96l3.89-4.9l0.09-4.99l6.9-6.24l0.35-2.76l-6.28-0.09L448.36,205L448.36,205M461.1,217.21l-1.59,0.54l0.35,1.43h2.3l0.97-1.07L461.1,217.21L461.1,217.21z", "name": "Spain" }, "cv": { "path": "M387.56,290.54l-1.9,1.09l1.36,1.09l1.63-0.82L387.56,290.54L387.56,290.54M392.23,292.74l-1.24,1.1l0.88,1.63l2.12-0.95L392.23,292.74L392.23,292.74M389.52,295.83l-1.59,0.95l1.71,2.29l1.35-0.71L389.52,295.83L389.52,295.83z", "name": "Cape Verde" }, "pf": { "path": "M27.25,402.68l-1.9-0.14l-0.14,1.78l1.49,0.96l1.77-1.09L27.25,402.68L27.25,402.68M33.77,404.6l-2.72,1.78l2.04,2.46l1.77-0.41l0.95-1.23L33.77,404.6L33.77,404.6z", "name": "French Polynesia" }, "kn": { "path": "M276.6,283.37l-1.5,0.62l0.53,1.33l1.76-1.15l-0.35-0.36L276.6,283.37L276.6,283.37z", "name": "Saint Kitts and Nevis" }, "ag": { "path": "M279.07,284.88l-0.88,1.87l1.06,1.42l1.32-1.15L279.07,284.88L279.07,284.88z", "name": "Antigua and Barbuda" }, "dm": { "path": "M282.07,290.03l-1.06,0.98l0.79,1.6l1.5-0.44L282.07,290.03L282.07,290.03z", "name": "Dominica" }, "lc": { "path": "M281.98,294.03l-0.71,1.51l1.15,1.24l1.5-0.8L281.98,294.03L281.98,294.03z", "name": "Saint Lucia" }, "bb": { "path": "M282.07,297.85l-1.23,0.89l0.97,1.78l1.59-0.89L282.07,297.85L282.07,297.85z", "name": "Barbados" }, "gd": { "path": "M280.57,301.31l-1.15,1.15l0.44,0.71h1.41l0.44-1.16L280.57,301.31L280.57,301.31z", "name": "Grenada" }, "tt": { "path": "M282.24,304.78l-1.06,0.98l-1.15,0.18v1.42l2.12,1.95l0.88-1.42l0.53-1.6l-0.18-1.33L282.24,304.78L282.24,304.78z", "name": "Trinidad and Tobago" }, "do": { "path": "M263.11,280.44l-5.29-3.46l-2.5-0.85l-0.84,6l0.88,1.69l1.15-1.33l3.35-0.89l2.91,0.62L263.11,280.44L263.11,280.44z", "name": "Dominican Republic" }, "ht": { "path": "M250.86,275.38l3.44,0.36l-0.41,4.22l-0.34,2.22l-4.01-0.22l-0.71,1.07l-1.23-0.09l-0.44-2.31l4.23-0.35l-0.26-2.4l-1.94-0.8L250.86,275.38L250.86,275.38z", "name": "Haiti" }, "fk": { "path": "M307.95,508.18l-2.63-0.29l-2.62,1.76l1.9,2.06L307.95,508.18L307.95,508.18M310.57,506.86l-0.87,2.79l-2.48,2.2l0.15,0.73l4.23-1.62l1.75-2.2L310.57,506.86L310.57,506.86z", "name": "Falkland Islands" }, "is": { "path": "M406.36,117.31l-1.96-1.11l-2.64,1.67l-2.27,2.1l0.06,1.17l2.94,0.37l-0.18,2.1l-1.04,1.05l0.25,0.68l2.94,0.19v3.4l4.23,0.74l2.51,1.42l2.82,0.12l4.84-2.41l3.74-4.94l0.06-3.34l-2.27-1.92l-1.9-1.61l-0.86,0.62l-1.29,1.67l-1.47-0.19l-1.47-1.61l-1.9,0.18l-2.76,2.29l-1.66,1.79l-0.92-0.8l-0.06-1.98l0.92-0.62L406.36,117.31L406.36,117.31z", "name": "Iceland" }, "no": { "path": "M488.26,53.96l-1.65-1.66l-3.66,1.78h-6.72L475.17,58l3.77,3.33l1.65-0.24l2.36-4.04l2,1.43l-1.42,2.85l-0.71,4.16l1.65,2.61l3.54-5.94l4.6-5.59l-1.77-1.54L488.26,53.96L488.26,53.96M490.26,46.83l-2.95,2.73l1.77,2.73h3.18l1.3,1.78l3.89,2.02l4.48-2.61l3.07-2.61l-1.06-2.14l-3.07-1.78l-2.24,2.02l-1.53-1.9l-1.18,0.12l-1.53,3.33l-2.24-2.26l-0.24-1.54L490.26,46.83L490.26,46.83M496.98,59.07l-2.36,2.14l-2,1.54l0.94,1.66l1.89,0.59l3.07-1.43l1.42-1.78l-1.3-2.14L496.98,59.07L496.98,59.07M515.46,102.14l2.02-1.48L517.3,99l-1.28-0.74l0.18-2.03h1.1v-1.11l-4.77-1.29l-7.15,0.74l-0.73,3.14L503,97.16l-1.1-1.85l-3.49,0.18L498.04,99l-1.65,0.74l-0.92-1.85l-7.34,5.91l1.47,1.66l-2.75,1.29l-6.24,12.38l-2.2,1.48l0.18,1.11l2.2,1.11l-0.55,2.4l-3.67-0.19l-1.1-1.29l-2.38,2.77l-1.47,1.11l-0.37,2.59l-1.28,0.74l-3.3,0.74l-1.65,5.18l1.1,8.5l1.28,3.88l1.47,1.48l3.3-0.18l4.77-4.62l1.83-3.14l0.55,4.62l3.12-5.54l0.18-15.53l2.54-1.6l0.76-8.57l7.7-11.09l3.67-1.29l1.65-2.03l5.5,1.29l2.75,1.66l0.92-4.62l4.59-2.77L515.46,102.14L515.46,102.14z", "name": "Norway" }, "lk": { "path": "M680.54,308.05l0.25,2.72l0.25,1.98l-1.47,0.25l0.74,4.45l2.21,1.24l3.43-1.98l-0.98-4.69l0.25-1.73l-3.19-2.96L680.54,308.05L680.54,308.05z", "name": "Sri Lanka" }, "cu": { "path": "M220.85,266.92v1.27l5.32,0.1l2.51-1.46l0.39,1.07l5.22,1.27l4.64,4.19l-1.06,1.46l0.19,1.66l3.87,0.97l3.87-1.75l1.74-1.75l-2.51-1.27l-12.95-7.6l-4.54-0.49L220.85,266.92L220.85,266.92z", "name": "Cuba" }, "bs": { "path": "M239.61,259.13l-1.26-0.39l-0.1,2.43l1.55,1.56l1.06-1.56L239.61,259.13L239.61,259.13M242.12,262.93l-1.74,0.97l1.64,2.34l0.87-1.17L242.12,262.93L242.12,262.93M247.73,264.68l-1.84-0.1l0.19,1.17l1.35,1.95l1.16-1.27L247.73,264.68L247.73,264.68M246.86,262.35l-3-1.27l-0.58-3.02l1.16-0.49l1.16,2.34l1.16,0.88L246.86,262.35L246.86,262.35M243.96,256.21l-1.55-0.39l-0.29-1.95l-1.64-0.58l1.06-1.07l1.93,0.68l1.45,0.88L243.96,256.21L243.96,256.21z", "name": "Bahamas" }, "jm": { "path": "M238.93,279.59l-3.48,0.88v0.97l2.03,1.17h2.13l1.35-1.56L238.93,279.59L238.93,279.59z", "name": "Jamaica" }, "ec": { "path": "M230.2,335.85l-4.73,2.94l-0.34,4.36l-0.95,1.43l2.98,2.86l-1.29,1.41l0.3,3.6l5.33,1.27l8.07-9.55l-0.02-3.33l-3.87-0.25L230.2,335.85L230.2,335.85z", "name": "Ecuador" }, "ca": { "path": "M203.73,35.89l0.22,4.02l-7.98,8.27l2,6.7l5.76-1.56l3.33-4.92l8.42-3.13l6.87-0.45l-5.32-5.81l-2.66,2.01l-2-0.67l-1.11-2.46l-2.44-2.46L203.73,35.89L203.73,35.89M214.15,24.05l-1.77,3.13l8.65,3.13l3.1-4.69l1.33,3.13h2.22l4.21-4.69l-5.1-1.34l-2-1.56l-2.66,2.68L214.15,24.05L214.15,24.05M229.23,30.31l-6.87,2.9v2.23l8.87,3.35l-2,2.23l1.33,2.9l5.54-2.46h4.66l2.22,3.57l3.77-3.8l-0.89-3.58l-3.1,1.12l-0.44-4.47l1.55-2.68h-1.55l-2.44,1.56l-1.11,0.89l0.67,3.13l-1.77,1.34l-2.66-0.22l-0.67-4.02L229.23,30.31L229.23,30.31M238.32,23.38l-0.67,2.23l4.21,2.01l3.1-1.79l-0.22-1.34L238.32,23.38L238.32,23.38M241.64,19.58l-3.1,1.12l0.22,1.56l6.87-0.45l-0.22-1.56L241.64,19.58L241.64,19.58M256.5,23.38l-0.44,1.56l-1.11,1.56v2.23l4.21-0.67l4.43,3.8h1.55v-3.8l-4.43-4.92L256.5,23.38L256.5,23.38M267.81,27.85l1.77,2.01l-1.55,2.68l1.11,2.9l4.88-2.68v-2.01l-2.88-3.35L267.81,27.85L267.81,27.85M274.24,22.71l0.22,3.57h5.99l1.55,1.34l-0.22,1.56l-5.32,0.67l3.77,5.14l5.1,0.89l7.09-3.13l-10.2-15.42l-3.1,2.01l0.22,2.68l-3.55-1.34L274.24,22.71L274.24,22.71M222.58,47.96l-8.42,2.23l-4.88,4.25l0.44,4.69l8.87,2.68l-2,4.47l-6.43-4.02l-1.77,3.35l4.21,2.9l-0.22,4.69l6.43,1.79l7.76-0.45l1.33-2.46l5.76,6.48l3.99-1.34l0.67-4.47l2.88,2.01l0.44-4.47l-3.55-2.23l0.22-14.07l-3.1-2.46L231.89,56L222.58,47.96L222.58,47.96M249.63,57.79l-2.88-1.34l-1.55,2.01l3.1,4.92l0.22,4.69l6.65-4.02v-5.81l2.44-2.46l-2.44-1.79h-3.99L249.63,57.79L249.63,57.79M263.82,55.78l-4.66,3.8l1.11,4.69h2.88l1.33-2.46l2,2.01l2-0.22l5.32-4.47L263.82,55.78L263.82,55.78M263.37,48.4l-1.11,2.23l4.88,1.79l1.33-2.01L263.37,48.4L263.37,48.4M260.49,39.91l-4.88,0.67l-2.88,2.68l5.32,0.22l-1.55,4.02l1.11,1.79l1.55-0.22l3.77-6.03L260.49,39.91L260.49,39.91M268.92,38.35l-2.66,0.89l0.44,3.57l4.43,2.9l0.22,2.23l-1.33,1.34l0.67,4.47l17.07,5.58l4.66,1.56l4.66-4.02l-5.54-4.47l-5.1,1.34l-7.09-0.67l-2.66-2.68l-0.67-7.37l-4.43-2.23L268.92,38.35L268.92,38.35M282.88,61.59L278,61.14l-5.76,2.23l-3.1,4.24l0.89,11.62l9.53,0.45l9.09,4.47l6.43,7.37l4.88-0.22l-1.33,6.92l-4.43,7.37l-4.88,2.23l-3.55-0.67l-1.77-1.56l-2.66,3.57l1.11,3.57l3.77,0.22l4.66-2.23l3.99,10.28l9.98,6.48l6.87-8.71l-5.76-9.38l3.33-3.8l4.66,7.82l8.42-7.37l-1.55-3.35l-5.76,1.79l-3.99-10.95l3.77-6.25l-7.54-8.04l-4.21,2.9l-3.99-8.71l-8.42,1.12l-2.22-10.5l-6.87,4.69l-0.67,5.81h-3.77l0.44-5.14L282.88,61.59L282.88,61.59M292.86,65.61l-1.77,1.79l1.55,2.46l7.32,0.89l-4.66-4.92L292.86,65.61L292.86,65.61M285.77,40.36v2.01l-4.88,1.12l1.33,2.23l5.54,2.23l6.21,0.67l4.43,3.13l4.43-2.46l-3.1-3.13h3.99l2.44-2.68l5.99-0.89v-1.34l-3.33-2.23l0.44-2.46l9.31,1.56l13.75-5.36l-5.1-1.56l1.33-1.79h10.64l1.77-1.79l-21.51-7.6l-5.1-1.79l-5.54,4.02l-6.21-5.14l-3.33-0.22l-0.67,4.25l-4.21-3.8l-4.88,1.56l0.89,2.46l7.32,1.56l-0.44,3.57l3.99,2.46l9.76-2.46l0.22,3.35l-7.98,3.8l-4.88-3.8l-4.43,0.45l4.43,6.26l-2.22,1.12l-3.33-2.9l-2.44,1.56l2.22,4.24h3.77l-0.89,4.02l-3.1-0.45l-3.99-4.25L285.77,40.36L285.77,40.36M266.01,101.85l-4.23,5.32l-0.26,5.86l3.7-2.13h4.49l3.17,2.93l2.91-2.4L266.01,101.85L266.01,101.85M317.52,171.05l-10.57,10.12l1.06,2.4l12.94,4.79l1.85-3.19l-1.06-5.32l-4.23,0.53l-2.38-2.66l3.96-3.99L317.52,171.05L317.52,171.05M158.22,48.66l1.99,3.01l1,4.02l4.98,1.25l3.49-3.76l2.99,1.51l8.47,0.75l5.98-2.51l1,8.28h3.49V57.7l3.49,0.25l8.72,10.29l5.73,3.51l-2.99,4.77l1.25,1.25L219,80.03l0.25,5.02l2.99,0.5l0.75-7.53l4.73-1.25l3.49,5.27l7.47,3.51l3.74,0.75l2.49-3.01l0.25-4.77l4.48-2.76l1.49,4.02l-3.99,7.03l0.5,3.51l2.24-3.51l4.48-4.02l0.25-5.27l-2.49-4.02l0.75-3.26l5.98-3.01l2.74,2.01l0.5,17.57l4.23-3.76l2.49,1.51l-3.49,6.02l4.48,1l6.48-10.04l5.48,5.77l-2.24,10.29l-5.48,3.01l-5.23-2.51l-9.46,2.01l1,3.26l-2.49,4.02l-7.72,1.76l-8.72,6.78l-7.72,10.29l-1,3.26l5.23,2.01l1.99,5.02l7.22,7.28l11.46,5.02l-2.49,11.54l-0.25,3.26l2.99,2.01l3.99-5.27l0.5-10.04l6.23-0.25l2.99-5.77l0.5-8.78l7.97-15.56l9.96,3.51l5.23,7.28l-2.24,7.28l3.99,2.26l9.71-6.53l2.74,17.82l8.97,10.79l0.25,5.52l-9.96,2.51l-4.73,5.02l-9.96-2.26l-4.98-0.25l-8.72,6.78l5.23-1.25l6.48-1.25l1.25,1.51l-1.74,5.52l0.25,5.02l2.99,2.01l2.99-0.75l1.5-2.26h1.99l-3.24,6.02l-6.23,0.25l-2.74,4.02h-3.49l-1-3.01l4.98-5.02l-5.98,2.01l-0.27-8.53l-1.72-1l-5.23,2.26l-0.5,4.27h-11.96l-10.21,7.03l-13.7,4.52l-1.49-2.01l6.9-10.3l-3.92-3.77l-2.49-4.78l-5.07-3.87l-5.44-0.45l-9.75-6.83l-70.71-11.62l-1.17-4.79l-6.48-6.02v-5.02l1-4.52l-0.5-2.51l-2.49-2.51l-0.5-4.02l6.48-4.52l-3.99-21.58l-5.48-0.25l-4.98-6.53L158.22,48.66L158.22,48.66M133.83,128.41l-1.7,3.26l0.59,2.31l1.11,0.69l-0.26,0.94l-1.19,0.34l0.34,3.43l1.28,1.29l1.02-1.11l-1.28-3.34l0.76-2.66l1.87-2.49l-1.36-2.31L133.83,128.41L133.83,128.41M139.45,147.95l-1.53,0.6l2.81,3.26l0.68,3.86l2.81,3l2.38-0.43v-3.94l-2.89-1.8L139.45,147.95L139.45,147.95z", "name": "Canada" }, "gt": { "path": "M194.88,291.52l5.93,4.34l5.98-7.43l-1.02-1.54l-2.04-0.07v-4.35l-1.53-0.93l-4.63,1.38l1.77,4.08L194.88,291.52L194.88,291.52z", "name": "Guatemala" }, "hn": { "path": "M207.55,288.78l9.24-0.35l2.74,3.26l-1.71-0.39l-3.29,0.14l-4.3,4.04l-1.84,4.09l-1.21-0.64l-0.01-4.48l-2.66-1.78L207.55,288.78L207.55,288.78z", "name": "Honduras" }, "sv": { "path": "M201.65,296.27l4.7,2.34l-0.07-3.71l-2.41-1.47L201.65,296.27L201.65,296.27z", "name": "El Salvador" }, "ni": { "path": "M217.74,292.11l2.19,0.44l0.07,4.49l-2.55,7.28l-6.87-0.68l-1.53-3.51l2.04-4.26l3.87-3.6L217.74,292.11L217.74,292.11z", "name": "Nicaragua" }, "cr": { "path": "M217.38,304.98l1.39,2.72l1.13,1.5l-1.52,4.51l-2.9-2.04l-4.74-4.34v-2.87L217.38,304.98L217.38,304.98z", "name": "Costa Rica" }, "pa": { "path": "M220.59,309.61l-1.46,4.56l4.82,1.25l2.99,0.59l0.51-3.53l3.21-1.62l2.85,1.47l1.12,1.79l1.36-0.16l1.07-3.25l-3.56-1.47l-2.7-1.47l-2.7,1.84l-3.21,1.62l-3.28-1.32L220.59,309.61L220.59,309.61z", "name": "Panama" }, "co": { "path": "M253.73,299.78l-2.06-0.21l-13.62,11.23l-1.44,3.95l-1.86,0.21l0.83,8.73l-4.75,11.65l5.16,4.37l6.61,0.42l4.54,6.66l6.6,0.21l-0.21,4.99H256l2.68-9.15l-2.48-3.12l0.62-5.82l5.16-0.42l-0.62-13.52l-11.56-3.74l-2.68-7.28L253.73,299.78L253.73,299.78z", "name": "Colombia" }, "ve": { "path": "M250.46,305.92l0.44,2.59l3.25,1.03l0.74-4.77l3.43-3.55l3.43,4.02l7.89,2.15l6.68-1.4l4.55,5.61l3.43,2.15l-3.76,5.73l1.26,4.34l-2.15,2.66l-2.23,1.87l-4.83-2.43l-1.11,1.12v3.46l3.53,1.68l-2.6,2.81l-2.6,2.81l-3.43-0.28l-3.45-3.79l-0.73-14.26l-11.78-4.02l-2.14-6.27L250.46,305.92L250.46,305.92z", "name": "Venezuela" }, "gy": { "path": "M285.05,314.13l7.22,6.54l-2.87,3.32l-0.23,1.97l3.77,3.89l-0.09,3.74l-6.56,2.5l-3.93-5.31l0.84-6.38l-1.68-4.75L285.05,314.13L285.05,314.13z", "name": "Guyana" }, "sr": { "path": "M293.13,321.14l2.04,1.87l3.16-1.96l2.88,0.09l-0.37,1.12l-1.21,2.52l-0.19,6.27l-5.75,2.34l0.28-4.02l-3.71-3.46l0.19-1.78L293.13,321.14L293.13,321.14z", "name": "Suriname" }, "gf": { "path": "M302.13,321.8l5.85,3.65l-3.06,6.08l-1.11,1.4l-3.25-1.87l0.09-6.55L302.13,321.8L302.13,321.8z", "name": "French Guiana" }, "pe": { "path": "M225.03,349.52l-1.94,1.96l0.13,3.13l16.94,30.88l17.59,11.34l2.72-4.56l0.65-10.03l-1.42-6.25l-4.79-8.08l-2.85,0.91l-1.29,1.43l-5.69-6.52l1.42-7.69l6.6-4.3l-0.52-4.04l-6.72-0.26l-3.49-5.86l-1.94-0.65l0.13,3.52l-8.66,10.29l-6.47-1.56L225.03,349.52L225.03,349.52z", "name": "Peru" }, "bo": { "path": "M258.71,372.79l8.23-3.59l2.72,0.26l1.81,7.56l12.54,4.17l2.07,6.39l5.17,0.65l2.2,5.47l-1.55,4.95l-8.41,0.65l-3.1,7.95l-6.6-0.13l-2.07-0.39l-3.81,3.7l-1.88-0.18l-6.47-14.99l1.79-2.68l0.63-10.6l-1.6-6.31L258.71,372.79L258.71,372.79z", "name": "Bolivia" }, "py": { "path": "M291.76,399.51l2.2,2.4l-0.26,5.08l6.34-0.39l4.79,6.13l-0.39,5.47l-3.1,4.69l-6.34,0.26l-0.26-2.61l1.81-4.3l-6.21-3.91h-5.17l-3.88-4.17l2.82-8.06L291.76,399.51L291.76,399.51z", "name": "Paraguay" }, "uy": { "path": "M300.36,431.93l-2.05,2.19l0.85,11.78l6.44,1.87l8.19-8.21L300.36,431.93L300.36,431.93z", "name": "Uruguay" }, "ar": { "path": "M305.47,418.2l1.94,1.82l-7.37,10.95l-2.59,2.87l0.9,12.51l5.69,6.91l-4.78,8.34l-3.62,1.56h-4.14l1.16,6.51l-6.47,2.22l1.55,5.47l-3.88,12.38l4.79,3.91l-2.59,6.38l-4.4,6.91l2.33,4.82l-5.69,0.91l-4.66-5.73l-0.78-17.85l-7.24-30.32l2.19-10.6l-4.66-13.55l3.1-17.59l2.85-3.39l-0.7-2.57l3.66-3.34l8.16,0.56l4.56,4.87l5.27,0.09l5.4,3.3l-1.59,3.72l0.38,3.76l7.65-0.36L305.47,418.2L305.47,418.2M288.92,518.79l0.26,5.73l4.4-0.39l3.75-2.48l-6.34-1.3L288.92,518.79L288.92,518.79z", "name": "Argentina" }, "cl": { "path": "M285.04,514.1l-4.27,9.38l7.37,0.78l0.13-6.25L285.04,514.1L285.04,514.1M283.59,512.63l-3.21,3.55l-0.39,4.17l-6.21-3.52l-6.6-9.51l-1.94-3.39l2.72-3.52l-0.26-4.43l-3.1-1.3l-2.46-1.82l0.52-2.48l3.23-0.91l0.65-14.33l-5.04-2.87l-3.29-74.59l0.85-1.48l6.44,14.85l2.06,0.04l0.67,2.37l-2.74,3.32l-3.15,17.87l4.48,13.76l-2.07,10.42l7.3,30.64l0.77,17.92l5.23,6.05L283.59,512.63L283.59,512.63M262.28,475.14l-1.29,1.95l0.65,3.39l1.29,0.13l0.65-4.3L262.28,475.14L262.28,475.14z", "name": "Chile" }, "br": { "path": "M314.24,438.85l6.25-12.02l0.23-10.1l11.66-7.52h6.53l5.13-8.69l0.93-16.68l-2.1-4.46l12.36-11.28l0.47-12.45l-16.79-8.22l-20.28-6.34l-9.56-0.94l2.57-5.4l-0.7-8.22l-2.09-0.69l-3.09,6.14l-1.62,2.03l-4.16-1.84l-13.99,4.93l-4.66-5.87l0.75-6.13l-4.4,4.48l-4.86-2.62l-0.49,0.69l0.01,2.13l4.19,2.25l-6.29,6.63l-3.97-0.04l-4.02-4.09l-4.55,0.14l-0.56,4.86l2.61,3.17l-3.08,9.87l-3.6,0.28l-5.73,3.62l-1.4,7.11l4.97,5.32l0.91-1.03l3.49-0.94l2.98,5.02l8.53-3.66l3.31,0.19l2.28,8.07l12.17,3.86l2.1,6.44l5.18,0.62l2.47,6.15l-1.67,5.47l2.18,2.86l-0.32,4.26l5.84-0.55l5.35,6.76l-0.42,4.75l3.17,2.68l-7.6,11.51L314.24,438.85L314.24,438.85z", "name": "Brazil" }, "bz": { "path": "M204.56,282.4l-0.05,3.65h0.84l2.86-5.34h-1.94L204.56,282.4L204.56,282.4z", "name": "Belize" }, "mn": { "path": "M673.8,170.17l5.82-7.72l6.99,3.23l4.75,1.27l5.82-5.34l-3.95-2.91l2.6-3.67l7.76,2.74l2.69,4.41l4.86,0.13l2.54-1.89l5.23-0.21l1.14,1.94l8.69,0.44l5.5-5.61l7.61,0.8l-0.44,7.64l3.33,0.76l4.09-1.86l4.33,2.14l-0.1,1.08l-3.14,0.09l-3.27,6.86l-2.54,0.25l-9.88,12.91l-10.09,4.45l-6.31,0.49l-5.24-3.38l-6.7,3.58l-6.6-2.05l-1.87-4.79l-12.5-0.88l-6.4-10.85l-3.11-0.2L673.8,170.17L673.8,170.17z", "name": "Mongolia" }, "kp": { "path": "M778.28,194.27l1.84,0.77l0.56,6.44l3.65,0.21l3.44-4.03l-1.19-1.06l0.14-4.32l3.16-3.82l-1.61-2.9l1.05-1.2l0.58-3l-1.83-0.83l-1.56,0.79l-1.93,5.86l-3.12-0.27l-3.61,4.26L778.28,194.27L778.28,194.27z", "name": "North Korea" }, "kr": { "path": "M788.34,198.2l6.18,5.04l1.05,4.88l-0.21,2.62l-3.02,3.4l-2.6,0.14l-2.95-6.37l-1.12-3.04l1.19-0.92l-0.28-1.27l-1.47-0.66L788.34,198.2L788.34,198.2z", "name": "South Korea" }, "kz": { "path": "M576.69,188.62l4.1-1.75l4.58-0.16l0.32,7h-2.68l-2.05,3.34l2.68,4.45l3.95,2.23l0.36,2.55l1.45-0.48l1.34-1.59l2.21,0.48l1.11,2.23h2.84v-2.86l-1.74-5.09l-0.79-4.13l5.05-2.23l6.79,1.11l4.26,4.29l9.63-0.95l5.37,7.63l6.31,0.32l1.74-2.86l2.21-0.48l0.32-3.18l3.31-0.16l1.74,2.07l1.74-4.13l14.99,2.07l2.52-3.34l-4.26-5.25l5.68-12.4l4.58,0.32l3.16-7.63l-6.31-0.64l-3.63-3.5l-10,1.16l-12.88-12.45l-4.54,4.03l-13.77-6.25l-16.89,8.27l-0.47,5.88l3.95,4.61l-7.7,4.35l-9.99-0.22l-2.09-3.07l-7.83-0.43l-7.42,4.77l-0.16,6.52L576.69,188.62L576.69,188.62z", "name": "Kazakhstan" }, "tm": { "path": "M593.85,207.59l-0.62,2.63h-4.15v3.56l4.46,2.94l-1.38,4.03v1.86l1.85,0.31l2.46-3.25l5.54-1.24l11.84,4.49l0.15,3.25l6.61,0.62l7.38-7.75l-0.92-2.48l-4.92-1.08l-13.84-8.99l-0.62-3.25h-5.23l-2.31,4.34h-2.31L593.85,207.59L593.85,207.59z", "name": "Turkmenistan" }, "uz": { "path": "M628.92,219.06l3.08,0.16v-5.27l-2.92-1.7l4.92-6.2h2l2,2.33l5.23-2.01l-7.23-2.48l-0.28-1.5l-1.72,0.42l-1.69,2.94l-7.29-0.24l-5.35-7.57l-9.4,0.93l-4.48-4.44l-6.2-1.05l-4.5,1.83l2.61,8.68l0.03,2.92l1.9,0.04l2.33-4.44l6.2,0.08l0.92,3.41l13.29,8.82l5.14,1.18L628.92,219.06L628.92,219.06z", "name": "Uzbekistan" }, "tj": { "path": "M630.19,211.84l4.11-5.1h1.55l0.54,1.14l-1.9,1.38v1.14l1.25,0.9l6.01,0.36l1.96-0.84l0.89,0.18l0.6,1.92l3.57,0.36l1.79,3.78l-0.54,1.14l-0.71,0.06l-0.71-1.44l-1.55-0.12l-2.68,0.36l-0.18,2.52l-2.68-0.18l0.12-3.18l-1.96-1.92l-2.98,2.46l0.06,1.62l-2.62,0.9h-1.55l0.12-5.58L630.19,211.84L630.19,211.84z", "name": "Tajikistan" }, "kg": { "path": "M636.81,199.21l-0.31,2.53l0.25,1.56l8.7,2.92l-7.64,3.08l-0.87-0.72l-1.65,1.06l0.08,0.58l0.88,0.4l5.36,0.14l2.72-0.82l3.49-4.4l4.37,0.76l5.27-7.3l-14.1-1.92l-1.95,4.73l-2.46-2.64L636.81,199.21L636.81,199.21z", "name": "Kyrgyz Republic" }, "af": { "path": "M614.12,227.05l1.59,12.46l3.96,0.87l0.37,2.24l-2.84,2.37l5.29,4.27l10.28-3.7l0.82-4.38l6.47-4.04l2.48-9.36l1.85-1.99l-1.92-3.34l6.26-3.87l-0.8-1.12l-2.89,0.18l-0.26,2.66l-3.88-0.04l-0.07-3.55l-1.25-1.49l-2.1,1.91l0.06,1.75l-3.17,1.2l-5.85-0.37l-7.6,7.96L614.12,227.05L614.12,227.05z", "name": "Afghanistan" }, "pk": { "path": "M623.13,249.84l2.6,3.86l-0.25,1.99l-3.46,1.37l-0.25,3.24h3.96l1.36-1.12h7.54l6.8,5.98l0.87-2.87h5.07l0.12-3.61l-5.19-4.98l1.11-2.74l5.32-0.37l7.17-14.95l-3.96-3.11l-1.48-5.23l9.64-0.87l-5.69-8.1l-3.03-0.82l-1.24,1.5l-0.93,0.07l-5.69,3.61l1.86,3.12l-2.1,2.24l-2.6,9.59l-6.43,4.11l-0.87,4.49L623.13,249.84L623.13,249.84z", "name": "Pakistan" }, "in": { "path": "M670.98,313.01l4.58-2.24l2.72-9.84l-0.12-12.08l15.58-16.82v-3.99l3.21-1.25l-0.12-4.61l-3.46-6.73l1.98-3.61l4.33,3.99l5.56,0.25v2.24l-1.73,1.87l0.37,1l2.97,0.12l0.62,3.36h0.87l2.23-3.99l1.11-10.46l3.71-2.62l0.12-3.61l-1.48-2.87l-2.35-0.12l-9.2,6.08l0.58,3.91l-6.46-0.02l-2.28-2.79l-1.24,0.16l0.42,3.88l-13.97-1l-8.66-3.86l-0.46-4.75l-5.77-3.58l-0.07-7.37l-3.96-4.53l-9.1,0.87l0.99,3.96l4.46,3.61l-7.71,15.78l-5.16,0.39l-0.85,1.9l5.08,4.7l-0.25,4.75l-5.19-0.08l-0.56,2.36l4.31-0.19l0.12,1.87l-3.09,1.62l1.98,3.74l3.83,1.25l2.35-1.74l1.11-3.11l1.36-0.62l1.61,1.62l-0.49,3.99l-1.11,1.87l0.25,3.24L670.98,313.01L670.98,313.01z", "name": "India" }, "np": { "path": "M671.19,242.56l0.46,4.27l8.08,3.66l12.95,0.96l-0.49-3.13l-8.65-2.38l-7.34-4.37L671.19,242.56L671.19,242.56z", "name": "Nepal" }, "bt": { "path": "M695.4,248.08l1.55,2.12l5.24,0.04l-0.53-2.9L695.4,248.08L695.4,248.08z", "name": "Bhutan" }, "bd": { "path": "M695.57,253.11l-1.31,2.37l3.4,6.46l0.1,5.04l0.62,1.35l3.99,0.07l2.26-2.17l1.64,0.99l0.33,3.07l1.31-0.82l0.08-3.92l-1.1-0.13l-0.69-3.33l-2.78-0.1l-0.69-1.85l1.7-2.27l0.03-1.12h-4.94L695.57,253.11L695.57,253.11z", "name": "Bangladesh" }, "mm": { "path": "M729.44,303.65l-2.77-4.44l2.01-2.82l-1.9-3.49l-1.79-0.34l-0.34-5.86l-2.68-5.19l-0.78,1.24l-1.79,3.04l-2.24,0.34l-1.12-1.47l-0.56-3.95l-1.68-3.16l-6.84-6.45l1.68-1.11l0.31-4.67l2.5-4.2l1.08-10.45l3.62-2.47l0.12-3.81l2.17,0.72l3.42,4.95l-2.54,5.44l1.71,4.27l4.23,1.66l0.77,4.65l5.68,0.88l-1.57,2.71l-7.16,2.82l-0.78,4.62l5.26,6.76l0.22,3.61l-1.23,1.24l0.11,1.13l3.92,5.75l0.11,5.97L729.44,303.65L729.44,303.65z", "name": "Myanmar" }, "th": { "path": "M730.03,270.47l3.24,4.17v5.07l1.12,0.56l5.15-2.48l1.01,0.34l6.15,7.1l-0.22,4.85l-2.01-0.34l-1.79-1.13l-1.34,0.11l-2.35,3.94l0.45,2.14l1.9,1.01l-0.11,2.37l-1.34,0.68l-4.59-3.16v-2.82l-1.9-0.11l-0.78,1.24l-0.4,12.62l2.97,5.42l5.26,5.07l-0.22,1.47l-2.8-0.11l-2.57-3.83h-2.69l-3.36-2.71l-1.01-2.82l1.45-2.37l0.5-2.14l1.58-2.8l-0.07-6.44l-3.86-5.58l-0.16-0.68l1.25-1.26l-0.29-4.43l-5.14-6.51l0.6-3.75L730.03,270.47L730.03,270.47z", "name": "Thailand" }, "kh": { "path": "M740.48,299.47l4.09,4.37l7.61-5.64l0.67-8.9l-3.93,2.71l-2.04-1.14l-2.77-0.37l-1.55-1.09l-0.75,0.04l-2.03,3.33l0.33,1.54l2.06,1.15l-0.25,3.13L740.48,299.47L740.48,299.47z", "name": "Cambodia" }, "la": { "path": "M735.47,262.93l-2.42,1.23l-2.01,5.86l3.36,4.28l-0.56,4.73l0.56,0.23l5.59-2.71l7.5,8.38l-0.18,5.28l1.63,0.88l4.03-3.27l-0.33-2.59l-11.63-11.05l0.11-1.69l1.45-1.01l-1.01-2.82l-4.81-0.79L735.47,262.93L735.47,262.93z", "name": "Lao People's Democratic Republic" }, "vn": { "path": "M745.06,304.45l1.19,1.87l0.22,2.14l3.13,0.34l3.8-5.07l3.58-1.01l1.9-5.18l-0.89-8.34l-3.69-5.07l-3.89-3.11l-4.95-8.5l3.55-5.94l-5.08-5.83l-4.07-0.18l-3.66,1.97l1.09,4.71l4.88,0.86l1.31,3.63l-1.72,1.12l0.11,0.9l11.45,11.2l0.45,3.29l-0.69,10.4L745.06,304.45L745.06,304.45z", "name": "Vietnam" }, "ge": { "path": "M555.46,204.16l3.27,4.27l4.08,1.88l2.51-0.01l4.31-1.17l1.08-1.69l-12.75-4.77L555.46,204.16L555.46,204.16z", "name": "Georgia" }, "am": { "path": "M569.72,209.89l4.8,6.26l-1.41,1.65l-3.4-0.59l-4.22-3.78l0.23-2.48L569.72,209.89L569.72,209.89z", "name": "Armenia" }, "az": { "path": "M571.41,207.72l-1.01,1.72l4.71,6.18l1.64-0.53l2.7,2.83l1.17-4.96l2.93,0.47l-0.12-1.42l-4.82-4.22l-0.92,2.48L571.41,207.72L571.41,207.72z", "name": "Azerbaijan" }, "ir": { "path": "M569.65,217.95l-1.22,1.27l0.12,2.01l1.52,2.13l5.39,5.9l-0.82,2.36h-0.94l-0.47,2.36l3.05,3.9l2.81,0.24l5.63,7.79l3.16,0.24l2.46,1.77l0.12,3.54l9.73,5.67h3.63l2.23-1.89l2.81-0.12l1.64,3.78l10.51,1.46l0.31-3.86l3.48-1.26l0.16-1.38l-2.77-3.78l-6.17-4.96l3.24-2.95l-0.23-1.3l-4.06-0.63l-1.72-13.7l-0.2-3.15l-11.01-4.21l-4.88,1.1l-2.73,3.35l-2.42-0.16l-0.7,0.59l-5.39-0.35l-6.8-4.96l-2.53-2.77l-1.16,0.28l-2.09,2.39L569.65,217.95L569.65,217.95z", "name": "Iran" }, "tr": { "path": "M558.7,209.19l-2.23,2.36l-8.2-0.24l-4.92-2.95l-4.8-0.12l-5.51,3.9l-5.16,0.24l-0.47,2.95h-5.86l-2.34,2.13v1.18l1.41,1.18v1.3l-0.59,1.54l0.59,1.3l1.88-0.94l1.88,2.01l-0.47,1.42l-0.7,0.95l1.05,1.18l5.16,1.06l3.63-1.54v-2.24l1.76,0.35l4.22,2.48l4.57-0.71l1.99-1.89l1.29,0.47v2.13h1.76l1.52-2.95l13.36-1.42l5.83-0.71l-1.54-2.02l-0.03-2.73l1.17-1.4l-4.26-3.42l0.23-2.95h-2.34L558.7,209.19L558.7,209.19M523.02,209.7l-0.16,3.55l3.1-0.95l1.42-0.95l-0.42-1.54l-1.47-1.17L523.02,209.7L523.02,209.7z", "name": "Turkey" }, "om": { "path": "M598.38,280.84l7.39-4.26l1.31-6.25l-1.62-0.93l0.67-6.7l1.41-0.82l1.51,2.37l8.99,4.7v2.61l-10.89,16.03l-5.01,0.17L598.38,280.84L598.38,280.84z", "name": "Oman" }, "ae": { "path": "M594.01,264.94l0.87,3.48l9.86,0.87l0.69-7.14l1.9-1.04l0.52-2.61l-3.11,0.87l-3.46,5.23L594.01,264.94L594.01,264.94z", "name": "United Arab Emirates" }, "qa": { "path": "M592.63,259.02l-0.52,4.01l1.54,1.17l1.4-0.13l0.52-5.05l-1.21-0.87L592.63,259.02L592.63,259.02z", "name": "Qatar" }, "kw": { "path": "M583.29,247.17l-2.25-1.22l-1.56,1.57l0.17,3.14l3.63,1.39L583.29,247.17L583.29,247.17z", "name": "Kuwait" }, "sa": { "path": "M584,253.24l7.01,9.77l2.26,1.8l1.01,4.38l10.79,0.85l1.22,0.64l-1.21,5.4l-7.09,4.18l-10.37,3.14l-5.53,5.4l-6.57-3.83l-3.98,3.48L566,279.4l-3.8-1.74l-1.38-2.09v-4.53l-13.83-16.72l-0.52-2.96h3.98l4.84-4.18l0.17-2.09l-1.38-1.39l2.77-2.26l5.88,0.35l10.03,8.36l5.92-0.27l0.38,1.46L584,253.24L584,253.24z", "name": "Saudi Arabia" }, "sy": { "path": "M546.67,229.13l-0.35,2.54l2.82,1.18l-0.12,7.04l2.82-0.06l2.82-2.13l1.06-0.18l6.4-5.09l1.29-7.39l-12.79,1.3l-1.35,2.96L546.67,229.13L546.67,229.13z", "name": "Syrian Arab Republic" }, "iq": { "path": "M564.31,225.03l-1.56,7.71l-6.46,5.38l0.41,2.54l6.31,0.43l10.05,8.18l5.62-0.16l0.15-1.89l2.06-2.21l2.88,1.63l0.38-0.36l-5.57-7.41l-2.64-0.16l-3.51-4.51l0.7-3.32l1.07-0.14l0.37-1.47l-4.78-5.03L564.31,225.03L564.31,225.03z", "name": "Iraq" }, "jo": { "path": "M548.9,240.78l-2.46,8.58l-0.11,1.31h3.87l4.33-3.82l0.11-1.45l-1.77-1.81l3.17-2.63l-0.46-2.44l-0.87,0.2l-2.64,1.89L548.9,240.78L548.9,240.78z", "name": "Jordan" }, "lb": { "path": "M546.2,232.44l0.06,1.95l-0.82,2.96l2.82,0.24l0.18-4.2L546.2,232.44L546.2,232.44z", "name": "Lebanon" }, "il": { "path": "M545.32,238.06l-1.58,5.03l2.05,6.03l2.35-8.81v-1.89L545.32,238.06L545.32,238.06z", "name": "Israel" }, "cy": { "path": "M543.21,229.84l1.23,0.89l-3.81,3.61l-1.82-0.06l-1.35-0.95l0.18-1.77l2.76-0.18L543.21,229.84L543.21,229.84z", "name": "Cyprus" }, "gb": { "path": "M446.12,149.08l-1.83,2.77l0.73,1.11h4.22v1.85l-1.1,1.48l0.73,3.88l2.38,4.62l1.83,4.25l2.93,1.11l1.28,2.22l-0.18,2.03l-1.83,1.11l-0.18,0.92l1.28,0.74l-1.1,1.48l-2.57,1.11l-4.95-0.55l-7.71,3.51l-2.57-1.29l7.34-4.25l-0.92-0.55l-3.85-0.37l2.38-3.51l0.37-2.96l3.12-0.37l-0.55-5.73l-3.67-0.18l-1.1-1.29l0.18-4.25l-2.2,0.18l2.2-7.39l4.04-2.96L446.12,149.08L446.12,149.08M438.42,161.47l-3.3,0.37l-0.18,2.96l2.2,1.48l2.38-0.55l0.92-1.66L438.42,161.47L438.42,161.47z", "name": "United Kingdom" }, "ie": { "path": "M439.51,166.55l-0.91,6l-8.07,2.96h-2.57l-1.83-1.29v-1.11l4.04-2.59l-1.1-2.22l0.18-3.14l3.49,0.18l1.6-3.76l-0.21,3.34l2.71,2.15L439.51,166.55L439.51,166.55z", "name": "Ireland" }, "se": { "path": "M497.72,104.58l1.96,1.81h3.67l2.02,3.88l0.55,6.65l-4.95,3.51v3.51l-3.49,4.81l-2.02,0.18l-2.75,4.62l0.18,4.44l4.77,3.51l-0.37,2.03l-1.83,2.77l-2.75,2.4l0.18,7.95l-4.22,1.48l-1.47,3.14h-2.02l-1.1-5.54l-4.59-7.04l3.77-6.31l0.26-15.59l2.6-1.43l0.63-8.92l7.41-10.61L497.72,104.58L497.72,104.58M498.49,150.17l-2.11,1.67l1.06,2.45l1.87-1.82L498.49,150.17L498.49,150.17z", "name": "Sweden" }, "fi": { "path": "M506.79,116.94l2.07,0.91l1.28,2.4l-1.28,1.66l-6.42,7.02l-1.1,3.7l1.47,5.36l4.95,3.7l6.6-3.14l5.32-0.74l4.95-7.95l-3.67-8.69l-3.49-8.32l0.55-5.36l-2.2-0.37l-0.57-3.91l-2.96-4.83l-3.28,2.27l-1.29,5.27l-3.48-2.09l-4.84-1.18l-1.08,1.26l1.86,1.68l3.39-0.06l2.73,4.41L506.79,116.94L506.79,116.94z", "name": "Finland" }, "lv": { "path": "M518.07,151.37l-6.85-1.11l0.15,3.83l6.35,3.88l2.6-0.76l-0.15-2.92L518.07,151.37L518.07,151.37z", "name": "Latvia" }, "lt": { "path": "M510.81,154.7l-2.15-0.05l-2.95,2.82h-2.5l0.15,3.53l-1.5,2.77l5.4,0.05l1.55-0.2l1.55,1.87l3.55-0.15l3.4-4.33l-0.2-2.57L510.81,154.7L510.81,154.7z", "name": "Lithuania" }, "by": { "path": "M510.66,166.29l1.5,2.47l-0.6,1.97l0.1,1.56l0.55,1.87l3.1-1.76l3.85,0.1l2.7,1.11h6.85l2-4.79l1.2-1.81v-1.21l-4.3-6.05l-3.8-1.51l-3.1-0.35l-2.7,0.86l0.1,2.72l-3.75,4.74L510.66,166.29L510.66,166.29z", "name": "Belarus" }, "pl": { "path": "M511.46,174.76l0.85,1.56l0.2,1.66l-0.7,1.61l-1.6,3.08l-1.35,0.61l-1.75-0.76l-1.05,0.05l-2.55,0.96l-2.9-0.86l-4.7-3.33l-4.6-2.47l-1.85-2.82l-0.35-6.65l3.6-3.13l4.7-1.56l1.75-0.2l-0.7,1.41l0.45,0.55l7.91,0.15l1.7-0.05l2.8,4.29l-0.7,1.76l0.3,2.07L511.46,174.76L511.46,174.76z", "name": "Poland" }, "it": { "path": "M477.56,213.38l-2.65,1.34l0.35,5.17l2.12,0.36l1.59-1.52v-4.9L477.56,213.38L477.56,213.38M472.27,196.98l-0.62,1.57l0.17,1.71l2.39,2.79l3.76-0.13l8.3,9.64l5.18,1.5l3.06,2.89l0.73,6.59l1.64-0.96l1.42-3.59l-0.35-2.58l2.43-0.22l0.35-1.46l-6.85-3.28l-6.5-6.39l-2.59-3.82l-0.63-3.63l3.31-0.79l-0.85-2.39l-2.03-1.71l-1.75-0.08l-2.44,0.67l-2.3,3.22l-1.39,0.92l-2.15-1.32L472.27,196.98L472.27,196.98M492.44,223.02l-1.45-0.78l-4.95,0.78l0.17,1.34l4.45,2.24l0.67,0.73l1.17,0.17L492.44,223.02L492.44,223.02z", "name": "Italy" }, "fr": { "path": "M477.83,206.96l-1.95,1.96l-0.18,1.78l1.59,0.98l0.62-0.09l0.35-2.59L477.83,206.96L477.83,206.96M460.4,178.7l-2.21,0.54l-4.42,4.81l-1.33,0.09l-1.77-1.25l-1.15,0.27l-0.88,2.76l-6.46,0.18l0.18,1.43l4.42,2.94l5.13,4.1l-0.09,4.9l-2.74,4.81l5.93,2.85l6.02,0.18l1.86-2.14l3.8,0.09l1.06,0.98l3.8-0.27l1.95-2.5l-2.48-2.94l-0.18-1.87l0.53-2.05l-1.24-1.78l-2.12,0.62l-0.27-1.6l4.69-5.17v-3.12l-3.1-1.78l-1.59-0.27L460.4,178.7L460.4,178.7z", "name": "France" }, "nl": { "path": "M470.09,168.27l-4.53,2.23l0.96,0.87l0.1,2.23l-0.96-0.19l-1.06-1.65l-2.53,4.01l3.89,0.81l1.45,1.53l0.77,0.02l0.51-3.46l2.45-1.03L470.09,168.27L470.09,168.27z", "name": "Netherlands" }, "be": { "path": "M461.61,176.52l-0.64,1.6l6.88,4.54l1.98,0.47l0.07-2.15l-1.73-1.94h-1.06l-1.45-1.65L461.61,176.52L461.61,176.52z", "name": "Belgium" }, "de": { "path": "M471.14,167.88l3.57-0.58v-2.52l2.99-0.49l1.64,1.65l1.73,0.19l2.7-1.17l2.41,0.68l2.12,1.84l0.29,6.89l2.12,2.82l-2.79,0.39l-4.63,2.91l0.39,0.97l4.14,3.88l-0.29,1.94l-3.85,1.94l-3.57,0.1l-0.87,1.84h-1.83l-0.87-1.94l-3.18-0.78l-0.1-3.2l-2.7-1.84l0.29-2.33l-1.83-2.52l0.48-3.3l2.5-1.17L471.14,167.88L471.14,167.88z", "name": "Germany" }, "dk": { "path": "M476.77,151.5l-4.15,4.59l-0.15,2.99l1.89,4.93l2.96-0.56l-0.37-4.03l2.04-2.28l-0.04-1.79l-1.44-3.73L476.77,151.5L476.77,151.5M481.44,159.64l-0.93-0.04l-1.22,1.12l0.15,1.75l2.89,0.08l0.15-1.98L481.44,159.64L481.44,159.64z", "name": "Denmark" }, "ch": { "path": "M472.91,189.38l-4.36,4.64l0.09,0.47l1.79-0.56l1.61,2.24l2.72-0.96l1.88,1.46l0.77-0.44l2.32-3.64l-0.59-0.56l-2.29-0.06l-1.11-2.27L472.91,189.38L472.91,189.38z", "name": "Switzerland" }, "cz": { "path": "M488.43,184.87h2.97h1.46l2.37,1.69l4.39-3.65l-4.26-3.04l-4.22-2.04l-2.89,0.52l-3.92,2.52L488.43,184.87L488.43,184.87z", "name": "Czech Republic" }, "sk": { "path": "M495.84,187.13l0.69,0.61l0.09,1.04l7.63-0.17l5.64-2.43l-0.09-2.47l-1.08,0.48l-1.55-0.83l-0.95-0.04l-2.5,1l-3.4-0.82L495.84,187.13L495.84,187.13z", "name": "Slovakia" }, "at": { "path": "M480.63,190.12l-0.65,1.35l0.56,0.96l2.33-0.48h1.98l2.15,1.82l4.57-0.83l3.36-2l0.86-1.35l-0.13-1.74l-3.02-2.26l-4.05,0.04l-0.34,2.3l-4.26,2.08L480.63,190.12L480.63,190.12z", "name": "Austria" }, "hu": { "path": "M496.74,189.6l-1.16,1.82l0.09,2.78l1.85,0.95l5.69,0.17l7.93-6.68l0.04-1.48l-0.86-0.43l-5.73,2.6L496.74,189.6L496.74,189.6z", "name": "Hungary" }, "si": { "path": "M494.8,191.99l-2.54,1.52l-4.74,1.04l0.95,2.74l3.32,0.04l3.06-2.56L494.8,191.99L494.8,191.99z", "name": "Slovenia" }, "hr": { "path": "M495.62,195.16l-3.53,2.91h-3.58l-0.43,2.52l1.64,0.43l0.82-1.22l1.29,1.13l1.03,3.6l7.07,3.3l0.7-0.8l-7.17-7.4l0.73-1.35l6.81-0.26l0.69-2.17l-4.44,0.13L495.62,195.16L495.62,195.16z", "name": "Croatia" }, "ba": { "path": "M494.8,198.94l-0.37,0.61l6.71,6.92l2.46-3.62l-0.09-1.43l-2.15-2.61L494.8,198.94L494.8,198.94z", "name": "Bosnia and Herzegovina" }, "mt": { "path": "M492.61,230.47l-1.67,0.34l0.06,1.85l1.5,0.5l0.67-0.56L492.61,230.47L492.61,230.47z", "name": "Malta" }, "ua": { "path": "M515.57,173.15l-2.9,1.63l0.72,3.08l-2.68,5.65l0.02,2.49l1.26,0.8l8.08,0.4l2.26-1.87l2.42,0.81l3.47,4.63l-2.54,4.56l3.02,0.88l3.95-4.55l2.26,0.41l2.1,1.46l-1.85,2.44l2.5,3.9h2.66l1.37-2.6l2.82-0.57l0.08-2.11l-5.24-0.81l0.16-2.27h5.08l5.48-4.39l2.42-2.11l0.4-6.66l-10.8-0.97l-4.43-6.25l-3.06-1.05l-3.71,0.16l-1.67,4.13l-7.6,0.1l-2.47-1.14L515.57,173.15L515.57,173.15z", "name": "Ukraine" }, "md": { "path": "M520.75,187.71l3.1,4.77l-0.26,2.7l1.11,0.05l2.63-4.45l-3.16-3.92l-1.79-0.74L520.75,187.71L520.75,187.71z", "name": "Moldova" }, "ro": { "path": "M512.18,187.6l-0.26,1.48l-5.79,4.82l4.84,7.1l3.1,2.17h5.58l1.84-1.54l2.47-0.32l1.84,1.11l3.26-3.71l-0.63-1.86l-3.31-0.85l-2.26-0.11l0.11-3.18l-3-4.72L512.18,187.6L512.18,187.6z", "name": "Romania" }, "rs": { "path": "M505.55,194.54l-2.05,1.54h-1l-0.68,2.12l2.42,2.81l0.16,2.23l-3,4.24l0.42,1.27l1.74,0.32l1.37-1.86l0.74-0.05l1.26,1.22l3.84-1.17l-0.32-5.46L505.55,194.54L505.55,194.54z", "name": "Serbia" }, "bg": { "path": "M511.44,202.39l0.16,4.98l1.68,3.5l6.31,0.11l2.84-2.01l2.79-1.11l-0.68-3.18l0.63-1.7l-1.42-0.74l-1.95,0.16l-1.53,1.54l-6.42,0.05L511.44,202.39L511.44,202.39z", "name": "Bulgaria" }, "al": { "path": "M504.02,209.76v4.61l1.32,2.49l0.95-0.11l1.63-2.97l-0.95-1.33l-0.37-3.29l-1.26-1.17L504.02,209.76L504.02,209.76z", "name": "Albania" }, "mk": { "path": "M510.92,208.01l-3.37,1.11l0.16,2.86l0.79,1.01l4-1.86L510.92,208.01L510.92,208.01z", "name": "Macedonia" }, "gr": { "path": "M506.71,217.6l-0.11,1.33l4.63,2.33l2.21,0.85l-1.16,1.22l-2.58,0.26l-0.37,1.17l0.89,2.01l2.89,1.54l1.26,0.11l0.16-3.45l1.89-2.28l-5.16-6.1l0.68-2.07l1.21-0.05l1.84,1.48l1.16-0.58l0.37-2.07l5.42,0.05l0.21-3.18l-2.26,1.59l-6.63-0.16l-4.31,2.23L506.71,217.6L506.71,217.6M516.76,230.59l1.63,0.05l0.68,1.01h2.37l1.58-0.58l0.53,0.64l-1.05,1.38l-4.63,0.16l-0.84-1.11l-0.89-0.53L516.76,230.59L516.76,230.59z", "name": "Greece" } } });

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);