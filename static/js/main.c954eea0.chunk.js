(this["webpackJsonpfriday-project"]=this["webpackJsonpfriday-project"]||[]).push([[0],{14:function(e,n,t){e.exports={forgotPassword:"ForgotPassword_forgotPassword__2MlHL",wrapper:"ForgotPassword_wrapper__3bdcd",inner:"ForgotPassword_inner__348n1",form:"ForgotPassword_form__1KQ49",text:"ForgotPassword_text__iVqTU",btn:"ForgotPassword_btn__2aD94",singUp:"ForgotPassword_singUp__305sf",link:"ForgotPassword_link__3s4ac",linkSingUp:"ForgotPassword_linkSingUp__3ybFi"}},15:function(e,n,t){e.exports={wrapper:"Input_wrapper__sgEY7",label:"Input_label__2TTl5",input__item:"Input_input__item__3jSC1",icon:"Input_icon__1E6-D",span:"Input_span__2Jcmt",checkbox:"Input_checkbox__2bqf6",checkboxInput:"Input_checkboxInput__P_T-B",checkboxLable:"Input_checkboxLable__3VCdo"}},18:function(e,n,t){e.exports={loginPage:"Register_loginPage__3xiEa",wrapper:"Register_wrapper__3fFdv",inner:"Register_inner__35eRX",form:"Register_form__1wCvI",btn:"Register_btn__1F_93"}},25:function(e,n,t){e.exports={content:"App_content__INdBb"}},28:function(e,n,t){e.exports={navigationContainer:"Navigation_navigationContainer__3jxDD",linksList:"Navigation_linksList__2vRX6"}},37:function(e,n,t){e.exports={contentContainer:"Content_contentContainer__3_tBf"}},38:function(e,n,t){e.exports={btn:"Button_btn__3YXc9"}},39:function(e,n,t){e.exports={logo:"Logo_logo__2s_vA"}},40:function(e,n,t){e.exports={title:"TitleH2_title__1oyIA"}},41:function(e,n,t){e.exports={headerContainer:"Header_headerContainer__unZf7"}},47:function(e,n,t){},7:function(e,n,t){e.exports={loginPage:"LoginPage_loginPage__qEFAn",wrapper:"LoginPage_wrapper__-2biH",inner:"LoginPage_inner__2clEu",form:"LoginPage_form__3-rTG",wrap:"LoginPage_wrap__1xLgl",checkbox:"LoginPage_checkbox__3bbTY",checkboxInput:"LoginPage_checkboxInput__3OAOa",checkboxLable:"LoginPage_checkboxLable__3Udfu",linkPassword:"LoginPage_linkPassword__209Q3",btn:"LoginPage_btn__2FN60",singUp:"LoginPage_singUp__118j5",span:"LoginPage_span__2Cd-O",linkSingUp:"LoginPage_linkSingUp__2EW2I"}},72:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t(20),c=t.n(r),o=(t(47),t(25)),s=t.n(o),i=t(3),l=t(37),d=t.n(l),u="/",j="/login",b="/registration",h="/404",p="/recover",g="/newPassword",x="/presentation",m=t(0),_=function(){return Object(m.jsx)("div",{children:"Profile"})},O=function(){return Object(m.jsx)("div",{children:"NotFound"})},f=function(){return Object(m.jsx)("div",{children:"New Password"})},v=function(){return Object(m.jsx)("div",{children:"Presentation"})},w=t(13),k=t(18),C=t.n(k),y=t(15),N=t.n(y),P=function(e){return Object(m.jsxs)("form",{className:N.a.wrapper,style:e.style,children:[Object(m.jsx)("label",{className:N.a.label,children:e.title}),Object(m.jsx)("input",{className:N.a.input__item,type:e.type,name:e.name,placeholder:e.placeholder,value:e.value,onChange:function(n){e.onChange&&e.onChange(n.currentTarget.value)},id:e.idName}),Object(m.jsx)("div",{className:N.a.checkbox,children:Object(m.jsx)("div",{children:"inputPassword"===e.idName?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("input",{className:N.a.checkboxInput,type:"checkbox",onChange:function(){var e=document.getElementById("inputPassword");return null!==e&&("password"===e.getAttribute("type")?e.setAttribute("type","text"):e.setAttribute("type","password")),!1},id:e.id}),Object(m.jsx)("label",{className:N.a.checkboxLable,htmlFor:e.htmlFor})]}):null})}),Object(m.jsx)("span",{className:N.a.span,children:null!==e.error?Object(m.jsx)("span",{children:e.error}):null})]})},F=t(38),E=t.n(F),R=function(e){return Object(m.jsx)("button",{className:E.a.btn,style:e.style,onClick:function(){e.onClick()},children:e.value})},L=t(39),I=t.n(L),S=function(e){return Object(m.jsx)("a",{className:I.a.logo,style:e.style,href:"#",children:"It-incubator"})},T=t(40),U=t.n(T),A=function(e){return Object(m.jsx)("h2",{className:U.a.title,style:e.style,children:e.value})},B=function(e){return Object(m.jsx)("div",{className:C.a.loginPage,children:Object(m.jsx)("div",{className:C.a.wrapper,children:Object(m.jsxs)("div",{className:C.a.inner,children:[Object(m.jsx)(S,{}),Object(m.jsx)(A,{}),Object(m.jsxs)("div",{className:C.a.form,children:[Object(m.jsx)(P,{title:"Email",type:"email",name:"email",value:e.email,onChange:function(n){e.onEmailChange(n)}})," ",Object(m.jsx)(P,{title:"Password",type:"password",name:"password",id:"checkbox2",htmlFor:"checkbox2",value:e.password,onChange:function(n){e.onPasswordChange(n)},idName:"inputPassword",style:{marginTop:"25px"}}),Object(m.jsx)(P,{title:"Confirm password",type:"password",name:"Confirm password",idName:"inputPassword",id:"checkbox",htmlFor:"checkbox",value:e.passwordConfirm,onChange:function(n){e.onPasswordConfirmChange(n)},style:{marginTop:"25px"}})]}),Object(m.jsxs)("form",{className:C.a.btn,children:[Object(m.jsx)(R,{value:"Cancel",onClick:e.cancelClick,style:{width:"124px",backgroundColor:"#CDCEF4",color:"#21268F",marginRight:"36px"}}),Object(m.jsx)(R,{value:"Registration",onClick:e.registrationButtonClock,style:{width:"187px"}})]})]})})})},H=t(9),D=t(5),q=t(17),G=t.n(q),Z=G.a.create({withCredentials:!0,baseURL:"https://neko-back.herokuapp.com/2.0/"}),M=function(e,n){return Z.post("auth/register",{email:e,password:n})},$={newUser:{}},z=function(){var e=Object(H.b)(),n=Object(a.useState)("nya-admin@nya.nya"),t=Object(w.a)(n,2),r=t[0],c=t[1],o=Object(a.useState)("1qazxcvBG"),s=Object(w.a)(o,2),i=s[0],l=s[1],d=Object(a.useState)("1qazxcvBG"),u=Object(w.a)(d,2),j=u[0],b=u[1];return Object(m.jsx)(B,{email:r,password:i,passwordConfirm:j,onEmailChange:function(e){c(e)},onPasswordChange:function(e){l(e)},onPasswordConfirmChange:function(e){b(e)},registrationButtonClock:function(){if(i!==j)return alert("Password & confirm password fields are not equally"),l(""),void b("");e(function(e,n){return function(t){M(e,n).then((function(e){console.log(e.data),t({type:"SET_NEW_USER",payload:e.data})})).catch((function(e){var n=e.response?e.response.data.error:e.message+", more details in the console";console.log(n)}))}}(r,i)),c(""),l(""),b("")},cancelClick:function(){c(""),l(""),b("")}})},J=G.a.create({withCredentials:!0,baseURL:"https://neko-back.herokuapp.com/2.0/"}),W=function(e,n,t){return J.post("auth/login",{email:e,password:n,rememberMe:t})},X={user:{},isFetching:!1,error:null,isAuth:!1},Y=function(e){return{type:"IS-FETCHING",isFetching:e}},Q=function(e){return{type:"SET-ERROR",error:e}},V=t(7),K=t.n(V),ee=t(4),ne=function(e){return Object(m.jsx)("div",{className:K.a.loginPage,children:Object(m.jsx)("div",{className:K.a.wrapper,children:Object(m.jsxs)("div",{className:K.a.inner,children:[Object(m.jsx)(S,{}),Object(m.jsx)(A,{value:"Sign In"}),Object(m.jsxs)("div",{className:K.a.form,children:[Object(m.jsx)(P,{title:"Email",type:"email",name:"email",error:e.error,placeholder:"email",value:e.email,onChange:function(n){e.onChangeEmail(n)},style:{marginTop:"25px"},idName:"inputEmail"}),Object(m.jsx)(P,{title:"Password",name:"password",error:e.error,placeholder:"password",value:e.password,onChange:function(n){e.onChangePassword(n)},style:{marginTop:"25px"},idName:"inputPassword",id:"checkbox2",htmlFor:"checkbox2"})]}),Object(m.jsxs)("div",{className:K.a.wrap,children:[Object(m.jsxs)("div",{className:K.a.checkbox,children:[Object(m.jsx)("input",{className:K.a.checkboxInput,type:"checkbox",id:"checkbox1"}),Object(m.jsx)("label",{className:K.a.checkboxLable,htmlFor:"checkbox1",children:"Rememder me"})]}),Object(m.jsx)(ee.b,{className:K.a.linkPassword,to:p,children:"Forgot Password"})]}),Object(m.jsx)("div",{className:K.a.btn,children:Object(m.jsx)(R,{value:"Login",onClick:e.onclickHandler})}),Object(m.jsxs)("div",{className:K.a.singUp,children:[Object(m.jsx)("label",{className:K.a.span,children:"Don\u2019t have an account?"}),Object(m.jsx)(ee.b,{className:K.a.linkSingUp,to:b,children:"Sign Up"})]})]})})})},te=function(){var e=Object(H.c)((function(e){return e.login.isFetching})),n=Object(H.c)((function(e){return e.login.error})),t=Object(H.c)((function(e){return e.login.isAuth})),r=Object(H.b)(),c=Object(a.useState)("nya-admin@nya.nya"),o=Object(w.a)(c,2),s=o[0],l=o[1],d=Object(a.useState)("1qazxcvBG"),u=Object(w.a)(d,2),j=u[0],b=u[1],h=Object(a.useState)(!1),p=Object(w.a)(h,2),g=p[0],x=p[1];return e?Object(m.jsx)("div",{children:"Loading..."}):t?Object(m.jsx)(i.a,{to:"/profile"}):Object(m.jsx)(ne,{email:s,error:n,password:j,rememberMe:g,onclickHandler:function(){""===s||""===j?r(Q("Required")):/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(s)?j.length<8?r(Q("Password must be more 7 symbols")):(r(function(e,n,t){return function(a){a(Y(!0)),W(e,n,t).then((function(e){console.log(e.data),a({type:"SET_USER_DATA",payload:e.data})})).catch((function(e){var n=e.response?e.response.data.error:e.message+", more details in the console";console.log(n),a(Q(n))})).finally((function(){a(Y(!1))}))}}(s,j,g)),l(""),b(""),x(!1)):r(Q("Invalid email address"))},onChangeEmail:function(e){l(e)},onChangePassword:function(e){b(e)},onChangeRememberMe:function(e){x(!e)}})},ae=G.a.create({withCredentials:!0,baseURL:"https://neko-back.herokuapp.com/2.0"}),re=function(e){return ae.post("auth/forgot",{email:e,from:"shamashov87@mail.ru",message:"<div>password recover link: <a href='http://localhost:3000/#/set-new-password/$token$'>Link</a></div>"})},ce={isFetching:!1,error:null},oe=function(e){return{type:"IS-FETCHING",isFetching:e}},se=function(e){return{type:"SET-ERROR",error:e}},ie=t(14),le=t.n(ie),de=function(e){return Object(m.jsx)("div",{className:le.a.forgotPassword,children:Object(m.jsx)("div",{className:le.a.wrapper,children:Object(m.jsxs)("div",{className:le.a.inner,children:[Object(m.jsx)(S,{}),Object(m.jsx)(A,{value:"Sign In"}),Object(m.jsxs)("div",{className:le.a.form,children:[Object(m.jsx)(P,{title:"Email",type:"email",name:"email",value:e.email,onChange:e.onChangeEmail,error:e.error})," "]}),Object(m.jsx)("span",{className:le.a.text,children:"Enter your email address and we will send you further instructions "}),Object(m.jsx)("div",{className:le.a.btn,children:e.isFetching?Object(m.jsx)("span",{children:"Loading..."}):Object(m.jsx)(R,{value:"Send Instructions",onClick:e.onclickHandler})}),Object(m.jsxs)("div",{className:le.a.singUp,children:[Object(m.jsx)("a",{className:le.a.link,href:"#",children:"Did you remember your password?"}),Object(m.jsx)("a",{className:le.a.linkSingUp,href:"#",children:"Try logging in"})]})]})})})},ue=function(){var e=Object(a.useState)("shamashov87@mail.ru"),n=Object(w.a)(e,2),t=n[0],r=n[1],c=Object(H.c)((function(e){return e.passwordRecover.isFetching})),o=Object(H.c)((function(e){return e.passwordRecover.error})),s=Object(H.b)();return Object(m.jsx)(de,{email:t,error:o,onChangeEmail:function(e){r(e),null!==o&&s(se(null))},onclickHandler:function(){""===t?s(se("Required")):/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(t)?(s(function(e){return function(n){n(oe(!0)),re(e).then((function(e){console.log(e.data)})).catch((function(e){var t=e.response?e.response.data.error:e.message+", more details in the console";n(se(t))})).finally((function(){n(oe(!1))}))}}(t)),r("")):s(se("Invalid email address"))},isFetching:c})},je=function(){return Object(m.jsx)("div",{className:d.a.contentContainer,children:Object(m.jsxs)(i.d,{children:[Object(m.jsx)(i.b,{path:"/",exact:!0,render:function(){return Object(m.jsx)(i.a,{to:j})}}),Object(m.jsx)(i.b,{exact:!0,path:j,render:function(){return Object(m.jsx)(te,{})}}),Object(m.jsx)(i.b,{exact:!0,path:b,render:function(){return Object(m.jsx)(z,{})}}),Object(m.jsx)(i.b,{exact:!0,path:u,render:function(){return Object(m.jsx)(_,{})}}),Object(m.jsx)(i.b,{exact:!0,path:p,render:function(){return Object(m.jsx)(ue,{})}}),Object(m.jsx)(i.b,{exact:!0,path:g,render:function(){return Object(m.jsx)(f,{})}}),Object(m.jsx)(i.b,{exact:!0,path:x,render:function(){return Object(m.jsx)(v,{})}}),Object(m.jsx)(i.b,{render:function(){return Object(m.jsx)(O,{})}})]})})},be=t(41),he=t.n(be),pe=function(){return Object(m.jsx)("div",{className:he.a.headerContainer,children:Object(m.jsx)("button",{children:"Login"})})},ge=t(28),xe=t.n(ge),me=function(){return Object(m.jsxs)("div",{className:xe.a.navigationContainer,children:[Object(m.jsx)("h2",{children:"Navigation"}),Object(m.jsxs)("div",{className:xe.a.linksList,children:[Object(m.jsx)(ee.b,{to:j,children:"Login"}),Object(m.jsx)(ee.b,{to:b,children:"Registration"}),Object(m.jsx)(ee.b,{to:u,children:"Profile"}),Object(m.jsx)(ee.b,{to:h,children:"404"}),Object(m.jsx)(ee.b,{to:p,children:"Password Recover"}),Object(m.jsx)(ee.b,{to:g,children:"New Password"}),Object(m.jsx)(ee.b,{to:x,children:"Presentation"})]})]})};var _e=function(){return Object(m.jsxs)("div",{className:s.a.app,children:[Object(m.jsx)(pe,{}),Object(m.jsx)(me,{}),Object(m.jsx)("div",{className:s.a.content,children:Object(m.jsx)(je,{})})]})},Oe=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,73)).then((function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,c=n.getLCP,o=n.getTTFB;t(e),a(e),r(e),c(e),o(e)}))},fe=t(22),ve=t(42),we={},ke={},Ce={},ye=Object(fe.b)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,n=arguments.length>1?arguments[1]:void 0;return n.type,e},login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_USER_DATA":return Object(D.a)(Object(D.a)({},e),{},{user:n.payload,isAuth:!0});case"IS-FETCHING":return Object(D.a)(Object(D.a)({},e),{},{isFetching:n.isFetching});case"SET-ERROR":return Object(D.a)(Object(D.a)({},e),{},{error:n.error});default:return e}},newPassword:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,n=arguments.length>1?arguments[1]:void 0;return n.type,e},passwordRecover:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"IS-FETCHING":return Object(D.a)(Object(D.a)({},e),{},{isFetching:n.isFetching});case"SET-ERROR":return Object(D.a)(Object(D.a)({},e),{},{error:n.error});default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,n=arguments.length>1?arguments[1]:void 0;return n.type,e},registration:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_NEW_USER":return Object(D.a)(Object(D.a)({},e),{},{newUser:n.payload});default:return e}}}),Ne=Object(fe.c)(ye,Object(fe.a)(ve.a));window.store=Ne,c.a.render(Object(m.jsx)(ee.a,{children:Object(m.jsx)(H.a,{store:Ne,children:Object(m.jsx)(_e,{})})}),document.getElementById("root")),Oe()}},[[72,1,2]]]);
//# sourceMappingURL=main.c954eea0.chunk.js.map