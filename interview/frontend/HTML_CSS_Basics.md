# HTML_CSS_Basics 面试专题手册

> 💡 本章节共收录 2212 道面试真题，建议每天复习 10-20 题。

---
### Q1: 你项目中使用了响应式布局，请说明你常用的布局方式（如px、rem、flex、grid等），以及rem的值应如何设置？

**【核心解析】**
响应式布局常用rem、flex、grid；rem基准值通常设为html字体大小（如16px）；通过媒体查询或js动态调整；flex常用属性：flex-direction、flex-wrap、justify-content、align-items、flex:1

---

### Q2: 请用flex布局实现从左到右的排列效果（如图），并说明相关属性。

**【核心解析】**
父容器display:flex；flex-direction:row（默认）；子项按顺序排列；justify-content控制主轴对齐；align-items控制交叉轴对齐

---

### Q3: 请解释Flexbox布局的基本原理，并给出使用Flex实现单个元素水平垂直居中的方案。

**【核心解析】**
Flex容器属性：display:flex, justify-content, align-items；Flex项目属性：flex, align-self；水平垂直居中：justify-content:center + align-items:center；兼容性

---

### Q4: 如何用CSS实现一个菜单从100px移动到300px的动态动画？请说明transition和@keyframes的使用。

**【核心解析】**
transition属性（transition-property, duration, timing-function）；@keyframes定义关键帧；触发方式（hover、类切换）；性能优化（transform代替位置变化）

---

### Q5: 什么是HTML语义化？

**【核心解析】**
使用语义标签（header, nav, main等）；提高可访问性；利于SEO；便于代码维护

---

### Q6: 用HTML、JS、CSS实现一个表单（无需运行）。

**【核心解析】**
表单结构（form, input, button）；样式布局（flex/grid）；表单验证（required, pattern）；提交事件处理

---

### Q7: 请解释CSS盒模型，包括标准盒模型和IE盒模型的区别。

**【核心解析】**
content-box与border-box；width/height包含范围；box-sizing属性；padding和border对尺寸的影响

---

### Q8: 你使用过Sass或Less吗？请说明它们的主要特性和优势。

**【核心解析】**
变量；嵌套规则；混合（Mixin）；继承；函数；模块化；与原生CSS对比

---

### Q9: CSS布局问题：如何实现一个容器，左边根据文字无限扩大，右边不扩大只缩小？

**【核心解析】**
flex布局：左边flex:1 1 auto（自动扩大）；右边flex:0 0 auto（不扩大）；float布局：左边浮动，右边overflow:hidden；使用grid布局

---

### Q10: 请列举CSS的布局方式，并详细说明如何实现一个元素的水平垂直居中。

**【核心解析】**
布局方式：普通流、浮动、定位、Flexbox、Grid、多列布局；居中方法：flex（justify-content:center; align-items:center）、grid（place-items:center）、绝对定位+transform、margin:auto

---

### Q11: 请解释CSS中的绝对定位（absolute）与浮动（float）的区别。

**【核心解析】**
绝对定位脱离文档流，相对于最近的非static定位祖先元素；浮动脱离文档流但保留文本环绕效果；绝对定位不占据空间，浮动占据空间但可被清除；绝对定位常用于覆盖层，浮动常用于图文混排

---

### Q12: 你的项目是否支持移动端适配？如果不支持，请说明如何改造实现移动端适配。

**【核心解析】**
视口设置；rem/vw布局；媒体查询；Flex/Grid弹性布局；响应式图片；touch事件处理

---

### Q13: 做过的项目中如何做移动端适配？

**【核心解析】**
rem/vw/vh布局；媒体查询；Flexible方案；视口设置；响应式设计原则

---

### Q14: 请实现垂直居中和水平居中的多种方式。

**【核心解析】**
flex布局（align-items/justify-content）；grid布局；绝对定位+transform；margin:auto；table-cell

---

### Q15: 请介绍HTML5的语义化标签及其作用。

**【核心解析】**
header、footer、article、section、nav等；提升可读性；利于SEO；辅助无障碍访问

---

### Q16: HTML5新增了哪些音视频标签和API？

**【核心解析】**
audio和video标签；Canvas绘图；地理定位（navigator.geolocation）；离线存储（Application Cache）；表单新特性（input类型、验证属性）

---

### Q17: 如何优化HTML代码？

**【核心解析】**
减少标签嵌套；使用语义化标签；压缩HTML文件；合理使用缓存；避免表格布局

