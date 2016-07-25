
exports.up = function(knex, Promise) {
  return knex.schema.createTable('bikes', function(table) {
    table.increments('id').primary();
    table.integer('owner_id').notNullable();
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.string('picture').notNullable();
    table.string('type').notNullable();
    table.string('condition').notNullable();
    table.integer('price_day').notNullable();
    table.integer('price_hour');
    table.boolean('is_available').defaultTo(true);
    table.boolean('is_borrowed').defaultTo(false);
    table.string('instructions').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.scema.dropTable('bikes');
};
