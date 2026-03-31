import { useState } from 'react';
import { products, categories } from '../data/products';
import ProductCard from './ProductCard';
import { Search, Sparkles } from 'lucide-react';

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="products" className="py-24 lg:py-32 bg-[#fffdf7] relative">
      {/* Subtle organic pattern */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #16a34a 1.5px, transparent 0)',
          backgroundSize: '48px 48px'
        }}
      />

      <div className="container-main relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="section-badge mb-4">
            <Sparkles className="w-4 h-4 text-mango-500" />
            Our Collection
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-earth-800 mb-5 tracking-tight">
            Freshly <span className="gradient-text">Picked</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Hand-picked premium mangoes and artisan mango products, delivered fresh from the orchard to your table.
          </p>
          <div className="section-divider mt-6" />
        </div>

        {/* Search + Filter */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12">
          {/* Search */}
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 w-5 h-5" />
            <input
              type="text"
              placeholder="Search mangoes..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-gray-200/80 focus:border-mango-400 outline-none font-body transition-all duration-300 text-tropical-800 placeholder:text-gray-300 text-sm"
              id="product-search"
            />
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-400 ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-mango-400 to-leaf-500 text-white shadow-lg shadow-mango-400/20 scale-105'
                    : 'bg-white text-gray-500 border border-gray-200/60 hover:border-mango-300 hover:text-mango-600 hover:shadow-sm'
                }`}
                id={`category-${cat.id}`}
              >
                {cat.emoji} {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-gray-400">
            Showing <span className="font-semibold text-tropical-800">{filteredProducts.length}</span> product{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
            {filteredProducts.map((product, idx) => (
              <ProductCard key={product.id} product={product} index={idx} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <div className="text-7xl mb-5">🥭</div>
            <h3 className="font-heading text-2xl font-bold text-tropical-800 mb-3">
              No Products Found
            </h3>
            <p className="text-gray-400 mb-6">
              Try a different search or browse our categories.
            </p>
            <button
              onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
              className="btn-primary"
            >
              View All Products
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
