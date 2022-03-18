import instance from './instance';

export const listProducts = () => {
    const url = `/products`;
    return instance.get(url)
}
export const addProduct = (product: any) => {
    const url = `/product`;
    return instance.post(url, product);
}