import React from 'react'
import { Link } from 'react-router-dom'
import { getLocalStorage } from '../utils/localStorage'

type Props = {}

const Header = (props: Props) => {
    const {user} = getLocalStorage();
    return (
        <div className="relative bg-white bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
                <div className="
    w-full
    flex
    items-center
  ">
                    <div className="px-4 w-50 max-w-full">
                        <a href="/" className="navbar-logo w-full block py-5">
                            <img src="https://bizweb.dktcdn.net/100/438/408/themes/848101/assets/logo.svg?1644287733320" alt="logo" className="h-8 w-auto sm:h-10" />
                        </a>
                    </div>
                    <div className="flex px-4 justify-between items-center w-full">
                        <div>
                            <nav id="navbarCollapse" className="
              absolute
              py-5
              lg:py-0 lg:px-4
              xl:px-6
              bg-white
              lg:bg-transparent
              shadow-lg
              rounded-lg
              max-w-[250px]
              w-full
              lg:max-w-full lg:w-full
              right-4
              top-full
              hidden
              lg:block lg:static lg:shadow-none
            ">
                                <ul className="blcok lg:flex">
                                    <li className="relative group">
                                        <a href="/" className="
                    ud-menu-scroll
                    text-base text-dark
                    lg:text-dark-400
                    font-bold
                    lg:group-hover:opacity-70
                    lg:group-hover:text-[#fcaf17]
                    group-hover:text-primary
                    py-2
                    lg:py-6 lg:inline-flex lg:px-0
                    flex
                    mx-8
                    lg:mr-0
                  ">
                                            Home
                                        </a>
                                    </li>
                                    <li className="relative group submenu-item">
                                        <a className="
                  text-base text-dark
                  lg:text-dark-400
                  font-bold
                  lg:group-hover:opacity-70
                  lg:group-hover:text-[#fcaf17]
                  group-hover:text-primary
                  py-2
                  lg:py-6 lg:inline-flex lg:pl-0 lg:pr-4
                  flex
                  mx-8
                  lg:mr-0 lg:ml-8
                  xl:ml-12
                  relative
                  after:absolute
                  after:w-2
                  after:h-2
                  after:border-b-2
                  after:border-r-2
                  after:border-current
                  after:rotate-45
                  lg:after:right-0
                  after:right-1
                  after:top-1/2
                  after:-translate-y-1/2
                  after:mt-[-2px]
                ">
                                            Category
                                        </a>
                                    </li>
                                    <li className="relative group">
                                        <a href="/products" className="
                    ud-menu-scroll
                    text-base text-dark
                    lg:text-dark-400
                    font-bold
                    lg:group-hover:opacity-70
                    lg:group-hover:text-[#fcaf17]
                    group-hover:text-primary
                    py-2
                    lg:py-6 lg:inline-flex lg:px-0
                    flex
                    mx-8
                    lg:mr-0 lg:ml-7
                    xl:ml-12
                  ">
                                            Products
                                        </a>
                                    </li>
                                    <li className="relative group">
                                        <a href="/news" className="
                    ud-menu-scroll
                    text-base text-dark
                    lg:text-dark-400
                    font-bold
                    lg:group-hover:opacity-70
                    lg:group-hover:text-[#fcaf17]
                    group-hover:text-primary
                    py-2
                    lg:py-6 lg:inline-flex lg:px-0
                    flex
                    mx-8
                    lg:mr-0 lg:ml-7
                    xl:ml-12
                  ">
                                            News
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div>
                            <form method="" action="/search" id="form-search">
                                <div className="relative text-gray-600 focus-within:text-gray-400">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                        <button className="p-1 focus:outline-none focus:shadow-outline">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                        </button>
                                    </span>
                                    <input type="text" id="searchValue" name="q" className="py-2 text-sm text-white border border-solid  border-yellow-300 rounded-md pl-10 focus:outline-none focus:bg-white   focus:text-gray-900" placeholder="Search..." />
                                </div>
                            </form>
                        </div>
                        {user ? (<li className="box-acount relative group submenu-item list-none">
                            <Link to="">
                                <a className="
        text-base
        font-medium
        text-white
        bg-[#fcaf17]
        rounded-lg
        py-3
        px-6
        hover:bg-opacity-90 hover:text-dark
        signUpBtn
        duration-300
        ease-in-out
      ">
                                    {user.name}
                                </a></Link></li>) : (<li className="box-acount relative group submenu-item list-none">
                                    <Link to="signin">
                                        <a href="/signin" className="
        text-base
        font-medium
        text-dark-400
        hover:opacity-70
        py-3
        px-7
        loginBtn
      ">
                                            Sign In
                                        </a></Link>
                                    <Link to="signup">
                                        <a href="/signup" className="
        text-base
        font-medium
        text-white
        bg-[#fcaf17]
        rounded-lg
        py-3
        px-6
        hover:bg-opacity-90 hover:text-dark
        signUpBtn
        duration-300
        ease-in-out
      ">
                                            Sign Up
                                        </a></Link>
                                </li>)}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header