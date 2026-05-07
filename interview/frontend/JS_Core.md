# JS_Core 面试专题手册

> 💡 本章节共收录 5257 道面试真题，建议每天复习 10-20 题。

---
### Q1: 请解释JavaScript的事件循环机制，包括宏任务和微任务的区别与执行顺序。

**【核心解析】**
事件循环模型；宏任务（setTimeout, setInterval, I/O）；微任务（Promise.then, MutationObserver）；执行顺序：同步代码→微任务→宏任务；Node.js与浏览器差异

---

### Q2: 什么是闭包？请举例说明闭包在实际项目中的应用场景。

**【核心解析】**
闭包定义：函数+其词法环境；作用：数据私有化、模块化、回调函数；实际应用：防抖节流、React Hooks中的useState、循环中保存变量；内存泄漏风险

---

### Q3: 请解释JavaScript的原型链机制，以及如何通过原型链实现继承。

**【核心解析】**
原型对象（prototype）；__proto__属性；原型链查找过程；构造函数与实例关系；原型链继承、组合继承、ES6 class继承

---

### Q4: 请手写一个深拷贝函数，考虑循环引用和特殊对象（如Date、RegExp）的处理。

**【核心解析】**
递归遍历；WeakMap解决循环引用；判断对象类型（typeof, instanceof, Object.prototype.toString）；处理数组、Date、RegExp、Map、Set；避免拷贝原型链属性

---

### Q5: 看代码说输出：var作用域和事件循环。

**【核心解析】**
var函数作用域与变量提升；事件循环宏任务微任务顺序；async/await执行顺序；常见输出题模式

---

### Q6: 手写Promise相关中间件（如实现Promise.all、race、retry等）。

**【核心解析】**
Promise.all实现（处理所有resolve或reject）；Promise.race实现；Promise.retry实现（重试机制）；错误处理

---

### Q7: 箭头函数中this的指向是什么？代码报错如何排查？

**【核心解析】**
箭头函数无自己的this，继承外层作用域；不能作为构造函数；报错排查：控制台错误信息、断点调试、console.log

---

### Q8: 请解释JavaScript中的闭包是什么，它的应用场景、缺点以及如何处理闭包引起的内存泄漏？

**【核心解析】**
闭包的定义（函数内部函数访问外部变量）；应用场景（模块化、柯里化、防抖节流）；缺点（内存泄漏，引用的大对象未释放）；处理方法（及时解除引用、使用弱引用）

---

### Q9: 请介绍JavaScript的事件循环机制，包括同步任务、微任务、宏任务的执行顺序，并举例说明。

**【核心解析】**
事件循环概念；同步任务优先执行；微任务（Promise.then、MutationObserver）在宏任务之前执行；宏任务（setTimeout、setInterval）每次循环执行一个；执行顺序示例

---

### Q10: 请解释Promise的工作原理，包括状态、不可逆性以及结果获取方式，并说明Promise与Async/Await的关系及使用规则。

**【核心解析】**
Promise三种状态（pending/fulfilled/rejected）；状态不可逆；then/catch获取结果；Async/Await是语法糖；await必须在async函数内；错误处理用try/catch

---

### Q11: 前端的垃圾回收机制是什么？

**【核心解析】**
标记清除（Mark-Sweep）为主；引用计数（已不常用）；V8分代回收（新生代/老生代）；增量标记；内存泄漏常见原因（闭包、全局变量、定时器、DOM引用）

---

### Q12: 手撕：数字输出顺序，主要考察事件循环。

**【核心解析】**
宏任务与微任务；setTimeout/Promise/async-await执行顺序；事件循环机制；代码输出题

---

### Q13: 请解释async/await的概念及其与Promise的关系，并说明它们如何简化异步编程？

**【核心解析】**
async/await是Promise的语法糖；async函数返回Promise；await暂停执行直到Promise解决；错误处理用try/catch；与事件循环的关系

