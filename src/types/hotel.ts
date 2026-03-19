export type amenities = {
  label?: string;
  icon?: string;
  value?: string
}

export type Hotel = {
  id: string,
  name: string;
  location: string;
  rating: number;
  reviews: string[];
  images: string[];
  rooms: [];
  amenities: amenities[];
  status: "Operational" | "Closed" | "Renovation";
  whatsapp: string;
  description: string;
  // addons: string[]
  
};

export type Room = {
  hotelId: string;
  amenities: string[];
  capacity: string;
  bed: string;
  pricePerNight: number;
  type: string;
  status: string;
  image: File;
  roomNo: string
};

export type Addon = {
  hotelId: string;
  addonName: string;
  price: number;
  description: string;
  icon: string;
};


export type HotelFormData = {
  name: string;
  location: string;
  whatsapp: string;
  description: string;
  amenities: [];
  addons: any[];
  images: any[]
    rooms: any[];

}

  export type FieldConfig = {
    name: string;
    label: string;
    type?: "text" | "number" | "textarea" | "select" | "file" | "date";
    placeholder?: string;
    options?: { label: string; value: string }[];
    multiple?: boolean;
  };

