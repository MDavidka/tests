/**
 * Shared TypeScript interfaces and types for Floweria.
 */

// ==========================================
// Site Configuration Types
// ==========================================

export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  navItems: NavItem[];
  contactEmail: string;
  contactPhone: string;
}

// ==========================================
// E-commerce Domain Types
// ==========================================

export type ProductCategory = 
  | 'Anniversary' 
  | 'Birthday' 
  | 'Sympathy' 
  | 'Wedding' 
  | 'Everyday' 
  | 'Seasonal';

export interface Product {
  _id: string; // Prepared for future MongoDB integration
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: ProductCategory;
  inStock: boolean;
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CustomerDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  deliveryNotes?: string;
}

export type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';

export interface Order {
  _id?: string;
  items: CartItem[];
  totalAmount: number;
  customer: CustomerDetails;
  status: OrderStatus;
  createdAt: string; // ISO Date string
}

// ==========================================
// Component Prop Types
// ==========================================

export interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

export interface CartModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, newQuantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onCheckout: () => void;
}