---

### Q14: 请手写防抖和节流函数，并说明它们的应用场景。另外，在防抖函数中，如果我不想执行本次函数，想终止它，应该如何实现？

**【核心解析】**
防抖：延迟执行，连续触发重置定时器；节流：固定时间间隔执行；应用场景：输入搜索（防抖）、滚动加载（节流）；终止防抖：清除定时器并设置标志位或返回取消函数

---

### Q15: 请解释JavaScript的事件循环机制，并给出一个事件循环相关的代码输出题。

**【核心解析】**
同步任务先执行；微任务（Promise.then、MutationObserver）在宏任务之前；宏任务（setTimeout、I/O）按顺序执行；async/await的微任务特性；代码输出题示例

---

### Q16: 如何判断JavaScript中的数据类型？请说明typeof、instanceof和Object.prototype.toString.call的原理及区别。

**【核心解析】**
typeof返回基本类型和function；instanceof检查原型链；Object.prototype.toString.call返回[object Type]；typeof null为object；instanceof可判断自定义类型；toString最准确

---

### Q17: 请解释JavaScript的事件循环（Event Loop）机制。

**【核心解析】**
同步任务与异步任务；宏任务与微任务；执行栈；任务队列；async/await与Promise；浏览器与Node差异

---

### Q18: 请解释var、let和const的区别，以及变量作用域。

**【核心解析】**
函数作用域vs块级作用域；变量提升；暂时性死区；重复声明；const常量

---

### Q19: 请解释JavaScript的原型链机制，并给出代码示例。

**【核心解析】**
__proto__与prototype；原型链查找；构造函数；instanceof原理；继承实现

---

### Q20: 请解释Promise解决了什么问题，并手写一个Promise.all。

**【核心解析】**
回调地狱；链式调用；状态机；异步流程控制；Promise.all实现（处理空数组、错误捕获）

---

### Q21: 箭头函数与普通函数有什么区别？

**【核心解析】**
this绑定（词法作用域）；不能作为构造函数；没有arguments对象；不能使用yield；语法简洁

---

### Q22: JavaScript中有哪些数据类型？基本数据类型和引用数据类型的本质区别是什么？

**【核心解析】**
基本类型（string, number, boolean, null, undefined, symbol, bigint）；引用类型（object, array, function）；栈与堆存储；赋值与拷贝

---

### Q23: 请手写一个new操作符的实现。

**【核心解析】**
创建空对象；原型链接；绑定this；返回对象

---

### Q24: CommonJS和ES6模块的区别是什么？

**【核心解析】**
CommonJS动态加载，ES6静态加载；CommonJS输出值拷贝，ES6输出引用；CommonJS运行时执行，ES6编译时解析；CommonJS this指向模块本身，ES6 this指向undefined

---

### Q25: 请解释宏任务、微任务以及它们的执行顺序，并举例说明。

**【核心解析】**
宏任务：setTimeout、setInterval、I/O；微任务：Promise.then、MutationObserver、queueMicrotask；执行顺序：同步代码→微任务→宏任务；经典输出顺序题

---

### Q26: 请列举Promise的高级API并说明其用途。

**【核心解析】**
Promise.all（全部成功）；Promise.race（竞速）；Promise.allSettled（全部完成）；Promise.any（任一成功）；Promise.resolve/reject

---

### Q27: 请解释事件循环（Event Loop）的机制，并给出代码输出顺序题。

**【核心解析】**
调用栈、宏任务队列、微任务队列；执行顺序：同步代码→微任务→宏任务；async/await本质是Promise；经典题目：setTimeout、Promise、async函数输出顺序

---

### Q28: 请解释闭包的概念及其具体应用场景。

**【核心解析】**
闭包：函数访问外部作用域变量；应用场景：数据私有化、柯里化、防抖节流、模块模式、回调函数

---

### Q29: JavaScript的基本数据类型有哪些？

