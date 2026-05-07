# Concurrency 面试专题手册

> 💡 本章节共收录 3870 道面试真题，建议每天复习 10-20 题。

---
### Q1: 请比较进程、线程和协程的区别、优缺点及应用场景。

**【核心解析】**
进程是资源分配最小单位，独立地址空间，切换开销大，适合隔离性要求高的场景；线程是CPU调度最小单位，共享进程资源，切换开销较小，适合I/O密集型任务；协程是用户态轻量级线程，由程序自身调度，切换开销极小，适合高并发异步编程。

---

### Q2: 线程池的参数有哪些？拒绝策略有哪些？

**【核心解析】**
核心线程数、最大线程数、空闲存活时间、工作队列、线程工厂、拒绝策略；AbortPolicy、CallerRunsPolicy、DiscardPolicy、DiscardOldestPolicy

---

### Q3: synchronized和ReentrantLock有什么区别？synchronized底层怎么实现的？ReentrantLock的源码有看过吗？

**【核心解析】**
synchronized是JVM内置锁，基于monitor对象，通过monitorenter/monitorexit指令实现，支持锁升级（偏向锁、轻量级锁、重量级锁）；ReentrantLock是JDK提供的API锁，基于AQS实现，支持公平/非公平、可中断、超时、条件变量等高级功能；synchronized自动释放锁，ReentrantLock需手动unlock；性能上两者在低竞争时接近，高竞争下ReentrantLock更灵活。

---

### Q4: 进程和线程的区别是什么？请从资源、调度、通信等方面说明。

**【核心解析】**
进程是资源分配的最小单位，线程是CPU调度的最小单位；进程间独立地址空间，线程共享进程资源；进程切换开销大，线程切换开销小；进程间通信需IPC（管道、消息队列等），线程间通信通过共享内存和同步机制。

---

### Q5: C++中的锁有哪些类型？读写锁（Read-Write Lock）如何使用？

**【核心解析】**
常见锁包括互斥锁（mutex）、读写锁（shared_mutex）、递归锁、自旋锁；读写锁允许多个读线程同时访问，写线程独占；C++17标准库提供std::shared_mutex；使用std::shared_lock读锁，std::unique_lock写锁。

---

### Q6: ConcurrentHashMap底层原理是什么？

**【核心解析】**
JDK1.7：分段锁（Segment数组，继承ReentrantLock）；JDK1.8：数组+链表/红黑树，使用CAS+synchronized；put操作先CAS尝试插入，失败则synchronized锁住头节点；提高并发度。

---

### Q7: 为什么ConcurrentHashMap既用CAS又用synchronized？

**【核心解析】**
CAS用于无竞争时的轻量级更新，避免锁开销；synchronized用于冲突时的重量级锁，保证线程安全；结合两者实现高效并发。

---

### Q8: 线程池底层实现原理是什么？

**【核心解析】**
核心参数：corePoolSize（核心线程数）、maximumPoolSize（最大线程数）、keepAliveTime（空闲存活时间）、workQueue（任务队列）；提交任务时，先判断核心线程是否满，再判断队列是否满，最后创建新线程；使用ThreadPoolExecutor实现。

---

### Q9: GMP模型

**【核心解析】**
G（Goroutine）、M（Machine，线程）、P（Processor，逻辑处理器）；P的数量决定并发度，默认等于CPU核数；M与P绑定，从P的本地队列获取G执行；全局队列用于负载均衡；系统调用时M会阻塞，P可解绑并绑定其他M；work stealing机制：空闲P从其他P偷取G。

---

### Q10: 配置完线程池后，线程会不会立刻创建？线程池的核心参数有哪些？在实际项目中如何设置线程池参数？遇到过哪些线程池的坑，如何排查和解决？

**【核心解析】**
线程池的创建时机：核心线程在提交任务时创建，除非设置prestartAllCoreThreads；核心参数：corePoolSize, maxPoolSize, keepAliveTime, unit, workQueue, threadFactory, handler；参数设置依据：任务类型（CPU密集型、IO密集型）、系统资源、任务队列长度；常见坑：队列满导致任务拒绝、线程数过大导致资源耗尽、未设置RejectedExecutionHandler导致任务丢失；排查方法：监控线程池状态（活跃线程数、队列大小）、使用jstack查看线程堆栈、分析日志；解决方案：合理配置参数、使用有界队列、自定义拒绝策略、动态调整线程池。

---

### Q11: 你觉得对Java并发和JVM的掌握，到什么程度算精通？

**【核心解析】**
精通不仅掌握原理，还需有实战经验；能设计高并发系统、解决线上问题；深入理解底层实现（如锁优化、GC调优）；能进行性能调优和故障排查；持续学习新技术。

---

### Q12: Java线程池常用哪个类？在Spring Boot中如何配置线程池？

**【核心解析】**
常用类：ThreadPoolExecutor；Spring Boot中可通过@EnableAsync和自定义AsyncConfigurer配置，或直接定义ThreadPoolTaskExecutor Bean；参数：核心线程数、最大线程数、队列容量、拒绝策略等。

---

### Q13: 为什么要用 volatile 关键字？

