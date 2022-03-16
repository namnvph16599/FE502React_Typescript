import React from 'react'
import { useParams } from 'react-router-dom'
type Props = {}

const ProductDetails = (props: Props) => {
    const { id } = useParams();
    console.log(id);
    return (
        <div>ProductDetails</div>
    )
}

export default ProductDetails