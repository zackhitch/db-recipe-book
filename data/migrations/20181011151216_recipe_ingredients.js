exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe_ingredients', function(tbl) {
    tbl.increments();

    tbl
      .integer('recipe_id')
      .unsigned()
      .references('id')
      .inTable('recipes');

    tbl
      .integer('ingredients_id')
      .unsigned()
      .references('id')
      .inTable('ingredients');

    tbl.float('quantity');

    tbl.string('units', 16);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipe_ingredients');
};
