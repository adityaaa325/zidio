
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, Search, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3); // Mock cart count

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="text-comic text-3xl text-primary mr-1">HERO</span>
            <span className="text-comic text-3xl text-secondary">MERCH</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/products" className="text-sm font-medium hover:text-primary transition-colors">
            Shop
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
        <div className="md:hidden fixed inset-0 top-16 z-50 bg-background/95 backdrop-blur h-[calc(100vh-4rem)]">
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
              Shop
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
