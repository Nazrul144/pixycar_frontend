import { create } from "zustand";
import type { AuthUser } from "@/features/auth/types/auth.types";

interface AuthState {
  user: AuthUser | null;
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  setAuth: (user: AuthUser, accessToken: string, refreshToken: string) => void;
  clearAuth: () => void;
  initialize: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  accessToken: null,
  refreshToken: null,
  isAuthenticated: false,
  setAuth: (user, accessToken, refreshToken) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("pixycar_user", JSON.stringify(user));
      localStorage.setItem("pixycar_access_token", accessToken);
      localStorage.setItem("pixycar_refresh_token", refreshToken);
    }
    set({ user, accessToken, refreshToken, isAuthenticated: true });
  },
  clearAuth: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("pixycar_user");
      localStorage.removeItem("pixycar_access_token");
      localStorage.removeItem("pixycar_refresh_token");
    }
    set({ user: null, accessToken: null, refreshToken: null, isAuthenticated: false });
  },
  initialize: () => {
    if (typeof window !== "undefined") {
      const userStr = localStorage.getItem("pixycar_user");
      const accessToken = localStorage.getItem("pixycar_access_token");
      const refreshToken = localStorage.getItem("pixycar_refresh_token");
      if (userStr && accessToken) {
        try {
          const user = JSON.parse(userStr);
          set({ user, accessToken, refreshToken, isAuthenticated: true });
        } catch {
          // Clear corrupt storage
          localStorage.removeItem("pixycar_user");
          localStorage.removeItem("pixycar_access_token");
          localStorage.removeItem("pixycar_refresh_token");
        }
      }
    }
  },
}));
