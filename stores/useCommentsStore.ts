import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type Comment = {
  id: string;
  postId: string;
  author: string;
  text: string;
  likedBy: string[];
};

type CommentsState = {
  comments: Comment[];
  addComment: (
    postId: string,
    newComment: Omit<Comment, "id" | "likedBy" | "postId">
  ) => void;
  removeComment: (commentId: string, author: string) => void;
  likeComment: (commentId: string, monsterName: string) => void;
  getCommentsForPost: (postId: string) => Comment[];
};

export const useCommentsStore = create<CommentsState>()(
  persist(
    (set, get) => ({
      comments: [],

      addComment: (postId, newComment) =>
        set((state) => ({
          comments: [
            ...state.comments,
            {
              ...newComment,
              id: uuid.v4().toString(),
              postId: postId,
              likedBy: [],
            },
          ],
        })),

      removeComment: (commentId, author) =>
        set((state) => ({
          comments: state.comments.filter(
            (comment) =>
              !(comment.id === commentId && comment.author === author)
          ),
        })),

      likeComment: (commentId, monsterName) =>
        set((state) => ({
          comments: state.comments.map((comment) =>
            comment.id === commentId
              ? {
                  ...comment,
                  likedBy: comment.likedBy.includes(monsterName)
                    ? comment.likedBy.filter((name) => name !== monsterName)
                    : [...comment.likedBy, monsterName],
                }
              : comment
          ),
        })),

      getCommentsForPost: (postId) =>
        get().comments.filter((comment) => comment.postId === postId),
    }),
    {
      name: "comments-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
