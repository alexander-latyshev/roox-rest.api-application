import React from "react";
import { useAppDispatch } from "../../redux/hooks";
import { sortUsers } from "../../redux/reducer";
import "./sortButton.scss";

type Props = {
  name: any;
};

const SortButton = (props: Props) => {
  const dispatch = useAppDispatch();
  
  return (
    <>
      <button
        className="sort-btn"
        onClick={() => dispatch(sortUsers(props.name))}
      >
        {props.name}
      </button>
    </>
  );
};

export default SortButton;
