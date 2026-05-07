# Network_HTTP 面试专题手册

> 💡 本章节共收录 3406 道面试真题，建议每天复习 10-20 题。

---
### Q1: JWT认证的实现流程是怎样的？为什么选择将token存储在localStorage中而不是cookie中？

**【核心解析】**
JWT由header、payload、signature组成；登录后服务端签发token；客户端存储（localStorage/cookie）；请求时携带Authorization头；localStorage优点：避免CSRF、跨域友好；缺点：易受XSS攻击

---

### Q2: 请详细解释浏览器的缓存机制，包括强制缓存和协商缓存的区别及对应的HTTP头部字段。

**【核心解析】**
强制缓存：Expires、Cache-Control（max-age）；协商缓存：Last-Modified/If-Modified-Since、ETag/If-None-Match；缓存优先级；缓存位置（memory cache, disk cache）；实际应用策略

---

### Q3: 当接口遇到问题（如错误码、超时）时，应如何处理？超时的次数和时间如何选取？

**【核心解析】**
错误码分类处理（如401重定向、500重试）；超时重试策略（指数退避、固定间隔）；超时时间设置（根据接口重要性、网络状况）；前端错误监控与用户提示

---

### Q4: POST和GET请求方式的区别是什么？

**【核心解析】**
GET参数在URL，POST在请求体；GET有长度限制，POST无；GET幂等，POST不幂等；GET可缓存，POST不可缓存；安全性：POST相对安全

---

### Q5: HTTP的缓存机制有哪些？请解释强制缓存和协商缓存的逻辑。

**【核心解析】**
强制缓存：Cache-Control（max-age）、Expires；协商缓存：Last-Modified/If-Modified-Since、ETag/If-None-Match；缓存优先级；缓存位置（memory/disk）

---

### Q6: SSE与WebSocket的区别是什么？

**【核心解析】**
SSE单向（服务器推送），WebSocket双向；SSE基于HTTP，WebSocket独立协议；SSE自动重连，WebSocket需手动；SSE支持文本，WebSocket支持二进制；适用场景

---

### Q7: localStorage、sessionStorage、cookie的适用场景分别是什么？为什么选择localStorage作为本地持久化方案？

**【核心解析】**
cookie：自动携带，适合身份验证（大小4KB）；sessionStorage：会话级，适合临时数据；localStorage：持久化，适合长期存储（大小5MB+）；选择localStorage原因：容量大、不自动发送、API简单

---

### Q8: 请解释SSE协议及其应用场景。

**【核心解析】**
Server-Sent Events；单向数据流；基于HTTP长连接；与WebSocket对比；适用于实时通知、股票行情等

---

### Q9: 如何保存用户的偏好设置并支持离线使用？本地偏好与在线偏好冲突如何解决？

**【核心解析】**
localStorage/indexedDB；Service Worker缓存；冲突解决：时间戳合并、服务端优先、用户手动选择

---

### Q10: 请比较HTTP/2和HTTP/3协议的区别，并说明它们各自的优势。

**【核心解析】**
HTTP/2基于TCP，多路复用、头部压缩、服务器推送；HTTP/3基于QUIC（UDP），减少连接延迟、改进丢包处理；HTTP/3解决队头阻塞；QUIC支持0-RTT

---

### Q11: 在项目中，为什么选择SSE（Server-Sent Events）而不是WebSocket？请比较HTTP协议和WebSocket协议的区别。

**【核心解析】**
SSE基于HTTP，单向数据流，适合服务器推送；WebSocket全双工，适合实时交互；SSE自动重连，实现简单；WebSocket需要握手，开销较大；场景选择：通知推送用SSE，聊天用WebSocket

---

### Q12: 在前端项目中，如何处理接口请求错误？请列举常见的错误处理策略。

**【核心解析】**
统一错误拦截（axios拦截器）；状态码判断（401跳转登录，500提示服务器错误）；网络错误重试；用户友好提示；错误边界（React Error Boundary）

---

### Q13: 请比较cookie、localStorage和sessionStorage的区别，并说明各自的存储大小限制。

