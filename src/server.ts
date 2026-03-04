/**
 * Express server for the TS lab - Posts and Comments API.
 *
 * Provides REST endpoints for managing posts and comments:
 * - GET /health - Health check endpoint
 * - GET /posts - Retrieve all posts
 * - GET /posts/:id/comments - Retrieve comments for a specific post
 * - POST /posts - Create a new post
 * - POST /posts/:id/comments - Add a comment to a post
 *
 * Uses controllers for business logic and repositories for data persistence.
 */

import express from "express";
import { getAllPosts, addPost } from "./controllers/postsController.js";
import {
  listCommentsWithPost,
  addComment,
} from "./controllers/commentsController.js";

const app = express();
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ ok: true, data: { status: "ok" }, meta: {} });
});

app.get("/posts", (_req, res) => {
  const posts = getAllPosts();
  res.json({ ok: true, data: posts, meta: {} });
});

app.get("/posts/:id/comments", (req, res) => {
  const postId = req.params.id; //have to have this to nest the comments under the proper postId
  const comments = listCommentsWithPost(postId);
  if (comments === undefined) {
    return res.status(404).json({
      ok: false,
      data: null,
      meta: { error: "Post not found" },
    });
  }
  res.json({ ok: true, data: comments, meta: {} });
});

app.post("/posts", (req, res) => {
  // Hardcode author for lab simplicity (auth comes in later weeks)
  const post = addPost("demo-author-id", req.body);
  res.status(201).json({ ok: true, data: post, meta: {} });
});

app.post("/posts/:id/comments", (req, res) => {
  const postId = req.params.id; //have to have this to nest the comments under the proper postId
  const comment = addComment(postId, "demo-author-id", req.body);

  if (comment === undefined) {
    return res.status(400).json({
      ok: false,
      data: null,
      meta: { error: "Invalid input or post not found" },
    });
  }

  res.status(201).json({ ok: true, data: comment, meta: {} });
});

app.listen(3008, () => {
  console.log("TS Lab API running on http://localhost:3008");
});
