const router = require("express").Router();
const rsvproutes = require("./rsvp");

// Book routes
router.use("/rsvp", rsvproutes);

module.exports = router;
