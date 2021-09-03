
exports.seed = function(knex) {
  return knex("age").del()
    .then(function () {
      return knex("age").insert([
        {age: 1},
        {age: 2},
        {age: 3},
        {age: 4},
        {age: 5}
      ]);
    });
};
