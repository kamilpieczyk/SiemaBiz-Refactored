module.exports = username => {
  const date = require('./getDate')();
  return `
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
          ">Welcome ${username}!
          </h1>
        <h2 style="
          color: firebrick;
          text-align: center;
          font-weight: 100;
          margin-top: 0;
          ">nice to have you on board
          </h2>
      </div>
    </header>
    <main style="padding: 0 20%;">
      <div style="text-align: justify; margin-top: 50px; color: gray;">
        <p>Dear ${username} it is nice to have you in our community. <br/>
        Now you're allowed to make operations in our service using your account.<br/>
        Both your email and phone number would be used to remind you about incoming appointments, etc.<br/>
        We won't use them for any other purposes. <br />
        Your account has ben created at ${date} and you're able to delete it at any time you just feel
        you don't want to stay with us - but then We'll be very sorry :(
        </p>
      </div>
      <div style="text-align: justify; margin-top: 40px;">
        <p>Drogi ${username}, cieszymy się że jesteś z nami na pokładzie.<br/>
        Od tej chwili możesz wykonywać wszystkie operacje w naszym serwisie przy użyciu tego konta.<br/>
        Twój adres email i telefon mogą zostać przez nas wykorzystane w celu przypomnienia ci o nadchądzących spotkaniach, itp<br/>
        Masz naszą gwarancję że nie zostaną użyte w żadnym innym celu. <br />
        Twoje konto zostało utworzone dnia ${date} i może zostać przez ciebie usunięte w dowolnym momencie
        kiedy tylko poczujesz, że tego potrzebujesz - ale wtedy będzie nam bardzo przykro :(
        </p>
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
`;
};
