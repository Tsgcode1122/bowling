import React from "react";
import styled, { keyframes } from "styled-components";
import b1 from "../icons/bowl1.jpg";
import b2 from "../icons/bowl2.jpg";
import b3 from "../icons/bowl3.jpg";
import b4 from "../icons/bowl4.jpg";
import b5 from "../icons/bowl5.jpg";
import b6 from "../icons/bowl6.jpg";
import b7 from "../icons/bowl7.jpg";
import b8 from "../icons/bowl8.jpg";
import w1 from "../icons/web1.webp";
import w2 from "../icons/web2.webp";
import w3 from "../icons/web3.webp";
import w4 from "../icons/web4.webp";
import w5 from "../icons/web5.webp";
import b9 from "../icons/bowl9.jpg";

const HeroMoving = () => {
  return (
    <>
      <ImageWrapper>
        <MovingImage>
          <ImageContainer>
            <img src={b1} />
            <img src={b2} />
            <img src={b3} />
            <img src={b4} />
            <img src={b5} />
            <img src={b6} />
            <img src={b1} />
            <img src={b2} />
            <img src={b3} />
            <img src={b4} />
            <img src={b5} />
          </ImageContainer>
        </MovingImage>
      </ImageWrapper>
      <ImageWrapper2>
        <MovingImage2>
          <ImageContainer2>
            <img src={w1} />
            <img src={w2} />
            <img src={w3} />
            <img src={w4} />
            <img src={w5} />
          </ImageContainer2>
        </MovingImage2>
      </ImageWrapper2>
    </>
  );
};

// Keyframes for the animation
const moveRightToLeft = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const ImageWrapper = styled.div`
  overflow-x: hidden;
  padding-bottom: 20px;
`;
const MovingImage = styled.div`
  animation: ${moveRightToLeft} 15s linear infinite;

  img {
    max-width: 100%;
    height: 150px;
    object-fit: cover;
    min-width: 200px;
    margin-right: 12px;
    border-radius: 10px;

    @media screen and (max-width: 320px) {
      height: 110px;
      min-width: 160px;
    }
    @media (min-width: 321px) and (max-width: 499px) {
      height: 100px;
      min-width: 170px;
    }
  }
`;
const ImageContainer = styled.div`
  display: flex;
  width: calc(200px * 9 + 12px * 8);
`;
const moveLeftToRight = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const ImageWrapper2 = styled.div`
  overflow-x: hidden;
`;
const MovingImage2 = styled.div`
  animation: ${moveLeftToRight} 60s linear infinite;

  img {
    max-width: 100%;
    height: 150px;
    object-fit: cover;
    min-width: 200px;
    margin-right: 12px;
    border-radius: 10px;

    @media screen and (max-width: 320px) {
      height: 110px;
      min-width: 160px;
    }
    @media (min-width: 321px) and (max-width: 499px) {
      height: 100px;
      min-width: 170px;
    }
  }
`;
const ImageContainer2 = styled.div`
  display: flex;
`;
export default HeroMoving;
