"use client";

import { useState, useEffect } from "react";

export default function Menu() {
  type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    image: string;
    isAvailable: boolean;
    createdAt: Date;
    updatedAt: Date;
  };

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState("");
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  async function addProduct() {
    const request = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        description: description,
        price: Number(price),
        stock: Number(stock),
        image: image,
      }),
    });
    const data = await request.json();
    setProducts((prev) => [...prev, data]);
  }

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="nama"
          className="border-1"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="description"
          className="border-1"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="price"
          className="border-1"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="stock"
          className="border-1"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />
        <input
          type="text"
          placeholder="image"
          className="border-1"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button className="bg-green-600" onClick={addProduct}>
          Add Product
        </button>
      </div>
      <div className="flex gap-8">
        {products.map((product) => (
          <div key={product.id}>
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p>{product.stock}</p>
            <p>{product.isAvailable}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
