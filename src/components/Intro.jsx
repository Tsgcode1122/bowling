import React from "react";
import styled, { keyframes } from "styled-components";
import w3 from "../icons/web3.webp";
import wicon from "../icons/bowpin.png";
import redb from "../icons/redb.png";
import videoBg from "../icons/Bowling.mp4";
import useLeftToRightSwipe from "../animation/useLeftToRightSwipe";
import useBounceIn from "../animation/useZoomInAnimation";
import { Link } from "react-router-dom";

const Intro = () => {
  useLeftToRightSwipe(".left-in");
  useBounceIn(".bounce-in");
  return (
    <IntroContainer>
      <IntroTitle>What’s up, Atlanta and surrounding cities!</IntroTitle>
      <IntroText className="left-in">
        Legendary Strikes proudly presents Georgia's first mobile bowling alley
        and gaming truck. Get ready for an unparalleled experience, perfect for:
        <List1>
          <li>
            <img src={wicon} alt="icon" />
            Birthday parties
          </li>
          <li>
            <img src={wicon} alt="icon" />
            Private parties
          </li>
          <li>
            <img src={wicon} alt="icon" />
            Tailgating
          </li>
          <li>
            <img src={wicon} alt="icon" />
            Corporate events
          </li>
        </List1>
      </IntroText>
      <VideoBg>
        {/* <img src={w3} /> */}
        <Overlay>
          <IntroText>
            <h3>Our mobile bowling alley and gaming truck includes:</h3>
            <List2>
              <li>
                {" "}
                <img src={redb} alt="icon" />6 TVs
              </li>
              <li>
                {" "}
                <img src={redb} alt="icon" /> PS4 & PS5
              </li>
              <li>
                {" "}
                <img src={redb} alt="icon" className="bounce-in" />
                Selfie station
              </li>
              <li>
                {" "}
                <img src={redb} alt="icon" />
                WIFI
              </li>
              <li>
                <img src={redb} alt="icon" />A 65" TV with over 100 channels,
                including all sports channels
              </li>
              <li>
                <img src={redb} alt="icon" />A 42 ft trailer equipped with 2
                bowling lanes (fits up to 25 people)
              </li>
            </List2>
            <span>
              Legendary Strikes will make your event the most talked-about with
              a legendary experience!
            </span>
          </IntroText>
          <HeroButton to="/booking">Book Now</HeroButton>
        </Overlay>
      </VideoBg>
    </IntroContainer>
  );
};

const IntroContainer = styled.div`
  padding: 20px;
  background-color: #fafafa;
  margin-top: 20px;
  border-radius: 30px 30px 0 0;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const IntroTitle = styled.h1`
  font-size: 29px;
  margin-bottom: 10px;
  color: #ff6347;
  font-family: "Playfair Display", serif;
`;

const IntroText = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
  line-height: 1.2;
  h3 {
    color: white;
    font-family: "Playfair Display", serif;
  }
`;

const List1 = styled.ul`
  margin-left: 2px;
  padding: 10px 0 10px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  li {
    list-style-type: none;
    padding-bottom: 5px;
    display: flex;
    align-items: center;
    gap: 10px;
    img {
      max-width: 100%;
      height: 20px;
    }
  }
`;
const pump = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;
const HeroButton = styled(Link)`
  display: block;
  margin: 0 auto;
  font-size: 20px;

  width: fit-content;
  padding: 12px 24px;
  background: linear-gradient(
    90deg,
    #240600 0%,
    #cad2ce67 33%,
    #6e7070 75%,
    #e5533d 100%
  );
  color: white;
  margin-top: 20px;
  border: none;
  border-radius: 20px;
  text-align: center;

  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s;
  animation: ${pump} 2s infinite;
  &:hover {
    background-color: #e5533d;
  }
`;
const List2 = styled.ul`
  margin-left: 2px;
  padding: 3px;
  background-size: cover;
  background-position: center;
  color: white;

  display: grid;
  grid-template-columns: 1fr 1fr;

  /* grid-auto-rows: minmax(50px, auto); */
  li:nth-child(5),
  li:nth-child(6) {
    grid-column: 1 / -1;
  }
  li {
    padding-bottom: 10px !important;
    list-style-type: none;
    display: flex;
    align-items: center;
    gap: 10px;
    img {
      max-width: 100%;
      height: 20px;
    }
  }
`;

const VideoBg = styled.div`
  border-radius: 20px;

  background-image: url(${w3});
  background-size: cover;
  background-position: center;
  img {
    border-radius: 20px;
    max-width: 100%;
  }
`;

const Overlay = styled.div`
  border-radius: 20px;

  padding: 20px;
  height: 100%;

  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  span {
    color: white;
    font-style: italic;
  }
`;

export default Intro;
