
import { useState } from 'react';
import { Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';

const universes = [
  { id: 'marvel', label: 'Marvel' },
  { id: 'dc', label: 'DC Comics' },
  { id: 'anime', label: 'Anime' }
];

const sizes = [
  { id: 's', label: 'S' },
  { id: 'm', label: 'M' },
  { id: 'l', label: 'L' },
  { id: 'xl', label: 'XL' },
  { id: 'xxl', label: '2XL' }
];

const ProductFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [selectedUniverses, setSelectedUniverses] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

  const toggleFilter = () => {
    setIsOpen(!isOpen);
  };

  const handleUniverseChange = (universeId: string) => {
    setSelectedUniverses(prev => 
      prev.includes(universeId) 
        ? prev.filter(id => id !== universeId)
        : [...prev, universeId]
    );
  };

  const handleSizeChange = (sizeId: string) => {
    setSelectedSizes(prev => 
      prev.includes(sizeId) 
        ? prev.filter(id => id !== sizeId)
        : [...prev, sizeId]
    );
  };

  const handlePriceChange = (value: number[]) => {
    setPriceRange(value);
  };

  const clearAllFilters = () => {
    setSelectedUniverses([]);
    setSelectedSizes([]);
    setPriceRange([0, 100]);
  };

  return (
    <div className="relative">
      {/* Mobile filter button */}
      <div className="md:hidden mb-4">
        <Button 
          variant="outline" 
          className="w-full flex items-center justify-center gap-2"
          onClick={toggleFilter}
        >
          <Filter size={16} />
          Filters
        </Button>
      </div>

      {/* Filter sidebar - Mobile */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background p-4 md:hidden overflow-auto">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Filters</h2>
            <Button variant="ghost" size="sm" onClick={toggleFilter}>
              <X size={20} />
            </Button>
          </div>
          
          <div className="space-y-6">
            {/* Mobile filters content */}
            <div>
              <h3 className="text-lg font-medium mb-3">Universe</h3>
              <div className="space-y-2">
                {universes.map(universe => (
                  <div key={universe.id} className="flex items-center">
                    <Checkbox 
                      id={`mobile-universe-${universe.id}`}
                      checked={selectedUniverses.includes(universe.id)}
                      onCheckedChange={() => handleUniverseChange(universe.id)}
                    />
                    <label 
                      htmlFor={`mobile-universe-${universe.id}`}
                      className="ml-2 text-sm"
                    >
                      {universe.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">Size</h3>
              <div className="space-y-2">
                {sizes.map(size => (
                  <div key={size.id} className="flex items-center">
                    <Checkbox 
                      id={`mobile-size-${size.id}`}
                      checked={selectedSizes.includes(size.id)}
                      onCheckedChange={() => handleSizeChange(size.id)}
                    />
                    <label 
                      htmlFor={`mobile-size-${size.id}`}
                      className="ml-2 text-sm"
                    >
                      {size.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">Price Range</h3>
              <Slider 
                defaultValue={[0, 100]} 
                min={0} 
                max={100} 
                step={1} 
                value={priceRange}
                onValueChange={handlePriceChange}
                className="mt-6"
              />
              <div className="flex justify-between mt-2 text-sm">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
            
            <div className="pt-4">
              <Button className="w-full" onClick={toggleFilter}>
                Apply Filters
              </Button>
              <Button 
                variant="outline" 
                className="w-full mt-2"
                onClick={clearAllFilters}
              >
                Clear All
              </Button>
            </div>
          </div>
        </div>
      )}
      
      {/* Desktop filter sidebar */}
      <div className="hidden md:block space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-3">Universe</h3>
          <div className="space-y-2">
            {universes.map(universe => (
              <div key={universe.id} className="flex items-center">
                <Checkbox 
                  id={`desktop-universe-${universe.id}`}
                  checked={selectedUniverses.includes(universe.id)}
                  onCheckedChange={() => handleUniverseChange(universe.id)}
                />
                <label 
                  htmlFor={`desktop-universe-${universe.id}`}
                  className="ml-2 text-sm"
                >
                  {universe.label}
                </label>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-3">Size</h3>
          <div className="space-y-2">
            {sizes.map(size => (
              <div key={size.id} className="flex items-center">
                <Checkbox 
                  id={`desktop-size-${size.id}`}
                  checked={selectedSizes.includes(size.id)}
                  onCheckedChange={() => handleSizeChange(size.id)}
                />
                <label 
                  htmlFor={`desktop-size-${size.id}`}
                  className="ml-2 text-sm"
                >
                  {size.label}
                </label>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-3">Price Range</h3>
          <Slider 
            defaultValue={[0, 100]} 
            min={0} 
            max={100} 
            step={1} 
            value={priceRange}
            onValueChange={handlePriceChange}
            className="mt-6"
          />
          <div className="flex justify-between mt-2 text-sm">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
        
        <div className="pt-4">
          <Button 
            variant="outline" 
            className="w-full"
            onClick={clearAllFilters}
          >
            Clear All
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
