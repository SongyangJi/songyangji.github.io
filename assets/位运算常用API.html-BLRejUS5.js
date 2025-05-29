import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,a as t}from"./app-CN-Tp3xY.js";const p={},e=t(`<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>


<span class="token comment">// 将某一位变成 1</span>
<span class="token keyword">void</span> <span class="token function">bitTo1</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span> bit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    x <span class="token operator">|=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> bit
<span class="token punctuation">}</span>

<span class="token comment">// 将某一位变成 0 </span>
<span class="token keyword">void</span> <span class="token function">bitTo0</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span> bit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    x <span class="token operator">&amp;=</span> <span class="token operator">~</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">&lt;&lt;</span> bit<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// y 是否是 x 的子集</span>
<span class="token keyword">bool</span> <span class="token function">checkSubset</span><span class="token punctuation">(</span><span class="token keyword">int</span> y<span class="token punctuation">,</span><span class="token keyword">int</span> x<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> x<span class="token operator">-</span><span class="token punctuation">(</span>x<span class="token operator">^</span>y<span class="token punctuation">)</span> <span class="token operator">==</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// lowbit运算,求出最后一个的二进制状态下的1对应的十进制数值</span>
<span class="token keyword">int</span> <span class="token function">lowbit</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> x<span class="token operator">&amp;</span><span class="token operator">-</span>x<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 统计 1 的个数</span>
<span class="token keyword">int</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> cnt <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>x<span class="token operator">&gt;</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        cnt<span class="token operator">++</span><span class="token punctuation">;</span>
        x <span class="token operator">-=</span> <span class="token function">lowbit</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> cnt<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">_count</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> cnt <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>x<span class="token operator">&gt;</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>x<span class="token operator">&amp;</span><span class="token number">1</span><span class="token punctuation">)</span> cnt<span class="token operator">++</span><span class="token punctuation">;</span>
        x <span class="token operator">&gt;&gt;=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> cnt<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 枚举子集</span>
<span class="token keyword">void</span> <span class="token function">subsets</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> cnt <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span>x<span class="token punctuation">;</span>i<span class="token punctuation">;</span>i<span class="token operator">=</span><span class="token punctuation">(</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">&amp;</span>x<span class="token punctuation">)</span><span class="token punctuation">{</span>
        cnt<span class="token operator">++</span><span class="token punctuation">;</span>
        cout<span class="token operator">&lt;&lt;</span>i<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
        cout<span class="token operator">&lt;&lt;</span><span class="token punctuation">(</span><span class="token function">checkSubset</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span>x<span class="token punctuation">)</span><span class="token operator">?</span><span class="token function">to_string</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&quot;是&quot;</span><span class="token operator">+</span><span class="token function">to_string</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&quot;的子集&quot;</span><span class="token operator">:</span><span class="token string">&quot;error&quot;</span><span class="token punctuation">)</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 空集也是子集,所以还要加1</span>
    cnt<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">subsets</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","位运算常用API.html.vue"]]);export{r as default};
