"use client";

import Link from 'next/link';

export default function Home() {
  return (
    <div className="p-4 text-white">
      <h1 className="text-3xl font-bold">Homepage - Locali</h1>
      <Link href="/locale/1" className="text-blue-400 underline">Vai al Locale 1</Link>
    </div>
  );
}