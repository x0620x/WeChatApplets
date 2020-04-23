(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["colorui/components/cu-custom"],{"7cb2":function(t,n,a){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{StatusBar:this.StatusBar,CustomBar:this.CustomBar}},name:"cu-custom",computed:{style:function(){var t=this.StatusBar,n=this.CustomBar,a=this.bgImage,u="height:".concat(n,"px;padding-top:").concat(t,"px;");return this.bgImage&&(u="".concat(u,"background-image:url(").concat(a,");")),u}},props:{bgColor:{type:String,default:""},isBack:{type:[Boolean,String],default:!1},bgImage:{type:String,default:""}},methods:{BackPage:function(){t.navigateBack({delta:1})}}};n.default=a}).call(this,a("543d")["default"])},"9c1c":function(t,n,a){"use strict";var u,c=function(){var t=this,n=t.$createElement;t._self._c},e=[];a.d(n,"b",function(){return c}),a.d(n,"c",function(){return e}),a.d(n,"a",function(){return u})},"9da9":function(t,n,a){"use strict";a.r(n);var u=a("9c1c"),c=a("c999");for(var e in c)"default"!==e&&function(t){a.d(n,t,function(){return c[t]})}(e);var r,o=a("f0c5"),i=Object(o["a"])(c["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],r);n["default"]=i.exports},c999:function(t,n,a){"use strict";a.r(n);var u=a("7cb2"),c=a.n(u);for(var e in u)"default"!==e&&function(t){a.d(n,t,function(){return u[t]})}(e);n["default"]=c.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'colorui/components/cu-custom-create-component',
    {
        'colorui/components/cu-custom-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("9da9"))
        })
    },
    [['colorui/components/cu-custom-create-component']]
]);
