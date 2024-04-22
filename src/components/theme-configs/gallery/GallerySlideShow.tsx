import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";

type Props = { children: React.ReactNode };

const GallerySlideShow = ({ children }: Props) => {
  return (
    <Carousel
      className="w-full max-w-[1320px]"
      opts={{ loop: false, startIndex: 0 }}
    >
      <CarouselContent>{children}</CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default GallerySlideShow;
