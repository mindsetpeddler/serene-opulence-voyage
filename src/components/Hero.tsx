import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Cinematic Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ 
          backgroundImage: `url('https://storage.googleapis.com/dala-prod-public-storage/generated-images/24828139-b3cc-43e4-a27b-8f775a0dbdc1/hero-bg-31ad5200-1775747515830.webp')`,
          filter: 'brightness(0.6)'
        }}
      />
      
      {/* Overlay Gradients */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#121212]/40 via-transparent to-[#121212]" />
      <div className="absolute inset-0 z-10 god-rays" />

      <div className="relative z-20 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="block text-[#C5A059] text-sm md:text-base tracking-[0.5em] uppercase mb-6"
          >
            The Art of Conscious Travel
          </motion.span>
          
          <h1 className="text-6xl md:text-8xl font-serif mb-8 leading-tight text-white drop-shadow-[0_0_20px_rgba(197,160,89,0.3)]">
            Transcend the <br />
            <span className="italic text-[#C5A059]">Ordinary</span>
          </h1>

          <p className="text-white/70 text-lg md:text-xl font-sans font-light tracking-widest max-w-2xl mx-auto mb-12">
            Curated spiritual retreats designed to awaken the soul and rejuvenate the spirit in the world's most sacred landscapes.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <motion.button
              whileHover={{ 
                boxShadow: "0 0 25px rgba(197, 160, 89, 0.5)",
                backgroundColor: "#C5A059",
                color: "#121212"
              }}
              className="px-10 py-4 border border-[#C5A059] text-[#C5A059] tracking-[0.3em] uppercase transition-all duration-500 text-sm font-semibold"
            >
              Begin Your Journey
            </motion.button>
            <button className="text-white/80 hover:text-white tracking-[0.3em] uppercase text-sm border-b border-white/20 pb-1 transition-all">
              Explore Destinations
            </button>
          </div>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-[#C5A059] to-transparent" />
        <span className="text-[10px] tracking-[0.5em] uppercase text-[#C5A059]">Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;