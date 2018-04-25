const knex = require("../db/knex.js")

module.exports = {

  render: (req, res) => {
    res.render('employerRegister')
  },

  postRegistration: (req, res) => {
    knex('users')
      .insert({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        company: req.body.company,
        company_website: req.body.company_website,
        status: req.body.status
      }).then((results) => {
        console.log("employer results:", results)
        res.redirect("/register/employer")
      })
  },

  postLogin: (req, res) => {
    knex('users')
      .where('email', req.body.email)
      .then((results) => {
        let user = results[0]
        if (users.password === req.body.password) {
          req.session.user_id = user.id
          req.session.save(() => {
            res.redirect('/')
          });
        } else {
          res.redirect('/login/employer');
        }
      }).catch(() => {
        res.redirect('/login/employer')
      })
  }

}