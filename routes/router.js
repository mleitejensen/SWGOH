const { Router } = require('express');
const { get_characters, get_fleet } = require("../controllers/controller");

const router = Router();

router.get("/", get_characters)
router.get("/fleet", get_fleet)

module.exports = router