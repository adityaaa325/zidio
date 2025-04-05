
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden hero-gradient bg-hero-blue py-20 md:py-28">
      {/* Starry night swirls - decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-[10%] left-[5%] w-48 h-48 rounded-full bg-hero-yellow/20 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 15, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-[15%] right-[10%] w-64 h-64 rounded-full bg-hero-purple/20 blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute top-[40%] right-[20%] w-32 h-32 rounded-full bg-primary/30 blur-3xl"
          animate={{ 
            scale: [1, 1.4, 1],
            y: [0, -30, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>
      
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-comic text-white text-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              UNLEASH YOUR <br/>
              <span className="text-hero-yellow">SUPER</span> STYLE
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-white/80 mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Discover premium superhero merchandise inspired by your favorite comic universes. From Marvel to DC and beyond!
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button 
                size="lg" 
                className="text-comic text-lg px-8 py-6"
                asChild
              >
                <Link to="/products">
                  SHOP NOW <ArrowRight size={18} className="ml-2" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="text-comic text-lg bg-background/10 border-white/20 text-white hover:bg-white/20 hover:text-white px-8 py-6"
                asChild
              >
                <Link to="/about">
                  OUR STORY
                </Link>
              </Button>
            </motion.div>
          </div>
          
          <div className="w-full md:w-1/2 relative">
            <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">
              {/* Animated hero characters */}
              <motion.img 
                src="https://images.unsplash.com/photo-1601645191163-3fc0d5d64e35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VwZXJoZXJvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" 
                alt="Hero Character" 
                className="absolute h-72 md:h-96 object-contain drop-shadow-2xl animate-float"
                style={{ animationDelay: '0s', zIndex: 3 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
              />
              <motion.img 
                src="https://images.unsplash.com/photo-1594463750939-ebb28c3f7f75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3VwZXJoZXJvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" 
                alt="Hero Character 2" 
                className="absolute h-56 md:h-80 -right-4 top-10 object-contain drop-shadow-2xl animate-float"
                style={{ animationDelay: '1.5s', zIndex: 2 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              />
              <motion.img 
                src="https://images.unsplash.com/photo-1531259683007-016a7b628fc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3VwZXJoZXJvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" 
                alt="Hero Character 3" 
                className="absolute h-52 md:h-72 -left-6 top-16 object-contain drop-shadow-2xl animate-float"
                style={{ animationDelay: '0.75s', zIndex: 1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
