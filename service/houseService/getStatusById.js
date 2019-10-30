const db = require('../../dataBase').getInstance();
const {DB_TABLES} = require('../../constants');

module.exports = async (houseStatus_id) => {
    const HouseStatusModel = db.getModel(DB_TABLES.HOUSE_STATUS);

    const status = await HouseStatusModel.findByPk(houseStatus_id);

    return status && status.dataValues;
};
