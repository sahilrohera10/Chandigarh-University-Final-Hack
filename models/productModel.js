module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("product", {
    image: {
      type: DataTypes.STRING,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.TEXT,
    },
    // published: {
    //     type: DataTypes.BOOLEAN
    // }
    category: {
      type: DataTypes.STRING,
    },
    category: {
      type: DataTypes.STRING,
    },
    sellerId: {
      type: DataTypes.INTEGER,
    },
    contactNumber: {
      type: DataTypes.BIGINT,
    },
  });

  return Product;
};
