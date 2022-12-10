import React from "react";

import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/homePage";
import UserEditPage from "../../pages/userEditPage";

import "./main.scss";

type Props = {};

const Main = (props: Props) => {
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