**【核心解析】**
cookie大小约4KB，每次请求自动携带；localStorage大小约5MB，持久存储；sessionStorage大小约5MB，会话级；cookie可设置过期时间；localStorage和sessionStorage仅客户端

---

### Q14: 列举常见的HTTP状态码及其含义。

**【核心解析】**
200 OK；301/302重定向；304 Not Modified；400 Bad Request；401 Unauthorized；403 Forbidden；404 Not Found；500 Internal Server Error；502/503

---

### Q15: 如何实现请求的取消？请结合场景说明。

**【核心解析】**
AbortController；axios CancelToken；fetch abort；取消重复请求；清理副作用

---

### Q16: 请解释SSE（Server-Sent Events）的原理、实现方式以及如何中断请求？

**【核心解析】**
SSE基于HTTP长连接，服务端单向推送；使用EventSource API；请求配置（Content-Type: text/event-stream）；中断请求（EventSource.close()）；Async Generator封装方式

---

### Q17: 项目中SSE推流是如何实现的？请详细说明请求配置、中断请求方式、EventSource和Async Generator等封装方法。

**【核心解析】**
使用EventSource或fetch流式读取；请求配置（withCredentials、headers）；中断请求（EventSource.close()或AbortController）；Async Generator封装（for await...of）；错误处理与重连机制

---

### Q18: 常见的HTTP状态码有哪些？请尽可能详细说明。

**【核心解析】**
1xx信息响应；2xx成功（200 OK, 201 Created, 204 No Content）；3xx重定向（301永久, 302临时, 304未修改）；4xx客户端错误（400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found）；5xx服务器错误（500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable）

---

### Q19: HTTPS与HTTP的区别是什么？为什么使用HTTPS？

**【核心解析】**
HTTPS使用SSL/TLS加密传输；HTTP明文传输；HTTPS保证数据完整性、身份验证、防篡改；HTTPS需要证书；HTTPS端口443，HTTP端口80

---

### Q20: 短token过期后，前端如何用长token刷新？请描述重试逻辑。

**【核心解析】**
前端拦截401错误；使用长token（refresh token）请求新token；存储新token并重试原请求；使用axios拦截器实现；注意防止死循环

---

### Q21: window.location.href、location.replace、location.push有什么区别？

**【核心解析】**
href跳转并保存历史记录；replace替换当前记录，不保存；push是history API方法，添加新记录；replace不会触发页面刷新？实际replace也会刷新，但不可后退

---

### Q22: 请解释JWT Token的工作原理以及双Token刷新机制，如何处理并发请求和登录态管理？

**【核心解析】**
JWT由Header、Payload、Signature组成；Access Token短期有效，Refresh Token长期有效；双Token刷新：Access Token过期时用Refresh Token获取新Token；并发请求需处理Token刷新互斥；登录态管理需持久化Token并鉴权

---

### Q23: 请列举常见的HTTP状态码，并说明其含义。

**【核心解析】**
1xx信息响应（100 Continue）；2xx成功（200 OK、201 Created、204 No Content）；3xx重定向（301永久、302临时、304 Not Modified）；4xx客户端错误（400 Bad Request、401 Unauthorized、403 Forbidden、404 Not Found）；5xx服务器错误（500 Internal Server Error、502 Bad Gateway、503 Service Unavailable）

---

### Q24: 请解释HTTP/1.1、HTTP/2和HTTP/3的主要区别，以及它们各自为了解决什么问题而优化。

**【核心解析】**
HTTP/1.1的队头阻塞；HTTP/2多路复用与二进制分帧；HTTP/3基于QUIC的0-RTT；头部压缩；服务器推送

---

### Q25: 请解释流式输出的原理，为什么使用SSE（Server-Sent Events）而不是普通的axios请求？SSE与普通HTTP请求在协议层面有何区别？

**【核心解析】**
SSE基于EventSource；单向实时通信；HTTP长连接；axios基于XHR/Fetch；SSE自动重连；文本协议

---

