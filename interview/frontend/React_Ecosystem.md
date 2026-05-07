# React_Ecosystem 面试专题手册

> 💡 本章节共收录 2025 道面试真题，建议每天复习 10-20 题。

---
### Q1: 请解释useMemo和React.memo的用法和区别，以及React.memo的缓存刷新机制如何自定义比较函数？

**【核心解析】**
useMemo用于缓存计算结果；React.memo用于缓存组件渲染；React.memo默认浅比较props；自定义比较函数作为第二个参数；缓存刷新条件：props变化或引用变化

---

### Q2: React Fiber架构如何实现可中断、可恢复、可插队的异步渲染？

**【核心解析】**
Fiber节点作为工作单元；双缓冲树（current/workInProgress）；时间切片与requestIdleCallback；任务优先级调度；中断与恢复机制

---

### Q3: useEffect和useRef的用法是什么？

**【核心解析】**
useEffect处理副作用（数据请求、订阅、DOM操作）；依赖数组控制执行时机；清理函数；useRef存储可变值或引用DOM；不触发重新渲染

---

### Q4: 请解释React中的事件机制，包括事件委托、合成事件，以及React 16之后事件委托的变化。

**【核心解析】**
事件委托到document（React 16）或root（React 17+）；合成事件对象（SyntheticEvent）跨浏览器兼容；事件池（React 16）及废弃（React 17）；性能优化

---

### Q5: 请解释React的Diff算法原理。

**【核心解析】**
同层比较；key属性优化；类型不同则重建；组件更新策略；Fiber架构下的可中断协调

---

### Q6: 介绍React Hooks：useMemo、useCallback、useEffect、useLayoutEffect。

**【核心解析】**
useMemo缓存计算结果；useCallback缓存函数引用；useEffect处理副作用；useLayoutEffect同步执行DOM变更；依赖数组的作用

---

### Q7: 如何用React Hooks模拟生命周期？

**【核心解析】**
useEffect空依赖模拟componentDidMount；useEffect返回清理函数模拟componentWillUnmount；useEffect依赖更新模拟componentDidUpdate；useLayoutEffect模拟componentDidMount同步

---

### Q8: 请解释React中虚拟DOM的Diff算法底层原理，以及它是如何优化渲染性能的。

**【核心解析】**
同层比较；key属性优化；三种操作：插入、移动、删除；基于Fiber架构的协调；减少真实DOM操作；时间复杂度O(n)

---

### Q9: 请比较React和Vue的异同。

**【核心解析】**
数据绑定（单向vs双向）；虚拟DOM实现；组件化方式；模板语法vs JSX；状态管理；生态圈

---

### Q10: 项目中的乐观更新是如何实现的？是否了解staleTime和gcTime配置？

**【核心解析】**
乐观更新：先更新UI再发请求，失败回滚；staleTime（数据新鲜期，不重新请求）；gcTime（缓存垃圾回收时间）；使用React Query或SWR实现

---

### Q11: React Hooks中useEffect和useLayoutEffect的区别是什么？

**【核心解析】**
useEffect异步执行，在浏览器绘制后；useLayoutEffect同步执行，在DOM更新后绘制前；useLayoutEffect适合读取布局或同步操作；避免阻塞视觉更新

---

### Q12: 你的组件内部是如何写的？如果要实现一个变颜色的组件操作，你怎么去实现？

**【核心解析】**
组件内部：状态管理、事件处理、样式绑定；变颜色：使用state控制颜色值；通过props传递颜色；使用CSS变量或内联样式；考虑性能优化（memo）

---

### Q13: React的useState为什么用数组解构而不是对象解构？

**【核心解析】**
数组解构更灵活，可以自定义变量名；对象解构需要知道属性名；数组解构代码更简洁；React内部返回数组以保持顺序

---

### Q14: React中useEffect的清理机制是什么？

**【核心解析】**
useEffect返回一个清理函数；组件卸载时执行清理；依赖变化时先清理再执行；常见清理：取消订阅、清除定时器、移除事件监听

---

### Q15: 请解释React Fiber架构的工作原理及其如何提升渲染性能。

