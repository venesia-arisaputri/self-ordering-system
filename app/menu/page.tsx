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
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
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
  );
}
