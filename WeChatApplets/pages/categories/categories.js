(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
	["pages/categories/categories"], {
		"00c2": function(t, e, n) {
			"use strict";
			var a, u = function() {
					var t = this,
						e = t.$createElement;
					t._self._c
				},
				r = [];
			n.d(e, "b", function() {
				return u
			}), n.d(e, "c", function() {
				return r
			}), n.d(e, "a", function() {
				return a
			})
		},
		"061e": function(t, e, n) {},
		"4c2d": function(t, e, n) {
			"use strict";
			n.r(e);
			var a = n("6617"),
				u = n.n(a);
			for (var r in a) "default" !== r && function(t) {
				n.d(e, t, function() {
					return a[t]
				})
			}(r);
			e["default"] = u.a
		},
		6617: function(t, e, n) {
			"use strict";
			(function(t) {
				Object.defineProperty(e, "__esModule", {
					value: !0
				}), e.default = void 0;
				var a = n("10a9"),
					u = n("8c2b"),
					r = {
						data: function() {
							return {
								StatusBar: this.StatusBar,
								CustomBar: this.CustomBar,
								categories: []
							}
						},
						onLoad: function(t) {
							this.getCat()
						},
						methods: {
							getCat: function() {
								var t = this;
								u.request({
									url: a.GetCat(),
									success: function(e) {
										t.categories = e.data.data, console.log(t.categories)
									}
								})
							},
							goCategorieslist: function(e) {
								t.navigateTo({
									url: "/pages/categorieslist/categorieslist?mid=" + e.currentTarget.dataset.mid
								})
							}
						}
					};
				e.default = r
			}).call(this, n("543d")["default"])
		},
		"7f3e": function(t, e, n) {
			"use strict";
			(function(t) {
				n("5529");
				a(n("66fd"));
				var e = a(n("8a65"));

				function a(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}
				t(e.default)
			}).call(this, n("543d")["createPage"])
		},
		"8a65": function(t, e, n) {
			"use strict";
			n.r(e);
			var a = n("00c2"),
				u = n("4c2d");
			for (var r in u) "default" !== r && function(t) {
				n.d(e, t, function() {
					return u[t]
				})
			}(r);
			n("9e65");
			var c, o = n("f0c5"),
				i = Object(o["a"])(u["default"], a["b"], a["c"], !1, null, null, null, !1, a["a"], c);
			e["default"] = i.exports
		},
		"9e65": function(t, e, n) {
			"use strict";
			var a = n("061e"),
				u = n.n(a);
			u.a
		}
	},
	[
		["7f3e", "common/runtime", "common/vendor"]
	]
]);
