const db = require('../../dataBase').getInstance();
const {DB_TABLES} = require('../../constants');

module.exports = async (findObj) => {
    const OAuthModel = db.getModel(DB_TABLES.OAUTH_TOKEN);

    const user = await OAuthModel.findOne({
        where: findObj,
        attributes: ['user_id']
    });

    return user && user.dataValues;
};
