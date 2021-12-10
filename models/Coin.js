const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Coin extends Model {}

Coin.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    coin_ticker: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    definition: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "coin",
  }
);

module.exports = Coin;
