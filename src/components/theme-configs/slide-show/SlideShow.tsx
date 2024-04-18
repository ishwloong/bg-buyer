import { getThemeConfig } from "@/lib/api";
import clsx from "clsx";
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

type Props = { compConfig: any; themeSetting: any };

const SlideShow = async ({ compConfig, themeSetting }: Props) => {
  const { settings, children_items } = compConfig;

  return (
    <Carousel
      className={clsx(
        !settings.full_width.value && "max-w-[1320px] m-auto",
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
            className={clsx(
              "w-full relative bg-cover flex items-center",
              item.settings.item_ratio.value
            )}
          >
            <div
              style={{
                textAlign: item.settings.item_align.value,
                alignItems: item.settings.item_align.value,
              }}
              className="absolute max-w-[31rem] w-full flex flex-col gap-6 p-6"
            >
              <div className="flex flex-col gap-2">
                <span>{item.settings.item_heading.value}</span>
                <div
                  className="text-lg"
                  dangerouslySetInnerHTML={{
                    __html: item.settings.item_description.value,
                  }}
                ></div>
              </div>
              {item.settings.item_btn_label.value && (
                <Button className="w-fit">
                  <Link href={item.settings.item_btn_link.value}>
                    {item.settings.item_btn_label.value}
                  </Link>
                </Button>
              )}
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
