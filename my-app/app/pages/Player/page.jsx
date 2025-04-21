"use client";
import { useState } from "react";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  Settings,
  Maximize2,
  Square,
} from "lucide-react";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState("0:03");
  const [totalTime, setTotalTime] = useState("3:12");

  const videos = [
    {
      id: 1,
      title: "B Tamir - The MongolZ (prod. by b1shrel) (Official Music Video)",
      channel: "MAD SUEY Records",
      duration: "3:13",
    },
    {
      id: 2,
      title: "CHOIRAYUNG - ULGER (Official Music Video)",
      channel: "CHOIRAYUNG",
      duration: "2:49",
    },
    {
      id: 3,
      title: "Amra & Mika D - Farewell (Lyrics)",
      channel: "AVE",
      duration: "3:15",
    },
    {
      id: 4,
      title: "Ginjin - How To Flex ft. B Tamir ( Official Video )",
      channel: "Ginjin",
      duration: "3:24",
    },
    {
      id: 5,
      title: "Soleil E Commerce | Preview",
      channel: "xsqmmm",
      duration: "1:22",
    },
    {
      id: 6,
      title: "Ginjin - We Ousside ( Official Music Video )",
      channel: "Ginjin",
      duration: "3:12",
    },
    {
      id: 7,
      title: "3 NO SCOPE KILLS FROM SENZU! THAT WAS AWESOME!",
      channel: "ESL Counter-Strike Clips",
      duration: "6:20",
    },
  ];

  return (
    <div className="bg-white min-h-screen text-white p-10">
      <main className="flex flex-col lg:flex-row max-w-screen-2xl mx-auto">
        {/* Video Player */}
        <div className="flex-grow">
          <div className="relative bg-black w-full aspect-video">
            <div className="absolute inset-0 flex items-center justify-center">
              {!isPlaying && (
                <div className="w-16 h-16 rounded-full bg-black bg-opacity-60 flex items-center justify-center cursor-pointer">
                  <Play size={36} className="text-white ml-1" />
                </div>
              )}
            </div>

            {/* Controls */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
              <div className="relative h-1 bg-gray-600 rounded-full mb-2 group cursor-pointer">
                <div className="absolute top-0 left-0 h-full w-1/12 bg-red-600 rounded-full"></div>
                <div className="absolute -top-1 left-[calc(8.33%-4px)] w-3 h-3 bg-red-600 rounded-full opacity-0 group-hover:opacity-100"></div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="text-white"
                  >
                    {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                  </button>
                  <button className="text-white">
                    <SkipForward size={20} />
                  </button>
                  <button className="text-white">
                    <Volume2 size={20} />
                  </button>
                  <span className="text-xs text-white">
                    {currentTime} / {totalTime}
                  </span>
                </div>

                <div className="flex items-center space-x-4">
                  <button className="text-white">
                    <Settings size={20} />
                  </button>
                  <button className="text-white">
                    <Square size={20} />
                  </button>
                  <button className="text-white">
                    <Maximize2 size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Title */}
          <div className="p-4">
            <h1 className="text-xl text-black font-bold">
              SPSS Судалгааны программ
            </h1>
          </div>
        </div>

        {/* Playlist */}
        <div className="w-full lg:w-96 bg-gray-800 border-l border-gray-800 h-[573px]">
          <div className="flex justify-between items-center p-4 border-b border-gray-800">
            <div>
              <h2 className="font-bold text-white">SPSS Судалгааны программ</h2>
              <p className="text-sm text-gray-400">Нийт хичээлийн сэдвүүд</p>
            </div>
          </div>

          <div className="overflow-y-auto max-h-full">
            {videos.map((video) => (
              <div
                key={video.id}
                className={`flex items-center p-2 hover:bg-gray-700 cursor-pointer ${
                  video.id === 1 ? "bg-gray-700" : ""
                }`}
              >
                <div className="w-8 flex items-center justify-center mr-2 text-sm">
                  {video.id === 1 ? (
                    <Play size={16} className="text-white" />
                  ) : (
                    <span className="text-gray-400">{video.id}</span>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium line-clamp-2 text-gray-300">
                    {video.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">{video.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
