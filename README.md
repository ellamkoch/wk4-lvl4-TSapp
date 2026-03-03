# wk4-lvl4-TSapp

This repo is for Week 4 of Level 4 for CodeX academy's homework to learn about TS.

## Homework

**Day 1 Homework** :

1. [Read TS Handbook sections](https://www.typescriptlang.org/docs/handbook/intro.html): “The Basics” + “Everyday Types.”
2. Create src/day1-homework.ts with:

* 5 variables using string, number, boolean
* 3 union types
* 2 examples of incorrect assignments (commented) that would fail typecheck

3. Run npm run typecheck and confirm it fails until you fix it.

**Day 2 Homework** :

1. Add a `Comment` model (`src/models/comment.ts`) and a `commentsRepo.ts` using typed arrays.
2. Add controller functions for:

* list comments for a post
* add comment to post

3. Add routes:

* `GET /posts/:id/comments`
* `POST /posts/:id/comments`

### Day 2 – Comments Feature (TypeScript)

#### Overview

On Day 2, I extended the in-memory Express API by adding a nested **Comment** resource to support basic relational behavior between posts and comments.

This builds on the existing MVC structure and reinforces TypeScript typing across models, repositories, and controllers.

---

#### What Was Added

**1. Comment Model**

* `Comment` interface
* `CreateCommentInput` interface
* `PostId` reused from the Post model to demonstrate shared type usage

**2. In-Memory Comments Repository**

* Typed `Comment[]` array
* `listCommentsByPostId(postId)`
* `createComment(postId, authorId, input)`

The repository mirrors the pattern used for posts and returns `undefined` when the parent post is not found.

**3. Comments Controller**

* `getAllCommentsWithPost(postId)`
* `addComment(postId, authorId, input)`
* Basic validation for required `body`

**4. Nested Routes**

* `GET /posts/:id/comments`
* `POST /posts/:id/comments`

Routes extract `postId` from `req.params` and delegate logic to the controller layer.

