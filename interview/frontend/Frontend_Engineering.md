# Frontend_Engineering 面试专题手册

> 💡 本章节共收录 2189 道面试真题，建议每天复习 10-20 题。

---
### Q1: 通用后台管理系统与AI对话项目在技术选型上有哪些差异？请从框架、状态管理、构建工具等方面分析。

**【核心解析】**
后台管理系统：注重表格/表单、权限、数据可视化，常用React/Vue+Ant Design/Element UI；AI对话项目：注重实时交互、流式数据、WebSocket，可能使用Vue3+Pinia或React+Redux Toolkit；构建工具：Vite或Webpack；状态管理：后台用Redux/Zustand，AI对话用Pinia或Context

---

### Q2: 请介绍Webpack的核心概念，包括Loader、Plugin、以及打包优化策略。

**【核心解析】**
入口、输出、Loader、Plugin、Mode；Loader处理非JS文件（babel-loader, css-loader）；Plugin扩展功能（HtmlWebpackPlugin, MiniCssExtractPlugin）；优化：Tree Shaking、代码分割、缓存、多进程打包

---

### Q3: Vite和Webpack有什么区别？

**【核心解析】**
开发模式：Vite基于ESM按需编译，Webpack打包；生产构建：Vite用Rollup，Webpack自建；热更新速度；配置复杂度；生态成熟度

---

### Q4: Vite有哪些常用配置项？

**【核心解析】**
resolve.alias；css.preprocessorOptions；server.proxy；build.rollupOptions；plugins

---

### Q5: 学生管理系统从0到1的技术选型：框架选Vue还是React？打包工具选哪个？UI组件库选哪个？说明理由。

**【核心解析】**
Vue适合中小型项目、学习曲线平缓；React适合大型复杂应用、生态丰富；Vite构建速度快；Element Plus/Ant Design Vue；根据团队熟悉度和项目需求决定

---

### Q6: Webpack和Vite有什么区别？生产环境下有什么区别？

**【核心解析】**
开发模式：Vite基于ESM热更新快，Webpack基于bundle；生产构建：Vite用Rollup，Webpack用自身；Vite配置更简洁；Webpack生态更成熟

---

### Q7: 请对比Webpack和Vite，说明Vite的优势以及为什么选择Vite？

**【核心解析】**
开发服务器启动速度（基于ESM）；热更新效率（按需编译）；构建打包（Rollup）；配置简洁度；生态兼容性

---

### Q8: 为什么使用Monorepo架构？它解决了什么问题？

**【核心解析】**
代码共享与复用；统一构建与依赖管理；跨项目协作；版本控制一致性；工具支持（如Nx、Turborepo）

---

### Q9: 请解释Babel的作用和工作原理。

**【核心解析】**
语法转换（ES6+转ES5）；polyfill；插件与预设；AST抽象语法树；配置（presets、plugins）

---

### Q10: 请解释TypeScript中的泛型、接口（interface）和类型别名（type）的区别。

**【核心解析】**
泛型约束与复用；接口可扩展；类型别名可联合/交叉；实现与继承；使用场景

---

### Q11: 请手写一个TypeScript的Pick工具类型。

**【核心解析】**
从类型中选取属性；映射类型；keyof与in；泛型约束

---

### Q12: Git中如何提交、合并和revert？

**【核心解析】**
提交：git commit；合并：git merge或git rebase；revert：git revert撤销某次提交；解决冲突；git log查看历史

---

### Q13: 接口封装是高内聚还是低耦合？请解释。

**【核心解析】**
高内聚指模块内部功能紧密相关；低耦合指模块间依赖少；接口封装应追求高内聚低耦合；例如统一请求拦截、错误处理

---

### Q14: 什么时候使用localStorage，什么时候使用IndexedDB？

**【核心解析】**
localStorage存储小量字符串数据（`<5MB`）；IndexedDB存储大量结构化数据；IndexedDB支持索引、事务；localStorage同步，IndexedDB异步

---

### Q15: 用户刷新页面更新数据与代码中清理缓存相比，各有什么优势？

