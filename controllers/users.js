const knex = require("../db/knex.js");

module.exports = {
  bio: (req, res)=>{
    knex('users')
      .where('id', req.params.id)
      .then((data)=>{
        res.render('gallery', {user: data[0]})
      })
  }
}