
exports.seed = function(knex) {
  return knex("content").del()
    .then(function () {
      return knex("content").insert([
        // Social and Emotional
        {
          content: "Wants to please friends",
          age_id: 5,
          category_id: 1
        },
        {
          content: "Wants to be like friends",
          age_id: 5,
          category_id: 1
        },
        {
          content: "More likely to agree with rules",
          age_id: 5,
          category_id: 1
        },
        {
          content: "Likes to sing, dance, and act",
          age_id: 5,
          category_id: 1
        },
        {
          content: "Is aware of gender",
          age_id: 5,
          category_id: 1
        },
        {
          content: "Can tell what’s real and what’s make-believe",
          age_id: 5,
          category_id: 1
        },
        {
          content: "Shows more independence (for example, may visit a next-door neighbor by themselves [adult supervision is still needed])",
          age_id: 5,
          category_id: 1
        },
        {
          content: "Is sometimes demanding and sometimes very cooperative",
          age_id: 5,
          category_id: 1
        },

        // Language and Communication
        {
          content: "Speaks very clearly",
          age_id: 5,
          category_id: 2
        },
        {
          content: "Tells a simple story using full sentences",
          age_id: 5,
          category_id: 2
        },
        {
          content: "Uses future tense; for example, 'Grandma will be here.'",
          age_id: 5,
          category_id: 2
        },
        {
          content: "Says name and address",
          age_id: 5,
          category_id: 2
        },

        // Cognitive
        {
          content: "Counts 10 or more things",
          age_id: 5,
          category_id: 3
        },
        {
          content: "Can draw a person with at least 6 body parts",
          age_id: 5,
          category_id: 3
        },
        {
          content: "Can print some letters or numbers",
          age_id: 5,
          category_id: 3
        },
        {
          content: "Copies a triangle and other geometric shapes",
          age_id: 5,
          category_id: 3
        },
        {
          content: "Knows about things used every day, like money and food",
          age_id: 5,
          category_id: 3
        },

        // Movement and Physical Development
        {
          content: "Stands on one foot for 10 seconds or longer",
          age_id: 5,
          category_id: 4
        },
        {
          content: "Hops; may be able to skip",
          age_id: 5,
          category_id: 4
        },
        {
          content: "Can do a somersault",
          age_id: 5,
          category_id: 4
        },
        {
          content: "Uses a fork and spoon and sometimes a table knife",
          age_id: 5,
          category_id: 4
        },
        {
          content: "Can use the toilet on her own",
          age_id: 5,
          category_id: 4
        },
        {
          content: "Swings and climbs",
          age_id: 5,
          category_id: 4
        },

        // Help for parents
        {
          content: "Doesn’t show a wide range of emotions",
          age_id: 5,
          category_id: 5
        },
        {
          content: "Shows extreme behavior (unusually fearful, aggressive, shy or sad)",
          age_id: 5,
          category_id: 5
        },
        {
          content: "Unusually withdrawn and not active",
          age_id: 5,
          category_id: 5
        },
        {
          content: "Is easily distracted, has trouble focusing on one activity for more than 5 minutes",
          age_id: 5,
          category_id: 5
        },
        {
          content: "Doesn’t respond to people, or responds only superficially",
          age_id: 5,
          category_id: 5
        },
        {
          content: "Can’t tell what’s real and what’s make-believe",
          age_id: 5,
          category_id: 5
        },
        {
          content: "Doesn’t play a variety of games and activities",
          age_id: 5,
          category_id: 5
        },
        {
          content: "Can’t give first and last name",
          age_id: 5,
          category_id: 5
        },
        {
          content: "Doesn’t use plurals or past tense properly",
          age_id: 5,
          category_id: 5
        },  
        {
          content: "Doesn’t talk about daily activities or experiences",
          age_id: 5,
          category_id: 5
        },
        {
          content: "Doesn’t draw pictures",
          age_id: 5,
          category_id: 5
        }, 
        {
          content: "Can’t brush teeth, wash and dry hands, or get undressed without help",
          age_id: 5,
          category_id: 5
        },
        {
          content: "Loses skills he/she once had",
          age_id: 5,
          category_id: 5
        },        
      ]);
    });
};
