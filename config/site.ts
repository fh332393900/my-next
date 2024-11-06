export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Steven Feng",
  description: "冯航的个人主页，steven feng的博客。",
  keywords: "React, Next.js, Next UI, 前端技术分享, 博客",
  navItems: [
    {
      label: "首页",
      href: "/",
    },
    {
      label: "博客",
      href: "/blog",
    },
    {
      label: "关于",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "首页",
      href: "/",
    },
    {
      label: "博客",
      href: "/blog",
    },
    {
      label: "关于",
      href: "/about",
    },
  ],
  links: {
    github: "https://github.com/fh332393900",
    twitter: "https://twitter.com/getnextui",
    juejin: "https://juejin.cn/user/4160207731042007",
    docs: "https://nextui.org",
    sponsor: "https://www.paypal.com/paypalme/fenghangpay",
  },
};
