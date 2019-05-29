/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssfilters-csspointerevents-csstransforms-csstransforms3d-csstransitions-cssvhunit-cssvwunit-pointerevents-preserve3d-touchevents-videoautoplay-setclasses !*/
 !function (A, e, t) {
    function n(A, e) {
        return typeof A === e
    }

    function o() {
        var A, e, t, o, r, i, s;
        for (var a in y)if (y.hasOwnProperty(a)) {
            if (A = [], e = y[a], e.name && (A.push(e.name.toLowerCase()), e.options && e.options.aliases && e.options.aliases.length))for (t = 0; t < e.options.aliases.length; t++)A.push(e.options.aliases[t].toLowerCase());
            for (o = n(e.fn, "function") ? e.fn() : e.fn, r = 0; r < A.length; r++)i = A[r], s = i.split("."), 1 === s.length ? Modernizr[s[0]] = o : (!Modernizr[s[0]] || Modernizr[s[0]] instanceof Boolean || (Modernizr[s[0]] = new Boolean(Modernizr[s[0]])), Modernizr[s[0]][s[1]] = o), w.push((o ? "" : "no-") + s.join("-"))
        }
    }

    function r(A) {
        var e = R.className, t = Modernizr._config.classPrefix || "";
        if (T && (e = e.baseVal), Modernizr._config.enableJSClass) {
            var n = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
            e = e.replace(n, "$1" + t + "js$2")
        }
        Modernizr._config.enableClasses && (e += " " + t + A.join(" " + t), T ? R.className.baseVal = e : R.className = e)
    }

    function i() {
        return "function" != typeof e.createElement ? e.createElement(arguments[0]) : T ? e.createElementNS.call(e, "http://www.w3.org/2000/svg", arguments[0]) : e.createElement.apply(e, arguments)
    }

    function s() {
        var A = e.body;
        return A || (A = i(T ? "svg" : "body"), A.fake = !0), A
    }

    function a(A, t, n, o) {
        var r, a, l, d, c = "modernizr", u = i("div"), p = s();
        if (parseInt(n, 10))for (; n--;)l = i("div"), l.id = o ? o[n] : c + (n + 1), u.appendChild(l);
        return r = i("style"), r.type = "text/css", r.id = "s" + c, (p.fake ? p : u).appendChild(r), p.appendChild(u), r.styleSheet ? r.styleSheet.cssText = A : r.appendChild(e.createTextNode(A)), u.id = c, p.fake && (p.style.background = "", p.style.overflow = "hidden", d = R.style.overflow, R.style.overflow = "hidden", R.appendChild(p)), a = t(u, A), p.fake ? (p.parentNode.removeChild(p), R.style.overflow = d, R.offsetHeight) : u.parentNode.removeChild(u), !!a
    }

    function l(A, e) {
        return !!~("" + A).indexOf(e)
    }

    function d(A) {
        return A.replace(/([a-z])-([a-z])/g, function (A, e, t) {
            return e + t.toUpperCase()
        }).replace(/^-/, "")
    }

    function c(A, e) {
        return function () {
            return A.apply(e, arguments)
        }
    }

    function u(A, e, t) {
        var o;
        for (var r in A)if (A[r] in e)return t === !1 ? A[r] : (o = e[A[r]], n(o, "function") ? c(o, t || e) : o);
        return !1
    }

    function p(A) {
        return A.replace(/([A-Z])/g, function (A, e) {
            return "-" + e.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function f(e, n) {
        var o = e.length;
        if ("CSS" in A && "supports" in A.CSS) {
            for (; o--;)if (A.CSS.supports(p(e[o]), n))return !0;
            return !1
        }
        if ("CSSSupportsRule" in A) {
            for (var r = []; o--;)r.push("(" + p(e[o]) + ":" + n + ")");
            return r = r.join(" or "), a("@supports (" + r + ") { #modernizr { position: absolute; } }", function (A) {
                return "absolute" == getComputedStyle(A, null).position
            })
        }
        return t
    }

    function h(A, e, o, r) {
        function s() {
            c && (delete S.style, delete S.modElem)
        }

        if (r = n(r, "undefined") ? !1 : r, !n(o, "undefined")) {
            var a = f(A, o);
            if (!n(a, "undefined"))return a
        }
        for (var c, u, p, h, m, g = ["modernizr", "tspan", "samp"]; !S.style && g.length;)c = !0, S.modElem = i(g.shift()), S.style = S.modElem.style;
        for (p = A.length, u = 0; p > u; u++)if (h = A[u], m = S.style[h], l(h, "-") && (h = d(h)), S.style[h] !== t) {
            if (r || n(o, "undefined"))return s(), "pfx" == e ? h : !0;
            try {
                S.style[h] = o
            } catch (v) {
            }
            if (S.style[h] != m)return s(), "pfx" == e ? h : !0
        }
        return s(), !1
    }

    function m(A, e, t, o, r) {
        var i = A.charAt(0).toUpperCase() + A.slice(1), s = (A + " " + Z.join(i + " ") + i).split(" ");
        return n(e, "string") || n(e, "undefined") ? h(s, e, o, r) : (s = (A + " " + Q.join(i + " ") + i).split(" "), u(s, e, t))
    }

    function g(A, e, n) {
        return m(A, t, t, e, n)
    }

    function v(A, e) {
        if ("object" == typeof A)for (var t in A)M(A, t) && v(t, A[t]); else {
            A = A.toLowerCase();
            var n = A.split("."), o = Modernizr[n[0]];
            if (2 == n.length && (o = o[n[1]]), "undefined" != typeof o)return Modernizr;
            e = "function" == typeof e ? e() : e, 1 == n.length ? Modernizr[n[0]] = e : (!Modernizr[n[0]] || Modernizr[n[0]] instanceof Boolean || (Modernizr[n[0]] = new Boolean(Modernizr[n[0]])), Modernizr[n[0]][n[1]] = e), r([(e && 0 != e ? "" : "no-") + n.join("-")]), Modernizr._trigger(A, e)
        }
        return Modernizr
    }

    var w = [], y = [], E = {
        _version: "3.3.1", _config: {classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0}, _q: [], on: function (A, e) {
            var t = this;
            setTimeout(function () {
                e(t[A])
            }, 0)
        }, addTest: function (A, e, t) {
            y.push({name: A, fn: e, options: t})
        }, addAsyncTest: function (A) {
            y.push({name: null, fn: A})
        }
    }, Modernizr = function () {
    };
    Modernizr.prototype = E, Modernizr = new Modernizr;
    var R = e.documentElement, T = "svg" === R.nodeName.toLowerCase(), B = E._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    E._prefixes = B, Modernizr.addTest("csspointerevents", function () {
        var A = i("a").style;
        return A.cssText = "pointer-events:auto", "auto" === A.pointerEvents
    }), Modernizr.addTest("preserve3d", function () {
        var A = i("a"), e = i("a");
        A.style.cssText = "display: block; transform-style: preserve-3d; transform-origin: right; transform: rotateY(40deg);", e.style.cssText = "display: block; width: 9px; height: 1px; background: #000; transform-origin: right; transform: rotateY(40deg);", A.appendChild(e), R.appendChild(A);
        var t = e.getBoundingClientRect();
        return R.removeChild(A), t.width && t.width < 4
    });
    var F = function () {
        function A(A, e) {
            var o;
            return A ? (e && "string" != typeof e || (e = i(e || "div")), A = "on" + A, o = A in e, !o && n && (e.setAttribute || (e = i("div")), e.setAttribute(A, ""), o = "function" == typeof e[A], e[A] !== t && (e[A] = t), e.removeAttribute(A)), o) : !1
        }

        var n = !("onblur" in e.documentElement);
        return A
    }();
    E.hasEvent = F;
    var G = "CSS" in A && "supports" in A.CSS, C = "supportsCSS" in A;
    Modernizr.addTest("supports", G || C);
    var x = "Moz O ms Webkit", Q = E._config.usePrefixes ? x.toLowerCase().split(" ") : [];
    E._domPrefixes = Q, Modernizr.addTest("pointerevents", function () {
        var A = !1, e = Q.length;
        for (A = Modernizr.hasEvent("pointerdown"); e-- && !A;)F(Q[e] + "pointerdown") && (A = !0);
        return A
    });
    var b = E.testStyles = a;
    Modernizr.addTest("touchevents", function () {
        var t;
        if ("ontouchstart" in A || A.DocumentTouch && e instanceof DocumentTouch)t = !0; else {
            var n = ["@media (", B.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
            b(n, function (A) {
                t = 9 === A.offsetTop
            })
        }
        return t
    }), b("#modernizr { height: 50vh; }", function (e) {
        var t = parseInt(A.innerHeight / 2, 10), n = parseInt((A.getComputedStyle ? getComputedStyle(e, null) : e.currentStyle).height, 10);
        Modernizr.addTest("cssvhunit", n == t)
    }), b("#modernizr { width: 50vw; }", function (e) {
        var t = parseInt(A.innerWidth / 2, 10), n = parseInt((A.getComputedStyle ? getComputedStyle(e, null) : e.currentStyle).width, 10);
        Modernizr.addTest("cssvwunit", n == t)
    });
    var Z = E._config.usePrefixes ? x.split(" ") : [];
    E._cssomPrefixes = Z;
    var Y = {elem: i("modernizr")};
    Modernizr._q.push(function () {
        delete Y.elem
    });
    var S = {style: Y.elem.style};
    Modernizr._q.unshift(function () {
        delete S.style
    }), E.testAllProps = m, E.testAllProps = g, Modernizr.addTest("cssfilters", function () {
        if (Modernizr.supports)return g("filter", "blur(2px)");
        var A = i("a");
        return A.style.cssText = B.join("filter:blur(2px); "), !!A.style.length && (e.documentMode === t || e.documentMode > 9)
    }), Modernizr.addTest("csstransforms", function () {
        return -1 === navigator.userAgent.indexOf("Android 2.") && g("transform", "scale(1)", !0)
    }), Modernizr.addTest("csstransforms3d", function () {
        var A = !!g("perspective", "1px", !0), e = Modernizr._config.usePrefixes;
        if (A && (!e || "webkitPerspective" in R.style)) {
            var t, n = "#modernizr{width:0;height:0}";
            Modernizr.supports ? t = "@supports (perspective: 1px)" : (t = "@media (transform-3d)", e && (t += ",(-webkit-transform-3d)")), t += "{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}", b(n + t, function (e) {
                A = 7 === e.offsetWidth && 18 === e.offsetHeight
            })
        }
        return A
    }), Modernizr.addTest("csstransitions", g("transition", "all", !0)), Modernizr.addTest("video", function () {
        var A = i("video"), e = !1;
        try {
            (e = !!A.canPlayType) && (e = new Boolean(e), e.ogg = A.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), e.h264 = A.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), e.webm = A.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""), e.vp9 = A.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, ""), e.hls = A.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, ""))
        } catch (t) {
        }
        return e
    });
    var M;
    !function () {
        var A = {}.hasOwnProperty;
        M = n(A, "undefined") || n(A.call, "undefined") ? function (A, e) {
            return e in A && n(A.constructor.prototype[e], "undefined")
        } : function (e, t) {
            return A.call(e, t)
        }
    }(), E._l = {}, E.on = function (A, e) {
        this._l[A] || (this._l[A] = []), this._l[A].push(e), Modernizr.hasOwnProperty(A) && setTimeout(function () {
            Modernizr._trigger(A, Modernizr[A])
        }, 0)
    }, E._trigger = function (A, e) {
        if (this._l[A]) {
            var t = this._l[A];
            setTimeout(function () {
                var A, n;
                for (A = 0; A < t.length; A++)(n = t[A])(e)
            }, 0), delete this._l[A]
        }
    }, Modernizr._q.push(function () {
        E.addTest = v
    }), Modernizr.addAsyncTest(function () {
        function A(i) {
            o++, clearTimeout(e);
            var s = i && "playing" === i.type || 0 !== r.currentTime;
            return !s && n > o ? void(e = setTimeout(A, t)) : (r.removeEventListener("playing", A, !1), v("videoautoplay", s), void r.parentNode.removeChild(r))
        }

        var e, t = 200, n = 5, o = 0, r = i("video"), s = r.style;
        if (!(Modernizr.video && "autoplay" in r))return void v("videoautoplay", !1);
        s.position = "absolute", s.height = 0, s.width = 0;
        try {
            if (Modernizr.video.ogg)r.src = "data:video/ogg;base64,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"; else {
                if (!Modernizr.video.h264)return void v("videoautoplay", !1);
                r.src = "data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAAAs1tZGF0AAACrgYF//+q3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0OCByMjYwMSBhMGNkN2QzIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNSAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTMgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MzoweDExMyBtZT1oZXggc3VibWU9NyBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0xIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MSA4eDhkY3Q9MSBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0tMiB0aHJlYWRzPTEgbG9va2FoZWFkX3RocmVhZHM9MSBzbGljZWRfdGhyZWFkcz0wIG5yPTAgZGVjaW1hdGU9MSBpbnRlcmxhY2VkPTAgYmx1cmF5X2NvbXBhdD0wIGNvbnN0cmFpbmVkX2ludHJhPTAgYmZyYW1lcz0zIGJfcHlyYW1pZD0yIGJfYWRhcHQ9MSBiX2JpYXM9MCBkaXJlY3Q9MSB3ZWlnaHRiPTEgb3Blbl9nb3A9MCB3ZWlnaHRwPTIga2V5aW50PTI1MCBrZXlpbnRfbWluPTEwIHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9Y3JmIG1idHJlZT0xIGNyZj0yMy4wIHFjb21wPTAuNjAgcXBtaW49MCBxcG1heD02OSBxcHN0ZXA9NCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAD2WIhAA3//728P4FNjuZQQAAAu5tb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAAAZAABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACGHRyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAEAAAAAAAAAZAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAgAAAAIAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAGQAAAAAAAEAAAAAAZBtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAACgAAAAEAFXEAAAAAAAtaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAFZpZGVvSGFuZGxlcgAAAAE7bWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAA+3N0YmwAAACXc3RzZAAAAAAAAAABAAAAh2F2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAgACAEgAAABIAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAxYXZjQwFkAAr/4QAYZ2QACqzZX4iIhAAAAwAEAAADAFA8SJZYAQAGaOvjyyLAAAAAGHN0dHMAAAAAAAAAAQAAAAEAAAQAAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAABRzdHN6AAAAAAAAAsUAAAABAAAAFHN0Y28AAAAAAAAAAQAAADAAAABidWR0YQAAAFptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABtZGlyYXBwbAAAAAAAAAAAAAAAAC1pbHN0AAAAJal0b28AAAAdZGF0YQAAAAEAAAAATGF2ZjU2LjQwLjEwMQ=="
            }
        } catch (a) {
            return void v("videoautoplay", !1)
        }
        r.setAttribute("autoplay", ""), r.style.cssText = "display:none", R.appendChild(r), setTimeout(function () {
            r.addEventListener("playing", A, !1), e = setTimeout(A, t)
        }, 0)
    }), o(), r(w), delete E.addTest, delete E.addAsyncTest;
    for (var P = 0; P < Modernizr._q.length; P++)Modernizr._q[P]();
    A.Modernizr = Modernizr
}(window, document);

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright ﾂｩ 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend(jQuery.easing,
    {
        def: 'easeOutQuad',
        swing: function (x, t, b, c, d) {
            //alert(jQuery.easing.default);
            return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
        },
        easeInQuad: function (x, t, b, c, d) {
            return c * (t /= d) * t + b;
        },
        easeOutQuad: function (x, t, b, c, d) {
            return -c * (t /= d) * (t - 2) + b;
        },
        easeInOutQuad: function (x, t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t + b;
            return -c / 2 * ((--t) * (t - 2) - 1) + b;
        },
        easeInCubic: function (x, t, b, c, d) {
            return c * (t /= d) * t * t + b;
        },
        easeOutCubic: function (x, t, b, c, d) {
            return c * ((t = t / d - 1) * t * t + 1) + b;
        },
        easeInOutCubic: function (x, t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
            return c / 2 * ((t -= 2) * t * t + 2) + b;
        },
        easeInQuart: function (x, t, b, c, d) {
            return c * (t /= d) * t * t * t + b;
        },
        easeOutQuart: function (x, t, b, c, d) {
            return -c * ((t = t / d - 1) * t * t * t - 1) + b;
        },
        easeInOutQuart: function (x, t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
            return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
        },
        easeInQuint: function (x, t, b, c, d) {
            return c * (t /= d) * t * t * t * t + b;
        },
        easeOutQuint: function (x, t, b, c, d) {
            return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
        },
        easeInOutQuint: function (x, t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
            return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
        },
        easeInSine: function (x, t, b, c, d) {
            return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
        },
        easeOutSine: function (x, t, b, c, d) {
            return c * Math.sin(t / d * (Math.PI / 2)) + b;
        },
        easeInOutSine: function (x, t, b, c, d) {
            return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
        },
        easeInExpo: function (x, t, b, c, d) {
            return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
        },
        easeOutExpo: function (x, t, b, c, d) {
            return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
        },
        easeInOutExpo: function (x, t, b, c, d) {
            if (t == 0) return b;
            if (t == d) return b + c;
            if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
            return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
        },
        easeInCirc: function (x, t, b, c, d) {
            return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
        },
        easeOutCirc: function (x, t, b, c, d) {
            return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
        },
        easeInOutCirc: function (x, t, b, c, d) {
            if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
            return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
        },
        easeInElastic: function (x, t, b, c, d) {
            var s = 1.70158;
            var p = 0;
            var a = c;
            if (t == 0) return b;
            if ((t /= d) == 1) return b + c;
            if (!p) p = d * .3;
            if (a < Math.abs(c)) {
                a = c;
                var s = p / 4;
            }
            else var s = p / (2 * Math.PI) * Math.asin(c / a);
            return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        },
        easeOutElastic: function (x, t, b, c, d) {
            var s = 1.70158;
            var p = 0;
            var a = c;
            if (t == 0) return b;
            if ((t /= d) == 1) return b + c;
            if (!p) p = d * .3;
            if (a < Math.abs(c)) {
                a = c;
                var s = p / 4;
            }
            else var s = p / (2 * Math.PI) * Math.asin(c / a);
            return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
        },
        easeInOutElastic: function (x, t, b, c, d) {
            var s = 1.70158;
            var p = 0;
            var a = c;
            if (t == 0) return b;
            if ((t /= d / 2) == 2) return b + c;
            if (!p) p = d * (.3 * 1.5);
            if (a < Math.abs(c)) {
                a = c;
                var s = p / 4;
            }
            else var s = p / (2 * Math.PI) * Math.asin(c / a);
            if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
            return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
        },
        easeInBack: function (x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            return c * (t /= d) * t * ((s + 1) * t - s) + b;
        },
        easeOutBack: function (x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
        },
        easeInOutBack: function (x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
            return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
        },
        easeInBounce: function (x, t, b, c, d) {
            return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
        },
        easeOutBounce: function (x, t, b, c, d) {
            if ((t /= d) < (1 / 2.75)) {
                return c * (7.5625 * t * t) + b;
            } else if (t < (2 / 2.75)) {
                return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
            } else if (t < (2.5 / 2.75)) {
                return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
            } else {
                return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
            }
        },
        easeInOutBounce: function (x, t, b, c, d) {
            if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
            return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
        }
    });

