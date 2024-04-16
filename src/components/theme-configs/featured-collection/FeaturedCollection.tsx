import { Button } from "@/components/ui/button";
import { getFeaturedCollection } from "@/lib/api";
import clsx from "clsx";
import React, { useEffect } from "react";
import Image from "next/image";

type Props = { compConfig: any; themeSetting: any };

const FeaturedCollection = async ({ compConfig, themeSetting }: Props) => {
  const { settings, children_items } = compConfig;

  const {
    data: { result },
  } = await getFeaturedCollection(
    compConfig.id,
    settings.fc_limit_product.value
  );

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
        <h2 className="font-heading text-[32px] leading-[48px]">
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
        className="md:grid flex flex-col gap-6"
      >
        {result.map((item: any) => (
          <div
            key={item.id}
            className="w-full flex flex-col gap-4 items-stretch cursor-pointer group"
          >
            <div
              className={clsx(
                "w-full overflow-hidden border"
                // item.settings.collection_item_ratio.value
              )}
            >
              <Image
                className="group-hover:scale-125 transition-all duration-1000"
                src={item.image_url}
                alt={item.title}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>

            <div className="flex flex-col gap-2">
              <span className="group-hover:text-[color:var(--primary)] transition-all truncate">
                {item.title}
              </span>
              <h4 className="flex gap-2">
                <span className="font-bold text-xl">{item.price}$</span>
                <span className="text-[#9E9E9E] text-xl line-through">
                  {item.compare_price}$
                </span>
              </h4>
            </div>
          </div>
        ))}
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
