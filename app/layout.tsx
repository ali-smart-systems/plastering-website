import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "معلم تلييس ولياسة في اليمن | مأرب | شبوة | حريب | بيحان",

  description:
    "معلم تلييس ولياسة محترف في جميع محافظات اليمن، متخصص في اللياسة الداخلية والخارجية وتشطيب الواجهات في مأرب وشبوة وحريب وبيحان.",

  keywords: [
    "معلم تلييس",
    "لياسة",
    "تلييس",
    "لياسة اليمن",
    "لياسة مأرب",
    "لياسة شبوة",
    "لياسة حريب",
    "لياسة بيحان",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}