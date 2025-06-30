import clientPromise from "@/lib/mongodb";
import Link from "next/link"
import { notFound } from "next/navigation";


export default async function Page({ params }) {
    const handle = (await params).handle

    const client = await clientPromise;
    const db = client.db("BitTree")
    const collection = db.collection("links")
    const item = await collection.findOne({ handle: handle });

    if (!item) {
        return notFound()
    }


    return <div className={`relative ${item.theme==="light"?"bg-white" :""|| item.theme==="dark"? "bg-black":""|| item.theme==="cool"?"bg-[#04034ddd] ":"" ||item.theme==="yellow"?"bg-[#9f9006] ":"" ||item.theme==="purple"?"bg-[#9f0690] ":""||item.theme==="aqua"?"bg-[#0789a0e3]":"bg-[#2e052b]"} `}  >
        <div className="bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] w-full h-[100vh] text-white lg:p-20 py-20 ">

            <div className={`flex items-center  flex-col pt-10 shadow-lg shadow-red-200 text-white border-2 ${item.theme==="yellow"?"border-gray-200":""||item.theme==="purple"?"border-gray-200":""||item.theme==="aqua"?"border-gray-300":"text-gray-500"}  lg:w-[50vw]  lg:mx-auto min-h-[80vh] mx-5 rounded-2xl relative`}>
                <div className="border-2 rounded-full absolute top-[-50px] shadow-lg shadow-white">
                    <img className="w-24 rounded-full " src={item.PhotoUrl} alt="" />
                </div>
                <div className={`mt-5 font-bold ${item.theme==="light"?"text-gray-800":"text-gray-300"} `}>@ {item.handle}</div>
                <div className={`lg:w-[25vw] ${item.theme==="purple"?"text-gray-400":""||item.theme==="yellow"?"text-gray-300":""||item.theme==="aqua"?"text-gray-300":"text-gray-500"} mt-1 mb-6 mx-10 lg:mx-0 text-center text-[15px] lg:h-20 overflow-auto`}>{item.Description}</div>

                {item.links.map((item, index) => {
                    return <Link key={index} target="_blank" className={`lg:w-[35vw] w-[75vw] lg:hover:w-[36vw] hover:w-[76vw] shadow-md shadow-gray-400 hover:shadow-white bg-[#fb91b85b]  hover:bg-[#fb91b8] hover:text-white  p-4 mt-3 text-gray-900 m-3  text-center`} href={item.link}><div >{item.linkText}</div></Link>
                })}

            </div>

            <div className={`flex flex-col lg:flex-row lg:justify-between items-center mt-5 text-[14px] ${item.theme==="yellow"?"text-gray-300":""||item.theme==="purple"?"text-gray-400":""||item.theme==="aqua"?"text-gray-400":"text-gray-500"}  gap-1`}>
                <Link href="/"><button className="border-1 p-2 rounded-full px-5 cursor-pointer   hover:text-white flex gap-1"><img className="w-4 invert-50" src="/leftArrow.svg" alt="" />Back to Bittree</button></Link>
                <div className="flex items-center gap-3">
                    <div className=" text-[14px]">Now you can share your BitTree...</div>
                    {/* <button className="border-1 p-2 rounded-full px-5 cursor-pointer text-gray-500  hover:text-white">Copy</button> */}
                </div>
            </div>
        </div>
    </div>
}