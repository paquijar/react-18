import type { Metadata } from "next";
import "./globals.css";
import { Roboto_Flex } from "next/font/google";
import Link from "next/link";

const roboto = Roboto_Flex({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="nord" lang="en" className={roboto.className}>
      <body>
        <header className="navbar bg-neutral text-neutral-content">
          <Link href="/">
            <h1 className="text-xl">React 18</h1>
          </Link>
        </header>
        <div className="p-4">{children}</div>
      </body>
    </html>
  );
}
