import{_ as p,M as o,p as i,q as l,R as n,t as s,N as e,a1 as t}from"./framework-5866ffd3.js";const c="/PickiUpDocs/img/2023-02-28-00-39-39.png",r={},u=n("h1",{id:"vuepress基本搭建教程-记录简洁版",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vuepress基本搭建教程-记录简洁版","aria-hidden":"true"},"#"),s(" vuepress基本搭建教程-记录简洁版")],-1),d=n("blockquote",null,[n("p",null,"本教程主要记录关键步骤，尽量不带有图示，以文本为主。操作主要以命令行形式，行文风格保持简洁，便于快速阅读")],-1),v=n("h2",{id:"搭建本地服务",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#搭建本地服务","aria-hidden":"true"},"#"),s(" 搭建本地服务")],-1),k=n("p",null,"除了 '搭建本地服务' 这个教程的内容，给出详细的步骤与配置用于入门外，剩下的可能的配置都参考 vuepress文档中配置，配置的情况用列表方式展示配置的历史并附上文档对应的链接位置。",-1),m={href:"https://vuepress.vuejs.org/zh/guide/",target:"_blank",rel:"noopener noreferrer"},b=t(`<h3 id="准备" tabindex="-1"><a class="header-anchor" href="#准备" aria-hidden="true">#</a> 准备</h3><blockquote><p>此教程主要针对windows系统操作，所有命令操作在 bit bash 或者 vscode内置终端上操作</p></blockquote><ul><li><p>git bash</p></li><li><p>nodejs</p></li><li><p>代码编辑器，推荐 VScode</p></li></ul><p>上述的 git bash , nodejs 安装完成后，可以执行下面的命令验证是否安装成功</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看 node(nodejs)版本，如果执行后显示版本信息，说明安装成功</span>
<span class="token function">node</span> <span class="token parameter variable">-v</span>
<span class="token comment"># 查看 git(git bash)版本，如果执行后显示版本信息，说明安装成功</span>
<span class="token function">git</span> <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="初始化vuepress" tabindex="-1"><a class="header-anchor" href="#初始化vuepress" aria-hidden="true">#</a> 初始化vuepress</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 在本地某个目录（文件夹）创建一个目录用于存放 vuepress相关文件, vuepress-docs 表示文件夹名称</span>
<span class="token function">mkdir</span> vuepress-docs

<span class="token comment"># 将 VuePress 安装为本地依赖。下面的命令等价于 npm install -D vuepress</span>
<span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> vuepress 

<span class="token comment"># 创建你的第一篇文档</span>
<span class="token comment">#  mkdir docs 表示在当前目录下创建名为 docs的文件夹，这个文件夹是用来存放我们的文章和相关配置文件。</span>
<span class="token comment">#  echo &#39;# Hello VuePress&#39; &gt; docs/README.md 表示 在 docs目录下创建 README.md 首页文件</span>
<span class="token function">mkdir</span> docs <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;# Hello VuePress&#39;</span> <span class="token operator">&gt;</span> docs/README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>yarn add -D vuepress</code> 这一步执行后，文件夹下的内容结构如下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">.</span>
├── node_modules/   <span class="token comment"># 汇总了工程中所用到的所有的 npm 包或者依赖包</span>
├── package.json    <span class="token comment"># 定义了这个项目所需要的各种模块，以及项目的配置信息（比如名称、版本、许可证等元数据）</span>
└── yarn.lock       <span class="token comment"># yarn管理依赖的文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改<code>package.json</code>文件，该文件用于我们项目的打包和运行，修改后的代码如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;项目的名称&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;index.js&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;docs:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev docs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;docs:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;keywords&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;项目作者&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;license&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ISC&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;vuepress&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^1.9.8&quot;</span>
  <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="本地启动服务器" tabindex="-1"><a class="header-anchor" href="#本地启动服务器" aria-hidden="true">#</a> 本地启动服务器</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 执行命令启动服务器，用于预览vue项目 ，下面的命令等价于 npm run docs:dev</span>
<span class="token function">yarn</span> docs:dev 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果出现如下内容信息则代表运行成功：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>success [01:48:42] Build f28d33 finished in 4131 ms!
&gt; VuePress dev server listening at http://localhost:8080/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>点击链接访问：http://localhost:8080/</p><p>我们一个最简单的博客就搭建成功了。</p><h3 id="编写文章" tabindex="-1"><a class="header-anchor" href="#编写文章" aria-hidden="true">#</a> 编写文章</h3>`,18),h=n("strong",null,"首页",-1),g=n("code",null,"README.md",-1),y={href:"https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E9%A6%96%E9%A1%B5",target:"_blank",rel:"noopener noreferrer"},f=t(`<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">home</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">heroImage</span><span class="token punctuation">:</span> /hero.png
<span class="token key atrule">heroText</span><span class="token punctuation">:</span> Hero 标题
<span class="token key atrule">tagline</span><span class="token punctuation">:</span> Hero 副标题
<span class="token key atrule">actionText</span><span class="token punctuation">:</span> 快速上手 →
<span class="token key atrule">actionLink</span><span class="token punctuation">:</span> /zh/guide/
<span class="token key atrule">features</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 简洁至上
  <span class="token key atrule">details</span><span class="token punctuation">:</span> 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
<span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Vue驱动
  <span class="token key atrule">details</span><span class="token punctuation">:</span> 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
<span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 高性能
  <span class="token key atrule">details</span><span class="token punctuation">:</span> VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
<span class="token key atrule">footer</span><span class="token punctuation">:</span> MIT Licensed <span class="token punctuation">|</span> Copyright © 2018<span class="token punctuation">-</span>present Evan You
<span class="token punctuation">---</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建新的 markdown 文件作为 文章 和 侧边栏 链接选项。创建如下结构的文件夹及文件，参照 <code>actionLink </code>的 <code>/zh/guide/</code>。其中 <code>zh</code> 实际对应一个<code>zh</code>文件夹，<code> guide/</code> 实际对应着一个<code> guide.md</code> 文件。</p><p>在<code>guide.md</code>中写下如下的markdown格式的内容</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> Hello VuePress</span>

<span class="token title important"><span class="token punctuation">##</span> 简洁至上 </span>
以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。

<span class="token title important"><span class="token punctuation">##</span> Vue驱动</span>
享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。

<span class="token title important"><span class="token punctuation">##</span> 高性能</span>
VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加侧边栏" tabindex="-1"><a class="header-anchor" href="#添加侧边栏" aria-hidden="true">#</a> 添加侧边栏</h3><p>侧边栏的构成</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>页面标题 <span class="token comment"># docs/.vuepress/config.js 中 title 的值</span>
	
侧边栏分组 <span class="token comment"># themeConfig &gt; sidebar &gt; title 的值，表示侧边栏分组</span>
	<span class="token punctuation">[</span>显示的markdown文章标题<span class="token punctuation">]</span> <span class="token comment"># children &gt; title的值，不一定要和实际文件名一致</span>
        <span class="token punctuation">[</span>markdown文章对应的大纲目录<span class="token punctuation">]</span> <span class="token comment"># markdown文章对应的大纲目录</span>
侧边栏分组2
侧边栏分组3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code>docs</code>文件夹下新建<code>.vuepress</code>文件夹，然后在此文件夹下新建<code>config.js</code>，用于配置我们的博客相关配置，编写代码如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// docs/.vuepress/config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Hello VuePress&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&#39;Just playing around&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">markdown</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">lineNumbers</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 主题配置</span>
    <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;入门搭建vuepress&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/zh/guide&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">collapsable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 不折叠</span>
                <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;vuepress简介&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&quot;/zh/guide&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;中文极简版搭建教程&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&quot;/zh/vuepress极简搭建教程&quot;</span> <span class="token punctuation">}</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>children: [&#39;/zh/guide/&#39; ]</code> 这里的 <code>/zh/guide/ </code> 也是上一步 <code>actionLink: /zh/guide/</code> 中的 <code>/zh/guide/</code>。当设置成侧边栏后，访问首页，点击 <code>快速上手 →</code> 即可进入并定位到 <code>guide</code> 标题位置</p></blockquote><p>创建文件(夹)结构用来创建侧边栏 （⚠️这里的文件结构对应上面的 sidebar 路由路径设置 ）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">.</span>
├── docs/
│   ├── .vuepress/
│   │   └── config.js
│   └── zh/
│       └── guide.md     			<span class="token comment">#对应 &#39;vuepress简介&#39;</span>
<span class="token operator">|</span>       └── vuepressTutorial.md     <span class="token comment">#对应 &#39;中文极简版搭建教程&#39;</span>
├── node_modules/
├── package.json
└── yarn.lock 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以上述的侧边栏的链接 &#39;vuepress简介&#39; 就对应着 <code>guide.md</code> 的内容，&#39;中文极简版搭建教程&#39; 就对应着 <code>vuepressTutorial.md</code>的内容</p><p>上面文件结构中<code> zh/</code> 文件夹下的文件在侧边栏中会渲染成侧边栏标题链接</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Hello VuePress

入门搭建vuepress         
	vuepress简介    	   <span class="token comment"># 对应 guide.md   </span>
    	简洁至上		   <span class="token comment"># 对应 ## 简洁至上</span>
    	Vue驱动			<span class="token comment"># 对应 ## Vue驱动</span>
    	高性能			    <span class="token comment"># 对应 ## 高性能</span>
	中文极简版搭建教程	  <span class="token comment"># 对应 vuepressTutorial.md    </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多个侧边栏" tabindex="-1"><a class="header-anchor" href="#多个侧边栏" aria-hidden="true">#</a> 多个侧边栏</h3><h4 id="个人vuepress中页面结构安排" tabindex="-1"><a class="header-anchor" href="#个人vuepress中页面结构安排" aria-hidden="true">#</a> 个人vuepress中页面结构安排</h4><p><a href="#%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84%E8%A6%81%E6%B1%82">回到原处</a></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">.</span>
└── docs/
    ├── .vuepress/
    │   └── config.js
    ├── pages/							<span class="token comment"># pages 用来存放所有的文章源码</span>
    │   └── <span class="token punctuation">[</span>areaSite<span class="token punctuation">]</span>/					<span class="token comment"># areaSite 表示一个领域站点	        前端</span>
    │       ├── <span class="token punctuation">[</span>category1<span class="token punctuation">]</span>/			<span class="token comment"># category表示这个领域下的分组       JavaScript</span>
    │       │   ├── foo.md              <span class="token comment"># 表示分组下的具体的文章 			   xxx</span>
    │       │   └── bar.md
    │       └── <span class="token punctuation">[</span>category2<span class="token punctuation">]</span>/			<span class="token comment"># category表示这个领域下的分组       Nodejs</span>
    │           ├── foo.md				<span class="token comment"># 表示分组下的具体的文章              xxx</span>
    │           └── bar.md
    └── README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="实际对应的文件结构" tabindex="-1"><a class="header-anchor" href="#实际对应的文件结构" aria-hidden="true">#</a> 实际对应的文件结构</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.
└── docs/
    ├── .vuepress
    └── pages/
        └── tools/
            ├── git/
            │   ├── README.md
            │   └── git-common-command.md
            ├── regex/
            │   ├── README.md
            │   ├── regex-advanced.md
            │   └── regex-basic.md
            ├── vscode/
            │   ├── README.md
            │   ├── vscode-shortcuts.md
            │   └── vscode-tricks.md
            ├── vuepress/
            │   ├── README.md
            │   ├── vuepress-intro.md
            │   └── vuepress-quick-start.md
            └── README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="config里面的配置" tabindex="-1"><a class="header-anchor" href="#config里面的配置" aria-hidden="true">#</a> config里面的配置</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">// 第一个领域站点</span>
            <span class="token string-property property">&#39;/pages/tools/&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;git&#39;</span><span class="token punctuation">,</span>   <span class="token comment">// 必要的</span>
                    <span class="token literal-property property">collapsable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 可选的, 默认值是 true,</span>
                    <span class="token literal-property property">sidebarDepth</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>    <span class="token comment">// 可选的, 默认值是 1</span>
                    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                        <span class="token string">&quot;git/git-common-command&quot;</span><span class="token punctuation">,</span>
                    <span class="token punctuation">]</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;regex&#39;</span><span class="token punctuation">,</span>   <span class="token comment">// 必要的</span>
                    <span class="token literal-property property">collapsable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 可选的, 默认值是 true,</span>
                    <span class="token literal-property property">sidebarDepth</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>    <span class="token comment">// 可选的, 默认值是 1</span>
                    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                        <span class="token string">&quot;regex/regex-basic&quot;</span><span class="token punctuation">,</span>
                        <span class="token string">&quot;regex/regex-advanced&quot;</span>
                    <span class="token punctuation">]</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;vscode&#39;</span><span class="token punctuation">,</span>   <span class="token comment">// 必要的</span>
                    <span class="token literal-property property">collapsable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 可选的, 默认值是 true,</span>
                    <span class="token literal-property property">sidebarDepth</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>    <span class="token comment">// 可选的, 默认值是 1</span>
                    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                        <span class="token string">&quot;vscode/vscode-shortcuts&quot;</span><span class="token punctuation">,</span>
                        <span class="token string">&quot;vscode/vscode-tricks&quot;</span><span class="token punctuation">,</span>
                    <span class="token punctuation">]</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;vuepress&#39;</span><span class="token punctuation">,</span>   <span class="token comment">// 必要的</span>
                    <span class="token literal-property property">collapsable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 可选的, 默认值是 true,</span>
                    <span class="token literal-property property">sidebarDepth</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>    <span class="token comment">// 可选的, 默认值是 1</span>
                    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                        <span class="token string">&quot;vuepress/vuepress-intro&quot;</span><span class="token punctuation">,</span>
                        <span class="token string">&quot;vuepress/vuepress-quick-start&quot;</span>
                    <span class="token punctuation">]</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>

            <span class="token punctuation">]</span><span class="token punctuation">,</span>

            <span class="token string-property property">&#39;/&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>        <span class="token comment">/* / */</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="附录1——简单说明vue访问路径和文件夹结构对应关系" tabindex="-1"><a class="header-anchor" href="#附录1——简单说明vue访问路径和文件夹结构对应关系" aria-hidden="true">#</a> 附录1——简单说明vue访问路径和文件夹结构对应关系</h2><p>所有可访问的文件夹的资源都要位于 <code>docs/</code>文件夹下。</p><p>假如设备中文件结构如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">.</span>
