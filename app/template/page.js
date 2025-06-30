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
        <div className=''>
            <section className='min-h-screen bg-[#f3f3f1] flex flex-col items-center justify-center'>
                <h2 className={`${poppins.className} lg:text-7xl md:text-6xl text-3xl xl:px-80 md:px-10 px-2 text-center `}>A Linktree template to suit every brand and creator</h2>
                <p className='text-xl text-gray-800 xl:px-52 md:px-16 text-center mt-10 px-7'>Different Link Apps, integrations and visual styles can help you create a Linktree that looks and feels like you and your brand. Explore our library of custom templates to grow and connect with your audience even more easily!</p>
            </section>

            <section className='min-h-screen bg-pink-300'>
                <h2 className={`${poppins.className} lg:text-6xl lg:px-80 text-4xl text-center pt-36 text-gray-700`}>Our Themes</h2>
                <p className='text-center text-gray-500'>Enables you to select your own theme!</p>

                <div className='w-[75vw] mx-auto py-24 flex xl:justify-between justify-center items-center flex-wrap gap-30 xl:gap-0'>
                    <div className='flex h-fit flex-col items-center border-0 border-gray-300 p-5 px-10 rounded-2xl shadow-2xl shadow-black'>
                        <h3 className=' text-xl font-bold mb-3 text-pink-100'>Light</h3>
                        <img src="/light.png" className='w-52 rounded-2xl shadow-2xl shadow-pink-600' alt="" />
                        <Link href="/generate?theme=light"><button className='border-y-1 hover:border-1 cursor-pointer p-2 px-4 rounded-full mt-3 text-[13px] bg-[#e97fc6a9] hover:bg-[#e97fc6] text-gray-200 hover:font-bold hover:text-white'>Try now</button></Link>
                    </div>
                    <div className='flex h-fit  flex-col items-center border-0 border-gray-300 p-5 px-10 rounded-2xl shadow-2xl shadow-black'>
                        <h3 className=' text-xl font-bold mb-3 text-pink-100'>Dark</h3>
                        <img src="/dark.png" className='w-60 rounded-2xl shadow-2xl shadow-pink-600' alt="" />
                        <Link href="/generate?theme=dark"><button className='border-y-1 hover:border-1 cursor-pointer p-2 px-4 rounded-full mt-3 text-[13px] bg-[#e97fc6a9] hover:bg-[#e97fc6] text-gray-200 hover:font-bold hover:text-white'>Try now</button></Link>
                    </div>
                    <div className='flex h-fit flex-col items-center border-0 border-gray-300 p-5 px-10 rounded-2xl shadow-2xl shadow-black'>
                        <h3 className=' text-xl font-bold mb-3 text-pink-100'>Aqua</h3>
                        <img src="/aqua.png" className='w-52 rounded-2xl shadow-2xl shadow-pink-500' alt="" />
                        <Link href="/generate?theme=aqua"><button className='border-y-1 hover:border-1 cursor-pointer p-2 px-4 rounded-full mt-3 text-[13px] bg-[#e97fc6a9] hover:bg-[#e97fc6] text-gray-200 hover:font-bold hover:text-white'>Try now</button></Link>
                    </div>                    
                </div>
                <div className='w-[75vw] mx-auto pb-24 flex 2xl:justify-between justify-center items-center flex-wrap gap-30  2xl:gap-0'>
                    <div className='flex h-fit flex-col items-center border-0 border-gray-300 p-5 px-10 rounded-2xl shadow-2xl shadow-black'>
                        <h3 className=' text-xl font-bold mb-3 text-pink-100'>Aesthetic</h3>
                        <img src="/aesthetic.png" className='w-60 rounded-2xl shadow-2xl shadow-pink-500' alt="" />
                        <Link href="/generate?theme=aesthetic"><button className='border-y-1 hover:border-1 cursor-pointer p-2 px-4 rounded-full mt-3 text-[13px] bg-[#e97fc6a9] hover:bg-[#e97fc6] text-gray-200 hover:font-bold hover:text-white'>Try now</button></Link>
                    </div>
                    <div className='flex h-fit flex-col items-center border-0 border-gray-300 p-5 px-10 rounded-2xl shadow-2xl shadow-black'>
                        <h3 className=' text-xl font-bold mb-3 text-pink-100'>Mustard Yellow</h3>
                        <img src="/yellow.png" className='w-56 rounded-2xl shadow-2xl shadow-pink-500' alt="" />
                        <Link href="/generate?theme=yellow"><button className='border-y-1 hover:border-1 cursor-pointer p-2 px-4 rounded-full mt-3 text-[13px] bg-[#e97fc6a9] hover:bg-[#e97fc6] text-gray-200 hover:font-bold hover:text-white'>Try now</button></Link>
                    </div>
                    <div className='flex h-fit flex-col items-center border-0 border-gray-300 p-5 px-10 rounded-2xl shadow-2xl shadow-black'>
                        <h3 className=' text-xl font-bold mb-3 text-pink-100'>Light Purple</h3>
                        <img src="/purple.png" className='w-52 rounded-2xl shadow-2xl shadow-pink-500' alt="" />
                        <Link href="/generate?theme=purple"><button className='border-y-1 hover:border-1 cursor-pointer p-2 px-4 rounded-full mt-3 text-[13px] bg-[#e97fc6a9] hover:bg-[#e97fc6] text-gray-200 hover:font-bold hover:text-white'>Try now</button></Link>
                    </div>                    
                </div>
                <div className='w-[75vw] mx-auto pb-24 flex justify-center items-center'>   
                    <div className='flex h-fit flex-col items-center border-0 border-gray-300 p-5 px-10 rounded-2xl shadow-2xl shadow-black'>
                        <h3 className=' text-xl font-bold mb-3 text-pink-100'>Cool</h3>
                        <img src="/cool.png" className='w-56 rounded-2xl shadow-2xl shadow-pink-500' alt="" />
                        <Link href="/generate?theme=cool"><button className='border-y-1 hover:border-1 cursor-pointer p-2 px-4 rounded-full mt-3 text-[13px] bg-[#e97fc6a9] hover:bg-[#e97fc6] text-gray-200 hover:font-bold hover:text-white'>Try now</button></Link>
                    </div>
                                       
                </div>

            </section>
        </div>
    )
}

export default page
