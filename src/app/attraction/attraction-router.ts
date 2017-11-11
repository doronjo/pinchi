import { NextFunction, Request, Response, Router } from "express";
import { AtrractionController } from "./atrraction-controller"


export class AttractionRouter {

    router: Router; 
    private _attractionController:AtrractionController;
    constructor() {
        this._attractionController = AtrractionController.getInstance();
        this.router = Router();
        this._init();
    }
    
    private _init(){
        this.router.get('/', this._attractionController.getArraction);
    } 
}

const  attractionRouter = new AttractionRouter();
export default attractionRouter.router;