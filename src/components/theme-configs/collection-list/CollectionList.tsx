import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = { compConfig: any; themeSetting: any };

const CollectionList = ({ compConfig, themeSetting }: Props) => {
  const { settings, children_items } = compConfig;

  return (
    <div
      className={cn(
        !settings.full_width.value && "max-w-[1320px] m-auto",
        "w-full relative flex flex-col gap-8 items-center"
      )}
    >
      {settings.collection_heading.value && (
        <div
          className={cn(
            "flex flex-col gap-2 w-full",
            settings.heading_centered.value && "items-center"
          )}
        >
          <h2 className="text-[32px] leading-[48px] font-heading">
            {settings.collection_heading.value}
          </h2>

          <div
            className={cn(
              "flex w-full",
              settings.heading_centered.value
                ? "justify-center"
                : "justify-between items-end"
            )}
          >
            <div
              className={cn(
                "max-w-[984px]",
                settings.heading_centered.value && "text-center"
              )}
              dangerouslySetInnerHTML={{
                __html: settings.collection_desc.value,
              }}
            ></div>
            {settings.collection_link.value &&
              !settings.heading_centered.value && (
                <Button
                  variant={settings.btn_as_text_link.value ? "link" : "default"}
                >
                  {settings.collection_link.value}
                </Button>
              )}
          </div>
        </div>
      )}

      <div
        style={{
          gridTemplateColumns: `repeat(${settings.collection_per_row.value}, minmax(0, 1fr))`,
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
              <h3 className="font-medium text-2xl group-hover:text-[color:var(--color-primary)] transition-all">
                {item.settings.collection_item_name.value}
              </h3>
            )}
          </div>
        ))}
      </div>

      {settings.collection_link.value && settings.heading_centered.value && (
        <Button
          className="w-fit"
          variant={settings.btn_as_text_link.value ? "link" : "default"}
        >
          {settings.collection_link.value}
        </Button>
      )}
    </div>
  );
};

export default CollectionList;