**【核心解析】**
刷新页面强制获取最新数据，但用户体验差；代码清理缓存可保留用户状态，更平滑；代码清理可局部更新，减少网络请求

---

### Q16: 请说明GitHub Actions如何实现CI/CD，并描述你在项目中是如何配置的。

**【核心解析】**
基于YAML配置文件定义工作流；触发条件（push、pull_request等）；作业（jobs）和步骤（steps）；使用actions/checkout、setup-node等官方action；构建、测试、部署流程

---

### Q17: 请解释TypeScript中的泛型，并说明其使用场景。

**【核心解析】**
泛型允许定义函数、类、接口时使用类型参数，增加代码复用性；常见场景：工具类型（Partial、Pick）、泛型约束（extends）、泛型函数（`identity<T>`）、React组件props类型

---

### Q18: 请比较Webpack和Vite的区别，包括构建原理、开发体验、生产优化等方面。

**【核心解析】**
Webpack基于打包；Vite基于ES Module；开发服务器启动速度；HMR热更新；生产构建使用Rollup；插件生态

---

### Q19: Webpack有哪些功能？除了按需加载还实现了哪些？

**【核心解析】**
模块打包；Loader与Plugin；代码分割与按需加载；Tree Shaking；HMR；资源优化

---

### Q20: Vite和Webpack的异同点是什么？

**【核心解析】**
开发服务器启动方式（ESM vs 打包）；热更新效率；构建工具链；插件生态；生产构建（Rollup vs Webpack）

---

### Q21: 有哪些模块化的形式？

**【核心解析】**
CommonJS；AMD；ES Module；UMD；SystemJS

---

### Q22: Webpack有什么问题？

**【核心解析】**
构建速度慢；配置复杂；HMR不稳定；大型项目性能瓶颈；Tree Shaking不彻底

---

### Q23: IndexedDB与localStorage如何选型？它们有什么区别？

**【核心解析】**
存储容量：localStorage约5MB，IndexedDB无限制；数据类型：localStorage仅字符串，IndexedDB支持结构化数据；异步/同步：IndexedDB异步，localStorage同步；查询能力：IndexedDB支持索引和游标；适用场景：大量结构化数据用IndexedDB，简单键值对用localStorage

---

### Q24: Electron打包优化有哪些策略？

**【核心解析】**
代码压缩与混淆；按需加载；资源压缩；使用electron-builder或electron-forge；减少依赖体积；使用CDN加载第三方库；开启硬件加速

---

### Q25: Vite和Webpack有什么区别？

**【核心解析】**
开发模式差异（ESM vs 打包）；热更新效率；构建速度；配置复杂度；插件生态

---

### Q26: 请比较Vite与Webpack的区别，并解释Vite编译更快的原因。

**【核心解析】**
开发模式：Vite基于ES Module原生支持，无需打包；Webpack需要打包所有模块；冷启动速度：Vite利用浏览器缓存，按需编译；热更新：Vite仅更新变更模块，Webpack需重新打包；生产构建：Vite使用Rollup，Webpack自建；Vite更快的原因：利用浏览器原生ESM、按需编译、缓存、优化预构建

---

### Q27: 在TypeScript中如何扩展window的自定义属性？

**【核心解析】**
使用声明合并：interface Window { customProp: type }；使用全局声明：declare global { interface Window { ... } }；使用类型断言：(window as any).customProp；推荐使用模块增强

---

### Q28: 请对比Vite和Webpack的配置方式及开发/生产环境的区别。

**【核心解析】**
Vite基于ESM开发时无打包；Webpack全量打包；Vite生产用Rollup；Webpack配置更复杂；Vite热更新更快；Vite对TypeScript原生支持

---

### Q29: Vite开发环境和生产环境有什么区别？

**【核心解析】**
开发环境使用ESM无打包；生产环境使用Rollup打包；开发环境支持HMR；生产环境代码压缩；环境变量处理；插件兼容性

---

### Q30: 部门相关组件使用的UI库是什么？

