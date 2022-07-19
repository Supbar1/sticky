import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import NewLogin from "./components/Login";
import Comments from "./components/Comments";
import Profiles from "./components/Profiles";
import Main from "./components/Main";
import { NavBar } from "./components/navbar";
const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route path="/login" element={<NewLogin />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
