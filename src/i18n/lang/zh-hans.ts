import type { UIStrings } from "../types";

export default {
  nav: {
    home: "主页",
    posts: "文章",
    articles: "文库",
    tags: "标签",
    subscription: "订阅",
    blogroll: "友链",
    about: "关于",
    archives: "归档",
    search: "搜索",
  },
  post: {
    publishedAt: "发布于",
    updatedAt: "更新于",
    sharePostIntro: "分享这篇文章：",
    sharePostOn: "分享到 {{platform}}",
    sharePostViaEmail: "通过电子邮件分享",
    tagLabel: "标签",
    backToTop: "返回顶部",
    goBack: "返回",
    editPage: "编辑页面",
    previousPost: "上一篇",
    nextPost: "下一篇",
  },
  pagination: {
    prev: "上一页",
    next: "下一页",
    page: "页",
  },
  home: {
    socialLinks: "社交链接",
    featured: "精选",
    recentPosts: "近期文章",
    allPosts: "全部文章",
  },
  footer: {
    copyright: "版权",
    allRightsReserved: "保留所有权利。",
  },
  pages: {
    tagTitle: "标签",
    tagDesc: "包含此标签的全部文章",

    tagsTitle: "标签",
    tagsDesc: "文章使用的全部标签。",

    postsTitle: "文章",
    postsDesc: "我发布的全部文章。",

    archivesTitle: "归档",
    archivesDesc: "全部归档文章。",

    searchTitle: "搜索",
    searchDesc: "搜索文章……",
  },
  a11y: {
    primaryNavigation: "主导航",
    switchTheme: "切换主题",
    skipToContent: "跳到主要内容",
    openMenu: "打开菜单",
    closeMenu: "关闭菜单",
    switchLanguage: "切换语言",
    toggleTheme: "切换主题",
    searchPlaceholder: "搜索文章……",
    noResults: "没有找到结果",
    goToPreviousPage: "前往上一页",
    goToNextPage: "前往下一页",
  },
  notFound: {
    title: "404 未找到",
    message: "页面不存在",
    goHome: "返回主页",
  },
} satisfies UIStrings;
