import { Leaf, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-earth-100 text-earth-800 relative overflow-hidden border-t border-earth-200">
      <div className="container-main py-16 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-16 mb-12">
          {/* Brand */}
          <div className="md:col-span-5 lg:col-span-4">
            <div className="flex items-center gap-2 mb-6 cursor-pointer" onClick={scrollToTop}>
              <div className="w-10 h-10 rounded-full bg-leaf-600 flex items-center justify-center shadow-md">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold font-heading tracking-tight text-earth-800">
                Mango<span className="text-mango-500 ml-0.5">Express</span>
              </span>
            </div>
            <p className="text-earth-500 text-[0.95rem] leading-relaxed pr-4 font-medium mb-6">
              Harvested with care. Delivered with love. Ottawa's premier source for organic, farm-fresh fruit.
            </p>
          </div>

          <div className="md:col-span-7 lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8 pt-2">
            <div>
              <h4 className="font-heading font-bold text-lg mb-5 tracking-tight text-earth-900">Explore</h4>
              <ul className="space-y-3">
                {['Home', 'Shop', 'Our Story', 'Contact'].map(link => (
                  <li key={link}>
                    <a
                      href={link === 'Home' ? '#home' : link === 'Shop' ? '#products' : link === 'Our Story' ? '#about' : '#contact'}
                      className="text-earth-500 hover:text-leaf-600 transition-colors duration-300 text-sm font-medium flex items-center gap-2"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold text-lg mb-5 tracking-tight text-earth-900">Information</h4>
              <ul className="space-y-3">
                {['Delivery Options', 'Refund Policy', 'Privacy Policy', 'Terms of Service'].map(item => (
                  <li key={item}>
                    <a href="#" className="text-earth-500 hover:text-leaf-600 transition-colors duration-300 text-sm font-medium flex items-center gap-2">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-earth-200 w-full mb-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-earth-500 text-sm flex items-center gap-1.5 font-medium tracking-wide">
            © 2026 Mango Express. Made with <Heart className="w-4 h-4 fill-red-400 text-red-400 animate-pulse" /> in Ottawa.
          </p>
          <div className="flex items-center gap-6 text-sm font-semibold text-earth-400">
             <span>100% Organic</span>
             <span>•</span>
             <span>Cruelty Free</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
