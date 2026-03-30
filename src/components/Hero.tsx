import { ArrowRight, Star, Truck, Shield, Clock } from 'lucide-react';
import { heroImg } from '../data/products';

export default function Hero() {
  return (
    <section id="home" className="hero-gradient relative min-h-screen flex items-center overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-mango-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-leaf-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-mango-400/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-0 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-mango-500/20 text-mango-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-mango-500/30">
              <span className="w-2 h-2 bg-mango-400 rounded-full animate-pulse" />
              🥭 Fresh Harvest Season is Here!
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
              Farm Fresh
              <br />
              <span className="gradient-text">Mangoes</span>
              <br />
              <span className="text-leaf-300">Delivered</span>
            </h1>

            <p className="text-lg text-white/70 max-w-lg mb-8 leading-relaxed">
              From sun-kissed orchards to your doorstep. Experience the world's finest 
              Alphonso, Kent, and Green mangoes — handpicked for perfection.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a href="#products" className="btn-primary text-lg animate-pulse-glow">
                Shop Now <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 text-white/80 border border-white/20 px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Learn More
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 text-white/60 text-sm">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-mango-400" />
                Free Shipping 50+
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-leaf-400" />
                100% Fresh Guarantee
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-mango-400" />
                Same Day Delivery
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-mango-400" />
                4.9/5 Rating
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-in-right hidden lg:block">
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-mango-400/20 to-leaf-500/20 rounded-3xl blur-2xl transform rotate-6" />
              <img
                src={heroImg}
                alt="Fresh premium mangoes"
                className="relative z-10 w-full max-w-lg mx-auto rounded-3xl shadow-2xl"
              />
              {/* Stats Floating Cards */}
              <div className="absolute -left-8 top-1/4 glass-dark text-white px-4 py-3 rounded-2xl animate-fade-in-up delay-300">
                <div className="text-2xl font-bold text-mango-400">12+</div>
                <div className="text-xs text-white/70">Premium Products</div>
              </div>
              <div className="absolute -right-4 bottom-1/4 glass-dark text-white px-4 py-3 rounded-2xl animate-fade-in-up delay-500">
                <div className="flex items-center gap-1 text-mango-400">
                  <Star className="w-4 h-4 fill-mango-400" />
                  <span className="text-2xl font-bold">4.9</span>
                </div>
                <div className="text-xs text-white/70">Customer Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 60L48 55C96 50 192 40 288 42C384 44 480 58 576 65C672 72 768 72 864 65C960 58 1056 44 1152 40C1248 36 1344 42 1392 45L1440 48V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V60Z"
            fill="#fffdf7"
          />
        </svg>
      </div>
    </section>
  );
}
