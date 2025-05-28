import connectMongoDB from "@/lib/mongodb";
import Newsletter from "@/models/newsletter";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { email, datenverify } = await request.json();
    await connectMongoDB();
    await Newsletter.create({ email, datenverify });
    return NextResponse.json({ message: "Newsletter Entry Created" }, { status: 201 });
  }
  export async function GET() {
    await connectMongoDB();
    const newsletter = await Newsletter.find();
    return NextResponse.json({ newsletter });
  }
  export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Newsletter.findByIdAndDelete(id);
    return NextResponse.json({ message: "Newsletter E-Mail deleted" }, { status: 200 });
  }