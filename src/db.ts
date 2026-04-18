/**
 * src/db.ts
 * 
 * NOTICE: No database integration is currently connected.
 * As per system requirements, this file provides structured mock data and async wrappers 
 * to ensure the UI can be built, tested, and wired up cleanly. 
 * 
 * Once a database is connected via the Integrations tab, these functions can be 
 * replaced with actual MongoDB Data API fetch calls without changing the component logic.
 */

// Export a flag so the UI can display a "Connect Database" prompt/banner
export const IS_DB_CONNECTED = false;

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    category: string;
    featured?: boolean;
}

// Static placeholder data using .png images as required
const MOCK_PRODUCTS: Product[] = [
    {
        id: 'p_1',
        name: 'Classic Rose Elegance',
        description: 'A timeless arrangement of deep red roses, accented with delicate baby\'s breath and lush greenery. Perfect for anniversaries or romantic gestures.',
        price: 85.00,
        imageUrl: 'https://placehold.co/600x600.png?text=Classic+Rose+Elegance',
        category: 'Romance',
        featured: true
    },
    {
        id: 'p_2',
        name: 'Spring Awakening',
        description: 'Brighten any room with this vibrant mix of seasonal spring tulips, daffodils, and hyacinths in a clear glass vase.',
        price: 65.00,
        imageUrl: 'https://placehold.co/600x600.png?text=Spring+Awakening',
        category: 'Birthday',
        featured: true
    },
    {
        id: 'p_3',
        name: 'Serene Orchid',
        description: 'An elegant, long-lasting white Phalaenopsis orchid potted in a minimalist ceramic vase. Brings peace and tranquility to any space.',
        price: 110.00,
        imageUrl: 'https://placehold.co/600x600.png?text=Serene+Orchid',
        category: 'Sympathy'
    },
    {
        id: 'p_4',
        name: 'Rustic Sunflower Burst',
        description: 'Cheerful sunflowers paired with wild daisies and rustic foliage, perfect for a sunny day or a "just because" gift.',
        price: 55.00,
        imageUrl: 'https://placehold.co/600x600.png?text=Rustic+Sunflower',
        category: 'Just Because',
        featured: true
    },
    {
        id: 'p_5',
        name: 'Peony Blush',
        description: 'Soft pink and white peonies arranged in a modern glass cylinder. A true seasonal favorite that fills the room with a sweet fragrance.',
        price: 95.00,
        imageUrl: 'https://placehold.co/600x600.png?text=Peony+Blush',
        category: 'Romance'
    },
    {
        id: 'p_6',
        name: 'Midnight Garden',
        description: 'A moody, dramatic arrangement featuring dark calla lilies, deep purple lisianthus, and silver dollar eucalyptus.',
        price: 125.00,
        imageUrl: 'https://placehold.co/600x600.png?text=Midnight+Garden',
        category: 'Luxury',
        featured: true
    }
];

/**
 * Fetches all products. 
 * Currently simulates a network request returning mock data.
 */
export async function getProducts(): Promise<Product[]> {
    // Simulate network delay for realistic loading states in the UI
    await new Promise(resolve => setTimeout(resolve, 800));
    return MOCK_PRODUCTS;
}

/**
 * Fetches a single product by its ID.
 * Currently simulates a network request returning mock data.
 */
export async function getProductById(id: string): Promise<Product | null> {
    await new Promise(resolve => setTimeout(resolve, 400));
    const product = MOCK_PRODUCTS.find(p => p.id === id);
    return product || null;
}

/**
 * Saves a customer order.
 * Currently simulates a successful database write.
 */
export async function saveOrder(orderData: any): Promise<{ success: boolean; orderId: string }> {
    await new Promise(resolve => setTimeout(resolve, 1200));
    
    console.warn("Database not connected. Order saved to mock memory only.", orderData);
    
    return { 
        success: true, 
        orderId: `ord_${Math.random().toString(36).substring(2, 11)}` 
    };
}