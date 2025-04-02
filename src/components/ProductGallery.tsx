
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductGalleryProps {
  images: string[];
  name: string;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images, name }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="relative overflow-hidden rounded-lg bg-muted aspect-square">
        <img 
          src={images[currentIndex]} 
          alt={`${name} - image ${currentIndex + 1}`} 
          className="h-full w-full object-cover" 
        />
        
        <Button 
          size="icon" 
          variant="ghost"
          className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-background/80"
          onClick={handlePrev}
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Previous image</span>
        </Button>
        
        <Button 
          size="icon" 
          variant="ghost"
          className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-background/80"
          onClick={handleNext}
        >
          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">Next image</span>
        </Button>
      </div>

      <div className="flex gap-2 overflow-auto pb-1">
        {images.map((image, index) => (
          <button
            key={index}
            className={`relative overflow-hidden rounded border-2 min-w-16 h-16 aspect-square transition-all ${
              index === currentIndex ? "border-primary" : "border-muted hover:border-primary/50"
            }`}
            onClick={() => handleThumbnailClick(index)}
          >
            <img 
              src={image} 
              alt={`${name} thumbnail ${index + 1}`} 
              className="h-full w-full object-cover" 
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
