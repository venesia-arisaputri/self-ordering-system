import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/app/lib/prisma";

export async function POST(request: Request) {
  const { username, password } = await request.json();

  const admin = await prisma.admin.findUnique({
    where: {
      username,
    },
  });

  if (!admin) {
    return NextResponse.json(
      { message: "Username atau Password salah" },
      { status: 401 },
    );
  }

  const passwordMatch = await bcrypt.compare(password, admin.password);

  if (!passwordMatch) {
    return NextResponse.json(
      { message: "Username atau Password salah" },
      { status: 401 },
    );
  }

  const response = NextResponse.json({
    message: "Login berhasil",
  });

  response.cookies.set("admin_session", "true", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 10,
    path: "/",
  });

  return response;
}
