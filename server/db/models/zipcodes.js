const Sequelize = require('sequelize')
const db = require('../db')

const zipcodes = db.define('zipcodes', {
    CountyName: {
        type: Sequelize.STRING,
    },
    ZIPCode: {
        type: Sequelize.STRING,
    }
}
)

module.exports = zipcodes
