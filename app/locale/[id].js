"use client";

import { useParams } from 'next/navigation';

export default function Locale() {
  const { id } = useParams();

  return (
    <div className="p-4 text-white">
      <h1 className="text-3xl font-bold">Locale {id}</h1>
      <p>Pagina di prova del locale {id}.</p>
    </div>
  );
}
