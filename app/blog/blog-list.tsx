"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
} from "@nextui-org/react";

import { AnimateItems } from "@/components/AnimateItems";

export default function BlogList() {
  const [list, setList] = useState([]);

  const getBlogList = async () => {
    const res = await fetch("/api/blog");
    const data = await res.json();

    setList(data.data);
  };

  const itemCard = (item: any) => {
    return (
      <Card
        className="border-none max-w-[360px] bg-[rgba(255, 255, 255, 0.4)] text-sm"
        radius="lg"
      >
        <CardHeader className="flex gap-3 font-bold">
          <div className="flex flex-col">
            <Link
              isExternal
              showAnchorIcon
              className="text-white text-sm"
              href={item.link}
            >
              {item.title}
            </Link>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p className="line-clamp-3">{item.desc}</p>
        </CardBody>
        <CardFooter className="gap-3">
          <div className="flex gap-1">
            <p className="font-semibold text-primary-400 text-small">
              {item.view}
            </p>
            <p className=" text-primary-400 text-small">阅读</p>
          </div>
          <div className="flex gap-1">
            <p className="font-semibold text-primary-400 text-small">
              {item.like}
            </p>
            <p className="text-primary-400 text-small">点赞</p>
          </div>
        </CardFooter>
      </Card>
    );
  };

  useEffect(() => {
    getBlogList();
  }, []);

  return (
    <div className="px-2 flex flex-wrap">
      {list.map((item, index) => (
        <AnimateItems
          key={index}
          className="cursor-pointer mr-5 mb-5"
          items={itemCard(item)}
        />
      ))}
    </div>
  );
}
