import { getThemeConfig } from "@/lib/api";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = { compConfig: any; themeSetting: any };

const SlideShow = async ({ compConfig, themeSetting }: Props) => {
  const { settings, children_items } = compConfig;

  return (
    <Carousel
      className={cn(
        !settings.full_width.value && "max-w-[1320px] m-auto mb-20",
        "w-full relative"
      )}
      opts={{ loop: true }}
    >
      <CarouselContent>
        {children_items.map((item: any, idx: number) => (
          <CarouselItem
            key={idx}
            style={{
              backgroundImage: `url(${item.settings.item_image_url.value})`,
              justifyContent: item.settings.item_position.value,
            }}
            className={cn(
              "w-full relative bg-cover flex items-center",
              item.settings.item_ratio.value
            )}
          >
            <div
              style={{
                textAlign: item.settings.item_align.value,
                alignItems: item.settings.item_position.value,
              }}
              className="w-full max-w-[1320px] flex flex-col gap-6 p-6"
            >
              <div className="">
              <div className="flex flex-col gap-2 content-banner">
                <h2 className="!mb-5">{item.settings.item_heading.value}</h2>
                <div
                  className="!text-lg"
                  dangerouslySetInnerHTML={{
                    __html: item.settings.item_description.value,
                  }}
                ></div>
              </div>
              {item.settings.item_btn_label.value && (
                <Button
                  style={{ alignSelf: item.settings.item_align.value }}
                  size="lg"
                  variant={item.settings.item_btn_outline.value && "link"}
                  className={cn(
                    "w-fit text-xl hover:no-underline",
                    item.settings.item_btn_outline.value ? "" : ""
                  )}
                >
                  <Link href={item.settings.item_btn_link.value}>
                    {item.settings.item_btn_label.value}
                  </Link>
                </Button>
              )}
              </div>
            </div>
            {/* <Image
              src={item.settings.item_image_url.value}
              alt="alt"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            /> */}
          </CarouselItem>
        ))}
      </CarouselContent>
      {children_items.length > 1 && (
        <>
          <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-16 w-14 h-14" />
          <CarouselNext className="absolute top-1/2 -translate-y-1/2 right-16 w-14 h-14" />
        </>
      )}
    </Carousel>
  );
};

export default SlideShow;
