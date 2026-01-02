import { create } from 'zustand';

interface User {
  id: number;
  kakaoId: string;
  name: string;
  email?: string;
  profileImage?: string;
  kakaoChannelAdded: boolean;
  favoriteCharacter?: string;
  tumblbugNotify: boolean;
  createdAt: string;
}

interface AuthState {
  user: User | null;
  isLoading: boolean;
  setUser: (user: User | null) => void;
  fetchUser: () => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: true,

  setUser: (user) => set({ user, isLoading: false }),

  fetchUser: async () => {
    // Temporarily disabled - no auth backend yet
    // TODO: Implement Shopify Customer Account API or custom auth
    set({ user: null, isLoading: false });
  },

  logout: async () => {
    // Temporarily disabled - no auth backend yet
    set({ user: null });
  },
}));
