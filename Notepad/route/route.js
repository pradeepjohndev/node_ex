const express = require('express');
const router = express.Router();

const { getallnote, getonenote, createnote, updatenote, deletenote, patchnote } = require('../controller/controller');

router.get("/", getallnote);
router.post("/", createnote);
router.get("/:id", getonenote);
router.put("/:id", updatenote);
router.patch("/:id", patchnote);
router.delete("/:id", deletenote);

module.exports = router;