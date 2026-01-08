import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthMode = "signin" | "signup";

type AuthStore = {
  mode: AuthMode;
  user: any | null;
  setUser: (user: any | null) => void;
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
