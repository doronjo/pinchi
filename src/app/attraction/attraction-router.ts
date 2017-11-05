import { NextFunction, Request, Response, Router } from "express";
import { Attraction } from "./repo/attraction";

export class AttractionRouter {

    router: Router; 

    constructor() {
        this.router = Router();
        this._init();
    }

    _getAttraction(res:Response, req:Request){
        console.log("I am here");
        Attraction.find({},(err, attractions)=>{
            console.log(err);
            console.log(attractions);
        })
    }   

    private _init(){
        this.router.get('/', this._getAttraction);
    } 
}

const  attractionRouter = new AttractionRouter();
export default attractionRouter.router;