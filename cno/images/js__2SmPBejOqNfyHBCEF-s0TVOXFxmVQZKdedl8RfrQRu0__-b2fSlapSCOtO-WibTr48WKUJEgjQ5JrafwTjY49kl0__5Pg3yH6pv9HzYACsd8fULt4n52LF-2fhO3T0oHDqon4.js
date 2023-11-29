"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

!function (n) {
  var t = {};

  function a(e) {
    if (t[e]) return t[e].exports;
    var i = t[e] = {
      i: e,
      l: !1,
      exports: {}
    };
    return n[e].call(i.exports, i, i.exports, a), i.l = !0, i.exports;
  }

  a.m = n, a.c = t, a.d = function (n, t, e) {
    a.o(n, t) || Object.defineProperty(n, t, {
      enumerable: !0,
      get: e
    });
  }, a.r = function (n) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(n, "__esModule", {
      value: !0
    });
  }, a.t = function (n, t) {
    if (1 & t && (n = a(n)), 8 & t) return n;
    if (4 & t && "object" == _typeof(n) && n && n.__esModule) return n;
    var e = Object.create(null);
    if (a.r(e), Object.defineProperty(e, "default", {
      enumerable: !0,
      value: n
    }), 2 & t && "string" != typeof n) for (var i in n) {
      a.d(e, i, function (t) {
        return n[t];
      }.bind(null, i));
    }
    return e;
  }, a.n = function (n) {
    var t = n && n.__esModule ? function () {
      return n["default"];
    } : function () {
      return n;
    };
    return a.d(t, "a", t), t;
  }, a.o = function (n, t) {
    return Object.prototype.hasOwnProperty.call(n, t);
  }, a.p = "", a(a.s = 0);
}([function (n, t, a) {
  "use strict";
  /*!
   * Font Awesome Free 6.0.0 by @fontawesome - https://fontawesome.com
   * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
   * Copyright 2022 Fonticons, Inc.
   */

  function e(n, t) {
    var a = Object.keys(n);

    if (Object.getOwnPropertySymbols) {
      var e = Object.getOwnPropertySymbols(n);
      t && (e = e.filter(function (t) {
        return Object.getOwnPropertyDescriptor(n, t).enumerable;
      })), a.push.apply(a, e);
    }

    return a;
  }

  function i(n) {
    for (var t = 1; t < arguments.length; t++) {
      var a = null != arguments[t] ? arguments[t] : {};
      t % 2 ? e(Object(a), !0).forEach(function (t) {
        c(n, t, a[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a)) : e(Object(a)).forEach(function (t) {
        Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(a, t));
      });
    }

    return n;
  }

  function r(n) {
    return (r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (n) {
      return _typeof(n);
    } : function (n) {
      return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : _typeof(n);
    })(n);
  }

  function o(n, t) {
    for (var a = 0; a < t.length; a++) {
      var e = t[a];
      e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(n, e.key, e);
    }
  }

  function c(n, t, a) {
    return t in n ? Object.defineProperty(n, t, {
      value: a,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : n[t] = a, n;
  }

  function f(n, t) {
    return function (n) {
      if (Array.isArray(n)) return n;
    }(n) || function (n, t) {
      var a = null == n ? null : "undefined" != typeof Symbol && n[Symbol.iterator] || n["@@iterator"];
      if (null == a) return;
      var e,
          i,
          r = [],
          o = !0,
          c = !1;

      try {
        for (a = a.call(n); !(o = (e = a.next()).done) && (r.push(e.value), !t || r.length !== t); o = !0) {
          ;
        }
      } catch (n) {
        c = !0, i = n;
      } finally {
        try {
          o || null == a["return"] || a["return"]();
        } finally {
          if (c) throw i;
        }
      }

      return r;
    }(n, t) || l(n, t) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }

  function s(n) {
    return function (n) {
      if (Array.isArray(n)) return u(n);
    }(n) || function (n) {
      if ("undefined" != typeof Symbol && null != n[Symbol.iterator] || null != n["@@iterator"]) return Array.from(n);
    }(n) || l(n) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }

  function l(n, t) {
    if (n) {
      if ("string" == typeof n) return u(n, t);
      var a = Object.prototype.toString.call(n).slice(8, -1);
      return "Object" === a && n.constructor && (a = n.constructor.name), "Map" === a || "Set" === a ? Array.from(n) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? u(n, t) : void 0;
    }
  }

  function u(n, t) {
    (null == t || t > n.length) && (t = n.length);

    for (var a = 0, e = new Array(t); a < t; a++) {
      e[a] = n[a];
    }

    return e;
  }

  a.r(t);

  var m = function m() {},
      d = {},
      v = {},
      p = null,
      b = {
    mark: m,
    measure: m
  };

  try {
    "undefined" != typeof window && (d = window), "undefined" != typeof document && (v = document), "undefined" != typeof MutationObserver && (p = MutationObserver), "undefined" != typeof performance && (b = performance);
  } catch (n) {}

  var g = (d.navigator || {}).userAgent,
      h = void 0 === g ? "" : g,
      y = d,
      k = v,
      w = p,
      x = b,
      z = (y.document, !!k.documentElement && !!k.head && "function" == typeof k.addEventListener && "function" == typeof k.createElement),
      N = ~h.indexOf("MSIE") || ~h.indexOf("Trident/"),
      A = ["HTML", "HEAD", "STYLE", "SCRIPT"],
      M = function () {
    try {
      return !0;
    } catch (n) {
      return !1;
    }
  }(),
      O = {
    fas: "solid",
    "fa-solid": "solid",
    far: "regular",
    "fa-regular": "regular",
    fal: "light",
    "fa-light": "light",
    fat: "thin",
    "fa-thin": "thin",
    fad: "duotone",
    "fa-duotone": "duotone",
    fab: "brands",
    "fa-brands": "brands",
    fak: "kit",
    "fa-kit": "kit",
    fa: "solid"
  },
      S = {
    solid: "fas",
    regular: "far",
    light: "fal",
    thin: "fat",
    duotone: "fad",
    brands: "fab",
    kit: "fak"
  },
      C = {
    fab: "fa-brands",
    fad: "fa-duotone",
    fak: "fa-kit",
    fal: "fa-light",
    far: "fa-regular",
    fas: "fa-solid",
    fat: "fa-thin"
  },
      E = {
    "fa-brands": "fab",
    "fa-duotone": "fad",
    "fa-kit": "fak",
    "fa-light": "fal",
    "fa-regular": "far",
    "fa-solid": "fas",
    "fa-thin": "fat"
  },
      L = /fa[srltdbk\-\ ]/,
      j = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,
      P = {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
      _ = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      H = _.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
      T = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"],
      I = "duotone-group",
      Y = "swap-opacity",
      F = "primary",
      R = "secondary",
      V = [].concat(s(Object.keys(S)), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", I, Y, F, R]).concat(_.map(function (n) {
    return "".concat(n, "x");
  })).concat(H.map(function (n) {
    return "w-".concat(n);
  })),
      D = y.FontAwesomeConfig || {};

  if (k && "function" == typeof k.querySelector) {
    [["data-family-prefix", "familyPrefix"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach(function (n) {
      var t = f(n, 2),
          a = t[0],
          e = t[1],
          i = function (n) {
        return "" === n || "false" !== n && ("true" === n || n);
      }(function (n) {
        var t = k.querySelector("script[" + n + "]");
        if (t) return t.getAttribute(n);
      }(a));

      null != i && (D[e] = i);
    });
  }

  var W = i(i({}, {
    familyPrefix: "fa",
    styleDefault: "solid",
    replacementClass: "svg-inline--fa",
    autoReplaceSvg: !0,
    autoAddCss: !0,
    autoA11y: !0,
    searchPseudoElements: !1,
    observeMutations: !0,
    mutateApproach: "async",
    keepOriginalSource: !0,
    measurePerformance: !1,
    showMissingIcons: !0
  }), D);
  W.autoReplaceSvg || (W.observeMutations = !1);
  var q = {};
  Object.keys(W).forEach(function (n) {
    Object.defineProperty(q, n, {
      enumerable: !0,
      set: function set(t) {
        W[n] = t, B.forEach(function (n) {
          return n(q);
        });
      },
      get: function get() {
        return W[n];
      }
    });
  }), y.FontAwesomeConfig = q;
  var B = [];
  var X = 16,
      U = {
    size: 16,
    x: 0,
    y: 0,
    rotate: 0,
    flipX: !1,
    flipY: !1
  };

  function K() {
    for (var n = 12, t = ""; n-- > 0;) {
      t += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[62 * Math.random() | 0];
    }

    return t;
  }

  function G(n) {
    for (var t = [], a = (n || []).length >>> 0; a--;) {
      t[a] = n[a];
    }

    return t;
  }

  function J(n) {
    return n.classList ? G(n.classList) : (n.getAttribute("class") || "").split(" ").filter(function (n) {
      return n;
    });
  }

  function Q(n) {
    return "".concat(n).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function Z(n) {
    return Object.keys(n || {}).reduce(function (t, a) {
      return t + "".concat(a, ": ").concat(n[a].trim(), ";");
    }, "");
  }

  function $(n) {
    return n.size !== U.size || n.x !== U.x || n.y !== U.y || n.rotate !== U.rotate || n.flipX || n.flipY;
  }

  function nn() {
    var n = "svg-inline--fa",
        t = q.familyPrefix,
        a = q.replacementClass,
        e = ':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-counter-scale, 0.25));\n          transform: scale(var(--fa-counter-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(var(--fa-li-width, 2em) * -1);\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  -webkit-animation-name: fa-beat;\n          animation-name: fa-beat;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  -webkit-animation-name: fa-bounce;\n          animation-name: fa-bounce;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  -webkit-animation-name: fa-fade;\n          animation-name: fa-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  -webkit-animation-name: fa-beat-fade;\n          animation-name: fa-beat-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  -webkit-animation-name: fa-flip;\n          animation-name: fa-flip;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  -webkit-animation-name: fa-shake;\n          animation-name: fa-shake;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 2s);\n          animation-duration: var(--fa-animation-duration, 2s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));\n          animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    -webkit-animation-delay: -1ms;\n            animation-delay: -1ms;\n    -webkit-animation-duration: 1ms;\n            animation-duration: 1ms;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    transition-delay: 0s;\n    transition-duration: 0s;\n  }\n}\n@-webkit-keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@-webkit-keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@-webkit-keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@-webkit-keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@-webkit-keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@-webkit-keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  -webkit-transform: rotate(var(--fa-rotate-angle, none));\n          transform: rotate(var(--fa-rotate-angle, none));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse,\n.fa-duotone.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}';

    if ("fa" !== t || a !== n) {
      var i = new RegExp("\\.".concat("fa", "\\-"), "g"),
          r = new RegExp("\\--".concat("fa", "\\-"), "g"),
          o = new RegExp("\\.".concat(n), "g");
      e = e.replace(i, ".".concat(t, "-")).replace(r, "--".concat(t, "-")).replace(o, ".".concat(a));
    }

    return e;
  }

  var tn = !1;

  function an() {
    q.autoAddCss && !tn && (!function (n) {
      if (n && z) {
        var t = k.createElement("style");
        t.setAttribute("type", "text/css"), t.innerHTML = n;

        for (var a = k.head.childNodes, e = null, i = a.length - 1; i > -1; i--) {
          var r = a[i],
              o = (r.tagName || "").toUpperCase();
          ["STYLE", "LINK"].indexOf(o) > -1 && (e = r);
        }

        k.head.insertBefore(t, e);
      }
    }(nn()), tn = !0);
  }

  var en = {
    mixout: function mixout() {
      return {
        dom: {
          css: nn,
          insertCss: an
        }
      };
    },
    hooks: function hooks() {
      return {
        beforeDOMElementCreation: function beforeDOMElementCreation() {
          an();
        },
        beforeI2svg: function beforeI2svg() {
          an();
        }
      };
    }
  },
      rn = y || {};
  rn.___FONT_AWESOME___ || (rn.___FONT_AWESOME___ = {}), rn.___FONT_AWESOME___.styles || (rn.___FONT_AWESOME___.styles = {}), rn.___FONT_AWESOME___.hooks || (rn.___FONT_AWESOME___.hooks = {}), rn.___FONT_AWESOME___.shims || (rn.___FONT_AWESOME___.shims = []);
  var on = rn.___FONT_AWESOME___,
      cn = [],
      fn = !1;

  function sn(n) {
    z && (fn ? setTimeout(n, 0) : cn.push(n));
  }

  function ln(n) {
    var t = n.tag,
        a = n.attributes,
        e = void 0 === a ? {} : a,
        i = n.children,
        r = void 0 === i ? [] : i;
    return "string" == typeof n ? Q(n) : "<".concat(t, " ").concat(function (n) {
      return Object.keys(n || {}).reduce(function (t, a) {
        return t + "".concat(a, '="').concat(Q(n[a]), '" ');
      }, "").trim();
    }(e), ">").concat(r.map(ln).join(""), "</").concat(t, ">");
  }

  function un(n, t, a) {
    if (n && n[t] && n[t][a]) return {
      prefix: t,
      iconName: a,
      icon: n[t][a]
    };
  }

  z && ((fn = (k.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(k.readyState)) || k.addEventListener("DOMContentLoaded", function n() {
    k.removeEventListener("DOMContentLoaded", n), fn = 1, cn.map(function (n) {
      return n();
    });
  }));

  var mn = function mn(n, t, a, e) {
    var i,
        r,
        o,
        c = Object.keys(n),
        f = c.length,
        s = void 0 !== e ? function (n, t) {
      return function (a, e, i, r) {
        return n.call(t, a, e, i, r);
      };
    }(t, e) : t;

    for (void 0 === a ? (i = 1, o = n[c[0]]) : (i = 0, o = a); i < f; i++) {
      o = s(o, n[r = c[i]], r, n);
    }

    return o;
  };

  function dn(n) {
    var t = function (n) {
      for (var t = [], a = 0, e = n.length; a < e;) {
        var i = n.charCodeAt(a++);

        if (i >= 55296 && i <= 56319 && a < e) {
          var r = n.charCodeAt(a++);
          56320 == (64512 & r) ? t.push(((1023 & i) << 10) + (1023 & r) + 65536) : (t.push(i), a--);
        } else t.push(i);
      }

      return t;
    }(n);

    return 1 === t.length ? t[0].toString(16) : null;
  }

  function vn(n) {
    return Object.keys(n).reduce(function (t, a) {
      var e = n[a];
      return !!e.icon ? t[e.iconName] = e.icon : t[a] = e, t;
    }, {});
  }

  function pn(n, t) {
    var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        e = a.skipHooks,
        r = void 0 !== e && e,
        o = vn(t);
    "function" != typeof on.hooks.addPack || r ? on.styles[n] = i(i({}, on.styles[n] || {}), o) : on.hooks.addPack(n, vn(t)), "fas" === n && pn("fa", t);
  }

  var bn = on.styles,
      gn = on.shims,
      hn = Object.values(C),
      yn = null,
      kn = {},
      wn = {},
      xn = {},
      zn = {},
      Nn = {},
      An = Object.keys(O);

  function Mn(n, t) {
    var a,
        e = t.split("-"),
        i = e[0],
        r = e.slice(1).join("-");
    return i !== n || "" === r || (a = r, ~V.indexOf(a)) ? null : r;
  }

  var On,
      Sn = function Sn() {
    var n = function n(_n2) {
      return mn(bn, function (t, a, e) {
        return t[e] = mn(a, _n2, {}), t;
      }, {});
    };

    kn = n(function (n, t, a) {
      (t[3] && (n[t[3]] = a), t[2]) && t[2].filter(function (n) {
        return "number" == typeof n;
      }).forEach(function (t) {
        n[t.toString(16)] = a;
      });
      return n;
    }), wn = n(function (n, t, a) {
      (n[a] = a, t[2]) && t[2].filter(function (n) {
        return "string" == typeof n;
      }).forEach(function (t) {
        n[t] = a;
      });
      return n;
    }), Nn = n(function (n, t, a) {
      var e = t[2];
      return n[a] = a, e.forEach(function (t) {
        n[t] = a;
      }), n;
    });
    var t = "far" in bn || q.autoFetchSvg,
        a = mn(gn, function (n, a) {
      var e = a[0],
          i = a[1],
          r = a[2];
      return "far" !== i || t || (i = "fas"), "string" == typeof e && (n.names[e] = {
        prefix: i,
        iconName: r
      }), "number" == typeof e && (n.unicodes[e.toString(16)] = {
        prefix: i,
        iconName: r
      }), n;
    }, {
      names: {},
      unicodes: {}
    });
    xn = a.names, zn = a.unicodes, yn = Pn(q.styleDefault);
  };

  function Cn(n, t) {
    return (kn[n] || {})[t];
  }

  function En(n, t) {
    return (Nn[n] || {})[t];
  }

  function Ln(n) {
    return xn[n] || {
      prefix: null,
      iconName: null
    };
  }

  function jn() {
    return yn;
  }

  On = function On(n) {
    yn = Pn(n.styleDefault);
  }, B.push(On), Sn();

  function Pn(n) {
    var t = S[n] || S[O[n]],
        a = n in on.styles ? n : null;
    return t || a || null;
  }

  function _n(n) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = t.skipLookups,
        e = void 0 !== a && a,
        i = null,
        r = n.reduce(function (n, t) {
      var a = Mn(q.familyPrefix, t);

      if (bn[t] ? (t = hn.includes(t) ? E[t] : t, i = t, n.prefix = t) : An.indexOf(t) > -1 ? (i = t, n.prefix = Pn(t)) : a ? n.iconName = a : t !== q.replacementClass && n.rest.push(t), !e && n.prefix && n.iconName) {
        var r = "fa" === i ? Ln(n.iconName) : {},
            o = En(n.prefix, n.iconName);
        r.prefix && (i = null), n.iconName = r.iconName || o || n.iconName, n.prefix = r.prefix || n.prefix, "far" !== n.prefix || bn.far || !bn.fas || q.autoFetchSvg || (n.prefix = "fas");
      }

      return n;
    }, {
      prefix: null,
      iconName: null,
      rest: []
    });
    return "fa" !== r.prefix && "fa" !== i || (r.prefix = jn() || "fas"), r;
  }

  var Hn = function () {
    function n() {
      !function (n, t) {
        if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, n), this.definitions = {};
    }

    var t, a, e;
    return t = n, (a = [{
      key: "add",
      value: function value() {
        for (var n = this, t = arguments.length, a = new Array(t), e = 0; e < t; e++) {
          a[e] = arguments[e];
        }

        var r = a.reduce(this._pullDefinitions, {});
        Object.keys(r).forEach(function (t) {
          n.definitions[t] = i(i({}, n.definitions[t] || {}), r[t]), pn(t, r[t]);
          var a = C[t];
          a && pn(a, r[t]), Sn();
        });
      }
    }, {
      key: "reset",
      value: function value() {
        this.definitions = {};
      }
    }, {
      key: "_pullDefinitions",
      value: function value(n, t) {
        var a = t.prefix && t.iconName && t.icon ? {
          0: t
        } : t;
        return Object.keys(a).map(function (t) {
          var e = a[t],
              i = e.prefix,
              r = e.iconName,
              o = e.icon,
              c = o[2];
          n[i] || (n[i] = {}), c.length > 0 && c.forEach(function (t) {
            "string" == typeof t && (n[i][t] = o);
          }), n[i][r] = o;
        }), n;
      }
    }]) && o(t.prototype, a), e && o(t, e), Object.defineProperty(t, "prototype", {
      writable: !1
    }), n;
  }(),
      Tn = [],
      In = {},
      Yn = {},
      Fn = Object.keys(Yn);

  function Rn(n, t) {
    for (var a = arguments.length, e = new Array(a > 2 ? a - 2 : 0), i = 2; i < a; i++) {
      e[i - 2] = arguments[i];
    }

    var r = In[n] || [];
    return r.forEach(function (n) {
      t = n.apply(null, [t].concat(e));
    }), t;
  }

  function Vn(n) {
    for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), e = 1; e < t; e++) {
      a[e - 1] = arguments[e];
    }

    var i = In[n] || [];
    i.forEach(function (n) {
      n.apply(null, a);
    });
  }

  function Dn() {
    var n = arguments[0],
        t = Array.prototype.slice.call(arguments, 1);
    return Yn[n] ? Yn[n].apply(null, t) : void 0;
  }

  function Wn(n) {
    "fa" === n.prefix && (n.prefix = "fas");
    var t = n.iconName,
        a = n.prefix || jn();
    if (t) return t = En(a, t) || t, un(qn.definitions, a, t) || un(on.styles, a, t);
  }

  var qn = new Hn(),
      Bn = {
    i2svg: function i2svg() {
      var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return z ? (Vn("beforeI2svg", n), Dn("pseudoElements2svg", n), Dn("i2svg", n)) : Promise.reject("Operation requires a DOM of some kind.");
    },
    watch: function watch() {
      var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = n.autoReplaceSvgRoot;
      !1 === q.autoReplaceSvg && (q.autoReplaceSvg = !0), q.observeMutations = !0, sn(function () {
        Un({
          autoReplaceSvgRoot: t
        }), Vn("watch", n);
      });
    }
  },
      Xn = {
    noAuto: function noAuto() {
      q.autoReplaceSvg = !1, q.observeMutations = !1, Vn("noAuto");
    },
    config: q,
    dom: Bn,
    parse: {
      icon: function icon(n) {
        if (null === n) return null;
        if ("object" === r(n) && n.prefix && n.iconName) return {
          prefix: n.prefix,
          iconName: En(n.prefix, n.iconName) || n.iconName
        };

        if (Array.isArray(n) && 2 === n.length) {
          var t = 0 === n[1].indexOf("fa-") ? n[1].slice(3) : n[1],
              a = Pn(n[0]);
          return {
            prefix: a,
            iconName: En(a, t) || t
          };
        }

        if ("string" == typeof n && (n.indexOf("".concat(q.familyPrefix, "-")) > -1 || n.match(L))) {
          var e = _n(n.split(" "), {
            skipLookups: !0
          });

          return {
            prefix: e.prefix || jn(),
            iconName: En(e.prefix, e.iconName) || e.iconName
          };
        }

        if ("string" == typeof n) {
          var i = jn();
          return {
            prefix: i,
            iconName: En(i, n) || n
          };
        }
      }
    },
    library: qn,
    findIconDefinition: Wn,
    toHtml: ln
  },
      Un = function Un() {
    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = n.autoReplaceSvgRoot,
        a = void 0 === t ? k : t;
    (Object.keys(on.styles).length > 0 || q.autoFetchSvg) && z && q.autoReplaceSvg && Xn.dom.i2svg({
      node: a
    });
  };

  function Kn(n, t) {
    return Object.defineProperty(n, "abstract", {
      get: t
    }), Object.defineProperty(n, "html", {
      get: function get() {
        return n["abstract"].map(function (n) {
          return ln(n);
        });
      }
    }), Object.defineProperty(n, "node", {
      get: function get() {
        if (z) {
          var t = k.createElement("div");
          return t.innerHTML = n.html, t.children;
        }
      }
    }), n;
  }

  function Gn(n) {
    var t = n.icons,
        a = t.main,
        e = t.mask,
        r = n.prefix,
        o = n.iconName,
        c = n.transform,
        f = n.symbol,
        s = n.title,
        l = n.maskId,
        u = n.titleId,
        m = n.extra,
        d = n.watchable,
        v = void 0 !== d && d,
        p = e.found ? e : a,
        b = p.width,
        g = p.height,
        h = "fak" === r,
        y = [q.replacementClass, o ? "".concat(q.familyPrefix, "-").concat(o) : ""].filter(function (n) {
      return -1 === m.classes.indexOf(n);
    }).filter(function (n) {
      return "" !== n || !!n;
    }).concat(m.classes).join(" "),
        k = {
      children: [],
      attributes: i(i({}, m.attributes), {}, {
        "data-prefix": r,
        "data-icon": o,
        "class": y,
        role: m.attributes.role || "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 ".concat(b, " ").concat(g)
      })
    },
        w = h && !~m.classes.indexOf("fa-fw") ? {
      width: "".concat(b / g * 16 * .0625, "em")
    } : {};
    v && (k.attributes["data-fa-i2svg"] = ""), s && (k.children.push({
      tag: "title",
      attributes: {
        id: k.attributes["aria-labelledby"] || "title-".concat(u || K())
      },
      children: [s]
    }), delete k.attributes.title);
    var x = i(i({}, k), {}, {
      prefix: r,
      iconName: o,
      main: a,
      mask: e,
      maskId: l,
      transform: c,
      symbol: f,
      styles: i(i({}, w), m.styles)
    }),
        z = e.found && a.found ? Dn("generateAbstractMask", x) || {
      children: [],
      attributes: {}
    } : Dn("generateAbstractIcon", x) || {
      children: [],
      attributes: {}
    },
        N = z.children,
        A = z.attributes;
    return x.children = N, x.attributes = A, f ? function (n) {
      var t = n.prefix,
          a = n.iconName,
          e = n.children,
          r = n.attributes,
          o = n.symbol,
          c = !0 === o ? "".concat(t, "-").concat(q.familyPrefix, "-").concat(a) : o;
      return [{
        tag: "svg",
        attributes: {
          style: "display: none;"
        },
        children: [{
          tag: "symbol",
          attributes: i(i({}, r), {}, {
            id: c
          }),
          children: e
        }]
      }];
    }(x) : function (n) {
      var t = n.children,
          a = n.main,
          e = n.mask,
          r = n.attributes,
          o = n.styles,
          c = n.transform;

      if ($(c) && a.found && !e.found) {
        var f = {
          x: a.width / a.height / 2,
          y: .5
        };
        r.style = Z(i(i({}, o), {}, {
          "transform-origin": "".concat(f.x + c.x / 16, "em ").concat(f.y + c.y / 16, "em")
        }));
      }

      return [{
        tag: "svg",
        attributes: r,
        children: t
      }];
    }(x);
  }

  function Jn(n) {
    var t = n.content,
        a = n.width,
        e = n.height,
        r = n.transform,
        o = n.title,
        c = n.extra,
        f = n.watchable,
        s = void 0 !== f && f,
        l = i(i(i({}, c.attributes), o ? {
      title: o
    } : {}), {}, {
      "class": c.classes.join(" ")
    });
    s && (l["data-fa-i2svg"] = "");
    var u = i({}, c.styles);
    $(r) && (u.transform = function (n) {
      var t = n.transform,
          a = n.width,
          e = void 0 === a ? 16 : a,
          i = n.height,
          r = void 0 === i ? 16 : i,
          o = n.startCentered,
          c = void 0 !== o && o,
          f = "";
      return f += c && N ? "translate(".concat(t.x / X - e / 2, "em, ").concat(t.y / X - r / 2, "em) ") : c ? "translate(calc(-50% + ".concat(t.x / X, "em), calc(-50% + ").concat(t.y / X, "em)) ") : "translate(".concat(t.x / X, "em, ").concat(t.y / X, "em) "), f += "scale(".concat(t.size / X * (t.flipX ? -1 : 1), ", ").concat(t.size / X * (t.flipY ? -1 : 1), ") "), f += "rotate(".concat(t.rotate, "deg) ");
    }({
      transform: r,
      startCentered: !0,
      width: a,
      height: e
    }), u["-webkit-transform"] = u.transform);
    var m = Z(u);
    m.length > 0 && (l.style = m);
    var d = [];
    return d.push({
      tag: "span",
      attributes: l,
      children: [t]
    }), o && d.push({
      tag: "span",
      attributes: {
        "class": "sr-only"
      },
      children: [o]
    }), d;
  }

  function Qn(n) {
    var t = n.content,
        a = n.title,
        e = n.extra,
        r = i(i(i({}, e.attributes), a ? {
      title: a
    } : {}), {}, {
      "class": e.classes.join(" ")
    }),
        o = Z(e.styles);
    o.length > 0 && (r.style = o);
    var c = [];
    return c.push({
      tag: "span",
      attributes: r,
      children: [t]
    }), a && c.push({
      tag: "span",
      attributes: {
        "class": "sr-only"
      },
      children: [a]
    }), c;
  }

  var Zn = on.styles;

  function $n(n) {
    var t = n[0],
        a = n[1],
        e = f(n.slice(4), 1)[0];
    return {
      found: !0,
      width: t,
      height: a,
      icon: Array.isArray(e) ? {
        tag: "g",
        attributes: {
          "class": "".concat(q.familyPrefix, "-").concat(I)
        },
        children: [{
          tag: "path",
          attributes: {
            "class": "".concat(q.familyPrefix, "-").concat(R),
            fill: "currentColor",
            d: e[0]
          }
        }, {
          tag: "path",
          attributes: {
            "class": "".concat(q.familyPrefix, "-").concat(F),
            fill: "currentColor",
            d: e[1]
          }
        }]
      } : {
        tag: "path",
        attributes: {
          fill: "currentColor",
          d: e
        }
      }
    };
  }

  var nt = {
    found: !1,
    width: 512,
    height: 512
  };

  function tt(n, t) {
    var a = t;
    return "fa" === t && null !== q.styleDefault && (t = jn()), new Promise(function (e, r) {
      Dn("missingIconAbstract");

      if ("fa" === a) {
        var o = Ln(n) || {};
        n = o.iconName || n, t = o.prefix || t;
      }

      if (n && t && Zn[t] && Zn[t][n]) return e($n(Zn[t][n]));
      !function (n, t) {
        M || q.showMissingIcons || !n || console.error('Icon with name "'.concat(n, '" and prefix "').concat(t, '" is missing.'));
      }(n, t), e(i(i({}, nt), {}, {
        icon: q.showMissingIcons && n && Dn("missingIconAbstract") || {}
      }));
    });
  }

  var at = function at() {},
      et = q.measurePerformance && x && x.mark && x.measure ? x : {
    mark: at,
    measure: at
  },
      it = function it(n) {
    et.mark("".concat('FA "6.0.0"', " ").concat(n, " ends")), et.measure("".concat('FA "6.0.0"', " ").concat(n), "".concat('FA "6.0.0"', " ").concat(n, " begins"), "".concat('FA "6.0.0"', " ").concat(n, " ends"));
  },
      rt = function rt(n) {
    return et.mark("".concat('FA "6.0.0"', " ").concat(n, " begins")), function () {
      return it(n);
    };
  },
      ot = function ot() {};

  function ct(n) {
    return "string" == typeof (n.getAttribute ? n.getAttribute("data-fa-i2svg") : null);
  }

  function ft(n) {
    return k.createElementNS("http://www.w3.org/2000/svg", n);
  }

  function st(n) {
    return k.createElement(n);
  }

  var lt = {
    replace: function replace(n) {
      var t = n[0];
      if (t.parentNode) if (n[1].forEach(function (n) {
        t.parentNode.insertBefore(function n(t) {
          var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              e = a.ceFn,
              i = void 0 === e ? "svg" === t.tag ? ft : st : e;
          if ("string" == typeof t) return k.createTextNode(t);
          var r = i(t.tag);
          Object.keys(t.attributes || []).forEach(function (n) {
            r.setAttribute(n, t.attributes[n]);
          });
          var o = t.children || [];
          return o.forEach(function (t) {
            r.appendChild(n(t, {
              ceFn: i
            }));
          }), r;
        }(n), t);
      }), null === t.getAttribute("data-fa-i2svg") && q.keepOriginalSource) {
        var a = k.createComment(function (n) {
          var t = " ".concat(n.outerHTML, " ");
          return t = "".concat(t, "Font Awesome fontawesome.com ");
        }(t));
        t.parentNode.replaceChild(a, t);
      } else t.remove();
    },
    nest: function nest(n) {
      var t = n[0],
          a = n[1];
      if (~J(t).indexOf(q.replacementClass)) return lt.replace(n);
      var e = new RegExp("".concat(q.familyPrefix, "-.*"));

      if (delete a[0].attributes.id, a[0].attributes["class"]) {
        var i = a[0].attributes["class"].split(" ").reduce(function (n, t) {
          return t === q.replacementClass || t.match(e) ? n.toSvg.push(t) : n.toNode.push(t), n;
        }, {
          toNode: [],
          toSvg: []
        });
        a[0].attributes["class"] = i.toSvg.join(" "), 0 === i.toNode.length ? t.removeAttribute("class") : t.setAttribute("class", i.toNode.join(" "));
      }

      var r = a.map(function (n) {
        return ln(n);
      }).join("\n");
      t.setAttribute("data-fa-i2svg", ""), t.innerHTML = r;
    }
  };

  function ut(n) {
    n();
  }

  function mt(n, t) {
    var a = "function" == typeof t ? t : ot;
    if (0 === n.length) a();else {
      var e = ut;
      "async" === q.mutateApproach && (e = y.requestAnimationFrame || ut), e(function () {
        var t = !0 === q.autoReplaceSvg ? lt.replace : lt[q.autoReplaceSvg] || lt.replace,
            e = rt("mutate");
        n.map(t), e(), a();
      });
    }
  }

  var dt = !1;

  function vt() {
    dt = !0;
  }

  function pt() {
    dt = !1;
  }

  var bt = null;

  function gt(n) {
    if (w && q.observeMutations) {
      var t = n.treeCallback,
          a = void 0 === t ? ot : t,
          e = n.nodeCallback,
          i = void 0 === e ? ot : e,
          r = n.pseudoElementsCallback,
          o = void 0 === r ? ot : r,
          c = n.observeMutationsRoot,
          f = void 0 === c ? k : c;
      bt = new w(function (n) {
        if (!dt) {
          var t = jn();
          G(n).forEach(function (n) {
            if ("childList" === n.type && n.addedNodes.length > 0 && !ct(n.addedNodes[0]) && (q.searchPseudoElements && o(n.target), a(n.target)), "attributes" === n.type && n.target.parentNode && q.searchPseudoElements && o(n.target.parentNode), "attributes" === n.type && ct(n.target) && ~T.indexOf(n.attributeName)) if ("class" === n.attributeName && function (n) {
              var t = n.getAttribute ? n.getAttribute("data-prefix") : null,
                  a = n.getAttribute ? n.getAttribute("data-icon") : null;
              return t && a;
            }(n.target)) {
              var e = _n(J(n.target)),
                  r = e.prefix,
                  c = e.iconName;

              n.target.setAttribute("data-prefix", r || t), c && n.target.setAttribute("data-icon", c);
            } else (f = n.target) && f.classList && f.classList.contains && f.classList.contains(q.replacementClass) && i(n.target);
            var f;
          });
        }
      }), z && bt.observe(f, {
        childList: !0,
        attributes: !0,
        characterData: !0,
        subtree: !0
      });
    }
  }

  function ht(n) {
    var t = n.getAttribute("style"),
        a = [];
    return t && (a = t.split(";").reduce(function (n, t) {
      var a = t.split(":"),
          e = a[0],
          i = a.slice(1);
      return e && i.length > 0 && (n[e] = i.join(":").trim()), n;
    }, {})), a;
  }

  function yt(n) {
    var t = n.getAttribute("data-prefix"),
        a = n.getAttribute("data-icon"),
        e = void 0 !== n.innerText ? n.innerText.trim() : "",
        i = _n(J(n));

    return i.prefix || (i.prefix = jn()), t && a && (i.prefix = t, i.iconName = a), i.iconName && i.prefix || i.prefix && e.length > 0 && (i.iconName = function (n, t) {
      return (wn[n] || {})[t];
    }(i.prefix, n.innerText) || Cn(i.prefix, dn(n.innerText))), i;
  }

  function kt(n) {
    var t = G(n.attributes).reduce(function (n, t) {
      return "class" !== n.name && "style" !== n.name && (n[t.name] = t.value), n;
    }, {}),
        a = n.getAttribute("title"),
        e = n.getAttribute("data-fa-title-id");
    return q.autoA11y && (a ? t["aria-labelledby"] = "".concat(q.replacementClass, "-title-").concat(e || K()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
  }

  function wt(n) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
      styleParser: !0
    },
        a = yt(n),
        e = a.iconName,
        r = a.prefix,
        o = a.rest,
        c = kt(n),
        f = Rn("parseNodeAttributes", {}, n),
        s = t.styleParser ? ht(n) : [];
    return i({
      iconName: e,
      title: n.getAttribute("title"),
      titleId: n.getAttribute("data-fa-title-id"),
      prefix: r,
      transform: U,
      mask: {
        iconName: null,
        prefix: null,
        rest: []
      },
      maskId: null,
      symbol: !1,
      extra: {
        classes: o,
        styles: s,
        attributes: c
      }
    }, f);
  }

  var xt = on.styles;

  function zt(n) {
    var t = "nest" === q.autoReplaceSvg ? wt(n, {
      styleParser: !1
    }) : wt(n);
    return ~t.extra.classes.indexOf("fa-layers-text") ? Dn("generateLayersText", n, t) : Dn("generateSvgReplacementMutation", n, t);
  }

  function Nt(n) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    if (!z) return Promise.resolve();

    var a = k.documentElement.classList,
        e = function e(n) {
      return a.add("".concat("fontawesome-i2svg", "-").concat(n));
    },
        i = function i(n) {
      return a.remove("".concat("fontawesome-i2svg", "-").concat(n));
    },
        r = q.autoFetchSvg ? Object.keys(O) : Object.keys(xt),
        o = [".".concat("fa-layers-text", ":not([").concat("data-fa-i2svg", "])")].concat(r.map(function (n) {
      return ".".concat(n, ":not([").concat("data-fa-i2svg", "])");
    })).join(", ");

    if (0 === o.length) return Promise.resolve();
    var c = [];

    try {
      c = G(n.querySelectorAll(o));
    } catch (n) {}

    if (!(c.length > 0)) return Promise.resolve();
    e("pending"), i("complete");
    var f = rt("onTree"),
        s = c.reduce(function (n, t) {
      try {
        var a = zt(t);
        a && n.push(a);
      } catch (n) {
        M || "MissingIcon" === n.name && console.error(n);
      }

      return n;
    }, []);
    return new Promise(function (n, a) {
      Promise.all(s).then(function (a) {
        mt(a, function () {
          e("active"), e("complete"), i("pending"), "function" == typeof t && t(), f(), n();
        });
      })["catch"](function (n) {
        f(), a(n);
      });
    });
  }

  function At(n) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    zt(n).then(function (n) {
      n && mt([n], t);
    });
  }

  var Mt = function Mt(n) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = t.transform,
        e = void 0 === a ? U : a,
        r = t.symbol,
        o = void 0 !== r && r,
        c = t.mask,
        f = void 0 === c ? null : c,
        s = t.maskId,
        l = void 0 === s ? null : s,
        u = t.title,
        m = void 0 === u ? null : u,
        d = t.titleId,
        v = void 0 === d ? null : d,
        p = t.classes,
        b = void 0 === p ? [] : p,
        g = t.attributes,
        h = void 0 === g ? {} : g,
        y = t.styles,
        k = void 0 === y ? {} : y;

    if (n) {
      var w = n.prefix,
          x = n.iconName,
          z = n.icon;
      return Kn(i({
        type: "icon"
      }, n), function () {
        return Vn("beforeDOMElementCreation", {
          iconDefinition: n,
          params: t
        }), q.autoA11y && (m ? h["aria-labelledby"] = "".concat(q.replacementClass, "-title-").concat(v || K()) : (h["aria-hidden"] = "true", h.focusable = "false")), Gn({
          icons: {
            main: $n(z),
            mask: f ? $n(f.icon) : {
              found: !1,
              width: null,
              height: null,
              icon: {}
            }
          },
          prefix: w,
          iconName: x,
          transform: i(i({}, U), e),
          symbol: o,
          title: m,
          maskId: l,
          titleId: v,
          extra: {
            attributes: h,
            styles: k,
            classes: b
          }
        });
      });
    }
  },
      Ot = {
    mixout: function mixout() {
      return {
        icon: (n = Mt, function (t) {
          var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              e = (t || {}).icon ? t : Wn(t || {}),
              r = a.mask;
          return r && (r = (r || {}).icon ? r : Wn(r || {})), n(e, i(i({}, a), {}, {
            mask: r
          }));
        })
      };
      var n;
    },
    hooks: function hooks() {
      return {
        mutationObserverCallbacks: function mutationObserverCallbacks(n) {
          return n.treeCallback = Nt, n.nodeCallback = At, n;
        }
      };
    },
    provides: function provides(n) {
      n.i2svg = function (n) {
        var t = n.node,
            a = void 0 === t ? k : t,
            e = n.callback;
        return Nt(a, void 0 === e ? function () {} : e);
      }, n.generateSvgReplacementMutation = function (n, t) {
        var a = t.iconName,
            e = t.title,
            i = t.titleId,
            r = t.prefix,
            o = t.transform,
            c = t.symbol,
            s = t.mask,
            l = t.maskId,
            u = t.extra;
        return new Promise(function (t, m) {
          Promise.all([tt(a, r), s.iconName ? tt(s.iconName, s.prefix) : Promise.resolve({
            found: !1,
            width: 512,
            height: 512,
            icon: {}
          })]).then(function (s) {
            var m = f(s, 2),
                d = m[0],
                v = m[1];
            t([n, Gn({
              icons: {
                main: d,
                mask: v
              },
              prefix: r,
              iconName: a,
              transform: o,
              symbol: c,
              maskId: l,
              title: e,
              titleId: i,
              extra: u,
              watchable: !0
            })]);
          })["catch"](m);
        });
      }, n.generateAbstractIcon = function (n) {
        var t,
            a = n.children,
            e = n.attributes,
            i = n.main,
            r = n.transform,
            o = Z(n.styles);
        return o.length > 0 && (e.style = o), $(r) && (t = Dn("generateAbstractTransformGrouping", {
          main: i,
          transform: r,
          containerWidth: i.width,
          iconWidth: i.width
        })), a.push(t || i.icon), {
          children: a,
          attributes: e
        };
      };
    }
  },
      St = {
    mixout: function mixout() {
      return {
        layer: function layer(n) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              a = t.classes,
              e = void 0 === a ? [] : a;
          return Kn({
            type: "layer"
          }, function () {
            Vn("beforeDOMElementCreation", {
              assembler: n,
              params: t
            });
            var a = [];
            return n(function (n) {
              Array.isArray(n) ? n.map(function (n) {
                a = a.concat(n["abstract"]);
              }) : a = a.concat(n["abstract"]);
            }), [{
              tag: "span",
              attributes: {
                "class": ["".concat(q.familyPrefix, "-layers")].concat(s(e)).join(" ")
              },
              children: a
            }];
          });
        }
      };
    }
  },
      Ct = {
    mixout: function mixout() {
      return {
        counter: function counter(n) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              a = t.title,
              e = void 0 === a ? null : a,
              i = t.classes,
              r = void 0 === i ? [] : i,
              o = t.attributes,
              c = void 0 === o ? {} : o,
              f = t.styles,
              l = void 0 === f ? {} : f;
          return Kn({
            type: "counter",
            content: n
          }, function () {
            return Vn("beforeDOMElementCreation", {
              content: n,
              params: t
            }), Qn({
              content: n.toString(),
              title: e,
              extra: {
                attributes: c,
                styles: l,
                classes: ["".concat(q.familyPrefix, "-layers-counter")].concat(s(r))
              }
            });
          });
        }
      };
    }
  },
      Et = {
    mixout: function mixout() {
      return {
        text: function text(n) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              a = t.transform,
              e = void 0 === a ? U : a,
              r = t.title,
              o = void 0 === r ? null : r,
              c = t.classes,
              f = void 0 === c ? [] : c,
              l = t.attributes,
              u = void 0 === l ? {} : l,
              m = t.styles,
              d = void 0 === m ? {} : m;
          return Kn({
            type: "text",
            content: n
          }, function () {
            return Vn("beforeDOMElementCreation", {
              content: n,
              params: t
            }), Jn({
              content: n,
              transform: i(i({}, U), e),
              title: o,
              extra: {
                attributes: u,
                styles: d,
                classes: ["".concat(q.familyPrefix, "-layers-text")].concat(s(f))
              }
            });
          });
        }
      };
    },
    provides: function provides(n) {
      n.generateLayersText = function (n, t) {
        var a = t.title,
            e = t.transform,
            i = t.extra,
            r = null,
            o = null;

        if (N) {
          var c = parseInt(getComputedStyle(n).fontSize, 10),
              f = n.getBoundingClientRect();
          r = f.width / c, o = f.height / c;
        }

        return q.autoA11y && !a && (i.attributes["aria-hidden"] = "true"), Promise.resolve([n, Jn({
          content: n.innerHTML,
          width: r,
          height: o,
          transform: e,
          title: a,
          extra: i,
          watchable: !0
        })]);
      };
    }
  },
      Lt = new RegExp('"', "ug"),
      jt = [1105920, 1112319];

  function Pt(n, t) {
    var a = "".concat("data-fa-pseudo-element-pending").concat(t.replace(":", "-"));
    return new Promise(function (e, r) {
      if (null !== n.getAttribute(a)) return e();
      var o,
          c,
          f,
          s = G(n.children).filter(function (n) {
        return n.getAttribute("data-fa-pseudo-element") === t;
      })[0],
          l = y.getComputedStyle(n, t),
          u = l.getPropertyValue("font-family").match(j),
          m = l.getPropertyValue("font-weight"),
          d = l.getPropertyValue("content");
      if (s && !u) return n.removeChild(s), e();

      if (u && "none" !== d && "" !== d) {
        var v = l.getPropertyValue("content"),
            p = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(u[2]) ? S[u[2].toLowerCase()] : P[m],
            b = function (n) {
          var t,
              a,
              e,
              i,
              r,
              o = n.replace(Lt, ""),
              c = (a = 0, i = (t = o).length, (r = t.charCodeAt(a)) >= 55296 && r <= 56319 && i > a + 1 && (e = t.charCodeAt(a + 1)) >= 56320 && e <= 57343 ? 1024 * (r - 55296) + e - 56320 + 65536 : r),
              f = c >= jt[0] && c <= jt[1],
              s = 2 === o.length && o[0] === o[1];
          return {
            value: dn(s ? o[0] : o),
            isSecondary: f || s
          };
        }(v),
            g = b.value,
            h = b.isSecondary,
            w = u[0].startsWith("FontAwesome"),
            x = Cn(p, g),
            z = x;

        if (w) {
          var N = (c = zn[o = g], f = Cn("fas", o), c || (f ? {
            prefix: "fas",
            iconName: f
          } : null) || {
            prefix: null,
            iconName: null
          });
          N.iconName && N.prefix && (x = N.iconName, p = N.prefix);
        }

        if (!x || h || s && s.getAttribute("data-prefix") === p && s.getAttribute("data-icon") === z) e();else {
          n.setAttribute(a, z), s && n.removeChild(s);
          var A = {
            iconName: null,
            title: null,
            titleId: null,
            prefix: null,
            transform: U,
            symbol: !1,
            mask: {
              iconName: null,
              prefix: null,
              rest: []
            },
            maskId: null,
            extra: {
              classes: [],
              styles: {},
              attributes: {}
            }
          },
              M = A.extra;
          M.attributes["data-fa-pseudo-element"] = t, tt(x, p).then(function (r) {
            var o = Gn(i(i({}, A), {}, {
              icons: {
                main: r,
                mask: {
                  prefix: null,
                  iconName: null,
                  rest: []
                }
              },
              prefix: p,
              iconName: z,
              extra: M,
              watchable: !0
            })),
                c = k.createElement("svg");
            "::before" === t ? n.insertBefore(c, n.firstChild) : n.appendChild(c), c.outerHTML = o.map(function (n) {
              return ln(n);
            }).join("\n"), n.removeAttribute(a), e();
          })["catch"](r);
        }
      } else e();
    });
  }

  function _t(n) {
    return Promise.all([Pt(n, "::before"), Pt(n, "::after")]);
  }

  function Ht(n) {
    return !(n.parentNode === document.head || ~A.indexOf(n.tagName.toUpperCase()) || n.getAttribute("data-fa-pseudo-element") || n.parentNode && "svg" === n.parentNode.tagName);
  }

  function Tt(n) {
    if (z) return new Promise(function (t, a) {
      var e = G(n.querySelectorAll("*")).filter(Ht).map(_t),
          i = rt("searchPseudoElements");
      vt(), Promise.all(e).then(function () {
        i(), pt(), t();
      })["catch"](function () {
        i(), pt(), a();
      });
    });
  }

  var It = !1,
      Yt = function Yt(n) {
    return n.toLowerCase().split(" ").reduce(function (n, t) {
      var a = t.toLowerCase().split("-"),
          e = a[0],
          i = a.slice(1).join("-");
      if (e && "h" === i) return n.flipX = !0, n;
      if (e && "v" === i) return n.flipY = !0, n;
      if (i = parseFloat(i), isNaN(i)) return n;

      switch (e) {
        case "grow":
          n.size = n.size + i;
          break;

        case "shrink":
          n.size = n.size - i;
          break;

        case "left":
          n.x = n.x - i;
          break;

        case "right":
          n.x = n.x + i;
          break;

        case "up":
          n.y = n.y - i;
          break;

        case "down":
          n.y = n.y + i;
          break;

        case "rotate":
          n.rotate = n.rotate + i;
      }

      return n;
    }, {
      size: 16,
      x: 0,
      y: 0,
      flipX: !1,
      flipY: !1,
      rotate: 0
    });
  },
      Ft = {
    x: 0,
    y: 0,
    width: "100%",
    height: "100%"
  };

  function Rt(n) {
    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
    return n.attributes && (n.attributes.fill || t) && (n.attributes.fill = "black"), n;
  }

  !function (n, t) {
    var a = t.mixoutsTo;
    Tn = n, In = {}, Object.keys(Yn).forEach(function (n) {
      -1 === Fn.indexOf(n) && delete Yn[n];
    }), Tn.forEach(function (n) {
      var t = n.mixout ? n.mixout() : {};

      if (Object.keys(t).forEach(function (n) {
        "function" == typeof t[n] && (a[n] = t[n]), "object" === r(t[n]) && Object.keys(t[n]).forEach(function (e) {
          a[n] || (a[n] = {}), a[n][e] = t[n][e];
        });
      }), n.hooks) {
        var e = n.hooks();
        Object.keys(e).forEach(function (n) {
          In[n] || (In[n] = []), In[n].push(e[n]);
        });
      }

      n.provides && n.provides(Yn);
    });
  }([en, Ot, St, Ct, Et, {
    hooks: function hooks() {
      return {
        mutationObserverCallbacks: function mutationObserverCallbacks(n) {
          return n.pseudoElementsCallback = Tt, n;
        }
      };
    },
    provides: function provides(n) {
      n.pseudoElements2svg = function (n) {
        var t = n.node,
            a = void 0 === t ? k : t;
        q.searchPseudoElements && Tt(a);
      };
    }
  }, {
    mixout: function mixout() {
      return {
        dom: {
          unwatch: function unwatch() {
            vt(), It = !0;
          }
        }
      };
    },
    hooks: function hooks() {
      return {
        bootstrap: function bootstrap() {
          gt(Rn("mutationObserverCallbacks", {}));
        },
        noAuto: function noAuto() {
          bt && bt.disconnect();
        },
        watch: function watch(n) {
          var t = n.observeMutationsRoot;
          It ? pt() : gt(Rn("mutationObserverCallbacks", {
            observeMutationsRoot: t
          }));
        }
      };
    }
  }, {
    mixout: function mixout() {
      return {
        parse: {
          transform: function transform(n) {
            return Yt(n);
          }
        }
      };
    },
    hooks: function hooks() {
      return {
        parseNodeAttributes: function parseNodeAttributes(n, t) {
          var a = t.getAttribute("data-fa-transform");
          return a && (n.transform = Yt(a)), n;
        }
      };
    },
    provides: function provides(n) {
      n.generateAbstractTransformGrouping = function (n) {
        var t = n.main,
            a = n.transform,
            e = n.containerWidth,
            r = n.iconWidth,
            o = {
          transform: "translate(".concat(e / 2, " 256)")
        },
            c = "translate(".concat(32 * a.x, ", ").concat(32 * a.y, ") "),
            f = "scale(".concat(a.size / 16 * (a.flipX ? -1 : 1), ", ").concat(a.size / 16 * (a.flipY ? -1 : 1), ") "),
            s = "rotate(".concat(a.rotate, " 0 0)"),
            l = {
          outer: o,
          inner: {
            transform: "".concat(c, " ").concat(f, " ").concat(s)
          },
          path: {
            transform: "translate(".concat(r / 2 * -1, " -256)")
          }
        };
        return {
          tag: "g",
          attributes: i({}, l.outer),
          children: [{
            tag: "g",
            attributes: i({}, l.inner),
            children: [{
              tag: t.icon.tag,
              children: t.icon.children,
              attributes: i(i({}, t.icon.attributes), l.path)
            }]
          }]
        };
      };
    }
  }, {
    hooks: function hooks() {
      return {
        parseNodeAttributes: function parseNodeAttributes(n, t) {
          var a = t.getAttribute("data-fa-mask"),
              e = a ? _n(a.split(" ").map(function (n) {
            return n.trim();
          })) : {
            prefix: null,
            iconName: null,
            rest: []
          };
          return e.prefix || (e.prefix = jn()), n.mask = e, n.maskId = t.getAttribute("data-fa-mask-id"), n;
        }
      };
    },
    provides: function provides(n) {
      n.generateAbstractMask = function (n) {
        var t,
            a = n.children,
            e = n.attributes,
            r = n.main,
            o = n.mask,
            c = n.maskId,
            f = n.transform,
            s = r.width,
            l = r.icon,
            u = o.width,
            m = o.icon,
            d = function (n) {
          var t = n.transform,
              a = n.containerWidth,
              e = n.iconWidth,
              i = {
            transform: "translate(".concat(a / 2, " 256)")
          },
              r = "translate(".concat(32 * t.x, ", ").concat(32 * t.y, ") "),
              o = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "),
              c = "rotate(".concat(t.rotate, " 0 0)");
          return {
            outer: i,
            inner: {
              transform: "".concat(r, " ").concat(o, " ").concat(c)
            },
            path: {
              transform: "translate(".concat(e / 2 * -1, " -256)")
            }
          };
        }({
          transform: f,
          containerWidth: u,
          iconWidth: s
        }),
            v = {
          tag: "rect",
          attributes: i(i({}, Ft), {}, {
            fill: "white"
          })
        },
            p = l.children ? {
          children: l.children.map(Rt)
        } : {},
            b = {
          tag: "g",
          attributes: i({}, d.inner),
          children: [Rt(i({
            tag: l.tag,
            attributes: i(i({}, l.attributes), d.path)
          }, p))]
        },
            g = {
          tag: "g",
          attributes: i({}, d.outer),
          children: [b]
        },
            h = "mask-".concat(c || K()),
            y = "clip-".concat(c || K()),
            k = {
          tag: "mask",
          attributes: i(i({}, Ft), {}, {
            id: h,
            maskUnits: "userSpaceOnUse",
            maskContentUnits: "userSpaceOnUse"
          }),
          children: [v, g]
        },
            w = {
          tag: "defs",
          children: [{
            tag: "clipPath",
            attributes: {
              id: y
            },
            children: (t = m, "g" === t.tag ? t.children : [t])
          }, k]
        };

        return a.push(w, {
          tag: "rect",
          attributes: i({
            fill: "currentColor",
            "clip-path": "url(#".concat(y, ")"),
            mask: "url(#".concat(h, ")")
          }, Ft)
        }), {
          children: a,
          attributes: e
        };
      };
    }
  }, {
    provides: function provides(n) {
      var t = !1;
      y.matchMedia && (t = y.matchMedia("(prefers-reduced-motion: reduce)").matches), n.missingIconAbstract = function () {
        var n = [],
            a = {
          fill: "currentColor"
        },
            e = {
          attributeType: "XML",
          repeatCount: "indefinite",
          dur: "2s"
        };
        n.push({
          tag: "path",
          attributes: i(i({}, a), {}, {
            d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
          })
        });
        var r = i(i({}, e), {}, {
          attributeName: "opacity"
        }),
            o = {
          tag: "circle",
          attributes: i(i({}, a), {}, {
            cx: "256",
            cy: "364",
            r: "28"
          }),
          children: []
        };
        return t || o.children.push({
          tag: "animate",
          attributes: i(i({}, e), {}, {
            attributeName: "r",
            values: "28;14;28;28;14;28;"
          })
        }, {
          tag: "animate",
          attributes: i(i({}, r), {}, {
            values: "1;0;1;1;0;1;"
          })
        }), n.push(o), n.push({
          tag: "path",
          attributes: i(i({}, a), {}, {
            opacity: "1",
            d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
          }),
          children: t ? [] : [{
            tag: "animate",
            attributes: i(i({}, r), {}, {
              values: "1;0;0;0;0;1;"
            })
          }]
        }), t || n.push({
          tag: "path",
          attributes: i(i({}, a), {}, {
            opacity: "0",
            d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
          }),
          children: [{
            tag: "animate",
            attributes: i(i({}, r), {}, {
              values: "0;0;1;1;0;0;"
            })
          }]
        }), {
          tag: "g",
          attributes: {
            "class": "missing"
          },
          children: n
        };
      };
    }
  }, {
    hooks: function hooks() {
      return {
        parseNodeAttributes: function parseNodeAttributes(n, t) {
          var a = t.getAttribute("data-fa-symbol"),
              e = null !== a && ("" === a || a);
          return n.symbol = e, n;
        }
      };
    }
  }], {
    mixoutsTo: Xn
  });
  var Vt = Xn.library,
      Dt = Xn.dom,
      Wt = {
    prefix: "far",
    iconName: "chevron-down",
    icon: [448, 512, [], "f078", "M441.9 167.3l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L224 328.2 42.9 147.5c-4.7-4.7-12.3-4.7-17 0L6.1 167.3c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17z"]
  },
      qt = {
    prefix: "far",
    iconName: "chevron-left",
    icon: [256, 512, [], "f053", "M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z"]
  },
      Bt = {
    prefix: "far",
    iconName: "chevron-right",
    icon: [256, 512, [], "f054", "M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"]
  },
      Xt = {
    prefix: "far",
    iconName: "chevron-up",
    icon: [448, 512, [], "f077", "M6.101 359.293L25.9 379.092c4.686 4.686 12.284 4.686 16.971 0L224 198.393l181.13 180.698c4.686 4.686 12.284 4.686 16.971 0l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L232.485 132.908c-4.686-4.686-12.284-4.686-16.971 0L6.101 342.322c-4.687 4.687-4.687 12.285 0 16.971z"]
  },
      Ut = {
    prefix: "far",
    iconName: "download",
    icon: [576, 512, [], "f019", "M528 288h-92.1l46.1-46.1c30.1-30.1 8.8-81.9-33.9-81.9h-64V48c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v112h-64c-42.6 0-64.2 51.7-33.9 81.9l46.1 46.1H48c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V336c0-26.5-21.5-48-48-48zm-400-80h112V48h96v160h112L288 368 128 208zm400 256H48V336h140.1l65.9 65.9c18.8 18.8 49.1 18.7 67.9 0l65.9-65.9H528v128zm-88-64c0-13.3 10.7-24 24-24s24 10.7 24 24-10.7 24-24 24-24-10.7-24-24z"]
  },
      Kt = {
    prefix: "far",
    iconName: "mailbox",
    icon: [576, 512, [], "f813", "M432 64H144A144 144 0 0 0 0 208v208a32 32 0 0 0 32 32h512a32 32 0 0 0 32-32V208A144 144 0 0 0 432 64zM240 400H48V208a96 96 0 0 1 192 0zm288 0H288V208c0-37.05-14.38-70.48-37.37-96H432a96.1 96.1 0 0 1 96 96zm-64-208H344a8 8 0 0 0-8 8v32a8 8 0 0 0 8 8h72v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm-280 0h-80a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8z"]
  },
      Gt = {
    prefix: "far",
    iconName: "search",
    icon: [512, 512, [], "f002", "M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"]
  },
      Jt = {
    prefix: "far",
    iconName: "spinner-third",
    icon: [512, 512, [], "f3f4", "M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z"]
  },
      Qt = {
    prefix: "far",
    iconName: "th-list",
    icon: [512, 512, [], "f00b", "M0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48H48C21.49 32 0 53.49 0 80zm472 224H197.333v-96H472v96zm0 40v84c0 6.627-5.373 12-12 12H197.333v-96H472zM40 208h117.333v96H40v-96zm157.333-40V72H460c6.627 0 12 5.373 12 12v84H197.333zm-40-96v96H40V84c0-6.627 5.373-12 12-12h105.333zM40 344h117.333v96H52c-6.627 0-12-5.373-12-12v-84z"]
  },
      Zt = {
    prefix: "fal",
    iconName: "arrow-left",
    icon: [448, 512, [], "f060", "M231.536 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273H436c6.627 0 12-5.373 12-12v-10c0-6.627-5.373-12-12-12H60.113L238.607 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L3.515 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z"]
  },
      $t = {
    prefix: "fal",
    iconName: "arrow-right",
    icon: [448, 512, [], "f061", "M216.464 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887L209.393 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L233.434 36.465c-4.686-4.687-12.284-4.687-16.97 0z"]
  },
      na = {
    prefix: "fal",
    iconName: "bars",
    icon: [448, 512, [], "f0c9", "M442 114H6a6 6 0 0 1-6-6V84a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6z"]
  },
      ta = {
    prefix: "fal",
    iconName: "minus-circle",
    icon: [512, 512, [], "f056", "M140 274c-6.6 0-12-5.4-12-12v-12c0-6.6 5.4-12 12-12h232c6.6 0 12 5.4 12 12v12c0 6.6-5.4 12-12 12H140zm364-18c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-32 0c0-119.9-97.3-216-216-216-119.9 0-216 97.3-216 216 0 119.9 97.3 216 216 216 119.9 0 216-97.3 216-216z"]
  },
      aa = {
    prefix: "fal",
    iconName: "plus-circle",
    icon: [512, 512, [], "f055", "M384 250v12c0 6.6-5.4 12-12 12h-98v98c0 6.6-5.4 12-12 12h-12c-6.6 0-12-5.4-12-12v-98h-98c-6.6 0-12-5.4-12-12v-12c0-6.6 5.4-12 12-12h98v-98c0-6.6 5.4-12 12-12h12c6.6 0 12 5.4 12 12v98h98c6.6 0 12 5.4 12 12zm120 6c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-32 0c0-119.9-97.3-216-216-216-119.9 0-216 97.3-216 216 0 119.9 97.3 216 216 216 119.9 0 216-97.3 216-216z"]
  },
      ea = {
    prefix: "fal",
    iconName: "times",
    icon: [320, 512, [], "f00d", "M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"]
  },
      ia = {
    prefix: "fas",
    iconName: "envelope",
    icon: [512, 512, [], "f0e0", "M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"]
  },
      ra = {
    prefix: "fas",
    iconName: "play-circle",
    icon: [512, 512, [], "f144", "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"]
  },
      oa = {
    prefix: "fas",
    iconName: "rss",
    icon: [448, 512, [], "f09e", "M128.081 415.959c0 35.369-28.672 64.041-64.041 64.041S0 451.328 0 415.959s28.672-64.041 64.041-64.041 64.04 28.673 64.04 64.041zm175.66 47.25c-8.354-154.6-132.185-278.587-286.95-286.95C7.656 175.765 0 183.105 0 192.253v48.069c0 8.415 6.49 15.472 14.887 16.018 111.832 7.284 201.473 96.702 208.772 208.772.547 8.397 7.604 14.887 16.018 14.887h48.069c9.149.001 16.489-7.655 15.995-16.79zm144.249.288C439.596 229.677 251.465 40.445 16.503 32.01 7.473 31.686 0 38.981 0 48.016v48.068c0 8.625 6.835 15.645 15.453 15.999 191.179 7.839 344.627 161.316 352.465 352.465.353 8.618 7.373 15.453 15.999 15.453h48.068c9.034-.001 16.329-7.474 16.005-16.504z"]
  },
      ca = {
    prefix: "fab",
    iconName: "apple",
    icon: [384, 512, [], "f179", "M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"]
  },
      fa = {
    prefix: "fab",
    iconName: "facebook-f",
    icon: [320, 512, [], "f39e", "M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"]
  },
      sa = {
    prefix: "fab",
    iconName: "instagram",
    icon: [448, 512, [], "f16d", "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]
  },
      la = {
    prefix: "fab",
    iconName: "linkedin-in",
    icon: [448, 512, [], "f0e1", "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"]
  },
      ua = {
    prefix: "fab",
    iconName: "reddit-alien",
    icon: [512, 512, [], "f281", "M440.3 203.5c-15 0-28.2 6.2-37.9 15.9-35.7-24.7-83.8-40.6-137.1-42.3L293 52.3l88.2 19.8c0 21.6 17.6 39.2 39.2 39.2 22 0 39.7-18.1 39.7-39.7s-17.6-39.7-39.7-39.7c-15.4 0-28.7 9.3-35.3 22l-97.4-21.6c-4.9-1.3-9.7 2.2-11 7.1L246.3 177c-52.9 2.2-100.5 18.1-136.3 42.8-9.7-10.1-23.4-16.3-38.4-16.3-55.6 0-73.8 74.6-22.9 100.1-1.8 7.9-2.6 16.3-2.6 24.7 0 83.8 94.4 151.7 210.3 151.7 116.4 0 210.8-67.9 210.8-151.7 0-8.4-.9-17.2-3.1-25.1 49.9-25.6 31.5-99.7-23.8-99.7zM129.4 308.9c0-22 17.6-39.7 39.7-39.7 21.6 0 39.2 17.6 39.2 39.7 0 21.6-17.6 39.2-39.2 39.2-22 .1-39.7-17.6-39.7-39.2zm214.3 93.5c-36.4 36.4-139.1 36.4-175.5 0-4-3.5-4-9.7 0-13.7 3.5-3.5 9.7-3.5 13.2 0 27.8 28.5 120 29 149 0 3.5-3.5 9.7-3.5 13.2 0 4.1 4 4.1 10.2.1 13.7zm-.8-54.2c-21.6 0-39.2-17.6-39.2-39.2 0-22 17.6-39.7 39.2-39.7 22 0 39.7 17.6 39.7 39.7-.1 21.5-17.7 39.2-39.7 39.2z"]
  },
      ma = {
    prefix: "fab",
    iconName: "spotify",
    icon: [496, 512, [], "f1bc", "M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"]
  },
      da = {
    prefix: "fab",
    iconName: "twitter",
    icon: [512, 512, [], "f099", "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]
  },
      va = {
    prefix: "fab",
    iconName: "whatsapp",
    icon: [448, 512, [], "f232", "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"]
  },
      pa = {
    prefix: "fab",
    iconName: "youtube",
    icon: [576, 512, [], "f167", "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]
  };
  Vt.add(Xt, Wt, qt, Bt, Ut, Kt, Jt, Gt, Qt, Zt, $t, na, ta, aa, ea, ia, oa, ra, ca, fa, sa, la, ua, ma, da, va, pa), Dt.watch();
}]);
;/*})'"*/
;/*})'"*/
