# Container_Cloud 面试专题手册

> 💡 本章节共收录 428 道面试真题，建议每天复习 10-20 题。

---
### Q1: Docker的使用、服务部署、运维相关问题

**【核心解析】**
Dockerfile编写；镜像构建与推送；容器运行与端口映射；docker-compose编排；容器监控（资源、日志）；健康检查；容器编排工具（K8s）；镜像仓库管理

---

### Q2: Kubernetes和AI开发如何结合？如何提升AI开发效率？

**【核心解析】**
K8s提供资源调度、弹性伸缩；AI开发可使用Kubeflow、MLflow等工具；提升效率：自动化训练、模型部署、监控。

---

### Q3: 请简述Docker的基础使用方法，包括镜像、容器、Dockerfile等核心概念。

**【核心解析】**
镜像：只读模板；容器：镜像的运行实例；Dockerfile：构建镜像的脚本；常用命令：pull、run、build、push。

---

### Q4: Docker的基本概念和常用命令有哪些？

**【核心解析】**
镜像、容器、仓库；常用命令：docker pull、docker run、docker ps、docker stop、docker rm、docker images

---

### Q5: 你接触过 Kubernetes（k8s）吗？请简述其核心组件和作用。

**【核心解析】**
Kubernetes 是容器编排平台，核心组件包括：API Server（管理集群）、Controller Manager（维护状态）、Scheduler（调度 Pod）、etcd（存储配置）、Kubelet（管理节点容器）。

---

### Q6: Git克隆和本地提交的命令是什么？Linux查看目录和切换目录的命令？

**【核心解析】**
Git克隆：`git clone <url>`；本地提交：git add、git commit；Linux查看目录：ls；切换目录：cd

---

### Q7: Docker和K8s在项目中的容器化使用情况如何？

**【核心解析】**
Docker打包应用镜像；K8s编排容器；服务发现与负载均衡；自动扩缩容；滚动更新；资源限制；监控日志

---

### Q8: 有没有用过Docker？如何进入容器？

**【核心解析】**
使用 `docker exec -it <容器ID或名称> /bin/bash`（或/bin/sh）；若容器未运行，先docker start；也可通过docker attach（但会共享终端）。

---

### Q9: 如何查看正在运行的容器？

**【核心解析】**
使用 docker ps 命令；docker ps -a 查看所有容器；docker container ls 等价于 docker ps；常用选项包括 -q 只显示容器ID，--filter 过滤条件；结合 docker stats 查看资源使用情况。

---

### Q10: 容器（如Docker）和虚拟机的区别是什么？

**【核心解析】**
容器共享宿主机内核，虚拟机包含完整操作系统；容器启动快（秒级），虚拟机启动慢（分钟级）；容器资源占用小，虚拟机资源隔离更彻底；容器通过Namespace和Cgroups实现隔离，虚拟机通过Hypervisor；容器适合微服务部署，虚拟机适合多租户环境。

---

### Q11: 操作系统的内存管理和内存分配你了解哪些？

**【核心解析】**
内存管理包括分页、分段、段页式；虚拟内存通过页表映射；内存分配算法有首次适应、最佳适应、伙伴系统等；Linux使用SLAB分配器

---

### Q12: 请谈谈你对Kubernetes（K8s）的了解。K8s的核心组件有哪些？它们各自的作用是什么？

**【核心解析】**
K8s是容器编排平台，核心组件包括：etcd（存储集群状态）、API Server（提供REST接口）、Scheduler（调度Pod）、Controller Manager（管理控制器）、kubelet（节点代理）、kube-proxy（网络代理）；Pod是最小调度单元；Service提供负载均衡。

---

### Q13: 你对Docker和Kubernetes了解多少？平时如何打包Docker镜像？

**【核心解析】**
Docker：容器化、镜像构建（Dockerfile）、分层存储；Kubernetes：Pod、Service、Deployment、自动伸缩；打包：编写Dockerfile、构建镜像、推送仓库；AI使用：辅助编写Dockerfile、优化镜像大小

---

### Q14: 你常用的Linux命令有哪些？

**【核心解析】**
ls、cd、pwd、mkdir、rm、cp、mv、cat、grep、find、ps、top、netstat、chmod、tar、vim等。

---

### Q15: 如何减少Android安装包（APK）的体积？

