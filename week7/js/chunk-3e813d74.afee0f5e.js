(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3e813d74"],{"057f":function(t,e,n){var r=n("fc6a"),c=n("241c").f,a={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],i=function(t){try{return c(t)}catch(e){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==a.call(t)?i(t):c(r(t))}},1799:function(t,e,n){"use strict";var r=n("7a23"),c={"aria-label":"pagination"},a={class:"pagination justify-content-center"};function o(t,e,n,o,i,l){return Object(r["u"])(),Object(r["d"])("nav",c,[Object(r["h"])("ul",a,[Object(r["h"])("li",{class:["page-item",[n.pages.has_pre?"":"disabled"]],disabled:n.pages.has_pre},[Object(r["h"])("a",{class:"page-link",href:"#",onClick:e[1]||(e[1]=Object(r["P"])((function(t){return l.toPage(n.pages.current_page-1)}),["prevent"]))},"Previous")],10,["disabled"]),(Object(r["u"])(!0),Object(r["d"])(r["a"],null,Object(r["A"])(n.pages.total_pages,(function(t){return Object(r["u"])(),Object(r["d"])("li",{class:["page-item",[n.pages.current_page===t?"active":""]],key:t},[Object(r["h"])("a",{class:"page-link",href:"#",onClick:Object(r["P"])((function(e){return l.toPage(t)}),["prevent"])},Object(r["F"])(t),9,["onClick"])],2)})),128)),Object(r["h"])("li",{class:["page-item",[n.pages.has_next?"":"disabled"]],disabled:n.pages.has_next},[Object(r["h"])("a",{class:"page-link",href:"#",onClick:e[2]||(e[2]=Object(r["P"])((function(t){return l.toPage(n.pages.current_page+1)}),["prevent"]))},"Next")],10,["disabled"])])])}var i={name:"Pagination",props:["pages","currentPage"],methods:{toPage:function(t){this.pages.current_page!==t&&this.$emit("to-page",t)}}};i.render=o;e["a"]=i},"4de4":function(t,e,n){"use strict";var r=n("23e7"),c=n("b727").filter,a=n("1dde"),o=a("filter");r({target:"Array",proto:!0,forced:!o},{filter:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n("b64b"),n("a4d3"),n("4de4"),n("e439"),n("159b"),n("dbb4");function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},"746f":function(t,e,n){var r=n("428f"),c=n("5135"),a=n("e538"),o=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});c(e,t)||o(e,t,{value:a.f(t)})}},a4d3:function(t,e,n){"use strict";var r=n("23e7"),c=n("da84"),a=n("d066"),o=n("c430"),i=n("83ab"),l=n("4930"),s=n("fdbf"),d=n("d039"),u=n("5135"),b=n("e8b5"),O=n("861d"),h=n("825a"),f=n("7b0b"),p=n("fc6a"),j=n("c04e"),m=n("5c6c"),g=n("7c73"),y=n("df75"),v=n("241c"),w=n("057f"),P=n("7418"),k=n("06cf"),M=n("9bf2"),_=n("d1e7"),x=n("9112"),F=n("6eeb"),C=n("5692"),S=n("f772"),D=n("d012"),$=n("90e3"),E=n("b622"),U=n("e538"),I=n("746f"),N=n("d44e"),A=n("69f3"),J=n("b727").forEach,T=S("hidden"),B="Symbol",L="prototype",V=E("toPrimitive"),q=A.set,Q=A.getterFor(B),W=Object[L],z=c.Symbol,G=a("JSON","stringify"),H=k.f,K=M.f,R=w.f,X=_.f,Y=C("symbols"),Z=C("op-symbols"),tt=C("string-to-symbol-registry"),et=C("symbol-to-string-registry"),nt=C("wks"),rt=c.QObject,ct=!rt||!rt[L]||!rt[L].findChild,at=i&&d((function(){return 7!=g(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=H(W,e);r&&delete W[e],K(t,e,n),r&&t!==W&&K(W,e,r)}:K,ot=function(t,e){var n=Y[t]=g(z[L]);return q(n,{type:B,tag:t,description:e}),i||(n.description=e),n},it=s?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof z},lt=function(t,e,n){t===W&&lt(Z,e,n),h(t);var r=j(e,!0);return h(n),u(Y,r)?(n.enumerable?(u(t,T)&&t[T][r]&&(t[T][r]=!1),n=g(n,{enumerable:m(0,!1)})):(u(t,T)||K(t,T,m(1,{})),t[T][r]=!0),at(t,r,n)):K(t,r,n)},st=function(t,e){h(t);var n=p(e),r=y(n).concat(ht(n));return J(r,(function(e){i&&!ut.call(n,e)||lt(t,e,n[e])})),t},dt=function(t,e){return void 0===e?g(t):st(g(t),e)},ut=function(t){var e=j(t,!0),n=X.call(this,e);return!(this===W&&u(Y,e)&&!u(Z,e))&&(!(n||!u(this,e)||!u(Y,e)||u(this,T)&&this[T][e])||n)},bt=function(t,e){var n=p(t),r=j(e,!0);if(n!==W||!u(Y,r)||u(Z,r)){var c=H(n,r);return!c||!u(Y,r)||u(n,T)&&n[T][r]||(c.enumerable=!0),c}},Ot=function(t){var e=R(p(t)),n=[];return J(e,(function(t){u(Y,t)||u(D,t)||n.push(t)})),n},ht=function(t){var e=t===W,n=R(e?Z:p(t)),r=[];return J(n,(function(t){!u(Y,t)||e&&!u(W,t)||r.push(Y[t])})),r};if(l||(z=function(){if(this instanceof z)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=$(t),n=function(t){this===W&&n.call(Z,t),u(this,T)&&u(this[T],e)&&(this[T][e]=!1),at(this,e,m(1,t))};return i&&ct&&at(W,e,{configurable:!0,set:n}),ot(e,t)},F(z[L],"toString",(function(){return Q(this).tag})),F(z,"withoutSetter",(function(t){return ot($(t),t)})),_.f=ut,M.f=lt,k.f=bt,v.f=w.f=Ot,P.f=ht,U.f=function(t){return ot(E(t),t)},i&&(K(z[L],"description",{configurable:!0,get:function(){return Q(this).description}}),o||F(W,"propertyIsEnumerable",ut,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!l,sham:!l},{Symbol:z}),J(y(nt),(function(t){I(t)})),r({target:B,stat:!0,forced:!l},{for:function(t){var e=String(t);if(u(tt,e))return tt[e];var n=z(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!it(t))throw TypeError(t+" is not a symbol");if(u(et,t))return et[t]},useSetter:function(){ct=!0},useSimple:function(){ct=!1}}),r({target:"Object",stat:!0,forced:!l,sham:!i},{create:dt,defineProperty:lt,defineProperties:st,getOwnPropertyDescriptor:bt}),r({target:"Object",stat:!0,forced:!l},{getOwnPropertyNames:Ot,getOwnPropertySymbols:ht}),r({target:"Object",stat:!0,forced:d((function(){P.f(1)}))},{getOwnPropertySymbols:function(t){return P.f(f(t))}}),G){var ft=!l||d((function(){var t=z();return"[null]"!=G([t])||"{}"!=G({a:t})||"{}"!=G(Object(t))}));r({target:"JSON",stat:!0,forced:ft},{stringify:function(t,e,n){var r,c=[t],a=1;while(arguments.length>a)c.push(arguments[a++]);if(r=e,(O(e)||void 0!==t)&&!it(t))return b(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!it(e))return e}),c[1]=e,G.apply(null,c)}})}z[L][V]||x(z[L],V,z[L].valueOf),N(z,B),D[T]=!0},b0c0:function(t,e,n){var r=n("83ab"),c=n("9bf2").f,a=Function.prototype,o=a.toString,i=/^\s*function ([^ (]*)/,l="name";r&&!(l in a)&&c(a,l,{configurable:!0,get:function(){try{return o.call(this).match(i)[1]}catch(t){return""}}})},da25:function(t,e,n){"use strict";n.r(e);var r=n("7a23"),c=Object(r["h"])("div",{class:"d-flex justify-content-between align-items-baseline"},[Object(r["h"])("h2",null,[Object(r["h"])("i",{class:"bi bi-award p-1"}),Object(r["g"])("訂單管理")])],-1),a={class:"table mt-4"},o=Object(r["h"])("thead",null,[Object(r["h"])("tr",null,[Object(r["h"])("th",null,"購買時間"),Object(r["h"])("th",null,"Email"),Object(r["h"])("th",null,"購買款項"),Object(r["h"])("th",null,"應付金額"),Object(r["h"])("th",null,"是否付款"),Object(r["h"])("th",null,"編輯")])],-1),i={class:"list-unstyled"},l={class:"text-right"},s={class:"form-check form-switch"},d={key:0},u={key:1},b={class:"btn-group"};function O(t,e,n,O,h,f){var p=Object(r["C"])("Pagination"),j=Object(r["C"])("OrderModal"),m=Object(r["C"])("DeleteModal");return Object(r["u"])(),Object(r["d"])(r["a"],null,[c,Object(r["h"])("table",a,[o,Object(r["h"])("tbody",null,[(Object(r["u"])(!0),Object(r["d"])(r["a"],null,Object(r["A"])(h.orders,(function(e){return Object(r["u"])(),Object(r["d"])("tr",{key:e.id,class:"text-secondary"},[Object(r["h"])("td",null,Object(r["F"])(t.$filters.date(e.create_at)),1),Object(r["h"])("td",null,[Object(r["h"])("span",null,Object(r["F"])(e.user.email),1)]),Object(r["h"])("td",null,[Object(r["h"])("ul",i,[(Object(r["u"])(!0),Object(r["d"])(r["a"],null,Object(r["A"])(e.products,(function(t,e){return Object(r["u"])(),Object(r["d"])("li",{key:e},Object(r["F"])(t.product.title)+" 數量："+Object(r["F"])(t.qty)+" "+Object(r["F"])(t.product.unit),1)})),128))])]),Object(r["h"])("td",l,Object(r["F"])(e.total),1),Object(r["h"])("td",null,[Object(r["h"])("div",s,[Object(r["O"])(Object(r["h"])("input",{class:"form-check-input",type:"checkbox",id:"paid".concat(e.id),"onUpdate:modelValue":function(t){return e.is_paid=t},onChange:function(t){return f.updatePayment(e)}},null,40,["id","onUpdate:modelValue","onChange"]),[[r["I"],e.is_paid]]),Object(r["h"])("label",{class:"form-check-label",for:"paid".concat(e.id)},[e.is_paid?(Object(r["u"])(),Object(r["d"])("span",d,"已付款")):(Object(r["u"])(),Object(r["d"])("span",u,"未付款"))],8,["for"])])]),Object(r["h"])("td",null,[Object(r["h"])("div",b,[Object(r["h"])("button",{class:"btn btn-outline-primary btn-sm",onClick:function(t){return f.openModal(e)},type:"button"},"檢視",8,["onClick"]),Object(r["h"])("button",{class:"btn btn-outline-danger btn-sm",onClick:function(t){return f.openDeleteModal(e)},type:"button"}," 刪除 ",8,["onClick"])])])])})),128))])]),h.pages.total_pages?(Object(r["u"])(),Object(r["d"])(p,{key:0,pages:h.pages,"current-page":h.currentPage,onToPage:f.toPage},null,8,["pages","current-page","onToPage"])):Object(r["e"])("",!0),Object(r["h"])(j,{order:h.tempOrder,ref:"orderModal",onUpdatePayment:f.updatePayment},null,8,["order","onUpdatePayment"]),Object(r["h"])(m,{item:h.tempOrder,onDeletItem:f.deleteOrder,ref:"deleteModal"},null,8,["item","onDeletItem"])],64)}var h=n("5530"),f=n("9de5"),p=(n("b0c0"),{class:"modal fade",id:"orderModal",tabindex:"-1","aria-labelledby":"orderModalLabel","aria-hidden":"true",ref:"modal"}),j={class:"modal-dialog modal-lg"},m={class:"modal-content"},g=Object(r["h"])("div",{class:"modal-header"},[Object(r["h"])("h5",{class:"modal-title",id:"orderModalLabel"},"訂單資料"),Object(r["h"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),y={class:"modal-body"},v={class:"row"},w={class:"col-md-4"},P=Object(r["h"])("h3",{class:"bg-secondary text-white p-2 rounded-1"},"用戶資料",-1),k={class:"table"},M={key:0},_=Object(r["h"])("th",{style:{width:"100px"}},"姓名",-1),x=Object(r["h"])("th",null,"Email",-1),F=Object(r["h"])("th",null,"電話",-1),C=Object(r["h"])("th",null,"地址",-1),S={class:"col-md-8"},D=Object(r["h"])("h3",{class:"bg-secondary text-white p-2 rounded-1"},"訂單內容",-1),$={class:"table"},E=Object(r["h"])("th",{style:{width:"100px"}},"訂單編號",-1),U=Object(r["h"])("th",null,"下單時間",-1),I=Object(r["h"])("th",null,"付款狀態",-1),N={key:0,class:"text-success"},A=Object(r["g"])("已付款 "),J={key:0},T={key:1,class:"text-danger"},B=Object(r["h"])("th",null,"總金額",-1),L=Object(r["h"])("h3",{class:"bg-secondary text-white p-2 rounded-1"},"選購商品",-1),V={class:"table"},q=Object(r["h"])("thead",null,[Object(r["h"])("tr")],-1),Q={class:"text-end"},W={class:"d-flex justify-content-end"},z={class:"form-check"},G={class:"form-check-label",for:"flexCheckDefault"},H={key:0},K={key:1},R={class:"modal-footer"},X=Object(r["h"])("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消",-1);function Y(t,e,n,c,a,o){return Object(r["u"])(),Object(r["d"])("div",p,[Object(r["h"])("div",j,[Object(r["h"])("div",m,[g,Object(r["h"])("div",y,[Object(r["h"])("div",v,[Object(r["h"])("div",w,[P,Object(r["h"])("table",k,[a.tempOrder.user?(Object(r["u"])(),Object(r["d"])("tbody",M,[Object(r["h"])("tr",null,[_,Object(r["h"])("td",null,Object(r["F"])(a.tempOrder.user.name),1)]),Object(r["h"])("tr",null,[x,Object(r["h"])("td",null,Object(r["F"])(a.tempOrder.user.email),1)]),Object(r["h"])("tr",null,[F,Object(r["h"])("td",null,Object(r["F"])(a.tempOrder.user.tel),1)]),Object(r["h"])("tr",null,[C,Object(r["h"])("td",null,Object(r["F"])(a.tempOrder.user.address),1)])])):Object(r["e"])("",!0)])]),Object(r["h"])("div",S,[D,Object(r["h"])("table",$,[Object(r["h"])("tbody",null,[Object(r["h"])("tr",null,[E,Object(r["h"])("td",null,Object(r["F"])(a.tempOrder.id),1)]),Object(r["h"])("tr",null,[U,Object(r["h"])("td",null,Object(r["F"])(t.$filters.date(a.tempOrder.create_at)),1)]),Object(r["h"])("tr",null,[I,Object(r["h"])("td",null,[a.tempOrder.paid_date?(Object(r["u"])(),Object(r["d"])("strong",N,[A,a.tempOrder.paid_date?(Object(r["u"])(),Object(r["d"])("span",J,Object(r["F"])(t.$filters.date(a.tempOrder.paid_date)),1)):Object(r["e"])("",!0)])):(Object(r["u"])(),Object(r["d"])("span",T,"尚未付款"))])]),Object(r["h"])("tr",null,[B,Object(r["h"])("td",null,Object(r["F"])(t.$filters.currency(a.tempOrder.total)),1)])])]),L,Object(r["h"])("table",V,[q,Object(r["h"])("tbody",null,[(Object(r["u"])(!0),Object(r["d"])(r["a"],null,Object(r["A"])(a.tempOrder.products,(function(e){return Object(r["u"])(),Object(r["d"])("tr",{key:e.id},[Object(r["h"])("th",null,Object(r["F"])(e.product.title),1),Object(r["h"])("td",null,Object(r["F"])(e.qty)+" / "+Object(r["F"])(e.product.unit),1),Object(r["h"])("td",Q,Object(r["F"])(t.$filters.currency(e.final_total)),1)])})),128))])]),Object(r["h"])("div",W,[Object(r["h"])("div",z,[Object(r["O"])(Object(r["h"])("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault","onUpdate:modelValue":e[1]||(e[1]=function(t){return a.tempOrder.is_paid=t})},null,512),[[r["I"],a.tempOrder.is_paid]]),Object(r["h"])("label",G,[a.tempOrder.is_paid?(Object(r["u"])(),Object(r["d"])("span",H,"已付款")):(Object(r["u"])(),Object(r["d"])("span",K,"未付款"))])])])])])]),Object(r["h"])("div",R,[X,Object(r["h"])("button",{type:"button",class:"btn btn-primary",onClick:e[2]||(e[2]=function(){return o.onUpdate&&o.onUpdate.apply(o,arguments)})},"修改付款狀態")])])])],512)}var Z=n("7b17"),tt={props:{order:{type:Object,default:function(){return{}}}},emits:["update-payment"],data:function(){return{bsModal:"",tempOrder:{},isPaid:!1}},methods:{openModal:function(){this.bsModal.show()},hideModal:function(){this.bsModal.hide()},onUpdate:function(){this.$emit("update-payment",this.tempOrder),this.hideModal()}},watch:{order:function(){this.tempOrder=this.order}},mounted:function(){this.bsModal=new Z["a"](this.$refs.modal)}};tt.render=Y;var et=tt,nt=n("ec05"),rt=n("1799"),ct={name:"admin.order",components:{OrderModal:et,DeleteModal:nt["a"],Pagination:rt["a"]},data:function(){return{tempOrder:{},orders:[],currentPage:1,pages:{}}},methods:{getOrder:function(){var t=this,e=this.pages.total_pages,n=void 0===e?5:e;this.currentPage=this.currentPage>n?n:this.currentPage,this.$swal({title:"讀取訂單",icon:"info",toast:!0,position:"top",showConfirmButton:!1,timer:1e3}),f["b"].get(f["a"].order.page(this.currentPage)).then((function(e){var n=e.data.success,r=void 0!==n&&n;if(r){var c=e.data,a=c.orders,o=c.pagination;t.orders=a,t.pages=Object(h["a"])({},o)}}))},updatePayment:function(t){var e=this,n={data:{is_paid:t.is_paid,paid_date:Math.floor(Date.now()/1e3)}};f["b"].put(f["a"].order.src(t.id),n).then((function(t){var n=t.data.success,r=void 0!==n&&n;r&&(e.getOrder(e.currentPage),e.$swal({title:"更新付款狀態",icon:"success",showConfirmButton:!1,timer:1e3}))}))},toPage:function(t){this.currentPage=t,this.getOrder()},openModal:function(t){this.tempOrder=Object(h["a"])({},t),this.$refs.orderModal.openModal()},openDeleteModal:function(t){this.tempOrder=Object(h["a"])({},t),this.$refs.deleteModal.openModal()},deleteOrder:function(){var t=this;f["b"].delete(f["a"].order.src(this.tempOrder.id)).then((function(e){var n=e.data.success,r=void 0!==n&&n;r&&(t.getOrder(t.currentPage),t.$swal({title:"已刪除訂單",icon:"success",showConfirmButton:!1,timer:1e3}))}))}},created:function(){this.getOrder()}};ct.render=O;e["default"]=ct},dbb4:function(t,e,n){var r=n("23e7"),c=n("83ab"),a=n("56ef"),o=n("fc6a"),i=n("06cf"),l=n("8418");r({target:"Object",stat:!0,sham:!c},{getOwnPropertyDescriptors:function(t){var e,n,r=o(t),c=i.f,s=a(r),d={},u=0;while(s.length>u)n=c(r,e=s[u++]),void 0!==n&&l(d,e,n);return d}})},e439:function(t,e,n){var r=n("23e7"),c=n("d039"),a=n("fc6a"),o=n("06cf").f,i=n("83ab"),l=c((function(){o(1)})),s=!i||l;r({target:"Object",stat:!0,forced:s,sham:!i},{getOwnPropertyDescriptor:function(t,e){return o(a(t),e)}})},e538:function(t,e,n){var r=n("b622");e.f=r},ec05:function(t,e,n){"use strict";var r=n("7a23"),c={class:"modal fade",id:"deletModal",tabindex:"-1",role:"dialog","aria-labelledby":"deletModalLabel","aria-hidden":"true",ref:"modal"},a={class:"modal-dialog",role:"document"},o={class:"modal-content border-0"},i={class:"modal-header bg-danger text-white"},l={class:"modal-title"},s=Object(r["h"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),d={class:"modal-body"},u=Object(r["g"])(" 是否刪除 "),b={class:"text-danger"},O=Object(r["g"])(" (刪除後將無法恢復)。 "),h={class:"modal-footer"},f=Object(r["h"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消",-1);function p(t,e,n,p,j,m){return Object(r["u"])(),Object(r["d"])("div",c,[Object(r["h"])("div",a,[Object(r["h"])("div",o,[Object(r["h"])("div",i,[Object(r["h"])("h5",l,[Object(r["h"])("span",null,"刪除 "+Object(r["F"])(n.item.title||n.item.id),1)]),s]),Object(r["h"])("div",d,[u,Object(r["h"])("strong",b,Object(r["F"])(n.item.title),1),O]),Object(r["h"])("div",h,[f,Object(r["h"])("button",{type:"button",class:"btn btn-danger",onClick:e[1]||(e[1]=function(){return m.onSend&&m.onSend.apply(m,arguments)})},"確認刪除")])])])],512)}var j=n("7b17"),m={props:["item"],emits:["deleteItem"],data:function(){return{modal:""}},methods:{openModal:function(){this.modal.show()},hideModal:function(){this.modal.hide()},onSend:function(){this.$emit("deletItem"),this.hideModal()}},mounted:function(){this.modal=new j["a"](this.$refs.modal)}};m.render=p;e["a"]=m}}]);
//# sourceMappingURL=chunk-3e813d74.afee0f5e.js.map