"use client";

import { useEffect } from "react";


export function ScrollRestoration() {

  useEffect(() => {
    const position = sessionStorage.getItem(
      "scroll-position"
    );


    if (position) {

      sessionStorage.removeItem(
        "scroll-position"
      );


      window.scrollTo({
        top: Number(position),
        behavior: "instant",
      });

    }

  }, []);


  return null;
}
