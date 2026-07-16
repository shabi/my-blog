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
