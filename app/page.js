"use client"
import Image from "next/image";
import localFont from "next/font/local"
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";


const poppins = localFont({
  src: "./font/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900"
});

const poppinsReg = localFont({
  src: "./font/Poppins-Regular.ttf",
  variable: "--font-poppins",
  weight: "100 900"
});


export default function Home() {
  const [handle, sethandle] = useState("")
  const router = useRouter()

  const claimHandle = () => {
    router.push(`/generate?handle=${handle}`)
  }
  return (
    <div>
      <section className="min-h-[120vh] px-[5vw] bg-[#254f1a] grid lg:grid-cols-2  pt-44 lg:pt-0">
        <div className={`flex justify-center  flex-col gap-0 lg:text-7xl text-5xl text-[#d2e823] font-bold  ${poppins.className} `}>
          <p className="">Everything you</p>
          <p>are. In one,</p>
          <p className="">simple link in bio.</p>
          <p className={`${poppinsReg.className} lg:text-xl text-lg my-8 mb-12 text-white`}>Join 70M+ people using BitTree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>

          <div className="flex items-center flex-col lg:flex-row gap-4">
            <input value={handle} onChange={(e) => sethandle(e.target.value)} className="lg:w-[20vw] lg:h-[4vw] v bg-white text-[16px] px-4 p-5 lg:px-4 rounded-xl text-gray-900" type="text" placeholder="bittr.ee/" />
            <button onClick={() => claimHandle()} disabled={handle.length < 5 || handle.includes(" ")} className="bg-[#e9c0e9] disabled:cursor-not-allowed cursor-pointer text-gray-900 text-[16px] lg:p-6 p-4 px-6 rounded-full mx-2">Claim your BitTree</button>
          </div>
          <p className={`text-[14px] ${poppinsReg.className} m-2 text-gray-400`}>Note :</p>
          <p className={`text-[12px] ${poppinsReg.className}  text-gray-400`}> 🚫Length should not be less than 5.</p>
          <p className={`text-[12px] ${poppinsReg.className} mt-2 text-gray-400`}> 🚫Space is not allowed.</p>
        </div>
        <div className=" flex items-center  ">
          <Image alt="Home Image1" className="object-contain lg:mx-10 py-20 lg:py-0" width={600} height={200} src="/homeimg1.png" />
        </div>
      </section >

      <section className="min-h-screen px-[5vw] bg-[#e9c0e9] grid lg:grid-cols-2 ">
        <div className=" flex items-center  ">
          <Image alt="Home Image 2" className="object-contain lg:mx-10 py-20 lg:py-0" width={500} height={200} src="/homeimg2.png" />
        </div>

        <div className={`flex justify-center items-center lg:items-start flex-col gap-0 lg:text-5xl text-2xl text-[#502274] font-bold  ${poppins.className} `}>
          <p >Create and customize</p>
          <p>your BitTree in</p>
          <p className="">minutes.</p>
          <p className={`${poppinsReg.className} lg:text-lg text-[17px] my-8 mb-5 text-black text-center lg:text-start`}>Connect your TikTok, Instagram, Twitter, website, store, videos, music, podcast, events and more. It all comes together in a link in bio landing page designed to convert.</p>

          <div>
            <Link href="/generate" ><button className={`${poppinsReg.className} bg-[#502274] text-white text-[16px] p-6 px-16 font-semibold rounded-full my-10 lg:my-0 cursor-pointer`}>Get started for free</button></Link>
          </div>

        </div>
      </section>

      <section className="min-h-screen px-[5vw] bg-[#780016] grid lg:grid-cols-2 pt-20">
        <div className={`flex justify-center items-center lg:items-start  flex-col gap-0 lg:text-6xl text-2xl text-[#e9c0e9] font-bold  ${poppins.className} `}>
          <p className="">Share your BitTree</p>
          <p>from your Instagram,</p>
          <p className="">TikTok, Twitter and</p>
          <p className="">other bios.</p>
          <p className={`${poppinsReg.className} lg:text-lg text-[17px] my-8  text-white text-center lg:text-start`}>Add your unique BitTree URL to all the platforms and places you find your audience. Then use your QR code to drive your offline traffic online.</p>

          <div>
            <Link href="/generate"><button className={`${poppinsReg.className} bg-[#e9c0e9] text-black text-[16px] p-6 px-16  rounded-full cursor-pointer`}>Get started for free</button></Link>
          </div>
        </div>
        <div className=" flex items-center ">
          <Image alt="Home Image 3" className="object-contain lg:mx-10 " width={500} height={200} src="/homeimg3.png" />
        </div>
      </section>

      <section className="min-h-screen px-[5vw] bg-[#e8efd6] grid lg:grid-cols-2 pt-20">
        <div className=" flex items-center  ">
          <Image alt="Home Image" className="object-contain  " width={600} height={200} src="/homeimg4.png" />
        </div>
        <div className={`flex justify-center items-center lg:items-start flex-col gap-0 lg:text-5xl text-3xl text-gray-950 font-bold  ${poppins.className} `}>
          <p className="">Analyze your</p>
          <p>audience and keep</p>
          <p className="">your followers</p>
          <p className="">engaged</p>
          <p className={`${poppinsReg.className} lg:text-lg text-[17px] my-8  text-black text-center lg:text-start`}>Track your engagement over time, monitor revenue and learn what’s converting your audience. Make informed updates on the fly to keep them coming back.</p>

          <div>
            <Link href="/generate"><button className={`${poppinsReg.className} bg-[#e9c0e9] text-black text-[16px] p-6 px-16  rounded-full mb-10 cursor-pointer`}>Get started for free</button></Link>
          </div>
        </div>

      </section>

      <section className="min-h-[110vh] px-[5vw] py-10 bg-[#f3f3f1] grid xl:grid-cols-2 gap-10">
        <div className=" grid grid-rows-2 gap-10">
          <div className="bg-[#e9c0e9] rounded-2xl flex flex-col justify-between items-center lg:py-10 p-8 lg:p-0">
            <Image alt="Home Image" className="object-contain  " width={630} height={200} src="/homeimg5.png" />
            <p className="text-gray-800 lg:px-10 text-3xl font-bold">Share your content in limitless ways on your BitTree.</p>
          </div>
          <div className="bg-[#d2e823] rounded-2xl flex flex-col gap-10 justify-between  items-center lg:py-10 p-8 lg:p-0">
            <Image alt="Home Image" className="object-contain  " width={550} height={200} src="/homeimg6.png" />
            <p className="text-gray-800 lg:px-10 text-3xl font-bold">Sell products and collect payments. It’s monetization made simple.</p>
          </div>
        </div>

        <div className="bg-[#061492] flex flex-col gap-10 justify-between items-center rounded-2xl lg:py-10 p-8 lg:p-0">
          <Image alt="Home Image" className="object-contain  " width={580} height={200} src="/homeimg7.png" />
          <p className="text-white lg:px-10 text-3xl font-bold">Grow, own and engage your audience by unifying them in one place.</p>
        </div>
      </section>

      <section className="bg-[#f3f3f1] py-32 flex flex-col items-center gap-10 '">
        <div className={`${poppins.className} lg:text-6xl text-4xl lg:w-[40vw] text-center text-gray-800`}>The fast, friendly and powerful link in bio tool.</div>
        <Link href="/generate"><button className={`${poppinsReg.className} bg-[#e9c0e9] text-black text-[16px] p-6 px-18 font-bold  rounded-full cursor-pointer`}>Explore all plans</button></Link>

        <div className={`${poppins.className} lg:text-6xl text-4xl mt-40 text-center text-gray-800`}>As featured in...</div>

        <div className="flex justify-center gap-5 w-[70vw] flex-wrap">
          <img className="lg:w-[20vw] p-7 px-20 rounded-4xl bg-white" src="/tc.svg" alt="tc" />
          <img className="lg:w-[20vw] p-7 px-20 rounded-4xl bg-white" src="/insider.svg" alt="insider" />
          <img className="lg:w-[20vw] p-7 px-20 rounded-4xl bg-white" src="/mashable.svg" alt="mashable" />
          <img className="lg:w-[20vw] p-7 px-20 rounded-4xl bg-white" src="/fortune.svg" alt="fortune" />
          <img className="lg:w-[20vw] p-7 px-20 rounded-4xl bg-white" src="/forbes.svg" alt="forbes" />
        </div>

        <div className="flex  flex-col items-center">
          <img className="lg:w-[50vw] w-[90vw] mt-24" src="/youtuber.webp" alt="" />
          <p className={`${poppins.className} lg:text-5xl text-3xl text-gray-900 mt-16 text-center lg:w-[60vw]`}>“BitTree simplifies the process for creators to share multiple parts of themselves in one inclusive link.”</p>
          <p className="text-[#6b6e63] font-semibold lg:text-2xl text-xl mt-16">Riley Lemon,</p>
          <p className="text-[#6b6e63] font-semibold lg:text-2xl text-xl">Youtuber, Content Creator</p>
          <div className="mt-5 flex gap-3">
            <img className="lg:w-12 w-11 opacity-35 p-3 border-1 rounded-xl border-black" src="/rightarrow.svg" alt="" />
            <img className="lg:w-12 w-11 rotate-180 p-3 border-1 rounded-xl border-black" src="/rightarrow.svg" alt="" />
          </div>
        </div>

      </section>

      <section className="min-h-screen bg-[#780016]">

        <h1 className={`${poppins.className} lg:text-6xl text-4xl text-center text-[#e9c0e9] pt-40`}>Got questions?</h1>

        <ul className="lg:w-[65vw] w-[90vw] flex flex-col gap-4 mx-auto mt-16 pb-30">
          <li className="bg-[#51000f] lg:p-12 p-6 lg:text-3xl text-xl rounded-4xl text-[#e9c0e9] flex justify-between items-center">Why do I need a link in bio tool?<img className="invert-100 w-8" src="/downarrow.svg" alt="Down arrow" /></li>
          <li className="bg-[#51000f] lg:p-12 p-6 lg:text-3xl text-xl rounded-4xl text-[#e9c0e9] flex justify-between items-center">Is BitTree the original link in bio tool?<img className="invert-100 w-8" src="/downarrow.svg" alt="Down arrow" /></li>
          <li className="bg-[#51000f] lg:p-12 p-6 lg:text-3xl text-xl rounded-4xl text-[#e9c0e9] flex justify-between items-center">Can you get paid and sell things from a BitTree?<img className="invert-100 w-8" src="/downarrow.svg" alt="Down arrow" /></li>
          <li className="bg-[#51000f] lg:p-12 p-6 lg:text-3xl text-xl rounded-4xl text-[#e9c0e9] flex justify-between items-center">Is BitTree safe to use on all of my social media profiles?<img className="invert-100 w-8" src="/downarrow.svg" alt="Down arrow" /></li>
          <li className="bg-[#51000f] lg:p-12 p-6 lg:text-3xl text-xl rounded-4xl text-[#e9c0e9] flex justify-between items-center">What makes BitTree better than the other link in bio options?<img className="invert-100 w-8" src="/downarrow.svg" alt="Down arrow" /></li>
          <li className="bg-[#51000f] lg:p-12 p-6 lg:text-3xl text-xl rounded-4xl text-[#e9c0e9] flex justify-between items-center">How can I drive more traffic to and through my BitTree?<img className="invert-100 w-8" src="/downarrow.svg" alt="Down arrow" /></li>
          <li className="bg-[#51000f] lg:p-12 p-6 lg:text-3xl text-xl rounded-4xl text-[#e9c0e9] flex justify-between items-center">How many links should I have on my BitTree?<img className="invert-100 w-8" src="/downarrow.svg" alt="Down arrow" /></li>
          <li className="bg-[#51000f] lg:p-12 p-6 lg:text-3xl text-xl rounded-4xl text-[#e9c0e9] flex justify-between items-center">Do I need a website to use BitTree?<img className="invert-100 w-8" src="/downarrow.svg" alt="Down arrow" /></li>
          <li className="bg-[#51000f] lg:p-12 p-6 lg:text-3xl text-xl rounded-4xl text-[#e9c0e9] flex justify-between items-center">Where can I download the app?<img className="invert-100 w-8" src="/downarrow.svg" alt="Down arrow" /></li>
        </ul>

      </section>

    </div>
  );
}
