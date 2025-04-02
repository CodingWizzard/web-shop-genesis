
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MinusIcon, PlusIcon } from "lucide-react";

interface QuantityInputProps {
  quantity: number;
  onChange: (quantity: number) => void;
  max?: number;
  min?: number;
}

const QuantityInput: React.FC<QuantityInputProps> = ({ 
  quantity, 
  onChange, 
  max = 99, 
  min = 1 
}) => {
  const increment = () => {
    if (quantity < max) {
      onChange(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > min) {
      onChange(quantity - 1);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= min && value <= max) {
      onChange(value);
    }
  };

  return (
    <div className="flex items-center">
      <Button
        type="button"
        variant="outline"
        size="icon"
        className="h-9 w-9 rounded-r-none"
        onClick={decrement}
        disabled={quantity <= min}
        aria-label="Decrease quantity"
      >
        <MinusIcon className="h-4 w-4" />
      </Button>
      <Input
        type="number"
        min={min}
        max={max}
        value={quantity}
        onChange={handleChange}
        className="h-9 w-14 rounded-none text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
      />
      <Button
        type="button"
        variant="outline"
        size="icon"
        className="h-9 w-9 rounded-l-none"
        onClick={increment}
        disabled={quantity >= max}
        aria-label="Increase quantity"
      >
        <PlusIcon className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default QuantityInput;
