import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom';

const NevBar = () => {
  return (
    <>
    <nav className="block w-full max-w-screen-lg px-4 py-2 mx-auto shadow-md bg-white bg-opacity-50 sticky top-3 shadow lg:px-8 lg:py-3 backdrop-blur-lg backdrop-saturate-150 z-[9999]">
  <div className="container flex flex-wrap items-center justify-between mx-auto text-slate-800">
    <a href="#"
      className="mr-4 block cursor-pointer py-1.5 text-base text-slate-800 font-semibold">
      Book Review
    </a>
    <div className="hidden lg:block">
      <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
       
        <li className="flex items-center p-1 text-md gap-x-2 text-slate-900 ">
          <Link to='/books/create' className="flex items-center"><b>Add Book</b></Link>
        </li>
      </ul>
    </div>
    <button
      className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
      type="button">
      <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </span>
    </button>
  </div>
</nav>
<Outlet/>
</>
  )
}

export default NevBar