**【核心解析】**
Element UI/Ant Design；按需加载；主题定制；组件封装；版本管理

---

### Q31: 分页查询和Excel导入导出是前端分页还是后端分页？

**【核心解析】**
大数据量用后端分页；小数据量前端分页；Excel导入导出通常后端处理；前端可做预览；性能考虑

---

### Q32: 前端是否会写接口？

**【核心解析】**
前端通常不写后端接口；但可写Mock接口；使用Node.js中间层；BFF模式；GraphQL

---

### Q33: Babel的作用与原理是什么？如何确保转换后的代码兼容不同浏览器？

**【核心解析】**
Babel将ES6+转换为ES5；原理：解析->转换->生成；使用preset-env和browserslist；polyfill（core-js）

---

### Q34: Babel在处理polyfill时如何避免全局污染？配置中会使用哪些工具？

**【核心解析】**
使用@babel/plugin-transform-runtime；core-js按需引入；避免全局变量；配置useBuiltIns: 'usage'

---

### Q35: TypeScript中如何进行防御性编程？

**【核心解析】**
类型断言；类型守卫；联合类型与类型收窄；可选链和空值合并；严格模式；泛型约束

---

### Q36: 设计一个前端路由系统，支持路由懒加载和页面过渡动画，如何优化首屏加载性能？

**【核心解析】**
懒加载使用动态import()；预加载关键路由；动画使用CSS transition或requestAnimationFrame；代码分割；骨架屏

---

### Q37: 实现路由懒加载时，如何处理加载延迟问题？

**【核心解析】**
显示加载指示器；预加载（prefetch）；错误处理；超时重试；Suspense（React）

---

### Q38: 实现页面过渡动画时，如何确保流畅性和性能？

**【核心解析】**
使用transform和opacity；避免重排；will-change提示；requestAnimationFrame；GPU加速

---

### Q39: 请对比Vite和Webpack在工程化方面的异同，并说明Vite如何处理兼容性和Polyfill？

**【核心解析】**
Vite基于ESM开发服务器，Webpack基于打包；Vite使用esbuild预构建依赖，Webpack使用各种loader；Vite通过@vitejs/plugin-legacy处理兼容性和Polyfill；Webpack通过babel-loader和core-js处理

---

### Q40: 请解释SSR（服务端渲染）和SSG（静态站点生成）的区别及适用场景？

**【核心解析】**
SSR在每次请求时动态渲染HTML，适合动态内容；SSG在构建时生成静态HTML，适合内容不常变化的站点；SSR有更好的SEO和首屏性能，但服务器压力大；SSG部署简单，性能极佳

---

### Q41: 在团队开发项目中，前端技术选型需要考虑哪些因素？

**【核心解析】**
项目需求与规模；团队技术栈熟悉度；社区生态与长期维护；性能与开发效率；可扩展性与兼容性

---

### Q42: Webpack和Vite的区别是什么？

**【核心解析】**
Vite基于ESM开发服务器启动快；Webpack基于打包，兼容性更好；Vite使用Rollup生产构建；Webpack插件生态更丰富

---

### Q43: Monorepo架构如何实现？请说明代码位置和配置。

**【核心解析】**
使用pnpm workspaces或lerna；根目录pnpm-workspace.yaml配置packages目录；共享node_modules；统一构建和发布脚本

---

### Q44: TypeScript中如何删除接口的某个属性？

**【核心解析】**
使用Omit工具类型；使用Pick排除；使用Partial和Required组合；映射类型

---

### Q45: 如何理解TypeScript中的泛型？有哪些使用场景？

**【核心解析】**
泛型定义类型参数；提高复用性；常用场景：函数、接口、类；约束extends；工具类型

---

### Q46: Webpack有什么好处？

**【核心解析】**
模块打包；代码分割；loader转换；插件丰富；热更新；兼容性好

---

### Q47: Webpack和Vite有什么区别？在兼容旧浏览器方面如何选择？

