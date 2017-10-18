
exports.up = function(knex, Promise) {
  knex.schema.createTable('secrets', (table) => {
    table.increments();
    table.text('secret');
  });
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('secrets');
  
};
