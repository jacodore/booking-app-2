import { useState } from 'react';
import { Home, Calendar, Ticket, MapPin, User, Search, Map, QrCode, MessageSquare } from 'lucide-react';
import { Input } from '@/components/ui/input';

export default function AppLayout() {
  const [tab, setTab] = useState('home');

  const clubs = [
    { id: 1, name: 'Number One Disco', location: 'Corte Franca (BS)', image: '/images.jpg', link: '#' },
    { id: 2, name: 'Qi Clubbing', location: 'Erbusco (BS)', image: '/images (1).jpg', link: '#' },
    { id: 3, name: 'Piper Club', location: 'Roma (RM)', image: '/images (3).jpg', link: '#' },
    { id: 4, name: 'Energy Club', location: 'Milano (MI)', image: '/images (2).jpg', link: '#' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col font-sans">
      <div className="flex-1 p-4 font-sans">
        {tab === 'home' && (
          <div>
            <div className="relative mb-4">
              <Search className="absolute left-3 top-3 text-gray-400" />
              <Input
                type="text"
                placeholder="Cerca eventi..."
                className="pl-10 py-2 w-full bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <h1 className="text-2xl font-bold mb-4 text-purple-400 font-sans">In evidenza</h1>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-purple-700 p-2 rounded-lg">
                <img src="https://via.placeholder.com/150" alt="Evento 1" className="w-full h-24 object-cover rounded" />
                <p className="mt-2 text-white font-sans">VIDA LOCA 🔥</p>
                <p className="text-gray-300 font-sans">Erbusco - 22 Feb, 20:30</p>
              </div>
              <div className="bg-purple-700 p-2 rounded-lg">
                <img src="https://via.placeholder.com/150" alt="Evento 2" className="w-full h-24 object-cover rounded" />
                <p className="mt-2 text-white font-sans">STATE OF MIND</p>
                <p className="text-gray-300 font-sans">Cermenate - 22 Feb, 20:30</p>
              </div>
            </div>
            <div className="mt-6">
              <h2 className="text-xl text-purple-300 mb-3 font-sans">Offerte del giorno</h2>
              <p className="text-gray-400 font-sans">Tavolo VIP - Club Roma - Sconto 20%</p>
              <p className="text-gray-400 font-sans">Ingresso Free entro mezzanotte - Club Energy</p>
            </div>
          </div>
        )}
        {tab === 'eventi' && (
          <div>
            <h1 className="text-2xl font-bold mb-4 text-purple-400 font-sans">Prossimi Eventi</h1>
            <div className="space-y-4">
              <div className="bg-gray-800 p-3 rounded-lg">
                <p className="text-white font-sans">Il Nuovo Aperitivo</p>
                <p className="text-gray-300 font-sans">Milano - 20 Feb</p>
              </div>
              <div className="bg-gray-800 p-3 rounded-lg">
                <p className="text-white font-sans">Ti Sblocco un Ricordo</p>
                <p className="text-gray-300 font-sans">Milano - 21 Feb</p>
              </div>
            </div>
          </div>
        )}
        {tab === 'acquisti' && (
          <div className="text-center font-sans">Nessun ordine trovato. Effettua il tuo primo acquisto!</div>
        )}
        {tab === 'clubs' && (
          <div>
            <h1 className="text-2xl font-bold mb-4 text-purple-400 font-sans">Clubs</h1>
            <div className="grid grid-cols-1 gap-4">
              {clubs.map((club) => (
                <a key={club.id} href={club.link} className="block bg-gray-800 p-3 rounded-lg border-b-2 border-purple-500">
                  <img src={club.image} alt={club.name} className="w-full h-24 object-cover rounded" />
                  <p className="text-white font-sans mt-2">{club.name}</p>
                  <p className="text-gray-300 font-sans">{club.location}</p>
                  <button className="text-blue-400 mt-2 flex items-center font-sans">
                    <Map className="mr-2" /> Naviga su Maps
                  </button>
                </a>
              ))}
            </div>
          </div>
        )}
        {tab === 'profilo' && <div className="text-center font-sans">Profilo - Preferenze e impostazioni</div>}
      </div>

      <div className="bg-gray-800 p-3 flex justify-around border-t border-gray-700">
        <button onClick={() => setTab('home')} className={tab === 'home' ? 'text-green-400' : 'text-white'}>
          <Home />
        </button>
        <button onClick={() => setTab('eventi')} className={tab === 'eventi' ? 'text-green-400' : 'text-white'}>
          <Calendar />
        </button>
        <button onClick={() => setTab('acquisti')} className={tab === 'acquisti' ? 'text-green-400' : 'text-white'}>
          <Ticket />
        </button>
        <button onClick={() => setTab('clubs')} className={tab === 'clubs' ? 'text-green-400' : 'text-white'}>
          <MapPin />
        </button>
        <button onClick={() => setTab('profilo')} className={tab === 'profilo' ? 'text-green-400' : 'text-white'}>
          <User />
        </button>
      </div>
    </div>
  );
}
