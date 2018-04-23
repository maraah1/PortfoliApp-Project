exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('skills').del()
    .then(function() {
      // Inserts seed entries
      return knex('skills').insert([{
        resume_id: 1,
        skill: "detailed colored pencil drawings"
      }]);
    });
};