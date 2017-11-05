import * as path from "path";
import * as express from "express";
import * as bodyParser from "body-parser";
import AttractionRouter from "./attraction/attraction-router";
import * as mongoose from "mongoose"; 
class App{

    public express: express.Application;
    
    constructor(){
        this.express = express();
        this.middleware();
        this.routes();
        //let connection: mongoose.MongooseThenable = mongoose.connect(this.MONGODB_CONNECTION);
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
        this.express.use('/attraction', AttractionRouter);
    } 
}

export default new App().express;