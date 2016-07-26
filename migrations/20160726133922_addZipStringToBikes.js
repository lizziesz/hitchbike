
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('bikes', function(table) {
    table.string('zip_code');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.alterTable('bikes', function(table) {
    table.dropColumn('zip_code');
  });
};