//�ｽﾇ･ﾐ･�ｽ�ｽ�ｽﾈｽ�ｽ�ｽ
(function (u) {
    if (navigator.platform.indexOf("Win") != -1) {
        $('body').addClass('windowns');
    } else {
        $('body').addClass('mac');
    }
    if (
        (u.indexOf("windows") != -1 && u.indexOf("touch") != -1)
        || u.indexOf("ipad") != -1
        || (u.indexOf("android") != -1 && u.indexOf("mobile") == -1)
        || (u.indexOf("firefox") != -1 && u.indexOf("tablet") != -1)
        || u.indexOf("kindle") != -1
        || u.indexOf("silk") != -1
        || u.indexOf("playbook") != -1
    ) {
        $('body').addClass('touchDevice');
        $('body').addClass('tablet');
        if (u.indexOf("android") != -1) $('body').addClass('android');
        if (u.indexOf("ipad") != -1 || u.indexOf("iphone") != -1 || u.indexOf("ipod") != -1) $('body').addClass('iOS');
    } else if (
        (u.indexOf("windows") != -1 && u.indexOf("phone") != -1)
        || u.indexOf("iphone") != -1
        || u.indexOf("ipod") != -1
        || (u.indexOf("android") != -1 && u.indexOf("mobile") != -1)
        || (u.indexOf("firefox") != -1 && u.indexOf("mobile") != -1)
        || u.indexOf("blackberry") != -1
    ) {
        $('body').addClass('touchDevice');
        $('body').addClass('mobile');
        if (u.indexOf("android") != -1) $('body').addClass('android');
        if (u.indexOf("ipad") != -1 || u.indexOf("iphone") != -1 || u.indexOf("ipod") != -1) $('body').addClass('iOS');
    } else {
        $('body').addClass('desktopDevice');
        if (u.match(/(msie|MSIE)/) || u.match(/(T|t)rident/)) {
            $('body').addClass('ie');
            var ieVersion = u.match(/((msie|MSIE)\s|rv:)([\d\.]+)/)[3];
            switch (parseInt(ieVersion)) {
                case 11:
                    $('body').addClass('ie11');
                    break;
                case 10:
                    $('body').addClass('ie10');
                    break;
                case 9:
                    $('body').addClass('ie9');
                    break;
                case 8:
                    $('body').addClass('ie8');
                    break;
                case 7:
                    $('body').addClass('ie7');
                    break;
                case 6:
                    $('body').addClass('ie6');
                    break;
            }
        } else if (u.indexOf('chrome') != -1) {
            $('body').addClass('chrome');
        } else if (u.indexOf('safari') != -1) {
            $('body').addClass('safari');
        } else if (u.indexOf('firefox') != -1) {
            $('body').addClass('firefox');
        }
    }
})(window.navigator.userAgent.toLowerCase());