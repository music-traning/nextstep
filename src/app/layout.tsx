import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://next-step-2027.example.com"),
  title: "Next Step 2027 | AI時代に取り残されない、次世代のキャリアを。オンラインリスキリングスクール",
  description:
    "30代・40代の会社員および法人研修担当者向けオンラインリスキリングスクール「Next Step 2027」。1on1伴走型サポート、企業案件を想定した実践型ワークショップ、キャリアエージェント連携で、確かなスキル習得と転職・独立を支援します。",
  keywords: [
    "Next Step 2027",
    "リスキリング",
    "オンラインスクール",
    "30代 キャリアアップ",
    "40代 リスキリング",
    "AI時代 スキル習得",
    "法人研修",
    "伴走型サポート",
  ],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "Next Step 2027 | AI時代に取り残されない、次世代のキャリアを。",
    description:
      "伴走型サポートで確実なスキル習得と転職・独立を目指すオンラインリスキリングスクール。まずは無料オンラインカウンセリングでキャリアの現在地を確認しませんか？",
    url: "https://next-step-2027.example.com",
    siteName: "Next Step 2027",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/ogp.svg",
        width: 1200,
        height: 630,
        alt: "Next Step 2027 - オンラインリスキリングスクール OGP画像",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Next Step 2027 | AI時代に取り残されない、次世代のキャリアを。",
    description:
      "30代〜40代からの実践型リスキリングスクール。1on1伴走型サポートと実践ワークショップで次世代のキャリアへ。",
    images: ["/ogp.svg"],
  },
};

const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";

const HERO_IMG_BASE = "https://images.unsplash.com/photo-1552664730-d307ca884978";
const HERO_SRC_800 = `${HERO_IMG_BASE}?auto=format&fit=crop&fm=webp&w=800&q=75`;
const HERO_SRCSET = `${HERO_IMG_BASE}?auto=format&fit=crop&fm=webp&w=480&q=72 480w, ${HERO_IMG_BASE}?auto=format&fit=crop&fm=webp&w=800&q=75 800w, ${HERO_IMG_BASE}?auto=format&fit=crop&fm=webp&w=1200&q=75 1200w`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link
          rel="preconnect"
          href="https://images.unsplash.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="image"
          href={HERO_SRC_800}
          imageSrcSet={HERO_SRCSET}
          imageSizes="(max-width: 640px) 92vw, (max-width: 1024px) 512px, 480px"
          fetchPriority="high"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-slate-900 antialiased">
        {/* Google Analytics 4 (GA4) 測定用スクリプト（初期描画・LCP完了後に遅延ロード） */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="lazyOnload"
        />
        <Script id="ga4-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}
