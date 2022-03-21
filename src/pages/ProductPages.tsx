import React from 'react'
type Props = {
}
type Products = {
  name: String,
  price: Number,
  image: String,
  description: String
}
const ProductPages = (props: Props) => {
  const array = props.products;
  console.log(array);

  return (
    <div>
      <ul>
        {array.map((item) => <li>{item.name}</li>)}
      </ul>
    </div>
  )
}

export default ProductPages