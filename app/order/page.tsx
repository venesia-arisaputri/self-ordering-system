"use client";

import { useEffect, useState } from "react";
import { Product } from "../types/product";

export default function Order() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="p-24">
      <div className="grid grid-cols-5 gap-14">
        {products.map((product) => (
          <div
            className="border-1 border-[#BC6C25] py-2 px-4 flex flex-col rounded-xl"
            key={product.id}
          >
            <p>{product.name}</p>
            <p>{product.price}</p>
            <button className="bg-[#BC6C25] font-lato rounded-lg text-[#FEFAE0]">
              + ADD TO ORDER
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
