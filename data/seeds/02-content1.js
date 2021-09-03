
exports.seed = function(knex) {
  return knex("content").del()
    .then(function () {
      return knex("content").insert([
        // Social and Emotional
        {
          content: "Is shy or nervous with strangers",
          age_id: 1,
          category_id: 1
        },
        {
          content: "Cries when mom or dad leaves",
          age_id: 1,
          category_id: 1
        },
        {
          content: "Has favorite things and people",
          age_id: 1,
          category_id: 1
        },
        {
          content: "Shows fear in some situations",
          age_id: 1,
          category_id: 1
        },
        {
          content: "Hands you a book when he/she wants to hear a story",
          age_id: 1,
          category_id: 1
        },
        {
          content: "Repeats sounds or actions to get attention",
          age_id: 1,
          category_id: 1
        },
        {
          content: "Puts out arm or leg to help with dressing",
          age_id: 1,
          category_id: 1
        },
        {
          content: "Plays games such as 'peek-a-boo' and 'pat-a-cake'",
          age_id: 1,
          category_id: 1
        },

        // Language and Communication
        {
          content: "Responds to simple spoken requests",
          age_id: 1,
          category_id: 2
        },
        {
          content: "Uses simple gestures, like shaking head 'no' or waving 'bye-bye'",
          age_id: 1,
          category_id: 2
        },
        {
          content: "Makes sounds with changes in tone (sounds more like speech)",
          age_id: 1,
          category_id: 2
        },
        {
          content: "Says 'mama' and 'dada' and exclamations like 'uh-oh!'",
          age_id: 1,
          category_id: 2
        },
        {
          content: "Tries to say words you say",
          age_id: 1,
          category_id: 2
        },

        // Cognitive
        {
          content: "Explores things in different ways, like shaking, banging, throwing",
          age_id: 1,
          category_id: 3
        },
        {
          content: "Finds hidden things easily",
          age_id: 1,
          category_id: 3
        },
        {
          content: "Looks at the right picture or thing when it’s named",
          age_id: 1,
          category_id: 3
        },
        {
          content: "Copies gestures",
          age_id: 1,
          category_id: 3
        },
        {
          content: "Starts to use things correctly; for example, drinks from a cup, brushes hair",
          age_id: 1,
          category_id: 3
        },
        {
          content: "Bangs two things together",
          age_id: 1,
          category_id: 3
        },
        {
          content: "Puts things in a container, takes things out of a container",
          age_id: 1,
          category_id: 3
        },
        {
          content: "Lets things go without help",
          age_id: 1,
          category_id: 3
        },
        {
          content: "Pokes with index (pointer) finger",
          age_id: 1,
          category_id: 3
        },
        {
          content: "Follows simple directions like 'pick up the toy'",
          age_id: 1,
          category_id: 3
        },

        // Movement and Physical Development
        {
          content: "Gets to a sitting position without help",
          age_id: 1,
          category_id: 4
        },
        {
          content: "Pulls up to stand, walks holding on to furniture ('cruising')",
          age_id: 1,
          category_id: 4
        },
        {
          content: "May take a few steps without holding on",
          age_id: 1,
          category_id: 4
        },
        {
          content: "May stand alone",
          age_id: 1,
          category_id: 4
        },

        // Help for parents
        {
          content: "Doesn’t crawl",
          age_id: 1,
          category_id: 5
        },
        {
          content: "Can’t stand when supported",
          age_id: 1,
          category_id: 5
        },
        {
          content: "Doesn’t search for things that he/she sees you hide",
          age_id: 1,
          category_id: 5
        },
        {
          content: "Doesn’t say single words like 'mama' or 'dada'",
          age_id: 1,
          category_id: 5
        },
        {
          content: "Doesn’t learn gestures like waving or shaking head",
          age_id: 1,
          category_id: 5
        },
        {
          content: "Doesn’t point to things",
          age_id: 1,
          category_id: 5
        },
        {
          content: "Loses skills he/she once had",
          age_id: 1,
          category_id: 5
        },
      ]);
    });
};
