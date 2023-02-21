const {Sequelize, sequelize} = require('./db');

// TODO - define the Musician model

const Musician = sequelize.define("musician", {
    name: Sequelize.STRING,
    instrument: Sequelize.STRING
});

(async () => {
  await sequelize.sync({ force: true });
})();    
    
module.exports = {
    Musician
};