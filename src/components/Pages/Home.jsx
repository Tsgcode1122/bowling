import React from "react";
import Hero from "../Hero";
import Navbar from "../Navbar";
import HeroMoving from "../HeroMoving";
import Intro from "../Intro";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HeroMoving />
      <Intro />
    </>
  );
};

export default Home;
