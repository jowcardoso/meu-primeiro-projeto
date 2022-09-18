'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produtos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Produtos.init({
    nome: {
      type: DataTypes.STRING,
      validate: {
        funcaoValidadora: function (dado) {
          if (dado.length <= 1) throw new Error('Preencha o campo nome com mais de 2 caracteres')
        }
      }
    },
    descricao: {
      type: DataTypes.STRING,
      validate: {
        funcaoValidadora: function (dado) {
          if (dado.length <= 9) throw new Error('o campo nome deve ter mais de 10 caracteres')
        }
      }
    },
    categoria: {
      type: DataTypes.STRING,
      validate: {
        funcaoValidadora: function (dado) {
          if (dado.length <= 3) throw new Error('o campo nome deve ter mais de 4 caracteres')
        }
      }
    },
    preco: {
      type: DataTypes.DECIMAL,
      validate: {
        funcaoValidadora: function (dado) {
          if (dado.length <= 0) throw new Error('o campo nome deve ser maior que zero')
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Produtos',
  });
  return Produtos;
};