"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4451],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return h}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(t),h=r,d=m["".concat(i,".").concat(h)]||m[h]||u[h]||o;return t?a.createElement(d,p(p({ref:n},s),{},{components:t})):a.createElement(d,p({ref:n},s))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,p=new Array(o);p[0]=m;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var c=2;c<o;c++)p[c]=t[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2138:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),p=["components"],l={title:"Concurrent Hash Map\uc744 \uac04\ub2e8\ud558\uac8c \ub9cc\ub4e4\uc5b4\ubcf4\uc790. - 1\ud3b8",description:"Make Verrrrry Simple My Concurrent Hash Map -1",slug:"ConcurrentHashMap",authors:"dongle",tags:["Java","Map","ConcurrentHashMap"],image:"https://i.imgur.com/mErPwqL.png",hide_table_of_contents:!1},i=void 0,c={permalink:"/ConcurrentHashMap",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/2022-07-30-my-concurrentHashMap.md",source:"@site/blog/2022-07-30-my-concurrentHashMap.md",title:"Concurrent Hash Map\uc744 \uac04\ub2e8\ud558\uac8c \ub9cc\ub4e4\uc5b4\ubcf4\uc790. - 1\ud3b8",description:"Make Verrrrry Simple My Concurrent Hash Map -1",date:"2022-07-30T00:00:00.000Z",formattedDate:"July 30, 2022",tags:[{label:"Java",permalink:"/tags/java"},{label:"Map",permalink:"/tags/map"},{label:"ConcurrentHashMap",permalink:"/tags/concurrent-hash-map"}],readingTime:6.94,truncated:!0,authors:[{name:"Dongle",title:"Junior Backend Developer",url:"https://github.com/sk1737030",imageURL:"https://github.com/sk1737030.png",key:"dongle"}],frontMatter:{title:"Concurrent Hash Map\uc744 \uac04\ub2e8\ud558\uac8c \ub9cc\ub4e4\uc5b4\ubcf4\uc790. - 1\ud3b8",description:"Make Verrrrry Simple My Concurrent Hash Map -1",slug:"ConcurrentHashMap",authors:"dongle",tags:["Java","Map","ConcurrentHashMap"],image:"https://i.imgur.com/mErPwqL.png",hide_table_of_contents:!1},nextItem:{title:"\ub808\ub514\uc2a4 Atomic Operation\uc704\ud574 multi \uc640 luascript\uc758 \ucc28\uc774",permalink:"/redis-multi-lua"}},s={authorsImageUrls:[void 0]},u=[{value:"ConcurrentHashMap",id:"concurrenthashmap",level:2},{value:"ConcurrentMap",id:"concurrentmap",level:3},{value:"\uadf8\ub807\ub2e4\uba74 \uc5b4\ub5bb\uac8c \ub3d9\uc2dc\uc131\uc744 \ubcf4\uc7a5\ud560\uae4c?",id:"\uadf8\ub807\ub2e4\uba74-\uc5b4\ub5bb\uac8c-\ub3d9\uc2dc\uc131\uc744-\ubcf4\uc7a5\ud560\uae4c",level:2},{value:"\uac04\ub2e8\ud55c \uc131\ub2a5\ud14c\uc2a4\ud2b8",id:"\uac04\ub2e8\ud55c-\uc131\ub2a5\ud14c\uc2a4\ud2b8",level:2}],m={toc:u};function h(e){var n=e.components,l=(0,r.Z)(e,p);return(0,o.kt)("wrapper",(0,a.Z)({},m,l,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\uac04\ub2e8\ud558\uac8c \ub9cc\ub4e4\uc5b4\ubcf4\uc790 ConcurrentHashMap\n\ubaa8\ub4e0 \uc18c\uc2a4\ucf54\ub4dc\ub294 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sk1737030/til/tree/master/simple-concurrenthashmap"},"\uc774\uacf3"),"\uc5d0\uc11c \ud655\uc778 \uac00\ub2a5\ud569\ub2c8\ub2e4!"),(0,o.kt)("h1",{id:"\uac04\ub2e8\ud558\uac8c-\ub9cc\ub4e4\uc5b4\ubcf4\uc790-concurrenthashmap"},"\uac04\ub2e8\ud558\uac8c \ub9cc\ub4e4\uc5b4\ubcf4\uc790 ConcurrentHashMap"),(0,o.kt)("p",null,"\ub3d9\uc2dc\uc131 \ubb38\uc81c \ubc0f \uc77c\uad00\uc131\uc744 \uc704\ud574 Key Value \uad6c\uc870\ub85c \uc0ac\uc6a9\ud560 \ub54c \uac00\uc7a5 \uc27d\uac8c \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 ",(0,o.kt)("inlineCode",{parentName:"p"},"CoucurrentHashMap")," \uc774\uc600\uc9c0\ub9cc \ubd80\ub044\ub7fd\uac8c\ub3c4 \ud56d\uc0c1 \ub0b4\ubd80\uad6c\uc870\ub97c \ubcf4\uace0 \uc774\ub807\uac8c \ub3d9\uc2dc\uc131\uc744 \ubcf4\uc7a5\ud558\ub294 \uac70\uad6c\ub098\ub77c\uace0 \uc0dd\uac01\ub9cc \ud558\uace0 \ub9e4\ubc88 \ub118\uacbc\uc5c8\ub294\ub370 \uc774\ubc88 \uae30\ud68c\uc5d0 \uc815\ub9ac\ud558\uace0 \ud55c \ubc88 \uc2a5-\uc0ad \ub9cc\ub4e4\uc5b4 \ubcf4\ub824\uace0 \ud569\ub2c8\ub2e4. \uadf8\ub798\uc11c \uacb0\uc815\ud55c \uc81c\ubaa9\uc740 \uac04\ub2e8\ud558\uac8c \ub9cc\ub4e4\uc5b4\ubcf4\uc9c0 ",(0,o.kt)("inlineCode",{parentName:"p"},"ConcurrentHashMap")),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"concurrenthashmap"},"ConcurrentHashMap"),(0,o.kt)("p",null,"\ubb50 \uc5ec\ud0c0 \ub2e4\ub978 \ub9d0\uc744 \uc0dd\ub7b5\ud558\uace0 ConcurrentHashMap \ub9d0\uace0\ub3c4 \uc5ec\ub7ec Map\uc758 \uad6c\ud604\uccb4\ub4e4\uc774 \uc788\ub294\ub370, \uc65c \ud544\uc694\ub85c \ud588\uc744\uae4c\ub97c \uba3c\uc800 \uc0dd\uac01\ud574\ubcf8\ub2e4\uba74 \ud06c\uac8c 2\uac00\uc9c0 \uc815\ub3c4\uac00 \uc788\uc744 \uac70 \uac19\uc740\ub370\uc694.  "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\uc6b0\ub9ac\uac00 \uc790\uc8fc \uc0ac\uc6a9\ud558\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"HashMap"),"\uc740 ",(0,o.kt)("strong",{parentName:"p"},"thread-safe")," \ud558\uc9c0 \uc54a\uc740 java collection\uc785\ub2c8\ub2e4.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Hashtable"),"\uc740 ",(0,o.kt)("strong",{parentName:"p"},"thread-safe"),"\ud558\ub098 synchronized method \ub808\ubca8\uc5d0 \uc0ac\uc6a9\uc744\ud558\uc5ec \ube44\uc6a9\uc774 \ub9e4\uc6b0 \ube44\uc309\ub2c8\ub2e4."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\uc989 \ub2e4\uc2dc \ub9d0\ud574 \ube44\uc6a9\uc774 \ub9ce\uc774\ub4dc\ub294 \uc774\uc720\ub294 Race condition(\uacbd\uc7c1\uc0c1\ud0dc)\uc774 \ubc1c\uc0dd\ud560 \uc218 \uc788\ub294 code block\uc744 synchronized \ud0a4\uc6cc\ub4dc\ub85c \uac10\uc2f8\uba74, \ud558\ub098\uc758 \uc2a4\ub808\ub4dc\ub9cc \uc774 \uc9c4\uc785\ud560 \uc218 \uc788\ub294\ub370, ",(0,o.kt)("inlineCode",{parentName:"li"},"HashTable"),"\uc740 \uba54\uc18c\ub4dc \ub808\ubca8\uc5d0\uc11c synchronized\ub97c \uac78\uc5b4\ubc84\ub824\uc11c \ub2e4\ub978 \uc2a4\ub808\ub4dc\uac00 \uba3c\uc800 \uc9c4\uc785\ud55c \uc2a4\ub808\ub4dc\uac00 \uc774 code block\uc744 \ub098\uac08 \ub54c\uae4c\uc9c0 \uacc4\uc18d \uae30\ub2e4\ub824\uc57c \ud574\uc11c \ube44\uc6a9\uc801\uc73c\ub85c \ub9e4\uc6b0 \ube44\uc2fc Collection\uc785\ub2c8\ub2e4.  ")),(0,o.kt)("br",null),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// \ud574\uc2dc\ud14c\uc774\ube14\uc758 put\npublic synchronized V put(K key, V value) {\n    ...\n}\n")))),(0,o.kt)("br",null),(0,o.kt)("p",null,"\uc774\ub7ec\ud55c \uc774\uc720\ub85c \uba40\ud2f0 \uc2a4\ub808\ub4dc \ud658\uacbd\uc5d0\uc11c\uc758 map\uc774 \ud544\uc694\ud574\uc84c\ub294\ub370 \uc131\ub2a5\uae4c\uc9c0 \uc2e0\uacbd \uc368\uc57c \ud558\ub294 \ubb38\uc81c\uac00 \uc788\uc5b4\uc11c \ub4f1\uc7a5\ud55c \uac83\uc774 \ub3d9\uc2dc\uc131 \uc131\ub2a5\uae4c\uc9c0 \ucc59\uae30\uac8c \ub418\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"ConcurrentHashMap"),"\uc785\ub2c8\ub2e4. \ucc38\uace0\ub85c \uc790\ubc14 1.5\ubc84\uc804\ubd80\ud130 \ub4e4\uc5b4\uc624\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4.  "),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"`ConcurrentHashMap`\uc740 `ConcurrentMap`\uc744 \uad6c\ud604\ud55c \ud574\uc26c\ub9f5\uc774\ub2e4.  ",src:t(6791).Z,width:"769",height:"294"}),(0,o.kt)("br",{parentName:"p"}),"\n","\ud83d\udca1",(0,o.kt)("inlineCode",{parentName:"p"},"ConcurrentHashMap"),"\uc740 ",(0,o.kt)("inlineCode",{parentName:"p"},"ConcurrentMap"),"\uc744 \uad6c\ud604\ud55c \ud574\uc26c\ub9f5\uc785\ub2c8\ub2e4.  "),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"concurrentmap"},"ConcurrentMap"),(0,o.kt)("p",null,"  ",(0,o.kt)("inlineCode",{parentName:"p"},"ConcurrentMap"),"\uc740 \uba40\ud2f0\uc2a4\ub808\ub529 \ud658\uacbd\uc5d0\uc11c \ud0a4/\uac12 \uc791\uc5c5\uc5d0 \ub300\ud55c \uba54\ubaa8\ub9ac \uc77c\uad00\uc131\uc744 \ubcf4\uc7a5\ud558\ub294 java.util.concurrent\uc758 \ud328\ud0a4\uc9c0\uc5d0 \uc788\uace0 \uad6c\ud604\uccb4\ub85c\ub294 ",(0,o.kt)("strong",{parentName:"p"},"ConcurrentSkipListMap, ConcurrentSkipListMap")," \ub450 \uac1c\uac00 \uc788\uc2b5\ub2c8\ub2e4.  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"import java.util.concurrent;\n\npublic interface ConcurrentMap<K,V> extends Map<K,V> {\n    ...\n}\n")),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"\uadf8\ub807\ub2e4\uba74-\uc5b4\ub5bb\uac8c-\ub3d9\uc2dc\uc131\uc744-\ubcf4\uc7a5\ud560\uae4c"},"\uadf8\ub807\ub2e4\uba74 \uc5b4\ub5bb\uac8c \ub3d9\uc2dc\uc131\uc744 \ubcf4\uc7a5\ud560\uae4c?"),(0,o.kt)("p",null,"\uc0ac\uc2e4 \ub3d9\uc2dc\uc131\uc744 \ubcf4\uc7a5\ud558\ub294 \ubc29\ubc95 \uc911 \uac00\uc7a5 \uc27d\uac8c\ub294  synchronized\ub97c \uc4f0\uba74 \uc548\uc804\ud558\uac8c \ub3d9\uc2dc\uc131\uc744 \ubcf4\uc7a5\ud560 \uc218 \uc788\uc9c0\ub9cc \uc4f0\uae30\uc5d0 \ub530\ub77c\uc11c \uc131\ub2a5 \uc774\uc288\uac00 \uc788\uc2b5\ub2c8\ub2e4. \ud2b9\ud788 \uc704\uc5d0\uc11c \ud55c \ubc88 \uc598\uae30 \ud588\uc9c0\ub9cc,  HashTable \uc5d0\uc11c \uc598\uae30\ub410\ub358 \uc131\ub2a5\uc774 \uac00\uc7a5 \ud070 \ubb38\uc81c\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub97c ConcurrentHashMap\uc740 \uc815\ub9d0 \uba4b\uc9c0\uace0 \uc5b4-\uc378\ud55c \uc5ec\ub7ec\uac00\uc9c0 \ubc29\ubc95\uc73c\ub85c \uac1c-\uc120\uc744 \ud588\ub294\ub370 \ud06c\uac8c \ub450 \uac00\uc9c0 \ubc29\ubc95\ub4e4\ub85c \ud574\uacb0\ud569\ub2c8\ub2e4."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://howtodoinjava.com/java/multi-threading/compare-and-swap-cas-algorithm/"},"CAS(Compare And Swap) \uc54c\uace0\ub9ac\uc998")," "),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},"final V putVal(K key, V value, boolean onlyIfAbsent) {\n    int hash = spread(key.hashCode());\n...\n    else if ((f = tabAt(tab, i = (n - 1) & hash)) == null) {\n          if (casTabAt(tab, i, null, new Node<K,V>(hash, key, value)))\n              break;                   // no lock when adding to empty bin\n      }\n...\n")))),(0,o.kt)("br",null),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\uc774\ubbf8 \ubc84\ud0b7\uc5d0 \ub178\ub4dc\uac00 \uc874\uc7ac\ud55c\ub2e4\uba74 \ubc84\ud0b7\ubcc4\ub85c synchronized \uc0ac\uc6a9\ud569\ub2c8\ub2e4.  "),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},"final V putVal(K key, V value, boolean onlyIfAbsent) {\nint hash = spread(key.hashCode());\n    ...\n    synchronized (f) {\n    if (tabAt(tab, i) == f) {\n        if (fh >= 0) {\n            binCount = 1;\n            for (Node<K,V> e = f;; ++binCount) {\n                K ek;\n                if (e.hash == hash &&\n                    ((ek = e.key) == key ||\n                     (ek != null && key.equals(ek)))) {\n                    oldVal = e.val;\n                    if (!onlyIfAbsent)\n                        e.val = value;\n                    break;\n                }\n                Node<K,V> pred = e;\n                if ((e = e.next) == null) {\n                    pred.next = new Node<K,V>(hash, key, value);\n                    break;\n                }\n            }\n        }\n    ...\n")))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"\uac04\ub2e8\ud55c-\uc131\ub2a5\ud14c\uc2a4\ud2b8"},"\uac04\ub2e8\ud55c \uc131\ub2a5\ud14c\uc2a4\ud2b8"),(0,o.kt)("p",null,"\uadf8\ub807\ub2e4\uba74 \uc815\ub9d0 \uc131\ub2a5\uc5d0\uc11c \ub9ce\uc740 \ucc28\uc774\uac00 \ub0a0\uae4c? get\uacfc put\uc5d0 \ub300\ud55c \uac04\ub2e8\ud55c \ubca4\uce58\ub9c8\ud06c\ub97c \uc791\uc131\ud558\uba74\uc11c ",(0,o.kt)("inlineCode",{parentName:"p"},"Hashtable"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"concurrentHashMap"),"\uc640 \uc131\ub2a5\uc744 \ube44\uad50\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","\uac04\ub2e8\ud558\uac8c 5\uac1c \uc2a4\ub808\ub4dc\ub97c \ub9cc\ub4e4\uace0 1,000,000 \uac1c \uc815\ub3c4 \ub370\uc774\ud130\ub97c \ub123\uace0 get\uc744 \ud558\ub294 \ud589\uc704\ub97c \ud1b5\ud574\uc11c \ube44\uad50\ub97c \ud574\ubcf4\uba74  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'\n    private static final Map<Integer, Integer> testHashTable = new Hashtable<>();\n    private static final Map<Integer, Integer> testConcurrentHashMap = new ConcurrentHashMap<>();\n\n    @Test\n    void test() throws Exception {\n        long hashTableAvgTime = measure_GetPut(testHashTable);\n        long concurrentHashMapAvgTime = measure_GetPut(testConcurrentHashMap);\n\n        System.out.println("hashTableAvgTime = " + hashTableAvgTime);\n        System.out.println("concurrentHashMapAvgTime = " + concurrentHashMapAvgTime);\n\n    }\n\n    private static long measure_GetPut(Map<Integer, Integer> map) throws InterruptedException {\n        ExecutorService executor = Executors.newFixedThreadPool(4);\n\n        long startTime = System.nanoTime();\n\n        for (int i = 0; i < 5; i++) {\n            executor.submit(() -> {\n                for (int j = 0; j < 1_000_000; j++) {\n                    int value = ThreadLocalRandom\n                        .current()\n                        .nextInt(100_000);\n                    map.put(value, value);\n                    map.get(value);\n                }\n            });\n        }\n        executor.shutdown();\n        if (executor.awaitTermination(30, TimeUnit.SECONDS)) {\n            System.out.println(map.getClass());\n        } else {\n            executor.shutdownNow();\n        }\n        long endTime = System.nanoTime();\n\n        return (endTime - startTime) / 5_000_000;\n    }\n')),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Random vs ThreadLocalRandom")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\uc798 \uc815\ub9ac\ub41c \uc0ac\uc774\ud2b8\uac00 \uc788\uc5b4\uc11c \uc62c\ub9ac\uc9c0\ub9cc \uc694\uc57d\ud558\uc790\uba74 Random\uc740 \uba40\ud2f0 \uc2a4\ub808\ub4dc\uc5d0\uc11c \ud558\ub098\uc758 Random \uc778\uc2a4\ud134\uc2a4\ub97c \uacf5\uc720\ud558\uc5ec \uc804\uc5ed\uc801\uc73c\ub85c \ub3d9\uc791\ud574\uc11c \uc120\ud615 \ud569\ub3d9 \uc0dd\uc131\uae30 \uc54c\uace0\ub9ac\uc998\uc744 \uc0ac\uc6a9\ud558\ub294 \ubc18\uba74 ThreadLocalRandom \uac01 \uc2a4\ub808\ub4dc\ub9c8\ub2e4 \ub2e4\ub978 \uc778\uc2a4\ud134\uc2a4\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://velog.io/@sojukang/Random-%EB%8C%80%EC%8B%A0-ThreadLocalRandom%EC%9D%84-%EC%8D%A8%EC%95%BC-%ED%95%98%EB%8A%94-%EC%9D%B4%EC%9C%A0"},"https://velog.io/@sojukang/Random-\ub300\uc2e0-ThreadLocalRandom\uc744-\uc368\uc57c-\ud558\ub294-\uc774\uc720")))),(0,o.kt)("p",null,"\ucc38\uace0\ub85c \ud658\uacbd\uc740 ",(0,o.kt)("a",{parentName:"p",href:"https://www.apple.com/kr/macbook-pro-14-and-16/specs/"},"m1book Pro"),", 16GB\uc5d0\uc11c \ud14c\uc2a4\ud2b8 \ud574\ubcf4\uc558\uc2b5\ub2c8\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","\ub300\ub7b5 10\ubc88 \uc815\ub3c4\uc758 \ud14c\uc2a4\ud2b8 \ud6c4\uc5d0 \ub098\uc628 \uacb0\uacfc \uac12\uc785\ub2c8\ub2e4.  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"hashTableAvgTime = 1228\nconcurrentHashMapAvgTime = 317\n")),(0,o.kt)("p",null,"\ud655\uc2e4\ud558\uac8c, \uba54\uc18c\ub4dc \ub808\ubca8\uc5d0\uc11c \ub77d\uc744 \uac70\ub294 \ubc29\ubc95\uc73c\ub85c put\uc744 \ucc98\ub9ac\ud558\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"hashtable"),"\uacfc \ub2ec\ub9ac ",(0,o.kt)("inlineCode",{parentName:"p"},"ConcurrentHashMap"),"\uc740 \ubc84\ud0b7\ub2f9\uc73c\ub85c lock\uc744 \uac78\uace0 cas \uc54c\uace0\ub9ac\uc998\uc744 \uc0ac\uc6a9\ud558\ub294\ub4f1\uc744 \ud1b5\ud55c \uc5ec\ub7ec \uae30\ubc95\ub4e4\ub85c \uc131\ub2a5\uc0c1 \uc0c1\uc2b9\uc774 \ub098\ud0c0\ub09c \uac78\ub85c \ubcf4\uc785\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uae38\uc5c8\ub294\ub370 \ub9cc\ub4e4\uc5b4\ubcf4\ub294 \uac74 \ub2e4\uc74c 2\ud3b8\uc5d0\uc11c:)"),(0,o.kt)("p",null,"\ucc38\uace0",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ConcurrentMap.html"},"https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ConcurrentMap.html"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://www.baeldung.com/java-concurrent-map"},"https://www.baeldung.com/java-concurrent-map"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://www.programiz.com/java-programming/concurrenthashmap"},"https://www.programiz.com/java-programming/concurrenthashmap"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://www.geeksforgeeks.org/concurrenthashmap-in-java/"},"https://www.geeksforgeeks.org/concurrenthashmap-in-java/"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://bcho.tistory.com/1072"},"https://bcho.tistory.com/1072"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Hash_table"},"https://en.wikipedia.org/wiki/Hash_table"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ConcurrentHashMap.html"},"https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ConcurrentHashMap.html"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://howtodoinjava.com/java/multi-threading/compare-and-swap-cas-algorithm/"},"CAS"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://d2.naver.com/helloworld/831311"},"https://d2.naver.com/helloworld/831311"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://velog.io/@sojukang/Random-%EB%8C%80%EC%8B%A0-ThreadLocalRandom%EC%9D%84-%EC%8D%A8%EC%95%BC-%ED%95%98%EB%8A%94-%EC%9D%B4%EC%9C%A0"},"https://velog.io/@sojukang/Random-\ub300\uc2e0-ThreadLocalRandom\uc744-\uc368\uc57c-\ud558\ub294-\uc774\uc720")))}h.isMDXComponent=!0},6791:function(e,n,t){n.Z=t.p+"assets/images/Untitled-0a2d3d2c3c8b41ec1b5ba29ed6097963.png"}}]);