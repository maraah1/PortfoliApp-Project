const knex = require("../db/knex.js");
module.exports = {

render: (req, res)=>{
  knex('users').where('id', req.params.id)
  .then((data) => {
    knex('resume').where('user_id', req.params.id)
    .then((resume)=>{
      resume = resume[0];
      knex('education').where("education.resume_id", resume.id)
      .then((education)=>{
        knex('employment').where("employment.resume_id", resume.id)
        .then((employment)=>{
          knex('skills').where("skills.resume_id", resume.id)
          .then((skills)=>{
            knex('events').where('events.resume_id', resume.id)
            .then((events)=>{
              knex('awards').where('awards.resume_id', resume.id)
              .then((awards)=>{
                res.render('resume', {user: data[0], resume: resume, education: education, employment: employment, skills: skills, events: events, awards: awards})
              })
            })
          })
        })
      })
    })
  })
  },

  editSkill:(req, res)=>{
    knex('resume').where('user_id', req.params.id)
    .then((resume)=>{
      resume = resume[0];
      knex('skills').where("skills.resume_id", resume.id)
      .then((skills)=>{
        res.render('editSkill', {skills: skills});
      })
    })
  },

  updateSkill: (req, res)=>{
    knex('resume').where('user_id', req.params.id)
    .then((resume)=>{
      resume = resume[0];
      knex('skills')
      .select('skills.skill')
      .where("skills.resume_id", resume.id)
      .update({
        skill: req.body.skill
      })
      .then((skills)=>{
        res.redirect('/resume/:id')
      })
    })
  },

  addSkill: (req, res)=>{
    knex('resume').where('user_id', req.params.id)
    .then((resume)=>{
      resume = resume[0];
      knex('skills').where("skills.resume_id", resume.id)
      .then((skills)=>{
        res.render('addSkill', {skills: skills});
      })
    })
  },

  postSkill: (req, res)=>{

  }


}