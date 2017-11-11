import * as path from "path";
import * as express from "express";
import * as bodyParser from "body-parser";
import  "./inversify.config";
import attractionRouter from "./attraction/attraction-router";
import tagRouter from "./tag/tag-router";
import  mongoose = require("mongoose"); 

class App{

    public express: express.Application;
    
    constructor(){
        this.express = express();
        this.middleware();
        this.routes();
        mongoose.Promise = global.Promise;
    }

    private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
      }

    private routes(): void {
        let router = express.Router();
        router.get('/', (req, res, next) => {
          res.json({
            message: 'Hello World!'
          });
        });
        this.express.use('/', router);
        this.express.use('/attraction', attractionRouter);
        this.express.use('/tag', tagRouter);
    } 
}

export default new App().express;