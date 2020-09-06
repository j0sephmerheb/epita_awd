const Sequelize = require("sequelize");
const sequelize = new Sequelize("my_movies", "postgres", "postgres", {
  host: "192.168.1.28",
  port: "10532",
  dialect: "postgres",
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("../models/user")(sequelize, Sequelize);
db.movies = require("../models/movie")(sequelize, Sequelize);

module.exports = db;