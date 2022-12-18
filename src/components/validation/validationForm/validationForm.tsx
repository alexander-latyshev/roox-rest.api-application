import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { IUser, IValidationFields } from "../../../models/models";
import { useAppSelector } from "../../../redux/hooks";
import ValidationInput from "../validationInput/validationInput";
import { isEmpty } from "lodash";
import "./validationForm.scss";

type Props = {
  isReadonly: boolean;
};

const ValidationForm = (props: Props) => {
  const currentUser: IUser = useAppSelector((state) => state.store.currentUser);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IValidationFields>();

  const onSubmit: SubmitHandler<IValidationFields> = (data) => {
    if (props.isReadonly && isEmpty(errors)) {
      console.log("Redacted user:", data);
    }
  };
  return (
    <>
      <form className="user-info" onSubmit={handleSubmit(onSubmit)}>
        {currentUser ? (
          <div className="user-form">
            <ValidationInput
              name={"name"}
              placeholder={currentUser.name}
              type={"validation"}
              register={register}
              errors={errors}
              isReadonly={props.isReadonly}
            />
            <ValidationInput
              name={"username"}
              placeholder={currentUser.username}
              type={"validation"}
              register={register}
              errors={errors}
              isReadonly={props.isReadonly}
            />
            <ValidationInput
              name={"email"}
              placeholder={currentUser.email}
              type={"validation"}
              register={register}
              errors={errors}
              isReadonly={props.isReadonly}
            />
            <ValidationInput
              name={"street"}
              placeholder={currentUser.address.street}
              type={"validation"}
              register={register}
              errors={errors}
              isReadonly={props.isReadonly}
            />
            <ValidationInput
              name={"city"}
              placeholder={currentUser.address.city}
              type={"validation"}
              register={register}
              errors={errors}
              isReadonly={props.isReadonly}
            />
            <ValidationInput
              name={"zipcode"}
              placeholder={currentUser.address.zipcode}
              type={"validation"}
              register={register}
              errors={errors}
              isReadonly={props.isReadonly}
            />
            <ValidationInput
              name={"phone"}
              placeholder={currentUser.phone}
              type={"validation"}
              register={register}
              errors={errors}
              isReadonly={props.isReadonly}
            />
            <ValidationInput
              name={"website"}
              placeholder={currentUser.website}
              type={"validation"}
              register={register}
              errors={errors}
              isReadonly={props.isReadonly}
            />
          </div>
        ) : null}

        <button
          className={
            props.isReadonly
              ? "user-info__send-btn"
              : "user-info__send-btn_disabled"
          }
        >
          Send
        </button>
      </form>
    </>
  );
};

export default ValidationForm;
