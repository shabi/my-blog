export async function generateMetadata() {
  return {
    title: "The First Night | OhHoBa",

    description:
      "A small experiment exploring language, symbols, and imagination.",

    alternates: {
      languages: {
        en: "https://ohhoba.com/2026/the-first-night",
        "zh-CN": "https://ohhoba.com/zh/2026/the-first-night",
      },
    },

    openGraph: {
      title: "The First Night",

      description:
        "A small experiment exploring language, symbols, and imagination.",

      type: "article",

      url: "https://ohhoba.com/2026/the-first-night",

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

                "headline": "The First Night",

                  "image": 
                  {"@type": "ImageObject","url": "https://ohhoba.com/opengraph-image",},
                
                "description":
                  "A small experiment exploring language, symbols, and imagination.",

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

                "datePublished": "2026-06-01T00:00:00+00:00",

                 "dateModified": "2026-06-01T00:00:00+00:00",

                "mainEntityOfPage": {
                  "@type": "WebPage",

                  "@id":
                    "https://ohhoba.com/2026/the-first-night",
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
                      "https://ohhoba.com",
                  },


                  {
                    "@type": "ListItem",

                    "position": 2,

                    "name": "The First Night",

                    "item":
                      "https://ohhoba.com/2026/the-first-night",
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
