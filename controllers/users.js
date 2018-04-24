const knex = require("../db/knex.js");
module.exports = {

  bio: (req, res)=>{
    knex('users').where('id', req.params.id)
    .then((data)=>{
      knex('projects').where('projects.user_id', req.params.id)
      .join('images', 'images.project_id', 'projects.id')
      .then((projects)=>{
        res.render('gallery', {user: data[0], projects: projects})
      })
    })
  },

  getRegistration: (req, res) => {
    res.render('userRegister')
  },

  postRegistration: (req, res) => {
    knex('users')
      .insert({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        phone_number: req.body.phone_number,
        password: req.body.password,
        bio: req.body.bio,
        media_type: req.body.media_type,
        city: req.body.city,
        state: req.body.state
      }).then((results) => {
        console.log("user results:", results)
        res.redirect("/register/user")
      })
  },

  getLogin: (req, res) => {
    res.render('userRegister')
  },

  postLogin: (req, res) => {
    knex(users)
      .where('email', req.body.email)
      .then((results) => {
        let users = results[0]
        if (user.password === req.body.password) {
          req.session.user_id = users.id
          req.session.save(() => {
            res.redirect(`/gallery/${users.id}`)
          });
        } else {
          res.redirect('/register/user');
        }
      }).catch(() => {
        res.redirect('/register/user')
      })
  }
}