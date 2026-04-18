/**
 * Formats a numeric value into a localized currency string.
 * 
 * @param amount - The numeric amount to format.
 * @param currency - The ISO 4217 currency code (default: 'USD').
 * @param locale - The locale string (default: 'en-US').
 * @returns The formatted currency string.
 */
export function formatCurrency(amount: number, currency: string = 'USD', locale: string = 'en-US'): string {
    try {
        return new Intl.NumberFormat(locale, {
            style: 'currency',
            currency: currency,
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(amount);
    } catch (error) {
        console.error('Error formatting currency:', error);
        return `$${amount.toFixed(2)}`;
    }
}

/**
 * Formats a date string, number, or Date object into a human-readable string.
 * 
 * @param dateInput - The date to format.
 * @param locale - The locale string (default: 'en-US').
 * @returns The formatted date string.
 */
export function formatDate(dateInput: string | number | Date, locale: string = 'en-US'): string {
    try {
        const date = new Date(dateInput);
        
        // Check for invalid date
        if (isNaN(date.getTime())) {
            throw new Error('Invalid date');
        }

        return new Intl.DateTimeFormat(locale, {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(date);
    } catch (error) {
        console.error('Error formatting date:', error);
        return String(dateInput);
    }
}

/**
 * Generates a simple unique identifier.
 * Useful for temporary keys in lists or optimistic UI updates.
 * 
 * @returns A random alphanumeric string.
 */
export function generateId(): string {
    return Math.random().toString(36).substring(2, 9) + Date.now().toString(36);
}

/**
 * Truncates a string to a specified maximum length and appends an ellipsis.
 * 
 * @param text - The text to truncate.
 * @param maxLength - The maximum allowed length before truncation.
 * @returns The truncated string.
 */
export function truncateText(text: string, maxLength: number): string {
    if (!text || text.length <= maxLength) {
        return text;
    }
    return text.slice(0, maxLength).trim() + '...';
}

/**
 * A simple utility for conditionally joining CSS class names.
 * Filters out falsy values (undefined, null, false, '').
 * 
 * @param classes - An array of class names or falsy values.
 * @returns A space-separated string of valid class names.
 */
export function classNames(...classes: (string | undefined | null | false)[]): string {
    return classes.filter(Boolean).join(' ');
}

/**
 * Calculates the total price for a list of items.
 * 
 * @param items - Array of items containing price and quantity.
 * @returns The total calculated amount.
 */
export function calculateTotal(items: { price: number; quantity: number }[]): number {
    if (!Array.isArray(items)) return 0;
    
    return items.reduce((total, item) => {
        const price = item?.price || 0;
        const quantity = item?.quantity || 0;
        return total + (price * quantity);
    }, 0);
}