
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('employment').del()
    .then(function () {
      // Inserts seed entries
      return knex('employment').insert([
        {resume_id: 1, position: 'Illustrator', location: 'Chevy', job_description: 'I designed cars', job_start: '01/02/2015', job_end: '01/02/2018'}
      ]);
    });
};
