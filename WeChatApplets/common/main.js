(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
	["common/main"], {
		"4eba": function(t, e, n) {},
		"6e6b": function(t, e, n) {
			"use strict";
			n.r(e);
			var o = n("f0e8");
			for (var a in o) "default" !== a && function(t) {
				n.d(e, t, function() {
					return o[t]
				})
			}(a);
			n("896a");
			var r, u, l, c, i = n("f0c5"),
				f = Object(i["a"])(o["default"], r, u, !1, null, null, null, !1, l, c);
			e["default"] = f.exports
		},
		"896a": function(t, e, n) {
			"use strict";
			var o = n("4eba"),
				a = n.n(o);
			a.a
		},
		a731: function(t, e, n) {
			"use strict";
			(function(t) {
				Object.defineProperty(e, "__esModule", {
					value: !0
				}), e.default = void 0;
				var o = a(n("66fd"));

				function a(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}
				var r = {
					methods: {},
					onLaunch: function() {
						t.getSystemInfo({
							success: function(t) {
								o.default.prototype.StatusBar = t.statusBarHeight;
								var e = wx.getMenuButtonBoundingClientRect();
								o.default.prototype.Custom = e, o.default.prototype.CustomBar = e.bottom + e.top - t.statusBarHeight
							}
						}), o.default.prototype.ColorList = [{
							title: "嫣红",
							name: "red",
							color: "#e54d42"
						}, {
							title: "桔橙",
							name: "orange",
							color: "#f37b1d"
						}, {
							title: "明黄",
							name: "yellow",
							color: "#fbbd08"
						}, {
							title: "橄榄",
							name: "olive",
							color: "#8dc63f"
						}, {
							title: "森绿",
							name: "green",
							color: "#39b54a"
						}, {
							title: "天青",
							name: "cyan",
							color: "#1cbbb4"
						}, {
							title: "海蓝",
							name: "blue",
							color: "#0081ff"
						}, {
							title: "姹紫",
							name: "purple",
							color: "#6739b6"
						}, {
							title: "木槿",
							name: "mauve",
							color: "#9c26b0"
						}, {
							title: "桃粉",
							name: "pink",
							color: "#e03997"
						}, {
							title: "棕褐",
							name: "brown",
							color: "#a5673f"
						}, {
							title: "玄灰",
							name: "grey",
							color: "#8799a3"
						}, {
							title: "草灰",
							name: "gray",
							color: "#aaaaaa"
						}, {
							title: "墨黑",
							name: "black",
							color: "#333333"
						}, {
							title: "雅白",
							name: "white",
							color: "#ffffff"
						}]
					},
					onShow: function() {},
					onHide: function() {}
				};
				e.default = r
			}).call(this, n("543d")["default"])
		},
		cd2b: function(t, e, n) {
			"use strict";
			(function(t) {
				n("5529");
				var e = a(n("66fd")),
					o = a(n("6e6b"));
				a(n("17ee"));

				function a(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}

				function r(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = null != arguments[e] ? arguments[e] : {},
							o = Object.keys(n);
						"function" === typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(
							function(t) {
								return Object.getOwnPropertyDescriptor(n, t).enumerable
							}))), o.forEach(function(e) {
							u(t, e, n[e])
						})
					}
					return t
				}

				function u(t, e, n) {
					return e in t ? Object.defineProperty(t, e, {
						value: n,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : t[e] = n, t
				}
				var l = function() {
					return n.e("colorui/components/cu-custom").then(n.bind(null, "9da9"))
				};
				e.default.component("cu-custom", l), e.default.config.productionTip = !1, o.default.mpType = "app";
				var c = new e.default(r({}, o.default));
				t(c).$mount()
			}).call(this, n("543d")["createApp"])
		},
		f0e8: function(t, e, n) {
			"use strict";
			n.r(e);
			var o = n("a731"),
				a = n.n(o);
			for (var r in o) "default" !== r && function(t) {
				n.d(e, t, function() {
					return o[t]
				})
			}(r);
			e["default"] = a.a
		}
	},
	[
		["cd2b", "common/runtime", "common/vendor"]
	]
]);