**【核心解析】**
保证可见性，禁止指令重排序；用于修饰变量，确保多线程下变量的更新对其他线程立即可见；常用于状态标志、双重检查锁定中的单例对象。

---

### Q14: 讲一下线程池，怎么给线程设名字？

**【核心解析】**
线程池通过 ThreadPoolExecutor 创建；核心参数：核心线程数、最大线程数、空闲存活时间、工作队列、拒绝策略；给线程设名字可通过自定义 ThreadFactory，在 newThread 中设置线程名。

---

### Q15: 请详细解释CopyOnWriteArrayList的实现原理、适用场景及优缺点。

**【核心解析】**
基于写时复制策略，写操作时复制底层数组；读操作无锁，写操作加锁；适用于读多写少的场景；内存占用高，数据最终一致性；迭代器支持快照遍历。

---

### Q16: 请解释CAS（Compare-And-Swap）的原理、ABA问题及解决方案。

**【核心解析】**
CAS是一种无锁原子操作，包含内存值、预期值、新值；比较并交换，成功则更新；ABA问题：值从A变为B再变回A，CAS误判；解决方案：使用版本号或时间戳（如AtomicStampedReference）。

---

### Q17: 请详细说明线程池的核心参数（corePoolSize、maximumPoolSize、keepAliveTime、workQueue、threadFactory、RejectedExecutionHandler）及其作用。

**【核心解析】**
corePoolSize：核心线程数；maximumPoolSize：最大线程数；keepAliveTime：非核心线程空闲存活时间；workQueue：任务队列；threadFactory：线程工厂；RejectedExecutionHandler：拒绝策略。

---

### Q18: 请列举创建线程池的几种方法（如Executors工具类、ThreadPoolExecutor构造器）及其区别。

**【核心解析】**
Executors.newFixedThreadPool：固定线程数，无界队列；Executors.newCachedThreadPool：可缓存线程，SynchronousQueue；Executors.newSingleThreadExecutor：单线程，无界队列；Executors.newScheduledThreadPool：定时任务；ThreadPoolExecutor构造器：自定义参数。

---

### Q19: 死锁的四个必要条件是什么？如何预防死锁？

**【核心解析】**
互斥、持有并等待、不可剥夺、循环等待；预防：破坏任一条件，如使用资源顺序分配、一次性申请所有资源、允许资源剥夺。

---

### Q20: 如何实现一个线程安全的LRU缓存？

**【核心解析】**
使用LinkedHashMap并重写removeEldestEntry方法；加synchronized或使用ReentrantLock保证线程安全；或使用ConcurrentHashMap+双向链表+锁分段；考虑使用读写锁提高并发性能；注意内存泄漏和过期策略。

---

### Q21: 多线程同步执行应该怎么做？

**【核心解析】**
使用CountDownLatch、CyclicBarrier、Semaphore等同步工具；或使用Future和Callable提交任务并等待结果；使用join()方法等待线程结束；使用Phaser实现分阶段同步；注意线程池配合使用。

---

### Q22: 如何创建线程？如果一个线程需要等待另一个线程执行完再继续，如何实现？

**【核心解析】**
继承Thread类、实现Runnable接口、实现Callable接口；等待方式：join()、CountDownLatch、Future.get()、CompletableFuture

---

### Q23: 请详细解释线程池的核心参数（如corePoolSize、maximumPoolSize、keepAliveTime、workQueue、threadFactory、RejectedExecutionHandler）的作用，以及线程池自动回收线程的原理。

**【核心解析】**
corePoolSize：核心线程数，即使空闲也保留；maximumPoolSize：最大线程数；keepAliveTime：非核心线程空闲存活时间；workQueue：任务队列；threadFactory：线程工厂；RejectedExecutionHandler：拒绝策略；自动回收原理：当线程池中线程数大于corePoolSize且空闲时间超过keepAliveTime时，非核心线程会被终止，通过Worker的runWork循环检测空闲时间实现。

---

### Q24: 请介绍线程池的核心参数及其作用，并说明AQS框架的机制。

**【核心解析】**
核心参数：corePoolSize（核心线程数）、maximumPoolSize（最大线程数）、keepAliveTime（空闲线程存活时间）、workQueue（任务队列）、threadFactory（线程工厂）、handler（拒绝策略）；作用：控制并发数、复用线程、管理任务队列；AQS机制：基于CLH队列实现同步器，通过volatile state和CAS操作实现锁和同步器，支持独占和共享模式。

---

### Q25: ReentrantLock 的原理和可重入性是如何实现的？

**【核心解析】**
ReentrantLock 是基于 AQS 实现的独占锁；可重入性通过 state 计数器实现，同一个线程每获取一次锁 state 加 1，释放时减 1；支持公平锁和非公平锁；提供 tryLock、lockInterruptibly 等高级功能。

---

### Q26: synchronized 关键字的锁升级过程是怎样的？

**【核心解析】**
锁升级过程：无锁 → 偏向锁 → 轻量级锁 → 重量级锁；偏向锁通过 CAS 在对象头 Mark Word 中记录线程 ID；轻量级锁通过自旋 CAS 获取锁；重量级锁依赖操作系统互斥量，线程阻塞。