**【核心解析】**
代码混淆与压缩（ProGuard/R8）；资源优化：移除无用资源、图片压缩（WebP）、使用矢量图；动态库按需打包；使用Android App Bundle；代码优化：减少第三方库、移除冗余代码；资源混淆

---

### Q16: 请讲一下Kubernetes中Deployment和StatefulSet的区别。

**【核心解析】**
Deployment用于无状态应用，Pod可互换，使用PVC共享存储；StatefulSet用于有状态应用，每个Pod有唯一标识和稳定网络标识；StatefulSet保证Pod顺序启动和终止；StatefulSet通常与Headless Service配合使用；Deployment支持滚动更新和回滚，StatefulSet也支持但更复杂。

---

### Q17: 为什么不全用StatefulSet？

**【核心解析】**
StatefulSet适用于有状态应用，如数据库；无状态应用应使用Deployment；StatefulSet管理复杂，资源开销大；滚动更新策略不同；需要稳定的网络标识和持久化存储。

---

### Q18: 手写过Makefile和CMake吗？它们的关系是什么？

**【核心解析】**
Makefile是构建脚本，描述编译规则和依赖；CMake是构建系统生成器，生成Makefile等；CMake跨平台，适合大型项目；小项目可直接写Makefile；CMakeLists.txt描述项目结构

---

### Q19: 在OJ项目中使用Docker部署时，如何保证容器启动顺序和服务依赖？

**【核心解析】**
使用docker-compose的depends_on控制启动顺序；depends_on仅保证启动顺序，不保证服务就绪；结合healthcheck配置检测服务状态；在应用启动脚本中轮询依赖服务端口或命令；例如判题容器先依赖MySQL和Redis，通过轮询PING和连接确保就绪

---

### Q20: docker rm和docker rmi的区别？如何查看docker镜像？

**【核心解析】**
docker rm删除容器，docker rmi删除镜像；查看镜像：docker images

---

### Q21: 给某个脚本添加权限如何操作？在服务器上如何查看Java进程？端口号被进程占用，如何查询被哪些进程占用？

**【核心解析】**
添加权限：chmod +x script.sh；查看Java进程：ps -ef | grep java 或 jps；查询端口占用：netstat -tulpn | grep 端口号 或 lsof -i:端口号

---

### Q22: Docker 部署 OJ 系统时，Dockerfile 如何配置？遇到过哪些坑？

**【核心解析】**
Dockerfile 关键配置：FROM openjdk:17-slim，COPY jar，EXPOSE 8080，ENTRYPOINT java -Xms512m -Xmx1g -jar；踩坑：镜像过大（2G→300M）改用 slim 基础镜像+多阶段构建；时区错误添加 ENV TZ=Asia/Shanghai；端口映射失效检查 docker run -p 和容器内监听 0.0.0.0；心得：Docker 是环境契约，构建后必验 docker logs 和 curl。

---

### Q23: 你了解云原生和Docker吗？请简述其核心概念。

**【核心解析】**
云原生包括容器化、微服务、DevOps、持续交付；Docker实现应用打包和隔离；镜像、容器、仓库等概念；Dockerfile编写；Kubernetes编排容器；声明式配置和自动伸缩。

---

### Q24: 了解云原生和Docker吗？请简要介绍。

**【核心解析】**
云原生：容器化、微服务、DevOps、持续交付；Docker：容器引擎，镜像打包；Kubernetes：编排管理；优势：弹性、可移植、快速部署。

---

### Q25: 请解释Kubernetes（K8s）的基本概念及其在微服务架构中的作用，并说明如何解决服务失效和雪崩场景。

**【核心解析】**
K8s是容器编排平台，提供自动部署、扩展和管理；通过Pod、Service、Deployment等资源管理应用；解决失效：健康检查、自动重启、滚动更新；解决雪崩：HPA自动扩缩容、资源限制、熔断与降级（结合Istio）；与Spring Cloud等微服务框架互补。

---

### Q26: 你对云原生怎么理解？

**【核心解析】**
容器化、微服务、服务网格、声明式API；弹性伸缩、自动化运维；DevOps和持续交付；资源调度和大数据场景；以Kubernetes为核心

---

### Q27: Docker和Kubernetes的关系是什么？

**【核心解析】**
Docker是容器运行时，K8s是容器编排平台；Docker提供镜像打包和运行，K8s管理集群；K8s支持多种容器运行时；Docker Compose用于单机编排，K8s用于分布式

