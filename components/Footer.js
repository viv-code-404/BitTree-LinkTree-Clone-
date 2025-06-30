"use client"
import React from 'react'
import localFont from "next/font/local"
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const poppins = localFont({
    src: "./font/Poppins-ExtraBold.ttf",
    variable: "--font-poppins",
    weight: "100 900"
});

const Footer = () => {
    const pathname = usePathname()
    const router = useRouter()
    const showFooter = ["/", "/generate", "/about", "/contact", "/contact/contactform","/template"].includes(pathname)

    const [handle, sethandle] = useState("")

    const claimHandle = () => {
        router.push(`/generate?handle=${handle}`)
    }
    
    return (
        <>
            {showFooter && <div className='min-h-[200vh] bg-[#502274] relative flex flex-col items-center overflow-hidden'>
                <img className='w-[35vw] rotate-[15deg] absolute xl:top-10 top-90 lg:left-20 left-5' src="/footerman.svg" alt="Footer Man" />
                <p className={`${poppins.className} lg:text-6xl text-4xl text-[#e9c0e9] lg:w-[60vw] text-center z-10 relative lg:pt-64 pt-32`}>Jumpstart your corner of the internet today</p>
                <div className='relative z-10 flex items-center justify-center flex-col lg:flex-row mt-7'>
                    <input onChange={(e) => sethandle(e.target.value)} className="lg:w-[20vw] lg:h-[4vw] bg-white text-[16px] lg:px-4  rounded-xl text-gray-900 p-5 px-10 lg:p-0" type="text" value={handle} placeholder="bittr.ee/" />
                    <button onClick={() => claimHandle()} disabled={handle.length < 3} className="bg-[#d2e823] disabled:cursor-not-allowed cursor-pointer font-bold text-gray-900 text-[16px] lg:p-5 lg:px-10   p-3 px-6 rounded-full mx-2 mt-5 lg:mt-0">Claim your BitTree</button>
                </div>

                <img className='w-[35vw] absolute xl:top-[38vw] top-[110vw] left-[75vw]' src="/footerflower.svg" alt="" />
                <div className="footercontent bg-white min-h-[70vh] p-10 py-14 lg:mt-60 mt-20 w-[90vw] relative z-10 mx-auto rounded-2xl">
                    <div className='grid lg:grid-cols-4 gap-10 lg:gap-0 lg:mx-10'>
                        <div>
                            <h1 className='text-2xl font-semibold'>Company</h1>
                            <ul className='text-gray-500 font-medium text-[14px] flex flex-col gap-4 mt-6'>
                                <li>The BitTree Blog</li>
                                <li>Engineering Blog</li>
                                <li>Marketplace</li>
                                <li>What's New</li>
                                <li>About</li>
                                <li>Press</li>
                                <li>Careers</li>
                                <li>Link in Bio</li>
                                <li>Social Good</li>
                                <li>Contact</li>
                            </ul>
                        </div>

                        <div>
                            <h1 className='text-2xl font-semibold'>Community</h1>
                            <ul className='text-gray-500 font-medium text-[14px] flex flex-col gap-4 mt-6'>
                                <li>BitTree for Enterprise</li>
                                <li>2023 Creator Report</li>
                                <li>2022 Creator Report</li>
                                <li>Charities</li>
                                <li>What's Trending</li>
                                <li>Creator Profile Directory</li>
                                <li>Explore Templates</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className='text-2xl font-semibold'>Support</h1>
                            <ul className='text-gray-500 font-medium text-[14px] flex flex-col gap-4 mt-6'>
                                <li>Help Topics</li>
                                <li>Getting Started</li>
                                <li>BitTree Pro</li>
                                <li>Features & How-Tos</li>
                                <li>FAQs</li>
                                <li>Report a Violation</li>
                            </ul>
                        </div>

                        <div>
                            <h1 className='text-2xl font-semibold'>Trust & Legal</h1>
                            <ul className='text-gray-500 font-medium text-[14px] flex flex-col gap-4 mt-6'>
                                <li>Terms & Conditions</li>
                                <li>Privacy Notice</li>
                                <li>Cookie Notice</li>
                                <li>Trust Center</li>
                                <li>Cookie Preferences</li>
                                <li>Transparency Report</li>
                                <li>Law Enforcement Access Policy</li>
                            </ul>
                        </div>

                    </div>

                    <div className='mt-10 flex gap-8 lg:gap-0 justify-between flex-col lg:flex-row'>
                        <div className='lg:mx-10 flex items-center'>
                            <Link href="/generate"><button className='bg-[#eff0ec] text-[13px] lg:text-base hover:bg-[#e3e3e1] cursor-pointer  lg:p-5 p-4 px-7 font-bold text-black rounded-lg mr-4'>Claim</button></Link>
                            <Link href="/codewithviv"><button className='bg-[#d2e823] text-[13px] lg:text-base cursor-pointer text-black lg:p-5 lg:px-12 p-4 px-10 font-bold rounded-full'>A BitTree</button></Link>
                        </div>

                        <div className='flex gap-3 lg:mx-10 flex-wrap'>
                            <div className='bg-slate-900 lg:p-4 p-2 px-4 rounded-full'>
                                <img className='lg:w-28 w-24  invert-100  ' src="/apple.svg" alt="apple" />
                            </div>
                            <div className='bg-slate-900 lg:p-4 p-2 lg:px-8 px-4 rounded-full'>
                                <img className='lg:w-28 w-24   invert-100 ' src="/googleplay.svg" alt="Google Play" />
                            </div>
                            <div className='bg-slate-900 lg:p-4 p-3 flex items-center rounded-full'>
                                <img className='lg:w-8 w-5' src="/tree.svg" alt="tree" />
                            </div>
                            <div className='bg-slate-900 lg:p-4 p-3 flex items-center rounded-full'>
                                <img className='lg:w-8 w-5 ' src="/thread.svg" alt="thread" />
                            </div>
                            <div className='bg-slate-900 lg:p-4 p-3 flex items-center rounded-full'>
                                <img className='lg:w-8 w-5 ' src="/tiktok.svg" alt="Tik Tok" />
                            </div>
                            <div className='bg-slate-900 lg:p-4 p-3 flex items-center rounded-full'>
                                <img className='lg:w-8 w-5 ' src="/instagram.svg" alt="Instagram" />
                            </div>


                        </div>
                    </div>
                </div>

                <div className='flex gap-12 mt-24 justify-center'>
                    <img className='w-24' src="/flag1.svg" alt="" />
                    <img className='w-24' src="/flag2.svg" alt="" />
                </div>
                <p className='text-center text-[#e9c0e9] lg:text-lg lg:mx-36 mx-10 mt-10 font-semibold'>We acknowledge the Traditional Custodians of the land on which our office stands, The Wurundjeri people of the Kulin Nation, and pay our respects to Elders past, present and emerging. BitTree Pty Ltd (ABN 68 608 721 562), 1-9 Sackville st, Collingwood VIC 3066</p>
                <p className='text-center text-[#e9c0e9] text-[15px] my-5 mt-10 font-semibold'>Made with ☕&❤️ by viv-code-404</p>
            </div>}

        </>
    )
}

export default Footer
