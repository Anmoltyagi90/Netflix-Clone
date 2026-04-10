import React from "react";

const Subscribe = () => {
  return (
    <div className="bg-black text-white py-5 px-6 flex flex-col items-center justify-center text-center">
      

      <p className="text-lg md:text-xl mb-6 max-w-xl">
        Ready to watch? Enter your email to create or restart your membership.
      </p>


      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl">
        
        <input
          type="email"
          placeholder="Email address"
          className="flex-1 px-5 py-4 rounded-md bg-[#121212] border border-gray-600 
          focus:outline-none focus:border-white text-white placeholder-gray-400"
        />

    
        <button
          className="bg-red-600 hover:bg-red-700 transition px-6 py-4 rounded-md font-semibold text-lg"
        >
          Get Started →
        </button>
      </div>
    </div>
  );
};

export default Subscribe;