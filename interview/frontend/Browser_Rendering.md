# Browser_Rendering 面试专题手册

> 💡 本章节共收录 927 道面试真题，建议每天复习 10-20 题。

---
### Q1: 从浏览器输入URL到页面渲染完成的过程是什么？什么是回流和重绘？

**【核心解析】**
DNS解析、TCP连接、HTTP请求；HTML解析构建DOM树；CSS解析构建CSSOM树；合并为渲染树；布局（回流）和绘制（重绘）；回流触发条件（几何变化）；重绘触发条件（样式变化）

---

### Q2: 浏览器从拿到HTML到页面显示的完整渲染流程是什么？

**【核心解析】**
HTML解析构建DOM树；CSS解析构建CSSOM树；合并成渲染树；布局计算；绘制；合成；重排重绘触发条件

---

### Q3: 如何减少浏览器的重排和重绘？

**【核心解析】**
使用transform代替top/left；批量修改样式（classList）；离线DOM操作（DocumentFragment）；避免频繁读取布局属性；使用will-change优化

---

### Q4: 请比较localStorage、sessionStorage和IndexedDB的区别，并说明各自的使用场景。

**【核心解析】**
localStorage持久化存储，同源共享；sessionStorage会话级存储，标签页隔离；IndexedDB为结构化数据库，支持索引和事务；存储容量和API复杂度不同

---

### Q5: 请解释浏览器的渲染流水线，包括重排和重绘的触发条件及优化策略。

**【核心解析】**
DOM树与CSSOM树构建；渲染树生成；布局（Layout）；绘制（Paint）；合成（Composite）；重排触发属性；重绘触发属性；使用transform替代top

---

### Q6: 从输入URL到页面渲染完成发生了什么？

**【核心解析】**
DNS解析；TCP三次握手；TLS协商；HTTP请求与响应；HTML解析与DOM树构建；CSSOM构建；渲染树生成；布局与绘制；合成与显示

---

### Q7: TCP为什么需要三次握手？

**【核心解析】**
确认双方收发能力；防止历史连接初始化；同步序列号；避免资源浪费；可靠传输基础

---

### Q8: 浏览器从输入URL到页面展示具体做了哪些事情？

**【核心解析】**
DNS解析；TCP连接；HTTP请求与响应；HTML解析构建DOM树；CSS解析构建CSSOM树；渲染树生成、布局、绘制、合成

---

### Q9: 浏览器解析HTML到页面渲染的过程是什么？如何优化重排、重绘和合成阶段？

**【核心解析】**
解析HTML构建DOM树；解析CSS构建CSSOM树；合并生成渲染树；布局计算几何信息；绘制像素；合成层；优化：减少DOM操作、使用transform/opacity、will-change

---

### Q10: 请解释重绘和重排的区别。

**【核心解析】**
重排（Reflow）：改变元素几何属性（宽高、位置等），影响布局；重绘（Repaint）：改变外观属性（颜色、背景等），不影响布局；重排必然导致重绘，重绘不一定重排；触发条件：DOM操作、样式修改、窗口大小变化等；优化：批量修改、使用class、脱离文档流、避免频繁读取布局信息

---

### Q11: 什么是FCP（First Contentful Paint）？页面加载过程中哪些阶段影响性能指标？

**【核心解析】**
FCP首次内容绘制；关键渲染路径；HTML解析；CSSOM构建；JavaScript阻塞；资源加载顺序；优化FCP的方法

---

### Q12: 什么是重排（Reflow）和重绘（Repaint）？如何减少它们？

**【核心解析】**
重排：改变元素几何属性（宽高、位置等）导致布局重新计算；重绘：改变外观属性（颜色、背景等）不影响布局；重排必然导致重绘；减少方法：使用transform代替top/left、批量修改样式、使用文档片段、避免频繁读取布局信息

---

### Q13: 从输入URL到页面展示，浏览器经历了哪些过程？

