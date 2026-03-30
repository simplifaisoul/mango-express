import { ShoppingCart, Star, Heart } from 'lucide-react';
import type { Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { useState } from 'react';
import toast from 'react-hot-toast';

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const { addToCart } = useCart();
  const [isWished, setIsWished] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`, {
      icon: '🥭',
      style: {
        borderRadius: '12px',
        background: '#166534',
        color: '#fff',
        fontFamily: 'Outfit, sans-serif',
      },
    });
  };

  return (
    <div
      className="product-card bg-white rounded-3xl overflow-hidden shadow-md border border-mango-100/50 animate-fade-in-up opacity-0"
      style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
      id={`product-${product.id}`}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden bg-gradient-to-br from-mango-50 to-leaf-50 p-6 h-56 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="product-image w-full h-full object-contain drop-shadow-lg"
          loading="lazy"
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-4 left-4 bg-gradient-to-r from-mango-500 to-mango-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
            {product.badge}
          </span>
        )}

        {/* Wishlist button */}
        <button
          onClick={() => setIsWished(!isWished)}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md hover:scale-110 transition-all duration-300"
          aria-label={`${isWished ? 'Remove from' : 'Add to'} wishlist`}
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              isWished ? 'fill-red-500 text-red-500' : 'text-gray-400'
            }`}
          />
        </button>

        {/* Discount Tag */}
        {product.originalPrice && (
          <span className="absolute bottom-4 left-4 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
            -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category */}
        <span className="text-xs font-semibold text-leaf-600 uppercase tracking-wider">
          {product.category === 'fresh'
            ? '🌿 Fresh'
            : product.category === 'drinks'
            ? '🥤 Drinks'
            : product.category === 'gift'
            ? '🎁 Gift Set'
            : '🫙 Processed'}
        </span>

        <h3 className="font-heading text-lg font-bold text-tropical-800 mt-1 mb-1">
          {product.name}
        </h3>

        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 mb-3">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-3">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < Math.floor(product.rating)
                    ? 'fill-mango-400 text-mango-400'
                    : 'fill-gray-200 text-gray-200'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500">
            {product.rating} ({product.reviews})
          </span>
        </div>

        {/* Weight */}
        <div className="text-xs text-gray-400 mb-4">{product.weight}</div>

        {/* Price + Add to Cart */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-tropical-800">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through ml-2">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <button
            onClick={handleAddToCart}
            className="w-11 h-11 rounded-2xl bg-gradient-to-br from-mango-400 to-leaf-500 text-white flex items-center justify-center hover:shadow-lg hover:shadow-mango-400/30 hover:scale-110 transition-all duration-300 active:scale-95"
            aria-label={`Add ${product.name} to cart`}
            id={`add-to-cart-${product.id}`}
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
