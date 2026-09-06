"use client";

import { useEffect, useState } from "react";
import { Product } from "../types/product";
import Header from "../components/Header";
import MenuGrid from "../components/MenuGrid";
import OrderSummary from "../components/OrderSummary";

export default function Order() {
  const [order, setOrder] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  function checkout() {
    fetch("/api/ordered");
    setOrder([]);
  }
  function addOrder(product: Product) {
    setOrder((prev) => [...prev, product]);
  }

  return (
    <div className="bg-[#606C38] w-full px-8 sm:px-16 xl:px-30">
      <div className="sticky top-8 z-50 flex justify-center">
        <Header />
      </div>

      <section className="text-[#FEFAE0] text-center mt-16 mb-10">
        <p className="font-lora font-[700] text-[clamp(32px,4.44vw,64px)]">
          Your Comfort, Ready to Order.
        </p>
        <p className="font-lato font-[300] text-[clamp(14px,1.39vw,20px)] leading-tight mt-6">
          Explore our selection of slow-brewed drinks and cozy bites. Pick your
          favorites, and let us prepare a<br />
          moment of calm just for you.
        </p>
      </section>

      <section className="flex bg-[#FEFAE0] gap-6 py-8">
        <MenuGrid products={products} addOrder={addOrder} />
        <OrderSummary order={order} checkout={checkout} />
      </section>
    </div>
  );
}