**【核心解析】**
DNS解析；TCP连接；HTTP请求与响应；HTML解析构建DOM树；CSS解析构建CSSOM；渲染树生成；布局；绘制；合成

---

### Q14: 浏览器的进程模型是怎样的？

**【核心解析】**
主进程；GPU进程；网络进程；多个渲染进程（每个标签页）；插件进程

---

### Q15: 一张ECharts图表在浏览器中显示出来，要经过哪些路径？

**【核心解析】**
数据获取（API/本地）；ECharts初始化；配置项处理；Canvas/SVG渲染；浏览器渲染流水线（DOM、CSSOM、布局、绘制、合成）；重绘优化

---

### Q16: 浏览器底层如何执行JavaScript代码？

**【核心解析】**
V8引擎解析JS；生成AST；解释器Ignition执行；热点代码由TurboFan编译为机器码；内存管理（堆栈、垃圾回收）；事件循环驱动

---

### Q17: 请解释sessionStorage和localStorage的区别，以及除了它们还有哪些缓存手段？

**【核心解析】**
sessionStorage会话级，关闭标签页清除；localStorage持久化；其他缓存：强缓存、协商缓存、IndexedDB、Service Worker、Cache API

---

### Q18: 请解释强缓存和协商缓存的区别及实现方式。

**【核心解析】**
强缓存：通过Expires或Cache-Control直接使用本地缓存，不请求服务器；协商缓存：通过Last-Modified/If-Modified-Since或ETag/If-None-Match向服务器验证资源是否更新

---

### Q19: 浏览器从拿到渲染树以后都经过了哪些阶段？

**【核心解析】**
布局（Layout）；分层（Layer）；分块（Tiling）；光栅化（Rasterization）；合成（Compositing）；GPU加速

---

### Q20: 为什么光栅化要由GPU去做？

**【核心解析】**
GPU擅长并行计算；光栅化是像素填充操作；GPU有专用显存；减少CPU负载；提升渲染性能

---

### Q21: 重排和重绘的区别是什么？

**【核心解析】**
重排影响布局（位置大小）；重绘只影响外观（颜色等）；重排必然导致重绘；重排开销更大；触发条件不同

---

### Q22: 请解释浏览器垃圾回收机制，包括标记清除和引用计数。

**【核心解析】**
V8引擎内存管理；新生代与老生代；标记清除算法；引用计数（循环引用问题）；增量标记与惰性清理；内存泄漏常见场景（闭包、全局变量、定时器、DOM引用）

---

### Q23: 请解释浏览器的重排（Reflow）和重绘（Repaint）机制，以及如何优化以减少性能开销？

**【核心解析】**
重排与重绘的定义与触发条件；重排必重绘但重绘不一定重排；DOM读写操作分离以避免强制同步布局；批量修改样式或使用CSS类；使用transform/opacity等不触发重排的属性

---

### Q24: 什么是重绘和回流（重排）？它们有什么区别？哪些操作会触发重排？

**【核心解析】**
重绘是元素外观改变但不影响布局；回流是元素尺寸、位置等改变导致重新计算布局；回流必定触发重绘，重绘不一定触发回流；常见触发操作：DOM增删、尺寸变化、offset等属性读取；transform和绝对定位不会触发重排

---

### Q25: 浏览器从输入URL到页面展示经历了哪些关键步骤？

**【核心解析】**
DNS解析；TCP连接（HTTP/1.1）；TLS握手（HTTPS）；HTTP请求与响应；HTML解析生成DOM树；CSS解析生成CSSOM；渲染树构建；布局；绘制；合成

---

### Q26: Vue是如何处理模板的？AST起到了什么作用？

**【核心解析】**
模板编译过程（template -> AST -> 优化 -> render函数）；AST作为中间结构；静态节点标记；虚拟DOM生成；编译优化（hoistStatic等）

---

