# Framework_Spring 面试专题手册

> 💡 本章节共收录 1684 道面试真题，建议每天复习 10-20 题。

---
### Q1: Spring和Spring Boot有什么区别？Spring Boot如何实现开箱即用？

**【核心解析】**
Spring Boot是Spring框架的扩展，简化了配置和部署；区别包括自动配置、起步依赖、嵌入式服务器、无需XML配置；开箱即用通过@EnableAutoConfiguration和spring.factories实现；Spring Boot集成了大量常用框架，如数据访问、消息队列等。

---

### Q2: 说一下AOP原理，动态代理和反射有什么区别？

**【核心解析】**
AOP原理：通过动态代理在运行时织入切面逻辑；动态代理：JDK动态代理（基于接口）和CGLIB（基于子类）；反射：运行时获取类信息并操作对象；区别：动态代理是代理模式实现，反射是底层机制；动态代理用于AOP，反射用于框架如Spring。

---

### Q3: @Transactional注解在什么情况下会失效？

**【核心解析】**
非public方法；自调用（同一类中方法调用）；异常类型不匹配（默认只回滚RuntimeException）；异常被捕获未抛出；传播属性设置不当；数据源未配置事务管理器。

---

### Q4: Spring Bean的作用域有哪些？如何动态加载Bean？声明式事务失效有哪些情况？

**【核心解析】**
Bean作用域：singleton、prototype、request、session、application；动态加载Bean：使用BeanDefinitionRegistryPostProcessor或@Import注解；事务失效情况：方法非public、自调用、异常类型不匹配、传播行为设置错误、数据源未配置事务管理器。

---

### Q5: 在Spring Boot启动完成后，如何实现缓存预热？如何监听容器启动完成事件？

**【核心解析】**
实现方式：实现ApplicationRunner或CommandLineRunner接口，在run方法中执行预热逻辑；或使用@EventListener监听ApplicationReadyEvent；预热内容：加载热点数据到Redis、初始化本地缓存等。

---

### Q6: Spring 有哪些扩展机制？

**【核心解析】**
BeanFactoryPostProcessor 和 BeanPostProcessor；ApplicationContext 事件机制；AOP 切面编程；自定义注解和元注解；Spring SPI 机制；@Import 和 ImportBeanDefinitionRegistrar。

---

### Q7: 介绍一下Spring。

**【核心解析】**
Spring是轻量级Java框架，核心IoC和AOP；简化企业级开发，提供依赖注入、事务管理等功能。

---

### Q8: Spring Bean的生命周期是什么？

**【核心解析】**
实例化→属性赋值→初始化（afterPropertiesSet、init-method）→使用→销毁（destroy-method）。

---

### Q9: 请解释Spring AOP支持的两种动态代理机制（JDK动态代理和CGLIB代理）及其默认选择。

**【核心解析】**
JDK动态代理：基于接口，使用Proxy和InvocationHandler；CGLIB代理：基于子类，使用Enhancer和MethodInterceptor；默认：若目标类实现接口则用JDK，否则用CGLIB。

---

### Q10: 请说明Spring Bean的作用域（singleton、prototype、request、session、application、websocket）及其使用场景。

**【核心解析】**
singleton：单例，默认；prototype：每次获取创建新实例；request：每个HTTP请求一个实例；session：每个HTTP会话一个实例；application：ServletContext生命周期；websocket：每个WebSocket会话一个实例。

---

### Q11: 请列举Spring事务失效的常见情况及其解决方法。

**【核心解析】**
数据库引擎不支持事务（如MyISAM）；方法非public；自调用（同一类中方法调用，AOP代理失效）；异常类型不匹配（默认只回滚RuntimeException和Error）；异常被捕获未抛出；传播行为设置不当；事务与锁顺序问题（先加锁后事务可能导致死锁）。

---

### Q12: Spring AOP的原理是什么？有哪些应用场景？

**【核心解析】**
AOP通过动态代理实现，JDK动态代理基于接口，CGLIB基于子类；切面用于日志、事务、权限等横切关注点；常用注解@Aspect、@Before、@After、@Around

---

### Q13: Spring依赖注入的实例化加载机制是怎样的？@Autowired注解的工作过程是什么？

**【核心解析】**
Spring容器启动时通过BeanDefinition加载Bean；依赖注入发生在Bean实例化后；@Autowired通过AutowiredAnnotationBeanPostProcessor处理；先按类型注入，再按名称；支持构造器、setter、字段注入

---

### Q14: 在接口调试中，如何通过拦截器和JWT保证用户权限？token存放在HTTP请求的哪个位置？后端如何获取？

**【核心解析】**
拦截器实现权限校验；JWT生成与验证流程；token通常放在Authorization头中；后端通过HttpServletRequest获取Header

---

