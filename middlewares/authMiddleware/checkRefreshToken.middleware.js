const ErrorHandler = require('../../error/ErrorHandler');
const {refreshTokenVerificator} = require('../../helpers');
const {JWT_METHOD} = require('../../constants');

module.exports = async (req, res, next) => {
    const token = req.get('Authorization');

    if (!token) {
        return next(new ErrorHandler('no Token', 403, 'checkRefreshToken'));
    }

    refreshTokenVerificator(token, JWT_METHOD.USER);

    next();
};
