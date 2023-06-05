const Sequelize = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Veiculo = sequelize.define('veiculo', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  placa: {
    type: Sequelize.STRING,
    allowNull: false
  },
  chassi: {
    type: Sequelize.STRING,
    allowNull: false
  },
  renavam: {
    type: Sequelize.STRING,
    allowNull: false
  },
  modelo: {
    type: Sequelize.STRING,
    allowNull: false
  },
  marca: {
    type: Sequelize.STRING,
    allowNull: false
  },
  ano: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 1900,
      max: new Date().getFullYear()
    }
  }
});

module.exports = Veiculo;