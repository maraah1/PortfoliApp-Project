
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table)=>{
    table.increments();
    table.string('first_name');
    table.string('last_name');
    table.string('email');
    table.string('phone_number');
    table.string('password');
    table.text('bio');
    table.string('media_type');
    table.string('city');
    table.string('state');
    table.string('status')
      .defaultTo('user');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
