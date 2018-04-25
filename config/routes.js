const users = require("../controllers/users.js")
const employers = require("../controllers/employers.js")
const project = require("../controllers/project.js")
const resume = require("../controllers/resume.js")
module.exports = function(app) {

  //USERS
  app.get('/gallery/:id', users.bio);
  app.get('/', users.index);
  //PROJECTS

  //USER LOGIN/REGISTRATION
  app.get('/register/user', users.render);
  app.post('/register/user', users.postRegistration);
  app.post('/login/user', users.postLogin);

  //EMPLOYER LOGIN/REGISTRATION
  app.get('/register/employer', employers.render);
  app.post('/register/employer', employers.postRegistration);
  app.post('/login/employer', employers.postLogin);

  //RESUME
  app.get('/resume/:id', resume.render);
  app.get('/edit/education/:id', resume.edit);
  app.post('/edit/education/:id', resume.updateEducation);

  app.use(validate);

  //PROJECT ADDER
  app.get('/addproject', project.render);
  app.post('/addproject', project.projectform);


}


const validate = (req, res, next) => {
  req.session.user_id ? next() : res.redirect('/register/user')
}