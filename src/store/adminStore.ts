import type { Hotel } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type admin = {
  hotels: Hotel[];
  setHotels: (hotels: Hotel[]) => void
};

export const useAdminStore = create<admin>()(
  persist(
    (set) => ({
      hotels: [],
      setHotels: (hotels) => set({hotels})
    }),
    { name: "admin" }
  )
);
