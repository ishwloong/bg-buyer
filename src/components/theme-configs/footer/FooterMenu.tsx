import { getThemeMenu } from "@/lib/api";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = { menuId: string };

const FooterMenu = async ({ menuId }: Props) => {
  const {
    data: { items },
  } = await getThemeMenu(menuId);

  return (
    <div className="flex flex-col gap-4">
      {items.map((item: any, idx: number) => (
        <Link key={idx} href={item.link}>
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default FooterMenu;
