// Product images
import heroImg from '../assets/products/hero.png';
import alphonsoImg from '../assets/products/alphonso.png';
import greenImg from '../assets/products/green.png';
import kentImg from '../assets/products/kent.png';
import slicedImg from '../assets/products/sliced.png';
import basketImg from '../assets/products/basket.png';
import driedImg from '../assets/products/dried.png';
import juiceImg from '../assets/products/juice.png';
import pickleImg from '../assets/products/pickle.png';
import smoothieImg from '../assets/products/smoothie.png';
import jamImg from '../assets/products/jam.png';
import chutneyImg from '../assets/products/chutney.png';

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: 'fresh' | 'processed' | 'drinks' | 'gift';
  badge?: string;
  rating: number;
  reviews: number;
  weight: string;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Alphonso Mangoes',
    description: 'The king of mangoes — intensely sweet, creamy, and aromatic. Hand-picked from premium orchards.',
    price: 24.99,
    originalPrice: 29.99,
    image: alphonsoImg,
    category: 'fresh',
    badge: 'Best Seller',
    rating: 4.9,
    reviews: 342,
    weight: '1 kg (4-5 pcs)',
    inStock: true,
  },
  {
    id: 2,
    name: 'Green Mangoes',
    description: 'Crispy, tangy raw mangoes perfect for salads, pickles, and refreshing summer drinks.',
    price: 12.99,
    image: greenImg,
    category: 'fresh',
    rating: 4.7,
    reviews: 189,
    weight: '1 kg (5-6 pcs)',
    inStock: true,
  },
  {
    id: 3,
    name: 'Kent Mangoes',
    description: 'Rich, sweet flavor with minimal fiber. A tropical delight with buttery, juicy flesh.',
    price: 18.99,
    originalPrice: 22.99,
    image: kentImg,
    category: 'fresh',
    badge: 'Popular',
    rating: 4.8,
    reviews: 256,
    weight: '1 kg (3-4 pcs)',
    inStock: true,
  },
  {
    id: 4,
    name: 'Fresh Mango Slices',
    description: 'Pre-cut, ready-to-eat golden mango slices. Perfect for snacking, desserts, and smoothie bowls.',
    price: 9.99,
    image: slicedImg,
    category: 'fresh',
    rating: 4.6,
    reviews: 145,
    weight: '500g pack',
    inStock: true,
  },
  {
    id: 5,
    name: 'Premium Mango Basket',
    description: 'An exquisite gift basket with hand-selected assorted mangoes. Perfect for gifting.',
    price: 49.99,
    originalPrice: 59.99,
    image: basketImg,
    category: 'gift',
    badge: 'Gift Pick',
    rating: 5.0,
    reviews: 87,
    weight: '3 kg assorted',
    inStock: true,
  },
  {
    id: 6,
    name: 'Dried Mango Slices',
    description: 'Sun-dried golden mango slices — chewy, sweet, and bursting with natural mango flavor. No added sugar.',
    price: 14.99,
    image: driedImg,
    category: 'processed',
    rating: 4.7,
    reviews: 213,
    weight: '250g pouch',
    inStock: true,
  },
  {
    id: 7,
    name: 'Fresh Mango Juice',
    description: '100% pure cold-pressed mango juice. No preservatives, no concentrates — just mangoes.',
    price: 7.99,
    image: juiceImg,
    category: 'drinks',
    badge: 'New',
    rating: 4.8,
    reviews: 167,
    weight: '500ml bottle',
    inStock: true,
  },
  {
    id: 8,
    name: 'Mango Pickle (Aam Achar)',
    description: 'Traditional Indian-style mango pickle made with raw green mangoes and aromatic spices.',
    price: 11.99,
    image: pickleImg,
    category: 'processed',
    rating: 4.9,
    reviews: 298,
    weight: '400g jar',
    inStock: true,
  },
  {
    id: 9,
    name: 'Mango Smoothie Mix',
    description: 'Instant mango smoothie blend — just add milk or yogurt for a creamy tropical treat.',
    price: 16.99,
    originalPrice: 19.99,
    image: smoothieImg,
    category: 'drinks',
    rating: 4.5,
    reviews: 123,
    weight: '300g pouch',
    inStock: true,
  },
  {
    id: 10,
    name: 'Artisan Mango Jam',
    description: 'Small-batch mango jam made with ripe Alphonso mangoes. Perfect on toast or pastries.',
    price: 8.99,
    image: jamImg,
    category: 'processed',
    rating: 4.6,
    reviews: 178,
    weight: '350g jar',
    inStock: true,
  },
  {
    id: 11,
    name: 'Mango Chutney',
    description: 'A gourmet sweet & spicy mango chutney. Perfect condiment for cheese boards and curries.',
    price: 9.99,
    image: chutneyImg,
    category: 'processed',
    badge: 'Chef\'s Pick',
    rating: 4.7,
    reviews: 156,
    weight: '300g jar',
    inStock: true,
  },
  {
    id: 12,
    name: 'Mango Party Box',
    description: 'A curated selection of our finest mango products — juices, dried slices, and fresh mangoes.',
    price: 39.99,
    originalPrice: 49.99,
    image: basketImg,
    category: 'gift',
    badge: 'Value Pack',
    rating: 4.8,
    reviews: 94,
    weight: '2.5 kg mixed',
    inStock: true,
  },
];

export const categories = [
  { id: 'all', name: 'All Products', emoji: '🥭' },
  { id: 'fresh', name: 'Fresh Mangoes', emoji: '🌿' },
  { id: 'processed', name: 'Mango Products', emoji: '🫙' },
  { id: 'drinks', name: 'Drinks', emoji: '🥤' },
  { id: 'gift', name: 'Gift Sets', emoji: '🎁' },
];

export { heroImg };
