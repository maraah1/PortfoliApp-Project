const knex = require("../db/knex.js");
module.exports = {

  index: (req, res) => {
  knex('users').then((data) => {
    if(req.session.user_id) {
        knex('users').where('id', req.session.user_id).then((loggedUser) => {
          console.log("loggedUser:", loggedUser[0].first_name)
        res.render('index', {
          users: data,
          loggedUser: loggedUser
        });
      })
  } else {
      res.render('index', {
        users: data,
        loggedUser: false
      })
    }
  })
},

  bio: (req, res) => {
    console.log(req.params);
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
              projects.map((proj) => {
                proj.images = images.filter(img => img.project_id == proj.id);
              })
              if (req.session.user_id) {
                knex("users").where("id", req.session.user_id).then((loggedUser) => {
                  res.render('gallery', {
                    user: data[0],
                    projects: projects,
                    images: images,
                    loggedUser: loggedUser[0]
                  })
                })
              } else {
                res.render('gallery', {
                  user: data[0],
                  projects: projects,
                  images: images,
                  loggedUser: false
                })
              }
            })
          })
      })
  },

  render: (req, res) => {
    knex('users').then((results) => {
      res.render('userRegister', {
        users: results
      })
    })
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
        state: req.body.state,
        status: req.body.status
      }).then((results) => {
        res.redirect("/register/user")
      })
  },

  postLogin: (req, res) => {
    knex('users')
      .where('email', req.body.email)
      .then((results) => {
        let user = results[0]
        if (user.password === req.body.password) {
          req.session.user_id = user.id
          req.session.save(() => {
            res.redirect(`/gallery/${req.session.user_id}`)
          });
        } else {
          res.redirect('/register/user');
        }
      }).catch(() => {
        res.redirect('/register/user')
      })
  },

  delete: (req, res) => {
    knex('projects')
      .where('id', req.params.id)
      .delete()
      .then((proResults) => {
        console.log('deleted results:', proResults)
        res.redirect(`/gallery/${req.session.user_id}`)
      })
  },
  logout: (req, res) => {
    req.session.destroy();
    res.redirect("/");
  }


}
