import { Button } from "@/components/ui/button";
import clsx from "clsx";
import React from "react";

type Props = { compConfig: any; themeSetting: any };

const FeaturedCollection = ({ compConfig, themeSetting }: Props) => {
  const { settings, children_items } = compConfig;

  return (
    <div
      className={clsx(
        !settings.full_width?.value && "max-w-[1320px] m-auto",
        "w-full relative flex flex-col gap-8 items-center"
      )}
    >
      <div
        className={clsx(
          "flex flex-col gap-2 w-full",
          settings.heading_centered.value && "items-center"
        )}
      >
        <h2 className="font-bold text-[32px] leading-[48px]">
          {settings.fc_heading.value}
        </h2>
        <div
          className={clsx(
            "flex w-full",
            settings.heading_centered.value
              ? "justify-center"
              : "justify-between items-end"
          )}
        >
          <div
            className={clsx(
              "max-w-[984px]",
              settings.heading_centered.value && "text-center"
            )}
            dangerouslySetInnerHTML={{
              __html: settings.fc_description.value,
            }}
          ></div>
          {settings.fc_text_link.value && !settings.heading_centered.value && (
            <Button
              variant={settings.fc_btn_as_link.value ? "link" : "default"}
            >
              {settings.fc_text_link.value}
            </Button>
          )}
        </div>
      </div>

      <div
        style={{
          gridTemplateColumns: `repeat(${settings.fc_product_per_row.value}, minmax(0, 1fr))`,
        }}
        className={`md:grid flex flex-col gap-6`}
      >
        {/* {children_items.map((item: any) => (
          <div
            key={item.id}
            className="w-full flex flex-col gap-4 items-center cursor-pointer group"
          >
            <div
              className={clsx(
                "w-full overflow-hidden border",
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
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>

            {item.settings.collection_item_name.value && (
              <h3
                className={`font-medium text-2xl group-hover:text-[#3D8476] transition-all`}
              >
                {item.settings.collection_item_name.value}
              </h3>
            )}
          </div>
        ))} */}
      </div>

      {settings.fc_btn_as_link.value && settings.heading_centered.value && (
        <Button
          className="w-fit"
          variant={settings.fc_btn_as_link.value ? "link" : "default"}
        >
          {settings.fc_text_link.value}
        </Button>
      )}
    </div>
  );
};

export default FeaturedCollection;
