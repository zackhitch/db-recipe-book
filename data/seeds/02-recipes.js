exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('recipes').insert([
        { name: 'softshell tacos', dish_id: 1 },
        { name: 'deep dish pizza', dish_id: 2 },
        { name: 'miso ramen', dish_id: 3 },
      ]);
    });
};
