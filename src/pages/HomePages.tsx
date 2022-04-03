import React from 'react'
import Banner from '../components/Banner'
import ListProducts from '../components/ListProducts'
import { ProductsType } from '../types/products'

type Props = {
  products: ProductsType[]
}

const HomePage = (props: Props) => {
  const data = props.products;
  return (
    <div>
      <Banner />
      <ListProducts products={data} />
    </div>
  )
}

export default HomePage