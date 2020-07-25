const send = require('../components/sendMail');
const UserModel = require('../../models/userModel');

module.exports = async (req, res) => {
  const { name, email, phone, msg } = req.body;
  const admins = await UserModel.find({ privilege: 225805 });
  const mods = await UserModel.find({ privilege: 225804 });
  const privilegedUsers = [...admins, ...mods];
  console.log(admins);

  for (let user of privilegedUsers) {
    send(
      user.email,
      'contact - siemabiz forum',
      `
        <!DOCTYPE html>
        <body style="font-family: 'Courier New', Courier, monospace;">
          <header style="width: 100%;">
            <div style="margin-left: 45%;">
              <img src="http://localhost:5000/images/logo.png" alt="logo.png" />
            </div>
            <div style="
              background-image: url(http://localhost:5000/images/index-desktop.png);
              background-position: top;
              width: 100%;
              height: 450px;
            ">
              <h1 style="
                color: firebrick;
                padding-top: 150px;
                text-align: center;
                margin-bottom: 0;
                ">New message from siemabiz forum contact form
                </h1>
              <h2 style="
                color: firebrick;
                text-align: center;
                font-weight: 100;
                margin-top: 0;
                ">thank you for your help with siemabiz forum
                </h2>
            </div>
          </header>
          <main style="padding: 0 20%;">
            <div style="text-align: justify; margin-top: 50px; color: gray;">
              <p>message from ${name}</p>
              <p>from adress ${email}</p>
              <p>contact phone: ${phone}</p>
            </div>
            <div style="text-align: justify; margin-top: 40px;">
              <p>${msg}</p>
            </div>
            <div style="margin-top: 40px;">
              <p><strong style="color: firebrick;">Kind regards</strong><br/>
              <strong style="color: firebrick;">SIEMA-BIZ FORUM TEAM</strong></p>
            </div>
          </main>
          <footer style="margin: 50px 10% 0 10%">
            <p style="color: lightslategray; text-align: justify;">
              this email was generated automatically by siemabiz.co.uk auto response system. <br /> Please do not respond for this message because any member of our team won't be able to send you any feedback.
            </p>
            <p style="color: lightslategray; text-align: justify;">
              Ta wiadomość została wygenerowana automatycznie przez system automatycznego rozsyłania wiadomości email. <br />
              Prosimy nie odpowiadać na tę wiadomość, ponieważ żaden członek naszego zrspołu nie bedzie w stanie na nią odpowiedzieć.
            </p>
            <p style="color: firebrick; text-align: center;">
              find us at <a href="https://siemabiz.co.uk/" style="color: firebrick; text-decoration: underline;">siemabiz.co.uk</a>
            </p>
          </footer>
        </body>
      </html>
    `
    );
  }
  res.status(200).json({
    status: 'ok',
  });
};
