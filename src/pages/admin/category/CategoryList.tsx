import React from 'react'
import { Link } from 'react-router-dom'
import { CategoryTypes } from '../../../types/category'

type Props = {
  category: CategoryTypes[],
  handlerRemoveCategory: (id: number) => void
}

const CategoryList = (props: Props) => {
  const { category } = props;
  // console.log(category);
  return (
    <div>
      <div>
        <div className="sm:flex items-center justify-between">
          <p className="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal 
            text-gray-800">Category List</p>
        </div>
        <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="focus:outline-none h-16 w-full text-sm leading-none text-gray-800">
                <th className="font-normal text-left pl-4">ID</th>
                <th className="font-normal text-left pl-12">Name</th>
              </tr>
            </thead>
            <tbody className="w-full">
              {category?.map((val: any, index: number) => (
                <tr key={val._id} className="focus:outline-none h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                  <td className="pl-5">
                    <p className="font-medium">{index + 1}</p>
                  </td>
                  <td className="pl-5">
                    <p className="font-medium">{val.name}</p>
                  </td>
                  <td>
                    <Link to={`${val._id}/edit`}><a className="font-medium text-base text-green-500 hover:text-indigo-900">Edit</a></Link>
                  </td>
                  <td>
                    <button className="font-medium text-base btn btn-remove text-red-500 hover:text-indigo-900" onClick={() => { props.handlerRemoveCategory(val._id) }}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div ></div>
    </div>
  )
}

export default CategoryList