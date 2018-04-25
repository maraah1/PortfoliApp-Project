exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([{
        first_name: 'Banah',
        last_name: 'Lee',
        email: 'banah@lee.com',
        phone_number: '111-111-1111',
        password: 'test',
        bio: 'I draw cool stuff',
        profile_pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa4BQWoliKEYfbQB4vottTVZoyU4U6-ADAn5tbiR29pdzf9Cgw",
        media_type: 'Drawing',
        city: 'Phoenix',
        state: 'Arizona'
      }]);
    });
};