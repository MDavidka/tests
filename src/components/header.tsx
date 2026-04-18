import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Badge,
} from "@heroui/react";

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

const ShoppingCartIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
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
  </svg>
);

// --- Types ---
export interface HeaderProps {
  cartItemCount?: number;
  onOpenCart?: () => void;
  activePath?: string;
}

// --- Component ---
export function Header({ cartItemCount = 0, onOpenCart, activePath = "/" }: HeaderProps): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Shop", path: "/shop" },
    { label: "Collections", path: "/collections" },
    { label: "About Us", path: "/about" },
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-surface/80 backdrop-blur-md border-border"
      maxWidth="xl"
    >
      {/* Mobile Menu Toggle & Brand */}
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-text"
        />
        <NavbarBrand className="gap-2">
          <div className="text-primary">
            <FlowerIcon size={28} />
          </div>
          <p className="font-heading font-bold text-2xl tracking-tight text-accent">
            Floweria
          </p>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop Navigation */}
      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.label} isActive={activePath === item.path}>
            <Link
              color={activePath === item.path ? "primary" : "foreground"}
              href={item.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activePath === item.path ? "font-semibold" : ""
              }`}
              aria-current={activePath === item.path ? "page" : undefined}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Right Side Actions (Cart) */}
      <NavbarContent justify="end">
        <NavbarItem>
          <Badge
            color="danger"
            content={cartItemCount}
            isInvisible={cartItemCount === 0}
            shape="circle"
            showOutline={false}
            size="md"
          >
            <Button
              isIconOnly
              variant="light"
              aria-label="Open Cart"
              onPress={onOpenCart}
              className="text-text hover:text-primary transition-colors"
            >
              <ShoppingCartIcon size={22} />
            </Button>
          </Badge>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className="bg-surface/95 backdrop-blur-md pt-6">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <Link
              color={activePath === item.path ? "primary" : "foreground"}
              className="w-full text-lg py-2 font-heading"
              href={item.path}
              size="lg"
              onPress={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}