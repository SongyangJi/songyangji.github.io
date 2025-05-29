import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as n,a}from"./app-CN-Tp3xY.js";const i={},l=a(`<h1 id="vuepress-hope" tabindex="-1"><a class="header-anchor" href="#vuepress-hope" aria-hidden="true">#</a> VuePress &amp; Hope</h1><ul><li>vuepress: vue 驱动的静态网站生成器</li></ul><p>https://vuepress.vuejs.org/zh/</p><ul><li>hope: 一个具有强大功能的 vuepress 主题</li></ul><p>https://theme-hope.vuejs.press/zh/</p><h2 id="运行环境" tabindex="-1"><a class="header-anchor" href="#运行环境" aria-hidden="true">#</a> 运行环境</h2><ul><li>node</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">node</span> <span class="token parameter variable">-v</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>npm</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="创建项目-项目结构" tabindex="-1"><a class="header-anchor" href="#创建项目-项目结构" aria-hidden="true">#</a> 创建项目&amp;项目结构</h2><p><strong>创建项目</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> init vuepress-theme-hope@latest blog-vuehope
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>VuePress 只控制 VuePress 项目文件夹中的文件，也就是默认模板生成的 <code>src</code> 文件夹，项目下的其他文件不受 VuePress 控制。</p><p>一个基本的<strong>项目结构</strong>如下:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.
├── .github (可选的) → GitHub 配置文件存放路径
│    └── workflow → GitHub 工作流配置
│         └── docs-deploy.yml → 自动部署文档的工作流
│
├── src → 文档文件夹
│    │
│    ├── .vuepress (可选的) → VuePress 配置文件夹
│    │    │
│    │    ├── dist (默认的) → 构建输出目录
│    │    │
│    │    ├── public (可选的) → 静态资源目录
│    │    │
│    │    ├── styles (可选的) → 用于存放样式相关的文件
│    │    │
│    │    ├── config.{js,ts} (可选的) → 配置文件的入口文件
│    │    │
│    │    └── client.{js,ts} (可选的) → 客户端文件
│    │
│    ├── ... → 其他项目文档
│    │
│    └── README.md → 项目主页
│
└── package.json → Nodejs 配置文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="项目命令" tabindex="-1"><a class="header-anchor" href="#项目命令" aria-hidden="true">#</a> 项目命令</h2><p>如果你在使用 VuePress Theme Hope 模板，你可以在 <code>package.json</code> 中发现下列三个命令:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;docs:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build src&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;docs:clean-dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev src --clean-cache&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;docs:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev src&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;docs:update-package&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npx vp-update&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以在项目路径下执行（package.json的父文件夹下）</p><ul><li><code>npm run docs:dev</code> 启动开发服务器</li><li><code>npm run docs:build</code> 构建项目并输出</li><li><code>npm run docs:clean-dev</code> 清除缓存并启动开发服务器</li></ul>`,21),d=[l];function r(c,o){return e(),n("div",null,d)}const u=s(i,[["render",r],["__file","101-VuePressHope.html.vue"]]);export{u as default};
