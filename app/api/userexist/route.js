import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(request) {
    try{
        const {  email } = await request.json();
        await connectMongoDB();
        const user =await User.findOne({email}).select('_id')
        return NextResponse.json({user})
    }catch(error){
        console.log(error)
    }
    
  }
  