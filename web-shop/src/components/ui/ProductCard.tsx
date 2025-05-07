import { Card, CardContent } from "@/components/ui/card";
import React from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <Card className="w-full max-w-xs shadow-lg">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <CardContent className="p-4">
        <h2 className="text-lg font-bold">{product.name}</h2>
        <p className="text-gray-600">฿{product.price.toLocaleString()}</p>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
