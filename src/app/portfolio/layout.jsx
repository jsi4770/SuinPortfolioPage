import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import siteConfig from '../../../data/config/site.json';

export default function SiteLayout({ children }) {
  return (
    <LanguageProvider>
      <Header siteName={siteConfig.name} />
      <main className="pt-11 md:pt-12">{children}</main>
      <Footer />
    </LanguageProvider>
  );
}
