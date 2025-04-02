
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Menu, Search, X } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const Navbar: React.FC = () => {
  const { cart } = useCart();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/products?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 mt-8">
              <Link to="/" className="text-lg font-medium hover:underline">Home</Link>
              <Link to="/products" className="text-lg font-medium hover:underline">Products</Link>
              <Link to="/categories" className="text-lg font-medium hover:underline">Categories</Link>
              <Link to="/about" className="text-lg font-medium hover:underline">About</Link>
              <Link to="/contact" className="text-lg font-medium hover:underline">Contact</Link>
            </nav>
          </SheetContent>
        </Sheet>

        <div className="flex items-center gap-2 ml-4 md:ml-0">
          <Link to="/" className="font-bold text-xl md:text-2xl">
            ModernShop
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6 mx-6">
          <Link to="/" className="font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/products" className="font-medium hover:text-primary transition-colors">
            Products
          </Link>
          <Link to="/categories" className="font-medium hover:text-primary transition-colors">
            Categories
          </Link>
          <Link to="/about" className="font-medium hover:text-primary transition-colors">
            About
          </Link>
          <Link to="/contact" className="font-medium hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2 ml-auto">
          {isSearchOpen ? (
            <form onSubmit={handleSearch} className="relative flex items-center">
              <Input
                type="search"
                placeholder="Search products..."
                className="w-[150px] md:w-[200px] lg:w-[300px]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-0"
                onClick={() => setIsSearchOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </form>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}

          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cart.totalItems > 0 && (
                <Badge className="absolute -top-2 -right-2 px-1 min-w-5 h-5 flex items-center justify-center">
                  {cart.totalItems}
                </Badge>
              )}
              <span className="sr-only">Cart</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
