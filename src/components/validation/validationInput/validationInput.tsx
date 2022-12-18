import classNames from "classnames";
import React, { useState } from "react";
import { IValidationError } from "../../../models/models";
import "./validationInput.scss";

type Props = {
  name: string;
  placeholder: string;
  type: string;
  register: any;
  errors: IValidationError;
  isReadonly: boolean;
};

const ValidationInput = (props: Props) => {
  const errors = props.errors[props.name];
  const [inputValue, setInputValue] = useState("");

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
        onChange={(e) => setInputValue(e.target.value)}
        readOnly={props.isReadonly}
        value={inputValue}
      />
      {errors && <div className="validation-error">{errors.message}</div>}
    </>
  );
};

export default ValidationInput;