---

### Q18: localStorage和sessionStorage的区别是什么？

**【核心解析】**
localStorage持久化存储；sessionStorage会话级存储；同源共享；容量约5MB；键值对形式

---

### Q19: 请列举常见的行内元素、块级元素和空元素。

**【核心解析】**
行内元素：a、span、img、input等；块级元素：div、p、h1-h6、ul等；空元素：br、hr、link、input、meta等

---

### Q20: 响应式设计中媒体查询（Media Query）的使用方法是什么？

**【核心解析】**
@media规则；断点设置；常用属性（width、orientation等）；移动优先；结合rem/vw等

---

### Q21: 如何修改第三方组件的样式？

**【核心解析】**
使用全局样式覆盖（增加权重）；使用:deep()或/deep/穿透（Vue）；使用!important（不推荐）；使用CSS Modules或Scoped样式；通过组件props传递自定义类名；使用CSS变量

---

### Q22: 实现响应式布局的方式有哪些？请详细讲解Flex布局及其属性（flex-grow、flex-shrink、flex-basis），以及剩余空间是如何分配的。

**【核心解析】**
媒体查询；百分比；rem/em；Flex/Grid；flex-grow按比例分配正空间；flex-shrink按比例收缩；flex-basis初始大小；剩余空间计算

---

### Q23: 响应式布局和多端兼容的实现逻辑是什么？如何识别屏幕后进行适配？

**【核心解析】**
媒体查询；视口单位；flexible方案；rem适配；设备像素比；CSS预处理；框架如Tailwind

---

### Q24: HTML5语义化标签有哪些？请举例说明其应用场景。

**【核心解析】**
语义化标签如header、nav、main、article、section、aside、footer；提高可访问性和SEO；便于代码维护和理解；应用场景如页面结构划分、文章内容标记

---

### Q25: 请解释Flex布局及其常用属性。

**【核心解析】**
Flex容器属性：flex-direction、flex-wrap、justify-content、align-items、align-content；Flex项目属性：flex、flex-grow、flex-shrink、flex-basis、align-self、order；实现一维布局；解决垂直居中、等分布局等问题

---

### Q26: 请介绍Tailwind CSS的特点和使用场景。

**【核心解析】**
实用优先的CSS框架；通过类名组合快速构建样式；高度可定制（配置文件）；减少CSS代码量；适合快速原型开发和团队协作

---

### Q27: script标签有哪些属性？defer和async的区别？

**【核心解析】**
src, async, defer, type, crossorigin；async异步加载立即执行；defer延迟到DOM解析后执行；执行顺序

---

### Q28: 什么是HTML语义化标签？有哪些好处？

**【核心解析】**
语义化标签如header, nav, main, article, section等；提高可访问性；SEO优化；代码可读性

---

### Q29: CSS display属性有哪些值？分别有什么作用？

**【核心解析】**
block, inline, inline-block, none, flex, grid, table等；块级与行内；隐藏元素；弹性布局

---

### Q30: 项目中CSS如何命名和结构维护？

**【核心解析】**
BEM命名规范；CSS Modules；CSS-in-JS；预处理器（Sass/Less）组织文件；原子化CSS（Tailwind）

---

### Q31: 如何实现日夜模式切换？

**【核心解析】**
CSS变量（custom properties）；媒体查询prefers-color-scheme；JavaScript切换类名；localStorage持久化

---

### Q32: 移动端适配有哪些常见方案？请详细说明。

**【核心解析】**
rem方案：根据根字体大小适配；vw/vh方案：视口单位；媒体查询：断点适配；flexible方案：动态设置根字体；viewport meta标签设置

---

### Q33: 使用Tailwind CSS时可能遇到哪些问题？如何保证团队协作时的代码统一性？

**【核心解析】**
问题：类名过长、自定义配置复杂、与现有CSS冲突；统一性：使用配置文件统一设计令牌、通过Prettier插件格式化、制定团队规范、使用组件抽象

---

### Q34: CSS伪元素（::before/::after）有什么作用？请举例说明。

**【核心解析】**
伪元素用于在元素内容前后插入额外内容；常见用途：清除浮动、添加装饰性图标、实现三角形、生成计数器内容

---

### Q35: 请解释BFC（块级格式化上下文）及其解决的问题，并列举如何创建BFC？

