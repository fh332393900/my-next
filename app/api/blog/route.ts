const blogList = [
  {
    title: "Nuxt3+i18n 实现国际化多语言以及服务端多语言",
    desc: "nuxt3 作为一个 vue 服务端渲染框架，提供了一种直观且可扩展的方式来创建类型安全、高性能和生产级别的全栈Web应用和网站。",
    tag: ["Vue.js", "Nuxt.js", "前端"],
    view: 532,
    like: 6,
    link: "https://juejin.cn/post/7405777954515910682",
  },
  {
    title: "基于vue3+threejs实现可视化大屏",
    desc: "Three.js是一款基于原生WebGL封装通用Web 3D引擎，在小游戏、产品展示、物联网、数字孪生、智慧城市园区、机械、建筑、全景看房、GIS等各个领域基本上都有three.js的身影。",
    tag: ["Vue.js", "threejs", "前端"],
    view: 54470,
    like: 1100,
    link: "https://juejin.cn/post/7235906062301085757",
  },
  {
    title: "React 中使用 AudioWorklet 获取麦克风音量",
    desc: "AudioWorklet 用于提供在单独线程中执行的自定义音频处理脚本，以提供非常低延迟的音频处理。之前提议处理音频使用audioContext.createScriptProcessor，但是它被设计成了异步的形式，随之而来的问题就是处理会出现 “延迟”。",
    tag: ["React", "AudioWorklet", "前端"],
    view: 1900,
    like: 8,
    link: "https://juejin.cn/post/7205047834793164859",
  },
  {
    title: "Docker安装Jenkins，Nginx，实现前端项目自动化构建",
    desc: "本文主要介绍了使用 Docker 安装 Jenkins、Nginx 以实现前端项目自动化构建的过程。包括安装 Docker 及查看状态，安装 Jenkins 并进行配置、安装插件、新建项目任务，安装 Nginx 及配置相关目录和参数，最后将打包后的项目进行部署，还涉及配置 SSH 连接和添加 Webhooks 等操作。",
    tag: ["Docker", "Jenkins", "Nginx"],
    view: 7000,
    like: 58,
    link: "https://juejin.cn/post/7187326853336530981",
  },
];

export async function GET() {
  return Response.json({ code: "0", data: blogList, msg: "success" });
}
