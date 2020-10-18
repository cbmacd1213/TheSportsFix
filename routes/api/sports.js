const express = require('express');
const router = express.Router();
const sportsAPICtrl = require('../../controllers/sports');


router.get('/league/:id', sportsAPICtrl.leagueDetail);
router.get('/league/:id/events', sportsAPICtrl.leagueEvents);







module.exports = router;