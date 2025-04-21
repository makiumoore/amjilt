// pages/index.js
import { useState } from 'react';
import Head from 'next/head';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { AiOutlineLike } from "react-icons/ai";

export default function main() {
  const [watchlistPage, setWatchlistPage] = useState(0);
  const [popularPage, setPopularPage] = useState(0);

  const watchlist = [
    {
      id: 1,
      title: "SPSS Судалгааны программ",
      image: "/surgalt_image/SPSS.png",
      rating: 4,
      genre: "Нийт хичээл",
      number: '4'
    },
    {
      id: 2,
      title: "SKETCHUP",
      image: "/surgalt_image/sketchup.jpg",
      rating: 8.2,
      genre: "Нийт хичээл",
      number: '18'
    },
    {
      id: 3,
      title: "AUTOCAD Сургалт",
      image: "/surgalt_image/PPP.jpg",
      rating: 9.1,
      genre: "Нийт хичээ",
      number: '11'
    },
    {
      id: 4,
      title: "ADOBE INDESIGN",
      image: "/surgalt_image/adobe.webp",
      rating: 8.5,
      genre: "Нийт хичээл",
      number: '20'
    },
    {
      id: 5,
      title: "CANVA",
      image: "/surgalt_image/canva.webp",
      rating: 9.1,
      genre: "Нийт хичээл",
      number: '3'
    },
    {
      id: 6,
      title: "3DS MAX TUTORIALS",
      image: "/surgalt_image/tocad.jpg",
      rating: 8.5,
      genre: "Нийт хичээл",
      number: '7'
    }
  ];

  const popularSeries = [
    {
      id: 1,
      title: "3D MAYA",
      image: "/surgalt_image/advsfd.png",
      rating: 8.7,
      genre: "Нийт хичээл",
      number: '22'
    },
    {
      id: 2,
      title: "REACT JS",
      image: "/surgalt_image/react.png",
      rating: 7.9,
      genre: "Нийт хичээл",
      number: '5'
    },
    {
      id: 3,
      title: "CANVA",
      image: "/surgalt_image/canva.webp",
      rating: 8.8,
      genre: "Нийт хичээл",
      number: '3'
    },
    {
      id: 4,
      title: "ADOBE INDESIGN",
      image: "/surgalt_image/adobe.webp",
      rating: 8.3,
      genre: "Нийт хичээл",
      number: '20'
    },
    {
      id: 5,
      title: "SKETCHUP",
      image: "/surgalt_image/sketchup.jpg",
      rating: 8.8,
      genre: "Нийт хичээл ",
      number: '18'
    },
    {
      id: 6,
      title: "3DS MAX TUTORIALS",
      image: "/surgalt_image/tocad.jpg",
      rating: 8.3,
      genre: "Нийт хичээл",
      number: '7'
    }
  ];

  const itemsPerPage = 4;
  const watchlistStart = watchlistPage * itemsPerPage;
  const popularStart = popularPage * itemsPerPage;

  const nextWatchlist = () => {
    if (watchlistStart + itemsPerPage < watchlist.length) {
      setWatchlistPage(watchlistPage + 1);
    }
  };

  const prevWatchlist = () => {
    if (watchlistPage > 0) {
      setWatchlistPage(watchlistPage - 1);
    }
  };

  const nextPopular = () => {
    if (popularStart + itemsPerPage < popularSeries.length) {
      setPopularPage(popularPage + 1);
    }
  };

  const prevPopular = () => {
    if (popularPage > 0) {
      setPopularPage(popularPage - 1);
    }
  };

  return (
    <div className="min-h-screen text-black p-6">
      <Head>
        <title>Streaming Service</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-8xl p-10">
        <section className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Сүүлд үзсэн</h2>
            <div className="flex space-x-2">
              <button 
                onClick={prevWatchlist} 
                className="bg-gray-700 rounded-full p-1"
                disabled={watchlistPage === 0}
              >
                <ChevronLeft size={20} className={watchlistPage === 0 ? "text-gray-500" : "text-white"} />
              </button>
              <button 
                onClick={nextWatchlist} 
                className="bg-gray-700 rounded-full p-1"
                disabled={watchlistStart + itemsPerPage >= watchlist.length}
              >
                <ChevronRight size={20} className={watchlistStart + itemsPerPage >= watchlist.length ? "text-gray-500" : "text-white"} />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-4 gap-4">
            {watchlist.slice(watchlistStart, watchlistStart + itemsPerPage).map((show) => (
              <div key={show.id} className="relative rounded-lg overflow-hidden group shadow-xl">
                <div className="relative">
                  <img src={show.image} alt={show.title} className="w-full h-40 object-cover" />
                  <div className=" group-hover:block hidden absolute top-2 right-2 bg-blue-600 text-white rounded-full p-2 cursor-pointer">
                  <AiOutlineLike size={16}/>
                  </div>
                </div>
                <div className=" p-3">
                  <h3 className="font-medium text-sm">{show.title}</h3>
                  <div className="flex items-center justify-between mt-1">
                    <div className="flex items-center">
                      <span className="text-yellow-400">★</span>
                      <span className="text-xs ml-1">{show.rating}</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-3 h-3 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm4 6a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs ml-1 flex items-center gap-2">{show.genre} <p className='text-gray-800 font-bold'>{show.number}</p></span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Их үзэлттэй</h2>
            <div className="flex space-x-2">
              <button 
                onClick={prevPopular} 
                className="bg-gray-700 rounded-full p-1"
                disabled={popularPage === 0}
              >
                <ChevronLeft size={20} className={popularPage === 0 ? "text-gray-500" : "text-white"} />
              </button>
              <button 
                onClick={nextPopular} 
                className="bg-gray-700 rounded-full p-1"
                disabled={popularStart + itemsPerPage >= popularSeries.length}
              >
                <ChevronRight size={20} className={popularStart + itemsPerPage >= popularSeries.length ? "text-gray-500" : "text-white"} />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-4 gap-4">
            {popularSeries.slice(popularStart, popularStart + itemsPerPage).map((show) => (
              <div key={show.id} className="relative rounded-lg overflow-hidden group shadow-xl">
                <div className="relative">
                  <img src={show.image} alt={show.title} className="w-full h-40 object-cover" />
                  <div className=" group-hover:block hidden absolute top-2 right-2 bg-blue-600 text-white rounded-full p-2 cursor-pointer">
                  <AiOutlineLike size={16} />
                  </div>
                </div>
                <div className=" p-3">
                  <h3 className="font-medium text-sm">{show.title}</h3>
                  <div className="flex items-center justify-between mt-1">
                    <div className="flex items-center">
                      <span className="text-yellow-400">★</span>
                      <span className="text-xs ml-1">{show.rating}</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-3 h-3 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm4 6a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs ml-1 flex items-center gap-2">{show.genre} <p className='text-gray-800 font-bold'>{show.number}</p></span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}