# DOM_BOM 面试专题手册

> 💡 本章节共收录 619 道面试真题，建议每天复习 10-20 题。

---
### Q1: getElementById()和getElementByClassName()的用法和区别是什么？

**【核心解析】**
getElementById通过ID获取单个元素；getElementByClassName通过类名获取HTMLCollection；性能差异；现代替代方案querySelector

---

### Q2: 请解释事件委托的原理及其实现方式，并说明它的优点。

**【核心解析】**
利用事件冒泡；在父元素上监听事件；通过target判断具体子元素；减少事件监听数量；动态元素支持；性能优化

---

### Q3: 拖拽式布局需要用到哪些原生JavaScript API？

**【核心解析】**
mousedown、mousemove、mouseup事件；获取鼠标坐标clientX/clientY；计算元素位置和尺寸；使用requestAnimationFrame优化；考虑边界情况

---

### Q4: localStorage中存储7天过期的逻辑如何实现？

**【核心解析】**
存储时同时保存时间戳；读取时比较当前时间与存储时间；过期则删除并返回null；使用JSON.stringify存储对象；注意清除过期数据

---

### Q5: 请解释虚拟列表（Virtual List）的原理，以及如何使用IntersectionObserver实现虚拟列表？还有没有其他实现方案？

**【核心解析】**
只渲染可视区域元素；滚动容器与占位；IntersectionObserver监听可见性；计算偏移；其他方案：scroll事件+计算

---

### Q6: script标签放在header和放在body底部有什么区别？

**【核心解析】**
DOM解析阻塞；页面渲染延迟；defer与async属性；加载顺序；性能影响

---

### Q7: 请用requestAnimationFrame实现一个倒计时组件，并说明60帧下raf的间隔是多少毫秒。

**【核心解析】**
requestAnimationFrame的基本用法；与setInterval的区别；60帧下间隔约为16.67ms；倒计时逻辑：计算剩余时间并更新DOM；性能优化：避免频繁重排

---

### Q8: 如果要设计一个图片拖拽功能，请说明纯JS实现、CSS设计以及优化点。

**【核心解析】**
JS实现：mousedown/mousemove/mouseup事件；CSS设计：position: absolute、transform；优化点：使用requestAnimationFrame、防抖、边界限制、性能优化

---

### Q9: 请比较requestAnimationFrame与setTimeout的区别。

**【核心解析】**
执行时机：requestAnimationFrame在浏览器重绘前执行，setTimeout在指定延迟后执行；性能：requestAnimationFrame由系统决定帧率，更平滑且节省资源；用途：requestAnimationFrame用于动画，setTimeout用于延迟任务；取消方法：cancelAnimationFrame vs clearTimeout；后台标签页行为：requestAnimationFrame暂停，setTimeout继续

---

### Q10: 虚拟列表的渲染原理是什么？与普通列表相比性能差异在哪里？

**【核心解析】**
只渲染可视区域元素；计算滚动偏移；动态更新DOM；减少DOM节点数；降低重排重绘；使用IntersectionObserver优化

---

### Q11: 什么是事件冒泡和事件捕获？

**【核心解析】**
事件传播三个阶段；捕获阶段从根到目标；冒泡阶段从目标到根；addEventListener第三个参数；事件委托利用冒泡

---

### Q12: requestAnimationFrame是什么？有什么作用？

**【核心解析】**
浏览器提供的动画帧回调；与屏幕刷新率同步；优于setTimeout/setInterval；节省CPU资源；用于动画和性能优化

---

### Q13: script标签的defer和async属性有什么区别？如何实现脚本加载不阻塞页面渲染？

**【核心解析】**
defer：异步下载，在HTML解析完成后按顺序执行；async：异步下载，下载完成后立即执行，不保证顺序；两者都不阻塞HTML解析；推荐defer用于依赖DOM的脚本

---

### Q14: 什么是事件委托？其原理是什么？

**【核心解析】**
利用事件冒泡；将事件监听器添加到父元素；减少内存占用；动态元素事件绑定

---

### Q15: React组件内的onClick与document.addEventListener谁先触发？为什么？

