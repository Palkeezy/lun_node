const ErrorHandler = require('../../error/ErrorHandler');
const {authService} = require('../../service');

module.exports = async (req, res, next) => {
    const token = req.get('Authorization');

    if (!token) {
        return next(new ErrorHandler('no Token', 403, 'checkAccessToken'));
    }

    const userFromAccessToken = await authService.getUserFromAccessToken(token);

    if (!userFromAccessToken) {
        return next(new ErrorHandler('No user', 404, 'checkAccessToken'))
    }

    req.user = userFromAccessToken;

    next();
};
