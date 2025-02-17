"use client";

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function LocaleContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  return (
    <div className="p-4 text-white">
      <h1 className="text-3xl font-bold">Locale ID: {id}</h1>
      <p>Hai aperto il locale con ID: {id}</p>
    </div>
  );
}

export default function Locale() {
  return (
    <Suspense fallback={<div>Caricamento...</div>}>
      <LocaleContent />
    </Suspense>
  );
}