**【核心解析】**
React事件是合成事件，绑定在根容器上；原生事件先触发；事件冒泡顺序；阻止冒泡的影响

---

### Q16: 如何实现无限滚动？使用Intersection Observer时，DOM过大如何优化？

**【核心解析】**
Intersection Observer监听元素进入视口；虚拟列表（只渲染可视区域）；回收不可见DOM；使用requestAnimationFrame

---

### Q17: 如何实现瀑布流布局？

**【核心解析】**
CSS多列布局（column-count）；Flexbox配合计算；绝对定位动态计算；考虑图片加载完成后的布局调整

---

### Q18: 什么是虚拟列表？请说明其实现原理和优化点。

**【核心解析】**
虚拟列表：只渲染可视区域内的列表项，减少DOM节点；原理：计算可视区域起始索引和结束索引，动态渲染；需要监听滚动事件，更新渲染范围；优化：使用requestAnimationFrame、缓存高度、占位元素保持滚动条

---

### Q19: 请解释script标签的defer和async属性的区别。

**【核心解析】**
defer：HTML解析完成后按顺序执行；async：下载完成后立即执行，不保证顺序；两者都用于异步加载脚本

---

### Q20: 请解释keepalive的原理。

**【核心解析】**
keepalive用于保持连接；HTTP keep-alive；TCP keepalive；作用（减少连接建立开销）

---

### Q21: 请解释docker容器和镜像的区别，以及docker中管理多个容器有什么方法。

**【核心解析】**
镜像（只读模板）；容器（运行实例）；管理多个容器（docker-compose、docker swarm、Kubernetes）

---

### Q22: 请用原生JS实现点击按钮回到页面顶部的功能。

**【核心解析】**
获取按钮元素；添加点击事件；使用window.scrollTo或scrollTop；平滑滚动

---

### Q23: 如果给一个输入框，用户输入后后端会发送请求，你会怎么实现？如果用户输入结果后端响应，这时用户又输入，后端又响应，这种问题怎么处理？

**【核心解析】**
防抖或节流；取消前一个请求（AbortController）；处理竞态条件

---

### Q24: 请解释浏览器同源策略及其跨域解决方案。

**【核心解析】**
同源策略定义（协议、域名、端口）；限制范围（DOM、Cookie、Ajax）；CORS原理（简单请求与预检请求、请求头与响应头）；JSONP；代理服务器；postMessage

---

### Q25: localStorage的作用域是什么？更换设备后数据还在吗？

**【核心解析】**
同源策略（协议+域名+端口）；不同设备数据不共享；持久化存储；与sessionStorage区别；存储大小限制（5MB）

---

### Q26: 阻止冒泡的方法是什么？

**【核心解析】**
event.stopPropagation()阻止冒泡；event.stopImmediatePropagation()同时阻止同元素其他事件；IE使用event.cancelBubble=true；注意捕获阶段也可阻止

---

### Q27: 清除浮动的方法有哪些？

**【核心解析】**
单伪元素法：::after { content: ''; display: block; clear: both; }；双伪元素法：::before, ::after 配合 clear；BFC法：overflow: hidden；父元素设置height；空div法（不推荐）

---

### Q28: 为什么使用IntersectionObserver替代监听滚动事件来实现懒加载？

**【核心解析】**
IntersectionObserver是浏览器原生API，性能优于滚动事件监听；避免频繁计算滚动位置和元素位置；可配置阈值和根元素；自动处理元素可见性变化；减少主线程负担，避免掉帧

---

### Q29: 动态拼装卡片如何实现？卡片有层级概念吗？如何实现拖拽？如何判断拖拽选中的对象？addEventListener放在哪里？e.target和e.currentTarget的区别？

**【核心解析】**
动态拼装：根据数据生成DOM元素，使用flex/grid布局；层级：通过z-index或CSS order控制；拖拽：使用HTML5 Drag and Drop API或鼠标事件；判断选中对象：通过鼠标事件获取元素，或使用data-*属性；addEventListener放在可拖拽元素或容器上；e.target是触发事件的元素，e.currentTarget是绑定事件的元素

---

### Q30: 如何实现无限列表（虚拟滚动）？

