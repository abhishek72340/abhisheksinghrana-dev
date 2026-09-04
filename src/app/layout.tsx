import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Abhishek Singh Rana | Software Engineer (3 YOE)",
  description:
    "Interactive Portfolio of Abhishek Singh Rana, Software Engineer with 3 years of experience specializing in Next.js 15, React, TypeScript, Node.js, Express, Docker, and web architectures.",
  keywords: [
    "Abhishek Singh Rana",
    "Software Engineer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "3D Portfolio",
    "Node.js",
    "Docker",
    "MongoDB",
  ],
  authors: [{ name: "Abhishek Singh Rana" }],
  openGraph: {
    title: "Abhishek Singh Rana | Software Engineer",
    description:
      "Software Engineer with 3 years of experience crafting high-performance, WebGL & Next.js 15 web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${spaceGrotesk.variable} dark scroll-smooth`}>
      <body className="bg-black text-white antialiased min-h-screen selection:bg-white selection:text-black font-sans">
        {children}
      </body>
    </html>
  );
}

