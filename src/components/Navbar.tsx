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
    { href: '#products', label: 'Our Collection' },
    { href: '#about', label: 'Story' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-garden border-b border-earth-200/50 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container-main">
        <div className="flex items-center justify-between transition-all duration-500" style={{ height: isScrolled ? '72px' : '90px' }}>
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-leaf-400 to-leaf-600 flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-105 transition-all duration-500 shadow-md shadow-leaf-500/20">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className={`text-xl font-bold font-heading tracking-tight transition-colors duration-300 ${isScrolled ? 'text-earth-800' : 'text-earth-900'}`}>
                Mango<span className="text-mango-500 ml-0.5">Express</span>
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 rounded-full font-medium text-[0.95rem] transition-all duration-300 ${
                  isScrolled 
                    ? 'text-earth-600 hover:text-leaf-700 hover:bg-leaf-50' 
                    : 'text-earth-700 hover:text-leaf-800 hover:bg-white/50'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Cart + Mobile Menu */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsCartOpen(true)}
              className={`relative p-2.5 flex items-center gap-2 rounded-full transition-all duration-300 font-medium text-sm ${
                isScrolled
                  ? 'bg-earth-100/50 text-earth-800 hover:bg-earth-200/50 border border-transparent'
                  : 'bg-white/60 backdrop-blur-sm text-earth-800 hover:bg-white/90 shadow-sm border border-earth-200/50'
              }`}
              aria-label="Open cart"
              id="cart-button"
            >
              <ShoppingCart className="w-4 h-4" />
              <span className="hidden sm:inline">Cart</span>
              {totalItems > 0 && (
                <span className="cart-badge">{totalItems}</span>
              )}
            </button>

            <button
              className={`lg:hidden p-2 rounded-full transition-all duration-300 ${
                isScrolled ? 'bg-earth-100 text-earth-800' : 'bg-white/60 text-earth-800 backdrop-blur shadow-sm'
              }`}
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Toggle menu"
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
          <div className="space-y-1 rounded-[1.5rem] p-3 bg-white border border-earth-100 shadow-xl shadow-earth-200/20">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="block py-3 px-5 rounded-xl font-medium text-earth-700 hover:bg-leaf-50 hover:text-leaf-700 transition-colors"
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
