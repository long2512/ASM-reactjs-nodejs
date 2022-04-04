import { IUser } from "../types/auth";
import instance from "./instance";

export const registers = (user: IUser) => {
  console.log(user);

  const url = "/register";
  return instance.post(url, user);
};
export const Signin = (user: IUser) => {
  const url = "/login";
  return instance.post(url, user);
};