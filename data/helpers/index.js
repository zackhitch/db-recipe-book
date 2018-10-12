const knex = require('knex');

const knexConfig = require('../../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
  getDishes() {
    return db('dishes');
  },

  addDish(dish) {
    return db('dishes')
      .insert(dish)
      .into('dishes');
  },

  getDish(id) {
    return db('dishes')
      .select({
        dish_name: 'dishes.name',
        recipe_name: 'recipes.name',
      })
      .join('recipes', 'recipes.dish_id', 'dishes.id')
      .where('dishes.id', id);
  },

  getRecipes() {
    return db('recipes')
      .select({
        recipe: 'recipes.name',
        dish: 'dishes.name',
      })
      .join('dishes', 'dishes.id', 'recipes.dish_id');
  },

  addRecipe(recipe) {
    return db('recipes').insert(recipe);
  },
};
