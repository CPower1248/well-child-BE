exports.seed = function(knex) {
  return knex("content").del()
    .then(function () {
      return knex("classes").insert([

      ]);
    });
};
