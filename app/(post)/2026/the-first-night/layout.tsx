export async function generateMetadata() {
  return {
    alternates: {
      languages: {
        en: "https://ohhoba.com/2026/the-first-night",
        "zh-CN": "https://ohhoba.com/zh/2026/the-first-night",
      },
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
