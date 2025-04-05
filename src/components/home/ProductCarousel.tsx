
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from '@/components/products/ProductCard';

// Sample product data
const sampleProducts = [
  {
    id: 1,
    name: "Iron Man Arc Reactor Tee",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHN1cGVyaGVybyUyMHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    universe: "marvel" as const,
    rating: 4.8,
    isNew: true,
  },
  {
    id: 2,
    name: "Batman Dark Knight Tee",
    price: 27.99,
    image: "https://images.unsplash.com/photo-1518674660708-0e2c0473e68e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjB0c2hpcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    universe: "dc" as const,
    rating: 4.7,
  },
  {
    id: 3,
    name: "Naruto Shippuden Tee",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    universe: "anime" as const,
    rating: 4.5,
    isFeatured: true,
  },
  {
    id: 4,
    name: "Spider-Man Web Shooter Tee",
    price: 26.99,
    image: "https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    universe: "marvel" as const,
    rating: 4.6,
  },
  {
    id: 5,
    name: "Superman Man of Steel Tee",
    price: 25.99,
    image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    universe: "dc" as const,
    rating: 4.4,
  },
  {
    id: 6,
    name: "One Punch Man Tee",
    price: 23.99,
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    universe: "anime" as const,
    rating: 4.3,
    isNew: true,
  },
];

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    
    updateWidth();
    window.addEventListener('resize', updateWidth);
    
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);
  
  const visibleProducts = 
    window.innerWidth < 640 ? 1 : 
    window.innerWidth < 768 ? 2 : 
    window.innerWidth < 1024 ? 3 : 4;
  
  const maxIndex = Math.max(0, sampleProducts.length - visibleProducts);
  
  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };
  
  const handleNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  };
  
  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl md:text-4xl font-bold text-comic">FEATURED GEAR</h2>
        
        <div className="flex space-x-2">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="p-2 rounded-full bg-muted/50 hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className="p-2 rounded-full bg-muted/50 hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
      
      <div ref={containerRef} className="overflow-hidden">
        <motion.div 
          className="flex"
          animate={{ 
            x: -currentIndex * (containerWidth / visibleProducts) 
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {sampleProducts.map(product => (
            <div 
              key={product.id} 
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 p-2"
            >
              <ProductCard {...product} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ProductCarousel;
