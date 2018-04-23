
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {first_name: 1, colName: 'rowValue1'},
        {last_name: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}
      ]);
    });
};
