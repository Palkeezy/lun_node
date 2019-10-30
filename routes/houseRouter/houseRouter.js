const router = require('express').Router();

const {houseController} = require('../../controller');
const {authMiddleware} = require('../../middlewares');

router.post('/', authMiddleware.checkAccessTokenMiddleware, houseController.createHouse);

module.exports = router;
