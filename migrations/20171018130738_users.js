exports.up = function(knex, Promise) {
  knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('username');
    table.string('email');
    table.string('code');
  });
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('users');
  
};