---

### Q27: 线程池参数你配过吗？如何配置核心线程数、最大线程数、队列容量等？

**【核心解析】**
核心线程数：CPU密集型设为N+1，IO密集型设为2N；最大线程数：根据任务类型和系统资源调整；队列容量：使用有界队列避免OOM；拒绝策略：AbortPolicy、CallerRunsPolicy等；实际配置需结合压测和监控

---

### Q28: 虚拟线程和Go协程的相同点是什么？

**【核心解析】**
都是轻量级线程，由运行时调度；支持高并发，创建成本低；采用M:N调度模型；阻塞操作不会阻塞底层操作系统线程；适用于IO密集型任务

---

### Q29: Synchronized锁升级机制：从对象头、偏向锁、轻量级锁到重量级锁的过程及性能差异。

**【核心解析】**
对象头Mark Word存储锁状态；偏向锁：单线程竞争，CAS替换线程ID；轻量级锁：少量竞争，自旋CAS；重量级锁：多线程竞争，阻塞；锁膨胀过程：偏向锁->轻量级锁->重量级锁；性能：偏向锁最优，重量级锁最差

---

### Q30: 并行和串行在单核和多核CPU中分别哪个更快？为什么？

**【核心解析】**
单核CPU：串行更快，因为并行有上下文切换开销；多核CPU：并行更快，可同时执行多任务；并行适合CPU密集型任务，串行适合IO密集型任务

---

### Q31: 请详细解释ThreadLocal的工作原理、内存泄漏的原因及预防措施。在线程池中使用ThreadLocal时，除了手动remove，还有哪些方法可以防止内存泄漏？

**【核心解析】**
ThreadLocal通过每个线程维护一个ThreadLocalMap实现线程隔离，key为弱引用，value为强引用；内存泄漏发生在线程池中线程复用导致value无法被回收；预防措施包括：使用try-finally确保remove、使用装饰器模式自动清理、使用Agent技术监控并清理、使用弱引用包装value、设计无状态ThreadLocal。

---

### Q32: Java中volatile关键字的作用是什么？其底层实现原理是什么？

**【核心解析】**
保证可见性：volatile变量的写操作立即刷新到主存，读操作从主存读取；禁止指令重排序：通过内存屏障实现；不保证原子性；底层实现：Lock前缀指令触发缓存一致性协议（MESI），插入内存屏障（LoadLoad、LoadStore等）

---

### Q33: ConcurrentHashMap的底层原理是什么？它是如何保证并发安全的？

**【核心解析】**
JDK 1.7：Segment分段锁，继承ReentrantLock；JDK 1.8：Node数组+链表/红黑树，使用synchronized+CAS；CAS用于插入节点时的无锁操作；synchronized用于锁住链表头节点或树根节点；扩容时多线程协助迁移

---

### Q34: synchronized和Lock的区别是什么？

**【核心解析】**
synchronized是关键字，自动释放锁；Lock是接口，需手动加锁解锁；Lock支持可中断锁、公平锁、读写锁等；synchronized锁升级过程（偏向锁->轻量级锁->重量级锁）；Lock性能在竞争激烈时更好；synchronized不可中断，Lock可中断。

---

### Q35: 请复盘死锁场景是怎么产生的？

**【核心解析】**
多个线程持有锁并等待对方释放；循环等待条件；互斥条件；不可剥夺条件；请求与保持条件；避免死锁：破坏任一条件；使用锁顺序；超时机制；死锁检测

---

### Q36: 线程池的核心参数有哪些？每个参数的作用是什么？

**【核心解析】**
corePoolSize：核心线程数；maximumPoolSize：最大线程数；keepAliveTime：空闲线程存活时间；unit：时间单位；workQueue：任务队列；threadFactory：线程工厂；handler：拒绝策略

---

### Q37: Java线程池的核心参数有哪些？请说明各参数的作用以及常见的拒绝策略。

**【核心解析】**
核心参数：corePoolSize（核心线程数）、maximumPoolSize（最大线程数）、keepAliveTime（空闲存活时间）、workQueue（任务队列）、threadFactory（线程工厂）、RejectedExecutionHandler（拒绝策略）；拒绝策略：AbortPolicy（抛出异常）、CallerRunsPolicy（调用者线程执行）、DiscardPolicy（丢弃）、DiscardOldestPolicy（丢弃最旧任务）。

---

### Q38: 如何解决Java多线程的并发安全问题？

**【核心解析】**
使用synchronized关键字；使用Lock接口（ReentrantLock）；使用原子类（AtomicInteger等）；使用volatile保证可见性；使用并发容器（ConcurrentHashMap等）；使用线程安全工具类（Semaphore、CountDownLatch等）

---

### Q39: 乐观锁CAS的原理及ABA问题如何解决？

**【核心解析】**
CAS（Compare-And-Swap）比较并交换；无锁编程，基于硬件指令；ABA问题：值从A变B再变A，CAS误判；解决：使用版本号或时间戳（AtomicStampedReference）

---

### Q40: 进程和线程的区别是什么？

