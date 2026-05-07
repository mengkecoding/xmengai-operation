# Vue_Ecosystem 面试专题手册

> 💡 本章节共收录 2090 道面试真题，建议每天复习 10-20 题。

---
### Q1: 请解释Vue中keep-alive组件的作用与实现原理。

**【核心解析】**
缓存动态组件；避免重复渲染；include/exclude属性；LRU缓存策略；activated/deactivated生命周期钩子；原理：抽象组件，利用VNode缓存

---

### Q2: 请列举Vue3的生命周期钩子，并说明与Vue2的差异。

**【核心解析】**
setup替代beforeCreate和created；onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted；onActivated, onDeactivated；onErrorCaptured；组合式API

---

### Q3: 请比较Vue 2和Vue 3的主要区别，包括响应式实现、生命周期、API和根节点。

**【核心解析】**
响应式：Object.defineProperty vs Proxy；生命周期：选项式 vs 组合式（setup）；API：Options API vs Composition API；根节点：Vue2单根，Vue3多根

---

### Q4: Vue 2和Vue 3中v-if和v-for的优先级区别及调整原因是什么？

**【核心解析】**
Vue2中v-for优先级高于v-if；Vue3中v-if优先级高于v-for；调整原因：避免同时使用时的性能问题，推荐使用计算属性过滤

---

### Q5: Vue中watch和computed的区别是什么？

**【核心解析】**
computed依赖缓存，只有依赖变化才重新计算；watch监听数据变化执行回调；computed用于派生值，watch用于副作用；computed默认深度追踪，watch需配置deep

---

### Q6: Vue 3 setup语法糖中ref和reactive的区别是什么？

**【核心解析】**
ref用于基本类型和对象，返回响应式引用（.value）；reactive只接受对象，返回深度响应式代理；ref在模板中自动解包；reactive不能用于基本类型

---

### Q7: Vue父子组件如何传递参数？

**【核心解析】**
父传子：props；子传父：$emit；v-model双向绑定；provide/inject跨层级；attrs/listeners

---

### Q8: Vue 3中如何进行全局状态管理？

**【核心解析】**
Pinia作为推荐方案；defineStore定义store；state/getters/actions；组合式API风格；与Vuex对比

---

### Q9: 请比较Vue3和Vue2的主要区别，包括响应式原理、API设计、性能等方面。

**【核心解析】**
Vue3使用Proxy替代Object.defineProperty；Composition API替代Options API；更好的TypeScript支持；虚拟DOM优化；Tree-shaking支持；Fragment、Teleport等新特性

---

### Q10: 请解释Vue3中Proxy实现响应式的原理，并说明track、trigger、effect的作用。

**【核心解析】**
Proxy拦截对象操作；track收集依赖（在get中）；trigger触发更新（在set中）；effect是副作用函数；响应式系统核心：依赖收集与派发更新

---

### Q11: Vue2和Vue3的主要区别有哪些？

**【核心解析】**
响应式原理（Object.defineProperty vs Proxy）；Composition API；生命周期变化；TypeScript支持；性能优化

---

### Q12: Vue3与Vue2的响应式原理是什么？各自的优缺点有哪些？

**【核心解析】**
Vue2使用Object.defineProperty递归劫持属性；Vue3使用Proxy代理对象；Vue2无法检测数组和对象新增属性；Vue3支持Map、Set等；Vue3性能更好，支持懒响应式

---

### Q13: 为什么选择Pinia进行状态管理？

**【核心解析】**
Pinia是Vue3官方推荐的状态管理库；支持Composition API；完整的TypeScript支持；模块化设计，无需嵌套；轻量，无mutation概念

---

### Q14: 请详细说明Vue组件间通信的方式，包括props、emit、Pinia等，并解释它们各自的使用场景。

**【核心解析】**
props用于父传子；emit用于子传父；Pinia作为状态管理库用于跨组件通信；provide/inject用于深层组件通信；event bus或mitt用于非父子组件通信

---

### Q15: 请解释Vue中计算属性（computed）的原理。

**【核心解析】**
基于响应式依赖缓存；惰性求值；依赖收集；脏值检测；与watch/methods的区别

---

### Q16: Vue中组件初始化时的初始化工作怎么做？

**【核心解析】**
生命周期钩子（created、mounted）；数据响应式初始化；依赖收集；模板编译；挂载过程

---

### Q17: Vue中的nextTick的作用是什么？其实现原理是怎样的？

