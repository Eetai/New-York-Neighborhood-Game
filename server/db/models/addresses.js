const Sequelize = require('sequelize')
const db = require('../db')

const addresses = db.define('addresses', {
  LON: {
    type: Sequelize.STRING,
  },
  LAT: {
    type: Sequelize.STRING,
  },
  NUMBER: {
    type: Sequelize.STRING,
  },
  STREET: {
    type: Sequelize.STRING,
  },
  UNIT: {
    type: Sequelize.STRING,
  },
  CITY: {
    type: Sequelize.STRING,
  },
  DISTRICT: {
    type: Sequelize.STRING,
  },
  REGION: {
    type: Sequelize.STRING,
  },
  POSTCODE: {
    type: Sequelize.STRING,
  },
  HASH: {
    type: Sequelize.STRING,
  },
  BOROUGH: {
    type: Sequelize.STRING
  }
}
)

module.exports = addresses
