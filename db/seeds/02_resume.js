
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('resume').del()
    .then(function () {
      // Inserts seed entries
      return knex('resume').insert([
        {user_id: 1, summary: 'I am a 17 year old male with a bachelors degree in fine arts. I specialize in detailed colored pencil drawings, large and small scale.'}
      ]);
    });
};
