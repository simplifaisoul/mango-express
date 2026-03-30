import { Leaf, Truck, Shield, Award, Users } from 'lucide-react';

const features = [
  {
    icon: <Leaf className="w-7 h-7 text-leaf-500" />,
    title: '100% Organic',
    description: 'Naturally grown without pesticides or chemicals. Pure, clean, and healthy.',
  },
  {
    icon: <Truck className="w-7 h-7 text-mango-500" />,
    title: 'Express Delivery',
    description: 'Same-day delivery on orders before 2 PM. Fresh from orchard to doorstep.',
  },
  {
    icon: <Shield className="w-7 h-7 text-leaf-500" />,
    title: 'Freshness Guaranteed',
    description: 'Not happy? Full refund, no questions asked. We stand behind our quality.',
  },
  {
    icon: <Award className="w-7 h-7 text-mango-500" />,
    title: 'Premium Quality',
    description: 'Hand-selected by expert farmers. Only the finest mangoes make the cut.',
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
    <section id="about" className="py-20 lg:py-28 bg-gradient-to-b from-[#fffdf7] to-leaf-50/30">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-leaf-600 uppercase tracking-widest">
            Why Choose Us
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-tropical-800 mt-2 mb-4">
            The <span className="gradient-text">Mango Express</span> Difference
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            We're passionate about delivering the freshest, most flavorful mangoes straight from trusted farms to your family's table.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className="bg-white rounded-3xl p-7 shadow-sm border border-mango-100/50 hover:shadow-xl hover:shadow-mango-200/20 hover:-translate-y-2 transition-all duration-400 animate-fade-in-up opacity-0"
              style={{ animationDelay: `${idx * 150}ms`, animationFillMode: 'forwards' }}
            >
              <div className="feature-icon mb-5">{feature.icon}</div>
              <h3 className="font-heading text-lg font-bold text-tropical-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Banner */}
        <div className="bg-gradient-to-r from-leaf-700 via-leaf-800 to-tropical-900 rounded-3xl p-8 lg:p-12 shadow-2xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div
                key={stat.label}
                className="text-center animate-fade-in-up opacity-0"
                style={{ animationDelay: `${idx * 100}ms`, animationFillMode: 'forwards' }}
              >
                <div className="text-3xl lg:text-4xl font-bold text-mango-400 font-heading mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-2 mt-8 text-white/60 text-sm">
            <Users className="w-4 h-4" />
            Trusted by thousands of mango lovers across the country
          </div>
        </div>
      </div>
    </section>
  );
}
