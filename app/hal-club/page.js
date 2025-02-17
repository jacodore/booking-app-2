"use client";
import { useState } from 'react';

export default function HalClubPage() {
  const [tab, setTab] = useState('info');

  return (
    <div className="p-4 bg-white text-black min-h-screen">
      <img src="/hal-club.jpg" alt="HAL Club" className="w-full h-60 object-cover mb-4 rounded-lg" />
      <h1 className="text-3xl font-bold">HAL Club - ex Aster</h1>

      <div className="flex space-x-4 mt-4">
        <button onClick={() => setTab('info')} className={tab === 'info' ? 'font-bold text-blue-500' : 'text-gray-500'}>Info</button>
        <button onClick={() => setTab('prezzi')} className={tab === 'prezzi' ? 'font-bold text-blue-500' : 'text-gray-500'}>Prezzi</button>
      </div>

      {tab === 'info' && (
        <div className="mt-4">
          <p>Orario: 23:30 - 05:00</p>
          <p>Dress code: Elegante</p>
          <p>Età minima: Uomo 21+, Donna 19+</p>
          <p>Indirizzo: Villa Borghese, Roma</p>
        </div>
      )}

      {tab === 'prezzi' && (
        <div className="mt-4">
          <p>Ingresso Uomo: Gratis</p>
          <p>Ingresso Donna: Gratis</p>
          <p>Tavolo Privé: Prezzo su richiesta</p>
        </div>
      )}
    </div>
  );
}
