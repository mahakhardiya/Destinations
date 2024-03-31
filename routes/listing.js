const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");
const listingController = require("../controllers/listing.js");

//index route
router.get("/", wrapAsync(listingController.index));

//new route
router.get("/new", isLoggedIn, listingController.renderNewForm);

//show route
router.get("/:id", wrapAsync(listingController.showListing));

//Create route
router.post("/", isLoggedIn, validateListing, wrapAsync(listingController.createListing));

//edit route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm));

//update route
router.put("/:id", isLoggedIn, isOwner, validateListing, wrapAsync(listingController.updateListing));

//delete route
router.delete("/:id", isLoggedIn, isOwner, wrapAsync(listingController.deleteListing));

module.exports = router;