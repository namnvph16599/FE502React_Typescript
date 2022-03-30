import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { cateListById } from '../api/category';
import { ProductsType } from "../types/products"

type Props = {}

const CategoryDetails = (props: Props) => {
  const [productsByCate, setProductsByCate] = useState([]);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    const getCategory = async () => {
      const { data: { products } } = await cateListById(id);
      // console.log(products);
      setProductsByCate(products)
    }
    getCategory()
  }, [id])
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
              productsByCate?.map((val: any) => {
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

      </div></div>
  )
}

export default CategoryDetails