---

### Q28: Kubernetes的核心组件有哪些？

**【核心解析】**
控制层：API Server、etcd、Scheduler、Controller Manager；节点组件：kubelet、kube-proxy、容器运行时；插件：CoreDNS、Ingress Controller、Dashboard

---

### Q29: Linux 中如何动态查看日志文件？查看包含特定关键词的日志行？

**【核心解析】**
动态查看日志使用 tail -f 或 tailf；查看包含特定关键词的行使用 grep '关键词' 文件名；结合使用 tail -f 文件名 | grep '关键词' 实现实时过滤；也可用 less +F 进入实时模式。

---

### Q30: 请介绍Kubernetes和Docker的基本概念，以及如何部署应用到阿里云。

**【核心解析】**
Docker：容器化技术，打包应用及依赖；Kubernetes：容器编排平台，管理集群；部署流程：编写Dockerfile构建镜像，推送到镜像仓库，编写K8s YAML定义Pod、Service等，使用kubectl部署；阿里云：提供ACK服务，简化K8s集群管理。

---

### Q31: Linux中如何使用grep等命令查找日志？

**【核心解析】**
grep '关键词' 日志文件；结合管道和正则表达式；使用tail -f实时查看；awk和sed处理复杂格式；多文件搜索。

---

### Q32: 如何使用Docker和Kubernetes进行微服务的运维？

**【核心解析】**
Docker容器化应用；Kubernetes编排容器；使用Deployment管理副本；Service暴露服务；ConfigMap管理配置；监控和日志收集。

---

### Q33: 什么是Docker镜像？什么是Docker容器？Docker容器有几种状态？

**【核心解析】**
Docker镜像是只读模板，包含运行应用所需的文件系统、依赖和配置；容器是镜像的运行实例，具有读写层；容器状态包括：created（已创建）、running（运行中）、paused（暂停）、stopped（停止）、exited（退出）、dead（死亡）。

---

### Q34: Dockerfile中的COPY和ADD命令有什么区别？

**【核心解析】**
COPY仅复制本地文件到镜像中；ADD支持复制本地文件、自动解压tar包、以及从URL下载文件；推荐使用COPY，ADD用于需要自动解压或远程下载的场景。

---

### Q35: 容器与主机之间的数据拷贝命令是什么？

**【核心解析】**
使用docker cp命令；格式：docker cp [OPTIONS] CONTAINER:SRC_PATH DEST_PATH 或 docker cp [OPTIONS] SRC_PATH CONTAINER:DEST_PATH；支持从容器拷贝到主机或从主机拷贝到容器。

---

### Q36: 解释一下Dockerfile的ONBUILD指令。

**【核心解析】**
ONBUILD为镜像添加触发器，当该镜像作为基础镜像被其他Dockerfile使用时，触发器会在构建过程中执行；常用于创建可复用的基础镜像，如自动执行构建步骤。

---

### Q37: 如何在生产中监控Docker？

**【核心解析】**
使用docker stats命令实时查看容器资源使用；集成Prometheus和cAdvisor采集指标；使用ELK或Loki收集日志；设置告警规则（如CPU、内存阈值）；利用容器编排平台的监控工具（如Kubernetes的Metrics Server、Prometheus Operator）。

---

### Q38: 构建Docker镜像应该遵循哪些原则？

**【核心解析】**
最小化镜像层数，合并RUN命令；使用.dockerignore排除无关文件；选择轻量级基础镜像（如Alpine）；减少镜像大小，清理临时文件；利用多阶段构建分离构建环境和运行环境；标记镜像版本，避免使用latest；确保安全性，不存储敏感信息。

---

### Q39: 容器退出后，通过docker ps命令查看不到，数据会丢失吗？

**【核心解析】**
容器退出后，docker ps默认只显示运行中的容器，使用docker ps -a可查看所有容器；容器数据是否丢失取决于数据存储方式，如果数据存储在容器可写层，容器删除后数据丢失；如果使用数据卷或绑定挂载，数据持久化在宿主机上，容器删除后数据仍保留。

---

### Q40: Kubernetes中Pod的部署过程是怎样的？涉及哪些核心组件？

