
/**
 * Comment Model
 *
 * Defines TypeScript types and interfaces for comments:
 * - commentId: Unique identifier for a comment (string or number)
 * - Comment: Complete comment entity with id, postId, body, authorId, and createdAt
 * - createCommentInput: Input validation type for creating new comments
 */

import type { PostId } from "./post.js";

export type commentId = string | number;

export interface Comment {
    id: commentId;
    postId: PostId;
    body: string;
    authorId: string;
    createdAt: string;
}

export interface createCommentInput {
    body: string;
}

