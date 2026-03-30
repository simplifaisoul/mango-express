import { Leaf, Heart, ArrowUp, Camera, Globe, MessageCircle } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-tropical-800 to-tropical-900 text-white relative overflow-hidden noise-overlay">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-mango-500/40 to-transparent shadow-[0_0_15px_rgba(245,158,11,0.5)]" />
      <div className="absolute -top-40 -left-20 w-[600px] h-[600px] bg-mango-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-leaf-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Marquee strip top */}
      <div className="bg-mango-500/10 border-b border-white/5 py-4 relative z-10 w-full overflow-hidden flex items-center mb-16 shadow-inner">
        <div className="marquee-strip text-mango-300 gap-8 h-full">
          <div className="marquee-content gap-8">
            {[...Array(8)].map((_, i) => (
              <span key={i} className="flex items-center gap-8 text-sm font-medium tracking-widest uppercase">
                <span>Free Shipping Over $50</span>
                <span>•</span>
                <span>100% Organic mangoes</span>
                <span>•</span>
                <span>Same Day Delivery</span>
                <span>•</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="container-main pb-16 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-16 mb-16">
          {/* Brand */}
          <div className="md:col-span-5 lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-[14px] bg-gradient-to-br from-mango-400 to-leaf-500 flex items-center justify-center shadow-lg shadow-mango-500/20">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold font-heading tracking-tight">
                Mango<span className="text-mango-400">Express</span>
              </span>
            </div>
            <p className="text-white/60 text-[0.95rem] leading-relaxed mb-8 pr-4">
              Premium farm-fresh mangoes and tropical artisanal products delivered directly to your doorstep. Taste the sunshine in every bite.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-mango-500 hover:border-mango-500 hover:scale-110 hover:shadow-lg hover:shadow-mango-500/30 transition-all duration-400 group" aria-label="Instagram">
                <Camera className="w-5 h-5 text-white/70 group-hover:text-white" />
              </a>
              <a href="#" className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-mango-500 hover:border-mango-500 hover:scale-110 hover:shadow-lg hover:shadow-mango-500/30 transition-all duration-400 group" aria-label="Facebook">
                <Globe className="w-5 h-5 text-white/70 group-hover:text-white" />
              </a>
              <a href="#" className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-mango-500 hover:border-mango-500 hover:scale-110 hover:shadow-lg hover:shadow-mango-500/30 transition-all duration-400 group" aria-label="Twitter">
                <MessageCircle className="w-5 h-5 text-white/70 group-hover:text-white" />
              </a>
            </div>
          </div>

          <div className="md:col-span-7 lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div>
              <h4 className="font-heading font-bold text-xl mb-6 tracking-tight">Quick Links</h4>
              <ul className="space-y-4">
                {['Home', 'Shop', 'About', 'Contact'].map(link => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-white/60 hover:text-mango-400 transition-colors duration-300 text-[0.95rem] flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-mango-400/0 group-hover:bg-mango-400 transition-colors" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="font-heading font-bold text-xl mb-6 tracking-tight">Categories</h4>
              <ul className="space-y-4">
                {['Fresh Mangoes', 'Dried Mangoes', 'Mango Drinks', 'Gift Sets', 'Condiments'].map(cat => (
                  <li key={cat}>
                    <a
                      href="#products"
                      className="text-white/60 hover:text-mango-400 transition-colors duration-300 text-[0.95rem] flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-mango-400/0 group-hover:bg-mango-400 transition-colors" />
                      {cat}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div className="col-span-2 sm:col-span-1">
              <h4 className="font-heading font-bold text-xl mb-6 tracking-tight">Support</h4>
              <ul className="space-y-4">
                {['Shipping Policy', 'Returns', 'Privacy Policy', 'Terms of Service'].map(item => (
                  <li key={item}>
                    <a href="#" className="text-white/60 hover:text-mango-400 transition-colors duration-300 text-[0.95rem] flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-mango-400/0 group-hover:bg-mango-400 transition-colors" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-white/50 text-sm flex items-center gap-1.5 font-medium tracking-wide border border-white/5 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm">
            © 2026 Mango Express. Made with <Heart className="w-3.5 h-3.5 fill-red-500 text-red-500 animate-pulse" /> for mango lovers.
          </p>
          <button
            onClick={scrollToTop}
            className="group w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gradient-to-br hover:from-mango-400 hover:to-leaf-500 hover:shadow-xl hover:shadow-mango-500/30 hover:-translate-y-1.5 transition-all duration-400 overflow-hidden relative"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 text-white/70 group-hover:text-white transition-colors animate-float" />
          </button>
        </div>
      </div>
    </footer>
  );
}
