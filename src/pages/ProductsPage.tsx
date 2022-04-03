import React from 'react'
import ListProducts from '../components/ListProducts'
import { ProductsType } from '../types/products'

type Props = {
    products: ProductsType[]
}

const ProductsPage = (props: Props) => {
    const data = props.products;
    return (
        <ListProducts products={data} />
    )
}

export default ProductsPage