**【核心解析】**
只渲染可视区域内的元素；监听滚动事件计算偏移量；使用IntersectionObserver或计算滚动位置；复用DOM节点减少创建

---

### Q31: 项目中如何使用Web Worker？主要作用是什么？

**【核心解析】**
创建Worker线程；postMessage通信；onmessage事件；适用场景：大量计算、数据处理；无法操作DOM；与主线程隔离

---

### Q32: 请解释requestAnimationFrame的作用和用法。

**【核心解析】**
浏览器优化动画；与setTimeout/setInterval区别；自动暂停；帧率同步；性能监控；使用场景

---

### Q33: 请解释dispatchEvent方法的用途及使用方式。

**【核心解析】**
用于手动触发自定义或内置事件；需先创建事件对象（new Event/CustomEvent）；可设置冒泡和取消属性；常用于组件通信或测试

---

### Q34: 一次性插入很多DOM节点，有哪些方法可以进行优化？

**【核心解析】**
使用DocumentFragment批量插入；使用innerHTML或insertAdjacentHTML；使用虚拟滚动（只渲染可视区域）；使用requestAnimationFrame分批插入；避免频繁触发重排重绘

---

### Q35: HTML中script标签的async和defer属性有什么区别？

**【核心解析】**
async：异步加载，加载完成后立即执行，不保证顺序；defer：异步加载，在文档解析完成后、DOMContentLoaded之前按顺序执行；两者都不阻塞HTML解析；适用于不同场景

---

### Q36: 请解释浏览器回流（Reflow）和重绘（Repaint）的概念及触发条件，如何优化？

**【核心解析】**
回流（布局变化，影响几何属性）；重绘（样式变化，不影响布局）；触发条件（DOM操作、样式修改、窗口resize等）；优化（批量修改、使用class、脱离文档流、requestAnimationFrame）

---

### Q37: 请解释sessionStorage、localStorage和cookie的区别？

**【核心解析】**
存储大小（cookie 4KB，Web Storage 5MB+）；生命周期（sessionStorage会话级，localStorage持久化，cookie可设置过期时间）；作用域（同源）；与服务器交互（cookie自动携带，Web Storage仅客户端）

---

### Q38: 请解释前端路由的hash模式和history模式的区别。

**【核心解析】**
hash模式使用URL中的#，不会触发页面刷新；history模式使用HTML5 History API，需要服务器配置支持；hash兼容性更好；history模式更美观，但刷新时需服务器处理

---

### Q39: 请解释事件流（事件冒泡与事件捕获）以及事件委托的原理和优势。

**【核心解析】**
事件流三个阶段：捕获、目标、冒泡；事件委托利用冒泡在父元素监听子元素事件；优势：减少内存占用、动态元素监听

---

### Q40: 如何实现图片懒加载？请说明原生实现（监听滚动）与IntersectionObserver API的用法，并考虑兼容老浏览器。

**【核心解析】**
监听scroll事件计算图片位置；使用IntersectionObserver（更高效）；设置data-src属性；老浏览器兼容：polyfill或降级为直接加载

---

### Q41: 如何获取和删除cookie？

**【核心解析】**
document.cookie读取所有cookie；设置cookie通过赋值字符串；删除cookie设置过期时间为过去；HttpOnly属性限制JS访问；SameSite属性

---

### Q42: 请解释跨域问题产生的原因及常见解决方案？

**【核心解析】**
同源策略；JSONP；CORS（简单请求/预检请求）；代理服务器；postMessage；document.domain

---

### Q43: 请介绍常见的DOM操作（增删改查、事件绑定等）？

**【核心解析】**
createElement, appendChild, removeChild, querySelector；事件监听addEventListener；事件对象；节点遍历

---

### Q44: 请解释事件冒泡和事件捕获，以及如何阻止事件传播。

**【核心解析】**
事件流三个阶段（捕获、目标、冒泡）；addEventListener第三个参数（true捕获，false冒泡）；事件委托（利用冒泡，减少事件绑定）；阻止传播（stopPropagation、stopImmediatePropagation）；阻止默认行为（preventDefault）

---

