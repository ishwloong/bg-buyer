import { cn } from "@/lib/utils";
import { ComponentSettingType } from "@/types/comp-settings";
import Link from "next/link";
import React from "react";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";

type Props = {
  signup_heading?: ComponentSettingType;
  signup_desc?: ComponentSettingType;
  bg_color?: ComponentSettingType;
  signup_placeholder?: ComponentSettingType;
  bg_img?: ComponentSettingType;
};

const Newsletter = ({
  signup_heading,
  bg_color,
  signup_desc,
  signup_placeholder,
  bg_img,
}: Props) => {
  return (
    <div
      style={{
        background: `${(bg_color?.value as string) ?? "#fff"} url(${
          bg_img?.value
        }) center no-repeat`,
      }}
      className={cn(
        "m-auto 2xl:px-10 2xl:py-6",
        "w-full relative flex flex-col gap-8 items-center mb-20"
      )}
    >
      <div className="flex flex-col gap-10 p-6">
        <div className={cn("flex flex-col gap-2 items-center")}>
          <h4 className="component_heading">{signup_heading?.value}</h4>
          <div
            className="component_desc"
            dangerouslySetInnerHTML={{
              __html: signup_desc?.value ?? "",
            }}
          ></div>
        </div>
        <div className="w-full flex gap-2">
          <Input
            size={40}
            type="text"
            className="max-w-[480px] input-base"
            placeholder={(signup_placeholder?.value as string) ?? ""}
          />
          <Button className="btn-primary">Enter</Button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
