import { IUser } from "../types/auth";
import instance from "./instance";

export const registers = (user: IUser) => {
  console.log(user);

  const url = "/signup";
  return instance.post(url, user);
};
export const signin = (user: IUser) => {
  const url = "/signin";
  return instance.post(url, user);
};