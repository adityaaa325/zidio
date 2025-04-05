
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted/40 border-t border-border/40 pt-12 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <span className="text-comic text-3xl text-primary mr-1">HERO</span>
              <span className="text-comic text-3xl text-secondary">MERCH</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Your one-stop shop for superhero merchandise inspired by your favorite comic universes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-comic text-xl mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products?universe=marvel" className="text-muted-foreground hover:text-primary">
                  Marvel
                </Link>
              </li>
              <li>
                <Link to="/products?universe=dc" className="text-muted-foreground hover:text-primary">
                  DC Comics
                </Link>
              </li>
              <li>
                <Link to="/products?universe=anime" className="text-muted-foreground hover:text-primary">
                  Anime
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-primary">
                  All Products
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-comic text-xl mb-4">Info</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-primary">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-muted-foreground hover:text-primary">
                  Shipping Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-comic text-xl mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to get special offers and early access to new releases.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-muted rounded-l-md border border-border px-3 py-2 text-sm"
              />
              <button 
                type="submit" 
                className="bg-primary text-white rounded-r-md px-4 py-2 text-sm hover:bg-primary/80"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-border/40 pt-8 mt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} HeroMerch. All rights reserved.</p>
          <div className="flex justify-center mt-4 space-x-4">
            <Link to="/privacy" className="hover:text-primary">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
