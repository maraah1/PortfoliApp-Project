exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('awards').del()
    .then(function() {
      // Inserts seed entries
      return knex('awards').insert([{
        resume_id: 1,
        award_name: "Top Drawer",
        award_description: "a speed drawing competition",
        year: 2017
      }]);
    });
};