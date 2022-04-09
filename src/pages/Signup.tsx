import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { registers } from "../api/auth";

type SigninProps = {
  name: string;
  onSign: (user: TypeFormSign) => void;
};
type TypeFormSign = {
  name: string;
  email: string;
  password: number;
};
const Signup = (props: SigninProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TypeFormSign>();
  const navigate = useNavigate();
  const onSign: SubmitHandler<TypeFormSign> = (data) => {
    registers(data);
    navigate("/login");
  };
  return (
    <div className="">
      <h1 className="font-serif text-7xl text-center pt-20">Signup</h1>
      <form
        style={{
          width: "500px",
          margin: "auto",
        }}
        onSubmit={handleSubmit(onSign)}
      >
        <div className="mb-3 mt-[50px]">
          
          <input
            type="text"
            className="border-2 p-2 w-[500px] border-gray-500"
            placeholder="Name"
            id="exampleInputEmail1"
            {...register("name")}
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="border-2 p-2 w-[500px] border-gray-500"
            placeholder="Email"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            {...register("email")}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="border-2 p-2 w-[500px] border-gray-500"
            placeholder="Password"
            id="exampleInputPassword1"
            {...register("password")}
          />
        </div>
        
        <button
          type="submit"
          className="btn btn-primary px-5 py-3 bg-[#b97c5e] hover:bg-[#b96c4e] border-0 text-white w-[500px]"
        >
          SIGNUP
        </button>
      </form>
    </div>
  );
};
export default Signup;