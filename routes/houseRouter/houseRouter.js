const router = require('express').Router();

const {houseController} = require('../../controller');
const {authMiddleware, cityMiddleware, houseMiddleware} = require('../../middlewares');

router.post(
    '/',
    authMiddleware.checkAccessTokenMiddleware,
    authMiddleware.getUserFromTokenMiddleware,
    cityMiddleware.checkIsCityPresent,
    houseMiddleware.checkIsStatusPresent,
    houseController.createHouse);

module.exports = router;
