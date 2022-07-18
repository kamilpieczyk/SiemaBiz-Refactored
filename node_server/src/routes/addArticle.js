require('dotenv').config();
const Article = require('../../models/articleModel');

module.exports = (req, res) => {
  const body = req.body;
  const file = req.file;
  const date = new Date();
  const sections = JSON.parse(body.sections);
  const today = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

  const article = new Article({
    mainImage: file.filename,
    title: body.title,
    author: body.author,
    date: today,
    introduction: body.introduction,
    sections,
    category: body.category,
  });

  article
    .save()
    .then(() => {
      res.status(200);
      res.json({
        status: 'ok',
        filename: file.filename,
      });
    })
    .catch(err => {
      res.status(500);
      res.json({
        status: 'server_err',
        err,
      });
    });
};
