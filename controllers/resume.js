const knex = require("../db/knex.js");
module.exports = {

render: (req, res)=>{
  knex('users').where('id', req.session.user_id)
  .then((data) => {
    knex('resume').where('user_id', req.session.user_id)
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
        res.redirect('/resume')
      })
    })
  },

  addSkill: (req, res)=>{
    knex('resume').where('user_id', req.session.user_id)
    .then((resume)=>{
      resume = resume[0];
      knex('skills').where("skills.resume_id", resume.id)
      .then((skills)=>{
        res.render('addSkill', {resume, skills: skills});
      })
    })
  },

  postSkill: (req, res)=>{
    knex("skills").insert({
      skill:req.body.skill,
      resume_id: req.params.resume_id
    }).then(()=>{
      res.redirect(`/add/skill/${req.params.resume_id}`)
    })
  },

  editEd: (req, res)=>{
    knex('resume').where('user_id', req.session.user_id)
    .then((resume)=>{
      resume = resume[0];
      knex('education').where("education.resume_id", resume.id)
      .then((education)=>{
        res.render('editEd', {education: education})
      })
    })
  },

  updateEd: (req, res)=>{
    knex('resume').where('user_id', req.session.user_id)
    .then((resume)=>{
      resume = resume[0];
      knex('education')
      .select('education.school_name', 'education.degree', 'education.start_date', 'education_end_date')
      .where('education.resume_id', resume.id)
      .update({
        school_name: req.body.school_name,
        degree: req.body.degree,
        start_date: req.body.start_date,
        end_date: req.body.end_date
      })
      .then((skills)=>{
        res.redirect('/resume')
      })
    })
  },

  addEd: (req, res)=>{
    knex('resume').where('user_id', req.session.user_id)
    .then((resume)=>{
      resume = resume[0];
      knex('education').where("education.resume_id", resume.id)
      .then((education)=>{
        res.render('addEd', {resume, education: education});
      })
    })
  },

  postEd: (req, res)=>{

  }


}