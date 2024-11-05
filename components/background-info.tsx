"use client";

import { Button } from "@nextui-org/button";
import { Tooltip } from "@nextui-org/tooltip";

export const BackgroundInfo = () => {

  return (
    <Tooltip
      content={
        <div className="px-1 py-2">
          <div>
            拍摄于四川省阿坝自治州理县纳山
            <span className="text-primary"> 3890 </span>
            米处
          </div>
          <div className="text-tiny">作者：冯航</div>
          <div className="text-tiny">设备：Lumix S5 II 20-60mm F3.5-5.6</div>
        </div>
      }
    >
      <Button radius="full" className="fixed bottom-8 right-8" >
        壁纸信息
      </Button>
    </Tooltip>
  );
};