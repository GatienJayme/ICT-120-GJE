var sc_new_ad_detection = true;
var sc_rum_start = false;
if (typeof performance !== "undefined") {
    var sc_rum_start = Math.round(performance.now())
}
var sc_width = screen.width;
var sc_height = screen.height;
var sc_referer = "" + document.referrer;
try {
    sc_referer = "" + parent.document.referrer
} catch (ex) {
    sc_referer = "" + document.referrer
}
if (typeof sc_referer_scr08 !== "undefined") {
    sc_referer = sc_referer_scr08
}
var sc_unique = 0;
var sc_returning = 0;
var sc_returns = 0;
var sc_error = 0;
var sc_remove = 0;
var sc_cls = -1;
var sc_inv = 0;
var sc_os = "";
var sc_title = "";
var sc_url = "";
var sc_base_dir = "";
var sc_click_dir = "";
var sc_link_back_start = "";
var sc_link_back_end = "";
var sc_security_code = "";
var sc_http_url = "http";
var sc_host = "statcounter.com";
var sc_dc = "c";
var sc_alt_text = "StatCounter - Free Web Tracker and Counter";
var sc_counter_size = "";
var sc_prerendering = 0;
var sc_uuid = "";
var sc_uuid_q = "&u1=za";
var sc_unique_returning = "";
var sc_sp = "cookie";
if (window.sc_client_storage) {
    sc_sp = window.sc_client_storage
}
if (typeof window.sc_first_party_cookie != "undefined" && sc_first_party_cookie == "0") {
    sc_sp = "disabled"
}