**【核心解析】**
Fiber节点数据结构；双缓冲树（current/workInProgress）；时间切片与任务优先级；可中断恢复的协调过程；增量渲染改善用户体验

---

### Q16: 请解释React中的响应式原理，包括state、effect、context等概念。

**【核心解析】**
state是组件内部状态，更新触发重新渲染；useEffect用于处理副作用，依赖数组控制执行；Context提供跨组件数据传递，避免props drilling；响应式基于虚拟DOM和Diff算法

---

### Q17: 请说明你在项目中是否使用过Redux，并解释Redux的特别之处。

**【核心解析】**
Redux是状态管理库，核心概念：单一store、action、reducer；纯函数reducer保证可预测性；中间件（如redux-thunk、redux-saga）处理异步；时间旅行调试；与React结合通过connect或hooks

---

### Q18: 请解释什么是高阶组件（HOC），它与普通组件有什么区别？

**【核心解析】**
高阶组件是参数为组件返回新组件的函数；用于逻辑复用（如权限控制、日志）；与普通组件区别：HOC是函数，普通组件是函数或类；HOC不修改原组件，通过组合增强功能；注意静态方法丢失、ref传递等问题

---

### Q19: 组件封装过程中你做了哪些沉淀？

**【核心解析】**
组件设计原则（单一职责、可复用）；Props与类型定义；状态管理策略；样式隔离方案；文档与单元测试

---

### Q20: 复杂表单的状态管理与校验如何实现？

**【核心解析】**
受控组件与状态提升；表单库（Formik、React Hook Form）；校验规则定义；异步校验；错误展示与反馈

---

### Q21: 请解释React Fiber架构的工作原理，以及它如何提升渲染性能？

**【核心解析】**
Fiber节点的数据结构；双缓冲树（current/workInProgress）；时间切片与任务优先级；可中断恢复的协调过程；增量渲染对用户体验的改善

---

### Q22: 请详细解释React Hooks（如useState、useEffect、useCallback、useMemo）的实现原理和使用规则。

**【核心解析】**
useState：链表结构、闭包存储状态；useEffect：执行时机、清理机制、依赖数组；useCallback与useMemo：缓存函数和值；Hooks规则：不能在条件语句中使用，保证调用顺序一致

---

### Q23: 请对比React.memo、useMemo和useCallback的使用场景和区别。

**【核心解析】**
React.memo：组件级浅比较优化；useMemo：缓存计算结果；useCallback：缓存函数引用；三者关系与配合使用；性能优化注意事项

---

### Q24: 请解释React Concurrent Mode的原理和优势，以及Suspense和useTransition的应用。

**【核心解析】**
Concurrent Mode：可中断渲染、优先级调度；Suspense：数据加载与代码分割的声明式方案；useTransition：标记非紧急更新；自动批处理（Automatic Batching）

---

### Q25: 请对比Redux和Zustand在状态管理上的异同，并说明何时使用全局状态管理。

**【核心解析】**
Redux：单一store、reducer、中间件；Zustand：轻量、基于hooks、无样板代码；Context API的性能问题；服务端状态管理（React Query/SWR）的适用场景

---

### Q26: 请解释Next.js中SSR、SSG、ISR三种渲染方式的区别和适用场景。

**【核心解析】**
SSR：服务端渲染，动态内容；SSG：静态生成，构建时生成；ISR：增量静态生成，按需重新验证；性能与SEO的权衡

---

### Q27: 请讲解Vue/React的Diff算法原理及优化策略。

**【核心解析】**
虚拟DOM的概念；Diff算法的核心：同层比较、key的作用；React的Fiber架构与Diff；Vue的双端比较算法；优化：避免跨层级移动、使用唯一key

---

### Q28: React受控组件和非受控组件的区别及适用场景是什么？

**【核心解析】**
受控组件由React state控制值；非受控组件使用ref获取DOM值；适用场景：表单验证、实时反馈用受控；简单表单或集成非React代码用非受控

---

### Q29: 从代码复用角度，自定义Hook和工具函数有什么区别？为什么需要自定义Hook而不是封装成工具函数？

