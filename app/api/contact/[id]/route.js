import connectMongoDB from "@/lib/mongodb";
import Contact from "@/models/contact";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const contact = await Contact.findOne({ _id: id });
    return NextResponse.json({ contact }, { status: 200 });
  }