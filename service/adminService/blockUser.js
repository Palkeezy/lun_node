const db = require('../../dataBase').getInstance();
const {DB_TABLES, USER_STATUS} = require('../../constants');

module.exports = async (user_id) => {
    const UserModel = db.getModel(DB_TABLES.USER);

    UserModel.update({
            status_id: USER_STATUS.BLOCKED
        }, {
            where: {
                id: user_id
            }
        }
    )
};
