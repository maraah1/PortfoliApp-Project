exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('employer').del()
    .then(function() {
      // Inserts seed entries
      return knex('employer').insert([{
        employee_name: "Sandy",
        email: "sandy@cheeks.com",
        password: "asdf",
        company: "Cartoon Productions",
        company_website: "http://www.cartoon-media.eu/"
      }]);
    });
};