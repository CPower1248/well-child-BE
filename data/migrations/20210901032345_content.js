exports.up = function(knex) {
  return knex.schema
    .createTable("content", tbl => {
    tbl.increments()
    tbl.string("content").notNullable()
  })

  .createTable("age", tbl => {
    tbl.increments()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("content")  
};