function _sc_strip_tags(_1, _2) {
    _2 = (((_2 || "") + "").toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join("");
    var _3 = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, _4 = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
    return _1.replace(_4, "").replace(_3, function ($0, $1) {
        return _2.indexOf("<" + $1.toLowerCase() + ">") > -1 ? $0 : ""
    })
}

function _sc_sanitiseTags(_7) {
    for (i = 0; i < _7.length; i++) {
        _7[i] = ("" + _7[i]).trim()
    }
    return _7
}

function _sc_validateTags(_8) {
    var _9 = 10;
    var _a = 1;
    var _b = 300;
    var _c = [];
    if (!(_8.length % 2 == 0)) {
        _c.push("Every tag must have a name and value.")
    } else {
        if (_8.length / 2 > _9) {
            _c.push("No more than " + _9 + " tags can be passed - " + _8.length / 2 + " passed.")
        }
        for (i = 0; i < _8.length; i++) {
            var _d = ("" + _8[i]).length;
            if (_d < _a || _d > _b) {
                _c.push("Tag names and values must be between " + _a + " and " + _b + " characters in length ('" + _8[i] + "' is " + _8[i].length + " characters long).")
            }
        }
        for (i = 0; i < _8.length; i++) {
            if (_sc_strip_tags("" + _8[i]) != "" + _8[i]) {
                _c.push("Tag names and values may not contain HTML tags.")
            }
        }
    }
    if (_c.length != 0) {
        for (i = 0; i < _c.length; i++) {
        }
        return false
    }
    return true
}

function getTagString(_e) {
    function _f(obj, _11) {
        var _12 = obj.__proto__ || obj.constructor.prototype;
        return (_11 in obj) && (!(_11 in _12) || _12[_11] !== obj[_11])
    }

    if (Object.prototype.hasOwnProperty) {
        var _f = function (obj, _14) {
            return obj.hasOwnProperty(_14)
        }
    }
    var _15 = "";
    if (_f(_e, "tags") && typeof _e.tags === "object") {
        var _16 = [];
        for (var tag in _e.tags) {
            _16[_16.length] = tag;
            _16[_16.length] = _e.tags[tag]
        }
        if (_sc_validateTags(_16)) {
            _16 = _sc_sanitiseTags(_16);
            for (i = 0; i < _16.length; i = i + 2) {
                _15 += "&sc_ev_" + encodeURIComponent(_16[i]) + "=" + encodeURIComponent(_16[i + 1])
            }
        }
    }
    return _15
}

function isValidEventName(_18) {
    if (_18 !== null && _18 != "") {
        return true
    }
    return false
}

var _statcounter_pending = _statcounter;
var _statcounter = {
    push: function (_19) {
        if (_19 !== null && typeof _19 === "object") {
            function hasOwnProperty(obj, _1b) {
                var _1c = obj.__proto__ || obj.constructor.prototype;
                return (_1b in obj) && (!(_1b in _1c) || _1c[_1b] !== obj[_1b])
            }

            if (Object.prototype.hasOwnProperty) {
                hasOwnProperty = function (obj, _1e) {
                    return obj.hasOwnProperty(_1e)
                }
            }
            if (hasOwnProperty(_19, "name") && isValidEventName(_19.name)) {
                var _1f = _19.name;
                if (_1f == "pageview") {
                    _statcounter_pending.push(_19);
                    return
                }
                var _20 = getTagString(_19);
                var _21 = 3;
                var _22 = sc_click_dir + "click.gif?sc_project=" + clickstat_project + "&security=" + clickstat_security + "&m=" + _21 + "&u=" + sc_url + "&t=" + sc_title + "&en=" + _1f + "&sess=3ca678&rand=" + Math.random() + _20 + sc_uuid_q + sc_unique_returning;
                var _23 = new Image();
                _23.onload = sc_none;
                _23.src = _22;
                sc_delay()
            }
        }
    }
};
if (window.sc_invisible) {
    if (window.sc_invisible == 1) {
        sc_inv = 1
    }
}
if (window.sc_click_stat) {
    sc_cls = window.sc_click_stat
}
sc_doc_loc = "" + document.location;
myRE = new RegExp("^https", "i");
if (sc_doc_loc.match(myRE)) {
    sc_http_url = "https"
}
if (window.sc_local) {
    sc_base_dir = sc_local
} else {
    if (sc_cls == -1) {
        sc_cls = 1
    }
    sc_base_dir = sc_http_url + "://" + sc_dc + "." + sc_host + "/"
}
sc_click_dir = sc_base_dir;
if (window.sc_counter_target) {
    sc_base_dir += window.sc_counter_target + "?"
} else {
    if (window.sc_text) {
        sc_base_dir += "text.php?"
    } else {
        sc_base_dir += "t.php?"
    }
}
if (window.sc_project) {
    if (sc_project == "4135125" || sc_project == "6169619" || sc_project == "6222332" || sc_project == "5106510" || sc_project == "6311399" || sc_project == "6320092" || sc_project == "5291656" || sc_project == "7324465" || sc_project == "6640020" || sc_project == "4629288" || sc_project == "1480088" || sc_project == "2447031") {
        if (Math.floor(Math.random() * 6) != 1) {
            sc_remove = 1
        }
    }
    sc_base_dir += "sc_project=" + sc_project
} else {
    if (window.usr) {
        sc_base_dir += "usr=" + usr
    } else {
        sc_error = 1
    }
}
if (window.sc_remove_link) {
    sc_link_back_start = "";
    sc_link_back_end = ""
} else {
    sc_link_back_start = "<a class=\"statcounter\" href=\"http://www." + sc_host + "\" target=\"_blank\">";
    sc_link_back_end = "</a>"
}
sc_date = new Date();
sc_time = sc_date.getTime();
sc_time_difference = 3600000;
sc_title = "" + document.title;
sc_url = "" + document.location;
sc_title = sc_title.substring(0, 300);
sc_url = sc_url.substring(0, 300);
if (encodeURIComponent) {
    sc_title = encodeURIComponent(sc_title)
} else {
    sc_title = escape(sc_title)
}
sc_url = escape(sc_url);
if (window.sc_security) {
    sc_security_code = sc_security
}
if (sc_script_num) {
    sc_script_num++
} else {
    var sc_script_num = 1
}
if (typeof _sc_imgs == "undefined") {
    var _sc_imgs = {}
}
var sc_pageview_tag_string = "";
var _sc_project_int = parseInt(sc_project, 10);
var _sc_epoch_now = new Date();
var _sc_epoch_days = Math.floor(_sc_epoch_now / 86400000);
var _sc_days_elapsed = _sc_epoch_days - 17869;
var _sc_fix_threshold = 11200000 - (_sc_days_elapsed * 12223);
var _sc_fix_min_threshold = 9000000;
if (_sc_fix_threshold < _sc_fix_min_threshold) {
    _sc_fix_threshold = _sc_fix_min_threshold
}
var _sc_apply_mar_2017_fixes = _sc_project_int == 4344864 || _sc_project_int == 4124138 || _sc_project_int == 204609 || _sc_project_int > _sc_fix_threshold;
(function (_24, _25, _26, _27) {
    var _28 = "";
    var _29 = {
        "google": null,
        "bing": ["q"],
        "search.yahoo": null,
        "m.yahoo": null,
        "m2.yahoo": null,
        "baidu": ["wd", "word"],
        "yandex": ["text"],
        "ya.ru": ["text"],
        "haosou": ["q"],
        "so.com": ["q"],
        "360.cn": ["q"],
        "360sou": ["q"],
        "aol": ["query", "q"],
        "duckduckgo": null,
        "ask.com": ["q", "QUERYT"],
        "mail.ru": ["words"],
        "sogou": ["q", "query"]
    };
    var _2a = {
        "fb": ["facebook.com", "fb.me"],
        "pi": ["pinterest.com"],
        "tw": ["twitter.com", "t.co"],
        "ln": ["linkedin.com"],
        "in": ["instagram.com"],
        "rd": ["reddit.com"],
        "tb": ["tumblr.com"],
        "st": ["stumbleupon.com"],
        "yt": ["youtube.com"],
        "gp": ["plus.google.com", "plus.url.google.com"]
    };

    function check_root_domains_match(a, b) {
        var _2d = a.split(".");
        var _2e = b.split(".");
        var _2f = Math.min(_2d.length, _2e.length);
        var _30 = 2;
        if (_2d.length > 1 && ((_2d[_2d.length - 2].length <= 3 && _2d[_2d.length - 1] in {
            "at": 1,
            "au": 1,
            "br": 1,
            "es": 1,
            "hu": 1,
            "il": 1,
            "nz": 1,
            "tr": 1,
            "uk": 1,
            "us": 1,
            "za": 1
        }) || _2d[_2d.length - 1] == "kr" || _2d[_2d.length - 1] == "ru" || (_2d[_2d.length - 1] == "au" && _2d[_2d.length - 2] in {"csiro": 1}) || (_2d[_2d.length - 1] == "at" && _2d[_2d.length - 2] in {"priv": 1}) || (_2d[_2d.length - 1] == "fr" && _2d[_2d.length - 2] in {
            "avocat": 1,
            "aeroport": 1,
            "veterinaire": 1
        }) || (_2d[_2d.length - 1] == "hu" && _2d[_2d.length - 2] in {
            "film": 1,
            "lakas": 1,
            "ingatlan": 1,
            "sport": 1,
            "hotel": 1
        }) || (_2d[_2d.length - 1] == "nz" && _2d[_2d.length - 2] in {
            "geek": 1,
            "kiwi": 1,
            "maori": 1,
            "school": 1,
            "govt": 1,
            "health": 1,
            "parliament": 1
        }) || (_2d[_2d.length - 1] == "il" && _2d[_2d.length - 2] in {"muni": 1}) || (_2d[_2d.length - 1] == "za" && _2d[_2d.length - 2] in {"school": 1}) || (_2d[_2d.length - 1] == "tr" && _2d[_2d.length - 2] in {"name": 1}) || (_2d[_2d.length - 1] == "uk" && _2d[_2d.length - 2] in {"police": 1}))) {
            _30 = 3
        }
        for (var i = 1; i <= _2f; i++) {
            if (_2d[_2d.length - i] != _2e[_2e.length - i]) {
                return false
            }
            if (i >= _30) {
                return true
            }
        }
        return _2d.length == _2e.length
    }

    function classify_referrer(r) {
        if (r == "") {
            return "d"
        }
        var _33 = r.split("/")[2].replace(/^www\./, "");
        var _34 = document.location.host.replace(/^www\./, "");
        if (_sc_apply_mar_2017_fixes) {
            if (_34 == _33) {
                return "internal"
            }
            if (check_root_domains_match(_33, _34)) {
                return "internal"
            }
        }
        if (r.search(/\bgoogle\..*\?.*adurl=http/) !== -1) {
            return "p"
        }
        var _35 = ["utm_source=bing", "?gclid=", "&gclid=", "utm_medium=cpc", "utm_medium=paid-media", "utm_medium=ppc"];
        for (var i = 0; i < _35.length; i++) {
            if (document.location.search.indexOf(_35[i]) !== -1) {
                return "p"
            }
        }
        var _37 = ["utm_medium=email"];
        for (var i = 0; i < _37.length; i++) {
            if (document.location.search.indexOf(_37[i]) !== -1) {
                return "e"
            }
        }
        if (!_sc_apply_mar_2017_fixes) {
            if (_34 == _33) {
                return "internal"
            }
        }
        for (var _38 in _29) {
            if (_33.replace(_38, "#").split(".").indexOf("#") !== -1) {
                if (_29[_38] === null) {
                    return _38
                }
                for (var i = 0; i < _29[_38].length; i++) {
                    var _39 = _29[_38][i];
                    if (r.indexOf("?" + _39 + "=") !== -1 || r.indexOf("&" + _39 + "=") !== -1) {
                        return _38
                    }
                }
            }
        }
        for (var _3a in _2a) {
            for (var i = 0; i < _2a[_3a].length; i++) {
                var _38 = _2a[_3a][i];
                if (_33.replace(_38, "#").split(".").indexOf("#") !== -1) {
                    return _3a
                }
            }
        }
        return _33
    }

    function categorize_class(cls) {
        if (cls == "d" || cls == "p" || cls == "e" || cls == "internal") {
            return cls
        }
        if (cls in _29) {
            return "o"
        }
        if (cls in _2a) {
            return "s"
        }
        return "r"
    }

    if (sc_remove != 1) {
        if (document.webkitVisibilityState != "prerender") {
            sc_prerendering = 0
        } else {
            sc_prerendering = 1;
            document.addEventListener("webkitvisibilitychange", function (evt) {
                if (sc_prerendering == 1) {
                    sc_prerendering = 2;
                    sc_send_data()
                } else {
                    return
                }
            }, false)
        }
    }
    var _3d = parseInt(sc_project, 10);
    var _3e = _3d == 9560334 || _3d == 6709687 || _3d == 9879613 || _3d == 4124138 || _3d == 204609 || _3d == 10776808;
    try {
        var _3f = Math.pow(_25, _26), _40 = Math.pow(2, _27), _41 = _40 * 2, _42 = _25 - 1;
        var _43;
        var _44 = function (_45, _46) {
            var key = [];
            var _48 = mixkey(flatten(_46 ? [_45, tostring(_24)] : 0 in arguments ? _45 : autoseed(), 3), key);
            var _49 = new ARC4(key);
            mixkey(tostring(_49.S), _24);
            _43 = function () {
                var n = _49.g(_26), d = _3f, x = 0;
                while (n < _40) {
                    n = (n + x) * _25;
                    d *= _25;
                    x = _49.g(1)
                }
                while (n >= _41) {
                    n /= 2;
                    d /= 2;
                    x >>>= 1
                }
                return (n + x) / d
            };
            return _48
        };

        function ARC4(key) {
            var t, _4f = key.length, me = this, i = 0, j = me.i = me.j = 0, s = me.S = [];
            if (!_4f) {
                key = [_4f++]
            }
            while (i < _25) {
                s[i] = i++
            }
            for (i = 0; i < _25; i++) {
                s[i] = s[j = _42 & (j + key[i % _4f] + (t = s[i]))];
                s[j] = t
            }
            (me.g = function (_54) {
                var t, r = 0, i = me.i, j = me.j, s = me.S;
                while (_54--) {
                    t = s[i = _42 & (i + 1)];
                    r = r * _25 + s[_42 & ((s[i] = s[j = _42 & (j + t)]) + (s[j] = t))]
                }
                me.i = i;
                me.j = j;
                return r
            })(_25)
        }

        function flatten(obj, _58) {
            var _59 = [], typ = (typeof obj)[0], _5b;
            if (_58 && typ == "o") {
                for (_5b in obj) {
                    try {
                        _59.push(flatten(obj[_5b], _58 - 1))
                    } catch (e) {
                    }
                }
            }
            return (_59.length ? _59 : typ == "s" ? obj : obj + "\x00")
        }

        function mixkey(_5c, key) {
            var _5e = _5c + "", _5f, j = 0;
            while (j < _5e.length) {
                key[_42 & j] = _42 & ((_5f ^= key[_42 & j] * 19) + _5e.charCodeAt(j++))
            }
            return tostring(key)
        }

        function autoseed(_61) {
            try {
                window.crypto.getRandomValues(_61 = new Uint8Array(_25));
                return tostring(_61)
            } catch (e) {
                return [+new Date, window, window.navigator.plugins, window.screen, tostring(_24)]
            }
        }

        function tostring(a) {
            return String.fromCharCode.apply(0, a)
        }

        mixkey(Math.random(), _24);

        function _localStorageAvailable() {
            var _63 = false;
            if ("localStorage" in window) {
                try {
                    _63 = window["localStorage"] !== null
                } catch (e) {
                    if (!e.name || e.name.toLowerCase().replace(/_/g, "").substring(0, 16) !== "quotaexceedederr") {
                        if (!e.number || parseInt(e.number, 10) !== -2147024891) {
                            throw e
                        }
                    }
                }
            }
            return _63
        }

        function _setLocalStorage(_64, _65, _66) {
            if (_localStorageAvailable()) {
                try {
                    if (_64 === "is_visitor_unique") {
                        localStorage.setItem("statcounter.com/localstorage/", _65)
                    } else {
                        localStorage.setItem("statcounter_" + _64, _65)
                    }
                } catch (e) {
                    if (!e.name || e.name.toLowerCase().replace(/_/g, "").substring(0, 16) !== "quotaexceedederr") {
                        if (!e.number || parseInt(e.number, 10) !== -2147024891) {
                            throw e
                        }
                    }
                    return false
                }
                return true
            }
            return false
        }

        function setLocal(_67, _68, _69, _6a, _6b) {
            if (typeof _68 === "string") {
                _68 = [_68]
            }
            if (_6a === undefined) {
                _6a = ""
            }
            if (_6b === undefined) {
                _6b = 30
            }
            var _6c = false;
            if (sc_sp == "localStorage") {
                _6c = _setLocalStorage(_67, _6a + _68.join("-"), _69);
                if (!_6c) {
                    _6c = _writeCookie(_67, _6a + _68.join("-"), _69)
                } else {
                    if (_readCookie(_67) !== null) {
                        _removeCookie(_67, _69)
                    }
                }
            } else {
                cookie_value = _68.slice(0, _6b).join("-");
                _6c = _writeCookie(_67, _6a + cookie_value, _69);
                if (!_6c) {
                    _6c = _setLocalStorage(_67, _6a + _68.join("-"), _69)
                } else {
                    if (_68.length > _6b) {
                        _setLocalStorage(_67, "mx" + _68.slice(_6b).join("-"), _69)
                    } else {
                        _removeLocalStorage(_67)
                    }
                }
            }
            return _6c
        }

        function getLocal(_6d) {
            var val = null;
            if (_localStorageAvailable()) {
                if (_6d === "is_visitor_unique") {
                    val = localStorage.getItem("statcounter.com/localstorage/")
                } else {
                    val = localStorage.getItem("statcounter_" + _6d)
                }
            }
            if (sc_sp == "localStorage" && val !== null && val.substring(0, 2) == "rx") {
                return val
            }
            var _6f = _readCookie(_6d);
            if (val !== null) {
                if (_6f === null && val.substring(0, 2) == "rx") {
                    return val
                } else {
                    if (_6f !== null && val.substring(0, 2) == "mx") {
                        _6f += "-" + val.substring(2)
                    }
                }
            }
            return _6f
        }

        function _removeLocalStorage(_70) {
            if (_localStorageAvailable()) {
                if (_70 === "is_visitor_unique") {
                    localStorage.removeItem("statcounter.com/localstorage/")
                }
                localStorage.removeItem("statcounter_" + _70)
            }
        }

        function removeLocal(_71, _72) {
            _removeLocalStorage(_71);
            if (_readCookie(_71)) {
                _removeCookie(_71, _72)
            }
        }

        function _readCookie(_73) {
            var _74 = "sc_" + _73 + "=";
            if (document.cookie) {
                var ca = document.cookie.split(";");
                for (var i = 0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) == " ") {
                        c = c.substring(1, c.length)
                    }
                    if (c.indexOf(_74) == 0) {
                        return c.substring(_74.length, c.length)
                    }
                }
            }
            return null
        }

        function _writeCookie(_78, _79, _7a, _7b) {
            if (_7b === undefined) {
                var _7c = 1000 * 60 * 60 * 24 * 365 * 2
            } else {
                var _7c = 1000 * _7b
            }
            expiration = new Date();
            expiration.setTime(expiration.getTime() + _7c);
            var _7d = 3050;
            if (_79.length > _7d - 50 && _79.substring(0, _7d).indexOf("-") !== -1) {
                _79 = _79.substring(0, _79.substring(0, _7d).lastIndexOf("-"))
            }
            document.cookie = "sc_" + _78 + "=" + _79 + "; expires=" + expiration.toGMTString() + "; domain=" + _7a + "; path=/";
            if (_readCookie(_78) !== null) {
                return true
            } else {
                return false
            }
        }

        function _removeCookie(_7e, _7f) {
            document.cookie = "sc_" + _7e + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT; domain=" + _7f + "; path=/"
        }

        function detectBrowserFeatures() {
            var _80 = [];
            var i;
            var _82;
            var _83 = {
                pdf: "application/pdf",
                qt: "video/quicktime",
                realp: "audio/x-pn-realaudio-plugin",
                wma: "application/x-mplayer2",
                dir: "application/x-director",
                fla: "application/x-shockwave-flash",
                java: "application/x-java-vm",
                gears: "application/x-googlegears",
                ag: "application/x-silverlight"
            };
            var _84 = (new RegExp("Mac OS X.*Safari/")).test(navigator.userAgent) ? window.devicePixelRatio || 1 : 1;
            if (!((new RegExp("MSIE")).test(navigator.userAgent))) {
                if (navigator.mimeTypes && navigator.mimeTypes.length) {
                    for (i in _83) {
                        if (Object.prototype.hasOwnProperty.call(_83, i)) {
                            _82 = navigator.mimeTypes[_83[i]];
                            _80.push((_82 && _82.enabledPlugin) ? "1" : "0")
                        }
                    }
                }
                if (typeof navigator.javaEnabled !== "unknown" && typeof navigator.javaEnabled !== "undefined" && navigator.javaEnabled()) {
                    _80.push("java")
                }
                if (typeof window.GearsFactory === "function") {
                    _80.push("gears")
                }
            }
            _80.push(screen.width * _84 + "x" + screen.height * _84);
            return _80.join("")
        }

        function generate_uuid() {
            var now = new Date();
            var _86 = false;
            var _87 = 32;
            if (_86) {
                _87 = 36
            }
            var _88 = Math.round(now.getTime() / 1000) + now.getMilliseconds();
            var _89 = (navigator.userAgent || "") + (navigator.platform || "") + detectBrowserFeatures() + now.getTimezoneOffset() + window.innerWidth + window.innerHeight + window.screen.colorDepth + document.URL + _88;
            _44(_89);
            var _8a = "0123456789ABCDEF".split(""), _8b = new Array(_87), rnd = 0, r;
            for (var i = 0; i < _87; i++) {
                if (_86 && (i == 8 || i == 13 || i == 18 || i == 23)) {
                    _8b[i] = "-"
                } else {
                    if ((i == 12 && !_86) || (i == 14 && _86)) {
                        _8b[i] = "4"
                    } else {
                        if ((i == 13 && !_86) || (i == 15 && _86)) {
                            _8b[i] = "F"
                        } else {
                            if (rnd <= 2) {
                                rnd = 33554432 + (_43() * 16777216) | 0
                            }
                            r = rnd & 15;
                            rnd = rnd >> 4;
                            _8b[i] = _8a[(i == 19) ? (r & 3) | 8 : r]
                        }
                    }
                }
            }
            return _8b.join("")
        }

        if (!_sc_apply_mar_2017_fixes) {
            var _8f = classify_referrer(sc_referer);
            var _90 = categorize_class(_8f);
            if (_8f != "internal") {
                _28 = "&rcat=" + _90 + "&rdom=" + _8f
            }
        }
        var _91 = Math.round((new Date()).getTime() / 1000);
        if (sc_sp != "disabled") {
            if (_sc_apply_mar_2017_fixes) {
                var _8f = classify_referrer(sc_referer);
                var _90 = categorize_class(_8f);
                if (_8f != "internal") {
                    _28 = "&rcat=" + _90 + "&rdom=" + _8f
                }
            }
            try {
                var _92 = JSON.parse(localStorage.getItem("sc_medium_source"));
                if (_92 == null) {
                    _92 = {}
                }
                var _93 = null;
                var _94 = null;
                var _95 = null;
                var msl = 0;
                for (var k in _92) {
                    if (_93 === null || _92[k] > _92[_93]) {
                        _93 = k
                    }
                    var _98 = categorize_class(k);
                    if (_90 == _98 && (_94 === null || _92[k] > _92[_94])) {
                        _94 = k
                    }
                    if (_98 == "r" && (_95 === null || _92[k] < _92[_95])) {
                        _95 = k
                    }
                    msl += 1
                }
                if (msl > 30 && _95 !== null) {
                    delete _92[_95]
                }
                var _99 = "";
                if (sessionStorage.getItem("statcounter_bounce")) {
                    sessionStorage.removeItem("statcounter_bounce");
                    _99 = "&bb=0"
                }
                var _9a = 30;
                if (!_sc_apply_mar_2017_fixes) {
                    _9a = 15
                }
                if (_8f == "d" && _93 !== null && _93 != "d" && (_91 - _92[_93]) < 60 * _9a) {
                    _8f = "internal"
                }
                if (_sc_apply_mar_2017_fixes) {
                    if (sessionStorage.getItem("statcounter_session") && (_91 - parseInt(sessionStorage.getItem("statcounter_session"), 10)) < 60 * 30) {
                        _8f = "internal"
                    }
                    sessionStorage.setItem("statcounter_session", _91)
                }
                if (!_sc_apply_mar_2017_fixes) {
                    if (_90 == "r" && sessionStorage.getItem("statcounter_exit_domain") == _8f) {
                        _8f = "internal"
                    }
                }
                if (_8f == "internal") {
                    if (_93 !== null) {
                        _28 = "&rcat=" + categorize_class(_93) + "&rdomo=" + _93;
                        _28 += "&rdomg=" + (_91 - _92[_93]);
                        _92[_93] = _91
                    }
                } else {
                    var _9b = false;
                    if (_8f in _92) {
                        if (_8f == _93) {
                            _28 = _28.replace("rdom=", "rdomo=")
                        }
                        _28 += "&rdomg=" + (_91 - _92[_8f]);
                        if (_91 - _92[_8f] < 60 * 30) {
                            _9b = true
                        }
                    } else {
                        _28 += "&rdomg=new"
                    }
                    if (_99 == "" && !_9b) {
                        sessionStorage.setItem("statcounter_bounce", "1");
                        _99 = "&bb=1"
                    }
                    if (_94 !== null && (!(_8f in _92) || _8f != _94)) {
                        _28 += "&rcatg=" + (_91 - _92[_94])
                    }
                    _92[_8f] = _91
                }
                _28 += _99;
                try {
                    localStorage.setItem("sc_medium_source", JSON.stringify(_92))
                } catch (maybe_not_enough_space) {
                    if (_sc_apply_mar_2017_fixes) {
                        _28 = ""
                    }
                }
            } catch (e) {
                if (_sc_apply_mar_2017_fixes) {
                    _28 = ""
                }
            }
            if (_3d == 10227105) {
                try {
                    var _9c = new Image();
                    _9c.src = "//statcounter.com/feedback/?email=javascript@statcounter.com&page_url=" + encodeURIComponent(document.location.protocol + "//" + document.location.host + document.location.pathname + document.location.search + document.location.hash) + "&name=Auto%20JS&feedback_username=statcounter&pid=" + sc_project + "&fake_post&user_company&feedback=consistent%20uniques%20js%20exception:%20" + encodeURIComponent(localStorage.getItem("statcounter.com/localstorage/") + ":::" + _readCookie("is_visitor_unique"))
                } catch (ignore) {
                }
            }
            var _9d = "1.1.1.1.1.1.1.1.1";
            if (typeof window.sc_cookie_domain == "undefined") {
                var _9e = window.location.host
            }
            if (_9e.substring(0, 1) != ".") {
                _9e = "." + _9e
            }
            var _9f = "is_visitor_unique";
            try {
                var _a0 = getLocal(_9f)
            } catch (e) {
                var _a0 = false;
                sc_uuid = ".ex"
            }
            var _a1 = [];
            var _a2 = [];
            if (_a0 && _a0.substring(0, 2) == "rx") {
                removeLocal(_9f, _9e);
                var _a3 = _a0.substring(2);
                _a1 = _a3.split("-");
                var _a4 = false;
                var _a5 = false;
                for (var i = 0; i < _a1.length; i++) {
                    var _a7 = _a1[i].split(".");
                    if (_a7[0] == sc_project) {
                        _a4 = true;
                        var _a8 = parseInt(_a7[1], 10);
                        var _a9 = [30, 60, 120, 180, 360, 720, 1440, 2880, 10080];
                        var _aa = [];
                        var _ab = 2;
                        if (_a7[2].length == 32) {
                            sc_uuid = "." + _a7[2];
                            _ab = 3
                        } else {
                            sc_uuid = _a5
                        }
                        for (var ir = 0; ir < _a9.length; ir++) {
                            var _ad = parseInt(_a7[ir + _ab], 10);
                            if (isNaN(_ad)) {
                                _ad = 1
                            }
                            _aa.push(_ad)
                        }
                        sc_unique_returning += "&jg=" + (_91 - _a8);
                        for (var ir = 0; ir < _a9.length; ir++) {
                            if (_28.indexOf("rdom=") !== -1) {
                                _aa[ir]++
                            } else {
                                if (_91 > (_a8 + 60 * _a9[ir])) {
                                    _aa[ir]++
                                }
                            }
                        }
                        sc_unique_returning += "&rr=" + _aa.join(".");
                        _a2.push(sc_project + "." + _91 + sc_uuid + "." + _aa.join("."))
                    } else {
                        _a2.push(_a1[i]);
                        if (i == 0 && _a7[2].length == 32 && sc_uuid == "") {
                            sc_uuid = "." + _a7[2]
                        }
                    }
                    if (i == 0) {
                        _a5 = sc_uuid
                    }
                }
                if (!_a4) {
                    if (_a2.length == 0 && sc_uuid == "") {
                        sc_uuid = "." + generate_uuid()
                    }
                    _a2.push(sc_project + "." + _91 + sc_uuid + "." + _9d);
                    sc_unique_returning += "&jg=new&rr=" + _9d
                }
                _a2.sort(function (a, b) {
                    return parseInt(b.split(".")[1], 10) - parseInt(a.split(".")[1], 10)
                });
                for (var iv = 1; iv < _a2.length; iv++) {
                    _a2[iv] = _a2[iv].replace("." + _a2[0].split(".")[2] + ".", ".")
                }
                setLocal(_9f, _a2, _9e, "rx", 3)
            } else {
                if (sc_uuid != ".ex") {
                    sc_uuid = "." + generate_uuid();
                    _a2 = [sc_project + "." + _91 + sc_uuid + "." + _9d];
                    var _b1 = setLocal(_9f, _a2, _9e, "rx", 3);
                    if (_b1) {
                        sc_unique_returning += "&jg=new&rr=" + _9d
                    } else {
                        sc_uuid = ".na"
                    }
                }
            }
            if (sc_uuid != "") {
                sc_uuid_q = "&u1=" + sc_uuid.substring(1)
            }
        } else {
        }
    } catch (e) {
        if (_3e) {
            if (typeof encodeURIComponent != "function") {
                encodeURIComponent = function (s) {
                    return escape(s)
                }
            }
            var _b3 = "";
            _b3 += "unique_returning: " + sc_unique_returning + "\n";
            _b3 += "uuid: " + sc_uuid + "\n";
            _b3 += "cookie_projects_in: rx" + _a1.join("-") + "\n";
            _b3 += "cookie_projects_out: rx" + _a2.join("-") + "\n";
            for (var _b4 in e) {
                _b3 += "property: " + _b4 + " value: [" + e[_b4] + "]\n"
            }
            _b3 += "toString(): " + " value: [" + e.toString() + "]\n";
            var _9c = new Image();
            _9c.src = "//statcounter.com/feedback/?email=javascript@statcounter.com&page_url=" + encodeURIComponent(document.location.protocol + "//" + document.location.host + document.location.pathname + document.location.search + document.location.hash) + "&name=Auto%20JS&feedback_username=statcounter&pid=" + sc_project + "&fake_post&user_company&feedback=consistent%20uniques%20js%20exception:%20" + encodeURIComponent(_b3)
        }
        sc_unique_returning = "";
        sc_uuid_q = "&u1=f2"
    }
    if (Object.prototype.toString.call(_statcounter_pending) === "[object Array]") {
        var _b5 = _statcounter_pending.length;
        if (_b5 >= 1) {
            sc_pageview_tag_string = getTagString(_statcounter_pending[0])
        }
    }
    sc_base_dir += "&java=1&security=" + sc_security_code + sc_uuid_q;
    if (typeof performance !== "undefined") {
        try {
            var _b6 = performance.getEntriesByType("resource");
            for (var i = 0; i < _b6.length; i++) {
                var _b7 = _b6[i];
                if (_b7.name.includes("statcounter.com/counter/counter.js") || _b7.name.includes("statcounter.com/counter/counter_test.js")) {
                    var _b8 = _b7.responseEnd - _b7.fetchStart;
                    sc_base_dir += "&sc_rum_f_s=" + Math.round(_b7.requestStart) + "&sc_rum_f_e=" + Math.round(_b7.responseEnd);
                    break
                }
            }
        } catch (e) {
        }
    }
    var _b9 = sc_unique_returning + "&resolution=" + sc_width + "&h=" + sc_height + "&camefrom=" + escape(sc_referer.substring(0, 600)) + "&u=" + sc_url + "&t=" + sc_title + _28 + "&sc_snum=" + sc_script_num + sc_pageview_tag_string + "&sess=3ca678";
    if (window.sc_counter_width && window.sc_counter_height) {
        sc_counter_size = " width=\"" + sc_counter_width + "\" height=\"" + sc_counter_height + "\""
    }
    if (window.sc_remove_alt) {
        sc_alt_text = ""
    }
    if (sc_error == 1) {
        document.writeln("Code corrupted. Insert fresh copy.")
    } else {
        if (sc_remove == 1) {
        } else {
            sc_send_data()
        }
    }

    function sc_send_data() {
        if (sc_inv == 1 || sc_prerendering == 2) {
            _b9 += "&p=" + sc_prerendering + "&invisible=1";
            if (window.sc_call) {
                sc_call++
            } else {
                sc_call = 1
            }
            var _ba = false;
            if (sc_uuid != "" && typeof JSON == "object" && JSON && typeof JSON.stringify == "function" && "sessionStorage" in window) {
                _ba = true
            }
            var _bb = false;
            if (_ba) {
                try {
                    var _bc = sessionStorage.getItem("statcounter_pending");
                    if (!_bc) {
                        var _bd = {}
                    } else {
                        try {
                            var _bd = JSON.parse(_bc)
                        } catch (ignore) {
                            var _bd = {}
                        }
                    }
                    if (_bd[sc_project] === undefined) {
                        _bd[sc_project] = {}
                    }
                    var now = new Date().getTime();
                    _bd[sc_project][now] = _b9;
                    while (true) {
                        _bc = JSON.stringify(_bd);
                        if (_bc == "{}") {
                            sessionStorage.removeItem("statcounter_pending");
                            break
                        }
                        var _bf = _bc.split(/:.{20}/).length - 1;
                        if (_bf < 20) {
                            var _c0 = true;
                            try {
                                sessionStorage.setItem("statcounter_pending", _bc)
                            } catch (e) {
                                if (!e.name || e.name.toLowerCase().replace(/_/g, "").substring(0, 16) !== "quotaexceedederr") {
                                    throw e
                                }
                                _c0 = false
                            }
                            if (_c0) {
                                break
                            }
                        }
                        var _c1 = false;
                        var _c2 = false;
                        var _c3 = false;
                        for (var _c4 in _bd) {
                            for (var _c5 in _bd[_c4]) {
                                var _c6 = /jg=(\d+)/.exec(_bd[_c4][_c5]);
                                if (_c6 !== null) {
                                    var _c7 = parseInt(_c6[1])
                                } else {
                                    var _c7 = false
                                }
                                if (_c1 === false || (_c7 !== false && _c7 < _c1)) {
                                    if (_c7 !== false) {
                                        _c1 = _c7
                                    }
                                    _c2 = _c4;
                                    _c3 = _c5
                                }
                            }
                        }
                        if (_c3 === false) {
                            break
                        }
                        delete _bd[_c2][_c3];
                        if (JSON.stringify(_bd[_c2]) == "{}") {
                            delete _bd[_c2]
                        }
                    }
                    for (var ts in _bd[sc_project]) {
                        (function (_c9, _ca) {
                            var _cb = _bd[_ca][_c9];
                            if (!navigator.sendBeacon) {
                                _sc_imgs[sc_call + "." + _c9] = new Image();
                                _sc_imgs[sc_call + "." + _c9].onload = function () {
                                    var _cc = JSON.parse(sessionStorage.getItem("statcounter_pending"));
                                    if (_cc[_ca] !== undefined) {
                                        delete _cc[_ca][_c9];
                                        if (JSON.stringify(_cc[_ca]) == "{}") {
                                            delete _cc[_ca]
                                        }
                                    }
                                    var _cd = JSON.stringify(_cc);
                                    if (_cd == "{}") {
                                        sessionStorage.removeItem("statcounter_pending")
                                    } else {
                                        sessionStorage.setItem("statcounter_pending", _cd)
                                    }
                                };
                                if (_c9 != now) {
                                    _cb += "&pg=" + Math.round((now - _c9) / 1000)
                                } else {
                                    _bb = true
                                }
                                var _ce = "";
                                if (typeof performance !== "undefined") {
                                    _ce = "&sc_rum_e_s=" + sc_rum_start + "&sc_rum_e_e=" + Math.round(performance.now())
                                }
                                _sc_imgs[sc_call + "." + _c9].src = sc_base_dir + _ce + "&sc_random=" + Math.random() + _cb
                            } else {
                                if (_c9 != now) {
                                    _cb += "&pg=" + Math.round((now - _c9) / 1000)
                                } else {
                                    _bb = true
                                }
                                var _ce = "";
                                if (typeof performance !== "undefined") {
                                    _ce = "&sc_rum_e_s=" + sc_rum_start + "&sc_rum_e_e=" + Math.round(performance.now())
                                }
                                var _cf = sc_base_dir + _ce + "&sc_random=" + Math.random() + _cb;
                                navigator.sendBeacon(_cf, "");
                                if (_bd[_ca] !== undefined) {
                                    delete _bd[_ca][_c9];
                                    if (JSON.stringify(_bd[_ca]) == "{}") {
                                        delete _bd[_ca]
                                    }
                                }
                                var _d0 = JSON.stringify(_bd);
                                if (_d0 == "{}") {
                                    sessionStorage.removeItem("statcounter_pending")
                                } else {
                                    sessionStorage.setItem("statcounter_pending", _d0)
                                }
                            }
                        })(parseInt(ts, 10), sc_project)
                    }
                } catch (e) {
                    if (_3e) {
                        if (typeof encodeURIComponent != "function") {
                            encodeURIComponent = function (s) {
                                return escape(s)
                            }
                        }
                        var _d2 = "";
                        for (var _d3 in e) {
                            _d2 += "e[" + _d3 + "]: " + e[_d3] + "\n"
                        }
                        _d2 += "unique_returning: " + sc_unique_returning + "\n";
                        _d2 += "uuid: " + sc_uuid + "\n";
                        _d2 += "toString(): " + " value: [" + e.toString() + "]\n";
                        var _d4 = new Image();
                        _d4.src = "//statcounter.com/feedback/?email=javascript@statcounter.com&page_url=" + encodeURIComponent(document.location.protocol + "//" + document.location.host + document.location.pathname + document.location.search + document.location.hash) + "&name=Auto%20JS&feedback_username=statcounter&pid=" + sc_project + "&fake_post&user_company&feedback=pending%20exception:%20" + encodeURIComponent(_d2)
                    }
                }
            }
            if (!_ba || !_bb) {
                if (!navigator.sendBeacon) {
                    _sc_imgs[sc_call] = new Image();
                    var _d5 = "";
                    if (typeof performance !== "undefined") {
                        _d5 = "&sc_rum_e_s=" + sc_rum_start + "&sc_rum_e_e=" + Math.round(performance.now())
                    }
                    _sc_imgs[sc_call].src = sc_base_dir + _d5 + "&sc_random=" + Math.random() + _b9
                } else {
                    var _d5 = "";
                    if (typeof performance !== "undefined") {
                        _d5 = "&sc_rum_e_s=" + sc_rum_start + "&sc_rum_e_e=" + Math.round(performance.now())
                    }
                    var _d6 = sc_base_dir + _d5 + "&sc_random=" + Math.random() + _b9;
                    navigator.sendBeacon(_d6, "")
                }
            }
        } else {
            var _d5 = "";
            if (typeof performance !== "undefined") {
                _d5 = "&sc_rum_e_s=" + sc_rum_start + "&sc_rum_e_e=" + Math.round(performance.now())
            }
            var _d7 = sc_base_dir + _d5 + "&sc_random=" + Math.random() + _b9 + "&p=" + sc_prerendering;
            _d7 = _d7.replace(/&/g, "&amp;");
            if (window.sc_text) {
                document.writeln("<scr" + "ipt" + " src=" + _d7 + "&amp;text=" + sc_text + "></scr" + "ipt>")
            } else {
                document.writeln("<span class=\"statcounter\">" + sc_link_back_start + "<img src=\"" + _d7 + "\" alt=\"" + sc_alt_text + "\" border=\"0\"" + sc_counter_size + ">" + sc_link_back_end + "</span>")
            }
        }
    }
})([], 256, 6, 52);
if (sc_cls > 0) {
    if (clickstat_done != 1) {
        var clickstat_done = 1;
        var clickstat_project = window.sc_project;
        var clickstat_security = window.sc_security_code;
        var dlext = "7z|aac|avi|csv|doc|docx|exe|flv|gif|gz|jpe?g|js|mp(3|4|e?g)|mov|pdf|phps|png|ppt|rar|sit|tar|torrent|txt|wma|wmv|xls|xlsx|xml|zip";
        if (typeof (window.sc_download_type) == "string") {
            dlext = window.sc_download_type
        }
        var ltype = "https?|ftp|telnet|ssh|ssl|mailto|spotify|tel";
        var second = "ac|co|gov|ltd|me|mod|net|nic|nhs|org|plc|police|sch|com";
        var dl = new RegExp("\\.(" + dlext + ")$", "i");
        var lnk = new RegExp("^(" + ltype + "):", "i");
        var domsec = new RegExp("^(" + second + ")$", "i");
        var host_name = location.host.replace(/^www\./i, "");
        var host_splitted = host_name.split(".");
        var domain = host_splitted.pop();
        var host_split = host_splitted.pop();
        if (domsec.test(host_split)) {
            domain = host_split + "." + domain;
            host_split = host_splitted.pop()
        }
        domain = host_split + "." + domain;
        var lnklocal_mask = "^https?://(.*)(" + domain + "|webcache.googleusercontent.com)";
        var lnklocal = new RegExp(lnklocal_mask, "i");
        if (document.getElementsByTagName) {
            var anchors = document.getElementsByTagName("a");
            for (var i = 0; i < anchors.length; i++) {
                var anchor = anchors[i];
                if (anchor.onmousedown) {
                    var original_click = anchor.onmousedown;
                    var s = original_click.toString().split("\n").join(" ");
                    var bs = s.indexOf("{");
                    var head = s.substr(0, bs);
                    var ps = head.indexOf("(");
                    var pe = head.indexOf(")");
                    var params = head.substring(ps + 1, pe);
                    var plist = params.split(",");
                    var body = s.substr(bs + 1, s.length - bs - 2);
                    var insert = "sc_clickstat_call(this,'" + sc_click_dir + "');";
                    var final_body = insert + body;
                    var ev_head = "new Function(";
                    var ev_params = "";
                    var ev_sep = "";
                    for (var sc_i = 0; sc_i < plist.length; sc_i++) {
                        ev_params = ev_sep + "'" + plist[sc_i] + "'";
                        ev_sep = ","
                    }
                    if (ev_sep == ",") {
                        ev_params += ","
                    }
                    var ev_foot = "final_body);";
                    var ev_final = ev_head + ev_params + ev_foot;
                    anchor.onmousedown = eval(ev_final)
                } else {
                    anchor.onmousedown = new Function("event", "sc_clickstat_call(this,'" + sc_click_dir + "');return true;")
                }
            }
        }

        function sc_none() {
            return
        }

        function sc_delay() {
            if (window.sc_click_stat) {
                var d = window.sc_click_stat
            } else {
                var d = 0
            }
            var n = new Date();
            var t = n.getTime() + d;
            while (n.getTime() < t) {
                var n = new Date()
            }
        }

        function sc_clickstat_call(_db, _dc) {
            if (_db) {
                var _dd = 0;
                if (lnk.test(_db)) {
                    if ((lnklocal.test(_db))) {
                        if (dl.test(_db)) {
                            _dd = 1
                        } else {
                            if (window.sc_exit_link_detect && new RegExp(sc_exit_link_detect, "i").test(_db)) {
                                _dd = 2
                            } else {
                                if (sc_cls == 2) {
                                    _dd = 2
                                }
                            }
                        }
                    } else {
                        _dd = 2
                    }
                }
                if (_dd != 0) {
                    var _de = escape(_db);
                    if (_de.length > 0) {
                        if (sc_unique_returning == "") {
                            sc_unique_returning = "&jg=&rr="
                        }
                        if (!_sc_apply_mar_2017_fixes) {
                            if (_dd == 2 && sc_sp != "disabled") {
                                try {
                                    sessionStorage.setItem("statcounter_exit_domain", _de.split("/")[2].replace(/^www\./, ""))
                                } catch (ignore) {
                                }
                            }
                        }
                        var _df = _dc + "click.gif?sc_project=" + clickstat_project + "&security=" + clickstat_security + "&c=" + _de + "&m=" + _dd + "&u=" + sc_url + "&t=" + sc_title + "&sess=3ca678&rand=" + Math.random() + sc_uuid_q + sc_unique_returning;
                        var _e0 = new Image();
                        _e0.onload = sc_none;
                        _e0.src = _df;
                        sc_delay()
                    }
                }
            }
        }

        var sc_gsyn_pattern = "googlesyndication.com|ypn-js.overture.com|ypn-js.ysm.yahoo.com|googleads.g.doubleclick.net";
        var sc_gsyn_pattern2 = "^aswift_[0-9]+$";
        var sc_px;
        var sc_py;
        var element_in_focus;
        var time_element_gained_focus;

        function sc_adsense_click(_e1) {
            if (_e1.src.match(sc_gsyn_pattern)) {
                var _e2 = escape(_e1.src)
            } else {
                var _e2 = escape("Google Adsense " + _e1.width + "x" + _e1.height)
            }
            var _e3 = sc_click_dir + "click.gif?sc_project=" + clickstat_project + "&security=" + clickstat_security + "&c=" + _e2 + "&m=2&u=" + sc_url + "&t=" + sc_title + "&sess=3ca678&rand=" + Math.random() + sc_uuid_q + sc_unique_returning;
            if (!navigator.sendBeacon) {
                var i = new Image();
                i.src = _e3;
                sc_delay()
            } else {
                navigator.sendBeacon(_e3, "")
            }
        }

        function sc_adsense_init() {
            var _e5 = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
            var _e6 = /Firefox/.test(navigator.userAgent) && /Android/.test(navigator.userAgent);
            if (sc_new_ad_detection && (_e5 || _e6)) {
                var el = document.getElementsByTagName("iframe");
                for (var i = 0; i < el.length; i++) {
                    if (el[i].id.startsWith("aswift")) {
                        el[i].addEventListener("mouseenter", function (e) {
                            sc_adsense_click(this)
                        })
                    }
                }
            } else {
                if (document.all && typeof window.opera == "undefined") {
                    var el = document.getElementsByTagName("iframe");
                    for (var i = 0; i < el.length; i++) {
                        if (el[i].src.match(sc_gsyn_pattern) || el[i].id.match(sc_gsyn_pattern2)) {
                            el[i].onfocus = function () {
                                sc_adsense_click(this)
                            }
                        }
                    }
                } else {
                    if (typeof window.addEventListener != "undefined") {
                        var _ea = "unload";
                        if (sc_new_ad_detection) {
                            _ea = "beforeunload";
                            focus();
                            window.addEventListener("blur", function () {
                                var _eb = document.activeElement;
                                element_in_focus = _eb;
                                time_element_gained_focus = new Date().getTime()
                            })
                        }
                        window.addEventListener(_ea, sc_exitpage, false);
                        window.addEventListener("mousemove", sc_getmouse, true)
                    }
                }
            }
        }

        if (typeof window.addEventListener != "undefined") {
            window.addEventListener("load", sc_adsense_init, false)
        } else {
            if (typeof document.addEventListener != "undefined") {
                document.addEventListener("load", sc_adsense_init, false)
            } else {
                if (typeof window.attachEvent != "undefined") {
                    window.attachEvent("onload", sc_adsense_init)
                } else {
                    if (typeof window.onload == "function") {
                        var sc_existing = onload;
                        window.onload = function () {
                            sc_existing();
                            sc_adsense_init()
                        }
                    } else {
                        window.onload = sc_adsense_init
                    }
                }
            }
        }

        function sc_getmouse(e) {
            if (typeof e.pageX == "number") {
                sc_px = e.pageX;
                sc_py = e.pageY
            } else {
                if (typeof e.clientX == "number") {
                    sc_px = e.clientX;
                    sc_py = e.clientY;
                    if (document.body && (document.body.scrollLeft || document.body.scrollTop)) {
                        sc_px += document.body.scrollLeft;
                        sc_py += document.body.scrollTop
                    } else {
                        if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
                            sc_px += document.documentElement.scrollLeft;
                            sc_py += document.documentElement.scrollTop
                        }
                    }
                }
            }
        }

        function sc_findy(obj) {
            var y = 0;
            while (obj) {
                y += obj.offsetTop;
                obj = obj.offsetParent
            }
            return (y)
        }

        function sc_findx(obj) {
            var x = 0;
            while (obj) {
                x += obj.offsetLeft;
                obj = obj.offsetParent
            }
            return (x)
        }

        function sc_exitpage(e) {
            ad = document.getElementsByTagName("iframe");
            if (typeof sc_px != "undefined") {
                for (var i = 0; i < ad.length; i++) {
                    var _f3 = sc_findx(ad[i]);
                    var _f4 = sc_findy(ad[i]);
                    var adW = parseInt(_f3, 10) + parseInt(ad[i].width, 10) + 15;
                    var adH = parseInt(_f4, 10) + parseInt(ad[i].height, 10) + 10;
                    var _f7 = (sc_px > (_f3 - 10) && sc_px < adW);
                    var _f8 = (sc_py > (_f4 - 10) && sc_py < adH);
                    if (_f8 && _f7) {
                        if (ad[i].src.match(sc_gsyn_pattern) || ad[i].id.match(sc_gsyn_pattern2)) {
                            sc_adsense_click(ad[i])
                        }
                    }
                }
            }
            if (sc_new_ad_detection) {
                if (typeof element_in_focus != "undefined" && element_in_focus.id.startsWith("aswift")) {
                    var _f9 = new Date().getTime() - time_element_gained_focus;
                    if (_f9 < 300) {
                        sc_adsense_click(element_in_focus)
                    }
                }
            }
        }
    }
}