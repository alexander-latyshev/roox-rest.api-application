import classNames from "classnames";
import React from "react";
import { IValidationError } from "../../../models/models";
import "./validationInput.scss";

type Props = {
  name: string;
  placeholder: string;
  type: string;
  register: any;
  errors: IValidationError;
};

const ValidationInput = (props: Props) => {
  const errors = props.errors[props.name];
  console.log(typeof props.register);

  return (
    <>
      <p className="validation-name">{props.name}</p>
      <input
        type="text"
        name="ValidationInput"
        placeholder={props.placeholder}
        {...props.register(`${props.name}`, {
          required: `${props.name} field is require!`,
        })}
        className={classNames("", {
          "validation-input": props.type === "validation",
          "comment-input": props.type === "comment",
        })}
      />
      {errors && <div className="validation-error">{errors.message}</div>}
    </>
  );
};

export default ValidationInput;
