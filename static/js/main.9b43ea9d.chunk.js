(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{78:function(e,t){},79:function(e,t){},93:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t);var a=n(15),r=n(23),c=n(5),o=n(6),s=n(9),i=n(12),l=n(11),u=n(4),h=n.n(u),m=n(43),p=n.n(m),d=n(24),b=n.n(d),j=n(44),f=n(25),O=n(45),g=function(e){return new Promise((function(t,n){setTimeout(t,e)}))};function v(e,t,n,a){return y.apply(this,arguments)}function y(){return(y=Object(j.a)(b.a.mark((function e(t,n,a,r){var c,o,s,i,l;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=localStorage.getItem("User_EOS_key"),o=new f.JsonRpc("https://api.testnet.eos.io"),s=new O.JsSignatureProvider([c]),i=new f.Api({rpc:o,signatureProvider:s,textDecoder:new TextDecoder,textEncoder:new TextEncoder}),e.prev=4,e.next=7,i.transact({actions:[{account:t,name:n,authorization:[{actor:localStorage.getItem("User_EOS_account"),permission:"active"}],data:a}]},{blocksBehind:3,expireSeconds:30});case 7:if(l=e.sent,console.dir(l),"transfer"!=n){e.next=12;break}return r(l.processed.action_traces[0].inline_traces[1].console.concat("\n waiting for open ")),e.abrupt("return",g(1e3).then((function(){return x.open(r,parseInt(l.processed.action_traces[0].inline_traces[1].console.substring(9,64)),10)})));case 12:return"open"==n&&r(l.processed.action_traces[0].console),e.abrupt("return",l);case 16:throw e.prev=16,e.t0=e.catch(4),console.dir(e.t0),e.t0;case 20:case"end":return e.stop()}}),e,null,[[4,16]])})))).apply(this,arguments)}var x=function(){function e(){Object(c.a)(this,e)}return Object(o.a)(e,null,[{key:"bet",value:function(e){return new Promise((function(t,n){if(!localStorage.getItem("User_EOS_account"))return n();v("eosio.token","transfer",{from:localStorage.getItem("User_EOS_account"),to:"ovsbwwwvfchk",quantity:"1.1000 TNT",memo:"bet"},e).then((function(){t()})).catch((function(e){localStorage.removeItem("User_EOS_account"),n(e)}))}))}},{key:"open",value:function(e,t){return new Promise((function(n,a){if(!localStorage.getItem("User_EOS_account"))return a();v("ovsbwwwvfchk","open",{user:localStorage.getItem("User_EOS_account"),g_id:t},e).then((function(){n()})).catch((function(e){localStorage.removeItem("User_EOS_account"),a(e)}))}))}}]),e}(),S=x,_=n(0),k=function(e){var t=Object.assign({},e),n=t.className,a=t.type,r=t.style,c=t.onClick,o=t.children;return Object(_.jsx)("button",{className:"Button".concat(n?" "+n:""),type:a,style:r,onClick:c,children:o})},C=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handleSubmit=a.handleSubmit.bind(Object(s.a)(a)),a}return Object(o.a)(n,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var n=this.props.state.form,a=function(e){return t.props.setConsole(e)};return console.dir("dhfkajshfljashfla"),localStorage.setItem("User_EOS_key",n.key),localStorage.setItem("User_EOS_account",n.username),this.props.setConsole("waiting~~"),S.bet(a).then((function(){console.dir("")})).catch((function(e){a("some thing was wrong please try it again")}))}},{key:"render",value:function(){var e=this.props.state,t=e.form,n=e.error;return Object(_.jsxs)("form",{name:"form",onSubmit:this.handleSubmit,children:[Object(_.jsxs)("div",{className:"field",children:[Object(_.jsx)("label",{children:"Account name"}),Object(_.jsx)("input",{type:"text",name:"username",value:t.username,placeholder:"All small letters, a-z, 1-5 or dot, max 12 characters",onChange:this.props.handleChange,pattern:"[\\.a-z1-5]{2,12}",required:!0,autoComplete:"off"})]}),Object(_.jsxs)("div",{className:"field",children:[Object(_.jsx)("label",{children:"Private key"}),Object(_.jsx)("input",{type:"password",name:"key",value:t.key,onChange:this.props.handleChange,pattern:"^.{51,}$",required:!0,autoComplete:"new-password"})]}),Object(_.jsx)("div",{className:"field form-error",children:n&&Object(_.jsx)("span",{className:"error",children:n})}),Object(_.jsx)("div",{className:"bottom",children:Object(_.jsx)(k,{type:"submit",className:"green",children:"BET"})})]})}}]),n}(h.a.Component),w=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handleSubmit=a.handleSubmit.bind(Object(s.a)(a)),a}return Object(o.a)(n,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var n=this.props.state.form;return console.dir("dhfljashfla"),localStorage.setItem("User_EOS_key",n.key),localStorage.setItem("User_EOS_account",n.username),this.props.setConsole("waiting~~"),S.open((function(e){return t.props.setConsole(e)}),n.gameid).then((function(){console.dir("dhfljtututuhfla")})).catch((function(e){}))}},{key:"render",value:function(){var e=this.props.state,t=e.form;e.error;return Object(_.jsxs)("form",{name:"form",onSubmit:this.handleSubmit,children:[Object(_.jsxs)("div",{className:"field",children:[Object(_.jsx)("label",{children:"Game id"}),Object(_.jsx)("input",{type:"text",name:"gameid",value:t.gameid,placeholder:"in put game ID",onChange:this.props.handleChange,pattern:"[\\.0-9]{1,12}",required:!0,autoComplete:"off"})]}),Object(_.jsx)("div",{className:"bottom",children:Object(_.jsx)(E,{type:"submit",className:"green",children:"open"})})]})}}]),n}(h.a.Component),E=function(e){var t=Object.assign({},e),n=t.className,a=t.type,r=t.style,c=t.onClick,o=t.children;return Object(_.jsx)("button",{className:"Button".concat(n?" "+n:""),type:a,style:r,onClick:c,children:o})},I=w,N=(n(93),n.p+"static/media/182.be886b0a.png"),U=n.p+"static/media/co.9e39142a.png",T=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={form:{username:"",key:"",gameid:"",error:""},console_block_string:"welcome "},a.handleChange=a.handleChange.bind(Object(s.a)(a)),a}return Object(o.a)(n,[{key:"handleChange",value:function(e){var t,n=e.target,c=n.name,o=n.value,s=this.state.form;this.setState({form:Object(r.a)(Object(r.a)({},s),{},(t={},Object(a.a)(t,c,o),Object(a.a)(t,"error",""),t))})}},{key:"render",value:function(){var e=this;this.state.console_block_string;return Object(_.jsxs)("main",{children:[Object(_.jsx)("img",{src:N,alt:"Rice"}),Object(_.jsx)(C,{setConsole:function(t){return e.setState({console_block_string:t})},handleChange:function(t){return e.handleChange(t)},state:this.state}),Object(_.jsx)(I,{setConsole:function(t){return e.setState({console_block_string:t})},handleChange:function(t){return e.handleChange(t)},state:this.state}),Object(_.jsx)(A,{value:this.state.console_block_string}),Object(_.jsx)("h2",{children:" testingaccount:haeayhgpzuog"}),Object(_.jsx)("h2",{children:" testingkey:5K4wrLBXqAAMqvK6dFVwArV4U7ooofy8AVGTSkjxRcCprCeRT4o"}),Object(_.jsx)("img",{src:U,alt:"Rice"})]})}}]),n}(h.a.Component),A=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(_.jsx)("h3",{id:"CONTEX",children:this.props.value})}}]),n}(h.a.Component);p.a.render(Object(_.jsx)(T,{}),document.getElementById("root"))}},[[94,1,2]]]);
//# sourceMappingURL=main.9b43ea9d.chunk.js.map