(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{53:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=c(o(3)),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,o):{};r.get||r.set?Object.defineProperty(t,o,r):t[o]=e[o]}return t.default=e,t}(o(0)),i=c(o(2)),n=c(o(122));function c(e){return e&&e.__esModule?e:{default:e}}function l(e,t,o,a){r||(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var s=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&s)for(var n in s)void 0===t[n]&&(t[n]=s[n]);else t||(t=s||{});if(1===i)t.children=a;else if(i>1){for(var c=new Array(i),l=0;l<i;l++)c[l]=arguments[l+3];t.children=c}return{$$typeof:r,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}function d(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}const h=e=>{let{to:t}=e,o=p(e,["to"]);return t.includes("http")?s.default.createElement("a",u({},e,{href:t})):("#"===t[0]&&(t=a.default.join("/auto/","blog/npm-canary-scope.html")+t),s.default.createElement("a",u({},o,{href:t,onClick:o=>{if(o.preventDefault(),"#"===e.to)return!1;const r=new URL(a.default.join(window.location.origin,t));window.history.pushState((e=>({href:e.href,pathname:e.pathname,hash:e.hash,query:e.query}))(r),null,t),e.onClick();const s=new CustomEvent("changeLocation",{detail:r});return dispatchEvent(s),!1}})))};h.defaultProps={href:"",onClick:()=>{}};const v={"//www.gravatar.com/avatar/ff725a631f869cdb78beeb003825bb40":()=>Promise.resolve({default:{src:{src:"http://www.gravatar.com/avatar/ff725a631f869cdb78beeb003825bb40"},preSrc:"http://www.gravatar.com/avatar/ff725a631f869cdb78beeb003825bb40",height:80,width:80}})};class f extends s.default.Component{constructor(...e){super(...e),d(this,"state",{image:null,ImageProvider:v[this.props.src]})}componentDidMount(){this.state.image||this.state.ImageProvider().then(e=>{this.setState({image:e.default})})}render(){let{image:e}=this.state;return e&&"object"==typeof e?s.default.createElement(n.default,u({},this.props,{className:(0,i.default)("image",this.props.className),src:e.src.src,width:e.src.width||e.width,height:e.src.height||e.height,placeholder:{lqip:e.preSrc},srcSet:e.src.images?e.src.images.map(e=>(function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},r=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),r.forEach(function(t){d(e,t,o[t])})}return e})({},e,{src:e.path})):[{src:e.src,width:e.width}]})):l("img",{className:(0,i.default)("image",this.props.className),src:e})}}const m=e=>{var t,o;return o=t=class extends s.default.Component{constructor(...e){super(...e),d(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&e().then(e=>{this.setState({Comp:e.default})})}render(){const{Comp:e}=this.state;return e?s.default.createElement(e,this.props,this.props.children||null):null}},d(t,"defaultProps",{shouldLoad:!0}),o};m(()=>o.e(32).then(o.bind(null,123))),m(()=>o.e(32).then(o.bind(null,124)));var b=l(f,{src:"//www.gravatar.com/avatar/ff725a631f869cdb78beeb003825bb40",className:"authorImage"}),g=l("p",{className:"title blogTitle"},void 0,"npm: More Secure Canary Publishing"),y=l("span",{},void 0," on December 13, 2019",l("span",{})),w=l("p",{},void 0,"Publishing canary versions comes with some security risks. If your project is private you have nothing to worry about, but if your project is open source there are some security holes."),k=l("p",{},void 0,"Depending on the build platform you might be able to pass secrets to PR builds for forked repos. While this makes the developer experience of your project nice, in ",l("code",{},void 0,"auto"),"'s case publishing canary versions, it exposes your keys."),P=l("div",{className:"has-text-centered learnMore"},void 0,l(h,{to:"/auto/blog/npm-canary-scope.html"},void 0,"Read More")),N=l(f,{src:"//www.gravatar.com/avatar/ff725a631f869cdb78beeb003825bb40",className:"authorImage"}),j=l("p",{className:"title blogTitle"},void 0,"npm: More Secure Canary Publishing"),O=l("span",{},void 0," on December 13, 2019",l("span",{})),S=l("p",{},void 0,"Publishing canary versions comes with some security risks. If your project is private you have nothing to worry about, but if your project is open source there are some security holes."),x=l("p",{},void 0,"Depending on the build platform you might be able to pass secrets to PR builds for forked repos. While this makes the developer experience of your project nice, in ",l("code",{},void 0,"auto"),"'s case publishing canary versions, it exposes your keys."),C=l("p",{},void 0,"An attacker could:"),I=l("ol",{},void 0,l("li",{},void 0,"print secrets"),l("li",{},void 0,"send secrets to some server"),l("li",{},void 0,"modify ",l("code",{},void 0,"auto")," to publish to the latest tag instead of ",l("code",{},void 0,"canary"))),M=l("p",{},void 0,"No amount of code can fix these problems. If your release keys are in everyone's CI builds an attacker can do any number of things to modify what you intend for ",l("code",{},void 0,"auto")," to do (or any other release method run in the CI)."),_=l("p",{},void 0,"The solution for this is actually quite simple:"),D=l("ol",{},void 0,l("li",{},void 0,"Create a test scope that you publish canaries under (ex: ",l("code",{},void 0,"@auto-canary")," or ",l("code",{},void 0,"@auto-test"),")"),l("li",{},void 0,"Create a user that only has access to that scope"),l("li",{},void 0,"Set the default ",l("code",{},void 0,"NPM_TOKEN")," to a token that can publish to that scope (this is used for any pull request)"),l("li",{},void 0,"Set up a ",l("code",{},void 0,"secure")," token that is only accessible on the main fork (still named ",l("code",{},void 0,"NPM_TOKEN"),")")),E=l("p",{},void 0,"Step 3 might not be possible on your build platform."),L=l("p",{},void 0,"The following are the ways the ",l("code",{},void 0,"auto")," team knows how to do it. If you do not see the method for you build platform, please make a pull request!"),q=l("p",{},void 0,"To use this work flow in ",l("code",{},void 0,"auto"),", supply the following configuration to the ",l("code",{},void 0,"npm")," plugin."),T=l("pre",{},void 0,l("code",{className:"language-json"},void 0,"{",l("br",{}),"  ",l("span",{className:"hljs-attr"},void 0,'"plugins"'),": [",l("br",{}),"    [",l("br",{}),"      ",l("span",{className:"hljs-string"},void 0,'"npm"'),",",l("br",{}),"      {",l("br",{}),"        ",l("span",{className:"hljs-attr"},void 0,'"canaryScope"'),": ",l("span",{className:"hljs-string"},void 0,'"@auto-canary"'),l("br",{}),"      }",l("br",{}),"    ]",l("br",{}),"  ]",l("br",{}),"}",l("br",{}))),A=l("p",{},void 0,"Now when people make pull requests to your repos:"),H=l("ol",{},void 0,l("li",{},void 0,"your CI can run ",l("code",{},void 0,"auto shipit")),l("li",{},void 0,"the canary versions will get published under your ",l("code",{},void 0,"canaryScope")));var B=class extends s.default.Component{componentDidMount(){this.props.atIndex||window.configuration.setBlogHero("https://images.unsplash.com/photo-1566386087068-55645996b234?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1950")}render(){return l("div",{className:(0,i.default)("blogPost",this.props.className)},void 0,l("p",{},void 0,this.props.heroUrl),l("section",{},void 0,this.props.stub?l("div",{className:"card"},void 0,l("div",{className:"card-content"},void 0,l("div",{className:"media blogHeader"},void 0,l("div",{className:"media-content has-text-centered"},void 0,b,g,l("p",{className:"subtitle is-6 blogSubtitle"},void 0,l(h,{currentPage:(this&&this.props||props).currentPage,target:"_blank",to:"https://twitter.com/HipsterSmoothie"},void 0,"Andrew Lisowski"),y))),l("div",{className:"blogBody"},void 0,w,l("h2",{id:"attack-vectors"},void 0,"Attack Vectors ",l(h,{currentPage:(this&&this.props||props).currentPage,className:"fas fa-hashtag headerLink",to:"#attack-vectors","aria-hidden":"true"})),k,P))):l("div",{className:"card"},void 0,l("div",{className:"card-content"},void 0,l("div",{className:"media blogHeader"},void 0,l("div",{className:"media-content has-text-centered"},void 0,N,j,l("p",{className:"subtitle is-6 blogSubtitle"},void 0,l(h,{currentPage:(this&&this.props||props).currentPage,target:"_blank",to:"https://twitter.com/HipsterSmoothie"},void 0,"Andrew Lisowski"),O))),l("div",{className:"blogBody"},void 0,l("div",{},void 0,S,l("h2",{id:"attack-vectors"},void 0,"Attack Vectors ",l(h,{currentPage:(this&&this.props||props).currentPage,className:"fas fa-hashtag headerLink",to:"#attack-vectors","aria-hidden":"true"})),x,C,I,M,l("h2",{id:"solution"},void 0,"Solution ",l(h,{currentPage:(this&&this.props||props).currentPage,className:"fas fa-hashtag headerLink",to:"#solution","aria-hidden":"true"})),_,D,E,L,l("ul",{},void 0,l("li",{},void 0,l(h,{currentPage:(this&&this.props||props).currentPage,target:"_blank",to:"https://circleci.com/docs/2.0/contexts/",className:"external-link"},void 0,"CircleCI Context")," - Contexts provide a mechanism for securing and sharing environment variables across projects. The environment variables are defined as name/value pairs and are injected at runtime.")),l("h2",{id:"usage"},void 0,"Usage ",l(h,{currentPage:(this&&this.props||props).currentPage,className:"fas fa-hashtag headerLink",to:"#usage","aria-hidden":"true"})),q,T,A,H))))))}};t.default=B,e.exports=t.default}}]);
//# sourceMappingURL=npm-canary-scope.js.map