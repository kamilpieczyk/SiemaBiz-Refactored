const mailer = require('nodemailer');
const { createTransport } = mailer;

module.exports = (to, subject, html) => {
  const transport = createTransport({
    host: 'smtpout.europe.secureserver.net',
    port: 465,
    secure: true,
    auth: {
      user: 'username',
      pass: 'password',
    },
  });

  const options = {
    from: 'SiemaBiz Forum <noreplay@siema-biz-forum.com>',
    to,
    subject,
    html,
  };

  transport.sendMail(options, (err, info) => {
    if (err) console.error(err);
    else console.log(`email send succesfully`, info);
  });
};