**【核心解析】**
Webpack基于模块打包，Vite基于ESM开发服务器；Vite开发时按需编译，Webpack全量打包；Vite使用Rollup生产打包；兼容旧浏览器：Vite需配置@vitejs/plugin-legacy，Webpack通过babel-loader；构建速度与配置复杂度对比

---

### Q48: 为什么要创建线程？使用线程池有什么好处？

**【核心解析】**
线程创建开销大，线程池复用线程减少开销；控制并发数量，防止资源耗尽；提高响应速度；任务队列管理；适用于大量短任务场景

---

### Q49: Vite和Webpack在兼容旧浏览器方面有哪些策略？

**【核心解析】**
Vite：使用@vitejs/plugin-legacy生成传统浏览器兼容包，自动添加polyfill；Webpack：通过babel-loader配置preset-env，使用core-js按需polyfill；两者都需设置目标浏览器列表（browserslist）

---

### Q50: 请说明CI/CD的基本概念，以及前端项目中常用的测试工具（如Playwright）和测试方法（黑盒/白盒）。

**【核心解析】**
CI/CD：持续集成/持续部署，自动化构建、测试、部署；Playwright：端到端测试工具，支持多浏览器；黑盒测试：关注功能，不关心内部实现；白盒测试：关注代码逻辑，如单元测试；前端测试金字塔：单元测试、集成测试、E2E测试

---

### Q51: Vite和Webpack的区别是什么？

**【核心解析】**
Vite基于ESM开发服务器，按需编译，热更新快；Webpack打包所有模块，开发慢；Vite使用Rollup生产构建，Webpack自建打包；Vite配置更简洁；Vite支持多种框架，Webpack生态更成熟

---

### Q52: 如何实现一个Vite插件，清除代码中的所有console.log？

**【核心解析】**
使用transform钩子；解析AST找到CallExpression；判断callee为console.log；替换或删除节点；返回修改后的代码

---

### Q53: 请解释Webpack中loader和plugin的区别，并举例说明。

**【核心解析】**
loader用于转换模块源码，如babel-loader、css-loader；plugin用于扩展功能，如HtmlWebpackPlugin、MiniCssExtractPlugin；loader在module.rules中配置，plugin在plugins数组中；loader是函数，plugin是类

---

### Q54: 为什么Vite的打包速度比Webpack快？请解释其原理。

**【核心解析】**
Vite开发模式使用ES Module原生支持，无需打包；按需编译；使用esbuild预构建依赖；生产环境使用Rollup打包；热更新速度快；缓存策略

---

### Q55: 请比较Vite和Webpack的打包原理和开发体验。

**【核心解析】**
Vite利用ES Module原生支持，开发无打包；Webpack需要打包所有模块；Vite使用esbuild预构建依赖；Vite热更新更快；生产环境Vite用Rollup，Webpack自建；配置复杂度

---

### Q56: 请解释Vite和Webpack的流程和区别。

**【核心解析】**
Webpack打包构建，Vite基于ESM开发服务器；Vite开发时按需编译，Webpack全量打包；Vite使用Rollup生产打包，Webpack使用自身打包器

---

### Q57: TypeScript如何实现枚举？枚举本质上是什么？如何检查枚举是否包含某个值？

**【核心解析】**
使用enum关键字；枚举本质上是对象（数字枚举反向映射）；检查值：使用in运算符或Object.values().includes()

---

### Q58: Webpack和Vite有什么区别？Vite打包用的什么？

**【核心解析】**
开发模式（Vite基于ESM，Webpack打包）；生产构建（Vite用Rollup）；热更新速度；配置复杂度；ESM和CJS的区别

---

### Q59: ESM和CJS的区别是什么？

**【核心解析】**
ESM静态导入（编译时）；CJS动态导入（运行时）；ESM异步加载；CJS同步加载；ESM支持tree-shaking

---

### Q60: 请解释sourcemap的作用以及Webpack的生命周期。

**【核心解析】**
sourcemap映射压缩代码到源码；Webpack生命周期：初始化、编译、输出；插件在钩子中执行；常用钩子如emit、done

