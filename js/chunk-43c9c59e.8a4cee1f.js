(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-43c9c59e"],{b45f:function(e,t,a){"use strict";a.r(t);a("b0c0");var o=a("7a23"),c=Object(o["K"])("data-v-313046c8");Object(o["u"])("data-v-313046c8");var n={class:"component-community"},s={class:"parallax"},l={class:"wrapper"},i={class:"wrapper clearfix"},m={class:"lnb",ref:"lnbRef"},r={class:"border-point color-point border-point-hover color-point-hover"},u={class:"border-point-hover color-point-hover"},d={class:"content"},b={class:"email part"},h={class:"sm-title"},j={key:0},p={key:1},O={class:"row"},g={class:"col"},f={class:"form-group message"},y={for:"communityMessage"},v=Object(o["h"])("span",{class:"color-point"},"*",-1),k={class:"float-right"},w={class:"col"},A={class:"name form-group"},E={for:"communityName"},x={class:"email form-group"},C={for:"communityEmailFrom"},S=Object(o["h"])("span",{class:"color-point"},"*",-1),q={class:"email form-group"},I={for:"communityEmailTo"},F=Object(o["h"])("input",{type:"email",class:"form-control focus-border-pointer",id:"communityEmailTo",placeholder:"name@example.com",value:"africalibrary21@gmail.com",readonly:""},null,-1),M={class:"satisfaction form-group"},J={for:"communitySatisfaction"},N=Object(o["h"])("span",{class:"color-point"},"*",-1),T={class:"float-right"},K={class:"icons row"},R={class:"col text-right"},V={class:"col text-center"},P={class:"col"},U={class:"action"},_={key:0},B={key:1},H={class:"comment part"},L={class:"sm-title"};Object(o["s"])();var W=c((function(e,t,a,c,W,z){var D=Object(o["y"])("Comment");return Object(o["r"])(),Object(o["d"])("div",n,[Object(o["h"])("div",s,[Object(o["h"])("div",l,[Object(o["h"])("h1",null,Object(o["A"])("ko"===c.store.state.lang?"커뮤니티":"Community"),1),Object(o["h"])("h2",null,Object(o["A"])("ko"===c.store.state.lang?"퍼블레싱은 열려 있습니다. 문의사항이 있으면 언제든지 남겨주세요.":"Publessing is open. If you have any questions, feel free to leave them."),1)])]),Object(o["h"])("div",i,[Object(o["h"])("div",m,[Object(o["h"])("ul",null,[Object(o["h"])("li",r,Object(o["A"])("ko"===c.store.state.lang?"이메일":"Email"),1),Object(o["h"])("li",u,Object(o["A"])("ko"===c.store.state.lang?"코멘트":"Comments"),1)])],512),Object(o["h"])("div",d,[Object(o["h"])("div",b,[Object(o["h"])("div",h,Object(o["A"])("ko"===c.store.state.lang?"이메일":"Email"),1),"ko"===c.store.state.lang?(Object(o["r"])(),Object(o["d"])("div",j,"이메일을 통해 문의사항을 보내주시면 발신 메일로 답변드리겠습니다.")):(Object(o["r"])(),Object(o["d"])("div",p,"Send us your inquiry via e-mail and we will respond.")),Object(o["h"])("div",O,[Object(o["h"])("div",g,[Object(o["h"])("div",f,[Object(o["h"])("label",y,[Object(o["h"])("span",null,Object(o["A"])("ko"===c.store.state.lang?"내용":"Message"),1),v,Object(o["h"])("span",k,"("+Object(o["A"])(c.state.community.message.length)+" / 1000)",1)]),Object(o["h"])("textarea",{class:"form-control focus-border-pointer",id:"communityMessage",placeholder:"Hey! It's cool!",onInput:t[1]||(t[1]=function(e){return c.state.community.message=e.target.value}),disabled:!c.state.loaded},null,40,["disabled"])])]),Object(o["h"])("div",w,[Object(o["h"])("div",A,[Object(o["h"])("label",E,Object(o["A"])("ko"===c.store.state.lang?"이름":"Name"),1),Object(o["I"])(Object(o["h"])("input",{type:"text",class:"form-control focus-border-pointer",id:"communityName",placeholder:"James","onUpdate:modelValue":t[2]||(t[2]=function(e){return c.state.community.name=e}),onKeyup:t[3]||(t[3]=Object(o["J"])((function(e){return c.send()}),["enter"])),disabled:!c.state.loaded},null,40,["disabled"]),[[o["E"],c.state.community.name]])]),Object(o["h"])("div",x,[Object(o["h"])("label",C,[Object(o["h"])("span",null,Object(o["A"])("ko"===c.store.state.lang?"발신 메일":"Sender Email "),1),S]),Object(o["I"])(Object(o["h"])("input",{type:"email",class:"form-control focus-border-pointer",id:"communityEmailFrom",placeholder:"name@example.com","onUpdate:modelValue":t[4]||(t[4]=function(e){return c.state.community.email=e}),onKeyup:t[5]||(t[5]=Object(o["J"])((function(e){return c.send()}),["enter"])),disabled:!c.state.loaded},null,40,["disabled"]),[[o["E"],c.state.community.email]])]),Object(o["h"])("div",q,[Object(o["h"])("label",I,[Object(o["h"])("span",null,Object(o["A"])("ko"===c.store.state.lang?"수신 메일":"Recipient Email "),1)]),F]),Object(o["h"])("div",M,[Object(o["h"])("label",J,[Object(o["h"])("span",null,Object(o["A"])("ko"===c.store.state.lang?"서비스 평가":"Satisfaction "),1),N,Object(o["h"])("span",T,Object(o["A"])(c.state.community.comment),1)]),Object(o["h"])("div",K,[Object(o["h"])("div",R,[Object(o["h"])("i",{class:["fa fa-frown-o",{"active color-point":"1"===c.state.community.point,disabled:!c.state.loaded}],onClick:t[6]||(t[6]=function(e){return c.point("1")})},null,2)]),Object(o["h"])("div",V,[Object(o["h"])("i",{class:["fa fa-meh-o",{"active color-point":"2"===c.state.community.point,disabled:!c.state.loaded}],onClick:t[7]||(t[7]=function(e){return c.point("2")})},null,2)]),Object(o["h"])("div",P,[Object(o["h"])("i",{class:["fa fa-smile-o",{"active color-point":"3"===c.state.community.point,disabled:!c.state.loaded}],onClick:t[8]||(t[8]=function(e){return c.point("3")})},null,2)])])]),Object(o["h"])("div",U,[Object(o["h"])("button",{class:"btn btn-point",onClick:t[9]||(t[9]=function(e){return c.send()}),disabled:!c.state.loaded},["ko"===c.store.state.lang?(Object(o["r"])(),Object(o["d"])("span",_,Object(o["A"])("발송 ".concat(c.state.loaded?"":"중...")),1)):(Object(o["r"])(),Object(o["d"])("span",B,Object(o["A"])("Send".concat(c.state.loaded?"":"ing...")),1))],8,["disabled"])])])])]),Object(o["h"])("div",H,[Object(o["h"])("div",L,Object(o["A"])("ko"===c.store.state.lang?"코멘트":"Comments"),1),Object(o["h"])("p",null,Object(o["A"])("ko"===c.store.state.lang?"프로그램에 대한 의견을 남겨주시면, 내용을 검토하여 프로그램을 적용하겠습니다.":"Leave a comment about the program, we will review and apply the program."),1),Object(o["h"])(D)])])])])})),z=a("a1e9"),D=a("5c40"),G=a("82d0"),Q=a("2f66"),X=a("5502"),Y=a("4ea3"),Z={props:{callback:Function,load:Function},components:{Comment:Y["a"]},setup:function(e){var t=Object(X["b"])(),a=Object(z["j"])({community:{name:"",email:"",message:"",point:"3",comment:Object(D["d"])((function(){return"3"===a.community.point?"It's Cool":"2"===a.community.point?"Not bad":"Bad"}))},loaded:!0}),o=Object(z["k"])(null),c=function(e){a.loaded&&(a.community.point=e)},n=function(){a.loaded&&(a.community.message?a.community.email?G["a"].isValidEmail(a.community.email)?a.community.message.length>1e3?G["a"].message.show("warning","ko"===t.state.lang?"메시지는 1000자를 넘을 수 없습니다.":"Messages cannot exceed 1000 characters."):a.community.name&&a.community.name.length>50?G["a"].message.show("warning","ko"===t.state.lang?"이름은 50자를 넘을 수 없습니다.":"Name cannot exceed 50 characters"):a.community.email.length>100?G["a"].message.show("warning","ko"===t.state.lang?"이메일 주소는 100자를 넘을 수 없습니다.":"E-mail addresses cannot exceed 100 characters."):confirm("ko"===t.state.lang?"이메일을 발송하시겠습니까?":"Would you like to send an email?")&&(a.loaded=!1,Q["a"].post("/api/email",a.community).then((function(){G["a"].message.show("success","ko"===t.state.lang?"이메일을 발송하였습니다.":"Email has been sent"),a.loaded=!0,a.community.name="",a.community.email="",a.community.message="",a.community.point="3",document.querySelector("#communityMessage").value=""})).catch((function(){G["a"].message.show("error","ko"===t.state.lang?"오류가 있습니다.":"There is an error."),a.loaded=!0}))):(G["a"].message.show("warning","ko"===t.state.lang?"이메일 주소가 올바르지 않습니다.":"The email address is invalid."),document.querySelector("#communityEmailFrom").focus()):(G["a"].message.show("warning","ko"===t.state.lang?"이메일 주소를 입력해주세요.":"Email address is required."),document.querySelector("#communityEmailFrom").focus()):(G["a"].message.show("warning","ko"===t.state.lang?"내용을 입력해주세요.":"Please enter your message."),document.querySelector("#communityMessage").focus()))};return t.state.account.login&&(a.community.email=t.state.account.email),Object(D["v"])((function(){"function"===typeof e.load&&e.load(o.value)})),{store:t,state:a,lnbRef:o,point:c,send:n}}};a("e24d");Z.render=W,Z.__scopeId="data-v-313046c8";t["default"]=Z},cbcb:function(e,t,a){},e24d:function(e,t,a){"use strict";a("cbcb")}}]);
//# sourceMappingURL=chunk-43c9c59e.8a4cee1f.js.map