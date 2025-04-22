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
      title: "SPSS Судалгааны программ",
      channel: "MAD SUEY Records",
      duration: "3:13",
    },
    {
      id: 2,
      title: "Enter data and define variable set",
      duration: "2:49",
    },
    {
      id: 3,
      title: "Descriptive statistic Тодорхойлогч статистик",
      duration: "3:15",
    },
    {
      id: 4,
      title: "Нөхцөлт болон бүлгүүдэр ангилж шинжилгээ хийх",
      duration: "3:24",
    }
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
              SPSS Судалгааны программ wpeoijrd
            </h1>
          </div>
        </div>

        {/* Playlist */}
        <div className="w-full lg:w-96 bg-gray-100 border border-gray-800 h-[573px] rounded-lg ">
          <div className="flex justify-between items-center p-4 border-b border-gray-400">
            <div>
              <h2 className="font-bold text-black">SPSS Судалгааны программ</h2>
              <p className="text-sm text-black">Нийт хичээлийн сэдвүүд</p>
            </div>
          </div>

          <div className="overflow-y-auto max-h-full">
            {videos.map((video) => (
              <div
                key={video.id}
                className={`flex items-center p-2 hover:bg-gray-200 cursor-pointer ${
                  video.id === 1 ? "bg-gray-400" : ""
                }`}
              >
                <div className="w-8 flex items-center justify-center mr-2 text-sm">
                  {video.id === 1 ? (
                    <Play size={16} className="text-black" />
                  ) : (
                    <span className="text-black">{video.id}</span>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium line-clamp-2 text-black">
                    {video.title}
                  </h3>
                  <p className="text-xs text-black mt-1">{video.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
