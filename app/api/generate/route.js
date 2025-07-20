import clientPromise from "@/lib/mongodb";
import { auth } from "@clerk/nextjs/server";

export async function POST(request) {
  try {
    const { userId } = await auth(); // ✅ FIXED: await added
    const body = await request.json();

    const client = await clientPromise;
    const db = client.db("bitlinks");
    const collection = db.collection("url");

    const existing = await collection.findOne({ shorturl: body.shorturl });
    if (existing) {
      return Response.json({
        success: false,
        error: true,
        message: "URL already exists!",
      });
    }

    const result = await collection.insertOne({
      url: body.url,
      shorturl: body.shorturl,
      userId: userId || body.userId, // fallback if needed
    });

    return Response.json({
      success: true,
      error: false,
      message: "URL Generated Successfully",
    });

  } catch (error) {
    console.error("API Error in /generate:", error); // log for Vercel
    return Response.json(
      { success: false, error: true, message: "Server Error" },
      { status: 500 }
    );
  }
}
