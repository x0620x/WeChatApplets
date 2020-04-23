(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
	["pages/categorieslist/categorieslist"], {
		"0559": function(t, e, n) {
			"use strict";
			var a, i = function() {
					var t = this,
						e = t.$createElement;
					t._self._c
				},
				c = [];
			n.d(e, "b", function() {
				return i
			}), n.d(e, "c", function() {
				return c
			}), n.d(e, "a", function() {
				return a
			})
		},
		"0a21": function(t, e, n) {},
		1742: function(t, e, n) {
			"use strict";
			n.r(e);
			var a = n("3c9c"),
				i = n.n(a);
			for (var c in a) "default" !== c && function(t) {
				n.d(e, t, function() {
					return a[t]
				})
			}(c);
			e["default"] = i.a
		},
		"24ba": function(t, e, n) {
			"use strict";
			var a = n("0a21"),
				i = n.n(a);
			i.a
		},
		"3c9c": function(t, e, n) {
			"use strict";
			(function(t) {
				Object.defineProperty(e, "__esModule", {
					value: !0
				}), e.default = void 0;
				var a = n("10a9"),
					i = n("8c2b"),
					c = {
						data: function() {
							return {
								mid: "",
								name: "分类详情",
								categoriesList: [],
								articleList: []
							}
						},
						onLoad: function(t) {
							console.log(t), this.mid = t.mid, this.getCategoriesList()
						},
						methods: {
							getCategoriesList: function() {
								var t = this,
									e = this.mid;
								i.request({
									url: a.GetPostsbyMID(e),
									success: function(e) {
										console.log(e.data.data), t.articleList = e.data.data
									}
								})
							},
							goDetails: function(e) {
								t.navigateTo({
									url: "/pages/details/details?cid=" + e.currentTarget.dataset.cid
								})
							}
						}
					};
				e.default = c
			}).call(this, n("543d")["default"])
		},
		"99d5": function(t, e, n) {
			"use strict";
			(function(t) {
				n("5529");
				a(n("66fd"));
				var e = a(n("f175"));

				function a(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}
				t(e.default)
			}).call(this, n("543d")["createPage"])
		},
		f175: function(t, e, n) {
			"use strict";
			n.r(e);
			var a = n("0559"),
				i = n("1742");
			for (var c in i) "default" !== c && function(t) {
				n.d(e, t, function() {
					return i[t]
				})
			}(c);
			n("24ba");
			var u, o = n("f0c5"),
				r = Object(o["a"])(i["default"], a["b"], a["c"], !1, null, null, null, !1, a["a"], u);
			e["default"] = r.exports
		}
	},
	[
		["99d5", "common/runtime", "common/vendor"]
	]
]);
