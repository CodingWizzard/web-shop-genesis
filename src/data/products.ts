
import { Product } from "../types";

export const products: Product[] = [
  {
    id: "1",
    name: "Minimalist Desk Lamp",
    description: "A sleek, adjustable desk lamp with touch controls and multiple lighting modes.",
    price: 79.99,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=1000",
    images: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&q=80&w=1000"
    ],
    category: "lighting",
    featured: true,
    stock: 15
  },
  {
    id: "2",
    name: "Ergonomic Office Chair",
    description: "Premium office chair with lumbar support, adjustable height, and breathable mesh material.",
    price: 249.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1505843490701-5c285b5ad731?auto=format&fit=crop&q=80&w=1000",
    images: [
      "https://images.unsplash.com/photo-1505843490701-5c285b5ad731?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1582582621959-48d27397dc69?auto=format&fit=crop&q=80&w=1000"
    ],
    category: "furniture",
    featured: true,
    stock: 8
  },
  {
    id: "3",
    name: "Wireless Charging Pad",
    description: "Fast-charging wireless pad compatible with all Qi-enabled devices. Sleek, non-slip design.",
    price: 39.99,
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&q=80&w=1000",
    images: [
      "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1544866092-1677b00c0c9b?auto=format&fit=crop&q=80&w=1000"
    ],
    category: "electronics",
    featured: false,
    stock: 20
  },
  {
    id: "4",
    name: "Premium Notebook Set",
    description: "Set of 3 high-quality notebooks with premium paper. Perfect for journaling or sketching.",
    price: 24.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&q=80&w=1000",
    images: [
      "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1598623549417-c0e98949dc44?auto=format&fit=crop&q=80&w=1000"
    ],
    category: "stationery",
    featured: false,
    stock: 25
  },
  {
    id: "5",
    name: "Smart Home Speaker",
    description: "Voice-controlled smart speaker with premium sound quality and virtual assistant.",
    price: 129.99,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?auto=format&fit=crop&q=80&w=1000",
    images: [
      "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1552253782-50c019f2030c?auto=format&fit=crop&q=80&w=1000"
    ],
    category: "electronics",
    featured: true,
    stock: 12
  },
  {
    id: "6",
    name: "Minimalist Wall Clock",
    description: "Elegant wall clock with a clean, modern design. Silent movement and easy installation.",
    price: 49.99,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&q=80&w=1000",
    images: [
      "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1565193298595-2b56dd0d1c01?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1680789538493-da6adaad4a03?auto=format&fit=crop&q=80&w=1000"
    ],
    category: "home_decor",
    featured: false,
    stock: 18
  },
  {
    id: "7",
    name: "Luxury Pen Set",
    description: "Set of 5 premium ballpoint pens with smooth ink flow and comfortable grip.",
    price: 32.99,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&q=80&w=1000",
    images: [
      "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1616627575383-d664861e457d?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&q=80&w=1000"
    ],
    category: "stationery",
    featured: false,
    stock: 30
  },
  {
    id: "8",
    name: "Leather Desk Mat",
    description: "Premium leather desk mat that protects your desk and adds a touch of elegance to your workspace.",
    price: 59.99,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1603486002664-a7812a95dc3e?auto=format&fit=crop&q=80&w=1000",
    images: [
      "https://images.unsplash.com/photo-1603486002664-a7812a95dc3e?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1581541234269-03d5d8576c0e?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1564466809058-bf4114d55352?auto=format&fit=crop&q=80&w=1000"
    ],
    category: "office",
    featured: true,
    stock: 10
  }
];
