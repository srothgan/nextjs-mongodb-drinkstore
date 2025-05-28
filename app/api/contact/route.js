import connectMongoDB from "@/lib/mongodb";
import Contact from "@/models/contact";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { name, email, reference, message,datenverify } = await request.json();
    await connectMongoDB();
    await Contact.create({ name, email, reference, message,datenverify });
    return NextResponse.json({ message: "Contact Created" }, { status: 201 });
  }
  export async function GET() {
    await connectMongoDB();
    const contacts = await Contact.find();
    return NextResponse.json({ contacts });
  }
  export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Contact.findByIdAndDelete(id);
    return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
  }
  