import './globals.css';

export default function Layout({ children }) {
  return (
    <html lang="it">
      <body className="bg-black text-white min-h-screen">{children}</body>
    </html>
  );
}
