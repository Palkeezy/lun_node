const ErrorHandler = require('../../error/ErrorHandler');
const {tokenVerificator} = require('../../helpers');
const {JWT_METHOD} = require('../../constants');

module.exports = async (req, res, next) => {
    const token = req.get('Authorization');

    if (!token) {
        return next(new ErrorHandler('no Token', 403, 'checkAccessToken'));
    }

    tokenVerificator(token, JWT_METHOD.ADMIN);

    next();
};
