import connectMongoDB from "@/lib/mongodb";
import Newsletter from "@/models/newsletter";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newEmail: email} = await request.json();
  await connectMongoDB();
  await Newsletter.findByIdAndUpdate(id, { email });
  return NextResponse.json({ message: "Topic updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const contact = await Newsletter.findOne({ _id: id });
  return NextResponse.json({ contact }, { status: 200 });
}