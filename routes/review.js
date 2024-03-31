const express = require("express");
const router = express.Router({mergeParams : true});
const wrapAsync = require("../utils/wrapAsync.js");
const {isReviewAuthor, isLoggedIn, validateReview} = require("../middleware.js");

const reviewContoller = require("../controllers/review.js");

//post review route
router.post("/", isLoggedIn, validateReview, wrapAsync(reviewContoller.createReview));

//delete review route
router.delete("/:reviewId", isReviewAuthor, isLoggedIn , wrapAsync(reviewContoller.deleteReview));

module.exports = router;