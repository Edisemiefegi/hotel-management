import type { Hotel } from "@/types/hotel";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type admin = {
  hotels: Hotel[];
  setHotels: (hotels: Hotel[]) => void;
  rooms: any;
  setRooms: (rooms: any) => void;
  addons: any;
  setAddons: (addons: any) => void;
  isHydrated: boolean;
  setHydrated: (value: boolean) => void;
};

export const useAdminStore = create<admin>()(
  persist(
    (set) => ({
      hotels: [],
      setHotels: (hotels) => set({ hotels }),
      rooms: [],
      setRooms: (rooms) => set({ rooms }),
      addons: [],
      setAddons: (addons) => set({ addons }),
      isHydrated: false,
      setHydrated: (value) => set({ isHydrated: value }),
    }),
    { name: "admin" },
  ),
);
