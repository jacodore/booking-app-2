import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  weight: ['300', '400', '600'],
  subsets: ['latin'],
});

export default function Layout({ children }) {
  return (
    <html lang="it" className={poppins.className}>
      <body>{children}</body>
    </html>
  );
}
