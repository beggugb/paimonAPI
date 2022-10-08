'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Cliente.init({
    nombres: DataTypes.STRING,
    ci: DataTypes.STRING,
    email: DataTypes.STRING,
    telefono: DataTypes.STRING,
    celular: DataTypes.STRING,
    ivigencia: DataTypes.DATE,
    fvigencia: DataTypes.DATE,
    token: DataTypes.STRING,
    filename: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cliente',
  });
  return Cliente;
};