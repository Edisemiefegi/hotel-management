import type { Hotel } from "@/types/hotel";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type admin = {
  hotels: Hotel[];
  setHotels: (hotels: Hotel[]) => void;
  rooms: any;
  setRooms: (rooms: any) => void;
};

export const useAdminStore = create<admin>()(
  persist(
    (set) => ({
      hotels: [],
      setHotels: (hotels) => set({ hotels }),
      rooms: [],
      setRooms: (rooms) => set({ rooms }),
    }),
    { name: "admin" },
  ),
);
