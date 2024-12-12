import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type Post = {
  id: string;
  author: string;
  heading: string;
  text: string;
  tags: string[];
  likedBy: string[];
};

type PostsState = {
  posts: Post[];
  loadPosts: (posts: Omit<Post, "id" | "likedBy">[]) => void;
  addPost: (newPost: Omit<Post, "id" | "likedBy">) => void;
  removePost: (postId: string, author: string) => void;
  likePost: (postId: string, monsterName: string) => void;
  getPostsByAuthor: (author: string) => Post[];
  getPostsExcludingAuthor: (author: string) => Post[];
};

export const usePostsStore = create<PostsState>()(
  persist(
    (set, get) => ({
      posts: [],

      loadPosts: (jsonPosts) =>
        set((state) => {
          if (state.posts.length === 0) {
            return {
              posts: jsonPosts.map((post) => ({
                ...post,
                id: uuid.v4().toString(),
                likedBy: [],
              })),
            };
          }
          return state;
        }),

      addPost: (newPost) =>
        set((state) => ({
          posts: [
            ...state.posts,
            {
              ...newPost,
              id: uuid.v4().toString(),
              likedBy: [],
            },
          ],
        })),

      removePost: (postId, author) =>
        set((state) => ({
          posts: state.posts.filter(
            (post) => !(post.id === postId && post.author === author)
          ),
        })),

      likePost: (postId, monsterName) =>
        set((state) => ({
          posts: state.posts.map((post) =>
            post.id === postId
              ? {
                  ...post,
                  likedBy: post.likedBy.includes(monsterName)
                    ? post.likedBy.filter((name) => name !== monsterName)
                    : [...post.likedBy, monsterName],
                }
              : post
          ),
        })),

      getPostsByAuthor: (author) => get().posts.filter((post) => post.author === author),
      getPostsExcludingAuthor: (author) => get().posts.filter((post) => post.author !== author),
    }),
    {
      name: "posts-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
