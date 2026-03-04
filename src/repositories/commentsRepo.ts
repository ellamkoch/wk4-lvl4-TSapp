/**
 * Comments Repository
 *
 * In-memory data access layer for comments:
 * - listCommentsByPostId: Fetches all comments for a specific post
 * - createComment: Adds a new comment to the collection
 *
 * Validates that the associated post exists before creating or listing comments.
 */

import crypto from "crypto";
import type { Comment, createCommentInput } from "../models/comment.js";
import type { PostId } from "../models/post.ts";
import { findPostById } from "./postsRepo.js";


const comments: Comment[] = [];

export function listCommentsByPostId(postId: PostId) : Comment[] | undefined {
    const post = findPostById(postId);
    if(!post) return undefined;

    return comments.filter((c) => c.postId === postId);
}

export function createComment(postId: PostId, authorId: string, input: createCommentInput): Comment | undefined {
    const post = findPostById(postId);
    if(!post) return undefined;
    
    const comment: Comment = {
        id: crypto.randomUUID(),
        postId,
        body: input.body,
        authorId,
        createdAt: new Date().toISOString()
    };

    comments.push(comment);

    return comment;
}
