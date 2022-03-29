import { ProductsType } from "../types/products";
import { getLocalStorage } from "../utils/localStorage";
import instance from "./instance";

const { token, user } = getLocalStorage();
export const list = () => {
    const url = "/products";
    return instance.get(url)
}

export const read = (id: any) => {
    const url = `/products/${id}`;
    return instance.get(url)
}

export const remove = (id: number) => {
    const url = `/products/${id}`;
    return instance.delete(url)
}

export const put = (products: ProductsType) => {
    const url = `/products/${products._id}`;
    return instance.put(url, products)
}

export const post = (data: ProductsType) => {
    const url = `products/${user.id}`;
    return instance.post(url, data, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
}