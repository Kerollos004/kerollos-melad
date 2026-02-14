import type { Metadata } from "next";
import { Inter  } from 'next/font/google'
import "./globals.css";
import SideMenu from "./components/sideMenu/SideMenu"
import Footer from "./components/footer/Footer";
import { MenuProvider , ThemeProvider } from "./contexts";
export const metadata: Metadata = {
  title: "kerollos melad",
  description: "kerollos melad personal portifolio",
};


// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <ThemeProvider>
          <MenuProvider>
            <SideMenu/>
            {children}
            <Footer/>
          </MenuProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
