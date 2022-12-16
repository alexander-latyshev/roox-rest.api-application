import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { IUser, IValidationFields } from "../../../models/models";
import { useAppSelector } from "../../../redux/hooks";
import ValidationInput from "../validationInput/validationInput";
import "./validationForm.scss";

const ValidationForm = () => {
  const currentUser: IUser = useAppSelector((state) => state.store.currentUser);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IValidationFields>();

  const onSubmit: SubmitHandler<IValidationFields> = (data) => {
    console.log(`Your name ${data.name}`);
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
            />
            <ValidationInput
              name={"username"}
              placeholder={currentUser.username}
              type={"validation"}
              register={register}
              errors={errors}
            />
            <ValidationInput
              name={"email"}
              placeholder={currentUser.email}
              type={"validation"}
              register={register}
              errors={errors}
            />
            <ValidationInput
              name={"street"}
              placeholder={currentUser.address.street}
              type={"validation"}
              register={register}
              errors={errors}
            />
            <ValidationInput
              name={"city"}
              placeholder={currentUser.address.city}
              type={"validation"}
              register={register}
              errors={errors}
            />
            <ValidationInput
              name={"zipcode"}
              placeholder={currentUser.address.zipcode}
              type={"validation"}
              register={register}
              errors={errors}
            />
            <ValidationInput
              name={"phone"}
              placeholder={currentUser.phone}
              type={"validation"}
              register={register}
              errors={errors}
            />
            <ValidationInput
              name={"website"}
              placeholder={currentUser.website}
              type={"validation"}
              register={register}
              errors={errors}
            />
          </div>
        ) : null}

        <button className="user-info__send-btn">Send</button>
      </form>
    </>
  );
};

export default ValidationForm;
