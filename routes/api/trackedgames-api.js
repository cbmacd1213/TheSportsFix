const express = require('express');
const router = express.Router();
const trackedGamesListCtrl = require('../../controllers/trackedgameslists');




router.use(require('../../config/auth'));
router.get('/', trackedGamesListCtrl.index);
router.post('/', trackedGamesListCtrl.create);
router.put('/:id', trackedGamesListCtrl.update);
router.delete('/:id', trackedGamesListCtrl.delete);
router.get('/:id', trackedGamesListCtrl.show);






module.exports = router;