**【核心解析】**
BFC是独立渲染区域，内部元素不影响外部；解决问题：防止外边距折叠、清除浮动、自适应两栏布局；创建方式：overflow不为visible、float不为none、position为absolute/fixed、display为inline-block/flex/grid等

---

### Q36: 请解释Flex布局中flex属性的含义及常见取值？

**【核心解析】**
flex是flex-grow、flex-shrink、flex-basis的简写；flex:1表示flex-grow:1, flex-shrink:1, flex-basis:0%；常见取值：flex:auto、flex:none、flex:initial

---

### Q37: 什么是BFC？怎么触发？

**【核心解析】**
块级格式化上下文；触发条件：overflow非visible、float、position absolute/fixed、display inline-block/flex/grid

---

### Q38: z-index设置为无限大还是被覆盖了怎么办？

**【核心解析】**
检查层叠上下文；父元素z-index限制；检查定位属性；检查opacity/transform创建新上下文

---

### Q39: px、em、rem的区别？

**【核心解析】**
px绝对单位；em相对父元素字体大小；rem相对根元素字体大小；rem用于响应式

---

### Q40: 请说明Flex和Grid布局的特点，并实现水平居中。

**【核心解析】**
Flex：一维布局，适合主轴排列；Grid：二维布局，适合网格系统；水平居中：Flex（父display:flex; justify-content:center; align-items:center）；Grid（父display:grid; place-items:center）；传统方法：margin:0 auto; text-align:center

---

### Q41: CSS中实现居中的方法有哪些？

**【核心解析】**
flex（justify-content/align-items）；grid（place-items）；absolute+transform；absolute+margin:auto；fixed+transform；text-align:center+line-height

---

### Q42: CSS盒模型有哪些？如何判断两种盒模型的计算结果？

**【核心解析】**
标准盒模型（content-box）：width=content；IE盒模型（border-box）：width=content+padding+border；box-sizing属性控制；border-box更常用；计算时注意padding和border

---

### Q43: CSS中的盒模型是什么？

**【核心解析】**
每个元素由content、padding、border、margin组成；标准盒模型width=content；IE盒模型width=content+padding+border；box-sizing控制；margin合并

---

### Q44: 请解释CSS盒模型，包括标准盒模型和怪异盒模型（IE盒模型）的区别，以及如何切换。

**【核心解析】**
标准盒模型：content-box；怪异盒模型：border-box；box-sizing属性；默认怪异盒模型的条件（如DOCTYPE缺失）；实际应用中的选择

---

### Q45: 请详细说明Flex布局中display:flex容器的属性及其作用。

**【核心解析】**
flex-direction；flex-wrap；justify-content；align-items；align-content；flex-flow简写；gap属性

---

### Q46: 请解释CSS中em和rem单位的区别，以及vh和vw单位的用途。

**【核心解析】**
em相对于父元素字体大小；rem相对于根元素字体大小；vh相对于视口高度；vw相对于视口宽度；响应式适配中的应用

---

### Q47: 请解释HTML语义化的意义，并举例说明。

**【核心解析】**
提高可访问性；利于SEO；代码可读性更好；使用语义标签如header、nav、main、article、section、aside、footer；避免滥用div和span

---

### Q48: 请实现一个布局：左右两个子区域，左边固定200px，右边占剩余全部宽度。

**【核心解析】**
Flex方案：父容器display:flex，左子flex:0 0 200px，右子flex:1；绝对定位方案：父relative，左absolute left0 width200，右absolute left200 right0；Grid方案；calc方案

---

### Q49: 请介绍CSS的布局方式（标准流、浮动、定位、Flex、Grid）以及盒子模型（四个部分、box-sizing属性）。

**【核心解析】**
标准流、浮动、定位、Flex、Grid布局；盒子模型由content、padding、border、margin组成；box-sizing: content-box（默认）与border-box的区别

---

### Q50: 如何实现垂直水平居中布局？transform和translate的区别是什么？

**【核心解析】**
flex布局（justify-content: center; align-items: center）；绝对定位+transform: translate(-50%, -50%)；transform是CSS属性，translate是transform的一个函数

---

### Q51: 请解释Flex布局及其换行属性。

**【核心解析】**
flex容器和项目；主轴和交叉轴；flex-wrap属性（nowrap/wrap/wrap-reverse）；align-items和justify-content；flex属性简写

---

### Q52: CSS有几种类型？请解释margin和padding的区别。

**【核心解析】**
CSS类型（内联、内部、外部）；margin与padding定义；区别（外边距与内边距、影响元素尺寸、合并等）

