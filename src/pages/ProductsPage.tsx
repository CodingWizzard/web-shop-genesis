
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types";
import apiService from "@/services/api";
import { Search, Filter, X } from "lucide-react";

const ProductsPage = () => {
  const location = useLocation();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Filters
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState<string>("all");
  const [category, setCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("default");
  
  // Get search query from URL if present
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchFromUrl = params.get("search");
    if (searchFromUrl) {
      setSearchQuery(searchFromUrl);
    }
  }, [location.search]);

  // Load products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        let productsData: Product[];
        
        if (searchQuery.trim()) {
          productsData = await apiService.searchProducts(searchQuery);
        } else {
          productsData = await apiService.getProducts();
        }
        
        setProducts(productsData);
        setFilteredProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [searchQuery]);

  // Apply filters
  useEffect(() => {
    const applyFilters = () => {
      let result = [...products];
      
      // Filter by category
      if (category !== "all") {
        result = result.filter(product => product.category === category);
      }
      
      // Filter by price
      if (priceRange !== "all") {
        switch (priceRange) {
          case "under50":
            result = result.filter(product => product.price < 50);
            break;
          case "50to100":
            result = result.filter(product => product.price >= 50 && product.price <= 100);
            break;
          case "over100":
            result = result.filter(product => product.price > 100);
            break;
        }
      }
      
      // Apply sorting
      switch (sortBy) {
        case "price-asc":
          result.sort((a, b) => a.price - b.price);
          break;
        case "price-desc":
          result.sort((a, b) => b.price - a.price);
          break;
        case "name-asc":
          result.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case "name-desc":
          result.sort((a, b) => b.name.localeCompare(a.name));
          break;
        case "rating-desc":
          result.sort((a, b) => b.rating - a.rating);
          break;
      }
      
      setFilteredProducts(result);
    };
    
    applyFilters();
  }, [products, category, priceRange, sortBy]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is handled by the useEffect that watches searchQuery
  };

  const clearFilters = () => {
    setCategory("all");
    setPriceRange("all");
    setSortBy("default");
    setSearchQuery("");
  };

  const uniqueCategories = Array.from(new Set(products.map(product => product.category)));

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      
      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        <form onSubmit={handleSearch} className="flex gap-2">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
          <Button type="submit">Search</Button>
        </form>
        
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            <span className="text-sm font-medium">Filters:</span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 flex-grow">
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {uniqueCategories.map(cat => (
                  <SelectItem key={cat} value={cat}>
                    {cat.replace("_", " ")}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger>
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="under50">Under $50</SelectItem>
                <SelectItem value="50to100">$50 - $100</SelectItem>
                <SelectItem value="over100">Over $100</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Default</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
                <SelectItem value="name-asc">Name: A to Z</SelectItem>
                <SelectItem value="name-desc">Name: Z to A</SelectItem>
                <SelectItem value="rating-desc">Highest Rated</SelectItem>
              </SelectContent>
            </Select>
            
            <Button variant="outline" onClick={clearFilters} className="h-10">
              <X className="h-4 w-4 mr-2" /> Clear Filters
            </Button>
          </div>
        </div>
      </div>
      
      {/* Results count */}
      <div className="mb-6">
        <p className="text-muted-foreground">
          Showing {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
        </p>
      </div>
      
      {/* Product grid */}
      {isLoading ? (
        <div className="product-grid">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="rounded-lg bg-muted animate-pulse h-[300px]"></div>
          ))}
        </div>
      ) : filteredProducts.length > 0 ? (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium mb-2">No products found</h3>
          <p className="text-muted-foreground mb-6">Try adjusting your search or filter criteria</p>
          <Button onClick={clearFilters}>Clear All Filters</Button>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
