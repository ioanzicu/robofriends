(window.webpackJsonprobofriends=window.webpackJsonprobofriends||[]).push([[0],{20:function(e,t,n){e.exports=n(31)},29:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(4),c=n.n(a),i=n(3),s=n(11),l=n(5),u=n(13),d=(n(29),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function h(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(30);var f=n(14);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(n,!0).forEach((function(t){Object(f.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p={searchField:""},m={isPending:!1,robots:[],error:""},E=function(e){var t=e.id,n=e.name,r=e.email;return o.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},o.a.createElement("img",{src:"https://robohash.org/".concat(t,"?size=250x250"),alt:"robots"}),o.a.createElement("div",null,o.a.createElement("h2",null,n),o.a.createElement("p",null,r)))},v=function(e){var t=e.robots;return console.log("CardList"),o.a.createElement("div",null,t.map((function(e,n){return o.a.createElement(E,{key:t[n].id,id:t[n].id,name:t[n].name,email:t[n].email})})))},w=function(e){var t=e.searchField,n=e.searchChange;return console.log("SearchBox"),o.a.createElement("div",{className:"pb4"},o.a.createElement("input",{"aria-label":"Search Robots",value:t,onChange:n,className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Robot"}))},O=function(e){return o.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"500px"}},e.children)},y=n(15),R=n(16),S=n(18),j=n(17),C=n(19),P=function(e){function t(){var e,n;Object(y.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(S.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(o)))).state={hasError:!1},n}return Object(C.a)(t,e),Object(R.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,this.state.hasError?o.a.createElement("h1",null,"Ooooop. Something went wrong..."):this.props.children)}}]),t}(r.Component),_=Object(r.memo)((function(e){var t=e.title;return console.log("Header"),o.a.createElement("h1",{id:"title",className:"f1"},t)}),(function(e,t){return e.title===t.title})),k=Object(l.b)((function(e){return{searchField:e.searchRobotsReducer.searchField,robots:e.requestRobotsReducer.robots,isPending:e.requestRobotsReducer.isPending,error:e.requestRobotsReducer.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}))}}}))((function(e){var t=e.searchField,n=e.onSearchChange,a=e.robots,c=e.isPending,i=e.onRequestRobots;Object(r.useEffect)((function(){i()}),[i]);var s=a.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})),l=c?"Loading...":"Robo Friends";return o.a.createElement("div",{className:"tc"},o.a.createElement(_,{title:l}),o.a.createElement(w,{searchChange:n}),o.a.createElement(O,null,o.a.createElement(P,null,o.a.createElement(v,{robots:s}))))})),T=Object(s.createLogger)(),N=Object(i.c)({searchRobotsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return g({},e,{searchField:t.payload});default:return e}},requestRobotsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return g({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return g({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return g({},e,{error:t.payload,isPending:!1});default:return e}}}),A=Object(i.d)(N,Object(i.a)(u.a,T));c.a.render(o.a.createElement(l.a,{store:A},o.a.createElement(k,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/robofriends","/service-worker.js");d?(!function(e,t){fetch(e).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):h(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):h(t,e)}))}}()}},[[20,1,2]]]);
//# sourceMappingURL=main.2478b198.chunk.js.map