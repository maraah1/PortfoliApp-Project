
exports.up = function(knex, Promise) {
  return knex.schema.createTable('skills', (table)=>{
    table.increments();
    table.integer('resume_id')
    .notNullable()
    .references('id')
    .inTable('resume')
    .onDelete('CASCADE')
    .index();
    table.string('skill');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('skills');
};
