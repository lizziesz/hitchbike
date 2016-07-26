
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('users', function(table) {
    table.string('zip_code');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.alterTable('users', function(table) {
    table.dropColumn('zip_code');
  });
};
