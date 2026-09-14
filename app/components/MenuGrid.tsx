import { Product } from "../types/product";

interface MenuGridProps {
  products: Product[];
  addOrder: (product: Product) => void;
}

export default function MenuGrid({ products, addOrder }: MenuGridProps) {
  return (
    <div className="w-2/3 grid grid-cols-5 gap-6">
      {products.map((product) => (
        <div
          className="border-1 border-[#BC6C25] py-2 px-4 flex flex-col rounded-xl"
          key={product.id}
        >
          <p>{product.name}</p>
          <p>{product.price}</p>
          <button
            className="bg-[#BC6C25] font-lato rounded-lg text-[#FEFAE0]"
            onClick={() => addOrder(product)}
          >
            + ADD TO ORDER
          </button>
        </div>
      ))}
    </div>
  );
}