### Q26: 请解释UDP协议如何保证可靠通信？

**【核心解析】**
UDP本身不可靠；应用层实现可靠性（如QUIC）；重传机制；序列号与确认；流量控制

---

### Q27: 请描述一次完整的HTTP请求流程。

**【核心解析】**
DNS解析；TCP三次握手；TLS协商（HTTPS）；发送HTTP请求；服务器处理；返回响应；TCP四次挥手

---

### Q28: 请解释XSS攻击的原理、类型及防御措施。

**【核心解析】**
反射型、存储型、DOM型；注入恶意脚本；输出编码；CSP策略；HttpOnly Cookie

---

### Q29: 请解释一个接口的耗时大概是多少？如何优化？

**【核心解析】**
网络延迟；服务器处理时间；数据库查询；缓存策略；CDN加速；代码优化

---

### Q30: JWT是什么？项目里为什么要用JWT生成双Token而不是单Token？

**【核心解析】**
JWT结构（Header/Payload/Signature）；双Token机制（Access Token + Refresh Token）；安全性提升；过期策略；无状态认证

---

### Q31: WebSocket和SSE的区别是什么？了解过SSE吗？

**【核心解析】**
通信方向（全双工 vs 单向）；协议（WebSocket vs HTTP）；实现复杂度；自动重连；适用场景

---

### Q32: 如果用SSE替换项目中的连接机制，该如何实现？

**【核心解析】**
EventSource API；服务端事件流格式；重连机制；与现有架构集成；兼容性处理

---

### Q33: 弱网环境下网络请求的优化有哪些方法？

**【核心解析】**
请求合并与去重；数据压缩；缓存策略；预加载与预连接；离线支持（Service Worker）

---

### Q34: 请详细说明OAuth2.0授权码流程的全过程，包括Token的作用、存储方式及安全考量。

**【核心解析】**
授权码模式步骤：用户授权、获取授权码、换取令牌、访问资源；Token的作用：身份验证与授权；存储方式：内存、HttpOnly Cookie、localStorage的对比；安全考量：CSRF攻击、Token过期与刷新

---

### Q35: 如何确保页面关闭前请求正确发送？请分析各种方案的优缺点。

**【核心解析】**
beforeunload事件；navigator.sendBeacon；同步XMLHttpRequest；fetch的keepalive选项；业界难题：网络不稳定、浏览器行为差异

---

### Q36: 请解释JWT（JSON Web Token）的工作原理、存储方式及安全风险。

**【核心解析】**
JWT结构：Header、Payload、Signature；认证流程：签发、传输、验证；存储方式：localStorage vs HttpOnly Cookie；安全风险：XSS、CSRF、Token泄露

---

### Q37: 请解释SSE（Server-Sent Events）的原理，以及前端如何实现流式响应。

**【核心解析】**
SSE是单向服务器推送技术；基于HTTP长连接；EventSource API的使用；与WebSocket的区别；前端处理流式数据：onmessage事件

---

### Q38: 如何实现并发请求的打断（取消）？

**【核心解析】**
XMLHttpRequest的abort方法；Fetch API的AbortController；Promise的race与取消；场景：搜索框输入、页面跳转；注意事项：资源释放

---

### Q39: 如何防止用户的连续点击造成的多次请求？请给出前端和后端的解决方案。

**【核心解析】**
前端：防抖、节流、按钮禁用、loading状态；后端：幂等性设计、唯一请求ID、限流；综合方案：前端防抖+后端去重

---

### Q40: 请解释XSS攻击的三种类型及防护措施。

**【核心解析】**
反射型XSS：URL参数注入，防护：输入过滤、输出编码；存储型XSS：存储到数据库，防护：服务端过滤、CSP；DOM型XSS：客户端脚本，防护：避免innerHTML、使用textContent；CSP策略

---

### Q41: Token应该存储在哪里？为什么？

**【核心解析】**
localStorage：持久化但易受XSS攻击；sessionStorage：会话级；cookie：设置HttpOnly和Secure；内存变量：最安全但刷新丢失；推荐：短token存内存，长token存cookie或localStorage

