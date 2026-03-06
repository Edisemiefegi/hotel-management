"use client";

import {
  Wifi,
  Bed,
  Bath,
  Tv,
  Snowflake,
  Coffee,
  UtensilsCrossed,
  Car,
  Dumbbell,
  Waves,
  ShieldCheck,
  ConciergeBell,
  Dog,
  Accessibility,
  Shirt,
  X,
  ChevronDown,
  type LucideIcon,
} from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Amenity {
  value: string;
  label: string;
  icon: LucideIcon; // store icon name as string
}

interface AmenitySelectProps {
  value: Amenity[];
  onChange: (value: Amenity[]) => void;
  disabled?: boolean;
}

export const hotelAmenities: Amenity[] = [
  { label: "Free WiFi", value: "wifi", icon: Wifi },
  { label: "Comfortable Bed", value: "bed", icon: Bed },
  { label: "Private Bathroom", value: "bathroom", icon: Bath },
  { label: "Flat-Screen TV", value: "tv", icon: Tv },
  { label: "Air Conditioning", value: "airConditioning", icon: Snowflake },
  { label: "Breakfast Included", value: "breakfast", icon: Coffee },
  { label: "Restaurant", value: "restaurant", icon: UtensilsCrossed },
  { label: "Free Parking", value: "parkingSlot", icon: Car },
  { label: "Fitness Center", value: "gym", icon: Dumbbell },
  { label: "Swimming Pool", value: "pool", icon: Waves },
  { label: "24/7 Security", value: "security", icon: ShieldCheck },
  { label: "Concierge Service", value: "concierge", icon: ConciergeBell },
  { label: "Pet Friendly", value: "pet", icon: Dog },
  {
    label: "Wheelchair Accessible",
    value: "wheelchair",
    icon: Accessibility,
  },
  { label: "Laundry Service", value: "laundry", icon: Shirt },
];

export default function AmenitySelector({
  value,
  onChange,
}: AmenitySelectProps) {
  const toggleAmenity = (val: string) => {
    const amenity = hotelAmenities.find((a) => a.value === val);
    if (!amenity) return;

    let newValue: Amenity[];

    if (value.some((v) => v.value === val)) {
      // remove if already selected
      newValue = value.filter((v) => v.value !== val);
    } else {
      // add if not selected
      newValue = [...value, amenity];
    }

    console.log("Selected amenities:", newValue);
    onChange(newValue);
  };

  return (
    <div className="space-y-2 w-full">
      <DropdownMenu>
        <DropdownMenuTrigger className="w-fit border rounded-md px-3 py-2 text-left">
          <p className="flex  items-center text-sm text-gray gap-1">
            Select Amenities <ChevronDown size={15} />
          </p>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-64 max-h-64 overflow-y-auto">
          {hotelAmenities.map(({ label, value: val, icon: Icon }, index) => {
            const isSelected = value.some((v) => v.value === val);

            return (
              <DropdownMenuItem
                key={index}
                onSelect={(event) => {
                  event.preventDefault(); // prevent dropdown from closing
                  toggleAmenity(val);
                }}
              >
                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={isSelected}
                    onCheckedChange={() => toggleAmenity(val)}
                  />
                  {Icon && <Icon size={16} />}

                  <span>{label}</span>
                </div>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Selected badges */}
      {value.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {value.map(({ value: val, label, icon: Icon }, index) => {
            // const IconComponent = Icons[icon];
            return (
              <div
                key={index}
                className="flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
              >
                {Icon && <Icon size={16} />}
                {label}
                <button
                  type="button"
                  onClick={() => toggleAmenity(val)}
                  className="ml-1"
                >
                  <X size={14} />
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