### Q15: 怎么理解Spring Boot Starter？

**【核心解析】**
Starter是Spring Boot的自动配置模块；封装了依赖和自动配置；通过@EnableAutoConfiguration和spring.factories实现；简化项目搭建，遵循约定优于配置

---

### Q16: 了解 Spring 事务吗？

**【核心解析】**
Spring 事务管理基于 AOP，支持声明式和编程式事务；事务传播行为（REQUIRED、REQUIRES_NEW 等）；隔离级别（READ_UNCOMMITTED 等）；回滚规则；@Transactional 注解使用；事务失效场景（自调用、非 public 方法等）。

---

### Q17: Spring中哪里体现了反射的思想？

**【核心解析】**
IoC容器通过反射创建Bean实例；依赖注入通过反射设置属性或调用setter；AOP通过反射生成代理对象；@Autowired等注解通过反射解析；Spring MVC通过反射调用Controller方法

---

### Q18: MyBatis和MyBatis-Plus的区别？在Plus中，单表查询应用主键需要加什么注解？模糊查询使用什么关键字，参数怎么写？XML中多表查询resultType和resultMap的区别？

**【核心解析】**
MyBatis-Plus增强MyBatis，提供CRUD、分页、条件构造器；主键注解@TableId；模糊查询使用LIKE，参数用#{}或${}；resultType直接映射到类，resultMap自定义映射；resultMap支持复杂映射和关联

---

### Q19: Spring Bean的生命周期分为几个阶段？Bean管理操作有哪些方式？实际开发中四个层的注解有什么区别？

**【核心解析】**
生命周期：实例化、属性赋值、初始化、使用、销毁；Bean管理：XML、注解、JavaConfig；四层注解：@Controller（控制层）、@Service（业务层）、@Repository（持久层）、@Component（通用）；作用：分层职责

---

### Q20: 控制反转（IoC）有了解吗？Spring中有多少种IoC容器？

**【核心解析】**
IoC：控制权反转，由容器管理对象依赖；容器类型：BeanFactory（基础）、ApplicationContext（高级，含事件、国际化等）；常见实现：ClassPathXmlApplicationContext、AnnotationConfigApplicationContext

---

### Q21: AOP动态代理有几种方式，分别是什么？

**【核心解析】**
两种：JDK动态代理（基于接口）和CGLIB（基于子类）；JDK要求目标类实现接口，CGLIB通过字节码生成子类；Spring AOP默认使用JDK，若未实现接口则用CGLIB

---

### Q22: Mybatis 中如何防止 SQL 注入的？

**【核心解析】**
使用 #{} 占位符，MyBatis 会将其替换为 ? 并预编译，参数值通过 setString 等设置，避免拼接 SQL；${} 直接拼接字符串，存在注入风险，仅用于表名、列名等动态部分；建议尽量使用 #{}，避免使用 ${}。

---

### Q23: 当时为什么选择这个框架？

**【核心解析】**
框架的优缺点；技术选型考虑因素（项目需求、团队技术栈、社区活跃度、性能、可维护性）；对比其他框架；个人经验。

---

### Q24: 请解释Spring IOC是什么，它解决了什么问题？

**【核心解析】**
IOC（控制反转）将对象创建和依赖管理交给容器；解决耦合问题，提高可测试性和可维护性；通过DI（依赖注入）实现。

---

### Q25: Spring事务在哪些情况下不会回滚？private方法上的事务注解是否会生效？

**【核心解析】**
非public方法上@Transactional不生效；异常被捕获未抛出；异常类型不是RuntimeException或Error（默认不回滚）；事务传播行为设置不当；数据库引擎不支持事务（如MyISAM）；private方法事务不生效，因为Spring AOP默认使用JDK动态代理，只能拦截public方法。

---

### Q26: Spring如何开启事务？

**【核心解析】**
使用@Transactional注解（声明式事务）；配置事务管理器（如DataSourceTransactionManager）；在配置类上添加@EnableTransactionManagement；编程式事务使用TransactionTemplate。

---

### Q27: 什么情况会导致事务失效？

**【核心解析】**
数据库引擎不支持事务（如MyISAM）；方法未被Spring代理（如private方法、内部调用）；异常类型不匹配（默认只回滚RuntimeException和Error）；传播行为设置不当；多线程环境下事务隔离。

---

### Q28: Spring怎么解决Bean对象循环依赖的？

**【核心解析】**
三级缓存：singletonObjects、earlySingletonObjects、singletonFactories；通过提前暴露半成品对象解决。

---

### Q29: Spring Boot最核心的作用是什么？

**【核心解析】**
自动配置（Auto-Configuration），简化Spring应用搭建；内嵌Servlet容器（如Tomcat），无需部署WAR；提供起步依赖（Starter），统一管理依赖版本；通过@EnableAutoConfiguration和条件注解实现按需配置；生产就绪特性（健康检查、指标等）。

