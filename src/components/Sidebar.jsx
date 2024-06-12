import React, { useState } from "react";
import { Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavButton = styled(Button)`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
`;

const Sidebar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <NavButton type="primary" icon={<MenuOutlined />} onClick={showDrawer} />
      <Drawer
        title="Navigation"
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        <Link to="/" onClick={onClose}>
          Home
        </Link>
        <br />
        <Link to="/gallery" onClick={onClose}>
          Gallery
        </Link>
        <br />
        <Link to="/about" onClick={onClose}>
          About
        </Link>
        <br />
        <Link to="/booking" onClick={onClose}>
          Book Now
        </Link>
        <br />
        <Link to="/policies" onClick={onClose}>
          Policies
        </Link>
        <br />
        <Link to="/contact" onClick={onClose}>
          Contact Us
        </Link>
      </Drawer>
    </>
  );
};

export default Sidebar;