**【核心解析】**
nextTick用于在DOM更新后执行回调；原理：异步队列、微任务优先；Vue2使用microtask（Promise）或macrotask（setTimeout）；Vue3使用Promise.then；应用场景：获取更新后的DOM

---

### Q18: Vue3和Vue2的主要区别是什么？

**【核心解析】**
响应式原理（Proxy vs Object.defineProperty）；Composition API vs Options API；TypeScript支持；性能提升（Tree-shaking、虚拟DOM优化）；新特性（Teleport、Suspense等）

---

### Q19: 为什么选择Pinia和LocalStorage进行状态管理？如果LocalStorage超出容量上限怎么办？

**【核心解析】**
Pinia的简洁性和TypeScript支持；LocalStorage的持久化能力；容量限制（5MB）；压缩数据或使用IndexedDB；LRU淘汰策略

---

### Q20: 请用Vue编写一个倒计时组件，接收初始时间作为prop参数。

**【核心解析】**
使用ref/reactive定义状态；setInterval更新；组件卸载时清除定时器；格式化时间显示；考虑性能使用requestAnimationFrame

---

### Q21: 你了解哪些Vue开源的虚拟滚动组件？

**【核心解析】**
vue-virtual-scroller；vue-virtual-scroll-list；recycle-scroller；性能优化；动态高度支持

---

### Q22: Vue的nextTick是什么？有什么作用？如何结合nextTick优化流式渲染？

**【核心解析】**
nextTick在DOM更新后执行回调；用于获取更新后的DOM；流式渲染中分批更新；结合nextTick避免卡顿；微任务实现

---

### Q23: 请手写一个Vue组件：待办事项列表（Todo List）。

**【核心解析】**
使用v-model绑定输入；v-for渲染列表；添加、删除、完成功能；使用计算属性过滤；组件拆分；本地存储

---

### Q24: 请手写一个Vue轮播图组件。

**【核心解析】**
自动播放；手动切换（左右箭头、指示器）；过渡动画；无限循环；响应式；使用setInterval和clearInterval

---

### Q25: 请手写一个虚拟滚动列表组件。

**【核心解析】**
只渲染可视区域内的元素；计算总高度和偏移量；监听滚动事件；使用position: relative和transform；复用DOM节点；处理动态高度

---

### Q26: 请手写一个图片懒加载指令或组件。

**【核心解析】**
使用IntersectionObserver或scroll事件；data-src存储真实地址；加载后替换src；占位图；避免重复加载

---

### Q27: Vue中父子组件如何通信？

**【核心解析】**
父传子：props；子传父：$emit；兄弟通信：事件总线或Vuex/Pinia；provide/inject；$parent/$children；v-model

---

### Q28: Vue2和Vue3的生命周期有哪些区别？

**【核心解析】**
Vue3使用Composition API；beforeCreate和created被setup替代；新增onBeforeMount等；销毁钩子改名

---

### Q29: Vue组件通信的方式有哪些？

**【核心解析】**
props/$emit；provide/inject；事件总线（Vue2）；Vuex/Pinia；$refs；插槽

---

### Q30: Vue路由模式有哪些？有什么区别？

**【核心解析】**
hash模式（#）；history模式（HTML5 History API）；hash兼容性好；history需要服务器配置

---

### Q31: 小程序生命周期与Vue生命周期有什么区别？

**【核心解析】**
小程序：onLoad, onShow, onReady, onHide, onUnload；Vue：created, mounted, updated, destroyed；触发时机不同

---

### Q32: 请解释Vue中的nextTick的作用及实现原理？

**【核心解析】**
nextTick用于在DOM更新后执行回调；原理：利用微任务（Promise.then）或宏任务（setTimeout）异步执行；确保回调在DOM更新完成后触发

---

### Q33: Vue3中ref和reactive有什么区别？

**【核心解析】**
ref用于基本类型和对象，通过.value访问；reactive只接受对象，直接访问；ref底层也是reactive；ref支持模板自动解包

---

### Q34: Pinia中多模块之间如何通信？

**【核心解析】**
通过共享store直接访问其他store的state/actions；使用pinia的$subscribe或watch；通过组件props/events；使用全局事件总线

---

### Q35: Vue2和Vue3的区别有哪些？

**【核心解析】**
响应式原理（Object.defineProperty vs Proxy）；Composition API；生命周期变化；v-model；Fragment；Tree-shaking

---

### Q36: Vue的diff算法是怎样的？

