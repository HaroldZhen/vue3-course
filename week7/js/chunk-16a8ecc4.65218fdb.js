(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-16a8ecc4"],{a434:function(t,e,c){"use strict";var l=c("23e7"),i=c("23cb"),a=c("a691"),n=c("50c4"),o=c("7b0b"),r=c("65f0"),s=c("8418"),b=c("1dde"),d=b("splice"),u=Math.max,h=Math.min,p=9007199254740991,m="Maximum allowed length exceeded";l({target:"Array",proto:!0,forced:!d},{splice:function(t,e){var c,l,b,d,O,f,j=o(this),g=n(j.length),v=i(t,g),A=arguments.length;if(0===A?c=l=0:1===A?(c=0,l=g-v):(c=A-2,l=h(u(a(e),0),g-v)),g+c-l>p)throw TypeError(m);for(b=r(j,l),d=0;d<l;d++)O=v+d,O in j&&s(b,d,j[O]);if(b.length=l,c<l){for(d=v;d<g-l;d++)O=d+l,f=d+c,O in j?j[f]=j[O]:delete j[f];for(d=g;d>g-l+c;d--)delete j[d-1]}else if(c>l)for(d=g-l;d>v;d--)O=d+l-1,f=d+c-1,O in j?j[f]=j[O]:delete j[f];for(d=0;d<c;d++)j[d+v]=arguments[d+2];return j.length=g-l+c,b}})},e01a:function(t,e,c){"use strict";var l=c("23e7"),i=c("83ab"),a=c("da84"),n=c("5135"),o=c("861d"),r=c("9bf2").f,s=c("e893"),b=a.Symbol;if(i&&"function"==typeof b&&(!("description"in b.prototype)||void 0!==b().description)){var d={},u=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof u?new b(t):void 0===t?b():b(t);return""===t&&(d[e]=!0),e};s(u,b);var h=u.prototype=b.prototype;h.constructor=u;var p=h.toString,m="Symbol(test)"==String(b("test")),O=/^Symbol\((.*)\)[^)]+$/;r(h,"description",{configurable:!0,get:function(){var t=o(this)?this.valueOf():this,e=p.call(t);if(n(d,t))return"";var c=m?e.slice(7,-1):e.replace(O,"$1");return""===c?void 0:c}}),l({global:!0,forced:!0},{Symbol:u})}},f957:function(t,e,c){"use strict";c.r(e);c("a4d3"),c("e01a");var l=c("7a23"),i={class:"d-flex justify-content-between align-items-baseline"},a=Object(l["h"])("h2",null,[Object(l["h"])("i",{class:"bi bi-bank2 p-1",style:{"font-size":"1.5rem"}}),Object(l["g"])("最新消息")],-1),n={class:"table mt-4"},o=Object(l["h"])("thead",null,[Object(l["h"])("tr",null,[Object(l["h"])("th",{style:{width:"200px"}},"標題"),Object(l["h"])("th",{style:{width:"200px"}},"作者"),Object(l["h"])("th",null,"描述"),Object(l["h"])("th",{style:{width:"100px"}},"建立時間"),Object(l["h"])("th",{style:{width:"100px"}},"是否公開"),Object(l["h"])("th",{style:{width:"120px"}},"編輯")])],-1),r={key:0,class:"text-success"},s={key:1,class:"text-muted"},b={class:"btn-group"};function d(t,e,c,d,u,h){var p=Object(l["C"])("Pagination"),m=Object(l["C"])("ArticleModal"),O=Object(l["C"])("DeleteModal");return Object(l["u"])(),Object(l["d"])(l["a"],null,[Object(l["h"])("div",i,[a,Object(l["h"])("button",{class:"btn btn-primary m-3",onClick:e[1]||(e[1]=function(){return h.openModal&&h.openModal.apply(h,arguments)})},"建立新的最新消息")]),Object(l["h"])("table",n,[o,Object(l["h"])("tbody",null,[(Object(l["u"])(!0),Object(l["d"])(l["a"],null,Object(l["A"])(u.articles,(function(e){return Object(l["u"])(),Object(l["d"])("tr",{key:e.id},[Object(l["h"])("td",null,Object(l["F"])(e.title),1),Object(l["h"])("td",null,Object(l["F"])(e.author),1),Object(l["h"])("td",null,Object(l["F"])(e.description),1),Object(l["h"])("td",null,Object(l["F"])(t.$filters.date(e.create_at)),1),Object(l["h"])("td",null,[e.isPublic?(Object(l["u"])(),Object(l["d"])("span",r,"已上架")):(Object(l["u"])(),Object(l["d"])("span",s,"未上架"))]),Object(l["h"])("td",null,[Object(l["h"])("div",b,[Object(l["h"])("button",{class:"btn btn-outline-primary btn-sm",type:"button",onClick:function(t){return h.getArticle(e.id)}}," 編輯 ",8,["onClick"]),Object(l["h"])("button",{class:"btn btn-outline-danger btn-sm",type:"button",onClick:function(t){return h.openDeleteModal(e)}}," 刪除 ",8,["onClick"])])])])})),128))])]),u.pages.total_pages?(Object(l["u"])(),Object(l["d"])(p,{key:0,pages:u.pages,"current-page":u.currentPage,onToPage:h.toPage},null,8,["pages","current-page","onToPage"])):Object(l["e"])("",!0),Object(l["h"])(m,{isNew:u.isNew,article:u.tempArticle,ref:"articleModal",onNewOrUpdateArticle:h.newOrUpdateArticle},null,8,["isNew","article","onNewOrUpdateArticle"]),Object(l["h"])(O,{item:u.tempArticle,onDeletItem:h.deleteArticle,ref:"deleteModal"},null,8,["item","onDeletItem"])],64)}var u=c("5530"),h=c("9de5"),p=(c("a434"),{class:"modal fade",id:"articleModal",tabindex:"-1","aria-labelledby":"articleModalLabel","aria-hidden":"true",ref:"modal"}),m={class:"modal-dialog modal-lg"},O={class:"modal-content"},f={class:"modal-header"},j={class:"modal-title",id:"articleModalLabel"},g={key:0},v={key:1},A=Object(l["h"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),w={class:"modal-body"},y={class:"row"},M={class:"col-sm-4"},k={class:"mb-3"},x=Object(l["h"])("label",{for:"title",class:"form-label"},"標題",-1),U={class:"mb-3"},P=Object(l["h"])("label",{for:"image",class:"form-label"},"輸入圖片網址",-1),C={class:"mb-3"},D=Object(l["h"])("label",{for:"author",class:"form-label"},"作者",-1),$={class:"mb-3"},N=Object(l["h"])("label",{for:"create_at"},"文章建立日期",-1),J={class:"col-sm-8"},S=Object(l["h"])("label",{for:"tag",class:"form-label"},"標籤",-1),V={class:"row gx-1 mb-3"},B={class:"input-group input-group-sm"},T=Object(l["h"])("i",{class:"bi bi-x"},null,-1),_={key:0,class:"col-md-2 mb-1"},F={class:"mb-3"},I=Object(l["h"])("label",{for:"description",class:"form-label"},"文章描述",-1),L={class:"mb-3"},z=Object(l["h"])("label",{for:"content",class:"form-label"},"文章說明",-1),E={class:"mb-3"},q={class:"form-check"},G=Object(l["h"])("label",{class:"form-check-label",for:"isPublic"}," 是否公開 ",-1),H={class:"modal-footer"},K=Object(l["h"])("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消",-1);function Q(t,e,c,i,a,n){return Object(l["u"])(),Object(l["d"])("div",p,[Object(l["h"])("div",m,[Object(l["h"])("div",O,[Object(l["h"])("div",f,[Object(l["h"])("h5",j,[c.isNew?(Object(l["u"])(),Object(l["d"])("span",g,"新增文章")):(Object(l["u"])(),Object(l["d"])("span",v,"編輯優惠卷"))]),A]),Object(l["h"])("div",w,[Object(l["h"])("div",y,[Object(l["h"])("div",M,[Object(l["h"])("div",k,[x,Object(l["O"])(Object(l["h"])("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":e[1]||(e[1]=function(t){return a.tempArticle.title=t}),placeholder:"請輸入標題"},null,512),[[l["J"],a.tempArticle.title]])]),Object(l["h"])("div",U,[P,Object(l["O"])(Object(l["h"])("input",{type:"text",class:"form-control",id:"image","onUpdate:modelValue":e[2]||(e[2]=function(t){return a.tempArticle.imageUrl=t}),placeholder:"請輸入圖片連結"},null,512),[[l["J"],a.tempArticle.imageUrl]])]),Object(l["h"])("div",C,[D,Object(l["O"])(Object(l["h"])("input",{type:"text",class:"form-control",id:"author","onUpdate:modelValue":e[3]||(e[3]=function(t){return a.tempArticle.author=t}),placeholder:"請輸入標題"},null,512),[[l["J"],a.tempArticle.author]])]),Object(l["h"])("div",$,[N,Object(l["O"])(Object(l["h"])("input",{type:"date",class:"form-control",id:"create_at","onUpdate:modelValue":e[4]||(e[4]=function(t){return a.createDate=t})},null,512),[[l["J"],a.createDate]])])]),Object(l["h"])("div",J,[S,Object(l["h"])("div",V,[(Object(l["u"])(!0),Object(l["d"])(l["a"],null,Object(l["A"])(a.tempArticle.tag,(function(t,e){return Object(l["u"])(),Object(l["d"])("div",{class:"col-md-2 mb-1",key:e},[Object(l["h"])("div",B,[Object(l["O"])(Object(l["h"])("input",{type:"text",class:"form-control form-control",id:"tag","onUpdate:modelValue":function(t){return a.tempArticle.tag[e]=t},placeholder:"請輸入標籤"},null,8,["onUpdate:modelValue"]),[[l["J"],a.tempArticle.tag[e]]]),Object(l["h"])("button",{type:"button",class:"btn btn-outline-danger",onClick:function(t){return a.tempArticle.tag.splice(e,1)}},[T],8,["onClick"])])])})),128)),a.tempArticle.tag[a.tempArticle.tag.length-1]||!a.tempArticle.tag.length?(Object(l["u"])(),Object(l["d"])("div",_,[Object(l["h"])("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[5]||(e[5]=function(t){return a.tempArticle.tag.push("")})}," 新增標籤 ")])):Object(l["e"])("",!0)]),Object(l["h"])("div",F,[I,Object(l["O"])(Object(l["h"])("textarea",{type:"text",class:"form-control",id:"description","onUpdate:modelValue":e[6]||(e[6]=function(t){return a.tempArticle.description=t}),placeholder:"請輸入文章描述"},null,512),[[l["J"],a.tempArticle.description]])]),Object(l["h"])("div",L,[z,Object(l["O"])(Object(l["h"])("textarea",{type:"text",class:"form-control",id:"content","onUpdate:modelValue":e[7]||(e[7]=function(t){return a.tempArticle.content=t}),placeholder:"請輸入文章說明"},null,512),[[l["J"],a.tempArticle.content]])]),Object(l["h"])("div",E,[Object(l["h"])("div",q,[Object(l["O"])(Object(l["h"])("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":e[8]||(e[8]=function(t){return a.tempArticle.isPublic=t}),id:"isPublic"},null,512),[[l["I"],a.tempArticle.isPublic]]),G])])])])]),Object(l["h"])("div",H,[K,Object(l["h"])("button",{type:"button",class:"btn btn-primary",onClick:e[9]||(e[9]=function(){return n.onUpdate&&n.onUpdate.apply(n,arguments)})},"更新文章")])])])],512)}c("ac1f"),c("1276");var R=c("7b17"),W={props:{article:{type:Object,default:function(){return{}}},isNew:{type:Boolean,default:!1}},emits:["newOrUpdateArticle"],data:function(){return{bsModal:"",tempArticle:{tag:[""]},createDate:0}},methods:{openModal:function(){this.bsModal.show()},hideModal:function(){this.bsModal.hide()},onUpdate:function(){this.$emit("newOrUpdateArticle",this.tempArticle),this.hideModal()}},watch:{article:function(){this.tempArticle=Object(u["a"])(Object(u["a"])({},this.article),{},{tag:this.article.tag||[],isPublic:this.article.isPublic||!1});var t=this.tempArticle.create_at||Math.floor(Date.now()/1e3),e=new Date(1e3*t).toISOString().split("T");this.createDate=e.shift()},createDate:function(){this.tempArticle.create_at=this.$filters.dateToTimestamp(this.createDate)}},mounted:function(){this.bsModal=new R["a"](this.$refs.modal)}};W.render=Q;var X=W,Y=c("ec05"),Z=c("1799"),tt={components:{ArticleModal:X,DeleteModal:Y["a"],Pagination:Z["a"]},data:function(){return{articles:[],isNew:!1,tempArticle:{},currentPage:1,pages:{}}},methods:{getArticles:function(){var t=this;this.$swal({title:"讀取中...",icon:"info",toast:!0,position:"top",showConfirmButton:!1,timer:1e3}),h["b"].get(h["a"].article.page(this.currentPage)).then((function(e){var c=e.data.success,l=void 0!==c&&c;if(l){var i=e.data,a=i.articles,n=i.pagination;t.articles=a,t.pages=Object(u["a"])({},n)}}))},getArticle:function(t){var e=this;this.$swal({title:"讀取中...",icon:"info",toast:!0,position:"top",showConfirmButton:!1,timer:1e3}),h["b"].get(h["a"].article.src(t)).then((function(t){var c=t.data.success,l=void 0!==c&&c;if(l){var i=t.data.article;e.openModal({isNew:!1,item:i})}})).then((function(){}))},newOrUpdateArticle:function(t){var e={data:Object(u["a"])({},t)};this.isNew?this.newArticle(e):this.updateArticle(e)},updateArticle:function(t){var e=this,c=t.data.id;h["b"].put(h["a"].article.src(c),t).then((function(t){var c=t.data.success,l=void 0!==c&&c;l&&(e.getArticles(e.currentPage),e.$swal({title:"更新文章",icon:"success",showConfirmButton:!1,timer:1e3}))}))},newArticle:function(t){var e=this;h["b"].post(h["a"].article.new,t).then((function(t){var c=t.data.success,l=void 0!==c&&c;l&&(e.getArticles(),e.$swal({title:"已新增文章",icon:"success",showConfirmButton:!1,timer:1e3}))}))},deleteArticle:function(){var t=this;h["b"].delete(h["a"].article.src(this.tempArticle.id)).then((function(e){var c=e.data.success,l=void 0!==c&&c;l&&(t.getArticles(t.currentPage),t.$swal({title:"已刪除文章",icon:"success",showConfirmButton:!1,timer:1e3}))}))},toPage:function(t){this.currentPage=t,this.getArticles()},openModal:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.isNew,c=void 0===e||e,l=t.item,i=void 0===l?{}:l;this.isNew=c,this.tempArticle=c?{}:Object(u["a"])({},i),this.$refs.articleModal.openModal()},openDeleteModal:function(t){this.tempArticle=Object(u["a"])({},t),this.$refs.deleteModal.openModal()}},created:function(){this.getArticles()}};tt.render=d;e["default"]=tt}}]);
//# sourceMappingURL=chunk-16a8ecc4.65218fdb.js.map