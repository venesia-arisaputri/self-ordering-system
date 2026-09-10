import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";
import supabase from "@/app/lib/supabase";

export async function GET() {
  const products = await prisma.product.findMany();

  return NextResponse.json(products);
}

export async function POST(request: Request) {
  const formData = await request.formData();

  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const price = Number(formData.get("price"));
  const image = formData.get("image");

  if (!(image instanceof File)) {
    return NextResponse.json(
      { error: "Image harus berupa file" },
      { status: 400 },
    );
  }

  if (!name || !description || price === null || !image) {
    return NextResponse.json({ error: "Data tidak lengkap" }, { status: 400 });
  }

  if (typeof price !== "number" || price < 0) {
    return NextResponse.json(
      { error: "Price harus berupa angka dan lebih dari 0" },
      { status: 400 },
    );
  }

  const fileName = `${Date.now()}-${image.name}`;

  const { error } = await supabase.storage
    .from("product-image")
    .upload(fileName, image);

  if (error) {
    console.log(error);
    return NextResponse.json({ error: "Gagal upload image" }, { status: 500 });
  }

  const product = await prisma.product.create({
    data: {
      name: name,
      description: description,
      price: price,
      image: fileName,
    },
  });

  return NextResponse.json(product);
}

export async function DELETE(request: Request) {
  const body = await request.json();

  const product = await prisma.product.findUnique({
    where: {
      id: body.id,
    },
  });

  if (!product) {
    return NextResponse.json({ error: "Id tidak ditemukan" });
  }

  await supabase.storage.from("product-image").remove([product.image!]);

  await prisma.product.delete({
    where: {
      id: product.id,
    },
  });

  return NextResponse.json(product);
}
