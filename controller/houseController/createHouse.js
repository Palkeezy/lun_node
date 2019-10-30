const ErrorHandler = require('../../error/ErrorHandler');
const {houseService} = require('../../service');
const {USER_ROLES, USER_STATUS} = require('../../constants');

module.exports = async (req, res) => {
    try {
        const house = req.body;
        const {user_id} = req.user;

        house.user_id = user_id;

        await houseService.createHouse(house);

        res.status(201).end();
    } catch (e) {
        res.status(e.status).json({
            message: e.message,
            controller: e.controller
        })
    }
};



