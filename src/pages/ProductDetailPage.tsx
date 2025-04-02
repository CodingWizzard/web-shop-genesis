
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChevronLeft } from "lucide-react";
import { Product } from "@/types";
import apiService from "@/services/api";
import ProductGallery from "@/components/ProductGallery";
import QuantityInput from "@/components/QuantityInput";
import { formatCurrency } from "@/lib/utils";
import { useCart } from "@/contexts/CartContext";

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;
      
      try {
        setIsLoading(true);
        const productData = await apiService.getProductById(id);
        if (productData) {
          setProduct(productData);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addItem(product, quantity);
    }
  };

  if (isLoading) {
    return (
      <div className="container py-8">
        <div className="animate-pulse">
          <div className="h-6 w-32 bg-muted rounded mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-square bg-muted rounded"></div>
            <div className="space-y-4">
              <div className="h-8 w-3/4 bg-muted rounded"></div>
              <div className="h-4 w-1/3 bg-muted rounded"></div>
              <div className="h-4 w-1/2 bg-muted rounded"></div>
              <div className="h-32 w-full bg-muted rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <p className="mb-6">The product you're looking for does not exist or has been removed.</p>
        <Button asChild>
          <Link to="/products">Browse Products</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <Link to="/products" className="inline-flex items-center mb-6 text-muted-foreground hover:text-foreground transition-colors">
        <ChevronLeft className="h-4 w-4 mr-1" /> Back to Products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
        <ProductGallery images={product.images} name={product.name} />

        <div>
          <div className="mb-2">
            <span className="category-badge">{product.category.replace("_", " ")}</span>
          </div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          
          <div className="flex items-center mb-4">
            <div className="text-muted-foreground flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={i < Math.floor(product.rating) ? "text-yellow-500" : "text-gray-300"}>
                  ★
                </span>
              ))}
              <span className="ml-1">({product.rating})</span>
            </div>
            <Separator orientation="vertical" className="mx-3 h-4" />
            <div className="text-muted-foreground text-sm">
              {product.stock > 0 ? (
                <span className="text-green-600">
                  In Stock ({product.stock} available)
                </span>
              ) : (
                <span className="text-red-500">Out of Stock</span>
              )}
            </div>
          </div>
          
          <div className="text-2xl font-bold mb-6">{formatCurrency(product.price)}</div>
          
          <div className="prose max-w-none mb-8">
            <p>{product.description}</p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="font-medium">Quantity:</div>
              <QuantityInput 
                quantity={quantity} 
                onChange={setQuantity} 
                max={product.stock}
              />
            </div>
            
            <div className="flex flex-col xs:flex-row gap-4">
              <Button 
                size="lg" 
                className="flex-1" 
                onClick={handleAddToCart}
                disabled={product.stock === 0}
              >
                Add to Cart
              </Button>
              <Button size="lg" variant="secondary" className="flex-1">
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
