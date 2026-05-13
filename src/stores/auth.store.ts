import { create } from "zustand";

type AuthStoreState = Record<string, unknown>;

export const useAuthStore = create<AuthStoreState>()(() => ({}));
