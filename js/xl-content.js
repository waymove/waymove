!function(e) {
    var t = {};
    function n(i) {
        if (t[i])
            return t[i].exports;
        var o = t[i] = {
            i,
            l: !1,
            exports: {}
        };
        return e[i].call(o.exports, o, o.exports, n),
        o.l = !0,
        o.exports
    }
    n.m = e,
    n.c = t,
    n.d = function(e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        })
    }
    ,
    n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(e, t) {
        if (1 & t && (e = n(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var i = Object.create(null);
        if (n.r(i),
        Object.defineProperty(i, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var o in e)
                n.d(i, o, function(t) {
                    return e[t]
                }
                .bind(null, o));
        return i
    }
    ,
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return n.d(t, "a", t),
        t
    }
    ,
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    n.p = "",
    n(n.s = 0)
}([function(e, t, n) {
    e.exports = n(1)
}
, function(e, t, n) {
    var {XLMultiDownload: i} = n(2);
    !function() {
        var e, t, n, o, r, a, s, l, c = !1, d = !1, u = !1, m = !1, f = !1, v = !0, h = !1, p = void 0, _ = null, b = [], w = null, g = void 0, x = "xl_chrome_ext_{4DB361DE-01F7-4376-B494-639E489D19ED}", y = ["http.+\\?.*url=.+", "http.+\\?.*uri=.+"], k = "ED2K://", E = "MAGNET:?", L = "FTP://THUNDER://MMS://MMST://RTSP://RTSPU://XLAPP://";
        function S(e, t) {
            return 0 != e.length && (0 != m && (0 != function(e) {
                if (0 == e.length)
                    return !1;
                var t = e
                  , n = t.indexOf(":");
                if (-1 == n)
                    return !1;
                var i = t.substr(0, n + 1).toUpperCase();
                if ("" == i)
                    return !1;
                var o = !0;
                return -1 != k.indexOf(i) ? 0 == c && (o = !1) : -1 != E.indexOf(i) ? 0 == d && (o = !1) : -1 != L.indexOf(i) ? 0 == u && (o = !1) : o = !1,
                o
            }(e) && (0 != function(e) {
                if (0 == e.length)
                    return !0;
                var t = new Array
                  , n = r.split("||");
                for (var i in n) {
                    var o = n[i].slice(2).trimRight("|");
                    t.push(o)
                }
                var a = !0
                  , s = e;
                for (var l in t)
                    if (t[l].length > 0 && -1 != s.indexOf(t[l])) {
                        a = !1;
                        break
                    }
                return a
            }(t) && (!function(e) {
                if (0 == e.length)
                    return !1;
                if (0 == a.length)
                    return !1;
                var t = new Array
                  , n = a.split("||");
                for (var i in n) {
                    var o = n[i].slice(2).toLowerCase().trimRight("|");
                    t.push(o)
                }
                var r = !1
                  , s = e.toLowerCase();
                for (var l in t)
                    if (t[l] > 0 && -1 != s.indexOf(t[l])) {
                        r = !0;
                        break
                    }
                return r
            }(t) && 0 != function(e) {
                if (0 == e.length)
                    return !1;
                var t = e.indexOf(":");
                if (-1 == t)
                    return !1;
                var n = e.toLowerCase();
                if ("xlapp://" == n.substr(0, t + 3).trimLeft(" "))
                    return !0;
                if (-1 != n.indexOf("ed2k://") || -1 != n.indexOf("magnet:?"))
                    return !0;
                var i, o, r = !1, a = (i = n.replace(/(\\+)/g, "#").split("#"),
                (o = i[i.length - 1].split("."))[o.length - 1]);
                return a.length > 0 && (a += ";",
                -1 != s.indexOf(a) && (r = !0)),
                r
            }(e)))))
        }
        function C(e) {
            return t = e,
            document.cookie,
            n = document.location.href,
            !function(e) {
                var t = e.toLowerCase()
                  , n = !0;
                return -1 != t.indexOf("?") && -1 == t.indexOf("magnet:?") || (n = !1),
                n
            }(t) && S(t, n);
            var t, n
        }
        function M(e) {
            if (!e.ctrlKey && t && n && o) {
                var i = this.href;
                if (checkResult = function(e) {
                    for (var t in y) {
                        var n = new RegExp(y[t],"i").exec(e);
                        if (null != n)
                            return n
                    }
                    return null
                }(i),
                null != checkResult)
                    return;
                if (checkResult = C(i),
                checkResult)
                    return chrome.extension.sendRequest({
                        name: "xl_download",
                        link: i,
                        cookie: document.cookie,
                        referurl: document.location.href
                    }),
                    e.stopPropagation(),
                    void e.preventDefault()
            }
        }
        function T(e, t) {
            var n = !1;
            do {
                if (!t)
                    break;
                var i = t.getBoundingClientRect();
                if (e.clientX < i.left || e.clientY < i.top || e.clientX > i.right || e.clientY > i.bottom)
                    break;
                n = !0
            } while (0);return n
        }
        function O() {
            do {
                var e = document.getElementById(x);
                if (!e)
                    break;
                e.style.display = "none"
            } while (0)
        }
        function j(e) {
            do {
                var t = document.getElementById(x);
                if (!t)
                    break;
                f || (f = !0,
                chrome.extension.sendRequest({
                    name: "VideoShow",
                    referurl: document.location.href
                }, function() {})),
                t.style.display = "block";
                var n = e.getBoundingClientRect()
                  , i = `position:fixed;left: ${n.x + 12}px; top: ${n.y + 12}px; width: 98px; height: 24px; z-index: 1000000;`;
                t.style = i
            } while (0)
        }
        function R() {
            document.addEventListener("keydown", function(e) {
                e.ctrlKey && chrome.extension.sendRequest({
                    name: "EnabledCapture",
                    capture: !1
                }, function() {}),
                window.top !== window.self && chrome.runtime.sendMessage({
                    name: "xl_chrome_iframe_keydown",
                    keyCode: e.keyCode
                })
            }),
            document.addEventListener("keyup", function(e) {
                switch (e.ctrlKey && chrome.extension.sendRequest({
                    name: "EnabledCapture",
                    capture: !0
                }, function() {}),
                e.keyCode) {
                case 68:
                    e.shiftKey && (function() {
                        let e = !1;
                        do {
                            if (!document.activeElement)
                                break;
                            let t = document.activeElement.tagName.toUpperCase();
                            if ("INPUT" === t || "TEXTAREA" === t) {
                                e = !0;
                                break
                            }
                        } while (0);return e
                    }() || t && (window.top === window.self ? i.enter() : chrome.runtime.sendMessage({
                        name: "xl_chrome_iframe_multi_hotkey"
                    })))
                }
            }, !0)
        }
        function P() {
            chrome.extension.onMessage.addListener(function(a, s, l) {
                if ("UpdatePluginEnabled" == a.name)
                    (t = a.enable) && v ? K() : V(),
                    t || i.quit();
                else if ("UpdateMoniterVideoTags" == a.name)
                    v = a.enable,
                    t && v ? K() : V();
                else if ("UpdateWebsiteEnabled" == a.name)
                    n = a.enable;
                else if ("UpdatePageEnabled" == a.name)
                    o = a.enable;
                else if ("OnActivated" == a.name)
                    e && (c = document.location.href,
                    d = a.tabId,
                    chrome.extension.sendRequest({
                        name: "CheckEnabled",
                        url: c,
                        tabId: d
                    }, function(e) {
                        t = e.bPlugin,
                        v = e.bMonitorVideo,
                        n = e.bWebsite,
                        o = e.bPage,
                        t && v ? K() : V()
                    }));
                else if ("UpdateMonitorDomains" == a.name)
                    r = a.monitorDomains;
                else if ("GetCookie" == a.name)
                    l({
                        cookie: document.cookie
                    });
                else if ("EnterMultiSelect" === a.name) {
                    if (window.self !== window.top)
                        return;
                    i.enter()
                } else if ("xl_chrome_iframe_keydown" === a.name) {
                    if (window.top === window.self)
                        switch (a.keyCode) {
                        case 13:
                            i.download();
                            break;
                        case 27:
                            i.quit()
                        }
                } else
                    "xl_chrome_iframe_multi_hotkey" === a.name && window.top === window.self && i.enter();
                var c, d
            })
        }
        function D(e) {
            var t = void 0;
            do {
                if (!e)
                    break;
                if ("VIDEO" !== e.tagName.toUpperCase())
                    break;
                if (e.src) {
                    if (0 === e.src.toLowerCase().indexOf("blob:"))
                        break;
                    t = e.src;
                    break
                }
                if (!e.children || 0 === e.children.length)
                    break;
                for (var n = 0; n < e.children.length; n++) {
                    let i = e.children[n];
                    if ("source" === i.tagName.toLowerCase() && i.src) {
                        0 !== i.src.toLowerCase().indexOf("blob:") && (t = i.src);
                        break
                    }
                }
            } while (0);return t
        }
        function q(e) {
            let t = void 0;
            for (var n = 0; n < e.children.length; n++) {
                let o = e.children[n];
                if ("source" === o.tagName.toLowerCase() && o.type) {
                    var i = o.type.split("/");
                    i.length > 0 && (t = i[i.length - 1]);
                    break
                }
            }
            return t ? `.${t}` : ""
        }
        function I(e) {
            var t = document.elementFromPoint(e.x, e.y);
            do {
                if (!t)
                    break;
                if (t.tagName.toUpperCase(),
                "VIDEO" === t.tagName.toUpperCase()) {
                    var n = t.src || D(t);
                    if (!n)
                        break;
                    if (0 === n.toLowerCase().indexOf("blob:"))
                        break;
                    if (t === w)
                        break;
                    w = t,
                    g = n,
                    j(t);
                    break
                }
                if (w) {
                    if (!T(e, w)) {
                        w = null,
                        g = void 0,
                        O();
                        break
                    }
                } else {
                    if (0 === b.length)
                        break;
                    for (var i = null, o = 0; o < b.length; o++) {
                        var r = b[o];
                        if ("none" !== window.getComputedStyle(r).display)
                            if (T(e, r))
                                if (i)
                                    (Number(window.getComputedStyle(r).zIndex) || 0) > (Number(window.getComputedStyle(i).zIndex) || 0) && (i = r);
                                else
                                    i = r;
                            else if (i)
                                break
                    }
                    if (i) {
                        var a = i.src || D(i);
                        a && 0 !== a.toLowerCase().indexOf("blob:") && (w = i,
                        g = a,
                        j(i));
                        break
                    }
                }
            } while (0)
        }
        function N(e) {
            w && (w = null,
            g = void 0,
            O())
        }
        function U(e) {
            I(e)
        }
        function B(e) {
            w && j(w)
        }
        function V() {
            var e = document.getElementById(x);
            e && (document.body.removeChild(e),
            document.body.removeEventListener("mousemove", I, !0),
            window.self !== window.top && document.body.removeEventListener("mouseout", N),
            document.body.removeEventListener("wheel", U),
            document.removeEventListener("scroll", B),
            w = null,
            g = void 0,
            b = []),
            _ && (_.disconnect(),
            _ = null)
        }
        function A() {
            do {
                if (!w)
                    break;
                var e = w;
                if (!g)
                    break;
                function t(e) {
                    var t = "";
                    if (e && e.length > 0) {
                        var n = e.lastIndexOf(".");
                        -1 !== n && (t = (t = e.substr(n)).toLowerCase())
                    }
                    return t
                }
                var n = "";
                if (document.title) {
                    var i = document.title.replace(/[*?/:|<>"]/g, "");
                    if (i) {
                        var o = t((void 0,
                        r = g.replace(/\?.*$/, "").replace(/.*\//, ""),
                        decodeURIComponent(r)));
                        o || (o = q(e)),
                        n = `${i}${o}`
                    }
                }
                chrome.extension.sendRequest({
                    name: "xl_download",
                    link: g,
                    cookie: document.cookie,
                    referurl: document.location.href,
                    fileName: n,
                    stat: "chrome_download_video"
                })
            } while (0);var r
        }
        function z() {
            var e = document.createElement("div");
            e.className = "xl-chrome-ext-bar",
            e.style.display = "none",
            e.id = x,
            e.innerHTML = '\n      <div class="xl-chrome-ext-bar__logo"></div>\n\n      <a id="xl_chrome_ext_download" href="javascript:;" class="xl-chrome-ext-bar__option">下载视频</a>\n      <a id="xl_chrome_ext_close" href="javascript:;" class="xl-chrome-ext-bar__close"></a>\n    ',
            document.body.appendChild(e);
            for (var t = e.getElementsByTagName("a"), n = 0; n < t.length; n++) {
                t[n].addEventListener("click", e=>{
                    do {
                        if (!e)
                            break;
                        if (!e.target)
                            break;
                        switch (e.target.id) {
                        case "xl_chrome_ext_download":
                            e.preventDefault(),
                            A();
                            break;
                        case "xl_chrome_ext_close":
                            e.preventDefault(),
                            V(),
                            p = !0
                        }
                    } while (0)
                }
                , !1)
            }
            document.body.addEventListener("mousemove", I, !0),
            window.self !== window.top && document.body.addEventListener("mouseout", N),
            document.body.addEventListener("wheel", U),
            document.addEventListener("scroll", B)
        }
        function X() {
            do {
                if (_)
                    break;
                var e = null;
                try {
                    e = window.top.document.getElementsByTagName("title")[0]
                } catch (e) {}
                e && (_ = new MutationObserver(function(e) {
                    var t = document.getElementsByTagName("video");
                    b = t
                }
                )).observe(e, {
                    childList: !0
                });
                var t = document.getElementsByTagName("video");
                b = t
            } while (0)
        }
        function K() {
            do {
                if (!t)
                    break;
                if (!v)
                    break;
                if (!h)
                    break;
                if (p)
                    break;
                V(),
                X(),
                z()
            } while (0)
        }
        e = !0,
        P(),
        l = document.location.href,
        chrome.extension.sendRequest({
            name: "CheckActivated",
            url: l
        }),
        document.addEventListener("DOMContentLoaded", function() {
            var e;
            !function() {
                for (var e = 0; e < document.links.length; e++)
                    document.links[e].addEventListener("click", M, !1)
            }(),
            e = document.location.href,
            chrome.extension.sendRequest({
                name: "CheckVideoInWhiteList",
                url: e
            }, function(e) {
                h = e.videoInWhiteList,
                t = e.bPlugin,
                v = e.bMonitorVideo,
                t && v && K()
            })
        }),
        R(),
        chrome.extension.sendRequest({
            name: "GetConfig"
        }, function(e) {
            c = e.bMonitorEmule,
            d = e.bMonitorMagnet,
            u = e.bMonitorTradition,
            m = e.bMonitorIE,
            r = e.monitorDomains,
            a = e.filterDomains,
            s = e.monitorFileExts
        })
    }()
}
, function(e, t, n) {
    var i, {StateMachine: o} = n(3);
    !function() {
        function e() {
            this._invertedSelection = !1,
            this._curpos = {
                x: 0,
                y: 0
            },
            this._selectableElements = [],
            this._visibleElements = [];
            var e = this
              , t = document.createElement("div");
            t.id = CSS.ids.overlay;
            var n = document.createElement("div");
            n.id = CSS.ids.glass;
            var r = document.createElement("div");
            r.id = CSS.ids.help,
            r.innerHTML = chrome.i18n.getMessage("usage"),
            r.onmouseover = function() {
                r.classList.add(CSS.classes.invisible)
            }
            ,
            r.onmouseout = function() {
                r.classList.remove(CSS.classes.invisible)
            }
            ;
            var a, s, l = function(e) {
                e.preventDefault(),
                e.stopPropagation()
            }, c = function(t) {
                e._curpos.x = t.clientX,
                e._curpos.y = t.clientY
            }, d = null, u = {
                contextmenu: function(e) {
                    l(e)
                },
                mousemove: function(t) {
                    c(t),
                    e.sm.fireEvent("mousemove")
                },
                mousedown: function(t) {
                    if (null === d && (0 == t.button || 2 == t.button)) {
                        switch (d = 0 == t.button ? t.ctrlKey ? 1 : 0 : 2) {
                        case 0:
                            c(t),
                            e.sm.fireEvent("mousedown");
                            break;
                        case 1:
                        case 2:
                            c(t),
                            e.sm.fireEvent("alt_mousedown")
                        }
                        l(t)
                    }
                },
                mouseup: function(t) {
                    if (null !== d && (t.button == d || 0 == t.button || 1 == d)) {
                        switch (t.button) {
                        case 0:
                            c(t),
                            e.sm.fireEvent(1 == d ? "alt_mouseup" : "mouseup");
                            break;
                        case 2:
                            c(t),
                            e.sm.fireEvent("alt_mouseup")
                        }
                        d = null,
                        l(t)
                    }
                },
                keydown: function(t) {
                    switch (t.keyCode) {
                    case 13:
                        e.sm.fireEvent("req_download");
                        break;
                    case 27:
                        e.sm.fireEvent("req_exit");
                        break;
                    default:
                        return
                    }
                    l(t)
                },
                resize: (a = null,
                s = function() {
                    a = null,
                    e.updateVisibleElements()
                }
                ,
                function(e) {
                    null !== a && clearTimeout(a),
                    a = setTimeout(s, 100)
                }
                ),
                scroll: function() {
                    var t = null
                      , n = function() {
                        t = null,
                        e.updateVisibleElements()
                    };
                    return function(e) {
                        null !== t && clearTimeout(t),
                        t = setTimeout(n, 100)
                    }
                }()
            };
            document.addEventListener("contextmenu", u.contextmenu),
            document.addEventListener("scroll", u.scroll),
            window.addEventListener("resize", u.resize),
            document.addEventListener("keydown", u.keydown, !0),
            document.body.addEventListener("mousedown", u.mousedown, !0),
            document.body.addEventListener("mouseup", u.mouseup, !0),
            t.appendChild(r),
            t.appendChild(n);
            var m = new o;
            m.states.load = {
                __enter__: function() {
                    document.documentElement.classList.add(CSS.classes.loading),
                    document.body.appendChild(t),
                    t.addEventListener("webkitTransitionEnd", function() {
                        t.removeEventListener("webkitTransitionEnd", arguments.callee),
                        e.sm.fireEvent("load_done")
                    }),
                    setTimeout(function() {
                        e.populate(),
                        e.updateVisibleElements(),
                        document.documentElement.classList.remove(CSS.classes.loading)
                    }, 0)
                },
                load_done: "idle"
            },
            m.states.exit = {
                __enter__: function() {
                    e._cursel && p(),
                    document.removeEventListener("mousemove", u.mousemove),
                    document.removeEventListener("scroll", u.scroll),
                    window.removeEventListener("resize", u.resize),
                    document.removeEventListener("contextmenu", u.contextmenu),
                    document.removeEventListener("keydown", u.keydown, !0),
                    document.body.removeEventListener("mousedown", u.mousedown, !0),
                    document.body.removeEventListener("mouseup", u.mouseup, !0),
                    e._selectableElements.forEach(function(e) {
                        e._private.delegate.classList.remove(CSS.classes.selected),
                        e._private.delegate.classList.remove(CSS.classes.relative),
                        delete e._private
                    }),
                    t.addEventListener("webkitTransitionEnd", function() {
                        t.removeEventListener("webkitTransitionEnd", arguments.callee),
                        document.body.removeChild(t),
                        document.documentElement.classList.remove(CSS.classes.exiting),
                        e.sm.fireEvent("exit_done")
                    }),
                    document.documentElement.classList.add(CSS.classes.exiting)
                },
                __exit__: function() {
                    i.instance = null
                },
                exit_done: null
            },
            m.states.idle = {
                mousedown: "selection",
                alt_mousedown: "deselection",
                req_exit: "exit",
                req_download: "action-download"
            };
            var f = null
              , v = null
              , h = function() {
                var t = document.createElement("div");
                t.classList.add(CSS.classes.selectionRectangle),
                t.style.left = e._curpos.x + "px",
                t.style.top = e._curpos.y + "px",
                e._invertedSelection && t.classList.add(CSS.classes.inverted),
                e._cursel = document.body.appendChild(t),
                e._startpos = {
                    x: e._curpos.x,
                    y: e._curpos.y
                },
                e._selrect = {
                    x: e._curpos.x,
                    y: e._curpos.y,
                    w: 0,
                    h: 0
                },
                e._lastDrawn = {},
                f = setInterval(e.drawSelection.bind(e), 30),
                v = setInterval(e.calcSelectedElements.bind(e), 30),
                document.addEventListener("mousemove", u.mousemove)
            }
              , p = function() {
                for (var t in document.removeEventListener("mousemove", u.mousemove),
                clearInterval(f),
                clearInterval(v),
                f = null,
                v = null,
                e.calcSelectedElements(),
                e._selectableElements) {
                    var n = e._selectableElements[t]._private;
                    n.selected = n.selected2
                }
                return e._cursel.addEventListener("webkitTransitionEnd", function() {
                    document.body.removeChild(this)
                }
                .bind(e._cursel)),
                e._cursel.classList.add(CSS.classes.closing),
                delete e._cursel,
                delete e._startpos,
                delete e._selrect,
                delete e._lastDrawn,
                "idle"
            }
              , _ = function() {
                if (e._startpos) {
                    var t = e._startpos
                      , n = e._curpos
                      , i = e._selrect;
                    i.x = Math.min(t.x, n.x),
                    i.y = Math.min(t.y, n.y),
                    i.w = Math.abs(t.x - n.x),
                    i.h = Math.abs(t.y - n.y)
                }
            };
            m.states.selection = {
                __enter__: function() {
                    e._invertedSelection = !1,
                    h()
                },
                mousemove: _,
                mouseup: p,
                req_exit: "exit"
            },
            m.states.deselection = {
                __enter__: function() {
                    e._invertedSelection = !0,
                    h()
                },
                mousemove: _,
                alt_mouseup: p,
                req_exit: "exit"
            },
            m.states["action-download"] = {
                __enter__: function() {
                    var t, n, i = (t = e._selectableElements,
                    n = {},
                    t.forEach(function(e) {
                        if (e._private.selected) {
                            var t = function(e) {
                                var t = e.href;
                                do {
                                    var n = e.getAttribute("thunderhref");
                                    if (n) {
                                        t = n;
                                        break
                                    }
                                    var i = e.getAttribute("thundertype");
                                    if (null === i)
                                        break;
                                    var o = e.attributes.length;
                                    if (o <= 0)
                                        break;
                                    for (var r = 0; r < o; r++) {
                                        var a = e.attributes[r].value;
                                        if (a && 0 === a.toLowerCase().indexOf("thunder://")) {
                                            t = a;
                                            break
                                        }
                                    }
                                } while (0);return t
                            }(e);
                            n[t] = null
                        }
                    }),
                    Object.keys(n));
                    chrome.extension.sendMessage({
                        name: "xl_download_multi",
                        referurl: document.location.href,
                        cookie: document.cookie,
                        urls: i
                    }),
                    e.sm.fireEvent("done")
                },
                done: "exit"
            },
            this.sm = m
        }
        function t(e, t) {
            for (var n in e)
                e[n].classList.add(CSS.classes.selected);
            for (var n in t)
                t[n].classList.remove(CSS.classes.selected)
        }
        function n(e, t) {
            return !(e.bottom < t.y || t.y + t.h < e.top || e.right < t.x || t.x + t.w < e.left)
        }
        CSS = {
            ids: {
                glass: "ncennffkjdiamlpmcbajkmaiiiddgioo-glass",
                help: "ncennffkjdiamlpmcbajkmaiiiddgioo-help",
                overlay: "ncennffkjdiamlpmcbajkmaiiiddgioo-overlay"
            },
            classes: {
                closing: "ncennffkjdiamlpmcbajkmaiiiddgioo-closing",
                exiting: "ncennffkjdiamlpmcbajkmaiiiddgioo-exiting",
                inverted: "ncennffkjdiamlpmcbajkmaiiiddgioo-inverted",
                invisible: "ncennffkjdiamlpmcbajkmaiiiddgioo-invisible",
                loading: "ncennffkjdiamlpmcbajkmaiiiddgioo-loading",
                relative: "ncennffkjdiamlpmcbajkmaiiiddgioo-relative",
                selected: "ncennffkjdiamlpmcbajkmaiiiddgioo-selected",
                selectionRectangle: "ncennffkjdiamlpmcbajkmaiiiddgioo-selection-rectangle"
            }
        },
        e.prototype.populate = function() {
            for (var e = document.links, t = /^javascript:/, n = 0; n < e.length; n++) {
                var i = e[n];
                if (void 0 != i.href && !t.test(i.href)) {
                    var o = i
                      , r = i.getElementsByTagName("img");
                    r.length && (o = r[0]),
                    i._private = {
                        selected: !1,
                        selected2: !1,
                        delegate: o,
                        positionfix: !1
                    },
                    this._selectableElements.push(i)
                }
            }
        }
        ,
        e.prototype.updateVisibleElements = function() {
            var e = {
                x: 0,
                y: 0,
                w: window.innerWidth,
                h: window.innerHeight
            }
              , t = this._visibleElements
              , i = this._selectableElements;
            for (var o in t.splice(0),
            i) {
                var r = i[o]
                  , a = r._private
                  , s = a.delegate;
                n(s.getBoundingClientRect(), e) && (t.push(r),
                a.positionfix || (a.positionfix = !0,
                "static" == window.getComputedStyle(s).position && s.classList.add(CSS.classes.relative)))
            }
        }
        ,
        e.prototype.drawSelection = function() {
            var e = this._selrect
              , t = this._lastDrawn
              , n = this._cursel.style;
            e.x == t.x && e.y == t.y && e.w == t.w && e.h == t.h || (n.left = (t.x = e.x) + "px",
            n.top = (t.y = e.y) + "px",
            n.width = (t.w = e.w) + "px",
            n.height = (t.h = e.h) + "px")
        }
        ,
        e.prototype.calcSelectedElements = function() {
            var e = this._visibleElements
              , i = this._selrect
              , o = []
              , r = [];
            for (var a in e) {
                for (var s = e[a]._private, l = s.delegate, c = s.delegate.getClientRects(), d = !1, u = 0; u < c.length; u++) {
                    if (n(c[u], i)) {
                        d = !0;
                        break
                    }
                }
                var m = d ? !this._invertedSelection : s.selected;
                m != s.selected2 && ((m ? o : r).push(l),
                s.selected2 = m)
            }
            (o || r) && setTimeout(t, 0, o, r)
        }
        ,
        i = {
            instance: null,
            enter: function() {
                null === i.instance && (i.instance = new e,
                i.instance.sm.start("load"),
                chrome.runtime.sendMessage({
                    name: "xl_download_multi_start",
                    referurl: document.location.href
                }))
            },
            quit: function() {
                i.instance && i.instance.sm.fireEvent("req_exit")
            },
            download: function() {
                i.instance && i.instance.sm.fireEvent("req_download")
            }
        }
    }(),
    e.exports = {
        XLMultiDownload: i
    }
}
, function(e, t) {
    function n() {
        this.states = {},
        this._current = void 0
    }
    n.prototype.start = function(e) {
        if (void 0 !== this._current)
            throw "State machine already started";
        if (void 0 === e || null === e)
            throw "Please give a valid state name";
        setTimeout(n._changeState, 0, this, e)
    }
    ,
    n.prototype.fireEvent = function(e, t) {
        if (void 0 === this._current)
            throw "State machine not started";
        if (null === this._current)
            throw "State machine terminated";
        setTimeout(n._handleEvent, 0, this, e, t)
    }
    ,
    n._changeState = function(e, t) {
        if (null !== t && !e.states.hasOwnProperty(t))
            throw e._current = null,
            'No such state "' + t + '"';
        var i = e._current;
        if (void 0 !== i && i.hasOwnProperty("__exit__") && i.__exit__.apply(e),
        null !== t) {
            if ((i = e._current = e.states[t]).hasOwnProperty("__enter__")) {
                var o = i.__enter__.apply(e);
                void 0 !== o && setTimeout(n._changeState, 0, e, o)
            }
        } else
            e._current = null
    }
    ,
    n._handleEvent = function(e, t, i) {
        var o = e._current[t];
        "function" == typeof o && (o = o.apply(e, i)),
        void 0 !== o && setTimeout(n._changeState, 0, e, o)
    }
    ,
    e.exports = {
        StateMachine: n
    }
}
]);
//# sourceMappingURL=xl-content.js.map
