import clientPromise from "@/lib/mongodb"

export async function POST(request) {

    const body=await request.json()
    const client=await clientPromise;
    const db=client.db("BitTree")
    const collection =db.collection("links")

    // Check if the shorturl exists
    const link=await collection.findOne({handle: body.handle})
    if(link){
        return Response.json({success:false, error:true, message:"🚫 User already exists"})
    }

    const result=await collection.insertOne({
        handle:body.handle,
        links:body.links,
        PhotoUrl:body.PhotoUrl,
        Description:body.Description,
        theme:body.theme
    })

    return Response.json({success:true,error:false,message:"BitTree Generated Successfully"})
}