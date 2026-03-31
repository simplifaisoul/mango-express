import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import toast from 'react-hot-toast';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent! We\'ll be in touch organically 🌿', {
      style: {
        borderRadius: '16px',
        background: '#16a34a',
        color: '#fff',
        fontFamily: 'Outfit, sans-serif',
        padding: '16px 24px',
        boxShadow: '0 20px 40px rgba(22, 163, 74, 0.2)',
      },
      duration: 4000,
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-earth-100 relative overflow-hidden">
      {/* Garden ambient lighting */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-mango-100/40 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-leaf-100/50 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3" />
      
      <div className="container-main relative z-10">
        <div className="text-center mb-16">
          <div className="section-badge mb-4">
            <MessageSquare className="w-4 h-4 text-leaf-600" />
            Get In Touch
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-earth-800 mb-5 tracking-tight">
            Reach Out to <span className="gradient-text">Our Farm</span>
          </h2>
          <p className="text-earth-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Have questions about your order or want to inquire about wholesale fresh mangoes? We are here to help.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-12 gap-10 xl:gap-14 bg-white rounded-[2rem] shadow-2xl shadow-earth-200/50 overflow-hidden border border-earth-100">
          
          {/* Contact Info Side */}
          <div className="lg:col-span-5 bg-gradient-to-br from-leaf-700 to-leaf-900 p-10 lg:p-12 text-white relative overflow-hidden flex flex-col justify-center">
            {/* Organic Shape overlay */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-mango-400/10 organic-shape-1 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-leaf-400/20 rounded-full blur-2xl pointer-events-none" />
            
            <h3 className="font-heading text-3xl font-bold mb-8 relative z-10">Contact Details</h3>
            
            <div className="space-y-8 relative z-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                  <Mail className="w-5 h-5 text-mango-300" />
                </div>
                <div>
                  <p className="text-sm text-white/60 font-medium mb-1 uppercase tracking-wider">Email Us</p>
                  <a href="mailto:asimarpike@gmail.com" className="text-white hover:text-mango-300 transition-colors font-medium text-lg">
                    asimarpike@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                  <Phone className="w-5 h-5 text-leaf-300" />
                </div>
                <div>
                  <p className="text-sm text-white/60 font-medium mb-1 uppercase tracking-wider">Call Us</p>
                  <p className="font-medium text-white text-lg">+1 (555) 867-5309</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                  <MapPin className="w-5 h-5 text-mango-300" />
                </div>
                <div>
                  <p className="text-sm text-white/60 font-medium mb-1 uppercase tracking-wider">Visit The Orchard</p>
                  <p className="font-medium text-white text-lg">123 Fresh Garden Way<br/>Ottawa, ON</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Side no BS */}
          <div className="lg:col-span-7 p-10 lg:p-12 animate-fade-in-up">
            <h3 className="font-heading text-3xl font-bold text-earth-800 tracking-tight mb-2">Send a Message</h3>
            <p className="text-earth-400 text-sm mb-8">Direct, simple, and organic. Just what you need.</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-earth-700 mb-2 ml-1 tracking-wide">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full px-5 py-4 rounded-xl bg-earth-50 border border-earth-200 focus:border-leaf-500 focus:bg-white hover:border-leaf-300 outline-none transition-all duration-300 text-earth-800 placeholder:text-earth-300 shadow-sm"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-earth-700 mb-2 ml-1 tracking-wide">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@example.com"
                    className="w-full px-5 py-4 rounded-xl bg-earth-50 border border-earth-200 focus:border-leaf-500 focus:bg-white hover:border-leaf-300 outline-none transition-all duration-300 text-earth-800 placeholder:text-earth-300 shadow-sm"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-earth-700 mb-2 ml-1 tracking-wide">
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can we help?"
                  rows={5}
                  className="w-full px-5 py-4 rounded-xl bg-earth-50 border border-earth-200 focus:border-leaf-500 focus:bg-white hover:border-leaf-300 outline-none transition-all duration-300 text-earth-800 placeholder:text-earth-300 resize-none shadow-sm"
                  required
                />
              </div>
              
              <button 
                type="submit" 
                className="btn-primary w-full shadow-lg shadow-leaf-500/20 mt-2 py-4"
              >
                <Send className="w-5 h-5 ml-1" />
                <span>Submit Request</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
