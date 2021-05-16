(this["webpackJsonpgenshin-optimizer"]=this["webpackJsonpgenshin-optimizer"]||[]).push([[17],{163:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var s=a(176),r=a(171),n=a(161),i=a(1);function o(e,t,a){var o,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;if(!e||!t||!a)return null;var l=n.a.getStatVariant(a)||"success",d=e/100*(t[a]||0),m=Object(i.jsx)("span",{className:"text-".concat(l),children:(null===d||void 0===d||null===(o=d.toFixed)||void 0===o?void 0:o.call(d,c))||d}),p=Object(i.jsx)(s.a,{placement:"top",overlay:Object(i.jsxs)(r.a,{id:"p-tooltip",children:[e,"% ",n.a.getStatNamePretty(a)]}),children:m});return Object(i.jsxs)("span",{children:["(",p,")"]})}},170:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var s=a(0),r=a(94),n=a(178),i=Math.pow(2,31)-1;function o(e,t,a){var s=a-Date.now();e.current=s<=i?setTimeout(t,s):setTimeout((function(){return o(e,t,a)}),i)}function c(){var e=Object(r.a)(),t=Object(s.useRef)();return Object(n.a)((function(){return clearTimeout(t.current)})),Object(s.useMemo)((function(){var a=function(){return clearTimeout(t.current)};return{set:function(s,r){void 0===r&&(r=0),e()&&(a(),r<=i?t.current=setTimeout(s,r):o(t,s,Date.now()+r))},clear:a}}),[])}},171:function(e,t,a){"use strict";var s=a(2),r=a(4),n=a(5),i=a.n(n),o=a(0),c=a.n(o),l=(a(125),a(7)),d=c.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.placement,o=e.className,d=e.style,m=e.children,p=e.arrowProps,_=(e.popper,e.show,Object(r.a)(e,["bsPrefix","placement","className","style","children","arrowProps","popper","show"]));a=Object(l.a)(a,"tooltip");var f=((null==n?void 0:n.split("-"))||[])[0];return c.a.createElement("div",Object(s.a)({ref:t,style:d,role:"tooltip","x-placement":f,className:i()(o,a,"bs-tooltip-"+f)},_),c.a.createElement("div",Object(s.a)({className:"arrow"},p)),c.a.createElement("div",{className:a+"-inner"},m))}));d.defaultProps={placement:"right"},d.displayName="Tooltip",t.a=d},176:function(e,t,a){"use strict";var s=a(2),r=a(4),n=a(177),i=a(95),o=a(0),c=a.n(o),l=a(170),d=a(92),m=(a(43),a(28)),p=a(5),_=a.n(p),f=a(8),g=a(14),u=a(6),b=a.n(u),h=a(34),y=a.n(h),I=a(93),w=a(33),x=a(3),j=a(99),v=a(100),E=a(179),k=a(96),O=c.a.forwardRef((function(e,t){var a=e.flip,s=e.offset,r=e.placement,n=e.containerPadding,i=void 0===n?5:n,l=e.popperConfig,d=void 0===l?{}:l,m=e.transition,p=Object(I.a)(),_=p[0],u=p[1],b=Object(I.a)(),h=b[0],x=b[1],O=Object(w.a)(u,t),C=Object(E.a)(e.container),T=Object(E.a)(e.target),S=Object(o.useState)(!e.show),M=S[0],D=S[1],B=Object(j.a)(T,_,Object(k.a)({placement:r,enableEvents:!!e.show,containerPadding:i||5,flip:a,offset:s,arrowElement:h,popperConfig:d})),G=B.styles,P=B.attributes,F=Object(g.a)(B,["styles","attributes"]);e.show?M&&D(!1):e.transition||M||D(!0);var A=e.show||m&&!M;if(Object(v.a)(_,e.onHide,{disabled:!e.rootClose||e.rootCloseDisabled,clickTrigger:e.rootCloseEvent}),!A)return null;var R=e.children(Object(f.a)({},F,{show:!!e.show,props:Object(f.a)({},P.popper,{style:G.popper,ref:O}),arrowProps:Object(f.a)({},P.arrow,{style:G.arrow,ref:x})}));if(m){var H=e.onExit,N=e.onExiting,W=e.onEnter,L=e.onEntering,V=e.onEntered;R=c.a.createElement(m,{in:e.show,appear:!0,onExit:H,onExiting:N,onExited:function(){D(!0),e.onExited&&e.onExited.apply(e,arguments)},onEnter:W,onEntering:L,onEntered:V},R)}return C?y.a.createPortal(R,C):null}));O.displayName="Overlay",O.propTypes={show:b.a.bool,placement:b.a.oneOf(x.h),target:b.a.any,container:b.a.any,flip:b.a.bool,children:b.a.func.isRequired,containerPadding:b.a.number,popperConfig:b.a.object,rootClose:b.a.bool,rootCloseEvent:b.a.oneOf(["click","mousedown"]),rootCloseDisabled:b.a.bool,onHide:function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),s=1;s<t;s++)a[s-1]=arguments[s];var r;return e.rootClose?(r=b.a.func).isRequired.apply(r,[e].concat(a)):b.a.func.apply(b.a,[e].concat(a))},transition:b.a.elementType,onEnter:b.a.func,onEntering:b.a.func,onEntered:b.a.func,onExit:b.a.func,onExiting:b.a.func,onExited:b.a.func};var C=O,T=a(97),S=a(78),M={transition:S.a,rootClose:!1,show:!1,placement:"top"};function D(e){var t=e.children,a=e.transition,n=e.popperConfig,i=void 0===n?{}:n,l=Object(r.a)(e,["children","transition","popperConfig"]),m=Object(o.useRef)({}),p=Object(T.a)(),f=p[0],g=p[1],u=!0===a?S.a:a||null;return c.a.createElement(C,Object(s.a)({},l,{ref:f,popperConfig:Object(s.a)({},i,{modifiers:g.concat(i.modifiers||[])}),transition:u}),(function(e){var n,i=e.props,o=e.arrowProps,l=e.show,p=e.update,f=(e.forceUpdate,e.placement),g=e.state,u=Object(r.a)(e,["props","arrowProps","show","update","forceUpdate","placement","state"]);!function(e,t){var a=e.ref,s=t.ref;e.ref=a.__wrapped||(a.__wrapped=function(e){return a(Object(d.a)(e))}),t.ref=s.__wrapped||(s.__wrapped=function(e){return s(Object(d.a)(e))})}(i,o);var b=Object.assign(m.current,{state:g,scheduleUpdate:p,placement:f,outOfBoundaries:(null==g||null==(n=g.modifiersData.hide)?void 0:n.isReferenceHidden)||!1});return"function"===typeof t?t(Object(s.a)({},u,i,{placement:f,show:l},!a&&l&&{className:"show"},{popper:b,arrowProps:o})):c.a.cloneElement(t,Object(s.a)({},u,i,{placement:f,arrowProps:o,popper:b,className:_()(t.props.className,!a&&l&&"show"),style:Object(s.a)({},t.props.style,i.style)}))}))}D.defaultProps=M;var B=D,G=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){return this.props.children},t}(c.a.Component);function P(e,t,a){var s=t[0],r=s.currentTarget,n=s.relatedTarget||s.nativeEvent[a];n&&n===r||Object(i.a)(r,n)||e.apply(void 0,t)}function F(e){var t=e.trigger,a=e.overlay,n=e.children,i=e.popperConfig,p=void 0===i?{}:i,_=e.show,f=e.defaultShow,g=void 0!==f&&f,u=e.onToggle,b=e.delay,h=e.placement,y=e.flip,I=void 0===y?h&&-1!==h.indexOf("auto"):y,w=Object(r.a)(e,["trigger","overlay","children","popperConfig","show","defaultShow","onToggle","delay","placement","flip"]),x=Object(o.useRef)(null),j=Object(l.a)(),v=Object(o.useRef)(""),E=Object(m.b)(_,g,u),k=E[0],O=E[1],C=function(e){return e&&"object"===typeof e?e:{show:e,hide:e}}(b),T="function"!==typeof n?c.a.Children.only(n).props:{},S=T.onFocus,M=T.onBlur,D=T.onClick,F=Object(o.useCallback)((function(){return Object(d.a)(x.current)}),[]),A=Object(o.useCallback)((function(){j.clear(),v.current="show",C.show?j.set((function(){"show"===v.current&&O(!0)}),C.show):O(!0)}),[C.show,O,j]),R=Object(o.useCallback)((function(){j.clear(),v.current="hide",C.hide?j.set((function(){"hide"===v.current&&O(!1)}),C.hide):O(!1)}),[C.hide,O,j]),H=Object(o.useCallback)((function(){A();for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];null==S||S.apply(void 0,t)}),[A,S]),N=Object(o.useCallback)((function(){R();for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];null==M||M.apply(void 0,t)}),[R,M]),W=Object(o.useCallback)((function(){O(!k),D&&D.apply(void 0,arguments)}),[D,O,k]),L=Object(o.useCallback)((function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];P(A,t,"fromElement")}),[A]),V=Object(o.useCallback)((function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];P(R,t,"toElement")}),[R]),z=null==t?[]:[].concat(t),U={};return-1!==z.indexOf("click")&&(U.onClick=W),-1!==z.indexOf("focus")&&(U.onFocus=H,U.onBlur=N),-1!==z.indexOf("hover")&&(U.onMouseOver=L,U.onMouseOut=V),c.a.createElement(c.a.Fragment,null,"function"===typeof n?n(Object(s.a)({},U,{ref:x})):c.a.createElement(G,{ref:x},Object(o.cloneElement)(n,U)),c.a.createElement(B,Object(s.a)({},w,{show:k,onHide:R,flip:I,placement:h,popperConfig:p,target:F}),a))}F.defaultProps={defaultShow:!1,trigger:["hover","focus"]};t.a=F},298:function(e,t,a){"use strict";a.r(t);var s=a.p+"static/media/Item_Adventurer's_Flower.31b0a44c.png",r=a.p+"static/media/Item_Adventurer's_Tail_Feather.495e630d.png",n=a.p+"static/media/Item_Adventurer's_Pocket_Watch.25c28494.png",i=a.p+"static/media/Item_Adventurer's_Golden_Goblet.7d50b5cd.png",o=a.p+"static/media/Item_Adventurer's_Bandana.ffcc9215.png",c=a(163),l=a(1),d={name:"Adventurer",rarity:[3],pieces:{flower:"Adventurer's Flower",plume:"Adventurer's Tail Feather",sands:"Adventurer's Pocket Watch",goblet:"Adventurer's Golden Goblet",circlet:"Adventurer's Bandana"},icons:{flower:s,plume:r,sands:n,goblet:i,circlet:o},setEffects:{2:{text:"Max HP increased by 1,000.",stats:{hp:1e3}},4:{text:function(e){return Object(l.jsxs)("span",{children:["Opening chest regenerates 30% Max HP",Object(c.a)(30,e,"finalHP")," over 5s."]})}}}},m=d,p=a.p+"static/media/Item_Flower_of_Creviced_Cliff.901bea9e.png",_=a.p+"static/media/Item_Feather_of_Jagged_Peaks.bfbdbc15.png",f=a.p+"static/media/Item_Sundial_of_Enduring_Jade.b2538326.png",g=a.p+"static/media/Item_Goblet_of_Chiseled_Crag.053335a8.png",u=a.p+"static/media/Item_Mask_of_Solitude_Basalt.c354cf5c.png",b={set4:{name:"Obtaining Crystallize Shard",states:{pyro:{name:"Pyro",stats:{pyro_dmg_:35}},electro:{name:"Electro",stats:{electro_dmg_:35}},hydro:{name:"Hydro",stats:{hydro_dmg_:35}},cryo:{name:"Cryo",stats:{cryo_dmg_:35}}}}},h={name:"Archaic Petra",rarity:[4,5],pieces:{flower:"Flower of Creviced Cliff",plume:"Feather of Jagged Peaks",sands:"Sundial of Enduring Jade",goblet:"Goblet of Chiseled Crag",circlet:"Mask of Solitude Basalt"},icons:{flower:p,plume:_,sands:f,goblet:g,circlet:u},conditionals:b,setEffects:{2:{text:Object(l.jsxs)("span",{children:["Gain a 15% ",Object(l.jsx)("span",{className:"text-geo",children:"Geo DMG Bonus"})]}),stats:{geo_dmg_:15}},4:{text:Object(l.jsxs)("span",{children:["Upon obtaining an Elemental Shard created through a ",Object(l.jsx)("span",{className:"text-crystallize",children:"Crystallize"})," Reaction, all party members gain 35% DMG to that particular element for 10s. Only one form of Elemental DMG can be gained in this manner at any one time."]}),conditional:b.set4}}},y=h,I=a.p+"static/media/Item_Berserker's_Rose.06c4442d.png",w=a.p+"static/media/Item_Berserker's_Indigo_Feather.a6e6a86e.png",x=a.p+"static/media/Item_Berserker's_Timepiece.b2ad1dd7.png",j=a.p+"static/media/Item_Berserker's_Bone_Goblet.bd66d90a.png",v=a.p+"static/media/Item_Berserker's_Battle_Mask.9c6f00a1.png",E={set4:{name:"HP below 70%",stats:{critRate_:24}}},k={name:"Berserker",rarity:[3,4],pieces:{flower:"Berserker's Rose",plume:"Berserker's Indigo Feather",sands:"Berserker's Timepiece",goblet:"Berserker's Bone Goblet",circlet:"Berserker's Battle Mask"},icons:{flower:I,plume:w,sands:x,goblet:j,circlet:v},conditionals:E,setEffects:{2:{text:"CRIT Rate +12%",stats:{critRate_:12}},4:{text:"When HP is below 70%, CRIT Rate increases by an additional 24%.",conditional:E.set4}}},O=k,C=a.p+"static/media/Item_Snowswept_Memory.ece730e7.png",T=a.p+"static/media/Item_Icebreaker's_Resolve.96a7db37.png",S=a.p+"static/media/Item_Frozen_Homeland's_Demise.84d51820.png",M=a.p+"static/media/Item_Frost-Weaved_Dignity.20a2ea65.png",D=a.p+"static/media/Item_Broken_Rime's_Echo.a9551983.png",B={set4:{name:"Attack enemy",states:{c:{name:"Affected By Cryo",stats:{critRate_:20}},f:{name:"Frozen",stats:{critRate_:40}}}}},G={name:"Blizzard Strayer",rarity:[4,5],pieces:{flower:"Snowswept Memory",plume:"Icebreaker's Resolve",sands:"Frozen Homeland's Demise",goblet:"Frost-Weaved Dignity",circlet:"Broken Rime's Echo"},icons:{flower:C,plume:T,sands:S,goblet:M,circlet:D},conditionals:B,setEffects:{2:{text:Object(l.jsxs)("span",{children:[Object(l.jsx)("span",{className:"text-cryo",children:"Cryo DMG Bonus"})," +15%"]}),stats:{cryo_dmg_:15}},4:{text:Object(l.jsxs)("span",{children:["When a character attacks an enemy affected by ",Object(l.jsx)("span",{className:"text-cryo",children:"Cryo"}),", their CRIT Rate is increased by 20%. If the enemy is Frozen, CRIT Rate is increased by an additional 20%"]}),conditional:B.set4}}},P=G,F=a.p+"static/media/Item_Bloodstained_Flower_of_Iron.e720eb8c.png",A=a.p+"static/media/Item_Bloodstained_Black_Plume.f643c83d.png",R=a.p+"static/media/Item_Bloodstained_Final_Hour.7f3cf2fb.png",H=a.p+"static/media/Item_Bloodstained_Chevalier's_Goblet.60ebe6c0.png",N=a.p+"static/media/Item_Bloodstained_Iron_Mask.78c7e58f.png",W={set4:{name:"After defeating an opponent",stats:{charged_dmg_:50,staminaDec_:100}}},L={name:"Bloodstained Chivalry",rarity:[4,5],pieces:{flower:"Bloodstained Flower of Iron",plume:"Bloodstained Black Plume",sands:"Bloodstained Final Hour",goblet:"Bloodstained Chevalier's Goblet",circlet:"Bloodstained Iron Mask"},icons:{flower:F,plume:A,sands:R,goblet:H,circlet:N},conditionals:W,setEffects:{2:{text:Object(l.jsxs)("span",{children:[Object(l.jsx)("span",{className:"text-physical",children:"Physical DMG"})," +25%"]}),stats:{physical_dmg_:25}},4:{text:"After defeating an opponent, increases Charged Attack DMG by 50%, and reduces its Stamina cost to 0 for 10s.",conditional:W.set4}}},V=L,z=a.p+"static/media/Item_Medal_of_the_Brave.4963f0c4.png",U={set4:{name:"Enemy with more than 50% HP",stats:{dmg_:30}}},K={name:"Brave Heart",rarity:[3,4],pieces:{flower:"Medal of the Brave",plume:"Prospect of the Brave",sands:"Fortitude of the Brave",goblet:"Outset of the Brave",circlet:"Crown of the Brave"},icons:{flower:z,plume:a.p+"static/media/Item_Prospect_of_the_Brave.08ad41b6.png",sands:a.p+"static/media/Item_Fortitude_of_the_Brave.4d790285.png",goblet:a.p+"static/media/Item_Outset_of_the_Brave.b2a757fc.png",circlet:a.p+"static/media/Item_Crown_of_the_Brave.43f41135.png"},conditionals:U,setEffects:{2:{text:"2-piece Set Bonus: ATK +18%",stats:{atk_:18}},4:{text:"Increases DMG by 30% against enemies with more than 50% HP.",conditional:U.set4}}},J={set4:{name:"Using an Elemental SKill",maxStack:3,stats:{pyro_dmg_:7.5}}},q={name:"Crimson Witch of Flames",rarity:[4,5],pieces:{flower:"Witch's Flower of Blaze",plume:"Witch's Ever-Burning Plume",sands:"Witch's End Time",goblet:"Witch's Heart Flames",circlet:"Witch's Scorching Hat"},icons:{flower:a.p+"static/media/Item_Witch's_Flower_of_Blaze.f8ecb4fc.png",plume:a.p+"static/media/Item_Witch's_Ever-Burning_Plume.7e706c41.png",sands:a.p+"static/media/Item_Witch's_End_Time.de3c175b.png",goblet:a.p+"static/media/Item_Witch's_Heart_Flames.505a6377.png",circlet:a.p+"static/media/Item_Witch's_Scorching_Hat.2070d8b6.png"},conditionals:J,setEffects:{2:{text:Object(l.jsxs)("span",{children:[Object(l.jsx)("span",{className:"text-pyro",children:"Pyro DMG Bonus"})," +15%"]}),stats:{pyro_dmg_:15}},4:{text:"Increases Overloaded and Burning DMG by 40%. Increases Vaporize and Melt DMG by 15%. Using an Elemental Skill increases 2-Piece Set effects by 50% for 10s. Max 3 stacks.",stats:{overloaded_dmg_:40,burning_dmg_:40,vaporize_dmg_:15,melt_dmg_:15},conditional:J.set4}}},Q={anemo:{name:"Anemo in party",stats:{anemo_res_:30}},geo:{name:"Geo in party",stats:{geo_res_:30}},electro:{name:"Electro in party",stats:{electro_res_:30}},hydro:{name:"Hydro in party",stats:{hydro_res_:30}},pyro:{name:"Pyro in party",stats:{pyro_res_:30}},cryo:{name:"Cryo in party",stats:{cryo_res_:30}}},Y={name:"Defender's Will",rarity:[3,4],pieces:{flower:"Guardian's Flower",plume:"Guardian's Sigil",sands:"Guardian's Clock",goblet:"Guardian's Vessel",circlet:"Guardian's Band"},icons:{flower:a.p+"static/media/Item_Guardian's_Flower.5e495e58.png",plume:a.p+"static/media/Item_Guardian's_Sigil.9bd56afb.png",sands:a.p+"static/media/Item_Guardian's_Clock.de1c1bf4.png",goblet:a.p+"static/media/Item_Guardian's_Vessel.5fc31ffe.png",circlet:a.p+"static/media/Item_Guardian's_Band.92ad19a4.png"},conditionals:Q,setEffects:{2:{text:"Base DEF +30%",stats:{def_:30}},4:{text:"Increases Elemental RES by 30% for each element present in the party.",conditionals:Q}}},X={set4:{name:"Defeating an enemy",stats:{skillCDRed_:100},fields:[{text:"CD",value:"15s"}]}},Z={name:"Gambler",rarity:[3,4],pieces:{flower:"Gambler's Brooch",plume:"Gambler's Feathered Accessory",sands:"Gambler's Pocket Watch",goblet:"Gambler's Dice Cup",circlet:"Gambler's Earrings"},icons:{flower:a.p+"static/media/Item_Gambler's_Brooch.10f2af6d.png",plume:a.p+"static/media/Item_Gambler's_Feather_Accessory.b5eb9a72.png",sands:a.p+"static/media/Item_Gambler's_Pocket_Watch.3d084b2a.png",goblet:a.p+"static/media/Item_Gambler's_Dice_Cup.2bf67f76.png",circlet:a.p+"static/media/Item_Gambler's_Earrings.6edf9099.png"},conditionals:X,setEffects:{2:{text:"Elemental Skill DMG increased by 20%",stats:{skill_dmg_:20}},4:{text:"Defeating an enemy has 100% chance to remove Elemental Skill CD. Can only occur once every 15s.",conditional:X.set4}}},$={name:"Gladiator's Finale",rarity:[4,5],pieces:{flower:"Gladiator's Nostalgia",plume:"Gladiator's Destiny",sands:"Gladiator's Longing",goblet:"Gladiator's Intoxication",circlet:"Gladiator's Triumphus"},icons:{flower:a.p+"static/media/Item_Gladiator's_Nostalgia.c19c4d65.png",plume:a.p+"static/media/Item_Gladiator's_Destiny.1547cb34.png",sands:a.p+"static/media/Item_Gladiator's_Longing.04ca82f3.png",goblet:a.p+"static/media/Item_Gladiator's_Intoxication.e37b1905.png",circlet:a.p+"static/media/Item_Gladiator's_Triumphus.aa1627e5.png"},setEffects:{2:{text:"ATK +18%",stats:{atk_:18}},4:{text:"If the wielder of this artifact set uses a Sword, Claymore or Polearm, increases their Normal Attack DMG by 35%.",stats:function(e){return("sword"===e.weaponType||"polearm"===e.weaponType||"claymore"===e.weaponType)&&{normal_dmg_:35}}}}},ee={set4:{name:"After using Elemental Skill",stats:{normal_dmg_:30,charged_dmg_:30}}},te={name:"Heart of Depth",rarity:[4,5],pieces:{flower:"Gilded Corsage",plume:"Gust of Nostalgia",sands:"Copper Compass",goblet:"Goblet of Thundering Deep",circlet:"Wine-Stained Tricorne"},icons:{flower:a.p+"static/media/Item_Gilded_Corsage.5f37f891.png",plume:a.p+"static/media/Item_Gust_of_Nostalgia.0bcf7c7d.png",sands:a.p+"static/media/Item_Copper_Compass.15f1961a.png",goblet:a.p+"static/media/Item_Goblet_of_Thundering_Deep.bb3d1636.png",circlet:a.p+"static/media/Item_Wine-Stained_Tricorne.968f992f.png"},conditionals:ee,setEffects:{2:{text:Object(l.jsxs)("span",{children:[Object(l.jsx)("span",{className:"text-hydro",children:"Hydro DMG Bonus"})," +15%"]}),stats:{hydro_dmg_:15}},4:{text:"After using Elemental Skill, increases Normal Attack and Charged Attack DMG by 30% for 15s",conditional:ee.set4}}},ae={set4:{name:"After using Elemental Skill",stats:{eleMas:120}}},se={name:"Instructor",rarity:[3,4],pieces:{flower:"Instructor's Brooch",plume:"Instructor's Feathered Accessory",sands:"Instructor's Pocket Watch",goblet:"Instructor's Tea Cup",circlet:"Instructor's Cap"},icons:{flower:a.p+"static/media/Item_Instructor's_Brooch.0a67a037.png",plume:a.p+"static/media/Item_Instructor's_Feather_Accessory.37620927.png",sands:a.p+"static/media/Item_Instructor's_Pocket_Watch.c9f63dde.png",goblet:a.p+"static/media/Item_Instructor's_Tea_Cup.88db1f5e.png",circlet:a.p+"static/media/Item_Instructor's_Cap.bc19a939.png"},conditionals:ae,setEffects:{2:{text:"Increases Elemental Mastery by 80.",stats:{eleMas:80}},4:{text:"After using Elemental Skill, increases all party members' Elemental Mastery by 120 for 8s.",conditional:ae.set4}}},re=a.p+"static/media/Item_Lavawalker's_Resolution.96cda8ad.png",ne=a.p+"static/media/Item_Lavawalker's_Salvation.13dec22c.png",ie=a.p+"static/media/Item_Lavawalker's_Torment.094818ab.png",oe=a.p+"static/media/Item_Lavawalker's_Epiphany.0978abb7.png",ce=a.p+"static/media/Item_Lavawalker's_Wisdom.f458e8cc.png",le={set4:{name:Object(l.jsxs)("span",{children:["Enemies that are Burning or affected by ",Object(l.jsx)("span",{className:"text-pyro",children:"Pyro"})]}),stats:{dmg_:35}}},de={name:"Lavawalker",rarity:[4,5],pieces:{flower:"Lavawalker's Resolution",plume:"Lavawalker's Salvation",sands:"Lavawalker's Torment",goblet:"Lavawalker's Epiphany",circlet:"Lavawalker's Wisdom"},icons:{flower:re,plume:ne,sands:ie,goblet:oe,circlet:ce},conditionals:le,setEffects:{2:{text:Object(l.jsxs)("span",{children:[Object(l.jsx)("span",{className:"text-pyro",children:"Pyro RES"})," increased by 40%"]}),stats:{pyro_res_:40}},4:{text:Object(l.jsxs)("span",{children:["Increases DMG against enemies that are Burning or affected by ",Object(l.jsx)("span",{className:"text-pyro",children:"Pyro"})," by 35%."]}),conditional:le.set4}}},me={name:"Lucky Dog",rarity:[3],pieces:{flower:"Lucky Dog's Clover",plume:"Lucky Dog's Eagle Feather",sands:"Lucky Dog's Hourglass",goblet:"Lucky Dog's Goblet",circlet:"Lucky Dog's Silver Circlet"},icons:{flower:a.p+"static/media/Item_Lucky_Dog's_Clover.fc1d61ff.png",plume:a.p+"static/media/Item_Lucky_Dog's_Eagle_Feather.12c09a28.png",sands:a.p+"static/media/Item_Lucky_Dog's_Hourglass.46ff4dce.png",goblet:a.p+"static/media/Item_Lucky_Dog's_Goblet.3f90e132.png",circlet:a.p+"static/media/Item_Lucky_Dog's_Silver_Circlet.2f5e8cf3.png"},setEffects:{2:{text:"DEF increased by 100.",stats:{def:100}},4:{text:"Picking up Mora restores 300 HP."}}},pe={set4:{name:"Using an Elemental Skill or Burst",stats:{incHeal_:20}}},_e={name:"Maiden Beloved",rarity:[4,5],pieces:{flower:"Maiden's Distant Love",plume:"Maiden's Heart-stricken Infatuation",sands:"Maiden's Passing Youth",goblet:"Maiden's Fleeting Leisure",circlet:"Maiden's Fading Beauty"},icons:{flower:a.p+"static/media/Item_Maiden's_Distant_Love.37a0415f.png",plume:a.p+"static/media/Item_Maiden's_Heart-stricken_Infatuation.50d5b60d.png",sands:a.p+"static/media/Item_Maiden's_Passing_Youth.b130e0ac.png",goblet:a.p+"static/media/Item_Maiden's_Fleeting_Leisure.3a3a72d9.png",circlet:a.p+"static/media/Item_Maiden's_Fading_Beauty.7b20fa37.png"},conditionals:pe,setEffects:{2:{text:"Character Healing Effectiveness +15%",stats:{heal_:15}},4:{text:"Using an Elemental Skill or Burst increases healing received by all party members by 20% for 10s.",conditional:pe.set4}}},fe={set4:{name:"After using Elemental Skill",stats:{normal_dmg_:25,charged_dmg_:25}}},ge={name:"Martial Artist",rarity:[3,4],pieces:{flower:"Martial Artist's Red Flower",plume:"Martial Artist's Feathered Accessory",sands:"Martial Artist's Water Hourglass",goblet:"Martial Artist's Wine Cup",circlet:"Martial Artist's Bandana"},icons:{flower:a.p+"static/media/Item_Martial_Artist's_Red_Flower.dcb104dd.png",plume:a.p+"static/media/Item_Martial_Artist's_Feather_Accessory.ce725e1d.png",sands:a.p+"static/media/Item_Martial_Artist's_Water_Hourglass.59992bd2.png",goblet:a.p+"static/media/Item_Martial_Artist's_Wine_Cup.fa9c4b25.png",circlet:a.p+"static/media/Item_Martial_Artist's_Bandana.7f0f8850.png"},conditionals:fe,setEffects:{2:{text:"Increases Normal Attack and Charged Attack DMG by 15%.",stats:{normal_dmg_:15,charged_dmg_:15}},4:{text:"After using Elemental Skill, increases Normal Attack and Charged Attack DMG by 25% for 8s.",conditional:fe.set4}}},ue={set4:{name:"Using an Elemental Burst",stats:{atk_:20}}},be={name:"Noblesse Oblige",rarity:[4,5],pieces:{flower:"Royal Flora",plume:"Royal Plume",sands:"Royal Pocket Watch",goblet:"Royal Silver Urn",circlet:"Royal Masque"},icons:{flower:a.p+"static/media/Item_Royal_Flora.e33039ae.png",plume:a.p+"static/media/Item_Royal_Plume.60d4ec7b.png",sands:a.p+"static/media/Item_Royal_Pocket_Watch.243a6478.png",goblet:a.p+"static/media/Item_Royal_Silver_Urn.f2a46be3.png",circlet:a.p+"static/media/Item_Royal_Masque.3bc7e315.png"},conditionals:ue,setEffects:{2:{text:"Elemental Burst DMG +20%",stats:{burst_dmg_:20}},4:{text:"Using an Elemental Burst increase all party members' ATK by 20% for 12s. This effect cannot stack.",conditional:ue.set4}}},he={set4:{name:"Elemental Skill hits an opponent",states:{s1:{name:"1 Stack",stats:{atk_:9},fields:[{text:"Duration",value:"7s"}]},s2:{name:"2 Stacks",stats:{atk_:18,physical_dmg_:25},fields:[{text:"Duration",value:"7s"}]}}}},ye={name:"Pale Flame",rarity:[4,5],pieces:{flower:"Stainless Bloom",plume:"Wise Doctor's Pinion",sands:"Moment of Cessation",goblet:"Surpassing Cup",circlet:"Mocking Mask"},icons:{flower:a.p+"static/media/Item_Stainless_Bloom.a553796e.png",plume:a.p+"static/media/Item_Wise_Doctor's_Pinion.4b7d1e67.png",sands:a.p+"static/media/Item_Moment_of_Cessation.2047be4b.png",goblet:a.p+"static/media/Item_Surpassing_Cup.f03fa04a.png",circlet:a.p+"static/media/Item_Mocking_Mask.598a8ef2.png"},conditionals:he,setEffects:{2:{text:"Physical DMG +25%",stats:{physical_dmg_:25}},4:{text:"When an Elemental Skill hits an opponent, ATK is increased by 9% for 7s. This effect stacks up to 2 times and can be triggered once every 0.3s. Once 2 stacks are reached, the 2-set effect is increased by 100%.",conditional:he.set4}}},Ie={name:"Prayers for Destiny",rarity:[3,4],pieces:{circlet:"Tiara of Torrents"},icons:{circlet:a.p+"static/media/Item_Tiara_of_Torrents.eda6e71b.png"},setEffects:{1:{text:Object(l.jsxs)("span",{children:["Affected by ",Object(l.jsx)("span",{className:"text-hydro",children:"Hydro"})," for 40% less time."]}),stats:{}}}},we={name:"Prayers for Illumination",rarity:[3,4],pieces:{circlet:"Tiara of Flame"},icons:{circlet:a.p+"static/media/Item_Tiara_of_Flame.2143b195.png"},setEffects:{1:{text:Object(l.jsxs)("span",{children:["Affected by ",Object(l.jsx)("span",{className:"text-pyro",children:"Pyro"})," for 40% less time."]}),stats:{}}}},xe={name:"Prayers for Wisdom",rarity:[3,4],pieces:{circlet:"Tiara of Thunder"},icons:{circlet:a.p+"static/media/Item_Tiara_of_Thunder.3969dc1d.png"},setEffects:{1:{text:Object(l.jsxs)("span",{children:["Affected by ",Object(l.jsx)("span",{className:"text-electro",children:"Electro"})," for 40% less time."]}),stats:{}}}},je={name:"Prayers to Springtime",rarity:[3,4],pieces:{circlet:"Tiara of Frost"},icons:{circlet:a.p+"static/media/Item_Tiara_of_Frost.45d02907.png"},setEffects:{1:{text:Object(l.jsxs)("span",{children:["Affected by ",Object(l.jsx)("span",{className:"text-cryo",children:"Cryo"})," for 40% less time."]}),stats:{}}}},ve={name:"Resolution of Sojourner",rarity:[3,4],pieces:{flower:"Heart of Comradeship",plume:"Feather of Homecoming",sands:"Sundial of the Sojourner",goblet:"Goblet of the Sojourner",circlet:"Crown of Parting"},icons:{flower:a.p+"static/media/Item_Heart_of_Comradeship.682913d0.png",plume:a.p+"static/media/Item_Feather_of_Homecoming.3abb439f.png",sands:a.p+"static/media/Item_Sundial_of_the_Sojourner.5d2205a3.png",goblet:a.p+"static/media/Item_Goblet_of_the_Sojourner.2001e918.png",circlet:a.p+"static/media/Item_Crown_of_Parting.9f8b613d.png"},setEffects:{2:{text:"ATK +18%",stats:{atk_:18}},4:{text:"Increases Charged Attack CRIT Rate by 30%.",stats:{charged_critRate_:30}}}},Ee=a.p+"static/media/Item_Summer_Night's_Bloom.3cfa81cb.png",ke=a.p+"static/media/Item_Summer_Night's_Finale.e29ff9bc.png",Oe=a.p+"static/media/Item_Summer_Night's_Mask.8fb771ab.png",Ce={set4:{name:"With Shield",stats:{normal_dmg_:40,charged_dmg_:40}}},Te={name:"Retracing Bolide",rarity:[4,5],pieces:{flower:"Summer Night's Bloom",plume:"Summer Night's Finale",sands:"Summer Night's Moment",goblet:"Summer Night's Waterballoon",circlet:"Summer Night's Mask"},icons:{flower:Ee,plume:ke,sands:a.p+"static/media/Item_Summer_Night's_Moment.e8b7b580.png",goblet:a.p+"static/media/Item_Summer_Night's_Waterballoon.6c220a1c.png",circlet:Oe},conditionals:Ce,setEffects:{2:{text:"Increases the effectiveness of shields by 35%",stats:{powShield_:35}},4:{text:"Gain an additional 40% Normal and Charged Attack DMG while under the protection of a shield.",conditional:Ce.set4}}},Se={name:"Scholar",rarity:[3,4],pieces:{flower:"Scholar's Bookmark",plume:"Scholar's Quill Pen",sands:"Scholar's Clock",goblet:"Scholar's Ink Cup",circlet:"Scholar's Lens"},icons:{flower:a.p+"static/media/Item_Scholar's_Bookmark.9b69d6da.png",plume:a.p+"static/media/Item_Scholar's_Quill_Pen.2da0fcf3.png",sands:a.p+"static/media/Item_Scholar's_Clock.8a56fdb1.png",goblet:a.p+"static/media/Item_Scholar's_Ink_Cup.677fe884.png",circlet:a.p+"static/media/Item_Scholar's_Lens.cb800c47.png"},setEffects:{2:{text:"Energy Recharge +20%",stats:{enerRech_:20}},4:{text:"Gaining Elemental Particles or Orbs gives 3 Energy to all party members who have a bow or a catalyst equipped. Can only occur once every 3s."}}},Me={set4:{name:"Elemental Skill hits an opponent",stats:{atk_:20,powShield_:30}}},De={name:"Tenacity of the Millelith",rarity:[4,5],pieces:{flower:"Flower of Accolades",plume:"Ceremonial War-Plume",sands:"Orichalceous Time-Dial",goblet:"Noble's Pledging Vessel",circlet:"General's Ancient Helm"},icons:{flower:a.p+"static/media/Item_Flower_of_Accolades.eee7a71d.png",plume:a.p+"static/media/Item_Ceremonial_War-Plume.1f5bcd26.png",sands:a.p+"static/media/Item_Orichalceous_Time-Dial.6bee0c46.png",goblet:a.p+"static/media/Item_Noble's_Pledging_Vessel.aeec5d29.png",circlet:a.p+"static/media/Item_General's_Ancient_Helm.fc1937b2.png"},conditionals:Me,setEffects:{2:{text:"HP +20%",stats:{hp_:20}},4:{text:"When an Elemental Skill hits an opponent, the ATK of all nearby party members is increased by 20% and their Shield Strength is increased by 30% for 3s. This effect can be triggered once every 0.5s. This effect can still be triggered even when the character who is using this artifact set is not on the field.",conditional:Me.set4}}},Be={name:"The Exile",rarity:[3,4],pieces:{flower:"Exile's Flower",plume:"Exile's Feather",sands:"Exile's Pocket Watch",goblet:"Exile's Goblet",circlet:"Exile's Circlet"},icons:{flower:a.p+"static/media/Item_Exile's_Flower.ce15b17f.png",plume:a.p+"static/media/Item_Exile's_Feather.389f300d.png",sands:a.p+"static/media/Item_Exile's_Pocket_Watch.2c9318eb.png",goblet:a.p+"static/media/Item_Exile's_Goblet.025d895b.png",circlet:a.p+"static/media/Item_Exile's_Circlet.24d7cb3f.png"},setEffects:{2:{text:"Energy Recharge +20%",stats:{enerRech_:20}},4:{text:"Using an Elemental Burst regenerates 2 Energy for other party members every 2s for 6s. This effect cannot stack."}}},Ge={name:"Thundering Fury",rarity:[4,5],pieces:{flower:"Thunderbird's Mercy",plume:"Survivor of Catastrophe",sands:"Hourglass of Thunder",goblet:"Omen of Thunderstorm",circlet:"Thunder Summoner's Crown"},icons:{flower:a.p+"static/media/Item_Thunderbird's_Mercy.177c2948.png",plume:a.p+"static/media/Item_Survivor_of_Catastrophe.120209f4.png",sands:a.p+"static/media/Item_Hourglass_of_Thunder.81e88e56.png",goblet:a.p+"static/media/Item_Omen_of_Thunderstorm.d6516589.png",circlet:a.p+"static/media/Item_Thunder_Summoner's_Crown.8dc75e93.png"},setEffects:{2:{text:Object(l.jsxs)("span",{children:[Object(l.jsx)("span",{className:"text-electro",children:"Electro DMG Bonus"})," +15%"]}),stats:{electro_dmg_:15}},4:{text:"Increases damage caused by Overloaded, Electro-Charged, and Superconduct DMG by 40%. Triggering such effects decreases Elemental Skill CD by 1s. Can only occur once every 0.8s.",stats:{overloaded_dmg_:40,electrocharged_dmg_:40,superconduct_dmg_:40}}}},Pe=a.p+"static/media/Item_Thundersoother's_Heart.2efdfc95.png",Fe=a.p+"static/media/Item_Thundersoother's_Plume.137f2173.png",Ae=a.p+"static/media/Item_Hour_of_Soothing_Thunder.97cfc9f7.png",Re=a.p+"static/media/Item_Thundersoother's_Goblet.c202e226.png",He=a.p+"static/media/Item_Thundersoother's_Diadem.3d4c1cd2.png",Ne={set4:{name:Object(l.jsxs)("span",{children:["Enemies affected by ",Object(l.jsx)("span",{className:"text-electro",children:"Electro"})]}),stats:{dmg_:35}}},We={name:"Thundersoother",rarity:[4,5],pieces:{flower:"Thundersoother's Heart",plume:"Thundersoother's Plume",sands:"Hour of Soothing Thunder",goblet:"Thundersoother's Goblet",circlet:"Thundersoother's Diadem"},icons:{flower:Pe,plume:Fe,sands:Ae,goblet:Re,circlet:He},conditionals:Ne,setEffects:{2:{text:Object(l.jsxs)("span",{children:[Object(l.jsx)("span",{className:"text-electro",children:"Electro RES"})," increased by 40%"]}),stats:{electro_res_:40}},4:{text:Object(l.jsxs)("span",{children:["Increases DMG against enemies affected by ",Object(l.jsx)("span",{className:"text-electro",children:"Electro"})," by 35%."]}),conditional:Ne.set4}}},Le=a.p+"static/media/Item_Tiny_Miracle's_Flower.bd09d3e3.png",Ve=a.p+"static/media/Item_Tiny_Miracle's_Feather.741ccc8d.png",ze=a.p+"static/media/Item_Tiny_Miracle's_Hourglass.7c6d9210.png",Ue=a.p+"static/media/Item_Tiny_Miracle's_Goblet.3b911cbf.png",Ke=a.p+"static/media/Item_Tiny_Miracle's_Earrings.7b4aa983.png",Je={set4:{name:"Incoming DMG",states:{anemo:{name:Object(l.jsx)("span",{className:"text-anemo",children:"Anemo"}),stats:{anemo_res_:30}},geo:{name:Object(l.jsx)("span",{className:"text-geo",children:"Geo"}),stats:{geo_res_:30}},electro:{name:Object(l.jsx)("span",{className:"text-electro",children:"Electro"}),stats:{electro_res_:30}},hydro:{name:Object(l.jsx)("span",{className:"text-hydro",children:"Hydro"}),stats:{hydro_res_:30}},pyro:{name:Object(l.jsx)("span",{className:"text-pyro",children:"Pyro"}),stats:{pyro_res_:30}},cryo:{name:Object(l.jsx)("span",{className:"text-cryo",children:"Cryo"}),stats:{cryo_res_:30}}},fields:[{text:"CD",value:"10s"}]}},qe={name:"Tiny Miracle",rarity:[3,4],pieces:{flower:"Tiny Miracle's Flower",plume:"Tiny Miracle's Feather",sands:"Tiny Miracle's Hourglass",goblet:"Tiny Miracle's Goblet",circlet:"Tiny Miracle's Earrings"},icons:{flower:Le,plume:Ve,sands:ze,goblet:Ue,circlet:Ke},conditionals:Je,setEffects:{2:{text:"All Elemental RES increased by 20%",stats:{anemo_res_:20,geo_res_:20,electro_res_:20,hydro_res_:20,pyro_res_:20,cryo_res_:20}},4:{text:"Incoming elemental DMG increases corresponding Elemental RES by 30% for 10s. Can only occur once every 10s.",conditional:Je.set4}}},Qe={name:"Traveling Doctor",rarity:[3],pieces:{flower:"Traveling Doctor's Silver Lotus",plume:"Traveling Doctor's Owl Feather",sands:"Traveling Doctor's Pocket Watch",goblet:"Traveling Doctor's Medicine Pot",circlet:"Traveling Doctor's Handkerchief Crown"},icons:{flower:a.p+"static/media/Item_Traveling_Doctor's_Silver_Lotus.382008d6.png",plume:a.p+"static/media/Item_Traveling_Doctor's_Owl_Feather.601e6044.png",sands:a.p+"static/media/Item_Traveling_Doctor's_Pocket_Watch.9240117c.png",goblet:a.p+"static/media/Item_Traveling_Doctor's_Medicine_Pot.46120643.png",circlet:a.p+"static/media/Item_Traveling_Doctor's_Handkerchief.99f2ad66.png"},setEffects:{2:{text:"Increases incoming healing by 20%.",stats:{incHeal_:20}},4:{text:function(e){return Object(l.jsxs)("span",{children:["Using Elemental Burst restores 20% HP",Object(c.a)(20,e,"finalHP"),"."]})}}}},Ye=a(167),Xe=a(16),Ze=a.p+"static/media/Item_In_Remembrance_of_Viridescent_Fields.0b1e1ed3.png",$e=a.p+"static/media/Item_Viridescent_Arrow_Feather.4c374131.png",et=a.p+"static/media/Item_Viridescent_Venerer's_Determination.7d9dd598.png",tt=a.p+"static/media/Item_Viridescent_Venerer's_Vessel.df772eed.png",at=a.p+"static/media/Item_Viridescent_Venerer's_Diadem.12cf1052.png",st=a(168),rt={set4:{name:"Element Swirled",states:Object.fromEntries(Object.entries(st.a).filter((function(e){var t=Object(Xe.a)(e,1)[0];return"anemo"!==t&&"geo"!==t&&"physical"!==t})).map((function(e){var t=Object(Xe.a)(e,2),a=t[0],s=t[1].name;return[a,{name:Object(l.jsx)("span",{className:"text-".concat(a),children:s}),stats:Object(Ye.a)({},"".concat(a,"_enemyRes_"),-40)}]})))}},nt={Adventurer:m,ArchaicPetra:y,Berserker:O,BlizzardStrayer:P,BloodstainedChivalry:V,BraveHeart:K,CrimsonWitchOfFlames:q,DefendersWill:Y,Gambler:Z,GladiatorsFinale:$,HeartOfDepth:te,Instructor:se,Lavawalker:de,LuckyDog:me,MaidenBeloved:_e,MartialArtist:ge,NoblesseOblige:be,PaleFlame:ye,PrayersForDestiny:Ie,PrayersForIllumination:we,PrayersForWisdom:xe,PrayersToSpringtime:je,ResolutionOfSojourner:ve,RetracingBolide:Te,Scholar:Se,TenacityOfTheMillelith:De,TheExile:Be,ThunderingFury:Ge,Thundersoother:We,TinyMiracle:qe,TravelingDoctor:Qe,ViridescentVenerer:{name:"Viridescent Venerer",rarity:[4,5],pieces:{flower:"In Remembrance of Viridescent Fields",plume:"Viridescent Arrow Feather",sands:"Viridescent Venerer's Determination",goblet:"Viridescent Venerer's Vessel",circlet:"Viridescent Venerer's Diadem"},icons:{flower:Ze,plume:$e,sands:et,goblet:tt,circlet:at},conditionals:rt,setEffects:{2:{text:Object(l.jsxs)("span",{children:[Object(l.jsx)("span",{className:"text-anemo",children:"Anemo DMG Bonus"})," +15%"]}),stats:{anemo_dmg_:15}},4:{text:"Increases Swirl DMG by 60%. Decreases opponent's Elemental RES to the element infused in the Swirl by 40% for 10s.",stats:{swirl_dmg_:60},conditional:rt.set4}}},WanderersTroupe:{name:"Wanderer's Troupe",rarity:[4,5],pieces:{flower:"Troupe's Dawnlight",plume:"Bard's Arrow Feather",sands:"Concert's Final Hour",goblet:"Wanderer's String-Kettle",circlet:"Conductor's Top Hat"},icons:{flower:a.p+"static/media/Item_Troupe's_Dawnlight.28b136bd.png",plume:a.p+"static/media/Item_Bard's_Arrow_Feather.28f8817b.png",sands:a.p+"static/media/Item_Concert's_Final_Hour.96fae1f1.png",goblet:a.p+"static/media/Item_Wanderer's_String_Kettle.ab979823.png",circlet:a.p+"static/media/Item_Conductor's_Top_Hat.5e063b6e.png"},setEffects:{2:{text:"Elemental Mastery +80",stats:{eleMas:80}},4:{text:"Increases Charged Attack DMG by 35% if the character uses a Catalyst or Bow.",stats:function(e){return("catalyst"===e.weaponType||"bow"===e.weaponType)&&{charged_dmg_:35}}}}}};t.default=nt}}]);
//# sourceMappingURL=17.1d052c34.chunk.js.map