**【核心解析】**
Hook可访问React状态和生命周期；工具函数纯逻辑；Hook可组合其他Hook；工具函数无副作用；Hook遵循规则（如调用顺序）

---

### Q30: useEffect和useLayoutEffect的区别是什么？

**【核心解析】**
useEffect异步执行，不阻塞渲染；useLayoutEffect同步执行，在DOM更新后；避免使用useLayoutEffect导致性能问题

---

### Q31: Zustand是什么？与Redux相比有哪些区别？

**【核心解析】**
Zustand轻量状态管理；基于hooks；无需Provider；Redux需要reducer和action；Zustand更简洁

---

### Q32: Zustand的persist中间件如何实现持久化？

**【核心解析】**
persist中间件将状态存储到localStorage等；配置storage和partialize；版本控制；迁移函数

---

### Q33: 请比较React和Vue的状态更新原理？

**【核心解析】**
React使用不可变数据，通过setState触发re-render；Vue使用响应式数据，通过Proxy拦截getter/setter自动追踪依赖；React需要手动优化（如useMemo），Vue自动追踪；React采用虚拟DOM diff，Vue采用模板编译优化

---

### Q34: 请解释React中受控组件和非受控组件的概念、区别及适用场景。

**【核心解析】**
受控组件由React state控制表单值；非受控组件使用ref获取DOM值；适用场景：受控组件适合需要实时校验或联动，非受控组件适合简单表单或第三方库集成；编辑器组件通常设计为受控组件；用户期望编辑器组件提供受控和非受控两种模式

---

### Q35: React组件间有哪些通信方式？

**【核心解析】**
父传子通过props；子传父通过回调函数；兄弟组件通过共同父组件提升状态；跨层级使用Context API或状态管理库（如Redux、Zustand）；发布订阅模式

---

### Q36: 自己实现的组件与开源社区成熟的组件相比，有什么区别？

**【核心解析】**
成熟组件经过大量测试和优化，兼容性好；自定义组件更灵活但可能缺乏边界处理；性能差异；维护成本；可访问性（a11y）支持

---

### Q37: React状态管理有哪些方案？为什么选择Zustand而不是Context API或Redux？

**【核心解析】**
方案：Context API、Redux、Zustand、MobX、Recoil；Zustand优点：轻量、无Provider、基于hooks、简单API；Context API缺点：性能问题（重渲染）、不适合高频更新；Redux缺点：样板代码多、学习曲线陡；Zustand底层使用发布订阅模式

---

### Q38: 函数组件和类组件有什么区别？

**【核心解析】**
函数组件无状态（Hooks前）与类组件有状态；生命周期方法 vs Hooks（useEffect等）；this绑定问题；函数组件更简洁、易于测试；性能差异（函数组件更轻量）

---

### Q39: 请解释React的渲染机制，包括核心组件（如Fiber、虚拟DOM）的作用。

**【核心解析】**
虚拟DOM的概念与Diff算法；Fiber架构：可中断的协调、任务优先级、增量渲染；渲染阶段（Render）与提交阶段（Commit）；React核心组件：ReactDOM、Reconciler、Scheduler

---

### Q40: useEffect和useLayoutEffect有什么区别？请说明它们与渲染时机的关系。

**【核心解析】**
useEffect：异步执行，在浏览器完成布局和绘制后触发；useLayoutEffect：同步执行，在DOM更新后、浏览器绘制前触发；useLayoutEffect会阻塞渲染，适用于需要同步读取布局的场景（如测量DOM）；useEffect适合副作用操作

---

### Q41: React中受控组件和非受控组件的区别是什么？

**【核心解析】**
受控组件由React state控制值，通过onChange更新；非受控组件使用ref获取DOM值；受控组件更可预测；非受控组件性能稍好；推荐使用受控组件

---

### Q42: React有哪些常用的钩子函数（Hooks）？

**【核心解析】**
useState；useEffect；useContext；useReducer；useCallback；useMemo；useRef；自定义Hook

---

### Q43: 什么情况下使用useCallback？

