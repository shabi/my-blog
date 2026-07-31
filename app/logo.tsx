"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


export function Logo() {
  const pathname = usePathname();

  const isHome = pathname === "/";


  const logoClass =
    "hover:bg-neutral-200 dark:hover:bg-neutral-700 p-2 rounded-2xl -ml-2 transition-[background-color]";


  function refreshHome() {
    window.location.reload();
  }


  return (
    <span className="text-md md:text-lg whitespace-nowrap font-bold">

      {isHome ? (

        <button
          onClick={refreshHome}
          className={logoClass}
        >
          GANG
        </button>

      ) : (

        <Link
          href="/"
          className={logoClass}
        >
          GANG
        </Link>

      )}

    </span>
  );
}
