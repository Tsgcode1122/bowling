import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import heroImage from "../icons/bgtrial.jpg"; // Make sure to add a background image

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroMiniText>Legendary Strike Mobile Bowling</HeroMiniText>
        <HeroText>We bring the ultimate Fun to your doorstep!</HeroText>
        <HeroSubText>
          Bowling, karaoke, laser tag, and gaming – perfect for parties, events,
          and gatherings.
        </HeroSubText>
        <HeroButton to="/booking">Book Now</HeroButton>
      </HeroContent>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  padding: 60px 30px;
  @media screen and (max-width: 320px) {
    padding: 50px 20px;
  }
  @media (min-width: 321px) and (max-width: 499px) {
    /* min-height: 220px; */
  }
`;

const HeroContent = styled.div``;

const HeroMiniText = styled.h1`
  background: linear-gradient(
    90deg,
    #240600 0%,
    rgba(53, 254, 150, 1) 33%,
    rgba(40, 195, 173, 1) 75%,
    #ff0000 100%
  );
  font-weight: 600;
  padding: 0;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  @media screen and (max-width: 320px) {
    font-size: 1rem;
  }
  @media (min-width: 321px) and (max-width: 499px) {
    font-size: 1.2rem;
    font-weight: bolder;
  }
`;

const HeroText = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  font-family: "Playfair Display", serif;
  @media screen and (max-width: 320px) {
    font-size: 2rem;
  }
  @media (min-width: 321px) and (max-width: 499px) {
    font-size: 2.3rem;
    padding: 0;
    line-height: 1.3;
  }
`;

const HeroSubText = styled.p`
  padding-bottom: 20px;
  @media screen and (max-width: 320px) {
    font-size: 1rem;
  }
  @media (min-width: 321px) and (max-width: 499px) {
    /* min-height: 220px; */
  }
`;

const HeroButton = styled(Link)`
  display: block;
  margin: 0 auto;
  font-size: 20px;

  /* width: fit-content; */
  padding: 12px 24px;
  background: linear-gradient(
    90deg,
    #240600 0%,
    rgba(53, 254, 150, 1) 33%,
    rgba(40, 195, 173, 1) 75%,
    #ff0000 100%
  );
  color: white;

  border: none;
  border-radius: 20px;
  text-align: center;

  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e5533d;
  }
`;

export default Hero;
