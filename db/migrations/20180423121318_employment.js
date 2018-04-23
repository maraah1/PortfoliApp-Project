
exports.up = function(knex, Promise) {
  return knex.schema.createTable('employment', (table)=>{
    table.increments();
    table.integer('resume_id')
    .notNullable()
    .references('id')
    .inTable('resume')
    .onDelete('CASCADE')
    .index();
    table.string('position');
    table.string('location');
    table.text('job_description');
    table.date('job_start');
    table.date('job_end');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('employment');
};
