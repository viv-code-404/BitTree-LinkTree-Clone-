import React from 'react'
import localFont from "next/font/local"
import Link from 'next/link';


const poppins = localFont({
    src: "./font/Poppins-ExtraBold.ttf",
    variable: "--font-poppins",
    weight: "100 900"
});

const page = () => {
    return (
        <div className='min-h-screen bg-[#f3f3f1] flex items-center justify-center flex-col'>
            <h1 className={`${poppins.className} lg:text-7xl text-5xl text-center`}>Contact us</h1>
            <p className='text-xl text-gray-500 mt-2 mx-5 text-center'>Need to contact BitTree? Simply tap the button below for your options.</p>
            <Link href="/contact/contactform"><button className={` bg-[#e9c0e9] text-black text-[16px] p-4 px-12 mt-6 font-semibold rounded-full cursor-pointer`}>Contact BitTree</button></Link>

        </div>
    )
}

export default page