---

### Q53: 请解释CSS选择器类型及其权重。

**【核心解析】**
选择器类型（元素、类、ID、属性、伪类等）；权重计算规则；!important影响

---

### Q54: 请解释CSS盒模型的种类及其区别。

**【核心解析】**
标准盒模型（content-box）；IE盒模型（border-box）；区别（width包含内容还是边框内边距）

---

### Q55: 请解释事件委托（事件代理）是什么及其原理。

**【核心解析】**
事件委托定义；利用事件冒泡；优点（减少内存、动态元素处理）

---

### Q56: 块级元素和行内元素有什么区别？

**【核心解析】**
块级元素独占一行；行内元素不换行；块级可设置宽高；行内宽高由内容决定；行内可设置水平padding/margin

---

### Q57: 请详细解释Flex布局的核心属性及其常见应用场景。

**【核心解析】**
flex容器属性（flex-direction、justify-content、align-items、flex-wrap）；flex项目属性（flex、flex-grow、flex-shrink、flex-basis）；主轴与交叉轴概念；常见布局实现（居中、等分布局、圣杯布局）；与Grid布局的对比

---

### Q58: 什么是margin重叠问题？如何解决？原理是什么？

**【核心解析】**
相邻块级元素的垂直margin会合并；解决：触发BFC（overflow:hidden、display:flow-root等）、使用padding或border、使用flex/grid布局；原理是BFC隔离

---

### Q59: image标签是行内元素还是块级元素？

**【核心解析】**
行内替换元素；可设置宽高，默认宽高由内容决定；可设置display为block或inline-block

---

### Q60: 请讲两个实现div水平垂直居中的方法。

**【核心解析】**
flex布局：父元素display:flex; justify-content:center; align-items:center；绝对定位+transform：父relative，子absolute; top:50%; left:50%; transform:translate(-50%,-50%)；grid布局；table-cell

---

### Q61: 如何实现文本点开收起展开的效果？

**【核心解析】**
使用CSS控制高度或max-height，配合overflow:hidden；通过JS切换class或style；使用checkbox或details元素；使用transform不会触发重排

---

### Q62: flex属性的含义是什么？设置成100代表什么？

**【核心解析】**
flex是flex-grow、flex-shrink、flex-basis的缩写；flex:100相当于flex:1 1 100px（flex-basis:100px）；flex:1表示flex-grow:1，等分剩余空间

---

### Q63: 如何实现不同端的响应式布局？

**【核心解析】**
媒体查询；相对单位（rem/vw/vh）；Flex/Grid布局；移动端适配方案（rem/vw）；响应式图片

---

### Q64: 请解释CSS盒模型的两种类型及其区别。

**【核心解析】**
标准盒模型（content-box）；IE盒模型（border-box）；width/height包含范围；box-sizing属性；实际应用场景

---

### Q65: Flex布局的常用属性有哪些？请举例说明。

**【核心解析】**
容器属性（flex-direction, justify-content, align-items, flex-wrap）；项目属性（flex-grow, flex-shrink, flex-basis, align-self）；主轴与交叉轴；flex简写；常见布局场景

---

### Q66: CSS中的伪类和伪元素有什么区别？

**【核心解析】**
伪类（:hover, :focus）表示状态；伪元素（::before, ::after）表示元素的一部分；单冒号与双冒号规范；伪元素可创建内容；伪类基于DOM结构

---

### Q67: 请解释Flex弹性布局的核心属性和概念。

**【核心解析】**
主轴和交叉轴；容器属性（flex-direction, justify-content, align-items, flex-wrap）；项目属性（flex, align-self, order）；flex:1的含义；flex-basis, flex-grow, flex-shrink

---

### Q68: 常见的CSS布局方式有哪些？

**【核心解析】**
普通流（块级/行内）；浮动布局；定位布局（relative/absolute/fixed）；Flex布局；Grid布局；多列布局

---

### Q69: 请介绍Flex布局的排列方式。

**【核心解析】**
flex-direction控制主轴方向；justify-content控制主轴对齐；align-items控制交叉轴对齐；flex-wrap控制换行；align-content控制多行对齐；order控制顺序

---

### Q70: 两个div，A包含B，给B设置margin-top:10px，展示效果是什么？如何解决？

**【核心解析】**
父元素A会与子元素B一起下移（外边距折叠）；原因：块级元素垂直方向外边距合并；解决方案：给父元素设置overflow:hidden、border、padding或触发BFC

