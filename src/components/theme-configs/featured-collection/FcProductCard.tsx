import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";
import Image from "next/image";

type Props = { item: any; fc_ratio?: string };

const FcProductCard = ({ item, fc_ratio }: Props) => {
  return (
    <div
      key={item.id}
      className="w-full flex flex-col gap-4 items-stretch cursor-pointer group"
    >
      <div className={cn("w-full overflow-hidden border relative")}>
        <Heart className="absolute top-4 right-4 hover:text-[color:var(--color-primary)] z-10" />
        <Image
          className={cn(
            "group-hover:scale-125 transition-all duration-1000",
            fc_ratio
          )}
          src={item.image_url}
          alt={item.title}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
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
