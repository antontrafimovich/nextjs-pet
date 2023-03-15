import { createTokensSlice } from '@/entities';
import { create } from 'zustand';

export const useSignInPageStore = create((...a) => {
  return {
    ...createTokensSlice(...a),
  };
});
