
exports.seed = function(knex) {
  return knex("content").del()
    .then(function () {
      return knex("content").insert([
        // --- Age: 1

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

        // --- Age: 2

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

        // --- Age: 3

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

        // --- Age: 4

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

        // --- Age: 5

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