---

### Q30: Spring AOP的底层原理是什么？JDK动态代理和CGLIB有什么区别？

**【核心解析】**
Spring AOP基于动态代理，在目标对象外生成代理对象，在方法前后增强；常见场景：事务、日志、权限校验；JDK动态代理基于接口，目标类必须实现接口；CGLIB基于继承，不要求接口；若类无接口，Spring默认用CGLIB；区别：JDK代理靠接口，CGLIB靠继承。

---

### Q31: Spring Boot自动配置的原理是什么？

**【核心解析】**
核心是@EnableAutoConfiguration注解；通过META-INF/spring.factories加载自动配置类；条件注解（@Conditional）控制配置生效；自动配置类通过@Bean创建默认组件；用户可通过自定义配置覆盖。

---

### Q32: Spring Boot启动流程是怎样的？

**【核心解析】**
加载配置类；创建SpringApplication实例；运行run方法；创建ApplicationContext；自动配置；启动内嵌Web服务器

---

### Q33: Spring拦截器实现原理是什么？

**【核心解析】**
基于AOP和HandlerInterceptor接口；preHandle在请求处理前执行，postHandle在请求处理后视图渲染前执行，afterCompletion在请求完成后执行；通过HandlerExecutionChain链式调用

---

### Q34: Spring AOP和IoC是什么？AOP默认使用哪个动态代理？CGLIB动态代理实现原理？

**【核心解析】**
IoC：控制反转，由容器管理对象生命周期和依赖；AOP：面向切面编程，通过代理实现横切关注点；默认使用JDK动态代理（基于接口）或CGLIB（基于类）；CGLIB通过继承目标类生成子类，重写方法实现增强

---

### Q35: Spring Boot Starter是什么？自己写过Starter吗？

**【核心解析】**
Starter是一组依赖描述，简化配置；通过自动配置类实现；自定义Starter需创建自动配置类、spring.factories文件

---

### Q36: @RestController和@Controller的区别是什么？

**【核心解析】**
@Controller返回视图，@RestController返回JSON；@RestController是@Controller和@ResponseBody的组合

---

### Q37: 请描述Spring IOC容器的启动和Bean创建流程。

**【核心解析】**
读取配置：解析XML、注解、Java Config等，生成BeanDefinition；实例化Bean：根据BeanDefinition反射创建对象（构造器注入时选择构造方法）；属性注入：注入依赖对象（@Autowired、@Resource等）；Aware回调：实现BeanNameAware等接口时回调；BeanPostProcessor前置处理：postProcessBeforeInitialization()；初始化：执行InitializingBean.afterPropertiesSet()或自定义init-method；BeanPostProcessor后置处理：postProcessAfterInitialization()（AOP代理在此生成）；放入单例池：单例Bean放入缓存复用。

---

### Q38: Spring事务底层是如何实现的？

**【核心解析】**
Spring事务基于AOP实现，通过代理对象拦截事务方法；使用TransactionInterceptor或TransactionAspectSupport；解析@Transactional注解属性（传播行为、隔离级别等）；获取或创建数据库连接，设置自动提交为false；执行目标方法，若成功则提交事务，若抛出异常则回滚；事务管理器（如DataSourceTransactionManager）管理连接和事务状态；支持编程式事务（TransactionTemplate）和声明式事务（@Transactional）。

---

### Q39: Spring 事务失效的场景有哪些？如何避免？

**【核心解析】**
同类自调用（非代理调用）；方法非 public；异常被捕获未抛出；抛出的不是默认回滚异常（RuntimeException/Error）；对象未被 Spring 管理；通过 AOP 代理实现，需确保调用走代理

---

### Q40: Mybatis 中工程操作上要对主从操作有什么适配呢？

**【核心解析】**
配置多数据源；使用 AbstractRoutingDataSource 动态切换；读写分离：读走从库，写走主库；事务内强制使用主库；考虑主从延迟；通过注解或 AOP 实现；注意连接池配置。

---

### Q41: 请解释 @Autowired 注解的原理，以及它和构造器注入的区别。

**【核心解析】**
@Autowired 通过后置处理器解析依赖；默认按类型注入，可配合 @Qualifier 按名称；构造器注入更推荐，保证不可变性和测试性；@Autowired 可作用于字段、setter、构造器；Spring 4.3+ 单构造器可省略 @Autowired。

---

### Q42: Qt 信号槽机制的底层实现原理是什么？

**【核心解析】**
依赖元对象系统；类声明Q_OBJECT后MOC生成元信息代码；连接记录发送者、信号、接收者和槽信息；信号触发通过QMetaObject::activate分发；同线程直接连接时槽函数同步执行；跨线程队列连接将调用打包为事件投递到接收对象线程的事件循环；不是简单的函数指针绑定，而是对象系统、元信息和事件机制共同工作。

