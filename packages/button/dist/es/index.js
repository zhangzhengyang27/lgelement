function e(e, t, n, o, i, s, r, d, c, a) {
    "boolean" != typeof r && (c = d, d = r, r = !1);
    const l = "function" == typeof n ? n.options : n;
    let f;
    if (e && e.render && (l.render = e.render, l.staticRenderFns = e.staticRenderFns, l._compiled = !0, i && (l.functional = !0)), o && (l._scopeId = o), s ? (f = function (e) {
        (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), t && t.call(this, c(e)), e && e._registeredComponents && e._registeredComponents.add(s)
    }, l._ssrRegister = f) : t && (f = r ? function (e) {
        t.call(this, a(e, this.$root.$options.shadowRoot))
    } : function (e) {
        t.call(this, d(e))
    }), f) if (l.functional) {
        const e = l.render;
        l.render = function (t, n) {
            return f.call(n), e(t, n)
        }
    } else {
        const e = l.beforeCreate;
        l.beforeCreate = e ? [].concat(e, f) : [f]
    }
    return n
}

const t = e({
    render: function () {
        var e = this.$createElement, t = this._self._c || e;
        return t("div", [t("button", {on: {click: this.handleClick}}, [this._t("default")], 2)])
    }, staticRenderFns: []
}, void 0, {
    name: "LgButton", methods: {
        handleClick(e) {
            this.$emit("click", e), e.preventDefault()
        }
    }
}, void 0, !1, void 0, !1, void 0, void 0, void 0);
t.install = e => {
    e.component(t.name, t)
};
export {t as default};