---

### Q61: 请比较Webpack和Vite的核心区别，以及使用Vite时的优化策略。

**【核心解析】**
开发模式（Webpack打包后启动 vs Vite基于ESM按需编译）；热更新效率；生产构建（Rollup vs Webpack）；Vite优化（代码压缩、分包策略、Tree Shaking、CDN加载）；配置差异

---

### Q62: 请解释Webpack中Loader和Plugin的区别及常见示例。

**【核心解析】**
Loader作用（转换模块源码，如babel-loader、css-loader）；Plugin作用（扩展功能，如HtmlWebpackPlugin、MiniCssExtractPlugin）；执行顺序（Loader从右到左，Plugin在生命周期钩子中触发）；自定义Loader/Plugin

---

### Q63: 请解释跨端框架（如Taro、Uni-app）的原理及优缺点。

**【核心解析】**
编译时方案（语法转换、条件编译）；运行时方案（自渲染引擎）；优点（一套代码多端运行）；缺点（性能损耗、平台差异适配、调试困难）；与React Native、Flutter对比

---

### Q64: 请比较Webpack和Vite的构建原理与核心区别，并说明各自的适用场景。

**【核心解析】**
Webpack基于模块打包，Vite基于ESM原生模块；开发模式Vite使用esbuild预构建与HMR；生产模式Vite使用Rollup打包；Webpack配置复杂但生态成熟；Vite冷启动快、热更新高效

---

### Q65: 前端进行性能优化的手段有哪些？

**【核心解析】**
代码分割与懒加载；图片优化（压缩、webp、懒加载）；缓存策略（HTTP缓存、Service Worker）；减少重排重绘；使用CDN；预加载与预渲染；虚拟滚动；Tree Shaking

---

### Q66: 为什么要自己写组件库？做了哪些组件？

**【核心解析】**
统一UI风格，提高开发效率；可定制性强，减少依赖；常见组件：按钮、输入框、弹窗、表格、表单、导航等

---

### Q67: 一般用TypeScript里哪些东西？了解泛型吗？

**【核心解析】**
类型注解、接口、类型别名、泛型、枚举、联合类型、交叉类型；泛型用于创建可复用的组件，如`<T>`

---

### Q68: Webpack和Vite有什么区别？Vite更快的原因是什么？

**【核心解析】**
Webpack基于打包；Vite基于ES Module；开发服务器启动速度；热更新效率；生产构建使用Rollup；Vite利用浏览器原生ESM

---

### Q69: Loader和Plugin的区别是什么？

**【核心解析】**
Loader处理模块转换；Plugin处理构建流程；Loader在module.rules中配置；Plugin实例化；Loader单一职责；Plugin可做更多操作

---

### Q70: Babel是如何将ES6转化为ES5的？

**【核心解析】**
解析（parse）生成AST；转换（transform）修改AST；生成（generate）代码；插件（plugin）和预设（preset）；@babel/preset-env

---

### Q71: npm和pnpm有什么区别？哪个更常用？

**【核心解析】**
pnpm使用硬链接和符号链接；节省磁盘空间；严格依赖隔离；安装速度更快；pnpm越来越流行；npm是默认工具

---

### Q72: 如何设计一个支持多系统复用的业务组件库？

**【核心解析】**
组件化设计；样式隔离（CSS Modules/Scoped）；按需加载；类型定义；文档与示例；版本管理；跨框架适配（Web Components）

---

### Q73: pnpm相比npm为什么更快？请解释其原理。

**【核心解析】**
pnpm使用硬链接和符号链接；非扁平化的node_modules结构；内容寻址存储；依赖隔离；安装速度优化

---

### Q74: 请比较Vite和Webpack的区别，包括构建原理、开发体验和性能。

**【核心解析】**
Webpack基于打包，Vite基于ES Module；开发服务器启动速度；热更新效率；生产构建（Rollup vs Webpack）；配置复杂度；生态兼容性

---

### Q75: 如何做Webpack分包、体积优化和冗余依赖剔除？

