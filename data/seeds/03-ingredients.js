exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('ingredients').insert([
        { name: 'corn tortillas' },
        { name: 'avocados' },
        { name: 'tomatillas' },
        { name: 'carnitas' },
        { name: 'flour' },
        { name: 'tomatoes' },
        { name: 'miso stock' },
        { name: 'ramen noodles' },
      ]);
    });
};
