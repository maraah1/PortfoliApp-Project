exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function() {
      // Inserts seed entries
      return knex('events').insert([{
        resume_id: 1,
        event_name: "Artist Convention",
        event_description: "An art show for artist showcase their work",
        event_date: "03/06/18"
      }]);
    });
};