**【核心解析】**
基本数据类型包括Number、String、Boolean、Null、Undefined、Symbol、BigInt；typeof操作符的返回值；基本类型与引用类型的区别；基本类型存储在栈中

---

### Q30: 箭头函数和普通函数的区别是什么？

**【核心解析】**
箭头函数没有自己的this，继承外层作用域的this；箭头函数不能作为构造函数，不能使用new；箭头函数没有arguments对象；箭头函数不能使用yield；箭头函数语法更简洁

---

### Q31: 请解释闭包的概念及其应用场景。

**【核心解析】**
闭包是函数能够访问其外部作用域变量的能力；闭包的形成条件；闭包的应用场景如数据私有化、柯里化、防抖节流；闭包可能导致内存泄漏

---

### Q32: 请解释事件循环（Event Loop）机制。

**【核心解析】**
同步任务和异步任务；宏任务和微任务；执行顺序：同步代码 -> 微任务 -> 宏任务；常见宏任务：setTimeout、setInterval、I/O；常见微任务：Promise.then、MutationObserver

---

### Q33: 请实现一个sleep函数（基于Promise）。

**【核心解析】**
使用setTimeout和Promise；返回Promise对象；resolve在定时器回调中调用；async/await调用sleep

---

### Q34: 请解释Promise的原理，并列举Promise的常用方法。

**【核心解析】**
Promise是异步编程的解决方案，有三种状态：pending、fulfilled、rejected；then、catch、finally方法；静态方法：Promise.resolve、Promise.reject、Promise.all、Promise.race、Promise.allSettled、Promise.any

---

### Q35: 请详细解释JavaScript的事件循环机制（Event Loop），包括宏任务和微任务。

**【核心解析】**
JS单线程；事件循环由执行栈、任务队列组成；宏任务：setTimeout、setInterval、I/O、UI渲染；微任务：Promise.then、MutationObserver、queueMicrotask；微任务优先于宏任务执行

---

### Q36: 请解释闭包的概念，并举例说明在项目中哪些地方会用到闭包。

**【核心解析】**
闭包是函数与其词法环境的组合；内部函数可以访问外部函数的变量；常见应用：模块模式、防抖节流、柯里化、React Hooks中的useEffect清理函数

---

### Q37: 请列举ES6的新特性，并解释const声明引用类型时修改属性是否会出错。

**【核心解析】**
ES6新特性：let/const、箭头函数、模板字符串、解构赋值、扩展运算符、Promise、class、模块化、Symbol、Set/Map等；const保证变量指向的内存地址不变，引用类型可修改属性，但不能重新赋值

---

### Q38: 请解释箭头函数中this的指向与普通函数中this的指向有何不同。

**【核心解析】**
普通函数this取决于调用方式（动态绑定）；箭头函数没有自己的this，继承外层作用域的this（词法绑定）；箭头函数不能作为构造函数，不能使用arguments对象

---

### Q39: 请解释防抖（debounce）和节流（throttle）的概念，并手写实现。

**【核心解析】**
防抖：连续触发事件时只在最后一次触发后执行；节流：固定时间间隔内只执行一次；防抖应用：搜索输入、窗口resize；节流应用：滚动事件、按钮点击；实现：使用setTimeout和时间戳

---

### Q40: 请解释JavaScript事件循环机制，包括宏任务和微任务的区别，并分析以下代码的输出顺序：setTimeout(() => console.log('2'), 0); Promise.resolve().then(() => console.log('3')); Promise.resolve().then(() => { console.log('4'); setTimeout(() => console.log('5'), 0); }); console.log('1');

**【核心解析】**
事件循环模型；宏任务与微任务的定义与优先级；执行栈与任务队列；微任务队列的清空时机；代码执行顺序分析

---

### Q41: 请解释JavaScript闭包的概念、原理及其常见应用场景。

