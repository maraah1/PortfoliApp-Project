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
  }
}