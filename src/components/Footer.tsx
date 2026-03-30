import { Leaf, Heart, ArrowUp, Camera, Globe, MessageCircle } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-tropical-800 to-tropical-900 text-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-mango-500/30 to-transparent" />
      <div className="absolute top-20 left-20 w-64 h-64 bg-mango-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-20 w-48 h-48 bg-leaf-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-mango-400 to-leaf-500 flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold font-heading">
                Mango<span className="text-mango-400">Express</span>
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Premium fresh mangoes and tropical products delivered to your doorstep. Taste the sunshine.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-mango-500 transition-all duration-300 group" aria-label="Instagram">
                <Camera className="w-4 h-4 text-white/60 group-hover:text-white" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-mango-500 transition-all duration-300 group" aria-label="Facebook">
                <Globe className="w-4 h-4 text-white/60 group-hover:text-white" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-mango-500 transition-all duration-300 group" aria-label="Twitter">
                <MessageCircle className="w-4 h-4 text-white/60 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Shop', 'About', 'Contact'].map(link => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-white/50 hover:text-mango-400 transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Categories</h4>
            <ul className="space-y-3">
              {['Fresh Mangoes', 'Dried Mangoes', 'Mango Drinks', 'Gift Baskets', 'Condiments'].map(cat => (
                <li key={cat}>
                  <a
                    href="#products"
                    className="text-white/50 hover:text-mango-400 transition-colors text-sm"
                  >
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Support</h4>
            <ul className="space-y-3">
              {['FAQs', 'Shipping Policy', 'Returns', 'Privacy Policy', 'Terms of Service'].map(item => (
                <li key={item}>
                  <a href="#" className="text-white/50 hover:text-mango-400 transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm flex items-center gap-1">
            © 2026 Mango Express. Made with <Heart className="w-3.5 h-3.5 fill-red-500 text-red-500" /> for mango lovers.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-gradient-to-br from-mango-400 to-leaf-500 flex items-center justify-center hover:shadow-lg hover:shadow-mango-400/30 hover:-translate-y-1 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </footer>
  );
}
