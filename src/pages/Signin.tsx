import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { signin } from "../api/auth";

type SigninProps = {
  onSign: (user: TypeFormSign) => void;
};
export type TypeFormSign = {
  name: string;
  email: string;
  password: number;
};
const Signin = (props: SigninProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TypeFormSign>();
  const navigate = useNavigate();
  const onSign: SubmitHandler<TypeFormSign> = (data) => {
    signin(data);
    navigate("/signin");
  };
  return (
    <div className="">

      <h1 className="font-serif text-7xl text-center pt-20">Singin</h1>
      <form
        style={{
          width: "500px",
          margin: "auto",
        }}
        onSubmit={handleSubmit(onSign)}
      >
        <div className="mb-3 mt-[50px]">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            {...register("email")}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            {...register("password")}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary px-5 py-3 bg-[#b97c5e] hover:bg-[#b96c4e] border-0"
        >
          SIGNIN
        </button>
      </form>
    </div>
  );
};
export default Signin;