**【核心解析】**
闭包的定义（函数+外部变量引用）；词法作用域；闭包的形成条件；内存泄漏风险；应用场景（模块化、柯里化、防抖节流）

---

### Q42: 手写实现一个Scheduler类，支持最大并发数控制，实现任务调度效果。给定代码：const scheduler = new Scheduler(2); const timer = (delay) => new Promise(resolve => setTimeout(resolve, delay)); const addTask = (delay, order) => { scheduler.add(timer(delay)).then(() => console.log(order)); }; addTask(1000,'1'); addTask(300,'2'); addTask(500,'3'); addTask(800,'4'); 期望输出顺序为'2','3','1','4'。

**【核心解析】**
并发控制原理；任务队列管理；Promise链式调用；异步调度；边界情况处理

---

### Q43: 给定一个函数random0to5()，等概率返回0-5的整数，请实现一个函数random0to8()，等概率返回0-8的整数，禁止使用Math.random()。

**【核心解析】**
拒绝采样法；概率均匀性；随机数映射；边界处理；算法复杂度

---

### Q44: 请解释以下代码的输出：for (var i = 0; i < 5; i++) { setTimeout(() => console.log(i), 100); } 并说明如何修改使其输出0,1,2,3,4。

**【核心解析】**
var与let的区别；闭包捕获变量；setTimeout异步执行；块级作用域；立即执行函数或let修复

---

### Q45: JavaScript有哪些数据类型？如何判断数据类型？

**【核心解析】**
基本类型与引用类型；typeof与instanceof；Object.prototype.toString.call；constructor属性；类型转换规则

---

### Q46: 请解释事件循环机制，并给出涉及Promise、setTimeout、async/await的代码输出顺序。

**【核心解析】**
宏任务与微任务；事件循环阶段；Promise.then与async/await的微任务；setTimeout宏任务；执行顺序分析

---

### Q47: 请手写实现一个EventEmitter（发布订阅模式），并说明其应用场景。

**【核心解析】**
事件监听与触发机制；on/off/emit/once方法的实现；防止内存泄漏；应用场景：跨组件通信、异步流程控制

---

### Q48: 请解释函数柯里化（Currying）的概念，并手写实现一个通用的柯里化函数。

**【核心解析】**
柯里化的定义：将多参数函数转换为单参数函数链；实现原理：利用闭包和递归；应用场景：参数复用、延迟计算；与偏函数的区别

---

### Q49: 请讲解JavaScript的原型链。

**【核心解析】**
原型链的定义与作用；__proto__与prototype的关系；构造函数、实例与原型对象；原型链的查找机制；原型链的终点是Object.prototype

---

### Q50: JavaScript的基本数据类型有哪些？

**【核心解析】**
基本数据类型：number, string, boolean, null, undefined, symbol, bigint；引用类型：object；typeof操作符的返回值；基本类型与引用类型的区别

---

### Q51: 什么是闭包？请举例说明。

**【核心解析】**
闭包的定义：函数嵌套函数，内部函数访问外部函数变量；闭包的作用：数据私有化、创建模块、保存状态；闭包的内存管理；常见应用场景：防抖节流、柯里化

---

### Q52: 请说明JavaScript的垃圾回收机制。

**【核心解析】**
垃圾回收策略：标记清除、引用计数；V8引擎的分代回收；新生代与老生代；内存泄漏的常见原因；如何避免内存泄漏

---

### Q53: 请介绍JavaScript的数据类型、作用域、作用域链以及事件循环机制。

**【核心解析】**
基本类型与引用类型；全局/函数/块级作用域；作用域链的查找过程；事件循环的宏任务与微任务

---

### Q54: 实现一个Promise异步并发调度器。

**【核心解析】**
控制并发数量；任务队列管理；Promise封装；动态添加任务；结果收集

---

### Q55: 实现Promise.all方法。

