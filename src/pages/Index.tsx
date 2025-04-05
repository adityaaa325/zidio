
import HeroSection from '@/components/home/HeroSection';
import CategoryBanner from '@/components/home/CategoryBanner';
import ProductCarousel from '@/components/home/ProductCarousel';
import CallToAction from '@/components/home/CallToAction';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Sample categories
const categories = [
  {
    title: "MARVEL UNIVERSE",
    description: "Gear up with the mightiest heroes from the Marvel Universe.",
    image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFydmVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    link: "/products?universe=marvel",
    color: "bg-marvel",
  },
  {
    title: "DC COMICS",
    description: "Channel the power of legendary DC heroes with our premium collection.",
    image: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VwZXJoZXJvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    link: "/products?universe=dc",
    color: "bg-dc",
  },
  {
    title: "ANIME HEROES",
    description: "Express your love for iconic anime characters with our exclusive designs.",
    image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    link: "/products?universe=anime",
    color: "bg-anime",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col starry-bg">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Categories */}
        <section className="py-16 px-4">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-comic text-center">CHOOSE YOUR UNIVERSE</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <CategoryBanner 
                  key={category.title}
                  {...category}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Featured Products */}
        <section className="py-16 px-4 bg-muted/20">
          <div className="container">
            <ProductCarousel />
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 px-4">
          <div className="container">
            <CallToAction />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
