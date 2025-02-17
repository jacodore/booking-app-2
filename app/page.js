"use client";

import { useRouter } from 'next/navigation';
import { Home, Calendar, Ticket, MapPin, User, Search } from 'lucide-react';
import { useState } from 'react';

export default function HomePage() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const clubs = [
    { slug: 'hal-club', name: 'HAL Club', location: 'Villa Borghese, Roma', image: '/hal-club.jpg' },
    { slug: 'qi-clubbing', name: 'Qi Clubbing', location: 'Erbusco (BS)', image: '/qi-clubbing.jpg' },
    { slug: 'piper-club', name: 'Piper Club', location: 'Roma', image: '/piper-club.jpg' }
  ];

  const eventiInEvidenza = [
    { id: 1, titolo: "VIDA LOCA", data: "22 Feb", luogo: "Erbusco", prezzo: "da €3", img: "/hal-club.jpg" },
    { id: 2, titolo: "STATE OF MIND", data: "22 Feb", luogo: "Cermenate", prezzo: "da €3", img: "/qi-clubbing.jpg" },
  ];

  return (
    <div className="bg-black text-white min-h-screen font-[Poppins]">
      {/* HEADER */}
      <div className="p-4 bg-purple-800">
        <h1 className="text-xl font-bold">Ciao 👋</h1>
        <p className="text-gray-300">I am having fun</p>
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
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
        </div>
      </div>

      {/* IN EVIDENZA */}
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-3">In evidenza</h2>
        <div className="flex gap-4 overflow-x-scroll scrollbar-hide">
          {eventiInEvidenza.map((evento) => (
            <div key={evento.id} className="min-w-[200px] bg-gray-800 rounded-lg overflow-hidden">
              <img src={evento.img} alt={evento.titolo} className="w-full h-28 object-cover" />
              <div className="p-2">
                <h3 className="text-sm font-bold">{evento.titolo}</h3>
                <p className="text-xs text-gray-400">{evento.luogo}</p>
                <p className="text-xs font-semibold">{evento.prezzo}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CLUBS */}
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-3">Clubs</h2>
        <div className="grid grid-cols-1 gap-4">
          {clubs.map((club) => (
            <div
              key={club.slug}
              className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer"
              onClick={() => router.push(`/${club.slug}`)}
            >
              <img src={club.image} alt={club.name} className="w-full h-32 object-cover" />
              <div className="p-3">
                <h3 className="font-semibold">{club.name}</h3>
                <p className="text-sm text-gray-400">{club.location}</p>
              </div>
              <div className="h-1 bg-purple-600"></div>
            </div>
          ))}
        </div>
      </div>

      {/* NAVIGAZIONE IN BASSO */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900 p-3 flex justify-around text-gray-300">
        <div className="flex flex-col items-center cursor-pointer" onClick={() => router.push('/')}>
          <Home size={24} />
          <span className="text-xs">Home</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer" onClick={() => alert('Eventi - Da creare')}>
          <Calendar size={24} />
          <span className="text-xs">Eventi</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer" onClick={() => alert('Acquisti - Da creare')}>
          <Ticket size={24} />
          <span className="text-xs">Acquisti</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer" onClick={() => alert('Clubs - Da creare')}>
          <MapPin size={24} />
          <span className="text-xs">Clubs</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer" onClick={() => alert('Profilo - Da creare')}>
          <User size={24} />
          <span className="text-xs">Profilo</span>
        </div>
      </div>
    </div>
  );
}
