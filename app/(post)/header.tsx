"use client";

import { useSelectedLayoutSegments } from "next/navigation";
import { ago } from "time-ago";
import type { Post } from "@/app/get-posts";


export function Header({ posts }: { posts: Post[] }) {

  const segments = useSelectedLayoutSegments();


  const initialPost = posts.find(
    post => post.id === segments[segments.length - 1]
  );


  if (initialPost == null) return <></>;


  return (
    <>

      <h1 className="text-2xl font-bold mb-1 dark:text-gray-100">
        {initialPost.title}
      </h1>


      <p className="font-mono flex text-xs text-neutral-500 dark:text-neutral-500">

        <span className="flex-grow">

          <span className="hidden md:inline">

            <a
              href="mailto:admin@ohhoba.com"
              className="hover:text-neutral-800 dark:hover:text-neutral-400"
            >
              @GANG
            </a>


            <span className="mx-2">
              |
            </span>

          </span>


          <span suppressHydrationWarning={true}>

            {initialPost.date} ({ago(initialPost.date, true)} ago)

          </span>


        </span>


      </p>

    </>
  );
}
