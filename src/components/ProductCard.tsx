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
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(product);
    toast.success(`${product.name} added to cart!`, {
      icon: '🥭',
      style: {
        borderRadius: '16px',
        background: '#166534',
        color: '#fff',
        fontFamily: 'Outfit, sans-serif',
        fontSize: '0.9rem',
        padding: '12px 20px',
        boxShadow: '0 10px 40px rgba(22, 101, 52, 0.3)',
      },
    });
    setTimeout(() => setIsAdding(false), 600);
  };

  return (
    <div
      className="product-card bg-white rounded-[1.5rem] overflow-hidden shadow-sm border border-gray-100/80 animate-fade-in-up opacity-0 group"
      style={{ animationDelay: `${index * 80}ms`, animationFillMode: 'forwards' }}
      id={`product-${product.id}`}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden bg-gradient-to-br from-mango-50/60 to-leaf-50/40 p-8 h-60 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="product-image w-full h-full object-contain drop-shadow-lg"
          loading="lazy"
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-4 left-4 bg-gradient-to-r from-mango-500 to-mango-600 text-white text-[0.7rem] font-bold px-3 py-1.5 rounded-full shadow-lg shadow-mango-500/20 tracking-wide uppercase">
            {product.badge}
          </span>
        )}

        {/* Wishlist button */}
        <button
          onClick={() => setIsWished(!isWished)}
          className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all duration-300 ${
            isWished
              ? 'bg-red-50 scale-110'
              : 'bg-white/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0'
          }`}
          aria-label={`${isWished ? 'Remove from' : 'Add to'} wishlist`}
        >
          <Heart
            className={`w-4 h-4 transition-all duration-300 ${
              isWished ? 'fill-red-500 text-red-500 scale-110' : 'text-gray-400'
            }`}
          />
        </button>

        {/* Discount Tag */}
        {product.originalPrice && (
          <span className="absolute bottom-4 left-4 bg-gradient-to-r from-red-500 to-rose-500 text-white text-[0.7rem] font-bold px-2.5 py-1 rounded-full shadow-lg shadow-red-500/20">
            -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
          </span>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-5 pb-6">
        {/* Category */}
        <span className="inline-flex items-center text-[0.7rem] font-bold text-leaf-600 uppercase tracking-[0.1em]">
          {product.category === 'fresh'
            ? '🌿 Fresh'
            : product.category === 'drinks'
            ? '🥤 Drinks'
            : product.category === 'gift'
            ? '🎁 Gift Set'
            : '🫙 Processed'}
        </span>

        <h3 className="font-heading text-[1.1rem] font-bold text-tropical-800 mt-1.5 mb-1.5 leading-tight">
          {product.name}
        </h3>

        <p className="text-[0.82rem] text-gray-400 leading-relaxed line-clamp-2 mb-3">
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
          <span className="text-xs text-gray-400 font-medium">
            {product.rating} ({product.reviews})
          </span>
        </div>

        {/* Weight */}
        <div className="text-xs text-gray-300 mb-4 font-medium">{product.weight}</div>

        {/* Price + Add to Cart */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100/80">
          <div>
            <span className="text-2xl font-bold text-tropical-800 tracking-tight">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-300 line-through ml-2 font-medium">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <button
            onClick={handleAddToCart}
            className={`w-11 h-11 rounded-2xl bg-gradient-to-br from-mango-400 to-leaf-500 text-white flex items-center justify-center hover:shadow-xl hover:shadow-mango-400/25 transition-all duration-300 active:scale-90 ${
              isAdding ? 'scale-110 rotate-12' : 'hover:scale-110'
            }`}
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
