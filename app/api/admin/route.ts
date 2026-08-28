import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  const { username, password } = await request.json();

  const hashedPassword = await bcrypt.hash(password, 10);

  const admin = await prisma.admin.create({
    data: {
      username,
      password: hashedPassword,
    },
  });

  return NextResponse.json({
    message: "Admin berhasil dibuat",
    admin: { username: admin.username },
  });
}
