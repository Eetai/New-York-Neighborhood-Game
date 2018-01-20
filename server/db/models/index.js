const addresses = require('./addresses')
const zipcodes = require('./zipcodes')


addresses.hasOne(zipcodes, { foreignKey: 'ZIPCode' })

module.exports = {
  addresses
  , zipcodes
}
