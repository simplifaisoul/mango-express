import { Leaf, Truck, Shield, Award, Users } from 'lucide-react';

const features = [
  {
    icon: <Leaf className="w-6 h-6 text-leaf-600" />,
    title: '100% Organic',
    description: 'Naturally grown without artificial pesticides. Pure, clean, and healthy roots.',
    accent: 'bg-leaf-50 border-leaf-100',
  },
  {
    icon: <Truck className="w-6 h-6 text-mango-600" />,
    title: 'Express Delivery',
    description: 'Same-day delivery on orders before 2 PM. Direct from orchard to doorstep.',
    accent: 'bg-mango-50 border-mango-100',
  },
  {
    icon: <Shield className="w-6 h-6 text-leaf-600" />,
    title: 'Freshness Guaranteed',
    description: 'Not happy? Full refund, no questions asked. We stand behind our quality.',
    accent: 'bg-leaf-50 border-leaf-100',
  },
  {
    icon: <Award className="w-6 h-6 text-mango-600" />,
    title: 'Premium Quality',
    description: 'Hand-selected by expert farmers. Only the finest mangoes make the cut.',
    accent: 'bg-mango-50 border-mango-100',
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
    <section id="about" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative nature strokes */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-mango-200/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 -left-20 w-[400px] h-[400px] bg-leaf-200/20 organic-shape-1 blur-2xl pointer-events-none" />

      <div className="container-main relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="section-badge mb-4">
            <Leaf className="w-4 h-4 text-leaf-600" />
            Our Roots
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-earth-800 mb-6 tracking-tight">
            Cultivating the <span className="gradient-text">Finest Mangoes</span>
          </h2>
          <p className="text-earth-500 text-lg leading-relaxed">
            We're a family of passionate growers bringing you the freshest, most flavorful mangoes straight from our sunlit orchards to your table. Simple, natural, and perfectly ripe.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className={`group bg-white rounded-[2rem] p-8 shadow-sm border border-earth-100 hover:shadow-xl hover:shadow-leaf-100/50 hover:-translate-y-2 transition-all duration-400 animate-fade-in-up opacity-0 relative overflow-hidden`}
              style={{ animationDelay: `${idx * 100}ms`, animationFillMode: 'forwards' }}
            >
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border ${feature.accent}`}>
                  {feature.icon}
                </div>
                <h3 className="font-heading text-xl font-bold text-earth-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-earth-500 leading-relaxed font-body">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Banner */}
        <div className="relative bg-gradient-to-br from-leaf-700 to-leaf-900 rounded-[2.5rem] p-10 lg:p-16 shadow-2xl shadow-leaf-900/10 overflow-hidden">
          {/* Subtle nature texture */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-mango-400/10 organic-shape-1 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-2xl" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
            {stats.map((stat, idx) => (
              <div
                key={stat.label}
                className="text-center animate-fade-in-up opacity-0"
                style={{ animationDelay: `${idx * 150}ms`, animationFillMode: 'forwards' }}
              >
                <div className="text-4xl lg:text-5xl font-bold gradient-text-sun font-heading mb-3 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm text-white/70 font-medium tracking-wide uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-12 relative z-10">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 rounded-full text-white text-sm">
              <Users className="w-4 h-4 text-mango-300" />
              Trusted by families across Ottawa
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
