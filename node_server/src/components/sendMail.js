const mailer = require('nodemailer');
const { createTransport } = mailer;

module.exports = (to, subject, html) => {
  const transport = createTransport({
    service: 'gmail',
    auth: {
      user: 'siemabizforum@gmail.com',
      pass: 'Aez@2478144',
    },
  });

  const options = {
    from: 'SiemaBiz Forum <siemabizforum@gmail.com>',
    to,
    subject,
    html,
  };

  transport.sendMail(options, (err, info) => {
    if (err) console.error(err);
    else console.log(`email send succesfully`, info);
  });
};
