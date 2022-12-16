import classNames from "classnames";
import React from "react";
import { IValidationError } from "../../../models/models";
import "./validationInput.scss";

type Props = {
  name: any;
  placeholder: any;
  type: any;
  register: any;
  errors: IValidationError;
};

const ValidationInput = (props: any) => {
  const errors = props.errors[props.name];

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
