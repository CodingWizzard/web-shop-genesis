
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart, Trash2, ChevronLeft, ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import QuantityInput from "@/components/QuantityInput";
import { formatCurrency } from "@/lib/utils";

const CartPage = () => {
  const { cart, updateQuantity, removeItem, clearCart } = useCart();

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold flex items-center gap-2 mb-6">
        <ShoppingCart className="h-8 w-8" />
        Your Cart
      </h1>

      {cart.items.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {cart.items.map((item) => (
                <div 
                  key={item.productId} 
                  className="flex flex-col sm:flex-row gap-4 border rounded-lg p-4"
                >
                  <div className="relative w-full sm:w-32 aspect-square shrink-0">
                    <img 
                      src={item.product.image} 
                      alt={item.product.name} 
                      className="object-cover h-full w-full rounded-md"
                    />
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex justify-between">
                      <Link to={`/product/${item.productId}`} className="text-lg font-medium hover:underline">
                        {item.product.name}
                      </Link>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8 text-muted-foreground" 
                        onClick={() => removeItem(item.productId)}
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Remove</span>
                      </Button>
                    </div>
                    
                    <div className="my-2">
                      <span className="category-badge">
                        {item.product.category.replace("_", " ")}
                      </span>
                    </div>
                    
                    <div className="mt-auto pt-2 flex flex-wrap justify-between items-center gap-4">
                      <QuantityInput 
                        quantity={item.quantity} 
                        onChange={(q) => updateQuantity(item.productId, q)}
                        max={item.product.stock}
                      />
                      <div className="font-bold">
                        {formatCurrency(item.product.price * item.quantity)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-between mt-6">
              <Button asChild variant="outline">
                <Link to="/products" className="flex items-center gap-2">
                  <ChevronLeft className="h-4 w-4" />
                  Continue Shopping
                </Link>
              </Button>
              
              <Button variant="outline" onClick={clearCart} className="text-muted-foreground">
                Clear Cart
              </Button>
            </div>
          </div>
          
          <div className="bg-muted rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Subtotal ({cart.totalItems} items)</span>
                <span>{formatCurrency(cart.totalPrice)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="flex justify-between">
                <span>Taxes</span>
                <span>Calculated at checkout</span>
              </div>
            </div>
            
            <Separator className="my-4" />
            
            <div className="flex justify-between text-lg font-bold mb-6">
              <span>Total</span>
              <span>{formatCurrency(cart.totalPrice)}</span>
            </div>
            
            <Button className="w-full" size="lg">
              <ShoppingBag className="h-4 w-4 mr-2" />
              Proceed to Checkout
            </Button>
            
            <div className="mt-4 text-sm text-muted-foreground text-center">
              Secure checkout powered by Stripe
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="mx-auto w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-6">
            <ShoppingCart className="h-12 w-12 text-muted-foreground" />
          </div>
          <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Looks like you haven't added anything to your cart yet. Check out our products and find something you'll love!
          </p>
          <Button asChild size="lg">
            <Link to="/products">Browse Products</Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