### Q27: 页面刚访问时样式错误，过一两秒恢复，如何排查？

**【核心解析】**
CSS加载阻塞；异步CSS加载；JavaScript动态修改样式；网络延迟；FOUC（无样式内容闪烁）；使用critical CSS

---

### Q28: 请解释浏览器的重排（回流）和重绘机制，以及如何减少重排？

**【核心解析】**
渲染流水线（DOM树、CSSOM、渲染树、布局、绘制）；重排触发条件（DOM操作、样式修改、resize）；重绘触发条件（颜色、背景等不影响布局的属性）；重排比重绘开销大；减少重排技巧（样式集中修改、使用class、离线DOM、避免强制同步布局）

---

### Q29: 什么是重排和重绘？如何优化？

**【核心解析】**
重排（reflow）改变布局，重绘（repaint）改变样式；重排必然导致重绘；优化：减少DOM操作、使用class合并样式、离线DOM、requestAnimationFrame

---

### Q30: 强缓存和协商缓存是什么？

**【核心解析】**
强缓存：直接使用本地缓存，不请求服务器，状态码200（from cache）；通过Expires或Cache-Control实现；协商缓存：向服务器验证缓存是否有效，有效则返回304；通过Last-Modified/If-Modified-Since或ETag/If-None-Match实现；优先级：Cache-Control > Expires > ETag > Last-Modified

---

### Q31: 浏览器存储数据的方式有哪些？localStorage和sessionStorage有什么区别？两个页面的sessionStorage是互通的吗？

**【核心解析】**
Cookie/localStorage/sessionStorage/IndexedDB/Web SQL；localStorage持久化，同源共享；sessionStorage会话级，标签页隔离；不同标签页sessionStorage不互通；大小限制约5MB

---

### Q32: 浏览器CSS、JS、DOM解析顺序是怎样的？

**【核心解析】**
HTML解析生成DOM树；CSS解析生成CSSOM树；CSS不阻塞DOM解析但阻塞JS执行；JS阻塞DOM解析；合成渲染树后布局绘制；defer/async可改变JS加载行为

---

### Q33: 请描述浏览器的渲染流程，并说明如何优化重排和重绘。

**【核心解析】**
解析HTML生成DOM树；解析CSS生成CSSOM树；合并成渲染树；布局（Layout）；绘制（Paint）；合成（Composite）；重排触发条件（几何属性变化）；重绘触发条件（外观属性变化）；优化：使用transform代替top，批量DOM操作

---

### Q34: 浏览器的线程和进程有哪些？

**【核心解析】**
浏览器多进程架构：主进程、渲染进程、GPU进程、网络进程等；渲染进程包含：GUI渲染线程、JS引擎线程、事件触发线程、定时器线程、异步HTTP请求线程；进程间通信（IPC）

---

### Q35: 浏览器不同tab之间是怎么通信的？

**【核心解析】**
Broadcast Channel API；SharedWorker；localStorage事件监听；postMessage（通过iframe或window.open）；Service Worker；IndexedDB

---

### Q36: 浏览器从输入URL到页面展示经历了哪些关键步骤？

**【核心解析】**
DNS解析；TCP连接；HTTP请求；服务器响应；HTML解析构建DOM树；CSS解析构建CSSOM树；渲染树构建；布局；绘制；合成

---

### Q37: 前端性能优化方案有哪些？如何实现性能监控和上报？

**【核心解析】**
首屏优化：懒加载、代码分割；资源优化：压缩、缓存；渲染优化：减少重排重绘；Performance API；Web Vitals；错误监控；上报方式：Beacon, Image

---

### Q38: 请解释浏览器的重排（Reflow）和重绘（Repaint）的区别，以及如何减少它们对性能的影响？

**【核心解析】**
重排影响布局，重绘仅影响外观；触发条件（DOM操作、样式修改、窗口变化等）；性能开销差异；优化策略（批量DOM操作、使用transform/opacity、脱离文档流、读写分离）

