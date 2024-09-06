import { create } from 'zustand';
import { postModel } from '@/Helper/userModel';

interface StoreState {
  posts: postModel[];
  isAuthenticated: boolean | null;
  login: () => void;
  logout: () => void;
  setPosts: (posts: postModel[]) => void;
  updatePostBookmark: (postId: number, isBookmarked: boolean) => void;
  updatePostLike: (postId: number, isLiked: boolean) => void;
}

export const useStore = create<StoreState>((set) => ({
  posts: [],
  isAuthenticated: null,
  login: () => set({ isAuthenticated: true }),
  logout: () => set({ isAuthenticated: false }),
  setPosts: (posts: postModel[]) => set({ posts }),
  updatePostBookmark: (postId: number, isBookmarked: boolean) => set((state) => ({
    posts: state.posts.map((post: postModel) =>
      post.id === postId ? { ...post, isbookmarked: isBookmarked } : post
    ),
  })),
  updatePostLike: (postId: number, isLiked: boolean) => set((state) => ({
    posts: state.posts.map((post: postModel) =>
      post.id === postId ? { ...post, isliked: isLiked } : post
    ),
  })),
}));
