const express = require('express');
const {index, home} = require('../controllers/userController');

const router = express.Router();

router.get('/', index);
router.post('/', home);

module.exports = router;