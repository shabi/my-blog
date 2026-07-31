"use client";

import Link from "next/link";
import { Suspense } from "react";
import useSWR from "swr";


const fetcher = (url: string) => fetch(url).then(res => res.json());



const categoryNames = {
  tech: {
    zh: "技术",
    en: "Tech",
  },

  essays: {
    zh: "随笔",
    en: "Essays",
  },

  stories: {
    zh: "故事",
    en: "Stories",
  },
};


export function Posts({
  posts: initialPosts,
}) {

  const { data: posts } = useSWR("/api/posts", fetcher, {
    fallbackData: initialPosts,
    refreshInterval: 5000,
  });


  return (
    <Suspense fallback={null}>
      <main className="max-w-2xl m-auto mb-10 text-sm">

        <List posts={posts} />

      </main>
    </Suspense>
  );
}



function List({
  posts,
}) {

  return (

    <ul>

      {posts.map((post, i: number) => {


        const category =
  categoryNames[post.category]?.[
    post.lang === "zh" ? "zh" : "en"
  ] || "Essays";


        const previousCategory =
          posts[i - 1]
            ? categoryNames[posts[i - 1].category]?.[
                posts[i - 1].lang === "zh" ? "zh" : "en"
              ] || posts[i - 1].category
            : null;



        const nextCategory =
          posts[i + 1]
            ? categoryNames[posts[i + 1].category]?.[
                posts[i + 1].lang === "zh" ? "zh" : "en"
              ] || posts[i + 1].category
            : null;



        const firstOfCategory =
          previousCategory !== category;



        const lastOfCategory =
          nextCategory !== category;



        return (

          <li key={post.id} className="group">

            <Link
              href={`/${new Date(post.date).getFullYear()}/${post.id}`}
            >

              <span
                className={`flex
                  ${!firstOfCategory ? "border-t-0" : ""}
                  ${lastOfCategory ? "border-b-0" : ""}
                `}
              >

                <span
                  className={`py-2 flex grow items-center ${
                    !firstOfCategory ? "ml-10 md:ml-14" : ""
                  }`}
                >


                  {firstOfCategory && (

                    <span className="w-10 md:w-14 inline-block self-start shrink-0 text-neutral-500 text-xs dark:text-neutral-500 mt-0.5">

                      {category}

                    </span>

                  )}



                  <span className="grow dark:text-gray-100">

                    <span className="group-hover:bg-neutral-200 dark:group-hover:bg-neutral-700 transition-all rounded-xl py-0.5 px-1.5">

                      {post.title}

                    </span>

                  </span>


                </span>

              </span>

            </Link>

          </li>

        );

      })}

    </ul>

  );
}
