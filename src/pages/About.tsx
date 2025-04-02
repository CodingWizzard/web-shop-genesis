
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-6">About ModernShop</h1>
      
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-muted-foreground mb-4">
            Founded in 2023, ModernShop was born from a passion for thoughtful design and quality craftsmanship. 
            We believe that the objects we surround ourselves with should be as purposeful as they are beautiful.
          </p>
          <p className="text-muted-foreground mb-4">
            Our team of designers and curators scour the globe to bring you products that 
            blend form and function, creating a collection that enhances your everyday life.
          </p>
          <Button asChild className="mt-2">
            <Link to="/products">Browse Our Products</Link>
          </Button>
        </div>
        <div className="rounded-lg overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1579532536935-619928decd08?auto=format&fit=crop&q=80&w=1000" 
            alt="Our workspace" 
            className="w-full h-auto"
          />
        </div>
      </div>
      
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-muted rounded-lg p-6 text-center">
            <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2">Quality</h3>
            <p className="text-muted-foreground">
              We curate products that are built to last, focusing on superior materials and craftsmanship.
            </p>
          </div>
          
          <div className="bg-muted rounded-lg p-6 text-center">
            <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2">Design</h3>
            <p className="text-muted-foreground">
              We believe good design improves lives through the perfect balance of beauty and functionality.
            </p>
          </div>
          
          <div className="bg-muted rounded-lg p-6 text-center">
            <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2">Sustainability</h3>
            <p className="text-muted-foreground">
              We're committed to environmentally responsible practices and partners who share these values.
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-secondary rounded-lg p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Join Our Community</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
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
  );
};

export default About;
