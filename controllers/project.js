const knex = require("../db/knex.js")

module.exports = {

  render: (req, res) => {
    knex('users').where('id', req.params.id)
      .then((data) => {
        knex('projects').where('projects.user_id', req.params.id)
          .then((projects) => {
            let promArr = []
            for (let i = 0; i < projects.length; i++) {
              promArr.push(knex("images").where("images.project_id", projects[i].id))
            }
            Promise.all(promArr).then((images) => {
              const flatten = list => list.reduce(
                (a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []
              )
              images = flatten(images);

              console.log(projects);
              res.render('project', {
                user: data[0],
                projects: projects,
                images: images
              })
            })
          })
      })
  },

  projectform: (req, res) => {
    knex('projects')
      .where('projects.user_id', req.params.id)
      .returning('id')
      .insert({
        title: req.body.title,
        project_description: req.body.project_description,
        project_year: req.body.project_year,
        status: req.body.status
      })
      .then((proResults) => {
        console.log('new project results:', proResults)
        knex('images')
          .where('images.project_id', proResults[0])
          .insert({
            img_url: req.body.img_url,
            caption: req.body.caption
          })
          .then((imageResults) => {
            res.redirect(`/gallery/${user.id}`)
          })
      })
  }

}