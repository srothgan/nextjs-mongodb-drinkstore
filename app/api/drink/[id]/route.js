import connectMongoDB from "@/lib/mongodb";
import Drink from "@/models/drink";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const drink = await Drink.findOne({ _id: id });
    return NextResponse.json({ drink }, { status: 200 });
  }

  export async function PUT(request, { params }) {
    const { id } = params;
    const { newCategory:category, newBrand : brand, newKind:kind, newSize : size, newPrice:price, newAlcohol:alcohol, newOrigin : origin, newStatus : status} = await request.json();
    await connectMongoDB();
    await Drink.findByIdAndUpdate(id, { category , brand, kind, size, price, alcohol, origin, status});
    return NextResponse.json({ message: "Drink updated" }, { status: 200 });
  }