---

### Q42: 请列举常见的HTTP状态码及其含义。

**【核心解析】**
200 OK；301/302重定向；304 Not Modified；400 Bad Request；401/403/404；500 Internal Server Error

---

### Q43: HTTP和HTTPS的区别是什么？HTTPS的加密实现原理是什么？

**【核心解析】**
HTTP明文 vs HTTPS加密；SSL/TLS握手过程；对称加密与非对称加密结合；证书验证；端口443

---

### Q44: 设置Secure cookie字段后，前端是否无法获取？

**【核心解析】**
Secure属性要求仅通过HTTPS传输；前端JavaScript仍可读取（除非设置HttpOnly）；仅影响传输方式

---

### Q45: HTTP/1.1、HTTP/2和HTTP/3协议的区别是什么？

**【核心解析】**
HTTP/1.1：文本协议、队头阻塞；HTTP/2：二进制分帧、多路复用、头部压缩；HTTP/3：基于QUIC（UDP）、减少握手延迟、改进队头阻塞

---

### Q46: 浏览器输入域名时如何判断使用HTTP还是HTTPS？

**【核心解析】**
默认使用HTTP；若网站配置了HSTS（HTTP Strict Transport Security）则强制HTTPS；用户手动输入https://；浏览器自动补全

---

### Q47: 请解释TCP三次握手和四次挥手的过程。

**【核心解析】**
三次握手：SYN、SYN-ACK、ACK；目的：建立可靠连接，同步序列号；四次挥手：FIN、ACK、FIN、ACK；目的：全双工连接关闭；TIME_WAIT状态的作用；为什么握手三次而挥手四次

---

### Q48: 请比较GET和POST请求的区别。

**【核心解析】**
语义：GET获取资源，POST提交数据；参数位置：GET在URL，POST在请求体；幂等性：GET幂等，POST不幂等；安全性：GET参数暴露，POST相对安全；缓存：GET可缓存，POST默认不缓存；数据长度：GET受URL限制，POST无限制

---

### Q49: 项目中使用SSE（Server-Sent Events）时，如果数据流中混合了文本、图片、视频，你会如何处理？

**【核心解析】**
SSE只能传输文本；图片视频需转Base64或分块传输；考虑使用WebSocket替代；数据格式设计（JSON分段）；性能与内存管理

---

### Q50: 如果将SSE改为WebSocket，功能上能否完全对齐？两者有何异同？

**【核心解析】**
WebSocket全双工，SSE单向；WebSocket支持二进制；SSE自动重连；WebSocket需额外实现重连；SSE更简单适合推送场景

---

### Q51: HTTP请求头和响应头中有哪些核心字段？

**【核心解析】**
请求头：Content-Type、Authorization、Accept、Cookie、User-Agent、Referer、Cache-Control；响应头：Content-Type、Set-Cookie、Cache-Control、Access-Control-Allow-Origin、Location、Content-Encoding

---

### Q52: 请列举常见的HTTP状态码及其含义。

**【核心解析】**
1xx：信息；2xx：成功（200 OK，201 Created，204 No Content）；3xx：重定向（301永久，302临时，304 Not Modified）；4xx：客户端错误（400 Bad Request，401 Unauthorized，403 Forbidden，404 Not Found）；5xx：服务器错误（500 Internal Server Error，502 Bad Gateway，503 Service Unavailable）

---

### Q53: SSE（Server-Sent Events）和WebSocket有什么区别？

**【核心解析】**
SSE：单向通信（服务器推送），基于HTTP，自动重连，只能发送文本；WebSocket：全双工通信，独立协议，支持二进制数据；SSE更简单，适合实时通知；WebSocket适合实时交互应用

---

### Q54: HTTP和HTTPS协议的区别是什么？

**【核心解析】**
HTTPS使用SSL/TLS加密；默认端口443 vs 80；证书验证；安全性；性能开销

---

### Q55: 为什么SSL证书能保证安全？解释非对称加密的原理。

