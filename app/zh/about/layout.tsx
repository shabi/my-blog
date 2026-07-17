import type { ReactNode } from "react";


export const metadata = {
  title: "关于 OhHoBa | OhHoBa",

  description:
    "了解 OhHoBa，一个探索趣味语言、非传统文字以及独特符号的创意空间。",
};


export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",

            "@type": "AboutPage",

            "name": "关于 OhHoBa",

            "url": "https://ohhoba.com/zh/about",

            "about": {
              "@type": "Organization",

              "name": "OhHoBa",

              "url": "https://ohhoba.com",
            },
          }),
        }}
      />

      {children}
    </>
  );
}
