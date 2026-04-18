import React, { useState, useEffect, useMemo } from "react";
import { createRoot } from "react-dom/client";
import { HeroUIProvider, Spinner, Tabs, Tab, Button, Image } from "@heroui/react";
import "./style.css";

// --- Components ---
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { ProductCard } from "./components/product-card";
import { CartModal, CartItem } from "./components/cart-modal";

// --- Data & Utils ---
import { getProducts, saveOrder, Product, IS_DB_CONNECTED } from "./db";

function App() {
  // --- State ---
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [orderSuccess, setOrderSuccess] = useState<string | null>(null);

  // --- Effects ---
  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  // --- Derived State ---
  const categories = useMemo(() => {
    const cats = new Set(products.map((p) => p.category));
    return ["All", ...Array.from(cats)];
  }, [products]);

  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") return products;
    return products.filter((p) => p.category === activeCategory);
  }, [products, activeCategory]);

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // --- Handlers ---
  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    // Optional: Open cart automatically or show a toast
    // setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const handleCheckout = async () => {
    if (cartItems.length === 0) return;
    
    setIsCheckingOut(true);
    try {
      const result = await saveOrder({ items: cartItems });
      if (result.success) {
        setCartItems([]);
        setIsCartOpen(false);
        setOrderSuccess(result.orderId);
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setOrderSuccess(null);
        }, 5000);
      }
    } catch (error) {
      console.error("Checkout failed:", error);
    } finally {
      setIsCheckingOut(false);
    }
  };

  // --- Render ---
  return (
    <HeroUIProvider>
      <div className="min-h-screen flex flex-col bg-bg text-text font-body">
        {/* Header */}
        <Header
          cartItemCount={cartItemCount}
          onOpenCart={() => setIsCartOpen(true)}
          activePath="/"
        />

        {/* Main Content */}
        <main className="flex-1 w-full flex flex-col items-center">
          
          {/* Database Connection Banner */}
          {!IS_DB_CONNECTED && (
            <div className="w-full bg-secondary/30 border-b border-secondary/50 py-3 px-6 text-center flex flex-col sm:flex-row items-center justify-center gap-3">
              <p className="text-sm text-accent font-medium">
                <span className="font-bold">Demo Mode:</span> No database connected. Displaying mock data.
              </p>
              <Button size="sm" color="primary" variant="flat" className="font-medium">
                Connect Database
              </Button>
            </div>
          )}

          {/* Order Success Banner */}
          {orderSuccess && (
            <div className="w-full bg-primary/20 border-b border-primary/30 py-4 px-6 text-center animate-appearance-in">
              <p className="text-accent font-medium">
                Thank you for your order! Your order ID is <span className="font-bold">{orderSuccess}</span>.
              </p>
            </div>
          )}

          {/* Hero Section */}
          <section className="w-full max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-20 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 flex flex-col gap-6 items-start">
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-accent leading-tight text-balance">
                Botanical Elegance for Every Occasion
              </h1>
              <p className="text-lg text-text-muted max-w-xl leading-relaxed">
                Discover our curated collection of artisanal floral arrangements. 
                Crafted with love, delivered with care, and designed to bring joy to your everyday moments.
              </p>
              <Button 
                color="primary" 
                size="lg" 
                className="font-medium mt-4 px-8"
                onPress={() => {
                  document.getElementById('shop-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Shop Collection
              </Button>
            </div>
            <div className="flex-1 w-full relative">
              <div className="aspect-[4/3] md:aspect-square rounded-2xl overflow-hidden shadow-xl border border-border">
                <Image
                  src="https://placehold.co/800x800.png?text=Beautiful+Bouquet"
                  alt="Hero Floral Arrangement"
                  className="w-full h-full object-cover"
                  radius="none"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-secondary rounded-full -z-10 blur-2xl opacity-60"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary rounded-full -z-10 blur-3xl opacity-40"></div>
            </div>
          </section>

          {/* Shop Section */}
          <section id="shop-section" className="w-full max-w-7xl mx-auto px-6 lg:px-8 py-16 flex flex-col gap-8">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-border pb-6">
              <div className="flex flex-col gap-2">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-accent">
                  Our Arrangements
                </h2>
                <p className="text-text-muted">
                  Freshly sourced and thoughtfully designed.
                </p>
              </div>
              
              {/* Category Tabs */}
              <Tabs 
                aria-label="Product Categories" 
                color="primary" 
                variant="underlined"
                selectedKey={activeCategory}
                onSelectionChange={(key) => setActiveCategory(key as string)}
                classNames={{
                  tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
                  cursor: "w-full bg-primary",
                  tab: "max-w-fit px-0 h-12",
                  tabContent: "group-data-[selected=true]:text-primary font-medium"
                }}
              >
                {categories.map((category) => (
                  <Tab key={category} title={category} />
                ))}
              </Tabs>
            </div>

            {/* Product Grid */}
            {isLoading ? (
              <div className="w-full py-20 flex flex-col items-center justify-center gap-4">
                <Spinner color="primary" size="lg" />
                <p className="text-text-muted font-medium animate-pulse">Loading beautiful flowers...</p>
              </div>
            ) : filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={handleAddToCart}
                  />
                ))}
              </div>
            ) : (
              <div className="w-full py-20 flex flex-col items-center justify-center text-center gap-4 bg-surface rounded-xl border border-border">
                <p className="text-xl font-heading text-accent">No arrangements found.</p>
                <p className="text-text-muted">Try selecting a different category.</p>
                <Button 
                  variant="flat" 
                  color="primary" 
                  onPress={() => setActiveCategory("All")}
                >
                  View All
                </Button>
              </div>
            )}
          </section>

        </main>

        {/* Footer */}
        <Footer />

        {/* Cart Modal */}
        <CartModal
          isOpen={isCartOpen}
          onOpenChange={setIsCartOpen}
          cartItems={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
          onCheckout={handleCheckout}
          isCheckingOut={isCheckingOut}
        />
      </div>
    </HeroUIProvider>
  );
}

// --- Initialization ---
export function init() {
  const rootElement = document.getElementById("root");
  if (!rootElement) {
    console.error("Failed to find the root element");
    return;
  }
  
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// Auto-initialize if we are in a browser environment
if (typeof window !== "undefined") {
  init();
}