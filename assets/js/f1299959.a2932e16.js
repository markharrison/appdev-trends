"use strict";(self.webpackChunkmarkharrison=self.webpackChunkmarkharrison||[]).push([[547],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(h,a(a({ref:t},l),{},{components:n})):r.createElement(h,a({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1338:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],s={sidebar_label:"Identity",slug:"/identity"},c="Identity",u={unversionedId:"identity",id:"identity",title:"Identity",description:"With an organisation\u2019s trusted people now working from anywhere / often on untrusted networks \u2013 and the risk of untrusted people present on their own trusted networks, many security experts will claim that identity has become the most important protection mechanism in information security.",source:"@site/docs/14-identity.md",sourceDirName:".",slug:"/identity",permalink:"/appdev-trends/identity",tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_label:"Identity",slug:"/identity"},sidebar:"tutorialSidebar",previous:{title:"Application Security",permalink:"/appdev-trends/appsec"},next:{title:"Intelligent Edge",permalink:"/appdev-trends/intelligent-edge"}},l=[],p={toc:l};function d(e){var t=e.components,s=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"identity"},"Identity"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(3696).Z,width:"1575",height:"394"})),(0,o.kt)("p",null,"With an organisation\u2019s trusted people now working from anywhere / often on untrusted networks \u2013 and the risk of untrusted people present on their own trusted networks, many security experts will claim that identity has become the most important protection mechanism in information security."),(0,o.kt)("p",null,"Identity will combine with access controls to impose rules on who can access what and what level of access they have. For example: a user may have access to a data store but be limited to read-only. Access controls can generate audit logs of who did what, for later analysis."),(0,o.kt)("p",null,"Identity access solutions require both Authentication and Authorization."),(0,o.kt)("p",null,"Authentication is the process of identifying a user is who they claim to be. This could include multifactor authentication (MFA) checks e.g. the user must prove they have some item of knowledge (e.g. a Password) and own a token (e.g. a specific phone with an authentication app). A successful authentication will generate a security token that will contain information about the user \u2013 this token is passed in any application messages that require authorization. "),(0,o.kt)("p",null,"Authorization is the process of determining if an authentication user is granted the rights to perform the action that want to take."),(0,o.kt)("p",null,"OpenID Connect / OAuth 2.0 / SAML are commonly used protocols for the authentication / authorisation processing."),(0,o.kt)("p",null,"Handling identity may be wider than just known employees \u2013 it might also need to support external parties such as suppliers, business partners and customers. For some scenarios, it might not be about people \u2013 identities can also be assigned to trusted devices and services."),(0,o.kt)("p",null,"Azure Active Directory (Azure AD) \u2013 is a cloud directory that can store users and be used as an authentication endpoint. Azure AD can sync identities with a corporate Windows Active Directory.  Azure AD can federate with other organisations Azure AD, and useful for B2B applications."),(0,o.kt)("p",null,"Azure AD B2C \u2013 can federate the authentication process with both Azure AD and social identity providers (e.g. Facebook), and the latter is useful for many consumer applications."),(0,o.kt)("p",null,"\u2726"," ",(0,o.kt)("a",{parentName:"p",href:"https://www.microsoft.com/security/business/identity-access-management"},"https://www.microsoft.com/security/business/identity-access-management"),(0,o.kt)("br",{parentName:"p"}),"\n","\u2726"," ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/active-directory/develop/"},"https://docs.microsoft.com/azure/active-directory/develop/"),"  "),(0,o.kt)("p",null,"TechTalk Video",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/AE92MlnM6qw"},(0,o.kt)("img",{parentName:"a",src:"https://i3.ytimg.com/vi/AE92MlnM6qw/mqdefault.jpg",alt:null}))))}d.isMDXComponent=!0},3696:function(e,t,n){t.Z=n.p+"assets/images/14-identity-7869ca8d3196083da143c1e61acbf96d.png"}}]);