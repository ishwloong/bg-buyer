import { Button } from "@/components/ui/button";
import { getFeaturedCollection } from "@/lib/api";
import clsx from "clsx";
import React, { useEffect } from "react";
import Image from "next/image";
import { ComponentSettingType } from "@/types/comp-settings";
import FcProductCard from "./FcProductCard";
import FcSlideShow from "./FcSlideShow";
import { CarouselItem } from "@/components/ui/carousel";

type Props = {
  template_type: "fc_grid" | "fc_slider";
  fc_heading?: ComponentSettingType;
  fc_description?: ComponentSettingType;
  fc_add_collection?: ComponentSettingType;
  fc_product_per_row?: ComponentSettingType;
  fc_limit_product?: ComponentSettingType;
  fc_ratio?: ComponentSettingType;
  fc_uri?: ComponentSettingType;
  fc_text_link?: ComponentSettingType;
  fc_btn_as_link?: ComponentSettingType;
  heading_centered?: ComponentSettingType;
  btn_product?: ComponentSettingType;
};

const FeaturedCollection = async ({
  template_type = "fc_grid",
  fc_heading,
  fc_description,
  fc_add_collection,
  fc_product_per_row,
  fc_limit_product,
  fc_ratio,
  fc_uri,
  fc_text_link,
  fc_btn_as_link,
  heading_centered,
  btn_product,
}: Props) => {
  const {
    data: { result },
  } = await getFeaturedCollection(
    fc_add_collection?.value as string,
    fc_limit_product?.value as number
  );

  return (
    <div className="max-w-[1320px] m-auto w-full relative flex flex-col gap-8 items-center mb-block-default">
      <div
        className={clsx(
          "flex flex-col gap-2 w-full",
          heading_centered?.value && "items-center"
        )}
      >
        <h2 className="font-heading font-wHeading">{fc_heading?.value}</h2>
        <div
          className={clsx(
            "flex w-full",
            heading_centered?.value
              ? "justify-center"
              : "justify-between items-end"
          )}
        >
          <div
            className={clsx(
              "max-w-[984px]",
              heading_centered?.value && "text-center"
            )}
            dangerouslySetInnerHTML={{
              __html: fc_description?.value ?? "",
            }}
          ></div>
          {fc_text_link?.value && !heading_centered?.value && (
            <Button
              variant={fc_btn_as_link?.value ? "link" : "default"}
              className="text-xl hover:no-underline"
            >
              {fc_text_link.value}
            </Button>
          )}
        </div>
      </div>

      {template_type === "fc_grid" && (
        <div
          style={{
            gridTemplateColumns: `repeat(${fc_product_per_row?.value}, minmax(0, 1fr))`,
          }}
          className="md:grid flex flex-col gap-6 wrap-product"
        >
          {result.map((item: any) => (
            <FcProductCard
              key={item.id}
              item={item}
              fc_ratio={fc_ratio?.value as string}
              btn_product={btn_product?.value as string}
            />
          ))}
        </div>
      )}

      {template_type === "fc_slider" && (
        <FcSlideShow>
          {result.map((item: any) => (
            <CarouselItem key={item.id} className="basis-1/4">
              <FcProductCard
                item={item}
                fc_ratio={fc_ratio?.value as string}
                btn_product={btn_product?.value as string}
              />
            </CarouselItem>
          ))}
        </FcSlideShow>
      )}

      {fc_btn_as_link?.value && heading_centered?.value && (
        <Button
          className="w-fit text-xl hover:no-underline"
          variant={fc_btn_as_link.value ? "link" : "default"}
        >
          {fc_text_link?.value}
        </Button>
      )}
    </div>
  );
};

export default FeaturedCollection;
