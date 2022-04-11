import { TCate } from "../types/cate";
import instance from "./instance";

export const listCate = () =>{
    const url = '/categories';
    return instance.get(url);
}
export const remove = (id: number) => {
    const url = `/categories/${id}`;
    return instance.delete(url);
}
export const read = (id: string | undefined) => {
    const url = `/categories/${id}`;
    return instance.get(url);
}

export const add = (product:TCate) => {
    const url = "/categories";
    return instance.post(url,product,);
}

export const update = (product:TCate) => {
    const url = `/categories/${product._id}`;
    return instance.put(url,product);
}