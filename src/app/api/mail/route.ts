import { generateEmailTemplate } from "@/templates/emailTemplate";
import { sendEmail } from "@/utils/nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // Get Data
    const { email, name, phone, message, projectType } = await req.json();
    // Validation
    if (!email || !name || !projectType) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    await sendEmail(
      email,
      "New Client Arrived",
      generateEmailTemplate({ name, email, phone, message, projectType })
    );

    return NextResponse.json(
      { message: "Email Successfully Sended" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Internal server issue" }, { status: 500 });
  }
}
