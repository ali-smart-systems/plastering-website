import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "معلم تلييس ولياسة في اليمن | مأرب | شبوة | حريب | بيحان",
    template: "%s | معلم تلييس ولياسة في اليمن",
  },

  description:
    "معلم تلييس ولياسة محترف في جميع محافظات اليمن، متخصص في اللياسة الداخلية والخارجية وتشطيب الواجهات والفلل والعمائر، مع خدمة مميزة في مأرب وشبوة وحريب وبيحان وجميع المحافظات اليمنية.",

  keywords: [
    // الكلمات الأساسية
    "لياسة",
    "تلييس",
    "تليوس",
    "محارة",
    "تلبيس جدران",
    "تشطيب",

    // الخدمات
    "لياسة داخلية",
    "لياسة خارجية",
    "تشطيب واجهات",
    "تشطيب فلل",
    "تشطيب عمائر",
    "ترميم الجدران",
    "معالجة التشققات",

    // نية البحث
    "معلم لياسة",
    "معلم تلييس",
    "عامل لياسة",
    "عامل تلييس",
    "مقاول لياسة",
    "مقاول تلييس",
    "أفضل معلم لياسة",
    "أفضل معلم تلييس",
    "رقم معلم لياسة",
    "رقم معلم تلييس",

    // المحافظات
    "لياسة اليمن",
    "لياسة مأرب",
    "لياسة شبوة",
    "لياسة حريب",
    "لياسة بيحان",
    "لياسة صنعاء",
    "لياسة عدن",
    "لياسة حضرموت",
    "لياسة تعز",
    "لياسة إب",
    "لياسة ذمار",
    "لياسة البيضاء",
    "لياسة الجوف",
    "لياسة أبين",
    "لياسة لحج",
    "لياسة الحديدة",
  ],


verification: {
  google: "yGsEhpBU4tOj2oVtJ4Qnz2ynWA2d_982wdf3rsaG7Kc",
},


  authors: [{ name: "سند الرباحي" }],
  creator: "سند الرباحي",
  publisher: "سند الرباحي",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "معلم تلييس ولياسة في اليمن",
    description:
      "أعمال اللياسة والتلييس الداخلية والخارجية وتشطيب الواجهات في جميع محافظات اليمن.",
    type: "website",
    locale: "ar_YE",
    images: ["/images/hero.webp"],
  },

  twitter: {
    card: "summary_large_image",
    title: "معلم تلييس ولياسة في اليمن",
    description:
      "خدمات اللياسة والتلييس الاحترافية في جميع محافظات اليمن.",
    images: ["/images/hero.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>
        {children}
      </body>
    </html>
  );
}