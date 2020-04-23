(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
	["pages/about/connect"], {
		"37a1": function(n, t, e) {
			"use strict";
			(function(n) {
				e("5529");
				u(e("66fd"));
				var t = u(e("55ae"));

				function u(n) {
					return n && n.__esModule ? n : {
						default: n
					}
				}
				n(t.default)
			}).call(this, e("543d")["createPage"])
		},
		"3bb3": function(n, t, e) {
			"use strict";
			(function(n) {
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.default = void 0;
				var e = {
					data: function() {
						return {}
					},
					methods: {
						wangZhi: function() {
							n.setClipboardData({
								data: "www.itggg.cn",
								success: function() {
									console.log("success")
								}
							})
						}
					}
				};
				t.default = e
			}).call(this, e("543d")["default"])
		},
		"55ae": function(n, t, e) {
			"use strict";
			e.r(t);
			var u = e("bc07"),
				c = e("8f5c");
			for (var a in c) "default" !== a && function(n) {
				e.d(t, n, function() {
					return c[n]
				})
			}(a);
			var o, r = e("f0c5"),
				f = Object(r["a"])(c["default"], u["b"], u["c"], !1, null, null, null, !1, u["a"], o);
			t["default"] = f.exports
		},
		"8f5c": function(n, t, e) {
			"use strict";
			e.r(t);
			var u = e("3bb3"),
				c = e.n(u);
			for (var a in u) "default" !== a && function(n) {
				e.d(t, n, function() {
					return u[n]
				})
			}(a);
			t["default"] = c.a
		},
		bc07: function(n, t, e) {
			"use strict";
			var u, c = function() {
					var n = this,
						t = n.$createElement;
					n._self._c
				},
				a = [];
			e.d(t, "b", function() {
				return c
			}), e.d(t, "c", function() {
				return a
			}), e.d(t, "a", function() {
				return u
			})
		}
	},
	[
		["37a1", "common/runtime", "common/vendor"]
	]
]);
