(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},102:function(e,t,a){},103:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(25),r=a.n(c),o=(a(62),a(5)),s=a(6),i=a(9),m=a(7),u=a(8),p=a(11),h=a.n(p),f=(a(80),a(105)),E=a(106),d=a(107),b=a(108),g=a(51),v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={data:null},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.a.get("http://teensmart.local/api/teensmart_header?_format=json").then(function(t){e.setState({apply:t.data})}).catch(function(e){console.log("an error occured"),console.log(e)})}},{key:"render",value:function(){var e=this.state.apply;return l.a.createElement("section",null,e&&e.apply.map(function(e,t){return l.a.createElement(f.a,{key:t,fluid:!0,className:"main-bg jumbotron p-3"},l.a.createElement("h2",{className:"App-title"},e.apply_title),l.a.createElement(E.a,{fluid:!0},l.a.createElement(d.a,null,l.a.createElement(b.a,{sm:6,className:"jumbotron-text"},l.a.createElement("p",null,e.apply_text)),l.a.createElement(b.a,{sm:6,className:"m-auto text-center"},l.a.createElement(g.a,{className:"applyNow-btn m-auto pt-3 text-center",href:e.apply_url},e.apply_button)))))}))}}]),t}(l.a.Component),y=a(115),N=a(109),j=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={data:null},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.a.get("http://teensmart.local/api/benefit?_format=json").then(function(t){e.setState({benefits:t.data})}).catch(function(e){console.log("an error occured"),console.log(e)})}},{key:"render",value:function(){var e=this.state.benefits;return l.a.createElement("section",{className:"pt-3 pl-3"},l.a.createElement("h2",{className:"App-title"},"What will I get as a volunteer?"),l.a.createElement(E.a,{fluid:!0},l.a.createElement(d.a,null,e&&e.map(function(e,t){return l.a.createElement(y.a,{key:t,className:"benefit"},l.a.createElement(N.a,{variant:"top",roundedCircle:!0,src:"http://teensmart.local"+e.field_benefiticon,className:"benefit-image"}),l.a.createElement(y.a.Body,null,l.a.createElement(y.a.Title,{className:"benefit-title"},e.field_benefitext)))}))))}}]),t}(l.a.Component),k=a(113),O=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={data:null},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.a.get("http://teensmart.local/api/faq?_format=json").then(function(t){e.setState({faqs:t.data})}).catch(function(e){console.log("an error occured"),console.log(e)})}},{key:"render",value:function(){var e=this.state.faqs;return l.a.createElement("section",{className:"pt-3 pl-3"},l.a.createElement("h2",{className:"App-title"},"Do you have any question?"),l.a.createElement("p",null,"If your question is not answered below, you can contact us at volunteer@teensmart.org"),l.a.createElement(k.a,{className:"faq",xs:12,sm:6},e&&e.map(function(e,t){return l.a.createElement(y.a,{key:t},l.a.createElement(y.a.Header,null,l.a.createElement(k.a.Toggle,{className:"question",as:g.a,variant:"link",eventKey:t},e.field_questions),l.a.createElement(k.a.Collapse,{eventKey:t},l.a.createElement(y.a.Body,null,e.field_answers))))})))}}]),t}(l.a.Component),_=a(29),x=a.n(_),w=a(30),S=a.n(w),C=a(31),I=a.n(C),T=a(32),D=a.n(T),W=a(33),q=a.n(W),A=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.data;return l.a.createElement("footer",{className:"main-bg"},l.a.createElement(d.a,null,l.a.createElement(b.a,{sm:6,className:"logos"},e&&e.logos.map(function(e,t){return e.logo_secondary?l.a.createElement("div",{key:t},l.a.createElement("a",{href:"http://teensmart.local"},l.a.createElement(N.a,{className:"logo",src:"http://teensmart.local".concat(e.logo_primary),alt:"TeenSmart"})),l.a.createElement("a",{href:"http://teensmart.local"},l.a.createElement(N.a,{className:"logo",src:"http://teensmart.local".concat(e.logo_secondary),alt:"JovenSalud"}))):l.a.createElement("a",{href:"http://teensmart.local"},l.a.createElement(N.a,{className:"logo",src:"http://teensmart.local".concat(e.logo_primary),alt:"TeenSmart"}))}),l.a.createElement("p",{className:"contact-links"},l.a.createElement("a",{href:"#contact"},"Contact us")," | ",l.a.createElement("a",{href:"#volunteer"},"Volunteer")," | ",l.a.createElement("a",{href:"#involve"},"Get involved")),l.a.createElement("p",null,"\xa9 2019 TeenSmart")),l.a.createElement(b.a,{sm:6,className:"social col text-right"},l.a.createElement("p",null,"Keep in touch"),l.a.createElement("a",{href:"#facebook"},l.a.createElement(N.a,{className:"social-button",src:I.a,alt:"Facebook"})),l.a.createElement("a",{href:"#twitter"},l.a.createElement(N.a,{className:"social-button",src:D.a,alt:"Twitter"})),l.a.createElement("a",{href:"#youtube"},l.a.createElement(N.a,{className:"social-button",src:S.a,alt:"Youtube"})),l.a.createElement("a",{href:"#skype"},l.a.createElement(N.a,{className:"social-button",src:q.a,alt:"Skype"})),l.a.createElement("a",{href:"#mail"},l.a.createElement(N.a,{className:"social-button",src:x.a,alt:"e-mail"})))))}}]),t}(l.a.Component),M=a(110),B=a(116),F=a(52),J=(a(94),function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.data;return l.a.createElement(E.a,{fluid:!0},l.a.createElement(d.a,null,l.a.createElement(b.a,{sm:4,md:6,lg:7,className:"logos"},e&&e.logos.map(function(e,t){return e.logo_secondary?l.a.createElement("div",{key:t},l.a.createElement(N.a,{className:"logo",src:"http://teensmart.local".concat(e.logo_primary),href:"#",alt:"TeenSmart"}),l.a.createElement(N.a,{className:"logo",src:"http://teensmart.local".concat(e.logo_secondary),href:"#",alt:"TeenSmart"})):l.a.createElement(N.a,{className:"logo",src:"http://teensmart.local".concat(e.logo_primary),href:"#",alt:"TeenSmart"})})),l.a.createElement(b.a,{sm:4,md:3,className:"social d-flex justify-content-around"},l.a.createElement(N.a,{className:"social-button float-right",src:q.a,alt:"Facebook"}),l.a.createElement(N.a,{className:"social-button float-right",src:x.a,alt:"Facebook"}),l.a.createElement(N.a,{className:"social-button float-right",src:S.a,alt:"Facebook"}),l.a.createElement(N.a,{className:"social-button float-right",src:D.a,alt:"Facebook"}),l.a.createElement(N.a,{className:"social-button float-right",src:I.a,alt:"Facebook"})),l.a.createElement(b.a,{sm:4,md:3,lg:2,className:"col"},l.a.createElement(M.a,{className:"float-right"},l.a.createElement(B.a,{className:"languageSelector",type:"radio",name:"options",defaultValue:1},l.a.createElement(F.a,{className:"button language",value:1},"English"),l.a.createElement(F.a,{className:"button language",value:2},"Espa\xf1ol"))))))}}]),t}(l.a.Component)),V=(a(95),function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("section",null,l.a.createElement(f.a,{fluid:!0,className:"main-bg"},l.a.createElement(E.a,{fluid:!0,className:"pt-3"},l.a.createElement(d.a,{className:"pl-3"},l.a.createElement("h2",{className:"App-title"}," Our volunteer's impact")),l.a.createElement(d.a,{className:"pl-5"},l.a.createElement(b.a,{sm:6},l.a.createElement("br",null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("strong",null,l.a.createElement("h1",null,"+50")),l.a.createElement("p",null," Weekly hours ",l.a.createElement("br",null),"counseling young ",l.a.createElement("br",null),"students")),l.a.createElement("div",{className:"col"},l.a.createElement("strong",null,l.a.createElement("h1",null,"+50")),l.a.createElement("p",null," Weekly hours ",l.a.createElement("br",null),"counseling young ",l.a.createElement("br",null),"students")),l.a.createElement("div",{className:"col"},l.a.createElement("strong",null,l.a.createElement("h1",null,"+50")),l.a.createElement("p",null," Weekly hours ",l.a.createElement("br",null),"counseling young ",l.a.createElement("br",null),"students")))),l.a.createElement(b.a,{sm:6,style:{padding:50}},l.a.createElement("div",null,l.a.createElement("h6",null,"Teensmart International is helping young men and women's nself-care and self-empowerment with the goal of reducing or preventing six risky health behaviors and promoting personal leadership. But this couldn't be done without our remarkable volunteers; since they are the ones that help us create a positive impact in so many young people.")),l.a.createElement("br",null),l.a.createElement("button",{type:"submit",className:"Impact-applybutton"},"I want to be a volunteer"))))))}}]),t}(l.a.Component)),K=a(112),G=a(111),H=(a(96),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={data:null},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.a.get("http://teensmart.local/api/teensmart-navigation?_format=json").then(function(t){e.setState({navigation:t.data})}).catch(function(e){console.log("an error occured"),console.log(e)})}},{key:"render",value:function(){var e=this.state.navigation;return l.a.createElement(K.a,{className:"navbar sticky-top",variant:"light",expand:"sm"},l.a.createElement(K.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(K.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(G.a,{className:"mr-auto"},e&&e.teensmartNavigation.map(function(e,t){return l.a.createElement(G.a.Link,{key:t,className:"nav-link text-center",href:e.link},e.title)})),l.a.createElement(g.a,{className:"button d-block float-sm-right mr-md-3",href:"#"},"Donate now >")))}}]),t}(l.a.Component)),L=a(19),Y=(a(99),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={selectedId:null,data:[{id:"1",title:"test"},{id:"2",title:"Sergio"}]},e.change=e.change.bind(Object(L.a)(e)),e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"change",value:function(e){console.log(e.target.value),this.setState({selectedId:e.target.value})}},{key:"render",value:function(){var e=this;return l.a.createElement("section",{className:"Oportunities pt-3 pl-3"},l.a.createElement("h2",{className:"App-title"},"Want to involve yourself as volunteer with us?"),l.a.createElement(E.a,null,l.a.createElement(d.a,null,l.a.createElement(b.a,{md:{span:12}},l.a.createElement("select",{onChange:this.change},l.a.createElement("option",null,"-- Select an option"),this.state.data.map(function(e){return l.a.createElement("option",{value:e.id},e.title)})),this.state.selectedId?this.state.data.map(function(t){return t.id==e.state.selectedId&&l.a.createElement("div",null)}):null))))}}]),t}(l.a.Component)),$=(a(100),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={data:null},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.a.get("http://teensmart.local/api/step?_format=json").then(function(t){e.setState({steps:t.data})}).catch(function(e){console.log("an error occured"),console.log(e)})}},{key:"render",value:function(){var e=this.state.steps;return l.a.createElement("section",{className:"Steps"},l.a.createElement("h2",{className:"App-title"},"Want to involve yourself as volunteer with us?"),l.a.createElement(E.a,null,l.a.createElement(d.a,null,e&&e.map(function(e,t){return 0===t?l.a.createElement(b.a,{key:t,md:{span:2,offset:1}},l.a.createElement("span",{className:"Steps-circle hidden-xs"},t+1),l.a.createElement("span",{className:"Steps-circle show-xs"},t+1),l.a.createElement("p",{className:"Steps-item"},e.field_steptext_1),l.a.createElement("p",{className:"Steps-item"},l.a.createElement("a",{href:e.field_steplinkurl},e.field_steplinktext))):t%2>0?l.a.createElement(b.a,{key:t,md:{span:2}},l.a.createElement("p",{className:"Steps-item"},e.field_steptext_1),l.a.createElement("p",{className:"Steps-item"},l.a.createElement("a",{href:e.field_steplinkurl},e.field_steplinktext)),l.a.createElement("span",{className:"Steps-circle hidden-xs"},t+1),l.a.createElement("span",{className:"Steps-circle show-xs"},t+1)):l.a.createElement(b.a,{key:t,md:{span:2}},l.a.createElement("span",{className:"Steps-circle hidden-xs"},t+1),l.a.createElement("p",{className:"Steps-item"},e.field_steptext_1),l.a.createElement("p",{className:"Steps-item"},l.a.createElement("a",{href:e.field_steplinkurl},e.field_steplinktext)),l.a.createElement("span",{className:"Steps-circle show-xs"},t+1))}))))}}]),t}(l.a.Component)),z=a(114),P=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={data:null},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.a.get("http://teensmart.local/api/types?_format=json").then(function(t){e.setState({types:t.data})}).catch(function(e){console.log("an error occured"),console.log(e)})}},{key:"render",value:function(){var e=this.state.types;return l.a.createElement("section",{className:"main-bg pt-3 pl-3"},l.a.createElement("h2",{className:"App-title"},"What kind of volunteer work can you do with us?"),l.a.createElement(z.a,{className:"carousel d-block d-sm-none",prevIcon:l.a.createElement("span",{className:"carousel-icon"},"<"),nextIcon:l.a.createElement("span",{className:"carousel-icon"},">")},e&&e.map(function(e,t){return l.a.createElement(z.a.Item,{key:t},l.a.createElement("h3",null,e.field_volunteertitle),l.a.createElement("p",null,e.field_volunteertext))})),l.a.createElement(E.a,{fluid:!0,className:"d-none d-sm-block"},l.a.createElement(d.a,{className:"types-desktop"},e&&e.map(function(e,t){return l.a.createElement(y.a,{key:t,className:"volunteer-type"},l.a.createElement(y.a.Body,{className:"volunteer-body"},l.a.createElement(y.a.Title,null,l.a.createElement("h3",null,e.field_volunteertitle)),l.a.createElement(y.a.Text,null,e.field_volunteertext)))}))))}}]),t}(l.a.Component),Q=(a(101),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={hero:null},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.a.get("http://teensmart.local/api/hero?_format=json").then(function(t){e.setState({hero:t.data})}).catch(function(e){console.log("an error occured"),console.log(e)})}},{key:"render",value:function(){var e=this.state.hero;return l.a.createElement(f.a,{fluid:!0,className:"main-bg jumbotron p-0"},l.a.createElement(E.a,{className:"mt-4 hero"},e&&e.map(function(e,t){return l.a.createElement(d.a,{key:t},l.a.createElement(b.a,{sm:6,className:"jumbotron-text m-auto pt-3 pb-1"},l.a.createElement("p",null,e.field_testimonial),l.a.createElement("p",{className:"text-right font-weight-bold"},l.a.createElement("a",{href:e.field_herolink},"Vinicio, featured volunteer"))),l.a.createElement(b.a,{sm:6,className:"jumbotron-photo m-auto"},l.a.createElement("img",{src:"http://teensmart.local"+e.field_heroimage,alt:"Jumbotron",style:{maxWidth:"100%"}})))})))}}]),t}(l.a.Component)),R=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={data:null},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.a.get("http://teensmart.local/api/teensmart_header?_format=json").then(function(t){e.setState({blocks:t.data})}).catch(function(e){console.log("an error occured"),console.log(e)})}},{key:"render",value:function(){var e=this.state.blocks;return l.a.createElement("div",{id:"Volunteer"},l.a.createElement(J,{data:e}),l.a.createElement(H,null),l.a.createElement(Q,null),l.a.createElement(P,null),l.a.createElement(v,null),l.a.createElement($,null),l.a.createElement(Y,null),l.a.createElement(j,null),l.a.createElement(V,null),l.a.createElement(O,null),l.a.createElement(A,{data:e}))}}]),t}(l.a.Component),U=(a(102),function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(R,null))}}]),t}(l.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},29:function(e,t,a){e.exports=a.p+"static/media/icon-mail.59fb1fc4.png"},30:function(e,t,a){e.exports=a.p+"static/media/icon-youtube.063ecaa8.png"},31:function(e,t,a){e.exports=a.p+"static/media/icon-facebook.dc5c6da1.png"},32:function(e,t,a){e.exports=a.p+"static/media/icon-twitter.8cdbcd61.png"},33:function(e,t,a){e.exports=a.p+"static/media/icon-skype.2f8404b0.png"},56:function(e,t,a){e.exports=a(103)},62:function(e,t,a){},80:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){},99:function(e,t,a){}},[[56,1,2]]]);
//# sourceMappingURL=main.97a826aa.chunk.js.map