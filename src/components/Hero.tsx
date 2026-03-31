import { ArrowRight, Star, Truck, Shield, Clock, ChevronDown } from 'lucide-react';
import { heroImg } from '../data/products';

export default function Hero() {
  return (
    <section id="home" className="hero-garden relative min-h-screen flex items-center overflow-hidden">
      {/* Garden Orbs & Sunlight */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-mango-200/40 rounded-full blur-[100px] animate-sun-glow" />
        <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-leaf-200/40 rounded-full blur-[120px] animate-float-gentle" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-mango-100/30 rounded-full blur-[150px]" />
        
        {/* Subtle grid overlay for texture */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(#16a34a 1px, transparent 1px), linear-gradient(90deg, #16a34a 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container-main py-28 lg:py-0 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* Text Content */}
          <div className="animate-fade-in-up">
            <div className="section-badge mb-6">
              <span className="relative flex h-2.5 w-2.5 mr-1 pt-0.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mango-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-mango-500" />
              </span>
              Spring Harvest is Here
            </div>

            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-earth-800 leading-[1.05] mb-6 tracking-tight">
              Ottawa's Fresh
              <br />
              <span className="gradient-text">Mangoes</span>
              <br />
              <span className="text-leaf-600">Delivered</span>
            </h1>

            <p className="text-lg lg:text-xl text-earth-600 max-w-lg mb-10 leading-relaxed font-light">
              From sun-kissed organic orchards directly to your doorstep. Experience the world's finest Alphonso, Kent, and Green mangoes in their ripest season.
            </p>

            <div className="flex flex-wrap gap-4 mb-14">
              <a href="#products" className="btn-primary">
                Shop Fresh Harvest <ArrowRight className="w-5 h-5 ml-1" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 text-earth-600 border border-earth-200 px-8 py-3.5 rounded-full font-semibold hover:bg-white hover:border-earth-300 hover:text-leaf-700 hover:shadow-sm transition-all duration-300"
              >
                Our Story
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/70 border border-leaf-100 rounded-full text-sm font-medium text-earth-600 hover:shadow-sm transition-shadow">
                <Truck className="w-4 h-4 text-mango-500" />
                Free Shipping $50+
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/70 border border-leaf-100 rounded-full text-sm font-medium text-earth-600 hover:shadow-sm transition-shadow">
                <Shield className="w-4 h-4 text-leaf-500" />
                100% Organic
              </div>
              <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white/70 border border-leaf-100 rounded-full text-sm font-medium text-earth-600 hover:shadow-sm transition-shadow">
                <Clock className="w-4 h-4 text-mango-500" />
                Same Day Delivery
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-in-right hidden lg:block">
            <div className="relative animate-float-gentle flex justify-center items-center">
              {/* Organic glowing background frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-mango-200 to-leaf-200 organic-shape-1 opacity-80 scale-105 blur-lg" />
              <div className="absolute inset-0 bg-white organic-shape-1 scale-[1.02] shadow-xl" />

              <img
                src={heroImg}
                alt="Fresh premium mangoes from the garden"
                className="relative z-10 w-full max-w-md mx-auto rounded-full shadow-2xl shadow-leaf-900/10 object-cover aspect-square"
              />

              {/* Floating Cards (Glass Garden) */}
              <div className="absolute -left-6 top-[20%] glass-garden text-earth-800 px-5 py-4 rounded-2xl animate-fade-in-up delay-300">
                <div className="text-3xl font-bold text-leaf-600 font-heading">12+</div>
                <div className="text-xs text-earth-500 font-medium tracking-wide">Premium Products</div>
              </div>
              
              <div className="absolute -right-6 bottom-[20%] glass-garden text-earth-800 px-5 py-4 rounded-2xl animate-fade-in-up delay-500">
                <div className="flex items-center gap-1.5 text-mango-500">
                  <Star className="w-4 h-4 fill-mango-500" />
                  <span className="text-3xl font-bold font-heading text-earth-800">4.9</span>
                </div>
                <div className="text-xs text-earth-500 font-medium tracking-wide">Customer Rating</div>
              </div>
              
              {/* Premium Quality Floating Badge */}
              <div className="absolute right-12 top-6 bg-white/90 backdrop-blur border border-mango-100 text-earth-700 px-3 py-1.5 rounded-full animate-fade-in-up delay-500 text-xs font-bold shadow-sm flex items-center gap-1.5">
                <span className="text-mango-500">✨</span> Farm to Table
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-fade-in-up delay-500 hidden lg:flex flex-col items-center gap-2">
        <span className="text-earth-400 text-xs font-semibold tracking-widest uppercase">Scroll to Explore</span>
        <ChevronDown className="w-5 h-5 text-leaf-500 animate-bounce" />
      </div>

      {/* Soft Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path
            d="M0 60L48 55C96 50 192 40 288 42C384 44 480 58 576 65C672 72 768 72 864 65C960 58 1056 44 1152 40C1248 36 1344 42 1392 45L1440 48V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V60Z"
            fill="#f5f5f4" 
          />
        </svg>
      </div>
    </section>
  );
}
