(this.webpackJsonphomeworks=this.webpackJsonphomeworks||[]).push([[0],[,,,,function(e,t,n){e.exports={message:"Message_message__2PLs7",avatar:"Message_avatar__1Nxes",content:"Message_content__1y2jg",angle:"Message_angle__qRRAz",text:"Message_text__1L_4G",name:"Message_name__3I5Lc",time:"Message_time__1eFfI"}},function(e,t,n){e.exports={button:"Affairs_button__JsqhH",active:"Affairs_active__1q7J2",affair:"Affairs_affair__2pS5D",item:"Affairs_item__8Djgd",High:"Affairs_High__xZOx4",Middle:"Affairs_Middle__1bHK4",Low:"Affairs_Low__3hepl"}},,,,,function(e,t,n){e.exports={link:"Header_link__c3GUm",active:"Header_active__144Q0",block:"Header_block__1-NDP",header:"Header_header__P7Jy9"}},,function(e,t,n){e.exports={greeting:"Greeting_greeting__1c36F",error:"Greeting_error__2FyXD",input:"Greeting_input__1matA",errorInput:"Greeting_errorInput__286YJ",button:"Greeting_button__2mQH7",count:"Greeting_count__-rL05"}},,,function(e,t,n){e.exports={input:"SuperInputText_input__1-GGj",superInput:"SuperInputText_superInput__2rc9k",errorInput:"SuperInputText_errorInput__DTMcZ",error:"SuperInputText_error__O-znN"}},,function(e,t,n){e.exports={default:"SuperButton_default__1Is2V",red:"SuperButton_red__uRDod",button:"SuperButton_button__R1R_u",blink:"SuperButton_blink__2somo"}},function(e,t,n){e.exports={label:"SuperCheckbox_label__3EpH0",checkbox:"SuperCheckbox_checkbox__2GleR",spanClassName:"SuperCheckbox_spanClassName__3fW9_"}},,,function(e,t,n){e.exports={blue:"HomemadeInpButCheck_blue__3OUp-",column:"HomemadeInpButCheck_column__1YPS9",testSpanError:"HomemadeInpButCheck_testSpanError__MOr9N"}},function(e,t,n){e.exports={select:"SuperSelect_select__1qJ3w",option:"SuperSelect_option__51G3U"}},function(e,t,n){e.exports={radio:"SyperRadio_radio__3M94v",label:"SyperRadio_label__3Tywj"}},,,,,,function(e,t,n){},function(e,t,n){e.exports={span:"SuperEditableSpan_span__1hBWe"}},,,,,,,function(e,t,n){},,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(28),s=n.n(r),i=(n(37),n(29)),o=n.n(i),l=n(11),j=n(2),u=n(4),b=n.n(u),d=n(0);var x=function(e){return Object(d.jsxs)("div",{className:b.a.message,children:[Object(d.jsx)("img",{src:e.avatar,alt:"avatar",className:b.a.avatar}),Object(d.jsx)("div",{className:b.a.angle}),Object(d.jsxs)("div",{className:b.a.content,children:[Object(d.jsx)("div",{className:b.a.name,children:e.name}),Object(d.jsx)("div",{className:b.a.text,children:e.message}),Object(d.jsx)("div",{className:b.a.time,children:e.time})]})]})};var O=function(e){return Object(d.jsxs)("div",{className:b.a.message,children:[Object(d.jsx)("img",{src:e.avatar,alt:"avatar",className:b.a.avatar}),Object(d.jsx)("div",{className:b.a.angle}),Object(d.jsxs)("div",{className:b.a.content,children:[Object(d.jsx)("div",{className:b.a.name,children:e.name}),Object(d.jsx)("div",{className:b.a.text,children:e.message}),Object(d.jsx)("div",{className:b.a.time,children:e.time})]})]})},h="https://tipik.ru/wp-content/uploads/2018/12/pokemon_pikachu_18961.jpg",p="Max",m="\u0412\u044b\u0443\u0447\u0438\u043b\u0430 React?)))))",_="22:00",f="https://cdn62.zvuk.com/pic?type=artist&id=99438391&size=600x600&ext=jpg",v="Emily",g="\u0423\u0447\u0443 JavaScript!",N="17.26";var C=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{style:{fontSize:"20px",marginTop:"60px"},children:"Dialogs:"}),Object(d.jsx)(x,{avatar:h,name:p,message:m,time:_}),Object(d.jsx)(O,{avatar:f,name:v,message:g,time:N})]})},k=n(3),S=n(5),y=n.n(S);var w=function(e){var t=y.a.item+" "+y.a[e.affair.priority];return Object(d.jsxs)("div",{className:y.a.affair,children:[Object(d.jsx)("div",{className:y.a.item,children:e.affair.name}),Object(d.jsx)("div",{className:t,children:e.affair.priority}),Object(d.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},className:y.a.item+" "+y.a.button,children:"X"})]})};var I=function(e){var t=e.data.map((function(t){return Object(d.jsx)(w,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)})),n=y.a.button+" "+("all"===e.filter?y.a.active:" "),a=y.a.button+" "+("High"===e.filter?y.a.active:" "),c=y.a.button+" "+("Middle"===e.filter?y.a.active:" "),r=y.a.button+" "+("Low"===e.filter?y.a.active:" ");return Object(d.jsxs)("div",{children:[t,Object(d.jsx)("button",{onClick:function(){e.setFilter("all")},className:n,children:"All"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("High")},className:a,children:"High"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("Middle")},className:c,children:"Middle"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("Low")},className:r,children:"Low"})]})},M=[{_id:1,name:"React",priority:"High"},{_id:2,name:"Anime",priority:"Low"},{_id:3,name:"Games",priority:"Low"},{_id:4,name:"Work",priority:"High"},{_id:5,name:"HTML & CSS",priority:"Middle"}];var T=function(){var e=Object(a.useState)(M),t=Object(k.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)("all"),s=Object(k.a)(r,2),i=s[0],o=s[1],l=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,i);return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),Object(d.jsx)("div",{style:{fontSize:"20px"},children:"TodoMini:"}),Object(d.jsx)(I,{data:l,setFilter:o,deleteAffairCallback:function(e){return c(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))},filter:i})]})},A=n(32),H=n(12),E=n.n(H),B=function(e){var t=e.name,n=e.setNameCallback,a=e.addUser,c=e.error,r=e.totalUsers,s=e.onEnter,i=c?E.a.errorInput:E.a.input;return Object(d.jsxs)("div",{className:E.a.greeting,children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{value:t,onChange:n,className:i,onKeyDown:s,onBlur:n}),Object(d.jsx)("div",{className:E.a.error,children:c})]}),Object(d.jsx)("button",{onClick:a,className:E.a.button,disabled:!t,children:"add"}),Object(d.jsx)("span",{className:E.a.count,children:r})]})},F=function(e){var t=e.users,n=e.addUserCallback,c=Object(a.useState)(""),r=Object(k.a)(c,2),s=r[0],i=r[1],o=Object(a.useState)(""),l=Object(k.a)(o,2),j=l[0],u=l[1],b=function(){n(s),alert("Hello ".concat(s," !")),i("")},x=t.length;return Object(d.jsx)(B,{name:s,setNameCallback:function(e){var t=e.currentTarget.value.trim();t?(i(t),j&&u("")):(s&&i(""),u("name is require!"))},addUser:b,onEnter:function(e){"Enter"===e.key&&s&&b()},error:j,totalUsers:x})},G=n(46);var J=function(){var e=Object(a.useState)([]),t=Object(k.a)(e,2),n=t[0],c=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),Object(d.jsx)("div",{style:{fontSize:"20px"},children:"Greetings:"}),Object(d.jsx)(F,{users:n,addUserCallback:function(e){var t={_id:Object(G.a)(),name:e};c([].concat(Object(A.a)(n),[t]))}})]})},R=n(6),z=n(7),D=n(15),L=n.n(D),P=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,c=e.onEnter,r=e.error,s=e.className,i=e.spanClassName,o=Object(z.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),l="".concat(L.a.error," ").concat(i||""),j="".concat(L.a.input," ").concat(r?L.a.errorInput:L.a.superInput," ").concat(s);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",Object(R.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),c&&"Enter"===e.key&&c()},className:j},o)),r&&Object(d.jsx)("span",{className:l,children:r})]})},U=n(21),q=n.n(U),K=n(17),W=n.n(K),Q=function(e){var t=e.red,n=e.className,a=Object(z.a)(e,["red","className"]),c="".concat(W.a.button," ").concat(t?W.a.red:W.a.default," ").concat(n);return Object(d.jsx)("button",Object(R.a)({className:c},a))},X=n(18),Y=n.n(X),Z=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,c=(e.spanClassName,e.children),r=Object(z.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(Y.a.checkbox," ").concat(a||"");return Object(d.jsxs)("label",{className:Y.a.label,children:[Object(d.jsx)("input",Object(R.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},r)),c&&Object(d.jsx)("span",{className:Y.a.spanClassName,children:c})]})};var V=function(){var e=Object(a.useState)(""),t=Object(k.a)(e,2),n=t[0],c=t[1],r=n?"":"error",s=function(){r?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(a.useState)(!1),o=Object(k.a)(i,2),l=o[0],j=o[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),Object(d.jsx)("div",{style:{fontSize:"20px"},children:"Homemade Input Button Checkbox:"}),Object(d.jsxs)("div",{className:q.a.column,children:[Object(d.jsx)(P,{value:n,onChangeText:c,onEnter:s,error:r}),Object(d.jsx)(P,{className:q.a.blue}),Object(d.jsx)(Q,{children:"default"}),Object(d.jsx)(Q,{red:!0,onClick:s,children:"delete "}),Object(d.jsx)(Q,{disabled:!0,children:"disabled"}),Object(d.jsx)(Z,{checked:l,onChangeChecked:j,children:"some text "}),Object(d.jsx)(Z,{checked:l,onChange:function(e){return j(e.currentTarget.checked)}})]}),Object(d.jsx)("hr",{})]})},$=n(30),ee=n.n($),te=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,c=e.spanProps,r=Object(z.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(a.useState)(!1),i=Object(k.a)(s,2),o=i[0],l=i[1],j=c||{},u=j.children,b=j.onDoubleClick,x=j.className,O=Object(z.a)(j,["children","onDoubleClick","className"]),h="".concat(ee.a.span," ").concat(x||"");return Object(d.jsx)(d.Fragment,{children:o?Object(d.jsx)(P,Object(R.a)({autoFocus:!0,onBlur:function(e){l(!1),t&&t(e)},onEnter:function(){l(!1),n&&n()}},r)):Object(d.jsxs)("span",Object(R.a)(Object(R.a)({onDoubleClick:function(e){l(!0),b&&b(e)},className:h},O),{},{children:["\u2710  ",u||r.value]}))})};function ne(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function ae(e,t){var n=t,a=localStorage.getItem(e);return null!==a&&(n=JSON.parse(a)),n}ne("test",{x:"A",y:1});ae("test",{x:"",y:0});var ce=function(){var e=Object(a.useState)(""),t=Object(k.a)(e,2),n=t[0],c=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{style:{fontSize:"20px",marginTop:"60px"},children:"EditableSpan:"}),Object(d.jsx)("div",{children:Object(d.jsx)(te,{value:n,onChangeText:c,spanProps:{children:n?void 0:"enter text..."}})}),Object(d.jsx)(Q,{onClick:function(){ne("editable-span-value",n)},children:"save"}),Object(d.jsx)(Q,{onClick:function(){c(ae("editable-span-value",""))},children:"restore"})]})};var re=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(C,{}),Object(d.jsx)(T,{}),Object(d.jsx)(J,{}),Object(d.jsx)(V,{}),Object(d.jsx)(ce,{})]})};var se=function(){return Object(d.jsx)("div",{children:Object(d.jsx)("h1",{style:{fontFamily:"Bell MT",textAlign:"center",fontSize:"70px",color:"white",margin:"220px"},children:"404: PAGE NOT FOUND"})})},ie=n(22),oe=n.n(ie),le=function(e){var t=e.options,n=e.className,a=e.onChange,c=e.onChangeOption,r=Object(z.a)(e,["options","className","onChange","onChangeOption"]),s=t?t.map((function(e,t){return Object(d.jsx)("option",{className:oe.a.option,value:e,children:e},e+"-"+t)})):[],i=oe.a.select+(n?" "+n:"");return Object(d.jsx)("select",Object(R.a)(Object(R.a)({className:i,onChange:function(e){a&&a(e),c&&c(e.currentTarget.value)}},r),{},{children:s}))},je=n(23),ue=n.n(je),be=function(e){e.type;var t=e.name,n=e.options,a=e.value,c=e.onChange,r=e.onChangeOption,s=Object(z.a)(e,["type","name","options","value","onChange","onChangeOption"]),i=function(e){c&&c(e),r&&r(e.currentTarget.value)},o=ue.a.radio,l=n?n.map((function(e,n){return Object(d.jsxs)("label",{className:ue.a.label,children:[Object(d.jsx)("input",Object(R.a)({className:o,type:"radio",name:t,checked:e===a,value:e,onChange:i},s)),e]},t+"-"+n)})):[];return Object(d.jsx)(d.Fragment,{children:l})},de=["JavaScript","React","Redux"];var xe=function(){var e=Object(a.useState)(de[1]),t=Object(k.a)(e,2),n=t[0],c=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),Object(d.jsx)("div",{style:{fontSize:"20px"},children:"SelectAndRadio:"}),Object(d.jsx)("div",{children:Object(d.jsx)(le,{options:de,value:n,onChangeOption:c})}),Object(d.jsx)("div",{children:Object(d.jsx)(be,{name:"radio",options:de,value:n,onChangeOption:c})})]})};var Oe=function(){return Object(d.jsx)("div",{children:Object(d.jsx)(xe,{})})};var he=function(){return Object(d.jsx)("div",{children:"Junior +"})},pe="/pre-junior",me="/junior",_e="/junior-plus";var fe=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(j.d,{children:[Object(d.jsx)(j.b,{path:"/",exact:!0,render:function(){return Object(d.jsx)(j.a,{to:pe})}}),Object(d.jsx)(j.b,{path:pe,render:function(){return Object(d.jsx)(re,{})}}),Object(d.jsx)(j.b,{path:me,render:function(){return Object(d.jsx)(Oe,{})}}),Object(d.jsx)(j.b,{path:_e,render:function(){return Object(d.jsx)(he,{})}}),Object(d.jsx)(j.b,{render:function(){return Object(d.jsx)(se,{})}})]})})},ve=n(10),ge=n.n(ve);var Ne=function(){return Object(d.jsxs)("div",{className:ge.a.header,children:[Object(d.jsx)(l.b,{to:pe,className:ge.a.link,activeClassName:ge.a.active,children:"Pre-Junior"}),Object(d.jsx)(l.b,{to:me,className:ge.a.link,activeClassName:ge.a.active,children:"Junior"}),Object(d.jsx)(l.b,{to:_e,className:ge.a.link,activeClassName:ge.a.active,children:"Junior +"}),Object(d.jsx)("div",{className:ge.a.block})]})};var Ce=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(l.a,{children:[Object(d.jsx)(Ne,{}),Object(d.jsx)(fe,{})]})})};var ke=function(){return Object(d.jsxs)("div",{className:o.a.App,children:[Object(d.jsx)("div",{style:{fontSize:"40px",textAlign:"center",color:"white",fontFamily:"Bell MT"},children:"Mini projects."}),Object(d.jsx)(Ce,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(ke,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[44,1,2]]]);
//# sourceMappingURL=main.408d1590.chunk.js.map