---

### Q39: 请描述从输入URL到页面渲染的完整过程？

**【核心解析】**
DNS解析；TCP连接（三次握手）；发送HTTP请求；服务器响应；浏览器解析HTML构建DOM树；解析CSS构建CSSOM树；合并生成渲染树；布局（Layout）；绘制（Paint）；合成（Composite）；四次挥手断开连接

---

### Q40: 请详细说明浏览器的缓存策略，包括强缓存和协商缓存，以及相关的HTTP头（如Cache-Control、ETag等）。

**【核心解析】**
强缓存：Cache-Control（max-age）、Expires，直接使用缓存不请求服务器；协商缓存：ETag/If-None-Match、Last-Modified/If-Modified-Since，需请求服务器验证；304 Not Modified表示缓存有效；Vary头影响缓存键

---

### Q41: 解释浏览器的同源策略、跨域问题以及CORS的工作原理。

**【核心解析】**
同源：协议、域名、端口相同；同源策略限制跨域请求读取响应；CORS通过服务器设置Access-Control-Allow-Origin等头允许跨域；简单请求与预检请求；默认不携带Cookie，需设置Access-Control-Allow-Credentials

---

### Q42: Cookie和JWT在身份认证中的区别是什么？JWT是加密的吗？

**【核心解析】**
Cookie由服务器设置，自动携带，可设置HttpOnly；JWT是自包含的令牌，通常存储在localStorage或Cookie中；JWT是Base64编码的明文，不是密文，但有签名保证完整性；JWT可被篡改检测，但内容可读

---

### Q43: 从输入URL到页面展示，浏览器经历了哪些关键步骤？请详细说明。

**【核心解析】**
URL解析；DNS查询获取IP；TCP三次握手；HTTPS握手（TLS）；发送HTTP请求；服务器返回HTML；浏览器解析HTML构建DOM树；CSSOM构建；渲染树生成；布局；绘制；合成

---

### Q44: 请解释浏览器的事件循环机制，包括宏任务和微任务的分类。

**【核心解析】**
JS单线程；事件循环不断从任务队列取任务；宏任务：setTimeout、setInterval、I/O、UI渲染；微任务：Promise.then、MutationObserver、queueMicrotask；微任务优先级高于宏任务

---

### Q45: 请解释JavaScript的垃圾回收机制。

**【核心解析】**
引用计数；标记-清除；分代回收；V8引擎的Orinoco；内存泄漏常见场景

---

### Q46: 为什么sessionStorage在不同Tab页不共享？请从标准设计和实际场景解释。

**【核心解析】**
W3C标准设计：sessionStorage作用域为顶级浏览上下文（一个Tab）；目的：防止多窗口数据干扰，如同时操作不同订单；复制标签页时拷贝数据但不同步；替代方案：localStorage+storage事件或Broadcast Channel API

---

### Q47: 请详细说明浏览器本地存储（localStorage、sessionStorage、cookie、IndexedDB等）的区别及其各自的使用场景。

**【核心解析】**
存储容量差异；生命周期（持久性）；同源策略限制；与服务器交互方式（cookie自动携带）；IndexedDB的异步与结构化存储

---

### Q48: 请解释浏览器的渲染原理，包括DOM树、CSSOM树、渲染树、布局、绘制、合成等步骤。

**【核心解析】**
HTML解析为DOM树；CSS解析为CSSOM树；合并为渲染树；布局计算位置；绘制像素；合成层提升性能；重排与重绘触发条件

---

### Q49: 什么情况会阻塞DOM树的构建？

**【核心解析】**
同步JavaScript脚本（无async/defer）；CSSOM未构建完成（CSS阻塞渲染）；外部资源加载（如图片、字体）不阻塞DOM解析但阻塞渲染；`<script>`标签位置（放在head中阻塞）

---

### Q50: 请解释display:none、visibility:hidden和opacity:0对元素重排和重绘的影响。

