import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");

  if (!userId) {
    return NextResponse.json({
      success: false,
      error: true,
      message: "Missing userId in query",
    });
  }

  try {
    const client = await clientPromise;
    const db = client.db("bitlinks"); 
    const collection = db.collection("url");

    const urls = await collection.find({ userId: userId }).toArray();

    return NextResponse.json({
      success: true,
      error: false,
      urls,
    });
  } catch (err) {
    return NextResponse.json({
      success: false,
      error: true,
      message: err.message,
    });
  }
}
