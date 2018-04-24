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

  edit: (req, res)=>{
  knex('users').where('id', req.params.id)
  .then((data) => {
    knex('resume').where('user_id', req.params.id)
    .then((resume)=>{
      resume = resume[0];
      knex('education').where("education.resume_id", resume.id)
      .then((education)=>{
        res.render('editEducation', {user: data[0], education: education});
      })
      })
    })
  },

  updateEducation: (req, res)=>{
  knex('users').where('id', req.params.id)
  .then((data) => {
    knex('resume').where('user_id', req.params.id)
    .then((resume)=>{
      resume = resume[0];
      knex('education')
      .select('education.school_name', 'education.degree', 'education.start_date', 'education.end_date')
      .where("education.resume_id", resume.id)
      .update({
        school_name: req.params.school_name,
        degree: req.params.degree,
        start_date: req.params.start_date,
        end_date: req.params.end_date
      })
      .then(()=>{
        res.redirect('/resume/:id')
      })
      })
    })
  }

}