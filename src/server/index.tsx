import express from 'express';

import routes from "./routes";

const server = express();
server
  .disable('x-powered-by')
  .use(routes);

export default server;