---

### Q43: AOP在项目中有哪些应用？Bean的生命周期在项目中有用到吗？

**【核心解析】**
AOP应用：日志记录、权限校验、事务管理、性能监控、异常处理；通过切面实现横切关注点；Bean生命周期：实例化、属性赋值、初始化（afterPropertiesSet、init-method）、使用、销毁（DisposableBean、destroy-method）；项目中可通过BeanPostProcessor扩展点实现自定义逻辑，如代理创建、属性注入。

---

### Q44: 你平常怎么使用MyBatis Plus？

**【核心解析】**
使用BaseMapper提供CRUD方法；条件构造器QueryWrapper/LambdaQueryWrapper；分页插件；代码生成器；逻辑删除；自动填充

---

### Q45: 项目中使用Web框架加WebSocket做什么？请结合具体场景说明。

**【核心解析】**
WebSocket实现全双工通信，适用于实时推送（如聊天、通知、实时数据更新）；结合Web框架（如Spring Boot）管理会话、处理消息；注意心跳、重连、安全性。

---

### Q46: Spring中为什么加了@Transactional注解就能实现事务管理？

**【核心解析】**
AOP代理：@Transactional通过Spring AOP生成代理对象；事务拦截器：TransactionInterceptor在方法前后开启、提交或回滚事务；事务管理器：PlatformTransactionManager管理数据库连接和事务状态；默认传播行为：REQUIRED

---

### Q47: Spring Bean 的作用域有哪些？如何决定使用单例还是原型？

**【核心解析】**
常见作用域：singleton、prototype、request、session、application；单例：默认，适合无状态 Bean；原型：每次获取创建新实例，适合有状态 Bean；Web 作用域用于 Web 应用；选择依据：是否线程安全、是否需要共享状态

---

### Q48: Spring 事务注解 @Transactional 使用时需要注意什么？

**【核心解析】**
默认只回滚 RuntimeException 和 Error；需指定 rollbackFor 处理 checked 异常；事务传播行为（如 REQUIRED、REQUIRES_NEW）；隔离级别；只读事务优化；自调用失效：需通过代理对象调用；方法必须 public

---

### Q49: Spring中@Transactional注解实现事务的底层原理是什么？

**【核心解析】**
通过AOP代理实现；解析@Transactional属性；获取或创建事务；设置事务隔离级别、传播行为等；执行目标方法；提交或回滚事务

---

### Q50: 网关（Gateway）的鉴权是如何实现的？

**【核心解析】**
通过全局过滤器实现；在过滤器中解析JWT Token；校验Token合法性及权限；可结合Spring Security；支持白名单路径跳过鉴权；鉴权失败返回401状态码；可集成OAuth2等协议。

---

### Q51: MyBatis的切面操作能做什么？请举例说明。

**【核心解析】**
MyBatis支持通过拦截器实现切面；可拦截Executor、StatementHandler等；常见用途：分页插件、慢SQL监控、数据权限过滤；通过@Intercepts注解定义拦截点；可修改SQL语句或参数；需实现Interceptor接口；注意性能影响

---

### Q52: Qt信号槽的本质是什么？

**【核心解析】**
信号槽不是简单的回调语法糖；依赖对象系统、事件分发和线程模型；队列连接时，调用被包装成事件投递到目标线程事件循环；支持跨线程通信；自动管理连接生命周期

---

### Q53: 请求从接收到处理到数据库，会用到哪些Spring注解？

**【核心解析】**
@Controller/@RestController；@RequestMapping；@RequestParam/@PathVariable；@RequestBody；@Service；@Repository/@Mapper；@Autowired/@Resource；@Transactional。

---

### Q54: Spring 事务中 try catch 捕获到异常还会回滚吗？

**【核心解析】**
默认只回滚RuntimeException和Error；若捕获异常未抛出，不回滚；可配置rollbackFor指定异常

---

### Q55: 你项目中使用了LangChain和LangGraph，请介绍它们以及二者的关系。另外，你知道它们在Java端的适配版本吗？

**【核心解析】**
LangChain是一个用于构建LLM应用的框架，提供链式调用、工具集成等；LangGraph是LangChain的扩展，用于构建有状态、多步骤的图结构工作流；LangGraph基于LangChain的组件，支持循环和条件分支；Java端有LangChain4j和LangGraph4j等适配版本。

---

### Q56: Spring Boot版本选择有什么考虑？

**【核心解析】**
考虑兼容性、稳定性、新特性；通常选择最新稳定版；注意依赖版本匹配。

---

### Q57: Spring中哪个注解可以实现配置热更新？

