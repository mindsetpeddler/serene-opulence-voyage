import { motion } from "framer-motion";

const Philosophy = () => {
  return (
    <section id="philosophy" className="py-24 md:py-40 bg-[#121212] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Circular Masked Image */}
            <div className="relative aspect-square max-w-md mx-auto md:mx-0">
              <div 
                className="w-full h-full rounded-full overflow-hidden border-2 border-[#C5A059]/20 p-4"
                style={{
                  boxShadow: '0 0 50px rgba(197, 160, 89, 0.1)'
                }}
              >
                <img 
                  src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/24828139-b3cc-43e4-a27b-8f775a0dbdc1/philosophy-image-dd00beda-1775747514430.webp" 
                  alt="Meditation"
                  className="w-full h-full object-cover rounded-full filter grayscale-[0.2] brightness-90 hover:scale-110 transition-transform duration-[2s]"
                />
              </div>
              
              {/* Abstract decorative elements */}
              <div 
                className="absolute -top-10 -right-10 w-40 h-40 border border-[#C5A059]/10 rounded-full"
                style={{ animation: 'float 6s ease-in-out infinite' }}
              />
              <div 
                className="absolute -bottom-5 -left-5 w-24 h-24 border border-[#B87333]/20 rounded-full"
                style={{ animation: 'float 6s ease-in-out infinite', animationDelay: '1s' }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-[#C5A059] tracking-[0.4em] uppercase text-xs mb-4 block">Our Philosophy</span>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 text-white leading-tight">
              Ancient Wisdom for the <br />
              <span className="italic">Modern Seeker</span>
            </h2>
            
            <div className="space-y-6 text-white/70 font-sans font-light leading-relaxed max-w-lg">
              <p>
                At VedaVoyage, we believe that true luxury lies in the restoration of the soul. Our journeys are not merely vacations, but intentional pilgrimages designed to disconnect you from the noise of the modern world and reconnect you with your inner essence.
              </p>
              <p>
                Utilizing the principles of ancient Vedic philosophy, we curate environments where stillness is celebrated, and every breath is an invitation to presence.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-serif text-[#C5A059] text-2xl mb-2 italic">Holistic</h4>
                <p className="text-xs text-white/50 tracking-wider">Mind, Body & Spirit alignment</p>
              </div>
              <div>
                <h4 className="font-serif text-[#C5A059] text-2xl mb-2 italic">Exclusive</h4>
                <p className="text-xs text-white/50 tracking-wider">Private & Sacred locations</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Philosophy;