import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

import Navbar from "./components/Navbar";
import Home from "./components/Pages/Home";
import Policies from "./components/Pages/Policies";
import Gallery from "./components/Pages/Gallery";
import Booking from "./components/Pages/Booking";
import Contact from "./components/Pages/Contact";
import About from "./components/Pages/About";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "Hind", sans-serif;
  }
`;

const router = createBrowserRouter([
  {
    path: "/",
    // element: <Navbar />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "gallery", element: <Gallery /> },
      { path: "policies", element: <Policies /> },
      { path: "booking", element: <Booking /> },
    ],
  },
]);

const App = () => {
  return (
    <>
      <GlobalStyle />

      <RouterProvider router={router} />
    </>
  );
};

export default App;
