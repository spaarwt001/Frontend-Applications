webpackJsonp([0],{NHnr:function(e,a,l){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=l("7+uW"),t={render:function(){var e=this.$createElement,a=this._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]};var o=l("VU/8")({name:"App"},t,!1,function(e){l("rnLt")},null,null).exports,i=l("/ocq"),r=[{question:"Geslacht ",id:0,options:[{label:"Vrouw",value:2},{label:"Man",value:1}]},{question:"Herkomst ouders",id:1,options:[{label:"Beide ouders Nederlands",value:1},{label:"Beide ouders niet Nederlands",value:2},{label:"Een van de ouders Nederlands en de andere niet Nederlands",value:2}]},{question:"Type huishouden",id:2,options:[{label:"Gehuwd paar met kinderen",value:1},{label:"Eenouderhuishouden",value:1},{label:"Eenpersoonshuishouden",value:1},{label:"Gehuwd paar zonder kinderen",value:1},{label:"Institutioneel huishouden",value:1},{label:"Niet-gehuwd paar met kinderen",value:1},{label:"Niet-gehuwd paar zonder kinderen",value:1},{label:"Overig huishouden",value:1},{label:"Onbekend huishouden",value:1}]},{question:"Gescheiden ouders",id:3,options:[{label:"Nee",value:2},{label:"Ja",value:2}]},{question:"Voortijdig schoolverlaten",id:4,options:[{label:"Door in onderwijs",value:1},{label:"Onbekend",value:1},{label:"Niet van toepassing",value:1},{label:"Uit onderwijs met startkwalificatie",value:1},{label:"Voortijdig schoolverlaten",value:1}]},{question:"Soort onderwijs",id:5,options:[{label:"Regulier onderwijs",value:1},{label:"Onbekend",value:1},{label:"Niet-regulier onderwijs",value:1}]},{question:"Soort woning",id:6,options:[{label:"Eigen woning",value:1},{label:"Huurwoning met huurtoeslag",value:1},{label:"Huurwoning zonder huurtoeslag",value:1},{label:"Onbekend",value:1}]},{question:"Werk vader",id:7,options:[{label:"Werkend of overig actief",value:2},{label:"Geen werk en niet actief",value:2},{label:"Onbekend",value:2}]},{question:"Werk moeder",id:8,options:[{label:"Werkend of overig actief",value:1},{label:"Geen werk en niet actief",value:1},{label:"Onbekend",value:1}]},{question:"Slachtoffer",id:9,options:[{label:"Nee",value:1},{label:"Ja",value:1}]},{question:"Traject vooraf",id:10,options:[{label:"Geen jeugdhulp zonder verblijf gehad",value:1},{label:"Jeugdhulp zonder verblijf gehad",value:1}]},{question:"Leeftijd moeder bij geboorte",id:11,options:[{label:"Jonger dan 20 jaar",value:1},{label:"20 tot 25 jaar",value:1},{label:"25 tot 30 jaar",value:1},{label:"30 tot 35 jaar",value:1},{label:"35 tot 40 jaar",value:1},{label:"40 jaar en ouder",value:1}]},{question:"Leeftijd vader bij geboorte",id:12,options:[{label:"Jonger dan 25 jaar",value:2},{label:"25 tot 30 jaar",value:2},{label:"30 tot 35 jaar",value:2},{label:"35 tot 40 jaar",value:2},{label:"40 jaar en ouder",value:2}]},{question:"Vader of moeder verdacht",id:13,options:[{label:"Nee",value:2},{label:"Ja",value:2}]},{question:"Kind verdacht",id:14,options:[{label:"Nee",value:2},{label:"Ja",value:2}]},{question:"Halt delict",id:15,options:[{label:"Nee",value:2},{label:"Ja",value:2}]},{question:"Verandering onderwijs niveau",id:16,options:[{label:"Opschalen of gelijk blijvend",value:1.1},{label:"Afschalen",value:1.1},{label:"Onbekend",value:1.1}]},{question:"Leeftijdsverschil ouders",id:17,options:[{label:"Minder dan 5 jaar",value:2},{label:"Meer dan 5 jaar",value:2}]},{question:"Actueel onderwijs niveau",id:18,options:[{label:"Basisonderwijs",value:1},{label:"Onderwijs onbekend",value:1},{label:"Vmbo b/k, mbo 1 of mbo 2",value:1},{label:"Vmbo g/t, mbo 3 of mbo 4",value:1},{label:"Havo onderbouw, Havo bovenbouw of Hbo bachelor",value:1},{label:"Vwo of Wo bachelor",value:1}]},{question:"Hoogst behaalde diploma vader",id:19,options:[{label:"Onderwijs onbekend",value:1},{label:"Vmbo b/k, mbo 1 of mbo 2",value:1},{label:"Vmbo g/t, mbo 3 of mbo 4",value:1},{label:"Havo onderbouw, Havo bovenbouw, Hbo bachelor of Hbo master",value:1},{label:"Vwo, Wo bachelor of Wo master",value:1}]},{question:"Hoogst behaalde diploma moeder",id:20,options:[{label:"Onderwijs onbekend",value:1},{label:"Vmbo b/k, mbo 1 of mbo 2",value:1},{label:"Vmbo g/t, mbo 3 of mbo 4",value:1},{label:"Havo onderbouw, Havo bovenbouw, Hbo bachelor of Hbo master",value:1},{label:"Vwo, Wo bachelor of Wo master",value:1}]},{question:"Zwaar traject",id:21,options:[{label:"Nee",value:2.5},{label:"Ja",value:2.5}]}],u={name:"questions",props:{question:{type:Object,required:!0}},data:function(){return{selected:""}},methods:{valueView:function(e,a){q.$emit("questionValue",[e,a])}}},s={render:function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("div",{staticClass:"questions"},[l("p",[e._v(" "+e._s(e.question.question)+" ")]),e._v(" "),l("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],on:{change:[function(a){var l=Array.prototype.filter.call(a.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.selected=a.target.multiple?l:l[0]},function(a){e.valueView(e.selected,e.question.id)}]}},[l("option",{attrs:{disabled:"",value:""}},[e._v(" selecteer een antwoord ")]),e._v(" "),e._l(e.question.options,function(a){return l("option",{key:a.id,domProps:{value:a.value}},[e._v(" "+e._s(a.label)+" ")])})],2)])},staticRenderFns:[]};var d={name:"questionForm",components:{questions:l("VU/8")(u,s,!1,function(e){l("dvd/")},null,null).exports},data:function(){return console.log(r),{questionList:r}}},v={render:function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"form"},this._l(this.questionList,function(e){return a("questions",{key:e.question,attrs:{question:e}})}))},staticRenderFns:[]};var b=l("VU/8")(d,v,!1,function(e){l("g3zh")},null,null).exports,c={name:"valueView",data:function(){return{}},props:{percentage:{type:Number,required:!1}}},p={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"percentage"},[this._v("\n    "+this._s(this.percentage+"%")+"\n")])},staticRenderFns:[]};var m={name:"Home",components:{questionForm:b,valueView:l("VU/8")(c,p,!1,function(e){l("QYAW")},null,null).exports},data:function(){return{title:"Kind veilig thuis",sub:"risico op een maatregel",percentage:0,totalArray:[""]}},created:function(){var e=this;q.$on("questionValue",function(a){e.$data.totalArray.splice(a[1],1,a[0]);var l=Number((1/(1+Math.exp(-1*(-8.57219+e.$data.totalArray.reduce(function(e,a){return e+a},0))))*100).toFixed(2));e.$data.percentage=l})}},f={render:function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("div",{staticClass:"App"},[l("router-link",{attrs:{to:"/About"}},[e._v(" About ")]),e._v(" "),l("h1",[e._v(e._s(e.title))]),e._v(" "),l("h3",[e._v(e._s(e.sub))]),e._v(" "),l("valueView",{attrs:{percentage:e.percentage}}),e._v(" "),l("questionForm")],1)},staticRenderFns:[]};var h=l("VU/8")(m,f,!1,function(e){l("kb6A")},null,null).exports,g={render:function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("div",{staticClass:"about"},[l("router-link",{attrs:{to:"/"}},[e._v(" Home ")]),e._v(" "),l("h1",[e._v(" "+e._s(e.title)+" ")]),e._v(" "),l("p",[e._v(" "+e._s(e.text)+" ")])],1)},staticRenderFns:[]};var w=l("VU/8")({name:"About",data:function(){return{title:"About",text:"Deze beslissingondersteuningstool kan gebruikt worden door hulpverleners om een objectieve risico-indicatie te krijgen op een zwaardere maatregel op basis van kenmerken van het kind, de ouders en het huishouden. Onder zwaardere maatregelen vallen in dit geval jeugdhulp met verblijf, jeugdbeschermingsmaatregelen en jeugdreclasseringsmaatregelen."}}},g,!1,function(e){l("kQDH")},null,null).exports;n.a.use(i.a);var j=new i.a({routes:[{path:"/",name:"Home",component:h},{path:"/about",name:"About",component:w}]});l.d(a,"serverBus",function(){return q});var q=new n.a;new n.a({el:"#app",router:j,components:{App:o},template:"<App/>"})},QYAW:function(e,a){},"dvd/":function(e,a){},g3zh:function(e,a){},kQDH:function(e,a){},kb6A:function(e,a){},rnLt:function(e,a){}},["NHnr"]);
//# sourceMappingURL=app.c0424f6dd1a82c3113ea.js.map