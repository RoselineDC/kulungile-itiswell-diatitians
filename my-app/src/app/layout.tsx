
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kulungile – It Is Well Dietitians | Nutrition & Wellness",
  description:
    "Discover a compassionate approach to nutrition, wellness and health education with Kulungile – It Is Well Dietitians.",
  applicationName: "Kulungile – It Is Well Dietitians",
  openGraph: {
    title: "Kulungile – It Is Well Dietitians",
    description:
      "Nutrition. Wellness. Hope. Explore nutrition education and learn more about the practice.",
    type: "website",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f5ef",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-ZA">
      <body>{children}</body>
    </html>
  );
}
