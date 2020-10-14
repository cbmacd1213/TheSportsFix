const express = require('express');
const router = express.Router();
const sportsAPICtrl = require('../../controllers/sports');


router.get('/league/:id', sportsAPICtrl.leagueDetail);
router.post('/league/:id', sportsAPICtrl.leagueDetail);
router.get('/league/:id/events', sportsAPICtrl.leagueEvents);


// router.get('/', trackedGamesListCtrl.index);
// router.post('/', trackedGamesListCtrl.create);
// router.delete('/:id', trackedGamesListCtrl.delete);
// router.put('/:id', trackedGamesListCtrl.update);




module.exports = router;