**【核心解析】**
splitChunks提取公共模块；动态import实现懒加载；Tree Shaking移除未使用代码；externals排除外部依赖；压缩插件（TerserPlugin）；分析工具（webpack-bundle-analyzer）

---

### Q76: 请描述实际的部署经验，如Nginx配置、HTTPS证书配置等。

**【核心解析】**
Nginx反向代理、静态文件服务、负载均衡；HTTPS证书申请（Let's Encrypt）、配置SSL/TLS；HTTP重定向到HTTPS；安全头设置；部署流程（CI/CD）

---

### Q77: 前端工程化的核心理解是什么？包括模块化、规范化、自动化，以及实际落地操作和未来发展趋势。

**【核心解析】**
模块化（ES Module、CommonJS）；规范化（代码规范、git规范、文档规范）；自动化（构建、测试、部署）；实际落地：脚手架、CI/CD、lint工具；趋势：微前端、低代码、AI辅助

---

### Q78: Webpack和Vite的区别是什么？你用过哪些？

**【核心解析】**
Webpack基于打包，Vite基于ES Module；开发模式Vite使用esbuild预构建，Webpack使用webpack-dev-server；Vite热更新更快；生产构建Vite使用Rollup，Webpack使用自身打包；配置复杂度差异

---

### Q79: Webpack 5 有哪些新特性？

**【核心解析】**
模块联邦（Module Federation）；持久化缓存；资源模块（Asset Modules）；Tree Shaking 改进；Node.js polyfill 自动移除

---

### Q80: TypeScript 中 any 和 unknown 的区别与使用场景？

**【核心解析】**
any 放弃类型检查；unknown 是类型安全的 top type；unknown 需类型断言或缩小后才能操作；any 常用于迁移或第三方库；unknown 适合不确定类型的数据

---

### Q81: ES Module与CommonJS的区别是什么？

**【核心解析】**
ESM静态导入/导出；CJS动态require；ESM编译时解析；CJS运行时加载；ESM支持异步加载；CJS同步；ESM tree-shaking；CJS模块缓存

---

### Q82: 请做一个简单的自我介绍，并介绍你的项目架构、应用场景以及开发过程中遇到的核心技术难点。

**【核心解析】**
项目背景与技术栈；架构设计（前后端分离、微服务等）；核心难点（性能优化、复杂状态管理、跨端兼容等）；解决方案与成果；个人角色与贡献

---

### Q83: Playwright插件在你的项目中具体是用来做什么的？

**【核心解析】**
自动化测试（端到端测试）；跨浏览器兼容性测试；截图对比与视觉回归；模拟用户交互；集成CI/CD流程

---

### Q84: Webpack和Vite的区别是什么？

**【核心解析】**
Webpack：基于打包，支持所有模块类型，配置复杂，开发服务器慢；Vite：基于ES Module，开发时按需编译，速度快，生产使用Rollup打包；Vite配置更简洁，插件生态较新

---

### Q85: TypeScript中type和interface的区别是什么？

**【核心解析】**
interface可以重复声明合并，type不能；interface只能定义对象类型，type可以定义联合类型、交叉类型、基本类型别名；interface可以被类实现，type不能；推荐用interface描述对象形状，用type描述复杂类型

---

### Q86: JS和TS的区别是什么？

**【核心解析】**
TS是JS的超集，增加了静态类型系统；TS支持接口、泛型、枚举、装饰器等；TS需要编译为JS才能运行；TS提供更好的开发时类型检查和IDE支持；TS可减少运行时错误

---

### Q87: 对Taro API的跨端封装和配置文件有何理解？

**【核心解析】**
Taro通过编译时和运行时适配不同端；API封装：统一调用接口，内部根据平台调用原生API；配置文件：config/index.js配置多端差异，如路由、样式、插件；跨端兼容：条件编译、平台判断

---

### Q88: Webpack和Vite有哪些区别？各自的优缺点是什么？Vue 3中为什么推荐使用Vite？你了解最新出来的Vite8吗？

