import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import NotFound from "./components/navigation/navbar/NotFound";
import Community from "./components/community/Community";
import Products from "./components/products/Products";
import Main from "./components/main/Main";
import Navbar from "./components/navigation/navbar/Navbar";
import "./style.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/login/Login";
import ShoppingCartProvider from "./components/products/ShopContext";
import Footer from "./components/navigation/footer/Footer";

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
      <ShoppingCartProvider>
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
          <Footer />
        </Scroll>
      </ShoppingCartProvider>
    </React.Fragment>
  );
};

export default App;
