
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CategoryBannerProps {
  title: string;
  description: string;
  image: string;
  link: string;
  color: string;
  index: number;
}

const CategoryBanner = ({
  title,
  description,
  image,
  link,
  color,
  index,
}: CategoryBannerProps) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div 
      className={`relative overflow-hidden rounded-lg ${color} h-[300px] md:h-[250px] group`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="absolute inset-0 flex items-center">
        <div className={`w-full md:w-1/2 p-6 md:p-8 z-10 ${isEven ? 'md:ml-auto text-right' : ''}`}>
          <motion.h3 
            className="text-3xl md:text-4xl font-bold mb-2 text-white text-comic text-shadow"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
          >
            {title}
          </motion.h3>
          <motion.p 
            className="text-white/90 mb-4 text-sm md:text-base"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
          >
            {description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
          >
            <Link 
              to={link} 
              className="inline-flex items-center text-white text-comic text-lg hover:underline"
            >
              EXPLORE
              <ArrowRight size={18} className="ml-1 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute inset-0 bg-gradient-to-r ${isEven ? 'from-transparent via-black/60 to-black/80' : 'from-black/80 via-black/60 to-transparent'}`}></div>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
    </motion.div>
  );
};

export default CategoryBanner;
