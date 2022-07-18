const next = require('next');
const Server = require('./node_server/src/index');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()

  .then(() => {
    new Server(handle);
  })

  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