**【核心解析】**
接收可迭代对象；返回Promise；所有成功则返回结果数组；任一失败则立即reject；处理空迭代器

---

### Q56: 请详细说说对this的理解，包括严格模式和非严格模式下的区别。

**【核心解析】**
默认绑定（全局对象/undefined）；隐式绑定（调用者）；显式绑定（call/apply/bind）；new绑定；箭头函数无独立this

---

### Q57: 变量声明方式var、let、const的区别是什么？

**【核心解析】**
作用域（函数/块级）；变量提升；暂时性死区；重复声明；const常量不可重新赋值

---

### Q58: 请预测以下JS代码中Promise、setTimeout和同步任务的打印顺序。

**【核心解析】**
同步任务先执行；微任务（Promise.then）在宏任务（setTimeout）之前；事件循环机制

---

### Q59: 实现一个基础的EventEmitter，包含on和once方法。

**【核心解析】**
事件存储对象；on注册监听；once注册一次性监听；emit触发事件；off移除监听

---

### Q60: ES6的解构赋值有哪些用法？

**【核心解析】**
数组解构；对象解构；嵌套解构；默认值；剩余模式（...）

---

### Q61: 请解释JavaScript中的作用域和闭包的概念、原理及应用。

**【核心解析】**
作用域链与词法作用域；闭包的定义（函数+对其周围状态的引用）；闭包的形成原理（函数嵌套并返回内部函数）；闭包的应用（模块化、柯里化、防抖节流）；闭包的内存管理（避免循环引用导致内存泄漏）

---

### Q62: 请解释浏览器中JavaScript的事件循环机制，包括宏任务和微任务。

**【核心解析】**
事件循环的概念；宏任务（setTimeout、setInterval、I/O、UI渲染）；微任务（Promise.then、MutationObserver、queueMicrotask）；执行顺序（同步代码→微任务→宏任务）；async/await在事件循环中的表现

---

### Q63: 请解释JavaScript的垃圾回收机制，以及引用计数的缺点和循环依赖问题。

**【核心解析】**
垃圾回收的两种主要方式（标记清除、引用计数）；引用计数的原理；循环引用导致的内存泄漏；现代引擎的标记清除优化（如V8的增量标记、并行标记）；如何避免内存泄漏（WeakMap、WeakSet、及时解除引用）

---

### Q64: 请比较Proxy与defineProperty的区别。

**【核心解析】**
Proxy可以拦截更多操作（如in、delete、getPrototypeOf等）；defineProperty只能拦截对象属性的读取和赋值；Proxy支持数组和动态属性；defineProperty需要遍历对象属性；Proxy返回新对象，defineProperty修改原对象；Proxy性能开销相对较大

---

### Q65: 请解释Promise.all()和Promise.allSettled()的区别。

**【核心解析】**
Promise.all()：所有Promise成功则返回结果数组，任一失败则立即reject；Promise.allSettled()：等待所有Promise完成，返回每个Promise的状态和值/原因；适用场景：all用于依赖所有成功，allSettled用于需要知道每个结果

---

### Q66: 请解释async/await与Promise的关系。

**【核心解析】**
async函数返回Promise；await等待Promise解析；async/await是Promise的语法糖；错误处理：try/catch替代.catch；执行顺序：await后面的代码相当于.then中的回调

---

### Q67: 请解释浅拷贝和深拷贝的区别，并手写实现深拷贝。

**【核心解析】**
浅拷贝只复制引用；深拷贝递归复制所有层级；JSON.parse/JSON.stringify的局限性；递归实现深拷贝；处理循环引用

---

### Q68: 大数相加的使用场景是什么？JavaScript的Number范围是多少？从计算机角度解释Number的范围。

**【核心解析】**
大数相加用于精度要求高的场景（如金融）；Number范围±2^53整数；IEEE 754双精度浮点；安全整数范围；BigInt解决大数问题

---

