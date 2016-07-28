
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('requested_bikes', function(table) {
    table.string('message');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.alterTable('requested_bikes', function(table) {
    table.dropColumn('message');
  });
};
