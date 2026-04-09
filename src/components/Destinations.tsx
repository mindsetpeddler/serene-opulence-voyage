import { motion } from "framer-motion";

const destinations = [
  {
    title: "The Silent Peaks",
    location: "Himalayas, India",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/24828139-b3cc-43e4-a27b-8f775a0dbdc1/destination-himalayas-v1-2f852598-1775747513613.webp",
    description: "Deep meditation amidst the world's highest spiritual gateways."
  },
  {
    title: "Azure Sanctuary",
    location: "Ubud, Bali",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/24828139-b3cc-43e4-a27b-8f775a0dbdc1/destination-bali-62150a31-1775747515740.webp",
    description: "Tropical healing rituals and jungle purification ceremonies."
  },
  {
    title: "Golden Sands",
    location: "Merzouga, Morocco",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/24828139-b3cc-43e4-a27b-8f775a0dbdc1/destination-morocco-f9b5ad58-1775747514325.webp",
    description: "Star-lit desert silence and ancient Berber wisdom."
  }
];

const Destinations = () => {
  return (
    <section id="destinations" className="py-24 md:py-40 bg-[#121212] relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <span className="text-[#C5A059] tracking-[0.4em] uppercase text-xs mb-4 block">Selected Journeys</span>
            <h2 className="text-4xl md:text-6xl font-serif text-white">Sacred Destinations</h2>
          </div>
          <p className="text-white/50 text-sm tracking-[0.2em] uppercase max-w-xs border-l border-[#C5A059]/30 pl-6">
            Hand-selected sanctuaries chosen for their unique energetic frequency and architectural beauty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm mb-6 specular">
                <img 
                  src={dest.image} 
                  alt={dest.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 filter brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-60" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-xs text-[#C5A059] tracking-[0.3em] uppercase">{dest.location}</span>
                  <h3 className="text-2xl font-serif text-white mt-1">{dest.title}</h3>
                </div>
              </div>
              
              <p className="text-white/60 text-sm font-sans font-light leading-relaxed mb-4">
                {dest.description}
              </p>
              
              <button className="text-[#C5A059] text-xs tracking-[0.3em] uppercase flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                Explore <span className="text-lg">→</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;