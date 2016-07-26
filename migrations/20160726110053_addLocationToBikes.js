
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('bikes', function(table) {
    table.string('street_address').notNullable();
    table.string('city').notNullable();
    table.string('state').notNullable();
    table.integer('zip_code').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.alterTable('bikes', function(table) {
    table.dropColumn('street_address');
    table.dropColumn('city');
    table.dropColumn('state');
    table.dropColumn('zip_code');
  });
};
