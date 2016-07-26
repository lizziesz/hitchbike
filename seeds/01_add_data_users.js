var bcrypt = require('bcrypt');

exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),
    // Inserts seed entries
    knex('users').insert({
        id: 1,
        username: 'Andrew',
        password: bcrypt.hashSync('test', 8),
        email: "westaa@colorado.edu",
        street_address: '220 Brightwood St.',
        city: "San Antonio",
        state: "TX",
        zip_code: 78209,
        is_admin: true
    }),
    knex('users').insert({
        id: 2,
        username: 'Jeffrey',
        password: bcrypt.hashSync('test', 8),
        email: "medders.jeffrey@gmail.com",
        street_address: '2500 Pine St.',
        city: "Boulder",
        state: "CO",
        zip_code: 80302,
        is_admin: true
    }),
    knex('users').insert({
        id: 3,
        username: 'Paul',
        password: bcrypt.hashSync('password', 8),
        email: "made.up@gmail.com",
        street_address: '4500 North St.',
        city: "Philadelphia",
        state: "PA",
        zip_code: 19019,
        is_admin: true
    }),
    knex('users').insert({
        id: 4,
        username: 'Lizzie',
        password: bcrypt.hashSync('Lizzie', 8),
        email: "dont.know@gmail.com",
        street_address: '405 Robinhood St.',
        city: "Lafayette",
        state: "CO",
        zip_code: 80026,
        is_admin: true
    }),
    knex('users').insert({
        id: 5,
        username: 'Casey',
        password: bcrypt.hashSync('Casey', 8),
        email: "caseyisnotcool@gmail.com",
        street_address: '609 Beer St.',
        city: "Milwaukee",
        state: "WI",
        zip_code: 53202,
        is_admin: true
    })
  );
};