**【核心解析】**
@RefreshScope注解；配合Spring Cloud Config或Nacos等配置中心；动态刷新Bean的属性；作用域为refresh；需要配置中心支持刷新

---

### Q58: Spring中事务相关注解有哪些？使用时需要注意什么？

**【核心解析】**
@Transactional注解；事务传播行为（REQUIRED、REQUIRES_NEW等）；隔离级别；回滚规则（rollbackFor）；自调用失效问题；代理机制（JDK动态代理/CGLIB）；只读事务优化

---

### Q59: Spring AI Alibaba与LangChain4j、Spring AI有什么区别？为什么选择Spring AI Alibaba？

**【核心解析】**
Spring AI Alibaba是阿里云提供的AI集成框架；LangChain4j是LangChain的Java实现；Spring AI是Spring官方AI项目；选择原因：与阿里云服务集成好、中文支持、社区活跃；对比：生态、功能侧重、易用性

---

### Q60: Spring和SpringBoot的关系是什么？

**【核心解析】**
SpringBoot基于Spring框架，简化配置，提供自动配置、起步依赖、嵌入式服务器等；SpringBoot是Spring的扩展，旨在快速开发微服务

---

### Q61: @Transactional注解什么情况会失效？如何应对？

**【核心解析】**
失效情况：非public方法、自调用（同一类中方法调用）、异常类型不匹配（默认只回滚RuntimeException）、传播属性设置不当、数据源未配置事务管理器；应对：确保public、使用代理调用、指定rollbackFor、正确配置事务管理器

---

### Q62: Spring中如何将一个对象添加到IoC容器？

**【核心解析】**
使用@Component及其派生注解（@Service、@Repository等）；使用@Bean注解在配置类中声明；使用XML配置 `<bean>`；使用@Import注解导入；使用FactoryBean或BeanPostProcessor；自动装配：@Autowired、@Resource。

---

### Q63: Spring动态代理默认使用哪种方式？还有哪些其他选择？

**【核心解析】**
默认：JDK动态代理（基于接口）；其他选择：CGLIB（基于类继承），当目标类没有接口时使用；Spring Boot 2.0+默认使用CGLIB；性能：JDK代理在JDK8+后性能优于CGLIB。

---

### Q64: JUnit单元测试中需要加什么注解？

**【核心解析】**
@Test标记测试方法；@Before/@BeforeEach初始化；@After/@AfterEach清理；@BeforeClass/@BeforeAll类级别初始化；@AfterClass/@AfterAll类级别清理；@RunWith指定运行器；@SpringBootTest集成测试

---

### Q65: Spring事务有几个隔离级别？

**【核心解析】**
使用@Transactional的isolation属性设置；对应数据库隔离级别：DEFAULT、READ_UNCOMMITTED、READ_COMMITTED、REPEATABLE_READ、SERIALIZABLE；DEFAULT使用数据库默认隔离级别；Spring事务隔离级别与数据库隔离级别对应

---

### Q66: 如果有一个方法，上有一个@Transactional注解，里面有一个子方法，也有@Transactional注解，那么这两个事务回滚会同时执行吗？

**【核心解析】**
取决于事务传播行为；默认REQUIRED会合并为一个事务，子方法异常导致整体回滚；REQUIRES_NEW会挂起外层事务，子方法独立事务，回滚不影响外层；NESTED使用保存点，子方法回滚仅回滚到保存点；外层方法捕获子方法异常可控制是否回滚

---

### Q67: 我有一个主方法，里面的每一个子方法都加上@Transactional注解，那么其中一个方法抛异常了，那么外面这个方法会回滚吗？

**【核心解析】**
如果主方法没有@Transactional，子方法各自独立事务，子方法异常仅回滚自身；如果主方法有@Transactional且传播行为为REQUIRED，子方法加入主事务，异常导致整体回滚；主方法可捕获异常避免回滚；默认运行时异常触发回滚，受检异常不触发

---

### Q68: Spring怎么解决循环依赖？

**【核心解析】**
三级缓存：singletonObjects（一级）、earlySingletonObjects（二级）、singletonFactories（三级）；A依赖B，B依赖A：创建A时提前暴露ObjectFactory到三级缓存，B创建时从三级缓存获取A的早期引用并放入二级缓存，A完成注入后放入一级缓存；仅支持单例setter注入，不支持构造器注入和prototype作用域。

---

### Q69: MyBatis动态SQL有哪些具体使用场景？如何帮助降低查询响应时间？

**【核心解析】**
动态SQL用于根据条件拼接查询语句，避免大量if-else；场景包括多条件组合查询、批量操作、动态更新字段；通过减少不必要的数据传输和数据库计算，降低响应时间；例如使用 `<where>` 标签自动处理AND/OR，使用 `<foreach>` 实现批量插入。

