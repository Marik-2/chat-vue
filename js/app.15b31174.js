(function(e){function t(t){for(var s,r,i=t[0],l=t[1],c=t[2],m=0,d=[];m<i.length;m++)r=i[m],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);u&&u(t);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],s=!0,i=1;i<n.length;i++){var l=n[i];0!==a[l]&&(s=!1)}s&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var s={},a={app:0},o=[];function r(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=s,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(n,s,function(t){return e[t]}.bind(null,s));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/chat-vue/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},"10f7":function(e,t,n){"use strict";var s=n("3fb3"),a=n.n(s);a.a},2625:function(e,t,n){"use strict";var s=n("b58e"),a=n.n(s);a.a},"321b":function(e,t,n){"use strict";var s=n("dad9"),a=n.n(s);a.a},"3e8a":function(e,t,n){"use strict";var s=n("62ef"),a=n.n(s);a.a},"3fb3":function(e,t,n){},"4f84":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container",attrs:{id:"app"}},[n("div",{staticClass:"row card"},[n("enter-name-modal"),n("room-list",{staticClass:"col s4"}),n("room",{staticClass:"col s8"})],1)])},o=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"room_list"},[n("div",{staticClass:"collection"},e._l(e.rooms,(function(e){return n("room-list-item",{key:e.id,attrs:{id:e.id,name:e.name,countUsers:e.countUsers,maxUsers:e.maxUsers}})})),1)])},i=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{staticClass:"collection-item",on:{click:function(t){return e.joinRoom(e.id)}}},[e._v(" "+e._s(e.name)+" ("+e._s(e.countUsers)+"/"+e._s(e.maxUsers)+") ")])},c=[],u=(n("b0c0"),n("8055")),m=n.n(u),d="u1106742.isp.regruhosting.ru/",f="2021",p=m()("http://"+d+":"+f),g=0;function v(e){p.emit("new_message",e)}function h(e){p.emit("join",e)}function _(e){if(""===e)throw"Name is empty!";p.emit("set_name",e)}p.on("login",(function(e){g=e.id,e.name}));var b={props:["id","name","countUsers","maxUsers"],data:function(){return{}},methods:{joinRoom:function(e){h(e)}}},w=b,y=n("2877"),x=Object(y["a"])(w,l,c,!1,null,null,null),O=x.exports,j={components:{RoomListItem:O},data:function(){return{rooms:[]}},mounted:function(){var e=this;p.on("update_room_list",(function(t){e.rooms=t}))}},C=j,E=(n("3e8a"),Object(y["a"])(C,r,i,!1,null,null,null)),M=E.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"room"},[n("message-list"),n("message-new")],1)},N=[],P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"scale-transition",attrs:{id:"message_list"}},e._l(e.messages,(function(t){return n("message-item",{key:t.id,attrs:{owner:t.ownerId===e.userId}},[e._v(" "+e._s(t.text)+" ")])})),1)},$=[],I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:"col s8 "+(e.owner?"offset-s4":"")},[n("div",{class:"message "+(e.owner?"owner blue lighten-4":"indigo lighten-5")},[e._t("default")],2)])},L=[],U={components:{},props:["owner"],data:function(){return{}}},T=U,R=(n("321b"),Object(y["a"])(T,I,L,!1,null,null,null)),S=R.exports,q={computed:{userId:function(){return g}},components:{MessageItem:S},data:function(){return{messageListElement:{},messages:[]}},methods:{scrollToNewMessage:function(){this.messageListElement.scrollTop=this.messageListElement.scrollHeight-this.messageListElement.clientHeight}},mounted:function(){var e=this;p.on("update_message_list",(function(t){e.messages=t,e.scrollToNewMessage()})),this.messageListElement=document.getElementById("message_list"),this.scrollToNewMessage()}},B=q,H=(n("10f7"),Object(y["a"])(B,P,$,!1,null,null,null)),J=H.exports,z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"message_new"},[n("div",{staticClass:"input-field col s12 valign-down"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],staticClass:"materialize-textarea",attrs:{maxlength:"200",rows:"2",id:"message"},domProps:{value:e.message},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.send(t)},input:function(t){t.target.composing||(e.message=t.target.value)}}}),n("label",{attrs:{for:"message"}},[e._v("Message")])])])},A=[],Y={components:{},data:function(){return{message:""}},methods:{send:function(){""!==this.message&&(v(this.message),this.message="",console.log(this.message))}},mounted:function(){}},D=Y,F=(n("e430"),Object(y["a"])(D,z,A,!1,null,null,null)),G=F.exports,K={components:{MessageList:J,MessageNew:G},data:function(){return{}}},Q=K,V=(n("2625"),Object(y["a"])(Q,k,N,!1,null,null,null)),W=V.exports,X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"modal",attrs:{id:"enterModal"}},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"input-field"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"validate",attrs:{placeholder:"Your name",id:"name",type:"text",required:"required"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),n("label",{attrs:{for:"name"}},[e._v("Enter your name")]),n("span",{staticClass:"helper-text",attrs:{"data-error":e.wrong,"data-success":"right"}})])]),n("div",{staticClass:"modal-footer"},[n("button",{staticClass:"waves-effect waves-green btn-flat",on:{click:function(t){return e.sendName(e.name)}}},[e._v("Ok")])])])},Z=[],ee=n("4d5c"),te=n.n(ee),ne={data:function(){return{name:"",instance:{},wrong:""}},components:{},methods:{sendName:function(e){try{_(e),this.instance.close()}catch(t){this.wrong=t}}},mounted:function(){var e=document.getElementById("enterModal");te.a.Modal.init(e,{dismissible:!1}),this.instance=te.a.Modal.getInstance(e),this.instance.open()}},se=ne,ae=Object(y["a"])(se,X,Z,!1,null,null,null),oe=ae.exports,re={name:"App",components:{Room:W,RoomList:M,EnterNameModal:oe},mounted:function(){}},ie=re,le=Object(y["a"])(ie,a,o,!1,null,null,null),ce=le.exports;n("dc53");s["a"].config.productionTip=!1,new s["a"]({render:function(e){return e(ce)}}).$mount("#app")},"62ef":function(e,t,n){},b58e:function(e,t,n){},dad9:function(e,t,n){},e430:function(e,t,n){"use strict";var s=n("4f84"),a=n.n(s);a.a}});
//# sourceMappingURL=app.15b31174.js.map