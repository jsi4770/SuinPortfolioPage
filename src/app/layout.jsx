import { Poppins, Inter } from 'next/font/google';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import siteConfig from '../../data/config/site.json';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: siteConfig.title.ko,
  description: siteConfig.description.ko,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={`${poppins.variable} ${inter.variable}`}>
      <body className="font-body bg-white text-ink-800 antialiased">
        <LanguageProvider>
          <Header siteName={siteConfig.name} />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
