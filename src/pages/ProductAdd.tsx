import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { useNavigate } from "react-router-dom";
type TypeProductsAdd = {
    name: String,
    price: Number,
    image: String,
    description: String,
} //kieeru du lieu cua tung input

type Props = {
    onAddProduct: (products: TypeProductsAdd) => void //khai báo ra hàm để truyền lên app
}
const ProductAdd = (props: Props) => {
    //khai báo các components sử dụng từ hook useForm
    //register : lấy dữ liệu từ input
    //handleSubmit : validate input trước khi nhảy vào hàm onSubmit
    const { register, handleSubmit, formState: { errors } } = useForm<TypeProductsAdd>();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<TypeProductsAdd> = (dataForm: any) => {
        // console.log(dataForm);

        props.onAddProduct(dataForm) //truyền ngược lên app để call thêm api
        navigate('/products')
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Form add products</h1>
                <input {...register('name')} type="text" placeholder="Name" /><br />
                <input {...register('price')} type="number" placeholder="price" /><br />
                <input {...register('image')} type="text" placeholder="image" /><br />
                <input {...register('description')} type="text" placeholder="description" /><br />
                <button>add</button>
            </form>
        </div>
    )
}

export default ProductAdd