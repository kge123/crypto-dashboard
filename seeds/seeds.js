const sequelize = require('../config/connection');
const { Coin } = require("../models");

const coinDefinitions = require("./coinDefinitions.json")

const seedDb = async () => {
    try {
        await sequelize.sync({force: true})
    await Coin.bulkCreate(coinDefinitions);
    } catch(err) {
        console.log(err)
    }
    process.exit(0);
}

seedDb();

module.exports = seedDb;