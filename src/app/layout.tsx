import type { Metadata } from "next";
import type { Viewport } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sai Teja Sagari | Associate Technical Consultant",
  description:
    "Sai Teja Sagari is an Associate Technical Consultant working with AEM and Edge Delivery Services.",
  manifest: "/brand-kit/favicon/site.webmanifest",
  openGraph: {
    title: "Sai Teja Sagari | Associate Technical Consultant",
    description:
      "A portfolio of work across AEM, Edge Delivery Services, and digital experience quality.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sai Teja Sagari | Associate Technical Consultant",
    description:
      "A portfolio of work across AEM, Edge Delivery Services, and digital experience quality.",
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f6f3",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(() => {
              let saved = null;
              try {
                saved = window.localStorage.getItem("saiteja-theme");
              } catch (error) {
                console.error("Could not read the saved theme preference.", error);
              }
              const theme = saved === "light" || saved === "dark" ? saved : "light";
              document.documentElement.dataset.theme = theme;
            })();`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
