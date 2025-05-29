import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as n,a as e,b as l}from"./app-CN-Tp3xY.js";const r={},i=e(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Content-type: application/json&quot;</span> <span class="token parameter variable">-X</span> POST 
<span class="token parameter variable">-d</span> <span class="token string">&#39;$json&#39;</span> <span class="token string">&#39;$url&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>curl文件下载
curl将下载文件输出到stdout，将进度信息输出到stderr，不显示进度信息使用–silent 选项。

<span class="token number">1</span>. <span class="token function">curl</span> URL <span class="token parameter variable">--silent</span>
这条命令是将下载文件输出到终端，所有下载的数据都被写入到stdout。

<span class="token number">2</span>. <span class="token function">curl</span> URL <span class="token parameter variable">--silent</span> <span class="token parameter variable">-O</span>
使用选项 <span class="token parameter variable">-O</span> 将下载的数据写入到文件，必须使用文件的绝对地址。

<span class="token number">3</span>. <span class="token function">curl</span> URL <span class="token parameter variable">-o</span> filename <span class="token parameter variable">--progress</span>
<span class="token comment">######################################### 100.0%</span>
选项 <span class="token parameter variable">-o</span> 将下载数据写入到指定名称的文件中，并使用 –progress 显示进度条。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>比如:<code>curl http://211.87.224.233:9999/file/sftp/sdu-weblab.helloworld.jingtao.tar.gz -o sdu-weblab.helloworld.jingtao.tar.gz </code></p>`,3),t=l("p",{"var##*":""},"$",-1),c=[i,t];function o(p,d){return a(),n("div",null,c)}const m=s(r,[["render",o],["__file","curl模板.html.vue"]]);export{m as default};