---

### Q71: Flex 0 拆分出来有哪些值？

**【核心解析】**
flex-grow、flex-shrink、flex-basis；flex: 0 等价于 flex: 0 1 0%；flex: 0 1 auto 是默认值；flex: 0 0 auto 表示不伸缩

---

### Q72: 在组件中如何设置子组件的样式？如何修改第三方组件的样式？

**【核心解析】**
CSS Modules 或 scoped；:deep() 穿透（Vue）；覆盖类名；!important；使用全局样式或自定义属性

---

### Q73: 介绍一下 CSS 中的 Flex 布局，如何实现一个垂直居中且两端对齐的容器？

**【核心解析】**
display: flex；主轴（justify-content）和交叉轴（align-items）；垂直居中：align-items: center；两端对齐：justify-content: space-between；容器需有高度

---

### Q74: 聊一下你认知中的CSS移动端适配手段？

**【核心解析】**
视口meta标签；rem/vw/vh布局；媒体查询；Flex/Grid；图片适配（srcset）；1px问题；安全区域适配

---

### Q75: Flex布局的原理和常用属性？

**【核心解析】**
主轴/交叉轴；flex-direction；justify-content；align-items；flex-wrap；flex-grow/shrink/basis；order

---

### Q76: Flex布局中父容器属性和子元素属性分别有哪些？

**【核心解析】**
父容器属性：flex-direction、flex-wrap、justify-content、align-items、align-content；子元素属性：flex、flex-grow、flex-shrink、flex-basis、align-self、order

---

### Q77: flex:auto代表的是什么意思？

**【核心解析】**
flex属性是flex-grow、flex-shrink、flex-basis的简写；flex:auto等价于flex:1 1 auto；元素会根据剩余空间自动伸缩；与flex:1的区别在于flex-basis为auto而非0

---

### Q78: 介绍一下SCSS，在项目中起到什么作用？了解LESS吗？

**【核心解析】**
SCSS是CSS预处理器，提供变量、嵌套、混合、继承等特性；作用：提高CSS可维护性、复用性、模块化；LESS类似但语法不同（如@变量、&父选择器）

---

### Q79: H5和客户端的占比？H5怎么回退？H5兼容性问题？如何使用flex布局？

**【核心解析】**
H5占比通过埋点统计；回退方案：降级到静态页面或WebView降级；兼容性：使用polyfill、autoprefixer、条件注释；flex布局：display:flex，属性如justify-content、align-items

---

### Q80: 如何实现一个文本关键词高亮功能？即输入框输入关键词，文本中匹配的内容显示为红色高亮。

**【核心解析】**
使用正则表达式匹配关键词；通过innerHTML或replace替换为带span标签的HTML；注意转义特殊字符；考虑性能（大量文本时使用DocumentFragment或虚拟滚动）；处理边界情况（如重叠关键词）

---

### Q81: CSS中position属性有哪些取值？absolute是相对于什么进行定位的？

**【核心解析】**
static/relative/absolute/fixed/sticky；absolute相对于最近的非static定位祖先元素；若没有则相对于初始包含块（通常是视口）；fixed相对于视口；sticky基于滚动位置

---

### Q82: CSS中除了px还有哪些单位？

**【核心解析】**
相对单位：em/rem/vw/vh/vmin/vmax/%；绝对单位：pt/cm/mm/in；视口单位：vw/vh；百分比相对于父元素；em相对于父元素字体大小；rem相对于根元素字体大小

---

### Q83: flex布局常用属性有哪些？

**【核心解析】**
容器属性：flex-direction/flex-wrap/justify-content/align-items/align-content；项目属性：flex-grow/flex-shrink/flex-basis/align-self/order；flex:1是flex-grow:1的简写；flex-direction为row时垂直居中用align-items:center

---

### Q84: 平时用什么布局方式多？flex有哪些属性？flex-direction为row时要设置垂直居中怎么设置？flex=1什么意思？flex能设置为2吗？拆分的话是哪三个属性？

**【核心解析】**
常用flex/grid；flex属性：flex-grow/flex-shrink/flex-basis；垂直居中：align-items:center；flex:1是flex-grow:1 flex-shrink:1 flex-basis:0%；flex:2同理；可拆分为三个属性；flex-basis控制初始大小

---

### Q85: 动态主题如何实现？CSS变量除了主题颜色，对黑暗模式兼容怎么设计？Less的作用是什么？为什么选择Less？原子CSS和Less有什么区别？

