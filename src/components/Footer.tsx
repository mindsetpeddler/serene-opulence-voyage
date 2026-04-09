import { motion } from "framer-motion";
import { Compass, Instagram, Twitter, Mail, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer id="footer" className="relative bg-gradient-to-b from-[#121212] to-[#0a0a0a] pt-32 pb-12 overflow-hidden">
      {/* Decorative Gold Glow */}
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#C5A059]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-12 md:p-20 rounded-sm relative overflow-hidden"
          >
            {/* Subtle sheen on the card */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C5A059]/50 to-transparent" />
            
            <span className="text-[#C5A059] tracking-[0.5em] uppercase text-xs mb-6 block">Ready to Begin?</span>
            <h2 className="text-4xl md:text-7xl font-serif text-white mb-10 leading-tight">Book Your Journey</h2>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="bg-transparent border-b border-[#C5A059]/30 py-4 px-2 text-white placeholder:text-white/20 tracking-[0.2em] text-sm focus:outline-none focus:border-[#C5A059] transition-colors md:w-80 font-sans"
              />
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(197, 160, 89, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-[#C5A059] text-[#121212] tracking-[0.3em] uppercase text-xs font-bold flex items-center justify-center gap-3 transition-all duration-300"
              >
                Request Access <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
            
            <p className="mt-8 text-white/40 text-xs tracking-widest italic font-sans">
              *Limited availability for seasonal retreats. Early registration recommended.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-white/5 pt-20 pb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Compass className="text-[#C5A059] w-6 h-6" />
              <span className="text-xl font-serif tracking-[0.2em] text-[#C5A059]">VEDA VOYAGE</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-6 font-sans">
              Exquisite spiritual experiences curated for the discerning traveler. Reclaiming the sacred in every step.
            </p>
          </div>

          <div>
            <h4 className="text-white tracking-[0.2em] uppercase text-xs mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm text-white/50 font-sans">
              <li><a href="#" className="hover:text-[#C5A059] transition-colors">Destinations</a></li>
              <li><a href="#" className="hover:text-[#C5A059] transition-colors">Philosophy</a></li>
              <li><a href="#" className="hover:text-[#C5A059] transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-[#C5A059] transition-colors">Journal</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white tracking-[0.2em] uppercase text-xs mb-8">Support</h4>
            <ul className="space-y-4 text-sm text-white/50 font-sans">
              <li><a href="#" className="hover:text-[#C5A059] transition-colors">Concierge</a></li>
              <li><a href="#" className="hover:text-[#C5A059] transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-[#C5A059] transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-[#C5A059] transition-colors">Terms</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white tracking-[0.2em] uppercase text-xs mb-8">Connect</h4>
            <div className="flex gap-6">
              <a href="#" className="text-white/50 hover:text-[#C5A059] transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-white/50 hover:text-[#C5A059] transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-white/50 hover:text-[#C5A059] transition-colors"><Mail className="w-5 h-5" /></a>
            </div>
            <p className="mt-8 text-xs text-white/30 tracking-widest font-sans">
              © 2024 VEDA VOYAGE. <br />
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;