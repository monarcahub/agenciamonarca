import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 100 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Parallax transforms for background elements
  const circle1X = useTransform(springX, [-1000, 1000], [50, -50]);
  const circle1Y = useTransform(springY, [-1000, 1000], [50, -50]);
  
  const circle2X = useTransform(springX, [-1000, 1000], [-80, 80]);
  const circle2Y = useTransform(springY, [-1000, 1000], [-80, 80]);

  useEffect(() => {
    const handleMove = (e: MouseEvent | TouchEvent) => {
      const x = 'clientX' in e ? e.clientX : (e as TouchEvent).touches[0].clientX;
      const y = 'clientY' in e ? e.clientY : (e as TouchEvent).touches[0].clientY;
      
      const { innerWidth, innerHeight } = window;
      mouseX.set(x - innerWidth / 2);
      mouseY.set(y - innerHeight / 2);
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('touchmove', handleMove, { passive: true });
    
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('touchmove', handleMove);
    };
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-screen pt-12 pb-20 flex items-center overflow-hidden bg-brand-dark">
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-brand-dark via-[#2a241e] to-[#1a1612]" />
        
        {/* Large circles with autonomous and interactive movement */}
        <motion.div 
          style={{ x: circle1X, y: circle1Y }}
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 2, 0]
          }}
          transition={{ 
            y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 12, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-white/5 border border-white/10" 
        />
        
        <motion.div 
          style={{ x: circle2X, y: circle2Y }}
          animate={{ 
            y: [0, 30, 0],
            rotate: [0, -3, 0]
          }}
          transition={{ 
            y: { duration: 10, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 15, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] rounded-full bg-brand-orange/5 border border-brand-orange/10" 
        />
        
        {/* Slanted overlays */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-black/20 -skew-x-12 transform origin-top-right" />
      </div>

      <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
        <div className="max-w-2xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-brand-orange font-bold tracking-[0.2em] text-xs md:text-sm mb-4 uppercase"
          >
            Use Inteligência Artificial
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-8xl font-black text-white leading-tight mb-6 drop-shadow-sm"
          >
            EM SEU <br />
            <span className="inline-block border-2 md:border-4 border-white px-4 py-1 mt-2">
              NEGÓCIO
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 mb-10 font-medium max-w-xl"
          >
            Somos agência especializada em automações com IA para empresas
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a 
              href="https://wa.me/5555996079863" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-zinc-900 px-10 py-4 rounded-md font-bold hover:bg-zinc-100 transition-all uppercase tracking-wider text-sm flex items-center space-x-2"
            >
              <MessageCircle className="w-5 h-5 text-green-600 fill-current" />
              <span>Contato</span>
            </a>
            <a 
              href="/#servicos"
              className="bg-brand-orange text-white px-10 py-4 rounded-md font-bold hover:bg-orange-400 transition-all uppercase tracking-wider text-sm shadow-lg shadow-brand-orange/20"
            >
              Saiba Mais
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom Slant */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-white transform -skew-y-3 origin-bottom-left" />
    </section>
  );
}
