import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Image,
  Divider,
} from "@heroui/react";
import { Product } from "../db";
import { formatCurrency, calculateTotal } from "../utils";

// --- Types ---
export interface CartItem extends Product {
  quantity: number;
}

export interface CartModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, newQuantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onCheckout: () => void;
  isCheckingOut?: boolean;
}

// --- Icons ---
const TrashIcon = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
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
    <path d="M3 6h18" />
    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
  </svg>
);

const PlusIcon = ({ size = 16, className = "" }: { size?: number; className?: string }) => (
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
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const MinusIcon = ({ size = 16, className = "" }: { size?: number; className?: string }) => (
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
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const ShoppingBagIcon = ({ size = 48, className = "" }: { size?: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
    <path d="M3 6h18" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

// --- Component ---
export function CartModal({
  isOpen,
  onOpenChange,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
  isCheckingOut = false,
}: CartModalProps): JSX.Element {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = calculateTotal(cartItems);

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      scrollBehavior="inside"
      size="lg"
      backdrop="blur"
      classNames={{
        base: "bg-surface border border-border",
        header: "border-b border-border",
        footer: "border-t border-border",
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              <h2 className="font-heading text-2xl font-semibold text-accent">
                Your Cart
              </h2>
              <p className="text-sm text-text-muted font-normal">
                {totalItems} {totalItems === 1 ? "item" : "items"}
              </p>
            </ModalHeader>

            <ModalBody className="py-6">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                  <div className="text-border bg-bg p-6 rounded-full">
                    <ShoppingBagIcon className="text-primary/50" />
                  </div>
                  <h3 className="font-heading text-xl font-medium text-accent">
                    Your cart is empty
                  </h3>
                  <p className="text-text-muted text-sm max-w-[250px]">
                    Looks like you haven't added any beautiful arrangements to your cart yet.
                  </p>
                  <Button
                    color="primary"
                    variant="flat"
                    className="mt-4 font-medium"
                    onPress={onClose}
                  >
                    Continue Shopping
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col gap-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4 items-center">
                      {/* Product Image */}
                      <div className="shrink-0 w-20 h-20 rounded-md overflow-hidden bg-bg border border-border">
                        <Image
                          src={item.imageUrl}
                          alt={item.name}
                          className="w-full h-full object-cover"
                          radius="none"
                          fallbackSrc="https://placehold.co/200x200.png?text=No+Image"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex flex-col flex-1 gap-1">
                        <div className="flex justify-between items-start">
                          <h4 className="font-heading font-semibold text-accent text-base line-clamp-1">
                            {item.name}
                          </h4>
                          <p className="font-semibold text-primary ml-2">
                            {formatCurrency(item.price * item.quantity)}
                          </p>
                        </div>
                        <p className="text-xs text-text-muted uppercase tracking-wider">
                          {item.category}
                        </p>

                        {/* Actions Row */}
                        <div className="flex justify-between items-center mt-2">
                          <div className="flex items-center gap-3 bg-bg rounded-full px-1 py-1 border border-border">
                            <Button
                              isIconOnly
                              size="sm"
                              variant="light"
                              radius="full"
                              className="w-6 h-6 min-w-6 text-text-muted hover:text-accent"
                              onPress={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                              aria-label="Decrease quantity"
                              isDisabled={item.quantity <= 1}
                            >
                              <MinusIcon />
                            </Button>
                            <span className="text-sm font-medium w-4 text-center text-accent">
                              {item.quantity}
                            </span>
                            <Button
                              isIconOnly
                              size="sm"
                              variant="light"
                              radius="full"
                              className="w-6 h-6 min-w-6 text-text-muted hover:text-accent"
                              onPress={() => onUpdateQuantity(item.id, item.quantity + 1)}
                              aria-label="Increase quantity"
                            >
                              <PlusIcon />
                            </Button>
                          </div>

                          <Button
                            isIconOnly
                            size="sm"
                            color="danger"
                            variant="light"
                            className="text-danger/70 hover:text-danger"
                            onPress={() => onRemoveItem(item.id)}
                            aria-label={`Remove ${item.name} from cart`}
                          >
                            <TrashIcon />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </ModalBody>

            {cartItems.length > 0 && (
              <ModalFooter className="flex flex-col gap-4 pt-4">
                <div className="w-full flex flex-col gap-2">
                  <div className="flex justify-between text-sm text-text-muted">
                    <span>Subtotal</span>
                    <span>{formatCurrency(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-text-muted">
                    <span>Shipping</span>
                    <span>Calculated at checkout</span>
                  </div>
                  <Divider className="my-2 bg-border" />
                  <div className="flex justify-between items-center">
                    <span className="font-heading font-semibold text-lg text-accent">
                      Total
                    </span>
                    <span className="font-semibold text-xl text-primary">
                      {formatCurrency(subtotal)}
                    </span>
                  </div>
                </div>

                <div className="flex gap-3 w-full mt-2">
                  <Button
                    variant="bordered"
                    className="flex-1 font-medium border-border text-text hover:bg-bg"
                    onPress={onClose}
                  >
                    Continue Shopping
                  </Button>
                  <Button
                    color="primary"
                    className="flex-1 font-medium"
                    onPress={onCheckout}
                    isLoading={isCheckingOut}
                  >
                    Checkout
                  </Button>
                </div>
              </ModalFooter>
            )}
          </>
        )}
      </ModalContent>
    </Modal>
  );
}