
exports.up = function(knex, Promise) {
  return knex.schema.createTable('awards', (table)=>{
    table.increments();
    table.integer('resume_id')
    .notNullable()
    .references('id')
    .inTable('resume')
    .onDelete('CASCADE')
    .index();
    table.string('award_name');
    table.text('award_description');
    table.integer('year');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('awards');
};
