exports.up = function(knex) {
  return knex.schema
    .createTable("age", tbl => {
      tbl.increments()
      tbl.integer("age").notNullable().unique()
    })

    .createTable("category", tbl => {
      tbl.increments()
      tbl.string("category").notNullable().unique()
    })

    .createTable("content", tbl => {
      tbl.increments()
      tbl.string("content").notNullable()
      tbl.integer("age_id")
        .references("id")
        .inTable("age")
        .notNullable()
        .unsigned()
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      tbl.integer("category_id")
        .references("id")
        .inTable("category")
        .notNullable()
        .unsigned()
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("content")  
};
