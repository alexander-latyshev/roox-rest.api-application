import React, { useEffect } from "react";
import Main from "./components/main/main";
import { IUser } from "./models/models";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { getUser } from "./redux/reducer";
import "./styles.scss";

type Props = {};

const App = (props: Props) => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.store);

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  return (
    <>
      <Main />
    </>
  );
};

export default App;
