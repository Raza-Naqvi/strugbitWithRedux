import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Home";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact component={Home} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
