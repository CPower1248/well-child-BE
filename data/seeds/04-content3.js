
exports.seed = function(knex) {
  return knex("content").del()
    .then(function () {
      return knex("content").insert([
        // Social and Emotional
        {
          content: "Copies adults and friends",
          age_id: 3,
          category_id: 1
        },
        {
          content: "Shows affection for friends without prompting",
          age_id: 3,
          category_id: 1
        },
        {
          content: "Takes turns in games",
          age_id: 3,
          category_id: 1
        },
        {
          content: "Shows concern for crying friend",
          age_id: 3,
          category_id: 1
        },
        {
          content: "Understands the idea of 'mine' and 'his' or 'hers'",
          age_id: 3,
          category_id: 1
        },
        {
          content: "Shows a wide range of emotions",
          age_id: 3,
          category_id: 1
        },
        {
          content: "Separates easily from mom and dad",
          age_id: 3,
          category_id: 1
        },
        {
          content: "May get upset with major changes in routine",
          age_id: 3,
          category_id: 1
        },
        {
          content: "Dresses and undresses self",
          age_id: 3,
          category_id: 1
        },

        // Language and Communication
        {
          content: "Follows instructions with 2 or 3 steps",
          age_id: 3,
          category_id: 2
        },
        {
          content: "Can name most familiar things",
          age_id: 3,
          category_id: 2
        },
        {
          content: "Understands words like 'in,' 'on,' and 'under'",
          age_id: 3,
          category_id: 2
        },
        {
          content: "Says first name, age, and sex",
          age_id: 3,
          category_id: 2
        },
        {
          content: "Names a friend",
          age_id: 3,
          category_id: 2
        },
        {
          content: "Says words like 'I,' 'me,' 'we,' and 'you' and some plurals (cars, dogs, cats)",
          age_id: 3,
          category_id: 2
        },
        {
          content: "Talks well enough for strangers to understand most of the time",
          age_id: 3,
          category_id: 2
        },
        {
          content: "Carries on a conversation using 2 to 3 sentences",
          age_id: 3,
          category_id: 2
        },

        // Cognitive
        {
          content: "Can work toys with buttons, levers, and moving parts",
          age_id: 3,
          category_id: 3
        },
        {
          content: "Plays make-believe with dolls, animals, and people",
          age_id: 3,
          category_id: 3
        },
        {
          content: "Does puzzles with 3 or 4 pieces",
          age_id: 3,
          category_id: 3
        },
        {
          content: "Understands what 'two' means",
          age_id: 3,
          category_id: 3
        },
        {
          content: "Copies a circle with pencil or crayon",
          age_id: 3,
          category_id: 3
        },
        {
          content: "Turns book pages one at a time",
          age_id: 3,
          category_id: 3
        },
        {
          content: "Builds towers of more than 6 blocks",
          age_id: 3,
          category_id: 3
        },
        {
          content: "Screws and unscrews jar lids or turns door handle",
          age_id: 3,
          category_id: 3
        },

        // Movement and Physical Development
        {
          content: "Climbs well",
          age_id: 3,
          category_id: 4
        },
        {
          content: "Runs easily",
          age_id: 3,
          category_id: 4
        },
        {
          content: "Pedals a tricycle (3-wheel bike)",
          age_id: 3,
          category_id: 4
        },
        {
          content: "Walks up and down stairs, one foot on each step",
          age_id: 3,
          category_id: 4
        },

        // Help for parents
        {
          content: "Falls down a lot or has trouble with stairs",
          age_id: 3,
          category_id: 5
        },
        {
          content: "Drools or has very unclear speech",
          age_id: 3,
          category_id: 5
        },
        {
          content: "Can’t work simple toys (such as peg boards, simple puzzles, turning handle)",
          age_id: 3,
          category_id: 5
        },
        {
          content: "Doesn’t speak in sentences",
          age_id: 3,
          category_id: 5
        },
        {
          content: "Doesn’t understand simple instructions",
          age_id: 3,
          category_id: 5
        },
        {
          content: "Doesn’t play pretend or make-believe",
          age_id: 3,
          category_id: 5
        },
        {
          content: "Doesn’t want to play with other children or with toys",
          age_id: 3,
          category_id: 5
        },
        {
          content: "Doesn’t make eye contact",
          age_id: 3,
          category_id: 5
        },
        {
          content: "Loses skills he/she once had",
          age_id: 3,
          category_id: 5
        },        
      ]);
    });
};
