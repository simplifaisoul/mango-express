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
          ? 'bg-white/85 backdrop-blur-2xl shadow-lg shadow-black/5 border-b border-white/50'
          : 'bg-transparent'
      }`}
    >
      <div className="container-main">
        <div className="flex items-center justify-between h-18 lg:h-22" style={{ height: isScrolled ? '72px' : '80px' }}>
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-mango-400 to-leaf-500 flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-105 transition-all duration-500 shadow-lg shadow-mango-500/20">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className={`text-xl font-bold font-heading tracking-tight transition-colors duration-300 ${isScrolled ? 'text-tropical-800' : 'text-white'}`}>
                Mango
              </span>
              <span className={`text-xl font-bold font-heading transition-colors duration-300 ${isScrolled ? 'text-mango-500' : 'text-mango-300'}`}>
                Express
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-5 py-2.5 rounded-xl font-medium text-[0.95rem] transition-all duration-300 hover:text-mango-500 group ${
                  isScrolled ? 'text-tropical-700 hover:bg-mango-50/60' : 'text-white/80 hover:bg-white/8'
                }`}
              >
                {link.label}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-mango-400 to-leaf-500 transition-all duration-300 group-hover:w-6 rounded-full" />
              </a>
            ))}
          </div>

          {/* Cart + Mobile Menu */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsCartOpen(true)}
              className={`relative p-2.5 rounded-xl transition-all duration-300 ${
                isScrolled
                  ? 'text-tropical-800 hover:bg-mango-50'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Open cart"
              id="cart-button"
            >
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="cart-badge">{totalItems}</span>
              )}
            </button>

            <button
              className={`lg:hidden p-2.5 rounded-xl transition-all duration-300 ${
                isScrolled ? 'text-tropical-800 hover:bg-mango-50' : 'text-white hover:bg-white/10'
              }`}
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Toggle menu"
              id="mobile-menu-button"
            >
              {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
            isMobileOpen ? 'max-h-72 opacity-100 pb-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className={`space-y-1 rounded-2xl p-2 ${isScrolled ? 'bg-gray-50/50' : 'bg-white/5 backdrop-blur-xl'}`}>
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className={`block py-3.5 px-5 rounded-xl font-medium transition-all duration-300 ${
                  isScrolled
                    ? 'text-tropical-700 hover:bg-white hover:shadow-sm'
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