├── docs/
│   ├── .vuepress/
│   │   └── config.js
│   ├── zh/
│   │   └── guide.md/
│   │   └── vuepressTutorial.md
│   └── README.md
└── node_modules/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要能正确地以服务器形式访问资源，则访问路径地址应该如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 格式： http://+localhost+8080+/+资源路径+/+资源文件.html</span>

<span class="token comment"># 访问路径为 docs/zh/guide.md 则访问路径如下</span>
http://localhost:8080/zh/guide.html

<span class="token comment"># 访问路径为 docs/README.md 则访问路径如下</span>
http://localhost:8080/zh/
<span class="token comment"># 或者</span>
http://localhost:8080/zh/README.html

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当输入某个地址，但是写上没有资源文件名，就会自动查找这个路径下是否有名为 <code>README.md</code> 的文件，有就显示这个文件内容，否则显示 404 表示找不到这个页面。</p><p>如果是名为 <code>README </code>的 <code>md </code>文件，访问时可以省略 资源文件名以及<code> .html</code> ，否则访问时原本文件系统中的<code>.md</code>文件后缀需要替换为<code>.html</code></p>`,31),q={href:"https://vuepress.vuejs.org/zh/guide/directory-structure.html#%E9%BB%98%E8%AE%A4%E7%9A%84%E9%A1%B5%E9%9D%A2%E8%B7%AF%E7%94%B1",target:"_blank",rel:"noopener noreferrer"},E=t('<blockquote><p>对于上述的目录结构，默认页面路由地址如下：</p><table><thead><tr><th>文件的相对路径</th><th>页面路由地址</th></tr></thead><tbody><tr><td><code>/README.md</code></td><td><code>/</code></td></tr><tr><td><code>/guide/README.md</code></td><td><code>/guide/</code></td></tr><tr><td><code>/config.md</code></td><td><code>/config.html</code></td></tr></tbody></table></blockquote><h2 id="附录2——页面内容结构" tabindex="-1"><a class="header-anchor" href="#附录2——页面内容结构" aria-hidden="true">#</a> 附录2——页面内容结构</h2><p><img src="'+c+`" alt=""></p><p>其中 「文章链接」是链接，链接对应这个文章的访问路径。</p><h2 id="附录3——解读vuepress中的侧边栏配置" tabindex="-1"><a class="header-anchor" href="#附录3——解读vuepress中的侧边栏配置" aria-hidden="true">#</a> 附录3——解读vuepress中的侧边栏配置</h2><h3 id="需要知道的内容" tabindex="-1"><a class="header-anchor" href="#需要知道的内容" aria-hidden="true">#</a> 需要知道的内容</h3><ul><li>本地设备中的一个<code>.md</code>经过vuepress解析后会编译为 一个<code>.html</code>文件</li><li>每个位于 <code>docs</code>目录下且决定作为源码目录的子目录，要求这个目录下必须至少有个名为<code>README.md</code>文件作为默认访问页面</li><li>除了 访问 <code>README.md </code> 对应的网页不需要添加资源名称（<code> /README.html</code> ) 外，其他名称的 <code>.md</code> 文件（如<code>foo.md</code>）访问网页时都需要添加 资源名称 （<code>/路径/foo.html</code>）</li></ul><h3 id="vuepress中一个页面以及页面侧边栏构成情况" tabindex="-1"><a class="header-anchor" href="#vuepress中一个页面以及页面侧边栏构成情况" aria-hidden="true">#</a> vuepress中一个页面以及页面侧边栏构成情况</h3><p>比如想创建一个网址，此网址下记录和 前端 有关的内容（HTML_CSS、JavaScript、Nodejs……），则希望渲染的侧边栏内容结构如下。下面的分类比较常见，某个领域分为多个类别，每个类别下面又有若干文章。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">.</span>
├── HTML_CSS/		<span class="token comment"># 表示前端这个领域下的知识分类</span>
│   ├── foo			<span class="token comment"># foo 表示具体的某个文章链接</span>
│   └── bar			<span class="token comment"># bar 表示具体的某个文章链接</span>
├── JavaScript/     
│   ├── foo
│   └── bar
├── ES6/
│   ├── foo
│   └── bar
├── Nodejs/
│   ├── foo
│   └── bar
├── Vue/
│   ├── foo
│   └── bar
└── React/
    ├── foo
    └── bar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的分类 <code>HTML_CSS</code>、<code>JavaScript</code>等在本地项目中对应一个文件夹，而 <code>foo</code>, <code>bar </code>对应着文件夹下面的 <code>foo.md </code>，<code> bar.md</code>。</p><p>单个分类对应的文件结构应该如下 （注意不要忘了每个源码文件夹下必须设置一个 <code>README.md</code>，不然访问这个站点，会 <code>404 </code>）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">.</span>
