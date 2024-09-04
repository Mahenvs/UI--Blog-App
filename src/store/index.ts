import { create } from 'zustand';

export const useStore = create((set) => ({
  posts: [],
  setPosts: (posts: any) => set({ posts }),
  updatePostBookmark: (postId, isBookmarked) => set((state) => ({
    posts: state.posts.map((post) =>
      post.id === postId ? { ...post, isbookmarked: isBookmarked } : post
    ),
  })),
}));
