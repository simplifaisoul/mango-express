import { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, Leaf } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { totalItems, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#products', label: 'Shop' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-mango-500/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-mango-400 to-leaf-500 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className={`text-xl font-bold font-heading tracking-tight ${isScrolled ? 'text-tropical-800' : 'text-white'}`}>
                Mango
              </span>
              <span className={`text-xl font-bold font-heading ${isScrolled ? 'text-mango-500' : 'text-mango-300'}`}>
                Express
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className={`relative font-medium transition-colors duration-300 hover:text-mango-500 group ${
                  isScrolled ? 'text-tropical-700' : 'text-white/90'
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-mango-400 to-leaf-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Cart + Mobile Menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsCartOpen(true)}
              className={`relative p-2 rounded-full transition-all duration-300 hover:bg-mango-100/80 ${
                isScrolled ? 'text-tropical-800' : 'text-white'
              }`}
              aria-label="Open cart"
              id="cart-button"
            >
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="cart-badge">{totalItems}</span>
              )}
            </button>

            <button
              className={`lg:hidden p-2 rounded-full transition-colors ${
                isScrolled ? 'text-tropical-800' : 'text-white'
              }`}
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Toggle menu"
              id="mobile-menu-button"
            >
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isMobileOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="pb-4 space-y-1">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className={`block py-3 px-4 rounded-xl font-medium transition-all ${
                  isScrolled
                    ? 'text-tropical-700 hover:bg-mango-50'
                    : 'text-white/90 hover:bg-white/10'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
