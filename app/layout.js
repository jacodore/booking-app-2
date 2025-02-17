import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body className="bg-gray-900 text-white">
        <header className="p-4 bg-gray-800">Prenotazioni Discoteche Roma</header>
        {children}
        <footer className="p-4 bg-gray-800">© 2025 Prenotazioni Roma</footer>
      </body>
    </html>
  );
}