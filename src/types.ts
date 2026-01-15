import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export type TableColum<T> = {
  title: string;
  field?: string;
  headerClass?: string;
  className?: string;
  format?: (value: any, row: T, index: number) => ReactNode;
  render?: (row: T, index: number, value: any) => ReactNode;
};

export type MenuItem = {
  label: string;
  path?: string;
  icon?: LucideIcon;
  className?: string;
  onClick?: () => void;
};

export type SidePanelHeader = {
  heading?: string;
  subHeading?: string;
};

export type Hotel = {
  id: string;
  name: string;
  location: string;
  rating: number;
  reviews: number;
  pricePerNight: number;
  currency: "NGN" | "USD" | string;
  image: string;
  amenities: string[];
  isFeatured: boolean;
  status: "Operational" | "Closed" | "Renovation";
  phoneNumber: number;
  rooms: Room[];
  description: string;
};

export type Room = {
  id: string;
  name: string;
  amenities: string[];
  guests: number;
  bed: string;
  size: string;
  pricePerNight: number;
  currency: string;
  status: string;
};

export type HotelFormData = {
  name: string;
  location: string;
  whatsapp: string;
  description: string;
  amenities: string;
  rooms: Room[];
  addons: any[];
  images: any[]
}