**【核心解析】**
同层比较；双端指针；key优化；patchVnode；更新策略

---

### Q37: 请解释Vue的响应式原理（Vue2和Vue3的区别）。

**【核心解析】**
Vue2：Object.defineProperty递归遍历对象，数组特殊处理；Vue3：Proxy代理对象，懒递归，支持Map/Set；依赖收集与派发更新；Watcher与Dep的关系；响应式系统的局限（如Vue2无法检测属性新增）

---

### Q38: Pinia的作用是什么？它与Vuex相比有哪些优势？

**【核心解析】**
Pinia是Vue3的状态管理库；支持Composition API；完整的TypeScript支持；去除了mutations，更简洁；模块化设计，无需嵌套；Devtools支持

---

### Q39: Vue3中ref和reactive有什么区别？

**【核心解析】**
ref用于基本类型和对象，通过.value访问；reactive只用于对象，直接访问；ref支持模板自动解包；reactive内部基于Proxy；ref适合单个值，reactive适合复杂对象

---

### Q40: Vue中computed和watch有什么区别？

**【核心解析】**
computed是计算属性，有缓存，依赖变化自动更新；watch是侦听器，执行副作用；computed返回新值，watch执行回调；computed默认深度追踪，watch需配置deep；computed用于派生状态，watch用于异步或复杂逻辑

---

### Q41: 请列举Vue 2/3的生命周期钩子，并说明为什么需要设计这些生命周期。

**【核心解析】**
Vue2生命周期：beforeCreate, created, beforeMount, mounted, beforeUpdate, updated, beforeDestroy, destroyed；Vue3新增setup替代beforeCreate和created；设计目的：在特定阶段执行逻辑，如数据初始化、DOM操作、清理副作用；组合式API中的生命周期

---

### Q42: Vue中有哪些常用指令？请举例说明其用法。

**【核心解析】**
v-if/v-else-if/v-else；v-show；v-for；v-bind；v-on；v-model；v-slot；v-html/v-text；v-pre/v-cloak

---

### Q43: Vue中组件之间如何进行数据通信？请列举常见方式。

**【核心解析】**
父传子：props；子传父：$emit；兄弟组件：事件总线（Vue2）或mitt库；跨层级：provide/inject；状态管理：Vuex/Pinia；$refs；$attrs/$listeners

---

### Q44: 请解释Vue中watch的实现原理，包括深度监听和立即执行。

**【核心解析】**
watch基于Vue响应式系统；通过Watcher观察数据变化；deep选项递归遍历对象；immediate选项立即执行回调；新旧值参数；与computed的区别

---

### Q45: Vue2中父子组件如何通信？兄弟组件如何通信？

**【核心解析】**
父子组件通过props和$emit通信；兄弟组件通过事件总线（EventBus）或Vuex通信；也可通过父组件作为中介

---

### Q46: 请解释computed和watch的区别，以及v-show和v-if的区别。

**【核心解析】**
computed有缓存，依赖变化才重新计算；watch监听数据变化执行回调；v-show通过CSS显示隐藏，v-if条件渲染；v-if切换会触发组件生命周期

---

### Q47: 父组件引用子组件，使用v-if控制子组件显示隐藏，子组件的生命周期会如何处理？

**【核心解析】**
v-if为true时子组件创建并挂载，触发created、mounted；v-if为false时子组件销毁，触发beforeDestroy、destroyed；每次切换都会重新创建和销毁

---

### Q48: 子组件如何获取父组件通过v-model传递的值？

**【核心解析】**
v-model默认传递value prop和input事件；子组件通过props接收value，通过$emit('input', newValue)更新；Vue3中v-model使用modelValue和update:modelValue

---

### Q49: 请解释ref和reactive的区别，以及ref底层双向绑定的原理与reactive有何不同？

**【核心解析】**
ref用于基本类型和对象，通过.value访问；reactive用于对象，直接访问；ref底层使用Object.defineProperty或Proxy（Vue3）；reactive使用Proxy；ref对基本类型包装为对象

---

### Q50: 技术选型问题：为什么项目开发使用Vue3而不是React？

**【核心解析】**
Vue3学习曲线平缓，模板语法直观；React更灵活，生态更丰富；Vue3性能提升，Composition API；React Hooks逻辑复用更强

---

### Q51: 请解释Vue3的响应式原理以及Vue的编译渲染过程。

