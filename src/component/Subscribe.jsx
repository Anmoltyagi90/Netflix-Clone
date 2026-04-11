import React from "react";

const Subscribe = () => {
  return (
    <div className="bg-black text-white py-8 px-4 sm:px-6 flex flex-col items-center justify-center text-center">
      <p className="text-sm sm:text-lg md:text-xl mb-5 sm:mb-6 max-w-xl leading-relaxed">
        Ready to watch? Enter your email to create or restart your membership.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-2xl">
        <input
          type="email"
          placeholder="Email address"
          className="flex-1 px-4 sm:px-5 py-3 sm:py-4 rounded-md 
          bg-[#121212] border border-gray-600 
          focus:outline-none focus:border-white 
          text-white placeholder-gray-400 text-sm sm:text-base"
        />

        <button
          className="bg-red-600 hover:bg-red-700 transition 
          px-5 sm:px-6 py-3 sm:py-4 rounded-md 
          font-semibold text-base sm:text-lg 
          w-full sm:w-auto"
        >
          Get Started →
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
