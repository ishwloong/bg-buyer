import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";
import Image from "next/image";

type Props = { item: any; fc_ratio?: string; btn_product?: string };

const FcProductCard = ({ item, fc_ratio, btn_product }: Props) => {
  return (
    <div
      key={item.id}
      className="w-full flex flex-col gap-4 items-stretch cursor-pointer group"
    >
      <div
        className={cn(
          "w-full overflow-hidden border rounded-[var(--border-radius)] relative"
        )}
      >
        <Heart className="absolute top-4 right-4 hover:text-[color:var(--color-primary)] z-10" />
        <Image
          className={cn(
            "group-hover:scale-110 transition-all duration-1000",
            fc_ratio
          )}
          src={item.image_url}
          alt={item.title}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        {btn_product && (
          <Button className="absolute left-0 right-0 bottom-0 translate-y-[100%] group-hover:translate-y-[0] transition-all btn-primary">
            {btn_product}
          </Button>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <span className="group-hover:text-[color:var(--color-primary)] transition-all truncate">
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
  );
};

export default FcProductCard;
