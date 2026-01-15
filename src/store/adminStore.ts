import type { Hotel } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type admin = {
  hotels: Hotel[] | [];
};

export const useAdminStore = create<admin>()(
  persist(
    (_set) => ({
      hotels: [],
    }),
    { name: "admin" }
  )
);