**【核心解析】**
用户通过kubectl或API创建Pod资源对象；API Server验证并写入etcd；Scheduler通过调度算法将Pod绑定到合适的Node；kubelet在Node上创建Pod；kubelet调用容器运行时（如Docker）拉取镜像并启动容器；kubelet定期上报Pod状态给API Server。

---

### Q41: 如果负载预测非常精准，如何基于预测结果进行容器调度？

**【核心解析】**
利用预测的CPU、内存等资源需求，提前为Pod分配资源；结合节点资源利用率，将Pod调度到资源充足的节点；支持弹性伸缩，根据预测自动扩缩容；考虑Pod亲和性和反亲和性；预留资源以应对预测误差。

---

### Q42: Docker虚拟化技术原理是什么？与虚拟机有何区别？

**【核心解析】**
Docker利用Linux内核的Namespace实现资源隔离（PID、网络、文件系统等），利用Cgroups实现资源限制（CPU、内存等）；共享宿主机内核，无需模拟硬件；启动快、资源占用少；隔离性弱于虚拟机。

---

### Q43: 机器开机过程发生了什么？BIOS的作用是什么？

**【核心解析】**
开机过程：BIOS/UEFI自检（POST）→加载引导程序（如GRUB）→加载操作系统内核→初始化系统服务；BIOS负责硬件初始化和自检，提供基本输入输出接口，并引导操作系统。

---

### Q44: Linux 中如何查看启动的 Java 程序的参数（如 java -a -b -c）？

**【核心解析】**
使用ps aux | grep java查看进程；ps -ef | grep java也可；使用 `ps -p <pid> -o cmd` 查看完整命令行；使用 `cat /proc/<pid>/cmdline` 查看；使用jps -v查看Java进程参数；使用 `jcmd <pid> VM.command_line` 获取。

---

### Q45: Linux如何打印进程号？

**【核心解析】**
使用ps命令：ps aux | grep 进程名；或pidof命令；或pgrep；或查看/proc目录。

---

### Q46: Linux如何搜寻错误日志？

**【核心解析】**
使用grep命令：grep 'ERROR' 日志文件；结合find查找日志文件；使用tail/less实时查看；使用awk/sed处理。

---

### Q47: 你们项目如何查询日志？

**【核心解析】**
使用ELK（Elasticsearch, Logstash, Kibana）集中管理；或使用Splunk；或使用云日志服务；通过关键字、时间范围搜索；支持分布式追踪。

---

### Q48: 请介绍Kubernetes的架构和主要资源对象。

**【核心解析】**
架构包括控制平面（API Server、etcd、Scheduler、Controller Manager）和工作节点（kubelet、kube-proxy、容器运行时）；核心资源对象：Pod、Service、Deployment、ReplicaSet、ConfigMap、Secret、Volume、Namespace、Ingress、PersistentVolume等；Pod是最小调度单元；Deployment管理Pod的声明式更新；Service提供稳定的网络访问入口。

---

### Q49: 如何监控Kubernetes集群及其上运行的服务？

**【核心解析】**
使用Metrics Server收集资源指标（CPU、内存）；Prometheus + Grafana组合进行指标采集和可视化；kube-state-metrics提供集群状态指标；Node Exporter监控节点资源；自定义指标通过Prometheus Adapter实现HPA；日志监控使用EFK（Elasticsearch、Fluentd、Kibana）或Loki；APM工具如Jaeger用于链路追踪。

---

### Q50: Metrics Server除了Pod和Deployment的监控指标外，还能提供哪些其他指标？

**【核心解析】**
节点级别的CPU和内存使用率；Namespace级别的资源汇总；Pod的CPU和内存请求与限制；HPA所需的Pod指标；通过ResourceQuota和LimitRange监控资源配额；自定义指标需通过Prometheus Adapter等扩展。

---

### Q51: 请谈谈你对Kubernetes Operator开发的理解。

**【核心解析】**
Operator是使用自定义资源（CRD）和控制器来管理有状态应用的模式；基于Kubernetes的控制器循环（Reconcile）；常用框架：kubebuilder、Operator SDK；核心组件：CRD定义、控制器逻辑、RBAC权限；Operator负责应用的部署、升级、扩缩容、故障恢复等；典型例子：etcd Operator、Prometheus Operator。

---

### Q52: 请解释Docker和Kubernetes的核心原理，包括Docker的镜像分层和K8s的Pod调度。

