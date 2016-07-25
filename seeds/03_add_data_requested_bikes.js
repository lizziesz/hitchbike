exports.seed = function(knex, Promise) {
  return Promise.join(
    // Inserts seed entries
    knex('requested_bikes').insert({
        requestor_id: 2,
        owner_id: 5,
        bike_id: 1,
        request_time_stamp: "2016-07-04T05:49:33.190Z",
        borrow_start_time: '2016-09-04T05:49:33.190Z',
        borrow_end_time: '2016-09-05T05:49:33.190Z'
    }),
    knex('requested_bikes').insert({
        requestor_id: 1,
        owner_id: 4,
        bike_id: 2,
        request_time_stamp: "2016-07-04T05:49:33.190Z",
        borrow_start_time: '2016-08-04T05:49:33.190Z"',
        borrow_end_time: "2016-08-05T05:49:33.190Z"
    })
  );
};