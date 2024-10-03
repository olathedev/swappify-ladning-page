import type { Metadata } from "next";
import { Poppins } from 'next/font/google'
import "./globals.css";
import { ModalProvider } from "@/context/ModalContext";
import { Toaster } from "sonner";

const poppins = Poppins({ subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700"] })

export const metadata: Metadata = {
  title: "Swapify",
  description: "Swap, exchange or barter used electronics, furniture, clothing, tools & more on Swapify, the fastest growing barter platform. Donate items, promote circular and sustainable economy with us.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/logo.svg" type="image/svg+xml" />
      </head>
      <body
        className={`${poppins.className} scroll-smooth`}
      >
        <Toaster closeButton position="top-center" expand={true} richColors />
        <ModalProvider>
          {children}
        </ModalProvider>
      </body>
    </html>
  );
}
