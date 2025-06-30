"use client"
import React from 'react'
import Image from 'next/image'
import localFont from "next/font/local"
import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { ToastContainer } from 'react-toastify'
import { toast } from 'react-toastify'



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



const page = () => {

    const router = useRouter()
    const searchparams = useSearchParams()
    const [links, setlinks] = useState([{ link: "", linkText: "" }])
    const [linkform, setlinkform] = useState({ handle: searchparams.get('handle'), dpurl: "", desc: "" ,theme:searchparams.get('theme')})


    const generate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "handle": linkform.handle,
            "links": links,
            "PhotoUrl": linkform.dpurl,
            "Description": linkform.desc,
            "theme":linkform.theme
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        }

        let res = fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log(result)
                // alert(result.message)
                toast.success(result.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                router.push(`/${linkform.handle}`)
            })
            .catch((error) => console.error(error))


        setlinkform({ handle: "", dpurl: "", desc: "",theme:"" })
        setlinks([{ link: "", linkText: "" }])
    }

    const handlelinks = (index, link, linkText) => {
        setlinks((initialLinks) => {
            return initialLinks.map((item, i) => {
                if (i === index) {
                    return { link, linkText }
                }
                else {
                    return item
                }
            })
        })
    }



    const handleChange = (e) => {
        setlinkform({ ...linkform, [e.target.name]: e.target.value })
    }

    const addLinks = () => {
        setlinks(links.concat([{ link: "", linkText: "" }]))
    }

    return (
        <div className='bg-[#225ac0]'>
            <section className='grid lg:grid-cols-2  min-h-screen'>
                <div className={` bg-[#225ac0] flex justify-center  flex-col gap-0 lg:text-7xl text-5xl text-white font-bold  ${poppins.className} lg:px-[5vw] px-3 mt-44 lg:mt-0`}>
                    {searchparams && <div className='text-3xl font-bold mb-5  '>Welcome, <span className='text-[#c2d816]'>{searchparams.get('handle')}</span></div>}
                    <p className="">Unify your</p>
                    <p className='text-[#c2d816]'>all. In one,</p>
                    <p className="">simple link in bio.</p>
                    <p className={`lg:text-lg text-[14px] text-[#c2d816] mt-5 ${poppinsReg.className}`}>Just Scroll and Start creating your own BitTree...</p>
                </div>
                <div className='bg-[#225ac0] flex justify-center max-[600px]:h-[50vh]'>
                    <Image className='object-contain ' width={500} height={500} src="/banner.webp" alt="Banner" />
                </div>
            </section>

            <section className='min-h-screen bg-[#bf0640] grid lg:grid-cols-2'>

                <div className=' text-white lg:px-[5vw] px-8'>
                    <h1 className={`${poppins.className} lg:text-5xl text-3xl text-center  text-white lg:pt-32 pt-20`}>Create your <span className='text-[#d1e823]'>BitTree</span></h1>

                    <div className='flex flex-col items-start lg:mt-24 mt-14'>
                        <h1 className={`${poppinsReg.className} text-xl text-start`}>Step 1 : <div className='text-[#d1e823] text-2xl'>Claim your Handle</div></h1>
                        <h1 className={`${poppinsReg.className} mx-4 text-[12px] text-start flex`}>Note : <div className='text-[#d1e823] text-[12px]'> 🚫Space is not allowed.</div></h1>
                        <input onChange={(e) => handleChange(e)} className=' mt-10 border-b-1 p-2 rounded-full outline-none  px-10' type="text" placeholder='Choose your handle' value={linkform.handle || ""} name="handle" id="" />
                    </div>

                    <div className='flex flex-col items-end mt-14'>
                        <h1 className={`${poppinsReg.className} text-xl text-end`}>Step 2 : <div className='text-[#d1e823] text-2xl'>Add Links</div></h1>
                        {links && links.map((item, index) => {
                            return <div key={index} className='mt-10 max-[600px]:w-full flex lg:items-center justify-between  lg:gap-20 md:gap-10'>
                                {index + 1}.
                                <div className='flex flex-col lg:flex-row gap-8'>
                                    <input onChange={(e) => handlelinks(index, item.link, e.target.value)} className='lg:w-1/2 border-b-1 p-2 rounded-full outline-none px-10' type="text" placeholder='Enter Link Text' value={item.linkText} name="link" id="" />
                                    <input onChange={(e) => handlelinks(index, e.target.value, item.linkText)} className='lg:w-1/2  border-b-1 p-2 rounded-full outline-none px-10' type="text" placeholder='Enter Link' value={item.link} name="linkText" id="" />
                                </div>
                            </div>
                        })}
                        <button onClick={() => addLinks()} className='bg-[#d1e823] border-x-1 border-gray-300 hover:bg-[#d1e823f0] text-gray-700 font-bold   disabled:text-gray-300 hover:text-white p-2 px-5 mt-5 rounded-full cursor-pointer disabled:bg-[#75222224] disabled:cursor-not-allowed' disabled={links[links.length - 1].link == "" || links[links.length - 1].linkText == ""}>➕ Add Links</button>
                    </div>

                    <div className='flex flex-col items-start mt-14'>
                        <h1 className={`${poppinsReg.className} text-xl text-start`}>Step 3 : <div className='text-[#d1e823] text-2xl'>Add Picture and Description</div></h1>
                        <input onChange={(e) => handleChange(e)} className=' mt-10 border-b-1 p-2 rounded-full outline-none px-10' type="text" placeholder='Paste link of your picture' value={linkform.dpurl} name="dpurl" id="" />
                        <input onChange={(e) => handleChange(e)} className=' mt-10 border-b-1 p-2 rounded-full outline-none px-10' type="text" placeholder='Enter description' value={linkform.desc} name="desc" id="" />
                    </div>

                    <div className='flex flex-col items-end mt-14'>
                        <h1 className={`${poppinsReg.className} text-xl text-end`}>Step 4 : <div className='text-[#d1e823] text-2xl'>Select Theme</div></h1>
                        <select onChange={(e) => handleChange(e)} className=' mt-10 border-b-1 p-2 rounded-full outline-none px-10' value={linkform.theme||""} name="theme" id="">
                            <option className='text-gray-500' value="default">Default</option>
                            <option className='text-gray-500' value="light">Light</option>
                            <option className='text-gray-500' value="dark">Dark</option>
                            <option className='text-gray-500' value="aqua">Aqua</option>
                            <option className='text-gray-500' value="aesthetic">Aesthetic</option>
                            <option className='text-gray-500' value="yellow">Mustard Yellow</option>
                            <option className='text-gray-500' value="cool">Cool</option>
                            <option className='text-gray-500' value="purple">Light Purple</option>
                        </select>
                        {/* <input onChange={(e) => handleChange(e)} className=' mt-10 border-b-1 p-2 rounded-full outline-none px-10' type="text" placeholder='Paste link of your picture' value={linkform.dpurl} name="dpurl" id="" />
                        <input onChange={(e) => handleChange(e)} className=' mt-10 border-b-1 p-2 rounded-full outline-none px-10' type="text" placeholder='Enter description' value={linkform.desc} name="desc" id="" /> */}
                    </div>

                    <button disabled={linkform.handle < 5 || linkform.dpurl.length < 10 || links[links.length - 1].link == "" || links[links.length - 1].linkText == ""||linkform.handle.includes(" ")} onClick={() => generate()} className='disabled:bg-[#75222224] font-bold bg-[#d1e823] disabled:cursor-not-allowed w-full border-y-1 border-gray-300 hover:bg-[#d1e823f0] text-gray-700  disabled:text-gray-300 hover:text-white p-2 px-5 mt-20 rounded-full cursor-pointer mb-36 flex justify-center'>
                        Create your <span className=' mx-2' >BitTree</span>
                        <img src="/tree.svg" alt="tree" />
                    </button>

                </div>

                <div className='flex items-center justify-center p-3 lg:p-0 mb-20 lg:mb-0'>
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick={false}
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="colored"
                    />
                    <Image src="/homeimg7.png" width={500} height={500} alt="edit" />
                </div>
            </section>
        </div>
    )
}

export default page
