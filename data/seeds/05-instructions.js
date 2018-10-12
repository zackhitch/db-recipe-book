exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('instructions')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('instructions').insert([
        { recipe_id: 1, step: 1, description: 'cook carnitas' },
        { recipe_id: 1, step: 2, description: 'broil tortillas' },
        { recipe_id: 1, step: 3, description: 'assemble and eat!' },
        { recipe_id: 2, step: 1, description: 'Make dough' },
        { recipe_id: 2, step: 2, description: 'Make tomato sauce' },
        {
          recipe_id: 2,
          step: 3,
          description: 'Top with cheese, toppings, eat',
        },
      ]);
    });
};
