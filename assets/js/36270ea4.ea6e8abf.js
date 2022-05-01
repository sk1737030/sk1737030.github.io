"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[653],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return g}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=c(r),g=i,f=s["".concat(l,".").concat(g)]||s[g]||m[g]||a;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=s;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:i,o[1]=u;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},5282:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return m}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],u={title:"Request Rate Limiter\ub97c \ub9cc\ub4e4\uc5b4\ubcf4\uc790!",description:"Make Custom Rate Limiter With Spring Cloud Gateway",slug:"RateLimiter",authors:"dongle",tags:["SCG","Spring Cloud Gateway","Rate Limiter"],image:"https://i.imgur.com/mErPwqL.png",hide_table_of_contents:!1},l=void 0,c={permalink:"/RateLimiter",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-05-01/2022-05-01-Spring-cloud-gateway.md",source:"@site/blog/2022-05-01/2022-05-01-Spring-cloud-gateway.md",title:"Request Rate Limiter\ub97c \ub9cc\ub4e4\uc5b4\ubcf4\uc790!",description:"Make Custom Rate Limiter With Spring Cloud Gateway",date:"2022-05-01T00:00:00.000Z",formattedDate:"May 1, 2022",tags:[{label:"SCG",permalink:"/tags/scg"},{label:"Spring Cloud Gateway",permalink:"/tags/spring-cloud-gateway"},{label:"Rate Limiter",permalink:"/tags/rate-limiter"}],readingTime:13.895,truncated:!0,authors:[{name:"Dongle",title:"Junior Backend Developer",url:"https://github.com/sk1737030",imageURL:"https://github.com/sk1737030.png",key:"dongle"}],frontMatter:{title:"Request Rate Limiter\ub97c \ub9cc\ub4e4\uc5b4\ubcf4\uc790!",description:"Make Custom Rate Limiter With Spring Cloud Gateway",slug:"RateLimiter",authors:"dongle",tags:["SCG","Spring Cloud Gateway","Rate Limiter"],image:"https://i.imgur.com/mErPwqL.png",hide_table_of_contents:!1}},p={authorsImageUrls:[void 0]},m=[{value:"Api Limitier\uac00 \ud544\uc694\ud55c \uc774\uc720?",id:"api-limitier\uac00-\ud544\uc694\ud55c-\uc774\uc720",level:2}],s={toc:m};function g(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sk1737030/til/tree/master/spring-cloud-gateway-late-limiter"},"\ubaa8\ub4e0 \uc18c\uc2a4"),"\ub294 \uc694\uae30\uc11c \ud655\uc778\uac00\ub2a5\ud569\ub2c8\ub2e4. :)  "),(0,a.kt)("h1",{id:"spring-cloud-gateway\ub97c-\uc0ac\uc6a9\ud574\uc11c-api-limiter-\uad6c\ud604\uc744-\ud574\ubcf4\uc790"},"Spring Cloud Gateway\ub97c \uc0ac\uc6a9\ud574\uc11c API Limiter \uad6c\ud604\uc744 \ud574\ubcf4\uc790!"),(0,a.kt)("h2",{id:"api-limitier\uac00-\ud544\uc694\ud55c-\uc774\uc720"},"Api Limitier\uac00 \ud544\uc694\ud55c \uc774\uc720?"),(0,a.kt)("p",null,"limiter\ub294 \uc65c \ud544\uc694\ud560\uae4c\ub97c \uba3c\uc800 \uc0dd\uac01\ud574\ubcf4\uba74 \ub2e4\uc591\ud55c \uc774\uc720\uac00 \uc788\uaca0\uc9c0\ub9cc, \uc815\ub9d0 \uac04\ub2e8\ud558\uac8c \uc0dd\uac01\ud574\ubcf4\uba74 10\ucd08 \uac78\ub9ac\ub294 \ud5e4\ube44\ud55c api\uac00 \uc788\uc744 \uacbd\uc6b0 client\ub4e4\uc774 \uc9e7\uc740 \uc2dc\uac04\uc5d0 api\ub97c \ubb34\ubd84\ubcc4\ud558\uac8c \uc694\uccad\ud558\uac8c\ub418\uba74 \uc6b0\ub9ac\uc758 \uc11c\ubc84\ub294 ",(0,a.kt)("del",{parentName:"p"},"\ub054\ucc0d\ud55c \uacb0\ub9d0"),"\uc744 \ub9de\uac8c \ub420 \uac83\uc774\ub2e4."))}g.isMDXComponent=!0}}]);