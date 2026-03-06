import Card from "@/components/base/Card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { SlidersHorizontal, Star } from "lucide-react";

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

interface Props {
  priceRange?: number[];
  setPriceRange?: any;
  rating?: string | null;
  setRating?: any;
  amenities?: any[];
  setAmenities?: any;
  onSave?: () => void;
  onClear?: () => void
}

function Filter({
  priceRange,
  setPriceRange,
  rating,
  setRating,
  amenities = [],
  setAmenities,
  onSave,
  onClear
}: Props) {
  // const [priceRange, setPriceRange] = useState([20000, 40000]);

  const toggleAmenity = (amenity: any) => {
    if (amenities?.includes(amenity)) {
      setAmenities(amenities.filter((a) => a !== amenity));
    } else {
      setAmenities([...amenities, amenity]);
    }
  };

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
            {priceRange?.join(", ")}
          </span>
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            min={10000}
            max={600000}
            step={20000}
          />
        </div>
      </section>

      {/* Rating */}
      <section className="space-y-3">
        <span className="font-medium flex items-center gap-1">
          Rating <Star size={12} />
        </span>

        <div className="flex flex-wrap gap-2">
          {RATINGS.map((item) => (
            <Button
              key={item}
              onClick={() => setRating(item)}
              className={`${
                rating === item
                  ? "bg-primary text-white"
                  : "bg-secondary text-primary hover:text-white"
              }`}
            >
              {item}
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
              <Checkbox
                checked={amenities?.includes(item)}
                onCheckedChange={() => toggleAmenity(item)}
              />
              {item}
            </label>
          ))}
        </div>
      </section>
      <div className="grid grid-cols-2 gap-2">
        <Button onClick={onSave}>Save</Button>
        <Button onClick={onClear} variant={"outline"}>
          Clear Filter
        </Button>
      </div>
    </Card>
  );
}

export default Filter;
