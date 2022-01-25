'use strict';
require('dotenv').config();

const Hapi = require('@hapi/hapi');
const config = require('./config');
const routes = require('./routes');
const models = require('./models');


const init = async () => {

  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
    routes: {
      cors: true,
      validate: {
        failAction: async (request, h, err) => {
          throw err;
        }
      }
    },

    // Merge rest of the config from config file.
    ...config.server,
  });

  // Sync models before registering routes. And when update the model
  await models.sync({ alter: true });

  // Register routes.
  server.route(routes);

  // Finally, start the server.
  await server.start();

  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

  console.log(err);
  process.exit(1);
});

init();
