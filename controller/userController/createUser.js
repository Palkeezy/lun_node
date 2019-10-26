const ErrorHandler = require('../../error/ErrorHandler');
const {userService} = require('../../service');
const {USER_ROLES, USER_STATUS} = require('../../constants');

module.exports = async (req, res) => {
    try {
        const user = req.body;

        user.role_id = USER_ROLES.USER;
        user.status_id = USER_STATUS.ACTIVE;

        await userService.createUser(user);

        res.status(201).end();
    } catch (e) {
        res.status(e.status).json({
            message: e.message,
            controller: e.controller
        })
    }
};



