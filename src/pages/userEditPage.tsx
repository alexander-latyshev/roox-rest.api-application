import React from "react";
import ValidationForm from "../components/validation/validationForm/validationForm";
import { IUser } from "../models/models";
import { useAppSelector } from "../redux/hooks";
import "./userEditPage.scss";

type Props = {};

const UserEditPage = (props: Props) => {
  const users: IUser[] = useAppSelector((state) => state.store.users);
  const locationName: string = window.location.pathname.split("/")[1];
  const currentUser: IUser = users?.find((item) => {
    return item.name.split(" ").join("") === locationName;
  });

  return (
    <section className="user-page">
      <h1>User Profile</h1> <button>Redact</button>
      <ValidationForm currentUser={currentUser} />
    </section>
  );
};

export default UserEditPage;
