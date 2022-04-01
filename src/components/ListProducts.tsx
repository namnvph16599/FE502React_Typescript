import React from 'react'
import { Link } from 'react-router-dom';
import { ProductsType } from '../types/products';

type Props = {
    products: ProductsType[]
}

const ListProducts = (props: Props) => {
    const data = props.products;
    return (
        <div>
            <div className="2xl:container 2xl:mx-auto">
                <div className="bg-gray-50 dark:bg-gray-900 text-center lg:py-10 md:py-8 py-6">
                    <p className="w-10/12 mx-auto md:w-full font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 dark:text-white leading-9 text-center text-gray-800">Products</p>
                </div>
                <div className="py-6 lg:px-20 md:px-6 px-4">
                </div>
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {
                            data.map(val => {
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
                            })
                        }
                    </div>
                    <div className="flex justify-center items-center">
                        <button className="hover:bg-gray-700 dark:text-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 py-5 md:px-16 md:w-auto w-full lg:mt-28 md:mt-12 mt-10 text-white font-medium text-base leading-4">Load More</button>
                    </div>
                </div>

            </div>


            {/* <div  className="focus:outline-none">
            <div className="mx-auto container py-8">
                <div className="flex flex-wrap items-center lg:justify-between justify-center">
                    <div  className="focus:outline-none mx-2 w-72 xl:mb-0 mb-8">
                        <div>
                            <img alt="person capturing an image" src="https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png"  className="focus:outline-none w-full h-44" />
                        </div>
                        <div className="bg-white dark:bg-gray-800">
                            <div className="flex items-center justify-between px-4 pt-4">
                                <div>
                                    <img className="dark:bg-white focus:outline-none" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-2-col-grid-svg1.svg" alt="bookmark" />
                                </div>
                                <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                                    <p  className="focus:outline-none text-xs text-yellow-700">Featured</p>
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="flex items-center">
                                    <h2  className="focus:outline-none text-lg dark:text-white font-semibold">iphone XS</h2>
                                    <p  className="focus:outline-none text-xs text-gray-600 dark:text-gray-200 pl-5">4 days ago</p>
                                </div>
                                <p  className="focus:outline-none text-xs text-gray-600 dark:text-gray-200 mt-2">The Apple iPhone XS is available in 3 colors with 64GB memory. Shoot amazing videos</p>
                                <div className="flex mt-4">
                                    <div>
                                        <p  className="focus:outline-none text-xs text-gray-600 dark:text-gray-200 px-2 bg-gray-200 dark:bg-gray-700 py-1">12 months warranty</p>
                                    </div>
                                    <div className="pl-2">
                                        <p  className="focus:outline-none text-xs text-gray-600 dark:text-gray-200 px-2 bg-gray-200 dark:bg-gray-700 py-1">Complete box</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between py-4">
                                    <h2  className="focus:outline-none text-indigo-700 text-xs font-semibold">Bay Area, San Francisco</h2>
                                    <h3  className="focus:outline-none text-indigo-700 text-xl font-semibold">$350</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  className="focus:outline-none mx-2 w-72 xl:mb-0 mb-8">
                        <div>
                            <img alt="person capturing an image" src="https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png"  className="focus:outline-none w-full h-44" />
                        </div>
                        <div className="bg-white dark:bg-gray-800">
                            <div className="flex items-center justify-between px-4 pt-4">
                                <div>
                                    <img className="dark:bg-white focus:outline-none" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-2-col-grid-svg1.svg" alt="bookmark" />
                                </div>
                                <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                                    <p  className="focus:outline-none text-xs text-yellow-700">Featured</p>
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="flex items-center">
                                    <h2  className="focus:outline-none text-lg dark:text-white font-semibold">iphone XS</h2>
                                    <p  className="focus:outline-none text-xs text-gray-600 dark:text-gray-200 pl-5">4 days ago</p>
                                </div>
                                <p  className="focus:outline-none text-xs text-gray-600 dark:text-gray-200 mt-2">The Apple iPhone XS is available in 3 colors with 64GB memory. Shoot amazing videos</p>
                                <div className="flex mt-4">
                                    <div>
                                        <p  className="focus:outline-none text-xs text-gray-600 dark:text-gray-200 px-2 bg-gray-200 dark:bg-gray-700 py-1">12 months warranty</p>
                                    </div>
                                    <div className="pl-2">
                                        <p  className="focus:outline-none text-xs text-gray-600 dark:text-gray-200 px-2 bg-gray-200 dark:bg-gray-700 py-1">Complete box</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between py-4">
                                    <h2  className="focus:outline-none text-indigo-700 text-xs font-semibold">Bay Area, San Francisco</h2>
                                    <h3  className="focus:outline-none text-indigo-700 text-xl font-semibold">$350</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  className="focus:outline-none mx-2 w-72 xl:mb-0 mb-8">
                        <div>
                            <img alt="person capturing an image" src="https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png"  className="focus:outline-none w-full h-44" />
                        </div>
                        <div className="bg-white dark:bg-gray-800">
                            <div className="flex items-center justify-between px-4 pt-4">
                                <div>
                                    <img className="dark:bg-white focus:outline-none" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-2-col-grid-svg1.svg" alt="bookmark" />
                                </div>
                                <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                                    <p  className="focus:outline-none text-xs text-yellow-700">Featured</p>
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="flex items-center">
                                    <h2  className="focus:outline-none text-lg dark:text-white font-semibold">iphone XS</h2>
                                    <p  className="focus:outline-none text-xs text-gray-600 dark:text-gray-200 pl-5">4 days ago</p>
                                </div>
                                <p  className="focus:outline-none text-xs text-gray-600 dark:text-gray-200 mt-2">The Apple iPhone XS is available in 3 colors with 64GB memory. Shoot amazing videos</p>
                                <div className="flex mt-4">
                                    <div>
                                        <p  className="focus:outline-none text-xs text-gray-600 dark:text-gray-200 px-2 bg-gray-200 dark:bg-gray-700 py-1">12 months warranty</p>
                                    </div>
                                    <div className="pl-2">
                                        <p  className="focus:outline-none text-xs text-gray-600 dark:text-gray-200 px-2 bg-gray-200 dark:bg-gray-700 py-1">Complete box</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between py-4">
                                    <h2  className="focus:outline-none text-indigo-700 text-xs font-semibold">Bay Area, San Francisco</h2>
                                    <h3  className="focus:outline-none text-indigo-700 text-xl font-semibold">$350</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  className="focus:outline-none mx-2 w-72 xl:mb-0 mb-8">
                        <div>
                            <img alt="person capturing an image" src="https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png"  className="focus:outline-none w-full h-44" />
                        </div>
                        <div className="bg-white dark:bg-gray-800">
                            <div className="flex items-center justify-between px-4 pt-4">
                                <div>
                                    <img className="dark:bg-white focus:outline-none" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-2-col-grid-svg1.svg" alt="bookmark" />
                                </div>
                                <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                                    <p  className="focus:outline-none text-xs text-yellow-700">Featured</p>
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="flex items-center">
                                    <h2  className="focus:outline-none text-lg dark:text-white font-semibold">iphone XS</h2>
                                    <p  className="focus:outline-none text-xs text-gray-600 dark:text-gray-200 pl-5">4 days ago</p>
                                </div>
                                <p  className="focus:outline-none text-xs text-gray-600 dark:text-gray-200 mt-2">The Apple iPhone XS is available in 3 colors with 64GB memory. Shoot amazing videos</p>
                                <div className="flex mt-4">
                                    <div>
                                        <p  className="focus:outline-none text-xs text-gray-600 dark:text-gray-200 px-2 bg-gray-200 dark:bg-gray-700 py-1">12 months warranty</p>
                                    </div>
                                    <div className="pl-2">
                                        <p  className="focus:outline-none text-xs text-gray-600 dark:text-gray-200 px-2 bg-gray-200 dark:bg-gray-700 py-1">Complete box</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between py-4">
                                    <h2  className="focus:outline-none text-indigo-700 text-xs font-semibold">Bay Area, San Francisco</h2>
                                    <h3  className="focus:outline-none text-indigo-700 text-xl font-semibold">$350</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        </div>
    )
}

export default ListProducts