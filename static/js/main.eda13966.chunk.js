(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{86:function(e,t,a){e.exports=a(96)},96:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"Icon",(function(){return K}));var r=a(0),o=a.n(r),l=a(10),i=a.n(l),c=a(26),u=a(67),s=a(146),d=a(140),m=a(141),p=a(20),f=a(43),g={name:"DUMMYLOGO",fontFamily:"Montserrat",fontWeight:"bold",fontStyle:"normal",color:"#0033FF",isotype:"qr_code",layout:"LIH"},h=function(e,t){switch(t.type){case"LOGOTYPE_STORE":return Object(c.a)(Object(c.a)({},e),{},Object(f.a)({},t.payload.field,t.payload.value));case"LOGOTYPE_STORE_RESET":return g;default:return e}},E=o.a.createContext(void 0),b=function(e){var t=e.children,a=o.a.useReducer(h,g),n=Object(p.a)(a,2),r=n[0],l=n[1];return o.a.createElement(E.Provider,{value:{state:r,dispatch:l}},t)},y=a(136),v=a(134),O=a(135),x={show:!0,width:300},w=function(e,t){switch(t.type){case"SIDEBAR_SHOW":return Object(c.a)(Object(c.a)({},e),{},{show:!e.show});default:return e}},_=o.a.createContext(void 0),k=function(e){var t=e.children,a=o.a.useReducer(w,x),n=Object(p.a)(a,2),r=n[0],l=n[1];return o.a.createElement(_.Provider,{value:{state:r,dispatch:l}},t)},S=a(142),C=a(128),I=a(98),L=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(S.a,{display:"flex",mr:2},o.a.createElement(C.a,{style:{fontSize:28}},"qr_code")),o.a.createElement(I.a,{variant:"h6",noWrap:!0,style:{fontFamily:"Montserrat"}},o.a.createElement("strong",null,"DUMMYLOGO")))},j=a(130),T=function(){var e=o.a.useContext(E).dispatch;return o.a.createElement(j.a,{variant:"text",size:"small",startIcon:o.a.createElement(C.a,null,"replay"),onClick:function(){return e({type:"LOGOTYPE_STORE_RESET"})}},"Reset all change")},R=a(147),F=function(){var e=o.a.useContext(E).dispatch;return o.a.createElement(R.a,{placeholder:"Type something...",onChange:function(t){e({type:"LOGOTYPE_STORE",payload:{field:"name",value:t.target.value}})}})},W=a(131),N=function(){var e=o.a.useContext(E),t=e.state,a=e.dispatch,n="italic"===t.fontStyle;return o.a.createElement(W.a,{onClick:function(){a({type:"LOGOTYPE_STORE",payload:{field:"fontStyle",value:n?"normal":"italic"}})},color:n?"primary":"default"},o.a.createElement(C.a,null,"format_italic"))},G=function(){var e=o.a.useContext(E),t=e.state,a=e.dispatch,n="bold"===t.fontWeight;return o.a.createElement(W.a,{onClick:function(){a({type:"LOGOTYPE_STORE",payload:{field:"fontWeight",value:n?"normal":"bold"}})},color:n?"primary":"default"},o.a.createElement(C.a,null,"format_bold"))},M=a(133),B=a(145),P=a(66),Y=Object(M.a)((function(){return Object(B.a)({root:{"& .MuiButtonBase-root":{boxShadow:"none !important"}}})})),z=function(){var e=Y(),t=o.a.useContext(E),a=t.state,n=t.dispatch;return o.a.createElement("div",{className:e.root},o.a.createElement(P.a,{value:a.color,hideTextfield:!0,disableAlpha:!0,deferred:!0,onChange:function(e){n({type:"LOGOTYPE_STORE",payload:{field:"color",value:"#".concat(e.hex)}})}}))},D=function(){var e=o.a.useContext(_).dispatch;return o.a.createElement(W.a,{onClick:function(){return e({type:"SIDEBAR_SHOW"})}},o.a.createElement(C.a,null,"tune"))},V=Object(M.a)((function(e){return Object(B.a)({root:function(t){var a=t.sidebar;return{width:a.show?"calc(100% - ".concat(a.width,"px)"):"100%",marginRight:a.show?a.width:0,zIndex:e.zIndex.drawer+1,borderBottomStyle:"solid",borderBottomWidth:1,borderBottomColor:e.palette.grey[200]}},dividerSmall:{margin:e.spacing(2,3)},dividerLarge:{margin:e.spacing(2,6)},typography:{color:e.palette.grey[400]}})})),A=function(){var e=o.a.useContext(_).state,t=V({sidebar:e}),a=function(){return o.a.createElement(v.a,{orientation:"vertical",flexItem:!0,className:t.dividerSmall})};return o.a.createElement(O.a,{position:"fixed",color:"inherit",elevation:0,className:t.root},o.a.createElement(y.a,null,o.a.createElement(L,null),o.a.createElement(v.a,{orientation:"vertical",flexItem:!0,className:t.dividerLarge}),o.a.createElement("div",{style:{flexGrow:1}},o.a.createElement(T,null)),o.a.createElement(a,null),o.a.createElement(F,null),o.a.createElement(a,null),o.a.createElement(G,null),o.a.createElement(N,null),o.a.createElement(a,null),o.a.createElement(z,null),o.a.createElement(a,null),o.a.createElement(D,null)))},H=a(144),J=a(137),U=Object(M.a)((function(e){return Object(B.a)({drawer:function(e){var t=e.sidebar;return{width:t.show?t.width:0,flexShrink:0}},drawerPaper:function(e){var t=e.sidebar;return{width:t.show?t.width:0}},box:{borderTopStyle:"solid",borderTopWidth:1,borderTopColor:e.palette.grey[200],height:"100%",overflow:"auto",scrollbarColor:"".concat(e.palette.grey[400]," ").concat(e.palette.grey[100]),scrollbarWidth:"thin","&::-webkit-scrollbar-track":{boxShadow:"inset 0 0 6px rgba(0,0,0,0.1)",borderRadius:10,backgroundColor:e.palette.grey[100]},"&::-webkit-scrollbar":{width:6,height:6,backgroundColor:e.palette.grey[400]},"&::-webkit-scrollbar-thumb":{borderRadius:10,boxShadow:"inset 0 0 6px rgba(0,0,0,.1)",backgroundColor:e.palette.grey[400]}},active:{fontWeight:e.typography.fontWeightBold,"&.Mui-disabled":{color:e.palette.common.black}}})})),q=["qr_code","fingerprint","store_mall_directory","storefront","gesture","how_to_vote","print","weekend","school","hearing","filter_drama","support_agent","add_shopping_cart","scatter_plot","security","anchor","all_inbox","memory","admin_panel_settings","directions_boat","build_circle","directions_car","moped","pedal_bike","directions_bike","agriculture","commute","favorite_border","language","opacity","pets","sports_esports","videogame_asset","sports_volleyball","sports_soccer","sports_football","stars","settings_voice","thumb_up","wifi_protected_setup","volume_up","business","apartment","child_friendly","biotech","drafts","save","access_alarm","headset","toys","audiotrack","color_lens","linked_camera","timelapse","remove_red_eye","style","wine_bar"],K=function(){var e=o.a.useContext(E),t=e.state,a=e.dispatch;return o.a.createElement(S.a,{p:1},o.a.createElement(J.a,{container:!0,spacing:1},q.map((function(e){return o.a.createElement(J.a,{key:e,item:!0,sm:4},o.a.createElement(j.a,{fullWidth:!0,variant:e===t.isotype?"contained":"outlined",disableElevation:!0,style:{paddingTop:20,paddingBottom:20},color:e===t.isotype?"primary":"default",onClick:function(){a({type:"LOGOTYPE_STORE",payload:{field:"isotype",value:e}})}},o.a.createElement(C.a,{fontSize:"large"},e)))}))))},$=[{id:"Icon",text:"Icons"}],Q=function(){var e=o.a.useState("Icon"),t=Object(p.a)(e,2),a=t[0],r=t[1],l=o.a.useContext(_).state,i=U({sidebar:l}),c=function(){var e=n[a];return o.a.createElement(e,null)};return o.a.createElement(H.a,{className:i.drawer,variant:"permanent",classes:{paper:i.drawerPaper},anchor:"right"},o.a.createElement(y.a,null,o.a.createElement(J.a,{container:!0},$.map((function(e){return o.a.createElement(J.a,{key:e.id,item:!0,sm:12},o.a.createElement(j.a,{fullWidth:!0,size:"small",onClick:function(){return r(e.id)},disabled:e.id===a,className:e.id===a?i.active:""},e.text))})))),o.a.createElement(S.a,{className:i.box},o.a.createElement(S.a,null,c)))},X=a(139),Z=Object(M.a)((function(e){return Object(B.a)({box:{marginBottom:e.spacing(4)},typography:{position:"relative",display:"inline-block","&::before":{content:'""',position:"absolute",backgroundColor:e.palette.common.black,bottom:-15,left:0,width:"60%",height:1}}})})),ee=function(e){var t=e.text,a=Z();return o.a.createElement(S.a,{className:a.box},o.a.createElement(I.a,{variant:"h5",className:a.typography},t))},te=a(138),ae=a(54),ne=a.n(ae),re=function(e,t){var a=document.createElement("a");a.download=oe(t),a.href=e,a.click()},oe=function(e){var t=new Date;return"logo-".concat(t.getTime(),".").concat(e)},le=Object(M.a)((function(e){return Object(B.a)({card:function(t){var a=t.layout;return{textAlign:"center",paddingTop:["ISO","LIV"].includes(a)?e.spacing(9):e.spacing(14),paddingBottom:["ISO","LIV"].includes(a)?e.spacing(9):e.spacing(14)}},box:function(e){return{display:"LIV"===e.layout?"initial":"inline-flex",alignItems:"center",justifyContent:"center"}},isotype:function(t){var a=t.layout;return{fontSize:["ISO","LIV"].includes(a)?160:96,display:"block",marginBottom:"LIV"===a?e.spacing(1):0,marginRight:["ISO","LIV"].includes(a)?"auto":e.spacing(4),marginLeft:["ISO","LIV"].includes(a)?"auto":0}},button:{paddingLeft:20,paddingRight:20,"& .MuiIcon-root":{marginRight:15}}})})),ie=[{id:"jpeg",text:"JPG"},{id:"png",text:"PNG"}],ce=function(e){var t=e.htmlDivElementRef,a=e.backgroundColor,n=le(),r=function(e){!function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"#FFFFFF";"jpeg"===t&&ne.a.toJpeg(e,{bgcolor:a}).then((function(e){re(e,t)})).catch((function(e){console.error("oops, something went wrong!",e)})),"png"===t&&ne.a.toPng(e).then((function(e){re(e,t)})).catch((function(e){console.error("oops, something went wrong!",e)}))}(t.current,e.id,a)};return o.a.createElement(o.a.Fragment,null,ie.map((function(e){return o.a.createElement(j.a,{key:e.id,onClick:function(){return r(e)},className:n.button,size:"small"},o.a.createElement(C.a,{fontSize:"inherit"},"vertical_align_bottom"),"Download ",e.text)})))},ue=function(e){var t=e.negative,a=void 0!==t&&t,n=o.a.useContext(E).state,r=a?n.color:"#FFF",l=a?"#FFF":n.color,i=o.a.useRef(),c=le({layout:n.layout});return o.a.createElement(S.a,null,o.a.createElement(te.a,{variant:"outlined",elevation:0,className:c.card,style:{backgroundColor:r,color:l}},o.a.createElement("div",{className:c.box,ref:i},"LOG"!==n.layout&&o.a.createElement(C.a,{className:c.isotype},n.isotype),"ISO"!==n.layout&&o.a.createElement(I.a,{variant:"h2",component:"div",style:{fontFamily:n.fontFamily,fontWeight:n.fontWeight,fontStyle:n.fontStyle}},n.name))),o.a.createElement(S.a,{component:"footer",mt:3},o.a.createElement(ce,{htmlDivElementRef:i,backgroundColor:r})))},se=function(){return o.a.createElement(S.a,{py:5},o.a.createElement(ee,{text:"DUMMY LOGO MAKER"}),o.a.createElement(S.a,{mb:4},o.a.createElement(I.a,{variant:"body2"},"Easy, fast and even fun! Created by \xa0",o.a.createElement(X.a,{href:"https://github.com/moiseshp",target:"_blank",color:"inherit"},"Mois\xe9s Huaringa"))),o.a.createElement(J.a,{container:!0,spacing:3},o.a.createElement(J.a,{item:!0,md:12,lg:6},o.a.createElement(ue,null)),o.a.createElement(J.a,{item:!0,md:12,lg:6},o.a.createElement(ue,{negative:!0}))))},de=Object(M.a)((function(e){return Object(B.a)({layoutText:{color:e.palette.grey[500],textTransform:"uppercase",marginRight:e.spacing(3)},divider:{margin:e.spacing(3,2)},active:{fontWeight:e.typography.fontWeightBold,"&.Mui-disabled":{color:e.palette.primary.main}}})})),me=[{id:"LOG",text:"Logo"},{id:"LIH",text:"Logo + Isotype - H"},{id:"LIV",text:"Logo + Isotype - V"},{id:"ISO",text:"Isotype"}],pe=function(){var e=de(),t=o.a.useContext(E),a=t.state,n=t.dispatch;return o.a.createElement(o.a.Fragment,null,o.a.createElement(I.a,{variant:"caption",className:e.layoutText},"Select to Layout :"),me.map((function(t,r){return o.a.createElement(o.a.Fragment,{key:t.id},o.a.createElement(j.a,{onClick:function(){return e=t.id,void n({type:"LOGOTYPE_STORE",payload:{field:"layout",value:e}});var e},disabled:t.id===a.layout,className:t.id===a.layout?e.active:"",size:"small"},t.text),me.length!==r+1&&o.a.createElement(v.a,{orientation:"vertical",flexItem:!0,className:e.divider}))})))},fe=Object(M.a)((function(e){return Object(B.a)({root:function(t){var a=t.sidebar;return{width:a.show?"calc(100% - ".concat(a.width,"px)"):"100%",marginRight:a.show?a.width:0,zIndex:e.zIndex.drawer+1,top:"initial",bottom:0}}})})),ge=function(){var e=o.a.useContext(_).state,t=fe({sidebar:e}),a=new Date;return o.a.createElement(O.a,{className:t.root,color:"inherit",elevation:0},o.a.createElement(y.a,null,o.a.createElement(I.a,{variant:"caption",noWrap:!0,style:{flexGrow:1}},a.getFullYear()," \xa9 \xa0","DUMMY LOGO MAKER"),o.a.createElement(pe,null)))},he=Object(M.a)((function(e){return Object(B.a)({root:{display:"flex"},content:{flexGrow:1,backgroundColor:e.palette.background.default,padding:e.spacing(3),position:"relative"}})})),Ee=function(){var e=he();return o.a.createElement("div",{className:e.root},o.a.createElement(A,null),o.a.createElement("main",{className:e.content},o.a.createElement(y.a,null),o.a.createElement(se,null),o.a.createElement(y.a,null)),o.a.createElement(ge,null),o.a.createElement(Q,null))},be={typography:{fontFamily:["Open Sans","Montserrat",'"Helvetica Neue"',"Arial","sans-serif"].join(","),fontWeightRegular:300,fontWeightBold:600,button:{}},props:{MuiButton:{disableElevation:!0}}},ye=function(){var e=o.a.useContext(E).state,t=Object(u.a)(Object(c.a)(Object(c.a)({},be),{},{palette:{background:{default:"#ffffff"},primary:{main:e.color}}}));return o.a.createElement(d.a,{theme:Object(s.a)(t)},o.a.createElement(m.a,null),o.a.createElement(Ee,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(b,null,o.a.createElement(k,null,o.a.createElement(ye,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[86,1,2]]]);
//# sourceMappingURL=main.eda13966.chunk.js.map