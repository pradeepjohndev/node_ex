const express = require("express");
const router = express.Router();

const { getnotes, createNote, updatenote, deletenote, patchnote } = require("../controller/controller");

router.get("/", getnotes);
router.post("/", createNote);
router.put("/:id", updatenote);
router.delete("/:id", deletenote);
router.patch("/:id", patchnote);

module.exports = router;