import localFont from 'next/font/local';
import siteConfig from '../../data/config/site.json';
import './globals.css';

const pretendard = localFont({
  src: '../../node_modules/pretendard/dist/web/variable/woff2/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export const metadata = {
  metadataBase: new URL('https://suincredible.vercel.app'),
  title: siteConfig.title.ko,
  description: siteConfig.description.ko,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={pretendard.variable}>
      <body className="font-body bg-white text-ink-800 antialiased">
        {children}
      </body>
    </html>
  );
}
