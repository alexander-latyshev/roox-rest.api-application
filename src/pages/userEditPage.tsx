import React, { useEffect } from "react";
import ValidationForm from "../components/validation/validationForm/validationForm";
import { IUser } from "../models/models";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getUser } from "../redux/reducer";
import "./userEditPage.scss";

const UserEditPage = () => {
  const dispatch = useAppDispatch();
  const users: IUser[] = useAppSelector((state) => state.store.users);
  const locationName: string = window.location.pathname.split("/")[1];
  const currentUser: any = users?.find((u: { name: any }) => {
    return u.name.split(" ").join("") === locationName;
  });

  useEffect(() => {
    dispatch(getUser(currentUser));
    // localStorage.setItem("user", JSON.stringify(currentUser));
  }, []);

  return (
    <section className="user-page">
      <h1>User Profile</h1> <button>Redact</button>
      <ValidationForm currentUser={currentUser} />
    </section>
  );
};

export default UserEditPage;
