# Floweria - Premium Floral Boutique

Floweria is a modern, high-performance e-commerce storefront designed for a premium floral boutique. Built with a focus on elegant design and seamless user experience, it allows customers to browse artisanal flower arrangements, manage their shopping cart, and proceed to checkout.

## Features

- **Modern UI/UX:** Built exclusively with [Hero UI](https://heroui.com/) components for a polished, accessible, and highly responsive interface.
- **Botanical Design System:** Custom color palette (Sage Green, Soft Blush, Deep Forest) implemented via CSS variables and Tailwind CSS.
- **Shopping Cart:** Fully functional client-side shopping cart with quantity management and subtotal calculation.
- **Category Filtering:** Easily browse arrangements by category (e.g., Sympathy, Birthday, Anniversary).
- **Database Ready:** Pre-configured to connect to MongoDB Atlas via the Data API. Currently runs in a graceful "Demo Mode" with mock data until credentials are provided.

## Tech Stack

- **Framework:** [Vite](https://vitejs.dev/) + [React](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **UI Library:** [Hero UI](https://heroui.com/) (@heroui/react)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Database Integration:** MongoDB Atlas Data API (via native `fetch`)

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm, yarn, or pnpm

### Installation

1. Clone the repository and navigate to the project directory.
2. Install the dependencies:

```bash
npm install
```

### Running Locally

Start the Vite development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Building for Production

To create a production-ready build:

```bash
npm run build
```

The compiled assets will be output to the `dist` directory.

## Database Configuration

By default, Floweria runs in **Demo Mode** using mock data. To connect it to a real database:

1. Set up a MongoDB Atlas cluster and enable the **Data API**.
2. Open `src/db.ts`.
3. Update the configuration constants with your actual MongoDB Data API credentials:

```typescript
const MONGO_ENDPOINT = "YOUR_DATA_API_ENDPOINT";
const MONGO_API_KEY = "YOUR_DATA_API_KEY";
const DATA_SOURCE = "Cluster0";
const DATABASE_NAME = "floweria_db";
```

4. Once valid credentials are provided, the application will automatically switch from Demo Mode to live data fetching.

## Deployment

This project is optimized for deployment on **Cloudflare Pages**.

1. Push your code to a GitHub or GitLab repository.
2. Log in to the Cloudflare Dashboard and navigate to **Pages**.
3. Create a new project and connect your repository.
4. Use the following build settings:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. Click **Save and Deploy**.

## License

MIT License. See the LICENSE file for details.