"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type Props = { emitRoute: (route: string) => void };

export function RouteChangeListener({ emitRoute }: Props) {
  const pathname = usePathname();
  const [changes, setChanges] = useState(0);
  console.log(pathname);

  useEffect(() => {
    emitRoute(pathname);
    setChanges((prev) => prev + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return <></>;
}
