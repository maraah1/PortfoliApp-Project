
exports.up = function(knex, Promise) {
  return knex.schema.createTable('events', (table)=>{
    table.increments();
    table.integer('resume_id')
    .notNullable()
    .references('id')
    .inTable('resume')
    .onDelete('CASCADE')
    .index();
    table.string('event_name');
    table.text('event_description');
    table.date('event_date');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('events');
};
