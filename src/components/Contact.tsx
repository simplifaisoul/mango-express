import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from 'lucide-react';
import toast from 'react-hot-toast';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully! We\'ll get back to you soon 💚', {
      style: {
        borderRadius: '16px',
        background: '#166534',
        color: '#fff',
        fontFamily: 'Outfit, sans-serif',
        padding: '16px 24px',
        boxShadow: '0 20px 40px rgba(22, 101, 52, 0.2)',
      },
      duration: 4000,
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#fffdf7] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-mango-50/30 skew-x-12 translate-x-32 origin-top-right rounded-bl-[100px] pointer-events-none" />
      
      <div className="container-main relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-mango-100/60 text-mango-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4 border border-mango-200/60">
            <MessageSquare className="w-4 h-4" />
            Get In Touch
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-tropical-800 mb-5 tracking-tight">
            We'd Love to <span className="gradient-text">Hear From You</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Questions about our farm-fresh mangoes? Need bulk ordering info? Drop us a message and our team will get back to you promptly.
          </p>
          <div className="section-divider mt-6" />
        </div>

        <div className="grid lg:grid-cols-5 gap-10 xl:gap-14">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8 animate-slide-in-left">
            <div className="bg-gradient-to-br from-leaf-700 via-leaf-800 to-tropical-900 rounded-[2rem] p-10 text-white shadow-2xl shadow-leaf-900/20 relative overflow-hidden noise-overlay group">
              {/* Decorative circle */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-mango-400/10 rounded-full blur-3xl group-hover:bg-mango-400/20 transition-colors duration-700" />
              
              <h3 className="font-heading text-3xl font-bold mb-8 relative z-10 tracking-tight">Contact Info</h3>
              
              <div className="space-y-7 relative z-10">
                <div className="flex items-start gap-4 group/item cursor-pointer">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0 backdrop-blur-md border border-white/10 group-hover/item:bg-white/20 transition-all duration-300 group-hover/item:scale-110">
                    <Mail className="w-5 h-5 text-mango-400" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50 font-medium mb-1">Email</p>
                    <a
                      href="mailto:asimarpike@gmail.com"
                      className="text-white hover:text-mango-300 transition-colors font-medium text-lg tracking-wide"
                    >
                      asimarpike@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group/item">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0 backdrop-blur-md border border-white/10 group-hover/item:bg-white/20 transition-all duration-300 group-hover/item:scale-110">
                    <Phone className="w-5 h-5 text-leaf-400" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50 font-medium mb-1">Phone</p>
                    <p className="font-medium text-white text-lg tracking-wide">+1 (555) MANGO-01</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group/item">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0 backdrop-blur-md border border-white/10 group-hover/item:bg-white/20 transition-all duration-300 group-hover/item:scale-110">
                    <MapPin className="w-5 h-5 text-mango-400" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50 font-medium mb-1">Location</p>
                    <p className="font-medium text-white text-lg tracking-wide">Fresh Farm District, Tropical Ave</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group/item">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0 backdrop-blur-md border border-white/10 group-hover/item:bg-white/20 transition-all duration-300 group-hover/item:scale-110">
                    <Clock className="w-5 h-5 text-leaf-400" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50 font-medium mb-1">Hours</p>
                    <p className="font-medium text-white text-lg tracking-wide">Mon - Sat: 7AM - 8PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-br from-mango-400 to-mango-600 rounded-[2rem] p-10 text-white shadow-xl shadow-mango-500/20 relative overflow-hidden group hover:shadow-2xl hover:shadow-mango-500/30 transition-shadow duration-500">
              <div className="absolute inset-0 bg-white/5 blur-xl group-hover:bg-white/10 transition-colors duration-500 pointer-events-none" />
              <h4 className="font-heading text-2xl font-bold mb-3 relative z-10 tracking-tight">🥭 Mango Newsletter</h4>
              <p className="text-white/80 text-sm mb-6 leading-relaxed relative z-10">
                Get exclusive deals, seasonal updates, and early access to fresh harvests!
              </p>
              <div className="flex gap-2 relative z-10">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-5 py-3.5 rounded-xl bg-tropical-900/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/40 focus:bg-tropical-900/20 text-sm font-medium transition-all duration-300 backdrop-blur-sm shadow-inner"
                  id="newsletter-email"
                />
                <button
                  onClick={() =>
                    toast.success('Subscribed successfully! 🎉', {
                      style: {
                        borderRadius: '16px',
                        fontFamily: 'Outfit, sans-serif',
                        padding: '16px 24px',
                      },
                    })
                  }
                  className="w-[52px] h-[52px] rounded-xl bg-white text-mango-600 flex items-center justify-center hover:bg-mango-50 hover:scale-105 active:scale-95 transition-all duration-300 flex-shrink-0 shadow-lg"
                  aria-label="Subscribe to newsletter"
                >
                  <Send className="w-5 h-5 ml-0.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 animate-slide-in-right opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-[2rem] p-10 lg:p-12 shadow-2xl shadow-gray-200/50 border border-gray-100 h-full flex flex-col justify-center relative overflow-hidden group/form hover:border-mango-200/50 transition-colors duration-500"
              id="contact-form"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-mango-50 rounded-bl-[100px] -z-10 group-hover/form:scale-110 transition-transform duration-700 pointer-events-none" />
              
              <div className="mb-8">
                <h3 className="font-heading text-3xl font-bold text-tropical-800 tracking-tight mb-2">Send a Message</h3>
                <p className="text-gray-400 text-sm">Fill out the form below and we will get back to you shortly.</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div className="group/input">
                  <label htmlFor="name" className="block text-sm font-bold text-tropical-800 mb-2.5 ml-1 transition-colors group-focus-within/input:text-mango-600 tracking-wide uppercase">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-5 py-4 rounded-xl bg-gray-50/80 border border-gray-200/80 focus:border-mango-400 focus:bg-white hover:border-mango-300 outline-none transition-all duration-400 text-tropical-800 placeholder:text-gray-400 shadow-sm"
                    required
                  />
                </div>
                <div className="group/input">
                  <label htmlFor="email" className="block text-sm font-bold text-tropical-800 mb-2.5 ml-1 transition-colors group-focus-within/input:text-mango-600 tracking-wide uppercase">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-5 py-4 rounded-xl bg-gray-50/80 border border-gray-200/80 focus:border-mango-400 focus:bg-white hover:border-mango-300 outline-none transition-all duration-400 text-tropical-800 placeholder:text-gray-400 shadow-sm"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-8 group/input flex-1">
                <label htmlFor="message" className="block text-sm font-bold text-tropical-800 mb-2.5 ml-1 transition-colors group-focus-within/input:text-mango-600 tracking-wide uppercase">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us what you need..."
                  rows={5}
                  className="w-full h-full min-h-[160px] px-5 py-4 rounded-xl bg-gray-50/80 border border-gray-200/80 focus:border-mango-400 focus:bg-white hover:border-mango-300 outline-none transition-all duration-400 text-tropical-800 placeholder:text-gray-400 resize-none shadow-sm"
                  required
                />
              </div>
              
              <button 
                type="submit" 
                className="btn-primary w-full justify-center text-[1.05rem] py-4.5 mt-auto shadow-xl shadow-mango-500/20" 
                id="send-message-button"
              >
                <Send className="w-5 h-5 ml-1" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
