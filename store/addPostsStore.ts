import uuid from "react-native-uuid";
import { create } from "zustand";

type Comment = {
  id: string;
  author: string;
  text: string;
  likedBy: string[];
};

type Post = {
  id: string;
  author: string;
  heading: string;
  text: string;
  tags: string[];
  likedBy: string[];
  comments: Comment[];
};

type PostsState = {
  posts: Post[];
  loadPosts: (posts: Post[]) => void;
  addPost: (newPost: Omit<Post, "id" | "likes" | "comments">) => void;
  likePost: (postId: string, monsterName: string) => void;
  // put get post in it´s own store?
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
        likedBy: post.likedBy || [],
      })),
    })),

  addPost: (newPost) =>
    set((state) => ({
      posts: [
        ...state.posts,
        { ...newPost, id: uuid.v4().toString(), likes: 0, comments: [] },
      ],
    })),

    likePost: (postId: string, monsterName: string) =>
      set((state) => ({
        posts: state.posts.map((post) => {
          if (post.id === postId) {
            const hasLiked = post.likedBy.includes(monsterName);
            return {
              ...post,
              likedBy: hasLiked
                ? post.likedBy.filter((name) => name !== monsterName) 
                : [...post.likedBy, monsterName], 
            };
          }
          return post;
        }),
      })),

  getPostsByAuthor: (author) =>
    get().posts.filter((post) => post.author === author),

  getPostsExcludingAuthor: (author) =>
    get().posts.filter((post) => post.author !== author),
}));

export default addPostsStore;
