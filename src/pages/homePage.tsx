import React from "react";
import { useEffect } from "react";
import SortButton from "../components/sortButton/sortButton";
import UserItem from "../components/userItem/userItem";
import { IUser } from "../models/models";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getUsersList } from "../redux/reducer";
import "../styles.scss";
import "./homePage.scss";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const users: IUser[] | null = useAppSelector((state) => state.store.users);

  useEffect(() => {
    dispatch(getUsersList());
  }, []);

  return (
    <>
      <aside className="user-sort">
        <h3>Sort</h3>
        <SortButton name="city" />
        <SortButton name="company" />
      </aside>

      <section className="user-list">
        <h1>Users List</h1>
        {users?.map((user) => {
          return (
            <UserItem
              key={user.id}
              name={user.name}
              city={user.address.city}
              company={user.company.name}
              id={user.name.split(" ").join("")}
            />
          );
        })}
      </section>
    </>
  );
};

export default HomePage;
