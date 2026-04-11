import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import trend1 from "../assets/trend1.webp";
import trend2 from "../assets/trend2.webp";
import trend3 from "../assets/trend3.webp";
import trend4 from "../assets/trend4.webp";
import trend5 from "../assets/trend5.webp";
import trend6 from "../assets/trend6.webp";
import trend7 from "../assets/trend7.webp";
import trend9 from "../assets/trend9.webp";
import trend10 from "../assets/trend10.webp";

const Trend = () => {
  const scrollRef = useRef(null);

  const movies = [
    trend1,
    trend2,
    trend3,
    trend4,
    trend5,
    trend6,
    trend7,
    trend9,
    trend10,
  ];

  const scroll = (dir) => {
    const container = scrollRef.current;

    const scrollAmount = container.clientWidth * 0.8; // responsive scroll

    container.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-black text-white py-8 px-4 sm:px-6 relative">
      <h1 className="font-bold text-xl sm:text-2xl mb-4 sm:mb-6">
        Trending Now
      </h1>

      <button
        onClick={() => scroll("left")}
        className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-black p-2 rounded-full"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={() => scroll("right")}
        className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-black p-2 rounded-full"
      >
        <ChevronRight size={24} />
      </button>

      <div className="overflow-x-auto scrollbar-hide">
        <div ref={scrollRef} className="flex gap-4 sm:gap-6 scroll-smooth">
          {movies.map((img, i) => (
            <div
              key={i}
              className="relative min-w-[140px] sm:min-w-[180px] md:min-w-[200px] 
                         h-[200px] sm:h-[250px] md:h-[280px] flex-shrink-0"
            >
              <span
                className="absolute left-[-10px] sm:left-[-15px] bottom-0 
                               text-[60px] sm:text-[90px] md:text-[120px] 
                               font-extrabold text-white/90 z-10"
              >
                {i + 1}
              </span>

              <div
                className="w-full h-full rounded-xl overflow-hidden 
                              hover:scale-105 transition duration-300"
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trend;
