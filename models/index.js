const dbConfig = require("../config/dbConfig.js");

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("connected..");
  })
  .catch((err) => {
    console.log("Error" + err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.products = require("./productModel.js")(sequelize, DataTypes);
db.reviews = require("./reviewModel.js")(sequelize, DataTypes);
db.forum = require("./forum.js")(sequelize, DataTypes);
db.otptable = require("./otptable.js")(sequelize, DataTypes);
db.rating = require("./rating.js")(sequelize, DataTypes);
db.registrationdata = require("./registrationdata.js")(sequelize, DataTypes);
db.menu = require("./menu.js")(sequelize, DataTypes);
db.order = require("./order.js")(sequelize, DataTypes);
db.shop = require("./shop.js")(sequelize, DataTypes);

// db.reviews = require('./reviewModel.js')(sequelize, DataTypes)

db.sequelize.sync({ force: false }).then(() => {
  console.log("yes re-sync done!");
});

// 1 to Many Relation

// db.products.hasMany(db.reviews, {
//   foreignKey: "product_id",
//   as: "review",
// });

// db.reviews.belongsTo(db.products, {
//   foreignKey: "product_id",
//   as: "product",
// });

module.exports = db;
