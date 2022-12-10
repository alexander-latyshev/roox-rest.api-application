import React from "react";
import { Link } from "react-router-dom";
import "./userItem.scss";

type Props = {
  name: string;
  city: string;
  company: string;
  id: string;
};

const UserItem = (props: Props) => {
  return (
    <div className="user-item">
      <p>
        name: <span>{props.name}</span>
      </p>

      <p>
        city: <span>{props.city}</span>
      </p>

      <p className="user-item__block">
        company: <span>{props.company}</span>
        <Link className="user-item__link" to={props.id}>
          Подробнее
        </Link>
      </p>
    </div>
  );
};

export default UserItem;
