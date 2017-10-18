exports.up = function(knex, Promise) {
  knex.schema.createTable('user_secrets', (table) => {
    table.increments();
    table.integer('user_id').references("users.id").onDelete('CASCADE');
    table.integer('secret_id').references("secrets.id").onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('user_secrets');

};