**【核心解析】**
进程是资源分配的基本单位，线程是CPU调度的基本单位；一个进程包含多个线程，共享地址空间、文件描述符、堆和全局变量；每个线程有自己的栈、寄存器上下文和线程局部存储；进程隔离性强，一个进程崩溃通常不影响其他进程；线程切换开销小于进程切换，但共享资源易导致竞态、死锁和可见性问题；进程适合模块隔离、容灾和权限控制，线程适合细粒度并发。

---

### Q41: 你对ThreadLocal的了解是什么？

**【核心解析】**
ThreadLocal提供线程局部变量，每个线程拥有独立副本；通过ThreadLocalMap实现，key为ThreadLocal实例，value为变量值；常用于保存线程上下文（如用户信息、事务ID）；注意内存泄漏风险，使用后需调用remove()清理；与InheritableThreadLocal可传递父线程变量。

---

### Q42: 请解释Goroutine与线程的区别，以及GMP模型的工作原理，包括本地队列挂在P还是M上。

**【核心解析】**
Goroutine是轻量级用户态线程，由Go运行时管理，创建和切换成本低；线程是操作系统内核态线程，成本高；GMP模型：G（Goroutine）、M（Machine，内核线程）、P（Processor，逻辑处理器）；P拥有本地队列，存储待执行的G；M需绑定P才能执行G；P的数量决定并发度；M从P的本地队列或全局队列获取G执行。

---

### Q43: 请解释Channel的理解、常见使用场景，以及Channel close后的行为。

**【核心解析】**
Channel是Go中用于Goroutine间通信的管道，类型安全；常见场景：同步、传递数据、信号通知；关闭后：接收端可继续读取已缓冲数据，读取完返回零值；发送端向关闭的channel发送会panic；可通过ok模式判断channel是否关闭。

---

### Q44: 请解释defer的用途和执行顺序。

**【核心解析】**
defer用于延迟执行函数，常用于资源释放、锁解锁等；执行顺序：后进先出（LIFO）；defer在函数返回前执行；defer中的参数在声明时求值。

---

### Q45: 请解释ConcurrentHashMap的锁粒度，以及CAS存在的问题和解决哈希冲突的办法。

**【核心解析】**
ConcurrentHashMap在Java 8中使用CAS+synchronized，锁粒度是桶（Node数组的每个元素）；CAS问题：ABA问题（通过版本号解决）、自旋开销大；解决哈希冲突：链地址法（链表转红黑树）、开放地址法、再哈希法。

---

### Q46: Qt 中如何正确使用多线程？

**【核心解析】**
避免直接继承QThread；使用QObject::moveToThread；线程亲和性；跨线程信号槽通信；线程安全访问共享数据；使用QMutex、QReadWriteLock等同步机制；避免UI卡顿。

---

### Q47: 如何控制并发以保证不超过模型频控限制？

**【核心解析】**
使用令牌桶或漏桶算法限流；基于Redis实现分布式限流；设置模型调用配额；异步队列缓冲请求；监控并动态调整限流阈值。

---

### Q48: synchronized和ReentrantLock的区别是什么？ReentrantLock的公平性是如何实现的？

**【核心解析】**
synchronized是关键字，自动释放锁；ReentrantLock是API，需手动释放；ReentrantLock支持公平锁、可中断、条件变量；公平锁通过FIFO队列实现，先等待先获得锁。

---

### Q49: 请介绍C++多线程同步机制，包括互斥锁和条件变量。

**【核心解析】**
互斥锁（mutex）保护临界区；条件变量（condition_variable）用于线程间等待/通知；常与unique_lock配合使用；避免死锁和虚假唤醒。

---

### Q50: volatile能否保证原子性？请解释其底层如何实现可见性，并说明内存屏障的种类。

**【核心解析】**
volatile不保证原子性（如i++）；通过内存屏障实现可见性：写操作插入StoreLoad屏障，读操作插入LoadLoad屏障；四种屏障：LoadLoad、StoreStore、LoadStore、StoreLoad。

---

### Q51: 请介绍线程池的重要参数及其作用，并说明如何根据IO密集型和CPU密集型任务设置线程数。

**【核心解析】**
核心参数：corePoolSize、maximumPoolSize、keepAliveTime、workQueue、threadFactory、handler；CPU密集型：线程数≈CPU核心数+1；IO密集型：线程数≈CPU核心数*2（或更多，取决于等待时间）。

---

### Q52: ThreadLocal的使用场景是什么？使用时需要注意哪些问题？

**【核心解析】**
使用场景：每个线程需要独立的变量副本，如数据库连接、Session管理、请求上下文；问题：内存泄漏，因为ThreadLocalMap的Entry的key是弱引用，value是强引用，线程池复用线程时，若未手动remove，value无法回收；需在finally块中调用remove()清理；另外，ThreadLocal不支持继承，子线程无法获取父线程的ThreadLocal值（可用InheritableThreadLocal）。

---

### Q53: 什么场景下会用多线程？

**【核心解析】**
CPU密集型任务，利用多核并行计算；IO密集型任务，避免阻塞主线程；提高响应性，如GUI应用；处理大量并发请求；任务可分解为独立子任务；需要共享数据但需同步；后台任务如日志、定时任务

