const router = require("express").Router()

const Content = require("./model")

const { valAgeCategory } = require('../middleware');

router.get("/", async (req, res, next) => {
  try {
    const data = await Content.find()
    return res.status(200).json(data)
  } catch (err) {
    next(err)
  }
})

router.get("/:age_id/:category", valAgeCategory, async (req, res, next) => {
  try {
    const data = await Content.findBy({ 
      age_id: req.params.age_id, 
      category_id: req.category_id
    })
    return res.status(200).json(data)
  } catch (err) {
    next(err)
  }
})

module.exports = router