**【核心解析】**
Vue3使用Proxy实现响应式，依赖收集和触发更新；编译渲染：模板编译为render函数，执行生成虚拟DOM，通过diff更新真实DOM

---

### Q52: Vue与React的区别是什么？组件式写法是什么？

**【核心解析】**
Vue模板语法，React JSX；Vue双向绑定，React单向数据流；组件式写法：将UI和逻辑封装为独立组件，提高复用性

---

### Q53: Vue2的响应式有什么缺陷？Vue3为什么要改用Proxy？

**【核心解析】**
Vue2使用Object.defineProperty，无法检测数组索引和对象新增属性；Vue3使用Proxy可以拦截更多操作，性能更好，支持动态属性

---

### Q54: v-if和v-show的区别是什么？

**【核心解析】**
v-if是条件渲染，动态增删DOM元素；v-show是控制display属性切换显示隐藏；v-if有更高的切换开销，v-show有更高的初始渲染开销

---

### Q55: 请详细说明Vue的生命周期钩子函数，包括在哪个钩子中请求数据或操作DOM？

**【核心解析】**
created可请求数据但无法操作DOM；mounted后DOM可用；beforeDestroy清理定时器；动态列表请求推荐在created或mounted；操作DOM在mounted之后

---

### Q56: Pinia与Vuex相比有哪些区别和优势？

**【核心解析】**
Pinia更轻量；完全支持TypeScript；去除了mutations；模块化无需嵌套；DevTools支持更好

---

### Q57: 为什么Vue组件中的data被设计为函数而不是对象？

**【核心解析】**
防止组件复用时的数据污染；函数返回独立对象；每个实例拥有独立数据；对象形式会导致引用共享

---

### Q58: Vue中data的合并是浅拷贝还是深拷贝？

**【核心解析】**
data合并是浅拷贝；对象属性共享引用；需注意修改子对象的影响；可通过深拷贝避免

---

### Q59: Vue组件之间有哪些通信方式？

**【核心解析】**
props/emit；provide/inject；事件总线；Vuex/Pinia；$refs；插槽

---

### Q60: Vue中watch和watchEffect的区别是什么？

**【核心解析】**
watch监听特定数据源；watchEffect自动追踪依赖；watch可获取旧值；watchEffect立即执行；watchEffect无回调

---

### Q61: 请解释Vue3的setup语法糖及其优势。

**【核心解析】**
setup在组件创建前执行；组合式API；无需return；更简洁；更好的TypeScript支持

---

### Q62: 请解释Vue的响应式原理，以及Vue2和Vue3在实现上的差异。

**【核心解析】**
Vue2 Object.defineProperty（递归遍历、数组监听限制）；Vue3 Proxy（懒响应、支持Map/Set）；依赖收集与派发更新（Dep、Watcher、effect）；响应式数据变化后的视图更新流程

---

### Q63: 请比较Vue中v-if和v-show的区别，以及v-if与v-for的优先级。

**【核心解析】**
v-if条件渲染（销毁/重建）；v-show切换display；性能差异（频繁切换用v-show）；v-if与v-for同时使用的优先级（Vue2中v-for更高，Vue3中v-if更高）；推荐避免同时使用

---

### Q64: 请解释Vue的生命周期钩子，特别是created和mounted的区别。

**【核心解析】**
生命周期阶段（创建、挂载、更新、销毁）；created（实例创建完成，未挂载DOM，可访问data）；mounted（挂载完成，可操作DOM）；异步请求放置位置；Vue3 Composition API中的生命周期

---

### Q65: 请解释Vue的Diff算法及其优化策略。

**【核心解析】**
同层比较策略；双端比较算法（头头、尾尾、头尾、尾头）；key的作用（复用节点、减少移动）；静态标记（Vue3 patchFlag）；与React Diff的对比

---

### Q66: 请比较Vue2和Vue3的主要差异。

**【核心解析】**
响应式原理（Object.defineProperty vs Proxy）；API风格（Options API vs Composition API）；生命周期变化；Fragment、Teleport、Suspense；TypeScript支持；性能优化（Tree-shaking、静态提升）

---

### Q67: 请解释Vue3的响应式原理，与Vue2相比有哪些改进？

**【核心解析】**
Vue2使用Object.defineProperty递归劫持；Vue3使用Proxy代理对象；Proxy可监听数组索引和新增属性；性能提升且支持更多数据结构；依赖收集与触发更新的机制

---

### Q68: Vue2和Vue3有哪些主要区别？

