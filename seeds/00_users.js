exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'Jordan', email: 'jordan@email.com', code: 'abcde'}
      ]);
    });
};
