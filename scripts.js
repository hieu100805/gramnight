(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
        r(i);
    new MutationObserver(i => {
        for (const o of i)
            if (o.type === "childList")
                for (const s of o.addedNodes)
                    s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(i) {
        const o = {};
        return i.integrity && (o.integrity = i.integrity),
        i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
        i.crossOrigin === "use-credentials" ? o.credentials = "include" : i.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin",
        o
    }
    function r(i) {
        if (i.ep)
            return;
        i.ep = !0;
        const o = n(i);
        fetch(i.href, o)
    }
}
)();
function Vm(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Wf = {
    exports: {}
}
  , Po = {}
  , Hf = {
    exports: {}
}
  , V = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qr = Symbol.for("react.element")
  , Om = Symbol.for("react.portal")
  , Fm = Symbol.for("react.fragment")
  , Im = Symbol.for("react.strict_mode")
  , zm = Symbol.for("react.profiler")
  , Bm = Symbol.for("react.provider")
  , Um = Symbol.for("react.context")
  , $m = Symbol.for("react.forward_ref")
  , Gm = Symbol.for("react.suspense")
  , Wm = Symbol.for("react.memo")
  , Hm = Symbol.for("react.lazy")
  , xu = Symbol.iterator;
function Km(e) {
    return e === null || typeof e != "object" ? null : (e = xu && e[xu] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Kf = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , Qf = Object.assign
  , Xf = {};
function Kn(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Xf,
    this.updater = n || Kf
}
Kn.prototype.isReactComponent = {};
Kn.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
Kn.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Yf() {}
Yf.prototype = Kn.prototype;
function Gl(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Xf,
    this.updater = n || Kf
}
var Wl = Gl.prototype = new Yf;
Wl.constructor = Gl;
Qf(Wl, Kn.prototype);
Wl.isPureReactComponent = !0;
var wu = Array.isArray
  , Zf = Object.prototype.hasOwnProperty
  , Hl = {
    current: null
}
  , qf = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Jf(e, t, n) {
    var r, i = {}, o = null, s = null;
    if (t != null)
        for (r in t.ref !== void 0 && (s = t.ref),
        t.key !== void 0 && (o = "" + t.key),
        t)
            Zf.call(t, r) && !qf.hasOwnProperty(r) && (i[r] = t[r]);
    var l = arguments.length - 2;
    if (l === 1)
        i.children = n;
    else if (1 < l) {
        for (var a = Array(l), u = 0; u < l; u++)
            a[u] = arguments[u + 2];
        i.children = a
    }
    if (e && e.defaultProps)
        for (r in l = e.defaultProps,
        l)
            i[r] === void 0 && (i[r] = l[r]);
    return {
        $$typeof: qr,
        type: e,
        key: o,
        ref: s,
        props: i,
        _owner: Hl.current
    }
}
function Qm(e, t) {
    return {
        $$typeof: qr,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function Kl(e) {
    return typeof e == "object" && e !== null && e.$$typeof === qr
}
function Xm(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Su = /\/+/g;
function Xo(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Xm("" + e.key) : t.toString(36)
}
function ji(e, t, n, r, i) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var s = !1;
    if (e === null)
        s = !0;
    else
        switch (o) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case qr:
            case Om:
                s = !0
            }
        }
    if (s)
        return s = e,
        i = i(s),
        e = r === "" ? "." + Xo(s, 0) : r,
        wu(i) ? (n = "",
        e != null && (n = e.replace(Su, "$&/") + "/"),
        ji(i, t, n, "", function(u) {
            return u
        })) : i != null && (Kl(i) && (i = Qm(i, n + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(Su, "$&/") + "/") + e)),
        t.push(i)),
        1;
    if (s = 0,
    r = r === "" ? "." : r + ":",
    wu(e))
        for (var l = 0; l < e.length; l++) {
            o = e[l];
            var a = r + Xo(o, l);
            s += ji(o, t, n, a, i)
        }
    else if (a = Km(e),
    typeof a == "function")
        for (e = a.call(e),
        l = 0; !(o = e.next()).done; )
            o = o.value,
            a = r + Xo(o, l++),
            s += ji(o, t, n, a, i);
    else if (o === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}
function ui(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , i = 0;
    return ji(e, r, "", "", function(o) {
        return t.call(n, o, i++)
    }),
    r
}
function Ym(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var xe = {
    current: null
}
  , Ni = {
    transition: null
}
  , Zm = {
    ReactCurrentDispatcher: xe,
    ReactCurrentBatchConfig: Ni,
    ReactCurrentOwner: Hl
};
function bf() {
    throw Error("act(...) is not supported in production builds of React.")
}
V.Children = {
    map: ui,
    forEach: function(e, t, n) {
        ui(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return ui(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return ui(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Kl(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
V.Component = Kn;
V.Fragment = Fm;
V.Profiler = zm;
V.PureComponent = Gl;
V.StrictMode = Im;
V.Suspense = Gm;
V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Zm;
V.act = bf;
V.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Qf({}, e.props)
      , i = e.key
      , o = e.ref
      , s = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (o = t.ref,
        s = Hl.current),
        t.key !== void 0 && (i = "" + t.key),
        e.type && e.type.defaultProps)
            var l = e.type.defaultProps;
        for (a in t)
            Zf.call(t, a) && !qf.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a])
    }
    var a = arguments.length - 2;
    if (a === 1)
        r.children = n;
    else if (1 < a) {
        l = Array(a);
        for (var u = 0; u < a; u++)
            l[u] = arguments[u + 2];
        r.children = l
    }
    return {
        $$typeof: qr,
        type: e.type,
        key: i,
        ref: o,
        props: r,
        _owner: s
    }
}
;
V.createContext = function(e) {
    return e = {
        $$typeof: Um,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: Bm,
        _context: e
    },
    e.Consumer = e
}
;
V.createElement = Jf;
V.createFactory = function(e) {
    var t = Jf.bind(null, e);
    return t.type = e,
    t
}
;
V.createRef = function() {
    return {
        current: null
    }
}
;
V.forwardRef = function(e) {
    return {
        $$typeof: $m,
        render: e
    }
}
;
V.isValidElement = Kl;
V.lazy = function(e) {
    return {
        $$typeof: Hm,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Ym
    }
}
;
V.memo = function(e, t) {
    return {
        $$typeof: Wm,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
V.startTransition = function(e) {
    var t = Ni.transition;
    Ni.transition = {};
    try {
        e()
    } finally {
        Ni.transition = t
    }
}
;
V.unstable_act = bf;
V.useCallback = function(e, t) {
    return xe.current.useCallback(e, t)
}
;
V.useContext = function(e) {
    return xe.current.useContext(e)
}
;
V.useDebugValue = function() {}
;
V.useDeferredValue = function(e) {
    return xe.current.useDeferredValue(e)
}
;
V.useEffect = function(e, t) {
    return xe.current.useEffect(e, t)
}
;
V.useId = function() {
    return xe.current.useId()
}
;
V.useImperativeHandle = function(e, t, n) {
    return xe.current.useImperativeHandle(e, t, n)
}
;
V.useInsertionEffect = function(e, t) {
    return xe.current.useInsertionEffect(e, t)
}
;
V.useLayoutEffect = function(e, t) {
    return xe.current.useLayoutEffect(e, t)
}
;
V.useMemo = function(e, t) {
    return xe.current.useMemo(e, t)
}
;
V.useReducer = function(e, t, n) {
    return xe.current.useReducer(e, t, n)
}
;
V.useRef = function(e) {
    return xe.current.useRef(e)
}
;
V.useState = function(e) {
    return xe.current.useState(e)
}
;
V.useSyncExternalStore = function(e, t, n) {
    return xe.current.useSyncExternalStore(e, t, n)
}
;
V.useTransition = function() {
    return xe.current.useTransition()
}
;
V.version = "18.3.1";
Hf.exports = V;
var M = Hf.exports;
const qm = Vm(M);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jm = M
  , bm = Symbol.for("react.element")
  , eg = Symbol.for("react.fragment")
  , tg = Object.prototype.hasOwnProperty
  , ng = Jm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , rg = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function ed(e, t, n) {
    var r, i = {}, o = null, s = null;
    n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
    for (r in t)
        tg.call(t, r) && !rg.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            i[r] === void 0 && (i[r] = t[r]);
    return {
        $$typeof: bm,
        type: e,
        key: o,
        ref: s,
        props: i,
        _owner: ng.current
    }
}
Po.Fragment = eg;
Po.jsx = ed;
Po.jsxs = ed;
Wf.exports = Po;
var y = Wf.exports
  , Ds = {}
  , td = {
    exports: {}
}
  , Le = {}
  , nd = {
    exports: {}
}
  , rd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(_, L) {
        var R = _.length;
        _.push(L);
        e: for (; 0 < R; ) {
            var Y = R - 1 >>> 1
              , re = _[Y];
            if (0 < i(re, L))
                _[Y] = L,
                _[R] = re,
                R = Y;
            else
                break e
        }
    }
    function n(_) {
        return _.length === 0 ? null : _[0]
    }
    function r(_) {
        if (_.length === 0)
            return null;
        var L = _[0]
          , R = _.pop();
        if (R !== L) {
            _[0] = R;
            e: for (var Y = 0, re = _.length, li = re >>> 1; Y < li; ) {
                var Gt = 2 * (Y + 1) - 1
                  , Qo = _[Gt]
                  , Wt = Gt + 1
                  , ai = _[Wt];
                if (0 > i(Qo, R))
                    Wt < re && 0 > i(ai, Qo) ? (_[Y] = ai,
                    _[Wt] = R,
                    Y = Wt) : (_[Y] = Qo,
                    _[Gt] = R,
                    Y = Gt);
                else if (Wt < re && 0 > i(ai, R))
                    _[Y] = ai,
                    _[Wt] = R,
                    Y = Wt;
                else
                    break e
            }
        }
        return L
    }
    function i(_, L) {
        var R = _.sortIndex - L.sortIndex;
        return R !== 0 ? R : _.id - L.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        e.unstable_now = function() {
            return o.now()
        }
    } else {
        var s = Date
          , l = s.now();
        e.unstable_now = function() {
            return s.now() - l
        }
    }
    var a = []
      , u = []
      , c = 1
      , f = null
      , d = 3
      , g = !1
      , v = !1
      , x = !1
      , T = typeof setTimeout == "function" ? setTimeout : null
      , p = typeof clearTimeout == "function" ? clearTimeout : null
      , h = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function m(_) {
        for (var L = n(u); L !== null; ) {
            if (L.callback === null)
                r(u);
            else if (L.startTime <= _)
                r(u),
                L.sortIndex = L.expirationTime,
                t(a, L);
            else
                break;
            L = n(u)
        }
    }
    function w(_) {
        if (x = !1,
        m(_),
        !v)
            if (n(a) !== null)
                v = !0,
                si(S);
            else {
                var L = n(u);
                L !== null && b(w, L.startTime - _)
            }
    }
    function S(_, L) {
        v = !1,
        x && (x = !1,
        p(k),
        k = -1),
        g = !0;
        var R = d;
        try {
            for (m(L),
            f = n(a); f !== null && (!(f.expirationTime > L) || _ && !ne()); ) {
                var Y = f.callback;
                if (typeof Y == "function") {
                    f.callback = null,
                    d = f.priorityLevel;
                    var re = Y(f.expirationTime <= L);
                    L = e.unstable_now(),
                    typeof re == "function" ? f.callback = re : f === n(a) && r(a),
                    m(L)
                } else
                    r(a);
                f = n(a)
            }
            if (f !== null)
                var li = !0;
            else {
                var Gt = n(u);
                Gt !== null && b(w, Gt.startTime - L),
                li = !1
            }
            return li
        } finally {
            f = null,
            d = R,
            g = !1
        }
    }
    var P = !1
      , E = null
      , k = -1
      , D = 5
      , N = -1;
    function ne() {
        return !(e.unstable_now() - N < D)
    }
    function yt() {
        if (E !== null) {
            var _ = e.unstable_now();
            N = _;
            var L = !0;
            try {
                L = E(!0, _)
            } finally {
                L ? $t() : (P = !1,
                E = null)
            }
        } else
            P = !1
    }
    var $t;
    if (typeof h == "function")
        $t = function() {
            h(yt)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var Jn = new MessageChannel
          , vu = Jn.port2;
        Jn.port1.onmessage = yt,
        $t = function() {
            vu.postMessage(null)
        }
    } else
        $t = function() {
            T(yt, 0)
        }
        ;
    function si(_) {
        E = _,
        P || (P = !0,
        $t())
    }
    function b(_, L) {
        k = T(function() {
            _(e.unstable_now())
        }, L)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(_) {
        _.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        v || g || (v = !0,
        si(S))
    }
    ,
    e.unstable_forceFrameRate = function(_) {
        0 > _ || 125 < _ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D = 0 < _ ? Math.floor(1e3 / _) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return d
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(a)
    }
    ,
    e.unstable_next = function(_) {
        switch (d) {
        case 1:
        case 2:
        case 3:
            var L = 3;
            break;
        default:
            L = d
        }
        var R = d;
        d = L;
        try {
            return _()
        } finally {
            d = R
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(_, L) {
        switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            _ = 3
        }
        var R = d;
        d = _;
        try {
            return L()
        } finally {
            d = R
        }
    }
    ,
    e.unstable_scheduleCallback = function(_, L, R) {
        var Y = e.unstable_now();
        switch (typeof R == "object" && R !== null ? (R = R.delay,
        R = typeof R == "number" && 0 < R ? Y + R : Y) : R = Y,
        _) {
        case 1:
            var re = -1;
            break;
        case 2:
            re = 250;
            break;
        case 5:
            re = 1073741823;
            break;
        case 4:
            re = 1e4;
            break;
        default:
            re = 5e3
        }
        return re = R + re,
        _ = {
            id: c++,
            callback: L,
            priorityLevel: _,
            startTime: R,
            expirationTime: re,
            sortIndex: -1
        },
        R > Y ? (_.sortIndex = R,
        t(u, _),
        n(a) === null && _ === n(u) && (x ? (p(k),
        k = -1) : x = !0,
        b(w, R - Y))) : (_.sortIndex = re,
        t(a, _),
        v || g || (v = !0,
        si(S))),
        _
    }
    ,
    e.unstable_shouldYield = ne,
    e.unstable_wrapCallback = function(_) {
        var L = d;
        return function() {
            var R = d;
            d = L;
            try {
                return _.apply(this, arguments)
            } finally {
                d = R
            }
        }
    }
}
)(rd);
nd.exports = rd;
var ig = nd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var og = M
  , je = ig;
function C(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var id = new Set
  , Ar = {};
function un(e, t) {
    On(e, t),
    On(e + "Capture", t)
}
function On(e, t) {
    for (Ar[e] = t,
    e = 0; e < t.length; e++)
        id.add(t[e])
}
var ft = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , Vs = Object.prototype.hasOwnProperty
  , sg = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , Tu = {}
  , ku = {};
function lg(e) {
    return Vs.call(ku, e) ? !0 : Vs.call(Tu, e) ? !1 : sg.test(e) ? ku[e] = !0 : (Tu[e] = !0,
    !1)
}
function ag(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function ug(e, t, n, r) {
    if (t === null || typeof t > "u" || ag(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function we(e, t, n, r, i, o, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = i,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = o,
    this.removeEmptyString = s
}
var ce = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    ce[e] = new we(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    ce[t] = new we(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    ce[e] = new we(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    ce[e] = new we(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    ce[e] = new we(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    ce[e] = new we(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    ce[e] = new we(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    ce[e] = new we(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    ce[e] = new we(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var Ql = /[\-:]([a-z])/g;
function Xl(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Ql, Xl);
    ce[t] = new we(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Ql, Xl);
    ce[t] = new we(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Ql, Xl);
    ce[t] = new we(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    ce[e] = new we(e,1,!1,e.toLowerCase(),null,!1,!1)
});
ce.xlinkHref = new we("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    ce[e] = new we(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function Yl(e, t, n, r) {
    var i = ce.hasOwnProperty(t) ? ce[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (ug(t, n, i, r) && (n = null),
    r || i === null ? lg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName,
    r = i.attributeNamespace,
    n === null ? e.removeAttribute(t) : (i = i.type,
    n = i === 3 || i === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var gt = og.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , ci = Symbol.for("react.element")
  , hn = Symbol.for("react.portal")
  , pn = Symbol.for("react.fragment")
  , Zl = Symbol.for("react.strict_mode")
  , Os = Symbol.for("react.profiler")
  , od = Symbol.for("react.provider")
  , sd = Symbol.for("react.context")
  , ql = Symbol.for("react.forward_ref")
  , Fs = Symbol.for("react.suspense")
  , Is = Symbol.for("react.suspense_list")
  , Jl = Symbol.for("react.memo")
  , wt = Symbol.for("react.lazy")
  , ld = Symbol.for("react.offscreen")
  , Cu = Symbol.iterator;
function bn(e) {
    return e === null || typeof e != "object" ? null : (e = Cu && e[Cu] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var K = Object.assign, Yo;
function ur(e) {
    if (Yo === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Yo = t && t[1] || ""
        }
    return `
` + Yo + e
}
var Zo = !1;
function qo(e, t) {
    if (!e || Zo)
        return "";
    Zo = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var i = u.stack.split(`
`), o = r.stack.split(`
`), s = i.length - 1, l = o.length - 1; 1 <= s && 0 <= l && i[s] !== o[l]; )
                l--;
            for (; 1 <= s && 0 <= l; s--,
            l--)
                if (i[s] !== o[l]) {
                    if (s !== 1 || l !== 1)
                        do
                            if (s--,
                            l--,
                            0 > l || i[s] !== o[l]) {
                                var a = `
` + i[s].replace(" at new ", " at ");
                                return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)),
                                a
                            }
                        while (1 <= s && 0 <= l);
                    break
                }
        }
    } finally {
        Zo = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? ur(e) : ""
}
function cg(e) {
    switch (e.tag) {
    case 5:
        return ur(e.type);
    case 16:
        return ur("Lazy");
    case 13:
        return ur("Suspense");
    case 19:
        return ur("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = qo(e.type, !1),
        e;
    case 11:
        return e = qo(e.type.render, !1),
        e;
    case 1:
        return e = qo(e.type, !0),
        e;
    default:
        return ""
    }
}
function zs(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case pn:
        return "Fragment";
    case hn:
        return "Portal";
    case Os:
        return "Profiler";
    case Zl:
        return "StrictMode";
    case Fs:
        return "Suspense";
    case Is:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case sd:
            return (e.displayName || "Context") + ".Consumer";
        case od:
            return (e._context.displayName || "Context") + ".Provider";
        case ql:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case Jl:
            return t = e.displayName || null,
            t !== null ? t : zs(e.type) || "Memo";
        case wt:
            t = e._payload,
            e = e._init;
            try {
                return zs(e(t))
            } catch {}
        }
    return null
}
function fg(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return zs(t);
    case 8:
        return t === Zl ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function Dt(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function ad(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function dg(e) {
    var t = ad(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get
          , o = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return i.call(this)
            },
            set: function(s) {
                r = "" + s,
                o.call(this, s)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(s) {
                r = "" + s
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function fi(e) {
    e._valueTracker || (e._valueTracker = dg(e))
}
function ud(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = ad(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function Hi(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function Bs(e, t) {
    var n = t.checked;
    return K({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function Pu(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = Dt(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function cd(e, t) {
    t = t.checked,
    t != null && Yl(e, "checked", t, !1)
}
function Us(e, t) {
    cd(e, t);
    var n = Dt(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? $s(e, t.type, n) : t.hasOwnProperty("defaultValue") && $s(e, t.type, Dt(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Eu(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function $s(e, t, n) {
    (t !== "number" || Hi(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var cr = Array.isArray;
function jn(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var i = 0; i < n.length; i++)
            t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++)
            i = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Dt(n),
        t = null,
        i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                e[i].selected = !0,
                r && (e[i].defaultSelected = !0);
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}
function Gs(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(C(91));
    return K({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function Mu(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(C(92));
            if (cr(n)) {
                if (1 < n.length)
                    throw Error(C(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: Dt(n)
    }
}
function fd(e, t) {
    var n = Dt(t.value)
      , r = Dt(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function _u(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function dd(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function Ws(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? dd(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var di, hd = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, i)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (di = di || document.createElement("div"),
        di.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = di.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function jr(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var gr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , hg = ["Webkit", "ms", "Moz", "O"];
Object.keys(gr).forEach(function(e) {
    hg.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        gr[t] = gr[e]
    })
});
function pd(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || gr.hasOwnProperty(e) && gr[e] ? ("" + t).trim() : t + "px"
}
function md(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , i = pd(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, i) : e[n] = i
        }
}
var pg = K({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function Hs(e, t) {
    if (t) {
        if (pg[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(C(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(C(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(C(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(C(62))
    }
}
function Ks(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var Qs = null;
function bl(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var Xs = null
  , Nn = null
  , Ln = null;
function Au(e) {
    if (e = ei(e)) {
        if (typeof Xs != "function")
            throw Error(C(280));
        var t = e.stateNode;
        t && (t = jo(t),
        Xs(e.stateNode, e.type, t))
    }
}
function gd(e) {
    Nn ? Ln ? Ln.push(e) : Ln = [e] : Nn = e
}
function yd() {
    if (Nn) {
        var e = Nn
          , t = Ln;
        if (Ln = Nn = null,
        Au(e),
        t)
            for (e = 0; e < t.length; e++)
                Au(t[e])
    }
}
function vd(e, t) {
    return e(t)
}
function xd() {}
var Jo = !1;
function wd(e, t, n) {
    if (Jo)
        return e(t, n);
    Jo = !0;
    try {
        return vd(e, t, n)
    } finally {
        Jo = !1,
        (Nn !== null || Ln !== null) && (xd(),
        yd())
    }
}
function Nr(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = jo(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(C(231, t, typeof n));
    return n
}
var Ys = !1;
if (ft)
    try {
        var er = {};
        Object.defineProperty(er, "passive", {
            get: function() {
                Ys = !0
            }
        }),
        window.addEventListener("test", er, er),
        window.removeEventListener("test", er, er)
    } catch {
        Ys = !1
    }
function mg(e, t, n, r, i, o, s, l, a) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var yr = !1
  , Ki = null
  , Qi = !1
  , Zs = null
  , gg = {
    onError: function(e) {
        yr = !0,
        Ki = e
    }
};
function yg(e, t, n, r, i, o, s, l, a) {
    yr = !1,
    Ki = null,
    mg.apply(gg, arguments)
}
function vg(e, t, n, r, i, o, s, l, a) {
    if (yg.apply(this, arguments),
    yr) {
        if (yr) {
            var u = Ki;
            yr = !1,
            Ki = null
        } else
            throw Error(C(198));
        Qi || (Qi = !0,
        Zs = u)
    }
}
function cn(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function Sd(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function ju(e) {
    if (cn(e) !== e)
        throw Error(C(188))
}
function xg(e) {
    var t = e.alternate;
    if (!t) {
        if (t = cn(e),
        t === null)
            throw Error(C(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var i = n.return;
        if (i === null)
            break;
        var o = i.alternate;
        if (o === null) {
            if (r = i.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === o.child) {
            for (o = i.child; o; ) {
                if (o === n)
                    return ju(i),
                    e;
                if (o === r)
                    return ju(i),
                    t;
                o = o.sibling
            }
            throw Error(C(188))
        }
        if (n.return !== r.return)
            n = i,
            r = o;
        else {
            for (var s = !1, l = i.child; l; ) {
                if (l === n) {
                    s = !0,
                    n = i,
                    r = o;
                    break
                }
                if (l === r) {
                    s = !0,
                    r = i,
                    n = o;
                    break
                }
                l = l.sibling
            }
            if (!s) {
                for (l = o.child; l; ) {
                    if (l === n) {
                        s = !0,
                        n = o,
                        r = i;
                        break
                    }
                    if (l === r) {
                        s = !0,
                        r = o,
                        n = i;
                        break
                    }
                    l = l.sibling
                }
                if (!s)
                    throw Error(C(189))
            }
        }
        if (n.alternate !== r)
            throw Error(C(190))
    }
    if (n.tag !== 3)
        throw Error(C(188));
    return n.stateNode.current === n ? e : t
}
function Td(e) {
    return e = xg(e),
    e !== null ? kd(e) : null
}
function kd(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = kd(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var Cd = je.unstable_scheduleCallback
  , Nu = je.unstable_cancelCallback
  , wg = je.unstable_shouldYield
  , Sg = je.unstable_requestPaint
  , q = je.unstable_now
  , Tg = je.unstable_getCurrentPriorityLevel
  , ea = je.unstable_ImmediatePriority
  , Pd = je.unstable_UserBlockingPriority
  , Xi = je.unstable_NormalPriority
  , kg = je.unstable_LowPriority
  , Ed = je.unstable_IdlePriority
  , Eo = null
  , et = null;
function Cg(e) {
    if (et && typeof et.onCommitFiberRoot == "function")
        try {
            et.onCommitFiberRoot(Eo, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var Qe = Math.clz32 ? Math.clz32 : Mg
  , Pg = Math.log
  , Eg = Math.LN2;
function Mg(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (Pg(e) / Eg | 0) | 0
}
var hi = 64
  , pi = 4194304;
function fr(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function Yi(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , i = e.suspendedLanes
      , o = e.pingedLanes
      , s = n & 268435455;
    if (s !== 0) {
        var l = s & ~i;
        l !== 0 ? r = fr(l) : (o &= s,
        o !== 0 && (r = fr(o)))
    } else
        s = n & ~i,
        s !== 0 ? r = fr(s) : o !== 0 && (r = fr(o));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r,
    o = t & -t,
    i >= o || i === 16 && (o & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - Qe(t),
            i = 1 << n,
            r |= e[n],
            t &= ~i;
    return r
}
function _g(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function Ag(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
        var s = 31 - Qe(o)
          , l = 1 << s
          , a = i[s];
        a === -1 ? (!(l & n) || l & r) && (i[s] = _g(l, t)) : a <= t && (e.expiredLanes |= l),
        o &= ~l
    }
}
function qs(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function Md() {
    var e = hi;
    return hi <<= 1,
    !(hi & 4194240) && (hi = 64),
    e
}
function bo(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function Jr(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - Qe(t),
    e[t] = n
}
function jg(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var i = 31 - Qe(n)
          , o = 1 << i;
        t[i] = 0,
        r[i] = -1,
        e[i] = -1,
        n &= ~o
    }
}
function ta(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - Qe(n)
          , i = 1 << r;
        i & t | e[r] & t && (e[r] |= t),
        n &= ~i
    }
}
var F = 0;
function _d(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Ad, na, jd, Nd, Ld, Js = !1, mi = [], Et = null, Mt = null, _t = null, Lr = new Map, Rr = new Map, Tt = [], Ng = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Lu(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        Et = null;
        break;
    case "dragenter":
    case "dragleave":
        Mt = null;
        break;
    case "mouseover":
    case "mouseout":
        _t = null;
        break;
    case "pointerover":
    case "pointerout":
        Lr.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Rr.delete(t.pointerId)
    }
}
function tr(e, t, n, r, i, o) {
    return e === null || e.nativeEvent !== o ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i]
    },
    t !== null && (t = ei(t),
    t !== null && na(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    i !== null && t.indexOf(i) === -1 && t.push(i),
    e)
}
function Lg(e, t, n, r, i) {
    switch (t) {
    case "focusin":
        return Et = tr(Et, e, t, n, r, i),
        !0;
    case "dragenter":
        return Mt = tr(Mt, e, t, n, r, i),
        !0;
    case "mouseover":
        return _t = tr(_t, e, t, n, r, i),
        !0;
    case "pointerover":
        var o = i.pointerId;
        return Lr.set(o, tr(Lr.get(o) || null, e, t, n, r, i)),
        !0;
    case "gotpointercapture":
        return o = i.pointerId,
        Rr.set(o, tr(Rr.get(o) || null, e, t, n, r, i)),
        !0
    }
    return !1
}
function Rd(e) {
    var t = Zt(e.target);
    if (t !== null) {
        var n = cn(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = Sd(n),
                t !== null) {
                    e.blockedOn = t,
                    Ld(e.priority, function() {
                        jd(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function Li(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = bs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            Qs = r,
            n.target.dispatchEvent(r),
            Qs = null
        } else
            return t = ei(n),
            t !== null && na(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function Ru(e, t, n) {
    Li(e) && n.delete(t)
}
function Rg() {
    Js = !1,
    Et !== null && Li(Et) && (Et = null),
    Mt !== null && Li(Mt) && (Mt = null),
    _t !== null && Li(_t) && (_t = null),
    Lr.forEach(Ru),
    Rr.forEach(Ru)
}
function nr(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    Js || (Js = !0,
    je.unstable_scheduleCallback(je.unstable_NormalPriority, Rg)))
}
function Dr(e) {
    function t(i) {
        return nr(i, e)
    }
    if (0 < mi.length) {
        nr(mi[0], e);
        for (var n = 1; n < mi.length; n++) {
            var r = mi[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Et !== null && nr(Et, e),
    Mt !== null && nr(Mt, e),
    _t !== null && nr(_t, e),
    Lr.forEach(t),
    Rr.forEach(t),
    n = 0; n < Tt.length; n++)
        r = Tt[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Tt.length && (n = Tt[0],
    n.blockedOn === null); )
        Rd(n),
        n.blockedOn === null && Tt.shift()
}
var Rn = gt.ReactCurrentBatchConfig
  , Zi = !0;
function Dg(e, t, n, r) {
    var i = F
      , o = Rn.transition;
    Rn.transition = null;
    try {
        F = 1,
        ra(e, t, n, r)
    } finally {
        F = i,
        Rn.transition = o
    }
}
function Vg(e, t, n, r) {
    var i = F
      , o = Rn.transition;
    Rn.transition = null;
    try {
        F = 4,
        ra(e, t, n, r)
    } finally {
        F = i,
        Rn.transition = o
    }
}
function ra(e, t, n, r) {
    if (Zi) {
        var i = bs(e, t, n, r);
        if (i === null)
            us(e, t, r, qi, n),
            Lu(e, r);
        else if (Lg(i, e, t, n, r))
            r.stopPropagation();
        else if (Lu(e, r),
        t & 4 && -1 < Ng.indexOf(e)) {
            for (; i !== null; ) {
                var o = ei(i);
                if (o !== null && Ad(o),
                o = bs(e, t, n, r),
                o === null && us(e, t, r, qi, n),
                o === i)
                    break;
                i = o
            }
            i !== null && r.stopPropagation()
        } else
            us(e, t, r, null, n)
    }
}
var qi = null;
function bs(e, t, n, r) {
    if (qi = null,
    e = bl(r),
    e = Zt(e),
    e !== null)
        if (t = cn(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = Sd(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return qi = e,
    null
}
function Dd(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (Tg()) {
        case ea:
            return 1;
        case Pd:
            return 4;
        case Xi:
        case kg:
            return 16;
        case Ed:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var Ct = null
  , ia = null
  , Ri = null;
function Vd() {
    if (Ri)
        return Ri;
    var e, t = ia, n = t.length, r, i = "value"in Ct ? Ct.value : Ct.textContent, o = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++)
        ;
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === i[o - r]; r++)
        ;
    return Ri = i.slice(e, 1 < r ? 1 - r : void 0)
}
function Di(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function gi() {
    return !0
}
function Du() {
    return !1
}
function Re(e) {
    function t(n, r, i, o, s) {
        this._reactName = n,
        this._targetInst = i,
        this.type = r,
        this.nativeEvent = o,
        this.target = s,
        this.currentTarget = null;
        for (var l in e)
            e.hasOwnProperty(l) && (n = e[l],
            this[l] = n ? n(o) : o[l]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? gi : Du,
        this.isPropagationStopped = Du,
        this
    }
    return K(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = gi)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = gi)
        },
        persist: function() {},
        isPersistent: gi
    }),
    t
}
var Qn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, oa = Re(Qn), br = K({}, Qn, {
    view: 0,
    detail: 0
}), Og = Re(br), es, ts, rr, Mo = K({}, br, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: sa,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== rr && (rr && e.type === "mousemove" ? (es = e.screenX - rr.screenX,
        ts = e.screenY - rr.screenY) : ts = es = 0,
        rr = e),
        es)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : ts
    }
}), Vu = Re(Mo), Fg = K({}, Mo, {
    dataTransfer: 0
}), Ig = Re(Fg), zg = K({}, br, {
    relatedTarget: 0
}), ns = Re(zg), Bg = K({}, Qn, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), Ug = Re(Bg), $g = K({}, Qn, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), Gg = Re($g), Wg = K({}, Qn, {
    data: 0
}), Ou = Re(Wg), Hg = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, Kg = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, Qg = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function Xg(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Qg[e]) ? !!t[e] : !1
}
function sa() {
    return Xg
}
var Yg = K({}, br, {
    key: function(e) {
        if (e.key) {
            var t = Hg[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = Di(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Kg[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: sa,
    charCode: function(e) {
        return e.type === "keypress" ? Di(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? Di(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , Zg = Re(Yg)
  , qg = K({}, Mo, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , Fu = Re(qg)
  , Jg = K({}, br, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: sa
})
  , bg = Re(Jg)
  , ey = K({}, Qn, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , ty = Re(ey)
  , ny = K({}, Mo, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , ry = Re(ny)
  , iy = [9, 13, 27, 32]
  , la = ft && "CompositionEvent"in window
  , vr = null;
ft && "documentMode"in document && (vr = document.documentMode);
var oy = ft && "TextEvent"in window && !vr
  , Od = ft && (!la || vr && 8 < vr && 11 >= vr)
  , Iu = " "
  , zu = !1;
function Fd(e, t) {
    switch (e) {
    case "keyup":
        return iy.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function Id(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var mn = !1;
function sy(e, t) {
    switch (e) {
    case "compositionend":
        return Id(t);
    case "keypress":
        return t.which !== 32 ? null : (zu = !0,
        Iu);
    case "textInput":
        return e = t.data,
        e === Iu && zu ? null : e;
    default:
        return null
    }
}
function ly(e, t) {
    if (mn)
        return e === "compositionend" || !la && Fd(e, t) ? (e = Vd(),
        Ri = ia = Ct = null,
        mn = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return Od && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var ay = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function Bu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!ay[e.type] : t === "textarea"
}
function zd(e, t, n, r) {
    gd(r),
    t = Ji(t, "onChange"),
    0 < t.length && (n = new oa("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var xr = null
  , Vr = null;
function uy(e) {
    Zd(e, 0)
}
function _o(e) {
    var t = vn(e);
    if (ud(t))
        return e
}
function cy(e, t) {
    if (e === "change")
        return t
}
var Bd = !1;
if (ft) {
    var rs;
    if (ft) {
        var is = "oninput"in document;
        if (!is) {
            var Uu = document.createElement("div");
            Uu.setAttribute("oninput", "return;"),
            is = typeof Uu.oninput == "function"
        }
        rs = is
    } else
        rs = !1;
    Bd = rs && (!document.documentMode || 9 < document.documentMode)
}
function $u() {
    xr && (xr.detachEvent("onpropertychange", Ud),
    Vr = xr = null)
}
function Ud(e) {
    if (e.propertyName === "value" && _o(Vr)) {
        var t = [];
        zd(t, Vr, e, bl(e)),
        wd(uy, t)
    }
}
function fy(e, t, n) {
    e === "focusin" ? ($u(),
    xr = t,
    Vr = n,
    xr.attachEvent("onpropertychange", Ud)) : e === "focusout" && $u()
}
function dy(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return _o(Vr)
}
function hy(e, t) {
    if (e === "click")
        return _o(t)
}
function py(e, t) {
    if (e === "input" || e === "change")
        return _o(t)
}
function my(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Ze = typeof Object.is == "function" ? Object.is : my;
function Or(e, t) {
    if (Ze(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!Vs.call(t, i) || !Ze(e[i], t[i]))
            return !1
    }
    return !0
}
function Gu(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function Wu(e, t) {
    var n = Gu(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Gu(n)
    }
}
function $d(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? $d(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function Gd() {
    for (var e = window, t = Hi(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = Hi(e.document)
    }
    return t
}
function aa(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function gy(e) {
    var t = Gd()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && $d(n.ownerDocument.documentElement, n)) {
        if (r !== null && aa(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var i = n.textContent.length
                  , o = Math.min(r.start, i);
                r = r.end === void 0 ? o : Math.min(r.end, i),
                !e.extend && o > r && (i = r,
                r = o,
                o = i),
                i = Wu(n, o);
                var s = Wu(n, r);
                i && s && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(),
                t.setStart(i.node, i.offset),
                e.removeAllRanges(),
                o > r ? (e.addRange(t),
                e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var yy = ft && "documentMode"in document && 11 >= document.documentMode
  , gn = null
  , el = null
  , wr = null
  , tl = !1;
function Hu(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    tl || gn == null || gn !== Hi(r) || (r = gn,
    "selectionStart"in r && aa(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    wr && Or(wr, r) || (wr = r,
    r = Ji(el, "onSelect"),
    0 < r.length && (t = new oa("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = gn)))
}
function yi(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var yn = {
    animationend: yi("Animation", "AnimationEnd"),
    animationiteration: yi("Animation", "AnimationIteration"),
    animationstart: yi("Animation", "AnimationStart"),
    transitionend: yi("Transition", "TransitionEnd")
}
  , os = {}
  , Wd = {};
ft && (Wd = document.createElement("div").style,
"AnimationEvent"in window || (delete yn.animationend.animation,
delete yn.animationiteration.animation,
delete yn.animationstart.animation),
"TransitionEvent"in window || delete yn.transitionend.transition);
function Ao(e) {
    if (os[e])
        return os[e];
    if (!yn[e])
        return e;
    var t = yn[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Wd)
            return os[e] = t[n];
    return e
}
var Hd = Ao("animationend")
  , Kd = Ao("animationiteration")
  , Qd = Ao("animationstart")
  , Xd = Ao("transitionend")
  , Yd = new Map
  , Ku = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function It(e, t) {
    Yd.set(e, t),
    un(t, [e])
}
for (var ss = 0; ss < Ku.length; ss++) {
    var ls = Ku[ss]
      , vy = ls.toLowerCase()
      , xy = ls[0].toUpperCase() + ls.slice(1);
    It(vy, "on" + xy)
}
It(Hd, "onAnimationEnd");
It(Kd, "onAnimationIteration");
It(Qd, "onAnimationStart");
It("dblclick", "onDoubleClick");
It("focusin", "onFocus");
It("focusout", "onBlur");
It(Xd, "onTransitionEnd");
On("onMouseEnter", ["mouseout", "mouseover"]);
On("onMouseLeave", ["mouseout", "mouseover"]);
On("onPointerEnter", ["pointerout", "pointerover"]);
On("onPointerLeave", ["pointerout", "pointerover"]);
un("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
un("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
un("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
un("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
un("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
un("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var dr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , wy = new Set("cancel close invalid load scroll toggle".split(" ").concat(dr));
function Qu(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    vg(r, t, void 0, e),
    e.currentTarget = null
}
function Zd(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , i = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var l = r[s]
                      , a = l.instance
                      , u = l.currentTarget;
                    if (l = l.listener,
                    a !== o && i.isPropagationStopped())
                        break e;
                    Qu(i, l, u),
                    o = a
                }
            else
                for (s = 0; s < r.length; s++) {
                    if (l = r[s],
                    a = l.instance,
                    u = l.currentTarget,
                    l = l.listener,
                    a !== o && i.isPropagationStopped())
                        break e;
                    Qu(i, l, u),
                    o = a
                }
        }
    }
    if (Qi)
        throw e = Zs,
        Qi = !1,
        Zs = null,
        e
}
function z(e, t) {
    var n = t[sl];
    n === void 0 && (n = t[sl] = new Set);
    var r = e + "__bubble";
    n.has(r) || (qd(t, e, 2, !1),
    n.add(r))
}
function as(e, t, n) {
    var r = 0;
    t && (r |= 4),
    qd(n, e, r, t)
}
var vi = "_reactListening" + Math.random().toString(36).slice(2);
function Fr(e) {
    if (!e[vi]) {
        e[vi] = !0,
        id.forEach(function(n) {
            n !== "selectionchange" && (wy.has(n) || as(n, !1, e),
            as(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[vi] || (t[vi] = !0,
        as("selectionchange", !1, t))
    }
}
function qd(e, t, n, r) {
    switch (Dd(t)) {
    case 1:
        var i = Dg;
        break;
    case 4:
        i = Vg;
        break;
    default:
        i = ra
    }
    n = i.bind(null, t, n, e),
    i = void 0,
    !Ys || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0),
    r ? i !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
        passive: i
    }) : e.addEventListener(t, n, !1)
}
function us(e, t, n, r, i) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var s = r.tag;
            if (s === 3 || s === 4) {
                var l = r.stateNode.containerInfo;
                if (l === i || l.nodeType === 8 && l.parentNode === i)
                    break;
                if (s === 4)
                    for (s = r.return; s !== null; ) {
                        var a = s.tag;
                        if ((a === 3 || a === 4) && (a = s.stateNode.containerInfo,
                        a === i || a.nodeType === 8 && a.parentNode === i))
                            return;
                        s = s.return
                    }
                for (; l !== null; ) {
                    if (s = Zt(l),
                    s === null)
                        return;
                    if (a = s.tag,
                    a === 5 || a === 6) {
                        r = o = s;
                        continue e
                    }
                    l = l.parentNode
                }
            }
            r = r.return
        }
    wd(function() {
        var u = o
          , c = bl(n)
          , f = [];
        e: {
            var d = Yd.get(e);
            if (d !== void 0) {
                var g = oa
                  , v = e;
                switch (e) {
                case "keypress":
                    if (Di(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    g = Zg;
                    break;
                case "focusin":
                    v = "focus",
                    g = ns;
                    break;
                case "focusout":
                    v = "blur",
                    g = ns;
                    break;
                case "beforeblur":
                case "afterblur":
                    g = ns;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    g = Vu;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    g = Ig;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    g = bg;
                    break;
                case Hd:
                case Kd:
                case Qd:
                    g = Ug;
                    break;
                case Xd:
                    g = ty;
                    break;
                case "scroll":
                    g = Og;
                    break;
                case "wheel":
                    g = ry;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    g = Gg;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    g = Fu
                }
                var x = (t & 4) !== 0
                  , T = !x && e === "scroll"
                  , p = x ? d !== null ? d + "Capture" : null : d;
                x = [];
                for (var h = u, m; h !== null; ) {
                    m = h;
                    var w = m.stateNode;
                    if (m.tag === 5 && w !== null && (m = w,
                    p !== null && (w = Nr(h, p),
                    w != null && x.push(Ir(h, w, m)))),
                    T)
                        break;
                    h = h.return
                }
                0 < x.length && (d = new g(d,v,null,n,c),
                f.push({
                    event: d,
                    listeners: x
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (d = e === "mouseover" || e === "pointerover",
                g = e === "mouseout" || e === "pointerout",
                d && n !== Qs && (v = n.relatedTarget || n.fromElement) && (Zt(v) || v[dt]))
                    break e;
                if ((g || d) && (d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window,
                g ? (v = n.relatedTarget || n.toElement,
                g = u,
                v = v ? Zt(v) : null,
                v !== null && (T = cn(v),
                v !== T || v.tag !== 5 && v.tag !== 6) && (v = null)) : (g = null,
                v = u),
                g !== v)) {
                    if (x = Vu,
                    w = "onMouseLeave",
                    p = "onMouseEnter",
                    h = "mouse",
                    (e === "pointerout" || e === "pointerover") && (x = Fu,
                    w = "onPointerLeave",
                    p = "onPointerEnter",
                    h = "pointer"),
                    T = g == null ? d : vn(g),
                    m = v == null ? d : vn(v),
                    d = new x(w,h + "leave",g,n,c),
                    d.target = T,
                    d.relatedTarget = m,
                    w = null,
                    Zt(c) === u && (x = new x(p,h + "enter",v,n,c),
                    x.target = m,
                    x.relatedTarget = T,
                    w = x),
                    T = w,
                    g && v)
                        t: {
                            for (x = g,
                            p = v,
                            h = 0,
                            m = x; m; m = dn(m))
                                h++;
                            for (m = 0,
                            w = p; w; w = dn(w))
                                m++;
                            for (; 0 < h - m; )
                                x = dn(x),
                                h--;
                            for (; 0 < m - h; )
                                p = dn(p),
                                m--;
                            for (; h--; ) {
                                if (x === p || p !== null && x === p.alternate)
                                    break t;
                                x = dn(x),
                                p = dn(p)
                            }
                            x = null
                        }
                    else
                        x = null;
                    g !== null && Xu(f, d, g, x, !1),
                    v !== null && T !== null && Xu(f, T, v, x, !0)
                }
            }
            e: {
                if (d = u ? vn(u) : window,
                g = d.nodeName && d.nodeName.toLowerCase(),
                g === "select" || g === "input" && d.type === "file")
                    var S = cy;
                else if (Bu(d))
                    if (Bd)
                        S = py;
                    else {
                        S = dy;
                        var P = fy
                    }
                else
                    (g = d.nodeName) && g.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (S = hy);
                if (S && (S = S(e, u))) {
                    zd(f, S, n, c);
                    break e
                }
                P && P(e, d, u),
                e === "focusout" && (P = d._wrapperState) && P.controlled && d.type === "number" && $s(d, "number", d.value)
            }
            switch (P = u ? vn(u) : window,
            e) {
            case "focusin":
                (Bu(P) || P.contentEditable === "true") && (gn = P,
                el = u,
                wr = null);
                break;
            case "focusout":
                wr = el = gn = null;
                break;
            case "mousedown":
                tl = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                tl = !1,
                Hu(f, n, c);
                break;
            case "selectionchange":
                if (yy)
                    break;
            case "keydown":
            case "keyup":
                Hu(f, n, c)
            }
            var E;
            if (la)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var k = "onCompositionStart";
                        break e;
                    case "compositionend":
                        k = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        k = "onCompositionUpdate";
                        break e
                    }
                    k = void 0
                }
            else
                mn ? Fd(e, n) && (k = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (k = "onCompositionStart");
            k && (Od && n.locale !== "ko" && (mn || k !== "onCompositionStart" ? k === "onCompositionEnd" && mn && (E = Vd()) : (Ct = c,
            ia = "value"in Ct ? Ct.value : Ct.textContent,
            mn = !0)),
            P = Ji(u, k),
            0 < P.length && (k = new Ou(k,e,null,n,c),
            f.push({
                event: k,
                listeners: P
            }),
            E ? k.data = E : (E = Id(n),
            E !== null && (k.data = E)))),
            (E = oy ? sy(e, n) : ly(e, n)) && (u = Ji(u, "onBeforeInput"),
            0 < u.length && (c = new Ou("onBeforeInput","beforeinput",null,n,c),
            f.push({
                event: c,
                listeners: u
            }),
            c.data = E))
        }
        Zd(f, t)
    })
}
function Ir(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function Ji(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var i = e
          , o = i.stateNode;
        i.tag === 5 && o !== null && (i = o,
        o = Nr(e, n),
        o != null && r.unshift(Ir(e, o, i)),
        o = Nr(e, t),
        o != null && r.push(Ir(e, o, i))),
        e = e.return
    }
    return r
}
function dn(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function Xu(e, t, n, r, i) {
    for (var o = t._reactName, s = []; n !== null && n !== r; ) {
        var l = n
          , a = l.alternate
          , u = l.stateNode;
        if (a !== null && a === r)
            break;
        l.tag === 5 && u !== null && (l = u,
        i ? (a = Nr(n, o),
        a != null && s.unshift(Ir(n, a, l))) : i || (a = Nr(n, o),
        a != null && s.push(Ir(n, a, l)))),
        n = n.return
    }
    s.length !== 0 && e.push({
        event: t,
        listeners: s
    })
}
var Sy = /\r\n?/g
  , Ty = /\u0000|\uFFFD/g;
function Yu(e) {
    return (typeof e == "string" ? e : "" + e).replace(Sy, `
`).replace(Ty, "")
}
function xi(e, t, n) {
    if (t = Yu(t),
    Yu(e) !== t && n)
        throw Error(C(425))
}
function bi() {}
var nl = null
  , rl = null;
function il(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var ol = typeof setTimeout == "function" ? setTimeout : void 0
  , ky = typeof clearTimeout == "function" ? clearTimeout : void 0
  , Zu = typeof Promise == "function" ? Promise : void 0
  , Cy = typeof queueMicrotask == "function" ? queueMicrotask : typeof Zu < "u" ? function(e) {
    return Zu.resolve(null).then(e).catch(Py)
}
: ol;
function Py(e) {
    setTimeout(function() {
        throw e
    })
}
function cs(e, t) {
    var n = t
      , r = 0;
    do {
        var i = n.nextSibling;
        if (e.removeChild(n),
        i && i.nodeType === 8)
            if (n = i.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(i),
                    Dr(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    Dr(t)
}
function At(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function qu(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Xn = Math.random().toString(36).slice(2)
  , be = "__reactFiber$" + Xn
  , zr = "__reactProps$" + Xn
  , dt = "__reactContainer$" + Xn
  , sl = "__reactEvents$" + Xn
  , Ey = "__reactListeners$" + Xn
  , My = "__reactHandles$" + Xn;
function Zt(e) {
    var t = e[be];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[dt] || n[be]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = qu(e); e !== null; ) {
                    if (n = e[be])
                        return n;
                    e = qu(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function ei(e) {
    return e = e[be] || e[dt],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function vn(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(C(33))
}
function jo(e) {
    return e[zr] || null
}
var ll = []
  , xn = -1;
function zt(e) {
    return {
        current: e
    }
}
function B(e) {
    0 > xn || (e.current = ll[xn],
    ll[xn] = null,
    xn--)
}
function I(e, t) {
    xn++,
    ll[xn] = e.current,
    e.current = t
}
var Vt = {}
  , ge = zt(Vt)
  , ke = zt(!1)
  , rn = Vt;
function Fn(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return Vt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, o;
    for (o in n)
        i[o] = t[o];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = i),
    i
}
function Ce(e) {
    return e = e.childContextTypes,
    e != null
}
function eo() {
    B(ke),
    B(ge)
}
function Ju(e, t, n) {
    if (ge.current !== Vt)
        throw Error(C(168));
    I(ge, t),
    I(ke, n)
}
function Jd(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in t))
            throw Error(C(108, fg(e) || "Unknown", i));
    return K({}, n, r)
}
function to(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Vt,
    rn = ge.current,
    I(ge, e),
    I(ke, ke.current),
    !0
}
function bu(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(C(169));
    n ? (e = Jd(e, t, rn),
    r.__reactInternalMemoizedMergedChildContext = e,
    B(ke),
    B(ge),
    I(ge, e)) : B(ke),
    I(ke, n)
}
var ot = null
  , No = !1
  , fs = !1;
function bd(e) {
    ot === null ? ot = [e] : ot.push(e)
}
function _y(e) {
    No = !0,
    bd(e)
}
function Bt() {
    if (!fs && ot !== null) {
        fs = !0;
        var e = 0
          , t = F;
        try {
            var n = ot;
            for (F = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            ot = null,
            No = !1
        } catch (i) {
            throw ot !== null && (ot = ot.slice(e + 1)),
            Cd(ea, Bt),
            i
        } finally {
            F = t,
            fs = !1
        }
    }
    return null
}
var wn = []
  , Sn = 0
  , no = null
  , ro = 0
  , Oe = []
  , Fe = 0
  , on = null
  , st = 1
  , lt = "";
function Kt(e, t) {
    wn[Sn++] = ro,
    wn[Sn++] = no,
    no = e,
    ro = t
}
function eh(e, t, n) {
    Oe[Fe++] = st,
    Oe[Fe++] = lt,
    Oe[Fe++] = on,
    on = e;
    var r = st;
    e = lt;
    var i = 32 - Qe(r) - 1;
    r &= ~(1 << i),
    n += 1;
    var o = 32 - Qe(t) + i;
    if (30 < o) {
        var s = i - i % 5;
        o = (r & (1 << s) - 1).toString(32),
        r >>= s,
        i -= s,
        st = 1 << 32 - Qe(t) + i | n << i | r,
        lt = o + e
    } else
        st = 1 << o | n << i | r,
        lt = e
}
function ua(e) {
    e.return !== null && (Kt(e, 1),
    eh(e, 1, 0))
}
function ca(e) {
    for (; e === no; )
        no = wn[--Sn],
        wn[Sn] = null,
        ro = wn[--Sn],
        wn[Sn] = null;
    for (; e === on; )
        on = Oe[--Fe],
        Oe[Fe] = null,
        lt = Oe[--Fe],
        Oe[Fe] = null,
        st = Oe[--Fe],
        Oe[Fe] = null
}
var _e = null
  , Me = null
  , $ = !1
  , Ke = null;
function th(e, t) {
    var n = Ie(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function ec(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        _e = e,
        Me = At(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        _e = e,
        Me = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = on !== null ? {
            id: st,
            overflow: lt
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = Ie(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        _e = e,
        Me = null,
        !0) : !1;
    default:
        return !1
    }
}
function al(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function ul(e) {
    if ($) {
        var t = Me;
        if (t) {
            var n = t;
            if (!ec(e, t)) {
                if (al(e))
                    throw Error(C(418));
                t = At(n.nextSibling);
                var r = _e;
                t && ec(e, t) ? th(r, n) : (e.flags = e.flags & -4097 | 2,
                $ = !1,
                _e = e)
            }
        } else {
            if (al(e))
                throw Error(C(418));
            e.flags = e.flags & -4097 | 2,
            $ = !1,
            _e = e
        }
    }
}
function tc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    _e = e
}
function wi(e) {
    if (e !== _e)
        return !1;
    if (!$)
        return tc(e),
        $ = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !il(e.type, e.memoizedProps)),
    t && (t = Me)) {
        if (al(e))
            throw nh(),
            Error(C(418));
        for (; t; )
            th(e, t),
            t = At(t.nextSibling)
    }
    if (tc(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(C(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Me = At(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Me = null
        }
    } else
        Me = _e ? At(e.stateNode.nextSibling) : null;
    return !0
}
function nh() {
    for (var e = Me; e; )
        e = At(e.nextSibling)
}
function In() {
    Me = _e = null,
    $ = !1
}
function fa(e) {
    Ke === null ? Ke = [e] : Ke.push(e)
}
var Ay = gt.ReactCurrentBatchConfig;
function ir(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(C(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(C(147, e));
            var i = r
              , o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(s) {
                var l = i.refs;
                s === null ? delete l[o] : l[o] = s
            }
            ,
            t._stringRef = o,
            t)
        }
        if (typeof e != "string")
            throw Error(C(284));
        if (!n._owner)
            throw Error(C(290, e))
    }
    return e
}
function Si(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(C(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function nc(e) {
    var t = e._init;
    return t(e._payload)
}
function rh(e) {
    function t(p, h) {
        if (e) {
            var m = p.deletions;
            m === null ? (p.deletions = [h],
            p.flags |= 16) : m.push(h)
        }
    }
    function n(p, h) {
        if (!e)
            return null;
        for (; h !== null; )
            t(p, h),
            h = h.sibling;
        return null
    }
    function r(p, h) {
        for (p = new Map; h !== null; )
            h.key !== null ? p.set(h.key, h) : p.set(h.index, h),
            h = h.sibling;
        return p
    }
    function i(p, h) {
        return p = Rt(p, h),
        p.index = 0,
        p.sibling = null,
        p
    }
    function o(p, h, m) {
        return p.index = m,
        e ? (m = p.alternate,
        m !== null ? (m = m.index,
        m < h ? (p.flags |= 2,
        h) : m) : (p.flags |= 2,
        h)) : (p.flags |= 1048576,
        h)
    }
    function s(p) {
        return e && p.alternate === null && (p.flags |= 2),
        p
    }
    function l(p, h, m, w) {
        return h === null || h.tag !== 6 ? (h = vs(m, p.mode, w),
        h.return = p,
        h) : (h = i(h, m),
        h.return = p,
        h)
    }
    function a(p, h, m, w) {
        var S = m.type;
        return S === pn ? c(p, h, m.props.children, w, m.key) : h !== null && (h.elementType === S || typeof S == "object" && S !== null && S.$$typeof === wt && nc(S) === h.type) ? (w = i(h, m.props),
        w.ref = ir(p, h, m),
        w.return = p,
        w) : (w = Ui(m.type, m.key, m.props, null, p.mode, w),
        w.ref = ir(p, h, m),
        w.return = p,
        w)
    }
    function u(p, h, m, w) {
        return h === null || h.tag !== 4 || h.stateNode.containerInfo !== m.containerInfo || h.stateNode.implementation !== m.implementation ? (h = xs(m, p.mode, w),
        h.return = p,
        h) : (h = i(h, m.children || []),
        h.return = p,
        h)
    }
    function c(p, h, m, w, S) {
        return h === null || h.tag !== 7 ? (h = tn(m, p.mode, w, S),
        h.return = p,
        h) : (h = i(h, m),
        h.return = p,
        h)
    }
    function f(p, h, m) {
        if (typeof h == "string" && h !== "" || typeof h == "number")
            return h = vs("" + h, p.mode, m),
            h.return = p,
            h;
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
            case ci:
                return m = Ui(h.type, h.key, h.props, null, p.mode, m),
                m.ref = ir(p, null, h),
                m.return = p,
                m;
            case hn:
                return h = xs(h, p.mode, m),
                h.return = p,
                h;
            case wt:
                var w = h._init;
                return f(p, w(h._payload), m)
            }
            if (cr(h) || bn(h))
                return h = tn(h, p.mode, m, null),
                h.return = p,
                h;
            Si(p, h)
        }
        return null
    }
    function d(p, h, m, w) {
        var S = h !== null ? h.key : null;
        if (typeof m == "string" && m !== "" || typeof m == "number")
            return S !== null ? null : l(p, h, "" + m, w);
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
            case ci:
                return m.key === S ? a(p, h, m, w) : null;
            case hn:
                return m.key === S ? u(p, h, m, w) : null;
            case wt:
                return S = m._init,
                d(p, h, S(m._payload), w)
            }
            if (cr(m) || bn(m))
                return S !== null ? null : c(p, h, m, w, null);
            Si(p, m)
        }
        return null
    }
    function g(p, h, m, w, S) {
        if (typeof w == "string" && w !== "" || typeof w == "number")
            return p = p.get(m) || null,
            l(h, p, "" + w, S);
        if (typeof w == "object" && w !== null) {
            switch (w.$$typeof) {
            case ci:
                return p = p.get(w.key === null ? m : w.key) || null,
                a(h, p, w, S);
            case hn:
                return p = p.get(w.key === null ? m : w.key) || null,
                u(h, p, w, S);
            case wt:
                var P = w._init;
                return g(p, h, m, P(w._payload), S)
            }
            if (cr(w) || bn(w))
                return p = p.get(m) || null,
                c(h, p, w, S, null);
            Si(h, w)
        }
        return null
    }
    function v(p, h, m, w) {
        for (var S = null, P = null, E = h, k = h = 0, D = null; E !== null && k < m.length; k++) {
            E.index > k ? (D = E,
            E = null) : D = E.sibling;
            var N = d(p, E, m[k], w);
            if (N === null) {
                E === null && (E = D);
                break
            }
            e && E && N.alternate === null && t(p, E),
            h = o(N, h, k),
            P === null ? S = N : P.sibling = N,
            P = N,
            E = D
        }
        if (k === m.length)
            return n(p, E),
            $ && Kt(p, k),
            S;
        if (E === null) {
            for (; k < m.length; k++)
                E = f(p, m[k], w),
                E !== null && (h = o(E, h, k),
                P === null ? S = E : P.sibling = E,
                P = E);
            return $ && Kt(p, k),
            S
        }
        for (E = r(p, E); k < m.length; k++)
            D = g(E, p, k, m[k], w),
            D !== null && (e && D.alternate !== null && E.delete(D.key === null ? k : D.key),
            h = o(D, h, k),
            P === null ? S = D : P.sibling = D,
            P = D);
        return e && E.forEach(function(ne) {
            return t(p, ne)
        }),
        $ && Kt(p, k),
        S
    }
    function x(p, h, m, w) {
        var S = bn(m);
        if (typeof S != "function")
            throw Error(C(150));
        if (m = S.call(m),
        m == null)
            throw Error(C(151));
        for (var P = S = null, E = h, k = h = 0, D = null, N = m.next(); E !== null && !N.done; k++,
        N = m.next()) {
            E.index > k ? (D = E,
            E = null) : D = E.sibling;
            var ne = d(p, E, N.value, w);
            if (ne === null) {
                E === null && (E = D);
                break
            }
            e && E && ne.alternate === null && t(p, E),
            h = o(ne, h, k),
            P === null ? S = ne : P.sibling = ne,
            P = ne,
            E = D
        }
        if (N.done)
            return n(p, E),
            $ && Kt(p, k),
            S;
        if (E === null) {
            for (; !N.done; k++,
            N = m.next())
                N = f(p, N.value, w),
                N !== null && (h = o(N, h, k),
                P === null ? S = N : P.sibling = N,
                P = N);
            return $ && Kt(p, k),
            S
        }
        for (E = r(p, E); !N.done; k++,
        N = m.next())
            N = g(E, p, k, N.value, w),
            N !== null && (e && N.alternate !== null && E.delete(N.key === null ? k : N.key),
            h = o(N, h, k),
            P === null ? S = N : P.sibling = N,
            P = N);
        return e && E.forEach(function(yt) {
            return t(p, yt)
        }),
        $ && Kt(p, k),
        S
    }
    function T(p, h, m, w) {
        if (typeof m == "object" && m !== null && m.type === pn && m.key === null && (m = m.props.children),
        typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
            case ci:
                e: {
                    for (var S = m.key, P = h; P !== null; ) {
                        if (P.key === S) {
                            if (S = m.type,
                            S === pn) {
                                if (P.tag === 7) {
                                    n(p, P.sibling),
                                    h = i(P, m.props.children),
                                    h.return = p,
                                    p = h;
                                    break e
                                }
                            } else if (P.elementType === S || typeof S == "object" && S !== null && S.$$typeof === wt && nc(S) === P.type) {
                                n(p, P.sibling),
                                h = i(P, m.props),
                                h.ref = ir(p, P, m),
                                h.return = p,
                                p = h;
                                break e
                            }
                            n(p, P);
                            break
                        } else
                            t(p, P);
                        P = P.sibling
                    }
                    m.type === pn ? (h = tn(m.props.children, p.mode, w, m.key),
                    h.return = p,
                    p = h) : (w = Ui(m.type, m.key, m.props, null, p.mode, w),
                    w.ref = ir(p, h, m),
                    w.return = p,
                    p = w)
                }
                return s(p);
            case hn:
                e: {
                    for (P = m.key; h !== null; ) {
                        if (h.key === P)
                            if (h.tag === 4 && h.stateNode.containerInfo === m.containerInfo && h.stateNode.implementation === m.implementation) {
                                n(p, h.sibling),
                                h = i(h, m.children || []),
                                h.return = p,
                                p = h;
                                break e
                            } else {
                                n(p, h);
                                break
                            }
                        else
                            t(p, h);
                        h = h.sibling
                    }
                    h = xs(m, p.mode, w),
                    h.return = p,
                    p = h
                }
                return s(p);
            case wt:
                return P = m._init,
                T(p, h, P(m._payload), w)
            }
            if (cr(m))
                return v(p, h, m, w);
            if (bn(m))
                return x(p, h, m, w);
            Si(p, m)
        }
        return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m,
        h !== null && h.tag === 6 ? (n(p, h.sibling),
        h = i(h, m),
        h.return = p,
        p = h) : (n(p, h),
        h = vs(m, p.mode, w),
        h.return = p,
        p = h),
        s(p)) : n(p, h)
    }
    return T
}
var zn = rh(!0)
  , ih = rh(!1)
  , io = zt(null)
  , oo = null
  , Tn = null
  , da = null;
function ha() {
    da = Tn = oo = null
}
function pa(e) {
    var t = io.current;
    B(io),
    e._currentValue = t
}
function cl(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function Dn(e, t) {
    oo = e,
    da = Tn = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (Te = !0),
    e.firstContext = null)
}
function Be(e) {
    var t = e._currentValue;
    if (da !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Tn === null) {
            if (oo === null)
                throw Error(C(308));
            Tn = e,
            oo.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Tn = Tn.next = e;
    return t
}
var qt = null;
function ma(e) {
    qt === null ? qt = [e] : qt.push(e)
}
function oh(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n,
    ma(t)) : (n.next = i.next,
    i.next = n),
    t.interleaved = n,
    ht(e, r)
}
function ht(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var St = !1;
function ga(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function sh(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function at(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function jt(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    O & 2) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next,
        i.next = t),
        r.pending = t,
        ht(e, n)
    }
    return i = r.interleaved,
    i === null ? (t.next = t,
    ma(r)) : (t.next = i.next,
    i.next = t),
    r.interleaved = t,
    ht(e, n)
}
function Vi(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        ta(e, n)
    }
}
function rc(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var i = null
          , o = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? i = o = s : o = o.next = s,
                n = n.next
            } while (n !== null);
            o === null ? i = o = t : o = o.next = t
        } else
            i = o = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function so(e, t, n, r) {
    var i = e.updateQueue;
    St = !1;
    var o = i.firstBaseUpdate
      , s = i.lastBaseUpdate
      , l = i.shared.pending;
    if (l !== null) {
        i.shared.pending = null;
        var a = l
          , u = a.next;
        a.next = null,
        s === null ? o = u : s.next = u,
        s = a;
        var c = e.alternate;
        c !== null && (c = c.updateQueue,
        l = c.lastBaseUpdate,
        l !== s && (l === null ? c.firstBaseUpdate = u : l.next = u,
        c.lastBaseUpdate = a))
    }
    if (o !== null) {
        var f = i.baseState;
        s = 0,
        c = u = a = null,
        l = o;
        do {
            var d = l.lane
              , g = l.eventTime;
            if ((r & d) === d) {
                c !== null && (c = c.next = {
                    eventTime: g,
                    lane: 0,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                });
                e: {
                    var v = e
                      , x = l;
                    switch (d = t,
                    g = n,
                    x.tag) {
                    case 1:
                        if (v = x.payload,
                        typeof v == "function") {
                            f = v.call(g, f, d);
                            break e
                        }
                        f = v;
                        break e;
                    case 3:
                        v.flags = v.flags & -65537 | 128;
                    case 0:
                        if (v = x.payload,
                        d = typeof v == "function" ? v.call(g, f, d) : v,
                        d == null)
                            break e;
                        f = K({}, f, d);
                        break e;
                    case 2:
                        St = !0
                    }
                }
                l.callback !== null && l.lane !== 0 && (e.flags |= 64,
                d = i.effects,
                d === null ? i.effects = [l] : d.push(l))
            } else
                g = {
                    eventTime: g,
                    lane: d,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                },
                c === null ? (u = c = g,
                a = f) : c = c.next = g,
                s |= d;
            if (l = l.next,
            l === null) {
                if (l = i.shared.pending,
                l === null)
                    break;
                d = l,
                l = d.next,
                d.next = null,
                i.lastBaseUpdate = d,
                i.shared.pending = null
            }
        } while (!0);
        if (c === null && (a = f),
        i.baseState = a,
        i.firstBaseUpdate = u,
        i.lastBaseUpdate = c,
        t = i.shared.interleaved,
        t !== null) {
            i = t;
            do
                s |= i.lane,
                i = i.next;
            while (i !== t)
        } else
            o === null && (i.shared.lanes = 0);
        ln |= s,
        e.lanes = s,
        e.memoizedState = f
    }
}
function ic(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , i = r.callback;
            if (i !== null) {
                if (r.callback = null,
                r = n,
                typeof i != "function")
                    throw Error(C(191, i));
                i.call(r)
            }
        }
}
var ti = {}
  , tt = zt(ti)
  , Br = zt(ti)
  , Ur = zt(ti);
function Jt(e) {
    if (e === ti)
        throw Error(C(174));
    return e
}
function ya(e, t) {
    switch (I(Ur, t),
    I(Br, e),
    I(tt, ti),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Ws(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = Ws(t, e)
    }
    B(tt),
    I(tt, t)
}
function Bn() {
    B(tt),
    B(Br),
    B(Ur)
}
function lh(e) {
    Jt(Ur.current);
    var t = Jt(tt.current)
      , n = Ws(t, e.type);
    t !== n && (I(Br, e),
    I(tt, n))
}
function va(e) {
    Br.current === e && (B(tt),
    B(Br))
}
var G = zt(0);
function lo(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var ds = [];
function xa() {
    for (var e = 0; e < ds.length; e++)
        ds[e]._workInProgressVersionPrimary = null;
    ds.length = 0
}
var Oi = gt.ReactCurrentDispatcher
  , hs = gt.ReactCurrentBatchConfig
  , sn = 0
  , H = null
  , ee = null
  , ie = null
  , ao = !1
  , Sr = !1
  , $r = 0
  , jy = 0;
function fe() {
    throw Error(C(321))
}
function wa(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Ze(e[n], t[n]))
            return !1;
    return !0
}
function Sa(e, t, n, r, i, o) {
    if (sn = o,
    H = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    Oi.current = e === null || e.memoizedState === null ? Dy : Vy,
    e = n(r, i),
    Sr) {
        o = 0;
        do {
            if (Sr = !1,
            $r = 0,
            25 <= o)
                throw Error(C(301));
            o += 1,
            ie = ee = null,
            t.updateQueue = null,
            Oi.current = Oy,
            e = n(r, i)
        } while (Sr)
    }
    if (Oi.current = uo,
    t = ee !== null && ee.next !== null,
    sn = 0,
    ie = ee = H = null,
    ao = !1,
    t)
        throw Error(C(300));
    return e
}
function Ta() {
    var e = $r !== 0;
    return $r = 0,
    e
}
function Je() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return ie === null ? H.memoizedState = ie = e : ie = ie.next = e,
    ie
}
function Ue() {
    if (ee === null) {
        var e = H.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = ee.next;
    var t = ie === null ? H.memoizedState : ie.next;
    if (t !== null)
        ie = t,
        ee = e;
    else {
        if (e === null)
            throw Error(C(310));
        ee = e,
        e = {
            memoizedState: ee.memoizedState,
            baseState: ee.baseState,
            baseQueue: ee.baseQueue,
            queue: ee.queue,
            next: null
        },
        ie === null ? H.memoizedState = ie = e : ie = ie.next = e
    }
    return ie
}
function Gr(e, t) {
    return typeof t == "function" ? t(e) : t
}
function ps(e) {
    var t = Ue()
      , n = t.queue;
    if (n === null)
        throw Error(C(311));
    n.lastRenderedReducer = e;
    var r = ee
      , i = r.baseQueue
      , o = n.pending;
    if (o !== null) {
        if (i !== null) {
            var s = i.next;
            i.next = o.next,
            o.next = s
        }
        r.baseQueue = i = o,
        n.pending = null
    }
    if (i !== null) {
        o = i.next,
        r = r.baseState;
        var l = s = null
          , a = null
          , u = o;
        do {
            var c = u.lane;
            if ((sn & c) === c)
                a !== null && (a = a.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var f = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                a === null ? (l = a = f,
                s = r) : a = a.next = f,
                H.lanes |= c,
                ln |= c
            }
            u = u.next
        } while (u !== null && u !== o);
        a === null ? s = r : a.next = l,
        Ze(r, t.memoizedState) || (Te = !0),
        t.memoizedState = r,
        t.baseState = s,
        t.baseQueue = a,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        i = e;
        do
            o = i.lane,
            H.lanes |= o,
            ln |= o,
            i = i.next;
        while (i !== e)
    } else
        i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function ms(e) {
    var t = Ue()
      , n = t.queue;
    if (n === null)
        throw Error(C(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , i = n.pending
      , o = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var s = i = i.next;
        do
            o = e(o, s.action),
            s = s.next;
        while (s !== i);
        Ze(o, t.memoizedState) || (Te = !0),
        t.memoizedState = o,
        t.baseQueue === null && (t.baseState = o),
        n.lastRenderedState = o
    }
    return [o, r]
}
function ah() {}
function uh(e, t) {
    var n = H
      , r = Ue()
      , i = t()
      , o = !Ze(r.memoizedState, i);
    if (o && (r.memoizedState = i,
    Te = !0),
    r = r.queue,
    ka(dh.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || ie !== null && ie.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        Wr(9, fh.bind(null, n, r, i, t), void 0, null),
        oe === null)
            throw Error(C(349));
        sn & 30 || ch(n, t, i)
    }
    return i
}
function ch(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = H.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    H.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function fh(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    hh(t) && ph(e)
}
function dh(e, t, n) {
    return n(function() {
        hh(t) && ph(e)
    })
}
function hh(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Ze(e, n)
    } catch {
        return !0
    }
}
function ph(e) {
    var t = ht(e, 1);
    t !== null && Xe(t, e, 1, -1)
}
function oc(e) {
    var t = Je();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Gr,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = Ry.bind(null, H, e),
    [t.memoizedState, e]
}
function Wr(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = H.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    H.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function mh() {
    return Ue().memoizedState
}
function Fi(e, t, n, r) {
    var i = Je();
    H.flags |= e,
    i.memoizedState = Wr(1 | t, n, void 0, r === void 0 ? null : r)
}
function Lo(e, t, n, r) {
    var i = Ue();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (ee !== null) {
        var s = ee.memoizedState;
        if (o = s.destroy,
        r !== null && wa(r, s.deps)) {
            i.memoizedState = Wr(t, n, o, r);
            return
        }
    }
    H.flags |= e,
    i.memoizedState = Wr(1 | t, n, o, r)
}
function sc(e, t) {
    return Fi(8390656, 8, e, t)
}
function ka(e, t) {
    return Lo(2048, 8, e, t)
}
function gh(e, t) {
    return Lo(4, 2, e, t)
}
function yh(e, t) {
    return Lo(4, 4, e, t)
}
function vh(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function xh(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    Lo(4, 4, vh.bind(null, t, e), n)
}
function Ca() {}
function wh(e, t) {
    var n = Ue();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && wa(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function Sh(e, t) {
    var n = Ue();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && wa(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function Th(e, t, n) {
    return sn & 21 ? (Ze(n, t) || (n = Md(),
    H.lanes |= n,
    ln |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    Te = !0),
    e.memoizedState = n)
}
function Ny(e, t) {
    var n = F;
    F = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = hs.transition;
    hs.transition = {};
    try {
        e(!1),
        t()
    } finally {
        F = n,
        hs.transition = r
    }
}
function kh() {
    return Ue().memoizedState
}
function Ly(e, t, n) {
    var r = Lt(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    Ch(e))
        Ph(t, n);
    else if (n = oh(e, t, n, r),
    n !== null) {
        var i = ve();
        Xe(n, e, r, i),
        Eh(n, t, r)
    }
}
function Ry(e, t, n) {
    var r = Lt(e)
      , i = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (Ch(e))
        Ph(t, i);
    else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer,
        o !== null))
            try {
                var s = t.lastRenderedState
                  , l = o(s, n);
                if (i.hasEagerState = !0,
                i.eagerState = l,
                Ze(l, s)) {
                    var a = t.interleaved;
                    a === null ? (i.next = i,
                    ma(t)) : (i.next = a.next,
                    a.next = i),
                    t.interleaved = i;
                    return
                }
            } catch {} finally {}
        n = oh(e, t, i, r),
        n !== null && (i = ve(),
        Xe(n, e, r, i),
        Eh(n, t, r))
    }
}
function Ch(e) {
    var t = e.alternate;
    return e === H || t !== null && t === H
}
function Ph(e, t) {
    Sr = ao = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function Eh(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        ta(e, n)
    }
}
var uo = {
    readContext: Be,
    useCallback: fe,
    useContext: fe,
    useEffect: fe,
    useImperativeHandle: fe,
    useInsertionEffect: fe,
    useLayoutEffect: fe,
    useMemo: fe,
    useReducer: fe,
    useRef: fe,
    useState: fe,
    useDebugValue: fe,
    useDeferredValue: fe,
    useTransition: fe,
    useMutableSource: fe,
    useSyncExternalStore: fe,
    useId: fe,
    unstable_isNewReconciler: !1
}
  , Dy = {
    readContext: Be,
    useCallback: function(e, t) {
        return Je().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: Be,
    useEffect: sc,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        Fi(4194308, 4, vh.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return Fi(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return Fi(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = Je();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = Je();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = Ly.bind(null, H, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = Je();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: oc,
    useDebugValue: Ca,
    useDeferredValue: function(e) {
        return Je().memoizedState = e
    },
    useTransition: function() {
        var e = oc(!1)
          , t = e[0];
        return e = Ny.bind(null, e[1]),
        Je().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = H
          , i = Je();
        if ($) {
            if (n === void 0)
                throw Error(C(407));
            n = n()
        } else {
            if (n = t(),
            oe === null)
                throw Error(C(349));
            sn & 30 || ch(r, t, n)
        }
        i.memoizedState = n;
        var o = {
            value: n,
            getSnapshot: t
        };
        return i.queue = o,
        sc(dh.bind(null, r, o, e), [e]),
        r.flags |= 2048,
        Wr(9, fh.bind(null, r, o, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = Je()
          , t = oe.identifierPrefix;
        if ($) {
            var n = lt
              , r = st;
            n = (r & ~(1 << 32 - Qe(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = $r++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = jy++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , Vy = {
    readContext: Be,
    useCallback: wh,
    useContext: Be,
    useEffect: ka,
    useImperativeHandle: xh,
    useInsertionEffect: gh,
    useLayoutEffect: yh,
    useMemo: Sh,
    useReducer: ps,
    useRef: mh,
    useState: function() {
        return ps(Gr)
    },
    useDebugValue: Ca,
    useDeferredValue: function(e) {
        var t = Ue();
        return Th(t, ee.memoizedState, e)
    },
    useTransition: function() {
        var e = ps(Gr)[0]
          , t = Ue().memoizedState;
        return [e, t]
    },
    useMutableSource: ah,
    useSyncExternalStore: uh,
    useId: kh,
    unstable_isNewReconciler: !1
}
  , Oy = {
    readContext: Be,
    useCallback: wh,
    useContext: Be,
    useEffect: ka,
    useImperativeHandle: xh,
    useInsertionEffect: gh,
    useLayoutEffect: yh,
    useMemo: Sh,
    useReducer: ms,
    useRef: mh,
    useState: function() {
        return ms(Gr)
    },
    useDebugValue: Ca,
    useDeferredValue: function(e) {
        var t = Ue();
        return ee === null ? t.memoizedState = e : Th(t, ee.memoizedState, e)
    },
    useTransition: function() {
        var e = ms(Gr)[0]
          , t = Ue().memoizedState;
        return [e, t]
    },
    useMutableSource: ah,
    useSyncExternalStore: uh,
    useId: kh,
    unstable_isNewReconciler: !1
};
function We(e, t) {
    if (e && e.defaultProps) {
        t = K({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function fl(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : K({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Ro = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? cn(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = ve()
          , i = Lt(e)
          , o = at(r, i);
        o.payload = t,
        n != null && (o.callback = n),
        t = jt(e, o, i),
        t !== null && (Xe(t, e, i, r),
        Vi(t, e, i))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = ve()
          , i = Lt(e)
          , o = at(r, i);
        o.tag = 1,
        o.payload = t,
        n != null && (o.callback = n),
        t = jt(e, o, i),
        t !== null && (Xe(t, e, i, r),
        Vi(t, e, i))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = ve()
          , r = Lt(e)
          , i = at(n, r);
        i.tag = 2,
        t != null && (i.callback = t),
        t = jt(e, i, r),
        t !== null && (Xe(t, e, r, n),
        Vi(t, e, r))
    }
};
function lc(e, t, n, r, i, o, s) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !Or(n, r) || !Or(i, o) : !0
}
function Mh(e, t, n) {
    var r = !1
      , i = Vt
      , o = t.contextType;
    return typeof o == "object" && o !== null ? o = Be(o) : (i = Ce(t) ? rn : ge.current,
    r = t.contextTypes,
    o = (r = r != null) ? Fn(e, i) : Vt),
    t = new t(n,o),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = Ro,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = i,
    e.__reactInternalMemoizedMaskedChildContext = o),
    t
}
function ac(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ro.enqueueReplaceState(t, t.state, null)
}
function dl(e, t, n, r) {
    var i = e.stateNode;
    i.props = n,
    i.state = e.memoizedState,
    i.refs = {},
    ga(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? i.context = Be(o) : (o = Ce(t) ? rn : ge.current,
    i.context = Fn(e, o)),
    i.state = e.memoizedState,
    o = t.getDerivedStateFromProps,
    typeof o == "function" && (fl(e, t, o, n),
    i.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state,
    typeof i.componentWillMount == "function" && i.componentWillMount(),
    typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
    t !== i.state && Ro.enqueueReplaceState(i, i.state, null),
    so(e, n, i, r),
    i.state = e.memoizedState),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}
function Un(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += cg(r),
            r = r.return;
        while (r);
        var i = n
    } catch (o) {
        i = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {
        value: e,
        source: t,
        stack: i,
        digest: null
    }
}
function gs(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function hl(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var Fy = typeof WeakMap == "function" ? WeakMap : Map;
function _h(e, t, n) {
    n = at(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        fo || (fo = !0,
        kl = r),
        hl(e, t)
    }
    ,
    n
}
function Ah(e, t, n) {
    n = at(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function() {
            return r(i)
        }
        ,
        n.callback = function() {
            hl(e, t)
        }
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
        hl(e, t),
        typeof r != "function" && (Nt === null ? Nt = new Set([this]) : Nt.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : ""
        })
    }
    ),
    n
}
function uc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Fy;
        var i = new Set;
        r.set(t, i)
    } else
        i = r.get(t),
        i === void 0 && (i = new Set,
        r.set(t, i));
    i.has(n) || (i.add(n),
    e = qy.bind(null, e, t, n),
    t.then(e, e))
}
function cc(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function fc(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = i,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = at(-1, 1),
    t.tag = 2,
    jt(n, t, 1))),
    n.lanes |= 1),
    e)
}
var Iy = gt.ReactCurrentOwner
  , Te = !1;
function ye(e, t, n, r) {
    t.child = e === null ? ih(t, null, n, r) : zn(t, e.child, n, r)
}
function dc(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return Dn(t, i),
    r = Sa(e, t, n, r, o, i),
    n = Ta(),
    e !== null && !Te ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    pt(e, t, i)) : ($ && n && ua(t),
    t.flags |= 1,
    ye(e, t, r, i),
    t.child)
}
function hc(e, t, n, r, i) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" && !La(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = o,
        jh(e, t, o, r, i)) : (e = Ui(n.type, null, r, t, t.mode, i),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (o = e.child,
    !(e.lanes & i)) {
        var s = o.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : Or,
        n(s, r) && e.ref === t.ref)
            return pt(e, t, i)
    }
    return t.flags |= 1,
    e = Rt(o, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function jh(e, t, n, r, i) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (Or(o, r) && e.ref === t.ref)
            if (Te = !1,
            t.pendingProps = r = o,
            (e.lanes & i) !== 0)
                e.flags & 131072 && (Te = !0);
            else
                return t.lanes = e.lanes,
                pt(e, t, i)
    }
    return pl(e, t, n, r, i)
}
function Nh(e, t, n) {
    var r = t.pendingProps
      , i = r.children
      , o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            I(Cn, Ee),
            Ee |= n;
        else {
            if (!(n & 1073741824))
                return e = o !== null ? o.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                I(Cn, Ee),
                Ee |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = o !== null ? o.baseLanes : n,
            I(Cn, Ee),
            Ee |= r
        }
    else
        o !== null ? (r = o.baseLanes | n,
        t.memoizedState = null) : r = n,
        I(Cn, Ee),
        Ee |= r;
    return ye(e, t, i, n),
    t.child
}
function Lh(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function pl(e, t, n, r, i) {
    var o = Ce(n) ? rn : ge.current;
    return o = Fn(t, o),
    Dn(t, i),
    n = Sa(e, t, n, r, o, i),
    r = Ta(),
    e !== null && !Te ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    pt(e, t, i)) : ($ && r && ua(t),
    t.flags |= 1,
    ye(e, t, n, i),
    t.child)
}
function pc(e, t, n, r, i) {
    if (Ce(n)) {
        var o = !0;
        to(t)
    } else
        o = !1;
    if (Dn(t, i),
    t.stateNode === null)
        Ii(e, t),
        Mh(t, n, r),
        dl(t, n, r, i),
        r = !0;
    else if (e === null) {
        var s = t.stateNode
          , l = t.memoizedProps;
        s.props = l;
        var a = s.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = Be(u) : (u = Ce(n) ? rn : ge.current,
        u = Fn(t, u));
        var c = n.getDerivedStateFromProps
          , f = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        f || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || a !== u) && ac(t, s, r, u),
        St = !1;
        var d = t.memoizedState;
        s.state = d,
        so(t, r, s, i),
        a = t.memoizedState,
        l !== r || d !== a || ke.current || St ? (typeof c == "function" && (fl(t, n, c, r),
        a = t.memoizedState),
        (l = St || lc(t, n, l, r, d, a, u)) ? (f || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(),
        typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()),
        typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = a),
        s.props = r,
        s.state = a,
        s.context = u,
        r = l) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        s = t.stateNode,
        sh(e, t),
        l = t.memoizedProps,
        u = t.type === t.elementType ? l : We(t.type, l),
        s.props = u,
        f = t.pendingProps,
        d = s.context,
        a = n.contextType,
        typeof a == "object" && a !== null ? a = Be(a) : (a = Ce(n) ? rn : ge.current,
        a = Fn(t, a));
        var g = n.getDerivedStateFromProps;
        (c = typeof g == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== f || d !== a) && ac(t, s, r, a),
        St = !1,
        d = t.memoizedState,
        s.state = d,
        so(t, r, s, i);
        var v = t.memoizedState;
        l !== f || d !== v || ke.current || St ? (typeof g == "function" && (fl(t, n, g, r),
        v = t.memoizedState),
        (u = St || lc(t, n, u, r, d, v, a) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, v, a),
        typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, v, a)),
        typeof s.componentDidUpdate == "function" && (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = v),
        s.props = r,
        s.state = v,
        s.context = a,
        r = u) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return ml(e, t, n, r, o, i)
}
function ml(e, t, n, r, i, o) {
    Lh(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s)
        return i && bu(t, n, !1),
        pt(e, t, o);
    r = t.stateNode,
    Iy.current = t;
    var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && s ? (t.child = zn(t, e.child, null, o),
    t.child = zn(t, null, l, o)) : ye(e, t, l, o),
    t.memoizedState = r.state,
    i && bu(t, n, !0),
    t.child
}
function Rh(e) {
    var t = e.stateNode;
    t.pendingContext ? Ju(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ju(e, t.context, !1),
    ya(e, t.containerInfo)
}
function mc(e, t, n, r, i) {
    return In(),
    fa(i),
    t.flags |= 256,
    ye(e, t, n, r),
    t.child
}
var gl = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function yl(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function Dh(e, t, n) {
    var r = t.pendingProps, i = G.current, o = !1, s = (t.flags & 128) !== 0, l;
    if ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l ? (o = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1),
    I(G, i & 1),
    e === null)
        return ul(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (s = r.children,
        e = r.fallback,
        o ? (r = t.mode,
        o = t.child,
        s = {
            mode: "hidden",
            children: s
        },
        !(r & 1) && o !== null ? (o.childLanes = 0,
        o.pendingProps = s) : o = Oo(s, r, 0, null),
        e = tn(e, r, n, null),
        o.return = t,
        e.return = t,
        o.sibling = e,
        t.child = o,
        t.child.memoizedState = yl(n),
        t.memoizedState = gl,
        e) : Pa(t, s));
    if (i = e.memoizedState,
    i !== null && (l = i.dehydrated,
    l !== null))
        return zy(e, t, s, r, l, i, n);
    if (o) {
        o = r.fallback,
        s = t.mode,
        i = e.child,
        l = i.sibling;
        var a = {
            mode: "hidden",
            children: r.children
        };
        return !(s & 1) && t.child !== i ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = a,
        t.deletions = null) : (r = Rt(i, a),
        r.subtreeFlags = i.subtreeFlags & 14680064),
        l !== null ? o = Rt(l, o) : (o = tn(o, s, n, null),
        o.flags |= 2),
        o.return = t,
        r.return = t,
        r.sibling = o,
        t.child = r,
        r = o,
        o = t.child,
        s = e.child.memoizedState,
        s = s === null ? yl(n) : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions
        },
        o.memoizedState = s,
        o.childLanes = e.childLanes & ~n,
        t.memoizedState = gl,
        r
    }
    return o = e.child,
    e = o.sibling,
    r = Rt(o, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function Pa(e, t) {
    return t = Oo({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function Ti(e, t, n, r) {
    return r !== null && fa(r),
    zn(t, e.child, null, n),
    e = Pa(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function zy(e, t, n, r, i, o, s) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = gs(Error(C(422))),
        Ti(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (o = r.fallback,
        i = t.mode,
        r = Oo({
            mode: "visible",
            children: r.children
        }, i, 0, null),
        o = tn(o, i, s, null),
        o.flags |= 2,
        r.return = t,
        o.return = t,
        r.sibling = o,
        t.child = r,
        t.mode & 1 && zn(t, e.child, null, s),
        t.child.memoizedState = yl(s),
        t.memoizedState = gl,
        o);
    if (!(t.mode & 1))
        return Ti(e, t, s, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset,
        r)
            var l = r.dgst;
        return r = l,
        o = Error(C(419)),
        r = gs(o, r, void 0),
        Ti(e, t, s, r)
    }
    if (l = (s & e.childLanes) !== 0,
    Te || l) {
        if (r = oe,
        r !== null) {
            switch (s & -s) {
            case 4:
                i = 2;
                break;
            case 16:
                i = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                i = 32;
                break;
            case 536870912:
                i = 268435456;
                break;
            default:
                i = 0
            }
            i = i & (r.suspendedLanes | s) ? 0 : i,
            i !== 0 && i !== o.retryLane && (o.retryLane = i,
            ht(e, i),
            Xe(r, e, i, -1))
        }
        return Na(),
        r = gs(Error(C(421))),
        Ti(e, t, s, r)
    }
    return i.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = Jy.bind(null, e),
    i._reactRetry = t,
    null) : (e = o.treeContext,
    Me = At(i.nextSibling),
    _e = t,
    $ = !0,
    Ke = null,
    e !== null && (Oe[Fe++] = st,
    Oe[Fe++] = lt,
    Oe[Fe++] = on,
    st = e.id,
    lt = e.overflow,
    on = t),
    t = Pa(t, r.children),
    t.flags |= 4096,
    t)
}
function gc(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    cl(e.return, t, n)
}
function ys(e, t, n, r, i) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (o.isBackwards = t,
    o.rendering = null,
    o.renderingStartTime = 0,
    o.last = r,
    o.tail = n,
    o.tailMode = i)
}
function Vh(e, t, n) {
    var r = t.pendingProps
      , i = r.revealOrder
      , o = r.tail;
    if (ye(e, t, r.children, n),
    r = G.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && gc(e, n, t);
                else if (e.tag === 19)
                    gc(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (I(G, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (i) {
        case "forwards":
            for (n = t.child,
            i = null; n !== null; )
                e = n.alternate,
                e !== null && lo(e) === null && (i = n),
                n = n.sibling;
            n = i,
            n === null ? (i = t.child,
            t.child = null) : (i = n.sibling,
            n.sibling = null),
            ys(t, !1, i, n, o);
            break;
        case "backwards":
            for (n = null,
            i = t.child,
            t.child = null; i !== null; ) {
                if (e = i.alternate,
                e !== null && lo(e) === null) {
                    t.child = i;
                    break
                }
                e = i.sibling,
                i.sibling = n,
                n = i,
                i = e
            }
            ys(t, !0, n, null, o);
            break;
        case "together":
            ys(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Ii(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function pt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    ln |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(C(153));
    if (t.child !== null) {
        for (e = t.child,
        n = Rt(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = Rt(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function By(e, t, n) {
    switch (t.tag) {
    case 3:
        Rh(t),
        In();
        break;
    case 5:
        lh(t);
        break;
    case 1:
        Ce(t.type) && to(t);
        break;
    case 4:
        ya(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , i = t.memoizedProps.value;
        I(io, r._currentValue),
        r._currentValue = i;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (I(G, G.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? Dh(e, t, n) : (I(G, G.current & 1),
            e = pt(e, t, n),
            e !== null ? e.sibling : null);
        I(G, G.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return Vh(e, t, n);
            t.flags |= 128
        }
        if (i = t.memoizedState,
        i !== null && (i.rendering = null,
        i.tail = null,
        i.lastEffect = null),
        I(G, G.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        Nh(e, t, n)
    }
    return pt(e, t, n)
}
var Oh, vl, Fh, Ih;
Oh = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
vl = function() {}
;
Fh = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode,
        Jt(tt.current);
        var o = null;
        switch (n) {
        case "input":
            i = Bs(e, i),
            r = Bs(e, r),
            o = [];
            break;
        case "select":
            i = K({}, i, {
                value: void 0
            }),
            r = K({}, r, {
                value: void 0
            }),
            o = [];
            break;
        case "textarea":
            i = Gs(e, i),
            r = Gs(e, r),
            o = [];
            break;
        default:
            typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = bi)
        }
        Hs(n, r);
        var s;
        n = null;
        for (u in i)
            if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
                if (u === "style") {
                    var l = i[u];
                    for (s in l)
                        l.hasOwnProperty(s) && (n || (n = {}),
                        n[s] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Ar.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
        for (u in r) {
            var a = r[u];
            if (l = i != null ? i[u] : void 0,
            r.hasOwnProperty(u) && a !== l && (a != null || l != null))
                if (u === "style")
                    if (l) {
                        for (s in l)
                            !l.hasOwnProperty(s) || a && a.hasOwnProperty(s) || (n || (n = {}),
                            n[s] = "");
                        for (s in a)
                            a.hasOwnProperty(s) && l[s] !== a[s] && (n || (n = {}),
                            n[s] = a[s])
                    } else
                        n || (o || (o = []),
                        o.push(u, n)),
                        n = a;
                else
                    u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                    l = l ? l.__html : void 0,
                    a != null && l !== a && (o = o || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (o = o || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Ar.hasOwnProperty(u) ? (a != null && u === "onScroll" && z("scroll", e),
                    o || l === a || (o = [])) : (o = o || []).push(u, a))
        }
        n && (o = o || []).push("style", n);
        var u = o;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
Ih = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function or(e, t) {
    if (!$)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function de(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags & 14680064,
            r |= i.flags & 14680064,
            i.return = e,
            i = i.sibling;
    else
        for (i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags,
            r |= i.flags,
            i.return = e,
            i = i.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function Uy(e, t, n) {
    var r = t.pendingProps;
    switch (ca(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return de(t),
        null;
    case 1:
        return Ce(t.type) && eo(),
        de(t),
        null;
    case 3:
        return r = t.stateNode,
        Bn(),
        B(ke),
        B(ge),
        xa(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (wi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        Ke !== null && (El(Ke),
        Ke = null))),
        vl(e, t),
        de(t),
        null;
    case 5:
        va(t);
        var i = Jt(Ur.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            Fh(e, t, n, r, i),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(C(166));
                return de(t),
                null
            }
            if (e = Jt(tt.current),
            wi(t)) {
                r = t.stateNode,
                n = t.type;
                var o = t.memoizedProps;
                switch (r[be] = t,
                r[zr] = o,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    z("cancel", r),
                    z("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    z("load", r);
                    break;
                case "video":
                case "audio":
                    for (i = 0; i < dr.length; i++)
                        z(dr[i], r);
                    break;
                case "source":
                    z("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    z("error", r),
                    z("load", r);
                    break;
                case "details":
                    z("toggle", r);
                    break;
                case "input":
                    Pu(r, o),
                    z("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!o.multiple
                    },
                    z("invalid", r);
                    break;
                case "textarea":
                    Mu(r, o),
                    z("invalid", r)
                }
                Hs(n, o),
                i = null;
                for (var s in o)
                    if (o.hasOwnProperty(s)) {
                        var l = o[s];
                        s === "children" ? typeof l == "string" ? r.textContent !== l && (o.suppressHydrationWarning !== !0 && xi(r.textContent, l, e),
                        i = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (o.suppressHydrationWarning !== !0 && xi(r.textContent, l, e),
                        i = ["children", "" + l]) : Ar.hasOwnProperty(s) && l != null && s === "onScroll" && z("scroll", r)
                    }
                switch (n) {
                case "input":
                    fi(r),
                    Eu(r, o, !0);
                    break;
                case "textarea":
                    fi(r),
                    _u(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof o.onClick == "function" && (r.onclick = bi)
                }
                r = i,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                s = i.nodeType === 9 ? i : i.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = dd(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
                    is: r.is
                }) : (e = s.createElement(n),
                n === "select" && (s = e,
                r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n),
                e[be] = t,
                e[zr] = r,
                Oh(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (s = Ks(n, r),
                    n) {
                    case "dialog":
                        z("cancel", e),
                        z("close", e),
                        i = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        z("load", e),
                        i = r;
                        break;
                    case "video":
                    case "audio":
                        for (i = 0; i < dr.length; i++)
                            z(dr[i], e);
                        i = r;
                        break;
                    case "source":
                        z("error", e),
                        i = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        z("error", e),
                        z("load", e),
                        i = r;
                        break;
                    case "details":
                        z("toggle", e),
                        i = r;
                        break;
                    case "input":
                        Pu(e, r),
                        i = Bs(e, r),
                        z("invalid", e);
                        break;
                    case "option":
                        i = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        i = K({}, r, {
                            value: void 0
                        }),
                        z("invalid", e);
                        break;
                    case "textarea":
                        Mu(e, r),
                        i = Gs(e, r),
                        z("invalid", e);
                        break;
                    default:
                        i = r
                    }
                    Hs(n, i),
                    l = i;
                    for (o in l)
                        if (l.hasOwnProperty(o)) {
                            var a = l[o];
                            o === "style" ? md(e, a) : o === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                            a != null && hd(e, a)) : o === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && jr(e, a) : typeof a == "number" && jr(e, "" + a) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Ar.hasOwnProperty(o) ? a != null && o === "onScroll" && z("scroll", e) : a != null && Yl(e, o, a, s))
                        }
                    switch (n) {
                    case "input":
                        fi(e),
                        Eu(e, r, !1);
                        break;
                    case "textarea":
                        fi(e),
                        _u(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + Dt(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        o = r.value,
                        o != null ? jn(e, !!r.multiple, o, !1) : r.defaultValue != null && jn(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof i.onClick == "function" && (e.onclick = bi)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return de(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            Ih(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(C(166));
            if (n = Jt(Ur.current),
            Jt(tt.current),
            wi(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[be] = t,
                (o = r.nodeValue !== n) && (e = _e,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        xi(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && xi(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                o && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[be] = t,
                t.stateNode = r
        }
        return de(t),
        null;
    case 13:
        if (B(G),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if ($ && Me !== null && t.mode & 1 && !(t.flags & 128))
                nh(),
                In(),
                t.flags |= 98560,
                o = !1;
            else if (o = wi(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!o)
                        throw Error(C(318));
                    if (o = t.memoizedState,
                    o = o !== null ? o.dehydrated : null,
                    !o)
                        throw Error(C(317));
                    o[be] = t
                } else
                    In(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                de(t),
                o = !1
            } else
                Ke !== null && (El(Ke),
                Ke = null),
                o = !0;
            if (!o)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || G.current & 1 ? te === 0 && (te = 3) : Na())),
        t.updateQueue !== null && (t.flags |= 4),
        de(t),
        null);
    case 4:
        return Bn(),
        vl(e, t),
        e === null && Fr(t.stateNode.containerInfo),
        de(t),
        null;
    case 10:
        return pa(t.type._context),
        de(t),
        null;
    case 17:
        return Ce(t.type) && eo(),
        de(t),
        null;
    case 19:
        if (B(G),
        o = t.memoizedState,
        o === null)
            return de(t),
            null;
        if (r = (t.flags & 128) !== 0,
        s = o.rendering,
        s === null)
            if (r)
                or(o, !1);
            else {
                if (te !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (s = lo(e),
                        s !== null) {
                            for (t.flags |= 128,
                            or(o, !1),
                            r = s.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                o = n,
                                e = r,
                                o.flags &= 14680066,
                                s = o.alternate,
                                s === null ? (o.childLanes = 0,
                                o.lanes = e,
                                o.child = null,
                                o.subtreeFlags = 0,
                                o.memoizedProps = null,
                                o.memoizedState = null,
                                o.updateQueue = null,
                                o.dependencies = null,
                                o.stateNode = null) : (o.childLanes = s.childLanes,
                                o.lanes = s.lanes,
                                o.child = s.child,
                                o.subtreeFlags = 0,
                                o.deletions = null,
                                o.memoizedProps = s.memoizedProps,
                                o.memoizedState = s.memoizedState,
                                o.updateQueue = s.updateQueue,
                                o.type = s.type,
                                e = s.dependencies,
                                o.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return I(G, G.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                o.tail !== null && q() > $n && (t.flags |= 128,
                r = !0,
                or(o, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = lo(s),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    or(o, !0),
                    o.tail === null && o.tailMode === "hidden" && !s.alternate && !$)
                        return de(t),
                        null
                } else
                    2 * q() - o.renderingStartTime > $n && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    or(o, !1),
                    t.lanes = 4194304);
            o.isBackwards ? (s.sibling = t.child,
            t.child = s) : (n = o.last,
            n !== null ? n.sibling = s : t.child = s,
            o.last = s)
        }
        return o.tail !== null ? (t = o.tail,
        o.rendering = t,
        o.tail = t.sibling,
        o.renderingStartTime = q(),
        t.sibling = null,
        n = G.current,
        I(G, r ? n & 1 | 2 : n & 1),
        t) : (de(t),
        null);
    case 22:
    case 23:
        return ja(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? Ee & 1073741824 && (de(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : de(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(C(156, t.tag))
}
function $y(e, t) {
    switch (ca(t),
    t.tag) {
    case 1:
        return Ce(t.type) && eo(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return Bn(),
        B(ke),
        B(ge),
        xa(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return va(t),
        null;
    case 13:
        if (B(G),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(C(340));
            In()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return B(G),
        null;
    case 4:
        return Bn(),
        null;
    case 10:
        return pa(t.type._context),
        null;
    case 22:
    case 23:
        return ja(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var ki = !1
  , pe = !1
  , Gy = typeof WeakSet == "function" ? WeakSet : Set
  , A = null;
function kn(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                X(e, t, r)
            }
        else
            n.current = null
}
function xl(e, t, n) {
    try {
        n()
    } catch (r) {
        X(e, t, r)
    }
}
var yc = !1;
function Wy(e, t) {
    if (nl = Zi,
    e = Gd(),
    aa(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var i = r.anchorOffset
                      , o = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        o.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var s = 0
                      , l = -1
                      , a = -1
                      , u = 0
                      , c = 0
                      , f = e
                      , d = null;
                    t: for (; ; ) {
                        for (var g; f !== n || i !== 0 && f.nodeType !== 3 || (l = s + i),
                        f !== o || r !== 0 && f.nodeType !== 3 || (a = s + r),
                        f.nodeType === 3 && (s += f.nodeValue.length),
                        (g = f.firstChild) !== null; )
                            d = f,
                            f = g;
                        for (; ; ) {
                            if (f === e)
                                break t;
                            if (d === n && ++u === i && (l = s),
                            d === o && ++c === r && (a = s),
                            (g = f.nextSibling) !== null)
                                break;
                            f = d,
                            d = f.parentNode
                        }
                        f = g
                    }
                    n = l === -1 || a === -1 ? null : {
                        start: l,
                        end: a
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (rl = {
        focusedElem: e,
        selectionRange: n
    },
    Zi = !1,
    A = t; A !== null; )
        if (t = A,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            A = e;
        else
            for (; A !== null; ) {
                t = A;
                try {
                    var v = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (v !== null) {
                                var x = v.memoizedProps
                                  , T = v.memoizedState
                                  , p = t.stateNode
                                  , h = p.getSnapshotBeforeUpdate(t.elementType === t.type ? x : We(t.type, x), T);
                                p.__reactInternalSnapshotBeforeUpdate = h
                            }
                            break;
                        case 3:
                            var m = t.stateNode.containerInfo;
                            m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(C(163))
                        }
                } catch (w) {
                    X(t, t.return, w)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    A = e;
                    break
                }
                A = t.return
            }
    return v = yc,
    yc = !1,
    v
}
function Tr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var o = i.destroy;
                i.destroy = void 0,
                o !== void 0 && xl(t, n, o)
            }
            i = i.next
        } while (i !== r)
    }
}
function Do(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function wl(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function zh(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    zh(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[be],
    delete t[zr],
    delete t[sl],
    delete t[Ey],
    delete t[My])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function Bh(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function vc(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || Bh(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function Sl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = bi));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Sl(e, t, n),
        e = e.sibling; e !== null; )
            Sl(e, t, n),
            e = e.sibling
}
function Tl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Tl(e, t, n),
        e = e.sibling; e !== null; )
            Tl(e, t, n),
            e = e.sibling
}
var se = null
  , He = !1;
function vt(e, t, n) {
    for (n = n.child; n !== null; )
        Uh(e, t, n),
        n = n.sibling
}
function Uh(e, t, n) {
    if (et && typeof et.onCommitFiberUnmount == "function")
        try {
            et.onCommitFiberUnmount(Eo, n)
        } catch {}
    switch (n.tag) {
    case 5:
        pe || kn(n, t);
    case 6:
        var r = se
          , i = He;
        se = null,
        vt(e, t, n),
        se = r,
        He = i,
        se !== null && (He ? (e = se,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : se.removeChild(n.stateNode));
        break;
    case 18:
        se !== null && (He ? (e = se,
        n = n.stateNode,
        e.nodeType === 8 ? cs(e.parentNode, n) : e.nodeType === 1 && cs(e, n),
        Dr(e)) : cs(se, n.stateNode));
        break;
    case 4:
        r = se,
        i = He,
        se = n.stateNode.containerInfo,
        He = !0,
        vt(e, t, n),
        se = r,
        He = i;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!pe && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            i = r = r.next;
            do {
                var o = i
                  , s = o.destroy;
                o = o.tag,
                s !== void 0 && (o & 2 || o & 4) && xl(n, t, s),
                i = i.next
            } while (i !== r)
        }
        vt(e, t, n);
        break;
    case 1:
        if (!pe && (kn(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (l) {
                X(n, t, l)
            }
        vt(e, t, n);
        break;
    case 21:
        vt(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (pe = (r = pe) || n.memoizedState !== null,
        vt(e, t, n),
        pe = r) : vt(e, t, n);
        break;
    default:
        vt(e, t, n)
    }
}
function xc(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Gy),
        t.forEach(function(r) {
            var i = by.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(i, i))
        })
    }
}
function $e(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var o = e
                  , s = t
                  , l = s;
                e: for (; l !== null; ) {
                    switch (l.tag) {
                    case 5:
                        se = l.stateNode,
                        He = !1;
                        break e;
                    case 3:
                        se = l.stateNode.containerInfo,
                        He = !0;
                        break e;
                    case 4:
                        se = l.stateNode.containerInfo,
                        He = !0;
                        break e
                    }
                    l = l.return
                }
                if (se === null)
                    throw Error(C(160));
                Uh(o, s, i),
                se = null,
                He = !1;
                var a = i.alternate;
                a !== null && (a.return = null),
                i.return = null
            } catch (u) {
                X(i, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            $h(t, e),
            t = t.sibling
}
function $h(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if ($e(t, e),
        qe(e),
        r & 4) {
            try {
                Tr(3, e, e.return),
                Do(3, e)
            } catch (x) {
                X(e, e.return, x)
            }
            try {
                Tr(5, e, e.return)
            } catch (x) {
                X(e, e.return, x)
            }
        }
        break;
    case 1:
        $e(t, e),
        qe(e),
        r & 512 && n !== null && kn(n, n.return);
        break;
    case 5:
        if ($e(t, e),
        qe(e),
        r & 512 && n !== null && kn(n, n.return),
        e.flags & 32) {
            var i = e.stateNode;
            try {
                jr(i, "")
            } catch (x) {
                X(e, e.return, x)
            }
        }
        if (r & 4 && (i = e.stateNode,
        i != null)) {
            var o = e.memoizedProps
              , s = n !== null ? n.memoizedProps : o
              , l = e.type
              , a = e.updateQueue;
            if (e.updateQueue = null,
            a !== null)
                try {
                    l === "input" && o.type === "radio" && o.name != null && cd(i, o),
                    Ks(l, s);
                    var u = Ks(l, o);
                    for (s = 0; s < a.length; s += 2) {
                        var c = a[s]
                          , f = a[s + 1];
                        c === "style" ? md(i, f) : c === "dangerouslySetInnerHTML" ? hd(i, f) : c === "children" ? jr(i, f) : Yl(i, c, f, u)
                    }
                    switch (l) {
                    case "input":
                        Us(i, o);
                        break;
                    case "textarea":
                        fd(i, o);
                        break;
                    case "select":
                        var d = i._wrapperState.wasMultiple;
                        i._wrapperState.wasMultiple = !!o.multiple;
                        var g = o.value;
                        g != null ? jn(i, !!o.multiple, g, !1) : d !== !!o.multiple && (o.defaultValue != null ? jn(i, !!o.multiple, o.defaultValue, !0) : jn(i, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    i[zr] = o
                } catch (x) {
                    X(e, e.return, x)
                }
        }
        break;
    case 6:
        if ($e(t, e),
        qe(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(C(162));
            i = e.stateNode,
            o = e.memoizedProps;
            try {
                i.nodeValue = o
            } catch (x) {
                X(e, e.return, x)
            }
        }
        break;
    case 3:
        if ($e(t, e),
        qe(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                Dr(t.containerInfo)
            } catch (x) {
                X(e, e.return, x)
            }
        break;
    case 4:
        $e(t, e),
        qe(e);
        break;
    case 13:
        $e(t, e),
        qe(e),
        i = e.child,
        i.flags & 8192 && (o = i.memoizedState !== null,
        i.stateNode.isHidden = o,
        !o || i.alternate !== null && i.alternate.memoizedState !== null || (_a = q())),
        r & 4 && xc(e);
        break;
    case 22:
        if (c = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (pe = (u = pe) || c,
        $e(t, e),
        pe = u) : $e(t, e),
        qe(e),
        r & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !c && e.mode & 1)
                for (A = e,
                c = e.child; c !== null; ) {
                    for (f = A = c; A !== null; ) {
                        switch (d = A,
                        g = d.child,
                        d.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Tr(4, d, d.return);
                            break;
                        case 1:
                            kn(d, d.return);
                            var v = d.stateNode;
                            if (typeof v.componentWillUnmount == "function") {
                                r = d,
                                n = d.return;
                                try {
                                    t = r,
                                    v.props = t.memoizedProps,
                                    v.state = t.memoizedState,
                                    v.componentWillUnmount()
                                } catch (x) {
                                    X(r, n, x)
                                }
                            }
                            break;
                        case 5:
                            kn(d, d.return);
                            break;
                        case 22:
                            if (d.memoizedState !== null) {
                                Sc(f);
                                continue
                            }
                        }
                        g !== null ? (g.return = d,
                        A = g) : Sc(f)
                    }
                    c = c.sibling
                }
            e: for (c = null,
            f = e; ; ) {
                if (f.tag === 5) {
                    if (c === null) {
                        c = f;
                        try {
                            i = f.stateNode,
                            u ? (o = i.style,
                            typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (l = f.stateNode,
                            a = f.memoizedProps.style,
                            s = a != null && a.hasOwnProperty("display") ? a.display : null,
                            l.style.display = pd("display", s))
                        } catch (x) {
                            X(e, e.return, x)
                        }
                    }
                } else if (f.tag === 6) {
                    if (c === null)
                        try {
                            f.stateNode.nodeValue = u ? "" : f.memoizedProps
                        } catch (x) {
                            X(e, e.return, x)
                        }
                } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
                    f.child.return = f,
                    f = f.child;
                    continue
                }
                if (f === e)
                    break e;
                for (; f.sibling === null; ) {
                    if (f.return === null || f.return === e)
                        break e;
                    c === f && (c = null),
                    f = f.return
                }
                c === f && (c = null),
                f.sibling.return = f.return,
                f = f.sibling
            }
        }
        break;
    case 19:
        $e(t, e),
        qe(e),
        r & 4 && xc(e);
        break;
    case 21:
        break;
    default:
        $e(t, e),
        qe(e)
    }
}
function qe(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (Bh(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(C(160))
            }
            switch (r.tag) {
            case 5:
                var i = r.stateNode;
                r.flags & 32 && (jr(i, ""),
                r.flags &= -33);
                var o = vc(e);
                Tl(e, o, i);
                break;
            case 3:
            case 4:
                var s = r.stateNode.containerInfo
                  , l = vc(e);
                Sl(e, l, s);
                break;
            default:
                throw Error(C(161))
            }
        } catch (a) {
            X(e, e.return, a)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function Hy(e, t, n) {
    A = e,
    Gh(e)
}
function Gh(e, t, n) {
    for (var r = (e.mode & 1) !== 0; A !== null; ) {
        var i = A
          , o = i.child;
        if (i.tag === 22 && r) {
            var s = i.memoizedState !== null || ki;
            if (!s) {
                var l = i.alternate
                  , a = l !== null && l.memoizedState !== null || pe;
                l = ki;
                var u = pe;
                if (ki = s,
                (pe = a) && !u)
                    for (A = i; A !== null; )
                        s = A,
                        a = s.child,
                        s.tag === 22 && s.memoizedState !== null ? Tc(i) : a !== null ? (a.return = s,
                        A = a) : Tc(i);
                for (; o !== null; )
                    A = o,
                    Gh(o),
                    o = o.sibling;
                A = i,
                ki = l,
                pe = u
            }
            wc(e)
        } else
            i.subtreeFlags & 8772 && o !== null ? (o.return = i,
            A = o) : wc(e)
    }
}
function wc(e) {
    for (; A !== null; ) {
        var t = A;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        pe || Do(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !pe)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var i = t.elementType === t.type ? n.memoizedProps : We(t.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var o = t.updateQueue;
                        o !== null && ic(t, o, r);
                        break;
                    case 3:
                        var s = t.updateQueue;
                        if (s !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            ic(t, s, n)
                        }
                        break;
                    case 5:
                        var l = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = l;
                            var a = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                a.autoFocus && n.focus();
                                break;
                            case "img":
                                a.src && (n.src = a.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var f = c.dehydrated;
                                    f !== null && Dr(f)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(C(163))
                    }
                pe || t.flags & 512 && wl(t)
            } catch (d) {
                X(t, t.return, d)
            }
        }
        if (t === e) {
            A = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            A = n;
            break
        }
        A = t.return
    }
}
function Sc(e) {
    for (; A !== null; ) {
        var t = A;
        if (t === e) {
            A = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            A = n;
            break
        }
        A = t.return
    }
}
function Tc(e) {
    for (; A !== null; ) {
        var t = A;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    Do(4, t)
                } catch (a) {
                    X(t, n, a)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var i = t.return;
                    try {
                        r.componentDidMount()
                    } catch (a) {
                        X(t, i, a)
                    }
                }
                var o = t.return;
                try {
                    wl(t)
                } catch (a) {
                    X(t, o, a)
                }
                break;
            case 5:
                var s = t.return;
                try {
                    wl(t)
                } catch (a) {
                    X(t, s, a)
                }
            }
        } catch (a) {
            X(t, t.return, a)
        }
        if (t === e) {
            A = null;
            break
        }
        var l = t.sibling;
        if (l !== null) {
            l.return = t.return,
            A = l;
            break
        }
        A = t.return
    }
}
var Ky = Math.ceil
  , co = gt.ReactCurrentDispatcher
  , Ea = gt.ReactCurrentOwner
  , ze = gt.ReactCurrentBatchConfig
  , O = 0
  , oe = null
  , J = null
  , ue = 0
  , Ee = 0
  , Cn = zt(0)
  , te = 0
  , Hr = null
  , ln = 0
  , Vo = 0
  , Ma = 0
  , kr = null
  , Se = null
  , _a = 0
  , $n = 1 / 0
  , it = null
  , fo = !1
  , kl = null
  , Nt = null
  , Ci = !1
  , Pt = null
  , ho = 0
  , Cr = 0
  , Cl = null
  , zi = -1
  , Bi = 0;
function ve() {
    return O & 6 ? q() : zi !== -1 ? zi : zi = q()
}
function Lt(e) {
    return e.mode & 1 ? O & 2 && ue !== 0 ? ue & -ue : Ay.transition !== null ? (Bi === 0 && (Bi = Md()),
    Bi) : (e = F,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : Dd(e.type)),
    e) : 1
}
function Xe(e, t, n, r) {
    if (50 < Cr)
        throw Cr = 0,
        Cl = null,
        Error(C(185));
    Jr(e, n, r),
    (!(O & 2) || e !== oe) && (e === oe && (!(O & 2) && (Vo |= n),
    te === 4 && kt(e, ue)),
    Pe(e, r),
    n === 1 && O === 0 && !(t.mode & 1) && ($n = q() + 500,
    No && Bt()))
}
function Pe(e, t) {
    var n = e.callbackNode;
    Ag(e, t);
    var r = Yi(e, e === oe ? ue : 0);
    if (r === 0)
        n !== null && Nu(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && Nu(n),
        t === 1)
            e.tag === 0 ? _y(kc.bind(null, e)) : bd(kc.bind(null, e)),
            Cy(function() {
                !(O & 6) && Bt()
            }),
            n = null;
        else {
            switch (_d(r)) {
            case 1:
                n = ea;
                break;
            case 4:
                n = Pd;
                break;
            case 16:
                n = Xi;
                break;
            case 536870912:
                n = Ed;
                break;
            default:
                n = Xi
            }
            n = qh(n, Wh.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function Wh(e, t) {
    if (zi = -1,
    Bi = 0,
    O & 6)
        throw Error(C(327));
    var n = e.callbackNode;
    if (Vn() && e.callbackNode !== n)
        return null;
    var r = Yi(e, e === oe ? ue : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = po(e, r);
    else {
        t = r;
        var i = O;
        O |= 2;
        var o = Kh();
        (oe !== e || ue !== t) && (it = null,
        $n = q() + 500,
        en(e, t));
        do
            try {
                Yy();
                break
            } catch (l) {
                Hh(e, l)
            }
        while (!0);
        ha(),
        co.current = o,
        O = i,
        J !== null ? t = 0 : (oe = null,
        ue = 0,
        t = te)
    }
    if (t !== 0) {
        if (t === 2 && (i = qs(e),
        i !== 0 && (r = i,
        t = Pl(e, i))),
        t === 1)
            throw n = Hr,
            en(e, 0),
            kt(e, r),
            Pe(e, q()),
            n;
        if (t === 6)
            kt(e, r);
        else {
            if (i = e.current.alternate,
            !(r & 30) && !Qy(i) && (t = po(e, r),
            t === 2 && (o = qs(e),
            o !== 0 && (r = o,
            t = Pl(e, o))),
            t === 1))
                throw n = Hr,
                en(e, 0),
                kt(e, r),
                Pe(e, q()),
                n;
            switch (e.finishedWork = i,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(C(345));
            case 2:
                Qt(e, Se, it);
                break;
            case 3:
                if (kt(e, r),
                (r & 130023424) === r && (t = _a + 500 - q(),
                10 < t)) {
                    if (Yi(e, 0) !== 0)
                        break;
                    if (i = e.suspendedLanes,
                    (i & r) !== r) {
                        ve(),
                        e.pingedLanes |= e.suspendedLanes & i;
                        break
                    }
                    e.timeoutHandle = ol(Qt.bind(null, e, Se, it), t);
                    break
                }
                Qt(e, Se, it);
                break;
            case 4:
                if (kt(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                i = -1; 0 < r; ) {
                    var s = 31 - Qe(r);
                    o = 1 << s,
                    s = t[s],
                    s > i && (i = s),
                    r &= ~o
                }
                if (r = i,
                r = q() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Ky(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = ol(Qt.bind(null, e, Se, it), r);
                    break
                }
                Qt(e, Se, it);
                break;
            case 5:
                Qt(e, Se, it);
                break;
            default:
                throw Error(C(329))
            }
        }
    }
    return Pe(e, q()),
    e.callbackNode === n ? Wh.bind(null, e) : null
}
function Pl(e, t) {
    var n = kr;
    return e.current.memoizedState.isDehydrated && (en(e, t).flags |= 256),
    e = po(e, t),
    e !== 2 && (t = Se,
    Se = n,
    t !== null && El(t)),
    e
}
function El(e) {
    Se === null ? Se = e : Se.push.apply(Se, e)
}
function Qy(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r]
                      , o = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!Ze(o(), i))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function kt(e, t) {
    for (t &= ~Ma,
    t &= ~Vo,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - Qe(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function kc(e) {
    if (O & 6)
        throw Error(C(327));
    Vn();
    var t = Yi(e, 0);
    if (!(t & 1))
        return Pe(e, q()),
        null;
    var n = po(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = qs(e);
        r !== 0 && (t = r,
        n = Pl(e, r))
    }
    if (n === 1)
        throw n = Hr,
        en(e, 0),
        kt(e, t),
        Pe(e, q()),
        n;
    if (n === 6)
        throw Error(C(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    Qt(e, Se, it),
    Pe(e, q()),
    null
}
function Aa(e, t) {
    var n = O;
    O |= 1;
    try {
        return e(t)
    } finally {
        O = n,
        O === 0 && ($n = q() + 500,
        No && Bt())
    }
}
function an(e) {
    Pt !== null && Pt.tag === 0 && !(O & 6) && Vn();
    var t = O;
    O |= 1;
    var n = ze.transition
      , r = F;
    try {
        if (ze.transition = null,
        F = 1,
        e)
            return e()
    } finally {
        F = r,
        ze.transition = n,
        O = t,
        !(O & 6) && Bt()
    }
}
function ja() {
    Ee = Cn.current,
    B(Cn)
}
function en(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    ky(n)),
    J !== null)
        for (n = J.return; n !== null; ) {
            var r = n;
            switch (ca(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && eo();
                break;
            case 3:
                Bn(),
                B(ke),
                B(ge),
                xa();
                break;
            case 5:
                va(r);
                break;
            case 4:
                Bn();
                break;
            case 13:
                B(G);
                break;
            case 19:
                B(G);
                break;
            case 10:
                pa(r.type._context);
                break;
            case 22:
            case 23:
                ja()
            }
            n = n.return
        }
    if (oe = e,
    J = e = Rt(e.current, null),
    ue = Ee = t,
    te = 0,
    Hr = null,
    Ma = Vo = ln = 0,
    Se = kr = null,
    qt !== null) {
        for (t = 0; t < qt.length; t++)
            if (n = qt[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var i = r.next
                  , o = n.pending;
                if (o !== null) {
                    var s = o.next;
                    o.next = i,
                    r.next = s
                }
                n.pending = r
            }
        qt = null
    }
    return e
}
function Hh(e, t) {
    do {
        var n = J;
        try {
            if (ha(),
            Oi.current = uo,
            ao) {
                for (var r = H.memoizedState; r !== null; ) {
                    var i = r.queue;
                    i !== null && (i.pending = null),
                    r = r.next
                }
                ao = !1
            }
            if (sn = 0,
            ie = ee = H = null,
            Sr = !1,
            $r = 0,
            Ea.current = null,
            n === null || n.return === null) {
                te = 1,
                Hr = t,
                J = null;
                break
            }
            e: {
                var o = e
                  , s = n.return
                  , l = n
                  , a = t;
                if (t = ue,
                l.flags |= 32768,
                a !== null && typeof a == "object" && typeof a.then == "function") {
                    var u = a
                      , c = l
                      , f = c.tag;
                    if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var d = c.alternate;
                        d ? (c.updateQueue = d.updateQueue,
                        c.memoizedState = d.memoizedState,
                        c.lanes = d.lanes) : (c.updateQueue = null,
                        c.memoizedState = null)
                    }
                    var g = cc(s);
                    if (g !== null) {
                        g.flags &= -257,
                        fc(g, s, l, o, t),
                        g.mode & 1 && uc(o, u, t),
                        t = g,
                        a = u;
                        var v = t.updateQueue;
                        if (v === null) {
                            var x = new Set;
                            x.add(a),
                            t.updateQueue = x
                        } else
                            v.add(a);
                        break e
                    } else {
                        if (!(t & 1)) {
                            uc(o, u, t),
                            Na();
                            break e
                        }
                        a = Error(C(426))
                    }
                } else if ($ && l.mode & 1) {
                    var T = cc(s);
                    if (T !== null) {
                        !(T.flags & 65536) && (T.flags |= 256),
                        fc(T, s, l, o, t),
                        fa(Un(a, l));
                        break e
                    }
                }
                o = a = Un(a, l),
                te !== 4 && (te = 2),
                kr === null ? kr = [o] : kr.push(o),
                o = s;
                do {
                    switch (o.tag) {
                    case 3:
                        o.flags |= 65536,
                        t &= -t,
                        o.lanes |= t;
                        var p = _h(o, a, t);
                        rc(o, p);
                        break e;
                    case 1:
                        l = a;
                        var h = o.type
                          , m = o.stateNode;
                        if (!(o.flags & 128) && (typeof h.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (Nt === null || !Nt.has(m)))) {
                            o.flags |= 65536,
                            t &= -t,
                            o.lanes |= t;
                            var w = Ah(o, l, t);
                            rc(o, w);
                            break e
                        }
                    }
                    o = o.return
                } while (o !== null)
            }
            Xh(n)
        } catch (S) {
            t = S,
            J === n && n !== null && (J = n = n.return);
            continue
        }
        break
    } while (!0)
}
function Kh() {
    var e = co.current;
    return co.current = uo,
    e === null ? uo : e
}
function Na() {
    (te === 0 || te === 3 || te === 2) && (te = 4),
    oe === null || !(ln & 268435455) && !(Vo & 268435455) || kt(oe, ue)
}
function po(e, t) {
    var n = O;
    O |= 2;
    var r = Kh();
    (oe !== e || ue !== t) && (it = null,
    en(e, t));
    do
        try {
            Xy();
            break
        } catch (i) {
            Hh(e, i)
        }
    while (!0);
    if (ha(),
    O = n,
    co.current = r,
    J !== null)
        throw Error(C(261));
    return oe = null,
    ue = 0,
    te
}
function Xy() {
    for (; J !== null; )
        Qh(J)
}
function Yy() {
    for (; J !== null && !wg(); )
        Qh(J)
}
function Qh(e) {
    var t = Zh(e.alternate, e, Ee);
    e.memoizedProps = e.pendingProps,
    t === null ? Xh(e) : J = t,
    Ea.current = null
}
function Xh(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = $y(n, t),
            n !== null) {
                n.flags &= 32767,
                J = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                te = 6,
                J = null;
                return
            }
        } else if (n = Uy(n, t, Ee),
        n !== null) {
            J = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            J = t;
            return
        }
        J = t = e
    } while (t !== null);
    te === 0 && (te = 5)
}
function Qt(e, t, n) {
    var r = F
      , i = ze.transition;
    try {
        ze.transition = null,
        F = 1,
        Zy(e, t, n, r)
    } finally {
        ze.transition = i,
        F = r
    }
    return null
}
function Zy(e, t, n, r) {
    do
        Vn();
    while (Pt !== null);
    if (O & 6)
        throw Error(C(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(C(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (jg(e, o),
    e === oe && (J = oe = null,
    ue = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ci || (Ci = !0,
    qh(Xi, function() {
        return Vn(),
        null
    })),
    o = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || o) {
        o = ze.transition,
        ze.transition = null;
        var s = F;
        F = 1;
        var l = O;
        O |= 4,
        Ea.current = null,
        Wy(e, n),
        $h(n, e),
        gy(rl),
        Zi = !!nl,
        rl = nl = null,
        e.current = n,
        Hy(n),
        Sg(),
        O = l,
        F = s,
        ze.transition = o
    } else
        e.current = n;
    if (Ci && (Ci = !1,
    Pt = e,
    ho = i),
    o = e.pendingLanes,
    o === 0 && (Nt = null),
    Cg(n.stateNode),
    Pe(e, q()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            i = t[n],
            r(i.value, {
                componentStack: i.stack,
                digest: i.digest
            });
    if (fo)
        throw fo = !1,
        e = kl,
        kl = null,
        e;
    return ho & 1 && e.tag !== 0 && Vn(),
    o = e.pendingLanes,
    o & 1 ? e === Cl ? Cr++ : (Cr = 0,
    Cl = e) : Cr = 0,
    Bt(),
    null
}
function Vn() {
    if (Pt !== null) {
        var e = _d(ho)
          , t = ze.transition
          , n = F;
        try {
            if (ze.transition = null,
            F = 16 > e ? 16 : e,
            Pt === null)
                var r = !1;
            else {
                if (e = Pt,
                Pt = null,
                ho = 0,
                O & 6)
                    throw Error(C(331));
                var i = O;
                for (O |= 4,
                A = e.current; A !== null; ) {
                    var o = A
                      , s = o.child;
                    if (A.flags & 16) {
                        var l = o.deletions;
                        if (l !== null) {
                            for (var a = 0; a < l.length; a++) {
                                var u = l[a];
                                for (A = u; A !== null; ) {
                                    var c = A;
                                    switch (c.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Tr(8, c, o)
                                    }
                                    var f = c.child;
                                    if (f !== null)
                                        f.return = c,
                                        A = f;
                                    else
                                        for (; A !== null; ) {
                                            c = A;
                                            var d = c.sibling
                                              , g = c.return;
                                            if (zh(c),
                                            c === u) {
                                                A = null;
                                                break
                                            }
                                            if (d !== null) {
                                                d.return = g,
                                                A = d;
                                                break
                                            }
                                            A = g
                                        }
                                }
                            }
                            var v = o.alternate;
                            if (v !== null) {
                                var x = v.child;
                                if (x !== null) {
                                    v.child = null;
                                    do {
                                        var T = x.sibling;
                                        x.sibling = null,
                                        x = T
                                    } while (x !== null)
                                }
                            }
                            A = o
                        }
                    }
                    if (o.subtreeFlags & 2064 && s !== null)
                        s.return = o,
                        A = s;
                    else
                        e: for (; A !== null; ) {
                            if (o = A,
                            o.flags & 2048)
                                switch (o.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Tr(9, o, o.return)
                                }
                            var p = o.sibling;
                            if (p !== null) {
                                p.return = o.return,
                                A = p;
                                break e
                            }
                            A = o.return
                        }
                }
                var h = e.current;
                for (A = h; A !== null; ) {
                    s = A;
                    var m = s.child;
                    if (s.subtreeFlags & 2064 && m !== null)
                        m.return = s,
                        A = m;
                    else
                        e: for (s = h; A !== null; ) {
                            if (l = A,
                            l.flags & 2048)
                                try {
                                    switch (l.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Do(9, l)
                                    }
                                } catch (S) {
                                    X(l, l.return, S)
                                }
                            if (l === s) {
                                A = null;
                                break e
                            }
                            var w = l.sibling;
                            if (w !== null) {
                                w.return = l.return,
                                A = w;
                                break e
                            }
                            A = l.return
                        }
                }
                if (O = i,
                Bt(),
                et && typeof et.onPostCommitFiberRoot == "function")
                    try {
                        et.onPostCommitFiberRoot(Eo, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            F = n,
            ze.transition = t
        }
    }
    return !1
}
function Cc(e, t, n) {
    t = Un(n, t),
    t = _h(e, t, 1),
    e = jt(e, t, 1),
    t = ve(),
    e !== null && (Jr(e, 1, t),
    Pe(e, t))
}
function X(e, t, n) {
    if (e.tag === 3)
        Cc(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Cc(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Nt === null || !Nt.has(r))) {
                    e = Un(n, e),
                    e = Ah(t, e, 1),
                    t = jt(t, e, 1),
                    e = ve(),
                    t !== null && (Jr(t, 1, e),
                    Pe(t, e));
                    break
                }
            }
            t = t.return
        }
}
function qy(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = ve(),
    e.pingedLanes |= e.suspendedLanes & n,
    oe === e && (ue & n) === n && (te === 4 || te === 3 && (ue & 130023424) === ue && 500 > q() - _a ? en(e, 0) : Ma |= n),
    Pe(e, t)
}
function Yh(e, t) {
    t === 0 && (e.mode & 1 ? (t = pi,
    pi <<= 1,
    !(pi & 130023424) && (pi = 4194304)) : t = 1);
    var n = ve();
    e = ht(e, t),
    e !== null && (Jr(e, t, n),
    Pe(e, n))
}
function Jy(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    Yh(e, n)
}
function by(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(C(314))
    }
    r !== null && r.delete(t),
    Yh(e, n)
}
var Zh;
Zh = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || ke.current)
            Te = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return Te = !1,
                By(e, t, n);
            Te = !!(e.flags & 131072)
        }
    else
        Te = !1,
        $ && t.flags & 1048576 && eh(t, ro, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        Ii(e, t),
        e = t.pendingProps;
        var i = Fn(t, ge.current);
        Dn(t, n),
        i = Sa(null, t, r, e, i, n);
        var o = Ta();
        return t.flags |= 1,
        typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        Ce(r) ? (o = !0,
        to(t)) : o = !1,
        t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null,
        ga(t),
        i.updater = Ro,
        t.stateNode = i,
        i._reactInternals = t,
        dl(t, r, e, n),
        t = ml(null, t, r, !0, o, n)) : (t.tag = 0,
        $ && o && ua(t),
        ye(null, t, i, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (Ii(e, t),
            e = t.pendingProps,
            i = r._init,
            r = i(r._payload),
            t.type = r,
            i = t.tag = tv(r),
            e = We(r, e),
            i) {
            case 0:
                t = pl(null, t, r, e, n);
                break e;
            case 1:
                t = pc(null, t, r, e, n);
                break e;
            case 11:
                t = dc(null, t, r, e, n);
                break e;
            case 14:
                t = hc(null, t, r, We(r.type, e), n);
                break e
            }
            throw Error(C(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : We(r, i),
        pl(e, t, r, i, n);
    case 1:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : We(r, i),
        pc(e, t, r, i, n);
    case 3:
        e: {
            if (Rh(t),
            e === null)
                throw Error(C(387));
            r = t.pendingProps,
            o = t.memoizedState,
            i = o.element,
            sh(e, t),
            so(t, r, null, n);
            var s = t.memoizedState;
            if (r = s.element,
            o.isDehydrated)
                if (o = {
                    element: r,
                    isDehydrated: !1,
                    cache: s.cache,
                    pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                    transitions: s.transitions
                },
                t.updateQueue.baseState = o,
                t.memoizedState = o,
                t.flags & 256) {
                    i = Un(Error(C(423)), t),
                    t = mc(e, t, r, n, i);
                    break e
                } else if (r !== i) {
                    i = Un(Error(C(424)), t),
                    t = mc(e, t, r, n, i);
                    break e
                } else
                    for (Me = At(t.stateNode.containerInfo.firstChild),
                    _e = t,
                    $ = !0,
                    Ke = null,
                    n = ih(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (In(),
                r === i) {
                    t = pt(e, t, n);
                    break e
                }
                ye(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return lh(t),
        e === null && ul(t),
        r = t.type,
        i = t.pendingProps,
        o = e !== null ? e.memoizedProps : null,
        s = i.children,
        il(r, i) ? s = null : o !== null && il(r, o) && (t.flags |= 32),
        Lh(e, t),
        ye(e, t, s, n),
        t.child;
    case 6:
        return e === null && ul(t),
        null;
    case 13:
        return Dh(e, t, n);
    case 4:
        return ya(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = zn(t, null, r, n) : ye(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : We(r, i),
        dc(e, t, r, i, n);
    case 7:
        return ye(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return ye(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return ye(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            i = t.pendingProps,
            o = t.memoizedProps,
            s = i.value,
            I(io, r._currentValue),
            r._currentValue = s,
            o !== null)
                if (Ze(o.value, s)) {
                    if (o.children === i.children && !ke.current) {
                        t = pt(e, t, n);
                        break e
                    }
                } else
                    for (o = t.child,
                    o !== null && (o.return = t); o !== null; ) {
                        var l = o.dependencies;
                        if (l !== null) {
                            s = o.child;
                            for (var a = l.firstContext; a !== null; ) {
                                if (a.context === r) {
                                    if (o.tag === 1) {
                                        a = at(-1, n & -n),
                                        a.tag = 2;
                                        var u = o.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var c = u.pending;
                                            c === null ? a.next = a : (a.next = c.next,
                                            c.next = a),
                                            u.pending = a
                                        }
                                    }
                                    o.lanes |= n,
                                    a = o.alternate,
                                    a !== null && (a.lanes |= n),
                                    cl(o.return, n, t),
                                    l.lanes |= n;
                                    break
                                }
                                a = a.next
                            }
                        } else if (o.tag === 10)
                            s = o.type === t.type ? null : o.child;
                        else if (o.tag === 18) {
                            if (s = o.return,
                            s === null)
                                throw Error(C(341));
                            s.lanes |= n,
                            l = s.alternate,
                            l !== null && (l.lanes |= n),
                            cl(s, n, t),
                            s = o.sibling
                        } else
                            s = o.child;
                        if (s !== null)
                            s.return = o;
                        else
                            for (s = o; s !== null; ) {
                                if (s === t) {
                                    s = null;
                                    break
                                }
                                if (o = s.sibling,
                                o !== null) {
                                    o.return = s.return,
                                    s = o;
                                    break
                                }
                                s = s.return
                            }
                        o = s
                    }
            ye(e, t, i.children, n),
            t = t.child
        }
        return t;
    case 9:
        return i = t.type,
        r = t.pendingProps.children,
        Dn(t, n),
        i = Be(i),
        r = r(i),
        t.flags |= 1,
        ye(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        i = We(r, t.pendingProps),
        i = We(r.type, i),
        hc(e, t, r, i, n);
    case 15:
        return jh(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : We(r, i),
        Ii(e, t),
        t.tag = 1,
        Ce(r) ? (e = !0,
        to(t)) : e = !1,
        Dn(t, n),
        Mh(t, r, i),
        dl(t, r, i, n),
        ml(null, t, r, !0, e, n);
    case 19:
        return Vh(e, t, n);
    case 22:
        return Nh(e, t, n)
    }
    throw Error(C(156, t.tag))
}
;
function qh(e, t) {
    return Cd(e, t)
}
function ev(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function Ie(e, t, n, r) {
    return new ev(e,t,n,r)
}
function La(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function tv(e) {
    if (typeof e == "function")
        return La(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === ql)
            return 11;
        if (e === Jl)
            return 14
    }
    return 2
}
function Rt(e, t) {
    var n = e.alternate;
    return n === null ? (n = Ie(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function Ui(e, t, n, r, i, o) {
    var s = 2;
    if (r = e,
    typeof e == "function")
        La(e) && (s = 1);
    else if (typeof e == "string")
        s = 5;
    else
        e: switch (e) {
        case pn:
            return tn(n.children, i, o, t);
        case Zl:
            s = 8,
            i |= 8;
            break;
        case Os:
            return e = Ie(12, n, t, i | 2),
            e.elementType = Os,
            e.lanes = o,
            e;
        case Fs:
            return e = Ie(13, n, t, i),
            e.elementType = Fs,
            e.lanes = o,
            e;
        case Is:
            return e = Ie(19, n, t, i),
            e.elementType = Is,
            e.lanes = o,
            e;
        case ld:
            return Oo(n, i, o, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case od:
                    s = 10;
                    break e;
                case sd:
                    s = 9;
                    break e;
                case ql:
                    s = 11;
                    break e;
                case Jl:
                    s = 14;
                    break e;
                case wt:
                    s = 16,
                    r = null;
                    break e
                }
            throw Error(C(130, e == null ? e : typeof e, ""))
        }
    return t = Ie(s, n, t, i),
    t.elementType = e,
    t.type = r,
    t.lanes = o,
    t
}
function tn(e, t, n, r) {
    return e = Ie(7, e, r, t),
    e.lanes = n,
    e
}
function Oo(e, t, n, r) {
    return e = Ie(22, e, r, t),
    e.elementType = ld,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function vs(e, t, n) {
    return e = Ie(6, e, null, t),
    e.lanes = n,
    e
}
function xs(e, t, n) {
    return t = Ie(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function nv(e, t, n, r, i) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = bo(0),
    this.expirationTimes = bo(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = bo(0),
    this.identifierPrefix = r,
    this.onRecoverableError = i,
    this.mutableSourceEagerHydrationData = null
}
function Ra(e, t, n, r, i, o, s, l, a) {
    return e = new nv(e,t,n,l,a),
    t === 1 ? (t = 1,
    o === !0 && (t |= 8)) : t = 0,
    o = Ie(3, null, null, t),
    e.current = o,
    o.stateNode = e,
    o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    ga(o),
    e
}
function rv(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: hn,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function Jh(e) {
    if (!e)
        return Vt;
    e = e._reactInternals;
    e: {
        if (cn(e) !== e || e.tag !== 1)
            throw Error(C(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (Ce(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(C(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Ce(n))
            return Jd(e, n, t)
    }
    return t
}
function bh(e, t, n, r, i, o, s, l, a) {
    return e = Ra(n, r, !0, e, i, o, s, l, a),
    e.context = Jh(null),
    n = e.current,
    r = ve(),
    i = Lt(n),
    o = at(r, i),
    o.callback = t ?? null,
    jt(n, o, i),
    e.current.lanes = i,
    Jr(e, i, r),
    Pe(e, r),
    e
}
function Fo(e, t, n, r) {
    var i = t.current
      , o = ve()
      , s = Lt(i);
    return n = Jh(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = at(o, s),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = jt(i, t, s),
    e !== null && (Xe(e, i, s, o),
    Vi(e, i, s)),
    s
}
function mo(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function Pc(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function Da(e, t) {
    Pc(e, t),
    (e = e.alternate) && Pc(e, t)
}
function iv() {
    return null
}
var ep = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Va(e) {
    this._internalRoot = e
}
Io.prototype.render = Va.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(C(409));
    Fo(e, t, null, null)
}
;
Io.prototype.unmount = Va.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        an(function() {
            Fo(null, e, null, null)
        }),
        t[dt] = null
    }
}
;
function Io(e) {
    this._internalRoot = e
}
Io.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Nd();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Tt.length && t !== 0 && t < Tt[n].priority; n++)
            ;
        Tt.splice(n, 0, e),
        n === 0 && Rd(e)
    }
}
;
function Oa(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function zo(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function Ec() {}
function ov(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var o = r;
            r = function() {
                var u = mo(s);
                o.call(u)
            }
        }
        var s = bh(t, r, e, 0, null, !1, !1, "", Ec);
        return e._reactRootContainer = s,
        e[dt] = s.current,
        Fr(e.nodeType === 8 ? e.parentNode : e),
        an(),
        s
    }
    for (; i = e.lastChild; )
        e.removeChild(i);
    if (typeof r == "function") {
        var l = r;
        r = function() {
            var u = mo(a);
            l.call(u)
        }
    }
    var a = Ra(e, 0, !1, null, null, !1, !1, "", Ec);
    return e._reactRootContainer = a,
    e[dt] = a.current,
    Fr(e.nodeType === 8 ? e.parentNode : e),
    an(function() {
        Fo(t, a, n, r)
    }),
    a
}
function Bo(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
        var s = o;
        if (typeof i == "function") {
            var l = i;
            i = function() {
                var a = mo(s);
                l.call(a)
            }
        }
        Fo(t, s, e, i)
    } else
        s = ov(n, t, e, i, r);
    return mo(s)
}
Ad = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = fr(t.pendingLanes);
            n !== 0 && (ta(t, n | 1),
            Pe(t, q()),
            !(O & 6) && ($n = q() + 500,
            Bt()))
        }
        break;
    case 13:
        an(function() {
            var r = ht(e, 1);
            if (r !== null) {
                var i = ve();
                Xe(r, e, 1, i)
            }
        }),
        Da(e, 1)
    }
}
;
na = function(e) {
    if (e.tag === 13) {
        var t = ht(e, 134217728);
        if (t !== null) {
            var n = ve();
            Xe(t, e, 134217728, n)
        }
        Da(e, 134217728)
    }
}
;
jd = function(e) {
    if (e.tag === 13) {
        var t = Lt(e)
          , n = ht(e, t);
        if (n !== null) {
            var r = ve();
            Xe(n, e, t, r)
        }
        Da(e, t)
    }
}
;
Nd = function() {
    return F
}
;
Ld = function(e, t) {
    var n = F;
    try {
        return F = e,
        t()
    } finally {
        F = n
    }
}
;
Xs = function(e, t, n) {
    switch (t) {
    case "input":
        if (Us(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var i = jo(r);
                    if (!i)
                        throw Error(C(90));
                    ud(r),
                    Us(r, i)
                }
            }
        }
        break;
    case "textarea":
        fd(e, n);
        break;
    case "select":
        t = n.value,
        t != null && jn(e, !!n.multiple, t, !1)
    }
}
;
vd = Aa;
xd = an;
var sv = {
    usingClientEntryPoint: !1,
    Events: [ei, vn, jo, gd, yd, Aa]
}
  , sr = {
    findFiberByHostInstance: Zt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , lv = {
    bundleType: sr.bundleType,
    version: sr.version,
    rendererPackageName: sr.rendererPackageName,
    rendererConfig: sr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: gt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = Td(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: sr.findFiberByHostInstance || iv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Pi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Pi.isDisabled && Pi.supportsFiber)
        try {
            Eo = Pi.inject(lv),
            et = Pi
        } catch {}
}
Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sv;
Le.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Oa(t))
        throw Error(C(200));
    return rv(e, t, null, n)
}
;
Le.createRoot = function(e, t) {
    if (!Oa(e))
        throw Error(C(299));
    var n = !1
      , r = ""
      , i = ep;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    t = Ra(e, 1, !1, null, null, n, !1, r, i),
    e[dt] = t.current,
    Fr(e.nodeType === 8 ? e.parentNode : e),
    new Va(t)
}
;
Le.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(C(188)) : (e = Object.keys(e).join(","),
        Error(C(268, e)));
    return e = Td(t),
    e = e === null ? null : e.stateNode,
    e
}
;
Le.flushSync = function(e) {
    return an(e)
}
;
Le.hydrate = function(e, t, n) {
    if (!zo(t))
        throw Error(C(200));
    return Bo(null, e, t, !0, n)
}
;
Le.hydrateRoot = function(e, t, n) {
    if (!Oa(e))
        throw Error(C(405));
    var r = n != null && n.hydratedSources || null
      , i = !1
      , o = ""
      , s = ep;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0),
    n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    t = bh(t, null, e, 1, n ?? null, i, !1, o, s),
    e[dt] = t.current,
    Fr(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            i = n._getVersion,
            i = i(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new Io(t)
}
;
Le.render = function(e, t, n) {
    if (!zo(t))
        throw Error(C(200));
    return Bo(null, e, t, !1, n)
}
;
Le.unmountComponentAtNode = function(e) {
    if (!zo(e))
        throw Error(C(40));
    return e._reactRootContainer ? (an(function() {
        Bo(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[dt] = null
        })
    }),
    !0) : !1
}
;
Le.unstable_batchedUpdates = Aa;
Le.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!zo(n))
        throw Error(C(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(C(38));
    return Bo(e, t, n, !1, r)
}
;
Le.version = "18.3.1-next-f1338f8080-20240426";
function tp() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tp)
        } catch (e) {
            console.error(e)
        }
}
tp(),
td.exports = Le;
var av = td.exports
  , Mc = av;
Ds.createRoot = Mc.createRoot,
Ds.hydrateRoot = Mc.hydrateRoot;
const Fa = M.createContext({});
function Ia(e) {
    const t = M.useRef(null);
    return t.current === null && (t.current = e()),
    t.current
}
const Uo = M.createContext(null)
  , za = M.createContext({
    transformPagePoint: e => e,
    isStatic: !1,
    reducedMotion: "never"
});
class uv extends M.Component {
    getSnapshotBeforeUpdate(t) {
        const n = this.props.childRef.current;
        if (n && t.isPresent && !this.props.isPresent) {
            const r = this.props.sizeRef.current;
            r.height = n.offsetHeight || 0,
            r.width = n.offsetWidth || 0,
            r.top = n.offsetTop,
            r.left = n.offsetLeft
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}
function cv({children: e, isPresent: t}) {
    const n = M.useId()
      , r = M.useRef(null)
      , i = M.useRef({
        width: 0,
        height: 0,
        top: 0,
        left: 0
    })
      , {nonce: o} = M.useContext(za);
    return M.useInsertionEffect( () => {
        const {width: s, height: l, top: a, left: u} = i.current;
        if (t || !r.current || !s || !l)
            return;
        r.current.dataset.motionPopId = n;
        const c = document.createElement("style");
        return o && (c.nonce = o),
        document.head.appendChild(c),
        c.sheet && c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${l}px !important;
            top: ${a}px !important;
            left: ${u}px !important;
          }
        `),
        () => {
            document.head.removeChild(c)
        }
    }
    , [t]),
    y.jsx(uv, {
        isPresent: t,
        childRef: r,
        sizeRef: i,
        children: M.cloneElement(e, {
            ref: r
        })
    })
}
const fv = ({children: e, initial: t, isPresent: n, onExitComplete: r, custom: i, presenceAffectsLayout: o, mode: s}) => {
    const l = Ia(dv)
      , a = M.useId()
      , u = M.useCallback(f => {
        l.set(f, !0);
        for (const d of l.values())
            if (!d)
                return;
        r && r()
    }
    , [l, r])
      , c = M.useMemo( () => ({
        id: a,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: u,
        register: f => (l.set(f, !1),
        () => l.delete(f))
    }), o ? [Math.random(), u] : [n, u]);
    return M.useMemo( () => {
        l.forEach( (f, d) => l.set(d, !1))
    }
    , [n]),
    M.useEffect( () => {
        !n && !l.size && r && r()
    }
    , [n]),
    s === "popLayout" && (e = y.jsx(cv, {
        isPresent: n,
        children: e
    })),
    y.jsx(Uo.Provider, {
        value: c,
        children: e
    })
}
;
function dv() {
    return new Map
}
function np(e=!0) {
    const t = M.useContext(Uo);
    if (t === null)
        return [!0, null];
    const {isPresent: n, onExitComplete: r, register: i} = t
      , o = M.useId();
    M.useEffect( () => {
        e && i(o)
    }
    , [e]);
    const s = M.useCallback( () => e && r && r(o), [o, r, e]);
    return !n && r ? [!1, s] : [!0]
}
const Ei = e => e.key || "";
function _c(e) {
    const t = [];
    return M.Children.forEach(e, n => {
        M.isValidElement(n) && t.push(n)
    }
    ),
    t
}
const Ba = typeof window < "u"
  , rp = Ba ? M.useLayoutEffect : M.useEffect
  , hv = ({children: e, custom: t, initial: n=!0, onExitComplete: r, presenceAffectsLayout: i=!0, mode: o="sync", propagate: s=!1}) => {
    const [l,a] = np(s)
      , u = M.useMemo( () => _c(e), [e])
      , c = s && !l ? [] : u.map(Ei)
      , f = M.useRef(!0)
      , d = M.useRef(u)
      , g = Ia( () => new Map)
      , [v,x] = M.useState(u)
      , [T,p] = M.useState(u);
    rp( () => {
        f.current = !1,
        d.current = u;
        for (let w = 0; w < T.length; w++) {
            const S = Ei(T[w]);
            c.includes(S) ? g.delete(S) : g.get(S) !== !0 && g.set(S, !1)
        }
    }
    , [T, c.length, c.join("-")]);
    const h = [];
    if (u !== v) {
        let w = [...u];
        for (let S = 0; S < T.length; S++) {
            const P = T[S]
              , E = Ei(P);
            c.includes(E) || (w.splice(S, 0, P),
            h.push(P))
        }
        o === "wait" && h.length && (w = h),
        p(_c(w)),
        x(u);
        return
    }
    const {forceRender: m} = M.useContext(Fa);
    return y.jsx(y.Fragment, {
        children: T.map(w => {
            const S = Ei(w)
              , P = s && !l ? !1 : u === T || c.includes(S)
              , E = () => {
                if (g.has(S))
                    g.set(S, !0);
                else
                    return;
                let k = !0;
                g.forEach(D => {
                    D || (k = !1)
                }
                ),
                k && (m == null || m(),
                p(d.current),
                s && (a == null || a()),
                r && r())
            }
            ;
            return y.jsx(fv, {
                isPresent: P,
                initial: !f.current || n ? void 0 : !1,
                custom: P ? void 0 : t,
                presenceAffectsLayout: i,
                mode: o,
                onExitComplete: P ? void 0 : E,
                children: w
            }, S)
        }
        )
    })
}
  , Ae = e => e;
let ip = Ae;
function Ua(e) {
    let t;
    return () => (t === void 0 && (t = e()),
    t)
}
const Gn = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r
}
  , ut = e => e * 1e3
  , ct = e => e / 1e3
  , pv = {
    useManualTiming: !1
};
function mv(e) {
    let t = new Set
      , n = new Set
      , r = !1
      , i = !1;
    const o = new WeakSet;
    let s = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    };
    function l(u) {
        o.has(u) && (a.schedule(u),
        e()),
        u(s)
    }
    const a = {
        schedule: (u, c=!1, f=!1) => {
            const g = f && r ? t : n;
            return c && o.add(u),
            g.has(u) || g.add(u),
            u
        }
        ,
        cancel: u => {
            n.delete(u),
            o.delete(u)
        }
        ,
        process: u => {
            if (s = u,
            r) {
                i = !0;
                return
            }
            r = !0,
            [t,n] = [n, t],
            t.forEach(l),
            t.clear(),
            r = !1,
            i && (i = !1,
            a.process(u))
        }
    };
    return a
}
const Mi = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"]
  , gv = 40;
function op(e, t) {
    let n = !1
      , r = !0;
    const i = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , o = () => n = !0
      , s = Mi.reduce( (p, h) => (p[h] = mv(o),
    p), {})
      , {read: l, resolveKeyframes: a, update: u, preRender: c, render: f, postRender: d} = s
      , g = () => {
        const p = performance.now();
        n = !1,
        i.delta = r ? 1e3 / 60 : Math.max(Math.min(p - i.timestamp, gv), 1),
        i.timestamp = p,
        i.isProcessing = !0,
        l.process(i),
        a.process(i),
        u.process(i),
        c.process(i),
        f.process(i),
        d.process(i),
        i.isProcessing = !1,
        n && t && (r = !1,
        e(g))
    }
      , v = () => {
        n = !0,
        r = !0,
        i.isProcessing || e(g)
    }
    ;
    return {
        schedule: Mi.reduce( (p, h) => {
            const m = s[h];
            return p[h] = (w, S=!1, P=!1) => (n || v(),
            m.schedule(w, S, P)),
            p
        }
        , {}),
        cancel: p => {
            for (let h = 0; h < Mi.length; h++)
                s[Mi[h]].cancel(p)
        }
        ,
        state: i,
        steps: s
    }
}
const {schedule: U, cancel: Ot, state: le, steps: ws} = op(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ae, !0)
  , sp = M.createContext({
    strict: !1
})
  , Ac = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}
  , Wn = {};
for (const e in Ac)
    Wn[e] = {
        isEnabled: t => Ac[e].some(n => !!t[n])
    };
function yv(e) {
    for (const t in e)
        Wn[t] = {
            ...Wn[t],
            ...e[t]
        }
}
const vv = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function go(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || vv.has(e)
}
let lp = e => !go(e);
function xv(e) {
    e && (lp = t => t.startsWith("on") ? !go(t) : e(t))
}
try {
    xv(require("@emotion/is-prop-valid").default)
} catch {}
function wv(e, t, n) {
    const r = {};
    for (const i in e)
        i === "values" && typeof e.values == "object" || (lp(i) || n === !0 && go(i) || !t && !go(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
    return r
}
function Sv(e) {
    if (typeof Proxy > "u")
        return e;
    const t = new Map
      , n = (...r) => e(...r);
    return new Proxy(n,{
        get: (r, i) => i === "create" ? e : (t.has(i) || t.set(i, e(i)),
        t.get(i))
    })
}
const $o = M.createContext({});
function Kr(e) {
    return typeof e == "string" || Array.isArray(e)
}
function Go(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function"
}
const $a = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , Ga = ["initial", ...$a];
function Wo(e) {
    return Go(e.animate) || Ga.some(t => Kr(e[t]))
}
function ap(e) {
    return !!(Wo(e) || e.variants)
}
function Tv(e, t) {
    if (Wo(e)) {
        const {initial: n, animate: r} = e;
        return {
            initial: n === !1 || Kr(n) ? n : void 0,
            animate: Kr(r) ? r : void 0
        }
    }
    return e.inherit !== !1 ? t : {}
}
function kv(e) {
    const {initial: t, animate: n} = Tv(e, M.useContext($o));
    return M.useMemo( () => ({
        initial: t,
        animate: n
    }), [jc(t), jc(n)])
}
function jc(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const Cv = Symbol.for("motionComponentSymbol");
function Pn(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}
function Pv(e, t, n) {
    return M.useCallback(r => {
        r && e.onMount && e.onMount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : Pn(n) && (n.current = r))
    }
    , [t])
}
const Wa = e => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
  , Ev = "framerAppearId"
  , up = "data-" + Wa(Ev)
  , {schedule: Ha} = op(queueMicrotask, !1)
  , cp = M.createContext({});
function Mv(e, t, n, r, i) {
    var o, s;
    const {visualElement: l} = M.useContext($o)
      , a = M.useContext(sp)
      , u = M.useContext(Uo)
      , c = M.useContext(za).reducedMotion
      , f = M.useRef(null);
    r = r || a.renderer,
    !f.current && r && (f.current = r(e, {
        visualState: t,
        parent: l,
        props: n,
        presenceContext: u,
        blockInitialAnimation: u ? u.initial === !1 : !1,
        reducedMotionConfig: c
    }));
    const d = f.current
      , g = M.useContext(cp);
    d && !d.projection && i && (d.type === "html" || d.type === "svg") && _v(f.current, n, i, g);
    const v = M.useRef(!1);
    M.useInsertionEffect( () => {
        d && v.current && d.update(n, u)
    }
    );
    const x = n[up]
      , T = M.useRef(!!x && !(!((o = window.MotionHandoffIsComplete) === null || o === void 0) && o.call(window, x)) && ((s = window.MotionHasOptimisedAnimation) === null || s === void 0 ? void 0 : s.call(window, x)));
    return rp( () => {
        d && (v.current = !0,
        window.MotionIsMounted = !0,
        d.updateFeatures(),
        Ha.render(d.render),
        T.current && d.animationState && d.animationState.animateChanges())
    }
    ),
    M.useEffect( () => {
        d && (!T.current && d.animationState && d.animationState.animateChanges(),
        T.current && (queueMicrotask( () => {
            var p;
            (p = window.MotionHandoffMarkAsComplete) === null || p === void 0 || p.call(window, x)
        }
        ),
        T.current = !1))
    }
    ),
    d
}
function _v(e, t, n, r) {
    const {layoutId: i, layout: o, drag: s, dragConstraints: l, layoutScroll: a, layoutRoot: u} = t;
    e.projection = new n(e.latestValues,t["data-framer-portal-id"] ? void 0 : fp(e.parent)),
    e.projection.setOptions({
        layoutId: i,
        layout: o,
        alwaysMeasureLayout: !!s || l && Pn(l),
        visualElement: e,
        animationType: typeof o == "string" ? o : "both",
        initialPromotionConfig: r,
        layoutScroll: a,
        layoutRoot: u
    })
}
function fp(e) {
    if (e)
        return e.options.allowProjection !== !1 ? e.projection : fp(e.parent)
}
function Av({preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: i}) {
    var o, s;
    e && yv(e);
    function l(u, c) {
        let f;
        const d = {
            ...M.useContext(za),
            ...u,
            layoutId: jv(u)
        }
          , {isStatic: g} = d
          , v = kv(u)
          , x = r(u, g);
        if (!g && Ba) {
            Nv();
            const T = Lv(d);
            f = T.MeasureLayout,
            v.visualElement = Mv(i, x, d, t, T.ProjectionNode)
        }
        return y.jsxs($o.Provider, {
            value: v,
            children: [f && v.visualElement ? y.jsx(f, {
                visualElement: v.visualElement,
                ...d
            }) : null, n(i, u, Pv(x, v.visualElement, c), x, g, v.visualElement)]
        })
    }
    l.displayName = `motion.${typeof i == "string" ? i : `create(${(s = (o = i.displayName) !== null && o !== void 0 ? o : i.name) !== null && s !== void 0 ? s : ""})`}`;
    const a = M.forwardRef(l);
    return a[Cv] = i,
    a
}
function jv({layoutId: e}) {
    const t = M.useContext(Fa).id;
    return t && e !== void 0 ? t + "-" + e : e
}
function Nv(e, t) {
    M.useContext(sp).strict
}
function Lv(e) {
    const {drag: t, layout: n} = Wn;
    if (!t && !n)
        return {};
    const r = {
        ...t,
        ...n
    };
    return {
        MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? r.MeasureLayout : void 0,
        ProjectionNode: r.ProjectionNode
    }
}
const Rv = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function Ka(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(Rv.indexOf(e) > -1 || /[A-Z]/u.test(e))
}
function Nc(e) {
    const t = [{}, {}];
    return e == null || e.values.forEach( (n, r) => {
        t[0][r] = n.get(),
        t[1][r] = n.getVelocity()
    }
    ),
    t
}
function Qa(e, t, n, r) {
    if (typeof t == "function") {
        const [i,o] = Nc(r);
        t = t(n !== void 0 ? n : e.custom, i, o)
    }
    if (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function") {
        const [i,o] = Nc(r);
        t = t(n !== void 0 ? n : e.custom, i, o)
    }
    return t
}
const Ml = e => Array.isArray(e)
  , Dv = e => !!(e && typeof e == "object" && e.mix && e.toValue)
  , Vv = e => Ml(e) ? e[e.length - 1] || 0 : e
  , me = e => !!(e && e.getVelocity);
function $i(e) {
    const t = me(e) ? e.get() : e;
    return Dv(t) ? t.toValue() : t
}
function Ov({scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n}, r, i, o) {
    const s = {
        latestValues: Fv(r, i, o, e),
        renderState: t()
    };
    return n && (s.onMount = l => n({
        props: r,
        current: l,
        ...s
    }),
    s.onUpdate = l => n(l)),
    s
}
const dp = e => (t, n) => {
    const r = M.useContext($o)
      , i = M.useContext(Uo)
      , o = () => Ov(e, t, r, i);
    return n ? o() : Ia(o)
}
;
function Fv(e, t, n, r) {
    const i = {}
      , o = r(e, {});
    for (const d in o)
        i[d] = $i(o[d]);
    let {initial: s, animate: l} = e;
    const a = Wo(e)
      , u = ap(e);
    t && u && !a && e.inherit !== !1 && (s === void 0 && (s = t.initial),
    l === void 0 && (l = t.animate));
    let c = n ? n.initial === !1 : !1;
    c = c || s === !1;
    const f = c ? l : s;
    if (f && typeof f != "boolean" && !Go(f)) {
        const d = Array.isArray(f) ? f : [f];
        for (let g = 0; g < d.length; g++) {
            const v = Qa(e, d[g]);
            if (v) {
                const {transitionEnd: x, transition: T, ...p} = v;
                for (const h in p) {
                    let m = p[h];
                    if (Array.isArray(m)) {
                        const w = c ? m.length - 1 : 0;
                        m = m[w]
                    }
                    m !== null && (i[h] = m)
                }
                for (const h in x)
                    i[h] = x[h]
            }
        }
    }
    return i
}
const Yn = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , fn = new Set(Yn)
  , hp = e => t => typeof t == "string" && t.startsWith(e)
  , pp = hp("--")
  , Iv = hp("var(--")
  , Xa = e => Iv(e) ? zv.test(e.split("/*")[0].trim()) : !1
  , zv = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
  , mp = (e, t) => t && typeof e == "number" ? t.transform(e) : e
  , mt = (e, t, n) => n > t ? t : n < e ? e : n
  , Zn = {
    test: e => typeof e == "number",
    parse: parseFloat,
    transform: e => e
}
  , Qr = {
    ...Zn,
    transform: e => mt(0, 1, e)
}
  , _i = {
    ...Zn,
    default: 1
}
  , ni = e => ({
    test: t => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: t => `${t}${e}`
})
  , xt = ni("deg")
  , nt = ni("%")
  , j = ni("px")
  , Bv = ni("vh")
  , Uv = ni("vw")
  , Lc = {
    ...nt,
    parse: e => nt.parse(e) / 100,
    transform: e => nt.transform(e * 100)
}
  , $v = {
    borderWidth: j,
    borderTopWidth: j,
    borderRightWidth: j,
    borderBottomWidth: j,
    borderLeftWidth: j,
    borderRadius: j,
    radius: j,
    borderTopLeftRadius: j,
    borderTopRightRadius: j,
    borderBottomRightRadius: j,
    borderBottomLeftRadius: j,
    width: j,
    maxWidth: j,
    height: j,
    maxHeight: j,
    top: j,
    right: j,
    bottom: j,
    left: j,
    padding: j,
    paddingTop: j,
    paddingRight: j,
    paddingBottom: j,
    paddingLeft: j,
    margin: j,
    marginTop: j,
    marginRight: j,
    marginBottom: j,
    marginLeft: j,
    backgroundPositionX: j,
    backgroundPositionY: j
}
  , Gv = {
    rotate: xt,
    rotateX: xt,
    rotateY: xt,
    rotateZ: xt,
    scale: _i,
    scaleX: _i,
    scaleY: _i,
    scaleZ: _i,
    skew: xt,
    skewX: xt,
    skewY: xt,
    distance: j,
    translateX: j,
    translateY: j,
    translateZ: j,
    x: j,
    y: j,
    z: j,
    perspective: j,
    transformPerspective: j,
    opacity: Qr,
    originX: Lc,
    originY: Lc,
    originZ: j
}
  , Rc = {
    ...Zn,
    transform: Math.round
}
  , Ya = {
    ...$v,
    ...Gv,
    zIndex: Rc,
    size: j,
    fillOpacity: Qr,
    strokeOpacity: Qr,
    numOctaves: Rc
}
  , Wv = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , Hv = Yn.length;
function Kv(e, t, n) {
    let r = ""
      , i = !0;
    for (let o = 0; o < Hv; o++) {
        const s = Yn[o]
          , l = e[s];
        if (l === void 0)
            continue;
        let a = !0;
        if (typeof l == "number" ? a = l === (s.startsWith("scale") ? 1 : 0) : a = parseFloat(l) === 0,
        !a || n) {
            const u = mp(l, Ya[s]);
            if (!a) {
                i = !1;
                const c = Wv[s] || s;
                r += `${c}(${u}) `
            }
            n && (t[s] = u)
        }
    }
    return r = r.trim(),
    n ? r = n(t, i ? "" : r) : i && (r = "none"),
    r
}
function Za(e, t, n) {
    const {style: r, vars: i, transformOrigin: o} = e;
    let s = !1
      , l = !1;
    for (const a in t) {
        const u = t[a];
        if (fn.has(a)) {
            s = !0;
            continue
        } else if (pp(a)) {
            i[a] = u;
            continue
        } else {
            const c = mp(u, Ya[a]);
            a.startsWith("origin") ? (l = !0,
            o[a] = c) : r[a] = c
        }
    }
    if (t.transform || (s || n ? r.transform = Kv(t, e.transform, n) : r.transform && (r.transform = "none")),
    l) {
        const {originX: a="50%", originY: u="50%", originZ: c=0} = o;
        r.transformOrigin = `${a} ${u} ${c}`
    }
}
const Qv = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , Xv = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function Yv(e, t, n=1, r=0, i=!0) {
    e.pathLength = 1;
    const o = i ? Qv : Xv;
    e[o.offset] = j.transform(-r);
    const s = j.transform(t)
      , l = j.transform(n);
    e[o.array] = `${s} ${l}`
}
function Dc(e, t, n) {
    return typeof e == "string" ? e : j.transform(t + n * e)
}
function Zv(e, t, n) {
    const r = Dc(t, e.x, e.width)
      , i = Dc(n, e.y, e.height);
    return `${r} ${i}`
}
function qa(e, {attrX: t, attrY: n, attrScale: r, originX: i, originY: o, pathLength: s, pathSpacing: l=1, pathOffset: a=0, ...u}, c, f) {
    if (Za(e, u, f),
    c) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style,
    e.style = {};
    const {attrs: d, style: g, dimensions: v} = e;
    d.transform && (v && (g.transform = d.transform),
    delete d.transform),
    v && (i !== void 0 || o !== void 0 || g.transform) && (g.transformOrigin = Zv(v, i !== void 0 ? i : .5, o !== void 0 ? o : .5)),
    t !== void 0 && (d.x = t),
    n !== void 0 && (d.y = n),
    r !== void 0 && (d.scale = r),
    s !== void 0 && Yv(d, s, l, a, !1)
}
const Ja = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
})
  , gp = () => ({
    ...Ja(),
    attrs: {}
})
  , ba = e => typeof e == "string" && e.toLowerCase() === "svg";
function yp(e, {style: t, vars: n}, r, i) {
    Object.assign(e.style, t, i && i.getProjectionStyles(r));
    for (const o in n)
        e.style.setProperty(o, n[o])
}
const vp = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function xp(e, t, n, r) {
    yp(e, t, void 0, r);
    for (const i in t.attrs)
        e.setAttribute(vp.has(i) ? i : Wa(i), t.attrs[i])
}
const yo = {};
function qv(e) {
    Object.assign(yo, e)
}
function wp(e, {layout: t, layoutId: n}) {
    return fn.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!yo[e] || e === "opacity")
}
function eu(e, t, n) {
    var r;
    const {style: i} = e
      , o = {};
    for (const s in i)
        (me(i[s]) || t.style && me(t.style[s]) || wp(s, e) || ((r = n == null ? void 0 : n.getValue(s)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (o[s] = i[s]);
    return o
}
function Sp(e, t, n) {
    const r = eu(e, t, n);
    for (const i in e)
        if (me(e[i]) || me(t[i])) {
            const o = Yn.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
            r[o] = e[i]
        }
    return r
}
function Jv(e, t) {
    try {
        t.dimensions = typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect()
    } catch {
        t.dimensions = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        }
    }
}
const Vc = ["x", "y", "width", "height", "cx", "cy", "r"]
  , bv = {
    useVisualState: dp({
        scrapeMotionValuesFromProps: Sp,
        createRenderState: gp,
        onUpdate: ({props: e, prevProps: t, current: n, renderState: r, latestValues: i}) => {
            if (!n)
                return;
            let o = !!e.drag;
            if (!o) {
                for (const l in i)
                    if (fn.has(l)) {
                        o = !0;
                        break
                    }
            }
            if (!o)
                return;
            let s = !t;
            if (t)
                for (let l = 0; l < Vc.length; l++) {
                    const a = Vc[l];
                    e[a] !== t[a] && (s = !0)
                }
            s && U.read( () => {
                Jv(n, r),
                U.render( () => {
                    qa(r, i, ba(n.tagName), e.transformTemplate),
                    xp(n, r)
                }
                )
            }
            )
        }
    })
}
  , e0 = {
    useVisualState: dp({
        scrapeMotionValuesFromProps: eu,
        createRenderState: Ja
    })
};
function Tp(e, t, n) {
    for (const r in t)
        !me(t[r]) && !wp(r, n) && (e[r] = t[r])
}
function t0({transformTemplate: e}, t) {
    return M.useMemo( () => {
        const n = Ja();
        return Za(n, t, e),
        Object.assign({}, n.vars, n.style)
    }
    , [t])
}
function n0(e, t) {
    const n = e.style || {}
      , r = {};
    return Tp(r, n, e),
    Object.assign(r, t0(e, t)),
    r
}
function r0(e, t) {
    const n = {}
      , r = n0(e, t);
    return e.drag && e.dragListener !== !1 && (n.draggable = !1,
    r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none",
    r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`),
    e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0),
    n.style = r,
    n
}
function i0(e, t, n, r) {
    const i = M.useMemo( () => {
        const o = gp();
        return qa(o, t, ba(r), e.transformTemplate),
        {
            ...o.attrs,
            style: {
                ...o.style
            }
        }
    }
    , [t]);
    if (e.style) {
        const o = {};
        Tp(o, e.style, e),
        i.style = {
            ...o,
            ...i.style
        }
    }
    return i
}
function o0(e=!1) {
    return (n, r, i, {latestValues: o}, s) => {
        const a = (Ka(n) ? i0 : r0)(r, o, s, n)
          , u = wv(r, typeof n == "string", e)
          , c = n !== M.Fragment ? {
            ...u,
            ...a,
            ref: i
        } : {}
          , {children: f} = r
          , d = M.useMemo( () => me(f) ? f.get() : f, [f]);
        return M.createElement(n, {
            ...c,
            children: d
        })
    }
}
function s0(e, t) {
    return function(r, {forwardMotionProps: i}={
        forwardMotionProps: !1
    }) {
        const s = {
            ...Ka(r) ? bv : e0,
            preloadedFeatures: e,
            useRender: o0(i),
            createVisualElement: t,
            Component: r
        };
        return Av(s)
    }
}
function kp(e, t) {
    if (!Array.isArray(t))
        return !1;
    const n = t.length;
    if (n !== e.length)
        return !1;
    for (let r = 0; r < n; r++)
        if (t[r] !== e[r])
            return !1;
    return !0
}
function Ho(e, t, n) {
    const r = e.getProps();
    return Qa(r, t, n !== void 0 ? n : r.custom, e)
}
const l0 = Ua( () => window.ScrollTimeline !== void 0);
class a0 {
    constructor(t) {
        this.stop = () => this.runAll("stop"),
        this.animations = t.filter(Boolean)
    }
    get finished() {
        return Promise.all(this.animations.map(t => "finished"in t ? t.finished : t))
    }
    getAll(t) {
        return this.animations[0][t]
    }
    setAll(t, n) {
        for (let r = 0; r < this.animations.length; r++)
            this.animations[r][t] = n
    }
    attachTimeline(t, n) {
        const r = this.animations.map(i => {
            if (l0() && i.attachTimeline)
                return i.attachTimeline(t);
            if (typeof n == "function")
                return n(i)
        }
        );
        return () => {
            r.forEach( (i, o) => {
                i && i(),
                this.animations[o].stop()
            }
            )
        }
    }
    get time() {
        return this.getAll("time")
    }
    set time(t) {
        this.setAll("time", t)
    }
    get speed() {
        return this.getAll("speed")
    }
    set speed(t) {
        this.setAll("speed", t)
    }
    get startTime() {
        return this.getAll("startTime")
    }
    get duration() {
        let t = 0;
        for (let n = 0; n < this.animations.length; n++)
            t = Math.max(t, this.animations[n].duration);
        return t
    }
    runAll(t) {
        this.animations.forEach(n => n[t]())
    }
    flatten() {
        this.runAll("flatten")
    }
    play() {
        this.runAll("play")
    }
    pause() {
        this.runAll("pause")
    }
    cancel() {
        this.runAll("cancel")
    }
    complete() {
        this.runAll("complete")
    }
}
class u0 extends a0 {
    then(t, n) {
        return Promise.all(this.animations).then(t).catch(n)
    }
}
function tu(e, t) {
    return e ? e[t] || e.default || e : void 0
}
const _l = 2e4;
function Cp(e) {
    let t = 0;
    const n = 50;
    let r = e.next(t);
    for (; !r.done && t < _l; )
        t += n,
        r = e.next(t);
    return t >= _l ? 1 / 0 : t
}
function nu(e) {
    return typeof e == "function"
}
function Oc(e, t) {
    e.timeline = t,
    e.onfinish = null
}
const ru = e => Array.isArray(e) && typeof e[0] == "number"
  , c0 = {
    linearEasing: void 0
};
function f0(e, t) {
    const n = Ua(e);
    return () => {
        var r;
        return (r = c0[t]) !== null && r !== void 0 ? r : n()
    }
}
const vo = f0( () => {
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        })
    } catch {
        return !1
    }
    return !0
}
, "linearEasing")
  , Pp = (e, t, n=10) => {
    let r = "";
    const i = Math.max(Math.round(t / n), 2);
    for (let o = 0; o < i; o++)
        r += e(Gn(0, i - 1, o)) + ", ";
    return `linear(${r.substring(0, r.length - 2)})`
}
;
function Ep(e) {
    return !!(typeof e == "function" && vo() || !e || typeof e == "string" && (e in Al || vo()) || ru(e) || Array.isArray(e) && e.every(Ep))
}
const hr = ([e,t,n,r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`
  , Al = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: hr([0, .65, .55, 1]),
    circOut: hr([.55, 0, 1, .45]),
    backIn: hr([.31, .01, .66, -.59]),
    backOut: hr([.33, 1.53, .69, .99])
};
function Mp(e, t) {
    if (e)
        return typeof e == "function" && vo() ? Pp(e, t) : ru(e) ? hr(e) : Array.isArray(e) ? e.map(n => Mp(n, t) || Al.easeOut) : Al[e]
}
const Ge = {
    x: !1,
    y: !1
};
function _p() {
    return Ge.x || Ge.y
}
function d0(e, t, n) {
    var r;
    if (e instanceof Element)
        return [e];
    if (typeof e == "string") {
        let i = document;
        const o = (r = void 0) !== null && r !== void 0 ? r : i.querySelectorAll(e);
        return o ? Array.from(o) : []
    }
    return Array.from(e)
}
function Ap(e, t) {
    const n = d0(e)
      , r = new AbortController
      , i = {
        passive: !0,
        ...t,
        signal: r.signal
    };
    return [n, i, () => r.abort()]
}
function Fc(e) {
    return t => {
        t.pointerType === "touch" || _p() || e(t)
    }
}
function h0(e, t, n={}) {
    const [r,i,o] = Ap(e, n)
      , s = Fc(l => {
        const {target: a} = l
          , u = t(l);
        if (typeof u != "function" || !a)
            return;
        const c = Fc(f => {
            u(f),
            a.removeEventListener("pointerleave", c)
        }
        );
        a.addEventListener("pointerleave", c, i)
    }
    );
    return r.forEach(l => {
        l.addEventListener("pointerenter", s, i)
    }
    ),
    o
}
const jp = (e, t) => t ? e === t ? !0 : jp(e, t.parentElement) : !1
  , iu = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1
  , p0 = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function m0(e) {
    return p0.has(e.tagName) || e.tabIndex !== -1
}
const pr = new WeakSet;
function Ic(e) {
    return t => {
        t.key === "Enter" && e(t)
    }
}
function Ss(e, t) {
    e.dispatchEvent(new PointerEvent("pointer" + t,{
        isPrimary: !0,
        bubbles: !0
    }))
}
const g0 = (e, t) => {
    const n = e.currentTarget;
    if (!n)
        return;
    const r = Ic( () => {
        if (pr.has(n))
            return;
        Ss(n, "down");
        const i = Ic( () => {
            Ss(n, "up")
        }
        )
          , o = () => Ss(n, "cancel");
        n.addEventListener("keyup", i, t),
        n.addEventListener("blur", o, t)
    }
    );
    n.addEventListener("keydown", r, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", r), t)
}
;
function zc(e) {
    return iu(e) && !_p()
}
function y0(e, t, n={}) {
    const [r,i,o] = Ap(e, n)
      , s = l => {
        const a = l.currentTarget;
        if (!zc(l) || pr.has(a))
            return;
        pr.add(a);
        const u = t(l)
          , c = (g, v) => {
            window.removeEventListener("pointerup", f),
            window.removeEventListener("pointercancel", d),
            !(!zc(g) || !pr.has(a)) && (pr.delete(a),
            typeof u == "function" && u(g, {
                success: v
            }))
        }
          , f = g => {
            c(g, n.useGlobalTarget || jp(a, g.target))
        }
          , d = g => {
            c(g, !1)
        }
        ;
        window.addEventListener("pointerup", f, i),
        window.addEventListener("pointercancel", d, i)
    }
    ;
    return r.forEach(l => {
        !m0(l) && l.getAttribute("tabindex") === null && (l.tabIndex = 0),
        (n.useGlobalTarget ? window : l).addEventListener("pointerdown", s, i),
        l.addEventListener("focus", u => g0(u, i), i)
    }
    ),
    o
}
function v0(e) {
    return e === "x" || e === "y" ? Ge[e] ? null : (Ge[e] = !0,
    () => {
        Ge[e] = !1
    }
    ) : Ge.x || Ge.y ? null : (Ge.x = Ge.y = !0,
    () => {
        Ge.x = Ge.y = !1
    }
    )
}
const Np = new Set(["width", "height", "top", "left", "right", "bottom", ...Yn]);
let Gi;
function x0() {
    Gi = void 0
}
const rt = {
    now: () => (Gi === void 0 && rt.set(le.isProcessing || pv.useManualTiming ? le.timestamp : performance.now()),
    Gi),
    set: e => {
        Gi = e,
        queueMicrotask(x0)
    }
};
function ou(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}
function su(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
class lu {
    constructor() {
        this.subscriptions = []
    }
    add(t) {
        return ou(this.subscriptions, t),
        () => su(this.subscriptions, t)
    }
    notify(t, n, r) {
        const i = this.subscriptions.length;
        if (i)
            if (i === 1)
                this.subscriptions[0](t, n, r);
            else
                for (let o = 0; o < i; o++) {
                    const s = this.subscriptions[o];
                    s && s(t, n, r)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
function Lp(e, t) {
    return t ? e * (1e3 / t) : 0
}
const Bc = 30
  , w0 = e => !isNaN(parseFloat(e));
class S0 {
    constructor(t, n={}) {
        this.version = "11.18.2",
        this.canTrackVelocity = null,
        this.events = {},
        this.updateAndNotify = (r, i=!0) => {
            const o = rt.now();
            this.updatedAt !== o && this.setPrevFrameValue(),
            this.prev = this.current,
            this.setCurrent(r),
            this.current !== this.prev && this.events.change && this.events.change.notify(this.current),
            i && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }
        ,
        this.hasAnimated = !1,
        this.setCurrent(t),
        this.owner = n.owner
    }
    setCurrent(t) {
        this.current = t,
        this.updatedAt = rt.now(),
        this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = w0(this.current))
    }
    setPrevFrameValue(t=this.current) {
        this.prevFrameValue = t,
        this.prevUpdatedAt = this.updatedAt
    }
    onChange(t) {
        return this.on("change", t)
    }
    on(t, n) {
        this.events[t] || (this.events[t] = new lu);
        const r = this.events[t].add(n);
        return t === "change" ? () => {
            r(),
            U.read( () => {
                this.events.change.getSize() || this.stop()
            }
            )
        }
        : r
    }
    clearListeners() {
        for (const t in this.events)
            this.events[t].clear()
    }
    attach(t, n) {
        this.passiveEffect = t,
        this.stopPassiveEffect = n
    }
    set(t, n=!0) {
        !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify)
    }
    setWithVelocity(t, n, r) {
        this.set(n),
        this.prev = void 0,
        this.prevFrameValue = t,
        this.prevUpdatedAt = this.updatedAt - r
    }
    jump(t, n=!0) {
        this.updateAndNotify(t),
        this.prev = t,
        this.prevUpdatedAt = this.prevFrameValue = void 0,
        n && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const t = rt.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > Bc)
            return 0;
        const n = Math.min(this.updatedAt - this.prevUpdatedAt, Bc);
        return Lp(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
    }
    start(t) {
        return this.stop(),
        new Promise(n => {
            this.hasAnimated = !0,
            this.animation = t(n),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then( () => {
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        )
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function Xr(e, t) {
    return new S0(e,t)
}
function T0(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Xr(n))
}
function k0(e, t) {
    const n = Ho(e, t);
    let {transitionEnd: r={}, transition: i={}, ...o} = n || {};
    o = {
        ...o,
        ...r
    };
    for (const s in o) {
        const l = Vv(o[s]);
        T0(e, s, l)
    }
}
function C0(e) {
    return !!(me(e) && e.add)
}
function jl(e, t) {
    const n = e.getValue("willChange");
    if (C0(n))
        return n.add(t)
}
function Rp(e) {
    return e.props[up]
}
const Dp = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e
  , P0 = 1e-7
  , E0 = 12;
function M0(e, t, n, r, i) {
    let o, s, l = 0;
    do
        s = t + (n - t) / 2,
        o = Dp(s, r, i) - e,
        o > 0 ? n = s : t = s;
    while (Math.abs(o) > P0 && ++l < E0);
    return s
}
function ri(e, t, n, r) {
    if (e === t && n === r)
        return Ae;
    const i = o => M0(o, 0, 1, e, n);
    return o => o === 0 || o === 1 ? o : Dp(i(o), t, r)
}
const Vp = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2
  , Op = e => t => 1 - e(1 - t)
  , Fp = ri(.33, 1.53, .69, .99)
  , au = Op(Fp)
  , Ip = Vp(au)
  , zp = e => (e *= 2) < 1 ? .5 * au(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
  , uu = e => 1 - Math.sin(Math.acos(e))
  , Bp = Op(uu)
  , Up = Vp(uu)
  , $p = e => /^0[^.\s]+$/u.test(e);
function _0(e) {
    return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || $p(e) : !0
}
const Pr = e => Math.round(e * 1e5) / 1e5
  , cu = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function A0(e) {
    return e == null
}
const j0 = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
  , fu = (e, t) => n => !!(typeof n == "string" && j0.test(n) && n.startsWith(e) || t && !A0(n) && Object.prototype.hasOwnProperty.call(n, t))
  , Gp = (e, t, n) => r => {
    if (typeof r != "string")
        return r;
    const [i,o,s,l] = r.match(cu);
    return {
        [e]: parseFloat(i),
        [t]: parseFloat(o),
        [n]: parseFloat(s),
        alpha: l !== void 0 ? parseFloat(l) : 1
    }
}
  , N0 = e => mt(0, 255, e)
  , Ts = {
    ...Zn,
    transform: e => Math.round(N0(e))
}
  , bt = {
    test: fu("rgb", "red"),
    parse: Gp("red", "green", "blue"),
    transform: ({red: e, green: t, blue: n, alpha: r=1}) => "rgba(" + Ts.transform(e) + ", " + Ts.transform(t) + ", " + Ts.transform(n) + ", " + Pr(Qr.transform(r)) + ")"
};
function L0(e) {
    let t = ""
      , n = ""
      , r = ""
      , i = "";
    return e.length > 5 ? (t = e.substring(1, 3),
    n = e.substring(3, 5),
    r = e.substring(5, 7),
    i = e.substring(7, 9)) : (t = e.substring(1, 2),
    n = e.substring(2, 3),
    r = e.substring(3, 4),
    i = e.substring(4, 5),
    t += t,
    n += n,
    r += r,
    i += i),
    {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: i ? parseInt(i, 16) / 255 : 1
    }
}
const Nl = {
    test: fu("#"),
    parse: L0,
    transform: bt.transform
}
  , En = {
    test: fu("hsl", "hue"),
    parse: Gp("hue", "saturation", "lightness"),
    transform: ({hue: e, saturation: t, lightness: n, alpha: r=1}) => "hsla(" + Math.round(e) + ", " + nt.transform(Pr(t)) + ", " + nt.transform(Pr(n)) + ", " + Pr(Qr.transform(r)) + ")"
}
  , he = {
    test: e => bt.test(e) || Nl.test(e) || En.test(e),
    parse: e => bt.test(e) ? bt.parse(e) : En.test(e) ? En.parse(e) : Nl.parse(e),
    transform: e => typeof e == "string" ? e : e.hasOwnProperty("red") ? bt.transform(e) : En.transform(e)
}
  , R0 = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function D0(e) {
    var t, n;
    return isNaN(e) && typeof e == "string" && (((t = e.match(cu)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(R0)) === null || n === void 0 ? void 0 : n.length) || 0) > 0
}
const Wp = "number"
  , Hp = "color"
  , V0 = "var"
  , O0 = "var("
  , Uc = "${}"
  , F0 = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Yr(e) {
    const t = e.toString()
      , n = []
      , r = {
        color: [],
        number: [],
        var: []
    }
      , i = [];
    let o = 0;
    const l = t.replace(F0, a => (he.test(a) ? (r.color.push(o),
    i.push(Hp),
    n.push(he.parse(a))) : a.startsWith(O0) ? (r.var.push(o),
    i.push(V0),
    n.push(a)) : (r.number.push(o),
    i.push(Wp),
    n.push(parseFloat(a))),
    ++o,
    Uc)).split(Uc);
    return {
        values: n,
        split: l,
        indexes: r,
        types: i
    }
}
function Kp(e) {
    return Yr(e).values
}
function Qp(e) {
    const {split: t, types: n} = Yr(e)
      , r = t.length;
    return i => {
        let o = "";
        for (let s = 0; s < r; s++)
            if (o += t[s],
            i[s] !== void 0) {
                const l = n[s];
                l === Wp ? o += Pr(i[s]) : l === Hp ? o += he.transform(i[s]) : o += i[s]
            }
        return o
    }
}
const I0 = e => typeof e == "number" ? 0 : e;
function z0(e) {
    const t = Kp(e);
    return Qp(e)(t.map(I0))
}
const Ft = {
    test: D0,
    parse: Kp,
    createTransformer: Qp,
    getAnimatableNone: z0
}
  , B0 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function U0(e) {
    const [t,n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow")
        return e;
    const [r] = n.match(cu) || [];
    if (!r)
        return e;
    const i = n.replace(r, "");
    let o = B0.has(t) ? 1 : 0;
    return r !== n && (o *= 100),
    t + "(" + o + i + ")"
}
const $0 = /\b([a-z-]*)\(.*?\)/gu
  , Ll = {
    ...Ft,
    getAnimatableNone: e => {
        const t = e.match($0);
        return t ? t.map(U0).join(" ") : e
    }
}
  , G0 = {
    ...Ya,
    color: he,
    backgroundColor: he,
    outlineColor: he,
    fill: he,
    stroke: he,
    borderColor: he,
    borderTopColor: he,
    borderRightColor: he,
    borderBottomColor: he,
    borderLeftColor: he,
    filter: Ll,
    WebkitFilter: Ll
}
  , du = e => G0[e];
function Xp(e, t) {
    let n = du(e);
    return n !== Ll && (n = Ft),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const W0 = new Set(["auto", "none", "0"]);
function H0(e, t, n) {
    let r = 0, i;
    for (; r < e.length && !i; ) {
        const o = e[r];
        typeof o == "string" && !W0.has(o) && Yr(o).values.length && (i = e[r]),
        r++
    }
    if (i && n)
        for (const o of t)
            e[o] = Xp(n, i)
}
const $c = e => e === Zn || e === j
  , Gc = (e, t) => parseFloat(e.split(", ")[t])
  , Wc = (e, t) => (n, {transform: r}) => {
    if (r === "none" || !r)
        return 0;
    const i = r.match(/^matrix3d\((.+)\)$/u);
    if (i)
        return Gc(i[1], t);
    {
        const o = r.match(/^matrix\((.+)\)$/u);
        return o ? Gc(o[1], e) : 0
    }
}
  , K0 = new Set(["x", "y", "z"])
  , Q0 = Yn.filter(e => !K0.has(e));
function X0(e) {
    const t = [];
    return Q0.forEach(n => {
        const r = e.getValue(n);
        r !== void 0 && (t.push([n, r.get()]),
        r.set(n.startsWith("scale") ? 1 : 0))
    }
    ),
    t
}
const Hn = {
    width: ({x: e}, {paddingLeft: t="0", paddingRight: n="0"}) => e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({y: e}, {paddingTop: t="0", paddingBottom: n="0"}) => e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, {top: t}) => parseFloat(t),
    left: (e, {left: t}) => parseFloat(t),
    bottom: ({y: e}, {top: t}) => parseFloat(t) + (e.max - e.min),
    right: ({x: e}, {left: t}) => parseFloat(t) + (e.max - e.min),
    x: Wc(4, 13),
    y: Wc(5, 14)
};
Hn.translateX = Hn.x;
Hn.translateY = Hn.y;
const nn = new Set;
let Rl = !1
  , Dl = !1;
function Yp() {
    if (Dl) {
        const e = Array.from(nn).filter(r => r.needsMeasurement)
          , t = new Set(e.map(r => r.element))
          , n = new Map;
        t.forEach(r => {
            const i = X0(r);
            i.length && (n.set(r, i),
            r.render())
        }
        ),
        e.forEach(r => r.measureInitialState()),
        t.forEach(r => {
            r.render();
            const i = n.get(r);
            i && i.forEach( ([o,s]) => {
                var l;
                (l = r.getValue(o)) === null || l === void 0 || l.set(s)
            }
            )
        }
        ),
        e.forEach(r => r.measureEndState()),
        e.forEach(r => {
            r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY)
        }
        )
    }
    Dl = !1,
    Rl = !1,
    nn.forEach(e => e.complete()),
    nn.clear()
}
function Zp() {
    nn.forEach(e => {
        e.readKeyframes(),
        e.needsMeasurement && (Dl = !0)
    }
    )
}
function Y0() {
    Zp(),
    Yp()
}
class hu {
    constructor(t, n, r, i, o, s=!1) {
        this.isComplete = !1,
        this.isAsync = !1,
        this.needsMeasurement = !1,
        this.isScheduled = !1,
        this.unresolvedKeyframes = [...t],
        this.onComplete = n,
        this.name = r,
        this.motionValue = i,
        this.element = o,
        this.isAsync = s
    }
    scheduleResolve() {
        this.isScheduled = !0,
        this.isAsync ? (nn.add(this),
        Rl || (Rl = !0,
        U.read(Zp),
        U.resolveKeyframes(Yp))) : (this.readKeyframes(),
        this.complete())
    }
    readKeyframes() {
        const {unresolvedKeyframes: t, name: n, element: r, motionValue: i} = this;
        for (let o = 0; o < t.length; o++)
            if (t[o] === null)
                if (o === 0) {
                    const s = i == null ? void 0 : i.get()
                      , l = t[t.length - 1];
                    if (s !== void 0)
                        t[0] = s;
                    else if (r && n) {
                        const a = r.readValue(n, l);
                        a != null && (t[0] = a)
                    }
                    t[0] === void 0 && (t[0] = l),
                    i && s === void 0 && i.set(t[0])
                } else
                    t[o] = t[o - 1]
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
        this.isComplete = !0,
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
        nn.delete(this)
    }
    cancel() {
        this.isComplete || (this.isScheduled = !1,
        nn.delete(this))
    }
    resume() {
        this.isComplete || this.scheduleResolve()
    }
}
const qp = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e)
  , Z0 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function q0(e) {
    const t = Z0.exec(e);
    if (!t)
        return [, ];
    const [,n,r,i] = t;
    return [`--${n ?? r}`, i]
}
function Jp(e, t, n=1) {
    const [r,i] = q0(e);
    if (!r)
        return;
    const o = window.getComputedStyle(t).getPropertyValue(r);
    if (o) {
        const s = o.trim();
        return qp(s) ? parseFloat(s) : s
    }
    return Xa(i) ? Jp(i, t, n + 1) : i
}
const bp = e => t => t.test(e)
  , J0 = {
    test: e => e === "auto",
    parse: e => e
}
  , em = [Zn, j, nt, xt, Uv, Bv, J0]
  , Hc = e => em.find(bp(e));
class tm extends hu {
    constructor(t, n, r, i, o) {
        super(t, n, r, i, o, !0)
    }
    readKeyframes() {
        const {unresolvedKeyframes: t, element: n, name: r} = this;
        if (!n || !n.current)
            return;
        super.readKeyframes();
        for (let a = 0; a < t.length; a++) {
            let u = t[a];
            if (typeof u == "string" && (u = u.trim(),
            Xa(u))) {
                const c = Jp(u, n.current);
                c !== void 0 && (t[a] = c),
                a === t.length - 1 && (this.finalKeyframe = u)
            }
        }
        if (this.resolveNoneKeyframes(),
        !Np.has(r) || t.length !== 2)
            return;
        const [i,o] = t
          , s = Hc(i)
          , l = Hc(o);
        if (s !== l)
            if ($c(s) && $c(l))
                for (let a = 0; a < t.length; a++) {
                    const u = t[a];
                    typeof u == "string" && (t[a] = parseFloat(u))
                }
            else
                this.needsMeasurement = !0
    }
    resolveNoneKeyframes() {
        const {unresolvedKeyframes: t, name: n} = this
          , r = [];
        for (let i = 0; i < t.length; i++)
            _0(t[i]) && r.push(i);
        r.length && H0(t, r, n)
    }
    measureInitialState() {
        const {element: t, unresolvedKeyframes: n, name: r} = this;
        if (!t || !t.current)
            return;
        r === "height" && (this.suspendedScrollY = window.pageYOffset),
        this.measuredOrigin = Hn[r](t.measureViewportBox(), window.getComputedStyle(t.current)),
        n[0] = this.measuredOrigin;
        const i = n[n.length - 1];
        i !== void 0 && t.getValue(r, i).jump(i, !1)
    }
    measureEndState() {
        var t;
        const {element: n, name: r, unresolvedKeyframes: i} = this;
        if (!n || !n.current)
            return;
        const o = n.getValue(r);
        o && o.jump(this.measuredOrigin, !1);
        const s = i.length - 1
          , l = i[s];
        i[s] = Hn[r](n.measureViewportBox(), window.getComputedStyle(n.current)),
        l !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = l),
        !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach( ([a,u]) => {
            n.getValue(a).set(u)
        }
        ),
        this.resolveNoneKeyframes()
    }
}
const Kc = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (Ft.test(e) || e === "0") && !e.startsWith("url("));
function b0(e) {
    const t = e[0];
    if (e.length === 1)
        return !0;
    for (let n = 0; n < e.length; n++)
        if (e[n] !== t)
            return !0
}
function e1(e, t, n, r) {
    const i = e[0];
    if (i === null)
        return !1;
    if (t === "display" || t === "visibility")
        return !0;
    const o = e[e.length - 1]
      , s = Kc(i, t)
      , l = Kc(o, t);
    return !s || !l ? !1 : b0(e) || (n === "spring" || nu(n)) && r
}
const t1 = e => e !== null;
function Ko(e, {repeat: t, repeatType: n="loop"}, r) {
    const i = e.filter(t1)
      , o = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
    return !o || r === void 0 ? i[o] : r
}
const n1 = 40;
class nm {
    constructor({autoplay: t=!0, delay: n=0, type: r="keyframes", repeat: i=0, repeatDelay: o=0, repeatType: s="loop", ...l}) {
        this.isStopped = !1,
        this.hasAttemptedResolve = !1,
        this.createdAt = rt.now(),
        this.options = {
            autoplay: t,
            delay: n,
            type: r,
            repeat: i,
            repeatDelay: o,
            repeatType: s,
            ...l
        },
        this.updateFinishedPromise()
    }
    calcStartTime() {
        return this.resolvedAt ? this.resolvedAt - this.createdAt > n1 ? this.resolvedAt : this.createdAt : this.createdAt
    }
    get resolved() {
        return !this._resolved && !this.hasAttemptedResolve && Y0(),
        this._resolved
    }
    onKeyframesResolved(t, n) {
        this.resolvedAt = rt.now(),
        this.hasAttemptedResolve = !0;
        const {name: r, type: i, velocity: o, delay: s, onComplete: l, onUpdate: a, isGenerator: u} = this.options;
        if (!u && !e1(t, r, i, o))
            if (s)
                this.options.duration = 0;
            else {
                a && a(Ko(t, this.options, n)),
                l && l(),
                this.resolveFinishedPromise();
                return
            }
        const c = this.initPlayback(t, n);
        c !== !1 && (this._resolved = {
            keyframes: t,
            finalKeyframe: n,
            ...c
        },
        this.onPostResolved())
    }
    onPostResolved() {}
    then(t, n) {
        return this.currentFinishedPromise.then(t, n)
    }
    flatten() {
        this.options.type = "keyframes",
        this.options.ease = "linear"
    }
    updateFinishedPromise() {
        this.currentFinishedPromise = new Promise(t => {
            this.resolveFinishedPromise = t
        }
        )
    }
}
const W = (e, t, n) => e + (t - e) * n;
function ks(e, t, n) {
    return n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}
function r1({hue: e, saturation: t, lightness: n, alpha: r}) {
    e /= 360,
    t /= 100,
    n /= 100;
    let i = 0
      , o = 0
      , s = 0;
    if (!t)
        i = o = s = n;
    else {
        const l = n < .5 ? n * (1 + t) : n + t - n * t
          , a = 2 * n - l;
        i = ks(a, l, e + 1 / 3),
        o = ks(a, l, e),
        s = ks(a, l, e - 1 / 3)
    }
    return {
        red: Math.round(i * 255),
        green: Math.round(o * 255),
        blue: Math.round(s * 255),
        alpha: r
    }
}
function xo(e, t) {
    return n => n > 0 ? t : e
}
const Cs = (e, t, n) => {
    const r = e * e
      , i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i)
}
  , i1 = [Nl, bt, En]
  , o1 = e => i1.find(t => t.test(e));
function Qc(e) {
    const t = o1(e);
    if (!t)
        return !1;
    let n = t.parse(e);
    return t === En && (n = r1(n)),
    n
}
const Xc = (e, t) => {
    const n = Qc(e)
      , r = Qc(t);
    if (!n || !r)
        return xo(e, t);
    const i = {
        ...n
    };
    return o => (i.red = Cs(n.red, r.red, o),
    i.green = Cs(n.green, r.green, o),
    i.blue = Cs(n.blue, r.blue, o),
    i.alpha = W(n.alpha, r.alpha, o),
    bt.transform(i))
}
  , s1 = (e, t) => n => t(e(n))
  , ii = (...e) => e.reduce(s1)
  , Vl = new Set(["none", "hidden"]);
function l1(e, t) {
    return Vl.has(e) ? n => n <= 0 ? e : t : n => n >= 1 ? t : e
}
function a1(e, t) {
    return n => W(e, t, n)
}
function pu(e) {
    return typeof e == "number" ? a1 : typeof e == "string" ? Xa(e) ? xo : he.test(e) ? Xc : f1 : Array.isArray(e) ? rm : typeof e == "object" ? he.test(e) ? Xc : u1 : xo
}
function rm(e, t) {
    const n = [...e]
      , r = n.length
      , i = e.map( (o, s) => pu(o)(o, t[s]));
    return o => {
        for (let s = 0; s < r; s++)
            n[s] = i[s](o);
        return n
    }
}
function u1(e, t) {
    const n = {
        ...e,
        ...t
    }
      , r = {};
    for (const i in n)
        e[i] !== void 0 && t[i] !== void 0 && (r[i] = pu(e[i])(e[i], t[i]));
    return i => {
        for (const o in r)
            n[o] = r[o](i);
        return n
    }
}
function c1(e, t) {
    var n;
    const r = []
      , i = {
        color: 0,
        var: 0,
        number: 0
    };
    for (let o = 0; o < t.values.length; o++) {
        const s = t.types[o]
          , l = e.indexes[s][i[s]]
          , a = (n = e.values[l]) !== null && n !== void 0 ? n : 0;
        r[o] = a,
        i[s]++
    }
    return r
}
const f1 = (e, t) => {
    const n = Ft.createTransformer(t)
      , r = Yr(e)
      , i = Yr(t);
    return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? Vl.has(e) && !i.values.length || Vl.has(t) && !r.values.length ? l1(e, t) : ii(rm(c1(r, i), i.values), n) : xo(e, t)
}
;
function im(e, t, n) {
    return typeof e == "number" && typeof t == "number" && typeof n == "number" ? W(e, t, n) : pu(e)(e, t)
}
const d1 = 5;
function om(e, t, n) {
    const r = Math.max(t - d1, 0);
    return Lp(n - e(r), t - r)
}
const Q = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: .3,
    visualDuration: .3,
    restSpeed: {
        granular: .01,
        default: 2
    },
    restDelta: {
        granular: .005,
        default: .5
    },
    minDuration: .01,
    maxDuration: 10,
    minDamping: .05,
    maxDamping: 1
}
  , Ps = .001;
function h1({duration: e=Q.duration, bounce: t=Q.bounce, velocity: n=Q.velocity, mass: r=Q.mass}) {
    let i, o, s = 1 - t;
    s = mt(Q.minDamping, Q.maxDamping, s),
    e = mt(Q.minDuration, Q.maxDuration, ct(e)),
    s < 1 ? (i = u => {
        const c = u * s
          , f = c * e
          , d = c - n
          , g = Ol(u, s)
          , v = Math.exp(-f);
        return Ps - d / g * v
    }
    ,
    o = u => {
        const f = u * s * e
          , d = f * n + n
          , g = Math.pow(s, 2) * Math.pow(u, 2) * e
          , v = Math.exp(-f)
          , x = Ol(Math.pow(u, 2), s);
        return (-i(u) + Ps > 0 ? -1 : 1) * ((d - g) * v) / x
    }
    ) : (i = u => {
        const c = Math.exp(-u * e)
          , f = (u - n) * e + 1;
        return -Ps + c * f
    }
    ,
    o = u => {
        const c = Math.exp(-u * e)
          , f = (n - u) * (e * e);
        return c * f
    }
    );
    const l = 5 / e
      , a = m1(i, o, l);
    if (e = ut(e),
    isNaN(a))
        return {
            stiffness: Q.stiffness,
            damping: Q.damping,
            duration: e
        };
    {
        const u = Math.pow(a, 2) * r;
        return {
            stiffness: u,
            damping: s * 2 * Math.sqrt(r * u),
            duration: e
        }
    }
}
const p1 = 12;
function m1(e, t, n) {
    let r = n;
    for (let i = 1; i < p1; i++)
        r = r - e(r) / t(r);
    return r
}
function Ol(e, t) {
    return e * Math.sqrt(1 - t * t)
}
const g1 = ["duration", "bounce"]
  , y1 = ["stiffness", "damping", "mass"];
function Yc(e, t) {
    return t.some(n => e[n] !== void 0)
}
function v1(e) {
    let t = {
        velocity: Q.velocity,
        stiffness: Q.stiffness,
        damping: Q.damping,
        mass: Q.mass,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!Yc(e, y1) && Yc(e, g1))
        if (e.visualDuration) {
            const n = e.visualDuration
              , r = 2 * Math.PI / (n * 1.2)
              , i = r * r
              , o = 2 * mt(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
            t = {
                ...t,
                mass: Q.mass,
                stiffness: i,
                damping: o
            }
        } else {
            const n = h1(e);
            t = {
                ...t,
                ...n,
                mass: Q.mass
            },
            t.isResolvedFromDuration = !0
        }
    return t
}
function sm(e=Q.visualDuration, t=Q.bounce) {
    const n = typeof e != "object" ? {
        visualDuration: e,
        keyframes: [0, 1],
        bounce: t
    } : e;
    let {restSpeed: r, restDelta: i} = n;
    const o = n.keyframes[0]
      , s = n.keyframes[n.keyframes.length - 1]
      , l = {
        done: !1,
        value: o
    }
      , {stiffness: a, damping: u, mass: c, duration: f, velocity: d, isResolvedFromDuration: g} = v1({
        ...n,
        velocity: -ct(n.velocity || 0)
    })
      , v = d || 0
      , x = u / (2 * Math.sqrt(a * c))
      , T = s - o
      , p = ct(Math.sqrt(a / c))
      , h = Math.abs(T) < 5;
    r || (r = h ? Q.restSpeed.granular : Q.restSpeed.default),
    i || (i = h ? Q.restDelta.granular : Q.restDelta.default);
    let m;
    if (x < 1) {
        const S = Ol(p, x);
        m = P => {
            const E = Math.exp(-x * p * P);
            return s - E * ((v + x * p * T) / S * Math.sin(S * P) + T * Math.cos(S * P))
        }
    } else if (x === 1)
        m = S => s - Math.exp(-p * S) * (T + (v + p * T) * S);
    else {
        const S = p * Math.sqrt(x * x - 1);
        m = P => {
            const E = Math.exp(-x * p * P)
              , k = Math.min(S * P, 300);
            return s - E * ((v + x * p * T) * Math.sinh(k) + S * T * Math.cosh(k)) / S
        }
    }
    const w = {
        calculatedDuration: g && f || null,
        next: S => {
            const P = m(S);
            if (g)
                l.done = S >= f;
            else {
                let E = 0;
                x < 1 && (E = S === 0 ? ut(v) : om(m, S, P));
                const k = Math.abs(E) <= r
                  , D = Math.abs(s - P) <= i;
                l.done = k && D
            }
            return l.value = l.done ? s : P,
            l
        }
        ,
        toString: () => {
            const S = Math.min(Cp(w), _l)
              , P = Pp(E => w.next(S * E).value, S, 30);
            return S + "ms " + P
        }
    };
    return w
}
function Zc({keyframes: e, velocity: t=0, power: n=.8, timeConstant: r=325, bounceDamping: i=10, bounceStiffness: o=500, modifyTarget: s, min: l, max: a, restDelta: u=.5, restSpeed: c}) {
    const f = e[0]
      , d = {
        done: !1,
        value: f
    }
      , g = k => l !== void 0 && k < l || a !== void 0 && k > a
      , v = k => l === void 0 ? a : a === void 0 || Math.abs(l - k) < Math.abs(a - k) ? l : a;
    let x = n * t;
    const T = f + x
      , p = s === void 0 ? T : s(T);
    p !== T && (x = p - f);
    const h = k => -x * Math.exp(-k / r)
      , m = k => p + h(k)
      , w = k => {
        const D = h(k)
          , N = m(k);
        d.done = Math.abs(D) <= u,
        d.value = d.done ? p : N
    }
    ;
    let S, P;
    const E = k => {
        g(d.value) && (S = k,
        P = sm({
            keyframes: [d.value, v(d.value)],
            velocity: om(m, k, d.value),
            damping: i,
            stiffness: o,
            restDelta: u,
            restSpeed: c
        }))
    }
    ;
    return E(0),
    {
        calculatedDuration: null,
        next: k => {
            let D = !1;
            return !P && S === void 0 && (D = !0,
            w(k),
            E(k)),
            S !== void 0 && k >= S ? P.next(k - S) : (!D && w(k),
            d)
        }
    }
}
const x1 = ri(.42, 0, 1, 1)
  , w1 = ri(0, 0, .58, 1)
  , lm = ri(.42, 0, .58, 1)
  , S1 = e => Array.isArray(e) && typeof e[0] != "number"
  , T1 = {
    linear: Ae,
    easeIn: x1,
    easeInOut: lm,
    easeOut: w1,
    circIn: uu,
    circInOut: Up,
    circOut: Bp,
    backIn: au,
    backInOut: Ip,
    backOut: Fp,
    anticipate: zp
}
  , qc = e => {
    if (ru(e)) {
        ip(e.length === 4);
        const [t,n,r,i] = e;
        return ri(t, n, r, i)
    } else if (typeof e == "string")
        return T1[e];
    return e
}
;
function k1(e, t, n) {
    const r = []
      , i = n || im
      , o = e.length - 1;
    for (let s = 0; s < o; s++) {
        let l = i(e[s], e[s + 1]);
        if (t) {
            const a = Array.isArray(t) ? t[s] || Ae : t;
            l = ii(a, l)
        }
        r.push(l)
    }
    return r
}
function C1(e, t, {clamp: n=!0, ease: r, mixer: i}={}) {
    const o = e.length;
    if (ip(o === t.length),
    o === 1)
        return () => t[0];
    if (o === 2 && t[0] === t[1])
        return () => t[1];
    const s = e[0] === e[1];
    e[0] > e[o - 1] && (e = [...e].reverse(),
    t = [...t].reverse());
    const l = k1(t, r, i)
      , a = l.length
      , u = c => {
        if (s && c < e[0])
            return t[0];
        let f = 0;
        if (a > 1)
            for (; f < e.length - 2 && !(c < e[f + 1]); f++)
                ;
        const d = Gn(e[f], e[f + 1], c);
        return l[f](d)
    }
    ;
    return n ? c => u(mt(e[0], e[o - 1], c)) : u
}
function P1(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
        const i = Gn(0, t, r);
        e.push(W(n, 1, i))
    }
}
function E1(e) {
    const t = [0];
    return P1(t, e.length - 1),
    t
}
function M1(e, t) {
    return e.map(n => n * t)
}
function _1(e, t) {
    return e.map( () => t || lm).splice(0, e.length - 1)
}
function wo({duration: e=300, keyframes: t, times: n, ease: r="easeInOut"}) {
    const i = S1(r) ? r.map(qc) : qc(r)
      , o = {
        done: !1,
        value: t[0]
    }
      , s = M1(n && n.length === t.length ? n : E1(t), e)
      , l = C1(s, t, {
        ease: Array.isArray(i) ? i : _1(t, i)
    });
    return {
        calculatedDuration: e,
        next: a => (o.value = l(a),
        o.done = a >= e,
        o)
    }
}
const A1 = e => {
    const t = ({timestamp: n}) => e(n);
    return {
        start: () => U.update(t, !0),
        stop: () => Ot(t),
        now: () => le.isProcessing ? le.timestamp : rt.now()
    }
}
  , j1 = {
    decay: Zc,
    inertia: Zc,
    tween: wo,
    keyframes: wo,
    spring: sm
}
  , N1 = e => e / 100;
class mu extends nm {
    constructor(t) {
        super(t),
        this.holdTime = null,
        this.cancelTime = null,
        this.currentTime = 0,
        this.playbackSpeed = 1,
        this.pendingPlayState = "running",
        this.startTime = null,
        this.state = "idle",
        this.stop = () => {
            if (this.resolver.cancel(),
            this.isStopped = !0,
            this.state === "idle")
                return;
            this.teardown();
            const {onStop: a} = this.options;
            a && a()
        }
        ;
        const {name: n, motionValue: r, element: i, keyframes: o} = this.options
          , s = (i == null ? void 0 : i.KeyframeResolver) || hu
          , l = (a, u) => this.onKeyframesResolved(a, u);
        this.resolver = new s(o,l,n,r,i),
        this.resolver.scheduleResolve()
    }
    flatten() {
        super.flatten(),
        this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
    }
    initPlayback(t) {
        const {type: n="keyframes", repeat: r=0, repeatDelay: i=0, repeatType: o, velocity: s=0} = this.options
          , l = nu(n) ? n : j1[n] || wo;
        let a, u;
        l !== wo && typeof t[0] != "number" && (a = ii(N1, im(t[0], t[1])),
        t = [0, 100]);
        const c = l({
            ...this.options,
            keyframes: t
        });
        o === "mirror" && (u = l({
            ...this.options,
            keyframes: [...t].reverse(),
            velocity: -s
        })),
        c.calculatedDuration === null && (c.calculatedDuration = Cp(c));
        const {calculatedDuration: f} = c
          , d = f + i
          , g = d * (r + 1) - i;
        return {
            generator: c,
            mirroredGenerator: u,
            mapPercentToKeyframes: a,
            calculatedDuration: f,
            resolvedDuration: d,
            totalDuration: g
        }
    }
    onPostResolved() {
        const {autoplay: t=!0} = this.options;
        this.play(),
        this.pendingPlayState === "paused" || !t ? this.pause() : this.state = this.pendingPlayState
    }
    tick(t, n=!1) {
        const {resolved: r} = this;
        if (!r) {
            const {keyframes: k} = this.options;
            return {
                done: !0,
                value: k[k.length - 1]
            }
        }
        const {finalKeyframe: i, generator: o, mirroredGenerator: s, mapPercentToKeyframes: l, keyframes: a, calculatedDuration: u, totalDuration: c, resolvedDuration: f} = r;
        if (this.startTime === null)
            return o.next(0);
        const {delay: d, repeat: g, repeatType: v, repeatDelay: x, onUpdate: T} = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - c / this.speed, this.startTime)),
        n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
        const p = this.currentTime - d * (this.speed >= 0 ? 1 : -1)
          , h = this.speed >= 0 ? p < 0 : p > c;
        this.currentTime = Math.max(p, 0),
        this.state === "finished" && this.holdTime === null && (this.currentTime = c);
        let m = this.currentTime
          , w = o;
        if (g) {
            const k = Math.min(this.currentTime, c) / f;
            let D = Math.floor(k)
              , N = k % 1;
            !N && k >= 1 && (N = 1),
            N === 1 && D--,
            D = Math.min(D, g + 1),
            !!(D % 2) && (v === "reverse" ? (N = 1 - N,
            x && (N -= x / f)) : v === "mirror" && (w = s)),
            m = mt(0, 1, N) * f
        }
        const S = h ? {
            done: !1,
            value: a[0]
        } : w.next(m);
        l && (S.value = l(S.value));
        let {done: P} = S;
        !h && u !== null && (P = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
        const E = this.holdTime === null && (this.state === "finished" || this.state === "running" && P);
        return E && i !== void 0 && (S.value = Ko(a, this.options, i)),
        T && T(S.value),
        E && this.finish(),
        S
    }
    get duration() {
        const {resolved: t} = this;
        return t ? ct(t.calculatedDuration) : 0
    }
    get time() {
        return ct(this.currentTime)
    }
    set time(t) {
        t = ut(t),
        this.currentTime = t,
        this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(t) {
        const n = this.playbackSpeed !== t;
        this.playbackSpeed = t,
        n && (this.time = ct(this.currentTime))
    }
    play() {
        if (this.resolver.isScheduled || this.resolver.resume(),
        !this._resolved) {
            this.pendingPlayState = "running";
            return
        }
        if (this.isStopped)
            return;
        const {driver: t=A1, onPlay: n, startTime: r} = this.options;
        this.driver || (this.driver = t(o => this.tick(o))),
        n && n();
        const i = this.driver.now();
        this.holdTime !== null ? this.startTime = i - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = i) : this.startTime = r ?? this.calcStartTime(),
        this.state === "finished" && this.updateFinishedPromise(),
        this.cancelTime = this.startTime,
        this.holdTime = null,
        this.state = "running",
        this.driver.start()
    }
    pause() {
        var t;
        if (!this._resolved) {
            this.pendingPlayState = "paused";
            return
        }
        this.state = "paused",
        this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0
    }
    complete() {
        this.state !== "running" && this.play(),
        this.pendingPlayState = this.state = "finished",
        this.holdTime = null
    }
    finish() {
        this.teardown(),
        this.state = "finished";
        const {onComplete: t} = this.options;
        t && t()
    }
    cancel() {
        this.cancelTime !== null && this.tick(this.cancelTime),
        this.teardown(),
        this.updateFinishedPromise()
    }
    teardown() {
        this.state = "idle",
        this.stopDriver(),
        this.resolveFinishedPromise(),
        this.updateFinishedPromise(),
        this.startTime = this.cancelTime = null,
        this.resolver.cancel()
    }
    stopDriver() {
        this.driver && (this.driver.stop(),
        this.driver = void 0)
    }
    sample(t) {
        return this.startTime = 0,
        this.tick(t, !0)
    }
}
const L1 = new Set(["opacity", "clipPath", "filter", "transform"]);
function R1(e, t, n, {delay: r=0, duration: i=300, repeat: o=0, repeatType: s="loop", ease: l="easeInOut", times: a}={}) {
    const u = {
        [t]: n
    };
    a && (u.offset = a);
    const c = Mp(l, i);
    return Array.isArray(c) && (u.easing = c),
    e.animate(u, {
        delay: r,
        duration: i,
        easing: Array.isArray(c) ? "linear" : c,
        fill: "both",
        iterations: o + 1,
        direction: s === "reverse" ? "alternate" : "normal"
    })
}
const D1 = Ua( () => Object.hasOwnProperty.call(Element.prototype, "animate"))
  , So = 10
  , V1 = 2e4;
function O1(e) {
    return nu(e.type) || e.type === "spring" || !Ep(e.ease)
}
function F1(e, t) {
    const n = new mu({
        ...t,
        keyframes: e,
        repeat: 0,
        delay: 0,
        isGenerator: !0
    });
    let r = {
        done: !1,
        value: e[0]
    };
    const i = [];
    let o = 0;
    for (; !r.done && o < V1; )
        r = n.sample(o),
        i.push(r.value),
        o += So;
    return {
        times: void 0,
        keyframes: i,
        duration: o - So,
        ease: "linear"
    }
}
const am = {
    anticipate: zp,
    backInOut: Ip,
    circInOut: Up
};
function I1(e) {
    return e in am
}
class Jc extends nm {
    constructor(t) {
        super(t);
        const {name: n, motionValue: r, element: i, keyframes: o} = this.options;
        this.resolver = new tm(o, (s, l) => this.onKeyframesResolved(s, l),n,r,i),
        this.resolver.scheduleResolve()
    }
    initPlayback(t, n) {
        let {duration: r=300, times: i, ease: o, type: s, motionValue: l, name: a, startTime: u} = this.options;
        if (!l.owner || !l.owner.current)
            return !1;
        if (typeof o == "string" && vo() && I1(o) && (o = am[o]),
        O1(this.options)) {
            const {onComplete: f, onUpdate: d, motionValue: g, element: v, ...x} = this.options
              , T = F1(t, x);
            t = T.keyframes,
            t.length === 1 && (t[1] = t[0]),
            r = T.duration,
            i = T.times,
            o = T.ease,
            s = "keyframes"
        }
        const c = R1(l.owner.current, a, t, {
            ...this.options,
            duration: r,
            times: i,
            ease: o
        });
        return c.startTime = u ?? this.calcStartTime(),
        this.pendingTimeline ? (Oc(c, this.pendingTimeline),
        this.pendingTimeline = void 0) : c.onfinish = () => {
            const {onComplete: f} = this.options;
            l.set(Ko(t, this.options, n)),
            f && f(),
            this.cancel(),
            this.resolveFinishedPromise()
        }
        ,
        {
            animation: c,
            duration: r,
            times: i,
            type: s,
            ease: o,
            keyframes: t
        }
    }
    get duration() {
        const {resolved: t} = this;
        if (!t)
            return 0;
        const {duration: n} = t;
        return ct(n)
    }
    get time() {
        const {resolved: t} = this;
        if (!t)
            return 0;
        const {animation: n} = t;
        return ct(n.currentTime || 0)
    }
    set time(t) {
        const {resolved: n} = this;
        if (!n)
            return;
        const {animation: r} = n;
        r.currentTime = ut(t)
    }
    get speed() {
        const {resolved: t} = this;
        if (!t)
            return 1;
        const {animation: n} = t;
        return n.playbackRate
    }
    set speed(t) {
        const {resolved: n} = this;
        if (!n)
            return;
        const {animation: r} = n;
        r.playbackRate = t
    }
    get state() {
        const {resolved: t} = this;
        if (!t)
            return "idle";
        const {animation: n} = t;
        return n.playState
    }
    get startTime() {
        const {resolved: t} = this;
        if (!t)
            return null;
        const {animation: n} = t;
        return n.startTime
    }
    attachTimeline(t) {
        if (!this._resolved)
            this.pendingTimeline = t;
        else {
            const {resolved: n} = this;
            if (!n)
                return Ae;
            const {animation: r} = n;
            Oc(r, t)
        }
        return Ae
    }
    play() {
        if (this.isStopped)
            return;
        const {resolved: t} = this;
        if (!t)
            return;
        const {animation: n} = t;
        n.playState === "finished" && this.updateFinishedPromise(),
        n.play()
    }
    pause() {
        const {resolved: t} = this;
        if (!t)
            return;
        const {animation: n} = t;
        n.pause()
    }
    stop() {
        if (this.resolver.cancel(),
        this.isStopped = !0,
        this.state === "idle")
            return;
        this.resolveFinishedPromise(),
        this.updateFinishedPromise();
        const {resolved: t} = this;
        if (!t)
            return;
        const {animation: n, keyframes: r, duration: i, type: o, ease: s, times: l} = t;
        if (n.playState === "idle" || n.playState === "finished")
            return;
        if (this.time) {
            const {motionValue: u, onUpdate: c, onComplete: f, element: d, ...g} = this.options
              , v = new mu({
                ...g,
                keyframes: r,
                duration: i,
                type: o,
                ease: s,
                times: l,
                isGenerator: !0
            })
              , x = ut(this.time);
            u.setWithVelocity(v.sample(x - So).value, v.sample(x).value, So)
        }
        const {onStop: a} = this.options;
        a && a(),
        this.cancel()
    }
    complete() {
        const {resolved: t} = this;
        t && t.animation.finish()
    }
    cancel() {
        const {resolved: t} = this;
        t && t.animation.cancel()
    }
    static supports(t) {
        const {motionValue: n, name: r, repeatDelay: i, repeatType: o, damping: s, type: l} = t;
        if (!n || !n.owner || !(n.owner.current instanceof HTMLElement))
            return !1;
        const {onUpdate: a, transformTemplate: u} = n.owner.getProps();
        return D1() && r && L1.has(r) && !a && !u && !i && o !== "mirror" && s !== 0 && l !== "inertia"
    }
}
const z1 = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , B1 = e => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , U1 = {
    type: "keyframes",
    duration: .8
}
  , $1 = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , G1 = (e, {keyframes: t}) => t.length > 2 ? U1 : fn.has(e) ? e.startsWith("scale") ? B1(t[1]) : z1 : $1;
function W1({when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: o, repeatType: s, repeatDelay: l, from: a, elapsed: u, ...c}) {
    return !!Object.keys(c).length
}
const gu = (e, t, n, r={}, i, o) => s => {
    const l = tu(r, e) || {}
      , a = l.delay || r.delay || 0;
    let {elapsed: u=0} = r;
    u = u - ut(a);
    let c = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...l,
        delay: -u,
        onUpdate: d => {
            t.set(d),
            l.onUpdate && l.onUpdate(d)
        }
        ,
        onComplete: () => {
            s(),
            l.onComplete && l.onComplete()
        }
        ,
        name: e,
        motionValue: t,
        element: o ? void 0 : i
    };
    W1(l) || (c = {
        ...c,
        ...G1(e, c)
    }),
    c.duration && (c.duration = ut(c.duration)),
    c.repeatDelay && (c.repeatDelay = ut(c.repeatDelay)),
    c.from !== void 0 && (c.keyframes[0] = c.from);
    let f = !1;
    if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (c.duration = 0,
    c.delay === 0 && (f = !0)),
    f && !o && t.get() !== void 0) {
        const d = Ko(c.keyframes, l);
        if (d !== void 0)
            return U.update( () => {
                c.onUpdate(d),
                c.onComplete()
            }
            ),
            new u0([])
    }
    return !o && Jc.supports(c) ? new Jc(c) : new mu(c)
}
;
function H1({protectedKeys: e, needsAnimating: t}, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1,
    r
}
function um(e, t, {delay: n=0, transitionOverride: r, type: i}={}) {
    var o;
    let {transition: s=e.getDefaultTransition(), transitionEnd: l, ...a} = t;
    r && (s = r);
    const u = []
      , c = i && e.animationState && e.animationState.getState()[i];
    for (const f in a) {
        const d = e.getValue(f, (o = e.latestValues[f]) !== null && o !== void 0 ? o : null)
          , g = a[f];
        if (g === void 0 || c && H1(c, f))
            continue;
        const v = {
            delay: n,
            ...tu(s || {}, f)
        };
        let x = !1;
        if (window.MotionHandoffAnimation) {
            const p = Rp(e);
            if (p) {
                const h = window.MotionHandoffAnimation(p, f, U);
                h !== null && (v.startTime = h,
                x = !0)
            }
        }
        jl(e, f),
        d.start(gu(f, d, g, e.shouldReduceMotion && Np.has(f) ? {
            type: !1
        } : v, e, x));
        const T = d.animation;
        T && u.push(T)
    }
    return l && Promise.all(u).then( () => {
        U.update( () => {
            l && k0(e, l)
        }
        )
    }
    ),
    u
}
function Fl(e, t, n={}) {
    var r;
    const i = Ho(e, t, n.type === "exit" ? (r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom : void 0);
    let {transition: o=e.getDefaultTransition() || {}} = i || {};
    n.transitionOverride && (o = n.transitionOverride);
    const s = i ? () => Promise.all(um(e, i, n)) : () => Promise.resolve()
      , l = e.variantChildren && e.variantChildren.size ? (u=0) => {
        const {delayChildren: c=0, staggerChildren: f, staggerDirection: d} = o;
        return K1(e, t, c + u, f, d, n)
    }
    : () => Promise.resolve()
      , {when: a} = o;
    if (a) {
        const [u,c] = a === "beforeChildren" ? [s, l] : [l, s];
        return u().then( () => c())
    } else
        return Promise.all([s(), l(n.delay)])
}
function K1(e, t, n=0, r=0, i=1, o) {
    const s = []
      , l = (e.variantChildren.size - 1) * r
      , a = i === 1 ? (u=0) => u * r : (u=0) => l - u * r;
    return Array.from(e.variantChildren).sort(Q1).forEach( (u, c) => {
        u.notify("AnimationStart", t),
        s.push(Fl(u, t, {
            ...o,
            delay: n + a(c)
        }).then( () => u.notify("AnimationComplete", t)))
    }
    ),
    Promise.all(s)
}
function Q1(e, t) {
    return e.sortNodePosition(t)
}
function X1(e, t, n={}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
        const i = t.map(o => Fl(e, o, n));
        r = Promise.all(i)
    } else if (typeof t == "string")
        r = Fl(e, t, n);
    else {
        const i = typeof t == "function" ? Ho(e, t, n.custom) : t;
        r = Promise.all(um(e, i, n))
    }
    return r.then( () => {
        e.notify("AnimationComplete", t)
    }
    )
}
const Y1 = Ga.length;
function cm(e) {
    if (!e)
        return;
    if (!e.isControllingVariants) {
        const n = e.parent ? cm(e.parent) || {} : {};
        return e.props.initial !== void 0 && (n.initial = e.props.initial),
        n
    }
    const t = {};
    for (let n = 0; n < Y1; n++) {
        const r = Ga[n]
          , i = e.props[r];
        (Kr(i) || i === !1) && (t[r] = i)
    }
    return t
}
const Z1 = [...$a].reverse()
  , q1 = $a.length;
function J1(e) {
    return t => Promise.all(t.map( ({animation: n, options: r}) => X1(e, n, r)))
}
function b1(e) {
    let t = J1(e)
      , n = bc()
      , r = !0;
    const i = a => (u, c) => {
        var f;
        const d = Ho(e, c, a === "exit" ? (f = e.presenceContext) === null || f === void 0 ? void 0 : f.custom : void 0);
        if (d) {
            const {transition: g, transitionEnd: v, ...x} = d;
            u = {
                ...u,
                ...x,
                ...v
            }
        }
        return u
    }
    ;
    function o(a) {
        t = a(e)
    }
    function s(a) {
        const {props: u} = e
          , c = cm(e.parent) || {}
          , f = []
          , d = new Set;
        let g = {}
          , v = 1 / 0;
        for (let T = 0; T < q1; T++) {
            const p = Z1[T]
              , h = n[p]
              , m = u[p] !== void 0 ? u[p] : c[p]
              , w = Kr(m)
              , S = p === a ? h.isActive : null;
            S === !1 && (v = T);
            let P = m === c[p] && m !== u[p] && w;
            if (P && r && e.manuallyAnimateOnMount && (P = !1),
            h.protectedKeys = {
                ...g
            },
            !h.isActive && S === null || !m && !h.prevProp || Go(m) || typeof m == "boolean")
                continue;
            const E = ex(h.prevProp, m);
            let k = E || p === a && h.isActive && !P && w || T > v && w
              , D = !1;
            const N = Array.isArray(m) ? m : [m];
            let ne = N.reduce(i(p), {});
            S === !1 && (ne = {});
            const {prevResolvedValues: yt={}} = h
              , $t = {
                ...yt,
                ...ne
            }
              , Jn = b => {
                k = !0,
                d.has(b) && (D = !0,
                d.delete(b)),
                h.needsAnimating[b] = !0;
                const _ = e.getValue(b);
                _ && (_.liveStyle = !1)
            }
            ;
            for (const b in $t) {
                const _ = ne[b]
                  , L = yt[b];
                if (g.hasOwnProperty(b))
                    continue;
                let R = !1;
                Ml(_) && Ml(L) ? R = !kp(_, L) : R = _ !== L,
                R ? _ != null ? Jn(b) : d.add(b) : _ !== void 0 && d.has(b) ? Jn(b) : h.protectedKeys[b] = !0
            }
            h.prevProp = m,
            h.prevResolvedValues = ne,
            h.isActive && (g = {
                ...g,
                ...ne
            }),
            r && e.blockInitialAnimation && (k = !1),
            k && (!(P && E) || D) && f.push(...N.map(b => ({
                animation: b,
                options: {
                    type: p
                }
            })))
        }
        if (d.size) {
            const T = {};
            d.forEach(p => {
                const h = e.getBaseTarget(p)
                  , m = e.getValue(p);
                m && (m.liveStyle = !0),
                T[p] = h ?? null
            }
            ),
            f.push({
                animation: T
            })
        }
        let x = !!f.length;
        return r && (u.initial === !1 || u.initial === u.animate) && !e.manuallyAnimateOnMount && (x = !1),
        r = !1,
        x ? t(f) : Promise.resolve()
    }
    function l(a, u) {
        var c;
        if (n[a].isActive === u)
            return Promise.resolve();
        (c = e.variantChildren) === null || c === void 0 || c.forEach(d => {
            var g;
            return (g = d.animationState) === null || g === void 0 ? void 0 : g.setActive(a, u)
        }
        ),
        n[a].isActive = u;
        const f = s(a);
        for (const d in n)
            n[d].protectedKeys = {};
        return f
    }
    return {
        animateChanges: s,
        setActive: l,
        setAnimateFunction: o,
        getState: () => n,
        reset: () => {
            n = bc(),
            r = !0
        }
    }
}
function ex(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !kp(t, e) : !1
}
function Ht(e=!1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function bc() {
    return {
        animate: Ht(!0),
        whileInView: Ht(),
        whileHover: Ht(),
        whileTap: Ht(),
        whileDrag: Ht(),
        whileFocus: Ht(),
        exit: Ht()
    }
}
class Ut {
    constructor(t) {
        this.isMounted = !1,
        this.node = t
    }
    update() {}
}
class tx extends Ut {
    constructor(t) {
        super(t),
        t.animationState || (t.animationState = b1(t))
    }
    updateAnimationControlsSubscription() {
        const {animate: t} = this.node.getProps();
        Go(t) && (this.unmountControls = t.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {animate: t} = this.node.getProps()
          , {animate: n} = this.node.prevProps || {};
        t !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var t;
        this.node.animationState.reset(),
        (t = this.unmountControls) === null || t === void 0 || t.call(this)
    }
}
let nx = 0;
class rx extends Ut {
    constructor() {
        super(...arguments),
        this.id = nx++
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const {isPresent: t, onExitComplete: n} = this.node.presenceContext
          , {isPresent: r} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || t === r)
            return;
        const i = this.node.animationState.setActive("exit", !t);
        n && !t && i.then( () => n(this.id))
    }
    mount() {
        const {register: t} = this.node.presenceContext || {};
        t && (this.unmount = t(this.id))
    }
    unmount() {}
}
const ix = {
    animation: {
        Feature: tx
    },
    exit: {
        Feature: rx
    }
};
function Zr(e, t, n, r={
    passive: !0
}) {
    return e.addEventListener(t, n, r),
    () => e.removeEventListener(t, n)
}
function oi(e) {
    return {
        point: {
            x: e.pageX,
            y: e.pageY
        }
    }
}
const ox = e => t => iu(t) && e(t, oi(t));
function Er(e, t, n, r) {
    return Zr(e, t, ox(n), r)
}
const ef = (e, t) => Math.abs(e - t);
function sx(e, t) {
    const n = ef(e.x, t.x)
      , r = ef(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2)
}
class fm {
    constructor(t, n, {transformPagePoint: r, contextWindow: i, dragSnapToOrigin: o=!1}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.handlers = {},
        this.contextWindow = window,
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const f = Ms(this.lastMoveEventInfo, this.history)
              , d = this.startEvent !== null
              , g = sx(f.offset, {
                x: 0,
                y: 0
            }) >= 3;
            if (!d && !g)
                return;
            const {point: v} = f
              , {timestamp: x} = le;
            this.history.push({
                ...v,
                timestamp: x
            });
            const {onStart: T, onMove: p} = this.handlers;
            d || (T && T(this.lastMoveEvent, f),
            this.startEvent = this.lastMoveEvent),
            p && p(this.lastMoveEvent, f)
        }
        ,
        this.handlePointerMove = (f, d) => {
            this.lastMoveEvent = f,
            this.lastMoveEventInfo = Es(d, this.transformPagePoint),
            U.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (f, d) => {
            this.end();
            const {onEnd: g, onSessionEnd: v, resumeAnimation: x} = this.handlers;
            if (this.dragSnapToOrigin && x && x(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const T = Ms(f.type === "pointercancel" ? this.lastMoveEventInfo : Es(d, this.transformPagePoint), this.history);
            this.startEvent && g && g(f, T),
            v && v(f, T)
        }
        ,
        !iu(t))
            return;
        this.dragSnapToOrigin = o,
        this.handlers = n,
        this.transformPagePoint = r,
        this.contextWindow = i || window;
        const s = oi(t)
          , l = Es(s, this.transformPagePoint)
          , {point: a} = l
          , {timestamp: u} = le;
        this.history = [{
            ...a,
            timestamp: u
        }];
        const {onSessionStart: c} = n;
        c && c(t, Ms(l, this.history)),
        this.removeListeners = ii(Er(this.contextWindow, "pointermove", this.handlePointerMove), Er(this.contextWindow, "pointerup", this.handlePointerUp), Er(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(t) {
        this.handlers = t
    }
    end() {
        this.removeListeners && this.removeListeners(),
        Ot(this.updatePoint)
    }
}
function Es(e, t) {
    return t ? {
        point: t(e.point)
    } : e
}
function tf(e, t) {
    return {
        x: e.x - t.x,
        y: e.y - t.y
    }
}
function Ms({point: e}, t) {
    return {
        point: e,
        delta: tf(e, dm(t)),
        offset: tf(e, lx(t)),
        velocity: ax(t, .1)
    }
}
function lx(e) {
    return e[0]
}
function dm(e) {
    return e[e.length - 1]
}
function ax(e, t) {
    if (e.length < 2)
        return {
            x: 0,
            y: 0
        };
    let n = e.length - 1
      , r = null;
    const i = dm(e);
    for (; n >= 0 && (r = e[n],
    !(i.timestamp - r.timestamp > ut(t))); )
        n--;
    if (!r)
        return {
            x: 0,
            y: 0
        };
    const o = ct(i.timestamp - r.timestamp);
    if (o === 0)
        return {
            x: 0,
            y: 0
        };
    const s = {
        x: (i.x - r.x) / o,
        y: (i.y - r.y) / o
    };
    return s.x === 1 / 0 && (s.x = 0),
    s.y === 1 / 0 && (s.y = 0),
    s
}
const hm = 1e-4
  , ux = 1 - hm
  , cx = 1 + hm
  , pm = .01
  , fx = 0 - pm
  , dx = 0 + pm;
function Ne(e) {
    return e.max - e.min
}
function hx(e, t, n) {
    return Math.abs(e - t) <= n
}
function nf(e, t, n, r=.5) {
    e.origin = r,
    e.originPoint = W(t.min, t.max, e.origin),
    e.scale = Ne(n) / Ne(t),
    e.translate = W(n.min, n.max, e.origin) - e.originPoint,
    (e.scale >= ux && e.scale <= cx || isNaN(e.scale)) && (e.scale = 1),
    (e.translate >= fx && e.translate <= dx || isNaN(e.translate)) && (e.translate = 0)
}
function Mr(e, t, n, r) {
    nf(e.x, t.x, n.x, r ? r.originX : void 0),
    nf(e.y, t.y, n.y, r ? r.originY : void 0)
}
function rf(e, t, n) {
    e.min = n.min + t.min,
    e.max = e.min + Ne(t)
}
function px(e, t, n) {
    rf(e.x, t.x, n.x),
    rf(e.y, t.y, n.y)
}
function of(e, t, n) {
    e.min = t.min - n.min,
    e.max = e.min + Ne(t)
}
function _r(e, t, n) {
    of(e.x, t.x, n.x),
    of(e.y, t.y, n.y)
}
function mx(e, {min: t, max: n}, r) {
    return t !== void 0 && e < t ? e = r ? W(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? W(n, e, r.max) : Math.min(e, n)),
    e
}
function sf(e, t, n) {
    return {
        min: t !== void 0 ? e.min + t : void 0,
        max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
    }
}
function gx(e, {top: t, left: n, bottom: r, right: i}) {
    return {
        x: sf(e.x, n, i),
        y: sf(e.y, t, r)
    }
}
function lf(e, t) {
    let n = t.min - e.min
      , r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n,r] = [r, n]),
    {
        min: n,
        max: r
    }
}
function yx(e, t) {
    return {
        x: lf(e.x, t.x),
        y: lf(e.y, t.y)
    }
}
function vx(e, t) {
    let n = .5;
    const r = Ne(e)
      , i = Ne(t);
    return i > r ? n = Gn(t.min, t.max - r, e.min) : r > i && (n = Gn(e.min, e.max - i, t.min)),
    mt(0, 1, n)
}
function xx(e, t) {
    const n = {};
    return t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
}
const Il = .35;
function wx(e=Il) {
    return e === !1 ? e = 0 : e === !0 && (e = Il),
    {
        x: af(e, "left", "right"),
        y: af(e, "top", "bottom")
    }
}
function af(e, t, n) {
    return {
        min: uf(e, t),
        max: uf(e, n)
    }
}
function uf(e, t) {
    return typeof e == "number" ? e : e[t] || 0
}
const cf = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , Mn = () => ({
    x: cf(),
    y: cf()
})
  , ff = () => ({
    min: 0,
    max: 0
})
  , Z = () => ({
    x: ff(),
    y: ff()
});
function Ve(e) {
    return [e("x"), e("y")]
}
function mm({top: e, left: t, right: n, bottom: r}) {
    return {
        x: {
            min: t,
            max: n
        },
        y: {
            min: e,
            max: r
        }
    }
}
function Sx({x: e, y: t}) {
    return {
        top: t.min,
        right: e.max,
        bottom: t.max,
        left: e.min
    }
}
function Tx(e, t) {
    if (!t)
        return e;
    const n = t({
        x: e.left,
        y: e.top
    })
      , r = t({
        x: e.right,
        y: e.bottom
    });
    return {
        top: n.y,
        left: n.x,
        bottom: r.y,
        right: r.x
    }
}
function _s(e) {
    return e === void 0 || e === 1
}
function zl({scale: e, scaleX: t, scaleY: n}) {
    return !_s(e) || !_s(t) || !_s(n)
}
function Xt(e) {
    return zl(e) || gm(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}
function gm(e) {
    return df(e.x) || df(e.y)
}
function df(e) {
    return e && e !== "0%"
}
function To(e, t, n) {
    const r = e - n
      , i = t * r;
    return n + i
}
function hf(e, t, n, r, i) {
    return i !== void 0 && (e = To(e, i, r)),
    To(e, n, r) + t
}
function Bl(e, t=0, n=1, r, i) {
    e.min = hf(e.min, t, n, r, i),
    e.max = hf(e.max, t, n, r, i)
}
function ym(e, {x: t, y: n}) {
    Bl(e.x, t.translate, t.scale, t.originPoint),
    Bl(e.y, n.translate, n.scale, n.originPoint)
}
const pf = .999999999999
  , mf = 1.0000000000001;
function kx(e, t, n, r=!1) {
    const i = n.length;
    if (!i)
        return;
    t.x = t.y = 1;
    let o, s;
    for (let l = 0; l < i; l++) {
        o = n[l],
        s = o.projectionDelta;
        const {visualElement: a} = o.options;
        a && a.props.style && a.props.style.display === "contents" || (r && o.options.layoutScroll && o.scroll && o !== o.root && An(e, {
            x: -o.scroll.offset.x,
            y: -o.scroll.offset.y
        }),
        s && (t.x *= s.x.scale,
        t.y *= s.y.scale,
        ym(e, s)),
        r && Xt(o.latestValues) && An(e, o.latestValues))
    }
    t.x < mf && t.x > pf && (t.x = 1),
    t.y < mf && t.y > pf && (t.y = 1)
}
function _n(e, t) {
    e.min = e.min + t,
    e.max = e.max + t
}
function gf(e, t, n, r, i=.5) {
    const o = W(e.min, e.max, i);
    Bl(e, t, n, o, r)
}
function An(e, t) {
    gf(e.x, t.x, t.scaleX, t.scale, t.originX),
    gf(e.y, t.y, t.scaleY, t.scale, t.originY)
}
function vm(e, t) {
    return mm(Tx(e.getBoundingClientRect(), t))
}
function Cx(e, t, n) {
    const r = vm(e, n)
      , {scroll: i} = t;
    return i && (_n(r.x, i.offset.x),
    _n(r.y, i.offset.y)),
    r
}
const xm = ({current: e}) => e ? e.ownerDocument.defaultView : null
  , Px = new WeakMap;
class Ex {
    constructor(t) {
        this.openDragLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = Z(),
        this.visualElement = t
    }
    start(t, {snapToCursor: n=!1}={}) {
        const {presenceContext: r} = this.visualElement;
        if (r && r.isPresent === !1)
            return;
        const i = c => {
            const {dragSnapToOrigin: f} = this.getProps();
            f ? this.pauseAnimation() : this.stopAnimation(),
            n && this.snapToCursor(oi(c).point)
        }
          , o = (c, f) => {
            const {drag: d, dragPropagation: g, onDragStart: v} = this.getProps();
            if (d && !g && (this.openDragLock && this.openDragLock(),
            this.openDragLock = v0(d),
            !this.openDragLock))
                return;
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            Ve(T => {
                let p = this.getAxisMotionValue(T).get() || 0;
                if (nt.test(p)) {
                    const {projection: h} = this.visualElement;
                    if (h && h.layout) {
                        const m = h.layout.layoutBox[T];
                        m && (p = Ne(m) * (parseFloat(p) / 100))
                    }
                }
                this.originPoint[T] = p
            }
            ),
            v && U.postRender( () => v(c, f)),
            jl(this.visualElement, "transform");
            const {animationState: x} = this.visualElement;
            x && x.setActive("whileDrag", !0)
        }
          , s = (c, f) => {
            const {dragPropagation: d, dragDirectionLock: g, onDirectionLock: v, onDrag: x} = this.getProps();
            if (!d && !this.openDragLock)
                return;
            const {offset: T} = f;
            if (g && this.currentDirection === null) {
                this.currentDirection = Mx(T),
                this.currentDirection !== null && v && v(this.currentDirection);
                return
            }
            this.updateAxis("x", f.point, T),
            this.updateAxis("y", f.point, T),
            this.visualElement.render(),
            x && x(c, f)
        }
          , l = (c, f) => this.stop(c, f)
          , a = () => Ve(c => {
            var f;
            return this.getAnimationState(c) === "paused" && ((f = this.getAxisMotionValue(c).animation) === null || f === void 0 ? void 0 : f.play())
        }
        )
          , {dragSnapToOrigin: u} = this.getProps();
        this.panSession = new fm(t,{
            onSessionStart: i,
            onStart: o,
            onMove: s,
            onSessionEnd: l,
            resumeAnimation: a
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: u,
            contextWindow: xm(this.visualElement)
        })
    }
    stop(t, n) {
        const r = this.isDragging;
        if (this.cancel(),
        !r)
            return;
        const {velocity: i} = n;
        this.startAnimation(i);
        const {onDragEnd: o} = this.getProps();
        o && U.postRender( () => o(t, n))
    }
    cancel() {
        this.isDragging = !1;
        const {projection: t, animationState: n} = this.visualElement;
        t && (t.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        this.panSession = void 0;
        const {dragPropagation: r} = this.getProps();
        !r && this.openDragLock && (this.openDragLock(),
        this.openDragLock = null),
        n && n.setActive("whileDrag", !1)
    }
    updateAxis(t, n, r) {
        const {drag: i} = this.getProps();
        if (!r || !Ai(t, i, this.currentDirection))
            return;
        const o = this.getAxisMotionValue(t);
        let s = this.originPoint[t] + r[t];
        this.constraints && this.constraints[t] && (s = mx(s, this.constraints[t], this.elastic[t])),
        o.set(s)
    }
    resolveConstraints() {
        var t;
        const {dragConstraints: n, dragElastic: r} = this.getProps()
          , i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout
          , o = this.constraints;
        n && Pn(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && i ? this.constraints = gx(i.layoutBox, n) : this.constraints = !1,
        this.elastic = wx(r),
        o !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && Ve(s => {
            this.constraints !== !1 && this.getAxisMotionValue(s) && (this.constraints[s] = xx(i.layoutBox[s], this.constraints[s]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: t, onMeasureDragConstraints: n} = this.getProps();
        if (!t || !Pn(t))
            return !1;
        const r = t.current
          , {projection: i} = this.visualElement;
        if (!i || !i.layout)
            return !1;
        const o = Cx(r, i.root, this.visualElement.getTransformPagePoint());
        let s = yx(i.layout.layoutBox, o);
        if (n) {
            const l = n(Sx(s));
            this.hasMutatedConstraints = !!l,
            l && (s = mm(l))
        }
        return s
    }
    startAnimation(t) {
        const {drag: n, dragMomentum: r, dragElastic: i, dragTransition: o, dragSnapToOrigin: s, onDragTransitionEnd: l} = this.getProps()
          , a = this.constraints || {}
          , u = Ve(c => {
            if (!Ai(c, n, this.currentDirection))
                return;
            let f = a && a[c] || {};
            s && (f = {
                min: 0,
                max: 0
            });
            const d = i ? 200 : 1e6
              , g = i ? 40 : 1e7
              , v = {
                type: "inertia",
                velocity: r ? t[c] : 0,
                bounceStiffness: d,
                bounceDamping: g,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...o,
                ...f
            };
            return this.startAxisValueAnimation(c, v)
        }
        );
        return Promise.all(u).then(l)
    }
    startAxisValueAnimation(t, n) {
        const r = this.getAxisMotionValue(t);
        return jl(this.visualElement, t),
        r.start(gu(t, r, 0, n, this.visualElement, !1))
    }
    stopAnimation() {
        Ve(t => this.getAxisMotionValue(t).stop())
    }
    pauseAnimation() {
        Ve(t => {
            var n;
            return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.pause()
        }
        )
    }
    getAnimationState(t) {
        var n;
        return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.state
    }
    getAxisMotionValue(t) {
        const n = `_drag${t.toUpperCase()}`
          , r = this.visualElement.getProps()
          , i = r[n];
        return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    }
    snapToCursor(t) {
        Ve(n => {
            const {drag: r} = this.getProps();
            if (!Ai(n, r, this.currentDirection))
                return;
            const {projection: i} = this.visualElement
              , o = this.getAxisMotionValue(n);
            if (i && i.layout) {
                const {min: s, max: l} = i.layout.layoutBox[n];
                o.set(t[n] - W(s, l, .5))
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: t, dragConstraints: n} = this.getProps()
          , {projection: r} = this.visualElement;
        if (!Pn(n) || !r || !this.constraints)
            return;
        this.stopAnimation();
        const i = {
            x: 0,
            y: 0
        };
        Ve(s => {
            const l = this.getAxisMotionValue(s);
            if (l && this.constraints !== !1) {
                const a = l.get();
                i[s] = vx({
                    min: a,
                    max: a
                }, this.constraints[s])
            }
        }
        );
        const {transformTemplate: o} = this.visualElement.getProps();
        this.visualElement.current.style.transform = o ? o({}, "") : "none",
        r.root && r.root.updateScroll(),
        r.updateLayout(),
        this.resolveConstraints(),
        Ve(s => {
            if (!Ai(s, t, null))
                return;
            const l = this.getAxisMotionValue(s)
              , {min: a, max: u} = this.constraints[s];
            l.set(W(a, u, i[s]))
        }
        )
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        Px.set(this.visualElement, this);
        const t = this.visualElement.current
          , n = Er(t, "pointerdown", a => {
            const {drag: u, dragListener: c=!0} = this.getProps();
            u && c && this.start(a)
        }
        )
          , r = () => {
            const {dragConstraints: a} = this.getProps();
            Pn(a) && a.current && (this.constraints = this.resolveRefConstraints())
        }
          , {projection: i} = this.visualElement
          , o = i.addEventListener("measure", r);
        i && !i.layout && (i.root && i.root.updateScroll(),
        i.updateLayout()),
        U.read(r);
        const s = Zr(window, "resize", () => this.scalePositionWithinConstraints())
          , l = i.addEventListener("didUpdate", ({delta: a, hasLayoutChanged: u}) => {
            this.isDragging && u && (Ve(c => {
                const f = this.getAxisMotionValue(c);
                f && (this.originPoint[c] += a[c].translate,
                f.set(f.get() + a[c].translate))
            }
            ),
            this.visualElement.render())
        }
        );
        return () => {
            s(),
            n(),
            o(),
            l && l()
        }
    }
    getProps() {
        const t = this.visualElement.getProps()
          , {drag: n=!1, dragDirectionLock: r=!1, dragPropagation: i=!1, dragConstraints: o=!1, dragElastic: s=Il, dragMomentum: l=!0} = t;
        return {
            ...t,
            drag: n,
            dragDirectionLock: r,
            dragPropagation: i,
            dragConstraints: o,
            dragElastic: s,
            dragMomentum: l
        }
    }
}
function Ai(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e)
}
function Mx(e, t=10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"),
    n
}
class _x extends Ut {
    constructor(t) {
        super(t),
        this.removeGroupControls = Ae,
        this.removeListeners = Ae,
        this.controls = new Ex(t)
    }
    mount() {
        const {dragControls: t} = this.node.getProps();
        t && (this.removeGroupControls = t.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || Ae
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners()
    }
}
const yf = e => (t, n) => {
    e && U.postRender( () => e(t, n))
}
;
class Ax extends Ut {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = Ae
    }
    onPointerDown(t) {
        this.session = new fm(t,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: xm(this.node)
        })
    }
    createPanHandlers() {
        const {onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: i} = this.node.getProps();
        return {
            onSessionStart: yf(t),
            onStart: yf(n),
            onMove: r,
            onEnd: (o, s) => {
                delete this.session,
                i && U.postRender( () => i(o, s))
            }
        }
    }
    mount() {
        this.removePointerDownListener = Er(this.node.current, "pointerdown", t => this.onPointerDown(t))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
        this.session && this.session.end()
    }
}
const Wi = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};
function vf(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
const lr = {
    correct: (e, t) => {
        if (!t.target)
            return e;
        if (typeof e == "string")
            if (j.test(e))
                e = parseFloat(e);
            else
                return e;
        const n = vf(e, t.target.x)
          , r = vf(e, t.target.y);
        return `${n}% ${r}%`
    }
}
  , jx = {
    correct: (e, {treeScale: t, projectionDelta: n}) => {
        const r = e
          , i = Ft.parse(e);
        if (i.length > 5)
            return r;
        const o = Ft.createTransformer(e)
          , s = typeof i[0] != "number" ? 1 : 0
          , l = n.x.scale * t.x
          , a = n.y.scale * t.y;
        i[0 + s] /= l,
        i[1 + s] /= a;
        const u = W(l, a, .5);
        return typeof i[2 + s] == "number" && (i[2 + s] /= u),
        typeof i[3 + s] == "number" && (i[3 + s] /= u),
        o(i)
    }
};
class Nx extends M.Component {
    componentDidMount() {
        const {visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: i} = this.props
          , {projection: o} = t;
        qv(Lx),
        o && (n.group && n.group.add(o),
        r && r.register && i && r.register(o),
        o.root.didUpdate(),
        o.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }
        ),
        o.setOptions({
            ...o.options,
            onExitComplete: () => this.safeToRemove()
        })),
        Wi.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(t) {
        const {layoutDependency: n, visualElement: r, drag: i, isPresent: o} = this.props
          , s = r.projection;
        return s && (s.isPresent = o,
        i || t.layoutDependency !== n || n === void 0 ? s.willUpdate() : this.safeToRemove(),
        t.isPresent !== o && (o ? s.promote() : s.relegate() || U.postRender( () => {
            const l = s.getStack();
            (!l || !l.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        const {projection: t} = this.props.visualElement;
        t && (t.root.didUpdate(),
        Ha.postRender( () => {
            !t.currentAnimation && t.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        const {visualElement: t, layoutGroup: n, switchLayoutGroup: r} = this.props
          , {projection: i} = t;
        i && (i.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(i),
        r && r.deregister && r.deregister(i))
    }
    safeToRemove() {
        const {safeToRemove: t} = this.props;
        t && t()
    }
    render() {
        return null
    }
}
function wm(e) {
    const [t,n] = np()
      , r = M.useContext(Fa);
    return y.jsx(Nx, {
        ...e,
        layoutGroup: r,
        switchLayoutGroup: M.useContext(cp),
        isPresent: t,
        safeToRemove: n
    })
}
const Lx = {
    borderRadius: {
        ...lr,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: lr,
    borderTopRightRadius: lr,
    borderBottomLeftRadius: lr,
    borderBottomRightRadius: lr,
    boxShadow: jx
};
function Rx(e, t, n) {
    const r = me(e) ? e : Xr(e);
    return r.start(gu("", r, t, n)),
    r.animation
}
function Dx(e) {
    return e instanceof SVGElement && e.tagName !== "svg"
}
const Vx = (e, t) => e.depth - t.depth;
class Ox {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(t) {
        ou(this.children, t),
        this.isDirty = !0
    }
    remove(t) {
        su(this.children, t),
        this.isDirty = !0
    }
    forEach(t) {
        this.isDirty && this.children.sort(Vx),
        this.isDirty = !1,
        this.children.forEach(t)
    }
}
function Fx(e, t) {
    const n = rt.now()
      , r = ({timestamp: i}) => {
        const o = i - n;
        o >= t && (Ot(r),
        e(o - t))
    }
    ;
    return U.read(r, !0),
    () => Ot(r)
}
const Sm = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , Ix = Sm.length
  , xf = e => typeof e == "string" ? parseFloat(e) : e
  , wf = e => typeof e == "number" || j.test(e);
function zx(e, t, n, r, i, o) {
    i ? (e.opacity = W(0, n.opacity !== void 0 ? n.opacity : 1, Bx(r)),
    e.opacityExit = W(t.opacity !== void 0 ? t.opacity : 1, 0, Ux(r))) : o && (e.opacity = W(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
    for (let s = 0; s < Ix; s++) {
        const l = `border${Sm[s]}Radius`;
        let a = Sf(t, l)
          , u = Sf(n, l);
        if (a === void 0 && u === void 0)
            continue;
        a || (a = 0),
        u || (u = 0),
        a === 0 || u === 0 || wf(a) === wf(u) ? (e[l] = Math.max(W(xf(a), xf(u), r), 0),
        (nt.test(u) || nt.test(a)) && (e[l] += "%")) : e[l] = u
    }
    (t.rotate || n.rotate) && (e.rotate = W(t.rotate || 0, n.rotate || 0, r))
}
function Sf(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius
}
const Bx = Tm(0, .5, Bp)
  , Ux = Tm(.5, .95, Ae);
function Tm(e, t, n) {
    return r => r < e ? 0 : r > t ? 1 : n(Gn(e, t, r))
}
function Tf(e, t) {
    e.min = t.min,
    e.max = t.max
}
function De(e, t) {
    Tf(e.x, t.x),
    Tf(e.y, t.y)
}
function kf(e, t) {
    e.translate = t.translate,
    e.scale = t.scale,
    e.originPoint = t.originPoint,
    e.origin = t.origin
}
function Cf(e, t, n, r, i) {
    return e -= t,
    e = To(e, 1 / n, r),
    i !== void 0 && (e = To(e, 1 / i, r)),
    e
}
function $x(e, t=0, n=1, r=.5, i, o=e, s=e) {
    if (nt.test(t) && (t = parseFloat(t),
    t = W(s.min, s.max, t / 100) - s.min),
    typeof t != "number")
        return;
    let l = W(o.min, o.max, r);
    e === o && (l -= t),
    e.min = Cf(e.min, t, n, l, i),
    e.max = Cf(e.max, t, n, l, i)
}
function Pf(e, t, [n,r,i], o, s) {
    $x(e, t[n], t[r], t[i], t.scale, o, s)
}
const Gx = ["x", "scaleX", "originX"]
  , Wx = ["y", "scaleY", "originY"];
function Ef(e, t, n, r) {
    Pf(e.x, t, Gx, n ? n.x : void 0, r ? r.x : void 0),
    Pf(e.y, t, Wx, n ? n.y : void 0, r ? r.y : void 0)
}
function Mf(e) {
    return e.translate === 0 && e.scale === 1
}
function km(e) {
    return Mf(e.x) && Mf(e.y)
}
function _f(e, t) {
    return e.min === t.min && e.max === t.max
}
function Hx(e, t) {
    return _f(e.x, t.x) && _f(e.y, t.y)
}
function Af(e, t) {
    return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max)
}
function Cm(e, t) {
    return Af(e.x, t.x) && Af(e.y, t.y)
}
function jf(e) {
    return Ne(e.x) / Ne(e.y)
}
function Nf(e, t) {
    return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint
}
class Kx {
    constructor() {
        this.members = []
    }
    add(t) {
        ou(this.members, t),
        t.scheduleRender()
    }
    remove(t) {
        if (su(this.members, t),
        t === this.prevLead && (this.prevLead = void 0),
        t === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(t) {
        const n = this.members.findIndex(i => t === i);
        if (n === 0)
            return !1;
        let r;
        for (let i = n; i >= 0; i--) {
            const o = this.members[i];
            if (o.isPresent !== !1) {
                r = o;
                break
            }
        }
        return r ? (this.promote(r),
        !0) : !1
    }
    promote(t, n) {
        const r = this.lead;
        if (t !== r && (this.prevLead = r,
        this.lead = t,
        t.show(),
        r)) {
            r.instance && r.scheduleRender(),
            t.scheduleRender(),
            t.resumeFrom = r,
            n && (t.resumeFrom.preserveOpacity = !0),
            r.snapshot && (t.snapshot = r.snapshot,
            t.snapshot.latestValues = r.animationValues || r.latestValues),
            t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            const {crossfade: i} = t.options;
            i === !1 && r.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(t => {
            const {options: n, resumingFrom: r} = t;
            n.onExitComplete && n.onExitComplete(),
            r && r.options.onExitComplete && r.options.onExitComplete()
        }
        )
    }
    scheduleRender() {
        this.members.forEach(t => {
            t.instance && t.scheduleRender(!1)
        }
        )
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
function Qx(e, t, n) {
    let r = "";
    const i = e.x.translate / t.x
      , o = e.y.translate / t.y
      , s = (n == null ? void 0 : n.z) || 0;
    if ((i || o || s) && (r = `translate3d(${i}px, ${o}px, ${s}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n) {
        const {transformPerspective: u, rotate: c, rotateX: f, rotateY: d, skewX: g, skewY: v} = n;
        u && (r = `perspective(${u}px) ${r}`),
        c && (r += `rotate(${c}deg) `),
        f && (r += `rotateX(${f}deg) `),
        d && (r += `rotateY(${d}deg) `),
        g && (r += `skewX(${g}deg) `),
        v && (r += `skewY(${v}deg) `)
    }
    const l = e.x.scale * t.x
      , a = e.y.scale * t.y;
    return (l !== 1 || a !== 1) && (r += `scale(${l}, ${a})`),
    r || "none"
}
const Yt = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
}
  , mr = typeof window < "u" && window.MotionDebug !== void 0
  , As = ["", "X", "Y", "Z"]
  , Xx = {
    visibility: "hidden"
}
  , Lf = 1e3;
let Yx = 0;
function js(e, t, n, r) {
    const {latestValues: i} = t;
    i[e] && (n[e] = i[e],
    t.setStaticValue(e, 0),
    r && (r[e] = 0))
}
function Pm(e) {
    if (e.hasCheckedOptimisedAppear = !0,
    e.root === e)
        return;
    const {visualElement: t} = e.options;
    if (!t)
        return;
    const n = Rp(t);
    if (window.MotionHasOptimisedAnimation(n, "transform")) {
        const {layout: i, layoutId: o} = e.options;
        window.MotionCancelOptimisedAnimation(n, "transform", U, !(i || o))
    }
    const {parent: r} = e;
    r && !r.hasCheckedOptimisedAppear && Pm(r)
}
function Em({attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i}) {
    return class {
        constructor(s={}, l=t == null ? void 0 : t()) {
            this.id = Yx++,
            this.animationId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.hasCheckedOptimisedAppear = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.updateScheduled = !1,
            this.scheduleUpdate = () => this.update(),
            this.projectionUpdateScheduled = !1,
            this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = () => {
                this.projectionUpdateScheduled = !1,
                mr && (Yt.totalNodes = Yt.resolvedTargetDeltas = Yt.recalculatedProjection = 0),
                this.nodes.forEach(Jx),
                this.nodes.forEach(rw),
                this.nodes.forEach(iw),
                this.nodes.forEach(bx),
                mr && window.MotionDebug.record(Yt)
            }
            ,
            this.resolvedRelativeTargetAt = 0,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = s,
            this.root = l ? l.root || l : this,
            this.path = l ? [...l.path, l] : [],
            this.parent = l,
            this.depth = l ? l.depth + 1 : 0;
            for (let a = 0; a < this.path.length; a++)
                this.path[a].shouldResetTransform = !0;
            this.root === this && (this.nodes = new Ox)
        }
        addEventListener(s, l) {
            return this.eventHandlers.has(s) || this.eventHandlers.set(s, new lu),
            this.eventHandlers.get(s).add(l)
        }
        notifyListeners(s, ...l) {
            const a = this.eventHandlers.get(s);
            a && a.notify(...l)
        }
        hasListeners(s) {
            return this.eventHandlers.has(s)
        }
        mount(s, l=this.root.hasTreeAnimated) {
            if (this.instance)
                return;
            this.isSVG = Dx(s),
            this.instance = s;
            const {layoutId: a, layout: u, visualElement: c} = this.options;
            if (c && !c.current && c.mount(s),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            l && (u || a) && (this.isLayoutDirty = !0),
            e) {
                let f;
                const d = () => this.root.updateBlockedByResize = !1;
                e(s, () => {
                    this.root.updateBlockedByResize = !0,
                    f && f(),
                    f = Fx(d, 250),
                    Wi.hasAnimatedSinceResize && (Wi.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(Df))
                }
                )
            }
            a && this.root.registerSharedNode(a, this),
            this.options.animate !== !1 && c && (a || u) && this.addEventListener("didUpdate", ({delta: f, hasLayoutChanged: d, hasRelativeTargetChanged: g, layout: v}) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const x = this.options.transition || c.getDefaultTransition() || uw
                  , {onLayoutAnimationStart: T, onLayoutAnimationComplete: p} = c.getProps()
                  , h = !this.targetLayout || !Cm(this.targetLayout, v) || g
                  , m = !d && g;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || m || d && (h || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0),
                    this.setAnimationOrigin(f, m);
                    const w = {
                        ...tu(x, "layout"),
                        onPlay: T,
                        onComplete: p
                    };
                    (c.shouldReduceMotion || this.options.layoutRoot) && (w.delay = 0,
                    w.type = !1),
                    this.startAnimation(w)
                } else
                    d || Df(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = v
            }
            )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            const s = this.getStack();
            s && s.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            Ot(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
            this.nodes && this.nodes.forEach(ow),
            this.animationId++)
        }
        getTransformTemplate() {
            const {visualElement: s} = this.options;
            return s && s.getProps().transformTemplate
        }
        willUpdate(s=!0) {
            if (this.root.hasTreeAnimated = !0,
            this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Pm(this),
            !this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let c = 0; c < this.path.length; c++) {
                const f = this.path[c];
                f.shouldResetTransform = !0,
                f.updateScroll("snapshot"),
                f.options.layoutRoot && f.willUpdate(!1)
            }
            const {layoutId: l, layout: a} = this.options;
            if (l === void 0 && !a)
                return;
            const u = this.getTransformTemplate();
            this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            s && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
            this.isUpdateBlocked()) {
                this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(Rf);
                return
            }
            this.isUpdating || this.nodes.forEach(tw),
            this.isUpdating = !1,
            this.nodes.forEach(nw),
            this.nodes.forEach(Zx),
            this.nodes.forEach(qx),
            this.clearAllSnapshots();
            const l = rt.now();
            le.delta = mt(0, 1e3 / 60, l - le.timestamp),
            le.timestamp = l,
            le.isProcessing = !0,
            ws.update.process(le),
            ws.preRender.process(le),
            ws.render.process(le),
            le.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            Ha.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(ew),
            this.sharedNodes.forEach(sw)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            U.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            U.postRender( () => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let a = 0; a < this.path.length; a++)
                    this.path[a].updateScroll();
            const s = this.layout;
            this.layout = this.measure(!1),
            this.layoutCorrected = Z(),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: l} = this.options;
            l && l.notify("LayoutMeasure", this.layout.layoutBox, s ? s.layoutBox : void 0)
        }
        updateScroll(s="measure") {
            let l = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === s && (l = !1),
            l) {
                const a = r(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: s,
                    isRoot: a,
                    offset: n(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : a
                }
            }
        }
        resetTransform() {
            if (!i)
                return;
            const s = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
              , l = this.projectionDelta && !km(this.projectionDelta)
              , a = this.getTransformTemplate()
              , u = a ? a(this.latestValues, "") : void 0
              , c = u !== this.prevTransformTemplateValue;
            s && (l || Xt(this.latestValues) || c) && (i(this.instance, u),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(s=!0) {
            const l = this.measurePageBox();
            let a = this.removeElementScroll(l);
            return s && (a = this.removeTransform(a)),
            cw(a),
            {
                animationId: this.root.animationId,
                measuredBox: l,
                layoutBox: a,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var s;
            const {visualElement: l} = this.options;
            if (!l)
                return Z();
            const a = l.measureViewportBox();
            if (!(((s = this.scroll) === null || s === void 0 ? void 0 : s.wasRoot) || this.path.some(fw))) {
                const {scroll: c} = this.root;
                c && (_n(a.x, c.offset.x),
                _n(a.y, c.offset.y))
            }
            return a
        }
        removeElementScroll(s) {
            var l;
            const a = Z();
            if (De(a, s),
            !((l = this.scroll) === null || l === void 0) && l.wasRoot)
                return a;
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u]
                  , {scroll: f, options: d} = c;
                c !== this.root && f && d.layoutScroll && (f.wasRoot && De(a, s),
                _n(a.x, f.offset.x),
                _n(a.y, f.offset.y))
            }
            return a
        }
        applyTransform(s, l=!1) {
            const a = Z();
            De(a, s);
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u];
                !l && c.options.layoutScroll && c.scroll && c !== c.root && An(a, {
                    x: -c.scroll.offset.x,
                    y: -c.scroll.offset.y
                }),
                Xt(c.latestValues) && An(a, c.latestValues)
            }
            return Xt(this.latestValues) && An(a, this.latestValues),
            a
        }
        removeTransform(s) {
            const l = Z();
            De(l, s);
            for (let a = 0; a < this.path.length; a++) {
                const u = this.path[a];
                if (!u.instance || !Xt(u.latestValues))
                    continue;
                zl(u.latestValues) && u.updateSnapshot();
                const c = Z()
                  , f = u.measurePageBox();
                De(c, f),
                Ef(l, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c)
            }
            return Xt(this.latestValues) && Ef(l, this.latestValues),
            l
        }
        setTargetDelta(s) {
            this.targetDelta = s,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(s) {
            this.options = {
                ...this.options,
                ...s,
                crossfade: s.crossfade !== void 0 ? s.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== le.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(s=!1) {
            var l;
            const a = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
            const u = !!this.resumingFrom || this !== a;
            if (!(s || u && this.isSharedProjectionDirty || this.isProjectionDirty || !((l = this.parent) === null || l === void 0) && l.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                return;
            const {layout: f, layoutId: d} = this.options;
            if (!(!this.layout || !(f || d))) {
                if (this.resolvedRelativeTargetAt = le.timestamp,
                !this.targetDelta && !this.relativeTarget) {
                    const g = this.getClosestProjectingParent();
                    g && g.layout && this.animationProgress !== 1 ? (this.relativeParent = g,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = Z(),
                    this.relativeTargetOrigin = Z(),
                    _r(this.relativeTargetOrigin, this.layout.layoutBox, g.layout.layoutBox),
                    De(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = Z(),
                    this.targetWithTransforms = Z()),
                    this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
                    px(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : De(this.target, this.layout.layoutBox),
                    ym(this.target, this.targetDelta)) : De(this.target, this.layout.layoutBox),
                    this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const g = this.getClosestProjectingParent();
                        g && !!g.resumingFrom == !!this.resumingFrom && !g.options.layoutScroll && g.target && this.animationProgress !== 1 ? (this.relativeParent = g,
                        this.forceRelativeParentToResolveTarget(),
                        this.relativeTarget = Z(),
                        this.relativeTargetOrigin = Z(),
                        _r(this.relativeTargetOrigin, this.target, g.target),
                        De(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    mr && Yt.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || zl(this.parent.latestValues) || gm(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var s;
            const l = this.getLead()
              , a = !!this.resumingFrom || this !== l;
            let u = !0;
            if ((this.isProjectionDirty || !((s = this.parent) === null || s === void 0) && s.isProjectionDirty) && (u = !1),
            a && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1),
            this.resolvedRelativeTargetAt === le.timestamp && (u = !1),
            u)
                return;
            const {layout: c, layoutId: f} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(c || f))
                return;
            De(this.layoutCorrected, this.layout.layoutBox);
            const d = this.treeScale.x
              , g = this.treeScale.y;
            kx(this.layoutCorrected, this.treeScale, this.path, a),
            l.layout && !l.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (l.target = l.layout.layoutBox,
            l.targetWithTransforms = Z());
            const {target: v} = l;
            if (!v) {
                this.prevProjectionDelta && (this.createProjectionDeltas(),
                this.scheduleRender());
                return
            }
            !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (kf(this.prevProjectionDelta.x, this.projectionDelta.x),
            kf(this.prevProjectionDelta.y, this.projectionDelta.y)),
            Mr(this.projectionDelta, this.layoutCorrected, v, this.latestValues),
            (this.treeScale.x !== d || this.treeScale.y !== g || !Nf(this.projectionDelta.x, this.prevProjectionDelta.x) || !Nf(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", v)),
            mr && Yt.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(s=!0) {
            var l;
            if ((l = this.options.visualElement) === null || l === void 0 || l.scheduleRender(),
            s) {
                const a = this.getStack();
                a && a.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = Mn(),
            this.projectionDelta = Mn(),
            this.projectionDeltaWithTransform = Mn()
        }
        setAnimationOrigin(s, l=!1) {
            const a = this.snapshot
              , u = a ? a.latestValues : {}
              , c = {
                ...this.latestValues
            }
              , f = Mn();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !l;
            const d = Z()
              , g = a ? a.source : void 0
              , v = this.layout ? this.layout.source : void 0
              , x = g !== v
              , T = this.getStack()
              , p = !T || T.members.length <= 1
              , h = !!(x && !p && this.options.crossfade === !0 && !this.path.some(aw));
            this.animationProgress = 0;
            let m;
            this.mixTargetDelta = w => {
                const S = w / 1e3;
                Vf(f.x, s.x, S),
                Vf(f.y, s.y, S),
                this.setTargetDelta(f),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (_r(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                lw(this.relativeTarget, this.relativeTargetOrigin, d, S),
                m && Hx(this.relativeTarget, m) && (this.isProjectionDirty = !1),
                m || (m = Z()),
                De(m, this.relativeTarget)),
                x && (this.animationValues = c,
                zx(c, u, this.latestValues, S, h, p)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = S
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(s) {
            this.notifyListeners("animationStart"),
            this.currentAnimation && this.currentAnimation.stop(),
            this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
            this.pendingAnimation && (Ot(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = U.update( () => {
                Wi.hasAnimatedSinceResize = !0,
                this.currentAnimation = Rx(0, Lf, {
                    ...s,
                    onUpdate: l => {
                        this.mixTargetDelta(l),
                        s.onUpdate && s.onUpdate(l)
                    }
                    ,
                    onComplete: () => {
                        s.onComplete && s.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0);
            const s = this.getStack();
            s && s.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Lf),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const s = this.getLead();
            let {targetWithTransforms: l, target: a, layout: u, latestValues: c} = s;
            if (!(!l || !a || !u)) {
                if (this !== s && this.layout && u && Mm(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
                    a = this.target || Z();
                    const f = Ne(this.layout.layoutBox.x);
                    a.x.min = s.target.x.min,
                    a.x.max = a.x.min + f;
                    const d = Ne(this.layout.layoutBox.y);
                    a.y.min = s.target.y.min,
                    a.y.max = a.y.min + d
                }
                De(l, a),
                An(l, c),
                Mr(this.projectionDeltaWithTransform, this.layoutCorrected, l, c)
            }
        }
        registerSharedNode(s, l) {
            this.sharedNodes.has(s) || this.sharedNodes.set(s, new Kx),
            this.sharedNodes.get(s).add(l);
            const u = l.options.initialPromotionConfig;
            l.promote({
                transition: u ? u.transition : void 0,
                preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(l) : void 0
            })
        }
        isLead() {
            const s = this.getStack();
            return s ? s.lead === this : !0
        }
        getLead() {
            var s;
            const {layoutId: l} = this.options;
            return l ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) || this : this
        }
        getPrevLead() {
            var s;
            const {layoutId: l} = this.options;
            return l ? (s = this.getStack()) === null || s === void 0 ? void 0 : s.prevLead : void 0
        }
        getStack() {
            const {layoutId: s} = this.options;
            if (s)
                return this.root.sharedNodes.get(s)
        }
        promote({needsReset: s, transition: l, preserveFollowOpacity: a}={}) {
            const u = this.getStack();
            u && u.promote(this, a),
            s && (this.projectionDelta = void 0,
            this.needsReset = !0),
            l && this.setOptions({
                transition: l
            })
        }
        relegate() {
            const s = this.getStack();
            return s ? s.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {visualElement: s} = this.options;
            if (!s)
                return;
            let l = !1;
            const {latestValues: a} = s;
            if ((a.z || a.rotate || a.rotateX || a.rotateY || a.rotateZ || a.skewX || a.skewY) && (l = !0),
            !l)
                return;
            const u = {};
            a.z && js("z", s, u, this.animationValues);
            for (let c = 0; c < As.length; c++)
                js(`rotate${As[c]}`, s, u, this.animationValues),
                js(`skew${As[c]}`, s, u, this.animationValues);
            s.render();
            for (const c in u)
                s.setStaticValue(c, u[c]),
                this.animationValues && (this.animationValues[c] = u[c]);
            s.scheduleRender()
        }
        getProjectionStyles(s) {
            var l, a;
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible)
                return Xx;
            const u = {
                visibility: ""
            }
              , c = this.getTransformTemplate();
            if (this.needsReset)
                return this.needsReset = !1,
                u.opacity = "",
                u.pointerEvents = $i(s == null ? void 0 : s.pointerEvents) || "",
                u.transform = c ? c(this.latestValues, "") : "none",
                u;
            const f = this.getLead();
            if (!this.projectionDelta || !this.layout || !f.target) {
                const x = {};
                return this.options.layoutId && (x.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                x.pointerEvents = $i(s == null ? void 0 : s.pointerEvents) || ""),
                this.hasProjected && !Xt(this.latestValues) && (x.transform = c ? c({}, "") : "none",
                this.hasProjected = !1),
                x
            }
            const d = f.animationValues || f.latestValues;
            this.applyTransformsToTarget(),
            u.transform = Qx(this.projectionDeltaWithTransform, this.treeScale, d),
            c && (u.transform = c(d, u.transform));
            const {x: g, y: v} = this.projectionDelta;
            u.transformOrigin = `${g.origin * 100}% ${v.origin * 100}% 0`,
            f.animationValues ? u.opacity = f === this ? (a = (l = d.opacity) !== null && l !== void 0 ? l : this.latestValues.opacity) !== null && a !== void 0 ? a : 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : u.opacity = f === this ? d.opacity !== void 0 ? d.opacity : "" : d.opacityExit !== void 0 ? d.opacityExit : 0;
            for (const x in yo) {
                if (d[x] === void 0)
                    continue;
                const {correct: T, applyTo: p} = yo[x]
                  , h = u.transform === "none" ? d[x] : T(d[x], f);
                if (p) {
                    const m = p.length;
                    for (let w = 0; w < m; w++)
                        u[p[w]] = h
                } else
                    u[x] = h
            }
            return this.options.layoutId && (u.pointerEvents = f === this ? $i(s == null ? void 0 : s.pointerEvents) || "" : "none"),
            u
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(s => {
                var l;
                return (l = s.currentAnimation) === null || l === void 0 ? void 0 : l.stop()
            }
            ),
            this.root.nodes.forEach(Rf),
            this.root.sharedNodes.clear()
        }
    }
}
function Zx(e) {
    e.updateLayout()
}
function qx(e) {
    var t;
    const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
        const {layoutBox: r, measuredBox: i} = e.layout
          , {animationType: o} = e.options
          , s = n.source !== e.layout.source;
        o === "size" ? Ve(f => {
            const d = s ? n.measuredBox[f] : n.layoutBox[f]
              , g = Ne(d);
            d.min = r[f].min,
            d.max = d.min + g
        }
        ) : Mm(o, n.layoutBox, r) && Ve(f => {
            const d = s ? n.measuredBox[f] : n.layoutBox[f]
              , g = Ne(r[f]);
            d.max = d.min + g,
            e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0,
            e.relativeTarget[f].max = e.relativeTarget[f].min + g)
        }
        );
        const l = Mn();
        Mr(l, r, n.layoutBox);
        const a = Mn();
        s ? Mr(a, e.applyTransform(i, !0), n.measuredBox) : Mr(a, r, n.layoutBox);
        const u = !km(l);
        let c = !1;
        if (!e.resumeFrom) {
            const f = e.getClosestProjectingParent();
            if (f && !f.resumeFrom) {
                const {snapshot: d, layout: g} = f;
                if (d && g) {
                    const v = Z();
                    _r(v, n.layoutBox, d.layoutBox);
                    const x = Z();
                    _r(x, r, g.layoutBox),
                    Cm(v, x) || (c = !0),
                    f.options.layoutRoot && (e.relativeTarget = x,
                    e.relativeTargetOrigin = v,
                    e.relativeParent = f)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: r,
            snapshot: n,
            delta: a,
            layoutDelta: l,
            hasLayoutChanged: u,
            hasRelativeTargetChanged: c
        })
    } else if (e.isLead()) {
        const {onExitComplete: r} = e.options;
        r && r()
    }
    e.options.transition = void 0
}
function Jx(e) {
    mr && Yt.totalNodes++,
    e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}
function bx(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}
function ew(e) {
    e.clearSnapshot()
}
function Rf(e) {
    e.clearMeasurements()
}
function tw(e) {
    e.isLayoutDirty = !1
}
function nw(e) {
    const {visualElement: t} = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform()
}
function Df(e) {
    e.finishAnimation(),
    e.targetDelta = e.relativeTarget = e.target = void 0,
    e.isProjectionDirty = !0
}
function rw(e) {
    e.resolveTargetDelta()
}
function iw(e) {
    e.calcProjection()
}
function ow(e) {
    e.resetSkewAndRotation()
}
function sw(e) {
    e.removeLeadSnapshot()
}
function Vf(e, t, n) {
    e.translate = W(t.translate, 0, n),
    e.scale = W(t.scale, 1, n),
    e.origin = t.origin,
    e.originPoint = t.originPoint
}
function Of(e, t, n, r) {
    e.min = W(t.min, n.min, r),
    e.max = W(t.max, n.max, r)
}
function lw(e, t, n, r) {
    Of(e.x, t.x, n.x, r),
    Of(e.y, t.y, n.y, r)
}
function aw(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
const uw = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , Ff = e => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e)
  , If = Ff("applewebkit/") && !Ff("chrome/") ? Math.round : Ae;
function zf(e) {
    e.min = If(e.min),
    e.max = If(e.max)
}
function cw(e) {
    zf(e.x),
    zf(e.y)
}
function Mm(e, t, n) {
    return e === "position" || e === "preserve-aspect" && !hx(jf(t), jf(n), .2)
}
function fw(e) {
    var t;
    return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
}
const dw = Em({
    attachResizeListener: (e, t) => Zr(e, "resize", t),
    measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
})
  , Ns = {
    current: void 0
}
  , _m = Em({
    measureScroll: e => ({
        x: e.scrollLeft,
        y: e.scrollTop
    }),
    defaultParent: () => {
        if (!Ns.current) {
            const e = new dw({});
            e.mount(window),
            e.setOptions({
                layoutScroll: !0
            }),
            Ns.current = e
        }
        return Ns.current
    }
    ,
    resetTransform: (e, t) => {
        e.style.transform = t !== void 0 ? t : "none"
    }
    ,
    checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
})
  , hw = {
    pan: {
        Feature: Ax
    },
    drag: {
        Feature: _x,
        ProjectionNode: _m,
        MeasureLayout: wm
    }
};
function Bf(e, t, n) {
    const {props: r} = e;
    e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
    const i = "onHover" + n
      , o = r[i];
    o && U.postRender( () => o(t, oi(t)))
}
class pw extends Ut {
    mount() {
        const {current: t} = this.node;
        t && (this.unmount = h0(t, n => (Bf(this.node, n, "Start"),
        r => Bf(this.node, r, "End"))))
    }
    unmount() {}
}
class mw extends Ut {
    constructor() {
        super(...arguments),
        this.isActive = !1
    }
    onFocus() {
        let t = !1;
        try {
            t = this.node.current.matches(":focus-visible")
        } catch {
            t = !0
        }
        !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
        this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
        this.isActive = !1)
    }
    mount() {
        this.unmount = ii(Zr(this.node.current, "focus", () => this.onFocus()), Zr(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
function Uf(e, t, n) {
    const {props: r} = e;
    e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
    const i = "onTap" + (n === "End" ? "" : n)
      , o = r[i];
    o && U.postRender( () => o(t, oi(t)))
}
class gw extends Ut {
    mount() {
        const {current: t} = this.node;
        t && (this.unmount = y0(t, n => (Uf(this.node, n, "Start"),
        (r, {success: i}) => Uf(this.node, r, i ? "End" : "Cancel")), {
            useGlobalTarget: this.node.props.globalTapTarget
        }))
    }
    unmount() {}
}
const Ul = new WeakMap
  , Ls = new WeakMap
  , yw = e => {
    const t = Ul.get(e.target);
    t && t(e)
}
  , vw = e => {
    e.forEach(yw)
}
;
function xw({root: e, ...t}) {
    const n = e || document;
    Ls.has(n) || Ls.set(n, {});
    const r = Ls.get(n)
      , i = JSON.stringify(t);
    return r[i] || (r[i] = new IntersectionObserver(vw,{
        root: e,
        ...t
    })),
    r[i]
}
function ww(e, t, n) {
    const r = xw(t);
    return Ul.set(e, n),
    r.observe(e),
    () => {
        Ul.delete(e),
        r.unobserve(e)
    }
}
const Sw = {
    some: 0,
    all: 1
};
class Tw extends Ut {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {viewport: t={}} = this.node.getProps()
          , {root: n, margin: r, amount: i="some", once: o} = t
          , s = {
            root: n ? n.current : void 0,
            rootMargin: r,
            threshold: typeof i == "number" ? i : Sw[i]
        }
          , l = a => {
            const {isIntersecting: u} = a;
            if (this.isInView === u || (this.isInView = u,
            o && !u && this.hasEnteredView))
                return;
            u && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", u);
            const {onViewportEnter: c, onViewportLeave: f} = this.node.getProps()
              , d = u ? c : f;
            d && d(a)
        }
        ;
        return ww(this.node.current, s, l)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: t, prevProps: n} = this.node;
        ["amount", "margin", "root"].some(kw(t, n)) && this.startObserver()
    }
    unmount() {}
}
function kw({viewport: e={}}, {viewport: t={}}={}) {
    return n => e[n] !== t[n]
}
const Cw = {
    inView: {
        Feature: Tw
    },
    tap: {
        Feature: gw
    },
    focus: {
        Feature: mw
    },
    hover: {
        Feature: pw
    }
}
  , Pw = {
    layout: {
        ProjectionNode: _m,
        MeasureLayout: wm
    }
}
  , $l = {
    current: null
}
  , Am = {
    current: !1
};
function Ew() {
    if (Am.current = !0,
    !!Ba)
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)")
              , t = () => $l.current = e.matches;
            e.addListener(t),
            t()
        } else
            $l.current = !1
}
const Mw = [...em, he, Ft]
  , _w = e => Mw.find(bp(e))
  , $f = new WeakMap;
function Aw(e, t, n) {
    for (const r in t) {
        const i = t[r]
          , o = n[r];
        if (me(i))
            e.addValue(r, i);
        else if (me(o))
            e.addValue(r, Xr(i, {
                owner: e
            }));
        else if (o !== i)
            if (e.hasValue(r)) {
                const s = e.getValue(r);
                s.liveStyle === !0 ? s.jump(i) : s.hasAnimated || s.set(i)
            } else {
                const s = e.getStaticValue(r);
                e.addValue(r, Xr(s !== void 0 ? s : i, {
                    owner: e
                }))
            }
    }
    for (const r in n)
        t[r] === void 0 && e.removeValue(r);
    return t
}
const Gf = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class jw {
    scrapeMotionValuesFromProps(t, n, r) {
        return {}
    }
    constructor({parent: t, props: n, presenceContext: r, reducedMotionConfig: i, blockInitialAnimation: o, visualState: s}, l={}) {
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.values = new Map,
        this.KeyframeResolver = hu,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = () => this.notify("Update", this.latestValues),
        this.render = () => {
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.renderScheduledAt = 0,
        this.scheduleRender = () => {
            const g = rt.now();
            this.renderScheduledAt < g && (this.renderScheduledAt = g,
            U.render(this.render, !1, !0))
        }
        ;
        const {latestValues: a, renderState: u, onUpdate: c} = s;
        this.onUpdate = c,
        this.latestValues = a,
        this.baseTarget = {
            ...a
        },
        this.initialValues = n.initial ? {
            ...a
        } : {},
        this.renderState = u,
        this.parent = t,
        this.props = n,
        this.presenceContext = r,
        this.depth = t ? t.depth + 1 : 0,
        this.reducedMotionConfig = i,
        this.options = l,
        this.blockInitialAnimation = !!o,
        this.isControllingVariants = Wo(n),
        this.isVariantNode = ap(n),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(t && t.current);
        const {willChange: f, ...d} = this.scrapeMotionValuesFromProps(n, {}, this);
        for (const g in d) {
            const v = d[g];
            a[g] !== void 0 && me(v) && v.set(a[g], !1)
        }
    }
    mount(t) {
        this.current = t,
        $f.set(t, this),
        this.projection && !this.projection.instance && this.projection.mount(t),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach( (n, r) => this.bindToMotionValue(r, n)),
        Am.current || Ew(),
        this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : $l.current,
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext)
    }
    unmount() {
        $f.delete(this.current),
        this.projection && this.projection.unmount(),
        Ot(this.notifyUpdate),
        Ot(this.render),
        this.valueSubscriptions.forEach(t => t()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this);
        for (const t in this.events)
            this.events[t].clear();
        for (const t in this.features) {
            const n = this.features[t];
            n && (n.unmount(),
            n.isMounted = !1)
        }
        this.current = null
    }
    bindToMotionValue(t, n) {
        this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
        const r = fn.has(t)
          , i = n.on("change", l => {
            this.latestValues[t] = l,
            this.props.onUpdate && U.preRender(this.notifyUpdate),
            r && this.projection && (this.projection.isTransformDirty = !0)
        }
        )
          , o = n.on("renderRequest", this.scheduleRender);
        let s;
        window.MotionCheckAppearSync && (s = window.MotionCheckAppearSync(this, t, n)),
        this.valueSubscriptions.set(t, () => {
            i(),
            o(),
            s && s(),
            n.owner && n.stop()
        }
        )
    }
    sortNodePosition(t) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current)
    }
    updateFeatures() {
        let t = "animation";
        for (t in Wn) {
            const n = Wn[t];
            if (!n)
                continue;
            const {isEnabled: r, Feature: i} = n;
            if (!this.features[t] && i && r(this.props) && (this.features[t] = new i(this)),
            this.features[t]) {
                const o = this.features[t];
                o.isMounted ? o.update() : (o.mount(),
                o.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Z()
    }
    getStaticValue(t) {
        return this.latestValues[t]
    }
    setStaticValue(t, n) {
        this.latestValues[t] = n
    }
    update(t, n) {
        (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = t,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = n;
        for (let r = 0; r < Gf.length; r++) {
            const i = Gf[r];
            this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](),
            delete this.propEventSubscriptions[i]);
            const o = "on" + i
              , s = t[o];
            s && (this.propEventSubscriptions[i] = this.on(i, s))
        }
        this.prevMotionValues = Aw(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue(),
        this.onUpdate && this.onUpdate(this)
    }
    getProps() {
        return this.props
    }
    getVariant(t) {
        return this.props.variants ? this.props.variants[t] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(t) {
        const n = this.getClosestVariantNode();
        if (n)
            return n.variantChildren && n.variantChildren.add(t),
            () => n.variantChildren.delete(t)
    }
    addValue(t, n) {
        const r = this.values.get(t);
        n !== r && (r && this.removeValue(t),
        this.bindToMotionValue(t, n),
        this.values.set(t, n),
        this.latestValues[t] = n.get())
    }
    removeValue(t) {
        this.values.delete(t);
        const n = this.valueSubscriptions.get(t);
        n && (n(),
        this.valueSubscriptions.delete(t)),
        delete this.latestValues[t],
        this.removeValueFromRenderState(t, this.renderState)
    }
    hasValue(t) {
        return this.values.has(t)
    }
    getValue(t, n) {
        if (this.props.values && this.props.values[t])
            return this.props.values[t];
        let r = this.values.get(t);
        return r === void 0 && n !== void 0 && (r = Xr(n === null ? void 0 : n, {
            owner: this
        }),
        this.addValue(t, r)),
        r
    }
    readValue(t, n) {
        var r;
        let i = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0 ? r : this.readValueFromInstance(this.current, t, this.options);
        return i != null && (typeof i == "string" && (qp(i) || $p(i)) ? i = parseFloat(i) : !_w(i) && Ft.test(n) && (i = Xp(t, n)),
        this.setBaseTarget(t, me(i) ? i.get() : i)),
        me(i) ? i.get() : i
    }
    setBaseTarget(t, n) {
        this.baseTarget[t] = n
    }
    getBaseTarget(t) {
        var n;
        const {initial: r} = this.props;
        let i;
        if (typeof r == "string" || typeof r == "object") {
            const s = Qa(this.props, r, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
            s && (i = s[t])
        }
        if (r && i !== void 0)
            return i;
        const o = this.getBaseTargetFromProps(this.props, t);
        return o !== void 0 && !me(o) ? o : this.initialValues[t] !== void 0 && i === void 0 ? void 0 : this.baseTarget[t]
    }
    on(t, n) {
        return this.events[t] || (this.events[t] = new lu),
        this.events[t].add(n)
    }
    notify(t, ...n) {
        this.events[t] && this.events[t].notify(...n)
    }
}
class jm extends jw {
    constructor() {
        super(...arguments),
        this.KeyframeResolver = tm
    }
    sortInstanceNodePosition(t, n) {
        return t.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(t, n) {
        return t.style ? t.style[n] : void 0
    }
    removeValueFromRenderState(t, {vars: n, style: r}) {
        delete n[t],
        delete r[t]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: t} = this.props;
        me(t) && (this.childSubscription = t.on("change", n => {
            this.current && (this.current.textContent = `${n}`)
        }
        ))
    }
}
function Nw(e) {
    return window.getComputedStyle(e)
}
class Lw extends jm {
    constructor() {
        super(...arguments),
        this.type = "html",
        this.renderInstance = yp
    }
    readValueFromInstance(t, n) {
        if (fn.has(n)) {
            const r = du(n);
            return r && r.default || 0
        } else {
            const r = Nw(t)
              , i = (pp(n) ? r.getPropertyValue(n) : r[n]) || 0;
            return typeof i == "string" ? i.trim() : i
        }
    }
    measureInstanceViewportBox(t, {transformPagePoint: n}) {
        return vm(t, n)
    }
    build(t, n, r) {
        Za(t, n, r.transformTemplate)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return eu(t, n, r)
    }
}
class Rw extends jm {
    constructor() {
        super(...arguments),
        this.type = "svg",
        this.isSVGTag = !1,
        this.measureInstanceViewportBox = Z
    }
    getBaseTargetFromProps(t, n) {
        return t[n]
    }
    readValueFromInstance(t, n) {
        if (fn.has(n)) {
            const r = du(n);
            return r && r.default || 0
        }
        return n = vp.has(n) ? n : Wa(n),
        t.getAttribute(n)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return Sp(t, n, r)
    }
    build(t, n, r) {
        qa(t, n, this.isSVGTag, r.transformTemplate)
    }
    renderInstance(t, n, r, i) {
        xp(t, n, r, i)
    }
    mount(t) {
        this.isSVGTag = ba(t.tagName),
        super.mount(t)
    }
}
const Dw = (e, t) => Ka(e) ? new Rw(t) : new Lw(t,{
    allowProjection: e !== M.Fragment
})
  , Vw = s0({
    ...ix,
    ...Cw,
    ...hw,
    ...Pw
}, Dw)
  , ae = Sv(Vw)
  , Ye = {
    ca: "EQA69Mhu92OBCtAse0SJbv3_3VpiVV10d5vLUw_3Bg8Myt_0",
    telegram: "https://t.me/GNGRAMCTO",
    twitter: "https://x.com/gramnight_ton",
    buy: "https://t.me/redotrade?start=L4QBhMnv_EQA69Mhu92OBCtAse0SJbv3_3VpiVV10d5vLUw_3Bg8Myt_0"
}
  , Rs = [{
    code: "en",
    label: "English",
    short: "EN"
}, {
    code: "ru",
    label: "Русский",
    short: "RU"
}, {
    code: "zh",
    label: "中文",
    short: "中文"
}]
  , Ow = {
    en: {
        nav: {
            lore: "Lore",
            contract: "Contract",
            community: "Community",
            buy: "Buy $GN"
        },
        hero: {
            badge: "$GN = Gram Night",
            titleTop: "Gram",
            titleBottom: "Night",
            subtitle: "The grind doesn't stop when the sun goes down. The world goes to sleep, but the real ones say Gram Night. $GN completes the cycle born from TON becoming GRAM",
            quote: "Freedom is not just a right. It's the foundation we build the future on.",
            quoteAuthor: "Pavel Durov",
            buy: "Buy $GN",
            telegram: "Telegram",
            twitter: "Twitter",
            scroll: "Scroll to wake up"
        },
        lore: {
            eyebrow: "The Narrative",
            title: "From GM to GN: The Cycle is Complete",
            lead: "A whole movement woke up with GM, but the real ones stay up for GN. Here is how Gram Night balances the ecosystem and completes the loop.",
            cards: [{
                tag: "01",
                title: "GRAM Never Sleeps",
                text: "The TON community reclaimed the name GRAM — a nod to Telegram's original dream. But a global, decentralized ecosystem runs 24/7. When the sun sets, the real work begins."
            }, {
                tag: "02",
                title: "A new way to say GN",
                text: `The crypto grind is relentless. While half the world wakes up to say "GM", the night owls are charting, building, and hunting alpha. We needed our own sign-off: Gram Night.`
            }, {
                tag: "03",
                title: "$GN is born",
                text: "$GN turns the midnight shift into a movement. It is the yin to $GM's yang — a culture token, a late-night meme, and a community ritual that completes the daily cycle of the TON ecosystem."
            }, {
                tag: "04",
                title: "More than a coin",
                text: "Gram Night is not just a token — it is the missing piece of the GRAM era. A shared midnight ritual, a tribute to the late-night degens, and the cultural layer that proves our movement never rests."
            }]
        },
        contract: {
            eyebrow: "Contract Address",
            title: "Verify before you GN",
            lead: "This is the only official $GN contract on TON. Always double-check it before buying.",
            label: "Official CA",
            copy: "Copy",
            copied: "Copied!",
            hint: "Tip: the address starts with EQA69 and ends with yt_0."
        },
        community: {
            eyebrow: "Join the Movement",
            title: "Say it with us",
            lead: "The whole point of $GN is the people. Hop in, post a night sky, and end your day the Gram way",
            tgTitle: "Telegram Community",
            tgText: "Gram Night ($GN) chat — late-night memes, midnight alpha, and a global good night.",
            tgCta: "Open Telegram",
            xTitle: "Twitter / X",
            xText: "Follow @gramnight_ton for the freshest GNs, midnight drops and narrative updates.",
            xCta: "Follow on X"
        },
        footer: {
            tagline: "$GN = Gram Night",
            disclaimer: "$GN is a community meme coin with no intrinsic value or expectation of financial return. Nothing here is financial advice. Crypto is risky — always do your own research (DYOR).",
            rights: "Made with love by the Gram Night community."
        }
    },
    ru: {
        nav: {
            lore: "Лор",
            contract: "Контракт",
            community: "Комьюнити",
            buy: "Купить $GN"
        },
        hero: {
            badge: "$GN = Gram Night",
            titleTop: "Gram",
            titleBottom: "Night",
            subtitle: "Гринд не останавливается после захода солнца. Мир засыпает, но настоящие криптаны говорят Gram Night. $GN завершает цикл, рождённый из переименования TON в GRAM.",
            quote: "Свобода — это не просто право. Это фундамент, на котором мы строим будущее.",
            quoteAuthor: "Павел Дуров",
            buy: "Купить $GN",
            telegram: "Телеграм",
            twitter: "Твиттер",
            scroll: "Листай, чтобы проснуться"
        },
        lore: {
            eyebrow: "Нарратив",
            title: "От GM к GN: Цикл замкнулся",
            lead: "Целое движение проснулось с GM, но настоящие остаются на ногах ради GN. Вот как Gram Night балансирует экосистему и замыкает круг.",
            cards: [{
                tag: "01",
                title: "GRAM никогда не спит",
                text: "Сообщество TON вернуло имя GRAM — отсылка к изначальной мечте Telegram. Но глобальная децентрализованная экосистема работает 24/7. Когда солнце садится, начинается настоящая работа."
            }, {
                tag: "02",
                title: "Новый способ сказать GN",
                text: `Крипто-гринд беспощаден. Пока половина мира просыпается, чтобы сказать «GM», "совы" строят графики, билдят и ищут альфу. Нам нужно было собственное прощание на ночь: Gram Night.`
            }, {
                tag: "03",
                title: "Рождается $GN",
                text: "$GN превращает ночную смену в движение. Это инь для ян $GM: культурный токен, ночной мем и ритуал комьюнити, который завершает ежедневный цикл экосистемы TON."
            }, {
                tag: "04",
                title: "Больше, чем монета",
                text: "Gram Night — это не просто токен, это недостающий пазл эпохи GRAM. Общий ночной ритуал, дань уважения ночным дегенам и культурный слой, доказывающий, что наше движение никогда не отдыхает."
            }]
        },
        contract: {
            eyebrow: "Адрес контракта",
            title: "Проверь, прежде чем сказать GN",
            lead: "Это единственный официальный контракт $GN на TON. Всегда перепроверяй его перед покупкой.",
            label: "Официальный CA",
            copy: "Копировать",
            copied: "Скопировано!",
            hint: "Подсказка: адрес начинается на EQA69 и заканчивается на yt_0."
        },
        community: {
            eyebrow: "Присоединяйся",
            title: "Скажи это вместе с нами",
            lead: "Весь смысл $GN — это люди. Заходи, выложи ночное небо и заверши свой день по-граммовски.",
            tgTitle: "Телеграм-комьюнити",
            tgText: "Чат Gram Night ($GN) — ночные мемы, полуночная альфа и общее «спокойной ночи»",
            tgCta: "Открыть Телеграм",
            xTitle: "Твиттер / X",
            xText: "Подписывайся на @gramnight_ton — свежие GN, полуночные дропы и обновления нарратива.",
            xCta: "Подписаться в X"
        },
        footer: {
            tagline: "$GN = Gram Night",
            disclaimer: "$GN — это комьюнити-мем-коин без внутренней ценности и ожиданий финансовой выгоды. Здесь нет финансовых советов. Крипта рискованна — всегда проводи собственное исследование (DYOR).",
            rights: "Сделано с любовью сообществом Gram Night."
        }
    },
    zh: {
        nav: {
            lore: "叙事",
            contract: "合约",
            community: "社区",
            buy: "购买 $GN"
        },
        hero: {
            badge: "$GN = Gram Night",
            titleTop: "Gram",
            titleBottom: "Night",
            subtitle: "当太阳下山，建设永不停歇。世界在沉睡，真正的信仰者互道 Gram Night。$GN 完美闭环了 TON 蜕变为 GRAM 的史诗。",
            quote: "自由不仅是一种权利，更是我们建设未来的基石。",
            quoteAuthor: "帕维尔·杜罗夫",
            buy: "购买 $GN",
            telegram: "Telegram",
            twitter: "Twitter",
            scroll: "向下滑动，醒来吧"
        },
        lore: {
            eyebrow: "叙事",
            title: "从 GM 到 GN：完美的生态闭环",
            lead: "整个运动随着 GM 苏醒，但真正的信徒为了 GN 彻夜长明。这就是 Gram Night 如何平衡生态系统并完成闭环的故事。",
            cards: [{
                tag: "01",
                title: "GRAM 永不眠",
                text: "TON 社区重新唤醒了 GRAM 这个名字——这是对 Telegram 最初梦想的致敬。但一个全球化、去中心化的生态系统是 24/7 全天候运转的。当夕阳西下，真正的建设才刚刚开始。"
            }, {
                tag: "02",
                title: "互道 GN 的新方式",
                text: "加密世界的内卷从未停止。当半个世界醒来互道“GM”时，夜猫子们正在看盘、建设、寻找 Alpha。我们需要属于自己的晚安问候：Gram Night。"
            }, {
                tag: "03",
                title: "$GN 应运而生",
                text: "$GN 将“午夜轮班”变成了一场运动。它是 $GM 的太极阴面——一个文化代币，一个深夜 Meme，也是一个完善 TON 生态日常闭环的社区仪式。"
            }, {
                tag: "04",
                title: "不仅仅是代币",
                text: "Gram Night 不仅仅是一个代币，它是 GRAM 时代缺失的最后拼图。一个共享的午夜仪式，致敬深夜 Degen，更是证明我们这场运动永不止息的文化底色。"
            }]
        },
        contract: {
            eyebrow: "合约地址",
            title: "GN 之前，请先验证",
            lead: "这是 TON 上唯一官方的 $GN 合约。购买前请务必仔细核对，这样您才能安心入睡。",
            label: "官方合约地址",
            copy: "复制",
            copied: "已复制！",
            hint: "提示：地址以 EQA69 开头，以 yt_0 结尾。"
        },
        community: {
            eyebrow: "加入运动",
            title: "和我们一起发声",
            lead: "$GN 的核心在于社区力量。加入我们，发一张夜空的照片，用属于 Gram 的方式结束你的一天。",
            tgTitle: "Telegram 社区",
            tgText: "Gram Night ($GN) 聊天群 —— 深夜 Meme、午夜 Alpha 以及全球互道晚安。",
            tgCta: "打开 Telegram",
            xTitle: "Twitter / X",
            xText: "关注 @gramnight_ton，获取最新的 GN 问候、午夜空投及叙事更新。",
            xCta: "在 X 上关注"
        },
        footer: {
            tagline: "$GN = Gram Night",
            disclaimer: "$GN 是一种社区梗币，没有内在价值，也不应期待任何财务回报。本页内容不构成任何财务建议。加密货币风险高——请务必自行研究（DYOR）。",
            rights: "由 Gram Night 社区用心打造。"
        }
    }
}
  , Nm = M.createContext(null)
  , Lm = ["en", "ru", "zh"];
function Fw() {
    if (typeof window > "u")
        return "en";
    const e = window.localStorage.getItem("gm-lang");
    if (Lm.includes(e))
        return e;
    const t = (navigator.language || "en").toLowerCase();
    return t.startsWith("ru") ? "ru" : t.startsWith("zh") ? "zh" : "en"
}
function Iw({children: e}) {
    const [t,n] = M.useState(Fw);
    M.useEffect( () => {
        window.localStorage.setItem("gm-lang", t),
        document.documentElement.lang = t
    }
    , [t]);
    const i = {
        lang: t,
        setLang: o => {
            Lm.includes(o) && n(o)
        }
        ,
        t: Ow[t]
    };
    return y.jsx(Nm.Provider, {
        value: i,
        children: e
    })
}
function qn() {
    const e = M.useContext(Nm);
    if (!e)
        throw new Error("useLang must be used within LangProvider");
    return e
}
function ko({size: e=48, className: t}) {
    return y.jsxs("svg", {
        width: e,
        height: e,
        viewBox: "0 0 64 64",
        fill: "none",
        className: t,
        "aria-hidden": "true",
        children: [y.jsxs("defs", {
            children: [y.jsxs("linearGradient", {
                id: "gm-d-top",
                x1: "0",
                y1: "0",
                x2: "1",
                y2: "1",
                children: [y.jsx("stop", {
                    offset: "0",
                    stopColor: "#dff1ff"
                }), y.jsx("stop", {
                    offset: "1",
                    stopColor: "#7cc4ff"
                })]
            }), y.jsxs("linearGradient", {
                id: "gm-d-body",
                x1: "0",
                y1: "0",
                x2: "0.5",
                y2: "1",
                children: [y.jsx("stop", {
                    offset: "0",
                    stopColor: "#4ea8ff"
                }), y.jsx("stop", {
                    offset: "1",
                    stopColor: "#1f5fc0"
                })]
            }), y.jsxs("linearGradient", {
                id: "gm-d-side",
                x1: "1",
                y1: "0",
                x2: "0",
                y2: "1",
                children: [y.jsx("stop", {
                    offset: "0",
                    stopColor: "#2a6fd6"
                }), y.jsx("stop", {
                    offset: "1",
                    stopColor: "#0e3a82"
                })]
            })]
        }), y.jsx("path", {
            d: "M32 8 L52 26 L32 30 L12 26 Z",
            fill: "url(#gm-d-top)"
        }), y.jsx("path", {
            d: "M12 26 L32 30 L32 58 Z",
            fill: "url(#gm-d-body)"
        }), y.jsx("path", {
            d: "M52 26 L32 30 L32 58 Z",
            fill: "url(#gm-d-side)"
        }), y.jsx("path", {
            d: "M22 17 L32 8 L42 17 L32 30 Z",
            fill: "#ffffff",
            opacity: "0.35"
        })]
    })
}
function Co(e) {
    return y.jsx("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ...e,
        children: y.jsx("path", {
            d: "M21.94 4.6 18.9 19.2c-.23 1.02-.84 1.27-1.7.79l-4.7-3.46-2.27 2.18c-.25.25-.46.46-.94.46l.33-4.78L18.4 6.1c.38-.34-.08-.53-.59-.19L6.05 13.5l-4.7-1.47c-1.02-.32-1.04-1.02.21-1.51l18.4-7.1c.85-.31 1.6.2 1.32 1.18z"
        })
    })
}
function yu(e) {
    return y.jsx("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ...e,
        children: y.jsx("path", {
            d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        })
    })
}
function zw(e) {
    return y.jsxs("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...e,
        children: [y.jsx("rect", {
            x: "9",
            y: "9",
            width: "13",
            height: "13",
            rx: "2"
        }), y.jsx("path", {
            d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
        })]
    })
}
function Rm(e) {
    return y.jsx("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2.4",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...e,
        children: y.jsx("path", {
            d: "M20 6 9 17l-5-5"
        })
    })
}
function Dm(e) {
    return y.jsx("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...e,
        children: y.jsx("path", {
            d: "M5 12h14M13 6l6 6-6 6"
        })
    })
}
function Bw(e) {
    return y.jsxs("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...e,
        children: [y.jsx("circle", {
            cx: "12",
            cy: "12",
            r: "9"
        }), y.jsx("path", {
            d: "M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18"
        })]
    })
}
function Uw(e) {
    return y.jsx("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...e,
        children: y.jsx("path", {
            d: "m6 9 6 6 6-6"
        })
    })
}
function $w() {
    const {t: e, lang: t, setLang: n} = qn()
      , [r,i] = M.useState(!1)
      , [o,s] = M.useState(!1)
      , [l,a] = M.useState(!1)
      , u = M.useRef(null);
    M.useEffect( () => {
        const g = () => i(window.scrollY > 20);
        return g(),
        window.addEventListener("scroll", g, {
            passive: !0
        }),
        () => window.removeEventListener("scroll", g)
    }
    , []),
    M.useEffect( () => {
        const g = v => {
            u.current && !u.current.contains(v.target) && a(!1)
        }
        ;
        return document.addEventListener("mousedown", g),
        () => document.removeEventListener("mousedown", g)
    }
    , []);
    const c = () => s(!1)
      , f = Rs.find(g => g.code === t) || Rs[0]
      , d = g => {
        n(g),
        a(!1)
    }
    ;
    return y.jsx(ae.header, {
        className: `nav ${r ? "nav--scrolled" : ""}`,
        initial: {
            y: -80,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1
        },
        transition: {
            duration: .6,
            ease: "easeOut"
        },
        children: y.jsxs("div", {
            className: "container nav__inner",
            children: [y.jsxs("a", {
                href: "#top",
                className: "nav__brand",
                onClick: c,
                children: [y.jsx(ko, {
                    size: 30,
                    className: "nav__diamond"
                }), y.jsx("span", {
                    className: "nav__logo gold-text",
                    children: "GN"
                })]
            }), y.jsxs("nav", {
                className: `nav__links ${o ? "nav__links--open" : ""}`,
                children: [y.jsx("a", {
                    href: "#lore",
                    onClick: c,
                    children: e.nav.lore
                }), y.jsx("a", {
                    href: "#contract",
                    onClick: c,
                    children: e.nav.contract
                }), y.jsx("a", {
                    href: "#community",
                    onClick: c,
                    children: e.nav.community
                }), y.jsx("a", {
                    className: "nav__buy btn btn-primary",
                    href: Ye.buy,
                    target: "_blank",
                    rel: "noreferrer",
                    onClick: c,
                    children: e.nav.buy
                })]
            }), y.jsxs("div", {
                className: "nav__actions",
                children: [y.jsxs("div", {
                    className: "nav__lang-wrap",
                    ref: u,
                    children: [y.jsxs("button", {
                        className: `nav__lang ${l ? "is-open" : ""}`,
                        onClick: () => a(g => !g),
                        "aria-label": "Select language",
                        "aria-haspopup": "listbox",
                        "aria-expanded": l,
                        children: [y.jsx(Bw, {
                            className: "nav__lang-globe"
                        }), y.jsx("span", {
                            className: "nav__lang-current",
                            children: f.short
                        }), y.jsx(Uw, {
                            className: "nav__lang-chevron"
                        })]
                    }), y.jsx(hv, {
                        children: l && y.jsx(ae.ul, {
                            className: "nav__lang-menu",
                            role: "listbox",
                            initial: {
                                opacity: 0,
                                y: -8,
                                scale: .96
                            },
                            animate: {
                                opacity: 1,
                                y: 0,
                                scale: 1
                            },
                            exit: {
                                opacity: 0,
                                y: -8,
                                scale: .96
                            },
                            transition: {
                                duration: .16,
                                ease: "easeOut"
                            },
                            children: Rs.map(g => y.jsx("li", {
                                children: y.jsxs("button", {
                                    className: `nav__lang-option ${g.code === t ? "is-active" : ""}`,
                                    role: "option",
                                    "aria-selected": g.code === t,
                                    onClick: () => d(g.code),
                                    children: [y.jsx("span", {
                                        children: g.label
                                    }), g.code === t && y.jsx(Rm, {
                                        className: "nav__lang-check"
                                    })]
                                })
                            }, g.code))
                        })
                    })]
                }), y.jsxs("button", {
                    className: `nav__burger ${o ? "is-open" : ""}`,
                    onClick: () => s(g => !g),
                    "aria-label": "Menu",
                    children: [y.jsx("span", {}), y.jsx("span", {}), y.jsx("span", {})]
                })]
            })]
        })
    })
}
const Gw = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: .12,
            delayChildren: .1
        }
    }
}
  , ar = {
    hidden: {
        opacity: 0,
        y: 24
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .6,
            ease: "easeOut"
        }
    }
};
function Ww() {
    const {t: e} = qn();
    return y.jsxs("section", {
        className: "hero",
        id: "top",
        children: [y.jsxs("div", {
            className: "hero__sky",
            "aria-hidden": "true",
            children: [y.jsx("div", {
                className: "hero__stars"
            }), y.jsx(ae.div, {
                className: "hero__sun",
                initial: {
                    y: 160,
                    opacity: 0,
                    scale: .8
                },
                animate: {
                    y: 0,
                    opacity: 1,
                    scale: 1
                },
                transition: {
                    duration: 1.8,
                    ease: "easeOut"
                }
            }), y.jsx("div", {
                className: "hero__hills"
            }), y.jsx("div", {
                className: "hero__hills hero__hills--back"
            })]
        }), y.jsxs("div", {
            className: "container hero__inner",
            children: [y.jsxs(ae.div, {
                className: "hero__content",
                variants: Gw,
                initial: "hidden",
                animate: "show",
                children: [y.jsx(ae.span, {
                    className: "hero__badge",
                    variants: ar,
                    children: e.hero.badge
                }), y.jsxs(ae.h1, {
                    className: "hero__title",
                    variants: ar,
                    children: [y.jsxs("span", {
                        className: "hero__title-row",
                        children: [y.jsx(ae.span, {
                            className: "hero__diamond",
                            animate: {
                                y: [0, -10, 0]
                            },
                            transition: {
                                duration: 4,
                                repeat: 1 / 0,
                                ease: "easeInOut"
                            },
                            children: y.jsx(ko, {
                                size: 72
                            })
                        }), y.jsx("span", {
                            className: "gold-text",
                            children: e.hero.titleTop
                        })]
                    }), y.jsx("span", {
                        className: "gold-text hero__title-bottom",
                        children: e.hero.titleBottom
                    })]
                }), y.jsx(ae.p, {
                    className: "hero__subtitle",
                    variants: ar,
                    children: e.hero.subtitle
                }), y.jsxs(ae.div, {
                    className: "hero__actions",
                    variants: ar,
                    children: [y.jsxs("a", {
                        className: "btn btn-primary",
                        href: Ye.buy,
                        target: "_blank",
                        rel: "noreferrer",
                        children: [e.hero.buy, y.jsx(Dm, {})]
                    }), y.jsxs("a", {
                        className: "btn btn-ghost",
                        href: Ye.telegram,
                        target: "_blank",
                        rel: "noreferrer",
                        children: [y.jsx(Co, {}), e.hero.telegram]
                    }), y.jsxs("a", {
                        className: "btn btn-ghost",
                        href: Ye.twitter,
                        target: "_blank",
                        rel: "noreferrer",
                        children: [y.jsx(yu, {}), e.hero.twitter]
                    })]
                }), y.jsxs(ae.figure, {
                    className: "hero__quote",
                    variants: ar,
                    children: [y.jsxs("blockquote", {
                        children: ['"', e.hero.quote, '"']
                    }), y.jsxs("figcaption", {
                        children: [y.jsx(Co, {
                            className: "hero__quote-icon"
                        }), e.hero.quoteAuthor]
                    })]
                })]
            }), y.jsxs(ae.div, {
                className: "hero__visual",
                initial: {
                    opacity: 0,
                    scale: .94
                },
                animate: {
                    opacity: 1,
                    scale: 1
                },
                transition: {
                    duration: 1,
                    delay: .3,
                    ease: "easeOut"
                },
                children: [y.jsx("div", {
                    className: "hero__visual-glow"
                }), y.jsx("img", {
                    src: "./assets/imgs/GNbackground.jpg",
                    alt: "Gram Night $GN brand artwork",
                    loading: "eager"
                }), y.jsxs("div", {
                    className: "hero__ticker",
                    children: [y.jsx(ko, {
                        size: 26
                    }), y.jsxs("div", {
                        children: [y.jsx("strong", {
                            children: "$GN"
                        }), y.jsx("span", {
                            children: "Gram Night"
                        })]
                    })]
                })]
            })]
        }), y.jsxs("div", {
            className: "hero__scroll",
            children: [y.jsx("span", {
                children: e.hero.scroll
            }), y.jsx("div", {
                className: "hero__scroll-line"
            })]
        })]
    })
}
const Hw = {
    hidden: {
        opacity: 0,
        y: 30
    },
    show: e => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: .55,
            ease: "easeOut",
            delay: e * .08
        }
    })
};
function Kw() {
    const {t: e} = qn();
    return y.jsxs("section", {
        className: "lore section-pad",
        id: "lore",
        children: [y.jsx("div", {
            className: "glow-divider"
        }), y.jsxs("div", {
            className: "container",
            children: [y.jsxs(ae.div, {
                className: "lore__head",
                initial: {
                    opacity: 0,
                    y: 24
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0,
                    amount: .4
                },
                transition: {
                    duration: .6
                },
                children: [y.jsx("span", {
                    className: "eyebrow",
                    children: e.lore.eyebrow
                }), y.jsx("h2", {
                    className: "section-title",
                    children: e.lore.title
                }), y.jsx("p", {
                    className: "section-lead",
                    children: e.lore.lead
                })]
            }), y.jsx("div", {
                className: "lore__grid",
                children: e.lore.cards.map( (t, n) => y.jsxs(ae.article, {
                    className: "lore__card card",
                    custom: n,
                    variants: Hw,
                    initial: "hidden",
                    whileInView: "show",
                    viewport: {
                        once: !0,
                        amount: .3
                    },
                    children: [y.jsx("span", {
                        className: "lore__tag",
                        children: t.tag
                    }), y.jsx("h3", {
                        children: t.title
                    }), y.jsx("p", {
                        children: t.text
                    })]
                }, t.tag))
            }), y.jsxs(ae.div, {
                className: "lore__equation",
                initial: {
                    opacity: 0,
                    scale: .9
                },
                whileInView: {
                    opacity: 1,
                    scale: 1
                },
                viewport: {
                    once: !0,
                    amount: .6
                },
                transition: {
                    duration: .6
                },
                children: [y.jsx("span", {
                    className: "gold-text",
                    children: "$GN"
                }), y.jsx("span", {
                    className: "lore__equals",
                    children: "="
                }), y.jsx("span", {
                    className: "gold-text",
                    children: "Gram Night"
                })]
            })]
        })]
    })
}
function Qw() {
    const {t: e} = qn()
      , [t,n] = M.useState(!1)
      , r = async () => {
        try {
            await navigator.clipboard.writeText(Ye.ca)
        } catch {
            const i = document.createElement("textarea");
            i.value = Ye.ca,
            i.style.position = "fixed",
            i.style.opacity = "0",
            document.body.appendChild(i),
            i.select(),
            document.execCommand("copy"),
            document.body.removeChild(i)
        }
        n(!0),
        setTimeout( () => n(!1), 2e3)
    }
    ;
    return y.jsx("section", {
        className: "contract section-pad",
        id: "contract",
        children: y.jsx("div", {
            className: "container",
            children: y.jsxs(ae.div, {
                className: "contract__card card",
                initial: {
                    opacity: 0,
                    y: 30
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0,
                    amount: .4
                },
                transition: {
                    duration: .6
                },
                children: [y.jsxs("div", {
                    className: "contract__head",
                    children: [y.jsx("span", {
                        className: "eyebrow",
                        children: e.contract.eyebrow
                    }), y.jsx("h2", {
                        className: "section-title",
                        children: e.contract.title
                    }), y.jsx("p", {
                        className: "section-lead",
                        children: e.contract.lead
                    })]
                }), y.jsxs("div", {
                    className: "contract__box",
                    children: [y.jsx("span", {
                        className: "contract__label",
                        children: e.contract.label
                    }), y.jsxs("div", {
                        className: "contract__row",
                        children: [y.jsx("code", {
                            className: "contract__ca",
                            children: Ye.ca
                        }), y.jsxs("button", {
                            className: `contract__copy ${t ? "is-copied" : ""}`,
                            onClick: r,
                            children: [t ? y.jsx(Rm, {}) : y.jsx(zw, {}), y.jsx("span", {
                                children: t ? e.contract.copied : e.contract.copy
                            })]
                        })]
                    })]
                }), y.jsx("p", {
                    className: "contract__hint",
                    children: e.contract.hint
                })]
            })
        })
    })
}
function Xw() {
    const {t: e} = qn()
      , t = [{
        key: "tg",
        icon: y.jsx(Co, {}),
        title: e.community.tgTitle,
        text: e.community.tgText,
        cta: e.community.tgCta,
        href: Ye.telegram,
        cls: "community__card--tg"
    }, {
        key: "x",
        icon: y.jsx(yu, {}),
        title: e.community.xTitle,
        text: e.community.xText,
        cta: e.community.xCta,
        href: Ye.twitter,
        cls: "community__card--x"
    }];
    return y.jsxs("section", {
        className: "community section-pad",
        id: "community",
        children: [y.jsx("div", {
            className: "glow-divider"
        }), y.jsxs("div", {
            className: "container",
            children: [y.jsxs(ae.div, {
                className: "community__head",
                initial: {
                    opacity: 0,
                    y: 24
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0,
                    amount: .4
                },
                transition: {
                    duration: .6
                },
                children: [y.jsx("span", {
                    className: "eyebrow",
                    children: e.community.eyebrow
                }), y.jsx("h2", {
                    className: "section-title",
                    children: e.community.title
                }), y.jsx("p", {
                    className: "section-lead",
                    children: e.community.lead
                })]
            }), y.jsx("div", {
                className: "community__grid",
                children: t.map( (n, r) => y.jsxs(ae.a, {
                    className: `community__card card ${n.cls}`,
                    href: n.href,
                    target: "_blank",
                    rel: "noreferrer",
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0,
                        amount: .3
                    },
                    transition: {
                        duration: .55,
                        delay: r * .1
                    },
                    children: [y.jsx("div", {
                        className: "community__icon",
                        children: n.icon
                    }), y.jsx("h3", {
                        children: n.title
                    }), y.jsx("p", {
                        children: n.text
                    }), y.jsxs("span", {
                        className: "community__cta",
                        children: [n.cta, y.jsx(Dm, {})]
                    })]
                }, n.key))
            })]
        })]
    })
}
function Yw() {
    const {t: e} = qn();
    return y.jsx("footer", {
        className: "footer",
        children: y.jsxs("div", {
            className: "container footer__inner",
            children: [y.jsxs("div", {
                className: "footer__top",
                children: [y.jsxs("a", {
                    href: "#top",
                    className: "footer__brand",
                    children: [y.jsx(ko, {
                        size: 28
                    }), y.jsx("span", {
                        className: "gold-text",
                        children: "GN"
                    })]
                }), y.jsx("p", {
                    className: "footer__tagline",
                    children: e.footer.tagline
                }), y.jsxs("div", {
                    className: "footer__socials",
                    children: [y.jsx("a", {
                        href: Ye.telegram,
                        target: "_blank",
                        rel: "noreferrer",
                        "aria-label": "Telegram",
                        children: y.jsx(Co, {})
                    }), y.jsx("a", {
                        href: Ye.twitter,
                        target: "_blank",
                        rel: "noreferrer",
                        "aria-label": "Twitter",
                        children: y.jsx(yu, {})
                    })]
                })]
            }), y.jsxs("div", {
                className: "footer__bottom",
                children: [y.jsxs("span", {
                    children: ["© ", new Date().getFullYear(), " $GN"]
                }), y.jsx("span", {
                    children: e.footer.rights
                })]
            })]
        })
    })
}
function Zw() {
    return y.jsxs(y.Fragment, {
        children: [y.jsx($w, {}), y.jsxs("main", {
            children: [y.jsx(Ww, {}), y.jsx(Kw, {}), y.jsx(Qw, {}), y.jsx(Xw, {})]
        }), y.jsx(Yw, {})]
    })
}
Ds.createRoot(document.getElementById("root")).render(y.jsx(qm.StrictMode, {
    children: y.jsx(Iw, {
        children: y.jsx(Zw, {})
    })
}));
