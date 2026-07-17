"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";


export function ScrollRestoration() {
  const pathname = usePathname();


  useEffect(() => {
    const position = sessionStorage.getItem(
      "scroll-position"
    );


    if (position) {
      requestAnimationFrame(() => {
        window.scrollTo(
          0,
          Number(position)
        );


        sessionStorage.removeItem(
          "scroll-position"
        );
      });
    }

  }, [pathname]);


  return null;
}