---

### Q70: 请描述Spring Boot Bean的生命周期。

**【核心解析】**
实例化；属性赋值；初始化（如BeanPostProcessor前置处理、@PostConstruct、InitializingBean、init-method）；使用；销毁（@PreDestroy、DisposableBean、destroy-method）。

---

### Q71: Spring的IoC容器启动流程是怎样的？

**【核心解析】**
加载配置（XML/注解/Java Config）；解析Bean定义并注册；实例化Bean（通过反射）；依赖注入（属性填充）；初始化（BeanPostProcessor前置/后置处理、InitializingBean、init-method）

---

### Q72: @Autowired和@Resource的区别是什么？

**【核心解析】**
@Autowired按类型注入，可配合@Qualifier按名称；@Resource默认按名称注入，可通过name属性指定，属于JSR-250规范

---

### Q73: MyBatis底层是如何防止SQL注入的？以及MyBatis Plus进行数据分页查询时，物理分页底层是如何实现的？

**【核心解析】**
SQL注入防护：MyBatis使用预编译语句（PreparedStatement），参数通过占位符?传递，由数据库驱动进行转义，避免拼接SQL；分页实现：MyBatis Plus的物理分页通过拦截器（PaginationInterceptor）在SQL执行前动态拼接分页方言（如MySQL的LIMIT），生成带分页参数的SQL，避免内存分页。

---

### Q74: 除了MyBatis Plus，你平时还会去主动研究哪些主流框架的底层源码？

**【核心解析】**
Spring框架（IoC、AOP、事务管理）；Spring Boot自动配置原理；Netty（Reactor模型、ChannelPipeline）；Redis客户端（Jedis、Lettuce）；消息队列（RabbitMQ、Kafka）客户端实现；分布式锁组件（Redisson）源码。

---

### Q75: 项目里 @Transaction 注解失效过吗？请结合实际场景说明原因和解决方案。

**【核心解析】**
失效过，最典型的是同类内部方法调用导致事务不生效；原因：Spring事务基于动态代理，必须走代理对象调用事务方法才有效，内部直接调用不走代理；解决方案：将事务方法抽到另一个Service中，注入后调用。

---

### Q76: 请深入讲解一下Spring的IOC容器是如何管理Bean的生命周期的。

**【核心解析】**
实例化Bean；设置属性依赖注入；调用BeanNameAware等Aware接口；执行BeanPostProcessor的前置处理；调用InitializingBean的afterPropertiesSet或自定义init方法；执行BeanPostProcessor的后置处理；Bean就绪；容器关闭时调用DisposableBean的destroy或自定义destroy方法

---

### Q77: 在处理系统中大量重复的公共字段（如创建时间、更新人）时，你是如何利用自定义注解结合Spring AOP和反射机制，实现无侵入式自动填充的？

**【核心解析】**
定义@AutoFill注解标记需要填充的字段；使用AOP切面拦截Mapper或Service方法；通过反射获取目标对象字段；根据注解属性设置创建时间、更新人等；支持插入与更新场景区分；避免反射性能开销（如缓存字段信息）；结合MyBatis拦截器或JPA监听器实现

---

### Q78: Spring Boot Starter的原理是什么？

**【核心解析】**
自动配置基于@EnableAutoConfiguration注解；通过spring.factories文件加载自动配置类；条件注解@Conditional控制配置生效；Starter封装依赖和自动配置；简化项目搭建

---

### Q79: Spring 中 @Transactional 注解的 propagation 属性有哪些常用传播行为？最常用的是哪一个？

**【核心解析】**
常用传播行为包括 REQUIRED（默认）、REQUIRES_NEW、SUPPORTS、NOT_SUPPORTED、MANDATORY、NEVER、NESTED；最常用的是 REQUIRED，表示如果当前存在事务则加入，否则新建事务；REQUIRES_NEW 用于需要独立事务的场景，如日志记录；NESTED 利用保存点实现部分回滚。

---

### Q80: 在RBAC权限模型中，如何实现功能权限与数据权限的隔离设计？

**【核心解析】**
功能权限控制用户能做什么（如菜单、按钮、接口），基于RBAC模型（用户→角色→权限），通过注解（如@PreAuthorize）在接口入口拦截校验；数据权限控制接口返回哪些数据，在SQL层面动态拼接过滤条件（如WHERE user_id IN deptIds），通过MyBatis拦截器或自定义注解实现；隔离点：功能权限在接口入口校验，不通过直接返回；数据权限在数据查询阶段过滤，不影响功能访问但限制数据范围；示例：用户有订单查询功能权限后，通过@DataPermission注解根据角色动态拼接订单表过滤条件。

---

### Q81: Spring 定时任务（@Scheduled）的实现原理，以及 ScheduledThreadPoolExecutor 的使用。

