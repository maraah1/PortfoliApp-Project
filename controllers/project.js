const knex = require("../db/knex.js")

module.exports = {

  render: (req, res) => {
    knex('projects').then((results) => {
      res.render('project', {
        project: results
      });
    })
  },

  projectform: (req, res) => {
    knex('projects')
      .insert({
        user_id: req.session.user_id,
        title: req.body.title,
        project_description: req.body.project_description,
        project_year: req.body.project_year,
        status: req.body.status
      }, "*")
      .then((proResults) => {
        console.log('new project results:', proResults)
        knex('images')
          .insert({
            project_id: proResults[0].id,
            img_url: req.body.img_url,
            caption: req.body.caption
          })
          .then((imageResults) => {
            res.redirect(`/gallery/${req.session.user_id}`)
          })
      })
  }

}