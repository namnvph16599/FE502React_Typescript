import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom';
import { CategoryTypes } from '../../../types/category';

type Props = {
  handlePushDataCate : (data : CategoryTypes) => void
}

const CategoryAdd = (props: Props) => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<CategoryTypes>();
  const onSubmit: SubmitHandler<CategoryTypes> = (data) => {
    props.handlePushDataCate(data)
    navigate("/admin/category")
  }
  return (
    <div>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="sm:flex items-center justify-between">
          <p className="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal 
            text-gray-800">Category Add</p>
          <a href="/admin/products" className="sm:ml-3">
            <Link to="/admin/category">
              <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                List
              </button>
            </Link>
          </a>
        </div>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="mt-5 md:mt-0 md:col-span-3">
            <form action="" id="form-add-product" onSubmit={handleSubmit(onSubmit)}>
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div className="col-span-3">
                    <label className="block text-sm font-medium text-gray-700">
                    Category name
                    </label>
                    <div className="mt-1">
                      <input type="text"  {...register('name')} name="name" id="name" className="p-4 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-base border border-gray-300 rounded-md" placeholder="" />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    ADD
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200"></div>
        </div>
      </div>

      {/* <form action="" onSubmit={handleSubmit(onSubmit)}>
    <input type="text" {...register('name')} placeholder="Name..." />
    <input type="text" {...register('price')} placeholder="Price..." />
    <input type="text"  {...register('image')} value="https://lh3.googleusercontent.com/7avhNjMbCLaicKPSVBOrD5XishG4-A05NGFZDRN3GZA1s6VJ2Fffa9RP1LCuARL9GuC6X2qewu2zFyFtgUIIguYo2doqujpfo-rghFdx-16nFh30tx7-GDAEjWnzMDZlffFmITcJrj3w9O7QUwK2ilR6075-CRVMc_CatFTn-MaD_VYRkx621obSxuee8KbRRBtHjiso70j67_t3X6cZEMi7sFSnz-a-CkCgRobtVQ6amxA5uWKffdWogU6wLWHD4aaNfg84j3jyd1yYFBaO5oWapJD-tfEP0jnFVTfmGQBwiI0oJV49pXUYKibpAbPg4WkllhgswfR-wCLARj4iwprZuZoiaxTEOr3_srpS_ue2j9bLfr5XpJeExzMJDu-PCQ573_Vry4WYDiEF5lkKoofPEoGmfffJHT_mKWq6e90Va8oI4ri8cCvetroGZN0CzZBqqMr2NGIamoX8fATNtpJMN7rPmycT424jz_56VgZZjll0lS62NcmyQ5J7FyoB3vKImihO51XSL9KFsjRdSxdYkqLCDOzCe2EopjCvNksRD5gcASof3E3ZwqfvU9wM7kI1JT00hFDiZuuS0ESzhsfFVHTP0Cptt65YSoxjjbXSE5tRnv2U5bXqFGCtV5gAhacDBHr8qUdrlH_pkk4JRIeTVJHFWE5lFSsi_VZ8ofKv6No3TewAQKuOzAuTK6y1STJdJFeRw_eooz1Wu7h7PF_C2OYIgab_R1lURrYBXmYXXPxlJL0O0POvy-d9V8Lz-ZmFXfnnw7QoKToDaD1dFvMdGDt-WJ8ngcR21GtqngpNDsNbr3H8Wwc6JMYpzowb3Q0m1Mk=w678-h903-no?authuser=0" placeholder="Name..." />
    <button>Add</button>
  </form> */}
    </div >
  )
}

export default CategoryAdd