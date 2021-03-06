const express = require('express');
const router = express.Router();
const statesController = require('../../controllers/statesController');


router.route('/')
    .get(statesController.allStates)
    .post(statesController.createNewState)
    .put(statesController.updateState)
    .delete(statesController.deleteState);

router.route('/:state')
    .get(statesController.getState);

module.exports =router;
