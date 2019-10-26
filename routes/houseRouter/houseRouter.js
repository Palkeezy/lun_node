const router = require('express').Router();

const {houseController} = require('../../controller');

router.post('/', houseController.createHouse);

module.exports = router;
