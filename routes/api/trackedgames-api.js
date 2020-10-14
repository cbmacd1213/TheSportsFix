const express = require('express');
const router = express.Router();
const trackedGamesListCtrl = require('../../controllers/trackedgameslists');

router.use(require('../../config/auth'));


router.get('/', trackedGamesListCtrl.index);
router.get('/', trackedGamesListCtrl.show);
router.post('/', trackedGamesListCtrl.create);
router.delete('/', trackedGamesListCtrl.delete);
router.put('/', trackedGamesListCtrl.update);




module.exports = router;