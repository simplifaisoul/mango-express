import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
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
        borderRadius: '12px',
        background: '#166534',
        color: '#fff',
        fontFamily: 'Outfit, sans-serif',
      },
      duration: 3000,
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#fffdf7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-mango-600 uppercase tracking-widest">
            Get In Touch
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-tropical-800 mt-2 mb-4">
            We'd Love to <span className="gradient-text">Hear From You</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Questions about our mangoes? Need bulk ordering info? Drop us a message!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gradient-to-br from-leaf-700 to-tropical-900 rounded-3xl p-8 text-white">
              <h3 className="font-heading text-2xl font-bold mb-6">Contact Info</h3>
              
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-mango-400" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">Email</p>
                    <a
                      href="mailto:asimarpike@gmail.com"
                      className="text-white hover:text-mango-300 transition-colors font-medium"
                    >
                      asimarpike@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-leaf-400" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">Phone</p>
                    <p className="font-medium">+1 (555) MANGO-01</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-mango-400" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">Location</p>
                    <p className="font-medium">Fresh Farm District, Tropical Ave</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-leaf-400" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">Hours</p>
                    <p className="font-medium">Mon - Sat: 7AM - 8PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-br from-mango-400 to-mango-600 rounded-3xl p-8 text-white">
              <h4 className="font-heading text-xl font-bold mb-2">🥭 Mango Newsletter</h4>
              <p className="text-white/80 text-sm mb-4">
                Get exclusive deals & seasonal updates!
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/40 text-sm"
                  id="newsletter-email"
                />
                <button
                  onClick={() =>
                    toast.success('Subscribed! 🎉', {
                      style: {
                        borderRadius: '12px',
                        fontFamily: 'Outfit, sans-serif',
                      },
                    })
                  }
                  className="w-12 h-12 rounded-xl bg-white text-mango-600 flex items-center justify-center hover:bg-white/90 transition-colors flex-shrink-0"
                  aria-label="Subscribe to newsletter"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl p-8 shadow-lg border border-mango-100/50"
              id="contact-form"
            >
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-tropical-800 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-mango-50/50 border border-mango-200/60 focus:border-mango-400 focus:ring-4 focus:ring-mango-400/10 outline-none transition-all duration-300 text-tropical-800"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-tropical-800 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-mango-50/50 border border-mango-200/60 focus:border-mango-400 focus:ring-4 focus:ring-mango-400/10 outline-none transition-all duration-300 text-tropical-800"
                    required
                  />
                </div>
              </div>
              <div className="mb-5">
                <label htmlFor="message" className="block text-sm font-semibold text-tropical-800 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us what you need..."
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl bg-mango-50/50 border border-mango-200/60 focus:border-mango-400 focus:ring-4 focus:ring-mango-400/10 outline-none transition-all duration-300 text-tropical-800 resize-none"
                  required
                />
              </div>
              <button type="submit" className="btn-secondary w-full justify-center text-lg py-4" id="send-message-button">
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
