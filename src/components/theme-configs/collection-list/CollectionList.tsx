import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ComponentSettingType } from "@/types/comp-settings";

type Props = {
  collection_heading: ComponentSettingType;
  collection_desc: ComponentSettingType;
  collection_link: ComponentSettingType;
  btn_as_text_link: ComponentSettingType;
  collection_layout: ComponentSettingType;
  collection_ratio: ComponentSettingType;
  collection_per_row: ComponentSettingType;
  full_width: ComponentSettingType;
  heading_centered: ComponentSettingType;
  children_items: any;
};

const CollectionList = ({
  collection_heading,
  collection_desc,
  collection_link,
  btn_as_text_link,
  collection_layout,
  collection_ratio,
  collection_per_row,
  full_width,
  heading_centered,
  children_items,
}: Props) => {
  return (
    <div
      className={cn(
        !full_width.value && "max-w-[1320px] m-auto",
        "w-full relative flex flex-col gap-8 items-center mb-20"
      )}
    >
      {collection_heading.value && (
        <div
          className={cn(
            "flex flex-col gap-2 w-full",
            heading_centered.value && "items-center"
          )}
        >
          <h2 className="font-heading font-wHeading">
            {collection_heading.value}
          </h2>

          <div
            className={cn(
              "flex w-full",
              heading_centered.value
                ? "justify-center"
                : "justify-between items-end"
            )}
          >
            <div
              className={cn(
                "max-w-[984px]",
                heading_centered.value && "text-center"
              )}
              dangerouslySetInnerHTML={{
                __html: collection_desc.value,
              }}
            ></div>
            {collection_link.value && !heading_centered.value && (
              <Button variant={btn_as_text_link.value ? "link" : "default"}>
                {collection_link.value}
              </Button>
            )}
          </div>
        </div>
      )}

      <div
        style={{
          gridTemplateColumns: `repeat(${collection_per_row.value}, minmax(0, 1fr))`,
        }}
        className="md:grid flex flex-col gap-6 w-full"
      >
        {children_items.map((item: any, idx: number) => (
          <div
            key={idx}
            className="w-full flex flex-col gap-4 items-center cursor-pointer group"
          >
            <div
              className={cn(
                "w-full overflow-hidden",
                item.settings.collection_item_ratio.value
              )}
            >
              <Image
                className="group-hover:scale-125 transition-all duration-1000"
                src={item.settings.collection_image.value}
                alt={item.settings.collection_image.id}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            {item.settings.collection_item_name.value && (
              <h3 className="font-medium text-2xl group-hover:text-[color:var(--bgs-primary)] transition-all">
                {item.settings.collection_item_name.value}
              </h3>
            )}
          </div>
        ))}
      </div>

      {collection_link.value && heading_centered.value && (
        <Button
          className="w-fit"
          variant={btn_as_text_link.value ? "link" : "default"}
        >
          {collection_link.value}
        </Button>
      )}
    </div>
  );
};

export default CollectionList;
