import { CategoryTypes } from "../types/category";
import instance from "./instance";

export const catePost = (cate: CategoryTypes) => {
    const url = "category";
    return instance.post(url, cate)
}

export const cateList = () => {
    const url = "category";
    return instance.get(url)
}


export const cateListOne = (id: any) => {
    const url = `category/${id}`;
    return instance.get(url)
}


export const cateRemove = (id: number | string) => {
    const url = `category/${id}`;
    return instance.delete(url)
}

export const catePut = (data: CategoryTypes) => {
    const url = `category/${data._id}`;
    return instance.put(url, data)
}



