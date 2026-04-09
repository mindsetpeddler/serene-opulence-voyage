import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import Destinations from "./components/Destinations";
import ParallaxTexture from "./components/ParallaxTexture";
import Footer from "./components/Footer";

function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Inject Fonts
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Montserrat:wght@100;200;300;400;500;600;700&display=swap';
    document.head.appendChild(link);

    // Inject Custom Styles
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes glow {
        from { text-shadow: 0 0 10px #C5A059, 0 0 20px #C5A059; }
        to { text-shadow: 0 0 20px #C5A059, 0 0 30px #C5A059, 0 0 40px #C5A059; }
      }
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
        100% { transform: translateY(0px); }
      }
      .font-serif { font-family: 'Cormorant Garamond', serif; }
      .font-sans { font-family: 'Montserrat', sans-serif; }
      .text-glow { text-shadow: 0 0 15px rgba(197, 160, 89, 0.5); }
      .glass { background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.1); }
      .specular { position: relative; overflow: hidden; }
      .specular::after {
        content: ''; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%;
        background: linear-gradient(45deg, transparent 0%, rgba(255,255,255,0.05) 45%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.05) 55%, transparent 100%);
        transform: rotate(45deg); pointer-events: none; transition: transform 0.6s ease;
      }
      .specular:hover::after { transform: rotate(45deg) translate(20%, 20%); }
      .god-rays { background: radial-gradient(circle at 50% -20%, rgba(197, 160, 89, 0.15) 0%, transparent 70%); }
      body { background-color: #121212; color: #F5F5F5; margin: 0; padding: 0; }
    `;
    document.head.appendChild(style);

    document.body.className = "bg-[#121212] text-[#F5F5F5] font-sans";

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative bg-[#121212] overflow-x-hidden min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        
        <div className="relative">
          <ParallaxTexture 
            image="https://storage.googleapis.com/dala-prod-public-storage/generated-images/24828139-b3cc-43e4-a27b-8f775a0dbdc1/texture-silk-31330ac1-1775747515825.webp" 
            speed={0.2}
            className="top-[20%] opacity-10"
          />
          <Philosophy />
        </div>

        <div className="relative">
          <ParallaxTexture 
            image="https://storage.googleapis.com/dala-prod-public-storage/generated-images/24828139-b3cc-43e4-a27b-8f775a0dbdc1/texture-stone-b363914a-1775747515545.webp" 
            speed={-0.1}
            className="top-[50%] right-0 opacity-10"
          />
          <Destinations />
        </div>

        <div className="relative">
          <ParallaxTexture 
            image="https://storage.googleapis.com/dala-prod-public-storage/generated-images/24828139-b3cc-43e4-a27b-8f775a0dbdc1/texture-smoke-a7c6c46d-1775747514855.webp" 
            speed={0.3}
            className="bottom-[10%] left-[10%] opacity-20"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;