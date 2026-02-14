import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Weazel News | Los Santos First Source for News",
  description: "Breaking News, Politics, Crime and Entertainment from Los Santos, San Andreas.",
  icons: {
    icon: '/weazel.svg',
    apple: '/weazel.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Importing Oswald for that news headline feel */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&family=Inter:wght@400;500;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased font-sans selection:bg-weazel-yellow selection:text-black">
        {children}
      </body>
    </html>
  );
}
