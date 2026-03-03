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
