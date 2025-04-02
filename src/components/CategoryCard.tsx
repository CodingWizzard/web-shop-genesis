
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Category } from "@/types";

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link to={`/category/${category.id}`}>
      <Card className="overflow-hidden group">
        <div className="aspect-video relative overflow-hidden">
          <img 
            src={category.image} 
            alt={category.name} 
            className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <h3 className="text-white font-bold text-xl md:text-2xl">{category.name}</h3>
          </div>
        </div>
        <CardContent className="p-4">
          <p className="text-muted-foreground text-sm line-clamp-2">{category.description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CategoryCard;