**【核心解析】**
当函数作为props传递给子组件时，避免子组件不必要的重渲染；配合React.memo使用；依赖项不变时返回相同引用；性能优化场景

---

### Q44: 什么是高阶组件（HOC）？主要用在哪些场景？

**【核心解析】**
HOC是接收组件返回新组件的函数；用于逻辑复用；场景：权限控制、日志记录、数据获取、样式注入；注意静态方法复制、ref传递

---

### Q45: 请解释React的单向数据流及其与组件渲染的关系。

**【核心解析】**
数据从父组件流向子组件；状态提升；props不可变；渲染由状态变化触发；函数组件与hooks；与双向绑定的区别

---

### Q46: React中父组件如何触发子组件重新渲染？有哪些优化手段？

**【核心解析】**
父组件状态更新导致重新渲染，子组件默认也会重新渲染；优化：React.memo；useMemo；useCallback；shouldComponentUpdate（类组件）；PureComponent

---

### Q47: 请解释MobX的工作原理及其在React工作流中的应用。

**【核心解析】**
MobX基于可观察状态（Observable）；动作（Action）修改状态；计算值（Computed）；反应（Reaction）如autorun、reaction；在React中通过observer包裹组件实现响应式更新；与Redux/Zustand的对比

---

### Q48: 请列举常用的React Hooks，并解释useState、useRef、useReducer、useEffect的实现原理。

**【核心解析】**
useState：状态存储与更新；useRef：可变引用；useReducer：复杂状态逻辑；useEffect：副作用处理；useContext；useMemo；useCallback；实现原理：链表存储hook状态，Fiber节点关联

---

### Q49: 请解释React中useCallback的作用和原理。

**【核心解析】**
useCallback返回记忆化的回调函数；依赖数组控制更新；用于优化子组件渲染；与useMemo的区别；原理：缓存函数引用

---

### Q50: 请比较React和Vue的主要区别。

**【核心解析】**
React使用JSX、单向数据流、虚拟DOM Diff；Vue使用模板、双向绑定、响应式系统；React更灵活，Vue更易上手；React社区生态更丰富

---

### Q51: 请解释React Fiber架构中Reconciler如何遍历Fiber树？为什么采用这种遍历方式？

**【核心解析】**
Fiber树采用先序遍历（深度优先）；可中断的异步遍历；双缓冲树（current/workInProgress）；便于实现时间切片和优先级调度；与DOM树的关系

---

### Q52: React中state变化到组件渲染的过程是怎样的？

**【核心解析】**
setState触发更新；调度阶段（优先级）；协调阶段（diff）；提交阶段（DOM更新）；Fiber架构下的双缓冲机制

---

### Q53: React中虚拟DOM和Fiber树的区别是什么？

**【核心解析】**
虚拟DOM是JS对象树；Fiber是链表结构；Fiber包含更多元信息（优先级、状态等）；Fiber支持异步可中断；虚拟DOM用于diff

---

### Q54: React中useEffect和useLayoutEffect的区别是什么？

**【核心解析】**
执行时机不同（useEffect在渲染后异步执行，useLayoutEffect在DOM更新后同步执行）；useLayoutEffect会阻塞浏览器绘制；适用于不同场景（副作用vs测量DOM）；与Fiber提交阶段的关系

---

### Q55: React中useMemo、memo和useCallback三者的区别是什么？

**【核心解析】**
useMemo缓存计算结果；memo是组件级优化（浅比较props）；useCallback缓存函数引用；使用场景和性能影响；与React.memo配合使用

---

### Q56: React中diff算法的底层原理是什么？它是如何比较新旧两个树的？

**【核心解析】**
基于同层比较和key优化；三种策略（tree diff、component diff、element diff）；Fiber架构下的双缓冲diff；时间复杂度O(n)；与虚拟DOM的关系

---

### Q57: React为什么使用Message Channel进行调度而不是setTimeout？

**【核心解析】**
Message Channel的延迟更稳定（约0ms）；setTimeout有最小延迟（4ms）；Message Channel在宏任务中执行；与Fiber时间切片的关系；React调度器的实现

