
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, Search, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3); // Mock cart count

  return (
    <header className="sticky top-0 z-50 w-full bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60 border-b border-border/40">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex flex-col items-center">
            <span className="text-comic text-5xl text-primary mr-1 mb-1">ZIDIO</span>
            <div className="flex text-comic text-4xl">
              <span className="text-red-600" title="Captain America" style={{fontFamily: 'Bangers', textShadow: '1px 1px 2px #fff'}}>C</span>
              <span className="text-yellow-400" title="Loki" style={{fontFamily: 'Poppins', fontStyle: 'italic', transform: 'skewX(-15deg)'}}>l</span>
              <span className="text-green-500" title="Hulk" style={{fontWeight: 'bold', letterSpacing: '-1px'}}>o</span>
              <span className="text-blue-500" title="Thor" style={{textDecoration: 'underline', textDecorationThickness: '3px'}}>t</span>
              <span className="text-purple-500" title="Naruto" style={{letterSpacing: '2px', fontFamily: 'Arial', fontWeight: 'bold'}}>h</span>
              <span className="text-pink-400" title="Iron Man" style={{fontStyle: 'italic', textShadow: '0 0 3px #f00'}}>i</span>
              <span className="text-orange-500" title="Goku" style={{textTransform: 'uppercase', fontFamily: 'Impact'}}>n</span>
              <span className="text-teal-400" title="Batman" style={{fontWeight: 'bold', letterSpacing: '-1px'}}>g</span>
              <span className="text-indigo-400" title="Spider-Man" style={{textShadow: '1px 1px 2px rgba(255,255,255,0.5)', fontFamily: 'Comic Sans MS'}}>s</span>
            </div>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/products" className="text-sm font-medium hover:text-primary transition-colors">
            T-Shirts
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <button className="rounded-full p-2 hover:bg-muted transition-colors">
            <Search className="h-5 w-5" />
          </button>
          
          <Link to="/profile" className="rounded-full p-2 hover:bg-muted transition-colors">
            <User className="h-5 w-5" />
          </Link>
          
          <Link to="/cart" className="rounded-full p-2 hover:bg-muted transition-colors relative">
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <Badge className="absolute -top-1 -right-1 flex items-center justify-center h-5 w-5 p-0 bg-primary">
                {cartCount}
              </Badge>
            )}
          </Link>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden rounded-full p-2 hover:bg-muted transition-colors"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-50 bg-black/95 backdrop-blur h-[calc(100vh-4rem)]">
          <nav className="container flex flex-col py-8 space-y-6">
            <Link 
              to="/" 
              className="text-comic text-xl py-2 px-4 hover:bg-muted rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className="text-comic text-xl py-2 px-4 hover:bg-muted rounded-md"
              onClick={() => setIsOpen(false)}
            >
              T-Shirts
            </Link>
            <Link 
              to="/about" 
              className="text-comic text-xl py-2 px-4 hover:bg-muted rounded-md"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-comic text-xl py-2 px-4 hover:bg-muted rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
