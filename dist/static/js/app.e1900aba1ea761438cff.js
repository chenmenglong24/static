webpackJsonp([1],{"34KM":function(t,s){},"8KNj":function(t,s){},GHCf:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("7+uW"),i=e("woOf"),o=e.n(i),n={name:"Header",props:{seller:{type:Object}},data:function(){return{classMap:[],detailShow:!1}},created:function(){console.log(this.seller),this.classMap=["decrease","discount","guarantee","invoice","special"]},methods:{showDetail:function(){this.detailShow=!0},hideDetail:function(){this.detailShow=!1}}},r={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"header"},[e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:t.seller.avatar,alt:"",width:"64",height:"64"}})]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[e("span",{staticClass:"brand"}),t._v(" "),e("span",{staticClass:"name"},[t._v(t._s(t.seller.name))])]),t._v(" "),e("div",{staticClass:"description"},[t._v(t._s(t.seller.description)+"/"+t._s(t.seller.deliveryTime)+"分钟送达")]),t._v(" "),t.seller.supports?e("div",{staticClass:"support"},[e("span",{staticClass:"icon",class:t.classMap[t.seller.supports[0].type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[0].description))])]):t._e()]),t._v(" "),t.seller.supports?e("div",{staticClass:"support-count",on:{click:t.showDetail}},[e("span",{staticClass:"count"},[t._v(t._s(t.seller.supports.length)+"个")]),t._v(" "),e("i",{staticClass:"icon-keyboard_arrow_right"})]):t._e()]),t._v(" "),e("div",{staticClass:"bulletin-wrapper",on:{click:t.showDetail}},[e("span",{staticClass:"bulletin-title"}),t._v(" "),e("span",{staticClass:"bulletin-text"},[t._v(t._s(t.seller.bulletin))]),t._v(" "),e("i",{staticClass:"icon-keyboard_arrow_right"})]),t._v(" "),e("div",{staticClass:"background"},[e("img",{attrs:{src:t.seller.avatar,width:"100%",height:"100%"}})]),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.detailShow,expression:"detailShow"}],staticClass:"detail"},[e("div",{staticClass:"detail-wrapper clearfix"},[e("div",{staticClass:"detail-main"},[e("h1",{staticClass:"name"},[t._v(t._s(t.seller.name))]),t._v(" "),e("div",{staticClass:"star-wrapper"}),t._v(" "),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("优惠信息")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),t.seller.supports?e("ul",{staticClass:"supports"},t._l(t.seller.supports,function(s,a){return e("li",{key:a,staticClass:"support-item"},[e("span",{staticClass:"icon",class:t.classMap[t.seller.supports[a].type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[a].description))])])}),0):t._e(),t._v(" "),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("商家公告")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),e("div",{staticClass:"bulletin"},[e("p",{staticClass:"content"},[t._v(t._s(t.seller.bulletin))])])])]),t._v(" "),e("div",{staticClass:"detail-close",on:{click:t.hideDetail}},[e("i",{staticClass:"icon-close"})])])])],1)},staticRenderFns:[]};var l={name:"App",data:function(){return{seller:{}}},components:{"v-header":e("VU/8")(n,r,!1,function(t){e("c0oA")},"data-v-7a050773",null).exports},created:function(){var t=this;this.$http.get("https://www.easy-mock.com/mock/5ca45824c4e9a575b66b62c9/example/msg").then(function(s){console.log(s),0===s.data.errno&&(t.seller=o()({},t.seller,s.data.data))})}},c={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("v-header",{attrs:{seller:t.seller}}),t._v(" "),e("div",{staticClass:"tab border-1px"},[e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/goods"}},[t._v("商品")])],1),t._v(" "),e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"ratings"}},[t._v("评论")])],1),t._v(" "),e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/seller"}},[t._v("商家")])],1)]),t._v(" "),e("keep-alive",[e("router-view",{attrs:{seller:t.seller}})],1)],1)},staticRenderFns:[]};var d=e("VU/8")(l,c,!1,function(t){e("Ov40")},null,null).exports,v=e("/ocq"),u=e("GQaK"),p={name:"cartcontrol",props:{food:{type:Object}},data:function(){return{}},methods:{addCart:function(t){console.log(t),t._constructed&&(this.food.count?this.food.count++:this.$set(this.food,"count",1),this.$emit("add",t.target))},decreaseCart:function(){event._constructed&&this.food.count&&this.food.count--}}},h={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cartcontrol"},[e("transition",{attrs:{name:"move"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count > 0"}],staticClass:"cart-decrease",on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.decreaseCart(s)}}},[e("span",{staticClass:"inner icon-remove_circle_outline"})])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count > 0"}],staticClass:"cart-count"},[t._v(t._s(t.food.count))]),t._v(" "),e("div",{staticClass:"cart-add icon-add_circle",on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.addCart(s)}}})],1)},staticRenderFns:[]};var f=e("VU/8")(p,h,!1,function(t){e("8KNj")},null,null).exports,_={props:{selectFoods:{type:Array,default:function(){return[{price:10,count:1}]}},deliveryPrice:{type:Number,default:0},minPrice:{type:Number,default:0}},data:function(){return{balls:[{show:!1},{show:!1},{show:!1},{show:!1},{show:!1}],dropBalls:[],fold:!0}},computed:{payClass:function(){return this.totalPrice<this.minPrice?"not-enough":"enough"},totalCount:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.count}),t},payDesc:function(){return console.log(this.selectFoods),0===this.totalPrice?"￥"+this.minPrice+"元起送":this.totalPrice<this.minPrice?"还差"+(this.minPrice-this.totalPrice)+"元起送":"去结算"},listShow:function(){var t=this;if(!this.totalCount)return this.fold=!0,!1;var s=!this.fold;return s&&this.$nextTick(function(){t.scroll?t.scroll.refresh():t.scroll=new u.a(t.$refs.listContent,{click:!0})}),s},totalPrice:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.price*s.count}),t}},methods:{toggleList:function(){},beforeDrop:function(t){for(var s=this.balls.length;s--;){var e=this.balls[s];if(e.show){var a=e.el.getBoundingClient(),i=a.left-32,o=-(window.innerHeight-a.top-22);t.style.display="",t.style.webkitTransform="translate3d(0, "+o+"px, 0)",t.style.transform="translate3d(0, "+o+"px, 0)";var n=t.getElementByClassName("inner-hook")[0];n.style.webkitTransform="translate3d("+i+"px, 0, 0)",n.style.transform="translate3d("+i+"px, 0, 0)"}}},dropping:function(t,s){t.offsetHeight;this.$$nextTick(function(){t.style.webkitTransform="translate3d(0, 0, 0)",t.style.transform="translate3d(0, 0, 0)";var e=t.getElementByClassName("inner-hook")[0];e.style.webkitTransform="translate3d(0, 0, 0)",e.style.transform="translate3d(0, 0, 0)",t.addEventListener("transitionend",s)})},afterDrop:function(t){var s=this.dropBalls.shift();s&&(s.show=!1,t.style.display="none")},empty:function(){},hideList:function(){}}},m={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"shopcart"},[e("div",{staticClass:"content",on:{click:t.toggleList}},[e("div",{staticClass:"content-left"},[e("div",{staticClass:"logo-wrapper"},[e("div",{staticClass:"logo",class:{highlight:t.totalCount>0}},[e("i",{staticClass:"icon-shopping_cart",class:{highlight:t.totalCount>0}})]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.totalCount>0,expression:"totalCount>0"}],staticClass:"num"},[t._v(t._s(t.totalCount))])]),t._v(" "),e("div",{staticClass:"price",class:{highlight:t.totalPrice>0}},[t._v("￥"+t._s(t.totalPrice))]),t._v(" "),e("div",{staticClass:"desc"},[t._v("另需配送费￥"+t._s(t.deliveryPrice)+"元")])]),t._v(" "),e("div",{staticClass:"content-right",on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.pay(s)}}},[e("div",{staticClass:"pay",class:t.payClass},[t._v("\n          "+t._s(t.payDesc)+"\n        ")])])]),t._v(" "),e("div",{staticClass:"ball-container"},t._l(t.balls,function(s,a){return e("div",{key:a},[e("transition",{attrs:{name:"drop"},on:{"before-enter":t.beforeDrop,enter:t.dropping,"after-enter":t.afterDrop}},[e("div",{directives:[{name:"show",rawName:"v-show",value:s.show,expression:"ball.show"}],staticClass:"ball"},[e("div",{staticClass:"inner inner-hook"})])])],1)}),0),t._v(" "),e("transition",{attrs:{name:"fold"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"shopcart-list"},[e("div",{staticClass:"list-header"},[e("h1",{staticClass:"title"},[t._v("购物车")]),t._v(" "),e("span",{staticClass:"empty",on:{click:t.empty}},[t._v("清空")])]),t._v(" "),e("div",{ref:"listContent",staticClass:"list-content"},[e("ul",t._l(t.selectFoods,function(s,a){return e("li",{key:a,staticClass:"food"},[e("span",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("div",{staticClass:"price"},[e("span",[t._v("￥"+t._s(s.price*s.count))])]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"})])}),0)])])])],1),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"list-mask",on:{click:t.hideList}})])],1)},staticRenderFns:[]};var C=e("VU/8")(_,m,!1,function(t){e("GHCf")},null,null).exports,w={name:"Goods",props:{seller:{type:Object}},data:function(){return{goods:[],listHeight:[],scrollY:0}},computed:{currentIndex:function(){for(var t=0;t<this.listHeight.length;t++){var s=this.listHeight[t],e=this.listHeight[t+1];if(!e||this.scrollY>=s&&this.scrollY<e)return t}return 0},selectFoods:function(){var t=[];return this.goods.forEach(function(s){s.foods.forEach(function(s){s.count&&t.push(s)})}),t}},components:{cartcontrol:f,shopcart:C},methods:{selectMenu:function(t,s){if(s._constructed){var e=this.$refs.foodList[t];this.foodsScroll.scrollToElement(e,300)}},selectFood:function(t,s){s._constructed&&(this.selectedFood=t,this.$refs.food.show())},addFood:function(t){this._drop(t)},_drop:function(t){var s=this;this.$nextTick(function(){s.$refs.shopcart.drop(t)})},_initScroll:function(){var t=this;this.menuScroll=new u.a(this.$refs.menuWrapper,{click:!0}),this.foodsScroll=new u.a(this.$refs.foodsWrapper,{click:!0,probeType:3}),this.foodsScroll.on("scroll",function(s){t.scrollY=Math.abs(Math.round(s.y))})},_calculateHeight:function(){var t=this.$refs.foodList,s=0;this.listHeight.push(s);for(var e=0;e<t.length;e++){s+=t[e].clientHeight,this.listHeight.push(s)}}},created:function(){var t=this;this.classMap=["decrease","discount","special","invoice","guarantee"],this.$http.get("https://www.easy-mock.com/mock/5ca45824c4e9a575b66b62c9/example/123").then(function(s){console.log(s),0===s.data.errno&&(t.goods=s.data.data,t.$nextTick(function(){t._initScroll(),t._calculateHeight()}))})}},g={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"goods"},[e("div",{ref:"menuWrapper",staticClass:"menu-wrapper"},[e("ul",t._l(t.goods,function(s,a){return e("li",{key:a,staticClass:"menu-item",class:{current:t.currentIndex===a},on:{click:function(s){return t.selectMenu(a,s)}}},[e("span",{staticClass:"text border-1px"},[e("span",{directives:[{name:"show",rawName:"v-show",value:s.type>0,expression:"item.type>0"}],staticClass:"icon",class:t.classMap[s.type]}),t._v("\n            "+t._s(s.name)+"\n          ")])])}),0)]),t._v(" "),e("div",{ref:"foodsWrapper",staticClass:"foods-wrapper"},[e("ul",t._l(t.goods,function(s,a){return e("li",{key:a,ref:"foodList",refInFor:!0,staticClass:"food-list"},[e("h1",{staticClass:"title"},[t._v(t._s(s.name))]),t._v(" "),e("ul",t._l(s.foods,function(s,a){return e("li",{key:a,staticClass:"food-item border-1px"},[e("div",{staticClass:"icon"},[e("img",{attrs:{width:"57",height:"57",src:s.icon}})]),t._v(" "),e("div",{staticClass:"content"},[e("h2",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("p",{staticClass:"desc"},[t._v(t._s(s.description))]),t._v(" "),e("div",{staticClass:"extra"},[e("span",{staticClass:"count"},[t._v("月售"+t._s(s.sellCount)+"份")]),t._v(" "),e("span",[t._v("好评率"+t._s(s.rating)+"%")])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"now"},[t._v("￥"+t._s(s.price))]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:s.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v("￥"+t._s(s.oldPrice))])]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("cartcontrol",{attrs:{food:s},on:{add:t.addFood}})],1)])])}),0)])}),0)]),t._v(" "),e("shopcart",{ref:"shopcart",attrs:{selectFoods:t.selectFoods,deliveryPrice:t.seller.deliveryPrice,minPrice:t.seller.minPrice}})],1)])},staticRenderFns:[]};var y=e("VU/8")(w,g,!1,function(t){e("zjHm")},null,null).exports;a.a.use(v.a);var b=new v.a({routes:[{path:"/",name:"Goods",component:y},{path:"/goods",name:"Goods",component:y}]}),k=e("mtWM"),x=e.n(k);e("34KM");a.a.config.productionTip=!1,a.a.prototype.$http=x.a,new a.a({el:"#app",router:b,components:{App:d},template:"<App/>"})},Ov40:function(t,s){},c0oA:function(t,s){},zjHm:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.e1900aba1ea761438cff.js.map