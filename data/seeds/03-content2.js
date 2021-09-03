
exports.seed = function(knex) {
  return knex("content").del()
    .then(function () {
      return knex("content").insert([
        // Social and Emotional
        {
          content: "Copies others, especially adults and older children",
          age_id: 2,
          category_id: 1
        },
        {
          content: "Gets excited when with other children",
          age_id: 2,
          category_id: 1
        },
        {
          content: "Shows more and more independence",
          age_id: 2,
          category_id: 1
        },
        {
          content: "Shows defiant behavior (doing what he/she has been told not to)",
          age_id: 2,
          category_id: 1
        },
        {
          content: "Plays mainly beside other children, but is beginning to include other children, such as in chase games",
          age_id: 2,
          category_id: 1
        },

        // Language and Communication
        {
          content: "Points to things or pictures when they are named",
          age_id: 2,
          category_id: 2
        },
        {
          content: "Knows names of familiar people and body parts",
          age_id: 2,
          category_id: 2
        },
        {
          content: "Says sentences with 2 to 4 words",
          age_id: 2,
          category_id: 2
        },
        {
          content: "Follows simple instructions",
          age_id: 2,
          category_id: 2
        },
        {
          content: "Repeats words overheard in conversation",
          age_id: 2,
          category_id: 2
        },
        {
          content: "Points to things in a book",
          age_id: 2,
          category_id: 2
        },

        // Cognitive
        {
          content: "Finds things even when hidden under two or three covers",
          age_id: 2,
          category_id: 3
        },
        {
          content: "Begins to sort shapes and colors",
          age_id: 2,
          category_id: 3
        },
        {
          content: "Completes sentences and rhymes in familiar books",
          age_id: 2,
          category_id: 3
        },
        {
          content: "Plays simple make-believe games",
          age_id: 2,
          category_id: 3
        },
        {
          content: "Builds towers of 4 or more blocks",
          age_id: 2,
          category_id: 3
        },
        {
          content: "Might use one hand more than the other",
          age_id: 2,
          category_id: 3
        },
        {
          content: "Follows two-step instructions such as 'Pick up your shoes and put them in the closet.'",
          age_id: 2,
          category_id: 3
        },
        {
          content: "Names items in a picture book such as a cat, bird, or dog",
          age_id: 2,
          category_id: 3
        },

        // Movement and Physical Development
        {
          content: "Stands on tiptoe",
          age_id: 2,
          category_id: 4
        },
        {
          content: "Kicks a ball",
          age_id: 2,
          category_id: 4
        },
        {
          content: "Begins to run",
          age_id: 2,
          category_id: 4
        },
        {
          content: "Climbs onto and down from furniture without help",
          age_id: 2,
          category_id: 4
        },
        {
          content: "Walks up and down stairs holding on",
          age_id: 2,
          category_id: 4
        },
        {
          content: "Throws ball overhand",
          age_id: 2,
          category_id: 4
        },
        {
          content: "Makes or copies straight lines and circles",
          age_id: 2,
          category_id: 4
        },

        // Help for parents
        {
          content: "Doesn’t use 2-word phrases (for example, 'drink milk')",
          age_id: 2,
          category_id: 5
        },
        {
          content: "Doesn’t know what to do with common things, like a brush, phone, fork, spoon",
          age_id: 2,
          category_id: 5
        },
        {
          content: "Doesn’t copy actions and words",
          age_id: 2,
          category_id: 5
        },
        {
          content: "Doesn’t follow simple instructions",
          age_id: 2,
          category_id: 5
        },
        {
          content: "Doesn’t walk steadily",
          age_id: 2,
          category_id: 5
        },
        {
          content: "Loses skills he/she once had",
          age_id: 2,
          category_id: 5
        },
      ]);
    });
};
