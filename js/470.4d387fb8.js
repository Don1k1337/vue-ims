"use strict";(self["webpackChunkvue_ims_app"]=self["webpackChunkvue_ims_app"]||[]).push([[470],{34470:(e,t,n)=>{n.r(t),n.d(t,{default:()=>H});n(68309);var u=n(73396),a=n(87139),r=n(49242),s=(0,u._)("strong",null,"Client name",-1),l=(0,u._)("strong",null,"Phone",-1),p=(0,u._)("strong",null,"Amount",-1),o=(0,u._)("strong",null,"Status",-1),i={class:"form-control"},c=(0,u._)("label",{for:"status"},"Status",-1),d=(0,u._)("option",{value:"done"},"Done",-1),v=(0,u._)("option",{value:"cancelled"},"Canceled",-1),h=(0,u._)("option",{value:"active"},"Active",-1),f=(0,u._)("option",{value:"pending"},"Pending",-1),w=[d,v,h,f],m={key:2,class:"text-center text-white"};function _(e,t,n,d,v,h){var f=(0,u.up)("app-loader"),_=(0,u.up)("app-status"),k=(0,u.up)("app-page");return(0,u.wg)(),(0,u.iD)("div",null,[d.loading?((0,u.wg)(),(0,u.j4)(f,{key:0})):d.request?((0,u.wg)(),(0,u.j4)(k,{key:1,back:"",title:"Request"},{default:(0,u.w5)((function(){return[(0,u._)("p",null,[s,(0,u.Uk)(": "+(0,a.zw)(d.request.name),1)]),(0,u._)("p",null,[l,(0,u.Uk)(": "+(0,a.zw)(d.request.phone),1)]),(0,u._)("p",null,[p,(0,u.Uk)(": "+(0,a.zw)(d.currency(d.request.amount)),1)]),(0,u._)("p",null,[o,(0,u.Uk)(": "),(0,u.Wm)(_,{type:d.request.status},null,8,["type"])]),(0,u._)("div",i,[c,(0,u.wy)((0,u._)("select",{id:"status","onUpdate:modelValue":t[0]||(t[0]=function(e){return d.status=e})},w,512),[[r.bM,d.status]])]),(0,u._)("button",{class:"btn danger",onClick:t[1]||(t[1]=function(){return d.remove&&d.remove.apply(d,arguments)})},"Delete"),d.hasChanges?((0,u.wg)(),(0,u.iD)("button",{key:0,class:"btn",onClick:t[2]||(t[2]=function(){return d.update&&d.update.apply(d,arguments)})},"Update")):(0,u.kq)("",!0)]})),_:1})):((0,u.wg)(),(0,u.iD)("h3",m," Request with the ID = "+(0,a.zw)(d.id)+" not found ",1))])}var k=n(95082),g=n(50124),y=n(48534),Z=(n(57658),n(29219)),q=n(22483),b=n(44870),x=n(20065),C=n(1496),A=n(30722),D=n(70742);const U={setup:function(){var e=(0,b.iH)(!0),t=(0,q.yj)(),n=(0,q.tv)(),a=(0,x.oR)(),r=(0,b.iH)(),s=(0,b.iH)({});(0,u.bv)((0,y.Z)((0,g.Z)().mark((function n(){var u;return(0,g.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.value=!0,n.next=3,a.dispatch("request/loadById",t.params.id);case 3:s.value=n.sent,r.value=null===(u=s.value)||void 0===u?void 0:u.status,e.value=!1;case 6:case"end":return n.stop()}}),n)}))));var l=(0,u.Fl)((function(){return s.value.status!==r.value})),p=function(){var e=(0,y.Z)((0,g.Z)().mark((function e(){return(0,g.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.dispatch("request/remove",t.params.id);case 2:return e.next=4,n.push("/");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,y.Z)((0,g.Z)().mark((function e(){var n;return(0,g.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=(0,k.Z)((0,k.Z)({},s.value),{},{status:r.value,id:t.params.id}),e.next=3,a.dispatch("request/update",n);case 3:s.value.status=r.value;case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{loading:e,request:s,id:t.params.id,currency:D.A,remove:p,update:o,status:r,hasChanges:l}},components:{AppPage:Z.Z,AppStatus:C.Z,AppLoader:A.Z}};var z=n(40089);const j=(0,z.Z)(U,[["render",_]]),H=j}}]);
//# sourceMappingURL=470.4d387fb8.js.map