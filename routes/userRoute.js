const express = require('express');
const { index, home, testing } = require('../controllers/userController');

const router = express.Router();

router.get('/', index);
router.post('/', home);
router.get('/tester', testing);

module.exports = router;