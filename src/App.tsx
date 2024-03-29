import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/navigation/navbar/NotFound";
import Forum from "./components/forum/Forum";
import Products from "./components/products/Products";
import Main from "./components/main/Main";
import Navbar from "./components/navigation/navbar/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/login/Login";
import ShoppingCartProvider from "./components/products/ShopContext";
import Footer from "./components/navigation/footer/Footer";
import ScrollToTop from "./services/ScrollToTop";
import styled from "styled-components";
import Center from "./common/Center";

const AppContainer = styled(Center)`
  font-family: var(--ff-body);
`;

const App = () => (
  <React.Fragment>
    <ShoppingCartProvider>
      <ToastContainer />
      <Navbar />
      <ScrollToTop />
      <AppContainer>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppContainer>
      <Footer />
    </ShoppingCartProvider>
  </React.Fragment>
);

export default App;
