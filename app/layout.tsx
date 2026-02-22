import type { Metadata } from "next";
import { Space_Grotesk, Syne } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Ben Rich — Full-Stack Developer",
  description:
    "Full-stack developer passionate about scalable web apps and exceptional UX. Based in Dar es Salaam.",
  keywords: ["fullstack", "developer", "react", "nextjs", "typescript", "tanzania"],
  openGraph: {
    title: "Ben Rich — Full-Stack Developer",
    description: "Full-stack developer passionate about scalable web apps and exceptional UX.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${syne.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
