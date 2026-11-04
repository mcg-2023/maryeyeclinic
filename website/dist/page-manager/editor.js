// \0rolldown/runtime.js
var e = Object.create, t = Object.defineProperty, n = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, i = Object.getPrototypeOf, a = Object.prototype.hasOwnProperty, o = (e, t) => () => (t || (e((t = { exports: {} }).exports, t, t.exports), e = null), t.exports), s = (e, n) => {
	let r = {};
	for (var i in e) t(r, i, {
		get: e[i],
		enumerable: !0
	});
	return n || t(r, Symbol.toStringTag, { value: "Module" }), r;
}, c = (e, i, o, s) => {
	if (i && typeof i == "object" || typeof i == "function") for (var c = r(i), l = 0, u = c.length, d; l < u; l++) d = c[l], !a.call(e, d) && d !== o && t(e, d, {
		get: ((e) => i[e]).bind(null, d),
		enumerable: !(s = n(i, d)) || s.enumerable
	});
	return e;
}, l = (n, r, o) => (o = n == null ? {} : e(i(n)), c(r || !n || !n.__esModule || !a.call(n, "default") ? t(o, "default", {
	value: n,
	enumerable: !0
}) : o, n)), u = typeof global == "object" && global && global.Object === Object && global, d = typeof self == "object" && self && self.Object === Object && self, f = u || d || Function("return this")(), p = f.Symbol, m = Object.prototype, h = m.hasOwnProperty, g = m.toString, _ = p ? p.toStringTag : void 0;
function v(e) {
	var t = h.call(e, _), n = e[_];
	try {
		e[_] = void 0;
		var r = !0;
	} catch {}
	var i = g.call(e);
	return r && (t ? e[_] = n : delete e[_]), i;
}
// node_modules/lodash-es/_objectToString.js
var y = Object.prototype.toString;
function b(e) {
	return y.call(e);
}
// node_modules/lodash-es/_baseGetTag.js
var x = "[object Null]", S = "[object Undefined]", C = p ? p.toStringTag : void 0;
function w(e) {
	return e == null ? e === void 0 ? S : x : C && C in Object(e) ? v(e) : b(e);
}
// node_modules/lodash-es/isObjectLike.js
function T(e) {
	return typeof e == "object" && !!e;
}
// node_modules/lodash-es/isArray.js
var E = Array.isArray;
// node_modules/lodash-es/isObject.js
function D(e) {
	var t = typeof e;
	return e != null && (t == "object" || t == "function");
}
// node_modules/lodash-es/identity.js
function O(e) {
	return e;
}
// node_modules/lodash-es/isFunction.js
var ee = "[object AsyncFunction]", te = "[object Function]", ne = "[object GeneratorFunction]", k = "[object Proxy]";
function A(e) {
	if (!D(e)) return !1;
	var t = w(e);
	return t == te || t == ne || t == ee || t == k;
}
// node_modules/lodash-es/_coreJsData.js
var re = f["__core-js_shared__"], j = function() {
	var e = /[^.]+$/.exec(re && re.keys && re.keys.IE_PROTO || "");
	return e ? "Symbol(src)_1." + e : "";
}();
function ie(e) {
	return !!j && j in e;
}
// node_modules/lodash-es/_toSource.js
var ae = Function.prototype.toString;
function M(e) {
	if (e != null) {
		try {
			return ae.call(e);
		} catch {}
		try {
			return e + "";
		} catch {}
	}
	return "";
}
// node_modules/lodash-es/_baseIsNative.js
var N = /[\\^$.*+?()[\]{}|]/g, oe = /^\[object .+?Constructor\]$/, se = Function.prototype, ce = Object.prototype, le = se.toString, ue = ce.hasOwnProperty, de = RegExp("^" + le.call(ue).replace(N, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function fe(e) {
	return !D(e) || ie(e) ? !1 : (A(e) ? de : oe).test(M(e));
}
// node_modules/lodash-es/_getValue.js
function pe(e, t) {
	return e?.[t];
}
// node_modules/lodash-es/_getNative.js
function me(e, t) {
	var n = pe(e, t);
	return fe(n) ? n : void 0;
}
// node_modules/lodash-es/_WeakMap.js
var he = me(f, "WeakMap"), ge = Object.create, _e = function() {
	function e() {}
	return function(t) {
		if (!D(t)) return {};
		if (ge) return ge(t);
		e.prototype = t;
		var n = new e();
		return e.prototype = void 0, n;
	};
}();
// node_modules/lodash-es/_apply.js
function ve(e, t, n) {
	switch (n.length) {
		case 0: return e.call(t);
		case 1: return e.call(t, n[0]);
		case 2: return e.call(t, n[0], n[1]);
		case 3: return e.call(t, n[0], n[1], n[2]);
	}
	return e.apply(t, n);
}
// node_modules/lodash-es/_copyArray.js
function ye(e, t) {
	var n = -1, r = e.length;
	for (t ||= Array(r); ++n < r;) t[n] = e[n];
	return t;
}
// node_modules/lodash-es/_shortOut.js
var be = 800, xe = 16, Se = Date.now;
function Ce(e) {
	var t = 0, n = 0;
	return function() {
		var r = Se(), i = xe - (r - n);
		if (n = r, i > 0) {
			if (++t >= be) return arguments[0];
		} else t = 0;
		return e.apply(void 0, arguments);
	};
}
// node_modules/lodash-es/constant.js
function we(e) {
	return function() {
		return e;
	};
}
// node_modules/lodash-es/_defineProperty.js
var Te = function() {
	try {
		var e = me(Object, "defineProperty");
		return e({}, "", {}), e;
	} catch {}
}(), Ee = Ce(Te ? function(e, t) {
	return Te(e, "toString", {
		configurable: !0,
		enumerable: !1,
		value: we(t),
		writable: !0
	});
} : O);
// node_modules/lodash-es/_arrayEach.js
function De(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1;);
	return e;
}
// node_modules/lodash-es/_isIndex.js
var Oe = 9007199254740991, ke = /^(?:0|[1-9]\d*)$/;
function Ae(e, t) {
	var n = typeof e;
	return t ??= Oe, !!t && (n == "number" || n != "symbol" && ke.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
// node_modules/lodash-es/_baseAssignValue.js
function je(e, t, n) {
	t == "__proto__" && Te ? Te(e, t, {
		configurable: !0,
		enumerable: !0,
		value: n,
		writable: !0
	}) : e[t] = n;
}
// node_modules/lodash-es/eq.js
function Me(e, t) {
	return e === t || e !== e && t !== t;
}
// node_modules/lodash-es/_assignValue.js
var Ne = Object.prototype.hasOwnProperty;
function Pe(e, t, n) {
	var r = e[t];
	(!(Ne.call(e, t) && Me(r, n)) || n === void 0 && !(t in e)) && je(e, t, n);
}
// node_modules/lodash-es/_copyObject.js
function Fe(e, t, n, r) {
	var i = !n;
	n ||= {};
	for (var a = -1, o = t.length; ++a < o;) {
		var s = t[a], c = r ? r(n[s], e[s], s, n, e) : void 0;
		c === void 0 && (c = e[s]), i ? je(n, s, c) : Pe(n, s, c);
	}
	return n;
}
// node_modules/lodash-es/_overRest.js
var Ie = Math.max;
function Le(e, t, n) {
	return t = Ie(t === void 0 ? e.length - 1 : t, 0), function() {
		for (var r = arguments, i = -1, a = Ie(r.length - t, 0), o = Array(a); ++i < a;) o[i] = r[t + i];
		i = -1;
		for (var s = Array(t + 1); ++i < t;) s[i] = r[i];
		return s[t] = n(o), ve(e, this, s);
	};
}
// node_modules/lodash-es/_baseRest.js
function Re(e, t) {
	return Ee(Le(e, t, O), e + "");
}
// node_modules/lodash-es/isLength.js
var ze = 9007199254740991;
function Be(e) {
	return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ze;
}
// node_modules/lodash-es/isArrayLike.js
function Ve(e) {
	return e != null && Be(e.length) && !A(e);
}
// node_modules/lodash-es/_isIterateeCall.js
function He(e, t, n) {
	if (!D(n)) return !1;
	var r = typeof t;
	return (r == "number" ? Ve(n) && Ae(t, n.length) : r == "string" && t in n) ? Me(n[t], e) : !1;
}
// node_modules/lodash-es/_createAssigner.js
function Ue(e) {
	return Re(function(t, n) {
		var r = -1, i = n.length, a = i > 1 ? n[i - 1] : void 0, o = i > 2 ? n[2] : void 0;
		for (a = e.length > 3 && typeof a == "function" ? (i--, a) : void 0, o && He(n[0], n[1], o) && (a = i < 3 ? void 0 : a, i = 1), t = Object(t); ++r < i;) {
			var s = n[r];
			s && e(t, s, r, a);
		}
		return t;
	});
}
// node_modules/lodash-es/_isPrototype.js
var We = Object.prototype;
function Ge(e) {
	var t = e && e.constructor;
	return e === (typeof t == "function" && t.prototype || We);
}
// node_modules/lodash-es/_baseTimes.js
function Ke(e, t) {
	for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
	return r;
}
// node_modules/lodash-es/_baseIsArguments.js
var qe = "[object Arguments]";
function Je(e) {
	return T(e) && w(e) == qe;
}
// node_modules/lodash-es/isArguments.js
var Ye = Object.prototype, Xe = Ye.hasOwnProperty, Ze = Ye.propertyIsEnumerable, Qe = Je(function() {
	return arguments;
}()) ? Je : function(e) {
	return T(e) && Xe.call(e, "callee") && !Ze.call(e, "callee");
};
// node_modules/lodash-es/stubFalse.js
function $e() {
	return !1;
}
// node_modules/lodash-es/isBuffer.js
var et = typeof exports == "object" && exports && !exports.nodeType && exports, tt = et && typeof module == "object" && module && !module.nodeType && module, nt = tt && tt.exports === et ? f.Buffer : void 0, rt = (nt ? nt.isBuffer : void 0) || $e, it = "[object Arguments]", at = "[object Array]", ot = "[object Boolean]", st = "[object Date]", ct = "[object Error]", lt = "[object Function]", ut = "[object Map]", dt = "[object Number]", ft = "[object Object]", pt = "[object RegExp]", mt = "[object Set]", ht = "[object String]", gt = "[object WeakMap]", _t = "[object ArrayBuffer]", vt = "[object DataView]", yt = "[object Float32Array]", bt = "[object Float64Array]", xt = "[object Int8Array]", St = "[object Int16Array]", Ct = "[object Int32Array]", wt = "[object Uint8Array]", Tt = "[object Uint8ClampedArray]", Et = "[object Uint16Array]", Dt = "[object Uint32Array]", P = {};
P[yt] = P[bt] = P[xt] = P[St] = P[Ct] = P[wt] = P[Tt] = P[Et] = P[Dt] = !0, P[it] = P[at] = P[_t] = P[ot] = P[vt] = P[st] = P[ct] = P[lt] = P[ut] = P[dt] = P[ft] = P[pt] = P[mt] = P[ht] = P[gt] = !1;
function Ot(e) {
	return T(e) && Be(e.length) && !!P[w(e)];
}
// node_modules/lodash-es/_baseUnary.js
function kt(e) {
	return function(t) {
		return e(t);
	};
}
// node_modules/lodash-es/_nodeUtil.js
var At = typeof exports == "object" && exports && !exports.nodeType && exports, jt = At && typeof module == "object" && module && !module.nodeType && module, Mt = jt && jt.exports === At && u.process, Nt = function() {
	try {
		return jt && jt.require && jt.require("util").types || Mt && Mt.binding && Mt.binding("util");
	} catch {}
}(), Pt = Nt && Nt.isTypedArray, Ft = Pt ? kt(Pt) : Ot, It = Object.prototype.hasOwnProperty;
function Lt(e, t) {
	var n = E(e), r = !n && Qe(e), i = !n && !r && rt(e), a = !n && !r && !i && Ft(e), o = n || r || i || a, s = o ? Ke(e.length, String) : [], c = s.length;
	for (var l in e) (t || It.call(e, l)) && !(o && (l == "length" || i && (l == "offset" || l == "parent") || a && (l == "buffer" || l == "byteLength" || l == "byteOffset") || Ae(l, c))) && s.push(l);
	return s;
}
// node_modules/lodash-es/_overArg.js
function Rt(e, t) {
	return function(n) {
		return e(t(n));
	};
}
// node_modules/lodash-es/_nativeKeys.js
var zt = Rt(Object.keys, Object), Bt = Object.prototype.hasOwnProperty;
function Vt(e) {
	if (!Ge(e)) return zt(e);
	var t = [];
	for (var n in Object(e)) Bt.call(e, n) && n != "constructor" && t.push(n);
	return t;
}
// node_modules/lodash-es/keys.js
function Ht(e) {
	return Ve(e) ? Lt(e) : Vt(e);
}
// node_modules/lodash-es/_nativeKeysIn.js
function Ut(e) {
	var t = [];
	if (e != null) for (var n in Object(e)) t.push(n);
	return t;
}
// node_modules/lodash-es/_baseKeysIn.js
var Wt = Object.prototype.hasOwnProperty;
function Gt(e) {
	if (!D(e)) return Ut(e);
	var t = Ge(e), n = [];
	for (var r in e) (r != "constructor" || !t && Wt.call(e, r)) && n.push(r);
	return n;
}
// node_modules/lodash-es/keysIn.js
function Kt(e) {
	return Ve(e) ? Lt(e, !0) : Gt(e);
}
// node_modules/lodash-es/_nativeCreate.js
var qt = me(Object, "create");
// node_modules/lodash-es/_hashClear.js
function Jt() {
	this.__data__ = qt ? qt(null) : {}, this.size = 0;
}
// node_modules/lodash-es/_hashDelete.js
function Yt(e) {
	var t = this.has(e) && delete this.__data__[e];
	return this.size -= +!!t, t;
}
// node_modules/lodash-es/_hashGet.js
var Xt = "__lodash_hash_undefined__", Zt = Object.prototype.hasOwnProperty;
function Qt(e) {
	var t = this.__data__;
	if (qt) {
		var n = t[e];
		return n === Xt ? void 0 : n;
	}
	return Zt.call(t, e) ? t[e] : void 0;
}
// node_modules/lodash-es/_hashHas.js
var $t = Object.prototype.hasOwnProperty;
function en(e) {
	var t = this.__data__;
	return qt ? t[e] !== void 0 : $t.call(t, e);
}
// node_modules/lodash-es/_hashSet.js
var tn = "__lodash_hash_undefined__";
function nn(e, t) {
	var n = this.__data__;
	return this.size += +!this.has(e), n[e] = qt && t === void 0 ? tn : t, this;
}
// node_modules/lodash-es/_Hash.js
function rn(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
rn.prototype.clear = Jt, rn.prototype.delete = Yt, rn.prototype.get = Qt, rn.prototype.has = en, rn.prototype.set = nn;
// node_modules/lodash-es/_listCacheClear.js
function an() {
	this.__data__ = [], this.size = 0;
}
// node_modules/lodash-es/_assocIndexOf.js
function on(e, t) {
	for (var n = e.length; n--;) if (Me(e[n][0], t)) return n;
	return -1;
}
// node_modules/lodash-es/_listCacheDelete.js
var sn = Array.prototype.splice;
function cn(e) {
	var t = this.__data__, n = on(t, e);
	return n < 0 ? !1 : (n == t.length - 1 ? t.pop() : sn.call(t, n, 1), --this.size, !0);
}
// node_modules/lodash-es/_listCacheGet.js
function ln(e) {
	var t = this.__data__, n = on(t, e);
	return n < 0 ? void 0 : t[n][1];
}
// node_modules/lodash-es/_listCacheHas.js
function un(e) {
	return on(this.__data__, e) > -1;
}
// node_modules/lodash-es/_listCacheSet.js
function dn(e, t) {
	var n = this.__data__, r = on(n, e);
	return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
// node_modules/lodash-es/_ListCache.js
function fn(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
fn.prototype.clear = an, fn.prototype.delete = cn, fn.prototype.get = ln, fn.prototype.has = un, fn.prototype.set = dn;
// node_modules/lodash-es/_Map.js
var pn = me(f, "Map");
// node_modules/lodash-es/_mapCacheClear.js
function mn() {
	this.size = 0, this.__data__ = {
		hash: new rn(),
		map: new (pn || fn)(),
		string: new rn()
	};
}
// node_modules/lodash-es/_isKeyable.js
function hn(e) {
	var t = typeof e;
	return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
// node_modules/lodash-es/_getMapData.js
function gn(e, t) {
	var n = e.__data__;
	return hn(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
// node_modules/lodash-es/_mapCacheDelete.js
function _n(e) {
	var t = gn(this, e).delete(e);
	return this.size -= +!!t, t;
}
// node_modules/lodash-es/_mapCacheGet.js
function vn(e) {
	return gn(this, e).get(e);
}
// node_modules/lodash-es/_mapCacheHas.js
function yn(e) {
	return gn(this, e).has(e);
}
// node_modules/lodash-es/_mapCacheSet.js
function bn(e, t) {
	var n = gn(this, e), r = n.size;
	return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
// node_modules/lodash-es/_MapCache.js
function xn(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
xn.prototype.clear = mn, xn.prototype.delete = _n, xn.prototype.get = vn, xn.prototype.has = yn, xn.prototype.set = bn;
// node_modules/lodash-es/_arrayPush.js
function Sn(e, t) {
	for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
	return e;
}
// node_modules/lodash-es/_getPrototype.js
var Cn = Rt(Object.getPrototypeOf, Object), wn = "[object Object]", Tn = Function.prototype, En = Object.prototype, Dn = Tn.toString, On = En.hasOwnProperty, kn = Dn.call(Object);
function An(e) {
	if (!T(e) || w(e) != wn) return !1;
	var t = Cn(e);
	if (t === null) return !0;
	var n = On.call(t, "constructor") && t.constructor;
	return typeof n == "function" && n instanceof n && Dn.call(n) == kn;
}
// node_modules/lodash-es/_stackClear.js
function jn() {
	this.__data__ = new fn(), this.size = 0;
}
// node_modules/lodash-es/_stackDelete.js
function Mn(e) {
	var t = this.__data__, n = t.delete(e);
	return this.size = t.size, n;
}
// node_modules/lodash-es/_stackGet.js
function Nn(e) {
	return this.__data__.get(e);
}
// node_modules/lodash-es/_stackHas.js
function Pn(e) {
	return this.__data__.has(e);
}
// node_modules/lodash-es/_stackSet.js
var Fn = 200;
function In(e, t) {
	var n = this.__data__;
	if (n instanceof fn) {
		var r = n.__data__;
		if (!pn || r.length < Fn - 1) return r.push([e, t]), this.size = ++n.size, this;
		n = this.__data__ = new xn(r);
	}
	return n.set(e, t), this.size = n.size, this;
}
// node_modules/lodash-es/_Stack.js
function Ln(e) {
	var t = this.__data__ = new fn(e);
	this.size = t.size;
}
Ln.prototype.clear = jn, Ln.prototype.delete = Mn, Ln.prototype.get = Nn, Ln.prototype.has = Pn, Ln.prototype.set = In;
// node_modules/lodash-es/_baseAssign.js
function Rn(e, t) {
	return e && Fe(t, Ht(t), e);
}
// node_modules/lodash-es/_baseAssignIn.js
function zn(e, t) {
	return e && Fe(t, Kt(t), e);
}
// node_modules/lodash-es/_cloneBuffer.js
var Bn = typeof exports == "object" && exports && !exports.nodeType && exports, Vn = Bn && typeof module == "object" && module && !module.nodeType && module, Hn = Vn && Vn.exports === Bn ? f.Buffer : void 0, Un = Hn ? Hn.allocUnsafe : void 0;
function Wn(e, t) {
	if (t) return e.slice();
	var n = e.length, r = Un ? Un(n) : new e.constructor(n);
	return e.copy(r), r;
}
// node_modules/lodash-es/_arrayFilter.js
function Gn(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = 0, a = []; ++n < r;) {
		var o = e[n];
		t(o, n, e) && (a[i++] = o);
	}
	return a;
}
// node_modules/lodash-es/stubArray.js
function Kn() {
	return [];
}
// node_modules/lodash-es/_getSymbols.js
var qn = Object.prototype.propertyIsEnumerable, Jn = Object.getOwnPropertySymbols, Yn = Jn ? function(e) {
	return e == null ? [] : (e = Object(e), Gn(Jn(e), function(t) {
		return qn.call(e, t);
	}));
} : Kn;
// node_modules/lodash-es/_copySymbols.js
function Xn(e, t) {
	return Fe(e, Yn(e), t);
}
// node_modules/lodash-es/_getSymbolsIn.js
var Zn = Object.getOwnPropertySymbols ? function(e) {
	for (var t = []; e;) Sn(t, Yn(e)), e = Cn(e);
	return t;
} : Kn;
// node_modules/lodash-es/_copySymbolsIn.js
function Qn(e, t) {
	return Fe(e, Zn(e), t);
}
// node_modules/lodash-es/_baseGetAllKeys.js
function $n(e, t, n) {
	var r = t(e);
	return E(e) ? r : Sn(r, n(e));
}
// node_modules/lodash-es/_getAllKeys.js
function er(e) {
	return $n(e, Ht, Yn);
}
// node_modules/lodash-es/_getAllKeysIn.js
function tr(e) {
	return $n(e, Kt, Zn);
}
// node_modules/lodash-es/_DataView.js
var nr = me(f, "DataView"), rr = me(f, "Promise"), ir = me(f, "Set"), ar = "[object Map]", or = "[object Object]", sr = "[object Promise]", cr = "[object Set]", lr = "[object WeakMap]", ur = "[object DataView]", dr = M(nr), fr = M(pn), pr = M(rr), mr = M(ir), hr = M(he), gr = w;
(nr && gr(new nr(/* @__PURE__ */ new ArrayBuffer(1))) != ur || pn && gr(new pn()) != ar || rr && gr(rr.resolve()) != sr || ir && gr(new ir()) != cr || he && gr(new he()) != lr) && (gr = function(e) {
	var t = w(e), n = t == or ? e.constructor : void 0, r = n ? M(n) : "";
	if (r) switch (r) {
		case dr: return ur;
		case fr: return ar;
		case pr: return sr;
		case mr: return cr;
		case hr: return lr;
	}
	return t;
});
var _r = gr, vr = Object.prototype.hasOwnProperty;
function yr(e) {
	var t = e.length, n = new e.constructor(t);
	return t && typeof e[0] == "string" && vr.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
// node_modules/lodash-es/_Uint8Array.js
var br = f.Uint8Array;
// node_modules/lodash-es/_cloneArrayBuffer.js
function xr(e) {
	var t = new e.constructor(e.byteLength);
	return new br(t).set(new br(e)), t;
}
// node_modules/lodash-es/_cloneDataView.js
function Sr(e, t) {
	var n = t ? xr(e.buffer) : e.buffer;
	return new e.constructor(n, e.byteOffset, e.byteLength);
}
// node_modules/lodash-es/_cloneRegExp.js
var Cr = /\w*$/;
function wr(e) {
	var t = new e.constructor(e.source, Cr.exec(e));
	return t.lastIndex = e.lastIndex, t;
}
// node_modules/lodash-es/_cloneSymbol.js
var Tr = p ? p.prototype : void 0, Er = Tr ? Tr.valueOf : void 0;
function Dr(e) {
	return Er ? Object(Er.call(e)) : {};
}
// node_modules/lodash-es/_cloneTypedArray.js
function Or(e, t) {
	var n = t ? xr(e.buffer) : e.buffer;
	return new e.constructor(n, e.byteOffset, e.length);
}
// node_modules/lodash-es/_initCloneByTag.js
var kr = "[object Boolean]", Ar = "[object Date]", jr = "[object Map]", Mr = "[object Number]", Nr = "[object RegExp]", Pr = "[object Set]", Fr = "[object String]", Ir = "[object Symbol]", Lr = "[object ArrayBuffer]", Rr = "[object DataView]", zr = "[object Float32Array]", Br = "[object Float64Array]", Vr = "[object Int8Array]", Hr = "[object Int16Array]", Ur = "[object Int32Array]", Wr = "[object Uint8Array]", Gr = "[object Uint8ClampedArray]", Kr = "[object Uint16Array]", qr = "[object Uint32Array]";
function Jr(e, t, n) {
	var r = e.constructor;
	switch (t) {
		case Lr: return xr(e);
		case kr:
		case Ar: return new r(+e);
		case Rr: return Sr(e, n);
		case zr:
		case Br:
		case Vr:
		case Hr:
		case Ur:
		case Wr:
		case Gr:
		case Kr:
		case qr: return Or(e, n);
		case jr: return new r();
		case Mr:
		case Fr: return new r(e);
		case Nr: return wr(e);
		case Pr: return new r();
		case Ir: return Dr(e);
	}
}
// node_modules/lodash-es/_initCloneObject.js
function Yr(e) {
	return typeof e.constructor == "function" && !Ge(e) ? _e(Cn(e)) : {};
}
// node_modules/lodash-es/_baseIsMap.js
var Xr = "[object Map]";
function Zr(e) {
	return T(e) && _r(e) == Xr;
}
// node_modules/lodash-es/isMap.js
var Qr = Nt && Nt.isMap, $r = Qr ? kt(Qr) : Zr, ei = "[object Set]";
function ti(e) {
	return T(e) && _r(e) == ei;
}
// node_modules/lodash-es/isSet.js
var ni = Nt && Nt.isSet, ri = ni ? kt(ni) : ti, ii = 1, ai = 2, oi = 4, si = "[object Arguments]", ci = "[object Array]", li = "[object Boolean]", ui = "[object Date]", di = "[object Error]", fi = "[object Function]", pi = "[object GeneratorFunction]", mi = "[object Map]", hi = "[object Number]", gi = "[object Object]", _i = "[object RegExp]", vi = "[object Set]", yi = "[object String]", bi = "[object Symbol]", xi = "[object WeakMap]", Si = "[object ArrayBuffer]", Ci = "[object DataView]", wi = "[object Float32Array]", Ti = "[object Float64Array]", Ei = "[object Int8Array]", Di = "[object Int16Array]", Oi = "[object Int32Array]", ki = "[object Uint8Array]", Ai = "[object Uint8ClampedArray]", ji = "[object Uint16Array]", Mi = "[object Uint32Array]", F = {};
F[si] = F[ci] = F[Si] = F[Ci] = F[li] = F[ui] = F[wi] = F[Ti] = F[Ei] = F[Di] = F[Oi] = F[mi] = F[hi] = F[gi] = F[_i] = F[vi] = F[yi] = F[bi] = F[ki] = F[Ai] = F[ji] = F[Mi] = !0, F[di] = F[fi] = F[xi] = !1;
function Ni(e, t, n, r, i, a) {
	var o, s = t & ii, c = t & ai, l = t & oi;
	if (n && (o = i ? n(e, r, i, a) : n(e)), o !== void 0) return o;
	if (!D(e)) return e;
	var u = E(e);
	if (u) {
		if (o = yr(e), !s) return ye(e, o);
	} else {
		var d = _r(e), f = d == fi || d == pi;
		if (rt(e)) return Wn(e, s);
		if (d == gi || d == si || f && !i) {
			if (o = c || f ? {} : Yr(e), !s) return c ? Qn(e, zn(o, e)) : Xn(e, Rn(o, e));
		} else {
			if (!F[d]) return i ? e : {};
			o = Jr(e, d, s);
		}
	}
	a ||= new Ln();
	var p = a.get(e);
	if (p) return p;
	a.set(e, o), ri(e) ? e.forEach(function(r) {
		o.add(Ni(r, t, n, r, e, a));
	}) : $r(e) && e.forEach(function(r, i) {
		o.set(i, Ni(r, t, n, i, e, a));
	});
	var m = u ? void 0 : (l ? c ? tr : er : c ? Kt : Ht)(e);
	return De(m || e, function(r, i) {
		m && (i = r, r = e[i]), Pe(o, i, Ni(r, t, n, i, e, a));
	}), o;
}
// node_modules/lodash-es/cloneDeep.js
var Pi = 1, Fi = 4;
function Ii(e) {
	return Ni(e, Pi | Fi);
}
// node_modules/lodash-es/_setCacheAdd.js
var Li = "__lodash_hash_undefined__";
function Ri(e) {
	return this.__data__.set(e, Li), this;
}
// node_modules/lodash-es/_setCacheHas.js
function zi(e) {
	return this.__data__.has(e);
}
// node_modules/lodash-es/_SetCache.js
function Bi(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.__data__ = new xn(); ++t < n;) this.add(e[t]);
}
Bi.prototype.add = Bi.prototype.push = Ri, Bi.prototype.has = zi;
// node_modules/lodash-es/_arraySome.js
function Vi(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length; ++n < r;) if (t(e[n], n, e)) return !0;
	return !1;
}
// node_modules/lodash-es/_cacheHas.js
function Hi(e, t) {
	return e.has(t);
}
// node_modules/lodash-es/_equalArrays.js
var Ui = 1, Wi = 2;
function Gi(e, t, n, r, i, a) {
	var o = n & Ui, s = e.length, c = t.length;
	if (s != c && !(o && c > s)) return !1;
	var l = a.get(e), u = a.get(t);
	if (l && u) return l == t && u == e;
	var d = -1, f = !0, p = n & Wi ? new Bi() : void 0;
	for (a.set(e, t), a.set(t, e); ++d < s;) {
		var m = e[d], h = t[d];
		if (r) var g = o ? r(h, m, d, t, e, a) : r(m, h, d, e, t, a);
		if (g !== void 0) {
			if (g) continue;
			f = !1;
			break;
		}
		if (p) {
			if (!Vi(t, function(e, t) {
				if (!Hi(p, t) && (m === e || i(m, e, n, r, a))) return p.push(t);
			})) {
				f = !1;
				break;
			}
		} else if (!(m === h || i(m, h, n, r, a))) {
			f = !1;
			break;
		}
	}
	return a.delete(e), a.delete(t), f;
}
// node_modules/lodash-es/_mapToArray.js
function Ki(e) {
	var t = -1, n = Array(e.size);
	return e.forEach(function(e, r) {
		n[++t] = [r, e];
	}), n;
}
// node_modules/lodash-es/_setToArray.js
function qi(e) {
	var t = -1, n = Array(e.size);
	return e.forEach(function(e) {
		n[++t] = e;
	}), n;
}
// node_modules/lodash-es/_equalByTag.js
var Ji = 1, Yi = 2, Xi = "[object Boolean]", Zi = "[object Date]", Qi = "[object Error]", $i = "[object Map]", ea = "[object Number]", ta = "[object RegExp]", na = "[object Set]", ra = "[object String]", ia = "[object Symbol]", aa = "[object ArrayBuffer]", oa = "[object DataView]", sa = p ? p.prototype : void 0, ca = sa ? sa.valueOf : void 0;
function la(e, t, n, r, i, a, o) {
	switch (n) {
		case oa:
			if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
			e = e.buffer, t = t.buffer;
		case aa: return !(e.byteLength != t.byteLength || !a(new br(e), new br(t)));
		case Xi:
		case Zi:
		case ea: return Me(+e, +t);
		case Qi: return e.name == t.name && e.message == t.message;
		case ta:
		case ra: return e == t + "";
		case $i: var s = Ki;
		case na:
			var c = r & Ji;
			if (s ||= qi, e.size != t.size && !c) return !1;
			var l = o.get(e);
			if (l) return l == t;
			r |= Yi, o.set(e, t);
			var u = Gi(s(e), s(t), r, i, a, o);
			return o.delete(e), u;
		case ia: if (ca) return ca.call(e) == ca.call(t);
	}
	return !1;
}
// node_modules/lodash-es/_equalObjects.js
var ua = 1, da = Object.prototype.hasOwnProperty;
function fa(e, t, n, r, i, a) {
	var o = n & ua, s = er(e), c = s.length;
	if (c != er(t).length && !o) return !1;
	for (var l = c; l--;) {
		var u = s[l];
		if (!(o ? u in t : da.call(t, u))) return !1;
	}
	var d = a.get(e), f = a.get(t);
	if (d && f) return d == t && f == e;
	var p = !0;
	a.set(e, t), a.set(t, e);
	for (var m = o; ++l < c;) {
		u = s[l];
		var h = e[u], g = t[u];
		if (r) var _ = o ? r(g, h, u, t, e, a) : r(h, g, u, e, t, a);
		if (!(_ === void 0 ? h === g || i(h, g, n, r, a) : _)) {
			p = !1;
			break;
		}
		m ||= u == "constructor";
	}
	if (p && !m) {
		var v = e.constructor, y = t.constructor;
		v != y && "constructor" in e && "constructor" in t && !(typeof v == "function" && v instanceof v && typeof y == "function" && y instanceof y) && (p = !1);
	}
	return a.delete(e), a.delete(t), p;
}
// node_modules/lodash-es/_baseIsEqualDeep.js
var pa = 1, ma = "[object Arguments]", ha = "[object Array]", ga = "[object Object]", _a = Object.prototype.hasOwnProperty;
function va(e, t, n, r, i, a) {
	var o = E(e), s = E(t), c = o ? ha : _r(e), l = s ? ha : _r(t);
	c = c == ma ? ga : c, l = l == ma ? ga : l;
	var u = c == ga, d = l == ga, f = c == l;
	if (f && rt(e)) {
		if (!rt(t)) return !1;
		o = !0, u = !1;
	}
	if (f && !u) return a ||= new Ln(), o || Ft(e) ? Gi(e, t, n, r, i, a) : la(e, t, c, n, r, i, a);
	if (!(n & pa)) {
		var p = u && _a.call(e, "__wrapped__"), m = d && _a.call(t, "__wrapped__");
		if (p || m) {
			var h = p ? e.value() : e, g = m ? t.value() : t;
			return a ||= new Ln(), i(h, g, n, r, a);
		}
	}
	return f ? (a ||= new Ln(), fa(e, t, n, r, i, a)) : !1;
}
// node_modules/lodash-es/_baseIsEqual.js
function ya(e, t, n, r, i) {
	return e === t ? !0 : e == null || t == null || !T(e) && !T(t) ? e !== e && t !== t : va(e, t, n, r, ya, i);
}
// node_modules/lodash-es/_createBaseFor.js
function ba(e) {
	return function(t, n, r) {
		for (var i = -1, a = Object(t), o = r(t), s = o.length; s--;) {
			var c = o[e ? s : ++i];
			if (n(a[c], c, a) === !1) break;
		}
		return t;
	};
}
// node_modules/lodash-es/_baseFor.js
var xa = ba();
// node_modules/lodash-es/_assignMergeValue.js
function Sa(e, t, n) {
	(n !== void 0 && !Me(e[t], n) || n === void 0 && !(t in e)) && je(e, t, n);
}
// node_modules/lodash-es/isArrayLikeObject.js
function Ca(e) {
	return T(e) && Ve(e);
}
// node_modules/lodash-es/_safeGet.js
function wa(e, t) {
	if ((t !== "constructor" || typeof e[t] != "function") && t != "__proto__") return e[t];
}
// node_modules/lodash-es/toPlainObject.js
function Ta(e) {
	return Fe(e, Kt(e));
}
// node_modules/lodash-es/_baseMergeDeep.js
function Ea(e, t, n, r, i, a, o) {
	var s = wa(e, n), c = wa(t, n), l = o.get(c);
	if (l) Sa(e, n, l);
	else {
		var u = a ? a(s, c, n + "", e, t, o) : void 0, d = u === void 0;
		if (d) {
			var f = E(c), p = !f && rt(c), m = !f && !p && Ft(c);
			u = c, f || p || m ? E(s) ? u = s : Ca(s) ? u = ye(s) : p ? (d = !1, u = Wn(c, !0)) : m ? (d = !1, u = Or(c, !0)) : u = [] : An(c) || Qe(c) ? (u = s, Qe(s) ? u = Ta(s) : (!D(s) || A(s)) && (u = Yr(c))) : d = !1;
		}
		d && (o.set(c, u), i(u, c, r, a, o), o.delete(c)), Sa(e, n, u);
	}
}
// node_modules/lodash-es/_baseMerge.js
function Da(e, t, n, r, i) {
	e !== t && xa(t, function(a, o) {
		if (i ||= new Ln(), D(a)) Ea(e, t, o, n, Da, r, i);
		else {
			var s = r ? r(wa(e, o), a, o + "", e, t, i) : void 0;
			s === void 0 && (s = a), Sa(e, o, s);
		}
	}, Kt);
}
// node_modules/lodash-es/isEqual.js
function Oa(e, t) {
	return ya(e, t);
}
// node_modules/lodash-es/merge.js
var ka = Ue(function(e, t, n) {
	Da(e, t, n);
}), Aa = /* @__PURE__ */ s({
	Attributor: () => ja,
	AttributorStore: () => za,
	BlockBlot: () => Za,
	ClassAttributor: () => Ia,
	ContainerBlot: () => $a,
	EmbedBlot: () => eo,
	InlineBlot: () => Ya,
	LeafBlot: () => L,
	ParentBlot: () => Ka,
	Registry: () => Pa,
	Scope: () => I,
	ScrollBlot: () => io,
	StyleAttributor: () => Ra,
	TextBlot: () => oo
}), I = /* @__PURE__ */ ((e) => (e[e.TYPE = 3] = "TYPE", e[e.LEVEL = 12] = "LEVEL", e[e.ATTRIBUTE = 13] = "ATTRIBUTE", e[e.BLOT = 14] = "BLOT", e[e.INLINE = 7] = "INLINE", e[e.BLOCK = 11] = "BLOCK", e[e.BLOCK_BLOT = 10] = "BLOCK_BLOT", e[e.INLINE_BLOT = 6] = "INLINE_BLOT", e[e.BLOCK_ATTRIBUTE = 9] = "BLOCK_ATTRIBUTE", e[e.INLINE_ATTRIBUTE = 5] = "INLINE_ATTRIBUTE", e[e.ANY = 15] = "ANY", e))(I || {}), ja = class {
	constructor(e, t, n = {}) {
		this.attrName = e, this.keyName = t;
		let r = I.TYPE & I.ATTRIBUTE;
		this.scope = n.scope == null ? I.ATTRIBUTE : n.scope & I.LEVEL | r, n.whitelist != null && (this.whitelist = n.whitelist);
	}
	static keys(e) {
		return Array.from(e.attributes).map((e) => e.name);
	}
	add(e, t) {
		return this.canAdd(e, t) ? (e.setAttribute(this.keyName, t), !0) : !1;
	}
	canAdd(e, t) {
		return this.whitelist == null ? !0 : typeof t == "string" ? this.whitelist.indexOf(t.replace(/["']/g, "")) > -1 : this.whitelist.indexOf(t) > -1;
	}
	remove(e) {
		e.removeAttribute(this.keyName);
	}
	value(e) {
		let t = e.getAttribute(this.keyName);
		return this.canAdd(e, t) && t ? t : "";
	}
}, Ma = class extends Error {
	constructor(e) {
		e = "[Parchment] " + e, super(e), this.message = e, this.name = this.constructor.name;
	}
}, Na = class e {
	constructor() {
		this.attributes = {}, this.classes = {}, this.tags = {}, this.types = {};
	}
	static find(e, t = !1) {
		if (e == null) return null;
		if (this.blots.has(e)) return this.blots.get(e) || null;
		if (t) {
			let n = null;
			try {
				n = e.parentNode;
			} catch {
				return null;
			}
			return this.find(n, t);
		}
		return null;
	}
	create(t, n, r) {
		let i = this.query(n);
		if (i == null) throw new Ma(`Unable to create ${n} blot`);
		let a = i, o = new a(t, n instanceof Node || n.nodeType === Node.TEXT_NODE ? n : a.create(r), r);
		return e.blots.set(o.domNode, o), o;
	}
	find(t, n = !1) {
		return e.find(t, n);
	}
	query(e, t = I.ANY) {
		let n;
		return typeof e == "string" ? n = this.types[e] || this.attributes[e] : e instanceof Text || e.nodeType === Node.TEXT_NODE ? n = this.types.text : typeof e == "number" ? e & I.LEVEL & I.BLOCK ? n = this.types.block : e & I.LEVEL & I.INLINE && (n = this.types.inline) : e instanceof Element && ((e.getAttribute("class") || "").split(/\s+/).some((e) => (n = this.classes[e], !!n)), n ||= this.tags[e.tagName]), n == null ? null : "scope" in n && t & I.LEVEL & n.scope && t & I.TYPE & n.scope ? n : null;
	}
	register(...e) {
		return e.map((e) => {
			let t = "blotName" in e, n = "attrName" in e;
			if (!t && !n) throw new Ma("Invalid definition");
			if (t && e.blotName === "abstract") throw new Ma("Cannot register abstract class");
			let r = t ? e.blotName : n ? e.attrName : void 0;
			return this.types[r] = e, n ? typeof e.keyName == "string" && (this.attributes[e.keyName] = e) : t && (e.className && (this.classes[e.className] = e), e.tagName && (e.tagName = Array.isArray(e.tagName) ? e.tagName.map((e) => e.toUpperCase()) : e.tagName.toUpperCase(), (Array.isArray(e.tagName) ? e.tagName : [e.tagName]).forEach((t) => {
				(this.tags[t] == null || e.className == null) && (this.tags[t] = e);
			}))), e;
		});
	}
};
Na.blots = /* @__PURE__ */ new WeakMap();
var Pa = Na;
function Fa(e, t) {
	return (e.getAttribute("class") || "").split(/\s+/).filter((e) => e.indexOf(`${t}-`) === 0);
}
var Ia = class extends ja {
	static keys(e) {
		return (e.getAttribute("class") || "").split(/\s+/).map((e) => e.split("-").slice(0, -1).join("-"));
	}
	add(e, t) {
		return this.canAdd(e, t) ? (this.remove(e), e.classList.add(`${this.keyName}-${t}`), !0) : !1;
	}
	remove(e) {
		Fa(e, this.keyName).forEach((t) => {
			e.classList.remove(t);
		}), e.classList.length === 0 && e.removeAttribute("class");
	}
	value(e) {
		let t = (Fa(e, this.keyName)[0] || "").slice(this.keyName.length + 1);
		return this.canAdd(e, t) ? t : "";
	}
};
function La(e) {
	let t = e.split("-"), n = t.slice(1).map((e) => e[0].toUpperCase() + e.slice(1)).join("");
	return t[0] + n;
}
var Ra = class extends ja {
	static keys(e) {
		return (e.getAttribute("style") || "").split(";").map((e) => e.split(":")[0].trim());
	}
	add(e, t) {
		return this.canAdd(e, t) ? (e.style[La(this.keyName)] = t, !0) : !1;
	}
	remove(e) {
		e.style[La(this.keyName)] = "", e.getAttribute("style") || e.removeAttribute("style");
	}
	value(e) {
		let t = e.style[La(this.keyName)];
		return this.canAdd(e, t) ? t : "";
	}
}, za = class {
	constructor(e) {
		this.attributes = {}, this.domNode = e, this.build();
	}
	attribute(e, t) {
		t ? e.add(this.domNode, t) && (e.value(this.domNode) == null ? delete this.attributes[e.attrName] : this.attributes[e.attrName] = e) : (e.remove(this.domNode), delete this.attributes[e.attrName]);
	}
	build() {
		this.attributes = {};
		let e = Pa.find(this.domNode);
		if (e == null) return;
		let t = ja.keys(this.domNode), n = Ia.keys(this.domNode), r = Ra.keys(this.domNode);
		t.concat(n).concat(r).forEach((t) => {
			let n = e.scroll.query(t, I.ATTRIBUTE);
			n instanceof ja && (this.attributes[n.attrName] = n);
		});
	}
	copy(e) {
		Object.keys(this.attributes).forEach((t) => {
			let n = this.attributes[t].value(this.domNode);
			e.format(t, n);
		});
	}
	move(e) {
		this.copy(e), Object.keys(this.attributes).forEach((e) => {
			this.attributes[e].remove(this.domNode);
		}), this.attributes = {};
	}
	values() {
		return Object.keys(this.attributes).reduce((e, t) => (e[t] = this.attributes[t].value(this.domNode), e), {});
	}
}, Ba = class {
	constructor(e, t) {
		this.scroll = e, this.domNode = t, Pa.blots.set(t, this), this.prev = null, this.next = null;
	}
	static create(e) {
		if (this.tagName == null) throw new Ma("Blot definition missing tagName");
		let t, n;
		return Array.isArray(this.tagName) ? (typeof e == "string" ? (n = e.toUpperCase(), parseInt(n, 10).toString() === n && (n = parseInt(n, 10))) : typeof e == "number" && (n = e), t = typeof n == "number" ? document.createElement(this.tagName[n - 1]) : n && this.tagName.indexOf(n) > -1 ? document.createElement(n) : document.createElement(this.tagName[0])) : t = document.createElement(this.tagName), this.className && t.classList.add(this.className), t;
	}
	get statics() {
		return this.constructor;
	}
	attach() {}
	clone() {
		let e = this.domNode.cloneNode(!1);
		return this.scroll.create(e);
	}
	detach() {
		this.parent != null && this.parent.removeChild(this), Pa.blots.delete(this.domNode);
	}
	deleteAt(e, t) {
		this.isolate(e, t).remove();
	}
	formatAt(e, t, n, r) {
		let i = this.isolate(e, t);
		if (this.scroll.query(n, I.BLOT) != null && r) i.wrap(n, r);
		else if (this.scroll.query(n, I.ATTRIBUTE) != null) {
			let e = this.scroll.create(this.statics.scope);
			i.wrap(e), e.format(n, r);
		}
	}
	insertAt(e, t, n) {
		let r = n == null ? this.scroll.create("text", t) : this.scroll.create(t, n), i = this.split(e);
		this.parent.insertBefore(r, i || void 0);
	}
	isolate(e, t) {
		let n = this.split(e);
		if (n == null) throw Error("Attempt to isolate at end");
		return n.split(t), n;
	}
	length() {
		return 1;
	}
	offset(e = this.parent) {
		return this.parent == null || this === e ? 0 : this.parent.children.offset(this) + this.parent.offset(e);
	}
	optimize(e) {
		this.statics.requiredContainer && !(this.parent instanceof this.statics.requiredContainer) && this.wrap(this.statics.requiredContainer.blotName);
	}
	remove() {
		this.domNode.parentNode != null && this.domNode.parentNode.removeChild(this.domNode), this.detach();
	}
	replaceWith(e, t) {
		let n = typeof e == "string" ? this.scroll.create(e, t) : e;
		return this.parent != null && (this.parent.insertBefore(n, this.next || void 0), this.remove()), n;
	}
	split(e, t) {
		return e === 0 ? this : this.next;
	}
	update(e, t) {}
	wrap(e, t) {
		let n = typeof e == "string" ? this.scroll.create(e, t) : e;
		if (this.parent != null && this.parent.insertBefore(n, this.next || void 0), typeof n.appendChild != "function") throw new Ma(`Cannot wrap ${e}`);
		return n.appendChild(this), n;
	}
};
Ba.blotName = "abstract";
var Va = Ba, Ha = class extends Va {
	static value(e) {
		return !0;
	}
	index(e, t) {
		return this.domNode === e || this.domNode.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY ? Math.min(t, 1) : -1;
	}
	position(e, t) {
		let n = Array.from(this.parent.domNode.childNodes).indexOf(this.domNode);
		return e > 0 && (n += 1), [this.parent.domNode, n];
	}
	value() {
		return { [this.statics.blotName]: this.statics.value(this.domNode) || !0 };
	}
};
Ha.scope = I.INLINE_BLOT;
var L = Ha, Ua = class {
	constructor() {
		this.head = null, this.tail = null, this.length = 0;
	}
	append(...e) {
		if (this.insertBefore(e[0], null), e.length > 1) {
			let t = e.slice(1);
			this.append(...t);
		}
	}
	at(e) {
		let t = this.iterator(), n = t();
		for (; n && e > 0;) --e, n = t();
		return n;
	}
	contains(e) {
		let t = this.iterator(), n = t();
		for (; n;) {
			if (n === e) return !0;
			n = t();
		}
		return !1;
	}
	indexOf(e) {
		let t = this.iterator(), n = t(), r = 0;
		for (; n;) {
			if (n === e) return r;
			r += 1, n = t();
		}
		return -1;
	}
	insertBefore(e, t) {
		e != null && (this.remove(e), e.next = t, t == null ? this.tail == null ? (e.prev = null, this.head = this.tail = e) : (this.tail.next = e, e.prev = this.tail, this.tail = e) : (e.prev = t.prev, t.prev != null && (t.prev.next = e), t.prev = e, t === this.head && (this.head = e)), this.length += 1);
	}
	offset(e) {
		let t = 0, n = this.head;
		for (; n != null;) {
			if (n === e) return t;
			t += n.length(), n = n.next;
		}
		return -1;
	}
	remove(e) {
		this.contains(e) && (e.prev != null && (e.prev.next = e.next), e.next != null && (e.next.prev = e.prev), e === this.head && (this.head = e.next), e === this.tail && (this.tail = e.prev), --this.length);
	}
	iterator(e = this.head) {
		return () => {
			let t = e;
			return e != null && (e = e.next), t;
		};
	}
	find(e, t = !1) {
		let n = this.iterator(), r = n();
		for (; r;) {
			let i = r.length();
			if (e < i || t && e === i && (r.next == null || r.next.length() !== 0)) return [r, e];
			e -= i, r = n();
		}
		return [null, 0];
	}
	forEach(e) {
		let t = this.iterator(), n = t();
		for (; n;) e(n), n = t();
	}
	forEachAt(e, t, n) {
		if (t <= 0) return;
		let [r, i] = this.find(e), a = e - i, o = this.iterator(r), s = o();
		for (; s && a < e + t;) {
			let r = s.length();
			e > a ? n(s, e - a, Math.min(t, a + r - e)) : n(s, 0, Math.min(r, e + t - a)), a += r, s = o();
		}
	}
	map(e) {
		return this.reduce((t, n) => (t.push(e(n)), t), []);
	}
	reduce(e, t) {
		let n = this.iterator(), r = n();
		for (; r;) t = e(t, r), r = n();
		return t;
	}
};
function Wa(e, t) {
	let n = t.find(e);
	if (n) return n;
	try {
		return t.create(e);
	} catch {
		let n = t.create(I.INLINE);
		return Array.from(e.childNodes).forEach((e) => {
			n.domNode.appendChild(e);
		}), e.parentNode && e.parentNode.replaceChild(n.domNode, e), n.attach(), n;
	}
}
var Ga = class e extends Va {
	constructor(e, t) {
		super(e, t), this.uiNode = null, this.build();
	}
	appendChild(e) {
		this.insertBefore(e);
	}
	attach() {
		super.attach(), this.children.forEach((e) => {
			e.attach();
		});
	}
	attachUI(t) {
		this.uiNode != null && this.uiNode.remove(), this.uiNode = t, e.uiClass && this.uiNode.classList.add(e.uiClass), this.uiNode.setAttribute("contenteditable", "false"), this.domNode.insertBefore(this.uiNode, this.domNode.firstChild);
	}
	build() {
		this.children = new Ua(), Array.from(this.domNode.childNodes).filter((e) => e !== this.uiNode).reverse().forEach((e) => {
			try {
				let t = Wa(e, this.scroll);
				this.insertBefore(t, this.children.head || void 0);
			} catch (e) {
				if (e instanceof Ma) return;
				throw e;
			}
		});
	}
	deleteAt(e, t) {
		if (e === 0 && t === this.length()) return this.remove();
		this.children.forEachAt(e, t, (e, t, n) => {
			e.deleteAt(t, n);
		});
	}
	descendant(t, n = 0) {
		let [r, i] = this.children.find(n);
		return t.blotName == null && t(r) || t.blotName != null && r instanceof t ? [r, i] : r instanceof e ? r.descendant(t, i) : [null, -1];
	}
	descendants(t, n = 0, r = Number.MAX_VALUE) {
		let i = [], a = r;
		return this.children.forEachAt(n, r, (n, r, o) => {
			(t.blotName == null && t(n) || t.blotName != null && n instanceof t) && i.push(n), n instanceof e && (i = i.concat(n.descendants(t, r, a))), a -= o;
		}), i;
	}
	detach() {
		this.children.forEach((e) => {
			e.detach();
		}), super.detach();
	}
	enforceAllowedChildren() {
		let t = !1;
		this.children.forEach((n) => {
			t || this.statics.allowedChildren.some((e) => n instanceof e) || (n.statics.scope === I.BLOCK_BLOT ? (n.next != null && this.splitAfter(n), n.prev != null && this.splitAfter(n.prev), n.parent.unwrap(), t = !0) : n instanceof e ? n.unwrap() : n.remove());
		});
	}
	formatAt(e, t, n, r) {
		this.children.forEachAt(e, t, (e, t, i) => {
			e.formatAt(t, i, n, r);
		});
	}
	insertAt(e, t, n) {
		let [r, i] = this.children.find(e);
		if (r) r.insertAt(i, t, n);
		else {
			let e = n == null ? this.scroll.create("text", t) : this.scroll.create(t, n);
			this.appendChild(e);
		}
	}
	insertBefore(e, t) {
		e.parent != null && e.parent.children.remove(e);
		let n = null;
		this.children.insertBefore(e, t || null), e.parent = this, t != null && (n = t.domNode), (this.domNode.parentNode !== e.domNode || this.domNode.nextSibling !== n) && this.domNode.insertBefore(e.domNode, n), e.attach();
	}
	length() {
		return this.children.reduce((e, t) => e + t.length(), 0);
	}
	moveChildren(e, t) {
		this.children.forEach((n) => {
			e.insertBefore(n, t);
		});
	}
	optimize(e) {
		if (super.optimize(e), this.enforceAllowedChildren(), this.uiNode != null && this.uiNode !== this.domNode.firstChild && this.domNode.insertBefore(this.uiNode, this.domNode.firstChild), this.children.length === 0) {
			if (this.statics.defaultChild != null) {
				let e = this.scroll.create(this.statics.defaultChild.blotName);
				this.appendChild(e);
			} else this.remove();
		}
	}
	path(t, n = !1) {
		let [r, i] = this.children.find(t, n), a = [[this, t]];
		return r instanceof e ? a.concat(r.path(i, n)) : (r != null && a.push([r, i]), a);
	}
	removeChild(e) {
		this.children.remove(e);
	}
	replaceWith(t, n) {
		let r = typeof t == "string" ? this.scroll.create(t, n) : t;
		return r instanceof e && this.moveChildren(r), super.replaceWith(r);
	}
	split(e, t = !1) {
		if (!t) {
			if (e === 0) return this;
			if (e === this.length()) return this.next;
		}
		let n = this.clone();
		return this.parent && this.parent.insertBefore(n, this.next || void 0), this.children.forEachAt(e, this.length(), (e, r, i) => {
			let a = e.split(r, t);
			a != null && n.appendChild(a);
		}), n;
	}
	splitAfter(e) {
		let t = this.clone();
		for (; e.next != null;) t.appendChild(e.next);
		return this.parent && this.parent.insertBefore(t, this.next || void 0), t;
	}
	unwrap() {
		this.parent && this.moveChildren(this.parent, this.next || void 0), this.remove();
	}
	update(e, t) {
		let n = [], r = [];
		e.forEach((e) => {
			e.target === this.domNode && e.type === "childList" && (n.push(...e.addedNodes), r.push(...e.removedNodes));
		}), r.forEach((e) => {
			if (e.parentNode != null && e.tagName !== "IFRAME" && document.body.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY) return;
			let t = this.scroll.find(e);
			t != null && (t.domNode.parentNode == null || t.domNode.parentNode === this.domNode) && t.detach();
		}), n.filter((e) => e.parentNode === this.domNode && e !== this.uiNode).sort((e, t) => e === t ? 0 : e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : -1).forEach((e) => {
			let t = null;
			e.nextSibling != null && (t = this.scroll.find(e.nextSibling));
			let n = Wa(e, this.scroll);
			(n.next !== t || n.next == null) && (n.parent != null && n.parent.removeChild(this), this.insertBefore(n, t || void 0));
		}), this.enforceAllowedChildren();
	}
};
Ga.uiClass = "";
var Ka = Ga;
function qa(e, t) {
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (let n in e) if (e[n] !== t[n]) return !1;
	return !0;
}
var Ja = class e extends Ka {
	static create(e) {
		return super.create(e);
	}
	static formats(t, n) {
		let r = n.query(e.blotName);
		if (r == null || t.tagName !== r.tagName) {
			if (typeof this.tagName == "string") return !0;
			if (Array.isArray(this.tagName)) return t.tagName.toLowerCase();
		}
	}
	constructor(e, t) {
		super(e, t), this.attributes = new za(this.domNode);
	}
	format(t, n) {
		if (t === this.statics.blotName && !n) this.children.forEach((t) => {
			t instanceof e || (t = t.wrap(e.blotName, !0)), this.attributes.copy(t);
		}), this.unwrap();
		else {
			let e = this.scroll.query(t, I.INLINE);
			if (e == null) return;
			e instanceof ja ? this.attributes.attribute(e, n) : n && (t !== this.statics.blotName || this.formats()[t] !== n) && this.replaceWith(t, n);
		}
	}
	formats() {
		let e = this.attributes.values(), t = this.statics.formats(this.domNode, this.scroll);
		return t != null && (e[this.statics.blotName] = t), e;
	}
	formatAt(e, t, n, r) {
		this.formats()[n] != null || this.scroll.query(n, I.ATTRIBUTE) ? this.isolate(e, t).format(n, r) : super.formatAt(e, t, n, r);
	}
	optimize(t) {
		super.optimize(t);
		let n = this.formats();
		if (Object.keys(n).length === 0) return this.unwrap();
		let r = this.next;
		r instanceof e && r.prev === this && qa(n, r.formats()) && (r.moveChildren(this), r.remove());
	}
	replaceWith(e, t) {
		let n = super.replaceWith(e, t);
		return this.attributes.copy(n), n;
	}
	update(e, t) {
		super.update(e, t), e.some((e) => e.target === this.domNode && e.type === "attributes") && this.attributes.build();
	}
	wrap(t, n) {
		let r = super.wrap(t, n);
		return r instanceof e && this.attributes.move(r), r;
	}
};
Ja.allowedChildren = [Ja, L], Ja.blotName = "inline", Ja.scope = I.INLINE_BLOT, Ja.tagName = "SPAN";
var Ya = Ja, Xa = class e extends Ka {
	static create(e) {
		return super.create(e);
	}
	static formats(t, n) {
		let r = n.query(e.blotName);
		if (r == null || t.tagName !== r.tagName) {
			if (typeof this.tagName == "string") return !0;
			if (Array.isArray(this.tagName)) return t.tagName.toLowerCase();
		}
	}
	constructor(e, t) {
		super(e, t), this.attributes = new za(this.domNode);
	}
	format(t, n) {
		let r = this.scroll.query(t, I.BLOCK);
		r != null && (r instanceof ja ? this.attributes.attribute(r, n) : t === this.statics.blotName && !n ? this.replaceWith(e.blotName) : n && (t !== this.statics.blotName || this.formats()[t] !== n) && this.replaceWith(t, n));
	}
	formats() {
		let e = this.attributes.values(), t = this.statics.formats(this.domNode, this.scroll);
		return t != null && (e[this.statics.blotName] = t), e;
	}
	formatAt(e, t, n, r) {
		this.scroll.query(n, I.BLOCK) == null ? super.formatAt(e, t, n, r) : this.format(n, r);
	}
	insertAt(e, t, n) {
		if (n == null || this.scroll.query(t, I.INLINE) != null) super.insertAt(e, t, n);
		else {
			let r = this.split(e);
			if (r != null) {
				let e = this.scroll.create(t, n);
				r.parent.insertBefore(e, r);
			} else throw Error("Attempt to insertAt after block boundaries");
		}
	}
	replaceWith(e, t) {
		let n = super.replaceWith(e, t);
		return this.attributes.copy(n), n;
	}
	update(e, t) {
		super.update(e, t), e.some((e) => e.target === this.domNode && e.type === "attributes") && this.attributes.build();
	}
};
Xa.blotName = "block", Xa.scope = I.BLOCK_BLOT, Xa.tagName = "P", Xa.allowedChildren = [
	Ya,
	Xa,
	L
];
var Za = Xa, Qa = class extends Ka {
	checkMerge() {
		return this.next !== null && this.next.statics.blotName === this.statics.blotName;
	}
	deleteAt(e, t) {
		super.deleteAt(e, t), this.enforceAllowedChildren();
	}
	formatAt(e, t, n, r) {
		super.formatAt(e, t, n, r), this.enforceAllowedChildren();
	}
	insertAt(e, t, n) {
		super.insertAt(e, t, n), this.enforceAllowedChildren();
	}
	optimize(e) {
		super.optimize(e), this.children.length > 0 && this.next != null && this.checkMerge() && (this.next.moveChildren(this), this.next.remove());
	}
};
Qa.blotName = "container", Qa.scope = I.BLOCK_BLOT;
var $a = Qa, eo = class extends L {
	static formats(e, t) {}
	format(e, t) {
		super.formatAt(0, this.length(), e, t);
	}
	formatAt(e, t, n, r) {
		e === 0 && t === this.length() ? this.format(n, r) : super.formatAt(e, t, n, r);
	}
	formats() {
		return this.statics.formats(this.domNode, this.scroll);
	}
}, to = {
	attributes: !0,
	characterData: !0,
	characterDataOldValue: !0,
	childList: !0,
	subtree: !0
}, no = 100, ro = class extends Ka {
	constructor(e, t) {
		super(null, t), this.registry = e, this.scroll = this, this.build(), this.observer = new MutationObserver((e) => {
			this.update(e);
		}), this.observer.observe(this.domNode, to), this.attach();
	}
	create(e, t) {
		return this.registry.create(this, e, t);
	}
	find(e, t = !1) {
		let n = this.registry.find(e, t);
		return n ? n.scroll === this ? n : t ? this.find(n.scroll.domNode.parentNode, !0) : null : null;
	}
	query(e, t = I.ANY) {
		return this.registry.query(e, t);
	}
	register(...e) {
		return this.registry.register(...e);
	}
	build() {
		this.scroll != null && super.build();
	}
	detach() {
		super.detach(), this.observer.disconnect();
	}
	deleteAt(e, t) {
		this.update(), e === 0 && t === this.length() ? this.children.forEach((e) => {
			e.remove();
		}) : super.deleteAt(e, t);
	}
	formatAt(e, t, n, r) {
		this.update(), super.formatAt(e, t, n, r);
	}
	insertAt(e, t, n) {
		this.update(), super.insertAt(e, t, n);
	}
	optimize(e = [], t = {}) {
		super.optimize(t);
		let n = t.mutationsMap || /* @__PURE__ */ new WeakMap(), r = Array.from(this.observer.takeRecords());
		for (; r.length > 0;) e.push(r.pop());
		let i = (e, t = !0) => {
			e == null || e === this || e.domNode.parentNode != null && (n.has(e.domNode) || n.set(e.domNode, []), t && i(e.parent));
		}, a = (e) => {
			n.has(e.domNode) && (e instanceof Ka && e.children.forEach(a), n.delete(e.domNode), e.optimize(t));
		}, o = e;
		for (let t = 0; o.length > 0; t += 1) {
			if (t >= no) throw Error("[Parchment] Maximum optimize iterations reached");
			for (o.forEach((e) => {
				let t = this.find(e.target, !0);
				t != null && (t.domNode === e.target && (e.type === "childList" ? (i(this.find(e.previousSibling, !1)), Array.from(e.addedNodes).forEach((e) => {
					let t = this.find(e, !1);
					i(t, !1), t instanceof Ka && t.children.forEach((e) => {
						i(e, !1);
					});
				})) : e.type === "attributes" && i(t.prev)), i(t));
			}), this.children.forEach(a), o = Array.from(this.observer.takeRecords()), r = o.slice(); r.length > 0;) e.push(r.pop());
		}
	}
	update(e, t = {}) {
		e ||= this.observer.takeRecords();
		let n = /* @__PURE__ */ new WeakMap();
		e.map((e) => {
			let t = this.find(e.target, !0);
			return t == null ? null : n.has(t.domNode) ? (n.get(t.domNode).push(e), null) : (n.set(t.domNode, [e]), t);
		}).forEach((e) => {
			e != null && e !== this && n.has(e.domNode) && e.update(n.get(e.domNode) || [], t);
		}), t.mutationsMap = n, n.has(this.domNode) && super.update(n.get(this.domNode), t), this.optimize(e, t);
	}
};
ro.blotName = "scroll", ro.defaultChild = Za, ro.allowedChildren = [Za, $a], ro.scope = I.BLOCK_BLOT, ro.tagName = "DIV";
var io = ro, ao = class e extends L {
	static create(e) {
		return document.createTextNode(e);
	}
	static value(e) {
		return e.data;
	}
	constructor(e, t) {
		super(e, t), this.text = this.statics.value(this.domNode);
	}
	deleteAt(e, t) {
		this.domNode.data = this.text = this.text.slice(0, e) + this.text.slice(e + t);
	}
	index(e, t) {
		return this.domNode === e ? t : -1;
	}
	insertAt(e, t, n) {
		n == null ? (this.text = this.text.slice(0, e) + t + this.text.slice(e), this.domNode.data = this.text) : super.insertAt(e, t, n);
	}
	length() {
		return this.text.length;
	}
	optimize(t) {
		super.optimize(t), this.text = this.statics.value(this.domNode), this.text.length === 0 ? this.remove() : this.next instanceof e && this.next.prev === this && (this.insertAt(this.length(), this.next.value()), this.next.remove());
	}
	position(e, t = !1) {
		return [this.domNode, e];
	}
	split(e, t = !1) {
		if (!t) {
			if (e === 0) return this;
			if (e === this.length()) return this.next;
		}
		let n = this.scroll.create(this.domNode.splitText(e));
		return this.parent.insertBefore(n, this.next || void 0), this.text = this.statics.value(this.domNode), n;
	}
	update(e, t) {
		e.some((e) => e.type === "characterData" && e.target === this.domNode) && (this.text = this.statics.value(this.domNode));
	}
	value() {
		return this.text;
	}
};
ao.blotName = "text", ao.scope = I.INLINE_BLOT;
var oo = ao, so = /* @__PURE__ */ o(((e, t) => {
	var n = -1, r = 1, i = 0;
	function a(e, t, n, r, a) {
		if (e === t) return e ? [[i, e]] : [];
		if (n != null) {
			var s = D(e, t, n);
			if (s) return s;
		}
		var c = l(e, t), u = e.substring(0, c);
		e = e.substring(c), t = t.substring(c), c = d(e, t);
		var f = e.substring(e.length - c);
		e = e.substring(0, e.length - c), t = t.substring(0, t.length - c);
		var m = o(e, t);
		return u && m.unshift([i, u]), f && m.push([i, f]), b(m, a), r && p(m), m;
	}
	function o(e, t) {
		var o;
		if (!e) return [[r, t]];
		if (!t) return [[n, e]];
		var c = e.length > t.length ? e : t, l = e.length > t.length ? t : e, u = c.indexOf(l);
		if (u !== -1) return o = [
			[r, c.substring(0, u)],
			[i, l],
			[r, c.substring(u + l.length)]
		], e.length > t.length && (o[0][0] = o[2][0] = n), o;
		if (l.length === 1) return [[n, e], [r, t]];
		var d = f(e, t);
		if (d) {
			var p = d[0], m = d[1], h = d[2], g = d[3], _ = d[4], v = a(p, h), y = a(m, g);
			return v.concat([[i, _]], y);
		}
		return s(e, t);
	}
	function s(e, t) {
		for (var i = e.length, a = t.length, o = Math.ceil((i + a) / 2), s = o, l = 2 * o, u = Array(l), d = Array(l), f = 0; f < l; f++) u[f] = -1, d[f] = -1;
		u[s + 1] = 0, d[s + 1] = 0;
		for (var p = i - a, m = p % 2 != 0, h = 0, g = 0, _ = 0, v = 0, y = 0; y < o; y++) {
			for (var b = -y + h; b <= y - g; b += 2) {
				for (var x = s + b, S = b === -y || b !== y && u[x - 1] < u[x + 1] ? u[x + 1] : u[x - 1] + 1, C = S - b; S < i && C < a && e.charAt(S) === t.charAt(C);) S++, C++;
				if (u[x] = S, S > i) g += 2;
				else if (C > a) h += 2;
				else if (m) {
					var w = s + p - b;
					if (w >= 0 && w < l && d[w] !== -1) {
						var T = i - d[w];
						if (S >= T) return c(e, t, S, C);
					}
				}
			}
			for (var E = -y + _; E <= y - v; E += 2) {
				for (var w = s + E, T = E === -y || E !== y && d[w - 1] < d[w + 1] ? d[w + 1] : d[w - 1] + 1, D = T - E; T < i && D < a && e.charAt(i - T - 1) === t.charAt(a - D - 1);) T++, D++;
				if (d[w] = T, T > i) v += 2;
				else if (D > a) _ += 2;
				else if (!m) {
					var x = s + p - E;
					if (x >= 0 && x < l && u[x] !== -1) {
						var S = u[x], C = s + S - x;
						if (T = i - T, S >= T) return c(e, t, S, C);
					}
				}
			}
		}
		return [[n, e], [r, t]];
	}
	function c(e, t, n, r) {
		var i = e.substring(0, n), o = t.substring(0, r), s = e.substring(n), c = t.substring(r), l = a(i, o), u = a(s, c);
		return l.concat(u);
	}
	function l(e, t) {
		if (!e || !t || e.charAt(0) !== t.charAt(0)) return 0;
		for (var n = 0, r = Math.min(e.length, t.length), i = r, a = 0; n < i;) e.substring(a, i) == t.substring(a, i) ? (n = i, a = n) : r = i, i = Math.floor((r - n) / 2 + n);
		return x(e.charCodeAt(i - 1)) && i--, i;
	}
	function u(e, t) {
		var n = e.length, r = t.length;
		if (n == 0 || r == 0) return 0;
		n > r ? e = e.substring(n - r) : n < r && (t = t.substring(0, n));
		var i = Math.min(n, r);
		if (e == t) return i;
		for (var a = 0, o = 1;;) {
			var s = e.substring(i - o), c = t.indexOf(s);
			if (c == -1) return a;
			o += c, (c == 0 || e.substring(i - o) == t.substring(0, o)) && (a = o, o++);
		}
	}
	function d(e, t) {
		if (!e || !t || e.slice(-1) !== t.slice(-1)) return 0;
		for (var n = 0, r = Math.min(e.length, t.length), i = r, a = 0; n < i;) e.substring(e.length - i, e.length - a) == t.substring(t.length - i, t.length - a) ? (n = i, a = n) : r = i, i = Math.floor((r - n) / 2 + n);
		return S(e.charCodeAt(e.length - i)) && i--, i;
	}
	function f(e, t) {
		var n = e.length > t.length ? e : t, r = e.length > t.length ? t : e;
		if (n.length < 4 || r.length * 2 < n.length) return null;
		function i(e, t, n) {
			for (var r = e.substring(n, n + Math.floor(e.length / 4)), i = -1, a = "", o, s, c, u; (i = t.indexOf(r, i + 1)) !== -1;) {
				var f = l(e.substring(n), t.substring(i)), p = d(e.substring(0, n), t.substring(0, i));
				a.length < p + f && (a = t.substring(i - p, i) + t.substring(i, i + f), o = e.substring(0, n - p), s = e.substring(n + f), c = t.substring(0, i - p), u = t.substring(i + f));
			}
			return a.length * 2 >= e.length ? [
				o,
				s,
				c,
				u,
				a
			] : null;
		}
		var a = i(n, r, Math.ceil(n.length / 4)), o = i(n, r, Math.ceil(n.length / 2)), s;
		if (!a && !o) return null;
		s = o ? a && a[4].length > o[4].length ? a : o : a;
		var c, u, f, p;
		e.length > t.length ? (c = s[0], u = s[1], f = s[2], p = s[3]) : (f = s[0], p = s[1], c = s[2], u = s[3]);
		var m = s[4];
		return [
			c,
			u,
			f,
			p,
			m
		];
	}
	function p(e) {
		for (var t = !1, a = [], o = 0, s = null, c = 0, l = 0, d = 0, f = 0, p = 0; c < e.length;) e[c][0] == i ? (a[o++] = c, l = f, d = p, f = 0, p = 0, s = e[c][1]) : (e[c][0] == r ? f += e[c][1].length : p += e[c][1].length, s && s.length <= Math.max(l, d) && s.length <= Math.max(f, p) && (e.splice(a[o - 1], 0, [n, s]), e[a[o - 1] + 1][0] = r, o--, o--, c = o > 0 ? a[o - 1] : -1, l = 0, d = 0, f = 0, p = 0, s = null, t = !0)), c++;
		for (t && b(e), y(e), c = 1; c < e.length;) {
			if (e[c - 1][0] == n && e[c][0] == r) {
				var m = e[c - 1][1], h = e[c][1], g = u(m, h), _ = u(h, m);
				g >= _ ? (g >= m.length / 2 || g >= h.length / 2) && (e.splice(c, 0, [i, h.substring(0, g)]), e[c - 1][1] = m.substring(0, m.length - g), e[c + 1][1] = h.substring(g), c++) : (_ >= m.length / 2 || _ >= h.length / 2) && (e.splice(c, 0, [i, m.substring(0, _)]), e[c - 1][0] = r, e[c - 1][1] = h.substring(0, h.length - _), e[c + 1][0] = n, e[c + 1][1] = m.substring(_), c++), c++;
			}
			c++;
		}
	}
	var m = /[^a-zA-Z0-9]/, h = /\s/, g = /[\r\n]/, _ = /\n\r?\n$/, v = /^\r?\n\r?\n/;
	function y(e) {
		function t(e, t) {
			if (!e || !t) return 6;
			var n = e.charAt(e.length - 1), r = t.charAt(0), i = n.match(m), a = r.match(m), o = i && n.match(h), s = a && r.match(h), c = o && n.match(g), l = s && r.match(g), u = c && e.match(_), d = l && t.match(v);
			return u || d ? 5 : c || l ? 4 : i && !o && s ? 3 : o || s ? 2 : i || a ? 1 : 0;
		}
		for (var n = 1; n < e.length - 1;) {
			if (e[n - 1][0] == i && e[n + 1][0] == i) {
				var r = e[n - 1][1], a = e[n][1], o = e[n + 1][1], s = d(r, a);
				if (s) {
					var c = a.substring(a.length - s);
					r = r.substring(0, r.length - s), a = c + a.substring(0, a.length - s), o = c + o;
				}
				for (var l = r, u = a, f = o, p = t(r, a) + t(a, o); a.charAt(0) === o.charAt(0);) {
					r += a.charAt(0), a = a.substring(1) + o.charAt(0), o = o.substring(1);
					var y = t(r, a) + t(a, o);
					y >= p && (p = y, l = r, u = a, f = o);
				}
				e[n - 1][1] != l && (l ? e[n - 1][1] = l : (e.splice(n - 1, 1), n--), e[n][1] = u, f ? e[n + 1][1] = f : (e.splice(n + 1, 1), n--));
			}
			n++;
		}
	}
	function b(e, t) {
		e.push([i, ""]);
		for (var a = 0, o = 0, s = 0, c = "", u = "", f; a < e.length;) if (a < e.length - 1 && !e[a][1]) e.splice(a, 1);
		else switch (e[a][0]) {
			case r:
				s++, u += e[a][1], a++;
				break;
			case n:
				o++, c += e[a][1], a++;
				break;
			case i:
				var p = a - s - o - 1;
				if (t) {
					if (p >= 0 && w(e[p][1])) {
						var m = e[p][1].slice(-1);
						if (e[p][1] = e[p][1].slice(0, -1), c = m + c, u = m + u, !e[p][1]) {
							e.splice(p, 1), a--;
							var h = p - 1;
							e[h] && e[h][0] === r && (s++, u = e[h][1] + u, h--), e[h] && e[h][0] === n && (o++, c = e[h][1] + c, h--), p = h;
						}
					}
					if (C(e[a][1])) {
						var m = e[a][1].charAt(0);
						e[a][1] = e[a][1].slice(1), c += m, u += m;
					}
				}
				if (a < e.length - 1 && !e[a][1]) {
					e.splice(a, 1);
					break;
				}
				if (c.length > 0 || u.length > 0) {
					c.length > 0 && u.length > 0 && (f = l(u, c), f !== 0 && (p >= 0 ? e[p][1] += u.substring(0, f) : (e.splice(0, 0, [i, u.substring(0, f)]), a++), u = u.substring(f), c = c.substring(f)), f = d(u, c), f !== 0 && (e[a][1] = u.substring(u.length - f) + e[a][1], u = u.substring(0, u.length - f), c = c.substring(0, c.length - f)));
					var g = s + o;
					c.length === 0 && u.length === 0 ? (e.splice(a - g, g), a -= g) : c.length === 0 ? (e.splice(a - g, g, [r, u]), a = a - g + 1) : u.length === 0 ? (e.splice(a - g, g, [n, c]), a = a - g + 1) : (e.splice(a - g, g, [n, c], [r, u]), a = a - g + 2);
				}
				a !== 0 && e[a - 1][0] === i ? (e[a - 1][1] += e[a][1], e.splice(a, 1)) : a++, s = 0, o = 0, c = "", u = "";
		}
		e[e.length - 1][1] === "" && e.pop();
		var _ = !1;
		for (a = 1; a < e.length - 1;) e[a - 1][0] === i && e[a + 1][0] === i && (e[a][1].substring(e[a][1].length - e[a - 1][1].length) === e[a - 1][1] ? (e[a][1] = e[a - 1][1] + e[a][1].substring(0, e[a][1].length - e[a - 1][1].length), e[a + 1][1] = e[a - 1][1] + e[a + 1][1], e.splice(a - 1, 1), _ = !0) : e[a][1].substring(0, e[a + 1][1].length) == e[a + 1][1] && (e[a - 1][1] += e[a + 1][1], e[a][1] = e[a][1].substring(e[a + 1][1].length) + e[a + 1][1], e.splice(a + 1, 1), _ = !0)), a++;
		_ && b(e, t);
	}
	function x(e) {
		return e >= 55296 && e <= 56319;
	}
	function S(e) {
		return e >= 56320 && e <= 57343;
	}
	function C(e) {
		return S(e.charCodeAt(0));
	}
	function w(e) {
		return x(e.charCodeAt(e.length - 1));
	}
	function T(e) {
		for (var t = [], n = 0; n < e.length; n++) e[n][1].length > 0 && t.push(e[n]);
		return t;
	}
	function E(e, t, a, o) {
		return w(e) || C(o) ? null : T([
			[i, e],
			[n, t],
			[r, a],
			[i, o]
		]);
	}
	function D(e, t, n) {
		var r = typeof n == "number" ? {
			index: n,
			length: 0
		} : n.oldRange, i = typeof n == "number" ? null : n.newRange, a = e.length, o = t.length;
		if (r.length === 0 && (i === null || i.length === 0)) {
			var s = r.index, c = e.slice(0, s), l = e.slice(s), u = i ? i.index : null;
			editBefore: {
				var d = s + o - a;
				if (u !== null && u !== d || d < 0 || d > o) break editBefore;
				var f = t.slice(0, d), p = t.slice(d);
				if (p !== l) break editBefore;
				var m = Math.min(s, d), h = c.slice(0, m), g = f.slice(0, m);
				if (h !== g) break editBefore;
				var _ = c.slice(m), v = f.slice(m);
				return E(h, _, v, l);
			}
			editAfter: {
				if (u !== null && u !== s) break editAfter;
				var y = s, f = t.slice(0, y), p = t.slice(y);
				if (f !== c) break editAfter;
				var b = Math.min(a - y, o - y), x = l.slice(l.length - b), S = p.slice(p.length - b);
				if (x !== S) break editAfter;
				var _ = l.slice(0, l.length - b), v = p.slice(0, p.length - b);
				return E(c, _, v, x);
			}
		}
		if (r.length > 0 && i && i.length === 0) replaceRange: {
			var h = e.slice(0, r.index), x = e.slice(r.index + r.length), m = h.length, b = x.length;
			if (o < m + b) break replaceRange;
			var g = t.slice(0, m), S = t.slice(o - b);
			if (h !== g || x !== S) break replaceRange;
			var _ = e.slice(m, a - b), v = t.slice(m, o - b);
			return E(h, _, v, x);
		}
		return null;
	}
	function O(e, t, n, r) {
		return a(e, t, n, r, !0);
	}
	O.INSERT = r, O.DELETE = n, O.EQUAL = i, t.exports = O;
})), co = /* @__PURE__ */ o(((e, t) => {
	var n = "__lodash_hash_undefined__", r = 9007199254740991, i = "[object Arguments]", a = "[object Array]", o = "[object Boolean]", s = "[object Date]", c = "[object Error]", l = "[object Function]", u = "[object GeneratorFunction]", d = "[object Map]", f = "[object Number]", p = "[object Object]", m = "[object Promise]", h = "[object RegExp]", g = "[object Set]", _ = "[object String]", v = "[object Symbol]", y = "[object WeakMap]", b = "[object ArrayBuffer]", x = "[object DataView]", S = "[object Float32Array]", C = "[object Float64Array]", w = "[object Int8Array]", T = "[object Int16Array]", E = "[object Int32Array]", D = "[object Uint8Array]", O = "[object Uint8ClampedArray]", ee = "[object Uint16Array]", te = "[object Uint32Array]", ne = /[\\^$.*+?()[\]{}|]/g, k = /\w*$/, A = /^\[object .+?Constructor\]$/, re = /^(?:0|[1-9]\d*)$/, j = {};
	j[i] = j[a] = j[b] = j[x] = j[o] = j[s] = j[S] = j[C] = j[w] = j[T] = j[E] = j[d] = j[f] = j[p] = j[h] = j[g] = j[_] = j[v] = j[D] = j[O] = j[ee] = j[te] = !0, j[c] = j[l] = j[y] = !1;
	var ie = typeof global == "object" && global && global.Object === Object && global, ae = typeof self == "object" && self && self.Object === Object && self, M = ie || ae || Function("return this")(), N = typeof e == "object" && e && !e.nodeType && e, oe = N && typeof t == "object" && t && !t.nodeType && t, se = oe && oe.exports === N;
	function ce(e, t) {
		return e.set(t[0], t[1]), e;
	}
	function le(e, t) {
		return e.add(t), e;
	}
	function ue(e, t) {
		for (var n = -1, r = e ? e.length : 0; ++n < r && t(e[n], n, e) !== !1;);
		return e;
	}
	function de(e, t) {
		for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
		return e;
	}
	function fe(e, t, n, r) {
		var i = -1, a = e ? e.length : 0;
		for (r && a && (n = e[++i]); ++i < a;) n = t(n, e[i], i, e);
		return n;
	}
	function pe(e, t) {
		for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
		return r;
	}
	function me(e, t) {
		return e?.[t];
	}
	function he(e) {
		var t = !1;
		if (e != null && typeof e.toString != "function") try {
			t = !!(e + "");
		} catch {}
		return t;
	}
	function ge(e) {
		var t = -1, n = Array(e.size);
		return e.forEach(function(e, r) {
			n[++t] = [r, e];
		}), n;
	}
	function _e(e, t) {
		return function(n) {
			return e(t(n));
		};
	}
	function ve(e) {
		var t = -1, n = Array(e.size);
		return e.forEach(function(e) {
			n[++t] = e;
		}), n;
	}
	var ye = Array.prototype, be = Function.prototype, xe = Object.prototype, Se = M["__core-js_shared__"], Ce = function() {
		var e = /[^.]+$/.exec(Se && Se.keys && Se.keys.IE_PROTO || "");
		return e ? "Symbol(src)_1." + e : "";
	}(), we = be.toString, Te = xe.hasOwnProperty, Ee = xe.toString, De = RegExp("^" + we.call(Te).replace(ne, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), Oe = se ? M.Buffer : void 0, ke = M.Symbol, Ae = M.Uint8Array, je = _e(Object.getPrototypeOf, Object), Me = Object.create, Ne = xe.propertyIsEnumerable, Pe = ye.splice, Fe = Object.getOwnPropertySymbols, Ie = Oe ? Oe.isBuffer : void 0, Le = _e(Object.keys, Object), Re = Ut(M, "DataView"), ze = Ut(M, "Map"), Be = Ut(M, "Promise"), Ve = Ut(M, "Set"), He = Ut(M, "WeakMap"), Ue = Ut(Object, "create"), We = $t(Re), Ge = $t(ze), Ke = $t(Be), qe = $t(Ve), Je = $t(He), Ye = ke ? ke.prototype : void 0, Xe = Ye ? Ye.valueOf : void 0;
	function Ze(e) {
		var t = -1, n = e ? e.length : 0;
		for (this.clear(); ++t < n;) {
			var r = e[t];
			this.set(r[0], r[1]);
		}
	}
	function Qe() {
		this.__data__ = Ue ? Ue(null) : {};
	}
	function $e(e) {
		return this.has(e) && delete this.__data__[e];
	}
	function et(e) {
		var t = this.__data__;
		if (Ue) {
			var r = t[e];
			return r === n ? void 0 : r;
		}
		return Te.call(t, e) ? t[e] : void 0;
	}
	function tt(e) {
		var t = this.__data__;
		return Ue ? t[e] !== void 0 : Te.call(t, e);
	}
	function nt(e, t) {
		var r = this.__data__;
		return r[e] = Ue && t === void 0 ? n : t, this;
	}
	Ze.prototype.clear = Qe, Ze.prototype.delete = $e, Ze.prototype.get = et, Ze.prototype.has = tt, Ze.prototype.set = nt;
	function rt(e) {
		var t = -1, n = e ? e.length : 0;
		for (this.clear(); ++t < n;) {
			var r = e[t];
			this.set(r[0], r[1]);
		}
	}
	function it() {
		this.__data__ = [];
	}
	function at(e) {
		var t = this.__data__, n = Ct(t, e);
		return n < 0 ? !1 : (n == t.length - 1 ? t.pop() : Pe.call(t, n, 1), !0);
	}
	function ot(e) {
		var t = this.__data__, n = Ct(t, e);
		return n < 0 ? void 0 : t[n][1];
	}
	function st(e) {
		return Ct(this.__data__, e) > -1;
	}
	function ct(e, t) {
		var n = this.__data__, r = Ct(n, e);
		return r < 0 ? n.push([e, t]) : n[r][1] = t, this;
	}
	rt.prototype.clear = it, rt.prototype.delete = at, rt.prototype.get = ot, rt.prototype.has = st, rt.prototype.set = ct;
	function lt(e) {
		var t = -1, n = e ? e.length : 0;
		for (this.clear(); ++t < n;) {
			var r = e[t];
			this.set(r[0], r[1]);
		}
	}
	function ut() {
		this.__data__ = {
			hash: new Ze(),
			map: new (ze || rt)(),
			string: new Ze()
		};
	}
	function dt(e) {
		return Ht(this, e).delete(e);
	}
	function ft(e) {
		return Ht(this, e).get(e);
	}
	function pt(e) {
		return Ht(this, e).has(e);
	}
	function mt(e, t) {
		return Ht(this, e).set(e, t), this;
	}
	lt.prototype.clear = ut, lt.prototype.delete = dt, lt.prototype.get = ft, lt.prototype.has = pt, lt.prototype.set = mt;
	function ht(e) {
		this.__data__ = new rt(e);
	}
	function gt() {
		this.__data__ = new rt();
	}
	function _t(e) {
		return this.__data__.delete(e);
	}
	function vt(e) {
		return this.__data__.get(e);
	}
	function yt(e) {
		return this.__data__.has(e);
	}
	function bt(e, t) {
		var n = this.__data__;
		if (n instanceof rt) {
			var r = n.__data__;
			if (!ze || r.length < 199) return r.push([e, t]), this;
			n = this.__data__ = new lt(r);
		}
		return n.set(e, t), this;
	}
	ht.prototype.clear = gt, ht.prototype.delete = _t, ht.prototype.get = vt, ht.prototype.has = yt, ht.prototype.set = bt;
	function xt(e, t) {
		var n = rn(e) || nn(e) ? pe(e.length, String) : [], r = n.length, i = !!r;
		for (var a in e) (t || Te.call(e, a)) && (!i || a != "length" && !Yt(a, r)) && n.push(a);
		return n;
	}
	function St(e, t, n) {
		var r = e[t];
		(!(Te.call(e, t) && tn(r, n)) || n === void 0 && !(t in e)) && (e[t] = n);
	}
	function Ct(e, t) {
		for (var n = e.length; n--;) if (tn(e[n][0], t)) return n;
		return -1;
	}
	function wt(e, t) {
		return e && zt(t, fn(t), e);
	}
	function Tt(e, t, n, r, a, o, s) {
		var c;
		if (r && (c = o ? r(e, a, o, s) : r(e)), c !== void 0) return c;
		if (!un(e)) return e;
		var d = rn(e);
		if (d) {
			if (c = Kt(e), !t) return Rt(e, c);
		} else {
			var f = Gt(e), m = f == l || f == u;
			if (sn(e)) return At(e, t);
			if (f == p || f == i || m && !o) {
				if (he(e)) return o ? e : {};
				if (c = qt(m ? {} : e), !t) return Bt(e, wt(c, e));
			} else {
				if (!j[f]) return o ? e : {};
				c = Jt(e, f, Tt, t);
			}
		}
		s ||= new ht();
		var h = s.get(e);
		if (h) return h;
		if (s.set(e, c), !d) var g = n ? Vt(e) : fn(e);
		return ue(g || e, function(i, a) {
			g && (a = i, i = e[a]), St(c, a, Tt(i, t, n, r, a, e, s));
		}), c;
	}
	function Et(e) {
		return un(e) ? Me(e) : {};
	}
	function Dt(e, t, n) {
		var r = t(e);
		return rn(e) ? r : de(r, n(e));
	}
	function P(e) {
		return Ee.call(e);
	}
	function Ot(e) {
		return !un(e) || Zt(e) ? !1 : (cn(e) || he(e) ? De : A).test($t(e));
	}
	function kt(e) {
		if (!Qt(e)) return Le(e);
		var t = [];
		for (var n in Object(e)) Te.call(e, n) && n != "constructor" && t.push(n);
		return t;
	}
	function At(e, t) {
		if (t) return e.slice();
		var n = new e.constructor(e.length);
		return e.copy(n), n;
	}
	function jt(e) {
		var t = new e.constructor(e.byteLength);
		return new Ae(t).set(new Ae(e)), t;
	}
	function Mt(e, t) {
		var n = t ? jt(e.buffer) : e.buffer;
		return new e.constructor(n, e.byteOffset, e.byteLength);
	}
	function Nt(e, t, n) {
		return fe(t ? n(ge(e), !0) : ge(e), ce, new e.constructor());
	}
	function Pt(e) {
		var t = new e.constructor(e.source, k.exec(e));
		return t.lastIndex = e.lastIndex, t;
	}
	function Ft(e, t, n) {
		return fe(t ? n(ve(e), !0) : ve(e), le, new e.constructor());
	}
	function It(e) {
		return Xe ? Object(Xe.call(e)) : {};
	}
	function Lt(e, t) {
		var n = t ? jt(e.buffer) : e.buffer;
		return new e.constructor(n, e.byteOffset, e.length);
	}
	function Rt(e, t) {
		var n = -1, r = e.length;
		for (t ||= Array(r); ++n < r;) t[n] = e[n];
		return t;
	}
	function zt(e, t, n, r) {
		n ||= {};
		for (var i = -1, a = t.length; ++i < a;) {
			var o = t[i], s = r ? r(n[o], e[o], o, n, e) : void 0;
			St(n, o, s === void 0 ? e[o] : s);
		}
		return n;
	}
	function Bt(e, t) {
		return zt(e, Wt(e), t);
	}
	function Vt(e) {
		return Dt(e, fn, Wt);
	}
	function Ht(e, t) {
		var n = e.__data__;
		return Xt(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
	}
	function Ut(e, t) {
		var n = me(e, t);
		return Ot(n) ? n : void 0;
	}
	var Wt = Fe ? _e(Fe, Object) : pn, Gt = P;
	(Re && Gt(new Re(/* @__PURE__ */ new ArrayBuffer(1))) != x || ze && Gt(new ze()) != d || Be && Gt(Be.resolve()) != m || Ve && Gt(new Ve()) != g || He && Gt(new He()) != y) && (Gt = function(e) {
		var t = Ee.call(e), n = t == p ? e.constructor : void 0, r = n ? $t(n) : void 0;
		if (r) switch (r) {
			case We: return x;
			case Ge: return d;
			case Ke: return m;
			case qe: return g;
			case Je: return y;
		}
		return t;
	});
	function Kt(e) {
		var t = e.length, n = e.constructor(t);
		return t && typeof e[0] == "string" && Te.call(e, "index") && (n.index = e.index, n.input = e.input), n;
	}
	function qt(e) {
		return typeof e.constructor == "function" && !Qt(e) ? Et(je(e)) : {};
	}
	function Jt(e, t, n, r) {
		var i = e.constructor;
		switch (t) {
			case b: return jt(e);
			case o:
			case s: return new i(+e);
			case x: return Mt(e, r);
			case S:
			case C:
			case w:
			case T:
			case E:
			case D:
			case O:
			case ee:
			case te: return Lt(e, r);
			case d: return Nt(e, r, n);
			case f:
			case _: return new i(e);
			case h: return Pt(e);
			case g: return Ft(e, r, n);
			case v: return It(e);
		}
	}
	function Yt(e, t) {
		return t ??= r, !!t && (typeof e == "number" || re.test(e)) && e > -1 && e % 1 == 0 && e < t;
	}
	function Xt(e) {
		var t = typeof e;
		return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
	}
	function Zt(e) {
		return !!Ce && Ce in e;
	}
	function Qt(e) {
		var t = e && e.constructor;
		return e === (typeof t == "function" && t.prototype || xe);
	}
	function $t(e) {
		if (e != null) {
			try {
				return we.call(e);
			} catch {}
			try {
				return e + "";
			} catch {}
		}
		return "";
	}
	function en(e) {
		return Tt(e, !0, !0);
	}
	function tn(e, t) {
		return e === t || e !== e && t !== t;
	}
	function nn(e) {
		return on(e) && Te.call(e, "callee") && (!Ne.call(e, "callee") || Ee.call(e) == i);
	}
	var rn = Array.isArray;
	function an(e) {
		return e != null && ln(e.length) && !cn(e);
	}
	function on(e) {
		return dn(e) && an(e);
	}
	var sn = Ie || mn;
	function cn(e) {
		var t = un(e) ? Ee.call(e) : "";
		return t == l || t == u;
	}
	function ln(e) {
		return typeof e == "number" && e > -1 && e % 1 == 0 && e <= r;
	}
	function un(e) {
		var t = typeof e;
		return !!e && (t == "object" || t == "function");
	}
	function dn(e) {
		return !!e && typeof e == "object";
	}
	function fn(e) {
		return an(e) ? xt(e) : kt(e);
	}
	function pn() {
		return [];
	}
	function mn() {
		return !1;
	}
	t.exports = en;
})), lo = /* @__PURE__ */ o(((e, t) => {
	var n = "__lodash_hash_undefined__", r = 9007199254740991, i = "[object Arguments]", a = "[object Array]", o = "[object Boolean]", s = "[object Date]", c = "[object Error]", l = "[object Function]", u = "[object Map]", d = "[object Number]", f = "[object Object]", p = "[object Promise]", m = "[object RegExp]", h = "[object Set]", g = "[object String]", _ = "[object WeakMap]", v = "[object ArrayBuffer]", y = "[object DataView]", b = "[object Float32Array]", x = "[object Float64Array]", S = "[object Int8Array]", C = "[object Int16Array]", w = "[object Int32Array]", T = "[object Uint8Array]", E = "[object Uint8ClampedArray]", D = "[object Uint16Array]", O = "[object Uint32Array]", ee = /[\\^$.*+?()[\]{}|]/g, te = /^\[object .+?Constructor\]$/, ne = /^(?:0|[1-9]\d*)$/, k = {};
	k[b] = k[x] = k[S] = k[C] = k[w] = k[T] = k[E] = k[D] = k[O] = !0, k[i] = k[a] = k[v] = k[o] = k[y] = k[s] = k[c] = k[l] = k[u] = k[d] = k[f] = k[m] = k[h] = k[g] = k[_] = !1;
	var A = typeof global == "object" && global && global.Object === Object && global, re = typeof self == "object" && self && self.Object === Object && self, j = A || re || Function("return this")(), ie = typeof e == "object" && e && !e.nodeType && e, ae = ie && typeof t == "object" && t && !t.nodeType && t, M = ae && ae.exports === ie, N = M && A.process, oe = function() {
		try {
			return N && N.binding && N.binding("util");
		} catch {}
	}(), se = oe && oe.isTypedArray;
	function ce(e, t) {
		for (var n = -1, r = e == null ? 0 : e.length, i = 0, a = []; ++n < r;) {
			var o = e[n];
			t(o, n, e) && (a[i++] = o);
		}
		return a;
	}
	function le(e, t) {
		for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
		return e;
	}
	function ue(e, t) {
		for (var n = -1, r = e == null ? 0 : e.length; ++n < r;) if (t(e[n], n, e)) return !0;
		return !1;
	}
	function de(e, t) {
		for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
		return r;
	}
	function fe(e) {
		return function(t) {
			return e(t);
		};
	}
	function pe(e, t) {
		return e.has(t);
	}
	function me(e, t) {
		return e?.[t];
	}
	function he(e) {
		var t = -1, n = Array(e.size);
		return e.forEach(function(e, r) {
			n[++t] = [r, e];
		}), n;
	}
	function ge(e, t) {
		return function(n) {
			return e(t(n));
		};
	}
	function _e(e) {
		var t = -1, n = Array(e.size);
		return e.forEach(function(e) {
			n[++t] = e;
		}), n;
	}
	var ve = Array.prototype, ye = Function.prototype, be = Object.prototype, xe = j["__core-js_shared__"], Se = ye.toString, Ce = be.hasOwnProperty, we = function() {
		var e = /[^.]+$/.exec(xe && xe.keys && xe.keys.IE_PROTO || "");
		return e ? "Symbol(src)_1." + e : "";
	}(), Te = be.toString, Ee = RegExp("^" + Se.call(Ce).replace(ee, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), De = M ? j.Buffer : void 0, Oe = j.Symbol, ke = j.Uint8Array, Ae = be.propertyIsEnumerable, je = ve.splice, Me = Oe ? Oe.toStringTag : void 0, Ne = Object.getOwnPropertySymbols, Pe = De ? De.isBuffer : void 0, Fe = ge(Object.keys, Object), Ie = It(j, "DataView"), Le = It(j, "Map"), Re = It(j, "Promise"), ze = It(j, "Set"), Be = It(j, "WeakMap"), Ve = It(Object, "create"), He = Gt(Ie), Ue = Gt(Le), We = Gt(Re), Ge = Gt(ze), Ke = Gt(Be), qe = Oe ? Oe.prototype : void 0, Je = qe ? qe.valueOf : void 0;
	function Ye(e) {
		var t = -1, n = e == null ? 0 : e.length;
		for (this.clear(); ++t < n;) {
			var r = e[t];
			this.set(r[0], r[1]);
		}
	}
	function Xe() {
		this.__data__ = Ve ? Ve(null) : {}, this.size = 0;
	}
	function Ze(e) {
		var t = this.has(e) && delete this.__data__[e];
		return this.size -= +!!t, t;
	}
	function Qe(e) {
		var t = this.__data__;
		if (Ve) {
			var r = t[e];
			return r === n ? void 0 : r;
		}
		return Ce.call(t, e) ? t[e] : void 0;
	}
	function $e(e) {
		var t = this.__data__;
		return Ve ? t[e] !== void 0 : Ce.call(t, e);
	}
	function et(e, t) {
		var r = this.__data__;
		return this.size += +!this.has(e), r[e] = Ve && t === void 0 ? n : t, this;
	}
	Ye.prototype.clear = Xe, Ye.prototype.delete = Ze, Ye.prototype.get = Qe, Ye.prototype.has = $e, Ye.prototype.set = et;
	function tt(e) {
		var t = -1, n = e == null ? 0 : e.length;
		for (this.clear(); ++t < n;) {
			var r = e[t];
			this.set(r[0], r[1]);
		}
	}
	function nt() {
		this.__data__ = [], this.size = 0;
	}
	function rt(e) {
		var t = this.__data__, n = Ct(t, e);
		return n < 0 ? !1 : (n == t.length - 1 ? t.pop() : je.call(t, n, 1), --this.size, !0);
	}
	function it(e) {
		var t = this.__data__, n = Ct(t, e);
		return n < 0 ? void 0 : t[n][1];
	}
	function at(e) {
		return Ct(this.__data__, e) > -1;
	}
	function ot(e, t) {
		var n = this.__data__, r = Ct(n, e);
		return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
	}
	tt.prototype.clear = nt, tt.prototype.delete = rt, tt.prototype.get = it, tt.prototype.has = at, tt.prototype.set = ot;
	function st(e) {
		var t = -1, n = e == null ? 0 : e.length;
		for (this.clear(); ++t < n;) {
			var r = e[t];
			this.set(r[0], r[1]);
		}
	}
	function ct() {
		this.size = 0, this.__data__ = {
			hash: new Ye(),
			map: new (Le || tt)(),
			string: new Ye()
		};
	}
	function lt(e) {
		var t = Ft(this, e).delete(e);
		return this.size -= +!!t, t;
	}
	function ut(e) {
		return Ft(this, e).get(e);
	}
	function dt(e) {
		return Ft(this, e).has(e);
	}
	function ft(e, t) {
		var n = Ft(this, e), r = n.size;
		return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
	}
	st.prototype.clear = ct, st.prototype.delete = lt, st.prototype.get = ut, st.prototype.has = dt, st.prototype.set = ft;
	function pt(e) {
		var t = -1, n = e == null ? 0 : e.length;
		for (this.__data__ = new st(); ++t < n;) this.add(e[t]);
	}
	function mt(e) {
		return this.__data__.set(e, n), this;
	}
	function ht(e) {
		return this.__data__.has(e);
	}
	pt.prototype.add = pt.prototype.push = mt, pt.prototype.has = ht;
	function gt(e) {
		var t = this.__data__ = new tt(e);
		this.size = t.size;
	}
	function _t() {
		this.__data__ = new tt(), this.size = 0;
	}
	function vt(e) {
		var t = this.__data__, n = t.delete(e);
		return this.size = t.size, n;
	}
	function yt(e) {
		return this.__data__.get(e);
	}
	function bt(e) {
		return this.__data__.has(e);
	}
	function xt(e, t) {
		var n = this.__data__;
		if (n instanceof tt) {
			var r = n.__data__;
			if (!Le || r.length < 199) return r.push([e, t]), this.size = ++n.size, this;
			n = this.__data__ = new st(r);
		}
		return n.set(e, t), this.size = n.size, this;
	}
	gt.prototype.clear = _t, gt.prototype.delete = vt, gt.prototype.get = yt, gt.prototype.has = bt, gt.prototype.set = xt;
	function St(e, t) {
		var n = Jt(e), r = !n && qt(e), i = !n && !r && Xt(e), a = !n && !r && !i && nn(e), o = n || r || i || a, s = o ? de(e.length, String) : [], c = s.length;
		for (var l in e) (t || Ce.call(e, l)) && !(o && (l == "length" || i && (l == "offset" || l == "parent") || a && (l == "buffer" || l == "byteLength" || l == "byteOffset") || Bt(l, c))) && s.push(l);
		return s;
	}
	function Ct(e, t) {
		for (var n = e.length; n--;) if (Kt(e[n][0], t)) return n;
		return -1;
	}
	function wt(e, t, n) {
		var r = t(e);
		return Jt(e) ? r : le(r, n(e));
	}
	function Tt(e) {
		return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Me && Me in Object(e) ? Lt(e) : Wt(e);
	}
	function Et(e) {
		return tn(e) && Tt(e) == i;
	}
	function Dt(e, t, n, r, i) {
		return e === t ? !0 : e == null || t == null || !tn(e) && !tn(t) ? e !== e && t !== t : P(e, t, n, r, Dt, i);
	}
	function P(e, t, n, r, o, s) {
		var c = Jt(e), l = Jt(t), u = c ? a : zt(e), d = l ? a : zt(t);
		u = u == i ? f : u, d = d == i ? f : d;
		var p = u == f, m = d == f, h = u == d;
		if (h && Xt(e)) {
			if (!Xt(t)) return !1;
			c = !0, p = !1;
		}
		if (h && !p) return s ||= new gt(), c || nn(e) ? jt(e, t, n, r, o, s) : Mt(e, t, u, n, r, o, s);
		if (!(n & 1)) {
			var g = p && Ce.call(e, "__wrapped__"), _ = m && Ce.call(t, "__wrapped__");
			if (g || _) {
				var v = g ? e.value() : e, y = _ ? t.value() : t;
				return s ||= new gt(), o(v, y, n, r, s);
			}
		}
		return h ? (s ||= new gt(), Nt(e, t, n, r, o, s)) : !1;
	}
	function Ot(e) {
		return !en(e) || Ht(e) ? !1 : (Qt(e) ? Ee : te).test(Gt(e));
	}
	function kt(e) {
		return tn(e) && $t(e.length) && !!k[Tt(e)];
	}
	function At(e) {
		if (!Ut(e)) return Fe(e);
		var t = [];
		for (var n in Object(e)) Ce.call(e, n) && n != "constructor" && t.push(n);
		return t;
	}
	function jt(e, t, n, r, i, a) {
		var o = n & 1, s = e.length, c = t.length;
		if (s != c && !(o && c > s)) return !1;
		var l = a.get(e);
		if (l && a.get(t)) return l == t;
		var u = -1, d = !0, f = n & 2 ? new pt() : void 0;
		for (a.set(e, t), a.set(t, e); ++u < s;) {
			var p = e[u], m = t[u];
			if (r) var h = o ? r(m, p, u, t, e, a) : r(p, m, u, e, t, a);
			if (h !== void 0) {
				if (h) continue;
				d = !1;
				break;
			}
			if (f) {
				if (!ue(t, function(e, t) {
					if (!pe(f, t) && (p === e || i(p, e, n, r, a))) return f.push(t);
				})) {
					d = !1;
					break;
				}
			} else if (!(p === m || i(p, m, n, r, a))) {
				d = !1;
				break;
			}
		}
		return a.delete(e), a.delete(t), d;
	}
	function Mt(e, t, n, r, i, a, l) {
		switch (n) {
			case y:
				if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
				e = e.buffer, t = t.buffer;
			case v: return !(e.byteLength != t.byteLength || !a(new ke(e), new ke(t)));
			case o:
			case s:
			case d: return Kt(+e, +t);
			case c: return e.name == t.name && e.message == t.message;
			case m:
			case g: return e == t + "";
			case u: var f = he;
			case h:
				var p = r & 1;
				if (f ||= _e, e.size != t.size && !p) return !1;
				var _ = l.get(e);
				if (_) return _ == t;
				r |= 2, l.set(e, t);
				var b = jt(f(e), f(t), r, i, a, l);
				return l.delete(e), b;
			case "[object Symbol]": if (Je) return Je.call(e) == Je.call(t);
		}
		return !1;
	}
	function Nt(e, t, n, r, i, a) {
		var o = n & 1, s = Pt(e), c = s.length;
		if (c != Pt(t).length && !o) return !1;
		for (var l = c; l--;) {
			var u = s[l];
			if (!(o ? u in t : Ce.call(t, u))) return !1;
		}
		var d = a.get(e);
		if (d && a.get(t)) return d == t;
		var f = !0;
		a.set(e, t), a.set(t, e);
		for (var p = o; ++l < c;) {
			u = s[l];
			var m = e[u], h = t[u];
			if (r) var g = o ? r(h, m, u, t, e, a) : r(m, h, u, e, t, a);
			if (!(g === void 0 ? m === h || i(m, h, n, r, a) : g)) {
				f = !1;
				break;
			}
			p ||= u == "constructor";
		}
		if (f && !p) {
			var _ = e.constructor, v = t.constructor;
			_ != v && "constructor" in e && "constructor" in t && !(typeof _ == "function" && _ instanceof _ && typeof v == "function" && v instanceof v) && (f = !1);
		}
		return a.delete(e), a.delete(t), f;
	}
	function Pt(e) {
		return wt(e, rn, Rt);
	}
	function Ft(e, t) {
		var n = e.__data__;
		return Vt(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
	}
	function It(e, t) {
		var n = me(e, t);
		return Ot(n) ? n : void 0;
	}
	function Lt(e) {
		var t = Ce.call(e, Me), n = e[Me];
		try {
			e[Me] = void 0;
			var r = !0;
		} catch {}
		var i = Te.call(e);
		return r && (t ? e[Me] = n : delete e[Me]), i;
	}
	var Rt = Ne ? function(e) {
		return e == null ? [] : (e = Object(e), ce(Ne(e), function(t) {
			return Ae.call(e, t);
		}));
	} : an, zt = Tt;
	(Ie && zt(new Ie(/* @__PURE__ */ new ArrayBuffer(1))) != y || Le && zt(new Le()) != u || Re && zt(Re.resolve()) != p || ze && zt(new ze()) != h || Be && zt(new Be()) != _) && (zt = function(e) {
		var t = Tt(e), n = t == f ? e.constructor : void 0, r = n ? Gt(n) : "";
		if (r) switch (r) {
			case He: return y;
			case Ue: return u;
			case We: return p;
			case Ge: return h;
			case Ke: return _;
		}
		return t;
	});
	function Bt(e, t) {
		return t ??= r, !!t && (typeof e == "number" || ne.test(e)) && e > -1 && e % 1 == 0 && e < t;
	}
	function Vt(e) {
		var t = typeof e;
		return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
	}
	function Ht(e) {
		return !!we && we in e;
	}
	function Ut(e) {
		var t = e && e.constructor;
		return e === (typeof t == "function" && t.prototype || be);
	}
	function Wt(e) {
		return Te.call(e);
	}
	function Gt(e) {
		if (e != null) {
			try {
				return Se.call(e);
			} catch {}
			try {
				return e + "";
			} catch {}
		}
		return "";
	}
	function Kt(e, t) {
		return e === t || e !== e && t !== t;
	}
	var qt = Et(function() {
		return arguments;
	}()) ? Et : function(e) {
		return tn(e) && Ce.call(e, "callee") && !Ae.call(e, "callee");
	}, Jt = Array.isArray;
	function Yt(e) {
		return e != null && $t(e.length) && !Qt(e);
	}
	var Xt = Pe || on;
	function Zt(e, t) {
		return Dt(e, t);
	}
	function Qt(e) {
		if (!en(e)) return !1;
		var t = Tt(e);
		return t == l || t == "[object GeneratorFunction]" || t == "[object AsyncFunction]" || t == "[object Proxy]";
	}
	function $t(e) {
		return typeof e == "number" && e > -1 && e % 1 == 0 && e <= r;
	}
	function en(e) {
		var t = typeof e;
		return e != null && (t == "object" || t == "function");
	}
	function tn(e) {
		return typeof e == "object" && !!e;
	}
	var nn = se ? fe(se) : kt;
	function rn(e) {
		return Yt(e) ? St(e) : At(e);
	}
	function an() {
		return [];
	}
	function on() {
		return !1;
	}
	t.exports = Zt;
})), uo = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = co(), n = lo(), r;
	(function(e) {
		function r(e = {}, n = {}, r = !1) {
			typeof e != "object" && (e = {}), typeof n != "object" && (n = {});
			let i = t(n);
			r || (i = Object.keys(i).reduce((e, t) => (i[t] != null && (e[t] = i[t]), e), {}));
			for (let t in e) e[t] !== void 0 && n[t] === void 0 && (i[t] = e[t]);
			return Object.keys(i).length > 0 ? i : void 0;
		}
		e.compose = r;
		function i(e = {}, t = {}) {
			typeof e != "object" && (e = {}), typeof t != "object" && (t = {});
			let r = Object.keys(e).concat(Object.keys(t)).reduce((r, i) => (n(e[i], t[i]) || (r[i] = t[i] === void 0 ? null : t[i]), r), {});
			return Object.keys(r).length > 0 ? r : void 0;
		}
		e.diff = i;
		function a(e = {}, t = {}) {
			e ||= {};
			let n = Object.keys(t).reduce((n, r) => (t[r] !== e[r] && e[r] !== void 0 && (n[r] = t[r]), n), {});
			return Object.keys(e).reduce((n, r) => (e[r] !== t[r] && t[r] === void 0 && (n[r] = null), n), n);
		}
		e.invert = a;
		function o(e, t, n = !1) {
			if (typeof e != "object") return t;
			if (typeof t != "object") return;
			if (!n) return t;
			let r = Object.keys(t).reduce((n, r) => (e[r] === void 0 && (n[r] = t[r]), n), {});
			return Object.keys(r).length > 0 ? r : void 0;
		}
		e.transform = o;
	})(r ||= {}), e.default = r;
})), fo = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t;
	(function(e) {
		function t(e) {
			return typeof e.delete == "number" ? e.delete : typeof e.retain == "number" ? e.retain : typeof e.retain == "object" && e.retain !== null ? 1 : typeof e.insert == "string" ? e.insert.length : 1;
		}
		e.length = t;
	})(t ||= {}), e.default = t;
})), po = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = fo();
	e.default = class {
		constructor(e) {
			this.ops = e, this.index = 0, this.offset = 0;
		}
		hasNext() {
			return this.peekLength() < Infinity;
		}
		next(e) {
			e ||= Infinity;
			let n = this.ops[this.index];
			if (n) {
				let r = this.offset, i = t.default.length(n);
				if (e >= i - r ? (e = i - r, this.index += 1, this.offset = 0) : this.offset += e, typeof n.delete == "number") return { delete: e };
				{
					let t = {};
					return n.attributes && (t.attributes = n.attributes), typeof n.retain == "number" ? t.retain = e : typeof n.retain == "object" && n.retain !== null ? t.retain = n.retain : t.insert = typeof n.insert == "string" ? n.insert.substr(r, e) : n.insert, t;
				}
			}
			return { retain: Infinity };
		}
		peek() {
			return this.ops[this.index];
		}
		peekLength() {
			return this.ops[this.index] ? t.default.length(this.ops[this.index]) - this.offset : Infinity;
		}
		peekType() {
			let e = this.ops[this.index];
			return e ? typeof e.delete == "number" ? "delete" : typeof e.retain == "number" || typeof e.retain == "object" && e.retain !== null ? "retain" : "insert" : "retain";
		}
		rest() {
			if (!this.hasNext()) return [];
			if (this.offset === 0) return this.ops.slice(this.index);
			{
				let e = this.offset, t = this.index, n = this.next(), r = this.ops.slice(this.index);
				return this.offset = e, this.index = t, [n].concat(r);
			}
		}
	};
})), R = /* @__PURE__ */ l((/* @__PURE__ */ o(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.AttributeMap = e.OpIterator = e.Op = void 0;
	var n = so(), r = co(), i = lo(), a = uo();
	e.AttributeMap = a.default;
	var o = fo();
	e.Op = o.default;
	var s = po();
	e.OpIterator = s.default;
	var c = "\0", l = (e, t) => {
		if (typeof e != "object" || !e) throw Error(`cannot retain a ${typeof e}`);
		if (typeof t != "object" || !t) throw Error(`cannot retain a ${typeof t}`);
		let n = Object.keys(e)[0];
		if (!n || n !== Object.keys(t)[0]) throw Error(`embed types not matched: ${n} != ${Object.keys(t)[0]}`);
		return [
			n,
			e[n],
			t[n]
		];
	}, u = class e {
		constructor(e) {
			this.ops = Array.isArray(e) ? e : e != null && Array.isArray(e.ops) ? e.ops : [];
		}
		static registerEmbed(e, t) {
			this.handlers[e] = t;
		}
		static unregisterEmbed(e) {
			delete this.handlers[e];
		}
		static getHandler(e) {
			let t = this.handlers[e];
			if (!t) throw Error(`no handlers for embed type "${e}"`);
			return t;
		}
		insert(e, t) {
			let n = {};
			return typeof e == "string" && e.length === 0 ? this : (n.insert = e, typeof t == "object" && t && Object.keys(t).length > 0 && (n.attributes = t), this.push(n));
		}
		delete(e) {
			return e <= 0 ? this : this.push({ delete: e });
		}
		retain(e, t) {
			if (typeof e == "number" && e <= 0) return this;
			let n = { retain: e };
			return typeof t == "object" && t && Object.keys(t).length > 0 && (n.attributes = t), this.push(n);
		}
		push(e) {
			let t = this.ops.length, n = this.ops[t - 1];
			if (e = r(e), typeof n == "object") {
				if (typeof e.delete == "number" && typeof n.delete == "number") return this.ops[t - 1] = { delete: n.delete + e.delete }, this;
				if (typeof n.delete == "number" && e.insert != null && (--t, n = this.ops[t - 1], typeof n != "object")) return this.ops.unshift(e), this;
				if (i(e.attributes, n.attributes)) {
					if (typeof e.insert == "string" && typeof n.insert == "string") return this.ops[t - 1] = { insert: n.insert + e.insert }, typeof e.attributes == "object" && (this.ops[t - 1].attributes = e.attributes), this;
					if (typeof e.retain == "number" && typeof n.retain == "number") return this.ops[t - 1] = { retain: n.retain + e.retain }, typeof e.attributes == "object" && (this.ops[t - 1].attributes = e.attributes), this;
				}
			}
			return t === this.ops.length ? this.ops.push(e) : this.ops.splice(t, 0, e), this;
		}
		chop() {
			let e = this.ops[this.ops.length - 1];
			return e && typeof e.retain == "number" && !e.attributes && this.ops.pop(), this;
		}
		filter(e) {
			return this.ops.filter(e);
		}
		forEach(e) {
			this.ops.forEach(e);
		}
		map(e) {
			return this.ops.map(e);
		}
		partition(e) {
			let t = [], n = [];
			return this.forEach((r) => {
				(e(r) ? t : n).push(r);
			}), [t, n];
		}
		reduce(e, t) {
			return this.ops.reduce(e, t);
		}
		changeLength() {
			return this.reduce((e, t) => t.insert ? e + o.default.length(t) : t.delete ? e - t.delete : e, 0);
		}
		length() {
			return this.reduce((e, t) => e + o.default.length(t), 0);
		}
		slice(t = 0, n = Infinity) {
			let r = [], i = new s.default(this.ops), a = 0;
			for (; a < n && i.hasNext();) {
				let e;
				a < t ? e = i.next(t - a) : (e = i.next(n - a), r.push(e)), a += o.default.length(e);
			}
			return new e(r);
		}
		compose(t) {
			let n = new s.default(this.ops), r = new s.default(t.ops), o = [], c = r.peek();
			if (c != null && typeof c.retain == "number" && c.attributes == null) {
				let e = c.retain;
				for (; n.peekType() === "insert" && n.peekLength() <= e;) e -= n.peekLength(), o.push(n.next());
				c.retain - e > 0 && r.next(c.retain - e);
			}
			let u = new e(o);
			for (; n.hasNext() || r.hasNext();) if (r.peekType() === "insert") u.push(r.next());
			else if (n.peekType() === "delete") u.push(n.next());
			else {
				let t = Math.min(n.peekLength(), r.peekLength()), o = n.next(t), s = r.next(t);
				if (s.retain) {
					let c = {};
					if (typeof o.retain == "number") c.retain = typeof s.retain == "number" ? t : s.retain;
					else if (typeof s.retain == "number") o.retain == null ? c.insert = o.insert : c.retain = o.retain;
					else {
						let t = o.retain == null ? "insert" : "retain", [n, r, i] = l(o[t], s.retain), a = e.getHandler(n);
						c[t] = { [n]: a.compose(r, i, t === "retain") };
					}
					let d = a.default.compose(o.attributes, s.attributes, typeof o.retain == "number");
					if (d && (c.attributes = d), u.push(c), !r.hasNext() && i(u.ops[u.ops.length - 1], c)) {
						let t = new e(n.rest());
						return u.concat(t).chop();
					}
				} else typeof s.delete == "number" && (typeof o.retain == "number" || typeof o.retain == "object" && o.retain !== null) && u.push(s);
			}
			return u.chop();
		}
		concat(t) {
			let n = new e(this.ops.slice());
			return t.ops.length > 0 && (n.push(t.ops[0]), n.ops = n.ops.concat(t.ops.slice(1))), n;
		}
		diff(t, r) {
			if (this.ops === t.ops) return new e();
			let o = [this, t].map((e) => e.map((n) => {
				if (n.insert != null) return typeof n.insert == "string" ? n.insert : c;
				throw Error("diff() called " + (e === t ? "on" : "with") + " non-document");
			}).join("")), l = new e(), u = n(o[0], o[1], r, !0), d = new s.default(this.ops), f = new s.default(t.ops);
			return u.forEach((e) => {
				let t = e[1].length;
				for (; t > 0;) {
					let r = 0;
					switch (e[0]) {
						case n.INSERT:
							r = Math.min(f.peekLength(), t), l.push(f.next(r));
							break;
						case n.DELETE:
							r = Math.min(t, d.peekLength()), d.next(r), l.delete(r);
							break;
						case n.EQUAL:
							r = Math.min(d.peekLength(), f.peekLength(), t);
							let e = d.next(r), o = f.next(r);
							i(e.insert, o.insert) ? l.retain(r, a.default.diff(e.attributes, o.attributes)) : l.push(o).delete(r);
					}
					t -= r;
				}
			}), l.chop();
		}
		eachLine(t, n = "\n") {
			let r = new s.default(this.ops), i = new e(), a = 0;
			for (; r.hasNext();) {
				if (r.peekType() !== "insert") return;
				let s = r.peek(), c = o.default.length(s) - r.peekLength(), l = typeof s.insert == "string" ? s.insert.indexOf(n, c) - c : -1;
				if (l < 0) i.push(r.next());
				else if (l > 0) i.push(r.next(l));
				else {
					if (t(i, r.next(1).attributes || {}, a) === !1) return;
					a += 1, i = new e();
				}
			}
			i.length() > 0 && t(i, {}, a);
		}
		invert(t) {
			let n = new e();
			return this.reduce((r, i) => {
				if (i.insert) n.delete(o.default.length(i));
				else if (typeof i.retain == "number" && i.attributes == null) return n.retain(i.retain), r + i.retain;
				else if (i.delete || typeof i.retain == "number") {
					let e = i.delete || i.retain;
					return t.slice(r, r + e).forEach((e) => {
						i.delete ? n.push(e) : i.retain && i.attributes && n.retain(o.default.length(e), a.default.invert(i.attributes, e.attributes));
					}), r + e;
				} else if (typeof i.retain == "object" && i.retain !== null) {
					let o = t.slice(r, r + 1), c = new s.default(o.ops).next(), [u, d, f] = l(i.retain, c.insert), p = e.getHandler(u);
					return n.retain({ [u]: p.invert(d, f) }, a.default.invert(i.attributes, c.attributes)), r + 1;
				}
				return r;
			}, 0), n.chop();
		}
		transform(t, n = !1) {
			if (n = !!n, typeof t == "number") return this.transformPosition(t, n);
			let r = t, i = new s.default(this.ops), c = new s.default(r.ops), l = new e();
			for (; i.hasNext() || c.hasNext();) if (i.peekType() === "insert" && (n || c.peekType() !== "insert")) l.retain(o.default.length(i.next()));
			else if (c.peekType() === "insert") l.push(c.next());
			else {
				let t = Math.min(i.peekLength(), c.peekLength()), r = i.next(t), o = c.next(t);
				if (r.delete) continue;
				if (o.delete) l.push(o);
				else {
					let i = r.retain, s = o.retain, c = typeof s == "object" && s ? s : t;
					if (typeof i == "object" && i && typeof s == "object" && s) {
						let t = Object.keys(i)[0];
						if (t === Object.keys(s)[0]) {
							let r = e.getHandler(t);
							r && (c = { [t]: r.transform(i[t], s[t], n) });
						}
					}
					l.retain(c, a.default.transform(r.attributes, o.attributes, n));
				}
			}
			return l.chop();
		}
		transformPosition(e, t = !1) {
			t = !!t;
			let n = new s.default(this.ops), r = 0;
			for (; n.hasNext() && r <= e;) {
				let i = n.peekLength(), a = n.peekType();
				n.next(), a === "delete" ? e -= Math.min(i, e - r) : (a === "insert" && (r < e || !t) && (e += i), r += i);
			}
			return e;
		}
	};
	u.Op = o.default, u.OpIterator = s.default, u.AttributeMap = a.default, u.handlers = {}, e.default = u, typeof t == "object" && (t.exports = u, t.exports.default = u);
})))(), 1), mo = class extends eo {
	static value() {}
	optimize() {
		(this.prev || this.next) && this.remove();
	}
	length() {
		return 0;
	}
	value() {
		return "";
	}
};
mo.blotName = "break", mo.tagName = "BR";
// node_modules/quill/blots/text.js
var ho = class extends oo {}, go = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	"\"": "&quot;",
	"'": "&#39;"
};
function _o(e) {
	return e.replace(/[&<>"']/g, (e) => go[e]);
}
// node_modules/quill/blots/inline.js
var vo = class e extends Ya {
	static allowedChildren = [
		e,
		mo,
		eo,
		ho
	];
	static order = [
		"cursor",
		"inline",
		"link",
		"underline",
		"strike",
		"italic",
		"bold",
		"script",
		"code"
	];
	static compare(t, n) {
		let r = e.order.indexOf(t), i = e.order.indexOf(n);
		return r >= 0 || i >= 0 ? r - i : t === n ? 0 : t < n ? -1 : 1;
	}
	formatAt(t, n, r, i) {
		if (e.compare(this.statics.blotName, r) < 0 && this.scroll.query(r, I.BLOT)) {
			let e = this.isolate(t, n);
			i && e.wrap(r, i);
		} else super.formatAt(t, n, r, i);
	}
	optimize(t) {
		if (super.optimize(t), this.parent instanceof e && e.compare(this.statics.blotName, this.parent.statics.blotName) > 0) {
			let e = this.parent.isolate(this.offset(), this.length());
			this.moveChildren(e), e.wrap(this);
		}
	}
}, yo = 1, z = class extends Za {
	cache = {};
	delta() {
		return this.cache.delta ?? (this.cache.delta = xo(this)), this.cache.delta;
	}
	deleteAt(e, t) {
		super.deleteAt(e, t), this.cache = {};
	}
	formatAt(e, t, n, r) {
		t <= 0 || (this.scroll.query(n, I.BLOCK) ? e + t === this.length() && this.format(n, r) : super.formatAt(e, Math.min(t, this.length() - e - 1), n, r), this.cache = {});
	}
	insertAt(e, t, n) {
		if (n != null) {
			super.insertAt(e, t, n), this.cache = {};
			return;
		}
		if (t.length === 0) return;
		let r = t.split("\n"), i = r.shift();
		i.length > 0 && (e < this.length() - 1 || this.children.tail == null ? super.insertAt(Math.min(e, this.length() - 1), i) : this.children.tail.insertAt(this.children.tail.length(), i), this.cache = {});
		let a = this;
		r.reduce((e, t) => (a = a.split(e, !0), a.insertAt(0, t), t.length), e + i.length);
	}
	insertBefore(e, t) {
		let { head: n } = this.children;
		super.insertBefore(e, t), n instanceof mo && n.remove(), this.cache = {};
	}
	length() {
		return this.cache.length ?? (this.cache.length = super.length() + yo), this.cache.length;
	}
	moveChildren(e, t) {
		super.moveChildren(e, t), this.cache = {};
	}
	optimize(e) {
		super.optimize(e), this.cache = {};
	}
	path(e) {
		return super.path(e, !0);
	}
	removeChild(e) {
		super.removeChild(e), this.cache = {};
	}
	split(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
		if (t && (e === 0 || e >= this.length() - yo)) {
			let t = this.clone();
			return e === 0 ? (this.parent.insertBefore(t, this), this) : (this.parent.insertBefore(t, this.next), t);
		}
		let n = super.split(e, t);
		return this.cache = {}, n;
	}
};
z.blotName = "block", z.tagName = "P", z.defaultChild = mo, z.allowedChildren = [
	mo,
	vo,
	eo,
	ho
];
var bo = class extends eo {
	attach() {
		super.attach(), this.attributes = new za(this.domNode);
	}
	delta() {
		return new R.default().insert(this.value(), {
			...this.formats(),
			...this.attributes.values()
		});
	}
	format(e, t) {
		let n = this.scroll.query(e, I.BLOCK_ATTRIBUTE);
		n != null && this.attributes.attribute(n, t);
	}
	formatAt(e, t, n, r) {
		this.format(n, r);
	}
	insertAt(e, t, n) {
		if (n != null) {
			super.insertAt(e, t, n);
			return;
		}
		let r = t.split("\n"), i = r.pop(), a = r.map((e) => {
			let t = this.scroll.create(z.blotName);
			return t.insertAt(0, e), t;
		}), o = this.split(e);
		a.forEach((e) => {
			this.parent.insertBefore(e, o);
		}), i && this.parent.insertBefore(this.scroll.create("text", i), o);
	}
};
bo.scope = I.BLOCK_BLOT;
function xo(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
	return e.descendants(L).reduce((e, n) => n.length() === 0 ? e : e.insert(n.value(), So(n, {}, t)), new R.default()).insert("\n", So(e));
}
function So(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
	return e == null || ("formats" in e && typeof e.formats == "function" && (t = {
		...t,
		...e.formats()
	}, n && delete t["code-token"]), e.parent == null || e.parent.statics.blotName === "scroll" || e.parent.statics.scope !== e.statics.scope) ? t : So(e.parent, t, n);
}
// node_modules/quill/blots/cursor.js
var Co = class e extends eo {
	static blotName = "cursor";
	static className = "ql-cursor";
	static tagName = "span";
	static CONTENTS = "﻿";
	static value() {}
	constructor(t, n, r) {
		super(t, n), this.selection = r, this.textNode = document.createTextNode(e.CONTENTS), this.domNode.appendChild(this.textNode), this.savedLength = 0;
	}
	detach() {
		this.parent != null && this.parent.removeChild(this);
	}
	format(t, n) {
		if (this.savedLength !== 0) {
			super.format(t, n);
			return;
		}
		let r = this, i = 0;
		for (; r != null && r.statics.scope !== I.BLOCK_BLOT;) i += r.offset(r.parent), r = r.parent;
		r != null && (this.savedLength = e.CONTENTS.length, r.optimize(), r.formatAt(i, e.CONTENTS.length, t, n), this.savedLength = 0);
	}
	index(e, t) {
		return e === this.textNode ? 0 : super.index(e, t);
	}
	length() {
		return this.savedLength;
	}
	position() {
		return [this.textNode, this.textNode.data.length];
	}
	remove() {
		super.remove(), this.parent = null;
	}
	restore() {
		if (this.selection.composing || this.parent == null) return null;
		let t = this.selection.getNativeRange();
		for (; this.domNode.lastChild != null && this.domNode.lastChild !== this.textNode;) this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);
		let n = this.prev instanceof ho ? this.prev : null, r = n ? n.length() : 0, i = this.next instanceof ho ? this.next : null, a = i ? i.text : "", { textNode: o } = this, s = o.data.split(e.CONTENTS).join("");
		o.data = e.CONTENTS;
		let c;
		if (n) c = n, (s || i) && (n.insertAt(n.length(), s + a), i && i.remove());
		else if (i) c = i, i.insertAt(0, s);
		else {
			let e = document.createTextNode(s);
			c = this.scroll.create(e), this.parent.insertBefore(c, this);
		}
		if (this.remove(), t) {
			let e = (e, t) => n && e === n.domNode ? t : e === o ? r + t - 1 : i && e === i.domNode ? r + s.length + t : null, a = e(t.start.node, t.start.offset), l = e(t.end.node, t.end.offset);
			if (a !== null && l !== null) return {
				startNode: c.domNode,
				startOffset: a,
				endNode: c.domNode,
				endOffset: l
			};
		}
		return null;
	}
	update(e, t) {
		if (e.some((e) => e.type === "characterData" && e.target === this.textNode)) {
			let e = this.restore();
			e && (t.range = e);
		}
	}
	optimize(t) {
		super.optimize(t);
		let { parent: n } = this;
		for (; n;) {
			if (n.domNode.tagName === "A") {
				this.savedLength = e.CONTENTS.length, n.isolate(this.offset(n), this.length()).unwrap(), this.savedLength = 0;
				break;
			}
			n = n.parent;
		}
	}
	value() {
		return "";
	}
}, wo = /* @__PURE__ */ l((/* @__PURE__ */ o(((e, t) => {
	var n = Object.prototype.hasOwnProperty, r = "~";
	function i() {}
	Object.create && (i.prototype = Object.create(null), new i().__proto__ || (r = !1));
	function a(e, t, n) {
		this.fn = e, this.context = t, this.once = n || !1;
	}
	function o(e, t, n, i, o) {
		if (typeof n != "function") throw TypeError("The listener must be a function");
		var s = new a(n, i || e, o), c = r ? r + t : t;
		return e._events[c] ? e._events[c].fn ? e._events[c] = [e._events[c], s] : e._events[c].push(s) : (e._events[c] = s, e._eventsCount++), e;
	}
	function s(e, t) {
		--e._eventsCount === 0 ? e._events = new i() : delete e._events[t];
	}
	function c() {
		this._events = new i(), this._eventsCount = 0;
	}
	c.prototype.eventNames = function() {
		var e = [], t, i;
		if (this._eventsCount === 0) return e;
		for (i in t = this._events) n.call(t, i) && e.push(r ? i.slice(1) : i);
		return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e;
	}, c.prototype.listeners = function(e) {
		var t = r ? r + e : e, n = this._events[t];
		if (!n) return [];
		if (n.fn) return [n.fn];
		for (var i = 0, a = n.length, o = Array(a); i < a; i++) o[i] = n[i].fn;
		return o;
	}, c.prototype.listenerCount = function(e) {
		var t = r ? r + e : e, n = this._events[t];
		return n ? n.fn ? 1 : n.length : 0;
	}, c.prototype.emit = function(e, t, n, i, a, o) {
		var s = r ? r + e : e;
		if (!this._events[s]) return !1;
		var c = this._events[s], l = arguments.length, u, d;
		if (c.fn) {
			switch (c.once && this.removeListener(e, c.fn, void 0, !0), l) {
				case 1: return c.fn.call(c.context), !0;
				case 2: return c.fn.call(c.context, t), !0;
				case 3: return c.fn.call(c.context, t, n), !0;
				case 4: return c.fn.call(c.context, t, n, i), !0;
				case 5: return c.fn.call(c.context, t, n, i, a), !0;
				case 6: return c.fn.call(c.context, t, n, i, a, o), !0;
			}
			for (d = 1, u = Array(l - 1); d < l; d++) u[d - 1] = arguments[d];
			c.fn.apply(c.context, u);
		} else {
			var f = c.length, p;
			for (d = 0; d < f; d++) switch (c[d].once && this.removeListener(e, c[d].fn, void 0, !0), l) {
				case 1:
					c[d].fn.call(c[d].context);
					break;
				case 2:
					c[d].fn.call(c[d].context, t);
					break;
				case 3:
					c[d].fn.call(c[d].context, t, n);
					break;
				case 4:
					c[d].fn.call(c[d].context, t, n, i);
					break;
				default:
					if (!u) for (p = 1, u = Array(l - 1); p < l; p++) u[p - 1] = arguments[p];
					c[d].fn.apply(c[d].context, u);
			}
		}
		return !0;
	}, c.prototype.on = function(e, t, n) {
		return o(this, e, t, n, !1);
	}, c.prototype.once = function(e, t, n) {
		return o(this, e, t, n, !0);
	}, c.prototype.removeListener = function(e, t, n, i) {
		var a = r ? r + e : e;
		if (!this._events[a]) return this;
		if (!t) return s(this, a), this;
		var o = this._events[a];
		if (o.fn) o.fn !== t || i && !o.once || n && o.context !== n || s(this, a);
		else {
			for (var c = 0, l = [], u = o.length; c < u; c++) (o[c].fn !== t || i && !o[c].once || n && o[c].context !== n) && l.push(o[c]);
			l.length ? this._events[a] = l.length === 1 ? l[0] : l : s(this, a);
		}
		return this;
	}, c.prototype.removeAllListeners = function(e) {
		var t;
		return e ? (t = r ? r + e : e, this._events[t] && s(this, t)) : (this._events = new i(), this._eventsCount = 0), this;
	}, c.prototype.off = c.prototype.removeListener, c.prototype.addListener = c.prototype.on, c.prefixed = r, c.EventEmitter = c, t !== void 0 && (t.exports = c);
})))(), 1), To = /* @__PURE__ */ new WeakMap(), Eo = [
	"error",
	"warn",
	"log",
	"info"
], Do = "warn";
function Oo(e) {
	if (Do && Eo.indexOf(e) <= Eo.indexOf(Do)) {
		var t = [...arguments].slice(1);
		console[e](...t);
	}
}
function ko(e) {
	return Eo.reduce((t, n) => (t[n] = Oo.bind(console, n, e), t), {});
}
ko.level = (e) => {
	Do = e;
}, Oo.level = ko.level;
// node_modules/quill/core/emitter.js
var Ao = ko("quill:events");
[
	"selectionchange",
	"mousedown",
	"mouseup",
	"click"
].forEach((e) => {
	document.addEventListener(e, function() {
		var e = [...arguments];
		Array.from(document.querySelectorAll(".ql-container")).forEach((t) => {
			let n = To.get(t);
			n && n.emitter && n.emitter.handleDOM(...e);
		});
	});
});
var B = class extends wo.default {
	static events = {
		EDITOR_CHANGE: "editor-change",
		SCROLL_BEFORE_UPDATE: "scroll-before-update",
		SCROLL_BLOT_MOUNT: "scroll-blot-mount",
		SCROLL_BLOT_UNMOUNT: "scroll-blot-unmount",
		SCROLL_OPTIMIZE: "scroll-optimize",
		SCROLL_UPDATE: "scroll-update",
		SCROLL_EMBED_UPDATE: "scroll-embed-update",
		SELECTION_CHANGE: "selection-change",
		TEXT_CHANGE: "text-change",
		COMPOSITION_BEFORE_START: "composition-before-start",
		COMPOSITION_START: "composition-start",
		COMPOSITION_BEFORE_END: "composition-before-end",
		COMPOSITION_END: "composition-end"
	};
	static sources = {
		API: "api",
		SILENT: "silent",
		USER: "user"
	};
	constructor() {
		super(), this.domListeners = {}, this.on("error", Ao.error);
	}
	emit() {
		var e = [...arguments];
		return Ao.log.call(Ao, ...e), super.emit(...e);
	}
	handleDOM(e) {
		var t = [...arguments].slice(1);
		(this.domListeners[e.type] || []).forEach((n) => {
			let { node: r, handler: i } = n;
			(e.target === r || r.contains(e.target)) && i(e, ...t);
		});
	}
	listenDOM(e, t, n) {
		this.domListeners[e] || (this.domListeners[e] = []), this.domListeners[e].push({
			node: t,
			handler: n
		});
	}
}, jo = ko("quill:selection"), Mo = class {
	constructor(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
		this.index = e, this.length = t;
	}
}, No = class {
	constructor(e, t) {
		this.emitter = t, this.scroll = e, this.composing = !1, this.mouseDown = !1, this.root = this.scroll.domNode, this.cursor = this.scroll.create("cursor", this), this.savedRange = new Mo(0, 0), this.lastRange = this.savedRange, this.lastNative = null, this.handleComposition(), this.handleDragging(), this.emitter.listenDOM("selectionchange", document, () => {
			!this.mouseDown && !this.composing && setTimeout(this.update.bind(this, B.sources.USER), 1);
		}), this.emitter.on(B.events.SCROLL_BEFORE_UPDATE, () => {
			if (!this.hasFocus()) return;
			let e = this.getNativeRange();
			e != null && e.start.node !== this.cursor.textNode && this.emitter.once(B.events.SCROLL_UPDATE, (t, n) => {
				try {
					this.root.contains(e.start.node) && this.root.contains(e.end.node) && this.setNativeRange(e.start.node, e.start.offset, e.end.node, e.end.offset);
					let r = n.some((e) => e.type === "characterData" || e.type === "childList" || e.type === "attributes" && e.target === this.root);
					this.update(r ? B.sources.SILENT : t);
				} catch {}
			});
		}), this.emitter.on(B.events.SCROLL_OPTIMIZE, (e, t) => {
			if (t.range) {
				let { startNode: e, startOffset: n, endNode: r, endOffset: i } = t.range;
				this.setNativeRange(e, n, r, i), this.update(B.sources.SILENT);
			}
		}), this.update(B.sources.SILENT);
	}
	handleComposition() {
		this.emitter.on(B.events.COMPOSITION_BEFORE_START, () => {
			this.composing = !0;
		}), this.emitter.on(B.events.COMPOSITION_END, () => {
			if (this.composing = !1, this.cursor.parent) {
				let e = this.cursor.restore();
				if (!e) return;
				setTimeout(() => {
					this.setNativeRange(e.startNode, e.startOffset, e.endNode, e.endOffset);
				}, 1);
			}
		});
	}
	handleDragging() {
		this.emitter.listenDOM("mousedown", document.body, () => {
			this.mouseDown = !0;
		}), this.emitter.listenDOM("mouseup", document.body, () => {
			this.mouseDown = !1, this.update(B.sources.USER);
		});
	}
	focus() {
		this.hasFocus() || (this.root.focus({ preventScroll: !0 }), this.setRange(this.savedRange));
	}
	format(e, t) {
		this.scroll.update();
		let n = this.getNativeRange();
		if (n != null && n.native.collapsed && !this.scroll.query(e, I.BLOCK)) {
			if (n.start.node !== this.cursor.textNode) {
				let e = this.scroll.find(n.start.node, !1);
				if (e == null) return;
				if (e instanceof L) {
					let t = e.split(n.start.offset);
					e.parent.insertBefore(this.cursor, t);
				} else e.insertBefore(this.cursor, n.start.node);
				this.cursor.attach();
			}
			this.cursor.format(e, t), this.scroll.optimize(), this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length), this.update();
		}
	}
	getBounds(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = this.scroll.length();
		e = Math.min(e, n - 1), t = Math.min(e + t, n - 1) - e;
		let r, [i, a] = this.scroll.leaf(e);
		if (i == null) return null;
		if (t > 0 && a === i.length()) {
			let [t] = this.scroll.leaf(e + 1);
			if (t) {
				let [n] = this.scroll.line(e), [r] = this.scroll.line(e + 1);
				n === r && (i = t, a = 0);
			}
		}
		[r, a] = i.position(a, !0);
		let o = document.createRange();
		if (t > 0) return o.setStart(r, a), [i, a] = this.scroll.leaf(e + t), i == null ? null : ([r, a] = i.position(a, !0), o.setEnd(r, a), o.getBoundingClientRect());
		let s = "left", c;
		if (r instanceof Text) {
			if (!r.data.length) return null;
			a < r.data.length ? (o.setStart(r, a), o.setEnd(r, a + 1)) : (o.setStart(r, a - 1), o.setEnd(r, a), s = "right"), c = o.getBoundingClientRect();
		} else {
			if (!(i.domNode instanceof Element)) return null;
			c = i.domNode.getBoundingClientRect(), a > 0 && (s = "right");
		}
		return {
			bottom: c.top + c.height,
			height: c.height,
			left: c[s],
			right: c[s],
			top: c.top,
			width: 0
		};
	}
	getNativeRange() {
		let e = document.getSelection();
		if (e == null || e.rangeCount <= 0) return null;
		let t = e.getRangeAt(0);
		if (t == null) return null;
		let n = this.normalizeNative(t);
		return jo.info("getNativeRange", n), n;
	}
	getRange() {
		let e = this.scroll.domNode;
		if ("isConnected" in e && !e.isConnected) return [null, null];
		let t = this.getNativeRange();
		return t == null ? [null, null] : [this.normalizedToRange(t), t];
	}
	hasFocus() {
		return document.activeElement === this.root || document.activeElement != null && Po(this.root, document.activeElement);
	}
	normalizedToRange(e) {
		let t = [[e.start.node, e.start.offset]];
		e.native.collapsed || t.push([e.end.node, e.end.offset]);
		let n = t.map((e) => {
			let [t, n] = e, r = this.scroll.find(t, !0), i = r.offset(this.scroll);
			return n === 0 ? i : r instanceof L ? i + r.index(t, n) : i + r.length();
		}), r = Math.min(Math.max(...n), this.scroll.length() - 1), i = Math.min(r, ...n);
		return new Mo(i, r - i);
	}
	normalizeNative(e) {
		if (!Po(this.root, e.startContainer) || !e.collapsed && !Po(this.root, e.endContainer)) return null;
		let t = {
			start: {
				node: e.startContainer,
				offset: e.startOffset
			},
			end: {
				node: e.endContainer,
				offset: e.endOffset
			},
			native: e
		};
		return [t.start, t.end].forEach((e) => {
			let { node: t, offset: n } = e;
			for (; !(t instanceof Text) && t.childNodes.length > 0;) if (t.childNodes.length > n) t = t.childNodes[n], n = 0;
			else if (t.childNodes.length === n) t = t.lastChild, n = t instanceof Text ? t.data.length : t.childNodes.length > 0 ? t.childNodes.length : t.childNodes.length + 1;
			else break;
			e.node = t, e.offset = n;
		}), t;
	}
	rangeToNative(e) {
		let t = this.scroll.length(), n = (e, n) => {
			e = Math.min(t - 1, e);
			let [r, i] = this.scroll.leaf(e);
			return r ? r.position(i, n) : [null, -1];
		};
		return [...n(e.index, !1), ...n(e.index + e.length, !0)];
	}
	setNativeRange(e, t) {
		let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : t, i = arguments.length > 4 && arguments[4] !== void 0 && arguments[4];
		if (jo.info("setNativeRange", e, t, n, r), e != null && (this.root.parentNode == null || e.parentNode == null || n.parentNode == null)) return;
		let a = document.getSelection();
		if (a != null) {
			if (e != null) {
				this.hasFocus() || this.root.focus({ preventScroll: !0 });
				let { native: o } = this.getNativeRange() || {};
				if (o == null || i || e !== o.startContainer || t !== o.startOffset || n !== o.endContainer || r !== o.endOffset) {
					e instanceof Element && e.tagName === "BR" && (t = Array.from(e.parentNode.childNodes).indexOf(e), e = e.parentNode), n instanceof Element && n.tagName === "BR" && (r = Array.from(n.parentNode.childNodes).indexOf(n), n = n.parentNode);
					let i = document.createRange();
					i.setStart(e, t), i.setEnd(n, r), a.removeAllRanges(), a.addRange(i);
				}
			} else a.removeAllRanges(), this.root.blur();
		}
	}
	setRange(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : B.sources.API;
		if (typeof t == "string" && (n = t, t = !1), jo.info("setRange", e), e != null) {
			let n = this.rangeToNative(e);
			this.setNativeRange(...n, t);
		} else this.setNativeRange(null);
		this.update(n);
	}
	update() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : B.sources.USER, t = this.lastRange, [n, r] = this.getRange();
		if (this.lastRange = n, this.lastNative = r, this.lastRange != null && (this.savedRange = this.lastRange), !Oa(t, this.lastRange)) {
			if (!this.composing && r != null && r.native.collapsed && r.start.node !== this.cursor.textNode) {
				let e = this.cursor.restore();
				e && this.setNativeRange(e.startNode, e.startOffset, e.endNode, e.endOffset);
			}
			let n = [
				B.events.SELECTION_CHANGE,
				Ii(this.lastRange),
				Ii(t),
				e
			];
			this.emitter.emit(B.events.EDITOR_CHANGE, ...n), e !== B.sources.SILENT && this.emitter.emit(...n);
		}
	}
};
function Po(e, t) {
	try {
		t.parentNode;
	} catch {
		return !1;
	}
	return e.contains(t);
}
// node_modules/quill/core/editor.js
var Fo = /^[ -~]*$/, Io = class {
	constructor(e) {
		this.scroll = e, this.delta = this.getDelta();
	}
	applyDelta(e) {
		this.scroll.update();
		let t = this.scroll.length();
		this.scroll.batchStart();
		let n = Vo(e), r = new R.default();
		return Uo(n.ops.slice()).reduce((e, n) => {
			let i = R.Op.length(n), a = n.attributes || {}, o = !1, s = !1;
			if (n.insert != null) {
				if (r.retain(i), typeof n.insert == "string") {
					let r = n.insert;
					s = !r.endsWith("\n") && (t <= e || !!this.scroll.descendant(bo, e)[0]), this.scroll.insertAt(e, r);
					let [i, o] = this.scroll.line(e), c = ka({}, So(i));
					if (i instanceof z) {
						let [e] = i.descendant(L, o);
						e && (c = ka(c, So(e)));
					}
					a = R.AttributeMap.diff(c, a) || {};
				} else if (typeof n.insert == "object") {
					let r = Object.keys(n.insert)[0];
					if (r == null) return e;
					let i = this.scroll.query(r, I.INLINE) != null;
					if (i) (t <= e || this.scroll.descendant(bo, e)[0]) && (s = !0);
					else if (e > 0) {
						let [t, n] = this.scroll.descendant(L, e - 1);
						t instanceof ho ? t.value()[n] !== "\n" && (o = !0) : t instanceof eo && t.statics.scope === I.INLINE_BLOT && (o = !0);
					}
					if (this.scroll.insertAt(e, r, n.insert[r]), i) {
						let [t] = this.scroll.descendant(L, e);
						if (t) {
							let e = ka({}, So(t));
							a = R.AttributeMap.diff(e, a) || {};
						}
					}
				}
				t += i;
			} else if (r.push(n), n.retain !== null && typeof n.retain == "object") {
				let t = Object.keys(n.retain)[0];
				if (t == null) return e;
				this.scroll.updateEmbedAt(e, t, n.retain[t]);
			}
			Object.keys(a).forEach((t) => {
				this.scroll.formatAt(e, i, t, a[t]);
			});
			let c = +!!o, l = +!!s;
			return t += c + l, r.retain(c), r.delete(l), e + i + c + l;
		}, 0), r.reduce((e, t) => typeof t.delete == "number" ? (this.scroll.deleteAt(e, t.delete), e) : e + R.Op.length(t), 0), this.scroll.batchEnd(), this.scroll.optimize(), this.update(n);
	}
	deleteText(e, t) {
		return this.scroll.deleteAt(e, t), this.update(new R.default().retain(e).delete(t));
	}
	formatLine(e, t) {
		let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
		this.scroll.update(), Object.keys(n).forEach((r) => {
			this.scroll.lines(e, Math.max(t, 1)).forEach((e) => {
				e.format(r, n[r]);
			});
		}), this.scroll.optimize();
		let r = new R.default().retain(e).retain(t, Ii(n));
		return this.update(r);
	}
	formatText(e, t) {
		let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
		Object.keys(n).forEach((r) => {
			this.scroll.formatAt(e, t, r, n[r]);
		});
		let r = new R.default().retain(e).retain(t, Ii(n));
		return this.update(r);
	}
	getContents(e, t) {
		return this.delta.slice(e, e + t);
	}
	getDelta() {
		return this.scroll.lines().reduce((e, t) => e.concat(t.delta()), new R.default());
	}
	getFormat(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = [], r = [];
		t === 0 ? this.scroll.path(e).forEach((e) => {
			let [t] = e;
			t instanceof z ? n.push(t) : t instanceof L && r.push(t);
		}) : (n = this.scroll.lines(e, t), r = this.scroll.descendants(L, e, t));
		let [i, a] = [n, r].map((e) => {
			let t = e.shift();
			if (t == null) return {};
			let n = So(t);
			for (; Object.keys(n).length > 0;) {
				let t = e.shift();
				if (t == null) return n;
				n = zo(So(t), n);
			}
			return n;
		});
		return {
			...i,
			...a
		};
	}
	getHTML(e, t) {
		let [n, r] = this.scroll.line(e);
		if (n) {
			let i = n.length();
			return n.length() >= r + t && (r !== 0 || t !== i) ? Ro(n, r, t, !0) : Ro(this.scroll, e, t, !0);
		}
		return "";
	}
	getText(e, t) {
		return this.getContents(e, t).filter((e) => typeof e.insert == "string").map((e) => e.insert).join("");
	}
	insertContents(e, t) {
		let n = Vo(t), r = new R.default().retain(e).concat(n);
		return this.scroll.insertContents(e, n), this.update(r);
	}
	insertEmbed(e, t, n) {
		return this.scroll.insertAt(e, t, n), this.update(new R.default().retain(e).insert({ [t]: n }));
	}
	insertText(e, t) {
		let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
		return t = t.replace(/\r\n/g, "\n").replace(/\r/g, "\n"), this.scroll.insertAt(e, t), Object.keys(n).forEach((r) => {
			this.scroll.formatAt(e, t.length, r, n[r]);
		}), this.update(new R.default().retain(e).insert(t, Ii(n)));
	}
	isBlank() {
		if (this.scroll.children.length === 0) return !0;
		if (this.scroll.children.length > 1) return !1;
		let e = this.scroll.children.head;
		if (e?.statics.blotName !== z.blotName) return !1;
		let t = e;
		return t.children.length > 1 ? !1 : t.children.head instanceof mo;
	}
	removeFormat(e, t) {
		let n = this.getText(e, t), [r, i] = this.scroll.line(e + t), a = 0, o = new R.default();
		r != null && (a = r.length() - i, o = r.delta().slice(i, i + a - 1).insert("\n"));
		let s = this.getContents(e, t + a).diff(new R.default().insert(n).concat(o)), c = new R.default().retain(e).concat(s);
		return this.applyDelta(c);
	}
	update(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0, r = this.delta;
		if (t.length === 1 && t[0].type === "characterData" && t[0].target.data.match(Fo) && this.scroll.find(t[0].target)) {
			let i = this.scroll.find(t[0].target), a = So(i), o = i.offset(this.scroll), s = t[0].oldValue.replace(Co.CONTENTS, ""), c = new R.default().insert(s), l = new R.default().insert(i.value()), u = n && {
				oldRange: Ho(n.oldRange, -o),
				newRange: Ho(n.newRange, -o)
			};
			e = new R.default().retain(o).concat(c.diff(l, u)).reduce((e, t) => t.insert ? e.insert(t.insert, a) : e.push(t), new R.default()), this.delta = r.compose(e);
		} else this.delta = this.getDelta(), e && Oa(r.compose(e), this.delta) || (e = r.diff(this.delta, n));
		return e;
	}
};
function Lo(e, t, n) {
	if (e.length === 0) {
		let [e] = Bo(n.pop());
		return t <= 0 ? `</li></${e}>` : `</li></${e}>${Lo([], t - 1, n)}`;
	}
	let [{ child: r, offset: i, length: a, indent: o, type: s }, ...c] = e, [l, u] = Bo(s);
	if (o > t) return n.push(s), o === t + 1 ? `<${l}><li${u}>${Ro(r, i, a)}${Lo(c, o, n)}` : `<${l}><li>${Lo(e, t + 1, n)}`;
	let d = n[n.length - 1];
	if (o === t && s === d) return `</li><li${u}>${Ro(r, i, a)}${Lo(c, o, n)}`;
	let [f] = Bo(n.pop());
	return `</li></${f}>${Lo(e, t - 1, n)}`;
}
function Ro(e, t, n) {
	let r = arguments.length > 3 && arguments[3] !== void 0 && arguments[3];
	if ("html" in e && typeof e.html == "function") return e.html(t, n);
	if (e instanceof ho) return _o(e.value().slice(t, t + n)).replaceAll(" ", "&nbsp;");
	if (e instanceof Ka) {
		if (e.statics.blotName === "list-container") {
			let r = [];
			return e.children.forEachAt(t, n, (e, t, n) => {
				let i = "formats" in e && typeof e.formats == "function" ? e.formats() : {};
				r.push({
					child: e,
					offset: t,
					length: n,
					indent: i.indent || 0,
					type: i.list
				});
			}), Lo(r, -1, []);
		}
		let i = [];
		if (e.children.forEachAt(t, n, (e, t, n) => {
			i.push(Ro(e, t, n));
		}), r || e.statics.blotName === "list") return i.join("");
		let { outerHTML: a, innerHTML: o } = e.domNode, [s, c] = a.split(`>${o}<`);
		return s === "<table" ? `<table style="border: 1px solid #000;">${i.join("")}<${c}` : `${s}>${i.join("")}<${c}`;
	}
	return e.domNode instanceof Element ? e.domNode.outerHTML : "";
}
function zo(e, t) {
	return Object.keys(t).reduce((n, r) => {
		if (e[r] == null) return n;
		let i = t[r];
		return n[r] = i === e[r] ? i : Array.isArray(i) ? i.indexOf(e[r]) < 0 ? i.concat([e[r]]) : i : [i, e[r]], n;
	}, {});
}
function Bo(e) {
	let t = e === "ordered" ? "ol" : "ul";
	switch (e) {
		case "checked": return [t, " data-list=\"checked\""];
		case "unchecked": return [t, " data-list=\"unchecked\""];
		default: return [t, ""];
	}
}
function Vo(e) {
	return e.reduce((e, t) => {
		if (typeof t.insert == "string") {
			let n = t.insert.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
			return e.insert(n, t.attributes);
		}
		return e.push(t);
	}, new R.default());
}
function Ho(e, t) {
	let { index: n, length: r } = e;
	return new Mo(n + t, r);
}
function Uo(e) {
	let t = [];
	return e.forEach((e) => {
		typeof e.insert == "string" ? e.insert.split("\n").forEach((n, r) => {
			r && t.push({
				insert: "\n",
				attributes: e.attributes
			}), n && t.push({
				insert: n,
				attributes: e.attributes
			});
		}) : t.push(e);
	}), t;
}
// node_modules/quill/core/module.js
var Wo = class {
	static DEFAULTS = {};
	constructor(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		this.quill = e, this.options = t;
	}
}, Go = "﻿", Ko = class extends eo {
	constructor(e, t) {
		super(e, t), this.contentNode = document.createElement("span"), this.contentNode.setAttribute("contenteditable", "false"), Array.from(this.domNode.childNodes).forEach((e) => {
			this.contentNode.appendChild(e);
		}), this.leftGuard = document.createTextNode(Go), this.rightGuard = document.createTextNode(Go), this.domNode.appendChild(this.leftGuard), this.domNode.appendChild(this.contentNode), this.domNode.appendChild(this.rightGuard);
	}
	index(e, t) {
		return e === this.leftGuard ? 0 : e === this.rightGuard ? 1 : super.index(e, t);
	}
	restore(e) {
		let t = null, n, r = e.data.split(Go).join("");
		if (e === this.leftGuard) {
			if (this.prev instanceof ho) {
				let e = this.prev.length();
				this.prev.insertAt(e, r), t = {
					startNode: this.prev.domNode,
					startOffset: e + r.length
				};
			} else n = document.createTextNode(r), this.parent.insertBefore(this.scroll.create(n), this), t = {
				startNode: n,
				startOffset: r.length
			};
		} else e === this.rightGuard && (this.next instanceof ho ? (this.next.insertAt(0, r), t = {
			startNode: this.next.domNode,
			startOffset: r.length
		}) : (n = document.createTextNode(r), this.parent.insertBefore(this.scroll.create(n), this.next), t = {
			startNode: n,
			startOffset: r.length
		}));
		return e.data = Go, t;
	}
	update(e, t) {
		e.forEach((e) => {
			if (e.type === "characterData" && (e.target === this.leftGuard || e.target === this.rightGuard)) {
				let n = this.restore(e.target);
				n && (t.range = n);
			}
		});
	}
}, qo = class {
	isComposing = !1;
	constructor(e, t) {
		this.scroll = e, this.emitter = t, this.setupListeners();
	}
	setupListeners() {
		this.scroll.domNode.addEventListener("compositionstart", (e) => {
			this.isComposing || this.handleCompositionStart(e);
		}), this.scroll.domNode.addEventListener("compositionend", (e) => {
			this.isComposing && queueMicrotask(() => {
				this.handleCompositionEnd(e);
			});
		});
	}
	handleCompositionStart(e) {
		let t = e.target instanceof Node ? this.scroll.find(e.target, !0) : null;
		t && !(t instanceof Ko) && (this.emitter.emit(B.events.COMPOSITION_BEFORE_START, e), this.scroll.batchStart(), this.emitter.emit(B.events.COMPOSITION_START, e), this.isComposing = !0);
	}
	handleCompositionEnd(e) {
		this.emitter.emit(B.events.COMPOSITION_BEFORE_END, e), this.scroll.batchEnd(), this.emitter.emit(B.events.COMPOSITION_END, e), this.isComposing = !1;
	}
}, Jo = class e {
	static DEFAULTS = { modules: {} };
	static themes = { default: e };
	modules = {};
	constructor(e, t) {
		this.quill = e, this.options = t;
	}
	init() {
		Object.keys(this.options.modules).forEach((e) => {
			this.modules[e] ?? this.addModule(e);
		});
	}
	addModule(e) {
		let t = this.quill.constructor.import(`modules/${e}`);
		return this.modules[e] = new t(this.quill, this.options.modules[e] || {}), this.modules[e];
	}
}, Yo = (e) => e.parentElement || e.getRootNode().host || null, Xo = (e) => {
	let t = e.getBoundingClientRect(), n = "offsetWidth" in e && Math.abs(t.width) / e.offsetWidth || 1, r = "offsetHeight" in e && Math.abs(t.height) / e.offsetHeight || 1;
	return {
		top: t.top,
		right: t.left + e.clientWidth * n,
		bottom: t.top + e.clientHeight * r,
		left: t.left
	};
}, Zo = (e) => {
	let t = parseInt(e, 10);
	return Number.isNaN(t) ? 0 : t;
}, Qo = (e, t, n, r, i, a) => e < n && t > r ? 0 : e < n ? -(n - e + i) : t > r ? t - e > r - n ? e + i - n : t - r + a : 0, $o = (e, t) => {
	let n = e.ownerDocument, r = t, i = e;
	for (; i;) {
		let e = i === n.body, t = e ? {
			top: 0,
			right: window.visualViewport?.width ?? n.documentElement.clientWidth,
			bottom: window.visualViewport?.height ?? n.documentElement.clientHeight,
			left: 0
		} : Xo(i), a = getComputedStyle(i), o = Qo(r.left, r.right, t.left, t.right, Zo(a.scrollPaddingLeft), Zo(a.scrollPaddingRight)), s = Qo(r.top, r.bottom, t.top, t.bottom, Zo(a.scrollPaddingTop), Zo(a.scrollPaddingBottom));
		if (o || s) {
			if (e) n.defaultView?.scrollBy(o, s);
			else {
				let { scrollLeft: e, scrollTop: t } = i;
				s && (i.scrollTop += s), o && (i.scrollLeft += o);
				let n = i.scrollLeft - e, a = i.scrollTop - t;
				r = {
					left: r.left - n,
					top: r.top - a,
					right: r.right - n,
					bottom: r.bottom - a
				};
			}
		}
		i = e || a.position === "fixed" ? null : Yo(i);
	}
}, es = 100, ts = [
	"block",
	"break",
	"cursor",
	"inline",
	"scroll",
	"text"
], ns = (e, t, n) => {
	let r = new Pa();
	return ts.forEach((e) => {
		let n = t.query(e);
		n && r.register(n);
	}), e.forEach((e) => {
		let i = t.query(e);
		i || n.error(`Cannot register "${e}" specified in "formats" config. Are you sure it was registered?`);
		let a = 0;
		for (; i;) if (r.register(i), i = "blotName" in i ? i.requiredContainer ?? null : null, a += 1, a > es) {
			n.error(`Cycle detected in registering blot requiredContainer: "${e}"`);
			break;
		}
	}), r;
}, rs = ko("quill"), is = new Pa();
Ka.uiClass = "ql-ui";
var V = class e {
	static DEFAULTS = {
		bounds: null,
		modules: {
			clipboard: !0,
			keyboard: !0,
			history: !0,
			uploader: !0
		},
		placeholder: "",
		readOnly: !1,
		registry: is,
		theme: "default"
	};
	static events = B.events;
	static sources = B.sources;
	static version = "2.0.3";
	static imports = {
		delta: R.default,
		parchment: Aa,
		"core/module": Wo,
		"core/theme": Jo
	};
	static debug(e) {
		e === !0 && (e = "log"), ko.level(e);
	}
	static find(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
		return To.get(e) || is.find(e, t);
	}
	static import(e) {
		return this.imports[e] ?? rs.error(`Cannot import ${e}. Are you sure it was registered?`), this.imports[e];
	}
	static register() {
		if (typeof (arguments.length <= 0 ? void 0 : arguments[0]) != "string") {
			let e = arguments.length <= 0 ? void 0 : arguments[0], t = !(arguments.length <= 1 || !arguments[1]), n = "attrName" in e ? e.attrName : e.blotName;
			typeof n == "string" ? this.register(`formats/${n}`, e, t) : Object.keys(e).forEach((n) => {
				this.register(n, e[n], t);
			});
		} else {
			let e = arguments.length <= 0 ? void 0 : arguments[0], t = arguments.length <= 1 ? void 0 : arguments[1], n = !(arguments.length <= 2 || !arguments[2]);
			this.imports[e] != null && !n && rs.warn(`Overwriting ${e} with`, t), this.imports[e] = t, (e.startsWith("blots/") || e.startsWith("formats/")) && t && typeof t != "boolean" && t.blotName !== "abstract" && is.register(t), typeof t.register == "function" && t.register(is);
		}
	}
	constructor(t) {
		let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		if (this.options = cs(t, n), this.container = this.options.container, this.container == null) {
			rs.error("Invalid Quill container", t);
			return;
		}
		this.options.debug && e.debug(this.options.debug);
		let r = this.container.innerHTML.trim();
		this.container.classList.add("ql-container"), this.container.innerHTML = "", To.set(this.container, this), this.root = this.addContainer("ql-editor"), this.root.classList.add("ql-blank"), this.emitter = new B();
		let i = io.blotName, a = this.options.registry.query(i);
		if (!a || !("blotName" in a)) throw Error(`Cannot initialize Quill without "${i}" blot`);
		if (this.scroll = new a(this.options.registry, this.root, { emitter: this.emitter }), this.editor = new Io(this.scroll), this.selection = new No(this.scroll, this.emitter), this.composition = new qo(this.scroll, this.emitter), this.theme = new this.options.theme(this, this.options), this.keyboard = this.theme.addModule("keyboard"), this.clipboard = this.theme.addModule("clipboard"), this.history = this.theme.addModule("history"), this.uploader = this.theme.addModule("uploader"), this.theme.addModule("input"), this.theme.addModule("uiNode"), this.theme.init(), this.emitter.on(B.events.EDITOR_CHANGE, (e) => {
			e === B.events.TEXT_CHANGE && this.root.classList.toggle("ql-blank", this.editor.isBlank());
		}), this.emitter.on(B.events.SCROLL_UPDATE, (e, t) => {
			let n = this.selection.lastRange, [r] = this.selection.getRange(), i = n && r ? {
				oldRange: n,
				newRange: r
			} : void 0;
			ls.call(this, () => this.editor.update(null, t, i), e);
		}), this.emitter.on(B.events.SCROLL_EMBED_UPDATE, (t, n) => {
			let r = this.selection.lastRange, [i] = this.selection.getRange(), a = r && i ? {
				oldRange: r,
				newRange: i
			} : void 0;
			ls.call(this, () => {
				let e = new R.default().retain(t.offset(this)).retain({ [t.statics.blotName]: n });
				return this.editor.update(e, [], a);
			}, e.sources.USER);
		}), r) {
			let e = this.clipboard.convert({
				html: `${r}<p><br></p>`,
				text: "\n"
			});
			this.setContents(e);
		}
		this.history.clear(), this.options.placeholder && this.root.setAttribute("data-placeholder", this.options.placeholder), this.options.readOnly && this.disable(), this.allowReadOnlyEdits = !1;
	}
	addContainer(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
		if (typeof e == "string") {
			let t = e;
			e = document.createElement("div"), e.classList.add(t);
		}
		return this.container.insertBefore(e, t), e;
	}
	blur() {
		this.selection.setRange(null);
	}
	deleteText(e, t, n) {
		return [e, t, , n] = us(e, t, n), ls.call(this, () => this.editor.deleteText(e, t), n, e, -1 * t);
	}
	disable() {
		this.enable(!1);
	}
	editReadOnly(e) {
		this.allowReadOnlyEdits = !0;
		let t = e();
		return this.allowReadOnlyEdits = !1, t;
	}
	enable() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
		this.scroll.enable(e), this.container.classList.toggle("ql-disabled", !e);
	}
	focus() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		this.selection.focus(), e.preventScroll || this.scrollSelectionIntoView();
	}
	format(e, t) {
		let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : B.sources.API;
		return ls.call(this, () => {
			let n = this.getSelection(!0), r = new R.default();
			if (n == null) return r;
			if (this.scroll.query(e, I.BLOCK)) r = this.editor.formatLine(n.index, n.length, { [e]: t });
			else if (n.length === 0) return this.selection.format(e, t), r;
			else r = this.editor.formatText(n.index, n.length, { [e]: t });
			return this.setSelection(n, B.sources.SILENT), r;
		}, n);
	}
	formatLine(e, t, n, r, i) {
		let a;
		return [e, t, a, i] = us(e, t, n, r, i), ls.call(this, () => this.editor.formatLine(e, t, a), i, e, 0);
	}
	formatText(e, t, n, r, i) {
		let a;
		return [e, t, a, i] = us(e, t, n, r, i), ls.call(this, () => this.editor.formatText(e, t, a), i, e, 0);
	}
	getBounds(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = null;
		if (n = typeof e == "number" ? this.selection.getBounds(e, t) : this.selection.getBounds(e.index, e.length), !n) return null;
		let r = this.container.getBoundingClientRect();
		return {
			bottom: n.bottom - r.top,
			height: n.height,
			left: n.left - r.left,
			right: n.right - r.left,
			top: n.top - r.top,
			width: n.width
		};
	}
	getContents() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.getLength() - e;
		return [e, t] = us(e, t), this.editor.getContents(e, t);
	}
	getFormat() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.getSelection(!0), t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
		return typeof e == "number" ? this.editor.getFormat(e, t) : this.editor.getFormat(e.index, e.length);
	}
	getIndex(e) {
		return e.offset(this.scroll);
	}
	getLength() {
		return this.scroll.length();
	}
	getLeaf(e) {
		return this.scroll.leaf(e);
	}
	getLine(e) {
		return this.scroll.line(e);
	}
	getLines() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.MAX_VALUE;
		return typeof e == "number" ? this.scroll.lines(e, t) : this.scroll.lines(e.index, e.length);
	}
	getModule(e) {
		return this.theme.modules[e];
	}
	getSelection() {
		return arguments.length > 0 && arguments[0] !== void 0 && arguments[0] && this.focus(), this.update(), this.selection.getRange()[0];
	}
	getSemanticHTML() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, t = arguments.length > 1 ? arguments[1] : void 0;
		return typeof e == "number" && (t ??= this.getLength() - e), [e, t] = us(e, t), this.editor.getHTML(e, t);
	}
	getText() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, t = arguments.length > 1 ? arguments[1] : void 0;
		return typeof e == "number" && (t ??= this.getLength() - e), [e, t] = us(e, t), this.editor.getText(e, t);
	}
	hasFocus() {
		return this.selection.hasFocus();
	}
	insertEmbed(t, n, r) {
		let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : e.sources.API;
		return ls.call(this, () => this.editor.insertEmbed(t, n, r), i, t);
	}
	insertText(e, t, n, r, i) {
		let a;
		return [e, , a, i] = us(e, 0, n, r, i), ls.call(this, () => this.editor.insertText(e, t, a), i, e, t.length);
	}
	isEnabled() {
		return this.scroll.isEnabled();
	}
	off() {
		return this.emitter.off(...arguments);
	}
	on() {
		return this.emitter.on(...arguments);
	}
	once() {
		return this.emitter.once(...arguments);
	}
	removeFormat(e, t, n) {
		return [e, t, , n] = us(e, t, n), ls.call(this, () => this.editor.removeFormat(e, t), n, e);
	}
	scrollRectIntoView(e) {
		$o(this.root, e);
	}
	scrollIntoView() {
		console.warn("Quill#scrollIntoView() has been deprecated and will be removed in the near future. Please use Quill#scrollSelectionIntoView() instead."), this.scrollSelectionIntoView();
	}
	scrollSelectionIntoView() {
		let e = this.selection.lastRange, t = e && this.selection.getBounds(e.index, e.length);
		t && this.scrollRectIntoView(t);
	}
	setContents(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : B.sources.API;
		return ls.call(this, () => {
			e = new R.default(e);
			let t = this.getLength(), n = this.editor.deleteText(0, t), r = this.editor.insertContents(0, e), i = this.editor.deleteText(this.getLength() - 1, 1);
			return n.compose(r).compose(i);
		}, t);
	}
	setSelection(t, n, r) {
		t == null ? this.selection.setRange(null, n || e.sources.API) : ([t, n, , r] = us(t, n, r), this.selection.setRange(new Mo(Math.max(0, t), n), r), r !== B.sources.SILENT && this.scrollSelectionIntoView());
	}
	setText(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : B.sources.API, n = new R.default().insert(e);
		return this.setContents(n, t);
	}
	update() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : B.sources.USER, t = this.scroll.update(e);
		return this.selection.update(e), t;
	}
	updateContents(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : B.sources.API;
		return ls.call(this, () => (e = new R.default(e), this.editor.applyDelta(e)), t, !0);
	}
};
function as(e) {
	return typeof e == "string" ? document.querySelector(e) : e;
}
function os(e) {
	return Object.entries(e ?? {}).reduce((e, t) => {
		let [n, r] = t;
		return {
			...e,
			[n]: r === !0 ? {} : r
		};
	}, {});
}
function ss(e) {
	return Object.fromEntries(Object.entries(e).filter((e) => e[1] !== void 0));
}
function cs(e, t) {
	let n = as(e);
	if (!n) throw Error("Invalid Quill container");
	let r = !t.theme || t.theme === V.DEFAULTS.theme ? Jo : V.import(`themes/${t.theme}`);
	if (!r) throw Error(`Invalid theme ${t.theme}. Did you register it?`);
	let { modules: i, ...a } = V.DEFAULTS, { modules: o, ...s } = r.DEFAULTS, c = os(t.modules);
	c != null && c.toolbar && c.toolbar.constructor !== Object && (c = {
		...c,
		toolbar: { container: c.toolbar }
	});
	let l = ka({}, os(i), os(o), c), u = {
		...a,
		...ss(s),
		...ss(t)
	}, d = t.registry;
	return d ? t.formats && rs.warn("Ignoring \"formats\" option because \"registry\" is specified") : d = t.formats ? ns(t.formats, u.registry, rs) : u.registry, {
		...u,
		registry: d,
		container: n,
		theme: r,
		modules: Object.entries(l).reduce((e, t) => {
			let [n, r] = t;
			if (!r) return e;
			let i = V.import(`modules/${n}`);
			return i == null ? (rs.error(`Cannot load ${n} module. Are you sure you registered it?`), e) : {
				...e,
				[n]: ka({}, i.DEFAULTS || {}, r)
			};
		}, {}),
		bounds: as(u.bounds)
	};
}
function ls(e, t, n, r) {
	if (!this.isEnabled() && t === B.sources.USER && !this.allowReadOnlyEdits) return new R.default();
	let i = n == null ? null : this.getSelection(), a = this.editor.delta, o = e();
	if (i != null && (n === !0 && (n = i.index), r == null ? i = ds(i, o, t) : r !== 0 && (i = ds(i, n, r, t)), this.setSelection(i, B.sources.SILENT)), o.length() > 0) {
		let e = [
			B.events.TEXT_CHANGE,
			o,
			a,
			t
		];
		this.emitter.emit(B.events.EDITOR_CHANGE, ...e), t !== B.sources.SILENT && this.emitter.emit(...e);
	}
	return o;
}
function us(e, t, n, r, i) {
	let a = {};
	return typeof e.index == "number" && typeof e.length == "number" ? typeof t == "number" ? (t = e.length, e = e.index) : (i = r, r = n, n = t, t = e.length, e = e.index) : typeof t != "number" && (i = r, r = n, n = t, t = 0), typeof n == "object" ? (a = n, i = r) : typeof n == "string" && (r == null ? i = n : a[n] = r), i ||= B.sources.API, [
		e,
		t,
		a,
		i
	];
}
function ds(e, t, n, r) {
	let i = typeof n == "number" ? n : 0;
	if (e == null) return null;
	let a, o;
	return t && typeof t.transformPosition == "function" ? [a, o] = [e.index, e.index + e.length].map((e) => t.transformPosition(e, r !== B.sources.USER)) : [a, o] = [e.index, e.index + e.length].map((e) => e < t || e === t && r === B.sources.USER ? e : i >= 0 ? e + i : Math.max(t, e + i)), new Mo(a, o - a);
}
// node_modules/quill/blots/container.js
var fs = class extends $a {};
// node_modules/quill/blots/scroll.js
function ps(e) {
	return e instanceof z || e instanceof bo;
}
function ms(e) {
	return typeof e.updateContent == "function";
}
var hs = class extends io {
	static blotName = "scroll";
	static className = "ql-editor";
	static tagName = "DIV";
	static defaultChild = z;
	static allowedChildren = [
		z,
		bo,
		fs
	];
	constructor(e, t, n) {
		let { emitter: r } = n;
		super(e, t), this.emitter = r, this.batch = !1, this.optimize(), this.enable(), this.domNode.addEventListener("dragstart", (e) => this.handleDragStart(e));
	}
	batchStart() {
		Array.isArray(this.batch) || (this.batch = []);
	}
	batchEnd() {
		if (!this.batch) return;
		let e = this.batch;
		this.batch = !1, this.update(e);
	}
	emitMount(e) {
		this.emitter.emit(B.events.SCROLL_BLOT_MOUNT, e);
	}
	emitUnmount(e) {
		this.emitter.emit(B.events.SCROLL_BLOT_UNMOUNT, e);
	}
	emitEmbedUpdate(e, t) {
		this.emitter.emit(B.events.SCROLL_EMBED_UPDATE, e, t);
	}
	deleteAt(e, t) {
		let [n, r] = this.line(e), [i] = this.line(e + t);
		if (super.deleteAt(e, t), i != null && n !== i && r > 0) {
			if (n instanceof bo || i instanceof bo) {
				this.optimize();
				return;
			}
			let e = i.children.head instanceof mo ? null : i.children.head;
			n.moveChildren(i, e), n.remove();
		}
		this.optimize();
	}
	enable() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
		this.domNode.setAttribute("contenteditable", e ? "true" : "false");
	}
	formatAt(e, t, n, r) {
		super.formatAt(e, t, n, r), this.optimize();
	}
	insertAt(e, t, n) {
		if (e >= this.length()) {
			if (n == null || this.scroll.query(t, I.BLOCK) == null) {
				let e = this.scroll.create(this.statics.defaultChild.blotName);
				this.appendChild(e), n == null && t.endsWith("\n") ? e.insertAt(0, t.slice(0, -1), n) : e.insertAt(0, t, n);
			} else {
				let e = this.scroll.create(t, n);
				this.appendChild(e);
			}
		} else super.insertAt(e, t, n);
		this.optimize();
	}
	insertBefore(e, t) {
		if (e.statics.scope === I.INLINE_BLOT) {
			let n = this.scroll.create(this.statics.defaultChild.blotName);
			n.appendChild(e), super.insertBefore(n, t);
		} else super.insertBefore(e, t);
	}
	insertContents(e, t) {
		let n = this.deltaToRenderBlocks(t.concat(new R.default().insert("\n"))), r = n.pop();
		if (r == null) return;
		this.batchStart();
		let i = n.shift();
		if (i) {
			let t = i.type === "block" && (i.delta.length() === 0 || !this.descendant(bo, e)[0] && e < this.length()), n = i.type === "block" ? i.delta : new R.default().insert({ [i.key]: i.value });
			gs(this, e, n);
			let r = +(i.type === "block"), a = e + n.length() + r;
			t && this.insertAt(a - 1, "\n");
			let o = So(this.line(e)[0]), s = R.AttributeMap.diff(o, i.attributes) || {};
			Object.keys(s).forEach((e) => {
				this.formatAt(a - 1, 1, e, s[e]);
			}), e = a;
		}
		let [a, o] = this.children.find(e);
		if (n.length && (a && (a = a.split(o), o = 0), n.forEach((e) => {
			if (e.type === "block") gs(this.createBlock(e.attributes, a || void 0), 0, e.delta);
			else {
				let t = this.create(e.key, e.value);
				this.insertBefore(t, a || void 0), Object.keys(e.attributes).forEach((n) => {
					t.format(n, e.attributes[n]);
				});
			}
		})), r.type === "block" && r.delta.length()) {
			let e = a ? a.offset(a.scroll) + o : this.length();
			gs(this, e, r.delta);
		}
		this.batchEnd(), this.optimize();
	}
	isEnabled() {
		return this.domNode.getAttribute("contenteditable") === "true";
	}
	leaf(e) {
		let t = this.path(e).pop();
		if (!t) return [null, -1];
		let [n, r] = t;
		return n instanceof L ? [n, r] : [null, -1];
	}
	line(e) {
		return e === this.length() ? this.line(e - 1) : this.descendant(ps, e);
	}
	lines() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.MAX_VALUE, n = (e, t, r) => {
			let i = [], a = r;
			return e.children.forEachAt(t, r, (e, t, r) => {
				ps(e) ? i.push(e) : e instanceof $a && (i = i.concat(n(e, t, a))), a -= r;
			}), i;
		};
		return n(this, e, t);
	}
	optimize() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		this.batch || (super.optimize(e, t), e.length > 0 && this.emitter.emit(B.events.SCROLL_OPTIMIZE, e, t));
	}
	path(e) {
		return super.path(e).slice(1);
	}
	remove() {}
	update(e) {
		if (this.batch) {
			Array.isArray(e) && (this.batch = this.batch.concat(e));
			return;
		}
		let t = B.sources.USER;
		typeof e == "string" && (t = e), Array.isArray(e) || (e = this.observer.takeRecords()), e = e.filter((e) => {
			let { target: t } = e, n = this.find(t, !0);
			return n && !ms(n);
		}), e.length > 0 && this.emitter.emit(B.events.SCROLL_BEFORE_UPDATE, t, e), super.update(e.concat([])), e.length > 0 && this.emitter.emit(B.events.SCROLL_UPDATE, t, e);
	}
	updateEmbedAt(e, t, n) {
		let [r] = this.descendant((e) => e instanceof bo, e);
		r && r.statics.blotName === t && ms(r) && r.updateContent(n);
	}
	handleDragStart(e) {
		e.preventDefault();
	}
	deltaToRenderBlocks(e) {
		let t = [], n = new R.default();
		return e.forEach((e) => {
			let r = e?.insert;
			if (r) {
				if (typeof r == "string") {
					let i = r.split("\n");
					i.slice(0, -1).forEach((r) => {
						n.insert(r, e.attributes), t.push({
							type: "block",
							delta: n,
							attributes: e.attributes ?? {}
						}), n = new R.default();
					});
					let a = i[i.length - 1];
					a && n.insert(a, e.attributes);
				} else {
					let i = Object.keys(r)[0];
					if (!i) return;
					this.query(i, I.INLINE) ? n.push(e) : (n.length() && t.push({
						type: "block",
						delta: n,
						attributes: {}
					}), n = new R.default(), t.push({
						type: "blockEmbed",
						key: i,
						value: r[i],
						attributes: e.attributes ?? {}
					}));
				}
			}
		}), n.length() && t.push({
			type: "block",
			delta: n,
			attributes: {}
		}), t;
	}
	createBlock(e, t) {
		let n, r = {};
		Object.entries(e).forEach((e) => {
			let [t, i] = e;
			this.query(t, I.BLOCK & I.BLOT) == null ? r[t] = i : n = t;
		});
		let i = this.create(n || this.statics.defaultChild.blotName, n ? e[n] : void 0);
		this.insertBefore(i, t || void 0);
		let a = i.length();
		return Object.entries(r).forEach((e) => {
			let [t, n] = e;
			i.formatAt(0, a, t, n);
		}), i;
	}
};
function gs(e, t, n) {
	n.reduce((t, n) => {
		let r = R.Op.length(n), i = n.attributes || {};
		if (n.insert != null) {
			if (typeof n.insert == "string") {
				let r = n.insert;
				e.insertAt(t, r);
				let [a] = e.descendant(L, t), o = So(a);
				i = R.AttributeMap.diff(o, i) || {};
			} else if (typeof n.insert == "object") {
				let r = Object.keys(n.insert)[0];
				if (r == null) return t;
				if (e.insertAt(t, r, n.insert[r]), e.scroll.query(r, I.INLINE) != null) {
					let [n] = e.descendant(L, t), r = So(n);
					i = R.AttributeMap.diff(r, i) || {};
				}
			}
		}
		return Object.keys(i).forEach((n) => {
			e.formatAt(t, r, n, i[n]);
		}), t + r;
	}, t);
}
// node_modules/quill/formats/align.js
var _s = {
	scope: I.BLOCK,
	whitelist: [
		"right",
		"center",
		"justify"
	]
}, vs = new ja("align", "align", _s), ys = new Ia("align", "ql-align", _s), bs = new Ra("align", "text-align", _s), xs = class extends Ra {
	value(e) {
		let t = super.value(e);
		return t.startsWith("rgb(") ? (t = t.replace(/^[^\d]+/, "").replace(/[^\d]+$/, ""), `#${t.split(",").map((e) => `00${parseInt(e, 10).toString(16)}`.slice(-2)).join("")}`) : t;
	}
}, Ss = new Ia("color", "ql-color", { scope: I.INLINE }), Cs = new xs("color", "color", { scope: I.INLINE }), ws = new Ia("background", "ql-bg", { scope: I.INLINE }), Ts = new xs("background", "background-color", { scope: I.INLINE }), Es = class extends fs {
	static create(e) {
		let t = super.create(e);
		return t.setAttribute("spellcheck", "false"), t;
	}
	code(e, t) {
		return this.children.map((e) => e.length() <= 1 ? "" : e.domNode.innerText).join("\n").slice(e, e + t);
	}
	html(e, t) {
		return `<pre>\n${_o(this.code(e, t))}\n</pre>`;
	}
}, H = class extends z {
	static TAB = "  ";
	static register() {
		V.register(Es);
	}
}, Ds = class extends vo {};
Ds.blotName = "code", Ds.tagName = "CODE", H.blotName = "code-block", H.className = "ql-code-block", H.tagName = "DIV", Es.blotName = "code-block-container", Es.className = "ql-code-block-container", Es.tagName = "DIV", Es.allowedChildren = [H], H.allowedChildren = [
	ho,
	mo,
	Co
], H.requiredContainer = Es;
// node_modules/quill/formats/direction.js
var Os = {
	scope: I.BLOCK,
	whitelist: ["rtl"]
}, ks = new ja("direction", "dir", Os), As = new Ia("direction", "ql-direction", Os), js = new Ra("direction", "direction", Os), Ms = {
	scope: I.INLINE,
	whitelist: ["serif", "monospace"]
}, Ns = new Ia("font", "ql-font", Ms), Ps = new class extends Ra {
	value(e) {
		return super.value(e).replace(/["']/g, "");
	}
}("font", "font-family", Ms), Fs = new Ia("size", "ql-size", {
	scope: I.INLINE,
	whitelist: [
		"small",
		"large",
		"huge"
	]
}), Is = new Ra("size", "font-size", {
	scope: I.INLINE,
	whitelist: [
		"10px",
		"18px",
		"32px"
	]
}), Ls = ko("quill:keyboard"), Rs = /Mac/i.test(navigator.platform) ? "metaKey" : "ctrlKey", zs = class e extends Wo {
	static match(e, t) {
		return [
			"altKey",
			"ctrlKey",
			"metaKey",
			"shiftKey"
		].some((n) => !!t[n] !== e[n] && t[n] !== null) ? !1 : t.key === e.key || t.key === e.which;
	}
	constructor(e, t) {
		super(e, t), this.bindings = {}, Object.keys(this.options.bindings).forEach((e) => {
			this.options.bindings[e] && this.addBinding(this.options.bindings[e]);
		}), this.addBinding({
			key: "Enter",
			shiftKey: null
		}, this.handleEnter), this.addBinding({
			key: "Enter",
			metaKey: null,
			ctrlKey: null,
			altKey: null
		}, () => {}), /Firefox/i.test(navigator.userAgent) ? (this.addBinding({ key: "Backspace" }, { collapsed: !0 }, this.handleBackspace), this.addBinding({ key: "Delete" }, { collapsed: !0 }, this.handleDelete)) : (this.addBinding({ key: "Backspace" }, {
			collapsed: !0,
			prefix: /^.?$/
		}, this.handleBackspace), this.addBinding({ key: "Delete" }, {
			collapsed: !0,
			suffix: /^.?$/
		}, this.handleDelete)), this.addBinding({ key: "Backspace" }, { collapsed: !1 }, this.handleDeleteRange), this.addBinding({ key: "Delete" }, { collapsed: !1 }, this.handleDeleteRange), this.addBinding({
			key: "Backspace",
			altKey: null,
			ctrlKey: null,
			metaKey: null,
			shiftKey: null
		}, {
			collapsed: !0,
			offset: 0
		}, this.handleBackspace), this.listen();
	}
	addBinding(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = Ws(e);
		r == null ? Ls.warn("Attempted to add invalid keyboard binding", r) : (typeof t == "function" && (t = { handler: t }), typeof n == "function" && (n = { handler: n }), (Array.isArray(r.key) ? r.key : [r.key]).forEach((e) => {
			let i = {
				...r,
				key: e,
				...t,
				...n
			};
			this.bindings[i.key] = this.bindings[i.key] || [], this.bindings[i.key].push(i);
		}));
	}
	listen() {
		this.quill.root.addEventListener("keydown", (t) => {
			if (t.defaultPrevented || t.isComposing || t.keyCode === 229 && (t.key === "Enter" || t.key === "Backspace")) return;
			let n = (this.bindings[t.key] || []).concat(this.bindings[t.which] || []).filter((n) => e.match(t, n));
			if (n.length === 0) return;
			let r = V.find(t.target, !0);
			if (r && r.scroll !== this.quill.scroll) return;
			let i = this.quill.getSelection();
			if (i == null || !this.quill.hasFocus()) return;
			let [a, o] = this.quill.getLine(i.index), [s, c] = this.quill.getLeaf(i.index), [l, u] = i.length === 0 ? [s, c] : this.quill.getLeaf(i.index + i.length), d = s instanceof oo ? s.value().slice(0, c) : "", f = l instanceof oo ? l.value().slice(u) : "", p = {
				collapsed: i.length === 0,
				empty: i.length === 0 && a.length() <= 1,
				format: this.quill.getFormat(i),
				line: a,
				offset: o,
				prefix: d,
				suffix: f,
				event: t
			};
			n.some((e) => {
				if (e.collapsed != null && e.collapsed !== p.collapsed || e.empty != null && e.empty !== p.empty || e.offset != null && e.offset !== p.offset) return !1;
				if (Array.isArray(e.format)) {
					if (e.format.every((e) => p.format[e] == null)) return !1;
				} else if (typeof e.format == "object" && !Object.keys(e.format).every((t) => e.format[t] === !0 ? p.format[t] != null : e.format[t] === !1 ? p.format[t] == null : Oa(e.format[t], p.format[t]))) return !1;
				return e.prefix != null && !e.prefix.test(p.prefix) || e.suffix != null && !e.suffix.test(p.suffix) ? !1 : e.handler.call(this, i, p, e) !== !0;
			}) && t.preventDefault();
		});
	}
	handleBackspace(e, t) {
		let n = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(t.prefix) ? 2 : 1;
		if (e.index === 0 || this.quill.getLength() <= 1) return;
		let r = {}, [i] = this.quill.getLine(e.index), a = new R.default().retain(e.index - n).delete(n);
		if (t.offset === 0) {
			let [t] = this.quill.getLine(e.index - 1);
			if (t && !(t.statics.blotName === "block" && t.length() <= 1)) {
				let t = i.formats(), n = this.quill.getFormat(e.index - 1, 1);
				if (r = R.AttributeMap.diff(t, n) || {}, Object.keys(r).length > 0) {
					let t = new R.default().retain(e.index + i.length() - 2).retain(1, r);
					a = a.compose(t);
				}
			}
		}
		this.quill.updateContents(a, V.sources.USER), this.quill.focus();
	}
	handleDelete(e, t) {
		let n = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(t.suffix) ? 2 : 1;
		if (e.index >= this.quill.getLength() - n) return;
		let r = {}, [i] = this.quill.getLine(e.index), a = new R.default().retain(e.index).delete(n);
		if (t.offset >= i.length() - 1) {
			let [t] = this.quill.getLine(e.index + 1);
			if (t) {
				let n = i.formats(), o = this.quill.getFormat(e.index, 1);
				r = R.AttributeMap.diff(n, o) || {}, Object.keys(r).length > 0 && (a = a.retain(t.length() - 1).retain(1, r));
			}
		}
		this.quill.updateContents(a, V.sources.USER), this.quill.focus();
	}
	handleDeleteRange(e) {
		Gs({
			range: e,
			quill: this.quill
		}), this.quill.focus();
	}
	handleEnter(e, t) {
		let n = Object.keys(t.format).reduce((e, n) => (this.quill.scroll.query(n, I.BLOCK) && !Array.isArray(t.format[n]) && (e[n] = t.format[n]), e), {}), r = new R.default().retain(e.index).delete(e.length).insert("\n", n);
		this.quill.updateContents(r, V.sources.USER), this.quill.setSelection(e.index + 1, V.sources.SILENT), this.quill.focus();
	}
};
zs.DEFAULTS = { bindings: {
	bold: Hs("bold"),
	italic: Hs("italic"),
	underline: Hs("underline"),
	indent: {
		key: "Tab",
		format: [
			"blockquote",
			"indent",
			"list"
		],
		handler(e, t) {
			return t.collapsed && t.offset !== 0 ? !0 : (this.quill.format("indent", "+1", V.sources.USER), !1);
		}
	},
	outdent: {
		key: "Tab",
		shiftKey: !0,
		format: [
			"blockquote",
			"indent",
			"list"
		],
		handler(e, t) {
			return t.collapsed && t.offset !== 0 ? !0 : (this.quill.format("indent", "-1", V.sources.USER), !1);
		}
	},
	"outdent backspace": {
		key: "Backspace",
		collapsed: !0,
		shiftKey: null,
		metaKey: null,
		ctrlKey: null,
		altKey: null,
		format: ["indent", "list"],
		offset: 0,
		handler(e, t) {
			t.format.indent == null ? t.format.list != null && this.quill.format("list", !1, V.sources.USER) : this.quill.format("indent", "-1", V.sources.USER);
		}
	},
	"indent code-block": Bs(!0),
	"outdent code-block": Bs(!1),
	"remove tab": {
		key: "Tab",
		shiftKey: !0,
		collapsed: !0,
		prefix: /\t$/,
		handler(e) {
			this.quill.deleteText(e.index - 1, 1, V.sources.USER);
		}
	},
	tab: {
		key: "Tab",
		handler(e, t) {
			if (t.format.table) return !0;
			this.quill.history.cutoff();
			let n = new R.default().retain(e.index).delete(e.length).insert("	");
			return this.quill.updateContents(n, V.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(e.index + 1, V.sources.SILENT), !1;
		}
	},
	"blockquote empty enter": {
		key: "Enter",
		collapsed: !0,
		format: ["blockquote"],
		empty: !0,
		handler() {
			this.quill.format("blockquote", !1, V.sources.USER);
		}
	},
	"list empty enter": {
		key: "Enter",
		collapsed: !0,
		format: ["list"],
		empty: !0,
		handler(e, t) {
			let n = { list: !1 };
			t.format.indent && (n.indent = !1), this.quill.formatLine(e.index, e.length, n, V.sources.USER);
		}
	},
	"checklist enter": {
		key: "Enter",
		collapsed: !0,
		format: { list: "checked" },
		handler(e) {
			let [t, n] = this.quill.getLine(e.index), r = {
				...t.formats(),
				list: "checked"
			}, i = new R.default().retain(e.index).insert("\n", r).retain(t.length() - n - 1).retain(1, { list: "unchecked" });
			this.quill.updateContents(i, V.sources.USER), this.quill.setSelection(e.index + 1, V.sources.SILENT), this.quill.scrollSelectionIntoView();
		}
	},
	"header enter": {
		key: "Enter",
		collapsed: !0,
		format: ["header"],
		suffix: /^$/,
		handler(e, t) {
			let [n, r] = this.quill.getLine(e.index), i = new R.default().retain(e.index).insert("\n", t.format).retain(n.length() - r - 1).retain(1, { header: null });
			this.quill.updateContents(i, V.sources.USER), this.quill.setSelection(e.index + 1, V.sources.SILENT), this.quill.scrollSelectionIntoView();
		}
	},
	"table backspace": {
		key: "Backspace",
		format: ["table"],
		collapsed: !0,
		offset: 0,
		handler() {}
	},
	"table delete": {
		key: "Delete",
		format: ["table"],
		collapsed: !0,
		suffix: /^$/,
		handler() {}
	},
	"table enter": {
		key: "Enter",
		shiftKey: null,
		format: ["table"],
		handler(e) {
			let t = this.quill.getModule("table");
			if (t) {
				let [n, r, i, a] = t.getTable(e), o = Ks(n, r, i, a);
				if (o == null) return;
				let s = n.offset();
				if (o < 0) {
					let t = new R.default().retain(s).insert("\n");
					this.quill.updateContents(t, V.sources.USER), this.quill.setSelection(e.index + 1, e.length, V.sources.SILENT);
				} else if (o > 0) {
					s += n.length();
					let e = new R.default().retain(s).insert("\n");
					this.quill.updateContents(e, V.sources.USER), this.quill.setSelection(s, V.sources.USER);
				}
			}
		}
	},
	"table tab": {
		key: "Tab",
		shiftKey: null,
		format: ["table"],
		handler(e, t) {
			let { event: n, line: r } = t, i = r.offset(this.quill.scroll);
			n.shiftKey ? this.quill.setSelection(i - 1, V.sources.USER) : this.quill.setSelection(i + r.length(), V.sources.USER);
		}
	},
	"list autofill": {
		key: " ",
		shiftKey: null,
		collapsed: !0,
		format: {
			"code-block": !1,
			blockquote: !1,
			table: !1
		},
		prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,
		handler(e, t) {
			if (this.quill.scroll.query("list") == null) return !0;
			let { length: n } = t.prefix, [r, i] = this.quill.getLine(e.index);
			if (i > n) return !0;
			let a;
			switch (t.prefix.trim()) {
				case "[]":
				case "[ ]":
					a = "unchecked";
					break;
				case "[x]":
					a = "checked";
					break;
				case "-":
				case "*":
					a = "bullet";
					break;
				default: a = "ordered";
			}
			this.quill.insertText(e.index, " ", V.sources.USER), this.quill.history.cutoff();
			let o = new R.default().retain(e.index - i).delete(n + 1).retain(r.length() - 2 - i).retain(1, { list: a });
			return this.quill.updateContents(o, V.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(e.index - n, V.sources.SILENT), !1;
		}
	},
	"code exit": {
		key: "Enter",
		collapsed: !0,
		format: ["code-block"],
		prefix: /^$/,
		suffix: /^\s*$/,
		handler(e) {
			let [t, n] = this.quill.getLine(e.index), r = 2, i = t;
			for (; i != null && i.length() <= 1 && i.formats()["code-block"];) if (i = i.prev, --r, r <= 0) {
				let r = new R.default().retain(e.index + t.length() - n - 2).retain(1, { "code-block": null }).delete(1);
				return this.quill.updateContents(r, V.sources.USER), this.quill.setSelection(e.index - 1, V.sources.SILENT), !1;
			}
			return !0;
		}
	},
	"embed left": Vs("ArrowLeft", !1),
	"embed left shift": Vs("ArrowLeft", !0),
	"embed right": Vs("ArrowRight", !1),
	"embed right shift": Vs("ArrowRight", !0),
	"table down": Us(!1),
	"table up": Us(!0)
} };
function Bs(e) {
	return {
		key: "Tab",
		shiftKey: !e,
		format: { "code-block": !0 },
		handler(t, n) {
			let { event: r } = n, { TAB: i } = this.quill.scroll.query("code-block");
			if (t.length === 0 && !r.shiftKey) {
				this.quill.insertText(t.index, i, V.sources.USER), this.quill.setSelection(t.index + i.length, V.sources.SILENT);
				return;
			}
			let a = t.length === 0 ? this.quill.getLines(t.index, 1) : this.quill.getLines(t), { index: o, length: s } = t;
			a.forEach((t, n) => {
				e ? (t.insertAt(0, i), n === 0 ? o += i.length : s += i.length) : t.domNode.textContent.startsWith(i) && (t.deleteAt(0, i.length), n === 0 ? o -= i.length : s -= i.length);
			}), this.quill.update(V.sources.USER), this.quill.setSelection(o, s, V.sources.SILENT);
		}
	};
}
function Vs(e, t) {
	return {
		key: e,
		shiftKey: t,
		altKey: null,
		[e === "ArrowLeft" ? "prefix" : "suffix"]: /^$/,
		handler(n) {
			let { index: r } = n;
			e === "ArrowRight" && (r += n.length + 1);
			let [i] = this.quill.getLeaf(r);
			return i instanceof eo ? (e === "ArrowLeft" ? t ? this.quill.setSelection(n.index - 1, n.length + 1, V.sources.USER) : this.quill.setSelection(n.index - 1, V.sources.USER) : t ? this.quill.setSelection(n.index, n.length + 1, V.sources.USER) : this.quill.setSelection(n.index + n.length + 1, V.sources.USER), !1) : !0;
		}
	};
}
function Hs(e) {
	return {
		key: e[0],
		shortKey: !0,
		handler(t, n) {
			this.quill.format(e, !n.format[e], V.sources.USER);
		}
	};
}
function Us(e) {
	return {
		key: e ? "ArrowUp" : "ArrowDown",
		collapsed: !0,
		format: ["table"],
		handler(t, n) {
			let r = e ? "prev" : "next", i = n.line, a = i.parent[r];
			if (a != null) {
				if (a.statics.blotName === "table-row") {
					let e = a.children.head, t = i;
					for (; t.prev != null;) t = t.prev, e = e.next;
					let r = e.offset(this.quill.scroll) + Math.min(n.offset, e.length() - 1);
					this.quill.setSelection(r, 0, V.sources.USER);
				}
			} else {
				let t = i.table()[r];
				t != null && (e ? this.quill.setSelection(t.offset(this.quill.scroll) + t.length() - 1, 0, V.sources.USER) : this.quill.setSelection(t.offset(this.quill.scroll), 0, V.sources.USER));
			}
			return !1;
		}
	};
}
function Ws(e) {
	if (typeof e == "string" || typeof e == "number") e = { key: e };
	else if (typeof e == "object") e = Ii(e);
	else return null;
	return e.shortKey && (e[Rs] = e.shortKey, delete e.shortKey), e;
}
function Gs(e) {
	let { quill: t, range: n } = e, r = t.getLines(n), i = {};
	if (r.length > 1) {
		let e = r[0].formats(), t = r[r.length - 1].formats();
		i = R.AttributeMap.diff(t, e) || {};
	}
	t.deleteText(n, V.sources.USER), Object.keys(i).length > 0 && t.formatLine(n.index, 1, i, V.sources.USER), t.setSelection(n.index, V.sources.SILENT);
}
function Ks(e, t, n, r) {
	return t.prev == null && t.next == null ? n.prev == null && n.next == null ? r === 0 ? -1 : 1 : n.prev == null ? -1 : 1 : t.prev == null ? -1 : t.next == null ? 1 : null;
}
// node_modules/quill/modules/normalizeExternalHTML/normalizers/googleDocs.js
var qs = /font-weight:\s*normal/, Js = [
	"P",
	"OL",
	"UL"
], Ys = (e) => e && Js.includes(e.tagName), Xs = (e) => {
	Array.from(e.querySelectorAll("br")).filter((e) => Ys(e.previousElementSibling) && Ys(e.nextElementSibling)).forEach((e) => {
		e.parentNode?.removeChild(e);
	});
}, Zs = (e) => {
	Array.from(e.querySelectorAll("b[style*=\"font-weight\"]")).filter((e) => e.getAttribute("style")?.match(qs)).forEach((t) => {
		let n = e.createDocumentFragment();
		n.append(...t.childNodes), t.parentNode?.replaceChild(n, t);
	});
};
function Qs(e) {
	e.querySelector("[id^=\"docs-internal-guid-\"]") && (Zs(e), Xs(e));
}
// node_modules/quill/modules/normalizeExternalHTML/normalizers/msWord.js
var $s = /\bmso-list:[^;]*ignore/i, ec = /\bmso-list:[^;]*\bl(\d+)/i, tc = /\bmso-list:[^;]*\blevel(\d+)/i, nc = (e, t) => {
	let n = e.getAttribute("style"), r = n?.match(ec);
	if (!r) return null;
	let i = Number(r[1]), a = n?.match(tc), o = a ? Number(a[1]) : 1, s = RegExp(`@list l${i}:level${o}\\s*\\{[^\\}]*mso-level-number-format:\\s*([\\w-]+)`, "i"), c = t.match(s);
	return {
		id: i,
		indent: o,
		type: c && c[1] === "bullet" ? "bullet" : "ordered",
		element: e
	};
}, rc = (e) => {
	let t = Array.from(e.querySelectorAll("[style*=mso-list]")), n = [], r = [];
	t.forEach((e) => {
		(e.getAttribute("style") || "").match($s) ? n.push(e) : r.push(e);
	}), n.forEach((e) => e.parentNode?.removeChild(e));
	let i = e.documentElement.innerHTML, a = r.map((e) => nc(e, i)).filter((e) => e);
	for (; a.length;) {
		let e = [], t = a.shift();
		for (; t;) e.push(t), t = a.length && a[0]?.element === t.element.nextElementSibling && a[0].id === t.id ? a.shift() : null;
		let n = document.createElement("ul");
		e.forEach((e) => {
			let t = document.createElement("li");
			t.setAttribute("data-list", e.type), e.indent > 1 && t.setAttribute("class", `ql-indent-${e.indent - 1}`), t.innerHTML = e.element.innerHTML, n.appendChild(t);
		});
		let r = e[0]?.element, { parentNode: i } = r ?? {};
		r && i?.replaceChild(n, r), e.slice(1).forEach((e) => {
			let { element: t } = e;
			i?.removeChild(t);
		});
	}
};
function ic(e) {
	e.documentElement.getAttribute("xmlns:w") === "urn:schemas-microsoft-com:office:word" && rc(e);
}
// node_modules/quill/modules/normalizeExternalHTML/index.js
var ac = [ic, Qs], oc = (e) => {
	e.documentElement && ac.forEach((t) => {
		t(e);
	});
}, sc = ko("quill:clipboard"), cc = [
	[Node.TEXT_NODE, Ac],
	[Node.TEXT_NODE, Dc],
	["br", Sc],
	[Node.ELEMENT_NODE, Dc],
	[Node.ELEMENT_NODE, xc],
	[Node.ELEMENT_NODE, bc],
	[Node.ELEMENT_NODE, Oc],
	["li", Tc],
	["ol, ul", Ec],
	["pre", Cc],
	["tr", kc],
	["b", yc("bold")],
	["i", yc("italic")],
	["strike", yc("strike")],
	["style", wc]
], lc = [vs, ks].reduce((e, t) => (e[t.keyName] = t, e), {}), uc = [
	bs,
	Ts,
	Cs,
	js,
	Ps,
	Is
].reduce((e, t) => (e[t.keyName] = t, e), {}), dc = class extends Wo {
	static DEFAULTS = { matchers: [] };
	constructor(e, t) {
		super(e, t), this.quill.root.addEventListener("copy", (e) => this.onCaptureCopy(e, !1)), this.quill.root.addEventListener("cut", (e) => this.onCaptureCopy(e, !0)), this.quill.root.addEventListener("paste", this.onCapturePaste.bind(this)), this.matchers = [], cc.concat(this.options.matchers ?? []).forEach((e) => {
			let [t, n] = e;
			this.addMatcher(t, n);
		});
	}
	addMatcher(e, t) {
		this.matchers.push([e, t]);
	}
	convert(e) {
		let { html: t, text: n } = e, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		if (r[H.blotName]) return new R.default().insert(n || "", { [H.blotName]: r[H.blotName] });
		if (!t) return new R.default().insert(n || "", r);
		let i = this.convertHTML(t);
		return pc(i, "\n") && (i.ops[i.ops.length - 1].attributes == null || r.table) ? i.compose(new R.default().retain(i.length() - 1).delete(1)) : i;
	}
	normalizeHTML(e) {
		oc(e);
	}
	convertHTML(e) {
		let t = new DOMParser().parseFromString(e, "text/html");
		this.normalizeHTML(t);
		let n = t.body, r = /* @__PURE__ */ new WeakMap(), [i, a] = this.prepareMatching(n, r);
		return vc(this.quill.scroll, n, i, a, r);
	}
	dangerouslyPasteHTML(e, t) {
		let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : V.sources.API;
		if (typeof e == "string") {
			let n = this.convert({
				html: e,
				text: ""
			});
			this.quill.setContents(n, t), this.quill.setSelection(0, V.sources.SILENT);
		} else {
			let r = this.convert({
				html: t,
				text: ""
			});
			this.quill.updateContents(new R.default().retain(e).concat(r), n), this.quill.setSelection(e + r.length(), V.sources.SILENT);
		}
	}
	onCaptureCopy(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
		if (e.defaultPrevented) return;
		e.preventDefault();
		let [n] = this.quill.selection.getRange();
		if (n == null) return;
		let { html: r, text: i } = this.onCopy(n, t);
		e.clipboardData?.setData("text/plain", i), e.clipboardData?.setData("text/html", r), t && Gs({
			range: n,
			quill: this.quill
		});
	}
	normalizeURIList(e) {
		return e.split(/\r?\n/).filter((e) => e[0] !== "#").join("\n");
	}
	onCapturePaste(e) {
		if (e.defaultPrevented || !this.quill.isEnabled()) return;
		e.preventDefault();
		let t = this.quill.getSelection(!0);
		if (t == null) return;
		let n = e.clipboardData?.getData("text/html"), r = e.clipboardData?.getData("text/plain");
		if (!n && !r) {
			let t = e.clipboardData?.getData("text/uri-list");
			t && (r = this.normalizeURIList(t));
		}
		let i = Array.from(e.clipboardData?.files || []);
		if (!n && i.length > 0) this.quill.uploader.upload(t, i);
		else {
			if (n && i.length > 0) {
				let e = new DOMParser().parseFromString(n, "text/html");
				if (e.body.childElementCount === 1 && e.body.firstElementChild?.tagName === "IMG") {
					this.quill.uploader.upload(t, i);
					return;
				}
			}
			this.onPaste(t, {
				html: n,
				text: r
			});
		}
	}
	onCopy(e) {
		let t = this.quill.getText(e);
		return {
			html: this.quill.getSemanticHTML(e),
			text: t
		};
	}
	onPaste(e, t) {
		let { text: n, html: r } = t, i = this.quill.getFormat(e.index), a = this.convert({
			text: n,
			html: r
		}, i);
		sc.log("onPaste", a, {
			text: n,
			html: r
		});
		let o = new R.default().retain(e.index).delete(e.length).concat(a);
		this.quill.updateContents(o, V.sources.USER), this.quill.setSelection(o.length() - e.length, V.sources.SILENT), this.quill.scrollSelectionIntoView();
	}
	prepareMatching(e, t) {
		let n = [], r = [];
		return this.matchers.forEach((i) => {
			let [a, o] = i;
			switch (a) {
				case Node.TEXT_NODE:
					r.push(o);
					break;
				case Node.ELEMENT_NODE:
					n.push(o);
					break;
				default: Array.from(e.querySelectorAll(a)).forEach((e) => {
					t.has(e) ? t.get(e)?.push(o) : t.set(e, [o]);
				});
			}
		}), [n, r];
	}
};
function fc(e, t, n, r) {
	return r.query(t) ? e.reduce((e, r) => {
		if (!r.insert) return e;
		if (r.attributes && r.attributes[t]) return e.push(r);
		let i = n ? { [t]: n } : {};
		return e.insert(r.insert, {
			...i,
			...r.attributes
		});
	}, new R.default()) : e;
}
function pc(e, t) {
	let n = "";
	for (let r = e.ops.length - 1; r >= 0 && n.length < t.length; --r) {
		let t = e.ops[r];
		if (typeof t.insert != "string") break;
		n = t.insert + n;
	}
	return n.slice(-1 * t.length) === t;
}
function mc(e, t) {
	if (!(e instanceof Element)) return !1;
	let n = t.query(e);
	return n && n.prototype instanceof eo ? !1 : (/* @__PURE__ */ "address.article.blockquote.canvas.dd.div.dl.dt.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.header.iframe.li.main.nav.ol.output.p.pre.section.table.td.tr.ul.video".split(".")).includes(e.tagName.toLowerCase());
}
function hc(e, t) {
	return e.previousElementSibling && e.nextElementSibling && !mc(e.previousElementSibling, t) && !mc(e.nextElementSibling, t);
}
var gc = /* @__PURE__ */ new WeakMap();
function _c(e) {
	return e != null && (gc.has(e) || (e.tagName === "PRE" ? gc.set(e, !0) : gc.set(e, _c(e.parentNode))), gc.get(e));
}
function vc(e, t, n, r, i) {
	return t.nodeType === t.TEXT_NODE ? r.reduce((n, r) => r(t, n, e), new R.default()) : t.nodeType === t.ELEMENT_NODE ? Array.from(t.childNodes || []).reduce((a, o) => {
		let s = vc(e, o, n, r, i);
		return o.nodeType === t.ELEMENT_NODE && (s = n.reduce((t, n) => n(o, t, e), s), s = (i.get(o) || []).reduce((t, n) => n(o, t, e), s)), a.concat(s);
	}, new R.default()) : new R.default();
}
function yc(e) {
	return (t, n, r) => fc(n, e, !0, r);
}
function bc(e, t, n) {
	let r = ja.keys(e), i = Ia.keys(e), a = Ra.keys(e), o = {};
	return r.concat(i).concat(a).forEach((t) => {
		let r = n.query(t, I.ATTRIBUTE);
		r != null && (o[r.attrName] = r.value(e), o[r.attrName]) || (r = lc[t], r != null && (r.attrName === t || r.keyName === t) && (o[r.attrName] = r.value(e) || void 0), r = uc[t], r != null && (r.attrName === t || r.keyName === t) && (r = uc[t], o[r.attrName] = r.value(e) || void 0));
	}), Object.entries(o).reduce((e, t) => {
		let [r, i] = t;
		return fc(e, r, i, n);
	}, t);
}
function xc(e, t, n) {
	let r = n.query(e);
	if (r == null) return t;
	if (r.prototype instanceof eo) {
		let t = {}, i = r.value(e);
		if (i != null) return t[r.blotName] = i, new R.default().insert(t, r.formats(e, n));
	} else if (r.prototype instanceof Za && !pc(t, "\n") && t.insert("\n"), "blotName" in r && "formats" in r && typeof r.formats == "function") return fc(t, r.blotName, r.formats(e, n), n);
	return t;
}
function Sc(e, t) {
	return pc(t, "\n") || t.insert("\n"), t;
}
function Cc(e, t, n) {
	let r = n.query("code-block");
	return fc(t, "code-block", r && "formats" in r && typeof r.formats == "function" ? r.formats(e, n) : !0, n);
}
function wc() {
	return new R.default();
}
function Tc(e, t, n) {
	let r = n.query(e);
	if (r == null || r.blotName !== "list" || !pc(t, "\n")) return t;
	let i = -1, a = e.parentNode;
	for (; a != null;) ["OL", "UL"].includes(a.tagName) && (i += 1), a = a.parentNode;
	return i <= 0 ? t : t.reduce((e, t) => t.insert ? t.attributes && typeof t.attributes.indent == "number" ? e.push(t) : e.insert(t.insert, {
		indent: i,
		...t.attributes || {}
	}) : e, new R.default());
}
function Ec(e, t, n) {
	let r = e, i = r.tagName === "OL" ? "ordered" : "bullet", a = r.getAttribute("data-checked");
	return a && (i = a === "true" ? "checked" : "unchecked"), fc(t, "list", i, n);
}
function Dc(e, t, n) {
	if (!pc(t, "\n")) {
		if (mc(e, n) && (e.childNodes.length > 0 || e instanceof HTMLParagraphElement)) return t.insert("\n");
		if (t.length() > 0 && e.nextSibling) {
			let r = e.nextSibling;
			for (; r != null;) {
				if (mc(r, n)) return t.insert("\n");
				let e = n.query(r);
				if (e && e.prototype instanceof bo) return t.insert("\n");
				r = r.firstChild;
			}
		}
	}
	return t;
}
function Oc(e, t, n) {
	let r = {}, i = e.style || {};
	return i.fontStyle === "italic" && (r.italic = !0), i.textDecoration === "underline" && (r.underline = !0), i.textDecoration === "line-through" && (r.strike = !0), (i.fontWeight?.startsWith("bold") || parseInt(i.fontWeight, 10) >= 700) && (r.bold = !0), t = Object.entries(r).reduce((e, t) => {
		let [r, i] = t;
		return fc(e, r, i, n);
	}, t), parseFloat(i.textIndent || 0) > 0 ? new R.default().insert("	").concat(t) : t;
}
function kc(e, t, n) {
	let r = e.parentElement?.tagName === "TABLE" ? e.parentElement : e.parentElement?.parentElement;
	return r == null ? t : fc(t, "table", Array.from(r.querySelectorAll("tr")).indexOf(e) + 1, n);
}
function Ac(e, t, n) {
	let r = e.data;
	if (e.parentElement?.tagName === "O:P") return t.insert(r.trim());
	if (!_c(e)) {
		if (r.trim().length === 0 && r.includes("\n") && !hc(e, n)) return t;
		r = r.replace(/[^\S\u00a0]/g, " "), r = r.replace(/ {2,}/g, " "), (e.previousSibling == null && e.parentElement != null && mc(e.parentElement, n) || e.previousSibling instanceof Element && mc(e.previousSibling, n)) && (r = r.replace(/^ /, "")), (e.nextSibling == null && e.parentElement != null && mc(e.parentElement, n) || e.nextSibling instanceof Element && mc(e.nextSibling, n)) && (r = r.replace(/ $/, "")), r = r.replaceAll("\xA0", " ");
	}
	return t.insert(r);
}
// node_modules/quill/modules/history.js
var jc = class extends Wo {
	static DEFAULTS = {
		delay: 1e3,
		maxStack: 100,
		userOnly: !1
	};
	lastRecorded = 0;
	ignoreChange = !1;
	stack = {
		undo: [],
		redo: []
	};
	currentRange = null;
	constructor(e, t) {
		super(e, t), this.quill.on(V.events.EDITOR_CHANGE, (e, t, n, r) => {
			e === V.events.SELECTION_CHANGE ? t && r !== V.sources.SILENT && (this.currentRange = t) : e === V.events.TEXT_CHANGE && (this.ignoreChange || (!this.options.userOnly || r === V.sources.USER ? this.record(t, n) : this.transform(t)), this.currentRange = Fc(this.currentRange, t));
		}), this.quill.keyboard.addBinding({
			key: "z",
			shortKey: !0
		}, this.undo.bind(this)), this.quill.keyboard.addBinding({
			key: ["z", "Z"],
			shortKey: !0,
			shiftKey: !0
		}, this.redo.bind(this)), /Win/i.test(navigator.platform) && this.quill.keyboard.addBinding({
			key: "y",
			shortKey: !0
		}, this.redo.bind(this)), this.quill.root.addEventListener("beforeinput", (e) => {
			e.inputType === "historyUndo" ? (this.undo(), e.preventDefault()) : e.inputType === "historyRedo" && (this.redo(), e.preventDefault());
		});
	}
	change(e, t) {
		if (this.stack[e].length === 0) return;
		let n = this.stack[e].pop();
		if (!n) return;
		let r = this.quill.getContents(), i = n.delta.invert(r);
		this.stack[t].push({
			delta: i,
			range: Fc(n.range, i)
		}), this.lastRecorded = 0, this.ignoreChange = !0, this.quill.updateContents(n.delta, V.sources.USER), this.ignoreChange = !1, this.restoreSelection(n);
	}
	clear() {
		this.stack = {
			undo: [],
			redo: []
		};
	}
	cutoff() {
		this.lastRecorded = 0;
	}
	record(e, t) {
		if (e.ops.length === 0) return;
		this.stack.redo = [];
		let n = e.invert(t), r = this.currentRange, i = Date.now();
		if (this.lastRecorded + this.options.delay > i && this.stack.undo.length > 0) {
			let e = this.stack.undo.pop();
			e && (n = n.compose(e.delta), r = e.range);
		} else this.lastRecorded = i;
		n.length() !== 0 && (this.stack.undo.push({
			delta: n,
			range: r
		}), this.stack.undo.length > this.options.maxStack && this.stack.undo.shift());
	}
	redo() {
		this.change("redo", "undo");
	}
	transform(e) {
		Mc(this.stack.undo, e), Mc(this.stack.redo, e);
	}
	undo() {
		this.change("undo", "redo");
	}
	restoreSelection(e) {
		if (e.range) this.quill.setSelection(e.range, V.sources.USER);
		else {
			let t = Pc(this.quill.scroll, e.delta);
			this.quill.setSelection(t, V.sources.USER);
		}
	}
};
function Mc(e, t) {
	let n = t;
	for (let t = e.length - 1; t >= 0; --t) {
		let r = e[t];
		e[t] = {
			delta: n.transform(r.delta, !0),
			range: r.range && Fc(r.range, n)
		}, n = r.delta.transform(n), e[t].delta.length() === 0 && e.splice(t, 1);
	}
}
function Nc(e, t) {
	let n = t.ops[t.ops.length - 1];
	return n == null ? !1 : n.insert == null ? n.attributes != null && Object.keys(n.attributes).some((t) => e.query(t, I.BLOCK) != null) : typeof n.insert == "string" && n.insert.endsWith("\n");
}
function Pc(e, t) {
	let n = t.reduce((e, t) => e + (t.delete || 0), 0), r = t.length() - n;
	return Nc(e, t) && --r, r;
}
function Fc(e, t) {
	if (!e) return e;
	let n = t.transformPosition(e.index);
	return {
		index: n,
		length: t.transformPosition(e.index + e.length) - n
	};
}
// node_modules/quill/modules/uploader.js
var Ic = class extends Wo {
	constructor(e, t) {
		super(e, t), e.root.addEventListener("drop", (t) => {
			t.preventDefault();
			let n = null;
			if (document.caretRangeFromPoint) n = document.caretRangeFromPoint(t.clientX, t.clientY);
			else if (document.caretPositionFromPoint) {
				let e = document.caretPositionFromPoint(t.clientX, t.clientY);
				n = document.createRange(), n.setStart(e.offsetNode, e.offset), n.setEnd(e.offsetNode, e.offset);
			}
			let r = n && e.selection.normalizeNative(n);
			if (r) {
				let n = e.selection.normalizedToRange(r);
				t.dataTransfer?.files && this.upload(n, t.dataTransfer.files);
			}
		});
	}
	upload(e, t) {
		let n = [];
		Array.from(t).forEach((e) => {
			e && this.options.mimetypes?.includes(e.type) && n.push(e);
		}), n.length > 0 && this.options.handler.call(this, e, n);
	}
};
Ic.DEFAULTS = {
	mimetypes: ["image/png", "image/jpeg"],
	handler(e, t) {
		if (!this.quill.scroll.query("image")) return;
		let n = t.map((e) => new Promise((t) => {
			let n = new FileReader();
			n.onload = () => {
				t(n.result);
			}, n.readAsDataURL(e);
		}));
		Promise.all(n).then((t) => {
			let n = t.reduce((e, t) => e.insert({ image: t }), new R.default().retain(e.index).delete(e.length));
			this.quill.updateContents(n, B.sources.USER), this.quill.setSelection(e.index + t.length, B.sources.SILENT);
		});
	}
};
// node_modules/quill/modules/input.js
var Lc = ["insertText", "insertReplacementText"], Rc = class extends Wo {
	constructor(e, t) {
		super(e, t), e.root.addEventListener("beforeinput", (e) => {
			this.handleBeforeInput(e);
		}), /Android/i.test(navigator.userAgent) || e.on(V.events.COMPOSITION_BEFORE_START, () => {
			this.handleCompositionStart();
		});
	}
	deleteRange(e) {
		Gs({
			range: e,
			quill: this.quill
		});
	}
	replaceText(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
		if (e.length === 0) return !1;
		if (t) {
			let n = this.quill.getFormat(e.index, 1);
			this.deleteRange(e), this.quill.updateContents(new R.default().retain(e.index).insert(t, n), V.sources.USER);
		} else this.deleteRange(e);
		return this.quill.setSelection(e.index + t.length, 0, V.sources.SILENT), !0;
	}
	handleBeforeInput(e) {
		if (this.quill.composition.isComposing || e.defaultPrevented || !Lc.includes(e.inputType)) return;
		let t = e.getTargetRanges ? e.getTargetRanges()[0] : null;
		if (!t || t.collapsed === !0) return;
		let n = zc(e);
		if (n == null) return;
		let r = this.quill.selection.normalizeNative(t), i = r ? this.quill.selection.normalizedToRange(r) : null;
		i && this.replaceText(i, n) && e.preventDefault();
	}
	handleCompositionStart() {
		let e = this.quill.getSelection();
		e && this.replaceText(e);
	}
};
function zc(e) {
	return typeof e.data == "string" ? e.data : e.dataTransfer?.types.includes("text/plain") ? e.dataTransfer.getData("text/plain") : null;
}
// node_modules/quill/modules/uiNode.js
var Bc = /Mac/i.test(navigator.platform), Vc = (e) => !!(e.key === "ArrowLeft" || e.key === "ArrowRight" || e.key === "ArrowUp" || e.key === "ArrowDown" || e.key === "Home" || Bc && e.key === "a" && e.ctrlKey === !0), Hc = class extends Wo {
	isListening = !1;
	selectionChangeDeadline = 0;
	constructor(e, t) {
		super(e, t), this.handleArrowKeys(), this.handleNavigationShortcuts();
	}
	handleArrowKeys() {
		this.quill.keyboard.addBinding({
			key: ["ArrowLeft", "ArrowRight"],
			offset: 0,
			shiftKey: null,
			handler(e, t) {
				let { line: n, event: r } = t;
				if (!(n instanceof Ka) || !n.uiNode) return !0;
				let i = getComputedStyle(n.domNode).direction === "rtl";
				return i && r.key !== "ArrowRight" || !i && r.key !== "ArrowLeft" ? !0 : (this.quill.setSelection(e.index - 1, e.length + +!!r.shiftKey, V.sources.USER), !1);
			}
		});
	}
	handleNavigationShortcuts() {
		this.quill.root.addEventListener("keydown", (e) => {
			!e.defaultPrevented && Vc(e) && this.ensureListeningToSelectionChange();
		});
	}
	ensureListeningToSelectionChange() {
		this.selectionChangeDeadline = Date.now() + 100, this.isListening || (this.isListening = !0, document.addEventListener("selectionchange", () => {
			this.isListening = !1, Date.now() <= this.selectionChangeDeadline && this.handleSelectionChange();
		}, { once: !0 }));
	}
	handleSelectionChange() {
		let e = document.getSelection();
		if (!e) return;
		let t = e.getRangeAt(0);
		if (t.collapsed !== !0 || t.startOffset !== 0) return;
		let n = this.quill.scroll.find(t.startContainer);
		if (!(n instanceof Ka) || !n.uiNode) return;
		let r = document.createRange();
		r.setStartAfter(n.uiNode), r.setEndAfter(n.uiNode), e.removeAllRanges(), e.addRange(r);
	}
};
// node_modules/quill/core.js
V.register({
	"blots/block": z,
	"blots/block/embed": bo,
	"blots/break": mo,
	"blots/container": fs,
	"blots/cursor": Co,
	"blots/embed": Ko,
	"blots/inline": vo,
	"blots/scroll": hs,
	"blots/text": ho,
	"modules/clipboard": dc,
	"modules/history": jc,
	"modules/keyboard": zs,
	"modules/uploader": Ic,
	"modules/input": Rc,
	"modules/uiNode": Hc
});
var Uc = V, Wc = new class extends Ia {
	add(e, t) {
		let n = 0;
		if (t === "+1" || t === "-1") {
			let r = this.value(e) || 0;
			n = t === "+1" ? r + 1 : r - 1;
		} else typeof t == "number" && (n = t);
		return n === 0 ? (this.remove(e), !0) : super.add(e, n.toString());
	}
	canAdd(e, t) {
		return super.canAdd(e, t) || super.canAdd(e, parseInt(t, 10));
	}
	value(e) {
		return parseInt(super.value(e), 10) || void 0;
	}
}("indent", "ql-indent", {
	scope: I.BLOCK,
	whitelist: [
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8
	]
}), Gc = class extends z {
	static blotName = "blockquote";
	static tagName = "blockquote";
}, Kc = class extends z {
	static blotName = "header";
	static tagName = [
		"H1",
		"H2",
		"H3",
		"H4",
		"H5",
		"H6"
	];
	static formats(e) {
		return this.tagName.indexOf(e.tagName) + 1;
	}
}, qc = class extends fs {};
qc.blotName = "list-container", qc.tagName = "OL";
var Jc = class extends z {
	static create(e) {
		let t = super.create();
		return t.setAttribute("data-list", e), t;
	}
	static formats(e) {
		return e.getAttribute("data-list") || void 0;
	}
	static register() {
		V.register(qc);
	}
	constructor(e, t) {
		super(e, t);
		let n = t.ownerDocument.createElement("span"), r = (n) => {
			if (!e.isEnabled()) return;
			let r = this.statics.formats(t, e);
			r === "checked" ? (this.format("list", "unchecked"), n.preventDefault()) : r === "unchecked" && (this.format("list", "checked"), n.preventDefault());
		};
		n.addEventListener("mousedown", r), n.addEventListener("touchstart", r), this.attachUI(n);
	}
	format(e, t) {
		e === this.statics.blotName && t ? this.domNode.setAttribute("data-list", t) : super.format(e, t);
	}
};
Jc.blotName = "list", Jc.tagName = "LI", qc.allowedChildren = [Jc], Jc.requiredContainer = qc;
// node_modules/quill/formats/bold.js
var Yc = class extends vo {
	static blotName = "bold";
	static tagName = ["STRONG", "B"];
	static create() {
		return super.create();
	}
	static formats() {
		return !0;
	}
	optimize(e) {
		super.optimize(e), this.domNode.tagName !== this.statics.tagName[0] && this.replaceWith(this.statics.blotName);
	}
}, Xc = class extends Yc {
	static blotName = "italic";
	static tagName = ["EM", "I"];
}, Zc = class extends vo {
	static blotName = "link";
	static tagName = "A";
	static SANITIZED_URL = "about:blank";
	static PROTOCOL_WHITELIST = [
		"http",
		"https",
		"mailto",
		"tel",
		"sms"
	];
	static create(e) {
		let t = super.create(e);
		return t.setAttribute("href", this.sanitize(e)), t.setAttribute("rel", "noopener noreferrer"), t.setAttribute("target", "_blank"), t;
	}
	static formats(e) {
		return e.getAttribute("href");
	}
	static sanitize(e) {
		return Qc(e, this.PROTOCOL_WHITELIST) ? e : this.SANITIZED_URL;
	}
	format(e, t) {
		e !== this.statics.blotName || !t ? super.format(e, t) : this.domNode.setAttribute("href", this.constructor.sanitize(t));
	}
};
function Qc(e, t) {
	let n = document.createElement("a");
	n.href = e;
	let r = n.href.slice(0, n.href.indexOf(":"));
	return t.indexOf(r) > -1;
}
// node_modules/quill/formats/script.js
var $c = class extends vo {
	static blotName = "script";
	static tagName = ["SUB", "SUP"];
	static create(e) {
		return e === "super" ? document.createElement("sup") : e === "sub" ? document.createElement("sub") : super.create(e);
	}
	static formats(e) {
		if (e.tagName === "SUB") return "sub";
		if (e.tagName === "SUP") return "super";
	}
}, el = class extends Yc {
	static blotName = "strike";
	static tagName = ["S", "STRIKE"];
}, tl = class extends vo {
	static blotName = "underline";
	static tagName = "U";
}, nl = class extends Ko {
	static blotName = "formula";
	static className = "ql-formula";
	static tagName = "SPAN";
	static create(e) {
		if (window.katex == null) throw Error("Formula module requires KaTeX.");
		let t = super.create(e);
		return typeof e == "string" && (window.katex.render(e, t, {
			throwOnError: !1,
			errorColor: "#f00"
		}), t.setAttribute("data-value", e)), t;
	}
	static value(e) {
		return e.getAttribute("data-value");
	}
	html() {
		let { formula: e } = this.value();
		return `<span>${e}</span>`;
	}
}, rl = [
	"alt",
	"height",
	"width"
], il = class extends eo {
	static blotName = "image";
	static tagName = "IMG";
	static create(e) {
		let t = super.create(e);
		return typeof e == "string" && t.setAttribute("src", this.sanitize(e)), t;
	}
	static formats(e) {
		return rl.reduce((t, n) => (e.hasAttribute(n) && (t[n] = e.getAttribute(n)), t), {});
	}
	static match(e) {
		return /\.(jpe?g|gif|png)$/.test(e) || /^data:image\/.+;base64/.test(e);
	}
	static sanitize(e) {
		return Qc(e, [
			"http",
			"https",
			"data"
		]) ? e : "//:0";
	}
	static value(e) {
		return e.getAttribute("src");
	}
	format(e, t) {
		rl.indexOf(e) > -1 ? t ? this.domNode.setAttribute(e, t) : this.domNode.removeAttribute(e) : super.format(e, t);
	}
}, al = ["height", "width"], ol = class extends bo {
	static blotName = "video";
	static className = "ql-video";
	static tagName = "IFRAME";
	static create(e) {
		let t = super.create(e);
		return t.setAttribute("frameborder", "0"), t.setAttribute("allowfullscreen", "true"), t.setAttribute("src", this.sanitize(e)), t;
	}
	static formats(e) {
		return al.reduce((t, n) => (e.hasAttribute(n) && (t[n] = e.getAttribute(n)), t), {});
	}
	static sanitize(e) {
		return Zc.sanitize(e);
	}
	static value(e) {
		return e.getAttribute("src");
	}
	format(e, t) {
		al.indexOf(e) > -1 ? t ? this.domNode.setAttribute(e, t) : this.domNode.removeAttribute(e) : super.format(e, t);
	}
	html() {
		let { video: e } = this.value();
		return `<a href="${e}">${e}</a>`;
	}
}, sl = new Ia("code-token", "hljs", { scope: I.INLINE }), cl = class e extends vo {
	static formats(e, t) {
		for (; e != null && e !== t.domNode;) {
			if (e.classList && e.classList.contains(H.className)) return super.formats(e, t);
			e = e.parentNode;
		}
	}
	constructor(e, t, n) {
		super(e, t, n), sl.add(this.domNode, n);
	}
	format(t, n) {
		t === e.blotName ? n ? sl.add(this.domNode, n) : (sl.remove(this.domNode), this.domNode.classList.remove(this.statics.className)) : super.format(t, n);
	}
	optimize() {
		super.optimize(...arguments), sl.value(this.domNode) || this.unwrap();
	}
};
cl.blotName = "code-token", cl.className = "ql-token";
var ll = class extends H {
	static create(e) {
		let t = super.create(e);
		return typeof e == "string" && t.setAttribute("data-language", e), t;
	}
	static formats(e) {
		return e.getAttribute("data-language") || "plain";
	}
	static register() {}
	format(e, t) {
		e === this.statics.blotName && t ? this.domNode.setAttribute("data-language", t) : super.format(e, t);
	}
	replaceWith(e, t) {
		return this.formatAt(0, this.length(), cl.blotName, !1), super.replaceWith(e, t);
	}
}, ul = class extends Es {
	attach() {
		super.attach(), this.forceNext = !1, this.scroll.emitMount(this);
	}
	format(e, t) {
		e === ll.blotName && (this.forceNext = !0, this.children.forEach((n) => {
			n.format(e, t);
		}));
	}
	formatAt(e, t, n, r) {
		n === ll.blotName && (this.forceNext = !0), super.formatAt(e, t, n, r);
	}
	highlight(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
		if (this.children.head == null) return;
		let n = `${Array.from(this.domNode.childNodes).filter((e) => e !== this.uiNode).map((e) => e.textContent).join("\n")}\n`, r = ll.formats(this.children.head.domNode);
		if (t || this.forceNext || this.cachedText !== n) {
			if (n.trim().length > 0 || this.cachedText == null) {
				let t = this.children.reduce((e, t) => e.concat(xo(t, !1)), new R.default()), i = e(n, r);
				t.diff(i).reduce((e, t) => {
					let { retain: n, attributes: r } = t;
					return n ? (r && Object.keys(r).forEach((t) => {
						[ll.blotName, cl.blotName].includes(t) && this.formatAt(e, n, t, r[t]);
					}), e + n) : e;
				}, 0);
			}
			this.cachedText = n, this.forceNext = !1;
		}
	}
	html(e, t) {
		let [n] = this.children.find(e);
		return `<pre data-language="${n ? ll.formats(n.domNode) : "plain"}">\n${_o(this.code(e, t))}\n</pre>`;
	}
	optimize(e) {
		if (super.optimize(e), this.parent != null && this.children.head != null && this.uiNode != null) {
			let e = ll.formats(this.children.head.domNode);
			e !== this.uiNode.value && (this.uiNode.value = e);
		}
	}
};
ul.allowedChildren = [ll], ll.requiredContainer = ul, ll.allowedChildren = [
	cl,
	Co,
	ho,
	mo
];
var dl = (e, t, n) => {
	if (typeof e.versionString == "string") {
		let r = e.versionString.split(".")[0];
		if (parseInt(r, 10) >= 11) return e.highlight(n, { language: t }).value;
	}
	return e.highlight(t, n).value;
}, fl = class extends Wo {
	static register() {
		V.register(cl, !0), V.register(ll, !0), V.register(ul, !0);
	}
	constructor(e, t) {
		if (super(e, t), this.options.hljs == null) throw Error("Syntax module requires highlight.js. Please include the library on the page before Quill.");
		this.languages = this.options.languages.reduce((e, t) => {
			let { key: n } = t;
			return e[n] = !0, e;
		}, {}), this.highlightBlot = this.highlightBlot.bind(this), this.initListener(), this.initTimer();
	}
	initListener() {
		this.quill.on(V.events.SCROLL_BLOT_MOUNT, (e) => {
			if (!(e instanceof ul)) return;
			let t = this.quill.root.ownerDocument.createElement("select");
			this.options.languages.forEach((e) => {
				let { key: n, label: r } = e, i = t.ownerDocument.createElement("option");
				i.textContent = r, i.setAttribute("value", n), t.appendChild(i);
			}), t.addEventListener("change", () => {
				e.format(ll.blotName, t.value), this.quill.root.focus(), this.highlight(e, !0);
			}), e.uiNode ?? (e.attachUI(t), e.children.head && (t.value = ll.formats(e.children.head.domNode)));
		});
	}
	initTimer() {
		let e = null;
		this.quill.on(V.events.SCROLL_OPTIMIZE, () => {
			e && clearTimeout(e), e = setTimeout(() => {
				this.highlight(), e = null;
			}, this.options.interval);
		});
	}
	highlight() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
		if (this.quill.selection.composing) return;
		this.quill.update(V.sources.USER);
		let n = this.quill.getSelection();
		(e == null ? this.quill.scroll.descendants(ul) : [e]).forEach((e) => {
			e.highlight(this.highlightBlot, t);
		}), this.quill.update(V.sources.SILENT), n != null && this.quill.setSelection(n, V.sources.SILENT);
	}
	highlightBlot(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "plain";
		if (t = this.languages[t] ? t : "plain", t === "plain") return _o(e).split("\n").reduce((e, n, r) => (r !== 0 && e.insert("\n", { [H.blotName]: t }), e.insert(n)), new R.default());
		let n = this.quill.root.ownerDocument.createElement("div");
		return n.classList.add(H.className), n.innerHTML = dl(this.options.hljs, t, e), vc(this.quill.scroll, n, [(e, t) => {
			let n = sl.value(e);
			return n ? t.compose(new R.default().retain(t.length(), { [cl.blotName]: n })) : t;
		}], [(e, n) => e.data.split("\n").reduce((e, n, r) => (r !== 0 && e.insert("\n", { [H.blotName]: t }), e.insert(n)), n)], /* @__PURE__ */ new WeakMap());
	}
};
fl.DEFAULTS = {
	hljs: window.hljs,
	interval: 1e3,
	languages: [
		{
			key: "plain",
			label: "Plain"
		},
		{
			key: "bash",
			label: "Bash"
		},
		{
			key: "cpp",
			label: "C++"
		},
		{
			key: "cs",
			label: "C#"
		},
		{
			key: "css",
			label: "CSS"
		},
		{
			key: "diff",
			label: "Diff"
		},
		{
			key: "xml",
			label: "HTML/XML"
		},
		{
			key: "java",
			label: "Java"
		},
		{
			key: "javascript",
			label: "JavaScript"
		},
		{
			key: "markdown",
			label: "Markdown"
		},
		{
			key: "php",
			label: "PHP"
		},
		{
			key: "python",
			label: "Python"
		},
		{
			key: "ruby",
			label: "Ruby"
		},
		{
			key: "sql",
			label: "SQL"
		}
	]
};
// node_modules/quill/formats/table.js
var pl = class e extends z {
	static blotName = "table";
	static tagName = "TD";
	static create(e) {
		let t = super.create();
		return e ? t.setAttribute("data-row", e) : t.setAttribute("data-row", _l()), t;
	}
	static formats(e) {
		if (e.hasAttribute("data-row")) return e.getAttribute("data-row");
	}
	cellOffset() {
		return this.parent ? this.parent.children.indexOf(this) : -1;
	}
	format(t, n) {
		t === e.blotName && n ? this.domNode.setAttribute("data-row", n) : super.format(t, n);
	}
	row() {
		return this.parent;
	}
	rowOffset() {
		return this.row() ? this.row().rowOffset() : -1;
	}
	table() {
		return this.row() && this.row().table();
	}
}, ml = class extends fs {
	static blotName = "table-row";
	static tagName = "TR";
	checkMerge() {
		if (super.checkMerge() && this.next.children.head != null) {
			let e = this.children.head.formats(), t = this.children.tail.formats(), n = this.next.children.head.formats(), r = this.next.children.tail.formats();
			return e.table === t.table && e.table === n.table && e.table === r.table;
		}
		return !1;
	}
	optimize(e) {
		super.optimize(e), this.children.forEach((e) => {
			if (e.next == null) return;
			let t = e.formats(), n = e.next.formats();
			if (t.table !== n.table) {
				let t = this.splitAfter(e);
				t && t.optimize(), this.prev && this.prev.optimize();
			}
		});
	}
	rowOffset() {
		return this.parent ? this.parent.children.indexOf(this) : -1;
	}
	table() {
		return this.parent && this.parent.parent;
	}
}, hl = class extends fs {
	static blotName = "table-body";
	static tagName = "TBODY";
}, gl = class extends fs {
	static blotName = "table-container";
	static tagName = "TABLE";
	balanceCells() {
		let e = this.descendants(ml), t = e.reduce((e, t) => Math.max(t.children.length, e), 0);
		e.forEach((e) => {
			Array(t - e.children.length).fill(0).forEach(() => {
				let t;
				e.children.head != null && (t = pl.formats(e.children.head.domNode));
				let n = this.scroll.create(pl.blotName, t);
				e.appendChild(n), n.optimize();
			});
		});
	}
	cells(e) {
		return this.rows().map((t) => t.children.at(e));
	}
	deleteColumn(e) {
		let [t] = this.descendant(hl);
		t != null && t.children.head != null && t.children.forEach((t) => {
			t.children.at(e)?.remove();
		});
	}
	insertColumn(e) {
		let [t] = this.descendant(hl);
		t != null && t.children.head != null && t.children.forEach((t) => {
			let n = t.children.at(e), r = pl.formats(t.children.head.domNode), i = this.scroll.create(pl.blotName, r);
			t.insertBefore(i, n);
		});
	}
	insertRow(e) {
		let [t] = this.descendant(hl);
		if (t == null || t.children.head == null) return;
		let n = _l(), r = this.scroll.create(ml.blotName);
		t.children.head.children.forEach(() => {
			let e = this.scroll.create(pl.blotName, n);
			r.appendChild(e);
		});
		let i = t.children.at(e);
		t.insertBefore(r, i);
	}
	rows() {
		let e = this.children.head;
		return e == null ? [] : e.children.map((e) => e);
	}
};
gl.allowedChildren = [hl], hl.requiredContainer = gl, hl.allowedChildren = [ml], ml.requiredContainer = hl, ml.allowedChildren = [pl], pl.requiredContainer = ml;
function _l() {
	return `row-${Math.random().toString(36).slice(2, 6)}`;
}
// node_modules/quill/modules/table.js
var vl = class extends Wo {
	static register() {
		V.register(pl), V.register(ml), V.register(hl), V.register(gl);
	}
	constructor() {
		super(...arguments), this.listenBalanceCells();
	}
	balanceTables() {
		this.quill.scroll.descendants(gl).forEach((e) => {
			e.balanceCells();
		});
	}
	deleteColumn() {
		let [e, , t] = this.getTable();
		t != null && (e.deleteColumn(t.cellOffset()), this.quill.update(V.sources.USER));
	}
	deleteRow() {
		let [, e] = this.getTable();
		e != null && (e.remove(), this.quill.update(V.sources.USER));
	}
	deleteTable() {
		let [e] = this.getTable();
		if (e == null) return;
		let t = e.offset();
		e.remove(), this.quill.update(V.sources.USER), this.quill.setSelection(t, V.sources.SILENT);
	}
	getTable() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.quill.getSelection();
		if (e == null) return [
			null,
			null,
			null,
			-1
		];
		let [t, n] = this.quill.getLine(e.index);
		if (t == null || t.statics.blotName !== pl.blotName) return [
			null,
			null,
			null,
			-1
		];
		let r = t.parent;
		return [
			r.parent.parent,
			r,
			t,
			n
		];
	}
	insertColumn(e) {
		let t = this.quill.getSelection();
		if (!t) return;
		let [n, r, i] = this.getTable(t);
		if (i == null) return;
		let a = i.cellOffset();
		n.insertColumn(a + e), this.quill.update(V.sources.USER);
		let o = r.rowOffset();
		e === 0 && (o += 1), this.quill.setSelection(t.index + o, t.length, V.sources.SILENT);
	}
	insertColumnLeft() {
		this.insertColumn(0);
	}
	insertColumnRight() {
		this.insertColumn(1);
	}
	insertRow(e) {
		let t = this.quill.getSelection();
		if (!t) return;
		let [n, r, i] = this.getTable(t);
		if (i == null) return;
		let a = r.rowOffset();
		n.insertRow(a + e), this.quill.update(V.sources.USER), e > 0 ? this.quill.setSelection(t, V.sources.SILENT) : this.quill.setSelection(t.index + r.children.length, t.length, V.sources.SILENT);
	}
	insertRowAbove() {
		this.insertRow(0);
	}
	insertRowBelow() {
		this.insertRow(1);
	}
	insertTable(e, t) {
		let n = this.quill.getSelection();
		if (n == null) return;
		let r = Array(e).fill(0).reduce((e) => {
			let n = Array(t).fill("\n").join("");
			return e.insert(n, { table: _l() });
		}, new R.default().retain(n.index));
		this.quill.updateContents(r, V.sources.USER), this.quill.setSelection(n.index, V.sources.SILENT), this.balanceTables();
	}
	listenBalanceCells() {
		this.quill.on(V.events.SCROLL_OPTIMIZE, (e) => {
			e.some((e) => [
				"TD",
				"TR",
				"TBODY",
				"TABLE"
			].includes(e.target.tagName) ? (this.quill.once(V.events.TEXT_CHANGE, (e, t, n) => {
				n === V.sources.USER && this.balanceTables();
			}), !0) : !1);
		});
	}
}, yl = ko("quill:toolbar"), bl = class extends Wo {
	constructor(e, t) {
		if (super(e, t), Array.isArray(this.options.container)) {
			let t = document.createElement("div");
			t.setAttribute("role", "toolbar"), Sl(t, this.options.container), e.container?.parentNode?.insertBefore(t, e.container), this.container = t;
		} else this.container = typeof this.options.container == "string" ? document.querySelector(this.options.container) : this.options.container;
		this.container instanceof HTMLElement ? (this.container.classList.add("ql-toolbar"), this.controls = [], this.handlers = {}, this.options.handlers && Object.keys(this.options.handlers).forEach((e) => {
			let t = this.options.handlers?.[e];
			t && this.addHandler(e, t);
		}), Array.from(this.container.querySelectorAll("button, select")).forEach((e) => {
			this.attach(e);
		}), this.quill.on(V.events.EDITOR_CHANGE, () => {
			let [e] = this.quill.selection.getRange();
			this.update(e);
		})) : yl.error("Container required for toolbar", this.options);
	}
	addHandler(e, t) {
		this.handlers[e] = t;
	}
	attach(e) {
		let t = Array.from(e.classList).find((e) => e.indexOf("ql-") === 0);
		if (!t) return;
		if (t = t.slice(3), e.tagName === "BUTTON" && e.setAttribute("type", "button"), this.handlers[t] == null && this.quill.scroll.query(t) == null) {
			yl.warn("ignoring attaching to nonexistent format", t, e);
			return;
		}
		let n = e.tagName === "SELECT" ? "change" : "click";
		e.addEventListener(n, (n) => {
			let r;
			if (e.tagName === "SELECT") {
				if (e.selectedIndex < 0) return;
				let t = e.options[e.selectedIndex];
				r = t.hasAttribute("selected") ? !1 : t.value || !1;
			} else r = e.classList.contains("ql-active") ? !1 : e.value || !e.hasAttribute("value"), n.preventDefault();
			this.quill.focus();
			let [i] = this.quill.selection.getRange();
			if (this.handlers[t] != null) this.handlers[t].call(this, r);
			else if (this.quill.scroll.query(t).prototype instanceof eo) {
				if (r = prompt(`Enter ${t}`), !r) return;
				this.quill.updateContents(new R.default().retain(i.index).delete(i.length).insert({ [t]: r }), V.sources.USER);
			} else this.quill.format(t, r, V.sources.USER);
			this.update(i);
		}), this.controls.push([t, e]);
	}
	update(e) {
		let t = e == null ? {} : this.quill.getFormat(e);
		this.controls.forEach((n) => {
			let [r, i] = n;
			if (i.tagName === "SELECT") {
				let n = null;
				if (e == null) n = null;
				else if (t[r] == null) n = i.querySelector("option[selected]");
				else if (!Array.isArray(t[r])) {
					let e = t[r];
					typeof e == "string" && (e = e.replace(/"/g, "\\\"")), n = i.querySelector(`option[value="${e}"]`);
				}
				n == null ? (i.value = "", i.selectedIndex = -1) : n.selected = !0;
			} else if (e == null) i.classList.remove("ql-active"), i.setAttribute("aria-pressed", "false");
			else if (i.hasAttribute("value")) {
				let e = t[r], n = e === i.getAttribute("value") || e != null && e.toString() === i.getAttribute("value") || e == null && !i.getAttribute("value");
				i.classList.toggle("ql-active", n), i.setAttribute("aria-pressed", n.toString());
			} else {
				let e = t[r] != null;
				i.classList.toggle("ql-active", e), i.setAttribute("aria-pressed", e.toString());
			}
		});
	}
};
bl.DEFAULTS = {};
function xl(e, t, n) {
	let r = document.createElement("button");
	r.setAttribute("type", "button"), r.classList.add(`ql-${t}`), r.setAttribute("aria-pressed", "false"), n == null ? r.setAttribute("aria-label", t) : (r.value = n, r.setAttribute("aria-label", `${t}: ${n}`)), e.appendChild(r);
}
function Sl(e, t) {
	Array.isArray(t[0]) || (t = [t]), t.forEach((t) => {
		let n = document.createElement("span");
		n.classList.add("ql-formats"), t.forEach((e) => {
			if (typeof e == "string") xl(n, e);
			else {
				let t = Object.keys(e)[0], r = e[t];
				Array.isArray(r) ? Cl(n, t, r) : xl(n, t, r);
			}
		}), e.appendChild(n);
	});
}
function Cl(e, t, n) {
	let r = document.createElement("select");
	r.classList.add(`ql-${t}`), n.forEach((e) => {
		let t = document.createElement("option");
		e === !1 ? t.setAttribute("selected", "selected") : t.setAttribute("value", String(e)), r.appendChild(t);
	}), e.appendChild(r);
}
bl.DEFAULTS = {
	container: null,
	handlers: {
		clean() {
			let e = this.quill.getSelection();
			if (e != null) {
				if (e.length === 0) {
					let e = this.quill.getFormat();
					Object.keys(e).forEach((e) => {
						this.quill.scroll.query(e, I.INLINE) != null && this.quill.format(e, !1, V.sources.USER);
					});
				} else this.quill.removeFormat(e.index, e.length, V.sources.USER);
			}
		},
		direction(e) {
			let { align: t } = this.quill.getFormat();
			e === "rtl" && t == null ? this.quill.format("align", "right", V.sources.USER) : !e && t === "right" && this.quill.format("align", !1, V.sources.USER), this.quill.format("direction", e, V.sources.USER);
		},
		indent(e) {
			let t = this.quill.getSelection(), n = this.quill.getFormat(t), r = parseInt(n.indent || 0, 10);
			if (e === "+1" || e === "-1") {
				let t = e === "+1" ? 1 : -1;
				n.direction === "rtl" && (t *= -1), this.quill.format("indent", r + t, V.sources.USER);
			}
		},
		link(e) {
			e === !0 && (e = prompt("Enter link URL:")), this.quill.format("link", e, V.sources.USER);
		},
		list(e) {
			let t = this.quill.getSelection(), n = this.quill.getFormat(t);
			e === "check" ? n.list === "checked" || n.list === "unchecked" ? this.quill.format("list", !1, V.sources.USER) : this.quill.format("list", "unchecked", V.sources.USER) : this.quill.format("list", e, V.sources.USER);
		}
	}
};
// node_modules/quill/ui/icons.js
var wl = "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"3\" x2=\"15\" y1=\"9\" y2=\"9\"/><line class=\"ql-stroke\" x1=\"3\" x2=\"13\" y1=\"14\" y2=\"14\"/><line class=\"ql-stroke\" x1=\"3\" x2=\"9\" y1=\"4\" y2=\"4\"/></svg>", Tl = "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"15\" x2=\"3\" y1=\"9\" y2=\"9\"/><line class=\"ql-stroke\" x1=\"14\" x2=\"4\" y1=\"14\" y2=\"14\"/><line class=\"ql-stroke\" x1=\"12\" x2=\"6\" y1=\"4\" y2=\"4\"/></svg>", El = "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"15\" x2=\"3\" y1=\"9\" y2=\"9\"/><line class=\"ql-stroke\" x1=\"15\" x2=\"5\" y1=\"14\" y2=\"14\"/><line class=\"ql-stroke\" x1=\"15\" x2=\"9\" y1=\"4\" y2=\"4\"/></svg>", Dl = "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"15\" x2=\"3\" y1=\"9\" y2=\"9\"/><line class=\"ql-stroke\" x1=\"15\" x2=\"3\" y1=\"14\" y2=\"14\"/><line class=\"ql-stroke\" x1=\"15\" x2=\"3\" y1=\"4\" y2=\"4\"/></svg>", Ol = "<svg viewbox=\"0 0 18 18\"><g class=\"ql-fill ql-color-label\"><polygon points=\"6 6.868 6 6 5 6 5 7 5.942 7 6 6.868\"/><rect height=\"1\" width=\"1\" x=\"4\" y=\"4\"/><polygon points=\"6.817 5 6 5 6 6 6.38 6 6.817 5\"/><rect height=\"1\" width=\"1\" x=\"2\" y=\"6\"/><rect height=\"1\" width=\"1\" x=\"3\" y=\"5\"/><rect height=\"1\" width=\"1\" x=\"4\" y=\"7\"/><polygon points=\"4 11.439 4 11 3 11 3 12 3.755 12 4 11.439\"/><rect height=\"1\" width=\"1\" x=\"2\" y=\"12\"/><rect height=\"1\" width=\"1\" x=\"2\" y=\"9\"/><rect height=\"1\" width=\"1\" x=\"2\" y=\"15\"/><polygon points=\"4.63 10 4 10 4 11 4.192 11 4.63 10\"/><rect height=\"1\" width=\"1\" x=\"3\" y=\"8\"/><path d=\"M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z\"/><path d=\"M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z\"/><path d=\"M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z\"/><rect height=\"1\" width=\"1\" x=\"12\" y=\"2\"/><rect height=\"1\" width=\"1\" x=\"11\" y=\"3\"/><path d=\"M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z\"/><rect height=\"1\" width=\"1\" x=\"2\" y=\"3\"/><rect height=\"1\" width=\"1\" x=\"6\" y=\"2\"/><rect height=\"1\" width=\"1\" x=\"3\" y=\"2\"/><rect height=\"1\" width=\"1\" x=\"5\" y=\"3\"/><rect height=\"1\" width=\"1\" x=\"9\" y=\"2\"/><rect height=\"1\" width=\"1\" x=\"15\" y=\"14\"/><polygon points=\"13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174\"/><rect height=\"1\" width=\"1\" x=\"13\" y=\"7\"/><rect height=\"1\" width=\"1\" x=\"15\" y=\"5\"/><rect height=\"1\" width=\"1\" x=\"14\" y=\"6\"/><rect height=\"1\" width=\"1\" x=\"15\" y=\"8\"/><rect height=\"1\" width=\"1\" x=\"14\" y=\"9\"/><path d=\"M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z\"/><rect height=\"1\" width=\"1\" x=\"14\" y=\"3\"/><polygon points=\"12 6.868 12 6 11.62 6 12 6.868\"/><rect height=\"1\" width=\"1\" x=\"15\" y=\"2\"/><rect height=\"1\" width=\"1\" x=\"12\" y=\"5\"/><rect height=\"1\" width=\"1\" x=\"13\" y=\"4\"/><polygon points=\"12.933 9 13 9 13 8 12.495 8 12.933 9\"/><rect height=\"1\" width=\"1\" x=\"9\" y=\"14\"/><rect height=\"1\" width=\"1\" x=\"8\" y=\"15\"/><path d=\"M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z\"/><rect height=\"1\" width=\"1\" x=\"5\" y=\"15\"/><path d=\"M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z\"/><rect height=\"1\" width=\"1\" x=\"11\" y=\"15\"/><path d=\"M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z\"/><rect height=\"1\" width=\"1\" x=\"14\" y=\"15\"/><rect height=\"1\" width=\"1\" x=\"15\" y=\"11\"/></g><polyline class=\"ql-stroke\" points=\"5.5 13 9 5 12.5 13\"/><line class=\"ql-stroke\" x1=\"11.63\" x2=\"6.38\" y1=\"11\" y2=\"11\"/></svg>", kl = "<svg viewbox=\"0 0 18 18\"><rect class=\"ql-fill ql-stroke\" height=\"3\" width=\"3\" x=\"4\" y=\"5\"/><rect class=\"ql-fill ql-stroke\" height=\"3\" width=\"3\" x=\"11\" y=\"5\"/><path class=\"ql-even ql-fill ql-stroke\" d=\"M7,8c0,4.031-3,5-3,5\"/><path class=\"ql-even ql-fill ql-stroke\" d=\"M14,8c0,4.031-3,5-3,5\"/></svg>", Al = "<svg viewbox=\"0 0 18 18\"><path class=\"ql-stroke\" d=\"M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z\"/><path class=\"ql-stroke\" d=\"M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z\"/></svg>", jl = "<svg class=\"\" viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"5\" x2=\"13\" y1=\"3\" y2=\"3\"/><line class=\"ql-stroke\" x1=\"6\" x2=\"9.35\" y1=\"12\" y2=\"3\"/><line class=\"ql-stroke\" x1=\"11\" x2=\"15\" y1=\"11\" y2=\"15\"/><line class=\"ql-stroke\" x1=\"15\" x2=\"11\" y1=\"11\" y2=\"15\"/><rect class=\"ql-fill\" height=\"1\" rx=\"0.5\" ry=\"0.5\" width=\"7\" x=\"2\" y=\"14\"/></svg>", Ml = "<svg viewbox=\"0 0 18 18\"><polyline class=\"ql-even ql-stroke\" points=\"5 7 3 9 5 11\"/><polyline class=\"ql-even ql-stroke\" points=\"13 7 15 9 13 11\"/><line class=\"ql-stroke\" x1=\"10\" x2=\"8\" y1=\"5\" y2=\"13\"/></svg>", Nl = {
	align: {
		"": wl,
		center: Tl,
		right: El,
		justify: Dl
	},
	background: Ol,
	blockquote: kl,
	bold: Al,
	clean: jl,
	code: Ml,
	"code-block": Ml,
	color: "<svg viewbox=\"0 0 18 18\"><line class=\"ql-color-label ql-stroke ql-transparent\" x1=\"3\" x2=\"15\" y1=\"15\" y2=\"15\"/><polyline class=\"ql-stroke\" points=\"5.5 11 9 3 12.5 11\"/><line class=\"ql-stroke\" x1=\"11.63\" x2=\"6.38\" y1=\"9\" y2=\"9\"/></svg>",
	direction: {
		"": "<svg viewbox=\"0 0 18 18\"><polygon class=\"ql-stroke ql-fill\" points=\"3 11 5 9 3 7 3 11\"/><line class=\"ql-stroke ql-fill\" x1=\"15\" x2=\"11\" y1=\"4\" y2=\"4\"/><path class=\"ql-fill\" d=\"M11,3a3,3,0,0,0,0,6h1V3H11Z\"/><rect class=\"ql-fill\" height=\"11\" width=\"1\" x=\"11\" y=\"4\"/><rect class=\"ql-fill\" height=\"11\" width=\"1\" x=\"13\" y=\"4\"/></svg>",
		rtl: "<svg viewbox=\"0 0 18 18\"><polygon class=\"ql-stroke ql-fill\" points=\"15 12 13 10 15 8 15 12\"/><line class=\"ql-stroke ql-fill\" x1=\"9\" x2=\"5\" y1=\"4\" y2=\"4\"/><path class=\"ql-fill\" d=\"M5,3A3,3,0,0,0,5,9H6V3H5Z\"/><rect class=\"ql-fill\" height=\"11\" width=\"1\" x=\"5\" y=\"4\"/><rect class=\"ql-fill\" height=\"11\" width=\"1\" x=\"7\" y=\"4\"/></svg>"
	},
	formula: "<svg viewbox=\"0 0 18 18\"><path class=\"ql-fill\" d=\"M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z\"/><rect class=\"ql-fill\" height=\"1.6\" rx=\"0.8\" ry=\"0.8\" width=\"5\" x=\"5.15\" y=\"6.2\"/><path class=\"ql-fill\" d=\"M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z\"/></svg>",
	header: {
		1: "<svg viewBox=\"0 0 18 18\"><path class=\"ql-fill\" d=\"M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z\"/></svg>",
		2: "<svg viewBox=\"0 0 18 18\"><path class=\"ql-fill\" d=\"M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z\"/></svg>",
		3: "<svg viewBox=\"0 0 18 18\"><path class=\"ql-fill\" d=\"M16.65186,12.30664a2.6742,2.6742,0,0,1-2.915,2.68457,3.96592,3.96592,0,0,1-2.25537-.6709.56007.56007,0,0,1-.13232-.83594L11.64648,13c.209-.34082.48389-.36328.82471-.1543a2.32654,2.32654,0,0,0,1.12256.33008c.71484,0,1.12207-.35156,1.12207-.78125,0-.61523-.61621-.86816-1.46338-.86816H13.2085a.65159.65159,0,0,1-.68213-.41895l-.05518-.10937a.67114.67114,0,0,1,.14307-.78125l.71533-.86914a8.55289,8.55289,0,0,1,.68213-.7373V8.58887a3.93913,3.93913,0,0,1-.748.05469H11.9873a.54085.54085,0,0,1-.605-.60547V7.59863a.54085.54085,0,0,1,.605-.60547h3.75146a.53773.53773,0,0,1,.60547.59375v.17676a1.03723,1.03723,0,0,1-.27539.748L14.74854,10.0293A2.31132,2.31132,0,0,1,16.65186,12.30664ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z\"/></svg>",
		4: "<svg viewBox=\"0 0 18 18\"><path class=\"ql-fill\" d=\"M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm7.05371,7.96582v.38477c0,.39648-.165.60547-.46191.60547h-.47314v1.29785a.54085.54085,0,0,1-.605.60547h-.69336a.54085.54085,0,0,1-.605-.60547V12.95605H11.333a.5412.5412,0,0,1-.60547-.60547v-.15332a1.199,1.199,0,0,1,.22021-.748l2.56348-4.05957a.7819.7819,0,0,1,.72607-.39648h1.27637a.54085.54085,0,0,1,.605.60547v3.7627h.33008A.54055.54055,0,0,1,17.05371,11.96582ZM14.28125,8.7207h-.022a4.18969,4.18969,0,0,1-.38525.81348l-1.188,1.80469v.02246h1.5293V9.60059A7.04058,7.04058,0,0,1,14.28125,8.7207Z\"/></svg>",
		5: "<svg viewBox=\"0 0 18 18\"><path class=\"ql-fill\" d=\"M16.74023,12.18555a2.75131,2.75131,0,0,1-2.91553,2.80566,3.908,3.908,0,0,1-2.25537-.68164.54809.54809,0,0,1-.13184-.8252L11.73438,13c.209-.34082.48389-.36328.8252-.1543a2.23757,2.23757,0,0,0,1.1001.33008,1.01827,1.01827,0,0,0,1.1001-.96777c0-.61621-.53906-.97949-1.25439-.97949a2.15554,2.15554,0,0,0-.64893.09961,1.15209,1.15209,0,0,1-.814.01074l-.12109-.04395a.64116.64116,0,0,1-.45117-.71484l.231-3.00391a.56666.56666,0,0,1,.62744-.583H15.541a.54085.54085,0,0,1,.605.60547v.43945a.54085.54085,0,0,1-.605.60547H13.41748l-.04395.72559a1.29306,1.29306,0,0,1-.04395.30859h.022a2.39776,2.39776,0,0,1,.57227-.07715A2.53266,2.53266,0,0,1,16.74023,12.18555ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z\"/></svg>",
		6: "<svg viewBox=\"0 0 18 18\"><path class=\"ql-fill\" d=\"M14.51758,9.64453a1.85627,1.85627,0,0,0-1.24316.38477H13.252a1.73532,1.73532,0,0,1,1.72754-1.4082,2.66491,2.66491,0,0,1,.5498.06641c.35254.05469.57227.01074.70508-.40723l.16406-.5166a.53393.53393,0,0,0-.373-.75977,4.83723,4.83723,0,0,0-1.17773-.14258c-2.43164,0-3.7627,2.17773-3.7627,4.43359,0,2.47559,1.60645,3.69629,3.19043,3.69629A2.70585,2.70585,0,0,0,16.96,12.19727,2.43861,2.43861,0,0,0,14.51758,9.64453Zm-.23047,3.58691c-.67187,0-1.22168-.81445-1.22168-1.45215,0-.47363.30762-.583.72559-.583.96875,0,1.27734.59375,1.27734,1.12207A.82182.82182,0,0,1,14.28711,13.23145ZM10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Z\"/></svg>"
	},
	italic: "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"7\" x2=\"13\" y1=\"4\" y2=\"4\"/><line class=\"ql-stroke\" x1=\"5\" x2=\"11\" y1=\"14\" y2=\"14\"/><line class=\"ql-stroke\" x1=\"8\" x2=\"10\" y1=\"14\" y2=\"4\"/></svg>",
	image: "<svg viewbox=\"0 0 18 18\"><rect class=\"ql-stroke\" height=\"10\" width=\"12\" x=\"3\" y=\"4\"/><circle class=\"ql-fill\" cx=\"6\" cy=\"7\" r=\"1\"/><polyline class=\"ql-even ql-fill\" points=\"5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12\"/></svg>",
	indent: {
		"+1": "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"3\" x2=\"15\" y1=\"14\" y2=\"14\"/><line class=\"ql-stroke\" x1=\"3\" x2=\"15\" y1=\"4\" y2=\"4\"/><line class=\"ql-stroke\" x1=\"9\" x2=\"15\" y1=\"9\" y2=\"9\"/><polyline class=\"ql-fill ql-stroke\" points=\"3 7 3 11 5 9 3 7\"/></svg>",
		"-1": "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"3\" x2=\"15\" y1=\"14\" y2=\"14\"/><line class=\"ql-stroke\" x1=\"3\" x2=\"15\" y1=\"4\" y2=\"4\"/><line class=\"ql-stroke\" x1=\"9\" x2=\"15\" y1=\"9\" y2=\"9\"/><polyline class=\"ql-stroke\" points=\"5 7 5 11 3 9 5 7\"/></svg>"
	},
	link: "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"7\" x2=\"11\" y1=\"7\" y2=\"11\"/><path class=\"ql-even ql-stroke\" d=\"M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z\"/><path class=\"ql-even ql-stroke\" d=\"M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z\"/></svg>",
	list: {
		bullet: "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"6\" x2=\"15\" y1=\"4\" y2=\"4\"/><line class=\"ql-stroke\" x1=\"6\" x2=\"15\" y1=\"9\" y2=\"9\"/><line class=\"ql-stroke\" x1=\"6\" x2=\"15\" y1=\"14\" y2=\"14\"/><line class=\"ql-stroke\" x1=\"3\" x2=\"3\" y1=\"4\" y2=\"4\"/><line class=\"ql-stroke\" x1=\"3\" x2=\"3\" y1=\"9\" y2=\"9\"/><line class=\"ql-stroke\" x1=\"3\" x2=\"3\" y1=\"14\" y2=\"14\"/></svg>",
		check: "<svg class=\"\" viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"9\" x2=\"15\" y1=\"4\" y2=\"4\"/><polyline class=\"ql-stroke\" points=\"3 4 4 5 6 3\"/><line class=\"ql-stroke\" x1=\"9\" x2=\"15\" y1=\"14\" y2=\"14\"/><polyline class=\"ql-stroke\" points=\"3 14 4 15 6 13\"/><line class=\"ql-stroke\" x1=\"9\" x2=\"15\" y1=\"9\" y2=\"9\"/><polyline class=\"ql-stroke\" points=\"3 9 4 10 6 8\"/></svg>",
		ordered: "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"7\" x2=\"15\" y1=\"4\" y2=\"4\"/><line class=\"ql-stroke\" x1=\"7\" x2=\"15\" y1=\"9\" y2=\"9\"/><line class=\"ql-stroke\" x1=\"7\" x2=\"15\" y1=\"14\" y2=\"14\"/><line class=\"ql-stroke ql-thin\" x1=\"2.5\" x2=\"4.5\" y1=\"5.5\" y2=\"5.5\"/><path class=\"ql-fill\" d=\"M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z\"/><path class=\"ql-stroke ql-thin\" d=\"M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156\"/><path class=\"ql-stroke ql-thin\" d=\"M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109\"/></svg>"
	},
	script: {
		sub: "<svg viewbox=\"0 0 18 18\"><path class=\"ql-fill\" d=\"M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z\"/><path class=\"ql-fill\" d=\"M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z\"/></svg>",
		super: "<svg viewbox=\"0 0 18 18\"><path class=\"ql-fill\" d=\"M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z\"/><path class=\"ql-fill\" d=\"M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z\"/></svg>"
	},
	strike: "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke ql-thin\" x1=\"15.5\" x2=\"2.5\" y1=\"8.5\" y2=\"9.5\"/><path class=\"ql-fill\" d=\"M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z\"/><path class=\"ql-fill\" d=\"M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z\"/></svg>",
	table: "<svg viewbox=\"0 0 18 18\"><rect class=\"ql-stroke\" height=\"12\" width=\"12\" x=\"3\" y=\"3\"/><rect class=\"ql-fill\" height=\"2\" width=\"3\" x=\"5\" y=\"5\"/><rect class=\"ql-fill\" height=\"2\" width=\"4\" x=\"9\" y=\"5\"/><g class=\"ql-fill ql-transparent\"><rect height=\"2\" width=\"3\" x=\"5\" y=\"8\"/><rect height=\"2\" width=\"4\" x=\"9\" y=\"8\"/><rect height=\"2\" width=\"3\" x=\"5\" y=\"11\"/><rect height=\"2\" width=\"4\" x=\"9\" y=\"11\"/></g></svg>",
	underline: "<svg viewbox=\"0 0 18 18\"><path class=\"ql-stroke\" d=\"M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3\"/><rect class=\"ql-fill\" height=\"1\" rx=\"0.5\" ry=\"0.5\" width=\"12\" x=\"3\" y=\"15\"/></svg>",
	video: "<svg viewbox=\"0 0 18 18\"><rect class=\"ql-stroke\" height=\"12\" width=\"12\" x=\"3\" y=\"3\"/><rect class=\"ql-fill\" height=\"12\" width=\"1\" x=\"5\" y=\"3\"/><rect class=\"ql-fill\" height=\"12\" width=\"1\" x=\"12\" y=\"3\"/><rect class=\"ql-fill\" height=\"2\" width=\"8\" x=\"5\" y=\"8\"/><rect class=\"ql-fill\" height=\"1\" width=\"3\" x=\"3\" y=\"5\"/><rect class=\"ql-fill\" height=\"1\" width=\"3\" x=\"3\" y=\"7\"/><rect class=\"ql-fill\" height=\"1\" width=\"3\" x=\"3\" y=\"10\"/><rect class=\"ql-fill\" height=\"1\" width=\"3\" x=\"3\" y=\"12\"/><rect class=\"ql-fill\" height=\"1\" width=\"3\" x=\"12\" y=\"5\"/><rect class=\"ql-fill\" height=\"1\" width=\"3\" x=\"12\" y=\"7\"/><rect class=\"ql-fill\" height=\"1\" width=\"3\" x=\"12\" y=\"10\"/><rect class=\"ql-fill\" height=\"1\" width=\"3\" x=\"12\" y=\"12\"/></svg>"
}, Pl = "<svg viewbox=\"0 0 18 18\"><polygon class=\"ql-stroke\" points=\"7 11 9 13 11 11 7 11\"/><polygon class=\"ql-stroke\" points=\"7 7 9 5 11 7 7 7\"/></svg>", Fl = 0;
function Il(e, t) {
	e.setAttribute(t, `${e.getAttribute(t) !== "true"}`);
}
var Ll = class {
	constructor(e) {
		this.select = e, this.container = document.createElement("span"), this.buildPicker(), this.select.style.display = "none", this.select.parentNode.insertBefore(this.container, this.select), this.label.addEventListener("mousedown", () => {
			this.togglePicker();
		}), this.label.addEventListener("keydown", (e) => {
			switch (e.key) {
				case "Enter":
					this.togglePicker();
					break;
				case "Escape": this.escape(), e.preventDefault();
			}
		}), this.select.addEventListener("change", this.update.bind(this));
	}
	togglePicker() {
		this.container.classList.toggle("ql-expanded"), Il(this.label, "aria-expanded"), Il(this.options, "aria-hidden");
	}
	buildItem(e) {
		let t = document.createElement("span");
		t.tabIndex = "0", t.setAttribute("role", "button"), t.classList.add("ql-picker-item");
		let n = e.getAttribute("value");
		return n && t.setAttribute("data-value", n), e.textContent && t.setAttribute("data-label", e.textContent), t.addEventListener("click", () => {
			this.selectItem(t, !0);
		}), t.addEventListener("keydown", (e) => {
			switch (e.key) {
				case "Enter":
					this.selectItem(t, !0), e.preventDefault();
					break;
				case "Escape": this.escape(), e.preventDefault();
			}
		}), t;
	}
	buildLabel() {
		let e = document.createElement("span");
		return e.classList.add("ql-picker-label"), e.innerHTML = Pl, e.tabIndex = "0", e.setAttribute("role", "button"), e.setAttribute("aria-expanded", "false"), this.container.appendChild(e), e;
	}
	buildOptions() {
		let e = document.createElement("span");
		e.classList.add("ql-picker-options"), e.setAttribute("aria-hidden", "true"), e.tabIndex = "-1", e.id = `ql-picker-options-${Fl}`, Fl += 1, this.label.setAttribute("aria-controls", e.id), this.options = e, Array.from(this.select.options).forEach((t) => {
			let n = this.buildItem(t);
			e.appendChild(n), t.selected === !0 && this.selectItem(n);
		}), this.container.appendChild(e);
	}
	buildPicker() {
		Array.from(this.select.attributes).forEach((e) => {
			this.container.setAttribute(e.name, e.value);
		}), this.container.classList.add("ql-picker"), this.label = this.buildLabel(), this.buildOptions();
	}
	escape() {
		this.close(), setTimeout(() => this.label.focus(), 1);
	}
	close() {
		this.container.classList.remove("ql-expanded"), this.label.setAttribute("aria-expanded", "false"), this.options.setAttribute("aria-hidden", "true");
	}
	selectItem(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], n = this.container.querySelector(".ql-selected");
		e !== n && (n?.classList.remove("ql-selected"), e != null && (e.classList.add("ql-selected"), this.select.selectedIndex = Array.from(e.parentNode.children).indexOf(e), e.hasAttribute("data-value") ? this.label.setAttribute("data-value", e.getAttribute("data-value")) : this.label.removeAttribute("data-value"), e.hasAttribute("data-label") ? this.label.setAttribute("data-label", e.getAttribute("data-label")) : this.label.removeAttribute("data-label"), t && (this.select.dispatchEvent(new Event("change")), this.close())));
	}
	update() {
		let e;
		if (this.select.selectedIndex > -1) {
			let t = this.container.querySelector(".ql-picker-options").children[this.select.selectedIndex];
			e = this.select.options[this.select.selectedIndex], this.selectItem(t);
		} else this.selectItem(null);
		let t = e != null && e !== this.select.querySelector("option[selected]");
		this.label.classList.toggle("ql-active", t);
	}
}, Rl = class extends Ll {
	constructor(e, t) {
		super(e), this.label.innerHTML = t, this.container.classList.add("ql-color-picker"), Array.from(this.container.querySelectorAll(".ql-picker-item")).slice(0, 7).forEach((e) => {
			e.classList.add("ql-primary");
		});
	}
	buildItem(e) {
		let t = super.buildItem(e);
		return t.style.backgroundColor = e.getAttribute("value") || "", t;
	}
	selectItem(e, t) {
		super.selectItem(e, t);
		let n = this.label.querySelector(".ql-color-label"), r = e && e.getAttribute("data-value") || "";
		n && (n.tagName === "line" ? n.style.stroke = r : n.style.fill = r);
	}
}, zl = class extends Ll {
	constructor(e, t) {
		super(e), this.container.classList.add("ql-icon-picker"), Array.from(this.container.querySelectorAll(".ql-picker-item")).forEach((e) => {
			e.innerHTML = t[e.getAttribute("data-value") || ""];
		}), this.defaultItem = this.container.querySelector(".ql-selected"), this.selectItem(this.defaultItem);
	}
	selectItem(e, t) {
		super.selectItem(e, t);
		let n = e || this.defaultItem;
		if (n != null) {
			if (this.label.innerHTML === n.innerHTML) return;
			this.label.innerHTML = n.innerHTML;
		}
	}
}, Bl = (e) => {
	let { overflowY: t } = getComputedStyle(e, null);
	return t !== "visible" && t !== "clip";
}, Vl = class {
	constructor(e, t) {
		this.quill = e, this.boundsContainer = t || document.body, this.root = e.addContainer("ql-tooltip"), this.root.innerHTML = this.constructor.TEMPLATE, Bl(this.quill.root) && this.quill.root.addEventListener("scroll", () => {
			this.root.style.marginTop = `${-1 * this.quill.root.scrollTop}px`;
		}), this.hide();
	}
	hide() {
		this.root.classList.add("ql-hidden");
	}
	position(e) {
		let t = e.left + e.width / 2 - this.root.offsetWidth / 2, n = e.bottom + this.quill.root.scrollTop;
		this.root.style.left = `${t}px`, this.root.style.top = `${n}px`, this.root.classList.remove("ql-flip");
		let r = this.boundsContainer.getBoundingClientRect(), i = this.root.getBoundingClientRect(), a = 0;
		if (i.right > r.right && (a = r.right - i.right, this.root.style.left = `${t + a}px`), i.left < r.left && (a = r.left - i.left, this.root.style.left = `${t + a}px`), i.bottom > r.bottom) {
			let t = i.bottom - i.top, r = e.bottom - e.top + t;
			this.root.style.top = `${n - r}px`, this.root.classList.add("ql-flip");
		}
		return a;
	}
	show() {
		this.root.classList.remove("ql-editing"), this.root.classList.remove("ql-hidden");
	}
}, Hl = [
	!1,
	"center",
	"right",
	"justify"
], Ul = /* @__PURE__ */ "#000000.#e60000.#ff9900.#ffff00.#008a00.#0066cc.#9933ff.#ffffff.#facccc.#ffebcc.#ffffcc.#cce8cc.#cce0f5.#ebd6ff.#bbbbbb.#f06666.#ffc266.#ffff66.#66b966.#66a3e0.#c285ff.#888888.#a10000.#b26b00.#b2b200.#006100.#0047b2.#6b24b2.#444444.#5c0000.#663d00.#666600.#003700.#002966.#3d1466".split("."), Wl = [
	!1,
	"serif",
	"monospace"
], Gl = [
	"1",
	"2",
	"3",
	!1
], Kl = [
	"small",
	!1,
	"large",
	"huge"
], ql = class extends Jo {
	constructor(e, t) {
		super(e, t);
		let n = (t) => {
			document.body.contains(e.root) ? (this.tooltip != null && !this.tooltip.root.contains(t.target) && document.activeElement !== this.tooltip.textbox && !this.quill.hasFocus() && this.tooltip.hide(), this.pickers != null && this.pickers.forEach((e) => {
				e.container.contains(t.target) || e.close();
			})) : document.body.removeEventListener("click", n);
		};
		e.emitter.listenDOM("click", document.body, n);
	}
	addModule(e) {
		let t = super.addModule(e);
		return e === "toolbar" && this.extendToolbar(t), t;
	}
	buildButtons(e, t) {
		Array.from(e).forEach((e) => {
			(e.getAttribute("class") || "").split(/\s+/).forEach((n) => {
				if (n.startsWith("ql-") && (n = n.slice(3), t[n] != null)) {
					if (n === "direction") e.innerHTML = t[n][""] + t[n].rtl;
					else if (typeof t[n] == "string") e.innerHTML = t[n];
					else {
						let r = e.value || "";
						r != null && t[n][r] && (e.innerHTML = t[n][r]);
					}
				}
			});
		});
	}
	buildPickers(e, t) {
		this.pickers = Array.from(e).map((e) => {
			if (e.classList.contains("ql-align") && (e.querySelector("option") ?? Xl(e, Hl), typeof t.align == "object")) return new zl(e, t.align);
			if (e.classList.contains("ql-background") || e.classList.contains("ql-color")) {
				let n = e.classList.contains("ql-background") ? "background" : "color";
				return e.querySelector("option") ?? Xl(e, Ul, n === "background" ? "#ffffff" : "#000000"), new Rl(e, t[n]);
			}
			return e.querySelector("option") ?? (e.classList.contains("ql-font") ? Xl(e, Wl) : e.classList.contains("ql-header") ? Xl(e, Gl) : e.classList.contains("ql-size") && Xl(e, Kl)), new Ll(e);
		}), this.quill.on(B.events.EDITOR_CHANGE, () => {
			this.pickers.forEach((e) => {
				e.update();
			});
		});
	}
};
ql.DEFAULTS = ka({}, Jo.DEFAULTS, { modules: { toolbar: { handlers: {
	formula() {
		this.quill.theme.tooltip.edit("formula");
	},
	image() {
		let e = this.container.querySelector("input.ql-image[type=file]");
		e ?? (e = document.createElement("input"), e.setAttribute("type", "file"), e.setAttribute("accept", this.quill.uploader.options.mimetypes.join(", ")), e.classList.add("ql-image"), e.addEventListener("change", () => {
			let t = this.quill.getSelection(!0);
			this.quill.uploader.upload(t, e.files), e.value = "";
		}), this.container.appendChild(e)), e.click();
	},
	video() {
		this.quill.theme.tooltip.edit("video");
	}
} } } });
var Jl = class extends Vl {
	constructor(e, t) {
		super(e, t), this.textbox = this.root.querySelector("input[type=\"text\"]"), this.listen();
	}
	listen() {
		this.textbox.addEventListener("keydown", (e) => {
			e.key === "Enter" ? (this.save(), e.preventDefault()) : e.key === "Escape" && (this.cancel(), e.preventDefault());
		});
	}
	cancel() {
		this.hide(), this.restoreFocus();
	}
	edit() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "link", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
		if (this.root.classList.remove("ql-hidden"), this.root.classList.add("ql-editing"), this.textbox == null) return;
		t == null ? e !== this.root.getAttribute("data-mode") && (this.textbox.value = "") : this.textbox.value = t;
		let n = this.quill.getBounds(this.quill.selection.savedRange);
		n != null && this.position(n), this.textbox.select(), this.textbox.setAttribute("placeholder", this.textbox.getAttribute(`data-${e}`) || ""), this.root.setAttribute("data-mode", e);
	}
	restoreFocus() {
		this.quill.focus({ preventScroll: !0 });
	}
	save() {
		let { value: e } = this.textbox;
		switch (this.root.getAttribute("data-mode")) {
			case "link": {
				let { scrollTop: t } = this.quill.root;
				this.linkRange ? (this.quill.formatText(this.linkRange, "link", e, B.sources.USER), delete this.linkRange) : (this.restoreFocus(), this.quill.format("link", e, B.sources.USER)), this.quill.root.scrollTop = t;
				break;
			}
			case "video": e = Yl(e);
			case "formula": {
				if (!e) break;
				let t = this.quill.getSelection(!0);
				if (t != null) {
					let n = t.index + t.length;
					this.quill.insertEmbed(n, this.root.getAttribute("data-mode"), e, B.sources.USER), this.root.getAttribute("data-mode") === "formula" && this.quill.insertText(n + 1, " ", B.sources.USER), this.quill.setSelection(n + 2, B.sources.USER);
				}
				break;
			}
		}
		this.textbox.value = "", this.hide();
	}
};
function Yl(e) {
	let t = e.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/) || e.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);
	return t ? `${t[1] || "https"}://www.youtube.com/embed/${t[2]}?showinfo=0` : (t = e.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/)) ? `${t[1] || "https"}://player.vimeo.com/video/${t[2]}/` : e;
}
function Xl(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
	t.forEach((t) => {
		let r = document.createElement("option");
		t === n ? r.setAttribute("selected", "selected") : r.setAttribute("value", String(t)), e.appendChild(r);
	});
}
// node_modules/quill/themes/bubble.js
var Zl = [[
	"bold",
	"italic",
	"link"
], [
	{ header: 1 },
	{ header: 2 },
	"blockquote"
]], Ql = class extends Jl {
	static TEMPLATE = "<span class=\"ql-tooltip-arrow\"></span><div class=\"ql-tooltip-editor\"><input type=\"text\" data-formula=\"e=mc^2\" data-link=\"https://quilljs.com\" data-video=\"Embed URL\"><a class=\"ql-close\"></a></div>";
	constructor(e, t) {
		super(e, t), this.quill.on(B.events.EDITOR_CHANGE, (e, t, n, r) => {
			if (e === B.events.SELECTION_CHANGE) {
				if (t != null && t.length > 0 && r === B.sources.USER) {
					this.show(), this.root.style.left = "0px", this.root.style.width = "", this.root.style.width = `${this.root.offsetWidth}px`;
					let e = this.quill.getLines(t.index, t.length);
					if (e.length === 1) {
						let e = this.quill.getBounds(t);
						e != null && this.position(e);
					} else {
						let n = e[e.length - 1], r = this.quill.getIndex(n), i = Math.min(n.length() - 1, t.index + t.length - r), a = this.quill.getBounds(new Mo(r, i));
						a != null && this.position(a);
					}
				} else document.activeElement !== this.textbox && this.quill.hasFocus() && this.hide();
			}
		});
	}
	listen() {
		super.listen(), this.root.querySelector(".ql-close").addEventListener("click", () => {
			this.root.classList.remove("ql-editing");
		}), this.quill.on(B.events.SCROLL_OPTIMIZE, () => {
			setTimeout(() => {
				if (this.root.classList.contains("ql-hidden")) return;
				let e = this.quill.getSelection();
				if (e != null) {
					let t = this.quill.getBounds(e);
					t != null && this.position(t);
				}
			}, 1);
		});
	}
	cancel() {
		this.show();
	}
	position(e) {
		let t = super.position(e), n = this.root.querySelector(".ql-tooltip-arrow");
		return n.style.marginLeft = "", t !== 0 && (n.style.marginLeft = `${-1 * t - n.offsetWidth / 2}px`), t;
	}
}, $l = class extends ql {
	constructor(e, t) {
		t.modules.toolbar != null && t.modules.toolbar.container == null && (t.modules.toolbar.container = Zl), super(e, t), this.quill.container.classList.add("ql-bubble");
	}
	extendToolbar(e) {
		this.tooltip = new Ql(this.quill, this.options.bounds), e.container != null && (this.tooltip.root.appendChild(e.container), this.buildButtons(e.container.querySelectorAll("button"), Nl), this.buildPickers(e.container.querySelectorAll("select"), Nl));
	}
};
$l.DEFAULTS = ka({}, ql.DEFAULTS, { modules: { toolbar: { handlers: { link(e) {
	e ? this.quill.theme.tooltip.edit() : this.quill.format("link", !1, V.sources.USER);
} } } } });
// node_modules/quill/themes/snow.js
var eu = [
	[{ header: [
		"1",
		"2",
		"3",
		!1
	] }],
	[
		"bold",
		"italic",
		"underline",
		"link"
	],
	[{ list: "ordered" }, { list: "bullet" }],
	["clean"]
], tu = class extends Jl {
	static TEMPLATE = "<a class=\"ql-preview\" rel=\"noopener noreferrer\" target=\"_blank\" href=\"about:blank\"></a><input type=\"text\" data-formula=\"e=mc^2\" data-link=\"https://quilljs.com\" data-video=\"Embed URL\"><a class=\"ql-action\"></a><a class=\"ql-remove\"></a>";
	preview = this.root.querySelector("a.ql-preview");
	listen() {
		super.listen(), this.root.querySelector("a.ql-action").addEventListener("click", (e) => {
			this.root.classList.contains("ql-editing") ? this.save() : this.edit("link", this.preview.textContent), e.preventDefault();
		}), this.root.querySelector("a.ql-remove").addEventListener("click", (e) => {
			if (this.linkRange != null) {
				let e = this.linkRange;
				this.restoreFocus(), this.quill.formatText(e, "link", !1, B.sources.USER), delete this.linkRange;
			}
			e.preventDefault(), this.hide();
		}), this.quill.on(B.events.SELECTION_CHANGE, (e, t, n) => {
			if (e != null) {
				if (e.length === 0 && n === B.sources.USER) {
					let [t, n] = this.quill.scroll.descendant(Zc, e.index);
					if (t != null) {
						this.linkRange = new Mo(e.index - n, t.length());
						let r = Zc.formats(t.domNode);
						this.preview.textContent = r, this.preview.setAttribute("href", r), this.show();
						let i = this.quill.getBounds(this.linkRange);
						i != null && this.position(i);
						return;
					}
				} else delete this.linkRange;
				this.hide();
			}
		});
	}
	show() {
		super.show(), this.root.removeAttribute("data-mode");
	}
}, nu = class extends ql {
	constructor(e, t) {
		t.modules.toolbar != null && t.modules.toolbar.container == null && (t.modules.toolbar.container = eu), super(e, t), this.quill.container.classList.add("ql-snow");
	}
	extendToolbar(e) {
		e.container != null && (e.container.classList.add("ql-snow"), this.buildButtons(e.container.querySelectorAll("button"), Nl), this.buildPickers(e.container.querySelectorAll("select"), Nl), this.tooltip = new tu(this.quill, this.options.bounds), e.container.querySelector(".ql-link") && this.quill.keyboard.addBinding({
			key: "k",
			shortKey: !0
		}, (t, n) => {
			e.handlers.link.call(e, !n.format.link);
		}));
	}
};
nu.DEFAULTS = ka({}, ql.DEFAULTS, { modules: { toolbar: { handlers: { link(e) {
	if (e) {
		let e = this.quill.getSelection();
		if (e == null || e.length === 0) return;
		let t = this.quill.getText(e);
		/^\S+@\S+\.\S+$/.test(t) && t.indexOf("mailto:") !== 0 && (t = `mailto:${t}`);
		let { tooltip: n } = this.quill.theme;
		n.edit("link", t);
	} else this.quill.format("link", !1, V.sources.USER);
} } } } }), Uc.register({
	"attributors/attribute/direction": ks,
	"attributors/class/align": ys,
	"attributors/class/background": ws,
	"attributors/class/color": Ss,
	"attributors/class/direction": As,
	"attributors/class/font": Ns,
	"attributors/class/size": Fs,
	"attributors/style/align": bs,
	"attributors/style/background": Ts,
	"attributors/style/color": Cs,
	"attributors/style/direction": js,
	"attributors/style/font": Ps,
	"attributors/style/size": Is
}, !0), Uc.register({
	"formats/align": ys,
	"formats/direction": As,
	"formats/indent": Wc,
	"formats/background": Ts,
	"formats/color": Cs,
	"formats/font": Ns,
	"formats/size": Fs,
	"formats/blockquote": Gc,
	"formats/code-block": H,
	"formats/header": Kc,
	"formats/list": Jc,
	"formats/bold": Yc,
	"formats/code": Ds,
	"formats/italic": Xc,
	"formats/link": Zc,
	"formats/script": $c,
	"formats/strike": el,
	"formats/underline": tl,
	"formats/formula": nl,
	"formats/image": il,
	"formats/video": ol,
	"modules/syntax": fl,
	"modules/table": vl,
	"modules/toolbar": bl,
	"themes/bubble": $l,
	"themes/snow": nu,
	"ui/icons": Nl,
	"ui/picker": Ll,
	"ui/icon-picker": zl,
	"ui/color-picker": Rl,
	"ui/tooltip": Vl
}, !0);
var ru = Uc, iu = 524288, au = /* @__PURE__ */ new Map();
async function ou(e, { form: t, kind: n = "inline" }) {
	let r = t.querySelector("input[name=\"id\"]"), i = n + ":" + (r.value || "new") + ":" + e;
	if (au.has(i)) return au.get(i);
	let a = crypto.randomUUID(), o = Math.ceil(e.length / iu), s;
	for (let i = 0; i < o; i++) {
		let c = new URLSearchParams({
			postId: r.value,
			uploadId: a,
			kind: n,
			part: String(i),
			parts: String(o),
			data: e.slice(i * iu, (i + 1) * iu),
			csrf: t.querySelector("[name=\"csrf\"]")?.value || ""
		}), l = await fetch("/api/posts/images", {
			method: "POST",
			body: c,
			headers: { Accept: "application/json" }
		}), u;
		try {
			u = await l.json();
		} catch {
			throw Error(l.status === 413 ? "이미지 전송이 중단되었습니다. 다시 선택해주세요." : "이미지 저장 서버의 응답을 확인할 수 없습니다. 잠시 후 다시 시도해주세요.");
		}
		if (!l.ok) throw Error(u.errors?.join(" / ") || "이미지를 저장하지 못했습니다. 다시 시도해주세요.");
		r.value = u.postId, u.complete && (s = u.src);
	}
	if (!s) throw Error("이미지 전송이 완료되지 않았습니다. 다시 선택해주세요.");
	return au.set(i, s), au.set(n + ":" + r.value + ":" + e, s), s;
}
// src/image-upload.js
async function su(e) {
	if (![
		"image/jpeg",
		"image/png",
		"image/webp"
	].includes(e.type)) throw Error("JPG, PNG, WebP 이미지를 선택해주세요.");
	let t = URL.createObjectURL(e);
	try {
		let n = new Image();
		return n.src = t, await n.decode(), await new Promise((t, n) => {
			let r = new FileReader();
			r.onload = () => t(r.result), r.onerror = () => n(/* @__PURE__ */ Error("이미지 파일을 읽을 수 없습니다.")), r.onabort = () => n(/* @__PURE__ */ Error("이미지 읽기가 취소되었습니다.")), r.readAsDataURL(e);
		});
	} finally {
		URL.revokeObjectURL(t);
	}
}
async function cu(e, t) {
	return ou(await su(e), t);
}
// node_modules/parse5/dist/common/unicode.js
var lu = /* @__PURE__ */ new Set([
	65534,
	65535,
	131070,
	131071,
	196606,
	196607,
	262142,
	262143,
	327678,
	327679,
	393214,
	393215,
	458750,
	458751,
	524286,
	524287,
	589822,
	589823,
	655358,
	655359,
	720894,
	720895,
	786430,
	786431,
	851966,
	851967,
	917502,
	917503,
	983038,
	983039,
	1048574,
	1048575,
	1114110,
	1114111
]), U;
(function(e) {
	e[e.EOF = -1] = "EOF", e[e.NULL = 0] = "NULL", e[e.TABULATION = 9] = "TABULATION", e[e.CARRIAGE_RETURN = 13] = "CARRIAGE_RETURN", e[e.LINE_FEED = 10] = "LINE_FEED", e[e.FORM_FEED = 12] = "FORM_FEED", e[e.SPACE = 32] = "SPACE", e[e.EXCLAMATION_MARK = 33] = "EXCLAMATION_MARK", e[e.QUOTATION_MARK = 34] = "QUOTATION_MARK", e[e.AMPERSAND = 38] = "AMPERSAND", e[e.APOSTROPHE = 39] = "APOSTROPHE", e[e.HYPHEN_MINUS = 45] = "HYPHEN_MINUS", e[e.SOLIDUS = 47] = "SOLIDUS", e[e.DIGIT_0 = 48] = "DIGIT_0", e[e.DIGIT_9 = 57] = "DIGIT_9", e[e.SEMICOLON = 59] = "SEMICOLON", e[e.LESS_THAN_SIGN = 60] = "LESS_THAN_SIGN", e[e.EQUALS_SIGN = 61] = "EQUALS_SIGN", e[e.GREATER_THAN_SIGN = 62] = "GREATER_THAN_SIGN", e[e.QUESTION_MARK = 63] = "QUESTION_MARK", e[e.LATIN_CAPITAL_A = 65] = "LATIN_CAPITAL_A", e[e.LATIN_CAPITAL_Z = 90] = "LATIN_CAPITAL_Z", e[e.RIGHT_SQUARE_BRACKET = 93] = "RIGHT_SQUARE_BRACKET", e[e.GRAVE_ACCENT = 96] = "GRAVE_ACCENT", e[e.LATIN_SMALL_A = 97] = "LATIN_SMALL_A", e[e.LATIN_SMALL_Z = 122] = "LATIN_SMALL_Z";
})(U ||= {});
var uu = {
	DASH_DASH: "--",
	CDATA_START: "[CDATA[",
	DOCTYPE: "doctype",
	SCRIPT: "script",
	PUBLIC: "public",
	SYSTEM: "system"
};
function du(e) {
	return e >= 55296 && e <= 57343;
}
function fu(e) {
	return e >= 56320 && e <= 57343;
}
function pu(e, t) {
	return (e - 55296) * 1024 + 9216 + t;
}
function mu(e) {
	return e !== 32 && e !== 10 && e !== 13 && e !== 9 && e !== 12 && e >= 1 && e <= 31 || e >= 127 && e <= 159;
}
function hu(e) {
	return e >= 64976 && e <= 65007 || lu.has(e);
}
// node_modules/parse5/dist/common/error-codes.js
var W;
(function(e) {
	e.controlCharacterInInputStream = "control-character-in-input-stream", e.noncharacterInInputStream = "noncharacter-in-input-stream", e.surrogateInInputStream = "surrogate-in-input-stream", e.nonVoidHtmlElementStartTagWithTrailingSolidus = "non-void-html-element-start-tag-with-trailing-solidus", e.endTagWithAttributes = "end-tag-with-attributes", e.endTagWithTrailingSolidus = "end-tag-with-trailing-solidus", e.unexpectedSolidusInTag = "unexpected-solidus-in-tag", e.unexpectedNullCharacter = "unexpected-null-character", e.unexpectedQuestionMarkInsteadOfTagName = "unexpected-question-mark-instead-of-tag-name", e.invalidFirstCharacterOfTagName = "invalid-first-character-of-tag-name", e.unexpectedEqualsSignBeforeAttributeName = "unexpected-equals-sign-before-attribute-name", e.missingEndTagName = "missing-end-tag-name", e.unexpectedCharacterInAttributeName = "unexpected-character-in-attribute-name", e.unknownNamedCharacterReference = "unknown-named-character-reference", e.missingSemicolonAfterCharacterReference = "missing-semicolon-after-character-reference", e.unexpectedCharacterAfterDoctypeSystemIdentifier = "unexpected-character-after-doctype-system-identifier", e.unexpectedCharacterInUnquotedAttributeValue = "unexpected-character-in-unquoted-attribute-value", e.eofBeforeTagName = "eof-before-tag-name", e.eofInTag = "eof-in-tag", e.missingAttributeValue = "missing-attribute-value", e.missingWhitespaceBetweenAttributes = "missing-whitespace-between-attributes", e.missingWhitespaceAfterDoctypePublicKeyword = "missing-whitespace-after-doctype-public-keyword", e.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers = "missing-whitespace-between-doctype-public-and-system-identifiers", e.missingWhitespaceAfterDoctypeSystemKeyword = "missing-whitespace-after-doctype-system-keyword", e.missingQuoteBeforeDoctypePublicIdentifier = "missing-quote-before-doctype-public-identifier", e.missingQuoteBeforeDoctypeSystemIdentifier = "missing-quote-before-doctype-system-identifier", e.missingDoctypePublicIdentifier = "missing-doctype-public-identifier", e.missingDoctypeSystemIdentifier = "missing-doctype-system-identifier", e.abruptDoctypePublicIdentifier = "abrupt-doctype-public-identifier", e.abruptDoctypeSystemIdentifier = "abrupt-doctype-system-identifier", e.cdataInHtmlContent = "cdata-in-html-content", e.incorrectlyOpenedComment = "incorrectly-opened-comment", e.eofInScriptHtmlCommentLikeText = "eof-in-script-html-comment-like-text", e.eofInDoctype = "eof-in-doctype", e.nestedComment = "nested-comment", e.abruptClosingOfEmptyComment = "abrupt-closing-of-empty-comment", e.eofInComment = "eof-in-comment", e.incorrectlyClosedComment = "incorrectly-closed-comment", e.eofInCdata = "eof-in-cdata", e.absenceOfDigitsInNumericCharacterReference = "absence-of-digits-in-numeric-character-reference", e.nullCharacterReference = "null-character-reference", e.surrogateCharacterReference = "surrogate-character-reference", e.characterReferenceOutsideUnicodeRange = "character-reference-outside-unicode-range", e.controlCharacterReference = "control-character-reference", e.noncharacterCharacterReference = "noncharacter-character-reference", e.missingWhitespaceBeforeDoctypeName = "missing-whitespace-before-doctype-name", e.missingDoctypeName = "missing-doctype-name", e.invalidCharacterSequenceAfterDoctypeName = "invalid-character-sequence-after-doctype-name", e.duplicateAttribute = "duplicate-attribute", e.nonConformingDoctype = "non-conforming-doctype", e.missingDoctype = "missing-doctype", e.misplacedDoctype = "misplaced-doctype", e.endTagWithoutMatchingOpenElement = "end-tag-without-matching-open-element", e.closingOfElementWithOpenChildElements = "closing-of-element-with-open-child-elements", e.disallowedContentInNoscriptInHead = "disallowed-content-in-noscript-in-head", e.openElementsLeftAfterEof = "open-elements-left-after-eof", e.abandonedHeadElementChild = "abandoned-head-element-child", e.misplacedStartTagForHeadElement = "misplaced-start-tag-for-head-element", e.nestedNoscriptInHead = "nested-noscript-in-head", e.eofInElementThatCanContainOnlyText = "eof-in-element-that-can-contain-only-text";
})(W ||= {});
// node_modules/parse5/dist/tokenizer/preprocessor.js
var gu = 65536, _u = class {
	constructor(e) {
		this.handler = e, this.html = "", this.pos = -1, this.lastGapPos = -2, this.gapStack = [], this.skipNextNewLine = !1, this.lastChunkWritten = !1, this.endOfChunkHit = !1, this.bufferWaterline = gu, this.isEol = !1, this.lineStartPos = 0, this.droppedBufferSize = 0, this.line = 1, this.lastErrOffset = -1;
	}
	get col() {
		return this.pos - this.lineStartPos + Number(this.lastGapPos !== this.pos);
	}
	get offset() {
		return this.droppedBufferSize + this.pos;
	}
	getError(e, t) {
		let { line: n, col: r, offset: i } = this, a = r + t, o = i + t;
		return {
			code: e,
			startLine: n,
			endLine: n,
			startCol: a,
			endCol: a,
			startOffset: o,
			endOffset: o
		};
	}
	_err(e) {
		this.handler.onParseError && this.lastErrOffset !== this.offset && (this.lastErrOffset = this.offset, this.handler.onParseError(this.getError(e, 0)));
	}
	_addGap() {
		this.gapStack.push(this.lastGapPos), this.lastGapPos = this.pos;
	}
	_processSurrogate(e) {
		if (this.pos !== this.html.length - 1) {
			let t = this.html.charCodeAt(this.pos + 1);
			if (fu(t)) return this.pos++, this._addGap(), pu(e, t);
		} else if (!this.lastChunkWritten) return this.endOfChunkHit = !0, U.EOF;
		return this._err(W.surrogateInInputStream), e;
	}
	willDropParsedChunk() {
		return this.pos > this.bufferWaterline;
	}
	dropParsedChunk() {
		this.willDropParsedChunk() && (this.html = this.html.substring(this.pos), this.lineStartPos -= this.pos, this.droppedBufferSize += this.pos, this.pos = 0, this.lastGapPos = -2, this.gapStack.length = 0);
	}
	write(e, t) {
		this.html.length > 0 ? this.html += e : this.html = e, this.endOfChunkHit = !1, this.lastChunkWritten = t;
	}
	insertHtmlAtCurrentPos(e) {
		this.html = this.html.substring(0, this.pos + 1) + e + this.html.substring(this.pos + 1), this.endOfChunkHit = !1;
	}
	startsWith(e, t) {
		if (this.pos + e.length > this.html.length) return this.endOfChunkHit = !this.lastChunkWritten, !1;
		if (t) return this.html.startsWith(e, this.pos);
		for (let t = 0; t < e.length; t++) if ((this.html.charCodeAt(this.pos + t) | 32) !== e.charCodeAt(t)) return !1;
		return !0;
	}
	peek(e) {
		let t = this.pos + e;
		if (t >= this.html.length) return this.endOfChunkHit = !this.lastChunkWritten, U.EOF;
		let n = this.html.charCodeAt(t);
		return n === U.CARRIAGE_RETURN ? U.LINE_FEED : n;
	}
	advance() {
		if (this.pos++, this.isEol && (this.isEol = !1, this.line++, this.lineStartPos = this.pos), this.pos >= this.html.length) return this.endOfChunkHit = !this.lastChunkWritten, U.EOF;
		let e = this.html.charCodeAt(this.pos);
		return e === U.CARRIAGE_RETURN ? (this.isEol = !0, this.skipNextNewLine = !0, U.LINE_FEED) : e === U.LINE_FEED && (this.isEol = !0, this.skipNextNewLine) ? (this.line--, this.skipNextNewLine = !1, this._addGap(), this.advance()) : (this.skipNextNewLine = !1, du(e) && (e = this._processSurrogate(e)), this.handler.onParseError === null || e > 31 && e < 127 || e === U.LINE_FEED || e === U.CARRIAGE_RETURN || e > 159 && e < 64976 || this._checkForProblematicCharacters(e), e);
	}
	_checkForProblematicCharacters(e) {
		mu(e) ? this._err(W.controlCharacterInInputStream) : hu(e) && this._err(W.noncharacterInInputStream);
	}
	retreat(e) {
		for (this.pos -= e; this.pos < this.lastGapPos;) this.lastGapPos = this.gapStack.pop(), this.pos--;
		this.isEol = !1;
	}
}, G;
(function(e) {
	e[e.CHARACTER = 0] = "CHARACTER", e[e.NULL_CHARACTER = 1] = "NULL_CHARACTER", e[e.WHITESPACE_CHARACTER = 2] = "WHITESPACE_CHARACTER", e[e.START_TAG = 3] = "START_TAG", e[e.END_TAG = 4] = "END_TAG", e[e.COMMENT = 5] = "COMMENT", e[e.DOCTYPE = 6] = "DOCTYPE", e[e.EOF = 7] = "EOF", e[e.HIBERNATION = 8] = "HIBERNATION";
})(G ||= {});
function vu(e, t) {
	for (let n = e.attrs.length - 1; n >= 0; n--) if (e.attrs[n].name === t) return e.attrs[n].value;
	return null;
}
// node_modules/entities/dist/decode-codepoint.js
var yu = [
	8364,
	0,
	8218,
	402,
	8222,
	8230,
	8224,
	8225,
	710,
	8240,
	352,
	8249,
	338,
	0,
	381,
	0,
	0,
	8216,
	8217,
	8220,
	8221,
	8226,
	8211,
	8212,
	732,
	8482,
	353,
	8250,
	339,
	0,
	382,
	376
];
function bu(e) {
	return e === 0 || e >= 55296 && e <= 57343 || e > 1114111;
}
function xu(e) {
	return bu(e) ? 65533 : e >= 128 && e <= 159 && yu[e - 128] || e;
}
function Su(e) {
	return bu(e) ? 65533 : e;
}
// node_modules/entities/dist/internal/decode-shared.js
var Cu = /* #__PURE__ */ (() => {
	let e = /* @__PURE__ */ new Uint8Array(127), t = 0;
	for (let n = 33; n <= 126; n++) n !== 34 && n !== 36 && n !== 92 && (e[n] = t++);
	return e;
})();
function wu(e, t, n, r, i, a) {
	let o = e.length, s = a * 90, c = 0, l = () => {
		let t = Cu[e.charCodeAt(c++)];
		return t < a ? t : t * 91 - s + Cu[e.charCodeAt(c++)];
	}, u = n - r, d = n + i, f = new Int32Array(d);
	f.fill(-1, r, a), f.fill(-1, a + u, d);
	let p = new Int32Array(d), m = new Int32Array(d);
	function h(t, n) {
		let r = 0, i = n, a = n + t;
		for (; i < a;) {
			let t = Cu[e.charCodeAt(c++)];
			if (t < 89) r += t, f[i++] = r;
			else if (t === 89) {
				let t = Cu[e.charCodeAt(c++)] + 2;
				for (; t--;) f[i++] = ++r;
			} else {
				let t = Cu[e.charCodeAt(c++)];
				r += 89 + (t < 90 ? t * 91 + Cu[e.charCodeAt(c++)] : Cu[e.charCodeAt(c++)] * 8281 + Cu[e.charCodeAt(c++)] * 91 + Cu[e.charCodeAt(c++)]), f[i++] = r;
			}
		}
	}
	h(r, 0), h(u, a);
	let g = new Int32Array(i * 2), _ = 0, v = 0;
	function y(e, t) {
		for (let n = 0; n < e; n++) {
			let e = t + n, r = l(), i = l();
			g[v * 2] = r, g[v * 2 + 1] = i, v += 1, p[e] = _;
			let a = (f[r] < 0 ? m[r] : 1) + (f[i] < 0 ? m[i] : 1);
			m[e] = a, _ += a;
		}
	}
	y(i - a + r, a + u), y(a - r, r);
	let b = new Uint16Array(_), x = 0;
	for (let e = 0; e < v; e++) for (let t = 0; t < 2; t++) {
		let n = g[e * 2 + t], r = f[n];
		if (r < 0) {
			let e = p[n], t = e + m[n];
			for (; e < t;) b[x++] = b[e++];
		} else b[x++] = r;
	}
	let S = new Uint16Array(t), C = 0;
	for (; c < o;) {
		let t = Cu[e.charCodeAt(c++)];
		t >= a && (t = t * 91 - s + Cu[e.charCodeAt(c++)]);
		let n = f[t];
		if (n < 0) {
			let e = p[t], n = e + m[t];
			for (; e < n;) S[C++] = b[e++];
		} else S[C++] = n;
	}
	return S;
}
// node_modules/entities/dist/generated/decode-data-html.js
var Tu = /* #__PURE__ */ wu("!}.&u%}'&}*'~!6*)%&,~!J~!J~%L~y<~!R,~~%Lu~~#GD~~#|)1#%}^%}2%+#.##%##%}&%##%'#%##&%#%#'%#&#%#&#'#%%#&#%##%#)%''%&%#%#'%#%%#%%}%%%#%#&(23#%%#&-%0%('1#(##%#'##+%'*.:1}#%#6-+(%'%%#%%%}#L'2351&('%}&/N'(0(/*-%(%%}#'+&T%7.2}#&%&#%#36/5##%&%%#&#%%#))2%%##%&&'0~!#*+&'%1~!%).'3q?&%'1~!.##%6(~!+%%%(Gw'rT~!E#<nA%#jZ~!H%(~!42##~!*31&~!G%U~#)5~#`3~!J~!Z~%]~%Y~%C~!q~!u~#kz~%#~!6'~!D~!U~!?~#T~!c%~!G#'~%7|~!G~!J~!G&~#pb~(Df}#%}*&}#%##%##%##&#-}&'#'&%#.++}%mI,#,@&(}*%}*'%&##&#%##%}&0}#.},U},%}+%}&%}#%##&}B%(}(%}+%)})%##%#&}&%##%&}<%}>%#%&}*%}(%}9%}/%})%}*%}*%}?&}&%}3%}&*#%})%#%#)}#&#-#+*%E%%'%'#%}#*V##&##I}#&&##%&%#&&Qf%%))w/0+&%#(#.%-''''++++7}>%4'',##1,#%#&%##&#'##&#*#9)%&%}#*}%,#+P(%A&%#'&##wSD',9E00#y#@}(+}&%&>~!#~!X}#*}(&&}(&}(,%}%&#+&}#&}I%#%}%)#(},'%#*}4%%#%}(''}#/##(##),%-##%%)#&}(.}&%#&}%%}*&#%},&&}&%}#%*'#%})%}D&}&%}-&}6&#&}-,%}#%})-(~+`~,=?~I9'9%~!,#%})%})%}@%}?%}(~!?~#<~#pP~#BG~#=1#%K+~#?#~%;)~#A~#mF1~#A'~'X%'~#lR~#N~'N~#r~#m#-~#i'?%#'%~#B%##%,%#~#_%#0%~#]732~,w~2+#:&#%&'0%&>%}#>##F+)#%&&#(+_}4&}-%}(&}@&}O7Fdf0@+/v4}&WU##&/0#&'('B#%}.%}'+#%}#%%&#&%#%##+#&#)#6#'#.},%}c%},%#%##%&#&%#&~#>'*-.%##%##%}#%%}%'~#)D1}#%*&~#_%%'(~#S2%'.}#~#=##*'*-%}&'%'##&&~'E%.#&~#M4}%%##&'%#~#O1##%&#'+~#<B%##%%'%+~#;#@%}#&%#&&%#(~#H1}'%'##&&~#?A}&'~#D#%32}'&&&&~#[}'(#%}'~#;C})&}%%#%~#=&%,3}%'(#%%~#^'#&&)#%'~#Y%-~#d-%'~#^%%&#&&&}#~#b~2t*&'~&(~&@~0%~e~3}%*''0})&}+~!9##-}#%-hD*)1fC#%/&/fB#40~!+#)*4~!+~!K'&:~!/*7~!.#~!H~!L':~%x&~!H#~!*~%1~!I#~!+A~#p'~!F~~#-#~,,(~.Z~!V~%;'B'mq-W~!N~%I%#&&#&}#%},%%}'%}+X#%}#&}(%}'%}<%}#%}%%'}'%}:~![)9@~%>~#UA%-%##&~!C%~!-.9:~!1~!-^2/:a~!y,D*J#-5)/4~%23,~#G~!L1~!0X3`~!2+~!!0-~&E~!W~!o,>Y&]~%cZx_&~#O*9#A#'#+I'%#)~!0B*-5A+-((F&*M#)(-7-5+'-3a5Vi~!Y~!?+[)%3),ERHm~!+:D,VG.+)?fB%%*(%)'(#&80%1'8`K8?`+'Z#&O&'H5#*9)A%%5&3))0%39+.*7#()&&*=4@**L)<'_&*+..;(#*+)./&0#3)%')-8(4ixD(&.}%,('aI:,)%,k2231T)I'#/-W7,/'Q#.'Y24+h')37</31&83##&0#),H(?'&?/1##%#&&#%''-%&&&#(&''&#.-'%#%%(,')*'&#&#'##%(%(#%('#&##%%%%('%#%#%%#%#&%##h>w+v<ayvyvcg.uuhKr}g/v|g>u9i[~>g5uI~=RvdwEg;v/g;uk!!TTSx]@RT!U!#!@VBRUU!'UTe-d0c`e&gSdicedFcrdTaqb.kYcAohdYd@a3e+d}dMdtd.aJ#bqcK`dle/e.e'dwdPdodddjbEb}ogd^ofdpduc6j?l%d{drdqc)d7bacOdQ%T#Y)X.sR[yH>6Vyv3[xwLu>vo'!*.[yBacahoj>6Rew3[xqdZa#!a&#^(X-[yG>6Vyu3[xvg3sEr|g.u/Ri9db0T#^(Xa)!-[y;>6Vylg4wKs{JwNZt3@3r=c4Z([xlg;wKt!cpq's@v7A'*a(a+!-a#[y<3Dt?3Dt'>6Vym3[xmg9rxsNJwLZt4~?r?db1T#`-!(Xa,!0[yS>6Vz%NuQs.g4wKtnJwNZtS@3r>c4Z([y%g;wKtrdga8!a(!#&T*Y-Xa#!a0<or[yc3Dtq>6Vz43[y3JwNZtf@3s!Ju}!%Dti:pm3c_%X#tjB5pkd6q!r]u?voC'*-a.a2!0a&a+[yI3DtI3Ds~3DtH>6Vyw3[xx;:s#~<5pKJwNZtE@3r~d`a)!a2T#a.(!+U.X1[yT3Dt`3Dtv>6Vz&3[y&g9rxwzcxstPu.<rAJwLZtT~?r@dZa%!a.&^*Za(/Reu[ya>6Vz23[y1g3sEr}wkg{NuQRg{ci(U#5@b`~,cg#U(2WnH5wugcRh7dX#T(Y,a'Ta!!a,[yZ<]mj>6Vz,3[y+Pv#5ReZKu+=,%!H}7ABwkaS?Rh:BcW(X#<]mrj:ubv/ARekdg%!(!a.*Ta(Y.X1!#sP>Rl*Dt6[y>>6Vyo3Wf*jOvuumvuRgRJuq*!:9<B@bX~3jVv&v@s@5Re[d/rQt{uAvo&a&a*)a2!,0Wf!3Dt0=Bs'>6Re}3[xy~<5s%JwJZt1~Gs)c;&!#2sJkNuXvzq7rxu,Re8dka4!a8(aEZ+a@Y.X1Xa)[yd=Bs(3DtP>6Vz53[y4cX#X&Re:avRe9~<5s&JwJZtQ~Gs*i^rzvdRg+Jv{%!2sbB@bX}kdga,!Za?&^*T1/!a'Dt+[y6>6Vyf3Wf%g/u;s4hGu6?Rh-JvZ,!c%#&RoX54Rivj7uyvf8RgTKvZB%*!2sGh<vu5Rgq<=C::9bb~#dZ#T&Ta6Y.X*Dt>[y93Wf)coZ(T,6VyifluvRgC@95@B@bX~/hFu34cC#T,k/unq8w8Q5RkUklwQuzunq8w8Q5Rk8d/rJu?v8w9)-&!a0a;a&aIWejg3sEr/h1s<DtDJvyZqY5aws3Jvy!&Wei~Hr1:au5@Bag>23E~5c:Z&bX};kKv?w&unuVu5Rjc;>bs)#~@:Rh.=ay<a]C;b`}Vd6s/t{uAvoaxa()!a,a7%-a#a2Dt,[yF2Wo[>6Vyt3[xuNuPRi&NuPwpi#RoWh?vf8Ri%Jv]!%Ri:KvxD!.'2WeAjZu`q9rxu,Re7woeAg-unLq(qA_/*2Wg_g3u5q^9:4E}/jTrxrzv=Wkkd~0UX#^^Xa-a1a5T&a=U1a'*aEa]!a*aPaA-adok[y54Rn>;:p3~Dp5g9rpsFNvZqjg3uJp4~<5p0Pw;5qlJwNZt*@3p1Pw:5p/Ou!5p2JvG'!6Vye=<qnJvh_[xhg3v,Rh3kOwOw-sDuev/Re^dha[a%!%!a+#Ta7)-5TaCaO!aka!a)sf[yb2>Rl!9ARiq5E}Qg=ucRkBE|oJrJ_@Wk~@Wk{JrJ_@Wk|@WkyJrJ_@Wk}@WkzJvO_[y2g-vMRmiKuYC!)&>Ri;>Ri<@3RkNc](X#@9Rk=g5vuRmhKvDB!+'=]meg3u4Rmgd)#Y'Vz3CARmfd`a+!%T'!+#Ta1Ta6TaM-sTDt9[yA9sYd'%Y#s[[xpj:ueunaXRgEjRq,v-vuqdd2'`#6Rev<32@5>:2<E}5xIo9a*X#Y(;5RePJvD_g>vyRgNj8w)v8<wggs:RgXiZt|vjx,hSq3ah!-(~@:Ro/Ou!5RhWj^v(pyw8unRhUdx-UY#^Ua.a3a70!)%UX1TaDa)'omRiRRhE[y:3Dsz=Br,>6Vyj3[xkg6ruwjcqsrPw;5r*Ku]D'Zt-@3r(~?r.i[vwv]dU1a--U#`a4(g/vsRhPOu!5RhLj:rmu9Wo!~@:wdh@g/vsRiTjXuvvNr}:RhBj^v(pyw8unRn]dz1UYa'a+^Y(!aETZalaRY.Ta?a4[yDJw1!#qLsW>6Vyrfzq-pLflpwRe|Js>%!Dt@3Dt&Jvy_[xs~HrnjMuwpsw'RecKu+D#'!t<~Grl~?rjg5u-x,gwp{ah!-(~@:Rg~Ou!5Rh'jXuvvNr}:Rh#cW#X/c;&!#2sLi[v7u7RgpJv)(!iLrxu,Re6j7v@s@5Se[e7d`aW!Za(a`T.a#!a3!&aDa-!9)Dt_=6s+3[x~~DR|h~DS6avhGun5RkZj3w)v-]mkKunB!&*]kb97R|i<ARk<c:Z(6Vy}Juh'!wziMRoS:F|vkLuauJv5vtvQRh1d='T+Y#VyO~DR|jcF#T'7R|g97R|kJv3'!ay<Rj,Jvh&!:ReXcsa6*a+#a#_aIRf9aLRf?c,Z&Rf5Rf7c.Z&Rf;Rf>cQ#%T'p-Rf8Rf=ct#%'(*!,p,Rf4p+Rf6Rf:Rf<d~'Ua%U*^UYa(!a,-!#a4YaTalaEX0a8a<Weo3Dt/3Dsx=Br93Wen~Dr;~<5p<JwNZt2@3p=Pw:5p;Ou!5r3c7&!#:p>3Ds}KvGB)_6Vyk2sM=<r7x'eovA(!hFu1ARf}cV#X&@r5j6rvwQa^Rf3c=Za'wkghJv__g;unRggA53B9=b^}%j6uduo5Jq;!(hIv%2Re`Ou4ARe_e%a#^^^Xa&!a*a2!&a6YaP!*ad!#a:aE/5Rn?[y@>6Vyp;:pE~DrY~<5pBJwNZt8@3pCh=rt3rWPw:5pAJup_[xoNuPpF9c!#'45pD5ARn)d8#X'X*3@rU72s]h>v<<sSjJpqvewOJq/(!hNw'5ReBk0s2u3w/w'5ReE5@Jq.!a+JQ!&WeU23d(#Y&RjG5]jBk!u7w&u0udARjEe#+^^^Ub#!a2/a`Z(agT1!a-a;|@TaG!aS[yV=Re~fow'RguNuPRe?bz#'>RoUWeL>:Cbb|?JwPZtVg6ruRmzJvD'!6Vz(g/vmRh~Jvy_[y(g9voRgyx*cy(#2>Ri2B9b]~9kIw9u7rluJu3Rg]dI#a%UY'@=p%CAx.gQZ&RhwwygtRm{x5g_Z'+ABqR9Woa=Bp&dV#^*Xa'!&@o{g4v]Rk;Jv{!%Rk[wkkiA5RkiwwfUB=x,fUuqC&*!>RfTg8v0RfV~ARfSd;rJsAuAv9wR'ae+/aO!a@aza/a#[yQ@Wg!2Wemg3sEr0JvB_g>uvReWg2v+Re=KupB_+[y!2AbY~-~Hr2AJwD!(h<~El>h<~El?Kun@+_:9b`}Kg-v/Ri3g;vtwyk_9]k_d=&T#*U.6qh@Ab`|K9:H|CJv[!&3Dtex'fDwC%!Rf[9WlMd[(^X,!a%Z06Vz!@WgBg=v~Rgvg,QRe@awd,#Y+jTv|Q~EfWj]uNr|~FRfXdy#Y&^Ua%!aO.!(a)Ua;=!a@aKap!a-,a!Ta]a[rSa]p?[y82sK=Bq~;:p:~<5p8Pw:5p7d'#Y'Wf(;RnRi[u4w&RgJJvG'!6Vyh=<r#ijuuv/sIKuYD'ZtG@3p9~Gr&d2#`(g<vtRgFj`u5w&rqpxRf2CJuY!+:wfnTOu!5Rg}jNs1ucv&RfwJvA!&3@q|BDcC#T,k/unq8w8Q5RkTklwQuzunq8w8Q5Rk9dga#!a'!a=#a0!:+Tb*b@aO.a4!aba8aFJv^}?!VyR~Dr<g;u%Rn.~<5p[x'e`wNZtR@3p]Pw:5pZhNvjBp.woe_g5u-r4JwF!%DtO3:ooc7&!#:p^3DtpLuGw(!+%)Dtk6Vz#2sd=<r8d'#Y([y#<x3gJt`w@!)%}MRiowzikRij=]ilxAf3,U(#B2Rf#g0v-Rm[ck{`U#]giKv3>)!&6Ri154s,KuGB_%@r68r:dJ|t`#X(9<E|u2@H|rx3gJu?w'!+'1Nu7Reg4=H~+9<wxgY95Rm]xLggZ-`(X}U2:Ri4h<uOawRmsJv__5@bb{jbV~3dka#a'a]!,#a+U=a>b6a3b%!/aKa/)!arwve^VyJ;:pR~DpTg3uJpS~<5pOPw;5qmPw:5pNOu!5pQJvG'!6Vyx=<qoJvA!{~Jup!%@qk7Rn/KvyD!}''[xz;>wkh'?Rh,x8gyt`w5D!&),(SgyccRgztJ@3pPB5p#d'(Y#<]mmifubw&RgoJvE&!82s^JvF&!8Rf,ADb]~;x=h'rNu]vK!,%'*0RnORh)4Rh*AqQg-vaRnNg;wHwkh'ba~4cE#Ta*x3gctyw@'!+%RnFRnD<4Rn@hFvK5RnCxWg[#`&a0Ua()`1Rm75Rg[c]%X#qi8Rg^NvdRj>BwzgZauwji7Rm6A4wgg]d1#&(*,.0a#Rm;Rm<Rm=Rm>Rm?Rm@RmARmBe%#^^^Xaea?aC/b+(,!a+a#!a/!>a&Ta<aKbD!2wphBRnk[yPw}hE|.=Br-3Dtm>6Vy~g6urRf.x,hPrNav!%'RnqRo%Ro#Nu;q[Pw;5r+JwNZtM@3r)d'#Y'Weh;xChL#`&RnmRnoKu}>%(!Rne~Bs-;2wjcussJv+'!aYSO}6@B<5?ba~8LrNvj!.%*ROwungw~ng~:9;Ri^>wtnig;wHRnixDh@|(UZ.x1h@|)!#:2<H|*xHn]#-UX'3Ro)z=iT}6ARns=Bwsn_wpnaRncw]aR(#UXa&Ua*a/=]iPd'#Y&Ro'WnXf{QRm2hNvj]nZd`'T~&1`{|`#9b]{}c:'!#Wl{>@=be}]?cl{{U#:5Abb}Jds#^YaF!a*b4a#a3aPa>&Tb!bH!*a_!Eau?/a&RjY<]gj>6Vz*;:pe~DrZg,QRj1JwNZtX@wihspcJvZ&!VyX9WmOJu|!|N2WmHJvh&!]ht~Bpbcn&T(!#RmQ<s7Nu;padH#X'`+WmJ@>RmKCARhnKup=!)&Wf+:RhqNuPpf9c!#'45pd5AwghpARn(Ls@w!%,)!RmP@Wfe<E|IJva!&WmNg8vsRmLd`*.`#Y'Xa!axRn*]hrA8Rhug5s@rXg8u!RmMd8#X'X*3@rV72smdI*#UY&RmICARho~GsgxVgd)Ta'U-Y&Xa!T#RnEWnA@Wffg1uDRi0hFvK5RnBxGnG&#`%owp)@wsf+bX}Ze-*1!a*^^^Ua|!#a.aq&Ya2!a>.a6!a:aO`aJDtL[y`@Wg#>6Vz12@wzoYRoZNuPRi!NuPRhzg=ucRi,@=b`{Yg=ucRi-ACJvB!&Sh[ebSh]ebi`wUuFRm4Jw2_[y0JvB!.<Ju(!&SoG}6Shd}6<Ju(!&SoH}6She}6Kur@._g5vHRieJvx!{L2G{Kx6gd'T#?Rh82Wi5cZ#X(g1w)Rm5dW-Y(Ta#!a)!#aYa=wnfE=su2>>bU{0j9udv:<svj8uQv-7RgHdE%#^'sq9sp=>Bb_{TJv`!&g/r|snj6v(us5d,#Y(56H}[978H}]Jw5!&g1rushJvB!+j;v{u5?zDhd}6}bj;v{u5?zDhe}6}ce*#`(^^^a[aea!=!a6a*aoXb1a.!aAbL!b>,b'aL!aV@Wf|2Wlg3[y/JwNZt^@3piPw:5pgJunZou3@rsJva&!Vy_g<v~Rm#JvG'!6Vz0=<r{Ju{%!:pj@WfsiXuJu3Rm:JvZ&!WfA~Bph@c4Z&Dtwax5rubx(#:awRk1@d,#Y&RfjRfid1#,Y(@Wfp2Wlrg5s@ryKu[@!,'=]ig9wlk?Rk>g5u-rqJvy'!@9RkQcH(T#=>Ri~@<wkj(Wj(KuZB*!&<7rw@9RkRcH(T#=>Ri}@<wkj)Wj)dg(Ta2Xa9X#`-!a*CARhg@@=I}d9x;c~#X%so=<sj>2@@=aybb}XjWv0Q~EfEj3vLv;<d,#Y(56H}`978H}_dgaPaFa'a/!#a3Y0a_a;a|!1(a7-[yE3[xt;:pJNvZrrg3uJrvJwNZt=@3pIh=rt3rxPw:5pGOu!5rpJvG'!6Vys=<rz@c4Z&Dt(ax5rtJvZ!&~BpH@wsfNg-vaRlNci*U#=<wei<F}a5@Jq.!a*JQ!%@qZ23d(#Y&RjH5]jCk!u7w&u0udARjFd/prq=tyvpaEa(a:.!a1aZ(@@=I}:9wpd%=<sX55w_h}@@=I{t=ay<aU@@=I}T=ay<2@@=I})?C9:9au@9Cb]}DP~=x-fAZ(2Wl1=ay<aU@@=I}>5@d##Y+jTv|vV~EfFj]uNpn~FRfGdgaK!Z2&!a8a-Tb({E!acTbM*!a(DtY[yYd'%Y#sl[y*hHvh>Re5x2c{Z}.j4uCvcawRiMd+#X+_x&d!},<5RkX;2Hzw@x,gavfB-!{CcF&T#Roe;RodwWbBg5urRgaKvHC*_6Vz+<4opieuew&Rmq@d]&Y)X,T#X0Rh}<BqP=4qS9:ReMg/ujReNJw0!/<Jui%!bd{kawwnemRelAxUa?a3#*.&UX(Ya+a/RhvRnQ<o}9Wmtd-#Y&RgSRmw9;Rmxay=Rmyg-vaRmuxEhSrNu,v-voC!%(aR.a(a7+1Ro1>Ro5CE{A9b]{@;5x#eO{:g;urRi+KrNA!%(Ro3>Ro79;Ri_Ku@>{;&!x%gX|{KunA_+g5QRj/g3u5Rj#g>uERj%wio/xRhS&!,!#^1U}wba{8>>@=be}qC@:D5ba{7Ku+A&!}x?ba}t>>@=be}se(aA^^^Uat!b0#{pa+awUazbGa#aLb9bgaWac'a5TbS=Br!d1#`%scp_Jvl!#rT>Re0JvX&!VyN=H{Fcm#U&:pY=ReaJv2&!]h0=]nUJvG'!6Vy|=<r%JrM_=]h2@Wlud'#)U'Wf'b]{i=]h/Jvh!&~BpWg=v]RnMx+ny#'Nu;pVwjnu=]nwxJnx,T#`&Reqwjnt=]nvieu9vrRjLLuYwP(#+!th@wih5pX~Gr'g5v/Rh4KunA'!-CARnP@wwiN:Rm_9x'cvw>!|l=<saKvAA!0&3@q}>w^e1bp#&Re2Re3BDx7gH#T|f5H|eKuZ>!%(:qNAH{]Jv6!+3B2B9=b^{X<5<B92:E{ZLvhwA(a;a%!igQuyRmad+#Y}m@3Rh5d8#X'X*:AqUAHzmaxwbh<aXRnVcF}RT#Nw&cj#U(BWnug/vsRntdka)(a3+.Zb7aYYan1!bVa@Xa}[y^@b[{G=H{+hFu73Rj&Pv#5ReQcK%T#sig1v{Rj'Ku+D#'!t]~Grm~?rkKuMB!01d5#`'Vy.ta3Dtu~Hroc8#'{^45s85AwZbP&!#Rn!wghxWn#KvEA!)&2RlA2RlBx:h|#(T,=]j09Wobz>x]z/@awRoTd+#Y(az]hFhCrm4d,#Y+jTv|Q~EfMj]uNr|~FRfOdCa!Xa9_X#@<plJvf!%b`{(9;Rgwc;.!#2x7cw#T|UDb]|T5Ju={(!=@E{&Jv)&!Ab`{'awJvf!~*>>@=be{#KuY>!+&4Ezyi[ugv&RjIdea+T)#UXa&T-T&a!Rh9auRmW=]kLg5vuRn+g3u4Rn-Ow6ARn,hHus5xNk?#UX(U~)/g8v0RkD~AwkkF?Ri.OuNBwkkA?Ri/d|a2`a*^UYa.!aBTZaTa'Xa;!(!2!-a#b2[yC>6Vyq3[xr2Wi?g1rusVh%s?DtF~<5rbJs;%!DtBfswKtCj[uvuSsEu3RgVx3o:u+wN'*Zt;@3rd~Grh~?rfg8w)Lq)qE&-a%!>bI|`jWv0vV~EfCjTv|vV~Ef@j]uNpn~FRfBcK#T']gWNu7x,k7q4ai(0!hHv8<RhmkMu9vrsBuev/RhlCJvB!,g<v{wchh~@:Rhji[vrv{wchi~@:RhkdS&a5UY#Ta!RgPwwiI5BwciI~@:Rh`x'iJvj'!5]iJPu8Bwch]~@:Rhach)U#h3rp]gLh@t|Ax,hTq3ah!-(~@:Ro0Ou!5RhXj^v(pyw8unRhVd|)`,^UYas!a?/a2Z'a^Ta{Tb7Ta(a#!a,Wf&9sZ3DtAadamov=Bqt3[xig8vsRm~>waiL2b`{QJv*_Ouv2qgj<v]v2BqfdR'X*X#Y-@3qr~Gqv~?p6hHv-]glPup5Lq+q?_%*b_{qF{n9b^{rOu4ARhpKvCD!+&~Bqp:5Dbb}nwoiKl&unuTuBv]v+ueunaXRf0=Jvh!0nKufu8v1w&w7q%w&uHrz:Rgnj5w,uxDJq/(!hNw'5ReCk0s2u3w/w'5ReFd>Za&!*UaA=<wkgsRnSJv^!%Refifw3vyRgOKu_B'!,<]gkiiu:w&Rh<=C@a^<B57@2F{[<B5@aW:=3away9A5aW=<B=C@a^<B57@2F{Ie-#`(^^^bCara.b8aza6!/bZ,!adTbnTbOb+aFaS!aAT9@Wf~2Wli3Dtl2@d,#Y&RfnRfmJwJZtN~GqyJva&!VyMg<v~Rm%iXuJu3Rm9Jv[_=]ih9wlkDRkCd1#`(@Wg>2Wls3cH#T(@<Rj*=>Ri|b~'#23s9h<~El.d'#Y&Dtxi^rzvdRl#d*#U%(o|B2s`hJwSaxRmDKv4B&!1:Rmdd5#`'Vx}to~Hq{x'f1v3(!BA5ba|bJv_&!Wfug1v]ReIdO+U/Y#&G}-8wze=Rh{g1v]ReHg/uQRf/by#)ibQwERl/cH#T(@<Rj+=>Ri{cNu+vlax-!(#a0qa9<Rii2;;bU{H;x<i=&X#Rk`<4wwi=C9H~8xAI(Y#<azRi@45wXI<B9;5bb~7dL(X#Xa(+!aL6Vy{g5QqOau:5au2@ay547EzbxOcU(UX-T#Ta#:Cbb|A?wjh/b_|SOw6ARgtihr}u7Rhy<d1#T)X1@@=I|~=ay<2@@=aybb}Sj3vLv;<d,#Y(56H}A978H}@dGpvs@uAu`vcw9*!aFa+ai%(b!aXa8.a?a[ozWey=sU2@G}Nch&U#Rf_WexKu+D#'!t:~Gr`~?r^j]uNr|~FRg*j^psurwJt|RmcKv)@&!)7Rkv~Br[@wxfO:Rl3co#U'6Rezj_q#vIuavjRltwzeyh@vr5JqD0!>aY?C9:9au@9Cb]}9cl#U*5;5<H||jbuus1ucv&Rfvg1v~d/pppzqFr^a--a~!aMat1(hFv;Wiz@@=Izoj5uuv-7Rix~Cw`fk2WlVcZ#X,k)u3vWs@u2]ktg;wEx'fBq(_2Wg/jTv|vV~EfoJv]!15x'hzqG!(P~EfU~CRl_j6v(us5x4i-#T(2WmZ?C2F|d>Kq<aj1!*jTqIsBv=Wl`~Cw`fi2WlWj`v0u*~>RlR=c>Z,k#u3vWs@u2]kr<c1Z+jTqIsBv=Wla~Cw`fm2WlXdmb3!a{(arZa`bkTa%TbQTa-a9+c'!aM!/[yL=Bqug.w'RifhFvyDRj.g>vgwyk^9]k^Jv3_@WfbAARkhJw2_[x|JvB_wkoIRoKwkoJRoLd'(Y#<]gm=<9<H|yd'%_X#skDtb3awwqkgNulRkgdB#^',9:p'hJwSaxRmEBwVb8@4=H|qLu+w50&!)@3qs~?pU>Awwn;;Rn=c:Z'ARn<=<qwKvC@!/&~BqqJv6!&]eVb^z^xRge'/a%+^`#Sge}6<4Rn3=]n0Pw2>Rn8Jw0!&>Rn:>Rn6cY#a7+!a&=<wkaNw~h3z_c5Z{=wjh#=]nLKv^D!&)Vyz=bW|swYb<WetcG#T(2wxa@qVx@gD#Y&b^|V5JwG&!5bb|pg/w&RgD@x=kHs=uAvn!a%%/'+RmSRh694Ro`g-vaRmRhHv-]mlxCcS#`&ba~.5cD#Ta)P~=d,#Y(56H{>978H{Dd_#{2^Y%_+qbbb{6g3sERhsbU{?dfa.,`a(Xa<!aiX#(55RiG54RiHcI#T'WiU3RiVNvdwtfcRlKNvdd,#Y&RlHRlExQgf.1*^T'X#Sgf}6Wn4=]hfPrk>Rn7Jw0!&>Rn5>Rn9Lunw?&a2!,5<oq@@wqfdRlJj5Q~=d,#Y(~ARfcOuN]fdDKw;ay(}i!547E}j?cI#T(@5bV}iCbV}hdv(^^Tb?a40,b##Tbo!a*bR!a<b|a/!aKai!aU[yK=]o^g:v>ReGJwPZtK<7Rh+h<~El,Pv#5ReR@awwxjCg,ulRjDJv6&!]j!z?aQeeg>w=Sh<eeJw;!&axEzOg,Qosc!#*:wkeJ]eJ>x'h-u(!%Ro.w~h.zPdNZ(X,Ya![x{;9ReY;wkgxRiF:x?ap#Y&RmUg<s2Rkod]+UY0TZ'!a&A9sw<=bczLNvuw{gqzNhJwSaxRmCKuLay!#&s_Rf-55b^{uJvZa!!c%#(55Ri654wmiu5RiuawLu,vp!+}^%b_}Y9;wkgxba}o>A9:=b^}zKuh=a''!3awRk3c*'!#aHRk6c+Z&Rk5Rk4Jv)&!awRjSawd9*`#0?C2@EzMj8u<uJ5RmbjQrquJu3x,k>uq@_+=ayb^|W~ARkEOuN]k@7dhzV^X/X&a-#zRzSb`zXcJzTT#2WkVKvDBzW!%FzY9;5bbzWjQrquJu3Jw3%!b`zU=ayb^zQd:#X(T-a!6Vyywxh}=b]{Jg=u1RiAdGp~qHtzv!w(wA+a+a;<!aJaYai'anasb(=azRmV:Cbb{MLq2vb!%')RjuRjrRjtRjqx3jnqCw3!%')Rk(Rk+Rk&Rk)Lq2vb!%')Rj{RjxRjzRjwLq2vb!%')RjsRjpRjfRjex3jcqCw3!%')Rk'Rk*RjkRjl9<CbbzfOu4ARhxLq2vb!%')RjyRjvRjhRjgx=joq*uKvb!%')+-Rk.Rk%Rj~Rk-Rk#Rj}x=jdq*uKvb!%')+-Rk,Rk!Rj|RjmRjjRjidAq&qKs@uAv8Aa.'*-a@a&0!aM@a5[y73Dsy3Ds|3Dt):wxgI2sHJwJZt.~Gqxwsf0ikrzt}Rl0Jvy_[xj~HqzKv_A|D!&WfP8axRoVcf,U#k(v]v+ueunaXRf1Ju}'!g8u#Ri=jQw!sCunLprq>!,')~<5qeGzq9F{W=c##%s5au:5aU3CBE|;d4#X(D!a&6Vygx(b;#(=]ed?C2F{N<capoq2r[a&!aPa9,'Pw;5s:@@=I|,55w_h|@@=IzcP~=x'fCqB_2Wl2>aU@@=I|1OuNBc1Z+jTqIsBv=Wlc~Cw`fl2WlZ~AcTa%!Z+jTqIsBv=Wlb~Cw`fh2WlYk+uNqJsBv=WlSg,u3dca3#UXaMYa)TaB-=cM|7T#<bI}l5@B932:aV2G{BOuNBJq:|M!5Ezt=<B=C@a^<B57@2F{v>cB{/T#=ay<bI{3Jv6!a.6BKq0ah&+!5E}HP~Ef{978BaU@@=Iza<7d#.Y#978BaU@@=IzH~AJq0!(@@=IzG978BaU@@=IzFe,aU*Y&^^^bvJb,b:bFad!a,c2Ta>aL.bo6!a#CbTa'T#Re{2Wlh2@G{yg6t~Ro_NvdRfticuRQRllJv3&!x&c|zs@Jw3!%RflwpfkRlpKuL;%(!Re<@G|C2GzdhIvuBwgjAg-u0RjAKQB%!(GzZ@G|5NuuRl7d='T+Y#Vy[g<v~Rm!==G|>JvA!)@wma=]m1ifuaw&RmnLs@vT'!|/+[y,g:v>ReTJw1!#qX=x!eC{bLu+wT&)ZtZauq_~Graci&U#F|89:r_Lupvq!.)&2RlG8RfaC=x!eF{_h?rpWlmd&'!#X|&]k::xJey#`'T|+<E|&2@H|%dE#(^,g;u.RiEg6vjRiC9xCkA{O|zY#g=ucRmXKs0@!&*@G|m@awRknJuh!,3d(}gY}eJvj!%Rm):Jw3!%Rm+Rm-Ls0w(&!a(a#@b[|6cZ#X'7RkxWgAOu4ARn'dH'U#Y*Vz-Wm'CARm}d]*#a%^a*T'aK!a<9bV{PC=p*Jw4!&SgxcbB5r]idw(wBRmF7xFkt#&`(Rm/Rm8E|!JuY_9:Rl5=wrgr2:bbxd@xXfB(a*#T+!.X0X1Ta/a'T&RlDRfL>RlyARl9b[z[>RfZ:RlL:RfRwlg/ARl;9;RlxKv,A/!%7s69<74=BA5ba{-8Bde#`a<XaKYa1,a'P~=wxfB2bZ}}?C972@@=I}r8@55B9;5bb}G978B2@@=aybb}3j3vLv;<Jw3&!>Rfk=ayb^}4~Ad1#`*@@=aybb{w2@>==<bbz]dx+UY#^UaF!a9!bB'Ya1.!ajXa#%olRhD[y=3Dt#Ov5BrHKuMB%!(Rf^Wep~HrJwkiQjKr|~FRg)Ku+D#'!t5~GrF~?rDdV)UY,Z/_7RkuG{<~BrBg,rlsO:235B@bX}|d?a1!#`(6Vyn5@d##Y+jTv|vV~EfIj]uNpn~FRfH7Lq2vb1!a9-978BaU@@=Iz9978BbU}#~AJq0!(@@=Iz8978BaU@@=Iz7~AJQ|}!978BbU}!JvkaK!AdUa21-U#`a+(g/vsRn~Ou!5RPj:rmu9WhOjXuvvNr}:RhAj^v(pyw8unRn[kPr}p|u7vwv]RiSBd;pppzq@qHQa?(b.!a.a`@.|xa(hFv;Wiyj5uuv-7Riw~Cw`fg2WlU978BbU|wOuNBJqG!(P~EfD~CRlQcZ#X,k)u3vWs@u2]ksg;wEx'f@q1_2Wg.j]uNpn~FRfqJv]!15x'h{qG!(@@=IzK~CRl^j6v(us5x4i,#T(2WmY?C2F{1>Kq<aj1!*jTqIsBv=Wld~Cw`fj2Wl[j`v0u*~>RlT=c>Z,k#u3vWs@u2]kq<c1Z+jTqIsBv=Wle~Cw`fn2Wl]dn1#c(a(b^a2!b/bAT(bj!aDa7bu,a_a{c0!2T0g:v>ReD2@G{42@G{5~DpM~<5rc=Bx6i>{RT#RnI@zCx]y]z:2Jv[!zr5Awyk]9]k]dD(Y+X#6Vz.g=wKtgwhaCwgmTWj2Lu,w%_+/[y-B;b^xeg3u3Rj-2@bX{*KrJ<!+'@Wg(g?QRlC@Jv`!%b[zIwsfII}8JQ_@w|kW|=Jv(%!AqcOuNBJvEzh!bYzjLs@wP#(0!oy@>RkdJwMZtc3Dtd@BcG#T'9bWxg2@2Fznd*#Y+;2x'c}w<zizixNgwa#Z'U+!/!a'!a+w~g~z6wcn{Rn}wcnzRn|5Rh%=]nJg5vuRmvNvdRlvcprJu}w*az*a#!%.a.'Bot9qT]kj@Wg'ay2Gzv@Jv`!%b[zEwsfHI}1;ck#Ux`<Cbbx_Lu+w!a&0*!wko*wwo,So,}6Juqxf!E}PigQuyRm`d3(`#8>Rn%:A5B;bZ~%KvhCa!a2!x>k7#Uxb@b{#xaRk7Jw0!)>wwhlShl}6>wwhmShm}6CJvB!.x'hhvj{!!5Bwkhhbaz}x'hivjz~!5Bwkhibaz|xEhTrNu,v-vpD!a%&/)a3a.,%Ro2t[CE{)@3re9b]{%wjo09:rgc:Z&Ro6=<riifuaw&RmoKrNA!%(Ro4>Ro89;Ri`dSaL'UYzxZb)7Rka3xRhT&!,!#^1U}vbaz{>>@=be}yC@:D5bazzKu+A&!}{?ba}y>>@=be}wxBh[t`u~vJvr!%a!a()a,a0a4RoC=]o;Ju(!%RoGRhdwjh`=]oAg>w#Ro?g5vuRo=NvdRl|Ku]C.!&;RoEJvB!%RoORoMBx'h[v+_?w~h`}~5?w~hd~!xKh]oiptu-utv.vp!#%&a30a@a'a+(a/aOp(o~p!RoDJu(!%RoHRhewjha=]oBNvdRl}g>w#Ro@g5vuRo>c[#X']o<CauRoRAd-#Y':RkpauRoQKu]C.!&;RoFJvB!%RoNRoPBx'h]v+_?w~ha}t5?w~he}ue!/UbhYacXaW^Tc&a;b:a-c/#b&aja1(!cL+!bKbt!bmcRc9aIc?8[yW3Dtt94Rg`Jv}!&SiRMzBhEebShEMNuPRe>x7gL#TzuwjirRipc<Z&>on;>z=h-MSh.Mwqczx'a7vj&!>Re4@=ResJt__NuPRi*NuPRi)j]uNr|~FRfzKrJ>_+@Wfy@Wf]2WocKrJ<!+'@Wg%g/QRl@@Jv`!&awRl<wsfFIzgLu(w*!.*&ShBMwvhIRhI9;RhNx1hK'!#Sn]Mx1hK~0!#:2<H~7cNu+w7D*'1ZtW>Rn1~?rOc:Z&Rn2=<rQ<7wjh&=BSnLMc]#X(6Vz)w[b=a!U#9wzgMc3#&(RgMRitRis<x,gKt`ax!&+SioM=BSilMc3#&(RgKRinRimKurB,!&SiQMzBhDebShDM6BJQ!(P~Efx978B2@@=I}WLrJw!!,a*&@G}O@9wkibRid@@x'fKwC!&SlDMSfLMjUv~Q~EfKKv3@a+!(hFv-]mpx/hYZ(C5RiWz<o/MwkhY?So/M@x,gbvfB*&!SgEM:SoeeehFu3:Rgbda(,^TZa)X/7Sg[eb:2RgI~BrMC@wgkc:wwkcRerx3h(uUvK!&*,SnOM4Sh*MArRg;wHRh(x=h;rJvPwI!a4',a'0@Wg&=BSh/Mg>w=Rh=g3w*wwgGRgGcW(X#;Sg}M2Gzk@Jv`!&awRl=wsfGIz`dKZ*T'Y-:RhR7RhQg5u-p`j6v(us5d,#Y+~Awkia?RicOuNBwkibba}Ld6p~tyu_vbAa'a+!a/'a3aEa8a!>Sh,ebJv{!&Sh@ebSaReb9;SgwebNuPRi(NvdRl)NuPRi'hHu^<Rm^Jvv_@Wl(g;u1Si/ebKu'B&!*Sh?eb@Wl'z@aPeb95Si.ebcpputyvjB)!,&a+0a%ShAMWeK@G}C@WfJ9;RhMwvhH9w{ia}ix,hJvRA1(!zAn[MRhHx1hJ~*!#hFv(BSn[MBJQ!(@@=I~'978B2@@=I}2db.Ua<'X}+T#a0XaG2G}E;wkg|wuh!Rh!x,hZu,@)!&So0MVy)C5RiXACJvB!&5RiY5RiZg8w)cG}*T#2@bU}=KsA>(!a.3wkhZba~(x,h^u(A!&(SoCMRhb5Bz=h[eb?w~hb~6x,h_u(A!&(SoDMRhc5Bz=h]eb?w~hc~6e)aA1T#T,^^^c-bMb&blcPaP(a/!0!bA=b5c@a(!bfbrc#2afwmhARnjwchORnp2Wlf3DtsNvdRl-2@wpa<]m0bx(#:awRk2@Jw3!%RfhwpfgRlnKQB%!(G{V@G|'NuuRl6d='T+Y#VyUg<v~Rl~==G|<Jv+'!aYShC}6@B<5?ba~8@Jw3'!g2QRljhLrpWlOd+#Y'g.w'rIg>w*wgj@g-u0Rj@Lu+wT&)ZtUauq]~GrGci&U#F|39:rELrNvj!.%*RhCwunfw~nf~:9;Ri]>wtnhg;wHRnhx3hDs@v~!/+'@Wfr@9RkSNu&Rlo=@<5GzoKs0@_+@Wl+@awRkmJuh!-3d(}pY#qWJvj!%Rm(:Jw3!%Rm,Rm*de&!1U-U#`)Re;@G|.@9Ri82@wjfvRlq=@<5GzpLvOvr!).&2RlF8Rf`C=x!eE{.Jw3_g2QRlkhLrpWlPde(!#U{s,UXa*Ta'[y'g:v>ReS;x0PZ&RnlRnn~HrKJw1}f!=x!eB|2w]aP(#Xa&a*Ta.Ua2a7=]iOd'#Y&Ro&WnWg;u.RiDg6vjRiBNvdRlzhNvj]nYJuW_2Wm3x)kFze{9d])!a.!,Y01!#&aC!a3RndC=ox~BrC@2b^{pg,rlse7x'ksuq!%Rm.E{xidw(wBRmGx9o+)X#wwo-So-}69:Rl4@xSf@a#XZ'X)X,Ta(/ARl8b[xc>RfY:RlI:RfQwlg.ARl:9;Rlwdn'#^XafaQa1X1TaHTa)@b[{zcZ#X'7RkwWg@Ou4ARn&x)kG#{,g7u/RkGdH'U#Y*Vz'Wm&CARm|bx#(A]gUbUzJj9Q~=d,#Y(56H}l978H{U7d,0#U*2>ABb_xZ978BbU{e~AJQ{g!978BbU{hxMh?ad{oUYZ.x1h?{l!#:2<H{mx3n[t{vl!,&a%3Ro(z=iS}6ARnr=Bwsn^wvn`Rnbd`*T}B0!#^X'BG{c9b]{a>>@=be}F?JvS!&BG{d7BG}(Bde#`a1X,Ya@!a'P~=wxf@2bZ}I56B2@@=aybb}08@55B9;5bb}<j3vLv;<Jw3&!>Rfg=ayb^}&OuNBKuLA!)a!P~=x#fD{f2@>==<bbzl?C972@@=Ix^d6rSu,v7w*C(0a)a6#B+a%!sQ[y?3Dt%3[xn~<5rLOu!5p@Ku+D#'!t7~GrP~?rNKvlaya7'!h+v-5qMg=t|cd,U#5AAaa5Abb{S@52B5@a[@52B5Gx[iXueu;d<#`a(!/549C;ag>23ExY5@Dah89b^~689Jv)!~2b[~1Lv'w(%*!a#bX|aPrmawRe]keu7uhv-q6rxu,q`xTo]/a5aU!bNaDXbi!b-!ao!b<bwA!#5@B932:aV2G|:d-)Y#hJrL>RhG<7@C5<H|_=Cau:5aj5@B932:bJ|ng>vIbs)#?C2F|9jPv0w.vISh-MKvUaz(.!9ABbb|[5;5<H|Eg>unwfh;9:4E|YjQsBt|vjx'hYq3!(?C2F|J:2<BaY?C2F|GOu!5x,g|p{ah!-(?C2F|c9:4E|OjXuvvNr}:Rh&i[w*t|cd+U#jJvsu)vsSn~Mkfrmu9p}u7vwv]So!McW#Xa!ax5@A5aY:5;5<H|>kJv~vYrquJu3x4ib#T)2@SmZM?C2F|Bj:rmu9@xPhI(a*a#U#`a3-5Abb|L~@:RhK9:4E|0@52B5G|#C::aY?C2F|-:2<BaY?C2F|.5Jvk!a)javYrquJu3x4ia#T)2@SmYM?C2F|HAxPhH(!a#U#`a*-5Abb|4~@:RhJ9:4E|R@52B5G|F:2<BaY?C2F|Sc^#Xa2j=Qq5CJvB!-g<v{z;hhM?C2F|Zi[vrv{z;hiM?C2F|XKsA>!a)-g<v{z;h[eb?C2F|]i[vrv{z;h]eb?C2F|^iZu.vix,hZq3ah!.(?C2F|QOu!5ShXM:2<BaY?C2F|P", 13494, 2713, 49, 25, 61), Eu = /* #__PURE__ */ new Uint16Array([
	512,
	26465,
	29036,
	7,
	0,
	2,
	4,
	116,
	24638,
	116,
	24636,
	8693,
	29807,
	24610,
	621,
	1,
	0,
	0,
	3,
	112,
	24614,
	111,
	115,
	24615
]), K;
(function(e) {
	e[e.VALUE_LENGTH = 49152] = "VALUE_LENGTH", e[e.FLAG13 = 8192] = "FLAG13", e[e.BRANCH_LENGTH = 8064] = "BRANCH_LENGTH", e[e.JUMP_TABLE = 127] = "JUMP_TABLE", e[e.VALUE_MASK = 8191] = "VALUE_MASK";
})(K ||= {});
// node_modules/entities/dist/decode.js
var Du;
(function(e) {
	e[e.AMP = 38] = "AMP", e[e.NUM = 35] = "NUM", e[e.SEMI = 59] = "SEMI", e[e.EQUALS = 61] = "EQUALS", e[e.ZERO = 48] = "ZERO", e[e.NINE = 57] = "NINE", e[e.LOWER_A = 97] = "LOWER_A", e[e.LOWER_X = 120] = "LOWER_X";
})(Du ||= {});
var Ou = 32;
function ku(e) {
	return e - Du.ZERO >>> 0 <= 9;
}
function Au(e) {
	return (e | Ou) - Du.LOWER_A >>> 0 <= 5;
}
function ju(e) {
	return (e | Ou) - Du.LOWER_A >>> 0 <= 25;
}
function Mu(e) {
	return e === Du.EQUALS || ju(e) || ku(e);
}
var Nu;
(function(e) {
	e[e.EntityStart = 0] = "EntityStart", e[e.NumericStart = 1] = "NumericStart", e[e.NumericDecimal = 2] = "NumericDecimal", e[e.NumericHex = 3] = "NumericHex", e[e.NamedEntity = 4] = "NamedEntity";
})(Nu ||= {});
var Pu;
(function(e) {
	e[e.Legacy = 0] = "Legacy", e[e.Strict = 1] = "Strict", e[e.Attribute = 2] = "Attribute";
})(Pu ||= {});
var Fu = class {
	decodeTree;
	emitCodePoint;
	errors;
	state = Nu.EntityStart;
	consumed = 1;
	result = 0;
	treeIndex = 0;
	excess = 1;
	decodeMode = Pu.Strict;
	runConsumed = 0;
	constructor(e, t, n) {
		this.decodeTree = e, this.emitCodePoint = t, this.errors = n;
	}
	startEntity(e) {
		this.decodeMode = e, this.state = Nu.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1, this.runConsumed = 0;
	}
	write(e, t) {
		switch (this.state) {
			case Nu.EntityStart: return e.charCodeAt(t) === Du.NUM ? (this.state = Nu.NumericStart, this.consumed += 1, this.stateNumericStart(e, t + 1)) : (this.state = Nu.NamedEntity, this.stateNamedEntity(e, t));
			case Nu.NumericStart: return this.stateNumericStart(e, t);
			case Nu.NumericDecimal: return this.stateNumericDecimal(e, t);
			case Nu.NumericHex: return this.stateNumericHex(e, t);
			default: return this.stateNamedEntity(e, t);
		}
	}
	stateNumericStart(e, t) {
		return t >= e.length ? -1 : (e.charCodeAt(t) | Ou) === Du.LOWER_X ? (this.state = Nu.NumericHex, this.consumed += 1, this.stateNumericHex(e, t + 1)) : (this.state = Nu.NumericDecimal, this.stateNumericDecimal(e, t));
	}
	stateNumericHex(e, t) {
		let n = e.length, { result: r } = this, { consumed: i } = this;
		for (; t < n;) {
			let n = e.charCodeAt(t);
			if (ku(n) || Au(n)) {
				let e = n <= Du.NINE ? n - Du.ZERO : (n | Ou) - Du.LOWER_A + 10;
				r = r * 16 + e, i += 1, t += 1;
			} else return this.result = r, this.consumed = i, this.emitNumericEntity(n, 3);
		}
		return this.result = r, this.consumed = i, -1;
	}
	stateNumericDecimal(e, t) {
		let n = e.length, { result: r } = this, { consumed: i } = this;
		for (; t < n;) {
			let n = e.charCodeAt(t) - Du.ZERO;
			if (n >>> 0 > 9) return this.result = r, this.consumed = i, this.emitNumericEntity(n + Du.ZERO, 2);
			r = r * 10 + n, i += 1, t += 1;
		}
		return this.result = r, this.consumed = i, -1;
	}
	emitNumericEntity(e, t) {
		if (this.consumed <= t) return this.errors?.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
		if (e === Du.SEMI) this.consumed += 1;
		else if (this.decodeMode === Pu.Strict) return 0;
		return this.emitCodePoint((this.decodeTree === Eu ? Su : xu)(this.result), this.consumed), this.errors && (e !== Du.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
	}
	flushAndEmitLegacyOrReject(e, t, n, r) {
		return this.consumed = e, this.excess = t, this.result === 0 || this.decodeMode === Pu.Attribute && (r === 0 || t > 1 || Mu(n)) ? 0 : this.emitNotTerminatedNamedEntity();
	}
	stateNamedEntity(e, t) {
		let { decodeTree: n } = this, r = e.length, i = this.decodeMode === Pu.Strict, { treeIndex: a } = this, { excess: o } = this, { consumed: s } = this, c = n[a];
		for (; t < r;) {
			for (; (c & (K.VALUE_LENGTH | K.FLAG13)) === 0 && (c & K.JUMP_TABLE) !== 0;) {
				let i = e.charCodeAt(t), l = c & K.JUMP_TABLE, u = (c & K.BRANCH_LENGTH) >> 7;
				if (u === 0) {
					if (i !== l) return this.flushAndEmitLegacyOrReject(s, o, i, 0);
					a += 1;
				} else {
					let e = i - l;
					if (e >>> 0 >= u) return this.flushAndEmitLegacyOrReject(s, o, i, 0);
					let t = n[a + 1 + e];
					if (t === 0) return this.flushAndEmitLegacyOrReject(s, o, i, 0);
					a = a + u + t & 65535;
				}
				if (c = n[a], t += 1, o += 1, t >= r) break;
			}
			if (t >= r) break;
			if ((c & (K.VALUE_LENGTH | K.FLAG13)) === K.FLAG13) {
				let i = (c & K.BRANCH_LENGTH) >> 7, { runConsumed: l } = this;
				if (l === 0) {
					let n = e.charCodeAt(t);
					if (n !== (c & K.JUMP_TABLE)) return this.flushAndEmitLegacyOrReject(s, o, n, 0);
					t += 1, o += 1, l = 1;
				}
				for (; l < i;) {
					if (t >= r) return this.treeIndex = a, this.excess = o, this.consumed = s, this.runConsumed = l, -1;
					let i = l - 1, c = n[a + 1 + (i >> 1)] >> ((i & 1) << 3) & 255, u = e.charCodeAt(t);
					if (u !== c) return this.runConsumed = 0, this.flushAndEmitLegacyOrReject(s, o, u, 0);
					t += 1, o += 1, l += 1;
				}
				this.runConsumed = 0, a += 1 + (i >> 1), c = n[a];
				continue;
			}
			let l = c >>> 14, u = e.charCodeAt(t);
			if (l !== 0) {
				if (!i && (c & K.FLAG13) === 0 && (this.result = a, s += o - 1, o = 1), u === Du.SEMI) return this.emitNamedEntityData(a, l, s + o);
				if (l === 1) return this.flushAndEmitLegacyOrReject(s, o, u, l);
			}
			let d = Iu(n, c, a + (l || 1), u);
			if (d < 0) return this.flushAndEmitLegacyOrReject(s, o, u, l);
			a = d, c = n[a], t += 1, o += 1;
		}
		return !i && c >>> 14 && (c & K.FLAG13) === 0 && (this.result = a, s += o - 1, o = 1), this.treeIndex = a, this.excess = o, this.consumed = s, -1;
	}
	emitNotTerminatedNamedEntity() {
		let { result: e, decodeTree: t } = this, n = t[e] >>> 14;
		return this.emitNamedEntityData(e, n, this.consumed), this.errors?.missingSemicolonAfterCharacterReference(), this.consumed;
	}
	emitNamedEntityData(e, t, n) {
		let { decodeTree: r } = this;
		return this.emitCodePoint(t === 1 ? r[e] & K.VALUE_MASK : r[e + 1], n), t === 3 && this.emitCodePoint(r[e + 2], n), n;
	}
	end() {
		switch (this.state) {
			case Nu.NamedEntity: return this.result !== 0 && (this.decodeMode !== Pu.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
			case Nu.NumericDecimal: return this.emitNumericEntity(0, 2);
			case Nu.NumericHex: return this.emitNumericEntity(0, 3);
			case Nu.NumericStart: return this.errors?.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
			default: return 0;
		}
	}
};
function Iu(e, t, n, r) {
	let i = (t & K.BRANCH_LENGTH) >> 7, a = t & K.JUMP_TABLE;
	if (a) {
		if (i === 0) return r === a ? n : -1;
		let t = r - a;
		if (t >>> 0 >= i) return -1;
		let o = e[n + t];
		return o === 0 ? -1 : n + i + o - 1 & 65535;
	}
	if (i === 0) return -1;
	let o = i + 1 >> 1, s = n + o + i;
	for (let t = 0; t < i; t++) {
		let i = e[n + (t >> 1)] >> ((t & 1) << 3) & 255;
		if (i === r) return s + e[n + o + t] & 65535;
		if (i > r) return -1;
	}
	return -1;
}
// node_modules/parse5/dist/common/html.js
var q;
(function(e) {
	e.HTML = "http://www.w3.org/1999/xhtml", e.MATHML = "http://www.w3.org/1998/Math/MathML", e.SVG = "http://www.w3.org/2000/svg", e.XLINK = "http://www.w3.org/1999/xlink", e.XML = "http://www.w3.org/XML/1998/namespace", e.XMLNS = "http://www.w3.org/2000/xmlns/";
})(q ||= {});
var Lu;
(function(e) {
	e.TYPE = "type", e.ACTION = "action", e.ENCODING = "encoding", e.PROMPT = "prompt", e.NAME = "name", e.COLOR = "color", e.FACE = "face", e.SIZE = "size";
})(Lu ||= {});
var Ru;
(function(e) {
	e.NO_QUIRKS = "no-quirks", e.QUIRKS = "quirks", e.LIMITED_QUIRKS = "limited-quirks";
})(Ru ||= {});
var J;
(function(e) {
	e.A = "a", e.ADDRESS = "address", e.ANNOTATION_XML = "annotation-xml", e.APPLET = "applet", e.AREA = "area", e.ARTICLE = "article", e.ASIDE = "aside", e.B = "b", e.BASE = "base", e.BASEFONT = "basefont", e.BGSOUND = "bgsound", e.BIG = "big", e.BLOCKQUOTE = "blockquote", e.BODY = "body", e.BR = "br", e.BUTTON = "button", e.CAPTION = "caption", e.CENTER = "center", e.CODE = "code", e.COL = "col", e.COLGROUP = "colgroup", e.DD = "dd", e.DESC = "desc", e.DETAILS = "details", e.DIALOG = "dialog", e.DIR = "dir", e.DIV = "div", e.DL = "dl", e.DT = "dt", e.EM = "em", e.EMBED = "embed", e.FIELDSET = "fieldset", e.FIGCAPTION = "figcaption", e.FIGURE = "figure", e.FONT = "font", e.FOOTER = "footer", e.FOREIGN_OBJECT = "foreignObject", e.FORM = "form", e.FRAME = "frame", e.FRAMESET = "frameset", e.H1 = "h1", e.H2 = "h2", e.H3 = "h3", e.H4 = "h4", e.H5 = "h5", e.H6 = "h6", e.HEAD = "head", e.HEADER = "header", e.HGROUP = "hgroup", e.HR = "hr", e.HTML = "html", e.I = "i", e.IMG = "img", e.IMAGE = "image", e.INPUT = "input", e.IFRAME = "iframe", e.KEYGEN = "keygen", e.LABEL = "label", e.LI = "li", e.LINK = "link", e.LISTING = "listing", e.MAIN = "main", e.MALIGNMARK = "malignmark", e.MARQUEE = "marquee", e.MATH = "math", e.MENU = "menu", e.META = "meta", e.MGLYPH = "mglyph", e.MI = "mi", e.MO = "mo", e.MN = "mn", e.MS = "ms", e.MTEXT = "mtext", e.NAV = "nav", e.NOBR = "nobr", e.NOFRAMES = "noframes", e.NOEMBED = "noembed", e.NOSCRIPT = "noscript", e.OBJECT = "object", e.OL = "ol", e.OPTGROUP = "optgroup", e.OPTION = "option", e.P = "p", e.PARAM = "param", e.PLAINTEXT = "plaintext", e.PRE = "pre", e.RB = "rb", e.RP = "rp", e.RT = "rt", e.RTC = "rtc", e.RUBY = "ruby", e.S = "s", e.SCRIPT = "script", e.SEARCH = "search", e.SECTION = "section", e.SELECT = "select", e.SOURCE = "source", e.SMALL = "small", e.SPAN = "span", e.STRIKE = "strike", e.STRONG = "strong", e.STYLE = "style", e.SUB = "sub", e.SUMMARY = "summary", e.SUP = "sup", e.TABLE = "table", e.TBODY = "tbody", e.TEMPLATE = "template", e.TEXTAREA = "textarea", e.TFOOT = "tfoot", e.TD = "td", e.TH = "th", e.THEAD = "thead", e.TITLE = "title", e.TR = "tr", e.TRACK = "track", e.TT = "tt", e.U = "u", e.UL = "ul", e.SVG = "svg", e.VAR = "var", e.WBR = "wbr", e.XMP = "xmp";
})(J ||= {});
var Y;
(function(e) {
	e[e.UNKNOWN = 0] = "UNKNOWN", e[e.A = 1] = "A", e[e.ADDRESS = 2] = "ADDRESS", e[e.ANNOTATION_XML = 3] = "ANNOTATION_XML", e[e.APPLET = 4] = "APPLET", e[e.AREA = 5] = "AREA", e[e.ARTICLE = 6] = "ARTICLE", e[e.ASIDE = 7] = "ASIDE", e[e.B = 8] = "B", e[e.BASE = 9] = "BASE", e[e.BASEFONT = 10] = "BASEFONT", e[e.BGSOUND = 11] = "BGSOUND", e[e.BIG = 12] = "BIG", e[e.BLOCKQUOTE = 13] = "BLOCKQUOTE", e[e.BODY = 14] = "BODY", e[e.BR = 15] = "BR", e[e.BUTTON = 16] = "BUTTON", e[e.CAPTION = 17] = "CAPTION", e[e.CENTER = 18] = "CENTER", e[e.CODE = 19] = "CODE", e[e.COL = 20] = "COL", e[e.COLGROUP = 21] = "COLGROUP", e[e.DD = 22] = "DD", e[e.DESC = 23] = "DESC", e[e.DETAILS = 24] = "DETAILS", e[e.DIALOG = 25] = "DIALOG", e[e.DIR = 26] = "DIR", e[e.DIV = 27] = "DIV", e[e.DL = 28] = "DL", e[e.DT = 29] = "DT", e[e.EM = 30] = "EM", e[e.EMBED = 31] = "EMBED", e[e.FIELDSET = 32] = "FIELDSET", e[e.FIGCAPTION = 33] = "FIGCAPTION", e[e.FIGURE = 34] = "FIGURE", e[e.FONT = 35] = "FONT", e[e.FOOTER = 36] = "FOOTER", e[e.FOREIGN_OBJECT = 37] = "FOREIGN_OBJECT", e[e.FORM = 38] = "FORM", e[e.FRAME = 39] = "FRAME", e[e.FRAMESET = 40] = "FRAMESET", e[e.H1 = 41] = "H1", e[e.H2 = 42] = "H2", e[e.H3 = 43] = "H3", e[e.H4 = 44] = "H4", e[e.H5 = 45] = "H5", e[e.H6 = 46] = "H6", e[e.HEAD = 47] = "HEAD", e[e.HEADER = 48] = "HEADER", e[e.HGROUP = 49] = "HGROUP", e[e.HR = 50] = "HR", e[e.HTML = 51] = "HTML", e[e.I = 52] = "I", e[e.IMG = 53] = "IMG", e[e.IMAGE = 54] = "IMAGE", e[e.INPUT = 55] = "INPUT", e[e.IFRAME = 56] = "IFRAME", e[e.KEYGEN = 57] = "KEYGEN", e[e.LABEL = 58] = "LABEL", e[e.LI = 59] = "LI", e[e.LINK = 60] = "LINK", e[e.LISTING = 61] = "LISTING", e[e.MAIN = 62] = "MAIN", e[e.MALIGNMARK = 63] = "MALIGNMARK", e[e.MARQUEE = 64] = "MARQUEE", e[e.MATH = 65] = "MATH", e[e.MENU = 66] = "MENU", e[e.META = 67] = "META", e[e.MGLYPH = 68] = "MGLYPH", e[e.MI = 69] = "MI", e[e.MO = 70] = "MO", e[e.MN = 71] = "MN", e[e.MS = 72] = "MS", e[e.MTEXT = 73] = "MTEXT", e[e.NAV = 74] = "NAV", e[e.NOBR = 75] = "NOBR", e[e.NOFRAMES = 76] = "NOFRAMES", e[e.NOEMBED = 77] = "NOEMBED", e[e.NOSCRIPT = 78] = "NOSCRIPT", e[e.OBJECT = 79] = "OBJECT", e[e.OL = 80] = "OL", e[e.OPTGROUP = 81] = "OPTGROUP", e[e.OPTION = 82] = "OPTION", e[e.P = 83] = "P", e[e.PARAM = 84] = "PARAM", e[e.PLAINTEXT = 85] = "PLAINTEXT", e[e.PRE = 86] = "PRE", e[e.RB = 87] = "RB", e[e.RP = 88] = "RP", e[e.RT = 89] = "RT", e[e.RTC = 90] = "RTC", e[e.RUBY = 91] = "RUBY", e[e.S = 92] = "S", e[e.SCRIPT = 93] = "SCRIPT", e[e.SEARCH = 94] = "SEARCH", e[e.SECTION = 95] = "SECTION", e[e.SELECT = 96] = "SELECT", e[e.SOURCE = 97] = "SOURCE", e[e.SMALL = 98] = "SMALL", e[e.SPAN = 99] = "SPAN", e[e.STRIKE = 100] = "STRIKE", e[e.STRONG = 101] = "STRONG", e[e.STYLE = 102] = "STYLE", e[e.SUB = 103] = "SUB", e[e.SUMMARY = 104] = "SUMMARY", e[e.SUP = 105] = "SUP", e[e.TABLE = 106] = "TABLE", e[e.TBODY = 107] = "TBODY", e[e.TEMPLATE = 108] = "TEMPLATE", e[e.TEXTAREA = 109] = "TEXTAREA", e[e.TFOOT = 110] = "TFOOT", e[e.TD = 111] = "TD", e[e.TH = 112] = "TH", e[e.THEAD = 113] = "THEAD", e[e.TITLE = 114] = "TITLE", e[e.TR = 115] = "TR", e[e.TRACK = 116] = "TRACK", e[e.TT = 117] = "TT", e[e.U = 118] = "U", e[e.UL = 119] = "UL", e[e.SVG = 120] = "SVG", e[e.VAR = 121] = "VAR", e[e.WBR = 122] = "WBR", e[e.XMP = 123] = "XMP";
})(Y ||= {});
var zu = /* @__PURE__ */ new Map([
	[J.A, Y.A],
	[J.ADDRESS, Y.ADDRESS],
	[J.ANNOTATION_XML, Y.ANNOTATION_XML],
	[J.APPLET, Y.APPLET],
	[J.AREA, Y.AREA],
	[J.ARTICLE, Y.ARTICLE],
	[J.ASIDE, Y.ASIDE],
	[J.B, Y.B],
	[J.BASE, Y.BASE],
	[J.BASEFONT, Y.BASEFONT],
	[J.BGSOUND, Y.BGSOUND],
	[J.BIG, Y.BIG],
	[J.BLOCKQUOTE, Y.BLOCKQUOTE],
	[J.BODY, Y.BODY],
	[J.BR, Y.BR],
	[J.BUTTON, Y.BUTTON],
	[J.CAPTION, Y.CAPTION],
	[J.CENTER, Y.CENTER],
	[J.CODE, Y.CODE],
	[J.COL, Y.COL],
	[J.COLGROUP, Y.COLGROUP],
	[J.DD, Y.DD],
	[J.DESC, Y.DESC],
	[J.DETAILS, Y.DETAILS],
	[J.DIALOG, Y.DIALOG],
	[J.DIR, Y.DIR],
	[J.DIV, Y.DIV],
	[J.DL, Y.DL],
	[J.DT, Y.DT],
	[J.EM, Y.EM],
	[J.EMBED, Y.EMBED],
	[J.FIELDSET, Y.FIELDSET],
	[J.FIGCAPTION, Y.FIGCAPTION],
	[J.FIGURE, Y.FIGURE],
	[J.FONT, Y.FONT],
	[J.FOOTER, Y.FOOTER],
	[J.FOREIGN_OBJECT, Y.FOREIGN_OBJECT],
	[J.FORM, Y.FORM],
	[J.FRAME, Y.FRAME],
	[J.FRAMESET, Y.FRAMESET],
	[J.H1, Y.H1],
	[J.H2, Y.H2],
	[J.H3, Y.H3],
	[J.H4, Y.H4],
	[J.H5, Y.H5],
	[J.H6, Y.H6],
	[J.HEAD, Y.HEAD],
	[J.HEADER, Y.HEADER],
	[J.HGROUP, Y.HGROUP],
	[J.HR, Y.HR],
	[J.HTML, Y.HTML],
	[J.I, Y.I],
	[J.IMG, Y.IMG],
	[J.IMAGE, Y.IMAGE],
	[J.INPUT, Y.INPUT],
	[J.IFRAME, Y.IFRAME],
	[J.KEYGEN, Y.KEYGEN],
	[J.LABEL, Y.LABEL],
	[J.LI, Y.LI],
	[J.LINK, Y.LINK],
	[J.LISTING, Y.LISTING],
	[J.MAIN, Y.MAIN],
	[J.MALIGNMARK, Y.MALIGNMARK],
	[J.MARQUEE, Y.MARQUEE],
	[J.MATH, Y.MATH],
	[J.MENU, Y.MENU],
	[J.META, Y.META],
	[J.MGLYPH, Y.MGLYPH],
	[J.MI, Y.MI],
	[J.MO, Y.MO],
	[J.MN, Y.MN],
	[J.MS, Y.MS],
	[J.MTEXT, Y.MTEXT],
	[J.NAV, Y.NAV],
	[J.NOBR, Y.NOBR],
	[J.NOFRAMES, Y.NOFRAMES],
	[J.NOEMBED, Y.NOEMBED],
	[J.NOSCRIPT, Y.NOSCRIPT],
	[J.OBJECT, Y.OBJECT],
	[J.OL, Y.OL],
	[J.OPTGROUP, Y.OPTGROUP],
	[J.OPTION, Y.OPTION],
	[J.P, Y.P],
	[J.PARAM, Y.PARAM],
	[J.PLAINTEXT, Y.PLAINTEXT],
	[J.PRE, Y.PRE],
	[J.RB, Y.RB],
	[J.RP, Y.RP],
	[J.RT, Y.RT],
	[J.RTC, Y.RTC],
	[J.RUBY, Y.RUBY],
	[J.S, Y.S],
	[J.SCRIPT, Y.SCRIPT],
	[J.SEARCH, Y.SEARCH],
	[J.SECTION, Y.SECTION],
	[J.SELECT, Y.SELECT],
	[J.SOURCE, Y.SOURCE],
	[J.SMALL, Y.SMALL],
	[J.SPAN, Y.SPAN],
	[J.STRIKE, Y.STRIKE],
	[J.STRONG, Y.STRONG],
	[J.STYLE, Y.STYLE],
	[J.SUB, Y.SUB],
	[J.SUMMARY, Y.SUMMARY],
	[J.SUP, Y.SUP],
	[J.TABLE, Y.TABLE],
	[J.TBODY, Y.TBODY],
	[J.TEMPLATE, Y.TEMPLATE],
	[J.TEXTAREA, Y.TEXTAREA],
	[J.TFOOT, Y.TFOOT],
	[J.TD, Y.TD],
	[J.TH, Y.TH],
	[J.THEAD, Y.THEAD],
	[J.TITLE, Y.TITLE],
	[J.TR, Y.TR],
	[J.TRACK, Y.TRACK],
	[J.TT, Y.TT],
	[J.U, Y.U],
	[J.UL, Y.UL],
	[J.SVG, Y.SVG],
	[J.VAR, Y.VAR],
	[J.WBR, Y.WBR],
	[J.XMP, Y.XMP]
]);
function Bu(e) {
	return zu.get(e) ?? Y.UNKNOWN;
}
var X = Y, Vu = {
	[q.HTML]: /* @__PURE__ */ new Set([
		X.ADDRESS,
		X.APPLET,
		X.AREA,
		X.ARTICLE,
		X.ASIDE,
		X.BASE,
		X.BASEFONT,
		X.BGSOUND,
		X.BLOCKQUOTE,
		X.BODY,
		X.BR,
		X.BUTTON,
		X.CAPTION,
		X.CENTER,
		X.COL,
		X.COLGROUP,
		X.DD,
		X.DETAILS,
		X.DIR,
		X.DIV,
		X.DL,
		X.DT,
		X.EMBED,
		X.FIELDSET,
		X.FIGCAPTION,
		X.FIGURE,
		X.FOOTER,
		X.FORM,
		X.FRAME,
		X.FRAMESET,
		X.H1,
		X.H2,
		X.H3,
		X.H4,
		X.H5,
		X.H6,
		X.HEAD,
		X.HEADER,
		X.HGROUP,
		X.HR,
		X.HTML,
		X.IFRAME,
		X.IMG,
		X.INPUT,
		X.LI,
		X.LINK,
		X.LISTING,
		X.MAIN,
		X.MARQUEE,
		X.MENU,
		X.META,
		X.NAV,
		X.NOEMBED,
		X.NOFRAMES,
		X.NOSCRIPT,
		X.OBJECT,
		X.OL,
		X.P,
		X.PARAM,
		X.PLAINTEXT,
		X.PRE,
		X.SCRIPT,
		X.SECTION,
		X.SELECT,
		X.SOURCE,
		X.STYLE,
		X.SUMMARY,
		X.TABLE,
		X.TBODY,
		X.TD,
		X.TEMPLATE,
		X.TEXTAREA,
		X.TFOOT,
		X.TH,
		X.THEAD,
		X.TITLE,
		X.TR,
		X.TRACK,
		X.UL,
		X.WBR,
		X.XMP
	]),
	[q.MATHML]: /* @__PURE__ */ new Set([
		X.MI,
		X.MO,
		X.MN,
		X.MS,
		X.MTEXT,
		X.ANNOTATION_XML
	]),
	[q.SVG]: /* @__PURE__ */ new Set([
		X.TITLE,
		X.FOREIGN_OBJECT,
		X.DESC
	]),
	[q.XLINK]: /* @__PURE__ */ new Set(),
	[q.XML]: /* @__PURE__ */ new Set(),
	[q.XMLNS]: /* @__PURE__ */ new Set()
}, Hu = /* @__PURE__ */ new Set([
	X.H1,
	X.H2,
	X.H3,
	X.H4,
	X.H5,
	X.H6
]);
J.STYLE, J.SCRIPT, J.XMP, J.IFRAME, J.NOEMBED, J.NOFRAMES, J.PLAINTEXT;
// node_modules/parse5/dist/tokenizer/index.js
var Z;
(function(e) {
	e[e.DATA = 0] = "DATA", e[e.RCDATA = 1] = "RCDATA", e[e.RAWTEXT = 2] = "RAWTEXT", e[e.SCRIPT_DATA = 3] = "SCRIPT_DATA", e[e.PLAINTEXT = 4] = "PLAINTEXT", e[e.TAG_OPEN = 5] = "TAG_OPEN", e[e.END_TAG_OPEN = 6] = "END_TAG_OPEN", e[e.TAG_NAME = 7] = "TAG_NAME", e[e.RCDATA_LESS_THAN_SIGN = 8] = "RCDATA_LESS_THAN_SIGN", e[e.RCDATA_END_TAG_OPEN = 9] = "RCDATA_END_TAG_OPEN", e[e.RCDATA_END_TAG_NAME = 10] = "RCDATA_END_TAG_NAME", e[e.RAWTEXT_LESS_THAN_SIGN = 11] = "RAWTEXT_LESS_THAN_SIGN", e[e.RAWTEXT_END_TAG_OPEN = 12] = "RAWTEXT_END_TAG_OPEN", e[e.RAWTEXT_END_TAG_NAME = 13] = "RAWTEXT_END_TAG_NAME", e[e.SCRIPT_DATA_LESS_THAN_SIGN = 14] = "SCRIPT_DATA_LESS_THAN_SIGN", e[e.SCRIPT_DATA_END_TAG_OPEN = 15] = "SCRIPT_DATA_END_TAG_OPEN", e[e.SCRIPT_DATA_END_TAG_NAME = 16] = "SCRIPT_DATA_END_TAG_NAME", e[e.SCRIPT_DATA_ESCAPE_START = 17] = "SCRIPT_DATA_ESCAPE_START", e[e.SCRIPT_DATA_ESCAPE_START_DASH = 18] = "SCRIPT_DATA_ESCAPE_START_DASH", e[e.SCRIPT_DATA_ESCAPED = 19] = "SCRIPT_DATA_ESCAPED", e[e.SCRIPT_DATA_ESCAPED_DASH = 20] = "SCRIPT_DATA_ESCAPED_DASH", e[e.SCRIPT_DATA_ESCAPED_DASH_DASH = 21] = "SCRIPT_DATA_ESCAPED_DASH_DASH", e[e.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN = 22] = "SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN", e[e.SCRIPT_DATA_ESCAPED_END_TAG_OPEN = 23] = "SCRIPT_DATA_ESCAPED_END_TAG_OPEN", e[e.SCRIPT_DATA_ESCAPED_END_TAG_NAME = 24] = "SCRIPT_DATA_ESCAPED_END_TAG_NAME", e[e.SCRIPT_DATA_DOUBLE_ESCAPE_START = 25] = "SCRIPT_DATA_DOUBLE_ESCAPE_START", e[e.SCRIPT_DATA_DOUBLE_ESCAPED = 26] = "SCRIPT_DATA_DOUBLE_ESCAPED", e[e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH = 27] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH", e[e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH = 28] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH", e[e.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN = 29] = "SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN", e[e.SCRIPT_DATA_DOUBLE_ESCAPE_END = 30] = "SCRIPT_DATA_DOUBLE_ESCAPE_END", e[e.BEFORE_ATTRIBUTE_NAME = 31] = "BEFORE_ATTRIBUTE_NAME", e[e.ATTRIBUTE_NAME = 32] = "ATTRIBUTE_NAME", e[e.AFTER_ATTRIBUTE_NAME = 33] = "AFTER_ATTRIBUTE_NAME", e[e.BEFORE_ATTRIBUTE_VALUE = 34] = "BEFORE_ATTRIBUTE_VALUE", e[e.ATTRIBUTE_VALUE_DOUBLE_QUOTED = 35] = "ATTRIBUTE_VALUE_DOUBLE_QUOTED", e[e.ATTRIBUTE_VALUE_SINGLE_QUOTED = 36] = "ATTRIBUTE_VALUE_SINGLE_QUOTED", e[e.ATTRIBUTE_VALUE_UNQUOTED = 37] = "ATTRIBUTE_VALUE_UNQUOTED", e[e.AFTER_ATTRIBUTE_VALUE_QUOTED = 38] = "AFTER_ATTRIBUTE_VALUE_QUOTED", e[e.SELF_CLOSING_START_TAG = 39] = "SELF_CLOSING_START_TAG", e[e.BOGUS_COMMENT = 40] = "BOGUS_COMMENT", e[e.MARKUP_DECLARATION_OPEN = 41] = "MARKUP_DECLARATION_OPEN", e[e.COMMENT_START = 42] = "COMMENT_START", e[e.COMMENT_START_DASH = 43] = "COMMENT_START_DASH", e[e.COMMENT = 44] = "COMMENT", e[e.COMMENT_LESS_THAN_SIGN = 45] = "COMMENT_LESS_THAN_SIGN", e[e.COMMENT_LESS_THAN_SIGN_BANG = 46] = "COMMENT_LESS_THAN_SIGN_BANG", e[e.COMMENT_LESS_THAN_SIGN_BANG_DASH = 47] = "COMMENT_LESS_THAN_SIGN_BANG_DASH", e[e.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH = 48] = "COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH", e[e.COMMENT_END_DASH = 49] = "COMMENT_END_DASH", e[e.COMMENT_END = 50] = "COMMENT_END", e[e.COMMENT_END_BANG = 51] = "COMMENT_END_BANG", e[e.DOCTYPE = 52] = "DOCTYPE", e[e.BEFORE_DOCTYPE_NAME = 53] = "BEFORE_DOCTYPE_NAME", e[e.DOCTYPE_NAME = 54] = "DOCTYPE_NAME", e[e.AFTER_DOCTYPE_NAME = 55] = "AFTER_DOCTYPE_NAME", e[e.AFTER_DOCTYPE_PUBLIC_KEYWORD = 56] = "AFTER_DOCTYPE_PUBLIC_KEYWORD", e[e.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER = 57] = "BEFORE_DOCTYPE_PUBLIC_IDENTIFIER", e[e.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED = 58] = "DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED", e[e.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED = 59] = "DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED", e[e.AFTER_DOCTYPE_PUBLIC_IDENTIFIER = 60] = "AFTER_DOCTYPE_PUBLIC_IDENTIFIER", e[e.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS = 61] = "BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS", e[e.AFTER_DOCTYPE_SYSTEM_KEYWORD = 62] = "AFTER_DOCTYPE_SYSTEM_KEYWORD", e[e.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER = 63] = "BEFORE_DOCTYPE_SYSTEM_IDENTIFIER", e[e.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED = 64] = "DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED", e[e.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED = 65] = "DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED", e[e.AFTER_DOCTYPE_SYSTEM_IDENTIFIER = 66] = "AFTER_DOCTYPE_SYSTEM_IDENTIFIER", e[e.BOGUS_DOCTYPE = 67] = "BOGUS_DOCTYPE", e[e.CDATA_SECTION = 68] = "CDATA_SECTION", e[e.CDATA_SECTION_BRACKET = 69] = "CDATA_SECTION_BRACKET", e[e.CDATA_SECTION_END = 70] = "CDATA_SECTION_END", e[e.CHARACTER_REFERENCE = 71] = "CHARACTER_REFERENCE", e[e.AMBIGUOUS_AMPERSAND = 72] = "AMBIGUOUS_AMPERSAND";
})(Z ||= {});
var Uu = {
	DATA: Z.DATA,
	RCDATA: Z.RCDATA,
	RAWTEXT: Z.RAWTEXT,
	SCRIPT_DATA: Z.SCRIPT_DATA,
	PLAINTEXT: Z.PLAINTEXT,
	CDATA_SECTION: Z.CDATA_SECTION
};
function Wu(e) {
	return e >= U.DIGIT_0 && e <= U.DIGIT_9;
}
function Gu(e) {
	return e >= U.LATIN_CAPITAL_A && e <= U.LATIN_CAPITAL_Z;
}
function Ku(e) {
	return e >= U.LATIN_SMALL_A && e <= U.LATIN_SMALL_Z;
}
function qu(e) {
	return Ku(e) || Gu(e);
}
function Ju(e) {
	return qu(e) || Wu(e);
}
function Yu(e) {
	return e + 32;
}
function Xu(e) {
	return e === U.SPACE || e === U.LINE_FEED || e === U.TABULATION || e === U.FORM_FEED;
}
function Zu(e) {
	return Xu(e) || e === U.SOLIDUS || e === U.GREATER_THAN_SIGN;
}
function Qu(e) {
	return e === U.NULL ? W.nullCharacterReference : e > 1114111 ? W.characterReferenceOutsideUnicodeRange : du(e) ? W.surrogateCharacterReference : hu(e) ? W.noncharacterCharacterReference : mu(e) || e === U.CARRIAGE_RETURN ? W.controlCharacterReference : null;
}
var $u = class {
	constructor(e, t) {
		this.options = e, this.handler = t, this.paused = !1, this.inLoop = !1, this.inForeignNode = !1, this.lastStartTagName = "", this.active = !1, this.state = Z.DATA, this.returnState = Z.DATA, this.entityStartPos = 0, this.consumedAfterSnapshot = -1, this.currentCharacterToken = null, this.currentToken = null, this.currentAttr = {
			name: "",
			value: ""
		}, this.preprocessor = new _u(t), this.currentLocation = this.getCurrentLocation(-1), this.entityDecoder = new Fu(Tu, (e, t) => {
			this.preprocessor.pos = this.entityStartPos + t - 1, this._flushCodePointConsumedAsCharacterReference(e);
		}, t.onParseError ? {
			missingSemicolonAfterCharacterReference: () => {
				this._err(W.missingSemicolonAfterCharacterReference, 1);
			},
			absenceOfDigitsInNumericCharacterReference: (e) => {
				this._err(W.absenceOfDigitsInNumericCharacterReference, this.entityStartPos - this.preprocessor.pos + e);
			},
			validateNumericCharacterReference: (e) => {
				let t = Qu(e);
				t && this._err(t, 1);
			}
		} : void 0);
	}
	_err(e, t = 0) {
		var n, r;
		(r = (n = this.handler).onParseError) == null || r.call(n, this.preprocessor.getError(e, t));
	}
	getCurrentLocation(e) {
		return this.options.sourceCodeLocationInfo ? {
			startLine: this.preprocessor.line,
			startCol: this.preprocessor.col - e,
			startOffset: this.preprocessor.offset - e,
			endLine: -1,
			endCol: -1,
			endOffset: -1
		} : null;
	}
	_runParsingLoop() {
		if (!this.inLoop) {
			for (this.inLoop = !0; this.active && !this.paused;) {
				this.consumedAfterSnapshot = 0;
				let e = this._consume();
				this._ensureHibernation() || this._callState(e);
			}
			this.inLoop = !1;
		}
	}
	pause() {
		this.paused = !0;
	}
	resume(e) {
		if (!this.paused) throw Error("Parser was already resumed");
		this.paused = !1, this.inLoop || (this._runParsingLoop(), this.paused || e?.());
	}
	write(e, t, n) {
		this.active = !0, this.preprocessor.write(e, t), this._runParsingLoop(), this.paused || n?.();
	}
	insertHtmlAtCurrentPos(e) {
		this.active = !0, this.preprocessor.insertHtmlAtCurrentPos(e), this._runParsingLoop();
	}
	_ensureHibernation() {
		return this.preprocessor.endOfChunkHit ? (this.preprocessor.retreat(this.consumedAfterSnapshot), this.consumedAfterSnapshot = 0, this.active = !1, !0) : !1;
	}
	_consume() {
		return this.consumedAfterSnapshot++, this.preprocessor.advance();
	}
	_advanceBy(e) {
		this.consumedAfterSnapshot += e;
		for (let t = 0; t < e; t++) this.preprocessor.advance();
	}
	_consumeSequenceIfMatch(e, t) {
		return this.preprocessor.startsWith(e, t) ? (this._advanceBy(e.length - 1), !0) : !1;
	}
	_createStartTagToken() {
		this.currentToken = {
			type: G.START_TAG,
			tagName: "",
			tagID: Y.UNKNOWN,
			selfClosing: !1,
			ackSelfClosing: !1,
			attrs: [],
			location: this.getCurrentLocation(1)
		};
	}
	_createEndTagToken() {
		this.currentToken = {
			type: G.END_TAG,
			tagName: "",
			tagID: Y.UNKNOWN,
			selfClosing: !1,
			ackSelfClosing: !1,
			attrs: [],
			location: this.getCurrentLocation(2)
		};
	}
	_createCommentToken(e) {
		this.currentToken = {
			type: G.COMMENT,
			data: "",
			location: this.getCurrentLocation(e)
		};
	}
	_createDoctypeToken(e) {
		this.currentToken = {
			type: G.DOCTYPE,
			name: e,
			forceQuirks: !1,
			publicId: null,
			systemId: null,
			location: this.currentLocation
		};
	}
	_createCharacterToken(e, t) {
		this.currentCharacterToken = {
			type: e,
			chars: t,
			location: this.currentLocation
		};
	}
	_createAttr(e) {
		this.currentAttr = {
			name: e,
			value: ""
		}, this.currentLocation = this.getCurrentLocation(0);
	}
	_leaveAttrName() {
		var e;
		let t = this.currentToken;
		if (vu(t, this.currentAttr.name) === null) {
			if (t.attrs.push(this.currentAttr), t.location && this.currentLocation) {
				let n = (e = t.location).attrs ?? (e.attrs = Object.create(null));
				n[this.currentAttr.name] = this.currentLocation, this._leaveAttrValue();
			}
		} else this._err(W.duplicateAttribute);
	}
	_leaveAttrValue() {
		this.currentLocation && (this.currentLocation.endLine = this.preprocessor.line, this.currentLocation.endCol = this.preprocessor.col, this.currentLocation.endOffset = this.preprocessor.offset);
	}
	prepareToken(e) {
		this._emitCurrentCharacterToken(e.location), this.currentToken = null, e.location && (e.location.endLine = this.preprocessor.line, e.location.endCol = this.preprocessor.col + 1, e.location.endOffset = this.preprocessor.offset + 1), this.currentLocation = this.getCurrentLocation(-1);
	}
	emitCurrentTagToken() {
		let e = this.currentToken;
		this.prepareToken(e), e.tagID = Bu(e.tagName), e.type === G.START_TAG ? (this.lastStartTagName = e.tagName, this.handler.onStartTag(e)) : (e.attrs.length > 0 && this._err(W.endTagWithAttributes), e.selfClosing && this._err(W.endTagWithTrailingSolidus), this.handler.onEndTag(e)), this.preprocessor.dropParsedChunk();
	}
	emitCurrentComment(e) {
		this.prepareToken(e), this.handler.onComment(e), this.preprocessor.dropParsedChunk();
	}
	emitCurrentDoctype(e) {
		this.prepareToken(e), this.handler.onDoctype(e), this.preprocessor.dropParsedChunk();
	}
	_emitCurrentCharacterToken(e) {
		if (this.currentCharacterToken) {
			switch (e && this.currentCharacterToken.location && (this.currentCharacterToken.location.endLine = e.startLine, this.currentCharacterToken.location.endCol = e.startCol, this.currentCharacterToken.location.endOffset = e.startOffset), this.currentCharacterToken.type) {
				case G.CHARACTER:
					this.handler.onCharacter(this.currentCharacterToken);
					break;
				case G.NULL_CHARACTER:
					this.handler.onNullCharacter(this.currentCharacterToken);
					break;
				case G.WHITESPACE_CHARACTER: this.handler.onWhitespaceCharacter(this.currentCharacterToken);
			}
			this.currentCharacterToken = null;
		}
	}
	_emitEOFToken() {
		let e = this.getCurrentLocation(0);
		e && (e.endLine = e.startLine, e.endCol = e.startCol, e.endOffset = e.startOffset), this._emitCurrentCharacterToken(e), this.handler.onEof({
			type: G.EOF,
			location: e
		}), this.active = !1;
	}
	_appendCharToCurrentCharacterToken(e, t) {
		if (this.currentCharacterToken) {
			if (this.currentCharacterToken.type === e) {
				this.currentCharacterToken.chars += t;
				return;
			}
			this.currentLocation = this.getCurrentLocation(0), this._emitCurrentCharacterToken(this.currentLocation), this.preprocessor.dropParsedChunk();
		}
		this._createCharacterToken(e, t);
	}
	_emitCodePoint(e) {
		let t = Xu(e) ? G.WHITESPACE_CHARACTER : e === U.NULL ? G.NULL_CHARACTER : G.CHARACTER;
		this._appendCharToCurrentCharacterToken(t, e < 65536 ? String.fromCharCode(e) : String.fromCodePoint(e));
	}
	_emitChars(e) {
		this._appendCharToCurrentCharacterToken(G.CHARACTER, e);
	}
	_startCharacterReference() {
		this.returnState = this.state, this.state = Z.CHARACTER_REFERENCE, this.entityStartPos = this.preprocessor.pos, this.entityDecoder.startEntity(this._isCharacterReferenceInAttribute() ? Pu.Attribute : Pu.Legacy);
	}
	_isCharacterReferenceInAttribute() {
		return this.returnState === Z.ATTRIBUTE_VALUE_DOUBLE_QUOTED || this.returnState === Z.ATTRIBUTE_VALUE_SINGLE_QUOTED || this.returnState === Z.ATTRIBUTE_VALUE_UNQUOTED;
	}
	_flushCodePointConsumedAsCharacterReference(e) {
		this._isCharacterReferenceInAttribute() ? this.currentAttr.value += String.fromCodePoint(e) : this._emitCodePoint(e);
	}
	_callState(e) {
		switch (this.state) {
			case Z.DATA:
				this._stateData(e);
				break;
			case Z.RCDATA:
				this._stateRcdata(e);
				break;
			case Z.RAWTEXT:
				this._stateRawtext(e);
				break;
			case Z.SCRIPT_DATA:
				this._stateScriptData(e);
				break;
			case Z.PLAINTEXT:
				this._statePlaintext(e);
				break;
			case Z.TAG_OPEN:
				this._stateTagOpen(e);
				break;
			case Z.END_TAG_OPEN:
				this._stateEndTagOpen(e);
				break;
			case Z.TAG_NAME:
				this._stateTagName(e);
				break;
			case Z.RCDATA_LESS_THAN_SIGN:
				this._stateRcdataLessThanSign(e);
				break;
			case Z.RCDATA_END_TAG_OPEN:
				this._stateRcdataEndTagOpen(e);
				break;
			case Z.RCDATA_END_TAG_NAME:
				this._stateRcdataEndTagName(e);
				break;
			case Z.RAWTEXT_LESS_THAN_SIGN:
				this._stateRawtextLessThanSign(e);
				break;
			case Z.RAWTEXT_END_TAG_OPEN:
				this._stateRawtextEndTagOpen(e);
				break;
			case Z.RAWTEXT_END_TAG_NAME:
				this._stateRawtextEndTagName(e);
				break;
			case Z.SCRIPT_DATA_LESS_THAN_SIGN:
				this._stateScriptDataLessThanSign(e);
				break;
			case Z.SCRIPT_DATA_END_TAG_OPEN:
				this._stateScriptDataEndTagOpen(e);
				break;
			case Z.SCRIPT_DATA_END_TAG_NAME:
				this._stateScriptDataEndTagName(e);
				break;
			case Z.SCRIPT_DATA_ESCAPE_START:
				this._stateScriptDataEscapeStart(e);
				break;
			case Z.SCRIPT_DATA_ESCAPE_START_DASH:
				this._stateScriptDataEscapeStartDash(e);
				break;
			case Z.SCRIPT_DATA_ESCAPED:
				this._stateScriptDataEscaped(e);
				break;
			case Z.SCRIPT_DATA_ESCAPED_DASH:
				this._stateScriptDataEscapedDash(e);
				break;
			case Z.SCRIPT_DATA_ESCAPED_DASH_DASH:
				this._stateScriptDataEscapedDashDash(e);
				break;
			case Z.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN:
				this._stateScriptDataEscapedLessThanSign(e);
				break;
			case Z.SCRIPT_DATA_ESCAPED_END_TAG_OPEN:
				this._stateScriptDataEscapedEndTagOpen(e);
				break;
			case Z.SCRIPT_DATA_ESCAPED_END_TAG_NAME:
				this._stateScriptDataEscapedEndTagName(e);
				break;
			case Z.SCRIPT_DATA_DOUBLE_ESCAPE_START:
				this._stateScriptDataDoubleEscapeStart(e);
				break;
			case Z.SCRIPT_DATA_DOUBLE_ESCAPED:
				this._stateScriptDataDoubleEscaped(e);
				break;
			case Z.SCRIPT_DATA_DOUBLE_ESCAPED_DASH:
				this._stateScriptDataDoubleEscapedDash(e);
				break;
			case Z.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH:
				this._stateScriptDataDoubleEscapedDashDash(e);
				break;
			case Z.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN:
				this._stateScriptDataDoubleEscapedLessThanSign(e);
				break;
			case Z.SCRIPT_DATA_DOUBLE_ESCAPE_END:
				this._stateScriptDataDoubleEscapeEnd(e);
				break;
			case Z.BEFORE_ATTRIBUTE_NAME:
				this._stateBeforeAttributeName(e);
				break;
			case Z.ATTRIBUTE_NAME:
				this._stateAttributeName(e);
				break;
			case Z.AFTER_ATTRIBUTE_NAME:
				this._stateAfterAttributeName(e);
				break;
			case Z.BEFORE_ATTRIBUTE_VALUE:
				this._stateBeforeAttributeValue(e);
				break;
			case Z.ATTRIBUTE_VALUE_DOUBLE_QUOTED:
				this._stateAttributeValueDoubleQuoted(e);
				break;
			case Z.ATTRIBUTE_VALUE_SINGLE_QUOTED:
				this._stateAttributeValueSingleQuoted(e);
				break;
			case Z.ATTRIBUTE_VALUE_UNQUOTED:
				this._stateAttributeValueUnquoted(e);
				break;
			case Z.AFTER_ATTRIBUTE_VALUE_QUOTED:
				this._stateAfterAttributeValueQuoted(e);
				break;
			case Z.SELF_CLOSING_START_TAG:
				this._stateSelfClosingStartTag(e);
				break;
			case Z.BOGUS_COMMENT:
				this._stateBogusComment(e);
				break;
			case Z.MARKUP_DECLARATION_OPEN:
				this._stateMarkupDeclarationOpen(e);
				break;
			case Z.COMMENT_START:
				this._stateCommentStart(e);
				break;
			case Z.COMMENT_START_DASH:
				this._stateCommentStartDash(e);
				break;
			case Z.COMMENT:
				this._stateComment(e);
				break;
			case Z.COMMENT_LESS_THAN_SIGN:
				this._stateCommentLessThanSign(e);
				break;
			case Z.COMMENT_LESS_THAN_SIGN_BANG:
				this._stateCommentLessThanSignBang(e);
				break;
			case Z.COMMENT_LESS_THAN_SIGN_BANG_DASH:
				this._stateCommentLessThanSignBangDash(e);
				break;
			case Z.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH:
				this._stateCommentLessThanSignBangDashDash(e);
				break;
			case Z.COMMENT_END_DASH:
				this._stateCommentEndDash(e);
				break;
			case Z.COMMENT_END:
				this._stateCommentEnd(e);
				break;
			case Z.COMMENT_END_BANG:
				this._stateCommentEndBang(e);
				break;
			case Z.DOCTYPE:
				this._stateDoctype(e);
				break;
			case Z.BEFORE_DOCTYPE_NAME:
				this._stateBeforeDoctypeName(e);
				break;
			case Z.DOCTYPE_NAME:
				this._stateDoctypeName(e);
				break;
			case Z.AFTER_DOCTYPE_NAME:
				this._stateAfterDoctypeName(e);
				break;
			case Z.AFTER_DOCTYPE_PUBLIC_KEYWORD:
				this._stateAfterDoctypePublicKeyword(e);
				break;
			case Z.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER:
				this._stateBeforeDoctypePublicIdentifier(e);
				break;
			case Z.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED:
				this._stateDoctypePublicIdentifierDoubleQuoted(e);
				break;
			case Z.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED:
				this._stateDoctypePublicIdentifierSingleQuoted(e);
				break;
			case Z.AFTER_DOCTYPE_PUBLIC_IDENTIFIER:
				this._stateAfterDoctypePublicIdentifier(e);
				break;
			case Z.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS:
				this._stateBetweenDoctypePublicAndSystemIdentifiers(e);
				break;
			case Z.AFTER_DOCTYPE_SYSTEM_KEYWORD:
				this._stateAfterDoctypeSystemKeyword(e);
				break;
			case Z.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER:
				this._stateBeforeDoctypeSystemIdentifier(e);
				break;
			case Z.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED:
				this._stateDoctypeSystemIdentifierDoubleQuoted(e);
				break;
			case Z.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED:
				this._stateDoctypeSystemIdentifierSingleQuoted(e);
				break;
			case Z.AFTER_DOCTYPE_SYSTEM_IDENTIFIER:
				this._stateAfterDoctypeSystemIdentifier(e);
				break;
			case Z.BOGUS_DOCTYPE:
				this._stateBogusDoctype(e);
				break;
			case Z.CDATA_SECTION:
				this._stateCdataSection(e);
				break;
			case Z.CDATA_SECTION_BRACKET:
				this._stateCdataSectionBracket(e);
				break;
			case Z.CDATA_SECTION_END:
				this._stateCdataSectionEnd(e);
				break;
			case Z.CHARACTER_REFERENCE:
				this._stateCharacterReference();
				break;
			case Z.AMBIGUOUS_AMPERSAND:
				this._stateAmbiguousAmpersand(e);
				break;
			default: throw Error("Unknown state");
		}
	}
	_stateData(e) {
		switch (e) {
			case U.LESS_THAN_SIGN:
				this.state = Z.TAG_OPEN;
				break;
			case U.AMPERSAND:
				this._startCharacterReference();
				break;
			case U.NULL:
				this._err(W.unexpectedNullCharacter), this._emitCodePoint(e);
				break;
			case U.EOF:
				this._emitEOFToken();
				break;
			default: this._emitCodePoint(e);
		}
	}
	_stateRcdata(e) {
		switch (e) {
			case U.AMPERSAND:
				this._startCharacterReference();
				break;
			case U.LESS_THAN_SIGN:
				this.state = Z.RCDATA_LESS_THAN_SIGN;
				break;
			case U.NULL:
				this._err(W.unexpectedNullCharacter), this._emitChars("�");
				break;
			case U.EOF:
				this._emitEOFToken();
				break;
			default: this._emitCodePoint(e);
		}
	}
	_stateRawtext(e) {
		switch (e) {
			case U.LESS_THAN_SIGN:
				this.state = Z.RAWTEXT_LESS_THAN_SIGN;
				break;
			case U.NULL:
				this._err(W.unexpectedNullCharacter), this._emitChars("�");
				break;
			case U.EOF:
				this._emitEOFToken();
				break;
			default: this._emitCodePoint(e);
		}
	}
	_stateScriptData(e) {
		switch (e) {
			case U.LESS_THAN_SIGN:
				this.state = Z.SCRIPT_DATA_LESS_THAN_SIGN;
				break;
			case U.NULL:
				this._err(W.unexpectedNullCharacter), this._emitChars("�");
				break;
			case U.EOF:
				this._emitEOFToken();
				break;
			default: this._emitCodePoint(e);
		}
	}
	_statePlaintext(e) {
		switch (e) {
			case U.NULL:
				this._err(W.unexpectedNullCharacter), this._emitChars("�");
				break;
			case U.EOF:
				this._emitEOFToken();
				break;
			default: this._emitCodePoint(e);
		}
	}
	_stateTagOpen(e) {
		if (qu(e)) this._createStartTagToken(), this.state = Z.TAG_NAME, this._stateTagName(e);
		else switch (e) {
			case U.EXCLAMATION_MARK:
				this.state = Z.MARKUP_DECLARATION_OPEN;
				break;
			case U.SOLIDUS:
				this.state = Z.END_TAG_OPEN;
				break;
			case U.QUESTION_MARK:
				this._err(W.unexpectedQuestionMarkInsteadOfTagName), this._createCommentToken(1), this.state = Z.BOGUS_COMMENT, this._stateBogusComment(e);
				break;
			case U.EOF:
				this._err(W.eofBeforeTagName), this._emitChars("<"), this._emitEOFToken();
				break;
			default: this._err(W.invalidFirstCharacterOfTagName), this._emitChars("<"), this.state = Z.DATA, this._stateData(e);
		}
	}
	_stateEndTagOpen(e) {
		if (qu(e)) this._createEndTagToken(), this.state = Z.TAG_NAME, this._stateTagName(e);
		else switch (e) {
			case U.GREATER_THAN_SIGN:
				this._err(W.missingEndTagName), this.state = Z.DATA;
				break;
			case U.EOF:
				this._err(W.eofBeforeTagName), this._emitChars("</"), this._emitEOFToken();
				break;
			default: this._err(W.invalidFirstCharacterOfTagName), this._createCommentToken(2), this.state = Z.BOGUS_COMMENT, this._stateBogusComment(e);
		}
	}
	_stateTagName(e) {
		let t = this.currentToken;
		switch (e) {
			case U.SPACE:
			case U.LINE_FEED:
			case U.TABULATION:
			case U.FORM_FEED:
				this.state = Z.BEFORE_ATTRIBUTE_NAME;
				break;
			case U.SOLIDUS:
				this.state = Z.SELF_CLOSING_START_TAG;
				break;
			case U.GREATER_THAN_SIGN:
				this.state = Z.DATA, this.emitCurrentTagToken();
				break;
			case U.NULL:
				this._err(W.unexpectedNullCharacter), t.tagName += "�";
				break;
			case U.EOF:
				this._err(W.eofInTag), this._emitEOFToken();
				break;
			default: t.tagName += String.fromCodePoint(Gu(e) ? Yu(e) : e);
		}
	}
	_stateRcdataLessThanSign(e) {
		e === U.SOLIDUS ? this.state = Z.RCDATA_END_TAG_OPEN : (this._emitChars("<"), this.state = Z.RCDATA, this._stateRcdata(e));
	}
	_stateRcdataEndTagOpen(e) {
		qu(e) ? (this.state = Z.RCDATA_END_TAG_NAME, this._stateRcdataEndTagName(e)) : (this._emitChars("</"), this.state = Z.RCDATA, this._stateRcdata(e));
	}
	handleSpecialEndTag(e) {
		if (!this.preprocessor.startsWith(this.lastStartTagName, !1)) return !this._ensureHibernation();
		this._createEndTagToken();
		let t = this.currentToken;
		switch (t.tagName = this.lastStartTagName, this.preprocessor.peek(this.lastStartTagName.length)) {
			case U.SPACE:
			case U.LINE_FEED:
			case U.TABULATION:
			case U.FORM_FEED: return this._advanceBy(this.lastStartTagName.length), this.state = Z.BEFORE_ATTRIBUTE_NAME, !1;
			case U.SOLIDUS: return this._advanceBy(this.lastStartTagName.length), this.state = Z.SELF_CLOSING_START_TAG, !1;
			case U.GREATER_THAN_SIGN: return this._advanceBy(this.lastStartTagName.length), this.emitCurrentTagToken(), this.state = Z.DATA, !1;
			default: return !this._ensureHibernation();
		}
	}
	_stateRcdataEndTagName(e) {
		this.handleSpecialEndTag(e) && (this._emitChars("</"), this.state = Z.RCDATA, this._stateRcdata(e));
	}
	_stateRawtextLessThanSign(e) {
		e === U.SOLIDUS ? this.state = Z.RAWTEXT_END_TAG_OPEN : (this._emitChars("<"), this.state = Z.RAWTEXT, this._stateRawtext(e));
	}
	_stateRawtextEndTagOpen(e) {
		qu(e) ? (this.state = Z.RAWTEXT_END_TAG_NAME, this._stateRawtextEndTagName(e)) : (this._emitChars("</"), this.state = Z.RAWTEXT, this._stateRawtext(e));
	}
	_stateRawtextEndTagName(e) {
		this.handleSpecialEndTag(e) && (this._emitChars("</"), this.state = Z.RAWTEXT, this._stateRawtext(e));
	}
	_stateScriptDataLessThanSign(e) {
		switch (e) {
			case U.SOLIDUS:
				this.state = Z.SCRIPT_DATA_END_TAG_OPEN;
				break;
			case U.EXCLAMATION_MARK:
				this.state = Z.SCRIPT_DATA_ESCAPE_START, this._emitChars("<!");
				break;
			default: this._emitChars("<"), this.state = Z.SCRIPT_DATA, this._stateScriptData(e);
		}
	}
	_stateScriptDataEndTagOpen(e) {
		qu(e) ? (this.state = Z.SCRIPT_DATA_END_TAG_NAME, this._stateScriptDataEndTagName(e)) : (this._emitChars("</"), this.state = Z.SCRIPT_DATA, this._stateScriptData(e));
	}
	_stateScriptDataEndTagName(e) {
		this.handleSpecialEndTag(e) && (this._emitChars("</"), this.state = Z.SCRIPT_DATA, this._stateScriptData(e));
	}
	_stateScriptDataEscapeStart(e) {
		e === U.HYPHEN_MINUS ? (this.state = Z.SCRIPT_DATA_ESCAPE_START_DASH, this._emitChars("-")) : (this.state = Z.SCRIPT_DATA, this._stateScriptData(e));
	}
	_stateScriptDataEscapeStartDash(e) {
		e === U.HYPHEN_MINUS ? (this.state = Z.SCRIPT_DATA_ESCAPED_DASH_DASH, this._emitChars("-")) : (this.state = Z.SCRIPT_DATA, this._stateScriptData(e));
	}
	_stateScriptDataEscaped(e) {
		switch (e) {
			case U.HYPHEN_MINUS:
				this.state = Z.SCRIPT_DATA_ESCAPED_DASH, this._emitChars("-");
				break;
			case U.LESS_THAN_SIGN:
				this.state = Z.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
				break;
			case U.NULL:
				this._err(W.unexpectedNullCharacter), this._emitChars("�");
				break;
			case U.EOF:
				this._err(W.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
				break;
			default: this._emitCodePoint(e);
		}
	}
	_stateScriptDataEscapedDash(e) {
		switch (e) {
			case U.HYPHEN_MINUS:
				this.state = Z.SCRIPT_DATA_ESCAPED_DASH_DASH, this._emitChars("-");
				break;
			case U.LESS_THAN_SIGN:
				this.state = Z.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
				break;
			case U.NULL:
				this._err(W.unexpectedNullCharacter), this.state = Z.SCRIPT_DATA_ESCAPED, this._emitChars("�");
				break;
			case U.EOF:
				this._err(W.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
				break;
			default: this.state = Z.SCRIPT_DATA_ESCAPED, this._emitCodePoint(e);
		}
	}
	_stateScriptDataEscapedDashDash(e) {
		switch (e) {
			case U.HYPHEN_MINUS:
				this._emitChars("-");
				break;
			case U.LESS_THAN_SIGN:
				this.state = Z.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
				break;
			case U.GREATER_THAN_SIGN:
				this.state = Z.SCRIPT_DATA, this._emitChars(">");
				break;
			case U.NULL:
				this._err(W.unexpectedNullCharacter), this.state = Z.SCRIPT_DATA_ESCAPED, this._emitChars("�");
				break;
			case U.EOF:
				this._err(W.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
				break;
			default: this.state = Z.SCRIPT_DATA_ESCAPED, this._emitCodePoint(e);
		}
	}
	_stateScriptDataEscapedLessThanSign(e) {
		e === U.SOLIDUS ? this.state = Z.SCRIPT_DATA_ESCAPED_END_TAG_OPEN : qu(e) ? (this._emitChars("<"), this.state = Z.SCRIPT_DATA_DOUBLE_ESCAPE_START, this._stateScriptDataDoubleEscapeStart(e)) : (this._emitChars("<"), this.state = Z.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(e));
	}
	_stateScriptDataEscapedEndTagOpen(e) {
		qu(e) ? (this.state = Z.SCRIPT_DATA_ESCAPED_END_TAG_NAME, this._stateScriptDataEscapedEndTagName(e)) : (this._emitChars("</"), this.state = Z.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(e));
	}
	_stateScriptDataEscapedEndTagName(e) {
		this.handleSpecialEndTag(e) && (this._emitChars("</"), this.state = Z.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(e));
	}
	_stateScriptDataDoubleEscapeStart(e) {
		if (this.preprocessor.startsWith(uu.SCRIPT, !1) && Zu(this.preprocessor.peek(uu.SCRIPT.length))) {
			this._emitCodePoint(e);
			for (let e = 0; e < uu.SCRIPT.length; e++) this._emitCodePoint(this._consume());
			this.state = Z.SCRIPT_DATA_DOUBLE_ESCAPED;
		} else this._ensureHibernation() || (this.state = Z.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(e));
	}
	_stateScriptDataDoubleEscaped(e) {
		switch (e) {
			case U.HYPHEN_MINUS:
				this.state = Z.SCRIPT_DATA_DOUBLE_ESCAPED_DASH, this._emitChars("-");
				break;
			case U.LESS_THAN_SIGN:
				this.state = Z.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
				break;
			case U.NULL:
				this._err(W.unexpectedNullCharacter), this._emitChars("�");
				break;
			case U.EOF:
				this._err(W.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
				break;
			default: this._emitCodePoint(e);
		}
	}
	_stateScriptDataDoubleEscapedDash(e) {
		switch (e) {
			case U.HYPHEN_MINUS:
				this.state = Z.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH, this._emitChars("-");
				break;
			case U.LESS_THAN_SIGN:
				this.state = Z.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
				break;
			case U.NULL:
				this._err(W.unexpectedNullCharacter), this.state = Z.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitChars("�");
				break;
			case U.EOF:
				this._err(W.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
				break;
			default: this.state = Z.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitCodePoint(e);
		}
	}
	_stateScriptDataDoubleEscapedDashDash(e) {
		switch (e) {
			case U.HYPHEN_MINUS:
				this._emitChars("-");
				break;
			case U.LESS_THAN_SIGN:
				this.state = Z.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
				break;
			case U.GREATER_THAN_SIGN:
				this.state = Z.SCRIPT_DATA, this._emitChars(">");
				break;
			case U.NULL:
				this._err(W.unexpectedNullCharacter), this.state = Z.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitChars("�");
				break;
			case U.EOF:
				this._err(W.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
				break;
			default: this.state = Z.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitCodePoint(e);
		}
	}
	_stateScriptDataDoubleEscapedLessThanSign(e) {
		e === U.SOLIDUS ? (this.state = Z.SCRIPT_DATA_DOUBLE_ESCAPE_END, this._emitChars("/")) : (this.state = Z.SCRIPT_DATA_DOUBLE_ESCAPED, this._stateScriptDataDoubleEscaped(e));
	}
	_stateScriptDataDoubleEscapeEnd(e) {
		if (this.preprocessor.startsWith(uu.SCRIPT, !1) && Zu(this.preprocessor.peek(uu.SCRIPT.length))) {
			this._emitCodePoint(e);
			for (let e = 0; e < uu.SCRIPT.length; e++) this._emitCodePoint(this._consume());
			this.state = Z.SCRIPT_DATA_ESCAPED;
		} else this._ensureHibernation() || (this.state = Z.SCRIPT_DATA_DOUBLE_ESCAPED, this._stateScriptDataDoubleEscaped(e));
	}
	_stateBeforeAttributeName(e) {
		switch (e) {
			case U.SPACE:
			case U.LINE_FEED:
			case U.TABULATION:
			case U.FORM_FEED: break;
			case U.SOLIDUS:
			case U.GREATER_THAN_SIGN:
			case U.EOF:
				this.state = Z.AFTER_ATTRIBUTE_NAME, this._stateAfterAttributeName(e);
				break;
			case U.EQUALS_SIGN:
				this._err(W.unexpectedEqualsSignBeforeAttributeName), this._createAttr("="), this.state = Z.ATTRIBUTE_NAME;
				break;
			default: this._createAttr(""), this.state = Z.ATTRIBUTE_NAME, this._stateAttributeName(e);
		}
	}
	_stateAttributeName(e) {
		switch (e) {
			case U.SPACE:
			case U.LINE_FEED:
			case U.TABULATION:
			case U.FORM_FEED:
			case U.SOLIDUS:
			case U.GREATER_THAN_SIGN:
			case U.EOF:
				this._leaveAttrName(), this.state = Z.AFTER_ATTRIBUTE_NAME, this._stateAfterAttributeName(e);
				break;
			case U.EQUALS_SIGN:
				this._leaveAttrName(), this.state = Z.BEFORE_ATTRIBUTE_VALUE;
				break;
			case U.QUOTATION_MARK:
			case U.APOSTROPHE:
			case U.LESS_THAN_SIGN:
				this._err(W.unexpectedCharacterInAttributeName), this.currentAttr.name += String.fromCodePoint(e);
				break;
			case U.NULL:
				this._err(W.unexpectedNullCharacter), this.currentAttr.name += "�";
				break;
			default: this.currentAttr.name += String.fromCodePoint(Gu(e) ? Yu(e) : e);
		}
	}
	_stateAfterAttributeName(e) {
		switch (e) {
			case U.SPACE:
			case U.LINE_FEED:
			case U.TABULATION:
			case U.FORM_FEED: break;
			case U.SOLIDUS:
				this.state = Z.SELF_CLOSING_START_TAG;
				break;
			case U.EQUALS_SIGN:
				this.state = Z.BEFORE_ATTRIBUTE_VALUE;
				break;
			case U.GREATER_THAN_SIGN:
				this.state = Z.DATA, this.emitCurrentTagToken();
				break;
			case U.EOF:
				this._err(W.eofInTag), this._emitEOFToken();
				break;
			default: this._createAttr(""), this.state = Z.ATTRIBUTE_NAME, this._stateAttributeName(e);
		}
	}
	_stateBeforeAttributeValue(e) {
		switch (e) {
			case U.SPACE:
			case U.LINE_FEED:
			case U.TABULATION:
			case U.FORM_FEED: break;
			case U.QUOTATION_MARK:
				this.state = Z.ATTRIBUTE_VALUE_DOUBLE_QUOTED;
				break;
			case U.APOSTROPHE:
				this.state = Z.ATTRIBUTE_VALUE_SINGLE_QUOTED;
				break;
			case U.GREATER_THAN_SIGN:
				this._err(W.missingAttributeValue), this.state = Z.DATA, this.emitCurrentTagToken();
				break;
			default: this.state = Z.ATTRIBUTE_VALUE_UNQUOTED, this._stateAttributeValueUnquoted(e);
		}
	}
	_stateAttributeValueDoubleQuoted(e) {
		switch (e) {
			case U.QUOTATION_MARK:
				this.state = Z.AFTER_ATTRIBUTE_VALUE_QUOTED;
				break;
			case U.AMPERSAND:
				this._startCharacterReference();
				break;
			case U.NULL:
				this._err(W.unexpectedNullCharacter), this.currentAttr.value += "�";
				break;
			case U.EOF:
				this._err(W.eofInTag), this._emitEOFToken();
				break;
			default: this.currentAttr.value += String.fromCodePoint(e);
		}
	}
	_stateAttributeValueSingleQuoted(e) {
		switch (e) {
			case U.APOSTROPHE:
				this.state = Z.AFTER_ATTRIBUTE_VALUE_QUOTED;
				break;
			case U.AMPERSAND:
				this._startCharacterReference();
				break;
			case U.NULL:
				this._err(W.unexpectedNullCharacter), this.currentAttr.value += "�";
				break;
			case U.EOF:
				this._err(W.eofInTag), this._emitEOFToken();
				break;
			default: this.currentAttr.value += String.fromCodePoint(e);
		}
	}
	_stateAttributeValueUnquoted(e) {
		switch (e) {
			case U.SPACE:
			case U.LINE_FEED:
			case U.TABULATION:
			case U.FORM_FEED:
				this._leaveAttrValue(), this.state = Z.BEFORE_ATTRIBUTE_NAME;
				break;
			case U.AMPERSAND:
				this._startCharacterReference();
				break;
			case U.GREATER_THAN_SIGN:
				this._leaveAttrValue(), this.state = Z.DATA, this.emitCurrentTagToken();
				break;
			case U.NULL:
				this._err(W.unexpectedNullCharacter), this.currentAttr.value += "�";
				break;
			case U.QUOTATION_MARK:
			case U.APOSTROPHE:
			case U.LESS_THAN_SIGN:
			case U.EQUALS_SIGN:
			case U.GRAVE_ACCENT:
				this._err(W.unexpectedCharacterInUnquotedAttributeValue), this.currentAttr.value += String.fromCodePoint(e);
				break;
			case U.EOF:
				this._err(W.eofInTag), this._emitEOFToken();
				break;
			default: this.currentAttr.value += String.fromCodePoint(e);
		}
	}
	_stateAfterAttributeValueQuoted(e) {
		switch (e) {
			case U.SPACE:
			case U.LINE_FEED:
			case U.TABULATION:
			case U.FORM_FEED:
				this._leaveAttrValue(), this.state = Z.BEFORE_ATTRIBUTE_NAME;
				break;
			case U.SOLIDUS:
				this._leaveAttrValue(), this.state = Z.SELF_CLOSING_START_TAG;
				break;
			case U.GREATER_THAN_SIGN:
				this._leaveAttrValue(), this.state = Z.DATA, this.emitCurrentTagToken();
				break;
			case U.EOF:
				this._err(W.eofInTag), this._emitEOFToken();
				break;
			default: this._err(W.missingWhitespaceBetweenAttributes), this.state = Z.BEFORE_ATTRIBUTE_NAME, this._stateBeforeAttributeName(e);
		}
	}
	_stateSelfClosingStartTag(e) {
		switch (e) {
			case U.GREATER_THAN_SIGN: {
				let e = this.currentToken;
				e.selfClosing = !0, this.state = Z.DATA, this.emitCurrentTagToken();
				break;
			}
			case U.EOF:
				this._err(W.eofInTag), this._emitEOFToken();
				break;
			default: this._err(W.unexpectedSolidusInTag), this.state = Z.BEFORE_ATTRIBUTE_NAME, this._stateBeforeAttributeName(e);
		}
	}
	_stateBogusComment(e) {
		let t = this.currentToken;
		switch (e) {
			case U.GREATER_THAN_SIGN:
				this.state = Z.DATA, this.emitCurrentComment(t);
				break;
			case U.EOF:
				this.emitCurrentComment(t), this._emitEOFToken();
				break;
			case U.NULL:
				this._err(W.unexpectedNullCharacter), t.data += "�";
				break;
			default: t.data += String.fromCodePoint(e);
		}
	}
	_stateMarkupDeclarationOpen(e) {
		this._consumeSequenceIfMatch(uu.DASH_DASH, !0) ? (this._createCommentToken(uu.DASH_DASH.length + 1), this.state = Z.COMMENT_START) : this._consumeSequenceIfMatch(uu.DOCTYPE, !1) ? (this.currentLocation = this.getCurrentLocation(uu.DOCTYPE.length + 1), this.state = Z.DOCTYPE) : this._consumeSequenceIfMatch(uu.CDATA_START, !0) ? this.inForeignNode ? this.state = Z.CDATA_SECTION : (this._err(W.cdataInHtmlContent), this._createCommentToken(uu.CDATA_START.length + 1), this.currentToken.data = "[CDATA[", this.state = Z.BOGUS_COMMENT) : this._ensureHibernation() || (this._err(W.incorrectlyOpenedComment), this._createCommentToken(2), this.state = Z.BOGUS_COMMENT, this._stateBogusComment(e));
	}
	_stateCommentStart(e) {
		switch (e) {
			case U.HYPHEN_MINUS:
				this.state = Z.COMMENT_START_DASH;
				break;
			case U.GREATER_THAN_SIGN: {
				this._err(W.abruptClosingOfEmptyComment), this.state = Z.DATA;
				let e = this.currentToken;
				this.emitCurrentComment(e);
				break;
			}
			default: this.state = Z.COMMENT, this._stateComment(e);
		}
	}
	_stateCommentStartDash(e) {
		let t = this.currentToken;
		switch (e) {
			case U.HYPHEN_MINUS:
				this.state = Z.COMMENT_END;
				break;
			case U.GREATER_THAN_SIGN:
				this._err(W.abruptClosingOfEmptyComment), this.state = Z.DATA, this.emitCurrentComment(t);
				break;
			case U.EOF:
				this._err(W.eofInComment), this.emitCurrentComment(t), this._emitEOFToken();
				break;
			default: t.data += "-", this.state = Z.COMMENT, this._stateComment(e);
		}
	}
	_stateComment(e) {
		let t = this.currentToken;
		switch (e) {
			case U.HYPHEN_MINUS:
				this.state = Z.COMMENT_END_DASH;
				break;
			case U.LESS_THAN_SIGN:
				t.data += "<", this.state = Z.COMMENT_LESS_THAN_SIGN;
				break;
			case U.NULL:
				this._err(W.unexpectedNullCharacter), t.data += "�";
				break;
			case U.EOF:
				this._err(W.eofInComment), this.emitCurrentComment(t), this._emitEOFToken();
				break;
			default: t.data += String.fromCodePoint(e);
		}
	}
	_stateCommentLessThanSign(e) {
		let t = this.currentToken;
		switch (e) {
			case U.EXCLAMATION_MARK:
				t.data += "!", this.state = Z.COMMENT_LESS_THAN_SIGN_BANG;
				break;
			case U.LESS_THAN_SIGN:
				t.data += "<";
				break;
			default: this.state = Z.COMMENT, this._stateComment(e);
		}
	}
	_stateCommentLessThanSignBang(e) {
		e === U.HYPHEN_MINUS ? this.state = Z.COMMENT_LESS_THAN_SIGN_BANG_DASH : (this.state = Z.COMMENT, this._stateComment(e));
	}
	_stateCommentLessThanSignBangDash(e) {
		e === U.HYPHEN_MINUS ? this.state = Z.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH : (this.state = Z.COMMENT_END_DASH, this._stateCommentEndDash(e));
	}
	_stateCommentLessThanSignBangDashDash(e) {
		e !== U.GREATER_THAN_SIGN && e !== U.EOF && this._err(W.nestedComment), this.state = Z.COMMENT_END, this._stateCommentEnd(e);
	}
	_stateCommentEndDash(e) {
		let t = this.currentToken;
		switch (e) {
			case U.HYPHEN_MINUS:
				this.state = Z.COMMENT_END;
				break;
			case U.EOF:
				this._err(W.eofInComment), this.emitCurrentComment(t), this._emitEOFToken();
				break;
			default: t.data += "-", this.state = Z.COMMENT, this._stateComment(e);
		}
	}
	_stateCommentEnd(e) {
		let t = this.currentToken;
		switch (e) {
			case U.GREATER_THAN_SIGN:
				this.state = Z.DATA, this.emitCurrentComment(t);
				break;
			case U.EXCLAMATION_MARK:
				this.state = Z.COMMENT_END_BANG;
				break;
			case U.HYPHEN_MINUS:
				t.data += "-";
				break;
			case U.EOF:
				this._err(W.eofInComment), this.emitCurrentComment(t), this._emitEOFToken();
				break;
			default: t.data += "--", this.state = Z.COMMENT, this._stateComment(e);
		}
	}
	_stateCommentEndBang(e) {
		let t = this.currentToken;
		switch (e) {
			case U.HYPHEN_MINUS:
				t.data += "--!", this.state = Z.COMMENT_END_DASH;
				break;
			case U.GREATER_THAN_SIGN:
				this._err(W.incorrectlyClosedComment), this.state = Z.DATA, this.emitCurrentComment(t);
				break;
			case U.EOF:
				this._err(W.eofInComment), this.emitCurrentComment(t), this._emitEOFToken();
				break;
			default: t.data += "--!", this.state = Z.COMMENT, this._stateComment(e);
		}
	}
	_stateDoctype(e) {
		switch (e) {
			case U.SPACE:
			case U.LINE_FEED:
			case U.TABULATION:
			case U.FORM_FEED:
				this.state = Z.BEFORE_DOCTYPE_NAME;
				break;
			case U.GREATER_THAN_SIGN:
				this.state = Z.BEFORE_DOCTYPE_NAME, this._stateBeforeDoctypeName(e);
				break;
			case U.EOF: {
				this._err(W.eofInDoctype), this._createDoctypeToken(null);
				let e = this.currentToken;
				e.forceQuirks = !0, this.emitCurrentDoctype(e), this._emitEOFToken();
				break;
			}
			default: this._err(W.missingWhitespaceBeforeDoctypeName), this.state = Z.BEFORE_DOCTYPE_NAME, this._stateBeforeDoctypeName(e);
		}
	}
	_stateBeforeDoctypeName(e) {
		if (Gu(e)) this._createDoctypeToken(String.fromCharCode(Yu(e))), this.state = Z.DOCTYPE_NAME;
		else switch (e) {
			case U.SPACE:
			case U.LINE_FEED:
			case U.TABULATION:
			case U.FORM_FEED: break;
			case U.NULL:
				this._err(W.unexpectedNullCharacter), this._createDoctypeToken("�"), this.state = Z.DOCTYPE_NAME;
				break;
			case U.GREATER_THAN_SIGN: {
				this._err(W.missingDoctypeName), this._createDoctypeToken(null);
				let e = this.currentToken;
				e.forceQuirks = !0, this.emitCurrentDoctype(e), this.state = Z.DATA;
				break;
			}
			case U.EOF: {
				this._err(W.eofInDoctype), this._createDoctypeToken(null);
				let e = this.currentToken;
				e.forceQuirks = !0, this.emitCurrentDoctype(e), this._emitEOFToken();
				break;
			}
			default: this._createDoctypeToken(String.fromCodePoint(e)), this.state = Z.DOCTYPE_NAME;
		}
	}
	_stateDoctypeName(e) {
		let t = this.currentToken;
		switch (e) {
			case U.SPACE:
			case U.LINE_FEED:
			case U.TABULATION:
			case U.FORM_FEED:
				this.state = Z.AFTER_DOCTYPE_NAME;
				break;
			case U.GREATER_THAN_SIGN:
				this.state = Z.DATA, this.emitCurrentDoctype(t);
				break;
			case U.NULL:
				this._err(W.unexpectedNullCharacter), t.name += "�";
				break;
			case U.EOF:
				this._err(W.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: t.name += String.fromCodePoint(Gu(e) ? Yu(e) : e);
		}
	}
	_stateAfterDoctypeName(e) {
		let t = this.currentToken;
		switch (e) {
			case U.SPACE:
			case U.LINE_FEED:
			case U.TABULATION:
			case U.FORM_FEED: break;
			case U.GREATER_THAN_SIGN:
				this.state = Z.DATA, this.emitCurrentDoctype(t);
				break;
			case U.EOF:
				this._err(W.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: this._consumeSequenceIfMatch(uu.PUBLIC, !1) ? this.state = Z.AFTER_DOCTYPE_PUBLIC_KEYWORD : this._consumeSequenceIfMatch(uu.SYSTEM, !1) ? this.state = Z.AFTER_DOCTYPE_SYSTEM_KEYWORD : this._ensureHibernation() || (this._err(W.invalidCharacterSequenceAfterDoctypeName), t.forceQuirks = !0, this.state = Z.BOGUS_DOCTYPE, this._stateBogusDoctype(e));
		}
	}
	_stateAfterDoctypePublicKeyword(e) {
		let t = this.currentToken;
		switch (e) {
			case U.SPACE:
			case U.LINE_FEED:
			case U.TABULATION:
			case U.FORM_FEED:
				this.state = Z.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER;
				break;
			case U.QUOTATION_MARK:
				this._err(W.missingWhitespaceAfterDoctypePublicKeyword), t.publicId = "", this.state = Z.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
				break;
			case U.APOSTROPHE:
				this._err(W.missingWhitespaceAfterDoctypePublicKeyword), t.publicId = "", this.state = Z.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
				break;
			case U.GREATER_THAN_SIGN:
				this._err(W.missingDoctypePublicIdentifier), t.forceQuirks = !0, this.state = Z.DATA, this.emitCurrentDoctype(t);
				break;
			case U.EOF:
				this._err(W.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: this._err(W.missingQuoteBeforeDoctypePublicIdentifier), t.forceQuirks = !0, this.state = Z.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
		}
	}
	_stateBeforeDoctypePublicIdentifier(e) {
		let t = this.currentToken;
		switch (e) {
			case U.SPACE:
			case U.LINE_FEED:
			case U.TABULATION:
			case U.FORM_FEED: break;
			case U.QUOTATION_MARK:
				t.publicId = "", this.state = Z.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
				break;
			case U.APOSTROPHE:
				t.publicId = "", this.state = Z.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
				break;
			case U.GREATER_THAN_SIGN:
				this._err(W.missingDoctypePublicIdentifier), t.forceQuirks = !0, this.state = Z.DATA, this.emitCurrentDoctype(t);
				break;
			case U.EOF:
				this._err(W.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: this._err(W.missingQuoteBeforeDoctypePublicIdentifier), t.forceQuirks = !0, this.state = Z.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
		}
	}
	_stateDoctypePublicIdentifierDoubleQuoted(e) {
		let t = this.currentToken;
		switch (e) {
			case U.QUOTATION_MARK:
				this.state = Z.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
				break;
			case U.NULL:
				this._err(W.unexpectedNullCharacter), t.publicId += "�";
				break;
			case U.GREATER_THAN_SIGN:
				this._err(W.abruptDoctypePublicIdentifier), t.forceQuirks = !0, this.emitCurrentDoctype(t), this.state = Z.DATA;
				break;
			case U.EOF:
				this._err(W.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: t.publicId += String.fromCodePoint(e);
		}
	}
	_stateDoctypePublicIdentifierSingleQuoted(e) {
		let t = this.currentToken;
		switch (e) {
			case U.APOSTROPHE:
				this.state = Z.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
				break;
			case U.NULL:
				this._err(W.unexpectedNullCharacter), t.publicId += "�";
				break;
			case U.GREATER_THAN_SIGN:
				this._err(W.abruptDoctypePublicIdentifier), t.forceQuirks = !0, this.emitCurrentDoctype(t), this.state = Z.DATA;
				break;
			case U.EOF:
				this._err(W.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: t.publicId += String.fromCodePoint(e);
		}
	}
	_stateAfterDoctypePublicIdentifier(e) {
		let t = this.currentToken;
		switch (e) {
			case U.SPACE:
			case U.LINE_FEED:
			case U.TABULATION:
			case U.FORM_FEED:
				this.state = Z.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS;
				break;
			case U.GREATER_THAN_SIGN:
				this.state = Z.DATA, this.emitCurrentDoctype(t);
				break;
			case U.QUOTATION_MARK:
				this._err(W.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers), t.systemId = "", this.state = Z.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
				break;
			case U.APOSTROPHE:
				this._err(W.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers), t.systemId = "", this.state = Z.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
				break;
			case U.EOF:
				this._err(W.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: this._err(W.missingQuoteBeforeDoctypeSystemIdentifier), t.forceQuirks = !0, this.state = Z.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
		}
	}
	_stateBetweenDoctypePublicAndSystemIdentifiers(e) {
		let t = this.currentToken;
		switch (e) {
			case U.SPACE:
			case U.LINE_FEED:
			case U.TABULATION:
			case U.FORM_FEED: break;
			case U.GREATER_THAN_SIGN:
				this.emitCurrentDoctype(t), this.state = Z.DATA;
				break;
			case U.QUOTATION_MARK:
				t.systemId = "", this.state = Z.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
				break;
			case U.APOSTROPHE:
				t.systemId = "", this.state = Z.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
				break;
			case U.EOF:
				this._err(W.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: this._err(W.missingQuoteBeforeDoctypeSystemIdentifier), t.forceQuirks = !0, this.state = Z.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
		}
	}
	_stateAfterDoctypeSystemKeyword(e) {
		let t = this.currentToken;
		switch (e) {
			case U.SPACE:
			case U.LINE_FEED:
			case U.TABULATION:
			case U.FORM_FEED:
				this.state = Z.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER;
				break;
			case U.QUOTATION_MARK:
				this._err(W.missingWhitespaceAfterDoctypeSystemKeyword), t.systemId = "", this.state = Z.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
				break;
			case U.APOSTROPHE:
				this._err(W.missingWhitespaceAfterDoctypeSystemKeyword), t.systemId = "", this.state = Z.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
				break;
			case U.GREATER_THAN_SIGN:
				this._err(W.missingDoctypeSystemIdentifier), t.forceQuirks = !0, this.state = Z.DATA, this.emitCurrentDoctype(t);
				break;
			case U.EOF:
				this._err(W.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: this._err(W.missingQuoteBeforeDoctypeSystemIdentifier), t.forceQuirks = !0, this.state = Z.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
		}
	}
	_stateBeforeDoctypeSystemIdentifier(e) {
		let t = this.currentToken;
		switch (e) {
			case U.SPACE:
			case U.LINE_FEED:
			case U.TABULATION:
			case U.FORM_FEED: break;
			case U.QUOTATION_MARK:
				t.systemId = "", this.state = Z.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
				break;
			case U.APOSTROPHE:
				t.systemId = "", this.state = Z.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
				break;
			case U.GREATER_THAN_SIGN:
				this._err(W.missingDoctypeSystemIdentifier), t.forceQuirks = !0, this.state = Z.DATA, this.emitCurrentDoctype(t);
				break;
			case U.EOF:
				this._err(W.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: this._err(W.missingQuoteBeforeDoctypeSystemIdentifier), t.forceQuirks = !0, this.state = Z.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
		}
	}
	_stateDoctypeSystemIdentifierDoubleQuoted(e) {
		let t = this.currentToken;
		switch (e) {
			case U.QUOTATION_MARK:
				this.state = Z.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
				break;
			case U.NULL:
				this._err(W.unexpectedNullCharacter), t.systemId += "�";
				break;
			case U.GREATER_THAN_SIGN:
				this._err(W.abruptDoctypeSystemIdentifier), t.forceQuirks = !0, this.emitCurrentDoctype(t), this.state = Z.DATA;
				break;
			case U.EOF:
				this._err(W.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: t.systemId += String.fromCodePoint(e);
		}
	}
	_stateDoctypeSystemIdentifierSingleQuoted(e) {
		let t = this.currentToken;
		switch (e) {
			case U.APOSTROPHE:
				this.state = Z.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
				break;
			case U.NULL:
				this._err(W.unexpectedNullCharacter), t.systemId += "�";
				break;
			case U.GREATER_THAN_SIGN:
				this._err(W.abruptDoctypeSystemIdentifier), t.forceQuirks = !0, this.emitCurrentDoctype(t), this.state = Z.DATA;
				break;
			case U.EOF:
				this._err(W.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: t.systemId += String.fromCodePoint(e);
		}
	}
	_stateAfterDoctypeSystemIdentifier(e) {
		let t = this.currentToken;
		switch (e) {
			case U.SPACE:
			case U.LINE_FEED:
			case U.TABULATION:
			case U.FORM_FEED: break;
			case U.GREATER_THAN_SIGN:
				this.emitCurrentDoctype(t), this.state = Z.DATA;
				break;
			case U.EOF:
				this._err(W.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: this._err(W.unexpectedCharacterAfterDoctypeSystemIdentifier), this.state = Z.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
		}
	}
	_stateBogusDoctype(e) {
		let t = this.currentToken;
		switch (e) {
			case U.GREATER_THAN_SIGN:
				this.emitCurrentDoctype(t), this.state = Z.DATA;
				break;
			case U.NULL:
				this._err(W.unexpectedNullCharacter);
				break;
			case U.EOF: this.emitCurrentDoctype(t), this._emitEOFToken();
		}
	}
	_stateCdataSection(e) {
		switch (e) {
			case U.RIGHT_SQUARE_BRACKET:
				this.state = Z.CDATA_SECTION_BRACKET;
				break;
			case U.EOF:
				this._err(W.eofInCdata), this._emitEOFToken();
				break;
			default: this._emitCodePoint(e);
		}
	}
	_stateCdataSectionBracket(e) {
		e === U.RIGHT_SQUARE_BRACKET ? this.state = Z.CDATA_SECTION_END : (this._emitChars("]"), this.state = Z.CDATA_SECTION, this._stateCdataSection(e));
	}
	_stateCdataSectionEnd(e) {
		switch (e) {
			case U.GREATER_THAN_SIGN:
				this.state = Z.DATA;
				break;
			case U.RIGHT_SQUARE_BRACKET:
				this._emitChars("]");
				break;
			default: this._emitChars("]]"), this.state = Z.CDATA_SECTION, this._stateCdataSection(e);
		}
	}
	_stateCharacterReference() {
		let e = this.entityDecoder.write(this.preprocessor.html, this.preprocessor.pos);
		if (e < 0) {
			if (this.preprocessor.lastChunkWritten) e = this.entityDecoder.end();
			else {
				this.active = !1, this.preprocessor.pos = this.preprocessor.html.length - 1, this.consumedAfterSnapshot = 0, this.preprocessor.endOfChunkHit = !0;
				return;
			}
		}
		e === 0 ? (this.preprocessor.pos = this.entityStartPos, this._flushCodePointConsumedAsCharacterReference(U.AMPERSAND), this.state = !this._isCharacterReferenceInAttribute() && Ju(this.preprocessor.peek(1)) ? Z.AMBIGUOUS_AMPERSAND : this.returnState) : this.state = this.returnState;
	}
	_stateAmbiguousAmpersand(e) {
		Ju(e) ? this._flushCodePointConsumedAsCharacterReference(e) : (e === U.SEMICOLON && this._err(W.unknownNamedCharacterReference), this.state = this.returnState, this._callState(e));
	}
}, ed = /* @__PURE__ */ new Set([
	Y.DD,
	Y.DT,
	Y.LI,
	Y.OPTGROUP,
	Y.OPTION,
	Y.P,
	Y.RB,
	Y.RP,
	Y.RT,
	Y.RTC
]), td = /* @__PURE__ */ new Set([
	...ed,
	Y.CAPTION,
	Y.COLGROUP,
	Y.TBODY,
	Y.TD,
	Y.TFOOT,
	Y.TH,
	Y.THEAD,
	Y.TR
]), nd = /* @__PURE__ */ new Set([
	Y.APPLET,
	Y.CAPTION,
	Y.HTML,
	Y.MARQUEE,
	Y.OBJECT,
	Y.TABLE,
	Y.TD,
	Y.TEMPLATE,
	Y.TH
]), rd = /* @__PURE__ */ new Set([
	...nd,
	Y.OL,
	Y.UL
]), id = /* @__PURE__ */ new Set([...nd, Y.BUTTON]), ad = /* @__PURE__ */ new Set([
	Y.ANNOTATION_XML,
	Y.MI,
	Y.MN,
	Y.MO,
	Y.MS,
	Y.MTEXT
]), od = /* @__PURE__ */ new Set([
	Y.DESC,
	Y.FOREIGN_OBJECT,
	Y.TITLE
]), sd = /* @__PURE__ */ new Set([
	Y.TR,
	Y.TEMPLATE,
	Y.HTML
]), cd = /* @__PURE__ */ new Set([
	Y.TBODY,
	Y.TFOOT,
	Y.THEAD,
	Y.TEMPLATE,
	Y.HTML
]), ld = /* @__PURE__ */ new Set([
	Y.TABLE,
	Y.TEMPLATE,
	Y.HTML
]), ud = /* @__PURE__ */ new Set([Y.TD, Y.TH]), dd = class {
	get currentTmplContentOrNode() {
		return this._isInTemplate() ? this.treeAdapter.getTemplateContent(this.current) : this.current;
	}
	constructor(e, t, n) {
		this.treeAdapter = t, this.handler = n, this.items = [], this.tagIDs = [], this.stackTop = -1, this.tmplCount = 0, this.currentTagId = Y.UNKNOWN, this.current = e;
	}
	_indexOf(e) {
		return this.items.lastIndexOf(e, this.stackTop);
	}
	_isInTemplate() {
		return this.currentTagId === Y.TEMPLATE && this.treeAdapter.getNamespaceURI(this.current) === q.HTML;
	}
	_updateCurrentElement() {
		this.current = this.items[this.stackTop], this.currentTagId = this.tagIDs[this.stackTop];
	}
	push(e, t) {
		this.stackTop++, this.items[this.stackTop] = e, this.current = e, this.tagIDs[this.stackTop] = t, this.currentTagId = t, this._isInTemplate() && this.tmplCount++, this.handler.onItemPush(e, t, !0);
	}
	pop() {
		let e = this.current;
		this.tmplCount > 0 && this._isInTemplate() && this.tmplCount--, this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(e, !0);
	}
	replace(e, t) {
		let n = this._indexOf(e);
		this.items[n] = t, n === this.stackTop && (this.current = t);
	}
	insertAfter(e, t, n) {
		let r = this._indexOf(e) + 1;
		this.items.splice(r, 0, t), this.tagIDs.splice(r, 0, n), this.stackTop++, r === this.stackTop && this._updateCurrentElement(), this.current && this.currentTagId !== void 0 && this.handler.onItemPush(this.current, this.currentTagId, r === this.stackTop);
	}
	popUntilTagNamePopped(e) {
		let t = this.stackTop + 1;
		do
			t = this.tagIDs.lastIndexOf(e, t - 1);
		while (t > 0 && this.treeAdapter.getNamespaceURI(this.items[t]) !== q.HTML);
		this.shortenToLength(Math.max(t, 0));
	}
	shortenToLength(e) {
		for (; this.stackTop >= e;) {
			let t = this.current;
			this.tmplCount > 0 && this._isInTemplate() && --this.tmplCount, this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(t, this.stackTop < e);
		}
	}
	popUntilElementPopped(e) {
		let t = this._indexOf(e);
		this.shortenToLength(Math.max(t, 0));
	}
	popUntilPopped(e, t) {
		let n = this._indexOfTagNames(e, t);
		this.shortenToLength(Math.max(n, 0));
	}
	popUntilNumberedHeaderPopped() {
		this.popUntilPopped(Hu, q.HTML);
	}
	popUntilTableCellPopped() {
		this.popUntilPopped(ud, q.HTML);
	}
	popAllUpToHtmlElement() {
		this.tmplCount = 0, this.shortenToLength(1);
	}
	_indexOfTagNames(e, t) {
		for (let n = this.stackTop; n >= 0; n--) if (e.has(this.tagIDs[n]) && this.treeAdapter.getNamespaceURI(this.items[n]) === t) return n;
		return -1;
	}
	clearBackTo(e, t) {
		let n = this._indexOfTagNames(e, t);
		this.shortenToLength(n + 1);
	}
	clearBackToTableContext() {
		this.clearBackTo(ld, q.HTML);
	}
	clearBackToTableBodyContext() {
		this.clearBackTo(cd, q.HTML);
	}
	clearBackToTableRowContext() {
		this.clearBackTo(sd, q.HTML);
	}
	remove(e) {
		let t = this._indexOf(e);
		t >= 0 && (t === this.stackTop ? this.pop() : (this.items.splice(t, 1), this.tagIDs.splice(t, 1), this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(e, !1)));
	}
	tryPeekProperlyNestedBodyElement() {
		return this.stackTop >= 1 && this.tagIDs[1] === Y.BODY ? this.items[1] : null;
	}
	contains(e) {
		return this._indexOf(e) > -1;
	}
	getCommonAncestor(e) {
		let t = this._indexOf(e) - 1;
		return t >= 0 ? this.items[t] : null;
	}
	isRootHtmlElementCurrent() {
		return this.stackTop === 0 && this.tagIDs[0] === Y.HTML;
	}
	hasInDynamicScope(e, t) {
		for (let n = this.stackTop; n >= 0; n--) {
			let r = this.tagIDs[n];
			switch (this.treeAdapter.getNamespaceURI(this.items[n])) {
				case q.HTML:
					if (r === e) return !0;
					if (t.has(r)) return !1;
					break;
				case q.SVG:
					if (od.has(r)) return !1;
					break;
				case q.MATHML: if (ad.has(r)) return !1;
			}
		}
		return !0;
	}
	hasInScope(e) {
		return this.hasInDynamicScope(e, nd);
	}
	hasInListItemScope(e) {
		return this.hasInDynamicScope(e, rd);
	}
	hasInButtonScope(e) {
		return this.hasInDynamicScope(e, id);
	}
	hasNumberedHeaderInScope() {
		for (let e = this.stackTop; e >= 0; e--) {
			let t = this.tagIDs[e];
			switch (this.treeAdapter.getNamespaceURI(this.items[e])) {
				case q.HTML:
					if (Hu.has(t)) return !0;
					if (nd.has(t)) return !1;
					break;
				case q.SVG:
					if (od.has(t)) return !1;
					break;
				case q.MATHML: if (ad.has(t)) return !1;
			}
		}
		return !0;
	}
	hasInTableScope(e) {
		for (let t = this.stackTop; t >= 0; t--) if (this.treeAdapter.getNamespaceURI(this.items[t]) === q.HTML) switch (this.tagIDs[t]) {
			case e: return !0;
			case Y.TABLE:
			case Y.HTML: return !1;
		}
		return !0;
	}
	hasTableBodyContextInTableScope() {
		for (let e = this.stackTop; e >= 0; e--) if (this.treeAdapter.getNamespaceURI(this.items[e]) === q.HTML) switch (this.tagIDs[e]) {
			case Y.TBODY:
			case Y.THEAD:
			case Y.TFOOT: return !0;
			case Y.TABLE:
			case Y.HTML: return !1;
		}
		return !0;
	}
	hasInSelectScope(e) {
		for (let t = this.stackTop; t >= 0; t--) if (this.treeAdapter.getNamespaceURI(this.items[t]) === q.HTML) switch (this.tagIDs[t]) {
			case e: return !0;
			case Y.OPTION:
			case Y.OPTGROUP: break;
			default: return !1;
		}
		return !0;
	}
	generateImpliedEndTags() {
		for (; this.currentTagId !== void 0 && ed.has(this.currentTagId);) this.pop();
	}
	generateImpliedEndTagsThoroughly() {
		for (; this.currentTagId !== void 0 && td.has(this.currentTagId);) this.pop();
	}
	generateImpliedEndTagsWithExclusion(e) {
		for (; this.currentTagId !== void 0 && this.currentTagId !== e && td.has(this.currentTagId);) this.pop();
	}
}, fd = 3, pd;
(function(e) {
	e[e.Marker = 0] = "Marker", e[e.Element = 1] = "Element";
})(pd ||= {});
var md = { type: pd.Marker }, hd = class {
	constructor(e) {
		this.treeAdapter = e, this.entries = [], this.bookmark = null;
	}
	_getNoahArkConditionCandidates(e, t) {
		let n = [], r = t.length, i = this.treeAdapter.getTagName(e), a = this.treeAdapter.getNamespaceURI(e);
		for (let e = 0; e < this.entries.length; e++) {
			let t = this.entries[e];
			if (t.type === pd.Marker) break;
			let { element: o } = t;
			if (this.treeAdapter.getTagName(o) === i && this.treeAdapter.getNamespaceURI(o) === a) {
				let t = this.treeAdapter.getAttrList(o);
				t.length === r && n.push({
					idx: e,
					attrs: t
				});
			}
		}
		return n;
	}
	_ensureNoahArkCondition(e) {
		if (this.entries.length < fd) return;
		let t = this.treeAdapter.getAttrList(e), n = this._getNoahArkConditionCandidates(e, t);
		if (n.length < fd) return;
		let r = new Map(t.map((e) => [e.name, e.value])), i = 0;
		for (let e = 0; e < n.length; e++) {
			let t = n[e];
			t.attrs.every((e) => r.get(e.name) === e.value) && (i += 1, i >= fd && this.entries.splice(t.idx, 1));
		}
	}
	insertMarker() {
		this.entries.unshift(md);
	}
	pushElement(e, t) {
		this._ensureNoahArkCondition(e), this.entries.unshift({
			type: pd.Element,
			element: e,
			token: t
		});
	}
	insertElementAfterBookmark(e, t) {
		let n = this.entries.indexOf(this.bookmark);
		this.entries.splice(n, 0, {
			type: pd.Element,
			element: e,
			token: t
		});
	}
	removeEntry(e) {
		let t = this.entries.indexOf(e);
		t !== -1 && this.entries.splice(t, 1);
	}
	clearToLastMarker() {
		let e = this.entries.indexOf(md);
		e === -1 ? this.entries.length = 0 : this.entries.splice(0, e + 1);
	}
	getElementEntryInScopeWithTagName(e) {
		let t = this.entries.find((t) => t.type === pd.Marker || this.treeAdapter.getTagName(t.element) === e);
		return t && t.type === pd.Element ? t : null;
	}
	getElementEntry(e) {
		return this.entries.find((t) => t.type === pd.Element && t.element === e);
	}
}, gd = {
	createDocument() {
		return {
			nodeName: "#document",
			mode: Ru.NO_QUIRKS,
			childNodes: []
		};
	},
	createDocumentFragment() {
		return {
			nodeName: "#document-fragment",
			childNodes: []
		};
	},
	createElement(e, t, n) {
		return {
			nodeName: e,
			tagName: e,
			attrs: n,
			namespaceURI: t,
			childNodes: [],
			parentNode: null
		};
	},
	createCommentNode(e) {
		return {
			nodeName: "#comment",
			data: e,
			parentNode: null
		};
	},
	createTextNode(e) {
		return {
			nodeName: "#text",
			value: e,
			parentNode: null
		};
	},
	appendChild(e, t) {
		e.childNodes.push(t), t.parentNode = e;
	},
	insertBefore(e, t, n) {
		let r = e.childNodes.indexOf(n);
		e.childNodes.splice(r, 0, t), t.parentNode = e;
	},
	setTemplateContent(e, t) {
		e.content = t;
	},
	getTemplateContent(e) {
		return e.content;
	},
	setDocumentType(e, t, n, r) {
		let i = e.childNodes.find((e) => e.nodeName === "#documentType");
		if (i) i.name = t, i.publicId = n, i.systemId = r;
		else {
			let i = {
				nodeName: "#documentType",
				name: t,
				publicId: n,
				systemId: r,
				parentNode: null
			};
			gd.appendChild(e, i);
		}
	},
	setDocumentMode(e, t) {
		e.mode = t;
	},
	getDocumentMode(e) {
		return e.mode;
	},
	detachNode(e) {
		if (e.parentNode) {
			let t = e.parentNode.childNodes.indexOf(e);
			e.parentNode.childNodes.splice(t, 1), e.parentNode = null;
		}
	},
	insertText(e, t) {
		if (e.childNodes.length > 0) {
			let n = e.childNodes[e.childNodes.length - 1];
			if (gd.isTextNode(n)) {
				n.value += t;
				return;
			}
		}
		gd.appendChild(e, gd.createTextNode(t));
	},
	insertTextBefore(e, t, n) {
		let r = e.childNodes[e.childNodes.indexOf(n) - 1];
		r && gd.isTextNode(r) ? r.value += t : gd.insertBefore(e, gd.createTextNode(t), n);
	},
	adoptAttributes(e, t) {
		let n = new Set(e.attrs.map((e) => e.name));
		for (let r = 0; r < t.length; r++) n.has(t[r].name) || e.attrs.push(t[r]);
	},
	getFirstChild(e) {
		return e.childNodes[0];
	},
	getChildNodes(e) {
		return e.childNodes;
	},
	getParentNode(e) {
		return e.parentNode;
	},
	getAttrList(e) {
		return e.attrs;
	},
	getTagName(e) {
		return e.tagName;
	},
	getNamespaceURI(e) {
		return e.namespaceURI;
	},
	getTextNodeContent(e) {
		return e.value;
	},
	getCommentNodeContent(e) {
		return e.data;
	},
	getDocumentTypeNodeName(e) {
		return e.name;
	},
	getDocumentTypeNodePublicId(e) {
		return e.publicId;
	},
	getDocumentTypeNodeSystemId(e) {
		return e.systemId;
	},
	isTextNode(e) {
		return e.nodeName === "#text";
	},
	isCommentNode(e) {
		return e.nodeName === "#comment";
	},
	isDocumentTypeNode(e) {
		return e.nodeName === "#documentType";
	},
	isElementNode(e) {
		return Object.prototype.hasOwnProperty.call(e, "tagName");
	},
	setNodeSourceCodeLocation(e, t) {
		e.sourceCodeLocation = t;
	},
	getNodeSourceCodeLocation(e) {
		return e.sourceCodeLocation;
	},
	updateNodeSourceCodeLocation(e, t) {
		e.sourceCodeLocation = {
			...e.sourceCodeLocation,
			...t
		};
	}
}, _d = "html", vd = "about:legacy-compat", yd = "http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd", bd = /* @__PURE__ */ "+//silmaril//dtd html pro v0r11 19970101//,-//as//dtd html 3.0 aswedit + extensions//,-//advasoft ltd//dtd html 3.0 aswedit + extensions//,-//ietf//dtd html 2.0 level 1//,-//ietf//dtd html 2.0 level 2//,-//ietf//dtd html 2.0 strict level 1//,-//ietf//dtd html 2.0 strict level 2//,-//ietf//dtd html 2.0 strict//,-//ietf//dtd html 2.0//,-//ietf//dtd html 2.1e//,-//ietf//dtd html 3.0//,-//ietf//dtd html 3.2 final//,-//ietf//dtd html 3.2//,-//ietf//dtd html 3//,-//ietf//dtd html level 0//,-//ietf//dtd html level 1//,-//ietf//dtd html level 2//,-//ietf//dtd html level 3//,-//ietf//dtd html strict level 0//,-//ietf//dtd html strict level 1//,-//ietf//dtd html strict level 2//,-//ietf//dtd html strict level 3//,-//ietf//dtd html strict//,-//ietf//dtd html//,-//metrius//dtd metrius presentational//,-//microsoft//dtd internet explorer 2.0 html strict//,-//microsoft//dtd internet explorer 2.0 html//,-//microsoft//dtd internet explorer 2.0 tables//,-//microsoft//dtd internet explorer 3.0 html strict//,-//microsoft//dtd internet explorer 3.0 html//,-//microsoft//dtd internet explorer 3.0 tables//,-//netscape comm. corp.//dtd html//,-//netscape comm. corp.//dtd strict html//,-//o'reilly and associates//dtd html 2.0//,-//o'reilly and associates//dtd html extended 1.0//,-//o'reilly and associates//dtd html extended relaxed 1.0//,-//sq//dtd html 2.0 hotmetal + extensions//,-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//,-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//,-//spyglass//dtd html 2.0 extended//,-//sun microsystems corp.//dtd hotjava html//,-//sun microsystems corp.//dtd hotjava strict html//,-//w3c//dtd html 3 1995-03-24//,-//w3c//dtd html 3.2 draft//,-//w3c//dtd html 3.2 final//,-//w3c//dtd html 3.2//,-//w3c//dtd html 3.2s draft//,-//w3c//dtd html 4.0 frameset//,-//w3c//dtd html 4.0 transitional//,-//w3c//dtd html experimental 19960712//,-//w3c//dtd html experimental 970421//,-//w3c//dtd w3 html//,-//w3o//dtd w3 html 3.0//,-//webtechs//dtd mozilla html 2.0//,-//webtechs//dtd mozilla html//".split(","), xd = [
	...bd,
	"-//w3c//dtd html 4.01 frameset//",
	"-//w3c//dtd html 4.01 transitional//"
], Sd = /* @__PURE__ */ new Set([
	"-//w3o//dtd w3 html strict 3.0//en//",
	"-/w3c/dtd html 4.0 transitional/en",
	"html"
]), Cd = ["-//w3c//dtd xhtml 1.0 frameset//", "-//w3c//dtd xhtml 1.0 transitional//"], wd = [
	...Cd,
	"-//w3c//dtd html 4.01 frameset//",
	"-//w3c//dtd html 4.01 transitional//"
];
function Td(e, t) {
	return t.some((t) => e.startsWith(t));
}
function Ed(e) {
	return e.name === _d && e.publicId === null && (e.systemId === null || e.systemId === vd);
}
function Dd(e) {
	if (e.name !== _d) return Ru.QUIRKS;
	let { systemId: t } = e;
	if (t && t.toLowerCase() === yd) return Ru.QUIRKS;
	let { publicId: n } = e;
	if (n !== null) {
		if (n = n.toLowerCase(), Sd.has(n)) return Ru.QUIRKS;
		let e = t === null ? xd : bd;
		if (Td(n, e)) return Ru.QUIRKS;
		if (e = t === null ? Cd : wd, Td(n, e)) return Ru.LIMITED_QUIRKS;
	}
	return Ru.NO_QUIRKS;
}
// node_modules/parse5/dist/common/foreign-content.js
var Od = {
	TEXT_HTML: "text/html",
	APPLICATION_XML: "application/xhtml+xml"
}, kd = "definitionurl", Ad = "definitionURL", jd = new Map((/* @__PURE__ */ "attributeName.attributeType.baseFrequency.baseProfile.calcMode.clipPathUnits.diffuseConstant.edgeMode.filterUnits.glyphRef.gradientTransform.gradientUnits.kernelMatrix.kernelUnitLength.keyPoints.keySplines.keyTimes.lengthAdjust.limitingConeAngle.markerHeight.markerUnits.markerWidth.maskContentUnits.maskUnits.numOctaves.pathLength.patternContentUnits.patternTransform.patternUnits.pointsAtX.pointsAtY.pointsAtZ.preserveAlpha.preserveAspectRatio.primitiveUnits.refX.refY.repeatCount.repeatDur.requiredExtensions.requiredFeatures.specularConstant.specularExponent.spreadMethod.startOffset.stdDeviation.stitchTiles.surfaceScale.systemLanguage.tableValues.targetX.targetY.textLength.viewBox.viewTarget.xChannelSelector.yChannelSelector.zoomAndPan".split(".")).map((e) => [e.toLowerCase(), e])), Md = /* @__PURE__ */ new Map([
	["xlink:actuate", {
		prefix: "xlink",
		name: "actuate",
		namespace: q.XLINK
	}],
	["xlink:arcrole", {
		prefix: "xlink",
		name: "arcrole",
		namespace: q.XLINK
	}],
	["xlink:href", {
		prefix: "xlink",
		name: "href",
		namespace: q.XLINK
	}],
	["xlink:role", {
		prefix: "xlink",
		name: "role",
		namespace: q.XLINK
	}],
	["xlink:show", {
		prefix: "xlink",
		name: "show",
		namespace: q.XLINK
	}],
	["xlink:title", {
		prefix: "xlink",
		name: "title",
		namespace: q.XLINK
	}],
	["xlink:type", {
		prefix: "xlink",
		name: "type",
		namespace: q.XLINK
	}],
	["xml:lang", {
		prefix: "xml",
		name: "lang",
		namespace: q.XML
	}],
	["xml:space", {
		prefix: "xml",
		name: "space",
		namespace: q.XML
	}],
	["xmlns", {
		prefix: "",
		name: "xmlns",
		namespace: q.XMLNS
	}],
	["xmlns:xlink", {
		prefix: "xmlns",
		name: "xlink",
		namespace: q.XMLNS
	}]
]), Nd = new Map((/* @__PURE__ */ "altGlyph.altGlyphDef.altGlyphItem.animateColor.animateMotion.animateTransform.clipPath.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDistantLight.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.foreignObject.glyphRef.linearGradient.radialGradient.textPath".split(".")).map((e) => [e.toLowerCase(), e])), Pd = /* @__PURE__ */ new Set([
	Y.B,
	Y.BIG,
	Y.BLOCKQUOTE,
	Y.BODY,
	Y.BR,
	Y.CENTER,
	Y.CODE,
	Y.DD,
	Y.DIV,
	Y.DL,
	Y.DT,
	Y.EM,
	Y.EMBED,
	Y.H1,
	Y.H2,
	Y.H3,
	Y.H4,
	Y.H5,
	Y.H6,
	Y.HEAD,
	Y.HR,
	Y.I,
	Y.IMG,
	Y.LI,
	Y.LISTING,
	Y.MENU,
	Y.META,
	Y.NOBR,
	Y.OL,
	Y.P,
	Y.PRE,
	Y.RUBY,
	Y.S,
	Y.SMALL,
	Y.SPAN,
	Y.STRONG,
	Y.STRIKE,
	Y.SUB,
	Y.SUP,
	Y.TABLE,
	Y.TT,
	Y.U,
	Y.UL,
	Y.VAR
]);
function Fd(e) {
	let t = e.tagID;
	return t === Y.FONT && e.attrs.some(({ name: e }) => e === Lu.COLOR || e === Lu.SIZE || e === Lu.FACE) || Pd.has(t);
}
function Id(e) {
	for (let t = 0; t < e.attrs.length; t++) if (e.attrs[t].name === kd) {
		e.attrs[t].name = Ad;
		break;
	}
}
function Ld(e) {
	for (let t = 0; t < e.attrs.length; t++) {
		let n = jd.get(e.attrs[t].name);
		n != null && (e.attrs[t].name = n);
	}
}
function Rd(e) {
	for (let t = 0; t < e.attrs.length; t++) {
		let n = Md.get(e.attrs[t].name);
		n && (e.attrs[t].prefix = n.prefix, e.attrs[t].name = n.name, e.attrs[t].namespace = n.namespace);
	}
}
function zd(e) {
	let t = Nd.get(e.tagName);
	t != null && (e.tagName = t, e.tagID = Bu(e.tagName));
}
function Bd(e, t) {
	return t === q.MATHML && (e === Y.MI || e === Y.MO || e === Y.MN || e === Y.MS || e === Y.MTEXT);
}
function Vd(e, t, n) {
	if (t === q.MATHML && e === Y.ANNOTATION_XML) {
		for (let e = 0; e < n.length; e++) if (n[e].name === Lu.ENCODING) {
			let t = n[e].value.toLowerCase();
			return t === Od.TEXT_HTML || t === Od.APPLICATION_XML;
		}
	}
	return t === q.SVG && (e === Y.FOREIGN_OBJECT || e === Y.DESC || e === Y.TITLE);
}
function Hd(e, t, n, r) {
	return (!r || r === q.HTML) && Vd(e, t, n) || (!r || r === q.MATHML) && Bd(e, t);
}
// node_modules/parse5/dist/parser/index.js
var Ud = "hidden", Wd = 8, Gd = 3, Q;
(function(e) {
	e[e.INITIAL = 0] = "INITIAL", e[e.BEFORE_HTML = 1] = "BEFORE_HTML", e[e.BEFORE_HEAD = 2] = "BEFORE_HEAD", e[e.IN_HEAD = 3] = "IN_HEAD", e[e.IN_HEAD_NO_SCRIPT = 4] = "IN_HEAD_NO_SCRIPT", e[e.AFTER_HEAD = 5] = "AFTER_HEAD", e[e.IN_BODY = 6] = "IN_BODY", e[e.TEXT = 7] = "TEXT", e[e.IN_TABLE = 8] = "IN_TABLE", e[e.IN_TABLE_TEXT = 9] = "IN_TABLE_TEXT", e[e.IN_CAPTION = 10] = "IN_CAPTION", e[e.IN_COLUMN_GROUP = 11] = "IN_COLUMN_GROUP", e[e.IN_TABLE_BODY = 12] = "IN_TABLE_BODY", e[e.IN_ROW = 13] = "IN_ROW", e[e.IN_CELL = 14] = "IN_CELL", e[e.IN_SELECT = 15] = "IN_SELECT", e[e.IN_SELECT_IN_TABLE = 16] = "IN_SELECT_IN_TABLE", e[e.IN_TEMPLATE = 17] = "IN_TEMPLATE", e[e.AFTER_BODY = 18] = "AFTER_BODY", e[e.IN_FRAMESET = 19] = "IN_FRAMESET", e[e.AFTER_FRAMESET = 20] = "AFTER_FRAMESET", e[e.AFTER_AFTER_BODY = 21] = "AFTER_AFTER_BODY", e[e.AFTER_AFTER_FRAMESET = 22] = "AFTER_AFTER_FRAMESET";
})(Q ||= {});
var Kd = {
	startLine: -1,
	startCol: -1,
	startOffset: -1,
	endLine: -1,
	endCol: -1,
	endOffset: -1
}, qd = /* @__PURE__ */ new Set([
	Y.TABLE,
	Y.TBODY,
	Y.TFOOT,
	Y.THEAD,
	Y.TR
]), Jd = {
	scriptingEnabled: !0,
	sourceCodeLocationInfo: !1,
	treeAdapter: gd,
	onParseError: null
}, Yd = class {
	constructor(e, t, n = null, r = null) {
		this.fragmentContext = n, this.scriptHandler = r, this.currentToken = null, this.stopped = !1, this.insertionMode = Q.INITIAL, this.originalInsertionMode = Q.INITIAL, this.headElement = null, this.formElement = null, this.currentNotInHTML = !1, this.tmplInsertionModeStack = [], this.pendingCharacterTokens = [], this.hasNonWhitespacePendingCharacterToken = !1, this.framesetOk = !0, this.skipNextNewLine = !1, this.fosterParentingEnabled = !1, this.options = {
			...Jd,
			...e
		}, this.treeAdapter = this.options.treeAdapter, this.onParseError = this.options.onParseError, this.onParseError && (this.options.sourceCodeLocationInfo = !0), this.document = t ?? this.treeAdapter.createDocument(), this.tokenizer = new $u(this.options, this), this.activeFormattingElements = new hd(this.treeAdapter), this.fragmentContextID = n ? Bu(this.treeAdapter.getTagName(n)) : Y.UNKNOWN, this._setContextModes(n ?? this.document, this.fragmentContextID), this.openElements = new dd(this.document, this.treeAdapter, this);
	}
	static parse(e, t) {
		let n = new this(t);
		return n.tokenizer.write(e, !0), n.document;
	}
	static getFragmentParser(e, t) {
		let n = {
			...Jd,
			...t
		};
		e ??= n.treeAdapter.createElement(J.TEMPLATE, q.HTML, []);
		let r = n.treeAdapter.createElement("documentmock", q.HTML, []), i = new this(n, r, e);
		return i.fragmentContextID === Y.TEMPLATE && i.tmplInsertionModeStack.unshift(Q.IN_TEMPLATE), i._initTokenizerForFragmentParsing(), i._insertFakeRootElement(), i._resetInsertionMode(), i._findFormInFragmentContext(), i;
	}
	getFragment() {
		let e = this.treeAdapter.getFirstChild(this.document), t = this.treeAdapter.createDocumentFragment();
		return this._adoptNodes(e, t), t;
	}
	_err(e, t, n) {
		if (!this.onParseError) return;
		let r = e.location ?? Kd, i = {
			code: t,
			startLine: r.startLine,
			startCol: r.startCol,
			startOffset: r.startOffset,
			endLine: n ? r.startLine : r.endLine,
			endCol: n ? r.startCol : r.endCol,
			endOffset: n ? r.startOffset : r.endOffset
		};
		this.onParseError(i);
	}
	onItemPush(e, t, n) {
		var r, i;
		(i = (r = this.treeAdapter).onItemPush) == null || i.call(r, e), n && this.openElements.stackTop > 0 && this._setContextModes(e, t);
	}
	onItemPop(e, t) {
		var n, r;
		if (this.options.sourceCodeLocationInfo && this._setEndLocation(e, this.currentToken), (r = (n = this.treeAdapter).onItemPop) == null || r.call(n, e, this.openElements.current), t) {
			let e, t;
			this.openElements.stackTop === 0 && this.fragmentContext ? (e = this.fragmentContext, t = this.fragmentContextID) : {current: e, currentTagId: t} = this.openElements, this._setContextModes(e, t);
		}
	}
	_setContextModes(e, t) {
		let n = e === this.document || e && this.treeAdapter.getNamespaceURI(e) === q.HTML;
		this.currentNotInHTML = !n, this.tokenizer.inForeignNode = !n && e !== void 0 && t !== void 0 && !this._isIntegrationPoint(t, e);
	}
	_switchToTextParsing(e, t) {
		this._insertElement(e, q.HTML), this.tokenizer.state = t, this.originalInsertionMode = this.insertionMode, this.insertionMode = Q.TEXT;
	}
	switchToPlaintextParsing() {
		this.insertionMode = Q.TEXT, this.originalInsertionMode = Q.IN_BODY, this.tokenizer.state = Uu.PLAINTEXT;
	}
	_getAdjustedCurrentElement() {
		return this.openElements.stackTop === 0 && this.fragmentContext ? this.fragmentContext : this.openElements.current;
	}
	_findFormInFragmentContext() {
		let e = this.fragmentContext;
		for (; e;) {
			if (this.treeAdapter.getTagName(e) === J.FORM) {
				this.formElement = e;
				break;
			}
			e = this.treeAdapter.getParentNode(e);
		}
	}
	_initTokenizerForFragmentParsing() {
		if (this.fragmentContext && this.treeAdapter.getNamespaceURI(this.fragmentContext) === q.HTML) switch (this.fragmentContextID) {
			case Y.TITLE:
			case Y.TEXTAREA:
				this.tokenizer.state = Uu.RCDATA;
				break;
			case Y.STYLE:
			case Y.XMP:
			case Y.IFRAME:
			case Y.NOEMBED:
			case Y.NOFRAMES:
			case Y.NOSCRIPT:
				this.tokenizer.state = Uu.RAWTEXT;
				break;
			case Y.SCRIPT:
				this.tokenizer.state = Uu.SCRIPT_DATA;
				break;
			case Y.PLAINTEXT: this.tokenizer.state = Uu.PLAINTEXT;
		}
	}
	_setDocumentType(e) {
		let t = e.name || "", n = e.publicId || "", r = e.systemId || "";
		if (this.treeAdapter.setDocumentType(this.document, t, n, r), e.location) {
			let t = this.treeAdapter.getChildNodes(this.document).find((e) => this.treeAdapter.isDocumentTypeNode(e));
			t && this.treeAdapter.setNodeSourceCodeLocation(t, e.location);
		}
	}
	_attachElementToTree(e, t) {
		if (this.options.sourceCodeLocationInfo) {
			let n = t && {
				...t,
				startTag: t
			};
			this.treeAdapter.setNodeSourceCodeLocation(e, n);
		}
		if (this._shouldFosterParentOnInsertion()) this._fosterParentElement(e);
		else {
			let t = this.openElements.currentTmplContentOrNode;
			this.treeAdapter.appendChild(t ?? this.document, e);
		}
	}
	_appendElement(e, t) {
		let n = this.treeAdapter.createElement(e.tagName, t, e.attrs);
		this._attachElementToTree(n, e.location);
	}
	_insertElement(e, t) {
		let n = this.treeAdapter.createElement(e.tagName, t, e.attrs);
		this._attachElementToTree(n, e.location), this.openElements.push(n, e.tagID);
	}
	_insertFakeElement(e, t) {
		let n = this.treeAdapter.createElement(e, q.HTML, []);
		this._attachElementToTree(n, null), this.openElements.push(n, t);
	}
	_insertTemplate(e) {
		let t = this.treeAdapter.createElement(e.tagName, q.HTML, e.attrs), n = this.treeAdapter.createDocumentFragment();
		this.treeAdapter.setTemplateContent(t, n), this._attachElementToTree(t, e.location), this.openElements.push(t, e.tagID), this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(n, null);
	}
	_insertFakeRootElement() {
		let e = this.treeAdapter.createElement(J.HTML, q.HTML, []);
		this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(e, null), this.treeAdapter.appendChild(this.openElements.current, e), this.openElements.push(e, Y.HTML);
	}
	_appendCommentNode(e, t) {
		let n = this.treeAdapter.createCommentNode(e.data);
		this.treeAdapter.appendChild(t, n), this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(n, e.location);
	}
	_insertCharacters(e) {
		let t, n;
		if (this._shouldFosterParentOnInsertion() ? ({parent: t, beforeElement: n} = this._findFosterParentingLocation(), n ? this.treeAdapter.insertTextBefore(t, e.chars, n) : this.treeAdapter.insertText(t, e.chars)) : (t = this.openElements.currentTmplContentOrNode, this.treeAdapter.insertText(t, e.chars)), !e.location) return;
		let r = this.treeAdapter.getChildNodes(t), i = r[(n ? r.lastIndexOf(n) : r.length) - 1];
		if (this.treeAdapter.getNodeSourceCodeLocation(i)) {
			let { endLine: t, endCol: n, endOffset: r } = e.location;
			this.treeAdapter.updateNodeSourceCodeLocation(i, {
				endLine: t,
				endCol: n,
				endOffset: r
			});
		} else this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(i, e.location);
	}
	_adoptNodes(e, t) {
		for (let n = this.treeAdapter.getFirstChild(e); n; n = this.treeAdapter.getFirstChild(e)) this.treeAdapter.detachNode(n), this.treeAdapter.appendChild(t, n);
	}
	_setEndLocation(e, t) {
		if (this.treeAdapter.getNodeSourceCodeLocation(e) && t.location) {
			let n = t.location, r = this.treeAdapter.getTagName(e), i = t.type === G.END_TAG && r === t.tagName ? {
				endTag: { ...n },
				endLine: n.endLine,
				endCol: n.endCol,
				endOffset: n.endOffset
			} : {
				endLine: n.startLine,
				endCol: n.startCol,
				endOffset: n.startOffset
			};
			this.treeAdapter.updateNodeSourceCodeLocation(e, i);
		}
	}
	shouldProcessStartTagTokenInForeignContent(e) {
		if (!this.currentNotInHTML) return !1;
		let t, n;
		return this.openElements.stackTop === 0 && this.fragmentContext ? (t = this.fragmentContext, n = this.fragmentContextID) : {current: t, currentTagId: n} = this.openElements, e.tagID === Y.SVG && this.treeAdapter.getTagName(t) === J.ANNOTATION_XML && this.treeAdapter.getNamespaceURI(t) === q.MATHML ? !1 : this.tokenizer.inForeignNode || (e.tagID === Y.MGLYPH || e.tagID === Y.MALIGNMARK) && n !== void 0 && !this._isIntegrationPoint(n, t, q.HTML);
	}
	_processToken(e) {
		switch (e.type) {
			case G.CHARACTER:
				this.onCharacter(e);
				break;
			case G.NULL_CHARACTER:
				this.onNullCharacter(e);
				break;
			case G.COMMENT:
				this.onComment(e);
				break;
			case G.DOCTYPE:
				this.onDoctype(e);
				break;
			case G.START_TAG:
				this._processStartTag(e);
				break;
			case G.END_TAG:
				this.onEndTag(e);
				break;
			case G.EOF:
				this.onEof(e);
				break;
			case G.WHITESPACE_CHARACTER: this.onWhitespaceCharacter(e);
		}
	}
	_isIntegrationPoint(e, t, n) {
		return Hd(e, this.treeAdapter.getNamespaceURI(t), this.treeAdapter.getAttrList(t), n);
	}
	_reconstructActiveFormattingElements() {
		let e = this.activeFormattingElements.entries.length;
		if (e) {
			let t = this.activeFormattingElements.entries.findIndex((e) => e.type === pd.Marker || this.openElements.contains(e.element)), n = t === -1 ? e - 1 : t - 1;
			for (let e = n; e >= 0; e--) {
				let t = this.activeFormattingElements.entries[e];
				this._insertElement(t.token, this.treeAdapter.getNamespaceURI(t.element)), t.element = this.openElements.current;
			}
		}
	}
	_closeTableCell() {
		this.openElements.generateImpliedEndTags(), this.openElements.popUntilTableCellPopped(), this.activeFormattingElements.clearToLastMarker(), this.insertionMode = Q.IN_ROW;
	}
	_closePElement() {
		this.openElements.generateImpliedEndTagsWithExclusion(Y.P), this.openElements.popUntilTagNamePopped(Y.P);
	}
	_resetInsertionMode() {
		for (let e = this.openElements.stackTop; e >= 0; e--) switch (e === 0 && this.fragmentContext ? this.fragmentContextID : this.openElements.tagIDs[e]) {
			case Y.TR:
				this.insertionMode = Q.IN_ROW;
				return;
			case Y.TBODY:
			case Y.THEAD:
			case Y.TFOOT:
				this.insertionMode = Q.IN_TABLE_BODY;
				return;
			case Y.CAPTION:
				this.insertionMode = Q.IN_CAPTION;
				return;
			case Y.COLGROUP:
				this.insertionMode = Q.IN_COLUMN_GROUP;
				return;
			case Y.TABLE:
				this.insertionMode = Q.IN_TABLE;
				return;
			case Y.BODY:
				this.insertionMode = Q.IN_BODY;
				return;
			case Y.FRAMESET:
				this.insertionMode = Q.IN_FRAMESET;
				return;
			case Y.SELECT:
				this._resetInsertionModeForSelect(e);
				return;
			case Y.TEMPLATE:
				this.insertionMode = this.tmplInsertionModeStack[0];
				return;
			case Y.HTML:
				this.insertionMode = this.headElement ? Q.AFTER_HEAD : Q.BEFORE_HEAD;
				return;
			case Y.TD:
			case Y.TH:
				if (e > 0) {
					this.insertionMode = Q.IN_CELL;
					return;
				}
				break;
			case Y.HEAD: if (e > 0) {
				this.insertionMode = Q.IN_HEAD;
				return;
			}
		}
		this.insertionMode = Q.IN_BODY;
	}
	_resetInsertionModeForSelect(e) {
		if (e > 0) for (let t = e - 1; t > 0; t--) {
			let e = this.openElements.tagIDs[t];
			if (e === Y.TEMPLATE) break;
			if (e === Y.TABLE) {
				this.insertionMode = Q.IN_SELECT_IN_TABLE;
				return;
			}
		}
		this.insertionMode = Q.IN_SELECT;
	}
	_isElementCausesFosterParenting(e) {
		return qd.has(e);
	}
	_shouldFosterParentOnInsertion() {
		return this.fosterParentingEnabled && this.openElements.currentTagId !== void 0 && this._isElementCausesFosterParenting(this.openElements.currentTagId);
	}
	_findFosterParentingLocation() {
		for (let e = this.openElements.stackTop; e >= 0; e--) {
			let t = this.openElements.items[e];
			switch (this.openElements.tagIDs[e]) {
				case Y.TEMPLATE:
					if (this.treeAdapter.getNamespaceURI(t) === q.HTML) return {
						parent: this.treeAdapter.getTemplateContent(t),
						beforeElement: null
					};
					break;
				case Y.TABLE: {
					let n = this.treeAdapter.getParentNode(t);
					return n ? {
						parent: n,
						beforeElement: t
					} : {
						parent: this.openElements.items[e - 1],
						beforeElement: null
					};
				}
			}
		}
		return {
			parent: this.openElements.items[0],
			beforeElement: null
		};
	}
	_fosterParentElement(e) {
		let t = this._findFosterParentingLocation();
		t.beforeElement ? this.treeAdapter.insertBefore(t.parent, e, t.beforeElement) : this.treeAdapter.appendChild(t.parent, e);
	}
	_isSpecialElement(e, t) {
		return Vu[this.treeAdapter.getNamespaceURI(e)].has(t);
	}
	onCharacter(e) {
		if (this.skipNextNewLine = !1, this.tokenizer.inForeignNode) pm(this, e);
		else switch (this.insertionMode) {
			case Q.INITIAL:
				lf(this, e);
				break;
			case Q.BEFORE_HTML:
				ff(this, e);
				break;
			case Q.BEFORE_HEAD:
				hf(this, e);
				break;
			case Q.IN_HEAD:
				yf(this, e);
				break;
			case Q.IN_HEAD_NO_SCRIPT:
				Sf(this, e);
				break;
			case Q.AFTER_HEAD:
				Tf(this, e);
				break;
			case Q.IN_BODY:
			case Q.IN_CAPTION:
			case Q.IN_CELL:
			case Q.IN_TEMPLATE:
				Of(this, e);
				break;
			case Q.TEXT:
			case Q.IN_SELECT:
			case Q.IN_SELECT_IN_TABLE:
				this._insertCharacters(e);
				break;
			case Q.IN_TABLE:
			case Q.IN_TABLE_BODY:
			case Q.IN_ROW:
				Sp(this, e);
				break;
			case Q.IN_TABLE_TEXT:
				Fp(this, e);
				break;
			case Q.IN_COLUMN_GROUP:
				Hp(this, e);
				break;
			case Q.AFTER_BODY:
				im(this, e);
				break;
			case Q.AFTER_AFTER_BODY: um(this, e);
		}
	}
	onNullCharacter(e) {
		if (this.skipNextNewLine = !1, this.tokenizer.inForeignNode) fm(this, e);
		else switch (this.insertionMode) {
			case Q.INITIAL:
				lf(this, e);
				break;
			case Q.BEFORE_HTML:
				ff(this, e);
				break;
			case Q.BEFORE_HEAD:
				hf(this, e);
				break;
			case Q.IN_HEAD:
				yf(this, e);
				break;
			case Q.IN_HEAD_NO_SCRIPT:
				Sf(this, e);
				break;
			case Q.AFTER_HEAD:
				Tf(this, e);
				break;
			case Q.TEXT:
				this._insertCharacters(e);
				break;
			case Q.IN_TABLE:
			case Q.IN_TABLE_BODY:
			case Q.IN_ROW:
				Sp(this, e);
				break;
			case Q.IN_COLUMN_GROUP:
				Hp(this, e);
				break;
			case Q.AFTER_BODY:
				im(this, e);
				break;
			case Q.AFTER_AFTER_BODY: um(this, e);
		}
	}
	onComment(e) {
		if (this.skipNextNewLine = !1, this.currentNotInHTML) rf(this, e);
		else switch (this.insertionMode) {
			case Q.INITIAL:
			case Q.BEFORE_HTML:
			case Q.BEFORE_HEAD:
			case Q.IN_HEAD:
			case Q.IN_HEAD_NO_SCRIPT:
			case Q.AFTER_HEAD:
			case Q.IN_BODY:
			case Q.IN_TABLE:
			case Q.IN_CAPTION:
			case Q.IN_COLUMN_GROUP:
			case Q.IN_TABLE_BODY:
			case Q.IN_ROW:
			case Q.IN_CELL:
			case Q.IN_SELECT:
			case Q.IN_SELECT_IN_TABLE:
			case Q.IN_TEMPLATE:
			case Q.IN_FRAMESET:
			case Q.AFTER_FRAMESET:
				rf(this, e);
				break;
			case Q.IN_TABLE_TEXT:
				Ip(this, e);
				break;
			case Q.AFTER_BODY:
				af(this, e);
				break;
			case Q.AFTER_AFTER_BODY:
			case Q.AFTER_AFTER_FRAMESET: of(this, e);
		}
	}
	onDoctype(e) {
		switch (this.skipNextNewLine = !1, this.insertionMode) {
			case Q.INITIAL:
				cf(this, e);
				break;
			case Q.BEFORE_HEAD:
			case Q.IN_HEAD:
			case Q.IN_HEAD_NO_SCRIPT:
			case Q.AFTER_HEAD:
				this._err(e, W.misplacedDoctype);
				break;
			case Q.IN_TABLE_TEXT: Ip(this, e);
		}
	}
	onStartTag(e) {
		this.skipNextNewLine = !1, this.currentToken = e, this._processStartTag(e), e.selfClosing && !e.ackSelfClosing && this._err(e, W.nonVoidHtmlElementStartTagWithTrailingSolidus);
	}
	_processStartTag(e) {
		this.shouldProcessStartTagTokenInForeignContent(e) ? hm(this, e) : this._startTagOutsideForeignContent(e);
	}
	_startTagOutsideForeignContent(e) {
		switch (this.insertionMode) {
			case Q.INITIAL:
				lf(this, e);
				break;
			case Q.BEFORE_HTML:
				uf(this, e);
				break;
			case Q.BEFORE_HEAD:
				pf(this, e);
				break;
			case Q.IN_HEAD:
				gf(this, e);
				break;
			case Q.IN_HEAD_NO_SCRIPT:
				bf(this, e);
				break;
			case Q.AFTER_HEAD:
				Cf(this, e);
				break;
			case Q.IN_BODY:
				$(this, e);
				break;
			case Q.IN_TABLE:
				jp(this, e);
				break;
			case Q.IN_TABLE_TEXT:
				Ip(this, e);
				break;
			case Q.IN_CAPTION:
				Rp(this, e);
				break;
			case Q.IN_COLUMN_GROUP:
				Bp(this, e);
				break;
			case Q.IN_TABLE_BODY:
				Up(this, e);
				break;
			case Q.IN_ROW:
				Gp(this, e);
				break;
			case Q.IN_CELL:
				qp(this, e);
				break;
			case Q.IN_SELECT:
				Yp(this, e);
				break;
			case Q.IN_SELECT_IN_TABLE:
				Zp(this, e);
				break;
			case Q.IN_TEMPLATE:
				$p(this, e);
				break;
			case Q.AFTER_BODY:
				nm(this, e);
				break;
			case Q.IN_FRAMESET:
				am(this, e);
				break;
			case Q.AFTER_FRAMESET:
				sm(this, e);
				break;
			case Q.AFTER_AFTER_BODY:
				lm(this, e);
				break;
			case Q.AFTER_AFTER_FRAMESET: dm(this, e);
		}
	}
	onEndTag(e) {
		this.skipNextNewLine = !1, this.currentToken = e, this.currentNotInHTML ? gm(this, e) : this._endTagOutsideForeignContent(e);
	}
	_endTagOutsideForeignContent(e) {
		switch (this.insertionMode) {
			case Q.INITIAL:
				lf(this, e);
				break;
			case Q.BEFORE_HTML:
				df(this, e);
				break;
			case Q.BEFORE_HEAD:
				mf(this, e);
				break;
			case Q.IN_HEAD:
				_f(this, e);
				break;
			case Q.IN_HEAD_NO_SCRIPT:
				xf(this, e);
				break;
			case Q.AFTER_HEAD:
				wf(this, e);
				break;
			case Q.IN_BODY:
				vp(this, e);
				break;
			case Q.TEXT:
				bp(this, e);
				break;
			case Q.IN_TABLE:
				Mp(this, e);
				break;
			case Q.IN_TABLE_TEXT:
				Ip(this, e);
				break;
			case Q.IN_CAPTION:
				zp(this, e);
				break;
			case Q.IN_COLUMN_GROUP:
				Vp(this, e);
				break;
			case Q.IN_TABLE_BODY:
				Wp(this, e);
				break;
			case Q.IN_ROW:
				Kp(this, e);
				break;
			case Q.IN_CELL:
				Jp(this, e);
				break;
			case Q.IN_SELECT:
				Xp(this, e);
				break;
			case Q.IN_SELECT_IN_TABLE:
				Qp(this, e);
				break;
			case Q.IN_TEMPLATE:
				em(this, e);
				break;
			case Q.AFTER_BODY:
				rm(this, e);
				break;
			case Q.IN_FRAMESET:
				om(this, e);
				break;
			case Q.AFTER_FRAMESET:
				cm(this, e);
				break;
			case Q.AFTER_AFTER_BODY: um(this, e);
		}
	}
	onEof(e) {
		switch (this.insertionMode) {
			case Q.INITIAL:
				lf(this, e);
				break;
			case Q.BEFORE_HTML:
				ff(this, e);
				break;
			case Q.BEFORE_HEAD:
				hf(this, e);
				break;
			case Q.IN_HEAD:
				yf(this, e);
				break;
			case Q.IN_HEAD_NO_SCRIPT:
				Sf(this, e);
				break;
			case Q.AFTER_HEAD:
				Tf(this, e);
				break;
			case Q.IN_BODY:
			case Q.IN_TABLE:
			case Q.IN_CAPTION:
			case Q.IN_COLUMN_GROUP:
			case Q.IN_TABLE_BODY:
			case Q.IN_ROW:
			case Q.IN_CELL:
			case Q.IN_SELECT:
			case Q.IN_SELECT_IN_TABLE:
				yp(this, e);
				break;
			case Q.TEXT:
				xp(this, e);
				break;
			case Q.IN_TABLE_TEXT:
				Ip(this, e);
				break;
			case Q.IN_TEMPLATE:
				tm(this, e);
				break;
			case Q.AFTER_BODY:
			case Q.IN_FRAMESET:
			case Q.AFTER_FRAMESET:
			case Q.AFTER_AFTER_BODY:
			case Q.AFTER_AFTER_FRAMESET: sf(this, e);
		}
	}
	onWhitespaceCharacter(e) {
		if (this.skipNextNewLine && (this.skipNextNewLine = !1, e.chars.charCodeAt(0) === U.LINE_FEED)) {
			if (e.chars.length === 1) return;
			e.chars = e.chars.substr(1);
		}
		if (this.tokenizer.inForeignNode) this._insertCharacters(e);
		else switch (this.insertionMode) {
			case Q.IN_HEAD:
			case Q.IN_HEAD_NO_SCRIPT:
			case Q.AFTER_HEAD:
			case Q.TEXT:
			case Q.IN_COLUMN_GROUP:
			case Q.IN_SELECT:
			case Q.IN_SELECT_IN_TABLE:
			case Q.IN_FRAMESET:
			case Q.AFTER_FRAMESET:
				this._insertCharacters(e);
				break;
			case Q.IN_BODY:
			case Q.IN_CAPTION:
			case Q.IN_CELL:
			case Q.IN_TEMPLATE:
			case Q.AFTER_BODY:
			case Q.AFTER_AFTER_BODY:
			case Q.AFTER_AFTER_FRAMESET:
				Df(this, e);
				break;
			case Q.IN_TABLE:
			case Q.IN_TABLE_BODY:
			case Q.IN_ROW:
				Sp(this, e);
				break;
			case Q.IN_TABLE_TEXT: Pp(this, e);
		}
	}
};
function Xd(e, t) {
	let n = e.activeFormattingElements.getElementEntryInScopeWithTagName(t.tagName);
	return n ? e.openElements.contains(n.element) ? e.openElements.hasInScope(t.tagID) || (n = null) : (e.activeFormattingElements.removeEntry(n), n = null) : _p(e, t), n;
}
function Zd(e, t) {
	let n = null, r = e.openElements.stackTop;
	for (; r >= 0; r--) {
		let i = e.openElements.items[r];
		if (i === t.element) break;
		e._isSpecialElement(i, e.openElements.tagIDs[r]) && (n = i);
	}
	return n || (e.openElements.shortenToLength(Math.max(r, 0)), e.activeFormattingElements.removeEntry(t)), n;
}
function Qd(e, t, n) {
	let r = t, i = e.openElements.getCommonAncestor(t);
	for (let a = 0, o = i; o !== n; a++, o = i) {
		i = e.openElements.getCommonAncestor(o);
		let n = e.activeFormattingElements.getElementEntry(o), s = n && a >= Gd;
		!n || s ? (s && e.activeFormattingElements.removeEntry(n), e.openElements.remove(o)) : (o = $d(e, n), r === t && (e.activeFormattingElements.bookmark = n), e.treeAdapter.detachNode(r), e.treeAdapter.appendChild(o, r), r = o);
	}
	return r;
}
function $d(e, t) {
	let n = e.treeAdapter.getNamespaceURI(t.element), r = e.treeAdapter.createElement(t.token.tagName, n, t.token.attrs);
	return e.openElements.replace(t.element, r), t.element = r, r;
}
function ef(e, t, n) {
	let r = Bu(e.treeAdapter.getTagName(t));
	if (e._isElementCausesFosterParenting(r)) e._fosterParentElement(n);
	else {
		let i = e.treeAdapter.getNamespaceURI(t);
		r === Y.TEMPLATE && i === q.HTML && (t = e.treeAdapter.getTemplateContent(t)), e.treeAdapter.appendChild(t, n);
	}
}
function tf(e, t, n) {
	let r = e.treeAdapter.getNamespaceURI(n.element), { token: i } = n, a = e.treeAdapter.createElement(i.tagName, r, i.attrs);
	e._adoptNodes(t, a), e.treeAdapter.appendChild(t, a), e.activeFormattingElements.insertElementAfterBookmark(a, i), e.activeFormattingElements.removeEntry(n), e.openElements.remove(n.element), e.openElements.insertAfter(t, a, i.tagID);
}
function nf(e, t) {
	for (let n = 0; n < Wd; n++) {
		let n = Xd(e, t);
		if (!n) break;
		let r = Zd(e, n);
		if (!r) break;
		e.activeFormattingElements.bookmark = n;
		let i = Qd(e, r, n.element), a = e.openElements.getCommonAncestor(n.element);
		e.treeAdapter.detachNode(i), a && ef(e, a, i), tf(e, r, n);
	}
}
function rf(e, t) {
	e._appendCommentNode(t, e.openElements.currentTmplContentOrNode);
}
function af(e, t) {
	e._appendCommentNode(t, e.openElements.items[0]);
}
function of(e, t) {
	e._appendCommentNode(t, e.document);
}
function sf(e, t) {
	if (e.stopped = !0, t.location) {
		let n = e.fragmentContext ? 0 : 2;
		for (let r = e.openElements.stackTop; r >= n; r--) e._setEndLocation(e.openElements.items[r], t);
		if (!e.fragmentContext && e.openElements.stackTop >= 0) {
			let n = e.openElements.items[0], r = e.treeAdapter.getNodeSourceCodeLocation(n);
			if (r && !r.endTag && (e._setEndLocation(n, t), e.openElements.stackTop >= 1)) {
				let n = e.openElements.items[1], r = e.treeAdapter.getNodeSourceCodeLocation(n);
				r && !r.endTag && e._setEndLocation(n, t);
			}
		}
	}
}
function cf(e, t) {
	e._setDocumentType(t);
	let n = t.forceQuirks ? Ru.QUIRKS : Dd(t);
	Ed(t) || e._err(t, W.nonConformingDoctype), e.treeAdapter.setDocumentMode(e.document, n), e.insertionMode = Q.BEFORE_HTML;
}
function lf(e, t) {
	e._err(t, W.missingDoctype, !0), e.treeAdapter.setDocumentMode(e.document, Ru.QUIRKS), e.insertionMode = Q.BEFORE_HTML, e._processToken(t);
}
function uf(e, t) {
	t.tagID === Y.HTML ? (e._insertElement(t, q.HTML), e.insertionMode = Q.BEFORE_HEAD) : ff(e, t);
}
function df(e, t) {
	let n = t.tagID;
	(n === Y.HTML || n === Y.HEAD || n === Y.BODY || n === Y.BR) && ff(e, t);
}
function ff(e, t) {
	e._insertFakeRootElement(), e.insertionMode = Q.BEFORE_HEAD, e._processToken(t);
}
function pf(e, t) {
	switch (t.tagID) {
		case Y.HTML:
			$(e, t);
			break;
		case Y.HEAD:
			e._insertElement(t, q.HTML), e.headElement = e.openElements.current, e.insertionMode = Q.IN_HEAD;
			break;
		default: hf(e, t);
	}
}
function mf(e, t) {
	let n = t.tagID;
	n === Y.HEAD || n === Y.BODY || n === Y.HTML || n === Y.BR ? hf(e, t) : e._err(t, W.endTagWithoutMatchingOpenElement);
}
function hf(e, t) {
	e._insertFakeElement(J.HEAD, Y.HEAD), e.headElement = e.openElements.current, e.insertionMode = Q.IN_HEAD, e._processToken(t);
}
function gf(e, t) {
	switch (t.tagID) {
		case Y.HTML:
			$(e, t);
			break;
		case Y.BASE:
		case Y.BASEFONT:
		case Y.BGSOUND:
		case Y.LINK:
		case Y.META:
			e._appendElement(t, q.HTML), t.ackSelfClosing = !0;
			break;
		case Y.TITLE:
			e._switchToTextParsing(t, Uu.RCDATA);
			break;
		case Y.NOSCRIPT:
			e.options.scriptingEnabled ? e._switchToTextParsing(t, Uu.RAWTEXT) : (e._insertElement(t, q.HTML), e.insertionMode = Q.IN_HEAD_NO_SCRIPT);
			break;
		case Y.NOFRAMES:
		case Y.STYLE:
			e._switchToTextParsing(t, Uu.RAWTEXT);
			break;
		case Y.SCRIPT:
			e._switchToTextParsing(t, Uu.SCRIPT_DATA);
			break;
		case Y.TEMPLATE:
			e._insertTemplate(t), e.activeFormattingElements.insertMarker(), e.framesetOk = !1, e.insertionMode = Q.IN_TEMPLATE, e.tmplInsertionModeStack.unshift(Q.IN_TEMPLATE);
			break;
		case Y.HEAD:
			e._err(t, W.misplacedStartTagForHeadElement);
			break;
		default: yf(e, t);
	}
}
function _f(e, t) {
	switch (t.tagID) {
		case Y.HEAD:
			e.openElements.pop(), e.insertionMode = Q.AFTER_HEAD;
			break;
		case Y.BODY:
		case Y.BR:
		case Y.HTML:
			yf(e, t);
			break;
		case Y.TEMPLATE:
			vf(e, t);
			break;
		default: e._err(t, W.endTagWithoutMatchingOpenElement);
	}
}
function vf(e, t) {
	e.openElements.tmplCount > 0 ? (e.openElements.generateImpliedEndTagsThoroughly(), e.openElements.currentTagId !== Y.TEMPLATE && e._err(t, W.closingOfElementWithOpenChildElements), e.openElements.popUntilTagNamePopped(Y.TEMPLATE), e.activeFormattingElements.clearToLastMarker(), e.tmplInsertionModeStack.shift(), e._resetInsertionMode()) : e._err(t, W.endTagWithoutMatchingOpenElement);
}
function yf(e, t) {
	e.openElements.pop(), e.insertionMode = Q.AFTER_HEAD, e._processToken(t);
}
function bf(e, t) {
	switch (t.tagID) {
		case Y.HTML:
			$(e, t);
			break;
		case Y.BASEFONT:
		case Y.BGSOUND:
		case Y.HEAD:
		case Y.LINK:
		case Y.META:
		case Y.NOFRAMES:
		case Y.STYLE:
			gf(e, t);
			break;
		case Y.NOSCRIPT:
			e._err(t, W.nestedNoscriptInHead);
			break;
		default: Sf(e, t);
	}
}
function xf(e, t) {
	switch (t.tagID) {
		case Y.NOSCRIPT:
			e.openElements.pop(), e.insertionMode = Q.IN_HEAD;
			break;
		case Y.BR:
			Sf(e, t);
			break;
		default: e._err(t, W.endTagWithoutMatchingOpenElement);
	}
}
function Sf(e, t) {
	let n = t.type === G.EOF ? W.openElementsLeftAfterEof : W.disallowedContentInNoscriptInHead;
	e._err(t, n), e.openElements.pop(), e.insertionMode = Q.IN_HEAD, e._processToken(t);
}
function Cf(e, t) {
	switch (t.tagID) {
		case Y.HTML:
			$(e, t);
			break;
		case Y.BODY:
			e._insertElement(t, q.HTML), e.framesetOk = !1, e.insertionMode = Q.IN_BODY;
			break;
		case Y.FRAMESET:
			e._insertElement(t, q.HTML), e.insertionMode = Q.IN_FRAMESET;
			break;
		case Y.BASE:
		case Y.BASEFONT:
		case Y.BGSOUND:
		case Y.LINK:
		case Y.META:
		case Y.NOFRAMES:
		case Y.SCRIPT:
		case Y.STYLE:
		case Y.TEMPLATE:
		case Y.TITLE:
			e._err(t, W.abandonedHeadElementChild), e.openElements.push(e.headElement, Y.HEAD), gf(e, t), e.openElements.remove(e.headElement);
			break;
		case Y.HEAD:
			e._err(t, W.misplacedStartTagForHeadElement);
			break;
		default: Tf(e, t);
	}
}
function wf(e, t) {
	switch (t.tagID) {
		case Y.BODY:
		case Y.HTML:
		case Y.BR:
			Tf(e, t);
			break;
		case Y.TEMPLATE:
			vf(e, t);
			break;
		default: e._err(t, W.endTagWithoutMatchingOpenElement);
	}
}
function Tf(e, t) {
	e._insertFakeElement(J.BODY, Y.BODY), e.insertionMode = Q.IN_BODY, Ef(e, t);
}
function Ef(e, t) {
	switch (t.type) {
		case G.CHARACTER:
			Of(e, t);
			break;
		case G.WHITESPACE_CHARACTER:
			Df(e, t);
			break;
		case G.COMMENT:
			rf(e, t);
			break;
		case G.START_TAG:
			$(e, t);
			break;
		case G.END_TAG:
			vp(e, t);
			break;
		case G.EOF: yp(e, t);
	}
}
function Df(e, t) {
	e._reconstructActiveFormattingElements(), e._insertCharacters(t);
}
function Of(e, t) {
	e._reconstructActiveFormattingElements(), e._insertCharacters(t), e.framesetOk = !1;
}
function kf(e, t) {
	e.openElements.tmplCount === 0 && e.treeAdapter.adoptAttributes(e.openElements.items[0], t.attrs);
}
function Af(e, t) {
	let n = e.openElements.tryPeekProperlyNestedBodyElement();
	n && e.openElements.tmplCount === 0 && (e.framesetOk = !1, e.treeAdapter.adoptAttributes(n, t.attrs));
}
function jf(e, t) {
	let n = e.openElements.tryPeekProperlyNestedBodyElement();
	e.framesetOk && n && (e.treeAdapter.detachNode(n), e.openElements.popAllUpToHtmlElement(), e._insertElement(t, q.HTML), e.insertionMode = Q.IN_FRAMESET);
}
function Mf(e, t) {
	e.openElements.hasInButtonScope(Y.P) && e._closePElement(), e._insertElement(t, q.HTML);
}
function Nf(e, t) {
	e.openElements.hasInButtonScope(Y.P) && e._closePElement(), e.openElements.currentTagId !== void 0 && Hu.has(e.openElements.currentTagId) && e.openElements.pop(), e._insertElement(t, q.HTML);
}
function Pf(e, t) {
	e.openElements.hasInButtonScope(Y.P) && e._closePElement(), e._insertElement(t, q.HTML), e.skipNextNewLine = !0, e.framesetOk = !1;
}
function Ff(e, t) {
	let n = e.openElements.tmplCount > 0;
	(!e.formElement || n) && (e.openElements.hasInButtonScope(Y.P) && e._closePElement(), e._insertElement(t, q.HTML), n || (e.formElement = e.openElements.current));
}
function If(e, t) {
	e.framesetOk = !1;
	let n = t.tagID;
	for (let t = e.openElements.stackTop; t >= 0; t--) {
		let r = e.openElements.tagIDs[t];
		if (n === Y.LI && r === Y.LI || (n === Y.DD || n === Y.DT) && (r === Y.DD || r === Y.DT)) {
			e.openElements.generateImpliedEndTagsWithExclusion(r), e.openElements.popUntilTagNamePopped(r);
			break;
		}
		if (r !== Y.ADDRESS && r !== Y.DIV && r !== Y.P && e._isSpecialElement(e.openElements.items[t], r)) break;
	}
	e.openElements.hasInButtonScope(Y.P) && e._closePElement(), e._insertElement(t, q.HTML);
}
function Lf(e, t) {
	e.openElements.hasInButtonScope(Y.P) && e._closePElement(), e._insertElement(t, q.HTML), e.tokenizer.state = Uu.PLAINTEXT;
}
function Rf(e, t) {
	e.openElements.hasInScope(Y.BUTTON) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(Y.BUTTON)), e._reconstructActiveFormattingElements(), e._insertElement(t, q.HTML), e.framesetOk = !1;
}
function zf(e, t) {
	let n = e.activeFormattingElements.getElementEntryInScopeWithTagName(J.A);
	n && (nf(e, t), e.openElements.remove(n.element), e.activeFormattingElements.removeEntry(n)), e._reconstructActiveFormattingElements(), e._insertElement(t, q.HTML), e.activeFormattingElements.pushElement(e.openElements.current, t);
}
function Bf(e, t) {
	e._reconstructActiveFormattingElements(), e._insertElement(t, q.HTML), e.activeFormattingElements.pushElement(e.openElements.current, t);
}
function Vf(e, t) {
	e._reconstructActiveFormattingElements(), e.openElements.hasInScope(Y.NOBR) && (nf(e, t), e._reconstructActiveFormattingElements()), e._insertElement(t, q.HTML), e.activeFormattingElements.pushElement(e.openElements.current, t);
}
function Hf(e, t) {
	e._reconstructActiveFormattingElements(), e._insertElement(t, q.HTML), e.activeFormattingElements.insertMarker(), e.framesetOk = !1;
}
function Uf(e, t) {
	e.treeAdapter.getDocumentMode(e.document) !== Ru.QUIRKS && e.openElements.hasInButtonScope(Y.P) && e._closePElement(), e._insertElement(t, q.HTML), e.framesetOk = !1, e.insertionMode = Q.IN_TABLE;
}
function Wf(e, t) {
	e._reconstructActiveFormattingElements(), e._appendElement(t, q.HTML), e.framesetOk = !1, t.ackSelfClosing = !0;
}
function Gf(e) {
	let t = vu(e, Lu.TYPE);
	return t != null && t.toLowerCase() === Ud;
}
function Kf(e, t) {
	e._reconstructActiveFormattingElements(), e._appendElement(t, q.HTML), Gf(t) || (e.framesetOk = !1), t.ackSelfClosing = !0;
}
function qf(e, t) {
	e._appendElement(t, q.HTML), t.ackSelfClosing = !0;
}
function Jf(e, t) {
	e.openElements.hasInButtonScope(Y.P) && e._closePElement(), e._appendElement(t, q.HTML), e.framesetOk = !1, t.ackSelfClosing = !0;
}
function Yf(e, t) {
	t.tagName = J.IMG, t.tagID = Y.IMG, Wf(e, t);
}
function Xf(e, t) {
	e._insertElement(t, q.HTML), e.skipNextNewLine = !0, e.tokenizer.state = Uu.RCDATA, e.originalInsertionMode = e.insertionMode, e.framesetOk = !1, e.insertionMode = Q.TEXT;
}
function Zf(e, t) {
	e.openElements.hasInButtonScope(Y.P) && e._closePElement(), e._reconstructActiveFormattingElements(), e.framesetOk = !1, e._switchToTextParsing(t, Uu.RAWTEXT);
}
function Qf(e, t) {
	e.framesetOk = !1, e._switchToTextParsing(t, Uu.RAWTEXT);
}
function $f(e, t) {
	e._switchToTextParsing(t, Uu.RAWTEXT);
}
function ep(e, t) {
	e._reconstructActiveFormattingElements(), e._insertElement(t, q.HTML), e.framesetOk = !1, e.insertionMode = e.insertionMode === Q.IN_TABLE || e.insertionMode === Q.IN_CAPTION || e.insertionMode === Q.IN_TABLE_BODY || e.insertionMode === Q.IN_ROW || e.insertionMode === Q.IN_CELL ? Q.IN_SELECT_IN_TABLE : Q.IN_SELECT;
}
function tp(e, t) {
	e.openElements.currentTagId === Y.OPTION && e.openElements.pop(), e._reconstructActiveFormattingElements(), e._insertElement(t, q.HTML);
}
function np(e, t) {
	e.openElements.hasInScope(Y.RUBY) && e.openElements.generateImpliedEndTags(), e._insertElement(t, q.HTML);
}
function rp(e, t) {
	e.openElements.hasInScope(Y.RUBY) && e.openElements.generateImpliedEndTagsWithExclusion(Y.RTC), e._insertElement(t, q.HTML);
}
function ip(e, t) {
	e._reconstructActiveFormattingElements(), Id(t), Rd(t), t.selfClosing ? e._appendElement(t, q.MATHML) : e._insertElement(t, q.MATHML), t.ackSelfClosing = !0;
}
function ap(e, t) {
	e._reconstructActiveFormattingElements(), Ld(t), Rd(t), t.selfClosing ? e._appendElement(t, q.SVG) : e._insertElement(t, q.SVG), t.ackSelfClosing = !0;
}
function op(e, t) {
	e._reconstructActiveFormattingElements(), e._insertElement(t, q.HTML);
}
function $(e, t) {
	switch (t.tagID) {
		case Y.I:
		case Y.S:
		case Y.B:
		case Y.U:
		case Y.EM:
		case Y.TT:
		case Y.BIG:
		case Y.CODE:
		case Y.FONT:
		case Y.SMALL:
		case Y.STRIKE:
		case Y.STRONG:
			Bf(e, t);
			break;
		case Y.A:
			zf(e, t);
			break;
		case Y.H1:
		case Y.H2:
		case Y.H3:
		case Y.H4:
		case Y.H5:
		case Y.H6:
			Nf(e, t);
			break;
		case Y.P:
		case Y.DL:
		case Y.OL:
		case Y.UL:
		case Y.DIV:
		case Y.DIR:
		case Y.NAV:
		case Y.MAIN:
		case Y.MENU:
		case Y.ASIDE:
		case Y.CENTER:
		case Y.FIGURE:
		case Y.FOOTER:
		case Y.HEADER:
		case Y.HGROUP:
		case Y.DIALOG:
		case Y.DETAILS:
		case Y.ADDRESS:
		case Y.ARTICLE:
		case Y.SEARCH:
		case Y.SECTION:
		case Y.SUMMARY:
		case Y.FIELDSET:
		case Y.BLOCKQUOTE:
		case Y.FIGCAPTION:
			Mf(e, t);
			break;
		case Y.LI:
		case Y.DD:
		case Y.DT:
			If(e, t);
			break;
		case Y.BR:
		case Y.IMG:
		case Y.WBR:
		case Y.AREA:
		case Y.EMBED:
		case Y.KEYGEN:
			Wf(e, t);
			break;
		case Y.HR:
			Jf(e, t);
			break;
		case Y.RB:
		case Y.RTC:
			np(e, t);
			break;
		case Y.RT:
		case Y.RP:
			rp(e, t);
			break;
		case Y.PRE:
		case Y.LISTING:
			Pf(e, t);
			break;
		case Y.XMP:
			Zf(e, t);
			break;
		case Y.SVG:
			ap(e, t);
			break;
		case Y.HTML:
			kf(e, t);
			break;
		case Y.BASE:
		case Y.LINK:
		case Y.META:
		case Y.STYLE:
		case Y.TITLE:
		case Y.SCRIPT:
		case Y.BGSOUND:
		case Y.BASEFONT:
		case Y.TEMPLATE:
			gf(e, t);
			break;
		case Y.BODY:
			Af(e, t);
			break;
		case Y.FORM:
			Ff(e, t);
			break;
		case Y.NOBR:
			Vf(e, t);
			break;
		case Y.MATH:
			ip(e, t);
			break;
		case Y.TABLE:
			Uf(e, t);
			break;
		case Y.INPUT:
			Kf(e, t);
			break;
		case Y.PARAM:
		case Y.TRACK:
		case Y.SOURCE:
			qf(e, t);
			break;
		case Y.IMAGE:
			Yf(e, t);
			break;
		case Y.BUTTON:
			Rf(e, t);
			break;
		case Y.APPLET:
		case Y.OBJECT:
		case Y.MARQUEE:
			Hf(e, t);
			break;
		case Y.IFRAME:
			Qf(e, t);
			break;
		case Y.SELECT:
			ep(e, t);
			break;
		case Y.OPTION:
		case Y.OPTGROUP:
			tp(e, t);
			break;
		case Y.NOEMBED:
		case Y.NOFRAMES:
			$f(e, t);
			break;
		case Y.FRAMESET:
			jf(e, t);
			break;
		case Y.TEXTAREA:
			Xf(e, t);
			break;
		case Y.NOSCRIPT:
			e.options.scriptingEnabled ? $f(e, t) : op(e, t);
			break;
		case Y.PLAINTEXT:
			Lf(e, t);
			break;
		case Y.COL:
		case Y.TH:
		case Y.TD:
		case Y.TR:
		case Y.HEAD:
		case Y.FRAME:
		case Y.TBODY:
		case Y.TFOOT:
		case Y.THEAD:
		case Y.CAPTION:
		case Y.COLGROUP: break;
		default: op(e, t);
	}
}
function sp(e, t) {
	if (e.openElements.hasInScope(Y.BODY) && (e.insertionMode = Q.AFTER_BODY, e.options.sourceCodeLocationInfo)) {
		let n = e.openElements.tryPeekProperlyNestedBodyElement();
		n && e._setEndLocation(n, t);
	}
}
function cp(e, t) {
	e.openElements.hasInScope(Y.BODY) && (e.insertionMode = Q.AFTER_BODY, rm(e, t));
}
function lp(e, t) {
	let n = t.tagID;
	e.openElements.hasInScope(n) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(n));
}
function up(e) {
	let t = e.openElements.tmplCount > 0, { formElement: n } = e;
	t || (e.formElement = null), (n || t) && e.openElements.hasInScope(Y.FORM) && (e.openElements.generateImpliedEndTags(), t ? e.openElements.popUntilTagNamePopped(Y.FORM) : n && e.openElements.remove(n));
}
function dp(e) {
	e.openElements.hasInButtonScope(Y.P) || e._insertFakeElement(J.P, Y.P), e._closePElement();
}
function fp(e) {
	e.openElements.hasInListItemScope(Y.LI) && (e.openElements.generateImpliedEndTagsWithExclusion(Y.LI), e.openElements.popUntilTagNamePopped(Y.LI));
}
function pp(e, t) {
	let n = t.tagID;
	e.openElements.hasInScope(n) && (e.openElements.generateImpliedEndTagsWithExclusion(n), e.openElements.popUntilTagNamePopped(n));
}
function mp(e) {
	e.openElements.hasNumberedHeaderInScope() && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilNumberedHeaderPopped());
}
function hp(e, t) {
	let n = t.tagID;
	e.openElements.hasInScope(n) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(n), e.activeFormattingElements.clearToLastMarker());
}
function gp(e) {
	e._reconstructActiveFormattingElements(), e._insertFakeElement(J.BR, Y.BR), e.openElements.pop(), e.framesetOk = !1;
}
function _p(e, t) {
	let n = t.tagName, r = t.tagID;
	for (let t = e.openElements.stackTop; t > 0; t--) {
		let i = e.openElements.items[t], a = e.openElements.tagIDs[t];
		if (r === a && (r !== Y.UNKNOWN || e.treeAdapter.getTagName(i) === n)) {
			e.openElements.generateImpliedEndTagsWithExclusion(r), e.openElements.stackTop >= t && e.openElements.shortenToLength(t);
			break;
		}
		if (e._isSpecialElement(i, a)) break;
	}
}
function vp(e, t) {
	switch (t.tagID) {
		case Y.A:
		case Y.B:
		case Y.I:
		case Y.S:
		case Y.U:
		case Y.EM:
		case Y.TT:
		case Y.BIG:
		case Y.CODE:
		case Y.FONT:
		case Y.NOBR:
		case Y.SMALL:
		case Y.STRIKE:
		case Y.STRONG:
			nf(e, t);
			break;
		case Y.P:
			dp(e);
			break;
		case Y.DL:
		case Y.UL:
		case Y.OL:
		case Y.DIR:
		case Y.DIV:
		case Y.NAV:
		case Y.PRE:
		case Y.MAIN:
		case Y.MENU:
		case Y.ASIDE:
		case Y.BUTTON:
		case Y.CENTER:
		case Y.FIGURE:
		case Y.FOOTER:
		case Y.HEADER:
		case Y.HGROUP:
		case Y.DIALOG:
		case Y.ADDRESS:
		case Y.ARTICLE:
		case Y.DETAILS:
		case Y.SEARCH:
		case Y.SECTION:
		case Y.SUMMARY:
		case Y.LISTING:
		case Y.FIELDSET:
		case Y.BLOCKQUOTE:
		case Y.FIGCAPTION:
			lp(e, t);
			break;
		case Y.LI:
			fp(e);
			break;
		case Y.DD:
		case Y.DT:
			pp(e, t);
			break;
		case Y.H1:
		case Y.H2:
		case Y.H3:
		case Y.H4:
		case Y.H5:
		case Y.H6:
			mp(e);
			break;
		case Y.BR:
			gp(e);
			break;
		case Y.BODY:
			sp(e, t);
			break;
		case Y.HTML:
			cp(e, t);
			break;
		case Y.FORM:
			up(e);
			break;
		case Y.APPLET:
		case Y.OBJECT:
		case Y.MARQUEE:
			hp(e, t);
			break;
		case Y.TEMPLATE:
			vf(e, t);
			break;
		default: _p(e, t);
	}
}
function yp(e, t) {
	e.tmplInsertionModeStack.length > 0 ? tm(e, t) : sf(e, t);
}
function bp(e, t) {
	var n;
	t.tagID === Y.SCRIPT && ((n = e.scriptHandler) == null || n.call(e, e.openElements.current)), e.openElements.pop(), e.insertionMode = e.originalInsertionMode;
}
function xp(e, t) {
	e._err(t, W.eofInElementThatCanContainOnlyText), e.openElements.pop(), e.insertionMode = e.originalInsertionMode, e.onEof(t);
}
function Sp(e, t) {
	if (e.openElements.currentTagId !== void 0 && qd.has(e.openElements.currentTagId)) switch (e.pendingCharacterTokens.length = 0, e.hasNonWhitespacePendingCharacterToken = !1, e.originalInsertionMode = e.insertionMode, e.insertionMode = Q.IN_TABLE_TEXT, t.type) {
		case G.CHARACTER:
			Fp(e, t);
			break;
		case G.WHITESPACE_CHARACTER: Pp(e, t);
	}
	else Np(e, t);
}
function Cp(e, t) {
	e.openElements.clearBackToTableContext(), e.activeFormattingElements.insertMarker(), e._insertElement(t, q.HTML), e.insertionMode = Q.IN_CAPTION;
}
function wp(e, t) {
	e.openElements.clearBackToTableContext(), e._insertElement(t, q.HTML), e.insertionMode = Q.IN_COLUMN_GROUP;
}
function Tp(e, t) {
	e.openElements.clearBackToTableContext(), e._insertFakeElement(J.COLGROUP, Y.COLGROUP), e.insertionMode = Q.IN_COLUMN_GROUP, Bp(e, t);
}
function Ep(e, t) {
	e.openElements.clearBackToTableContext(), e._insertElement(t, q.HTML), e.insertionMode = Q.IN_TABLE_BODY;
}
function Dp(e, t) {
	e.openElements.clearBackToTableContext(), e._insertFakeElement(J.TBODY, Y.TBODY), e.insertionMode = Q.IN_TABLE_BODY, Up(e, t);
}
function Op(e, t) {
	e.openElements.hasInTableScope(Y.TABLE) && (e.openElements.popUntilTagNamePopped(Y.TABLE), e._resetInsertionMode(), e._processStartTag(t));
}
function kp(e, t) {
	Gf(t) ? e._appendElement(t, q.HTML) : Np(e, t), t.ackSelfClosing = !0;
}
function Ap(e, t) {
	!e.formElement && e.openElements.tmplCount === 0 && (e._insertElement(t, q.HTML), e.formElement = e.openElements.current, e.openElements.pop());
}
function jp(e, t) {
	switch (t.tagID) {
		case Y.TD:
		case Y.TH:
		case Y.TR:
			Dp(e, t);
			break;
		case Y.STYLE:
		case Y.SCRIPT:
		case Y.TEMPLATE:
			gf(e, t);
			break;
		case Y.COL:
			Tp(e, t);
			break;
		case Y.FORM:
			Ap(e, t);
			break;
		case Y.TABLE:
			Op(e, t);
			break;
		case Y.TBODY:
		case Y.TFOOT:
		case Y.THEAD:
			Ep(e, t);
			break;
		case Y.INPUT:
			kp(e, t);
			break;
		case Y.CAPTION:
			Cp(e, t);
			break;
		case Y.COLGROUP:
			wp(e, t);
			break;
		default: Np(e, t);
	}
}
function Mp(e, t) {
	switch (t.tagID) {
		case Y.TABLE:
			e.openElements.hasInTableScope(Y.TABLE) && (e.openElements.popUntilTagNamePopped(Y.TABLE), e._resetInsertionMode());
			break;
		case Y.TEMPLATE:
			vf(e, t);
			break;
		case Y.BODY:
		case Y.CAPTION:
		case Y.COL:
		case Y.COLGROUP:
		case Y.HTML:
		case Y.TBODY:
		case Y.TD:
		case Y.TFOOT:
		case Y.TH:
		case Y.THEAD:
		case Y.TR: break;
		default: Np(e, t);
	}
}
function Np(e, t) {
	let n = e.fosterParentingEnabled;
	e.fosterParentingEnabled = !0, Ef(e, t), e.fosterParentingEnabled = n;
}
function Pp(e, t) {
	e.pendingCharacterTokens.push(t);
}
function Fp(e, t) {
	e.pendingCharacterTokens.push(t), e.hasNonWhitespacePendingCharacterToken = !0;
}
function Ip(e, t) {
	let n = 0;
	if (e.hasNonWhitespacePendingCharacterToken) for (; n < e.pendingCharacterTokens.length; n++) Np(e, e.pendingCharacterTokens[n]);
	else for (; n < e.pendingCharacterTokens.length; n++) e._insertCharacters(e.pendingCharacterTokens[n]);
	e.insertionMode = e.originalInsertionMode, e._processToken(t);
}
var Lp = /* @__PURE__ */ new Set([
	Y.CAPTION,
	Y.COL,
	Y.COLGROUP,
	Y.TBODY,
	Y.TD,
	Y.TFOOT,
	Y.TH,
	Y.THEAD,
	Y.TR
]);
function Rp(e, t) {
	let n = t.tagID;
	Lp.has(n) ? e.openElements.hasInTableScope(Y.CAPTION) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(Y.CAPTION), e.activeFormattingElements.clearToLastMarker(), e.insertionMode = Q.IN_TABLE, jp(e, t)) : $(e, t);
}
function zp(e, t) {
	let n = t.tagID;
	switch (n) {
		case Y.CAPTION:
		case Y.TABLE:
			e.openElements.hasInTableScope(Y.CAPTION) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(Y.CAPTION), e.activeFormattingElements.clearToLastMarker(), e.insertionMode = Q.IN_TABLE, n === Y.TABLE && Mp(e, t));
			break;
		case Y.BODY:
		case Y.COL:
		case Y.COLGROUP:
		case Y.HTML:
		case Y.TBODY:
		case Y.TD:
		case Y.TFOOT:
		case Y.TH:
		case Y.THEAD:
		case Y.TR: break;
		default: vp(e, t);
	}
}
function Bp(e, t) {
	switch (t.tagID) {
		case Y.HTML:
			$(e, t);
			break;
		case Y.COL:
			e._appendElement(t, q.HTML), t.ackSelfClosing = !0;
			break;
		case Y.TEMPLATE:
			gf(e, t);
			break;
		default: Hp(e, t);
	}
}
function Vp(e, t) {
	switch (t.tagID) {
		case Y.COLGROUP:
			e.openElements.currentTagId === Y.COLGROUP && (e.openElements.pop(), e.insertionMode = Q.IN_TABLE);
			break;
		case Y.TEMPLATE:
			vf(e, t);
			break;
		case Y.COL: break;
		default: Hp(e, t);
	}
}
function Hp(e, t) {
	e.openElements.currentTagId === Y.COLGROUP && (e.openElements.pop(), e.insertionMode = Q.IN_TABLE, e._processToken(t));
}
function Up(e, t) {
	switch (t.tagID) {
		case Y.TR:
			e.openElements.clearBackToTableBodyContext(), e._insertElement(t, q.HTML), e.insertionMode = Q.IN_ROW;
			break;
		case Y.TH:
		case Y.TD:
			e.openElements.clearBackToTableBodyContext(), e._insertFakeElement(J.TR, Y.TR), e.insertionMode = Q.IN_ROW, Gp(e, t);
			break;
		case Y.CAPTION:
		case Y.COL:
		case Y.COLGROUP:
		case Y.TBODY:
		case Y.TFOOT:
		case Y.THEAD:
			e.openElements.hasTableBodyContextInTableScope() && (e.openElements.clearBackToTableBodyContext(), e.openElements.pop(), e.insertionMode = Q.IN_TABLE, jp(e, t));
			break;
		default: jp(e, t);
	}
}
function Wp(e, t) {
	let n = t.tagID;
	switch (t.tagID) {
		case Y.TBODY:
		case Y.TFOOT:
		case Y.THEAD:
			e.openElements.hasInTableScope(n) && (e.openElements.clearBackToTableBodyContext(), e.openElements.pop(), e.insertionMode = Q.IN_TABLE);
			break;
		case Y.TABLE:
			e.openElements.hasTableBodyContextInTableScope() && (e.openElements.clearBackToTableBodyContext(), e.openElements.pop(), e.insertionMode = Q.IN_TABLE, Mp(e, t));
			break;
		case Y.BODY:
		case Y.CAPTION:
		case Y.COL:
		case Y.COLGROUP:
		case Y.HTML:
		case Y.TD:
		case Y.TH:
		case Y.TR: break;
		default: Mp(e, t);
	}
}
function Gp(e, t) {
	switch (t.tagID) {
		case Y.TH:
		case Y.TD:
			e.openElements.clearBackToTableRowContext(), e._insertElement(t, q.HTML), e.insertionMode = Q.IN_CELL, e.activeFormattingElements.insertMarker();
			break;
		case Y.CAPTION:
		case Y.COL:
		case Y.COLGROUP:
		case Y.TBODY:
		case Y.TFOOT:
		case Y.THEAD:
		case Y.TR:
			e.openElements.hasInTableScope(Y.TR) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = Q.IN_TABLE_BODY, Up(e, t));
			break;
		default: jp(e, t);
	}
}
function Kp(e, t) {
	switch (t.tagID) {
		case Y.TR:
			e.openElements.hasInTableScope(Y.TR) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = Q.IN_TABLE_BODY);
			break;
		case Y.TABLE:
			e.openElements.hasInTableScope(Y.TR) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = Q.IN_TABLE_BODY, Wp(e, t));
			break;
		case Y.TBODY:
		case Y.TFOOT:
		case Y.THEAD:
			(e.openElements.hasInTableScope(t.tagID) || e.openElements.hasInTableScope(Y.TR)) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = Q.IN_TABLE_BODY, Wp(e, t));
			break;
		case Y.BODY:
		case Y.CAPTION:
		case Y.COL:
		case Y.COLGROUP:
		case Y.HTML:
		case Y.TD:
		case Y.TH: break;
		default: Mp(e, t);
	}
}
function qp(e, t) {
	let n = t.tagID;
	Lp.has(n) ? (e.openElements.hasInTableScope(Y.TD) || e.openElements.hasInTableScope(Y.TH)) && (e._closeTableCell(), Gp(e, t)) : $(e, t);
}
function Jp(e, t) {
	let n = t.tagID;
	switch (n) {
		case Y.TD:
		case Y.TH:
			e.openElements.hasInTableScope(n) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(n), e.activeFormattingElements.clearToLastMarker(), e.insertionMode = Q.IN_ROW);
			break;
		case Y.TABLE:
		case Y.TBODY:
		case Y.TFOOT:
		case Y.THEAD:
		case Y.TR:
			e.openElements.hasInTableScope(n) && (e._closeTableCell(), Kp(e, t));
			break;
		case Y.BODY:
		case Y.CAPTION:
		case Y.COL:
		case Y.COLGROUP:
		case Y.HTML: break;
		default: vp(e, t);
	}
}
function Yp(e, t) {
	switch (t.tagID) {
		case Y.HTML:
			$(e, t);
			break;
		case Y.OPTION:
			e.openElements.currentTagId === Y.OPTION && e.openElements.pop(), e._insertElement(t, q.HTML);
			break;
		case Y.OPTGROUP:
			e.openElements.currentTagId === Y.OPTION && e.openElements.pop(), e.openElements.currentTagId === Y.OPTGROUP && e.openElements.pop(), e._insertElement(t, q.HTML);
			break;
		case Y.HR:
			e.openElements.currentTagId === Y.OPTION && e.openElements.pop(), e.openElements.currentTagId === Y.OPTGROUP && e.openElements.pop(), e._appendElement(t, q.HTML), t.ackSelfClosing = !0;
			break;
		case Y.INPUT:
		case Y.KEYGEN:
		case Y.TEXTAREA:
		case Y.SELECT:
			e.openElements.hasInSelectScope(Y.SELECT) && (e.openElements.popUntilTagNamePopped(Y.SELECT), e._resetInsertionMode(), t.tagID !== Y.SELECT && e._processStartTag(t));
			break;
		case Y.SCRIPT:
		case Y.TEMPLATE: gf(e, t);
	}
}
function Xp(e, t) {
	switch (t.tagID) {
		case Y.OPTGROUP:
			e.openElements.stackTop > 0 && e.openElements.currentTagId === Y.OPTION && e.openElements.tagIDs[e.openElements.stackTop - 1] === Y.OPTGROUP && e.openElements.pop(), e.openElements.currentTagId === Y.OPTGROUP && e.openElements.pop();
			break;
		case Y.OPTION:
			e.openElements.currentTagId === Y.OPTION && e.openElements.pop();
			break;
		case Y.SELECT:
			e.openElements.hasInSelectScope(Y.SELECT) && (e.openElements.popUntilTagNamePopped(Y.SELECT), e._resetInsertionMode());
			break;
		case Y.TEMPLATE: vf(e, t);
	}
}
function Zp(e, t) {
	let n = t.tagID;
	n === Y.CAPTION || n === Y.TABLE || n === Y.TBODY || n === Y.TFOOT || n === Y.THEAD || n === Y.TR || n === Y.TD || n === Y.TH ? (e.openElements.popUntilTagNamePopped(Y.SELECT), e._resetInsertionMode(), e._processStartTag(t)) : Yp(e, t);
}
function Qp(e, t) {
	let n = t.tagID;
	n === Y.CAPTION || n === Y.TABLE || n === Y.TBODY || n === Y.TFOOT || n === Y.THEAD || n === Y.TR || n === Y.TD || n === Y.TH ? e.openElements.hasInTableScope(n) && (e.openElements.popUntilTagNamePopped(Y.SELECT), e._resetInsertionMode(), e.onEndTag(t)) : Xp(e, t);
}
function $p(e, t) {
	switch (t.tagID) {
		case Y.BASE:
		case Y.BASEFONT:
		case Y.BGSOUND:
		case Y.LINK:
		case Y.META:
		case Y.NOFRAMES:
		case Y.SCRIPT:
		case Y.STYLE:
		case Y.TEMPLATE:
		case Y.TITLE:
			gf(e, t);
			break;
		case Y.CAPTION:
		case Y.COLGROUP:
		case Y.TBODY:
		case Y.TFOOT:
		case Y.THEAD:
			e.tmplInsertionModeStack[0] = Q.IN_TABLE, e.insertionMode = Q.IN_TABLE, jp(e, t);
			break;
		case Y.COL:
			e.tmplInsertionModeStack[0] = Q.IN_COLUMN_GROUP, e.insertionMode = Q.IN_COLUMN_GROUP, Bp(e, t);
			break;
		case Y.TR:
			e.tmplInsertionModeStack[0] = Q.IN_TABLE_BODY, e.insertionMode = Q.IN_TABLE_BODY, Up(e, t);
			break;
		case Y.TD:
		case Y.TH:
			e.tmplInsertionModeStack[0] = Q.IN_ROW, e.insertionMode = Q.IN_ROW, Gp(e, t);
			break;
		default: e.tmplInsertionModeStack[0] = Q.IN_BODY, e.insertionMode = Q.IN_BODY, $(e, t);
	}
}
function em(e, t) {
	t.tagID === Y.TEMPLATE && vf(e, t);
}
function tm(e, t) {
	e.openElements.tmplCount > 0 ? (e.openElements.popUntilTagNamePopped(Y.TEMPLATE), e.activeFormattingElements.clearToLastMarker(), e.tmplInsertionModeStack.shift(), e._resetInsertionMode(), e.onEof(t)) : sf(e, t);
}
function nm(e, t) {
	t.tagID === Y.HTML ? $(e, t) : im(e, t);
}
function rm(e, t) {
	if (t.tagID === Y.HTML) {
		if (e.fragmentContext || (e.insertionMode = Q.AFTER_AFTER_BODY), e.options.sourceCodeLocationInfo && e.openElements.tagIDs[0] === Y.HTML) {
			e._setEndLocation(e.openElements.items[0], t);
			let n = e.openElements.items[1];
			n && !e.treeAdapter.getNodeSourceCodeLocation(n)?.endTag && e._setEndLocation(n, t);
		}
	} else im(e, t);
}
function im(e, t) {
	e.insertionMode = Q.IN_BODY, Ef(e, t);
}
function am(e, t) {
	switch (t.tagID) {
		case Y.HTML:
			$(e, t);
			break;
		case Y.FRAMESET:
			e._insertElement(t, q.HTML);
			break;
		case Y.FRAME:
			e._appendElement(t, q.HTML), t.ackSelfClosing = !0;
			break;
		case Y.NOFRAMES: gf(e, t);
	}
}
function om(e, t) {
	t.tagID === Y.FRAMESET && !e.openElements.isRootHtmlElementCurrent() && (e.openElements.pop(), !e.fragmentContext && e.openElements.currentTagId !== Y.FRAMESET && (e.insertionMode = Q.AFTER_FRAMESET));
}
function sm(e, t) {
	switch (t.tagID) {
		case Y.HTML:
			$(e, t);
			break;
		case Y.NOFRAMES: gf(e, t);
	}
}
function cm(e, t) {
	t.tagID === Y.HTML && (e.insertionMode = Q.AFTER_AFTER_FRAMESET);
}
function lm(e, t) {
	t.tagID === Y.HTML ? $(e, t) : um(e, t);
}
function um(e, t) {
	e.insertionMode = Q.IN_BODY, Ef(e, t);
}
function dm(e, t) {
	switch (t.tagID) {
		case Y.HTML:
			$(e, t);
			break;
		case Y.NOFRAMES: gf(e, t);
	}
}
function fm(e, t) {
	t.chars = "�", e._insertCharacters(t);
}
function pm(e, t) {
	e._insertCharacters(t), e.framesetOk = !1;
}
function mm(e) {
	for (; e.treeAdapter.getNamespaceURI(e.openElements.current) !== q.HTML && e.openElements.currentTagId !== void 0 && !e._isIntegrationPoint(e.openElements.currentTagId, e.openElements.current);) e.openElements.pop();
}
function hm(e, t) {
	if (Fd(t)) mm(e), e._startTagOutsideForeignContent(t);
	else {
		let n = e._getAdjustedCurrentElement(), r = e.treeAdapter.getNamespaceURI(n);
		r === q.MATHML ? Id(t) : r === q.SVG && (zd(t), Ld(t)), Rd(t), t.selfClosing ? e._appendElement(t, r) : e._insertElement(t, r), t.ackSelfClosing = !0;
	}
}
function gm(e, t) {
	if (t.tagID === Y.P || t.tagID === Y.BR) mm(e), e._endTagOutsideForeignContent(t);
	else for (let n = e.openElements.stackTop; n > 0; n--) {
		let r = e.openElements.items[n];
		if (e.treeAdapter.getNamespaceURI(r) === q.HTML) {
			e._endTagOutsideForeignContent(t);
			break;
		}
		let i = e.treeAdapter.getTagName(r);
		if (i.toLowerCase() === t.tagName) {
			t.tagName = i, e.openElements.shortenToLength(n);
			break;
		}
	}
}
J.AREA, J.BASE, J.BASEFONT, J.BGSOUND, J.BR, J.COL, J.EMBED, J.FRAME, J.HR, J.IMG, J.INPUT, J.KEYGEN, J.LINK, J.META, J.PARAM, J.SOURCE, J.TRACK, J.WBR;
// node_modules/parse5/dist/index.js
function _m(e, t, n) {
	typeof e == "string" && (n = t, t = e, e = null);
	let r = Yd.getFragmentParser(e, n);
	return r.tokenizer.write(t, !0), r.getFragment();
}
// src/image-data.js
function vm(e) {
	if (typeof e != "string") return null;
	let t = e.match(/^data:(image\/(?:png|jpeg|webp));base64,([A-Za-z0-9+/=]+)$/);
	if (!t) return null;
	try {
		let e = atob(t[2]);
		return (t[1] === "image/png" ? e.startsWith("PNG\r\n\n") && e.length >= 24 && e.slice(12, 16) === "IHDR" : t[1] === "image/jpeg" ? e.startsWith("ÿØÿ") && e.endsWith("ÿÙ") : e.length >= 20 && e.slice(0, 4) === "RIFF" && e.slice(8, 12) === "WEBP" && [
			"VP8 ",
			"VP8L",
			"VP8X"
		].includes(e.slice(12, 16))) ? {
			mime: t[1],
			base64: t[2],
			bytes: e
		} : null;
	} catch {
		return null;
	}
}
// src/html-content.js
var ym = (e) => String(e ?? "").replace(/[&<>"']/g, (e) => ({
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	"\"": "&quot;",
	"'": "&#39;"
})[e]), bm = new Set("p div span br strong b em i u s del h2 h3 h4 ul ol li blockquote hr a img figure figcaption pre code table thead tbody tfoot tr th td details summary".split(" ")), xm = new Set("script style template svg math object embed form input button select textarea link meta base noscript".split(" ")), Sm = new Set("p div h1 h2 h3 h4 ul ol li blockquote hr figure figcaption pre table tr br".split(" "));
function Cm(e) {
	let t = String(e ?? "").trim();
	if (/[\\\u0000-\u001f\u007f]/.test(t)) return "";
	if (/^\/(?!\/)/.test(t) || /^#[\w-]+$/.test(t) || /^tel:\+?[\d -]{5,25}$/.test(t)) return t;
	try {
		let e = new URL(t);
		return ["https:", "http:"].includes(e.protocol) && !e.username && !e.password ? e.href : "";
	} catch {
		return "";
	}
}
function wm(e) {
	try {
		let t = new URL(String(e).trim());
		if (t.protocol !== "https:" || t.username || t.password) return null;
		let n = t.hostname.toLowerCase(), r;
		if ([
			"youtube.com",
			"www.youtube.com",
			"m.youtube.com",
			"www.youtube-nocookie.com",
			"youtube-nocookie.com"
		].includes(n) && (r = t.searchParams.get("v") ?? t.pathname.match(/^\/(?:embed|shorts)\/([\w-]+)/)?.[1]), n === "youtu.be" && (r = t.pathname.slice(1)), r && /^[\w-]{11}$/.test(r)) return {
			kind: "iframe",
			src: "https://www.youtube-nocookie.com/embed/" + r
		};
		if ([
			"vimeo.com",
			"www.vimeo.com",
			"player.vimeo.com"
		].includes(n) && (r = t.pathname.match(/(?:\/video)?\/(\d+)\/?$/)?.[1], r)) return {
			kind: "iframe",
			src: "https://player.vimeo.com/video/" + r
		};
		if (/\.(?:mp4|webm)$/i.test(t.pathname)) return {
			kind: "video",
			src: t.href
		};
	} catch {}
	return null;
}
function Tm(e) {
	if (e.startsWith("data:")) return vm(e) ? e : "";
	let t = Cm(e);
	return t && (t.startsWith("https://") || /^\/(?:assets\/|media\/[\w-]+\/inline\/)/.test(t)) ? t : "";
}
function Em(e) {
	let t = String(e ?? "").trim().toLowerCase();
	return /^\d{1,3}%$/.test(t) && parseInt(t) >= 10 && parseInt(t) <= 100 ? parseInt(t) + "%" : /^\d{1,4}(?:px)?$/.test(t) && parseInt(t) >= 1 && parseInt(t) <= 4096 ? parseInt(t) + "px" : "";
}
function Dm(e) {
	let t = String(e.style ?? "").split(";").map((e) => e.trim()).find((e) => /^width\s*:/i.test(e)), n = Em(t?.slice(t.indexOf(":") + 1)) || Em(e.width);
	return n ? ` style="width:${n}"` : "";
}
function Om(e) {
	let t = [];
	for (let n of String(e ?? "").split(";")) {
		let e = n.indexOf(":"), r = n.slice(0, e).trim().toLowerCase(), i = n.slice(e + 1).trim().toLowerCase();
		r === "text-align" && [
			"left",
			"center",
			"right",
			"justify"
		].includes(i) && t.push(r + ":" + i), ["color", "background-color"].includes(r) && (/^(?:#[\da-f]{3}|#[\da-f]{6}|black|white|red|blue|green|gray|navy|yellow)$/.test(i) || /^rgb\(\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*\)$/.test(i)) && t.push(r + ":" + i), r === "font-size" && /^(?:16|18|20|22|24|28|32|36|40|48)px$/.test(i) && t.push(r + ":" + i);
	}
	return t.join(";");
}
function km(e, { image: t = (e) => Tm(e) } = {}) {
	let n = _m(String(e ?? "")), r = [], i = "", a = 0, o = (e, t = 0) => t > 80 ? "" : e.nodeName === "#text" ? e.value : (e.childNodes ?? []).map((e) => o(e, t + 1)).join(""), s = (e, n = 0) => {
		if (++a > 2e4 || n > 80) throw Error("HTML 구조가 너무 복잡합니다. 본문을 나누거나 서식을 줄여주세요.");
		if (e.nodeName === "#text") return i += e.value, ym(e.value);
		if (!e.tagName) return e.nodeName === "#comment" ? "" : (e.childNodes ?? []).map((e) => s(e, n + 1)).join("");
		if (e.namespaceURI !== "http://www.w3.org/1999/xhtml" || xm.has(e.tagName)) return "";
		let c = Object.fromEntries((e.attrs ?? []).map((e) => [e.name, e.value])), l = e.tagName === "h1" ? "h2" : e.tagName;
		if (l === "iframe" || l === "video") {
			let t = wm(c.src || (e.childNodes ?? []).find((e) => e.tagName === "source")?.attrs?.find((e) => e.name === "src")?.value);
			if (!t) return "";
			let n = Dm(c);
			return t.kind === "iframe" ? `<iframe src="${ym(t.src)}"${n} title="${ym(c.title || "본문 동영상")}" loading="lazy" allow="fullscreen; picture-in-picture; encrypted-media" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` : `<video src="${ym(t.src)}"${n} controls playsinline preload="metadata"></video>`;
		}
		if (l === "img") {
			let e = t(String(c.src ?? ""), String(c.alt ?? ""));
			return e ? `<img src="${ym(e)}" alt="${ym(c.alt ?? "")}"${Dm(c)} loading="lazy" decoding="async" referrerpolicy="no-referrer">` : "";
		}
		let u = () => (e.childNodes ?? []).map((e) => s(e, n + 1)).join("");
		if (!bm.has(l)) return u();
		let d = "";
		if (l === "a") {
			let e = Cm(c.href);
			if (!e) return u();
			d += ` href="${ym(e)}"`, e.startsWith("http") && (d += " target=\"_blank\" rel=\"noopener noreferrer\"");
		}
		let f = Om(c.style), p = String(c.class ?? "").split(/\s+/).filter((e) => /^ql-align-(?:left|center|right|justify)$/.test(e));
		if (f && (d += ` style="${ym(f)}"`), p.length && (d += ` class="${p.join(" ")}"`), l === "h2" || l === "h3") {
			let t = "section-" + (r.length + 1);
			r.push({
				id: t,
				text: o(e)
			}), d += ` id="${t}"`;
		}
		if (["th", "td"].includes(l)) for (let e of ["colspan", "rowspan"]) /^[1-9]\d?$/.test(c[e] ?? "") && (d += ` ${e}="${c[e]}"`);
		let m = "<" + l + d + ">" + (["br", "hr"].includes(l) ? "" : u() + "</" + l + ">");
		return Sm.has(l) && (i += "\n"), m;
	}, c = s(n), l = [], u = (e, t = 0) => {
		if (!(t > 80)) {
			if (e.tagName === "details") {
				let t = (e.childNodes ?? []).find((e) => e.tagName === "summary"), n = t ? o(t).trim() : "", r = (e.childNodes ?? []).filter((e) => e !== t).map((e) => o(e)).join(" ").trim();
				n.endsWith("?") && n.length <= 200 && r && r.length <= 3e3 && l.length < 8 && l.push({
					question: n,
					answer: r
				});
			}
			for (let n of e.childNodes ?? []) u(n, t + 1);
		}
	};
	return u(_m(c)), {
		html: c,
		text: i.replace(/\n{3,}/g, "\n\n").trim(),
		headings: r,
		faq: l
	};
}
// src/content.js
var Am = (e) => String(e ?? "").replace(/[&<>"']/g, (e) => ({
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	"\"": "&quot;",
	"'": "&#39;"
})[e]);
function jm(e) {
	return Am(e).replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
}
function Mm(e) {
	let t = String(e ?? "").split("\n"), n = "", r = !1, i = 0;
	for (let e of t) {
		let t = e.match(/^[-*] (.+)$/);
		if (t) {
			r ||= (n += "<ul>", !0), n += `<li>${jm(t[1])}</li>`;
			continue;
		}
		r &&= (n += "</ul>", !1);
		let a = e.match(/^(#{2,3}) (.+)$/);
		if (a) {
			let e = a[1].length;
			n += `<h${e} id="section-${++i}">${jm(a[2])}</h${e}>`;
		} else e.trim() && (n += `<p>${jm(e)}</p>`);
	}
	return n + (r ? "</ul>" : "");
}
// src/media-alignment.js
function Nm(e) {
	let t = e.import("attributors/class/align");
	t.whitelist = [
		"left",
		"center",
		"right",
		"justify"
	], e.register(t, !0);
}
function Pm({ Quill: e, quill: t, mediaControls: n, selected: r, refresh: i }) {
	let a = document.createElement("div");
	a.className = "rich-media-align", a.setAttribute("role", "group"), a.setAttribute("aria-label", "이미지 정렬"), a.innerHTML = "<span>이미지 정렬</span>" + [
		["left", "왼쪽"],
		["center", "가운데"],
		["right", "오른쪽"]
	].map(([e, t]) => `<button type="button" data-media-align="${e}" aria-label="이미지 ${t} 정렬" aria-pressed="false" disabled>${t}</button>`).join(""), n.insertBefore(a, n.querySelector("p"));
	let o = a.querySelectorAll("[data-media-align]");
	for (let n of o) n.addEventListener("click", () => {
		let a = r();
		if (a?.tagName !== "IMG" || !a.isConnected) return;
		let o = e.find(a);
		o && (t.history.cutoff(), t.formatLine(t.getIndex(o), 1, "align", n.dataset.mediaAlign, "user"), t.history.cutoff(), i());
	});
	return { refresh() {
		let n = r(), i = n?.tagName === "IMG" && n.isConnected, a = i ? e.find(n) : null, s = a ? t.getFormat(t.getIndex(a), 1).align || getComputedStyle(n.parentElement).textAlign : "";
		for (let e of o) e.disabled = !i, e.setAttribute("aria-pressed", String(!!i && e.dataset.mediaAlign === s));
	} };
}
// src/editor-client.js
var Fm = document.querySelector("#post-editor");
Fm && Im();
function Im() {
	let e = (e) => document.querySelector(e), t = e("#field-body"), n = e("#body-format"), r = e("#rich-visual-panel"), i = e("#rich-view-tabs"), a = e("#rich-code-note"), o = e("[data-markdown-tools]"), s = ru.import("formats/image"), c = ru.import("formats/video"), l = ru.import("blots/block/embed"), u = (e) => Em(e.style.width) || Em(e.getAttribute("width")), d = (e, t) => {
		e.removeAttribute("width"), e.removeAttribute("height");
		let n = Em(t);
		n ? e.style.width = n : e.style.removeProperty("width");
	};
	class f extends s {
		static create(e) {
			let t = super.create(typeof e == "string" ? e : e.src);
			return typeof e == "object" && t.setAttribute("alt", e.alt ?? ""), t;
		}
		static value(e) {
			return {
				src: e.getAttribute("src"),
				alt: e.getAttribute("alt") ?? ""
			};
		}
		static formats(e) {
			return {
				alt: e.getAttribute("alt") ?? "",
				...u(e) ? { width: u(e) } : {}
			};
		}
		format(e, t) {
			e === "width" ? d(this.domNode, t) : super.format(e, t);
		}
	}
	class p extends c {
		static create(e) {
			let t = super.create(e);
			return t.setAttribute("title", "본문 동영상"), t.setAttribute("referrerpolicy", "strict-origin-when-cross-origin"), t.setAttribute("allow", "fullscreen; picture-in-picture; encrypted-media"), t;
		}
		static formats(e) {
			return u(e) ? { width: u(e) } : {};
		}
		format(e, t) {
			e === "width" ? d(this.domNode, t) : super.format(e, t);
		}
		html() {
			return this.domNode.outerHTML;
		}
	}
	class m extends l {
		static blotName = "fileVideo";
		static tagName = "video";
		static create(e) {
			let t = super.create();
			return t.setAttribute("src", wm(e)?.src ?? ""), t.setAttribute("controls", ""), t.setAttribute("playsinline", ""), t.setAttribute("preload", "metadata"), t;
		}
		static value(e) {
			return e.getAttribute("src");
		}
		static formats(e) {
			return u(e) ? { width: u(e) } : {};
		}
		format(e, t) {
			e === "width" ? d(this.domNode, t) : super.format(e, t);
		}
		html() {
			return this.domNode.outerHTML;
		}
	}
	Nm(ru), ru.register(f, !0), ru.register(p, !0), ru.register(m, !0);
	let h = "visual", g = !1, _ = "image", v = null, y = "", b = 0, x = null, S = null, C = 0, w = null, T = (t) => {
		let n = e("#editor-feedback");
		n.textContent = t, n.hidden = !1, n.focus();
	}, E = () => Fm.dispatchEvent(new Event("input", { bubbles: !0 })), D = new ru("#rich-visual", {
		theme: "snow",
		placeholder: "본문을 작성하고 이미지나 동영상을 넣어보세요.",
		formats: [
			"header",
			"bold",
			"italic",
			"underline",
			"strike",
			"list",
			"blockquote",
			"link",
			"image",
			"video",
			"fileVideo",
			"align",
			"color",
			"code"
		],
		modules: { toolbar: {
			container: "#rich-toolbar",
			handlers: {
				image: () => me("image"),
				video: () => me("video"),
				align: (e) => D.format("align", e || "left", "user")
			}
		} }
	}), O = document.createElement("div");
	O.className = "rich-media-size", O.innerHTML = "<div class=\"rich-media-size-heading\"><label for=\"rich-media-select\">이미지·동영상 크기</label><select id=\"rich-media-select\" aria-label=\"크기를 조절할 이미지 또는 동영상\"><option value=\"\">본문에 미디어를 넣어주세요</option></select></div><div class=\"rich-media-size-options\"><label for=\"rich-media-width\">너비</label><input type=\"range\" id=\"rich-media-width\" min=\"10\" max=\"100\" step=\"1\" value=\"100\" disabled><label class=\"rich-media-percent\"><input type=\"number\" id=\"rich-media-width-value\" aria-label=\"미디어 너비 (%)\" inputmode=\"numeric\" min=\"10\" max=\"100\" step=\"1\" value=\"100\" disabled><span>%</span></label><span id=\"rich-media-width-mode\"></span><div class=\"rich-media-size-presets\">" + [
		25,
		50,
		75,
		100
	].map((e) => `<button type="button" data-media-width="${e}%" disabled>${e}%</button>`).join("") + "<button type=\"button\" data-media-width=\"\" disabled>자동</button></div></div><p>이미지는 네 모서리를 드래그해 조절할 수 있습니다. 너비는 슬라이더나 % 입력으로 바꾸며 높이는 비율에 맞게 자동 조절됩니다.</p><p id=\"rich-media-video-note\" hidden>동영상 재생은 미리보기에서 확인하세요. 외부 재생이 제한된 영상은 원본에서 볼 수 있습니다. <a id=\"rich-media-open\" target=\"_blank\" rel=\"noopener\">원본 영상 열기</a></p>", r.append(O);
	let ee = Pm({
		Quill: ru,
		quill: D,
		mediaControls: O,
		selected: () => x,
		refresh: N
	}), te = e("#rich-media-select"), ne = e("#rich-media-width"), k = e("#rich-media-width-value"), A = document.createElement("div");
	A.className = "rich-image-resizer", A.hidden = !0, A.innerHTML = [
		["nw", "왼쪽 위"],
		["ne", "오른쪽 위"],
		["sw", "왼쪽 아래"],
		["se", "오른쪽 아래"]
	].map(([e, t]) => `<button type="button" class="rich-image-handle rich-image-handle-${e}" data-resize-corner="${e}" aria-label="이미지 ${t} 모서리 크기 조절" title="드래그하거나 화살표 키로 크기 조절"></button>`).join(""), r.append(A);
	let re = () => {
		let e = getComputedStyle(D.root);
		return D.root.clientWidth - parseFloat(e.paddingLeft) - parseFloat(e.paddingRight);
	}, j = (e) => Math.max(10, Math.min(100, Math.round(e)));
	function ie() {
		let e = x?.tagName === "IMG" && x.isConnected ? x : null;
		if (A.hidden = !e || h !== "visual" || n.value !== "html" || r.hidden, A.hidden) return;
		let t = e.getBoundingClientRect(), i = r.getBoundingClientRect();
		!t.width || !t.height ? A.hidden = !0 : Object.assign(A.style, {
			left: t.left - i.left + r.scrollLeft + "px",
			top: t.top - i.top + r.scrollTop + "px",
			width: t.width + "px",
			height: t.height + "px"
		});
	}
	let ae = new ResizeObserver(ie);
	ae.observe(D.root), D.root.addEventListener("load", ie, !0), D.root.addEventListener("scroll", ie), window.addEventListener("resize", ie);
	let M = () => Array.from(D.root.querySelectorAll("img,iframe,video"));
	function N() {
		let t = M();
		t.includes(x) || (x = null), te.replaceChildren(new Option(t.length ? "크기를 조절할 항목 선택" : "본문에 미디어를 넣어주세요", "")), t.forEach((e, t) => te.add(new Option(`${t + 1}. ${e.tagName === "IMG" ? "이미지" : "동영상"}${e.alt ? " · " + e.alt : ""}`, String(t)))), te.disabled = !t.length, te.value = x ? String(t.indexOf(x)) : "";
		let n = x ? u(x) : "", r = j(n.endsWith("%") ? parseInt(n) : x ? x.getBoundingClientRect().width / re() * 100 : 100);
		ne.value = String(r), ne.disabled = !x, k.value = String(r), k.disabled = !x, e("#rich-media-width-mode").textContent = x && !n ? "자동" : n.endsWith("px") ? n : "", O.querySelectorAll("[data-media-width]").forEach((e) => {
			e.disabled = !x, e.setAttribute("aria-pressed", String(!!x && e.dataset.mediaWidth === n));
		}), t.forEach((e) => e.classList.toggle("rich-media-selected", e === x)), ee.refresh(), w !== x && (w && ae.unobserve(w), w = x?.tagName === "IMG" ? x : null, w && ae.observe(w)), ie();
		let i = x && x.tagName !== "IMG" ? wm(x.getAttribute("src")) : null;
		if (e("#rich-media-video-note").hidden = !i, i) {
			let t = new URL(i.src);
			e("#rich-media-open").href = t.hostname === "www.youtube-nocookie.com" ? "https://www.youtube.com/watch?v=" + t.pathname.split("/").pop() : t.hostname === "player.vimeo.com" ? "https://vimeo.com/" + t.pathname.split("/").pop() : i.src;
		}
	}
	function oe(e) {
		if (!x?.isConnected) return;
		let t = ru.find(x);
		t && (D.formatText(D.getIndex(t), 1, "width", e || !1, "user"), N());
	}
	te.addEventListener("change", () => {
		x = te.value === "" ? null : M()[Number(te.value)], N();
	}), ne.addEventListener("input", () => oe(ne.value + "%")), k.addEventListener("input", () => {
		k.value !== "" && k.validity.valid && oe(k.value + "%");
	});
	function se() {
		let e = k.valueAsNumber;
		Number.isFinite(e) ? oe(j(e) + "%") : N();
	}
	k.addEventListener("change", se), k.addEventListener("keydown", (e) => {
		e.key === "Enter" && (e.preventDefault(), se()), e.key === "Escape" && (e.preventDefault(), N());
	}), O.querySelectorAll("[data-media-width]").forEach((e) => e.addEventListener("click", () => oe(e.dataset.mediaWidth)));
	function ce() {
		if (C = 0, !S) return;
		let e = S, t = (e.x - e.startX) * (e.corner.endsWith("e") ? 1 : -1), n = (e.y - e.startY) * (e.corner.startsWith("s") ? 1 : -1) * e.ratio;
		oe(j((e.width + (Math.abs(t) >= Math.abs(n) ? t : n)) / e.available * 100) + "%");
	}
	function le(e = !1) {
		if (!S) return;
		C &&= (cancelAnimationFrame(C), 0), e || ce();
		let t = S;
		S = null, e && x === t.image && oe(t.originalWidth), D.history.options.delay = t.historyDelay, D.history.cutoff(), document.body.classList.remove("rich-media-resizing"), t.handle.hasPointerCapture(t.pointerId) && t.handle.releasePointerCapture(t.pointerId), ie();
	}
	A.querySelectorAll("[data-resize-corner]").forEach((e) => {
		e.addEventListener("pointerdown", (t) => {
			if (t.button !== 0 || S || x?.tagName !== "IMG") return;
			t.preventDefault();
			let n = x.getBoundingClientRect(), r = re();
			n.height && r && (D.history.cutoff(), S = {
				image: x,
				handle: e,
				pointerId: t.pointerId,
				corner: e.dataset.resizeCorner,
				startX: t.clientX,
				startY: t.clientY,
				x: t.clientX,
				y: t.clientY,
				width: n.width,
				ratio: n.width / n.height,
				available: r,
				originalWidth: u(x),
				historyDelay: D.history.options.delay
			}, D.history.options.delay = 36e5, e.setPointerCapture(t.pointerId), document.body.classList.add("rich-media-resizing"));
		}), e.addEventListener("pointermove", (e) => {
			S?.pointerId === e.pointerId && (e.preventDefault(), S.x = e.clientX, S.y = e.clientY, C ||= requestAnimationFrame(ce));
		}), e.addEventListener("pointerup", (e) => {
			S?.pointerId === e.pointerId && (S.x = e.clientX, S.y = e.clientY, le());
		}), e.addEventListener("pointercancel", () => le(!0)), e.addEventListener("lostpointercapture", () => le()), e.addEventListener("keydown", (e) => {
			let t = {
				ArrowLeft: -1,
				ArrowDown: -1,
				ArrowRight: 1,
				ArrowUp: 1
			};
			(e.key in t || ["Home", "End"].includes(e.key)) && (e.preventDefault(), oe((e.key === "Home" ? 10 : e.key === "End" ? 100 : j(Number(ne.value) + t[e.key] * (e.shiftKey ? 10 : 1))) + "%"));
		});
	}), D.root.addEventListener("dragstart", (e) => {
		e.target.tagName === "IMG" && e.preventDefault();
	}), window.addEventListener("blur", () => le(!0)), document.addEventListener("keydown", (e) => {
		e.key === "Escape" && S && (e.preventDefault(), le(!0));
	}), D.root.addEventListener("click", (e) => {
		x = (e.target.closest("img,video") || M().find((t) => {
			if (t.tagName !== "IFRAME") return !1;
			let n = t.getBoundingClientRect();
			return e.clientX >= n.left && e.clientX <= n.right && e.clientY >= n.top && e.clientY <= n.bottom;
		})) ?? null, N();
	}), D.root.setAttribute("aria-label", "본문 화면 편집"), D.root.setAttribute("role", "textbox"), D.root.setAttribute("aria-multiline", "true");
	let ue = () => {
		n.value === "html" && h === "visual" && g && (t.value = km(D.getSemanticHTML()).html, g = !1);
	}, de = () => {
		e("#body-count").textContent = (n.value === "html" ? km(t.value).text.length : t.value.length).toLocaleString() + "자";
	}, fe = () => {
		let e = km(t.value).html;
		D.setContents(D.clipboard.convert({ html: e }), "silent"), g = !1, N();
	}, pe = (s) => {
		ue(), h = s, n.value === "html" ? (i.hidden = !1, o.hidden = !0, r.hidden = s !== "visual", t.hidden = s === "visual", a.hidden = s !== "code", s === "visual" && fe(), i.querySelectorAll("[data-rich-view]").forEach((e) => e.setAttribute("aria-pressed", String(e.dataset.richView === s)))) : (i.hidden = !0, r.hidden = !0, t.hidden = !1, a.hidden = !0, o.hidden = !1), e("#body-format-help").textContent = n.value === "html" ? "이미지·동영상 삽입과 HTML 코드 편집을 지원합니다." : "## 제목 · **굵게** · - 목록", ie(), de();
	};
	D.on("text-change", (e, t, n) => {
		n !== "silent" && (g = !0, ue(), de(), E(), N());
	}), t.addEventListener("input", () => {
		n.value === "html" && de();
	}), i.querySelectorAll("[data-rich-view]").forEach((e) => e.addEventListener("click", () => {
		try {
			pe(e.dataset.richView);
		} catch (e) {
			T(e.message);
		}
	})), n.addEventListener("change", () => {
		try {
			if (n.value === "html") t.value = Mm(t.value), pe("visual");
			else {
				if (!confirm("Markdown으로 전환하면 HTML 서식과 이미지·동영상은 일반 텍스트로 바뀝니다. 전환할까요?")) {
					n.value = "html";
					return;
				}
				t.value = km(t.value).text, pe("code");
			}
			E();
		} catch (e) {
			T(e.message);
		}
	});
	function me(n) {
		_ = n, v = h === "visual" ? D.getSelection(!0) : {
			index: t.selectionStart,
			end: t.selectionEnd
		}, y = "", b++, e("#rich-media-title").textContent = n === "image" ? "이미지 삽입" : "동영상 삽입", e("#rich-media-url-label").textContent = n === "image" ? "이미지 주소" : "동영상 주소", e("#rich-image-file-field").hidden = n !== "image", e("#rich-image-alt-field").hidden = n !== "image", e("#rich-video-help").hidden = n !== "video", e("#rich-media-url").value = "", e("#rich-image-alt").value = "", e("#rich-image-file").value = "", e("#rich-image-preview").hidden = !0, e("#rich-media-error").hidden = !0, e("#rich-media-insert").disabled = !1, e("#rich-media-dialog").showModal(), e("#rich-media-url").focus();
	}
	e("#rich-media-close").addEventListener("click", () => {
		e("#rich-media-dialog").close(), b++, delete Fm.dataset.bodyUploading;
	});
	for (let [t, n] of [["rich-add-image", "image"], ["rich-add-video", "video"]]) e("#" + t)?.addEventListener("click", () => me(n));
	e("#rich-image-file").addEventListener("change", async (t) => {
		let n = t.target.files[0], r = ++b;
		if (!n) return;
		let i = e("#rich-media-error");
		i.hidden = !0, e("#rich-media-insert").disabled = !0, Fm.dataset.bodyUploading = "true";
		try {
			let t = await cu(n, {
				form: Fm,
				kind: "inline"
			});
			if (r !== b) return;
			y = t, e("#rich-image-preview").src = t, e("#rich-image-preview").hidden = !1, e("#rich-media-url").value = "";
		} catch (e) {
			r === b && (i.textContent = e.message || "이미지를 읽을 수 없습니다.", i.hidden = !1, y = "");
		} finally {
			r === b && (e("#rich-media-insert").disabled = !1, delete Fm.dataset.bodyUploading);
		}
	}), e("#rich-media-insert").addEventListener("click", () => {
		let n = y || e("#rich-media-url").value.trim(), r = e("#rich-image-alt").value.trim(), i = e("#rich-media-error");
		try {
			let i, a, o;
			if (_ === "image") {
				if (!n || !r) throw Error("이미지 파일 또는 주소와 이미지 설명을 입력해주세요.");
				if (i = km(`<img src="${Am(n)}" alt="${Am(r)}">`).html, !i) throw Error("HTTPS 이미지 주소 또는 정상적인 이미지 파일을 선택해주세요.");
				o = "image", a = {
					src: n,
					alt: r
				};
			} else {
				let e = wm(n);
				if (!e) throw Error("YouTube·Vimeo 또는 HTTPS MP4·WebM 주소를 확인해주세요.");
				o = e.kind === "iframe" ? "video" : "fileVideo", a = e.src, i = km(`<${e.kind} src="${Am(e.src)}"></${e.kind}>`).html;
			}
			if (h === "code") {
				let e = v?.index ?? t.value.length, n = v?.end ?? e;
				t.setRangeText("\n" + i + "\n", e, n, "end"), t.dispatchEvent(new Event("input", { bubbles: !0 }));
			} else {
				let e = v?.index ?? D.getLength() - 1;
				D.insertEmbed(e, o, a, "user"), D.insertText(e + 1, "\n", "user"), D.setSelection(e + 2, 0, "silent"), x = D.getLeaf(e)[0]?.domNode, N();
			}
			e("#rich-media-dialog").close(), E(), de();
		} catch (e) {
			i.textContent = e.message, i.hidden = !1;
		}
	}), window.journalComposer = {
		sync: ue,
		preview: () => (ue(), km(t.value).html)
	}, Fm.dataset.composerReady = "true", pe(n.value === "html" ? "visual" : "code");
}
