(this["webpackJsonppoke-api"]=this["webpackJsonppoke-api"]||[]).push([[0],{131:function(e,n,t){},132:function(e,n,t){"use strict";t.r(n);var a,c,r,s,i,o,d=t(0),l=t.n(d),j=t(9),p=t.n(j),b=t(27),g=t(21),u=t(28),h=t(165),O=t(37),f=t(3),x=Object(h.a)((function(e){return{margin:{margin:e.spacing(1)}}})),m=function(e){var n=Object(d.useState)(""),t=Object(g.a)(n,2);t[0],t[1],x();return Object(f.jsx)(v,{children:Object(f.jsx)("div",{className:"container",children:Object(f.jsx)(k,{children:Object(f.jsx)(O.b,{to:"/",children:Object(f.jsx)(y,{children:Object(f.jsx)("img",{src:"https://otvet.imgsmail.ru/download/u_ff4c7143f50fcbfe4b5d5e020e0d1ff2_800.png",alt:""})})})})})})},v=u.a.header(a||(a=Object(b.a)(["\n  background: transparent;\n  margin-bottom: -80px;\n"]))),k=u.a.div(c||(c=Object(b.a)(["\n  height: 80px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),y=u.a.div(r||(r=Object(b.a)(["\n  img {\n    width: 70px;\n    height: 70px;\n    border-radius: 50%;\n  }\n"]))),_=t(11),S=t(12),N=t(26),w=t(49),E=t.n(w),I=t(62),L=t(63),M=t.n(L),T=t(170),A=t(59),C=t.n(A),P=t(171),D=t(136),U=t(82),G=t.n(U),K=t(169),H=(Object(h.a)((function(e){return{margin:{margin:e.spacing(1)}}})),function(e){var n=Object(d.useState)(""),t=Object(g.a)(n,2),a=t[0],c=t[1],r=Object(N.c)((function(e){return e.lists})),s=Object(N.b)(),i=function(e){s(function(e){return function(){var n=Object(I.a)(E.a.mark((function n(t){var a,c;return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t({type:"LISTS_LOADING"}),a=15*e-15,n.next=6,M.a.get("https://pokeapi.co/api/v2/pokemon?limit=".concat(15,"&offset=").concat(a));case 6:c=n.sent,t({type:"LISTS_SUCCESS",payload:c.data}),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),t({type:"LISTS_FAIL"});case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}()}(e))};return Object(d.useEffect)((function(){i(1)}),[]),Object(f.jsxs)(F,{children:[Object(f.jsxs)("h1",{children:["DATA FETCHING WITH REDUX THUNK in"," ",Object(f.jsx)("a",{target:"_blank",href:"https://pokeapi.co/",children:"pokeapi.co"})]}),Object(f.jsxs)("div",{className:"container",children:[function(){var n;return r.data?Object(f.jsxs)(z,{children:[Object(f.jsxs)("form",{style:{margin:"0 auto",textAlign:"center"},children:[Object(f.jsx)(T.a,(n={style:{width:"60%",marginRight:"50px"}},Object(S.a)(n,"style",{background:"#fff"}),Object(S.a)(n,"id","filled-secondary"),Object(S.a)(n,"variant","outlined"),Object(S.a)(n,"color","secondary"),Object(S.a)(n,"placeholder","Search for pokemons"),Object(S.a)(n,"value",a),Object(S.a)(n,"onChange",(function(e){return c(e.target.value)})),Object(S.a)(n,"InputProps",{startAdornment:Object(f.jsx)(P.a,{position:"start",children:Object(f.jsx)(C.a,{})})}),n)),Object(f.jsx)(K.a,{disableElevation:!0,variant:"contained",color:"primary",children:Object(f.jsx)(D.a,{onClick:function(){return e.history.push("/pokemon/".concat(a))},children:"Search"})})]}),r.data.map((function(e,n){return Object(f.jsx)("div",{className:"single_item",children:Object(f.jsxs)("div",{className:"group",children:[Object(f.jsx)("h3",{children:e.name}),Object(f.jsx)(O.b,{to:"/pokemon/".concat(e.name),children:"VIEW"})]})},n)}))]}):r.loading?Object(f.jsx)("h1",{children:"LOADING..."}):r.errorMessage?Object(f.jsx)("h1",{children:r.errorMessage}):Object(f.jsx)("h1",{children:"Unable to Fecth Data"})}(),r.data&&Object(f.jsx)(G.a,{pageCount:Math.ceil(r.count/15),pageRangeDisplayed:2,marginPagesDisplayed:1,onPageChange:function(e){return i(e.selected+1)},activeClassName:"active_paginate"})]})]})}),F=u.a.div(s||(s=Object(b.a)(['\n  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),\n    url("https://wallpapercave.com/wp/wp7308740.jpg");\n  min-height: 100vh;\n  width: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  margin-top: -80px;\n  padding: 130px 0 50px;\n  color: #fff;\n  .active_paginate {\n    background: red;\n  }\n  ul {\n    display: flex;\n    width: 100%;\n    justify-content: space-around;\n    max-width: 90vh;\n    margin: 0 auto;\n    padding-left: 0px;\n    li {\n      list-style: none;\n      padding: 10px;\n      border: 2px solid red;\n      cursor: pointer;\n    }\n  }\n  h1 {\n    text-align: center;\n    text-transform: uppercase;\n    color: #fff;\n    a {\n      color: red;\n    }\n  }\n  .single_item {\n    padding: 10px 20px;\n    border: 2px solid #fff;\n    background: rgba(0, 34, 67, 0.5);\n    transition: all 0.3s ease-in-out;\n    margin: 20px 0;\n    &:hover {\n      transform: scale(1.1);\n      cursor: pointer;\n    }\n    h3 {\n    }\n    .group {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n    }\n    a {\n      /* text-decoration: none; */\n      color: #fff;\n      font-weight: 800;\n    }\n  }\n']))),z=u.a.div(i||(i=Object(b.a)([""]))),R=function(e){var n=Object(N.c)((function(e){return e.singlePokemon})),t=Object(N.b)(),a=e.match.params.pokemon;console.log(n);return Object(d.useEffect)((function(){var e;t((e=a,function(){var n=Object(I.a)(E.a.mark((function n(t){var a;return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t({type:"POKEMON_LOADING"}),n.next=4,M.a.get("https://pokeapi.co/api/v2/pokemon/".concat(e));case 4:a=n.sent,console.log(a),t({type:"POKEMON_SUCCESS",payload:a.data,pokemonName:e}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),t({type:"POKEMON_FAIL"});case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()))}),[]),Object(f.jsx)(W,{children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("h1",{className:"title",children:a}),function(){if(n.isLoading,n.data[a]){var e=n.data[a];return Object(f.jsxs)("div",{className:"single_item",children:[Object(f.jsxs)("div",{className:"weigth",children:["NAME: ",Object(f.jsx)("span",{children:e.name})," "]}),Object(f.jsxs)("div",{className:"weigth",children:["WEIGHT: ",Object(f.jsx)("span",{children:e.weight})," "]}),Object(f.jsxs)("div",{className:"weigth",children:["HEIGHT: ",Object(f.jsx)("span",{children:e.height})," "]}),Object(f.jsx)("h1",{children:"SPRITES"}),Object(f.jsxs)("div",{className:"image_group",children:[Object(f.jsx)("img",{src:e.sprites.back_default,alt:""}),Object(f.jsx)("img",{src:e.sprites.back_female,alt:""}),Object(f.jsx)("img",{src:e.sprites.back_shiny,alt:""}),Object(f.jsx)("img",{src:e.sprites.back_shiny_female,alt:""}),Object(f.jsx)("img",{src:e.sprites.front_default,alt:""}),Object(f.jsx)("img",{src:e.sprites.front_female,alt:""}),Object(f.jsx)("img",{src:e.sprites.front_shiny,alt:""}),Object(f.jsx)("img",{src:e.sprites.front_shiny_female,alt:""})]}),Object(f.jsx)("h1",{children:"STATUS"}),Object(f.jsx)("div",{className:"status_group",children:e.stats.map((function(e){return Object(f.jsxs)("div",{children:[Object(f.jsxs)("span",{children:[" ",e.stat.name]}),": ",e.base_stat]})}))})]})}if(n.errorMessage)return Object(f.jsx)("h1",{children:n.errorMessage})}()]})})},W=u.a.div(o||(o=Object(b.a)(['\n  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),\n    url("https://lastfm.freetls.fastly.net/i/u/ar0/ddd4bab0853c453ec517976f0ac2523b.jpg");\n  min-height: 100vh;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  padding: 130px 0 50px;\n  color: #fff;\n  .image_group {\n    padding: 20px;\n    background: #fff;\n    img {\n    }\n  }\n  .title {\n    text-transform: capitalize;\n    font-weight: 800;\n    color: #fff;\n    background: green;\n    padding: 10px;\n    text-align: center;\n  }\n  .status_group {\n    div {\n      font-size: 20px;\n      span {\n        font-weight: 800;\n        background: green;\n\n        color: #fff;\n      }\n    }\n  }\n  .single_item {\n    .weigth {\n      font-weight: 800;\n      margin: 20px 0;\n      span {\n        background: green;\n        padding: 5px;\n      }\n    }\n  }\n'])));var J=function(){return Object(f.jsxs)(O.a,{children:[Object(f.jsx)(m,{}),Object(f.jsxs)(_.c,{children:[Object(f.jsx)(_.a,{exact:!0,path:"/",component:H}),Object(f.jsx)(_.a,{exact:!0,path:"/pokemon/:pokemon",component:R})]})]})},B=t(48),V=t(83),X=t(84),q=t(15),Q={data:[],isLoading:!1,errorMessage:!1,count:0},Y={data:{},isLoading:!1,errorMessage:""},Z=Object(B.b)({lists:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"LISTS_LOADING":return Object(q.a)(Object(q.a)({},e),{},{isLoading:!0,errorMessage:""});case"LISTS_SUCCESS":return Object(q.a)(Object(q.a)({},e),{},{isLoading:!1,errorMessage:"",data:n.payload.results,count:n.payload.count});default:return e}},singlePokemon:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"POKEMON_LOADING":return Object(q.a)(Object(q.a)({},e),{},{isLoading:!0,errorMessage:""});case"POKEMON_SUCCESS":return Object(q.a)(Object(q.a)({},e),{},{isLoading:!1,errorMessage:"",data:Object(q.a)(Object(q.a)({},e.data),{},Object(S.a)({},n.pokemonName,n.payload))});case"POKEMON_FAIL":return Object(q.a)(Object(q.a)({},e),{},{isLoading:!1,errorMessage:"Unable to fetch data"});default:return e}}}),$=Object(B.c)(Z,Object(V.composeWithDevTools)(Object(B.a)(X.a)));t(131);p.a.render(Object(f.jsx)(l.a.StrictMode,{children:Object(f.jsx)(N.a,{store:$,children:Object(f.jsx)(J,{})})}),document.getElementById("root"))}},[[132,1,2]]]);
//# sourceMappingURL=main.67d7334f.chunk.js.map