// const knex = require("../db/knex.js")
//
// module.exports = {
//
//   render: (req, res) => {
//     knex('projects')
//       .where('user_id', req.params.id)
//       .then((projectResults) => {
//         knex('images')
//           .where('project_id', req.params.id)
//           .join('projects', 'images.project_id', 'projects.id')
//           .then((results) => {
//             res.render('project', {
//               project: projectResults,
//               images: results
//             })
//           })
//       })
//   }

// form: (req, res) => {
//   knex('projects')
//     .where('user_id', req.params.id)
//     .then((projectResults) => {
//       knex('images')
//         .where('project_id', req.params.id)
//         .join('projects', 'images.project_id', 'projects.id')
//         .then((results) => {
//           res.render('project', {
//             project: projectResults,
//             images: results
//           })
//         })
//     })
// }


// }