### Q69: setInterval长时间运行会发生什么？setTimeout中嵌套setTimeout与直接使用setInterval有什么区别？在倒计时场景中哪种更好？如何防止定时器延迟？如果用真实时间戳更新倒计时可能有什么问题？

**【核心解析】**
setInterval可能累积回调；嵌套setTimeout可动态调整间隔；倒计时用嵌套setTimeout更准确；使用requestAnimationFrame或时间戳补偿；时间戳更新需考虑系统时间修改

---

### Q70: 请解释Web Worker的作用和使用场景。

**【核心解析】**
后台线程执行脚本；不阻塞主线程；适合计算密集型任务；通过postMessage通信；无法操作DOM；共享内存SharedArrayBuffer

---

### Q71: 请实现大数相加函数。

**【核心解析】**
字符串逐位相加；处理进位；对齐长度；从低位到高位；返回字符串结果

---

### Q72: 请解释JavaScript的垃圾回收机制。

**【核心解析】**
标记清除；引用计数；V8分代回收；新生代与老生代；内存泄漏常见原因；WeakMap/WeakSet

---

### Q73: 箭头函数解决了什么问题？

**【核心解析】**
简化函数语法；不绑定this；不能用作构造函数；无arguments对象；适合回调函数；与普通函数区别

---

### Q74: JavaScript有哪些基础数据类型？

**【核心解析】**
原始类型：number、string、boolean、null、undefined、symbol、bigint；引用类型：object（包括array、function等）；typeof操作符的返回值；null与undefined的区别

---

### Q75: 请解释闭包的概念、原理及应用场景。

**【核心解析】**
闭包是函数与其词法环境的组合；内部函数可以访问外部函数作用域中的变量；实现数据私有化；常见应用：模块模式、柯里化、防抖节流；注意内存泄漏问题

---

### Q76: 箭头函数与普通函数有哪些区别？

**【核心解析】**
箭头函数没有自己的this，继承外层作用域的this；不能用作构造函数，不能使用new；没有arguments对象；不能使用yield；语法更简洁

---

### Q77: 请解释JavaScript的事件循环（Event Loop）机制，包括宏任务和微任务。

**【核心解析】**
单线程异步模型；执行栈与任务队列；宏任务：setTimeout、setInterval、I/O、UI渲染；微任务：Promise.then、MutationObserver、queueMicrotask；微任务优先级高于宏任务；微任务队列清空后才执行下一个宏任务

---

### Q78: 请解释原型链的概念及其在JavaScript中的作用。

**【核心解析】**
每个对象都有一个__proto__属性指向其原型；原型链通过__proto__连接；构造函数有prototype属性；实例的__proto__指向构造函数的prototype；实现继承；原型链的终点是null

---

### Q79: 请手写一个防抖函数。

**【核心解析】**
防抖原理：在事件触发后等待一段时间再执行，若期间再次触发则重新计时；实现：返回一个闭包，使用setTimeout；可配置立即执行选项；应用场景：输入框搜索、窗口resize

---

### Q80: 请手写一个节流函数。

**【核心解析】**
节流原理：在指定时间间隔内只执行一次；实现：使用时间戳或定时器；时间戳版：立即执行；定时器版：延迟执行；应用场景：滚动事件、按钮点击

---

### Q81: 请手写一个深拷贝函数。

**【核心解析】**
考虑对象、数组、循环引用、特殊对象（Date、RegExp等）；递归实现；使用WeakMap解决循环引用；注意Symbol和不可枚举属性；也可使用JSON.parse(JSON.stringify())但有限制

---

### Q82: 请手写一个柯里化函数。

**【核心解析】**
柯里化：将多参数函数转换为一系列单参数函数；实现：递归收集参数，直到参数数量足够；应用：参数复用、延迟执行；支持占位符的柯里化

---

### Q83: 请手写数组拍平函数（flatten）。

