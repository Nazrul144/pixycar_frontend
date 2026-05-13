import { create } from "zustand";

type UiStoreState = Record<string, unknown>;

export const useUiStore = create<UiStoreState>()(() => ({}));