**【核心解析】**
display:none：元素不占位，触发重排和重绘；visibility:hidden：占位不可见，只触发重绘；opacity:0：占位透明，触发重绘（可GPU加速）；性能差异

---

### Q51: 请描述浏览器从输入URL到页面展示的完整过程。

**【核心解析】**
DNS解析；TCP连接（三次握手）；发送HTTP请求；服务器响应；解析HTML构建DOM树；解析CSS构建CSSOM树；合并渲染树；布局；绘制；合成

---

### Q52: FCP（First Contentful Paint）具体发生了什么？

**【核心解析】**
首次内容绘制；浏览器渲染第一个文本或图像；关键渲染路径；优化FCP：减少阻塞资源、优化CSS/JS、使用CDN

---

### Q53: 请详细描述从输入URL到页面展示的完整过程。

**【核心解析】**
DNS解析（域名转IP）；TCP连接（三次握手）；HTTPS加密（TLS握手）；发送HTTP请求；服务器处理并返回响应；浏览器解析HTML（构建DOM树）；解析CSS（构建CSSOM树）；合并渲染树；布局（Layout）；绘制（Paint）；合成（Composite）；重排重绘

---

### Q54: 请解释重绘（Repaint）和回流（Reflow）的区别及触发条件。

**【核心解析】**
回流（布局变化，影响几何属性，如宽高、位置）；重绘（样式变化不影响布局，如颜色、背景）；回流必定触发重绘；触发回流操作（DOM操作、样式修改、窗口resize、获取布局属性如offsetHeight）；优化策略（批量修改、使用class、脱离文档流、requestAnimationFrame）

---

### Q55: 请解释CSS选择器的优先级规则。

**【核心解析】**
优先级权重（内联样式1000，ID选择器100，类/伪类/属性选择器10，元素/伪元素1，通配符0）；!important最高；继承样式最低；相同权重后定义的生效；计算规则（四位数字比较）

---

### Q56: 请解释浏览器事件循环机制。

**【核心解析】**
主线程执行同步代码；宏任务（setTimeout等）放入宏任务队列；微任务（Promise等）放入微任务队列；每轮事件循环先清空微任务再取一个宏任务；async/await是Promise的语法糖

---

### Q57: 页面在加载过程中遇到script标签会怎么样？请解释defer和async的区别。

**【核心解析】**
默认script会阻塞HTML解析；defer延迟执行，在HTML解析完后按顺序执行；async异步加载，加载完立即执行，不保证顺序；defer适用于依赖DOM的脚本；async适用于独立脚本

---

### Q58: prefetch是在HTML引擎、CSS引擎还是JS引擎中实现的？它是如何工作的？

**【核心解析】**
prefetch由浏览器网络层实现，不依赖特定引擎；在HTML解析时通过link标签或HTTP头部指示；浏览器空闲时预取资源；降低后续页面加载延迟

---

### Q59: 从浏览器输入URL到页面完全展示，经历了哪些关键步骤？请结合计算机网络七层模型说明。

**【核心解析】**
DNS解析（应用层）；TCP连接（传输层）；HTTP请求（应用层）；服务器处理并返回；浏览器解析HTML构建DOM树；构建CSSOM树；合并成渲染树；布局；绘制；合成

---

### Q60: 请解释浏览器的重排和重绘，以及如何优化？

**【核心解析】**
重排（reflow）改变布局，重绘（repaint）改变外观；触发条件（DOM操作、样式修改、窗口大小变化）；优化：批量修改、脱离文档流、使用transform/opacity、减少DOM访问

---

### Q61: 从浏览器的工作原理或JS引擎的工作流程分析，如何复现内存泄漏？

**【核心解析】**
内存泄漏常见原因：全局变量、闭包、定时器、DOM引用、事件监听未移除；使用Chrome DevTools Memory面板；堆快照对比；检测分离DOM；WeakMap/WeakSet辅助