└── docs/
    └── <span class="token punctuation">[</span>多层文件夹<span class="token punctuation">]</span>/
        └── HTML_CSS/
            ├── foo.md
            ├── bar.md
            └── README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>HTML_CSS/
├── foo.md
├── bar.md
└── README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>表示一个单独的站点，站点下有三个页面。</p><p>所以构建一个「前端」领域的内容页面，侧边栏实际上组合了多个站点，每个站点下都包含一个默认页面和若干非默认页面。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>HTML_CSS/   <span class="token comment"># 站点1</span>
JavaScript/ <span class="token comment"># 站点2</span>
ES6/        <span class="token comment"># 站点3</span>
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而这个站点在vuepress视为一个侧边栏分组，如下有一个关于侧边栏的配置</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;入门搭建vuepress&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/zh/guide&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">collapsable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 不折叠</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;vuepress简介&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&quot;/zh/guide&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;中文极简版搭建教程&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&quot;/zh/vuepress极简搭建教程&quot;</span> <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上述配置可以找到关于 站点 的配置如下，一个站点用 <code>{} </code>对象表示</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;入门搭建vuepress&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/zh/guide&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">collapsable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 不折叠</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;vuepress简介&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&quot;/zh/guide&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;中文极简版搭建教程&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&quot;/zh/vuepress极简搭建教程&quot;</span> <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上述的侧边栏配置中，可以读取的信息</p><ul><li><code>/zh/guide</code> —— 在项目中对应存在<code> zh/guide.md</code> ,因为 路径最后没有用 <code>/</code></li><li><code>zh</code>是个文件夹，文件夹下面除了有 <code> guide.md</code> 还有 <code>vuepress极简搭建教程.md</code></li></ul><p>侧边栏实际上是由链接构成的内容区域，链接来源于 <code>children </code>数组中设置的 <code>path</code>, 其中 <code>title </code>表示链接显示文字, 所以上述的配置实际上是把配置好的内容渲染到某个站点的侧边栏上。这样表明每个站点的侧边栏都可以任意组合 已存在的站点（但是保证内容对应的资源要存在）。</p><h3 id="侧边栏分组" tabindex="-1"><a class="header-anchor" href="#侧边栏分组" aria-hidden="true">#</a> 侧边栏分组</h3><p>你可以通过使用<strong>对象</strong>来将侧边栏划分成多个组：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        title<span class="token operator">:</span> &#39;Group <span class="token number">1</span>&#39;<span class="token punctuation">,</span>   <span class="token comment">// 必要的</span>
        path<span class="token operator">:</span> &#39;/foo/&#39;<span class="token punctuation">,</span>      <span class="token comment">// 可选的, 标题的跳转链接，应为绝对路径且必须存在</span>
        collapsable<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 可选的, 默认值是 true,</span>
        sidebarDepth<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>    <span class="token comment">// 可选的, 默认值是 1</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
            &#39;/&#39;
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        title<span class="token operator">:</span> &#39;Group <span class="token number">2</span>&#39;<span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">/* ... */</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
        initialOpenGroupIndex<span class="token operator">:</span> <span class="token number">-1</span> <span class="token comment">// 可选的, 默认值是 0</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你想为不同的页面组来显示不同的侧边栏，则结构配置文件里面的内容结构应该如下。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>sidebar<span class="token operator">:</span><span class="token punctuation">{</span>
    &#39;/foo/&#39;<span class="token operator">:</span> <span class="token punctuation">[</span>
        &#39;&#39;<span class="token punctuation">,</span>     <span class="token comment">/* /foo/ */</span>
        &#39;one&#39;<span class="token punctuation">,</span>  <span class="token comment">/* /foo/one.html */</span>
        &#39;two&#39;   <span class="token comment">/* /foo/two.html */</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>

    &#39;/bar/&#39;<span class="token operator">:</span> <span class="token punctuation">[</span>
        &#39;&#39;<span class="token punctuation">,</span>      <span class="token comment">/* /bar/ */</span>
        &#39;three&#39;<span class="token punctuation">,</span> <span class="token comment">/* /bar/three.html */</span>
        &#39;four&#39;   <span class="token comment">/* /bar/four.html */</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// fallback</span>
    &#39;/&#39;<span class="token operator">:</span> <span class="token punctuation">[</span>
        &#39;&#39;<span class="token punctuation">,</span>        <span class="token comment">/* / */</span>
        &#39;contact&#39;<span class="token punctuation">,</span> <span class="token comment">/* /contact.html */</span>
        &#39;about&#39;    <span class="token comment">/* /about.html */</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="附录4——自制脚本-快速创建侧边栏导航" tabindex="-1"><a class="header-anchor" href="#附录4——自制脚本-快速创建侧边栏导航" aria-hidden="true">#</a> 附录4——自制脚本-快速创建侧边栏导航</h2><h3 id="目录结构要求" tabindex="-1"><a class="header-anchor" href="#目录结构要求" aria-hidden="true">#</a> 目录结构要求</h3><p>参照 <a href="#%E4%B8%AA%E4%BA%BAvuepress%E4%B8%AD%E9%A1%B5%E9%9D%A2%E7%BB%93%E6%9E%84%E5%AE%89%E6%8E%92">个人vuepress中页面结构安排</a></p><h3 id="util-js工具文件" tabindex="-1"><a class="header-anchor" href="#util-js工具文件" aria-hidden="true">#</a> util.js工具文件</h3><p>在 <code>.vuepress</code>文件夹下创建 <code>util.js</code>文件 （确保<code>util.js </code>和 <code>config.js </code>在同一目录），内容如下</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span>: Nathaniel
 * <span class="token keyword">@desc</span>：快速生成 侧边栏 和 导航栏配置
 * <span class="token keyword">@date</span>: 2023-02-27 02:55:24
 * @Email：yang47984@gmail.com
 * <span class="token keyword">@url</span>：github.com/martinniee/
 */</span>



