import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Noto_Sans_KR } from 'next/font/google';

const NotoR = Noto_Sans_KR({
  weight: '400',
  subsets: ['latin'],
});
const NotoB = Noto_Sans_KR({
  weight: '700',
  subsets: ['latin'],
  variable: '--Noto-B',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${NotoR.className} ${NotoB.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
