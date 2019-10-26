const db = require('../../dataBase').getInstance();
const {DB_TABLES} = require('../../constants');


module.exports = async (serchObject) => {
    const UserModel = db.getModel(DB_TABLES.USER);

    const user = await UserModel.findOne({
        where : serchObject
    });

    return user && user.dataValues
};