---

### Q62: 浏览器从输入URL到页面展示经历了哪些关键步骤？

**【核心解析】**
DNS解析；TCP连接；HTTP请求与响应；解析HTML构建DOM树；解析CSS构建CSSOM树；合并成渲染树；布局（Layout）；绘制（Paint）；合成（Composite）；重排重绘

---

### Q63: SSR和CSR的区别是什么？各自的优缺点？

**【核心解析】**
SSR服务端渲染，CSR客户端渲染；SSR优点：首屏快、SEO友好；缺点：服务器压力大、交互响应慢；CSR优点：前后端分离、交互流畅；缺点：首屏慢、SEO差；Next.js支持SSR和SSG

---

### Q64: 请解释V8引擎的工作原理以及Node.js的I/O模型。

**【核心解析】**
V8的JIT编译；内存管理与垃圾回收；Node.js的事件循环与libuv；非阻塞I/O与异步回调

---

### Q65: 请描述用户从在浏览器中输入网址到页面完全展示的完整生命周期。

**【核心解析】**
DNS解析；TCP三次握手；TLS协商（HTTPS）；HTTP请求与响应；HTML解析构建DOM树；CSS解析构建CSSOM；渲染树构建；布局；绘制；合成

---

### Q66: 请描述浏览器从输入URL到页面完全展示的完整过程，并说明哪一步可以优化。

**【核心解析】**
DNS解析；TCP连接（三次握手）；TLS协商（HTTPS）；发送HTTP请求；服务器处理并返回；浏览器解析HTML构建DOM树；解析CSS构建CSSOM树；合并成渲染树；布局（Layout）；绘制（Paint）；合成（Composite）；优化点（DNS预解析、CDN、缓存、资源压缩、关键渲染路径优化）

---

### Q67: 请解释浏览器的渲染过程，包括CSS加载和渲染。

**【核心解析】**
HTML解析生成DOM树；CSS解析生成CSSOM树；两者合并成渲染树；布局计算位置；绘制像素；合成层；CSS加载阻塞渲染（CSSOM构建完成前不渲染）；CSS放在head中避免闪屏

---

### Q68: 请解释虚拟DOM的作用及其工作原理。

**【核心解析】**
虚拟DOM是真实DOM的JavaScript对象表示；作用（减少直接操作DOM、跨平台、批量更新）；工作原理（创建虚拟DOM树、Diff算法比较差异、生成补丁更新真实DOM）

---

### Q69: 请解释浏览器中的线程与进程，以及JavaScript单线程如何实现异步。

**【核心解析】**
进程是资源分配最小单位，线程是CPU调度最小单位；浏览器是多进程架构（浏览器进程、渲染进程、GPU进程等）；渲染进程包含主线程、合成线程、工作线程等；JavaScript单线程通过事件循环（Event Loop）实现异步，利用Web API（setTimeout、AJAX）和任务队列

---

### Q70: 请解释浏览器渲染过程中图片请求的次数。

**【核心解析】**
图片请求次数取决于HTML中img标签数量、CSS中background-image数量、以及图片是否被重复引用；浏览器会缓存图片，相同URL只请求一次；懒加载会影响请求时机

---

### Q71: 请解释浏览器线程、协程和进程的区别。

**【核心解析】**
进程资源隔离；线程共享内存；协程用户态切换；浏览器多进程架构；渲染进程线程

---

### Q72: 浏览器多进程架构是怎样的？采取了哪些优化？

**【核心解析】**
主进程；渲染进程；GPU进程；网络进程；插件进程；沙箱隔离；内存优化

---

### Q73: 请解释HTML的解析步骤和浏览器的渲染原理。

**【核心解析】**
HTML解析为DOM树；CSS解析为CSSOM树；合并为渲染树；布局；绘制；合成

---

### Q74: 请解释V8的垃圾回收机制。

