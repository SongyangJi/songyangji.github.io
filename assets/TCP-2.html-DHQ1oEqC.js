const e=JSON.parse('{"key":"v-71a98f25","path":"/posts/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/TCP-2.html","title":"TCP —— 重传机制、流量控制、拥塞控制","lang":"zh-CN","frontmatter":{"title":"TCP —— 重传机制、流量控制、拥塞控制","date":"2021-12-03T08:15:09.000Z","categories":["计算机网络"],"tags":["计算机网络","TCP"],"description":"TCP 是如何保证可靠性的 数据分块：应用数据被分割成 TCP 认为最适合发送的数据块。 序列号和确认应答：TCP 给发送的每一个包进行编号，在传输的过程中，每次接收方收到数据后，都会对传输方进行确认应答，即发送 ACK 报文，这个 ACK 报文当中带有对应的确认序列号，告诉发送方成功接收了哪些数据以及下一次的数据从哪里开始发。除此之外，接收方可以根据序列号对数据包进行排序，把有序数据传送给应用层，并丢弃重复的数据。 校验和： TCP 将保持它首部和数据部分的检验和。这是一个端到端的检验和，目的是检测数据在传输过程中的任何变化。如果收到报文段的检验和有差错，TCP 将丢弃这个报文段并且不确认收到此报文段。 流量控制： TCP 连接的双方都有一个固定大小的缓冲空间，发送方发送的数据量不能超过接收端缓冲区的大小。当接收方来不及处理发送方的数据，会提示发送方降低发送的速率，防止产生丢包。TCP 通过滑动窗口协议来支持流量控制机制。 拥塞控制： 当网络某个节点发生拥塞时，减少数据的发送。 ARQ协议： 也是为了实现可靠传输的，它的基本原理就是每发完一个分组就停止发送，等待对方确认。在收到确认后再发下一个分组。 超时重传： 当 TCP 发出一个报文段后，它启动一个定时器，等待目的端确认收到这个报文段。如果超过某个时间还没有收到确认，将重发这个报文段。","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/posts/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/TCP-2.html"}],["meta",{"property":"og:site_name","content":"常潇的技术站"}],["meta",{"property":"og:title","content":"TCP —— 重传机制、流量控制、拥塞控制"}],["meta",{"property":"og:description","content":"TCP 是如何保证可靠性的 数据分块：应用数据被分割成 TCP 认为最适合发送的数据块。 序列号和确认应答：TCP 给发送的每一个包进行编号，在传输的过程中，每次接收方收到数据后，都会对传输方进行确认应答，即发送 ACK 报文，这个 ACK 报文当中带有对应的确认序列号，告诉发送方成功接收了哪些数据以及下一次的数据从哪里开始发。除此之外，接收方可以根据序列号对数据包进行排序，把有序数据传送给应用层，并丢弃重复的数据。 校验和： TCP 将保持它首部和数据部分的检验和。这是一个端到端的检验和，目的是检测数据在传输过程中的任何变化。如果收到报文段的检验和有差错，TCP 将丢弃这个报文段并且不确认收到此报文段。 流量控制： TCP 连接的双方都有一个固定大小的缓冲空间，发送方发送的数据量不能超过接收端缓冲区的大小。当接收方来不及处理发送方的数据，会提示发送方降低发送的速率，防止产生丢包。TCP 通过滑动窗口协议来支持流量控制机制。 拥塞控制： 当网络某个节点发生拥塞时，减少数据的发送。 ARQ协议： 也是为了实现可靠传输的，它的基本原理就是每发完一个分组就停止发送，等待对方确认。在收到确认后再发下一个分组。 超时重传： 当 TCP 发出一个报文段后，它启动一个定时器，等待目的端确认收到这个报文段。如果超过某个时间还没有收到确认，将重发这个报文段。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-17T15:13:02.000Z"}],["meta",{"property":"article:author","content":"常潇-KeepCool"}],["meta",{"property":"article:tag","content":"计算机网络"}],["meta",{"property":"article:tag","content":"TCP"}],["meta",{"property":"article:published_time","content":"2021-12-03T08:15:09.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-17T15:13:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"TCP —— 重传机制、流量控制、拥塞控制\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-12-03T08:15:09.000Z\\",\\"dateModified\\":\\"2024-02-17T15:13:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"常潇-KeepCool\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"TCP 是如何保证可靠性的","slug":"tcp-是如何保证可靠性的","link":"#tcp-是如何保证可靠性的","children":[]},{"level":2,"title":"重传机制","slug":"重传机制","link":"#重传机制","children":[{"level":3,"title":"超时重传","slug":"超时重传","link":"#超时重传","children":[]},{"level":3,"title":"快速重传","slug":"快速重传","link":"#快速重传","children":[]},{"level":3,"title":"SACK","slug":"sack","link":"#sack","children":[]},{"level":3,"title":"Duplicate SACK","slug":"duplicate-sack","link":"#duplicate-sack","children":[]}]},{"level":2,"title":"滑动窗口","slug":"滑动窗口","link":"#滑动窗口","children":[{"level":3,"title":"操作系统缓冲区与滑动窗⼝的关系","slug":"操作系统缓冲区与滑动窗口的关系","link":"#操作系统缓冲区与滑动窗口的关系","children":[]},{"level":3,"title":"窗口大小的协商","slug":"窗口大小的协商","link":"#窗口大小的协商","children":[]},{"level":3,"title":"发送⽅的滑动窗⼝","slug":"发送方的滑动窗口","link":"#发送方的滑动窗口","children":[]},{"level":3,"title":"接收⽅的滑动窗⼝","slug":"接收方的滑动窗口","link":"#接收方的滑动窗口","children":[]}]},{"level":2,"title":"流量控制","slug":"流量控制","link":"#流量控制","children":[{"level":3,"title":"窗⼝关闭","slug":"窗口关闭","link":"#窗口关闭","children":[]},{"level":3,"title":"低能窗口综合征","slug":"低能窗口综合征","link":"#低能窗口综合征","children":[]}]},{"level":2,"title":"拥塞控制","slug":"拥塞控制","link":"#拥塞控制","children":[{"level":3,"title":"拥塞窗口","slug":"拥塞窗口","link":"#拥塞窗口","children":[]},{"level":3,"title":"慢启动","slug":"慢启动","link":"#慢启动","children":[]},{"level":3,"title":"拥塞避免","slug":"拥塞避免","link":"#拥塞避免","children":[]},{"level":3,"title":"拥塞发生","slug":"拥塞发生","link":"#拥塞发生","children":[]},{"level":3,"title":"快速恢复","slug":"快速恢复","link":"#快速恢复","children":[]},{"level":3,"title":"总结","slug":"总结","link":"#总结","children":[]}]}],"git":{"createdTime":1708182782000,"updatedTime":1708182782000,"contributors":[{"name":"jisongyang","email":"jisongyang@kuaishou.com","commits":1}]},"readingTime":{"minutes":16.32,"words":4897},"filePathRelative":"posts/计算机网络/TCP-2.md","localizedDate":"2021年12月3日","excerpt":"<h2> TCP 是如何保证可靠性的</h2>\\n<ul>\\n<li>数据分块：应用数据被分割成 TCP 认为最适合发送的数据块。</li>\\n<li>序列号和确认应答：TCP 给发送的每一个包进行编号，在传输的过程中，每次接收方收到数据后，都会对传输方进行确认应答，即发送 ACK\\n报文，这个 ACK 报文当中带有对应的确认序列号，告诉发送方成功接收了哪些数据以及下一次的数据从哪里开始发。除此之外，接收方可以根据序列号对数据包进行排序，把有序数据传送给应用层，并丢弃重复的数据。</li>\\n<li>校验和： TCP 将保持它首部和数据部分的检验和。这是一个端到端的检验和，目的是检测数据在传输过程中的任何变化。如果收到报文段的检验和有差错，TCP\\n将丢弃这个报文段并且不确认收到此报文段。</li>\\n<li>流量控制： TCP 连接的双方都有一个固定大小的缓冲空间，发送方发送的数据量不能超过接收端缓冲区的大小。当接收方来不及处理发送方的数据，会提示发送方降低发送的速率，防止产生丢包。TCP\\n通过滑动窗口协议来支持流量控制机制。</li>\\n<li>拥塞控制： 当网络某个节点发生拥塞时，减少数据的发送。</li>\\n<li>ARQ协议： 也是为了实现可靠传输的，它的基本原理就是每发完一个分组就停止发送，等待对方确认。在收到确认后再发下一个分组。</li>\\n<li>超时重传： 当 TCP 发出一个报文段后，它启动一个定时器，等待目的端确认收到这个报文段。如果超过某个时间还没有收到确认，将重发这个报文段。</li>\\n</ul>","autoDesc":true}');export{e as data};