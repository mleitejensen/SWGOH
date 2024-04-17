const { Router } = require('express');
const { get_characters } = require("../controllers/controller");

const router = Router();

router.get("/", get_characters)

module.exports = router