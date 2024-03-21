'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Picture extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Superhuman }) {
      // define association here
      Picture.belongsToMany(Superhuman, {
        through: 'superhumans_to_pictures',
        foreignKey: 'pictureId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }
  Picture.init(
    {
      path: { type: DataTypes.STRING },
    },
    {
      sequelize,
      modelName: 'Picture',
      tableName: 'pictures',
      underscored: true,
    }
  );
  return Picture;
};