### Q45: 请解释虚拟滚动（虚拟列表）的原理及实现方式。

**【核心解析】**
虚拟滚动概念（只渲染可视区域内的DOM）；固定高度虚拟列表（计算起始索引和结束索引）；不定高虚拟列表（预估高度+动态调整，或使用二分查找）；性能优势（减少DOM节点，提升滚动流畅度）；实现要点（滚动容器、占位元素、缓存位置信息）

---

### Q46: 请解释WebSocket的核心原理及实际使用。

**【核心解析】**
WebSocket全双工通信；建立连接（HTTP升级握手，101状态码）；数据帧格式；与HTTP轮询、SSE的区别；心跳机制（ping/pong）；断线重连；应用场景（实时聊天、股票行情、AI流式响应）

---

### Q47: 请解释SSE（Server-Sent Events）的原理、与WebSocket的区别以及断线重连机制。

**【核心解析】**
SSE单向通信（服务器推送）；基于HTTP长连接；EventSource API；与WebSocket区别（单向/双向、协议、复杂度）；断线重连（浏览器自动重连，可设置retry时间）；应用场景（通知、实时数据流）

---

### Q48: 请解释浏览器插件（Chrome Extension）的组成部分及各部分之间的通信方式。

**【核心解析】**
组成部分（background script、content script、popup、options page、side panel）；通信方式（chrome.runtime.sendMessage、chrome.tabs.sendMessage、connect建立长连接）；消息传递的权限；manifest.json配置

---

### Q49: 什么是事件委托？它的原理和优点是什么？

**【核心解析】**
事件委托利用事件冒泡，将事件监听器添加到父元素上，处理子元素的事件；优点：减少内存占用、动态添加的元素自动拥有事件处理；原理：通过event.target判断实际触发元素

---

### Q50: 请介绍requestAnimationFrame的作用及与setTimeout/setInterval的区别。

**【核心解析】**
requestAnimationFrame在浏览器重绘前执行，由系统决定回调时机；节省CPU资源，页面不可见时停止；适合动画场景；setTimeout/setInterval不精确，可能掉帧

---

### Q51: Canvas内如何给元素绑定事件？

**【核心解析】**
Canvas本身不支持事件委托；通过坐标计算判断点击位置；维护元素列表及区域；监听canvas的click事件，遍历元素检测碰撞

---

### Q52: 实现一个querySelectorAll函数。

**【核心解析】**
递归遍历DOM树；匹配选择器（标签、类、ID、属性等）；返回NodeList；考虑选择器组合与伪类；性能优化

---

### Q53: 树形菜单如何传参绑定点击事件？是对每一个DOM节点都绑定一个点击事件吗？

**【核心解析】**
事件委托（利用冒泡）；在父容器绑定事件，通过e.target判断；避免大量事件绑定；使用自定义属性传递参数；React/Vue中组件化处理

---

### Q54: 请解释requestAnimationFrame的用处。

**【核心解析】**
与浏览器刷新同步，实现平滑动画；节省CPU/GPU资源（页面不可见时暂停）；优于setTimeout/setInterval；用于帧率控制、性能监控

---

### Q55: script标签中的defer和async的作用是什么？

**【核心解析】**
defer延迟执行，HTML解析完后按顺序执行；async异步加载，加载完立即执行，不保证顺序；defer适用于依赖DOM的脚本；async适用于独立脚本

---

### Q56: 请解释requestAnimationFrame的作用，并说明如何与Canvas结合使用？

**【核心解析】**
requestAnimationFrame：告诉浏览器在下次重绘前执行回调，实现平滑动画；与Canvas结合：在回调中更新Canvas绘制，形成动画循环；优势：节省资源，自动暂停

---

### Q57: 如何使用Canvas实现一个小球按正弦波运动的动画？请说明具体API。

**【核心解析】**
使用requestAnimationFrame循环；正弦函数计算y坐标：y = centerY + amplitude * Math.sin(angle)；更新angle；使用ctx.clearRect清除画布；ctx.arc画圆；ctx.fill填充

---

### Q58: 请解释BOM中的hash和history，以及它们的区别。