---

### Q54: 进程与线程的区别

**【核心解析】**
进程是资源分配最小单位，线程是CPU调度最小单位；进程有独立地址空间，线程共享进程地址空间；进程切换开销大，线程切换开销小；进程间通信复杂（IPC），线程间通信简单（共享内存）；一个进程崩溃不影响其他进程，一个线程崩溃可能影响整个进程；多线程编程需注意同步

---

### Q55: 操作系统能感知到协程的存在吗？

**【核心解析】**
不能；协程是用户态轻量级线程；操作系统只感知线程；协程调度由用户态运行时管理；协程切换不涉及系统调用。

---

### Q56: 你写过协程相关的程序吗？请谈谈协程的使用场景和优势。

**【核心解析】**
写过；协程适用于高并发I/O密集型任务；优势：轻量级、切换开销小、简化异步编程；常见于网络服务、爬虫等；需注意协程调度和阻塞问题。

---

### Q57: 请解释进程虚拟地址空间的结构，包括堆和栈的使用场景，以及虚拟内存映射的原理。

**【核心解析】**
虚拟地址空间分为用户空间和内核空间；用户空间包括代码段、数据段、堆、栈等；堆用于动态分配内存，栈用于函数调用和局部变量；虚拟内存映射通过页表将虚拟地址转换为物理地址，支持内存隔离和按需加载。

---

### Q58: 请解释进程间通信（IPC）的常见方式，如管道、消息队列、共享内存、信号量、套接字等。

**【核心解析】**
管道：半双工，用于父子进程；消息队列：消息传递，支持多进程；共享内存：最快，需同步；信号量：用于同步；套接字：跨网络通信。

---

### Q59: 请解释操作系统的存储体系，包括虚拟内存、分段和分页机制，以及页面替换策略（如LRU、FIFO、Clock等）。

**【核心解析】**
存储体系：寄存器、缓存、主存、磁盘；虚拟内存提供连续地址空间；分段按逻辑划分，分页按固定大小划分；页面替换策略：LRU（最近最少使用）、FIFO（先进先出）、Clock（近似LRU）。

---

### Q60: Java多线程中，synchronized的底层实现和锁升级机制是怎样的？

**【核心解析】**
synchronized基于Monitor对象，通过对象头的Mark Word实现；锁升级：无锁→偏向锁→轻量级锁→重量级锁；偏向锁减少CAS开销，轻量级锁自旋，重量级锁阻塞。

---

### Q61: AQS（AbstractQueuedSynchronizer）的队列结构和工作原理是什么？

**【核心解析】**
AQS维护一个CLH队列（双向链表）；每个节点代表一个等待线程，包含状态、前驱后继；通过CAS操作状态（state）控制锁；支持独占和共享模式。

---

### Q62: Java线程池的核心参数有哪些？如何配置？拒绝策略有哪些？

**【核心解析】**
核心线程数、最大线程数、空闲存活时间、工作队列、线程工厂、拒绝策略；配置根据CPU密集或IO密集调整；拒绝策略：AbortPolicy、CallerRunsPolicy、DiscardPolicy、DiscardOldestPolicy。

---

### Q63: 为什么使用自定义线程池而不是Executors创建？

**【核心解析】**
Executors默认队列长度无限（如FixedThreadPool使用LinkedBlockingQueue），可能导致OOM；自定义线程池可控制队列大小、拒绝策略，更安全。

---

### Q64: 如何保证并发可见性？

**【核心解析】**
volatile关键字；synchronized锁；Lock接口；final关键字；内存屏障；happens-before规则

---

### Q65: 在JAVA中是如何使用线程的？如何定位和解决线程池满的情况？

**【核心解析】**
使用Thread类、Runnable接口、Callable和Future；推荐使用线程池（ThreadPoolExecutor）；线程池满时任务进入阻塞队列或执行拒绝策略；定位：通过jstack查看线程堆栈，监控线程池活跃线程数、队列大小；解决：调整线程池参数（核心线程数、最大线程数、队列容量），优化任务执行时间，增加拒绝策略（如CallerRunsPolicy）

---

### Q66: synchronized和ReentrantLock的区别是什么？

**【核心解析】**
synchronized是关键字，自动释放锁；ReentrantLock是类，需手动释放；ReentrantLock支持公平锁、可中断、条件变量等。

---

### Q67: 什么是原子性操作？请举例说明。

**【核心解析】**
原子性操作是不可中断的一个或一系列操作；在并发环境下，原子性操作要么全部执行成功，要么全部不执行；Java中通过synchronized、Lock或CAS实现原子性；数据库事务的原子性通过undo log保证；典型例子：i++不是原子操作，需要加锁或使用AtomicInteger。

---

### Q68: 读写锁的饥饿问题是什么？如何解决？

**【核心解析】**
读写锁中，读锁和写锁竞争时，写锁可能长时间得不到执行（写线程饥饿）；解决方式：使用公平锁（如ReentrantReadWriteLock(true)）按请求顺序分配锁；或使用读写锁的“写优先”策略；Java中StampedLock可提供乐观读避免饥饿。

