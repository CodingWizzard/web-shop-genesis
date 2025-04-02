
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  images: string[];
  category: string;
  featured: boolean;
  stock: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface CartItem {
  productId: string;
  quantity: number;
  product: Product;
}

export interface Cart {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
}
