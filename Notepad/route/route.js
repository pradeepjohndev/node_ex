const express = require('express');
const router = express.Router();

const { getallnote, getonenote, createnote, updatenote, deletenote, patchnote, authentication, readauthentication, authen, dashboard } = require('../controller/controller');

router.get("/", getallnote);
router.post("/", createnote);

router.post("/auth", authen);
router.get("/dashboard", dashboard);

router.post("/user", authentication)
router.get("/users", readauthentication)

router.get("/:id", getonenote);
router.put("/:id", updatenote);
router.patch("/:id", patchnote);
router.delete("/:id", deletenote);

module.exports = router;