import { getThemeConfig, getThemeMenu } from "@/lib/api";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
const Navigation = async () => {
  const {
    data: {
      object_config: {
        header: {
          header_bar: { template_type, settings, visible, id },
        },
      },
    },
  } = await getThemeConfig();

  const {
    data: { items },
  } = await getThemeMenu(settings.header_navigation_items.value);

  return (
    <div
      id={settings.header_navigation_items.id}
      style={{
        justifyContent:
          template_type === "bg_header_bar_rich"
            ? "center"
            : settings.header_content_alignment.value,
      }}
      className={cn(
        "w-full max-w-[1320px] m-auto flex flex-1 gap-4",
        settings.header_center_logo.value &&
          template_type === "bg_header_bar_rich"
          ? "order-1 bg-[var(--bg-main-menu)]"
          : "order-2"
      )}
    >
      {items?.map((item: any, idx: number) => (
        <div
          key={idx}
          className="cursor-pointer list-group-item p-2 hover:text-[color:var(--bgs-primary)] text-lg"
        >
          <Link href={item.link} className={cn("header_nav")}>
            {item.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Navigation;
