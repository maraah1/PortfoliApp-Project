exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('images').del()
    .then(function() {
      // Inserts seed entries
      return knex('images').insert([{
          project_id: 1,
          img_url: 'https://images.pexels.com/photos/721170/pexels-photo-721170.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          caption: 'Colored pencil drawing of colorful tucan.'
        },
        {
          project_id: 2,
          img_url: 'http://image.superchevy.com/f/9422582+w640+h640+q80+re0+cr1+st0/sucp_0403_01_z%2Bgt55_1955_chevy%2Bdrawing.jpg',
          caption: 'Bring back the older models.'
        }
      ]);
    });
};