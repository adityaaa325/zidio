
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Trash2, 
  ShoppingBag, 
  ArrowRight, 
  CreditCard, 
  ChevronUp, 
  ChevronDown 
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

// Sample cart items
const initialCartItems = [
  {
    id: 1,
    name: "Iron Man Arc Reactor Tee",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHN1cGVyaGVybyUyMHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    size: "L",
    quantity: 1,
  },
  {
    id: 5,
    name: "Superman Man of Steel Tee",
    price: 25.99,
    image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    size: "M",
    quantity: 2,
  },
];

const CartPage = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const { toast } = useToast();
  
  const removeItem = (id: number) => {
    const itemToRemove = cartItems.find(item => item.id === id);
    if (itemToRemove) {
      toast({
        title: "Item Removed",
        description: `${itemToRemove.name} has been removed from your cart.`
      });
      setCartItems(cartItems.filter(item => item.id !== id));
    }
  };
  
  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };
  
  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };
  
  const subtotal = calculateSubtotal();
  const shippingCost = subtotal >= 50 ? 0 : 5.99;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shippingCost + tax;
  
  const handleCheckout = () => {
    // In a real application, this would redirect to checkout
    toast({
      title: "Proceeding to Checkout",
      description: "You would normally be redirected to the payment gateway."
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col starry-bg">
      <Navbar />
      
      <main className="flex-grow container py-8">
        <h1 className="text-4xl font-bold text-comic mb-8">YOUR CART</h1>
        
        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items List */}
            <div className="lg:col-span-2 space-y-6">
              <AnimatePresence>
                {cartItems.map(item => (
                  <motion.div 
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col sm:flex-row items-center gap-4 p-4 bg-muted/20 rounded-lg border border-border/50"
                  >
                    <div className="sm:w-24 w-full">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full aspect-square object-cover object-center rounded-md"
                      />
                    </div>
                    
                    <div className="flex-grow">
                      <Link to={`/products/${item.id}`} className="text-lg font-semibold hover:text-primary">
                        {item.name}
                      </Link>
                      <div className="text-sm text-muted-foreground">Size: {item.size}</div>
                      <div className="text-lg font-bold mt-1">${item.price.toFixed(2)}</div>
                    </div>
                    
                    <div className="flex items-center gap-2 sm:gap-4">
                      <div className="flex items-center border border-border rounded-md">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)} 
                          className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground disabled:opacity-50"
                          disabled={item.quantity <= 1}
                        >
                          <ChevronDown size={18} />
                        </button>
                        <div className="w-8 text-center font-medium">
                          {item.quantity}
                        </div>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)} 
                          className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground"
                        >
                          <ChevronUp size={18} />
                        </button>
                      </div>
                      
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-destructive transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              
              <div className="flex justify-between pt-4">
                <Link to="/products" className="text-sm flex items-center text-muted-foreground hover:text-foreground">
                  <ArrowRight size={16} className="mr-2 rotate-180" />
                  Continue Shopping
                </Link>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <motion.div 
                className="bg-muted/20 rounded-lg border border-border/50 p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold text-comic mb-4">ORDER SUMMARY</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>{shippingCost === 0 ? "Free" : `$${shippingCost.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-border pt-3 flex justify-between font-bold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <p className="text-xs text-muted-foreground mb-2">
                    Shipping is free on all orders over $50. Standard delivery takes 3-5 business days.
                  </p>
                </div>
                
                <Button 
                  className="w-full h-12 font-bold text-comic gap-2" 
                  size="lg"
                  onClick={handleCheckout}
                >
                  <CreditCard size={18} />
                  CHECKOUT
                </Button>
                
                <div className="mt-6 text-center">
                  <div className="text-sm text-muted-foreground">Secure checkout powered by</div>
                  <div className="flex items-center justify-center gap-3 mt-2">
                    <div className="w-8 h-6 bg-gray-200 rounded"></div>
                    <div className="w-8 h-6 bg-gray-200 rounded"></div>
                    <div className="w-8 h-6 bg-gray-200 rounded"></div>
                    <div className="w-8 h-6 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        ) : (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-muted/30 mb-6">
              <ShoppingBag size={32} className="text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6">Looks like you haven't added any superhero gear to your cart yet.</p>
            <Button asChild>
              <Link to="/products">Start Shopping</Link>
            </Button>
          </motion.div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default CartPage;