**【核心解析】**
动态主题：使用CSS变量（--primary-color）和JavaScript切换；黑暗模式：通过媒体查询prefers-color-scheme或类名切换，CSS变量覆盖；Less：CSS预处理器，提供变量、嵌套、混合等；选择Less：成熟、社区支持好、功能丰富；原子CSS（如Tailwind）与Less区别：原子CSS是实用优先，Less是语义化样式

---

### Q86: 请解释Flexbox布局的基本原理及常用属性。如何实现子元素均匀分布且两端留间距？

**【核心解析】**
Flex容器与项目；主轴与交叉轴；常用属性（flex-direction、justify-content、align-items、flex-wrap）；均匀分布（justify-content: space-between或space-around）；两端留间距（padding或gap）

---

### Q87: 请解释BEM命名规范的应用场景、优缺点，以及团队如何保障规范执行。

**【核心解析】**
BEM（Block__Element--Modifier）；优点（可读性、避免样式冲突）；缺点（命名冗长）；保障措施（代码审查、lint工具、文档培训）

---

### Q88: 移动端适配的常见方案有哪些？请解释rpx单位及其原理。

**【核心解析】**
rem、vw/vh、flexible方案；rpx（微信小程序，按屏幕宽度自适应，1rpx=1/750屏幕宽度）；媒体查询；viewport设置

---

### Q89: CSS中:hover伪类前面是一个冒号还是两个冒号？class属性写法是点还是井号？

**【核心解析】**
:hover是单冒号伪类；::before是双冒号伪元素；class选择器用点（.）；id选择器用井号（#）

---

### Q90: 什么是BFC？有哪些应用场景？

**【核心解析】**
BFC（块级格式化上下文）定义；触发条件（overflow不为visible、float、position绝对/固定、display:inline-block等）；应用：清除浮动、防止margin重叠、自适应两栏布局

---

### Q91: flex布局常用属性有哪些？如果子元素宽度超出父容器怎么处理？

**【核心解析】**
容器属性：flex-direction、flex-wrap、justify-content、align-items、align-content；项目属性：flex、flex-grow、flex-shrink、flex-basis；超出处理：flex-wrap:wrap；设置overflow:hidden；min-width:0

---

### Q92: 请解释CSS盒模型。

**【核心解析】**
content、padding、border、margin；标准盒模型（box-sizing: content-box）和IE盒模型（box-sizing: border-box）的区别；width和height的计算方式

---

### Q93: 请列举CSS水平垂直居中的方法，并说明响应式布局的实现方式。

**【核心解析】**
flex布局（justify-content、align-items）；grid布局；绝对定位+transform；margin: auto；响应式布局：媒体查询、百分比、rem/vw/vh、flex/grid

---

### Q94: 请解释HTML4和HTML5的主要区别。

**【核心解析】**
新增语义化标签（header、nav、section等）；多媒体标签（audio、video）；Canvas与SVG；表单新类型；Web Storage、WebSocket等API

---

### Q95: 请解释CSS盒模型，包括标准盒模型和IE盒模型的区别。

**【核心解析】**
content、padding、border、margin；box-sizing: content-box（标准） vs border-box（IE）；width/height包含范围不同

---

### Q96: 请列举CSS新特性，如content属性、动画等。

**【核心解析】**
content（伪元素内容）；animation（关键帧动画）；transition（过渡）；transform（变换）；flex/grid布局；自定义属性（CSS变量）

---

### Q97: 请解释CSS选择器的优先级规则。

**【核心解析】**
!important最高；内联样式；ID选择器；类/属性/伪类选择器；元素/伪元素选择器；通配符；继承

---

### Q98: 请简单说一下盒模型的参数，以及box-sizing属性的作用。

**【核心解析】**
content-box：width只包含内容；border-box：width包含padding和border；box-sizing属性值；标准盒模型和IE盒模型；margin合并

---

### Q99: 请口述三栏布局的实现方式，并解释BFC的作用和场景。

**【核心解析】**
flex布局；grid布局；float+margin；BFC定义；触发条件：overflow, float, position等；BFC解决margin重叠、清除浮动、自适应布局

---

### Q100: 请解释CSS中position属性的取值及absolute和relative的区别？

**【核心解析】**
static, relative, absolute, fixed, sticky；relative相对于自身原位置偏移；absolute相对于最近的非static定位祖先；脱离文档流；影响布局；z-index

---

