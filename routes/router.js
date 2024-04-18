const { Router } = require('express');
const { get_characters, get_fleet, get_home } = require("../controllers/controller");

const router = Router();

router.get("/", get_home)
router.get("/p/:id/characters", get_characters)
router.get("/p/:id/fleet", get_fleet)

module.exports = router