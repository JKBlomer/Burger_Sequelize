module.exports = function(sequelize, DataTypes){
    var Burger = sequelize.define("Burger", {
        burger_name: {
            type: DataTypes.STRING
        },
        devoured: {
            type: DataTypes.BOOLEAN
        }
    });

    return Burger;
};