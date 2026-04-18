import React from "react";
import { Card, CardBody, CardFooter, Image, Button, Chip } from "@heroui/react";
import { Product } from "../db";
import { formatCurrency } from "../utils";

// --- Icons ---
const CartPlusIcon = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="8" cy="21" r="1" />
    <circle cx="19" cy="21" r="1" />
    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    <line x1="12" y1="8" x2="12" y2="14" />
    <line x1="9" y1="11" x2="15" y2="11" />
  </svg>
);

// --- Types ---
export interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

// --- Component ---
export function ProductCard({ product, onAddToCart }: ProductCardProps): JSX.Element {
  return (
    <Card 
      shadow="sm" 
      className="w-full border border-border bg-surface hover:shadow-md transition-all duration-300 group overflow-hidden"
    >
      <CardBody className="p-0 relative overflow-hidden bg-bg">
        {/* Featured Badge */}
        {product.featured && (
          <Chip 
            color="primary" 
            size="sm" 
            className="absolute top-3 right-3 z-10 shadow-sm font-medium tracking-wide" 
            variant="solid"
          >
            Featured
          </Chip>
        )}
        
        {/* Product Image */}
        <div className="overflow-hidden h-[280px] w-full bg-border/30">
          <Image
            shadow="none"
            radius="none"
            width="100%"
            alt={`Image of ${product.name}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
            src={product.imageUrl}
            fallbackSrc="https://placehold.co/600x600.png?text=Image+Unavailable"
          />
        </div>
      </CardBody>
      
      <CardFooter className="flex flex-col items-start gap-3 p-5">
        {/* Title & Price Row */}
        <div className="flex justify-between items-start w-full gap-2">
          <div className="flex flex-col gap-1 flex-1">
            <p className="text-xs text-text-muted font-medium uppercase tracking-wider">
              {product.category}
            </p>
            <h3 className="font-heading text-lg font-semibold text-accent line-clamp-1" title={product.name}>
              {product.name}
            </h3>
          </div>
          <p className="text-lg font-semibold text-primary shrink-0">
            {formatCurrency(product.price)}
          </p>
        </div>
        
        {/* Description */}
        <p className="text-sm text-text-muted line-clamp-2 min-h-[40px]">
          {product.description}
        </p>
        
        {/* Action Button */}
        <Button
          color="primary"
          variant="flat"
          className="w-full font-medium mt-2 hover:bg-primary hover:text-white transition-colors"
          endContent={<CartPlusIcon size={18} />}
          onPress={() => onAddToCart(product)}
          aria-label={`Add ${product.name} to cart`}
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}