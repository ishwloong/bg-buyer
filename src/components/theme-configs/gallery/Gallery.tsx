import { cn } from "@/lib/utils";
import { ChildrenItemType } from "@/types/children-item";
import { ComponentSettingType } from "@/types/comp-settings";
import Image from "next/image";
import { Property } from "csstype";
import { HEX_TRANPARENCIES } from "@/lib/constants";
import GallerySlideShow from "./GallerySlideShow";
import { CarouselItem } from "@/components/ui/carousel";

type Props = {
  heading?: ComponentSettingType;
  bg_color?: ComponentSettingType;
  desc?: ComponentSettingType;
  btn_link?: ComponentSettingType;
  btn_label?: ComponentSettingType;
  full_width?: ComponentSettingType;
  btn_as_link?: ComponentSettingType;
  create_gap?: ComponentSettingType;
  heading_centered?: ComponentSettingType;
  img_ratio?: ComponentSettingType;
  custom_style?: ComponentSettingType;
  img_per_row?: ComponentSettingType;
  overlay?: ComponentSettingType;
  opacity?: ComponentSettingType;
  children_items: ChildrenItemType[];
  template_type: string;
};

const Gallery = ({
  heading,
  bg_color,
  desc,
  btn_link,
  btn_label,
  full_width,
  btn_as_link,
  create_gap,
  heading_centered,
  img_ratio,
  custom_style,
  img_per_row,
  overlay,
  opacity,
  children_items,
  template_type,
}: Props) => {
  return (
    <div
      className={cn(
        !full_width?.value && "max-w-[1320px] m-auto",
        "w-full relative flex flex-col gap-8 mb-block-default"
      )}
    >
      <div
        className={cn(
          "flex flex-col gap-2",
          heading_centered?.value ? "items-center" : "items-start"
        )}
      >
        <h4 className="font-wHeading">{heading?.value}</h4>
        <div dangerouslySetInnerHTML={{ __html: desc?.value ?? "" }}></div>
      </div>
      {template_type === "gallery__grid" && (
        <div
          style={{
            gridTemplateColumns: `repeat(${img_per_row?.value}, minmax(0, 1fr))`,
          }}
          className="md:grid flex flex-col gap-6 w-full"
        >
          {children_items.map(({ settings }, idx) => (
            <div key={idx} className={cn("w-full relative", img_ratio?.value)}>
              <div
                style={{
                  backgroundColor: `${overlay?.value}${
                    HEX_TRANPARENCIES[+opacity?.value * 100]
                  }`,
                }}
                className="w-full h-full absolute top-0 left-0 flex items-center justify-center text-white"
              >
                {settings.label.value}
              </div>
              <Image
                className="w-full h-full object-cover"
                src={settings.img_url.value}
                alt={settings.label.value}
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
          ))}
        </div>
      )}
      {template_type === "gallery__slide" && (
        <GallerySlideShow>
          {children_items.map(({ settings }, idx) => (
            <CarouselItem key={idx} className="basis-1/4">
              <div className={cn("w-full relative", img_ratio?.value)}>
                <div
                  style={{
                    backgroundColor: `${overlay?.value}${
                      HEX_TRANPARENCIES[+opacity?.value * 100]
                    }`,
                  }}
                  className="w-full h-full absolute top-0 left-0 flex items-center justify-center text-white"
                >
                  {settings.label.value}
                </div>
                <Image
                  className="w-full h-full object-cover"
                  src={settings.img_url.value}
                  alt={settings.label.value}
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </div>
            </CarouselItem>
          ))}
        </GallerySlideShow>
      )}
    </div>
  );
};

export default Gallery;
