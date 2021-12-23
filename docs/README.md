---
pageClass: home-page
# some data for the components

name: 刘良宇
profile: /profile.jpg

socials:
  - title: github
    icon: "/icons/github.svg"
    link: https://github.com/liuly0322

bio: Student at USTC
email: liuly0322@mail.ustc.edu.cn
qq: 453026205
---

<ProfileSection :frontmatter="$page.frontmatter" />

## 教育经历

- 2020.9 ~ 就读于中国科学技术大学少年班学院，本科，修读计算机科学与技术专业
- 2018.9 ~ 2020.7 : 合肥一六八中学

## 项目

[→ 查看全部](/projects/)

<ProjectCard image="/projects/blog.png" hideBorder=true>

**个人博客** [[链接](http://home.ustc.edu.cn/~liuly0322/blog)]

基于 hexo 搭建，修改官方主题以满足自己需要

- 深色模式支持
- 全站最新评论
- mermaid, mathjax......

</ProjectCard>

<ProjectCard image="/projects/lc3web.png" hideBorder=true>

**lc3 自动评测系统** [[链接](http://home.ustc.edu.cn/~liuly0322/lc3web)]

基于 github 上的 lc-3 模拟器项目，提供了完备的脚本自助评测功能

很适合需要学 _Introduction to Computing Systems_ 课程的同学使用

</ProjectCard>

<ProjectCard image="/projects/dslab1.png" hideBorder=true>

**数据结构课程实验航空订票系统** [[链接](http://home.ustc.edu.cn/~liuly0322/homework/flight/)]

基于 github 上的 c++ WebServer

后端通过链表简单实现一个订票系统

</ProjectCard>

## 获奖情况

- ~~等有啥重量级再更~~

<!-- Custom style for this page -->

<style lang="stylus">

.theme-container.home-page .page
  font-size 14px
  font-family "lucida grande", "lucida sans unicode", lucida, "Helvetica Neue", Helvetica, Arial, sans-serif;
  p
    margin 0 0 0.5rem
  p, ul, ol
    line-height normal
  a
    font-weight normal
  .theme-default-content:not(.custom) > h2
    margin-bottom 0.5rem
  .theme-default-content:not(.custom) > h2:first-child + p
    margin-top 0.5rem
  .theme-default-content:not(.custom) > h3
    padding-top 4rem

  /* Override */
  .md-card
    margin-top 0.5em
    .card-image
      padding 0.2rem
      img
        max-width 120px
        max-height 120px
    .card-content p
      -webkit-margin-after 0.2em

@media (max-width: 419px)
  .theme-container.home-page .page
    p, ul, ol
      line-height 1.5

    .md-card
      .card-image
        img 
          width 100%
          max-width 400px

</style>
