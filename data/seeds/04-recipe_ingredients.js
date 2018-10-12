exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        { recipe_id: 1, ingredients_id: 1, quantity: 2, units: 'oz' },
        {
          recipe_id: 1,
          ingredients_id: 2,
          quantity: 1,
          units: 'package',
        },
        { recipe_id: 1, ingredients_id: 3, quantity: 1, units: 'lbs' },
        { recipe_id: 2, ingredients_id: 3, quantity: 2, units: 'tsp' },
        {
          recipe_id: 2,
          ingredients_id: 4,
          quantity: 3,
          units: 'cups',
        },
        { recipe_id: 2, ingredients_id: 5, quantity: 2, units: 'tbsp' },
      ]);
    });
};