**【核心解析】**
@Scheduled 基于 Spring 的任务调度抽象，底层使用 ThreadPoolTaskScheduler；ScheduledThreadPoolExecutor 是 Java 的定时线程池，支持延迟和周期任务；配置线程池大小避免任务阻塞。

---

### Q82: MyBatis 中 @Param 注解的作用，以及 XML 映射文件中的常用语法（如动态 SQL、结果映射）。

**【核心解析】**
@Param 用于为 SQL 参数命名，支持多参数传递；XML 语法包括 `<select>`/`<insert>`/`<update>`/`<delete>`、`<resultMap>` 映射、动态 SQL 标签（`<if>`, `<where>`, `<foreach>`, `<choose>`）、#{} 和 ${} 占位符。

---

### Q83: Spring中事务相关的配置有哪些？@Transactional注解通常设置哪些属性？事务的传播机制有哪些？

**【核心解析】**
配置：事务管理器、@EnableTransactionManagement；@Transactional属性：propagation、isolation、timeout、readOnly、rollbackFor；传播机制：REQUIRED、SUPPORTS、MANDATORY、REQUIRES_NEW、NOT_SUPPORTED、NEVER、NESTED。

---

### Q84: 请解释Spring事务的隔离级别，并说明READ_COMMITTED解决了什么问题。

**【核心解析】**
四大隔离级别：READ_UNCOMMITTED、READ_COMMITTED、REPEATABLE_READ、SERIALIZABLE；READ_COMMITTED解决脏读问题，即事务A修改数据未提交时，事务B无法读到中间状态；脏读示例：余额扣减中读到负数；项目配置：@Transactional(isolation = Isolation.READ_COMMITTED, rollbackFor = Exception.class)；选型逻辑：金融类用REPEATABLE_READ，普通业务用READ_COMMITTED，避免SERIALIZABLE；InnoDB默认REPEATABLE_READ，通过间隙锁防止幻读。

---

### Q85: 请列举Spring中常用的注解及其作用。

**【核心解析】**
@Component、@Service、@Repository、@Controller用于声明Bean；@Autowired、@Resource用于依赖注入；@Configuration、@Bean用于Java配置；@Transactional用于声明式事务；@RequestMapping、@GetMapping等用于映射请求。

---

### Q86: 请阐述 Spring 中 Bean 的完整生命周期，以 AnnotationConfigApplicationContext 为例，并说明 BeanPostProcessor 在项目中的应用。

**【核心解析】**
实例化（InstantiationAwareBeanPostProcessor.postProcessBeforeInstantiation）；属性注入（@Autowired处理）；Aware接口回调（BeanNameAware等）；关键扩展点：BeanPostProcessor.postProcessBeforeInitialization → @PostConstruct → InitializingBean.afterPropertiesSet → init-method；AOP代理生成（若需）；BeanPostProcessor.postProcessAfterInitialization；使用中；销毁：@PreDestroy → DisposableBean.destroy → destroy-method；项目应用：在日志组件中，通过BeanPostProcessor在初始化前后注入TraceID，实现全链路追踪

---

### Q87: Spring 支持哪些 Bean 注入方式？并分析 @Autowired 和 @Resource 注解的优劣与适用场景。

**【核心解析】**
注入方式共4类：构造器注入（强依赖首选）、Setter注入（可选依赖）、字段注入（简洁但不利于测试）、方法注入（@Bean方法参数）；项目实践：Service层用构造器注入，Controller层用字段注入，配置类用@Bean方法注入；@Autowired（Spring）匹配规则byType→@Qualifier指定，适用纯Spring生态；@Resource（JSR-250）匹配规则byName优先→byType，适用整合非Spring Bean；团队规范统一使用@Autowired+构造器注入，避免字段注入导致的循环依赖隐患

---

### Q88: 请说明 Spring 中 Bean 的作用域类型及其典型应用场景。

**【核心解析】**
singleton（单例，默认）：无状态服务Bean，如Service、DAO；prototype（原型）：有状态Bean，如用户会话对象；request（请求）：每次HTTP请求创建一个Bean，如请求上下文；session（会话）：每个HTTP会话创建一个Bean，如购物车；application（应用）：每个ServletContext创建一个Bean，如全局配置；websocket：每个WebSocket会话创建一个Bean

---

### Q89: 请介绍你的项目，并说明开发初衷与价值

**【核心解析】**
校园二手交易平台；解决信息杂乱和信任缺失问题；使用Spring Boot + MyBatis-Plus；Redis缓存热点数据提升QPS；RabbitMQ解耦通知模块；JWT+Redis实现登录态；3个月覆盖2000+用户，交易纠纷率下降60%

---

### Q90: MyBatis 中 #{} 和 ${} 的区别是什么？各自的使用场景和风险？

