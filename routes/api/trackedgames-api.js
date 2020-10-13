const express = require('express');
const router = express.Router();
const trackedGamesListCtrl = require('../../controllers/trackedgameslists');

router.use(require('../../config/auth'));


router.get('/', trackedGamesListCtrl.index);
router.get('/:id', trackedGamesListCtrl.show);
router.post('/', trackedGamesListCtrl.create);
router.delete('/:id', trackedGamesListCtrl.delete);
router.put('/:id', trackedGamesListCtrl.update);




module.exports = router;