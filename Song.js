const {Sequelize, sequelize} = require('./db');

// TODO - define the Band model
const Song = sequelize.define("song", {
    // Column names
    title: Sequelize.STRING
})



module.exports = {
    Song
};