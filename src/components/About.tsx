import { Leaf, Truck, Shield, Award, Users, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: <Leaf className="w-7 h-7 text-leaf-500" />,
    title: '100% Organic',
    description: 'Naturally grown without pesticides or chemicals. Pure, clean, and healthy.',
    accent: 'from-leaf-400/20 to-leaf-500/10',
  },
  {
    icon: <Truck className="w-7 h-7 text-mango-500" />,
    title: 'Express Delivery',
    description: 'Same-day delivery on orders before 2 PM. Fresh from orchard to doorstep.',
    accent: 'from-mango-400/20 to-mango-500/10',
  },
  {
    icon: <Shield className="w-7 h-7 text-leaf-500" />,
    title: 'Freshness Guaranteed',
    description: 'Not happy? Full refund, no questions asked. We stand behind our quality.',
    accent: 'from-leaf-400/20 to-leaf-500/10',
  },
  {
    icon: <Award className="w-7 h-7 text-mango-500" />,
    title: 'Premium Quality',
    description: 'Hand-selected by expert farmers. Only the finest mangoes make the cut.',
    accent: 'from-mango-400/20 to-mango-500/10',
  },
];

const stats = [
  { value: '50K+', label: 'Happy Customers' },
  { value: '12+', label: 'Mango Varieties' },
  { value: '99%', label: 'Satisfaction Rate' },
  { value: '24hr', label: 'Delivery Time' },
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-gradient-to-b from-[#fffdf7] via-white to-leaf-50/20 relative overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute top-40 -right-40 w-[500px] h-[500px] bg-mango-200/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 -left-40 w-[400px] h-[400px] bg-leaf-200/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-main relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-leaf-100/50 text-leaf-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4 border border-leaf-200/50">
            <Shield className="w-4 h-4" />
            Why Choose Us
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-tropical-800 mb-5 tracking-tight">
            The <span className="gradient-text">Mango Express</span> Difference
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            We're passionate about delivering the freshest, most flavorful mangoes straight from trusted farms to your family's table.
          </p>
          <div className="section-divider mt-6" />
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className="group bg-white rounded-[1.5rem] p-8 shadow-sm border border-gray-100/80 hover:shadow-xl hover:shadow-mango-200/15 hover:-translate-y-3 transition-all duration-500 animate-fade-in-up opacity-0 relative overflow-hidden"
              style={{ animationDelay: `${idx * 120}ms`, animationFillMode: 'forwards' }}
            >
              {/* Hover glow */}
              <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${feature.accent} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className="feature-icon mb-6 group-hover:scale-110 transition-transform duration-500">{feature.icon}</div>
                <h3 className="font-heading text-lg font-bold text-tropical-800 mb-2.5">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Banner */}
        <div className="relative bg-gradient-to-r from-leaf-700 via-leaf-800 to-tropical-900 rounded-[2rem] p-10 lg:p-14 shadow-2xl shadow-leaf-900/30 overflow-hidden noise-overlay">
          {/* Decorative */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-mango-400/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-leaf-400/5 rounded-full blur-[80px]" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {stats.map((stat, idx) => (
              <div
                key={stat.label}
                className="text-center animate-count-up opacity-0"
                style={{ animationDelay: `${idx * 150}ms`, animationFillMode: 'forwards' }}
              >
                <div className="text-4xl lg:text-5xl font-bold text-mango-400 font-heading mb-2 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm text-white/50 font-medium tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-2 mt-10 text-white/40 text-sm relative z-10">
            <Users className="w-4 h-4" />
            Trusted by thousands of mango lovers across the country
          </div>

          <div className="flex justify-center mt-8 relative z-10">
            <a href="#products" className="inline-flex items-center gap-2 text-mango-300 hover:text-mango-200 text-sm font-semibold transition-colors duration-300 group">
              Explore Our Products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