---

### Q69: 为什么用多进程重构，而不是多线程？

**【核心解析】**
多进程稳定性更高，进程间隔离性强，一个进程崩溃不影响其他进程；多线程共享地址空间，一个线程崩溃可能导致整个进程崩溃；多进程适用于CPU密集型任务，多线程适用于I/O密集型任务；多进程上下文切换开销较大，多线程较小；多进程编程模型更简单，避免锁竞争等复杂问题。

---

### Q70: 了解过虚拟线程（协程）吗？

**【核心解析】**
虚拟线程是Java 19引入的轻量级线程，由JVM管理，不依赖操作系统线程；协程是用户态线程，如Go的goroutine，调度由运行时管理，开销小；虚拟线程适合高并发I/O场景，可创建数百万个；与平台线程相比，虚拟线程切换成本低，内存占用少。

---

### Q71: 多线程之间的同步方式有哪些？

**【核心解析】**
互斥锁（Mutex）保护临界区；信号量（Semaphore）控制访问数量；条件变量（Condition Variable）用于线程间等待/通知；读写锁（Read-Write Lock）区分读写操作；原子操作（Atomic）无锁同步；屏障（Barrier）等待多个线程到达同步点。

---

### Q72: 多线程环境下共享/独享资源是哪些？

**【核心解析】**
共享资源：堆内存、全局变量、静态变量、文件描述符、数据库连接等；独享资源：线程栈、程序计数器、局部变量、寄存器；共享资源需要同步机制保护，独享资源无需加锁。

---

### Q73: Go协程与线程的区别？为什么用户态开销小？

**【核心解析】**
协程是用户态轻量级线程，由Go运行时调度，线程是内核态；协程创建成本低（几KB栈），线程创建成本高（MB级栈）；协程切换由用户态完成，不涉及系统调用，开销小；协程可复用少量线程实现高并发；协程调度器采用M:N模型，将多个协程映射到少量线程。

---

### Q74: 多线程死锁的产生条件与规避方案是什么？

**【核心解析】**
互斥条件；请求与保持条件；不剥夺条件；循环等待条件；避免死锁的方法包括破坏任一条件，如按顺序加锁、使用超时锁、使用死锁检测机制等。

---

### Q75: 如何理解多线程安全？ReentrantLock和synchronized能保证有序性吗？

**【核心解析】**
多线程安全：多个线程访问共享资源时不会产生不确定的结果；synchronized和ReentrantLock都能保证原子性、可见性和有序性（通过内存屏障）；synchronized基于JVM，ReentrantLock基于AQS，支持公平锁、可中断等。

---

### Q76: 多线程交替打印ABC的实现方式有哪些？

**【核心解析】**
使用synchronized+wait/notify；使用ReentrantLock+Condition；使用Semaphore；使用AtomicInteger自旋；使用CyclicBarrier。

---

### Q77: 请详细解释Java线程池的核心参数、拒绝策略、阻塞队列类型，以及如何根据任务特性调整线程池参数。

**【核心解析】**
核心参数：corePoolSize、maximumPoolSize、keepAliveTime、unit、workQueue、threadFactory、handler；拒绝策略：AbortPolicy、CallerRunsPolicy、DiscardPolicy、DiscardOldestPolicy；阻塞队列：ArrayBlockingQueue、LinkedBlockingQueue、SynchronousQueue、PriorityBlockingQueue；调整参数：根据任务CPU密集/IO密集、任务优先级、任务量波动等调整线程数、队列大小和拒绝策略。

---

### Q78: 协程和线程的区别是什么？协程在操作系统层面是什么？

**【核心解析】**
协程是用户态轻量级线程，由程序自身调度，切换开销小；线程是内核态，由操作系统调度，切换开销大。协程在操作系统层面不可见，本质是用户态上下文切换，通常由语言运行时管理（如Go的Goroutine）。

---

### Q79: 请解释CompletableFuture的supplyAsync和join方法的使用场景及注意事项。

**【核心解析】**
supplyAsync用于异步执行有返回值的任务；join方法阻塞等待结果；需合理配置线程池避免资源耗尽；注意异常处理。

---

### Q80: synchronized 和 ReentrantLock 的区别是什么？ReentrantLock 有哪些优势？

**【核心解析】**
synchronized 是关键字，自动加锁释放锁；ReentrantLock 是类，需手动加锁解锁（try finally）；ReentrantLock 支持公平锁、非公平锁；支持多个条件（Condition），可实现精确唤醒；支持可中断锁、超时获取锁；性能上，高竞争下 ReentrantLock 更优。

---

### Q81: 请描述线程池的核心参数（corePoolSize、maximumPoolSize、keepAliveTime、workQueue、threadFactory、handler）以及线程的创建流程。

**【核心解析】**
核心参数：corePoolSize（核心线程数）、maximumPoolSize（最大线程数）、keepAliveTime（空闲线程存活时间）、workQueue（任务队列）、threadFactory（线程工厂）、handler（拒绝策略）；创建流程：提交任务时，若线程数小于corePoolSize，创建新线程；否则加入workQueue；若队列满且线程数小于maximumPoolSize，创建新线程；若达到maximumPoolSize，执行拒绝策略。

