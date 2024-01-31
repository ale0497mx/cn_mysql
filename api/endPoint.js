const express = require('express');

const router = express.Router(); //esto nos va permitir enrutar nuestros endpoints  

// const {ping} = require('../controllers/pingController');

const {loging} = require('../controllers/logingController');

// router.get('/ping', ping);
router.get('/loging', loging);

module.exports = router;