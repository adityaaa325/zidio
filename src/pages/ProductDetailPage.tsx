
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Star, 
  Heart, 
  ShoppingCart, 
  Share, 
  ChevronDown,
  ChevronUp,
  Check
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

// Sample product data
const sampleProducts = [
  {
    id: 1,
    name: "Iron Man Arc Reactor Tee",
    price: 29.99,
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHN1cGVyaGVybyUyMHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1583744946564-b52d01e2da70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRzaGlydCUyMGRldGFpbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1565693413579-8ff3fdc1b03b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dHNoaXJ0JTIwZGV0YWlsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    ],
    description: "Channel your inner Tony Stark with this premium Arc Reactor tee. Made with high-quality fabric for maximum comfort. The glowing Arc Reactor design captures the essence of Iron Man's power source.",
    universe: "marvel" as const,
    rating: 4.8,
    reviewCount: 42,
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
    sku: "IM-ARC-001",
    features: [
      "100% Premium Cotton",
      "Official Marvel Merchandise",
      "Machine Washable",
      "Glow-in-the-dark Arc Reactor print"
    ],
    relatedProducts: [2, 4, 7]
  },
  {
    id: 2,
    name: "Batman Dark Knight Tee",
    price: 27.99,
    images: [
      "https://images.unsplash.com/photo-1518674660708-0e2c0473e68e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjB0c2hpcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    ],
    description: "Become the Dark Knight with this sleek Batman tee. Features the iconic bat symbol on premium black fabric.",
    universe: "dc" as const,
    rating: 4.7,
    reviewCount: 38,
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    sku: "BM-DK-002",
    features: [
      "100% Premium Cotton",
      "Official DC Comics Merchandise",
      "Machine Washable",
      "Subtle embossed Bat Symbol"
    ],
    relatedProducts: [5, 8]
  },
];

const ProductDetailPage = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const [activeImage, setActiveImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>('description');
  
  // Find the product with the matching ID
  const product = sampleProducts.find(p => p.id === Number(id));
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p className="mb-6">The product you are looking for does not exist.</p>
          <Button asChild>
            <Link to="/products">Back to Products</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }
  
  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  
  const decreaseQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };
  
  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Please select a size",
        description: "You need to select a size before adding to cart.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Added to Cart!",
      description: `${product.name} (${selectedSize}) x ${quantity} has been added to your cart.`,
    });
  };
  
  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    
    toast({
      title: isWishlisted ? "Removed from Wishlist" : "Added to Wishlist",
      description: `${product.name} has been ${isWishlisted ? "removed from" : "added to"} your wishlist.`,
    });
  };
  
  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };
  
  return (
    <div className="min-h-screen flex flex-col starry-bg">
      <Navbar />
      
      <main className="flex-grow container py-8">
        <div className="mb-8">
          <Link to="/products" className="inline-flex items-center text-muted-foreground hover:text-foreground">
            <ArrowLeft size={16} className="mr-1" />
            Back to products
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <motion.div 
              className="relative aspect-square bg-muted/30 rounded-lg overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.img 
                src={product.images[activeImage]} 
                alt={product.name}
                className="w-full h-full object-cover object-center"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <Badge 
                variant={product.universe}
                className="absolute top-4 left-4 text-comic uppercase"
              >
                {product.universe}
              </Badge>
            </motion.div>
            
            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="flex space-x-2">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`w-16 h-16 rounded-md overflow-hidden border-2 ${
                      activeImage === index
                        ? 'border-primary'
                        : 'border-transparent'
                    }`}
                  >
                    <img 
                      src={img} 
                      alt={`${product.name} thumbnail ${index + 1}`}
                      className="w-full h-full object-cover object-center"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Product Details */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-comic mb-2">
              {product.name}
            </h1>
            
            <div className="flex items-center mb-4">
              <div className="flex items-center mr-4">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star 
                    key={index}
                    size={16}
                    className={index < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                  />
                ))}
                <span className="ml-2 text-sm font-medium">{product.rating.toFixed(1)}</span>
              </div>
              <span className="text-sm text-muted-foreground">
                {product.reviewCount} reviews
              </span>
            </div>
            
            <div className="text-3xl font-bold mb-6">
              ${product.price.toFixed(2)}
            </div>
            
            {/* Size Selection */}
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-2">Size</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`h-10 px-4 rounded-md border ${
                      selectedSize === size
                        ? 'bg-primary text-white border-primary'
                        : 'bg-muted/30 border-border hover:border-primary'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Quantity and Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center border border-border rounded-md w-32">
                <button 
                  onClick={decreaseQuantity} 
                  className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-foreground disabled:opacity-50"
                  disabled={quantity <= 1}
                >
                  <ChevronDown size={20} />
                </button>
                <div className="flex-1 text-center font-medium">
                  {quantity}
                </div>
                <button 
                  onClick={increaseQuantity} 
                  className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-foreground"
                >
                  <ChevronUp size={20} />
                </button>
              </div>
              
              <Button
                className="flex-1 flex items-center justify-center gap-2 h-10"
                onClick={handleAddToCart}
              >
                <ShoppingCart size={18} />
                Add to Cart
              </Button>
              
              <Button
                variant="outline"
                className={`w-10 h-10 p-0 flex items-center justify-center ${
                  isWishlisted ? 'text-red-500 border-red-500' : ''
                }`}
                onClick={toggleWishlist}
              >
                <Heart size={18} fill={isWishlisted ? "currentColor" : "none"} />
              </Button>
              
              <Button
                variant="outline"
                className="w-10 h-10 p-0 flex items-center justify-center"
              >
                <Share size={18} />
              </Button>
            </div>
            
            {/* Product Info Accordion */}
            <div className="space-y-3 border-t border-border pt-6">
              <div className="border-b border-border pb-3">
                <button
                  className="flex items-center justify-between w-full py-2 text-left"
                  onClick={() => toggleSection('description')}
                >
                  <span className="font-medium">Description</span>
                  {expandedSection === 'description' ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  )}
                </button>
                {expandedSection === 'description' && (
                  <div className="py-2 text-muted-foreground">
                    <p>{product.description}</p>
                  </div>
                )}
              </div>
              
              <div className="border-b border-border pb-3">
                <button
                  className="flex items-center justify-between w-full py-2 text-left"
                  onClick={() => toggleSection('features')}
                >
                  <span className="font-medium">Key Features</span>
                  {expandedSection === 'features' ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  )}
                </button>
                {expandedSection === 'features' && (
                  <div className="py-2">
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check size={16} className="mr-2 mt-1 text-primary" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              
              <div className="border-b border-border pb-3">
                <button
                  className="flex items-center justify-between w-full py-2 text-left"
                  onClick={() => toggleSection('shipping')}
                >
                  <span className="font-medium">Shipping Information</span>
                  {expandedSection === 'shipping' ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  )}
                </button>
                {expandedSection === 'shipping' && (
                  <div className="py-2 text-muted-foreground">
                    <p>Free shipping on all orders over $50. Standard delivery takes 3-5 business days.</p>
                  </div>
                )}
              </div>
              
              <div className="pb-3">
                <button
                  className="flex items-center justify-between w-full py-2 text-left"
                  onClick={() => toggleSection('returns')}
                >
                  <span className="font-medium">Returns & Exchanges</span>
                  {expandedSection === 'returns' ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  )}
                </button>
                {expandedSection === 'returns' && (
                  <div className="py-2 text-muted-foreground">
                    <p>Easy returns within 30 days of purchase. Items must be unworn with original tags attached.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
