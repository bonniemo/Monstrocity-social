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
  addPost: (newPost: Omit<Post, "id" | "likedBy" | "comments">) => void;
  removePost: (postId: string, author: string) => void;
  likePost: (postId: string, monsterName: string) => void;
  addComment: (
    postId: string,
    newComment: Omit<Comment, "id" | "likedBy">
  ) => void;
  removeComment: (postId: string, commentId: string, author: string) => void;
  likeComment: (postId: string, commentId: string, monsterName: string) => void;
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
        comments: post.comments || [],
      })),
    })),

  addPost: (newPost) =>
    set((state) => ({
      posts: [
        ...state.posts,
        {
          ...newPost,
          id: uuid.v4().toString(),
          likedBy: [],
          comments: [],
        },
      ],
    })),

  removePost: (postId, author) =>
    set((state) => ({
      posts: state.posts.filter(
        (post) => post.id !== postId || post.author !== author
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

  addComment: (postId, newComment) =>
    set((state) => ({
      posts: state.posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: [
                ...post.comments,
                { ...newComment, id: uuid.v4().toString(), likedBy: [] },
              ],
            }
          : post
      ),
    })),

  removeComment: (postId, commentId, author) =>
    set((state) => ({
      posts: state.posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: post.comments.filter(
                (comment) =>
                  comment.id !== commentId || comment.author !== author
              ),
            }
          : post
      ),
    })),

  likeComment: (postId, commentId, monsterName) =>
    set((state) => ({
      posts: state.posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: post.comments.map((comment) =>
                comment.id === commentId
                  ? {
                      ...comment,
                      likedBy: comment.likedBy.includes(monsterName)
                        ? comment.likedBy.filter((name) => name !== monsterName)
                        : [...comment.likedBy, monsterName],
                    }
                  : comment
              ),
            }
          : post
      ),
    })),

  getPostsByAuthor: (author) =>
    get().posts.filter((post) => post.author === author),

  getPostsExcludingAuthor: (author) =>
    get().posts.filter((post) => post.author !== author),
}));

export default addPostsStore;
