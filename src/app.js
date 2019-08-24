import express from 'express';
import routes from './routes';

import './database';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    console.log('teste');
  }

  routes() {
    this.server.use(routes);
  }
}
export default new App().server;