**【核心解析】**
Docker使用联合文件系统实现镜像分层；K8s通过kube-scheduler调度Pod；Docker容器隔离基于Namespace和Cgroups；K8s管理容器集群。

---

### Q53: 请介绍Kubernetes（k8s）的架构和核心概念，包括Pod的作用，以及为什么k8s能成为容器编排的主流方案。

**【核心解析】**
K8s架构包括Master节点（API Server、Scheduler、Controller Manager、etcd）和Worker节点（kubelet、kube-proxy、容器运行时）；Pod是最小调度单元，封装一个或多个容器；k8s火起来的原因：自动化部署、弹性伸缩、服务发现、声明式配置、生态丰富。

---

### Q54: Docker的底层技术cgroup和namespace是什么？

**【核心解析】**
cgroup限制资源使用（CPU、内存等）；namespace隔离进程视图（PID、网络等）。

---

### Q55: 请描述使用k3s部署服务的流程，包括关键步骤和注意事项。

**【核心解析】**
安装k3s（单节点或集群）；编写Deployment和Service YAML；使用kubectl apply部署；配置Ingress暴露服务；监控和日志（如Prometheus、Grafana）；注意资源限制和持久化存储。

---

### Q56: 请介绍Docker的基本使用，包括Dockerfile的编写要点。

**【核心解析】**
Docker用于容器化应用，Dockerfile定义镜像构建步骤；常用指令：FROM、RUN、COPY、CMD、ENTRYPOINT、EXPOSE；注意减少层数、使用.dockerignore、合理设置工作目录。

---

### Q57: 请介绍你在实习中如何使用Kubernetes（k8s）进行容器编排和管理。

**【核心解析】**
使用k8s管理微服务部署、服务发现、负载均衡、自动伸缩；常用资源：Deployment、Service、ConfigMap、Secret；通过kubectl或API操作集群。

---

### Q58: 请介绍服务监控的实践，包括常用工具和指标。

**【核心解析】**
监控工具：Prometheus、Grafana、ELK；关键指标：CPU、内存、磁盘、网络、请求延迟、错误率；设置告警规则，实现可视化。

---

### Q59: 请介绍CI/CD的流程、工具以及版本管理策略。

**【核心解析】**
CI/CD流程：代码提交触发构建、测试、部署；常用工具：Jenkins、GitLab CI、GitHub Actions；版本管理：语义化版本、Git分支策略（如GitFlow）。

---

### Q60: 解释Kubernetes的架构，以及Deployment的实现原理。当Node挂掉时，Kubernetes如何处理？

**【核心解析】**
架构：Master节点（API Server、Scheduler、Controller Manager、etcd）和Worker节点（kubelet、kube-proxy、容器运行时）；Deployment通过ReplicaSet管理Pod副本，支持滚动更新和回滚；Node挂掉：kubelet心跳超时后，Node被标记为NotReady，Controller Manager在其他Node上重建Pod。

---

### Q61: Linux中有哪些namespace类型？分别有什么作用？

**【核心解析】**
Mount（文件系统挂载点）、PID（进程ID）、Network（网络栈）、User（用户ID）、UTS（主机名）、IPC（进程间通信）、Cgroup（控制组）；用于容器隔离。

---

### Q62: 为什么Kubernetes中要有Pod的概念？两个容器如何进行通信，数据如何流转（从虚拟网卡到协议栈）？

**【核心解析】**
Pod是Kubernetes的最小调度单元，容器共享网络命名空间和存储卷；通信：通过Pod内的lo接口或共享网络栈，数据经过虚拟网卡（veth pair）、网桥、路由等。

---

### Q63: 为什么一个Ubuntu的Docker镜像可以在CentOS上运行？

**【核心解析】**
Docker容器共享宿主机的内核，镜像只包含用户空间文件（如glibc等）；只要依赖的库兼容，即可运行。

---

### Q64: 请介绍Docker及其优势。

**【核心解析】**
Docker是一种容器化平台，通过将应用及其依赖打包在容器中实现轻量级虚拟化；优势包括环境一致性、快速部署、资源隔离、高效利用系统资源、易于扩展和迁移。

---

### Q65: Linux命令：如何查找日志文件的第n列，排序并去重？

