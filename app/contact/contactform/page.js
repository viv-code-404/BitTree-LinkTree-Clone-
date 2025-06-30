"use client"
import { useState } from 'react'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { toast } from 'react-toastify'
import { ToastContainer } from 'react-toastify'
import localFont from "next/font/local"



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

    const [contactform, setcontactform] = useState({ name: "", email: "", subject: "", message: "" })

    useEffect(() => {
        document.title = "Contact us : BitTree"
    }, [])

    const handleChange = (e) => {
        setcontactform({ ...contactform, [e.target.name]: e.target.value })
    }

    const send = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "name": contactform.name,
            "email": contactform.email,
            "subject": contactform.subject,
            "message": contactform.message
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        }

        fetch("/api/send", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log(result)
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
            })
            .catch((error) => console.error(error))

        setcontactform({ name: "", email: "", subject: "", message: "" })
    }

    return (
        <div className='bg-[#f3f3f1] '>
            <section className='grid lg:grid-cols-2  min-h-screen'>
                <div className='bg-[#eac1ea] h-full flex items-center justify-center lg:pt-10 pt-36'>
                    <Image className='object-contain object-bottom ' width={500} height={500} src="/homeimg2.png" alt="Banner" />
                </div>
                <div className={` bg-[#eac1ea] ${poppins.className} flex justify-center  flex-col gap-0 lg:text-7xl text-4xl text-white font-bold   px-[5vw]`}>
                    {/* {searchparams && <div className='text-3xl font-bold mb-5  '>Welcome, <span className='text-[#c2d816]'>{searchparams.get('handle')}</span></div>} */}
                    <p className="">Contact your</p>
                    <p className='text-[#d98f93]'>BitTree. In one,</p>
                    <p className="">simple go .</p>
                    <p className={`text-[15px] text-[#fffffe] lg:mt-5 my-10 ${poppinsReg.className}`}>Just Scroll and Start getting in touch with BitTree...</p>
                </div>
            </section>

            <div className='grid lg:grid-cols-2 lg:gap-5 min-h-screen'>
                <div className=' flex flex-col justify-center gap-1 lg:px-[5vw] px-8 lg:m-5 lg:mr-0  lg:rounded-2xl lg:shadow-2xl  bg-[#d98f93]'>
                    <h2 className='text-gray-200 text-center lg:text-3xl text-2xl mt-10 font-bold'>Get in Touch</h2>
                    <p className='text-center text-gray-300 text-[15px] lg:text-base px-5'>Questions, Bug reports, Feedback, Feature requests - We are here for it all.</p>
                    <p className='text-center text-gray-300  text-[15px] lg:text-base'>Feel free to get in touch !</p>

                    <div className=' flex flex-col justify-center gap-8 mt-20 text-gray-300'>


                        <div className='flex lg:flex-row flex-col gap-10 '>

                            <div className='flex lg:w-1/2 flex-col gap-1'>
                                <label className='text-gray-300' htmlFor="name">Your Name</label>
                                <input onChange={(e) => handleChange(e)} type="text" name="name" value={contactform.name} id="" className=' outline-none border-b-1 p-1 ' placeholder='Enter your name' required />
                            </div>
                            <div className='flex lg:w-1/2 flex-col gap-1'>
                                <label className='text-gray-300' htmlFor="email">Your Email</label>
                                <input onChange={(e) => handleChange(e)} type="text" name="email" value={contactform.email} id="" className='outline-none border-b-1 p-1 ' placeholder='Enter your email' required />
                            </div>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label className='text-gray-300' htmlFor="subject">Your Subject</label>
                            <select onChange={(e) => handleChange(e)} className='outline-none border-b-1 p-1 px-2 ' name="subject" value={contactform.subject} id="" required>
                                <option value="Question">Question</option>
                                <option value="Bug">Bug Report</option>
                                <option value="Feedback">Feedback</option>
                                <option value="Requests">Features Request</option>
                            </select>
                        </div>

                        <div className='flex flex-col gap-1'>
                            <label className='text-gray-300' htmlFor="message">Your Message</label>
                            <textarea onChange={(e) => handleChange(e)} className='outline-none border-b-1 p-1' name="message" value={contactform.message} id="" placeholder='Write your message here' required></textarea>
                        </div>

                        <button onClick={() => { send() }} className='bg-[#de6c72bd] text-center text-white p-2 hover:bg-[#de6c72] cursor-pointer disabled:bg-[#de6c7177] disabled:cursor-not-allowed mb-20 lg:mb-0' disabled={contactform.name.length < 3 || contactform.email.length < 10 || contactform.subject.length < 3 || contactform.message.length < 5}>Send your request</button>
                    </div>
                </div>

                <div className='bg-[#254f1a] lg:mx-[5vw] flex items-center justify-center lg:m-5 lg:rounded-2xl'>
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
                    <Image src="/contactimg.png" className='lg:mt-20 m-10 lg:m-0' width={500} height={500} alt="Contact Poster" />
                </div>
            </div>
        </div>

    )
}

export default page