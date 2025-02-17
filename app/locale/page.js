"use client";

import { useSearchParams } from 'next/navigation';

export default function Locale() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  return (
    <div className="p-4 text-white">
      <h1 className="text-3xl font-bold">Locale ID: {id}</h1>
      <p>Hai aperto il locale con ID: {id}</p>
    </div>
  );
}

