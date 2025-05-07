import ProductCard from "@/components/ui/ProductCard";
import { products } from "@/data/products";

const ProductPage = () => {
  return (
    <div className="p-10 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-6">สินค้าทั้งหมด</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
