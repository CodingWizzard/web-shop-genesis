
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { Product, Category } from "@/types";
import apiService from "@/services/api";

const CategoryDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [category, setCategory] = useState<Category | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;
      
      try {
        setIsLoading(true);
        const categoryData = await apiService.getCategoryById(id);
        
        if (categoryData) {
          setCategory(categoryData);
          const productsData = await apiService.getProductsByCategory(categoryData.name.toLowerCase());
          setProducts(productsData);
        }
      } catch (error) {
        console.error("Error fetching category data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (isLoading) {
    return (
      <div className="container py-8">
        <div className="animate-pulse">
          <div className="h-6 w-32 bg-muted rounded mb-4"></div>
          <div className="h-10 w-3/4 bg-muted rounded mb-8"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="rounded-lg bg-muted h-[300px]"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!category) {
    return (
      <div className="container py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Category Not Found</h1>
        <p className="mb-6">The category you're looking for does not exist or has been removed.</p>
        <Button asChild>
          <Link to="/categories">Browse Categories</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <Link to="/categories" className="inline-flex items-center mb-6 text-muted-foreground hover:text-foreground transition-colors">
        <ChevronLeft className="h-4 w-4 mr-1" /> Back to Categories
      </Link>

      <div 
        className="relative h-64 rounded-lg mb-8 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${category.image})` }}
      >
        <div className="absolute inset-0 bg-black/40 rounded-lg"></div>
        <div className="relative text-center text-white z-10 px-4">
          <h1 className="text-4xl font-bold mb-4">{category.name}</h1>
          <p className="max-w-2xl mx-auto">{category.description}</p>
        </div>
      </div>

      {products.length > 0 ? (
        <>
          <h2 className="text-2xl font-bold mb-6">Products in {category.name}</h2>
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      ) : (
        <div className="text-center py-12">
          <h2 className="text-xl font-medium mb-2">No products found in this category</h2>
          <p className="text-muted-foreground mb-6">
            We're constantly adding new products. Check back soon!
          </p>
          <Button asChild>
            <Link to="/products">Browse All Products</Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default CategoryDetailPage;
