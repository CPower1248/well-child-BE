const Content = require("../content/model")

module.exports = {
  valAgeCategory
}

async function valAgeCategory(req, res, next) {
  const { age_id, category } = req.params
  let category_id

  switch(category) {
    case "SE":
      category_id = "1"
      break;
    case "LC":
      category_id = "2"
      break;
    case "CL":
      category_id = "3"
      break;
    case "MP":
      category_id = "4"
      break;
    case "HP":
      category_id = "5"
      break;
    default:
      return
  }

  try {
    const valIdMatch = await Content.findBy({ age_id, category_id })

    if (valIdMatch) {
      req.category_id = category_id
      next()
    } else {
      res.status(400).json(`The age: ${age}, and category: ${category} could not be found`)
    }
  } catch (err) {
    next(err)
  }
}
