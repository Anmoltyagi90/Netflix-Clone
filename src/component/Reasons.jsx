import React from "react";
import { Download, Globe, Smile } from "lucide-react";
import { LuMonitor, LuMonitorPlay } from "react-icons/lu";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { GiWatchtower } from "react-icons/gi";
import { RiStarSmileLine } from "react-icons/ri";

const Reasons = () => {
  const data = [
    {
      title: "Enjoy on your TV",
      desc: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
      icon: <LuMonitorPlay size={80} />,
    },
    {
      title: "Download your shows to watch offline",
      desc: "Save your favourites easily and always have something to watch.",
      icon: <FaCloudDownloadAlt size={80} />,
    },
    {
      title: "Watch everywhere",
      desc: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
      icon: <GiWatchtower size={80} />,
    },
    {
      title: "Create profiles for kids",
      desc: "Send kids on adventures with their favourite characters in a space made just for them.",
      icon: <RiStarSmileLine size={80} />,
    },
  ];

  return (
    <div className="bg-black text-white py-20 px-6 md:px-12">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold mb-12">
        More reasons to join
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {data.map((item, i) => (
          <div
            key={i}
            className="relative p-6 rounded-2xl 
            bg-gradient-to-br from-[#1c2b4a] to-[#140c14]
            border border-white/10
            hover:scale-105 hover:border-red-500/40
            hover:shadow-xl hover:shadow-red-900/30
            transition-all duration-300 ease-in-out
            min-h-[390px] flex flex-col justify-between"
          >
            {/* Content */}
            <div>
              <h2 className="text-2xl font-semibold mb-3">{item.title}</h2>

              <p className="text-gray-400 text-xl leading-relaxed">
                {item.desc}
              </p>
            </div>

            {/* Icon */}
            <div className="absolute bottom-4 right-4 mr-10  opacity-80 group-hover:opacity-100 transition text-7xl">
              {item.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reasons;
