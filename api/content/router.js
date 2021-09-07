const router = require("express").Router()

const Content = require("./model")

router.get("/", (req, res, next) => {
  try {
    const data = Content.find()
    return res.status(200).json(data)
  } catch (err) {
    next(err)
  }
})

module.exports = router