**【核心解析】**
使用awk提取第n列：awk '{print $n}'；排序：sort；去重：uniq；组合命令：awk '{print $n}' log.txt | sort | uniq；若需计数：uniq -c；按数值排序：sort -n

---

### Q66: Docker的网络模式有哪些？桥接模式和host模式的区别是什么？

**【核心解析】**
桥接模式（默认）：容器独立网络栈，通过NAT访问外网；host模式：容器共享宿主机网络栈，性能高但隔离性差；还有none、overlay等模式。

---

### Q67: Docker底层运行时是使用dockerd还是containerd？它们之间的关系是什么？

**【核心解析】**
dockerd是Docker守护进程，containerd是容器运行时；dockerd调用containerd来管理容器；containerd符合OCI标准，可独立使用。

---

### Q68: 容器与虚拟机的本质区别是什么？容器是如何实现资源隔离的？

**【核心解析】**
容器共享宿主机内核，虚拟机有独立内核；容器通过Namespace实现资源隔离（PID、网络、挂载等）；容器通过Cgroups限制资源使用（CPU、内存、IO）；容器启动快、资源占用小；虚拟机通过Hypervisor虚拟化硬件；容器隔离性弱于虚拟机。

---

### Q69: 容器与虚拟机的本质区别是什么？容器是如何实现资源隔离的？

**【核心解析】**
容器共享宿主机内核；虚拟机有独立内核；容器使用namespace隔离；cgroups限制资源；容器启动快；虚拟机更安全

---

### Q70: 容器与虚拟机的本质区别是什么？容器是如何实现资源隔离的？

**【核心解析】**
容器共享宿主机内核，虚拟机包含完整操作系统；容器通过Namespaces实现隔离（PID、Network、Mount等）；通过Cgroups限制资源（CPU、内存、IO）；容器启动快，资源利用率高；虚拟机隔离性更强，安全性更高；容器本质是进程级隔离。

---

### Q71: 如何查询Docker中每个容器部署的数量？

**【核心解析】**
使用docker ps -a列出所有容器；统计每个镜像的容器数量：`docker ps -a --format '&#123;&#123;.Image&#125;&#125;' | sort | uniq -c`；或使用docker-compose ps查看服务实例数

---

### Q72: 请简述你对Docker的理解，包括其核心概念和主要用途。

**【核心解析】**
Docker是一种容器化技术，用于打包应用及其依赖；核心概念包括镜像、容器、仓库；镜像为只读模板，容器为运行实例；Docker实现环境一致性，简化部署；相比虚拟机更轻量，共享宿主机内核；常用命令有docker run、build、pull等。

---

### Q73: Linux 根目录下 /proc 目录的作用是什么？介绍一些调试工具。

**【核心解析】**
/proc 是虚拟文件系统，提供内核和进程信息，如 cpuinfo、meminfo、进程状态；调试工具：strace（跟踪系统调用）、gdb（调试程序）、perf（性能分析）、top/htop（进程监控）、netstat/ss（网络状态）、lsof（打开文件）、tcpdump（抓包）

---

### Q74: 请介绍 Kubernetes（K8s）的底层核心组件及其工作原理。

**【核心解析】**
K8s 底层包括 etcd（存储集群状态）、kube-apiserver（REST API 入口）、kube-scheduler（调度 Pod）、kube-controller-manager（控制器）、kubelet（节点代理）、kube-proxy（网络代理）；Pod 是最小调度单元；控制器确保期望状态与实际状态一致

---

### Q75: 容器与虚拟机的本质区别是什么？容器是如何实现资源隔离的？

**【核心解析】**
容器共享宿主机内核，虚拟机有独立内核；容器通过Namespace实现资源隔离；通过Cgroups限制资源使用；容器启动快，资源利用率高

---

### Q76: Pod的生命周期及重启策略是什么？Deployment如何实现滚动更新？K8s的Service与Ingress的区别是什么？

**【核心解析】**
Pod生命周期：Pending、Running、Succeeded、Failed、Unknown；重启策略：Always、OnFailure、Never；Deployment滚动更新：通过ReplicaSet逐步替换Pod；Service：内部负载均衡；Ingress：外部HTTP/HTTPS路由

---

### Q77: Linux查看CPU占用的命令、查找文件的命令、查看文件大小的命令。

**【核心解析】**
CPU占用：top、htop、mpstat；查找文件：find、locate；查看文件大小：ls -lh、du -sh、df -h。