---

### Q82: 线程池的拒绝策略有哪些？请描述其触发条件。

**【核心解析】**
AbortPolicy（默认）：抛出RejectedExecutionException；CallerRunsPolicy：由调用线程执行任务；DiscardPolicy：丢弃任务；DiscardOldestPolicy：丢弃队列中最旧的任务；触发条件：线程池达到最大线程数且队列已满。

---

### Q83: ReentrantLock的底层原理是什么？核心是volatile state和FIFO队列，请详细解释其实现机制。

**【核心解析】**
ReentrantLock基于AQS（AbstractQueuedSynchronizer）实现；核心是volatile int state表示锁状态，CAS操作更新state；FIFO双向队列（CLH变体）管理等待线程；支持公平锁和非公平锁；通过LockSupport.park/unpark阻塞和唤醒线程。

---

### Q84: synchronized和ReentrantLock的区别是什么？

**【核心解析】**
synchronized是关键字，自动加解锁；ReentrantLock是API，需手动加解锁；synchronized支持锁升级（偏向锁、轻量级锁、重量级锁）；ReentrantLock支持可中断、超时、公平锁、多个条件变量；synchronized在JDK6后性能接近ReentrantLock；ReentrantLock更灵活，适合复杂同步场景。

---

### Q85: 在C++多线程中，如何保证线程安全？除了mutex和lock_guard，还有哪些优化手段？

**【核心解析】**
使用互斥锁、读写锁、条件变量；优化手段包括：锁粒度细化、无锁数据结构（CAS）、读写分离、线程局部存储、性能瓶颈分析。

---

### Q86: 多线程下需要注意些什么？ThreadLocal的实现原理是什么？

**【核心解析】**
线程安全问题，如竞态条件、死锁、活锁；使用同步机制（synchronized、Lock）或并发容器；ThreadLocal通过每个线程维护一个ThreadLocalMap，以当前ThreadLocal实例为key存储副本，实现线程隔离；注意内存泄漏问题，使用后需调用remove()。

---

### Q87: 什么是死锁？请解释死锁发生的四个必要条件，并说明如何预防和避免死锁。

**【核心解析】**
死锁：两个或多个线程互相等待对方释放资源；四个条件：互斥、不可剥夺、请求与保持、循环等待；预防：破坏任一条件，如一次性申请所有资源、按序申请资源；避免：使用锁超时、死锁检测与恢复；实际中通过设置锁超时时间兜底。

---

### Q88: 请解释Java线程池的核心参数（7个）以及任务提交时的执行流程。

**【核心解析】**
核心参数：核心线程数、最大线程数、阻塞队列、空闲线程存活时间、时间单位、线程工厂、拒绝策略；流程：先创建核心线程，核心满则入队，队列满则创建新线程至最大线程数，最大满则执行拒绝策略（默认AbortPolicy）；常用线程池：FixedThreadPool、CachedThreadPool等。

---

### Q89: 请解释ThreadLocal的原理、作用以及内存泄漏问题，如何避免？

**【核心解析】**
原理：每个Thread维护一个ThreadLocalMap，以ThreadLocal为键，值为线程本地副本；作用：线程隔离，避免参数传递；内存泄漏：ThreadLocal的Key是弱引用，Value是强引用，Key被回收后Value无法访问；避免：使用完调用remove()，或声明为static减少对象数量。

---

### Q90: 多线程在项目中一般用在哪些地方，线程池参数如何考虑？

**【核心解析】**
常见用法：并行聚合下游接口、异步日志落盘、批量任务分片、后台补偿；线程池参数需结合任务类型：CPU密集型 vs IO密集型；队列大小、拒绝策略、最大线程数需考虑系统是否允许堆积；示例：new ThreadPoolExecutor(8, 16, 60, TimeUnit.SECONDS, new ArrayBlockingQueue<>(200), new ThreadPoolExecutor.CallerRunsPolicy())；避免凭经验写死，防止下游抖动时拖死自身。

---

### Q91: Java 中 Lock 和 tryLock 的区别？看门狗机制是什么？

**【核心解析】**
Lock 阻塞等待；tryLock 尝试获取立即返回；看门狗：Redisson 中自动续期锁过期时间，防止业务未完成锁释放

---

### Q92: 线程池的 7 个参数是什么？如何设置核心线程数？

**【核心解析】**
corePoolSize, maxPoolSize, keepAliveTime, unit, workQueue, threadFactory, handler；CPU 密集型：核心数+1；IO 密集型：2*核心数；混合型：拆分或根据压测

---

### Q93: 线程池具体是如何实现复用的呢？

**【核心解析】**
核心线程常驻，任务队列缓存；线程执行完任务后从队列取新任务；使用 while 循环和阻塞队列的 take/poll；线程池管理线程生命周期；避免频繁创建销毁；通过 Worker 类封装线程。

---

### Q94: 请解释线程池的核心参数及其作用。

**【核心解析】**
corePoolSize、maximumPoolSize、keepAliveTime、TimeUnit、BlockingQueue、ThreadFactory、RejectedExecutionHandler；任务提交流程：核心线程→队列→最大线程→拒绝策略；常见拒绝策略：AbortPolicy、CallerRunsPolicy、DiscardPolicy、DiscardOldestPolicy。

