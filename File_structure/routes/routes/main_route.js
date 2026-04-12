const express = require("express");
const router = express.Router();

const { getnotes, createnote, updatenote, deletenote } = require("../controllers/main_controller");

router.get("/", getnotes);
router.post("/", createnote);
router.put("/:id", updatenote);
router.delete("/:id", deletenote);

module.exports = router;