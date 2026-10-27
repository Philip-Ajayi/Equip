import type { Metadata, Viewport } from "next";
import "./globals.css";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export const metadata: Metadata = {
  title: {
    default: "Project EQUIP 2026 | Leading Minds Leadership Initiative",
    template: "%s | Leading Minds",
  },
  description:
    "A residential leadership and practical skills experience for secondary school leavers in Oyo State, Nigeria.",
  keywords: [
    "Leading Minds Leadership Initiative",
    "Project EQUIP 2026",
    "Youth leadership",
    "Oyo State",
    "Ibadan",
    "Youth skills development",
  ],
  openGraph: {
    title: "Project EQUIP 2026",
    description:
      "Helping young people prepare for what comes next.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0f1d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html  lang="en" suppressHydrationWarning>
      <body>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
