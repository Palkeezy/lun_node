const ErrorHandler = require('../../error/ErrorHandler');
const {tokenVerificator} = require('../../helpers');

module.exports = async (req, res, next) => {
    const token = req.get('Authorization');

    if (!token) {
        return next(new ErrorHandler('no Token', 403, 'checkAccessToken'));
    }

    tokenVerificator(token, 'admin');

    next();
};
