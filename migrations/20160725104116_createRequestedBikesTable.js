
exports.up = function(knex, Promise) {
  return knex.schema.createTable("requested_bikes", function(table) {
    table.increments('id').primary();
    table.integer('requestor_id');
    table.integer('owner_id');
    table.integer('bike_id');
    table.string('request_time_stamp');
    table.string('status').defaultTo('pending');
    table.string('borrow_start_time');
    table.string('borrow_end_time');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("requested_bikes");
};
