
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-secondary py-16 sm:py-24">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              Modern Design <br /> for Modern Living
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-lg">
              Discover our curated collection of minimalist, high-quality products
              designed to enhance your everyday life. Timeless pieces for your home and workspace.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link to="/products">Shop Collection</Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link to="/about">Our Story</Link>
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1000"
                alt="Modern furniture collection"
                className="rounded-lg object-cover shadow-xl"
              />
              <div className="absolute -bottom-8 -left-8 w-64 rounded-lg bg-background p-4 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="shrink-0 rounded-full bg-primary p-2 text-primary-foreground">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Free Shipping</p>
                    <p className="text-xs text-muted-foreground">On orders over $50</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
