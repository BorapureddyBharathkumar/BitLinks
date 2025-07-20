import clientPromise from "@/lib/mongodb"
import { auth } from "@clerk/nextjs/server";


export async function POST(request) {
    const userId = auth()
    const body = await request.json()
    const client = await clientPromise;
    const db =client.db("bitlinks")
    const  collection =db.collection("url")

    
 const doc = await collection.findOne({shorturl: body.shorturl})
    if(doc){
        return Response.json({success: false, error: true,  message: 'URL already exists!' })
    }

    const result = await collection.insertOne({
        url: body.url,
        shorturl: body.shorturl,
        userId: body.userId
    })



  return Response.json({sucess : true ,error: false, message: 'URL Generated Sucessfully' })
}