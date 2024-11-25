import uuid from "react-native-uuid";
import { create } from "zustand";

type Comment = {
  id: string;
  author: string;
  text: string;
  likes: number;
};

type Post = {
  id: string;
  author: string;
  heading: string;
  text: string;
  tags: string[];
  likes: number;
  comments: Comment[];
};

type PostsState = {
  posts: Post[];
  loadPosts: (posts: Post[]) => void;
  addPost: (newPost: Omit<Post, "id" | "likes" | "comments">) => void;
  getPostsByAuthor: (author: string) => Post[];
  getPostsExcludingAuthor: (author: string) => Post[];
};

const addPostsStore = create<PostsState>((set, get) => ({
  posts: [],
  loadPosts: (posts) =>
    set(() => ({
      posts: posts.map((post) => ({
        ...post,
        id: post.id || uuid.v4().toString(), 
      })),
    })),
  addPost: (newPost) =>
    set((state) => ({
      posts: [
        ...state.posts,
        { ...newPost, id: uuid.v4().toString(), likes: 0, comments: [] },
      ],
    })),
  getPostsByAuthor: (author) =>
    get().posts.filter((post) => post.author === author),
  getPostsExcludingAuthor: (author) =>
    get().posts.filter((post) => post.author !== author),
}));

export default addPostsStore;