**【核心解析】**
响应式原理：Vue2用Object.defineProperty，Vue3用Proxy；API风格：Options API vs Composition API；生命周期变化；支持多个根节点；性能提升；TypeScript支持更好

---

### Q69: Vue组件之间有哪些通信方式？

**【核心解析】**
父子通信：props/emit、$parent/$children、ref；兄弟通信：事件总线（Vue2）、provide/inject；跨层级：Vuex/Pinia、provide/inject、event bus

---

### Q70: Pinia和Vuex有什么区别？为什么用Pinia？

**【核心解析】**
Pinia更轻量，完全支持TypeScript；没有mutation，直接修改state；支持多个store；更好的模块化；Vuex有mutation和action，Pinia只有action；Pinia支持组合式API

---

### Q71: Vue中v-for的key有什么作用？

**【核心解析】**
key用于标识节点，帮助Vue高效更新虚拟DOM；避免就地复用，提高diff性能；使用唯一id，避免使用index

---

### Q72: keep-alive用过吗？它的作用是什么？

**【核心解析】**
keep-alive是Vue内置组件，用于缓存组件实例；避免重复渲染，保持状态；配合include/exclude控制缓存；有activated和deactivated生命周期

---

### Q73: Vue的生命周期有哪些？如何监听页面销毁？

**【核心解析】**
Vue2：beforeCreate、created、beforeMount、mounted、beforeUpdate、updated、beforeDestroy、destroyed；Vue3：setup替代beforeCreate和created，beforeUnmount/unmounted替代beforeDestroy/destroyed；监听销毁：beforeDestroy/unmounted钩子

---

### Q74: Vue常用的组合式函数（hooks）有哪些？

**【核心解析】**
useStore（Pinia）、useRouter、useRoute、useSlots、useAttrs、useCssModule；自定义hooks封装逻辑

---

### Q75: Vue的全局路由守卫有哪些？

**【核心解析】**
beforeEach、beforeResolve、afterEach；用于权限控制、路由跳转拦截

---

### Q76: Vue中组件之间有哪些通信方式？

**【核心解析】**
props/emit；provide/inject；事件总线（mitt）；Vuex/Pinia；$refs；slot；attrs

---

### Q77: Pinia和Vuex有什么区别？

**【核心解析】**
Pinia基于Composition API；Vuex基于Options API；TypeScript支持；Pinia无mutation；模块化方式；体积更小

---

### Q78: Vue3中每个项目都有index.html、App.vue、main.js，它们的作用是什么？

**【核心解析】**
index.html入口HTML；App.vue根组件；main.js入口JS（创建应用实例）；挂载到#app；Vite/Webpack配置

---

### Q79: Vue组件传值的方法有哪些？

**【核心解析】**
props/$emit；provide/inject；$attrs/$listeners；Vuex/Pinia状态管理；event bus；slot插槽

---

### Q80: Vue中watch和computed的区别是什么？

**【核心解析】**
computed有缓存，依赖变化才重新计算；watch监听数据变化执行回调；computed用于派生状态，watch用于异步或开销大的操作；computed默认深度依赖，watch可配置deep

---

### Q81: 请解释Vue的响应式原理（Vue2和Vue3的区别）。

**【核心解析】**
Vue2使用Object.defineProperty递归劫持；Vue3使用Proxy代理整个对象；Proxy支持数组和新增属性；Vue3通过Reflect操作；依赖收集与触发更新

---

### Q82: Vue2中组件通信的方式有哪些？

**【核心解析】**
props/$emit；事件总线（EventBus）；provide/inject；$parent/$children；Vuex状态管理

---

### Q83: Vue Router和React Router的hash模式和history模式有什么区别？应用场景是什么？

**【核心解析】**
hash模式使用URL#后的hash值，不会发送到服务器；history模式使用HTML5 History API，URL美观；hash模式兼容性好，history模式需要后端支持；history模式刷新404需配置Nginx等

---

### Q84: Composition API 是什么？有什么作用？请手写一个示例。

**【核心解析】**
基于函数的 API；更好的逻辑复用（替代 mixins）；更灵活的组织代码；响应式系统（ref、reactive）；示例：使用 setup 函数、ref、computed、watch

---

### Q85: Vue和React的响应式原理及优缺点？

**【核心解析】**
Vue：Proxy劫持/依赖收集；React：setState/不可变数据；Vue自动追踪；React需手动优化（memo）；Vue响应式更精细；React更灵活

