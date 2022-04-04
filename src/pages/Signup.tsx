import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { signup } from '../api/user'
import { UserType } from '../types/user'

type Props = {}

const Signup = (props: Props) => {
  const { register, handleSubmit, formState: { errors } } = useForm<UserType>()
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<UserType> = async (dataSignup) => {
    const data = await signup(dataSignup);
    console.log(data);
    navigate("/signin")
  }
  return (
    <div>
      <div className="bg-[#fcaf17] min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900 text-[#2a2a86]">
              Sign up
            </h1>
            <p className="mt-2 text-center text-sm text-gray-600">
            </p>
          </div>
          <form className="mt-8 space-y-6" id="form-signup" onSubmit={handleSubmit(onSubmit)}>
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label className="sr-only">Fullname</label>
                <input {...register('name')} id="name" name="name" type="text" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Fullname" />
              </div>
              <div>
                <label className="sr-only">Email address</label>
                <input  {...register('email')} id="email" name="email" type="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
              </div>
              <div>
                <label className="sr-only">Password</label>
                <input  {...register('password')} id="password" name="password" type="password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
              </div>
            </div>

            <div>
              <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#2a2a86] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </span>
                Sign up
              </button>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-sm">
                <a href="/signin" className="block font-medium text-indigo-600 hover:text-indigo-500 text-center">
                  Have acount! SIGNIN
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup