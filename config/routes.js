//Update the name of the controller below and rename the file.
const users = require("../controllers/users.js")
module.exports = function(app){

  //USERS
  app.get('/gallery/:id', users.bio)

  //PROJECTS
}