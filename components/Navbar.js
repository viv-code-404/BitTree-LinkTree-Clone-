"use client"
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()
  const [showdown, setshowdown] = useState(false)

  const showNav = ["/", "/generate", "/about", "/contact", "/contact/contactform","/template"].includes(pathname)
  return (
    <>
      {showNav && <div className='w-[90vw] mx-auto bg-white rounded-full p-3 fixed left-[5vw] top-12 z-20'>
        <nav className='flex  items-center justify-between'>
          <div className='flex items-center'>
            <img onClick={() => { setshowdown(!showdown) }} className='w-5 p-0 block lg:hidden mx-1' src="/threeLine.svg" alt="" />

            <div className={`z-10 ${showdown ? "" : "hidden"} absolute left-3 top-14 bg-gray-100 divide-y divide-gray-100 rounded-lg shadow-sm w-44  dark:divide-gray-600`}>
              <div className="px-4 py-3 text-sm text-gray-900 ">
                <div className="font-medium ">Welcome</div>
              </div>
              <ul className="py-2 text-sm text-gray-700 " aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton">
                <li>
                  <Link href="/" className="block px-4 py-2 hover:bg-gray-600  dark:hover:text-white">Home</Link>
                </li>
                <li>
                  <Link href="/template" className="block px-4 py-2 hover:bg-gray-600  dark:hover:text-white">Template</Link>
                </li>
                <li>
                  <Link href="/about" className="block px-4 py-2 hover:bg-gray-600  dark:hover:text-white">About</Link>
                </li>
                <li>
                  <Link href="/contact" className="block px-4 py-2 hover:bg-gray-600 dark:hover:text-white">Contact us</Link>
                </li>
                <li>
                  <Link href="/codewithviv" className="block px-4 py-2 hover:bg-gray-600 dark:hover:text-white">A BitTree</Link>
                </li>
              </ul>
              
            </div>

            <Link href="/" className='flex items-center justify-center gap-0 text-2xl font-bold ml-4'>Bit <span className='text-[#31bb0f]'>Tree</span><img className='w-8  invert-100' src="/tree.svg" alt="Logo" /></Link>
            <ul className='mx-12 hidden lg:flex text-gray-800 lg:gap-8 text-[16px]'>
              <Link href="/"><li className={`${pathname==="/"?"font-bold text-black":""}`}>Home</li></Link>
              <Link href="/template"><li className={`${pathname==="/template"?"font-bold text-black":""}`}>Template</li></Link>
              <Link href="/about"><li className={`${pathname==="/about"?"font-bold text-black":""}`}>About</li></Link>
              <Link href="/contact"><li className={`${pathname==="/contact"?"font-bold text-black":"" ||pathname==="/contact/contactform"?"font-bold text-black":""}`}>Contact us</li></Link>
            </ul>
          </div>
          <div className='flex items-center'>
            <Link href="/generate"><button className={`bg-[#eff0ec] hover:bg-[#e3e3e1] cursor-pointer  lg:p-5 p-2 px-6 font-bold  rounded-lg mx-3 ${pathname==="/generate"?"font-bold text-black":"text-gray-700"}`}>Claim</button></Link>
            <Link href="/codewithviv"><button className='bg-[#1e2330] hidden lg:block cursor-pointer text-white lg:p-5 p-2 lg:px-8 px-4 font-bold rounded-full'>A BitTree</button></Link>
          </div>
        </nav>
      </div>}
    </>
  )
}

export default Navbar