**【核心解析】**
#{} 是预编译占位符，生成 PreparedStatement，防 SQL 注入；${} 是字符串替换，直接拼接，有注入风险；99% 场景用 #{}；${} 仅用于动态表名、ORDER BY 等，且必须校验或白名单限制；示例：动态表名需白名单校验，ORDER BY 用枚举限制字段；血泪教训：${username} 注入导致数据泄露。

---

### Q91: MyBatis 的一级缓存和二级缓存的作用域、风险及项目中的使用策略？

**【核心解析】**
一级缓存作用域为 SqlSession，默认开启但 Spring Boot 中每次请求新建 SqlSession 实际失效；二级缓存作用域为 Mapper 级，跨 SqlSession，风险包括多表关联脏读和分布式不一致；项目决策：主动关闭二级缓存，用 Redis 替代，手动缓存热点数据，更新时同步删除缓存。

---

### Q92: Spring MVC 中 @RequestMapping 的常用方式有哪些？

**【核心解析】**
用于映射 HTTP 请求到处理方法；常用属性：value/path 指定 URL，method 指定请求类型（GET/POST 等），params/headers 限定参数或头；可组合使用 @GetMapping、@PostMapping 等；支持 Ant 风格路径和占位符；可指定 produces/consumes 限制内容类型。

---

### Q93: Spring Boot Starter的原理是什么？

**【核心解析】**
自动配置：基于@EnableAutoConfiguration和META-INF/spring.factories；条件注解：@ConditionalOnClass等；Starter封装依赖和自动配置，简化集成。

---

### Q94: 请列举Spring框架中常用的注解，并说明其作用。

**【核心解析】**
@Component/@Service/@Repository/@Controller：声明Bean；@Autowired/@Resource：依赖注入；@Configuration/@Bean：Java配置；@Transactional：声明式事务；@RequestMapping：映射请求

---

### Q95: 请解释Spring事务传播行为中的REQUIRED，包括其核心逻辑、使用场景，并对比其他常用传播行为（如REQUIRES_NEW、NESTED等）。

**【核心解析】**
REQUIRED核心逻辑：如果当前存在事务则加入，否则创建新事务；常用场景：订单创建→扣库存→记录日志等需要整体原子性的操作；对比REQUIRES_NEW：挂起当前事务，创建新事务独立执行；对比NESTED：利用保存点实现部分回滚；对比SUPPORTS：有事务则加入，无事务则以非事务方式执行；对比MANDATORY：强制要求存在事务，否则抛出异常；对比NOT_SUPPORTED：以非事务方式执行，挂起当前事务；对比NEVER：以非事务方式执行，若存在事务则抛出异常。

---

### Q96: MCP与传统的Function Calling在工具调用层面的主要区别和优势？

**【核心解析】**
MCP（Model Context Protocol）标准化工具调用，支持动态发现、上下文传递、多轮交互；Function Calling更简单但缺乏标准化。

---

### Q97: MCP与传统的Function Calling在工具调用层面，主要的区别和优势是什么？在各种框架里面为什么要用到反射？

**【核心解析】**
MCP（模型上下文协议）标准化工具调用，支持动态发现、上下文传递；Function Calling是特定API调用；反射优势：动态加载类、调用方法、获取信息，实现框架灵活性（如Spring IOC、AOP）。

---

### Q98: 在各种框架中为什么要使用反射？

**【核心解析】**
反射提供运行时动态获取类信息、调用方法、访问字段的能力；实现框架的通用性和灵活性，如Spring的IoC依赖注入、AOP动态代理；支持注解处理、动态配置；但反射性能较低，应避免在热点代码中使用。

---

### Q99: Spring与SpringBoot的区别是什么？SpringBoot自动装配原理是什么？Bean的生命周期是怎样的？如何避免循环依赖？

**【核心解析】**
SpringBoot基于Spring，简化配置，提供自动装配、内嵌服务器、starter依赖管理；自动装配通过@EnableAutoConfiguration和spring.factories文件加载自动配置类，配合@Conditional条件注解实现；Bean生命周期：实例化->属性赋值->初始化（@PostConstruct、InitializingBean）->使用->销毁（@PreDestroy、DisposableBean）；循环依赖通过三级缓存解决：singletonObjects（一级）、earlySingletonObjects（二级）、singletonFactories（三级），提前暴露未完全初始化的Bean。

---

### Q100: 对比 Spring 和 Spring Boot 的关系与启动原理。

**【核心解析】**
关系：Spring Boot基于Spring，简化配置，自动装配，内嵌服务器；启动原理：@SpringBootApplication组合注解，自动配置通过@EnableAutoConfiguration和spring.factories加载，启动流程包括加载配置、创建上下文、初始化Bean等。

---