**【核心解析】**
非对称加密：公钥加密私钥解密；证书由CA签发；验证证书链；防止中间人攻击

---

### Q56: 浏览器提示HTTPS证书无效，可能的原因及处理方法？

**【核心解析】**
证书过期；域名不匹配；自签名证书；证书链不完整；解决方法：更新证书、检查配置

---

### Q57: 什么是跨域？如何解决跨域问题？

**【核心解析】**
同源策略限制；CORS（跨域资源共享）；JSONP；代理服务器；postMessage

---

### Q58: SSE（Server-Sent Events）和WebSocket的区别是什么？

**【核心解析】**
SSE单向（服务器推送）；WebSocket双向；SSE基于HTTP；WebSocket协议；适用场景

---

### Q59: 详细介绍SSE，为什么不用WebSocket？两者有什么区别？

**【核心解析】**
SSE基于HTTP单向推送；WebSocket全双工通信；SSE自动重连；WebSocket需额外协议；SSE适合服务器推送事件

---

### Q60: 常见的ChatGPT等对话模式中为什么要用SSE？解决了什么问题？

**【核心解析】**
SSE实现流式响应；减少首字节延迟；实时展示生成内容；避免等待完整响应；提升用户体验

---

### Q61: HTTPS建立连接的原理，如何建立连接？

**【核心解析】**
TCP三次握手；TLS握手；证书验证；密钥交换（如RSA或ECDHE）；对称加密通信

---

### Q62: HTTP和HTTPS的区别？

**【核心解析】**
HTTP明文；HTTPS加密；HTTPS使用TLS；默认端口不同；HTTPS需要证书

---

### Q63: TLS加密是对称加密还是非对称加密？

**【核心解析】**
混合加密；握手阶段使用非对称加密交换对称密钥；数据传输使用对称加密

---

### Q64: 证书是干什么的？证书存在哪？证书是怎么颁发的？

**【核心解析】**
证书验证身份；包含公钥；存储在服务器或客户端；由CA颁发；验证数字签名

---

### Q65: 接口的调用过程讲一下。

**【核心解析】**
构建请求；DNS解析；建立TCP连接；发送HTTP请求；服务器处理；返回响应；解析数据

---

### Q66: axios是什么？请说明其核心特性及与fetch的区别。

**【核心解析】**
基于Promise的HTTP客户端；支持请求/响应拦截器；自动转换JSON数据；取消请求（CancelToken）；客户端支持XSRF防护；与fetch的区别：axios更易用、功能更丰富，fetch更底层、需手动处理错误

---

### Q67: WebSocket和HTTP有什么区别？各自的应用场景是什么？

**【核心解析】**
HTTP：无状态、请求-响应模式、半双工；WebSocket：全双工、持久连接、实时通信；WebSocket握手通过HTTP Upgrade；应用场景：HTTP适合REST API，WebSocket适合聊天、游戏、实时推送

---

### Q68: 请比较HTTP和HTTPS的区别，并说明HTTPS的加密过程。

**【核心解析】**
HTTP明文传输，HTTPS加密传输；HTTPS使用SSL/TLS协议；证书验证与公钥加密；混合加密机制（对称+非对称）；端口：HTTP 80，HTTPS 443；性能开销

---

### Q69: 请说明HTTP请求的构成（请求行、请求头、请求体）以及常见的请求方法。

**【核心解析】**
请求行：方法、URL、HTTP版本；请求头：Host、Content-Type、Authorization等；请求体：POST/PUT携带数据；常见方法：GET、POST、PUT、DELETE、PATCH、OPTIONS

---

### Q70: TCP和UDP有什么区别？各自的应用场景是什么？

**【核心解析】**
TCP：面向连接、可靠传输、流量控制、拥塞控制；UDP：无连接、不可靠、低延迟；应用场景：TCP适合文件传输、网页，UDP适合视频直播、DNS

---

### Q71: 客户端和服务端是如何建立TCP连接的？请描述三次握手过程。

