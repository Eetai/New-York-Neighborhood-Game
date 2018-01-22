const router = require('express').Router()
const { addresses, zipcodes } = require('../db/models')
module.exports = router

router.get('/randomData', (req, res, next) => {

  /// get 4 random ids
  function getRandomInt() {
    return Math.floor(Math.random() * (63400))
  }
  let randNumbers = [];
  for (i = 0; i < 4; i++) randNumbers.push(getRandomInt());

  // send all the address data for those ids
  addresses.findAll({
    where: {
      newprimarykey: randNumbers
    }
  }
  )
    .then(addresses => res.json(addresses))
    .catch(next)
})
