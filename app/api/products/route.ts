import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

export async function GET() {
  const products = await prisma.product.findMany();

  return NextResponse.json(products);
}

export async function POST(request: Request) {
  const body = await request.json();

  if (
    !body.name ||
    !body.description ||
    body.price == null ||
    body.stock == null ||
    !body.image
  ) {
    return NextResponse.json({ error: "Data tidak lengkap" }, { status: 400 });
  }

  if (typeof body.price !== "number" || body.price < 0) {
    return NextResponse.json(
      { error: "Price harus berupa angka dan lebih dari 0" },
      { status: 400 },
    );
  }

  if (typeof body.stock !== "number" || body.stock < 0) {
    return NextResponse.json({ error: "Stock tidak valid" }, { status: 400 });
  }

  const product = await prisma.product.create({
    data: {
      name: body.name,
      description: body.description,
      price: body.price,
      stock: body.stock,
      image: body.image,
    },
  });

  return NextResponse.json(product);
}
