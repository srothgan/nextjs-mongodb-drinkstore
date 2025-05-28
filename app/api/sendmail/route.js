const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
import { NextResponse } from "next/server";

export async function POST(request) {
    const { email, reference, message } = await request.json();
    const msg = {
    to: email, // Change to your recipient
    from: 'simonrothgang@gmail.com', // Change to your verified sender
    subject: reference,
    html: message,
    }
    try{
        await sgMail.send(msg);

        return NextResponse.json({ message: "Email sent" }, { status: 201 });
    }catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }
}