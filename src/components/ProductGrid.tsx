import { useState } from 'react';
import { products, categories } from '../data/products';
import ProductCard from './ProductCard';
import { Search } from 'lucide-react';

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
    <section id="products" className="py-20 lg:py-28 bg-[#fffdf7]">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-mango-600 uppercase tracking-widest">
            Our Collection
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-tropical-800 mt-2 mb-4">
            Fresh & <span className="gradient-text">Delicious</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Hand-picked premium mangoes and artisan mango products, delivered fresh from the orchard to your table.
          </p>
        </div>

        {/* Search + Filter */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-10">
          {/* Search */}
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search mangoes..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white border border-mango-200/60 focus:border-mango-400 focus:ring-4 focus:ring-mango-400/10 outline-none font-body transition-all duration-300 text-tropical-800"
              id="product-search"
            />
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-mango-400 to-leaf-500 text-white shadow-lg shadow-mango-400/20'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-mango-300 hover:text-mango-600'
                }`}
                id={`category-${cat.id}`}
              >
                {cat.emoji} {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, idx) => (
              <ProductCard key={product.id} product={product} index={idx} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🥭</div>
            <h3 className="font-heading text-2xl font-bold text-tropical-800 mb-2">
              No Products Found
            </h3>
            <p className="text-gray-500">
              Try a different search or browse our categories.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
