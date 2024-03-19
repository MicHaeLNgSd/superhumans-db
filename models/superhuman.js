'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Superhuman extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Superpower, Image }) {
      // define association here
      Superhuman.hasMany(Superpower, {
        foreignKey: 'ownerId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }
  Superhuman.init(
    {
      nickname: { type: DataTypes.STRING },
      realName: { type: DataTypes.STRING },
      originDescription: { type: DataTypes.TEXT },
      catchPhrase: { type: DataTypes.STRING },
    },
    {
      sequelize,
      modelName: 'Superhuman',
      tableName: 'superhumans',
      underscored: true,
    }
  );
  return Superhuman;
};