---

### Q78: Kubernetes 如何实现资源隔离？请对比虚拟机、Docker 和 K8s 的区别，并说明 K8s 探针的作用。

**【核心解析】**
K8s 通过 Namespace 和 Cgroups 实现资源隔离；Namespace 隔离进程视图，Cgroups 限制 CPU、内存等资源；虚拟机通过 Hypervisor 隔离完整操作系统，Docker 共享宿主机内核；K8s 探针（liveness、readiness、startup）用于检测容器健康状态，实现自动恢复。

---

### Q79: 容器化技术了解吗？如何实现自动化部署？Kubernetes在其中的作用是什么？

**【核心解析】**
容器化通过Docker等实现环境一致性；自动化部署使用CI/CD流水线（Jenkins、GitLab CI）；Kubernetes负责容器编排、服务发现、自动扩缩容、滚动更新。

---

### Q80: Linux如何查看文件前5行？CPU满载如何排查问题？

**【核心解析】**
查看前5行：head -n 5 filename；CPU满载排查：使用top或htop查看CPU占用高的进程，再用strace或perf分析系统调用，或查看日志定位问题。

---

### Q81: 什么是孤儿进程和僵尸进程？进程、线程和协程的区别和作用是什么？

**【核心解析】**
孤儿进程：父进程先结束，子进程被init进程收养；僵尸进程：子进程结束但父进程未回收资源，占用进程表项；进程是资源分配最小单位，线程是CPU调度最小单位，协程是用户态轻量级线程，切换成本更低。

---

### Q82: 进程通信方式有哪些？动态链接和静态链接的区别是什么？

**【核心解析】**
进程通信：管道、消息队列、共享内存、信号量、Socket等；静态链接：将库代码复制到可执行文件，体积大，更新需重新编译；动态链接：运行时加载共享库，节省内存，便于更新。

---

### Q83: 容器与虚拟机的本质区别是什么？

**【核心解析】**
容器共享宿主机内核，通过命名空间隔离进程；虚拟机包含完整操作系统，通过Hypervisor虚拟化硬件；容器启动快、资源占用少；虚拟机隔离性更强，安全性更高；容器适合微服务部署，虚拟机适合多租户环境。

---

### Q84: 可以说一下Prometheus和Grafana的使用吗？Prometheus有两种获取数据的方式，你觉得这两种方式的异同点怎么样，在公司里用的话会选择推还是拉？

**【核心解析】**
Prometheus采用拉模式（pull）主动从目标抓取指标；也支持推模式（push）通过Pushgateway；拉模式易于控制抓取频率、自动发现目标；推模式适用于短生命周期任务或网络隔离场景；公司内通常优先选择拉模式，配合服务发现；Pushgateway用于批处理任务或无法直接抓取的场景。

---

### Q85: Docker 如何解读镜像？镜像的存储结构是怎样的？

**【核心解析】**
镜像由多层只读层组成，每层对应一个指令；使用 UnionFS 联合挂载；层可共享，节省存储；镜像元数据包含配置和层信息；Docker 通过镜像 ID 和摘要管理。

---

### Q86: 如何查询Docker中每个容器的部署数量？

**【核心解析】**
使用docker ps -a列出所有容器；使用docker stats查看资源使用；使用docker info查看总容器数；使用docker-compose ps查看服务容器数；通过脚本统计各镜像的容器数量

---

### Q87: 容器是如何实现资源隔离的？

**【核心解析】**
使用Linux Namespace实现进程、网络、文件系统等隔离；使用Cgroups限制CPU、内存、磁盘IO等资源；结合chroot或联合文件系统实现文件系统隔离；不同Namespace包括PID、Network、Mount、UTS等；Cgroups通过子系统控制资源配额。

---

### Q88: 如何查询每个Docker容器部署的数量？

**【核心解析】**
使用docker ps命令结合grep或awk统计；或通过Docker API获取容器列表并计数。

---

### Q89: 了解Docker吗？它的原理是什么？

**【核心解析】**
Docker是一种容器化技术，实现轻量级虚拟化；原理基于Linux内核的Namespace隔离（进程、网络等）和Cgroups资源限制；镜像分层存储，UnionFS实现；容器共享宿主机内核，启动快。

---

### Q90: Docker部署的链路流程是怎样的？

