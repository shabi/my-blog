"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export function Logo() {
  const pathname = usePathname();

  const isChinese = pathname.startsWith("/zh");

  const homePath = isChinese ? "/zh" : "/";

  const isHome =
    pathname === "/" || pathname === "/zh";

  return (
    <span className="text-md md:text-lg whitespace-nowrap font-bold">
      {isHome ? (
        <span className="cursor-default pr-2">
          OhHoBa
        </span>
      ) : (
        <Link
          href={homePath}
          className="hover:bg-neutral-200 dark:hover:bg-neutral-700 p-2 rounded-2xl -ml-2 transition-[background-color]"
        >
          OhHoBa
        </Link>
      )}
    </span>
  );
}
