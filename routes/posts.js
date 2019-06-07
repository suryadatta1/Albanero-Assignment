const express = require("express");
const router = express.Router();
const passport = require("passport");

// Post model
const Post = require("../models/Post");

// Validation
const validatePostInput = require("../validation/post");

// @route   GET posts/test
// @desc    Tests post route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Posts Works" }));

// @route   GET  posts
// @desc    Get posts
// @access  Private
router.get("/", passport.authenticate("jwt", { session: false }),
(req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({ nopostsfound: "No posts found" }));
});

// @route   GET api/posts/:id
// @desc    Get post by id
// @access  Public
router.get("/:id",passport.authenticate("jwt", { session: false }),
(req, res)=> {
  Post.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err =>
      res.status(404).json({ nopostfound: "No post found with that ID" })
    );
});

// @route   POST /posts
// @desc    Create post
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePostInput(req.body);

    // Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }

    const newPost = new Post({
      title: req.body.title,
      text: req.body.text,
      text1:req.body.text1
    });

    newPost.save().then(post => res.json(post));
  }
);

// @route   PUT /posts
// @desc    Update post
// @access  Private
  

// @route   DELETE api/posts/:id
// @desc    Delete post
// @access  Private
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Post.findById(req.params.id)
      .then(post => {
        // Delete
        post.remove().then(() => res.json({ success: true }));
      })
      .catch(err => res.status(404).json({ postnotfound: "No post found" }));
  }
);module.exports = router;