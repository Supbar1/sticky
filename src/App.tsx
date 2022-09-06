import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import NotFound from "./components/NotFound";
// import Login from "./components/login/Login";
import Community from "./components/community/Community";
import Products from "./components/Products";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import "./style.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./login/Login";

const Scroll = styled.div`
  height: 100vh;
  overflow-y: auto;
  position: relative;

  &::-webkit-scrollbar {
    width: 0.5em;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 100vw;
    width: 15px;
    height: 15px;
    background: var(--clr-accent-300);
  }
`;

const App = () => {
  return (
    <React.Fragment>
      <ToastContainer />
      <Scroll>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/community" element={<Community />} />
          <Route path="/products" element={<Products />} />
          <Route path="/" element={<Main />} />
          <Route path="*" element={<NotFound />} />
         
        </Routes>
      </Scroll>
    </React.Fragment>
  );
};

export default App;
