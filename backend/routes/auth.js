//! IMPORTS
const router = require('express').Router();

//! IMPORT CONTROLLERS
const { login } = require('../controllers/auth');

//! CONTROLLS
router.post('/login', login);

module.exports = router;
