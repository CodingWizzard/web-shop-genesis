
import { products } from "../data/products";
import { categories } from "../data/categories";
import { Product, Category } from "../types";

/**
 * Mock API service that simulates backend calls.
 * This can later be replaced with actual API calls to a backend.
 */
class ApiService {
  // Get all products
  async getProducts(): Promise<Product[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return products;
  }

  // Get product by ID
  async getProductById(id: string): Promise<Product | undefined> {
    await new Promise(resolve => setTimeout(resolve, 300));
    return products.find(product => product.id === id);
  }

  // Get featured products
  async getFeaturedProducts(): Promise<Product[]> {
    await new Promise(resolve => setTimeout(resolve, 500));
    return products.filter(product => product.featured);
  }

  // Get products by category
  async getProductsByCategory(category: string): Promise<Product[]> {
    await new Promise(resolve => setTimeout(resolve, 500));
    return products.filter(
      product => product.category.toLowerCase() === category.toLowerCase()
    );
  }

  // Get all categories
  async getCategories(): Promise<Category[]> {
    await new Promise(resolve => setTimeout(resolve, 300));
    return categories;
  }

  // Get category by ID
  async getCategoryById(id: string): Promise<Category | undefined> {
    await new Promise(resolve => setTimeout(resolve, 200));
    return categories.find(category => category.id === id);
  }

  // Search products
  async searchProducts(query: string): Promise<Product[]> {
    await new Promise(resolve => setTimeout(resolve, 500));
    const lowercaseQuery = query.toLowerCase();
    return products.filter(
      product =>
        product.name.toLowerCase().includes(lowercaseQuery) ||
        product.description.toLowerCase().includes(lowercaseQuery)
    );
  }
}

// Create a singleton instance
const apiService = new ApiService();
export default apiService;
