export async function generateMetadata() {
  return {
    title: "第一夜 | OhHoBa",

    description:
      "探索语言、符号与想象力的实验文章。",

    alternates: {
      languages: {
        en: "https://ohhoba.com/2026/the-first-night",
        "zh-CN": "https://ohhoba.com/zh/2026/the-first-night",
      },
    },

    openGraph: {
      title: "第一夜",

      description:
        "探索语言、符号与想象力的实验文章。",

      type: "article",

      url: "https://ohhoba.com/zh/2026/the-first-night",

      siteName: "OhHoBa",

      publishedTime: "2026-06-01",

      authors: [
        "OhHoBa",
      ],
    },
  };
}


export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",

            "@graph": [

              {
                "@type": "Article",

                "headline": "第一夜",

                "description":
                  "探索语言、符号与想象力的实验文章。",

                "author": {
                  "@type": "Organization",

                  "name": "OhHoBa",

                  "url": "https://ohhoba.com",
                },

                "publisher": {
                  "@type": "Organization",

                  "name": "OhHoBa",

                  "url": "https://ohhoba.com",
                },

                "datePublished": "2026-06-01",

                "dateModified": "2026-06-01",

                "mainEntityOfPage": {
                  "@type": "WebPage",

                  "@id":
                    "https://ohhoba.com/zh/2026/the-first-night",
                },
              },


              {
                "@type": "BreadcrumbList",

                "itemListElement": [

                  {
                    "@type": "ListItem",

                    "position": 1,

                    "name": "OhHoBa",

                    "item":
                      "https://ohhoba.com/zh",
                  },


                  {
                    "@type": "ListItem",

                    "position": 2,

                    "name": "第一夜",

                    "item":
                      "https://ohhoba.com/zh/2026/the-first-night",
                  },

                ],
              },

            ],
          }),
        }}
      />

      {children}
    </>
  );
}
