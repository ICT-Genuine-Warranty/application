const express = require("express");
const history = require("../dummy/history.json")

const router = express.Router();

router.post("/", (req, res, next) => {
      return res.status(200).json(history);
});
module.exports = router;
