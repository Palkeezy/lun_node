const db = require('../../dataBase').getInstance();
const {DB_TABLES} = require('../../constants');

module.exports = (paramsObj, findObj) => {
    const UserModel = db.getModel(DB_TABLES.USER);

    UserModel.update(paramsObj, {
        where: findObj
    });
};
