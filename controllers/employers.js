const knex = require("../db/knex.js")

module.exports = {

  render: (req, res) => {
    res.render('employerRegister')
  },

  postRegistration: (req, res) => {
    knex('employer')
      .insert({
        employer_name: req.body.employer_name,
        email: req.body.email,
        password: req.body.password,
        company: req.body.company,
        company_website: req.body.company_website
      }).then((results) => {
        console.log("employee results:", results)
        res.redirect("/register/employer")
      })
  },

  postLogin: (req, res) => {
    knex('employer')
      .where('email', req.body.email)
      .then((results) => {
        let employer = results[0]
        if (employer.password === req.body.password) {
          req.session.employer_id = employer.id
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