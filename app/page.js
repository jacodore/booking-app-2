"use client";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const clubs = [
    { slug: 'hal-club', name: 'HAL Club', location: 'Villa Borghese, Roma', image: '/hal-club.jpg' },
    { slug: 'qi-clubbing', name: 'Qi Clubbing', location: 'Erbusco (BS)', image: '/qi-clubbing.jpg' },
    { slug: 'piper-club', name: 'Piper Club', location: 'Roma', image: '/piper-club.jpg' }
  ];

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Discoteche a Roma</h1>
      <div className="grid grid-cols-1 gap-6">
        {clubs.map((club) => (
          <div
            key={club.slug}
            onClick={() => router.push(`/${club.slug}`)}
            className="cursor-pointer bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700"
          >
            <img src={club.image} alt={club.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{club.name}</h2>
              <p className="text-gray-400">{club.location}</p>
            </div>
            <div className="h-1 bg-purple-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
}