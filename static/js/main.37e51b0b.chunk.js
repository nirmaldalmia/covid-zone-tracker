(this["webpackJsonpcovid-zone-tracker"]=this["webpackJsonpcovid-zone-tracker"]||[]).push([[0],{128:function(e,t,a){e.exports=a(233)},133:function(e,t,a){},134:function(e,t,a){},135:function(e,t,a){},136:function(e,t,a){},205:function(e,t,a){},206:function(e,t,a){},233:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),o=a.n(c),l=(a(133),a(94)),i=a(95),s=a(126),m=a(122),u=a(240),d=a(237),f=a(236),h=a(241),E=a(244),p=a(242),g=(a(134),a(135),function(e){return r.a.createElement("div",{className:"dot-container",style:e.containerStyle},r.a.createElement("div",{className:"dot "+e.color,style:e.dotStyle}),r.a.createElement("p",{className:"dot-text",style:e.textStyle},e.text))}),v=a(239),y=(a(136),function(e){return r.a.createElement(v.b,{size:"small",bordered:!0,dataSource:e.data,renderItem:function(t){return r.a.createElement(v.b.Item,{onClick:function(){return e.handleClick(t)},className:"search-item"},function(e,t){var a=e.split(new RegExp("(".concat(t,")"),"gi"));return r.a.createElement("span",null," ",a.map((function(e,a){return r.a.createElement("span",{key:a,style:e.toLowerCase()===t.toLowerCase()?{fontWeight:"bold"}:{}},e)}))," ")}(t.district,e.query||""))}})}),w=(a(205),a(243)),b=function(e){var t=e.data,a=t.district,n=t.state,c=t.zone,o=t.source;return r.a.createElement(f.a,{md:12,sm:24},r.a.createElement(d.a,{className:"details-container"},r.a.createElement(f.a,{md:6,sm:12},r.a.createElement("p",{className:"label"},"City")),r.a.createElement("p",{style:{marginBottom:0,lineHeight:"30px"}},a)),r.a.createElement(d.a,{className:"details-container"},r.a.createElement(f.a,{md:6,sm:12},r.a.createElement("p",{className:"label"},"State")),r.a.createElement("p",{className:"state"},n)),r.a.createElement(d.a,{className:"details-container"},r.a.createElement(f.a,{md:6,sm:12},r.a.createElement("p",{className:"label"},"Zone")),r.a.createElement(g,{color:c.toLowerCase(),text:"".concat(c," zone"),containerStyle:{marginBottom:0},textStyle:{fontWeight:500,fontSize:"20px"}})),r.a.createElement(d.a,null,r.a.createElement("a",{className:"know-more",target:"_blank",rel:"noopener noreferrer",href:o},"Know more ",r.a.createElement(w.a,{className:"arrow-icon"}))))},k=a(238),S=[{name:"Mumbai",zone:"red",district:"Mumbai"},{name:"Delhi",zone:"red",district:"New Delhi"},{name:"Hyderabad",zone:"red",district:"Hyderabad"},{name:"Bengaluru",zone:"red",district:"Bengaluru Urban"},{name:"Kolkata",zone:"red",district:"Kolkata"},{name:"Pune",zone:"red",district:"Pune"},{name:"Lucknow",zone:"red",district:"Lucknow"},{name:"Chennai",zone:"red",district:"Chennai"}],x=(a(206),function(e){return r.a.createElement(f.a,{md:12,sm:24},r.a.createElement("h6",{className:"popular-title"},"POPULAR CITIES"),r.a.createElement(k.a,{style:{border:"1px solid rgba(255, 255, 255, 0.12)"}}),r.a.createElement(d.a,null,S.map((function(t){return r.a.createElement(f.a,{lg:6,md:8,sm:12,key:t.name},r.a.createElement("div",{className:"popular-item",onClick:function(){return e.handleClick(t.district)}},r.a.createElement(g,{color:t.zone,text:t.name})))}))))}),z=u.a.Title,N=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={query:"",data:[],filteredData:[],showSearcResults:!1,selectedItem:null},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.covid19india.org/zones.json").then((function(e){return e.json()})).then((function(t){e.setState({data:t.zones})})).catch((function(e){return console.error(e)}))}},{key:"handleChange",value:function(e){var t=e.target.value;this.setState({query:t,showSearcResults:!0});var a=new RegExp("(".concat(t,")"),"i"),n=this.state.data.filter((function(e){return a.test(e.district)}));console.log(n),n.length>10&&n.splice(10),this.setState({filteredData:n})}},{key:"handleClear",value:function(){this.setState({query:"",showSearcResults:!1,selectedItem:null})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement(d.a,null,r.a.createElement(f.a,{lg:12,md:18,sm:24,className:"content"},r.a.createElement("div",null,r.a.createElement(z,{className:"heading"},"Covid Zone Tracker"),r.a.createElement("p",{className:"sub-text subtitle"},"Track which zone your family/loved ones are in"),r.a.createElement(h.a,{size:"large",placeholder:"Enter city/district name",onChange:function(t){return e.handleChange(t)},value:this.state.query,prefix:r.a.createElement(E.a,{style:{fontSize:"24px",color:"rgba(255, 255, 255, 0.3)",marginLeft:"8px"}}),className:"searchbar",suffix:this.state.query?r.a.createElement(p.a,{style:{fontSize:"24px",color:"rgba(255, 255, 255, 0.3)",marginRight:"8px"},onClick:function(){return e.handleClear()}}):null})),!!this.state.query&&this.state.showSearcResults&&r.a.createElement("div",{className:"results-container"},r.a.createElement(y,{data:this.state.filteredData,query:this.state.query,handleClick:function(t){console.log(t),e.setState({showSearcResults:!1,query:t.district,selectedItem:t})}})))),r.a.createElement(d.a,null,this.state.selectedItem?r.a.createElement(b,{data:this.state.selectedItem}):r.a.createElement(x,{handleClick:function(t){var a=e.state.data.filter((function(e){return e.district===t}));e.setState({query:t,selectedItem:a[0]})}})),r.a.createElement(d.a,null,r.a.createElement(f.a,{lg:8,md:16,sm:24,className:"zone-info-container"},r.a.createElement(d.a,null,r.a.createElement(g,{color:"red",text:"Red zone",textStyle:{fontWeight:500}}),r.a.createElement("p",{className:"sub-text",style:{fontSize:"14px"}},"Most active cases")),r.a.createElement(d.a,null,r.a.createElement(g,{color:"orange",text:"Orange zone",textStyle:{fontWeight:500}}),r.a.createElement("p",{className:"sub-text",style:{fontSize:"14px"}},"Less active cases")),r.a.createElement(d.a,null,r.a.createElement(g,{color:"green",text:"Green zone",textStyle:{fontWeight:500}}),r.a.createElement("p",{className:"sub-text",style:{fontSize:"14px"}},"Very few active cases"))))))}}]),a}(r.a.Component),C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/covid-zone-tracker",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/covid-zone-tracker","/service-worker.js");C?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):R(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):R(t,e)}))}}()}},[[128,1,2]]]);
//# sourceMappingURL=main.37e51b0b.chunk.js.map