"use client";

import { useState, useEffect } from "react";
import { Product } from "../types/product";

export default function Menu() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  async function addProduct() {
    const response = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        description: description,
        price: Number(price),
        image: image,
      }),
    });
    if (response.ok) {
      const data = await response.json();
      setProducts((prev) => [...prev, data]);
    } else {
      const data = await response.json();
      setError(true);
      setErrorMessage(data.error);
    }
  }

  async function deleteProduct(id: number) {
    const response = await fetch("/api/products", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: id,
      }),
    });

    if (response.ok) {
      setProducts((prev) => prev.filter((products) => products.id !== id));
    }
  }

  return (
    <div>
      <div className="w-full flex justify-center mt-14 gap-4">
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
          placeholder="image"
          className="border-1"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button className="bg-green-600" onClick={addProduct}>
          Add Product
        </button>
      </div>
      <div className="flex gap-8 grid grid-cols-5 mx-24 mt-24">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center justify-center border-1"
          >
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p>{product.stock}</p>
            <p>{product.isAvailable}</p>
            <button onClick={() => deleteProduct(product.id)}>-</button>
          </div>
        ))}
      </div>
      {error && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="rounded-lg bg-white p-6">
            <h2 className="text-xl font-bold">Error</h2>
            <p>{errorMessage}</p>
            <button
              onClick={() => setError(false)}
              className="mt-4 rounded bg-red-500 px-4 py-2 text-white"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
