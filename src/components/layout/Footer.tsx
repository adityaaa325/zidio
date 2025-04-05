
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/60 border-t border-border/40 pt-12 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="flex flex-col items-start mb-4">
              <span className="text-comic text-4xl text-primary mr-1 mb-1">ZIDIO</span>
              <div className="flex text-comic text-3xl">
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
                  All T-Shirts
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
                className="bg-primary text-black rounded-r-md px-4 py-2 text-sm hover:bg-primary/80"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-border/40 pt-8 mt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ZIDIO Clothings. All rights reserved.</p>
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
