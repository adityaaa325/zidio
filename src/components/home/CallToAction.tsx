
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-primary/90 to-accent/90 p-1">
      <div className="absolute inset-0 bg-grid-white/5 bg-grid-white/5 bg-[length:20px_20px] [mask-image:radial-gradient(white,transparent_70%)] pointer-events-none"></div>
      
      <div className="relative rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        
        <div className="relative z-20 p-8 md:p-12 text-center lg:text-left">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
            <div>
              <motion.h2 
                className="text-4xl md:text-5xl font-bold mb-4 text-white text-comic text-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                JOIN THE HERO CLUB
              </motion.h2>
              
              <motion.p 
                className="text-white/90 text-lg mb-6 max-w-md mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Sign up now and get 15% off your first order, plus early access to new releases, exclusive offers, and superhero insider content!
              </motion.p>
              
              <motion.div 
                className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Link 
                  to="/register"
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-hero-yellow rounded-md hover:bg-hero-yellow/90 focus:shadow-outline focus:outline-none text-comic text-lg"
                >
                  SIGN UP NOW
                  <ArrowRight size={18} className="ml-2" />
                </Link>
                
                <Link 
                  to="/login"
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-transparent border-2 border-white/40 rounded-md hover:bg-white/10 focus:shadow-outline focus:outline-none text-comic text-lg"
                >
                  LOG IN
                </Link>
              </motion.div>
            </div>
            
            <div className="hidden lg:block">
              <motion.div 
                className="relative h-[300px]"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VwZXJoZXJvJTIwY29zdHVtZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" 
                  alt="Superhero" 
                  className="absolute w-48 h-auto object-contain top-0 left-10 drop-shadow-2xl animate-float"
                  style={{ animationDelay: '0s' }}
                />
                <img 
                  src="https://images.unsplash.com/photo-1608889476561-6242cfdbf622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3VwZXJoZXJvJTIwY29zdHVtZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" 
                  alt="Superhero" 
                  className="absolute w-36 h-auto object-contain bottom-0 right-10 drop-shadow-2xl animate-float"
                  style={{ animationDelay: '1s' }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
