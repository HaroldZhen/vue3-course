(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21de4f"],{d2f1:function(t,c,e){"use strict";e.r(c);e("a4d3"),e("e01a");var n=e("7a23"),o={class:"container my-3"},a={class:"breadcrumb-item"},r={class:"row"},d={class:"col-7"},i={class:"col-5"},s={class:"spinner-border spinner-border-sm",role:"status"},u=Object(n["h"])("span",{class:"visually-hidden"},"Loading...",-1),l=Object(n["g"])(" 加入購物車 ");function b(t,c,e,b,h,j){var p=Object(n["y"])("Header"),O=Object(n["y"])("Breadcrumb"),g=Object(n["y"])("Footer");return Object(n["q"])(),Object(n["d"])(n["a"],null,[Object(n["h"])(p),Object(n["h"])("main",o,[Object(n["h"])(O,null,{default:Object(n["G"])((function(){return[Object(n["h"])("li",a,Object(n["A"])(h.product.title),1)]})),_:1}),Object(n["h"])("div",r,[Object(n["h"])("div",d,[Object(n["h"])("img",{class:"img-fluid",src:h.product.imageUrl,alt:""},null,8,["src"])]),Object(n["h"])("div",i,[Object(n["h"])("h2",null,Object(n["A"])(h.product.title),1),Object(n["h"])("p",null,"NT: "+Object(n["A"])(h.product.price),1),Object(n["h"])("p",null,Object(n["A"])(h.product.description),1),Object(n["h"])("button",{type:"button",class:"btn btn-primary",disabled:h.isLoadingBtn,onClick:c[1]||(c[1]=Object(n["I"])((function(t){return j.addToCart(h.product.id)}),["prevent"]))},[Object(n["H"])(Object(n["h"])("div",s,[u],512),[[n["E"],h.isLoadingBtn]]),l],8,["disabled"])])])]),Object(n["h"])(g)],64)}var h=e("5530"),j=(e("d3b7"),e("25f0"),e("0418")),p=e("2fbc"),O=e("fd2d"),g=e("9de5"),f={data:function(){return{isLoadingBtn:!1,product:{}}},components:{Header:j["a"],Breadcrumb:p["a"],Footer:O["a"]},methods:{getProdut:function(t){var c=this;this.product={},g["b"].get(g["c"].product.sigle(t)).then((function(t){var e=t.data,n=e.success,o=e.product,a=e.message;n?c.product=Object(h["a"])(Object(h["a"])({},o),{},{qty:1}):console.log(a)})).catch((function(t){console.log(t.toString())}))},addToCart:function(t){var c=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.isLoadingBtn=!0;var n={data:{product_id:t,qty:e}};g["b"].post(g["c"].cart.src(),n).then((function(t){var c=t.data,e=(c.success,c.message);console.log(e)})).then((function(){c.getCart()})).catch((function(t){console.log(t.toString())})).finally((function(){c.isLoadingBtn=!1}))}},created:function(){var t=this.$route.params.id;this.getProdut(t)}};f.render=b;c["default"]=f}}]);
//# sourceMappingURL=chunk-2d21de4f.065e0883.js.map