**【核心解析】**
新生代与老生代；Scavenge算法；标记-清除；标记-整理；增量标记

---

### Q75: 请解释回流和重绘的区别及触发条件。

**【核心解析】**
回流改变布局；重绘改变样式；触发条件；性能影响；优化方法

---

### Q76: 从输入URL到页面加载完成发生了什么？请详细描述包括URL校验、DNS解析、TCP连接、服务端处理、长任务判断、JS阻塞、性能检测API、异常监控等。

**【核心解析】**
URL校验（格式、协议）；DNS解析前检查缓存、HSTS；TCP三次握手；服务端处理请求并返回HTML；长任务指执行时间超过50ms的任务；JS会阻塞DOM解析和渲染；性能检测API包括Performance、Lighthouse、Core Web Vitals；异常监控包括window.onerror、Promise.catch、资源加载错误等

---

### Q77: 请描述浏览器从输入URL到页面展示的完整过程。

**【核心解析】**
DNS解析；TCP连接（三次握手）；TLS协商（HTTPS）；HTTP请求与响应；HTML解析构建DOM树；CSS解析构建CSSOM树；渲染树生成；布局（Layout）；绘制（Paint）；合成（Composite）

---

### Q78: 请解释浏览器的渲染流水线，以及重排（Reflow）和重绘（Repaint）的区别。

**【核心解析】**
DOM树、CSSOM树、渲染树；布局计算位置；绘制像素；重排影响布局，开销大；重绘只影响外观；如何减少重排重绘

---

### Q79: 请解释浏览器缓存机制，包括强缓存和协商缓存。

**【核心解析】**
强缓存（Expires、Cache-Control）；协商缓存（Last-Modified/If-Modified-Since、ETag/If-None-Match）；缓存优先级；缓存位置（memory cache、disk cache）

---

### Q80: 请解释关键渲染路径（Critical Rendering Path）以及如何优化首屏加载。

**【核心解析】**
阻塞渲染的资源（CSS、同步JS）；async/defer；内联关键CSS；懒加载非关键资源；减少DOM深度

---

### Q81: 请解释Core Web Vitals指标（LCP、FID、CLS）及其优化方法。

**【核心解析】**
LCP（最大内容绘制）优化图片加载；FID（首次输入延迟）优化JS执行；CLS（累积布局偏移）避免动态插入

---

### Q82: 请解释操作系统中的中断机制，包括中断的类型（如IO中断、时钟中断）以及时间片轮转调度算法的实现原理。

**【核心解析】**
中断的概念与分类（硬件中断、软件中断）；IO中断的实现；时钟中断与时间片轮转；CPU时序控制；进程调度与上下文切换

---

### Q83: 请解释操作系统的内存管理功能，包括分页和分段的区别，以及为什么需要分段？

**【核心解析】**
内存管理的目的；分页（固定大小、避免外部碎片）；分段（逻辑划分、共享与保护）；分页与分段的区别与结合（段页式）；虚拟内存

---

### Q84: 请解释进程的状态（就绪、运行、挂起等）及其转换条件，以及进程间通信的方式。

**【核心解析】**
进程三态模型（就绪、运行、阻塞）；挂起状态；状态转换条件；进程间通信方式（管道、消息队列、共享内存、信号量、Socket）

---

### Q85: 什么情况下会引起重排（Reflow）？

**【核心解析】**
DOM增删改；元素尺寸位置变化；窗口resize；获取布局属性（offsetTop等）；字体变化

---

### Q86: 浏览器在安全领域做了哪些事情？请解释同源策略、Cookie安全属性等。

**【核心解析】**
同源策略限制跨域请求；Cookie的HttpOnly、Secure、SameSite属性；CORS机制；XSS和CSRF防御；Content Security Policy

---

### Q87: 浏览器从输入URL到页面完全展示经历了哪些关键步骤？

