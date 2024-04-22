import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ComponentSettingType } from "@/types/comp-settings";
import Link from "next/link";
import React from "react";

type Props = {
  rich_text_heading?: ComponentSettingType;
  description_rich_text?: ComponentSettingType;
  btn_rich_text_label?: ComponentSettingType;
  btn_rich_text_link?: ComponentSettingType;
  btn_as_text_link?: ComponentSettingType;
  rich_text_centered?: ComponentSettingType;
  full_width?: ComponentSettingType;
};

const RichText = ({
  rich_text_heading,
  description_rich_text,
  btn_as_text_link,
  btn_rich_text_label,
  btn_rich_text_link,
  rich_text_centered,
  full_width,
}: Props) => {
  return (
    <div
      className={cn(
        !full_width?.value ? "max-w-[1320px] m-auto p-6" : "2xl:px-20 p-6",
        rich_text_centered?.value ? "items-center" : "items-start",
        "w-full relative flex flex-col gap-8 mb-block-default"
      )}
    >
      <div
        className={cn(
          "flex flex-col gap-2",
          rich_text_centered?.value
            ? "items-center"
            : "items-start md:max-w-[50%] max-w-full"
        )}
      >
        <h4 className="component_heading">{rich_text_heading?.value}</h4>
        <div
          className="component_desc"
          dangerouslySetInnerHTML={{
            __html: description_rich_text?.value ?? "",
          }}
        ></div>
      </div>
      {btn_rich_text_label?.value ? (
        btn_as_text_link?.value ? (
          <Link
            className="text-link-primary"
            href={(btn_rich_text_link?.value as string) ?? "#"}
          >
            {btn_rich_text_label?.value}
          </Link>
        ) : (
          <Button className="btn-primary">{btn_rich_text_label?.value}</Button>
        )
      ) : (
        <></>
      )}
    </div>
  );
};

export default RichText;
