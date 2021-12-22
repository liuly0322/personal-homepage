module.exports = {
  title: "个人主页",
  description: "刘良宇的个人主页",
  head: [["link", { rel: "icon", href: `/logo.png` }]],
  base: "/~liuly0322/home/",
  dest: "./home",

  themeConfig: {
    search: false,
    nav: [
      { text: "主页", link: "/" },
      { text: "关于", link: "/about/" },
      { text: "项目", link: "/projects/" },
    ],
    sidebar: {
      "/guide/": genSidebarConfig("Guide"),
    },
    lastUpdated: "最近更新时间",
  },

  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
    extendMarkdown: (md) => {
      md.use(require("markdown-it-katex"));
    },
  },
};

function genSidebarConfig(title) {
  return [
    {
      title,
      collapsable: false,
      children: ["", "getting-started", "customize", "advanced"],
    },
  ];
}
