const db = require('../../dataBase').getInstance();
const {DB_TABLES} = require('../../constants');

module.exports = async (houseObject) => {
    const HouseModel = db.getModel(DB_TABLES.HOUSE);

    HouseModel.create(houseObject);
};
