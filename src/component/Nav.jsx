import React from "react";

const Nav = () => {
  return (
    <div className="relative w-full h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{
          backgroundImage: "url('hero_image.jpg')",
        }}
      ></div>

      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 py-5 text-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 ">
          <h1 className="text-4xl font-bold text-red-600">NETFLIX</h1>

          <div className="flex gap-4 items-center">
            <select className="border p-1 border-gray-400 bg-transparent text-white pr-25 mr-2">
              <option className="text-black">English</option>
              <option className="text-black">Arabic</option>
            </select>

            <button className="bg-red-600 px-5 py-1 rounded-lg">Sign In</button>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-4">
        <h1 className="text-5xl font-bold mb-4">
          Unlimited movies, TV shows and more
        </h1>

        <p className="text-xl mb-6">Starts at ₹149. Cancel at any time.</p>

        <p className="text-2xl mb-6">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <div className="flex gap-2">
          <input
            type="email"
            placeholder="Email address"
            className="p-5 w-[300px] rounded bg-black/60 border border-gray-500"
          />
          <button className="bg-red-600 px-6 py-3 rounded font-semibold text-2xl">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