<span class="token doc-comment comment">/**
 * 自动生成侧边栏
 * 
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">areaFolder</span>    指定领域文件夹
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">categoryFolder</span>  指定分类文件夹
 * <span class="token keyword">@returns</span> 数组
 */</span>

<span class="token keyword">const</span> <span class="token function-variable function">getSideBar</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">getSideBar</span><span class="token punctuation">(</span><span class="token parameter">areaFolder<span class="token punctuation">,</span> categoryFolder</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// pages下的  指定areaSite所在路径 （只能用绝对路径）</span>
    areaSite_path <span class="token operator">=</span> <span class="token string">&#39;D:/Documents/docs-base-on-vuepress/docs/pages/&#39;</span> <span class="token operator">+</span> areaFolder <span class="token operator">+</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">;</span>

    <span class="token comment">// pages下的 指定areaSite下的 指定category所在路径</span>
    category_path <span class="token operator">=</span> areaSite_path <span class="token operator">+</span> categoryFolder <span class="token operator">+</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">;</span>

    <span class="token comment">// file_list 表示指定areaSite下的 指定category下的所有md文件列表</span>
    <span class="token keyword">let</span> file_list <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readdirSync</span><span class="token punctuation">(</span>category_path<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> singleAreaSiteText <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> childrenText <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">// 遍历生成 childrenText 即 所有的文章链接</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> file_list<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>file_list<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&quot;README.md&quot;</span><span class="token punctuation">)</span> <span class="token keyword">continue</span><span class="token punctuation">;</span>
        childrenText<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>
            categoryFolder <span class="token operator">+</span> <span class="token string">&quot;/&quot;</span> <span class="token operator">+</span> file_list<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    singleAreaSiteText <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> categoryFolder <span class="token operator">+</span> <span class="token string">&quot;文档&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">collapsable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">sidebarDepth</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> childrenText
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> singleAreaSiteText<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span> getSideBar <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="config-js配置格式" tabindex="-1"><a class="header-anchor" href="#config-js配置格式" aria-hidden="true">#</a> config.js配置格式</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// docs/.vuepress/config.js</span>
<span class="token comment">// 最上方需要导入 util.js模块</span>
<span class="token keyword">const</span> util <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./util&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">...</span>
<span class="token operator">...</span>
<span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 第1个领域站点</span>
    <span class="token string-property property">&#39;/pages/&lt;areaSite&gt;/&#39;</span> <span class="token operator">:</span> <span class="token punctuation">[</span>
        util<span class="token punctuation">.</span><span class="token function">getSideBar</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;areaSite&gt;&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;&lt;category&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        util<span class="token punctuation">.</span><span class="token function">getSideBar</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;areaSite&gt;&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;&lt;category&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        util<span class="token punctuation">.</span><span class="token function">getSideBar</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;areaSite&gt;&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;&lt;category&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        util<span class="token punctuation">.</span><span class="token function">getSideBar</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;areaSite&gt;&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;&lt;category&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 第2个领域站点</span>
    <span class="token string-property property">&#39;/pages/&lt;areaSite&gt;/&#39;</span> <span class="token operator">:</span> <span class="token punctuation">[</span>
        util<span class="token punctuation">.</span><span class="token function">getSideBar</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;areaSite&gt;&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;&lt;category&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        util<span class="token punctuation">.</span><span class="token function">getSideBar</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;areaSite&gt;&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;&lt;category&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        util<span class="token punctuation">.</span><span class="token function">getSideBar</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;areaSite&gt;&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;&lt;category&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        util<span class="token punctuation">.</span><span class="token function">getSideBar</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;areaSite&gt;&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;&lt;category&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token operator">...</span>
    <span class="token operator">...</span>
    <span class="token string-property property">&#39;/&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
       <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>        <span class="token comment">/* / */</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,37),_={href:"https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E5%A4%9A%E4%B8%AA%E4%BE%A7%E8%BE%B9%E6%A0%8F",target:"_blank",rel:"noopener noreferrer"},x=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&#39;/&#39;: [
