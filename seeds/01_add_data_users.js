var bcrypt = require('bcrypt');

exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),
    // Inserts seed entries
    knex('users').insert({
        username: 'andrew',
        password: bcrypt.hashSync('test', 8),
        email: "westaa@colorado.edu",
        street_address: '220 Brightwood St.',
        city: "san antonio",
        state: "TX",
        zip_code: '78209',
        is_admin: true
    }),
    knex('users').insert({
        username: 'jeffrey',
        password: bcrypt.hashSync('test', 8),
        email: "medders.jeffrey@gmail.com",
        street_address: '2500 Pine St.',
        city: "boulder",
        state: "CO",
        zip_code: '80302',
        is_admin: true
    }),
    knex('users').insert({
        username: 'paul',
        password: bcrypt.hashSync('password', 8),
        email: "made.up@gmail.com",
        street_address: '4500 North St.',
        city: "philadelphia",
        state: "PA",
        zip_code: '19019',
        is_admin: true
    }),
    knex('users').insert({
        username: 'lizzie',
        password: bcrypt.hashSync('Lizzie', 8),
        email: "dont.know@gmail.com",
        street_address: '405 Robinhood St.',
        city: "lafayette",
        state: "CO",
        zip_code: '80026',
        is_admin: true
    }),
    knex('users').insert({
        username: 'casey',
        password: bcrypt.hashSync('Casey', 8),
        email: "caseyisnotcool@gmail.com",
        street_address: '609 Beer St.',
        city: "milwaukee",
        state: "WI",
        zip_code: '53202',
        is_admin: true
    })
  );
};
