import http from 'http';

import config from 'config';
import logger from 'utils/logger';

// this require is necessary for server HMR to recover from error
// tslint:disable-next-line:no-var-requires
let app = require('./server').default;

const server = http.createServer(app);
const port = config.port;

server.listen(port, () => {
  logger.info(`⚡️ Started application at: http://localhost:${port}`);
});

if (module.hot) {
  module.hot.accept('./server', () => {
    logger.info('🔁  HMR Reloading `./server`...');
    try {
      app = require('./server').default;
    } catch (error) {
      logger.error(error);
    }
  });
  logger.info('✅  Server-side HMR Enabled!');
}