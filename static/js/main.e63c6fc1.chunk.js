(this["webpackJsonpfriday-project"]=this["webpackJsonpfriday-project"]||[]).push([[0],{16:function(e,t,n){e.exports={loginPage:"Register_loginPage__3xiEa",wrapper:"Register_wrapper__3fFdv",inner:"Register_inner__35eRX",form:"Register_form__1wCvI",btn:"Register_btn__1F_93"}},18:function(e,t,n){e.exports={label:"SuperCheckbox_label__3Uw_d",checkbox:"SuperCheckbox_checkbox__g1cBY",spanClassName:"SuperCheckbox_spanClassName__2SSWM"}},19:function(e,t,n){e.exports={wrapper:"Input_wrapper__sgEY7",label:"Input_label__2TTl5",input__item:"Input_input__item__3jSC1",icon:"Input_icon__1E6-D"}},22:function(e,t,n){e.exports={superInput:"SuperInputText_superInput__1S5Pe",errorInput:"SuperInputText_errorInput__1pjFr",error:"SuperInputText_error__38li9"}},23:function(e,t,n){e.exports={default:"SuperButton_default__2VowH",red:"SuperButton_red__INs1p"}},27:function(e,t,n){e.exports={content:"App_content__INdBb"}},30:function(e,t,n){e.exports={navigationContainer:"Navigation_navigationContainer__3jxDD",linksList:"Navigation_linksList__2vRX6"}},39:function(e,t,n){e.exports={contentContainer:"Content_contentContainer__3_tBf"}},40:function(e,t,n){e.exports={btn:"Button_btn__3YXc9"}},41:function(e,t,n){e.exports={logo:"Logo_logo__2s_vA"}},42:function(e,t,n){e.exports={title:"TitleH2_title__1oyIA"}},43:function(e,t,n){e.exports={headerContainer:"Header_headerContainer__unZf7"}},49:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(20),s=n.n(r),o=(n(49),n(27)),i=n.n(o),l=n(3),u=n(39),j=n.n(u),b="/",d="/login",p="/registration",h="/404",x="/recover",O="/newPassword",f="/presentation",g=n(0),m=function(){return Object(g.jsx)("div",{children:"Profile"})},_=function(){return Object(g.jsx)("div",{children:"NotFound"})},v=n(11),C=n(4),w=n(14),N=n.n(w),y=N.a.create({withCredentials:!0,baseURL:"http://localhost:7542/2.0/"}),S=function(e){return y.post("auth/forgot",{email:e,from:"shamashov87@mail.ru",message:"<div>password recover link: <a href='http://localhost:3000/#/set-new-password/$token$'>Link</a></div>"})},k={isFetching:!1},I=function(e){return{type:"IS-FETCHING",isFetching:e}},T=n(12),E=function(){var e=Object(a.useState)(""),t=Object(v.a)(e,2),n=t[0],c=t[1],r=Object(T.b)();return Object(g.jsxs)("div",{children:[Object(g.jsx)("input",{type:"email",placeholder:"Enter email",onChange:function(e){c(e.currentTarget.value)},value:n}),Object(g.jsx)("button",{onClick:function(){r(function(e){return function(t){t(I(!0)),S(e).then((function(e){console.log(e.data),t(I(!1))})).catch((function(e){var t=e.response?e.response.data.error:e.message+", more details in the console";console.log(t)}))}}(n))},children:"Send"})]})},P=function(){return Object(g.jsx)("div",{children:"New Password"})},R=n(15),F=n(22),L=n.n(F),B=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,c=e.onEnter,r=e.error,s=e.className,o=e.spanClassName,i=Object(R.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),l="".concat(L.a.error," ").concat(o||""),u="".concat(r?L.a.errorInput:L.a.superInput," ").concat(s);return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("input",Object(C.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),"Enter"===e.key&&c&&c()},className:u},i)),r&&Object(g.jsx)("span",{className:l,children:r})]})},U=n(23),A=n.n(U),D=function(e){var t=e.red,n=e.className,a=Object(R.a)(e,["red","className"]),c="".concat(t?"".concat(A.a.default," ").concat(A.a.red):A.a.default," ").concat(n);return Object(g.jsx)("button",Object(C.a)({className:c},a))},H=n(18),G=n.n(H),K=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,c=(e.spanClassName,e.children),r=Object(R.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(G.a.checkbox," ").concat(a||"");return Object(g.jsxs)("label",{className:G.a.label,children:[Object(g.jsx)("input",Object(C.a)({type:"checkbox",onChange:function(e){n&&n(e.currentTarget.checked),t&&t(e)},className:s},r)),c?Object(g.jsx)("span",{className:G.a.spanClassName,children:c}):Object(g.jsx)("span",{className:G.a.spanClassName})]})},M=function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)(B,{}),Object(g.jsx)(D,{}),Object(g.jsx)(K,{})]})},W=N.a.create({withCredentials:!0,baseURL:"http://localhost:7542/2.0/"}),X=function(e,t,n){return W.post("auth/login",{email:e,password:t,rememberMe:n})},Y={user:{}},J=function(){var e=Object(T.b)(),t=Object(a.useState)(""),n=Object(v.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(""),o=Object(v.a)(s,2),i=o[0],l=o[1],u=Object(a.useState)(!1),j=Object(v.a)(u,2),b=j[0],d=j[1];return Object(g.jsxs)("div",{children:[Object(g.jsx)("h4",{children:"SIGN IN"}),Object(g.jsx)(B,{type:"email",placeholder:"Enter email",onChange:function(e){r(e.currentTarget.value)}}),Object(g.jsx)(B,{type:"password",placeholder:"Password",onChange:function(e){l(e.currentTarget.value)}}),Object(g.jsx)(K,{type:"checkbox",onChange:function(e){d(e.currentTarget.checked)},children:"Remember me"}),Object(g.jsx)(D,{onClick:function(){e(function(e,t,n){return function(a){X(e,t,n).then((function(e){console.log(e.data),a({type:"SET_USER_DATA",payload:e.data})})).catch((function(e){var t=e.response?e.response.data.error:e.message+", more details in the console";console.log(t)}))}}(c,i,b))},children:"Login"})]})},$=n(16),V=n.n($),Z=n(19),q=n.n(Z),z=n.p+"static/media/eye.109a1739.svg",Q=function(e){return Object(g.jsxs)("form",{className:q.a.wrapper,style:e.style,children:[Object(g.jsx)("label",{className:q.a.label,children:e.title}),Object(g.jsx)("input",{className:q.a.input__item,type:e.type,name:e.name,placeholder:e.placeholder,value:e.value,onChange:function(t){e.onChange(t.currentTarget.value)}}),Object(g.jsx)("img",{src:z,className:q.a.icon})]})},ee=n(40),te=n.n(ee),ne=function(e){return Object(g.jsx)("button",{className:te.a.btn,style:e.style,onClick:e.onClick,children:e.value})},ae=n(41),ce=n.n(ae),re=function(e){return Object(g.jsx)("a",{className:ce.a.logo,style:e.style,href:"#",children:"It-incubator"})},se=n(42),oe=n.n(se),ie=function(e){return Object(g.jsx)("h2",{className:oe.a.title,style:e.style,children:"Sign In"})},le=function(e){return Object(g.jsx)("div",{className:V.a.loginPage,children:Object(g.jsx)("div",{className:V.a.wrapper,children:Object(g.jsxs)("div",{className:V.a.inner,children:[Object(g.jsx)(re,{}),Object(g.jsx)(ie,{}),Object(g.jsxs)("div",{className:V.a.form,children:[Object(g.jsx)(Q,{title:"Email",type:"email",name:"email",value:e.email,onChange:function(t){e.onEmailChange(t)}})," ",Object(g.jsx)(Q,{title:"Password",type:"password",name:"password",value:e.password,onChange:function(t){e.onPasswordChange(t)},style:{marginTop:"25px"}}),Object(g.jsx)(Q,{title:"Confirm password",type:"password",name:"Confirm password",value:e.passwordConfirm,onChange:function(t){e.onPasswordConfirmChange(t)},style:{marginTop:"25px"}})]}),Object(g.jsxs)("form",{className:V.a.btn,children:[Object(g.jsx)(ne,{value:"Cancel",onClick:e.cancelClick,style:{width:"124px",backgroundColor:"#CDCEF4",color:"#21268F",marginRight:"36px"}}),Object(g.jsx)(ne,{value:"Register",onClick:e.registrationButtonClock,style:{width:"187px"}})]})]})})})},ue=N.a.create({withCredentials:!0,baseURL:"http://localhost:7542/2.0/"}),je=function(e,t){return ue.post("auth/register",{email:e,password:t})},be={newUser:{}},de=function(){var e=Object(T.b)(),t=Object(a.useState)(""),n=Object(v.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(""),o=Object(v.a)(s,2),i=o[0],l=o[1],u=Object(a.useState)(""),j=Object(v.a)(u,2),b=j[0],d=j[1];return Object(g.jsx)(le,{email:c,password:i,passwordConfirm:b,onEmailChange:function(e){r(e)},onPasswordChange:function(e){l(e)},onPasswordConfirmChange:function(e){d(e)},registrationButtonClock:function(){i===b&&(e(function(e,t){return function(n){je(e,t).then((function(e){console.log(e.data),n({type:"SET_NEW_USER",payload:e.data})})).catch((function(e){var t=e.response?e.response.data.error:e.message+", more details in the console";console.log(t)}))}}(c,i)),r(""),l(""),d(""))},cancelClick:function(){r(""),l(""),d("")}})},pe=function(){return Object(g.jsx)("div",{className:j.a.contentContainer,children:Object(g.jsxs)(l.d,{children:[Object(g.jsx)(l.b,{path:"/",exact:!0,render:function(){return Object(g.jsx)(l.a,{to:d})}}),Object(g.jsx)(l.b,{exact:!0,path:d,render:function(){return Object(g.jsx)(J,{})}}),Object(g.jsx)(l.b,{exact:!0,path:p,render:function(){return Object(g.jsx)(de,{})}}),Object(g.jsx)(l.b,{exact:!0,path:b,render:function(){return Object(g.jsx)(m,{})}}),Object(g.jsx)(l.b,{exact:!0,path:x,render:function(){return Object(g.jsx)(E,{})}}),Object(g.jsx)(l.b,{exact:!0,path:O,render:function(){return Object(g.jsx)(P,{})}}),Object(g.jsx)(l.b,{exact:!0,path:f,render:function(){return Object(g.jsx)(M,{})}}),Object(g.jsx)(l.b,{render:function(){return Object(g.jsx)(_,{})}})]})})},he=n(43),xe=n.n(he),Oe=function(){return Object(g.jsx)("div",{className:xe.a.headerContainer,children:Object(g.jsx)("button",{children:"Login"})})},fe=n(10),ge=n(30),me=n.n(ge),_e=function(){return Object(g.jsxs)("div",{className:me.a.navigationContainer,children:[Object(g.jsx)("h2",{children:"Navigation"}),Object(g.jsxs)("div",{className:me.a.linksList,children:[Object(g.jsx)(fe.b,{to:d,children:"Login"}),Object(g.jsx)(fe.b,{to:p,children:"Registration"}),Object(g.jsx)(fe.b,{to:b,children:"Profile"}),Object(g.jsx)(fe.b,{to:h,children:"404"}),Object(g.jsx)(fe.b,{to:x,children:"Password Recover"}),Object(g.jsx)(fe.b,{to:O,children:"New Password"}),Object(g.jsx)(fe.b,{to:f,children:"Presentation"})]})]})};var ve=function(){return Object(g.jsxs)("div",{className:i.a.app,children:[Object(g.jsx)(Oe,{}),Object(g.jsx)(_e,{}),Object(g.jsx)(pe,{}),Object(g.jsx)("div",{className:i.a.content})]})},Ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,75)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))},we=n(24),Ne=n(44),ye={},Se={},ke={},Ie=Object(we.b)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;return t.type,e},login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":return Object(C.a)(Object(C.a)({},e),{},{user:t.payload});default:return e}},newPassword:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;return t.type,e},passwordRecover:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"IS-FETCHING":return Object(C.a)(Object(C.a)({},e),{},{isFetching:t.isFetching});default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;return t.type,e},registration:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_NEW_USER":return Object(C.a)(Object(C.a)({},e),{},{newUser:t.payload});default:return e}}}),Te=Object(we.c)(Ie,Object(we.a)(Ne.a));window.store=Te,s.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(T.a,{store:Te,children:Object(g.jsx)(fe.a,{children:Object(g.jsx)(ve,{})})})}),document.getElementById("root")),Ce()}},[[74,1,2]]]);
//# sourceMappingURL=main.e63c6fc1.chunk.js.map