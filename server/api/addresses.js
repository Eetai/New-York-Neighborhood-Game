const router = require('express').Router()
const { Addresses } = require('../db/models')
module.exports = router

router.get('/randomData', (req, res, next) => {

  /// get 40 random ids
  function getRandomInt() {
    return Math.floor(Math.random() * (954922))
  }
  let randNumbers = [];
  for (i = 0; i < 40; i++) randNumbers.push(getRandomInt());

  // send all the address data for those ids
  Addresses.findAll({
    where: {
      id: randNumbers
    }
  }
  )
    .then(addresses => res.json(addresses))
    .catch(next)
})
