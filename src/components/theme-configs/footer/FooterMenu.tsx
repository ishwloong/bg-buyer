import { getThemeMenu } from "@/lib/api";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = { menuId: string };

const FooterMenu = async ({ menuId }: Props) => {
  const { data } = await getThemeMenu(menuId);

  if (!data?.items) return <></>;

  return (
    <div className="flex flex-col gap-4">
      {data.items.map((item: any, idx: number) => (
        <Link
          key={idx}
          href={item.link}
          className="hover:text-[var(--bgs-primary)] transition-all"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default FooterMenu;