---

### Q86: Proxy相对Object.defineProperty的优点是什么？Proxy的局限性有哪些？

**【核心解析】**
Proxy可监听对象新增/删除属性；数组索引/长度变化；无需递归（惰性代理）；局限性：兼容性（IE不支持）、性能开销、无法代理原始值

---

### Q87: Vue3写了多久？Vue2和Vue3的区别？Vue3怎么变快？

**【核心解析】**
Vue3新特性：Composition API、Proxy响应式、Tree-shaking、Fragments、Teleport；性能提升：更小的包体积、更快的虚拟DOM、编译优化（静态提升、补丁标记）

---

### Q88: Vue2和Vue3的区别？watch和watchEffect区别？mixin？Vue3内置新标签？Vue3怎么获取未声明的props？

**【核心解析】**
Vue3 Composition API替代Options API；watch监听特定数据，watchEffect自动追踪依赖；mixin合并冲突；内置标签：Teleport、Suspense、Fragment；获取未声明props：useAttrs()

---

### Q89: Vue的响应式原理是什么？

**【核心解析】**
Vue2使用Object.defineProperty递归劫持属性；Vue3使用Proxy代理对象；依赖收集（getter）和派发更新（setter）；数组和新增属性的处理差异；异步更新队列

---

### Q90: Vue2能兼容到IE几？Vue2和Vue3写法有哪些差别？

**【核心解析】**
Vue2兼容IE9+（需polyfill）；Vue3不兼容IE；差别：选项式vs组合式API；响应式原理不同；生命周期变化；v-model语法变化；Teleport/Suspense等新特性

---

### Q91: Vue3中ref和reactive的区别是什么？

**【核心解析】**
ref用于基本类型和对象，返回响应式引用（.value）；reactive仅用于对象，返回深层响应式代理；ref在模板中自动解包，reactive直接访问；ref适合单个值，reactive适合复杂对象；ref可替换整个对象，reactive不可直接替换

---

### Q92: 如何划分Vue组件？依据是什么？如何看待主流组件库的原子化封装？

**【核心解析】**
划分依据（单一职责、复用性、业务模块）；原子化设计（基础组件、组合组件）；主流组件库（Element Plus、Ant Design）的封装思想（通用性、可定制性）

---

### Q93: Vue组件间有哪些通信方式？请列举并说明适用场景。

**【核心解析】**
props/emit（父子）；provide/inject（跨层级）；Pinia（全局状态）；v-model（双向绑定）；slot（插槽）；event bus（mitt）；broadcast channel（跨标签页）

---

### Q94: 如果让你设计Vue3这样的框架，需要考虑哪些核心要素？

**【核心解析】**
响应式系统（Proxy）；虚拟DOM与Diff算法；组件化；编译优化（静态提升、事件缓存）；TypeScript支持；性能与体积

---

### Q95: 请解释Vue3的Diff算法原理及其优化点。

**【核心解析】**
同层比较、双端指针；key的作用；静态节点标记；patchFlag；与Vue2 Diff的区别

---

### Q96: 请分类描述Vue的生命周期钩子函数。

**【核心解析】**
创建阶段（beforeCreate, created）；挂载阶段（beforeMount, mounted）；更新阶段（beforeUpdate, updated）；销毁阶段（beforeDestroy, destroyed）；Vue3新增（setup, onBeforeMount等）

---

### Q97: 在Vue中，异步请求应该放在哪个生命周期钩子中？为什么？

**【核心解析】**
通常放在created或mounted中；created中请求可更早触发但无法访问DOM；mounted中可操作DOM；推荐使用mounted确保组件已渲染

---

### Q98: 请比较Vue中computed和watch的区别。

**【核心解析】**
computed是计算属性，基于依赖缓存，用于模板中；watch是侦听器，用于执行异步或开销较大的操作；computed默认深度依赖，watch可配置deep；computed返回新值，watch执行回调

---

### Q99: 请列举Vue中组件间通信的方式。

**【核心解析】**
props/$emit；事件总线（EventBus）；provide/inject；Vuex/Pinia；$refs；$attrs/$listeners；slot

---

### Q100: 请解释Vue的响应式原理，包括数据劫持和发布订阅模式。

**【核心解析】**
Vue2使用Object.defineProperty；Vue3使用Proxy；依赖收集（Dep和Watcher）；发布订阅模式；数组的响应式处理；Vue.set/this.$set

---

