import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { IUser, IValidationFields } from "../../../models/models";
import ValidationInput from "../validationInput/validationInput";
import "./validationForm.scss";

type Props = {
  currentUser: IUser;
};

const ValidationForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IValidationFields>();

  const onSubmit: SubmitHandler<IValidationFields> = (data) => {
    console.log(`Your name ${data.name}`);
  };
  console.log(errors);

  // console.log(errors? JSON.stringify(errors): null);

  return (
    <>
      <form className="user-info" onSubmit={handleSubmit(onSubmit)}>
        <div className="user-form">
          <ValidationInput
            name={"name"}
            placeholder={props.currentUser.name}
            type={"validation"}
            register={register}
            errors={errors}
          />
          <ValidationInput
            name={"username"}
            placeholder={props.currentUser.username}
            type={"validation"}
            register={register}
            errors={errors}
          />
          <ValidationInput
            name={"email"}
            placeholder={props.currentUser.email}
            type={"validation"}
            register={register}
            errors={errors}
          />
          <ValidationInput
            name={"street"}
            placeholder={props.currentUser.address.street}
            type={"validation"}
            register={register}
            errors={errors}
          />
          <ValidationInput
            name={"city"}
            placeholder={props.currentUser.address.city}
            type={"validation"}
            register={register}
            errors={errors}
          />
          <ValidationInput
            name={"zipcode"}
            placeholder={props.currentUser.address.zipcode}
            type={"validation"}
            register={register}
            errors={errors}
          />
          <ValidationInput
            name={"phone"}
            placeholder={props.currentUser.phone}
            type={"validation"}
            register={register}
            errors={errors}
          />
          <ValidationInput
            name={"website"}
            placeholder={props.currentUser.website}
            type={"validation"}
            register={register}
            errors={errors}
          />
        </div>

        <button className="user-info__send-btn">Send</button>
      </form>
    </>
  );
};

export default ValidationForm;
