const db = require('../../dataBase').getInstance();
const {DB_TABLES} = require('../../constants');

module.exports = async (access_token) => {
    const OAuthModel = db.getModel(DB_TABLES.OAUTH_TOKEN);
    const UserModel = db.getModel(DB_TABLES.USER);

    const user = await OAuthModel.findOne({
        where: {
            access_token
        },
        include: [{
            model: UserModel,
            attribute: ['email', 'role_id', 'status_id']
        }],
        attributes: ['user_id']
    });

    return user && user.dataValues;
};
