const jwt = require('jsonwebtoken');

const {JWT_SECRET} = require('../constants');

module.exports = () => {
      const access_token = jwt.sign({}, JWT_SECRET.ACCESS, {expiresIn: '24h'});
      const refresh_token = jwt.sign({}, JWT_SECRET.REFRESH, {expiresIn: '96h'});

      return {
          access_token,
          refresh_token
      }
};