---

### Q58: React中状态管理库（如Redux、Zustand）的原理是什么？

**【核心解析】**
单一数据源；不可变数据；发布订阅模式；中间件机制；与React上下文和Hooks的结合

---

### Q59: Next.js中SSR和SSG的区别是什么？为什么使用Next.js？

**【核心解析】**
SSR在服务端渲染每次请求；SSG在构建时生成静态页面；Next.js提供混合渲染；SEO和性能优势；数据获取方式（getServerSideProps vs getStaticProps）

---

### Q60: 请解释CSR、SSR、SSG分别是什么，核心区别、优缺点和适用场景，以及SSR和CSR相比哪个对企业的维护成本更高？

**【核心解析】**
CSR（客户端渲染）；SSR（服务端渲染）；SSG（静态站点生成）；核心区别；优缺点；适用场景；维护成本比较

---

### Q61: 请解释虚拟DOM的优缺点。

**【核心解析】**
优点：减少真实DOM操作；跨平台；批量更新；缺点：额外内存开销；首次渲染不一定更快；diff算法复杂度

---

### Q62: 请解释React Hooks的原理，包括useState和useEffect。

**【核心解析】**
Hooks依赖链表；useState返回状态和更新函数；useEffect处理副作用；依赖数组控制执行；闭包陷阱

---

### Q63: React中的副作用是什么？如何处理？

**【核心解析】**
副作用指数据获取、订阅、DOM操作；useEffect处理；清理函数；依赖管理；与生命周期对应

---

### Q64: React中useMemo和useCallback的区别、用法及使用场景。

**【核心解析】**
useMemo缓存计算结果；useCallback缓存函数引用；避免子组件不必要渲染；依赖数组；性能优化

---

### Q65: 请解释React中的单向数据流。

**【核心解析】**
数据从父组件流向子组件；通过props传递；状态提升；不可变性；便于调试

---

### Q66: React中class类组件和函数组件有什么区别？

**【核心解析】**
类组件有生命周期和this；函数组件更简洁；Hooks使函数组件拥有状态；性能差异；TS支持

---

### Q67: 请解释虚拟DOM（Virtual DOM）的工作原理及其优势。

**【核心解析】**
虚拟DOM本质（JS对象表示真实DOM）；创建与更新流程；Diff算法（同层比较、key优化）；优势（批量更新、跨平台、减少真实DOM操作）；与直接操作DOM的性能对比

---

### Q68: 请解释React Fiber架构的工作原理及其如何提升渲染性能。

**【核心解析】**
Fiber节点作为最小工作单元；双缓冲树（current与workInProgress）；时间切片与任务优先级调度；可中断恢复的协调过程；增量渲染与异步渲染

---

### Q69: 请解释React Fiber架构的工作原理及其如何提升渲染性能。

**【核心解析】**
Fiber节点数据结构；双缓冲树（current/workInProgress）；时间切片与任务优先级；可中断恢复的协调过程；增量渲染

---

### Q70: 为什么有些团队从React迁移到Vue？请分析两者的优缺点。

**【核心解析】**
学习曲线差异；模板语法vs JSX；响应式原理（Proxy vs 虚拟DOM）；生态系统（状态管理、路由）；性能对比；团队技术栈偏好

---

### Q71: 请解释React的生命周期方法，包括类组件和函数组件中的对应概念。

**【核心解析】**
类组件生命周期（挂载、更新、卸载）；函数组件使用useEffect模拟生命周期；useEffect依赖数组控制执行时机；useLayoutEffect与useEffect区别

---

### Q72: React Native跨端重构的核心重难点及解决方案是什么？包括两端适配、样式兼容、技术栈重构细节。

**【核心解析】**
平台差异（iOS/Android）；样式兼容（Flexbox、像素单位、平台特定样式）；导航系统；原生模块桥接；状态管理迁移；性能优化（列表、动画）

---

### Q73: React 的 Fiber 架构解决了什么问题？

**【核心解析】**
可中断的协调过程；时间切片（Time Slicing）；优先级调度；增量渲染；解决同步递归导致的卡顿

