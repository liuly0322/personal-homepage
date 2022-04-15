---
pageClass: comment-page
---

# 评课

这里主要是记录下自己大学以来的学习路径啦~

## 大一

2020.9 ~~梦开始的地方~~

### 一秋

这个阶段可能没啥好说的，C 语言入门

第一次接触编程，上课听的还是蛮认真的

入门阶段很推荐上 [洛谷](https://www.luogu.com.cn/) 做点题，从最简单的开始做起，做的时候注意命名风格和代码质量，把基础搞好

这一年程序设计的助教很不错，出的一些简单算法题很有味道，一上来一些基本的编程实践还是很有用的

### 寒假

摸了，有点后悔

但是一想到 20 年的暑假因为疫情只有一个月（碎碎念）又觉得快乐一个寒假也挺好

### 一春

程序设计二，这个时候大概还没有对计算机整体以及一些互联网技术有所认知吧，还是在抱着 C++ 粗粗的黑框框玩（不是）

这门课马老师对图形化的执念很深，我大作业做的是一个图形化的数独，算是第一次接触到了 OOP 的概念（当然现在已经掉进别的语言各种接口各种函数式的坑里了 xd）

这个阶段培养一些抽象的概念还是很好的，由于马老师对图形化的执念我也好奇各种各样的 GUI 界面到底是咋做的，虽然大作业用了 QT，但这似乎并不是一个良好有效的解决 GUI 界面的方案，于是就入了前端的深坑

一开始是凭着兴趣看小甲鱼的 [html+css](https://www.bilibili.com/video/BV1QW411N762) 视频，不得不说他讲课确实很好玩，配合花里胡哨的 html+css 界面效果也很能吸引人

接着就是 js 语言，这是一门脚本语言，但对于当时只学过 C 语言的我来说对脚本语言以及基本的一些概念（比如环境）都没有了解，~~甚至在想 js 的 main 函数是什么~~

然后就是前端实践，不得不说前端工程化做的很良好，这个阶段我接触了 linux 和 git, nodejs（因为在用 hexo 搭一个博客，各种改主题玩），算是对啥事一个工程有了一个比较直观的理解

### 暑假

这个暑假就有点摸了，看了 [oiwiki](https://oi-wiki.org/)，了解了一些基本的数据结构和算法。不得不说这玩意更像一本工具书而不是教科书，单纯看确实有点枯燥

还有就是 [Missing Semester of CS Education](https://missing.csail.mit.edu/)，被誉为神课，不过中文翻译不全，但是总归是要接触英语课的，对着字幕嗯啃也算是能加深对 Linux 和编程的认识

## 大二

### 二秋

这个时候计科专业课基本铺开了，妮可计科当然是~~体系结构特别扎实~~，这个学期课内上的是 ICS, 相比别的学校上 CSAPP, 妮可上 Introduction to Computing Systems, 这书内容比较少，只详细介绍了一个简单的 ISA: LC-3，课程内容基本是体系结构子集，但也算是能让人对计算机有一个底层的认识，因为助教没搞 autograder，自己用 js 写了个本地的 [autograder](https://github.com/liuly0322/lc3web) 并开源，~~算是做了点微小的贡献~~

此外模数也是门底层的课，数电实验还是挺有意思的，最后写了个小 CPU

课内的数据结构比较无聊，没有强调抽象的概念，真是上成了一门文科课，不过自己利用之前的 js 积累，和网上找的一个 C++ 服务器框架，写了一个前后端分离的小 [订票 web app](https://github.com/liuly0322/Flight-Server)，感觉还是挺有意思的，另外一个 [哈夫曼压缩](https://github.com/liuly0322/HuffmanCompress) 的实验也能锻炼 OOP 能力

这学期收获最大的应该是把 [CS61A](https://inst.eecs.berkeley.edu/~cs61a/su20/) 看完了，正儿八经看完的第一个英文课，真的是神课，连带着我到现在都对 SICP 这书有一种蜜汁崇拜，这课讲函数式和各种抽象的编程范式讲的很好，建议早看，大一暑假是一个很合适的时间，看完也算是对 Python 入门了（我觉得比看 python 入门网课要强不少）

### 寒假

接触了正儿八经的项目开发，在前端技术栈上，用熟了原生 js 后也该考虑用框架了。帮助 [Verilog OJ](https://github.com/YAVGroup/Verilog-OJ) (我校的一个项目) 做了个评论系统，用的 Vue，挺顺手

于此同时也接触了一些后端框架，Django, fastapi 啥的

### 二春

硬核的一个学期，CODH 和 OSH

不过 CSAPP 这门课能很好的为组成原理和操作系统铺垫，开学闲来无事也把这书和实验都搞的差不多了，实验收获还是挺大的

OS 推荐了 Rust, 不得不说 trait 的概念和一些函数式的风格还是挺漂亮的，推荐通过 [CS110L](https://reberhardt.com/cs110l/spring-2020/) 学习，顺便能了解 OS 层带来的开发中的一些安全问题

组成原理算是继续加深对计算机硬件的认识，实验继续造 CPU，很酸爽，自己也配熟了一套开发工具链

此外就是初步接触机器学习，吴恩达老师的网课 + 西瓜书，这两个推荐配合食用

（未完待续）