**【核心解析】**
第一次握手：客户端发送SYN；第二次握手：服务端回复SYN+ACK；第三次握手：客户端发送ACK；连接建立；作用：确认双方收发能力，同步序列号

---

### Q72: 如何创建一个完整的HTTP请求？请说明从URL输入到请求发送的过程。

**【核心解析】**
解析URL；DNS解析获取IP；建立TCP连接（三次握手）；构建HTTP请求报文；发送请求；等待响应；接收响应后解析；关闭连接（四次挥手）或复用

---

### Q73: 请解释RESTful API的设计原则。

**【核心解析】**
资源导向URL；使用HTTP方法表示操作（GET、POST、PUT、DELETE）；无状态；统一接口；使用JSON/XML表示资源；HATEOAS（超媒体作为应用状态引擎）

---

### Q74: 请解释同源策略是什么？为什么nginx能实现跨域？还有哪些跨域方法？

**【核心解析】**
同源策略：协议、域名、端口相同；限制不同源之间的资源访问；nginx反向代理：将跨域请求转发到同源服务器，绕过浏览器限制；其他方法：CORS、JSONP、postMessage、WebSocket、代理服务器

---

### Q75: 请说明Token从创建到使用的完整流程，包括过期时间的设置与检查。

**【核心解析】**
用户登录后服务端生成Token（含payload和签名）；Token返回客户端并存储（localStorage/cookie）；每次请求携带Token（Authorization头）；服务端验证签名和过期时间（检查payload中的exp字段）；过期后需刷新Token或重新登录

---

### Q76: 强缓存和协商缓存的区别是什么？

**【核心解析】**
强缓存通过Expires/Cache-Control，状态码200，不请求服务器；协商缓存通过Last-Modified/ETag，状态码304，需请求服务器；优先级Cache-Control > Expires；ETag比Last-Modified更精确

---

### Q77: SSE（Server-Sent Events）如何封装？

**【核心解析】**
使用EventSource对象；监听message/error事件；服务端设置Content-Type: text/event-stream；数据格式：data:...\n\n；支持自动重连；与WebSocket区别

---

### Q78: CDN和普通服务器有什么区别？

**【核心解析】**
CDN分布式节点缓存静态资源；加速访问；降低源服务器压力；普通服务器直接响应；CDN有边缘计算能力；CORS与CDN无关

---

### Q79: 请比较HTTP和HTTPS的区别，并解释HTTPS的加密过程。

**【核心解析】**
HTTP明文传输，HTTPS加密；HTTPS使用TLS/SSL；证书验证；对称加密与非对称加密结合；握手过程；端口443 vs 80

---

### Q80: 如果获取到了TLS证书，能否劫持HTTPS通信？请解释原因。

**【核心解析】**
不能，除非拥有私钥；证书仅用于身份验证；中间人攻击需要伪造证书；客户端会验证证书链；公钥加密私钥解密

---

### Q81: 前后端联调时常见的HTTP请求状态码有哪些？

**【核心解析】**
200成功；301/302重定向；400请求错误；401未授权；403禁止访问；404未找到；500服务器错误；502网关错误；503服务不可用

---

### Q82: 登录页面中，后端传过来的JWT存在哪里？为什么放在cookie里？放在localStorage里如何携带？

**【核心解析】**
可存在cookie或localStorage；cookie自动携带，可设置HttpOnly防XSS；localStorage需手动添加到请求头Authorization；cookie有CSRF风险，localStorage有XSS风险

---

### Q83: 请解释协商缓存和强缓存下浏览器的请求行为，以及协商缓存的相关字段和状态码。

**【核心解析】**
强缓存直接使用本地缓存，状态码200（from cache）；协商缓存向服务器验证，返回304或200；相关字段：Last-Modified/If-Modified-Since，ETag/If-None-Match

---

### Q84: 大文件上传如何实现？为什么要用SSE？SSE连接断开怎么办？

**【核心解析】**
大文件上传：分片上传、断点续传、秒传；SSE用于服务器推送，比WebSocket轻量；断开后自动重连，可设置重试机制

---