**【核心解析】**
hash：URL中#后面的部分，改变不会触发页面刷新，通过hashchange事件监听；history：HTML5 History API，pushState/replaceState改变URL，不刷新页面，通过popstate事件监听；区别：hash有#，history无；hash兼容性更好，history需要服务端支持

---

### Q59: 请比较localStorage、sessionStorage和cookie的区别。

**【核心解析】**
存储大小：cookie 4KB，storage 5MB；生命周期：cookie可设置过期，sessionStorage会话级，localStorage持久；作用域：cookie可跨域，storage同源；与服务器交互：cookie自动发送，storage不自动发送；API易用性

---

### Q60: 请描述事件冒泡的过程，以及事件冒泡之前经过哪些阶段？

**【核心解析】**
事件流三阶段：捕获阶段、目标阶段、冒泡阶段；事件冒泡是从目标元素向上传播到根元素；捕获阶段从根到目标；addEventListener第三个参数控制阶段；事件委托利用冒泡机制

---

### Q61: event.stopPropagation()和event.preventDefault()有什么区别？

**【核心解析】**
stopPropagation阻止事件进一步传播（冒泡或捕获）；preventDefault阻止默认行为（如链接跳转、表单提交）；两者可同时使用；stopImmediatePropagation还阻止同一元素的其他监听器

---

### Q62: requestAnimationFrame和setTimeout的区别是什么？

**【核心解析】**
requestAnimationFrame由浏览器在下次重绘前调用，与刷新率同步；setTimeout指定延迟后执行，可能掉帧；rAF更平滑，适合动画；setTimeout适合非动画定时任务；rAF在页面不可见时暂停

---

### Q63: 请编写一个Vue/React组件，实时展示当前浏览器窗口的宽度、高度以及滚动条滚动的距离。

**【核心解析】**
使用resize事件监听窗口尺寸变化；使用scroll事件监听滚动距离；注意事件监听器的添加与移除（避免内存泄漏）；使用useEffect（React）或onMounted/onUnmounted（Vue）；获取window.innerWidth/innerHeight和document.documentElement.scrollTop

---

### Q64: 请解释DOM和BOM的区别，并列举常见的BOM对象（如window、navigator、location、history等）。

**【核心解析】**
DOM（文档对象模型）操作HTML文档；BOM（浏览器对象模型）操作浏览器窗口；BOM对象：window（全局对象）、navigator（浏览器信息）、location（URL）、history（浏览历史）、screen（屏幕信息）

---

### Q65: 为什么选用IntersectionObserver来做目录的自动高亮？如果需要做大量图片的懒加载，你会怎么做？

**【核心解析】**
IntersectionObserver性能优于滚动监听；懒加载实现（data-src属性，观察进入视口后加载）；大量图片时使用虚拟列表或分批加载；考虑图片渲染优化（WebP、响应式图片）

---

### Q66: 请解释localStorage和sessionStorage的区别，以及sessionStorage与window变量的区别。

**【核心解析】**
localStorage持久存储，同源共享；sessionStorage会话级存储，标签页隔离；window变量在页面刷新后丢失，sessionStorage刷新后保留；存储大小限制（5MB左右）；只能存储字符串

---

### Q67: 请解释图片懒加载的实现原理及如何结合防抖节流。

**【核心解析】**
原理：将图片真实URL存储在data-src属性中，当图片进入可视区域时替换src；实现方式（监听scroll事件、IntersectionObserver API）；结合防抖（减少频繁计算）或节流（控制触发频率）优化性能

---

### Q68: 请解释iframe标签的缺点以及与微前端的比较。

**【核心解析】**
iframe缺点（SEO不友好、性能开销大、通信复杂、样式隔离困难、安全风险）；微前端优点（更好的SEO、性能、通信、样式隔离、共享依赖）；微前端实现方式（iframe、Web Components、Module Federation、single-spa等）

---

### Q69: 如何获取页面中所有a标签并判断其链接协议是否为https？

**【核心解析】**
document.querySelectorAll('a')获取所有a标签；遍历节点获取href属性；使用URL对象或字符串方法（startsWith）判断协议；注意相对路径和绝对路径的处理

---

