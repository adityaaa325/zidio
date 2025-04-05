
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Filter, X } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductFilter from '@/components/products/ProductFilter';
import ProductCard from '@/components/products/ProductCard';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

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
  {
    id: 7,
    name: "Hulk Smash Tee",
    price: 28.99,
    image: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    universe: "marvel" as const,
    rating: 4.2,
  },
  {
    id: 8,
    name: "Wonder Woman Tee",
    price: 27.99,
    image: "https://images.unsplash.com/photo-1618354691438-25bc04584c23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHNoaXJ0JTIwcmVkfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    universe: "dc" as const,
    rating: 4.7,
    isNew: true,
  },
];

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(sampleProducts);
  
  const universe = searchParams.get('universe');
  
  useEffect(() => {
    let filtered = sampleProducts;
    
    // Filter by universe if specified
    if (universe) {
      filtered = filtered.filter(product => product.universe === universe);
    }
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredProducts(filtered);
  }, [universe, searchTerm]);
  
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };
  
  const clearUniverse = () => {
    const newParams = new URLSearchParams(searchParams);
    newParams.delete('universe');
    setSearchParams(newParams);
  };
  
  return (
    <div className="min-h-screen flex flex-col starry-bg">
      <Navbar />
      
      <main className="flex-grow container py-8">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-comic mb-2">SUPERHERO GEAR</h1>
          <p className="text-muted-foreground">
            Find your favorite superhero merchandise and show off your inner hero!
          </p>
        </div>
        
        {/* Filter and Search Bar */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="w-full md:w-auto flex items-center">
              <div className="relative flex-1 md:w-80">
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                  <Search size={18} />
                </div>
                {searchTerm && (
                  <button 
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    onClick={() => setSearchTerm('')}
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              {universe && (
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Filtered by:</span>
                  <Badge variant={universe as "marvel" | "dc" | "anime"} className="capitalize">
                    {universe}
                    <button 
                      className="ml-1 hover:text-white/80"
                      onClick={clearUniverse}
                    >
                      <X size={14} />
                    </button>
                  </Badge>
                </div>
              )}
              
              <Button 
                variant="outline" 
                size="sm" 
                className="md:hidden flex items-center gap-1"
                onClick={toggleFilters}
              >
                <Filter size={16} />
                Filters
              </Button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-12 gap-8">
          {/* Filters - Desktop */}
          <div className="hidden md:block col-span-3">
            <ProductFilter />
          </div>
          
          {/* Products Grid */}
          <div className="col-span-12 md:col-span-9">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <ProductCard {...product} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <h3 className="text-2xl font-semibold mb-2">No products found</h3>
                <p className="text-muted-foreground">
                  Try changing your search or filter criteria.
                </p>
              </div>
            )}
          </div>
        </div>
        
        {/* Mobile Filters Dialog */}
        {showFilters && (
          <div className="fixed inset-0 z-50 bg-background p-4 md:hidden overflow-auto">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Filters</h2>
              <Button variant="ghost" size="sm" onClick={toggleFilters}>
                <X size={20} />
              </Button>
            </div>
            
            <ProductFilter />
            
            <div className="mt-8">
              <Button className="w-full" onClick={toggleFilters}>
                Apply Filters
              </Button>
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductsPage;