**【核心解析】**
编写Dockerfile定义镜像；构建镜像（docker build）；推送至仓库（docker push）；拉取镜像（docker pull）；运行容器（docker run）；可结合编排工具如Kubernetes。

---

### Q91: 在Windows上打包的Docker镜像可以在Linux上运行吗？

**【核心解析】**
取决于基础镜像；若基于Linux镜像（如alpine），则可在Linux上运行；若基于Windows镜像，则只能在Windows容器主机上运行；Docker支持多平台构建，但需注意架构兼容性。

---

### Q92: Docker如何解读镜像？镜像的存储结构是怎样的？

**【核心解析】**
Docker镜像由多层只读层组成，每层对应Dockerfile中的一条指令；采用UnionFS（如OverlayFS）联合挂载；镜像元数据存储在/var/lib/docker目录下；层可共享，节省存储空间。

---

### Q93: 请介绍实习中与K8S和Casbin RBAC相关的需求及实现。

**【核心解析】**
K8S RBAC基于角色控制访问；Casbin支持多种访问控制模型；集成Casbin到K8S实现细粒度权限；定义角色、权限、用户绑定；使用CRD扩展K8S API；处理权限校验性能；审计日志

---

### Q94: Prometheus的核心指标类型有哪些？

**【核心解析】**
Counter：只增不减的计数器；Gauge：可增可减的测量值；Histogram：直方图，统计分布；Summary：分位数摘要；每种类型适用于不同监控场景。

---

### Q95: Linux常用命令有哪些？请列举并简要说明用途。

**【核心解析】**
ls（列出目录）、cd（切换目录）、pwd（当前路径）、cp（复制）、mv（移动/重命名）、rm（删除）、ps（进程）、top（资源监控）、grep（搜索）、find（查找文件）、chmod（权限）、tar（压缩）。

---

### Q96: Nginx的负载均衡算法有哪些？

**【核心解析】**
轮询（默认）、加权轮询、IP哈希、最少连接、fair（响应时间）、url_hash。

---

### Q97: 解释一下资源隔离怎么实现的？K8s部署流程和滚动更新配置流程？K8s如何实现不断开链接同时实现更新？

**【核心解析】**
资源隔离通过Linux Namespace（进程、网络等）和Cgroups（CPU、内存限制）实现；K8s部署：编写Deployment YAML，kubectl apply创建Pod；滚动更新：设置maxSurge和maxUnavailable，逐步替换旧Pod；不断开链接：通过Service的负载均衡和健康检查，新Pod就绪后切换流量。

---

### Q98: 常用的 Linux 命令有哪些？如何查看进程监听的端口？如何查找错误日志中包含某个名字的文件？

**【核心解析】**
ps、top、netstat、lsof、grep、find；查看端口：netstat -tlnp 或 lsof -i :端口；查找文件：grep -r 'error' /var/log/ 或 find / -name '*error*'

---

### Q99: 虚存和实存有什么区别？如何查看进程内存占用？

**【核心解析】**
虚存是逻辑地址空间，实存是物理内存；查看：top、ps、/proc/pid/status

---

### Q100: 内存对齐的意义是什么？三层缓存之间是怎么协作的？

**【核心解析】**
内存对齐提高访问效率，避免跨缓存行；三级缓存：L1最快，L2次之，L3共享，数据逐级缓存

---

### Q101: 标准库的内存分配函数和操作系统的内存管理有什么联系？glibc/tcmalloc/jemalloc 的实现区别？

**【核心解析】**
标准库 malloc 通过系统调用 brk/mmap 获取内存；glibc 使用 ptmalloc，tcmalloc 使用线程缓存，jemalloc 使用 arena 和缓存

---

### Q102: Linux命令：递归查询目录下是否包含某个关键词的文件或文件夹。

**【核心解析】**
使用grep -r 'keyword' .；使用find . -name '*keyword*'；结合xargs和grep；注意权限和路径。

---

### Q103: 新版本上线，灰度了10%的机器，发现错误日志突然暴增，但核心监控指标看起来都正常。你会怎么快速回滚，之后又怎么去查明原因？

**【核心解析】**
立即停止灰度流量并回滚到旧版本；检查错误日志详细内容；对比新旧版本代码变更；检查依赖服务是否兼容；检查配置和环境差异；增加详细日志和监控；逐步灰度并验证。

---