### Q70: 请解释事件流（事件捕获与事件冒泡）以及事件委托的原理。

**【核心解析】**
捕获阶段、目标阶段、冒泡阶段；addEventListener第三个参数；事件委托利用冒泡减少监听器；stopPropagation

---

### Q71: 请解释虚拟滚动（Virtual Scroll）的实现原理。

**【核心解析】**
只渲染可视区域内的DOM；计算滚动偏移；动态更新列表项位置；使用transform或绝对定位；复用DOM元素

---

### Q72: 请解释IntersectionObserver的用途和基本用法。

**【核心解析】**
观察元素是否进入视口；懒加载、无限滚动；回调函数接收entries；配置threshold和rootMargin

---

### Q73: 请解释前端路由的hash模式原理及如何监听hash变化。

**【核心解析】**
hash模式利用URL的#部分，改变hash不会触发页面刷新；通过window.onhashchange或监听hashchange事件；常用于单页应用

---

### Q74: 浏览器页面上用户一般会触发哪些事件？请列举常见事件类型。

**【核心解析】**
鼠标事件（click、mousedown等）；键盘事件（keydown、keyup）；表单事件（submit、change）；焦点事件（focus、blur）；触摸事件（touchstart）；滚动事件（scroll）

---

### Q75: 请解释DOM操作引发的回流（重排）和重绘，并结合包含3个setTimeout红任务的例子说明它们与宏任务、微任务的关系。

**【核心解析】**
回流影响布局，重绘只影响外观；宏任务（setTimeout）执行后可能触发回流/重绘；微任务（Promise）在宏任务之前执行；批量DOM操作可减少回流；requestAnimationFrame优化动画

---

### Q76: 是否使用过requestAnimationFrame API？能否通过它实现React Fiber技术的核心逻辑（批量任务中断与优先级执行）？

**【核心解析】**
requestAnimationFrame在下次重绘前执行；用于动画和批量更新；可模拟时间切片；任务中断与恢复；优先级调度

---

### Q77: 前端路由的history方案基于哪些API？hash方案的监听基于哪个API？

**【核心解析】**
history.pushState；history.replaceState；popstate事件；hashchange事件；window.location.hash

---

### Q78: 请解释事件流（事件捕获与事件冒泡）以及事件委托的原理？

**【核心解析】**
事件捕获阶段；目标阶段；事件冒泡阶段；addEventListener第三个参数；事件委托利用冒泡减少监听器

---

### Q79: 浏览器中用户一般会触发哪些事件？请列举常见事件类型。

**【核心解析】**
鼠标事件（click/mousedown/mouseup）；键盘事件（keydown/keyup）；表单事件（submit/change）；滚动事件（scroll）；触摸事件（touchstart/touchend）

---

### Q80: 如何通过JavaScript修改DOM元素的属性？

**【核心解析】**
直接修改属性（element.attr = value）；setAttribute方法；style属性修改样式；classList操作类名；dataset操作自定义属性

---

### Q81: 请解释hash路由和history路由的区别？

**【核心解析】**
hash路由使用URL的hash部分；history路由使用HTML5 History API；hash兼容性更好；history需要服务器配置；hash不会触发页面刷新

---

### Q82: 如何实现动画效果？请对比requestAnimationFrame与setTimeout/setInterval的优劣。

**【核心解析】**
requestAnimationFrame由系统决定回调时机，与屏幕刷新同步；setTimeout/setInterval可能丢帧或过度绘制；requestAnimationFrame节省CPU资源；实现动画循环

---

### Q83: 事件委托如何优化？请优化以下代码：给ul下的li添加点击事件。

**【核心解析】**
事件委托：将事件绑定到父元素；利用事件冒泡；减少事件监听器数量；优化后：给ul绑定click事件，通过e.target判断li

---

### Q84: 如何在ul中插入li？

**【核心解析】**
使用document.createElement创建li；使用appendChild或insertBefore插入；或使用innerHTML

---

### Q85: 手写实现一个cookies操作的API，包含get和set方法，支持通过get(key, value, expire, domain)设置cookie，通过get(domain)获取指定域名下所有子域名的cookie，输出格式为'key1=value1\nkey2=value2'。