### Q85: 接口降级方案具体如何实现？

**【核心解析】**
降级方案：熔断、限流、降级；实现：使用Hystrix或Sentinel，设置阈值，返回默认值或缓存数据

---

### Q86: 请解释HTTPS的加密过程，以及对称加密和非对称加密的应用。

**【核心解析】**
HTTPS使用非对称加密交换对称密钥；客户端验证证书；之后使用对称加密通信；非对称加密用于握手，对称加密用于数据传输

---

### Q87: 请解释TCP和UDP的区别及应用场景。

**【核心解析】**
TCP面向连接、可靠、有序；UDP无连接、不可靠、低延迟；TCP用于HTTP、文件传输；UDP用于视频直播、DNS

---

### Q88: 请描述TCP三次握手和四次挥手的过程。

**【核心解析】**
三次握手：SYN、SYN-ACK、ACK；四次挥手：FIN、ACK、FIN、ACK；确保连接建立和关闭的可靠性

---

### Q89: 请解释SSE（Server-Sent Events）的原理及应用。

**【核心解析】**
SSE是服务器向客户端推送事件的技术；基于HTTP长连接；使用EventSource API；适用于实时通知、数据流

---

### Q90: WebSocket和SSE的区别是什么？

**【核心解析】**
WebSocket全双工；SSE单向服务器推送；WebSocket基于TCP；SSE基于HTTP；WebSocket需要协议升级；SSE自动重连

---

### Q91: 请解释HTTP/1和HTTP/2的区别。

**【核心解析】**
HTTP/1.1的队头阻塞；HTTP/2多路复用；二进制分帧；头部压缩；服务器推送

---

### Q92: 请详细讲一下HTTPS的TLS握手过程，以及HTTPS是怎么防止中间人攻击的。

**【核心解析】**
TLS握手步骤（ClientHello、ServerHello、证书验证、密钥交换）；防止中间人攻击（证书验证、数字签名、加密通信）

---

### Q93: 请解释DNS解析的详细过程。

**【核心解析】**
递归查询；迭代查询；DNS缓存；域名服务器层级

---

### Q94: 浏览器对接口有哪些限制？

**【核心解析】**
同源策略；跨域限制；并发请求限制（如浏览器最大连接数）

---

### Q95: 前端路由守卫的作用是什么？如何实现未登录状态下的路由拦截？

**【核心解析】**
路由守卫控制页面访问权限；未登录跳转登录页；Vue Router的beforeEach；React Router的onEnter或高阶组件；token检查

---

### Q96: 请解释Server-Sent Events（SSE）的原理、使用场景及与WebSocket的对比。

**【核心解析】**
SSE基于HTTP长连接，单向数据流；EventSource API；自动重连；使用场景（实时通知、股票行情、AI流式输出）；与WebSocket对比（双向 vs 单向、协议复杂度、浏览器支持）

---

### Q97: 请解释HTTP缓存机制中的强缓存和协商缓存，并说明如何通过Nginx或构建工具配置静态资源缓存。

**【核心解析】**
强缓存通过Expires/Cache-Control实现，状态码200；协商缓存通过Last-Modified/ETag实现，状态码304；Cache-Control的max-age、no-cache、no-store等指令；Nginx配置add_header Cache-Control；构建工具通过文件名hash实现缓存更新

---

### Q98: WebSocket和Socket.io有了解过吗？

**【核心解析】**
WebSocket是HTML5全双工通信协议；Socket.io是基于WebSocket的库，支持自动重连、事件广播、命名空间等

---

### Q99: HTTP和HTTPS的区别是什么？

**【核心解析】**
HTTPS使用SSL/TLS加密；默认端口不同；证书验证；安全性；性能开销；SEO影响

---

### Q100: HTTP/1.1、HTTP/2和HTTP/3的主要区别是什么？

**【核心解析】**
HTTP/1.1：持久连接、管道化；HTTP/2：多路复用、头部压缩、服务器推送；HTTP/3：基于QUIC（UDP）、0-RTT、连接迁移

---

