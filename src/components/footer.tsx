import React from "react";
import { Link, Input, Button, Divider } from "@heroui/react";

// --- Icons ---
const FlowerIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
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
    <path d="M12 22c4.97-1.66 8-6.04 8-11s-3.03-9.34-8-11c-4.97 1.66-8 6.04-8 11s3.03 9.34 8 11z" />
    <path d="M12 22V11" />
    <path d="M12 11a4 4 0 1 0-8 0 4 4 0 1 0 8 0z" />
    <path d="M20 11a4 4 0 1 0-8 0 4 4 0 1 0 8 0z" />
  </svg>
);

const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const PinterestIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="12" x2="12" y2="22"></line>
    <path d="M12 12c-2-2-4-2-4-2s-2 2-2 4 2 4 2 4"></path>
    <path d="M12 12c2-2 4-2 4-2s2 2 2 4-2 4-2 4"></path>
    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"></path>
  </svg>
);

// --- Component ---
export function Footer(): JSX.Element {
  return (
    <footer className="bg-surface border-t border-border pt-16 pb-8 mt-auto w-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Top Section: Newsletter & Brand */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand & Description */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-primary">
              <FlowerIcon size={28} />
              <span className="font-heading font-bold text-2xl tracking-tight text-accent">
                Floweria
              </span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed max-w-sm">
              Artisanal floral arrangements crafted with love and delivered with care. 
              Bringing botanical elegance to your everyday moments and special occasions.
            </p>
            <div className="flex gap-4 mt-2">
              <Link href="#" className="text-text-muted hover:text-primary transition-colors" aria-label="Instagram">
                <InstagramIcon />
              </Link>
              <Link href="#" className="text-text-muted hover:text-primary transition-colors" aria-label="Facebook">
                <FacebookIcon />
              </Link>
              <Link href="#" className="text-text-muted hover:text-primary transition-colors" aria-label="Pinterest">
                <PinterestIcon />
              </Link>
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-3">
              <h3 className="font-heading font-semibold text-accent text-lg mb-2">Shop</h3>
              <Link href="/shop" className="text-sm text-text-muted hover:text-primary transition-colors">All Arrangements</Link>
              <Link href="/collections/romance" className="text-sm text-text-muted hover:text-primary transition-colors">Romance</Link>
              <Link href="/collections/sympathy" className="text-sm text-text-muted hover:text-primary transition-colors">Sympathy</Link>
              <Link href="/collections/birthday" className="text-sm text-text-muted hover:text-primary transition-colors">Birthday</Link>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-heading font-semibold text-accent text-lg mb-2">Support</h3>
              <Link href="/faq" className="text-sm text-text-muted hover:text-primary transition-colors">FAQ</Link>
              <Link href="/shipping" className="text-sm text-text-muted hover:text-primary transition-colors">Shipping & Returns</Link>
              <Link href="/contact" className="text-sm text-text-muted hover:text-primary transition-colors">Contact Us</Link>
              <Link href="/care" className="text-sm text-text-muted hover:text-primary transition-colors">Flower Care</Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h3 className="font-heading font-semibold text-accent text-lg">Join Our Newsletter</h3>
            <p className="text-text-muted text-sm">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form className="flex gap-2 mt-2" onSubmit={(e) => e.preventDefault()}>
              <Input 
                type="email" 
                placeholder="Enter your email address" 
                aria-label="Email address"
                variant="bordered"
                radius="sm"
                className="w-full"
                classNames={{
                  inputWrapper: "border-border hover:border-primary focus-within:border-primary"
                }}
              />
              <Button 
                type="submit" 
                color="primary" 
                radius="sm"
                className="font-medium"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <Divider className="bg-border mb-8" />

        {/* Bottom Section: Copyright & Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-muted">
          <p>© {new Date().getFullYear()} Floweria. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-text-muted hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-text-muted hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}