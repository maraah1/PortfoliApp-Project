
exports.up = function(knex, Promise) {
  return knex.schema.createTable('images', (table)=>{
    table.increments();
    table.integer('project_id')
    .notNullable()
    .references('id')
    .inTable('projects')
    .onDelete('CASCADE')
    .index();
    table.string('img_url');
    table.text('caption');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('images');
};
