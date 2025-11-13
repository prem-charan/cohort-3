// import { PrismaClient } from "@/app/generated/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/db";

export async function POST(req: NextRequest) {
    const data = await req.json();
    
    await prisma.user.create({
        data: {
            username: data.username,
            password: data.password
        }
    })
    
    return NextResponse.json({
        message: "signup successful"
    })
}