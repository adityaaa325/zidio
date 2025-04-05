
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  universe: 'marvel' | 'dc' | 'anime';
  rating: number;
  isNew?: boolean;
  isFeatured?: boolean;
}

const ProductCard = ({
  id,
  name,
  price,
  image,
  universe,
  rating,
  isNew = false,
  isFeatured = false,
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    toast({
      title: "Added to Cart!",
      description: `${name} has been added to your cart.`,
    });
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsWishlisted(!isWishlisted);
    toast({
      title: isWishlisted ? "Removed from Wishlist" : "Added to Wishlist",
      description: `${name} has been ${isWishlisted ? "removed from" : "added to"} your wishlist.`,
    });
  };

  return (
    <Link to={`/products/${id}`}>
      <Card 
        className="h-full product-card-shadow border-border/20 group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden pt-[100%]">
          <motion.img
            src={image}
            alt={name}
            className="absolute inset-0 w-full h-full object-cover object-center"
            initial={{ scale: 1 }}
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-2">
            {isNew && (
              <Badge className="text-comic">NEW</Badge>
            )}
            {isFeatured && (
              <Badge variant="secondary" className="text-comic">FEATURED</Badge>
            )}
            <Badge variant={universe} className="text-comic uppercase">{universe}</Badge>
          </div>
          
          {/* Quick actions */}
          <div className="absolute top-2 right-2">
            <motion.button
              onClick={handleToggleWishlist}
              className={`flex items-center justify-center w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm ${isWishlisted ? 'text-red-500' : 'text-muted-foreground'} hover:text-red-500 transition-colors`}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered || isWishlisted ? 1 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <Heart size={16} fill={isWishlisted ? "currentColor" : "none"} />
            </motion.button>
          </div>
          
          {/* Add to cart overlay */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-background/30 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            style={{ pointerEvents: isHovered ? 'auto' : 'none' }}
          >
            <Button 
              variant="default" 
              size="sm" 
              className="gap-1"
              onClick={handleAddToCart}
            >
              <ShoppingCart size={16} />
              Add to Cart
            </Button>
          </motion.div>
        </div>
        
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold text-foreground truncate group-hover:text-primary transition-colors">
            {name}
          </h3>
          
          <div className="flex items-center justify-between mt-2">
            <span className="text-xl font-bold">${price.toFixed(2)}</span>
            
            <div className="flex items-center">
              <Star size={14} className="text-yellow-400 fill-yellow-400" />
              <span className="ml-1 text-sm text-muted-foreground">{rating.toFixed(1)}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