**【核心解析】**
开发模式差异（Webpack打包后启动 vs Vite基于ESM按需编译）；热更新速度（Vite利用浏览器原生ESM）；生产构建（Vite基于Rollup）；Vite8新特性（如Rust工具链、更快的构建）；Vue3推荐原因（原生ESM支持、快速HMR）

---

### Q89: Vite和Rsbuild的区别是什么？Rsbuild为什么快？

**【核心解析】**
Vite基于ESM开发服务器，Rsbuild基于Rust构建工具（如SWC）；Rsbuild快的原因：Rust编译、并行处理、缓存策略；两者定位不同（Vite通用，Rsbuild更专注构建）

---

### Q90: TypeScript中type和interface的区别？表示空的类型？ES6特性？

**【核心解析】**
type可定义联合类型、交叉类型、映射类型；interface可扩展、合并声明；空类型：null、undefined、void、never；ES6特性：箭头函数、类、模板字符串、解构、Promise、模块

---

### Q91: 会做单元测试吗？你作为前端负责人，在项目框架搭建时做过前端安全和监控方面的管理吗？你有自己搭过Jenkins流水线吗？了解GitHub的CI/CD吗？

**【核心解析】**
单元测试框架（Jest、Vitest）；前端安全（XSS、CSRF防御、CSP）；监控（错误监控、性能监控）；CI/CD（Jenkins Pipeline、GitHub Actions）

---

### Q92: TypeScript中interface和type的区别是什么？

**【核心解析】**
interface可重复声明合并，type不可；interface只能定义对象类型，type可定义联合/交叉/基本类型；interface可被类实现，type不可；type支持映射类型；推荐用interface描述对象，type描述复杂类型

---

### Q93: Tree-Shaking的原理是什么？

**【核心解析】**
基于ES6模块静态分析；打包时删除未引用代码；生产模式生效；不支持CommonJS；依赖sideEffects配置；需要模块是纯函数

---

### Q94: 前端部署与回滚的流程是怎样的？

**【核心解析】**
部署：打包→上传静态资源→Nginx配置；回滚：切换至历史版本/重新部署上一版包；使用CI/CD自动化；版本管理；灰度发布

---

### Q95: Webpack和Vite的区别是什么？

**【核心解析】**
Webpack基于模块打包，Vite基于ES模块开发服务器；Vite开发时利用浏览器原生ESM，实现快速冷启动和热更新；Webpack需要预构建，Vite使用esbuild预构建依赖；Vite生产环境用Rollup打包，Webpack自研打包；配置复杂度：Vite更简洁，Webpack更灵活

---

### Q96: Git Hash增量更新机制是如何实现的？

**【核心解析】**
基于Git提交的哈希值判断文件变更；通过比较前后两次提交的文件哈希，识别变更文件；只更新变更的文件，避免全量更新；结合CI/CD流水线，生成增量更新包；适用于文档系统或静态资源部署

---

### Q97: TypeScript中any和unknown的区别是什么？

**【核心解析】**
any放弃类型检查，可赋值给任何类型；unknown安全类型，需类型断言或缩小后使用；unknown更安全，推荐替代any

---

### Q98: Vite与Webpack相比有哪些优势？Vite的核心原理是什么？

**【核心解析】**
Vite基于ES Modules，开发服务器按需编译，热更新快；Webpack打包后启动；Vite使用Rollup生产构建；优势（启动快、HMR快、配置简洁）

---

### Q99: 简单介绍一下TypeScript中的泛型，并写一个提取Promise返回类型的工具类型。

**【核心解析】**
泛型的基本概念与使用场景；泛型约束（extends）；条件类型与infer关键字；提取Promise返回类型的工具类型实现（如`type UnwrapPromise<T> = T extends Promise<infer U> ? U : T`）

---

### Q100: Webpack的构建流程是怎样的？

**【核心解析】**
初始化参数；编译阶段（从入口开始递归解析依赖）；Loader转换模块；生成Chunk；输出资源到文件系统；Plugin在生命周期中介入

---