---

### Q74: 子组件如何暴露内部方法给父组件执行？

**【核心解析】**
React：useImperativeHandle + forwardRef；Vue：defineExpose；回调函数传递；事件总线（不推荐）

---

### Q75: ref和reactive的区别是什么？

**【核心解析】**
ref用于基本类型和对象，通过.value访问；reactive仅用于对象，直接访问；ref在模板中自动解包；reactive内部使用Proxy；ref适合单个值，reactive适合复杂对象

---

### Q76: Vue和React的使用场景有何不同？

**【核心解析】**
Vue：上手简单，适合中小型项目、快速开发、模板语法；React：灵活，适合大型项目、复杂交互、需要精细控制；Vue有双向绑定，React单向数据流；Vue生态官方，React社区丰富

---

### Q77: React中不同组件怎么通信？

**【核心解析】**
父传子：props；子传父：回调函数；兄弟组件：状态提升到共同父组件；跨层级：Context API、Redux/Zustand等状态管理库；ref通信：useImperativeHandle

---

### Q78: 用过的React Hook有哪些？

**【核心解析】**
useState：管理状态；useEffect：副作用；useRef：引用DOM或保存可变值；useContext：消费Context；useMemo：缓存计算结果；useCallback：缓存函数；useReducer：复杂状态逻辑

---

### Q79: 你在项目中有参与或设计过项目级的状态管理器设计方案吗？若父组件下三个子组件A、B、C依赖同一公共状态管理器，A组件状态变化却导致B、C和父组件一起重渲染，原因是什么？

**【核心解析】**
状态管理器设计原则（单一数据源、不可变数据）；React重渲染机制（状态变化触发组件树更新）；Context或Redux的订阅机制；优化方案（React.memo、useSelector、拆分Context）

---

### Q80: Next.js SSR是怎么做的？服务端组件和客户端组件的区别是什么？水合是什么？

**【核心解析】**
SSR流程：服务端渲染HTML，客户端水合；服务端组件：只在服务端运行，减少客户端JS体积；客户端组件：交互性强，需水合；水合：客户端接管静态HTML，绑定事件和状态

---

### Q81: React与Vue的主要区别是什么？

**【核心解析】**
React：不可变数据、JSX、手动更新、全量Diff；Vue：响应式代理、模板、自动更新、精准追踪更新；React更灵活，Vue更易用；生态差异

---

### Q82: 封装一个通用的AI Chat组件需要考虑哪些Props和Slots？

**【核心解析】**
Props：消息列表、加载状态、发送回调、占位符、主题配置；Slots：消息模板、输入框扩展、空状态、加载动画；考虑可扩展性和样式定制

---

### Q83: React的useEffect第二个参数三种情况分别代表什么？

**【核心解析】**
不传：每次渲染后执行，相当于componentDidMount和componentDidUpdate；空数组[]：仅在挂载时执行，相当于componentDidMount；依赖数组[dep]：依赖变化时执行，相当于componentDidUpdate；清理函数在卸载或重新执行前调用

---

### Q84: React.Memo和useMemo分别代表什么？

**【核心解析】**
React.memo是高阶组件，用于函数组件，通过浅比较props避免不必要的渲染；useMemo是Hook，用于缓存计算结果，依赖不变时返回缓存值；React.memo优化组件渲染，useMemo优化计算开销；两者常结合使用

---

### Q85: useMemo用在哪些场景？改变父组件的state，子组件会跟着更新吗？props变了子组件就会更新吗？有什么方法可以让子组件不更新？

**【核心解析】**
useMemo用于缓存计算结果，避免重复计算；父组件state改变，子组件默认会重新渲染（除非使用React.memo）；props变化导致子组件更新；防止子组件更新：React.memo、useMemo、useCallback、shouldComponentUpdate（类组件）

---

### Q86: 请解释React diff算法的理解、时间复杂度及原因，是深度优先还是广度优先？

**【核心解析】**
React diff基于三个策略：类型不同则重建、key属性优化、同层比较；时间复杂度O(n)，因为只比较同层节点；深度优先遍历（递归）；通过key减少移动操作；Fiber架构实现可中断的diff

