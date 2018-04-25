const users = require("../controllers/users.js")
const employers = require("../controllers/employers.js")
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
  app.get('/edit/skill/:id', resume.editSkill);
  app.post('/edit/skill/:id', resume.updateSkill);
  app.get('/add/skill/:id', resume.addSkill);
  app.post('/add/skill/:id', resume.postSkill);


  app.use(validate);

}


const validate = (req, res, next) => {
  req.session.user_id ? next() : res.redirect('/register/user')
}