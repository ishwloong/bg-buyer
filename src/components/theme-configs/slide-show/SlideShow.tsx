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
          <CarouselItem key={idx} className="w-full aspect-[3/1] relative">
            <Image
              src={item.settings.item_image_url.value}
              alt="alt"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-16 w-14 h-14" />
      <CarouselNext className="absolute top-1/2 -translate-y-1/2 right-16 w-14 h-14" />
    </Carousel>
  );
};

export default SlideShow;