**【核心解析】**
递归遍历数组；使用reduce和concat；指定拍平深度；处理空数组；ES6的flat方法

---

### Q84: 请手写new操作符的实现。

**【核心解析】**
创建一个新对象；将新对象的__proto__指向构造函数的prototype；执行构造函数，this指向新对象；如果构造函数返回对象则返回该对象，否则返回新对象

---

### Q85: 请手写apply、call、bind函数。

**【核心解析】**
apply和call：改变this指向并立即执行；apply参数为数组，call参数列表；bind：返回一个新函数，可绑定this和部分参数；实现时注意边界情况

---

### Q86: 请手写instanceof操作符的实现。

**【核心解析】**
检测构造函数的prototype是否出现在实例的原型链上；通过循环遍历__proto__；注意null和undefined的处理

---

### Q87: 请手写一个sleep函数。

**【核心解析】**
基于Promise和setTimeout实现；async/await使用；实现延迟执行

---

### Q88: 请手写Promise及其常用方法（all、race等）。

**【核心解析】**
Promise状态：pending、fulfilled、rejected；then、catch、finally；all：全部成功才成功，一个失败则失败；race：第一个完成的状态；allSettled：所有完成；any：第一个成功

---

### Q89: 请手写一个异步并发调度器。

**【核心解析】**
控制并发数量；维护一个任务队列；每次执行不超过最大并发数；使用Promise和async/await；实现add方法

---

### Q90: 请手写一个发布订阅模式。

**【核心解析】**
维护一个事件映射对象；on方法注册事件；emit方法触发事件；off方法移除事件；once方法只执行一次；支持命名空间

---

### Q91: 请手写数组去重。

**【核心解析】**
使用Set；使用filter和indexOf；使用reduce；考虑对象和NaN的去重；性能比较

---

### Q92: JavaScript中 == 和 === 的区别是什么？

**【核心解析】**
类型转换规则；严格相等与抽象相等；null和undefined的特殊情况；推荐使用===

---

### Q93: JavaScript有哪些数据类型？如何区分基本类型和引用类型？

**【核心解析】**
基本类型：string, number, boolean, null, undefined, symbol, bigint；引用类型：object, array, function；存储方式（栈与堆）；typeof与instanceof

---

### Q94: Symbol是什么？有哪些应用场景？

**【核心解析】**
Symbol是ES6引入的原始类型，表示唯一值；应用场景：对象私有属性、防止属性名冲突、内置Symbol（如Symbol.iterator）

---

### Q95: 什么是防抖？如何实现？有哪些应用场景？

**【核心解析】**
防抖原理：延迟执行，连续触发重置计时器；实现：使用setTimeout；应用场景：输入框搜索、窗口resize、按钮点击

---

### Q96: 轮询请求应该使用setTimeout还是setInterval？为什么？

**【核心解析】**
推荐setTimeout递归调用；setInterval可能造成请求堆积；setTimeout可控制间隔；考虑网络延迟和请求完成时间

---

### Q97: 什么是闭包？有哪些实际应用场景？

**【核心解析】**
闭包定义：函数访问外部变量；应用场景：数据私有化、柯里化、防抖节流、模块模式

---

### Q98: 请解释事件循环（Event Loop）机制，并分析以下代码的输出顺序。

**【核心解析】**
宏任务与微任务；执行顺序：同步代码->微任务->宏任务；async/await本质；Promise与setTimeout

---

### Q99: Promise.all的作用是什么？如何处理其中某个Promise失败的情况？

**【核心解析】**
Promise.all接收Promise数组，全部成功返回结果数组；任一失败则reject；使用Promise.allSettled或catch单独处理

---

### Q100: 什么是暂时性死区（TDZ）？为什么会产生？哪些声明方式会存在TDZ？

**【核心解析】**
TDZ指变量在声明前不可访问的区域；产生原因：let/const有块级作用域且不会提升；存在TDZ的声明：let、const、class

---

