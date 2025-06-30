import React from 'react'
import localFont from "next/font/local"


const poppins = localFont({
    src: "./font/Poppins-ExtraBold.ttf",
    variable: "--font-poppins",
    weight: "100 900"
});

const page = () => {
    return (
        <div className='min-h-screen bg-[#f3f3f1] flex flex-col gap-32'>
            <div className='grid lg:grid-cols-2 gap-16 lg:px-[5vw] px-5 lg:mt-64 mt-44'>
                <div className='flex flex-col justify-center pr-16'>
                    <p className={`lg:text-7xl text-5xl ${poppins.className} text-gray-800`}>Our Founders' Story</p>
                    <p className='text-xl mt-3 text-gray-700'>BitTree is a tool to help you share everything you are, in one simple link – making your online content more discoverable, easier to manage and more likely to convert. Here’s where it all began.</p>
                </div>

                <div>
                    <img src="/aboutimg.webp" alt="About Img" />
                </div>
            </div>

            <div className='px-[5vw] text-gray-800 font-semibold lg:text-xl lg:my-32 my-16'>
                <p>In 2016 brothers Alex and Anthony Zaccaria and their business partner Nick Humphreys found a common pain point when running their digital agency, Bolster, managing social media accounts for their clients. Endlessly updating singular bio links felt like a waste of time, or worse, often got overlooked. Overnight, the first iteration of BitTree was live, and we haven’t looked back since!</p>
                <p className='mt-10'>Today, with 70M+ users worldwide, we’re helping brands, artists, publishers, agencies and influencers better control their presence online. As the internet became more fragmented, we grew BitTree’s functionality to better serve those using it and to streamline the content-sharing process.
                </p>
                <p className='my-10'>We’re a passionate team of developers, designers, marketers and biz ops, committed to equipping content-creators with the best tools for getting their work seen. We’re headquartered in Melbourne, Australia and have offices in Sydney, San Francisco and Los Angeles.</p>
                <p>In 2019 we were thrilled to be one of CNBC’s ‘Upstart 100’, a list of the “brightest, most intriguing, young startups promising to become the great companies of tomorrow”. In March 2020, Fast Company honored us in their ‘Most Innovative Companies of 2020’ list, placing us number four in the Social Media category. Previous honorees of the Social Media fourth place include Glossier and Reddit.</p>
            </div>
        </div>
    )
}

export default page
