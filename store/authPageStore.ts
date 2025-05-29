import { create } from "zustand";
import { persist } from "zustand/middleware";

interface overlayInterface {
  overlayState: boolean;
  setOverlayState: () => void;
}

export const overlayStore = create(persist<overlayInterface>((set) => ({
  overlayState: false,
  setOverlayState: () => set((state) => ({ overlayState: !state.overlayState }))
}), { name: 'overlay-store' }))

