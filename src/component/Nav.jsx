import React from "react";

const Nav = () => {
  return (
    <div className="relative w-full min-h-screen">
  
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{
          backgroundImage: "url('hero_image.jpg')",
        }}
      ></div>

      
      <div className="absolute inset-0 bg-black/70"></div>

    
      <div className="relative z-10 py-4 text-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600">
            NETFLIX
          </h1>

          <div className="flex gap-2 sm:gap-4 items-center">
            <select className="border px-2 py-1 border-gray-400 bg-transparent text-white text-sm sm:text-base">
              <option className="text-black">English</option>
              <option className="text-black">Arabic</option>
            </select>

            <button className="bg-red-600 px-3 sm:px-5 py-1 rounded-lg text-sm sm:text-base">
              Sign In
            </button>
          </div>
        </div>
      </div>

    
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white min-h-[80vh] px-4">
        
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 leading-snug">
          Unlimited movies, TV shows and more
        </h1>

        <p className="text-sm sm:text-lg md:text-xl mb-4">
          Starts at ₹149. Cancel at any time.
        </p>

        <p className="text-sm sm:text-lg md:text-2xl mb-6 max-w-xl">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

      
        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xl">
          <input
            type="email"
            placeholder="Email address"
            className="p-3 sm:p-4 w-full rounded bg-black/60 border border-gray-500"
          />
          <button className="bg-red-600 px-5 py-3 rounded font-semibold text-lg sm:text-xl">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;