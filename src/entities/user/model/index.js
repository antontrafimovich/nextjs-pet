import { signIn } from "@/shared/api/signin";

import { persist } from "zustand/middleware";

export const createTokensSlice = persist(
  (set) => {
    return {
      tokens: { status: "pending", payload: null },
      signin: async (login, password) => {
        set({ tokens: { status: "pending", payload: null } });

        let result;
        try {
          const rawResult = await signIn(login, password);
          result = await rawResult.json();
        } catch (error) {
          set({ tokens: { status: "error", payload: error } });
          return;
        }

        if (result.statusCode >= 400) {
          return set({ tokens: { status: "error", payload: result } });
        }

        set({ tokens: { status: "success", payload: result } });
      },
    };
  },
  {
    name: "tokens",
  }
);
