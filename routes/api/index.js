const express =  require('express')
const router = express.Router()

router.post('/', function(req, res, next) {
  res.json(require(`./${req.query.functionId}`))
})

module.exports = router
