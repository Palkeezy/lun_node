module.exports = (sequelize, DataTypes) => {
    const House = sequelize.define('House', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        },
        square: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        city_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        },
        price: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        status_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        },
        rooms: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }, {
        tableName: 'house',
        timestamps: false
    });

    const User = sequelize.import('./User.js');
    const HouseStatus = sequelize.import('./HouseStatus.js');
    const City = sequelize.import('./City.js');

    House.belongsTo(User, {foreignKey: 'user_id'});
    House.belongsTo(HouseStatus, {foreignKey: 'status_id'});
    House.belongsTo(City, {foreignKey: 'city_id'});

    return House;
};
