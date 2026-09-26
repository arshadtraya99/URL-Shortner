const express = require("express");

const {
    handleShortUrl,
    handleRedirect
} = require("../controller/url");

const router = express.Router();

router.post("/", handleShortUrl);

router.get("/:shortId", handleRedirect);

module.exports = router;