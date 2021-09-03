
exports.seed = function(knex) {
  return knex("content").del()
    .then(function () {
      return knex("content").insert([
        // Social and Emotional
        {
          content: "Enjoys doing new things",
          age_id: 4,
          category_id: 1
        },
        {
          content: "Plays 'Mom' and 'Dad'",
          age_id: 4,
          category_id: 1
        },
        {
          content: "Is more and more creative with make-believe play",
          age_id: 4,
          category_id: 1
        },
        {
          content: "Would rather play with other children than by himself",
          age_id: 4,
          category_id: 1
        },
        {
          content: "Cooperates with other children",
          age_id: 4,
          category_id: 1
        },
        {
          content: "Often can’t tell what’s real and what’s make-believe",
          age_id: 4,
          category_id: 1
        },
        {
          content: "Talks about what he/she likes and what he/she is interested in",
          age_id: 4,
          category_id: 1
        },

        // Language and Communication
        {
          content: "Knows some basic rules of grammar, such as correctly using 'he' and 'she'",
          age_id: 4,
          category_id: 2
        },
        {
          content: "Sings a song or says a poem from memory such as the 'Itsy Bitsy Spider' or the 'Wheels on the Bus'",
          age_id: 4,
          category_id: 2
        },
        {
          content: "Tells stories",
          age_id: 4,
          category_id: 2
        },
        {
          content: "Can say first and last name",
          age_id: 4,
          category_id: 2
        },

        // Cognitive
        {
          content: "Names some colors and some numbers",
          age_id: 4,
          category_id: 3
        },
        {
          content: "Understands the idea of counting",
          age_id: 4,
          category_id: 3
        },
        {
          content: "Starts to understand time",
          age_id: 4,
          category_id: 3
        },
        {
          content: "Remembers parts of a story",
          age_id: 4,
          category_id: 3
        },
        {
          content: "Understands the idea of 'same' and 'different'",
          age_id: 4,
          category_id: 3
        },
        {
          content: "Draws a person with 2 to 4 body parts",
          age_id: 4,
          category_id: 3
        },
        {
          content: "Uses scissors",
          age_id: 4,
          category_id: 3
        },
        {
          content: "Starts to copy some capital letters",
          age_id: 4,
          category_id: 3
        },
        {
          content: "Plays board or card games",
          age_id: 4,
          category_id: 3
        },
        {
          content: "Tells you what he thinks is going to happen next in a book",
          age_id: 4,
          category_id: 3
        },

        // Movement and Physical Development
        {
          content: "Hops and stands on one foot up to 2 seconds",
          age_id: 4,
          category_id: 4
        },
        {
          content: "Catches a bounced ball most of the time",
          age_id: 4,
          category_id: 4
        },
        {
          content: "Pours, cuts with supervision, and mashes own food",
          age_id: 4,
          category_id: 4
        },

        // Help for parents
        {
          content: "Can’t jump in place",
          age_id: 4,
          category_id: 5
        },
        {
          content: "Has trouble scribbling",
          age_id: 4,
          category_id: 5
        },
        {
          content: "Shows no interest in interactive games or make-believe",
          age_id: 4,
          category_id: 5
        },
        {
          content: "Ignores other children or doesn’t respond to people outside the family",
          age_id: 4,
          category_id: 5
        },
        {
          content: "Resists dressing, sleeping, and using the toilet",
          age_id: 4,
          category_id: 5
        },
        {
          content: "Can’t retell a favorite story",
          age_id: 4,
          category_id: 5
        },
        {
          content: "Doesn’t follow 3-part commands",
          age_id: 4,
          category_id: 5
        },
        {
          content: "Doesn’t understand 'same' and 'different'",
          age_id: 4,
          category_id: 5
        },
        {
          content: "Doesn’t use 'me' and 'you' correctly",
          age_id: 4,
          category_id: 5
        },  
        {
          content: "Speaks unclearly",
          age_id: 4,
          category_id: 5
        },
        {
          content: "Loses skills he/she once had",
          age_id: 4,
          category_id: 5
        },        
      ]);
    });
};
