(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{261:function(e,t,n){e.exports=n(532)},511:function(e,t,n){},532:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(241),i=n.n(r),o=n(81),c=n.n(o),u=n(157),d=n(50),l=n(41),m=n(260),p=(n(500),n(161)),f=n.n(p),h=(n(511),n(61)),b=n.n(h);var w=function(e){var t=e.tempUUID,n=e.isNew,r=(Object(l.d)(),Object(a.useState)(null)),i=Object(d.a)(r,2),o=i[0],h=i[1],w=Object(a.useState)(!1),v=Object(d.a)(w,2),O=v[0],g=v[1],j=Object(a.useState)(""),E=Object(d.a)(j,2),S=E[0],y=E[1],k=Object(a.useState)({}),D=Object(d.a)(k,2),N=D[0],x=D[1],I=Object(a.useState)({}),T=Object(d.a)(I,2),U=T[0],C=T[1],Y=Object(a.useState)({}),B=Object(d.a)(Y,2),M=B[0],q=B[1];function F(e){var a=function(e){var n={};return Object.keys(e).forEach((function(t){isNaN(t)&&(n[t]=e[t])})),e.identifier||(n.identifier=t.toString()),n}(e.formData);o.length>0&&!n?b.a.put("/api/1/metastore/schemas/dataset/items/"+o,a).then((function(){g(!0),y("The dataset with identifier "+o+" has been updated.")})).catch((function(e){e.response&&y(e.response.data.message)})):b.a.post("/api/1/metastore/schemas/dataset/items",a).then((function(e){var t=e.data.identifier;h(t),y("A dataset with the identifier "+t+" has been created.")})).catch((function(e){e.response&&y(e.response.data.message)})),window.scrollTo(0,0)}Object(a.useEffect)((function(){function e(){return(e=Object(u.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("/api/1/metastore/schemas/dataset").then((function(e){var t=e.data;t.required=t.required.filter((function(e){return"identifier"!==e})),delete t.properties.identifier.minLength,x(t)}));case 2:return e.sent,e.next=5,b.a.get("/api/1/metastore/schemas/dataset.ui");case 5:n=e.sent,C(n.data),h(t.toString());case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(a.useEffect)((function(){function e(){return(e=Object(u.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(g(!1),!o||n){e.next=6;break}return e.next=4,b.a.get("/api/1/metastore/schemas/dataset/items/"+o);case 4:t=e.sent,q(t.data);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[o,O]),Object(a.useEffect)((function(){S.length>0&&p.toast.success(S)}),[S]);var H={DescriptionField:function(e){var t=e.id,n=e.description;return s.a.createElement("div",{className:"dc-field-label",id:t,dangerouslySetInnerHTML:{__html:n}})}};return s.a.createElement(s.a.Fragment,null,s.a.createElement(f.a,{timerExpires:1e4,position:"top-left",pauseOnHover:!0,intent:"success"}),s.a.createElement("button",{className:"btn btn-default",type:"button",onClick:function(e){return window.location.href="/admin/content/datasets"}},"Back to Datasets"),s.a.createElement(m.a,{id:"dc-json-editor",schema:N,fields:H,formData:M,uiSchema:U,autoComplete:"on",transformErrors:function(e){return e.map((function(e){return"pattern"===e.name&&".contactPoint.hasEmail"===e.property&&(e.message="Enter a valid email address."),"pattern"===e.name&&e.property.includes(".distribution")&&e.property.includes(".isssued")&&(e.message="Dates should be ISO 8601 of least resolution. In other words, as much of YYYY-MM-DDThh:mm:ss.sTZD as is relevant to this dataset."),e}))},onSubmit:function(e){y(""),F(e)},onError:function(e){window.scrollTo(0,0),console.error(e)}},s.a.createElement("div",{className:"dc-form-actions"},s.a.createElement("button",{className:"btn btn-success",type:"submit"},"Submit"),s.a.createElement("button",{className:"btn btn-default",type:"button",onClick:function(e){return window.location.href="/admin/content/datasets"}},"Cancel"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var v=n(156),O=window.drupalSettings.tempUUID,g=window.drupalSettings.isNew;i.a.render(s.a.createElement(v.a,null,s.a.createElement(w,{tempUUID:O,isNew:g})),document.getElementById("app")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[261,1,2]]]);
//# sourceMappingURL=main.c29fc085.chunk.js.map