import { createTokensSlice } from "@/entities";
import { create } from "zustand";

export const useAppStore = create((...a) => {
  return {
    ...createTokensSlice(...a),
  };
});
