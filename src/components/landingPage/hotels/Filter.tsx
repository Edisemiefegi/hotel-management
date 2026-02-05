import Card from "@/components/base/Card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { SlidersHorizontal, Star } from "lucide-react";
import { useState } from "react";

const RATINGS = ["4.5+", "4+", "3.5+", "3+"];
const AMENITIES = [
  "spa",
  "pool",
  "restaurant",
  "bar",
  "gym",
  "wifi",
  "room service",
];

function Filter() {
  const [priceRange, setPriceRange] = useState([20000, 40000]);

  return (
    <Card className="space-y-6 md:border border-none md:shadow shadow-none">
      {/* Header */}
      <div className="md:block hidden">
        <div className="flex  justify-between  items-center">
          <h2 className="font-semibold text-lg">Filters</h2>
          <SlidersHorizontal size={20} />
        </div>
      </div>

      {/* Price Range */}
      <section className="space-y-4">
        <div className="flex justify-between">
          <span className="font-medium">Price Range</span>
          <span className="px-2 py-1 text-xs rounded-md bg-secondary">
            Per Night
          </span>
        </div>

        <div className="space-y-1">
          <span className="text-sm text-muted-foreground flex justify-end">
            {priceRange.join(", ")}
          </span>
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            min={10000}
            max={60000}
            step={5000}
          />
        </div>
      </section>

      {/* Rating */}
      <section className="space-y-3">
        <span className="font-medium flex items-center gap-1">
          Rating <Star size={12} />
        </span>

        <div className="flex flex-wrap gap-2">
          {RATINGS.map((rating) => (
            <Button
              key={rating}
              className="bg-secondary text-primary hover:bg-secondary/50"
            >
              {rating}
            </Button>
          ))}
        </div>
      </section>

      {/* Amenities */}
      <section className="space-y-3">
        <span className="font-medium">Amenities</span>

        <div className="space-y-2">
          {AMENITIES.map((item) => (
            <label key={item} className="flex items-center gap-2 text-xs">
              <Checkbox />
              {item}
            </label>
          ))}
        </div>
      </section>
    </Card>
  );
}

export default Filter;
