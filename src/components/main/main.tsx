import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/homePage";
import UserEditPage from "../../pages/userEditPage";

import "./main.scss";

const Main = () => {
  return (
    <main className="main">
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<UserEditPage />} path="/:userProfile" />
      </Routes>
    </main>
  );
};

export default Main;