**【核心解析】**
document.cookie读写；设置expire、domain、path等属性；解析cookie字符串；跨子域名cookie获取；格式输出

---

### Q86: 如何实现滚动加载图片（懒加载）？用scroll事件如何监听？

**【核心解析】**
监听scroll事件；计算元素位置（getBoundingClientRect）；判断是否进入视口；IntersectionObserver更优；scroll事件名称为'scroll'

---

### Q87: 如何实现全局的点击事件上报？不使用SDK，只用一个监听。

**【核心解析】**
在document上添加click事件监听；通过事件委托捕获所有点击；利用event.target获取点击元素；上报数据

---

### Q88: 跨域脚本错误（不同域）时，window.onerror能捕获到错误信息吗？

**【核心解析】**
默认无法获取详细错误信息；需要服务器设置Access-Control-Allow-Origin；script标签添加crossorigin属性

---

### Q89: 请解释DOM对象和document对象的区别与联系。

**【核心解析】**
document是DOM树的根节点；DOM对象泛指所有节点；document提供全局方法（getElementById等）；document是window的属性

---

### Q90: 浏览器多个Tab之间如何进行通信？请列举至少三种方式。

**【核心解析】**
BroadcastChannel API；localStorage事件；SharedWorker；postMessage（iframe或window.open）；WebSocket

---

### Q91: 如何实现客户端与服务端的长连接？请列举常见方案。

**【核心解析】**
WebSocket；SSE（Server-Sent Events）；长轮询（Long Polling）；WebRTC数据通道；HTTP/2 Server Push

---

### Q92: URL是否有长度限制？不同浏览器和HTTP方法有何差异？

**【核心解析】**
HTTP规范无限制；浏览器限制（IE 2083字符、Chrome约2MB）；GET请求受URL长度限制；POST请求无限制

---

### Q93: 请解释Cookie、LocalStorage、SessionStorage的区别及应用场景。

**【核心解析】**
存储大小（4KB vs 5MB）；生命周期；作用域（同源）；是否随请求发送；API差异；安全性（HttpOnly）

---

### Q94: 请解释IndexedDB的特点及其适用场景。

**【核心解析】**
NoSQL数据库；异步API；支持索引、事务、游标；存储大量结构化数据；同源策略；版本管理

---

### Q95: 请实现一个弹窗组件，考虑其API设计和内部逻辑优化。

**【核心解析】**
组件封装；API设计（显示/隐藏/回调）；事件处理；性能优化

---

### Q96: 移动端滚动穿透的原理是什么？有哪些解决方案？

**【核心解析】**
滚动穿透：弹窗内滚动导致背景页面滚动；原理：touchmove事件冒泡；解决方案：阻止touchmove默认行为；设置overflow:hidden；使用position:fixed；第三方库如body-scroll-lock

---

### Q97: H5如何判断当前环境（如是否在App内）？JS Bridge与URL Scheme的作用？

**【核心解析】**
userAgent判断；JS Bridge：H5与原生通信桥梁，通过注入全局对象；URL Scheme：通过特定协议唤起App；isApp()内部逻辑：检查userAgent或尝试调用JS Bridge；微信SDK二次分享失效原因：签名错误、页面URL变化

---

### Q98: 如何阻止事件默认行为和事件冒泡？请说明事件委托的实现原理及其优势。

**【核心解析】**
阻止默认行为：event.preventDefault()；阻止冒泡：event.stopPropagation()；事件委托原理（利用事件冒泡，在父元素监听子元素事件）；事件委托的优势（减少内存占用、动态元素监听）

---

### Q99: 浏览器控制台中的window对象提供了哪些全局属性和变量？请列举并简要说明。

**【核心解析】**
全局对象（window、document、location、navigator、history、screen）；全局函数（setTimeout、setInterval、fetch、console）；全局变量（undefined、NaN、Infinity）；ES6模块中顶层this不是window

---

### Q100: 手写实现订阅发布模式（EventBus）。

**【核心解析】**
EventBus包含on、emit、off、once方法；使用对象存储事件和回调；on注册事件，emit触发事件，off移除事件

---

