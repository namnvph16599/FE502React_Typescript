import React from 'react'
import { Link, Outlet } from 'react-router-dom'

type Props = {}

const AdminLayout = (props: Props) => {
  return (
    <div>
      <div className="flex flex-no-wrap">
        <div className="w-64 absolute sm:relative bg-indigo-900 shadow md:h-full flex-col justify-between hidden sm:flex">
          <div>
            <div className="h-16 mt-12 w-full flex items-center px-8">
              <img src="data:image/png;base64,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" alt="Logo" />
            </div>
            <ul className="mt-12">
              {/* <li className="flex w-full justify-between text-white bg-indigo-800  cursor-pointer items-center py-3 px-8">
                <a href="" className="flex items-center  rounded focus:outline-none focus:ring-2 focus:ring-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"></path>
                    <rect x="4" y="4" width="6" height="6" rx="1"></rect>
                    <rect x="14" y="4" width="6" height="6" rx="1"></rect>
                    <rect x="4" y="14" width="6" height="6" rx="1"></rect>
                    <rect x="14" y="14" width="6" height="6" rx="1"></rect>
                  </svg>
                  <span className="text-sm ml-2">Dashboard</span>
                </a>
              </li> */}
               <li className="flex w-full justify-between text-gray-200 hover:text-white hover:bg-indigo-800 cursor-pointer items-center px-8 py-3">
                <Link to="/admin">
                  <a href="" className="flex items-center  rounded focus:outline-none focus:ring-2 focus:ring-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"></path>
                    <rect x="4" y="4" width="6" height="6" rx="1"></rect>
                    <rect x="14" y="4" width="6" height="6" rx="1"></rect>
                    <rect x="4" y="14" width="6" height="6" rx="1"></rect>
                    <rect x="14" y="14" width="6" height="6" rx="1"></rect>
                  </svg>
                    <span className="text-sm ml-2">Dashboard</span>
                  </a>
                </Link>
              </li>
              <li className="flex w-full justify-between text-gray-200 hover:text-white hover:bg-indigo-800 cursor-pointer items-center px-8 py-3">
                <Link to="/admin/products">
                  <a href="" className="flex items-center  rounded focus:outline-none focus:ring-2 focus:ring-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z"></path>
                      <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"></path>
                    </svg>
                    <span className="text-sm ml-2">Products</span>
                  </a>
                </Link>
              </li>
              <li className="flex w-full justify-between text-gray-200 hover:text-white hover:bg-indigo-800 cursor-pointer items-center px-8 py-3">
                <Link to="/admin/category">
                  <a href="" className="flex items-center  rounded focus:outline-none focus:ring-2 focus:ring-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z"></path>
                      <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"></path>
                    </svg>
                    <span className="text-sm ml-2">Category</span>
                  </a>
                </Link>
              </li>
              <li className="flex w-full justify-between text-gray-200 hover:text-white hover:bg-indigo-800 cursor-pointer items-center px-8 py-3">
                {/* <a href="" className="flex items-center  rounded focus:outline-none focus:ring-2 focus:ring-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-compass" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"></path>
                    <polyline points="8 16 10 10 16 8 14 14 8 16"></polyline>
                    <circle cx="12" cy="12" r="9"></circle>
                  </svg>
                  <span className="text-sm ml-2"></span>
                </a> */}
              </li>
              <li className="flex w-full justify-between text-gray-200 hover:text-white hover:bg-indigo-800 cursor-pointer items-center px-8 py-3">
                {/* <a href="" className="flex items-center  rounded focus:outline-none focus:ring-2 focus:ring-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"></path>
                    <polyline points="7 8 3 12 7 16"></polyline>
                    <polyline points="17 8 21 12 17 16"></polyline>
                    <line x1="14" y1="4" x2="10" y2="20"></line>
                  </svg>
                  <span className="text-sm ml-2"></span>
                </a> */}
              </li>
              <li className="flex w-full justify-between text-gray-200 hover:text-white hover:bg-indigo-800 cursor-pointer items-center px-8 py-3">
                {/* <a href="" className="flex items-center rounded focus:outline-none focus:ring-2 focus:ring-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"></path>
                    <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"></path>
                  </svg>
                  <span className="text-sm ml-2"></span>
                </a> */}
              </li>
              <li className="flex w-full justify-between text-gray-200 hover:text-white hover:bg-indigo-800 cursor-pointer items-center px-8 py-3">
                {/* <a href="" className="flex items-center  rounded focus:outline-none focus:ring-2 focus:ring-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-stack" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <polyline points="12 4 4 8 12 12 20 8 12 4" />
                    <polyline points="4 12 12 16 20 12" />
                    <polyline points="4 16 12 20 20 16" />
                  </svg>
                  <span className="text-sm ml-2"></span>
                </a> */}
              </li>
              <li className="flex w-full justify-between text-gray-200 hover:text-white hover:bg-indigo-800 cursor-pointer items-center px-8 py-3">
                {/* <a href="" className="flex items-center  rounded focus:outline-none focus:ring-2 focus:ring-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-stack" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <polyline points="12 4 4 8 12 12 20 8 12 4" />
                    <polyline points="4 12 12 16 20 12" />
                    <polyline points="4 16 12 20 20 16" />
                  </svg>
                  <span className="text-sm ml-2"></span>
                </a> */}
              </li>
              <li className="flex w-full justify-between text-gray-200 hover:text-white hover:bg-indigo-800 cursor-pointer items-center px-8 py-3">
                {/* <a href="" className="flex items-center  rounded focus:outline-none focus:ring-2 focus:ring-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  <span className="text-sm ml-2"></span>
                </a> */}
              </li>
            </ul>
            <div className="flex items-center mt-48 mb-4 px-8">
              <div className="w-10 h-10 bg-cover rounded-md mr-3">
                <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_5.png" alt="display avatar" role="img" className="rounded-full h-full w-full overflow-hidden shadow" />
              </div>
              <div>
                <p className="text-gray-200 text-sm font-medium">Steve Doe</p>
                <p className="text-gray-200 text-xs">View Profile</p>
              </div>
            </div>
          </div>
          <div className="px-8 bg-indigo-800">
            <ul className="w-full flex items-center justify-between">
              <li className="cursor-pointer text-white pt-5 pb-3">
                <a aria-label="open notifications" href="">
                  <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_icons_at_bottom_alternate_style-svg3.svg" alt="notifications" />
                </a>
              </li>
              <li className="cursor-pointer text-white pt-5 pb-3">
                <a aria-label="open messages" href="" >
                  <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_icons_at_bottom_alternate_style-svg4.svg" alt="chat" />
                </a>
              </li>
              <li className="cursor-pointer text-white pt-5 pb-3">
                <a aria-label="open settings" href="">
                  <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_icons_at_bottom_alternate_style-svg5.svg" alt="settings" />
                </a>
              </li>
              <li className="cursor-pointer text-white pt-5 pb-3 ">
                <a aria-label="open archive" href="">
                  <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_icons_at_bottom_alternate_style-svg6.svg" alt="drawer" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-64 z-40 absolute sm:relative bg-indigo-900 shadow md:h-full flex-col justify-between sm:hidden transition duration-150 ease-in-out" id="mobile-nav">
          <button aria-label="open sidebar" id="openSideBar" className="h-10 w-10 bg-indigo-900 absolute right-0 mt-16 -mr-10 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-900" >
            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_icons_at_bottom_alternate_style-svg7.svg" alt="toggler" />
          </button>
          <div id="closeSideBar" className="hidden h-10 w-10 bg-indigo-900 absolute right-0 mt-16 -mr-10 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer text-white" >
            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_icons_at_bottom_alternate_style-svg8.svg" alt="cross" />
          </div>
          <div>
            <div className="h-16 w-full flex items-center px-8">
              <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_icons_at_bottom_alternate_style-svg1.svg" alt="Logo" />
            </div>
            <ul className="mt-12">
              <li className="flex w-full justify-between text-white bg-indigo-800 cursor-pointer items-center py-3 px-8">
                <a href="" className="flex items-center  rounded focus:outline-none focus:ring-2 focus:ring-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"></path>
                    <rect x="4" y="4" width="6" height="6" rx="1"></rect>
                    <rect x="14" y="4" width="6" height="6" rx="1"></rect>
                    <rect x="4" y="14" width="6" height="6" rx="1"></rect>
                    <rect x="14" y="14" width="6" height="6" rx="1"></rect>
                  </svg>
                  <span className="text-sm ml-2">Dashboard</span>
                </a>
              </li>
              <li className="flex w-full justify-between text-gray-200 hover:text-white hover:bg-indigo-800 cursor-pointer items-center px-8 py-3">
                <a href="" className="flex items-center  rounded focus:outline-none focus:ring-2 focus:ring-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"></path>
                    <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"></path>
                  </svg>
                  <span className="text-sm ml-2">Products</span>
                </a>
              </li>
              <li className="flex w-full justify-between text-gray-200 hover:text-white hover:bg-indigo-800 cursor-pointer items-center px-8 py-3">
                <a href="" className="flex items-center  rounded focus:outline-none focus:ring-2 focus:ring-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-compass" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"></path>
                    <polyline points="8 16 10 10 16 8 14 14 8 16"></polyline>
                    <circle cx="12" cy="12" r="9"></circle>
                  </svg>
                  <span className="text-sm ml-2">Performance</span>
                </a>
              </li>
              <li className="flex w-full justify-between text-gray-200 hover:text-white hover:bg-indigo-800 cursor-pointer items-center px-8 py-3">
                <a href="" className="flex items-center  rounded focus:outline-none focus:ring-2 focus:ring-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"></path>
                    <polyline points="7 8 3 12 7 16"></polyline>
                    <polyline points="17 8 21 12 17 16"></polyline>
                    <line x1="14" y1="4" x2="10" y2="20"></line>
                  </svg>
                  <span className="text-sm ml-2">Deliverables</span>
                </a>
              </li>
              <li className="flex w-full justify-between text-gray-200 hover:text-white hover:bg-indigo-800 cursor-pointer items-center px-8 py-3">
                <a href="" className="flex items-center rounded focus:outline-none focus:ring-2 focus:ring-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"></path>
                    <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"></path>
                  </svg>
                  <span className="text-sm ml-2">Invoices</span>
                </a>
              </li>
              <li className="flex w-full justify-between text-gray-200 hover:text-white hover:bg-indigo-800 cursor-pointer items-center px-8 py-3">
                <a href="" className="flex items-center  rounded focus:outline-none focus:ring-2 focus:ring-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-stack" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <polyline points="12 4 4 8 12 12 20 8 12 4" />
                    <polyline points="4 12 12 16 20 12" />
                    <polyline points="4 16 12 20 20 16" />
                  </svg>
                  <span className="text-sm ml-2">Inventory</span>
                </a>
              </li>
              <li className="flex w-full justify-between text-gray-200 hover:text-white hover:bg-indigo-800 cursor-pointer items-center px-8 py-3">
                <a href="" className="flex items-center  rounded focus:outline-none focus:ring-2 focus:ring-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  <span className="text-sm ml-2">Settings</span>
                </a>
              </li>
            </ul>
            <div className="flex items-center mt-48 mb-4 px-8">
              <div className="w-10 h-10 bg-cover rounded-md mr-3">
                <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_5.png" alt="display avatar" role="img" className="rounded-full h-full w-full overflow-hidden shadow" />
              </div>
              <div>
                <p className="text-gray-200 text-sm font-medium">Steve Doe</p>
                <p className="text-gray-200 text-xs">View Profile</p>
              </div>
            </div>
          </div>
          <div className="px-8 bg-indigo-800">
            <ul className="w-full flex items-center justify-between">
              <li className="cursor-pointer text-white pt-5 pb-3">
                <a aria-label="open notifications" href="">
                  <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_icons_at_bottom_alternate_style-svg3.svg" alt="notifications" />
                </a>
              </li>
              <li className="cursor-pointer text-white pt-5 pb-3">
                <a aria-label="open messages" href="">
                  <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_icons_at_bottom_alternate_style-svg4.svg" alt="chat" />
                </a>
              </li>
              <li className="cursor-pointer text-white pt-5 pb-3">
                <a aria-label="open settings" href="">
                  <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_icons_at_bottom_alternate_style-svg5.svg" alt="settings" />
                </a>
              </li>
              <li className="cursor-pointer text-white pt-5 pb-3 ">
                <a aria-label="open archive" href="">
                  <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_icons_at_bottom_alternate_style-svg6.svg" alt="drawer" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
          <Outlet />
        </div>
      </div>



    </div>
  )
}

export default AdminLayout