---

### Q87: useRef和useState的区别是什么？

**【核心解析】**
useRef返回可变对象，.current属性，改变不触发重新渲染；useState返回状态和更新函数，改变触发重新渲染；useRef用于保存DOM引用或可变值，useState用于UI状态；useRef在渲染间保持引用不变

---

### Q88: 请解释SSR（服务端渲染）和SSG（静态站点生成）的区别，以及SSR为什么能减少渲染时间？

**【核心解析】**
SSR在服务器生成HTML，SSG在构建时生成静态HTML；SSR减少首屏白屏时间，因为HTML直接返回；SSR缺点：服务器压力大、TTFB较长；SSG适合内容不频繁变化的页面

---

### Q89: 请介绍Prisma及其如何解决SQL注入问题。

**【核心解析】**
Prisma是ORM工具，提供类型安全的数据访问；使用参数化查询防止SQL注入；预编译语句；自动转义用户输入

---

### Q90: 请比较Vue和React的主要区别。

**【核心解析】**
模板语法 vs JSX；响应式原理（数据劫持 vs 不可变数据）；组件通信；状态管理；生命周期；性能优化（shouldComponentUpdate vs computed）

---

### Q91: 请说明React 17、18、19之间的主要区别。

**【核心解析】**
React 17：无新特性，过渡版本；React 18：并发模式、自动批处理、Suspense改进、useId；React 19：Actions、useOptimistic、Server Components稳定

---

### Q92: 请解释SSR的缺点以及如何解决。

**【核心解析】**
服务器负载高；TTFB较长；交互响应慢（需要客户端水合）；解决方案：流式SSR、部分SSR、静态化、CDN缓存

---

### Q93: React Fiber架构解决了什么问题？

**【核心解析】**
React 15的递归协调导致主线程阻塞；Fiber架构的可中断、可恢复特性；时间切片与优先级调度；增量渲染提升用户体验；双缓冲树（current/workInProgress）

---

### Q94: 在Agent这种复杂状态的应用中，你会选择哪种状态管理方案？

**【核心解析】**
状态管理选型考虑因素（状态复杂度、团队熟悉度、性能）；对比Redux、Zustand、MobX等方案；推荐Zustand的轻量、简洁、无Provider；结合React Query处理异步状态；状态分层设计

---

### Q95: 什么是虚拟DOM？它解决了什么问题？

**【核心解析】**
虚拟DOM是真实DOM的JavaScript对象表示；减少直接操作DOM带来的性能开销；跨平台能力（React Native）；diff算法与最小化更新；与直接操作DOM的对比

---

### Q96: SSR和ISR的区别是什么？

**【核心解析】**
SSR（服务端渲染）：每次请求生成HTML；ISR（增量静态生成）：静态生成+按需重新验证；ISR结合SSG与SSR优点；适用场景（内容更新频繁但非实时）；Next.js中的实现

---

### Q97: 讲一下你对React的理解，以及React和Vue的区别。

**【核心解析】**
React是UI库，Vue是渐进式框架；React单向数据流，Vue双向绑定；React使用JSX，Vue使用模板；React Fiber架构，Vue响应式系统；生态差异

---

### Q98: React中的Component和Element有什么区别？

**【核心解析】**
Component是类或函数组件；Element是描述UI的普通对象（React元素）；Component返回Element；Element不可变；Component有生命周期/状态

---

### Q99: React和Vue的diff算法差异是什么？

**【核心解析】**
React：同层比较、key优化、双端比较（Fiber）；Vue：同层比较、双端比较（头尾指针）、静态标记（patchFlag）；Vue的优化更细粒度；React的Fiber可中断

---

### Q100: React中常用的Hook有哪些？请介绍useState、useEffect、useLayoutEffect的用法和区别。

**【核心解析】**
useState管理状态；useEffect处理副作用，异步执行；useLayoutEffect同步执行，在DOM更新后立即执行；useEffect在浏览器绘制后执行，useLayoutEffect在绘制前执行

---

