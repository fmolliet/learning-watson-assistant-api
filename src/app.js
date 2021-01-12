// express
import express from 'express';
import cors    from 'cors';
import morgan  from 'morgan';
import dotenv  from 'dotenv';

const { config } = dotenv;

import routes     from './routes.js';

class App {
    constructor() {
        this.express = express();
        this.middlewares();
        config();
    }
    
    middlewares(){
        this.express.use(morgan('tiny'));
        this.express.use(express.json());
        this.express.use(cors());
        this.express.use('/', routes);
    }
}

export default new App().express;