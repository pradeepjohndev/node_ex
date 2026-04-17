const protected = require('../middleware/middleware');
const express = require('express');
const router = express.Router();

const { getallnote, getonenote, createnote, updatenote, deletenote, patchnote, authentication, readauthentication, authen, dashboard, pagimation } = require('../controller/controller');

router.get("/", getallnote);
router.post("/", createnote);

router.post("/auth", authen);
router.get("/dashboard", protected, dashboard);

router.get("/page", pagimation);

router.post("/user", authentication)
router.get("/users", readauthentication)

router.get("/:id", getonenote);
router.put("/:id", updatenote);
router.patch("/:id", patchnote);
router.delete("/:id", deletenote);

module.exports = router;