import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import logo from "../icons/bowling.png";
import logoicon from "../icons/bow.png";
import navicon from "../icons/hamburger.png";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <>
      <StyledNavbar style={{ top: visible ? 0 : "-5rem" }}>
        <Space>
          <img src={logo} alt="Logo" />
          <MenuToggle onClick={toggleSidebar}>
            <img src={navicon} alt="Menu Icon" />
          </MenuToggle>
        </Space>
      </StyledNavbar>
      <NavHeight></NavHeight>
      <Sidebar isOpen={isSidebarOpen} ref={sidebarRef}>
        <CloseIcon onClick={closeSidebar} />
        <SidebarContent>
          <Link to="/" onClick={closeSidebar}>
            <img src={logoicon} alt="Home Icon" />
            <span>Home</span>
          </Link>
          <Link to="/gallery" onClick={closeSidebar}>
            <img src={logoicon} alt="Gallery Icon" />
            <span>Gallery</span>
          </Link>
          <Link to="/about" onClick={closeSidebar}>
            <img src={logoicon} alt="About Icon" />
            <span>About</span>
          </Link>
          <Link to="/booking" onClick={closeSidebar}>
            <img src={logoicon} alt="Book Now Icon" />
            <span>Book Now</span>
          </Link>
          <Link to="/policies" onClick={closeSidebar}>
            <img src={logoicon} alt="Policies Icon" />
            <span>Policies</span>
          </Link>
          <Link to="/contact" onClick={closeSidebar}>
            <img src={logoicon} alt="Contact Us Icon" />
            <span>Contact Us</span>
          </Link>
        </SidebarContent>
        <ContactDetails>
          <a href="tel:678-899-9096">678-899-9096</a>
          <a href="mailto:legendarybowling@gmail.com">
            legendarybowling@gmail.com
          </a>
        </ContactDetails>
      </Sidebar>
      {isSidebarOpen && <Overlay onClick={closeSidebar} />}
    </>
  );
};

const NavHeight = styled.div`
  height: 3rem;
`;

const StyledNavbar = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: top 0.3s;
  img {
    max-width: 100%;
    height: 40px;
  }
`;

const Space = styled.div`
  align-items: center;
  display: flex;
  margin: 5px;
  justify-content: space-between;
`;

const ContactDetails = styled.div`
  margin: 10px;
  padding-top: 1rem;
  border-top: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  a {
    background-color: #eae9e9;
    padding: 10px;
    font-size: 18px;
    text-align: center !important;
    border-radius: 20px;
    color: #000;
    text-decoration: none;
    &:hover {
      /* text-decoration: underline; */
    }
  }
`;

const MenuToggle = styled.div`
  margin: 0;
  cursor: pointer;
  img {
    max-width: 100%;
    height: 40px;
  }
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? "0" : "-300px")};
  width: 300px;
  height: 100vh;
  background-color: #ffffff;
  border-radius: 0 20px 20px 0;
  border-left: 0.5px solid #313538;
  transition: right 0.5s ease-in-out;
  z-index: 1000;
  overflow-x: hidden;
`;

const SidebarContent = styled.div`
  padding: 10px;
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  list-style: none;
  a {
    text-decoration: none;
    font-size: 20px;
    color: black;
    align-items: center;
    display: flex;
    gap: 10px;
    img {
      max-width: 100%;
      height: 25px;
    }
  }
`;

const CloseIcon = styled(CloseOutlined)`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  cursor: pointer;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
`;

export default Navbar;
