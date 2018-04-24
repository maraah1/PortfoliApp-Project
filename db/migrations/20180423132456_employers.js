exports.up = function(knex, Promise) {
  return knex.schema.createTable('employer', (table) => {
    table.increments();
    table.string('employer_name');
    table.string('email');
    table.string('password');
    table.string('company');
    table.string('company_website');
    table.string('status')
      .defaultTo('employer');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('employer');
};