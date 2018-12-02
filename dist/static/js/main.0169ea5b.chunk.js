(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{193:function(e,t,a){},210:function(e,t,a){e.exports=a(433)},215:function(e,t,a){},371:function(e,t,a){},392:function(e,t){var a={cart:[],Item:function(e,t,a){this.name=e,this.price=t,this.count=a},addItemToCart:function(e,t,n){for(var r in this.cart)if(this.cart[r].name===e)return this.cart[r].count+=n,void this.saveCart();var c=new a.Item(e,t,n);this.cart.push(c),this.saveCart()},setCountForItem:function(e,t){for(var a in this.cart)if(this.cart[a].name===e){this.cart[a].count=t;break}this.saveCart()},removeItemFromCart:function(e){for(var t in this.cart)if(this.cart[t].name===e){this.cart[t].count--,0===this.cart[t].count&&this.cart.splice(t,1);break}this.saveCart()},removeItemFromCartAll:function(e){for(var t in this.cart)if(this.cart[t].name===e){this.cart.splice(t,1);break}this.saveCart()},clearCart:function(){a.cart=[],this.saveCart()},totalItemCount:function(){var e=0;for(var t in this.cart)e+=this.cart[t].count;return e},totalCostCount:function(){var e=0;for(var t in this.cart)e+=this.cart[t].price*this.cart[t].count;return e.toFixed(2)},listCart:function(){var e=[];for(var t in this.cart){var a=this.cart[t],n={};for(var r in a)n[r]=a[r];n.total=(n.price*n.count).toFixed(2),e.push(n)}return e},saveCart:function(){localStorage.setItem("shoppingCart",JSON.stringify(this.cart))},loadCart:function(){JSON.parse(localStorage.getItem("shoppingCart"))}};a.saveCart(),a.loadCart()},393:function(e,t,a){},433:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(205),i=a.n(c),o=(a(215),a(6)),s=a(7),l=a(9),u=a(8),m=a(10),h=a(436),d=a(438),p=a(434),f=a(222),E=a(435),v=a(14),b=Object(v.b)(null,function(e){return{signOut:function(){return e(function(e,t,a){(0,a.getFirebase)().auth().signOut().then(function(){e({type:"SIGNOUT_SUCCESS"})})})}}})(function(e){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(E.a,{to:"/createproject"},"New Project")),r.a.createElement("li",null,r.a.createElement("a",{onClick:e.signOut},"Sign Out")),r.a.createElement("li",null,r.a.createElement(E.a,{to:"/",className:"btn btn-floating blue lighten-1"},e.profile.initials)))}),g=function(){return r.a.createElement("ul",{className:"right hide-on-med-and-down"},r.a.createElement("li",null,r.a.createElement(E.a,{to:"/signup"},"Sign Up")),r.a.createElement("li",null,r.a.createElement(E.a,{to:"/signin"},"Sign In")),r.a.createElement("li",null,r.a.createElement(E.a,{to:"/about"},"About")),r.a.createElement("li",null,r.a.createElement(E.a,{to:"/fetchdata"},"API Consumption")),r.a.createElement("li",null,r.a.createElement(E.a,{to:"/fetchdatatwo"},"API Consumption Two")),r.a.createElement("li",null,r.a.createElement(E.a,{to:"/webshop"},"Webshop")))},C=Object(v.b)(function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}})(function(e){var t=e.auth,a=e.profile,n=t.uid?r.a.createElement(b,{profile:a}):r.a.createElement(g,null);return r.a.createElement("nav",{className:"nav-wrapper green darken-3"},r.a.createElement("div",{className:"container"},r.a.createElement(f.a,{to:"/",className:"brand-logo"},"EasyPlanner"),n))}),N=a(44),j=a.n(N),O=function(e){var t=e.notifications;return r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"card-title"},"Notifications"),r.a.createElement("ul",{className:"notifications"},t&&t.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("span",{className:"green-text"}," ",e.user," "),r.a.createElement("span",null," ",e.content," "),r.a.createElement("div",{className:"grey-text note-date"},r.a.createElement("span",null,j()(e.time.toDate()).fromNow())))})))))},w=function(e){var t=e.project;return r.a.createElement("div",{className:"card z-depth-0 project-summary"},r.a.createElement("div",{className:"card-content green-text text-darken-3"},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("p",null,t.content),r.a.createElement("p",null,"Posted by ",t.authorFirstName," ",t.authorLastName),r.a.createElement("p",{className:"green-text"},j()(t.createdAt.toDate()).calendar())))},y=function(e){var t=e.projects;return r.a.createElement("div",{className:"project-list section"},t&&t.map(function(e){return r.a.createElement(f.a,{to:"/project/"+e.id,key:e.id},r.a.createElement(w,{project:e}))}))},S=a(25),I=a(19),k=a(437),F=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.projects,a=e.auth,n=e.notifications;return a.uid?r.a.createElement("div",{className:"dashboard container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6"},r.a.createElement(y,{projects:t})),r.a.createElement("div",{className:"col s12 m5 offset-m1"},r.a.createElement(O,{notifications:n})))):r.a.createElement(k.a,{to:"/signin"})}}]),t}(n.Component),R=Object(I.d)(Object(v.b)(function(e){return console.log(e),{projects:e.firestore.ordered.projects,auth:e.firebase.auth,notifications:e.firestore.ordered.notifications}}),Object(S.firestoreConnect)([{collection:"projects",orderedBy:["createdAt","desc"]},{collection:"notifications",limit:3,orderedBy:["time","desc"]}]))(F),A=Object(I.d)(Object(v.b)(function(e,t){var a=t.match.params.id,n=e.firestore.data.projects;return{project:n?n[a]:null,auth:e.firebase.auth}}),Object(S.firestoreConnect)([{collection:"projects"}]))(function(e){var t=e.project;return e.auth.uid?t?r.a.createElement("div",{className:"container section project-details"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},t.title," "),r.a.createElement("p",null,t.content)),r.a.createElement("div",{className:"card-action grey lighten-4 grey-text"},r.a.createElement("div",null,"Posted by ",t.authorFirstName," ",t.authorLastName),r.a.createElement("div",null," ",j()(t.createdAt.toDate()).calendar())))):r.a.createElement("div",{className:"conatainer center"},r.a.createElement("p",null,"No project posted yet!!!")):r.a.createElement(k.a,{to:"/signin"})}),P=a(29),x=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.handleChange=function(e){a.setState(Object(P.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.signIn(a.state)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?r.a.createElement(k.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:"white",onSubmit:this.handleSubmit},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign In"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn green lighten-1 z-depth-0"},"Sign In"),r.a.createElement("div",{className:"red-text center"},t?r.a.createElement("p",null,t):null))))}}]),t}(n.Component),T=Object(v.b)(function(e){return{authError:e.auth.authError,auth:e.firebase.auth}},function(e){return{signIn:function(t){return e(function(e){return function(t,a,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(e.email,e.password).then(function(){t({type:"LOGIN_SUCCESS"})}).catch(function(e){t({type:"LOGIN_ERROR",err:e})})}}(t))}}})(x),U=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",firstName:"",lastName:""},a.handleChange=function(e){a.setState(Object(P.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),console.log(a.state),a.props.signUp(a.state)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.auth;e.authError;return t.uid?r.a.createElement(k.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:"white",onSubmit:this.handleSubmit},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign Up"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"firstName"},"First Name"),r.a.createElement("input",{type:"text",id:"firstName",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"lastName"},"Last Name"),r.a.createElement("input",{type:"text",id:"lastName",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn green lighten-1 z-depth-0"},"Sign Up"))))}}]),t}(n.Component),D=Object(v.b)(function(e){return{auth:e.firebase.auth,authError:e.auth.authError}},function(e){return{signUp:function(t){e(function(e){return function(t,a,n){var r=n.getFirebase,c=n.getFirestore,i=r(),o=c();i.auth().createUserWithEmailAndPassword(e.email,e.password).then(function(t){return o.collection("users").doc(t.user.uid).set({firstName:e.firstName,lastName:e.lastName,initials:e.firstName[0]+e.lastName[0]})}).then(function(){t({type:"SIGNUP_SUCCESS"}).catch(function(e){t({type:"SIGNUP_ERROR",err:e})})})}}(t))}}})(U),_=a(38),L=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",content:""},a.handleChange=function(e){a.setState(Object(P.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.createProject(a.state),a.props.history.push("/")},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.props.auth.uid?r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:"white",onSubmit:this.handleSubmit},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Create a New Project"),r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{type:"text",id:"title",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"title"},"Project Title")),r.a.createElement("div",{className:"input-field"},r.a.createElement("textarea",{id:"content",className:"materialize-textarea",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"content"},"Project Content")),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn green lighten-1"},"Create")))):r.a.createElement(k.a,{to:"/signin"})}}]),t}(n.Component),J=Object(v.b)(function(e){return{auth:e.firebase.auth}},function(e){return{createProject:function(t){return e(function(e){return function(t,a,n){var r=(0,n.getFirestore)(),c=a().firebase.profile,i=a().firebase.auth.uid;r.collection("projects").add(Object(_.a)({},e,{authorFirstName:c.firstName,authorLastName:c.lastName,authorId:i,createdAt:new Date})).then(function(){t({type:"CREATE_PROJECT_SUCCESS"})}).catch(function(e){t({type:"CREATE_PROJECT_ERROR"},e)})}}(t))}}})(L),W=(a(371),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"main"},r.a.createElement("p",null,"This web app is a comnination of multiple small apps to showcase as work sample."))}}]),t}(n.Component)),G=(a(193),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={items:[],isLoaded:!1},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){e.setState({isLoaded:!0,items:t})})}},{key:"render",value:function(){var e=this.state,t=e.isLoaded,a=e.items;return t?r.a.createElement("div",{className:"container main"},r.a.createElement("h4",{className:"center"},"API Consumption"),a.map(function(e){return r.a.createElement("div",{className:"post card"},r.a.createElement("p",{className:"card-content"},"Name: ",e.name," | Email: ",e.email))})):r.a.createElement("div",null,"Loading...")}}]),t}(n.Component)),K=a(208),z=a.n(K),B=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={posts:[]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;z.a.get("https://jsonplaceholder.typicode.com/posts").then(function(t){e.setState({posts:t.data.slice(0,10)})})}},{key:"render",value:function(){var e=this.state.posts,t=e.length?e.map(function(e){return r.a.createElement("div",{className:"post card",key:e.id},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},e.title),r.a.createElement("p",null,e.body)))}):r.a.createElement("div",{className:"center"},"No posts yet");return r.a.createElement("div",{className:"container main"},r.a.createElement("h4",{className:"center"},"API Consumption Two"),t)}}]),t}(n.Component),M=a(12),q=a.n(M),H=(a(392),a(393),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e={};function t(){var t=e.listCart(),a="";for(var n in t)a+="<li>"+t[n].name+" <input class='item-count'type='number' data-name='"+t[n].name+"' value='"+t[n].count+"'></input>"+t[n].count+" X "+t[n].price+" = "+t[n].total+"<button class='add-item' data-name='"+t[n].name+"'> + </button><button class='subtract-item' data-name='"+t[n].name+"'> - </button><button class='remove-item' data-name='"+t[n].name+"'>Remove</button></li>";q()("#show-cart").html(a),q()("#count-item").html(e.totalItemCount()),q()("#total-cart").html(e.totalCostCount())}return e.cart=[],e.Item=function(e,t,a){this.name=e,this.price=t,this.count=a},e.addItemToCart=function(t,a,n){for(var r in this.cart)if(this.cart[r].name===t)return this.cart[r].count+=n,void this.saveCart();var c=new e.Item(t,a,n);this.cart.push(c),this.saveCart()},e.setCountForItem=function(e,t){for(var a in this.cart)if(this.cart[a].name===e){this.cart[a].count=t;break}this.saveCart()},e.removeItemFromCart=function(e){for(var t in this.cart)if(this.cart[t].name===e){this.cart[t].count--,0===this.cart[t].count&&this.cart.splice(t,1);break}this.saveCart()},e.removeItemFromCartAll=function(e){for(var t in this.cart)if(this.cart[t].name===e){this.cart.splice(t,1);break}this.saveCart()},e.clearCart=function(){e.cart=[],this.saveCart()},e.totalItemCount=function(){var e=0;for(var t in this.cart)e+=this.cart[t].count;return e},e.totalCostCount=function(){var e=0;for(var t in this.cart)e+=this.cart[t].price*this.cart[t].count;return e.toFixed(2)},e.listCart=function(){var e=[];for(var t in this.cart){var a=this.cart[t],n={};for(var r in a)n[r]=a[r];n.total=(n.price*n.count).toFixed(2),e.push(n)}return e},e.saveCart=function(){localStorage.setItem("shoppingCart",JSON.stringify(this.cart))},e.loadCart=function(){JSON.parse(localStorage.getItem("shoppingCart"))},e.saveCart(),e.loadCart(),q()(".add-to-cart").click(function(a){a.preventDefault();var n=q()(this).attr("data-name"),r=Number(q()(this).attr("data-price"));e.addItemToCart(n,r,1),t()}),q()("#clear-cart").click(function(a){e.clearCart(),t()}),q()("#show-cart").on("click",".add-item",function(a){var n=q()(this).attr("data-name");e.addItemToCart(n,0,1),t()}),q()("#show-cart").on("click",".subtract-item",function(a){var n=q()(this).attr("data-name");e.removeItemFromCart(n),t()}),q()("#show-cart").on("click",".remove-item",function(a){var n=q()(this).attr("data-name");e.removeItemFromCartAll(n),t()}),q()("#show-cart").on("change",".item-count",function(){var a=q()(this).attr("data-name"),n=Number(q()(this).val());e.setCountForItem(a,n),t()}),r.a.createElement("div",{className:"shop-items container"},r.a.createElement("div",{className:"post"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{class:"add-to-cart",href:"#","data-name":"T-shirt","data-price":"99.99"},"T-shirt DKK 99.99")),r.a.createElement("li",null,r.a.createElement("a",{class:"add-to-cart",href:"#","data-name":"Shirt","data-price":"199.99"},"Shirt DKK 199.99")),r.a.createElement("li",null,r.a.createElement("a",{class:"add-to-cart",href:"#","data-name":"Jeans","data-price":"399.99"},"Jeans DKK 399.99")),r.a.createElement("li",null,r.a.createElement("a",{class:"add-to-cart",href:"#","data-name":"Jacket","data-price":"799.99"},"Jacket DKK 799.99"))),r.a.createElement("button",{id:"clear-cart"},"Clear Cart")),r.a.createElement("div",{className:"post"},r.a.createElement("ul",{id:"show-cart"}),r.a.createElement("div",null,"Total Number of Items: ",r.a.createElement("span",{id:"count-item"})),r.a.createElement("div",null,"Total Cost: DKK ",r.a.createElement("span",{id:"total-cart"}))))}}]),t}(n.Component)),X=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(C,null),r.a.createElement(d.a,null,r.a.createElement(p.a,{exact:!0,path:"/",component:R}),r.a.createElement(p.a,{path:"/project/:id",component:A}),r.a.createElement(p.a,{path:"/signin",component:T}),r.a.createElement(p.a,{path:"/signup",component:D}),r.a.createElement(p.a,{path:"/createproject",component:J}),r.a.createElement(p.a,{path:"/about",component:W}),r.a.createElement(p.a,{path:"/fetchdata",component:G}),r.a.createElement(p.a,{path:"/fetchdatatwo",component:B}),r.a.createElement(p.a,{path:"/webshop",component:H}))))}}]),t}(n.Component),Y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function $(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");Y?(!function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Q(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):Q(t,e)})}}function Q(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var V={authError:null},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return console.log("login error"),Object(_.a)({},e,{authError:"Login failed"});case"LOGIN_SUCCESS":return console.log("login success"),Object(_.a)({},e,{authError:null});case"SIGNOUT_SUCCESS":return console.log("logout success"),e;case"SIGNUP_SUCCESS":return console.log("signup success"),Object(_.a)({},e,{authError:null});case"SIGNUP_EROR":return Object(_.a)({},e,{authError:t.err.message});default:return e}},ee={projects:[{id:"1",title:"Hill Track",content:"Travel to hill track area"},{id:"2",title:"Deep Ocean",content:"Dive into the deep ocean"},{id:"3",title:"Snow Ball",content:"Make some snow balls"}]},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":return console.log("project created",t.project),e;case"CREATE_PROJECT_ERROR":console.log("Project created error",t.err);break;default:return e}return e},ae=a(58),ne=Object(I.c)({auth:Z,project:te,firestore:ae.firestoreReducer,firebase:S.firebaseReducer}),re=a(209),ce=a(84),ie=a.n(ce);a(426),a(431);ie.a.initializeApp({apiKey:"AIzaSyA9oYMpWq7GwD-2fo4EcWj-NijNTMWoodI",authDomain:"hill-track.firebaseapp.com",databaseURL:"https://hill-track.firebaseio.com",projectId:"hill-track",storageBucket:"hill-track.appspot.com",messagingSenderId:"309731141155"}),ie.a.firestore().settings({timestampsInSnapshots:!0});var oe=ie.a,se=Object(I.e)(ne,Object(I.d)(Object(I.a)(re.a.withExtraArgument({getFirestore:ae.getFirestore,getFirebase:S.getFirebase})),Object(ae.reduxFirestore)(oe),Object(S.reactReduxFirebase)(oe,{useFirestoreForProfile:!0,userProfile:"users",attachAuthIsReady:!0})));se.firebaseAuthIsReady.then(function(){i.a.render(r.a.createElement(v.a,{store:se},r.a.createElement(X,null)),document.getElementById("root")),$()})}},[[210,2,1]]]);
//# sourceMappingURL=main.0169ea5b.chunk.js.map