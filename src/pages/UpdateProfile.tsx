import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { UserType } from '../types/user'
import { getLocalStorage } from '../utils/localStorage'

type Props = {
}

const UpdateProfile = (props: Props) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<UserType>();
    const onSubmit: SubmitHandler<UserType> = (data) => {
        console.log(data);
    }
    useEffect(() => {
        const { user } = getLocalStorage();
        reset(user)
    }, [])
    return (
        <div>
            <div className="bg-[#fcaf17] min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900 text-[#2a2a86]">
                            Update Profile
                        </h1>
                    </div>
                    <form className="mt-8 space-y-6" id="form-signin" onSubmit={handleSubmit(onSubmit)}>
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label className="sr-only">Name</label>
                                <input {...register('name')} id="name" name="name" type="text" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Name" />
                            </div>
                            <div>
                                <label className="sr-only">Email</label>
                                <input {...register('email')} id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
                            </div>
                        </div>
                        <div>
                            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#2a2a86] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UpdateProfile