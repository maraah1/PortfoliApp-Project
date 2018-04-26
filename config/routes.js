const users = require("../controllers/users.js")
const employers = require("../controllers/employers.js")
const project = require("../controllers/project.js")
const resume = require("../controllers/resume.js")
module.exports = function(app) {

  //USERS
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

  app.use(validate);

  //RESUME
  app.get('/resume/:user_id', resume.render);
  app.get('/edit/skill/:id', resume.editSkill);
  app.post('/edit/skill/:id', resume.updateSkill);
  app.get('/add/skill/:resume_id', resume.addSkill);
  app.post('/add/skill/:resume_id', resume.postSkill);

  //GALLERY
  app.get('/gallery/:id', users.bio);
  app.post('/gallery/delete/:id', users.delete)
  app.get('/edit/education/:id', resume.editEd);
  app.post('/edit/education/:id', resume.updateEd);
  app.get('/add/education/:resume_id', resume.addEd);
  app.post('/add/education/:resume_id', resume.postEd);

  //PROJECT ADDER
  app.get('/addproject', project.render);
  app.post('/addproject', project.projectform);


}


const validate = (req, res, next) => {
  req.session.user_id ? next() : res.redirect('/register/user')
}