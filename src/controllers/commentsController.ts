/**
 * Comments Controller
 *
 * Handles business logic for comment operations:
 * - listCommentsWithPost: Retrieves all comments for a given post
 * - addComment: Creates a new comment with validation
 *
 * Validates input and delegates data operations to the comments repository.
 */

import type { createCommentInput, Comment } from "../models/comment.js";
import * as commentsRepo from "../repositories/commentsRepo.js";
import type { PostId } from "../models/post.ts";

export function listCommentsWithPost(postId: PostId): Comment[] | undefined {
    return commentsRepo.listCommentsByPostId(postId);
}

export function addComment(postId: PostId, authorId: string, input: createCommentInput): Comment | undefined {
    if(!input.body) {
        throw new Error("Comment body is required");
    }

    return commentsRepo.createComment(postId, authorId, input);
}
