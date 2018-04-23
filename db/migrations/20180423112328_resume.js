
exports.up = function(knex, Promise) {
  return knex.schema.createTable('resume', (table)=>{
    table.increments();
    table.integer('user_id')
    .notNullable()
    .references('id')
    .inTable('users')
    .onDelete('CASCADE')
    .index();
    table.text('summary');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('resume');
};