&#39;&#39;,        /* / */
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实际例子</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 第一个领域站点</span>
    <span class="token string-property property">&#39;/pages/tools/&#39;</span> <span class="token operator">:</span> <span class="token punctuation">[</span>
        util<span class="token punctuation">.</span><span class="token function">getSideBar</span><span class="token punctuation">(</span><span class="token string">&quot;tools&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;git&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        util<span class="token punctuation">.</span><span class="token function">getSideBar</span><span class="token punctuation">(</span><span class="token string">&quot;tools&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;regex&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        util<span class="token punctuation">.</span><span class="token function">getSideBar</span><span class="token punctuation">(</span><span class="token string">&quot;tools&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;vscode&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        util<span class="token punctuation">.</span><span class="token function">getSideBar</span><span class="token punctuation">(</span><span class="token string">&quot;tools&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;vuepress&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token operator">...</span>
    <span class="token operator">...</span>
    <span class="token string-property property">&#39;/&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>        <span class="token comment">/* / */</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置记录" tabindex="-1"><a class="header-anchor" href="#配置记录" aria-hidden="true">#</a> 配置记录</h2>`,4),A={href:"https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E5%B5%8C%E5%A5%97%E7%9A%84%E6%A0%87%E9%A2%98%E9%93%BE%E6%8E%A5",target:"_blank",rel:"noopener noreferrer"},j=n("code",null,"1",-1),B=n("code",null,"h2",-1),S=n("code",null,"0",-1),w=n("code",null,"2",-1),D=n("code",null,"h2",-1),z=n("code",null,"h3",-1),M={href:"https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E6%9C%80%E5%90%8E%E6%9B%B4%E6%96%B0%E6%97%B6%E9%97%B4",target:"_blank",rel:"noopener noreferrer"},V=n("code",null,"themeConfig.lastUpdated",-1),R=n("code",null,"git",-1),T={href:"https://vuepress.vuejs.org/zh/guide/markdown.html#%E4%BB%A3%E7%A0%81%E5%9D%97%E4%B8%AD%E7%9A%84%E8%A1%8C%E9%AB%98%E4%BA%AE",target:"_blank",rel:"noopener noreferrer"},C={href:"https://vuepress.vuejs.org/zh/guide/markdown.html#%E8%A1%8C%E5%8F%B7",target:"_blank",rel:"noopener noreferrer"},H={href:"https://vuepress.vuejs.org/zh/guide/using-vue.html#badge",target:"_blank",rel:"noopener noreferrer"},L={href:"https://vuepress.vuejs.org/zh/plugin/official/plugin-back-to-top.html#vuepress-plugin-back-to-top",target:"_blank",rel:"noopener noreferrer"},P={href:"https://www.vuepress.cn/zh/theme/default-theme-config.html#algolia-%E6%90%9C%E7%B4%A2",target:"_blank",rel:"noopener noreferrer"},F={href:"https://www.vuepress.cn/zh/theme/default-theme-config.html#%E6%9C%80%E5%90%8E%E6%9B%B4%E6%96%B0%E6%97%B6%E9%97%B4",target:"_blank",rel:"noopener noreferrer"},N={href:"https://www.vuepress.cn/zh/theme/default-theme-config.html#%E5%86%85%E7%BD%AE%E6%90%9C%E7%B4%A2",target:"_blank",rel:"noopener noreferrer"};function I(J,G){const a=o("ExternalLinkIcon");return i(),l("div",null,[u,d,v,n("blockquote",null,[k,n("p",null,[s("建议可以从 "),n("a",m,[s("指南 | VuePress"),e(a)]),s(" 看起。")])]),b,n("p",null,[s("修改"),h,g,s("内容, 具体的配置项目可参考官网"),n("a",y,[s("默认主题配置/首页"),e(a)])]),f,n("p",null,[s("下面是来自vuepress官网文档关于"),n("a",q,[s("默认路由"),e(a)]),s("的设定")]),E,n("p",null,[s("最下方的默认路径一定要设置 （ "),n("a",_,[s("多个侧边栏"),e(a)]),s("）")]),x,n("ul",null,[n("li",null,[n("p",null,[n("a",A,[s("嵌套的标题链接"),e(a)]),s(" - 默认的深度是 "),j,s("，它将提取到 "),B,s(" 的标题，设置成 "),S,s(" 将会禁用标题（headers）链接，同时，最大的深度为 "),w,s("，它将同时提取 "),D,s(" 和 "),z,s(" 标题。")])]),n("li",null,[n("p",null,[n("a",M,[s("最后更新时间"),e(a)]),s(" - 你可以通过 "),V,s(" 选项来获取每个文件最后一次 "),R,s(" 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部：")])]),n("li",null,[n("p",null,[n("a",T,[s("代码块中的行高亮"),e(a)])])]),n("li",null,[n("p",null,[n("a",C,[s("行号"),e(a)])])]),n("li",null,[n("p",null,[n("a",H,[s("Badge beta 默认主题"),e(a)])])]),n("li",null,[n("p",null,[n("a",L,[s("@vuepress/plugin-back-to-top"),e(a)])])]),n("li",null,[n("p",null,[n("s",null,[n("a",P,[s("Algolia 搜索"),e(a)])])])]),n("li",null,[n("p",null,[n("a",F,[s("最后更新时间"),e(a)])])]),n("li",null,[n("p",null,[n("a",N,[s("内置搜索"),e(a)])])])])])}const O=p(r,[["render",I],["__file","01-vuepress-quick-start.html.vue"]]);export{O as default};
