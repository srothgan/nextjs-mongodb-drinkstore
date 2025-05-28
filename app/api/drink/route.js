import connectMongoDB from "@/lib/mongodb";
import Drink from "@/models/drink";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { category, brand, kind, size, price,  alcohol, origin, status } = await request.json();
    
    await connectMongoDB();
    await Drink.create({ category, brand, kind, size, price, alcohol, origin, status });
    return NextResponse.json({ message: "Drink Created" }, { status: 201 });
  }
  export async function GET() {
    await connectMongoDB();
    const drinks = await Drink.find();
    return NextResponse.json({ drinks });
  }
  export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Drink.findByIdAndDelete(id);
    return NextResponse.json({ message: "Drink deleted" }, { status: 200 });
  }
  