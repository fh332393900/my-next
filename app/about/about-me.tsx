"use client";

import { Card, CardHeader, CardBody, User, Image } from "@nextui-org/react";

type Skill = {
  title: string;
  icon: string;
  style?: object;
};

export default function AboutMe() {
  const skills: Skill[] = [
    {
      title: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      title: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      title: "Javascript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      title: "Vue",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    },
    {
      title: "Sass",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
    },
    {
      title: "TailwindCSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      title: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      title: "NextJS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
      style: { filter: "invert(1)" },
    },
    {
      title: "Typescript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      title: "NodeJS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      title: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
  ];

  return (
    <div className="text-default">
      <Card className="py-4 bg-[rgba(0, 0, 0, 0.1)]">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <User
            avatarProps={{
              src: "/avatar.png",
            }}
            classNames={{
              base: "text-default",
            }}
            description="前端工程师"
            name="Steven Feng"
          />
          <h4 className="text-white font-bold py-2">关于我</h4>
          <p className="text-gray-100 text-sm text-left">
            我是 冯航，一名前端开发工程师，专注于前端技术。我的主要技术栈是 Vue
            及其全家桶，我会将自己的实践过程以文章的形式分享在掘金上，并在
            GitHub 上参与开源项目。欢迎访问我的掘金主页和 GitHub
            主页，了解更多关于我的信息！
          </p>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <h4 className="text-white font-bold pb-2">专业技能</h4>
          <div className="relative w-full mx-auto md:mx-none grid gap-x-8 gap-y-12 sm:gap-8 md:gap-12 grid-cols-3 sm:grid-cols-6 items-center place-content-center">
            {skills.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-10 mx-auto flex items-center flex-col justify-center"
                  title={item.title}
                >
                  <Image src={item.icon} width={32} style={item.style} />
                  <p className="text-xs text-gray-200 font-bold mt-3 opacity-80">
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
