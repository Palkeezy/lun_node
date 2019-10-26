const ErrorHandler = require('../../error/ErrorHandler');
const {houseService} = require('../../service');
const {USER_ROLES, USER_STATUS} = require('../../constants');

module.exports = async (req, res) => {
    try {
        const house = req.body;

        house.user_id = 1; // TODO

        await houseService.createHouse(house);

        res.status(201).end();
    } catch (e) {
        res.status(e.status).json({
            message: e.message,
            controller: e.controller
        })
    }
};



