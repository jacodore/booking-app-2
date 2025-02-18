"use client";
import { useState } from 'react';

export default function Profilo() {
  const [nome, setNome] = useState("Nome Utente");
  const [email, setEmail] = useState("email@example.com");

  return (
    <div className="bg-black text-white min-h-screen font-[Poppins] p-4">
      <h1 className="text-2xl font-bold mb-4">Profilo Utente</h1>
      <div className="bg-gray-800 p-4 rounded-lg mb-4">
        <h2 className="text-xl">{nome}</h2>
        <p className="text-sm text-gray-400">{email}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Club Preferiti</h3>
        <p className="text-gray-400">Nessun preferito ancora.</p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Storico Prenotazioni</h3>
        <p className="text-gray-400">Nessuna prenotazione effettuata.</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold">Recensioni Lasciate</h3>
        <p className="text-gray-400">Nessuna recensione ancora.</p>
      </div>
    </div>
  );
}
