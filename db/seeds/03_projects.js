
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {user_id: 1, resume_id: 1, title: 'Tucan', project_description: 'I love the tropics and was inspired by the colorful birds.', project_year: 2017},
        {user_id: 1, resume_id: 1, title: 'Car', project_description: 'A mock up design I made for Chevy', project_year: 2017}
      ]);
    });
};
