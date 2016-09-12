var bcrypt = require('bcrypt');

exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),
    // Inserts seed entries
    knex('users').insert({
        id: 1,
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
        id: 2,
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
        id: 3,
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
        id: 4,
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
        id: 5,
        username: 'casey',
        password: bcrypt.hashSync('Casey', 8),
        email: "caseyisntcool@gmail.com",
        street_address: '600 beer St.',
        city: "milwaukee",
        state: "WI",
        zip_code: '53202',
        is_admin: true
    }),
    knex('users').insert({
        id: 6,
        username: 'madona',
        password: bcrypt.hashSync('Modona', 8),
        email: "madona@gmail.com",
        street_address: '1987 Vogue St',
        city: "detroit",
        state: "ME",
        zip_code: '50212',
        is_admin: false
    }),
    knex('users').insert({
        id: 7,
        username: 'paulyshore',
        password: bcrypt.hashSync('Pauly', 8),
        email: "PaulyShore@gmail.com",
        street_address: '1992 Encino Blvd.',
        city: "santa barbara",
        state: "CA",
        zip_code: '90212',
        is_admin: false
    }),
    knex('users').insert({
        id: 8,
        username: 'andydick',
        password: bcrypt.hashSync('Andy', 8),
        email: "AndyDick@gmail.com",
        street_address: '1234 Weird Rd.',
        city: "spokane",
        state: "WA",
        zip_code: '97890',
        is_admin: false
    }),
    knex('users').insert({
        id: 9,
        username: 'kennyg',
        password: bcrypt.hashSync('Kenny', 8),
        email: "KennyG@gmail.com",
        street_address: '997 Saxaphone St.',
        city: "new orleans",
        state: "LA",
        zip_code: '61234',
        is_admin: false
    }),
    knex('users').insert({
        id: 10,
        username: 'snooki',
        password: bcrypt.hashSync('Brendan', 8),
        email: "Brendan@gmail.com",
        street_address: '1425 Mummy Ave.',
        city: "rand",
        state: "WV",
        zip_code: '31245',
        is_admin: false
    }),
    knex('users').insert({
        id: 11,
        username: 'guyfierri',
        password: bcrypt.hashSync('Guy', 8),
        email: "Guy@gmail.com",
        street_address: '1425 Unlikable Ave.',
        city: "chicago",
        state: "IL",
        zip_code: '50012',
        is_admin: false
    })
  );
};
