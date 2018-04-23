
exports.up = function(knex, Promise) {
  return knex.schema.createTable('education', (table)=>{
    table.increments();
    table.integer('resume_id')
    .notNullable()
    .references('id')
    .inTable('resume')
    .onDelete('CASCADE')
    .index();
    table.string('school_name');
    table.string('degree');
    table.date('start_date');
    table.date('end_date');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('education');
};
