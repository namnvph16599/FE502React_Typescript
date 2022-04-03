import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { signin } from '../api/user';
import { UserType } from '../types/user';
import { setLocalStorage } from '../utils/localStorage';

type Props = {}

const Signin = (props: Props) => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<UserType>();
  const onSubmit: SubmitHandler<UserType> = async (dataUser) => {
    const { data } = await signin(dataUser);
    console.log(data);
    setLocalStorage(data, () => {
      navigate("/")
    })
  }
  return (
    <div>
      <div className="bg-[#fcaf17] min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900 text-[#2a2a86]">
              Sign in
            </h1>
            <p className="mt-2 text-center text-sm text-gray-600">

            </p>
          </div>
          <form className="mt-8 space-y-6" id="form-signin" onSubmit={handleSubmit(onSubmit)}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label className="sr-only">Email address</label>
                <input {...register('email')} id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
              </div>
              <div className="block pt-2">
                <label className="sr-only">Password</label>
                <input {...register('password')} id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
              </div>
            </div>


            <div>
              <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#2a2a86] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </span>
                Sign in
              </button>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-sm">
                <a href="/signup" className="block font-medium text-indigo-600 hover:text-indigo-500 text-center">
                  Don't have acount! SIGNUP
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signin