import { Ipost } from "../types/post";
import instance from "./instance";



export const list = () => {
    const url = "/posts";
    return instance.get(url);
}
export const remove = (id: number) => {
    const url = `/posts/${id}`;
    return instance.delete(url);
}
export const read = (id: string | undefined) => {
    const url = `/posts/${id}`;
    return instance.get(url);
}

export const add = (product:Ipost) => {
    const url = "/posts";
    return instance.post(url,product,);
}

export const update = (product:Ipost) => {
    const url = `/posts/${product._id}`;
    return instance.put(url,product);
}