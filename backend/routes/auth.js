//! IMPORTS
const router = require('express').Router();

//! IMPORT CONTROLLERS
const { login, refreshJwtToken } = require('../controllers/auth');

//! CONTROLLS
router.post('/login', login);
router.post('/refreshJwtToken', refreshJwtToken);

module.exports = router;