**【核心解析】**
DNS解析；TCP连接；HTTP请求；服务器响应；HTML解析构建DOM树；CSS解析构建CSSOM树；渲染树生成；布局；绘制；合成

---

### Q88: 请解释浏览器的回流（Reflow）和重绘（Repaint）以及如何优化？

**【核心解析】**
回流影响布局；重绘影响外观；触发条件（DOM操作、样式修改）；使用transform代替top；批量修改DOM；requestAnimationFrame

---

### Q89: script标签的async和defer属性有什么区别？

**【核心解析】**
async异步加载后立即执行；defer异步加载后等待DOM解析完执行；defer按顺序执行；async不保证顺序

---

### Q90: 浏览器在安全领域做了哪些事情？如同源策略、Cookie等。

**【核心解析】**
同源策略限制跨域请求；Cookie的SameSite属性；XSS防御（CSP、转义）；CSRF防御（Token、Referer）；HTTPS加密

---

### Q91: 浏览器输入网址后，强缓存和协商缓存的流程是怎样的？

**【核心解析】**
强缓存：Expires/Cache-Control，直接使用缓存；协商缓存：Last-Modified/ETag，向服务器验证；304状态码；缓存策略优先级

---

### Q92: 请解释浏览器事件循环（Event Loop）机制。

**【核心解析】**
同步任务执行；微任务（Promise.then, MutationObserver）先于宏任务（setTimeout, I/O）；宏任务队列；requestAnimationFrame在渲染前执行；Node.js事件循环与浏览器差异

---

### Q93: 浏览器重绘的触发条件有哪些？如何减少重绘？

**【核心解析】**
重绘触发条件：修改视觉属性如颜色、背景、阴影等；减少重绘方法：使用transform代替top/left，使用requestAnimationFrame，合并DOM操作，使用will-change

---

### Q94: 请解释浏览器缓存机制（强缓存和协商缓存）的工作原理。

**【核心解析】**
强缓存：通过Cache-Control（max-age）和Expires，状态码200；协商缓存：通过Last-Modified/If-Modified-Since和ETag/If-None-Match，状态码304；优先级：Cache-Control > Expires > ETag > Last-Modified

---

### Q95: 请详细描述浏览器的渲染原理，包括渲染流水线、重排与重绘的触发条件及优化方法。

**【核心解析】**
DOM树与CSSOM树构建；渲染树生成；布局（Layout）；绘制（Paint）；合成（Composite）；重排与重绘的触发条件；GPU加速

---

### Q96: 请解释LCP和TBT的计算逻辑，以及如何优化这些性能指标。

**【核心解析】**
LCP定义与计算（最大内容绘制时间）；TBT定义与计算（总阻塞时间）；优化手段（减少资源加载时间、优化JS执行、懒加载等）

---

### Q97: 浏览器什么时候会发生回流（reflow）？什么时候发生重绘（repaint）？

**【核心解析】**
回流触发条件：几何属性变化、DOM增删、窗口大小变化等；重绘触发条件：样式变化不影响布局；回流必然导致重绘；性能优化建议

---

### Q98: 从输入URL到页面展示发生了什么？如何减少首屏渲染时间？

**【核心解析】**
DNS解析；TCP三次握手；TLS协商；HTTP请求；HTML解析构建DOM树；CSSOM构建；渲染树；布局绘制；优化：CDN、懒加载、代码分割、SSR

---

### Q99: 什么是虚拟DOM？使用虚拟DOM就不会触发重排了吗？

**【核心解析】**
虚拟DOM是真实DOM的抽象；减少直接操作DOM；Diff算法批量更新；最终仍会触发重排重绘；但减少了次数

---

### Q100: 列表中有多个元素变化时，Vue的patch是打一个补丁还是多个？

**【核心解析】**
Vue的Diff算法会对比新旧VNode；每个变化节点生成一个patch；但最终批量更新DOM；实际是多个patch合并为一次DOM操作

---

