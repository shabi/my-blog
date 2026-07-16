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
    },
  };
}


export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
