'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Superhuman extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Superpower, Picture }) {
      // define association here
      Superhuman.hasMany(Superpower, {
        foreignKey: 'ownerId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });

      Superhuman.belongsToMany(Picture, {
        through: 'superhumans_to_picture',
        foreignKey: 'superhumanId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }
  Superhuman.init(
    {
      nickname: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
      realName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
      originDescription: {
        type: DataTypes.TEXT,
        validate: {
          notEmpty: true,
        },
      },
      catchPhrase: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
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
