import { getThemeConfig } from "@/lib/api";
import { cn } from "@/lib/utils";
import { Search, ShoppingBag, User, X } from "lucide-react";
import Image from "next/image";
import Navigation from "./Navigation";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const HeaderInline = async () => {
  const {
    data: {
      object_config: {
        header: {
          header_bar: { template_type, settings, visible, id },
        },
      },
    },
  } = await getThemeConfig();

  return (
    <div
      className={cn(
        "bg-[var(--header-background)] z-20",
        settings.fixed_header.value && "sticky top-0",
        template_type
      )}
    >
      <div
        id={id}
        className="w-full max-w-[1320px] m-auto py-4 h-[112px] relative flex items-center gap-5 text-[--color-main-menu"
      >
        <div
          className={cn(
            "header_brand",
            settings.header_content_alignment.value === "center" && "flex-1"
          )}
        >
          <Image
            className={cn(
              "!relative object-contain cursor-pointer w-auto h-full max-w-[200px] max-h-[80px]",
              settings.header_center_logo.value && "order-1"
            )}
            src={settings.header_logo_url.value || ""}
            alt={settings.header_logo_url.heading || "logo"}
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
        <Navigation />
        <div className="flex flex-1 justify-end order-3 gap-4 p-2">
          <User className="hover:text-[color:var(--color-primary)] transition-all cursor-pointer" />
          <Sheet>
            <SheetTrigger asChild>
              <Search className="hover:text-[color:var(--color-primary)] transition-all cursor-pointer" />
            </SheetTrigger>
            <SheetContent
              side="top"
              className="h-[112px] flex items-center px-[300px] py-8"
              showBtnClose={false}
            >
              <div className="flex gap-2 p-2 flex-1 items-center">
                <Search />
                <input
                  type="text"
                  className="flex-1 focus:outline-none pr-[72px]"
                  placeholder="Search our store"
                />
                <SheetClose asChild>
                  <X className="cursor-pointer text-gray-400 hover:text-gray-600" />
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
          <ShoppingBag className="hover:text-[color:var(--color-primary)] transition-all cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default HeaderInline;
