import React from "react";
import Nav from "../component/Nav";
import Trend from "../component/Trend";
import Reasons from "../component/Reasons";
import Questions from "../component/Questions";
import Subscribe from "../component/Subscribe";
import Footer from "../component/Footer";

const Home = () => {
  return (
    <div>
      <Nav />
      <Trend />
      <Reasons />
      <Questions />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Home;
