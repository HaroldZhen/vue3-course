(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ce075148"],{4848:function(e,a,t){"use strict";t.r(a);t("b0c0");var s=t("7a23"),l={class:"container my-3"},r={class:"my-5 row justify-content-center"},n={class:"mb-3"},o=Object(s["h"])("label",{for:"email",class:"form-label"},"Email",-1),c={class:"mb-3"},i=Object(s["h"])("label",{for:"email",class:"form-label"},"收件人姓名",-1),d={class:"mb-3"},m=Object(s["h"])("label",{for:"tel",class:"form-label"},"收件人電話",-1),u={class:"mb-3"},b=Object(s["h"])("label",{for:"address",class:"form-label"},"收件人地址",-1),f={class:"mb-3"},h=Object(s["h"])("label",{for:"message",class:"form-label"},"留言",-1),j={class:"spinner-border spinner-border-sm",role:"status"},O=Object(s["h"])("span",{class:"visually-hidden"},"Loading...",-1),p=Object(s["g"])(" 送出 ");function v(e,a,t,v,g,V){var w=Object(s["C"])("Header"),C=Object(s["C"])("Breadcrumb"),D=Object(s["C"])("VField"),y=Object(s["C"])("ErrorMessage"),B=Object(s["C"])("VForm"),$=Object(s["C"])("Footer");return Object(s["u"])(),Object(s["d"])(s["a"],null,[Object(s["h"])(w),Object(s["h"])("main",l,[Object(s["h"])(C),Object(s["h"])("div",null,[Object(s["h"])("div",r,[Object(s["h"])(B,{ref:"form",class:"col-md-6",onSubmit:V.onSubmit},{default:Object(s["N"])((function(e){var t=e.errors;return[Object(s["h"])("div",n,[o,Object(s["h"])(D,{id:"email",name:"email",type:"email",class:["form-control",{"is-invalid":t["email"]}],placeholder:"請輸入 Email",rules:"email|required",modelValue:g.formData.user.email,"onUpdate:modelValue":a[1]||(a[1]=function(e){return g.formData.user.email=e})},null,8,["class","modelValue"]),Object(s["h"])(y,{name:"email",class:"invalid-feedback"})]),Object(s["h"])("div",c,[i,Object(s["h"])(D,{id:"name",name:"name",type:"text",class:["form-control",{"is-invalid":t["name"]}],placeholder:"請輸入姓名",rules:"required",modelValue:g.formData.user.name,"onUpdate:modelValue":a[2]||(a[2]=function(e){return g.formData.user.name=e})},null,8,["class","modelValue"]),Object(s["h"])(y,{name:"name",class:"invalid-feedback"})]),Object(s["h"])("div",d,[m,Object(s["h"])(D,{id:"tel",name:"tel",type:"text",class:["form-control",{"is-invalid":t["tel"]}],placeholder:"請輸入電話",rules:V.isPhone,modelValue:g.formData.user.tel,"onUpdate:modelValue":a[3]||(a[3]=function(e){return g.formData.user.tel=e})},null,8,["class","rules","modelValue"]),Object(s["h"])(y,{name:"tel",class:"invalid-feedback"})]),Object(s["h"])("div",u,[b,Object(s["h"])(D,{id:"address",name:"address",type:"text",class:["form-control",{"is-invalid":t["address"]}],placeholder:"請輸入地址",rules:"required",modelValue:g.formData.user.address,"onUpdate:modelValue":a[4]||(a[4]=function(e){return g.formData.user.address=e})},null,8,["class","modelValue"]),Object(s["h"])(y,{name:"address",class:"invalid-feedback"})]),Object(s["h"])("div",f,[h,Object(s["h"])(D,{id:"message",name:"message",modelValue:g.formData.message,"onUpdate:modelValue":a[5]||(a[5]=function(e){return g.formData.message=e})},{default:Object(s["N"])((function(e){var a=e.field;return[Object(s["h"])("textarea",Object(s["n"])(a,{class:"form-control",cols:"30",rows:"10"}),null,16)]})),_:1},8,["modelValue"])]),Object(s["h"])("button",{class:"btn btn-primary",disabled:g.isLoadingBtn},[Object(s["O"])(Object(s["h"])("div",j,[O],512),[[s["K"],g.isLoadingBtn]]),p],8,["disabled"])]})),_:1},8,["onSubmit"])])])]),Object(s["h"])($)],64)}var g=t("5530"),V=(t("d3b7"),t("25f0"),t("9de5")),w=t("0418"),C=t("2fbc"),D=t("fd2d"),y={name:"Customer",components:{Header:w["a"],Breadcrumb:C["a"],Footer:D["a"]},data:function(){return{isLoadingBtn:!1,formData:{user:{},message:""}}},created:function(){},methods:{onSubmit:function(){var e=this;this.isLoadingBtn=!0;var a={data:Object(g["a"])({},this.formData)};V["b"].post(V["c"].order.src(),a).then((function(a){var t=a.data,s=t.success,l=t.message,r=t.orderId;s?e.$swal({title:"訂單ID:".concat(r),icon:"success",showConfirmButton:!1,timer:1e3}).then((function(){e.$refs.form.resetForm(),e.$router.push("/")})):e.$swal({title:l,icon:"error",toast:!1,position:"center",showCloseButton:!0,showConfirmButton:!1})})).catch((function(a){e.$swal({title:a.toString(),icon:"error",toast:!1,position:"center",showCloseButton:!0,showConfirmButton:!1})})).finally((function(){e.isLoadingBtn=!1,e.$bus.$emit("cartCount")}))},isPhone:function(e){var a=/^(09)[0-9]{8}$/;return!!a.test(e)||"需要正確的電話號碼"}}};y.render=v;a["default"]=y},b0c0:function(e,a,t){var s=t("83ab"),l=t("9bf2").f,r=Function.prototype,n=r.toString,o=/^\s*function ([^ (]*)/,c="name";s&&!(c in r)&&l(r,c,{configurable:!0,get:function(){try{return n.call(this).match(o)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=chunk-ce075148.8eca9d52.js.map