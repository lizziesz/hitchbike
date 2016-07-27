
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('requested_bikes', function(table) {
    table.bigInteger('startDate');
    table.bigInteger('endDate');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.alterTable('requested_bikes', function(table) {
    table.dropColumn('startDate');
    table.dropColumn('endDate');
  });
};
