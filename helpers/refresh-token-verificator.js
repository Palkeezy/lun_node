const jwt = require('jsonwebtoken');
const {JWT_METHOD, JWT_SECRET} = require('../constants');
const ErrorHandler = require('../error/ErrorHandler');

module.exports = (token, method) => {

    if (method === JWT_METHOD.ADMIN) {
        jwt.verify(token, JWT_SECRET.ADMIN_REFRESH, (err) => {
            if (err) {
                throw new ErrorHandler('Token is not valid', 403, 'refreshTokenVerificator')
            }
        })
    }

    if (method === JWT_METHOD.USER) {
        jwt.verify(token, JWT_SECRET.REFRESH, (err) => {
            if (err) {
                throw new ErrorHandler('Token is not valid', 403, 'refreshTokenVerificator')
            }
        })
    }
};
