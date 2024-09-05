import { postModel } from '@/Helper/userModel';
import { create } from 'zustand';

export const useStore = create((set) => ({
  posts: [],
  setPosts: (posts: postModel[]) => set({ posts }),
  updatePostBookmark: (postId:number, isBookmarked:boolean) => set((state) => ({
    posts: state.posts.map((post:postModel) =>
      post.id === postId ? { ...post, isbookmarked: isBookmarked } : post
    ),
  })),
  updatePostLike: (postId:number, isLiked:boolean) => set((state) => ({
    posts: state.posts.map((post:postModel) =>
      post.id === postId ? { ...post, isliked: isLiked } : post
    ),
  })),
}));
