import React, { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";

const faqData = [
  {
    question: "What is Netflix?",
    answer:
      "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
  },
  {
    question: "How much does Netflix cost?",
    answer:
      "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649/month.",
  },
  {
    question: "Where can I watch?",
    answer:
      "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
  },
  {
    question: "How do I cancel?",
    answer:
      "Netflix is flexible. You can easily cancel your account online in two clicks. There are no cancellation fees– start or stop your account anytime.",
  },
  {
    question: "What can i wtch on Netflix?",
    answer:
      "Netflix has an extensive library of feature films, documentaries, shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
  },

  {
    question: "Is Netflix good for kids?",
    answer:
      "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
  },
];

const Questions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="px-6 md:px-12 bg-black min-h-screen">
      <div className="text-white py-10">
        <h1 className="text-3xl font-bold text-center">
          Frequently Asked Questions
        </h1>
      </div>

      <div className="flex flex-col gap-3">
        {faqData.map((item, index) => (
          <div key={index} className="text-white">
            <div
              className="bg-gray-800 flex justify-between items-center px-6 py-5 cursor-pointer hover:bg-gray-700 transition"
              onClick={() => toggle(index)}
            >
              <h2 className="text-xl md:text-3xl">{item.question}</h2>

              <span className="text-3xl">
                {activeIndex === index ? <FaTimes /> : <FaPlus />}
              </span>
            </div>

            {activeIndex === index && (
              <div className="bg-gray-800 px-6 py-5 mt-[2px] text-2xl text-gray-300">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;
