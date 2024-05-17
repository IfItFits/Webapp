const express = require('express');
const router = express.Router();
const controller = require('../controllers/user');

const { getOneUser } = controller;

router.get('/getOneUser', getOneUser);




module.exports = router;