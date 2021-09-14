const db = require("../../data/db-config")

module.exports = {
  find,
  findBy
}

function find() {
  return db("content").orderBy("age_id")
}

function findBy(filter) {
  return db("content").where(filter).orderBy("age_id")
}
