const db = require('../../dataBase').getInstance();
const {DB_TABLES} = require('../../constants');

module.exports = (access_token) => {
    const OAuthModel = db.getModel(DB_TABLES.OAUTH_TOKEN);

    OAuthModel.destroy({
        where: {access_token}
    })
};
