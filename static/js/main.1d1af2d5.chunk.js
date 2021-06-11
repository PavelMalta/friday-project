(this["webpackJsonpfriday-project"]=this["webpackJsonpfriday-project"]||[]).push([[0],{106:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(28),s=n.n(r),i=(n(81),n(52)),o=n.n(i),l=n(9),d=n(66),u=n.n(d),j="/",b="/login",p="/registration",h="/404",O="/recover",g="/newPassword/:token",x="/presentation",f="/packs",_="/cards",m=n(1),w=function(){return Object(m.jsx)("div",{children:"Profile"})},v=function(){return Object(m.jsx)("div",{children:"Presentation"})},k=n(8),C=n(38),P=n.n(C),N=n(30),E=n.n(N),y=function(e){return Object(m.jsxs)("form",{className:E.a.wrapper,style:e.style,children:[Object(m.jsx)("label",{className:E.a.label,children:e.title}),Object(m.jsx)("input",{className:E.a.input__item,type:e.type,name:e.name,placeholder:e.placeholder,value:e.value,onChange:function(t){e.onChange&&e.onChange(t.currentTarget.value)},id:e.idName}),Object(m.jsx)("div",{className:E.a.checkbox,children:Object(m.jsx)("div",{children:"inputPassword"===e.idName?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("input",{className:E.a.checkboxInput,type:"checkbox",onChange:function(){e.changeVision&&e.changeVision()},id:e.id}),Object(m.jsx)("label",{className:E.a.checkboxLable,htmlFor:e.htmlFor})]}):null})}),Object(m.jsx)("span",{className:E.a.span,children:null!==e.error?Object(m.jsx)("span",{children:e.error}):null})]})},S=n(67),L=n.n(S),T=function(e){return Object(m.jsx)("button",{className:L.a.btn,style:e.style,onClick:function(){e.onClick()},children:e.value})},R=n(68),I=n.n(R),F=function(e){return Object(m.jsx)("a",{className:I.a.logo,style:e.style,href:"#",children:"It-incubator"})},D=n(69),A=n.n(D),U=function(e){return Object(m.jsx)("h2",{className:A.a.title,style:e.style,children:e.value})},H=function(e){var t=Object(a.useState)("password"),n=Object(k.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)("password"),i=Object(k.a)(s,2),o=i[0],l=i[1];return Object(m.jsx)("div",{className:P.a.loginPage,children:Object(m.jsx)("div",{className:P.a.wrapper,children:Object(m.jsxs)("div",{className:P.a.inner,children:[Object(m.jsx)(F,{}),Object(m.jsx)(U,{}),Object(m.jsxs)("div",{className:P.a.form,children:[Object(m.jsx)(y,{title:"Email",type:"email",name:"email",value:e.email,error:e.emailError,onChange:function(t){e.onEmailChange(t)}})," ",Object(m.jsx)(y,{title:"Password",type:c,name:"password",id:"checkbox2",htmlFor:"checkbox2",value:e.password,error:e.passwordError,onChange:function(t){e.onPasswordChange(t)},changeVision:function(){r("text"===c?"password":"text")},idName:"inputPassword",style:{marginTop:"25px"}}),Object(m.jsx)(y,{title:"Confirm password",type:o,name:"Confirm password",idName:"inputPassword",id:"checkbox",htmlFor:"checkbox",error:e.passwordError,value:e.passwordConfirm,onChange:function(t){e.onPasswordConfirmChange(t)},changeVision:function(){l("text"===o?"password":"text")},style:{marginTop:"25px"}})]}),Object(m.jsxs)("form",{className:P.a.btn,children:[Object(m.jsx)(T,{value:"Cancel",onClick:e.cancelClick,style:{width:"124px",backgroundColor:"#CDCEF4",color:"#21268F",marginRight:"36px"}}),Object(m.jsx)(T,{value:"Registration",onClick:e.registrationButtonClick,style:{width:"187px"}})]})]})})})},G=n(4),B=n(3),q=n(20),M=n.n(q),W=M.a.create({withCredentials:!0,baseURL:"https://neko-back.herokuapp.com/2.0/"}),V=function(e,t){return W.post("auth/register",{email:e,password:t})},Z=M.a.create({withCredentials:!0,baseURL:"https://neko-back.herokuapp.com/2.0/"}),K=function(){return Z.post("auth/me")},z=function(e,t,n){return Z.post("auth/login",{email:e,password:t,rememberMe:n})},J=function(){return Z.delete("auth/me")},Q={user:{},isFetching:!1,emailError:null,passwordError:null,isAuth:!1,userID:""},Y=function(e){return{type:"SET_USER_DATA",payload:e}},$=function(e){return{type:"IS-FETCHING",isFetching:e}},X=function(e){return{type:"SET-EMAIL-ERROR",error:e}},ee=function(e){return{type:"SET-PASSWORD-ERROR",error:e}},te=function(e){return{type:"SET-USER-ID",userID:e}},ne={newUser:{},emailError:null,passwordError:null},ae=function(e){return{type:"SET-EMAIL-ERROR",error:e}},ce=function(e){return{type:"SET-PASSWORD-ERROR",error:e}},re=function(){var e=Object(G.c)((function(e){return e.login.isFetching})),t=Object(G.c)((function(e){return e.login.isAuth})),n=Object(G.c)((function(e){return e.registration.emailError})),c=Object(G.c)((function(e){return e.registration.passwordError})),r=Object(G.b)(),s=Object(a.useState)("nya-admin@nya.nya"),i=Object(k.a)(s,2),o=i[0],d=i[1],u=Object(a.useState)("1qazxcvBG"),j=Object(k.a)(u,2),b=j[0],p=j[1],h=Object(a.useState)("1qazxcvBG"),O=Object(k.a)(h,2),g=O[0],x=O[1];return e?Object(m.jsx)("div",{children:"Loading..."}):t?Object(m.jsx)(l.a,{to:"/profile"}):Object(m.jsx)(H,{email:o,password:b,emailError:n,passwordError:c,passwordConfirm:g,onEmailChange:function(e){d(e),null!==n&&r(ae(null))},onPasswordChange:function(e){p(e),null!==c&&r(ce(null))},onPasswordConfirmChange:function(e){x(e),null!==c&&r(ce(null))},registrationButtonClick:function(){""===o?r(ae("Required")):""===b?r(ce("Required")):/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(o)?b.length<8?r(ce("Password must be more 7 symbols")):b!==g?(r(ce("Password & confirm password fields are not equally")),p(""),x("")):r(function(e,t){return function(n){n($(!0)),V(e,t).then((function(e){console.log(e.data),n({type:"SET_NEW_USER",payload:e.data})})).catch((function(e){var t=e.response?e.response.data.error:e.message+", more details in the console";n(ae(t))})).finally((function(){n($(!1))}))}}(o,b)):r(ae("Invalid email address"))},cancelClick:function(){d(""),p(""),x("")}})},se=n(16),ie=n.n(se),oe=n(6),le=function(e){var t=Object(a.useState)("password"),n=Object(k.a)(t,2),c=n[0],r=n[1];return Object(m.jsx)("div",{className:ie.a.loginPage,children:Object(m.jsx)("div",{className:ie.a.wrapper,children:Object(m.jsxs)("div",{className:ie.a.inner,children:[Object(m.jsx)(F,{}),Object(m.jsx)(U,{value:"Sign In"}),Object(m.jsxs)("div",{className:ie.a.form,children:[Object(m.jsx)(y,{title:"Email",type:"email",name:"email",error:e.emailError,placeholder:"email",value:e.email,onChange:function(t){e.onChangeEmail(t)},style:{marginTop:"25px"},idName:"inputEmail"}),Object(m.jsx)(y,{title:"Password",type:c,name:"password",error:e.passwordError,placeholder:"password",value:e.password,onChange:function(t){e.onChangePassword(t)},style:{marginTop:"25px"},idName:"inputPassword",id:"checkbox2",htmlFor:"checkbox2",changeVision:function(){r("text"===c?"password":"text")}})]}),Object(m.jsxs)("div",{className:ie.a.wrap,children:[Object(m.jsxs)("div",{className:ie.a.checkbox,children:[Object(m.jsx)("input",{className:ie.a.checkboxInput,type:"checkbox",id:"checkbox1"}),Object(m.jsx)("label",{className:ie.a.checkboxLable,htmlFor:"checkbox1",children:"Rememder me"})]}),Object(m.jsx)(oe.b,{className:ie.a.linkPassword,to:O,children:"Forgot Password"})]}),Object(m.jsx)("div",{className:ie.a.btn,children:Object(m.jsx)(T,{value:"Login",onClick:e.onclickHandler})}),Object(m.jsxs)("div",{className:ie.a.singUp,children:[Object(m.jsx)("label",{className:ie.a.span,children:"Don\u2019t have an account?"}),Object(m.jsx)(oe.b,{className:ie.a.linkSingUp,to:p,children:"Sign Up"})]})]})})})},de=function(){var e=Object(G.c)((function(e){return e.login.isFetching})),t=Object(G.c)((function(e){return e.login.emailError})),n=Object(G.c)((function(e){return e.login.passwordError})),c=Object(G.c)((function(e){return e.login.isAuth})),r=Object(G.b)(),s=Object(a.useState)("nya-admin@nya.nya"),i=Object(k.a)(s,2),o=i[0],d=i[1],u=Object(a.useState)("1qazxcvBG"),j=Object(k.a)(u,2),b=j[0],p=j[1],h=Object(a.useState)(!1),O=Object(k.a)(h,2),g=O[0],x=O[1];return e?Object(m.jsx)("div",{children:"Loading..."}):c?Object(m.jsx)(l.a,{to:"/packs"}):Object(m.jsx)(le,{email:o,emailError:t,passwordError:n,password:b,rememberMe:g,onclickHandler:function(){""===o?r(X("Required")):""===b?r(ee("Required")):/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(o)?b.length<8?r(ee("Password must be more 7 symbols")):(r(function(e,t,n){return function(a){a($(!0)),z(e,t,n).then((function(e){console.log(e.data),a(Y(e.data)),a(te(e.data._id))})).catch((function(e){var t=e.response?e.response.data.error:e.message+", more details in the console";console.log(t),a(X(t))})).finally((function(){a($(!1))}))}}(o,b,g)),d(""),p(""),x(!1)):r(X("Invalid email address"))},onChangeEmail:function(e){d(e),null!==t&&r(X(null))},onChangePassword:function(e){p(e),null!==n&&r(ee(null))},onChangeRememberMe:function(e){x(!e)}})},ue=M.a.create({withCredentials:!0,baseURL:"https://neko-back.herokuapp.com/2.0"}),je=function(e){return ue.post("auth/forgot",{email:e,from:"shamashov87@mail.ru",message:"<div>password recover link: <a href='https://pavelmalta.github.io/friday-project/#/newPassword/$token$'>Link</a></div>"})},be={isFetching:!1,error:null},pe=function(e){return{type:"IS-FETCHING",isFetching:e}},he=function(e){return{type:"SET-ERROR",error:e}},Oe=n(25),ge=n.n(Oe),xe=function(e){return Object(m.jsx)("div",{className:ge.a.forgotPassword,children:Object(m.jsx)("div",{className:ge.a.wrapper,children:Object(m.jsxs)("div",{className:ge.a.inner,children:[Object(m.jsx)(F,{}),Object(m.jsx)(U,{value:"Sign In"}),Object(m.jsxs)("div",{className:ge.a.form,children:[Object(m.jsx)(y,{title:"Email",type:"email",name:"email",value:e.email,onChange:e.onChangeEmail,error:e.error})," "]}),Object(m.jsx)("span",{className:ge.a.text,children:"Enter your email address and we will send you further instructions "}),Object(m.jsx)("div",{className:ge.a.btn,children:e.isFetching?Object(m.jsx)("span",{children:"Loading..."}):Object(m.jsx)(T,{value:"Send Instructions",onClick:e.onclickHandler})}),Object(m.jsxs)("div",{className:ge.a.singUp,children:[Object(m.jsx)("a",{className:ge.a.link,href:"#",children:"Did you remember your password?"}),Object(m.jsx)("a",{className:ge.a.linkSingUp,href:"#",children:"Try logging in"})]})]})})})},fe=function(){var e=Object(a.useState)("shamashov87@mail.ru"),t=Object(k.a)(e,2),n=t[0],c=t[1],r=Object(G.c)((function(e){return e.passwordRecover.isFetching})),s=Object(G.c)((function(e){return e.passwordRecover.error})),i=Object(G.b)();return Object(m.jsx)(xe,{email:n,error:s,onChangeEmail:function(e){c(e),null!==s&&i(he(null))},onclickHandler:function(){""===n?i(he("Required")):/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(n)?(i(function(e){return function(t){t(pe(!0)),je(e).then((function(e){console.log(e.data)})).catch((function(e){var n=e.response?e.response.data.error:e.message+", more details in the console";t(he(n))})).finally((function(){t(pe(!1))}))}}(n)),c("")):i(he("Invalid email address"))},isFetching:r})},_e=M.a.create({withCredentials:!0,baseURL:"https://neko-back.herokuapp.com/2.0/"}),me=function(e){return _e.get("cards/pack",{params:e})},we=function(e){return _e.post("cards/pack",{cardsPack:e})},ve=function(e){return _e.delete("cards/pack?id=".concat(e))},ke=function(e){return _e.put("cards/pack",{cardsPack:e})},Ce={packsTableData:{cardPacks:[],cardPacksTotalCount:0,maxCardsCount:0,minCardsCount:0,page:1,pageCount:0},isFetching:!1},Pe=function(e){return{type:"GET-PACKS",packsTableData:e}},Ne=function(e){return{type:"IS-FETCHING",isFetching:e}},Ee=function(e){return function(t){t(Ne(!0)),me(e).then((function(e){t(Pe(e.data))})).catch((function(e){})).finally((function(){t(Ne(!1))}))}},ye=M.a.create({withCredentials:!0,baseURL:"https://neko-back.herokuapp.com/2.0/"}),Se=function(e){return ye.get("cards/card",{params:e})},Le=function(e){return ye.post("cards/card",{card:e})},Te=function(e){return ye.delete("cards/card/?id=".concat(e))},Re=function(e){return ye.put("cards/card",{card:e})},Ie={cardsTableData:{cards:[],cardsTotalCount:0,maxGrade:0,minGrade:0,page:0,pageCount:0},isFetching:!1,cardsPackId:"",packName:""},Fe=function(e){return{type:"IS-FETCHING",isFetching:e}},De=function(e){return function(t){t(Fe(!0)),Se(e).then((function(e){t({type:"GET-CARDS",cardsTableData:e.data})})).catch((function(e){})).finally((function(){t(Fe(!1))}))}},Ae=n(39),Ue=n.n(Ae),He=function(e){return Object(m.jsxs)("div",{className:Ue.a.dropdown,children:[Object(m.jsx)("span",{className:Ue.a.text,children:"Show"}),Object(m.jsx)("div",{className:Ue.a.dropdownSelect,children:Object(m.jsxs)("select",{className:Ue.a.item,onChange:function(t){e.onChangeOption(t.target.value)},children:[Object(m.jsx)("option",{value:"5",children:"5"}),Object(m.jsx)("option",{value:"10",children:"10"}),Object(m.jsx)("option",{value:"25",children:"25"}),Object(m.jsx)("option",{value:"50",children:"50"}),Object(m.jsx)("option",{value:"100",children:"100"})]})}),Object(m.jsx)("span",{className:Ue.a.text,children:"Cards per Page"})]})},Ge=n(125),Be=n(131),qe=n(127),Me=Object(Ge.a)((function(e){return Object(Be.a)({root:{"& > *":{}}})}));function We(e){var t=Me(),n=Math.ceil(e.totalCount/e.pageCount);return Object(m.jsx)("div",{className:t.root,children:Object(m.jsx)(qe.a,{count:n,shape:"rounded",onChange:function(t,n){e.onChangePage(n)},page:e.page})})}var Ve=n(129),Ze=Object(Ge.a)({root:{width:196},rail:{backgroundColor:"#919DC8",height:5},track:{backgroundColor:"#21268F",height:5},thumb:{width:16,height:16,boxSizing:"border-box",border:"4px solid #21268F",backgroundColor:"#fff"}});function Ke(e){return"".concat(e,"\xb0C")}function ze(){var e=Ze(),t=c.a.useState([20,37]),n=Object(k.a)(t,2),a=n[0],r=n[1];return Object(m.jsx)(Ve.a,{value:a,onChange:function(e,t){r(t)},valueLabelDisplay:"auto","aria-labelledby":"range-slider",getAriaValueText:Ke,classes:e})}var Je=n(55),Qe=n.n(Je),Ye=function(e){return Object(m.jsx)("form",{className:Qe.a.search,style:e.style,children:Object(m.jsx)("input",{className:Qe.a.input,type:"text",placeholder:"Search..."})})},$e=n(48),Xe=n.n($e),et=function(){return Object(m.jsxs)("div",{className:Xe.a.sideButton,children:[Object(m.jsx)("button",{className:Xe.a.btnActive,children:"My"}),Object(m.jsx)("button",{className:Xe.a.btn,children:"All"})]})},tt=n(72),nt=n.n(tt),at=function(e){return Object(m.jsx)("button",{className:nt.a.btn,style:e.style,onClick:function(){e.onClick()},children:e.value})},ct=function(e){var t=function(){e.learnPack(e.packId,e.value1)};return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:e.value1}),Object(m.jsx)("td",{children:e.value2}),Object(m.jsx)("td",{children:e.value3}),Object(m.jsx)("td",{children:e.value4}),e.packUserId===e.userId?Object(m.jsxs)("td",{children:[Object(m.jsx)(at,{value:"Delete",style:{backgroundColor:"#F1453D",color:"#fff"},onClick:function(){e.deletePack(e.packId)}}),Object(m.jsx)(at,{value:"Edit",onClick:function(){e.updatePack(e.packId,"Update successful")}}),Object(m.jsx)(oe.b,{to:"/cards/".concat(e.packId),children:Object(m.jsx)(at,{value:"Learn",onClick:t})})]}):Object(m.jsx)("td",{children:Object(m.jsx)(oe.b,{to:"/cards/".concat(e.packId),children:Object(m.jsx)(at,{value:"Learn",onClick:t})})})]})},rt=n(15),st=n.n(rt),it=n(128),ot=function(e){var t=Object(G.c)((function(e){return e.packs.packsTableData}));return Object(m.jsxs)("div",{className:st.a.packsList,children:[Object(m.jsxs)("aside",{className:st.a.aside,children:[Object(m.jsx)("h3",{className:st.a.titleH3,children:"Show packs cards"}),Object(m.jsx)(et,{}),Object(m.jsx)("h3",{className:st.a.titleH3,children:"Number of cards"}),Object(m.jsx)("div",{className:st.a.rangeSlider,children:Object(m.jsx)(ze,{})})]}),Object(m.jsxs)("div",{className:st.a.content,children:[Object(m.jsx)(U,{value:"Packs list",style:{textAlign:"start",padding:"24px 0 15px 0"}}),Object(m.jsxs)("div",{className:st.a.form,children:[Object(m.jsx)(Ye,{}),Object(m.jsx)(T,{value:"Add new pack",style:{width:"184px",marginLeft:"24px"},onClick:e.addNewPack})]}),Object(m.jsx)("div",{className:st.a.wrap,children:Object(m.jsxs)("table",{children:[Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{className:st.a.item1,children:"Name"}),Object(m.jsx)("th",{className:st.a.item2,children:"Cards"}),Object(m.jsx)("th",{className:st.a.item3,children:"Last Updated"}),Object(m.jsx)("th",{className:st.a.item4,children:"Created by"}),Object(m.jsx)("th",{className:st.a.item5,children:"Actions"})]}),t.cardPacks.map((function(t){return Object(m.jsx)(ct,{value1:t.name,value2:t.cardsCount,value3:(n=t.updated,new Date(n).toLocaleDateString("ru",{day:"2-digit",month:"2-digit",year:"numeric"})),value4:t.user_name,packUserId:t.user_id,userId:e.userID,packId:t._id,deletePack:e.deletePack,updatePack:e.updatePack,learnPack:e.learnPack},Object(it.a)());var n}))]})}),Object(m.jsxs)("div",{className:st.a.pagination,children:[Object(m.jsx)(We,{totalCount:t.cardPacksTotalCount,pageCount:t.pageCount,page:t.page,onChangePage:e.onChangePage}),Object(m.jsx)(He,{options:[5,10,25,50,100],value:e.value,onChangeOption:e.onChangeOption})]})]})]})},lt=function(){var e=Object(a.useState)(10),t=Object(k.a)(e,2),n=t[0],c=t[1],r=Object(G.c)((function(e){return e.login.userID})),s=Object(G.c)((function(e){return e.login.isAuth})),i=Object(G.c)((function(e){return e.packs.packsTableData})),o=Object(G.b)();Object(a.useEffect)((function(){var e;o((e={pageCount:n,page:i.page},function(t){t(Ne(!0)),K().then((function(n){t(Y(n.data)),t(te(n.data._id)),me(e).then((function(e){t(Pe(e.data))})).catch((function(e){}))})).finally((function(){t(Ne(!1))}))}))}),[o,n]);return s?Object(m.jsx)("div",{children:Object(m.jsx)(ot,{userID:r,addNewPack:function(){var e,t;o((e={name:"Y menia polychilos"},t={pageCount:n},function(n){n(Ne(!0)),we(e).then((function(){n(Ee(t))})).finally((function(){n(Ne(!1))}))}))},deletePack:function(e){var t,a;o((t=e,a={pageCount:n,page:i.page},function(e){e(Ne(!0)),ve(t).then((function(){e(Ee(a))})).finally((function(){e(Ne(!1))}))}))},updatePack:function(e,t){var a,c;o((a={_id:e,name:t},c={pageCount:n,page:i.page},function(e){e(Ne(!0)),ke(a).then((function(){e(Ee(c))})).finally((function(){e(Ne(!1))}))}))},learnPack:function(e,t){o({type:"SET-CARDS-PACK-ID",cardsPackId:e}),o(function(e){return{type:"SET-PACK-NAME",packName:e}}(t))},onChangePage:function(e){o(Ee({pageCount:n,page:e}))},value:n,onChangeOption:function(e){c(e)}})}):Object(m.jsx)(l.a,{to:"/login"})},dt=n(22),ut=n.n(dt),jt=n.p+"static/media/back.54207b29.svg",bt=n(130),pt=Object(Ge.a)((function(e){return Object(Be.a)({root:{color:"#21268F"}})}));function ht(e){var t=pt();return Object(m.jsx)("div",{children:Object(m.jsx)(bt.a,{name:"half-rating",defaultValue:e.rating,precision:.5,size:"small",classes:t})})}var Ot=function(e){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:e.value1}),Object(m.jsx)("td",{children:e.value2}),Object(m.jsx)("td",{children:e.value3}),Object(m.jsx)("td",{children:Object(m.jsx)(ht,{})})]})},gt=function(e){var t=Object(G.c)((function(e){return e.cards}));return Object(m.jsx)("div",{className:ut.a.packName,children:Object(m.jsxs)("div",{className:ut.a.content,children:[Object(m.jsxs)("button",{className:ut.a.back,children:[Object(m.jsx)(oe.b,{to:"/packs",children:Object(m.jsx)("img",{className:ut.a.icon,src:jt,alt:"icon"})}),Object(m.jsx)(U,{value:t.packName,style:{textAlign:"left",paddingTop:"0"}})]}),Object(m.jsx)("div",{className:ut.a.search,children:Object(m.jsx)(Ye,{style:{width:"100%"}})}),Object(m.jsx)("div",{className:ut.a.wrap,children:Object(m.jsxs)("table",{children:[Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{className:ut.a.item1,children:"Question"}),Object(m.jsx)("th",{className:ut.a.item2,children:"Answer"}),Object(m.jsx)("th",{className:ut.a.item3,children:"Last Updated"}),Object(m.jsx)("th",{className:ut.a.item4,children:"Grade"})]}),t.cardsTableData.cards.map((function(e){return Object(m.jsx)(Ot,{value1:e.question,value2:e.answer,value3:(t=e.updated,new Date(t).toLocaleDateString("ru",{day:"2-digit",month:"2-digit",year:"numeric"})),rating:e.rating},Object(it.a)());var t}))]})}),Object(m.jsxs)("div",{className:ut.a.pagination,children:[Object(m.jsx)(We,{totalCount:t.cardsTableData.cardsTotalCount,pageCount:t.cardsTableData.pageCount,page:t.cardsTableData.page,onChangePage:e.onChangePage}),Object(m.jsx)(He,{options:[5,10,25,50,100],value:e.value,onChangeOption:e.onChangeOption})]})]})})},xt=function(){var e=Object(a.useState)(10),t=Object(k.a)(e,2),n=t[0],c=t[1],r=Object(G.c)((function(e){return e.login.userID})),s=Object(G.c)((function(e){return e.cards.cardsPackId})),i=Object(G.c)((function(e){return e.login.isAuth})),o=Object(G.b)();Object(a.useEffect)((function(){o(De({cardsPack_id:s,pageCount:n}))}),[o,n]);var d={cardsPack_id:s,question:"Who is she?",answer:"She is pokemoniha"};return i?Object(m.jsxs)("div",{children:[Object(m.jsx)("button",{onClick:function(){o(function(e,t){return function(n){n(Fe(!0)),Le(e).then((function(e){n(De(t))})).finally((function(){n(Fe(!1))}))}}(d,{cardsPack_id:s,pageCount:100}))},children:"Add cards"}),Object(m.jsx)(gt,{userID:r,deleteCard:function(e){o(function(e,t){return function(n){n(Fe(!0)),Te(e).then((function(e){n(De(t))})).finally((function(){n(Fe(!1))}))}}(e,{cardsPack_id:s,pageCount:100}))},updateCard:function(e){o(function(e,t){return function(n){n(Fe(!0)),Re(e).then((function(e){n(De(t))})).finally((function(){n(Fe(!1))}))}}({_id:e,question:"What?"},{cardsPack_id:s,pageCount:100}))},onChangePage:function(e){o(De({cardsPack_id:s,pageCount:n,page:e}))},value:n,onChangeOption:function(e){c(e)}})]}):Object(m.jsx)(l.a,{to:"/login"})},ft=n(44),_t=n.n(ft),mt=function(){return Object(m.jsx)("div",{className:_t.a.error,children:Object(m.jsxs)("div",{className:_t.a.wrapper,children:[Object(m.jsx)("span",{className:_t.a.text,children:"The page were looking for doesn\u2019t exist"}),Object(m.jsx)("button",{className:_t.a.btn,children:"GO BACK"})]})})},wt=M.a.create({withCredentials:!0,baseURL:"https://neko-back.herokuapp.com/2.0"}),vt=function(e,t){return wt.post("auth/set-new-password",{password:e,resetPasswordToken:t})},kt={resetPassword:null,isFetching:!1,error:null,success:!1},Ct=function(e){return{type:"IS-FETCHING",isFetching:e}},Pt=n(26),Nt=n.n(Pt),Et=function(){var e=Object(l.g)().token,t=Object(a.useState)(""),n=Object(k.a)(t,2),c=n[0],r=n[1],s=Object(G.c)((function(e){return e.newPassword.isFetching})),i=Object(G.c)((function(e){return e.newPassword.error})),o=Object(G.c)((function(e){return e.newPassword.success})),d=Object(G.b)();return s?Object(m.jsx)("div",{children:"Loading..."}):o?Object(m.jsx)("div",{children:Object(m.jsx)(l.a,{to:"/login"})}):Object(m.jsx)("div",{className:Nt.a.newPassword,children:Object(m.jsx)("div",{className:Nt.a.wrapper,children:Object(m.jsxs)("div",{className:Nt.a.inner,children:[Object(m.jsx)(F,{}),Object(m.jsx)(U,{value:"Create new password"}),Object(m.jsxs)("div",{className:Nt.a.form,children:[Object(m.jsx)(y,{title:"New password",type:"password",name:"password",value:c,onChange:function(e){r(e),null!==i&&d(he(null))},error:i})," "]}),Object(m.jsx)("span",{className:Nt.a.text,children:"Create new password and we will send you further instructions to email "}),Object(m.jsx)("div",{className:Nt.a.btn,children:s?Object(m.jsx)("span",{children:"Loading..."}):Object(m.jsx)(T,{value:"Create new password",onClick:function(){""===c?d(he("Required")):c.length<8?d(he("Password must be more 7 symbols")):d(function(e,t){return function(n){n(Ct(!0)),vt(e,t).then((function(e){console.log(e.data),n({type:"NEW_PASSWORD/SET_SUCCESS",success:!0})})).catch((function(e){var t=e.response?e.response.data.error:e.message+", more details in the console";n(function(e){return{type:"SET-ERROR",error:e}}(t))})).finally((function(){n(Ct(!1))}))}}(c,e))}})}),Object(m.jsxs)("div",{className:Nt.a.singUp,children:[Object(m.jsx)("a",{className:Nt.a.link,href:"#",children:"Did you remember your password?"}),Object(m.jsx)("a",{className:Nt.a.linkSingUp,href:"#",children:"Try logging in"})]})]})})})},yt=function(){return Object(m.jsx)("div",{className:u.a.contentContainer,children:Object(m.jsxs)(l.d,{children:[Object(m.jsx)(l.b,{path:"/",exact:!0,render:function(){return Object(m.jsx)(l.a,{to:b})}}),Object(m.jsx)(l.b,{exact:!0,path:b,render:function(){return Object(m.jsx)(de,{})}}),Object(m.jsx)(l.b,{exact:!0,path:p,render:function(){return Object(m.jsx)(re,{})}}),Object(m.jsx)(l.b,{exact:!0,path:j,render:function(){return Object(m.jsx)(w,{})}}),Object(m.jsx)(l.b,{exact:!0,path:O,render:function(){return Object(m.jsx)(fe,{})}}),Object(m.jsx)(l.b,{exact:!0,path:g,render:function(){return Object(m.jsx)(Et,{})}}),Object(m.jsx)(l.b,{exact:!0,path:x,render:function(){return Object(m.jsx)(v,{})}}),Object(m.jsx)(l.b,{exact:!0,path:f,render:function(){return Object(m.jsx)(lt,{})}}),Object(m.jsx)(l.b,{path:_,render:function(){return Object(m.jsx)(xt,{})}}),Object(m.jsx)(l.b,{render:function(){return Object(m.jsx)(mt,{})}})]})})},St=n(56),Lt=n.n(St),Tt=function(){var e=Object(G.c)((function(e){return e.login.isAuth})),t=Object(G.b)();return Object(m.jsx)("div",{className:Lt.a.headerContainer,children:Object(m.jsxs)("div",{className:Lt.a.navLinkContainer,children:[e?Object(m.jsx)("button",{onClick:function(){t((function(e){J().then((function(t){e({type:"LOGOUT"})})).catch((function(t){var n=t.response?t.response.data.error:t.message+", more details in the console";e(X(n))}))}))},children:"Logout"}):Object(m.jsx)(oe.b,{to:b,children:"Login"}),Object(m.jsx)(oe.b,{to:p,children:"Registration"}),Object(m.jsx)(oe.b,{to:j,children:"Profile"}),Object(m.jsx)(oe.b,{to:h,children:"404"}),Object(m.jsx)(oe.b,{to:O,children:"Password Recover"}),Object(m.jsx)(oe.b,{to:g,children:"New Password"}),Object(m.jsx)(oe.b,{to:x,children:"Presentation"}),Object(m.jsx)(oe.b,{to:f,children:"Packs"}),Object(m.jsx)(oe.b,{to:_,children:"Cards"})]})})},Rt=n(57),It=n.n(Rt),Ft=n(31),Dt=n.n(Ft),At=n.p+"static/media/packList.7af4644a.svg",Ut=n.p+"static/media/profole.36eee9e3.svg",Ht=function(){return Object(m.jsxs)("div",{className:Dt.a.wrapper,children:[Object(m.jsxs)("button",{className:Dt.a.btn,children:[Object(m.jsx)("img",{className:Dt.a.icon,src:At,alt:"icon list"}),Object(m.jsx)("span",{className:Dt.a.span,children:"Packs list"})]}),Object(m.jsxs)("button",{className:Dt.a.btn,children:[Object(m.jsx)("img",{className:Dt.a.icon,src:Ut,alt:"icon list"}),Object(m.jsx)("span",{className:Dt.a.span,children:"Profile"})]})]})},Gt=function(){return Object(m.jsx)("div",{className:It.a.head,children:Object(m.jsxs)("div",{className:It.a.container,children:[Object(m.jsx)(F,{style:{justifyContent:"start",padding:"10px 0",marginRight:"168px"}}),Object(m.jsx)(Ht,{})]})})};var Bt=function(){return Object(m.jsxs)("div",{className:o.a.app,children:[Object(m.jsx)(Tt,{}),Object(m.jsx)(Gt,{}),Object(m.jsx)("div",{className:o.a.content,children:Object(m.jsx)(yt,{})})]})},qt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,133)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))},Mt=n(49),Wt=n(73),Vt={},Zt={},Kt=Object(Mt.b)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Vt,t=arguments.length>1?arguments[1]:void 0;return t.type,e},login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":return Object(B.a)(Object(B.a)({},e),{},{user:t.payload,isAuth:!0});case"IS-FETCHING":return Object(B.a)(Object(B.a)({},e),{},{isFetching:t.isFetching});case"SET-EMAIL-ERROR":return Object(B.a)(Object(B.a)({},e),{},{emailError:t.error});case"SET-PASSWORD-ERROR":return Object(B.a)(Object(B.a)({},e),{},{passwordError:t.error});case"SET-USER-ID":return Object(B.a)(Object(B.a)({},e),{},{userID:t.userID});case"LOGOUT":return Object(B.a)(Object(B.a)({},e),{},{user:{},isAuth:!1});default:return e}},newPassword:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:kt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"IS-FETCHING":return Object(B.a)(Object(B.a)({},e),{},{isFetching:t.isFetching});case"SET-NEW-PASSWORD":return Object(B.a)(Object(B.a)({},e),{},{resetPassword:t.newPassword});case"SET-ERROR":return Object(B.a)(Object(B.a)({},e),{},{error:t.error});case"NEW_PASSWORD/SET_SUCCESS":return Object(B.a)(Object(B.a)({},e),{},{success:t.success});default:return e}},passwordRecover:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"IS-FETCHING":return Object(B.a)(Object(B.a)({},e),{},{isFetching:t.isFetching});case"SET-ERROR":return Object(B.a)(Object(B.a)({},e),{},{error:t.error});default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Zt,t=arguments.length>1?arguments[1]:void 0;return t.type,e},registration:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_NEW_USER":return Object(B.a)(Object(B.a)({},e),{},{newUser:t.payload});case"SET-EMAIL-ERROR":return Object(B.a)(Object(B.a)({},e),{},{emailError:t.error});case"SET-PASSWORD-ERROR":return Object(B.a)(Object(B.a)({},e),{},{passwordError:t.error});default:return e}},packs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET-PACKS":return Object(B.a)(Object(B.a)({},e),{},{packsTableData:t.packsTableData});case"IS-FETCHING":return Object(B.a)(Object(B.a)({},e),{},{isFetching:t.isFetching});default:return e}},cards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET-CARDS":return Object(B.a)(Object(B.a)({},e),{},{cardsTableData:t.cardsTableData});case"IS-FETCHING":return Object(B.a)(Object(B.a)({},e),{},{isFetching:t.isFetching});case"SET-CARDS-PACK-ID":return Object(B.a)(Object(B.a)({},e),{},{cardsPackId:t.cardsPackId});case"SET-PACK-NAME":return Object(B.a)(Object(B.a)({},e),{},{packName:t.packName});default:return e}}}),zt=Object(Mt.c)(Kt,Object(Mt.a)(Wt.a));window.store=zt,s.a.render(Object(m.jsx)(oe.a,{children:Object(m.jsx)(G.a,{store:zt,children:Object(m.jsx)(Bt,{})})}),document.getElementById("root")),qt()},15:function(e,t,n){e.exports={packsList:"PacksList_packsList__16Oow",aside:"PacksList_aside__2D1R_",titleH3:"PacksList_titleH3__2kgRF",rangeSlider:"PacksList_rangeSlider__176Ho",content:"PacksList_content__dqveu",form:"PacksList_form__9JcOw",wrap:"PacksList_wrap__3605h",item1:"PacksList_item1__Qt_rc",item2:"PacksList_item2__1w9py",item3:"PacksList_item3__3GUHw",item4:"PacksList_item4__2uHEt",item5:"PacksList_item5__2SM_M",pagination:"PacksList_pagination__dccMW"}},16:function(e,t,n){e.exports={loginPage:"LoginPage_loginPage__qEFAn",wrapper:"LoginPage_wrapper__-2biH",inner:"LoginPage_inner__2clEu",form:"LoginPage_form__3-rTG",wrap:"LoginPage_wrap__1xLgl",checkbox:"LoginPage_checkbox__3bbTY",checkboxInput:"LoginPage_checkboxInput__3OAOa",checkboxLable:"LoginPage_checkboxLable__3Udfu",linkPassword:"LoginPage_linkPassword__209Q3",btn:"LoginPage_btn__2FN60",singUp:"LoginPage_singUp__118j5",span:"LoginPage_span__2Cd-O",linkSingUp:"LoginPage_linkSingUp__2EW2I"}},22:function(e,t,n){e.exports={packName:"CardsList_packName__1hJHs",content:"CardsList_content__251pN",back:"CardsList_back__3DYlF",icon:"CardsList_icon__25J3f",search:"CardsList_search__1VIsM",wrap:"CardsList_wrap__3-HTq",item1:"CardsList_item1__RPRqp",item2:"CardsList_item2__3dqBk",item3:"CardsList_item3__1Moy1",item4:"CardsList_item4__34Wc5",pagination:"CardsList_pagination__3IL9k"}},25:function(e,t,n){e.exports={forgotPassword:"ForgotPassword_forgotPassword__2MlHL",wrapper:"ForgotPassword_wrapper__3bdcd",inner:"ForgotPassword_inner__348n1",form:"ForgotPassword_form__1KQ49",text:"ForgotPassword_text__iVqTU",btn:"ForgotPassword_btn__2aD94",singUp:"ForgotPassword_singUp__305sf",link:"ForgotPassword_link__3s4ac",linkSingUp:"ForgotPassword_linkSingUp__3ybFi"}},26:function(e,t,n){e.exports={newPassword:"NewPassword_newPassword__2uvL8",wrapper:"NewPassword_wrapper__20tPN",inner:"NewPassword_inner__1gLgp",form:"NewPassword_form__v80h7",text:"NewPassword_text__11Qz6",btn:"NewPassword_btn__1LRsl",singUp:"NewPassword_singUp__3KIe5",link:"NewPassword_link__gmxUG",linkSingUp:"NewPassword_linkSingUp__1jx7c"}},30:function(e,t,n){e.exports={wrapper:"Input_wrapper__sgEY7",label:"Input_label__2TTl5",input__item:"Input_input__item__3jSC1",icon:"Input_icon__1E6-D",span:"Input_span__2Jcmt",checkbox:"Input_checkbox__2bqf6",checkboxInput:"Input_checkboxInput__P_T-B",checkboxLable:"Input_checkboxLable__3VCdo"}},31:function(e,t,n){e.exports={wrapper:"Tab_wrapper__1uAkk",btn:"Tab_btn__3_DnP",icon:"Tab_icon__3Dobh",span:"Tab_span__EGs9d"}},38:function(e,t,n){e.exports={loginPage:"Register_loginPage__3xiEa",wrapper:"Register_wrapper__3fFdv",inner:"Register_inner__35eRX",form:"Register_form__1wCvI",btn:"Register_btn__1F_93"}},39:function(e,t,n){e.exports={dropdown:"Dropdown_dropdown__2kQYU",text:"Dropdown_text__3EieB",dropdownSelect:"Dropdown_dropdownSelect__1_M1j",item:"Dropdown_item__y0zB4"}},44:function(e,t,n){e.exports={error:"Error_error__2eTSF",wrapper:"Error_wrapper__1D50E",text:"Error_text__3I6Le",btn:"Error_btn__3T6gc"}},48:function(e,t,n){e.exports={sideButton:"SideButton_sideButton__2GYUP",btnActive:"SideButton_btnActive__1gx1h",btn:"SideButton_btn__2SRDQ"}},52:function(e,t,n){e.exports={content:"App_content__INdBb"}},55:function(e,t,n){e.exports={search:"Search_search__T7yg_",input:"Search_input__a-msh"}},56:function(e,t,n){e.exports={headerContainer:"Header_headerContainer__unZf7",navLinkContainer:"Header_navLinkContainer__2cpJi"}},57:function(e,t,n){e.exports={head:"Head_head__19Vea",container:"Head_container__ZPF3P"}},66:function(e,t,n){e.exports={contentContainer:"Content_contentContainer__3_tBf"}},67:function(e,t,n){e.exports={btn:"Button_btn__3YXc9"}},68:function(e,t,n){e.exports={logo:"Logo_logo__2s_vA"}},69:function(e,t,n){e.exports={title:"TitleH2_title__1oyIA"}},72:function(e,t,n){e.exports={btn:"Actions_btn__1f3Dp"}},81:function(e,t,n){}},[[106,1,2]]]);
//# sourceMappingURL=main.1d1af2d5.chunk.js.map