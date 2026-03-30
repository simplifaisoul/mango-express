import { ArrowRight, Star, Truck, Shield, Clock, ChevronDown } from 'lucide-react';
import { heroImg } from '../data/products';

export default function Hero() {
  return (
    <section id="home" className="hero-gradient noise-overlay relative min-h-screen flex items-center overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-mango-500/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-leaf-500/6 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-mango-400/4 rounded-full blur-[200px]" />
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container-main py-28 lg:py-0 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 items-center">
          {/* Text Content */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2.5 bg-mango-500/15 text-mango-300 px-5 py-2.5 rounded-full text-sm font-medium mb-8 border border-mango-500/20 backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mango-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-mango-400" />
              </span>
              🥭 Fresh Harvest Season is Here!
            </div>

            <h1 className="font-heading text-5xl sm:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white leading-[1.1] mb-7 tracking-tight">
              Ottawa's Fresh
              <br />
              <span className="gradient-text">Mangoes</span>
              <br />
              <span className="text-leaf-300">Delivered</span>
            </h1>

            <p className="text-lg lg:text-xl text-white/60 max-w-lg mb-10 leading-relaxed font-light">
              From sun-kissed orchards directly to your doorstep in Ottawa. Experience the world's finest Alphonso, Kent, and Green mangoes.
            </p>

            <div className="flex flex-wrap gap-4 mb-14">
              <a href="#products" className="btn-primary text-lg animate-pulse-glow">
                Shop Now <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 text-white/70 border border-white/15 px-8 py-3.5 rounded-full font-semibold hover:bg-white/8 hover:border-white/25 hover:text-white transition-all duration-400"
              >
                Learn More
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3">
              <div className="trust-badge">
                <Truck className="w-4 h-4 text-mango-400 flex-shrink-0" />
                Free Shipping $50+
              </div>
              <div className="trust-badge">
                <Shield className="w-4 h-4 text-leaf-400 flex-shrink-0" />
                100% Fresh Guarantee
              </div>
              <div className="trust-badge hidden sm:flex">
                <Clock className="w-4 h-4 text-mango-400 flex-shrink-0" />
                Same Day Delivery
              </div>
              <div className="trust-badge hidden md:flex">
                <Star className="w-4 h-4 text-mango-400 flex-shrink-0" />
                4.9/5 Rating
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-in-right hidden lg:block">
            <div className="relative animate-float">
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-mango-400/15 to-leaf-500/15 rounded-[2rem] blur-3xl transform rotate-3 scale-105" />
              <div className="absolute inset-0 bg-gradient-to-tr from-leaf-400/10 to-mango-300/10 rounded-[2rem] blur-2xl transform -rotate-3 scale-110" />

              <img
                src={heroImg}
                alt="Fresh premium mangoes"
                className="relative z-10 w-full max-w-lg mx-auto rounded-[2rem] shadow-2xl shadow-black/20"
              />

              {/* Stats Floating Cards */}
              <div className="absolute -left-6 top-[20%] glass-dark text-white px-5 py-4 rounded-2xl animate-fade-in-up delay-300 shadow-xl">
                <div className="text-3xl font-bold text-mango-400 font-heading">12+</div>
                <div className="text-xs text-white/60 font-medium tracking-wide">Premium Products</div>
              </div>
              <div className="absolute -right-2 bottom-[20%] glass-dark text-white px-5 py-4 rounded-2xl animate-fade-in-up delay-500 shadow-xl">
                <div className="flex items-center gap-1.5 text-mango-400">
                  <Star className="w-4 h-4 fill-mango-400" />
                  <span className="text-3xl font-bold font-heading">4.9</span>
                </div>
                <div className="text-xs text-white/60 font-medium tracking-wide">Customer Rating</div>
              </div>
              
              {/* New: Floating badge */}
              <div className="absolute right-8 top-4 glass text-white px-3 py-1.5 rounded-full animate-fade-in-up delay-700 text-xs font-semibold">
                ✨ Premium Quality
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-fade-in-up delay-800 hidden lg:flex flex-col items-center gap-2">
        <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 text-white/30 animate-bounce" />
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path
            d="M0 60L48 55C96 50 192 40 288 42C384 44 480 58 576 65C672 72 768 72 864 65C960 58 1056 44 1152 40C1248 36 1344 42 1392 45L1440 48V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V60Z"
            fill="#fffdf7"
          />
        </svg>
      </div>
    </section>
  );
}
