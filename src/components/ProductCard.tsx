
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Product } from "@/types";
import { formatCurrency } from "@/lib/utils";
import { useCart } from "@/contexts/CartContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 1);
  };

  return (
    <Card className="overflow-hidden h-full flex flex-col transition-all duration-200 hover:shadow-md">
      <Link to={`/product/${product.id}`} className="h-full flex flex-col">
        <div className="aspect-square overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="h-full w-full object-cover transition-all duration-300 hover:scale-105"
          />
        </div>
        <CardContent className="flex-grow p-4">
          <div className="mb-2">
            <span className="category-badge">{product.category.replace("_", " ")}</span>
          </div>
          <h3 className="font-medium text-lg line-clamp-1">{product.name}</h3>
          <div className="mt-2 flex items-center">
            <div className="text-sm text-muted-foreground flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={i < Math.floor(product.rating) ? "text-yellow-500" : "text-gray-300"}>
                  ★
                </span>
              ))}
              <span className="ml-1">({product.rating})</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex justify-between items-center">
          <div className="font-bold">{formatCurrency(product.price)}</div>
          <Button 
            size="sm" 
            onClick={handleAddToCart}
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add
          </Button>
        </CardFooter>
      </Link>
    </Card>
  );
};

export default ProductCard;
