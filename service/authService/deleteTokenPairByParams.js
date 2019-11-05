const db = require('../../dataBase').getInstance();
const {DB_TABLES} = require('../../constants');

module.exports = (deleteObj) => {
    const OAuthModel = db.getModel(DB_TABLES.OAUTH_TOKEN);

    OAuthModel.destroy({
        where: deleteObj
    })
};
