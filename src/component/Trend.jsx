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
    const cardWidth = 220; 

    container.scrollBy({
      left: dir === "left" ? -cardWidth * 3 : cardWidth * 3,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-black text-white py-10 px-6 relative">

      <h1 className="font-bold text-2xl mb-6">Trending Now</h1>

      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-black p-3 rounded-full"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-black p-3 rounded-full"
      >
        <ChevronRight size={28} />
      </button>

      <div className="overflow-hidden">
        
        <div
          ref={scrollRef}
          className="flex gap-6 scroll-smooth"
        >
          {movies.map((img, i) => (
            <div
              key={i}
              className="relative min-w-[200px] h-[280px] flex-shrink-0"
            >
              <span className="absolute left-[-20px] bottom-0 text-[120px] font-extrabold text-white/90 z-10 text-stroke-white">
                {i + 1}
              </span>

              <div className="w-full h-full rounded-xl overflow-hidden hover:scale-105 transition duration-300">
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Trend;