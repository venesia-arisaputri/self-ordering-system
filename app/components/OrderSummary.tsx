import { Product } from "../types/product";

interface OrderSummaryProps {
  order: Product[];
  checkout: () => void;
}

export default function OrderSummary({ order, checkout }: OrderSummaryProps) {
  return (
    <div className="w-1/3">
      {order.map((ordered, index) => (
        <span key={index}>{ordered.name} </span>
      ))}
      <button className="bg-green-400 p-4" onClick={checkout}>
        Checkout Now
      </button>
    </div>
  );
}
