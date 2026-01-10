/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthMode = "signin" | "signup";

export type User = {
  username: string;
  email: string;
  status: string;
  $id: string;
  $sequence: number;
  $createdAt: string;
  $updatedAt: string;
  $permissions: string[];
  $databaseId: string;
  $tableId: string;
};

type AuthStore = {
  mode: AuthMode;
  user: User | null;
  setUser: (user: User | null) => void;
  setMode: (mode: AuthMode) => void;
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      mode: "signin",
      user: null,
      setMode: (mode) => set({ mode }),
      setUser: (user) => set({ user }),
    }),
    {
      name: "auth-storage",
    }
  )
);