---

### Q95: 保证多线程安全的方法有哪些？

**【核心解析】**
使用 synchronized、volatile、Lock（ReentrantLock）、原子类（AtomicInteger）、并发容器（ConcurrentHashMap）、ThreadLocal；避免共享可变状态；优先考虑不可变对象和同步工具。

---

### Q96: synchronized 和 volatile 的区别是什么？

**【核心解析】**
volatile 保证可见性和有序性，不保证原子性；synchronized 保证原子性、可见性和有序性；volatile 用于修饰变量，synchronized 用于代码块或方法；volatile 不会阻塞线程，synchronized 会阻塞；volatile 禁止指令重排。

---

### Q97: 请解释 Java 锁升级的机制及其原因。

**【核心解析】**
锁升级：无锁→偏向锁→轻量级锁→重量级锁；偏向锁减少无竞争同步开销；轻量级锁通过 CAS 自旋避免阻塞；重量级锁由操作系统管理；升级不可逆；JDK 6 默认开启偏向锁。

---

### Q98: CAS 机制是什么？会出现什么问题？

**【核心解析】**
CAS（Compare-And-Swap）是一种乐观锁机制，比较并交换，原子操作；问题包括ABA问题（可通过版本号解决）、自旋开销大、只能保证单个变量原子性。

---

### Q99: 请比较synchronized和ReentrantLock的底层实现区别，并详细说明AQS队列的入队细节。

**【核心解析】**
synchronized基于JVM的monitor，ReentrantLock基于AQS；ReentrantLock支持公平锁、可中断、超时等；AQS入队：使用CAS将节点加入CLH队列尾部，若失败则自旋重试，并设置前驱节点状态为SIGNAL。

---

### Q100: 线程池的核心参数有哪些？常见的拒绝策略有哪几种？

**【核心解析】**
核心参数：核心线程数、最大线程数、空闲线程存活时间、工作队列、线程工厂、拒绝策略；拒绝策略：AbortPolicy（抛出异常）、CallerRunsPolicy（调用者线程执行）、DiscardPolicy（直接丢弃）、DiscardOldestPolicy（丢弃队列中最老的任务）。

---

### Q101: 如何设计线程池的创建与释放流程，以实现多租户资源隔离？

**【核心解析】**
为每个租户创建独立的线程池实例；使用ThreadPoolExecutor自定义参数；通过租户ID映射线程池；创建时设置核心线程数、最大线程数、队列等；释放时调用shutdown()或shutdownNow()；可结合监控动态调整参数；注意避免线程泄漏。

---

### Q102: 进程和协程有什么区别？你用过协程吗？

**【核心解析】**
进程是资源分配的最小单位，协程是用户态轻量级线程；协程切换开销小，由程序控制；协程适合IO密集型任务；Go语言goroutine、Python asyncio等

---

### Q103: 高并发场景下的加锁机制怎么设计？

**【核心解析】**
分布式锁（Redis Redlock、Zookeeper）；乐观锁（CAS版本号）；悲观锁（数据库行锁）；分段锁（ConcurrentHashMap）；读写锁（ReadWriteLock）；锁粒度控制；避免死锁

---

### Q104: CAS 在哪里用？

**【核心解析】**
Java并发包（AtomicInteger、AtomicReference）；乐观锁实现；数据库乐观锁（版本号）；Redis事务（WATCH）；分布式锁（Redlock）；ABA问题及解决方案

---

### Q105: ConcurrentHashMap 如何保证线程安全？

**【核心解析】**
使用分段锁（Java 7）或 CAS + synchronized（Java 8）；Node 数组 + 链表/红黑树；size() 通过 CounterCell 累加；put 操作先 CAS 插入，失败则 synchronized；扩容时多线程协助；弱一致性迭代器。

---

### Q106: ThreadLocal 在项目中有过哪些应用？

**【核心解析】**
存储线程上下文（如用户信息、请求ID）；避免参数传递；与线程池配合需注意内存泄漏（弱引用 + 及时 remove）；典型场景：Spring 事务管理器、日志 MDC。

---

### Q107: 进程、线程和协程的区别是什么？

**【核心解析】**
进程是资源分配最小单位，线程是 CPU 调度最小单位；进程间独立，线程共享进程资源；协程是用户态轻量级线程，由程序控制切换；协程切换开销远小于线程；Go 的 goroutine 是协程实现。

---

### Q108: Java锁机制详解

**【核心解析】**
synchronized与ReentrantLock区别；偏向锁、轻量级锁、重量级锁升级过程；读写锁ReadWriteLock；StampedLock乐观读；锁粗化与锁消除；死锁检测与避免；AQS原理

---

### Q109: 线程池的实际项目经验

**【核心解析】**
核心线程数、最大线程数、队列容量配置；拒绝策略选择（AbortPolicy等）；监控线程池状态；动态调整参数；避免任务堆积；使用ThreadPoolExecutor自定义；结合业务场景（IO密集/CPU密集）

---