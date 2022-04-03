import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { cateListById } from '../api/category';
import { read } from '../api/products';
import { ProductsType } from '../types/products';

type Props = {}

const ProductDetail = (props: Props) => {
    const [product, setProduct] = useState<ProductsType>();
    const [productByCate, setproductByCate] = useState<ProductsType[]>();

    const { id } = useParams();
    useEffect(() => {
        const getProduct = async () => {
            const { data } = await read(id);
            const categoryId = data.category;
            const { data: { products } } = await cateListById(categoryId);
            setProduct(data)
            setproductByCate(products);
        }
        getProduct();
    }, [])
    return (
        <div>
            <div className="bg-white">
                <div className="pt-6">
                    <nav aria-label="Breadcrumb">
                        <ol role="list" className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
                            <li>
                                <div className="flex items-center">
                                    <a href="/products" className="mr-2 text-sm font-medium text-gray-900"> Products </a>
                                    <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-4 h-5 text-gray-300">
                                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                    </svg>
                                </div>
                            </li>

                            <li>
                                <div className="flex items-center">
                                    <p className="mr-2 text-sm font-medium text-gray-900"> Details </p>
                                    <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-4 h-5 text-gray-300">
                                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                    </svg>
                                </div>
                            </li>

                            <li className="text-sm">
                                <p aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">{product?.name}</p>
                            </li>
                        </ol>
                    </nav>

                    <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-4 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">

                        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{product?.name}</h1>
                        </div>

                        {/* <div className="mt-4 lg:mt-0 lg:row-span-3"> */}
                        <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">

                            {/* <h1 className="text-2xl font-extrabold tracking-tight text-gray-800 sm:text-3xl mt-14 mb-8">Product information</h1> */}
                            <h2 className="text-sm font-medium text-gray-900 mb-2">Price</h2>
                            <p className="text-3xl text-gray-900">{product?.price} $</p>

                            <div className="mt-6">
                                <h3 className="sr-only">Reviews</h3>
                                <div className="flex items-center">
                                    <div className="flex items-center">

                                        <svg className="text-gray-900 h-5 w-5 flex-shrink-0 text-[#ffce3d]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>

                                        <svg className="text-gray-900 h-5 w-5 flex-shrink-0 text-[#ffce3d]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>

                                        <svg className="text-gray-900 h-5 w-5 flex-shrink-0 text-[#ffce3d]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>

                                        <svg className="text-gray-900 h-5 w-5 flex-shrink-0 text-[#ffce3d]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>

                                        <svg className="text-gray-200 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    </div>
                                    <p className="sr-only">4 out of 5 stars</p>
                                    <a className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">117 reviews</a>
                                </div>
                                <div className="mt-10">
                                    <h2 className="text-sm font-medium text-gray-900">Quantity</h2>
                                    <div className="mt-4 space-y-6">
                                        <input value="1" type="number" className="border-solid border border-gray-800 text-center" id="inputValQuantity" />
                                    </div>
                                </div>
                                <div className="mt-10">
                                    <h2 className="text-sm font-medium text-gray-900">Decription</h2>
                                    <div className="mt-4 space-y-6">
                                        <p className="text-sm text-gray-600">{product?.description}</p>
                                    </div>
                                </div>
                            </div>
                            <button id="addToCart" className="mt-10 w-full  border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-[#fcaf47] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 bg-[#fcaf17]">Add to cart</button>
                        </div>
                        <div className="mt-4 lg:mt-0 lg:col-span-2">
                            {/* <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8"> */}
                            <div>
                                <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
                                    <img src={
                                        product?.image
                                    } alt="Model wearing plain white basic tee." className="w-full h-full object-center object-cover" />
                                </div>
                            </div>



                        </div>
                    </div>
                    <div className="2xl:container 2xl:mx-auto">
                        <div className="bg-gray-50 dark:bg-[#fcaf17] text-center lg:py-10 md:py-8 py-6">
                            <p className="w-10/12 mx-auto md:w-full font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 dark:text-white leading-9 text-center text-gray-800">Maybe you will like !!!</p>
                        </div>
                        <div className="py-6 lg:px-20 md:px-6 px-4">
                        </div>
                        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                                {
                                    productByCate?.map((val, index) => {
                                        if (index <= 4 && val._id != product?._id) {
                                            return (
                                                <Link to={`/products/${val._id}`} key={val._id} >
                                                    <div >
                                                        <a href="" className="group">
                                                            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                                                <img src={val.image} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="w-full h-full object-center object-cover group-hover:opacity-75" />
                                                            </div>
                                                            <h3 className="mt-4 text-sm text-gray-700">{val.name}</h3>
                                                            <p className="mt-1 text-lg font-medium text-gray-900">{val.price} $</p>
                                                        </a>
                                                    </div>
                                                </Link>
                                            )
                                        }
                                    })
                                }
                            </div>
                            <div className="flex justify-center items-center">
                                <button className="hover:bg-[#fcaf47]  dark:text-white-300 focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-[#fcaf17]    py-5 md:px-16 md:w-auto w-full lg:mt-28 md:mt-12 mt-10 text-white font-medium text-base leading-4">Load More</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail