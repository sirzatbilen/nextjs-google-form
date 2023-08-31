import { Inter } from "@next/font/google";

import Header from "@/components/header";
import Footer from "@/components/footer";

const interFontFamily = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={interFontFamily.className}>
      <body style={{ background: "rgb(227, 218, 234)" }}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
