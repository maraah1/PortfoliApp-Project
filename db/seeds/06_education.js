exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('education').del()
    .then(function() {
      // Inserts seed entries
      return knex('education').insert([{
        resume_id: 1,
        school_name: "Harvard",
        degree: "Arts Degree",
        start_date: "10/08/14",
        end_date: "7/4/18"
      }]);
    });
};