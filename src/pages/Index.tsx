
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";
import { Product, Category } from "@/types";
import apiService from "@/services/api";

const Index = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const [productsData, categoriesData] = await Promise.all([
          apiService.getFeaturedProducts(),
          apiService.getCategories()
        ]);
        setFeaturedProducts(productsData);
        setCategories(categoriesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection />
      
      <main className="flex-grow">
        {/* Featured Products */}
        <section className="py-12 bg-background">
          <div className="container">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Featured Products</h2>
              <Button variant="ghost" asChild>
                <Link to="/products">View All</Link>
              </Button>
            </div>
            
            {isLoading ? (
              <div className="product-grid">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="rounded-lg bg-muted animate-pulse h-[300px]"></div>
                ))}
              </div>
            ) : (
              <div className="product-grid">
                {featuredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-12 bg-primary text-primary-foreground">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <div className="mx-auto rounded-full bg-primary-foreground p-3 w-16 h-16 flex items-center justify-center text-primary mb-4">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality Craftsmanship</h3>
                <p>Every product is made with premium materials and exceptional attention to detail.</p>
              </div>
              
              <div className="p-6">
                <div className="mx-auto rounded-full bg-primary-foreground p-3 w-16 h-16 flex items-center justify-center text-primary mb-4">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Thoughtful Design</h3>
                <p>Simple, beautiful solutions that enhance your everyday experiences.</p>
              </div>
              
              <div className="p-6">
                <div className="mx-auto rounded-full bg-primary-foreground p-3 w-16 h-16 flex items-center justify-center text-primary mb-4">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Sustainable Practices</h3>
                <p>Environmentally responsible manufacturing and packaging processes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-12 bg-background">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className="rounded-lg bg-muted animate-pulse h-[200px]"></div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.slice(0, 6).map((category) => (
                  <CategoryCard key={category.id} category={category} />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-12 bg-muted">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
              <p className="text-muted-foreground mb-6">
                Subscribe to our newsletter for exclusive offers, new product announcements, and design inspiration.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  required
                />
                <Button type="submit">Subscribe</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
