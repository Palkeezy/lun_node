const {DB_TABLES} = require('../../constants');
const db = require('../../dataBase').getInstance();

module.exports = (tokenObject) => {
  const OAuthToken = db.getModel(DB_TABLES.OAUTH_TOKEN);

  OAuthToken.create(tokenObject)


};
