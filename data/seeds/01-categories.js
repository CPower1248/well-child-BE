
exports.seed = function(knex) {
  return knex("category").del()
    .then(function () {
      return knex("category").insert([
        {category: "Social and Emotional"},
        {category: "Language and Communication"},
        {category: "Cognitive (Learning, Thinking, Problem-solving)"},
        {category: "Movement and Physical Development"},
        {category: "Help for parents"}
      ]);
    });
};
