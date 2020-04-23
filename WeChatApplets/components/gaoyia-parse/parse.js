(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
	["components/gaoyia-parse/parse"], {
		ad80: function(t, e, n) {
			"use strict";
			n.r(e);
			var i = n("c8b5"),
				a = n("c035");
			for (var s in a) "default" !== s && function(t) {
				n.d(e, t, function() {
					return a[t]
				})
			}(s);
			var o, r = n("f0c5"),
				l = Object(r["a"])(a["default"], i["b"], i["c"], !1, null, null, null, !1, i["a"], o);
			e["default"] = l.exports
		},
		c035: function(t, e, n) {
			"use strict";
			n.r(e);
			var i = n("d8b7"),
				a = n.n(i);
			for (var s in i) "default" !== s && function(t) {
				n.d(e, t, function() {
					return i[t]
				})
			}(s);
			e["default"] = a.a
		},
		c8b5: function(t, e, n) {
			"use strict";
			var i, a = function() {
					var t = this,
						e = t.$createElement;
					t._self._c
				},
				s = [];
			n.d(e, "b", function() {
				return a
			}), n.d(e, "c", function() {
				return s
			}), n.d(e, "a", function() {
				return i
			})
		},
		d8b7: function(t, e, n) {
			"use strict";
			(function(t) {
				Object.defineProperty(e, "__esModule", {
					value: !0
				}), e.default = void 0;
				var i = a(n("64d1"));

				function a(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}
				var s = function() {
						return n.e("components/gaoyia-parse/components/wxParseTemplate1").then(n.bind(null, "1369"))
					},
					o = {
						name: "wxParse",
						props: {
							userSelect: {
								type: String,
								default: "text"
							},
							imgOptions: {
								type: [Object, Boolean],
								default: function() {
									return {
										loop: !1,
										indicator: "number",
										longPressActions: !1
									}
								}
							},
							loading: {
								type: Boolean,
								default: !1
							},
							className: {
								type: String,
								default: ""
							},
							content: {
								type: String,
								default: ""
							},
							noData: {
								type: String,
								default: '<div style="color: red; text-align:center;">数据不能为空</div>'
							},
							startHandler: {
								type: Function,
								default: function() {
									return function(t) {
										t.attr.class = null, t.attr.style = null
									}
								}
							},
							endHandler: {
								type: Function,
								default: null
							},
							charsHandler: {
								type: Function,
								default: null
							},
							imageProp: {
								type: Object,
								default: function() {
									return {
										mode: "aspectFit",
										padding: 0,
										lazyLoad: !1,
										domain: ""
									}
								}
							}
						},
						components: {
							wxParseTemplate: s
						},
						data: function() {
							return {
								nodes: {},
								imageUrls: [],
								wxParseWidth: {
									value: 0
								}
							}
						},
						computed: {},
						mounted: function() {
							this.setHtml()
						},
						methods: {
							setHtml: function() {
								var t = this;
								this.getWidth().then(function(e) {
									t.wxParseWidth.value = e
								});
								var e = this.content,
									n = this.noData,
									a = this.imageProp,
									s = this.startHandler,
									o = this.endHandler,
									r = this.charsHandler,
									l = e || n,
									u = {
										start: s,
										end: o,
										chars: r
									},
									c = (0, i.default)(l, u, a, this);
								this.imageUrls = c.imageUrls, this.nodes = [], c.nodes.forEach(function(e) {
									setTimeout(function() {
										t.nodes.push(e)
									}, 0)
								})
							},
							getWidth: function() {
								var e = this;
								return new Promise(function(n, i) {
									t.createSelectorQuery().in(e).select(".wxParse").fields({
										size: !0,
										scrollOffset: !0
									}, function(t) {
										n(t.width)
									}).exec()
								})
							},
							navigate: function(e, n, i) {
								console.log(e, i), t.setClipboardData({
									data: e,
									success: function() {
										console.log("success")
									}
								}), this.$emit("navigate", e, n)
							},
							preview: function(e, n) {
								this.imageUrls.length && "boolean" !== typeof this.imgOptions && t.previewImage({
									current: e,
									urls: this.imageUrls,
									loop: this.imgOptions.loop,
									indicator: this.imgOptions.indicator,
									longPressActions: this.imgOptions.longPressActions
								}), this.$emit("preview", e, n)
							},
							removeImageUrl: function(t) {
								var e = this.imageUrls;
								e.splice(e.indexOf(t), 1)
							}
						},
						provide: function() {
							return {
								parseWidth: this.wxParseWidth,
								parseSelect: this.userSelect
							}
						},
						watch: {
							content: function() {
								this.setHtml()
							}
						}
					};
				e.default = o
			}).call(this, n("543d")["default"])
		}
	}
]);;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
	'components/gaoyia-parse/parse-create-component',
	{
		'components/gaoyia-parse/parse-create-component': (function(module, exports, __webpack_require__) {
			__webpack_require__('543d')['createComponent'](__webpack_require__("ad80"))
		})
	},
	[
		['components/gaoyia-parse/parse-create-component']
	]
]);
