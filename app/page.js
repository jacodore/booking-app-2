"use client";

import { useRouter } from 'next/navigation';
import { Home, Calendar, Ticket, MapPin, User, Bell, Frown } from 'lucide-react';
import { useState } from 'react';

export default function HomePage() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const eventiInEvidenza = [
    { id: 1, titolo: "VIDA LOCA", data: "22 Feb", luogo: "Erbusco", prezzo: "da €3", img: "/hal-club.jpg" },
    { id: 2, titolo: "STATE OF MIND", data: "22 Feb", luogo: "Cermenate", prezzo: "da €3", img: "/qi-clubbing.jpg" },
  ];

  return (
    <div className="bg-black text-white min-h-screen font-[Poppins]">
      
      {/* HEADER */}
      <div className="p-4 flex justify-between items-center bg-black">
        <h1 className="text-2xl font-bold">Home</h1>
        <div className="p-2 bg-purple-600 rounded-full cursor-pointer">
          <Bell size={24} />
        </div>
      </div>

      {/* BARRA DI RICERCA */}
      <div className="p-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Cerca eventi..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-gray-800 text-white rounded-full p-3 pl-10 outline-none"
          />
          <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
        </div>
      </div>

      {/* IN EVIDENZA */}
      {eventiInEvidenza.length > 0 ? (
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-3">🔥 In evidenza</h2>
          <div className="flex gap-4 overflow-x-scroll scrollbar-hide">
            {eventiInEvidenza.map((evento) => (
              <div key={evento.id} className="min-w-[200px] bg-gray-800 rounded-lg overflow-hidden transition-transform transform hover:scale-105">
                <img src={evento.img} alt={evento.titolo} className="w-full h-28 object-cover" />
                <div className="p-2">
                  <h3 className="text-sm font-bold">{evento.titolo}</h3>
                  <p className="text-xs text-gray-400">{evento.luogo} - {evento.data}</p>
                  <p className="text-xs font-semibold">{evento.prezzo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // SCHERMATA DI ERRORE SE NON CI SONO EVENTI
        <div className="flex flex-col items-center justify-center h-[50vh] text-center">
          <Frown size={50} className="text-gray-400 mb-4" />
          <h2 className="text-lg font-semibold">Oh!</h2>
          <p className="text-gray-400 text-sm px-6">Non ci sono eventi da mostrarti al momento, ripassa ogni tanto per nuovi eventi</p>
        </div>
      )}

      {/* SPAZIO PER EVITARE CHE LA NAVBAR COPRA CONTENUTI */}
      <div className="h-24"></div>

      {/* NAVIGAZIONE IN BASSO (SOLO ICONE) */}
      <div className="fixed bottom-0 left-0 right-0 bg-black p-3 flex justify-around text-gray-300 border-t border-gray-700">
        <div className="flex flex-col items-center cursor-pointer" onClick={() => router.push('/')}>
          <Home size={24} className="text-purple-500" />
        </div>
        <div className="flex flex-col items-center cursor-pointer" onClick={() => router.push('/eventi')}>
          <Calendar size={24} />
        </div>
        <div className="flex flex-col items-center cursor-pointer" onClick={() => router.push('/acquisti')}>
          <Ticket size={24} />
        </div>
        <div className="flex flex-col items-center cursor-pointer" onClick={() => router.push('/clubs')}>
          <MapPin size={24} />
        </div>
        <div className="flex flex-col items-center cursor-pointer" onClick={() => router.push('/profilo')}>
          <User size={24} />
        </div>
      </div>
    </div>
  );
}

